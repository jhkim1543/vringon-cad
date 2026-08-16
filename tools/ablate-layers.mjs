/* ==========================================================================
   Which part is costing WHICH LAYER of the design-similarity score?

   tools/ablate-parts.mjs splits the silhouette IoU by part. design-similarity
   adds four more layers (composition, proportion, layout, appearance) and a
   sample that misses 95% needs the same question answered for each of them:
   how many points does the layer take off the composite, and which part —
   or which absence, or which reference defect — is behind it.

   Per sample this tool reports

     1. Layer loss: (1 − layer score) × weight, in composite points, so the
        five layers can be ranked by what they actually cost.
     2. Silhouette / proportion / layout, per part, leave-one-out: rebuild
        the four silhouettes without the part's exclusive pixels (frame held,
        as ablate-parts does) and re-run the SAME layer functions
        design-similarity uses. Δ>0 means the part is earning its keep in
        that layer; Δ<0 means the layer would score higher without it.
     3. Where the reference has mass the CAD does not (and vice versa): the
        uncovered / extra pixels of each view, binned into a 3×3 band grid
        (top·mid·bottom × left·centre·right) as a share of the reference. A
        silhouette carries no part labels, so this is the closest an
        automatic tool gets to "the reference's landing gear is taller" —
        it says "the reference has 18% more mass in the bottom band".
     4. Appearance, per part: the part's material colour, its share of the
        painted render pixels, the nearest photo palette colour and how close
        it is, and the leave-one-out Δ of the palette match with the part's
        triangles removed from the render (a real re-render, so a hidden
        part revealed by the removal is accounted for).
     5. Composition, per check, unchanged from design-similarity --dump.

   Nothing here is a new metric: every number is one of design-similarity's
   layer functions run on a reduced input, so the deltas add up to
   differences of the numbers already published.

     node tools/ablate-layers.mjs [id ...] [--ref views|mesh] [--res N] [--json]
                                 [--specs <dir>] [--views <dir>]   (what-if runs on edited copies)
   ========================================================================== */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { buildFromSpec } from "../js/spec-cad.js";
import { positionsFromGlb } from "../js/mesh-loft.js";
import { decodeImage } from "./image-io.mjs";
import {
  VIEWS, masksFromGeometry, masksFromImages, viewFiles, alignYaw, score,
} from "./similarity.mjs";
import { partsOfRoot } from "./ablate-parts.mjs";
import {
  PHOTOS, WEIGHTS, LAYER_KO, colouredTriangles, renderView, proportionLayer, layoutLayer,
  photoPalette, renderPalette, paletteMatch, colourSim, hex, compositionLayer,
} from "./design-similarity.mjs";

const ROOT = new URL("../", import.meta.url);
const path = (rel) => fileURLToPath(new URL(rel, ROOT));
const SPEC_DIR = path("docs/specs");
const VIEW_DIR = path("docs/assets/views");
const MESH_DIR = path("docs/assets/meshes");
const PHOTO_DIR = path("docs/assets/samples/drones");
const INVENTORY_CACHE = path("docs/specs/_photo-inventory.json");
const MASK_RES = 128;
const RENDER_RES = 512;

const loadJson = (f, fb = null) => (existsSync(f) ? JSON.parse(readFileSync(f, "utf8")) : fb);

/* ---------------------------------------------------------- mask helpers */

/* Same trick as ablate-parts: pin a fragment to the full model's frame by
   appending the two bounding-box corners as triangle-less vertices. */
function masksInFrame(model, frame, N) {
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

/** The three silhouette-derived layers on one set of CAD masks. */
function shapeLayers(cad, R, N) {
  const sim = score(cad, R, N);
  const prop = proportionLayer(sim, cad, R, N);
  const lay = layoutLayer(cad, R, N);
  return { silhouette: sim.iou.mean, proportion: prop ? prop.score : null, layout: lay.score, prop, lay };
}

/** 3×3 band split of a mask (row-major: top-left … bottom-right), as counts. */
function bands(g, N) {
  const out = new Float64Array(9);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    if (g[y * N + x]) out[Math.floor((y * 3) / N) * 3 + Math.floor((x * 3) / N)]++;
  }
  return out;
}
const BAND_KO = ["상좌", "상중", "상우", "중좌", "중앙", "중우", "하좌", "하중", "하우"];

/* --------------------------------------------------------------- analyse */

export function ablateLayers(id, { ref = "views", res = MASK_RES, ctx, specs = SPEC_DIR, views = VIEW_DIR }) {
  const spec = loadJson(`${specs}/${id}.json`);
  if (!spec) throw new Error("사양서가 없습니다");
  const meta = ctx.index.find((s) => s.id === id) || null;
  const { root } = buildFromSpec(spec, {});
  const parts = partsOfRoot(root);
  if (!parts.length) throw new Error("컴파일된 형상이 비어 있습니다");
  const nameOf = new Map((spec.parts || []).map((p) => [p.part_id, p.display_name_ko || p.name || p.part_id]));

  /* ---- reference ---- */
  let R0 = null, refKind = null;
  if (ref !== "mesh" && existsSync(`${views}/${id}/meta.json`)) {
    R0 = masksFromImages(viewFiles(views, id), res);
    refKind = loadJson(`${views}/${id}/meta.json`, {}).source === "photo" ? "views(photo)" : "views(mesh)";
  } else if (ctx.meshIndex[id]) {
    R0 = masksFromGeometry(positionsFromGlb(readFileSync(`${MESH_DIR}/${ctx.meshIndex[id].file}`)), res);
    refKind = "mesh";
  }

  const out = { id, reference: refKind, layers: {}, loss: {}, parts: [], residual: null, appearance: null, composition: null };

  /* ---- composition (per check, as published) ---- */
  const inventory = ctx.inventories[id] || null;
  const comp = compositionLayer(spec, meta, inventory);
  out.composition = comp;
  out.layers.composition = comp.score;

  /* ---- shape layers, full model and leave-one-out ---- */
  let R = null;
  if (R0) {
    const frame = frameOfParts(parts);
    const per = parts.map((p) => ({ ...p, masks: masksInFrame(p.model, frame, res) }));
    const cad = {}, cover = {};
    for (const v of VIEWS) {
      const g = new Uint8Array(res * res), c = new Uint8Array(res * res);
      for (const p of per) {
        const m = p.masks[v.key];
        for (let i = 0; i < g.length; i++) if (m[i]) { g[i] = 1; if (c[i] < 255) c[i]++; }
      }
      cad[v.key] = g; cover[v.key] = c;
    }
    const aligned = alignYaw(cad, R0);
    R = aligned.masks;
    const base = shapeLayers(cad, R, res);
    out.layers.silhouette = base.silhouette;
    out.layers.proportion = base.proportion;
    out.layers.layout = base.layout;
    out.detail = { proportion: base.prop, layout: base.lay, yaw_deg: aligned.k * 90 };

    for (const p of per) {
      const loo = {};
      let area = 0, only = 0, earn = 0, waste = 0;
      for (const v of VIEWS) {
        const m = p.masks[v.key], c = cover[v.key], f = cad[v.key], r = R[v.key];
        const g = new Uint8Array(res * res);
        for (let i = 0; i < m.length; i++) {
          if (m[i]) { area++; if (c[i] === 1) { only++; if (r[i]) earn++; else waste++; } }
          g[i] = f[i] && !(m[i] && c[i] === 1) ? 1 : 0;
        }
        loo[v.key] = g;
      }
      const l = shapeLayers(loo, R, res);
      out.parts.push({
        id: p.id, name_ko: nameOf.get(p.id) || p.name, builder: p.builder, instances: p.instances,
        area_px: area / 4, exclusive_px: only / 4, earned_px: earn / 4, wasted_px: waste / 4,
        d_silhouette: base.silhouette - l.silhouette,
        d_proportion: base.proportion != null && l.proportion != null ? base.proportion - l.proportion : null,
        d_layout: base.layout - l.layout,
      });
    }

    /* ---- where the mass disagrees ---- */
    const residual = {};
    for (const v of VIEWS) {
      const r = R[v.key], f = cad[v.key];
      const miss = new Uint8Array(res * res), extra = new Uint8Array(res * res);
      let refPx = 0;
      for (let i = 0; i < r.length; i++) {
        if (r[i]) { refPx++; if (!f[i]) miss[i] = 1; }
        else if (f[i]) extra[i] = 1;
      }
      const bm = bands(miss, res), be = bands(extra, res), br = bands(r, res), bc = bands(f, res);
      residual[v.key] = {
        ref_px: refPx,
        uncovered: Array.from(bm, (x) => x / (refPx || 1)),
        extra: Array.from(be, (x) => x / (refPx || 1)),
        ref_bands: Array.from(br, (x) => x / (refPx || 1)),
        cad_bands: Array.from(bc, (x) => x / (refPx || 1)),
      };
    }
    out.residual = residual;
  }

  /* ---- appearance, per part ---- */
  const photo = PHOTOS[id] ? `${PHOTO_DIR}/${PHOTOS[id]}` : null;
  if (photo && existsSync(photo)) {
    const model = colouredTriangles(root);
    const renders = VIEWS.map((v) => renderView(model, v, RENDER_RES));
    const pp = photoPalette(decodeImage(readFileSync(photo), photo, { rgb: true }));
    const rp = renderPalette(renders);
    const baseMatch = paletteMatch(pp.clusters, rp);
    out.layers.appearance = baseMatch;

    /* Visible pixel share and colour per part, from the colour index buffer. */
    const share = new Map();
    let painted = 0;
    for (const r of renders) {
      for (let q = 0; q < r.cover.length; q++) {
        if (!r.cover[q]) continue;
        painted++;
        const pid = model.part[r.colourIndex[q]] || "?";
        const key = pid + "|" + hex(model.colour[r.colourIndex[q]]);
        share.set(key, (share.get(key) || 0) + 1);
      }
    }
    /* Leave-one-out per part: re-render without the part's triangles. */
    const partIds = [...new Set(model.part.filter(Boolean))];
    const rows = [];
    for (const pid of partIds) {
      const keep = [];
      for (let k = 0; k + 3 < model.tris.length; k += 4) {
        if (model.part[model.tris[k + 3]] === pid) continue;
        keep.push(model.tris[k], model.tris[k + 1], model.tris[k + 2], model.tris[k + 3]);
      }
      const sub = { ...model, tris: Uint32Array.from(keep) };
      const rr = VIEWS.map((v) => renderView(sub, v, RENDER_RES));
      const m = keep.length ? paletteMatch(pp.clusters, renderPalette(rr)) : 0;
      const colours = [...share].filter(([k]) => k.startsWith(pid + "|"))
        .map(([k, n]) => {
          const hx = k.split("|")[1];
          const rgb = [1, 3, 5].map((i) => parseInt(hx.slice(i, i + 2), 16));
          let best = 0, bestHex = null;
          for (const c of pp.clusters) { const s = colourSim(rgb, c.rgb); if (s > best) { best = s; bestHex = hex(c.rgb); } }
          return { hex: hx, share: n / painted, nearest_photo: bestHex, nearest_sim: best };
        }).sort((a, b) => b.share - a.share);
      rows.push({ id: pid, name_ko: nameOf.get(pid) || pid, colours,
        share: colours.reduce((s, c) => s + c.share, 0), d_appearance: baseMatch - m });
    }
    rows.sort((a, b) => b.share - a.share);
    out.appearance = {
      photo_colors: pp.clusters.map((c) => ({ hex: hex(c.rgb), weight: c.weight })),
      render_colors: rp.map((c) => ({ hex: hex(c.rgb), weight: c.weight })),
      parts: rows,
    };
  }

  /* ---- composite and per-layer loss ---- */
  const present = Object.keys(WEIGHTS).filter((k) => out.layers[k] != null);
  const wsum = present.reduce((s, k) => s + WEIGHTS[k], 0);
  out.composite = present.reduce((s, k) => s + WEIGHTS[k] * out.layers[k], 0) / wsum;
  for (const k of present) out.loss[k] = ((1 - out.layers[k]) * WEIGHTS[k]) / wsum;
  out.parts.sort((a, b) => a.d_silhouette - b.d_silhouette);
  return out;
}

/* ------------------------------------------------------------------- main */

function main() {
  const TAKES_VALUE = new Set(["ref", "res", "specs", "views"]);
  const opt = {};
  let ids = [];
  for (let i = 0, a = process.argv.slice(2); i < a.length; i++) {
    if (!a[i].startsWith("--")) { ids.push(a[i]); continue; }
    const name = a[i].slice(2);
    opt[name] = TAKES_VALUE.has(name) ? a[++i] : true;
  }
  const ctx = {
    index: loadJson(`${SPEC_DIR}/index.json`, []),
    meshIndex: loadJson(`${MESH_DIR}/index.json`, {}),
    inventories: loadJson(INVENTORY_CACHE, {}),
  };
  if (!ids.length) ids = ctx.index.map((s) => s.id);
  const options = { ref: opt.ref || "views", res: Math.max(16, parseInt(opt.res, 10) || MASK_RES), ctx,
    specs: opt.specs || SPEC_DIR, views: opt.views || VIEW_DIR };

  const all = {};
  let failures = 0;
  for (const id of ids) {
    try { all[id] = ablateLayers(id, options); } catch (e) { failures++; all[id] = { error: e.message }; if (opt.dump) console.error(e.stack); }
  }
  if (opt.json) { console.log(JSON.stringify(all, null, 2)); return failures ? 1 : 0; }

  const pct = (v, d = 0) => (v == null ? "  —" : `${(v * 100).toFixed(d)}%`);
  const sgn = (v, d = 2) => (v == null ? "    —" : `${v >= 0 ? "+" : ""}${(v * 100).toFixed(d)}`);
  for (const id of ids) {
    const r = all[id];
    if (r.error) { console.log(`\n${id}: ${r.error}`); continue; }
    console.log(`\n■ ${id} — 종합 ${pct(r.composite)} · 참조 ${r.reference || "없음"}`);
    console.log("  층위별 손실(종합 점수 기준): " + Object.keys(r.loss)
      .sort((a, b) => r.loss[b] - r.loss[a])
      .map((k) => `${LAYER_KO[k]} ${pct(r.layers[k])} → −${(r.loss[k] * 100).toFixed(1)}p`).join(" · "));
    for (const ck of r.composition.checks) {
      if (ck.score >= 0.999) continue;
      console.log(`  구성 · ${ck.name}: ${pct(ck.score)} (기대 ${ck.want} / 실제 ${ck.got})` + (ck.detail?.length ? ` 누락: ${ck.detail.join(", ")}` : ""));
    }
    if (r.detail) {
      const p = r.detail.proportion;
      console.log(`  비율 · 축 x ${pct(p.axis.x)} y ${pct(p.axis.y)} z ${pct(p.axis.z)} · 종횡비 ` + VIEWS.map((v) => `${v.label} ${pct(p.aspect[v.key])}`).join(" "));
      console.log("  파트".padEnd(28) + "빌더".padEnd(10) + "수 " + "전용".padStart(6) + "획득".padStart(7) + "낭비".padStart(7)
        + "  Δ형상".padStart(8) + "  Δ비율".padStart(8) + "  Δ배치".padStart(8));
      console.log("  " + "─".repeat(90));
      for (const p of r.parts) {
        console.log("  " + `${p.id.slice(0, 16)}(${p.name_ko})`.slice(0, 27).padEnd(28) + (p.builder || "-").slice(0, 9).padEnd(10)
          + String(p.instances).padStart(2) + " " + p.exclusive_px.toFixed(0).padStart(6) + p.earned_px.toFixed(0).padStart(7)
          + p.wasted_px.toFixed(0).padStart(7) + sgn(p.d_silhouette).padStart(8) + sgn(p.d_proportion).padStart(8) + sgn(p.d_layout).padStart(8));
      }
      console.log("  Δ = 그 파트를 빼면 층위 점수가 몇 %p 떨어지는가 (음수면 빼는 편이 낫다). 전용/획득/낭비 = 4뷰 평균 화소");
      console.log("  참조에만 있는 질량(참조 화소 대비 %) / CAD에만 있는 질량:");
      for (const v of VIEWS) {
        const q = r.residual[v.key];
        const top = (arr) => arr.map((x, i) => [x, i]).filter(([x]) => x >= 0.02).sort((a, b) => b[0] - a[0]).slice(0, 4)
          .map(([x, i]) => `${BAND_KO[i]} ${(x * 100).toFixed(0)}%`).join(" ") || "—";
        console.log(`    ${v.label}: 참조만 [${top(q.uncovered)}] · CAD만 [${top(q.extra)}]`);
      }
    }
    if (r.appearance) {
      const a = r.appearance;
      console.log(`  외관 · 사진 ${a.photo_colors.map((c) => `${c.hex} ${pct(c.weight)}`).join(", ")}`);
      console.log(`       · 렌더 ${a.render_colors.map((c) => `${c.hex} ${pct(c.weight)}`).join(", ")}`);
      for (const p of a.parts.slice(0, 8)) {
        console.log(`       · ${p.name_ko.slice(0, 14).padEnd(15)} 렌더 ${pct(p.share).padStart(4)} `
          + p.colours.slice(0, 2).map((c) => `${c.hex}→사진 ${c.nearest_photo} 유사 ${pct(c.nearest_sim)}`).join(" | ")
          + `  Δ외관 ${sgn(p.d_appearance)}`);
      }
    }
  }
  return failures ? 1 : 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  process.exit(main());
}
