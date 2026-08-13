/* ==========================================================================
   Specification validation — the rules a spec has to satisfy before anything
   downstream is allowed to believe it.

   Lifted out of server.mjs so it has exactly one definition. The generator
   runs it between repair rounds, and tools/fit-spec.mjs runs it on every
   candidate it considers: an optimiser that raises silhouette agreement by
   quietly breaking the aerofoil thickness relation, or by moving the tailplane
   into the wing, has not improved the design. Copying the rules into the
   optimiser would have worked until the day one side was edited.
   ========================================================================== */

export const REPRESENTATION = ["PRIMITIVE", "PROCEDURAL", "PROFILE_EXTRUDE",
  "PROFILE_REVOLVE", "CURVE_SWEEP", "BOOLEAN_CSG", "HYBRID", "UNRESOLVED"];

export const BUILDER_VALUES = ["REVOLVE", "EXTRUDE_2D", "LOFT", "BOX", "ROUNDED_BOX", "CYLINDER", "TUBE",
  "CONE", "SPHERE", "TORUS", "FREEFORM"];
export function validateSpec(spec, { hasMesh = false } = {}) {
  const errors = [];
  const parts = spec.parts || [];
  const ids = new Set(parts.map((p) => p.part_id));
  const matIds = new Set((spec.materials || []).map((m) => m.material_id));

  for (const p of parts) {
    if (p.parent_part_id && !ids.has(p.parent_part_id)) {
      errors.push({ field_path: `parts.${p.part_id}.parent_part_id`, error_code: "DANGLING_PARENT",
        required_fix: `${p.parent_part_id}는 존재하지 않는 part_id입니다. null로 두거나 실제 ID를 쓰십시오.` });
    }
    if (p.material_id && !matIds.has(p.material_id)) {
      errors.push({ field_path: `parts.${p.part_id}.material_id`, error_code: "DANGLING_MATERIAL",
        required_fix: `${p.material_id}는 materials에 없습니다.` });
    }
    for (const d of p.dimensions || []) {
      // the rule that stops a photo from becoming fake millimetres
      if (d.value != null && spec.scale?.absolute_scale_status === "UNKNOWN"
        && d.unit === "mm" && d.provenance !== "USER_PROVIDED" && d.provenance !== "COMPUTED") {
        errors.push({ field_path: `parts.${p.part_id}.dimensions.${d.name}`,
          error_code: "ABSOLUTE_DIMENSION_WITHOUT_SCALE",
          required_fix: "절대 스케일 기준이 없습니다. value를 null, provenance를 UNRESOLVED로 하십시오." });
      }
      if (d.value == null && !d.requires_confirmation) {
        errors.push({ field_path: `parts.${p.part_id}.dimensions.${d.name}`,
          error_code: "NULL_WITHOUT_CONFIRMATION", required_fix: "value가 null이면 requires_confirmation은 true여야 합니다." });
      }
    }
    /* geometry is the build instruction; a spec that cannot be built is a
       report, and step 4 has nothing to compile from it */
    const g = p.geometry || {};
    const wants = { PROFILE_REVOLVE: "REVOLVE", PROFILE_EXTRUDE: "EXTRUDE_2D" };
    if (wants[p.representation_strategy] && g.builder !== wants[p.representation_strategy]) {
      errors.push({ field_path: `parts.${p.part_id}.geometry.builder`, error_code: "BUILDER_STRATEGY_MISMATCH",
        required_fix: `representation_strategy가 ${p.representation_strategy}이면 builder는 ${wants[p.representation_strategy]}여야 합니다.` });
    }
    // Structured Outputs constrains the shape, not always the vocabulary
    if (!REPRESENTATION.includes(p.representation_strategy)) {
      errors.push({ field_path: `parts.${p.part_id}.representation_strategy`, error_code: "UNKNOWN_ENUM_VALUE",
        required_fix: `허용값은 ${REPRESENTATION.join(", ")} 입니다.` });
    }
    if (g.builder && !BUILDER_VALUES.includes(g.builder)) {
      errors.push({ field_path: `parts.${p.part_id}.geometry.builder`, error_code: "UNKNOWN_ENUM_VALUE",
        required_fix: `허용값은 ${BUILDER_VALUES.join(", ")} 입니다.` });
    }
    if (g.builder === "REVOLVE" && !(g.outer_profile || []).length) {
      errors.push({ field_path: `parts.${p.part_id}.geometry.outer_profile`, error_code: "REVOLVE_WITHOUT_PROFILE",
        required_fix: "REVOLVE는 outer_profile 없이 만들 수 없습니다. [반경, 높이] 세그먼트를 채우십시오." });
    }
    if (!g.size_mm || !(g.size_mm.w > 0 && g.size_mm.h > 0 && g.size_mm.d > 0)) {
      errors.push({ field_path: `parts.${p.part_id}.geometry.size_mm`, error_code: "EMPTY_SIZE",
        required_fix: "size_mm의 w·h·d는 모두 0보다 커야 합니다." });
    }
    /* The compiler drops a misplaced aerofoil with a note, which is the right
       thing at build time but too late here: a repair round can fix the spec
       instead, so the wing arrives with its section rather than as a plank. */
    if (g.airfoil && g.airfoil.thickness_pct > 0) {
      const af = g.airfoil;
      if (g.builder !== "EXTRUDE_2D" || g.plane !== "TOP") {
        errors.push({ field_path: `parts.${p.part_id}.geometry.airfoil`, error_code: "AIRFOIL_WRONG_PLANE",
          required_fix: `airfoil은 plane TOP의 EXTRUDE_2D에만 붙습니다(지금은 ${g.builder}/${g.plane}). `
            + `날개면 builder를 EXTRUDE_2D, plane을 TOP으로 하고 outer_profile에 평면형을 쓰십시오. `
            + `날개가 아니면 airfoil을 null로 두십시오.` });
      }
      if (!(af.thickness_pct >= 2 && af.thickness_pct <= 40)) {
        errors.push({ field_path: `parts.${p.part_id}.geometry.airfoil.thickness_pct`, error_code: "AIRFOIL_THICKNESS_RANGE",
          required_fix: `thickness_pct는 2~40 사이여야 합니다(지금 ${af.thickness_pct}). 일반 날개는 10~15입니다.` });
      }
      if (!(af.camber_pct >= 0 && af.camber_pct <= 9.5)) {
        errors.push({ field_path: `parts.${p.part_id}.geometry.airfoil.camber_pct`, error_code: "AIRFOIL_CAMBER_RANGE",
          required_fix: `camber_pct는 0~9.5 사이여야 합니다(지금 ${af.camber_pct}). 대칭익은 0입니다.` });
      }
      /* An aerofoil's thickness comes from the chord, so size_mm.h stops being
         an input and becomes a number that has to agree. When it does not, the
         datasheet says one thing and the solid is another. */
      const chord = g.size_mm?.d || 0;
      const real = chord * (af.thickness_pct / 100);
      if (real > 0 && g.size_mm?.h > 0 && Math.abs(real - g.size_mm.h) > Math.max(1, real * 0.25)) {
        errors.push({ field_path: `parts.${p.part_id}.geometry.size_mm.h`, error_code: "AIRFOIL_THICKNESS_MISMATCH",
          required_fix: `단면 두께는 코드 ${chord}mm × ${af.thickness_pct}% = 약 ${real.toFixed(0)}mm인데 `
            + `size_mm.h는 ${g.size_mm.h}mm입니다. h를 ${real.toFixed(0)}으로 고치십시오.` });
      }
    }
    /* Past ±45° a "tilt" is a part drawn in the wrong plane and rotated into
       place, which hides the mistake from every axis rule below. */
    for (const ax of ["x", "y", "z"]) {
      const v = g.rotation_deg?.[ax];
      if (v != null && Math.abs(v) > 45) {
        errors.push({ field_path: `parts.${p.part_id}.geometry.rotation_deg.${ax}`, error_code: "ROTATION_TOO_LARGE",
          required_fix: `rotation_deg.${ax}가 ${v}도입니다. 기울기는 ±45도까지입니다. `
            + `90도가 필요하면 파트가 잘못된 plane에 그려진 것이므로 plane과 size_mm을 고치십시오.` });
      }
    }
    for (const f of p.features || []) {
      if (f.visibility === "NOT_VISIBLE" && f.provenance === "IMAGE_OBSERVED") {
        errors.push({ field_path: `parts.${p.part_id}.features.${f.feature_id}`,
          error_code: "OBSERVED_BUT_NOT_VISIBLE", required_fix: "보이지 않는 피처를 IMAGE_OBSERVED로 기록할 수 없습니다." });
      }
    }
  }
  for (const r of spec.relationships || []) {
    if (!ids.has(r.source_part_id) || !ids.has(r.target_part_id)) {
      errors.push({ field_path: `relationships.${r.relationship_id}`, error_code: "DANGLING_RELATIONSHIP",
        required_fix: "source_part_id와 target_part_id는 실제 part_id여야 합니다." });
    }
  }
  const sc = spec.scale || {};
  if (sc.absolute_scale_status === "KNOWN"
    && !(sc.bounding_box_mm?.x > 0 && sc.bounding_box_mm?.y > 0 && sc.bounding_box_mm?.z > 0)) {
    errors.push({ field_path: "scale.bounding_box_mm", error_code: "KNOWN_SCALE_WITHOUT_BBOX",
      required_fix: "절대 스케일이 KNOWN이면 bounding_box_mm 세 값을 채워야 합니다." });
  }
  /* A revolved section that starts or ends off the axis leaves the solid open,
     and one whose cavity meets the apex is a sealed lump with a wall thickness
     written beside it. */
  for (const p of parts) {
    const g = p.geometry || {};
    if (!(g.outer_profile || []).length) continue;
    /* An ARC without a radius silently degrades to a straight line, which is
       how a shoulder curve becomes a corner without anyone being told. */
    for (const [key, segs] of [["outer_profile", g.outer_profile], ["inner_profile", g.inner_profile]]) {
      for (const s of segs || []) {
        if (s.type !== "ARC") continue;
        const chord = Math.hypot((s.end?.[0] ?? 0) - (s.start?.[0] ?? 0), (s.end?.[1] ?? 0) - (s.start?.[1] ?? 0));
        if (!(s.radius > 0)) {
          errors.push({ field_path: `parts.${p.part_id}.geometry.${key}`, error_code: "ARC_WITHOUT_RADIUS",
            required_fix: "ARC에는 radius가 필요합니다. 곡률이 없으면 type을 LINE으로 바꾸십시오." });
        } else if (s.radius < chord / 2 - 1e-6) {
          errors.push({ field_path: `parts.${p.part_id}.geometry.${key}`, error_code: "ARC_RADIUS_TOO_SMALL",
            required_fix: `radius ${s.radius}는 두 점 사이 거리 ${chord.toFixed(1)}의 절반보다 작아 호가 성립하지 않습니다.` });
        }
        if (s.sweep !== "CW" && s.sweep !== "CCW") {
          errors.push({ field_path: `parts.${p.part_id}.geometry.${key}`, error_code: "ARC_WITHOUT_SWEEP",
            required_fix: "ARC의 sweep은 CW 또는 CCW여야 합니다." });
        }
      }
    }
    /* Coordinate density is the whole difference between a product and a
       stack of cans. A section drawn with four straight lines has a sharp
       90-degree edge everywhere the direction changes, which no moulded or
       machined part actually has, and no amount of material work hides it. */
    const outer = g.outer_profile || [];
    const inner = g.inner_profile || [];
    const curved = [...outer, ...inner].filter((s) => s.type === "ARC" || s.type === "BEZIER").length;
    const body = p.semantic_role === "STRUCTURAL_BODY" || p.semantic_role === "PANEL";
    const floor = body ? 8 : 5;
    if (outer.length < floor) {
      errors.push({ field_path: `parts.${p.part_id}.geometry.outer_profile`, error_code: "PROFILE_TOO_COARSE",
        required_fix: `세그먼트가 ${outer.length}개뿐입니다. ${body ? "본체" : "이 파트"}는 최소 ${floor}개가 필요합니다. `
          + `바닥 모서리·측벽 전환·어깨·림 모따기처럼 방향이 바뀌는 지점의 반경을 빠뜨렸습니다.` });
    }
    if (curved === 0) {
      errors.push({ field_path: `parts.${p.part_id}.geometry`, error_code: "PROFILE_ALL_STRAIGHT",
        required_fix: "단면이 전부 직선이라 모든 모서리가 90도로 각집니다. "
          + "방향이 바뀌는 지점마다 ARC(radius, sweep)나 BEZIER(control1, control2)를 넣으십시오." });
    }

    /* size_mm is what the reader believes; the profile is what gets built. When
       they disagree the model is a different size from its own datasheet, and
       neither number tells you which one lied. */
    const pts = [];
    for (const s of [...(g.outer_profile || []), ...(g.inner_profile || [])]) {
      if (Array.isArray(s.start)) pts.push(s.start);
      if (Array.isArray(s.end)) pts.push(s.end);
    }
    if (pts.length >= 2) {
      const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
      // a revolve's profile is a radius, so its width is twice the extent
      const w = (Math.max(...xs) - Math.min(...xs)) * (g.builder === "REVOLVE" ? 2 : 1);
      const h = Math.max(...ys) - Math.min(...ys);
      const off = (a, b) => (b > 0 ? Math.abs(a - b) / b : 1);
      /* The profile's [x, y] land on different world axes depending on the
         extrusion plane, and the declared size must be read the same way. */
      const sm = g.size_mm || {};
      let declaredW = sm.w || 0, declaredH = sm.h || 0, axesLabel = "w × h";
      if (g.builder === "REVOLVE") declaredW = Math.max(sm.w || 0, sm.d || 0);
      else if (g.plane === "TOP") { declaredH = sm.d || 0; axesLabel = "w × d"; }
      else if (g.plane === "SIDE") { declaredW = sm.d || 0; axesLabel = "d × h"; }
      if (off(w, declaredW) > 0.05 || off(h, declaredH) > 0.05) {
        errors.push({ field_path: `parts.${p.part_id}.geometry`, error_code: "PROFILE_SIZE_MISMATCH",
          required_fix: `프로파일이 만드는 크기는 ${w.toFixed(1)} × ${h.toFixed(1)} mm인데 `
            + `size_mm(${axesLabel})은 ${declaredW} × ${declaredH}입니다. 형상은 프로파일이 정하므로 `
            + `프로파일 좌표를 의도한 치수에 맞추고 size_mm도 같게 하십시오.` });
      }
    }

    /* An extruded outline is a closed loop in its own plane and answers to
       none of the axis rules below. */
    if (g.builder !== "REVOLVE") continue;
    const first = g.outer_profile[0];
    if (Math.abs(first.start?.[0] ?? 9) > 0.5) {
      errors.push({ field_path: `parts.${p.part_id}.geometry.outer_profile[0].start`,
        error_code: "PROFILE_NOT_ON_AXIS",
        required_fix: "회전 단면은 반경 0인 축 위의 바닥점에서 시작해야 바닥이 막힙니다." });
    }
    if (inner.length) {
      const ends = [inner[0].start?.[0] ?? 9, inner[inner.length - 1].end?.[0] ?? 9];
      if (!ends.some((r) => Math.abs(r) < 0.5)) {
        errors.push({ field_path: `parts.${p.part_id}.geometry.inner_profile`,
          error_code: "CAVITY_NOT_CLOSED",
          required_fix: "내부 단면의 한쪽 끝은 반경 0이어야 단면이 닫힙니다." });
      }
      // a cavity you cannot reach is a solid block with a wall thickness beside it
      const rimR = Math.abs(g.outer_profile[g.outer_profile.length - 1].end?.[0] ?? 0);
      if (rimR < 0.5) {
        errors.push({ field_path: `parts.${p.part_id}.geometry.outer_profile`,
          error_code: "OPEN_CONTAINER_SEALED_TOP",
          required_fix: "내부 공동이 있는데 바깥 단면이 상단에서 반경 0으로 닫힙니다. "
            + "열린 입구를 가진 파트는 림 반경에서 끝나야 합니다. 뚜껑은 별도 파트로 나누십시오." });
      }
    }
  }
  /* Drone-specific shape rules. The profile validators only fire when a
     profile exists, so a wing written as ROUNDED_BOX sails through them and
     renders as a plank. Aerodynamic surfaces must carry a section. */
  if (spec.classification?.platform_family) {
    const nameOf = (p) => `${p.name || ""} ${p.display_name_ko || ""}`;

    /* A drone without its internals is a photo, not a design. Every platform
       has a minimum part roster, internal avionics included; the repair
       rounds add whatever is missing. */
    const ROSTER = spec.classification.platform_family === "FIXED_WING"
      ? [["동체|fuselage", "동체"], ["주익|날개|wing", "주익"], ["미익|tail|stab", "미익"],
         ["모터|motor", "모터"], ["프로펠러|로터|propeller", "프로펠러"],
         ["배터리|battery", "배터리"], ["비행제어|fc|avionics|autopilot", "비행제어 스택"]]
      : [["바디|본체|body|center", "중앙 바디"], ["암|arm|붐|boom", "암"],
         ["모터|motor", "모터"], ["로터|프로펠러|rotor|propeller", "로터"],
         ["랜딩|스키드|landing|skid", "랜딩기어"], ["배터리|battery", "배터리"],
         ["비행제어|fc|avionics|autopilot", "비행제어 스택"], ["gnss|gps|안테나|antenna", "GNSS"]];
    const missing = ROSTER.filter(([rx]) => !parts.some((p) => new RegExp(rx, "i").test(nameOf(p))))
      .map(([, label]) => label);
    if (missing.length) {
      errors.push({ field_path: "parts", error_code: "REQUIRED_PART_MISSING",
        required_fix: `필수 파트가 빠졌습니다: ${missing.join(", ")}. 내부 부품(배터리·비행제어·ESC)도 `
          + `실제 위치에 파트로 넣어야 합니다. 이 사양서는 분해 뷰에서 내부 구성을 보여줘야 합니다.` });
    }
    if ((spec.parameters || []).length < 5) {
      errors.push({ field_path: "parameters", error_code: "PARAMS_TOO_FEW",
        required_fix: `파라미터가 ${(spec.parameters || []).length}개뿐입니다. 형상을 실제로 바꾸는 `
          + `파라미터를 최소 6개 만드십시오 (휠베이스·로터지름·암길이·바디폭·바디높이·기어높이 등).` });
    }
    for (const p of parts) {
      const g = p.geometry || {};
      const n = nameOf(p);
      if (/날개|주익|미익|wing|stab|tail_plane|동체|fuselage/i.test(n)
        && ["BOX", "ROUNDED_BOX", "CYLINDER"].includes(g.builder)) {
        errors.push({ field_path: `parts.${p.part_id}.geometry.builder`, error_code: "AERO_SURFACE_AS_PRIMITIVE",
          required_fix: `${p.display_name_ko || p.name}는 공력 형상입니다. 날개·미익은 EXTRUDE_2D에 `
            + `날개 평면형(테이퍼·라운드 팁) 단면을, 동체는 REVOLVE에 유선형 단면을 쓰십시오. `
            + `ROUNDED_BOX 날개는 판자처럼 보입니다.` });
      }
      /* A wing drawn in the front plane is a billboard standing on its edge.
         The planform lives in the top view; the section's plane says which. */
      if (/날개|주익|수평\s*미익|wing|h[_-]?stab|horizontal/i.test(n)
        && g.builder === "EXTRUDE_2D" && g.plane !== "TOP") {
        errors.push({ field_path: `parts.${p.part_id}.geometry.plane`, error_code: "WING_NOT_TOP_PLANE",
          required_fix: `${p.display_name_ko || p.name}의 plane은 TOP이어야 합니다. outer_profile을 `
            + `위에서 본 평면형(x 스팬, y 코드)으로 다시 쓰고 size_mm.d를 날개 두께로 하십시오. `
            + `좌우 MIRROR_PAIR 대신 -스팬/2~+스팬/2 관통 한 파트로 그리십시오.` });
      }
      if (/수직\s*미익|v[_-]?stab|vertical|rudder/i.test(n)
        && g.builder === "EXTRUDE_2D" && g.plane !== "SIDE") {
        errors.push({ field_path: `parts.${p.part_id}.geometry.plane`, error_code: "VSTAB_NOT_SIDE_PLANE",
          required_fix: `수직미익의 plane은 SIDE(YZ 단면, 두께가 좌우 X)여야 합니다.` });
      }
      if (/로터|프로펠러|rotor|propeller|prop\b/i.test(n) && g.builder === "CYLINDER") {
        const dia = Math.max(g.size_mm?.w || 0, g.size_mm?.d || 0);
        if ((g.size_mm?.h || 0) > dia * 0.08) {
          errors.push({ field_path: `parts.${p.part_id}.geometry.size_mm.h`, error_code: "ROTOR_DISK_TOO_THICK",
            required_fix: `로터 디스크는 얇은 원반입니다. 높이(h)는 지름의 8% 이하(권장 2~4mm)여야 합니다. `
              + `지금은 h ${g.size_mm?.h}에 지름 ${dia}입니다. 회전축이 Y가 되도록 w·d가 지름, h가 두께입니다.` });
        }
        /* A lift rotor labelled FRONT flips onto its side now that cylinders
           honour the plane. Cruise/nose props legitimately face FRONT, so only
           lift/vertical rotors are checked. */
        if (/리프트|lift|상승/i.test(n) && g.plane && g.plane !== "TOP") {
          errors.push({ field_path: `parts.${p.part_id}.geometry.plane`, error_code: "LIFT_ROTOR_NOT_TOP",
            required_fix: `리프트 로터·모터의 plane은 TOP(수직축)이어야 합니다. FRONT는 순항 프로펠러 전용입니다.` });
        }
      }
      /* An empennage sharing the wing's station compiles INSIDE the wing and
         vanishes — exactly what happened to the first sar-vtol sample. */
      if (/수평\s*미익|h[_-]?stab|tail\s*plane|horizontal\s*stab/i.test(n)) {
        const wing = parts.find((q) => /주익|main\s*wing/i.test(nameOf(q)) && q !== p);
        if (wing) {
          const dz = Math.abs((g.center_mm?.z ?? 0) - (wing.geometry?.center_mm?.z ?? 0));
          const need = ((g.size_mm?.d || 0) + (wing.geometry?.size_mm?.d || 0)) / 2;
          if (dz < need) {
            errors.push({ field_path: `parts.${p.part_id}.geometry.center_mm.z`, error_code: "EMPENNAGE_INSIDE_WING",
              required_fix: `수평미익이 주익과 같은 자리(z 차이 ${dz.toFixed(0)}mm)에 있어 주익 속에 묻힙니다. `
                + `미익은 동체 꼬리 쪽(z 간격 ${need.toFixed(0)}mm 이상)에 두십시오.` });
          }
        }
      }
    }
  }

  /* Structure and part count have to agree, or the specification claims an
     assembly it did not describe. */
  if (spec.global_geometry?.object_structure === "MULTI_PART_ASSEMBLY" && parts.length < 2) {
    errors.push({ field_path: "parts", error_code: "ASSEMBLY_WITH_ONE_PART",
      required_fix: "MULTI_PART_ASSEMBLY인데 파트가 하나입니다. 부품을 분리하거나 구조를 고치십시오." });
  }
  // cycles in the part hierarchy
  const parent = new Map(parts.map((p) => [p.part_id, p.parent_part_id]));
  for (const p of parts) {
    const seen = new Set([p.part_id]);
    let cur = parent.get(p.part_id);
    while (cur) {
      if (seen.has(cur)) {
        errors.push({ field_path: `parts.${p.part_id}.parent_part_id`, error_code: "HIERARCHY_CYCLE",
          required_fix: "부품 계층에 순환 참조가 있습니다." });
        break;
      }
      seen.add(cur); cur = parent.get(cur);
    }
  }
  return errors;
}
