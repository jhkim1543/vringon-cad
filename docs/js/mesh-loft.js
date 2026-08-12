/* ==========================================================================
   Loft sections measured off the stage-1 mesh.

   The specification writer was inventing coordinates, and an extrusion can
   only ever carry one silhouette: the fixed-wing fuselage was written as a
   760mm side profile pushed through a constant 140mm width, so it rendered as
   a plank with a nice outline. Slicing the generated mesh along the part's own
   axis recovers what the extrusion throws away — how the section changes from
   nose to tail. On the survey wing the measured height runs 186mm at the nose
   down to 76mm at the waist and back to 118mm, against the 120mm constant the
   specification claimed.

   No segmentation service is needed. The specification already states each
   part's box, and that box is the mask: sample the mesh inside it, slice along
   the axis the part's plane names, and read the section off the points.

   Pure arithmetic on a position array, so the same code runs in the browser
   against a loaded GLB and in Node against one parsed by hand.
   ========================================================================== */

/* Parts whose outer form is worth measuring. Internal boxes (battery, flight
   controller) are not in the mesh at all, and rotors and fasteners are either
   below its resolution or better described by the primitive they already use. */
const SHELL_RX = /동체|바디|본체|셸|쉘|캐노피|커버|나셀|카울|탱크|fuselage|body|shell|canopy|nacelle|cowl|tank|pod/i;
const SKIP_RX = /배터리|battery|비행제어|fc\b|avionics|esc|로터|프로펠러|rotor|prop|모터|motor|안테나|antenna|볼트|파스너|fastener/i;

export function isShellPart(name) {
  return SHELL_RX.test(name || "") && !SKIP_RX.test(name || "");
}

/* Sections stack along the part's longest dimension, not along the plane's
   normal. `plane` describes where an extrusion's section is drawn, which for a
   fuselage is the side view with the thickness across the body — slicing on
   that normal cuts the aircraft sideways and reports nonsense. A loft runs
   nose to tail, and the longest axis is what that means. The compiler derives
   the axis by this same rule, so no extra field has to travel in the JSON. */
export function loftAxis(size) {
  const d = [size.w || 0, size.h || 0, size.d || 0];
  /* Taking the longest extent works for a fuselage but rolls an upright tank
     onto its side: 400 × 302 × 400 is widest across, yet the axis a tank lofts
     along is plainly its height. The two extents that most nearly match are
     the cross-section — round or square — and whichever is left is the axis. */
  let best = null;
  for (const [a, b, c] of [[0, 1, 2], [0, 2, 1], [1, 2, 0]]) {
    const diff = Math.abs(d[a] - d[b]) / Math.max(d[a], d[b], 1);
    if (!best || diff < best.diff) best = { diff, axis: c };
  }
  return best.axis;
}

/* A section is described by width, height and how full it is: the fraction of
   its bounding rectangle the outline actually covers. An ellipse fills 0.785,
   a rectangle 1.0, and a real fuselage sits between — that one number is the
   difference between a flying brick and a streamlined body, and it costs
   twelve radial bins to measure. */
const BINS = 16;

function sectionAt(pos, count, lo, hi, ax, u, v, uMin, uMax, vMin, vMax) {
  let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity, n = 0;
  for (let i = 0; i < count; i++) {
    const t = pos[i * 3 + ax];
    if (t < lo || t >= hi) continue;
    const a = pos[i * 3 + u], b = pos[i * 3 + v];
    if (a < uMin || a > uMax || b < vMin || b > vMax) continue;
    if (a < u0) u0 = a; if (a > u1) u1 = a;
    if (b < v0) v0 = b; if (b > v1) v1 = b;
    n++;
  }
  if (n < 12) return null;

  /* Fill ratio from the outline's own radii: bin the points by angle around
     the section centre, keep the furthest in each bin, and take the polygon
     they form. Comparing its area with the bounding rectangle says how round
     the section is without needing a real contour trace. */
  const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2;
  const w = u1 - u0, h = v1 - v0;
  if (!(w > 0) || !(h > 0)) return null;
  const rad = new Float64Array(BINS);
  for (let i = 0; i < count; i++) {
    const t = pos[i * 3 + ax];
    if (t < lo || t >= hi) continue;
    const a = pos[i * 3 + u], b = pos[i * 3 + v];
    if (a < uMin || a > uMax || b < vMin || b > vMax) continue;
    // normalise to the unit box so the angle is not skewed by the aspect ratio
    const du = (a - cu) / (w / 2), dv = (b - cv) / (h / 2);
    const r = Math.hypot(du, dv);
    if (!(r > 0)) continue;
    let k = Math.floor(((Math.atan2(dv, du) + Math.PI) / (Math.PI * 2)) * BINS);
    if (k < 0) k = 0; else if (k >= BINS) k = BINS - 1;
    if (r > rad[k]) rad[k] = r;
  }
  let area = 0, filled = 0;
  for (let k = 0; k < BINS; k++) {
    if (rad[k] <= 0) continue;
    filled++;
    const r1 = rad[k], r2 = rad[(k + 1) % BINS] || r1;
    area += 0.5 * r1 * r2 * Math.sin((Math.PI * 2) / BINS);
  }
  if (filled < BINS * 0.6) return null;   // too sparse to trust
  // unit box area is 4; a fully filled square would read 4
  const fill = Math.max(0.55, Math.min(1, area / 4));
  return { w, h, fill, n };
}

/**
 * Measure loft sections for one part.
 * @param mesh   {positions: Float64Array|Float32Array, count: number} in mesh units
 * @param box    part box in the SAME units: {min:[x,y,z], max:[x,y,z]}
 * @param size   the part's size_mm; its longest axis is the loft axis
 * @param steps  how many stations to cut
 * @returns [{at_pct, w, h, fill}] in mesh units, or null when unmeasurable
 */
export function measureSections(mesh, box, size, steps = 8) {
  const ax = loftAxis(size);
  const [u, v] = [0, 1, 2].filter((a) => a !== ax);
  const lo = box.min[ax], hi = box.max[ax];
  const span = hi - lo;
  if (!(span > 0)) return null;

  const out = [];
  for (let k = 0; k < steps; k++) {
    const a = lo + (span * k) / steps, b = lo + (span * (k + 1)) / steps;
    const s = sectionAt(mesh.positions, mesh.count, a, b, ax, u, v,
      box.min[u], box.max[u], box.min[v], box.max[v]);
    if (!s) continue;
    out.push({ at_pct: Math.round(((k + 0.5) / steps) * 100), w: s.w, h: s.h, fill: s.fill });
  }
  /* Three stations is the least that can describe a taper. Fewer means the box
     caught almost nothing — an internal part, or a bad box — and the caller
     should keep whatever builder the specification already chose. */
  if (out.length < 3) return null;

  /* A single stray station can come from a neighbouring part poking into the
     box, so each is pulled toward its neighbours a little. */
  const sm = out.map((s, i) => {
    const p = out[Math.max(0, i - 1)], q = out[Math.min(out.length - 1, i + 1)];
    return {
      at_pct: s.at_pct,
      w: (p.w + 2 * s.w + q.w) / 4,
      h: (p.h + 2 * s.h + q.h) / 4,
      fill: (p.fill + 2 * s.fill + q.fill) / 4,
    };
  });
  return sm;
}

/* A loft only earns its place when the section actually changes; a constant
   tube is better left as the extrusion it already is. */
export function sectionsVary(sections, threshold = 0.12) {
  if (!sections || sections.length < 3) return false;
  const ws = sections.map((s) => s.w), hs = sections.map((s) => s.h);
  const rel = (a) => (Math.max(...a) - Math.min(...a)) / Math.max(...a);
  return Math.max(rel(ws), rel(hs)) >= threshold;
}

/**
 * Rewrite a specification's shell parts as lofts measured from the mesh.
 * Mutates and returns the spec; reports what it touched.
 *
 * @param spec        drone specification
 * @param mesh        {positions, count} — the stage-1 mesh
 * @param meshToMm    scale factor taking mesh units to millimetres
 * @param meshOrigin  [x,y,z] mesh-unit point that maps to the spec origin
 */
export function refineFromMesh(spec, mesh, meshToMm, meshOrigin = [0, 0, 0]) {
  const touched = [], skipped = [];
  for (const p of spec.parts || []) {
    const g = p.geometry;
    const name = `${p.name || ""} ${p.display_name_ko || ""}`;
    if (!g?.size_mm || !g.center_mm || g.repeat?.count > 1) continue;
    if (!isShellPart(name)) continue;

    // the part's box, expressed back in mesh units
    const c = g.center_mm, s = g.size_mm;
    const toMesh = (mm, i) => mm / meshToMm + meshOrigin[i];
    const box = {
      min: [toMesh(c.x - s.w / 2, 0), toMesh(c.y - s.h / 2, 1), toMesh(c.z - s.d / 2, 2)],
      max: [toMesh(c.x + s.w / 2, 0), toMesh(c.y + s.h / 2, 1), toMesh(c.z + s.d / 2, 2)],
    };
    const raw = measureSections(mesh, box, g.size_mm, 8);
    if (!raw) { skipped.push(`${p.display_name_ko || p.part_id}(측정 실패)`); continue; }
    if (!sectionsVary(raw)) { skipped.push(`${p.display_name_ko || p.part_id}(단면 균일)`); continue; }

    g.builder = "LOFT";
    g.loft_sections = raw.map((x) => ({
      at_pct: x.at_pct,
      w_mm: Math.round(x.w * meshToMm),
      h_mm: Math.round(x.h * meshToMm),
      fill: Math.round(x.fill * 100) / 100,
    }));
    /* The declared box has to agree with what the sections describe, or the
       viewer and every check downstream disagree about how big the part is. */
    const ax = loftAxis(g.size_mm);
    const maxW = Math.max(...g.loft_sections.map((x) => x.w_mm));
    const maxH = Math.max(...g.loft_sections.map((x) => x.h_mm));
    const keys = ["w", "h", "d"], cross = keys.filter((_, i) => i !== ax);
    g.size_mm[cross[0]] = maxW; g.size_mm[cross[1]] = maxH;
    touched.push(`${p.display_name_ko || p.part_id}(${g.loft_sections.length}단면)`);
  }
  return { spec, touched, skipped };
}

/** Collect world-space positions from a loaded Three.js object. */
export function positionsFromObject3D(root) {
  const chunks = [];
  let total = 0;
  root.updateMatrixWorld(true);
  root.traverse((o) => {
    const a = o.isMesh && o.geometry?.attributes?.position;
    if (!a) return;
    chunks.push({ a, m: o.matrixWorld });
    total += a.count;
  });
  if (!total) return null;
  const positions = new Float64Array(total * 3);
  let k = 0;
  for (const { a, m } of chunks) {
    const e = m.elements;
    for (let i = 0; i < a.count; i++) {
      const x = a.getX(i), y = a.getY(i), z = a.getZ(i);
      positions[k++] = e[0] * x + e[4] * y + e[8] * z + e[12];
      positions[k++] = e[1] * x + e[5] * y + e[9] * z + e[13];
      positions[k++] = e[2] * x + e[6] * y + e[10] * z + e[14];
    }
  }
  return { positions, count: total };
}

/** Parse a .glb buffer into {positions, count} — largest primitive only. */
export function positionsFromGlb(buf) {
  const jsonLen = buf.readUInt32LE(12);
  const gltf = JSON.parse(buf.slice(20, 20 + jsonLen).toString("utf8"));
  const binStart = 20 + jsonLen + 8;
  let best = null;
  for (const m of gltf.meshes || []) {
    for (const pr of m.primitives || []) {
      const a = gltf.accessors[pr.attributes.POSITION];
      if (!a || (best && a.count <= best.count)) continue;
      const bv = gltf.bufferViews[a.bufferView];
      best = { acc: a, off: binStart + (bv.byteOffset || 0) + (a.byteOffset || 0), count: a.count };
    }
  }
  if (!best) return null;
  const positions = new Float64Array(best.count * 3);
  for (let k = 0; k < best.count * 3; k++) positions[k] = buf.readFloatLE(best.off + k * 4);
  return { positions, count: best.count };
}

/** Bounds helper shared by the callers that have to line the mesh up with mm. */
export function meshBounds(mesh) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < mesh.count; i++) {
    for (let a = 0; a < 3; a++) {
      const v = mesh.positions[i * 3 + a];
      if (v < lo[a]) lo[a] = v;
      if (v > hi[a]) hi[a] = v;
    }
  }
  return { lo, hi, size: [hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]] };
}
