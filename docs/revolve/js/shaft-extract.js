/* VRINGON 회전체 — 판독기 (M3)
   인터페이스는 하나: extract(input) → { dsl, dims_read, silhouette, hints, notes, method }.
   구현은 셋이고 서로 바꿔 끼운다.
     ① silhouette : 브라우저 결정론 판독. 굵은선(외형선)만 남겨 실루엣 r(x) 를 재고 RDP 로 세그먼트를 만든다.
                    비율은 정확하고, 절대 치수는 전체 길이 하나(사용자 입력 또는 AI 판독값)로 정한다.
                    센터구멍·공차·재질처럼 실루엣에 없는 것은 읽지 못한다고 명시한다.
     ② replay     : 샘플에 미리 저장된 AI 판독 결과(samples/<id>/extracted.json)를 재생. 서버 없이 도는 공개 데모용.
     ③ server     : /api/extract — 온프렘 시각 LLM(스키마 제약 + 골든 few-shot + 수리 루프). ①의 실루엣을 힌트로 같이 보낸다.
   이 파일은 ①과 클라이언트 측 ②③ 호출을 담는다. 픽셀 접근은 ImageData 모양({width,height,data})만 받으므로
   Node 에서도 돌릴 수 있다(래스터화만 호출자가). */

import { DSL_VERSION, validateShaft, normalizeShaft } from "./shaft-schema.js?v=26efc7b8";
import { keywayFor, ISO_COARSE_PITCH, threadSpecText } from "./shaft-standards.js?v=26efc7b8";

/* ------------------------------------------------------------ 픽셀 유틸 */
export function inkMask(img, threshold = 110) {
  const { width: w, height: h, data } = img;
  const m = new Uint8Array(w * h);
  for (let i = 0, p = 0; i < w * h; i++, p += 4) {
    const a = data[p + 3];
    if (a < 40) continue;   /* 투명 = 종이 */
    const lum = 0.299 * data[p] + 0.587 * data[p + 1] + 0.114 * data[p + 2];
    if (lum < threshold) m[i] = 1;
  }
  return { w, h, mask: m };
}
export function erode(mask, w, h) {
  const out = new Uint8Array(w * h);
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x;
    if (mask[i] && mask[i - 1] && mask[i + 1] && mask[i - w] && mask[i + w]) out[i] = 1;
  }
  return out;
}
export function dilate(mask, w, h) {
  const out = new Uint8Array(w * h);
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x;
    if (mask[i] || mask[i - 1] || mask[i + 1] || mask[i - w] || mask[i + w]) out[i] = 1;
  }
  return out;
}
/* 연결 성분 (4-이웃) */
export function components(mask, w, h, minPixels = 6) {
  const label = new Int32Array(w * h);
  const comps = [];
  const stack = new Int32Array(w * h);
  let next = 1;
  for (let s = 0; s < w * h; s++) {
    if (!mask[s] || label[s]) continue;
    let sp = 0; stack[sp++] = s; label[s] = next;
    let n = 0, x0 = w, x1 = 0, y0 = h, y1 = 0, sx = 0, sy = 0;
    while (sp) {
      const i = stack[--sp]; n++;
      const x = i % w, y = (i - x) / w;
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; sx += x; sy += y;
      if (x > 0 && mask[i - 1] && !label[i - 1]) { label[i - 1] = next; stack[sp++] = i - 1; }
      if (x < w - 1 && mask[i + 1] && !label[i + 1]) { label[i + 1] = next; stack[sp++] = i + 1; }
      if (y > 0 && mask[i - w] && !label[i - w]) { label[i - w] = next; stack[sp++] = i - w; }
      if (y < h - 1 && mask[i + w] && !label[i + w]) { label[i + w] = next; stack[sp++] = i + w; }
    }
    if (n >= minPixels) comps.push({ id: next, n, x0, x1, y0, y1, w: x1 - x0 + 1, h: y1 - y0 + 1, cx: sx / n, cy: sy / n });
    next++;
  }
  return { label, comps };
}

/* ------------------------------------------------------------ 실루엣 측정 */
export function measureSilhouette(img, opts = {}) {
  const w = img.width, h = img.height;
  const notes = [];
  /* 굵은선 마스크: 어두운 임계 + 큰 이미지에선 침식 1회 */
  let { mask } = inkMask(img, opts.threshold ?? 105);
  /* 외형선의 선폭(px)을 짧은 가로 런 길이의 중앙값으로 추정한다. 3px 이상이면 침식 1회로 가는선을 걷어내고,
     그보다 얇게 렌더된 이미지(브라우저 안티앨리어싱은 3px 선을 2px 로 만든다)는 침식하면 외형선까지 사라진다. */
  const strokePx = estimateStroke(mask, w, h);
  const iters = Math.max(0, Math.round(strokePx / 2) - 1);   /* 2px→0, 3~5px→1, 6~7px→2 … */
  let thick = mask;
  for (let k = 0; k < iters; k++) thick = erode(thick, w, h);
  const big = iters > 0;
  notes.push(`선폭 추정 ${strokePx}px${big ? ` → 침식 ${iters}회` : ""}`);
  let { label, comps } = components(thick, w, h, 8);
  if (!comps.length) return { ok: false, notes: ["잉크를 찾지 못했습니다(빈 이미지?)"] };
  /* 도면 틀(테두리)은 이미지의 대부분을 덮는다 → 제외 */
  const frame = comps.filter((c) => c.w > w * 0.8 && c.h > h * 0.8);
  const cands = comps.filter((c) => !frame.includes(c) && c.w >= 12 && c.h >= 6);
  if (!cands.length) return { ok: false, notes: ["부품 외형으로 볼 성분이 없습니다"] };
  /* 정면도 = 가장 넓은(가로) 성분. 가로세로 큰 쪽을 축으로 본다 */
  cands.sort((a, b) => (b.w * b.h) - (a.w * a.h));
  let main = cands[0];
  /* 폭이 더 넓은 후보가 있으면(긴 축) 그쪽 */
  const widest = cands.reduce((a, b) => (b.w > a.w ? b : a));
  if (widest.w > main.w * 1.15 && widest.n > main.n * 0.35) main = widest;
  const vertical = main.h > main.w * 1.3;
  if (vertical) notes.push("세로로 놓인 부품으로 보고 축을 세로로 잡았습니다");
  /* 전단면도(부시류): 위·아래 재료 반쪽이 거울상 두 성분으로 나뉜다 → 짝을 찾아 하나로 본다.
     두 성분 사이의 빈 띠가 보어이고, 그 가장자리로 보어 지름을 잰다. */
  let partner = null;
  if (!vertical) {
    for (const c of cands) {
      if (c === main) continue;
      const ov = Math.min(c.x1, main.x1) - Math.max(c.x0, main.x0);
      const disjoint = c.y0 > main.y1 || c.y1 < main.y0;
      /* 거울상 반쪽은 폭·높이·픽셀 수가 비슷하다. 높이가 다르면(예: 정면도+평면도가 위아래로 놓인 다중 투상도) 짝이 아니다 */
      if (ov > 0.85 * Math.min(c.w, main.w) && disjoint && c.n > main.n * 0.4 && c.n < main.n * 2.5 && Math.abs(c.w - main.w) < main.w * 0.15 && Math.abs(c.h - main.h) < Math.max(c.h, main.h) * 0.35) { partner = c; break; }
    }
  }
  const upper = partner ? (partner.y0 < main.y0 ? partner : main) : null, lower = partner ? (upper === main ? partner : main) : null;
  const ux0 = partner ? Math.min(main.x0, partner.x0) : main.x0, ux1 = partner ? Math.max(main.x1, partner.x1) : main.x1;
  const uy0 = partner ? Math.min(main.y0, partner.y0) : main.y0, uy1 = partner ? Math.max(main.y1, partner.y1) : main.y1;
  if (partner) notes.push("위·아래 거울상 두 성분 → 전단면도로 보고 보어를 함께 읽었습니다");
  /* 성분 픽셀만으로 열(또는 행) 별 상·하 외곽 */
  const along = vertical ? main.h : (ux1 - ux0 + 1);   /* 축 방향 길이(px) */
  const topArr = new Float64Array(along), botArr = new Float64Array(along), has = new Uint8Array(along);
  const boreTop = new Float64Array(along), boreBot = new Float64Array(along);
  for (let k = 0; k < along; k++) { topArr[k] = Infinity; botArr[k] = -Infinity; boreTop[k] = -Infinity; boreBot[k] = Infinity; }
  const ids = new Set([main.id, partner?.id].filter(Boolean));
  for (let y = uy0; y <= uy1; y++) for (let x = ux0; x <= ux1; x++) {
    const id = label[y * w + x];
    if (!ids.has(id)) continue;
    const k = vertical ? y - main.y0 : x - ux0, v = vertical ? x : y;
    if (v < topArr[k]) topArr[k] = v; if (v > botArr[k]) botArr[k] = v; has[k] = 1;
    if (partner) { if (id === upper.id && v > boreTop[k]) boreTop[k] = v; if (id === lower.id && v < boreBot[k]) boreBot[k] = v; }
  }
  main = { ...main, x0: ux0, x1: ux1, y0: uy0, y1: uy1, w: ux1 - ux0 + 1, h: uy1 - uy0 + 1 };
  /* 빈 열(외형선이 없는 열: 원통 중간)은 이웃에서 보간 — 외형은 위·아래 선만 있으므로 열마다 있어야 정상.
     그러나 얇은 곳은 침식으로 끊길 수 있다 → 선형 보간 */
  const fill = (arr) => {
    let last = -1;
    for (let k = 0; k < along; k++) {
      if (has[k] && Number.isFinite(arr[k])) { if (last >= 0 && k - last > 1) { for (let j = last + 1; j < k; j++) arr[j] = arr[last] + ((arr[k] - arr[last]) * (j - last)) / (k - last); } last = k; }
    }
    for (let k = 0; k < along; k++) if (!Number.isFinite(arr[k])) arr[k] = last >= 0 ? arr[last] : 0;
  };
  fill(topArr); fill(botArr);
  /* 축: 상·하 중간의 중앙값 */
  const mids = []; for (let k = 0; k < along; k++) mids.push((topArr[k] + botArr[k]) / 2);
  const axis = median(mids);
  const N = Math.min(800, along);
  const top = new Float64Array(N), bottom = new Float64Array(N);
  let bore = null;
  if (partner) {
    /* 보어 반경(px): 위 반쪽 아래 가장자리 ↔ 아래 반쪽 위 가장자리 */
    const b = new Float64Array(along);
    for (let k = 0; k < along; k++) b[k] = Number.isFinite(boreTop[k]) && Number.isFinite(boreBot[k]) && boreBot[k] > boreTop[k] ? (boreBot[k] - boreTop[k]) / 2 : NaN;
    /* 끝면(수직선)에서는 두 성분이 축까지 내려오지 않으므로 이웃값으로 메운다 */
    let lastv = NaN; for (let k = 0; k < along; k++) { if (Number.isFinite(b[k])) lastv = b[k]; else b[k] = lastv; }
    lastv = NaN; for (let k = along - 1; k >= 0; k--) { if (Number.isFinite(b[k])) lastv = b[k]; else b[k] = lastv; }
    bore = new Float64Array(N);
    for (let i = 0; i < N; i++) { const k = Math.min(along - 1, Math.floor(((i + 0.5) * along) / N)); bore[i] = Math.max(0, b[k] || 0); }
  }
  for (let i = 0; i < N; i++) {
    const k = Math.min(along - 1, Math.floor(((i + 0.5) * along) / N));
    top[i] = Math.max(0, axis - topArr[k]); bottom[i] = Math.max(0, botArr[k] - axis);
  }
  /* 안쪽 성분 힌트: 키홈(길쭉한 둥근 홈 윤곽)·횡구멍(원)은 굵은선 마스크에서, 나사 골지름선(긴 가는 선 두 개)은
     침식 전 마스크에서 찾는다(가는선은 침식에서 사라진다). */
  const hints = [];
  const insideOf = (list) => list.filter((c) => c.id !== main.id && c.id !== partner?.id && c.x0 > main.x0 + 2 && c.x1 < main.x1 - 2 && c.y0 > main.y0 + 1 && c.y1 < main.y1 - 1 && !frame.includes(c));
  for (const c of insideOf(comps)) {
    const asp = c.w / c.h;
    const relX0 = (c.x0 - main.x0) / main.w, relX1 = (c.x1 - main.x0) / main.w;
    if (asp >= 8) continue;
    if (asp >= 1.7 && c.h >= 3 && c.w >= 6 && Math.abs(c.cy - axis) < main.h * 0.15) hints.push({ type: "keyway", relX0, relX1, width_px: c.h, len_px: c.w });
    else if (asp >= 0.7 && asp <= 1.4 && c.w >= 4 && Math.abs(c.cy - axis) < main.h * 0.15 && !partner) hints.push({ type: "cross_hole", relX: (c.cx - main.x0) / main.w, dia_px: (c.w + c.h) / 2 });
  }
  /* 가는선 전용 마스크: 원 마스크에서 굵은선(팽창) 을 뺀다 — 골지름선이 외형선에 붙어 있어도 떨어져 나온다 */
  let thinComps = comps;
  if (big) {
    let grown = thick; for (let k = 0; k < iters + 1; k++) grown = dilate(grown, w, h);
    const thinMask = new Uint8Array(w * h);
    for (let i = 0; i < w * h; i++) if (mask[i] && !grown[i]) thinMask[i] = 1;
    thinComps = components(thinMask, w, h, 8).comps;
  }
  const lines = [];
  for (const c of insideOf(thinComps)) {
    const asp = c.w / c.h;
    if (asp >= 8 && c.h <= Math.max(3, main.h * 0.02) && c.w >= main.w * 0.04) lines.push({ ...c, relX0: (c.x0 - main.x0) / main.w, relX1: (c.x1 - main.x0) / main.w });
  }
  /* 축 대칭 쌍의 긴 가는선 = 나사 골지름선 (축에서 충분히 떨어져 있어야 센터구멍 숨은선과 구별) */
  for (let i = 0; i < lines.length; i++) for (let j = i + 1; j < lines.length; j++) {
    const a = lines[i], b = lines[j];
    const ra = Math.abs(a.cy - axis), rb = Math.abs(b.cy - axis);
    if (Math.abs(a.relX0 - b.relX0) < 0.03 && Math.abs(a.relX1 - b.relX1) < 0.03 && Math.abs((a.cy - axis) + (b.cy - axis)) < main.h * 0.04 && Math.abs(a.cy - b.cy) > 3 && Math.min(ra, rb) > main.h * 0.15) {
      if (!hints.some((h) => h.type === "thread" && Math.abs(h.relX0 - a.relX0) < 0.03)) hints.push({ type: "thread", relX0: Math.min(a.relX0, b.relX0), relX1: Math.max(a.relX1, b.relX1), minor_px: (ra + rb) / 2 });
    }
  }
  /* 입력 적합성 신호: 큰 성분이 여럿(다중 투상도·조립체), 저해상, 짝 없이 위아래로 큰 성분이 더 있음 */
  const bigOnes = cands.filter((c) => c.w >= w * 0.22 || c.n >= main.n * 0.35).filter((c) => c.id !== main.id && c.id !== partner?.id);
  const flags = [];
  if (bigOnes.length >= 1) flags.push({ kind: "multiview", n: bigOnes.length + 1 + (partner ? 1 : 0), text: `큰 성분이 ${bigOnes.length + 1}개 — 여러 투상도나 조립체로 보입니다. 이 데모는 회전체 정면도 한 장을 읽습니다(단면도·키홈 단면은 옆에 있어도 됩니다).` });
  if (along < 500) flags.push({ kind: "lowres", px: along, text: `부품이 가로 ${along}px 로 작습니다(권장 1,000px 이상). 저해상 JPEG 은 외형선과 치수선이 붙어 판독이 어긋납니다.` });
  if (partner) {
    /* 짝을 잡았어도 보어가 외경에 비해 너무 크면 거울상 반쪽이 아니라 별개 뷰다 */
    let badBore = 0; for (let i = 0; i < N; i++) if (bore[i] > 0.92 * Math.min(top[i], bottom[i])) badBore++;
    if (badBore > N * 0.2) flags.push({ kind: "not_section", text: "위·아래 두 성분을 전단면 반쪽으로 보기엔 안쪽 띠가 너무 넓습니다 — 서로 다른 투상도일 가능성이 큽니다." });
  }
  for (const f of flags) notes.push(f.text);
  return { ok: true, L_px: along, top, bottom, bore, sectioned: !!partner, axis, bbox: { x0: main.x0, y0: main.y0, x1: main.x1, y1: main.y1 }, vertical, hints, notes, flags, pxPerLen: along, imageSize: { w, h } };
}
function median(a) { const s = [...a].sort((p, q) => p - q); return s.length ? s[Math.floor(s.length / 2)] : 0; }
function estimateStroke(mask, w, h) {
  const hist = new Array(12).fill(0);
  for (let y = 0; y < h; y += 2) {
    let run = 0;
    for (let x = 0; x < w; x++) {
      if (mask[y * w + x]) run++;
      else { if (run > 0 && run < 12) hist[run]++; run = 0; }
    }
  }
  /* 가장 흔한 짧은 런(1~11px) 중 픽셀 수 가중 최빈값 */
  let best = 1, bestN = -1;
  for (let k = 1; k < 12; k++) if (hist[k] * k > bestN) { bestN = hist[k] * k; best = k; }
  return best;
}

/* ------------------------------------------------------------ 프로파일 → DSL */
function rdp(pts, eps) {
  if (pts.length < 3) return pts.slice();
  const [a, b] = [pts[0], pts[pts.length - 1]];
  let idx = -1, dmax = 0;
  const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i];
    const d = Math.abs(dy * p.x - dx * p.y + b.x * a.y - b.y * a.x) / len;
    if (d > dmax) { dmax = d; idx = i; }
  }
  if (dmax > eps) {
    const l = rdp(pts.slice(0, idx + 1), eps), r = rdp(pts.slice(idx), eps);
    return l.slice(0, -1).concat(r);
  }
  return [a, b];
}
const round = (v, step) => Math.round(v / step) * step;

export function profileToDSL(sil, opts = {}) {
  const N = sil.top.length;
  const notes = [];
  /* 위·아래 평균 반경, 길이 정규화 (r/L) */
  const r = new Float64Array(N);
  for (let i = 0; i < N; i++) r[i] = ((sil.top[i] + sil.bottom[i]) / 2) / sil.L_px;
  /* 3점 중앙값 평활 */
  const rs = new Float64Array(N);
  for (let i = 0; i < N; i++) { const a = r[Math.max(0, i - 1)], b = r[i], c = r[Math.min(N - 1, i + 1)]; rs[i] = [a, b, c].sort((p, q) => p - q)[1]; }
  const L = opts.overallLength || 100;   /* mm */
  const pxPerMm = sil.L_px / L;
  /* RDP 허용오차: 1.2px 또는 0.25% L 중 큰 값 */
  const eps = Math.max(1.5 / sil.L_px, 0.0008);
  const pts = []; for (let i = 0; i < N; i++) pts.push({ x: (i + 0.5) / N, y: rs[i] });
  pts.unshift({ x: 0, y: rs[0] }); pts.push({ x: 1, y: rs[N - 1] });
  const simp = rdp(pts, eps);
  /* 조각 분류 */
  const pieces = [];
  for (let i = 1; i < simp.length; i++) {
    const a = simp[i - 1], b = simp[i];
    const dx = b.x - a.x, dr = b.y - a.y;
    const slope = dx > 1e-9 ? Math.abs(dr) / dx : Infinity;
    const minPx = Math.max(3.5 / sil.L_px, 2.6 / N);   /* 수직 벽은 표본 2~3개 폭으로 번진다 */
    const mmX = dx * L, mmR = Math.abs(dr) * L;
    let kind;
    if (Math.abs(dr) <= eps * 1.5) kind = "flat";
    else if (slope > 3.5 || dx < minPx) kind = "step";
    else if (slope > 1.5 && mmX <= 3) kind = "fillet";          /* 가파른 짧은 경사 = 필렛+단차가 합쳐진 것 */
    else if ((mmX <= 3.5 || dx < 0.05) && mmR <= 5 && slope > 0.3) kind = "chamfer";
    else kind = "taper";
    pieces.push({ x0: a.x, x1: b.x, r0: a.y, r1: b.y, kind });
  }
  /* 정리: 아주 짧은 평탄 조각(래스터 잡음)은 지우고, 이웃한 평탄끼리·계단끼리는 합친다 */
  const clean = [];
  for (const p of pieces) {
    const q = clean[clean.length - 1];
    if (q && p.kind === "flat" && q.kind === "flat" && Math.abs(p.r1 - q.r0) <= eps * 2 && Math.abs(p.r0 - q.r1) <= eps * 2) { q.x1 = p.x1; q.r1 = p.r1; continue; }
    if (q && p.kind === "step" && q.kind === "step" && Math.sign(p.r1 - p.r0) === Math.sign(q.r1 - q.r0)) { q.x1 = p.x1; q.r1 = p.r1; continue; }
    clean.push({ ...p });
  }
  for (let i = clean.length - 1; i >= 0; i--) {
    const p = clean[i];
    if (p.kind === "flat" && (p.x1 - p.x0) * sil.L_px < 3 && i > 0 && i < clean.length - 1) { clean[i + 1].x0 = p.x0; clean[i + 1].r0 = clean[i - 1].r1; clean.splice(i, 1); }
  }
  pieces.length = 0; pieces.push(...clean);
  /* 모따기 옆이 같은 방향의 계단이면 필렛(오목 전이)이다 */
  for (let i = 0; i < pieces.length; i++) {
    const p = pieces[i]; if (p.kind !== "chamfer") continue;
    const rising = p.r1 > p.r0;
    const nx = pieces[i + 1], pv = pieces[i - 1];
    if (rising && nx?.kind === "step" && nx.r1 > nx.r0) p.kind = "fillet";
    if (!rising && pv?.kind === "step" && pv.r1 < pv.r0) p.kind = "fillet";
  }
  /* 세그먼트 조립 */
  const dStep = L < 30 ? 0.1 : L < 120 ? 0.5 : 1;   /* 지름 스냅 */
  const lStep = L < 40 ? 0.5 : 1;
  const segs = [], transitions = [], grooves = [];
  let cur = null;   /* {x0, x1, r, kind} 진행 중 원통 */
  let pendingStart = null;   /* 다음 원통이 이 x 에서 시작해야 함(오른쪽 도피홈을 품는다) */
  const flush = () => { if (cur) { segs.push(cur); cur = null; } };
  const lastCyl = () => (segs.length && segs[segs.length - 1].kind === "cyl" ? segs[segs.length - 1] : null);
  for (let i = 0; i < pieces.length; i++) {
    const p = pieces[i];
    if (p.kind === "flat") {
      const rr = (p.r0 + p.r1) / 2;
      const prev = pieces[i - 1], next = pieces[i + 1];
      /* 오목부(recess): 양쪽이 계단이고 양쪽 이웃보다 낮은 짧은 평탄 */
      const isRecess = prev?.kind === "step" && next?.kind === "step" && prev.r0 > rr + eps && next.r1 > rr + eps
        && ((p.x1 - p.x0) * L <= 12 || (p.x1 - p.x0) < 0.06);
      if (isRecess) {
        const rL = prev.r0, rR = next.r1;
        const width = (p.x1 - p.x0) * L;
        if (Math.abs(rL - rR) <= eps * 2 && width <= 6) {
          /* 홈: 같은 원통 안. 왼쪽 원통을 되살려 이어 간다 */
          if (!cur) cur = segs.pop() || { x0: p.x0, x1: p.x0, r: rL, kind: "cyl" };
          grooves.push({ segIndex: segs.length, x0: p.x0 * L, x1: p.x1 * L, depth: (cur.r - rr) * L });
          cur.x1 = p.x1;
          i += 1;   /* 오른쪽 계단 건너뛰기; 다음 평탄은 같은 원통에 붙는다 */
          continue;
        }
        /* 도피홈: 작은 쪽 이웃 세그먼트에 속하고, 큰 쪽과의 경계에 걸린다 */
        const smallLeft = rL < rR;
        transitions.push({ undercutAt: smallLeft ? p.x1 : p.x0, width, depth: (Math.min(rL, rR) - rr) * L });
        if (smallLeft) {
          if (!cur) cur = segs.pop() || { x0: p.x0, x1: p.x0, r: rL, kind: "cyl" };
          cur.x1 = p.x1;
          continue;
        }
        flush();
        pendingStart = p.x0;   /* 다음 원통(오른쪽 작은 쪽)이 도피홈 바닥부터 시작 */
        i += 1;   /* 오른쪽 계단 건너뛰기 */
        continue;
      }
      if (cur && Math.abs(cur.r - rr) <= eps * 1.5) { cur.x1 = p.x1; continue; }
      flush();
      cur = { x0: pendingStart ?? p.x0, x1: p.x1, r: rr, kind: "cyl" };
      pendingStart = null;
    } else if (p.kind === "taper") {
      flush();
      segs.push({ x0: pendingStart ?? p.x0, x1: p.x1, r0: p.r0, r1: p.r1, kind: "taper" });
      pendingStart = null;
    } else if (p.kind === "fillet") {
      const R = Math.max(0.5, round((p.x1 - p.x0) * L, 0.5));
      const rising = p.r1 > p.r0;
      transitions.push({ fillet: true, xAt: rising ? p.x1 : p.x0, radius: R });
      if (rising) { if (cur) cur.x1 = p.x1; else cur = { x0: pendingStart ?? p.x0, x1: p.x1, r: p.r0, kind: "cyl" }; }
      else { flush(); cur = { x0: p.x0, x1: p.x1, r: p.r1, kind: "cyl" }; }
      pendingStart = null;
    } else if (p.kind === "chamfer") {
      const size = (p.x1 - p.x0) * L, drop = Math.abs(p.r1 - p.r0) * L;
      let angle = (Math.atan2(drop, size) * 180) / Math.PI;
      angle = Math.abs(angle - 45) <= 9 ? 45 : Math.abs(angle - 30) <= 7 ? 30 : Math.abs(angle - 60) <= 7 ? 60 : Math.round(angle / 5) * 5 || 45;
      const atStart = i === 0 || (pieces[i - 1]?.kind === "step" && p.r1 > p.r0);   /* 올라가는 모따기 = 세그먼트 시작 */
      transitions.push({ chamfer: true, xAt: atStart ? p.x0 : p.x1, size: round(size, 0.5) || 0.5, angle, rising: p.r1 > p.r0 });
      if (atStart) { flush(); cur = { x0: pendingStart ?? p.x0, x1: p.x1, r: p.r1, kind: "cyl", fromChamfer: true }; pendingStart = null; }
      else if (cur) { cur.x1 = p.x1; }
      else { cur = { x0: p.x0, x1: p.x1, r: p.r0, kind: "cyl" }; }
    } else { /* step */
      flush();
    }
  }
  flush();
  /* 절대 치수 */
  const dsl = { dsl: DSL_VERSION, id: opts.id || "extracted", name_ko: opts.name_ko || "판독 회전체", part_class: "shaft", units: "mm", segments: [], transitions: [], grooves: [], bore: null, features: [], meta: { source: "extracted", generator: "silhouette-extractor/1.0", notes: [] } };
  let xcur = 0;
  const bounds = [];
  for (const s of segs) {
    let len = round((s.x1 - s.x0) * L, lStep);
    if (len < lStep) continue;
    bounds.push({ x0: xcur, x1: xcur + len, s });
    if (s.kind === "taper") dsl.segments.push({ type: "taper", length: len, d_start: Math.max(dStep, round(2 * s.r0 * L, dStep)), d_end: Math.max(dStep, round(2 * s.r1 * L, dStep)) });
    else dsl.segments.push({ type: "cyl", length: len, diameter: Math.max(dStep, round(2 * s.r * L, dStep)) });
    xcur += len;
  }
  /* 길이 합을 전체 길이에 맞춘다(반올림 잔차는 가장 긴 세그먼트에) */
  const sum = dsl.segments.reduce((a, s) => a + s.length, 0);
  if (dsl.segments.length && Math.abs(sum - L) > 1e-6) {
    const k = dsl.segments.reduce((bi, s, i, arr) => (s.length > arr[bi].length ? i : bi), 0);
    dsl.segments[k].length = round(dsl.segments[k].length + (L - sum), lStep > 0.5 ? 0.5 : 0.1);
  }
  /* 전이: 모따기는 xAt 에 가장 가까운 경계 */
  const n = dsl.segments.length;
  const spansX = []; { let x = 0; for (const s of dsl.segments) { spansX.push(x); x += s.length; } spansX.push(x); }
  for (const t of transitions) {
    if (t.fillet) {
      const xa = t.xAt * L;
      let at = 0, best = Infinity; spansX.forEach((x, i) => { if (Math.abs(x - xa) < best) { best = Math.abs(x - xa); at = i; } });
      if (best < L * 0.03 && at > 0 && at < n) dsl.transitions.push({ at, type: "fillet", radius: t.radius });
      continue;
    }
    if (t.chamfer) {
      const xa = t.xAt * L;
      let at = 0, best = Infinity; spansX.forEach((x, i) => { if (Math.abs(x - xa) < best) { best = Math.abs(x - xa); at = i; } });
      if (best < L * 0.03) dsl.transitions.push({ at, type: "chamfer", size: t.size, angle: t.angle === 45 ? undefined : t.angle });
    } else if (t.undercutAt !== undefined) {
      const xa = t.undercutAt * L;
      let at = 0, best = Infinity; spansX.forEach((x, i) => { if (Math.abs(x - xa) < best) { best = Math.abs(x - xa); at = i; } });
      if (best < L * 0.03 && at > 0 && at < n) dsl.transitions.push({ at, type: "undercut", width: round(t.width, 0.5) || 0.5, depth: round(t.depth, 0.1) || 0.1 });
    }
  }
  for (const t of dsl.transitions) if (t.angle === undefined) delete t.angle;
  /* 홈 */
  for (const g of grooves) {
    const seg = Math.min(n - 1, g.segIndex);
    if (seg < 0) continue;
    const off = round(g.x0 - spansX[seg], 0.5), width = Math.max(0.5, round(g.x1 - g.x0, 0.1));
    if (off >= 0 && off + width <= dsl.segments[seg].length) dsl.grooves.push({ segment: seg, offset: off, width, depth: Math.max(0.2, round(g.depth, 0.1)), kind: "generic" });
  }
  /* 보어 (전단면도에서 읽은 경우): 보어 반경 프로파일 → 세그먼트 */
  if (sil.bore && sil.sectioned) {
    const bN = sil.bore.length; const bp = [];
    for (let i = 0; i < bN; i++) bp.push({ x: (i + 0.5) / bN, y: sil.bore[i] / sil.L_px });
    const bs = rdp(bp, Math.max(1.5 / sil.L_px, 0.0008));
    const bsegs = [];
    for (let i = 1; i < bs.length; i++) {
      const a = bs[i - 1], b = bs[i];
      if (Math.abs(b.y - a.y) > eps * 1.5) continue;   /* 계단·모따기 구간은 건너뛰고 평탄부만 */
      const d = round(2 * ((a.y + b.y) / 2) * L, dStep);
      const last = bsegs[bsegs.length - 1];
      if (last && Math.abs(last.diameter - d) < dStep / 2) last.x1 = b.x; else bsegs.push({ x0: a.x, x1: b.x, diameter: d });
    }
    if (bsegs.length && bsegs[0].diameter > 0) {
      const out = [];
      for (let i = 0; i < bsegs.length; i++) {
        const x0 = i === 0 ? 0 : (bsegs[i - 1].x1 + bsegs[i].x0) / 2, x1 = i === bsegs.length - 1 ? 1 : (bsegs[i].x1 + bsegs[i + 1].x0) / 2;
        out.push({ length: round((x1 - x0) * L, lStep), diameter: bsegs[i].diameter });
      }
      const sumB = out.reduce((a, s) => a + s.length, 0);
      out[out.length - 1].length = round(out[out.length - 1].length + (L - sumB), 0.1);
      if (out.every((s) => s.length > 0)) { dsl.bore = { through: true, segments: out }; notes.push("전단면도의 위·아래 반쪽 사이 빈 띠에서 보어 지름을 읽었습니다."); }
    }
  }
  /* 힌트 → 피처 */
  for (const h of sil.hints || []) {
    if (h.type === "keyway") {
      const x0 = h.relX0 * L, x1 = h.relX1 * L;
      const seg = spansX.findIndex((x, i) => i < n && x0 >= x - 1e-6 && x1 <= spansX[i + 1] + 1e-6);
      if (seg < 0 || dsl.segments[seg].type !== "cyl") continue;
      const D = dsl.segments[seg].diameter;
      const std = keywayFor(D);
      let width = round(h.width_px / pxPerMm, 0.5);
      if (std && Math.abs(width - std.width) <= Math.max(1, std.width * 0.3)) width = std.width;
      const depth = std ? std.depth : round(width * 0.55, 0.5);
      dsl.features.push({ type: "keyway", segment: seg, offset: round(x0 - spansX[seg], 0.5), length: round(x1 - x0, 0.5), width, depth, kind: "parallel" });
      notes.push(`키홈은 정면도 홈 윤곽에서 폭·길이를 재고 깊이는 DIN 6885 표준값(t1=${depth})을 넣었습니다(단면도 미판독).`);
    } else if (h.type === "cross_hole") {
      const pos = round(h.relX * L, 0.5), d = round(h.dia_px / pxPerMm, 0.5);
      if (d >= 1) dsl.features.push({ type: "cross_hole", position: pos, diameter: d, through: true, angle: 0 });
    } else if (h.type === "thread") {
      const x0 = h.relX0 * L, x1 = h.relX1 * L;
      const seg = spansX.findIndex((x, i) => i < n && (x0 + x1) / 2 >= x && (x0 + x1) / 2 <= spansX[i + 1]);
      if (seg >= 0 && dsl.segments[seg].type === "cyl") {
        const s = dsl.segments[seg];
        const nominal = [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 27, 30, 36].reduce((a, b) => (Math.abs(b - s.diameter) < Math.abs(a - s.diameter) ? b : a));
        s.type = "thread"; s.diameter = nominal; s.spec = threadSpecText(nominal, ISO_COARSE_PITCH[nominal]); s.pitch = ISO_COARSE_PITCH[nominal];
        notes.push(`나사부는 골지름 가는선 쌍으로 찾았고 피치는 보통나사(${s.spec})로 가정했습니다(호출문 미판독).`);
      }
    }
  }
  notes.push("실루엣 판독은 비율만 정확합니다. 절대 치수는 전체 길이(" + L + "mm) 하나로 정했고, 센터구멍·공차·재질·필렛 R 은 읽지 않았습니다.");
  const norm = normalizeShaft(dsl);
  const v = validateShaft(norm);
  if (!v.ok) {
    /* 못 만드는 것은 덜어낸다: 전이·홈·피처 순으로 */
    for (const key of ["features", "grooves", "transitions"]) {
      for (let i = norm[key].length - 1; i >= 0 && !validateShaft(norm).ok; i--) { const [rm] = norm[key].splice(i, 1); if (!validateShaft(norm).ok) norm[key].splice(i, 0, rm); }
    }
    if (!validateShaft(norm).ok) { norm.transitions = []; norm.grooves = []; norm.features = []; }
    notes.push("일부 전이/피처는 기하 검사에 걸려 제외했습니다.");
  }
  norm.meta.notes = notes;
  return { dsl: norm, notes, pieces, simplified: simp };
}

/* 한 번에: 이미지 → DSL (결정론) */
export function extractHeuristic(img, opts = {}) {
  const sil = measureSilhouette(img, opts);
  if (!sil.ok) return { ok: false, notes: sil.notes, method: "silhouette" };
  const out = profileToDSL(sil, opts);
  /* 그럴듯한 회전체인가: 세그먼트가 지나치게 많거나(잡음), 검사 실패로 피처를 다 덜어냈거나, 다중 투상도 신호가 있으면 낮은 신뢰로 표시 */
  const reasons = [];
  if ((out.dsl.segments || []).length > 14) reasons.push(`세그먼트가 ${out.dsl.segments.length}개로 너무 많습니다(잡음이 외형선에 섞였을 때의 전형).`);
  const tiny = (out.dsl.segments || []).filter((sg) => sg.length < (opts.overallLength || 100) * 0.015).length;
  if (tiny >= 3) reasons.push(`아주 짧은 세그먼트가 ${tiny}개 — 치수선·지시선이 외형선에 붙어 읽혔을 가능성.`);
  for (const f of sil.flags || []) reasons.push(f.text);
  const plausible = reasons.length === 0 || (reasons.length === 1 && (sil.flags || []).some((f) => f.kind === "lowres"));
  return { ok: true, method: "silhouette", plausible, reasons, dsl: out.dsl, notes: [...sil.notes, ...out.notes], silhouette: { L: sil.L_px, top: sil.top, bottom: sil.bottom, bbox: sil.bbox, axis: sil.axis, imageSize: sil.imageSize }, hints: sil.hints, flags: sil.flags || [], dims_read: [], pieces: out.pieces };
}

/* ------------------------------------------------------------ 서버(시각 LLM) 호출 — 브라우저 전용 */
export async function extractViaServer(imageDataUrl, { hints = null, overallLength = null, endpoint = "./api/extract", tier = "text" } = {}) {
  const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ imageB64: imageDataUrl, hints, overallLength, tier }) });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || `서버 오류 ${r.status}`);
  return { ok: true, method: "server", ...j };
}
