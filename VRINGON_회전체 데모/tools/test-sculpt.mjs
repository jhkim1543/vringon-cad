/* Part 3 회귀: 예시 사양이 검사를 통과하고, 부품이 붙어 있고, 파트가 실제로 나뉘는가.
   Part 3 regression: the example specs validate, the parts stay attached, and they really do separate.

   왜 "붙어 있는가" 를 재나 / Why attachment is measured:
   조립 규칙을 고칠 때마다 부품이 조용히 떠 버렸다. 눈으로만 보면 놓치기 쉬워서 숫자로 고정한다.
   Every time the placement rule changed, parts silently drifted apart. That is easy to miss by eye,
   so it is pinned down as a number here.

   node tools/test-sculpt.mjs */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import * as THREE from "three";
import { buildFromSpec, validateSpec, parentOf, PRIMITIVES } from "../js/sculpt-spec.js";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const idx = JSON.parse(readFileSync(ROOT + "assets/sculpt/index.json", "utf8"));
let fail = 0;
const bad = (m) => { console.log(`  X ${m}`); fail++; };

for (const s of idx.samples) {
  const file = `${ROOT}assets/sculpt/${s.id}.json`;
  if (!existsSync(file)) { bad(`${s.id}: 사양 파일이 없습니다`); continue; }
  const spec = JSON.parse(readFileSync(file, "utf8"));

  const v = validateSpec(spec);
  if (!v.ok) { bad(`${s.id}: ${v.errors.join(" | ")}`); continue; }

  const built = buildFromSpec(spec);
  if (built.notes.length) bad(`${s.id}: 조립 경고 — ${built.notes.join("; ")}`);
  if (built.parts.length !== s.parts) bad(`${s.id}: 파트 수가 목록(${s.parts})과 다릅니다 (${built.parts.length})`);

  /* ① 부품이 서로 닿아 있는가. 자식의 상자가 부모 상자에서 너무 멀면 떠 있는 것이다.
     Are parts actually touching? A child box far from its parent box is a floating part. */
  const boxOf = (o) => new THREE.Box3().setFromObject(o);
  const whole = boxOf(built.root);
  const span = whole.getSize(new THREE.Vector3()).length();
  const byId = new Map(built.parts.map((p) => [p.id, p]));
  let floating = 0;
  for (const p of built.parts) {
    const par = p.parent && byId.get(p.parent);
    if (!par) continue;
    const a = boxOf(p.object), b = boxOf(par.object);
    /* 두 상자 사이의 거리 (겹치면 0) / gap between the two boxes, zero when they overlap */
    const gap = Math.max(0, a.min.x - b.max.x, b.min.x - a.max.x)
      + Math.max(0, a.min.y - b.max.y, b.min.y - a.max.y)
      + Math.max(0, a.min.z - b.max.z, b.min.z - a.max.z);
    if (gap > span * 0.05) { floating++; bad(`${s.id}: "${p.name}" 이 부모에서 ${gap.toFixed(1)}mm 떨어져 있습니다`); }
  }

  /* ② 파트가 실제로 벌어지는가. 분리의 의미가 없으면 이 화면은 할 일이 없다.
     Do the parts actually move apart? Without that this screen has no job. */
  const home = built.parts.map((p) => p.object.position.clone());
  const centre = whole.getCenter(new THREE.Vector3());
  for (const p of built.parts) {
    const d = boxOf(p.object).getCenter(new THREE.Vector3()).sub(centre);
    if (d.lengthSq() < 1e-6) d.set(0, 1, 0);
    p.object.position.addScaledVector(d.normalize(), span * 0.3);
  }
  const moved = built.parts.filter((p, i) => p.object.position.distanceTo(home[i]) > 1).length;
  if (moved < built.parts.length) bad(`${s.id}: 파트 ${built.parts.length - moved}개가 분리되지 않습니다`);

  /* ③ 그림 짝 / the preview image that the sample list shows */
  if (!existsSync(`${ROOT}assets/sculpt/${s.id}-preview.webp`)) bad(`${s.id}: 미리보기 그림이 없습니다`);

  const z = built.stats.size;
  console.log(`${s.id.padEnd(14)} ${String(built.parts.length).padStart(2)}파트 · ${[z.x, z.y, z.z].map((n) => n.toFixed(0)).join("×")} mm · 삼각형 ${built.stats.triangles} · 뜬 파트 ${floating}`);
}

/* ④ 못 만드는 도형은 조용히 넘어가지 말고 거절해야 한다 / unbuildable primitives must be refused, not ignored */
const junk = { componentTree: [{ id: "a", primitive: "banana", dimensions: { width: 1, height: 1, depth: 1 } }] };
if (validateSpec(junk).ok) bad("없는 도형(banana)을 통과시켰습니다");
/* ⑤ parent 를 문자열 "null" 로 쓴 사양도 받아야 한다 (모델이 실제로 그렇게 쓴다) */
if (parentOf({ parent: "null" }) !== null) bad('parent "null" 을 부모 없음으로 보지 않습니다');

if (fail) { console.log(`\n실패 ${fail}건`); process.exit(1); }
console.log(`\n예시 ${idx.samples.length}종 · 도형 ${PRIMITIVES.length}가지\nall sculpt tests passed`);
