/* 쌍 데이터 회귀: 라이브러리의 모든 카드가 "도면 + 그 도면에서 나온 3D" 두 장을 갖는가.
   Pair regression: does every library card have both halves, the drawing and the 3D built from it.

   왜 필요한가 / Why this exists:
   그림은 도구가 따로 굽는다(tools/render-thumb.mjs). 골든을 고치고 다시 굽지 않으면 카드가
   옛 그림을 보여 주거나 빈칸이 되는데, 화면만 봐서는 알아채기 어렵다.
   The images are baked by a separate tool. Edit a golden and forget to re-bake and the card shows a
   stale image or an empty box, which is easy to miss by eye.

   node tools/test-pairs.mjs */
import { readFileSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
let fail = 0;
const bad = (msg) => { console.log(`  X ${msg}`); fail++; };

/* ---- Part 1: 샘플마다 도면 · 결과 · 출처 표기 / every sample needs a drawing, a result and a source label */
const idx = JSON.parse(readFileSync(ROOT + "samples/index.json", "utf8"));
for (const s of idx.samples) {
  const dir = `${ROOT}samples/${s.id}/`;
  for (const key of ["svg", "thumb", "result"]) {
    const f = s.files[key];
    if (!f) { bad(`${s.id}: index.json 에 ${key} 가 없습니다 / missing ${key} in index.json`); continue; }
    if (!existsSync(dir + f)) bad(`${s.id}: ${f} 파일이 없습니다 / file missing`);
    else if (statSync(dir + f).size < 400) bad(`${s.id}: ${f} 가 너무 작습니다 / suspiciously small`);
  }
  if (!["read", "reference"].includes(s.result_from)) bad(`${s.id}: result_from 이 read/reference 가 아닙니다 (${s.result_from})`);
  /* 판독 결과로 그렸다면 그 판독 파일이 실제로 있어야 한다 / "read" must be backed by a reading on disk */
  if (s.result_from === "read" && !existsSync(dir + "extracted.json")) bad(`${s.id}: read 라고 적혀 있는데 extracted.json 이 없습니다`);
  if (s.result_from === "reference" && existsSync(dir + "extracted.json")) bad(`${s.id}: extracted.json 이 있는데 reference 로 그렸습니다 (다시 구우세요)`);
  /* 결과 그림이 도면보다 오래되면 골든을 고치고 다시 굽지 않은 것이다 / a result older than the drawing means a stale bake */
  if (existsSync(dir + "result.webp") && existsSync(dir + "drawing.svg")
    && statSync(dir + "result.webp").mtimeMs < statSync(dir + "drawing.svg").mtimeMs - 1000) {
    bad(`${s.id}: result.webp 가 도면보다 오래됐습니다 (node tools/render-thumb.mjs --only ${s.id})`);
  }
}
console.log(`Part 1 샘플 ${idx.samples.length}종 · 판독 ${idx.samples.filter((s) => s.result_from === "read").length} · 정답 ${idx.samples.filter((s) => s.result_from === "reference").length}`);

/* ---- Part 2: 만들 수 있는 것은 결과가 있어야 하고, 못 만드는 것은 없어야 한다
   Part 2: buildable kinds must have a result, unbuildable ones must not */
const g2 = JSON.parse(readFileSync(ROOT + "assets/part2/golden.json", "utf8"));
for (const [id, g] of Object.entries(g2)) {
  const sheet = `${ROOT}assets/part2/${id}.svg`;
  const result = `${ROOT}assets/part2/${id}-result.webp`;
  if (!existsSync(sheet)) bad(`part2/${id}: 도면 SVG 가 없습니다 / sheet missing`);
  if (g.unsupported) {
    if (existsSync(result)) bad(`part2/${id}: 만들지 못하는 부류인데 결과 그림이 있습니다 / unbuildable but a result exists`);
  } else if (!existsSync(result)) {
    bad(`part2/${id}: 결과 그림이 없습니다 (node tools/render-thumb.mjs --part2 --only ${id})`);
  }
}
/* 화면 목록과 정답 목록이 어긋나면 카드가 깨진 그림을 가리킨다 / a mismatch here points cards at missing files */
const src = readFileSync(ROOT + "js/part2.js", "utf8");
const listed = [...src.matchAll(/\{\s*id:\s*"([a-z0-9-]+)",\s*name:/g)].map((m) => m[1]);
for (const id of listed) if (!(id in g2)) bad(`part2.js 의 "${id}" 가 golden.json 에 없습니다`);
for (const id of Object.keys(g2)) if (!listed.includes(id)) bad(`golden.json 의 "${id}" 가 part2.js 목록에 없습니다`);
console.log(`Part 2 샘플 ${listed.length}종 · 만들 수 있는 것 ${Object.values(g2).filter((g) => !g.unsupported).length}`);

if (fail) { console.log(`\n실패 ${fail}건`); process.exit(1); }
console.log("\nall pair tests passed");
