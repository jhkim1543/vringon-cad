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
import { createHash } from "node:crypto";
import { SHAFT_SCHEMA, validateShaft, normalizeShaft } from "./js/shaft-schema.js";
import { silhouetteIoU2, dimensionConsistency, confidenceScore, dslSilhouette, silhouetteIoU } from "./js/shaft-verify.js";
import { EXTRACT_SYSTEM, buildExtractMessages, EXTRACT_RESPONSE_SCHEMA, loadFewShot, postprocessExtracted } from "./tools/extract-prompt.mjs";

const rootDir = fileURLToPath(new URL("./", import.meta.url));
const port = Number(process.argv[2] || process.env.PORT || 8349);

/* ------------------------------------------------------------ config (역할명만) */
let cfg = {};
for (const p of ["./config.local.json", "../config.local.json"]) {
  try { cfg = JSON.parse(await readFile(new URL(p, import.meta.url), "utf8")); console.log(`[cfg] ${p}`); break; } catch {}
}
const PRIMARY = { url: cfg.primary?.baseUrl || "", keys: [cfg.primary?.apiKey].filter(Boolean), text: cfg.primary?.textModel || "", plan: cfg.primary?.planModel || "" };
const FALLBACK = { url: cfg.fallback?.baseUrl || "", keys: [cfg.fallback?.apiKey, cfg.fallback?.spareApiKey].filter(Boolean), text: cfg.fallback?.textModel || "", plan: cfg.fallback?.planModel || "" };
const HAS_PRIMARY = !!(PRIMARY.url && PRIMARY.keys.length && PRIMARY.text);
const HAS_FALLBACK = !!(FALLBACK.url && FALLBACK.keys.length && FALLBACK.text);
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
  else if (t === "ARRAY") out.items = toPrimarySchema(s.items || { type: "string" });
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
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".woff2": "font/woff2", ".glb": "model/gltf-binary", ".step": "application/step", ".stp": "application/step", ".stl": "model/stl", ".dxf": "application/dxf", ".usda": "text/plain; charset=utf-8", ".md": "text/markdown; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".py": "text/plain; charset=utf-8" };
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
    if (path === "/api/status") return json(res, 200, { ok: true, mode: "live", extract: HAS_PRIMARY || HAS_FALLBACK, extract_provider: HAS_PRIMARY ? "primary" : HAS_FALLBACK ? "fallback" : null, step: HAS_STEP, fewshot: fewShot.length, version: "1.0" });
    if (path === "/api/schema") return json(res, 200, SHAFT_SCHEMA);
    if (req.method === "POST" && path === "/api/extract") return json(res, 200, await handleExtract(await readBody(req)));
    if (req.method === "POST" && path === "/api/step") {
      const body = await readBody(req);
      const { dir, id, summary } = await handleStep(body);
      const fmt = (body.download || "step").toLowerCase();
      const file = fmt === "usda" ? "model.usda" : fmt === "stl" ? "model.stl" : "model.step";
      const buf = await readFile(join(dir, file));
      res.writeHead(200, { "Content-Type": MIME["." + fmt] || "application/octet-stream", "Content-Disposition": `attachment; filename="${(body.dsl?.id || "shaft")}.${fmt}"`, "X-Executor-Summary": encodeURIComponent(JSON.stringify(summary)), "Cache-Control": "no-store" });
      return res.end(buf);
    }
    if (path.startsWith("/api/")) return json(res, 404, { error: "no such api" });
    if (path.startsWith("/data/") || path.includes("config.local") || path.includes("/.")) return json(res, 403, { error: "forbidden" });
    /* 정적 */
    let file = normalize(join(rootDir, path === "/" ? "index.html" : path));
    if (!file.startsWith(rootDir)) return json(res, 403, { error: "forbidden" });
    let st = null;
    try { st = await stat(file); } catch {}
    if (st?.isDirectory()) { file = join(file, "index.html"); try { st = await stat(file); } catch { st = null; } }
    if (!st) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("not found"); }
    const ext = extname(file).toLowerCase();
    /* 데모 서버는 항상 최신을 준다 — 브라우저가 옛 app.js 를 들고 있으면 판독 결과가 옛 UI 로 읽힌다 */
    const cache = [".html", ".json", ".js", ".mjs", ".css", ".svg"].includes(ext) ? "no-cache" : "public, max-age=3600";
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream", "Cache-Control": cache, "Content-Length": st.size });
    return res.end(await readFile(file));
  } catch (e) {
    console.error(`[${req.method} ${path}]`, e.message);
    return json(res, e.status || 500, { error: e.message });
  }
});
server.requestTimeout = 15 * 60 * 1000;
server.listen(port, () => console.log(`VRINGON 회전체 데모 — http://localhost:${port}  (${HAS_PRIMARY || HAS_FALLBACK ? "라이브 판독" : "정적 모드"}${HAS_STEP ? " · STEP 실행기" : ""})`));
