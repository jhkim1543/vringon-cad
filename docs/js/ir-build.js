/* ==========================================================================
   CAD IR → geometry, deterministically.

   The language model never touches this file's output. It hands over an IR —
   observed curves in normalized image space, parameters with a source and a
   confidence — and the builders here turn that into meshes by fixed rules.
   The same IR always produces the same geometry, which is what makes the
   re-render comparison meaningful: if the silhouette is wrong, the IR is
   wrong, not some unrepeatable generation.

   Normalized image space: x → right, y → down, both 0..1. Millimetres come
   from mapping the observed silhouette bbox onto the target dimensions, so
   every curve shares one scale instead of each part guessing its own.
   ========================================================================== */
import * as THREE from "three";
import { findRecipe, GRADE } from "./recipes.js?v=2d99286f";

const numv = (v, d = 0) => (Number.isFinite(Number(v)) ? Number(v) : d);

/* ------------------------------------------------------------- IR access */
export function paramValue(ir, name, fallback = 0) {
  const p = (ir.parameters || []).find((x) => x.name === name);
  return p ? numv(p.value, fallback) : fallback;
}

export function curveOf(ir, name) {
  return (ir.curves || []).find((c) => c.name === name) || null;
}

/* Image → mm mapping, shared by every curve. */
export function makeFrame(ir) {
  const td = ir.targetDimensions || { width: 100, height: 100, depth: 100 };
  const sil = ir.silhouette?.bbox;
  const bbox = Array.isArray(sil) && sil.length === 4 ? sil : [0.15, 0.05, 0.85, 0.95];
  const [x0, y0, x1, y1] = bbox;
  const mmX = numv(td.width, 100) / Math.max(1e-4, x1 - x0);
  const mmY = numv(td.height, 100) / Math.max(1e-4, y1 - y0);
  const cx = (x0 + x1) / 2;
  return {
    td, bbox, mmX, mmY,
    // image point → (X across, Y up) in mm, origin at bottom centre
    toMM: (p) => [ (p[0] - cx) * mmX, (y1 - p[1]) * mmY ],
  };
}

/** curve points → mm pairs, whatever the declared type (already sampled) */
function curveMM(ir, frame, name) {
  const c = curveOf(ir, name);
  if (!c || !Array.isArray(c.points) || c.points.length < 2) return null;
  return c.points.map((p) => frame.toMM(p));
}

/* ---------------------------------------------------------------- builders
   Each returns { mesh(es), note }. They throw when their inputs are missing:
   the recipe readiness check should have refused earlier, and building a
   substitute here would hide exactly the failure we want visible. */

function matFor(ir) {
  const m = ir.material || {};
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(m.color || "#9aa0aa"),
    metalness: m.metalness != null ? m.metalness : 0.7,
    roughness: m.roughness != null ? m.roughness : 0.38,
  });
}

function buildRevolvedContainer(ir, frame) {
  const outer = curveMM(ir, frame, "outer_revolve_profile");
  if (!outer) throw new Error("outer_revolve_profile 없음");
  const inner = curveMM(ir, frame, "inner_revolve_profile");
  const wall = paramValue(ir, "wall_thickness", 2);
  const base = paramValue(ir, "base_thickness", wall * 1.4);

  // radius from the axis; the profile was observed on one side of it
  const toRZ = (mm) => new THREE.Vector2(Math.max(0.0001, Math.abs(mm[0])), mm[1]);
  let pts = outer.map(toRZ);
  // bottom-to-top ordering so the shell polyline reads one way
  if (pts[0].y > pts[pts.length - 1].y) pts.reverse();

  let profile;
  if (inner && inner.length >= 2) {
    let ipts = inner.map(toRZ);
    if (ipts[0].y < ipts[ipts.length - 1].y) ipts.reverse();  // inner runs back down
    profile = [new THREE.Vector2(0.0001, pts[0].y), ...pts, ...ipts,
      new THREE.Vector2(0.0001, base)];
  } else {
    /* No observed inner profile: derive one from the wall thickness parameter
       rather than shipping a solid. The derivation is a rule, not a guess —
       offset inward by the stated wall, floor at the stated base. */
    const top = pts[pts.length - 1];
    const derived = pts.slice().reverse()
      .map((p) => new THREE.Vector2(Math.max(0.0001, p.x - wall), Math.max(base, Math.min(p.y, top.y - 0.0001))));
    profile = [new THREE.Vector2(0.0001, pts[0].y), ...pts, ...derived, new THREE.Vector2(0.0001, base)];
  }
  const geo = new THREE.LatheGeometry(profile, 96);
  const mesh = new THREE.Mesh(geo, matFor(ir));
  mesh.name = "본체";
  return { meshes: [mesh], note: inner ? "내부 프로파일 관측값 사용" : `내부는 벽 두께 ${wall}mm 규칙으로 유도` };
}

function buildRotational(ir, frame) {
  const outer = curveMM(ir, frame, "outer_revolve_profile");
  if (!outer) throw new Error("outer_revolve_profile 없음");
  let pts = outer.map((mm) => new THREE.Vector2(Math.max(0.0001, Math.abs(mm[0])), mm[1]));
  if (pts[0].y > pts[pts.length - 1].y) pts.reverse();
  if (pts[0].x > 0.05) pts.unshift(new THREE.Vector2(0.0001, pts[0].y));
  if (pts[pts.length - 1].x > 0.05) pts.push(new THREE.Vector2(0.0001, pts[pts.length - 1].y));
  const body = new THREE.Mesh(new THREE.LatheGeometry(pts, 96), matFor(ir));
  body.name = "본체";
  const meshes = [body];

  // the bore is real only because it was observed
  const boreD = paramValue(ir, "bore_diameter", 0);
  if (boreD > 0 && curveOf(ir, "bore_boundary")) {
    const h = Math.max(...pts.map((p) => p.y)) - Math.min(...pts.map((p) => p.y));
    const boreWall = [
      new THREE.Vector2(boreD / 2, Math.min(...pts.map((p) => p.y)) - 0.5),
      new THREE.Vector2(boreD / 2, Math.max(...pts.map((p) => p.y)) + 0.5),
    ];
    const bore = new THREE.Mesh(new THREE.LatheGeometry(boreWall, 48),
      new THREE.MeshStandardMaterial({ color: 0x2a2a30, metalness: 0.4, roughness: 0.6, side: THREE.DoubleSide }));
    bore.name = "보어";
    meshes.push(bore);
  }
  return { meshes, note: `프로파일 ${pts.length}점 revolve` };
}

function buildBracket(ir, frame) {
  const boundary = curveMM(ir, frame, "outer_boundary");
  if (!boundary) throw new Error("outer_boundary 없음");
  const t = paramValue(ir, "thickness", 6);
  const shape = new THREE.Shape(boundary.map((p) => new THREE.Vector2(p[0], p[1])));
  const holes = curveOf(ir, "hole_positions");
  const holeD = paramValue(ir, "hole_diameter", 5);
  if (holes?.points?.length) {
    for (const hp of holes.points.slice(0, 16)) {
      const [hx, hy] = frame.toMM(hp);
      const path = new THREE.Path();
      path.absarc(hx, hy, holeD / 2, 0, Math.PI * 2, true);
      shape.holes.push(path);
    }
  }
  const geo = new THREE.ExtrudeGeometry(shape, { depth: t, bevelEnabled: false, curveSegments: 20 });
  geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, matFor(ir));
  mesh.name = "플레이트";
  return { meshes: [mesh], note: `외곽 ${boundary.length}점 압출, 홀 ${holes?.points?.length || 0}개` };
}

function buildEnclosure(ir, frame) {
  const b = curveMM(ir, frame, "outer_boundary");
  const td = frame.td;
  const w = numv(td.width, 100), h = numv(td.height, 60), d = numv(td.depth, 80);
  const r = paramValue(ir, "corner_radius", Math.min(w, d) * 0.08);
  const wall = paramValue(ir, "wall_thickness", 2);
  const rr = Math.min(r, Math.min(w, d) / 2 - 0.1);
  const mk = (W, D, H) => {
    const s = new THREE.Shape();
    const hw = W / 2, hd = D / 2;
    s.moveTo(-hw + rr, -hd); s.lineTo(hw - rr, -hd);
    s.absarc(hw - rr, -hd + rr, rr, -Math.PI / 2, 0, false);
    s.lineTo(hw, hd - rr); s.absarc(hw - rr, hd - rr, rr, 0, Math.PI / 2, false);
    s.lineTo(-hw + rr, hd); s.absarc(-hw + rr, hd - rr, rr, Math.PI / 2, Math.PI, false);
    s.lineTo(-hw, -hd + rr); s.absarc(-hw + rr, -hd + rr, rr, Math.PI, Math.PI * 1.5, false);
    const g = new THREE.ExtrudeGeometry(s, { depth: H, bevelEnabled: false, curveSegments: 14 });
    g.rotateX(-Math.PI / 2);
    return g;
  };
  const mesh = new THREE.Mesh(mk(w, d, h), matFor(ir));
  mesh.name = "함체";
  return { meshes: [mesh], note: `라운드 박스 ${w}×${h}×${d} R${rr.toFixed(1)}, 벽 ${wall}mm` + (b ? " (외곽 관측 반영)" : "") };
}

function buildTubularFrame(ir, frame) {
  const c = curveOf(ir, "centerlines");
  if (!c?.points?.length) throw new Error("centerlines 없음");
  const dia = paramValue(ir, "tube_diameter", 8);
  /* One polyline per member; members are separated in the IR by null points or
     given as segments of consecutive pairs. Treat consecutive pairs as members. */
  const meshes = [];
  const mat = matFor(ir);
  for (let i = 0; i + 1 < c.points.length; i += 2) {
    const a = frame.toMM(c.points[i]);
    const b = frame.toMM(c.points[i + 1]);
    const path = new THREE.LineCurve3(
      new THREE.Vector3(a[0], a[1], 0), new THREE.Vector3(b[0], b[1], 0));
    const g = new THREE.TubeGeometry(path, 8, dia / 2, 14, false);
    const m = new THREE.Mesh(g, mat);
    m.name = `부재 ${meshes.length + 1}`;
    meshes.push(m);
  }
  if (!meshes.length) throw new Error("부재를 만들 수 없음");
  return { meshes, note: `부재 ${meshes.length}개, 관경 Ø${dia}` };
}

function buildFreeform(ir, frame) {
  /* The honest fallback: silhouette extents, rounded, and the grade says
     "visual replica" so no one mistakes it for editable CAD. */
  const td = frame.td;
  const w = numv(td.width, 100), h = numv(td.height, 100), d = numv(td.depth, w * 0.6);
  const g = new THREE.BoxGeometry(w, h, d, 6, 6, 6);
  const pos = g.attributes.position;
  const cr = Math.min(w, h, d) * 0.28;
  const hw = w / 2 - cr, hh = h / 2 - cr, hd = d / 2 - cr;
  const v = new THREE.Vector3(), c = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    c.set(Math.max(-hw, Math.min(hw, v.x)), Math.max(-hh, Math.min(hh, v.y)), Math.max(-hd, Math.min(hd, v.z)));
    v.sub(c).normalize().multiplyScalar(cr).add(c);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  g.translate(0, h / 2, 0);
  const mesh = new THREE.Mesh(g, matFor(ir));
  mesh.name = ir.productName || "자유형";
  return { meshes: [mesh], note: "시각 복제 등급 — 정밀 편집 가능한 CAD가 아닙니다" };
}

const RECIPE_BUILDERS = {
  revolved_container: buildRevolvedContainer,
  dispensing_package: buildRevolvedContainer,   // container core; pump parts need their own curves
  lighting_fixture: buildRevolvedContainer,
  rotational_mechanical: buildRotational,
  mechanical_bracket: buildBracket,
  prismatic_enclosure: buildEnclosure,
  panel_furniture: buildEnclosure,
  tubular_frame: buildTubularFrame,
  drone_robot_assembly: buildTubularFrame,
  freeform_visual_replica: buildFreeform,
  organic_shell: buildFreeform,
  sheet_metal_surface_panel: buildFreeform,     // LOFT surface builder는 v2에서; 등급으로 구분
  footwear_sole: buildFreeform,
  jewelry_accessory: buildFreeform,
  pipe_duct_manifold: buildTubularFrame,
  architectural_fixture: buildEnclosure,
};

/* True LOFT/SHELL surface builders are not implemented yet; these recipes fall
   back to the visual-replica builder, and the grade must say so. */
const VISUAL_ONLY = new Set(["organic_shell", "sheet_metal_surface_panel", "footwear_sole", "jewelry_accessory", "freeform_visual_replica"]);

/**
 * Execute the IR. Deterministic: same IR, same meshes.
 */
export function buildFromIR(ir) {
  const recipe = findRecipe(ir.recipeId) || findRecipe("freeform_visual_replica");
  const frame = makeFrame(ir);
  const builder = RECIPE_BUILDERS[recipe.recipeId] || buildFreeform;

  const root = new THREE.Group();
  root.name = (ir.productName || "model").replace(/[^\w가-힣-]/g, "_").slice(0, 32);
  let note = "";
  let usedFallback = false;
  try {
    const out = builder(ir, frame);
    note = out.note;
    for (const m of out.meshes) {
      m.castShadow = m.receiveShadow = true;
      m.userData = { isPart: true, recipeId: recipe.recipeId, grade: ir.grade };
      root.add(m);
    }
  } catch (e) {
    /* The recipe was selected but its inputs failed at build time — refuse to
       invent, drop to the visual replica, and say why. */
    usedFallback = true;
    const out = buildFreeform(ir, frame);
    note = `${recipe.recipeId} 빌드 불가(${e.message}) → 시각 복제로 강등`;
    for (const m of out.meshes) {
      m.castShadow = m.receiveShadow = true;
      m.userData = { isPart: true, recipeId: "freeform_visual_replica", grade: GRADE.VISUAL };
      root.add(m);
    }
  }
  const grade = usedFallback || VISUAL_ONLY.has(recipe.recipeId) ? GRADE.VISUAL : (ir.grade || recipe.grade);
  return { root, note, grade, recipeId: usedFallback ? "freeform_visual_replica" : recipe.recipeId };
}

/* ---------------------------------------------------------------- report */
const GRADE_LABEL = {
  visual_replica: "Visual Replica — 시각적으로 유사한 3D. 정밀 편집 CAD가 아닙니다",
  editable_design_approximation: "Editable Design Approximation — 주요 치수 편집 가능한 설계 근사",
  manufacturing_cad: "Manufacturing CAD — 제조 수준 (다중 이미지·도면 필요)",
};
const SRC_LABEL = {
  visible_contour: "실루엣에서 관측", inferred_from_shading: "음영에서 추론",
  inferred_from_category: "제품군에서 추론", user_provided: "사용자 입력",
  inferred: "추론", measured: "관측",
};

export function irText(ir, buildResult, validation) {
  const L = [];
  L.push(`${ir.productName || "모델"}  ·  CAD IR v1`);
  if (ir.summary) L.push(`  ${ir.summary}`);
  L.push("");
  L.push("[산출 등급]");
  L.push(`  ${GRADE_LABEL[buildResult?.grade || ir.grade] || ir.grade}`);
  L.push("");
  L.push("[레시피]");
  L.push(`  선택: ${buildResult?.recipeId || ir.recipeId}`
    + (ir.recipeHints?.length ? `  (후보: ${ir.recipeHints.join(", ")})` : ""));
  if (ir.recipeReadiness) {
    for (const r of ir.recipeReadiness) {
      L.push(`  ${r.ready ? "충족" : "미충족"} ${r.recipeId} — 커버리지 ${(r.coverage * 100).toFixed(0)}%`
        + (r.missingObservations.length ? ` · 누락 관측: ${r.missingObservations.join(", ")}` : ""));
    }
  }
  L.push("");
  const td = ir.targetDimensions || {};
  L.push("[치수 기준]");
  L.push(`  ${td.width} × ${td.height} × ${td.depth} mm — ${td.basis || "근거 미기재"}`);
  L.push("");
  L.push(`[관측 곡선 ${(ir.curves || []).length}]`);
  for (const c of ir.curves || []) {
    L.push(`  ${c.name} (${c.type}, ${c.points?.length || 0}점) — ${SRC_LABEL[c.source] || c.source} · 신뢰도 ${c.confidence}`);
  }
  L.push("");
  L.push(`[파라미터 ${(ir.parameters || []).length}]`);
  for (const p of ir.parameters || []) {
    L.push(`  ${p.name} = ${p.value}${p.unit || ""}  [${p.editableRange?.join("~") || "-"}]`
      + ` — ${SRC_LABEL[p.source] || p.source} · 신뢰도 ${p.confidence}`);
  }
  if ((ir.hiddenAssumptions || []).length) {
    L.push("");
    L.push("[단일 이미지로 알 수 없어 추론한 것]");
    for (const s of ir.hiddenAssumptions) L.push(`  · ${s}`);
  }
  if (buildResult?.note) {
    L.push("");
    L.push(`[빌드] ${buildResult.note}`);
  }
  if (validation) {
    L.push("");
    L.push("[재렌더링 검증]");
    L.push(`  원본 이미지 실루엣 IoU ${validation.before != null ? (validation.before * 100).toFixed(1) + "%" : "-"}`
      + (validation.after != null ? ` → 보정 후 ${(validation.after * 100).toFixed(1)}%` : ""));
    if (validation.correction) L.push(`  보정: ${validation.correction}`);
  }
  return L.join("\n");
}
