/* Measure loft sections off the committed stage-1 meshes and write them into
   the specifications.

   This is the step that stops the specification writer from guessing the one
   thing it cannot see. An extrusion carries a single silhouette, so the survey
   wing's fuselage was a 760mm side profile pushed through a constant 140mm —
   a plank with a good outline. The mesh knows better: sliced along its own
   axis it reports a section running 186mm tall at the nose, 76mm at the waist
   and 118mm again further back.

   Free and deterministic: no segmentation service, because each part's own
   declared box is the mask.

   node tools/refine-specs.mjs [id ...] [--dry]
*/
import { readFile, writeFile } from "node:fs/promises";
import { positionsFromGlb, refineFromMesh } from "../js/mesh-loft.js";

const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const ONLY = args.filter((a) => !a.startsWith("--"));

const SPECS = new URL("../docs/specs/", import.meta.url);
const MESHES = new URL("../docs/assets/meshes/", import.meta.url);

const index = JSON.parse(await readFile(new URL("index.json", MESHES), "utf8"));

for (const id of Object.keys(index)) {
  if (ONLY.length && !ONLY.includes(id)) continue;
  const specUrl = new URL(`${id}.json`, SPECS);
  const spec = JSON.parse(await readFile(specUrl, "utf8"));
  const mesh = positionsFromGlb(await readFile(new URL(index[id].file, MESHES)));
  if (!mesh) { console.log(`${id} … 메시를 읽지 못했습니다`); continue; }

  const r = refineFromMesh(spec, mesh);
  const touched = r.measured, skipped = r.internal;
  if (touched.length && !DRY) await writeFile(specUrl, JSON.stringify(spec, null, 2));
  const total = touched.length + skipped.length;
  console.log(`${id.padEnd(14)} 측정 ${touched.length}/${total}`
    + (touched.length ? ` · ${touched.join(", ")}` : "")
    + (skipped.length ? ` · 내부(메시 없음) ${skipped.join(", ")}` : ""));
}

if (DRY) console.log("\n--dry 모드: 파일을 쓰지 않았습니다.");
