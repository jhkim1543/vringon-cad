/* Part 3 사양 작성 프롬프트 — 설명 한 줄이나 사진 한 장에서 ObjectSculptSpec 을 쓰게 한다.
   Part 3 spec-authoring prompt: turn one sentence or one photo into an ObjectSculptSpec.

   서버에만 둔다. 배포본에 들어가지 않는다(판독 품질의 핵심이라 브라우저로 내보내지 않는다).
   Server only; never shipped to the browser, since this is where the quality actually lives.

   사양 형식은 img2threejs (Apache-2.0) 의 ObjectSculptSpec 부분집합이다.
   The spec is a subset of the ObjectSculptSpec from img2threejs (Apache-2.0). */

/* 만들 수 있는 것만 쓰게 한다. 목록에 없는 도형을 쓰면 조립 단계에서 거절된다.
   Constrain it to what we can build; anything else is rejected at assembly time. */
const PRIMS = ["box", "plate", "cylinder", "cone", "sphere", "capsule", "torus", "tube"];

export const SCULPT_SCHEMA = {
  type: "object",
  required: ["id", "name", "materials", "componentTree"],
  properties: {
    /* 여기에 구체적인 예시를 적으면 안 된다. "예: desk-lamp" 라고 적었더니 모델이 그 id 를 그대로 쓰고
       요청과 무관하게 책상 램프를 만들었다. 값의 "종류"만 말한다.
       No concrete example here: with "e.g. desk-lamp" the model reused that id and built a desk lamp
       regardless of the request. Describe the kind of value, never a specific one. */
    id: { type: "string", description: "요청받은 물체의 영문 슬러그. 소문자와 붙임표만." },
    name: { type: "string", description: "요청받은 물체의 이름. 사용자 언어로." },
    objectClass: {
      type: "object",
      properties: {
        primaryType: { type: "string", description: "물체의 종류를 부르는 말." },
        primaryDomain: { type: "string", enum: ["object", "character", "hybrid"] },
        formLanguage: { type: "array", items: { type: "string" }, description: "형태를 설명하는 낱말들. 언어 코드가 아니다." },
      },
    },
    scaleHint: {
      type: "object",
      description: "가장 긴 변의 실제 길이 추정 (mm). 모르면 흔한 크기로 잡되 confidence 를 낮춘다.",
      properties: { longestSide_mm: { type: "number" }, confidence: { type: "number" } },
    },
    materials: {
      type: "array", minItems: 1,
      items: {
        type: "object", required: ["id", "color"],
        properties: {
          id: { type: "string" }, name: { type: "string" },
          color: { type: "string", description: "#RRGGBB" },
          roughness: { type: "number" }, metalness: { type: "number" }, opacity: { type: "number" },
        },
      },
    },
    componentTree: {
      type: "array", minItems: 2, maxItems: 24,
      description: "부품 트리. 부모는 반드시 자식보다 먼저 나온다.",
      items: {
        type: "object", required: ["id", "name", "primitive", "dimensions", "transform"],
        properties: {
          id: { type: "string" }, name: { type: "string" },
          level: { type: "string", enum: ["macro", "meso", "micro"] },
          role: { type: "string" },
          parent: { type: ["string", "null"] },
          primitive: { type: "string", enum: PRIMS },
          material: { type: "string" },
          dimensions: {
            type: "object", required: ["width", "height", "depth"],
            description: "상대 치수. 전체가 대략 1 안에 들어오게 잡는다.",
            properties: { width: { type: "number" }, height: { type: "number" }, depth: { type: "number" }, units: { type: "string" } },
          },
          transform: {
            type: "object",
            properties: {
              position: { type: "array", items: { type: "number" }, minItems: 3, maxItems: 3 },
              rotation: { type: "array", items: { type: "number" }, minItems: 3, maxItems: 3, description: "도(degree)" },
            },
          },
          attachment: {
            type: "object",
            description: "부모에 붙는 방식. parentSocket 은 부모의 sockets[].id 여야 한다.",
            properties: {
              parentSocket: { type: "string" }, contactType: { type: "string" },
              embedDepth: { type: "number" }, gapTolerance: { type: "number" },
            },
          },
          sockets: {
            type: "array",
            description: "자식이 붙을 자리. 이 부품의 좌표계 기준.",
            items: {
              type: "object", required: ["id", "position"],
              properties: {
                id: { type: "string" },
                position: { type: "array", items: { type: "number" }, minItems: 3, maxItems: 3 },
                normal: { type: "array", items: { type: "number" }, minItems: 3, maxItems: 3 },
              },
            },
          },
          from: { type: "array", items: { type: "number" }, minItems: 3, maxItems: 3, description: "tube 시작점" },
          to: { type: "array", items: { type: "number" }, minItems: 3, maxItems: 3, description: "tube 끝점" },
          tubeRadius: { type: "number", description: "torus 관 반지름" },
          topScale: { type: "number", description: "cylinder 위쪽 반지름 배율 (1 이면 원통)" },
        },
      },
    },
  },
};

const RULES = `
규칙
1. 부품을 눈에 보이는 대로 나눈다. 한 덩어리로 뭉치지 말고, 이름을 붙일 수 있는 단위로 쪼갠다.
2. 부모는 자식보다 먼저 쓴다. 자식은 parent 로 부모 id 를 가리킨다.
3. 자식이 부모에 붙는 자리는 부모의 sockets 에 점으로 두고, 자식의 attachment.parentSocket 으로 가리킨다.
   embedDepth 를 0.005~0.02 로 주어 이음매가 벌어지지 않게 한다.
4. 치수는 상대값이다. 전체가 대략 1 안에 들어오게 잡고, 실제 크기는 scaleHint.longestSide_mm 하나로만 말한다.
5. 좌표는 Y 가 위다. 물체는 원점 근처에 두고, 바닥에 세우는 것은 조립기가 알아서 한다.
6. 도형은 주어진 목록에서만 고른다. 없는 형상은 가장 가까운 것으로 근사하고 이름으로 무엇인지 밝힌다.
7. 지어내지 않는다. 사진에서 가려져 보이지 않는 부분은 앞면에서 유추했다는 뜻이 되도록 단순하게 둔다.
8. 부품은 2개 이상 24개 이하. 너무 잘게 쪼개지 말고 알아볼 수 있는 단위로 둔다.
9. 반드시 요청받은 그 물체를 만든다. 스키마 설명에 나오는 낱말이나 형식 예시를 물체로 착각하지 않는다.
`.trim();

export function buildSculptMessages({ prompt = "", image = null, lang = "ko" }) {
  const ko = lang !== "en";
  const system = ko
    ? `너는 물체를 부품 트리로 옮기는 사람이다. 설명이나 사진을 받아 ObjectSculptSpec 을 쓴다.\n${RULES}\n\n이름(name)과 부품 이름은 한국어로 쓴다.`
    : `You turn objects into part trees. Given a description or a photo, write an ObjectSculptSpec.\n${RULES}\n\nWrite name fields in English.`;

  const user = [];
  if (image) {
    user.push({ type: "text", text: ko
      ? "이 사진의 물체를 부품 트리로 옮겨라. 보이는 부품을 빠짐없이 나누되, 가려진 뒷면은 앞면에서 유추한다."
      : "Turn the object in this photo into a part tree. Split every visible part; infer hidden backs from the front." });
    user.push({ type: "image_url", image_url: { url: image } });
    if (prompt) user.push({ type: "text", text: (ko ? "추가 설명: " : "Extra note: ") + prompt });
  } else {
    user.push({ type: "text", text: (ko ? "다음 물체를 부품 트리로 옮겨라: " : "Turn this object into a part tree: ") + prompt });
  }
  return [{ role: "system", content: system }, { role: "user", content: user }];
}
