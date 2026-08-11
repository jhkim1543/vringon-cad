/* ==========================================================================
   Precision machined parts.

   These are the part families a job shop actually turns and mills: index
   couplings, housings, turned shafts, impellers, valve bodies, jig plates.
   Unlike the twenty industry datasets, which describe whole machines out of
   coarse primitives, every rotational part here is authored as a **turned
   profile** — [radius, height] pairs in millimetres — so the chamfers, steps,
   undercuts, seal grooves and spigots are geometry rather than caption text.

   That is the whole point of the file. A cylinder with a note saying "chamfer
   1x45" measures as a cylinder; a profile with the chamfer in it measures as a
   chamfered part, and the design sheet reads the feature back out.

   part: [name, semanticType, primitive, size, position, material, opts]
     lathe  size = [[r,y], ...]   the profile, bottom to top
     box    size = [w,h,d]
     cyl    size = [r,h]
   ========================================================================== */

export const PRECISION_PARTS = [
  {
    id: "index-coupling-90", name: "인덱스 커플링 90T", model: "IC-90", maker: "Demo Precision",
    category: "정밀 가공품", family: "Index Coupling", status: "released", version: "2.0",
    owner: "가공기술팀", market: "공작기계·인덱싱 테이블",
    summary: "커빅 커플링 한 쌍. 맞물린 치형이 회전 위치를 기계적으로 고정하고, 축방향으로 떨어졌다 다시 맞물리며 4도 단위로 인덱싱한다.",
    mates: { spin: ["상부 커플링"], slide: ["상부 커플링"] },
    parts: [
      ["하부 커플링", "transmission", "lathe", [
        [0, 0], [58, 0], [60, 2], [60, 12], [58, 14], [44, 14], [42, 16], [42, 26], [0, 26],
      ], [0, 13, 0], "steel",
        { detail: { teeth: { n: 90, w: 3.2, h: 6, depth: 16, r: 52 }, bolts: { n: 8, r: 48, d: 9, h: 28, y: 0 } } }],
      ["상부 커플링", "transmission", "lathe", [
        [0, 0], [42, 0], [42, 10], [44, 12], [58, 12], [60, 14], [60, 24], [58, 26], [0, 26],
      ], [0, 42, 0], "steel",
        { detail: { teeth: { n: 90, w: 3.2, h: 6, depth: 16, r: 52 }, bolts: { n: 8, r: 48, d: 9, h: 28, y: 0 } } }],
      ["파일럿 부시", "bearing", "lathe", [
        [14, 0], [22, 0], [22, 30], [14, 30], [14, 0],
      ], [0, 28, 0], "bronze"],
    ],
    bom: [
      ["하부 커플링", "IC90-L", "SCM440 침탄", 1, 480000, "정밀가공", 30000, 8],
      ["상부 커플링", "IC90-U", "SCM440 침탄", 1, 480000, "정밀가공", 30000, 8],
      ["파일럿 부시", "IC90-B", "알루미늄청동", 1, 42000, "부싱상사", 8000, 2],
    ],
  },
  {
    id: "index-coupling-ring", name: "인덱싱 링기어 커플링", model: "ICR-320", maker: "Demo Precision",
    category: "정밀 가공품", family: "Index Coupling", status: "released", version: "1.4",
    owner: "가공기술팀", market: "선회 베어링·로터리 테이블",
    summary: "외치 링기어가 일체로 가공된 대형 인덱싱 커플링. 상단 스피것이 테이블을 잡고 볼트 서클로 베이스에 체결된다.",
    mates: { spin: ["링기어 본체"], slide: [] },
    parts: [
      ["링기어 본체", "transmission", "lathe", [
        [78, 0], [158, 0], [160, 2], [160, 16], [156, 20], [156, 30], [152, 34],
        [120, 34], [118, 32], [118, 22], [78, 22], [78, 0],
      ], [0, 17, 0], "steel",
        { detail: { teeth: { n: 120, w: 5.5, h: 9, depth: 16, r: 152 }, bolts: { n: 12, r: 100, d: 13, h: 36, y: 0 } } }],
      ["상부 스피것 링", "shell", "lathe", [
        [80, 0], [116, 0], [118, 2], [118, 12], [116, 14], [80, 14], [80, 0],
      ], [0, 41, 0], "steel",
        { detail: { bolts: { n: 8, r: 98, d: 9, h: 16, y: 0 } } }],
    ],
    bom: [
      ["링기어 본체", "ICR-320-M", "SCM415 침탄연삭", 1, 2400000, "정밀가공", 90000, 20],
      ["상부 스피것 링", "ICR-320-S", "S45C", 1, 190000, "정밀가공", 30000, 8],
    ],
  },
  {
    id: "prec-housing", name: "정밀 하우징 세트", model: "PH-120", maker: "Demo Precision",
    category: "정밀 가공품", family: "Housing", status: "released", version: "1.1",
    owner: "가공기술팀", market: "감속기·펌프",
    summary: "베어링 하우징 본체와 플랜지 커버. 본체 안쪽에 베어링 시트 두 단과 스냅링 홈이 가공되어 있고 커버가 실을 눌러 고정한다.",
    mates: { spin: [], slide: [] },
    parts: [
      ["하우징 본체", "shell", "lathe", [
        [0, 0], [62, 0], [64, 2], [64, 10], [58, 10], [58, 62], [64, 62], [64, 74], [62, 76],
        [44, 76], [44, 70], [46, 68], [46, 20], [44, 18], [44, 8], [0, 8],
      ], [0, 38, 0], "steel",
        { detail: { bolts: { n: 6, r: 56, d: 9, h: 12, y: -32 } } }],
      ["플랜지 커버", "protective_cover", "lathe", [
        [0, 0], [43, 0], [43, 6], [64, 6], [66, 8], [66, 16], [64, 18], [0, 18],
      ], [0, 85, 0], "steel",
        { detail: { bolts: { n: 6, r: 56, d: 8, h: 20, y: 0 } } }],
      ["베어링 부시", "bearing", "lathe", [
        [30, 0], [44, 0], [44, 34], [30, 34], [30, 0],
      ], [0, 55, 0], "bronze"],
    ],
    bom: [
      ["하우징 본체", "PH120-H", "FC250 가공", 1, 260000, "정밀가공", 45000, 12],
      ["플랜지 커버", "PH120-C", "S45C", 1, 78000, "정밀가공", 20000, 6],
      ["베어링 부시", "PH120-B", "알루미늄청동", 1, 54000, "부싱상사", 9000, 3],
    ],
  },
  {
    id: "prec-worm-shaft", name: "웜 샤프트", model: "WS-40", maker: "Demo Precision",
    category: "정밀 가공품", family: "Shaft", status: "released", version: "1.0",
    owner: "가공기술팀", market: "감속기",
    summary: "일체형 웜 기어를 가진 전동축. 양 끝 저널이 베어링에, 중앙 웜부가 웜휠에 물리며, 축단 키홈으로 동력을 받는다.",
    mates: { spin: ["웜 샤프트 본체"], slide: [] },
    parts: [
      ["웜 샤프트 본체", "transmission", "lathe", [
        [0, 0], [11, 0], [12, 1], [12, 34], [14, 34], [14, 40], [17, 43], [17, 96],
        [14, 99], [14, 108], [20, 108], [20, 140], [18, 142], [18, 168],
        [16, 170], [16, 196], [15, 197], [0, 197],
      ], [0, 98, 0], "stainless",
        { detail: { teeth: { n: 20, w: 5, h: 5, depth: 6, r: 17, y: 0 } } }],
      ["전단 베어링", "bearing", "lathe", [
        [12, 0], [24, 0], [24, 22], [12, 22], [12, 0],
      ], [0, 15, 0], "steel"],
      ["후단 베어링", "bearing", "lathe", [
        [16, 0], [30, 0], [30, 24], [16, 24], [16, 0],
      ], [0, 180, 0], "steel"],
    ],
    bom: [
      ["웜 샤프트 본체", "WS40-S", "SCM440 QT 연삭", 1, 320000, "정밀가공", 40000, 15],
      ["전단 베어링", "WS40-B1", "베어링강", 1, 28000, "베어링상사", 4000, 4],
      ["후단 베어링", "WS40-B2", "베어링강", 1, 34000, "베어링상사", 4000, 4],
    ],
  },
  {
    id: "prec-gear-shaft", name: "기어 샤프트", model: "GS-60", maker: "Demo Precision",
    category: "정밀 가공품", family: "Shaft", status: "released", version: "1.2",
    owner: "가공기술팀", market: "감속기·주축",
    summary: "축 끝에 헬리컬 치형이 일체 가공된 전동축. 중간 저널이 두 단으로 내려가며 각 단에 챔퍼와 언더컷이 있다.",
    mates: { spin: ["기어 샤프트 본체"], slide: [] },
    parts: [
      ["기어 샤프트 본체", "transmission", "lathe", [
        [0, 0], [21, 0], [22, 1], [22, 40], [20, 42], [20, 96], [18, 98],
        [18, 150], [16, 152], [16, 206], [15, 207], [0, 207],
      ], [0, 104, 0], "stainless"],
      ["헬리컬 기어부", "transmission", "lathe", [
        [0, 0], [30, 0], [32, 2], [32, 40], [30, 42], [0, 42],
      ], [0, 228, 0], "stainless",
        { detail: { teeth: { n: 24, w: 5, h: 7, depth: 40, r: 30 } } }],
    ],
    bom: [
      ["기어 샤프트 본체", "GS60-S", "SNCM220 침탄연삭", 1, 410000, "정밀가공", 45000, 18],
      ["헬리컬 기어부", "GS60-G", "SNCM220 침탄연삭", 1, 260000, "정밀가공", 45000, 14],
    ],
  },
  {
    id: "prec-seal-shaft", name: "실 샤프트", model: "SS-75", maker: "Demo Precision",
    category: "정밀 가공품", family: "Shaft", status: "released", version: "1.0",
    owner: "가공기술팀", market: "펌프·교반기",
    summary: "다단 실 홈이 연속으로 가공된 축. 아래 플랜지가 본체에 앉고 홈마다 실 링이 들어가 단계적으로 압력을 낮춘다.",
    mates: { spin: ["실 샤프트 본체"], slide: [] },
    parts: [
      ["플랜지 베이스", "shell", "lathe", [
        [0, 0], [62, 0], [64, 2], [64, 12], [62, 14], [0, 14],
      ], [0, 7, 0], "stainless",
        { detail: { bolts: { n: 8, r: 54, d: 9, h: 16, y: 0 } } }],
      ["실 샤프트 본체", "transmission", "lathe", [
        [0, 0], [26, 0], [26, 6], [34, 6], [34, 12], [26, 12], [26, 18], [34, 18], [34, 24],
        [26, 24], [26, 30], [34, 30], [34, 36], [26, 36], [26, 42], [34, 42], [34, 48],
        [26, 48], [26, 54], [34, 54], [34, 60], [26, 60], [26, 78], [24, 80], [24, 104],
        [22, 106], [0, 106],
      ], [0, 67, 0], "stainless"],
    ],
    bom: [
      ["플랜지 베이스", "SS75-F", "STS316 가공", 1, 145000, "정밀가공", 25000, 8],
      ["실 샤프트 본체", "SS75-S", "STS316 연삭", 1, 380000, "정밀가공", 40000, 16],
    ],
  },
  {
    id: "prec-impeller", name: "폐쇄형 임펠러", model: "IMP-180", maker: "Demo Precision",
    category: "정밀 가공품", family: "Impeller", status: "released", version: "1.3",
    owner: "가공기술팀", market: "원심펌프",
    summary: "전면 슈라우드와 후면 디스크 사이에 곡선 베인 6장이 들어간 폐쇄형 임펠러. 중앙 보스에 키홈이 있고 흡입구가 전면에 열린다.",
    mates: { spin: ["임펠러 본체"], slide: [] },
    parts: [
      ["임펠러 본체", "actuator", "lathe", [
        [0, 0], [88, 0], [90, 2], [90, 8], [86, 12], [60, 30], [44, 38], [44, 46],
        [30, 46], [30, 20], [0, 20],
      ], [0, 23, 0], "stainless",
        { detail: { fins: { n: 6, w: 5, h: 26, len: 56, r: 34 } } }],
      ["허브 보스", "transmission", "lathe", [
        [14, 0], [30, 0], [30, 34], [14, 34], [14, 0],
      ], [0, 46, 0], "stainless"],
    ],
    bom: [
      ["임펠러 본체", "IMP180-M", "STS316L 5축가공", 1, 890000, "정밀가공", 60000, 22],
      ["허브 보스", "IMP180-H", "STS316L", 1, 96000, "정밀가공", 20000, 6],
    ],
  },
  {
    id: "prec-valve-body", name: "밸브 바디", model: "VB-50", maker: "Demo Precision",
    category: "정밀 가공품", family: "Valve", status: "released", version: "1.1",
    owner: "가공기술팀", market: "유압·공압",
    summary: "각형 밸브 바디. 상단에 나사 포트가 가공되고 내부 보어가 관통하며 네 모서리에 취부 볼트 자리가 있다.",
    mates: { spin: [], slide: ["스풀"] },
    parts: [
      ["바디 블록", "shell", "box", [86, 86, 86], [0, 43, 0], "steel",
        { detail: { bolts: { n: 4, r: 52, d: 11, h: 16, y: -35 } } }],
      ["상부 포트", "tool", "lathe", [
        [0, 0], [30, 0], [30, 6], [26, 10], [26, 26], [24, 28], [16, 28], [16, 0],
      ], [0, 100, 0], "steel"],
      ["스풀", "actuator", "lathe", [
        [0, 0], [14, 0], [14, 12], [10, 14], [10, 26], [14, 28], [14, 40], [10, 42],
        [10, 54], [14, 56], [14, 68], [0, 68],
      ], [0, 43, 0], "stainless"],
    ],
    bom: [
      ["바디 블록", "VB50-B", "S45C 흑착색", 1, 175000, "정밀가공", 30000, 10],
      ["상부 포트", "VB50-P", "S45C", 1, 32000, "정밀가공", 12000, 4],
      ["스풀", "VB50-S", "STS440C 연삭", 1, 128000, "정밀가공", 20000, 8],
    ],
  },
  {
    id: "prec-scroll", name: "스크롤 케이싱", model: "SC-260", maker: "Demo Precision",
    category: "정밀 가공품", family: "Housing", status: "released", version: "1.0",
    owner: "가공기술팀", market: "송풍기·펌프",
    summary: "원심 케이싱. 전면 흡입 노즐이 목을 이루며 뒤로 갈수록 단면이 넓어지고 바깥 플랜지가 배관에 물린다.",
    mates: { spin: [], slide: [] },
    parts: [
      ["케이싱 본체", "shell", "lathe", [
        [0, 0], [128, 0], [130, 2], [130, 14], [126, 18], [126, 44], [122, 48],
        [70, 48], [68, 46], [68, 20], [66, 18], [0, 18],
      ], [0, 24, 0], "aluminum",
        { detail: { bolts: { n: 12, r: 118, d: 9, h: 18, y: -12 } } }],
      ["흡입 노즐", "tool", "lathe", [
        [46, 0], [62, 0], [62, 40], [58, 44], [58, 62], [72, 62], [74, 64],
        [74, 72], [46, 72], [46, 0],
      ], [0, 84, 0], "aluminum"],
    ],
    bom: [
      ["케이싱 본체", "SC260-C", "AC4C 가공", 1, 340000, "정밀주조가공", 55000, 14],
      ["흡입 노즐", "SC260-N", "AC4C 가공", 1, 88000, "정밀가공", 20000, 6],
    ],
  },
  {
    id: "prec-arbor", name: "아버 세트", model: "AR-40", maker: "Demo Precision",
    category: "정밀 가공품", family: "Tooling", status: "released", version: "1.0",
    owner: "가공기술팀", market: "공작기계 툴링",
    summary: "테이퍼 생크 아버. 7/24 테이퍼가 주축에 물리고 풀스터드가 뒤를 잡으며 앞단 파일럿이 커터를 잡는다.",
    mates: { spin: ["아버 본체"], slide: [] },
    parts: [
      ["아버 본체", "tool", "lathe", [
        [0, 0], [12, 0], [12, 16], [22, 16], [22, 22], [21, 24], [21, 60],
        [31, 88], [31, 96], [36, 96], [38, 98], [38, 108], [36, 110], [0, 110],
      ], [0, 55, 0], "steel"],
      ["풀 스터드", "tool", "lathe", [
        [0, 0], [8, 0], [10, 2], [10, 10], [7, 13], [7, 24], [9, 26], [9, 32], [0, 32],
      ], [0, -16, 0], "steel"],
      ["커터 플랜지", "tool", "lathe", [
        [19, 0], [52, 0], [54, 2], [54, 12], [52, 14], [19, 14], [19, 0],
      ], [0, 117, 0], "steel",
        { detail: { bolts: { n: 6, r: 42, d: 7, h: 16, y: 0 } } }],
    ],
    bom: [
      ["아버 본체", "AR40-A", "SCM440 QT 연삭", 1, 285000, "정밀가공", 35000, 12],
      ["풀 스터드", "AR40-P", "SCM435", 1, 24000, "표준품", 6000, 2],
      ["커터 플랜지", "AR40-F", "S45C", 1, 62000, "정밀가공", 15000, 5],
    ],
  },
  {
    id: "prec-manifold", name: "매니폴드 블록", model: "MB-100", maker: "Demo Precision",
    category: "정밀 가공품", family: "Manifold", status: "released", version: "1.2",
    owner: "가공기술팀", market: "유압 시스템",
    summary: "직교 유로가 가공된 매니폴드. 상면에 밸브 취부면 두 곳, 측면에 포트가 나오고 관통 유로가 내부에서 만난다.",
    mates: { spin: [], slide: [] },
    parts: [
      ["블록 본체", "shell", "box", [140, 70, 90], [0, 35, 0], "aluminum",
        { detail: { bolts: { n: 4, r: 62, d: 11, h: 14, y: -28 } } }],
      ["밸브 취부 보스 A", "tool", "lathe", [
        [0, 0], [24, 0], [24, 8], [21, 11], [21, 14], [13, 14], [13, 0],
      ], [-36, 77, 0], "aluminum"],
      ["밸브 취부 보스 B", "tool", "lathe", [
        [0, 0], [24, 0], [24, 8], [21, 11], [21, 14], [13, 14], [13, 0],
      ], [36, 77, 0], "aluminum"],
      ["측면 포트", "tool", "lathe", [
        [0, 0], [18, 0], [18, 6], [15, 9], [15, 20], [9, 20], [9, 0],
      ], [0, 35, 55], "aluminum", { rot: [Math.PI / 2, 0, 0] }],
    ],
    bom: [
      ["블록 본체", "MB100-B", "AL6061-T6 아노다이징", 1, 210000, "정밀가공", 35000, 10],
      ["밸브 취부 보스 A", "MB100-VA", "AL6061-T6", 1, 18000, "정밀가공", 8000, 3],
      ["밸브 취부 보스 B", "MB100-VB", "AL6061-T6", 1, 18000, "정밀가공", 8000, 3],
      ["측면 포트", "MB100-P", "AL6061-T6", 1, 14000, "정밀가공", 8000, 3],
    ],
  },
  {
    id: "prec-jig-pallet", name: "지그 팔레트", model: "JP-250", maker: "Demo Precision",
    category: "정밀 가공품", family: "Fixture", status: "released", version: "1.0",
    owner: "생산기술팀", market: "머시닝센터 치공구",
    summary: "머시닝센터용 팔레트. 상면에 T홈과 위치결정 부시가 배치되고 하면 스피것이 테이블 중심을 잡는다.",
    mates: { spin: [], slide: [] },
    parts: [
      ["팔레트 플레이트", "shell", "box", [250, 32, 250], [0, 16, 0], "steel",
        { detail: { bolts: { n: 8, r: 106, d: 13, h: 36, y: 0 } } }],
      ["센터 스피것", "tool", "lathe", [
        [0, 0], [40, 0], [40, 14], [38, 16], [0, 16],
      ], [0, -8, 0], "steel"],
      ["위치결정 부시", "bearing", "lathe", [
        [8, 0], [15, 0], [15, 22], [8, 22], [8, 0],
      ], [80, 43, 80], "steel"],
      ["클램프 블록", "tool", "box", [46, 30, 34], [-80, 47, -80], "steel"],
    ],
    bom: [
      ["팔레트 플레이트", "JP250-P", "S50C 조질연삭", 1, 420000, "정밀가공", 60000, 16],
      ["센터 스피것", "JP250-S", "SCM440", 1, 48000, "정밀가공", 12000, 4],
      ["위치결정 부시", "JP250-B", "STS440C 연삭", 4, 16000, "표준품", 4000, 2],
      ["클램프 블록", "JP250-C", "S45C", 2, 32000, "정밀가공", 10000, 3],
    ],
  },
  {
    id: "prec-universal-joint", name: "유니버설 조인트", model: "UJ-90", maker: "Demo Precision",
    category: "정밀 가공품", family: "Coupling", status: "released", version: "1.1",
    owner: "가공기술팀", market: "동력전달",
    summary: "요크 두 개가 십자축으로 연결된 자재이음. 각 요크 다리에 니들 베어링 컵이 압입되고 축은 스플라인 슬리브로 이어진다.",
    mates: { spin: ["십자축"], slide: [] },
    parts: [
      ["구동 요크", "transmission", "lathe", [
        [0, 0], [34, 0], [36, 2], [36, 30], [34, 32], [22, 32], [22, 58], [0, 58],
      ], [0, 29, 0], "steel"],
      ["십자축", "transmission", "cyl", [13, 84], [0, 66, 0], "steel", { rot: [Math.PI / 2, 0, 0] }],
      ["종동 요크", "transmission", "lathe", [
        [0, 0], [22, 0], [22, 26], [34, 26], [36, 28], [36, 56], [34, 58], [0, 58],
      ], [0, 103, 0], "steel"],
      ["니들 베어링 컵", "bearing", "lathe", [
        [10, 0], [15, 0], [15, 20], [10, 20], [10, 0],
      ], [0, 66, 42], "steel", { rot: [Math.PI / 2, 0, 0] }],
    ],
    bom: [
      ["구동 요크", "UJ90-Y1", "SCM440 단조가공", 1, 132000, "정밀가공", 25000, 8],
      ["십자축", "UJ90-X", "SNCM420 침탄연삭", 1, 88000, "정밀가공", 20000, 6],
      ["종동 요크", "UJ90-Y2", "SCM440 단조가공", 1, 132000, "정밀가공", 25000, 8],
      ["니들 베어링 컵", "UJ90-C", "베어링강", 4, 18000, "베어링상사", 5000, 3],
    ],
  },
  {
    id: "prec-sprocket", name: "어태치 헤드 스프로킷", model: "SP-32T", maker: "Demo Precision",
    category: "정밀 가공품", family: "Sprocket", status: "released", version: "1.0",
    owner: "가공기술팀", market: "컨베이어·체인 구동",
    summary: "32치 스프로킷과 어태치 헤드. 치형이 가공된 림 안쪽으로 웨브가 얇아지고 중앙 허브에 키홈이 들어간다.",
    mates: { spin: ["스프로킷 본체"], slide: [] },
    parts: [
      ["스프로킷 본체", "transmission", "lathe", [
        [0, 0], [30, 0], [30, 6], [78, 6], [80, 8], [80, 20], [78, 22], [30, 22],
        [30, 34], [0, 34],
      ], [0, 17, 0], "steel",
        { detail: { teeth: { n: 32, w: 6, h: 10, depth: 16, r: 80 } } }],
      ["허브 칼라", "transmission", "lathe", [
        [14, 0], [30, 0], [30, 24], [14, 24], [14, 0],
      ], [0, 46, 0], "steel",
        { detail: { bolts: { n: 4, r: 22, d: 7, h: 26, y: 0 } } }],
    ],
    bom: [
      ["스프로킷 본체", "SP32-M", "S45C 고주파열처리", 1, 168000, "정밀가공", 25000, 9],
      ["허브 칼라", "SP32-H", "S45C", 1, 42000, "정밀가공", 12000, 4],
    ],
  },
  {
    id: "prec-press-axis", name: "프레스 액시스", model: "PA-520", maker: "Demo Precision",
    category: "정밀 가공품", family: "Shaft", status: "released", version: "1.0",
    owner: "가공기술팀", market: "프레스·압연",
    summary: "장축 프레스 롤 축. 중앙 저널이 굵고 양단이 단계적으로 가늘어지며 급유 구멍이 축을 따라 배치된다.",
    mates: { spin: ["액시스 본체"], slide: [] },
    parts: [
      ["액시스 본체", "transmission", "lathe", [
        [0, 0], [26, 0], [28, 2], [28, 60], [34, 60], [34, 130], [40, 130],
        [40, 330], [34, 330], [34, 420], [28, 420], [28, 500], [26, 502], [0, 502],
      ], [0, 251, 0], "stainless",
        { detail: { bolts: { n: 6, r: 20, d: 8, h: 380, y: 0 } } }],
      ["저널 부시", "bearing", "lathe", [
        [40, 0], [56, 0], [56, 70], [40, 70], [40, 0],
      ], [0, 165, 0], "bronze"],
    ],
    bom: [
      ["액시스 본체", "PA520-A", "SCM440 QT 연삭", 1, 760000, "정밀가공", 70000, 24],
      ["저널 부시", "PA520-B", "알루미늄청동", 2, 92000, "부싱상사", 14000, 5],
    ],
  },
  {
    id: "prec-cap-ring", name: "정밀 캡·링 세트", model: "CR-140", maker: "Demo Precision",
    category: "정밀 가공품", family: "Ring", status: "released", version: "1.0",
    owner: "가공기술팀", market: "베어링 하우징",
    summary: "베어링 캡과 리테이닝 링. 캡 안쪽에 실 홈과 스피것이 가공되고 링이 외륜을 축방향으로 눌러 고정한다.",
    mates: { spin: [], slide: [] },
    parts: [
      ["베어링 캡", "protective_cover", "lathe", [
        [0, 0], [66, 0], [70, 4], [70, 16], [66, 20], [50, 20], [50, 14],
        [54, 12], [54, 6], [30, 6], [30, 0],
      ], [0, 10, 0], "steel",
        { detail: { bolts: { n: 8, r: 60, d: 9, h: 22, y: 0 } } }],
      ["리테이닝 링", "shell", "lathe", [
        [46, 0], [70, 0], [70, 8], [46, 8], [46, 0],
      ], [0, 24, 0], "steel"],
      ["실 링", "bearing", "lathe", [
        [30, 0], [38, 0], [38, 7], [30, 7], [30, 0],
      ], [0, 3, 0], "rubber"],
    ],
    bom: [
      ["베어링 캡", "CR140-C", "FC250 가공", 1, 96000, "정밀가공", 18000, 6],
      ["리테이닝 링", "CR140-R", "S45C", 1, 34000, "정밀가공", 10000, 3],
      ["실 링", "CR140-S", "NBR", 1, 6000, "표준품", 2000, 1],
    ],
  },
  {
    id: "prec-atc-arm", name: "ATC 암", model: "ATC-320", maker: "Demo Precision",
    category: "정밀 가공품", family: "Arm", status: "released", version: "1.1",
    owner: "가공기술팀", market: "머시닝센터 자동공구교환",
    summary: "공구 교환 암. 양 끝 그리퍼 발톱이 공구 홀더 V홈을 잡고 중앙 허브가 회전·승강한다.",
    mates: { spin: ["암 본체"], slide: ["암 본체"] },
    parts: [
      ["암 본체", "structure", "box", [320, 26, 62], [0, 40, 0], "steel"],
      ["중앙 허브", "transmission", "lathe", [
        [0, 0], [42, 0], [44, 2], [44, 18], [40, 22], [40, 46], [22, 46], [22, 0],
      ], [0, 40, 0], "steel",
        { detail: { bolts: { n: 6, r: 34, d: 8, h: 50, y: 0 } } }],
      ["좌측 그리퍼", "actuator", "lathe", [
        [0, 0], [36, 0], [36, 10], [30, 14], [30, 22], [36, 26], [36, 34], [0, 34],
      ], [-142, 40, 0], "steel"],
      ["우측 그리퍼", "actuator", "lathe", [
        [0, 0], [36, 0], [36, 10], [30, 14], [30, 22], [36, 26], [36, 34], [0, 34],
      ], [142, 40, 0], "steel"],
    ],
    bom: [
      ["암 본체", "ATC320-A", "SCM440 조질", 1, 340000, "정밀가공", 45000, 14],
      ["중앙 허브", "ATC320-H", "SCM440 침탄", 1, 148000, "정밀가공", 25000, 8],
      ["좌측 그리퍼", "ATC320-G1", "S45C 고주파", 1, 76000, "정밀가공", 15000, 5],
      ["우측 그리퍼", "ATC320-G2", "S45C 고주파", 1, 76000, "정밀가공", 15000, 5],
    ],
  },
  {
    id: "prec-bearing-white", name: "화이트메탈 베어링", model: "WM-180", maker: "Demo Precision",
    category: "정밀 가공품", family: "Bearing", status: "released", version: "1.0",
    owner: "가공기술팀", market: "터빈·대형 회전기계",
    summary: "상하 반할 슬리브 베어링. 강 배킹 안쪽에 화이트메탈을 주입해 보어를 다듬고 급유 홈이 양쪽에 파여 있다.",
    mates: { spin: [], slide: [] },
    parts: [
      ["하부 배킹", "shell", "box", [220, 62, 150], [0, 31, 0], "steel"],
      ["상부 배킹", "shell", "box", [220, 62, 150], [0, 95, 0], "steel"],
      ["화이트메탈 라이너", "bearing", "lathe", [
        [58, 0], [72, 0], [72, 140], [58, 140], [58, 0],
      ], [0, 63, 0], "bronze", { rot: [Math.PI / 2, 0, 0] }],
    ],
    bom: [
      ["하부 배킹", "WM180-L", "SS400 가공", 1, 260000, "정밀가공", 40000, 12],
      ["상부 배킹", "WM180-U", "SS400 가공", 1, 260000, "정밀가공", 40000, 12],
      ["화이트메탈 라이너", "WM180-W", "화이트메탈 주입", 1, 420000, "특수공정", 55000, 18],
    ],
  },
];
