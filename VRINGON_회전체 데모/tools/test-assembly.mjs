/* 조립·시뮬 회귀 테스트 (Node, 렌더 없이 기하만) — node tools/test-assembly.mjs
   ① 결합부 판정이 골든마다 기대한 종류를 내는가  ② 분해가 부품을 겹치지 않게 떼어내는가
   ③ 자전에서 "축과 함께 도는 것" 과 "안 도는 것" 이 갈리는가  ④ 나사 이송이 피치와 일치하는가 */
import * as THREE from "three";
import { GOLDENS } from "./goldens.mjs";
import { analyzeMates } from "../js/shaft-mates.js";
import { buildAssembly, createAssemblySim, assemblyChecks } from "../js/shaft-assembly.js";
import { buildShaft3D } from "../js/shaft-cad.js";

const EXPECT = {
  "roller": ["bearing", "bearing", "snap", "snap"],
  "motor-shaft": ["bearing", "bearing", "snap", "key"],
  "stepped-shaft": ["bearing", "snap", "screw", "key", "pin", "fit"],
  "hex-bolt-m10": ["screw", "wrench"],
  "socket-cap-m8": ["screw", "wrench"],
  "stud-m12": ["screw", "screw"],
  "bushing": ["fit", "fit", "pin"],
  "spacer": ["fit"],
};
let fail = 0;
for (const g of GOLDENS) {
  const a = analyzeMates(g);
  const kinds = a.mates.filter((m) => m.part).map((m) => m.kind).sort();
  const exp = EXPECT[g.id];
  const built = buildShaft3D(g);
  const asm = buildAssembly(a);
  const sim = createAssemblySim({ part: built.root, assembly: asm, analysis: a });

  /* ② 분해: 모든 상대 부품이 제자리에서 벗어나고, 조립으로 정확히 복귀 */
  const home = asm.items.map((i) => i.wrap.position.clone());
  sim.applyExplode(1);
  const moved = asm.items.map((i, k) => i.wrap.position.distanceTo(home[k]));
  sim.applyExplode(0);
  const back = asm.items.every((i, k) => i.wrap.position.distanceTo(home[k]) < 1e-9);
  const allMoved = moved.every((d) => d > 5);

  /* ③ 자전: 부품·키·링은 돌고, 베어링 wrap(외륜 포함)·스패너·하우징은 안 돈다 */
  sim.spin(600);
  for (let k = 0; k < 30; k++) sim.update(1 / 60);
  const theta = built.root.rotation.x;
  const spinOk = Math.abs(theta - (600 / 60) * Math.PI * 2 * 0.5) < 1e-6;
  const rotSplit = asm.items.every(({ wrap, mate }) => {
    if (mate.kind === "bearing") return Math.abs(wrap.rotation.x) < 1e-9 && Math.abs(wrap.children[0].children[0].rotation.x - theta) < 1e-9;
    if (mate.part === "wrench" || mate.part === "housing") return Math.abs(wrap.rotation.x) < 1e-9;
    return Math.abs(wrap.rotation.x - theta) < 1e-9;
  });
  sim.reset();

  /* ④ 나사 이송 = 피치 */
  let screwOk = true;
  const nut = asm.items.find((i) => i.mate.kind === "screw");
  if (nut) {
    const p0 = nut.wrap.position.x, r0 = nut.wrap.rotation.x;
    sim.screw(true);
    for (let k = 0; k < 60; k++) sim.update(1 / 60);
    const turns = (nut.wrap.rotation.x - r0) / (2 * Math.PI);
    const mmPerTurn = Math.abs((nut.wrap.position.x - p0) / turns);
    screwOk = Math.abs(mmPerTurn - nut.mate.params.pitch) < 0.01;
    sim.reset();
  }
  const expOk = !exp || JSON.stringify(kinds) === JSON.stringify([...exp].sort());
  const ok = expOk && allMoved && back && spinOk && rotSplit && screwOk;
  if (!ok) fail++;
  console.log(`${ok ? "PASS" : "FAIL"} ${g.id.padEnd(16)} 결합부 [${kinds.join(",") || "-"}]${expOk ? "" : ` (기대 ${exp})`} · 분해 ${allMoved ? "✓" : "✗"} 복귀 ${back ? "✓" : "✗"} · 자전 ${spinOk && rotSplit ? "✓" : "✗"} · 나사 ${nut ? (screwOk ? "✓" : "✗") : "-"} · 점검 ${assemblyChecks(a, g).length}`);
}
console.log(fail ? `${fail} FAILED` : "all assembly tests passed");
process.exit(fail ? 1 : 0);
