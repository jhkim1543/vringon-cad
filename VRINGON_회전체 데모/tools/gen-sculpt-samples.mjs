/* Part 3 예시 사양을 만든다 (ObjectSculptSpec 부분집합).
   Writes the Part 3 example specs (a subset of ObjectSculptSpec).

   왜 손으로 쓰나 / Why these are authored by hand:
   실제 파이프라인은 그림을 보고 AI 가 사양을 쓴다. 그 결과를 데모에 미리 담아 두려면
   한 번은 사람이 쓴 정답이 있어야 하고, 그것이 라이브 생성 결과를 견줄 기준이 된다.
   In the real pipeline the AI writes the spec from an image. To ship a static demo we need a
   hand-written reference first, and it doubles as the yardstick for what live generation produces.

   node tools/gen-sculpt-samples.mjs → assets/sculpt/*.json + assets/sculpt/index.json */
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const OUT = join(fileURLToPath(new URL("../", import.meta.url)), "assets", "sculpt");
mkdirSync(OUT, { recursive: true });

/* 위치(at)는 부모 좌표계의 절대값이다. 소켓은 어디에 붙는지 밝히는 참고점이고, 위치를 또 더하지 않는다
   (조립기 규칙과 같다: js/sculpt-spec.js 의 "자리 정하기").
   Positions are absolute in the parent frame; the socket documents where it attaches and is not added
   on top, matching the placement rule in js/sculpt-spec.js. */
const M = (id, color, roughness, metalness) => ({ id, color, roughness, metalness });
/* 부품 하나 / one component. 소켓은 부모 좌표계의 점이다 / sockets are points in the parent frame */
const C = (id, name, primitive, dim, o = {}) => ({
  id, name, primitive, level: o.level || "macro", role: o.role || "",
  parent: o.parent || null,
  dimensions: { width: dim[0], height: dim[1], depth: dim[2], units: "relative", confidence: 0.8 },
  transform: { position: o.at || [0, 0, 0], rotation: o.rot || [0, 0, 0] },
  material: o.mat || "body",
  ...(o.attach ? { attachment: { parentSocket: o.attach, contactType: o.contact || "seated", embedDepth: o.embed ?? 0.01, gapTolerance: 0.002 } } : {}),
  ...(o.sockets ? { sockets: o.sockets } : {}),
  ...(o.extra || {}),
});
const S = (id, position, normal) => ({ id, position, normal });

/* ================================================================ 1. 책상 스탠드 / desk lamp
   부모 소켓으로 팔과 갓이 이어지는 전형적인 구조다. 파트 분리가 가장 잘 보인다.
   Arm and shade hang off parent sockets: the clearest case for part separation. */
const lamp = {
  spec: "img2threejs/ObjectSculptSpec", specVersion: "1.5-beta-subset",
  id: "desk-lamp", name: "책상 스탠드",
  source: { kind: "prompt", text: "접이식 팔이 달린 금속 책상 스탠드, 원형 받침, 원뿔 갓" },
  objectClass: { primaryType: "desk lamp", primaryDomain: "object", formLanguage: ["cylindrical", "tapered"] },
  scaleHint: { longestSide_mm: 420, confidence: 0.5 },
  materials: [M("body", "#6E7A93", 0.42, 0.75), M("shade", "#8FA1C8", 0.35, 0.55), M("accent", "#2C3346", 0.6, 0.3)],
  componentTree: [
    C("base", "받침", "cylinder", [0.34, 0.035, 0.34], { role: "support", sockets: [S("base-top", [0, 0.018, 0], [0, 1, 0])] }),
    C("post", "기둥", "cylinder", [0.045, 0.42, 0.045], { parent: "base", attach: "base-top", at: [0, 0.228, 0], role: "structure",
      sockets: [S("post-top", [0, 0.21, 0], [0, 1, 0])] }),
    C("joint", "관절", "sphere", [0.07, 0.07, 0.07], { parent: "post", attach: "post-top", role: "joint", mat: "accent",
      sockets: [S("joint-out", [0, 0.01, 0], [0.6, 0.8, 0])] }),
    C("arm", "팔", "tube", [0.04, 0.3, 0.04], { parent: "joint", attach: "joint-out", role: "structure",
      extra: { from: [0, 0, 0], to: [0.26, 0.16, 0] }, sockets: [S("arm-end", [0.26, 0.16, 0], [0.6, 0.8, 0])] }),
    C("shade", "갓", "cone", [0.24, 0.19, 0.24], { parent: "arm", attach: "arm-end", at: [0.28, 0.10, 0], rot: [180, 0, 155], role: "housing", mat: "shade" }),
    C("bulb", "전구", "sphere", [0.07, 0.07, 0.07], { parent: "shade", level: "meso", role: "detail", at: [0, 0.06, 0], mat: "accent" }),
  ],
};

/* ================================================================ 2. 머그컵 / mug
   가장 단순한 것. 부품 둘이면 파트 분리가 무슨 뜻인지 바로 보인다.
   The simplest one: two parts make the meaning of part separation obvious at a glance. */
const mug = {
  spec: "img2threejs/ObjectSculptSpec", specVersion: "1.5-beta-subset",
  id: "mug", name: "머그컵",
  source: { kind: "prompt", text: "손잡이가 달린 원통형 세라믹 머그컵" },
  objectClass: { primaryType: "mug", primaryDomain: "object", formLanguage: ["cylindrical"] },
  scaleHint: { longestSide_mm: 120, confidence: 0.6 },
  materials: [M("body", "#93A3C4", 0.5, 0.05), M("accent", "#5A6885", 0.5, 0.05)],
  componentTree: [
    C("cup", "컵", "cylinder", [0.34, 0.4, 0.34], { role: "housing", sockets: [S("side", [0.17, 0.06, 0], [1, 0, 0])] }),
    C("handle", "손잡이", "torus", [0.24, 0.24, 0.05], { parent: "cup", attach: "side", at: [0.19, 0.04, 0], rot: [0, 90, 0],
      role: "grip", mat: "accent", extra: { tubeRadius: 0.024 } }),
  ],
};

/* ================================================================ 3. 사무용 의자 / office chair
   부품이 여럿이고 다리가 반복된다. 분해하면 계층이 드러난다.
   More parts, with repeated legs: exploding it reveals the hierarchy. */
const chair = (() => {
  const legs = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    legs.push(C(`leg-${i + 1}`, `다리 ${i + 1}`, "tube", [0.035, 0.3, 0.035], {
      parent: "hub", attach: "hub-side", level: "meso", role: "support", mat: "accent",
      extra: { from: [0, 0, 0], to: [Math.cos(a) * 0.3, -0.06, Math.sin(a) * 0.3] },
    }));
  }
  return {
    spec: "img2threejs/ObjectSculptSpec", specVersion: "1.5-beta-subset",
    id: "office-chair", name: "사무용 의자",
    source: { kind: "prompt", text: "다리 다섯 개 바퀴 달린 사무용 의자, 등받이와 좌판" },
    objectClass: { primaryType: "office chair", primaryDomain: "object", formLanguage: ["prismatic", "radial"] },
    scaleHint: { longestSide_mm: 900, confidence: 0.45 },
    materials: [M("body", "#77839E", 0.55, 0.15), M("accent", "#2F3648", 0.5, 0.6), M("seat", "#9FAECB", 0.7, 0.05)],
    componentTree: [
      C("hub", "중심축", "cylinder", [0.07, 0.06, 0.07], { role: "structure", mat: "accent",
        sockets: [S("hub-side", [0, 0, 0], [1, 0, 0]), S("hub-top", [0, 0.03, 0], [0, 1, 0])] }),
      ...legs,
      C("column", "기둥", "cylinder", [0.06, 0.34, 0.06], { parent: "hub", attach: "hub-top", at: [0, 0.20, 0], role: "structure", mat: "accent",
        sockets: [S("col-top", [0, 0.17, 0], [0, 1, 0])] }),
      C("seat", "좌판", "plate", [0.46, 0.06, 0.44], { parent: "column", attach: "col-top", role: "seat", mat: "seat",
        sockets: [S("seat-back", [0, 0.03, -0.2], [0, 1, 0])] }),
      C("back", "등받이", "plate", [0.42, 0.44, 0.06], { parent: "seat", attach: "seat-back", at: [0, 0.25, -0.19], rot: [-8, 0, 0], role: "backrest", mat: "seat" }),
    ],
  };
})();

const ALL = [lamp, mug, chair];
for (const s of ALL) writeFileSync(join(OUT, `${s.id}.json`), JSON.stringify(s, null, 1));
writeFileSync(join(OUT, "index.json"), JSON.stringify({
  built: new Date().toISOString().slice(0, 10),
  samples: ALL.map((s) => ({ id: s.id, name: s.name, prompt: s.source.text, parts: s.componentTree.length })),
}, null, 1));
console.log(`assets/sculpt: ${ALL.map((s) => s.id + ".json").join(" ")} index.json`);
