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
/* A cross-section counts as round or square while its two extents are within a
   factor of two. Past that it is a plate, and a plate has no cross-section to
   find — see below. The boundary is a statement about shape, not a fitted
   constant, and the samples leave it plenty of room: every part that reads as a
   solid of revolution sits at 0.48 or below, every plate at 0.54 or above. */
const SQUARISH = 0.5;

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
  /* That rule assumes some pair really is the cross-section. A wing has no such
     pair: 1200 × 25 × 220 is span, thickness, chord, and the closest match of
     the three is span against chord — so the rule hands back the 25mm thickness
     and the wing lofts across its own skin. Every measurement taken along that
     axis is then of the wrong direction, and the span, being a cross extent,
     gets overwritten by a section reading: 1200mm of wingspan became 164mm.
     When nothing is square enough to be a cross-section the shape is a plate,
     and a plate stacks its sections along its longest run. */
  return best.diff <= SQUARISH ? best.axis : d.indexOf(Math.max(...d));
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
 * @param size   the part's size_mm, from which the loft axis is derived
 * @param steps  how many stations to cut
 * @param axis   the loft axis, when the caller has already resolved it — the
 *               one contract that must not be decided twice
 * @returns [{at_pct, w, h, fill}] in mesh units, or null when unmeasurable
 */
export function measureSections(mesh, box, size, steps = 8, axis = null) {
  const ax = axis == null ? loftAxis(size) : axis;
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

/* Every place one part is drawn, with its half-extent, in spec millimetres.
   specBounds needs it to size the whole assembly and the heading search needs
   it to know where the specification thinks its mass is; deriving the ring
   twice was how the two ended up disagreeing about start_angle_deg. */
function partSpots(g) {
  const sz = g && g.size_mm;
  if (!sz) return null;
  const c = g.center_mm || {};
  const half = [sz.w / 2, sz.h / 2, sz.d / 2];
  const rep = g.repeat;
  const spots = [];
  if (rep && rep.count > 1 && rep.pattern === "CIRCULAR") {
    const rad = Number(rep.radius_mm) || 10;
    const n = Math.min(rep.count, 32);
    const a0 = ((Number(rep.start_angle_deg) || 0) * Math.PI) / 180;
    for (let i = 0; i < n; i++) {
      const phi = Math.PI / 2 - (a0 + (i / n) * Math.PI * 2);
      spots.push([Math.cos(phi) * rad, c.y || 0, Math.sin(phi) * rad]);
    }
  } else if (rep && rep.count > 1 && rep.pattern === "MIRROR_PAIR") {
    const off = rep.spacing_mm ? rep.spacing_mm / 2 : Math.abs(c.x || 0);
    spots.push([off, c.y || 0, c.z || 0], [-off, c.y || 0, c.z || 0]);
  } else {
    spots.push([c.x || 0, c.y || 0, c.z || 0]);
  }
  return { half, spots };
}

/* The specification's overall extent, so the mesh can be fitted to it. */
function specBounds(spec) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (const part of spec.parts || []) {
    const s = partSpots(part.geometry);
    if (!s) continue;
    for (const c of s.spots) {
      for (let a = 0; a < 3; a++) {
        lo[a] = Math.min(lo[a], c[a] - s.half[a]);
        hi[a] = Math.max(hi[a], c[a] + s.half[a]);
      }
    }
  }
  return { lo, hi };
}

/* ------------------------------------------------------------------ heading

   A reconstruction has no idea which way is forward. The survey wing's span
   runs along Z in its mesh and along X in the specification, and nothing in
   either file says so — tools/similarity.mjs discovered it by trying all four
   quarter turns, and it is why three of the four samples score against a
   turned reference.

   Everything downstream of here reads the mesh through boxes the specification
   wrote. If the two headings disagree, a 1200mm box along spec X is sampled
   along mesh X, where the mesh has a 700mm fuselage; the per-axis fit then
   stretches that fuselage to fill the span and the "wing sections" that come
   back are slices of the wrong part. The reading is not noisy, it is of
   something else, and every consumer downstream — sizes, centres, the loft, and
   the optimiser that fits against them — inherits it.

   So the turn is found once, before anything is measured. Four candidates, no
   arbitrary angles: a free rotation could register a wing onto a fuselage and
   call it a fit. */

const YAW_STEPS = [
  (x, z) => [x, z],
  (x, z) => [z, -x],
  (x, z) => [-x, -z],
  (x, z) => [-z, x],
];

/** Turn a mesh a quarter turn about the vertical axis, k times. */
export function yawMesh(mesh, k) {
  if (!(k % 4)) return mesh;
  const f = YAW_STEPS[((k % 4) + 4) % 4];
  const positions = new Float64Array(mesh.count * 3);
  for (let i = 0; i < mesh.count; i++) {
    const [x, z] = f(mesh.positions[i * 3], mesh.positions[i * 3 + 2]);
    positions[i * 3] = x;
    positions[i * 3 + 1] = mesh.positions[i * 3 + 1];
    positions[i * 3 + 2] = z;
  }
  return { positions, count: mesh.count, indices: mesh.indices };
}

const OCC = 20;                       // occupancy grid per axis

/* Voxels the specification's part boxes fill, in its own coordinates. */
function specOccupancy(spec, sb, size) {
  const grid = new Uint8Array(OCC * OCC * OCC);
  const cell = (v, a) => Math.max(0, Math.min(OCC - 1,
    Math.floor(((v - sb.lo[a]) / size[a]) * OCC)));
  for (const part of spec.parts || []) {
    const s = partSpots(part.geometry);
    if (!s) continue;
    for (const c of s.spots) {
      const lo = [0, 1, 2].map((a) => cell(c[a] - s.half[a], a));
      const hi = [0, 1, 2].map((a) => cell(c[a] + s.half[a], a));
      for (let i = lo[0]; i <= hi[0]; i++) for (let j = lo[1]; j <= hi[1]; j++) {
        for (let k = lo[2]; k <= hi[2]; k++) grid[(i * OCC + j) * OCC + k] = 1;
      }
    }
  }
  return grid;
}

/* Voxels the mesh fills, brought into the same frame. Uniform scale on
   purpose: the per-axis fit the measurement uses would squeeze a turned mesh
   into the specification's box and throw away the proportion mismatch that is
   the whole signal here. Centred rather than corner-aligned so a nose sticking
   out one end does not shift everything. */
function meshOccupancy(mesh, mb, sb, size) {
  const grid = new Uint8Array(OCC * OCC * OCC);
  const scale = Math.max(...size) / Math.max(...mb.size);
  const mc = [0, 1, 2].map((a) => mb.lo[a] + mb.size[a] / 2);
  const sc = [0, 1, 2].map((a) => sb.lo[a] + size[a] / 2);
  for (let i = 0; i < mesh.count; i++) {
    let out = false;
    const c = [0, 0, 0];
    for (let a = 0; a < 3 && !out; a++) {
      const v = (mesh.positions[i * 3 + a] - mc[a]) * scale + sc[a];
      const k = Math.floor(((v - sb.lo[a]) / size[a]) * OCC);
      if (k < 0 || k >= OCC) out = true; else c[a] = k;
    }
    if (!out) grid[(c[0] * OCC + c[1]) * OCC + c[2]] = 1;
  }
  return grid;
}

/* Turning a symmetric airframe is a no-op that the fourth decimal place can
   still prefer, and a measurement that flips heading between runs would move
   every committed number with it. */
const YAW_MARGIN = 0.02;

/**
 * Which quarter turn about the vertical axis brings the mesh onto the
 * specification's heading? Returns {k, iou}; k is quarter turns, so the caller
 * measures `yawMesh(mesh, k)`.
 */
export function meshYaw(spec, mesh) {
  const sb = specBounds(spec);
  const size = [0, 1, 2].map((a) => sb.hi[a] - sb.lo[a]);
  if (!(Math.min(...size) > 0)) return { k: 0, iou: 0 };
  const want = specOccupancy(spec, sb, size);
  let best = { k: 0, iou: -1 };
  for (let k = 0; k < 4; k++) {
    const turned = yawMesh(mesh, k);
    const mb = meshBounds(turned);
    if (!(Math.min(...mb.size) > 0)) continue;
    const got = meshOccupancy(turned, mb, sb, size);
    let inter = 0, uni = 0;
    for (let i = 0; i < want.length; i++) {
      if (want[i] | got[i]) uni++;
      if (want[i] & got[i]) inter++;
    }
    const iou = uni ? inter / uni : 0;
    if (k === 0 ? iou > best.iou : iou > best.iou + YAW_MARGIN) best = { k, iou };
  }
  return best;
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
 *
 * Returns { measured, internal, authored }: parts read off the mesh, parts the
 * mesh cannot see, and parts whose specification already states the shape more
 * precisely than a bounding box can (rotation_deg, airfoil, or a catalogue
 * component the user chose) and which are therefore left alone. All three are
 * reported; none is a failure.
 */
export function refineFromMesh(spec, mesh) {
  const measured = [], internal = [], authored = [];
  /* Heading first: every box below is written in the specification's frame, so
     a mesh that faces another way has to be turned before it is read, not
     after. See the heading section above for what measuring through the wrong
     quarter turn actually produces. */
  const yaw = meshYaw(spec, mesh);
  const turned = yawMesh(mesh, yaw.k);
  const mb = meshBounds(turned);
  const sb = specBounds(spec);
  const specSize = [sb.hi[0] - sb.lo[0], sb.hi[1] - sb.lo[1], sb.hi[2] - sb.lo[2]];
  if (!(Math.min(...specSize) > 0) || !(Math.min(...mb.size) > 0)) {
    return { spec, measured, internal, authored, scale: null, yaw_deg: 0 };
  }
  mesh = turned;
  // spec mm → mesh units, per axis
  const toMesh = (mm, a) => ((mm - sb.lo[a]) / specSize[a]) * mb.size[a] + mb.lo[a];
  const perMm = [0, 1, 2].map((a) => mb.size[a] / specSize[a]);

  for (const part of spec.parts || []) {
    const g = part.geometry;
    const label = part.display_name_ko || part.part_id;
    if (!g || !g.size_mm || !g.center_mm) continue;

    /* Two kinds of part own their own dimensions and must not be measured.
       Everything this function writes — size_mm, and a switch to LOFT — is
       exactly what they encode, so a measurement here is not a refinement but
       a deletion.

       A rotated part's size_mm is its box BEFORE the rotation, while the
       reading below is a world-axis extent of a tilted solid, which is always
       larger. Snapping one onto the other inflates the part every time the
       measurement runs, and the tilt then multiplies the error.

       An aerofoil's thickness is chord × thickness_pct, not size_mm.h, and
       switching its builder to LOFT would replace the generated section with
       eight measured boxes — the plank the section was added to get rid of. */
    const owns = (g.rotation_deg && (g.rotation_deg.x || g.rotation_deg.y || g.rotation_deg.z))
      ? "회전" : (g.airfoil && g.airfoil.thickness_pct > 0) ? "에어포일" : null;
    if (owns) { authored.push(`${label}(${owns})`); continue; }

    /* A part the user picked out of the component catalogue is not a guess to
       be improved on. The entry carries the real dimensions of a real part and
       a form of its own, and those are precisely the three fields this function
       writes: size_mm, builder, loft_sections. Measuring afterwards would snap
       a 140×48×42 pack onto whatever the reconstruction happens to show around
       it and overwrite the catalogue form with sections read off the shell — so
       the part the user chose would quietly stop being that part while still
       carrying its name. Between an explicit choice and an inference, the
       choice wins; where the part sits was decided by the author and is not
       something the catalogue disputes, so that is left alone too. */
    if (part.component_ref?.catalog_id) { authored.push(`${label}(부품)`); continue; }

    /* The specification already says which parts the outside cannot show, and
       a reconstruction of the outside is all this function has. A battery, a
       flight controller, an ESC board — none of them is in the mesh, so every
       point their box collects belongs to the airframe around them.

       That was the whole of the damage. The box was widened until it found
       something, it always found the shell overhead, and the reading was
       written back as the part's own size; the next run widened around that
       reading and took in more. The inspection quad's battery went from a
       declared 60×30×100 to 12×35×232 — a strip of the fuselage with a
       battery's name on it. Nothing measured can improve on a declaration for
       a part that is not there to measure. */
    if (part.visibility === "OCCLUDED") { internal.push(`${label}(가려짐)`); continue; }

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
       were being missed. Growing the slack finds them; the agreement test at
       the bottom of the loop is what stops a wide net from swallowing a
       neighbour, and the ratio guards further down decide what may be written. */
    for (let pi = 0; pi < PADS.length; pi++) {
      const pad = PADS[pi];
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
      if (n < 24) continue;
      /* Widening the net says the part may sit a little off where it was
         declared. It does not say that whatever turns up nearby is the part,
         and every step out makes "this is the neighbour" the likelier reading —
         so past the first step the catch has to be tighter than the net that
         caught it. A capture that merely fills the widened box scores exactly
         1/(1+pad) against the declared box, so that value is the floor: at or
         below it the box is measuring itself.

         This is what an internal part hits. A battery or a flight controller
         sits under a surface the reconstruction models as one closed shell, so
         its widened box is never empty — it holds the shell passing overhead.
         Read as the part, that shell became the part, and because the next run
         widens the net around the reading it had just written, each pass took
         in more of the airframe: 60×30×100 declared, 145 long after one run,
         232 after the next. */
      if (pi > 0 && boxAgreement(lo, hi, ctr, dims, mb, sb, specSize) <= 1 / (1 + pad)) {
        n = 0; continue;
      }
      break;
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
      // a reading wildly unlike the declaration means the box caught a neighbour
      if (!inRatio(meas[a], before)) continue;
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

    /* And the shape along the axis, which is the part no box can carry.

       The axis is read once, here, and every line below uses that one value.
       It used to be recomputed three times from g.size_mm — which the loop
       above has just rewritten — so the direction the sections were measured
       along and the direction they were written back along could be different
       axes of the same part. */
    const ax = loftAxis(g.size_mm);
    const cross = [0, 1, 2].filter((a) => a !== ax);
    const raw = measureSections(mesh, box, g.size_mm, 8, ax);
    let mode = "치수";
    if (raw && sectionsVary(raw) && !NEVER_LOFT.test(label)) {
      const sections = raw.map((x) => ({
        at_pct: x.at_pct,
        w_mm: Math.max(1, Math.round(x.w / perMm[cross[0]])),
        h_mm: Math.max(1, Math.round(x.h / perMm[cross[1]])),
        fill: Math.round(x.fill * 100) / 100,
      }));
      const wide = Math.max(...sections.map((x) => x.w_mm));
      const tall = Math.max(...sections.map((x) => x.h_mm));
      /* The extents above are ratio-guarded; these two lines write the same two
         fields and used to write them unconditionally, which made this the way
         in for everything that guard turns away. sectionsVary only asks whether
         the section changes along the axis — a box drifted onto the airframe
         gives a section that changes beautifully. The declared box is the
         reference, not the extent measured a few lines up: comparing a reading
         against a reading is how 100mm of battery became 145 and then 232. */
      if (inRatio(wide, dims[cross[0]]) && inRatio(tall, dims[cross[1]])) {
        g.builder = "LOFT";
        g.loft_sections = sections;
        sz[keys[cross[0]]] = wide;
        sz[keys[cross[1]]] = tall;
        mode = sections.length + "단면";
      } else mode = "치수(단면 기각)";
    }
    measured.push(label + "(" + mode + ")");
  }
  return { spec, measured, internal, authored, scale: perMm, yaw_deg: yaw.k * 90 };
}

/* Turning these into lofts would fight a builder that already says the shape
   exactly: a rotor is a disc the compiler draws as blades, and a flat plate is
   flat by definition. Their extents are still measured. */
const NEVER_LOFT = /로터|프로펠러|rotor|prop|분리선|panel\s*line|가드|guard/i;

/* A reading may only replace a declaration while the two are recognisably the
   same object. Outside this window the box has caught a neighbour rather than
   the part, and the declaration — written by someone who knew what the part
   was — is the better number. Applied to the extents AND to the loft sections:
   they write the same three fields, so a guard on only one of them is no guard
   at all. */
const RATIO_MIN = 0.4, RATIO_MAX = 2.5;
const inRatio = (got, want) => want > 0 && got / want >= RATIO_MIN && got / want <= RATIO_MAX;

/* How far each net is cast around the declared box, and what agreement each
   step out has to show for itself. */
const PADS = [0.12, 0.4, 0.9];

/* Overlap of the capture with the declared box, axis by axis, as intersection
   over union of the two intervals; the worst axis is the score. It answers one
   question — is what came back shaped and placed like what was asked for. */
function boxAgreement(lo, hi, ctr, dims, mb, sb, specSize) {
  let worst = 1;
  for (let a = 0; a < 3; a++) {
    const toMm = (v) => ((v - mb.lo[a]) / mb.size[a]) * specSize[a] + sb.lo[a];
    const cl = toMm(lo[a]), ch = toMm(hi[a]);
    const dl = ctr[a] - dims[a] / 2, dh = ctr[a] + dims[a] / 2;
    const uni = Math.max(ch, dh) - Math.min(cl, dl);
    const v = uni > 0 ? Math.max(0, Math.min(ch, dh) - Math.max(cl, dl)) / uni : 0;
    if (v < worst) worst = v;
  }
  return worst;
}

/* Both readers below also return `indices`, a flat triangle list over
   `positions`. Section measuring only ever needed the point cloud, but a
   silhouette does not: vertices are samples of a surface, so a thin part
   projects to a dotted outline with holes through it. Anything that has to
   fill the surface — tools/similarity.mjs rasterises it — needs the faces, and
   the face list belongs with the parser that already walked the buffers. */

/** Collect world-space positions from a loaded Three.js object. */
export function positionsFromObject3D(root) {
  const chunks = [];
  let total = 0, tris = 0;
  root.updateMatrixWorld(true);
  root.traverse((o) => {
    const a = o.isMesh && o.geometry?.attributes?.position;
    if (!a) return;
    const idx = o.geometry.index;
    chunks.push({ a, idx, m: o.matrixWorld });
    total += a.count;
    tris += (idx ? idx.count : a.count) / 3;
  });
  if (!total) return null;
  const positions = new Float64Array(total * 3);
  const indices = new Uint32Array(Math.floor(tris) * 3);
  let k = 0, t = 0, base = 0;
  for (const { a, idx, m } of chunks) {
    const e = m.elements;
    for (let i = 0; i < a.count; i++) {
      const x = a.getX(i), y = a.getY(i), z = a.getZ(i);
      positions[k++] = e[0] * x + e[4] * y + e[8] * z + e[12];
      positions[k++] = e[1] * x + e[5] * y + e[9] * z + e[13];
      positions[k++] = e[2] * x + e[6] * y + e[10] * z + e[14];
    }
    /* Each geometry indexes its own vertices, so every face has to be shifted
       by where that geometry landed in the merged array. */
    const n = idx ? idx.count : a.count;
    for (let i = 0; i + 2 < n; i += 3) {
      indices[t++] = base + (idx ? idx.getX(i) : i);
      indices[t++] = base + (idx ? idx.getX(i + 1) : i + 1);
      indices[t++] = base + (idx ? idx.getX(i + 2) : i + 2);
    }
    base += a.count;
  }
  return { positions, count: total, indices: indices.subarray(0, t) };
}

/** Parse a .glb buffer into {positions, count, indices} — largest primitive only. */
export function positionsFromGlb(buf) {
  const jsonLen = buf.readUInt32LE(12);
  const gltf = JSON.parse(buf.slice(20, 20 + jsonLen).toString("utf8"));
  const binStart = 20 + jsonLen + 8;
  const at = (a) => binStart + (gltf.bufferViews[a.bufferView].byteOffset || 0) + (a.byteOffset || 0);
  let best = null;
  for (const m of gltf.meshes || []) {
    for (const pr of m.primitives || []) {
      const a = gltf.accessors[pr.attributes.POSITION];
      if (!a || (best && a.count <= best.count)) continue;
      /* mode defaults to 4 (TRIANGLES); strips and fans would need a different
         walk, so their faces are dropped rather than read wrongly. */
      const tri = (pr.mode ?? 4) === 4;
      const ia = tri && pr.indices != null ? gltf.accessors[pr.indices] : null;
      best = { off: at(a), count: a.count, tri, ia, ioff: ia ? at(ia) : 0 };
    }
  }
  if (!best) return null;
  const positions = new Float64Array(best.count * 3);
  for (let k = 0; k < best.count * 3; k++) positions[k] = buf.readFloatLE(best.off + k * 4);

  let indices = null;
  if (best.ia) {
    // 5121 UNSIGNED_BYTE, 5123 UNSIGNED_SHORT, 5125 UNSIGNED_INT
    const w = best.ia.componentType === 5121 ? 1 : best.ia.componentType === 5123 ? 2 : 4;
    const read = w === 1 ? buf.readUInt8.bind(buf) : w === 2 ? buf.readUInt16LE.bind(buf) : buf.readUInt32LE.bind(buf);
    indices = new Uint32Array(best.ia.count);
    for (let k = 0; k < best.ia.count; k++) indices[k] = read(best.ioff + k * w);
  } else if (best.tri) {
    // an unindexed primitive is already three-vertices-per-face
    indices = new Uint32Array(best.count - (best.count % 3));
    for (let k = 0; k < indices.length; k++) indices[k] = k;
  }
  return { positions, count: best.count, indices };
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
