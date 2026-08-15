/* ==========================================================================
   Specification authoring.

   Turns a measured reconstruction into a model.spec.json the compiler can
   execute: one central parameter registry, parts bound back to the source GLB,
   a builder plus inputs per part, and curve profiles for the parts a primitive
   can actually describe.

   The rule that shapes everything here: a dimension is written once, into
   `parameters`, and referenced everywhere else. Repeating a number inside two
   parts means they drift apart the first time one is edited.
   ========================================================================== */
import * as THREE from "three";
import { planRepresentation } from "./threespec.js?v=9ac70d99";
import { preciseProfile } from "./measure.js?v=9ac70d99";

const num = (v, d = 1) => Number(Number(v).toFixed(d));

/* status of a value, so a measured radius never reads like an assumed one */
export const STATUS = {
  MEASURED: "MESH_MEASURED",
  DERIVED: "DERIVED_FROM_MESH",
  INFERRED: "INFERRED_FROM_DOMAIN",
  USER: "USER_PROVIDED",
};

class Registry {
  constructor() { this.map = {}; }
  add(id, value, opts = {}) {
    const v = Number(value);
    this.map[id] = {
      type: opts.type || "length",
      value: num(v, 2),
      unit: opts.unit || "mm",
      editable: opts.editable !== false,
      minimum: num(opts.min ?? Math.max(0, v * 0.4), 2),
      maximum: num(opts.max ?? (v > 0 ? v * 2 : 10), 2),
      step: opts.step ?? 0.1,
      sourceStatus: opts.status || STATUS.MEASURED,
      confidence: opts.confidence ?? 0.9,
      locked: false,
      affects: opts.affects || [],
    };
    return { parameterRef: id };
  }
}

/* ------------------------------------------------------------- profiles
   A measured lathe profile arrives as radius/height samples. Straight runs
   become LINE segments; that is all the fidelity the measurement supports, and
   claiming arcs we did not fit would be dishonest. */
function revolveProfile(profileId, pts) {
  const segs = [];
  for (let i = 1; i < pts.length; i++) {
    segs.push({
      type: "LINE",
      start: [num(pts[i - 1].r, 2), num(pts[i - 1].t, 2)],
      end: [num(pts[i].r, 2), num(pts[i].t, 2)],
    });
  }
  return {
    profileId,
    plane: { origin: [0, 0, 0], normal: [0, 0, 1], xAxis: [1, 0, 0] },
    closed: false,
    segments: segs,
    holes: [],
    tessellation: { curveTolerance: 0.05, maximumSegmentLength: 1.0 },
    sourceStatus: STATUS.MEASURED,
  };
}

/** rounded rectangle outline for plate-like parts, in the XZ plane */
function plateProfile(profileId, w, d, cornerR) {
  const hw = w / 2, hd = d / 2, r = Math.min(cornerR, Math.min(hw, hd) * 0.9);
  return {
    profileId,
    plane: { origin: [0, 0, 0], normal: [0, 1, 0], xAxis: [1, 0, 0] },
    closed: true,
    segments: [
      { type: "LINE", start: [-hw + r, -hd], end: [hw - r, -hd] },
      { type: "ARC", center: [hw - r, -hd + r], radius: r, startAngle: -Math.PI / 2, endAngle: 0, clockwise: false },
      { type: "LINE", start: [hw, -hd + r], end: [hw, hd - r] },
      { type: "ARC", center: [hw - r, hd - r], radius: r, startAngle: 0, endAngle: Math.PI / 2, clockwise: false },
      { type: "LINE", start: [hw - r, hd], end: [-hw + r, hd] },
      { type: "ARC", center: [-hw + r, hd - r], radius: r, startAngle: Math.PI / 2, endAngle: Math.PI, clockwise: false },
      { type: "LINE", start: [-hw, hd - r], end: [-hw, -hd + r] },
      { type: "ARC", center: [-hw + r, -hd + r], radius: r, startAngle: Math.PI, endAngle: Math.PI * 1.5, clockwise: false },
    ],
    holes: [],
    tessellation: { curveTolerance: 0.05, maximumSegmentLength: 1.0 },
    sourceStatus: STATUS.DERIVED,
  };
}

/* ------------------------------------------------------------ part authoring
   Each part picks the builder its own geometry justified, and writes its
   dimensions into the registry rather than inline. */
function authorPart(node, index, reg, profiles, ctx) {
  const partId = `P${String(index + 1).padStart(3, "0")}`;
  const plan = planRepresentation(node);
  const bb = new THREE.Box3().setFromObject(node);
  const size = bb.getSize(new THREE.Vector3());
  const centre = bb.getCenter(new THREE.Vector3());
  const name = ctx.nameFor(node, index);

  let geometryDefinition = null;
  let repType = plan.representationType;

  if (plan.representationType === "PARAMETRIC" && plan.builder === "lathe") {
    /* A turned part: revolve its own measured section. Dense enough to hold
       the shoulders, and every point is a measurement. */
    /* Two points is a legitimate turned profile — that is what a plain cylinder
       simplifies to — and rejecting it sent every straight-walled part back to
       SOURCE_MESH, which is exactly the case a revolve handles best. */
    const prof = plan.profile?.length >= 2
      ? plan.profile
      : (() => { try { return preciseProfile(node, { levels: 64, angles: 12 })?.profile; } catch { return null; } })();
    if (prof && prof.length >= 2) {
      const pid = `PROFILE_${partId}_SECTION`;
      profiles.push(revolveProfile(pid, prof));
      const rMax = Math.max(...prof.map((s) => s.r));
      const hProf = Math.max(...prof.map((s) => s.t)) - Math.min(...prof.map((s) => s.t));
      geometryDefinition = {
        builderId: "REVOLVE",
        axis: { origin: [0, 0, 0], direction: [0, 1, 0] },
        profileId: pid,
        // the section as measured, so the registry values above scale against it
        baseMaxRadius: num(rMax, 2),
        baseHeight: num(hProf, 2),
        maxRadius: reg.add(`${partId}.maxRadius`, rMax, { status: STATUS.MEASURED, confidence: plan.confidence }),
        height: reg.add(`${partId}.height`, hProf, { status: STATUS.MEASURED, confidence: plan.confidence }),
        segments: 96,
        startAngle: 0,
        angleLength: Math.PI * 2,
      };
    }
  } else if (plan.representationType === "PARAMETRIC" && plan.builder === "box") {
    const flat = size.y < Math.min(size.x, size.z) * 0.45;
    if (flat) {
      /* Plate-like: extrude an outline so holes and rounded corners have
         somewhere to live when the user adds them. */
      const pid = `PROFILE_${partId}_OUTLINE`;
      profiles.push(plateProfile(pid, size.x, size.z, Math.min(size.x, size.z) * 0.06));
      geometryDefinition = {
        builderId: "EXTRUDE_2D",
        profileId: pid,
        depth: reg.add(`${partId}.thickness`, size.y, { status: STATUS.MEASURED, confidence: plan.confidence }),
        // the outline is literal, so width and depth scale it the same way
        baseWidth: num(size.x, 2),
        baseDepth: num(size.z, 2),
        width: reg.add(`${partId}.width`, size.x, { status: STATUS.MEASURED, confidence: plan.confidence }),
        outlineDepth: reg.add(`${partId}.depth`, size.z, { status: STATUS.MEASURED, confidence: plan.confidence }),
        bevelSize: 0,
      };
    } else {
      geometryDefinition = {
        builderId: "ROUNDED_BOX",
        width: reg.add(`${partId}.width`, size.x, { status: STATUS.MEASURED, confidence: plan.confidence }),
        height: reg.add(`${partId}.height`, size.y, { status: STATUS.MEASURED, confidence: plan.confidence }),
        depth: reg.add(`${partId}.depth`, size.z, { status: STATUS.MEASURED, confidence: plan.confidence }),
        cornerRadius: reg.add(`${partId}.cornerRadius`, Math.min(size.x, size.z) * 0.05,
          { status: STATUS.INFERRED, confidence: 0.5, min: 0, max: Math.min(size.x, size.z) / 2 }),
      };
    }
  }

  if (!geometryDefinition) {
    repType = plan.representationType === "PARAMETRIC" ? "HYBRID" : plan.representationType;
    /* A source-mesh part still gets dimensions. Its shape is the generated
       geometry and stays untouched, but width/height/depth scale it, so the
       sheet can resize a part no primitive could rebuild. Without these the
       registry held nothing editable and the numbers were decoration. */
    geometryDefinition = {
      builderId: "SOURCE_MESH",
      nodePath: node.name || name,
      meshName: node.name || name,
      baseWidth: num(size.x, 2), baseHeight: num(size.y, 2), baseDepth: num(size.z, 2),
      width: reg.add(`${partId}.width`, size.x, { status: STATUS.MEASURED, confidence: 0.95 }),
      height: reg.add(`${partId}.height`, size.y, { status: STATUS.MEASURED, confidence: 0.95 }),
      depth: reg.add(`${partId}.depth`, size.z, { status: STATUS.MEASURED, confidence: 0.95 }),
    };
  }

  return {
    partId,
    name,
    semanticRole: ctx.roleFor(node, index),
    parentPartId: index === 0 ? null : "P001",
    sourceBinding: {
      assetId: "SOURCE_ASSET",
      nodePath: node.name || name,
      meshName: node.name || name,
      primitiveIndices: [0],
    },
    representation: {
      type: repType,
      visualSource: repType === "PARAMETRIC" ? "PARAMETRIC" : "SOURCE_MESH",
      editableProxy: repType === "SOURCE_MESH" ? "NONE" : "PARAMETRIC",
    },
    transform: {
      position: [num(centre.x, 2), num(centre.y, 2), num(centre.z, 2)],
      rotationQuaternion: [0, 0, 0, 1],
      scale: [1, 1, 1],
      pivot: [0, 0, 0],
    },
    geometryBounds: {
      minimum: bb.min.toArray().map((v) => num(v, 2)),
      maximum: bb.max.toArray().map((v) => num(v, 2)),
    },
    geometryDefinition,
    featureIds: [],
    materialIds: [ctx.materialFor(node, index)],
    interaction: {
      selectable: true, hideable: true,
      transformEditable: true,
      parameterEditable: geometryDefinition.builderId !== "SOURCE_MESH",
      materialEditable: true, replaceable: true,
    },
    physics: { rigidBodyId: `RB_${partId}`, colliderId: `COL_${partId}` },
    primitiveFit: plan.fit,
    confidence: plan.confidence,
    reason: plan.reason,
    sourceStatus: STATUS.MEASURED,
  };
}

/* --------------------------------------------------------------- assembly */
export function buildModelSpec({ nodes, measured, title, brief, prompt, domain, assetInfo, nameFor, roleFor, materialFor }) {
  const reg = new Registry();
  const profiles = [];
  const ctx = {
    nameFor: nameFor || ((n, i) => (/^(world|scene|root|node\d*)$/i.test(n.name || "") || !n.name
      ? (title || `파트 ${i + 1}`) : n.name.replace(/_/g, " "))),
    roleFor: roleFor || ((n) => n.userData?.semanticType || "COMPONENT"),
    materialFor: materialFor || ((n) => n.userData?.materialKey || "MAT_ALUMINUM"),
  };

  if (measured?.overall) {
    reg.add("MODEL.width", measured.overall.width, { status: STATUS.MEASURED, confidence: 0.98 });
    reg.add("MODEL.height", measured.overall.height, { status: STATUS.MEASURED, confidence: 0.98 });
    reg.add("MODEL.depth", measured.overall.depth, { status: STATUS.MEASURED, confidence: 0.98 });
  }

  const parts = nodes.map((n, i) => authorPart(n, i, reg, profiles, ctx));

  return {
    schemaVersion: "1.0.0",
    specificationId: `SPEC_${(title || "model").replace(/[^\w가-힣]/g, "_").slice(0, 24)}_${Date.now().toString(36)}`,
    specificationVersion: 1,
    metadata: {
      generator: "VRINGON CAD spec-build",
      createdAt: new Date().toISOString(),
      title: title || "생성 형상",
      brief: brief || "",
      prompt: prompt || "",
    },
    coordinateSystem: { unit: "mm", upAxis: "Y", frontAxis: "Z", handedness: "right", origin: [0, 0, 0] },
    assets: [{
      assetId: "SOURCE_ASSET",
      role: "SOURCE_HIGH_QUALITY",
      format: "glb",
      uri: assetInfo?.uri || null,
      triangles: assetInfo?.triangles || null,
      boundingBox: measured?.overall || null,
    }],
    domain: { candidates: domain ? [domain] : [], selectedPacks: [] },
    parameters: reg.map,
    profiles,
    parts,
    featureTree: [],
    constraints: [],
    materials: [{
      materialId: "MAT_ALUMINUM",
      materialType: "MESH_PHYSICAL",
      parameters: { baseColor: [0.62, 0.64, 0.66], metalness: 0.9, roughness: 0.34, opacity: 1, transparent: false },
      textures: {},
    }],
    assembly: { rootPartId: parts[0]?.partId || null, relationships: [], joints: [] },
    physics: { level: "PHYSICS_PREVIEW", bodies: [] },
    interactions: { selectable: true, explode: true, section: false },
    optimization: { triangleBudget: 400000, lod: [{ level: 0, ratio: 1 }], shadowPolicy: "cast+receive" },
    validation: {
      overallBounds: measured?.overall
        ? { expected: measured.overall, unit: "mm", tolerance: { type: "RELATIVE", value: 0.08 } }
        : null,
      partCount: { minimum: 1, maximum: Math.max(4, parts.length + 4) },
      geometryComparison: { sourceAssetId: "SOURCE_ASSET", minimumSilhouetteIoU: 0.6 },
    },
    assumptions: [],
    unknowns: [],
    conflicts: [],
    editHistory: [],
  };
}

/* ============================================================================
   From image analysis, with no mesh in hand.

   The analyser returns the four levels — bodies, regions, features, edit groups
   — with real millimetres per region. Turning that into a spec is mostly
   bookkeeping: every dimension goes into the registry, every region becomes a
   part with a builder, and features stay attached to their region instead of
   being promoted into fake parts.
   ============================================================================ */
const ROLE_MATERIAL = {
  MOTOR_INTERFACE: "aluminum", STRUCTURAL_FRAME: "aluminum", BASE_MOUNT: "steel",
  HOUSING: "aluminum", COVER: "abs_black", SHAFT: "stainless", FASTENER: "steel",
};

export function specFromAnalysis(a, opts = {}) {
  const reg = new Registry();
  const profiles = [];
  const td = a.targetDimensions || { width: 100, height: 100, depth: 100, basis: "추정" };

  /* Target and measured are different claims and must not share a field. The
     old spec put a requested size next to a mesh bounding box under one name,
     and the two disagreed with nothing to say which was which. */
  reg.add("MODEL.width", td.width, { status: STATUS.USER, confidence: 0.9 });
  reg.add("MODEL.height", td.height, { status: STATUS.USER, confidence: 0.9 });
  reg.add("MODEL.depth", td.depth, { status: STATUS.USER, confidence: 0.9 });

  const featuresByRegion = new Map();
  for (const f of a.features || []) {
    if (!featuresByRegion.has(f.regionId)) featuresByRegion.set(f.regionId, []);
    featuresByRegion.get(f.regionId).push(f);
  }

  const parts = (a.regions || []).map((r, i) => {
    const partId = r.regionId || `R${String(i + 1).padStart(3, "0")}`;
    const s = r.size || { w: 10, h: 10, d: 10 };
    const c = r.center || { x: 0, y: 0, z: 0 };
    const builder = r.builder || "ROUNDED_BOX";
    const mine = featuresByRegion.get(r.regionId) || [];
    let def;

    if (builder === "REVOLVE" && Array.isArray(r.profile) && r.profile.length >= 2) {
      const pid = `PROFILE_${partId}`;
      const pts = r.profile.map(([rad, y]) => ({ r: Math.abs(Number(rad)) || 0.1, t: Number(y) || 0 }));
      profiles.push(revolveProfile(pid, pts));
      const rMax = Math.max(...pts.map((p) => p.r));
      const hP = Math.max(...pts.map((p) => p.t)) - Math.min(...pts.map((p) => p.t));
      def = {
        builderId: "REVOLVE", profileId: pid,
        axis: { origin: [0, 0, 0], direction: [0, 1, 0] },
        baseMaxRadius: num(rMax, 2), baseHeight: num(hP || s.h, 2),
        maxRadius: reg.add(`${partId}.maxRadius`, rMax, { status: STATUS.INFERRED, confidence: 0.7 }),
        height: reg.add(`${partId}.height`, hP || s.h, { status: STATUS.INFERRED, confidence: 0.7 }),
        segments: 96,
      };
    } else if (builder === "EXTRUDE_2D") {
      const pid = `PROFILE_${partId}`;
      const holes = mine
        .filter((f) => ["HOLE", "CYLINDRICAL_BORE", "LIGHTWEIGHT_CUTOUT", "SLOT"].includes(f.type) && f.diameter)
        .slice(0, 8)
        .map((f, k) => ({
          holeId: f.featureId || `H_${partId}_${k}`,
          profileType: "CIRCLE",
          center: [0, 0],
          diameter: Number(f.diameter),
        }));
      const prof = plateProfile(pid, s.w, s.d, Math.min(s.w, s.d) * 0.08);
      prof.holes = holes;
      profiles.push(prof);
      def = {
        builderId: "EXTRUDE_2D", profileId: pid,
        depth: reg.add(`${partId}.thickness`, s.h, { status: STATUS.INFERRED, confidence: 0.7 }),
        baseWidth: num(s.w, 2), baseDepth: num(s.d, 2),
        width: reg.add(`${partId}.width`, s.w, { status: STATUS.INFERRED, confidence: 0.7 }),
        outlineDepth: reg.add(`${partId}.depth`, s.d, { status: STATUS.INFERRED, confidence: 0.7 }),
      };
    } else if (builder === "CYLINDER" || builder === "CONE") {
      def = {
        builderId: builder,
        radius: reg.add(`${partId}.radius`, Math.max(s.w, s.d) / 2, { status: STATUS.INFERRED, confidence: 0.7 }),
        height: reg.add(`${partId}.height`, s.h, { status: STATUS.INFERRED, confidence: 0.7 }),
        segments: 48,
      };
    } else if (builder === "TUBE") {
      const ro = Math.max(s.w, s.d) / 2;
      def = {
        builderId: "TUBE",
        outerRadius: reg.add(`${partId}.outerRadius`, ro, { status: STATUS.INFERRED, confidence: 0.7 }),
        innerRadius: reg.add(`${partId}.innerRadius`, ro * 0.72, { status: STATUS.INFERRED, confidence: 0.55 }),
        height: reg.add(`${partId}.height`, s.h, { status: STATUS.INFERRED, confidence: 0.7 }),
        segments: 48,
      };
    } else if (builder === "SPHERE") {
      def = { builderId: "SPHERE", radius: reg.add(`${partId}.radius`, Math.max(s.w, s.h, s.d) / 2, { status: STATUS.INFERRED, confidence: 0.7 }) };
    } else if (builder === "TORUS") {
      def = {
        builderId: "TORUS",
        radius: reg.add(`${partId}.radius`, Math.max(s.w, s.d) / 2, { status: STATUS.INFERRED, confidence: 0.7 }),
        tube: reg.add(`${partId}.tube`, s.h / 2, { status: STATUS.INFERRED, confidence: 0.6 }),
      };
    } else {
      def = {
        builderId: builder === "BOX" ? "BOX" : "ROUNDED_BOX",
        width: reg.add(`${partId}.width`, s.w, { status: STATUS.INFERRED, confidence: 0.7 }),
        height: reg.add(`${partId}.height`, s.h, { status: STATUS.INFERRED, confidence: 0.7 }),
        depth: reg.add(`${partId}.depth`, s.d, { status: STATUS.INFERRED, confidence: 0.7 }),
        cornerRadius: reg.add(`${partId}.cornerRadius`, Math.min(s.w, s.d) * 0.06,
          { status: STATUS.INFERRED, confidence: 0.45, min: 0, max: Math.min(s.w, s.d) / 2 }),
      };
    }

    return {
      partId,
      name: r.name || partId,
      semanticRole: r.semanticRole || "COMPONENT",
      bodyId: r.bodyId || a.bodies?.[0]?.bodyId || "B001",
      parentPartId: null,
      mirrorOf: r.mirrorOf || null,
      sourceBinding: { assetId: null, nodePath: null, meshName: null, note: "이미지 분석 기반, 원본 메시 없음" },
      representation: { type: "PARAMETRIC", visualSource: "PARAMETRIC", editableProxy: "PARAMETRIC" },
      transform: {
        position: [num(c.x, 2), num(c.y, 2), num(c.z, 2)],
        rotationQuaternion: [0, 0, 0, 1], scale: [1, 1, 1], pivot: [0, 0, 0],
      },
      geometryBounds: {
        minimum: [num(c.x - s.w / 2, 2), num(c.y - s.h / 2, 2), num(c.z - s.d / 2, 2)],
        maximum: [num(c.x + s.w / 2, 2), num(c.y + s.h / 2, 2), num(c.z + s.d / 2, 2)],
      },
      geometryDefinition: def,
      featureIds: mine.map((f) => f.featureId),
      materialIds: [`MAT_${(ROLE_MATERIAL[r.semanticRole] || a.materialKey || "aluminum").toUpperCase()}`],
      interaction: {
        selectable: true, hideable: true, transformEditable: true,
        parameterEditable: r.editable !== false, materialEditable: true, replaceable: true,
      },
      physics: { rigidBodyId: `RB_${r.bodyId || "B001"}`, colliderId: `COL_${partId}` },
      primitiveFit: { revolve: { rms: 0, max: 0 }, box: { rms: 0, max: 0 }, chosen: 0 },
      confidence: 0.7,
      reason: `이미지 분석에서 ${r.semanticRole || "구역"}으로 판정하고 ${def.builderId}로 만듭니다.`,
      sourceStatus: STATUS.INFERRED,
    };
  });

  return {
    schemaVersion: "1.1.0",
    specificationId: `SPEC_${(a.productName || "model").replace(/[^\w가-힣]/g, "_").slice(0, 24)}_${Date.now().toString(36)}`,
    specificationVersion: 1,
    origin: "IMAGE_ANALYSIS",
    metadata: {
      generator: "VRINGON CAD spec-build (image)",
      createdAt: new Date().toISOString(),
      title: a.productName || "생성 형상",
      brief: a.summary || "",
      prompt: opts.prompt || "",
      productClass: a.productClass || "",
    },
    coordinateSystem: {
      unit: "mm", upAxis: "Y", frontAxis: "Z", handedness: "right", origin: [0, 0, 0],
      // width/height/depth alone do not say which way the product faces
      axisMeaning: a.axes || { x: "좌우 폭", y: "상하 높이", z: "전후 깊이" },
    },
    assets: [],
    /* Kept apart on purpose: one is what was asked for, the other is what a
       mesh measured. Merging them is how a model gets rescaled by the wrong
       ratio later. */
    targetDimensions: { ...td, status: STATUS.USER },
    measuredBounds: null,
    domain: { candidates: a.productClass ? [a.productClass] : [], selectedPacks: [] },
    parameters: reg.map,
    profiles,
    physicalBodies: (a.bodies || [{ bodyId: "B001", name: "본체", rigidBodyBehavior: "SINGLE_RIGID_BODY" }]),
    parts,
    features: a.features || [],
    editGroups: a.editGroups || [],
    featureTree: [],
    constraints: (a.regions || []).filter((r) => r.mirrorOf).map((r, i) => ({
      constraintId: `C${String(i + 1).padStart(3, "0")}`,
      type: "MIRROR", sourcePartId: r.mirrorOf, targetPartId: r.regionId,
      mirrorPlane: { origin: [0, 0, 0], normal: [1, 0, 0] }, priority: "HARD",
    })),
    materials: [{
      materialId: `MAT_${(a.materialKey || "aluminum").toUpperCase()}`,
      materialType: "MESH_PHYSICAL",
      parameters: { baseColor: [0.62, 0.64, 0.66], metalness: 0.9, roughness: 0.34, opacity: 1, transparent: false },
      textures: {},
    }],
    assembly: { rootPartId: parts[0]?.partId || null, relationships: [], joints: [] },
    physics: { level: "PHYSICS_PREVIEW", bodies: [] },
    interactions: { selectable: true, explode: true, section: false },
    optimization: { triangleBudget: 400000, lod: [{ level: 0, ratio: 1 }], shadowPolicy: "cast+receive" },
    validation: {
      /* Source fidelity is meaningless when there is no source mesh, so the
         scores that matter here are about structure, not silhouette. */
      overallBounds: { expected: td, unit: "mm", tolerance: { type: "RELATIVE", value: 0.12 } },
      partCount: { minimum: 2, maximum: Math.max(6, parts.length + 4) },
      coverage: {
        semanticRegions: parts.length,
        features: (a.features || []).length,
        editGroups: (a.editGroups || []).length,
        editableParameters: Object.values(reg.map).filter((p) => p.editable).length,
      },
      geometryComparison: null,
    },
    assumptions: a.assumptions || [],
    unknowns: [],
    conflicts: [],
    editHistory: [],
  };
}

/* ------------------------------------------------------------- spec patch
   Edits are operations against a version, not a rewritten document. */
export function applyPatch(spec, patch) {
  const affected = new Set();
  for (const op of patch.operations || []) {
    if (op.operation === "SET_PARAMETER") {
      const p = spec.parameters[op.parameterId];
      if (!p) continue;
      op.previousValue = p.value;
      p.value = num(op.newValue, 3);
      p.sourceStatus = STATUS.USER;
      p.confidence = 1;
      for (const id of op.affectedPartIds || []) affected.add(id);
    }
  }
  spec.specificationVersion = (spec.specificationVersion || 1) + 1;
  spec.editHistory = [
    { patchId: patch.patchId || `PATCH_${Date.now().toString(36)}`, at: new Date().toISOString(), operations: patch.operations },
    ...(spec.editHistory || []),
  ].slice(0, 60);
  return [...affected];
}

/* ------------------------------------------------------------- readable */
const TYPE_LABEL = { SOURCE_MESH: "원본 메시", PARAMETRIC: "파라메트릭", HYBRID: "하이브리드" };
const BUILDER_LABEL = {
  REVOLVE: "회전 (프로파일 revolve)", EXTRUDE_2D: "2D 프로파일 돌출",
  ROUNDED_BOX: "라운드 박스", BOX: "박스", CYLINDER: "원통", TUBE: "튜브",
  SOURCE_MESH: "원본 메시 그대로",
};

export function specSummary(spec) {
  const L = [];
  const a = spec.assets?.[0] || {};
  L.push(`${spec.metadata.title}  ·  사양서 v${spec.specificationVersion}`
    + (spec.origin === "IMAGE_ANALYSIS" ? "  ·  이미지 분석 기반" : ""));
  if (spec.metadata.brief) L.push(`  ${spec.metadata.brief}`);
  L.push("");
  L.push("[좌표계·치수]");
  const ax = spec.coordinateSystem.axisMeaning;
  L.push(`  ${spec.coordinateSystem.unit} · ${spec.coordinateSystem.upAxis}-up · ${spec.coordinateSystem.handedness}-handed`
    + (ax ? `  (X=${ax.x}, Y=${ax.y}, Z=${ax.z})` : ""));
  /* Two different claims, never merged: what was asked for, and what a mesh
     measured. Showing them on separate lines is the point. */
  if (spec.targetDimensions) {
    const t = spec.targetDimensions;
    L.push(`  목표 치수 ${t.width} × ${t.height} × ${t.depth} mm  [${t.status || "USER_PROVIDED"}]`
      + (t.basis ? ` — ${t.basis}` : ""));
  }
  if (spec.measuredBounds) {
    const m = spec.measuredBounds;
    L.push(`  실측 바운딩박스 ${m.width} × ${m.height} × ${m.depth} mm  [MESH_MEASURED]`);
  } else if (spec.origin === "IMAGE_ANALYSIS") {
    L.push(`  실측 바운딩박스 없음 — 3D 메시를 아직 만들지 않았습니다 (원본 메시 버튼)`);
  }
  if (a.boundingBox) L.push(`  원본 GLB ${a.boundingBox.width} × ${a.boundingBox.height} × ${a.boundingBox.depth} mm`
    + (a.triangles ? ` · 삼각형 ${a.triangles.toLocaleString()}` : ""));
  if (spec.physicalBodies?.length) {
    L.push("");
    L.push(`[물리 바디 ${spec.physicalBodies.length}개]`);
    for (const b of spec.physicalBodies) L.push(`  ${b.bodyId} ${b.name} — ${b.rigidBodyBehavior}`);
    L.push(`  의미 영역 ${spec.parts.length}개는 이 바디 안의 기능 구역이며 별도 부품이 아닙니다.`);
  }
  L.push("");
  L.push(`[파라미터 ${Object.keys(spec.parameters).length}개 · 중앙 관리]`);
  for (const [id, p] of Object.entries(spec.parameters)) {
    L.push(`  ${id} = ${p.value}${p.unit}  [${p.minimum}~${p.maximum}]  ${p.sourceStatus} (${p.confidence})`);
  }
  L.push("");
  L.push(`[의미 영역 ${spec.parts.length}개]`);
  const featsOf = (id) => (spec.features || []).filter((f) => f.regionId === id);
  for (const p of spec.parts) {
    const d = p.geometryDefinition;
    L.push(`  ${p.partId} ${p.name} — ${p.semanticRole}`
      + (p.mirrorOf ? `  (${p.mirrorOf} 대칭)` : ""));
    L.push(`    빌더 ${BUILDER_LABEL[d.builderId] || d.builderId}`
      + (d.profileId ? ` · 프로파일 ${d.profileId}` : "")
      + `  ·  ${TYPE_LABEL[p.representation.type] || p.representation.type}`);
    const bb = p.geometryBounds;
    if (bb) {
      L.push(`    치수 ${(bb.maximum[0] - bb.minimum[0]).toFixed(1)} × ${(bb.maximum[1] - bb.minimum[1]).toFixed(1)}`
        + ` × ${(bb.maximum[2] - bb.minimum[2]).toFixed(1)} mm · 중심 ${p.transform.position.join(", ")}`);
    }
    if (p.sourceBinding?.nodePath) L.push(`    원본 바인딩 ${p.sourceBinding.nodePath}`);
    if (p.primitiveFit?.chosen > 0) {
      L.push(`    프리미티브 적합도 회전체 ${(p.primitiveFit.revolve.rms * 100).toFixed(1)}%`
        + ` · 각형 ${(p.primitiveFit.box.rms * 100).toFixed(1)}%`);
    }
    const refs = Object.entries(d).filter(([, v]) => v && v.parameterRef).map(([k, v]) => `${k}→${v.parameterRef}`);
    if (refs.length) L.push(`    편집 파라미터 ${refs.join(", ")}`);
    const fs = featsOf(p.partId);
    if (fs.length) {
      L.push(`    피처 ${fs.length}개: ${fs.map((f) => `${f.name}(${f.type}`
        + (f.count ? `×${f.count}` : "") + (f.diameter ? ` Ø${f.diameter}` : "") + ")").join(", ")}`);
    }
    L.push(`    ${p.reason}`);
  }
  if (spec.editGroups?.length) {
    L.push("");
    L.push(`[편집 그룹 ${spec.editGroups.length}개 — 사용자가 한 번에 바꾸는 묶음]`);
    for (const g of spec.editGroups) {
      L.push(`  ${g.editGroupId} ${g.name}: 영역 ${(g.regionIds || []).join(", ")}`
        + ((g.featureIds || []).length ? ` · 피처 ${g.featureIds.join(", ")}` : ""));
    }
  }
  if (spec.constraints?.length) {
    L.push("");
    L.push(`[제약조건 ${spec.constraints.length}개]`);
    for (const c of spec.constraints) L.push(`  ${c.constraintId} ${c.type}: ${c.sourcePartId} → ${c.targetPartId} (${c.priority})`);
  }
  if (spec.profiles.length) {
    L.push("");
    L.push(`[프로파일 ${spec.profiles.length}개]`);
    for (const pr of spec.profiles) {
      const kinds = {};
      for (const s of pr.segments) kinds[s.type] = (kinds[s.type] || 0) + 1;
      L.push(`  ${pr.profileId}: ${Object.entries(kinds).map(([k, n]) => `${k} ${n}`).join(", ")}`
        + `, 홀 ${pr.holes.length}개`);
    }
  }
  L.push("");
  L.push("[검증]");
  if (spec.validation.overallBounds) {
    const e = spec.validation.overallBounds.expected;
    L.push(`  전체 치수 ${e.width} × ${e.height} × ${e.depth} mm, 허용 오차 ${spec.validation.overallBounds.tolerance.value * 100}%`);
  }
  /* Source fidelity and structural understanding are different scores. A model
     that loads the original mesh untouched scores 100% on the first and tells
     you nothing about the second. */
  const cov = spec.validation.coverage;
  if (cov) {
    L.push(`  구조 이해도 — 의미 영역 ${cov.semanticRegions} · 피처 ${cov.features}`
      + ` · 편집 그룹 ${cov.editGroups} · 편집 가능 파라미터 ${cov.editableParameters}`);
  }
  if (spec.validation.geometryComparison) {
    L.push(`  원본 형상 충실도 — 실루엣 IoU 최소 ${spec.validation.geometryComparison.minimumSilhouetteIoU * 100}%`);
  } else {
    L.push(`  원본 형상 충실도 — 비교할 메시가 없습니다 (원본 메시를 생성하면 측정됩니다)`);
  }
  if (spec.assumptions?.length) {
    L.push("");
    L.push("[추론한 값]");
    for (const s of spec.assumptions) L.push(`  · ${s}`);
  }
  return L.join("\n");
}
