/* VRINGON 회전체 — 조립 인터페이스 판정 (DSL → 회전축·결합부·분해 순서)
   "도면의 어떤 표기가 무엇과 결합하고, 어떻게 분리되는가" 를 **결정론 규칙**으로 읽는다. AI 는 쓰지 않는다 —
   근거가 되는 것은 이미 판독된 DSL 의 규격 피처(멈춤링 홈·키홈·나사·공차·센터구멍·횡구멍·육각)뿐이고,
   각 판정은 evidence(도면 근거) 와 confidence 를 달고 나온다.

   왜 이렇게 하나: 회전축은 회전체의 정의상 X 축으로 **정확**하고, 축방향 조립·분해 방향도 정확하다.
   반대로 상대 부품의 절대 치수(너트 대변, 베어링 폭 등)는 도면에 없으므로 규격표 근사값이며 그렇게 표시한다.

   출력 mate: {kind, x, x1, axis, dir, part, params, motion, evidence, confidence, approx}
     kind   spin(회전) | snap(멈춤링) | key(키·허브) | screw(나사 체결) | bearing(베어링) | pin(핀) | wrench(공구) | fit(끼워맞춤)
     motion {type: 'spin'|'axial'|'radial'|'screw', dir: [x,y,z], distance, pitch}
   순수 모듈(브라우저·Node 공용). */

import { collectEvents, totalLength, maxDiameter, segmentSpans, segmentDiameters, outerDiameterAt, boreDiameterAt } from "./shaft-profile.js";
import { parseThreadSpec, keywayFor, snapRingGroove } from "./shaft-standards.js";

/* ISO 4032 육각 너트 근사: M → [대변 s, 높이 m] */
const NUT_TABLE = { 3: [5.5, 2.4], 4: [7, 3.2], 5: [8, 4.7], 6: [10, 5.2], 8: [13, 6.8], 10: [16, 8.4], 12: [18, 10.8], 14: [21, 12.8], 16: [24, 14.8], 18: [27, 15.8], 20: [30, 18], 22: [34, 19.4], 24: [36, 21.5], 27: [41, 23.8], 30: [46, 25.6] };
/* 깊은 홈 볼 베어링 6000/6200 계열 근사: 내경 d → [외경 D, 폭 B] */
const BEARING_TABLE = { 8: [22, 7], 10: [26, 8], 12: [28, 8], 15: [32, 9], 17: [35, 10], 20: [42, 12], 25: [52, 15], 30: [62, 16], 35: [72, 17], 40: [80, 18], 45: [85, 19], 50: [90, 20], 55: [100, 21], 60: [110, 22] };
const nearest = (v, keys) => keys.reduce((a, b) => (Math.abs(b - v) < Math.abs(a - v) ? b : a));
const BEARING_TOL = /^(h5|h6|j5|j6|js5|js6|k5|k6|m5|m6)$/i;

export function analyzeMates(dsl) {
  const ev = collectEvents(dsl);
  const L = totalLength(dsl);
  const Dmax = maxDiameter(dsl);
  const spans = segmentSpans(dsl);
  const mates = [];
  const notes = [];
  const push = (m) => mates.push({ axis: [1, 0, 0], ...m });

  /* ---------------------------------------------------------- ① 회전축
     회전체는 정의상 축 대칭이므로 자전축은 X 로 정확하다. 도면 근거의 강도만 달라진다. */
  const spinEvidence = [];
  let spinConf = 0.55;
  const centers = ev.centerHoles || [];
  if (centers.length >= 2) { spinEvidence.push(`양 끝 센터구멍(DIN 332) — 센터 사이에서 선삭·연삭되는 회전 부품`); spinConf = 0.95; }
  else if (centers.length === 1) { spinEvidence.push(`센터구멍 1개 — 선삭 기준(회전 가공)`); spinConf = 0.8; }
  const hollow = (s) => boreDiameterAt(dsl, (s.x0 + s.x1) / 2) > 0;   /* 그 구간에 보어가 지나가는가 */
  const sleeveLike = ["bushing", "sleeve", "spacer", "flange"].includes(dsl.part_class);
  const labeledBearing = (s) => /베어링|bearing/i.test(s.label || "");
  const bearingSeats = ev.segments.filter((s) => labeledBearing(s) || (s.tolerance && BEARING_TOL.test(s.tolerance) && !hollow(s) && !sleeveLike));
  /* 속이 빈 부품(부시·슬리브)의 외경 공차 = 하우징 압입 */
  const housingSeats = ev.segments.filter((s) => s.tolerance && BEARING_TOL.test(s.tolerance) && (hollow(s) || sleeveLike) && !labeledBearing(s));
  if (bearingSeats.length) { spinEvidence.push(`베어링 자리 ${bearingSeats.length}곳(${bearingSeats.map((s) => s.tolerance || s.label).join(", ")}) — 회전 지지`); spinConf = Math.max(spinConf, 0.9); }
  if ((dsl.features || []).some((f) => f.type === "keyway")) { spinEvidence.push("키홈 — 토크 전달(회전)"); spinConf = Math.max(spinConf, 0.85); }
  if (sleeveLike && dsl.bore) { spinEvidence.push("속이 빈 부시·슬리브 — 부품 자체보다 안에 든 상대 축이 이 축선에서 회전한다"); spinConf = Math.max(spinConf, 0.7); }
  if (!spinEvidence.length) spinEvidence.push("회전체 형상 자체(축 대칭) — 자전축은 축선과 일치");
  push({ kind: "spin", x: 0, x1: L, part: null, dir: [1, 0, 0], motion: { type: "spin", dir: [1, 0, 0] },
    params: { length: L, max_diameter: Dmax },
    evidence: spinEvidence, confidence: spinConf, approx: false });

  /* ---------------------------------------------------------- ② 베어링 자리 */
  for (const s of bearingSeats) {
    const d = Math.min(s.ds, s.de);
    const key = nearest(d, Object.keys(BEARING_TABLE).map(Number));
    const [D, B] = BEARING_TABLE[key];
    const fit = Math.abs(key - d) < 0.51;
    push({ kind: "bearing", x: s.x0, x1: s.x1, part: "bearing",
      params: { bore: d, outer: fit ? D : +(d * 2.1).toFixed(1), width: Math.min(fit ? B : Math.max(6, d * 0.55), s.x1 - s.x0), seat_length: s.x1 - s.x0 },
      motion: { type: "axial", dir: [s.x0 < L / 2 ? -1 : 1, 0, 0], distance: Math.max(s.x1 - s.x0, 12) + 6 },
      evidence: [`세그먼트 ⌀${d}${s.tolerance ? ` ${s.tolerance}` : ""}${s.label ? ` "${s.label}"` : ""} — 구름 베어링 내륜 끼워맞춤`, fit ? `d=${key} 계열(6000/6200) 근사: 외경 ⌀${D} 폭 ${B}` : "표준 계열에 없는 축경 — 외경·폭은 비례 근사"],
      confidence: s.tolerance && /베어링|bearing/i.test(s.label || "") ? 0.9 : s.tolerance ? 0.75 : 0.6, approx: true });
  }

  /* ---------------------------------------------------------- ②-b 하우징 압입 (부시·슬리브 외경) */
  for (const s of housingSeats) {
    const d = Math.max(s.ds, s.de);
    push({ kind: "fit", x: s.x0, x1: s.x1, part: "housing",
      params: { outer: d, tolerance: s.tolerance, seat_length: s.x1 - s.x0, housing_outer: +(d * 1.7).toFixed(1) },
      motion: { type: "axial", dir: [s.x0 < L / 2 ? -1 : 1, 0, 0], distance: (s.x1 - s.x0) + 14 },
      evidence: [`외경 ⌀${d} ${s.tolerance} — 하우징 구멍(H7)에 압입되는 끼워맞춤`, /^(m|n|k)/i.test(s.tolerance) ? "중간~억지 끼움: 압입 후 회전하지 않는다(상대 축이 안에서 돈다)" : "헐거운 끼움: 손으로 밀어 넣을 수 있다"],
      confidence: 0.8, approx: true });
  }

  /* ---------------------------------------------------------- ③ 멈춤링 홈 (DIN 471) */
  (ev.grooves || []).forEach((g, i) => {
    const isSnap = g.kind === "snap_ring" || /471/.test(g.standard || "");
    const shaftD = 2 * g.r_top, grooveD = 2 * g.r_floor;
    if (!isSnap && !(g.width <= 3 && shaftD - grooveD <= 4)) return;   /* 오링 홈 등은 결합부로 보지 않음 */
    const std = snapRingGroove(Math.round(shaftD));
    push({ kind: "snap", x: g.x0, x1: g.x1, part: "retaining_ring",
      params: { shaft_d: shaftD, groove_d: grooveD, width: g.width, ring_thickness: Math.min(g.width * 0.85, g.width - 0.05), ring_outer: +(shaftD + (shaftD < 20 ? 4 : shaftD < 50 ? 6 : 9)).toFixed(1) },
      motion: { type: "radial", dir: [0, 1, 0], distance: shaftD * 0.9, snap: true },
      evidence: [`홈 ⌀${grooveD}×${g.width}${g.standard ? ` (${g.standard})` : ""} — 축용 멈춤링(스냅링) 자리`, `축경 ⌀${shaftD} 표준 홈: ⌀${std.groove_d}×${std.width}${std.approx ? " (표 밖·근사)" : ""}`, "링을 벌려 반경 방향으로 끼우고, 축방향 위치를 고정한다"],
      confidence: isSnap ? 0.92 : 0.6, approx: true });
  });

  /* ---------------------------------------------------------- ④ 키홈 → 키 + 허브 */
  (ev.features || []).filter((f) => f.type === "keyway").forEach((f) => {
    const D = f.D, std = keywayFor(D);
    const seg = ev.segments[f.segment];
    push({ kind: "key", x: f.x0, x1: f.x1, part: "key",
      params: { width: f.width, depth: f.depth, length: f.length, shaft_d: D, key_height: std ? std.key_h : +(f.width * 0.9).toFixed(1), hub_bore: D, hub_outer: +(D * 1.9).toFixed(1), hub_width: Math.min(f.length + 4, seg.x1 - seg.x0) },
      motion: { type: "radial", dir: [0, 1, 0], distance: (std ? std.key_h : f.width) * 1.6, follow_axial: { dir: [f.x1 > L / 2 ? 1 : -1, 0, 0], distance: Math.max(f.length + 10, D) } },
      evidence: [`키홈 ${f.width}×${f.depth} L${f.length}${f.standard ? ` (${f.standard})` : ""} — 평행키로 토크 전달`, std ? `DIN 6885: 키 ${std.width}×${std.key_h}, 축 홈 깊이 t1=${std.depth}` : "표 밖 축경 — 키 높이는 폭에서 근사", "허브(기어·풀리·커플링)가 축방향으로 끼워지고 키가 회전을 구속한다"],
      confidence: 0.9, approx: true });
  });

  /* ---------------------------------------------------------- ⑤ 수나사 → 너트 체결 */
  (ev.threads || []).forEach((t) => {
    const ps = parseThreadSpec(t.spec) || { nominal: 2 * t.r_major, pitch: t.pitch };
    const M = Math.round(ps.nominal);
    const key = nearest(M, Object.keys(NUT_TABLE).map(Number));
    const [s, m] = NUT_TABLE[key];
    const free = t.x0 < 1e-6 || t.x1 > L - 1e-6;   /* 자유단이면 너트가 들어갈 수 있다 */
    push({ kind: "screw", x: t.x0, x1: t.x1, part: free ? "nut" : null,
      params: { spec: t.spec, nominal: ps.nominal, pitch: t.pitch || ps.pitch || 1, thread_length: t.x1 - t.x0, nut_across_flats: s, nut_height: m, hand: "right" },
      motion: { type: "screw", dir: [t.x0 < L / 2 ? -1 : 1, 0, 0], pitch: t.pitch || ps.pitch || 1, distance: Math.min(t.x1 - t.x0, m * 2 + 4) },
      evidence: [`나사 ${t.spec} — 상대 암나사(너트·탭 구멍)와 체결`, `ISO 4032 너트 근사: 대변 ${s}, 높이 ${m}`, `1회전당 ${(t.pitch || ps.pitch || 1)}mm 전진(오른나사)`],
      confidence: 0.95, approx: true });
  });

  /* ---------------------------------------------------------- ⑥ 횡구멍 → 핀 */
  (ev.features || []).filter((f) => f.type === "cross_hole").forEach((f) => {
    const D = outerDiameterAt(dsl, f.position);
    push({ kind: "pin", x: f.x0, x1: f.x1, part: "pin",
      params: { diameter: f.diameter, position: f.position, through: f.through !== false, depth: f.through === false ? f.depth : D, angle: f.angle || 0, pin_length: (f.through !== false ? D : (f.depth || D)) + (f.through !== false ? 8 : 4) },
      motion: { type: "radial", dir: [0, Math.sin(((f.angle || 0) * Math.PI) / 180), Math.cos(((f.angle || 0) * Math.PI) / 180)], distance: D * 1.2 },
      evidence: [`⌀${f.diameter} ${f.through !== false ? "관통" : `깊이 ${f.depth}`} 횡구멍 (x=${f.position}) — 분할핀·스프링핀·평행핀 자리`, f.through !== false ? "관통핀: 반경 방향으로 넣고 반대편으로 빠진다" : "막힌 구멍: 세트 스크루·위치 결정 핀"],
      confidence: 0.85, approx: true });
  });

  /* ---------------------------------------------------------- ⑦ 공구 인터페이스 (육각·평면·소켓) */
  (ev.features || []).filter((f) => ["hex", "flat", "hex_socket"].includes(f.type)).forEach((f) => {
    if (f.type === "hex_socket") {
      push({ kind: "wrench", x: f.x0, x1: f.x1, part: "hex_key",
        params: { across_flats: f.across_flats, depth: f.depth, end: f.end },
        motion: { type: "screw", dir: [f.end === "left" ? -1 : 1, 0, 0], pitch: (ev.threads[0]?.pitch) || 1, distance: f.depth + 8 },
        evidence: [`끝면 육각 소켓 S${f.across_flats} 깊이 ${f.depth} — 육각 렌치로 조인다`, "렌치를 축방향으로 넣고 돌리면 나사부가 상대 암나사에 체결된다"],
        confidence: 0.9, approx: true });
      return;
    }
    const isHex = f.type === "hex";
    push({ kind: "wrench", x: f.x0, x1: f.x1, part: isHex ? "wrench" : null,
      params: isHex ? { across_flats: f.across_flats } : { depth: f.depth, length: f.length, count: f.count || 1, shaft_d: f.D },
      motion: { type: "radial", dir: [0, 1, 0], distance: (isHex ? f.across_flats : f.D) * 1.4 },
      evidence: isHex ? [`육각 대변 ${f.across_flats} — 스패너로 잡아 돌리는 면`, "조립 시 회전을 막거나 조이는 데 쓴다"]
        : [`평면(D컷) 깊이 ${f.depth}${(f.count || 1) === 2 ? " ×2" : ""} — 세트 스크루가 눌러 회전을 구속하거나 스패너 자리`],
      confidence: isHex ? 0.9 : 0.7, approx: !isHex ? false : true });
  });

  /* ---------------------------------------------------------- ⑧ 보어 → 상대 축 끼워맞춤 */
  if (ev.bore) {
    const b = ev.bore.segments[0];
    const tol = ev.bore.segments.find((s) => s.tolerance)?.tolerance;
    push({ kind: "fit", x: ev.bore.segments[0].x0, x1: ev.bore.segments[ev.bore.segments.length - 1].x1, part: "mating_shaft",
      params: { bore: b.diameter, tolerance: tol || null, through: ev.bore.through, length: ev.bore.segments.reduce((a, s) => a + (s.x1 - s.x0), 0) },
      motion: { type: "axial", dir: [-1, 0, 0], distance: L + 10 },
      evidence: [`보어 ⌀${b.diameter}${tol ? ` ${tol}` : ""}${ev.bore.through ? " 관통" : " 막힘"} — 상대 축이 들어가는 끼워맞춤`, tol && /^H[6-8]$/i.test(tol) ? `${tol} 헐거운/중간 끼워맞춤 — 축방향으로 밀어 넣고 뺄 수 있다` : "공차 표기 없음 — 끼워맞춤 등급 미상"],
      confidence: tol ? 0.85 : 0.7, approx: true });
  }

  /* ---------------------------------------------------------- ⑨ 테이퍼 → 테이퍼 허브 */
  ev.segments.filter((s) => s.type === "taper").forEach((s) => {
    const half = (Math.atan2(Math.abs(s.ds - s.de) / 2, s.x1 - s.x0) * 180) / Math.PI;
    if (half > 20) return;   /* 접시머리 등 급한 원추는 결합부가 아니다 */
    push({ kind: "fit", x: s.x0, x1: s.x1, part: "taper_hub",
      params: { d_start: s.ds, d_end: s.de, length: s.x1 - s.x0, taper_ratio: +((Math.abs(s.ds - s.de) / (s.x1 - s.x0)).toFixed(3)), hub_outer: +(Math.max(s.ds, s.de) * 1.8).toFixed(1) },
      motion: { type: "axial", dir: [s.de < s.ds ? 1 : -1, 0, 0], distance: (s.x1 - s.x0) + 12 },
      evidence: [`테이퍼 ⌀${s.ds}→⌀${s.de} (기울기 1:${(1 / (Math.abs(s.ds - s.de) / (s.x1 - s.x0))).toFixed(1)}) — 테이퍼 허브 압입/억지 끼움`, "작은 쪽에서 끼워 축방향으로 조이면 마찰로 토크를 전달한다"],
      confidence: 0.75, approx: true });
  });

  /* ---------------------------------------------------------- 분해 순서
     축방향 부품은 끝에서 안쪽 순으로 빠진다: 링(반경) → 너트/공구(나사) → 허브·베어링(축방향, 가까운 끝 우선) → 키(반경) → 핀(반경). */
  const rank = { snap: 0, pin: 1, screw: 2, wrench: 2, bearing: 3, fit: 3, key: 4, spin: 9 };
  const order = mates
    .filter((m) => m.part)
    .map((m, i) => ({ i, m }))
    .sort((a, b) => (rank[a.m.kind] - rank[b.m.kind]) || (Math.min(a.m.x, L - a.m.x1) - Math.min(b.m.x, L - b.m.x1)))
    .map(({ i, m }, k) => ({ step: k + 1, mate: i, kind: m.kind, part: m.part, text: disassemblyText(m, L) }));

  const rotating = mates.some((m) => m.kind === "bearing") || spinConf >= 0.85;
  if (!mates.some((m) => m.part)) notes.push("도면에서 상대 부품과 결합하는 표기(멈춤링 홈·키홈·나사·보어·횡구멍)를 찾지 못했습니다 — 단품 회전만 보여 줍니다.");
  return { axis: [1, 0, 0], length: L, rotating, spin_confidence: spinConf, mates, order, notes };
}

function disassemblyText(m, L) {
  const side = m.x < L / 2 ? "왼쪽" : "오른쪽";
  switch (m.kind) {
    case "snap": return `멈춤링을 벌려 반경 방향으로 빼낸다 (x=${m.x.toFixed(1)})`;
    case "pin": return `핀을 반경 방향으로 뽑는다 (x=${m.params.position})`;
    case "screw": return `너트를 풀어 ${side} 끝으로 빼낸다 (${m.params.spec}, 1회전 ${m.params.pitch}mm)`;
    case "wrench": return m.part === "hex_key" ? `육각 렌치를 ${side} 끝면에서 뺀다` : `스패너를 놓는다 (대변 ${m.params.across_flats})`;
    case "bearing": return `베어링을 ${side} 끝 방향으로 뽑는다 (내경 ⌀${m.params.bore})`;
    case "key": return `허브를 축방향으로 빼고 키를 반경 방향으로 들어낸다`;
    case "fit": return m.part === "taper_hub" ? `테이퍼 허브를 큰 쪽으로 밀어 뺀다` : `상대 축을 보어에서 뺀다 (⌀${m.params.bore})`;
    default: return "";
  }
}

/* 요약 문장 (UI 헤더) */
export function matesSummary(a) {
  const n = a.mates.filter((m) => m.part).length;
  const kinds = [...new Set(a.mates.filter((m) => m.part).map((m) => m.kind))];
  const ko = { snap: "멈춤링", key: "키·허브", screw: "너트", bearing: "베어링", pin: "핀", wrench: "공구", fit: "끼워맞춤" };
  return n ? `상대 부품 ${n}개 · ${kinds.map((k) => ko[k] || k).join(" · ")}` : "상대 부품 없음 (단품 회전)";
}
