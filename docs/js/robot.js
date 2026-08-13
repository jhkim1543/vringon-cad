/* ==========================================================================
   Robot Asset Compiler — geometry in, executable structure out.

   The old engine fitted a parametric program to a measured shape. That answered
   "what does it look like". This one answers "what is it made of, how does it
   move, and will a simulator run it":

     Unstructured Geometry → Parts → Assembly Graph → Kinematics → Physics
                            → Canonical Robot Asset Graph (CIR)

   Everything here is deterministic and measured. An LLM only ever supplies
   NAMES (semantic types) — never an axis, an origin, a limit or a mass, because
   a hallucinated joint frame is worse than an honest "requiresReview".

   Units: the viewport works in millimetres, the CIR is metres/kg/radians
   (the unit contract every simulator expects), so every geometric quantity is
   converted exactly once, on the way into the CIR.
   ========================================================================== */
import * as THREE from "three";

const MM_TO_M = 0.001;
const SAMPLE_CAP = 900;          // surface samples per link — plenty for contact work
const CONTACT_BAND = 0.006;      // contact if within 0.6% of the asset diagonal

/* ---------------------------------------------------------------- linear algebra
   Symmetric 3×3 eigendecomposition by Jacobi rotation. Used for principal axes
   (part elongation, contact-patch orientation) and for inertia validation. */
export function eigenSym3(min) {
  const a = [[min[0][0], min[0][1], min[0][2]],
             [min[1][0], min[1][1], min[1][2]],
             [min[2][0], min[2][1], min[2][2]]];
  let v = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  for (let iter = 0; iter < 24; iter++) {
    let p = 0, q = 1, off = Math.abs(a[0][1]);
    if (Math.abs(a[0][2]) > off) { p = 0; q = 2; off = Math.abs(a[0][2]); }
    if (Math.abs(a[1][2]) > off) { p = 1; q = 2; off = Math.abs(a[1][2]); }
    if (off < 1e-14) break;
    const theta = 0.5 * Math.atan2(2 * a[p][q], a[q][q] - a[p][p]);
    const c = Math.cos(theta), s = Math.sin(theta);
    const rot = (m) => {
      for (let k = 0; k < 3; k++) {
        const mkp = m[k][p], mkq = m[k][q];
        m[k][p] = c * mkp - s * mkq;
        m[k][q] = s * mkp + c * mkq;
      }
    };
    rot(a);
    // symmetric update of rows
    for (let k = 0; k < 3; k++) {
      const apk = a[p][k], aqk = a[q][k];
      a[p][k] = c * apk - s * aqk;
      a[q][k] = s * apk + c * aqk;
    }
    rot(v);
  }
  const pairs = [0, 1, 2].map((i) => ({
    value: a[i][i],
    vector: new THREE.Vector3(v[0][i], v[1][i], v[2][i]).normalize(),
  })).sort((x, y) => y.value - x.value);
  return { values: pairs.map((p) => p.value), vectors: pairs.map((p) => p.vector) };
}

/* ------------------------------------------------------------------- geometry io */
function meshesOf(obj) {
  const out = [];
  obj.traverse((o) => { if (o.isMesh && o.geometry?.getAttribute("position")) out.push(o); });
  return out;
}

/** world-space triangles of a subtree, as a flat Float32Array (x,y,z ×3 per tri) */
export function worldTris(obj, cap = 40000) {
  obj.updateWorldMatrix(true, true);
  const meshes = meshesOf(obj);
  const total = meshes.reduce((n, m) => {
    const g = m.geometry;
    return n + (g.index ? g.index.count : g.getAttribute("position").count) / 3;
  }, 0);
  const stride = Math.max(1, Math.ceil(total / cap));
  const out = [];
  const v = new THREE.Vector3();
  for (const m of meshes) {
    const g = m.geometry;
    const pos = g.getAttribute("position");
    const idx = g.index;
    const count = idx ? idx.count : pos.count;
    for (let t = 0, tri = 0; t < count; t += 3, tri++) {
      if (tri % stride) continue;
      for (let k = 0; k < 3; k++) {
        const i = idx ? idx.getX(t + k) : t + k;
        v.fromBufferAttribute(pos, i).applyMatrix4(m.matrixWorld);
        out.push(v.x, v.y, v.z);
      }
    }
  }
  return new Float32Array(out);
}

/** Area-weighted surface samples in world space.
    One centroid per triangle is far too sparse where it matters most: a box has
    twelve triangles, so its mating face would contribute two points and contact
    detection would miss a face that is physically flush. Points are therefore
    spread across each triangle in proportion to its area, which keeps big flat
    faces (exactly the ones that mate) densely covered. */
export function surfaceSamples(obj, cap = SAMPLE_CAP) {
  const tris = worldTris(obj, 4000);
  const n = tris.length / 9;
  if (!n) return [];
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const ab = new THREE.Vector3(), ac = new THREE.Vector3();
  const areas = new Float64Array(n);
  let totalArea = 0;
  for (let t = 0; t < n; t++) {
    const i = t * 9;
    a.set(tris[i], tris[i + 1], tris[i + 2]);
    b.set(tris[i + 3], tris[i + 4], tris[i + 5]);
    c.set(tris[i + 6], tris[i + 7], tris[i + 8]);
    areas[t] = ab.subVectors(b, a).cross(ac.subVectors(c, a)).length() / 2;
    totalArea += areas[t];
  }
  if (!(totalArea > 0)) return [];
  // deterministic low-discrepancy barycentric pattern
  const PATTERN = [[1 / 3, 1 / 3], [0.6, 0.2], [0.2, 0.6], [0.2, 0.2],
    [0.45, 0.1], [0.1, 0.45], [0.45, 0.45], [0.7, 0.15], [0.15, 0.7], [0.1, 0.1]];
  const pts = [];
  for (let t = 0; t < n; t++) {
    const want = Math.max(1, Math.round(cap * areas[t] / totalArea));
    const i = t * 9;
    a.set(tris[i], tris[i + 1], tris[i + 2]);
    b.set(tris[i + 3], tris[i + 4], tris[i + 5]);
    c.set(tris[i + 6], tris[i + 7], tris[i + 8]);
    ab.subVectors(b, a); ac.subVectors(c, a);
    for (let k = 0; k < want; k++) {
      let [u, v] = PATTERN[k % PATTERN.length];
      if (k >= PATTERN.length) {                 // refine on later passes
        const s = 1 / (2 + Math.floor(k / PATTERN.length));
        u = (u + s) % 1; v = (v + s) % 1;
        if (u + v > 1) { u = 1 - u; v = 1 - v; }
      }
      pts.push(new THREE.Vector3(
        a.x + ab.x * u + ac.x * v,
        a.y + ab.y * u + ac.y * v,
        a.z + ab.z * u + ac.z * v));
    }
  }
  return pts;
}

/** exact volume / centroid / covariance of a closed triangle soup (mm units) */
export function massProperties(tris) {
  let vol = 0;
  const cent = new THREE.Vector3();
  // covariance accumulated about the origin
  const C = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const canon = [[2, 1, 1], [1, 2, 1], [1, 1, 2]];
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const cross = new THREE.Vector3();
  for (let i = 0; i < tris.length; i += 9) {
    a.set(tris[i], tris[i + 1], tris[i + 2]);
    b.set(tris[i + 3], tris[i + 4], tris[i + 5]);
    c.set(tris[i + 6], tris[i + 7], tris[i + 8]);
    const dv = cross.crossVectors(b, c).dot(a) / 6;   // signed tetra volume
    vol += dv;
    cent.addScaledVector(a, dv / 4).addScaledVector(b, dv / 4).addScaledVector(c, dv / 4);
    // A = [a b c] columns; C += det * A · Ccanon · Aᵀ
    const A = [[a.x, b.x, c.x], [a.y, b.y, c.y], [a.z, b.z, c.z]];
    const det6 = dv * 6;
    for (let r = 0; r < 3; r++) {
      for (let s = 0; s < 3; s++) {
        let acc = 0;
        for (let p = 0; p < 3; p++) {
          for (let q = 0; q < 3; q++) acc += canon[p][q] * A[r][p] * A[s][q];
        }
        C[r][s] += det6 * acc / 120;
      }
    }
  }
  if (vol < 0) {                                  // inward-facing normals
    vol = -vol; cent.negate();
    for (let r = 0; r < 3; r++) for (let s = 0; s < 3; s++) C[r][s] = -C[r][s];
  }
  const com = vol > 1e-9 ? cent.multiplyScalar(1 / vol) : new THREE.Vector3();
  // shift covariance to the centre of mass
  for (let r = 0; r < 3; r++) {
    for (let s = 0; s < 3; s++) {
      C[r][s] -= vol * com.getComponent(r) * com.getComponent(s);
    }
  }
  return { volume: vol, com, covariance: C };
}

/** Open-edge count over the FULL topology of a subtree.
    Watertightness must never be judged from a subsampled triangle soup — every
    dropped triangle fakes an open edge — so this walks the real index buffers.
    Topology is transform-invariant, so local coordinates are fine. */
export function openEdgesOfObject(obj, limit = 700000) {
  const meshes = meshesOf(obj);
  const total = meshes.reduce((n, m) => {
    const g = m.geometry;
    return n + (g.index ? g.index.count : g.getAttribute("position").count) / 3;
  }, 0);
  if (total > limit) return { open: 0, total: 0, unknown: true };
  const edges = new Map();
  const q = 1e4;                                   // 0.0001 unit weld
  for (const m of meshes) {
    const g = m.geometry;
    const pos = g.getAttribute("position");
    const idx = g.index;
    const count = idx ? idx.count : pos.count;
    const key = new Map();
    const wid = (i) => {
      const k = `${Math.round(pos.getX(i) * q)},${Math.round(pos.getY(i) * q)},${Math.round(pos.getZ(i) * q)}`;
      let w = key.get(k);
      if (w === undefined) { w = key.size; key.set(k, w); }
      return w;
    };
    for (let t = 0; t < count; t += 3) {
      const v = [0, 1, 2].map((k) => wid(idx ? idx.getX(t + k) : t + k));
      for (let e = 0; e < 3; e++) {
        const a = v[e], b = v[(e + 1) % 3];
        const p = a < b ? `${a}|${b}` : `${b}|${a}`;
        edges.set(p, (edges.get(p) || 0) + 1);
      }
    }
  }
  let open = 0;
  for (const n of edges.values()) if (n !== 2) open++;
  return { open, total: edges.size, unknown: false };
}

/** open-edge count of a triangle soup (only valid when the soup is complete) */
export function openEdges(tris) {
  const key = (x, y, z) => `${Math.round(x * 100)},${Math.round(y * 100)},${Math.round(z * 100)}`;
  const edges = new Map();
  for (let i = 0; i < tris.length; i += 9) {
    const v = [0, 3, 6].map((o) => key(tris[i + o], tris[i + o + 1], tris[i + o + 2]));
    for (let e = 0; e < 3; e++) {
      const p = [v[e], v[(e + 1) % 3]].sort().join("|");
      edges.set(p, (edges.get(p) || 0) + 1);
    }
  }
  let open = 0;
  for (const n of edges.values()) if (n !== 2) open++;
  return { open, total: edges.size };
}

/* ------------------------------------------------------------ Stage 0: diagnosis */
const DENSITY = {              // kg/m³ — keyed to the app's material palette
  aluminum: 2700, steel: 7850, stainless: 7900, brass: 8500, copper: 8960,
  titanium: 4500, abs: 1040, pla: 1250, nylon: 1150, pc: 1200, pom: 1410,
  rubber: 1200, silicone: 1150, glass: 2500, ceramic: 2400, wood: 700,
  carbon: 1600, chrome: 7190, gold: 19300, silver: 10490, matte: 1100,
};
export const densityFor = (mat) => DENSITY[mat] || 1200;

export function diagnoseInput(root, meta = {}) {
  const meshes = meshesOf(root);
  const partish = root.children.filter((c) => meshesOf(c).length);
  const tris = worldTris(root, 60000);
  const { open, total, unknown } = openEdgesOfObject(root);
  const bb = new THREE.Box3().setFromObject(root);
  const size = bb.getSize(new THREE.Vector3());
  const quality = unknown ? 0.5 : total ? Math.max(0, 1 - open / total) : 0;
  const hasHierarchy = partish.length > 1 || meshes.length > 1;
  const d = {
    inputType: meta.inputType || (meshes.length ? "mesh" : "empty"),
    meshCount: meshes.length,
    nodeCount: partish.length,
    triangles: Math.round(tris.length / 9),
    geometryQuality: Number(quality.toFixed(3)),
    watertight: !unknown && open === 0,
    openEdges: unknown ? null : open,
    hasHierarchy,
    hasJointData: false,               // GLB/STEP joint metadata is not trusted as kinematics
    bbox: size.toArray().map((v) => Number((v * MM_TO_M).toFixed(4))),
    issues: [],
  };
  if (unknown) d.issues.push("삼각형 수가 많아 수밀성 검사를 생략했습니다 — 질량은 추정치로 표시됩니다");
  else if (!d.watertight) d.issues.push(`열린 경계 ${open}개 — 질량·관성은 추정치로 표시됩니다`);
  if (meshes.length === 1) d.issues.push("메시가 하나로 합쳐져 있어 파트 분리부터 실행합니다");
  d.recommendedPipeline = meta.inputType === "cad" ? "cad-preserving"
    : hasHierarchy ? "hierarchy-preserving" : "segment-first";
  return d;
}

/* ------------------------------------------------- Stage 1: part / link discovery
   `connected component = part` is NOT assumed: components are the starting
   candidates, then a fused single component is cut at cross-section necks. */
function connectedComponents(mesh) {
  const g = mesh.geometry;
  const pos = g.getAttribute("position");
  const idx = g.index;
  const triCount = (idx ? idx.count : pos.count) / 3;
  if (triCount > 120000) return null;                 // too big to weld cheaply
  const weld = new Map();
  const vid = new Int32Array(idx ? idx.count : pos.count);
  const q = 1e3;                                      // 0.001mm weld tolerance
  const nGet = (t) => (idx ? idx.getX(t) : t);
  for (let t = 0; t < vid.length; t++) {
    const i = nGet(t);
    const k = `${Math.round(pos.getX(i) * q)},${Math.round(pos.getY(i) * q)},${Math.round(pos.getZ(i) * q)}`;
    let w = weld.get(k);
    if (w === undefined) { w = weld.size; weld.set(k, w); }
    vid[t] = w;
  }
  const parent = new Int32Array(weld.size);
  for (let i = 0; i < parent.length; i++) parent[i] = i;
  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  const union = (x, y) => { const a = find(x), b = find(y); if (a !== b) parent[a] = b; };
  for (let t = 0; t < vid.length; t += 3) { union(vid[t], vid[t + 1]); union(vid[t + 1], vid[t + 2]); }
  const groups = new Map();
  for (let t = 0; t < vid.length; t += 3) {
    const r = find(vid[t]);
    if (!groups.has(r)) groups.set(r, []);
    groups.get(r).push(t / 3);
  }
  return [...groups.values()];
}

function subMesh(mesh, triIndices, material) {
  const g = mesh.geometry;
  const pos = g.getAttribute("position");
  const nor = g.getAttribute("normal");
  const idx = g.index;
  const arr = new Float32Array(triIndices.length * 9);
  const narr = nor ? new Float32Array(triIndices.length * 9) : null;
  triIndices.forEach((tri, n) => {
    for (let k = 0; k < 3; k++) {
      const i = idx ? idx.getX(tri * 3 + k) : tri * 3 + k;
      arr[n * 9 + k * 3] = pos.getX(i);
      arr[n * 9 + k * 3 + 1] = pos.getY(i);
      arr[n * 9 + k * 3 + 2] = pos.getZ(i);
      if (narr) {
        narr[n * 9 + k * 3] = nor.getX(i);
        narr[n * 9 + k * 3 + 1] = nor.getY(i);
        narr[n * 9 + k * 3 + 2] = nor.getZ(i);
      }
    }
  });
  const ng = new THREE.BufferGeometry();
  ng.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  if (narr) ng.setAttribute("normal", new THREE.BufferAttribute(narr, 3));
  else ng.computeVertexNormals();
  const nm = new THREE.Mesh(ng, material || mesh.material);
  nm.applyMatrix4(mesh.matrixWorld);
  return nm;
}

/** cut a fused component at cross-section area minima along its dominant axis */
function neckCuts(pts, axis, origin, slices = 40) {
  const along = pts.map((p) => p.clone().sub(origin).dot(axis));
  const lo = Math.min(...along), hi = Math.max(...along);
  if (hi - lo < 1e-6) return [];
  const span = (hi - lo) / slices;
  const width = new Array(slices).fill(0);
  const perp1 = new THREE.Vector3(), perp2 = new THREE.Vector3();
  perp1.set(1, 0, 0);
  if (Math.abs(axis.dot(perp1)) > 0.9) perp1.set(0, 1, 0);
  perp1.crossVectors(axis, perp1).normalize();
  perp2.crossVectors(axis, perp1).normalize();
  const buckets = Array.from({ length: slices }, () => []);
  pts.forEach((p, i) => {
    const s = Math.min(slices - 1, Math.max(0, Math.floor((along[i] - lo) / span)));
    const rel = p.clone().sub(origin);
    buckets[s].push(Math.hypot(rel.dot(perp1), rel.dot(perp2)));
  });
  for (let s = 0; s < slices; s++) {
    const b = buckets[s];
    if (!b.length) { width[s] = 0; continue; }
    b.sort((x, y) => x - y);
    width[s] = b[Math.floor(b.length * 0.9)];
  }
  const maxW = Math.max(...width);
  const cuts = [];
  for (let s = 3; s < slices - 3; s++) {
    if (!width[s]) continue;
    const isMin = width[s] < width[s - 2] && width[s] < width[s + 2] && width[s] < maxW * 0.72;
    if (!isMin) continue;
    if (cuts.length && s - cuts[cuts.length - 1].slice < 5) continue;
    cuts.push({ slice: s, at: lo + (s + 0.5) * span, narrowness: 1 - width[s] / maxW });
  }
  return cuts.slice(0, 4).map((c) => ({ ...c, axis, origin }));
}

/* Per-triangle features for clustering: world centroid and face normal.
   Position alone cuts a shape into arbitrary slabs; orientation alone groups
   every horizontal face in the product together. Together they separate a lid
   from its body, a port boss from the wall it sits on. */
function triFeatures(mesh) {
  const g = mesh.geometry;
  const pos = g.getAttribute("position");
  const idx = g.index;
  const total = (idx ? idx.count : pos.count) / 3;
  const stride = Math.max(1, Math.ceil(total / 24000));
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const ab = new THREE.Vector3(), ac = new THREE.Vector3(), n = new THREE.Vector3();
  const out = [];
  for (let t = 0; t < total; t += stride) {
    const gi = (k) => (idx ? idx.getX(t * 3 + k) : t * 3 + k);
    a.fromBufferAttribute(pos, gi(0)).applyMatrix4(mesh.matrixWorld);
    b.fromBufferAttribute(pos, gi(1)).applyMatrix4(mesh.matrixWorld);
    c.fromBufferAttribute(pos, gi(2)).applyMatrix4(mesh.matrixWorld);
    n.crossVectors(ab.subVectors(b, a), ac.subVectors(c, a));
    const area = n.length() / 2;
    if (area < 1e-9) continue;
    n.normalize();
    out.push({
      tri: t, area,
      cx: (a.x + b.x + c.x) / 3, cy: (a.y + b.y + c.y) / 3, cz: (a.z + b.z + c.z) / 3,
      nx: n.x, ny: n.y, nz: n.z,
    });
  }
  return { feats: out, total, stride };
}

/** deterministic k-means over position+normal, returns triangle groups */
function featureClusters(mesh, k, diag) {
  const { feats, total, stride } = triFeatures(mesh);
  if (feats.length < k * 8) return null;
  const NW = diag * 0.28;                        // how much orientation counts
  const vec = (f) => [f.cx, f.cy, f.cz, f.nx * NW, f.ny * NW, f.nz * NW];
  const pts = feats.map(vec);
  // farthest-point seeding keeps the result reproducible run to run
  const seeds = [pts[0]];
  while (seeds.length < k) {
    let best = null, bestD = -1;
    for (const p of pts) {
      let d = Infinity;
      for (const s of seeds) {
        let acc = 0;
        for (let i = 0; i < 6; i++) acc += (p[i] - s[i]) ** 2;
        if (acc < d) d = acc;
      }
      if (d > bestD) { bestD = d; best = p; }
    }
    seeds.push(best.slice());
  }
  let assign = new Array(pts.length).fill(0);
  for (let iter = 0; iter < 14; iter++) {
    let moved = 0;
    for (let i = 0; i < pts.length; i++) {
      let bi = 0, bd = Infinity;
      for (let s = 0; s < seeds.length; s++) {
        let acc = 0;
        for (let d = 0; d < 6; d++) acc += (pts[i][d] - seeds[s][d]) ** 2;
        if (acc < bd) { bd = acc; bi = s; }
      }
      if (assign[i] !== bi) { assign[i] = bi; moved++; }
    }
    const sum = seeds.map(() => [0, 0, 0, 0, 0, 0, 0]);
    for (let i = 0; i < pts.length; i++) {
      const w = feats[i].area;
      for (let d = 0; d < 6; d++) sum[assign[i]][d] += pts[i][d] * w;
      sum[assign[i]][6] += w;
    }
    seeds.forEach((s, si) => {
      if (sum[si][6] > 0) for (let d = 0; d < 6; d++) s[d] = sum[si][d] / sum[si][6];
    });
    if (!moved) break;
  }
  // expand the sampled assignment back over every triangle
  const groups = Array.from({ length: k }, () => []);
  const byTri = new Map();
  feats.forEach((f, i) => byTri.set(f.tri, assign[i]));
  let last = 0;
  for (let t = 0; t < total; t++) {
    const hit = byTri.get(t - (t % stride));
    last = hit === undefined ? last : hit;
    groups[last].push(t);
  }
  return groups.filter((g) => g.length > Math.max(12, total * 0.01));
}

export function segmentLinks(root, materialFor) {
  root.updateWorldMatrix(true, true);
  const existing = root.children.filter((c) => meshesOf(c).length);
  // 1) hierarchy already carries parts → preserve them (never re-segment CAD)
  if (existing.length > 1) {
    return existing.map((c, i) => ({ node: c, name: c.name || `part_${i + 1}`, origin: "source" }));
  }
  const meshes = meshesOf(root);
  if (meshes.length > 1) {
    return meshes.map((m, i) => ({ node: m, name: m.name || `part_${i + 1}`, origin: "source" }));
  }
  if (!meshes.length) return [];
  // 2) single mesh → connected components
  const mesh = meshes[0];
  const comps = connectedComponents(mesh) || [];
  const big = comps.filter((c) => c.length > Math.max(8, 0.004 * comps.reduce((n, x) => n + x.length, 0)));
  if (big.length > 1) {
    return big
      .sort((a, b) => b.length - a.length)
      .slice(0, 12)
      .map((c, i) => ({ node: subMesh(mesh, c, materialFor?.(i)), name: `component_${i + 1}`, origin: "connected_component" }));
  }
  // 3) fully fused → cut at necks along the dominant axis
  const pts = surfaceSamples(mesh, 1200);
  if (pts.length < 30) return [{ node: mesh, name: mesh.name || "body", origin: "single" }];
  const centre = pts.reduce((a, p) => a.add(p), new THREE.Vector3()).multiplyScalar(1 / pts.length);
  const cov = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (const p of pts) {
    const r = p.clone().sub(centre);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) cov[i][j] += r.getComponent(i) * r.getComponent(j);
  }
  /* Look for a neck on EVERY principal axis, not just the dominant one. A
     bottle necks along its long axis, but a controller enclosure parts across
     its short one, and searching a single direction left those as one link. */
  const eig = eigenSym3(cov);
  let axis = eig.vectors[0], cuts = [];
  for (const cand of eig.vectors) {
    const found = neckCuts(pts, cand, centre);
    if (found.length > cuts.length) { cuts = found; axis = cand; }
  }
  if (!cuts.length) {
    /* No waist anywhere: fall back to clustering the surface by position and
       orientation. An enclosure splits into lid, walls and port bosses rather
       than staying a single 1.3M triangle blob the user cannot select into. */
    const bb0 = new THREE.Box3().setFromObject(mesh);
    const diag = bb0.getSize(new THREE.Vector3()).length() || 1;
    const triCount = worldTris(mesh, 400000).length / 9;
    const k = triCount > 200000 ? 5 : triCount > 20000 ? 4 : 3;
    const groups = featureClusters(mesh, k, diag);
    if (groups && groups.length > 1) {
      return groups
        .sort((a, b) => b.length - a.length)
        .map((gI, i) => ({
          node: subMesh(mesh, gI, materialFor?.(i)),
          name: `구역 ${i + 1}`,
          origin: "surface_cluster",
        }));
    }
    return [{ node: mesh, name: mesh.name || "본체", origin: "single" }];
  }
  // assign every triangle to a band between cuts
  const bounds = [-Infinity, ...cuts.map((c) => c.at), Infinity];
  const bands = Array.from({ length: bounds.length - 1 }, () => []);
  const centroid = new THREE.Vector3();
  const g = mesh.geometry;
  const idx = g.index;
  const posAttr = g.getAttribute("position");
  const triTotal = (idx ? idx.count : posAttr.count) / 3;
  const vtmp = new THREE.Vector3();
  for (let t = 0; t < triTotal; t++) {
    centroid.set(0, 0, 0);
    for (let k = 0; k < 3; k++) {
      const i = idx ? idx.getX(t * 3 + k) : t * 3 + k;
      vtmp.fromBufferAttribute(posAttr, i).applyMatrix4(mesh.matrixWorld);
      centroid.add(vtmp);
    }
    centroid.multiplyScalar(1 / 3);
    const s = centroid.sub(centre).dot(axis);
    let b = 0;
    while (b < bounds.length - 2 && s > bounds[b + 1]) b++;
    bands[b].push(t);
  }
  const kept = bands.filter((b) => b.length > 12);
  if (kept.length < 2) return [{ node: mesh, name: mesh.name || "본체", origin: "single" }];
  return kept.map((b, i) => ({
    node: subMesh(mesh, b, materialFor?.(i)),
    name: `구간 ${i + 1}`,
    origin: "neck_split",
  }));
}

/* ------------------------------------------------- Stage 2: link measurement */
export function measureLink(entry, assetDiag) {
  const node = entry.node;
  /* Volume, centre of mass and the inertia covariance are INTEGRALS — feeding
     them a subsampled triangle soup produces numbers that merely look
     plausible. Integrate over the full mesh; only the contact/point work below
     uses the cheap subsample. */
  const tris = worldTris(node, 600000);
  const samples = surfaceSamples(node, SAMPLE_CAP);
  const bb = new THREE.Box3().setFromObject(node);
  const size = bb.getSize(new THREE.Vector3());
  const mp = massProperties(tris);
  const edges = openEdgesOfObject(node, 400000);
  // principal axes of the surface point cloud
  const centre = samples.reduce((a, p) => a.add(p.clone()), new THREE.Vector3()).multiplyScalar(1 / Math.max(1, samples.length));
  const cov = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (const p of samples) {
    const r = p.clone().sub(centre);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) cov[i][j] += r.getComponent(i) * r.getComponent(j);
  }
  const eig = eigenSym3(cov);
  const n = Math.max(1, samples.length);
  const ext = eig.values.map((v) => Math.sqrt(Math.max(0, v / n)));
  // revolve test: radial spread about each principal axis
  const revolve = eig.vectors.map((ax) => {
    const radii = samples.map((p) => p.clone().sub(centre).projectOnPlane(ax).length());
    const mean = radii.reduce((a, b) => a + b, 0) / radii.length || 1;
    const sd = Math.sqrt(radii.reduce((a, b) => a + (b - mean) ** 2, 0) / radii.length);
    return { axis: ax, radius: mean, cv: sd / mean };   // low cv ⇒ round about this axis
  });
  const best = revolve.reduce((a, b) => (a.cv <= b.cv ? a : b));
  return {
    ...entry,
    tris: Math.round(tris.length / 9),
    bbox: bb, size, centre,
    volume: mp.volume, com: mp.com, covariance: mp.covariance,
    watertight: !edges.unknown && edges.open === 0, openEdges: edges.unknown ? null : edges.open,
    axes: eig.vectors, extents: ext,
    elongation: ext[0] / Math.max(1e-6, ext[1]),
    revolve: best, revolveAll: revolve,
    samples,
    diag: size.length(),
    relSize: size.length() / Math.max(1e-6, assetDiag),
  };
}

/* ------------------------------------------------ Stage 3: assembly graph */
function contactBetween(a, b, band) {
  const boxB = b.bbox.clone().expandByScalar(band * 4);
  const hits = a.samples.filter((p) => boxB.containsPoint(p));
  if (!hits.length) return null;
  // only b's points near a matter — keeps the pairwise scan cheap on big assemblies
  const boxA = a.bbox.clone().expandByScalar(band * 4);
  const bNear = b.samples.filter((q) => boxA.containsPoint(q));
  const bPts = bNear.length >= 3 ? bNear : b.samples;
  // distance from every candidate point to the other part's surface samples
  const dists = hits.map((p) => {
    let best = Infinity;
    for (const q of bPts) {
      const d = p.distanceToSquared(q);
      if (d < best) best = d;
    }
    return Math.sqrt(best);
  });
  /* Adaptive band: real assemblies have clearance, and a subsampled surface
     never lands exactly on the mating face. Anchor the band on the closest
     approach instead of a fixed absolute distance — a fixed threshold silently
     turned neighbouring links into "no contact → fixed". */
  const minD = Math.min(...dists);
  if (minD > band * 6) return null;
  const cut = Math.max(band, minD + band * 1.5);
  const near = hits.filter((p, i) => dists[i] <= cut);
  if (near.length < 3) return null;
  const centroid = near.reduce((s, p) => s.add(p.clone()), new THREE.Vector3()).multiplyScalar(1 / near.length);
  const cov = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (const p of near) {
    const r = p.clone().sub(centroid);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) cov[i][j] += r.getComponent(i) * r.getComponent(j);
  }
  const eig = eigenSym3(cov);
  const spread = eig.values.map((v) => Math.sqrt(Math.max(0, v / near.length)));
  return {
    points: near, centroid, axes: eig.vectors, spread, gap: minD,
    fraction: near.length / Math.max(1, a.samples.length),
    planarity: spread[2] / Math.max(1e-6, spread[0]),      // ~0 ⇒ flat patch
    linearity: spread[0] / Math.max(1e-6, spread[1]),      // ≫1 ⇒ rail-like
  };
}

export function buildAssemblyGraph(links, assetDiag) {
  const band = Math.max(assetDiag * CONTACT_BAND, 0.4);
  const edges = [];
  for (let i = 0; i < links.length; i++) {
    for (let j = i + 1; j < links.length; j++) {
      const a = links[i], b = links[j];
      if (!a.bbox.clone().expandByScalar(band).intersectsBox(b.bbox)) continue;
      const ca = contactBetween(a, b, band) || contactBetween(b, a, band);
      if (!ca) continue;
      /* How much of the smaller part sits inside the larger one. A shaft in a
         housing is enclosed; a housing bolted onto a base plate merely touches
         it. Joint inference needs this to tell a journal from a bolted face. */
      const containment = (() => {
        const inter = a.bbox.clone().intersect(b.bbox);
        if (inter.isEmpty()) return 0;
        const iv = inter.getSize(new THREE.Vector3());
        const small = a.volume <= b.volume ? a : b;
        const sv = small.bbox.getSize(new THREE.Vector3());
        return (iv.x * iv.y * iv.z) / Math.max(1e-9, sv.x * sv.y * sv.z);
      })();
      ca.containment = containment;
      edges.push({ i, j, contact: ca, weight: ca.fraction * (1 + containment) });
    }
  }
  // root: big, low, well-connected
  const lowest = Math.min(...links.map((l) => l.bbox.min.y));
  const maxVol = Math.max(...links.map((l) => l.volume)) || 1;
  const degree = links.map((_, i) => edges.filter((e) => e.i === i || e.j === i).length);
  const maxDeg = Math.max(1, ...degree);
  const scores = links.map((l, i) => 0.42 * (l.volume / maxVol)
    + 0.30 * (1 - Math.min(1, (l.bbox.min.y - lowest) / Math.max(1e-6, l.diag)))
    + 0.28 * (degree[i] / maxDeg));
  const rootIdx = scores.indexOf(Math.max(...scores));
  // maximum-weight spanning tree from the root (strongest contact wins)
  const parentOf = new Array(links.length).fill(-1);
  const inTree = new Set([rootIdx]);
  const treeEdges = [];
  while (inTree.size < links.length) {
    let best = null, bestW = -1;
    for (const e of edges) {
      const aIn = inTree.has(e.i), bIn = inTree.has(e.j);
      if (aIn === bIn) continue;
      /* A cable duct touches the whole arm, so raw contact area made it the
         parent of the upper arm. Structure flows from the larger member to the
         smaller one, so scale the edge by that ratio before choosing. */
      const parent = aIn ? links[e.i] : links[e.j];
      const child = aIn ? links[e.j] : links[e.i];
      const ratio = Math.min(1, (parent.volume || 1) / Math.max(1e-6, child.volume || 1));
      // a part half the size of its child is an accessory (duct, harness, cover
      // strip), not a structural parent, so it should almost never win
      const w = e.weight * (0.35 + 0.65 * ratio) * (ratio < 0.5 ? 0.15 : 1);
      if (w > bestW) { bestW = w; best = e; }
    }
    if (!best) break;                                   // disconnected remainder
    const child = inTree.has(best.i) ? best.j : best.i;
    const parent = inTree.has(best.i) ? best.i : best.j;
    parentOf[child] = parent;
    inTree.add(child);
    treeEdges.push({ parent, child, contact: best.contact, weight: best.weight });
  }
  // anything still unattached is fixed to the root (honest, flagged later)
  links.forEach((_, i) => {
    if (i !== rootIdx && parentOf[i] === -1) {
      parentOf[i] = rootIdx;
      treeEdges.push({ parent: rootIdx, child: i, contact: null, weight: 0 });
    }
  });
  return { rootIdx, parentOf, treeEdges, edges, rootScores: scores, band };
}

/* ------------------------------------------------ Stage 4: joint inference */
function pointsInsideBox(pts, box) {
  let n = 0;
  for (const p of pts) if (box.containsPoint(p)) n++;
  return n / Math.max(1, pts.length);
}

/** rotate/translate child samples and measure overlap with the parent's box */
function sweepLimit(childPts, parentBox, pivot, axis, kind, step, maxT) {
  const q = new THREE.Quaternion();
  const tmp = new THREE.Vector3();
  const probe = (t) => {
    let hit = 0;
    if (kind === "revolute") q.setFromAxisAngle(axis, t);
    for (const p of childPts) {
      tmp.copy(p);
      if (kind === "revolute") tmp.sub(pivot).applyQuaternion(q).add(pivot);
      else tmp.addScaledVector(axis, t);
      if (parentBox.containsPoint(tmp)) hit++;
    }
    return hit / Math.max(1, childPts.length);
  };
  const base = probe(0);
  const scan = (dir) => {
    let last = 0;
    for (let t = step; t <= maxT + 1e-9; t += step) {
      if (probe(dir * t) > base + 0.03) return last;
      last = t;
    }
    return maxT;
  };
  return { lower: -scan(-1), upper: scan(1), base };
}

export function inferJoint(parent, child, contact, band) {
  const ev = [];
  const conf = { type: 0.4, axis: 0.4, origin: 0.5, limits: 0.2 };
  let type = "fixed";
  let axis = new THREE.Vector3(0, 1, 0);
  let origin = contact ? contact.centroid.clone() : child.centre.clone();

  if (!contact) {
    ev.push("접촉면을 찾지 못해 고정 조인트로 두었습니다 (검토 필요)");
    return { type: "fixed", axis, origin, limits: null, confidence: { type: 0.25, axis: 0.2, origin: 0.2, limits: 0 }, evidence: ev, requiresReview: true };
  }

  const round = child.revolve;                         // best revolve axis of the child
  const coaxial = Math.abs(round.axis.dot(contact.axes[2])) > 0.82   // patch normal ∥ child axis
    || Math.abs(round.axis.dot(contact.axes[0])) < 0.35;
  const railLike = contact.linearity > 2.6 && child.elongation > 1.8;
  const flat = contact.planarity < 0.16;
  /* Rotational symmetry alone is not a bearing. A pump housing bolted to its
     base plate is a perfect cylinder too, and calling that a revolute joint
     made the catalogue claim the housing spins. A turning part is either
     wrapped by its parent (journal, bore, hub) or meets it on a narrow annular
     land, so require enclosure or a small contact patch before allowing it. */
  const enclosed = (contact.containment ?? 0) > 0.35;
  const narrowLand = contact.fraction < 0.16;
  const seatedFlat = flat && contact.fraction >= 0.12;   // broad machined face ⇒ bolted

  if (round.cv < 0.22 && coaxial && (enclosed || narrowLand) && !seatedFlat) {
    type = "revolute";
    axis = round.axis.clone();
    // the pivot is the contact centroid projected onto the child's revolve axis
    const rel = contact.centroid.clone().sub(child.centre);
    origin = child.centre.clone().addScaledVector(axis, rel.dot(axis));
    conf.type = Math.min(0.95, 0.6 + (0.22 - round.cv) * 1.6);
    conf.axis = Math.min(0.95, 0.55 + (1 - round.cv) * 0.4);
    conf.origin = 0.72;
    ev.push(`자식 파트가 회전 대칭 (반경 편차 ${(round.cv * 100).toFixed(1)}%, r≈${round.radius.toFixed(1)}mm)`);
    ev.push(enclosed
      ? `상대 파트에 ${Math.round((contact.containment || 0) * 100)}% 감싸여 있어 저널 결합으로 판정`
      : `접촉면이 좁은 환형 랜드 (면적비 ${(contact.fraction * 100).toFixed(1)}%)`);
  } else if (railLike) {
    type = "prismatic";
    axis = contact.axes[0].clone();
    if (axis.dot(child.axes[0]) < 0) axis.negate();
    conf.type = Math.min(0.9, 0.5 + Math.min(0.4, (contact.linearity - 2.6) * 0.1));
    conf.axis = 0.78;
    conf.origin = 0.7;
    ev.push(`접촉면이 레일 형태 (선형도 ${contact.linearity.toFixed(1)}, 파트 세장비 ${child.elongation.toFixed(1)})`);
  } else {
    type = "fixed";
    const roundButSeated = round.cv < 0.22 && coaxial;
    conf.type = seatedFlat ? Math.min(0.94, 0.7 + contact.fraction)
      : flat ? Math.min(0.92, 0.62 + contact.fraction * 1.2) : 0.55;
    conf.axis = 1; conf.origin = 0.8;
    ev.push(roundButSeated
      ? `회전 대칭이지만 넓은 평면에 안착 (면적비 ${(contact.fraction * 100).toFixed(1)}%). 체결면으로 보고 고정 판정`
      : flat
        ? `넓은 평면 접촉 (면적비 ${(contact.fraction * 100).toFixed(1)}%, 평면도 ${contact.planarity.toFixed(2)})`
        : `상대 운동 근거가 없어 고정으로 판정 (평면도 ${contact.planarity.toFixed(2)})`);
  }

  // geometric limits by sweeping until the child penetrates the parent
  let limits = null;
  if (type === "revolute" || type === "prismatic") {
    const pbox = parent.bbox.clone().expandByScalar(-band * 0.5);
    const sw = type === "revolute"
      ? sweepLimit(child.samples, pbox, origin, axis, "revolute", Math.PI / 90, Math.PI)
      : sweepLimit(child.samples, pbox, origin, axis, "prismatic", child.diag * 0.02, child.diag * 0.9);
    limits = { lower: sw.lower, upper: sw.upper, source: "geometric_sweep" };
    const full = type === "revolute" ? Math.PI : child.diag * 0.9;
    if (sw.upper >= full - 1e-6 && -sw.lower >= full - 1e-6) {
      if (type === "revolute") { type = "continuous"; ev.push("전 회전 구간에서 간섭 없음 → continuous"); }
      conf.limits = 0.35;
    } else {
      conf.limits = 0.45;
      ev.push(type === "revolute"
        ? `기하 가동 범위 ${(sw.lower * 180 / Math.PI).toFixed(0)}°~${(sw.upper * 180 / Math.PI).toFixed(0)}° (첫 간섭 기준)`
        : `기하 행정 ${sw.lower.toFixed(1)}~${sw.upper.toFixed(1)}mm (첫 간섭 기준)`);
    }
  }
  // a continuous joint has no range to confirm, so low limit confidence there is
  // not a review item — only an actually bounded range needs a human look
  const boundedRange = limits && type !== "continuous";
  return {
    type, axis, origin, limits, confidence: conf, evidence: ev,
    requiresReview: conf.type < 0.7 || (boundedRange && conf.limits < 0.45),
  };
}

/* --------------------------------------------- Stage 5: collision geometry
   visual ≠ collision. Primitive first, compound boxes when a single primitive
   cannot hold the shape — never the raw visual mesh. */
function boxResidual(samples, centre, axes, half) {
  let worst = 0, sum = 0;
  for (const p of samples) {
    const r = p.clone().sub(centre);
    let d = 0;
    for (let i = 0; i < 3; i++) d = Math.max(d, Math.abs(r.dot(axes[i])) - half[i]);
    d = Math.max(0, d);
    worst = Math.max(worst, d); sum += d;
  }
  return { worst, mean: sum / Math.max(1, samples.length) };
}

export function fitCollision(link) {
  const { samples, centre, axes, extents, diag } = link;
  const half = axes.map((ax, i) => {
    let m = 0;
    for (const p of samples) m = Math.max(m, Math.abs(p.clone().sub(centre).dot(ax)));
    return m;
  });
  const cands = [];
  // sphere
  let rMax = 0;
  for (const p of samples) rMax = Math.max(rMax, p.distanceTo(centre));
  const sphereFill = (4 / 3 * Math.PI * rMax ** 3) / Math.max(1e-9, link.volume);
  if (sphereFill < 1.8) cands.push({ type: "sphere", params: { radius: rMax }, tris: 2, residual: 0, fill: sphereFill });
  // cylinder / capsule about the roundest axis
  const rv = link.revolve;
  if (rv.cv < 0.3) {
    let h = 0;
    for (const p of samples) h = Math.max(h, Math.abs(p.clone().sub(centre).dot(rv.axis)));
    const radius = rv.radius * (1 + rv.cv);
    const fill = (Math.PI * radius ** 2 * 2 * h) / Math.max(1e-9, link.volume);
    const elong = h / Math.max(1e-6, radius);
    cands.push({
      type: elong > 1.6 ? "capsule" : "cylinder",
      params: { radius, length: 2 * h, axis: rv.axis.clone() },
      tris: 1, fill, residual: rv.cv * rv.radius,
    });
  }
  // oriented box
  const boxRes = boxResidual(samples, centre, axes, half);
  const boxFill = (8 * half[0] * half[1] * half[2]) / Math.max(1e-9, link.volume);
  cands.push({ type: "box", params: { half: half.slice(), axes: axes.map((a) => a.clone()) }, tris: 1, fill: boxFill, residual: boxRes.worst });
  // pick the tightest single primitive
  const single = cands.sort((a, b) => (a.fill - b.fill) || (a.residual - b.residual))[0];
  if (single.fill <= 1.55) {
    return { ...single, mode: "primitive", fidelity: "primitive", note: `단일 프리미티브(${single.type}) 충전율 ${single.fill.toFixed(2)}` };
  }
  // compound boxes: slabs along the dominant axis, each with its own OBB
  const k = single.fill > 2.6 ? 4 : 3;
  const along = samples.map((p) => p.clone().sub(centre).dot(axes[0]));
  const lo = Math.min(...along), hi = Math.max(...along);
  const step = (hi - lo) / k;
  const parts = [];
  for (let s = 0; s < k; s++) {
    const grp = samples.filter((p, i) => along[i] >= lo + s * step - 1e-6 && along[i] <= lo + (s + 1) * step + 1e-6);
    if (grp.length < 4) continue;
    const c = grp.reduce((a, p) => a.add(p.clone()), new THREE.Vector3()).multiplyScalar(1 / grp.length);
    const h = axes.map((ax) => {
      let m = 0;
      for (const p of grp) m = Math.max(m, Math.abs(p.clone().sub(c).dot(ax)));
      return Math.max(m, diag * 0.01);
    });
    parts.push({ centre: c, half: h, axes: axes.map((a) => a.clone()) });
  }
  const compVol = parts.reduce((n, p) => n + 8 * p.half[0] * p.half[1] * p.half[2], 0);
  return {
    type: "compound_box", mode: "compound", fidelity: "compound",
    params: { boxes: parts }, tris: parts.length,
    fill: compVol / Math.max(1e-9, link.volume), residual: 0,
    note: `복합 박스 ${parts.length}개, 충전율 ${(compVol / Math.max(1e-9, link.volume)).toFixed(2)} (단일 박스 ${single.fill.toFixed(2)})`,
  };
}

/* ------------------------------------------- Stage 6: mass / inertia */
export function computeInertial(link, material) {
  const density = densityFor(material);
  /* A part cut out of a fused mesh is open at the cut plane, so its own volume
     integral is unreliable. When the SOURCE mesh was watertight we know the true
     total, so each link takes its measured share of it — trustworthy in sum, and
     labelled as derived rather than directly measured. */
  const vol = link.volumeCorrected ?? link.volume;
  const volM3 = vol * MM_TO_M ** 3;
  const mass = volM3 * density;
  // covariance (mm⁵) → inertia (kg·m²)
  const C = link.covariance.map((row) => row.map((v) => v * MM_TO_M ** 5));
  const trace = C[0][0] + C[1][1] + C[2][2];
  const I = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) I[i][j] = density * ((i === j ? trace : 0) - C[i][j]);
  }
  const derived = !link.watertight && link.volumeCorrected != null;
  const status = link.watertight ? "source_verified" : derived ? "derived_from_source" : "ai_proposed";
  const confidence = link.watertight ? 0.78 : derived ? 0.62 : 0.34;
  return {
    mass: Number(mass.toFixed(5)),
    density,
    com: link.com.clone().multiplyScalar(MM_TO_M).toArray().map((v) => Number(v.toFixed(5))),
    inertia: I.map((r) => r.map((v) => Number(v.toExponential(4)))),
    status, confidence,
    note: link.watertight
      ? `닫힌 메시 적분 · ${material || "기본"} 밀도 ${density}kg/m³`
      : derived
        ? `분할 링크 — 원본 닫힌 메시의 실측 총부피를 부피비로 배분 (합계는 정확) · 밀도 ${density}kg/m³`
        : `열린 경계 ${link.openEdges}개 — 부피 적분 근사치, 실측 질량 입력을 권장`,
  };
}

/* --------------------------------------------------------------- compile */
export const SEMANTIC_FALLBACK = ["base", "link", "joint_housing", "cover", "end_effector"];

export function compileAsset(root, opts = {}) {
  const t0 = performance.now();
  const diagnosis = diagnoseInput(root, opts);
  const bbAll = new THREE.Box3().setFromObject(root);
  const assetDiag = bbAll.getSize(new THREE.Vector3()).length() || 1;

  const raw = segmentLinks(root, opts.materialFor);
  const links = raw.map((e) => measureLink(e, assetDiag));

  /* if the SOURCE was watertight, its volume integral is exact — redistribute it
     over the (necessarily open) split links so the masses at least sum right */
  if (diagnosis.watertight && links.length > 1 && links.some((l) => !l.watertight)) {
    const rootVol = massProperties(worldTris(root, 600000)).volume;
    const sum = links.reduce((n, l) => n + Math.abs(l.volume), 0);
    if (rootVol > 0 && sum > 0) {
      links.forEach((l) => { l.volumeCorrected = Math.abs(l.volume) / sum * rootVol; });
      diagnosis.sourceVolume = Number((rootVol * MM_TO_M ** 3).toExponential(4));
    }
  }

  const graph = buildAssemblyGraph(links, assetDiag);

  const cir = {
    assetId: `asset_${Date.now().toString(36)}`,
    name: opts.name || root.name || "robot_asset",
    units: { length: "meter", mass: "kilogram", angle: "radian" },
    coordinateSystem: { upAxis: "Y", forwardAxis: "X", handedness: "right" },
    diagnosis, links: [], joints: [], provenance: [],
  };

  links.forEach((l, i) => {
    const mat = opts.materials?.[i] || opts.defaultMaterial || "aluminum";
    const collision = fitCollision(l);
    const inertial = computeInertial(l, mat);
    cir.links.push({
      id: `link_${i}`,
      name: l.name,
      semanticType: null,                            // filled by /api/semantics
      parentLink: graph.parentOf[i] >= 0 ? `link_${graph.parentOf[i]}` : null,
      isRoot: i === graph.rootIdx,
      origin: l.origin,
      material: mat,
      visual: { tris: l.tris, watertight: l.watertight, openEdges: l.openEdges },
      bbox: {
        min: l.bbox.min.toArray().map((v) => Number((v * MM_TO_M).toFixed(4))),
        max: l.bbox.max.toArray().map((v) => Number((v * MM_TO_M).toFixed(4))),
      },
      collision: {
        type: collision.type, fidelity: collision.fidelity,
        note: collision.note, fill: Number((collision.fill || 0).toFixed(3)),
        shapeCount: collision.type === "compound_box" ? collision.params.boxes.length : 1,
      },
      inertial,
      status: l.origin === "source" ? "source_verified" : "ai_proposed",
      _measured: l, _collision: collision,           // viewport-side detail (not exported)
    });
  });

  /* Surface clusters are regions of ONE shell, not separate components. The
     boundary between them is where the clustering cut, not a real interface,
     so any joint inferred across it is fiction: a robot arm mesh came back as a
     "linear sliding arm" because a cluster edge happened to look prismatic.
     When the parts came from clustering, report them as regions held rigid and
     say why, instead of inventing a mechanism. */
  const clustered = links.length > 0 && links.every((l) => l.origin === "surface_cluster");
  graph.treeEdges.forEach((e, n) => {
    const parent = links[e.parent], child = links[e.child];
    const j = clustered
      ? {
        type: "fixed",
        axis: new THREE.Vector3(0, 1, 0),
        origin: (e.contact?.centroid || child.centre).clone(),
        limits: null,
        confidence: { type: 0.3, axis: 0.2, origin: 0.4, limits: 0 },
        evidence: ["단일 메시를 표면 군집으로 나눈 구역입니다. 구역 경계는 실제 부품 경계가 아니므로 조인트를 판정하지 않았습니다"],
        requiresReview: true,
      }
      : inferJoint(parent, child, e.contact, graph.band);
    cir.joints.push({
      id: `joint_${n}`,
      parent: `link_${e.parent}`,
      child: `link_${e.child}`,
      type: j.type,
      origin: {
        position: j.origin.clone().multiplyScalar(MM_TO_M).toArray().map((v) => Number(v.toFixed(5))),
        quaternion: [0, 0, 0, 1],
      },
      axis: j.axis.clone().normalize().toArray().map((v) => Number(v.toFixed(5))),
      limits: j.limits ? {
        lower: Number((j.type === "prismatic" ? j.limits.lower * MM_TO_M : j.limits.lower).toFixed(5)),
        upper: Number((j.type === "prismatic" ? j.limits.upper * MM_TO_M : j.limits.upper).toFixed(5)),
        velocity: 3.0, effort: 120.0, source: j.limits.source,
      } : null,
      confidence: j.confidence,
      evidence: j.evidence,
      status: "ai_proposed",
      requiresReview: j.requiresReview,
      _pivotMm: j.origin.clone(), _axis: j.axis.clone(),
    });
  });

  cir.segmentation = links[0]?.origin || "single";
  if (clustered) {
    cir.diagnosis.issues.push("파트가 표면 군집으로 나뉘었습니다. 구역 단위 선택과 재질 적용은 가능하지만 조인트와 동작은 판정하지 않습니다");
  }
  cir.provenance.push({
    stage: "compile", source: diagnosis.recommendedPipeline,
    links: cir.links.length, joints: cir.joints.length,
    ms: Math.round(performance.now() - t0),
  });
  return cir;
}

/* --------------------------------------------------- Stage 7: validation */
function sylvesterPositiveDefinite(I) {
  const m1 = I[0][0];
  const m2 = I[0][0] * I[1][1] - I[0][1] * I[1][0];
  const m3 = I[0][0] * (I[1][1] * I[2][2] - I[1][2] * I[2][1])
    - I[0][1] * (I[1][0] * I[2][2] - I[1][2] * I[2][0])
    + I[0][2] * (I[1][0] * I[2][1] - I[1][1] * I[2][0]);
  return m1 > 0 && m2 > 0 && m3 > 0;
}

export function validateAsset(cir) {
  const lines = [];
  const ok = (t) => lines.push({ level: "ok", text: t });
  const warn = (t) => lines.push({ level: "warn", text: t });
  const err = (t) => lines.push({ level: "err", text: t });

  /* structure */
  const roots = cir.links.filter((l) => !l.parentLink);
  if (roots.length === 1) ok(`루트 링크 1개 (${roots[0].name})`);
  else err(`루트가 ${roots.length}개 — 단일 루트여야 합니다`);
  const byId = new Map(cir.links.map((l) => [l.id, l]));
  let cycles = 0;
  for (const l of cir.links) {
    const seen = new Set([l.id]);
    let cur = l.parentLink;
    while (cur) {
      if (seen.has(cur)) { cycles++; break; }
      seen.add(cur);
      cur = byId.get(cur)?.parentLink;
    }
  }
  cycles ? err(`순환 참조 ${cycles}건`) : ok(`계층 순환 없음 · 링크 ${cir.links.length}개`);
  const jointed = new Set(cir.joints.map((j) => j.child));
  const orphans = cir.links.filter((l) => l.parentLink && !jointed.has(l.id));
  orphans.length ? err(`조인트 없는 자식 링크 ${orphans.length}개`) : ok(`조인트 ${cir.joints.length}개 모두 연결됨`);

  /* static */
  let badI = 0, heavy = 0;
  for (const l of cir.links) {
    const I = l.inertial.inertia.map((r) => r.map(Number));
    if (!sylvesterPositiveDefinite(I)) badI++;
    if (l.inertial.mass <= 0) heavy++;
  }
  badI ? err(`관성 텐서가 양의 정부호가 아닌 링크 ${badI}개`) : ok("모든 관성 텐서가 양의 정부호");
  if (heavy) err(`질량이 0 이하인 링크 ${heavy}개`);
  const estimated = cir.links.filter((l) => l.inertial.status !== "source_verified");
  if (estimated.length) warn(`질량·관성 추정 링크 ${estimated.length}개 — 실측값 입력 권장`);

  /* motion — sweep every movable joint and measure penetration */
  const pen = [];
  for (const j of cir.joints) {
    if (j.type === "fixed" || !j.limits) continue;
    const child = byId.get(j.child), parent = byId.get(j.parent);
    if (!child?._measured || !parent?._measured) continue;
    const pts = child._measured.samples;
    const pbox = parent._measured.bbox.clone();
    const axis = j._axis.clone().normalize();
    const pivot = j._pivotMm.clone();
    const steps = 18;
    let worst = 0;
    const lo = j.type === "prismatic" ? j.limits.lower / MM_TO_M : j.limits.lower;
    const hi = j.type === "prismatic" ? j.limits.upper / MM_TO_M : j.limits.upper;
    const base = pointsInsideBox(pts, pbox);
    for (let s = 0; s <= steps; s++) {
      const t = lo + (hi - lo) * (s / steps);
      const q = new THREE.Quaternion();
      if (j.type !== "prismatic") q.setFromAxisAngle(axis, t);
      const moved = pts.map((p) => {
        const v = p.clone();
        if (j.type === "prismatic") v.addScaledVector(axis, t);
        else v.sub(pivot).applyQuaternion(q).add(pivot);
        return v;
      });
      worst = Math.max(worst, pointsInsideBox(moved, pbox) - base);
    }
    pen.push({ joint: j.id, worst });
    if (worst > 0.08) err(`${j.id} 가동 중 관통 ${(worst * 100).toFixed(1)}% (${j.parent} 침입)`);
    else if (worst > 0.02) warn(`${j.id} 가동 중 경미한 간섭 ${(worst * 100).toFixed(1)}%`);
    else ok(`${j.id} 전 구간 스윕 간섭 없음`);
  }

  /* collision hygiene */
  const raw = cir.links.filter((l) => l.collision.fidelity === "mesh");
  raw.length ? warn(`시각 메시를 그대로 쓰는 충돌체 ${raw.length}개`) : ok("모든 충돌체가 프리미티브 또는 복합 프리미티브");

  const errs = lines.filter((l) => l.level === "err").length;
  const warns = lines.filter((l) => l.level === "warn").length;
  return { lines, errors: errs, warnings: warns, penetration: pen, simulationPass: errs === 0 };
}

/* ------------------------------------------- Stage 8: asset readiness score */
export function readinessScore(cir, validation, exportOk) {
  const nLinks = Math.max(1, cir.links.length);
  const part = cir.links.filter((l) => l.origin === "source").length / nLinks * 100
    || (cir.links.length > 1 ? 78 : 45);
  const hierarchy = validation.errors ? 55 : 96;
  const avg = (f) => cir.joints.length
    ? cir.joints.reduce((n, j) => n + f(j), 0) / cir.joints.length * 100 : 60;
  const jointType = avg((j) => j.confidence.type);
  const jointFrame = avg((j) => (j.confidence.axis + j.confidence.origin) / 2);
  const collision = cir.links.reduce((n, l) =>
    n + (l.collision.fidelity === "primitive" ? 1 : l.collision.fidelity === "compound" ? 0.85 : 0.4), 0) / nLinks * 100;
  const inertial = cir.links.reduce((n, l) => n + l.inertial.confidence, 0) / nLinks * 100;
  const simulation = validation.simulationPass
    ? Math.max(40, 100 - validation.warnings * 8) : Math.max(15, 60 - validation.errors * 15);
  const exportScore = exportOk === null ? 60 : exportOk ? 100 : 30;
  const parts = {
    part: Math.round(part), hierarchy: Math.round(hierarchy),
    jointType: Math.round(jointType), jointFrame: Math.round(jointFrame),
    collision: Math.round(collision), inertial: Math.round(inertial),
    simulation: Math.round(simulation), export: Math.round(exportScore),
  };
  const total = Math.round(
    0.16 * parts.part + 0.12 * parts.hierarchy + 0.16 * parts.jointType
    + 0.16 * parts.jointFrame + 0.12 * parts.collision + 0.08 * parts.inertial
    + 0.12 * parts.simulation + 0.08 * parts.export);
  const todo = [];
  for (const j of cir.joints) {
    if (j.requiresReview) todo.push(`${j.id} — ${j.type} 판정/가동범위 확인`);
  }
  for (const l of cir.links) {
    if (l.inertial.status !== "source_verified") todo.push(`${l.name} — 질량 ${l.inertial.mass}kg 확인`);
  }
  return { ...parts, total, todo: todo.slice(0, 6) };
}
