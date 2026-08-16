// The geometry-DSL contract, shared verbatim by the browser interpreter and
// the on-prem planner server (which cannot import three.js). Dependency-free.
import { MATERIAL_KEYS } from "./catalog.js?v=832e871a";

export const PROGRAM_SPEC = `기하 DSL 명세 (모든 치수 mm, 모든 수치는 숫자 또는 파라미터 수식 문자열):
- 수식: 파라미터명, 숫자, + - * / % ( ), 함수 min max abs round floor ceil sqrt pow sin cos tan(도 단위), 상수 pi
- program = { id, title(한국어 15자), params, parts, sims? }
- params = { 키: {label(한국어), value, min, max, step} } — 3~8개만. 형태를 지배하는 핵심 치수만 파라미터로 하고
  나머지 세부 수치는 그 파라미터의 수식이나 고정 숫자로 써서 형상 완성도에 집중한다
- parts = [ { id(영문 스네이크), label(한국어), material(재질키), meshes:[Mesh] } ] — 5~14개 파트, 조립 단위로 분리
  **파트당 mesh는 아끼지 말 것.** 한 파트가 mesh 1개면 거의 항상 덜 만든 것이다. 셸 1 + 디테일 3~10이 정상.
  체결 볼트, 리브, 벤트 슬롯, 노치, 각인 자리, 실링 홈, 보스, 러그를 각각 mesh로 넣는다.
- Mesh 공통 배치: x y z (mm), rxDeg ryDeg rzDeg (도). 원점: 부품이 놓일 위치에 직접 배치 (y=0이 바닥)
- Mesh 종류:
  { prim:"box", args:[w,h,d] } | { prim:"roundedBox", args:[w,h,d,r] } — 중심 원점, r은 모서리 라운드
  { prim:"plate", args:[w,d,t,cornerR] } — 바닥에 놓인 라운드 판재 (y 0~t)
  { prim:"cylinder", args:[rTop,rBottom,h] } | { prim:"chamferCyl", args:[r,h,chamfer] } — 축 Y, 중심 y=0
  { prim:"sphere", args:[r] } | { prim:"capsule", args:[r,h] } | { prim:"cone", args:[r,h] }
  { prim:"torus", args:[r,tubeR] } — XY 평면 링. 눕히려면 rxDeg:90
  { prim:"gear", args:[radius,teeth,thickness,boreR] } — 인벌류트 기어, 축 Y
  { prim:"bolt", args:[shankD,len,headD,headH] } — 머리가 위, 아래로 자람
  { prim:"rib", args:[len,height,t] } — 삼각 보강 리브
  { prim:"lathe", profile:[[반경,높이]...] } — Y축 회전체. 병·컵·축·캡·림은 반드시 이것. 높이 오름차순.
    양 끝은 자동으로 축까지 닫혀 솔리드가 된다. 컵처럼 위가 뚫린 형태도 겉면 실루엣만 그리면 된다
  { prim:"loft", sections:[{w,d,y,r}...] } — 높이별 라운드 사각 단면 로프트. 그립·하우징 셸에 사용
  { prim:"gem", gem:{d,shape,cut,ratio,tablePct,crownAngle,pavAngle} } — shape: round/cushion/princess/emerald/oval/marquise/pear, cut: brilliant/step/rose
- 반복 배치: Mesh에 repeat:{count,radius,startDeg?,face?} 추가 — Y축 원형 패턴 (볼트·버튼·스포크·프롱)
  { prim:"handle", args:[loopR,tubeR] } — 머그·주전자 손잡이 전용 세로 C고리. 회전값은 무시된다.
    열린 쪽이 본체를 향하므로 x에는 정확히 본체 반경을 넣으면 자연스럽게 붙는다:
    예) { "prim":"handle","args":["bodyH*0.2",7], "x":"bodyD/2", "y":"bodyH*0.55" }
- 측면 부착물(버튼·노브·포트)은 본체 표면까지 밀어낸다: x:"bodyW/2+1" 처럼 반경 수식으로
- **연결 부재 필수**: 중심축에서 떨어진 위치에 있는 요소(크랭크 손잡이, 노브, 스포크 끝단)는 반드시
  본체와 이어주는 부재를 같은 파트에 함께 넣는다. 손잡이만 공중에 두면 실격이다.
  예) 크랭크 = 세로 축(cylinder) + **가로 암(roundedBox, x를 0에서 armL/2로)** + 끝 손잡이(cylinder, x=armL)
- 바퀴·롤러·다이얼(세워진 원판): cylinder에 rxDeg:90 — 축이 Z(좌우)가 되고 바퀴가 선다. y에는 반경:
  예) 앞바퀴 쌍: { "prim":"cylinder","args":["wheelD/2","wheelD/2","wheelW"], "x":"wheelBase/2", "y":"wheelD/2", "z":"(trackW+wheelW)/2", "rxDeg":90 }
      뒷바퀴 쌍은 x:"-wheelBase/2", 반대쪽은 z에 -를 붙인 mesh를 하나 더 쓴다 (바퀴 4개 = mesh 4개)
  차체는 바퀴 위에 얹는다: 차체 loft의 y 시작을 "wheelD*0.35" 이상으로
- sims? = [ {part, mode:"spinY|spinX|spinZ|lift|unscrew", rpm?, travel?, pivot?:[x,z]} ] — 회전·개폐가 실제로 있는 제품만
- 재질키: ${MATERIAL_KEYS.join(" ")}

## 품질 기준 (이걸 지켜야 실물처럼 보인다)

1) **단면이 변해야 한다.** 어떤 셸도 같은 단면을 위아래로 밀어낸 형태로 만들지 않는다.
   loft의 sections는 최소 4단이고 w·d·r이 단마다 달라야 한다. 커버는 본체보다 얇고, 어깨는 좁아지고,
   바닥은 살짝 넓어진다. 일정 두께 압출은 실격이다.

2) **디테일은 진짜 기하로 넣는다.** 텍스처로 흉내내지 않는다.
   볼트 8개 → repeat로 bolt mesh 8개. 방열 핀 12장 → repeat로 box 12개. 널링 → repeat count 24~48.
   나사 자리, 관통 보어, 실링 홈, 로고 자리 보스는 좌표를 계산해서 실제 mesh로 배치한다.
   **다만 디테일은 본체 안에 들어와야 한다.** repeat.radius는 본체 반경보다 작게 잡고(보통 0.7~0.9배),
   리브·핀의 길이는 본체 치수의 일부여야 한다. 디테일 때문에 전체 치수가 커지면 실격이다.
   전체 바운딩 박스는 사양서의 전체 치수를 넘지 않는다.

3) **두께를 가진 부재로 만든다.** 판재에 그림을 붙인 형태로 만들지 않는다.
   손잡이·암·리브는 단면 치수를 갖는 부재로 잇고, lathe 프로파일은 끝을 축까지 닫는다.
   이건 "무조건 통짜로 만들라"는 뜻이 아니다. 두 경우를 구분한다.
   · 브래킷·기어·축·핀처럼 실제로 속이 찬 부품 → 겉면 프로파일만 그린다.
   · 용기·병·캡·튜브·하우징·컵처럼 속이 비어야 하는 부품 → **벽 두께를 가진 셸**로 그린다.
     프로파일을 한 붓에: 바닥 중심 → 외벽 위로 → 림 바깥 → 림 안쪽(보어) → 내벽 아래로 → 공동 바닥 → 축.
     예(외경 30 / 벽 4 / 높이 100 / 바닥 3): "[0,0] [30,0] [30,100] [26,100] [26,3] [0,3]"
     캡을 통짜 원기둥으로 만들면 실격이다. 사양서에 벽 두께나 내용적이 적혀 있으면 반드시 이쪽이다.

4) **반복 요소는 개수를 세서 넣는다.** 스포크 5개, 기어 잇수 36, 냉각 핀 12장, 파베 스톤 24개처럼
   사양서에 적힌 개수를 repeat.count에 그대로 넣는다. 대충 4~6개로 줄이지 않는다.

5) **파팅 라인과 결합부를 표현한다.** 두 파트가 만나는 곳에는 단차·플랜지·실링 링을 넣어 경계를 만든다.
   틈 없이 서로 파묻히면 조립체로 보이지 않는다.

6) **움직이는 제품이면 sims를 반드시 넣는다.** 바퀴가 있으면 굴러야 하고, 캡이 있으면 열려야 하고,
   축이 있으면 돌아야 한다. 정지된 덩어리로 끝내지 않는다.

7) **치수는 사양서를 따른다.** 설계 사양서가 주어지면 전체 치수와 파트별 치수를 그 값으로 쓴다.
   임의로 바꾸지 않는다.`;

// A complete worked example the planner can pattern-match against.
export const PROGRAM_EXAMPLE = `{
  "id": "tumbler", "title": "스테인리스 텀블러",
  "params": {
    "bodyD": {"label":"몸통 직경","value":70,"min":50,"max":100,"step":1},
    "bodyH": {"label":"몸통 높이","value":180,"min":100,"max":260,"step":1},
    "wallR": {"label":"어깨 곡률","value":12,"min":2,"max":30,"step":1},
    "capH":  {"label":"캡 높이","value":22,"min":10,"max":40,"step":1},
    "baseR": {"label":"바닥 라운드","value":6,"min":1,"max":14,"step":0.5}
  },
  "parts": [
    { "id":"body","label":"몸통","material":"steel","meshes":[
      { "prim":"lathe","profile":[["baseR",0],["bodyD/2-2",2],["bodyD/2","baseR"],["bodyD/2","bodyH-wallR"],["bodyD/2-wallR*0.4","bodyH"],["bodyD/2-6","bodyH"]] }
    ]},
    { "id":"cap","label":"캡","material":"abs_black","meshes":[
      { "prim":"lathe","profile":[["bodyD/2-6","bodyH"],["bodyD/2-2","bodyH+2"],["bodyD/2-2","bodyH+capH-4"],["bodyD/2-6","bodyH+capH"],["1","bodyH+capH"]] }
    ]},
    { "id":"seal","label":"실링 링","material":"rubber","meshes":[
      { "prim":"torus","args":["bodyD/2-4",1.6],"y":"bodyH+1","rxDeg":90 }
    ]}
  ],
  "sims": [ { "part":"cap","mode":"unscrew","rpm":24,"travel":"capH*0.8" } ]
}`;
