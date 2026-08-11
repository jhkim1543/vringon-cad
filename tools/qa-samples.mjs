/* Headless end-to-end QA over every bundled specification.

   Runs the same modules the browser runs: compile the CAD, spin up the
   simulation, apply a parameter, swap a catalogue component, estimate a print.
   A sample that cannot survive all five is not a sample worth shipping.

   node tools/qa-samples.mjs
*/
import * as THREE from "three";
import { readFileSync, readdirSync } from "node:fs";
import { buildFromSpec } from "../js/spec-cad.js";
import { createDroneSim } from "../js/drone-sim.js";
import { applyParameter, partFields, applyPartField } from "../js/drone-params.js";
import { COMPONENT_CATALOG, fitTargets, applyComponent, addComponentAsPart } from "../js/drone-catalog.js";
import { PRINTERS, MATERIALS, estimatePrint } from "../js/print-estimate.js";

const dir = new URL("../docs/specs/", import.meta.url);
const files = readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "index.json");
const size = (root) => {
  const v = new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3());
  return `${v.x.toFixed(0)}×${v.y.toFixed(0)}×${v.z.toFixed(0)}`;
};

let failures = 0;
const rows = [];

for (const f of files) {
  const id = f.replace(".json", "");
  const spec = JSON.parse(readFileSync(new URL(f, dir), "utf8"));
  const issues = [];

  // 1. compile
  const built = buildFromSpec(spec, {});
  const root = built.root;
  const bb = new THREE.Box3().setFromObject(root);
  if (!isFinite(bb.min.y) || Math.abs(bb.min.y) > 1) issues.push(`바닥 ${bb.min.y.toFixed(1)}`);
  if (root.children.length < 5) issues.push(`파트 ${root.children.length}`);

  // 2. simulate
  const sim = createDroneSim({ root, spec });
  if (sim.rotorCount === 0) issues.push("로터 인식 0");
  sim.fly();
  let maxAlt = 0;
  for (let i = 0; i < 360; i++) { sim.update(1 / 60); maxAlt = Math.max(maxAlt, root.position.y); }
  if (maxAlt < 50) issues.push(`이륙 안함 ${maxAlt.toFixed(0)}`);
  sim.rotorOut();
  for (let i = 0; i < 600 && sim.state.mode === "rotorout"; i++) sim.update(1 / 60);
  const rotorOutRow = sim.checks({ batteryWh: 220 }).find((c) => c.id === "rotor_out");
  sim.drop(400);
  let steps = 0;
  while (sim.state.mode === "drop" && steps < 4000) { sim.update(1 / 120); steps++; }
  if (sim.state.mode === "drop") issues.push("낙하 미종료");
  sim.stop();

  // 3. parameter knob
  const knob = (spec.parameters || [])[0];
  let knobEffect = "-";
  if (knob) {
    const before = size(buildFromSpec(spec, {}).root);
    applyParameter(spec, knob.id, (knob.value || 100) * 1.2);
    const after = size(buildFromSpec(spec, {}).root);
    knobEffect = before === after ? "변화없음" : "OK";
    if (before === after) issues.push(`파라미터 ${knob.id} 무반응`);
  } else issues.push("파라미터 없음");

  // 4. part field
  const first = spec.parts[0];
  const fields = partFields(spec, first.part_id);
  if (!fields.length) issues.push("파트 필드 없음");
  else applyPartField(spec, first.part_id, "size_mm.h", (fields[1].value || 20) * 1.1);

  // 5. catalogue swap or add
  const bat = COMPONENT_CATALOG.find((c) => c.id === "bat_6s_5000");
  const t = fitTargets(spec, bat);
  if (t.length) applyComponent(spec, t[0].part_id, bat);
  else addComponentAsPart(spec, bat);
  const hasRef = spec.parts.some((p) => p.component_ref?.catalog_id === "bat_6s_5000");
  if (!hasRef) issues.push("부품 배정 실패");

  // 6. print estimate on the edited spec
  const finalRoot = buildFromSpec(spec, {}).root;
  const est = estimatePrint({ root: finalRoot, printer: PRINTERS[0], material: MATERIALS[0],
    infill: 0.15, parts: finalRoot.children.length });
  if (!(est.hours > 0) || !(est.grams > 0)) issues.push("프린트 추정 실패");

  if (issues.length) failures += 1;
  rows.push({ id, parts: root.children.length, size: size(root),
    rotors: sim.rotorCount, rotorOut: rotorOutRow?.value || "-",
    knob: knobEffect, print: `${est.hours.toFixed(1)}h/${est.grams.toFixed(0)}g`,
    issues: issues.length ? issues.join(", ") : "OK" });
}

const pad = (s, n) => String(s).padEnd(n);
console.log(pad("샘플", 15) + pad("파트", 5) + pad("치수 mm", 18) + pad("로터", 5)
  + pad("로터고장", 16) + pad("파라미터", 9) + pad("프린트", 13) + "판정");
for (const r of rows) {
  console.log(pad(r.id, 15) + pad(r.parts, 5) + pad(r.size, 18) + pad(r.rotors, 5)
    + pad(r.rotorOut, 16) + pad(r.knob, 9) + pad(r.print, 13) + r.issues);
}
console.log(`\n${rows.length - failures}/${rows.length} 통과`);
process.exit(failures ? 1 : 0);
