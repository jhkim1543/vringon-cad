/* ==========================================================================
   Form measurement and silhouette extraction.

   A spec sheet written from a photograph is an estimate: the vision model reads
   proportions and guesses millimetres. Once a 3D form exists, the same sheet can
   be MEASURED instead, and the numbers stop being opinions. This module turns a
   mesh into that measurement report, and renders the orthographic silhouettes
   that let us score a rebuilt result against the form it came from.

   Nothing here asks a model anything. Names and materials are the only things
   left for the language side.
   ========================================================================== */
import * as THREE from "three";
import { worldTris, surfaceSamples, massProperties, eigenSym3 } from "./robot.js?v=8c817597";

/* ---------------------------------------------------------------- profile
   Slice along an axis and record, per slice, the p90 radius and the half
   extents. That triple is enough to tell a round part from a flat one and to
   drive a lathe or a loft directly, without a sentence in between. */
function sliceProfile(points, axis, origin, slices = 32) {
  const along = points.map((p) => p.clone().sub(origin).dot(axis));
  const lo = Math.min(...along), hi = Math.max(...along);
  const span = (hi - lo) / slices || 1;
  let u = new THREE.Vector3(1, 0, 0);
  if (Math.abs(axis.dot(u)) > 0.9) u = new THREE.Vector3(0, 1, 0);
  u = new THREE.Vector3().crossVectors(axis, u).normalize();
  const v = new THREE.Vector3().crossVectors(axis, u).normalize();

  const buckets = Array.from({ length: slices }, () => ({ r: [], a: [], b: [] }));
  points.forEach((p, i) => {
    const s = Math.min(slices - 1, Math.max(0, Math.floor((along[i] - lo) / span)));
    const rel = p.clone().sub(origin);
    const a = rel.dot(u), b = rel.dot(v);
    buckets[s].r.push(Math.hypot(a, b));
    buckets[s].a.push(Math.abs(a));
    buckets[s].b.push(Math.abs(b));
  });
  const p90 = (arr) => {
    if (!arr.length) return 0;
    const s = arr.slice().sort((x, y) => x - y);
    return s[Math.min(s.length - 1, Math.floor(s.length * 0.9))];
  };
  return buckets.map((bk, i) => ({
    t: Number((lo + (i + 0.5) * span).toFixed(2)),   // position along the axis
    r: Number(p90(bk.r).toFixed(2)),
    hx: Number(p90(bk.a).toFixed(2)),
    hz: Number(p90(bk.b).toFixed(2)),
    n: bk.r.length,
  })).filter((s) => s.n > 0);
}

/** where the cross-section changes abruptly: the natural part boundaries */
function radiusBreaks(profile) {
  const out = [];
  for (let i = 2; i < profile.length - 2; i++) {
    const prev = profile[i - 1].r, cur = profile[i].r, next = profile[i + 1].r;
    const base = Math.max(1e-3, (prev + next) / 2);
    const step = Math.abs(next - prev) / base;
    const dip = cur < prev * 0.82 && cur < next * 0.82;
    if (step > 0.28 || dip) {
      if (out.length && i - out[out.length - 1].index < 3) continue;
      out.push({
        index: i,
        at: profile[i].t,
        kind: dip ? "neck" : next > prev ? "step_out" : "step_in",
        ratio: Number((next / Math.max(1e-3, prev)).toFixed(2)),
      });
    }
  }
  return out.slice(0, 8);
}

/* ------------------------------------------------------------- upright
   Image-to-3D output does not come out standing up. The same bottle arrived
   upright on one run and lying on its side on the next, and a profile sliced
   along Y then reads long-thin cross-sections and calls a bottle a flat plate.

   The axis of revolution is whichever axis the cross-sections are roundest
   about, so measure roundness about all three and stand the form on the winner.
   A part with no round axis at all (a bracket, a plate) is left alone: turning
   it would be a guess, and nothing downstream needs it turned. */
const AXES = {
  x: new THREE.Vector3(1, 0, 0),
  y: new THREE.Vector3(0, 1, 0),
  z: new THREE.Vector3(0, 0, 1),
};

function roundnessAbout(samples, axis, bb) {
  const centre = bb.getCenter(new THREE.Vector3());
  const base = centre.clone().addScaledVector(axis, -bb.getSize(new THREE.Vector3()).dot(axis) / 2);
  const prof = sliceProfile(samples, axis, base, 24);
  const c = prof.filter((s) => s.r > 1e-6).map((s) => Math.min(s.hx, s.hz) / s.r);
  return c.length ? c.reduce((a, b) => a + b, 0) / c.length : 0;
}

/* ------------------------------------------------------- precise profiling
   The sampled profile spends its points where nothing happens. A cap came back
   as 17 points reading 37.6, 37.6, 37.6, 37.5, 37.5, 37.5, 37.5 — a dense
   description of a straight wall, and no points at all where the shape turns.

   Rays give the exact outer radius at any height, so measure densely and then
   drop the points that lie on a line. What survives is the shape: a long wall
   becomes two points, a shoulder radius keeps six. That is what a CAD profile
   looks like, and it is what the build sheet should hand to the author. */

/** perpendicular distance from p to the segment ab, in profile (r,y) space */
function segDistance(p, a, b) {
  const dx = b.r - a.r, dy = b.t - a.t;
  const len = Math.hypot(dx, dy);
  if (len < 1e-9) return Math.hypot(p.r - a.r, p.t - a.t);
  return Math.abs(dy * (p.r - a.r) - dx * (p.t - a.t)) / len;
}

/** Douglas-Peucker: keep every point that the straight line would miss */
function simplifyProfile(pts, tol) {
  if (pts.length < 3) return pts.slice();
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i, j] = stack.pop();
    let worst = 0, at = -1;
    for (let k = i + 1; k < j; k++) {
      const d = segDistance(pts[k], pts[i], pts[j]);
      if (d > worst) { worst = d; at = k; }
    }
    if (at > 0 && worst > tol) { keep[at] = 1; stack.push([i, at], [at, j]); }
  }
  return pts.filter((_, i) => keep[i]);
}

/**
 * Rotate an object so its axis of revolution points up, and report what was
 * done. Returns null when the form has no clear round axis.
 */
export function orientUpright(object) {
  object.updateWorldMatrix(true, true);
  const samples = surfaceSamples(object, 900);
  const bb = new THREE.Box3().setFromObject(object);
  const scores = Object.entries(AXES)
    .map(([name, axis]) => ({ name, axis, score: roundnessAbout(samples, axis, bb) }))
    .sort((a, b) => b.score - a.score);
  const best = scores[0];
  // y wins ties: products are authored standing, so only turn on real evidence
  const cur = scores.find((s) => s.name === "y");
  if (best.name === "y" || best.score < 0.8 || best.score - cur.score < 0.12) return null;

  const q = new THREE.Quaternion().setFromUnitVectors(best.axis, AXES.y);
  object.quaternion.premultiply(q);
  object.position.applyQuaternion(q);
  object.updateWorldMatrix(true, true);
  return { from: best.name, roundness: Number(best.score.toFixed(3)) };
}

/**
 * Deterministic measurement of a form. Everything in millimetres.
 */
/* Name what the profile segments actually are. A spec sheet that says
   "y=62.8~65.0, 반경 37.6→37.5" makes the author transcribe coordinates; one
   that says "챔퍼 0.5mm × 45°" makes it build the feature. The numbers come
   from the dense profile, so these are measurements, not adjectives. */
function fitArcRadius(pts) {
  // circle through first, middle and last point: enough for a fillet radius
  if (pts.length < 3) return null;
  const a = pts[0], b = pts[pts.length >> 1], c = pts[pts.length - 1];
  const d = 2 * (a.r * (b.t - c.t) + b.r * (c.t - a.t) + c.r * (a.t - b.t));
  if (Math.abs(d) < 1e-9) return null;
  const sa = a.r * a.r + a.t * a.t, sb = b.r * b.r + b.t * b.t, sc = c.r * c.r + c.t * c.t;
  const ux = (sa * (b.t - c.t) + sb * (c.t - a.t) + sc * (a.t - b.t)) / d;
  const uy = (sa * (c.r - b.r) + sb * (a.r - c.r) + sc * (b.r - a.r)) / d;
  const R = Math.hypot(a.r - ux, a.t - uy);
  return isFinite(R) && R > 0 && R < 1e4 ? R : null;
}

export function profileFeatures(profile, dense) {
  const out = [];
  const between = (t0, t1) => dense.filter((s) => s.t >= t0 - 1e-6 && s.t <= t1 + 1e-6);
  for (let i = 1; i < profile.length; i++) {
    const a = profile[i - 1], b = profile[i];
    const dr = b.r - a.r, dy = b.t - a.t;
    const len = Math.hypot(dr, dy);
    if (len < 0.15) continue;
    const deg = Math.abs((Math.atan2(Math.abs(dr), Math.abs(dy)) * 180) / Math.PI);
    const seg = between(a.t, b.t);
    const arc = seg.length >= 4 ? fitArcRadius(seg) : null;
    // an arc that hugs the chord is really a straight run
    const bow = seg.length >= 3 ? Math.max(...seg.map((p) => segDistance(p, a, b))) : 0;

    let kind, note;
    if (arc && bow > 0.08 && arc < len * 6) {
      kind = "필렛/라운드";
      note = `R${arc.toFixed(1)}`;
    } else if (Math.abs(dy) < 0.4 && Math.abs(dr) > 0.4) {
      kind = dr > 0 ? "단차(확대)" : "단차(축소)";
      note = `반경 ${a.r.toFixed(1)}→${b.r.toFixed(1)} (${Math.abs(dr).toFixed(1)}mm)`;
    } else if (Math.abs(dr) < 0.25) {
      kind = "직선 벽";
      note = `반경 ${b.r.toFixed(1)}, 길이 ${Math.abs(dy).toFixed(1)}mm`;
    } else if (len < 3 && deg > 20 && deg < 70) {
      kind = "챔퍼";
      note = `${len.toFixed(1)}mm × ${deg.toFixed(0)}°`;
    } else {
      kind = "테이퍼";
      note = `${deg.toFixed(1)}° (반경 ${a.r.toFixed(1)}→${b.r.toFixed(1)})`;
    }
    out.push({ from: Number(a.t.toFixed(1)), to: Number(b.t.toFixed(1)), kind, note });
  }
  /* Collapse runs of identical straight wall so the list reads as features
     rather than as the profile printed a second time. */
  const merged = [];
  for (const f of out) {
    const last = merged[merged.length - 1];
    if (last && last.kind === "직선 벽" && f.kind === "직선 벽" && last.note === f.note) last.to = f.to;
    else merged.push({ ...f });
  }
  return merged.slice(0, 24);
}

/**
 * Outer profile by raycast: exact radius and half-extents at each height, then
 * simplified so every surviving point marks a real change in the section.
 */
export function preciseProfile(object, opts = {}) {
  object.updateWorldMatrix(true, true);
  const bb = new THREE.Box3().setFromObject(object);
  const c = bb.getCenter(new THREE.Vector3());
  const size = bb.getSize(new THREE.Vector3());
  const tris = worldTris(object, opts.triCap || 600000);
  if (tris.length < 36) return null;
  // a NaN vertex poisons every bucket bound and every ray test downstream
  if (![size.x, size.y, size.z, c.x, c.y, c.z].every(Number.isFinite)) return null;

  const SLABS = 96;
  const { buckets, span } = heightIndex(tris, bb.min.y, bb.max.y, SLABS);
  const slabOf = (y) => Math.max(0, Math.min(SLABS - 1, Math.floor((y - bb.min.y) / span)));

  const N = opts.levels || 240;
  const angles = opts.angles || 16;
  const dirs = Array.from({ length: angles }, (_, i) => {
    const t = (i / angles) * Math.PI * 2;
    return [Math.cos(t), Math.sin(t)];
  });

  const dense = [];
  for (let i = 0; i < N; i++) {
    const t = (size.y * (i + 0.5)) / N;
    const y = bb.min.y + t;
    const list = buckets[slabOf(y)];
    const radii = [], xs = [], zs = [];
    for (const [dx, dz] of dirs) {
      const hits = hitDistances(tris, list, c.x, y, c.z, dx, 0, dz);
      if (!hits.length) continue;
      const r = hits[hits.length - 1];               // the outermost surface
      radii.push(r);
      xs.push(Math.abs(r * dx));
      zs.push(Math.abs(r * dz));
    }
    if (radii.length < angles * 0.5) continue;
    dense.push({
      t: Number(t.toFixed(2)),
      r: Number(median(radii).toFixed(2)),
      hx: Number(Math.max(...xs).toFixed(2)),
      hz: Number(Math.max(...zs).toFixed(2)),
      n: radii.length,
    });
  }
  if (dense.length < 4) return null;

  /* Tolerance scales with the part: 0.35% of the largest dimension keeps a
     0.3mm bead on a 90mm bottle and does not shatter a straight wall into
     dozens of points. Capped so a large part still resolves fine detail. */
  const tol = Math.min(0.6, Math.max(0.12, Math.max(size.x, size.y, size.z) * 0.0035));
  let out = simplifyProfile(dense, tol);
  // a very plain form still deserves enough points to drive a lathe
  if (out.length < 8) out = simplifyProfile(dense, tol / 3);
  return { profile: out, dense, tol: Number(tol.toFixed(2)) };
}

export function measureForm(object, opts = {}) {
  const m = measureShell(object, opts);
  /* Replace the sampled profile with the ray-measured one. Sampling put points
     where samples happened to land; rays put them where the shape changes. */
  try {
    const p = opts.skipPrecise ? null : preciseProfile(object, opts);
    if (p) {
      m.profile = p.profile;
      m.denseProfile = p.dense;
      m.profileTol = p.tol;
      m.breaks = radiusBreaks(p.profile);
      m.features = profileFeatures(p.profile, p.dense);
    }
  } catch (e) { console.warn("precise profile failed", e); }
  /* The cavity is part of the measurement, not an afterthought: without it every
     container is authored as a solid block. It needs the outer profile first, so
     it runs here rather than inside measureShell. */
  try { m.interior = opts.skipInterior ? null : measureInterior(object, m, opts); }
  catch (e) { console.warn("interior measure failed", e); m.interior = null; }
  return m;
}

function measureShell(object, opts = {}) {
  object.updateWorldMatrix(true, true);
  const bb = new THREE.Box3().setFromObject(object);
  const size = bb.getSize(new THREE.Vector3());
  const centre = bb.getCenter(new THREE.Vector3());
  const samples = surfaceSamples(object, opts.samples || 1600);
  const tris = worldTris(object, 400000);
  const mp = massProperties(tris);

  // principal axes of the surface cloud, so the profile runs along the form
  const mean = samples.reduce((a, p) => a.add(p.clone()), new THREE.Vector3())
    .multiplyScalar(1 / Math.max(1, samples.length));
  const cov = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (const p of samples) {
    const r = p.clone().sub(mean);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) cov[i][j] += r.getComponent(i) * r.getComponent(j);
  }
  const eig = eigenSym3(cov);

  /* Profile along Y first: products are authored standing up, and a lathe
     profile is only useful in that frame. Keep the principal axis as extra
     information rather than as the slicing direction. */
  const yAxis = new THREE.Vector3(0, 1, 0);
  const profile = sliceProfile(samples, yAxis, new THREE.Vector3(centre.x, bb.min.y, centre.z), opts.slices || 32);
  const breaks = radiusBreaks(profile);

  // roundness: 1.0 for a circle, 0.71 for a square, low for a flat sheet
  const circ = profile.filter((s) => s.r > 1e-6)
    .map((s) => Math.min(s.hx, s.hz) / s.r);
  const roundness = circ.length ? circ.reduce((a, b) => a + b, 0) / circ.length : 0;

  return {
    overall: {
      width: Number(size.x.toFixed(1)),
      height: Number(size.y.toFixed(1)),
      depth: Number(size.z.toFixed(1)),
      basis: "3D 형상 실측",
    },
    volumeMm3: Number(mp.volume.toFixed(0)),
    centreOfMass: mp.com.toArray().map((v) => Number(v.toFixed(2))),
    principalAxis: eig.vectors[0].toArray().map((v) => Number(v.toFixed(3))),
    elongation: Number((Math.sqrt(eig.values[0] / Math.max(1e-9, eig.values[1]))).toFixed(2)),
    roundness: Number(roundness.toFixed(3)),
    formClass: roundness > 0.9 ? "회전체" : roundness > 0.6 ? "각형" : "판형",
    profile,
    breaks,
    triangles: Math.round(tris.length / 9),
  };
}

/* ---------------------------------------------------------------- interior
   The outer profile alone builds a solid lump. A 300ml bottle measured that way
   came out weighing 1.94kg, because nothing had ever looked inside it.

   Firing rays outward from the axis settles it without any guessing. A ray that
   starts inside solid material exits through one surface; a ray that starts in a
   cavity crosses the inner wall and then the outer wall. So the hit COUNT says
   whether this height is hollow, and the first two hit distances give the bore
   radius and the wall thickness directly.

   THREE.Raycaster is the wrong tool here: it tests every triangle in the mesh
   per ray, and 384 rays against a few hundred thousand triangles froze the tab
   outright. These rays are all horizontal, so bucketing the triangle soup by
   height means each ray only ever sees the slab it travels through. Möller
   Trumbore without the backface cull, since a ray leaving a cavity necessarily
   strikes the outer wall from behind. */
function median(a) {
  if (!a.length) return 0;
  const s = a.slice().sort((x, y) => x - y);
  const h = s.length >> 1;
  return s.length % 2 ? s[h] : (s[h - 1] + s[h]) / 2;
}

/** triangle indices bucketed by the height slabs they span */
function heightIndex(tris, minY, maxY, slabs) {
  const span = (maxY - minY) / slabs || 1;
  const buckets = Array.from({ length: slabs }, () => []);
  for (let i = 0; i < tris.length; i += 9) {
    const lo = Math.min(tris[i + 1], tris[i + 4], tris[i + 7]);
    const hi = Math.max(tris[i + 1], tris[i + 4], tris[i + 7]);
    const a = Math.max(0, Math.min(slabs - 1, Math.floor((lo - minY) / span)));
    const b = Math.max(0, Math.min(slabs - 1, Math.floor((hi - minY) / span)));
    for (let k = a; k <= b; k++) buckets[k].push(i);
  }
  return { buckets, span };
}

/** distances from origin along dir to every triangle in `list`, sorted */
function hitDistances(tris, list, ox, oy, oz, dx, dy, dz) {
  const out = [];
  for (let n = 0; n < list.length; n++) {
    const i = list[n];
    const ax = tris[i], ay = tris[i + 1], az = tris[i + 2];
    const e1x = tris[i + 3] - ax, e1y = tris[i + 4] - ay, e1z = tris[i + 5] - az;
    const e2x = tris[i + 6] - ax, e2y = tris[i + 7] - ay, e2z = tris[i + 8] - az;
    const px = dy * e2z - dz * e2y, py = dz * e2x - dx * e2z, pz = dx * e2y - dy * e2x;
    const det = e1x * px + e1y * py + e1z * pz;
    if (det > -1e-9 && det < 1e-9) continue;          // parallel; no cull otherwise
    const inv = 1 / det;
    const tx = ox - ax, ty = oy - ay, tz = oz - az;
    const u = (tx * px + ty * py + tz * pz) * inv;
    if (u < 0 || u > 1) continue;
    const qx = ty * e1z - tz * e1y, qy = tz * e1x - tx * e1z, qz = tx * e1y - ty * e1x;
    const v = (dx * qx + dy * qy + dz * qz) * inv;
    if (v < 0 || u + v > 1) continue;
    const t = (e2x * qx + e2y * qy + e2z * qz) * inv;
    if (t > 1e-6) out.push(t);
  }
  return out.sort((a, b) => a - b);
}

/**
 * Measure the cavity of a form: bore radius by height, wall thickness, where it
 * opens, and the capacity that follows. Returns null for a solid part.
 */
export function measureInterior(object, m = null, opts = {}) {
  object.updateWorldMatrix(true, true);
  const bb = new THREE.Box3().setFromObject(object);
  const c = bb.getCenter(new THREE.Vector3());
  const size = bb.getSize(new THREE.Vector3());

  const tris = worldTris(object, 600000);
  if (tris.length < 36) return null;
  const SLABS = 48;
  const { buckets, span } = heightIndex(tris, bb.min.y, bb.max.y, SLABS);
  const slabOf = (y) => Math.max(0, Math.min(SLABS - 1, Math.floor((y - bb.min.y) / span)));

  const angles = opts.angles || 12;
  const dirs = Array.from({ length: angles }, (_, i) => {
    const t = (i / angles) * Math.PI * 2;
    return [Math.cos(t), Math.sin(t)];
  });

  /* Walk our own ladder of heights rather than the outer profile's slices. That
     list comes from surface sampling and is sparse wherever few samples landed
     — on a lathe it skipped from 1.6mm to 20.3mm — which put the cavity floor
     17mm too high and lost 20% of the capacity. Rays need no samples. */
  const LEVELS = opts.levels || 64;
  const heights = Array.from({ length: LEVELS }, (_, i) => (size.y * (i + 0.5)) / LEVELS);

  const cavity = [];
  const walls = [];
  for (const s of heights.map((t) => ({ t }))) {
    const y = bb.min.y + s.t;
    const list = buckets[slabOf(y)];
    const bores = [], thicks = [];
    for (const [dx, dz] of dirs) {
      const hits = hitDistances(tris, list, c.x, y, c.z, dx, 0, dz);
      if (hits.length >= 2 && hits[1] - hits[0] > 0.05) {
        bores.push(hits[0]);
        thicks.push(hits[1] - hits[0]);
      }
    }
    // a height counts as hollow only if most directions agree it is
    const hollow = bores.length >= angles * 0.6;
    const bore = hollow ? median(bores) : 0;
    if (hollow && bore > 0.4) walls.push(median(thicks));
    cavity.push({ t: s.t, r: Number(bore.toFixed(2)), hollow });
  }

  const hollowSlices = cavity.filter((s) => s.hollow && s.r > 0.4);
  if (hollowSlices.length < 3) return null;

  // capacity from the bore profile: stacked discs, the way a mould shop reads it
  let vol = 0;
  for (let i = 1; i < cavity.length; i++) {
    const a = cavity[i - 1], b = cavity[i];
    if (!a.hollow && !b.hollow) continue;
    vol += Math.PI * ((a.r * a.r + b.r * b.r) / 2) * (b.t - a.t);
  }

  const top = hollowSlices[hollowSlices.length - 1];
  const bottom = hollowSlices[0];
  /* Which end is open: shoot along the axis from outside. The first surface the
     ray meets is the cavity floor rather than a lid when that end is open.
     Two rays only, so the whole soup is cheap enough to test directly. */
  const all = [];
  for (let i = 0; i < tris.length; i += 9) all.push(i);
  const reach = size.y + 10;
  const openEnd = (fromTop) => {
    const oy = fromTop ? bb.max.y + reach : bb.min.y - reach;
    const hits = hitDistances(tris, all, c.x, oy, c.z, 0, fromTop ? -1 : 1, 0);
    if (!hits.length) return true;
    const firstY = (fromTop ? oy - hits[0] : oy + hits[0]) - bb.min.y;
    return fromTop ? firstY < top.t + 1 : firstY > bottom.t - 1;
  };
  let opening = null;
  if (openEnd(true)) opening = "top";
  else if (openEnd(false)) opening = "bottom";

  return {
    cavity,
    opening,
    boreMax: Number(Math.max(...hollowSlices.map((s) => s.r)).toFixed(2)),
    cavityFloor: Number(bottom.t.toFixed(1)),
    cavityTop: Number(top.t.toFixed(1)),
    wallMean: Number(median(walls).toFixed(2)),
    wallMin: Number(Math.min(...walls).toFixed(2)),
    wallMax: Number(Math.max(...walls).toFixed(2)),
    capacityMl: Number((vol / 1000).toFixed(1)),
  };
}

/** the interior section of the measurement report */
function interiorText(inner) {
  const L = [];
  L.push("");
  L.push("내부 실측 (축에서 방사 레이캐스트, 히트 2회 = 내벽·외벽):");
  L.push(`  내부가 비어 있습니다. 개구부 ${inner.opening === "top" ? "상단" : inner.opening === "bottom" ? "하단" : "없음(밀폐)"}`
    + `, 최대 보어 반경 ${inner.boreMax}mm, 공동 높이 ${inner.cavityFloor}~${inner.cavityTop}mm`);
  L.push(`  벽 두께 ${inner.wallMin}~${inner.wallMax}mm (중앙값 ${inner.wallMean}mm), 실측 용적 ${inner.capacityMl}ml`);
  L.push("  높이별 보어 반경 (0이면 그 높이는 속이 찬 구간):");
  const step = Math.max(1, Math.round(inner.cavity.length / 14));
  for (let i = 0; i < inner.cavity.length; i += step) {
    const s = inner.cavity[i];
    L.push(`    y=${s.t.toFixed(1)}  보어r=${s.r.toFixed(1)}`);
  }
  L.push("");
  L.push("  ※ 이 파트는 **속이 빈 셸**입니다. lathe 프로파일을 바깥면만 그리면 통짜 덩어리가 되어");
  L.push("     질량이 실제의 수십 배가 됩니다. 프로파일을 다음 순서로 한 붓에 그리십시오:");
  L.push("     바닥 중심 [0,0] → 외벽을 따라 위로 → 림 바깥 → 림 안쪽(보어 반경) → 내벽을 따라 아래로");
  L.push(`     → 공동 바닥 [보어r, ${inner.cavityFloor}] → [0, ${inner.cavityFloor}]`);
  L.push("     이렇게 하면 회전체가 그대로 셸이 되고 벽 두께가 단면에 살아 있습니다.");
  return L;
}

/** the measurement report as the text a spec sheet is built from */
export function measurementText(m) {
  const L = [];
  L.push(`전체 치수: ${m.overall.width} × ${m.overall.height} × ${m.overall.depth} mm (3D 형상 실측)`);
  L.push(`형태 분류: ${m.formClass} (원형도 ${m.roundness}, 세장비 ${m.elongation})`);
  L.push(`부피 ${(m.volumeMm3 / 1000).toFixed(1)} cm³, 무게중심 ${m.centreOfMass.join(", ")} mm`);
  L.push("");
  /* r is a RADIUS. A build sheet that copied these numbers into a lathe as
     diameters produced a bottle twice as wide, so the units are spelled out
     next to the numbers rather than left to be inferred. */
  L.push(`※ 아래 r은 **반경**입니다. 지름은 2r입니다. lathe profile의 첫 값에는 r을 그대로 넣습니다.`);
  L.push(`   참고: 이 형상의 최대 반경은 ${Math.max(...m.profile.map((s) => s.r)).toFixed(1)}mm, `
    + `즉 최대 지름 ${(Math.max(...m.profile.map((s) => s.r)) * 2).toFixed(1)}mm이고 `
    + `전체 폭 실측치 ${m.overall.width}mm와 일치해야 합니다.`);
  L.push("높이별 단면 실측 (바닥 기준 높이, 반경, 반폭X, 반폭Z):");
  const step = Math.max(1, Math.round(m.profile.length / 16));
  for (let i = 0; i < m.profile.length; i += step) {
    const s = m.profile[i];
    L.push(`  y=${s.t.toFixed(1)}  r=${s.r.toFixed(1)}  hx=${s.hx.toFixed(1)}  hz=${s.hz.toFixed(1)}`);
  }
  if (m.features?.length) {
    L.push("");
    L.push(`형상 특징 실측 (프로파일 단순화 공차 ${m.profileTol}mm, 각 항목은 측정값):`);
    for (const f of m.features) {
      L.push(`  y=${f.from}~${f.to}  ${f.kind}  ${f.note}`);
    }
    L.push("  위 특징을 프로파일 좌표로 그대로 옮기십시오. 필렛은 R값만큼 점을 3~5개 찍어 곡률을 만들고,");
    L.push("  챔퍼는 두 점으로, 단차는 같은 높이의 두 점으로 표현합니다.");
  }
  if (m.breaks.length) {
    L.push("");
    L.push("단면 급변 지점 (파트 경계 후보):");
    for (const b of m.breaks) {
      const kind = b.kind === "neck" ? "잘록해짐" : b.kind === "step_out" ? "넓어짐" : "좁아짐";
      L.push(`  y=${b.at.toFixed(1)} ${kind} (비율 ${b.ratio})`);
    }
  }
  if (m.interior) L.push(...interiorText(m.interior));
  else {
    /* No cavity is a fact about the mesh, not about the product. Image-to-3D
       reconstructs the surface it can see and closes it, so a sealed bottle
       arrives as a solid lump every time. Say which of the two it is instead of
       letting the reader assume the product is solid. */
    L.push("");
    L.push("내부 실측: 공동이 검출되지 않았습니다.");
    L.push("  생성 메시는 보이는 바깥면만 복원하고 닫아버리므로, 밀폐된 제품은 항상 통짜로 나옵니다.");
    L.push("  따라서 이 결과는 '제품이 속이 찼다'는 뜻이 아니라 '메시에 잴 내부가 없다'는 뜻입니다.");
    L.push("  용기·캡·하우징·튜브처럼 속이 비어야 하는 제품이면 내부를 **설계**하십시오(실측이 아닌 추론).");
  }
  return L.join("\n");
}

/* ------------------------------------------------------------ silhouettes
   Orthographic masks along the three axes. The reference work traces the
   silhouette of its source; with a mesh in hand we can render that trace
   exactly, and later score a rebuild against it. */
const SIL_DIRS = {
  front: new THREE.Vector3(0, 0, 1),
  side: new THREE.Vector3(1, 0, 0),
  top: new THREE.Vector3(0, 1, 0),
};

export function silhouettes(renderer, object, size = 192) {
  const parent = object.parent;
  const idx = parent ? parent.children.indexOf(object) : -1;
  const tmp = new THREE.Scene();
  tmp.add(new THREE.AmbientLight(0xffffff, 1));
  tmp.add(object);                                   // an Object3D has one parent
  tmp.overrideMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  const bb = new THREE.Box3().setFromObject(object);
  const c = bb.getCenter(new THREE.Vector3());
  const s = bb.getSize(new THREE.Vector3());
  const target = new THREE.WebGLRenderTarget(size, size);
  const prevTarget = renderer.getRenderTarget();
  const out = {};

  for (const [name, dir] of Object.entries(SIL_DIRS)) {
    // frame the form with a small margin so the mask never touches the border
    const span = Math.max(
      name === "side" ? s.z : s.x,
      name === "top" ? s.z : s.y) * 1.08 || 1;
    const cam = new THREE.OrthographicCamera(-span / 2, span / 2, span / 2, -span / 2, 0.1, span * 8);
    cam.position.copy(c).addScaledVector(dir, span * 2.4);
    cam.up.set(0, name === "top" ? 0 : 1, name === "top" ? -1 : 0);
    cam.lookAt(c);
    renderer.setRenderTarget(target);
    renderer.setClearColor(0x000000, 1);
    renderer.clear();
    renderer.render(tmp, cam);
    const buf = new Uint8Array(size * size * 4);
    renderer.readRenderTargetPixels(target, 0, 0, size, size, buf);
    const mask = new Uint8Array(size * size);
    for (let i = 0; i < size * size; i++) mask[i] = buf[i * 4] > 40 ? 1 : 0;
    out[name] = { mask, size, span };
  }

  renderer.setRenderTarget(prevTarget);
  tmp.remove(object);
  if (parent) {
    if (idx >= 0) parent.children.splice(idx, 0, object); else parent.children.push(object);
    object.parent = parent;
  }
  target.dispose();
  return out;
}

/** intersection over union of two masks of equal size */
export function maskIoU(a, b) {
  if (!a || !b || a.size !== b.size) return null;
  let inter = 0, union = 0;
  for (let i = 0; i < a.mask.length; i++) {
    const x = a.mask[i], y = b.mask[i];
    if (x || y) union++;
    if (x && y) inter++;
  }
  return union ? inter / union : null;
}

/**
 * Score a rebuilt object against the form it was measured from. Rendering both
 * through the same orthographic frames makes this a real number rather than a
 * vision model's impression.
 */
export function formAgreement(renderer, built, reference, size = 192) {
  const a = silhouettes(renderer, built, size);
  const b = silhouettes(renderer, reference, size);
  const per = {};
  let sum = 0, n = 0;
  for (const k of Object.keys(SIL_DIRS)) {
    const v = maskIoU(a[k], b[k]);
    if (v != null) { per[k] = Number((v * 100).toFixed(1)); sum += v; n++; }
  }
  return { per, overall: n ? Number(((sum / n) * 100).toFixed(1)) : null };
}
