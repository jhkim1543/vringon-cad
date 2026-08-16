/* Part 2 — 다시점 도면에서 뷰를 나누고, 각 뷰의 윤곽을 뽑는다 (결정론).
   한 장에 정면·평면·측면이 함께 있는 도면은 "뷰가 무엇인지" 를 기하만으로는 알 수 없다(캐스터 평면도가
   회전 프로파일 점수 0.97 을 받는다). 그래서 여기서는 **나누고 재기만** 하고, 무엇으로 만들지는 사람이 정한다.

   splitViews(img)   → 뷰 목록 (상자·잉크량·회전 프로파일 신호·점수)
   viewProfile(v)    → 그 뷰의 축 기준 상·하 반경 (회전체용)
   viewContours(v)   → 그 뷰의 바깥 윤곽과 구멍 (압출용, px 좌표)
   픽셀 접근은 ImageData 모양({width,height,data})만 받으므로 Node 에서도 돈다. */

import { inkMask, erode, components, estimateStroke } from "./shaft-extract.js";

export function splitViews(img, opts = {}) {
  const w = img.width, h = img.height;
  const { mask } = inkMask(img, opts.threshold ?? 105);
  /* 침식 횟수는 선 굵기에 맞춘다. 얇게 렌더된 도면을 한 겹 깎으면 외형선까지 끊어진다(플랜지 원이 83조각으로 부서졌다). */
  const iters = Math.max(0, Math.round(estimateStroke(mask, w, h) / 2) - 1);
  let thick = mask;
  for (let k = 0; k < iters; k++) thick = erode(thick, w, h);
  const { label, comps } = components(thick, w, h, 8);
  const frame = comps.filter((c) => c.w > w * 0.85 && c.h > h * 0.85);
  const cands = comps.filter((c) => !frame.includes(c) && c.n >= Math.max(40, w * h * 2e-5) && c.w >= 10 && c.h >= 6);
  if (!cands.length) return { ok: false, views: [], reason: "도면에서 형상을 찾지 못했습니다" };

  /* 가까운 성분끼리 한 뷰로 묶는다 (틈 = 이미지 폭의 3.5%) */
  const gap = Math.max(12, w * (opts.gap ?? 0.035));
  const par = cands.map((_, i) => i);
  const find = (i) => (par[i] === i ? i : (par[i] = find(par[i])));
  for (let i = 0; i < cands.length; i++) for (let j = i + 1; j < cands.length; j++) {
    const a = cands[i], b = cands[j];
    const dx = Math.max(0, Math.max(a.x0, b.x0) - Math.min(a.x1, b.x1));
    const dy = Math.max(0, Math.max(a.y0, b.y0) - Math.min(a.y1, b.y1));
    if (dx < gap && dy < gap) par[find(i)] = find(j);
  }
  const groups = new Map();
  cands.forEach((c, i) => { const r = find(i); if (!groups.has(r)) groups.set(r, []); groups.get(r).push(c); });

  const views = [];
  for (const list of groups.values()) {
    const x0 = Math.min(...list.map((c) => c.x0)), x1 = Math.max(...list.map((c) => c.x1));
    const y0 = Math.min(...list.map((c) => c.y0)), y1 = Math.max(...list.map((c) => c.y1));
    const W = x1 - x0 + 1, H = y1 - y0 + 1;
    if (W < w * 0.05 || H < h * 0.025) continue;       /* 표제란 글자 뭉치 등은 뷰로 보지 않는다 */
    const ink = list.reduce((a, c) => a + c.n, 0);
    const v = { id: views.length + 1, x0, y0, x1, y1, W, H, ink, comps: list, ids: new Set(list.map((c) => c.id)), label, imgW: w, imgH: h };
    Object.assign(v, measure(v));
    v.revolveScore = score(v);
    views.push(v);
  }
  views.sort((a, b) => b.ink - a.ink);
  views.forEach((v, i) => (v.id = i + 1));
  return { ok: views.length > 0, views, w, h, label };
}

/* 뷰 하나의 상·하 외곽과 신호 */
function measure(v) {
  const { label, imgW: w } = v, W = v.W;
  const top = new Float64Array(W).fill(Infinity), bot = new Float64Array(W).fill(-Infinity);
  for (let y = v.y0; y <= v.y1; y++) for (let x = v.x0; x <= v.x1; x++) {
    if (!v.ids.has(label[y * w + x])) continue;
    const k = x - v.x0;
    if (y < top[k]) top[k] = y;
    if (y > bot[k]) bot[k] = y;
  }
  const mids = [];
  for (let k = 0; k < W; k++) if (Number.isFinite(top[k])) mids.push((top[k] + bot[k]) / 2);
  mids.sort((a, b) => a - b);
  const axis = mids.length ? mids[Math.floor(mids.length / 2)] : (v.y0 + v.y1) / 2;
  const rt = new Float64Array(W), rb = new Float64Array(W), has = new Uint8Array(W);
  let rmax = 0;
  for (let k = 0; k < W; k++) {
    if (!Number.isFinite(top[k])) continue;
    has[k] = 1;
    rt[k] = Math.max(0, axis - top[k]); rb[k] = Math.max(0, bot[k] - axis);
    rmax = Math.max(rmax, rt[k], rb[k]);
  }
  const eps = rmax * 0.04;
  let both = 0, d = 0, m = 0, flat = 0, cnt = 0, prev = NaN, cerr = 0, cbase = 0;
  for (let k = 0; k < W; k++) {
    if (!has[k]) continue;
    if (rt[k] > eps && rb[k] > eps) { both++; d += Math.abs(rt[k] - rb[k]); m += Math.max(rt[k], rb[k]); }
    const r = Math.max(rt[k], rb[k]);
    if (Number.isFinite(prev)) { cnt++; if (Math.abs(r - prev) <= Math.max(1, rmax * 0.004)) flat++; }
    prev = r;
    const u = ((k + 0.5) / W) * 2 - 1;
    cerr += Math.abs(r - rmax * Math.sqrt(Math.max(0, 1 - u * u))); cbase += rmax;
  }
  return { axis, rTop: rt, rBot: rb, hasCol: has, rmax,
    signals: { both: both / W, asym: both ? d / m : 1, flat: cnt ? flat / cnt : 0, aspect: W / Math.max(1, v.H), circleErr: cbase ? cerr / cbase : 1 } };
}

/* 회전 프로파일로서의 그럴듯함 (0~1). 순위를 매기는 용도이지 판정이 아니다 */
function score(v) {
  const s = v.signals;
  return +(
    (1 - Math.min(1, s.asym / 0.25)) * 0.45 +
    Math.min(1, s.flat / 0.8) * 0.3 +
    Math.min(1, s.aspect / 2) * 0.15 +
    Math.min(1, s.both / 0.8) * 0.1
  ).toFixed(3);
}

/* 회전체용: 축 기준 반경 표본 (N 등분) */
export function viewProfile(v, N = 400) {
  const out = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const k = Math.min(v.W - 1, Math.floor(((i + 0.5) * v.W) / N));
    out[i] = v.hasCol[k] ? (v.rTop[k] + v.rBot[k]) / 2 : 0;
  }
  /* 빈 열 보간 */
  let last = -1;
  for (let i = 0; i < N; i++) { if (out[i] > 0) { if (last >= 0 && i - last > 1) for (let j = last + 1; j < i; j++) out[j] = out[last] + ((out[i] - out[last]) * (j - last)) / (i - last); last = i; } }
  return out;
}

/* 압출용: 바깥 윤곽 + 구멍 (px 좌표, 뷰 좌상단 기준) */
export function viewContours(v, opts = {}) {
  const outerComp = v.comps.reduce((a, b) => (b.n > a.n ? b : a));
  const outer = traceComponent(v, outerComp);
  if (!outer) return { outer: null, holes: [] };
  const holes = [];
  for (const c of v.comps) {
    if (c === outerComp) continue;
    const inside = c.x0 > outerComp.x0 && c.x1 < outerComp.x1 && c.y0 > outerComp.y0 && c.y1 < outerComp.y1;
    const bigEnough = c.w >= outerComp.w * (opts.minHole ?? 0.02) && c.h >= outerComp.h * (opts.minHole ?? 0.02);
    const notTooBig = c.w < outerComp.w * 0.85 && c.h < outerComp.h * 0.85;
    if (inside && bigEnough && notTooBig) { const p = traceComponent(v, c); if (p && p.length >= 6) holes.push(p); }
  }
  return { outer, holes };
}

/* 성분 하나의 바깥 경계를 따라간다 (무어 이웃 추적) → RDP 로 단순화 */
function traceComponent(v, c) {
  const w = v.imgW, label = v.label, id = c.id;
  const at = (x, y) => (x < c.x0 || x > c.x1 || y < c.y0 || y > c.y1 ? 0 : label[y * w + x] === id ? 1 : 0);
  let sx = -1, sy = -1;
  outer: for (let y = c.y0; y <= c.y1; y++) for (let x = c.x0; x <= c.x1; x++) if (at(x, y)) { sx = x; sy = y; break outer; }
  if (sx < 0) return null;
  const N8 = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
  const pts = [];
  let cx = sx, cy = sy, dir = 6, guard = 0;
  const limit = (c.w + c.h) * 12 + 4000;
  do {
    pts.push([cx, cy]);
    let found = false;
    for (let k = 0; k < 8; k++) {
      const nd = (dir + 6 + k) % 8;              /* 이전 방향의 오른쪽부터 훑는다 */
      const nx = cx + N8[nd][0], ny = cy + N8[nd][1];
      if (at(nx, ny)) { cx = nx; cy = ny; dir = nd; found = true; break; }
    }
    if (!found) break;
  } while ((cx !== sx || cy !== sy) && ++guard < limit);
  if (pts.length < 8) return null;
  const simp = rdp(pts.map(([x, y]) => ({ x, y })), Math.max(1.2, Math.min(c.w, c.h) * 0.008));
  return simp.map((p) => [p.x - v.x0, p.y - v.y0]);
}

function rdp(pts, eps) {
  if (pts.length < 3) return pts.slice();
  const a = pts[0], b = pts[pts.length - 1];
  let idx = -1, dmax = 0;
  const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i];
    const d = Math.abs(dy * p.x - dx * p.y + b.x * a.y - b.y * a.x) / len;
    if (d > dmax) { dmax = d; idx = i; }
  }
  if (dmax > eps) return rdp(pts.slice(0, idx + 1), eps).slice(0, -1).concat(rdp(pts.slice(idx), eps));
  return [a, b];
}

/* 뷰가 어떤 부품 유형에 가까운지 추천 (사람이 고칠 수 있는 제안일 뿐) */
export function suggestKind(v) {
  const s = v.signals;
  if (s.asym < 0.12 && s.flat > 0.6 && s.aspect > 1.2) return { kind: "revolve", why: "축 대칭이고 원통 구간이 많습니다" };
  if (s.circleErr < 0.12 && s.aspect > 0.75 && s.aspect < 1.35) return { kind: "plate", why: "원형에 가까워 정면에서 본 뷰로 보입니다" };
  return { kind: "extrude", why: "윤곽을 두께만큼 밀어내는 부품으로 보입니다" };
}
