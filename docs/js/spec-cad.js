/* ==========================================================================
   Step 4 — the JSON specification compiled to Three.js.

   The specification from step 3 is the only input. Every number the model
   shows comes out of parts[].geometry, so editing the JSON changes the CAD and
   nothing is added behind the user's back. Where the spec says SOURCE_MESH the
   mesh from step 2 is kept as it is: a spec is not licence to replace a real
   surface with a primitive.
   ========================================================================== */
import * as THREE from "three";
import { tessellate, revolveVolume, buildFromAnalysis, generateThreeCode,
  airfoilDepth, maxChord } from "./spec-to-code.js?v=396db0bf";

const num = (v, d = 0) => (Number.isFinite(v) ? v : d);
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const rad = (deg) => (num(deg) * Math.PI) / 180;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/* Segments arrive with sweep "NONE" for lines; spec-to-code reads "CW". */
function normSegments(list) {
  if (!Array.isArray(list) || !list.length) return null;
  return list
    .filter((s) => Array.isArray(s.start) && Array.isArray(s.end))
    .filter((s) => dist(s.start, s.end) > 1e-4)          // zero-length padding
    .map((s) => ({
      type: s.type || "LINE",
      start: [num(s.start[0]), num(s.start[1])],
      end: [num(s.end[0]), num(s.end[1])],
      radius: s.radius > 0 ? s.radius : undefined,
      sweep: s.sweep === "CW" || s.sweep === "CCW" ? s.sweep : undefined,
      control1: Array.isArray(s.control1) ? s.control1 : undefined,
      control2: Array.isArray(s.control2) ? s.control2 : undefined,
    }));
}

/* A revolve's profile is written from the part's own base, but the builder
   centres the lathe on the origin and the part is then placed by center_mm.
   Shift the profile so the two agree instead of burying the part in the floor. */
function profileHeight(outer, inner) {
  /* The lathe recentres on the whole closed section, so measuring only the
     outside puts a part whose cavity floor dips lower off by that difference. */
  const pts = tessellate(outer, 0.4).concat(inner ? tessellate(inner, 0.4) : []);
  if (!pts.length) return { min: 0, max: 0 };
  const ys = pts.map((p) => p.y);
  return { min: Math.min(...ys), max: Math.max(...ys) };
}

/* The shell is one closed polyline: outside up, inside back down. That only
   works if the inner section runs the opposite way round, and which way it was
   written is not something to leave to chance. Whichever end actually meets the
   rim wins, so a cavity written bottom-up still produces a wall rather than a
   line folded back through the solid. */
function orientInner(outer, inner) {
  if (!outer?.length || !inner?.length) return inner;
  const rim = outer[outer.length - 1].end;
  const innerLast = inner[inner.length - 1].end;
  const innerFirst = inner[0].start;
  if (dist(rim, innerLast) <= dist(rim, innerFirst)) return inner;
  return inner.slice().reverse().map((s) => ({
    ...s,
    start: s.end, end: s.start,
    sweep: s.sweep === "CW" ? "CCW" : s.sweep === "CCW" ? "CW" : s.sweep,
    control1: s.control2, control2: s.control1,
  }));
}

const MAT_DEFAULT = {
  METAL: { color: "#b8bcc4", metalness: 0.92, roughness: 0.3 },
  PLASTIC: { color: "#d6d8dd", metalness: 0.04, roughness: 0.45 },
  GLASS: { color: "#cfe2ee", metalness: 0.0, roughness: 0.06 },
  RUBBER: { color: "#2c2e33", metalness: 0.0, roughness: 0.9 },
  WOOD: { color: "#a97c50", metalness: 0.0, roughness: 0.72 },
  TEXTILE: { color: "#8d8f98", metalness: 0.0, roughness: 0.95 },
  LEATHER: { color: "#5a4436", metalness: 0.0, roughness: 0.78 },
  COMPOSITE: { color: "#3a3d44", metalness: 0.2, roughness: 0.5 },
  CERAMIC: { color: "#eceff2", metalness: 0.0, roughness: 0.25 },
};

function materialOf(spec, id) {
  const m = (spec.materials || []).find((x) => x.material_id === id)
    || (spec.materials || [])[0] || {};
  const d = MAT_DEFAULT[m.material_class] || { color: "#9aa0aa", metalness: 0.6, roughness: 0.4 };
  return {
    color: /^#[0-9a-fA-F]{6}$/.test(m.base_color_hex || "") ? m.base_color_hex : d.color,
    metalness: Number.isFinite(m.metalness) ? m.metalness : d.metalness,
    roughness: Number.isFinite(m.roughness) ? m.roughness : d.roughness,
    transparent: m.material_class === "GLASS",
    opacity: m.material_class === "GLASS" ? 0.42 : 1,
  };
}

/* ------------------------------------------------------------------ bridge
   The JSON spec is translated into the analysis shape the existing builder and
   code writer already understand, so step 4 shares one geometry path with the
   rest of the workspace instead of growing a second one that drifts. */
/* A rotor arm is a rod that has to run from the body out to the motor. The
   specification only ever states the ring radius, and the prompt asks for the
   arm's END to sit there, so the compiler is what makes that true: without
   this an arm's MIDDLE lands on the ring, leaving a gap at the hub and
   overshooting past the motors by half its length.

   The same pass fixes orientation. placements() aligns a part's local +x with
   the radius, so a rod whose length runs along z (a plane-FRONT cylinder)
   comes out tangential — pointing sideways instead of outward. Marking it
   here adds the quarter turn at placement time.

   Discs are excluded by comparing the two horizontal extents: a rod is long
   in one and thin in the other, while a rotor disc is wide in both. */
function normalizeRadialStruts(regions) {
  const ring = regions.filter((r) => r.repeat?.pattern === "CIRCULAR" && r.repeat.count > 1);
  if (!ring.length) return regions;

  const isRod = (r) => {
    const w = r.size?.w || 0, d = r.size?.d || 0;
    return w > 0 && d > 0 && Math.max(w, d) / Math.min(w, d) >= 3;
  };
  /* The ring the arms have to reach is the one the compact parts sit on —
     motors and rotor discs — not another rod's own bad radius. */
  const ringR = Math.max(0, ...ring.filter((r) => !isRod(r)).map((r) => r.repeat.radius || 0));
  if (!(ringR > 0)) return regions;

  for (const r of ring) {
    if (!isRod(r)) continue;
    const w = r.size.w, d = r.size.d;
    const len = Math.max(w, d);
    // outer tip on the ring, root pulled into the hub
    r.repeat.radius = Math.max(len * 0.2, ringR - len / 2);
    if (d > w) r.quarterTurn = true;   // long axis is z, so turn it outward
  }
  return regions;
}

export function specToAnalysis(spec) {
  const notes = [];
  const regions = [];
  const features = [];

  for (const p of spec.parts || []) {
    const g = p.geometry || {};
    const size = g.size_mm || {};
    const c = g.center_mm || {};
    const outer = normSegments(g.outer_profile);
    const inner = orientInner(outer, normSegments(g.inner_profile));

    let builder = g.builder || "ROUNDED_BOX";
    if (builder === "SOURCE_MESH") {
      // handled by the caller, which grafts the real mesh in; a placeholder
      // block here would quietly become the product
      notes.push(`${p.display_name_ko || p.name}: 원본 메시 보존 지정`);
    }
    if (builder === "REVOLVE" && !outer) {
      builder = "CYLINDER";
      notes.push(`${p.display_name_ko || p.name}: REVOLVE인데 프로파일이 없어 원통으로 대체했습니다`);
    }

    /* The lathe is recentred on its own extent before placement, so feeding it
       center_mm directly puts the part wherever size_mm happens to disagree
       with the profile — a 95mm profile in a part declared 100mm tall floats
       2.5mm above the floor. The base is what the assembly actually cares
       about, so the base is what gets matched. */
    const h = Math.max(0.2, num(size.h, 10));
    let cy = num(c.y, h / 2);
    if (builder === "REVOLVE" && outer) {
      const ext = profileHeight(outer, inner);
      const real = ext.max - ext.min;
      cy = (cy - h / 2) + real / 2;
      /* The profile is the shape; size_mm only declares the envelope. Editing
         the height alone therefore moves the part without resizing it, which
         looks like the edit was ignored unless it is said out loud. */
      if (Math.abs(real - h) > Math.max(0.5, h * 0.02)) {
        notes.push(`${p.display_name_ko || p.name}: 프로파일 실제 높이 ${real.toFixed(1)}mm가 `
          + `size_mm.h ${h}mm와 다릅니다. 회전체는 프로파일이 형상을 정하므로 `
          + `높이를 바꾸려면 outer_profile의 좌표를 고치십시오`);
      }
    }

    const r = {
      regionId: p.part_id,
      name: p.display_name_ko || p.name || p.part_id,
      semanticRole: p.semantic_role || "OTHER",
      builder,
      size: { w: Math.max(0.2, num(size.w, 10)), h: Math.max(0.2, num(size.h, 10)), d: Math.max(0.2, num(size.d, 10)) },
      center: { x: num(c.x), y: cy, z: num(c.z) },
      plane: g.plane || "FRONT",
      outerProfile: outer || undefined,
      innerProfile: inner || undefined,
      codeHint: p.representation_reason || "",
      material: materialOf(spec, p.material_id),
      loftSections: (g.loft_sections || []).length >= 2 ? g.loft_sections : undefined,
      __sourceMesh: g.builder === "SOURCE_MESH",
      __partId: p.part_id,
    };

    /* Part rotation. Degrees in the JSON because that is what a designer says
       out loud ("상반각 5도"), radians from here on because that is what the
       builder needs. Absent or all-zero stays absent, so a part that does not
       rotate takes exactly the path it took before the field existed.

       Note what this does to size_mm: it stays the part's OWN box, measured
       before the rotation. The world box of a tilted part is larger, and the
       measurement pass knows to leave rotated parts alone for that reason. */
    const rot = g.rotation_deg;
    if (rot && (num(rot.x) || num(rot.y) || num(rot.z))) {
      r.rotation = { x: rad(rot.x), y: rad(rot.y), z: rad(rot.z) };
    }

    /* Aerofoil section. Only a planform can carry one — a top view is what
       "spanwise station" means — so anywhere else it is reported and dropped
       rather than applied to the wrong axis in silence. */
    const af = g.airfoil;
    if (af && num(af.thickness_pct) > 0) {
      const label = p.display_name_ko || p.name;
      if (builder === "EXTRUDE_2D" && (g.plane || "FRONT") === "TOP") {
        r.airfoil = {
          thickness: clamp(num(af.thickness_pct, 12), 2, 40) / 100,
          camber: clamp(num(af.camber_pct), 0, 9.5) / 100,
          twist: rad(clamp(num(af.twist_deg), -20, 20)),
        };
        /* The section decides the thickness — chord × thickness_pct — the way
           a revolve's profile decides its height. Saying so is the difference
           between a user thinking the h slider is broken and knowing which
           number to reach for. */
        const chord = outer ? maxChord(tessellate(outer, 0.4)) : num(size.d, 0);
        const real = chord * airfoilDepth(r.airfoil.thickness, r.airfoil.camber);
        if (real > 0 && Math.abs(real - h) > Math.max(0.5, h * 0.15)) {
          notes.push(`${label}: 에어포일 실제 두께 ${real.toFixed(1)}mm가 size_mm.h ${h}mm와 `
            + `다릅니다. 두께는 최대 코드 ${chord.toFixed(0)}mm × thickness_pct로 정해지므로 `
            + `두껍게 하려면 airfoil.thickness_pct를 올리십시오`);
        }
      } else {
        notes.push(`${label}: airfoil은 plane TOP의 EXTRUDE_2D에만 적용됩니다 `
          + `(지금은 ${builder}/${g.plane || "FRONT"}) — 단면을 무시하고 그대로 만들었습니다`);
      }
    }
    if (g.repeat && g.repeat.count > 1) {
      r.__planeForRepeat = g.plane;
      r.repeat = {
        pattern: g.repeat.pattern || "LINEAR",
        count: Math.min(32, Math.round(g.repeat.count)),
        radius: g.repeat.radius_mm || undefined,
        spacing: g.repeat.spacing_mm || undefined,
        startAngle: ((g.repeat.start_angle_deg || 0) * Math.PI) / 180,
      };
    }
    regions.push(r);

    for (const f of p.features || []) {
      if (!(f.diameter_mm > 0)) continue;
      const circular = f.count > 1 && f.pcd_mm > 0;
      features.push({
        featureId: f.feature_id,
        name: f.feature_detail || f.feature_type,
        type: circular ? "CIRCULAR_HOLE_PATTERN" : "HOLE",
        regionId: p.part_id,
        count: circular ? Math.min(24, Math.round(f.count)) : 1,
        diameter: f.diameter_mm,
        pcd: f.pcd_mm || undefined,
        position: Array.isArray(f.position_mm) ? f.position_mm : undefined,
      });
      if (builder !== "EXTRUDE_2D") {
        notes.push(`${p.display_name_ko || p.name}: ${f.feature_type} Ø${f.diameter_mm}는 `
          + `${builder} 빌더에서 형상으로 뚫리지 않고 사양에만 기록됩니다`);
      }
    }
  }

  const bbox = spec.scale?.bounding_box_mm || {};
  return {
    productName: spec.classification?.subcategory || spec.classification?.category || "model",
    productClass: spec.classification?.archetype || "",
    summary: spec.global_geometry?.dominant_form || "",
    axes: spec.coordinate_system?.axis_semantics || null,
    targetDimensions: (bbox.x && bbox.y && bbox.z)
      ? { width: bbox.x, height: bbox.y, depth: bbox.z, basis: spec.scale?.reference_description || "사양서 스케일" }
      : null,
    regions: normalizeRadialStruts(regions), features,
    __notes: notes,
  };
}

/** Build the scene the spec describes. Returns { root, analysis, notes }. */
export function buildFromSpec(spec, { sourceMesh = null } = {}) {
  const analysis = specToAnalysis(spec);
  const notes = analysis.__notes.slice();

  /* SOURCE_MESH parts are lifted out before the procedural build so no
     placeholder is ever produced for them. */
  const keepIds = new Set(analysis.regions.filter((r) => r.__sourceMesh).map((r) => r.regionId));
  const procedural = { ...analysis, regions: analysis.regions.filter((r) => !keepIds.has(r.regionId)) };
  const root = buildFromAnalysis(procedural);

  /* The specification declares its own origin — bottom centre of the bounding
     box — and center_mm is read against it. Whether a part's centre or its base
     was meant is exactly the thing that gets written inconsistently, and the
     result is an assembly half-buried in the floor. Rather than guess per part,
     the finished assembly is moved onto the origin the spec claims. Relative
     part positions, which are what the assembly actually encodes, are kept. */
  if (root.children.length) {
    const bb = new THREE.Box3().setFromObject(root);
    if (isFinite(bb.min.y)) {
      const c = bb.getCenter(new THREE.Vector3());
      const drop = bb.min.y;
      const origin = spec.coordinate_system?.origin || "BOUNDING_BOX_BOTTOM_CENTER";
      if (origin === "BOUNDING_BOX_BOTTOM_CENTER" || origin === "ASSEMBLY_ROOT") {
        root.position.set(-c.x, -drop, -c.z);
      } else {
        root.position.set(-c.x, -c.y, -c.z);
      }
      if (Math.abs(drop) > 1) {
        notes.push(`조립체가 원점에서 ${drop.toFixed(1)}mm 어긋나 있어 `
          + `사양서가 선언한 원점(${origin})에 맞췄습니다`);
      }
    }
  }

  if (keepIds.size) {
    if (sourceMesh) {
      const kept = sourceMesh.clone(true);
      kept.name = "원본 메시";
      kept.traverse((o) => { if (o.isMesh) o.userData = { ...o.userData, isPart: false }; });
      kept.userData = { isPart: true, regionId: [...keepIds][0], sourceMesh: true };
      root.add(kept);
      notes.push(keepIds.size > 1
        ? `SOURCE_MESH 파트가 ${keepIds.size}개인데 2단계 메시는 나뉘어 있지 않아 `
          + `전체를 하나로 씁니다. 파트를 나누려면 각 파트에 형상을 직접 작성하십시오`
        : "SOURCE_MESH 파트는 2단계 메시를 그대로 씁니다");
    } else {
      notes.push(`SOURCE_MESH 파트 ${keepIds.size}개는 2단계 메시가 없어 비어 있습니다. `
        + `메시를 먼저 만들거나 builder를 바꾸십시오`);
    }
  }
  return { root, analysis, notes };
}

/** The Three.js source for the same model, for the code panel. */
export function specThreeCode(spec) {
  const a = specToAnalysis(spec);
  const head = [
    `// ${spec.classification?.category || ""} / ${spec.classification?.subcategory || ""}`,
    `// 레시피 ${spec.classification?.recipe_id || "-"} · 파트 ${(spec.parts || []).length}개`,
    `// 좌표계 ${spec.coordinate_system?.linear_unit || "mm"} · ${spec.coordinate_system?.up_axis || "Y"}-up · `
      + `${spec.coordinate_system?.origin || "BOUNDING_BOX_BOTTOM_CENTER"}`,
    spec.scale?.absolute_scale_status !== "KNOWN"
      ? `// 절대 스케일 미확정 (${spec.scale?.absolute_scale_status}) — 아래 수치는 비례 기준입니다` : "",
  ].filter(Boolean).join("\n");
  return `${head}\n\n${generateThreeCode(a)}`;
}

/* ------------------------------------------------------------------ report */
export function specSummaryText(spec, notes = []) {
  const L = [];
  const cl = spec.classification || {};
  L.push(`${cl.category || "-"} / ${cl.subcategory || "-"}  ·  ${cl.archetype || "-"}`);
  L.push(`레시피 ${cl.recipe_id || "-"} · 신뢰도 ${((cl.confidence || 0) * 100).toFixed(0)}%`);
  const ia = spec.input_assessment || {};
  L.push(`입력 품질 ${ia.image_quality || "-"} · 뷰 ${ia.view_coverage || "-"}`
    + (ia.occluded_regions_present ? " · 가려진 영역 있음" : ""));
  const sc = spec.scale || {};
  L.push(`절대 스케일 ${sc.absolute_scale_status || "-"}`
    + (sc.bounding_box_mm?.x ? ` · ${sc.bounding_box_mm.x}×${sc.bounding_box_mm.y}×${sc.bounding_box_mm.z}mm` : "")
    + (sc.requires_user_confirmation ? " · 확인 필요" : ""));
  L.push("");
  L.push(`[파트 ${(spec.parts || []).length}]`);
  for (const p of spec.parts || []) {
    const g = p.geometry || {};
    const s = g.size_mm || {};
    L.push(`  ${p.part_id} ${p.display_name_ko || p.name} — ${p.semantic_role}`);
    L.push(`    ${p.representation_strategy} → ${g.builder || "-"} · ${s.w}×${s.h}×${s.d}mm`
      + (g.inner_profile?.length ? " · 셸" : ""));
    if (p.representation_reason) L.push(`    ${p.representation_reason}`);
    for (const d of p.dimensions || []) {
      L.push(`    ${d.name} ${d.value == null ? "미확정" : `${d.value}${d.unit}`}`
        + ` (${d.provenance}${d.requires_confirmation ? " · 확인 필요" : ""})`);
    }
    for (const f of p.features || []) {
      L.push(`    ${f.feature_type}${f.count > 1 ? ` ×${f.count}` : ""}`
        + (f.diameter_mm ? ` Ø${f.diameter_mm}` : "") + (f.pcd_mm ? ` PCD${f.pcd_mm}` : "")
        + ` (${f.provenance})`);
    }
  }

  /* A hollow part whose cavity integrates to nothing is a solid lump with a
     wall thickness written next to it. */
  const shell = (spec.parts || []).find((p) => p.geometry?.inner_profile?.length);
  if (shell) {
    const ml = revolveVolume(tessellate(orientInner(
      normSegments(shell.geometry.outer_profile), normSegments(shell.geometry.inner_profile)))) / 1000;
    L.push("");
    L.push(`[용량] ${shell.display_name_ko || shell.name} 내부 프로파일 적분 ${ml.toFixed(1)} mL`);
  }

  if ((spec.relationships || []).length) {
    L.push("");
    L.push(`[관계 ${spec.relationships.length}]`);
    for (const r of spec.relationships) {
      L.push(`  ${r.source_part_id} → ${r.target_part_id} : ${r.relationship_type}`
        + (r.requires_confirmation ? " (확인 필요)" : ""));
    }
  }
  const gr = spec.generation_rules || {};
  if ((gr.must_preserve || []).length) {
    L.push("");
    L.push(`[보존] ${gr.must_preserve.join(", ")}`);
  }
  if ((spec.uncertainties || []).length) {
    L.push("");
    L.push(`[불확실]`);
    for (const u of spec.uncertainties) L.push(`  ${u.severity} ${u.field_path}: ${u.reason} → ${u.resolution_action}`);
  }
  if ((spec.missing_inputs || []).length) {
    L.push("");
    L.push(`[필요한 입력]`);
    for (const m of spec.missing_inputs) L.push(`  ${m.priority} ${m.input_type} ${m.requested_value} — ${m.reason}`);
  }
  if (notes.length) {
    L.push("");
    L.push(`[빌드 기록]`);
    for (const n of notes) L.push(`  ${n}`);
  }
  return L.join("\n");
}
