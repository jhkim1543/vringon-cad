// VRINGON CAD — uploaded geometry → measured features → parametric program
//
// An imported mesh or CAD solid carries no design intent: the original
// parameters are simply not in the file. What IS recoverable is measurable
// geometry — bounding box, symmetry, radial profile, holes, wall thickness.
// We measure those deterministically, hand the measurements to the design
// brain, and get back a parametric program that reproduces the shape. The
// user then edits *that* program's parameters.

import * as THREE from "three";

/* ---------------------------------------------------------- mesh sampling */
function worldTriangles(root, limit = 60000) {
  root.updateWorldMatrix(true, true);
  const out = [];
  const v = new THREE.Vector3();
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry;
    const pos = g.getAttribute("position");
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld);
      out.push(v.x, v.y, v.z);
    }
    if (g !== o.geometry) g.dispose();
  });
  if (out.length / 3 > limit) {          // uniform stride keeps the shape honest
    const stride = Math.ceil(out.length / 9 / (limit / 3));
    const s = [];
    for (let t = 0; t < out.length / 9; t += stride) s.push(...out.slice(t * 9, t * 9 + 9));
    return s;
  }
  return out;
}

/* --------------------------------------------------------------- analysis */
export function analyzeGeometry(root) {
  const t = worldTriangles(root);
  const n = t.length / 3;
  if (!n) throw new Error("no geometry");

  const bb = new THREE.Box3().setFromObject(root);
  const size = bb.getSize(new THREE.Vector3());
  const center = bb.getCenter(new THREE.Vector3());

  // vertical axis = the longest dimension, which is how most products stand
  const dims = [["x", size.x], ["y", size.y], ["z", size.z]].sort((a, b) => b[1] - a[1]);
  const axis = dims[0][0];

  /* radial profile around the vertical axis: how round is it, and does the
     radius vary with height (bottle/cup) or stay flat (box)? */
  const SLICES = 24;
  const slices = Array.from({ length: SLICES }, () => ({ rs: [], count: 0 }));
  const minY = bb.min.y, spanY = Math.max(1e-6, size.y);
  let radialSum = 0, radialSq = 0, radialN = 0;
  for (let i = 0; i < t.length; i += 3) {
    const x = t[i] - center.x, y = t[i + 1], z = t[i + 2] - center.z;
    const r = Math.hypot(x, z);
    const s = Math.min(SLICES - 1, Math.floor(((y - minY) / spanY) * SLICES));
    slices[s].rs.push(r);
    slices[s].count += 1;
    radialSum += r; radialSq += r * r; radialN += 1;
  }
  const profile = slices.map((s, i) => {
    if (!s.rs.length) return null;
    s.rs.sort((a, b) => a - b);
    const p90 = s.rs[Math.floor(s.rs.length * 0.9)];
    return { y: +(minY + ((i + 0.5) / SLICES) * spanY).toFixed(1), r: +p90.toFixed(1) };
  }).filter(Boolean);

  /* roundness: for a lathe-like solid the outer radius at a given height is
     nearly constant around the axis; for a box it swings by ~41% */
  let roundness = 0;
  {
    let acc = 0, cnt = 0;
    for (const s of slices) {
      if (s.rs.length < 12) continue;
      const max = s.rs[s.rs.length - 1];
      const med = s.rs[Math.floor(s.rs.length * 0.5)];
      if (max > 0) { acc += med / max; cnt += 1; }
    }
    roundness = cnt ? +(acc / cnt).toFixed(3) : 0;
  }

  /* mirror symmetry across each principal plane (fraction of points whose
     mirrored partner exists within tolerance) */
  const tol = Math.max(size.x, size.y, size.z) * 0.02;
  const grid = new Set();
  const key = (x, y, z) => `${Math.round(x / tol)},${Math.round(y / tol)},${Math.round(z / tol)}`;
  for (let i = 0; i < t.length; i += 3) grid.add(key(t[i] - center.x, t[i + 1], t[i + 2] - center.z));
  const symmetry = (fx, fz) => {
    let hit = 0, total = 0;
    for (let i = 0; i < t.length; i += 30) {   // sample every 10th vertex
      const x = (t[i] - center.x) * fx, y = t[i + 1], z = (t[i + 2] - center.z) * fz;
      total += 1;
      if (grid.has(key(x, y, z))) hit += 1;
    }
    return total ? +(hit / total).toFixed(2) : 0;
  };

  const parts = [];
  root.traverse((o) => {
    if (o.userData?.isPart) {
      const pb = new THREE.Box3().setFromObject(o);
      const ps = pb.getSize(new THREE.Vector3());
      let tris = 0;
      o.traverse((m) => { if (m.isMesh) tris += (m.geometry.index ? m.geometry.index.count : m.geometry.getAttribute("position").count) / 3; });
      parts.push({
        name: o.userData.label || o.name,
        size: [ps.x, ps.y, ps.z].map((v) => +v.toFixed(1)),
        originY: +pb.min.y.toFixed(1),
        triangles: Math.round(tris),
      });
    }
  });

  return {
    bbox: { w: +size.x.toFixed(1), h: +size.y.toFixed(1), d: +size.z.toFixed(1) },
    tallestAxis: axis,
    triangles: Math.round(n / 3),
    roundness,                       // ~1 = solid of revolution, ~0.7 = box-like
    symmetryX: symmetry(-1, 1),
    symmetryZ: symmetry(1, -1),
    profile,                         // outer radius vs height
    parts: parts.slice(0, 12),
  };
}

/* ---------------------------------------------------------------- per-part
   Point2CAD-style pipeline: segment (parts already are segments), fit a
   primitive to each part's measurements, emit the program deterministically.
   The LLM never invents geometry — it only names things afterwards.       */
function partTriangles(group) {
  const out = [];
  const v = new THREE.Vector3();
  group.updateWorldMatrix(true, true);
  group.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry;
    const pos = g.getAttribute("position");
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld);
      out.push(v.x, v.y, v.z);
    }
    if (g !== o.geometry) g.dispose();
  });
  return out;
}

export function analyzeParts(root) {
  const parts = [];
  root.updateWorldMatrix(true, true);
  for (const g of root.children.filter((c) => c.userData?.isPart)) {
    const t = partTriangles(g);
    if (!t.length) continue;
    const bb = new THREE.Box3().setFromObject(g);
    const size = bb.getSize(new THREE.Vector3());
    const c = bb.getCenter(new THREE.Vector3());

    const SL = 24;
    const slices = Array.from({ length: SL }, () => ({ r: [], x: [], z: [] }));
    for (let i = 0; i < t.length; i += 3) {
      const dx = Math.abs(t[i] - c.x), dz = Math.abs(t[i + 2] - c.z);
      const s = Math.min(SL - 1, Math.max(0, Math.floor(((t[i + 1] - bb.min.y) / Math.max(1e-6, size.y)) * SL)));
      slices[s].r.push(Math.hypot(dx, dz));
      slices[s].x.push(dx);
      slices[s].z.push(dz);
    }
    const p90 = (a) => { a.sort((m, n) => m - n); return a[Math.floor(a.length * 0.9)]; };
    let acc = 0, cnt = 0;
    const profile = [];
    slices.forEach((sl, i) => {
      const rs = sl.r;
      if (rs.length < 6) return;
      rs.sort((a, b) => a - b);
      const med = rs[Math.floor(rs.length * 0.5)];
      const max = rs[rs.length - 1];
      if (max > 0) { acc += med / max; cnt += 1; }
      // half-extents per axis let us loft a measured rounded-rectangle section
      profile.push({ y: bb.min.y + ((i + 0.5) / SL) * size.y, r: rs[Math.floor(rs.length * 0.9)],
        hx: p90(sl.x), hz: p90(sl.z) });
    });
    // slice centres lose half a slice at each end — pin the extremes to the real
    // bounds so a fitted lathe/loft reproduces the measured height exactly
    if (profile.length >= 2) {
      profile[0].y = bb.min.y;
      profile[profile.length - 1].y = bb.max.y;
    }
    parts.push({
      id: g.name, label: g.userData.label || g.name,
      size: [size.x, size.y, size.z], center: [c.x, c.y, c.z],
      minY: bb.min.y, maxY: bb.max.y,
      roundness: cnt ? acc / cnt : 0,
      circ: circularity(profile),
      profile,
    });
  }
  return parts;
}

/* Is the cross-section a circle? For a solid of revolution the p90 radius equals
   both half-extents, so min(hx,hz)/r → 1. A square section gives ~0.71 and a flat
   panel ~0.4, which keeps sheet-like parts out of the lathe branch (the old
   median/max radius test mistook a curved cover panel for a bottle). */
function circularity(profile) {
  const vals = profile.filter((q) => q.r > 1e-6).map((q) => Math.min(q.hx, q.hz) / q.r);
  if (!vals.length) return 0;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

/* Ramer-Douglas-Peucker on the (y, r) polyline — keeps the shape, drops noise */
function decimate(profile, epsilon, cap = 8) {
  if (profile.length <= 2) return profile;
  const keep = new Set([0, profile.length - 1]);
  const stack = [[0, profile.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let worst = -1, wi = -1;
    const A = profile[a], B = profile[b];
    const len = Math.hypot(B.y - A.y, B.r - A.r) || 1e-9;
    for (let i = a + 1; i < b; i++) {
      const P = profile[i];
      const d = Math.abs((B.y - A.y) * (A.r - P.r) - (A.y - P.y) * (B.r - A.r)) / len;
      if (d > worst) { worst = d; wi = i; }
    }
    if (worst > epsilon && wi > 0) { keep.add(wi); stack.push([a, wi], [wi, b]); }
  }
  let pts = [...keep].sort((x, y) => x - y).map((i) => profile[i]);
  while (pts.length > cap) {           // enforce the cap by dropping the flattest point
    let flat = 1, fi = 1;
    for (let i = 1; i < pts.length - 1; i++) {
      const d = Math.abs(pts[i].r - (pts[i - 1].r + pts[i + 1].r) / 2);
      if (d < flat) { flat = d; fi = i; }
    }
    pts.splice(fi, 1);
  }
  return pts;
}

const frac = (v, base) => {
  if (!isFinite(v) || !isFinite(base) || base <= 0) return "0";
  const f = v / base;
  return Math.abs(f) < 1e-4 ? "0" : `${+f.toFixed(4)}`;
};

/* Mesh-generation models return one fused solid, but products are assemblies.
   Split a part where its cross-section necks down near the top: that boundary is
   a cap / nozzle / lid in practically every container, so the user gets separate
   editable parts (and an unscrew simulation) out of a single blob. */
function neckSplit(profile) {
  const h = profile.map((q) => Math.max(q.hx, q.hz));
  if (h.length < 8) return -1;
  const hMax = Math.max(...h);
  if (h[h.length - 1] > hMax * 0.72) return -1;   // wide all the way up → one part
  let i = h.length - 1;
  while (i > 3 && h[i] < hMax * 0.72) i--;
  const narrow = h.length - 1 - i;
  if (narrow < 2 || narrow > h.length - 4) return -1;
  return i;                                        // last wide slice = the shoulder
}

/* Deterministic program synthesis: every number is derived from measurement,
   expressed as a fraction of two master parameters so the result stays
   parametric (scale height and width independently). */
export function buildDraftProgram(root, name = "uploaded") {
  let parts = analyzeParts(root);
  if (!parts.length) throw new Error("no parts to fit");
  if (parts.length === 1) {
    const p = parts[0];
    const cut = neckSplit(p.profile);
    if (cut > 0) {
      const seg = (prof, label, id) => {
        const ys = prof.map((q) => q.y);
        const hx = Math.max(...prof.map((q) => q.hx)), hz = Math.max(...prof.map((q) => q.hz));
        const lo = Math.min(...ys), hi = Math.max(...ys);
        return { ...p, id, label, profile: prof,
          minY: lo, maxY: hi, circ: circularity(prof),
          center: [p.center[0], (lo + hi) / 2, p.center[2]],
          size: [hx * 2, hi - lo, hz * 2] };
      };
      // body keeps the wide slices (flat shoulder); the cap starts at the shoulder
      // height with its own narrow section, so it reads as a collar — not a funnel
      const capProf = p.profile.slice(cut + 1);
      capProf.unshift({ ...capProf[0], y: p.profile[cut].y });
      parts = [
        seg(p.profile.slice(0, cut + 1), "본체", "body"),
        seg(capProf, "상부 캡", "cap"),
      ];
    }
  }
  const totalMinY = Math.min(...parts.map((p) => p.minY));
  const totalH = Math.max(...parts.map((p) => p.maxY)) - totalMinY;
  const mainW = Math.max(...parts.map((p) => Math.max(p.size[0], p.size[2])));
  const H = "totalH", W = "mainW";
  const e = (v, base) => `${base}*${frac(v, base === H ? totalH : mainW)}`;

  const progParts = [];
  const sims = [];
  const mainHalfMax = Math.max(...parts.map((p) => Math.max(...p.profile.map((q) => Math.max(q.hx, q.hz)), 0)));

  parts.slice(0, 12).forEach((p, idx) => {
    const id = (p.id || `part_${idx + 1}`).replace(/[^\w-]/g, "_").slice(0, 30);
    const meshes = [];
    if (p.circ >= 0.9 && p.profile.length >= 3) {
      // solid of revolution: the measured radius-vs-height curve IS the lathe profile
      const maxR = Math.max(...p.profile.map((q) => q.r));
      const pts = decimate(p.profile, Math.max(0.3, maxR * 0.03));
      const profile = [];
      profile.push([`${W}*0.0001`, e(pts[0].y - totalMinY, H)]);
      for (const q of pts) profile.push([e(q.r, W), e(q.y - totalMinY, H)]);
      profile.push([`${W}*0.0001`, e(pts[pts.length - 1].y - totalMinY, H)]);
      meshes.push({ prim: "lathe", profile,
        x: e(p.center[0], W), z: e(p.center[2], W) });
    } else {
      // prismatic / free-form part: loft the measured rounded-rectangle sections
      // so tapers, shoulders and waists survive instead of collapsing to a box.
      const halves = p.profile.map((q) => Math.max(q.hx, q.hz));
      const hMax = Math.max(...halves, 1e-6);
      const varies = p.profile.length >= 3 && (Math.min(...halves) / hMax) < 0.94;
      const fillet = Math.max(0.6, +(Math.min(p.size[0], p.size[2]) * 0.06).toFixed(1));
      if (varies) {
        const pts = decimate(p.profile, Math.max(0.3, hMax * 0.03), 7);
        const sections = pts.map((q) => ({
          w: e(Math.max(0.4, q.hx * 2), W), d: e(Math.max(0.4, q.hz * 2), W),
          y: e(q.y - totalMinY, H), r: `${fillet}`,
        }));
        meshes.push({ prim: "loft", sections, x: e(p.center[0], W), z: e(p.center[2], W) });
      } else {
        meshes.push({
          prim: "roundedBox",
          args: [e(p.size[0], W), e(p.size[1], H), e(p.size[2], W), `${fillet}`],
          x: e(p.center[0], W), y: e(p.center[1] - totalMinY, H), z: e(p.center[2], W),
        });
      }
    }
    // a slimmer element resting on the upper half is a cap / lid → it unscrews
    const halfMax = Math.max(...p.profile.map((q) => Math.max(q.hx, q.hz)), 0);
    if (id === "cap" || (p.minY - totalMinY > totalH * 0.55 && halfMax < mainHalfMax * 0.85)) {
      sims.push({ part: id, mode: "unscrew", rpm: 24,
        travel: `totalH*${frac(Math.max(4, p.size[1] * 0.8), totalH)}` });
    }
    progParts.push({ id, label: p.label, material: "aluminum", meshes });
  });

  return {
    id: `rev_${name.replace(/[^\w-]/g, "_").slice(0, 20)}`,
    title: `${name} 파라메트릭 모델`,
    params: {
      totalH: { label: "전체 높이", value: +totalH.toFixed(1), min: +(totalH * 0.5).toFixed(1), max: +(totalH * 1.8).toFixed(1), step: 1 },
      mainW: { label: "전체 폭", value: +mainW.toFixed(1), min: +(mainW * 0.5).toFixed(1), max: +(mainW * 1.8).toFixed(1), step: 1 },
    },
    parts: progParts,
    sims,
  };
}

/* Compact human/AI readable summary — this is what the design brain reads. */
export function describeAnalysis(a) {
  const prof = a.profile.map((p) => `y=${p.y}:r=${p.r}`).join(" ");
  return [
    `외형 치수(mm): 가로 ${a.bbox.w} × 높이 ${a.bbox.h} × 세로 ${a.bbox.d}`,
    `삼각형 수: ${a.triangles.toLocaleString()}`,
    `회전체 지수: ${a.roundness} (1.0에 가까울수록 완전한 회전체, 0.7 부근이면 각진 박스형)`,
    `대칭성: 좌우 ${a.symmetryX}, 전후 ${a.symmetryZ}`,
    `높이별 외곽 반경 프로파일: ${prof}`,
    a.parts.length > 1
      ? `파트 ${a.parts.length}개: ${a.parts.map((p) => `${p.name}(${p.size.join("×")}mm, 바닥 y=${p.originY})`).join(", ")}`
      : `단일 솔리드`,
  ].join("\n");
}

/* ------------------------------------------------- STEP / IGES via OCCT */
let occtPromise = null;
async function getOcct() {
  if (!occtPromise) {
    occtPromise = (async () => {
      // UMD build: it assigns a global only when loaded as a classic script,
      // so inject a <script> tag rather than using a module import.
      if (!globalThis.occtimportjs) {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "vendor/occt/occt-import-js.js";
          s.onload = resolve;
          s.onerror = () => reject(new Error("occt-import-js 스크립트 로드 실패"));
          document.head.appendChild(s);
        });
      }
      const factory = globalThis.occtimportjs;
      if (typeof factory !== "function") throw new Error("occt-import-js 초기화 실패");
      return factory({ locateFile: () => "vendor/occt/occt-import-js.wasm" });
    })();
  }
  return occtPromise;
}

/* Reads a STEP/IGES/BREP solid and returns a part-separated THREE.Group.
   OCCT tessellates the B-Rep, so we get real CAD topology, not a mesh guess. */
/** map a STEP solid colour onto the nearest material in our palette */
function materialFromColor(c) {
  const [r, g, b] = Array.isArray(c) ? c : [c.r ?? 0.6, c.g ?? 0.6, c.b ?? 0.6];
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const sat = max - min;
  const lum = (r + g + b) / 3;
  if (sat < 0.07) {
    if (lum > 0.78) return "chrome";
    if (lum > 0.55) return "aluminum";
    if (lum > 0.3) return "steel";
    return "matte";
  }
  if (r > g && g > b) return lum > 0.55 ? "brass" : "copper";
  if (b > r && b > g) return "pc";
  if (g > r && g > b) return "abs";
  return lum > 0.6 ? "aluminum" : "matte";
}

export async function loadCadFile(buffer, ext, makeMaterial) {
  const occt = await getOcct();
  const bytes = new Uint8Array(buffer);
  /* CAD is the easiest input we get: the file already carries separated solids,
     names, colours and exact units, so tessellate it finely and keep all of it
     rather than flattening to a triangle soup like a mesh import. */
  const params = {
    linearUnit: "millimeter",
    linearDeflectionType: "bounding_box_ratio",
    linearDeflection: 0.0008,        // finer than the mesh path: curves stay curves
    angularDeflection: 0.22,
  };
  const result = ext === "iges" || ext === "igs"
    ? occt.ReadIgesFile(bytes, params)
    : occt.ReadStepFile(bytes, params);
  if (!result?.success || !result.meshes?.length) throw new Error("CAD 파일을 해석하지 못했습니다");

  const root = new THREE.Group();
  root.name = "cad_import";
  result.meshes.forEach((m, i) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(m.attributes.position.array, 3));
    if (m.attributes.normal) g.setAttribute("normal", new THREE.Float32BufferAttribute(m.attributes.normal.array, 3));
    else g.computeVertexNormals();
    if (m.index) g.setIndex(new THREE.BufferAttribute(new Uint32Array(m.index.array), 1));

    /* STEP files usually carry a colour per solid. Reading it means the import
       arrives already looking like the assembly instead of a grey block, and it
       is a better material guess than a blanket default. */
    const matKey = m.color ? materialFromColor(m.color) : "aluminum";
    const grp = new THREE.Group();
    grp.name = (m.name || `solid_${i + 1}`).replace(/[^\w-]/g, "_").slice(0, 40);
    grp.userData = {
      isPart: true,
      label: m.name || `솔리드 ${i + 1}`,
      materialKey: matKey,
      cadSolid: true,
      faceCount: m.brep_faces?.length ?? null,
    };
    const mesh = new THREE.Mesh(g, makeMaterial(matKey));
    mesh.castShadow = mesh.receiveShadow = true;
    grp.add(mesh);
    root.add(grp);
  });
  return root;
}
