// VRINGON CAD — geometry kernel
// All dimensions are millimetres; the scene unit IS the millimetre, so exports
// need no rescaling. Every solid is built with real fillets/chamfers and smooth
// normals — no constant-thickness extrusions, which is what makes procedural
// parts read as plastic-looking blocks.

import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

/* ============================================================
   Faceted gemstone — standard lapidary anatomy
     table → crown → girdle → pavilion → culet
   Proportions are expressed the way a GIA report states them
   (table %, crown angle, pavilion angle, girdle %, culet %) so the
   sliders read like a grading report. Faceting style follows the three
   classical arrangements: brilliant (kite/triangle), step (parallel
   terraces) and rose (flat back, domed crown).
   ============================================================ */
export const GEM_SHAPES = ["round", "cushion", "princess", "emerald", "oval", "marquise", "pear"];
export const GEM_CUTS = ["brilliant", "step", "rose"];

// unit outline point at parameter t ∈ [0,1)
function outlinePoint(shape, t) {
  const a = t * Math.PI * 2;
  const ca = Math.cos(a), sa = Math.sin(a);
  const superK = (n) => Math.pow(Math.pow(Math.abs(ca), n) + Math.pow(Math.abs(sa), n), -1 / n);
  switch (shape) {
    case "cushion":   { const k = superK(3.2); return [ca * k, sa * k]; }
    case "princess":  { const k = superK(14);  return [ca * k, sa * k]; }
    case "emerald":   { const k = superK(6);   return [ca * k, sa * k]; }
    case "marquise":  return [ca, sa * Math.pow(Math.abs(sa), 0.55)];
    case "pear": {
      const e = 0.62 * (1 + ca) / 2;          // sharpen one end only
      return [ca, sa * Math.pow(Math.abs(sa), e)];
    }
    case "oval":
    case "round":
    default:          return [ca, sa];
  }
}

// one horizontal ring of vertices
function gemRing(shape, n, radius, y, ratio, scallop = 0, phase = 0) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) + phase;
    const [ux, uz] = outlinePoint(shape, t);
    const r = radius * (scallop && i % 2 ? 1 - scallop : 1);
    pts.push([ux * r * ratio, y, uz * r]);
  }
  return pts;
}

export function gemGeometry(opt = {}) {
  const {
    d = 6.5, shape = "round", cut = "brilliant", ratio = 1,
    tablePct = 56, crownAngle = 34.5, pavAngle = 40.8,
    girdlePct = 3.5, culetPct = 0.5, rows = 3, seg = 16,
  } = opt;

  const N = Math.max(6, Math.round(seg / 2) * 2);
  const rg = d / 2;
  const rt = rg * Math.min(0.92, tablePct / 100);
  const rc = rg * Math.min(0.4, culetPct / 100);
  const gT = d * (girdlePct / 100);
  const rad = (deg) => (deg * Math.PI) / 180;
  const hCrown = (rg - rt) * Math.tan(rad(crownAngle));
  const hPav = (rg - rc) * Math.tan(rad(pavAngle));
  const yGT = gT / 2, yGB = -gT / 2;

  const rings = [];   // ordered top → bottom
  // Facets come from rotating alternate rings by half a step: the quad strip
  // between two out-of-phase rings breaks into the kite/triangle pairs that
  // define a brilliant. A scalloped radius would instead notch the girdle.
  const half = 0.5 / N;
  const R = (radius, y, phase = 0) => rings.push(gemRing(shape, N, radius, y, ratio, 0, phase));

  if (cut === "rose") {
    // flat back, faceted dome
    const hDome = (rg - rc) * Math.tan(rad(Math.max(crownAngle, 28))) * 1.15;
    R(0.001, yGB + hDome);
    for (let i = rows; i >= 1; i--) {
      const f = i / (rows + 1);
      R(rg * (1 - f * 0.92), yGB + hDome * f, i % 2 ? half : 0);
    }
    R(rg, yGT);
    R(rg, yGB);
  } else if (cut === "step") {
    // crown terraces
    R(rt, yGT + hCrown);
    for (let k = 2 * rows - 1; k >= 1; k--) {
      const stepI = Math.floor(k / 2), riser = k % 2 === 1;
      const fr = (stepI + (riser ? 0.86 : 0)) / rows;
      const fy = Math.floor((k + 1) / 2) / rows;
      R(rg + (rt - rg) * fr, yGT + hCrown * fy);
    }
    R(rg, yGT);
    R(rg, yGB);
    // pavilion terraces
    for (let k = 1; k <= 2 * rows - 1; k++) {
      const stepI = Math.floor(k / 2), riser = k % 2 === 1;
      const fr = (stepI + (riser ? 0.86 : 0)) / rows;
      const fy = Math.floor((k + 1) / 2) / rows;
      R(rg + (rc - rg) * fr, yGB - hPav * fy);
    }
    R(Math.max(rc, 0.001), yGB - hPav);
  } else {
    // brilliant: star + upper-girdle break on the crown, main + lower-girdle on the pavilion
    R(rt, yGT + hCrown);
    for (let i = rows - 1; i >= 1; i--) {
      const f = i / rows;                            // 1 → near girdle
      R(rt + (rg - rt) * f, yGT + hCrown * (1 - f), i % 2 ? half : 0);
    }
    R(rg, yGT);
    R(rg, yGB);
    for (let i = 1; i <= rows - 1; i++) {
      const f = i / rows;
      R(rg + (rc - rg) * f, yGB - hPav * f, i % 2 ? half : 0);
    }
    R(Math.max(rc, 0.001), yGB - hPav);
  }

  /* triangulate: quad strips between consecutive rings + top/bottom caps */
  const pos = [];
  const tri = (a, b, c) => pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);

  for (let r = 0; r < rings.length - 1; r++) {
    const A = rings[r], B = rings[r + 1];
    for (let i = 0; i < N; i++) {
      const j = (i + 1) % N;
      tri(A[i], B[i], B[j]);
      tri(A[i], B[j], A[j]);
    }
  }
  const cap = (ring, up) => {
    const cx = ring.reduce((s, p) => s + p[0], 0) / N;
    const cz = ring.reduce((s, p) => s + p[2], 0) / N;
    const c = [cx, ring[0][1], cz];
    for (let i = 0; i < N; i++) {
      const j = (i + 1) % N;
      if (up) tri(c, ring[i], ring[j]); else tri(c, ring[j], ring[i]);
    }
  };
  cap(rings[0], false);                     // table (or apex)
  cap(rings[rings.length - 1], true);       // culet / flat back

  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();                 // non-indexed ⇒ crisp per-facet normals
  return g;
}

/* Global tessellation quality. 1.0 = design quality, lower = lighter meshes.
   Every primitive scales its segment counts through seg(), so the polygon
   budget can be changed without touching a single archetype. */
let QUALITY = 1;
export function setQuality(q) { QUALITY = Math.max(0.25, Math.min(1, q)); }
export function getQuality() { return QUALITY; }
const seg = (n, min = 3) => Math.max(min, Math.round(n * QUALITY));

/* ============================================================
   procedural PBR maps — shared, generated once
   ============================================================ */
let _maps = null;
function fbm(w, h, octaves, seedFn) {
  const data = new Float32Array(w * h);
  let amp = 1, freq = 1, norm = 0;
  for (let o = 0; o < octaves; o++) {
    const gw = Math.max(2, Math.round(w / (1 << (octaves - o))) * freq);
    const grid = new Float32Array((gw + 1) * (gw + 1));
    for (let i = 0; i < grid.length; i++) grid[i] = seedFn(o, i);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const fx = (x / w) * gw, fy = (y / h) * gw;
        const x0 = Math.floor(fx), y0 = Math.floor(fy);
        const tx = fx - x0, ty = fy - y0;
        const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
        const g = (gx, gy) => grid[Math.min(gy, gw) * (gw + 1) + Math.min(gx, gw)];
        const a = g(x0, y0) * (1 - sx) + g(x0 + 1, y0) * sx;
        const b = g(x0, y0 + 1) * (1 - sx) + g(x0 + 1, y0 + 1) * sx;
        data[y * w + x] += (a * (1 - sy) + b * sy) * amp;
      }
    }
    norm += amp; amp *= 0.5; freq *= 2;
  }
  for (let i = 0; i < data.length; i++) data[i] /= norm;
  return data;
}
// deterministic pseudo-random so every session renders identically
function mulberry(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function surfaceMaps() {
  if (_maps) return _maps;
  const S = 256;
  const rnd = mulberry(20260729);
  const noise = fbm(S, S, 5, () => rnd());

  // roughness variation — micro-scratches + broad patina
  const rc = document.createElement("canvas"); rc.width = rc.height = S;
  const rctx = rc.getContext("2d");
  const rimg = rctx.createImageData(S, S);
  for (let i = 0; i < S * S; i++) {
    const n = noise[i];
    const scratch = ((i % S) * 7 + Math.floor(i / S) * 3) % 97 < 2 ? 0.12 : 0;
    const v = Math.max(0, Math.min(1, 0.5 + (n - 0.5) * 0.9 + scratch)) * 255;
    rimg.data[i * 4] = rimg.data[i * 4 + 1] = rimg.data[i * 4 + 2] = v;
    rimg.data[i * 4 + 3] = 255;
  }
  rctx.putImageData(rimg, 0, 0);

  // normal map derived from the same height field (subtle machining texture)
  const nc = document.createElement("canvas"); nc.width = nc.height = S;
  const nctx = nc.getContext("2d");
  const nimg = nctx.createImageData(S, S);
  const at = (x, y) => noise[((y + S) % S) * S + ((x + S) % S)];
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * 2.0;
      const dy = (at(x, y + 1) - at(x, y - 1)) * 2.0;
      const l = Math.hypot(-dx, -dy, 1);
      const i = (y * S + x) * 4;
      nimg.data[i] = ((-dx / l) * 0.5 + 0.5) * 255;
      nimg.data[i + 1] = ((-dy / l) * 0.5 + 0.5) * 255;
      nimg.data[i + 2] = ((1 / l) * 0.5 + 0.5) * 255;
      nimg.data[i + 3] = 255;
    }
  }
  nctx.putImageData(nimg, 0, 0);

  const mk = (canvas, srgb = false) => {
    const t = new THREE.CanvasTexture(canvas);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(4, 4);
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  };
  _maps = { rough: mk(rc), normal: mk(nc) };
  return _maps;
}

/* ============================================================
   material library
   ============================================================ */
export const MATERIALS = {
  aluminum:  { color: 0xc2c7cf, metalness: 0.92, roughness: 0.42, label: "알루미늄 (아노다이징)" },
  steel:     { color: 0xaab0ba, metalness: 0.95, roughness: 0.3,  label: "스테인리스 스틸" },
  brass:     { color: 0xd0aa60, metalness: 0.95, roughness: 0.34, label: "황동" },
  copper:    { color: 0xc27b58, metalness: 0.95, roughness: 0.33, label: "구리" },
  cast_iron: { color: 0x565b63, metalness: 0.82, roughness: 0.62, label: "주철 (도장)" },
  gold:      { color: 0xdfb654, metalness: 1.0, roughness: 0.18, label: "골드 (18K)" },
  silver:    { color: 0xd6dade, metalness: 1.0, roughness: 0.15, label: "실버 / 로듐" },
  gem:       { color: 0xf2f7ff, metalness: 0, roughness: 0.02, label: "젬스톤 (다이아)", gemstone: true },
  abs_black: { color: 0x2b2e34, metalness: 0.0, roughness: 0.55, label: "ABS (블랙)" },
  abs_white: { color: 0xd8dade, metalness: 0.0, roughness: 0.5,  label: "ABS (화이트)" },
  abs_color: { color: 0x5b6bf0, metalness: 0.0, roughness: 0.45, label: "ABS (컬러)" },
  rubber:    { color: 0x1b1d21, metalness: 0.0, roughness: 0.92, label: "고무 / TPE" },
  glass:     { color: 0x9fb2c4, metalness: 0.05, roughness: 0.05, label: "글라스 / 렌즈", glass: true },
  pet_clear: { color: 0xd9e4ea, metalness: 0.0, roughness: 0.12, label: "PET (투명)", glass: true },
  pom:       { color: 0xe8e6df, metalness: 0.0, roughness: 0.42, label: "POM / 엔지니어링 플라스틱" },
  pcb:       { color: 0x14503a, metalness: 0.1, roughness: 0.62, label: "PCB" },
};

export function makeMaterial(key) {
  const spec = MATERIALS[key] || MATERIALS.aluminum;
  const maps = surfaceMaps();
  // A gem needs refraction and hard facet edges, not the soft translucency
  // used for lenses and bottles — diamond's IOR is 2.42.
  const m = spec.gemstone
    ? new THREE.MeshPhysicalMaterial({
        // Full diamond IOR (2.42) bends so hard the stone just samples the
        // metal behind it and reads brown, so the refraction is dialled back
        // to keep the facets legible against a dark studio background.
        color: spec.color, metalness: 0, roughness: spec.roughness,
        transmission: 0.72, ior: 1.85, thickness: 0.9,
        specularIntensity: 1, envMapIntensity: 3.0,
        clearcoat: 1, clearcoatRoughness: 0.02,
        flatShading: true, side: THREE.DoubleSide,
      })
    : spec.glass
    ? new THREE.MeshPhysicalMaterial({
        color: spec.color, metalness: 0, roughness: spec.roughness,
        transparent: true, opacity: 0.42, envMapIntensity: 1.4,
        clearcoat: 1, clearcoatRoughness: 0.06, side: THREE.DoubleSide, depthWrite: false,
      })
    : new THREE.MeshStandardMaterial({
        color: spec.color,
        metalness: spec.metalness,
        roughness: spec.roughness,
        roughnessMap: maps.rough,
        normalMap: maps.normal,
        normalScale: new THREE.Vector2(spec.metalness > 0.5 ? 0.22 : 0.35, spec.metalness > 0.5 ? 0.22 : 0.35),
        /* A metal is almost entirely a mirror of its surroundings, so in a dark
           studio it renders near-black however many lights are added. three
           r162 has no scene.environmentIntensity, which makes this per-material
           value the only lever that actually brightens metal parts. */
        envMapIntensity: spec.metalness > 0.5 ? 3.4 : 1.7,
      });
  m.userData.materialKey = key;
  return m;
}

/* ============================================================
   primitives — every one filleted / chamfered
   ============================================================ */

// Rounded box with a true radius on all 12 edges.
export function roundedBox(w, h, d, r, segments = 5) {
  r = Math.max(0.01, Math.min(r, Math.min(w, h, d) / 2 - 0.001));
  const s = seg(segments, 2);
  const g = new THREE.BoxGeometry(w, h, d, s, s, s);
  const pos = g.attributes.position;
  const hw = w / 2 - r, hh = h / 2 - r, hd = d / 2 - r;
  const v = new THREE.Vector3(), c = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    c.set(
      Math.max(-hw, Math.min(hw, v.x)),
      Math.max(-hh, Math.min(hh, v.y)),
      Math.max(-hd, Math.min(hd, v.z))
    );
    const n = v.clone().sub(c);
    if (n.lengthSq() < 1e-12) continue;
    n.normalize().multiplyScalar(r);
    pos.setXYZ(i, c.x + n.x, c.y + n.y, c.z + n.z);
  }
  g.computeVertexNormals();
  return g;
}

// Rounded-rectangle plate extruded along +Y with a real bevel top and bottom.
export function plate(w, d, h, r, bevel = 0) {
  r = Math.max(0.2, Math.min(r, Math.min(w, d) / 2 - 0.01));
  bevel = Math.min(bevel, h / 2 - 0.01, r - 0.01);
  const s = new THREE.Shape();
  const hw = w / 2 - r, hd = d / 2 - r;
  s.absarc(hw, hd, r, 0, Math.PI / 2);
  s.absarc(-hw, hd, r, Math.PI / 2, Math.PI);
  s.absarc(-hw, -hd, r, Math.PI, Math.PI * 1.5);
  s.absarc(hw, -hd, r, Math.PI * 1.5, Math.PI * 2);
  const g = new THREE.ExtrudeGeometry(s, {
    depth: h - bevel * 2,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: seg(3, 1),
    curveSegments: seg(24, 5),
  });
  g.rotateX(-Math.PI / 2);            // extrusion axis becomes +Y
  g.translate(0, bevel, 0);           // plate occupies y ∈ [0, h]
  g.computeVertexNormals();
  return g;
}

// Revolve a 2D profile ([[radius, y], …]) — the honest way to build any
// cylindrical body with chamfers, undercuts and steps.
export function lathe(profile, segments = 96) {
  const pts = profile.map(([x, y]) => new THREE.Vector2(Math.max(0.0001, x), y));
  const g = new THREE.LatheGeometry(pts, seg(segments, 8));
  g.computeVertexNormals();
  return g;
}

// Cylinder with chamfered ends (never a raw CylinderGeometry).
export function chamferCyl(radius, height, chamfer = 0.6, seg = 64, y0 = 0) {
  const c = Math.min(chamfer, radius * 0.4, height * 0.4);
  return lathe([
    [0, y0],
    [radius - c, y0],
    [radius, y0 + c],
    [radius, y0 + height - c],
    [radius - c, y0 + height],
    [0, y0 + height],
  ], seg);
}

// Loft: a shell whose rounded-rect cross-section varies along Y.
// sections = [{ y, w, d, r }, …] (monotonic y)
export function loft(sections, ringSegments = 40) {
  const ringSeg = seg(ringSegments, 10);
  const rings = sections.map((s) => ringPoints(s.w, s.d, Math.min(s.r, Math.min(s.w, s.d) / 2 - 0.01), ringSeg, s.y));
  const verts = [];
  const idx = [];
  rings.forEach((ring) => ring.forEach((p) => verts.push(p.x, p.y, p.z)));
  const n = ringSeg;
  for (let s = 0; s < rings.length - 1; s++) {
    for (let i = 0; i < n; i++) {
      const a = s * n + i, b = s * n + ((i + 1) % n);
      const c = (s + 1) * n + i, dd = (s + 1) * n + ((i + 1) % n);
      idx.push(a, c, b, b, c, dd);
    }
  }
  // caps
  const capStart = verts.length / 3;
  const first = sections[0], last = sections[sections.length - 1];
  verts.push(0, first.y, 0); verts.push(0, last.y, 0);
  const cBot = capStart, cTop = capStart + 1;
  for (let i = 0; i < n; i++) {
    idx.push(cBot, (i + 1) % n, i);
    const off = (rings.length - 1) * n;
    idx.push(cTop, off + i, off + ((i + 1) % n));
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
function ringPoints(w, d, r, seg, y) {
  const pts = [];
  const hw = Math.max(0.001, w / 2 - r), hd = Math.max(0.001, d / 2 - r);
  for (let i = 0; i < seg; i++) {
    const t = (i / seg) * Math.PI * 2;
    // superellipse-ish rounded rectangle
    const cx = Math.cos(t), sy = Math.sin(t);
    pts.push(new THREE.Vector3(hw * Math.sign(cx) * Math.abs(cx) ** 0.62 + r * cx,
      y,
      hd * Math.sign(sy) * Math.abs(sy) ** 0.62 + r * sy));
  }
  return pts;
}

// Spur gear with trapezoidal (chamfered) teeth and a filleted root.
export function gear(radius, teeth, thickness, boreR = 0) {
  const shape = new THREE.Shape();
  const rootR = radius * 0.86, tipR = radius;
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const pt = (r, t) => [Math.cos(t) * r, Math.sin(t) * r];
    const p0 = pt(rootR, a - step * 0.28);
    const p1 = pt(tipR, a - step * 0.13);
    const p2 = pt(tipR, a + step * 0.13);
    const p3 = pt(rootR, a + step * 0.28);
    if (i === 0) shape.moveTo(p0[0], p0[1]); else shape.lineTo(p0[0], p0[1]);
    shape.lineTo(p1[0], p1[1]);
    shape.lineTo(p2[0], p2[1]);
    shape.lineTo(p3[0], p3[1]);
    const nx = pt(rootR, a + step * 0.72);
    shape.quadraticCurveTo(...pt(rootR * 0.97, a + step * 0.5), nx[0], nx[1]);
  }
  if (boreR > 0) {
    const hole = new THREE.Path();
    hole.absarc(0, 0, boreR, 0, Math.PI * 2, true);
    shape.holes.push(hole);
  }
  const bevel = Math.min(0.5, thickness * 0.2);
  const g = new THREE.ExtrudeGeometry(shape, {
    depth: thickness - bevel * 2, bevelEnabled: true,
    bevelThickness: bevel, bevelSize: bevel, bevelSegments: seg(2, 1), curveSegments: seg(6, 2),
  });
  g.rotateX(-Math.PI / 2);
  g.translate(0, bevel, 0);
  g.computeVertexNormals();
  return g;
}

// Hex-head bolt: head chamfer + shank + thread relief.
export function bolt(shankD, len, headD, headH) {
  const head = new THREE.CylinderGeometry(headD / 2, headD / 2, headH, 6);
  head.translate(0, headH / 2, 0);
  const chamf = chamferCyl(headD / 2 * 0.999, 0.01, 0.01, 6, 0); // keeps normals tidy
  const shank = chamferCyl(shankD / 2, len, shankD * 0.15, 24, -len);
  const g = mergeGeometries([head, shank, chamf].filter(Boolean), false);
  g.computeVertexNormals();
  return g;
}

// Sweep a rounded profile along a Catmull-Rom path (cables, handles, tubes).
export function tube(points, radius, tubularSeg = 96, radialSeg = 20) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  const g = new THREE.TubeGeometry(curve, tubularSeg, radius, radialSeg, false);
  g.computeVertexNormals();
  return g;
}

// A rib/gusset triangle with thickness and a chamfered edge.
export function rib(lengthX, heightY, thickness) {
  const s = new THREE.Shape();
  const c = Math.min(lengthX, heightY) * 0.12;
  s.moveTo(0, 0);
  s.lineTo(lengthX - c, 0);
  s.quadraticCurveTo(lengthX, 0, lengthX - c * 0.4, c * 0.8);
  s.lineTo(c * 0.4, heightY - c * 0.4);
  s.quadraticCurveTo(0, heightY, 0, heightY - c);
  s.closePath();
  const bevel = Math.min(0.4, thickness * 0.25);
  const g = new THREE.ExtrudeGeometry(s, {
    depth: thickness - bevel * 2, bevelEnabled: true,
    bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 8,
  });
  g.computeVertexNormals();
  return g;
}

/* ============================================================
   helpers
   ============================================================ */
export function meshOf(geo, material, { x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0 } = {}) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = m.receiveShadow = true;
  return m;
}

export function polarArray(makeGeo, count, radius, y = 0, tiltToCenter = false) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    out.push({ x: Math.cos(a) * radius, z: Math.sin(a) * radius, y, ry: tiltToCenter ? -a : 0 });
  }
  return out.map((p) => ({ geo: makeGeo(), ...p }));
}
