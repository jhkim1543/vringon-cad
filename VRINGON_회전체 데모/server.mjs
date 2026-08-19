/* VRINGON 회전체 — 온프레미스 서버 (의존성 없음)
   • 정적 데모 서빙(같은 index.html 이 서버를 감지하면 라이브 모드로 켜진다)
   • POST /api/extract : 도면 이미지 → DSL. 시각 LLM(1차 LLM, 실패 시 폴백 LLM) + 스키마 제약 + 골든 few-shot
                         + 브라우저 실루엣 힌트 + 검증(스키마·기하·실루엣 IoU) + 1회 수리 루프
   • POST /api/step    : DSL → 해석적 B-rep STEP (pipeline/executor.py, CadQuery) — 파이썬 환경이 있을 때만
   • GET  /api/status  : 어떤 기능이 살아 있는지
   키·엔드포인트·모델명은 ../config.local.json(또는 ./config.local.json)에만 있고 코드에는 역할명만 쓴다.
   실행: node server.mjs [port]   (기본 8349) */

import { createServer } from "node:http";
import { readFile, writeFile, mkdir, appendFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash, timingSafeEqual } from "node:crypto";
import { SHAFT_SCHEMA, validateShaft, normalizeShaft } from "./js/shaft-schema.js";
import { silhouetteIoU2, dimensionConsistency, confidenceScore, dslSilhouette, silhouetteIoU } from "./js/shaft-verify.js";
import { EXTRACT_SYSTEM, buildExtractMessages, EXTRACT_RESPONSE_SCHEMA, loadFewShot, postprocessExtracted } from "./tools/extract-prompt.mjs";
import { DESCRIBE_RESPONSE_SCHEMA, buildDescribeMessages } from "./tools/describe-prompt.mjs";
import { SCULPT_SCHEMA, buildSculptMessages } from "./tools/sculpt-prompt.mjs";

const rootDir = fileURLToPath(new URL("./", import.meta.url));
const port = Number(process.argv[2] || process.env.PORT || 8349);

/* ------------------------------------------------------------ config (역할명만) */
let cfg = {};
for (const p of ["./config.local.json", "../config.local.json"]) {
  try { cfg = JSON.parse(await readFile(new URL(p, import.meta.url), "utf8")); console.log(`[cfg] ${p}`); break; } catch {}
}
/* 외부 호스팅(컨테이너·PaaS)에서는 파일 대신 환경변수로 준다. 역할명만 쓰고 공급사 이름은 코드에 넣지 않는다. */
const env = process.env;
const fromEnv = (role) => ({
  baseUrl: env[`VRINGON_${role}_URL`] || "", apiKey: env[`VRINGON_${role}_KEY`] || "",
  spareApiKey: env[`VRINGON_${role}_KEY2`] || "", textModel: env[`VRINGON_${role}_TEXT_MODEL`] || "", planModel: env[`VRINGON_${role}_PLAN_MODEL`] || "",
});
for (const [k, role] of [["primary", "PRIMARY"], ["fallback", "FALLBACK"]]) {
  const e = fromEnv(role);
  if (e.baseUrl && e.apiKey) { cfg[k] = { ...(cfg[k] || {}), ...Object.fromEntries(Object.entries(e).filter(([, v]) => v)) }; console.log(`[cfg] ${k} ← 환경변수`); }
}
const PRIMARY = { url: cfg.primary?.baseUrl || "", keys: [cfg.primary?.apiKey].filter(Boolean), text: cfg.primary?.textModel || "", plan: cfg.primary?.planModel || "" };
const FALLBACK = { url: cfg.fallback?.baseUrl || "", keys: [cfg.fallback?.apiKey, cfg.fallback?.spareApiKey].filter(Boolean), text: cfg.fallback?.textModel || "", plan: cfg.fallback?.planModel || "" };
const HAS_PRIMARY = !!(PRIMARY.url && PRIMARY.keys.length && PRIMARY.text);
const HAS_FALLBACK = !!(FALLBACK.url && FALLBACK.keys.length && FALLBACK.text);
/* 외부에 공개할 때는 보호 빌드(../docs/revolve)를 서빙한다: VRINGON_STATIC=../docs/revolve */
const STATIC = env.VRINGON_STATIC ? join(normalize(join(rootDir, env.VRINGON_STATIC)), "/") : rootDir;
/* 링크를 아는 사람만 쓰게 하려면 VRINGON_ACCESS_CODE 를 준다(빈 값이면 공개). */
const ACCESS = env.VRINGON_ACCESS_CODE || "";
/* 외부 도메인 뒤에서 돌 때 켠다(deploy/.env 에서 VRINGON_PUBLIC=1).
   · 개발용 /__save 를 끈다 — 리버스 프록시 뒤에서는 remoteAddress 가 늘 프록시라 "루프백 전용" 검사가 통하지 않는다
   · 접근 코드 쿠키에 Secure 를 붙인다 (HTTPS 에서만 보낸다)
   · 보안 헤더를 붙인다 (프록시가 붙이지 않을 때를 대비해 앱에서도)
   Set VRINGON_PUBLIC=1 when running behind the public domain.
   · Disables the dev-only /__save: behind a reverse proxy remoteAddress is always the proxy, so the loopback check is void
   · Marks the access cookie Secure (HTTPS only)
   · Adds security headers at the app too, in case the proxy does not */
const PUBLIC = /^(1|true|yes)$/i.test(env.VRINGON_PUBLIC || "");
const SEC_HEADERS = { "X-Content-Type-Options": "nosniff", "X-Frame-Options": "SAMEORIGIN", "Referrer-Policy": "no-referrer", "Permissions-Policy": "camera=(), microphone=(), geolocation=()" };
const ACCESS_HASH = ACCESS ? createHash("sha256").update(`vringon:${ACCESS}`).digest("hex").slice(0, 32) : "";
/* AI 판독은 호출당 비용이 든다: 주소당 시간 제한 (0 이면 무제한) */
const RATE = Number(env.VRINGON_RATE_PER_HOUR ?? 30);
const hits = new Map();
function rateOk(ip) {
  if (!RATE) return true;
  const now = Date.now(), h = (hits.get(ip) || []).filter((t) => now - t < 3600e3);
  if (h.length >= RATE) { hits.set(ip, h); return false; }
  h.push(now); hits.set(ip, h); return true;
}
const PY = ["pipeline/.venv/Scripts/python.exe", "pipeline/.venv/bin/python", "pipeline/venv/bin/python"].map((p) => join(rootDir, p)).find((p) => existsSync(p)) || null;
const HAS_STEP = !!PY && existsSync(join(rootDir, "pipeline/executor.py"));
console.log(`[status] extract: ${HAS_PRIMARY ? "1차 LLM" : HAS_FALLBACK ? "폴백 LLM" : "없음"} · step: ${HAS_STEP ? "python 실행기" : "없음"}`);

/* ------------------------------------------------------------ 시각 LLM 호출 (역할 통합) */
function toPrimarySchema(s) {
  if (!s || typeof s !== "object") return s;
  const types = Array.isArray(s.type) ? s.type : [s.type || "object"];
  const nullable = types.includes("null");
  const t = String(types.find((x) => x !== "null") || "string").toUpperCase();
  const out = { type: t };
  if (nullable) out.nullable = true;
  if (s.description) out.description = s.description;
  if (s.enum) out.enum = s.enum;
  if (t === "OBJECT") { if (!s.properties) return { type: "STRING" }; out.properties = Object.fromEntries(Object.entries(s.properties).map(([k, v]) => [k, toPrimarySchema(v)])); if (s.required) out.required = s.required; }
  else if (t === "ARRAY") {
    out.items = toPrimarySchema(s.items || { type: "string" });
    /* 개수 제한을 빠뜨리면 "최소 2개" 같은 약속이 조용히 사라진다 (실측: 부품 트리가 1개짜리로 왔다).
       Dropping the count limits silently discards promises like "at least two" (seen: a one-part tree). */
    if (s.minItems !== undefined) out.minItems = s.minItems;
    if (s.maxItems !== undefined) out.maxItems = s.maxItems;
  }
  return out;
}
function toPrimaryContents(messages) {
  const sys = messages.filter((m) => m.role === "system").map((m) => m.content).join("\n\n");
  const contents = [];
  for (const m of messages) {
    if (m.role === "system") continue;
    const parts = [];
    if (typeof m.content === "string") parts.push({ text: m.content });
    else for (const c of m.content || []) {
      if (c.type === "text") parts.push({ text: c.text });
      else if (c.type === "image_url") { const m2 = /^data:([^;]+);base64,(.+)$/.exec(c.image_url?.url || ""); if (m2) parts.push({ inlineData: { mimeType: m2[1], data: m2[2] } }); }
    }
    if (parts.length) contents.push({ role: m.role === "assistant" ? "model" : "user", parts });
  }
  return { sys, contents };
}
async function callPrimary(messages, schema, { model, maxTokens = 8192, thinking = null, timeoutMs = 120000 } = {}) {
  const { sys, contents } = toPrimaryContents(messages);
  let lastErr = null;
  for (const key of PRIMARY.keys) {
    try {
      const generationConfig = { maxOutputTokens: maxTokens, responseMimeType: "application/json", responseSchema: toPrimarySchema(schema), temperature: 0.4 };
      if (thinking) generationConfig.thinkingConfig = { thinkingLevel: thinking };
      const r = await fetch(`${PRIMARY.url}/v1beta/models/${model}:generateContent`, {
        method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": key }, signal: AbortSignal.timeout(timeoutMs),
        body: JSON.stringify({ contents, systemInstruction: sys ? { parts: [{ text: sys }] } : undefined, generationConfig }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error?.message || `primary ${r.status}`);
      const text = (j.candidates?.[0]?.content?.parts || []).map((p) => p.text || "").join("");
      if (!text) throw new Error("primary: empty response");
      return { json: JSON.parse(text), provider: "primary", usage: j.usageMetadata || null };
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error("primary: no key");
}
async function callFallback(messages, schema, { model, maxTokens = 8192, timeoutMs = 120000 } = {}) {
  let lastErr = null;
  for (const key of FALLBACK.keys) {
    try {
      const r = await fetch(`${FALLBACK.url}/v1/chat/completions`, {
        method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` }, signal: AbortSignal.timeout(timeoutMs),
        body: JSON.stringify({ model, messages, temperature: 0.3, max_tokens: Math.min(maxTokens, 16000), response_format: { type: "json_schema", json_schema: { name: "shaft_extraction", strict: false, schema } } }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error?.message || `fallback ${r.status}`);
      return { json: JSON.parse(j.choices[0].message.content), provider: "fallback", usage: j.usage || null };
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error("fallback: no key");
}
async function callVision(messages, schema, tier = "text") {
  const errors = [];
  if (HAS_PRIMARY) {
    try {
      const model = tier === "plan" ? (PRIMARY.plan || PRIMARY.text) : PRIMARY.text;
      return await callPrimary(messages, schema, { model, thinking: tier === "plan" ? "high" : null, maxTokens: tier === "plan" ? 32000 : 12000, timeoutMs: tier === "plan" ? 240000 : 120000 });
    } catch (e) { errors.push(`primary: ${e.message}`); console.error("[llm] primary 실패:", e.message); }
  }
  if (HAS_FALLBACK) {
    try { return await callFallback(messages, schema, { model: tier === "plan" ? (FALLBACK.plan || FALLBACK.text) : FALLBACK.text }); }
    catch (e) { errors.push(`fallback: ${e.message}`); console.error("[llm] fallback 실패:", e.message); }
  }
  throw new Error(errors.length ? errors.join(" | ") : "판독 모델이 설정되어 있지 않습니다 (config.local.json)");
}

/* ------------------------------------------------------------ 판독 파이프라인 */
const fewShot = await loadFewShot(rootDir).catch((e) => { console.warn("[fewshot] 없음:", e.message); return []; });
console.log(`[fewshot] ${fewShot.length}개`);

function scoreResult(dsl, hints, dimsRead) {
  const v = validateShaft(dsl);
  let iou = null;
  if (v.ok && hints?.silhouette?.top?.length) iou = silhouetteIoU2({ L: hints.silhouette.L, top: hints.silhouette.top, bottom: hints.silhouette.bottom }, dsl);
  const dims = v.ok && dimsRead?.length ? dimensionConsistency(dsl, dimsRead) : null;
  const confidence = confidenceScore({ iou, dimRate: dims ? dims.rate : null, valid: v.ok, warnings: v.warnings?.length || 0 });
  return { validation: v, iou, dims, confidence };
}

async function handleExtract(body) {
  const t0 = Date.now();
  const image = typeof body.imageB64 === "string" && body.imageB64.startsWith("data:image/") && body.imageB64.length < 12_000_000 ? body.imageB64 : null;
  if (!image) throw Object.assign(new Error("imageB64 (data:image/…) 가 필요합니다"), { status: 400 });
  const tier = body.tier === "plan" ? "plan" : "text";
  const hints = body.hints || null;
  const overallLength = Number(body.overallLength) || null;
  const messages = buildExtractMessages({ image, hints, overallLength, fewShot });
  const first = await callVision(messages, EXTRACT_RESPONSE_SCHEMA, tier);
  let out = first.json || {};
  /* 회전체가 아니라고 판단하면 억지 형상 대신 사유를 돌려준다 */
  if (!Array.isArray(out.dsl?.segments) || out.dsl.segments.length === 0) {
    const notes = Array.isArray(out.notes) ? out.notes : [];
    const reason = notes.find((n) => /회전체 아님|not a? ?revol|not turned/i.test(String(n))) || notes[0] || "판독기가 회전체 정면도로 보지 않았습니다.";
    try { await mkdir(join(rootDir, "data"), { recursive: true }); await appendFile(join(rootDir, "data/telemetry.jsonl"), JSON.stringify({ ts: new Date().toISOString(), kind: "extract", not_revolve: true, tier, provider: first.provider, ms: Date.now() - t0, reason }) + "\n"); } catch {}
    return { not_revolve: true, reason, notes, dims_read: Array.isArray(out.dims_read) ? out.dims_read : [], provider: first.provider, tier, elapsed_ms: Date.now() - t0 };
  }
  let dsl = normalizeShaft(postprocessExtracted(out.dsl || {}));
  if (!dsl.id) dsl.id = "extracted";
  dsl.meta = { ...(dsl.meta || {}), source: "extracted", provider: first.provider, tier };
  let dimsRead = Array.isArray(out.dims_read) ? out.dims_read : [];
  let score = scoreResult(dsl, hints, dimsRead);
  let repaired = false, repairNote = null;
  /* 수리 루프: 유효하지 않거나 실루엣이 크게 어긋나면 오류·측정치를 넣어 1회 재생성 */
  const dimGap = score.dims && score.dims.rate !== null && score.dims.rate < 0.9 && score.dims.unmatched.length ? score.dims.unmatched : null;
  const needRepair = !score.validation.ok || (score.iou !== null && score.iou < 0.85) || !!dimGap;
  if (needRepair) {
    const problems = [];
    if (!score.validation.ok) problems.push(`실행기 검증 오류:\n- ${score.validation.errors.join("\n- ")}`);
    if (score.iou !== null && score.iou < 0.85) problems.push(`실루엣 불일치: 판독한 DSL 을 다시 그린 외형과 도면에서 측정한 외형의 IoU 가 ${score.iou.toFixed(2)} 입니다(0.85 미만). 세그먼트 수·길이 비율·지름 비율을 측정 힌트에 맞추세요.`);
    if (dimGap) problems.push(`읽었다고 보고한 치수 중 DSL 에 반영되지 않은 것이 있다: ${dimGap.map((u) => `'${u.text || u.value}'(${u.kind || "?"})`).join(", ")}. 각 치수가 어느 피처(횡구멍·홈·키홈·모따기·보어…)의 값인지 다시 보고 DSL 에 넣거나, 실제로 도면에 없다면 dims_read 에서 빼라.`);
    const repairMsgs = buildExtractMessages({ image, hints, overallLength, fewShot, repair: { previous: out, problems } });
    try {
      const second = await callVision(repairMsgs, EXTRACT_RESPONSE_SCHEMA, tier);
      const dsl2 = normalizeShaft(postprocessExtracted(second.json?.dsl || {}));
      dsl2.id = dsl.id; dsl2.meta = { ...(dsl2.meta || {}), source: "extracted", provider: second.provider, tier, repaired: true };
      const dims2 = Array.isArray(second.json?.dims_read) ? second.json.dims_read : dimsRead;
      const score2 = scoreResult(dsl2, hints, dims2);
      /* 둘 중 나은 것을 채택 (유효성 우선, 다음 신뢰도) */
      const better = (score2.validation.ok && !score.validation.ok) || (score2.validation.ok === score.validation.ok && score2.confidence >= score.confidence);
      repairNote = `수리 라운드: ${better ? "채택" : "기각"} (신뢰도 ${score.confidence.toFixed(2)} → ${score2.confidence.toFixed(2)})`;
      if (better) { out = second.json; dsl = dsl2; dimsRead = dims2; score = score2; repaired = true; }
    } catch (e) { repairNote = `수리 라운드 실패: ${e.message}`; }
  }
  const result = {
    dsl, dims_read: dimsRead, notes: [...(Array.isArray(out.notes) ? out.notes : []), ...(repairNote ? [repairNote] : [])],
    confidence_self: typeof out.confidence === "number" ? out.confidence : null,
    provider: dsl.meta.provider, tier, repaired, elapsed_ms: Date.now() - t0,
    validation: { ok: score.validation.ok, errors: score.validation.errors, warnings: score.validation.warnings },
    verify: { iou: score.iou, dims: score.dims ? { rate: score.dims.rate, matched: score.dims.matched, total: score.dims.total, unmatched: score.dims.unmatched.map((u) => u.text || u.value) } : null, confidence: score.confidence },
  };
  /* SFT 쌍 기록 (이미지는 해시 파일로, 키·벤더 없음) */
  try {
    await mkdir(join(rootDir, "data/uploads"), { recursive: true });
    const hash = createHash("sha256").update(image).digest("hex").slice(0, 16);
    const m = /^data:image\/(\w+);base64,(.+)$/.exec(image);
    if (m && !existsSync(join(rootDir, `data/uploads/${hash}.${m[1]}`))) await writeFile(join(rootDir, `data/uploads/${hash}.${m[1]}`), Buffer.from(m[2], "base64"));
    await appendFile(join(rootDir, "data/telemetry.jsonl"), JSON.stringify({ ts: new Date().toISOString(), kind: "extract", image: hash, tier, provider: result.provider, ms: result.elapsed_ms, valid: result.validation.ok, iou: result.verify.iou, dim_rate: result.verify.dims?.rate ?? null, confidence: result.verify.confidence, repaired, dsl, dims_read: dimsRead }) + "\n");
  } catch (e) { console.warn("[telemetry]", e.message); }
  return result;
}

/* ------------------------------------------------------------ STEP (python 실행기) */
async function handleStep(body) {
  if (!HAS_STEP) throw Object.assign(new Error("서버에 파이썬 실행기가 없습니다 (pipeline/.venv). 브라우저의 면분할 STEP 을 쓰세요."), { status: 501 });
  const dsl = normalizeShaft(body.dsl || {});
  const v = validateShaft(dsl);
  if (!v.ok) throw Object.assign(new Error(`DSL 오류: ${v.errors.join(" / ")}`), { status: 400 });
  await mkdir(join(rootDir, "data/tmp"), { recursive: true });
  const id = createHash("sha1").update(JSON.stringify(dsl)).digest("hex").slice(0, 12);
  const dir = join(rootDir, "data/tmp", id);
  await mkdir(dir, { recursive: true });
  const inPath = join(dir, "dsl.json");
  await writeFile(inPath, JSON.stringify(dsl));
  const formats = body.formats || "step";
  await new Promise((resolve, reject) => {
    const p = spawn(PY, [join(rootDir, "pipeline/executor.py"), inPath, "--out", dir, "--formats", formats], { cwd: join(rootDir, "pipeline") });
    let err = "";
    p.stderr.on("data", (d) => (err += d));
    const t = setTimeout(() => { p.kill(); reject(new Error("실행기 시간 초과(120초)")); }, 120000);
    p.on("close", (code) => { clearTimeout(t); code === 0 ? resolve() : reject(new Error(`실행기 종료 코드 ${code}: ${err.slice(-600)}`)); });
    p.on("error", (e) => { clearTimeout(t); reject(e); });
  });
  const summary = JSON.parse(await readFile(join(dir, "summary.json"), "utf8"));
  return { dir, id, summary };
}

/* ------------------------------------------------------------ http */
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".woff2": "font/woff2", ".glb": "model/gltf-binary", ".step": "application/step", ".stp": "application/step", ".stl": "model/stl", ".dxf": "application/dxf", ".usda": "text/plain; charset=utf-8", ".usdc": "model/vnd.usd", ".usdz": "model/vnd.usdz+zip", ".fbx": "application/octet-stream", ".ply": "text/plain; charset=utf-8", ".md": "text/markdown; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".py": "text/plain; charset=utf-8" };
async function readBody(req, limit = 16e6) {
  return new Promise((resolve, reject) => {
    const chunks = []; let n = 0;
    req.on("data", (c) => { n += c.length; if (n > limit) { reject(Object.assign(new Error("본문이 너무 큽니다"), { status: 413 })); req.destroy(); } else chunks.push(c); });
    req.on("end", () => { try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {}); } catch (e) { reject(Object.assign(new Error("JSON 본문이 아닙니다"), { status: 400 })); } });
    req.on("error", reject);
  });
}
const json = (res, status, obj) => { res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }); res.end(JSON.stringify(obj)); };

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = decodeURIComponent(url.pathname);
  try {
    /* 접근 코드: 맞으면 쿠키를 주고, 없으면 입력 화면만 보여 준다 */
    if (ACCESS) {
      const ok = (req.headers.cookie || "").includes(`vr_access=${ACCESS_HASH}`);
      if (req.method === "POST" && path === "/api/access") {
        const body = await readBody(req);
        /* 길이가 다르면 timingSafeEqual 이 던지므로 같은 길이로 맞춰 비교한다. 틀리면 잠깐 기다리게 해 추측을 늦춘다.
           timingSafeEqual throws on unequal lengths, so compare at a fixed length; a short wait on failure slows guessing. */
        const given = createHash("sha256").update(String(body.code || "")).digest(), want = createHash("sha256").update(ACCESS).digest();
        if (!timingSafeEqual(given, want)) { await new Promise((r) => setTimeout(r, 600)); return json(res, 401, { error: "코드가 맞지 않습니다" }); }
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8", "Set-Cookie": `vr_access=${ACCESS_HASH}; Path=/; Max-Age=604800; HttpOnly; SameSite=Lax${PUBLIC ? "; Secure" : ""}`, "Cache-Control": "no-store", ...SEC_HEADERS });
        return res.end(JSON.stringify({ ok: true }));
      }
      if (!ok) {
        if (path.startsWith("/api/")) return json(res, 401, { error: "접근 코드가 필요합니다" });
        res.writeHead(401, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", ...SEC_HEADERS });
        return res.end(GATE_HTML);
      }
    }
    if (path === "/api/status") return json(res, 200, { ok: true, mode: "live", sculpt: HAS_PRIMARY || HAS_FALLBACK, extract: HAS_PRIMARY || HAS_FALLBACK, extract_provider: HAS_PRIMARY ? "primary" : HAS_FALLBACK ? "fallback" : null, step: HAS_STEP, fewshot: fewShot.length, version: "1.0" });
    if (path === "/api/schema") return json(res, 200, SHAFT_SCHEMA);
    /* 부품 해석: 이미지 + 사양 + OCR 토큰 → 근거 달린 해석 */
    if (req.method === "POST" && path === "/api/describe") {
      const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress || "?";
      if (!rateOk(ip)) return json(res, 429, { error: `요청이 시간당 ${RATE}회를 넘었습니다.` });
      const body = await readBody(req);
      if (!body.imageB64 || !body.dsl) return json(res, 400, { error: "imageB64 와 dsl 이 필요합니다" });
      const t0 = Date.now();
      const msgs = buildDescribeMessages({ image: body.imageB64, dsl: body.dsl, ocrTokens: body.ocrTokens || [], partType: body.partType || "", dims_read: body.dims_read || [], lang: body.lang === "en" ? "en" : "ko" });
      const out = await callVision(msgs, DESCRIBE_RESPONSE_SCHEMA, "text");
      const j = out.json || out;
      return json(res, 200, { ...j, provider: out.provider, elapsed_ms: Date.now() - t0 });
    }
    /* Part 3: 설명 한 줄이나 사진 한 장 → 부품 트리 사양.
       키는 여기(서버)에만 있다. 브라우저는 결과 사양만 받는다.
       Part 3: one sentence or one photo → a part-tree spec. The key lives here; the browser only
       ever receives the resulting spec. */
    if (req.method === "POST" && path === "/api/sculpt") {
      const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress || "?";
      if (!rateOk(ip)) return json(res, 429, { error: `요청이 시간당 ${RATE}회를 넘었습니다.` });
      const body = await readBody(req);
      const prompt = String(body.prompt || "").slice(0, 400);
      if (!prompt && !body.image) return json(res, 400, { error: "prompt 나 image 가 필요합니다" });
      const t0 = Date.now();
      const msgs = buildSculptMessages({ prompt, image: body.image || null, lang: body.lang === "en" ? "en" : "ko" });
      let out = await callVision(msgs, SCULPT_SCHEMA, "text");
      let spec = out.json || out;
      /* 한 번 되짚는다. 판독 쪽과 같은 수리 루프다. 실제로 겪은 세 가지를 본다:
         부품이 하나뿐(보여 줄 파트가 없다) · 없는 소켓을 가리킴(자식이 제자리에 안 붙는다) ·
         크기 힌트 없음(의자가 100mm 로 나온다).
         One repair pass, the same loop the reader uses, checking the three things actually seen:
         a single-part tree, attachments pointing at sockets the parent never defined, and a missing
         scale hint (which made a chair come out 100 mm tall). */
      const problems = (sp) => {
        const p = [];
        const tree = sp?.componentTree || [];
        if (tree.length < 2) p.push("부품이 하나뿐이다. 손잡이·다리·뚜껑·받침처럼 이름 붙일 수 있는 것은 따로 둔다. 최소 2개.");
        const byId = new Map(tree.map((c) => [c.id, c]));
        for (const c of tree) {
          const ps = c.attachment?.parentSocket;
          if (!ps) continue;
          const parent = byId.get(c.parent);
          if (!parent) p.push(`${c.id}: parent "${c.parent}" 가 componentTree 에 없다.`);
          else if (!(parent.sockets || []).some((k) => k.id === ps))
            p.push(`${c.id}: attachment.parentSocket "${ps}" 를 가리키는데 부모 "${parent.id}" 에 그 소켓이 없다. 부모의 sockets 에 그 자리를 점으로 넣어라.`);
        }
        if (!(sp?.scaleHint?.longestSide_mm > 0)) p.push("scaleHint.longestSide_mm 이 없다. 실제 크기를 mm 로 어림해서 넣어라.");
        return p;
      };
      const bad = problems(spec);
      if (bad.length) {
        const again = [...msgs, { role: "user", content: [{ type: "text",
          text: "방금 쓴 사양에 다음 문제가 있다. 고쳐서 전체를 다시 써라.\n- " + bad.join("\n- ") }] }];
        try {
          const retry = await callVision(again, SCULPT_SCHEMA, "text");
          const s2 = retry.json || retry;
          if (problems(s2).length < bad.length) { out = retry; spec = s2; }
        } catch (e) { console.error("[sculpt] 수리 실패:", e.message); }
      }
      spec.repaired = bad.length ? bad.length - problems(spec).length : 0;
      /* 서버가 형식을 한 번 맞춰 둔다. 조립기가 보는 표식이라 여기서 채운다.
         The server stamps the format markers the assembler looks for. */
      spec.spec = "img2threejs/ObjectSculptSpec";
      spec.specVersion = "1.5-beta-subset";
      spec.source = { kind: body.image ? "image" : "prompt", text: prompt };
      return json(res, 200, { spec, provider: out.provider, elapsed_ms: Date.now() - t0 });
    }
    if (req.method === "POST" && path === "/api/extract") {
      const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress || "?";
      if (!rateOk(ip)) return json(res, 429, { error: `판독 요청이 시간당 ${RATE}회를 넘었습니다. 잠시 후 다시 시도해 주세요.` });
      return json(res, 200, await handleExtract(await readBody(req)));
    }
    if (req.method === "POST" && path === "/api/step") {
      const body = await readBody(req);
      const { dir, id, summary } = await handleStep(body);
      const fmt = (body.download || "step").toLowerCase();
      const file = fmt === "usda" ? "model.usda" : fmt === "usdc" ? "model.usdc" : fmt === "stl" ? "model.stl" : "model.step";
      const buf = await readFile(join(dir, file));
      res.writeHead(200, { "Content-Type": MIME["." + fmt] || "application/octet-stream", "Content-Disposition": `attachment; filename="${(body.dsl?.id || "shaft")}.${fmt}"`, "X-Executor-Summary": encodeURIComponent(JSON.stringify(summary)), "Cache-Control": "no-store" });
      return res.end(buf);
    }
    /* 개발용 화면 저장 (루프백 전용): 브라우저가 캔버스 dataURL 을 보내면 data/shots/ 에 쓴다.
       QA 스크린샷 말고는 쓰지 않으며, 외부 주소에서 오면 거부한다. */
    if (req.method === "POST" && path === "/__save") {
      if (PUBLIC) return json(res, 404, { error: "not found" });
      const ra = req.socket.remoteAddress || "";
      if (!/^(::1|::ffff:127\.0\.0\.1|127\.0\.0\.1)$/.test(ra)) return json(res, 403, { error: "loopback only" });
      const body = await readBody(req, 64e6);
      const name = String(body.name || "shot").replace(/[^A-Za-z0-9_.-]/g, "_");
      await mkdir(join(rootDir, "data/shots"), { recursive: true });
      /* QA: 화면(dataURL) 또는 임의 파일(base64) — 브라우저에서 만든 내보내기 파일을 외부 판독기로 검사할 때 쓴다 */
      if (body.base64) { const file = join(rootDir, "data/shots", name); await writeFile(file, Buffer.from(String(body.base64), "base64")); return json(res, 200, { ok: true, file: `data/shots/${name}` }); }
      const m = /^data:image\/(png|jpeg|webp);base64,(.+)$/.exec(String(body.dataUrl || ""));
      if (!m) return json(res, 400, { error: "dataUrl 또는 base64 가 필요합니다" });
      const file = join(rootDir, "data/shots", `${name}.${m[1] === "jpeg" ? "jpg" : m[1]}`);
      await writeFile(file, Buffer.from(m[2], "base64"));
      return json(res, 200, { ok: true, file: `data/shots/${name}.${m[1] === "jpeg" ? "jpg" : m[1]}` });
    }
    if (path.startsWith("/api/")) return json(res, 404, { error: "no such api" });
    if (path.startsWith("/data/") || path.includes("config.local") || path.includes("/.")) return json(res, 403, { error: "forbidden" });
    /* 정적 */
    let file = normalize(join(STATIC, path === "/" ? "index.html" : path));
    if (!file.startsWith(STATIC)) return json(res, 403, { error: "forbidden" });
    /* 점으로 시작하는 파일·폴더(.env, .git …)는 어떤 경우에도 내보내지 않는다 / never serve dotfiles */
    if (path.split("/").some((seg) => seg.startsWith(".") && seg !== "." && seg !== "..")) return json(res, 404, { error: "not found" });
    let st = null;
    try { st = await stat(file); } catch {}
    if (st?.isDirectory()) { file = join(file, "index.html"); try { st = await stat(file); } catch { st = null; } }
    if (!st) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("not found"); }
    const ext = extname(file).toLowerCase();
    /* 데모 서버는 항상 최신을 준다 — 브라우저가 옛 app.js 를 들고 있으면 판독 결과가 옛 UI 로 읽힌다 */
    const cache = [".html", ".json", ".js", ".mjs", ".css", ".svg"].includes(ext) ? "no-cache" : "public, max-age=3600";
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream", "Cache-Control": cache, "Content-Length": st.size, ...SEC_HEADERS });
    return res.end(await readFile(file));
  } catch (e) {
    console.error(`[${req.method} ${path}]`, e.message);
    return json(res, e.status || 500, { error: e.message });
  }
});
/* 접근 코드 입력 화면 (외부 공유용, 코드가 설정된 경우에만 뜬다) */
const GATE_HTML = `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>VRINGON CAD</title><style>body{margin:0;height:100vh;display:grid;place-items:center;background:#0C0C10;color:#E8E8ED;font-family:Pretendard,system-ui,sans-serif}
form{width:300px;text-align:center}b{font-size:15px}p{color:#9A9AA6;font-size:13px;margin:8px 0 16px}
input{width:100%;padding:10px 12px;border-radius:8px;border:1px solid #2A2A33;background:#141419;color:#E8E8ED;font-size:14px;box-sizing:border-box}
button{width:100%;margin-top:9px;padding:10px;border:0;border-radius:8px;background:#5B6BF0;color:#fff;font-size:14px;font-weight:600;cursor:pointer}
.m{color:#F0716B;font-size:12.5px;height:16px;margin-top:8px}</style></head><body>
<form onsubmit="event.preventDefault();fetch('/api/access',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code:this.code.value})}).then(r=>r.ok?location.reload():document.querySelector('.m').textContent='코드가 맞지 않습니다')">
<b>VRINGON CAD</b><p>접근 코드를 입력하세요</p><input name="code" type="password" autofocus /><button>들어가기</button><div class="m"></div></form></body></html>`;

server.requestTimeout = 15 * 60 * 1000;
server.listen(port, env.HOST || undefined, () => console.log(`VRINGON 회전체 데모 — http://localhost:${port}  (${HAS_PRIMARY || HAS_FALLBACK ? "라이브 판독" : "정적 모드"}${HAS_STEP ? " · STEP 실행기" : ""}${ACCESS ? " · 접근 코드" : ""}${STATIC !== rootDir ? ` · 정적: ${STATIC}` : ""})`));
