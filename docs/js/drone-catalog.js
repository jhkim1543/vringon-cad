/* ==========================================================================
   Component catalogue for spec editing.

   Masses and dimensions are approximate figures compiled from public
   manufacturer listings and community build tables (T-Motor/Hobbywing store
   pages, Holybro docs, Oscar Liang's motor/battery weight tables). They are
   catalogue reference values for design studies — 근사값 — not procurement
   data, and every entry says what it weighs so the mass budget stays a sum
   the user can audit.

   Every entry also says what it LOOKS like. Without that a swap could only
   resize whatever builder the part already carried: a battery came out as the
   canopy's measured loft at battery size, a gimbal as one bare sphere, and no
   choice of component changed anything but numbers.
   ========================================================================== */
import { loftAxis } from "./mesh-loft.js?v=8c817597";

/* ------------------------------------------------------------------ shapes
   A form is a stack of cross-sections along the part's loft axis. Both `w` and
   `h` are FRACTIONS of the part's own box, never millimetres — that is what
   keeps a swap inside the dimensions the entry declares, whatever those turn
   out to be. `fill` is how full the section is (0.79 an ellipse, 1.0 a
   rectangle); the builder turns it into a superellipse exponent, and it is the
   whole difference between a shrink-wrapped pack with soft corners and a
   machined block.

   The axis is not declared here. loftAxis() derives it from the box and the
   compiler calls the same function, so the two cannot disagree — a form
   written for a battery stacks along the pack's length because that is what
   its dimensions mean, not because a field said so. */
const sec = (at, w, h, fill) => ({ at, w, h, fill });

/** A pack in shrink wrap: a block whose corners the film will not take sharp,
    drawn in at both ends where it folds over. */
const packShape = (soft = 0.93) => ({
  builder: "LOFT",
  sections: [sec(0, 0.88, 0.88, soft - 0.08), sec(3, 1, 1, soft),
    sec(97, 1, 1, soft), sec(100, 0.88, 0.88, soft - 0.08)],
});

/** An outrunner: mounting base, a waist at the stator, the bell that carries
    the magnets, and the shaft standing proud of the top. */
const motorShape = ({ base = 0.72, waist = 0.56, bellFrom = 26, bellTo = 86,
  shaft = 0.13, shaftFrom = 93 } = {}) => ({
  builder: "LOFT",
  sections: [sec(0, base, base, 0.79), sec(6, base, base, 0.79),
    sec(11, waist, waist, 0.79), sec(bellFrom, 1, 1, 0.79), sec(bellTo, 1, 1, 0.79),
    sec(bellTo + 5, 0.88, 0.88, 0.79), sec(shaftFrom, shaft, shaft, 0.79),
    sec(100, shaft, shaft, 0.79)],
});

/** A gimbal head: the camera ball, the yoke above it, the plate it hangs from.
    One part and one loft — a part carries one geometry, and a swap that spawned
    extra parts would count the entry's mass once per lump in the budget. */
const gimbalShape = ({ eq = 32, ballTo = 52, armFrom = 62, armTo = 86,
  arm = 0.5, plate = 0.92, plateD = 0.66 } = {}) => ({
  builder: "LOFT",
  sections: [sec(0, 0.46, 0.5, 0.79), sec(8, 0.84, 0.86, 0.79), sec(eq, 1, 1, 0.79),
    sec(ballTo, 0.88, 0.9, 0.79), sec(armFrom, arm, arm + 0.04, 0.85),
    sec(armTo, arm, arm + 0.04, 0.85), sec(armTo + 6, plate, plateD, 0.95),
    sec(100, plate, plateD, 0.95)],
});

/** A camera: a case with a lens barrel standing out of one face. */
const cameraShape = ({ caseTo = 50, barrel = 0.62, front = 0.5 } = {}) => ({
  builder: "LOFT",
  sections: [sec(0, 0.9, 0.92, 0.93), sec(5, 1, 1, 0.93), sec(caseTo, 1, 1, 0.93),
    sec(caseTo + 6, barrel, barrel, 0.79), sec(94, barrel, barrel, 0.79),
    sec(100, front, front, 0.79)],
});

export const COMPONENT_CATALOG = [
  /* ----------------------------------------------------------- batteries */
  { id: "bat_4s_1500", group: "배터리", name: "4S 1500mAh LiPo", mass_g: 190,
    dims_mm: [75, 35, 30], spec: "14.8V · 22Wh · FPV/소형", wh: 22,
    shape: packShape() },
  { id: "bat_6s_1300", group: "배터리", name: "6S 1300mAh LiPo", mass_g: 230,
    dims_mm: [78, 38, 35], spec: "22.2V · 29Wh · 레이싱", wh: 29,
    shape: packShape() },
  { id: "bat_6s_5000", group: "배터리", name: "6S 5000mAh LiPo", mass_g: 650,
    dims_mm: [140, 48, 42], spec: "22.2V · 111Wh · 산업 소형", wh: 111,
    shape: packShape() },
  { id: "bat_6s_10000", group: "배터리", name: "6S 10000mAh LiPo", mass_g: 1250,
    dims_mm: [160, 65, 55], spec: "22.2V · 222Wh · 산업 중형", wh: 222,
    shape: packShape() },
  /* A pack this size ships in a hard case with a moulded handle, so its edges
     stand up where a wrapped pack's give way. */
  { id: "bat_12s_16000", group: "배터리", name: "12S 16000mAh LiPo", mass_g: 4300,
    dims_mm: [210, 95, 85], spec: "44.4V · 710Wh · 농업·중량물", wh: 710,
    shape: packShape(0.97) },
  /* Round cells under the wrap, so the section is nowhere near rectangular. */
  { id: "bat_li_ion_6s", group: "배터리", name: "6S Li-ion 팩 (21700)", mass_g: 850,
    dims_mm: [150, 75, 45], spec: "21.6V · 190Wh · 장기체공", wh: 190,
    shape: packShape(0.86) },

  /* -------------------------------------------------------------- motors */
  { id: "mot_2207", group: "모터", name: "2207 1750KV", mass_g: 34,
    dims_mm: [28, 28, 32], spec: "5인치 FPV · 최대추력 ~1.5kg",
    shape: motorShape() },
  { id: "mot_2814", group: "모터", name: "2814 900KV", mass_g: 110,
    dims_mm: [35, 35, 40], spec: "9~11인치 · 최대추력 ~2.5kg",
    shape: motorShape() },
  /* Pancake bells: wide and short, so the bell takes almost the whole height
     and the shaft has only a few millimetres left to stand in. */
  { id: "mot_4114", group: "모터", name: "4114 320KV", mass_g: 148,
    dims_mm: [46, 46, 25], spec: "15인치 · 최대추력 ~4kg",
    shape: motorShape({ base: 0.8, waist: 0.66, bellFrom: 20, bellTo: 76, shaft: 0.16, shaftFrom: 86 }) },
  { id: "mot_u8ii", group: "모터", name: "U8-스타일 170KV", mass_g: 240,
    dims_mm: [87, 87, 26], spec: "28인치 · 최대추력 ~8kg · 농업/중량물",
    shape: motorShape({ base: 0.5, waist: 0.44, bellFrom: 22, bellTo: 72, shaft: 0.1, shaftFrom: 84 }) },
  { id: "mot_cruise", group: "모터", name: "고정익 순항 모터 3520", mass_g: 180,
    dims_mm: [42, 42, 50], spec: "고정익 푸셔/트랙터",
    shape: motorShape({ bellTo: 78, shaft: 0.15, shaftFrom: 86 }) },

  /* ------------------------------------------------- FC · ESC · avionics */
  /* A stack is two boards on standoffs with the connectors on top — the gap
     between the layers is the thing that says "stack" rather than "block". */
  { id: "fc_f7_stack", group: "FC·ESC", name: "F7 FC + 4in1 ESC 스택", mass_g: 22,
    dims_mm: [37, 37, 16], spec: "30×30 마운트 · 소형기",
    shape: { builder: "LOFT", sections: [
      sec(0, 1, 1, 0.95), sec(16, 1, 1, 0.95),
      sec(20, 0.5, 0.5, 0.9), sec(48, 0.5, 0.5, 0.9),
      sec(52, 1, 1, 0.95), sec(72, 1, 1, 0.95),
      sec(78, 0.6, 0.55, 0.95), sec(100, 0.6, 0.55, 0.95)] } },
  /* A cased module: one milled box with the lid stepped in. */
  { id: "fc_pixhawk6x", group: "FC·ESC", name: "Pixhawk급 FC 모듈", mass_g: 60,
    dims_mm: [52, 103, 16], spec: "산업용 · 이중화 IMU",
    shape: { builder: "LOFT", sections: [
      sec(0, 0.92, 0.96, 0.95), sec(10, 1, 1, 0.95), sec(72, 1, 1, 0.95),
      sec(84, 0.9, 0.94, 0.93), sec(100, 0.86, 0.9, 0.9)] } },
  /* A board in heat-shrink with a lead bundle leaving each end. */
  { id: "esc_40a", group: "FC·ESC", name: "40A ESC (개당)", mass_g: 30,
    dims_mm: [55, 25, 10], spec: "산업 멀티로터 개별 ESC",
    shape: { builder: "LOFT", sections: [
      sec(0, 0.4, 0.3, 0.79), sec(6, 0.4, 0.3, 0.79),
      sec(12, 1, 1, 0.93), sec(88, 1, 1, 0.93),
      sec(94, 0.4, 0.3, 0.79), sec(100, 0.4, 0.3, 0.79)] } },
  /* Mast, then the puck, then the patch dome on top of it. */
  { id: "gps_m10", group: "FC·ESC", name: "GNSS 모듈 + 마스트", mass_g: 32,
    dims_mm: [50, 50, 60], spec: "M10 · 나침반 내장",
    shape: { builder: "LOFT", sections: [
      sec(0, 0.34, 0.34, 0.79), sec(52, 0.34, 0.34, 0.79),
      sec(58, 1, 1, 0.93), sec(82, 1, 1, 0.93),
      sec(88, 0.82, 0.82, 0.85), sec(100, 0.5, 0.5, 0.79)] } },

  /* ------------------------------------------------------ sensors · pay */
  { id: "cam_fpv", group: "센서·탑재", name: "FPV 카메라 + VTX", mass_g: 25,
    dims_mm: [20, 20, 25], spec: "아날로그/디지털 소형",
    shape: cameraShape({ caseTo: 46, barrel: 0.62, front: 0.46 }) },
  { id: "cam_gimbal_small", group: "센서·탑재", name: "소형 3축 짐벌 카메라", mass_g: 220,
    dims_mm: [70, 60, 90], spec: "1/2.3인치 · 점검/촬영",
    shape: gimbalShape() },
  /* A zoom head is mostly ball: the barrel lives inside it. */
  { id: "cam_zoom", group: "센서·탑재", name: "30배 줌 짐벌 카메라", mass_g: 550,
    dims_mm: [110, 100, 140], spec: "점검·수색 표준",
    shape: gimbalShape({ eq: 34, ballTo: 58, armFrom: 66, armTo: 88, arm: 0.46 }) },
  { id: "cam_thermal", group: "센서·탑재", name: "열화상 듀얼 짐벌", mass_g: 380,
    dims_mm: [100, 90, 120], spec: "640×512 · 수색/화재",
    shape: gimbalShape({ eq: 30, ballTo: 54, armFrom: 64, armTo: 86 }) },
  /* Scanner drum below, housing above, mount neck on top. */
  { id: "lidar_survey", group: "센서·탑재", name: "측량 LiDAR 모듈", mass_g: 900,
    dims_mm: [120, 110, 100], spec: "측량·매핑 (근사 중량)",
    shape: { builder: "LOFT", sections: [
      sec(0, 0.72, 0.72, 0.79), sec(10, 0.86, 0.86, 0.79), sec(34, 0.86, 0.86, 0.79),
      sec(42, 1, 1, 0.9), sec(84, 1, 1, 0.9),
      sec(92, 0.8, 0.8, 0.9), sec(100, 0.66, 0.66, 0.9)] } },
  { id: "cam_mapping", group: "센서·탑재", name: "측량 RGB 카메라 (하방)", mass_g: 170,
    dims_mm: [70, 60, 55], spec: "2000만 화소 · 기계식 셔터",
    shape: cameraShape({ caseTo: 58, barrel: 0.6, front: 0.52 }) },
  /* Inlet fitting, pump body, then the manifold the nozzles hang off. */
  { id: "spray_pump", group: "센서·탑재", name: "살포 펌프 + 노즐 4", mass_g: 800,
    dims_mm: [150, 100, 80], spec: "농업 · 4L/min급",
    shape: { builder: "LOFT", sections: [
      sec(0, 0.5, 0.45, 0.79), sec(7, 0.5, 0.45, 0.79),
      sec(14, 1, 1, 0.9), sec(70, 1, 1, 0.9),
      sec(78, 0.72, 0.7, 0.85), sec(92, 0.72, 0.7, 0.85),
      sec(100, 0.4, 0.38, 0.79)] } },
  /* Housing with the spool face and the cable exit on one side. */
  { id: "drop_winch", group: "센서·탑재", name: "배송 윈치 모듈", mass_g: 600,
    dims_mm: [120, 100, 110], spec: "화물 하강 릴리즈",
    shape: { builder: "LOFT", sections: [
      sec(0, 0.9, 0.9, 0.9), sec(8, 1, 1, 0.92), sec(70, 1, 1, 0.92),
      sec(80, 0.78, 0.78, 0.85), sec(94, 0.66, 0.66, 0.79), sec(100, 0.5, 0.5, 0.79)] } },
  /* Base plate, mast, radome — the mast is the part that makes it an antenna
     and not a box on a stalk. */
  { id: "antenna_relay", group: "센서·탑재", name: "통신 중계 안테나 세트", mass_g: 260,
    dims_mm: [60, 60, 180], spec: "듀얼밴드 · 레이돔",
    shape: { builder: "LOFT", sections: [
      sec(0, 1, 1, 0.93), sec(6, 1, 1, 0.93),
      sec(10, 0.3, 0.3, 0.79), sec(62, 0.3, 0.3, 0.79),
      sec(68, 0.78, 0.78, 0.79), sec(92, 0.78, 0.78, 0.79),
      sec(100, 0.44, 0.44, 0.79)] } },
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

/* The two extents that are not the loft axis, in the order the builder reads
   them off a station: w_mm is the lower-indexed of w/h/d and h_mm the other. */
function crossExtents(size) {
  const ax = loftAxis(size);
  return [size.w, size.h, size.d].filter((_, i) => i !== ax);
}

/** A catalogue form scaled onto a box, as loft stations in millimetres. */
function loftSectionsFor(shape, size) {
  const cross = crossExtents(size);
  /* dims_mm is the component's envelope, so the widest station is the one that
     touches it. Normalising here means a fraction table that never reaches 1
     cannot quietly deliver a part smaller than the size it declares. */
  const mw = Math.max(...shape.sections.map((s) => s.w));
  const mh = Math.max(...shape.sections.map((s) => s.h));
  return shape.sections.map((s) => ({
    at_pct: s.at,
    w_mm: +(cross[0] * (s.w / mw)).toFixed(2),
    h_mm: +(cross[1] * (s.h / mh)).toFixed(2),
    fill: s.fill,
  }));
}

/** Write a catalogue entry's own form onto a part's geometry. */
function applyShape(g, item) {
  if (item.shape) {
    g.builder = item.shape.builder;
    g.loft_sections = item.shape.builder === "LOFT" ? loftSectionsFor(item.shape, g.size_mm) : null;
    /* The outline belonged to the part that stood here before. Keeping it would
       leave the JSON describing one shape while the model shows another. */
    g.outer_profile = null;
    g.inner_profile = null;
    return;
  }
  /* An entry with no form of its own — then at least do not leave the previous
     part's loft stations behind. They are absolute millimetres measured off a
     different object, and the LOFT builder takes BOTH cross-section dimensions
     from them, reading only the axial length out of size_mm. That is why a
     battery swapped for a 140×48×42 pack came out 140 × 12.3 × 125.8: one
     dimension of three arrived and the other two stayed with the old part. */
  if (g.builder === "LOFT") g.builder = "ROUNDED_BOX";
  g.loft_sections = null;
}

/** Swap a catalogue component onto a spec part: form, dimensions, mass, reference. */
export function applyComponent(spec, partId, item) {
  const p = (spec.parts || []).find((x) => x.part_id === partId);
  if (!p) return false;
  const g = p.geometry;
  const [w, d, h] = [item.dims_mm[0], item.dims_mm[1], item.dims_mm[2]];
  // catalogue dims are L×W×H; the part keeps its place in the assembly
  const kx = w / (g.size_mm.w || 1), ky = h / (g.size_mm.h || 1);
  g.size_mm = { w, h, d };
  /* Only a formless entry has anything to carry across from the old part: when
     the catalogue states the shape, the old outline is replaced, not stretched. */
  if (!item.shape) {
    for (const key of ["outer_profile", "inner_profile"]) {
      for (const s of g[key] || []) {
        for (const pt of ["start", "end", "control1", "control2"]) {
          if (Array.isArray(s[pt])) { s[pt][0] *= kx; s[pt][1] *= ky; }
        }
        if (s.radius) s.radius *= Math.max(kx, ky);
      }
    }
  }
  applyShape(g, item);
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
  /* Same form a swap would produce. An added component and a replaced one are
     the same object, and a box here would make the two disagree on what a
     catalogue entry looks like. BOX is what a formless entry falls back to. */
  const geometry = {
    builder: "BOX", plane: "FRONT",
    size_mm: { w, h, d },
    center_mm: { x: 0, y, z: 0 },
    outer_profile: null, inner_profile: null, corner_radius_mm: 2, repeat: null,
  };
  applyShape(geometry, item);
  parts.push({
    part_id: id, parent_part_id: body?.part_id || null,
    name: item.id, display_name_ko: item.name,
    semantic_role: "MECHANISM", visibility: "VISIBLE",
    representation_strategy: "PRIMITIVE",
    representation_reason: "부품 라이브러리에서 추가",
    editable: true, locked_characteristics: [],
    geometry,
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
