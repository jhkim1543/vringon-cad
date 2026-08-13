/* ==========================================================================
   Which part is costing the silhouette score?

   similarity.mjs says how far the compiled CAD is from the shape it should
   reproduce. It does not say which of the eighteen parts is responsible, and
   without that the only way to improve a sample is to change something and
   hope. This tool takes the same rasteriser and the same reference and splits
   the number by part.

   Two decompositions, because they answer different questions.

   Leave-one-out: rebuild the silhouette from every part except one and see
   what the mean IoU does. Positive ΔIoU means the part was earning its place.
   Negative means the model scores better without it. The bounding box is held
   at the *full* model's frame throughout — renormalising after each removal
   would mix "this part matters" with "the picture got rescaled", and the
   rescale is usually the larger of the two.

   Exclusive pixels: of the pixels this part paints, how many does no other
   part also paint? Those are the ones it is solely accountable for. Split by
   whether the reference agrees, they give 획득 (reference says yes, only this
   part covers it) and 낭비 (reference says no, only this part put ink there).
   A part buried inside the airframe has almost no exclusive pixels at all,
   which is the direct test of whether hidden geometry is dragging the score
   down — the answer, for these samples, is that it is not.

   The residual line is the other half of the story: reference pixels that no
   part covers. Ablation can only rank what was built, so a large residual is
   the tool reporting that the miss is not in this list.

     node tools/ablate-parts.mjs <id> [--ref mesh|views] [--res N]
                                 [--specs <dir>] [--views <dir>] [--json]
   ========================================================================== */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { buildFromSpec } from "../js/spec-cad.js";
import { positionsFromGlb } from "../js/mesh-loft.js";
import {
  VIEWS, masksFromGeometry, masksFromImages, viewFiles, alignYaw, score,
} from "./similarity.mjs";

const ROOT = new URL("../", import.meta.url);
const path = (rel) => fileURLToPath(new URL(rel, ROOT));
const MESH_DIR = path("docs/assets/meshes");
const DEFAULT_RES = 128;

/* ------------------------------------------------------- part triangle soup */

/** One triangle soup per part, in world space, instances of a part merged. */
export function partsOfRoot(root) {
  root.updateMatrixWorld(true);
  const byRegion = new Map();
  root.traverse((o) => {
    const a = o.isMesh && o.geometry?.attributes?.position;
    if (!a) return;
    /* A part can be placed several times (a ring of four arms is one region
       with four meshes) and the spec edits it as one thing, so the decomposition
       has to group them or it reports four identical rows. */
    const key = o.userData?.regionId || o.name || "?";
    if (!byRegion.has(key)) {
      byRegion.set(key, { id: key, name: o.name || key, role: o.userData?.semanticRole || "",
        builder: o.userData?.builder || "", instances: 0, chunks: [] });
    }
    const g = byRegion.get(key);
    g.instances++;
    g.chunks.push({ a, idx: o.geometry.index, m: o.matrixWorld });
  });

  const out = [];
  for (const g of byRegion.values()) {
    let total = 0, tris = 0;
    for (const c of g.chunks) {
      total += c.a.count;
      tris += (c.idx ? c.idx.count : c.a.count) / 3;
    }
    const positions = new Float64Array(total * 3);
    const indices = new Uint32Array(Math.floor(tris) * 3);
    let k = 0, t = 0, base = 0;
    for (const { a, idx, m } of g.chunks) {
      const e = m.elements;
      for (let i = 0; i < a.count; i++) {
        const x = a.getX(i), y = a.getY(i), z = a.getZ(i);
        positions[k++] = e[0] * x + e[4] * y + e[8] * z + e[12];
        positions[k++] = e[1] * x + e[5] * y + e[9] * z + e[13];
        positions[k++] = e[2] * x + e[6] * y + e[10] * z + e[14];
      }
      const n = idx ? idx.count : a.count;
      for (let i = 0; i + 2 < n; i += 3) {
        indices[t++] = base + (idx ? idx.getX(i) : i);
        indices[t++] = base + (idx ? idx.getX(i + 1) : i + 1);
        indices[t++] = base + (idx ? idx.getX(i + 2) : i + 2);
      }
      base += a.count;
    }
    out.push({ id: g.id, name: g.name, role: g.role, builder: g.builder,
      instances: g.instances, model: { positions, count: total, indices: indices.subarray(0, t) } });
  }
  return out;
}

/* -------------------------------------------------------------- accounting */

const meanIoU = (a, b) => {
  let s = 0;
  for (const v of VIEWS) {
    let inter = 0, uni = 0;
    const x = a[v.key], y = b[v.key];
    for (let i = 0; i < x.length; i++) { if (x[i] | y[i]) uni++; if (x[i] & y[i]) inter++; }
    s += uni ? inter / uni : 0;
  }
  return s / VIEWS.length;
};

/** Per-part masks share the full assembly's frame so removals stay comparable. */
function masksInFrame(model, frame, N) {
  /* masksFromGeometry derives its own frame from the points it is given, which
     is right for a whole model and wrong for a fragment. Padding the fragment
     with the full model's two bounding-box corners pins the frame without
     drawing anything: the corners are vertices of no triangle. */
  const count = model.count + 2;
  const positions = new Float64Array(count * 3);
  positions.set(model.positions, 0);
  for (let a = 0; a < 3; a++) {
    positions[model.count * 3 + a] = frame.lo[a];
    positions[(model.count + 1) * 3 + a] = frame.hi[a];
  }
  return masksFromGeometry({ positions, count, indices: model.indices }, N);
}

function frameOfParts(parts) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (const p of parts) {
    for (let i = 0; i < p.model.count; i++) for (let a = 0; a < 3; a++) {
      const v = p.model.positions[i * 3 + a];
      if (v < lo[a]) lo[a] = v;
      if (v > hi[a]) hi[a] = v;
    }
  }
  return { lo, hi };
}

/** Decompose one sample's silhouette score across its parts. */
export function ablate(id, {
  ref = "mesh", res = DEFAULT_RES, specs = path("docs/specs"),
  views = path("docs/assets/views"), meshIndex = null, invert = false,
} = {}) {
  const spec = JSON.parse(readFileSync(`${specs}/${id}.json`, "utf8"));
  const { root } = buildFromSpec(spec, {});
  const parts = partsOfRoot(root);
  if (!parts.length) throw new Error("컴파일된 형상이 비어 있습니다");

  const frame = frameOfParts(parts);
  const per = parts.map((p) => ({ ...p, masks: masksInFrame(p.model, frame, res) }));

  /* The union of the parts is the full silhouette by construction, so there is
     no need to rasterise the assembly a second time. */
  const cad = {};
  for (const v of VIEWS) {
    const g = new Uint8Array(res * res);
    for (const p of per) { const m = p.masks[v.key]; for (let i = 0; i < g.length; i++) g[i] |= m[i]; }
    cad[v.key] = g;
  }

  let refMasks;
  if (ref === "mesh") {
    const index = meshIndex || JSON.parse(readFileSync(`${MESH_DIR}/index.json`, "utf8"));
    if (!index[id]) throw new Error("1단계 메시가 등록되어 있지 않습니다");
    const mesh = positionsFromGlb(readFileSync(`${MESH_DIR}/${index[id].file}`));
    if (!mesh) throw new Error("메시를 읽지 못했습니다");
    refMasks = masksFromGeometry(mesh, res);
  } else {
    refMasks = masksFromImages(viewFiles(views, id), res, invert);
  }
  const aligned = alignYaw(cad, refMasks);
  const R = aligned.masks;

  /* How many parts cover each pixel: the exclusive-pixel test is "cover == 1
     and it is mine", which needs the count, not another pass per part. */
  const cover = {};
  for (const v of VIEWS) {
    const c = new Uint8Array(res * res);
    for (const p of per) { const m = p.masks[v.key]; for (let i = 0; i < c.length; i++) if (m[i] && c[i] < 255) c[i]++; }
    cover[v.key] = c;
  }

  const base = meanIoU(cad, R);
  const rows = [];
  for (const p of per) {
    let area = 0, only = 0, earn = 0, waste = 0;
    const loo = {};
    for (const v of VIEWS) {
      const m = p.masks[v.key], c = cover[v.key], r = R[v.key], f = cad[v.key];
      const g = new Uint8Array(res * res);
      for (let i = 0; i < m.length; i++) {
        if (m[i]) {
          area++;
          if (c[i] === 1) { only++; if (r[i]) earn++; else waste++; }
        }
        /* leave-one-out: the pixel survives if some other part still paints it */
        g[i] = f[i] && !(m[i] && c[i] === 1) ? 1 : 0;
      }
      loo[v.key] = g;
    }
    const n = VIEWS.length;
    rows.push({
      id: p.id, name: p.name, role: p.role, builder: p.builder, instances: p.instances,
      area_px: area / n, exclusive_px: only / n, earned_px: earn / n, wasted_px: waste / n,
      delta_iou: base - meanIoU(loo, R),
    });
  }

  /* Reference pixels nothing covers. Ablation ranks what exists; this says how
     much of the gap is outside the ranking altogether. */
  let refPx = 0, missPx = 0, cadPx = 0, extraPx = 0;
  for (const v of VIEWS) {
    const r = R[v.key], f = cad[v.key];
    for (let i = 0; i < r.length; i++) {
      if (r[i]) { refPx++; if (!f[i]) missPx++; }
      if (f[i]) { cadPx++; if (!r[i]) extraPx++; }
    }
  }

  rows.sort((a, b) => a.delta_iou - b.delta_iou || b.wasted_px - a.wasted_px);
  return {
    id, ref, grid: res, yaw_deg: aligned.k * 90, iou_mean: base,
    full: score(cad, R, res),
    residual: { ref_px: refPx / VIEWS.length, uncovered_px: missPx / VIEWS.length,
      uncovered_frac: refPx ? missPx / refPx : 0,
      cad_px: cadPx / VIEWS.length, extra_px: extraPx / VIEWS.length,
      extra_frac: cadPx ? extraPx / cadPx : 0 },
    parts: rows,
  };
}

/* ------------------------------------------------------------------- main */

function main() {
  const TAKES_VALUE = new Set(["ref", "res", "specs", "views"]);
  const opt = {};
  const ids = [];
  for (let i = 0, a = process.argv.slice(2); i < a.length; i++) {
    if (!a[i].startsWith("--")) { ids.push(a[i]); continue; }
    const name = a[i].slice(2);
    opt[name] = TAKES_VALUE.has(name) ? a[++i] : true;
  }
  const REF = opt.ref || "mesh";
  if (REF !== "mesh" && REF !== "views") { console.error("--ref 는 mesh 또는 views 입니다"); return 2; }
  const N = Math.max(16, parseInt(opt.res, 10) || DEFAULT_RES);
  const meshIndex = JSON.parse(readFileSync(`${MESH_DIR}/index.json`, "utf8"));
  const list = ids.length ? ids : Object.keys(meshIndex);

  const options = { ref: REF, res: N, meshIndex, specs: opt.specs || path("docs/specs"),
    views: opt.views || path("docs/assets/views"), invert: !!opt.invert };

  const all = {};
  let failures = 0;
  for (const id of list) {
    try { all[id] = ablate(id, options); } catch (e) { failures++; all[id] = { error: e.message }; }
  }
  if (opt.json) { console.log(JSON.stringify(all, null, 2)); return failures ? 1 : 0; }

  const pct = (v, d = 1) => `${(v * 100).toFixed(d)}%`;
  const sgn = (v, d = 2) => `${v >= 0 ? "+" : ""}${(v * 100).toFixed(d)}`;
  for (const id of list) {
    const r = all[id];
    if (r.error) { console.log(`\n${id}: ${r.error}`); continue; }
    console.log(`\n■ ${id} — 평균 IoU ${pct(r.iou_mean)} · 참조 ${REF === "mesh" ? "1단계 메시" : "실루엣"} · 회전 ${r.yaw_deg}°`);
    console.log(`  참조 화소 중 ${pct(r.residual.uncovered_frac)} 를 어떤 파트도 덮지 않습니다 `
      + `· CAD 화소 중 ${pct(r.residual.extra_frac)} 는 참조에 없습니다`);
    console.log("  " + "파트".padEnd(26) + "빌더".padEnd(10) + "수 " + "면적".padStart(7)
      + "  " + "전용".padStart(7) + "  " + "획득".padStart(7) + "  " + "낭비".padStart(7) + "  " + "ΔIoU".padStart(7));
    console.log("  " + "─".repeat(84));
    for (const p of r.parts) {
      console.log("  " + p.id.slice(0, 25).padEnd(26) + (p.builder || "-").slice(0, 9).padEnd(10)
        + String(p.instances).padStart(2) + " "
        + p.area_px.toFixed(0).padStart(7) + "  " + p.exclusive_px.toFixed(0).padStart(7) + "  "
        + p.earned_px.toFixed(0).padStart(7) + "  " + p.wasted_px.toFixed(0).padStart(7) + "  "
        + sgn(p.delta_iou).padStart(7));
    }
    console.log("  단위: 4개 뷰 평균 화소 수. 전용=다른 파트가 덮지 않는 화소, "
      + "획득=그중 참조와 일치, 낭비=참조에 없음");
    console.log("  ΔIoU는 그 파트를 빼면 평균 IoU가 몇 %p 떨어지는가 (음수면 빼는 편이 낫다)");
  }
  return failures ? 1 : 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  process.exit(main());
}
