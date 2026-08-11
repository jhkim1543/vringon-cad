/* ==========================================================================
   Component catalogue for spec editing.

   Masses and dimensions are approximate figures compiled from public
   manufacturer listings and community build tables (T-Motor/Hobbywing store
   pages, Holybro docs, Oscar Liang's motor/battery weight tables). They are
   catalogue reference values for design studies — 근사값 — not procurement
   data, and every entry says what it weighs so the mass budget stays a sum
   the user can audit.
   ========================================================================== */

export const COMPONENT_CATALOG = [
  /* ----------------------------------------------------------- batteries */
  { id: "bat_4s_1500", group: "배터리", name: "4S 1500mAh LiPo", mass_g: 190,
    dims_mm: [75, 35, 30], spec: "14.8V · 22Wh · FPV/소형", wh: 22 },
  { id: "bat_6s_1300", group: "배터리", name: "6S 1300mAh LiPo", mass_g: 230,
    dims_mm: [78, 38, 35], spec: "22.2V · 29Wh · 레이싱", wh: 29 },
  { id: "bat_6s_5000", group: "배터리", name: "6S 5000mAh LiPo", mass_g: 650,
    dims_mm: [140, 48, 42], spec: "22.2V · 111Wh · 산업 소형", wh: 111 },
  { id: "bat_6s_10000", group: "배터리", name: "6S 10000mAh LiPo", mass_g: 1250,
    dims_mm: [160, 65, 55], spec: "22.2V · 222Wh · 산업 중형", wh: 222 },
  { id: "bat_12s_16000", group: "배터리", name: "12S 16000mAh LiPo", mass_g: 4300,
    dims_mm: [210, 95, 85], spec: "44.4V · 710Wh · 농업·중량물", wh: 710 },
  { id: "bat_li_ion_6s", group: "배터리", name: "6S Li-ion 팩 (21700)", mass_g: 850,
    dims_mm: [150, 75, 45], spec: "21.6V · 190Wh · 장기체공", wh: 190 },

  /* -------------------------------------------------------------- motors */
  { id: "mot_2207", group: "모터", name: "2207 1750KV", mass_g: 34,
    dims_mm: [28, 28, 32], spec: "5인치 FPV · 최대추력 ~1.5kg" },
  { id: "mot_2814", group: "모터", name: "2814 900KV", mass_g: 110,
    dims_mm: [35, 35, 40], spec: "9~11인치 · 최대추력 ~2.5kg" },
  { id: "mot_4114", group: "모터", name: "4114 320KV", mass_g: 148,
    dims_mm: [46, 46, 25], spec: "15인치 · 최대추력 ~4kg" },
  { id: "mot_u8ii", group: "모터", name: "U8-스타일 170KV", mass_g: 240,
    dims_mm: [87, 87, 26], spec: "28인치 · 최대추력 ~8kg · 농업/중량물" },
  { id: "mot_cruise", group: "모터", name: "고정익 순항 모터 3520", mass_g: 180,
    dims_mm: [42, 42, 50], spec: "고정익 푸셔/트랙터" },

  /* ------------------------------------------------- FC · ESC · avionics */
  { id: "fc_f7_stack", group: "FC·ESC", name: "F7 FC + 4in1 ESC 스택", mass_g: 22,
    dims_mm: [37, 37, 16], spec: "30×30 마운트 · 소형기" },
  { id: "fc_pixhawk6x", group: "FC·ESC", name: "Pixhawk급 FC 모듈", mass_g: 60,
    dims_mm: [52, 103, 16], spec: "산업용 · 이중화 IMU" },
  { id: "esc_40a", group: "FC·ESC", name: "40A ESC (개당)", mass_g: 30,
    dims_mm: [55, 25, 10], spec: "산업 멀티로터 개별 ESC" },
  { id: "gps_m10", group: "FC·ESC", name: "GNSS 모듈 + 마스트", mass_g: 32,
    dims_mm: [50, 50, 60], spec: "M10 · 나침반 내장" },

  /* ------------------------------------------------------ sensors · pay */
  { id: "cam_fpv", group: "센서·탑재", name: "FPV 카메라 + VTX", mass_g: 25,
    dims_mm: [20, 20, 25], spec: "아날로그/디지털 소형" },
  { id: "cam_gimbal_small", group: "센서·탑재", name: "소형 3축 짐벌 카메라", mass_g: 220,
    dims_mm: [70, 60, 90], spec: "1/2.3인치 · 점검/촬영" },
  { id: "cam_zoom", group: "센서·탑재", name: "30배 줌 짐벌 카메라", mass_g: 550,
    dims_mm: [110, 100, 140], spec: "점검·수색 표준" },
  { id: "cam_thermal", group: "센서·탑재", name: "열화상 듀얼 짐벌", mass_g: 380,
    dims_mm: [100, 90, 120], spec: "640×512 · 수색/화재" },
  { id: "lidar_survey", group: "센서·탑재", name: "측량 LiDAR 모듈", mass_g: 900,
    dims_mm: [120, 110, 100], spec: "측량·매핑 (근사 중량)" },
  { id: "cam_mapping", group: "센서·탑재", name: "측량 RGB 카메라 (하방)", mass_g: 170,
    dims_mm: [70, 60, 55], spec: "2000만 화소 · 기계식 셔터" },
  { id: "spray_pump", group: "센서·탑재", name: "살포 펌프 + 노즐 4", mass_g: 800,
    dims_mm: [150, 100, 80], spec: "농업 · 4L/min급" },
  { id: "drop_winch", group: "센서·탑재", name: "배송 윈치 모듈", mass_g: 600,
    dims_mm: [120, 100, 110], spec: "화물 하강 릴리즈" },
  { id: "antenna_relay", group: "센서·탑재", name: "통신 중계 안테나 세트", mass_g: 260,
    dims_mm: [60, 60, 180], spec: "듀얼밴드 · 레이돔" },
];

export const CATALOG_GROUPS = [...new Set(COMPONENT_CATALOG.map((c) => c.group))];

/* Which spec part a catalogue item is allowed to land on, by name. */
const TARGETS = {
  "배터리": /배터리|battery/i,
  "모터": /모터|motor/i,
  "FC·ESC": /fc|비행제어|esc|avionics|gnss|gps|항법/i,
  "센서·탑재": /카메라|camera|짐벌|gimbal|센서|sensor|lidar|탱크|tank|펌프|pump|안테나|antenna|윈치|winch|탑재|payload/i,
};

export function fitTargets(spec, item) {
  return (spec.parts || []).filter((p) =>
    TARGETS[item.group]?.test(`${p.name || ""} ${p.display_name_ko || ""}`));
}

/** Swap a catalogue component onto a spec part: dimensions, mass, reference. */
export function applyComponent(spec, partId, item) {
  const p = (spec.parts || []).find((x) => x.part_id === partId);
  if (!p) return false;
  const g = p.geometry;
  const [w, d, h] = [item.dims_mm[0], item.dims_mm[1], item.dims_mm[2]];
  // catalogue dims are L×W×H; the part keeps its builder, only resized
  const kx = w / (g.size_mm.w || 1), ky = h / (g.size_mm.h || 1);
  g.size_mm = { w, h, d };
  for (const key of ["outer_profile", "inner_profile"]) {
    for (const s of g[key] || []) {
      for (const pt of ["start", "end", "control1", "control2"]) {
        if (Array.isArray(s[pt])) { s[pt][0] *= kx; s[pt][1] *= ky; }
      }
      if (s.radius) s.radius *= Math.max(kx, ky);
    }
  }
  p.component_ref = { catalog_id: item.id, name: item.name, mass_g: item.mass_g, spec: item.spec };
  if (item.wh) p.component_ref.wh = item.wh;
  return true;
}

/** Add a catalogue component as a NEW part when the spec has no slot for it —
    which is exactly the state of a spec written before internals were
    mandatory. Placement is a body-relative heuristic the user can then edit. */
export function addComponentAsPart(spec, item) {
  const parts = spec.parts || (spec.parts = []);
  const body = parts.find((p) => /바디|본체|동체|body|fuselage|center/i.test(`${p.name} ${p.display_name_ko}`));
  const bg = body?.geometry;
  const bodyTop = bg ? (bg.center_mm?.y || 0) + (bg.size_mm?.h || 0) / 2 : 60;
  const bodyBottom = bg ? (bg.center_mm?.y || 0) - (bg.size_mm?.h || 0) / 2 : 30;
  const [w, d, h] = item.dims_mm;

  let y = bg ? bg.center_mm?.y || 50 : 50;
  if (item.group === "배터리") y = bodyBottom + h / 2 + 2;          // under-slung pack
  else if (item.group === "센서·탑재") y = Math.max(h / 2 + 4, bodyBottom - h / 2 - 6);
  else if (/gps|gnss|안테나/i.test(item.name)) y = bodyTop + h / 2 + 10;

  const id = `part_add_${parts.length + 1}`;
  parts.push({
    part_id: id, parent_part_id: body?.part_id || null,
    name: item.id, display_name_ko: item.name,
    semantic_role: "MECHANISM", visibility: "VISIBLE",
    representation_strategy: "PRIMITIVE",
    representation_reason: "부품 라이브러리에서 추가",
    editable: true, locked_characteristics: [],
    geometry: {
      builder: "BOX", plane: "FRONT",
      size_mm: { w, h, d },
      center_mm: { x: 0, y, z: 0 },
      outer_profile: null, inner_profile: null, corner_radius_mm: 2, repeat: null,
    },
    dimensions: [], features: [], material_id: null,
    component_ref: { catalog_id: item.id, name: item.name, mass_g: item.mass_g, spec: item.spec, ...(item.wh ? { wh: item.wh } : {}) },
    confidence: 1,
  });
  return id;
}

/** Mass budget: the sum of what has been chosen, said honestly. */
export function massBudget(spec) {
  let known = 0, withRef = 0, total = (spec.parts || []).length;
  for (const p of spec.parts || []) {
    if (p.component_ref?.mass_g) {
      const n = p.geometry?.repeat?.count || 1;
      known += p.component_ref.mass_g * n;
      withRef += 1;
    }
  }
  return { grams: known, partsWithMass: withRef, partsTotal: total };
}
