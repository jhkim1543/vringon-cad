/* ==========================================================================
   Does the compiled CAD look like the SAME DRONE as the photograph?

   tools/similarity.mjs answers a narrower question — do the four silhouettes
   overlap — and for a primitive-built CAD that number tops out in the sixties
   by construction: a lofted canopy and a rounded box never share an outline.
   Yet a person shown the photo and the render will say "yes, that is the
   racing quad" long before the outlines agree, because they are not matching
   outlines. They are matching what the aircraft is made of, how big its parts
   are relative to each other, where those parts sit, and only then the exact
   edge and the colour. This tool measures those layers separately and reports
   each one as it is; the composite is a weighted mean of honest numbers and
   nothing in here is tuned to reach a target.

   Layers (each 0..1, printed as %):

     composition  What the drone is made of. Rotor count implied by the
                  architecture the prompt asked for vs the rotors the spec
                  actually places; the numeric claims in the prompt (wheelbase,
                  span, cage diameter) vs the spec; the features the prompt
                  names vs the part list; and, when a photo inventory is
                  available, the parts an inspector saw in the photograph vs
                  the parts the spec realised.
     proportion   How big things are relative to each other: per-axis extent
                  ratios and per-view aspect ratios of the four silhouettes,
                  scored as min/max so 20% too wide and 20% too narrow cost the
                  same.
     layout       Where the mass sits. The silhouettes are compared as mass
                  distributions — column and row profiles plus a coarse cell
                  grid — after the same canonical framing similarity.mjs uses.
                  A silhouette carries no part labels, so this deliberately
                  does not pretend to know which blob is the payload; what it
                  does know is whether the mass is where the photo has it
                  (rotor row up top, tank below, mast on the centreline).
     silhouette   The plain four-view IoU from similarity.mjs, unchanged.
     appearance   Colour. The dominant colours of the photographed aircraft
                  (foreground only, background estimated from the picture
                  frame) against the dominant colours of the flat-colour
                  renders made from the spec's materials.

   Weights and why this order: 구성 30 · 비율 25 · 배치 20 · 형상 15 · 외관 10.
   Composition first because a hexacopter with a spray tank is not the same
   drone as a quad with a gimbal whatever the outlines say; proportion next
   because a squat wide-span airframe reads differently from a tall narrow
   one even with identical parts; layout third because it distinguishes the
   same parts arranged differently; silhouette fourth because it is the layer
   a primitive CAD is structurally unable to satisfy and the one people are
   most tolerant of; appearance last because a repaint is still the same
   drone. The unweighted mean is printed beside the composite so a reader can
   see the weights are not doing the work.

   Reference. The photo-derived four-view silhouettes in docs/assets/views/
   when a sample has them (--ref views, the default), else the stage-1 mesh.
   Both are the references similarity.mjs already accepts.

   Renders. There is no WebGL headless, so the four views are rasterised here
   with a depth buffer and each triangle painted in its material's base colour
   — no lighting, so the colours in the picture are exactly the colours the
   appearance layer compares. They land in docs/assets/renders/<id>/ next to a
   copy of the photograph and an outline overlay of the reference silhouette,
   so a person can put photo and render side by side.

     node tools/design-similarity.mjs [id ...] [--json] [--dump]
                                     [--ref views|mesh] [--res N]
                                     [--inventory] [--no-render] [--no-write]

   --inventory asks the primary vision model for a fresh photo inventory
   (costs a call per sample); without it the cached inventory in
   docs/specs/_photo-inventory.json is used, and a sample with no cache scores
   composition from the prompt alone and says so. Results are written to
   docs/specs/_design-similarity.json — the leading underscore keeps the
   sample loader, the QA run and the version stamp away from it.
   ========================================================================== */
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve, extname } from "node:path";
import { createHash } from "node:crypto";
import { buildFromSpec } from "../js/spec-cad.js";
import { positionsFromGlb } from "../js/mesh-loft.js";
import { isProp } from "../js/spec-to-code.js";
import { decodeImage, encodePng } from "./image-io.mjs";
import {
  VIEWS, masksFromGeometry, masksFromImages, viewFiles, alignYaw, score,
} from "./similarity.mjs";

const ROOT = new URL("../", import.meta.url);
const path = (rel) => fileURLToPath(new URL(rel, ROOT));

const SPEC_DIR = path("docs/specs");
const VIEW_DIR = path("docs/assets/views");
const MESH_DIR = path("docs/assets/meshes");
const PHOTO_DIR = path("docs/assets/samples/drones");
const RENDER_DIR = path("docs/assets/renders");
const OUT = path("docs/specs/_design-similarity.json");
const INVENTORY_CACHE = path("docs/specs/_photo-inventory.json");

/* Same table tools/build-views.mjs carries: the photographs were named before
   the samples were. Two samples (delivery-octo, isr-wing) have no photograph
   and no mesh — for those only the composition layer can be measured. */
export const PHOTOS = {
  "inspect-quad": "inspection-quad.jpg",
  "agri-hexa": "agri-hexa.jpg",
  "map-wing": "mapping-fixedwing.jpg",
  "sar-vtol": "sar-vtol.jpg",
  "cage-inspect": "cage-inspect.png",
  "fpv-racer": "fpv-racer.png",
  "fire-octo": "fire-octo.png",
  "relay-hexa": "relay-hexa.png",
};

/* Rotors an architecture implies. Reading it off the recipe rather than the
   spec's own rotor_count is the point: the recipe came from the prompt, the
   rotor_count came from the same model that wrote the parts. */
const ROTORS_BY_RECIPE = {
  QUAD_X: 4, QUAD_PLUS: 4, HEXA: 6, OCTO_X8: 8, OCTO: 8,
  CAGED_MULTIROTOR: 4, FIXED_WING: 1, LIFT_AND_CRUISE: 5, TILT_ROTOR: 4, TAIL_SITTER: 2,
};

export const WEIGHTS = { composition: 0.30, proportion: 0.25, layout: 0.20, silhouette: 0.15, appearance: 0.10 };
export const LAYER_KO = { composition: "구성", proportion: "비율", layout: "배치", silhouette: "형상", appearance: "외관" };

const PAD = 1.1;           // same spill margin as similarity.mjs
const MASK_RES = 128;      // grid the metrics run on
const RENDER_RES = 512;    // grid the pictures are drawn on
const BG = [214, 219, 226];      // render backdrop — cool grey, unlike any airframe colour used
const REF_OUTLINE = [200, 40, 40];   // reference silhouette outline drawn over the render

/* ---------------------------------------------------------------- geometry */

/** Triangles of the compiled CAD with each one's material colour and part id. */
export function colouredTriangles(root) {
  root.updateMatrixWorld(true);
  const pos = [], tris = [], colour = [], part = [];
  let base = 0;
  root.traverse((o) => {
    const a = o.isMesh && o.geometry?.attributes?.position;
    if (!a) return;
    const m = Array.isArray(o.material) ? o.material[0] : o.material;
    /* getHex() hands back the sRGB value the spec wrote (base_color_hex);
       .r/.g/.b are the linear working values and would come out near-black
       for every dark grey. */
    const hx = m?.color ? m.color.getHex() : 0x9aa0aa;
    const c = [(hx >> 16) & 255, (hx >> 8) & 255, hx & 255];
    const e = o.matrixWorld.elements;
    for (let i = 0; i < a.count; i++) {
      const x = a.getX(i), y = a.getY(i), z = a.getZ(i);
      pos.push(e[0] * x + e[4] * y + e[8] * z + e[12],
        e[1] * x + e[5] * y + e[9] * z + e[13],
        e[2] * x + e[6] * y + e[10] * z + e[14]);
    }
    const idx = o.geometry.index;
    const n = idx ? idx.count : a.count;
    const ci = colour.push(c) - 1;
    part.push(o.userData?.regionId || null);
    for (let i = 0; i + 2 < n; i += 3) {
      tris.push(base + (idx ? idx.getX(i) : i), base + (idx ? idx.getX(i + 1) : i + 1),
        base + (idx ? idx.getX(i + 2) : i + 2), ci);
    }
    base += a.count;
  });
  if (!base) return null;
  return { positions: Float64Array.from(pos), count: base, tris: Uint32Array.from(tris), colour, part };
}

function frameOf(model) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < model.count; i++) for (let a = 0; a < 3; a++) {
    const v = model.positions[i * 3 + a];
    if (v < lo[a]) lo[a] = v;
    if (v > hi[a]) hi[a] = v;
  }
  const extent = [hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]];
  return { c: [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2], size: Math.max(...extent) || 1, extent };
}

/* ------------------------------------------------------ flat-colour render */

/** Depth-buffered flat-colour rasteriser for one canonical view.
    Returns {rgb, cover, colourIndex} at N×N; cover marks painted pixels. */
export function renderView(model, view, N) {
  const { c, size } = frameOf(model);
  const ca = Math.cos(view.az), sa = Math.sin(view.az);
  const sx = new Float64Array(model.count), sy = new Float64Array(model.count), sz = new Float64Array(model.count);
  for (let i = 0; i < model.count; i++) {
    const x = (model.positions[i * 3] - c[0]) / size;
    const y = (model.positions[i * 3 + 1] - c[1]) / size;
    const z = (model.positions[i * 3 + 2] - c[2]) / size;
    sx[i] = ((x * ca - z * sa) + PAD / 2) / PAD * N;
    sy[i] = (PAD / 2 - y) / PAD * N;
    /* Towards the camera. For the front view (az 0) that is +z, the nose;
       for the left view (az −90°) it is −x, the aircraft's left side. */
    sz[i] = x * sa + z * ca;
  }
  const depth = new Float64Array(N * N).fill(-Infinity);
  const cidx = new Int32Array(N * N).fill(-1);
  const t = model.tris;
  for (let k = 0; k + 3 < t.length; k += 4) {
    const a = t[k], b = t[k + 1], d = t[k + 2], ci = t[k + 3];
    let x0 = sx[a], y0 = sy[a], x1 = sx[b], y1 = sy[b], x2 = sx[d], y2 = sy[d];
    let z0 = sz[a], z1 = sz[b], z2 = sz[d];
    let area = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0);
    if (area < 0) {
      const tx = x1, ty = y1, tz = z1; x1 = x2; y1 = y2; z1 = z2; x2 = tx; y2 = ty; z2 = tz; area = -area;
    }
    const lo = Math.max(0, Math.floor(Math.min(x0, x1, x2)));
    const hi = Math.min(N - 1, Math.ceil(Math.max(x0, x1, x2)));
    const to = Math.max(0, Math.floor(Math.min(y0, y1, y2)));
    const bo = Math.min(N - 1, Math.ceil(Math.max(y0, y1, y2)));
    if (area === 0) {
      /* A wall seen edge-on: paint its edge at its own depth so a thin boom
         does not vanish from the picture the way it would from an area fill. */
      const zavg = (z0 + z1 + z2) / 3;
      const seg = (ax, ay, bx, by) => {
        const n = Math.ceil(Math.max(Math.abs(bx - ax), Math.abs(by - ay))) || 1;
        for (let i = 0; i <= n; i++) {
          const px = Math.floor(ax + ((bx - ax) * i) / n), py = Math.floor(ay + ((by - ay) * i) / n);
          if (px < 0 || py < 0 || px >= N || py >= N) continue;
          const q = py * N + px;
          if (zavg > depth[q]) { depth[q] = zavg; cidx[q] = ci; }
        }
      };
      seg(x0, y0, x1, y1); seg(x1, y1, x2, y2); seg(x2, y2, x0, y0);
      continue;
    }
    for (let py = to; py <= bo; py++) {
      const cy = py + 0.5;
      for (let px = lo; px <= hi; px++) {
        const cx = px + 0.5;
        const w0 = (x1 - x0) * (cy - y0) - (cx - x0) * (y1 - y0);
        if (w0 < 0) continue;
        const w1 = (x2 - x1) * (cy - y1) - (cx - x1) * (y2 - y1);
        if (w1 < 0) continue;
        const w2 = (x0 - x2) * (cy - y2) - (cx - x2) * (y0 - y2);
        if (w2 < 0) continue;
        // barycentric depth: w0 is the weight of vertex 2, w1 of vertex 0, w2 of vertex 1
        const z = (w1 * z0 + w2 * z1 + w0 * z2) / area;
        const q = py * N + px;
        if (z > depth[q]) { depth[q] = z; cidx[q] = ci; }
      }
    }
  }
  const rgb = new Uint8Array(N * N * 3);
  const cover = new Uint8Array(N * N);
  for (let q = 0; q < N * N; q++) {
    const col = cidx[q] >= 0 ? model.colour[cidx[q]] : BG;
    rgb[q * 3] = col[0]; rgb[q * 3 + 1] = col[1]; rgb[q * 3 + 2] = col[2];
    cover[q] = cidx[q] >= 0 ? 1 : 0;
  }
  return { rgb, cover, colourIndex: cidx };
}

/** Draw a one-pixel outline of `mask` (N×N) into an RGB buffer of the same size. */
function strokeOutline(rgb, mask, N, colour) {
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const i = y * N + x;
    if (!mask[i]) continue;
    const edge = x === 0 || y === 0 || x === N - 1 || y === N - 1
      || !mask[i - 1] || !mask[i + 1] || !mask[i - N] || !mask[i + N];
    if (!edge) continue;
    rgb[i * 3] = colour[0]; rgb[i * 3 + 1] = colour[1]; rgb[i * 3 + 2] = colour[2];
  }
}

/** Nearest-neighbour upscale of a small mask to the render grid. */
function upscaleMask(mask, n, N) {
  const out = new Uint8Array(N * N);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    out[y * N + x] = mask[Math.floor((y * n) / N) * n + Math.floor((x * n) / N)];
  }
  return out;
}

/* ------------------------------------------------------------- proportion */

function contentBox(g, N) {
  let x0 = N, x1 = -1, y0 = N, y1 = -1;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    if (!g[y * N + x]) continue;
    if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
  }
  return x1 < 0 ? null : { w: x1 - x0 + 1, h: y1 - y0 + 1 };
}

const ratio = (a, b) => (a > 0 && b > 0 ? Math.min(a, b) / Math.max(a, b) : 0);

/** min/max agreement of the per-axis extents and the per-view aspect ratios. */
export function proportionLayer(sim, cad, ref, N) {
  const p = sim.proportion;
  if (!p) return null;
  const axes = [0, 1, 2].map((a) => ratio(p.cad[a], p.ref[a]));
  const aspects = VIEWS.map((v) => {
    const bc = contentBox(cad[v.key], N), br = contentBox(ref[v.key], N);
    return bc && br ? ratio(bc.w / bc.h, br.w / br.h) : 0;
  });
  const mean = (xs) => xs.reduce((s, x) => s + x, 0) / xs.length;
  return {
    score: (mean(axes) + mean(aspects)) / 2,
    axis: { x: axes[0], y: axes[1], z: axes[2] },
    aspect: Object.fromEntries(VIEWS.map((v, i) => [v.key, aspects[i]])),
  };
}

/* ----------------------------------------------------------------- layout */

/** Histogram intersection of two mass distributions (each summed to 1). */
function intersection(a, b) {
  let sa = 0, sb = 0;
  for (let i = 0; i < a.length; i++) { sa += a[i]; sb += b[i]; }
  if (!sa || !sb) return 0;
  let s = 0;
  for (let i = 0; i < a.length; i++) s += Math.min(a[i] / sa, b[i] / sb);
  return s;
}

function profiles(g, N, cells) {
  const col = new Float64Array(N), row = new Float64Array(N), cell = new Float64Array(cells * cells);
  let mx = 0, my = 0, m = 0;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    if (!g[y * N + x]) continue;
    col[x]++; row[y]++; m++; mx += x; my += y;
    cell[Math.floor((y * cells) / N) * cells + Math.floor((x * cells) / N)]++;
  }
  return { col, row, cell, centroid: m ? [mx / m / N, my / m / N] : null };
}

/** Where the mass is: column/row profiles and an 8×8 cell grid, per view. */
export function layoutLayer(cad, ref, N) {
  const CELLS = 8;
  const per = {};
  const all = [];
  for (const v of VIEWS) {
    const a = profiles(cad[v.key], N, CELLS), b = profiles(ref[v.key], N, CELLS);
    const col = intersection(a.col, b.col), row = intersection(a.row, b.row), cell = intersection(a.cell, b.cell);
    const shift = a.centroid && b.centroid
      ? Math.hypot(a.centroid[0] - b.centroid[0], a.centroid[1] - b.centroid[1]) * PAD : null;
    per[v.key] = { col, row, cell, centroid_shift: shift };
    all.push((col + row + cell) / 3);
  }
  return { score: all.reduce((s, x) => s + x, 0) / all.length, views: per };
}

/* ------------------------------------------------------------- appearance */

/** Weighted k-means over RGB samples; returns clusters sorted by weight. */
function kmeans(samples, k, iters = 12) {
  if (!samples.length) return [];
  // seed on evenly spaced samples of the (already shuffled) list
  let centres = [];
  for (let i = 0; i < k; i++) centres.push(samples[Math.floor((i * samples.length) / k)].slice(0, 3));
  let assign = new Int32Array(samples.length);
  for (let it = 0; it < iters; it++) {
    const sum = centres.map(() => [0, 0, 0, 0]);
    for (let i = 0; i < samples.length; i++) {
      const s = samples[i];
      let best = 0, bd = Infinity;
      for (let j = 0; j < centres.length; j++) {
        const c = centres[j];
        const d = (s[0] - c[0]) ** 2 + (s[1] - c[1]) ** 2 + (s[2] - c[2]) ** 2;
        if (d < bd) { bd = d; best = j; }
      }
      assign[i] = best;
      const w = s[3];
      sum[best][0] += s[0] * w; sum[best][1] += s[1] * w; sum[best][2] += s[2] * w; sum[best][3] += w;
    }
    centres = sum.map((t, j) => (t[3] ? [t[0] / t[3], t[1] / t[3], t[2] / t[3]] : centres[j]));
  }
  const weight = new Float64Array(centres.length);
  let total = 0;
  for (let i = 0; i < samples.length; i++) { weight[assign[i]] += samples[i][3]; total += samples[i][3]; }
  return centres.map((c, j) => ({ rgb: c.map(Math.round), weight: total ? weight[j] / total : 0 }))
    .filter((c) => c.weight > 0.005)
    .sort((a, b) => b.weight - a.weight);
}

/** Foreground of a studio product shot, without a segmentation model.

    Three cues, each reliable for a different failure of the others. Colour:
    a pixel whose channel ratios against the backdrop diverge is a different
    hue (an orange accent, a bluish white on a beige backdrop), and one far
    darker than any cast shadow is the object. Enclosure: the backdrop is
    smooth and the aircraft is bounded by edges, so a flood fill from the
    picture frame that may not cross an edge reaches every backdrop pixel and
    no interior one — which is what finds a white wing on a light grey
    backdrop, where colour alone sees nothing. Interior pixels still have to
    differ from the backdrop a little, or the backdrop seen through a cage
    would count as aircraft. Soft shadow rims are edges too weak to block the
    fill, so they end up on the backdrop side.

    Works on a copy no wider than 512px: the palette does not need more and
    the flood fill is linear in pixels. */
function segmentPhoto(img, W = 512) {
  const { w, h, rgb } = img;
  const sc = Math.max(1, Math.max(w, h) / W);
  const sw = Math.round(w / sc), sh = Math.round(h / sc);
  const R = new Uint8Array(sw * sh * 3), lum = new Float32Array(sw * sh);
  for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) {
    let r = 0, g = 0, b = 0, n = 0;
    const x0 = Math.floor(x * sc), x1 = Math.max(x0 + 1, Math.min(w, Math.floor((x + 1) * sc)));
    const y0 = Math.floor(y * sc), y1 = Math.max(y0 + 1, Math.min(h, Math.floor((y + 1) * sc)));
    for (let yy = y0; yy < y1; yy++) for (let xx = x0; xx < x1; xx++) {
      const i = (yy * w + xx) * 3; r += rgb[i]; g += rgb[i + 1]; b += rgb[i + 2]; n++;
    }
    const q = y * sw + x;
    R[q * 3] = r / n; R[q * 3 + 1] = g / n; R[q * 3 + 2] = b / n;
    lum[q] = (0.299 * r + 0.587 * g + 0.114 * b) / n;
  }
  /* The backdrop is whatever colour the frame of the picture is: product
     shots put the object in the middle. Median of a 4% border. */
  const bw = Math.max(2, Math.round(Math.min(sw, sh) * 0.04));
  const border = [];
  for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) {
    if (x >= bw && x < sw - bw && y >= bw && y < sh - bw) continue;
    border.push([R[(y * sw + x) * 3], R[(y * sw + x) * 3 + 1], R[(y * sw + x) * 3 + 2]]);
  }
  const med = (k) => border.map((p) => p[k]).sort((a, b) => a - b)[border.length >> 1];
  const bg = [med(0), med(1), med(2)];

  const EDGE = 7;   // luminance step that is a real edge, not backdrop grain or a shadow gradient
  const edge = new Uint8Array(sw * sh);
  const cd = (a, b) => Math.abs(R[a * 3] - R[b * 3]) + Math.abs(R[a * 3 + 1] - R[b * 3 + 1]) + Math.abs(R[a * 3 + 2] - R[b * 3 + 2]);
  for (let y = 1; y < sh - 1; y++) for (let x = 1; x < sw - 1; x++) {
    const q = y * sw + x;
    const dl = Math.max(Math.abs(lum[q] - lum[q - 1]), Math.abs(lum[q] - lum[q + 1]),
      Math.abs(lum[q] - lum[q - sw]), Math.abs(lum[q] - lum[q + sw]));
    const dc = Math.max(cd(q, q - 1), cd(q, q + 1), cd(q, q - sw), cd(q, q + sw));
    if (dl > EDGE || dc > EDGE * 2.5) edge[q] = 1;
  }
  const wall = new Uint8Array(sw * sh);   // edges dilated by one so a hairline gap does not leak
  for (let y = 1; y < sh - 1; y++) for (let x = 1; x < sw - 1; x++) {
    const q = y * sw + x;
    if (edge[q] || edge[q - 1] || edge[q + 1] || edge[q - sw] || edge[q + sw]) wall[q] = 1;
  }
  const reach = new Uint8Array(sw * sh);
  const stack = [];
  for (let x = 0; x < sw; x++) stack.push(x, (sh - 1) * sw + x);
  for (let y = 0; y < sh; y++) stack.push(y * sw, y * sw + sw - 1);
  while (stack.length) {
    const q = stack.pop();
    if (reach[q] || wall[q]) continue;
    reach[q] = 1;
    const x = q % sw, y = (q - x) / sw;
    if (x > 0) stack.push(q - 1);
    if (x < sw - 1) stack.push(q + 1);
    if (y > 0) stack.push(q - sw);
    if (y < sh - 1) stack.push(q + sw);
  }

  const fg = new Uint8Array(sw * sh);
  let n = 0;
  for (let q = 0; q < sw * sh; q++) {
    const rr = R[q * 3] / Math.max(1, bg[0]), rg = R[q * 3 + 1] / Math.max(1, bg[1]), rb = R[q * 3 + 2] / Math.max(1, bg[2]);
    const spread = Math.max(rr, rg, rb) - Math.min(rr, rg, rb);
    const l = (rr + rg + rb) / 3;
    const byColour = spread > 0.08 || l < 0.55;
    const enclosed = !reach[q] && !wall[q] && (Math.abs(l - 1) > 0.03 || spread > 0.03);
    const onEdge = wall[q] && (spread > 0.05 || l < 0.8 || l > 1.06);
    if (byColour || enclosed || onEdge) { fg[q] = 1; n++; }
  }
  return { w: sw, h: sh, rgb: R, fg, background: bg, fraction: n / (sw * sh) };
}

/** Dominant colours of the photographed object, background removed. */
export function photoPalette(img) {
  const seg = segmentPhoto(img);
  const samples = [];
  for (let q = 0; q < seg.w * seg.h; q++) {
    if (seg.fg[q]) samples.push([seg.rgb[q * 3], seg.rgb[q * 3 + 1], seg.rgb[q * 3 + 2], 1]);
  }
  // deterministic shuffle so k-means seeding is not row-ordered
  let seed = 12345;
  for (let i = samples.length - 1; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    const j = seed % (i + 1);
    const t = samples[i]; samples[i] = samples[j]; samples[j] = t;
  }
  // eight, not six: a small accent (an orange stripe at 3% of the pixels) must survive as its own cluster
  return { background: seg.background, foreground_fraction: seg.fraction, clusters: kmeans(samples, 8), mask: seg };
}

/** Dominant colours across the four flat renders, area-weighted. */
export function renderPalette(renders) {
  const tally = new Map();
  for (const r of renders) {
    for (let q = 0; q < r.cover.length; q++) {
      if (!r.cover[q]) continue;
      const key = (r.rgb[q * 3] << 16) | (r.rgb[q * 3 + 1] << 8) | r.rgb[q * 3 + 2];
      tally.set(key, (tally.get(key) || 0) + 1);
    }
  }
  const samples = [...tally].map(([k, n]) => [(k >> 16) & 255, (k >> 8) & 255, k & 255, n]);
  return kmeans(samples, Math.min(6, samples.length));
}

/* Colour distance in a lightness/opponent split with lightness at half
   weight. The photograph is lit and the render is not: a white canopy in
   shade photographs as a warm mid grey, and a full-weight RGB distance calls
   that a different colour from #f0f0f0 when it is the same paint under less
   light. Hue and saturation survive shading; lightness only half does. Two
   colours 0.4 apart in this normalised space are different colours; anything
   closer is the same colour, linearly. */
const COLOUR_TOL = 0.4;
const colourDist = (a, b) => {
  const dL = ((a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2])) / 3;
  const dA = (a[0] - a[1]) - (b[0] - b[1]);
  const dB = ((a[0] + a[1]) / 2 - a[2]) - ((b[0] + b[1]) / 2 - b[2]);
  return Math.hypot(0.5 * dL, dA, dB) / (255 * Math.sqrt(3));
};
export const colourSim = (a, b) => Math.max(0, 1 - colourDist(a, b) / COLOUR_TOL);

/** Symmetric weighted nearest-colour agreement between two palettes. */
export function paletteMatch(pa, pb) {
  const oneWay = (from, to) => {
    let s = 0, w = 0;
    for (const c of from) {
      let best = 0;
      for (const d of to) best = Math.max(best, colourSim(c.rgb, d.rgb));
      s += best * c.weight; w += c.weight;
    }
    return w ? s / w : 0;
  };
  return (oneWay(pa, pb) + oneWay(pb, pa)) / 2;
}

export const hex = (c) => "#" + c.map((v) => v.toString(16).padStart(2, "0")).join("");

/* ------------------------------------------------------------ composition */

const norm = (s) => String(s || "").toLowerCase().replace(/[\s()·,+~\-–—/]/g, "");
/* LED and fasteners may be folded into a neighbouring part — the same
   exemption the specification prompt grants, so it is not counted here. */
const EXEMPT = /led|파스너|퀵릴리즈|볼트|나사|스크류|리벳/i;

/* Words the prompt, the photo inspector and the spec writer use for the same
   hardware. Kept to pairs that are genuinely interchangeable in this domain;
   anything wider would let a camera window pass as a camera. */
const SYNONYM = { "로터": "프로펠러", "프로펠러": "로터", "스풀": "릴", "릴": "스풀", "베이": "bay" };

/** Is one word (already normalised) present in the part names? A single
    character such as 암 or 붐 is only accepted as a whole token — "암" is a
    syllable inside many words, but the part named "카본 프레임 암" is an arm. */
function wordIn(k, partText, partTokens) {
  const one = (w) => (w.length >= 2
    ? partText.includes(w.slice(0, Math.min(4, w.length)))
    : partTokens.has(w));
  return one(k) || (SYNONYM[k] ? one(SYNONYM[k]) : false);
}

/** Does the name `raw` match a spec part? Two routes: any alternative (split
    on ·/ and at a parenthesis) by the same 4-character prefix rule the
    server's inventory gate uses — "살포탱크주입구캡" finds "살포탱크" — or
    every word of the name found somewhere in the part list, which is how
    "짐벌 카메라" finds "EO/IR 카메라 짐벌". */
function nameMatches(raw, partText, partTokens) {
  const keys = String(raw).split(/[·/(]/).map(norm).filter((k) => k.length >= 1);
  if (!keys.length) keys.push(norm(raw));
  if (keys.some((k) => wordIn(k, partText, partTokens))) return true;
  const words = String(raw).replace(/\(.*?\)/g, " ").split(/[\s·/,+]+/).map(norm).filter((w) => w.length >= 2);
  return words.length >= 2 && words.every((w) => wordIn(w, partText, partTokens));
}

/** Rotor discs the spec actually places (instances, not parts). */
function specRotorCount(spec) {
  let n = 0;
  for (const p of spec.parts || []) {
    const s = p.geometry?.size_mm || {};
    if (!isProp({ name: `${p.name || ""} ${p.display_name_ko || ""}`, size: { w: s.w, h: s.h, d: s.d } })) continue;
    n += Math.max(1, p.geometry?.repeat?.count || 1);
  }
  return n;
}

/** Numeric claims in the prompt: "휠베이스 450mm", "날개폭 1200mm", "지름 400mm", "대각 220mm". */
function promptNumbers(prompt, spec) {
  const out = [];
  const sp = spec.size_performance || {}, bb = spec.scale?.bounding_box_mm || {};
  const check = (label, want, got) => {
    if (!(want > 0) || !(got > 0)) return;
    out.push({ label, prompt: want, spec: got, score: ratio(want, got) });
  };
  let m;
  if ((m = /휠베이스\s*(\d+)\s*mm/.exec(prompt))) check("휠베이스", +m[1], sp.wheelbase_mm);
  if ((m = /날개폭\s*(\d+)\s*mm/.exec(prompt))) check("날개폭", +m[1], sp.wingspan_mm || bb.x);
  if ((m = /대각\s*(\d+)\s*mm/.exec(prompt))) check("대각", +m[1], sp.wheelbase_mm);
  if ((m = /지름\s*(\d+)\s*mm/.exec(prompt))) check("지름", +m[1], Math.max(bb.x || 0, bb.z || 0));
  return out;
}

/** Feature clauses in the prompt, matched by their head noun against part names. */
function promptFeatures(prompt, partText, partTokens) {
  const clauses = prompt.split(/[,，]/).slice(1)   // the first clause names the class, not a feature
    .flatMap((c) => c.split(/(?<=[가-힣])와\s|(?<=[가-힣])과\s/))
    .map((c) => c.replace(/\d+\s*(mm|L|개|인치|급)/g, " ").replace(/휠베이스|날개폭|대각|지름/g, " ").trim())
    .filter((c) => c.length >= 2);
  const out = [];
  for (const c of clauses) {
    const tokens = c.split(/\s+/).filter((t) => t.length >= 1);
    if (!tokens.length) continue;
    /* The head noun is the last token ("상부 짐벌 줌 카메라" → 카메라); a
       modifier alone matching would let "프로펠러 가드" pass on the
       propeller. Heads such as 붐·릴·가드·탱크 match on themselves, the
       one-character ones as whole tokens. */
    const head = tokens[tokens.length - 1];
    const hit = wordIn(norm(head), partText, partTokens);
    out.push({ feature: c, head, matched: hit });
  }
  return out;
}

export function compositionLayer(spec, meta, inventory) {
  const names = (spec.parts || []).map((p) => `${p.name || ""} ${p.display_name_ko || ""}`);
  const partText = norm(names.join(" "));
  const partTokens = new Set(names.join(" ").toLowerCase().split(/[\s_()·,+~\-–—/]+/).filter(Boolean));
  const checks = [];

  const recipe = meta?.recipe || spec.classification?.platform_architecture;
  const want = ROTORS_BY_RECIPE[recipe];
  const placed = specRotorCount(spec);
  if (want) checks.push({ name: "로터 수(레시피→배치)", want, got: placed, score: ratio(want, placed) });

  const nums = promptNumbers(meta?.prompt || "", spec);
  for (const n of nums) checks.push({ name: `프롬프트 ${n.label}`, want: n.prompt, got: n.spec, score: n.score });

  const feats = promptFeatures(meta?.prompt || "", partText, partTokens);
  if (feats.length) {
    checks.push({
      name: "프롬프트 특징 반영", want: feats.length, got: feats.filter((f) => f.matched).length,
      score: feats.filter((f) => f.matched).length / feats.length,
      detail: feats.filter((f) => !f.matched).map((f) => f.feature),
    });
  }

  let inv = null;
  if (inventory?.items?.length) {
    const items = inventory.items.filter((x) => x.present && !EXEMPT.test(x.name_ko || ""));
    const missing = items.filter((x) => !nameMatches(x.name_ko, partText, partTokens));
    inv = { total: items.length, missing: missing.map((x) => x.name_ko) };
    if (items.length) {
      checks.push({
        name: "사진 인벤토리 반영", want: items.length, got: items.length - missing.length,
        score: (items.length - missing.length) / items.length, detail: inv.missing,
      });
    }
    const rot = items.find((x) => /프로펠러|로터/.test(x.name_ko || "") && !/가드|캡|허브/.test(x.name_ko || ""));
    if (rot && rot.count > 0) checks.push({ name: "로터 수(사진→배치)", want: rot.count, got: placed, score: ratio(rot.count, placed) });
  }

  const score = checks.length ? checks.reduce((s, c) => s + c.score, 0) / checks.length : null;
  return { score, checks, inventory_source: inventory ? inventory.source : null };
}

/* -------------------------------------------------------- photo inventory */

const CANDIDATES = [
  "프로펠러", "모터 포드", "암(+접이 힌지)", "프로펠러 가드", "프로펠러 허브 캡", "캐노피·셸", "기체 상판/하판 분리선",
  "랜딩기어 다리(+브레이스)", "랜딩 스키드", "배터리(슬레드)", "GNSS/RTK 안테나 마스트", "통신 안테나", "FPV·전방 카메라",
  "짐벌 카메라", "장애물 센서", "LED 표시등", "살포 탱크", "노즐 붐", "살포 노즐", "펌프", "호스 라인", "탐조등",
  "카고 베이", "보호 케이지", "안테나 레이돔", "계류 케이블·스풀", "소화 노즐", "주익", "수직·수평 미익", "카메라 창(하방)",
];

/** Ask the primary vision model what it sees in the photograph. One call per
    sample, cached; the result is data, not a judgement — the matching against
    the spec happens locally and is reproducible. */
async function fetchInventory(id, photo, meta) {
  const cfgPath = path("config.local.json");
  if (!existsSync(cfgPath)) throw new Error("config.local.json 이 없어 사진 인벤토리를 요청할 수 없습니다");
  const cfg = JSON.parse(readFileSync(cfgPath, "utf8"));
  const key = process.env.PRIMARY_LLM_API_KEY || cfg.primary?.apiKey;
  const base = process.env.PRIMARY_LLM_URL || cfg.primary?.baseUrl;
  const model = process.env.PRIMARY_TEXT_MODEL || cfg.primary?.textModel || cfg.primary?.planModel;
  if (!key || !base || !model) throw new Error("config.local.json 의 primary 섹션(키·baseUrl·textModel)이 필요합니다");

  const buf = readFileSync(photo);
  const mime = buf[0] === 0x89 ? "image/png" : "image/jpeg";
  const schema = {
    type: "OBJECT", required: ["items"],
    properties: {
      items: {
        type: "ARRAY",
        items: {
          type: "OBJECT", required: ["name_ko", "present", "count"],
          properties: {
            name_ko: { type: "STRING" }, present: { type: "BOOLEAN" }, count: { type: "INTEGER" },
            where_ko: { type: "STRING" },
          },
        },
      },
    },
  };
  const text = `드론 사진에서 보이는 부품을 전수 조사하는 검사관이다. 추정하지 않는다 — 이미지에서 실제로 식별되는 것만 present로 표기한다.
<task>
이미지의 드론(${meta?.prompt || ""})에서 보이는 부품을 전수 나열한다.
아래 후보를 하나씩 이미지와 대조해 present를 판정하고, 후보에 없어도 보이는 요소는 추가한다.
개수(count)와 위치(where_ko)도 이미지에서 읽어라. 프로펠러의 count는 로터 유닛(모터에 달린 프로펠러) 수이지 블레이드 수가 아니다.
후보: ${CANDIDATES.join(", ")}
최대 24항목. 형상의 정체성을 결정하는 순서로. JSON만.
</task>`;
  const r = await fetch(`${base}/v1beta/models/${model}:generateContent?key=${key}`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text }, { inline_data: { mime_type: mime, data: buf.toString("base64") } }] }],
      generationConfig: { responseMimeType: "application/json", responseSchema: schema, maxOutputTokens: 6000, temperature: 0 },
    }),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(`인벤토리 호출 실패: ${j.error?.message || r.status}`);
  const body = j.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") || "";
  const parsed = JSON.parse(body);
  const items = (parsed.items || []).filter((x) => x && x.name_ko).slice(0, 24);
  return {
    source: "primary/text",
    photo: `docs/assets/samples/drones/${PHOTOS[id]}`,
    photo_sha1: createHash("sha1").update(buf).digest("hex").slice(0, 12),
    at: new Date().toISOString(),
    items,
  };
}

/* ------------------------------------------------------------------- main */

function loadJson(f, fallback = null) {
  if (!existsSync(f)) return fallback;
  try { return JSON.parse(readFileSync(f, "utf8")); } catch { return fallback; }
}

async function evaluate(id, opt, ctx) {
  const spec = loadJson(`${SPEC_DIR}/${id}.json`);
  if (!spec) throw new Error("사양서가 없습니다");
  const meta = ctx.index.find((s) => s.id === id) || null;
  const photo = PHOTOS[id] ? `${PHOTO_DIR}/${PHOTOS[id]}` : null;

  const { root } = buildFromSpec(spec, {});
  const model = colouredTriangles(root);
  if (!model) throw new Error("컴파일된 형상이 비어 있습니다");
  const cadModel = { positions: model.positions, count: model.count,
    indices: Uint32Array.from({ length: (model.tris.length / 4) * 3 }, (_, i) => model.tris[Math.floor(i / 3) * 4 + (i % 3)]) };
  const cad = masksFromGeometry(cadModel, opt.res);

  /* ---- reference ---- */
  let refMasks = null, refKind = null;
  const hasViews = existsSync(`${VIEW_DIR}/${id}/meta.json`);
  const hasMesh = !!ctx.meshIndex[id];
  if (opt.ref !== "mesh" && hasViews) {
    refMasks = masksFromImages(viewFiles(VIEW_DIR, id), opt.res);
    const vm = loadJson(`${VIEW_DIR}/${id}/meta.json`, {});
    refKind = vm.source === "photo" ? "views(photo)" : "views(mesh)";
  } else if (hasMesh) {
    const mesh = positionsFromGlb(readFileSync(`${MESH_DIR}/${ctx.meshIndex[id].file}`));
    refMasks = masksFromGeometry(mesh, opt.res);
    refKind = "mesh";
  }

  const layers = {};
  let aligned = null, sim = null;
  if (refMasks) {
    aligned = alignYaw(cad, refMasks);
    sim = score(cad, aligned.masks, opt.res);
    layers.silhouette = { score: sim.iou.mean, iou: sim.iou, chamfer: sim.chamfer.mean, yaw_deg: aligned.k * 90 };
    layers.proportion = proportionLayer(sim, cad, aligned.masks, opt.res);
    layers.layout = layoutLayer(cad, aligned.masks, opt.res);
  }

  /* ---- renders ---- */
  const renders = VIEWS.map((v) => renderView(model, v, RENDER_RES));
  const RENDER_KEY = { front: "front", left: "left", rear: "back", right: "right" };
  if (opt.render) {
    const dir = `${RENDER_DIR}/${id}`;
    mkdirSync(dir, { recursive: true });
    VIEWS.forEach((v, i) => {
      const r = renders[i];
      writeFileSync(`${dir}/${RENDER_KEY[v.key]}.png`, encodePng(RENDER_RES, RENDER_RES, r.rgb, 3));
      if (aligned) {
        /* Overlay: the render with the reference outline drawn over it, so a
           person sees at once where the CAD stops short of the photo. */
        const over = Uint8Array.from(r.rgb);
        strokeOutline(over, upscaleMask(aligned.masks[v.key], opt.res, RENDER_RES), RENDER_RES, REF_OUTLINE);
        writeFileSync(`${dir}/${RENDER_KEY[v.key]}.overlay.png`, encodePng(RENDER_RES, RENDER_RES, over, 3));
        const refImg = Uint8Array.from(upscaleMask(aligned.masks[v.key], opt.res, RENDER_RES), (x) => (x ? 255 : 0));
        writeFileSync(`${dir}/${RENDER_KEY[v.key]}.ref.png`, encodePng(RENDER_RES, RENDER_RES, refImg, 1));
      }
    });
    if (photo) copyFileSync(photo, `${dir}/photo${extname(photo)}`);
  }

  /* ---- appearance ---- */
  if (photo) {
    const img = decodeImage(readFileSync(photo), photo, { rgb: true });
    const pp = photoPalette(img);
    const rp = renderPalette(renders);
    layers.appearance = {
      score: paletteMatch(pp.clusters, rp),
      photo_background: hex(pp.background),
      photo_foreground_fraction: pp.foreground_fraction,
      photo_colors: pp.clusters.map((c) => ({ hex: hex(c.rgb), weight: c.weight })),
      render_colors: rp.map((c) => ({ hex: hex(c.rgb), weight: c.weight })),
    };
    if (opt.render) {
      /* The foreground mask the palette was read from, so a wrong colour
         score can be traced to a wrong segmentation rather than argued about. */
      const m = pp.mask;
      writeFileSync(`${RENDER_DIR}/${id}/photo.mask.png`,
        encodePng(m.w, m.h, Uint8Array.from(m.fg, (x) => (x ? 255 : 0)), 1));
    }
  }

  /* ---- composition ---- */
  let inventory = ctx.inventories[id] || null;
  if (opt.inventory && photo) {
    inventory = await fetchInventory(id, photo, meta);
    ctx.inventories[id] = inventory;
    ctx.inventoryDirty = true;
  }
  layers.composition = compositionLayer(spec, meta, inventory);

  /* ---- composite ---- */
  const present = Object.keys(WEIGHTS).filter((k) => layers[k] && layers[k].score != null);
  const wsum = present.reduce((s, k) => s + WEIGHTS[k], 0);
  const composite = present.length ? present.reduce((s, k) => s + WEIGHTS[k] * layers[k].score, 0) / wsum : null;
  const plain = present.length ? present.reduce((s, k) => s + layers[k].score, 0) / present.length : null;

  return {
    reference: refKind,
    photo: photo ? `docs/assets/samples/drones/${PHOTOS[id]}` : null,
    layers,
    composite,
    unweighted_mean: plain,
    layers_missing: Object.keys(WEIGHTS).filter((k) => !present.includes(k)),
    weights: Object.fromEntries(present.map((k) => [k, WEIGHTS[k] / wsum])),
    size_mm: frameOf(cadModel).extent.map((v) => +v.toFixed(1)),
  };
}

async function main() {
  const TAKES_VALUE = new Set(["ref", "res"]);
  const opt = {};
  let ids = [];
  for (let i = 0, a = process.argv.slice(2); i < a.length; i++) {
    if (!a[i].startsWith("--")) { ids.push(a[i]); continue; }
    const name = a[i].slice(2);
    opt[name] = TAKES_VALUE.has(name) ? a[++i] : true;
  }
  const options = {
    ref: opt.ref || "views", res: Math.max(16, parseInt(opt.res, 10) || MASK_RES),
    render: !opt["no-render"], inventory: !!opt.inventory,
  };
  if (options.ref !== "views" && options.ref !== "mesh") { console.error("--ref 는 views 또는 mesh 입니다"); return 2; }

  const ctx = {
    index: loadJson(`${SPEC_DIR}/index.json`, []),
    meshIndex: loadJson(`${MESH_DIR}/index.json`, {}),
    inventories: loadJson(INVENTORY_CACHE, {}),
    inventoryDirty: false,
  };
  if (!ids.length) ids = ctx.index.map((s) => s.id);

  const results = {};
  let failures = 0;
  for (const id of ids) {
    try {
      results[id] = await evaluate(id, options, ctx);
    } catch (e) {
      failures++;
      results[id] = { error: e.message };
      if (opt.dump) console.error(e.stack);
    }
  }
  if (ctx.inventoryDirty) writeFileSync(INVENTORY_CACHE, `${JSON.stringify(ctx.inventories, null, 2)}\n`);

  const round = (v) => (typeof v === "number" ? +v.toFixed(4) : v);
  const deep = (o) => (Array.isArray(o) ? o.map(deep)
    : o && typeof o === "object" ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, deep(v)]))
      : round(o));
  const samples = deep(results);

  const pct = (v) => (v == null ? "  —  " : `${(v * 100).toFixed(0)}%`);
  if (opt.json) {
    console.log(JSON.stringify({ reference: options.ref, grid: options.res, weights: WEIGHTS, samples }, null, 2));
  } else {
    console.log(`참조: ${options.ref === "views" ? "사진 4면 실루엣(없으면 메시)" : "1단계 메시"} · 격자 ${options.res}×${options.res}`);
    console.log(`가중치: ${Object.keys(WEIGHTS).map((k) => `${LAYER_KO[k]} ${WEIGHTS[k] * 100}`).join(" · ")}\n`);
    console.log("샘플".padEnd(15) + "구성   비율   배치   형상   외관 │ 종합   단순평균 │ 참조");
    console.log("─".repeat(78));
    for (const id of ids) {
      const r = results[id];
      if (r.error) { console.log(id.padEnd(15) + r.error); continue; }
      const L = r.layers;
      console.log(id.padEnd(15)
        + ["composition", "proportion", "layout", "silhouette", "appearance"].map((k) => pct(L[k]?.score).padStart(5)).join("  ")
        + " │ " + pct(r.composite).padStart(5) + "  " + pct(r.unweighted_mean).padStart(6)
        + "   │ " + (r.reference || "없음") + (r.layers_missing.length ? ` (${r.layers_missing.map((k) => LAYER_KO[k]).join("·")} 측정 불가)` : ""));
    }
    if (opt.dump) {
      for (const id of ids) {
        const r = results[id];
        if (r.error) continue;
        console.log(`\n▶ ${id}`);
        const c = r.layers.composition;
        for (const ck of c.checks) {
          console.log(`  구성 · ${ck.name}: ${pct(ck.score)} (기대 ${ck.want} / 실제 ${ck.got})`
            + (ck.detail?.length ? ` 누락: ${ck.detail.join(", ")}` : ""));
        }
        if (!c.inventory_source) console.log("  구성 · 사진 인벤토리 없음 (--inventory 로 요청)");
        if (r.layers.proportion) {
          const p = r.layers.proportion;
          console.log(`  비율 · 축 x ${pct(p.axis.x)} y ${pct(p.axis.y)} z ${pct(p.axis.z)} · 종횡비 `
            + VIEWS.map((v) => `${v.label} ${pct(p.aspect[v.key])}`).join(" "));
        }
        if (r.layers.layout) {
          console.log("  배치 · " + VIEWS.map((v) => {
            const x = r.layers.layout.views[v.key];
            return `${v.label} 열${pct(x.col)}/행${pct(x.row)}/격자${pct(x.cell)}`;
          }).join(" · "));
        }
        if (r.layers.silhouette) {
          const s = r.layers.silhouette;
          console.log(`  형상 · IoU ${VIEWS.map((v) => `${v.label} ${pct(s.iou[v.key])}`).join(" ")} · 회전 ${s.yaw_deg}°`);
        }
        if (r.layers.appearance) {
          const a = r.layers.appearance;
          console.log(`  외관 · 사진 ${a.photo_colors.map((c) => `${c.hex} ${pct(c.weight)}`).join(", ")}`);
          console.log(`       · 렌더 ${a.render_colors.map((c) => `${c.hex} ${pct(c.weight)}`).join(", ")}`);
        }
      }
    }
    console.log("\n각 층위는 독립적으로 잰 값이고 종합은 그 가중 평균일 뿐입니다. 렌더: docs/assets/renders/<id>/");
  }

  if (!opt["no-write"]) {
    const fresh = Object.fromEntries(Object.entries(samples).filter(([, r]) => !r.error));
    const prev = loadJson(OUT, {});
    const keep = prev.reference === options.ref && prev.grid === options.res ? prev.samples || {} : {};
    writeFileSync(OUT, `${JSON.stringify({
      reference: options.ref, grid: options.res, weights: WEIGHTS,
      generated: new Date().toISOString(), samples: { ...keep, ...fresh },
    }, null, 2)}\n`);
    if (!opt.json) console.log("docs/specs/_design-similarity.json 에 기록했습니다.");
  }
  return failures ? 1 : 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  process.exit(await main());
}
