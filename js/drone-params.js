/* ==========================================================================
   Deterministic parameter application.

   The specification's parameters[] are the knobs; this module is what a knob
   actually turns. No model call is involved — a slider edit mutates the spec
   JSON in a defined way and the caller recompiles. The JSON stays the single
   source of truth: what the sliders did is exactly what a reader of the spec
   sees.

   Two levels:
   - applyParameter(): named design parameters (wheelbase, rotor_diameter …)
     fan out to every part they govern, keeping assembly couplings intact —
     the arm ring, motor ring and rotor ring move together or the drone
     dismantles itself.
   - partFields()/applyPartField(): raw per-part dimensions for direct editing.
   ========================================================================== */

const NAME = (p) => `${p.name || ""} ${p.display_name_ko || ""}`;
const isArm = (p) => /암(?!레스트)|arm|boom|붐/i.test(NAME(p));
const isRotorDisk = (p) => /로터|프로펠러|rotor|propeller/i.test(NAME(p)) && !/암|arm|마운트|mount|모터|motor|가드|guard/i.test(NAME(p));
const isMotor = (p) => /모터|motor/i.test(NAME(p)) && !/마운트|mount/i.test(NAME(p));
const isRotorRing = (p) => /가드|guard|덕트|duct|마운트|mount/i.test(NAME(p));
const isBody = (p) => /바디|본체|동체|body|fuselage|center/i.test(NAME(p));
const isGear = (p) => /랜딩|스키드|landing|skid|gear/i.test(NAME(p));
const isWing = (p) => /주익|날개|(?<!rotor )wing/i.test(NAME(p)) && !/미익|tail|stab/i.test(NAME(p));

function scaleProfile(g, kx, ky) {
  for (const key of ["outer_profile", "inner_profile"]) {
    for (const s of g[key] || []) {
      for (const pt of ["start", "end", "control1", "control2"]) {
        if (Array.isArray(s[pt])) { s[pt][0] *= kx; s[pt][1] *= ky; }
      }
      if (s.radius) s.radius *= Math.max(kx, ky);
    }
  }
}

/* --------------------------------------------------------------- knobs */
export function applyParameter(spec, paramId, value) {
  const parts = spec.parts || [];
  const pm = (spec.parameters || []).find((x) => x.id === paramId);
  const before = pm ? pm.value : null;
  const touched = [];
  const id = paramId.toLowerCase();

  const inScope = (p) => !pm || !(pm.affects || []).length
    || pm.affects.includes(p.part_id)
    || (pm.affects || []).some((a) => a.startsWith("geometry:") || a.startsWith("metric:"));

  if (id.includes("wheelbase")) {
    /* One number, every ring: arms, motors, rotors, guards, hub caps share
       the radius or the assembly falls apart. This coupling is physics, not
       preference, so the parameter's affects list does not gate it — the
       model routinely lists only motors/props there and the guards stayed
       behind at the old radius. */
    for (const p of parts) {
      const rep = p.geometry?.repeat;
      if (rep && rep.pattern === "CIRCULAR"
        && (isArm(p) || isMotor(p) || isRotorDisk(p) || isRotorRing(p))) {
        // radius 0 means "drawn from the centre outward" (a rod), not a ring
        if (rep.radius_mm) rep.radius_mm = value / 2;
        touched.push(p.part_id);
        if (isArm(p)) {
          // arm length follows the ring: tip at the motor, root at the body
          const g = p.geometry, long = Math.max(g.size_mm.w, g.size_mm.d) || 1;
          const body = parts.find(isBody);
          const rootR = body ? Math.max(body.geometry?.size_mm?.w || 0, body.geometry?.size_mm?.d || 0) / 2 : value / 8;
          const newLen = Math.max(30, value / 2 - rootR + 20);
          const k = newLen / long;
          if (g.size_mm.w >= g.size_mm.d) g.size_mm.w = newLen; else g.size_mm.d = newLen;
          scaleProfile(g, g.plane === "FRONT" && g.size_mm.w >= g.size_mm.d ? k : k, 1);
        }
      }
    }
    if (spec.size_performance) spec.size_performance.wheelbase_mm = value;
  } else if (id.includes("rotor_diameter") || id.includes("rotor.diameter")) {
    for (const p of parts) {
      if (isRotorDisk(p) && inScope(p)) {
        const g = p.geometry, k = value / (Math.max(g.size_mm.w, g.size_mm.d) || 1);
        g.size_mm.w = value; g.size_mm.d = value;
        scaleProfile(g, k, k);
        touched.push(p.part_id);
      }
    }
  } else if (id.includes("arm_length")) {
    for (const p of parts) {
      if (isArm(p) && inScope(p)) {
        const g = p.geometry, long = Math.max(g.size_mm.w, g.size_mm.d) || 1, k = value / long;
        if (g.size_mm.w >= g.size_mm.d) g.size_mm.w = value; else g.size_mm.d = value;
        scaleProfile(g, k, 1);
        touched.push(p.part_id);
      }
    }
  } else if (id.includes("wingspan") || id.includes("wing_span")) {
    for (const p of parts) {
      if (isWing(p) && inScope(p)) {
        const g = p.geometry, k = value / (g.size_mm.w || 1);
        g.size_mm.w = value;
        scaleProfile(g, k, 1);
        touched.push(p.part_id);
      }
    }
    if (spec.size_performance) spec.size_performance.wingspan_mm = value;
  } else if (id.includes("gear") && id.includes("height")) {
    for (const p of parts) {
      if (isGear(p) && inScope(p)) {
        const g = p.geometry, k = value / (g.size_mm.h || 1);
        g.size_mm.h = value;
        scaleProfile(g, 1, k);
        touched.push(p.part_id);
      }
    }
  } else if (id.includes("body")) {
    for (const p of parts) {
      if (isBody(p) && inScope(p)) {
        const g = p.geometry;
        const axis = id.includes("height") ? "h" : id.includes("width") ? "w" : id.includes("length") ? "d" : null;
        if (axis) {
          const k = value / (g.size_mm[axis] || 1);
          g.size_mm[axis] = value;
          scaleProfile(g, axis === "h" ? 1 : k, axis === "h" ? k : 1);
          touched.push(p.part_id);
        }
      }
    }
  } else if (pm && (pm.affects || []).length) {
    /* unknown knob with explicit targets: scale the long axis uniformly */
    for (const p of parts) {
      if (pm.affects.includes(p.part_id)) {
        const g = p.geometry;
        const k = value / (before || Math.max(g.size_mm.w, g.size_mm.h, g.size_mm.d) || 1);
        g.size_mm.w *= k; g.size_mm.h *= k; g.size_mm.d *= k;
        scaleProfile(g, k, k);
        touched.push(p.part_id);
      }
    }
  }

  if (pm) { pm.value = value; pm.provenance = "USER_PROVIDED"; pm.confidence = 1; }
  return touched;
}

/* ------------------------------------------------------- per-part editing */
export function partFields(spec, partId) {
  const p = (spec.parts || []).find((x) => x.part_id === partId);
  if (!p) return [];
  const g = p.geometry || {};
  const f = [
    { key: "size_mm.w", label: "가로 W", value: g.size_mm?.w, min: 1, max: 4000 },
    { key: "size_mm.h", label: "높이 H", value: g.size_mm?.h, min: 1, max: 4000 },
    { key: "size_mm.d", label: "깊이 D", value: g.size_mm?.d, min: 1, max: 4000 },
    { key: "center_mm.y", label: "중심 높이 Y", value: g.center_mm?.y, min: -500, max: 2000 },
  ];
  if (g.repeat?.count > 1) {
    f.push({ key: "repeat.radius_mm", label: "배치 반경", value: g.repeat.radius_mm, min: 10, max: 2000 });
    f.push({ key: "repeat.count", label: "배치 수", value: g.repeat.count, min: 2, max: 12, step: 1 });
  }
  return f;
}

export function applyPartField(spec, partId, key, value) {
  const p = (spec.parts || []).find((x) => x.part_id === partId);
  if (!p) return false;
  const g = p.geometry;
  const [a, b] = key.split(".");
  if (!g[a]) g[a] = {};
  const prev = g[a][b];
  g[a][b] = value;
  /* Dimension edits keep the authored profile in step, else the size check
     the server enforces is broken by the first slider touch. */
  if (a === "size_mm" && prev > 0 && (g.outer_profile || []).length) {
    const k = value / prev;
    const plane = g.plane || "FRONT";
    const kx = (b === "w" && plane !== "SIDE") || (b === "d" && plane === "SIDE") ? k : 1;
    const ky = (b === "h" && plane !== "TOP") || (b === "d" && plane === "TOP") ? k : 1;
    if (kx !== 1 || ky !== 1) scaleProfile(g, kx, ky);
  }
  return true;
}
