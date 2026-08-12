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

/* Where every instance of a repeated part sits, in spec millimetres. Only the
   first is measured — a ring of six arms is one arm six times — but the box has
   to be the right one or the sample lands in empty air. */
function firstInstanceCenter(g) {
  const c = g.center_mm || {};
  const rep = g.repeat;
  if (!rep || !(rep.count > 1)) return [c.x || 0, c.y || 0, c.z || 0];
  if (rep.pattern === "CIRCULAR") {
    const rad = Number(rep.radius_mm) || Math.hypot(c.x || 0, c.z || 0) || 10;
    const a0 = ((Number(rep.start_angle_deg) || 0) * Math.PI) / 180;
    const phi = Math.PI / 2 - a0;
    return [Math.cos(phi) * rad, c.y || 0, Math.sin(phi) * rad];
  }
  if (rep.pattern === "MIRROR_PAIR") {
    const off = rep.spacing_mm ? rep.spacing_mm / 2 : Math.abs(c.x || 0);
    return [off, c.y || 0, c.z || 0];
  }
  return [c.x || 0, c.y || 0, c.z || 0];
}

/* The specification's overall extent, so the mesh can be fitted to it. */
function specBounds(spec) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (const part of spec.parts || []) {
    const g = part.geometry, sz = g && g.size_mm;
    if (!sz) continue;
    const half = [sz.w / 2, sz.h / 2, sz.d / 2];
    const rep = g.repeat;
    const spots = [];
    if (rep && rep.count > 1 && rep.pattern === "CIRCULAR") {
      const rad = Number(rep.radius_mm) || 10;
      const n = Math.min(rep.count, 32);
      const a0 = ((Number(rep.start_angle_deg) || 0) * Math.PI) / 180;
      for (let i = 0; i < n; i++) {
        const phi = Math.PI / 2 - (a0 + (i / n) * Math.PI * 2);
        spots.push([Math.cos(phi) * rad, g.center_mm.y || 0, Math.sin(phi) * rad]);
      }
    } else if (rep && rep.count > 1 && rep.pattern === "MIRROR_PAIR") {
      const off = rep.spacing_mm ? rep.spacing_mm / 2 : Math.abs(g.center_mm.x || 0);
      spots.push([off, g.center_mm.y || 0, g.center_mm.z || 0],
        [-off, g.center_mm.y || 0, g.center_mm.z || 0]);
    } else {
      spots.push([g.center_mm.x || 0, g.center_mm.y || 0, g.center_mm.z || 0]);
    }
    for (const c of spots) {
      for (let a = 0; a < 3; a++) {
        lo[a] = Math.min(lo[a], c[a] - half[a]);
        hi[a] = Math.max(hi[a], c[a] + half[a]);
      }
    }
  }
  return { lo, hi };
}

/**
 * Measure every part that the mesh actually contains, and write what was
 * measured back into the specification.
 *
 * The mesh is fitted to the specification per axis rather than by one uniform
 * scale. A generated mesh is a reconstruction, not a measurement, so its
 * proportions drift a few percent from what the specification declares; a
 * single scale factor then leaves two of the three axes misaligned and every
 * part box samples the wrong region. Fitting each axis independently is what
 * turned "측정 실패" on most shells into a reading.
 *
 * Parts with no mesh inside them are left exactly as the author wrote them —
 * a battery or a flight controller is inside the airframe and no reconstruction
 * of the outside can see it. Those are reported, not silently counted as done.
 */
export function refineFromMesh(spec, mesh) {
  const measured = [], internal = [];
  const mb = meshBounds(mesh);
  const sb = specBounds(spec);
  const specSize = [sb.hi[0] - sb.lo[0], sb.hi[1] - sb.lo[1], sb.hi[2] - sb.lo[2]];
  if (!(Math.min(...specSize) > 0) || !(Math.min(...mb.size) > 0)) {
    return { spec, measured, internal, scale: null };
  }
  // spec mm → mesh units, per axis
  const toMesh = (mm, a) => ((mm - sb.lo[a]) / specSize[a]) * mb.size[a] + mb.lo[a];
  const perMm = [0, 1, 2].map((a) => mb.size[a] / specSize[a]);

  for (const part of spec.parts || []) {
    const g = part.geometry;
    const label = part.display_name_ko || part.part_id;
    if (!g || !g.size_mm || !g.center_mm) continue;
    const sz = g.size_mm;
    const ctr = firstInstanceCenter(g);

    /* A little slack around the declared box: the author's placement is an
       estimate, and a box that is a few millimetres off would otherwise miss
       the very surface it is meant to describe. */
    const dims = [sz.w, sz.h, sz.d];
    let box = null, n = 0, lo = null, hi = null;
    /* Widen the net until the part is found. A thin tail surface or a rotor
       disc is only a few millimetres through, so a placement that is off by
       even a little leaves the tight box empty and the part gets written off
       as internal — which is how the survey wing's tailplanes and propeller
       were being missed. Growing the slack finds them; the ratio guard below
       is what stops a wide net from swallowing a neighbour. */
    for (const pad of [0.12, 0.4, 0.9]) {
      box = { min: [0, 0, 0], max: [0, 0, 0] };
      for (let a = 0; a < 3; a++) {
        // thin axes need absolute slack, not proportional: 8% of 4mm is nothing
        const half = (dims[a] / 2) * (1 + pad) + Math.max(...dims) * pad * 0.06;
        box.min[a] = toMesh(ctr[a] - half, a);
        box.max[a] = toMesh(ctr[a] + half, a);
      }
      n = 0; lo = [Infinity, Infinity, Infinity]; hi = [-Infinity, -Infinity, -Infinity];
      for (let i = 0; i < mesh.count; i++) {
        const x = mesh.positions[i * 3], y = mesh.positions[i * 3 + 1], z = mesh.positions[i * 3 + 2];
        if (x < box.min[0] || x > box.max[0] || y < box.min[1] || y > box.max[1]
          || z < box.min[2] || z > box.max[2]) continue;
        if (x < lo[0]) lo[0] = x; if (x > hi[0]) hi[0] = x;
        if (y < lo[1]) lo[1] = y; if (y > hi[1]) hi[1] = y;
        if (z < lo[2]) lo[2] = z; if (z > hi[2]) hi[2] = z;
        n++;
      }
      if (n >= 24) break;
    }
    if (n < 24) { internal.push(label); continue; }

    /* Snap the declared box onto what the mesh occupies. Only the extent is
       taken, never a wholesale move: the author placed the part for reasons the
       mesh cannot see (a battery bay's clearance, an arm's ring radius), and the
       measurement is here to sharpen that placement, not overrule it. */
    const meas = [0, 1, 2].map((a) => (hi[a] - lo[a]) / perMm[a]);
    const keys = ["w", "h", "d"];
    for (let a = 0; a < 3; a++) {
      const before = dims[a];
      if (!(meas[a] > 0.5)) continue;
      const ratio = meas[a] / before;
      // a reading wildly unlike the declaration means the box caught a neighbour
      if (ratio < 0.4 || ratio > 2.5) continue;
      sz[keys[a]] = Math.round(meas[a]);
    }
    if (!g.repeat || !(g.repeat.count > 1)) {
      // singletons can also have their centre corrected along each axis
      for (let a = 0; a < 3; a++) {
        if (!(meas[a] > 0.5)) continue;
        const mid = ((lo[a] + hi[a]) / 2 - mb.lo[a]) / mb.size[a] * specSize[a] + sb.lo[a];
        const key = ["x", "y", "z"][a];
        if (Math.abs(mid - ctr[a]) <= dims[a] * 0.5) g.center_mm[key] = Math.round(mid);
      }
    }

    /* And the shape along the axis, which is the part no box can carry. */
    const raw = measureSections(mesh, box, g.size_mm, 8);
    let mode = "치수";
    if (raw && sectionsVary(raw) && !NEVER_LOFT.test(label)) {
      g.builder = "LOFT";
      g.loft_sections = raw.map((x) => ({
        at_pct: x.at_pct,
        w_mm: Math.max(1, Math.round(x.w / perMm[[0, 1, 2].filter((a) => a !== loftAxis(g.size_mm))[0]])),
        h_mm: Math.max(1, Math.round(x.h / perMm[[0, 1, 2].filter((a) => a !== loftAxis(g.size_mm))[1]])),
        fill: Math.round(x.fill * 100) / 100,
      }));
      const ax = loftAxis(g.size_mm);
      const cross = keys.filter((_, i) => i !== ax);
      sz[cross[0]] = Math.max(...g.loft_sections.map((x) => x.w_mm));
      sz[cross[1]] = Math.max(...g.loft_sections.map((x) => x.h_mm));
      mode = g.loft_sections.length + "단면";
    }
    measured.push(label + "(" + mode + ")");
  }
  return { spec, measured, internal, scale: perMm };
}

/* Turning these into lofts would fight a builder that already says the shape
   exactly: a rotor is a disc the compiler draws as blades, and a flat plate is
   flat by definition. Their extents are still measured. */
const NEVER_LOFT = /로터|프로펠러|rotor|prop|분리선|panel\s*line|가드|guard/i;

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
