/* VRINGON 회전체 — DSL → 2D 반단면 프로파일
   실행기(3D)·도면 렌더러·검증기·질량 계산이 전부 이 한 곳의 좌표를 쓴다.
   같은 DSL 이 서로 다른 좌표로 그려지는 일이 없도록, 기하 해석은 여기서만 한다.
   (pipeline/shaft_dsl.py 의 build_profile 은 이 파일의 거울이며 골든 테스트로 대조한다.)

   출력 좌표계: x = 축 방향(왼쪽 끝 0), r = 반경(≥0). 순수 모듈. */

import { segmentSpans, segmentDiameters, totalLength, maxDiameter, boreDiameterAt, outerDiameterAt } from "./shaft-schema.js?v=14c93c89";
import { parseThreadSpec, threadMinorDiameter, centerHoleDims } from "./shaft-standards.js?v=14c93c89";

const DEG = Math.PI / 180;

/* 원호를 폴리라인으로: 중심(cx,cr), 반경 R, a0→a1 (도) */
function arcPoints(cx, cr, R, a0, a1, n, tag) {
  const out = [];
  for (let k = 0; k <= n; k++) {
    const a = (a0 + ((a1 - a0) * k) / n) * DEG;
    out.push({ x: cx + R * Math.cos(a), r: cr + R * Math.sin(a), tag: k === 0 || k === n ? tag : `${tag}_arc` });
  }
  return out;
}

/* 경계 at 에 걸린 전이들을 {chamfer, round, fillet, undercut} 로 모아 준다 */
function modsAt(dsl, at) {
  const out = {};
  for (const t of dsl.transitions || []) if (t.at === at) out[t.type] = t;
  return out;
}

/* ------------------------------------------------------------------ 외형선 */
export function buildTopLine(dsl, arcN = 10) {
  const segs = dsl.segments || [];
  const spans = segmentSpans(dsl);
  const n = segs.length;
  const pts = [];
  const notes = [];
  const push = (x, r, tag) => pts.push({ x, r, tag });

  for (let i = 0; i < n; i++) {
    const s = segs[i];
    const [x0, x1] = spans[i];
    const [ds, de] = segmentDiameters(s);
    const rs = ds / 2, re = de / 2;
    const rAt = (x) => rs + ((re - rs) * (x - x0)) / (x1 - x0 || 1);

    /* 왼쪽 경계 i: 이 세그먼트가 볼록 모서리(큰 쪽)인지 오목 모서리(작은 쪽)인지 */
    const mL = modsAt(dsl, i);
    let leftKind = "none";
    if (i === 0) leftKind = "convex";
    else {
      const rp = segmentDiameters(segs[i - 1])[1] / 2;
      leftKind = rs > rp + 1e-9 ? "convex" : rs < rp - 1e-9 ? "concave" : "flush";
    }
    const mR = modsAt(dsl, i + 1);
    let rightKind = "none";
    if (i === n - 1) rightKind = "convex";
    else {
      const rn = segmentDiameters(segs[i + 1])[0] / 2;
      rightKind = re > rn + 1e-9 ? "convex" : re < rn - 1e-9 ? "concave" : "flush";
    }

    let cursor = x0;
    /* ---- 시작점 */
    if (leftKind === "convex" && mL.chamfer?.size > 0) {
      const c = mL.chamfer, drop = c.size * Math.tan((c.angle || 45) * DEG);
      push(x0, rs - drop, "chamfer");
      push(x0 + c.size, rAt(x0 + c.size), "chamfer_end");
      cursor = x0 + c.size;
    } else if (leftKind === "convex" && mL.round?.radius > 0) {
      const R = mL.round.radius;
      pts.push(...arcPoints(x0 + R, rs - R, R, 180, 90, arcN, "round"));
      cursor = x0 + R;
    } else if (leftKind === "concave" && mL.undercut?.width > 0) {
      const u = mL.undercut;
      push(x0, rs - u.depth, "undercut");
      push(x0 + u.width, rs - u.depth, "undercut");
      push(x0 + u.width, rAt(x0 + u.width), "undercut_end");
      cursor = x0 + u.width;
      if (mL.fillet) notes.push(`경계 ${i}: 도피홈과 필렛이 함께 있어 필렛은 무시했습니다.`);
    } else if (leftKind === "concave" && mL.fillet?.radius > 0) {
      const R = mL.fillet.radius;
      /* 오목: 벽(x0) 위 (x0, rs+R) 에서 원통 (x0+R, rs) 로 — 중심 (x0+R, rs+R), 180°→270° */
      pts.push(...arcPoints(x0 + R, rs + R, R, 180, 270, arcN, "fillet"));
      cursor = x0 + R;
    } else {
      push(x0, rs, "corner");
    }

    /* ---- 홈 (offset 순) */
    const grooves = (dsl.grooves || []).filter((g) => g.segment === i).sort((a, b) => a.offset - b.offset);
    for (const g of grooves) {
      const gx0 = x0 + g.offset, gx1 = x0 + g.offset + g.width;
      if (gx0 < cursor - 1e-9) { notes.push(`grooves: 세그먼트 ${i} 의 홈(offset ${g.offset}) 이 모서리 처리와 겹쳐 건너뛰었습니다.`); continue; }
      push(gx0, rAt(gx0), "groove");
      push(gx0, rAt(gx0) - g.depth, "groove_floor");
      push(gx1, rAt(gx1) - g.depth, "groove_floor");
      push(gx1, rAt(gx1), "groove_end");
      cursor = gx1;
    }

    /* ---- 끝점 */
    if (rightKind === "convex" && mR.chamfer?.size > 0) {
      const c = mR.chamfer, drop = c.size * Math.tan((c.angle || 45) * DEG);
      if (x1 - c.size < cursor - 1e-9) notes.push(`경계 ${i + 1}: 모따기가 앞선 피처와 겹칩니다.`);
      push(x1 - c.size, rAt(x1 - c.size), "chamfer_start");
      push(x1, re - drop, "chamfer");
    } else if (rightKind === "convex" && mR.round?.radius > 0) {
      const R = mR.round.radius;
      pts.push(...arcPoints(x1 - R, re - R, R, 90, 0, arcN, "round"));
    } else if (rightKind === "concave" && mR.undercut?.width > 0) {
      const u = mR.undercut;
      push(x1 - u.width, rAt(x1 - u.width), "undercut_start");
      push(x1 - u.width, re - u.depth, "undercut");
      push(x1, re - u.depth, "undercut");
      if (mR.fillet) notes.push(`경계 ${i + 1}: 도피홈과 필렛이 함께 있어 필렛은 무시했습니다.`);
    } else if (rightKind === "concave" && mR.fillet?.radius > 0) {
      const R = mR.fillet.radius;
      /* 오목: 원통 (x1−R, re) 에서 벽 (x1, re+R) 로 — 중심 (x1−R, re+R), 270°→360° */
      pts.push(...arcPoints(x1 - R, re + R, R, 270, 360, arcN, "fillet"));
    } else {
      push(x1, re, "corner");
    }
  }
  /* 같은 점 반복 제거 */
  const clean = [];
  for (const p of pts) {
    const q = clean[clean.length - 1];
    if (q && Math.abs(q.x - p.x) < 1e-9 && Math.abs(q.r - p.r) < 1e-9) continue;
    clean.push(p);
  }
  return { points: clean, notes };
}

/* ------------------------------------------------------------------ 내형선 */
export function buildInnerLine(dsl, arcN = 10) {
  const L = totalLength(dsl);
  const pts = [];
  const push = (x, r, tag) => pts.push({ x, r, tag });
  const centers = Object.fromEntries((dsl.features || []).filter((f) => f.type === "center_hole").map((f) => [f.end, f]));

  const centerHoleLeft = () => {
    const f = centers.left; if (!f) { push(0, 0, "axis"); return; }
    const c = centerHoleDims(f.d || 2);
    const tip = (c.d / 2) / Math.tan(59 * DEG);
    push(0, c.D / 2, "center_hole");
    push(c.cone_depth, c.d / 2, "center_hole");
    push(c.cone_depth + c.pilot_depth, c.d / 2, "center_hole");
    push(c.cone_depth + c.pilot_depth + tip, 0, "center_hole_tip");
  };
  const centerHoleRight = () => {
    const f = centers.right; if (!f) { push(L, 0, "axis"); return; }
    const c = centerHoleDims(f.d || 2);
    const tip = (c.d / 2) / Math.tan(59 * DEG);
    push(L - c.cone_depth - c.pilot_depth - tip, 0, "center_hole_tip");
    push(L - c.cone_depth - c.pilot_depth, c.d / 2, "center_hole");
    push(L - c.cone_depth, c.d / 2, "center_hole");
    push(L, c.D / 2, "center_hole");
  };

  const b = dsl.bore;
  if (!b || !b.segments?.length) {
    centerHoleLeft();
    centerHoleRight();
    return { points: dedupe(pts) };
  }
  const bsegs = b.segments;
  const cl = b.chamfer_left || 0, cr = b.chamfer_right || 0;
  if (b.through) {
    let x = 0;
    bsegs.forEach((s, i) => {
      const r = s.diameter / 2;
      if (i === 0) { if (cl > 0) { push(0, r + cl, "bore_chamfer"); push(cl, r, "bore_chamfer_end"); } else push(0, r, "bore"); }
      else push(x, r, "bore_step");
      const xe = x + s.length;
      if (i === bsegs.length - 1) { if (cr > 0) { push(xe - cr, r, "bore_chamfer_start"); push(xe, r + cr, "bore_chamfer"); } else push(xe, r, "bore"); }
      else push(xe, r, "bore");
      x = xe;
    });
  } else if (b.from === "right") {
    centerHoleLeft();
    const depth = bsegs.reduce((a, s) => a + s.length, 0);
    /* 오른쪽에서 판 막힌 보어: 바닥(왼쪽 끝) → 입구(오른쪽) 순으로 진행 */
    let x = L - depth;
    push(x, 0, "bore_bottom");
    const ordered = [...bsegs].reverse();   /* segments[0] 이 입구쪽이므로 바닥부터 가려면 뒤집는다 */
    ordered.forEach((s, i) => {
      const r = s.diameter / 2;
      push(x, r, i === 0 ? "bore_bottom" : "bore_step");
      const xe = x + s.length;
      if (i === ordered.length - 1) { if (cr > 0) { push(xe - cr, r, "bore_chamfer_start"); push(xe, r + cr, "bore_chamfer"); } else push(xe, r, "bore"); }
      else push(xe, r, "bore");
      x = xe;
    });
  } else {
    let x = 0;
    bsegs.forEach((s, i) => {
      const r = s.diameter / 2;
      if (i === 0) { if (cl > 0) { push(0, r + cl, "bore_chamfer"); push(cl, r, "bore_chamfer_end"); } else push(0, r, "bore"); }
      else push(x, r, "bore_step");
      const xe = x + s.length;
      push(xe, r, "bore");
      x = xe;
    });
    push(x, 0, "bore_bottom");
    centerHoleRight();
  }
  return { points: dedupe(pts) };
}
function dedupe(pts) {
  const out = [];
  for (const p of pts) {
    const q = out[out.length - 1];
    if (q && Math.abs(q.x - p.x) < 1e-9 && Math.abs(q.r - p.r) < 1e-9) continue;
    out.push(p);
  }
  return out;
}

/* ------------------------------------------------------- 도면·검증용 이벤트 */
export function collectEvents(dsl) {
  const segs = dsl.segments || [];
  const spans = segmentSpans(dsl);
  const n = segs.length;
  const ev = { segments: [], shoulders: [], transitions: [], grooves: [], threads: [], features: [], bore: null, centerHoles: [] };
  segs.forEach((s, i) => {
    const [x0, x1] = spans[i];
    const [ds, de] = segmentDiameters(s);
    const e = { i, x0, x1, ds, de, type: s.type, tolerance: s.tolerance, roughness: s.roughness, label: s.label, spec: s.spec };
    ev.segments.push(e);
    if (s.type === "thread") {
      const ps = parseThreadSpec(s.spec) || { nominal: s.diameter, pitch: s.pitch };
      const pitch = s.pitch || ps.pitch || 1;
      ev.threads.push({ i, x0, x1, r_major: (ps.nominal || s.diameter) / 2, r_minor: threadMinorDiameter(ps.nominal || s.diameter, pitch) / 2, spec: s.spec, pitch });
    }
  });
  for (let k = 1; k < n; k++) {
    const rL = segmentDiameters(segs[k - 1])[1] / 2, rR = segmentDiameters(segs[k])[0] / 2;
    if (Math.abs(rL - rR) > 1e-9) ev.shoulders.push({ at: k, x: spans[k][0], rL, rR });
  }
  for (const t of dsl.transitions || []) {
    if (!(t.at >= 0 && t.at <= n)) continue;
    const x = t.at === 0 ? 0 : spans[t.at - 1][1];
    const rL = t.at === 0 ? null : segmentDiameters(segs[t.at - 1])[1] / 2;
    const rR = t.at === n ? null : segmentDiameters(segs[t.at])[0] / 2;
    const isEnd = t.at === 0 || t.at === n;
    let side, r;   /* side: 피처가 실제로 놓이는 세그먼트 인덱스 */
    if (t.type === "chamfer" || t.type === "round") {
      if (isEnd) { side = t.at === 0 ? 0 : n - 1; r = t.at === 0 ? rR : rL; }
      else { side = rR > rL ? t.at : t.at - 1; r = Math.max(rL, rR); }
    } else {
      if (isEnd) { side = t.at === 0 ? 0 : n - 1; r = t.at === 0 ? rR : rL; }
      else { side = rR < rL ? t.at : t.at - 1; r = Math.min(rL, rR); }
    }
    ev.transitions.push({ ...t, x, r, side, isEnd, dir: isEnd ? (t.at === 0 ? "left" : "right") : (side === t.at ? "right" : "left") });
  }
  for (const g of dsl.grooves || []) {
    if (!(g.segment >= 0 && g.segment < n)) continue;
    const [x0] = spans[g.segment];
    const r = segmentDiameters(segs[g.segment])[0] / 2;
    ev.grooves.push({ ...g, x0: x0 + g.offset, x1: x0 + g.offset + g.width, r_top: r, r_floor: r - g.depth });
  }
  for (const f of dsl.features || []) {
    if (f.type === "center_hole") {
      const c = centerHoleDims(f.d || 2);
      ev.centerHoles.push({ ...f, ...c, x: f.end === "left" ? 0 : totalLength(dsl) });
      continue;
    }
    const seg = f.segment >= 0 && f.segment < n ? segs[f.segment] : null;
    const x0 = seg ? spans[f.segment][0] : 0;
    const D = seg ? Math.min(...segmentDiameters(seg)) : (f.type === "cross_hole" ? outerDiameterAt(dsl, f.position) : 0);
    const item = { ...f, D };
    if (f.type === "keyway" || f.type === "flat" || f.type === "knurl") { item.x0 = x0 + (f.offset || 0); item.x1 = item.x0 + f.length; }
    if (f.type === "hex") { item.x0 = x0; item.x1 = spans[f.segment][1]; }
    if (f.type === "cross_hole") { item.x0 = f.position - f.diameter / 2; item.x1 = f.position + f.diameter / 2; }
    if (f.type === "hex_socket") { const Lt = totalLength(dsl); item.x0 = f.end === "left" ? 0 : Lt - f.depth; item.x1 = f.end === "left" ? f.depth : Lt; item.D = outerDiameterAt(dsl, f.end === "left" ? 1e-6 : Lt - 1e-6); }
    ev.features.push(item);
  }
  if (dsl.bore) {
    const L = totalLength(dsl);
    const fromRight = !dsl.bore.through && dsl.bore.from === "right";
    let x = fromRight ? L : 0; const list = [];
    for (const s of dsl.bore.segments) {
      const a = fromRight ? x - s.length : x, e = fromRight ? x : x + s.length;
      list.push({ x0: a, x1: e, r: s.diameter / 2, diameter: s.diameter, tolerance: s.tolerance, thread: s.thread });
      x = fromRight ? a : e;
    }
    ev.bore = { through: !!dsl.bore.through, from: dsl.bore.from, segments: list.sort((p, q) => p.x0 - q.x0) };
  }
  return ev;
}

/* ------------------------------------------------------- 단면적(비축대칭 피처)
   회전 대칭이 아닌 피처가 세그먼트 단면에서 깎아내는 면적. 부피 계산과 파이썬 거울
   테스트에서 쓴다. 극좌표 적분 A = ½∫ r_b(θ)² dθ 의 보각(제거분). */
export function crossSectionRemoved(R, feature, N = 720) {
  let full = Math.PI * R * R, kept = 0;
  const w2 = (feature.width || 0) / 2, d = feature.depth || 0, a = (feature.across_flats || 0) / 2;
  for (let k = 0; k < N; k++) {
    const th = (2 * Math.PI * (k + 0.5)) / N;   /* 0 = 피처 방향 */
    let rb = R;
    if (feature.type === "keyway") {
      const c = Math.cos(th), s = Math.abs(Math.sin(th));
      if (c > 0) {
        if ((R - d) * s <= w2 * c) rb = Math.min(R, (R - d) / c);           /* 바닥 */
        else if (R * s <= w2) rb = Math.min(R, w2 / s);                       /* 벽 */
      }
    } else if (feature.type === "flat") {
      const c = Math.cos(th);
      const cnt = feature.count === 2 ? 2 : 1;
      if (c > 0) rb = Math.min(R, (R - d) / c);
      if (cnt === 2 && c < 0) rb = Math.min(R, (R - d) / -c);
    } else if (feature.type === "hex") {
      const t = ((th + Math.PI / 6) % (Math.PI / 3)) - Math.PI / 6;
      rb = Math.min(R, a / Math.cos(t));
    }
    kept += 0.5 * rb * rb * (2 * Math.PI / N);
  }
  return Math.max(0, full - kept);
}

/* ------------------------------------------------------- 부피·질량 (해석식) */
function frustumVolume(pts) {
  let v = 0;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    v += (Math.PI / 3) * (b.x - a.x) * (a.r * a.r + a.r * b.r + b.r * b.r);
  }
  return v;
}
export function computeVolume(dsl, arcN = 12) {
  const top = buildTopLine(dsl, arcN).points;
  const inner = buildInnerLine(dsl, arcN).points;
  let v = frustumVolume(top) - frustumVolume(inner);
  const removed = [];
  for (const f of dsl.features || []) {
    if (["keyway", "flat", "hex"].includes(f.type) && f.segment >= 0 && f.segment < (dsl.segments || []).length) {
      const s = dsl.segments[f.segment];
      const R = Math.min(...segmentDiameters(s)) / 2;
      const len = f.type === "hex" ? s.length : f.length;
      const a = crossSectionRemoved(R, f);
      removed.push({ type: f.type, mm3: a * len });
      v -= a * len;
    } else if (f.type === "hex_socket") {
      const mm3 = (Math.sqrt(3) / 2) * f.across_flats * f.across_flats * f.depth;
      removed.push({ type: f.type, mm3 });
      v -= mm3;
    } else if (f.type === "cross_hole") {
      const D = outerDiameterAt(dsl, f.position), db = boreDiameterAt(dsl, f.position);
      const len = f.through === false ? Math.min(f.depth || 0, D) : Math.max(0, D - db);
      const mm3 = Math.PI * (f.diameter / 2) ** 2 * len;
      removed.push({ type: f.type, mm3 });
      v -= mm3;
    }
  }
  return { volume_mm3: Math.max(0, v), removed };
}
export function computeMass(dsl, density_g_cm3 = 7.85) {
  const { volume_mm3, removed } = computeVolume(dsl);
  return { volume_mm3, volume_cm3: volume_mm3 / 1000, mass_g: (volume_mm3 / 1000) * density_g_cm3, removed };
}

/* ------------------------------------------------------- 반단면 폴리곤 (revolve 입력) */
export function buildSectionPolygon(dsl, arcN = 10) {
  const top = buildTopLine(dsl, arcN);
  const inner = buildInnerLine(dsl, arcN);
  const poly = [...top.points.map((p) => ({ x: p.x, r: p.r })), ...inner.points.slice().reverse().map((p) => ({ x: p.x, r: p.r }))];
  return { polygon: dedupe(poly), top: top.points, inner: inner.points, notes: top.notes };
}

/* 위치 x 에서 외형선 반경 (실루엣 검증용). 수직 구간에서는 큰 값을 돌려준다(실루엣). */
export function topRadiusAt(topPts, x) {
  let best = 0;
  for (let i = 1; i < topPts.length; i++) {
    const a = topPts[i - 1], b = topPts[i];
    if (x < Math.min(a.x, b.x) - 1e-9 || x > Math.max(a.x, b.x) + 1e-9) continue;
    if (Math.abs(b.x - a.x) < 1e-9) best = Math.max(best, a.r, b.r);
    else best = Math.max(best, a.r + ((b.r - a.r) * (x - a.x)) / (b.x - a.x));
  }
  return best;
}
/* 실루엣 반경 함수 r(x) 를 N 등분 표본으로 (검증기·판독기 공용 표현) */
export function silhouetteSamples(dsl, N = 400) {
  const L = totalLength(dsl);
  const top = buildTopLine(dsl, 8).points;
  const out = new Float64Array(N);
  for (let k = 0; k < N; k++) out[k] = topRadiusAt(top, (L * (k + 0.5)) / N);
  return { L, samples: out };
}

export { totalLength, maxDiameter, segmentSpans, segmentDiameters, boreDiameterAt, outerDiameterAt };
