/* VRINGON 회전체 — 검증기 (M4)
   ① 실루엣 IoU: 판독된 DSL 을 다시 그린 외형 r(x) 와 입력 도면에서 잰 외형을 대조한다.
      회전체 실루엣은 축 대칭이라 r(x) 표본만으로 IoU 가 정확히 나온다(래스터 불필요):
      IoU = Σ min(r_in, r_dsl) / Σ max(r_in, r_dsl)  (길이로 정규화한 x 격자 위에서).
   ② 치수 정합: 모델이 읽었다고 보고한 치수 문자열들이 DSL 안에 실제로 있는지.
   ③ 신뢰도: 위 둘 + 유효성 + 경고 수 → 0~1. 보정 데이터는 tools/eval 이 모은다.
   ④ 정답 지표(합성 평가): 세그먼트 F1·피처 F1·치수 일치율·실루엣 IoU·완전 일치.
   순수 모듈. */

import { silhouetteSamples, totalLength, segmentDiameters, collectEvents } from "./shaft-profile.js";
import { validateShaft } from "./shaft-schema.js";
import { parseThreadSpec } from "./shaft-standards.js";

/* ------------------------------------------------------------ 실루엣 IoU
   a, b: {L, samples: Float64Array|number[]}. r(x) 를 x 등분 표본으로. 길이가 달라도
   x 를 0..1 로 정규화하고 r 도 각자의 L 로 나눈 뒤 비교한다(비례 형상 비교).
   opts.absolute=true 면 r 을 mm 그대로 비교(치수 정확도까지 포함). */
export function silhouetteIoU(a, b, opts = {}) {
  const N = Math.max(a.samples.length, b.samples.length, 200);
  const ka = opts.absolute ? 1 : 1 / (a.L || 1), kb = opts.absolute ? 1 : 1 / (b.L || 1);
  let inter = 0, uni = 0;
  for (let i = 0; i < N; i++) {
    const t = (i + 0.5) / N;
    const ra = sampleAt(a.samples, t) * ka, rb = sampleAt(b.samples, t) * kb;
    inter += Math.min(ra, rb); uni += Math.max(ra, rb);
  }
  return uni > 0 ? inter / uni : 0;
}
function sampleAt(arr, t) {
  const n = arr.length; const x = t * n - 0.5;
  const i0 = Math.max(0, Math.min(n - 1, Math.floor(x))), i1 = Math.max(0, Math.min(n - 1, i0 + 1));
  const f = Math.max(0, Math.min(1, x - i0));
  return arr[i0] * (1 - f) + arr[i1] * f;
}
/* 위/아래 외형을 따로 잰 입력(래스터)과 DSL 비교 */
export function silhouetteIoU2(inputTopBot, dsl, opts = {}) {
  const s = silhouetteSamples(dsl, 400);
  const top = silhouetteIoU({ L: inputTopBot.L, samples: inputTopBot.top }, s, opts);
  const bot = silhouetteIoU({ L: inputTopBot.L, samples: inputTopBot.bottom }, s, opts);
  return (top + bot) / 2;
}
export function dslSilhouette(dsl, N = 400) { return silhouetteSamples(dsl, N); }

/* ------------------------------------------------------------ 치수 정합
   dimsRead: [{kind, value, text}]. kind ∈ diameter|length|overall|thread|chamfer|radius|
   groove_width|groove_diameter|keyway_width|keyway_depth|bore_diameter|position|other */
export function dimensionConsistency(dsl, dimsRead = [], tol = 0.051) {
  const ev = collectEvents(dsl);
  const L = totalLength(dsl);
  const pool = [];   /* DSL 안의 모든 수치 (kind, value) */
  const add = (kind, value, ref) => { if (Number.isFinite(value)) pool.push({ kind, value, ref, used: false }); };
  add("overall", L, "overall");
  ev.segments.forEach((s, i) => { add("length", s.x1 - s.x0, `segments[${i}].length`); if (s.type === "taper") { add("diameter", s.ds, `segments[${i}].d_start`); add("diameter", s.de, `segments[${i}].d_end`); } else add("diameter", s.ds, `segments[${i}].diameter`); });
  ev.threads.forEach((t) => pool.push({ kind: "thread", value: normalizeThread(t.spec), ref: `segments[${t.i}].spec`, used: false }));
  ev.transitions.forEach((t, i) => { if (t.type === "chamfer") add("chamfer", t.size, `transitions[${i}]`); if (t.type === "fillet" || t.type === "round") add("radius", t.radius, `transitions[${i}]`); if (t.type === "undercut") { add("length", t.width, `transitions[${i}].width`); add("diameter", 2 * (t.r - t.depth), `transitions[${i}].relief`); } });
  ev.grooves.forEach((g, i) => { add("length", g.width, `grooves[${i}].width`); add("diameter", 2 * g.r_floor, `grooves[${i}].diameter`); add("length", g.x0 - ev.segments[g.segment].x0, `grooves[${i}].offset`); add("length", ev.segments[g.segment].x1 - g.x1, `grooves[${i}].offset_end`); });
  ev.features.forEach((f, i) => {
    if (f.type === "keyway") { add("length", f.width, `features[${i}].width`); add("length", f.length, `features[${i}].length`); add("length", f.D - f.depth, `features[${i}].depth_ref`); add("length", f.depth, `features[${i}].depth`); add("length", f.x0 - ev.segments[f.segment].x0, `features[${i}].offset`); add("length", ev.segments[f.segment].x1 - f.x1, `features[${i}].offset_end`); }
    if (f.type === "flat") { add("length", f.length, `features[${i}].length`); add("length", f.D - f.depth, `features[${i}].depth_ref`); add("length", f.depth, `features[${i}].depth`); add("length", f.D - 2 * f.depth, `features[${i}].across`); }
    if (f.type === "hex") add("length", f.across_flats, `features[${i}].across_flats`);
    if (f.type === "cross_hole") { add("diameter", f.diameter, `features[${i}].diameter`); add("length", f.position, `features[${i}].position`); add("length", L - f.position, `features[${i}].position_from_right`); }
    if (f.type === "center_hole") add("length", f.d, `features[${i}].d`);
    if (f.type === "hex_socket") { add("length", f.across_flats, `features[${i}].across_flats`); add("length", f.depth, `features[${i}].depth`); }
  });
  if (ev.bore) { ev.bore.segments.forEach((b, i) => { add("diameter", b.diameter, `bore.segments[${i}].diameter`); add("length", b.x1 - b.x0, `bore.segments[${i}].length`); }); if (!ev.bore.through) add("length", ev.bore.segments.reduce((a, b) => a + (b.x1 - b.x0), 0), "bore.depth"); }

  const results = [];
  const hasFeat = (t) => (dsl.features || []).some((f) => f.type === t);
  for (const d of dimsRead) {
    const kind = d.kind || "other";
    let value = d.value;
    /* 규격 호출문은 값이 아니라 피처의 존재로 대조한다 */
    const txt = String(d.text || "");
    if (/센터구멍|DIN\s*332|center/i.test(txt)) { results.push({ ...d, matched: hasFeat("center_hole"), ref: "features.center_hole" }); continue; }
    if (/DIN\s*76|DIN\s*509|도피홈/i.test(txt) && !/×|x\d/.test(txt)) { results.push({ ...d, matched: (dsl.transitions || []).some((t) => t.type === "undercut"), ref: "transitions.undercut" }); continue; }
    if (/DIN\s*6885|키홈/i.test(txt) && !/\d/.test(txt.replace(/DIN\s*6885/i, ""))) { results.push({ ...d, matched: hasFeat("keyway"), ref: "features.keyway" }); continue; }
    if (/널링|knurl/i.test(txt)) { results.push({ ...d, matched: hasFeat("knurl"), ref: "features.knurl" }); continue; }
    if (/육각\s*소켓|hex\s*socket/i.test(txt) && !/\d/.test(txt.replace(/육각\s*소켓|hex\s*socket/i, ""))) { results.push({ ...d, matched: hasFeat("hex_socket"), ref: "features.hex_socket" }); continue; }
    if (/관통|THRU/i.test(txt) && !/⌀|Ø|\d/.test(txt)) { results.push({ ...d, matched: hasFeat("cross_hole"), ref: "features.cross_hole" }); continue; }
    if (kind === "thread") {
      const want = normalizeThread(String(value || d.text || ""));
      const hit = pool.find((p) => p.kind === "thread" && !p.used && p.value === want);
      if (hit) hit.used = true;
      results.push({ ...d, matched: !!hit, ref: hit?.ref });
      continue;
    }
    if (typeof value === "string") value = parseFloat(value.replace(/[^\d.]/g, ""));
    if (!Number.isFinite(value)) { results.push({ ...d, matched: false, reason: "숫자 아님" }); continue; }
    const kinds = kind === "diameter" || kind === "bore_diameter" || kind === "groove_diameter" ? ["diameter"] : kind === "overall" ? ["overall", "length"] : kind === "chamfer" ? ["chamfer"] : kind === "radius" ? ["radius"] : ["length", "overall", "diameter", "chamfer", "radius"];
    let hit = null;
    for (const k of kinds) { hit = pool.find((p) => p.kind === k && !p.used && Math.abs(p.value - value) <= tol + value * 0.002); if (hit) break; }
    if (!hit && kinds.length === 1) hit = pool.find((p) => !p.used && Math.abs(p.value - value) <= tol + value * 0.002);   /* 종류가 틀렸어도 값은 있음 */
    if (hit) hit.used = true;
    results.push({ ...d, matched: !!hit, ref: hit?.ref, kindMismatch: hit && !kinds.includes(hit.kind) });
  }
  const matched = results.filter((r) => r.matched).length;
  return { total: results.length, matched, rate: results.length ? matched / results.length : null, results, unmatched: results.filter((r) => !r.matched) };
}
function normalizeThread(s) { return String(s || "").toUpperCase().replace(/×/g, "X").replace(/\s+/g, "").replace(/-\w+$/, ""); }

/* ------------------------------------------------------------ 신뢰도 */
export function confidenceScore({ iou = null, dimRate = null, valid = true, warnings = 0, executed = true }) {
  let score = 0, w = 0;
  if (iou !== null) { score += 0.55 * iou; w += 0.55; }
  if (dimRate !== null) { score += 0.35 * dimRate; w += 0.35; }
  score += 0.10 * (valid && executed ? 1 : 0); w += 0.10;
  let c = w > 0 ? score / w : 0;
  c -= Math.min(0.15, warnings * 0.03);
  /* 치수 문자를 전혀 읽지 않은 판독(실루엣 단독)은 의미 정보가 비어 있으므로 상한을 둔다 */
  if (dimRate === null) c = Math.min(c, 0.8);
  return Math.max(0, Math.min(1, c));
}

/* 한 번에: DSL + 입력 실루엣(옵션) + dimsRead(옵션) → 리포트 */
export function verifyExtraction({ dsl, inputSilhouette = null, dimsRead = null }) {
  const v = validateShaft(dsl);
  let iou = null;
  if (inputSilhouette && v.ok) {
    iou = inputSilhouette.top && inputSilhouette.bottom ? silhouetteIoU2(inputSilhouette, dsl) : silhouetteIoU(inputSilhouette, dslSilhouette(dsl));
  }
  const dims = dimsRead && dimsRead.length && v.ok ? dimensionConsistency(dsl, dimsRead) : null;
  const confidence = confidenceScore({ iou, dimRate: dims ? dims.rate : null, valid: v.ok, warnings: v.warnings?.length || 0 });
  const verdict = !v.ok ? "invalid" : confidence >= 0.85 ? "pass" : confidence >= 0.6 ? "review" : "fail";
  return { valid: v.ok, errors: v.errors, warnings: v.warnings, iou, dims, confidence, verdict };
}

/* ------------------------------------------------------------ 정답 지표 */
const near = (a, b, rel = 0.02, abs = 0.06) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= Math.max(abs, Math.abs(b) * rel);
function segMatch(p, g) {
  if (p.type !== g.type) return false;
  if (!near(p.length, g.length)) return false;
  const [pd0, pd1] = segmentDiameters(p), [gd0, gd1] = segmentDiameters(g);
  if (g.type === "thread") { const a = parseThreadSpec(p.spec), b = parseThreadSpec(g.spec); return !!a && !!b && a.nominal === b.nominal && near(a.pitch || 0, b.pitch || 0, 0.01, 0.01); }
  return near(pd0, gd0) && near(pd1, gd1);
}
/* 순서를 지키는 최장 공통 부분열 매칭 (세그먼트) */
function lcsCount(A, B, eq) {
  const n = A.length, m = B.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) dp[i][j] = eq(A[i - 1], B[j - 1]) ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return dp[n][m];
}
function f1(tp, np, ng) {
  const p = np ? tp / np : (ng ? 0 : 1), r = ng ? tp / ng : (np ? 0 : 1);
  return { precision: p, recall: r, f1: p + r > 0 ? (2 * p * r) / (p + r) : (np === 0 && ng === 0 ? 1 : 0) };
}
function featKey(f) {
  if (f.type === "keyway") return ["keyway", f.width, f.depth, f.length];
  if (f.type === "center_hole") return ["center_hole", f.end, f.d];
  if (f.type === "cross_hole") return ["cross_hole", f.diameter, f.position];
  if (f.type === "flat") return ["flat", f.depth, f.length];
  if (f.type === "hex") return ["hex", f.across_flats];
  if (f.type === "knurl") return ["knurl", f.length];
  if (f.type === "hex_socket") return ["hex_socket", f.end, f.across_flats, f.depth];
  return [f.type];
}
function featEq(a, b) {
  const ka = featKey(a), kb = featKey(b);
  if (ka[0] !== kb[0]) return false;
  for (let i = 1; i < kb.length; i++) { if (typeof kb[i] === "number") { if (!near(ka[i], kb[i], 0.03, 0.1)) return false; } else if (ka[i] !== kb[i]) return false; }
  return true;
}
function greedyMatch(P, G, eq) {
  const used = new Set(); let tp = 0;
  for (const p of P) { const j = G.findIndex((g, k) => !used.has(k) && eq(p, g)); if (j >= 0) { used.add(j); tp++; } }
  return tp;
}
function transEq(a, b) {
  if (a.type !== b.type || a.at !== b.at) return false;
  if (a.type === "chamfer") return near(a.size, b.size, 0.05, 0.1);
  if (a.type === "fillet" || a.type === "round") return near(a.radius, b.radius, 0.05, 0.1);
  if (a.type === "undercut") return near(a.width, b.width, 0.1, 0.3) && near(a.depth, b.depth, 0.1, 0.2);
  return true;
}
function grooveEq(a, b) { return a.segment === b.segment && near(a.offset, b.offset, 0.03, 0.3) && near(a.width, b.width, 0.05, 0.1) && near(a.depth, b.depth, 0.05, 0.1); }
/* 정답의 "치수 집합": 도면에 적히는 수치 전부 */
export function dimensionSet(dsl) {
  const ev = collectEvents(dsl); const out = [];
  out.push(["overall", totalLength(dsl)]);
  ev.segments.forEach((s) => { out.push(["length", s.x1 - s.x0]); if (s.type === "thread") out.push(["thread", normalizeThread(s.spec)]); else if (s.type === "taper") out.push(["diameter", s.ds], ["diameter", s.de]); else out.push(["diameter", s.ds]); });
  ev.transitions.forEach((t) => { if (t.type === "chamfer") out.push(["chamfer", t.size]); if (t.type === "fillet" || t.type === "round") out.push(["radius", t.radius]); if (t.type === "undercut") out.push(["undercut_w", t.width], ["undercut_d", t.depth]); });
  ev.grooves.forEach((g) => out.push(["groove_w", g.width], ["groove_dia", 2 * g.r_floor], ["groove_off", g.offset]));
  ev.features.forEach((f) => { if (f.type === "keyway") out.push(["kw_w", f.width], ["kw_t", f.depth], ["kw_l", f.length], ["kw_off", f.offset || 0]); if (f.type === "flat") out.push(["flat_d", f.depth], ["flat_l", f.length]); if (f.type === "hex") out.push(["hex_af", f.across_flats]); if (f.type === "cross_hole") out.push(["hole_d", f.diameter], ["hole_x", f.position]); if (f.type === "center_hole") out.push(["center_d", f.d]); if (f.type === "hex_socket") out.push(["socket_af", f.across_flats], ["socket_depth", f.depth]); });
  if (ev.bore) { ev.bore.segments.forEach((b) => out.push(["bore_dia", b.diameter], ["bore_len", b.x1 - b.x0])); }
  return out;
}
export function goldenMetrics(pred, gold) {
  const P = pred?.segments || [], G = gold?.segments || [];
  const segTP = lcsCount(P, G, segMatch);
  const seg = f1(segTP, P.length, G.length);
  const feat = f1(greedyMatch(pred?.features || [], gold?.features || [], featEq), (pred?.features || []).length, (gold?.features || []).length);
  const trans = f1(greedyMatch(pred?.transitions || [], gold?.transitions || [], transEq), (pred?.transitions || []).length, (gold?.transitions || []).length);
  const grv = f1(greedyMatch(pred?.grooves || [], gold?.grooves || [], grooveEq), (pred?.grooves || []).length, (gold?.grooves || []).length);
  /* 치수 일치율: 정답 치수 중 예측에 같은 값이 있는 비율 (종류 무시, 값 ±2%/0.06) */
  const gd = dimensionSet(gold), pd = dimensionSet(pred || { segments: [] });
  const usedP = new Set(); let dimTP = 0;
  for (const [k, v] of gd) {
    const j = pd.findIndex(([k2, v2], idx) => !usedP.has(idx) && (typeof v === "string" ? v2 === v : near(v2, v)));
    if (j >= 0) { usedP.add(j); dimTP++; }
  }
  const dimRate = gd.length ? dimTP / gd.length : 1;
  const validP = validateShaft(pred || {}).ok;
  const iou = validP ? silhouetteIoU(dslSilhouette(pred), dslSilhouette(gold)) : 0;
  const iouAbs = validP ? silhouetteIoU(dslSilhouette(pred), dslSilhouette(gold), { absolute: true }) : 0;
  const boreOk = (!!pred?.bore) === (!!gold?.bore) && (!gold?.bore || (pred.bore.segments || []).length === gold.bore.segments.length && gold.bore.segments.every((b, i) => near(pred.bore.segments[i]?.diameter, b.diameter) && near(pred.bore.segments[i]?.length, b.length)));
  const lengthOk = near(totalLength(pred || { segments: [] }), totalLength(gold), 0.005, 0.06);
  const exact = seg.f1 >= 0.999 && feat.f1 >= 0.999 && trans.f1 >= 0.999 && grv.f1 >= 0.999 && boreOk && lengthOk && dimRate >= 0.999;
  return { valid: validP, segment: seg, feature: feat, transition: trans, groove: grv, dim_rate: dimRate, dims_total: gd.length, iou, iou_abs: iouAbs, bore_ok: boreOk, length_ok: lengthOk, exact };
}

/* 여러 결과의 평균 리포트 */
export function aggregateMetrics(list) {
  const n = list.length || 1;
  const mean = (f) => list.reduce((a, m) => a + (f(m) || 0), 0) / n;
  return {
    n: list.length,
    valid_rate: mean((m) => (m.valid ? 1 : 0)),
    segment_f1: mean((m) => m.segment.f1), segment_precision: mean((m) => m.segment.precision), segment_recall: mean((m) => m.segment.recall),
    feature_f1: mean((m) => m.feature.f1), transition_f1: mean((m) => m.transition.f1), groove_f1: mean((m) => m.groove.f1),
    dim_rate: mean((m) => m.dim_rate), iou: mean((m) => m.iou), iou_abs: mean((m) => m.iou_abs),
    length_ok_rate: mean((m) => (m.length_ok ? 1 : 0)), bore_ok_rate: mean((m) => (m.bore_ok ? 1 : 0)), exact_rate: mean((m) => (m.exact ? 1 : 0)),
  };
}
