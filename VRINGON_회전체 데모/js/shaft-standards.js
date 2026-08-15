/* VRINGON 회전체 — 표준 규격표
   샘플러(합성 도면)와 판독기(정규화)·검증기(관례 확인)가 같은 표를 본다.
   값은 공개 규격의 대표값이며 데모 목적의 근사가 섞여 있다(각 표에 표기).
   순수 데이터 모듈: 브라우저와 Node 양쪽에서 import된다. */

/* 우선 축경 계열 (R20 근사, mm) */
export const PREFERRED_DIAMETERS = [6, 8, 10, 12, 14, 15, 16, 17, 18, 20, 22, 25, 28, 30, 32, 35, 40, 45, 50, 55, 60, 70, 80];

/* ISO 261 보통나사 피치 (M호칭 → P) */
export const ISO_COARSE_PITCH = { 3: 0.5, 4: 0.7, 5: 0.8, 6: 1, 8: 1.25, 10: 1.5, 12: 1.75, 14: 2, 16: 2, 18: 2.5, 20: 2.5, 22: 2.5, 24: 3, 27: 3, 30: 3.5, 33: 3.5, 36: 4, 39: 4, 42: 4.5, 45: 4.5, 48: 5 };
/* 자주 쓰는 가는나사 피치 */
export const ISO_FINE_PITCHES = { 8: [1], 10: [1.25, 1], 12: [1.5, 1.25], 14: [1.5], 16: [1.5], 18: [1.5], 20: [1.5, 1], 22: [1.5], 24: [2, 1.5], 27: [2], 30: [2, 1.5], 36: [3, 2] };

/* "M20x1.5-6g" / "M20×1.5" / "M20" 을 {nominal, pitch, cls} 로 */
export function parseThreadSpec(spec) {
  const m = /^M\s*(\d+(?:\.\d+)?)\s*(?:[x×X]\s*(\d+(?:\.\d+)?))?\s*(?:-?\s*(\d[a-zA-Z]{1,2}))?/.exec(String(spec || "").trim());
  if (!m) return null;
  const nominal = Number(m[1]);
  const pitch = m[2] ? Number(m[2]) : (ISO_COARSE_PITCH[nominal] || null);
  return { nominal, pitch, cls: m[3] || null, fine: !!m[2] && ISO_COARSE_PITCH[nominal] !== pitch };
}
export function threadSpecText(nominal, pitch) {
  const coarse = ISO_COARSE_PITCH[nominal];
  return coarse && Math.abs(coarse - pitch) < 1e-9 ? `M${nominal}` : `M${nominal}x${pitch}`;
}
/* ISO 965 미터나사 골지름(외경 기준) d3 ≈ d − 1.2269P */
export function threadMinorDiameter(nominal, pitch) { return nominal - 1.2269 * pitch; }

/* DIN 471 축용 멈춤링 홈: 축경 d → 홈지름 d2, 홈폭 m */
export const DIN471_GROOVE = {
  8: [7.6, 0.9], 10: [9.6, 1.1], 12: [11.5, 1.1], 14: [13.4, 1.1], 15: [14.3, 1.1], 16: [15.2, 1.1], 17: [16.2, 1.1],
  18: [17, 1.3], 20: [19, 1.3], 22: [21, 1.3], 25: [23.9, 1.3], 28: [26.6, 1.6], 30: [28.6, 1.6], 32: [30.3, 1.6],
  35: [33, 1.6], 40: [37.5, 1.85], 45: [42.5, 1.85], 50: [47, 2.15], 55: [52, 2.15], 60: [57, 2.15], 70: [67, 2.65], 80: [76.5, 2.65],
};
export function snapRingGroove(d) {
  const row = DIN471_GROOVE[d];
  if (row) return { groove_d: row[0], width: row[1] };
  /* 표 밖: 근사 (깊이 ≈ 2.5~4% , 폭 ≈ 1.1 + d/45) */
  const depth = Math.max(0.4, +(d * 0.03).toFixed(2));
  return { groove_d: +(d - 2 * depth).toFixed(2), width: +(1.1 + d / 45).toFixed(2), approx: true };
}

/* DIN 6885-1 평행키 키홈: 축경 범위 → [키폭 b, 키높이 h, 축 홈깊이 t1] */
export const DIN6885_KEYWAY = [
  [6, 8, 2, 2, 1.2], [8, 10, 3, 3, 1.8], [10, 12, 4, 4, 2.5], [12, 17, 5, 5, 3.0], [17, 22, 6, 6, 3.5],
  [22, 30, 8, 7, 4.0], [30, 38, 10, 8, 5.0], [38, 44, 12, 8, 5.0], [44, 50, 14, 9, 5.5], [50, 58, 16, 10, 6.0],
  [58, 65, 18, 11, 7.0], [65, 75, 20, 12, 7.5], [75, 85, 22, 14, 9.0], [85, 95, 25, 14, 9.0],
];
export function keywayFor(d) {
  for (const [lo, hi, b, h, t1] of DIN6885_KEYWAY) if (d > lo && d <= hi) return { width: b, key_h: h, depth: t1 };
  return null;
}

/* DIN 332 센터구멍 (A형): 파일럿 d → 카운터싱크 D (60°) — 파일럿 깊이 ≈ 2d 는 근사 */
export const DIN332_CENTER = { 1: 2.12, 1.6: 3.35, 2: 4.25, 2.5: 5.3, 3.15: 6.7, 4: 8.5, 5: 10.6, 6.3: 13.2, 8: 17 };
export function centerHoleFor(shaftD) {
  const d = shaftD <= 8 ? 1 : shaftD <= 12 ? 1.6 : shaftD <= 20 ? 2 : shaftD <= 30 ? 2.5 : shaftD <= 50 ? 3.15 : shaftD <= 80 ? 4 : 5;
  return { d, D: DIN332_CENTER[d] };
}
export function centerHoleDims(d) {
  const D = DIN332_CENTER[d] || +(2.12 * d).toFixed(2);
  return { d, D, pilot_depth: +(2 * d).toFixed(2), cone_depth: +(((D - d) / 2) / Math.tan(Math.PI / 6)).toFixed(3) };
}

/* DIN 76-1 나사 도피홈 (A형) — 폭·깊이 근사: 폭 ≈ 3P, 도피지름 ≈ d − 1.5P */
export function threadUndercutFor(nominal, pitch) {
  return { width: +(3 * pitch).toFixed(2), depth: +(0.75 * pitch).toFixed(3), relief_d: +(nominal - 1.5 * pitch).toFixed(2) };
}
/* DIN 509 연삭 도피홈 (E형): 축경 → [r, t(깊이), f(폭)] */
export function grindingUndercutFor(d) {
  return d <= 18 ? { radius: 0.6, depth: 0.2, width: 2 } : d <= 80 ? { radius: 0.8, depth: 0.3, width: 2.5 } : { radius: 1.2, depth: 0.4, width: 4 };
}

/* 재질 밀도 (g/cm³) — 질량 산출용 */
export const MATERIAL_DENSITY = {
  S45C: 7.85, SM45C: 7.85, SCM440: 7.85, SCM415: 7.85, SNCM439: 7.85, SS400: 7.85, SUJ2: 7.81, "S45C-H": 7.85,
  SUS304: 7.93, SUS303: 7.93, SUS316: 7.98, SUS420J2: 7.75, SUS440C: 7.68,
  A6061: 2.70, A7075: 2.81, AL6061: 2.70, "AL6061-T6": 2.70, A5052: 2.68,
  C3604: 8.5, C2801: 8.4, "황동": 8.5, "청동": 8.8, C5191: 8.8, PBC2: 8.8,
  POM: 1.41, MC나일론: 1.16, PEEK: 1.32, "PTFE": 2.2,
};
export function densityOf(material) {
  if (!material) return 7.85;
  const key = String(material).replace(/\s+/g, "").toUpperCase();
  for (const [k, v] of Object.entries(MATERIAL_DENSITY)) if (k.toUpperCase() === key) return v;
  if (/SUS|STS|스테인리스/i.test(key)) return 7.93;
  if (/AL|A[567]\d{3}|알루미늄/i.test(key)) return 2.7;
  if (/C\d{4}|황동|BRASS/i.test(key)) return 8.5;
  if (/POM|나일론|PA|PEEK|PTFE|수지/i.test(key)) return 1.4;
  return 7.85;
}

/* ISO 286 자주 쓰는 축 공차 등급 (도면 표기용) */
export const SHAFT_TOLERANCE_CLASSES = ["h6", "h7", "h8", "g6", "js6", "k6", "m6", "n6", "f7", "e8"];
export const ROUGHNESS_GRADES = ["Ra 0.4", "Ra 0.8", "Ra 1.6", "Ra 3.2", "Ra 6.3"];
