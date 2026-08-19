/* Part 3 화면 사전. 예시 이름·부품 이름까지 여기 있다.
   Part 3 dictionary, including example names and part names.

   왜 따로 두나 / Why separate:
   Part 1·2 사전과 섞이지 않게 둔다. 이 화면에서만 쓰는 낱말이고, 나중에 예시가 늘면 여기만 늘어난다.
   Kept apart from the Part 1 and 2 dictionary: these words are used only here, and this is the file
   that grows when more examples are added. */
export const SCULPT_EN = {
  /* 화면 / screen */
  "Part 3 · 프롬프트와 이미지에서 3D": "Part 3 · from a prompt or an image",
  "새 작업": "New",
  "한 줄로 설명하기": "Describe it in one line",
  "3D 만들기": "Make the 3D",
  "사진으로 만들기": "From a photo",
  "물체 사진 올리기": "Drop a photo of the object",
  "물체 하나가 온전히 보이는 사진 한 장": "One photo with the whole object in view",
  "가려진 뒷면은 앞면에서 유추합니다.": "Hidden backs are inferred from the front.",
  "예시": "Examples",
  "한 줄로 설명하거나 사진을 올리면": "Describe it or drop a photo and",
  "부품 트리를 세워 3D 로 만듭니다": "it builds a part tree in 3D",
  "파트 분리": "Separate parts",
  "합치기": "Put together",
  "분리": "Separation",
  "파트": "Parts",
  "이름": "Name",
  "크기(어림)": "Size (estimate)",
  "부품 트리": "Part tree",
  "모두 보기": "Show all",
  "사양 받기": "Get the spec",
  "사양 JSON 을 내려받습니다": "Downloads the spec as JSON",
  "이 결과가 담지 않는 것": "What this result leaves out",
  "예시 보기": "Examples only",
  "직접 만들기 가능": "Live",
  "숨기기": "Hide",
  "보이기": "Show",

  /* 진행 / progress */
  "사양 불러오기": "Loading the spec",
  "부품 트리 세우기": "Building the part tree",
  "예시 만들기": "Building the example",
  "무엇인지 살피기": "Looking at what it is",
  "부품으로 나누기": "Splitting it into parts",
  "초": "s",

  /* 안내와 오류 / notices and errors */
  "무엇을 만들지 한 줄로 적어 주세요": "Write one line describing what to make",
  "지금은 예시만 볼 수 있습니다. 서버 모드에서 직접 만들 수 있습니다.":
    "Only the examples run here. Making your own needs server mode.",
  "만들지 못했습니다": "Could not make it",
  "사양을 쓸 수 없습니다": "The spec cannot be used",
  "예시를 불러오지 못했습니다": "Could not load the examples",
  "가려진 뒷면은 앞면에서 유추한 것입니다": "Hidden backs are inferred from the front",
  "표면 무늬와 로고는 넣지 않습니다": "Surface patterns and logos are not included",
  "치수는 비율이며 실제 값이 아닙니다": "Dimensions are proportions, not measured values",

  /* 예시 프롬프트 / example prompts */
  "예: 접이식 팔이 달린 금속 책상 스탠드, 원형 받침": "e.g. a metal desk lamp with a folding arm and a round base",
  "접이식 팔이 달린 금속 책상 스탠드": "a metal desk lamp with a folding arm",
  "손잡이가 달린 세라믹 머그컵": "a ceramic mug with a handle",
  "다리 다섯 개 바퀴 의자": "an office chair with five legs",
  "접이식 팔이 달린 금속 책상 스탠드, 원형 받침, 원뿔 갓": "Metal desk lamp with a folding arm, round base and conical shade",
  "손잡이가 달린 원통형 세라믹 머그컵": "Cylindrical ceramic mug with a handle",
  "다리 다섯 개 바퀴 달린 사무용 의자, 등받이와 좌판": "Office chair on five castors, with a seat and a backrest",

  /* 예시 이름 / example names */
  "책상 스탠드": "Desk lamp",
  "머그컵": "Mug",
  "사무용 의자": "Office chair",

  /* 예시의 부품 이름 / part names in the examples */
  "받침": "Base",
  "기둥": "Post",
  "관절": "Joint",
  "팔": "Arm",
  "갓": "Shade",
  "전구": "Bulb",
  "컵": "Cup",
  "손잡이": "Handle",
  "중심축": "Hub",
  "다리 1": "Leg 1",
  "다리 2": "Leg 2",
  "다리 3": "Leg 3",
  "다리 4": "Leg 4",
  "다리 5": "Leg 5",
  "좌판": "Seat",
  "등받이": "Backrest",

  /* 첫 방문 안내 / first-visit tour */
  "사진으로도 됩니다": "A photo works too",
  "만들 물체를 한 줄로 적습니다. 아래 예시를 눌러 채울 수도 있습니다.":
    "Write what to make in one line, or click one of the examples below to fill it in.",
  "물체 하나가 온전히 보이는 사진 한 장을 올립니다. 가려진 뒷면은 앞면에서 유추합니다.":
    "Drop one photo with the whole object in view. Hidden backs are inferred from the front.",
  "예시로 먼저 보기": "Try an example first",
  "미리 만들어 둔 예시입니다. 서버 없이도 눌러서 바로 볼 수 있습니다.":
    "These are prepared in advance, so they open straight away with no server.",
  "부품이 트리로 나뉘어 나옵니다. 목록에서 고르면 그 부품만 남고, 분리 막대로 벌려 볼 수 있습니다.":
    "The result comes apart into a tree. Pick one from the list to isolate it, or use the slider to spread them out.",
};
