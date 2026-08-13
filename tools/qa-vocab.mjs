/* Contract tests for the two geometry fields that carry an orientation.

   qa-samples.mjs proves a specification compiles, flies and prints. It cannot
   see whether a part is pointing the right way, and orientation is where this
   repository keeps regressing: the axis conventions have been re-broken four
   times, always by a change that still compiled. rotation_deg and airfoil each
   add an axis convention, so each gets an assertion that fails loudly when the
   convention moves.

   The three contracts under test:
     1. rotation_deg is applied in the PART's frame, before the placement yaw.
        Composed the other way, tilted parts on a ring all lean the same
        compass direction instead of all leaning outward.
     2. A MIRROR_PAIR hinges on the mirror plane, not on each copy's own
        centre, and the two copies are true mirror images.
     3. airfoil belongs to a plane-TOP EXTRUDE_2D and nowhere else, and the
        section it generates is the NACA section it claims to be.

   node tools/qa-vocab.mjs
*/
import * as THREE from "three";
import { readFileSync } from "node:fs";
import { buildFromSpec, specToAnalysis, specThreeCode } from "../js/spec-cad.js";
import { airfoilPoints, airfoilDepth } from "../js/spec-to-code.js";
import { positionsFromGlb, refineFromMesh } from "../js/mesh-loft.js";

const SPECS = new URL("../docs/specs/", import.meta.url);
const MESHES = new URL("../docs/assets/meshes/", import.meta.url);
const load = (id) => JSON.parse(readFileSync(new URL(`${id}.json`, SPECS), "utf8"));
const partBy = (spec, fn) => spec.parts.find(fn);
const meshesNamed = (root, name) => {
  const out = [];
  root.traverse((o) => { if (o.isMesh && o.name === name) out.push(o); });
  return out;
};

let failed = 0;
const ok = (cond, msg) => { console.log(`  ${cond ? "ok  " : "FAIL"}  ${msg}`); if (!cond) failed++; };
const section = (s) => console.log(`\n[${s}]`);

/* ------------------------------------------------------------------ 1. NACA */
section("NACA 4자리 단면");
{
  const p = airfoilPoints(0.12, 0);
  const half = Math.max(...p.map((q) => q[1]));
  ok(Math.abs(half - 0.06) < 0.001, `0012 최대 반두께 ${half.toFixed(4)} ≈ 0.06`);
  ok(p.filter((q) => q[0] > 0.999).every((q) => Math.abs(q[1]) < 1e-9), "뒷전이 y=0으로 닫힌다");
  ok(new Set(p.map((q) => q.join(","))).size === p.length, `앞·뒷전 중복 없음 (${p.length}점)`);
  ok(Math.abs(airfoilDepth(0.12, 0) - 0.12) < 0.002, `대칭익 높이 = 두께 (${airfoilDepth(0.12, 0).toFixed(4)})`);
  const c = airfoilPoints(0.12, 0.04);
  ok(Math.max(...c.map((q) => q[1])) > -Math.min(...c.map((q) => q[1])), "캠버는 윗면을 더 부풀린다");
}

/* ------------------------------------------------- 2. the shipped wing */
section("isr-wing 주익 — 사양서가 실제로 싣고 있는 단면");
{
  const spec = load("isr-wing");
  const wing = partBy(spec, (p) => p.geometry?.airfoil?.thickness_pct > 0
    && p.geometry.builder === "EXTRUDE_2D" && p.geometry.plane === "TOP");
  ok(!!wing, `에어포일을 든 평면형 파트 존재 (${wing?.part_id} ${wing?.display_name_ko})`);
  if (wing) {
    const af = wing.geometry.airfoil;
    const built = buildFromSpec(spec, {});
    const mesh = meshesNamed(built.root, wing.display_name_ko || wing.name)[0];
    ok(!!mesh, "컴파일된 메시가 있다");

    const pos = mesh.geometry.attributes.position.array;
    const idx = mesh.geometry.index.array;

    /* A section that is not a closed solid does not print. Every edge must be
       shared by exactly two triangles. */
    const key = (i) => `${pos[i * 3].toFixed(3)},${pos[i * 3 + 1].toFixed(3)},${pos[i * 3 + 2].toFixed(3)}`;
    const edges = new Map();
    for (let t = 0; t < idx.length; t += 3) {
      for (const [a, b] of [[0, 1], [1, 2], [2, 0]]) {
        const k = [key(idx[t + a]), key(idx[t + b])].sort().join("|");
        edges.set(k, (edges.get(k) || 0) + 1);
      }
    }
    ok([...edges.values()].every((v) => v === 2),
      `수밀 — 삼각형 ${idx.length / 3}개, 열린 에지 ${[...edges.values()].filter((v) => v !== 2).length}개`);

    /* Vertices group by spanwise station because every ring shares one x. */
    const bands = new Map();
    for (let i = 0; i < pos.length; i += 3) {
      const k = pos[i].toFixed(2);
      if (!bands.has(k)) bands.set(k, []);
      bands.get(k).push([pos[i + 2], pos[i + 1]]);   // [z aft→forward, y up]
    }
    const stations = [...bands.entries()].map(([x, pts]) => ({ x: +x, pts }))
      .filter((s) => s.pts.length > 8).sort((a, b) => a.x - b.x);
    ok(stations.length >= 15, `스팬 방향 스테이션 ${stations.length}개`);

    /* The assertion that a plank cannot pass: the built ring is the generated
       section, at the chord the planform has there. */
    const root = stations.find((s) => Math.abs(s.x) < 60) || stations[Math.floor(stations.length / 2)];
    const zs = root.pts.map((q) => q[0]);
    const zLE = Math.max(...zs), chord = zLE - Math.min(...zs);
    let worst = 0;
    for (const [xc, y] of airfoilPoints(af.thickness_pct / 100, af.camber_pct / 100)) {
      const z = zLE - xc * chord, yy = y * chord;
      let near = Infinity;
      for (const q of root.pts) near = Math.min(near, Math.hypot(q[0] - z, q[1] - yy));
      worst = Math.max(worst, near);
    }
    ok(worst < chord * 0.002, `루트 단면이 NACA ${af.camber_pct}/${af.thickness_pct}%와 일치 — `
      + `최대 편차 ${worst.toFixed(3)}mm (코드 ${chord.toFixed(0)}mm)`);

    /* Twist grows from the centreline outward, measured on the chord line. */
    const chordAngle = (s) => {
      let lo = s.pts[0], hi = s.pts[0];
      for (const q of s.pts) { if (q[0] < lo[0]) lo = q; if (q[0] > hi[0]) hi = q; }
      return (Math.atan2(hi[1] - lo[1], hi[0] - lo[0]) * 180) / Math.PI;
    };
    const aRoot = chordAngle(root), aTip = chordAngle(stations[stations.length - 1]);
    ok(Math.abs(aRoot) < 0.5, `루트 비틀림 0 (${aRoot.toFixed(2)}°)`);
    ok(Math.abs(Math.abs(aTip - aRoot) - Math.abs(af.twist_deg)) < 0.6,
      `팁 비틀림 ${(aTip - aRoot).toFixed(2)}° ≈ 사양서의 ${af.twist_deg}°`);
  }
}

/* --------------------------------- 3. airfoil only on a plane-TOP extrusion */
section("에어포일은 plane TOP의 EXTRUDE_2D 전용");
{
  const spec = load("isr-wing");
  const solid = partBy(spec, (p) => p.geometry?.builder === "CYLINDER");
  solid.geometry.airfoil = { thickness_pct: 12, camber_pct: 2, twist_deg: 0 };
  const built = buildFromSpec(spec, {});
  ok(built.notes.some((n) => n.includes("airfoil은 plane TOP")), "잘못 붙은 단면은 기록으로 남는다");
  ok(!specToAnalysis(spec).regions.find((r) => r.regionId === solid.part_id).airfoil,
    "그리고 적용되지 않는다 — 엉뚱한 축으로 로프트되지 않는다");
}

/* ------------------------------------------- 4. MIRROR_PAIR hinges on x=0 */
section("MIRROR_PAIR 회전 = 상반각 (대칭면이 힌지)");
{
  const spec = load("inspect-quad");
  const leg = partBy(spec, (p) => p.geometry?.repeat?.pattern === "MIRROR_PAIR"
    && p.geometry.builder === "EXTRUDE_2D");
  const flat = meshesNamed(buildFromSpec(load("inspect-quad"), {}).root, leg.display_name_ko || leg.name);
  leg.geometry.rotation_deg = { x: 0, y: 0, z: 15 };
  const legs = meshesNamed(buildFromSpec(spec, {}).root, leg.display_name_ko || leg.name);
  ok(legs.length === 2, `${leg.display_name_ko} ${legs.length}개`);

  const worldPts = (m) => {
    m.updateWorldMatrix(true, false);
    const a = m.geometry.attributes.position.array, out = [];
    for (let i = 0; i < a.length; i += 3) {
      out.push(new THREE.Vector3(a[i], a[i + 1], a[i + 2]).applyMatrix4(m.matrixWorld));
    }
    return out;
  };
  const k = (v) => `${v.x.toFixed(2)},${v.y.toFixed(2)},${v.z.toFixed(2)}`;
  const rset = new Set(worldPts(legs[1]).map(k));
  const L = worldPts(legs[0]);
  const mirrored = L.filter((v) => rset.has(k(new THREE.Vector3(-v.x, v.y, v.z)))).length;
  ok(mirrored === L.length, `x=0 거울상 정점 ${mirrored}/${L.length} — 좌우가 반대로 기운다`);

  /* Hinging on the mirror plane pulls the root in; hinging on each copy's own
     centre would leave x untouched and lift only the tip. */
  ok(Math.abs(legs[0].position.x) < Math.abs(flat[0].position.x) - 0.5,
    `힌지가 대칭면 — x가 ${flat[0].position.x.toFixed(1)} → ${legs[0].position.x.toFixed(1)}mm로 당겨진다`);
  const b0 = new THREE.Box3().setFromObject(legs[0]), b1 = new THREE.Box3().setFromObject(legs[1]);
  ok(Math.abs(b0.min.y - b1.min.y) < 0.01, `두 다리 바닥 높이 같음 ${b0.min.y.toFixed(1)}mm`);
  const up = new THREE.Vector3(0, 1, 0).applyQuaternion(legs[0].quaternion);
  ok(Math.abs(up.z) < 1e-6 && Math.abs(up.x) > 0.2,
    `z 회전은 z축을 건드리지 않는다 (up ${up.x.toFixed(2)}, ${up.y.toFixed(2)}, ${up.z.toFixed(2)})`);
}

/* ------------------------- 5. CIRCULAR: part frame first, placement yaw after */
section("CIRCULAR 회전 = 틸트 (배치 요보다 먼저)");
{
  const spec = load("agri-hexa");
  const pod = partBy(spec, (p) => p.geometry?.repeat?.pattern === "CIRCULAR"
    && p.geometry.repeat.count >= 4 && /모터|motor/i.test(p.display_name_ko || p.name || ""));
  ok(!!pod, `대상 ${pod?.part_id} ${pod?.display_name_ko} ×${pod?.geometry.repeat.count}`);
  pod.geometry.rotation_deg = { x: 0, y: 0, z: 10 };
  const pods = meshesNamed(buildFromSpec(spec, {}).root, pod.display_name_ko || pod.name);
  ok(pods.length === pod.geometry.repeat.count, `인스턴스 ${pods.length}개`);

  /* Each copy's own up-axis must lean outward by the same amount. If the tilt
     were composed after the yaw every copy would lean the same way in world
     space and this spread would be large. */
  const outward = pods.map((m) => {
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(m.quaternion);
    return up.dot(new THREE.Vector3(m.position.x, 0, m.position.z).normalize());
  });
  const spread = Math.max(...outward) - Math.min(...outward);
  ok(spread < 0.02, `전부 같은 각도로 바깥을 향한다 (편차 ${spread.toFixed(4)})`);
  ok(Math.abs(outward[0]) > 0.1, `실제로 기울었다 (바깥 성분 ${outward[0].toFixed(3)})`);
  const ups = pods.map((m) => new THREE.Vector3(0, 1, 0).applyQuaternion(m.quaternion));
  ok(Math.max(...ups.map((v) => v.x)) - Math.min(...ups.map((v) => v.x)) > 0.2,
    "월드 기준으로는 서로 다른 방향 — 전부 한쪽으로 기울지 않았다");
}

/* --------------------- 6. the measurement pass must not overwrite either one */
section("좌표 측정은 이 두 필드를 덮어쓰지 않는다");
{
  const index = JSON.parse(readFileSync(new URL("index.json", MESHES), "utf8"));
  const id = "map-wing";
  const mesh = positionsFromGlb(readFileSync(new URL(index[id].file, MESHES)));
  const base = refineFromMesh(load(id), mesh);
  ok(base.authored.length === 0, `기존 사양서는 건너뛴 파트 0개 (측정 ${base.measured.length})`);

  const spec = load(id);
  const target = spec.parts.find((p) => base.measured.some((m) => m.startsWith(p.display_name_ko || p.part_id)));
  const before = JSON.stringify(target.geometry.size_mm), builder = target.geometry.builder;
  target.geometry.rotation_deg = { x: 0, y: 0, z: 8 };
  const after = refineFromMesh(spec, mesh);
  ok(JSON.stringify(target.geometry.size_mm) === before && target.geometry.builder === builder,
    `회전한 파트의 size_mm·builder 불변 (${builder} ${before}) — 월드 박스로 부풀지 않는다`);
  ok(after.authored.some((s) => s.includes("회전")), `건너뛴 사실이 보고된다: ${after.authored.join(", ")}`);
  ok(after.measured.length === base.measured.length - 1, "나머지 파트는 그대로 측정된다");

  const spec2 = load(id);
  const wing = spec2.parts.find((p) => p.geometry?.plane === "TOP" && p.geometry?.builder === "EXTRUDE_2D");
  wing.geometry.airfoil = { thickness_pct: 12, camber_pct: 2, twist_deg: 0 };
  const r2 = refineFromMesh(spec2, mesh);
  ok(wing.geometry.builder === "EXTRUDE_2D" && !wing.geometry.loft_sections?.length,
    "에어포일 파트는 LOFT로 뒤집히지 않는다 — 단면이 판자로 되돌아가지 않는다");
  ok(r2.authored.some((s) => s.includes("에어포일")), `건너뛴 사실이 보고된다: ${r2.authored.join(", ")}`);

  const spec3 = load(id);
  spec3.parts.find((p) => p.part_id === target.part_id).geometry.rotation_deg = { x: 0, y: 0, z: 0 };
  ok(refineFromMesh(spec3, mesh).authored.length === 0, "0도 회전은 측정을 막지 않는다");
}

/* ------------------------------ 7. specs without the fields are untouched */
section("새 필드가 없는 사양서는 예전 경로 그대로");
{
  for (const id of ["inspect-quad", "agri-hexa", "map-wing", "sar-vtol", "delivery-octo"]) {
    const a = [], b = [];
    buildFromSpec(load(id), {}).root.traverse((o) => o.isMesh && a.push(...o.geometry.attributes.position.array));
    buildFromSpec(load(id), {}).root.traverse((o) => o.isMesh && b.push(...o.geometry.attributes.position.array));
    const regions = specToAnalysis(load(id)).regions;
    ok(a.length === b.length && a.every((v, i) => v === b[i])
      && regions.every((r) => !r.rotation && !r.airfoil),
      `${id} 결정적 · rotation/airfoil 미설정 (${a.length / 3}정점)`);
  }
  ok(specThreeCode(load("inspect-quad")).includes("mesh.rotation.y = ry"),
    "회전 없는 사양서의 코드 패널은 예전 한 줄 배치를 유지한다");
  ok(!specThreeCode(load("inspect-quad")).includes("function wingGeometry("),
    "에어포일 없는 사양서는 날개 헬퍼를 방출하지 않는다");
}

/* ---------------------------------- 8. the code panel builds the same model */
section("코드 패널이 같은 모델을 만든다");
{
  const code = specThreeCode(load("isr-wing"));
  ok(code.includes("function wingGeometry("), "날개 헬퍼를 방출한다");
  const wing = partBy(load("isr-wing"), (p) => p.geometry?.airfoil?.thickness_pct > 0);
  const af = wing.geometry.airfoil;
  ok(new RegExp(`wingGeometry\\([^)]*Planform,\\s*${af.thickness_pct},\\s*${af.camber_pct},\\s*${af.twist_deg}\\)`).test(code),
    `두께 ${af.thickness_pct} · 캠버 ${af.camber_pct} · 비틀림 ${af.twist_deg}가 그대로 실린다`);
  const rot = partBy(load("isr-wing"), (p) => p.geometry?.rotation_deg
    && (p.geometry.rotation_deg.x || p.geometry.rotation_deg.y || p.geometry.rotation_deg.z));
  if (rot) {
    ok(code.includes("파트 자체 회전"), "회전 주석을 방출한다");
    ok(/mesh\.rotation\.set\(/.test(code), "회전 파트는 오일러 3축으로 방출된다");
  } else ok(true, "이 사양서에는 회전 파트가 없다 — 해당 없음");
}

console.log(failed ? `\n${failed}건 실패` : "\n전부 통과");
process.exit(failed ? 1 : 0);
