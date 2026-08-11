/* ==========================================================================
   Asset catalog store — the "keep this" half of the library.

   The reference architecture splits four responsibilities, and this module
   keeps that split visible even though the demo runs on one box:

     Object Storage        data/assets/files/<id>/…   STEP · GLB · USD · URDF · parts
     Asset Catalog DB      data/assets/<id>.json      ids · BOM · version · owner
     Assembly Knowledge    relations[] inside each record + cross-asset scan
     Search / Vector       text index + shape-signature cosine similarity

   Swapping any layer for S3 / Postgres / Neo4j / a vector DB later is a change
   of adapter, not of schema.
   ========================================================================== */
import { mkdir, readFile, writeFile, readdir, rm } from "node:fs/promises";
import { join } from "node:path";

const ASSET_KINDS = { glb: "glb", step: "step", usd: "usda", urdf: "urdf", mjcf: "xml", json: "json" };

export function makeAssetStore(rootDir) {
  const base = join(rootDir, "data", "assets");
  const filesDir = join(base, "files");
  const ready = mkdir(filesDir, { recursive: true }).catch(() => {});

  const recPath = (id) => join(base, `${safeId(id)}.json`);

  async function list() {
    await ready;
    const names = await readdir(base).catch(() => []);
    const out = [];
    for (const n of names) {
      if (!n.endsWith(".json")) continue;
      try {
        const r = JSON.parse(await readFile(join(base, n), "utf8"));
        out.push(assetSummary(r));
      } catch {}
    }
    /* Precision machined parts lead the catalogue: they are the reference for
       how a design sheet should read, so they should be the first thing seen.
       Everything else stays newest-first. */
    const lead = (x) => (x.category === "정밀 가공품" ? 0 : 1);
    return out.sort((a, b) =>
      lead(a) - lead(b) || (b.updatedAt || "").localeCompare(a.updatedAt || ""));
  }

  async function get(id) {
    await ready;
    return JSON.parse(await readFile(recPath(id), "utf8"));
  }

  async function put(record) {
    await ready;
    const id = safeId(record.assetId);
    record.assetId = id;
    record.updatedAt = new Date().toISOString();
    record.createdAt = record.createdAt || record.updatedAt;
    await writeFile(recPath(id), JSON.stringify(record, null, 2));
    return record;
  }

  /** store the derivative files themselves (object storage layer) */
  async function putFiles(id, files = {}) {
    await ready;
    const dir = join(filesDir, safeId(id));
    await mkdir(dir, { recursive: true });
    const written = {};
    for (const [kind, payload] of Object.entries(files)) {
      if (!payload) continue;
      const ext = ASSET_KINDS[kind] || "bin";
      const name = `${kind}.${ext}`;
      const isB64 = typeof payload === "string" && payload.startsWith("base64:");
      const buf = isB64 ? Buffer.from(payload.slice(7), "base64") : Buffer.from(String(payload), "utf8");
      await writeFile(join(dir, name), buf);
      written[kind] = { url: `/assets-data/${safeId(id)}/${name}`, bytes: buf.length };
    }
    return written;
  }

  async function putThumb(id, dataUri) {
    if (typeof dataUri !== "string" || !dataUri.startsWith("data:image/")) return null;
    await ready;
    const dir = join(filesDir, safeId(id));
    await mkdir(dir, { recursive: true });
    const b64 = dataUri.split(",")[1] || "";
    const buf = Buffer.from(b64, "base64");
    await writeFile(join(dir, "thumb.jpg"), buf);
    return `/assets-data/${safeId(id)}/thumb.jpg`;
  }

  async function remove(id) {
    await ready;
    await rm(recPath(id), { force: true });
    await rm(join(filesDir, safeId(id)), { recursive: true, force: true });
  }

  async function all() {
    await ready;
    const names = await readdir(base).catch(() => []);
    const out = [];
    for (const n of names) {
      if (!n.endsWith(".json")) continue;
      try { out.push(JSON.parse(await readFile(join(base, n), "utf8"))); } catch {}
    }
    return out;
  }

  return { list, get, put, putFiles, putThumb, remove, all, filesDir };
}

const safeId = (s) => String(s || "asset").toLowerCase().replace(/[^a-z0-9가-힣_-]/g, "-").slice(0, 60) || "asset";

export function assetSummary(r) {
  const b = r.basic || {};
  return {
    assetId: r.assetId, name: b.name || r.assetId, model: b.model || "",
    manufacturer: b.manufacturer || "", family: b.family || "", category: b.category || "기타",
    status: b.status || "draft", version: b.version || "1.0", owner: b.owner || "",
    thumb: r.thumb || null,
    links: (r.structure || []).length,
    joints: (r.relations || []).filter((e) => ["revolute_to", "prismatic_to", "fixed_to", "continuous_to"].includes(e.type)).length,
    readiness: r.readiness?.total ?? null,
    formats: Object.keys(r.files || {}),
    updatedAt: r.updatedAt, createdAt: r.createdAt,
    mass: (r.structure || []).reduce((n, s) => n + (s.mass || 0), 0),
  };
}

/* ------------------------------------------------------------------ search
   Three search modes over one corpus, all deterministic. A language model may
   translate the question into this filter, but never answers it — otherwise the
   catalogue would report parts that do not exist. */
export function searchAssets(assets, f = {}) {
  const q = String(f.q || "").trim().toLowerCase();
  const hits = [];
  const push = (a, score, reasons) => hits.push({ asset: assetSummary(a), score, reasons });

  for (const a of assets) {
    const b = a.basic || {};
    const reasons = [];
    let score = 0;

    if (f.category && b.category !== f.category) continue;
    if (f.status && b.status !== f.status) continue;
    if (f.manufacturer && !String(b.manufacturer).toLowerCase().includes(String(f.manufacturer).toLowerCase())) continue;

    /* free text over the catalogue, the part list and the documents */
    if (q) {
      const hay = [
        b.name, b.model, b.manufacturer, b.family, b.category, b.owner,
        ...(a.structure || []).map((s) => `${s.name} ${s.semanticType} ${s.material}`),
        ...(a.business?.bom || []).map((x) => `${x.partNo} ${x.name} ${x.supplier}`),
        ...(a.operations?.manuals || []).map((m) => `${m.title} ${m.summary || ""}`),
        ...(a.procedures || []).flatMap((p) => (p.steps || []).map((s) => `${s.instruction} ${s.targetPart} ${s.tool}`)),
      ].join(" ").toLowerCase();
      if (!hay.includes(q)) continue;
      score += 1;
      const inParts = (a.structure || []).filter((s) => `${s.name}`.toLowerCase().includes(q));
      if (inParts.length) reasons.push(`부품 일치: ${inParts.map((s) => s.name).slice(0, 3).join(", ")}`);
      if (`${b.name} ${b.model}`.toLowerCase().includes(q)) { score += 1; reasons.push("제품명·모델명 일치"); }
    }

    /* "이 부품이 사용된 모든 제품" */
    if (f.usesPart) {
      const p = String(f.usesPart).toLowerCase();
      const found = (a.structure || []).filter((s) => `${s.name}`.toLowerCase().includes(p)
        || `${s.semanticType}`.toLowerCase().includes(p));
      const bom = (a.business?.bom || []).filter((x) => `${x.partNo} ${x.name}`.toLowerCase().includes(p));
      if (!found.length && !bom.length) continue;
      score += 2;
      reasons.push(`이 부품을 포함: ${[...found.map((s) => s.name), ...bom.map((x) => x.partNo)].slice(0, 3).join(", ")}`);
    }

    /* 특정 재질이 사용된 파트 — 재질은 영문 키로 저장되므로 한국어 질의를 번역해서 맞춘다 */
    if (f.material) {
      const terms = materialTerms(f.material);
      const parts = (a.structure || []).filter((s) =>
        terms.some((t) => `${s.material}`.toLowerCase().includes(t)));
      if (!parts.length) continue;
      score += 1.5;
      reasons.push(`${f.material}(${parts[0].material}) 파트 ${parts.length}개: ${parts.map((s) => s.name).slice(0, 3).join(", ")}`);
    }

    /* 정비가 필요한 제품 (절차에 해당 부품 교체가 정의된 자산) */
    if (f.maintenanceOf) {
      const m = String(f.maintenanceOf).toLowerCase();
      const procs = (a.procedures || []).filter((p) =>
        (p.steps || []).some((s) => `${s.targetPart}`.toLowerCase().includes(m))
        || `${p.procedureId} ${p.title || ""}`.toLowerCase().includes(m));
      if (!procs.length) continue;
      score += 2;
      reasons.push(`정비 절차 보유: ${procs.map((p) => p.title || p.procedureId).slice(0, 2).join(", ")}`);
    }

    /* 호환·대체 관계 그래프 탐색 */
    if (f.compatibleWith) {
      const t = String(f.compatibleWith).toLowerCase();
      const rel = (a.relations || []).filter((e) => e.type === "compatible_with"
        && `${e.to} ${e.note || ""}`.toLowerCase().includes(t));
      if (!rel.length) continue;
      score += 2;
      reasons.push(`호환: ${rel.map((e) => e.to).slice(0, 3).join(", ")}`);
    }
    if (f.replacementFor) {
      const t = String(f.replacementFor).toLowerCase();
      const rel = (a.relations || []).filter((e) => e.type === "replaces"
        && `${e.to} ${e.note || ""}`.toLowerCase().includes(t));
      const bom = (a.business?.bom || []).filter((x) => x.discontinued
        && `${x.partNo} ${x.name}`.toLowerCase().includes(t) && x.replacement);
      if (!rel.length && !bom.length) continue;
      score += 2;
      reasons.push(bom.length ? `단종 대체품 지정: ${bom.map((x) => `${x.partNo}→${x.replacement}`).join(", ")}`
        : `대체 관계: ${rel.map((e) => e.to).join(", ")}`);
    }

    /* 특정 원본에서 파생된 파일 */
    if (f.derivedFrom) {
      const t = String(f.derivedFrom).toLowerCase();
      const rel = (a.relations || []).filter((e) => e.type === "derived_from" && `${e.to}`.toLowerCase().includes(t));
      const src = `${a.provenance?.sourceFile || ""}`.toLowerCase();
      if (!rel.length && !src.includes(t)) continue;
      score += 2;
      reasons.push(`파생 원본: ${rel[0]?.to || a.provenance?.sourceFile} → ${Object.keys(a.files || {}).join(", ")}`);
    }

    /* 3D 형상 유사 검색 — 컴파일러 실측값으로 만든 서명 벡터의 코사인 유사도 */
    if (Array.isArray(f.signature) && f.signature.length && Array.isArray(a.signature)) {
      const sim = cosine(f.signature, a.signature);
      if (sim < (f.minSimilarity ?? 0.86)) continue;
      score += sim * 3;
      reasons.push(`형상 유사도 ${(sim * 100).toFixed(1)}%`);
    }

    if (!q && !f.usesPart && !f.material && !f.maintenanceOf && !f.compatibleWith
      && !f.replacementFor && !f.derivedFrom && !(f.signature || []).length) {
      score = 0.1;                                   // plain browse
    }
    if (score > 0) push(a, score, reasons);
  }
  return hits.sort((x, y) => y.score - x.score);
}

/* Material vocabulary: the catalogue stores engineering keys, people ask in
   Korean (and in trade names). One table, both directions. */
const MATERIAL_SYNONYMS = {
  aluminum: ["알루미늄", "알루미늄합금", "al"],
  steel: ["강", "스틸", "탄소강", "철"],
  stainless: ["스테인리스", "스테인레스", "sus", "sts"],
  brass: ["황동", "브라스"], copper: ["구리", "동"],
  titanium: ["티타늄"], abs: ["abs", "플라스틱"], pla: ["pla"],
  nylon: ["나일론"], pc: ["폴리카보네이트", "pc"], pom: ["pom", "델린"],
  rubber: ["고무", "러버"], silicone: ["실리콘"], glass: ["유리", "글라스"],
  ceramic: ["세라믹"], wood: ["목재", "나무"], carbon: ["카본", "탄소섬유"],
  chrome: ["크롬"], gold: ["금"], silver: ["은"], matte: ["무광"],
};
export function materialTerms(q) {
  const s = String(q).toLowerCase().trim();
  const out = new Set([s]);
  for (const [key, syns] of Object.entries(MATERIAL_SYNONYMS)) {
    if (key === s || syns.some((x) => s.includes(x) || x.includes(s))) out.add(key);
  }
  return [...out];
}

/** Similarity for shape signatures.
    Cosine is the wrong metric here: every signature points in roughly the same
    direction (all components are positive, similar magnitude), so cosine
    reports ~100% for clearly different products. Normalised Euclidean distance
    over comparable 0..1 features actually discriminates. */
export function cosine(a, b) {
  const n = Math.min(a.length, b.length);
  if (!n) return 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const d = (a[i] || 0) - (b[i] || 0);
    sum += d * d;
  }
  const dist = Math.sqrt(sum / n);            // rms difference per feature
  return Math.max(0, 1 - dist * 2.2);         // 0.45 rms apart ⇒ unrelated
}
