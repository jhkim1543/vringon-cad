/* 부품 해석 프롬프트 (서버·미리 계산 공용).
   입력: 도면 이미지 + 판독된 사양(JSON) + 문자 인식(OCR) 토큰 + 사용자가 고른 부품 유형.
   출력: 근거가 붙은 짧은 해석. 모든 문장은 (a) 도면에서 읽은 문자, (b) 사양의 수치, (c) 그림에서 본 형상 중 하나를 근거로 달아야 하고,
   근거가 없는 것은 "추정" 이라고 표시한다. 벤더·모델명은 쓰지 않는다. */

export const DESCRIBE_RESPONSE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["part_type", "one_line", "function", "features", "manufacturing", "standards", "uncertain", "confidence"],
  properties: {
    part_type: { type: "string", description: "부품 유형 id: shaft·spindle·pin·bushing·sleeve·spacer·roller·flange·bolt·stud·other" },
    one_line: { type: "string", description: "한 줄 요약(20자 안팎). 예: 분할핀 구멍이 있는 h11 클레비스 핀" },
    function: { type: "string", description: "이 부품이 하는 일 두 문장 이내" },
    features: { type: "array", items: { type: "object", additionalProperties: false, required: ["what", "value", "evidence"], properties: {
      what: { type: "string" }, value: { type: "string" }, evidence: { type: "string", description: "근거: 도면 문자('⌀16' 같은 OCR 토큰), 사양 값, 또는 그림에서 본 것" } } },
      description: "핵심 형상 3~6개" },
    manufacturing: { type: "array", items: { type: "string" }, description: "제작 시 유의점 1~3개 (공차·표면·재질 근거 포함)" },
    standards: { type: "array", items: { type: "string" }, description: "관련 규격 (도면·사양에 근거가 있을 때만)" },
    uncertain: { type: "array", items: { type: "string" }, description: "도면만으로 알 수 없는 것" },
    confidence: { type: "number", description: "0~1" },
  },
};

export const DESCRIBE_SYSTEM = `너는 기계 도면 해석자다. 회전체 부품(축·핀·부시·볼트 등)의 정면도 한 장과, 그 도면을 이미 판독한 치수 사양(JSON), 그리고 도면의 문자를 기계로 읽은 토큰 목록을 받는다.
부품이 무엇이고 무엇을 하는지, 핵심 형상은 무엇인지 짧고 정확하게 쓴다.

규칙
- 모든 항목에 근거를 단다. 근거는 셋 중 하나다: 도면 문자(OCR 토큰을 그대로 인용), 사양 값(JSON 필드), 그림에서 본 형상.
- 사양과 OCR 문자가 다르면 그 사실을 features 의 evidence 에 적고 uncertain 에 넣는다. 둘 중 하나를 골라 단정하지 않는다.
- 도면에 없는 것(재질이 없으면 재질, 열처리, 용도의 세부)은 uncertain 에 둔다. 지어내지 않는다.
- 한국어. 문장은 짧게. 기호(→, -, +)와 나열 부호를 쓰지 않는다. 사양·판독기·모델·회사 이름을 쓰지 않는다.
- part_type 은 목록의 id 하나만. 나사류는 bolt(머리 있음) 또는 stud(양 끝 나사).`;

export function buildDescribeMessages({ image, dsl, ocrTokens = [], partType = "", dims_read = [] }) {
  const toks = ocrTokens.map((t) => t.text).filter(Boolean).slice(0, 80);
  const dims = (dims_read || []).map((d) => d.text || d.value).filter(Boolean).slice(0, 60);
  const user = [];
  user.push({ type: "text", text: [
    "도면 이미지:",
  ].join("\n") });
  user.push({ type: "image_url", image_url: { url: image, detail: "high" } });
  user.push({ type: "text", text: [
    partType ? `사용자가 고른 부품 유형: ${partType}` : "부품 유형은 사용자가 고르지 않았다. 도면과 사양으로 판단하라.",
    `판독된 사양(JSON):\n${JSON.stringify(dsl)}`,
    toks.length ? `도면 문자(OCR 토큰): ${toks.join(" | ")}` : "도면 문자(OCR): 없음",
    dims.length ? `판독기가 읽은 치수 문자: ${dims.join(" | ")}` : "",
    "위 자료로 부품을 해석해 JSON 으로 답하라.",
  ].filter(Boolean).join("\n\n") });
  return [{ role: "system", content: DESCRIBE_SYSTEM }, { role: "user", content: user }];
}
