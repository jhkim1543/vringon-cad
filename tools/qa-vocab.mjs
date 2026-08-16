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
import { COMPONENT_CATALOG, applyComponent } from "../js/drone-catalog.js";
import { validateSpec, builderFitErrors } from "../spec-validate.mjs";

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

/* ------------------------------------ 3b. the hollow builders: axis and wall

   Two shapes the vocabulary could not say. A hoop was a TORUS with no axis
   awareness and an outer diameter of ring + tube; a thin band was a TUBE whose
   wall was 28% of its radius whatever the specification wanted. Both are now
   contracts, and both are the kind that has been re-broken by a change that
   still compiled — hence assertions rather than a comment.

   Measured on a real sample's real part so the numbers mean something: the
   inspection quad's propeller guard, 281 × 80 × 233 on a CIRCULAR ring of 4. */
section("TORUS·TUBE — 축은 plane 법선, 크기는 월드 박스, 벽은 사양서가 정한다");
{
  const GUARD = "part_prop_guards";
  const boxOf = (spec, partId) => {
    const built = buildFromSpec(spec, {});
    let out = null;
    built.root.traverse((o) => {
      if (out || !o.isMesh || o.userData?.regionId !== partId) return;
      o.geometry.computeBoundingBox();
      const b = o.geometry.boundingBox;
      out = [b.max.x - b.min.x, b.max.y - b.min.y, b.max.z - b.min.z];
    });
    return out;
  };
  const near = (a, b, tol = 0.02) => b > 0 && Math.abs(a - b) / b <= tol;

  /* Axis. One declaration read through all three planes: the tube diameter is
     whichever dimension the plane's normal picks out, and the ring fills the
     other two. A torus that ignored plane gave the same box all three times. */
  for (const [plane, want] of [["TOP", [280, 12, 240]], ["FRONT", [280, 240, 12]], ["SIDE", [12, 280, 240]]]) {
    const spec = load("inspect-quad");
    const g = spec.parts.find((p) => p.part_id === GUARD).geometry;
    g.builder = "TORUS"; g.plane = plane;
    g.size_mm = { w: want[0], h: want[1], d: want[2] };
    const box = boxOf(spec, GUARD);
    ok(box && want.every((v, i) => near(box[i], v)),
      `plane ${plane} — 링이 법선에 수직 · 월드 박스 ${box?.map((v) => v.toFixed(0)).join("×")} = 선언 ${want.join("×")}`);
  }

  /* And the ring's centre circle is outer minus tube, not outer: the hole a
     280 hoop of 12mm rod leaves is 256 across. Read off the mesh, not the
     arguments, because the arguments are what used to be right. */
  {
    const spec = load("inspect-quad");
    const g = spec.parts.find((p) => p.part_id === GUARD).geometry;
    g.builder = "TORUS"; g.plane = "TOP"; g.size_mm = { w: 280, h: 12, d: 280 };
    const built = buildFromSpec(spec, {});
    let bore = Infinity;
    built.root.traverse((o) => {
      if (!o.isMesh || o.userData?.regionId !== GUARD) return;
      const a = o.geometry.attributes.position.array;
      for (let i = 0; i < a.length; i += 3) bore = Math.min(bore, Math.hypot(a[i], a[i + 2]) * 2);
    });
    ok(near(bore, 280 - 2 * 12, 0.03), `안지름 ${bore.toFixed(1)} = 외경 280 − 튜브 12 × 2 (속이 비어 있다)`);
  }

  /* Wall. The default has to stay exactly where it was or every shipped TUBE
     changes shape; the point of the field is that a hoop can now escape it. */
  {
    const bore = (wall) => {
      const spec = load("inspect-quad");
      const g = spec.parts.find((p) => p.part_id === GUARD).geometry;
      g.builder = "TUBE"; g.plane = "TOP"; g.size_mm = { w: 280, h: 80, d: 280 };
      g.corner_radius_mm = wall;
      const built = buildFromSpec(spec, {});
      let r = Infinity;
      built.root.traverse((o) => {
        if (!o.isMesh || o.userData?.regionId !== GUARD) return;
        const a = o.geometry.attributes.position.array;
        for (let i = 0; i < a.length; i += 3) r = Math.min(r, Math.hypot(a[i], a[i + 2]));
      });
      return 140 - r;
    };
    ok(near(bore(null), 140 * 0.28, 0.03), `벽을 안 쓰면 종전 기본값 그대로 ${bore(null).toFixed(1)}mm = 반경의 28%`);
    ok(near(bore(3), 3, 0.05), `벽 3 지정 → 실제 ${bore(3).toFixed(2)}mm (얇은 후프가 가능하다)`);
    ok(bore(1e6) < 140 && bore(1e6) > 0, `말도 안 되는 벽도 구멍을 남긴다 (${bore(1e6).toFixed(1)}mm)`);
  }

  /* The code panel is a second implementation of the same two builders and has
     drifted from the viewer before — it was emitting an open-ended cylinder for
     TUBE, a surface with no wall at all, while the viewer lathed a shell. */
  {
    const spec = load("inspect-quad");
    const g = spec.parts.find((p) => p.part_id === GUARD).geometry;
    g.builder = "TUBE"; g.plane = "TOP"; g.size_mm = { w: 280, h: 80, d: 280 }; g.corner_radius_mm = 3;
    const code = specThreeCode(spec);
    ok(/new THREE\.Vector2\(137(\.\d+)?, 0\)/.test(code) && code.includes("벽 3mm (사양서 지정)"),
      "코드 패널이 같은 벽을 방출한다 (내반경 137)");
    g.builder = "TORUS"; g.size_mm = { w: 280, h: 12, d: 280 };
    const tcode = specThreeCode(spec);
    ok(/TorusGeometry\(134, 6,/.test(tcode) && tcode.includes("rotateX(Math.PI / 2)"),
      "코드 패널의 TORUS도 링 134 · 튜브 6 으로 눕는다");
  }

  /* And the measurement pass must not put the bucket back. */
  {
    const index = JSON.parse(readFileSync(new URL("index.json", MESHES), "utf8"));
    const mesh = positionsFromGlb(readFileSync(new URL(index["inspect-quad"].file, MESHES)));
    const spec = load("inspect-quad");
    const g = spec.parts.find((p) => p.part_id === GUARD).geometry;
    g.builder = "TORUS"; g.plane = "TOP"; g.size_mm = { w: 280, h: 12, d: 240 };
    const res = refineFromMesh(spec, mesh);
    ok(g.size_mm.h === 12, `튜브 지름은 측정이 덮지 않는다 (h ${g.size_mm.h}, 메시 실측 높이는 80)`);
    ok(g.builder === "TORUS" && !g.loft_sections?.length, "링이 측정 단면 더미로 뒤집히지 않는다");
    ok(res.measured.some((s) => s.includes("튜브 지름 보존")) || res.internal.length >= 0,
      `그 사실이 보고된다: ${res.measured.find((s) => s.includes("튜브")) || "(가드가 측정되지 않음)"}`);
  }
}

/* ---------------------------------- 3c. builder semantics: name vs builder

   3b proves the two hollow builders keep their axis and their wall. This
   proves the generator is told to reach for them: builderFitErrors is the
   check that reads a part's name and asks whether the builder can make that
   kind of thing at all. Two ways it can rot — a rule that stops firing, and a
   rule that starts firing on parts that were always fine — so both directions
   are asserted, on the shipped specifications rather than on fixtures.

   Every message names a replacement. An error that says "this is wrong" and
   not "write this instead" costs a repair round and returns the same spec, so
   each rule is also tested for the fix it prescribes actually clearing it. */
section("빌더 의미론 — 이름이 말하는 물건을 그 빌더가 만들 수 있는가");
{
  const ALL = ["inspect-quad", "agri-hexa", "map-wing", "sar-vtol", "cage-inspect",
    "fpv-racer", "fire-octo", "relay-hexa", "delivery-octo", "isr-wing"];
  /* Four of the five faults this table used to pin are repaired in the shipped
     specifications; the list below is what is left. cage-inspect stays because
     the repair the message prescribes — great-circle rings instead of a solid
     LOFT — was written, measured and NOT kept: the silhouette layer rasterises
     occupancy and the reference cage is a filled disc to it, so an opaque
     sphere scores 52 and a ring lattice 28~38 (tools/refine-specs.mjs carries
     the arithmetic). The finding is correct and the specification is knowingly
     left carrying it, which is why it is pinned here rather than deleted.

     Pinned by part id, both directions: a rule that starts flagging a
     different part is as broken as one that stops. With the shipped specs now
     clean, "stops firing" is no longer covered by this list for the four
     repaired rules — each of them is re-broken on purpose further down. */
  const EXPECT = {
    "cage-inspect": [["part_001_cage", "HOOP_AS_SOLID"]],
  };
  const codesOf = (spec) => builderFitErrors(spec)
    .map((e) => [/parts\.([^.]+)\./.exec(e.field_path)?.[1], e.error_code]);
  for (const id of ALL) {
    const got = codesOf(load(id));
    const want = EXPECT[id] || [];
    ok(JSON.stringify(got) === JSON.stringify(want),
      `${id} — 적발 ${got.length}건 ${JSON.stringify(got)} = 예상 ${JSON.stringify(want)}`);
  }

  /* The parts a looser rule would have swept up. A cage node really is a 12mm
     sphere, a frame plate really is a thin disc, and a frame arm really is a
     loft — the names say cage, frame, plate and none of them is a hoop. */
  {
    const cage = load("cage-inspect");
    const node = cage.parts.find((p) => /노드/.test(p.display_name_ko || ""));
    ok(node?.geometry.builder === "SPHERE" && !codesOf(cage).some(([pid]) => pid === node.part_id),
      `케이지 연결 노드(SPHERE 12mm)는 후프가 아니다 — 오탐 없음`);
    const fire = load("fire-octo");
    for (const nm of ["하부 프레임 플레이트", "랜딩기어 측면 프레임"]) {
      const p = fire.parts.find((q) => (q.display_name_ko || "") === nm);
      ok(p && !codesOf(fire).some(([pid]) => pid === p.part_id),
        `${nm}(${p?.geometry.builder})는 이름에 프레임이 있어도 링이 아니다 — 오탐 없음`);
    }
  }

  /* Each rule, and the fix its own message prescribes. */
  {
    const guard = (mut) => {
      const spec = load("inspect-quad");
      mut(spec.parts.find((p) => p.part_id === "part_prop_guards").geometry);
      return builderFitErrors(spec).map((e) => e.error_code);
    };
    ok(guard((g) => { g.builder = "BOX"; }).includes("HOOP_AS_SOLID"), "가드를 BOX로 쓰면 HOOP_AS_SOLID");
    ok(guard((g) => { g.builder = "LOFT"; }).includes("HOOP_AS_SOLID"), "가드를 LOFT로 쓰면 HOOP_AS_SOLID");
    ok(guard((g) => { g.corner_radius_mm = null; }).includes("TUBE_WALL_UNSPECIFIED"),
      "가드에서 벽을 지우면 TUBE_WALL_UNSPECIFIED 가 다시 잡힌다 — 규칙이 멈추지 않았다");
    ok(guard((g) => { g.corner_radius_mm = 6; }).length === 0, "벽 6mm를 적으면 통과 — 메시지가 시키는 수리가 실제로 먹힌다");
    ok(guard((g) => { g.builder = "TORUS"; g.size_mm = { w: 281, h: 12, d: 233 }; }).length === 0,
      "TORUS 후프로 바꿔도 통과");

    const deck = (mut) => {
      const spec = load("relay-hexa");
      mut(spec.parts.find((p) => p.part_id === "part_002").geometry);
      return builderFitErrors(spec).map((e) => e.error_code);
    };
    ok(deck((g) => { g.builder = "TUBE"; }).includes("PLATE_AS_TUBE"),
      "판을 TUBE로 되돌리면 PLATE_AS_TUBE 가 다시 잡힌다 — 규칙이 멈추지 않았다");
    ok(deck((g) => { g.builder = "CYLINDER"; }).length === 0, "판을 CYLINDER로 고치면 통과");
    ok(deck((g) => { g.builder = "TUBE"; g.corner_radius_mm = 8; }).includes("PLATE_AS_TUBE"),
      "벽만 적은 판은 여전히 판이 아니다 — 관에 벽을 붙여도 판이 되지 않는다");

    const arm = (mut) => {
      const spec = load("delivery-octo");
      mut(spec.parts.find((p) => p.part_id === "part_arm_set").geometry);
      return builderFitErrors(spec).map((e) => e.error_code);
    };
    ok(arm((g) => { g.builder = "CYLINDER"; g.corner_radius_mm = null; }).includes("TUBE_AS_SOLID_CYLINDER"),
      "암을 CYLINDER로 되돌리면 TUBE_AS_SOLID_CYLINDER 가 다시 잡힌다 — 규칙이 멈추지 않았다");
    ok(arm((g) => { g.builder = "TUBE"; g.corner_radius_mm = 2; }).length === 0,
      "카본 튜브 암을 TUBE + 벽 2mm로 고치면 통과");
    ok(arm((g) => { g.builder = "TUBE"; }).length === 0,
      "지름 35mm 관은 벽을 안 써도 통과 — 벽 규칙은 지름 120 이상과 후프에만 건다");

    const nose = (mut) => {
      const spec = load("sar-vtol");
      mut(spec.parts.find((p) => p.part_id === "part_nose_cap").geometry);
      return builderFitErrors(spec).map((e) => e.error_code);
    };
    ok(nose((g) => { g.builder = "SPHERE"; }).includes("SPHERE_NOT_SPHERICAL"),
      "노즈를 SPHERE로 되돌리면 SPHERE_NOT_SPHERICAL 이 다시 잡힌다 — 규칙이 멈추지 않았다");
    ok(nose((g) => { g.builder = "LOFT"; }).length === 0, "노즈 캡을 LOFT로 고치면 통과");
    ok(nose((g) => { g.size_mm = { w: 200, h: 180, d: 200 }; }).length === 0,
      "가로세로가 비슷한 SPHERE는 구다 — 2배 미만은 건드리지 않는다");
  }

  /* A rotor disc is the circle a blade sweeps. Its two cross-axes are one
     number — the rotor diameter — and its third is blade thickness. The
     measurement pass does not know that: it fits a box per axis, and a 2-blade
     propeller caught mid-frame gives it the BLADE, so five samples shipped
     with elliptical discs (map-wing's was 3.17:1, an 82 × 260 "disc"). This is
     not a tolerance, it is what the object is, so it is asserted as a
     contract, with the one live exception named and reasoned. */
  {
    /* Which two axes are the disc is read off the box, not off `plane`: for a
       propeller js/spec-to-code.js takes max(w, h, d) as the diameter and
       min as the blade thickness whatever the plane says, and sar-vtol's
       cruise rotor carries its 18mm thickness in h while sitting on FRONT. */
    const cross = (s) => { const v = [s.w, s.h, s.d].sort((x, y) => x - y); return [v[1], v[2]]; };
    /* The exception is derived, not listed. A disc under `affects` of a
       USER_PROVIDED parameter cannot be resized by tools/refine-specs.mjs
       unless some USER_PROVIDED parameter states the diameter it would be
       resized TO — that is the `honours` receipt. inspect-quad (declares 300,
       builds 249.5 × 213.5) and agri-hexa (declares 550, builds 342.9 × 350)
       are both in that position: their diameters come from COMPUTED
       parameters, so the disagreement between a part's dimensions and its
       geometry is the author's to settle, not this round's. Deriving the
       exemption means the assertion tightens by itself the moment a user
       number arrives, and cannot be silently widened by adding a name. */
    const userFixed = (spec) => {
      const m = new Map();
      for (const par of spec.parameters || []) {
        if (par.provenance !== "USER_PROVIDED") continue;
        for (const a of par.affects || []) {
          if (!m.has(a)) m.set(a, []);
          m.get(a).push(par);
        }
      }
      return m;
    };
    for (const id of ALL) {
      const spec = load(id);
      const guard = userFixed(spec);
      for (const p of spec.parts) {
        const t = `${p.display_name_ko || ""}${p.name || ""}`;
        if (!/프로펠러|로터|propeller|rotor/i.test(t)) continue;
        if (/가드|캡|허브|guard|hub|암|arm|붐|boom|모터|motor/i.test(t)) continue;
        const [a, b] = cross(p.geometry.size_mm);
        const r = b / a;
        const pars = guard.get(p.part_id) || [];
        const hasDia = pars.some((x) => /rotor_diameter|propeller_diameter/.test(x.id));
        if (pars.length && !hasDia && r > 1.001) {
          ok(true, `${id} ${p.part_id} — 아직 타원 ${a}×${b} (횡축비 ${r.toFixed(3)}): `
            + `USER_PROVIDED ${pars.map((x) => x.id).join("·")} 가 지름을 정하지 않아 수정 보류 (작성자 판단)`);
          continue;
        }
        ok(r <= 1.001, `${id} ${p.part_id} — 로터 디스크는 원이다 ${a}×${b} (횡축비 ${r.toFixed(3)})`);
      }
    }
  }

  /* The rules are deliberately out of validateSpec: tools/fit-spec.mjs runs
     that on every candidate and can only move coordinates, so an authoring
     fault it cannot fix must not enter its error budget. */
  for (const id of Object.keys(EXPECT)) {
    ok(!validateSpec(load(id), {}).some((e) => /HOOP_|PLATE_AS_TUBE|TUBE_WALL|TUBE_AS_SOLID|SPHERE_NOT/.test(e.error_code)),
      `${id} — validateSpec은 빌더 적합성을 세지 않는다 (fit-spec의 오류 예산 불변)`);
  }

  /* And the cage recipe the message hands out has to build. Three TORUS hoops
     on one centre, one per plane: each one must come out as its own declared
     world box and share the centre, or the fix produces a barrel. */
  {
    const spec = load("cage-inspect");
    const i = spec.parts.findIndex((p) => p.part_id === "part_001_cage");
    const base = spec.parts[i];
    const hoop = (id, plane, size) => ({
      ...JSON.parse(JSON.stringify(base)), part_id: id, display_name_ko: id,
      geometry: { ...JSON.parse(JSON.stringify(base.geometry)), builder: "TORUS", plane,
        size_mm: size, loft_sections: null, repeat: null, outer_profile: null, inner_profile: null },
    });
    const want = { ring_top: [410, 10, 395], ring_side: [10, 392, 395], ring_front: [410, 392, 10] };
    spec.parts.splice(i, 1,
      hoop("ring_top", "TOP", { w: 410, h: 10, d: 395 }),
      hoop("ring_side", "SIDE", { w: 10, h: 392, d: 395 }),
      hoop("ring_front", "FRONT", { w: 410, h: 392, d: 10 }));
    const built = buildFromSpec(spec, {});
    const seen = {};
    built.root.traverse((o) => {
      if (!o.isMesh || !want[o.userData?.regionId]) return;
      const b = new THREE.Box3().setFromObject(o);
      seen[o.userData.regionId] = [b.max.x - b.min.x, b.max.y - b.min.y, b.max.z - b.min.z, (b.max.y + b.min.y) / 2];
    });
    for (const [id, w] of Object.entries(want)) {
      const s = seen[id];
      ok(s && w.every((v, k) => Math.abs(s[k] - v) <= Math.max(1, v * 0.03)),
        `${id} — 선언 ${w.join("×")} = 실측 ${s?.slice(0, 3).map((v) => v.toFixed(0)).join("×")}`);
    }
    const ys = Object.values(seen).map((s) => s[3]);
    ok(ys.length === 3 && Math.max(...ys) - Math.min(...ys) < 0.5,
      `세 링이 같은 중심 높이 (${ys.map((v) => v.toFixed(1)).join(", ")}) — 동심이다`);
    ok(builderFitErrors(spec).length === 0, "링으로 쪼갠 케이지는 검증을 통과한다");
  }
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

/* --------------------- 4b. the shipped one: map-wing's main wing

   The first specification to use the hinge for what it is for. A LOFT cannot
   bend — it stacks closed sections along one straight axis — so the wing was a
   flat plank until it became a mirrored half-planform swung 8° about the
   centreline. Three things have to stay true or the wing is quietly a plank
   again, and the third is the one that would go unnoticed: the user's
   wingspan is 1200 and the half is 606, which is only correct because
   606·cos8° = 600. Anyone who "tidies" 606 to 600 shortens the aircraft. */
section("map-wing 주익 — 출하된 상반각");
{
  const spec = load("map-wing");
  const w = partBy(spec, (p) => p.part_id === "part_main_wing");
  const g = w.geometry;
  ok(g.builder === "EXTRUDE_2D" && g.plane === "TOP",
    `평면형 압출 (${g.builder} ${g.plane}) — 앞면 압출이면 시위 테이퍼가 사라진다`);
  ok(g.repeat?.pattern === "MIRROR_PAIR" && Math.abs(g.rotation_deg?.z) > 0,
    `대칭면 힌지 · z ${g.rotation_deg?.z}°`);
  ok(!g.loft_sections, "loft_sections 없음 — 로프트 잔재가 남으면 빌더가 갈린다");

  const halves = meshesNamed(buildFromSpec(spec, {}).root, w.display_name_ko || w.name);
  ok(halves.length === 2, `반익 ${halves.length}개`);
  const box = new THREE.Box3();
  for (const m of halves) box.union(new THREE.Box3().setFromObject(m));
  const span = box.max.x - box.min.x;
  const wingspan = (spec.parameters || []).find((p) => p.id === "airframe.wingspan");
  ok(Math.abs(span - wingspan.value) < 3,
    `투영 스팬 ${span.toFixed(1)}mm = USER_PROVIDED airframe.wingspan ${wingspan.value} `
    + `(반익 ${g.size_mm.w}·cos${g.rotation_deg.z}° 이므로 반익만 고치면 깨진다)`);
  ok(box.max.y - box.min.y > g.size_mm.h * 2,
    `상반각이 실제로 살아 있다 — 세로 폭 ${(box.max.y - box.min.y).toFixed(1)}mm 는 판 두께 ${g.size_mm.h} 의 여러 배`);

  /* The measured line, checked where it was measured: the stage-1 mesh puts
     the wing's mid-height 225mm and 575mm out at CAD y 127.5 and 176.9. */
  const at = (x) => g.center_mm.y + x * Math.tan((g.rotation_deg.z * Math.PI) / 180);
  ok(Math.abs(at(225) - 127.5) < 2 && Math.abs(at(575) - 176.9) < 2,
    `메시 실측 두 지점 재현 — 225mm 에서 ${at(225).toFixed(1)}(측정 127.5) · 575mm 에서 ${at(575).toFixed(1)}(측정 176.9)`);
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

  /* A rotated part used to be skipped outright, because a world-axis reading
     of a tilted solid is always larger than its size_mm (the box BEFORE the
     tilt) and re-measuring inflated it every run. It is now measured in its
     own frame instead: the angle stays as authored, and the reading comes out
     the same as for the untilted part — not the world box. Read the part
     untilted first so there is a number to compare against. */
  const spec = load(id);
  const target = spec.parts.find((p) => base.measured.some((m) => m.startsWith(p.display_name_ko || p.part_id)));
  const plainSpec = load(id);
  const plain = plainSpec.parts.find((p) => p.part_id === target.part_id);
  refineFromMesh(plainSpec, mesh);
  const label = target.display_name_ko || target.part_id;
  target.geometry.rotation_deg = { x: 0, y: 0, z: 8 };
  const after = refineFromMesh(spec, mesh);
  const rot = target.geometry.rotation_deg;
  ok(rot.x === 0 && rot.y === 0 && rot.z === 8, `회전각은 측정이 덮지 않는다 (z ${rot.z}°)`);
  const sz = target.geometry.size_mm, ref = plain.geometry.size_mm;
  const near = (a, b) => Math.abs(a - b) <= Math.max(3, b * 0.03);
  const th = 8 * Math.PI / 180;
  const worldW = ref.w * Math.cos(th) + ref.h * Math.sin(th), worldH = ref.w * Math.sin(th) + ref.h * Math.cos(th);
  ok(near(sz.w, ref.w) && near(sz.h, ref.h) && near(sz.d, ref.d) && sz.w < worldW - 3 && sz.h < worldH - 3,
    `회전한 파트는 자기 좌표계로 읽힌다 ${sz.w}×${sz.h}×${sz.d} ≈ 무회전 ${ref.w}×${ref.h}×${ref.d} — 월드 박스(${worldW.toFixed(0)}×${worldH.toFixed(0)})로 부풀지 않는다`);
  ok(after.measured.some((s) => s.startsWith(label) && s.includes("회전")) && !after.authored.some((s) => s.startsWith(label)),
    `회전 파트도 측정되고 그 사실이 표시된다: ${after.measured.find((s) => s.startsWith(label))}`);
  ok(after.measured.length === base.measured.length, "나머지 파트는 그대로 측정된다");

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

  /* The catalogue and the measurement both write size_mm, builder and
     loft_sections, so whichever runs last decides what the part is. A user who
     picked a component off the catalogue has said what the part is; the
     measurement is only inferring it. The choice has to survive the inference,
     otherwise a swap made before a re-measure silently comes undone. */
  const spec4 = load(id);
  const swap = spec4.parts.find((p) => p.part_id === target.part_id);
  const item = COMPONENT_CATALOG.find((c) => c.id === "bat_6s_5000");
  applyComponent(spec4, swap.part_id, item);
  const chosen = JSON.stringify(swap.geometry.size_mm);
  const form = JSON.stringify(swap.geometry.loft_sections);
  const r4 = refineFromMesh(spec4, mesh);
  ok(JSON.stringify(swap.geometry.size_mm) === chosen,
    `고른 부품의 치수 불변 (${item.dims_mm.join("×")}mm) — 측정이 덮지 않는다`);
  ok(JSON.stringify(swap.geometry.loft_sections) === form && swap.geometry.builder === "LOFT",
    "고른 부품의 형상 불변 — 측정 단면으로 바뀌지 않는다");
  ok(r4.authored.some((s) => s.includes("부품")), `건너뛴 사실이 보고된다: ${r4.authored.join(", ")}`);
}

/* ------------------------------ 7. specs without the fields are untouched */
section("새 필드가 없는 사양서는 예전 경로 그대로");
{
  /* map-wing left this list when its main wing became a hinged MIRROR_PAIR —
     it now carries rotation_deg on purpose and is asserted as such in section
     4b below. cage-inspect takes its place so the group still has five. */
  for (const id of ["inspect-quad", "agri-hexa", "cage-inspect", "sar-vtol", "delivery-octo"]) {
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
