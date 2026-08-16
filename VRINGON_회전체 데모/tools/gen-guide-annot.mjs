/* 치수 기준 안내 그림: 렌더러가 그린 실제 도면(단붙이 축 골든) 위에 번호 말풍선을 얹어 "판독기가 어떤 치수를 어디서 읽는지" 를 보여 준다.
   숫자·위치가 정확해야 하므로 이미지 모델이 아니라 렌더러 출력을 쓴다.  → assets/guide/dim-guide.webp + dim-guide.json(범례)
   node tools/gen-guide-annot.mjs */
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { GOLDENS } from "./goldens.mjs";
import { drawShaft, toSVG, drawingLabels } from "../js/shaft-drawing.js";
const ROOT = fileURLToPath(new URL("../", import.meta.url));
const sharp = (await import("sharp")).default;
mkdirSync(`${ROOT}assets/guide`, { recursive: true });

const g = GOLDENS.find((x) => x.id === "stepped-shaft");
const dr = drawShaft(g, { scale: "auto", seed: 1 });
const labels = drawingLabels(dr);
const H = dr.sheet.h;
/* 번호 붙일 라벨 종류 (처음 하나씩) */
const PICK = [
  ["overall", "전체 길이 — 맨 아래 가장 긴 수평 치수. 세그먼트 길이의 합과 같아야 합니다."],
  ["length", "연쇄 치수(세그먼트 길이) — 부품 바로 아래 한 줄. 하나가 생략돼 있으면 전체 − 나머지 합으로 유추합니다."],
  ["diameter", "⌀ 지름 — 세그먼트를 관통하는 수직 치수선. 뒤의 h6/k6 는 공차."],
  ["thread", "나사 호출 — M호칭×피치. 가는선 두 줄이 나사 구간."],
  ["chamfer", "모따기 C — 끝면·단차의 볼록 모서리."],
  ["fillet", "필렛 R — 단차의 오목 모서리."],
  ["undercut", "도피홈 — 폭×⌀도피지름 (DIN 76/509)."],
  ["groove_width", "홈 폭 — 홈 지름 ⌀ 와 위치 치수가 함께 옵니다."],
  ["keyway_length", "키홈 길이·위치 — 폭과 깊이(D−t1)는 단면도 A-A 에."],
  ["cross_hole", "횡구멍 — ⌀ 관통/깊이 + 끝에서 잰 위치."],
  ["center_hole", "센터구멍 지시 — 형식·파일럿 지름 (DIN 332)."],
];
const picked = [];
for (const [kind, text] of PICK) { const l = labels.find((x) => x.kind === kind && x.bbox_sheet); if (l) picked.push({ kind, text, bbox: l.bbox_sheet }); }
/* SVG 위에 번호 원 오버레이 (시트 좌표 → SVG: y 뒤집기) */
let svg = toSVG(dr, { pxPerMm: 6 });
const over = picked.map((p, i) => {
  const [x0, y0, x1, y1] = p.bbox; const cx = x0 - 3.2, cy = H - (y0 + y1) / 2;
  return `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="3.1" fill="#5B6BF0" stroke="#fff" stroke-width="0.5"/><text x="${cx.toFixed(2)}" y="${(cy + 1.15).toFixed(2)}" font-size="3.4" font-weight="700" fill="#fff" text-anchor="middle">${i + 1}</text>`;
}).join("");
svg = svg.replace("</svg>", `<g id="guide">${over}</g></svg>`);
writeFileSync(`${ROOT}assets/guide/dim-guide.svg`, svg);
await sharp(Buffer.from(svg)).resize({ width: 1600 }).flatten({ background: "#ffffff" }).webp({ quality: 88 }).toFile(`${ROOT}assets/guide/dim-guide.webp`);
writeFileSync(`${ROOT}assets/guide/dim-guide.json`, JSON.stringify({ sample: g.id, legend: picked.map((p, i) => ({ n: i + 1, kind: p.kind, text: p.text })) }, null, 1));
console.log("dim-guide:", picked.map((p, i) => `${i + 1} ${p.kind}`).join(", "));
