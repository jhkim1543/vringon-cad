/* Part 2 — 다시점 도면에서 뷰를 나누고, 각 뷰의 윤곽을 뽑는다 (결정론).
   한 장에 정면·평면·측면이 함께 있는 도면은 "뷰가 무엇인지" 를 기하만으로는 알 수 없다(캐스터 평면도가
   회전 프로파일 점수 0.97 을 받는다). 그래서 여기서는 **나누고 재기만** 하고, 무엇으로 만들지는 사람이 정한다.

   splitViews(img)   → 뷰 목록 (상자·잉크량·회전 프로파일 신호·점수)
   viewProfile(v)    → 그 뷰의 축 기준 상·하 반경 (회전체용)
   viewContours(v)   → 그 뷰의 바깥 윤곽과 구멍 (압출용, px 좌표)
   픽셀 접근은 ImageData 모양({width,height,data})만 받으므로 Node 에서도 돈다. */

import { inkMask, erode, components, estimateStroke, erosionIters } from "./shaft-extract.js";

export function splitViews(img, opts = {}) {
  const w = img.width, h = img.height;
  const { mask } = inkMask(img, opts.threshold ?? 105);
  /* 침식 횟수는 선 굵기에 맞춘다. 얇게 렌더된 도면을 한 겹 깎으면 외형선까지 끊어진다(플랜지 원이 83조각으로 부서졌다). */
  const iters = erosionIters(estimateStroke(mask, w, h));
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
    /* 부품 상자 = 외형선 성분의 상자. 외형선은 뷰 안의 다른 모든 것을 품으므로 **상자 넓이**가 가장 큰 성분이다
       (픽셀 수로 고르면 안쪽의 굵은 단차선 뭉치가 이길 수 있다). 뷰 상자(x0..)는 치수 문자·화살촉까지 품어서 크기 계산에 쓰지 않는다 */
    const outer = list.reduce((a, c) => (c.w * c.h > a.w * a.h ? c : a));
    const part = { x0: outer.x0, y0: outer.y0, x1: outer.x1, y1: outer.y1, W: outer.w, H: outer.h, comp: outer };
    const v = { id: views.length + 1, x0, y0, x1, y1, W, H, ink, part, comps: list, ids: new Set(list.map((c) => c.id)), label, imgW: w, imgH: h,
      cx() { return (this.part.x0 + this.part.x1) / 2; }, cy() { return (this.part.y0 + this.part.y1) / 2; } };
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

/* 압출용: 바깥 윤곽 + 구멍 (px 좌표, **부품 상자** 좌상단 기준).
   외형선은 굵기 1~2px 의 고리라서 고리 픽셀 자체를 따라가면 바깥 가장자리와 안쪽 가장자리를 한 번에 돌아
   스스로 겹치는 다각형이 나온다(캡 삼각분할·구멍 처리가 깨진다). 그래서
   · 바깥 윤곽 = 고리 + 고리가 둘러싼 안쪽을 채운 덩어리의 경계,
   · 구멍 = 고리가 둘러싼 **빈 공간(cavity)** 의 경계
   를 따라간다. 둘 다 단순 다각형이 나온다. 구멍으로 보는 것: 바깥 윤곽 안, 속이 빈 닫힌 고리, 사각형이 아닌 것
   (사각 고리는 단차·보스의 보이는 모서리인 경우가 대부분이다. 사각 창은 놓친다 — 안내에 적는다). */
export function viewContours(v, opts = {}) {
  const outerComp = v.part?.comp || v.comps.reduce((a, b) => (b.w * b.h > a.w * a.h ? b : a));
  const filled = regionOf(v, outerComp);
  const outer = filled ? traceRegion(filled, filled.solid, outerComp) : null;
  if (!outer || outer.length < 3) return { outer: null, holes: [], ignored: [] };
  const holes = [], ignored = [];
  const minFrac = opts.minHole ?? 0.025;
  for (const c of v.comps) {
    if (c === outerComp) continue;
    const inside = c.x0 > outerComp.x0 && c.x1 < outerComp.x1 && c.y0 > outerComp.y0 && c.y1 < outerComp.y1;
    const bigEnough = c.w >= outerComp.w * minFrac && c.h >= outerComp.h * minFrac;
    const notTooBig = c.w < outerComp.w * 0.9 && c.h < outerComp.h * 0.9;
    if (!(inside && bigEnough && notTooBig)) continue;
    const reg = regionOf(v, c);
    if (!reg || reg.cavityRatio < 0.45) continue;             /* 속이 안 비었다(문자·화살촉·채워진 표시) */
    const p = traceRegion(reg, reg.cavity, outerComp);
    if (!p || p.length < 6) continue;
    const area = Math.abs(polyArea(p)), box = c.w * c.h;
    if (area / box > 0.9) { ignored.push({ kind: "inner-edge", w: c.w, h: c.h }); continue; }   /* 사각 고리 = 안쪽 모서리 */
    holes.push(p);
  }
  return { outer, holes, ignored };
}
/* 성분 상자(+1 여백) 안의 국소 격자: ink(성분 픽셀) · outside(테두리에서 닿는 빈 곳) · cavity(둘러싸인 빈 곳) · solid = ink ∪ cavity */
function regionOf(v, c) {
  const w = v.imgW, label = v.label, id = c.id;
  const W = c.w + 2, H = c.h + 2, ox = c.x0 - 1, oy = c.y0 - 1;
  const ink = new Uint8Array(W * H), outside = new Uint8Array(W * H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const gx = ox + x, gy = oy + y; if (gx >= 0 && gy >= 0 && gx < w && gy < v.imgH && label[gy * w + gx] === id) ink[y * W + x] = 1; }
  const stack = [];
  for (let x = 0; x < W; x++) stack.push(x, (H - 1) * W + x);
  for (let y = 0; y < H; y++) stack.push(y * W, y * W + W - 1);
  while (stack.length) {
    const i = stack.pop();
    if (outside[i] || ink[i]) continue;
    outside[i] = 1;
    const x = i % W, y = (i - x) / W;
    if (x > 0) stack.push(i - 1); if (x < W - 1) stack.push(i + 1); if (y > 0) stack.push(i - W); if (y < H - 1) stack.push(i + W);
  }
  const cavity = new Uint8Array(W * H), solid = new Uint8Array(W * H);
  let nc = 0;
  for (let i = 0; i < W * H; i++) { if (!ink[i] && !outside[i]) { cavity[i] = 1; nc++; } solid[i] = ink[i] || cavity[i]; }
  return { W, H, ox, oy, ink, cavity, solid, cavityRatio: nc / (W * H) };
}
/* 국소 격자의 마스크 경계를 따라간다(무어 이웃) → RDP → 기준 상자(ref) 좌표 */
function traceRegion(reg, mask, ref) {
  const { W, H, ox, oy } = reg;
  const at = (x, y) => (x >= 0 && y >= 0 && x < W && y < H ? mask[y * W + x] : 0);
  let sx = -1, sy = -1;
  outer: for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (at(x, y)) { sx = x; sy = y; break outer; }
  if (sx < 0) return null;
  const N8 = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
  const pts = [];
  let cx = sx, cy = sy, dir = 6, guard = 0;
  const limit = (W + H) * 12 + 4000;
  do {
    pts.push([cx, cy]);
    let found = false;
    for (let k = 0; k < 8; k++) {
      const nd = (dir + 6 + k) % 8;
      const nx = cx + N8[nd][0], ny = cy + N8[nd][1];
      if (at(nx, ny)) { cx = nx; cy = ny; dir = nd; found = true; break; }
    }
    if (!found) break;
  } while ((cx !== sx || cy !== sy) && ++guard < limit);
  if (pts.length < 8) return null;
  const eps = Math.max(1.2, Math.min(W, H) * 0.008);
  const simp = rdp(pts.map(([x, y]) => ({ x, y })), eps);
  let out = simp.map((p) => [p.x + ox - ref.x0, p.y + oy - ref.y0]);
  /* 닫힌 다각형: 첫 점과 (거의) 같은 끝점, 서로 붙은 연속 점은 뺀다 — 퇴화 변 하나가 구멍 처리를 통째로 망친다 */
  const near = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]) < 2.5;
  out = out.filter((p, i) => i === 0 || !near(p, out[i - 1]));
  while (out.length > 3 && near(out[0], out[out.length - 1])) out.pop();
  return out;
}
function polyArea(p) { let a = 0; for (let i = 0; i < p.length; i++) { const [x1, y1] = p[i], [x2, y2] = p[(i + 1) % p.length]; a += x1 * y2 - x2 * y1; } return a / 2; }

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
