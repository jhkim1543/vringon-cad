// VRINGON CAD — parameter catalogue (no dependencies)
// Shared by the browser (slider UI + model builder) and by the on-prem server
// (AI planner prompt + response clamping), so the two can never drift apart.

const P = (label, value, min, max, step = 1) => ({ label, value, min, max, step });
// discrete choice — stored as an index so it clamps and serialises like any
// other parameter, but the UI renders a dropdown and the planner gets the names
const C = (label, value, options) =>
  ({ label, value, min: 0, max: options.length - 1, step: 1, options });

export const CATALOG = {
  gearbox: {
    ko: "감속기 하우징", en: "Gearbox housing",
    hint: "플랜지 체결 하우징 + 입력 샤프트 + 출력 기어",
    parts: ["housing_base", "housing_cover", "input_shaft", "output_gear", "flange_bolts"],
    params: {
      bodyW: P("본체 폭", 120, 60, 220),
      bodyD: P("본체 깊이", 86, 50, 180),
      bodyH: P("본체 높이", 62, 30, 140),
      filletR: P("모서리 R", 9, 2, 24, 0.5),
      flangeT: P("플랜지 두께", 8, 3, 20, 0.5),
      boltCount: P("체결 볼트 수", 4, 4, 12),
      gearTeeth: P("기어 잇수", 22, 10, 44),
      gearR: P("기어 반경", 26, 12, 50),
      shaftD: P("샤프트 직경", 14, 6, 30, 0.5),
    },
  },
  enclosure: {
    ko: "방수 전장 함체", en: "Sealed electronics enclosure",
    hint: "베이스 셸 + 리드 + 가스켓 + 방수 커넥터",
    parts: ["shell_base", "shell_lid", "gasket", "connector", "screw_bosses"],
    params: {
      bodyW: P("본체 폭", 140, 70, 260),
      bodyD: P("본체 깊이", 96, 50, 200),
      bodyH: P("본체 높이", 48, 24, 120),
      filletR: P("모서리 R", 12, 3, 30, 0.5),
      wall: P("벽 두께", 3, 1.5, 8, 0.5),
      lidH: P("리드 높이", 14, 6, 40),
      screwCount: P("고정 나사 수", 4, 4, 8),
      connectorD: P("커넥터 직경", 18, 8, 36, 0.5),
    },
  },
  vessel: {
    ko: "보틀 · 용기", en: "Bottle / container",
    hint: "선반(revolve) 바디 + 넥 스레드 + 널링 캡",
    parts: ["bottle_body", "neck_thread", "cap", "label_band"],
    params: {
      bodyD: P("몸통 직경", 68, 30, 140, 0.5),
      bodyH: P("몸통 높이", 132, 50, 260),
      neckD: P("넥 직경", 30, 12, 60, 0.5),
      neckH: P("넥 높이", 22, 6, 60),
      shoulderR: P("숄더 곡률", 26, 5, 60),
      capH: P("캡 높이", 24, 8, 60),
      baseR: P("바닥 R", 6, 1, 20, 0.5),
      knurlCount: P("캡 널링 수", 40, 12, 90),
    },
  },
  bracket: {
    ko: "구조 브래킷", en: "Structural bracket",
    hint: "L 브래킷 + 보강 리브 + 피벗 부싱",
    parts: ["base_plate", "vertical_wall", "pivot_bushing", "ribs", "bolt_bosses"],
    params: {
      baseW: P("베이스 폭", 130, 60, 240),
      baseD: P("베이스 깊이", 84, 40, 180),
      plateT: P("판 두께", 12, 5, 30, 0.5),
      wallH: P("수직판 높이", 96, 40, 200),
      ribCount: P("리브 수", 2, 0, 5),
      bossD: P("보스 직경", 18, 8, 40, 0.5),
      holeD: P("체결 홀 직경", 9, 4, 20, 0.5),
      pivotD: P("피벗 직경", 34, 14, 70, 0.5),
    },
  },
  pulley: {
    ko: "풀리 · 플랜지", en: "V-belt pulley",
    hint: "V홈 림 + 스포크 + 허브 보어",
    parts: ["rim", "hub", "spokes", "set_screw"],
    params: {
      outerD: P("외경", 130, 50, 260, 0.5),
      innerD: P("보어 직경", 24, 8, 60, 0.5),
      width: P("폭", 28, 8, 80),
      spokeCount: P("스포크 수", 5, 3, 12),
      spokeW: P("스포크 폭", 16, 6, 40),
      rimT: P("림 두께", 12, 4, 30, 0.5),
      hubD: P("허브 직경", 46, 20, 90, 0.5),
      grooveD: P("V홈 깊이", 7, 0, 16, 0.5),
    },
  },
  watch: {
    ko: "워치 · 시계", en: "Wristwatch",
    hint: "케이스 + 베젤 + 글라스 + 크라운 + 스트랩",
    parts: ["case_body", "bezel", "glass", "case_back", "crown", "side_buttons", "strap_upper", "strap_lower"],
    params: {
      caseD: P("케이스 직경", 42, 28, 52, 0.5),
      caseH: P("케이스 두께", 11, 6, 18, 0.5),
      bezelT: P("베젤 폭", 3, 1, 7, 0.5),
      lugW: P("러그 폭", 22, 14, 28, 0.5),
      strapL: P("스트랩 길이", 85, 50, 120),
      strapT: P("스트랩 두께", 4, 2, 8, 0.5),
      crownD: P("크라운 직경", 6, 3, 10, 0.5),
      buttonCount: P("사이드 버튼 수", 2, 0, 3),
    },
  },
  ring: {
    ko: "링 · 주얼리", en: "Ring / jewelry",
    hint: "밴드 + 프롱 세팅 + 랩피더리 규격 파라메트릭 스톤. " +
      "스톤 비율은 GIA 기준으로: 테이블 53~58%, 크라운 34~35°, 파빌리온 40.6~41°, 거들 2.5~4.5%, 큐렛 0~1%가 이상적. " +
      "형상이 오벌·마퀴즈·페어면 stoneRatio를 1.5~2.3으로, 에메랄드는 1.3~1.6으로 올린다. 라운드·쿠션·프린세스는 1.0. " +
      "에메랄드·아셔는 stoneCut=1(스텝), 앤티크·빈티지 요청은 stoneCut=2(로즈)를 쓴다",
    parts: ["band", "setting_head", "prongs", "stone", "accent_stones"],
    params: {
      innerD: P("내경 (호수)", 17, 14, 23, 0.5),
      bandW: P("밴드 폭", 4, 1.5, 10, 0.5),
      bandT: P("밴드 두께", 1.8, 1, 4, 0.1),
      headH: P("세팅 높이", 6, 3, 12, 0.5),
      prongCount: P("프롱 수", 4, 3, 6),
      // --- stone: outline & faceting style ---
      stoneD: P("스톤 직경 (거들)", 6.5, 3, 14, 0.1),
      stoneShape: C("스톤 형상", 0, ["라운드", "쿠션", "프린세스", "에메랄드", "오벌", "마퀴즈", "페어"]),
      stoneCut: C("커팅 스타일", 0, ["브릴리언트", "스텝", "로즈"]),
      stoneRatio: P("길이 : 폭 비", 1.0, 1.0, 2.6, 0.05),
      // --- stone: GIA-style proportions ---
      tablePct: P("테이블 비율 %", 56, 40, 72, 0.5),
      crownAngle: P("크라운 각도 °", 34.5, 22, 42, 0.5),
      pavAngle: P("파빌리온 각도 °", 40.8, 36, 46, 0.2),
      girdlePct: P("거들 두께 %", 3.5, 1, 8, 0.5),
      culetPct: P("큐렛 크기 %", 0.5, 0, 12, 0.5),
      facetRows: P("패싯 단 수", 3, 1, 6),
      stoneSeg: P("둘레 패싯 수", 16, 6, 32, 2),
      stoneRot: P("세팅 회전 °", 0, 0, 90, 5),
      accentCount: P("보조 스톤 수", 0, 0, 12),
    },
  },
  handheld: {
    ko: "핸드헬드 디바이스", en: "Handheld device",
    hint: "로프트 셸 상/하 + 디스플레이 + 버튼",
    parts: ["shell_upper", "shell_lower", "display", "buttons", "port"],
    params: {
      bodyL: P("본체 길이", 168, 80, 300),
      bodyW: P("본체 폭", 62, 30, 120),
      bodyT: P("본체 두께", 26, 12, 60),
      taper: P("테이퍼", 0.72, 0.4, 1.0, 0.02),
      filletR: P("모서리 R", 12, 3, 26, 0.5),
      screenW: P("스크린 폭", 44, 16, 90),
      screenH: P("스크린 높이", 58, 20, 140),
      buttonD: P("버튼 직경", 15, 6, 34, 0.5),
    },
  },
};

export const MATERIAL_KEYS = [
  "aluminum", "steel", "brass", "copper", "cast_iron",
  "abs_black", "abs_white", "abs_color", "rubber", "glass", "pet_clear", "pom", "pcb",
];

// per-archetype curated materials, most-used first (shown as 추천 group in the UI)
export const RECOMMENDED_MATERIALS = {
  gearbox:   ["aluminum", "cast_iron", "steel", "brass", "pom", "abs_black"],
  enclosure: ["abs_black", "abs_white", "abs_color", "aluminum", "rubber", "steel"],
  vessel:    ["glass", "pet_clear", "abs_white", "abs_color", "aluminum", "steel"],
  bracket:   ["aluminum", "steel", "cast_iron", "brass", "pom"],
  pulley:    ["aluminum", "steel", "cast_iron", "pom", "brass"],
  handheld:  ["abs_black", "abs_white", "abs_color", "rubber", "aluminum", "glass"],
  watch:     ["steel", "gold", "silver", "aluminum", "rubber", "glass", "abs_black"],
  ring:      ["gold", "silver", "brass", "copper", "gem", "steel"],
};

// Clamp an AI- or user-supplied parameter set to the declared ranges.
export function clampParams(archetype, params) {
  const defs = CATALOG[archetype]?.params;
  if (!defs) return {};
  const out = {};
  for (const [k, def] of Object.entries(defs)) {
    let v = Number(params?.[k]);
    if (!isFinite(v)) v = def.value;
    v = Math.max(def.min, Math.min(def.max, v));
    out[k] = def.step >= 1 ? Math.round(v) : Math.round(v / def.step) * def.step;
  }
  return out;
}
