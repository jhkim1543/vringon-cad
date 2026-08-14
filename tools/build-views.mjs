/* ==========================================================================
   Reference silhouettes for the four canonical views, built from the original
   photograph instead of from the stage-1 mesh.

   tools/similarity.mjs can already score the compiled CAD against a mesh, but
   that mesh is itself a reconstruction: scoring against it measures how well
   the specification reproduces a reconstruction, not how well it reproduces
   the aircraft that was photographed. This tool closes that loop — the photo
   goes in, four orthographic silhouettes come out, and `similarity --ref views`
   scores against those.

   Two sources, and the tool decides between them by measurement:

     photo  the image model redraws the photographed aircraft as one sheet of
            four orthographic silhouettes. One sheet, not four images: four
            separate calls each frame their subject to fill the canvas, so the
            relative scale between views would be an artefact of framing and
            no measurement could tell a consistent turntable from a lucky one.
            Drawn side by side in a single picture the scale is shared by
            construction, which makes it something we can check.
     mesh   the stage-1 mesh rasterised into the same four views. Independent
            of any image model and always available, so it is what the photo
            path falls back to.

   The check that decides is in gate(). The four views of one rigid aircraft
   agree on its height; and because a silhouette carries no depth, the view
   from any direction is the exact mirror of the view from the opposite one, so
   front must mirror rear and left must mirror right whatever the shape. A
   generator that quietly drew a different airframe, zoomed one panel or
   substituted a plan view fails at least one of those. The margin against the
   two wrong pairings proves the panels came out in the requested order, and a
   separate solidity test catches the other habit of these models: answering a
   request for a silhouette with a hollow outline, which every check above
   passes because an outline keeps the shape it outlines.

   Nothing here segments anything: the sheet is asked for as pure black on pure
   white, so Otsu plus the border-polarity rule that similarity.mjs already
   uses is the whole of it.

     node tools/build-views.mjs [id ...] [--source photo|mesh|auto] [--force]
                               [--attempts N] [--replay] [--out <dir>]
                               [--mesh-res N] [--json]

   Generation costs money, so an id that already has a meta.json is skipped
   unless --force says otherwise. --replay re-derives everything from the
   sheets already on disk and never calls out at all, which is how a change to
   the split or to the gate is applied to work already paid for.
   ========================================================================== */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { positionsFromGlb } from "../js/mesh-loft.js";
import { decodeImage, encodePng } from "./image-io.mjs";
import {
  VIEWS, masksFromGeometry, masksFromImages, viewFiles, binarize, alignYaw, score,
} from "./similarity.mjs";

const ROOT = new URL("../", import.meta.url);
const path = (rel) => fileURLToPath(new URL(rel, ROOT));

/* The photographs were named before the samples were, so the two sets of names
   do not line up and there is nothing to derive one from the other. */
const PHOTOS = {
  "inspect-quad": "inspection-quad.jpg",
  "agri-hexa": "agri-hexa.jpg",
  "map-wing": "mapping-fixedwing.jpg",
  "sar-vtol": "sar-vtol.jpg",
  "cage-inspect": "cage-inspect.png",
  "fpv-racer": "fpv-racer.png",
  "fire-octo": "fire-octo.png",
  "relay-hexa": "relay-hexa.png",
};

/* The originals are JPEG and the drawn ones are PNG, and a rejected sheet fed
   back for correction is whatever the model returned. Both image models are
   told the media type explicitly, and a PNG announced as JPEG is rejected at
   the far end rather than here — so it is read off the bytes, which is the one
   source that is right for all three cases. */
const mimeOf = (buf) =>
  (buf.length > 8 && buf[0] === 0x89 && buf.toString("latin1", 1, 4) === "PNG" ? "image/png" : "image/jpeg");

const PHOTO_DIR = "docs/assets/samples/drones";
const MESH_DIR = "docs/assets/meshes";
const OUT_DIR = "docs/assets/views";

/* ----------------------------------------------------------- image models */

const cfg = existsSync(path("config.local.json"))
  ? JSON.parse(readFileSync(path("config.local.json"), "utf8")) : {};

/* Endpoints, model names and keys live in config.local.json and nowhere else;
   only the role is named here. The on-premises host carries the same file. */
const PRIMARY = {
  url: process.env.PRIMARY_LLM_URL || cfg.primary?.baseUrl || "",
  keys: [process.env.PRIMARY_LLM_API_KEY, cfg.primary?.apiKey].filter(Boolean),
  model: process.env.PRIMARY_IMAGE_MODEL || cfg.primary?.imageModel || "",
};
const FALLBACK = {
  url: process.env.FALLBACK_LLM_URL || cfg.fallback?.baseUrl || "",
  keys: [process.env.FALLBACK_LLM_API_KEY, cfg.fallback?.apiKey, cfg.fallback?.spareApiKey].filter(Boolean),
  model: process.env.FALLBACK_IMAGE_MODEL || cfg.fallback?.imageModel || "",
};

/* 21:9 is the widest frame on offer and the sheet is a row of four, so it is
   the one that leaves each panel the most room before the model starts
   shrinking panels to make them fit. */
const SHEET_ASPECT = "21:9";
const TIMEOUT_MS = 240000;

const SHEET_PROMPT = `Redraw the aircraft in the photograph as an orthographic SILHOUETTE sheet.

THE SHEET
- EXACTLY FOUR drawings. Not three, not five, not eight. Four.
- All four side by side in ONE single horizontal row. Never a second row. Never a grid.
- Left to right the four drawings are:
  (1) FRONT view, nose towards the viewer.
  (2) SIDE view with the nose pointing LEFT.
  (3) REAR view, tail towards the viewer.
  (4) SIDE view with the nose pointing RIGHT.
- A wide band of empty white between neighbouring drawings, and empty white around all four.

SAME AIRCRAFT, SAME SCALE
- Every drawing is the same aircraft, drawn at the same scale.
- The distance from the highest point of the aircraft to its lowest point must be the SAME number of
  pixels in all four drawings. Check this before you finish.
- Never zoom in, never crop, never re-frame. Every drawing shows the complete aircraft: full wingspan,
  full rotor span, landing gear, everything. If the aircraft is wide and flat, the drawings are wide
  and flat and most of the sheet stays empty white - that is correct, do not enlarge them to fill it.
- Views 1 and 3 are seen along the aircraft's long axis, views 2 and 4 from the side, exactly 90
  degrees away. Never draw a view from above or from below.

HOW TO DRAW
- Each drawing is a SOLID PURE BLACK silhouette (#000000), completely filled, like a paper cut-out.
- No interior lines, no white lines inside the shape, no outline, no shading, no gradient, no texture.
- Pure white (#FFFFFF) everywhere else.
- True orthographic projection: no perspective, camera exactly level, zero tilt, zero roll.

NOTHING ELSE ON THE SHEET
- No ground line, no horizon, no baseline, no floor, no shadow, no reflection.
- No text, no letters, no numbers, no labels, no arrows, no frames, no borders, no grid, no logo.`;

/** 1차 이미지 모델: photo (and optionally a rejected sheet) in, one sheet out. */
async function sheetFromPrimary(photo, retry) {
  const parts = [{ inlineData: { mimeType: mimeOf(photo), data: photo.toString("base64") } }];
  if (retry) {
    parts.push({ inlineData: { mimeType: mimeOf(retry.sheet), data: retry.sheet.toString("base64") } });
    parts.push({ text: `${SHEET_PROMPT}\n\nThe second image is a previous attempt that was REJECTED: `
      + `${retry.note}\nProduce a corrected sheet that fixes exactly that.` });
  } else parts.push({ text: SHEET_PROMPT });

  let lastErr = null;
  for (const key of PRIMARY.keys) {
    try {
      const r = await fetch(`${PRIMARY.url}/v1beta/models/${PRIMARY.model}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        body: JSON.stringify({
          contents: [{ role: "user", parts }],
          generationConfig: { imageConfig: { aspectRatio: SHEET_ASPECT, imageSize: "2K" } },
        }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error?.message || `1차 이미지 모델 ${r.status}`);
      for (const p of j.candidates?.[0]?.content?.parts || []) {
        const d = p.inlineData || p.inline_data;
        if (d?.data) return Buffer.from(d.data, "base64");
      }
      throw new Error("1차 이미지 모델이 이미지를 돌려주지 않았습니다");
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error("1차 이미지 모델 설정이 없습니다");
}

/* The fallback edits the photograph rather than reading it as context, so it
   cannot be shown a rejected sheet — a retry here is just another draw. */
async function sheetFromFallback(photo) {
  let lastErr = null;
  for (const key of FALLBACK.keys) {
    try {
      const fd = new FormData();
      fd.append("model", FALLBACK.model);
      fd.append("prompt", SHEET_PROMPT);
      fd.append("size", "1536x1024");
      fd.append("n", "1");
      const type = mimeOf(photo);
      fd.append("image", new Blob([photo], { type }), `photo.${type === "image/png" ? "png" : "jpg"}`);
      const r = await fetch(`${FALLBACK.url}/v1/images/edits`, {
        method: "POST",
        headers: { Authorization: `Bearer ${key}` },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        body: fd,
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error?.message || `폴백 이미지 모델 ${r.status}`);
      const b64 = j.data?.[0]?.b64_json;
      if (!b64) throw new Error("폴백 이미지 모델이 이미지를 돌려주지 않았습니다");
      return Buffer.from(b64, "base64");
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error("폴백 이미지 모델 설정이 없습니다");
}

/* ------------------------------------------------------------ sheet → cells */

/** Maximal occupied runs, split wherever the empty stretch between two of them
    reaches minGap. Short gaps are inside one drawing, not between two. */
function bands(profile, len, minGap) {
  const out = [];
  let s = -1, e = -1;
  for (let i = 0; i < len; i++) {
    if (!profile[i]) continue;
    if (s < 0) { s = i; e = i; continue; }
    if (i - e - 1 >= minGap) { out.push([s, e]); s = i; }
    e = i;
  }
  if (s >= 0) out.push([s, e]);
  return out;
}

/* Measured gutters run 1.0–2.5% of the sheet width, and gaps inside a drawing
   (a rotor tip clear of a boom) stay well under 0.4%. Rows are asked for as a
   single band, so a row split only has to survive the sheet being drawn as
   several rows, where the vertical gaps came out at 15% and more. */
const COL_GAP = 0.004;
const ROW_GAP = 0.03;

/** A drawing occupying under this share of a band's ink is a speck, not a view. */
const CELL_MIN_INK = 0.02;

function cellBox(on, w, x0, x1, y0, y1) {
  let a0 = Infinity, a1 = -1, b0 = Infinity, b1 = -1, area = 0;
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
    if (!on[y * w + x]) continue;
    area++;
    if (x < a0) a0 = x;
    if (x > a1) a1 = x;
    if (y < b0) b0 = y;
    if (y > b1) b1 = y;
  }
  if (a1 < 0) return null;
  return {
    x0: a0, x1: a1, y0: b0, y1: b1,
    w: a1 - a0 + 1, h: b1 - b0 + 1, area,
    cx: (a0 + a1 + 1) / 2, cy: (b0 + b1 + 1) / 2,
  };
}

/** Every reading of the sheet that yields exactly four drawings.
    A sheet drawn as several rows of four is a common miss, and each of those
    rows is a complete answer on its own, so all of them are offered. */
function layouts(on, w, h) {
  const col = new Int32Array(w), row = new Int32Array(h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (on[y * w + x]) { col[x]++; row[y]++; }
  }
  const rowBands = bands(row, h, Math.max(4, Math.round(h * ROW_GAP)));
  const perRow = [];
  for (const [y0, y1] of rowBands) {
    const c = new Int32Array(w);
    for (let y = y0; y <= y1; y++) for (let x = 0; x < w; x++) if (on[y * w + x]) c[x]++;
    perRow.push({ y0, y1, cols: bands(c, w, Math.max(4, Math.round(w * COL_GAP))) });
  }

  const keep = (cells) => {
    if (cells.some((b) => !b)) return null;
    const total = cells.reduce((s, b) => s + b.area, 0);
    return cells.every((b) => b.area >= total * CELL_MIN_INK) ? cells : null;
  };
  const out = [];
  perRow.forEach((band, i) => {
    if (band.cols.length !== 4) return;
    const cells = keep(band.cols.map(([x0, x1]) => cellBox(on, w, x0, x1, band.y0, band.y1)));
    if (cells) out.push({ layout: rowBands.length > 1 ? `1x4 (${rowBands.length}행 중 ${i + 1}행)` : "1x4", cells });
  });
  // a 2x2 sheet reads top-left, top-right, bottom-left, bottom-right
  if (perRow.length === 2 && perRow.every((b) => b.cols.length === 2)) {
    const cells = keep(perRow.flatMap((b) => b.cols.map(([x0, x1]) => cellBox(on, w, x0, x1, b.y0, b.y1))));
    if (cells) out.push({ layout: "2x2", cells });
  }
  return { rows: rowBands.length, colsPerRow: perRow.map((b) => b.cols.length), options: out };
}

/* ------------------------------------------------------------ common canvas */

/* Padding so the widest drawing is not flush against the edge; masksFromImages
   re-centres on content anyway, this only keeps the files readable. */
const CANVAS_PAD = 1.06;
/* A sheet asked for at 2K puts each drawing at roughly 500–900 px, so the cap
   is only ever reached by a much larger sheet. */
const MAX_SIDE = 1200;

/** Every view onto one square canvas at the sheet's own pixel scale — nothing
    is resized per view, because the relative scale between the four views is
    the measurement, not a nuisance to be normalised away. */
function toCanvas(on, w, cells) {
  const side = Math.max(...cells.map((b) => Math.max(b.w, b.h)));
  const P = Math.round(side * CANVAS_PAD);
  const grids = cells.map((b) => {
    const g = new Uint8Array(P * P);
    const ox = Math.round(P / 2 - b.cx), oy = Math.round(P / 2 - b.cy);
    for (let y = b.y0; y <= b.y1; y++) for (let x = b.x0; x <= b.x1; x++) {
      if (!on[y * w + x]) continue;
      const px = x + ox, py = y + oy;
      if (px >= 0 && px < P && py >= 0 && py < P) g[py * P + px] = 1;
    }
    return g;
  });
  return { P, grids };
}

/** Box-majority shrink, the same rule masksFromImages uses, applied to all four
    with one factor so their relative scale survives. */
function shrink(grids, P, N) {
  if (P <= N) return { grids, n: P };
  const s = P / N;
  const out = grids.map((g) => {
    const o = new Uint8Array(N * N);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const y0 = Math.floor(y * s), y1 = Math.max(y0 + 1, Math.floor((y + 1) * s));
      const x0 = Math.floor(x * s), x1 = Math.max(x0 + 1, Math.floor((x + 1) * s));
      let lit = 0, seen = 0;
      for (let sy = y0; sy < Math.min(P, y1); sy++) {
        for (let sx = x0; sx < Math.min(P, x1); sx++) { seen++; if (g[sy * P + sx]) lit++; }
      }
      if (seen && lit * 2 >= seen) o[y * N + x] = 1;
    }
    return o;
  });
  return { grids: out, n: N };
}

/* ------------------------------------------------------------------- gate */

const iou = (a, b) => {
  let i = 0, u = 0;
  for (let k = 0; k < a.length; k++) { if (a[k] | b[k]) u++; if (a[k] & b[k]) i++; }
  return u ? i / u : 0;
};

const mirrored = (g, P) => {
  const o = new Uint8Array(P * P);
  for (let y = 0; y < P; y++) for (let x = 0; x < P; x++) o[y * P + x] = g[y * P + (P - 1 - x)];
  return o;
};

const spread = (v) => (Math.max(...v) - Math.min(...v)) / (v.reduce((a, b) => a + b, 0) / v.length);
const relDiff = (a, b) => Math.abs(a - b) / ((a + b) / 2);

/** Chebyshev distance from every pixel to the nearest ink pixel, two sweeps. */
function inkDistance(g, N) {
  const d = new Int32Array(N * N).fill(1 << 28);
  for (let i = 0; i < N * N; i++) if (g[i]) d[i] = 0;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const i = y * N + x;
    let m = d[i];
    if (x > 0) m = Math.min(m, d[i - 1] + 1);
    if (y > 0) m = Math.min(m, d[i - N] + 1);
    if (x > 0 && y > 0) m = Math.min(m, d[i - N - 1] + 1);
    if (x < N - 1 && y > 0) m = Math.min(m, d[i - N + 1] + 1);
    d[i] = m;
  }
  for (let y = N - 1; y >= 0; y--) for (let x = N - 1; x >= 0; x--) {
    const i = y * N + x;
    let m = d[i];
    if (x < N - 1) m = Math.min(m, d[i + 1] + 1);
    if (y < N - 1) m = Math.min(m, d[i + N] + 1);
    if (x < N - 1 && y < N - 1) m = Math.min(m, d[i + N + 1] + 1);
    if (x > 0 && y < N - 1) m = Math.min(m, d[i + N - 1] + 1);
    d[i] = m;
  }
  return d;
}

/** Ink as a share of the region the drawing encloses.

    A filled shape is nearly all ink; an outline of the same shape is a rim
    around a large empty middle. The outside is flooded over pixels further
    than r from any ink, which seals the strokes before the flood starts —
    without that, one compression-broken pixel lets the flood into the middle
    and an outline measures as solid. */
function solidity(g, N) {
  const r = Math.max(2, Math.round(N / 150));
  const d = inkDistance(g, N);
  const seen = new Uint8Array(N * N);
  const stack = [];
  const push = (i) => { if (d[i] > r && !seen[i]) { seen[i] = 1; stack.push(i); } };
  for (let x = 0; x < N; x++) { push(x); push((N - 1) * N + x); }
  for (let y = 0; y < N; y++) { push(y * N); push(y * N + N - 1); }
  while (stack.length) {
    const i = stack.pop(), x = i % N, y = (i - x) / N;
    if (x > 0) push(i - 1);
    if (x < N - 1) push(i + 1);
    if (y > 0) push(i - N);
    if (y < N - 1) push(i + N);
  }
  let ink = 0, enclosed = 0;
  for (let i = 0; i < N * N; i++) {
    if (g[i]) ink++;
    else if (!seen[i]) enclosed++;
  }
  return ink ? ink / (ink + enclosed) : 0;
}

/* One rigid aircraft seen from four level directions has one height, so the
   spread across the four is the scale check.

   The mirror pairs are the identity check, and they are exact rather than
   approximate: an orthographic silhouette carries no depth, so the outline
   seen from a direction and the outline seen from the opposite direction are
   the same set of points with the screen axis reversed. Front mirrors rear and
   left mirrors right for ANY shape, symmetric or not — the mesh path scores
   1.00 on both by construction, and that is the number a generated sheet is
   being held against. The tolerance below is slack for a model that redraws
   each panel by hand, not room for a different airframe.

   The margin is what proves the panels arrived in the order that was asked
   for — under any other order the intended pairs stop being the best ones. */
/* solidMin sits between two measured populations. Filled drawings — the four
   meshes and every sheet accepted so far — score 0.56 to 0.82. The same mesh
   silhouettes reduced to a 3px outline score 0.17 to 0.38. It catches the
   image model's habit of answering a request for a silhouette with line art,
   which every other check here passes happily because an outline keeps the
   height, the mirror symmetry and the order of the shape it outlines. Its
   limit is a heavy outline: at 6px the same test reads 0.33 to 0.60 and the
   populations start to touch. */
const GATE = {
  heightSpread: 0.08,
  mirrorMin: 0.55,
  mirrorMargin: 0.10,
  pairWidth: 0.12,
  pairArea: 0.20,
  solidMin: 0.45,
};

function gate(cells, P, grids) {
  const mi = (a, b) => iou(grids[a], mirrored(grids[b], P));
  const mirror = { front_rear: mi(0, 2), left_right: mi(1, 3) };
  const mean = (mirror.front_rear + mirror.left_right) / 2;
  /* The two orders the model could have used instead. Scoring better on one of
     those means the sheet is fine but its panels are not where they were asked
     to be, which is a different fault from a badly drawn sheet. */
  const alt = Math.max((mi(0, 1) + mi(2, 3)) / 2, (mi(0, 3) + mi(1, 2)) / 2);

  const r = {
    height_spread: spread(cells.map((c) => c.h)),
    solidity: grids.map((g) => solidity(g, P)),
    mirror_iou: mirror,
    mirror_wrong_order: alt,
    pair_width_error: { front_rear: relDiff(cells[0].w, cells[2].w), left_right: relDiff(cells[1].w, cells[3].w) },
    pair_area_error: { front_rear: relDiff(cells[0].area, cells[2].area), left_right: relDiff(cells[1].area, cells[3].area) },
    heights: cells.map((c) => c.h),
    widths: cells.map((c) => c.w),
    areas: cells.map((c) => c.area),
  };
  const fail = [];
  if (r.height_spread > GATE.heightSpread) {
    fail.push(`뷰마다 기체 높이가 다릅니다 (${cells.map((c) => c.h).join("/")}px, 편차 ${(r.height_spread * 100).toFixed(0)}%)`);
  }
  if (Math.min(...r.solidity) < GATE.solidMin) {
    fail.push(`속이 빈 윤곽선으로 그려졌습니다 (채움 ${Math.min(...r.solidity).toFixed(2)})`);
  }
  if (Math.min(mirror.front_rear, mirror.left_right) < GATE.mirrorMin) {
    fail.push(`마주 보는 두 뷰가 서로의 거울상이 아닙니다 (정면·후면 ${mirror.front_rear.toFixed(2)}, 좌·우 ${mirror.left_right.toFixed(2)})`);
  }
  if (mean < alt + GATE.mirrorMargin) {
    fail.push(`네 뷰의 순서가 요청과 다릅니다 (요청 순서 ${mean.toFixed(2)} · 다른 순서 ${alt.toFixed(2)})`);
  }
  if (Math.max(r.pair_width_error.front_rear, r.pair_width_error.left_right) > GATE.pairWidth) {
    fail.push(`마주 보는 두 뷰의 폭이 다릅니다 (${(Math.max(r.pair_width_error.front_rear, r.pair_width_error.left_right) * 100).toFixed(0)}%)`);
  }
  if (Math.max(r.pair_area_error.front_rear, r.pair_area_error.left_right) > GATE.pairArea) {
    fail.push(`마주 보는 두 뷰의 면적이 다릅니다 (${(Math.max(r.pair_area_error.front_rear, r.pair_area_error.left_right) * 100).toFixed(0)}%)`);
  }
  r.pass = fail.length === 0;
  r.fail = fail;
  r.score = mean - alt;
  return r;
}

/** English, because it is fed back to the image model as a correction. */
function retryNote(reading) {
  if (!reading.options.length) {
    const n = reading.colsPerRow.reduce((a, b) => a + b, 0);
    return `the sheet did not contain one row of four separate drawings — it came out as `
      + `${reading.rows} row(s) holding ${reading.colsPerRow.join("+")} drawings. Draw exactly four, `
      + `side by side in one row, with a wide band of white between neighbours so they never touch.`
      + (n < 4 ? " Drawings must not overlap or run into each other." : "");
  }
  const g = reading.best.gate;
  if (g.height_spread > GATE.heightSpread) {
    return `the aircraft is not the same size in all four drawings — top to bottom it measures `
      + `${g.heights.join(", ")} pixels. Redraw the same one row of four at a single shared scale, `
      + `so that height is identical in all four.`;
  }
  if (Math.min(...g.solidity) < GATE.solidMin) {
    return `the drawings came out as outlines with a hollow middle. Each drawing must be one solid `
      + `shape flooded with pure black from edge to edge, like a paper cut-out held up to a light — `
      + `no white anywhere inside it.`;
  }
  if (Math.min(g.mirror_iou.front_rear, g.mirror_iou.left_right) < GATE.mirrorMin) {
    return `drawings 1 and 3 do not look like the front and the rear of one aircraft, and drawings 2 `
      + `and 4 do not look like its two sides. Draw one single aircraft turned to four angles, not `
      + `four different aircraft, and never a view from above.`;
  }
  return `the four drawings were not in the requested order. Left to right they must be front, side `
    + `with the nose pointing left, rear, side with the nose pointing right.`;
}

/* ------------------------------------------------------------------ paths */

/** Threshold a sheet, read its layout, and keep the best four-drawing reading. */
function readSheet(bytes, label) {
  const img = decodeImage(bytes, label);
  const on = binarize(img, false);
  const reading = layouts(on, img.w, img.h);
  for (const o of reading.options) {
    const { P, grids } = toCanvas(on, img.w, o.cells);
    o.P = P;
    o.grids = grids;
    o.gate = gate(o.cells, P, grids);
  }
  /* Passing readings first, then by how far the requested order beat the wrong
     ones — on a sheet drawn as several rows this is what picks the good row. */
  reading.options.sort((a, b) => (b.gate.pass - a.gate.pass) || (b.gate.score - a.gate.score));
  reading.best = reading.options[0] || null;
  reading.on = on;
  reading.w = img.w;
  reading.h = img.h;
  return reading;
}

async function fromPhoto(id, { attempts }) {
  const file = path(`${PHOTO_DIR}/${PHOTOS[id]}`);
  if (!PHOTOS[id] || !existsSync(file)) throw new Error("원본 사진이 없습니다");
  const photo = readFileSync(file);

  const rejected = [];
  let retry = null;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    let bytes, generator = "1차 이미지 모델";
    try {
      bytes = await sheetFromPrimary(photo, retry);
    } catch (e) {
      /* Falling through to the other model rather than giving up: a key outage
         or a 503 is not a reason to lose the run. */
      console.log(`  1차 이미지 모델 실패 (${String(e.message).slice(0, 80)}) → 폴백`);
      bytes = await sheetFromFallback(photo);
      generator = "폴백 이미지 모델";
    }
    const reading = readSheet(bytes, `${id} 시트`);
    if (reading.best?.gate.pass) {
      return { source: "photo", generator, attempt, reading, rejected, photo: `${PHOTO_DIR}/${PHOTOS[id]}` };
    }
    const why = reading.best ? reading.best.gate.fail : [`네 장으로 나뉘지 않았습니다 (${reading.rows}행 ${reading.colsPerRow.join("+")}장)`];
    console.log(`  ${attempt}차 시도 기각: ${why[0]}`);
    rejected.push({
      attempt, generator, layout: reading.best?.layout || null,
      reason: why, consistency: reading.best ? summarise(reading.best.gate) : null,
    });
    retry = { sheet: bytes, note: retryNote(reading) };
  }
  const e = new Error(`${attempts}회 시도 모두 일관성 검사를 통과하지 못했습니다`);
  e.rejected = rejected;
  throw e;
}

/** Re-read the sheet already on disk instead of drawing a new one.

    sheet.png is the binarised sheet every number was measured from, and
    binarising it again is a no-op, so a run through here reproduces the
    committed masks byte for byte. That makes the whole measurement rerunnable
    offline: a change to the split or to the gate can be applied to what was
    already generated, at no cost and with nothing left stale. */
function fromSheet(id, dir) {
  const file = `${dir}/${id}/sheet.png`;
  if (!existsSync(file)) throw new Error("저장된 시트가 없습니다");
  const prev = existsSync(`${dir}/${id}/meta.json`)
    ? JSON.parse(readFileSync(`${dir}/${id}/meta.json`, "utf8")) : {};
  const reading = readSheet(readFileSync(file), `${id} 시트`);
  if (!reading.best) throw new Error("저장된 시트가 네 장으로 나뉘지 않습니다");
  if (!reading.best.gate.pass) throw new Error(`저장된 시트가 일관성 검사를 통과하지 못합니다: ${reading.best.gate.fail[0]}`);
  return {
    source: "photo", generator: prev.generator || "1차 이미지 모델",
    attempt: prev.attempt || 1, rejected: prev.rejected || [],
    photo: prev.photo || (PHOTOS[id] ? `${PHOTO_DIR}/${PHOTOS[id]}` : null),
    reading,
  };
}

function fromMesh(id, { meshRes }) {
  const index = JSON.parse(readFileSync(path(`${MESH_DIR}/index.json`), "utf8"));
  if (!index[id]) throw new Error("1단계 메시가 등록되어 있지 않습니다");
  const model = positionsFromGlb(readFileSync(path(`${MESH_DIR}/${index[id].file}`)));
  if (!model) throw new Error("메시를 읽지 못했습니다");
  const masks = masksFromGeometry(model, meshRes);
  /* Rasterised from one bounding box, so the four already share a frame; the
     cells are only re-derived so the same gate can report on this path too.
     Measured with the same cellBox the sheet path uses — a box helper without
     an ink count leaves the area check comparing undefined against undefined,
     which is a pass. */
  const grids = VIEWS.map((v) => masks[v.key]);
  const cells = grids.map((g) => cellBox(g, meshRes, 0, meshRes - 1, 0, meshRes - 1));
  return {
    source: "mesh", generator: "1단계 메시", attempt: 1, rejected: [],
    mesh: `${MESH_DIR}/${index[id].file}`,
    reading: { best: { layout: `${meshRes}×${meshRes} 래스터`, P: meshRes, grids, cells, gate: gate(cells, meshRes, grids) } },
  };
}

/* ------------------------------------------------------------------ output */

const summarise = (g) => ({
  height_spread: +g.height_spread.toFixed(4),
  solidity: g.solidity.map((v) => +v.toFixed(4)),
  mirror_iou: { front_rear: +g.mirror_iou.front_rear.toFixed(4), left_right: +g.mirror_iou.left_right.toFixed(4) },
  mirror_wrong_order: +g.mirror_wrong_order.toFixed(4),
  pair_width_error: { front_rear: +g.pair_width_error.front_rear.toFixed(4), left_right: +g.pair_width_error.left_right.toFixed(4) },
  pair_area_error: { front_rear: +g.pair_area_error.front_rear.toFixed(4), left_right: +g.pair_area_error.left_right.toFixed(4) },
  pass: g.pass,
  fail: g.fail,
});

/** Same polarity as `similarity --dump`, so a mask written here and a mask
    dumped there are interchangeable as --views input. */
const asPng = (g, n) => encodePng(n, n, Uint8Array.from(g, (v) => (v ? 255 : 0)), 1);

function write(dir, id, built) {
  const out = `${dir}/${id}`;
  mkdirSync(out, { recursive: true });
  const { grids, n } = shrink(built.reading.best.grids, built.reading.best.P, MAX_SIDE);
  VIEWS.forEach((v, i) => writeFileSync(`${out}/${v.key}.png`, asPng(grids[i], n)));

  /* The binarised sheet, not the render: this is the picture every number was
     read off, so a disputed measurement can be checked against it, and it
     costs a few kilobytes where the render costs a megabyte. */
  if (built.reading.on) {
    const { w, h } = built.reading;
    writeFileSync(`${out}/sheet.png`, encodePng(w, h, Uint8Array.from(built.reading.on, (v) => (v ? 255 : 0)), 1));
  }

  const meta = {
    id,
    source: built.source,
    generator: built.generator,
    generated: new Date().toISOString(),
    photo: built.photo || null,
    mesh: built.mesh || null,
    attempt: built.attempt,
    layout: built.reading.best.layout,
    mask_px: n,
    views: Object.fromEntries(VIEWS.map((v, i) => {
      const c = built.reading.best.cells[i];
      return [v.key, { w: c.w, h: c.h, area: c.area }];
    })),
    consistency: summarise(built.reading.best.gate),
    rejected: built.rejected,
  };
  writeFileSync(`${out}/meta.json`, `${JSON.stringify(meta, null, 2)}\n`);
  return meta;
}

/** Independent read on a photo-built set: does it describe the same aircraft
    the stage-1 mesh does? Reported, never used to accept or reject — the point
    of this path is a reference that owes the mesh nothing. */
function crossCheckMesh(id, dir) {
  const index = JSON.parse(readFileSync(path(`${MESH_DIR}/index.json`), "utf8"));
  if (!index[id]) return null;
  const model = positionsFromGlb(readFileSync(path(`${MESH_DIR}/${index[id].file}`)));
  if (!model) return null;
  const N = 128;
  const mesh = masksFromGeometry(model, N);
  // read back from disk on purpose: this also proves the files parse
  const built = masksFromImages(viewFiles(dir, id), N, false);
  const aligned = alignYaw(mesh, built);
  const s = score(mesh, aligned.masks, N);
  return { yaw_deg: aligned.k * 90, iou_mean: +s.iou.mean.toFixed(4), chamfer_mean: +s.chamfer.mean.toFixed(4) };
}

/* -------------------------------------------------------------------- main */

async function main() {
  const TAKES_VALUE = new Set(["source", "attempts", "out", "mesh-res"]);
  const opt = {};
  let ids = [];
  for (let i = 0, a = process.argv.slice(2); i < a.length; i++) {
    if (!a[i].startsWith("--")) { ids.push(a[i]); continue; }
    const name = a[i].slice(2);
    opt[name] = TAKES_VALUE.has(name) ? a[++i] : true;
  }
  const source = opt.source || "auto";
  if (!["photo", "mesh", "auto"].includes(source)) {
    console.error("--source 는 photo · mesh · auto 입니다");
    return 2;
  }
  const dir = opt.out || path(OUT_DIR);
  const attempts = Math.max(1, parseInt(opt.attempts, 10) || 2);
  const meshRes = Math.max(64, parseInt(opt["mesh-res"], 10) || 512);
  if (!ids.length) ids = Object.keys(PHOTOS);

  const report = {};
  let failures = 0;
  for (const id of ids) {
    const prev = existsSync(`${dir}/${id}/meta.json`)
      ? JSON.parse(readFileSync(`${dir}/${id}/meta.json`, "utf8")) : null;
    /* --replay never calls out, so there is nothing to protect against and it
       overwrites without --force. */
    if (!opt.force && !opt.replay && prev) {
      console.log(`${id}: 건너뜀 (이미 ${prev.source} 기준으로 만들어져 있습니다 · --force 로 다시 만듭니다)`);
      report[id] = { ...prev, skipped: true };
      continue;
    }
    console.log(`${id}: ${opt.replay ? "저장된 시트" : source === "mesh" ? "메시" : "사진"} 기준으로 만드는 중…`);
    let built = null, photoError = null, rejected = [];
    if (opt.replay) {
      /* A set that came from the mesh has no sheet to replay; it is rebuilt
         instead, and the note about why the photo path lost is carried over
         rather than replaced by "there is no sheet". */
      if (prev?.source === "mesh") {
        photoError = prev.photo_error || null;
        rejected = prev.rejected || [];
      } else {
        try { built = fromSheet(id, dir); } catch (e) { photoError = e.message; }
      }
    } else if (source !== "mesh") {
      try {
        built = await fromPhoto(id, { attempts });
      } catch (e) {
        photoError = e.message;
        rejected = e.rejected || [];
        if (source === "photo") {
          console.log(`${id}: 실패 — ${photoError}`);
          report[id] = { id, error: photoError, rejected };
          failures++;
          continue;
        }
        console.log(`  사진 경로 실패 (${photoError}) → 1단계 메시로 폴백합니다`);
      }
    }
    if (!built) {
      try {
        built = fromMesh(id, { meshRes });
        built.rejected = rejected;
        built.photo_error = photoError;
      } catch (e) {
        console.log(`${id}: 실패 — ${e.message}`);
        report[id] = { id, error: e.message, rejected };
        failures++;
        continue;
      }
    }
    const meta = write(dir, id, built);
    if (photoError) meta.photo_error = photoError;
    if (built.source === "photo") {
      try { meta.mesh_cross_check = crossCheckMesh(id, dir); } catch { meta.mesh_cross_check = null; }
    }
    writeFileSync(`${dir}/${id}/meta.json`, `${JSON.stringify(meta, null, 2)}\n`);
    report[id] = meta;
    const c = meta.consistency;
    console.log(`${id}: ${meta.source === "photo" ? "사진" : "메시"} · ${meta.layout} · `
      + `높이편차 ${(c.height_spread * 100).toFixed(1)}% · 거울 IoU ${c.mirror_iou.front_rear.toFixed(2)}/${c.mirror_iou.left_right.toFixed(2)} `
      + `(다른 순서 ${c.mirror_wrong_order.toFixed(2)}) · ${meta.mask_px}px`);
  }

  if (opt.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(`\n${"샘플".padEnd(14)}출처   높이편차  거울 IoU(정후/좌우)  순서여유  메시대조 IoU`);
    console.log("─".repeat(74));
    for (const id of ids) {
      const m = report[id];
      if (!m || m.error) { console.log(id.padEnd(14) + (m?.error || "—")); continue; }
      const c = m.consistency;
      const x = m.mesh_cross_check;
      console.log(id.padEnd(14)
        + (m.source === "photo" ? "사진 " : "메시 ").padEnd(7)
        + `${(c.height_spread * 100).toFixed(1)}%`.padStart(7)
        + `   ${c.mirror_iou.front_rear.toFixed(2)} / ${c.mirror_iou.left_right.toFixed(2)}`.padEnd(21)
        + `${(c.mirror_iou.front_rear + c.mirror_iou.left_right) / 2 - c.mirror_wrong_order > 0 ? "+" : ""}${(((c.mirror_iou.front_rear + c.mirror_iou.left_right) / 2 - c.mirror_wrong_order)).toFixed(2)}`.padStart(6)
        + (x ? `${x.iou_mean.toFixed(2)} (${x.yaw_deg}°)`.padStart(15) : "—".padStart(15)));
    }
    console.log("\n높이편차는 네 뷰가 같은 축척인지, 거울 IoU는 마주 보는 두 뷰가 같은 기체인지를 봅니다."
      + "\n순서여유가 0 이하이면 네 장이 요청한 순서로 오지 않은 것입니다."
      + "\n메시대조는 사진에서 만든 실루엣이 1단계 메시와 얼마나 같은지이며, 판정에는 쓰지 않습니다.");
  }
  return failures ? 1 : 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  process.exit(await main());
}

export { readSheet, gate, layouts, toCanvas, GATE };
