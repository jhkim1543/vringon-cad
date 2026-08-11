/* Compile a saved JSON specification through the step-4 builder outside the
   browser, so a geometry regression shows up as a number instead of a blank
   viewport. Feed it the response body of /api/spec-json.

   node tools/spec-build-check.mjs spec.json
*/
import { readFileSync } from "node:fs";
import * as THREE from "../vendor/three/three.module.js";
import { buildFromSpec, specThreeCode, specSummaryText } from "../js/spec-cad.js";

const file = process.argv[2];
if (!file) { console.error("usage: node tools/spec-build-check.mjs <spec.json>"); process.exit(1); }
const raw = JSON.parse(readFileSync(file, "utf8"));
const spec = raw.spec || raw;

const r = buildFromSpec(spec, { sourceMesh: null });
const box = new THREE.Box3().setFromObject(r.root);
const size = box.getSize(new THREE.Vector3());
let tris = 0;
r.root.traverse((o) => {
  if (!o.isMesh) return;
  const g = o.geometry;
  tris += g.index ? g.index.count / 3 : g.attributes.position.count / 3;
});

console.log("parts  ", r.root.children.length);
console.log("bbox   ", [size.x, size.y, size.z].map((v) => v.toFixed(1)).join(" x "), "mm");
console.log("floor  ", `min y ${box.min.y.toFixed(2)}`);
console.log("tris   ", tris);
if (r.notes.length) console.log("notes  ", r.notes.join("\n        "));
for (const c of r.root.children) {
  const b = new THREE.Box3().setFromObject(c);
  const s = b.getSize(new THREE.Vector3());
  console.log(`  ${c.name}  ${[s.x, s.y, s.z].map((v) => v.toFixed(1)).join(" x ")}  y ${b.min.y.toFixed(1)}..${b.max.y.toFixed(1)}`);
}
console.log("\n--- three.js ---");
console.log(specThreeCode(spec).split("\n").slice(0, 26).join("\n"));
console.log("\n--- report ---");
console.log(specSummaryText(spec, r.notes));
