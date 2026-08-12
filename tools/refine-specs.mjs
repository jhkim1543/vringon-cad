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
import { positionsFromGlb, meshBounds, refineFromMesh } from "../js/mesh-loft.js";

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

  /* The mesh arrives unitless at roughly 1.0 across, so it is scaled to the
     longest dimension the specification declares — the same rule the viewer
     uses when it shows the stage-1 mesh, so the two agree. */
  const b = meshBounds(mesh);
  const meshLong = Math.max(...b.size);
  let specLong = 0;
  for (const p of spec.parts || []) {
    const s = p.geometry?.size_mm, c = p.geometry?.center_mm;
    if (!s || !c) continue;
    const r = p.geometry?.repeat?.radius_mm || 0;
    for (const [dim, at] of [[s.w, c.x], [s.h, c.y], [s.d, c.z]]) {
      specLong = Math.max(specLong, (Math.abs(at || 0) + (dim || 0) / 2 + r) * 2);
    }
  }
  if (!(specLong > 0) || !(meshLong > 0)) { console.log(`${id} … 축척을 정할 수 없습니다`); continue; }
  const meshToMm = specLong / meshLong;

  /* Both are centred on their own bounds horizontally and sit on the floor,
     which is how the viewer places the stage-1 mesh. */
  const origin = [
    (b.lo[0] + b.hi[0]) / 2,
    b.lo[1],
    (b.lo[2] + b.hi[2]) / 2,
  ];

  const { touched, skipped } = refineFromMesh(spec, mesh, meshToMm, origin);
  if (touched.length && !DRY) await writeFile(specUrl, JSON.stringify(spec, null, 2));
  console.log(`${id.padEnd(14)} 축척 ${meshToMm.toFixed(0)}mm/unit · `
    + (touched.length ? `로프트 ${touched.join(", ")}` : "변경 없음")
    + (skipped.length ? ` · 건너뜀 ${skipped.join(", ")}` : ""));
}

if (DRY) console.log("\n--dry 모드: 파일을 쓰지 않았습니다.");
