/* ==========================================================================
   Specification to Three.js code.

   The specification's job is to be a good enough description that code written
   from it resembles the product. This module writes that code, and runs the
   same builders the code describes, so what you see and what you can copy out
   are the same thing.

   Nothing here consults a product category. Every number comes from the spec,
   which came from reading the image.
   ========================================================================== */
import * as THREE from "three";
import { loftAxis } from "./mesh-loft.js?v=832e871a";

const n = (v, d = 2) => Number(Number(v || 0).toFixed(d));
const YAXIS = new THREE.Vector3(0, 1, 0);

/* ------------------------------------------------------- profile segments
   Arcs and Beziers, tessellated. A profile written as bare points loses the
   radius that gives a product its character: a shoulder becomes a corner. */
export function tessellate(segments, tol = 0.15) {
  const pts = [];
  const push = (x, y) => {
    const last = pts[pts.length - 1];
    if (!last || Math.hypot(last.x - x, last.y - y) > 1e-4) pts.push(new THREE.Vector2(x, y));
  };
  for (const s of segments || []) {
    const a = s.start || [0, 0], b = s.end || [0, 0];
    if (s.type === "ARC" && s.radius > 0) {
      /* Centre from the chord and the radius, picking the side the sweep asks
         for. This is what turns "shoulder R8" into an actual curve. */
      const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      const dx = b[0] - a[0], dy = b[1] - a[1];
      const half = Math.hypot(dx, dy) / 2;
      const R = Math.max(s.radius, half + 1e-6);
      const h = Math.sqrt(Math.max(0, R * R - half * half));
      const sign = s.sweep === "CW" ? -1 : 1;
      const ux = -dy / (half * 2), uy = dx / (half * 2);
      const cx = mx + ux * h * sign, cy = my + uy * h * sign;
      let a0 = Math.atan2(a[1] - cy, a[0] - cx);
      let a1 = Math.atan2(b[1] - cy, b[0] - cx);
      if (s.sweep === "CW" && a1 > a0) a1 -= Math.PI * 2;
      if (s.sweep !== "CW" && a1 < a0) a1 += Math.PI * 2;
      const steps = Math.max(4, Math.ceil(Math.abs(a1 - a0) / (2 * Math.acos(Math.max(-1, 1 - tol / R)))));
      for (let i = 0; i <= steps; i++) {
        const t = a0 + ((a1 - a0) * i) / steps;
        push(cx + Math.cos(t) * R, cy + Math.sin(t) * R);
      }
    } else if (s.type === "BEZIER" && s.control1 && s.control2) {
      const c1 = s.control1, c2 = s.control2;
      const steps = Math.max(8, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / Math.max(0.6, tol * 6)));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps, u = 1 - t;
        push(
          u * u * u * a[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * b[0],
          u * u * u * a[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * b[1],
        );
      }
    } else {
      push(a[0], a[1]); push(b[0], b[1]);
    }
  }
  return pts;
}

/** volume of the solid a (radius, height) polyline sweeps, in mm³ */
export function revolveVolume(pts) {
  let v = 0;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    const dy = b.y - a.y;
    if (Math.abs(dy) < 1e-9) continue;
    // truncated cone between two profile points
    v += (Math.PI * dy * (a.x * a.x + a.x * b.x + b.x * b.x)) / 3;
  }
  return Math.abs(v);
}

/* ------------------------------------------------------------- geometry

   Which two of a round part's three box dimensions form its cross-section.

   Every lathed builder here — CYLINDER, CONE, TUBE — is generated about local
   Y and then turned so local Y lands on the plane's normal: TOP leaves it
   upright, FRONT sends it to +z, SIDE to x. So the section is always local X
   and Z, and which world dimensions those become follows from that one turn.
   Defined once because the runtime builder and the code generator have to
   agree; when they each carried their own copy the emitted file and the
   preview were the same shape only by coincidence.

   Returned in local order [X, Z], and the axis length is the remaining one. */
export function sectionOf(r, s) {
  return r.plane === "FRONT" ? [s.w, s.h] : r.plane === "SIDE" ? [s.h, s.d] : [s.w, s.d];
}

/* The emitted counterpart of the runtime `oval()`. Skipped when the section is
   genuinely round, so a plain cylinder still reads as one line of code. */
function ovalLine(L, v, cross, dia, n = (x) => Number(x.toFixed(4))) {
  if (!(dia > 0) || cross[0] === cross[1]) return;
  L.push(`  ${v}Geo.scale(${n(cross[0] / dia)}, 1, ${n(cross[1] / dia)});   // size_mm 박스에 맞춘 타원 단면`);
}

/* One builder per shape kind the spec is allowed to name. */
function buildGeometry(r) {
  const s = r.size || { w: 10, h: 10, d: 10 };
  const w = Math.max(0.1, s.w), h = Math.max(0.1, s.h), d = Math.max(0.1, s.d);
  const b = r.builder || "ROUNDED_BOX";

  /* A wall has two sides. When the spec gives an inner profile, sweep the
     outside up and the inside back down in one polyline: LatheGeometry turns
     that into a real shell with its cavity, instead of a solid lump.

     Only when the builder actually asks for it: an L-bracket's cross-section is
     also a profile, and revolving it turned a 6mm plate into a 240mm disc. */
  if (b === "REVOLVE" || (!r.builder && r.outerProfile?.length)) {
    let pts = null;
    if (r.outerProfile?.length) {
      const outer = tessellate(r.outerProfile);
      const inner = r.innerProfile?.length ? tessellate(r.innerProfile) : null;
      pts = inner ? outer.concat(inner.slice().reverse()) : outer;
    } else if (Array.isArray(r.profile) && r.profile.length >= 2) {
      pts = r.profile.map(([rad, y]) => new THREE.Vector2(Math.max(0.0001, Math.abs(rad)), y));
    }
    if (pts && pts.length >= 2) {
      pts = pts.map((p) => new THREE.Vector2(Math.max(0.0001, Math.abs(p.x)), p.y));
      const ys = pts.map((p) => p.y);
      const g = new THREE.LatheGeometry(pts, 128);
      g.translate(0, -(Math.min(...ys) + (Math.max(...ys) - Math.min(...ys)) / 2), 0);
      return g;
    }
  }
  if (b === "EXTRUDE_2D") {
    /* An authored outline is the whole point of an extrusion: a bracket, a
       gusset and a wall plate differ only in their section, and substituting a
       rounded rectangle erases exactly the part that was specified.

       The section is [x, y] in the plane the spec names, and the extrusion
       thickness runs along that plane's normal — which axis of size_mm that is
       follows from the plane: FRONT extrudes through d, TOP (a planform)
       through h, SIDE (a fin) through w. */
    const depth = r.plane === "TOP" ? h : r.plane === "SIDE" ? w : d;
    /* A section turns the planform into a wing. TOP only: a planform is a top
       view by definition, and running this on a fin's SIDE section would loft
       the aerofoil across the span it was meant to run along. The planform is
       recentred exactly as the extrusion below recentres it, so a wing that
       gains a section does not also move. */
    if (r.airfoil && r.plane === "TOP") {
      const pts = r.outerProfile?.length ? tessellate(r.outerProfile)
        : [[-w / 2, -d / 2], [w / 2, -d / 2], [w / 2, d / 2], [-w / 2, d / 2]]
          .map(([x, y]) => new THREE.Vector2(x, y));
      if (pts.length >= 3) {
        const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
        const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
        const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
        const g = wingGeometry(pts.map((p) => new THREE.Vector2(p.x - cx, p.y - cy)), r.airfoil);
        if (g) return g;
      }
    }
    if (r.outerProfile?.length) {
      const pts = tessellate(r.outerProfile);
      if (pts.length >= 3) {
        const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
        const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
        const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
        const sh = new THREE.Shape(pts.map((p) => new THREE.Vector2(p.x - cx, p.y - cy)));
        if (r.innerProfile?.length) {
          const ip = tessellate(r.innerProfile);
          if (ip.length >= 3) sh.holes.push(new THREE.Path(ip.map((p) => new THREE.Vector2(p.x - cx, p.y - cy))));
        }
        for (const f of r.__features || []) {
          if (!f.diameter) continue;
          const pos = f.position || [0, 0, 0];
          if (f.type === "CIRCULAR_HOLE_PATTERN" && f.count > 1) {
            const pcd = (f.pcd || Math.min(w, h) * 0.6) / 2;
            for (let i = 0; i < Math.min(f.count, 24); i++) {
              const a = (i / f.count) * Math.PI * 2;
              const p = new THREE.Path();
              p.absarc(pos[0] + Math.cos(a) * pcd, pos[1] + Math.sin(a) * pcd, f.diameter / 2, 0, Math.PI * 2, true);
              sh.holes.push(p);
            }
          } else {
            const p = new THREE.Path();
            p.absarc(pos[0], pos[1], f.diameter / 2, 0, Math.PI * 2, true);
            sh.holes.push(p);
          }
        }
        const g = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: false, curveSegments: 24 });
        g.translate(0, 0, -depth / 2);
        /* FRONT is the extruder's native XY; TOP lays the section flat (a wing
           planform, thickness vertical); SIDE stands it on YZ (a fin, thickness
           spanwise). Without this, every wing is a billboard. */
        if (r.plane === "TOP") g.rotateX(Math.PI / 2);
        else if (r.plane === "SIDE") g.rotateY(Math.PI / 2);
        return g;
      }
    }
    const hw = w / 2, hd = d / 2;
    const cr = Math.min(Math.min(hw, hd) * 0.25, Math.min(w, d) * 0.1);
    const sh = new THREE.Shape();
    sh.moveTo(-hw + cr, -hd);
    sh.lineTo(hw - cr, -hd);
    sh.absarc(hw - cr, -hd + cr, cr, -Math.PI / 2, 0, false);
    sh.lineTo(hw, hd - cr);
    sh.absarc(hw - cr, hd - cr, cr, 0, Math.PI / 2, false);
    sh.lineTo(-hw + cr, hd);
    sh.absarc(-hw + cr, hd - cr, cr, Math.PI / 2, Math.PI, false);
    sh.lineTo(-hw, -hd + cr);
    sh.absarc(-hw + cr, -hd + cr, cr, Math.PI, Math.PI * 1.5, false);
    for (const f of r.__features || []) {
      if (!f.diameter) continue;
      if (f.type === "CIRCULAR_HOLE_PATTERN" && f.count > 1) {
        const pcd = (f.pcd || Math.min(w, d) * 0.6) / 2;
        for (let i = 0; i < Math.min(f.count, 24); i++) {
          const a = (i / f.count) * Math.PI * 2;
          const p = new THREE.Path();
          p.absarc(Math.cos(a) * pcd, Math.sin(a) * pcd, f.diameter / 2, 0, Math.PI * 2, true);
          sh.holes.push(p);
        }
      } else {
        const p = new THREE.Path();
        p.absarc(0, 0, f.diameter / 2, 0, Math.PI * 2, true);
        sh.holes.push(p);
      }
    }
    const g = new THREE.ExtrudeGeometry(sh, { depth: h, bevelEnabled: false, curveSegments: 24 });
    g.rotateX(-Math.PI / 2);
    g.translate(0, h / 2, 0);
    return g;
  }
  /* A cylinder's axis follows the plane's normal, same rule as extrusions:
     TOP is the native vertical axis (lift rotors, motors, masts), FRONT faces
     forward (a cruise propeller — without this it lies flat and reads as a
     fifth lift rotor), SIDE spans left-right. */
  const axis = (g2) => {
    if (r.plane === "FRONT") g2.rotateX(Math.PI / 2);
    else if (r.plane === "SIDE") g2.rotateZ(Math.PI / 2);
    return g2;
  };
  /* Clamped copy, so a zero-thickness declaration cannot divide by nothing. */
  const crossOf = () => sectionOf(r, { w, h, d });
  /* Build the section round at the larger of the two, then squeeze the other
     back to the number the box declares.

     size_mm is the world bounding box, so a guard whose box reads 281 × 233 is
     an oval hoop and a searchlight reading 63 × 15 is a slot. Taking max() for
     both diameters — which is what this did — rounded every such section up to
     its larger side: the guard grew 21% in depth, the searchlight 323% in
     height, and a 20mm crossbar declared 20 × 20 × 500 came out as a 500mm
     disc 20mm thick, because SIDE reads max(h, d) as the diameter. The parts
     then painted silhouette the aircraft does not have. */
  const oval = (g2, cross, dia) => {
    if (dia > 0) g2.scale(cross[0] / dia, 1, cross[1] / dia);
    return g2;
  };
  if (b === "CYLINDER" || b === "CONE") {
    /* A rotor's diameter is real data — disk loading, clearance and hover
       power all come from it — but a plain disc is a stand-in for how the
       thing looks. The same numbers describe an actual propeller: hub plus
       N tapered blades, N read from the part's name (…2엽/3-blade…). */
    if (b === "CYLINDER" && isProp(r)) {
      const dia = Math.max(w, h, d), thin = Math.max(3, Math.min(w, h, d));
      return axis(propellerGeometry(dia, thin, bladeCount(r)));
    }
    /* size_mm is the world bounding box, so the axis dimension is the length
       and the other two are the diameter. Reading h as the length regardless
       of plane turned a carbon-tube arm declared w40·h40·d650 (a 650mm rod
       running forward) into a standing disc 650 across. */
    const cross = crossOf();
    const dia2 = Math.max(...cross);
    const len = r.plane === "FRONT" ? d : r.plane === "SIDE" ? w : h;
    if (b === "CONE") return axis(oval(new THREE.ConeGeometry(dia2 / 2, len, 44), cross, dia2));
    return axis(oval(new THREE.CylinderGeometry(dia2 / 2, dia2 / 2, len, 48), cross, dia2));
  }
  if (b === "SPHERE") {
    /* A gimbal ball declared 191 × 120 × 120 is a squashed dome, not a 191
       sphere; the same box rule applies with all three axes free. */
    const dia4 = Math.max(w, h, d);
    const g = new THREE.SphereGeometry(dia4 / 2, 40, 26);
    if (dia4 > 0) g.scale(w / dia4, h / dia4, d / dia4);
    return g;
  }
  /* TORUS is left round. Its ring is drawn in local XY, not XZ like every
     other lathe here, so the box rule would need a different pair of axes —
     and no sample exercises it, so there is nothing to check the change
     against. Kept as it was rather than guessed at. */
  if (b === "TORUS") return new THREE.TorusGeometry(Math.max(w, d) / 2, Math.max(0.2, h / 2), 20, 48);
  if (b === "LOFT" && r.loftSections?.length >= 2) {
    /* Skin the measured stations. Each section is a superellipse whose
       exponent comes from how full the measurement said it was: 2 is an
       ellipse, larger tends toward a rectangle. This is the one builder that
       carries a changing cross-section, which is what an extrusion cannot do
       and what makes a fuselage a fuselage rather than a plank. */
    /* Sections stack along the part's longest dimension, derived by the same
       rule the measurement used, so the two never disagree. `plane` is about
       where an extrusion's section is drawn and says nothing useful here. */
    const dims = [w, h, d], la = loftAxis({ w, h, d });
    const g = loftGeometry(r.loftSections, dims[la]);
    if (la === 2) g.rotateX(Math.PI / 2);        // stack front-to-back
    else if (la === 0) g.rotateZ(Math.PI / 2);   // stack left-to-right
    return g;                                    // la === 1 is already vertical
  }
  if (b === "TUBE") {
    /* Same box convention as CYLINDER: the plane's normal is the tube's axis,
       so that dimension is the length and the other two give the bore. Reading
       max(w, d) as the diameter turned a 35mm carbon arm into a 700mm disc —
       38 litres of filament across six arms. */
    const cross3 = crossOf();
    const dia3 = Math.max(...cross3);
    const len3 = r.plane === "FRONT" ? d : r.plane === "SIDE" ? w : h;
    const ro = dia3 / 2, ri = ro * 0.72;
    const pts = [
      new THREE.Vector2(ri, 0), new THREE.Vector2(ro, 0),
      new THREE.Vector2(ro, len3), new THREE.Vector2(ri, len3), new THREE.Vector2(ri, 0),
    ];
    const g = new THREE.LatheGeometry(pts, 48);
    g.translate(0, -len3 / 2, 0);
    return axis(oval(g, cross3, dia3));
  }
  if (b === "BOX") return new THREE.BoxGeometry(w, h, d, 2, 2, 2);

  /* FREEFORM and anything unrecognised: a rounded block is an honest stand-in
     and the spec's codeHint says what it should really be. */
  const cr = Math.min(w, h, d) * 0.18;
  const g = new THREE.BoxGeometry(w, h, d, 4, 4, 4);
  const pos = g.attributes.position;
  const hw = w / 2 - cr, hh = h / 2 - cr, hd = d / 2 - cr;
  const v = new THREE.Vector3(), c = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    c.set(Math.max(-hw, Math.min(hw, v.x)), Math.max(-hh, Math.min(hh, v.y)), Math.max(-hd, Math.min(hd, v.z)));
    v.sub(c).normalize().multiplyScalar(cr).add(c);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

/* Superellipse |x/a|^n + |y/b|^n = 1. The exponent is chosen so the ring's
   area matches the fill ratio measured off the mesh: 0.785 is an ellipse,
   1.0 a rectangle. A short table beats solving the gamma-function relation
   and is accurate enough for a section a few millimetres across. */
function fillToExponent(fill) {
  const T = [[0.79, 2], [0.85, 2.6], [0.90, 3.5], [0.94, 5], [1.0, 8]];
  for (const [f, n] of T) if (fill <= f) return n;
  return 8;
}

function ringPoints(w, h, fill, segs = 32) {
  const n = fillToExponent(fill), a = w / 2, b = h / 2, pts = [];
  for (let i = 0; i < segs; i++) {
    const t = (i / segs) * Math.PI * 2;
    const ct = Math.cos(t), st = Math.sin(t);
    pts.push([
      Math.sign(ct) * a * Math.pow(Math.abs(ct), 2 / n),
      Math.sign(st) * b * Math.pow(Math.abs(st), 2 / n),
    ]);
  }
  return pts;
}

/* Stitch a stack of equal-length rings into one closed solid, ring order being
   the axis. Both skinned builders here — the measured loft and the generated
   wing — are rings along an axis, and two copies of the winding would be two
   chances to get the normals inside out.

   `cap0`/`cap1` are the fan centres for the two ends. The loft's rings are
   symmetric about their own axis so it passes the axis point exactly; the
   wing's sections are not, so it passes their centroid. */
function skinRings(rings, cap0, cap1) {
  const segs = rings[0].length;
  const pos = [], idx = [];
  for (const r of rings) for (const p of r) pos.push(p[0], p[1], p[2]);
  for (let k = 0; k < rings.length - 1; k++) {
    const A = k * segs, B = (k + 1) * segs;
    for (let i = 0; i < segs; i++) {
      const j = (i + 1) % segs;
      idx.push(A + i, B + i, B + j, A + i, B + j, A + j);
    }
  }
  // caps: a fan to the centre of the first and last ring
  const capStart = pos.length / 3;
  pos.push(...cap0, ...cap1);
  const last = (rings.length - 1) * segs;
  for (let i = 0; i < segs; i++) {
    const j = (i + 1) % segs;
    idx.push(capStart, j, i);
    idx.push(capStart + 1, last + i, last + j);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** mean of a ring's points, as the fan centre for an end cap */
function ringCentre(ring) {
  const c = [0, 0, 0];
  for (const p of ring) { c[0] += p[0]; c[1] += p[1]; c[2] += p[2]; }
  return c.map((v) => v / ring.length);
}

/** Skin a stack of measured sections into a closed solid, axis along +y.
 *  `span` is the part's length along that axis, in the same units. */
export function loftGeometry(sections, span, segs = 32) {
  const S = [...sections].sort((p, q) => p.at_pct - q.at_pct);
  /* Stations sit at their measured percentage of the span, stretched so the
     outermost pair lands on the ends of the part's own box. */
  const lo = S[0].at_pct, hi = S[S.length - 1].at_pct;
  const spread = Math.max(1, hi - lo);
  const rings = S.map((s) => ({
    y: ((s.at_pct - lo) / spread - 0.5) * span,
    pts: ringPoints(s.w_mm ?? s.w, s.h_mm ?? s.h, s.fill ?? 0.85, segs),
  }));
  return skinRings(
    rings.map((r) => r.pts.map(([x, z]) => [x, r.y, z])),
    [0, rings[0].y, 0], [0, rings[rings.length - 1].y, 0],
  );
}

/* ------------------------------------------------------------------ airfoil
   A wing drawn as a planform pushed through a constant thickness is a plank
   with a good outline: no leading-edge radius, no thickness distribution, and
   no way for the specification to say what section it meant. The planform is
   the one thing a specification writes well — it is a silhouette, traced off
   the top view — so the section is generated rather than authored, from a
   NACA four-digit family that needs exactly the numbers the field carries.

   The second digit, the chordwise position of maximum camber, is fixed at
   0.4. The sections in this class sit there almost without exception (2412,
   4412, 2415), and a fourth number the specification writer would have to
   guess costs more in wrong guesses than it buys in range. */
const CAMBER_POS = 0.4;

/** NACA four-digit half-thickness at chord fraction x; t is thickness/chord */
function nacaHalfThickness(x, t) {
  /* Last coefficient −0.1036, not the textbook −0.1015: that variant closes
     the trailing edge exactly at x=1. An open trailing edge leaves a slot the
     skinning cannot close, and a wing with a gap down its back is not a
     solid — it prints as two shells. */
  return 5 * t * (0.2969 * Math.sqrt(x) - 0.1260 * x - 0.3516 * x * x
    + 0.2843 * x * x * x - 0.1036 * x * x * x * x);
}

/** mean camber line and its slope at chord fraction x; m is camber/chord */
function nacaCamber(x, m) {
  if (!(m > 0)) return [0, 0];
  const p = CAMBER_POS;
  if (x < p) return [(m / (p * p)) * (2 * p * x - x * x), ((2 * m) / (p * p)) * (p - x)];
  const q = 1 - p;
  return [(m / (q * q)) * ((1 - 2 * p) + 2 * p * x - x * x), ((2 * m) / (q * q)) * (p - x)];
}

/** One closed section outline in chord fractions, [[x from LE, y], …] */
export function airfoilPoints(t, m, K = 20) {
  const up = [], lo = [];
  for (let i = 0; i <= K; i++) {
    /* Cosine spacing. The leading edge is where all the curvature is and
       where evenly spaced stations describe a section worst. */
    const x = 0.5 * (1 - Math.cos((Math.PI * i) / K));
    const yt = nacaHalfThickness(x, t);
    const [yc, dy] = nacaCamber(x, m);
    const th = Math.atan(dy);
    up.push([x - yt * Math.sin(th), yc + yt * Math.cos(th)]);
    lo.push([x + yt * Math.sin(th), yc - yt * Math.cos(th)]);
  }
  /* Leading and trailing edge belong to both surfaces. Taking each once keeps
     every ring free of the zero-area triangles a duplicated point makes. */
  return up.concat(lo.slice(1, K).reverse());
}

/** how tall the generated section stands, in chord fractions */
export function airfoilDepth(t, m) {
  const ys = airfoilPoints(t, m, 12).map((p) => p[1]);
  return Math.max(...ys) - Math.min(...ys);
}

/** chord interval [aft, forward] of a planform polygon at spanwise station x */
function chordAt(pts, x) {
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    if ((a.x <= x) === (b.x <= x)) continue;
    const y = a.y + ((b.y - a.y) * (x - a.x)) / (b.x - a.x);
    if (y < lo) lo = y;
    if (y > hi) hi = y;
  }
  return hi > lo ? [lo, hi] : null;
}

/** largest chord anywhere on the planform — what thickness_pct multiplies */
export function maxChord(pts, stations = 17) {
  const xs = pts.map((p) => p.x);
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  const inset = (x1 - x0) * 0.004;
  let best = 0;
  for (let k = 0; k < stations; k++) {
    const c = chordAt(pts, x0 + inset + ((x1 - x0 - 2 * inset) * k) / (stations - 1));
    if (c) best = Math.max(best, c[1] - c[0]);
  }
  return best;
}

/**
 * A wing: the authored planform skinned with the generated section.
 * `pts` is the recentred planform in the TOP plane — x spans, y runs along the
 * chord, and +y is forward because the compiler's TOP rotation maps the
 * section's +y onto world +z. The leading edge is therefore the planform's
 * own forward edge, and no extra field has to say which end is which.
 */
export function wingGeometry(pts, af, stations = 17) {
  const xs = pts.map((p) => p.x);
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  const span = x1 - x0;
  if (!(span > 0)) return null;
  /* Twist grows from the centreline outward, so a through-wing washes out
     symmetrically. A wing cut into a mirrored pair would measure it from the
     part's own middle instead — which is one more reason the specification
     asks for one part spanning −b/2 to +b/2. */
  const halfSpan = Math.max(Math.abs(x0), Math.abs(x1), span / 2);
  const inset = span * 0.004;   // a scanline exactly on the tip catches one point
  const section = airfoilPoints(af.thickness, af.camber);
  const rings = [];
  for (let k = 0; k < stations; k++) {
    const x = x0 + inset + ((span - 2 * inset) * k) / (stations - 1);
    const ch = chordAt(pts, x);
    if (!ch) continue;
    const chord = ch[1] - ch[0];
    if (!(chord > 0)) continue;
    const zLE = ch[1];                       // forward edge of the planform
    const zq = zLE - chord * 0.25;           // quarter chord: the twist hinge
    const tw = af.twist * Math.min(1, Math.abs(x) / halfSpan);
    const ct = Math.cos(tw), st = Math.sin(tw);
    rings.push(section.map(([xc, y]) => {
      const dz = zLE - xc * chord - zq, dy = y * chord;
      return [x, dy * ct - dz * st, zq + dy * st + dz * ct];
    }));
  }
  if (rings.length < 2) return null;
  return skinRings(rings, ringCentre(rings[0]), ringCentre(rings[rings.length - 1]));
}

/* A propeller is recognised the same way the simulator recognises one: named
   like a rotor, not named like the structure that carries it, and drawn as a
   thin cylinder. */
const PROP_RX = /로터|프로펠러|rotor|propeller|prop\b/i;
const PROP_NOT_RX = /암|arm|마운트|mount|가드|guard|붐|boom|모터|motor|덕트|duct|허브|캡|hub|cap|스피너|spinner/i;
export function isProp(r) {
  if (!PROP_RX.test(r.name || "") || PROP_NOT_RX.test(r.name || "")) return false;
  /* thin in one axis, wide in the others — works whether the spec put the
     thickness in h (TOP convention) or along the plane normal (bbox style) */
  const dims = [r.size?.w || 0, r.size?.h || 0, r.size?.d || 0];
  const dia = Math.max(...dims), thin = Math.min(...dims.filter((v) => v > 0));
  return dia > 0 && thin <= dia * 0.15;
}

/** blade count from the part name — "2엽", "3-blade" — defaulting to 2 */
export function bladeCount(r) {
  const m = /([2-6])\s*엽|([2-6])[-\s]?(?:blade|날)/i.exec(r.name || "");
  return m ? Number(m[1] || m[2]) : 2;
}

/** hub + N tapered blades as one extrusion, axis +z (FRONT-native like a disc) */
export function propellerGeometry(D, h, blades = 2) {
  const R = D / 2;
  const hubR = Math.max(R * 0.09, 9);
  const rootR = hubR * 0.8;
  const chord = Math.max(R * 0.17, 14);
  const shapes = [];
  const hub = new THREE.Shape();
  hub.absarc(0, 0, hubR, 0, Math.PI * 2, false);
  shapes.push(hub);
  for (let i = 0; i < Math.min(blades, 6); i++) {
    /* One blade drawn along +x, rotated into place by transforming its control
       points — Bézier curves are affine-invariant, so rotating the controls
       rotates the curve. Slight asymmetry front/back of the chord line gives
       the planform a working-blade look instead of a paddle. */
    const a = (i / blades) * Math.PI * 2;
    const ca = Math.cos(a), sa = Math.sin(a);
    const P = (x, y) => [x * ca - y * sa, x * sa + y * ca];
    const s = new THREE.Shape();
    s.moveTo(...P(rootR, -chord * 0.20));
    s.bezierCurveTo(...P(R * 0.30, -chord * 0.52), ...P(R * 0.72, -chord * 0.40), ...P(R * 0.94, -chord * 0.14));
    s.quadraticCurveTo(...P(R, 0), ...P(R * 0.94, chord * 0.12));
    s.bezierCurveTo(...P(R * 0.72, chord * 0.30), ...P(R * 0.30, chord * 0.42), ...P(rootR, chord * 0.20));
    s.closePath();
    shapes.push(s);
  }
  const g = new THREE.ExtrudeGeometry(shapes, { depth: h, bevelEnabled: false, curveSegments: 16 });
  g.translate(0, 0, -h / 2);
  /* native orientation matches a CYLINDER after the caller's plane rotation:
     blades in XY facing +z, so the shared axis() helper handles TOP/SIDE. */
  g.rotateX(-Math.PI / 2);
  return g;
}

/** placements for a repeated region: [x, y, z, yaw, mirror, hingeOnX]
 *  `mirror` is −1 on the reflected copy of a pair, `hingeOnX` marks the
 *  placements whose own rotation swings about the assembly centreline. */
function placements(r) {
  const c = r.center || { x: 0, y: 0, z: 0 };
  const rep = r.repeat;
  if (!rep || !(rep.count > 1)) return [[c.x, c.y, c.z, 0, 1, 0]];
  const out = [];
  const cnt = Math.min(rep.count, 32);
  if (rep.pattern === "CIRCULAR") {
    /* start_angle_deg is a compass heading: 0° = +z (forward), growing toward
       +x. The spec authors write atan(x/z) — sar-vtol's 35.26° is exactly
       atan(424/600), the boom-tip corner — so reading it as a math angle from
       +x rotated every non-square ring ~20° into thin air. */
    const rad = rep.radius || Math.hypot(c.x, c.z) || 10;
    const a0 = rep.startAngle || 0;
    if (cnt === 4) {
      /* Four corners mirrored in both axes, not stepped 90° around the circle:
         a lift quad sits at (±r·sin a0, ±r·cos a0), and equal 90° steps can
         only ever produce a square — the corners of the 848×1200 boom
         rectangle are NOT 90° apart on their circumscribed circle. A square
         ring (a0 = 45°) lands on the same four points either way, so the
         multicopter samples are unchanged. */
      const px = Math.abs(Math.sin(a0)) * rad, pz = Math.abs(Math.cos(a0)) * rad;
      for (const [sx, sz] of [[1, 1], [-1, 1], [-1, -1], [1, -1]]) {
        out.push([sx * px, c.y, sz * pz, -Math.atan2(sz * pz, sx * px), 1, 0]);
      }
    } else {
      for (let i = 0; i < cnt; i++) {
        const phi = Math.PI / 2 - (a0 + (i / cnt) * Math.PI * 2);
        out.push([Math.cos(phi) * rad, c.y, Math.sin(phi) * rad, -phi, 1, 0]);
      }
    }
  } else if (rep.pattern === "MIRROR_PAIR") {
    /* spacing is the centre-to-centre distance across the x axis. The old
       code mirrored the part's own centre.x — which the spec authors set to 0
       with the offset in spacing_mm, so both booms and both landing skids
       compiled into the same spot inside the fuselage. */
    const off = rep.spacing ? rep.spacing / 2 : Math.abs(c.x);
    out.push([off, c.y, c.z, 0, 1, 1], [-off, c.y, c.z, 0, -1, 1]);
  } else if (rep.pattern === "GRID") {
    const sp = rep.spacing || 20, k = Math.ceil(Math.sqrt(cnt));
    for (let i = 0; i < cnt; i++) {
      out.push([c.x + ((i % k) - (k - 1) / 2) * sp, c.y, c.z + (Math.floor(i / k) - (k - 1) / 2) * sp, 0, 1, 0]);
    }
  } else {
    const sp = rep.spacing || 20;
    for (let i = 0; i < cnt; i++) out.push([c.x + (i - (cnt - 1) / 2) * sp, c.y, c.z, 0, 1, 0]);
  }
  return out;
}

/* ------------------------------------------------------- instance transform
   Where one copy of a part ends up, position and orientation together.

   Two rotations meet here and the order is the whole point. The part's own
   rotation_deg is written in the part's frame — a rotor tilt, a canted leg, a
   dihedral — so it has to happen BEFORE the placement yaw carries the part
   around its ring. Composed the other way, six tilted arms all lean north
   instead of all leaning outward. Quaternions rather than an Euler triple, so
   the order is stated here instead of inherited from a default.

   MIRROR_PAIR hinges on the mirror plane instead of the part's own centre:
   two halves swung about the aircraft centreline is what a dihedral angle IS,
   and rotating each half about its own middle would lift the tip while
   dropping the root out of the fuselage. Reflecting a rotation across x=0
   negates its y and z components and leaves x alone, which is why the pair
   splays symmetrically rather than both leaning the same way. */
function instanceXform(r, entry) {
  const [x, y, z, yaw0, mirror, hinge] = entry;
  const yaw = yaw0 + (r.quarterTurn ? Math.PI / 2 : 0);
  const rot = r.rotation;
  const rotated = !!rot && !!(rot.x || rot.y || rot.z);
  const q = new THREE.Quaternion();
  const pos = new THREE.Vector3(x, y, z);
  if (rotated) {
    q.setFromEuler(new THREE.Euler(rot.x, rot.y * mirror, rot.z * mirror, "XYZ"));
    if (hinge) pos.set(x, 0, 0).applyQuaternion(q).add(new THREE.Vector3(0, y, z));
  }
  if (yaw) q.premultiply(new THREE.Quaternion().setFromAxisAngle(YAXIS, yaw));
  return { pos, q, rotated, yaw };
}

/** Build the model the generated code describes. */
export function buildFromAnalysis(analysis) {
  const root = new THREE.Group();
  root.name = (analysis.productName || "model").replace(/[^\w가-힣-]/g, "_").slice(0, 32);
  const byRegion = new Map();
  for (const f of analysis.features || []) {
    if (!byRegion.has(f.regionId)) byRegion.set(f.regionId, []);
    byRegion.get(f.regionId).push(f);
  }

  for (const r of analysis.regions || []) {
    r.__features = byRegion.get(r.regionId) || [];
    let geo;
    try { geo = buildGeometry(r); } catch { continue; }
    const m = r.material || {};
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(m.color || "#9aa0aa"),
      metalness: m.metalness != null ? m.metalness : 0.75,
      roughness: m.roughness != null ? m.roughness : 0.35,
      // a glass jar rendered opaque reads as painted plastic
      transparent: !!m.transparent,
      opacity: m.transparent ? (m.opacity ?? 0.45) : 1,
      side: m.transparent ? THREE.DoubleSide : THREE.FrontSide,
    });
    for (const entry of placements(r)) {
      const t = instanceXform(r, entry);
      const mesh = new THREE.Mesh(t.yaw || t.rotated ? geo.clone() : geo, mat);
      mesh.position.copy(t.pos);
      /* An unrotated part keeps the plain Euler assignment it always had, so
         nothing about the existing samples changes shape or byte order. */
      if (t.rotated) mesh.quaternion.copy(t.q);
      else if (t.yaw) mesh.rotation.y = t.yaw;
      mesh.name = r.name || r.regionId;
      mesh.castShadow = mesh.receiveShadow = true;
      mesh.userData = {
        isPart: true, regionId: r.regionId, semanticRole: r.semanticRole,
        builder: r.builder, codeHint: r.codeHint || "",
      };
      root.add(mesh);
    }
  }
  return root;
}

/* --------------------------------------------------------------- the code
   Readable Three.js the user can lift straight out of the panel. */
export function generateThreeCode(analysis) {
  const L = [];
  const name = analysis.productName || "model";
  L.push(`// ${name}`);
  if (analysis.summary) L.push(`// ${analysis.summary}`);
  const td = analysis.targetDimensions;
  if (td) L.push(`// 전체 ${td.width} x ${td.height} x ${td.depth} mm — ${td.basis || ""}`);
  const ax = analysis.axes;
  if (ax) L.push(`// 축: X=${ax.x}, Y=${ax.y}, Z=${ax.z} · 원점은 바닥 중앙, mm`);
  L.push(`import * as THREE from "three";`);
  L.push("");

  /* The exported code has to build the same propellers the viewer shows, so
     any rotor region brings the helper along. */
  if ((analysis.regions || []).some((r) => isProp(r))) {
    L.push(`// 허브 + N엽 블레이드 — 로터 디스크 치수(지름·두께)에서 실제 프로펠러 형상을 만든다`);
    L.push(`function propellerGeometry(D, h, blades = 2) {`);
    L.push(`  const R = D / 2, hubR = Math.max(R * 0.09, 9), rootR = hubR * 0.8, chord = Math.max(R * 0.17, 14);`);
    L.push(`  const shapes = [];`);
    L.push(`  const hub = new THREE.Shape();`);
    L.push(`  hub.absarc(0, 0, hubR, 0, Math.PI * 2, false);`);
    L.push(`  shapes.push(hub);`);
    L.push(`  for (let i = 0; i < blades; i++) {`);
    L.push(`    const a = (i / blades) * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);`);
    L.push(`    const P = (x, y) => [x * ca - y * sa, x * sa + y * ca];`);
    L.push(`    const s = new THREE.Shape();`);
    L.push(`    s.moveTo(...P(rootR, -chord * 0.20));`);
    L.push(`    s.bezierCurveTo(...P(R * 0.30, -chord * 0.52), ...P(R * 0.72, -chord * 0.40), ...P(R * 0.94, -chord * 0.14));`);
    L.push(`    s.quadraticCurveTo(...P(R, 0), ...P(R * 0.94, chord * 0.12));`);
    L.push(`    s.bezierCurveTo(...P(R * 0.72, chord * 0.30), ...P(R * 0.30, chord * 0.42), ...P(rootR, chord * 0.20));`);
    L.push(`    s.closePath();`);
    L.push(`    shapes.push(s);`);
    L.push(`  }`);
    L.push(`  const g = new THREE.ExtrudeGeometry(shapes, { depth: h, bevelEnabled: false, curveSegments: 16 });`);
    L.push(`  g.translate(0, 0, -h / 2);`);
    L.push(`  g.rotateX(-Math.PI / 2);   // 축을 Y로 — CYLINDER와 같은 기본 방향`);
    L.push(`  return g;`);
    L.push(`}`);
    L.push("");
  }

  /* Same contract as the propeller helper: a wing that the viewer builds from
     a generated section has to be buildable from the copied source too, or
     the panel is showing one thing and handing over another. */
  if ((analysis.regions || []).some((r) => r.airfoil && r.plane === "TOP")) {
    L.push(`// 평면형 위에 NACA 4자리 단면을 얹어 루트→팁으로 로프트한다`);
    L.push(`// planform: 위에서 본 외곽선(x=스팬, +y=전방) · t·m은 %, twist는 팁 비틀림(도, +는 워시아웃)`);
    L.push(`function wingGeometry(planform, tPct, mPct, twistDeg, stations = 17, K = 20) {`);
    L.push(`  const t = tPct / 100, m = mPct / 100, p = 0.4;`);
    L.push(`  const yt = (x) => 5 * t * (0.2969 * Math.sqrt(x) - 0.1260 * x - 0.3516 * x ** 2`);
    L.push(`    + 0.2843 * x ** 3 - 0.1036 * x ** 4);   // -0.1036이라야 뒷전이 닫힌다`);
    L.push(`  const camber = (x) => !(m > 0) ? [0, 0]`);
    L.push(`    : x < p ? [(m / p ** 2) * (2 * p * x - x * x), (2 * m / p ** 2) * (p - x)]`);
    L.push(`    : [(m / (1 - p) ** 2) * ((1 - 2 * p) + 2 * p * x - x * x), (2 * m / (1 - p) ** 2) * (p - x)];`);
    L.push(`  const up = [], lo = [];`);
    L.push(`  for (let i = 0; i <= K; i++) {`);
    L.push(`    const x = 0.5 * (1 - Math.cos(Math.PI * i / K));   // 앞전에 점을 몰아준다`);
    L.push(`    const [yc, dy] = camber(x), th = Math.atan(dy), h = yt(x);`);
    L.push(`    up.push([x - h * Math.sin(th), yc + h * Math.cos(th)]);`);
    L.push(`    lo.push([x + h * Math.sin(th), yc - h * Math.cos(th)]);`);
    L.push(`  }`);
    L.push(`  const section = up.concat(lo.slice(1, K).reverse());`);
    L.push(`  const xs = planform.map((q) => q.x);`);
    L.push(`  const x0 = Math.min(...xs), x1 = Math.max(...xs), span = x1 - x0;`);
    L.push(`  const halfSpan = Math.max(Math.abs(x0), Math.abs(x1), span / 2), inset = span * 0.004;`);
    L.push(`  const chordAt = (x) => {`);
    L.push(`    let a = Infinity, b = -Infinity;`);
    L.push(`    for (let i = 0; i < planform.length; i++) {`);
    L.push(`      const s = planform[i], e = planform[(i + 1) % planform.length];`);
    L.push(`      if ((s.x <= x) === (e.x <= x)) continue;`);
    L.push(`      const y = s.y + (e.y - s.y) * (x - s.x) / (e.x - s.x);`);
    L.push(`      a = Math.min(a, y); b = Math.max(b, y);`);
    L.push(`    }`);
    L.push(`    return b > a ? [a, b] : null;`);
    L.push(`  };`);
    L.push(`  const rings = [];`);
    L.push(`  for (let k = 0; k < stations; k++) {`);
    L.push(`    const x = x0 + inset + (span - 2 * inset) * k / (stations - 1);`);
    L.push(`    const c = chordAt(x);`);
    L.push(`    if (!c) continue;`);
    L.push(`    const chord = c[1] - c[0], zLE = c[1], zq = zLE - chord * 0.25;   // 1/4 코드가 비틀림 힌지`);
    L.push(`    const tw = twistDeg * Math.PI / 180 * Math.min(1, Math.abs(x) / halfSpan);`);
    L.push(`    const ct = Math.cos(tw), st = Math.sin(tw);`);
    L.push(`    rings.push(section.map(([xc, y]) => {`);
    L.push(`      const dz = zLE - xc * chord - zq, dy = y * chord;`);
    L.push(`      return [x, dy * ct - dz * st, zq + dy * st + dz * ct];`);
    L.push(`    }));`);
    L.push(`  }`);
    L.push(`  const segs = rings[0].length, pos = [], idx = [];`);
    L.push(`  for (const r of rings) for (const q of r) pos.push(q[0], q[1], q[2]);`);
    L.push(`  for (let k = 0; k < rings.length - 1; k++) {`);
    L.push(`    const A = k * segs, B = (k + 1) * segs;`);
    L.push(`    for (let i = 0; i < segs; i++) {`);
    L.push(`      const j = (i + 1) % segs;`);
    L.push(`      idx.push(A + i, B + i, B + j, A + i, B + j, A + j);`);
    L.push(`    }`);
    L.push(`  }`);
    L.push(`  const cap = pos.length / 3, last = (rings.length - 1) * segs;`);
    L.push(`  for (const r of [rings[0], rings[rings.length - 1]]) {`);
    L.push(`    const c = r.reduce((a, q) => [a[0] + q[0] / r.length, a[1] + q[1] / r.length, a[2] + q[2] / r.length], [0, 0, 0]);`);
    L.push(`    pos.push(c[0], c[1], c[2]);   // 팁 마감은 단면 중심으로 부채꼴`);
    L.push(`  }`);
    L.push(`  for (let i = 0; i < segs; i++) {`);
    L.push(`    const j = (i + 1) % segs;`);
    L.push(`    idx.push(cap, j, i, cap + 1, last + i, last + j);`);
    L.push(`  }`);
    L.push(`  const g = new THREE.BufferGeometry();`);
    L.push(`  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));`);
    L.push(`  g.setIndex(idx);`);
    L.push(`  g.computeVertexNormals();`);
    L.push(`  return g;`);
    L.push(`}`);
    L.push("");
  }

  /* Korean names strip to almost nothing, so "V벨트 풀리" became buildV().
     Keep a readable identifier instead. */
  const suffix = name.replace(/[^A-Za-z0-9]/g, "").slice(0, 20);
  L.push(`export function build${suffix.length >= 3 ? suffix : "Model"}() {`);
  L.push(`  const root = new THREE.Group();`);
  L.push("");

  const byRegion = new Map();
  for (const f of analysis.features || []) {
    if (!byRegion.has(f.regionId)) byRegion.set(f.regionId, []);
    byRegion.get(f.regionId).push(f);
  }

  for (const r of analysis.regions || []) {
    const s = r.size || { w: 10, h: 10, d: 10 };
    const c = r.center || { x: 0, y: 0, z: 0 };
    const feats = byRegion.get(r.regionId) || [];
    const m = r.material || {};
    const v = r.regionId.replace(/[^A-Za-z0-9]/g, "") || "part";

    L.push(`  // ${r.name} — ${r.semanticRole}`);
    if (r.codeHint) L.push(`  // ${r.codeHint}`);
    if (r.mirrorOf) L.push(`  // ${r.mirrorOf} 와 대칭`);

    if (r.curvature) {
      const c = r.curvature;
      const bits = [];
      if (c.bottomFilletR) bits.push(`바닥 R${c.bottomFilletR}`);
      if (c.shoulderR) bits.push(`어깨 R${c.shoulderR}`);
      if (c.topR) bits.push(`상단 R${c.topR}`);
      if (c.sidewallTaperDeg) bits.push(`측벽 테이퍼 ${c.sidewallTaperDeg}°`);
      if (c.minContinuity) bits.push(`연속성 ${c.minContinuity}`);
      if (bits.length) L.push(`  // 곡률: ${bits.join(" · ")}`);
    }

    if (r.builder === "EXTRUDE_2D" && r.airfoil && r.plane === "TOP") {
      const pts = r.outerProfile?.length ? tessellate(r.outerProfile)
        : [[-s.w / 2, -s.d / 2], [s.w / 2, -s.d / 2], [s.w / 2, s.d / 2], [-s.w / 2, s.d / 2]]
          .map(([x, y]) => new THREE.Vector2(x, y));
      const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
      const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
      const cy2 = (Math.min(...ys) + Math.max(...ys)) / 2;
      const af = r.airfoil;
      L.push(`  // 평면형 ${pts.length}점 · NACA 단면 두께 ${n(af.thickness * 100, 1)}%`
        + ` · 캠버 ${n(af.camber * 100, 1)}% · 팁 비틀림 ${n((af.twist * 180) / Math.PI, 1)}°`);
      L.push(`  const ${v}Planform = [`);
      for (const p of pts) L.push(`    new THREE.Vector2(${n(p.x - cx)}, ${n(p.y - cy2)}),`);
      L.push(`  ];`);
      L.push(`  const ${v}Geo = wingGeometry(${v}Planform, ${n(af.thickness * 100, 2)}, `
        + `${n(af.camber * 100, 2)}, ${n((af.twist * 180) / Math.PI, 2)});`);
    } else if (r.builder === "EXTRUDE_2D" && r.outerProfile?.length) {
      const pts = tessellate(r.outerProfile);
      const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
      const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
      const cy2 = (Math.min(...ys) + Math.max(...ys)) / 2;
      L.push(`  // 단면 ${r.outerProfile.length}세그먼트 → ${pts.length}점, 두께 ${n(s.d)}mm로 압출`);
      L.push(`  const ${v}Pts = [`);
      for (const p of pts) L.push(`    new THREE.Vector2(${n(p.x - cx)}, ${n(p.y - cy2)}),`);
      L.push(`  ];`);
      L.push(`  const ${v}Shape = new THREE.Shape(${v}Pts);`);
      for (const f of feats) {
        if (!f.diameter) continue;
        const pos = f.position || [0, 0, 0];
        if (f.type === "CIRCULAR_HOLE_PATTERN" && f.count > 1) {
          L.push(`  // ${f.name}: ${f.count}개, PCD ${n(f.pcd || 0)}, Ø${n(f.diameter)}`);
          L.push(`  for (let i = 0; i < ${f.count}; i++) {`);
          L.push(`    const a = (i / ${f.count}) * Math.PI * 2;`);
          L.push(`    const hole = new THREE.Path();`);
          L.push(`    hole.absarc(${n(pos[0])} + Math.cos(a) * ${n((f.pcd || 0) / 2)}, ${n(pos[1])} + Math.sin(a) * ${n((f.pcd || 0) / 2)}, ${n(f.diameter / 2)}, 0, Math.PI * 2, true);`);
          L.push(`    ${v}Shape.holes.push(hole);`);
          L.push(`  }`);
        } else {
          const hv = `${v}Hole${feats.indexOf(f)}`;
          L.push(`  // ${f.name}: Ø${n(f.diameter)}`);
          L.push(`  const ${hv} = new THREE.Path();`);
          L.push(`  ${hv}.absarc(${n(pos[0])}, ${n(pos[1])}, ${n(f.diameter / 2)}, 0, Math.PI * 2, true);`);
          L.push(`  ${v}Shape.holes.push(${hv});`);
        }
      }
      L.push(`  const ${v}Geo = new THREE.ExtrudeGeometry(${v}Shape, { depth: ${n(s.d)}, bevelEnabled: false, curveSegments: 24 });`);
      L.push(`  ${v}Geo.translate(0, 0, ${n(-s.d / 2)});`);
    } else if (r.outerProfile?.length) {
      /* Outer up, inner back down: one closed polyline is the whole shell, so
         the cavity is geometry rather than a note. */
      const outer = tessellate(r.outerProfile);
      const inner = r.innerProfile?.length ? tessellate(r.innerProfile) : null;
      const kinds = [...new Set(r.outerProfile.map((s) => s.type))].join("+");
      L.push(`  // 외부 단면 ${r.outerProfile.length}세그먼트 (${kinds}) → ${outer.length}점`);
      if (inner) L.push(`  // 내부 단면 ${r.innerProfile.length}세그먼트 → ${inner.length}점, 벽이 있는 셸`);
      const all = inner ? outer.concat(inner.slice().reverse()) : outer;
      L.push(`  const ${v}Profile = [`);
      for (const p of all) L.push(`    new THREE.Vector2(${n(Math.abs(p.x))}, ${n(p.y)}),`);
      L.push(`  ];`);
      L.push(`  const ${v}Geo = new THREE.LatheGeometry(${v}Profile, 128);`);
    } else if (r.builder === "REVOLVE" && Array.isArray(r.profile) && r.profile.length >= 2) {
      L.push(`  const ${v}Profile = [`);
      for (const [rad, y] of r.profile) L.push(`    new THREE.Vector2(${n(Math.abs(rad))}, ${n(y)}),`);
      L.push(`  ];`);
      L.push(`  const ${v}Geo = new THREE.LatheGeometry(${v}Profile, 96);`);
    } else if (r.builder === "EXTRUDE_2D") {
      L.push(`  const ${v}Shape = new THREE.Shape();`);
      L.push(`  // 외곽 ${n(s.w)} x ${n(s.d)} mm, 모서리 라운드`);
      L.push(`  ${v}Shape.moveTo(${n(-s.w / 2)}, ${n(-s.d / 2)});`);
      L.push(`  ${v}Shape.lineTo(${n(s.w / 2)}, ${n(-s.d / 2)});`);
      L.push(`  ${v}Shape.lineTo(${n(s.w / 2)}, ${n(s.d / 2)});`);
      L.push(`  ${v}Shape.lineTo(${n(-s.w / 2)}, ${n(s.d / 2)});`);
      L.push(`  ${v}Shape.closePath();`);
      for (const f of feats) {
        if (!f.diameter) continue;
        if (f.type === "CIRCULAR_HOLE_PATTERN" && f.count > 1) {
          L.push(`  // ${f.name}: ${f.count}개, PCD ${n(f.pcd || 0)}, Ø${n(f.diameter)}`);
          L.push(`  for (let i = 0; i < ${f.count}; i++) {`);
          L.push(`    const a = (i / ${f.count}) * Math.PI * 2;`);
          L.push(`    const h = new THREE.Path();`);
          L.push(`    h.absarc(Math.cos(a) * ${n((f.pcd || 0) / 2)}, Math.sin(a) * ${n((f.pcd || 0) / 2)}, ${n(f.diameter / 2)}, 0, Math.PI * 2, true);`);
          L.push(`    ${v}Shape.holes.push(h);`);
          L.push(`  }`);
        } else {
          /* Numbered: a region with two holes declared the same const twice and
             the emitted source would not parse. */
          const hv = `${v}Hole${feats.indexOf(f)}`;
          L.push(`  // ${f.name}: Ø${n(f.diameter)}`);
          L.push(`  const ${hv} = new THREE.Path();`);
          L.push(`  ${hv}.absarc(0, 0, ${n(f.diameter / 2)}, 0, Math.PI * 2, true);`);
          L.push(`  ${v}Shape.holes.push(${hv});`);
        }
      }
      L.push(`  const ${v}Geo = new THREE.ExtrudeGeometry(${v}Shape, { depth: ${n(s.h)}, bevelEnabled: false, curveSegments: 24 });`);
      L.push(`  ${v}Geo.rotateX(-Math.PI / 2);`);
    } else if (r.builder === "CYLINDER") {
      const cCross = sectionOf(r, s), cDia = Math.max(...cCross);
      const cLen = r.plane === "FRONT" ? s.d : r.plane === "SIDE" ? s.w : s.h;
      if (isProp(r)) L.push(`  const ${v}Geo = propellerGeometry(${n(Math.max(s.w, s.h, s.d))}, ${n(Math.max(3, Math.min(s.w, s.h, s.d)))}, ${bladeCount(r)});`);
      else {
        L.push(`  const ${v}Geo = new THREE.CylinderGeometry(${n(cDia / 2)}, ${n(cDia / 2)}, ${n(cLen)}, 48);   // size_mm 박스의 축 방향이 길이`);
        ovalLine(L, v, cCross, cDia);
      }
      if (r.plane === "FRONT") L.push(`  ${v}Geo.rotateX(Math.PI / 2);   // 축이 전방(+z)을 향한다`);
      else if (r.plane === "SIDE") L.push(`  ${v}Geo.rotateZ(Math.PI / 2);   // 축이 좌우(x)를 향한다`);
    } else if (r.builder === "TUBE") {
      const tCross = sectionOf(r, s), tDia = Math.max(...tCross);
      const tLen = r.plane === "FRONT" ? s.d : r.plane === "SIDE" ? s.w : s.h;
      L.push(`  const ${v}Geo = new THREE.CylinderGeometry(${n(tDia / 2)}, ${n(tDia / 2)}, ${n(tLen)}, 48, 1, true);   // size_mm 박스의 축 방향이 길이`);
      ovalLine(L, v, tCross, tDia);
      if (r.plane === "FRONT") L.push(`  ${v}Geo.rotateX(Math.PI / 2);`);
      else if (r.plane === "SIDE") L.push(`  ${v}Geo.rotateZ(Math.PI / 2);`);
    } else if (r.builder === "SPHERE") {
      const sDia = Math.max(s.w, s.h, s.d);
      L.push(`  const ${v}Geo = new THREE.SphereGeometry(${n(sDia / 2)}, 40, 26);`);
      if (sDia > 0 && (s.w !== sDia || s.h !== sDia || s.d !== sDia)) {
        L.push(`  ${v}Geo.scale(${n(s.w / sDia, 4)}, ${n(s.h / sDia, 4)}, ${n(s.d / sDia, 4)});   // size_mm 박스에 맞춘 타원체`);
      }
    } else if (r.builder === "TORUS") {
      L.push(`  const ${v}Geo = new THREE.TorusGeometry(${n(Math.max(s.w, s.d) / 2)}, ${n(s.h / 2)}, 20, 48);`);
    } else if (r.builder === "CONE") {
      const kCross = sectionOf(r, s), kDia = Math.max(...kCross);
      const kLen = r.plane === "FRONT" ? s.d : r.plane === "SIDE" ? s.w : s.h;
      L.push(`  const ${v}Geo = new THREE.ConeGeometry(${n(kDia / 2)}, ${n(kLen)}, 44);`);
      ovalLine(L, v, kCross, kDia);
      if (r.plane === "FRONT") L.push(`  ${v}Geo.rotateX(Math.PI / 2);   // 축이 전방(+z)을 향한다`);
      else if (r.plane === "SIDE") L.push(`  ${v}Geo.rotateZ(Math.PI / 2);   // 축이 좌우(x)를 향한다`);
    } else {
      L.push(`  // FREEFORM: 프리미티브로 정확히 표현되지 않는 형상입니다.`);
      L.push(`  const ${v}Geo = new THREE.BoxGeometry(${n(s.w)}, ${n(s.h)}, ${n(s.d)}, 4, 4, 4);`);
    }

    L.push(`  const ${v}Mat = new THREE.MeshStandardMaterial({ color: "${m.color || "#9aa0aa"}", metalness: ${m.metalness ?? 0.75}, roughness: ${m.roughness ?? 0.35}`
      + (m.transparent ? `, transparent: true, opacity: ${m.opacity ?? 0.45}, side: THREE.DoubleSide` : "") + ` });`);
    const reps = placements(r);
    /* The same composition the viewer uses, resolved to numbers. A rotated
       part cannot be written as one yaw per instance, so those emit the full
       Euler triple; everything else keeps the single line it always had. */
    const xf = reps.map((e) => instanceXform(r, e));
    const rotated = xf.some((t) => t.rotated);
    const euler = (t) => {
      const e = new THREE.Euler().setFromQuaternion(t.q, "XYZ");
      return [n(e.x, 4), n(e.y, 4), n(e.z, 4)];
    };
    if (r.rotation) {
      const deg = (v2) => n((v2 * 180) / Math.PI, 1);
      L.push(`  // 파트 자체 회전 ${deg(r.rotation.x)}° / ${deg(r.rotation.y)}° / ${deg(r.rotation.z)}°`
        + (reps.length > 1 && r.repeat?.pattern === "MIRROR_PAIR"
          ? " — 대칭면을 힌지로 삼아 좌우가 반대로 기운다"
          : reps.length > 1 ? " — 배치 요보다 먼저 적용된다" : ""));
    }
    if (reps.length > 1) {
      const q = r.quarterTurn ? Math.PI / 2 : 0;
      L.push(`  // ${r.repeat.count}개 ${r.repeat.pattern} 배치`
        + (q ? " — 장축이 z라 바깥을 향하도록 90° 더 돌린다" : ""));
      if (rotated) {
        const rows = xf.map((t) => [n(t.pos.x, 3), n(t.pos.y, 3), n(t.pos.z, 3), ...euler(t)]);
        L.push(`  for (const [x, y, z, rx, ry, rz] of ${JSON.stringify(rows)}) {`);
        L.push(`    const mesh = new THREE.Mesh(${v}Geo, ${v}Mat);`);
        L.push(`    mesh.position.set(x, y, z); mesh.rotation.set(rx, ry, rz);`);
      } else {
        L.push(`  for (const [x, y, z, ry] of ${JSON.stringify(reps.map((p) => [...p.slice(0, 3).map((v2) => n(v2, 3)), n(p[3] + q, 4)]))}) {`);
        L.push(`    const mesh = new THREE.Mesh(${v}Geo, ${v}Mat);`);
        L.push(`    mesh.position.set(x, y, z); mesh.rotation.y = ry;`);
      }
      L.push(`    mesh.name = ${JSON.stringify(r.name)};`);
      L.push(`    root.add(mesh);`);
      L.push(`  }`);
    } else {
      L.push(`  const ${v}Mesh = new THREE.Mesh(${v}Geo, ${v}Mat);`);
      L.push(`  ${v}Mesh.position.set(${n(c.x)}, ${n(c.y)}, ${n(c.z)});`);
      if (rotated) L.push(`  ${v}Mesh.rotation.set(${euler(xf[0]).join(", ")});`);
      L.push(`  ${v}Mesh.name = ${JSON.stringify(r.name)};`);
      L.push(`  root.add(${v}Mesh);`);
    }
    L.push("");
  }

  L.push(`  return root;`);
  L.push(`}`);

  /* Capacity written next to the profile is a claim the code can check. If the
     integral disagrees with the number, the specification is wrong and says so
     rather than shipping a bottle that does not hold what the label says. */
  const cap = analysis.capacity;
  const inner = (analysis.regions || []).find((r) => r.innerProfile?.length);
  if (cap?.internalVolumeMl || inner) {
    const pts = inner ? tessellate(inner.innerProfile) : [];
    const mm3 = pts.length ? revolveVolume(pts) : 0;
    const ml = mm3 / 1000;
    L.push("");
    L.push(`// 용량 검증 — 내부 프로파일을 적분해 사양과 대조한다`);
    if (cap) {
      if (cap.internalVolumeMl) L.push(`//   사양 내부 유효 체적 ${cap.internalVolumeMl} mL`);
      if (cap.ratedFillMl) L.push(`//   정격 충전 ${cap.ratedFillMl} mL` + (cap.fillLineHeight ? ` (바닥에서 ${cap.fillLineHeight}mm)` : ""));
      if (cap.headspaceMl) L.push(`//   헤드스페이스 ${cap.headspaceMl} mL`);
      if (cap.overflowMl) L.push(`//   오버플로 ${cap.overflowMl} mL`);
    }
    if (pts.length) {
      L.push(`//   코드 계산값 ${ml.toFixed(1)} mL`);
      if (cap?.internalVolumeMl) {
        const ratio = ml / cap.internalVolumeMl;
        L.push(`//   대조 ${(ratio * 100).toFixed(0)}%`
          + (Math.abs(ratio - 1) > 0.15 ? "  ← 사양과 15% 이상 어긋납니다. 내부 프로파일을 확인하세요." : "  ← 일치"));
      }
    } else {
      L.push(`//   내부 프로파일이 없어 계산할 수 없습니다.`);
    }
    L.push(`export function verifyCapacity(profilePoints) {`);
    L.push(`  let v = 0;`);
    L.push(`  for (let i = 1; i < profilePoints.length; i++) {`);
    L.push(`    const a = profilePoints[i - 1], b = profilePoints[i];`);
    L.push(`    v += (Math.PI * (b.y - a.y) * (a.x * a.x + a.x * b.x + b.x * b.x)) / 3;`);
    L.push(`  }`);
    L.push(`  return Math.abs(v) / 1000;   // mL`);
    L.push(`}`);
  }

  /* Shape alone does not reproduce a product shot. */
  const rd = analysis.rendering;
  if (rd) {
    L.push("");
    L.push(`// 렌더링 사양`);
    L.push(`export function setupView(renderer, scene, camera) {`);
    if (rd.focalLengthMm) {
      L.push(`  // 초점거리 ${rd.focalLengthMm}mm 상당 — 35mm 환산 기준 수직 화각`);
      L.push(`  camera.fov = 2 * Math.atan(12 / ${n(rd.focalLengthMm)}) * 180 / Math.PI;`);
      L.push(`  camera.updateProjectionMatrix();`);
    }
    if (rd.viewPreset) L.push(`  // 기준 시점: ${rd.viewPreset}`);
    if (rd.hdri) L.push(`  // HDRI: ${rd.hdri}`);
    if (rd.background) L.push(`  scene.background = new THREE.Color("${/^#/.test(rd.background) ? rd.background : "#15161c"}");  // ${rd.background}`);
    if (rd.keyLight) L.push(`  // 키라이트: ${rd.keyLight}`);
    L.push(`  const key = new THREE.DirectionalLight(0xffffff, 2.6);`);
    L.push(`  key.position.set(240, 420, 260);`);
    L.push(`  key.castShadow = ${rd.contactShadow !== false};`);
    L.push(`  scene.add(key, new THREE.HemisphereLight(0xc4ccdd, 0x3a3d48, 1.15));`);
    if (rd.colorSpace) L.push(`  renderer.outputColorSpace = THREE.SRGBColorSpace;  // ${rd.colorSpace}`);
    L.push(`  renderer.toneMapping = THREE.ACESFilmicToneMapping;`);
    L.push(`  renderer.toneMappingExposure = ${n(rd.exposure || 1.6)};`);
    L.push(`}`);
  }

  return L.join("\n");
}

/* ---------------------------------------------------------------- report */
export function analysisSpecText(a) {
  const L = [];
  L.push(`${a.productName}${a.productClass ? `  ·  ${a.productClass}` : ""}`);
  if (a.summary) L.push(`  ${a.summary}`);
  L.push("");
  L.push("[좌표계]");
  L.push(`  mm · Y-up · 원점 바닥 중앙`
    + (a.axes ? `  (X=${a.axes.x}, Y=${a.axes.y}, Z=${a.axes.z})` : ""));
  if (a.targetDimensions) {
    const t = a.targetDimensions;
    L.push(`  전체 ${t.width} × ${t.height} × ${t.depth} mm — ${t.basis || "근거 미기재"}`);
  }
  L.push("");
  L.push(`[물리 바디 ${(a.bodies || []).length}]`);
  for (const b of a.bodies || []) L.push(`  ${b.bodyId} ${b.name} — ${b.rigidBodyBehavior}`);
  L.push("");
  L.push(`[의미 영역 ${(a.regions || []).length} — 코드에서 Mesh 하나가 되는 단위]`);
  for (const r of a.regions || []) {
    const s = r.size || {}, c = r.center || {};
    L.push(`  ${r.regionId} ${r.name} — ${r.semanticRole}`
      + (r.mirrorOf ? `  (${r.mirrorOf} 대칭)` : "")
      + (r.repeat?.count > 1 ? `  ×${r.repeat.count} ${r.repeat.pattern}` : ""));
    L.push(`    빌더 ${r.builder} · 치수 ${n(s.w)} × ${n(s.h)} × ${n(s.d)} mm · 중심 ${n(c.x)}, ${n(c.y)}, ${n(c.z)}`);
    if (r.rotation) {
      const deg = (v) => n((v * 180) / Math.PI, 1);
      L.push(`    회전 ${deg(r.rotation.x)}° / ${deg(r.rotation.y)}° / ${deg(r.rotation.z)}° (X/Y/Z)`);
    }
    if (r.airfoil) {
      L.push(`    에어포일 두께 ${n(r.airfoil.thickness * 100, 1)}% · 캠버 ${n(r.airfoil.camber * 100, 1)}%`
        + ` · 팁 비틀림 ${n((r.airfoil.twist * 180) / Math.PI, 1)}°`);
    }
    if (r.builder === "REVOLVE" && r.profile) L.push(`    프로파일 ${r.profile.length}점 (반경, 높이)`);
    if (r.material) L.push(`    재질 ${r.material.color} · metalness ${r.material.metalness} · roughness ${r.material.roughness}`);
    if (r.codeHint) L.push(`    코드: ${r.codeHint}`);
  }
  const fs = a.features || [];
  L.push("");
  L.push(`[피처 ${fs.length}]`);
  for (const f of fs) {
    L.push(`  ${f.featureId} ${f.name} (${f.type}) → ${f.regionId}`
      + (f.count ? ` ×${f.count}` : "") + (f.diameter ? ` Ø${f.diameter}` : "")
      + (f.pcd ? ` PCD${f.pcd}` : ""));
  }
  if ((a.editGroups || []).length) {
    L.push("");
    L.push(`[편집 그룹 ${a.editGroups.length}]`);
    for (const g of a.editGroups) L.push(`  ${g.editGroupId} ${g.name}: ${(g.regionIds || []).join(", ")}`);
  }
  const cap = a.capacity;
  if (cap && (cap.internalVolumeMl || cap.overflowMl)) {
    L.push("");
    L.push("[용량 검증]");
    if (cap.internalVolumeMl) L.push(`  내부 유효 체적 ${cap.internalVolumeMl} mL`);
    if (cap.ratedFillMl) L.push(`  정격 충전 ${cap.ratedFillMl} mL`
      + (cap.fillLineHeight ? ` · 충전선 바닥에서 ${cap.fillLineHeight} mm` : ""));
    if (cap.headspaceMl) L.push(`  헤드스페이스 ${cap.headspaceMl} mL`);
    if (cap.overflowMl) L.push(`  오버플로 ${cap.overflowMl} mL`);
    if (cap.basis) L.push(`  근거: ${cap.basis}`);
    /* The integral runs here too, so the panel disagrees with a wrong spec
       instead of repeating it back. */
    const inner = (a.regions || []).find((r) => r.innerProfile?.length);
    if (inner) {
      const ml = revolveVolume(tessellate(inner.innerProfile)) / 1000;
      L.push(`  코드 계산값 ${ml.toFixed(1)} mL`
        + (cap.internalVolumeMl
          ? ` — 사양 대비 ${((ml / cap.internalVolumeMl) * 100).toFixed(0)}%`
            + (Math.abs(ml / cap.internalVolumeMl - 1) > 0.15 ? " (15% 이상 불일치)" : " (일치)")
          : ""));
    } else {
      L.push(`  내부 프로파일이 없어 검산할 수 없습니다.`);
    }
  }

  if ((a.interfaces || []).length) {
    L.push("");
    L.push(`[파트 인터페이스 ${a.interfaces.length}]`);
    for (const i of a.interfaces) {
      L.push(`  ${i.name}: ${i.partA} ↔ ${i.partB}` + (i.fitType ? ` · ${i.fitType}` : ""));
      const d = [];
      if (i.neckOuterD) d.push(`목 외경 Ø${i.neckOuterD}`);
      if (i.neckInnerD) d.push(`목 내경 Ø${i.neckInnerD}`);
      if (i.capInnerD) d.push(`캡 내경 Ø${i.capInnerD}`);
      if (i.engagementDepth) d.push(`체결 깊이 ${i.engagementDepth}mm`);
      if (i.clearance != null) d.push(`간극 ${i.clearance}mm`);
      if (i.threadPitch) d.push(`피치 ${i.threadPitch}mm`);
      if (d.length) L.push(`    ${d.join(" · ")}`);
      if (i.partingLineWidth != null) {
        L.push(`    닫힘 이음선 ${i.partingLineWidth}mm`
          + (i.partingLineWidth >= 0.5 && i.partingLineWidth <= 1.5 ? " (제품 인상에 적정)" : " (0.5~1.5mm 권장 범위 밖)"));
      }
    }
  }

  const mf = a.manufacturing;
  if (mf && (mf.process || mf.minWallThickness)) {
    L.push("");
    L.push("[제조]");
    if (mf.process) L.push(`  공정 ${mf.process}`);
    const d = [];
    if (mf.minWallThickness) d.push(`최소 벽 두께 ${mf.minWallThickness}mm`);
    if (mf.draftAngleDeg != null) d.push(`드래프트 ${mf.draftAngleDeg}°`);
    if (mf.toleranceClass) d.push(`공차 ${mf.toleranceClass}`);
    if (d.length) L.push(`  ${d.join(" · ")}`);
    if (mf.partingLine) L.push(`  파팅라인 ${mf.partingLine}`);
    if (mf.bottomRecess) L.push(`  바닥 리세스 ${mf.bottomRecess}mm`);
    if (mf.gateZone) L.push(`  게이트 허용 영역 ${mf.gateZone}`);
    if (mf.process === "INJECTION_MOLDING" && !(mf.draftAngleDeg > 0)) {
      L.push(`  ※ 사출인데 드래프트가 0입니다. 금형에서 빠지지 않습니다.`);
    }
  }

  const dd = a.designDetails;
  if (dd && Object.values(dd).some(Boolean)) {
    L.push("");
    L.push("[디자인]");
    if (dd.labelArea) L.push(`  라벨 영역 ${dd.labelArea}`);
    if (dd.logoFace) L.push(`  로고 배치면 ${dd.logoFace}`);
    if (dd.printableArea) L.push(`  인쇄 가능 영역 ${dd.printableArea}`);
    if (dd.colorContrast) L.push(`  색상 대비 ${dd.colorContrast}`);
    if (dd.bottomRing) L.push(`  바닥 링 ${dd.bottomRing}`);
    if (dd.microSteps) L.push(`  미세 단차 ${dd.microSteps}`);
    if (dd.surfaceFinish) L.push(`  표면 마감 ${dd.surfaceFinish}`);
  }

  const rd = a.rendering;
  if (rd && Object.values(rd).some((v) => v !== undefined && v !== null && v !== "")) {
    L.push("");
    L.push("[렌더링]");
    const d = [];
    if (rd.focalLengthMm) d.push(`초점거리 ${rd.focalLengthMm}mm`);
    if (rd.viewPreset) d.push(`시점 ${rd.viewPreset}`);
    if (rd.exposure) d.push(`노출 ${rd.exposure}`);
    if (d.length) L.push(`  ${d.join(" · ")}`);
    if (rd.hdri) L.push(`  HDRI ${rd.hdri}`);
    if (rd.keyLight) L.push(`  키라이트 ${rd.keyLight}`);
    if (rd.background) L.push(`  배경 ${rd.background}`
      + (rd.contactShadow ? " · 접지 그림자 있음" : ""));
    if (rd.colorSpace) L.push(`  컬러 스페이스 ${rd.colorSpace}`);
  }

  if ((a.assumptions || []).length) {
    L.push("");
    L.push("[추론한 값]");
    for (const s of a.assumptions) L.push(`  · ${s}`);
  }
  return L.join("\n");
}
