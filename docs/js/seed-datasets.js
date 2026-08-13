/* ==========================================================================
   Reference catalogue: 20 industry datasets.

   Each entry carries the geometry (parts as measured primitives in millimetres),
   the enterprise data an owner actually keeps (BOM, suppliers, torque, service
   intervals) and the structured procedures that drive the 3D view. Geometry is
   authored in real dimensions so mass, collision and joint inference all come
   out meaningful rather than plausible-looking.

   part: [name, semanticType, primitive, size, position, material]
     primitive  box | cyl | tube | sphere | cone | torus
     size       box [w,h,d] · cyl/tube [r,h] · sphere [r] · cone [r,h] · torus [R,r]
   ========================================================================== */

export const DATASETS = [
  {
    id: "pump-px300", name: "PX-300 원심펌프", model: "PX-300", maker: "Demo Industrial",
    category: "산업 장비", family: "Pump", status: "released", version: "1.2",
    owner: "설비관리팀", market: "플랜트·수처리",
    summary: "단단 원심펌프. 모터에서 커플링을 거쳐 샤프트가 임펠러를 돌리고, 전후 베어링과 메커니컬 실이 축을 지지한다.",
    mates: { spin: ["샤프트","임펠러","커플링"], slide: [] },
    parts: [
      ["하우징", "shell", "cyl", [95, 130], [0, 130, 0], "steel",
        { rot: [Math.PI / 2, 0, 0], detail: { bolts: { n: 8, r: 82, d: 9, h: 16, y: 62 }, ring: { r: 96, t: 5, y: 40 } } }],
      ["전면 커버", "protective_cover", "cyl", [96, 16], [0, 130, -72], "steel",
        { rot: [Math.PI / 2, 0, 0], detail: { bolts: { n: 8, r: 82, d: 9, h: 20, y: 0 } } }],
      ["모터", "motor", "cyl", [72, 150], [0, 130, 235], "aluminum",
        { rot: [Math.PI / 2, 0, 0], detail: { fins: { n: 12, w: 4, h: 130, len: 14, r: 72 } } }],
      ["커플링", "transmission", "cyl", [34, 46], [0, 130, 137], "steel",
        { rot: [Math.PI / 2, 0, 0], detail: { bolts: { n: 4, r: 24, d: 6, h: 50 } } }],
      ["샤프트", "transmission", "cyl", [14, 210], [0, 130, 55], "stainless", { rot: [Math.PI / 2, 0, 0] }],
      ["임펠러", "actuator", "cyl", [78, 26], [0, 130, -30], "stainless",
        { rot: [Math.PI / 2, 0, 0], detail: { fins: { n: 7, w: 5, h: 24, len: 30, r: 46 } } }],
      ["전면 베어링", "bearing", "tube", [26, 20], [0, 130, 10], "steel", { rot: [Math.PI / 2, 0, 0] }],
      ["후면 베어링", "bearing", "tube", [26, 20], [0, 130, 108], "steel", { rot: [Math.PI / 2, 0, 0] }],
      ["메커니컬 실", "bearing", "tube", [22, 14], [0, 130, 38], "ceramic", { rot: [Math.PI / 2, 0, 0] }],
      ["흡입 플랜지", "tool", "cyl", [46, 60], [0, 130, -110], "steel",
        { rot: [Math.PI / 2, 0, 0], detail: { bolts: { n: 6, r: 38, d: 8, h: 14, y: 26 } } }],
      ["토출 플랜지", "tool", "cyl", [40, 70], [0, 232, 0], "steel",
        { detail: { bolts: { n: 6, r: 33, d: 8, h: 14, y: 32 } } }],
      ["베이스 프레임", "frame", "box", [300, 30, 340], [0, 15, 60], "steel",
        { detail: { ribs: { n: 4, w: 10, h: 40, len: 300, span: 240, y: 22 } } }],
    ],
    bomExtra: {
      "전면 베어링": { supplier: "SKF Korea", partNo: "6206-2RS", price: 42000, stock: 12, life: "8,000h", torque: null },
      "후면 베어링": { supplier: "SKF Korea", partNo: "6205-2RS", price: 38000, stock: 8, life: "8,000h", torque: null },
      "메커니컬 실": { supplier: "EagleBurgmann", partNo: "MG1-22", price: 115000, stock: 3, life: "6,000h", torque: null },
      "임펠러": { supplier: "Demo Industrial", partNo: "IMP-300-A", price: 320000, stock: 2, life: "20,000h", torque: null },
      "전면 커버": { supplier: "Demo Industrial", partNo: "COV-300", price: 88000, stock: 5, life: null, torque: "M8 24 N·m" },
    },
    procedures: [{
      procedureId: "PUMP-PX300-BEARING-REPLACE", title: "전면 베어링 교체", kind: "maintenance", minutes: 45,
      role: "service_engineer",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "전원을 차단하고 잠금표시(LOTO) 절차를 수행합니다.", text: "펌프 전원을 차단하고 잔압을 배출합니다.", min: 5 },
        { action: "remove", part: "전면 커버", tool: "hex_key_6mm", torque: "M8 24 N·m", dir: [0, 0, 1], safety: null, text: "전면 커버 체결 볼트 4개를 대각선 순서로 풉니다.", min: 8 },
        { action: "extract", part: "임펠러", tool: "impeller_puller", torque: null, dir: [0, 0, -1], safety: "임펠러 날에 손이 닿지 않게 장갑을 착용합니다.", text: "임펠러 고정 너트를 풀고 풀러로 축에서 분리합니다.", min: 10 },
        { action: "extract", part: "전면 베어링", tool: "bearing_puller", torque: null, dir: [0, 0, 1], safety: null, text: "베어링 풀러로 전면 베어링을 축방향으로 분리합니다.", min: 12 },
        { action: "install", part: "전면 베어링", tool: "press_fit_tool", torque: null, dir: [0, 0, -1], safety: "압입 시 내륜만 가압합니다.", text: "신품 베어링을 압입하고 회전 저항을 확인합니다.", min: 10 },
      ],
    }],
    faults: [
      { symptom: "축 진동 증가", parts: ["전면 베어링", "후면 베어링"], action: "베어링 유격 점검 후 교체" },
      { symptom: "축봉부 누수", parts: ["메커니컬 실"], action: "메커니컬 실 교체" },
      { symptom: "토출 압력 저하", parts: ["임펠러"], action: "임펠러 마모·이물 확인" },
    ],
  },
  {
    id: "robot-arm-6axis", name: "RA-6 산업용 로봇 암", model: "RA-6", maker: "Demo Robotics",
    category: "로봇·자동화", family: "Robot Arm", status: "released", version: "2.0",
    owner: "로봇개발팀", market: "스마트팩토리·시뮬레이션",
    summary: "6축 수직다관절 로봇. 베이스부터 손목 3축까지 직렬 체인이며 끝단에 그리퍼가 장착된다.",
    mates: { spin: ["숄더 링크","상완","전완","손목 1축","손목 2축","손목 3축"], slide: [] },
    parts: [
      ["베이스 링크", "base", "cyl", [110, 90], [0, 45, 0], "steel",
        { detail: { bolts: { n: 6, r: 92, d: 12, h: 22, y: 34 } } }],
      ["숄더 링크", "link", "cyl", [78, 130], [0, 155, 0], "aluminum",
        { detail: { ring: { r: 80, t: 6, y: -55 } } }],
      ["1축 감속기", "gearbox", "cyl", [62, 46], [0, 92, 0], "steel",
        { detail: { bolts: { n: 8, r: 50, d: 7, h: 50 } } }],
      ["상완", "link", "box", [90, 300, 100], [0, 340, 0], "aluminum",
        { detail: { ribs: { n: 3, w: 8, h: 260, len: 12, span: 60, z: 52 } } }],
      ["2축 감속기", "gearbox", "cyl", [56, 44], [0, 196, 0], "steel",
        { rot: [0, 0, Math.PI / 2], detail: { bolts: { n: 8, r: 44, d: 6, h: 48 } } }],
      ["전완", "link", "box", [74, 260, 84], [0, 610, 0], "aluminum",
        { detail: { ribs: { n: 3, w: 7, h: 220, len: 10, span: 50, z: 44 } } }],
      ["3축 감속기", "gearbox", "cyl", [48, 40], [0, 486, 0], "steel",
        { rot: [0, 0, Math.PI / 2], detail: { bolts: { n: 6, r: 38, d: 6, h: 44 } } }],
      ["손목 1축", "link", "cyl", [50, 70], [0, 775, 0], "aluminum"],
      ["손목 2축", "link", "cyl", [44, 62], [0, 838, 0], "aluminum", { rot: [0, 0, Math.PI / 2] }],
      ["손목 3축", "link", "cyl", [38, 54], [0, 894, 0], "aluminum"],
      ["툴 플랜지", "tool", "cyl", [40, 12], [0, 926, 0], "steel",
        { detail: { bolts: { n: 4, r: 31, d: 5, h: 16 } } }],
      ["엔드이펙터", "gripper", "box", [70, 90, 46], [0, 972, 0], "matte"],
      ["케이블 덕트", "shell", "box", [40, 420, 40], [0, 340, 66], "rubber"],
    ],
    bomExtra: {
      "베이스 링크": { supplier: "Demo Robotics", partNo: "RA6-BASE", price: 1250000, stock: 4, life: null, torque: "M10 45 N·m" },
      "엔드이펙터": { supplier: "Schunk", partNo: "EGP-40", price: 1850000, stock: 6, life: null, torque: "M5 6 N·m" },
    },
    procedures: [{
      procedureId: "RA6-EE-SWAP", title: "엔드이펙터 교체", kind: "maintenance", minutes: 20, role: "technician",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "비상정지를 누르고 서보 전원을 차단합니다.", text: "로봇을 홈 자세로 보낸 뒤 정지시킵니다.", min: 4 },
        { action: "disconnect", part: "엔드이펙터", tool: null, torque: null, dir: null, safety: null, text: "툴 커넥터와 에어 라인을 분리합니다.", min: 3 },
        { action: "remove", part: "엔드이펙터", tool: "hex_key_4mm", torque: "M5 6 N·m", dir: [0, 1, 0], safety: null, text: "툴 플랜지 볼트 4개를 풀고 그리퍼를 분리합니다.", min: 6 },
        { action: "install", part: "엔드이펙터", tool: "torque_wrench", torque: "M5 6 N·m", dir: [0, -1, 0], safety: null, text: "신규 그리퍼를 정렬 핀에 맞춰 장착하고 규정 토크로 조입니다.", min: 7 },
      ],
    }],
    faults: [{ symptom: "3축 위치 오차", parts: ["손목 3축"], action: "감속기 백래시 점검" }],
  },
  {
    id: "car-door-module", name: "도어 모듈 DM-A", model: "DM-A", maker: "Demo Mobility",
    category: "자동차 부품", family: "Interior", status: "released", version: "1.4",
    owner: "서비스기술팀", market: "자동차 OEM·정비",
    summary: "승용차 프론트 도어 모듈. 아우터/이너 패널 사이에 레귤레이터와 모터가 들어가고 트림 패널로 마감된다.",
    mates: { spin: ["도어 핸들"], slide: ["도어 글라스"] },
    parts: [
      ["아우터 패널", "panel", "box", [1020, 700, 22], [0, 350, 40], "steel"],
      ["이너 패널", "panel", "box", [980, 660, 18], [0, 350, -10], "steel"],
      ["도어 글라스", "panel", "box", [880, 420, 5], [0, 560, 14], "glass"],
      ["윈도 레귤레이터", "transmission", "box", [320, 380, 26], [0, 320, 4], "steel"],
      ["레귤레이터 모터", "motor", "cyl", [42, 74], [-120, 250, 4], "matte"],
      ["도어 핸들", "tool", "box", [180, 44, 34], [260, 400, 46], "chrome"],
      ["상부 힌지", "bearing", "cyl", [22, 70], [-480, 560, 10], "steel"],
      ["하부 힌지", "bearing", "cyl", [22, 70], [-480, 180, 10], "steel"],
      ["스피커", "sensor", "cyl", [80, 46], [180, 150, -6], "matte"],
      ["트림 패널", "protective_cover", "box", [960, 640, 24], [0, 350, -34], "abs"],
    ],
    bomExtra: {
      "레귤레이터 모터": { supplier: "Bosch", partNo: "WRM-24V", price: 96000, stock: 15, life: "30,000 cycles", torque: "M6 9 N·m" },
      "도어 글라스": { supplier: "Saint-Gobain", partNo: "GL-DMA-L", price: 142000, stock: 7, life: null, torque: null },
      "트림 패널": { supplier: "Demo Mobility", partNo: "TRM-DMA", price: 78000, stock: 11, life: null, torque: null },
    },
    procedures: [{
      procedureId: "DMA-REGULATOR-REPLACE", title: "윈도 레귤레이터 교체", kind: "maintenance", minutes: 60, role: "service_engineer",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "배터리 (-) 단자를 분리하고 5분 대기합니다.", text: "차량 전원을 차단합니다.", min: 5 },
        { action: "remove", part: "트림 패널", tool: "trim_tool", torque: null, dir: [0, 0, -1], safety: "클립 파손에 주의해 모서리부터 들어올립니다.", text: "도어 트림 패널 클립을 순서대로 분리합니다.", min: 12 },
        { action: "disconnect", part: "스피커", tool: null, torque: null, dir: null, safety: null, text: "스피커와 스위치 커넥터를 분리합니다.", min: 5 },
        { action: "remove", part: "도어 글라스", tool: "hex_key_5mm", torque: null, dir: [0, 1, 0], safety: "유리를 두 손으로 받쳐 들어올립니다.", text: "글라스 고정 볼트를 풀고 위로 빼냅니다.", min: 15 },
        { action: "remove", part: "윈도 레귤레이터", tool: "socket_10mm", torque: "M6 9 N·m", dir: [0, 0, -1], safety: null, text: "레귤레이터 고정 너트 5개를 풀고 모터와 함께 꺼냅니다.", min: 23 },
      ],
    }],
    faults: [{ symptom: "창문 상승 불가", parts: ["레귤레이터 모터", "윈도 레귤레이터"], action: "모터 전류 점검 후 레귤레이터 교체" }],
  },
  {
    id: "conveyor-cell", name: "컨베이어 셀 CV-1", model: "CV-1", maker: "Demo Automation",
    category: "로봇·자동화", family: "Linear Stage", status: "released", version: "1.1",
    owner: "자동화설계팀", market: "물류자동화·디지털트윈",
    summary: "구동 모터와 롤러로 벨트를 이송하는 단위 셀. 광센서와 스토퍼로 물류 흐름을 제어한다.",
    mates: { spin: ["롤러 세트","구동 모터"], slide: ["스토퍼","다이버터"] },
    parts: [
      ["프레임", "frame", "box", [2000, 90, 620], [0, 700, 0], "aluminum"],
      ["컨베이어 벨트", "panel", "box", [1960, 12, 560], [0, 752, 0], "rubber"],
      ["구동 모터", "motor", "cyl", [86, 160], [-980, 620, 0], "matte"],
      ["롤러 세트", "transmission", "cyl", [46, 560], [820, 700, 0], "steel"],
      ["광센서", "sensor", "box", [40, 60, 30], [420, 810, 300], "matte"],
      ["스토퍼", "actuator", "box", [70, 120, 60], [640, 790, 0], "steel"],
      ["다이버터", "actuator", "box", [420, 40, 300], [200, 770, 160], "stainless"],
      ["제어 패널", "shell", "box", [340, 420, 160], [-980, 900, 340], "matte"],
      ["안전 펜스", "protective_cover", "box", [2000, 900, 30], [0, 1150, -320], "steel"],
    ],
    bomExtra: {
      "구동 모터": { supplier: "SEW", partNo: "DRN80MK4", price: 640000, stock: 3, life: "25,000h", torque: null },
      "광센서": { supplier: "Keyence", partNo: "PZ-G51N", price: 87000, stock: 24, life: null, torque: null },
    },
    procedures: [{
      procedureId: "CV1-BELT-TENSION", title: "벨트 장력 조정", kind: "maintenance", minutes: 25, role: "technician",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "구동부 회전이 멈춘 것을 확인합니다.", text: "셀 전원을 차단하고 안전 펜스를 개방합니다.", min: 5 },
        { action: "adjust", part: "롤러 세트", tool: "wrench_17mm", torque: "M12 60 N·m", dir: [1, 0, 0], safety: null, text: "텐션 볼트를 좌우 균등하게 조여 처짐 10mm 이내로 맞춥니다.", min: 15 },
        { action: "inspect", part: "컨베이어 벨트", tool: null, torque: null, dir: null, safety: null, text: "저속 운전하며 사행 여부를 확인합니다.", min: 5 },
      ],
    }],
    faults: [{ symptom: "벨트 사행", parts: ["롤러 세트", "컨베이어 벨트"], action: "롤러 평행도 및 장력 재조정" }],
  },
  {
    id: "ev-battery-pack", name: "EV 배터리 팩 BP-80", model: "BP-80", maker: "Demo Energy",
    category: "자동차 부품", family: "Powertrain", status: "review", version: "0.9",
    owner: "배터리개발팀", market: "전기차·ESS",
    summary: "모듈 6개를 트레이에 배치하고 상부 커버로 밀폐한 고전압 팩. 냉각 플레이트가 하부를 지난다.",
    mates: { spin: [], slide: ["상부 커버","서비스 디스커넥트"] },
    parts: [
      ["상부 커버", "protective_cover", "box", [1400, 60, 900], [0, 250, 0], "aluminum"],
      ["하부 트레이", "frame", "box", [1420, 90, 920], [0, 45, 0], "aluminum"],
      ["배터리 모듈 A", "shell", "box", [420, 130, 260], [-440, 160, -280], "matte"],
      ["배터리 모듈 B", "shell", "box", [420, 130, 260], [-440, 160, 280], "matte"],
      ["배터리 모듈 C", "shell", "box", [420, 130, 260], [0, 160, -280], "matte"],
      ["배터리 모듈 D", "shell", "box", [420, 130, 260], [0, 160, 280], "matte"],
      ["BMS", "sensor", "box", [220, 40, 160], [520, 170, 0], "abs"],
      ["냉각 플레이트", "panel", "box", [1300, 16, 820], [0, 100, 0], "aluminum"],
      ["고전압 정션박스", "shell", "box", [260, 120, 200], [520, 200, -300], "matte"],
      ["서비스 디스커넥트", "tool", "box", [90, 90, 70], [520, 230, 300], "rubber"],
    ],
    bomExtra: {
      "배터리 모듈 A": { supplier: "Demo Energy", partNo: "MOD-80-A", price: 1450000, stock: 2, life: "3,000 cycles", torque: "M8 18 N·m" },
      "BMS": { supplier: "Demo Energy", partNo: "BMS-80", price: 880000, stock: 4, life: null, torque: null },
      "서비스 디스커넥트": { supplier: "TE", partNo: "MSD-400A", price: 210000, stock: 6, life: null, torque: null },
    },
    procedures: [{
      procedureId: "BP80-MODULE-REPLACE", title: "배터리 모듈 교체", kind: "maintenance", minutes: 90, role: "hv_certified",
      steps: [
        { action: "power_off", part: "서비스 디스커넥트", tool: "insulated_glove", torque: null, dir: [0, 1, 0], safety: "고전압 작업 자격자만 수행합니다. 절연 장갑과 보호구를 착용합니다.", text: "서비스 디스커넥트를 분리하고 5분간 방전을 대기합니다.", min: 10 },
        { action: "measure", part: "고전압 정션박스", tool: "insulation_tester", torque: null, dir: null, safety: "잔류 전압 60V 이하를 확인합니다.", text: "단자 간 전압이 안전 수준인지 측정합니다.", min: 8 },
        { action: "remove", part: "상부 커버", tool: "torque_wrench", torque: "M6 12 N·m", dir: [0, 1, 0], safety: null, text: "커버 볼트를 대각선 순서로 풀고 실링을 확인하며 들어올립니다.", min: 20 },
        { action: "disconnect", part: "냉각 플레이트", tool: "coolant_clamp", torque: null, dir: null, safety: "냉각수 유출에 대비해 트레이를 받칩니다.", text: "냉각 커넥터를 잠그고 분리합니다.", min: 12 },
        { action: "extract", part: "배터리 모듈 A", tool: "lifting_jig", torque: "M8 18 N·m", dir: [0, 1, 0], safety: "모듈 단자에 공구가 닿지 않게 합니다.", text: "버스바를 분리하고 지그로 모듈을 수직으로 들어올립니다.", min: 25 },
        { action: "inspect", part: "BMS", tool: "diagnostic_tool", torque: null, dir: null, safety: null, text: "절연 저항과 셀 밸런싱 상태를 검사합니다.", min: 15 },
      ],
    }],
    faults: [{ symptom: "셀 밸런싱 실패", parts: ["배터리 모듈 A", "BMS"], action: "모듈 셀 전압 측정 후 교체 판단" }],
  },
  {
    id: "cnc-spindle", name: "CNC 스핀들 SP-12", model: "SP-12", maker: "Demo Machine",
    category: "산업 장비", family: "Motor", status: "released", version: "1.0",
    owner: "생산기술팀", market: "공작기계·정밀가공",
    summary: "빌트인 모터 스핀들. 전후 앵귤러 베어링 세트가 축을 지지하고 드로바가 툴을 클램프한다.",
    mates: { spin: ["샤프트","모터 로터","툴 클램프"], slide: ["드로바"] },
    parts: [
      ["하우징", "shell", "cyl", [92, 340], [0, 170, 0], "steel"],
      ["샤프트", "transmission", "cyl", [26, 380], [0, 190, 0], "stainless"],
      ["전면 베어링 세트", "bearing", "tube", [40, 46], [0, 40, 0], "steel"],
      ["후면 베어링 세트", "bearing", "tube", [36, 40], [0, 300, 0], "steel"],
      ["스페이서", "link", "tube", [34, 22], [0, 90, 0], "steel"],
      ["드로바", "actuator", "cyl", [14, 300], [0, 190, 0], "stainless"],
      ["툴 클램프", "gripper", "cone", [30, 42], [0, 8, 0], "steel"],
      ["모터 로터", "motor", "cyl", [56, 120], [0, 190, 0], "copper"],
      ["냉각 자켓", "protective_cover", "tube", [88, 200], [0, 190, 0], "aluminum"],
      ["엔코더", "sensor", "cyl", [42, 24], [0, 348, 0], "abs"],
    ],
    bomExtra: {
      "전면 베어링 세트": { supplier: "NSK", partNo: "7014A5-P4", price: 720000, stock: 2, life: "12,000h", torque: "예압 320N" },
      "엔코더": { supplier: "Heidenhain", partNo: "ERN-1387", price: 1100000, stock: 1, life: null, torque: null },
    },
    procedures: [{
      procedureId: "SP12-BEARING-PRELOAD", title: "베어링 예압 점검", kind: "inspection", minutes: 70, role: "service_engineer",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "스핀들 완전 정지 후 10분 냉각합니다.", text: "장비 전원을 차단합니다.", min: 10 },
        { action: "measure", part: "샤프트", tool: "dial_indicator", torque: null, dir: [0, 1, 0], safety: null, text: "축방향 유격을 다이얼 게이지로 측정합니다. 허용 0.003mm 이내.", min: 20 },
        { action: "inspect", part: "전면 베어링 세트", tool: "vibration_meter", torque: null, dir: null, safety: null, text: "회전 진동을 측정해 허용치 2.8mm/s 이내인지 확인합니다.", min: 20 },
        { action: "adjust", part: "스페이서", tool: "torque_wrench", torque: "예압 320N", dir: [0, -1, 0], safety: null, text: "스페이서 두께로 예압을 재설정합니다.", min: 20 },
      ],
    }],
    faults: [{ symptom: "가공면 채터", parts: ["전면 베어링 세트", "샤프트"], action: "예압 및 축 런아웃 점검" }],
  },
  {
    id: "gripper-library", name: "그리퍼 라이브러리 GR-Set", model: "GR-SET", maker: "Demo Robotics",
    category: "로봇·자동화", family: "Gripper", status: "released", version: "1.3",
    owner: "로봇개발팀", market: "협동로봇 엔드이펙터",
    summary: "공통 어댑터 플레이트에 장착되는 엔드이펙터 모듈군. 2지 그리퍼와 진공 그리퍼가 같은 볼트 패턴을 쓴다.",
    mates: { spin: [], slide: ["좌측 핑거","우측 핑거"] },
    parts: [
      ["어댑터 플레이트", "frame", "cyl", [40, 10], [0, 5, 0], "aluminum"],
      ["그리퍼 바디", "shell", "box", [70, 90, 46], [0, 56, 0], "aluminum"],
      ["좌측 핑거", "finger", "box", [14, 70, 26], [-22, 135, 0], "steel"],
      ["우측 핑거", "finger", "box", [14, 70, 26], [22, 135, 0], "steel"],
      ["진공 패드", "suction_cup", "cone", [26, 22], [0, 118, 0], "silicone"],
      ["구동 모터", "motor", "cyl", [22, 40], [0, 56, 30], "matte"],
    ],
    bomExtra: {
      "그리퍼 바디": { supplier: "Schunk", partNo: "EGP-40-BODY", price: 1250000, stock: 5, life: null, torque: "M5 6 N·m" },
      "진공 패드": { supplier: "SMC", partNo: "ZP2-25", price: 18000, stock: 40, life: "500,000 cycles", torque: null },
    },
    procedures: [{
      procedureId: "GRSET-VARIANT-SWAP", title: "그리퍼 Variant 교체", kind: "assembly", minutes: 15, role: "technician",
      steps: [
        { action: "remove", part: "그리퍼 바디", tool: "hex_key_4mm", torque: "M5 6 N·m", dir: [0, 1, 0], safety: null, text: "어댑터 플레이트에서 기존 그리퍼를 분리합니다.", min: 6 },
        { action: "install", part: "진공 패드", tool: "hand", torque: null, dir: [0, -1, 0], safety: null, text: "진공 모듈을 같은 볼트 패턴에 장착합니다.", min: 9 },
      ],
    }],
    faults: [{ symptom: "파지력 저하", parts: ["진공 패드"], action: "패드 마모 및 진공 누설 점검" }],
  },
  {
    id: "amr-robot", name: "AMR 자율이동로봇 MR-2", model: "MR-2", maker: "Demo Robotics",
    category: "로봇·자동화", family: "AMR", status: "released", version: "1.6",
    owner: "물류자동화팀", market: "물류·공장자동화",
    summary: "차동 구동 AMR. 전방 라이다와 카메라로 주행하고 상부 페이로드 모듈을 교체할 수 있다.",
    mates: { spin: ["좌측 구동휠","우측 구동휠","전방 캐스터","라이다"], slide: ["페이로드 모듈"] },
    parts: [
      ["섀시", "frame", "box", [700, 160, 500], [0, 130, 0], "aluminum"],
      ["좌측 구동휠", "actuator", "cyl", [90, 60], [-370, 90, 0], "rubber"],
      ["우측 구동휠", "actuator", "cyl", [90, 60], [370, 90, 0], "rubber"],
      ["전방 캐스터", "bearing", "sphere", [46], [0, 46, 200], "matte"],
      ["배터리", "shell", "box", [340, 90, 260], [0, 90, -60], "matte"],
      ["라이다", "lidar", "cyl", [52, 70], [0, 250, 210], "matte"],
      ["카메라", "camera", "box", [70, 34, 30], [0, 220, 244], "abs"],
      ["범퍼", "protective_cover", "box", [700, 70, 40], [0, 70, 262], "rubber"],
      ["제어 컴퓨터", "sensor", "box", [240, 60, 180], [0, 190, -120], "matte"],
      ["페이로드 모듈", "shell", "box", [640, 90, 460], [0, 258, 0], "stainless"],
    ],
    bomExtra: {
      "라이다": { supplier: "SICK", partNo: "TiM781", price: 3200000, stock: 2, life: null, torque: null },
      "배터리": { supplier: "Demo Energy", partNo: "AMR-48V-30Ah", price: 980000, stock: 5, life: "1,500 cycles", torque: null },
    },
    procedures: [{
      procedureId: "MR2-BATTERY-SWAP", title: "배터리 교체", kind: "maintenance", minutes: 12, role: "operator",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "주행 정지 상태에서만 수행합니다.", text: "AMR을 도킹 스테이션에 정지시키고 전원을 끕니다.", min: 3 },
        { action: "remove", part: "페이로드 모듈", tool: "hand", torque: null, dir: [0, 1, 0], safety: null, text: "상부 페이로드 모듈을 들어올려 분리합니다.", min: 3 },
        { action: "extract", part: "배터리", tool: "hand", torque: null, dir: [0, 0, -1], safety: "커넥터를 먼저 분리한 뒤 당깁니다.", text: "배터리 래치를 열고 후방으로 빼냅니다.", min: 6 },
      ],
    }],
    faults: [{ symptom: "주행 편차", parts: ["좌측 구동휠", "우측 구동휠"], action: "휠 마모 및 인코더 캘리브레이션 점검" }],
  },
  {
    id: "inspection-drone", name: "검사용 드론 DR-4", model: "DR-4", maker: "Demo Aero",
    category: "로봇·자동화", family: "Actuator", status: "review", version: "0.8",
    owner: "검사기술팀", market: "산업용 드론·검사",
    summary: "쿼드콥터 프레임에 짐벌 카메라를 단 검사용 기체. 암과 페이로드를 교체할 수 있다.",
    mates: { spin: ["프로펠러","짐벌"], slide: ["배터리"] },
    parts: [
      ["프레임", "frame", "box", [220, 50, 220], [0, 120, 0], "carbon"],
      ["암 1", "link", "cyl", [12, 180], [110, 120, 110], "carbon"],
      ["암 2", "link", "cyl", [12, 180], [-110, 120, 110], "carbon"],
      ["암 3", "link", "cyl", [12, 180], [110, 120, -110], "carbon"],
      ["암 4", "link", "cyl", [12, 180], [-110, 120, -110], "carbon"],
      ["모터", "motor", "cyl", [22, 34], [190, 140, 190], "matte"],
      ["프로펠러", "actuator", "box", [300, 6, 26], [190, 162, 190], "nylon"],
      ["배터리", "shell", "box", [140, 40, 60], [0, 88, 0], "matte"],
      ["비행 제어기", "sensor", "box", [60, 16, 60], [0, 150, 0], "abs"],
      ["짐벌", "link", "cyl", [30, 44], [0, 70, 60], "aluminum"],
      ["카메라", "camera", "box", [56, 44, 60], [0, 44, 60], "matte"],
    ],
    bomExtra: {
      "카메라": { supplier: "FLIR", partNo: "Vue-TZ20", price: 4800000, stock: 1, life: null, torque: null },
      "프로펠러": { supplier: "T-Motor", partNo: "P12x4", price: 32000, stock: 24, life: "200 flight-h", torque: null },
    },
    procedures: [{
      procedureId: "DR4-PROP-REPLACE", title: "프로펠러 교체", kind: "maintenance", minutes: 10, role: "operator",
      steps: [
        { action: "power_off", part: "배터리", tool: "hand", torque: null, dir: [0, 0, 1], safety: "배터리를 반드시 먼저 분리합니다.", text: "기체 배터리를 분리합니다.", min: 2 },
        { action: "remove", part: "프로펠러", tool: "hex_key_2mm", torque: "M3 1.2 N·m", dir: [0, 1, 0], safety: null, text: "프로펠러 고정 나사를 풀고 분리합니다.", min: 4 },
        { action: "install", part: "프로펠러", tool: "hex_key_2mm", torque: "M3 1.2 N·m", dir: [0, -1, 0], safety: "회전 방향 표시를 확인합니다.", text: "신품을 회전 방향에 맞춰 장착합니다.", min: 4 },
      ],
    }],
    faults: [{ symptom: "호버링 진동", parts: ["프로펠러", "모터"], action: "프로펠러 밸런스 및 모터 베어링 점검" }],
  },
  {
    id: "wind-gearbox", name: "풍력 기어박스 WG-3", model: "WG-3", maker: "Demo Energy",
    category: "산업 장비", family: "Gearbox", status: "released", version: "1.1",
    owner: "발전설비팀", market: "신재생에너지",
    summary: "1단 유성기어 + 2단 평기어 구조. 입력축이 캐리어를 돌리고 출력축이 발전기로 연결된다.",
    mates: { spin: ["입력축","유성 캐리어","유성기어 A","유성기어 B","유성기어 C","선기어","출력축"], slide: [] },
    parts: [
      ["하우징", "shell", "cyl", [420, 620], [0, 310, 0], "steel"],
      ["입력축", "transmission", "cyl", [90, 320], [0, 620, 0], "stainless"],
      ["유성 캐리어", "link", "cyl", [300, 120], [0, 430, 0], "steel"],
      ["유성기어 A", "transmission", "cyl", [90, 100], [150, 430, 0], "steel"],
      ["유성기어 B", "transmission", "cyl", [90, 100], [-75, 430, 130], "steel"],
      ["유성기어 C", "transmission", "cyl", [90, 100], [-75, 430, -130], "steel"],
      ["선기어", "transmission", "cyl", [70, 110], [0, 430, 0], "steel"],
      ["메인 베어링", "bearing", "tube", [180, 90], [0, 560, 0], "steel"],
      ["윤활 유닛", "shell", "box", [220, 260, 180], [420, 200, 0], "matte"],
      ["출력축", "transmission", "cyl", [60, 260], [0, 60, 0], "stainless"],
    ],
    bomExtra: {
      "메인 베어링": { supplier: "SKF", partNo: "230/560", price: 8400000, stock: 1, life: "60,000h", torque: null },
      "윤활 유닛": { supplier: "Demo Energy", partNo: "LUB-WG3", price: 1900000, stock: 2, life: "5,000h 오일교환", torque: null },
    },
    procedures: [{
      procedureId: "WG3-OIL-CHANGE", title: "기어 오일 교환", kind: "maintenance", minutes: 180, role: "service_engineer",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "로터를 고정하고 회전 방지 장치를 겁니다.", text: "터빈을 정지시키고 로터 락을 체결합니다.", min: 30 },
        { action: "drain", part: "윤활 유닛", tool: "drain_hose", torque: null, dir: [0, -1, 0], safety: "고온 오일에 화상 주의합니다.", text: "드레인 포트를 열어 기어 오일을 배출합니다.", min: 60 },
        { action: "inspect", part: "메인 베어링", tool: "endoscope", torque: null, dir: null, safety: null, text: "내시경으로 치면 마모와 이물을 확인합니다.", min: 45 },
        { action: "fill", part: "윤활 유닛", tool: "pump", torque: null, dir: [0, 1, 0], safety: null, text: "규정 유종을 규정량까지 주입하고 레벨을 확인합니다.", min: 45 },
      ],
    }],
    faults: [{ symptom: "이상 소음", parts: ["유성기어 A", "메인 베어링"], action: "오일 금속분 분석 후 내시경 검사" }],
  },
  {
    id: "solar-tracker", name: "태양광 트래커 ST-1", model: "ST-1", maker: "Demo Energy",
    category: "산업 장비", family: "Actuator", status: "released", version: "1.0",
    owner: "설비관리팀", market: "태양광 발전",
    summary: "단축 추적 구조. 토크 튜브가 슬루 드라이브로 회전하며 패널 프레임을 태양 방향으로 맞춘다.",
    mates: { spin: ["토크 튜브","패널 프레임"], slide: ["액추에이터"] },
    parts: [
      ["기초", "base", "box", [600, 400, 600], [0, 200, 0], "ceramic"],
      ["포스트", "frame", "cyl", [90, 2200], [0, 1500, 0], "steel"],
      ["토크 튜브", "transmission", "cyl", [60, 4000], [0, 2620, 0], "steel"],
      ["패널 프레임", "frame", "box", [3800, 60, 1100], [0, 2680, 0], "aluminum"],
      ["슬루 드라이브", "gearbox", "cyl", [180, 220], [0, 2620, 0], "steel"],
      ["액추에이터", "actuator", "cyl", [50, 420], [300, 2400, 0], "matte"],
      ["컨트롤러", "sensor", "box", [280, 360, 160], [0, 1200, 220], "matte"],
      ["일사 센서", "sensor", "cyl", [40, 60], [1600, 2740, 0], "abs"],
    ],
    bomExtra: {
      "슬루 드라이브": { supplier: "Kinematics", partNo: "SDE-9", price: 2400000, stock: 2, life: "20년", torque: "M16 190 N·m" },
    },
    procedures: [{
      procedureId: "ST1-DRIVE-INSPECT", title: "슬루 드라이브 점검", kind: "inspection", minutes: 40, role: "technician",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "추적 구동을 정지하고 수동 모드로 전환합니다.", text: "트래커를 수평 자세로 이동시킨 뒤 정지합니다.", min: 10 },
        { action: "inspect", part: "슬루 드라이브", tool: "grease_gun", torque: "M16 190 N·m", dir: null, safety: null, text: "그리스 상태와 체결 볼트 토크를 확인합니다.", min: 20 },
        { action: "measure", part: "토크 튜브", tool: "inclinometer", torque: null, dir: null, safety: null, text: "경사각 오차가 0.5도 이내인지 측정합니다.", min: 10 },
      ],
    }],
    faults: [{ symptom: "추적 각도 오차", parts: ["슬루 드라이브", "일사 센서"], action: "드라이브 백래시 및 센서 캘리브레이션 점검" }],
  },
  {
    id: "hvac-ahu", name: "공조기 AHU-5", model: "AHU-5", maker: "Demo Building",
    category: "산업 장비", family: "Compressor", status: "released", version: "1.2",
    owner: "시설관리팀", market: "건축설비·시설관리",
    summary: "필터, 냉온수 코일, 팬으로 구성된 공기조화기. 댐퍼로 외기 도입량을 조절한다.",
    mates: { spin: ["팬","모터","댐퍼"], slide: ["필터"] },
    parts: [
      ["케이싱", "shell", "box", [2400, 1600, 1200], [0, 800, 0], "steel"],
      ["필터", "panel", "box", [1100, 1200, 90], [-600, 800, 0], "nylon"],
      ["팬", "actuator", "cyl", [340, 260], [700, 800, 0], "aluminum"],
      ["모터", "motor", "cyl", [110, 220], [980, 800, 0], "matte"],
      ["난방 코일", "panel", "box", [900, 1100, 140], [0, 800, 260], "copper"],
      ["냉방 코일", "panel", "box", [900, 1100, 140], [0, 800, -260], "copper"],
      ["댐퍼", "actuator", "box", [1000, 900, 70], [-1150, 800, 0], "aluminum"],
      ["온습도 센서", "sensor", "box", [60, 90, 40], [400, 1300, 500], "abs"],
      ["제어 패널", "shell", "box", [400, 500, 180], [1200, 1100, 560], "matte"],
    ],
    bomExtra: {
      "필터": { supplier: "Camfil", partNo: "F7-592", price: 62000, stock: 30, life: "6개월", torque: null },
      "모터": { supplier: "WEG", partNo: "W22-7.5kW", price: 1450000, stock: 2, life: "40,000h", torque: null },
    },
    procedures: [{
      procedureId: "AHU5-FILTER-REPLACE", title: "필터 교체", kind: "maintenance", minutes: 30, role: "technician",
      steps: [
        { action: "power_off", part: "모터", tool: null, torque: null, dir: null, safety: "팬 완전 정지를 확인합니다.", text: "송풍기를 정지시키고 제어반을 차단합니다.", min: 5 },
        { action: "remove", part: "필터", tool: "hand", torque: null, dir: [-1, 0, 0], safety: "분진 비산에 대비해 마스크를 착용합니다.", text: "필터 프레임 클램프를 풀고 필터를 인출합니다.", min: 12 },
        { action: "install", part: "필터", tool: "hand", torque: null, dir: [1, 0, 0], safety: null, text: "신품 필터를 기류 방향에 맞춰 삽입하고 차압계를 리셋합니다.", min: 13 },
      ],
    }],
    faults: [{ symptom: "풍량 저하", parts: ["필터", "팬"], action: "필터 차압 확인 후 교체" }],
  },
  {
    id: "elevator-system", name: "엘리베이터 EL-10", model: "EL-10", maker: "Demo Building",
    category: "산업 장비", family: "Motor", status: "released", version: "1.5",
    owner: "시설관리팀", market: "빌딩·시설 서비스",
    summary: "권상기가 로프를 통해 카와 균형추를 구동하는 승강 시스템. 가이드 레일이 카를 안내한다.",
    mates: { spin: ["권상기","도르래"], slide: ["카","카 도어","균형추"] },
    parts: [
      ["카", "shell", "box", [1400, 2300, 1500], [0, 1150, 0], "stainless"],
      ["카 도어", "panel", "box", [900, 2100, 40], [0, 1050, 760], "stainless"],
      ["가이드 레일 좌", "frame", "box", [80, 4000, 60], [-760, 2000, 0], "steel"],
      ["가이드 레일 우", "frame", "box", [80, 4000, 60], [760, 2000, 0], "steel"],
      ["권상기", "motor", "cyl", [280, 420], [0, 4200, -600], "steel"],
      ["도르래", "transmission", "cyl", [320, 90], [0, 4200, 0], "steel"],
      ["균형추", "shell", "box", [700, 1200, 300], [0, 1400, -900], "steel"],
      ["브레이크", "actuator", "cyl", [180, 120], [0, 4200, -880], "steel"],
      ["제어 패널", "shell", "box", [500, 1600, 300], [900, 2000, -900], "matte"],
      ["안전장치", "sensor", "box", [200, 300, 160], [-760, 400, 0], "steel"],
    ],
    bomExtra: {
      "브레이크": { supplier: "Demo Building", partNo: "BRK-EL10", price: 2100000, stock: 1, life: "법정 연 1회 점검", torque: "M12 60 N·m" },
      "안전장치": { supplier: "Wittur", partNo: "SG-500", price: 1650000, stock: 1, life: "법정 점검 대상", torque: null },
    },
    procedures: [{
      procedureId: "EL10-ANNUAL-INSPECT", title: "법정 연간 점검", kind: "inspection", minutes: 120, role: "certified_inspector",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "승강로 출입 전 주 전원을 차단하고 점검 표지를 부착합니다.", text: "운행을 정지하고 점검 모드로 전환합니다.", min: 15 },
        { action: "inspect", part: "브레이크", tool: "feeler_gauge", torque: "M12 60 N·m", dir: null, safety: null, text: "제동 라이닝 두께와 간극을 측정합니다.", min: 30 },
        { action: "inspect", part: "안전장치", tool: "test_rig", torque: null, dir: null, safety: "과속조절기 작동 시험 중 카에 탑승하지 않습니다.", text: "비상정지 장치 작동 시험을 수행합니다.", min: 45 },
        { action: "measure", part: "도르래", tool: "rope_gauge", torque: null, dir: null, safety: null, text: "로프 마모율과 홈 마모를 측정합니다.", min: 30 },
      ],
    }],
    faults: [{ symptom: "착상 오차", parts: ["권상기", "브레이크"], action: "엔코더 및 제동 지연 점검" }],
  },
  {
    id: "datacenter-rack", name: "서버 랙 DC-42U", model: "DC-42U", maker: "Demo IT",
    category: "전자제품", family: "Enclosure", status: "released", version: "1.0",
    owner: "인프라팀", market: "데이터센터",
    summary: "42U 표준 랙. 서버와 PDU, 냉각 유닛이 수납되고 상부에 케이블 트레이가 지난다.",
    mates: { spin: ["팬"], slide: ["서버 A","서버 B","서버 C"] },
    parts: [
      ["랙 프레임", "frame", "box", [600, 2000, 1000], [0, 1000, 0], "steel"],
      ["서버 A", "shell", "box", [480, 88, 800], [0, 1700, 0], "matte"],
      ["서버 B", "shell", "box", [480, 88, 800], [0, 1600, 0], "matte"],
      ["서버 C", "shell", "box", [480, 88, 800], [0, 1500, 0], "matte"],
      ["PDU", "shell", "box", [80, 1600, 90], [270, 900, -420], "matte"],
      ["냉각 유닛", "shell", "box", [560, 400, 900], [0, 300, 0], "aluminum"],
      ["팬", "actuator", "cyl", [90, 40], [0, 1900, -420], "matte"],
      ["케이블 트레이", "frame", "box", [560, 60, 200], [0, 1980, 380], "aluminum"],
      ["네트워크 스위치", "shell", "box", [480, 44, 500], [0, 1800, 0], "matte"],
      ["온도 센서", "sensor", "box", [40, 20, 20], [250, 1750, 420], "abs"],
    ],
    bomExtra: {
      "서버 A": { supplier: "Demo IT", partNo: "SRV-2U-A", price: 8500000, stock: 3, life: "5년", torque: null },
      "냉각 유닛": { supplier: "Vertiv", partNo: "CRV-35", price: 12000000, stock: 1, life: null, torque: null },
    },
    procedures: [{
      procedureId: "DC42U-SERVER-SWAP", title: "서버 교체", kind: "maintenance", minutes: 35, role: "technician",
      steps: [
        { action: "power_off", part: "서버 A", tool: null, torque: null, dir: null, safety: "워크로드 이전 완료를 확인하고 전원을 내립니다.", text: "대상 서버를 셧다운합니다.", min: 10 },
        { action: "disconnect", part: "네트워크 스위치", tool: "hand", torque: null, dir: null, safety: null, text: "네트워크와 전원 케이블을 라벨 순서대로 분리합니다.", min: 8 },
        { action: "extract", part: "서버 A", tool: "hand", torque: null, dir: [0, 0, 1], safety: "2인 1조로 지지합니다.", text: "레일 래치를 풀고 서버를 전면으로 인출합니다.", min: 17 },
      ],
    }],
    faults: [{ symptom: "랙 온도 상승", parts: ["팬", "냉각 유닛"], action: "팬 회전수 및 흡기 온도 확인" }],
  },
  {
    id: "infusion-pump", name: "의료용 주입펌프 IP-3", model: "IP-3", maker: "Demo Medical",
    category: "전자제품", family: "Sensor", status: "review", version: "0.9",
    owner: "의료기기팀", market: "병원 자산관리",
    summary: "시린지 구동식 주입펌프. 플런저 드라이브가 스텝 모터로 전진하고 압력 센서가 폐색을 감지한다.",
    mates: { spin: ["모터"], slide: ["플런저 드라이브","도어"] },
    parts: [
      ["하우징", "shell", "box", [240, 120, 160], [0, 60, 0], "abs"],
      ["디스플레이", "display", "box", [110, 70, 8], [-50, 122, 0], "glass"],
      ["제어 보드", "sensor", "box", [180, 6, 120], [0, 40, 0], "abs"],
      ["모터", "motor", "cyl", [18, 44], [70, 60, 0], "matte"],
      ["플런저 드라이브", "actuator", "box", [30, 30, 130], [40, 70, 0], "stainless"],
      ["압력 센서", "force_torque", "box", [24, 14, 20], [-20, 70, 60], "abs"],
      ["배터리", "shell", "box", [90, 20, 60], [-60, 26, 0], "matte"],
      ["도어", "protective_cover", "box", [230, 100, 10], [0, 70, 84], "pc"],
      ["클램프", "gripper", "box", [40, 50, 30], [100, 90, 0], "abs"],
    ],
    bomExtra: {
      "압력 센서": { supplier: "Honeywell", partNo: "ABPD-001", price: 84000, stock: 10, life: "검교정 연 1회", torque: null },
      "배터리": { supplier: "Demo Medical", partNo: "BAT-IP3", price: 120000, stock: 8, life: "2년", torque: null },
    },
    procedures: [{
      procedureId: "IP3-CALIBRATION", title: "유량 검교정", kind: "inspection", minutes: 50, role: "biomedical_engineer",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "환자 연결이 해제된 상태에서만 수행합니다.", text: "장비를 환자에게서 분리하고 검교정 모드로 진입합니다.", min: 5 },
        { action: "measure", part: "플런저 드라이브", tool: "flow_analyzer", torque: null, dir: [0, 0, -1], safety: null, text: "기준 유량계로 실제 토출량을 측정합니다. 허용 오차 ±5%.", min: 30 },
        { action: "adjust", part: "제어 보드", tool: "service_software", torque: null, dir: null, safety: null, text: "보정 계수를 입력하고 시리얼별 이력에 기록합니다.", min: 15 },
      ],
    }],
    faults: [{ symptom: "폐색 경보 오작동", parts: ["압력 센서"], action: "센서 영점 및 배관 저항 확인" }],
  },
  {
    id: "industrial-ct", name: "산업용 CT 검사장비 CT-2", model: "CT-2", maker: "Demo Inspection",
    category: "전자제품", family: "Sensor", status: "review", version: "0.7",
    owner: "품질검사팀", market: "비파괴검사",
    summary: "X선 소스와 디텍터 사이에서 회전 테이블이 시료를 돌린다. 캐비닛이 방사선을 차폐한다.",
    mates: { spin: ["회전 테이블","테이블 구동 모터"], slide: ["리니어 스테이지","안전 도어"] },
    parts: [
      ["캐비닛", "shell", "box", [1800, 2000, 1600], [0, 1000, 0], "steel",
        { detail: { ribs: { n: 5, w: 40, h: 1900, len: 30, span: 1600, z: 810 } } }],
      ["X선 소스", "shell", "cyl", [140, 380], [-600, 900, 0], "steel",
        { rot: [0, 0, Math.PI / 2], detail: { fins: { n: 10, w: 8, h: 300, len: 26, r: 140 } } }],
      ["콜리메이터", "tool", "cone", [90, 120], [-420, 900, 0], "steel", { rot: [0, 0, -Math.PI / 2] }],
      ["디텍터", "sensor", "box", [420, 420, 90], [700, 900, 0], "aluminum",
        { detail: { bolts: { n: 4, r: 180, d: 14, h: 100 } } }],
      ["회전 테이블", "actuator", "cyl", [220, 70], [0, 700, 0], "aluminum",
        { detail: { teeth: { n: 36, r: 220, w: 10, h: 40, depth: 14 } } }],
      ["테이블 구동 모터", "motor", "cyl", [60, 130], [180, 600, 0], "matte"],
      ["리니어 스테이지", "transmission", "box", [700, 90, 200], [0, 620, 0], "steel",
        { detail: { ribs: { n: 6, w: 16, h: 60, len: 180, span: 620, y: 40 } } }],
      ["안전 도어", "protective_cover", "box", [1100, 1800, 60], [0, 900, 800], "steel",
        { detail: { ports: { n: 2, r: 40, h: 70, pitch: 700, y: 700, z: 30 } } }],
      ["납 차폐 라이닝", "protective_cover", "box", [1720, 1900, 30], [0, 1000, -760], "steel"],
      ["제어 유닛", "sensor", "box", [500, 700, 400], [1000, 500, -700], "matte"],
      ["인터록 센서", "sensor", "box", [50, 60, 30], [520, 1750, 800], "abs"],
    ],
    bomExtra: {
      "X선 소스": { supplier: "Comet", partNo: "MXR-225", price: 68000000, stock: 1, life: "관구 수명 2,000h", torque: null },
      "인터록 센서": { supplier: "Pilz", partNo: "PSEN-2.1", price: 340000, stock: 4, life: null, torque: null },
    },
    procedures: [{
      procedureId: "CT2-CALIBRATION", title: "기하 캘리브레이션", kind: "inspection", minutes: 90, role: "certified_operator",
      steps: [
        { action: "power_off", part: "X선 소스", tool: null, torque: null, dir: null, safety: "방사선 조사 중지를 확인하고 인터록을 점검합니다.", text: "조사를 중지하고 안전 도어를 잠급니다.", min: 10 },
        { action: "install", part: "회전 테이블", tool: "calibration_phantom", torque: null, dir: [0, 1, 0], safety: null, text: "캘리브레이션 팬텀을 테이블 중심에 고정합니다.", min: 20 },
        { action: "measure", part: "디텍터", tool: "service_software", torque: null, dir: null, safety: "조사 중 캐비닛에 접근하지 않습니다.", text: "회전 중심과 SOD/SDD를 산출해 보정값을 저장합니다.", min: 60 },
      ],
    }],
    faults: [{ symptom: "재구성 이미지 흐림", parts: ["회전 테이블", "디텍터"], action: "회전 중심 캘리브레이션 재수행" }],
  },
  {
    id: "washer-service", name: "드럼 세탁기 WM-9", model: "WM-9", maker: "Demo Home",
    category: "전자제품", family: "Enclosure", status: "released", version: "1.8",
    owner: "서비스센터", market: "가전 서비스",
    summary: "프론트 로딩 드럼 세탁기. 서스펜션이 터브를 지지하고 하부 펌프가 배수한다.",
    mates: { spin: ["드럼","모터","배수 펌프"], slide: ["도어"] },
    parts: [
      ["캐비닛", "shell", "box", [600, 850, 600], [0, 425, 0], "steel"],
      ["도어", "protective_cover", "cyl", [180, 60], [0, 520, 300], "glass"],
      ["드럼", "shell", "cyl", [240, 420], [0, 520, 0], "stainless"],
      ["터브", "shell", "cyl", [268, 460], [0, 520, 0], "abs"],
      ["모터", "motor", "cyl", [80, 110], [0, 520, -220], "matte"],
      ["배수 펌프", "actuator", "cyl", [46, 80], [-200, 120, 100], "abs"],
      ["제어 보드", "sensor", "box", [300, 12, 120], [0, 810, 100], "abs"],
      ["히터", "actuator", "box", [220, 40, 40], [0, 320, 60], "steel"],
      ["서스펜션", "bearing", "cyl", [22, 300], [200, 300, 0], "steel"],
    ],
    bomExtra: {
      "배수 펌프": { supplier: "Askoll", partNo: "M231", price: 48000, stock: 22, life: null, torque: null },
      "도어": { supplier: "Demo Home", partNo: "DR-WM9", price: 96000, stock: 9, life: null, torque: "M5 4 N·m" },
    },
    procedures: [{
      procedureId: "WM9-PUMP-REPLACE", title: "배수 펌프 교체", kind: "maintenance", minutes: 40, role: "service_engineer",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "전원 플러그를 뽑고 급수를 잠급니다.", text: "전원과 급수를 차단합니다.", min: 5 },
        { action: "drain", part: "배수 펌프", tool: "tray", torque: null, dir: [0, -1, 0], safety: "잔수가 남아 있으니 트레이를 받칩니다.", text: "비상 배수 호스로 잔수를 배출합니다.", min: 10 },
        { action: "remove", part: "배수 펌프", tool: "screwdriver_ph2", torque: null, dir: [0, 0, 1], safety: null, text: "하부 커버를 열고 펌프 클램프와 커넥터를 분리합니다.", min: 15 },
        { action: "install", part: "배수 펌프", tool: "screwdriver_ph2", torque: null, dir: [0, 0, -1], safety: null, text: "신품 펌프를 장착하고 누수 시험을 수행합니다.", min: 10 },
      ],
    }],
    faults: [{ symptom: "배수 불량", parts: ["배수 펌프"], action: "펌프 이물 제거 또는 교체" },
      { symptom: "탈수 시 진동", parts: ["서스펜션"], action: "댐퍼 마모 점검" }],
  },
  {
    id: "laptop-assembly", name: "노트북 NB-14", model: "NB-14", maker: "Demo Electronics",
    category: "전자제품", family: "Enclosure", status: "released", version: "2.1",
    owner: "수리기술팀", market: "전자제품 수리·리퍼비시",
    summary: "14인치 클램셸 노트북. 힌지로 디스플레이가 회전하고 하부 케이스에 메인보드와 배터리가 들어간다.",
    mates: { spin: ["디스플레이","힌지 좌","힌지 우","팬"], slide: ["SSD","배터리"] },
    parts: [
      ["상부 커버", "protective_cover", "box", [320, 8, 220], [0, 26, 0], "aluminum"],
      ["디스플레이", "display", "box", [310, 200, 5], [0, 130, -108], "glass"],
      ["힌지 좌", "bearing", "cyl", [7, 40], [-110, 14, -104], "steel"],
      ["힌지 우", "bearing", "cyl", [7, 40], [110, 14, -104], "steel"],
      ["메인보드", "sensor", "box", [220, 4, 110], [0, 12, -40], "abs"],
      ["배터리", "shell", "box", [260, 8, 90], [0, 10, 50], "matte"],
      ["팬", "actuator", "cyl", [26, 6], [80, 14, -70], "abs"],
      ["SSD", "shell", "box", [80, 3, 22], [-70, 14, -20], "abs"],
      ["키보드", "tool", "box", [290, 5, 110], [0, 20, -10], "matte"],
      ["하부 케이스", "shell", "box", [320, 14, 220], [0, 7, 0], "aluminum"],
    ],
    bomExtra: {
      "배터리": { supplier: "Demo Electronics", partNo: "BAT-NB14", price: 118000, stock: 14, life: "800 cycles", torque: "M2 0.3 N·m" },
      "SSD": { supplier: "Samsung", partNo: "PM9A1-512", price: 92000, stock: 20, life: null, torque: "M2 0.3 N·m" },
    },
    procedures: [{
      procedureId: "NB14-BATTERY-REPLACE", title: "배터리 교체", kind: "maintenance", minutes: 25, role: "technician",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "완전 종료 후 어댑터를 분리합니다.", text: "전원을 끄고 충전기를 분리합니다.", min: 3 },
        { action: "remove", part: "하부 케이스", tool: "screwdriver_t5", torque: "M2 0.3 N·m", dir: [0, -1, 0], safety: "나사 길이가 달라 위치를 기록해 둡니다.", text: "하부 나사 10개를 풀고 케이스를 분리합니다.", min: 10 },
        { action: "disconnect", part: "배터리", tool: "spudger", torque: null, dir: null, safety: "배터리 커넥터를 가장 먼저 분리합니다.", text: "배터리 커넥터를 보드에서 분리합니다.", min: 4 },
        { action: "extract", part: "배터리", tool: "hand", torque: null, dir: [0, -1, 0], safety: "배터리를 구부리거나 찌르지 않습니다.", text: "고정 나사를 풀고 배터리를 들어냅니다.", min: 8 },
      ],
    }],
    faults: [{ symptom: "발열 및 소음", parts: ["팬"], action: "팬 먼지 제거 및 서멀 재도포" }],
  },
  {
    id: "hydraulic-cylinder", name: "유압 실린더 HC-80", model: "HC-80", maker: "Demo Heavy",
    category: "산업 장비", family: "Valve", status: "released", version: "1.0",
    owner: "설비관리팀", market: "중장비·농기계",
    summary: "복동식 유압 실린더. 배럴 내부에서 피스톤이 왕복하고 로드 글랜드가 로드를 지지·밀봉한다.",
    mates: { spin: [], slide: ["피스톤","로드"] },
    parts: [
      ["실린더 배럴", "shell", "tube", [50, 620], [0, 60, 0], "steel"],
      ["피스톤", "actuator", "cyl", [46, 60], [0, 60, 0], "steel"],
      ["로드", "transmission", "cyl", [22, 700], [0, 60, 0], "chrome"],
      ["로드 글랜드", "bearing", "tube", [44, 60], [0, 60, 300], "steel"],
      ["실", "bearing", "torus", [23, 3], [0, 60, 300], "rubber"],
      ["포트 A", "tool", "cyl", [12, 40], [50, 60, -260], "steel"],
      ["포트 B", "tool", "cyl", [12, 40], [50, 60, 260], "steel"],
      ["핀", "bearing", "cyl", [16, 90], [0, 60, -360], "steel"],
      ["부싱", "bearing", "tube", [22, 60], [0, 60, -360], "brass"],
    ],
    bomExtra: {
      "실": { supplier: "NOK", partNo: "SEAL-80-KIT", price: 74000, stock: 16, life: "2,000h", torque: null },
      "로드": { supplier: "Demo Heavy", partNo: "ROD-80", price: 420000, stock: 3, life: null, torque: null },
    },
    procedures: [{
      procedureId: "HC80-SEAL-REPLACE", title: "실 키트 교체", kind: "maintenance", minutes: 75, role: "service_engineer",
      steps: [
        { action: "power_off", part: null, tool: null, torque: null, dir: null, safety: "유압을 완전히 제거하고 잔압을 확인합니다.", text: "장비를 안전 자세로 내리고 유압을 해제합니다.", min: 15 },
        { action: "disconnect", part: "포트 A", tool: "wrench_22mm", torque: null, dir: null, safety: "고압 오일 분출에 주의합니다.", text: "유압 호스를 분리하고 포트를 막습니다.", min: 10 },
        { action: "remove", part: "로드 글랜드", tool: "spanner_wrench", torque: null, dir: [0, 0, 1], safety: null, text: "글랜드를 풀고 로드 어셈블리를 인출합니다.", min: 25 },
        { action: "install", part: "실", tool: "seal_tool", torque: null, dir: null, safety: "실 립을 손상시키지 않게 삽입 콘을 사용합니다.", text: "신품 실 키트를 순서대로 장착합니다.", min: 25 },
      ],
    }],
    faults: [{ symptom: "로드 누유", parts: ["실", "로드 글랜드"], action: "실 키트 교체 및 로드 표면 손상 확인" }],
  },
  {
    id: "power-tool-family", name: "전동공구 제품군 PT-Line", model: "PT-LINE", maker: "Demo Tools",
    category: "산업 장비", family: "Motor", status: "released", version: "3.0",
    owner: "제품기획팀", market: "전동공구·배터리 생태계",
    summary: "공통 18V 배터리 플랫폼을 쓰는 공구군. 드릴 본체를 기준으로 배터리와 충전기가 호환된다.",
    mates: { spin: ["모터","척","기어박스"], slide: ["배터리 팩"] },
    parts: [
      ["드릴 하우징", "shell", "box", [70, 200, 210], [0, 150, 0], "abs"],
      ["모터", "motor", "cyl", [26, 80], [0, 200, -40], "copper"],
      ["기어박스", "gearbox", "cyl", [30, 60], [0, 200, 40], "aluminum"],
      ["척", "gripper", "cyl", [24, 55], [0, 200, 100], "steel"],
      ["트리거", "tool", "box", [18, 34, 20], [0, 120, 30], "rubber"],
      ["배터리 팩", "shell", "box", [80, 70, 110], [0, 40, 0], "matte"],
      ["충전기", "shell", "box", [140, 70, 120], [220, 35, 0], "matte"],
    ],
    bomExtra: {
      "배터리 팩": { supplier: "Demo Tools", partNo: "BP-18V-4A", price: 89000, stock: 40, life: "1,000 cycles", torque: null },
      "척": { supplier: "Rohm", partNo: "CHK-13", price: 34000, stock: 18, life: null, torque: "13mm 키레스" },
    },
    procedures: [{
      procedureId: "PTLINE-CHUCK-REPLACE", title: "척 교체", kind: "maintenance", minutes: 15, role: "technician",
      steps: [
        { action: "power_off", part: "배터리 팩", tool: "hand", torque: null, dir: [0, -1, 0], safety: "배터리를 반드시 분리합니다.", text: "배터리 팩을 분리합니다.", min: 2 },
        { action: "remove", part: "척", tool: "hex_key_5mm", torque: null, dir: [0, 0, 1], safety: null, text: "척 내부 역나사를 풀고 스핀들에서 분리합니다.", min: 7 },
        { action: "install", part: "척", tool: "hex_key_5mm", torque: null, dir: [0, 0, -1], safety: null, text: "신품 척을 스핀들에 체결하고 흔들림을 확인합니다.", min: 6 },
      ],
    }],
    faults: [{ symptom: "척 흔들림", parts: ["척", "기어박스"], action: "스핀들 런아웃 측정 후 척 교체" }],
  },
];

/* ==========================================================================
   Variants. A catalogue with one entry per product cannot answer "what else
   fits this mount" or "what replaces the discontinued part", which is most of
   what an owner actually asks. Each base product gets two derivatives that
   differ in a way engineers care about: a size step and a specification step.
   The relations between them are real, so the searches return real answers.
   ========================================================================== */
/* A derivative that only scales uniformly, or only swaps a material, renders as
   the same picture as its parent. Real derivatives differ in what they are made
   of: a bigger machine gets a longer body and more repeated modules, a
   corrosion-rated one gets a jacket and a guard. Each rule therefore rewrites
   the part list, not just its numbers. */
const REPEATABLE = /모듈|서버|롤러|유성기어|핑거|프로펠러|암 |코일|필터|셀|암\d/;

const VARIANT_RULES = [
  {
    suffix: "-L", tag: "대형", status: "released",
    bump: (v) => `${(Number(v) + 0.1).toFixed(1)}`,
    note: (b) => `${b} 대비 용량 상향형. 본체를 길게 늘이고 반복 모듈을 추가했습니다. 장착 인터페이스는 동일합니다.`,
    /* stretch the dominant axis instead of everything, then clone one more of
       whatever the product repeats, so the silhouette actually changes */
    transform(parts) {
      const out = parts.map((p) => {
        const [name, sem, kind, size, pos, mat, opt] = p;
        const s = kind === "box"
          ? [size[0] * 1.38, size[1] * 1.05, size[2] * 1.12].map((v) => Math.round(v * 10) / 10)
          : size.map((v, i) => Math.round(v * (i === 1 ? 1.34 : 1.06) * 10) / 10);
        const q = [pos[0] * 1.3, pos[1] * 1.12, pos[2] * 1.06].map((v) => Math.round(v * 10) / 10);
        return [name, sem, kind, s, q, mat, opt];
      });
      const rep = out.find((p) => REPEATABLE.test(p[0]));
      if (rep) {
        const [name, sem, kind, size, pos, mat, opt] = rep;
        const step = (size[0] || 40) * 1.25;
        out.push([`${name} 확장`, sem, kind, size, [pos[0] + step, pos[1], pos[2]], mat, opt]);
        out.push([`${name} 확장 2`, sem, kind, size, [pos[0] - step, pos[1], pos[2]], mat, opt]);
      }
      return out;
    },
  },
  {
    suffix: "-HT", tag: "고온·내식", status: "review",
    bump: (v) => `${(Number(v) + 1).toFixed(1)}`,
    note: (b) => `${b}의 고온·내식 사양. 습동부 재질을 올리고 냉각 자켓과 보호 가드를 추가했습니다.`,
    transform(parts) {
      const out = parts.map((p) => {
        const [name, sem, kind, size, pos, mat, opt] = p;
        const m = ["steel", "aluminum"].includes(mat) ? "stainless" : mat;
        // thicker walls and flanges on the pressure-bearing members
        const s = ["shell", "protective_cover", "panel"].includes(sem)
          ? size.map((v, i) => Math.round(v * (i === 1 ? 1.0 : 1.09) * 10) / 10)
          : size;
        return [name, sem, kind, s, pos, m, opt];
      });
      // the parts that make this variant visibly different
      const biggest = out.reduce((a, b) => ((a[3][0] || 0) > (b[3][0] || 0) ? a : b), out[0]);
      if (biggest) {
        const [, , , size, pos] = biggest;
        const r = (size[0] || 60) * 0.62;
        out.push(["냉각 자켓", "protective_cover", "tube", [r, (size[1] || 80) * 0.72], [pos[0], pos[1], pos[2]], "copper",
          { detail: { fins: { n: 14, w: 3, h: (size[1] || 80) * 0.5, len: r * 0.2, r } } }]);
        out.push(["보호 가드", "protective_cover", "box",
          [(size[0] || 60) * 1.5, (size[1] || 80) * 0.28, (size[2] || 60) * 0.14],
          [pos[0], pos[1] + (size[1] || 80) * 0.62, pos[2]], "stainless",
          { detail: { ribs: { n: 5, w: 6, h: (size[1] || 80) * 0.2, len: 12, span: (size[0] || 60) } } }]);
        out.push(["온도 센서", "sensor", "cyl", [Math.max(6, r * 0.12), Math.max(18, r * 0.3)],
          [pos[0] + r * 0.9, pos[1], pos[2]], "abs"]);
      }
      return out;
    },
  },
];

/** expand the 20 base products into base + 2 structurally distinct derivatives */
export function withVariants(list = DATASETS) {
  const out = [];
  for (const ds of list) {
    out.push(ds);
    VARIANT_RULES.forEach((rule, vi) => {
      out.push({
        ...ds,
        id: `${ds.id}${rule.suffix.toLowerCase()}`,
        name: `${ds.name} ${rule.tag}`,
        model: `${ds.model}${rule.suffix}`,
        version: rule.bump(ds.version),
        status: rule.status,
        parts: rule.transform(ds.parts),
        summary: `${ds.summary} ${rule.note(ds.model)}`,
        variantOf: ds.id,
        variantOfModel: ds.model,
        variantNote: rule.note(ds.model),
        variantKind: vi === 0 ? "size" : "spec",
      });
    });
  }
  return out;
}

/** part material key → visual colour hint for the seed build */
export const MAT_COLOR = {
  steel: 0x8d949e, stainless: 0xb4bac2, aluminum: 0xa8adb5, brass: 0xb99a54,
  copper: 0xb87a52, chrome: 0xd2d7de, matte: 0x3c4048, abs: 0x4a4e57,
  nylon: 0x9aa0a8, pc: 0x9fb2c4, rubber: 0x2c2f35, silicone: 0xd8d3cc,
  glass: 0xa9c6d8, ceramic: 0xd7d2c8, carbon: 0x2a2d33, wood: 0x9a7448,
  gold: 0xd4af37, silver: 0xc7ccd3, titanium: 0x9ba0a6, pla: 0xbfc4cb, pom: 0xd0d3d8,
};
