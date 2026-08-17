/* 안내 문서(guide.html) 전용 사전. 본문이 길어 화면 사전과 분리한다.
   본문은 <b>·<a> 로 여러 조각으로 나뉘어 있어 조각 단위로 키가 잡힌다(조각 하나가 한 항목). */
export const GUIDE_EN = {
  "회전체 · 도면 올리기 안내": "Turned parts · Upload guide",
  "업로드 전에 읽어 주세요": "Read before uploading",
  "어떤 도면을 어떻게 올리나요": "What to upload, and how",
  "아래 내용은": "This page covers",
  "Part 1(단일 도면 회전체)": "Part 1 (turned part, one view)",
  "기준입니다.\n  여러 투상도가 한 장에 있는 도면은": "Sheets with several views of one part go to",
  "에서 뷰를 나눠 부품 단위로 만듭니다.": ", which splits the views and builds the part.",
  "이 데모는": "This demo reads",
  "선반에서 깎는 회전체 한 부품": "one lathe turned part",
  "(축·부시·핀·롤러·스페이서·플랜지·슬리브·볼트/나사류)의": "(shaft, bush, pin, roller, spacer, flange, sleeve, bolt or screw)",
  "정면도 한 장": "from a single front view",
  "을 읽어 치수 사양으로 옮깁니다. 조립체·판금·하우징이나 여러 부품이 한 장에 있는 도면은 읽지 못합니다.":
    " and turns it into a dimensioned spec. Assemblies, sheet metal, housings, or several parts on one sheet are out of scope.",

  "0. 어떤 부품인지 먼저": "0. Tell it what the part is",
  "Part 1 은 회전체만 읽습니다. 나사류도 회전체입니다(몸통은 회전, 머리·소켓은 국부 형상). 올리기 전에 왼쪽":
    "Part 1 reads turned parts only. Screws count as turned parts too (the body is a revolve; head and socket are local features). Before uploading, pick the",
  "에서 골라 주면\n  그 유형에 맞는 시뮬레이션을 계획하고 해석에도 반영합니다. 모르면 비워 두세요. 판독 뒤 사양과 해석으로 추정합니다.":
    " on the left and the simulation plan and the analysis follow that type. Leave it blank if you are not sure: the type is inferred from the spec and the analysis after reading.",
  "유형": "Type",
  "시뮬레이션 계획": "Simulation plan",
  "축 · 스핀들": "Shaft · spindle",
  "단붙이 축, 모터 축, 테이퍼 축": "Stepped shaft, motor shaft, tapered shaft",
  "자전(베어링 내륜·키·허브가 함께 돎), 분해": "Spins on its axis (inner race, key and hub turn with it), then disassembles",
  "클레비스 핀, 평행핀": "Clevis pin, parallel pin",
  "요크(클레비스) 구멍에 끼우기, 분할핀 뽑기. 스스로 돌지 않음":
    "Inserts into the yoke (clevis) bore, split pin pulls out. Does not spin on its own",
  "부시 · 슬리브 · 스페이서": "Bush · sleeve · spacer",
  "플랜지 부시, 정밀 슬리브": "Flanged bush, precision sleeve",
  "하우징에 압입, 상대 축이 안에서 돎": "Presses into the housing, the mating shaft turns inside it",
  "볼트 · 나사 · 스터드": "Bolt · screw · stud",
  "육각 볼트, 캡 스크루, 세트 스크루": "Hex bolt, cap screw, set screw",
  "1회전 = 피치만큼 체결, 공구가 함께 돎": "One turn advances it by the pitch, the tool turns with it",
  "롤러 · 플랜지": "Roller · flange",
  "컨베이어 롤러, 볼트 플랜지": "Conveyor roller, bolted flange",
  "자전 또는 맞대기": "Spins on its axis, or bolts face to face",

  "1. 되는 도면 · 안 되는 도면": "1. Drawings that work, and drawings that do not",
  "아래 삽화는 종류를 보여 주기 위해 이미지 모델이 그린 것이라 숫자·기호는 실제 도면과 다를 수 있습니다. 치수 기준은 2절의 실제 도면을 보세요.":
    "The pictures below are illustrations of each kind, so their numbers and symbols are not real drawing conventions. For dimensioning, see the real drawing in section 2.",
  "✓ 단붙이 축 정면도 한 장": "Works · stepped shaft, single front view",
  "가로로 놓인 축, ⌀ 지름과 연쇄 길이·전체 길이, 나사 호출, 모따기, 표제란. 이 데모의 기본형입니다.":
    "Axis lying horizontal, ⌀ diameters with chain and overall lengths, thread callouts, chamfers, title block. This is the baseline case.",
  "✓ 부시·슬리브 전단면도": "Works · bush or sleeve, full section",
  "해칭이 있는 단면도면 보어(내경)를 함께 읽습니다. 위·아래 재료 반쪽이 거울상이면 됩니다.":
    "With hatching present, the bore is read as well. The two material halves just have to mirror across the axis.",
  "✓ 볼트·나사류": "Works · bolts and screws",
  "육각 머리(단면 A-A 의 대변), 캡 스크루의 육각 소켓, 접시머리(테이퍼), 세트 스크루, 스터드까지 읽습니다.":
    "Hex heads (across flats from section A-A), hex sockets on cap screws, countersunk heads, set screws and studs are all read.",
  "✗ 조립체 · 다중 투상도": "Not read · assemblies and multi-view sheets",
  "캐스터·베어링 유닛·밸브처럼 여러 부품이 세 방향으로 그려진 도면. \"회전체 아님\" 으로 답하거나 외형을 잘못 잡습니다.":
    "Casters, bearing units, valves: several parts drawn in three directions. These are refused as not a turned part, or the outline comes out wrong.",
  "✗ 등각투상·렌더링 · 볼트 원 구멍": "Not read · isometric views, renders, bolt circle holes",
  "3D 그림에는 치수가 없고, 플랜지의 볼트 원 위 구멍·슬롯은 아직 표현하지 않는 형상입니다.":
    "3D pictures carry no dimensions, and holes or slots on a flange bolt circle are not modelled yet.",
  "✗ 부품 사진 · 비뚤어진 저해상 스캔": "Not read · photos and skewed low-resolution scans",
  "사진에는 치수가 없고, 450px 짜리 JPEG 은 외형선과 치수선이 붙어 읽힙니다. 스캔은 1,500px 이상, 반듯하게.":
    "Photos carry no dimensions, and in a 450px JPEG the outline and the dimension lines merge. Scan at 1,500px or more, and keep it square.",
  "올린 도면이 회전체 정면도가": "When the upload is clearly not a front view of a turned part,",
  "아닌 것이 분명하면 판독을 멈추고": "reading stops and",
  "이유를 알려 줍니다(억지로 만들면 도면과 무관한 형상이 나옵니다).\n  멈추는 신호는 셋입니다. ① 축 위와 아래의 모양이 다름(조립체·비회전 부품), ② 정면에서 본 원(원형 투상), ③ 원통 구간이 거의 없는 굽은 윤곽(밑창·바퀴 같은 유기적 형상).\n  그래도 결과를 보고 싶으면 \"그래도 읽어 보기\" 로 진행할 수 있지만, 그 결과는 도면과 다릅니다.\n  치수가 숫자가 아니라":
    "the reason is shown, because forcing it produces a shape unrelated to the drawing. There are three stop signals: (1) the shape above the axis differs from the shape below it (assembly or non-turned part), (2) a circle seen face on (circular view), (3) a curved outline with almost no cylindrical run (organic shapes such as soles or wheels). You can still continue with Read it anyway, but that result will not match the drawing. Catalogue sheets whose dimensions are",
  "A·B·H·L1 같은 문자 기호": "letter symbols such as A, B, H, L1",
  "로만 적힌 카탈로그 도면도 읽지 못합니다(치수표가 도면 밖에 있기 때문입니다).":
    " rather than numbers cannot be read either, because the value table sits outside the drawing.",

  "2. 치수는 어디를 기준으로 읽나": "2. Where dimensions are read from",
  "아래는 정답 사양에서 그린 실제 도면(단붙이 축)입니다. 번호가 읽어 들이는 항목이며, 올리는 도면도 같은 관례를 따르면 정확도가 가장 높습니다.":
    "Below is a real drawing (stepped shaft) rendered from a reference spec. The numbers mark what is read; accuracy is highest when your drawing follows the same conventions.",
  "가장 중요한 하나:": "The one that matters most:",
  "전체 길이(①)": "overall length (1)",
  "연쇄 길이(②)": "chain lengths (2)",
  ". 부품 아래 두 줄로 놓고, 연쇄에서 하나를 생략했다면 나머지 합과 전체 길이로 유추합니다.\n    지름은 반드시":
    ". Put them on two rows under the part; if one chain value is left out, it is derived from the overall length minus the rest. Diameters always need",
  "를 붙이고(수직 치수선), 나사는": " on a vertical dimension line, threads use a",
  "M호칭×피치": "M size × pitch",
  "호출로, 홈은": " callout, and grooves are written as",
  "폭 + ⌀홈지름": "width plus ⌀groove diameter",
  "로 적어 주세요.\n    체험 모드의 업로드는 문자를 읽지 않으므로 왼쪽 \"전체 길이\" 칸에 값을 넣어야 실제 치수가 맞습니다.":
    ". Uploads in trial mode do not read text, so enter a value in the Overall length box on the left to get real dimensions.",

  "3. 파일 · 해상도 체크리스트": "3. File and resolution checklist",
  "한 장에 한 부품": "One part per sheet",
  ", 정면도(축이 가로로 긴 뷰). 키홈 단면 A-A·육각 단면은 옆에 있어도 됩니다.":
    ", front view with the axis running horizontally. A keyway section A-A or a hex section alongside is fine.",
  "PNG 또는 SVG 를 우선하고, JPEG 은 화질 90 이상.": "Prefer PNG or SVG; for JPEG use quality 90 or higher.",
  "부품 가로 폭 1,000px 이상": "Part width of 1,000px or more",
  "(권장 1,500px+). 흐리거나 기울어진 사진은 반듯하게 잘라서.":
    " (1,500px recommended). Crop blurry or tilted photos square.",
  "외형선은 굵게(0.5mm), 치수선·보조선·중심선은 가늘게(0.18~0.25mm). 이 굵기 차이로 부품 외형을 가려냅니다.":
    "Outlines thick (0.5 mm); dimension, extension and centre lines thin (0.18 to 0.25 mm). That thickness gap is how the part outline is separated.",
  "단위 mm. 인치 도면(.19 같은 표기)은 AI 판독이 ×25.4 로 환산합니다.":
    "Millimetres. Inch drawings (values like .19) are converted at 25.4 during server reading.",
  "표제란의 품명·재질·도번은 그대로 옮겨집니다(있으면).":
    "Title block name, material and drawing number are carried over when present.",

  "4. 판독은 어떻게 이루어지나 (OCR 에 대해)": "4. How reading works (about OCR)",
  "모드": "Mode",
  "형상(비율)": "Shape (proportions)",
  "치수 문자": "Dimension text",
  "브라우저가 외형선만 남겨 부품 외형을 재고 구간으로 나눕니다.":
    "The browser keeps outlines only, measures the part and splits it into segments.",
  "읽지 않습니다.": "Not read.",
  "비율은 정확하고, 실제 치수는 \"전체 길이\" 입력 하나로 정합니다.":
    "Proportions are exact; real dimensions come from the single Overall length entry.",
  "서버 모드": "Server mode",
  "같은 외형 측정을 힌트로 보냅니다.": "The same outline measurements are sent as hints.",
  "AI 가 치수 문자를 읽어": "Dimension text is read and",
  "근거로 남기고, 사양과 대조해 안 맞으면 스스로 한 번 고칩니다.":
    " kept as evidence; where it disagrees with the spec it is corrected once.",
  "정답 17종 기준 구간 일치 100%, 치수 일치 98%.":
    "Across 17 reference parts: segments 100%, dimensions 98%.",
  "문자 인식(OCR)에 해당하는 일은 서버 모드에서 의미 해석과 함께 이루어집니다. 체험 모드에 브라우저 문자 인식을 붙이면 전체 길이 입력 없이도 실제 치수를 얻을 수 있습니다.":
    "What OCR would do happens in server mode, together with interpreting the meaning. Adding in browser text recognition to trial mode would give real dimensions without the overall length entry.",

  "5. 표현할 수 있는 형상": "5. Shapes that can be represented",
  "구분": "Group",
  "지원": "Supported",
  "미지원(다음 버전)": "Not yet",
  "원통·테이퍼·수나사 세그먼트, 모따기 C, 필렛/라운드 R, 도피홈(DIN 76/509), 환형 홈(멈춤링·오링)":
    "Cylindrical, tapered and male thread segments, chamfer C, fillet R, undercuts (DIN 76/509), annular grooves (retaining ring, O-ring)",
  "곡면(구면·원호) 프로파일, 스플라인, 편심": "Curved (spherical, arc) profiles, splines, eccentrics",
  "내경": "Bore",
  "관통/막힌 보어(단붙이), 입구 모따기, 센터구멍(DIN 332), 육각 소켓":
    "Through and blind bores (stepped), entry chamfers, centre holes (DIN 332), hex sockets",
  "내부 홈, 암나사 형상(호칭만 기록)": "Internal grooves, female thread geometry (callout recorded only)",
  "비축대칭": "Non-axisymmetric",
  "키홈(DIN 6885), 평면(D컷·양면), 육각, 횡구멍(관통/막힘), 널링(표기)":
    "Keyways (DIN 6885), flats (D-cut, two sided), hexagons, cross holes (through or blind), knurling (noted)",
  "볼트 원 위 축방향 구멍(플랜지), 방사 슬롯, 나사 형상(장식 표현)":
    "Axial holes on a bolt circle (flanges), radial slots, modelled thread helix",

  "6. 내려받기 형식": "6. Download formats",
  "어디서": "From",
  "내용": "What it is",
  "정밀 곡면 · 샘플은 미리 생성": "Exact surfaces · pre-built for samples",
  "원통·원추·평면으로 이루어진 곡면 모델. 기계 CAD 에서 그대로 편집됩니다.":
    "A surface model of cylinders, cones and planes. Opens editable in mechanical CAD.",
  "STEP · 면": "STEP · faceted",
  "이 브라우저": "This browser",
  "삼각형 면으로 만든 STEP. 편집한 사양도 바로 받을 수 있습니다.":
    "STEP built from triangular faces. Available immediately, including for an edited spec.",
  "메시와 치수 사양 값을 함께 담습니다(단위 m 환산 포함).":
    "Carries the mesh together with the dimension values (converted to metres).",
  "mm 단위 메시. STL 은 프린팅용 바이너리.": "Mesh in millimetres. STL is binary, for printing.",
  "Maya·3ds Max·Unity·Unreal 에서 열립니다. Blender 에서는 GLB 를 쓰세요.":
    "Opens in Maya, 3ds Max, Unity and Unreal. Use GLB for Blender.",
  "사양으로 다시 그린 제작 도면(레이어·치수 포함).":
    "The production drawing redrawn from the spec, with layers and dimensions.",
  "치수 사양 자체.": "The dimension spec itself.",

  "7. 조립 · 시뮬레이션은 무엇을 읽나": "7. What assembly and simulation read",
  "도면의 규격 표기가 곧 결합부입니다. 화면 위": "Standard callouts on the drawing are the mating features. The",
  "조립 · 시뮬": "Assembly · simulation",
  "버튼을 켜면 아래를": " button reads the table below",
  "AI 없이 규칙으로": "by rule, without AI",
  "읽어 상대 부품을 만들고 분해·조립·회전을 보여 줍니다. 끄면 부품만 남습니다.":
    ", builds the mating parts and shows assembly, disassembly and rotation. Switch it off and only the part remains.",
  "도면 표기": "Drawing callout",
  "읽는 것": "Read as",
  "운동": "Motion",
  "공차 h6/j6/k6 + \"베어링 자리\"": "Tolerance h6/j6/k6 with a bearing seat",
  "구름 베어링 내륜": "Rolling bearing inner race",
  "축방향으로 뽑음 · 내륜만 축과 함께 회전": "Draws off axially; only the inner race turns with the shaft",
  "홈 ⌀×폭 (DIN 471)": "Groove ⌀ × width (DIN 471)",
  "축용 멈춤링": "Retaining ring for shafts",
  "반경 방향으로 벌려 빼냄": "Spreads and lifts off radially",
  "키홈 b×t1 (DIN 6885)": "Keyway b × t1 (DIN 6885)",
  "평행키 + 허브": "Parallel key and hub",
  "허브는 축방향, 키는 반경 방향": "Hub slides axially, key lifts radially",
  "나사 M호칭×피치": "Thread M size × pitch",
  "너트(자유단일 때)": "Nut, when the end is free",
  "1회전 = 피치만큼 전진 (실측 일치)": "One turn advances by the pitch (verified)",
  "횡구멍 ⌀ 관통": "Cross hole ⌀ through",
  "분할핀·평행핀": "Split pin, parallel pin",
  "반경 방향": "Radial",
  "육각 대변 · 육각 소켓 · 평면": "Across flats · hex socket · flat",
  "스패너 · 육각 렌치": "Spanner · hex key",
  "물고 돌림": "Grips and turns",
  "보어 H7 · 외경 m6 · 테이퍼": "Bore H7 · outside m6 · taper",
  "상대 축 · 하우징 · 테이퍼 허브": "Mating shaft · housing · tapered hub",
  "축방향 삽입/압입": "Axial insertion or press fit",
  "우리 부품의 형상과": "The geometry of your part and the",
  "운동 방향·회전축은 정확": "direction of motion and axis of rotation are exact",
  "합니다(회전체 기하). 상대 부품의 절대 치수(너트 대변, 베어링 외경 등)는 도면에 없어":
    " (revolve geometry). Absolute sizes of the mating parts (nut across flats, bearing outside diameter) are not on the drawing, so they are",
  "규격표 근사": "standard table approximations",
  "이며 반투명·\"규격 근사\" 태그로 구분합니다. 물리 시뮬레이션이 아니라 기구학 애니메이션입니다.":
    ", shown translucent and tagged as such. This is kinematic animation, not physics.",

  "8. 판독 결과를 고치면": "8. When you edit the reading",
  "오른쪽 세그먼트 표와 JSON 에서 값을 고치면": "Edit a value in the segment table or the JSON on the right and the",
  "3D 와 다시 그린 도면과 검증이 동시에": "3D, the redrawn drawing and the verification all",
  "다시 계산됩니다. 올린 도면 이미지 자체는 바뀌지 않고, 그 위에 판독 외형선이 겹쳐 보이며 \"재생성 도면\" 으로 지금 사양에서 다시 그린 도면을 볼 수 있습니다.\n  반대 방향(이미지에서 사양)은 판독 단계에서만 일어나고, 그 정밀도가 검증 패널의 외형 일치와 치수 일치로 표시됩니다.":
    " recompute. The uploaded image itself does not change; the read outline is overlaid on it, and Redrawn drawing shows the drawing rebuilt from the current spec. The other direction, image to spec, happens only during reading, and its accuracy appears as outline match and dimension match in the verification panel.",

  /* 9. Part 2 */
  "정면 · 윗면 · 측면이 한 장에 있는": "Front, top and side on one sheet, all of",
  "한 부품": "the same part",
  "도면을 읽어 부품 하나를 3D 로 복원합니다.\n  뷰를 나누고 → 뷰마다 방향을 정하고(추천은 배치로, 확정은 사람이) → 치수 문자를 읽어 축척을 정하고 →\n  각 뷰의 윤곽을 그 방향으로 밀어내":
    ": the sheet is read and the part is rebuilt in 3D. Views are split, each view gets a direction (suggested from the layout, confirmed by you), dimension text sets the scale, then each view outline is extruded along its direction and the results are",
  "교집합": "intersected",
  "합니다. 만든 3D 를 각 뷰로 다시 투영해 도면과 얼마나 겹치는지(뷰 정합)를 보여 줍니다.":
    ". The result is projected back into each view to show how well it overlaps the drawing (view match).",
  "이렇게 그려진 도면이 정확히 읽힙니다": "Drawn this way, it reads accurately",
  "이런 것은 읽지 못하거나 근사입니다": "These are refused or approximated",
  ", 정투상 2~3뷰 (정면 + 윗면 또는 측면). 3각법 · 1각법 모두":
    ", two or three orthographic views (front plus top or side). First and third angle both work",
  "조립도 · 여러 부품이 한 장": "Assembly drawings, several parts on one sheet",
  "뷰끼리 떨어져 있고,": "Views separated from each other, with",
  "외형선은 굵고 치수선·보조선은 가늘게": "outlines thick and dimension and extension lines thin",
  "(0.5 대 0.18~0.25 mm)": " (0.5 against 0.18 to 0.25 mm)",
  "뷰가 붙어 있거나 선 굵기 구분이 없는 도면 (뷰가 한 덩어리로 묶입니다)":
    "Views touching, or no line weight distinction (the views merge into one block)",
  "치수 숫자는 치수선": "Dimension numbers sit",
  "바로 위(가로) · 바로 옆(세로)": "just above a horizontal line, just beside a vertical one",
  ", 보조선은 물체 가장자리에서 치수선 너머까지": ", extension lines run from the part edge past the dimension line",
  "치수가 A · B · H 기호뿐인 카탈로그 도면, 지시선 끝에만 적힌 치수":
    "Catalogue sheets dimensioned only as A, B, H; values written only at the end of a leader",
  "구멍은": "Holes as",
  "원 · 슬롯": "circles or slots",
  "(닫힌 고리). 관통 구멍은 그 뷰 방향으로 뚫립니다": " (closed loops). Through holes are cut along that view direction",
  "사각 창(안쪽 모서리와 구분이 안 됩니다) · 막힌 구멍 깊이 · 카운터보어 (숨은선을 읽지 않습니다)":
    "Rectangular windows (indistinguishable from inner corners), blind hole depth, counterbores (hidden lines are not read)",
  "가로": "Width of",
  "1,500px 이상": "1,500px or more",
  ", 반듯한 PNG · SVG · JPG": ", square PNG, SVG or JPG",
  "흐리거나 기울어진 저해상 스캔 · 사진 · 3D 렌더 · 손그림":
    "Blurry or tilted low-resolution scans, photos, 3D renders, hand sketches",

  "10. 부품 복잡도에 따라 다릅니다": "10. It depends on how complex the part is",
  "단계": "Level",
  "방법": "Method",
  "이 버전": "This version",
  "브래킷 · 판금 · 각기둥 · 플레이트": "Bracket · sheet metal · prism · plate",
  "3뷰 교집합 = 정확 (면이 축에 나란함)": "Three view intersection is exact (faces lie parallel to the axes)",
  "지원. 예시: L 브래킷 — 크기 오차 0.7% 이내, 뷰 정합 99% 이상":
    "Supported. Example: L bracket, size error within 0.7%, view match over 99%",
  "하우징 · 보스 있는 몸체 · 베어링 블록": "Housing · body with bosses · bearing block",
  "교집합 + 정면 원형 구멍 = 근사 (숨은선·단차 안쪽은 못 봄)":
    "Intersection plus circular holes seen face on is approximate (hidden lines and recessed steps are invisible)",
  "지원, \"근사\" 표시. 예시: 베어링 하우징 — 크기 오차 0.6%, 뷰 정합 97% 이상":
    "Supported, marked approximate. Example: bearing housing, size error 0.6%, view match over 97%",
  "곡관 · 스윕 · 자유곡면 · 나선": "Elbow · sweep · free-form surface · helix",
  "단면도의 경로와 단면을 읽어 스윕해야 함": "Needs the path and profile from a section, then a sweep",
  "미지원. 왜 안 되는지 알려 줍니다. 예시: 사각 플랜지 곡관":
    "Not supported. It tells you why. Example: square flange elbow",
  "회전체 한 부품은": "For a single turned part,",
  "이 더 정확합니다(정면도 한 장으로 치수 사양까지 읽습니다).\n    Part 2 는":
    " is more accurate: one front view gives the full dimension spec. Part 2 is the branch for parts that are",
  "회전체가 아닌": "not turned",
  "부품을 여러 뷰로 복원하는 갈래입니다.": ", rebuilt from several views.",

  "11. Part 2 쓰는 순서": "11. Using Part 2, step by step",
  "도면 올리기": "Upload the sheet",
  "— 뷰를 자동으로 나누고, 배치로 방향을 추천하고, 치수 문자를 읽습니다(몇 초).":
    " — views are split, directions are suggested from the layout, and dimension text is read. Takes seconds.",
  "— 왼쪽 목록이나 오른쪽 정육면체(정면 · 윗면 · 우측면 면 누르기)로 정합니다. 등각·단면·상세는 참고로 둡니다.":
    " — set them from the list on the left or the cube on the right (click the front, top or right face). Leave isometric, section and detail views as reference.",
  "치수 확인": "Check the dimensions",
  "— 읽은 숫자 중 서로 맞는 것(초록)으로 축척이 정해집니다. 맞는 치수가 적으면 아는 치수 하나를 넣어 확인합니다.":
    " — the scale comes from the values that agree with each other (green). If few agree, enter one dimension you know to confirm it.",
  "— 자동(뷰 2개 이상이면 교집합, 하나면 회전체 또는 판)이 대부분 맞습니다.":
    " — automatic is right most of the time: intersection with two or more views, revolve or plate with one.",
  "을 확인합니다. 정합이 낮은 뷰는 방향이 틀렸거나 구멍이 빠진 것입니다.":
    " — a view with a low match either has the wrong direction or is missing a hole.",
  "— STEP(면) · STL · GLB · OBJ · FBX · USD · USDZ · PLY · JSON.":
    " — STEP (faceted), STL, GLB, OBJ, FBX, USD, USDZ, PLY, JSON.",

  /* 도면 위 번호 설명 */
  "전체 길이 — 맨 아래 가장 긴 수평 치수. 세그먼트 길이의 합과 같아야 합니다.":
    "Overall length — the longest horizontal dimension, at the bottom. It must equal the sum of the segment lengths.",
  "연쇄 치수(세그먼트 길이) — 부품 바로 아래 한 줄. 하나가 생략돼 있으면 전체 − 나머지 합으로 유추합니다.":
    "Chain dimensions (segment lengths) — one row directly under the part. If one is left out it is derived from the overall length minus the rest.",
  "⌀ 지름 — 세그먼트를 관통하는 수직 치수선. 뒤의 h6/k6 는 공차.":
    "⌀ diameter — a vertical dimension line through the segment. A trailing h6 or k6 is the tolerance.",
  "나사 호출 — M호칭×피치. 가는선 두 줄이 나사 구간.":
    "Thread callout — M size × pitch. The two thin lines mark the threaded run.",
  "모따기 C — 끝면·단차의 볼록 모서리.": "Chamfer C — on convex edges at end faces and steps.",
  "필렛 R — 단차의 오목 모서리.": "Fillet R — on concave edges at steps.",
  "도피홈 — 폭×⌀도피지름 (DIN 76/509).": "Undercut — width × ⌀undercut diameter (DIN 76/509).",
  "홈 폭 — 홈 지름 ⌀ 와 위치 치수가 함께 옵니다.":
    "Groove width — comes with the groove diameter ⌀ and a locating dimension.",
  "키홈 길이·위치 — 폭과 깊이(D−t1)는 단면도 A-A 에.":
    "Keyway length and position — width and depth (D minus t1) are in section A-A.",
  "횡구멍 — ⌀ 관통/깊이 + 끝에서 잰 위치.":
    "Cross hole — ⌀ through or to depth, plus its position measured from the end.",
  "센터구멍 지시 — 형식·파일럿 지름 (DIN 332).":
    "Centre hole callout — form and pilot diameter (DIN 332).",
  "회전체 도면 올리기 안내": "Turned parts · upload guide",
};
