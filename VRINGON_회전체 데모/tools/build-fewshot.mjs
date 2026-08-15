/* few-shot 예시 3장: 샘플러의 합성 도면(골든과 겹치지 않음) → prompts/fewshot/{01,02,03}.{png,json}
   시드는 고정. 아키타입: 키홈 축 / 부시(전단면) / 나사 축. sharp 필요. */
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { sampleShaft } from "../js/shaft-sampler.js";
import { drawShaft, toSVG } from "../js/shaft-drawing.js";
import { validateShaft } from "../js/shaft-schema.js";
const ROOT = fileURLToPath(new URL("../", import.meta.url));
const sharp = (await import("sharp")).default;
const picks = [{ n: "01", seed: 12 }, { n: "02", seed: 50 }, { n: "03", seed: 56 }];   /* keyed_shaft · bushing(홈+급유구멍) · threaded 단붙이 */
mkdirSync(`${ROOT}prompts/fewshot`, { recursive: true });
for (const { n, seed } of picks) {
  const dsl = sampleShaft(seed);
  const v = validateShaft(dsl); if (!v.ok) throw new Error(`seed ${seed} invalid`);
  const svg = toSVG(drawShaft(dsl, { scale: "auto", seed: 1 }));
  await sharp(Buffer.from(svg)).resize({ width: 1600 }).flatten({ background: "#ffffff" }).png({ compressionLevel: 9 }).toFile(`${ROOT}prompts/fewshot/${n}.png`);
  writeFileSync(`${ROOT}prompts/fewshot/${n}.json`, JSON.stringify(dsl, null, 1));
  console.log(n, seed, dsl.meta.archetype, dsl.segments.length, "segs", (dsl.features || []).map((f) => f.type).join(","));
}
