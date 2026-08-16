/* VRINGON 회전체 — 파라미터 샘플러 (합성 데이터 엔진 M2 의 앞단)
   표준 축경 계열과 규격표(DIN 471/6885/332/76·ISO 261)를 따르는 회전체 DSL 을 시드 기반으로 만든다.
   같은 시드는 같은 부품. 아키타입별 확률로 피처를 넣되, 항상 validateShaft 를 통과하는 것만 내보낸다.
   순수 모듈. */

import { PREFERRED_DIAMETERS, ISO_COARSE_PITCH, ISO_FINE_PITCHES, threadSpecText, snapRingGroove, keywayFor, centerHoleFor, threadUndercutFor, grindingUndercutFor, SHAFT_TOLERANCE_CLASSES, ROUGHNESS_GRADES } from "./shaft-standards.js?v=14c93c89";
import { validateShaft, DSL_VERSION } from "./shaft-schema.js?v=14c93c89";

export function mulberry32(seed) {
  let a = (seed >>> 0) || 1;
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const pick = (rnd, arr) => arr[Math.floor(rnd() * arr.length)];
const chance = (rnd, p) => rnd() < p;
const roundTo = (v, step) => Math.round(v / step) * step;
const clampIdx = (i, arr) => Math.max(0, Math.min(arr.length - 1, i));

export const ARCHETYPES = [
  { id: "stepped_shaft", ko: "단붙이 축", w: 22 },
  { id: "keyed_shaft", ko: "키홈 축", w: 16 },
  { id: "threaded_shaft", ko: "나사 축", w: 14 },
  { id: "bushing", ko: "부시", w: 12 },
  { id: "flanged_bushing", ko: "플랜지 부시", w: 8 },
  { id: "pin", ko: "핀", w: 8 },
  { id: "roller", ko: "롤러", w: 6 },
  { id: "spacer", ko: "스페이서", w: 5 },
  { id: "taper_shaft", ko: "테이퍼 축", w: 5 },
  { id: "hex_shaft", ko: "육각 단붙이 축", w: 4 },
  { id: "hex_bolt", ko: "육각 볼트", w: 6 },
  { id: "socket_cap_screw", ko: "육각구멍붙이 볼트", w: 5 },
  { id: "set_screw", ko: "세트 스크루", w: 3 },
  { id: "countersunk_screw", ko: "접시머리 나사", w: 3 },
  { id: "stud", ko: "스터드 볼트", w: 3 },
];
/* ISO 4014/4762/4026 근사 머리 치수: M → [육각 대변 s, 육각머리 높이 k, 캡 머리 지름 dk, 캡 머리 높이 k2, 소켓 대변 s2] */
const BOLT_TABLE = { 4: [7, 2.8, 7, 4, 3], 5: [8, 3.5, 8.5, 5, 4], 6: [10, 4, 10, 6, 5], 8: [13, 5.3, 13, 8, 6], 10: [16, 6.4, 16, 10, 8], 12: [18, 7.5, 18, 12, 10], 16: [24, 10, 24, 16, 14], 20: [30, 12.5, 30, 20, 17] };
const MATERIALS = ["S45C", "S45C", "SCM440", "SUS304", "SUS303", "A6061", "C3604", "SUJ2", "SM45C"];

function pickArchetype(rnd, force) {
  if (force) return ARCHETYPES.find((a) => a.id === force) || ARCHETYPES[0];
  const total = ARCHETYPES.reduce((a, b) => a + b.w, 0);
  let r = rnd() * total;
  for (const a of ARCHETYPES) { r -= a.w; if (r <= 0) return a; }
  return ARCHETYPES[0];
}
function diaNear(d) { return PREFERRED_DIAMETERS.reduce((a, b) => (Math.abs(b - d) < Math.abs(a - d) ? b : a)); }
function stepDia(rnd, base, dir, steps = 1) {
  const i = PREFERRED_DIAMETERS.indexOf(diaNear(base));
  return PREFERRED_DIAMETERS[clampIdx(i + dir * steps, PREFERRED_DIAMETERS)];
}
function lenFor(rnd, d, kind) {
  /* 세그먼트 길이: 지름의 0.5~3배, 5mm 단위(작으면 1mm) */
  const f = kind === "short" ? 0.3 + rnd() * 0.5 : kind === "long" ? 1.5 + rnd() * 2.5 : 0.6 + rnd() * 1.6;
  const l = d * f;
  return l < 12 ? Math.max(3, roundTo(l, 1)) : roundTo(l, 5);
}
function chamferFor(d) { return d <= 10 ? 0.5 : d <= 25 ? 1 : d <= 50 ? 1.5 : 2; }
function threadFor(rnd, d) {
  const nominal = [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 27, 30, 36].reduce((a, b) => (Math.abs(b - d) < Math.abs(a - d) ? b : a));
  const fine = ISO_FINE_PITCHES[nominal] && chance(rnd, 0.45);
  const pitch = fine ? pick(rnd, ISO_FINE_PITCHES[nominal]) : ISO_COARSE_PITCH[nominal];
  return { nominal, pitch, spec: threadSpecText(nominal, pitch) };
}

/* 세그먼트 목록에서 경계 k 의 단차 방향 */
function stepAt(segs, k) {
  const dl = segs[k - 1].type === "taper" ? segs[k - 1].d_end : segs[k - 1].diameter;
  const dr = segs[k].type === "taper" ? segs[k].d_start : segs[k].diameter;
  return dr - dl;   /* >0 커짐, <0 작아짐 */
}

export function sampleShaft(seed = 1, opts = {}) {
  const rnd = mulberry32(seed);
  const arch = pickArchetype(rnd, opts.archetype);
  const material = opts.material || pick(rnd, MATERIALS);
  const dsl = { dsl: DSL_VERSION, id: `${arch.id.replace(/_/g, "-")}-${seed}`, name: arch.id.replace(/_/g, " "), name_ko: arch.ko, part_class: "shaft", units: "mm", material,
    drawing: { number: `VR-RB-${String(seed % 10000).padStart(4, "0")}`, scale: "1:1", projection: "third" },
    segments: [], transitions: [], grooves: [], bore: null, features: [], meta: { source: "synthetic", generator: "shaft-sampler/1.0", seed } };
  const S = dsl.segments, T = dsl.transitions, F = dsl.features, G = dsl.grooves;

  const base = pick(rnd, PREFERRED_DIAMETERS.filter((d) => d >= 10 && d <= 60));

  if (arch.id === "stepped_shaft" || arch.id === "keyed_shaft" || arch.id === "threaded_shaft") {
    dsl.part_class = "shaft";
    /* 가운데가 굵고 양쪽으로 작아지는 전형적 축: 2~5 세그먼트 */
    const n = 2 + Math.floor(rnd() * 4);
    const mid = Math.floor(n / 2);
    const dias = [];
    for (let i = 0; i < n; i++) dias.push(stepDia(rnd, base, -1, Math.abs(i - mid) + (i > mid ? 1 : 0)));
    /* 같은 지름이 연달아 나오면 한 단계 더 내린다 */
    for (let i = 1; i < n; i++) if (dias[i] === dias[i - 1]) dias[i] = stepDia(rnd, dias[i], i < mid ? 1 : -1, 1);
    for (let i = 0; i < n; i++) {
      const d = dias[i];
      const s = { type: "cyl", length: lenFor(rnd, d, i === mid ? "long" : "mid"), diameter: d };
      if (chance(rnd, 0.5)) s.tolerance = pick(rnd, SHAFT_TOLERANCE_CLASSES.slice(0, 6));
      if (chance(rnd, 0.3)) s.roughness = pick(rnd, ROUGHNESS_GRADES);
      if (i !== mid && chance(rnd, 0.5)) s.label = pick(rnd, ["베어링 자리", "기어 자리", "커플링 자리", "풀리 자리"]);
      S.push(s);
    }
    /* 나사 축: 한쪽 끝을 나사로 */
    if (arch.id === "threaded_shaft" || chance(rnd, 0.25)) {
      const end = chance(rnd, 0.5) ? "left" : "right";
      const i = end === "left" ? 0 : S.length - 1;
      const th = threadFor(rnd, S[i].diameter);
      const relief = threadUndercutFor(th.nominal, th.pitch);
      S[i] = { type: "thread", length: Math.max(roundTo(th.nominal * (0.8 + rnd()), 1), 3 * th.pitch + 2), diameter: th.nominal, spec: th.spec, pitch: th.pitch };
      /* 인접 세그먼트가 나사보다 작으면 키운다 */
      const j = end === "left" ? 1 : S.length - 2;
      if (S[j] && S[j].diameter <= th.nominal) S[j].diameter = stepDia(rnd, th.nominal, 1, 1);
      /* 도피홈 (몸통 쪽 경계) */
      const at = end === "left" ? 1 : S.length - 1;
      if (chance(rnd, 0.7)) T.push({ at, type: "undercut", width: relief.width, depth: relief.depth, standard: `DIN 76-A` });
      /* 나사 끝 모따기 */
      T.push({ at: end === "left" ? 0 : S.length, type: "chamfer", size: Math.max(0.5, roundTo(th.pitch, 0.5)) });
    }
    /* 끝 모따기 */
    for (const at of [0, S.length]) {
      if (T.some((t) => t.at === at)) continue;
      T.push({ at, type: "chamfer", size: chamferFor(at === 0 ? (S[0].diameter || 20) : (S[S.length - 1].diameter || 20)) });
    }
    /* 단차 처리: 필렛(오목) / 모따기(볼록) / 연삭 도피홈 */
    for (let k = 1; k < S.length; k++) {
      const st = stepAt(S, k);
      if (Math.abs(st) < 1e-9) continue;
      const small = Math.min(S[k - 1].diameter ?? S[k - 1].d_end, S[k].diameter ?? S[k].d_start);
      const step = Math.abs(st) / 2;
      const r = chance(rnd, 0.6);
      if (r && step > 1.2 && !T.some((t) => t.at === k)) T.push({ at: k, type: "fillet", radius: Math.min(roundTo(step * 0.4, 0.5) || 0.5, 2.5) });
      else if (step > 1.2 && chance(rnd, 0.35) && !T.some((t) => t.at === k)) { const g = grindingUndercutFor(small); T.push({ at: k, type: "undercut", width: g.width, depth: g.depth, standard: "DIN 509-E" }); }
      if (chance(rnd, 0.35) && step > 1.6) T.push({ at: k, type: "chamfer", size: Math.min(chamferFor(Math.max(S[k - 1].diameter ?? 0, S[k].diameter ?? 0)), roundTo(step * 0.4, 0.5) || 0.5) });
    }
    /* 키홈 */
    if (arch.id === "keyed_shaft" || chance(rnd, 0.35)) {
      const cands = S.map((s, i) => ({ s, i })).filter(({ s }) => s.type === "cyl" && s.diameter >= 10 && s.length >= s.diameter * 0.8);
      if (cands.length) {
        const { s, i } = pick(rnd, cands);
        const kw = keywayFor(s.diameter);
        if (kw) {
          const len = Math.max(kw.width * 1.5, roundTo(s.length * (0.45 + rnd() * 0.35), 1));
          const off = roundTo((s.length - len) * (0.2 + rnd() * 0.6), 1);
          F.push({ type: "keyway", segment: i, offset: off, length: len, width: kw.width, depth: kw.depth, kind: "parallel", standard: `DIN 6885 ${kw.width}×${kw.key_h}` });
          s.label = s.label || pick(rnd, ["기어 자리", "커플링 자리", "풀리 자리"]);
        }
      }
    }
    /* 멈춤링 홈 */
    if (chance(rnd, 0.5)) {
      const cands = S.map((s, i) => ({ s, i })).filter(({ s }) => s.type === "cyl" && s.length >= 12 && !F.some((f) => f.segment === undefined));
      if (cands.length) {
        const { s, i } = pick(rnd, cands);
        const g = snapRingGroove(s.diameter);
        const off = roundTo(Math.min(s.length - g.width - 1, 2 + rnd() * (s.length * 0.4)), 0.5);
        if (off >= 1) G.push({ segment: i, offset: off, width: g.width, depth: (s.diameter - g.groove_d) / 2, kind: "snap_ring", standard: `DIN 471 ${DIAtxt(g.groove_d)}×${g.width}` });
      }
    }
    /* 횡구멍 */
    if (chance(rnd, 0.25)) {
      const cands = S.map((s, i) => ({ s, i })).filter(({ s }) => s.type === "cyl" && s.diameter >= 12 && s.length >= 12);
      if (cands.length) {
        const { s, i } = pick(rnd, cands);
        let x0 = 0; for (let k = 0; k < i; k++) x0 += S[k].length;
        const d = pick(rnd, [2, 2.5, 3, 4, 5, 6].filter((v) => v <= s.diameter / 3));
        if (d) F.push({ type: "cross_hole", position: roundTo(x0 + s.length * (0.3 + rnd() * 0.4), 1), diameter: d, through: true, angle: chance(rnd, 0.6) ? 0 : 90 });
      }
    }
    /* 센터구멍 */
    if (chance(rnd, 0.6)) {
      for (const end of ["left", "right"]) {
        const seg = end === "left" ? S[0] : S[S.length - 1];
        const d = seg.diameter || 20;
        if (d < 8) continue;
        const c = centerHoleFor(d);
        F.push({ type: "center_hole", end, form: "A", d: c.d, standard: `DIN 332-A${c.d}` });
      }
    }
  } else if (arch.id === "taper_shaft") {
    dsl.part_class = "shaft";
    const d0 = base;
    S.push({ type: "cyl", length: lenFor(rnd, d0, "mid"), diameter: d0, tolerance: pick(rnd, ["h6", "k6", "js6"]) });
    const d1 = stepDia(rnd, d0, -1, 1);
    S.push({ type: "taper", length: roundTo(d0 * (1.2 + rnd()), 5), d_start: d0, d_end: d1, label: "테이퍼 1:10 근사" });
    const th = threadFor(rnd, stepDia(rnd, d1, -1, 1));
    S.push({ type: "thread", length: roundTo(th.nominal * 1.2, 1), diameter: th.nominal, spec: th.spec, pitch: th.pitch });
    T.push({ at: 0, type: "chamfer", size: chamferFor(d0) }, { at: 3, type: "chamfer", size: Math.max(0.5, roundTo(th.pitch, 0.5)) });
    if (chance(rnd, 0.6)) { const r = threadUndercutFor(th.nominal, th.pitch); T.push({ at: 2, type: "undercut", width: r.width, depth: r.depth, standard: "DIN 76-A" }); }
    const kw = keywayFor(d0);
    if (kw && chance(rnd, 0.6)) F.push({ type: "keyway", segment: 0, offset: roundTo(S[0].length * 0.25, 1), length: roundTo(S[0].length * 0.5, 1), width: kw.width, depth: kw.depth, kind: "parallel" });
    const c = centerHoleFor(d0); F.push({ type: "center_hole", end: "left", form: "A", d: c.d });
  } else if (arch.id === "hex_shaft") {
    dsl.part_class = "shaft";
    const d0 = pick(rnd, [14, 16, 18, 20, 22, 25]);
    const af = { 14: 12, 16: 13, 18: 15, 20: 17, 22: 19, 25: 22 }[d0];
    S.push({ type: "cyl", length: roundTo(d0 * (0.8 + rnd() * 0.6), 1), diameter: d0 });
    const d1 = stepDia(rnd, d0, -1, 2);
    S.push({ type: "cyl", length: lenFor(rnd, d1, "long"), diameter: d1, tolerance: pick(rnd, ["h6", "h7"]) });
    const th = threadFor(rnd, stepDia(rnd, d1, -1, 1));
    S.push({ type: "thread", length: roundTo(th.nominal * (1 + rnd() * 0.5), 1), diameter: th.nominal, spec: th.spec, pitch: th.pitch });
    T.push({ at: 0, type: "chamfer", size: chamferFor(d0) }, { at: 1, type: "fillet", radius: 1 }, { at: 3, type: "chamfer", size: Math.max(0.5, roundTo(th.pitch, 0.5)) });
    F.push({ type: "hex", segment: 0, across_flats: af });
    if (chance(rnd, 0.6)) F.push({ type: "flat", segment: 1, offset: roundTo(S[1].length * 0.2, 1), length: roundTo(S[1].length * 0.5, 1), depth: roundTo(d1 * 0.12, 0.5) || 0.5, count: chance(rnd, 0.4) ? 2 : 1 });
  } else if (arch.id === "bushing" || arch.id === "flanged_bushing" || arch.id === "spacer") {
    dsl.part_class = arch.id === "spacer" ? "spacer" : "bushing";
    const id = pick(rnd, PREFERRED_DIAMETERS.filter((d) => d >= 8 && d <= 50));
    const od = stepDia(rnd, id, 1, 2 + Math.floor(rnd() * 2));
    const L = arch.id === "spacer" ? roundTo(od * (0.2 + rnd() * 0.4), 1) : roundTo(od * (0.8 + rnd() * 0.8), 1);
    if (arch.id === "flanged_bushing") {
      const fd = stepDia(rnd, od, 1, 2), fl = Math.max(3, roundTo(L * 0.2, 1));
      S.push({ type: "cyl", length: fl, diameter: fd }, { type: "cyl", length: L - fl, diameter: od, tolerance: pick(rnd, ["h6", "m6", "n6"]) });
      T.push({ at: 1, type: "chamfer", size: 0.5 });
    } else S.push({ type: "cyl", length: L, diameter: od, tolerance: pick(rnd, ["h6", "m6", "n6", "h7"]) });
    T.push({ at: 0, type: "chamfer", size: chamferFor(od) * 0.5 || 0.5 }, { at: S.length, type: "chamfer", size: chamferFor(od) * 0.5 || 0.5 });
    dsl.bore = { through: true, segments: [{ length: L, diameter: id, tolerance: pick(rnd, ["H7", "H8", "F7"]) }], chamfer_left: 0.5, chamfer_right: 0.5 };
    if (arch.id === "bushing" && chance(rnd, 0.35)) {
      /* 단붙이 보어(한쪽이 넓음) */
      const id2 = stepDia(rnd, id, 1, 1);
      if (id2 < od - 3) {
        const l1 = roundTo(L * 0.35, 1);
        dsl.bore.segments = [{ length: l1, diameter: id2, tolerance: "H7" }, { length: L - l1, diameter: id, tolerance: "H7" }];
      }
    }
    if (arch.id !== "spacer" && chance(rnd, 0.35)) {
      const g = snapRingGroove(od);
      G.push({ segment: S.length - 1, offset: roundTo(2 + rnd() * 3, 0.5), width: g.width, depth: (od - g.groove_d) / 2, kind: "snap_ring" });
    }
    if (chance(rnd, 0.3)) {
      /* 급유 구멍 */
      const seg = S.length - 1; let x0 = 0; for (let k = 0; k < seg; k++) x0 += S[k].length;
      F.push({ type: "cross_hole", position: roundTo(x0 + S[seg].length / 2, 1), diameter: pick(rnd, [2, 2.5, 3]), through: false, depth: (od - id) / 2 + 1, angle: 90 });
    }
    dsl.material = arch.id === "spacer" ? pick(rnd, ["S45C", "SUS304", "A6061"]) : pick(rnd, ["C3604", "PBC2", "SUJ2", "SUS304", "S45C"]);
  } else if (arch.id === "pin") {
    dsl.part_class = "pin";
    const d = pick(rnd, [4, 5, 6, 8, 10, 12, 14, 16, 20]);
    const L = roundTo(d * (2.5 + rnd() * 4), 1);
    if (chance(rnd, 0.6)) {
      /* 클레비스 핀: 머리 */
      const hd = stepDia(rnd, d, 1, 1), hl = Math.max(2, roundTo(d * 0.35, 0.5));
      S.push({ type: "cyl", length: hl, diameter: hd }, { type: "cyl", length: L, diameter: d, tolerance: "h11" });
      T.push({ at: 0, type: "chamfer", size: 0.5 }, { at: 2, type: "chamfer", size: Math.max(0.5, roundTo(d * 0.1, 0.5)) });
      const hole = d >= 6 ? pick(rnd, [1.6, 2, 2.5, 3.2].filter((v) => v <= d / 3)) : null;
      if (hole) F.push({ type: "cross_hole", position: roundTo(hl + L - d * 0.6, 0.5), diameter: hole, through: true, angle: 0 });
    } else {
      S.push({ type: "cyl", length: L, diameter: d, tolerance: pick(rnd, ["h8", "m6", "h11"]) });
      T.push({ at: 0, type: chance(rnd, 0.5) ? "round" : "chamfer", size: Math.max(0.5, roundTo(d * 0.12, 0.5)), radius: Math.max(0.5, roundTo(d * 0.15, 0.5)) });
      T.push({ at: 1, type: "chamfer", size: Math.max(0.5, roundTo(d * 0.12, 0.5)) });
      for (const t of T) { if (t.type === "round") delete t.size; else delete t.radius; }
    }
    dsl.material = pick(rnd, ["S45C", "SUS303", "SCM435"]);
  } else if (["hex_bolt", "socket_cap_screw", "set_screw", "countersunk_screw", "stud"].includes(arch.id)) {
    dsl.part_class = "other";
    const M = pick(rnd, [4, 5, 6, 8, 10, 12, 16, 20]);
    const [s, k, dk, k2, s2] = BOLT_TABLE[M];
    const pitch = ISO_COARSE_PITCH[M];
    const Ln = roundTo(M * (2.5 + rnd() * 5), 5);   /* 호칭 길이 */
    const spec = threadSpecText(M, pitch);
    if (arch.id === "hex_bolt") {
      const ac = +(s / Math.cos(Math.PI / 6)).toFixed(2);   /* 대각 = 머리 원통 지름 */
      const shank = Ln > 3 * M && chance(rnd, 0.6) ? roundTo(Ln - Math.min(Ln * 0.6, 2 * M + 6), 1) : 0;   /* 나사 없는 생크 */
      S.push({ type: "cyl", length: k, diameter: ac, label: "육각 머리" });
      if (shank > 0) S.push({ type: "cyl", length: shank, diameter: M });
      S.push({ type: "thread", length: Ln - shank, diameter: M, spec, pitch });
      F.push({ type: "hex", segment: 0, across_flats: s });
      T.push({ at: 0, type: "chamfer", size: Math.max(0.5, roundTo(k * 0.15, 0.5)), angle: 30 }, { at: S.length, type: "chamfer", size: Math.max(0.5, roundTo(pitch, 0.5)) });
      T.push({ at: 1, type: "fillet", radius: Math.max(0.5, roundTo(M * 0.06, 0.5)) });
    } else if (arch.id === "socket_cap_screw") {
      const shank = Ln > 3 * M && chance(rnd, 0.5) ? roundTo(Ln - Math.min(Ln * 0.6, 2 * M + 6), 1) : 0;
      S.push({ type: "cyl", length: k2, diameter: dk, label: "원통 머리" });
      if (shank > 0) S.push({ type: "cyl", length: shank, diameter: M });
      S.push({ type: "thread", length: Ln - shank, diameter: M, spec, pitch });
      F.push({ type: "hex_socket", end: "left", across_flats: s2, depth: +(k2 * 0.55).toFixed(1) });
      T.push({ at: 0, type: "chamfer", size: Math.max(0.5, roundTo(dk * 0.05, 0.5)) }, { at: S.length, type: "chamfer", size: Math.max(0.5, roundTo(pitch, 0.5)) });
      T.push({ at: 1, type: "fillet", radius: Math.max(0.5, roundTo(M * 0.06, 0.5)) });
    } else if (arch.id === "set_screw") {
      const Ls = roundTo(M * (1 + rnd() * 2.5), 1);
      S.push({ type: "thread", length: Ls, diameter: M, spec, pitch });
      F.push({ type: "hex_socket", end: "left", across_flats: Math.max(1.5, s2 - 2), depth: +(Math.min(Ls * 0.4, M * 0.6)).toFixed(1) });
      T.push({ at: 0, type: "chamfer", size: Math.max(0.3, roundTo(pitch * 0.5, 0.1)) }, { at: 1, type: "chamfer", size: Math.max(0.5, roundTo(pitch, 0.5)) });
    } else if (arch.id === "countersunk_screw") {
      const dkc = +(1.9 * M).toFixed(1), kh = +(0.55 * M).toFixed(1);   /* 90° 접시: 지름 ≈ 1.9M, 높이 ≈ 0.55M */
      S.push({ type: "taper", length: kh, d_start: dkc, d_end: M, label: "접시 머리" });
      S.push({ type: "thread", length: Ln, diameter: M, spec, pitch });
      F.push({ type: "hex_socket", end: "left", across_flats: Math.max(2, s2 - 1), depth: +(kh * 0.6).toFixed(1) });
      T.push({ at: 2, type: "chamfer", size: Math.max(0.5, roundTo(pitch, 0.5)) });
    } else {   /* stud */
      const l1 = roundTo(M * 1.25, 1), l2 = roundTo(M * 1.5 + 4, 1);
      const mid = Math.max(6, Ln - l1 - l2);
      S.push({ type: "thread", length: l1, diameter: M, spec, pitch, label: "식입측" }, { type: "cyl", length: mid, diameter: M }, { type: "thread", length: l2, diameter: M, spec, pitch, label: "너트측" });
      T.push({ at: 0, type: "chamfer", size: Math.max(0.5, roundTo(pitch, 0.5)) }, { at: 3, type: "chamfer", size: Math.max(0.5, roundTo(pitch, 0.5)) });
    }
    dsl.material = pick(rnd, ["SCM435", "S45C", "SUS304", "SWCH10R"]);
  } else if (arch.id === "roller") {
    dsl.part_class = "roller";
    const D = pick(rnd, [30, 35, 40, 45, 50, 60]);
    const d = stepDia(rnd, D, -1, 3);
    const Lb = roundTo(D * (1 + rnd() * 1.5), 5), Ls = roundTo(d * (0.8 + rnd() * 0.6), 1);
    S.push({ type: "cyl", length: Ls, diameter: d, tolerance: "h6", label: "베어링 자리" }, { type: "cyl", length: Lb, diameter: D, roughness: "Ra 0.8" }, { type: "cyl", length: Ls, diameter: d, tolerance: "h6", label: "베어링 자리" });
    T.push({ at: 0, type: "chamfer", size: chamferFor(d) }, { at: 3, type: "chamfer", size: chamferFor(d) }, { at: 1, type: "fillet", radius: 1.5 }, { at: 2, type: "fillet", radius: 1.5 });
    if (chance(rnd, 0.5)) T.push({ at: 1, type: "chamfer", size: 1 }, { at: 2, type: "chamfer", size: 1 });
    if (chance(rnd, 0.6)) { const g = snapRingGroove(d); G.push({ segment: 0, offset: roundTo(Ls * 0.35, 0.5), width: g.width, depth: (d - g.groove_d) / 2, kind: "snap_ring" }, { segment: 2, offset: roundTo(Ls * 0.65 - g.width, 0.5), width: g.width, depth: (d - g.groove_d) / 2, kind: "snap_ring" }); }
    if (chance(rnd, 0.5)) { const c = centerHoleFor(d); F.push({ type: "center_hole", end: "left", form: "A", d: c.d }, { type: "center_hole", end: "right", form: "A", d: c.d }); }
  }

  /* 정리: 세그먼트가 하나면 전이 at 는 0/1 */
  const v = validateShaft(dsl);
  if (!v.ok) {
    /* 자기 수리: 실패한 전이·홈·피처를 하나씩 덜어내며 통과시킨다 (샘플러는 항상 유효한 것만 내보낸다) */
    for (const key of ["features", "grooves", "transitions"]) {
      for (let i = dsl[key].length - 1; i >= 0 && !validateShaft(dsl).ok; i--) {
        const removed = dsl[key].splice(i, 1);
        if (validateShaft(dsl).ok) break;
        if (!validateShaft(dsl).ok) continue;
        dsl[key].splice(i, 0, ...removed);
      }
    }
    if (!validateShaft(dsl).ok) { dsl.transitions = []; dsl.grooves = []; dsl.features = []; }
  }
  const v2 = validateShaft(dsl);
  dsl.meta.valid = v2.ok;
  dsl.meta.archetype = arch.id;
  return dsl;
}
function DIAtxt(v) { return `⌀${Math.round(v * 100) / 100}`; }

/* N 개를 시드 s0.. 로 (유효한 것만, 필요하면 시드를 건너뛴다) */
export function sampleMany(n, seed0 = 1, opts = {}) {
  const out = [];
  let seed = seed0;
  while (out.length < n && seed < seed0 + n * 5) {
    const d = sampleShaft(seed++, opts);
    if (d.meta.valid) out.push(d);
  }
  return out;
}
