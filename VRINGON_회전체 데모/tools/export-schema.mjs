/* js/shaft-schema.js 의 SHAFT_SCHEMA → schema/shaft_dsl.schema.json (계약 파일; 파이썬 쪽이 이것을 읽는다)
   + pipeline/tests/golden_profiles.json (JS 프로파일 빌더의 좌표·부피 — 파이썬 거울 구현의 골든 테스트) */
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { SHAFT_SCHEMA } from "../js/shaft-schema.js";
import { buildTopLine, buildInnerLine, computeMass, totalLength } from "../js/shaft-profile.js";
import { silhouetteSamples } from "../js/shaft-profile.js";
import { GOLDENS } from "./goldens.mjs";
const ROOT = fileURLToPath(new URL("../", import.meta.url));
mkdirSync(`${ROOT}schema`, { recursive: true });
writeFileSync(`${ROOT}schema/shaft_dsl.schema.json`, JSON.stringify(SHAFT_SCHEMA, null, 2));
const prof = {};
for (const g of GOLDENS) {
  const top = buildTopLine(g, 10).points.map((p) => [+p.x.toFixed(6), +p.r.toFixed(6), p.tag]);
  const inner = buildInnerLine(g, 10).points.map((p) => [+p.x.toFixed(6), +p.r.toFixed(6), p.tag]);
  const m = computeMass(g, 1);
  const s = silhouetteSamples(g, 100);
  prof[g.id] = { L: totalLength(g), top, inner, volume_mm3: +m.volume_mm3.toFixed(3), silhouette100: Array.from(s.samples).map((v) => +v.toFixed(4)) };
}
mkdirSync(`${ROOT}pipeline/tests`, { recursive: true });
writeFileSync(`${ROOT}pipeline/tests/golden_profiles.json`, JSON.stringify(prof, null, 1));
console.log(`schema/shaft_dsl.schema.json · pipeline/tests/golden_profiles.json (${Object.keys(prof).length}개)`);
