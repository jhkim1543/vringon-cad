/* ==========================================================================
   Source-mesh-preserving model specification.

   The rule this module exists to enforce: nothing in the specification is
   invented. Every region comes from the mesh's own surface, every feature from
   geometry actually detected in it, and every editable parameter names a target
   that exists and an operation that is implemented.

   What this replaces: a path that read a product category, produced plausible
   dimensions for it, and rebuilt the model out of boxes and cylinders. That
   discarded the geometry the generator had made and offered sliders wired to
   nothing. A parameter with no target is not an edit, it is a decoration.

   Representation defaults to SOURCE_MESH_LOCKED. A primitive rebuild has to
   pass an explicit quality gate and be chosen by the user; it never replaces
   the original, only ever produces a derived asset alongside it.
   ========================================================================== */
import * as THREE from "three";
import { worldTris, surfaceSamples, eigenSym3 } from "./robot.js?v=9ac70d99";

/* ---------------------------------------------------------------- origins
   The only admissible provenances. CATEGORY_FALLBACK, CATALOG_GUESS,
   GENERIC_DEFAULT and LLM_ASSUMED_DIMENSION are deliberately absent: a value
   that cannot name where it came from does not become a control. */
export const ORIGIN = {
  MEASURED: "MESH_MEASURED",
  DETECTED: "FEATURE_DETECTED",
  USER: "USER_PROVIDED",
  DEFINED: "USER_DEFINED",
};

export const MODE = {
  LOCKED: "SOURCE_MESH_LOCKED",
  HYBRID: "HYBRID_REGION_EDIT",
  REBUILD: "PARAMETRIC_RECONSTRUCTION",
};

/* --------------------------------------------------------------- geometry
   Everything below reads the mesh. No product knowledge enters here. */

function meshesOf(root) {
  const out = [];
  root.traverse((o) => { if (o.isMesh && o.geometry?.attributes?.position) out.push(o); });
  return out;
}

/** per-face centroid, normal and area in world space */
function faceData(root, cap = 60000) {
  root.updateWorldMatrix(true, true);
  const tris = worldTris(root, cap);
  const n = tris.length / 9;
  const out = {
    count: n,
    cx: new Float32Array(n), cy: new Float32Array(n), cz: new Float32Array(n),
    nx: new Float32Array(n), ny: new Float32Array(n), nz: new Float32Array(n),
    area: new Float32Array(n),
  };
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const ab = new THREE.Vector3(), ac = new THREE.Vector3(), nr = new THREE.Vector3();
  for (let i = 0, f = 0; i < tris.length; i += 9, f++) {
    a.set(tris[i], tris[i + 1], tris[i + 2]);
    b.set(tris[i + 3], tris[i + 4], tris[i + 5]);
    c.set(tris[i + 6], tris[i + 7], tris[i + 8]);
    out.cx[f] = (a.x + b.x + c.x) / 3;
    out.cy[f] = (a.y + b.y + c.y) / 3;
    out.cz[f] = (a.z + b.z + c.z) / 3;
    ab.subVectors(b, a); ac.subVectors(c, a);
    nr.crossVectors(ab, ac);
    const len = nr.length();
    out.area[f] = len / 2;
    if (len > 1e-12) { nr.divideScalar(len); out.nx[f] = nr.x; out.ny[f] = nr.y; out.nz[f] = nr.z; }
  }
  return out;
}

/**
 * Semantic regions from the surface itself: position and orientation clustered
 * together, so a flat mounting face separates from the frame that carries it.
 * These are areas of one body, never separate rigid bodies.
 */
export function detectRegions(root, opts = {}) {
  const fd = faceData(root, opts.faceCap || 40000);
  if (fd.count < 24) return [];
  const bb = new THREE.Box3().setFromObject(root);
  const diag = bb.getSize(new THREE.Vector3()).length() || 1;

  /* Orientation is weighted so that a change of facing splits a region even
     when the two areas are adjacent — that is what makes a plate separate from
     the wall it sits on. */
  const NW = diag * 0.30;
  const K = Math.max(2, Math.min(opts.k || 6, Math.floor(fd.count / 60)));
  const pts = [];
  for (let f = 0; f < fd.count; f++) {
    pts.push([fd.cx[f], fd.cy[f], fd.cz[f], fd.nx[f] * NW, fd.ny[f] * NW, fd.nz[f] * NW]);
  }

  // farthest-point seeding: same input, same regions, run to run
  const seeds = [pts[0]];
  while (seeds.length < K) {
    let best = -1, bestD = -1;
    for (let i = 0; i < pts.length; i++) {
      let d = Infinity;
      for (const s of seeds) {
        let acc = 0;
        for (let j = 0; j < 6; j++) { const t = pts[i][j] - s[j]; acc += t * t; }
        if (acc < d) d = acc;
      }
      if (d > bestD) { bestD = d; best = i; }
    }
    if (best < 0) break;
    seeds.push(pts[best]);
  }

  let assign = new Int32Array(pts.length);
  const cent = seeds.map((s) => s.slice());
  for (let iter = 0; iter < 12; iter++) {
    let moved = 0;
    for (let i = 0; i < pts.length; i++) {
      let bi = 0, bd = Infinity;
      for (let c = 0; c < cent.length; c++) {
        let acc = 0;
        for (let j = 0; j < 6; j++) { const t = pts[i][j] - cent[c][j]; acc += t * t; }
        if (acc < bd) { bd = acc; bi = c; }
      }
      if (assign[i] !== bi) { assign[i] = bi; moved++; }
    }
    const sum = cent.map(() => [0, 0, 0, 0, 0, 0, 0]);
    for (let i = 0; i < pts.length; i++) {
      const s = sum[assign[i]];
      for (let j = 0; j < 6; j++) s[j] += pts[i][j];
      s[6]++;
    }
    for (let c = 0; c < cent.length; c++) {
      if (!sum[c][6]) continue;
      for (let j = 0; j < 6; j++) cent[c][j] = sum[c][j] / sum[c][6];
    }
    if (!moved) break;
  }

  const regions = [];
  for (let c = 0; c < cent.length; c++) {
    const faces = [];
    let area = 0;
    const box = new THREE.Box3();
    const v = new THREE.Vector3();
    const nAcc = new THREE.Vector3();
    for (let i = 0; i < pts.length; i++) {
      if (assign[i] !== c) continue;
      faces.push(i);
      area += fd.area[i];
      box.expandByPoint(v.set(fd.cx[i], fd.cy[i], fd.cz[i]));
      nAcc.add(new THREE.Vector3(fd.nx[i], fd.ny[i], fd.nz[i]).multiplyScalar(fd.area[i]));
    }
    if (faces.length < 8) continue;
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());
    const flat = nAcc.length() / Math.max(1e-6, area);   // 1 = one plane, 0 = wrapped
    regions.push({
      index: regions.length,
      faceCount: faces.length,
      area: Number(area.toFixed(1)),
      bbox: { min: box.min.toArray(), max: box.max.toArray() },
      size: size.toArray().map((x) => Number(x.toFixed(2))),
      centre: centre.toArray().map((x) => Number(x.toFixed(2))),
      normal: nAcc.normalize().toArray().map((x) => Number(x.toFixed(3))),
      planarity: Number(flat.toFixed(3)),
      kind: flat > 0.86 ? "PLANAR_FACE" : flat > 0.45 ? "SHAPED_AREA" : "WRAPPED_SURFACE",
    });
  }
  return regions.sort((a, b) => b.area - a.area);
}

/**
 * Cylindrical bores, detected from the mesh rather than assumed. A bore shows
 * as a ring of faces whose normals point at a common axis; nothing is reported
 * unless that ring actually closes.
 */
export function detectBores(root, opts = {}) {
  const fd = faceData(root, opts.faceCap || 40000);
  if (fd.count < 60) return [];
  const bb = new THREE.Box3().setFromObject(root);
  const size = bb.getSize(new THREE.Vector3());
  const diag = size.length() || 1;
  const axes = [
    { name: "Y", v: new THREE.Vector3(0, 1, 0) },
    { name: "X", v: new THREE.Vector3(1, 0, 0) },
    { name: "Z", v: new THREE.Vector3(0, 0, 1) },
  ];
  const found = [];

  for (const ax of axes) {
    // faces whose normal is perpendicular to the axis can belong to a bore wall
    const cand = [];
    for (let f = 0; f < fd.count; f++) {
      const d = fd.nx[f] * ax.v.x + fd.ny[f] * ax.v.y + fd.nz[f] * ax.v.z;
      if (Math.abs(d) < 0.25) cand.push(f);
    }
    if (cand.length < 40) continue;

    // bucket by position along the axis, then look for rings in each slab
    const along = (f) => (ax.name === "Y" ? fd.cy[f] : ax.name === "X" ? fd.cx[f] : fd.cz[f]);
    const perp = (f) => (ax.name === "Y" ? [fd.cx[f], fd.cz[f]] : ax.name === "X" ? [fd.cy[f], fd.cz[f]] : [fd.cx[f], fd.cy[f]]);
    const lo = Math.min(...cand.map(along)), hi = Math.max(...cand.map(along));
    const slabs = 10;
    const span = (hi - lo) / slabs || 1;

    for (let s = 0; s < slabs; s++) {
      const inSlab = cand.filter((f) => {
        const t = along(f);
        return t >= lo + s * span && t < lo + (s + 1) * span;
      });
      if (inSlab.length < 24) continue;

      /* Keep only the concave faces first. A slab through a plate contains both
         the outer wall and the bore wall; fitting one circle to all of them
         mixes radius 10 with radius 60 and the fit always fails, which is why
         a real through-hole went undetected. An outer wall faces away from the
         section centre, a bore faces into it — that sign separates them. */
      let gx = 0, gy = 0;
      for (const f of inSlab) { const p = perp(f); gx += p[0]; gy += p[1]; }
      gx /= inSlab.length; gy /= inSlab.length;
      const concave = inSlab.filter((f) => {
        const p = perp(f);
        const rx = p[0] - gx, ry = p[1] - gy;
        const nrm = ax.name === "Y" ? [fd.nx[f], fd.nz[f]] : ax.name === "X" ? [fd.ny[f], fd.nz[f]] : [fd.nx[f], fd.ny[f]];
        return rx * nrm[0] + ry * nrm[1] < 0;
      });
      if (concave.length < 16) continue;

      /* Fit a circle to the concave face centres. A real bore wall gives a
         tight fit; a corner or a fillet does not. */
      let sx = 0, sy = 0;
      for (const f of concave) { const p = perp(f); sx += p[0]; sy += p[1]; }
      const cxm = sx / concave.length, cym = sy / concave.length;
      const radii = concave.map((f) => { const p = perp(f); return Math.hypot(p[0] - cxm, p[1] - cym); });
      const rMean = radii.reduce((a, b) => a + b, 0) / radii.length;
      if (rMean < diag * 0.012 || rMean > diag * 0.45) continue;
      const rms = Math.sqrt(radii.reduce((a, r) => a + (r - rMean) ** 2, 0) / radii.length);
      if (rms / rMean > 0.12) continue;                   // not round enough

      /* Re-check inwardness against the fitted centre, not the slab centroid:
         an off-centre hole only reads as concave once its own axis is known. */
      let inward = 0;
      for (const f of concave) {
        const p = perp(f);
        const rx = p[0] - cxm, ry = p[1] - cym;
        const nrm = ax.name === "Y" ? [fd.nx[f], fd.nz[f]] : ax.name === "X" ? [fd.ny[f], fd.nz[f]] : [fd.nx[f], fd.ny[f]];
        if (rx * nrm[0] + ry * nrm[1] < 0) inward++;
      }
      if (inward / concave.length < 0.75) continue;       // outward = a boss, not a bore

      const centreArr = ax.name === "Y" ? [cxm, lo + (s + 0.5) * span, cym]
        : ax.name === "X" ? [lo + (s + 0.5) * span, cxm, cym]
          : [cxm, cym, lo + (s + 0.5) * span];
      found.push({
        axis: ax.name,
        centre: centreArr.map((v) => Number(v.toFixed(2))),
        radius: Number(rMean.toFixed(2)),
        diameter: Number((rMean * 2).toFixed(2)),
        roundness: Number((1 - rms / rMean).toFixed(3)),
        faceCount: concave.length,
        confidence: Number(Math.min(0.96, 0.55 + (1 - rms / rMean) * 0.45).toFixed(2)),
      });
    }
  }

  /* Merge slabs that describe the same bore, so one hole is one feature. */
  const merged = [];
  for (const b of found.sort((a, z) => z.confidence - a.confidence)) {
    const near = merged.find((m) => m.axis === b.axis
      && Math.abs(m.radius - b.radius) < Math.max(0.6, b.radius * 0.14)
      && Math.hypot(...m.centre.map((v, i) => v - b.centre[i])) < b.radius * 3.2);
    if (near) { near.faceCount += b.faceCount; near.slabs = (near.slabs || 1) + 1; continue; }
    merged.push({ ...b, slabs: 1 });
  }
  // a single slab is a coincidence; a bore spans several
  return merged.filter((m) => m.slabs >= 2 || m.confidence > 0.85).slice(0, 12);
}

/** connected solids: what is actually one rigid body */
export function detectBodies(root) {
  const ms = meshesOf(root);
  const bodies = [];
  ms.forEach((m, i) => {
    const bb = new THREE.Box3().setFromObject(m);
    const g = m.geometry;
    bodies.push({
      bodyId: `B${String(i + 1).padStart(3, "0")}`,
      name: m.name || `바디 ${i + 1}`,
      meshName: m.name || "",
      triangles: Math.round((g.index ? g.index.count : g.attributes.position.count) / 3),
      bbox: { min: bb.min.toArray(), max: bb.max.toArray() },
      rigidBodyBehavior: "SINGLE_RIGID_BODY",
      evidence: "GLTF mesh primitive",
    });
  });
  return bodies;
}

/* ------------------------------------------------------- rebuild gate
   PARAMETRIC_RECONSTRUCTION is not a default and not a guess. It has to clear
   every threshold below and then be chosen explicitly. */
export const REBUILD_GATE = {
  surfaceCoverage: 0.95,
  featureRecall: 0.95,
  silhouetteIoU: 0.97,
  boundingBoxError: 0.01,
};

export function rebuildEligibility(scores = {}) {
  const reasons = [];
  if ((scores.surfaceCoverage ?? 0) < REBUILD_GATE.surfaceCoverage) {
    reasons.push(`표면 커버리지 ${((scores.surfaceCoverage ?? 0) * 100).toFixed(0)}% < 95%`);
  }
  if ((scores.featureRecall ?? 0) < REBUILD_GATE.featureRecall) {
    reasons.push(`피처 재현율 ${((scores.featureRecall ?? 0) * 100).toFixed(0)}% < 95%`);
  }
  if ((scores.silhouetteIoU ?? 0) < REBUILD_GATE.silhouetteIoU) {
    reasons.push(`실루엣 IoU ${((scores.silhouetteIoU ?? 0) * 100).toFixed(0)}% < 97%`);
  }
  if ((scores.boundingBoxError ?? 1) > REBUILD_GATE.boundingBoxError) {
    reasons.push(`바운딩박스 오차 ${((scores.boundingBoxError ?? 1) * 100).toFixed(1)}% > 1%`);
  }
  return { eligible: reasons.length === 0, reasons };
}

/* ------------------------------------------------------------- operations
   An operation is only created when its target exists and the runtime can
   actually carry it out. This is the gate that stops decorative sliders. */
let uid = 0;
const nid = (p) => `${p}${String(++uid).padStart(3, "0")}`;

function param(spec, { label, value, unit, origin, target, operation, min, max, step, confidence, note }) {
  const id = nid("PRM");
  spec.editableParameters.push({
    parameterId: id,
    label, value: Number(Number(value).toFixed(3)), unit,
    origin, target, operation,
    minimum: min != null ? Number(min.toFixed(3)) : undefined,
    maximum: max != null ? Number(max.toFixed(3)) : undefined,
    step: step ?? 0.1,
    confidence: confidence ?? 0.9,
    editable: true,
    requiresPreview: operation === "HOLE_DIAMETER" || operation === "REGION_SCALE",
    validationRuleIds: [],
    note,
  });
  return id;
}

/**
 * Build the specification from what the mesh actually contains.
 * `analysis` carries names and roles only — never dimensions.
 */
export function buildStructuredSpec({ root, title, prompt, analysis, assetUri, measured }) {
  uid = 0;
  const bb = new THREE.Box3().setFromObject(root);
  const size = bb.getSize(new THREE.Vector3());
  const centre = bb.getCenter(new THREE.Vector3());

  const spec = {
    schemaVersion: "2.0.0",
    specificationId: `SPEC_${(title || "model").replace(/[^\w가-힣]/g, "_").slice(0, 24)}_${Date.now().toString(36)}`,
    specificationVersion: 1,
    sourceAsset: {
      assetId: "SOURCE_ASSET",
      uri: assetUri || null,
      format: "glb",
      immutable: true,
      triangles: 0,
      boundingBox: {
        width: Number(size.x.toFixed(1)), height: Number(size.y.toFixed(1)), depth: Number(size.z.toFixed(1)),
      },
    },
    coordinateSystem: { unit: "mm", upAxis: "Y", frontAxis: "Z", handedness: "right", origin: [0, 0, 0] },
    identity: {
      name: analysis?.productName || title || "생성 형상",
      productClass: analysis?.productClass || null,
      summary: analysis?.summary || "",
      domainStatus: analysis?.productClass ? "MATCHED" : "GENERIC_MANUFACTURED_OBJECT",
    },
    physicalBodies: [],
    assemblyParts: [],
    semanticRegions: [],
    engineeringFeatures: [],
    representationPlans: [],
    editableParameters: [],
    modifiers: [],
    materials: [{ materialId: "MAT_SOURCE", materialType: "MESH_STANDARD", parameters: {}, fromSource: true }],
    assembly: { rootBodyId: null, relationships: [] },
    joints: [],
    physics: { level: "PHYSICS_PREVIEW", colliders: [] },
    interactions: { selectable: true, hideable: true, explode: true, measure: true, clip: true },
    optimization: { triangleBudget: 400000, lod: [{ level: 0, ratio: 1 }] },
    validation: { scores: {}, unsupported: [] },
    assumptions: [],
    unknowns: [],
    conflicts: [],
    editHistory: [],
  };

  // ---- bodies
  spec.physicalBodies = detectBodies(root);
  spec.sourceAsset.triangles = spec.physicalBodies.reduce((n, b) => n + b.triangles, 0);
  spec.assembly.rootBodyId = spec.physicalBodies[0]?.bodyId || null;

  /* Separate meshes are candidate assembly parts; one fused mesh is one part.
     A semantic region is never promoted to a rigid body on its own. */
  spec.assemblyParts = spec.physicalBodies.map((b) => ({
    partId: b.bodyId.replace("B", "P"),
    bodyId: b.bodyId,
    name: b.name,
    separable: spec.physicalBodies.length > 1,
    evidence: spec.physicalBodies.length > 1
      ? "GLB에 별도 메시로 존재"
      : "단일 메시이므로 분리 부품 근거 없음",
  }));

  // ---- regions
  const regions = detectRegions(root, { k: 6 });
  const roleNames = analysis?.regionNames || [];
  spec.semanticRegions = regions.map((r, i) => ({
    regionId: `R${String(i + 1).padStart(3, "0")}`,
    bodyId: spec.physicalBodies[0]?.bodyId || "B001",
    name: roleNames[i]?.name || `${r.kind === "PLANAR_FACE" ? "평면 영역" : r.kind === "SHAPED_AREA" ? "성형 영역" : "곡면 영역"} ${i + 1}`,
    semanticRole: roleNames[i]?.role || "UNCLASSIFIED",
    sourceBinding: { meshId: spec.physicalBodies[0]?.bodyId || "B001", faceGroupId: `FG_R${i + 1}`, faceCount: r.faceCount },
    geometry: { size: r.size, centre: r.centre, normal: r.normal, area: r.area, planarity: r.planarity, kind: r.kind },
    representationMode: MODE.LOCKED,
    editableOperationIds: [],
    confidence: Number((0.45 + Math.min(0.4, r.faceCount / 2000)).toFixed(2)),
    evidence: `표면 ${r.faceCount}면, 면적 ${r.area}mm², 평면도 ${r.planarity}`,
  }));

  // ---- features: only what was measured
  const bores = detectBores(root);
  spec.engineeringFeatures = bores.map((b, i) => {
    const near = spec.semanticRegions.reduce((best, r) => {
      const d = Math.hypot(...r.geometry.centre.map((v, k) => v - b.centre[k]));
      return !best || d < best.d ? { r, d } : best;
    }, null);
    return {
      featureId: `F${String(i + 1).padStart(3, "0")}`,
      regionId: near?.r.regionId || null,
      type: "BORE",
      name: `${b.axis}축 보어 Ø${b.diameter}`,
      axis: b.axis,
      centre: b.centre,
      diameter: b.diameter,
      geometryReferences: [`AXIS_${b.axis}`],
      editableParameterIds: [],
      confidence: b.confidence,
      evidence: `면 ${b.faceCount}개가 반지름 ${b.radius}mm 원을 이룸 (진원도 ${b.roundness})`,
    };
  });

  // ---- representation plans: locked unless proven otherwise
  spec.representationPlans = [
    {
      planId: "RP_BODY",
      scope: "MODEL",
      mode: MODE.LOCKED,
      reason: "원본 고품질 메시를 시각 기준으로 유지합니다. 재구축은 승인 후 별도 파생 자산으로만 수행합니다.",
      rebuild: rebuildEligibility({}),
    },
    ...spec.semanticRegions.map((r) => ({
      planId: `RP_${r.regionId}`,
      scope: "REGION",
      regionId: r.regionId,
      mode: MODE.HYBRID,
      reason: "영역 마스크가 있어 비파괴 변형이 가능합니다. 형상은 원본을 유지합니다.",
    })),
  ];

  /* ---- editable parameters
     Each one names a target that exists and an operation the runtime runs.
     Nothing here comes from a product category. */

  // whole-model placement and scale: always real, always measured
  param(spec, {
    label: "전체 X 위치", value: root.position.x, unit: "mm", origin: ORIGIN.MEASURED,
    target: { bodyId: spec.physicalBodies[0]?.bodyId }, operation: "GLOBAL_TRANSFORM",
    min: -size.length() * 2, max: size.length() * 2, step: 0.5, confidence: 1,
  });
  param(spec, {
    label: "전체 Y 위치", value: root.position.y, unit: "mm", origin: ORIGIN.MEASURED,
    target: { bodyId: spec.physicalBodies[0]?.bodyId }, operation: "GLOBAL_TRANSFORM",
    min: -size.length() * 2, max: size.length() * 2, step: 0.5, confidence: 1,
  });
  param(spec, {
    label: "전체 Z 위치", value: root.position.z, unit: "mm", origin: ORIGIN.MEASURED,
    target: { bodyId: spec.physicalBodies[0]?.bodyId }, operation: "GLOBAL_TRANSFORM",
    min: -size.length() * 2, max: size.length() * 2, step: 0.5, confidence: 1,
  });
  param(spec, {
    label: "전체 배율", value: 1, unit: "×", origin: ORIGIN.MEASURED,
    target: { bodyId: spec.physicalBodies[0]?.bodyId }, operation: "GLOBAL_TRANSFORM",
    min: 0.25, max: 4, step: 0.01, confidence: 1,
    note: "원본 비율을 유지한 채 전체 크기만 바꿉니다.",
  });

  // separate meshes can be moved independently; a fused mesh cannot
  if (spec.assemblyParts.length > 1) {
    for (const p of spec.assemblyParts) {
      param(spec, {
        label: `${p.name} Y 위치`, value: 0, unit: "mm", origin: ORIGIN.MEASURED,
        target: { partId: p.partId }, operation: "PART_TRANSFORM",
        min: -size.y, max: size.y, step: 0.5, confidence: 0.95,
      });
    }
  }

  // regions can be pushed along their own normal, and scaled in place
  for (const r of spec.semanticRegions) {
    const reach = Math.max(2, Math.min(size.x, size.y, size.z) * 0.4);
    const pOff = param(spec, {
      label: `${r.name} 돌출`, value: 0, unit: "mm", origin: ORIGIN.MEASURED,
      target: { regionId: r.regionId }, operation: "REGION_OFFSET",
      min: -reach, max: reach, step: 0.1, confidence: r.confidence,
      note: "영역을 법선 방향으로 밀어냅니다. 경계는 부드럽게 유지됩니다.",
    });
    const pScl = param(spec, {
      label: `${r.name} 배율`, value: 1, unit: "×", origin: ORIGIN.MEASURED,
      target: { regionId: r.regionId }, operation: "REGION_SCALE",
      min: 0.5, max: 2, step: 0.01, confidence: r.confidence,
    });
    r.editableOperationIds = [pOff, pScl];
  }

  // a bore is editable only because it was found in the mesh
  for (const f of spec.engineeringFeatures) {
    const pd = param(spec, {
      label: `${f.name} 직경`, value: f.diameter, unit: "mm", origin: ORIGIN.DETECTED,
      target: { featureId: f.featureId }, operation: "HOLE_DIAMETER",
      min: f.diameter * 0.4, max: f.diameter * 2.2, step: 0.1, confidence: f.confidence,
      note: "국부 연산으로 처리하며 전체 모델을 다시 만들지 않습니다.",
    });
    f.editableParameterIds = [pd];
  }

  /* ---- what we cannot do, stated rather than hidden
     A control that cannot be executed safely is listed here instead of being
     shown as a slider that quietly does nothing. */
  spec.validation.unsupported = [];
  if (spec.assemblyParts.length <= 1) {
    spec.validation.unsupported.push({
      capability: "부품 분리 이동",
      reason: "GLB가 단일 메시입니다. 의미 영역은 있으나 별도 강체로 분리할 근거가 없습니다.",
    });
  }
  spec.validation.unsupported.push({
    capability: "판 두께 편집",
    reason: "내부면·외부면 대응과 두께 방향을 검출하지 못했습니다. 단순 스케일은 두께 편집이 아닙니다.",
  });
  spec.validation.unsupported.push({
    capability: "리브·보스 개수",
    reason: "개수 변경은 수치 편집이 아니라 토폴로지 변경이라 FEATURE_ADD/REMOVE 연산이 필요합니다.",
  });
  if (!spec.engineeringFeatures.length) {
    spec.validation.unsupported.push({
      capability: "홀 직경 편집",
      reason: "메시에서 원통형 보어를 검출하지 못했습니다. 검출되지 않은 홀은 편집 대상으로 만들지 않습니다.",
    });
  }
  spec.validation.unsupported.push({
    capability: "파라메트릭 재구축",
    reason: `승인 게이트 미통과: ${rebuildEligibility({}).reasons.join(", ")}. 고급 메뉴에서 검증 후 선택할 수 있습니다.`,
  });

  spec.validation.scores = {
    sourceGeometryFidelity: 1,
    bodyDetection: spec.physicalBodies.length ? 1 : 0,
    semanticRegionCoverage: Number(Math.min(1, spec.semanticRegions.length / 6).toFixed(2)),
    featureDetectionCoverage: spec.engineeringFeatures.length ? Number(Math.min(1, spec.engineeringFeatures.length / 4).toFixed(2)) : 0,
    editableOperationCoverage: Number(Math.min(1, spec.editableParameters.length / 12).toFixed(2)),
    jointConfidence: 0,
  };

  if (measured) {
    spec.measuredBounds = measured.overall;
  }
  spec.metadata = { prompt: prompt || "", createdAt: new Date().toISOString(), generator: "VRINGON CAD model-spec 2.0" };
  return spec;
}

/* --------------------------------------------------------------- readable */
const MODE_LABEL = {
  SOURCE_MESH_LOCKED: "원본 메시 유지",
  HYBRID_REGION_EDIT: "하이브리드 영역 편집",
  PARAMETRIC_RECONSTRUCTION: "파라메트릭 재구축",
};
const ORIGIN_LABEL = {
  MESH_MEASURED: "메시 실측", FEATURE_DETECTED: "피처 검출",
  USER_PROVIDED: "사용자 입력", USER_DEFINED: "사용자 정의",
};

export function structuredSpecText(spec) {
  const L = [];
  const a = spec.sourceAsset;
  L.push(`${spec.identity.name}  ·  사양서 v${spec.specificationVersion}`);
  if (spec.identity.summary) L.push(`  ${spec.identity.summary}`);
  L.push("");
  L.push("[표현 방식]");
  L.push(`  ${MODE_LABEL[spec.representationPlans[0].mode]}  ·  원본 형상 보호 ON`);
  L.push(`  ${spec.representationPlans[0].reason}`);
  L.push("");
  L.push("[원본 자산]");
  L.push(`  ${a.format} · ${spec.coordinateSystem.unit} · ${spec.coordinateSystem.upAxis}-up · immutable`);
  L.push(`  바운딩박스 ${a.boundingBox.width} × ${a.boundingBox.height} × ${a.boundingBox.depth} mm`
    + ` · 삼각형 ${a.triangles.toLocaleString()}`);
  L.push("");
  L.push(`[물리 바디 ${spec.physicalBodies.length} · 조립 부품 ${spec.assemblyParts.length}]`);
  for (const b of spec.physicalBodies) {
    L.push(`  ${b.bodyId} ${b.name} — ${b.rigidBodyBehavior} · 삼각형 ${b.triangles.toLocaleString()}`);
  }
  for (const p of spec.assemblyParts) L.push(`  ${p.partId} ${p.name} — ${p.evidence}`);
  L.push("");
  L.push(`[의미 영역 ${spec.semanticRegions.length} — 바디 내부의 기능 구역이며 별도 부품이 아닙니다]`);
  for (const r of spec.semanticRegions) {
    L.push(`  ${r.regionId} ${r.name} (${r.semanticRole})  신뢰도 ${r.confidence}`);
    L.push(`    ${r.geometry.kind} · 치수 ${r.geometry.size.join(" × ")} mm · ${r.evidence}`);
  }
  L.push("");
  L.push(`[엔지니어링 피처 ${spec.engineeringFeatures.length}]`);
  if (!spec.engineeringFeatures.length) L.push("  검출된 피처가 없습니다. 추정으로 만들지 않습니다.");
  for (const f of spec.engineeringFeatures) {
    L.push(`  ${f.featureId} ${f.name} → ${f.regionId || "미배정"}  신뢰도 ${f.confidence}`);
    L.push(`    ${f.evidence}`);
  }
  L.push("");
  L.push(`[지원 편집 ${spec.editableParameters.length}개 — 대상과 연산이 연결된 것만]`);
  for (const p of spec.editableParameters) {
    const tgt = p.target.featureId || p.target.regionId || p.target.partId || p.target.bodyId || "-";
    L.push(`  ${p.label} = ${p.value}${p.unit || ""}`);
    L.push(`    대상 ${tgt} · 방식 ${p.operation} · 근거 ${ORIGIN_LABEL[p.origin]} · 신뢰도 ${p.confidence}`);
  }
  L.push("");
  L.push("[지원하지 않는 편집]");
  for (const u of spec.validation.unsupported) L.push(`  ${u.capability}: ${u.reason}`);
  L.push("");
  L.push("[검증 점수]");
  const s = spec.validation.scores;
  L.push(`  원본 형상 충실도 ${(s.sourceGeometryFidelity * 100).toFixed(0)}%  (원본을 그대로 쓰므로 당연히 높습니다)`);
  L.push(`  바디 검출 ${(s.bodyDetection * 100).toFixed(0)}% · 의미 영역 ${(s.semanticRegionCoverage * 100).toFixed(0)}%`
    + ` · 피처 검출 ${(s.featureDetectionCoverage * 100).toFixed(0)}% · 편집 연산 ${(s.editableOperationCoverage * 100).toFixed(0)}%`);
  return L.join("\n");
}
