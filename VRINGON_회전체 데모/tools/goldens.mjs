/* 골든 DSL 12종 — 손으로 쓴 정답. 모든 마일스톤의 회귀 테스트이자 few-shot 예시이자 공개 데모 샘플이다.
   단순 핀·스페이서에서 홈+나사+키홈 복합 축까지 난이도가 오른다. 값은 실제 규격(DIN 471/6885/332/76, ISO 261)을 따른다. */

export const GOLDENS = [
  {
    dsl: "vringon-shaft/1.0", id: "spacer", name: "Spacer sleeve", name_ko: "스페이서", part_class: "spacer", units: "mm", material: "A6061",
    drawing: { number: "VR-RB-001", scale: "2:1", projection: "third" },
    segments: [{ type: "cyl", length: 12, diameter: 24 }],
    transitions: [{ at: 0, type: "chamfer", size: 0.5 }, { at: 1, type: "chamfer", size: 0.5 }],
    grooves: [], bore: { through: true, segments: [{ length: 12, diameter: 16, tolerance: "H8" }], chamfer_left: 0.5, chamfer_right: 0.5 }, features: [],
    meta: { source: "golden", difficulty: 1 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "clevis-pin", name: "Clevis pin", name_ko: "클레비스 핀", part_class: "pin", units: "mm", material: "S45C",
    drawing: { number: "VR-RB-002", scale: "2:1", projection: "third" },
    segments: [{ type: "cyl", length: 3, diameter: 16 }, { type: "cyl", length: 48, diameter: 12, tolerance: "h11" }],
    transitions: [{ at: 0, type: "chamfer", size: 0.5 }, { at: 2, type: "chamfer", size: 1 }],
    grooves: [], bore: null,
    features: [{ type: "cross_hole", position: 44, diameter: 3.2, through: true, angle: 0 }],
    meta: { source: "golden", difficulty: 1 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "bushing", name: "Plain bushing", name_ko: "부시", part_class: "bushing", units: "mm", material: "C3604",
    drawing: { number: "VR-RB-003", scale: "2:1", projection: "third" },
    segments: [{ type: "cyl", length: 25, diameter: 30, tolerance: "m6" }],
    transitions: [{ at: 0, type: "chamfer", size: 0.5 }, { at: 1, type: "chamfer", size: 0.5 }],
    grooves: [], bore: { through: true, segments: [{ length: 25, diameter: 25, tolerance: "H7" }], chamfer_left: 0.5, chamfer_right: 0.5 },
    features: [{ type: "cross_hole", position: 12.5, diameter: 2.5, through: false, depth: 3.5, angle: 90 }],
    meta: { source: "golden", difficulty: 2 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "flanged-bushing", name: "Flanged bushing", name_ko: "플랜지 부시", part_class: "bushing", units: "mm", material: "PBC2",
    drawing: { number: "VR-RB-004", scale: "2:1", projection: "third" },
    segments: [{ type: "cyl", length: 5, diameter: 40 }, { type: "cyl", length: 25, diameter: 30, tolerance: "n6" }],
    transitions: [{ at: 0, type: "chamfer", size: 0.5 }, { at: 1, type: "chamfer", size: 0.5 }, { at: 2, type: "chamfer", size: 0.5 }],
    grooves: [], bore: { through: true, segments: [{ length: 30, diameter: 22, tolerance: "H7" }], chamfer_left: 0.5, chamfer_right: 0.5 }, features: [],
    meta: { source: "golden", difficulty: 2 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "roller", name: "Roller with stub axles", name_ko: "롤러", part_class: "roller", units: "mm", material: "SUS304",
    drawing: { number: "VR-RB-005", scale: "1:1", projection: "third" },
    segments: [
      { type: "cyl", length: 20, diameter: 20, tolerance: "h6", label: "베어링 자리" },
      { type: "cyl", length: 70, diameter: 45, roughness: "Ra 0.8" },
      { type: "cyl", length: 20, diameter: 20, tolerance: "h6", label: "베어링 자리" },
    ],
    transitions: [{ at: 0, type: "chamfer", size: 1.5 }, { at: 3, type: "chamfer", size: 1.5 }, { at: 1, type: "fillet", radius: 1.5 }, { at: 2, type: "fillet", radius: 1.5 }, { at: 1, type: "chamfer", size: 1 }, { at: 2, type: "chamfer", size: 1 }],
    grooves: [
      { segment: 0, offset: 6, width: 1.3, depth: 0.5, kind: "snap_ring", standard: "DIN 471 ⌀19×1.3" },
      { segment: 2, offset: 12.7, width: 1.3, depth: 0.5, kind: "snap_ring", standard: "DIN 471 ⌀19×1.3" },
    ],
    bore: null,
    features: [{ type: "center_hole", end: "left", form: "A", d: 2 }, { type: "center_hole", end: "right", form: "A", d: 2 }],
    meta: { source: "golden", difficulty: 3 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "hex-stud", name: "Hex stepped stud", name_ko: "육각 단붙이 축", part_class: "shaft", units: "mm", material: "SUS303",
    drawing: { number: "VR-RB-006", scale: "2:1", projection: "third" },
    segments: [{ type: "cyl", length: 15, diameter: 20 }, { type: "cyl", length: 30, diameter: 12, tolerance: "h6" }, { type: "thread", length: 12, diameter: 10, spec: "M10", pitch: 1.5 }],
    transitions: [{ at: 0, type: "chamfer", size: 1 }, { at: 1, type: "fillet", radius: 1 }, { at: 3, type: "chamfer", size: 1.5 }],
    grooves: [], bore: null,
    features: [{ type: "hex", segment: 0, across_flats: 17 }, { type: "flat", segment: 1, offset: 5, length: 12, depth: 1.5, count: 1 }],
    meta: { source: "golden", difficulty: 3 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "threaded-shaft", name: "Double-threaded shaft", name_ko: "양단 나사 축", part_class: "shaft", units: "mm", material: "S45C",
    drawing: { number: "VR-RB-007", scale: "1:1", projection: "third" },
    segments: [
      { type: "thread", length: 20, diameter: 12, spec: "M12", pitch: 1.75 },
      { type: "cyl", length: 60, diameter: 16, tolerance: "h7" },
      { type: "cyl", length: 20, diameter: 14 },
      { type: "thread", length: 18, diameter: 12, spec: "M12x1.25", pitch: 1.25 },
    ],
    transitions: [
      { at: 0, type: "chamfer", size: 1.5 }, { at: 4, type: "chamfer", size: 1.5 },
      { at: 1, type: "undercut", width: 5.25, depth: 1.3, standard: "DIN 76-A" }, { at: 3, type: "undercut", width: 3.75, depth: 0.94, standard: "DIN 76-A" },
      { at: 2, type: "fillet", radius: 0.5 },
    ],
    grooves: [], bore: null,
    features: [{ type: "cross_hole", position: 90, diameter: 3, through: true, angle: 0 }],
    meta: { source: "golden", difficulty: 3 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "sleeve", name: "Stepped-bore sleeve", name_ko: "슬리브", part_class: "sleeve", units: "mm", material: "SUJ2",
    drawing: { number: "VR-RB-008", scale: "1:1", projection: "third" },
    segments: [{ type: "cyl", length: 60, diameter: 40, tolerance: "h6" }],
    transitions: [{ at: 0, type: "chamfer", size: 0.5 }, { at: 1, type: "chamfer", size: 0.5 }],
    grooves: [{ segment: 0, offset: 15, width: 2.4, depth: 1.9, kind: "o_ring", corner_radius: 0.2 }],
    bore: { through: true, segments: [{ length: 20, diameter: 30, tolerance: "H7" }, { length: 40, diameter: 28 }], chamfer_left: 0.5, chamfer_right: 0.5 },
    features: [],
    meta: { source: "golden", difficulty: 3 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "taper-shaft", name: "Taper shaft with keyway", name_ko: "테이퍼 축", part_class: "shaft", units: "mm", material: "SCM440",
    drawing: { number: "VR-RB-009", scale: "1:1", projection: "third" },
    segments: [
      { type: "cyl", length: 35, diameter: 25, tolerance: "k6" },
      { type: "taper", length: 40, d_start: 25, d_end: 20 },
      { type: "thread", length: 20, diameter: 16, spec: "M16x1.5", pitch: 1.5 },
    ],
    transitions: [{ at: 0, type: "chamfer", size: 1 }, { at: 3, type: "chamfer", size: 1.5 }, { at: 2, type: "undercut", width: 4.5, depth: 1.1, standard: "DIN 76-A" }],
    grooves: [], bore: null,
    features: [
      { type: "keyway", segment: 0, offset: 8, length: 20, width: 8, depth: 4, kind: "parallel", standard: "DIN 6885 8×7" },
      { type: "center_hole", end: "left", form: "A", d: 2.5 },
    ],
    meta: { source: "golden", difficulty: 4 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "motor-shaft", name: "Motor output shaft", name_ko: "모터 축", part_class: "shaft", units: "mm", material: "S45C",
    drawing: { number: "VR-RB-010", scale: "1:1", projection: "third" },
    segments: [
      { type: "cyl", length: 25, diameter: 15, tolerance: "j6", label: "베어링 자리" },
      { type: "cyl", length: 40, diameter: 17 },
      { type: "cyl", length: 60, diameter: 20, label: "로터 자리" },
      { type: "cyl", length: 40, diameter: 17 },
      { type: "cyl", length: 25, diameter: 15, tolerance: "j6", label: "베어링 자리" },
      { type: "cyl", length: 15, diameter: 12, tolerance: "h7", label: "출력 축" },
    ],
    transitions: [{ at: 0, type: "chamfer", size: 1 }, { at: 6, type: "chamfer", size: 1 }, { at: 1, type: "fillet", radius: 0.5 }, { at: 2, type: "fillet", radius: 1 }, { at: 3, type: "fillet", radius: 1 }, { at: 4, type: "fillet", radius: 0.5 }, { at: 5, type: "fillet", radius: 0.5 }],
    grooves: [{ segment: 4, offset: 4, width: 1.1, depth: 0.35, kind: "snap_ring", standard: "DIN 471 ⌀14.3×1.1" }],
    bore: null,
    features: [
      { type: "keyway", segment: 2, offset: 15, length: 30, width: 6, depth: 3.5, kind: "parallel", standard: "DIN 6885 6×6" },
      { type: "flat", segment: 5, offset: 2, length: 12, depth: 1.5, count: 1 },
      { type: "center_hole", end: "left", form: "A", d: 2 }, { type: "center_hole", end: "right", form: "A", d: 2 },
    ],
    meta: { source: "golden", difficulty: 4 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "stepped-shaft", name: "Stepped shaft (showcase)", name_ko: "단붙이 축", part_class: "shaft", units: "mm", material: "S45C",
    drawing: { number: "VR-RB-011", scale: "1:1", projection: "third" },
    segments: [
      { type: "cyl", length: 30, diameter: 20, tolerance: "h6", label: "베어링 자리" },
      { type: "cyl", length: 40, diameter: 30, label: "기어 자리" },
      { type: "taper", length: 10, d_start: 30, d_end: 25 },
      { type: "thread", length: 20, diameter: 20, spec: "M20x1.5", pitch: 1.5 },
    ],
    transitions: [
      { at: 0, type: "chamfer", size: 1 }, { at: 1, type: "fillet", radius: 1.5 }, { at: 1, type: "chamfer", size: 1 },
      { at: 3, type: "undercut", width: 4.5, depth: 1.1, standard: "DIN 76-A" }, { at: 4, type: "chamfer", size: 1.5 },
    ],
    grooves: [{ segment: 1, offset: 10, width: 1.6, depth: 0.7, kind: "snap_ring", standard: "DIN 471 ⌀28.6×1.6" }],
    bore: null,
    features: [
      { type: "keyway", segment: 1, offset: 15, length: 20, width: 8, depth: 4, kind: "parallel", standard: "DIN 6885 8×7" },
      { type: "center_hole", end: "left", form: "A", d: 2.5 }, { type: "center_hole", end: "right", form: "A", d: 2 },
      { type: "cross_hole", position: 50, diameter: 4, through: true, angle: 0 },
    ],
    meta: { source: "golden", difficulty: 5 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "spindle", name: "Small spindle", name_ko: "스핀들", part_class: "spindle", units: "mm", material: "SCM415",
    drawing: { number: "VR-RB-012", scale: "1:1", projection: "third" },
    segments: [
      { type: "thread", length: 14, diameter: 12, spec: "M12x1", pitch: 1 },
      { type: "cyl", length: 8, diameter: 14 },
      { type: "cyl", length: 20, diameter: 15, tolerance: "j5", label: "베어링 자리" },
      { type: "cyl", length: 45, diameter: 18 },
      { type: "cyl", length: 20, diameter: 15, tolerance: "j5", label: "베어링 자리" },
      { type: "cyl", length: 12, diameter: 14, tolerance: "h6" },
    ],
    transitions: [
      { at: 0, type: "chamfer", size: 1 }, { at: 6, type: "chamfer", size: 0.5 },
      { at: 1, type: "undercut", width: 3, depth: 0.75, standard: "DIN 76-A" },
      { at: 2, type: "fillet", radius: 0.5 }, { at: 3, type: "fillet", radius: 0.5 }, { at: 4, type: "fillet", radius: 0.5 }, { at: 5, type: "fillet", radius: 0.5 },
    ],
    grooves: [{ segment: 5, offset: 3, width: 1.1, depth: 0.35, kind: "snap_ring", standard: "DIN 471 ⌀13.4×1.1" }],
    bore: null,
    features: [
      { type: "keyway", segment: 3, offset: 12, length: 20, width: 6, depth: 3.5, kind: "parallel", standard: "DIN 6885 6×6" },
      { type: "center_hole", end: "right", form: "A", d: 2 },
    ],
    meta: { source: "golden", difficulty: 5 },
  },
  /* ---- 나사류 (볼트·스크루·스터드): ISO 4014/4762/4026/10642/DIN 938 근사 치수 ---- */
  {
    dsl: "vringon-shaft/1.0", id: "hex-bolt-m10", name: "Hex bolt M10x40", name_ko: "육각 볼트 M10×40", part_class: "other", units: "mm", material: "SCM435",
    drawing: { number: "VR-RB-013", scale: "2:1", projection: "third" },
    segments: [{ type: "cyl", length: 6.4, diameter: 18.48, label: "육각 머리" }, { type: "cyl", length: 14, diameter: 10 }, { type: "thread", length: 26, diameter: 10, spec: "M10", pitch: 1.5 }],
    transitions: [{ at: 0, type: "chamfer", size: 1, angle: 30 }, { at: 1, type: "fillet", radius: 0.6 }, { at: 3, type: "chamfer", size: 1.5 }],
    grooves: [], bore: null,
    features: [{ type: "hex", segment: 0, across_flats: 16 }],
    meta: { source: "golden", difficulty: 3 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "socket-cap-m8", name: "Socket head cap screw M8x30", name_ko: "육각구멍붙이 볼트 M8×30", part_class: "other", units: "mm", material: "SCM435",
    drawing: { number: "VR-RB-014", scale: "2:1", projection: "third" },
    segments: [{ type: "cyl", length: 8, diameter: 13, label: "원통 머리" }, { type: "cyl", length: 8, diameter: 8 }, { type: "thread", length: 22, diameter: 8, spec: "M8", pitch: 1.25 }],
    transitions: [{ at: 0, type: "chamfer", size: 0.5 }, { at: 1, type: "fillet", radius: 0.5 }, { at: 3, type: "chamfer", size: 1 }],
    grooves: [], bore: null,
    features: [{ type: "hex_socket", end: "left", across_flats: 6, depth: 4 }],
    meta: { source: "golden", difficulty: 3 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "set-screw-m6", name: "Socket set screw M6x12", name_ko: "세트 스크루 M6×12", part_class: "other", units: "mm", material: "S45C",
    drawing: { number: "VR-RB-015", scale: "5:1", projection: "third" },
    segments: [{ type: "thread", length: 12, diameter: 6, spec: "M6", pitch: 1 }],
    transitions: [{ at: 0, type: "chamfer", size: 0.5 }, { at: 1, type: "chamfer", size: 1 }],
    grooves: [], bore: null,
    features: [{ type: "hex_socket", end: "left", across_flats: 3, depth: 3 }],
    meta: { source: "golden", difficulty: 2 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "countersunk-m6", name: "Countersunk socket screw M6x20", name_ko: "접시머리 나사 M6×20", part_class: "other", units: "mm", material: "SUS304",
    drawing: { number: "VR-RB-016", scale: "5:1", projection: "third" },
    segments: [{ type: "taper", length: 3.3, d_start: 12, d_end: 6, label: "접시 머리 90°" }, { type: "thread", length: 20, diameter: 6, spec: "M6", pitch: 1 }],
    transitions: [{ at: 2, type: "chamfer", size: 1 }],
    grooves: [], bore: null,
    features: [{ type: "hex_socket", end: "left", across_flats: 4, depth: 2 }],
    meta: { source: "golden", difficulty: 3 },
  },
  {
    dsl: "vringon-shaft/1.0", id: "stud-m12", name: "Double-end stud M12x60", name_ko: "스터드 볼트 M12×60", part_class: "other", units: "mm", material: "SCM435",
    drawing: { number: "VR-RB-017", scale: "1:1", projection: "third" },
    segments: [{ type: "thread", length: 15, diameter: 12, spec: "M12", pitch: 1.75, label: "식입측" }, { type: "cyl", length: 23, diameter: 12 }, { type: "thread", length: 22, diameter: 12, spec: "M12", pitch: 1.75, label: "너트측" }],
    transitions: [{ at: 0, type: "chamfer", size: 1.5 }, { at: 3, type: "chamfer", size: 1.5 }],
    grooves: [], bore: null, features: [],
    meta: { source: "golden", difficulty: 2 },
  },

  /* ------------------------------------------------------------------ 2차 추가 8종 / second batch of eight
     부품 유형 선택기에 있는 유형마다 예시가 최소 한 장은 있게 채운 것들이다.
     Filled in so that every part type in the picker has at least one example drawing.
     · flange 유형은 여기 오기 전까지 예시가 하나도 없었다 / the flange type had no example at all
     · 핀·볼트·손잡이·로드·스풀·칼라가 나머지 결합 방식을 덮는다
       pins, bolts, knobs, rods, spools and collars cover the remaining mating styles */
  {
    /* 허브 플랜지 — 원판 + 허브 + 관통 보어. 볼트 원 구멍은 아직 표현하지 않는 형상이라 일부러 넣지 않았다.
       Hub flange: disc, hub and a through bore. Bolt circle holes are not a modelled feature yet,
       so this drawing deliberately has none. */
    dsl: "vringon-shaft/1.0", id: "hub-flange", name: "Hub flange", name_ko: "허브 플랜지", part_class: "flange", units: "mm", material: "S45C",
    drawing: { number: "VR-RB-018", scale: "1:1", projection: "third" },
    segments: [
      { type: "cyl", length: 10, diameter: 72, label: "플랜지" },
      { type: "cyl", length: 6, diameter: 46 },
      { type: "cyl", length: 22, diameter: 40, tolerance: "h7", label: "허브" },
    ],
    transitions: [{ at: 0, type: "chamfer", size: 1 }, { at: 1, type: "fillet", radius: 2 }, { at: 2, type: "fillet", radius: 1.5 }, { at: 3, type: "chamfer", size: 1 }],
    grooves: [{ segment: 2, offset: 14, width: 1.75, depth: 0.75, kind: "snap_ring", standard: "DIN 471 ⌀38.5×1.75" }],
    /* 허브 ⌀40 · 보어 ⌀20: 키홈 깊이 4 를 파고도 살이 6 남는다. ⌀34 로 했더니 남는 살이 3 뿐이라
       도면에서 그 부분이 너무 얇아, 해상도에 따라 외형선이 끊겨 위아래 반쪽 짝짓기가 실패했다.
       Hub ⌀40 with a ⌀20 bore leaves 6 of wall under the 4 deep keyway. At ⌀34 only 3 was left; that
       is so thin on the drawing that the outline broke at some resolutions and the mirror halves of
       the section stopped pairing up. */
    bore: { through: true, segments: [{ length: 38, diameter: 20, tolerance: "H7" }], chamfer_left: 1, chamfer_right: 1 },
    features: [{ type: "keyway", segment: 2, offset: 4, length: 16, width: 8, depth: 4, kind: "parallel", standard: "DIN 6885 8×7" }],
    meta: { source: "golden", difficulty: 3 },
  },
  {
    /* 평행핀 — 가장 단순한 회전체. 판독 정확도의 바닥을 재는 기준으로 쓴다.
       Parallel dowel pin: the simplest turned part there is, used as the floor of the accuracy range. */
    dsl: "vringon-shaft/1.0", id: "dowel-pin", name: "Parallel dowel pin", name_ko: "평행핀", part_class: "pin", units: "mm", material: "SUJ2",
    drawing: { number: "VR-RB-019", scale: "2:1", projection: "third" },
    segments: [{ type: "cyl", length: 40, diameter: 8, tolerance: "m6" }],
    transitions: [{ at: 0, type: "chamfer", size: 0.8 }, { at: 1, type: "chamfer", size: 0.8 }],
    grooves: [], bore: null, features: [],
    meta: { source: "golden", difficulty: 1 },
  },
  {
    /* 테이퍼 핀 1:50 — 테이퍼 하나로만 이루어진 부품. 양 끝 지름 두 개를 제대로 읽는지 본다.
       1:50 taper pin: one tapered segment only, which tests reading both end diameters. */
    dsl: "vringon-shaft/1.0", id: "taper-pin", name: "Taper pin 1:50", name_ko: "테이퍼 핀", part_class: "pin", units: "mm", material: "S45C",
    drawing: { number: "VR-RB-020", scale: "2:1", projection: "third" },
    segments: [{ type: "taper", length: 45, d_start: 8, d_end: 8.9, label: "1:50 테이퍼" }],
    transitions: [{ at: 0, type: "round", radius: 0.8 }, { at: 1, type: "round", radius: 1 }],
    grooves: [], bore: null, features: [],
    meta: { source: "golden", difficulty: 2 },
  },
  {
    /* 숄더 볼트 — 매끈한 숄더가 베어링·부시 자리이고 끝만 나사다. 나사 비율이 낮아
       유형 추정이 볼트가 아니라 축으로 기울 수 있는 경계 사례이기도 하다.
       Shoulder bolt: the ground shoulder is the bearing surface and only the tip is threaded.
       Its low thread ratio also makes it a boundary case for type inference. */
    dsl: "vringon-shaft/1.0", id: "shoulder-bolt", name: "Shoulder bolt M8", name_ko: "숄더 볼트 M8", part_class: "other", units: "mm", material: "SCM435",
    drawing: { number: "VR-RB-021", scale: "2:1", projection: "third" },
    segments: [
      { type: "cyl", length: 7, diameter: 16, label: "머리" },
      { type: "cyl", length: 30, diameter: 12, tolerance: "h8", label: "숄더" },
      { type: "thread", length: 12, diameter: 8, spec: "M8", pitch: 1.25 },
    ],
    transitions: [{ at: 0, type: "chamfer", size: 0.6 }, { at: 1, type: "chamfer", size: 0.6 }, { at: 2, type: "undercut", width: 2.4, depth: 0.6, standard: "DIN 76-A" }, { at: 3, type: "chamfer", size: 1 }],
    grooves: [], bore: null,
    features: [{ type: "hex_socket", end: "left", across_flats: 8, depth: 4 }],
    meta: { source: "golden", difficulty: 3 },
  },
  {
    /* 널링 손잡이 나사 — 손으로 조이는 부품. 널링 표기를 읽는지 보는 유일한 샘플이다.
       Knurled thumb screw: hand tightened. The only sample that exercises knurl notation. */
    dsl: "vringon-shaft/1.0", id: "knurled-knob", name: "Knurled thumb screw", name_ko: "널링 손잡이 나사", part_class: "other", units: "mm", material: "SUS303",
    drawing: { number: "VR-RB-022", scale: "2:1", projection: "third" },
    segments: [
      { type: "cyl", length: 14, diameter: 20, label: "손잡이" },
      { type: "taper", length: 3, d_start: 20, d_end: 12 },
      { type: "thread", length: 16, diameter: 8, spec: "M8", pitch: 1.25 },
    ],
    transitions: [{ at: 0, type: "chamfer", size: 1 }, { at: 2, type: "chamfer", size: 0.5 }, { at: 3, type: "chamfer", size: 1 }],
    grooves: [], bore: null,
    features: [{ type: "knurl", segment: 0, offset: 1.5, length: 11, pitch: 0.8, pattern: "diamond" }],
    meta: { source: "golden", difficulty: 3 },
  },
  {
    /* 피스톤 로드 — 양 끝이 다르게 끝난다(한쪽은 나사, 한쪽은 클레비스 구멍). 스패너 걸이 평면과
       멈춤링 홈까지 있어 조립 시뮬레이션이 가장 많이 걸리는 샘플이다.
       Piston rod: the two ends finish differently (thread one side, clevis hole the other).
       With a spanner flat and a retaining groove it drives more assembly mates than any other sample. */
    dsl: "vringon-shaft/1.0", id: "piston-rod", name: "Piston rod", name_ko: "피스톤 로드", part_class: "shaft", units: "mm", material: "SUS304",
    drawing: { number: "VR-RB-023", scale: "1:1", projection: "third" },
    segments: [
      { type: "thread", length: 18, diameter: 14, spec: "M14x1.5", pitch: 1.5 },
      { type: "cyl", length: 12, diameter: 18 },
      { type: "cyl", length: 70, diameter: 16, tolerance: "f7", label: "실링 면" },
      { type: "cyl", length: 20, diameter: 20 },
    ],
    transitions: [
      { at: 0, type: "chamfer", size: 1.5 }, { at: 1, type: "undercut", width: 3, depth: 0.8, standard: "DIN 76-A" },
      { at: 2, type: "fillet", radius: 1 }, { at: 3, type: "fillet", radius: 1.5 }, { at: 4, type: "chamfer", size: 1 },
    ],
    grooves: [{ segment: 2, offset: 6, width: 1.6, depth: 0.7, kind: "snap_ring", standard: "DIN 471 ⌀14.6×1.6" }],
    bore: null,
    features: [
      { type: "flat", segment: 1, offset: 2, length: 8, depth: 2, count: 2 },
      { type: "cross_hole", position: 110, diameter: 8, through: true, angle: 0 },
      { type: "center_hole", end: "right", form: "B", d: 2.5 },
    ],
    meta: { source: "golden", difficulty: 5 },
  },
  {
    /* 밸브 스풀 — 홈(랜드)이 여럿이라 홈을 몇 개나 읽어 내는지 세기 좋다.
       Valve spool: several lands, so it counts how many grooves a reader actually finds. */
    dsl: "vringon-shaft/1.0", id: "valve-spool", name: "Valve spool", name_ko: "밸브 스풀", part_class: "spindle", units: "mm", material: "SUJ2",
    drawing: { number: "VR-RB-024", scale: "2:1", projection: "third" },
    segments: [
      { type: "cyl", length: 8, diameter: 8, label: "조작단" },
      { type: "cyl", length: 62, diameter: 14, tolerance: "g6", label: "랜드" },
      { type: "cyl", length: 6, diameter: 8 },
    ],
    transitions: [{ at: 0, type: "chamfer", size: 0.5 }, { at: 1, type: "fillet", radius: 0.6 }, { at: 2, type: "fillet", radius: 0.6 }, { at: 3, type: "chamfer", size: 0.5 }],
    grooves: [
      { segment: 1, offset: 10, width: 6, depth: 2.5, kind: "generic", corner_radius: 0.4 },
      { segment: 1, offset: 28, width: 6, depth: 2.5, kind: "generic", corner_radius: 0.4 },
      { segment: 1, offset: 46, width: 6, depth: 2.5, kind: "generic", corner_radius: 0.4 },
    ],
    bore: null,
    features: [{ type: "center_hole", end: "left", form: "A", d: 2 }],
    meta: { source: "golden", difficulty: 4 },
  },
  {
    /* 세트 스크루 칼라 — 축에 끼워 위치를 잡는 부품. 보어 + 횡구멍(세트 스크루 자리) 조합이다.
       Set screw collar: clamps onto a shaft. Combines a bore with a cross hole for the screw. */
    dsl: "vringon-shaft/1.0", id: "shaft-collar", name: "Set screw collar", name_ko: "세트 스크루 칼라", part_class: "spacer", units: "mm", material: "S45C",
    drawing: { number: "VR-RB-025", scale: "2:1", projection: "third" },
    segments: [{ type: "cyl", length: 16, diameter: 32 }],
    transitions: [{ at: 0, type: "chamfer", size: 1 }, { at: 1, type: "chamfer", size: 1 }],
    grooves: [],
    bore: { through: true, segments: [{ length: 16, diameter: 20, tolerance: "H8" }], chamfer_left: 0.6, chamfer_right: 0.6 },
    /* 깊이 6 = 바깥지름에서 보어까지의 살두께. 세트 스크루가 보어까지 닿는다.
       Depth 6 is the wall from the outside to the bore, so the set screw reaches the shaft. */
    features: [{ type: "cross_hole", position: 8, diameter: 6, through: false, depth: 6, angle: 90 }],
    meta: { source: "golden", difficulty: 2 },
  },
];
