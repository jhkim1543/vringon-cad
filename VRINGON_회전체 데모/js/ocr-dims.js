/* Part 2 — 도면의 치수 문자를 읽어 축척(mm/px)을 정한다.
   ① 문자 인식(브라우저·Node 공용 엔진)으로 숫자 토큰과 그 픽셀 상자를 얻고,
   ② 가는선 마스크에서 긴 수평·수직 선분(치수선)을 찾아,
   ③ 토큰마다 가장 가까운 평행한 치수선의 길이(px) 를 그 값(mm) 과 짝지어 후보 축척을 만들고,
   ④ 서로 5% 안에서 맞는 후보가 가장 많은 값을 축척으로 고른다(다수결).
   못 읽으면 ok:false 를 돌려주고 호출자가 사용자에게 한 치수를 묻는다. 지어내지 않는다.

   엔진 경로는 호출자가 준다(브라우저: ./vendor/tesseract/, Node: 같은 폴더의 파일 경로). */

import { inkMask, erode, dilate, estimateStroke, erosionIters } from "./shaft-extract.js";

/* ---------------------------------------------------------------- 문자 인식 */
let workerP = null;
export async function getOcrWorker(paths, createWorker) {
  if (workerP) return workerP;
  workerP = (async () => {
    /* 경로를 안 주면 엔진 기본값(브라우저: CDN, Node: 패키지 안 파일)을 쓴다 */
    const o = { gzip: true, cacheMethod: paths.cacheMethod || "none", logger: paths.logger || (() => {}) };
    if (paths.workerPath) o.workerPath = paths.workerPath;
    if (paths.corePath) o.corePath = paths.corePath;
    if (paths.langPath) o.langPath = paths.langPath;
    const w = await createWorker("eng", 1, o);
    await w.setParameters({
      tessedit_char_whitelist: "0123456789.,-x×XRC⌀Ø□",
      tessedit_pageseg_mode: "11",          /* 흩어진 글자 (SPARSE_TEXT) */
      preserve_interword_spaces: "1",
    });
    return w;
  })();
  return workerP;
}

/* 이미지 전체를 한 번 읽는다. 큰 도면은 문자가 작으므로 2배로 키워 읽고 좌표를 되돌린다.
   canvasFactory: (w,h) → {canvas, ctx}  (브라우저 document.createElement / Node 는 sharp 로 대신) */
export async function readNumberTokens(worker, source, { scale = 1 } = {}) {
  const { data } = await worker.recognize(source, {}, { blocks: true });
  const words = [];
  const walk = (blocks) => { for (const b of blocks || []) for (const p of b.paragraphs || []) for (const l of p.lines || []) for (const w of l.words || []) words.push(w); };
  walk(data.blocks);
  const tokens = [];
  for (const w of words) {
    const raw = String(w.text || "").trim();
    /* 값 추출: "⌀20", "R250", "□320", "4-⌀9", "2-C5", "12.5", "40" */
    const m = /(?:^|[^0-9.])((?:\d+\.\d+)|(?:\d+))(?!\d)/.exec(raw.replace(/,/g, "."));
    if (!m) continue;
    const value = Number(m[1]);
    if (!Number.isFinite(value) || value <= 0 || value > 5000) continue;
    const kind = /[⌀Ø]/.test(raw) ? "dia" : /^R/i.test(raw) ? "radius" : /^C/i.test(raw) || /-C/i.test(raw) ? "chamfer" : /□/.test(raw) ? "square" : "linear";
    const count = /^(\d+)-/.exec(raw);
    const bb = w.bbox;
    tokens.push({ text: raw, value, kind, count: count ? Number(count[1]) : 1, conf: w.confidence,
      x0: bb.x0 / scale, y0: bb.y0 / scale, x1: bb.x1 / scale, y1: bb.y1 / scale,
      cx: (bb.x0 + bb.x1) / 2 / scale, cy: (bb.y0 + bb.y1) / 2 / scale });
  }
  return tokens;
}

/* ---------------------------------------------------------------- 치수선 찾기 */
/* 가는선 마스크(굵은 외형선을 뺀 것)에서 긴 수평·수직 런 → 선분. 치수선·보조선·중심선이 섞여 있다 */
export function findThinLines(img, opts = {}) {
  const w = img.width, h = img.height;
  const { mask } = inkMask(img, opts.threshold ?? 110);
  const strokePx = estimateStroke(mask, w, h);
  const iters = erosionIters(strokePx);
  let thick = mask;
  for (let k = 0; k < iters; k++) thick = erode(thick, w, h);
  let grown = thick;
  for (let k = 0; k < iters + 1; k++) grown = dilate(grown, w, h);
  const thin = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) if (mask[i] && !grown[i]) thin[i] = 1;
  const minLen = Math.max(18, Math.round(Math.min(w, h) * (opts.minLenFrac ?? 0.02)));
  const H = [], V = [];
  /* 수평 런 */
  for (let y = 0; y < h; y++) {
    let run = 0;
    for (let x = 0; x <= w; x++) {
      const on = x < w && thin[y * w + x];
      if (on) run++;
      else { if (run >= minLen) H.push({ x0: x - run, x1: x - 1, y, len: run }); run = 0; }
    }
  }
  /* 수직 런 */
  for (let x = 0; x < w; x++) {
    let run = 0;
    for (let y = 0; y <= h; y++) {
      const on = y < h && thin[y * w + x];
      if (on) run++;
      else { if (run >= minLen) V.push({ y0: y - run, y1: y - 1, x, len: run }); run = 0; }
    }
  }
  /* 화살촉은 선보다 굵어서 가는선 마스크에서 빠진다 → 런이 양끝에서 화살촉 길이만큼 짧다(25mm 가 250px 아닌 212px).
     원 마스크에서 잉크를 따라 양쪽으로 늘리되, 세로선(보조선·외형선)을 만나면 멈춘다. 연쇄 치수도 공유 보조선에서 끊긴다. */
  /* 그 픽셀을 지나는 세로(가로) 잉크 런의 길이. 화살촉은 짧고(폭 ≈ 선 굵기 ×3) 보조선·외형선은 길다 */
  const runV = (x, y) => { let a = y, b = y; while (a > 0 && mask[(a - 1) * w + x]) a--; while (b < h - 1 && mask[(b + 1) * w + x]) b++; return b - a + 1; };
  const runH = (x, y) => { let a = x, b = x; while (a > 0 && mask[y * w + a - 1]) a--; while (b < w - 1 && mask[y * w + b + 1]) b++; return b - a + 1; };
  const lineLen = Math.max(14, strokePx * 5);
  const vertAt = (x, y) => runV(x, y) >= lineLen;
  const horzAt = (x, y) => runH(x, y) >= lineLen;
  const maxExt = Math.max(16, strokePx * 12);
  for (const r of H) {
    let x = r.x0 - 1, k = 0; while (x >= 0 && k < maxExt && mask[r.y * w + x] && !vertAt(x, r.y)) { x--; k++; } r.x0 = x + 1;
    x = r.x1 + 1; k = 0; while (x < w && k < maxExt && mask[r.y * w + x] && !vertAt(x, r.y)) { x++; k++; } r.x1 = x - 1;
    r.len = r.x1 - r.x0 + 1;
  }
  for (const r of V) {
    let y = r.y0 - 1, k = 0; while (y >= 0 && k < maxExt && mask[y * w + r.x] && !horzAt(r.x, y)) { y--; k++; } r.y0 = y + 1;
    y = r.y1 + 1; k = 0; while (y < h && k < maxExt && mask[y * w + r.x] && !horzAt(r.x, y)) { y++; k++; } r.y1 = y - 1;
    r.len = r.y1 - r.y0 + 1;
  }
  /* 인접한 같은 선(굵기 2~3px 로 여러 런이 남는다)은 하나로 */
  const mergeH = mergeRuns(H, (a, b) => Math.abs(a.y - b.y) <= 2 && Math.abs(a.x0 - b.x0) <= 3 && Math.abs(a.x1 - b.x1) <= 3);
  const mergeV = mergeRuns(V, (a, b) => Math.abs(a.x - b.x) <= 2 && Math.abs(a.y0 - b.y0) <= 3 && Math.abs(a.y1 - b.y1) <= 3);
  return { horizontal: mergeH, vertical: mergeV, strokePx };
}
function mergeRuns(list, same) {
  const out = [];
  for (const r of list) {
    const m = out.find((o) => same(o, r));
    if (m) { m.n = (m.n || 1) + 1; continue; }
    out.push({ ...r, n: 1 });
  }
  return out;
}

/* ---------------------------------------------------------------- 축척 결정 */
/* 토큰 ↔ 치수선 짝짓기: 수평 치수의 문자는 선의 바로 위(가운데), 수직 치수의 문자는 선의 옆(가운데)에 있다 */
export function pairTokensToLines(tokens, lines, opts = {}) {
  const pairs = [];
  const near = opts.near ?? 40;   /* 문자 중심 ↔ 선 사이 허용 거리(px) */
  for (const t of tokens) {
    if (t.kind !== "linear" && t.kind !== "square") continue;   /* 지름·반지름·모따기는 선 길이와 무관 */
    let best = null;
    for (const l of lines.horizontal) {
      const mid = (l.x0 + l.x1) / 2;
      const dx = Math.abs(t.cx - mid), dy = l.y - t.cy;      /* 문자는 선 위 → dy > 0 */
      if (dy < -6 || dy > near || dx > Math.max(24, l.len * 0.25)) continue;
      const score = dy + dx * 0.5;
      if (!best || score < best.score) best = { score, len: l.len, dir: "h", line: l };
    }
    for (const l of lines.vertical) {
      const mid = (l.y0 + l.y1) / 2;
      const dy = Math.abs(t.cy - mid), dx = t.cx - l.x;      /* 문자는 선 오른쪽(또는 왼쪽) */
      if (Math.abs(dx) > near || dy > Math.max(24, l.len * 0.25)) continue;
      const score = Math.abs(dx) + dy * 0.5;
      if (!best || score < best.score) best = { score, len: l.len, dir: "v", line: l };
    }
    if (best) pairs.push({ token: t, dir: best.dir, lenPx: best.len, mmPerPx: t.value / best.len, line: best.line });
  }
  return pairs;
}
/* 다수결: 5% 안에서 서로 맞는 후보가 가장 많은 축척 */
export function voteScale(pairs, tol = 0.05) {
  if (!pairs.length) return { ok: false, reason: "치수 문자와 치수선을 짝지을 수 없었습니다" };
  let best = null;
  for (const p of pairs) {
    const group = pairs.filter((q) => Math.abs(q.mmPerPx - p.mmPerPx) / p.mmPerPx <= tol);
    if (!best || group.length > best.group.length) best = { center: p.mmPerPx, group };
  }
  const vals = best.group.map((g) => g.mmPerPx).sort((a, b) => a - b);
  const mmPerPx = vals[Math.floor(vals.length / 2)];
  const agree = best.group.length, total = pairs.length;
  return { ok: agree >= 2 || (agree === 1 && total === 1), mmPerPx, agree, total, confidence: agree / total,
    used: best.group.map((g) => ({ text: g.token.text, value: g.token.value, lenPx: g.lenPx, dir: g.dir })),
    rejected: pairs.filter((p) => !best.group.includes(p)).map((g) => ({ text: g.token.text, value: g.token.value, lenPx: g.lenPx })) };
}

/* 한 번에: 토큰 + 선 → 축척 */
export function scaleFromDims(tokens, img) {
  const lines = findThinLines(img);
  const pairs = pairTokensToLines(tokens, lines);
  const vote = voteScale(pairs);
  return { ...vote, lines, pairs, tokens };
}
