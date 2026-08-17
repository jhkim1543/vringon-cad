/* Part 2 — 다시점 도면에서 부품 하나를 만든다 (정투상 복원, 결정론).
   방법: 역할이 정해진 뷰마다 윤곽(+구멍)을 그 뷰의 시선 방향으로 밀어내고, 전부 교집합한다.
   각기둥·브래킷·판금처럼 면이 축에 나란한 부품은 이 교집합이 정확하고, 원통 하우징은 근사, 곡관·스윕은 안 된다.

   좌표 약속(3각법 기준, 1각법은 배치만 다르고 각 뷰의 그림은 같다):
     세계축  X = 오른쪽, Y = 위, Z = 관찰자 쪽(정면)
     정면도  이미지 x → +X, y(아래) → −Y, 밀어내는 축 Z
     윗면도  이미지 x → +X, y(아래) → +Z (아래쪽이 정면), 밀어내는 축 Y
     우측면도 이미지 x → −Z (왼쪽이 정면), y → −Y, 밀어내는 축 X
     좌측면도 이미지 x → +Z, 아랫면도 y(아래) → −Z, 뒷면도 x → −X
   각 뷰는 자기 상자를 세계 상자 [0,X]×[0,Y]×[0,Z] 에 맞춰 놓는다(도면 위 배치와 무관).
   같은 축을 두 뷰가 정하면(정면·윗면의 X 등) 차이를 "뷰 정합" 으로 보고한다.

   순수 모듈(브라우저·Node 공용). three.js 와 csg.js 만 쓴다. */

import * as THREE from "three";
import { CSG } from "./csg.js";

export const ROLES = [
  { id: "front", ko: "정면도", axis: "Z", face: "front" },
  { id: "top", ko: "윗면도", axis: "Y", face: "top" },
  { id: "right", ko: "우측면도", axis: "X", face: "right" },
  { id: "left", ko: "좌측면도", axis: "X", face: "left" },
  { id: "bottom", ko: "아랫면도", axis: "Y", face: "bottom" },
  { id: "back", ko: "뒷면도", axis: "Z", face: "back" },
  { id: "iso", ko: "등각 (참고)", axis: null },
  { id: "section", ko: "단면 (참고)", axis: null },
  { id: "detail", ko: "상세 (참고)", axis: null },
  { id: "skip", ko: "쓰지 않음", axis: null },
];
export const ROLE_KO = Object.fromEntries(ROLES.map((r) => [r.id, r.ko]));
const ORTHO = new Set(["front", "top", "right", "left", "bottom", "back"]);
export const isOrtho = (role) => ORTHO.has(role);

/* 뷰의 상자가 세계 어느 두 축을 정하는가: [가로축, 세로축] */
export function viewAxes(role) {
  return { front: ["X", "Y"], back: ["X", "Y"], top: ["X", "Z"], bottom: ["X", "Z"], right: ["Z", "Y"], left: ["Z", "Y"] }[role] || null;
}

/* ---------------------------------------------------------------- 역할 추천 (배치 기하로만; 최종은 사람이 정한다) */
export function suggestRoles(views, projection = "third") {
  if (!views.length) return {};
  /* 정투상 뷰끼리는 부품 상자의 범위가 **같다**(윗면도의 가로 = 정면도의 가로). 겹침이 아니라 범위 일치로 본다.
     기준 뷰(정면도 후보) = 가로 짝과 세로 짝을 둘 다 가진 뷰; 없으면 짝이 많은 뷰; 그래도 없으면 잉크가 많은 뷰 */
  const P = (v) => v.part || v;
  const same = (a, b, ax) => {
    const pa = P(a), pb = P(b);
    if (ax === "x") { const tol = Math.max(6, Math.min(pa.W, pb.W) * 0.04); return Math.abs(pa.x0 - pb.x0) <= tol && Math.abs(pa.x1 - pb.x1) <= tol; }
    const tol = Math.max(6, Math.min(pa.H, pb.H) * 0.04); return Math.abs(pa.y0 - pb.y0) <= tol && Math.abs(pa.y1 - pb.y1) <= tol;
  };
  const scored = views.map((v) => {
    const hx = views.some((u) => u !== v && same(v, u, "x")), hy = views.some((u) => u !== v && same(v, u, "y"));
    return { v, n: (hx ? 1 : 0) + (hy ? 1 : 0) };
  });
  scored.sort((a, b) => b.n - a.n || b.v.ink - a.v.ink);
  const main = scored[0].v;
  const out = { [main.id]: "front" };
  for (const v of views) {
    if (v === main) continue;
    const alignedX = same(v, main, "x");
    const alignedY = same(v, main, "y");
    if (alignedX && !alignedY) {
      const above = v.cy() < main.cy();
      out[v.id] = projection === "third" ? (above ? "top" : "bottom") : (above ? "bottom" : "top");
    } else if (alignedY && !alignedX) {
      const rightOf = v.cx() > main.cx();
      out[v.id] = projection === "third" ? (rightOf ? "right" : "left") : (rightOf ? "left" : "right");
    } else out[v.id] = "iso";   /* 정렬되지 않은 뷰 = 등각·상세·표제란 같은 참고 그림 */
  }
  return out;
}

/* ---------------------------------------------------------------- 뷰 → 세계 좌표 압출 */
/* 이미지 픽셀(u,v; 뷰 상자 좌상단 기준) → 세계 mm 2D 좌표 (압출 평면 위) 와 압출 축 회전 */
function frameFor(role, ext, s) {
  /* 반환: to2d(u,v) → [a,b] (ExtrudeGeometry 의 로컬 xy), rot: 로컬 z 를 세계 압출축으로 보내는 회전, depth 축 */
  const { X, Y, Z } = ext;
  switch (role) {
    case "front":  return { to2d: (u, v) => [u * s, Y - v * s], rot: null, depth: "Z" };
    case "back":   return { to2d: (u, v) => [X - u * s, Y - v * s], rot: null, depth: "Z" };
    /* rotateX(−90°): 로컬 (x,y,z) → 세계 (x, z, −y)  ⇒ 로컬 y = −Z, 로컬 z = Y */
    case "top":    return { to2d: (u, v) => [u * s, -(v * s)], rot: ["X", -Math.PI / 2], depth: "Y" };
    case "bottom": return { to2d: (u, v) => [u * s, -(Z - v * s)], rot: ["X", -Math.PI / 2], depth: "Y" };
    /* rotateY(+90°): 로컬 (x,y,z) → 세계 (z, y, −x)  ⇒ 로컬 x = −Z, 로컬 y = Y, 로컬 z = X */
    case "right":  return { to2d: (u, v) => [-(Z - u * s), Y - v * s], rot: ["Y", Math.PI / 2], depth: "X" };
    case "left":   return { to2d: (u, v) => [-(u * s), Y - v * s], rot: ["Y", Math.PI / 2], depth: "X" };
    default: return null;
  }
}

/* three 의 ExtrudeGeometry 는 바깥이 이미 시계방향이면 구멍 방향을 손보지 않는다 → 방향이 어긋난 구멍은 캡이 깨진다.
   바깥은 반시계, 구멍은 시계로 맞춰서 넘긴다. */
export function orient(pts, ccw) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; a += p.x * q.y - q.x * p.y; }
  return (a > 0) === ccw ? pts : pts.slice().reverse();
}
/* 뷰 하나를 세계 mm 로 밀어낸 BufferGeometry. pad: 다른 뷰가 그 축을 자를 때 겹면을 피하려고 조금 더 길게 */
export function extrudeView(view, role, mmPerPx, ext, { pad = 0 } = {}) {
  const fr = frameFor(role, ext, mmPerPx);
  if (!fr || !view.contours?.outer) return null;
  const shape = new THREE.Shape(orient(view.contours.outer.map(([u, v]) => new THREE.Vector2(...fr.to2d(u, v))), true));
  for (const h of view.contours.holes || []) if (h.length >= 3) shape.holes.push(new THREE.Path(orient(h.map(([u, v]) => new THREE.Vector2(...fr.to2d(u, v))), false)));
  const depth = ext[fr.depth];
  const geo = new THREE.ExtrudeGeometry(shape, { depth: depth + 2 * pad, bevelEnabled: false, curveSegments: 4 });
  geo.translate(0, 0, -pad);
  if (fr.rot) { if (fr.rot[0] === "X") geo.rotateX(fr.rot[1]); else geo.rotateY(fr.rot[1]); }
  geo.computeVertexNormals();
  return geo;
}

/* ---------------------------------------------------------------- 크기(외형 치수) 정하기 */
/* 각 축을 정하는 뷰들의 값(mm) 을 모으고, 첫 값을 쓰되 차이를 보고한다 */
export function resolveExtents(assigned, mmPerPx) {
  const votes = { X: [], Y: [], Z: [] };
  for (const { view, role } of assigned) {
    const ax = viewAxes(role); if (!ax) continue;
    const P = view.part || view;
    votes[ax[0]].push({ role, mm: P.W * mmPerPx });
    votes[ax[1]].push({ role, mm: P.H * mmPerPx });
  }
  const ext = {}, checks = [];
  for (const k of ["X", "Y", "Z"]) {
    const vs = votes[k];
    if (!vs.length) { ext[k] = null; continue; }
    /* 정면도가 있으면 정면도 값을 우선 */
    const pri = vs.find((v) => v.role === "front") || vs[0];
    ext[k] = pri.mm;
    const others = vs.filter((v) => v !== pri);
    for (const o of others) {
      const diff = Math.abs(o.mm - pri.mm) / Math.max(pri.mm, 1e-6);
      checks.push({ axis: k, a: pri, b: o, diffPct: +(diff * 100).toFixed(1), ok: diff <= 0.03 });
    }
  }
  return { ext, checks, votes };
}

/* ---------------------------------------------------------------- 교집합 */
export function buildOrthoPart(assigned, mmPerPx, opts = {}) {
  const ortho = assigned.filter((a) => isOrtho(a.role) && a.view.contours?.outer);
  const notes = [];
  if (ortho.length < 2 && !opts.thickness) return { ok: false, reason: "정투상 뷰가 둘 이상 필요합니다(정면도 + 윗면도 또는 측면도). 뷰가 하나면 두께를 넣어 판으로 만드세요." };
  const { ext, checks } = resolveExtents(ortho, mmPerPx);
  /* 한 축이 비면(두 뷰가 같은 평면일 때) 두께로 채운다 */
  for (const k of ["X", "Y", "Z"]) if (!ext[k]) { if (!opts.thickness) return { ok: false, reason: `${k} 축 크기를 정하는 뷰가 없습니다. 다른 방향의 뷰를 지정하거나 두께를 넣어 주세요.` }; ext[k] = opts.thickness; notes.push(`${k} 축은 두께 입력값 ${opts.thickness}mm 로 정했습니다`); }
  /* 어느 축이 다른 뷰에 의해 잘리는가 → 그 축으로 미는 뷰는 조금 길게 밀어 겹면을 피한다 */
  const definers = { X: 0, Y: 0, Z: 0 };
  for (const a of ortho) { const ax = viewAxes(a.role); definers[ax[0]]++; definers[ax[1]]++; }
  let csg = null;
  const geos = [];
  /* 두 뷰가 같은 평면을 정하면(정면도와 측면도가 둘 다 밑판 윗면 y=15 를 그린다) 교집합에서 겹면이 생겨 면이 빠진다.
     두 번째부터는 세계 중심 기준으로 0.03% 씩 키워 겹면을 피한다. 교집합은 가장 작은 것(첫 뷰)이 결정하므로 크기 오차는 없다. */
  const center = new THREE.Vector3(ext.X / 2, ext.Y / 2, ext.Z / 2);
  ortho.forEach((a, k) => {
    const depthAxis = ROLES.find((r) => r.id === a.role).axis;
    const pad = definers[depthAxis] > 0 ? Math.max(0.2, ext[depthAxis] * 0.01) : 0;
    const g = extrudeView(a.view, a.role, mmPerPx, ext, { pad });
    if (!g) return;
    if (k > 0) { const f = 1 + k * 3e-4; g.translate(-center.x, -center.y, -center.z); g.scale(f, f, f); g.translate(center.x, center.y, center.z); }
    geos.push(g);
    const c = CSG.fromGeometry(g);
    csg = csg ? csg.intersect(c) : c;
  });
  if (!csg) return { ok: false, reason: "밀어낼 윤곽이 없습니다" };
  const geo = csg.toGeometry();
  geo.computeVertexNormals();
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  const size = { X: bb.max.x - bb.min.x, Y: bb.max.y - bb.min.y, Z: bb.max.z - bb.min.z };
  const volume = geometryVolume(geo);
  for (const g of geos) g.dispose();
  return { ok: true, geometry: geo, ext, size, volume_cm3: volume / 1000, checks, notes, views: ortho.map((a) => a.role) };
}

export function geometryVolume(geo) {
  const pos = geo.attributes.position, idx = geo.index;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  let v = 0;
  const tri = (i0, i1, i2) => { a.fromBufferAttribute(pos, i0); b.fromBufferAttribute(pos, i1); c.fromBufferAttribute(pos, i2); v += a.dot(b.clone().cross(c)) / 6; };
  if (idx) for (let i = 0; i < idx.count; i += 3) tri(idx.getX(i), idx.getX(i + 1), idx.getX(i + 2));
  else for (let i = 0; i < pos.count; i += 3) tri(i, i + 1, i + 2);
  return Math.abs(v);
}

/* ---------------------------------------------------------------- 검증: 만든 3D 를 각 뷰로 다시 투영해 도면 윤곽과 겹침을 잰다 */
/* 삼각형을 뷰 평면에 정사영해 격자에 칠한다(순수 JS 래스터라이저). 도면 쪽은 윤곽 채움에서 구멍을 뺀 것 */
export function projectionIoU(geo, view, role, mmPerPx, ext, N = 220) {
  const fr = frameFor(role, ext, mmPerPx);
  if (!fr) return null;
  const ax = viewAxes(role);                     /* [가로축, 세로축] */
  const Pb = view.part || view;
  const W = Pb.W * mmPerPx, H = Pb.H * mmPerPx;
  const sx = N / Math.max(W, 1e-6), sy = N / Math.max(H, 1e-6);
  const gridM = new Uint8Array(N * N), gridD = new Uint8Array(N * N);
  /* 세계 점 → 뷰 이미지 픽셀(u,v) 의 역함수를 축별로 */
  const toUV = (p) => {
    const g = (k) => (k === "X" ? p.x : k === "Y" ? p.y : p.z);
    let u, v;
    switch (role) {
      case "front": u = g("X"); v = ext.Y - g("Y"); break;
      case "back": u = ext.X - g("X"); v = ext.Y - g("Y"); break;
      case "top": u = g("X"); v = g("Z"); break;
      case "bottom": u = g("X"); v = ext.Z - g("Z"); break;
      case "right": u = ext.Z - g("Z"); v = ext.Y - g("Y"); break;
      case "left": u = g("Z"); v = ext.Y - g("Y"); break;
    }
    return [u * sx, v * sy];
  };
  const pos = geo.attributes.position, idx = geo.index;
  const P = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  const tri = (i0, i1, i2) => {
    P[0].fromBufferAttribute(pos, i0); P[1].fromBufferAttribute(pos, i1); P[2].fromBufferAttribute(pos, i2);
    fillTri(gridM, N, toUV(P[0]), toUV(P[1]), toUV(P[2]));
  };
  if (idx) for (let i = 0; i < idx.count; i += 3) tri(idx.getX(i), idx.getX(i + 1), idx.getX(i + 2));
  else for (let i = 0; i < pos.count; i += 3) tri(i, i + 1, i + 2);
  /* 도면 쪽: 바깥 윤곽 채우고 구멍 빼기 */
  const px2g = (pt) => [(pt[0] * mmPerPx) * sx, (pt[1] * mmPerPx) * sy];
  fillPoly(gridD, N, view.contours.outer.map(px2g), 1);
  for (const h of view.contours.holes || []) fillPoly(gridD, N, h.map(px2g), 0);
  let inter = 0, uni = 0;
  for (let i = 0; i < N * N; i++) { const a = gridM[i], b = gridD[i]; if (a && b) inter++; if (a || b) uni++; }
  return { iou: uni ? inter / uni : 0, role };
}
function fillTri(grid, N, a, b, c) {
  const minY = Math.max(0, Math.floor(Math.min(a[1], b[1], c[1]))), maxY = Math.min(N - 1, Math.ceil(Math.max(a[1], b[1], c[1])));
  for (let y = minY; y <= maxY; y++) {
    const yc = y + 0.5, xs = [];
    const edge = (p, q) => { if ((p[1] <= yc && q[1] > yc) || (q[1] <= yc && p[1] > yc)) xs.push(p[0] + ((yc - p[1]) * (q[0] - p[0])) / (q[1] - p[1])); };
    edge(a, b); edge(b, c); edge(c, a);
    if (xs.length < 2) continue;
    xs.sort((p, q) => p - q);
    const x0 = Math.max(0, Math.floor(xs[0])), x1 = Math.min(N - 1, Math.ceil(xs[xs.length - 1]));
    for (let x = x0; x <= x1; x++) grid[y * N + x] = 1;
  }
}
function fillPoly(grid, N, pts, val) {
  const minY = Math.max(0, Math.floor(Math.min(...pts.map((p) => p[1])))), maxY = Math.min(N - 1, Math.ceil(Math.max(...pts.map((p) => p[1]))));
  for (let y = minY; y <= maxY; y++) {
    const yc = y + 0.5, xs = [];
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i], q = pts[(i + 1) % pts.length];
      if ((p[1] <= yc && q[1] > yc) || (q[1] <= yc && p[1] > yc)) xs.push(p[0] + ((yc - p[1]) * (q[0] - p[0])) / (q[1] - p[1]));
    }
    xs.sort((p, q) => p - q);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      const x0 = Math.max(0, Math.floor(xs[k])), x1 = Math.min(N - 1, Math.ceil(xs[k + 1]));
      for (let x = x0; x <= x1; x++) grid[y * N + x] = val;
    }
  }
}

/* ---------------------------------------------------------------- 방법 추천 */
export function suggestMethod(assigned) {
  const ortho = assigned.filter((a) => isOrtho(a.role));
  const hasSection = assigned.some((a) => a.role === "section");
  if (ortho.length >= 2) return { method: "ortho", why: `정투상 뷰 ${ortho.length}개를 밀어내 교집합합니다` };
  if (ortho.length === 1) {
    const v = ortho[0].view;
    if (v.revolveScore >= 0.85 && v.signals.aspect > 1.2) return { method: "revolve", why: "뷰가 하나이고 축 대칭이라 회전체로 봅니다" };
    return { method: "plate", why: "뷰가 하나라 두께를 넣어 판으로 만듭니다" };
  }
  if (hasSection) return { method: "unsupported", why: "단면도로만 정의되는 부품(곡관·스윕)은 이 버전이 만들지 못합니다" };
  return { method: "none", why: "정투상 뷰(정면·윗면·측면)를 하나 이상 지정해 주세요" };
}
