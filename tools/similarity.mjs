/* ==========================================================================
   How close is the compiled CAD to the shape it was supposed to reproduce?

   Four horizontal views, both models rasterised into the same occupancy grid,
   compared by intersection over union plus three metrics that say *how* they
   differ. No renderer and no model in the loop, so the number is reproducible
   and can sit in a regression file.

   Two things it does that the eyeball cannot. First, it separates the failure
   modes: a low IoU with a clean boundary distance and a right aspect ratio is
   a part in the wrong place, while a low IoU with the boundary distance to
   match is the wrong shape entirely. Second, it is scale-blind on purpose —
   both models are normalised into their own bounding box before anything is
   measured, so a specification that got the proportions right but the
   millimetres wrong scores well on silhouette and loudly on 치수 오차.

   The reference is either the stage-1 mesh (--ref mesh) or four silhouette
   mask images (--ref views), and both arrive at the same canonical grid: each
   view is centred on its own content and everything is scaled by the single
   largest extent across all four. For an axis-aligned turntable those two
   normalisations are the same operation, which is what makes a photograph
   traced by hand comparable to a mesh.

     node tools/similarity.mjs [id ...] [--ref mesh|views] [--json]
                               [--views <dir>] [--specs <dir>] [--res N]
                               [--dump <dir>] [--invert] [--no-align] [--no-write]

   Results land in docs/specs/_similarity.json. The leading underscore marks it
   as derived: the sample loader, the QA run and the version stamp all skip it.
   ========================================================================== */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { buildFromSpec } from "../js/spec-cad.js";
import { positionsFromGlb, positionsFromObject3D } from "../js/mesh-loft.js";
import { decodeImage, encodePng } from "./image-io.mjs";

const ROOT = new URL("../", import.meta.url);
const path = (rel) => fileURLToPath(new URL(rel, ROOT));

/* Azimuth around the vertical axis. The horizontal screen axis is
   u = x·cos − z·sin, the vertical one is always y. */
export const VIEWS = [
  { key: "front", label: "정면", az: 0 },
  { key: "left", label: "좌측", az: -Math.PI / 2 },
  { key: "rear", label: "후면", az: Math.PI },
  { key: "right", label: "우측", az: Math.PI / 2 },
];

/* The silhouette fills 1/PAD of the grid at most, so a model that is slightly
   larger than the reference still has somewhere to spill into instead of
   being clipped — clipping would quietly improve the score. */
const PAD = 1.1;
const DEFAULT_RES = 128;

/* ------------------------------------------------------------- rasteriser */

const plot = (g, N, x, y) => {
  const px = Math.floor(x), py = Math.floor(y);
  if (px >= 0 && px < N && py >= 0 && py < N) g[py * N + px] = 1;
};

/* Endpoints are already inside the grid by construction, so stepping the long
   axis needs no clipping. */
function line(g, N, x0, y0, x1, y1) {
  const dx = x1 - x0, dy = y1 - y0;
  const n = Math.ceil(Math.max(Math.abs(dx), Math.abs(dy)));
  if (n === 0) { plot(g, N, x0, y0); return; }
  for (let i = 0; i <= n; i++) plot(g, N, x0 + (dx * i) / n, y0 + (dy * i) / n);
}

function fillTriangle(g, N, x0, y0, x1, y1, x2, y2) {
  /* The three edges are drawn whatever the fill does. A boom seen end-on or a
     guard ring's wall is thinner than a pixel, so no pixel centre falls inside
     it and an area-only rasteriser drops it from the outline entirely — which
     is the same hole the old vertex-projection had, just harder to notice. */
  line(g, N, x0, y0, x1, y1);
  line(g, N, x1, y1, x2, y2);
  line(g, N, x2, y2, x0, y0);

  let area = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0);
  if (area === 0) return;
  if (area < 0) { const tx = x1, ty = y1; x1 = x2; y1 = y2; x2 = tx; y2 = ty; }

  const lo = Math.max(0, Math.floor(Math.min(x0, x1, x2)));
  const hi = Math.min(N - 1, Math.ceil(Math.max(x0, x1, x2)));
  const to = Math.max(0, Math.floor(Math.min(y0, y1, y2)));
  const bo = Math.min(N - 1, Math.ceil(Math.max(y0, y1, y2)));
  for (let py = to; py <= bo; py++) {
    const cy = py + 0.5;
    for (let px = lo; px <= hi; px++) {
      const cx = px + 0.5;
      if ((x1 - x0) * (cy - y0) - (cx - x0) * (y1 - y0) < 0) continue;
      if ((x2 - x1) * (cy - y1) - (cx - x1) * (y2 - y1) < 0) continue;
      if ((x0 - x2) * (cy - y2) - (cx - x2) * (y0 - y2) < 0) continue;
      g[py * N + px] = 1;
    }
  }
}

/** Bounding box of a point cloud, plus the single scale everything divides by. */
function frameOf(model) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < model.count; i++) for (let a = 0; a < 3; a++) {
    const v = model.positions[i * 3 + a];
    if (v < lo[a]) lo[a] = v;
    if (v > hi[a]) hi[a] = v;
  }
  const extent = [hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]];
  return {
    c: [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2],
    size: Math.max(...extent) || 1,
    extent,
  };
}

/** Rasterise every triangle of a model into the four canonical view grids. */
export function masksFromGeometry(model, N = DEFAULT_RES) {
  const { c, size } = frameOf(model);
  const idx = model.indices;
  if (!idx || !idx.length) throw new Error("삼각형 정보가 없는 메시입니다");
  const out = {};
  const sx = new Float64Array(model.count), sy = new Float64Array(model.count);
  for (const view of VIEWS) {
    const ca = Math.cos(view.az), sa = Math.sin(view.az);
    for (let i = 0; i < model.count; i++) {
      const x = (model.positions[i * 3] - c[0]) / size;
      const y = (model.positions[i * 3 + 1] - c[1]) / size;
      const z = (model.positions[i * 3 + 2] - c[2]) / size;
      sx[i] = ((x * ca - z * sa) + PAD / 2) / PAD * N;
      sy[i] = (PAD / 2 - y) / PAD * N;
    }
    const g = new Uint8Array(N * N);
    for (let t = 0; t + 2 < idx.length; t += 3) {
      const a = idx[t], b = idx[t + 1], d = idx[t + 2];
      fillTriangle(g, N, sx[a], sy[a], sx[b], sy[b], sx[d], sy[d]);
    }
    out[view.key] = g;
  }
  return out;
}

/* ------------------------------------------------------ silhouette images */

/** Split an image into object and background without being told which is which. */
export function binarize(img, invert) {
  const n = img.w * img.h;
  const on = new Uint8Array(n);
  if (img.alpha) {
    // a mask that carries transparency has already answered the question
    for (let i = 0; i < n; i++) on[i] = img.alpha[i] >= 128 ? 1 : 0;
  } else {
    // Otsu: masks are bimodal by nature, and a fixed 128 misses a grey-on-grey
    // trace or an anti-aliased export that never reaches full black
    const hist = new Int32Array(256);
    for (let i = 0; i < n; i++) hist[img.gray[i]]++;
    let sum = 0;
    for (let v = 0; v < 256; v++) sum += v * hist[v];
    let wB = 0, sumB = 0, best = -1, thr = 128;
    for (let v = 0; v < 256; v++) {
      wB += hist[v];
      if (!wB) continue;
      const wF = n - wB;
      if (!wF) break;
      sumB += v * hist[v];
      const between = wB * wF * Math.pow(sumB / wB - (sum - sumB) / wF, 2);
      if (between > best) { best = between; thr = v; }
    }
    for (let i = 0; i < n; i++) on[i] = img.gray[i] > thr ? 1 : 0;
    /* Whichever class owns the frame of the picture is the background. This is
       what makes black-on-white and white-on-black both just work. */
    let edgeOn = 0, edgeTotal = 0;
    for (let x = 0; x < img.w; x++) { edgeOn += on[x] + on[(img.h - 1) * img.w + x]; edgeTotal += 2; }
    for (let y = 0; y < img.h; y++) { edgeOn += on[y * img.w] + on[y * img.w + img.w - 1]; edgeTotal += 2; }
    if (edgeOn * 2 > edgeTotal) for (let i = 0; i < n; i++) on[i] ^= 1;
  }
  if (invert) for (let i = 0; i < n; i++) on[i] ^= 1;
  return on;
}

function contentBox(on, w, h) {
  let x0 = w, x1 = -1, y0 = h, y1 = -1;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (!on[y * w + x]) continue;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }
  if (x1 < 0) return null;
  return { x0, y0, w: x1 - x0 + 1, h: y1 - y0 + 1, cx: (x0 + x1 + 1) / 2, cy: (y0 + y1 + 1) / 2 };
}

/** Load four mask images and resample them into the canonical view grids. */
export function masksFromImages(files, N = DEFAULT_RES, invert = false) {
  const src = {};
  let dims = null;
  for (const view of VIEWS) {
    const img = decodeImage(readFileSync(files[view.key]), files[view.key]);
    const key = `${img.w}×${img.h}`;
    /* The four views only share a scale if they share a frame. Without that
       there is no way to know whether the side view is a longer drone or a
       closer camera, and the proportions would be invented. */
    if (dims && dims !== key) {
      throw new Error(`참조 이미지 4장의 크기가 다릅니다 (${dims} vs ${key}) — 같은 크기로 맞춰 주세요`);
    }
    dims = key;
    const on = binarize(img, invert);
    const box = contentBox(on, img.w, img.h);
    if (!box) throw new Error(`${files[view.key]}: 실루엣이 비어 있습니다`);
    src[view.key] = { on, w: img.w, h: img.h, box };
  }

  // one scale for all four views, exactly as the 3D path uses one bounding box
  let scale = 0;
  for (const view of VIEWS) scale = Math.max(scale, src[view.key].box.w, src[view.key].box.h);

  const out = {};
  const cell = (PAD / N) * scale;               // one grid pixel, in source pixels
  const half = cell / 2;
  for (const view of VIEWS) {
    const { on, w, h, box } = src[view.key];
    const g = new Uint8Array(N * N);
    for (let py = 0; py < N; py++) for (let px = 0; px < N; px++) {
      const un = ((px + 0.5) / N) * PAD - PAD / 2;
      const vn = PAD / 2 - ((py + 0.5) / N) * PAD;
      const cx = box.cx + un * scale, cy = box.cy - vn * scale;
      let hit;
      if (cell <= 1) {
        hit = on[Math.min(h - 1, Math.max(0, Math.round(cy - 0.5))) * w
          + Math.min(w - 1, Math.max(0, Math.round(cx - 0.5)))];
      } else {
        /* Downscaling: majority of the source area wins, which is what any
           image tool does and keeps edges from creeping outwards. */
        let lit = 0, seen = 0;
        for (let sy = Math.floor(cy - half); sy < cy + half; sy++) {
          for (let sx = Math.floor(cx - half); sx < cx + half; sx++) {
            seen++;
            if (sx >= 0 && sx < w && sy >= 0 && sy < h && on[sy * w + sx]) lit++;
          }
        }
        hit = seen && lit * 2 >= seen;
      }
      if (hit) g[py * N + px] = 1;
    }
    out[view.key] = g;
  }
  return out;
}

/* ---------------------------------------------------------------- metrics */

function iou(a, b) {
  let inter = 0, uni = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] | b[i]) uni++;
    if (a[i] & b[i]) inter++;
  }
  return uni ? inter / uni : 0;
}

/** Pixels of the mask that touch the outside — the silhouette outline. */
function boundary(g, N) {
  const b = new Uint8Array(N * N);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const i = y * N + x;
    if (!g[i]) continue;
    if (x === 0 || x === N - 1 || y === 0 || y === N - 1
      || !g[i - 1] || !g[i + 1] || !g[i - N] || !g[i + N]) b[i] = 1;
  }
  return b;
}

/* Exact squared Euclidean distance transform (Felzenszwalb & Huttenlocher):
   the lower envelope of one parabola per seed, computed per axis. A chamfer
   mask would be a few percent off, and a few percent is the size of the
   differences this metric is being asked to resolve. */
const INF = 1e20;
function edt1d(f, n, out, v, z) {
  let k = 0;
  v[0] = 0; z[0] = -INF; z[1] = INF;
  for (let q = 1; q < n; q++) {
    let s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    while (s <= z[k]) {
      k--;
      s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    }
    k++; v[k] = q; z[k] = s; z[k + 1] = INF;
  }
  k = 0;
  for (let q = 0; q < n; q++) {
    while (z[k + 1] < q) k++;
    out[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
  }
}

function distanceField(seeds, N) {
  const d = new Float64Array(N * N);
  const f = new Float64Array(N), o = new Float64Array(N);
  const v = new Int32Array(N), z = new Float64Array(N + 1);
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) f[y] = seeds[y * N + x] ? 0 : INF;
    edt1d(f, N, o, v, z);
    for (let y = 0; y < N; y++) d[y * N + x] = o[y];
  }
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) f[x] = d[y * N + x];
    edt1d(f, N, o, v, z);
    for (let x = 0; x < N; x++) d[y * N + x] = Math.sqrt(o[x]);
  }
  return d;
}

/** Symmetric mean distance between the two outlines, as a fraction of the
    model's largest dimension. */
function chamfer(a, b, N) {
  const ba = boundary(a, N), bb = boundary(b, N);
  const da = distanceField(ba, N), db = distanceField(bb, N);
  let sa = 0, na = 0, sb = 0, nb = 0;
  for (let i = 0; i < ba.length; i++) {
    if (ba[i]) { sa += db[i]; na++; }
    if (bb[i]) { sb += da[i]; nb++; }
  }
  if (!na || !nb) return null;
  return ((sa / na + sb / nb) / 2) * (PAD / N);   // pixels → fraction of extent
}

function maskBox(g, N) {
  const b = contentBox(g, N, N);
  return b ? { w: (b.w * PAD) / N, h: (b.h * PAD) / N } : null;
}

/** Per-axis proportions read off the four silhouettes, largest axis = 1. */
function proportions(masks, N) {
  const box = {};
  for (const view of VIEWS) box[view.key] = maskBox(masks[view.key], N);
  if (VIEWS.some((v) => !box[v.key])) return null;
  /* Front and rear see the same width, left and right the same depth, and all
     four the same height — averaging the pairs cancels a pixel of rounding. */
  const x = (box.front.w + box.rear.w) / 2;
  const z = (box.left.w + box.right.w) / 2;
  const y = VIEWS.reduce((s, v) => s + box[v.key].h, 0) / 4;
  const m = Math.max(x, y, z) || 1;
  return { x: x / m, y: y / m, z: z / m, aspect: VIEWS.map((v) => box[v.key].w / box[v.key].h) };
}

/* Yaw is a convention, not a measurement. The stage-1 meshes come out of
   reconstruction with their own idea of which way is forward — the survey
   wing's span runs along Z there and along X in the specification — and a
   traced photograph has whatever heading the photograph had. Left uncorrected
   the front view is scored against the reference's side view, which is not a
   fidelity number, it is a coordinate accident.

   Turning the model a quarter turn permutes the four views cyclically and
   nothing else, so the correction costs one comparison rather than a
   re-rasterisation. Only multiples of 90° are tried: an arbitrary angle would
   let the metric rotate its way out of a genuinely wrong shape. */
const yawViews = (masks, k) =>
  Object.fromEntries(VIEWS.map((v, i) => [v.key, masks[VIEWS[(i + k) % 4].key]]));

/* A symmetric airframe scores the same at 0° and 180°, and picking between
   those on the fourth decimal makes the committed numbers flicker between
   runs for no reason. The reference is left where it is unless turning it
   genuinely helps. */
const YAW_MARGIN = 0.005;

export function alignYaw(cad, ref) {
  const at = (k) => {
    const masks = yawViews(ref, k);
    return { k, masks, iou: VIEWS.reduce((s, v) => s + iou(cad[v.key], masks[v.key]), 0) / 4 };
  };
  let best = at(0);
  for (let k = 1; k < 4; k++) {
    const c = at(k);
    if (c.iou > best.iou + YAW_MARGIN) best = c;
  }
  return best;
}

export function score(cad, ref, N = DEFAULT_RES) {
  const per = {};
  for (const view of VIEWS) {
    per[view.key] = { iou: iou(cad[view.key], ref[view.key]), chamfer: chamfer(cad[view.key], ref[view.key], N) };
  }
  const mean = (f) => {
    const vs = VIEWS.map((v) => f(per[v.key])).filter((x) => x != null);
    return vs.length ? vs.reduce((a, b) => a + b, 0) / vs.length : null;
  };
  const pc = proportions(cad, N), pr = proportions(ref, N);
  const rel = (a, b) => (b ? (a - b) / b : null);      // signed: + means the CAD is bigger
  return {
    iou: { ...Object.fromEntries(VIEWS.map((v) => [v.key, per[v.key].iou])), mean: mean((p) => p.iou) },
    chamfer: { ...Object.fromEntries(VIEWS.map((v) => [v.key, per[v.key].chamfer])), mean: mean((p) => p.chamfer) },
    aspect_error: pc && pr
      ? VIEWS.reduce((s, v, i) => s + Math.abs(rel(pc.aspect[i], pr.aspect[i])), 0) / 4 : null,
    axis_error: pc && pr ? { x: rel(pc.x, pr.x), y: rel(pc.y, pr.y), z: rel(pc.z, pr.z) } : null,
    proportion: pc && pr ? { cad: [pc.x, pc.y, pc.z], ref: [pr.x, pr.y, pr.z] } : null,
  };
}

/* -------------------------------------------------------------------- I/O */

export function dumpMasks(dir, id, cad, ref, N = DEFAULT_RES) {
  mkdirSync(`${dir}/${id}`, { recursive: true });
  for (const view of VIEWS) {
    const a = cad[view.key], b = ref[view.key];
    const solid = (g) => Uint8Array.from(g, (v) => (v ? 255 : 0));
    writeFileSync(`${dir}/${id}/${view.key}.png`, encodePng(N, N, solid(b), 1));
    writeFileSync(`${dir}/${id}/${view.key}.cad.png`, encodePng(N, N, solid(a), 1));
    const rgb = new Uint8Array(N * N * 3);
    for (let i = 0; i < N * N; i++) {
      // overlap reads white, CAD alone red, reference alone blue
      rgb[i * 3] = a[i] ? 255 : 0;
      rgb[i * 3 + 1] = a[i] && b[i] ? 255 : 0;
      rgb[i * 3 + 2] = b[i] ? 255 : 0;
    }
    writeFileSync(`${dir}/${id}/${view.key}.overlay.png`, encodePng(N, N, rgb, 3));
  }
}

const IMAGE_EXT = ["png", "jpg", "jpeg", "pgm", "ppm", "pbm", "pnm"];

export function viewFiles(dir, id) {
  const found = {};
  for (const view of VIEWS) {
    for (const stem of [view.key, view.label]) {
      for (const ext of IMAGE_EXT) {
        const f = `${dir}/${id}/${stem}.${ext}`;
        if (!found[view.key] && existsSync(f)) found[view.key] = f;
      }
    }
    if (!found[view.key]) {
      throw new Error(`${dir}/${id}/ 에서 ${view.label} 실루엣을 찾지 못했습니다 `
        + `(${view.key}.png 또는 ${view.label}.png)`);
    }
  }
  return found;
}

/* ------------------------------------------------------------- comparison */

const MESH_DIR = path("docs/assets/meshes");
const meshIndexOnce = () => JSON.parse(readFileSync(`${MESH_DIR}/index.json`, "utf8"));

/** Compile one sample and score it against its reference. */
export function compare(id, {
  ref = "mesh", res = DEFAULT_RES, specs = path("docs/specs"),
  views = path("docs/assets/views"), meshIndex = null, align = true,
  invert = false, dump = null,
} = {}) {
  const spec = JSON.parse(readFileSync(`${specs}/${id}.json`, "utf8"));
  const { root } = buildFromSpec(spec, {});
  const cadModel = positionsFromObject3D(root);
  if (!cadModel) throw new Error("컴파일된 형상이 비어 있습니다");
  const cad = masksFromGeometry(cadModel, res);

  let refMasks;
  if (ref === "mesh") {
    const index = meshIndex || meshIndexOnce();
    if (!index[id]) throw new Error("1단계 메시가 등록되어 있지 않습니다");
    const mesh = positionsFromGlb(readFileSync(`${MESH_DIR}/${index[id].file}`));
    if (!mesh) throw new Error("메시를 읽지 못했습니다");
    refMasks = masksFromGeometry(mesh, res);
  } else {
    refMasks = masksFromImages(viewFiles(views, id), res, invert);
  }

  const aligned = align ? alignYaw(cad, refMasks) : { k: 0, masks: refMasks };
  const r = score(cad, aligned.masks, res);
  r.yaw_deg = aligned.k * 90;
  /* The extent of the points themselves, not Box3.setFromObject: that one
     transforms each part's box and unions the results, so a diagonal arm
     contributes the corner of its rotated box and the assembly reads 830mm
     across where the geometry is 680mm. The silhouettes are normalised by the
     true extent, so the millimetres printed beside them have to be the same
     number or the two halves of the report disagree. */
  r.size_mm = frameOf(cadModel).extent.map((v) => +v.toFixed(1));
  if (dump) dumpMasks(dump, id, cad, aligned.masks, res);
  return r;
}

/* ------------------------------------------------------------------- main */

function main() {
  const TAKES_VALUE = new Set(["ref", "res", "specs", "views", "dump"]);
  const opt = {};
  let ids = [];
  for (let i = 0, a = process.argv.slice(2); i < a.length; i++) {
    if (!a[i].startsWith("--")) { ids.push(a[i]); continue; }
    const name = a[i].slice(2);
    opt[name] = TAKES_VALUE.has(name) ? a[++i] : true;
  }

  const REF = opt.ref || "mesh";
  const N = Math.max(16, parseInt(opt.res, 10) || DEFAULT_RES);
  const VIEWDIR = opt.views || path("docs/assets/views");
  const AS_JSON = !!opt.json;
  const OUT = path("docs/specs/_similarity.json");

  if (REF !== "mesh" && REF !== "views") {
    console.error("--ref 는 mesh 또는 views 입니다");
    return 2;
  }

  const meshIndex = meshIndexOnce();
  if (!ids.length) {
    ids = REF === "mesh" ? Object.keys(meshIndex)
      : existsSync(VIEWDIR)
        ? readdirSync(VIEWDIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)
        : [];
  }
  if (!ids.length) {
    console.error(REF === "views" ? `${VIEWDIR} 에 참조 실루엣 폴더가 없습니다` : "비교할 샘플이 없습니다");
    return 2;
  }

  const options = {
    ref: REF, res: N, views: VIEWDIR, meshIndex,
    specs: opt.specs || path("docs/specs"),
    align: !opt["no-align"], invert: !!opt.invert, dump: opt.dump || null,
  };

  const results = {};
  let failures = 0;
  for (const id of ids) {
    try {
      results[id] = compare(id, options);
    } catch (e) {
      failures++;
      results[id] = { error: e.message };
    }
  }

  /* Rounded before it is written or printed: this file is committed and
     diffed, and a regression should read as a changed number, not as noise in
     the sixteenth decimal place. */
  const round = (v) => (typeof v === "number" ? +v.toFixed(4) : v);
  const deep = (o) => (Array.isArray(o) ? o.map(deep)
    : o && typeof o === "object" ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, deep(v)]))
      : round(o));
  const samples = deep(results);

  const pct = (v, digits = 0) => (v == null ? "  —  " : `${(v * 100).toFixed(digits)}%`);
  const signed = (v) => (v == null ? "  —  " : `${v >= 0 ? "+" : ""}${(v * 100).toFixed(0)}%`);

  if (AS_JSON) {
    console.log(JSON.stringify({ ref: REF, grid: N, samples }, null, 2));
  } else {
    console.log(`참조: ${REF === "mesh" ? "1단계 메시" : "실루엣 이미지"} · 격자 ${N}×${N}\n`);
    console.log("샘플".padEnd(16) + "정면  좌측  후면  우측   평균 │ 경계   종횡비 │ ΔX    ΔY    ΔZ    │ 회전");
    console.log("─".repeat(86));
    for (const id of ids) {
      const r = results[id];
      if (r.error) { console.log(id.padEnd(16) + r.error); continue; }
      console.log(id.padEnd(16)
        + VIEWS.map((v) => pct(r.iou[v.key]).padStart(4)).join("  ")
        + "  " + pct(r.iou.mean).padStart(5)
        + " │ " + pct(r.chamfer.mean, 1).padStart(5)
        + " " + pct(r.aspect_error, 1).padStart(6)
        + " │ " + ["x", "y", "z"].map((a) => signed(r.axis_error?.[a]).padStart(5)).join(" ")
        + " │ " + `${r.yaw_deg}°`.padStart(4));
    }
    const good = ids.map((i) => results[i]).filter((r) => !r.error);
    if (good.length > 1) {
      console.log("─".repeat(86));
      console.log("평균".padEnd(16) + " ".repeat(24)
        + pct(good.reduce((s, r) => s + r.iou.mean, 0) / good.length).padStart(5)
        + " │ " + pct(good.reduce((s, r) => s + r.chamfer.mean, 0) / good.length, 1).padStart(5));
    }
    console.log("\nIoU 실루엣 일치도(높을수록 좋음) · 경계 외곽선 거리 · 종횡비와 치수 오차는 최대 치수 대비 비율"
      + "\n회전은 참조를 맞추려고 돌린 각도입니다 (--no-align 으로 끕니다)");
  }

  if (!opt["no-write"]) {
    /* Merged, not overwritten: a run over one sample, or over the other kind
       of reference, must not delete the numbers the other runs recorded. A
       change of grid does invalidate them, so that block starts over. */
    let file = {};
    if (existsSync(OUT)) { try { file = JSON.parse(readFileSync(OUT, "utf8")); } catch { file = {}; } }
    const keep = file[REF]?.grid === N ? file[REF].samples : {};
    /* A sample that threw has no numbers, only a message. Recording that would
       overwrite the last good measurement with a note about today's outage. */
    const fresh = Object.fromEntries(Object.entries(samples).filter(([, r]) => !r.error));
    file[REF] = { grid: N, samples: { ...keep, ...fresh } };
    const ordered = Object.fromEntries(["mesh", "views"].filter((k) => file[k]).map((k) => [k, file[k]]));
    writeFileSync(OUT, `${JSON.stringify(ordered, null, 2)}\n`);
    if (!AS_JSON) console.log("docs/specs/_similarity.json 에 기록했습니다.");
  }
  return failures ? 1 : 0;
}

// importable as a library; the CLI only runs when this file is the entry point
if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  process.exit(main());
}
