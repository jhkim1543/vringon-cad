/* ==========================================================================
   Specification compiler.

   The specification is the model, not a description of it. This module reads a
   model.spec.json and produces the THREE.Group the viewport shows: every part
   built by its declared builder from parameters held in one registry, with
   features cut afterwards.

   The source GLB stays available and is bound per part, so a part whose shape
   no primitive can describe keeps its original geometry while its neighbours
   are rebuilt from numbers. That is the whole point of the hybrid contract:
   changing P002.thickness rebuilds P002 and nothing else.

   Nothing here writes three.js by hand from a language model. The spec carries
   builderId plus inputs; the builders below are the only code that touches
   geometry.
   ========================================================================== */
import * as THREE from "three";

/* ------------------------------------------------------- parameter registry
   Every editable number lives in one place and is referenced, never copied.
   A dimension repeated in two parts drifts apart the moment one is edited. */
export function resolveParam(spec, ref, fallback = 0) {
  if (ref == null) return fallback;
  if (typeof ref === "number") return ref;
  if (typeof ref === "object" && ref.parameterRef) {
    const p = spec.parameters?.[ref.parameterRef];
    return p ? Number(p.value) : fallback;
  }
  if (typeof ref === "string" && spec.parameters?.[ref]) return Number(spec.parameters[ref].value);
  const n = Number(ref);
  return isFinite(n) ? n : fallback;
}

const R = (spec) => (ref, fb = 0) => resolveParam(spec, ref, fb);

/* --------------------------------------------------------------- profiles
   Stored as curve segments rather than a point soup, so a fillet stays a
   radius instead of becoming twelve indistinguishable points. Tessellated
   here, at the tolerance the spec asks for. */
function profilePoints2D(profile, get) {
  const tol = profile.tessellation?.curveTolerance ?? 0.08;
  const out = [];
  const push = (x, y) => {
    const last = out[out.length - 1];
    if (!last || Math.hypot(last.x - x, last.y - y) > 1e-4) out.push(new THREE.Vector2(x, y));
  };
  for (const s of profile.segments || []) {
    if (s.type === "LINE") {
      push(get(s.start[0]), get(s.start[1]));
      push(get(s.end[0]), get(s.end[1]));
    } else if (s.type === "ARC") {
      const cx = get(s.center[0]), cy = get(s.center[1]), r = get(s.radius);
      const a0 = get(s.startAngle), a1 = get(s.endAngle);
      // segment count from the sagitta so the tolerance is actually honoured
      const sweep = Math.abs(a1 - a0);
      const n = Math.max(2, Math.ceil(sweep / (2 * Math.acos(Math.max(-1, 1 - tol / Math.max(tol, r))))));
      for (let i = 0; i <= n; i++) {
        const a = a0 + ((a1 - a0) * i) / n;
        push(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      }
    } else if (s.type === "CUBIC_BEZIER") {
      const p0 = s.start, c1 = s.control1, c2 = s.control2, p1 = s.end;
      const n = Math.max(6, Math.ceil(Math.hypot(get(p1[0]) - get(p0[0]), get(p1[1]) - get(p0[1])) / Math.max(0.5, tol * 8)));
      for (let i = 0; i <= n; i++) {
        const t = i / n, u = 1 - t;
        const x = u * u * u * get(p0[0]) + 3 * u * u * t * get(c1[0]) + 3 * u * t * t * get(c2[0]) + t * t * t * get(p1[0]);
        const y = u * u * u * get(p0[1]) + 3 * u * u * t * get(c1[1]) + 3 * u * t * t * get(c2[1]) + t * t * t * get(p1[1]);
        push(x, y);
      }
    }
  }
  return out;
}

function holePath(hole, get) {
  const p = new THREE.Path();
  const cx = get(hole.center[0]), cy = get(hole.center[1]);
  if (hole.profileType === "CIRCLE" || hole.diameter != null) {
    const r = get(hole.diameter) / 2 || get(hole.radius);
    p.absarc(cx, cy, r, 0, Math.PI * 2, true);
    return p;
  }
  const w = get(hole.width) / 2, h = get(hole.height) / 2;
  const cr = Math.min(get(hole.cornerRadius ?? 0), Math.min(w, h));
  p.moveTo(cx - w + cr, cy - h);
  p.lineTo(cx + w - cr, cy - h);
  if (cr > 0) p.absarc(cx + w - cr, cy - h + cr, cr, -Math.PI / 2, 0, false);
  p.lineTo(cx + w, cy + h - cr);
  if (cr > 0) p.absarc(cx + w - cr, cy + h - cr, cr, 0, Math.PI / 2, false);
  p.lineTo(cx - w + cr, cy + h);
  if (cr > 0) p.absarc(cx - w + cr, cy + h - cr, cr, Math.PI / 2, Math.PI, false);
  p.lineTo(cx - w, cy - h + cr);
  if (cr > 0) p.absarc(cx - w + cr, cy - h + cr, cr, Math.PI, Math.PI * 1.5, false);
  p.closePath();
  return p;
}

/* ---------------------------------------------------------------- builders
   The complete set of things a specification is allowed to ask for. A spec
   naming anything else fails loudly rather than silently producing a cube. */
export const BUILDERS = {
  BOX: (def, ctx) => {
    const g = ctx.get;
    return new THREE.BoxGeometry(g(def.width, 10), g(def.height, 10), g(def.depth, 10), 2, 2, 2);
  },

  ROUNDED_BOX: (def, ctx) => {
    /* Extrude a rounded rectangle: three.js has no rounded box, and a plain
       box reads as a placeholder next to a real housing. */
    const g = ctx.get;
    const w = g(def.width, 10), h = g(def.height, 10), d = g(def.depth, 10);
    const r = Math.min(g(def.cornerRadius, Math.min(w, d) * 0.08), Math.min(w, d) / 2 - 0.01);
    const s = new THREE.Shape();
    s.moveTo(-w / 2 + r, -d / 2);
    s.lineTo(w / 2 - r, -d / 2);
    s.absarc(w / 2 - r, -d / 2 + r, r, -Math.PI / 2, 0, false);
    s.lineTo(w / 2, d / 2 - r);
    s.absarc(w / 2 - r, d / 2 - r, r, 0, Math.PI / 2, false);
    s.lineTo(-w / 2 + r, d / 2);
    s.absarc(-w / 2 + r, d / 2 - r, r, Math.PI / 2, Math.PI, false);
    s.lineTo(-w / 2, -d / 2 + r);
    s.absarc(-w / 2 + r, -d / 2 + r, r, Math.PI, Math.PI * 1.5, false);
    const geo = new THREE.ExtrudeGeometry(s, { depth: h, bevelEnabled: false, curveSegments: 12 });
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, h / 2, 0);
    return geo;
  },

  CYLINDER: (def, ctx) => {
    const g = ctx.get;
    const rt = g(def.radiusTop, g(def.radius, 5));
    const rb = g(def.radiusBottom, g(def.radius, 5));
    return new THREE.CylinderGeometry(rt, rb, g(def.height, 10), g(def.segments, 48));
  },

  TUBE: (def, ctx) => {
    const g = ctx.get;
    const ro = g(def.outerRadius, 10), ri = Math.min(g(def.innerRadius, 6), ro - 0.05);
    const h = g(def.height, 10);
    // a revolve of the wall cross-section: watertight, unlike an open cylinder
    const pts = [
      new THREE.Vector2(ri, 0), new THREE.Vector2(ro, 0),
      new THREE.Vector2(ro, h), new THREE.Vector2(ri, h),
      new THREE.Vector2(ri, 0),
    ];
    const geo = new THREE.LatheGeometry(pts, g(def.segments, 48));
    geo.translate(0, -h / 2, 0);
    return geo;
  },

  CONE: (def, ctx) => {
    const g = ctx.get;
    return new THREE.ConeGeometry(g(def.radius, 5), g(def.height, 10), g(def.segments, 40));
  },

  SPHERE: (def, ctx) => new THREE.SphereGeometry(ctx.get(def.radius, 5), 40, 26),

  TORUS: (def, ctx) => {
    const g = ctx.get;
    return new THREE.TorusGeometry(g(def.radius, 10), g(def.tube, 2), 18, 48);
  },

  REVOLVE: (def, ctx) => {
    const prof = ctx.profiles[def.profileId];
    if (!prof) throw new Error(`REVOLVE: profile ${def.profileId} 없음`);
    let pts = profilePoints2D(prof, ctx.get);
    // two points describe a cylinder; the ends are closed onto the axis below
    if (pts.length < 2) throw new Error("REVOLVE: 프로파일 점이 2개 미만");
    // close the ends onto the axis so the solid is not an open shell
    if (pts[0].x > 0.05) pts.unshift(new THREE.Vector2(0.0001, pts[0].y));
    if (pts[pts.length - 1].x > 0.05) pts.push(new THREE.Vector2(0.0001, pts[pts.length - 1].y));
    pts = pts.map((p) => new THREE.Vector2(Math.max(0.0001, p.x), p.y));
    /* Scale the measured section to the registry's radius and height. Without
       this the profile coordinates are literals and editing P00n.maxRadius
       changes nothing — the parameter would be decoration. */
    const baseR = def.baseMaxRadius || Math.max(...pts.map((p) => p.x)) || 1;
    const baseH = def.baseHeight || (Math.max(...pts.map((p) => p.y)) - Math.min(...pts.map((p) => p.y))) || 1;
    const sR = ctx.get(def.maxRadius, baseR) / baseR;
    const sH = ctx.get(def.height, baseH) / baseH;
    if (isFinite(sR) && isFinite(sH) && (Math.abs(sR - 1) > 1e-6 || Math.abs(sH - 1) > 1e-6)) {
      pts = pts.map((p) => new THREE.Vector2(Math.max(0.0001, p.x * sR), p.y * sH));
    }
    const segs = ctx.get(def.segments, 96);
    const geo = new THREE.LatheGeometry(pts, Math.max(12, Math.round(segs)));
    const ys = pts.map((p) => p.y);
    geo.translate(0, -(Math.min(...ys) + (Math.max(...ys) - Math.min(...ys)) / 2), 0);
    return geo;
  },

  EXTRUDE_2D: (def, ctx) => {
    const prof = ctx.profiles[def.profileId];
    if (!prof) throw new Error(`EXTRUDE_2D: profile ${def.profileId} 없음`);
    let pts = profilePoints2D(prof, ctx.get);
    if (pts.length < 3) throw new Error("EXTRUDE_2D: 외곽 점이 3개 미만");
    // same reason as REVOLVE: keep the registry's width/depth in control
    const bw = def.baseWidth || 0, bd = def.baseDepth || 0;
    if (bw > 0 && bd > 0) {
      const sx = ctx.get(def.width, bw) / bw;
      const sy = ctx.get(def.outlineDepth, bd) / bd;
      if (isFinite(sx) && isFinite(sy) && (Math.abs(sx - 1) > 1e-6 || Math.abs(sy - 1) > 1e-6)) {
        pts = pts.map((p) => new THREE.Vector2(p.x * sx, p.y * sy));
      }
    }
    const shape = new THREE.Shape(pts);
    /* Holes ride on the Shape rather than needing a boolean op, which is why
       plate and bracket cutouts work here without a CSG kernel. */
    for (const h of prof.holes || []) shape.holes.push(holePath(h, ctx.get));
    const depth = ctx.get(def.depth, 4);
    const bevel = ctx.get(def.bevelSize, 0);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth, bevelEnabled: bevel > 0, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 3,
      curveSegments: 16,
    });
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, depth / 2, 0);
    return geo;
  },

  SOURCE_MESH: (def, ctx) => {
    const node = ctx.findSource(def.nodePath || def.meshName || def.nodeName);
    if (!node) throw new Error(`SOURCE_MESH: ${def.nodePath || def.meshName} 를 원본에서 찾지 못함`);
    const geos = [];
    node.updateWorldMatrix(true, false);
    node.traverse((o) => {
      if (!o.isMesh || !o.geometry) return;
      const g = o.geometry.clone();
      g.applyMatrix4(o.matrixWorld);
      geos.push(g);
    });
    if (!geos.length) throw new Error("SOURCE_MESH: 지오메트리 없음");
    let geo = geos[0];
    if (geos.length > 1) {
      // keep it simple and dependency-free: merge by concatenating positions
      const merged = new THREE.BufferGeometry();
      const arrays = geos.map((g) => (g.index ? g.toNonIndexed() : g).getAttribute("position").array);
      const total = arrays.reduce((n, a) => n + a.length, 0);
      const pos = new Float32Array(total);
      let off = 0;
      for (const a of arrays) { pos.set(a, off); off += a.length; }
      merged.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      merged.computeVertexNormals();
      geos.forEach((g) => g.dispose());
      geo = merged;
    }
    // re-centre so the part's transform in the spec is what places it
    geo.computeBoundingBox();
    const c = geo.boundingBox.getCenter(new THREE.Vector3());
    geo.translate(-c.x, -c.y, -c.z);
    /* Dimensions still apply: the shape is the generated geometry, but the
       registry's width/height/depth scale it about its own centre. */
    const bw = def.baseWidth, bh = def.baseHeight, bd = def.baseDepth;
    if (bw > 0 && bh > 0 && bd > 0) {
      const sx = ctx.get(def.width, bw) / bw;
      const sy = ctx.get(def.height, bh) / bh;
      const sz = ctx.get(def.depth, bd) / bd;
      if ([sx, sy, sz].every(isFinite) && (Math.abs(sx - 1) > 1e-6 || Math.abs(sy - 1) > 1e-6 || Math.abs(sz - 1) > 1e-6)) {
        geo.scale(sx, sy, sz);
      }
    }
    geo.userData = { sourceCentre: c.toArray() };
    return geo;
  },
};

/* ---------------------------------------------------------------- features
   Applied after the base solid. Holes on extruded parts are handled by the
   profile itself; what remains here are the operations that change the solid
   as a whole. Without a CSG kernel, a hole through an arbitrary solid cannot
   be cut honestly, so it is recorded as unsupported rather than faked. */
export function applyFeatures(geo, part, spec, ctx) {
  const notes = [];
  for (const f of spec.featureTree || []) {
    if (f.partId !== part.partId || f.enabled === false) continue;
    if (f.operation === "BASE_EXTRUDE" || f.operation === "BASE") continue;
    if (f.operation === "SCALE") {
      const s = f.inputs || {};
      geo.scale(ctx.get(s.x, 1), ctx.get(s.y, 1), ctx.get(s.z, 1));
    } else if (f.operation === "TRANSLATE") {
      const s = f.inputs || {};
      geo.translate(ctx.get(s.x, 0), ctx.get(s.y, 0), ctx.get(s.z, 0));
    } else if (f.operation === "HOLE" || f.operation === "CUTOUT") {
      // extruded parts already carry these in their profile
      if (part.geometryDefinition?.builderId !== "EXTRUDE_2D") {
        notes.push(`${f.featureId}: ${f.operation}는 이 빌더에서 프로파일로만 표현됩니다`);
      }
    } else {
      notes.push(`${f.featureId}: ${f.operation} 미지원`);
    }
  }
  return notes;
}

/* --------------------------------------------------------------- compiler */
export function compileSpec(spec, sourceRoot, opts = {}) {
  const get = R(spec);
  const profiles = {};
  for (const p of spec.profiles || []) profiles[p.profileId] = p;

  const byName = new Map();
  if (sourceRoot) {
    sourceRoot.updateWorldMatrix(true, true);
    sourceRoot.traverse((o) => {
      const k = String(o.name || "").replace(/[_\s]+/g, " ").trim().toLowerCase();
      if (k && !byName.has(k)) byName.set(k, o);
    });
  }
  const findSource = (name) => {
    if (!name) return sourceRoot;
    const k = String(name).split("/").pop().replace(/[_\s]+/g, " ").trim().toLowerCase();
    return byName.get(k) || null;
  };

  const ctx = { get, profiles, findSource };
  const root = new THREE.Group();
  root.name = spec.specificationId || "spec_model";
  root.userData = { specificationId: spec.specificationId, specVersion: spec.specificationVersion };

  const report = { built: [], failed: [], notes: [] };

  for (const part of spec.parts || []) {
    const def = part.geometryDefinition || {};
    const builderId = def.builderId || "SOURCE_MESH";
    const builder = BUILDERS[builderId];
    let geo = null;
    try {
      if (!builder) throw new Error(`알 수 없는 빌더 ${builderId}`);
      geo = builder(def, ctx);
      report.notes.push(...applyFeatures(geo, part, spec, ctx));
    } catch (e) {
      /* Falling back to the source mesh keeps the model complete and says why,
         which is better than dropping a part out of the assembly silently. */
      report.failed.push({ partId: part.partId, builderId, error: e.message });
      try { geo = BUILDERS.SOURCE_MESH({ nodePath: part.sourceBinding?.nodePath || part.sourceBinding?.meshName }, ctx); }
      catch { continue; }
    }
    if (!geo) continue;

    const mat = opts.materialFor
      ? opts.materialFor(part.materialIds?.[0], part)
      : new THREE.MeshStandardMaterial({ color: 0x9aa0aa, metalness: 0.6, roughness: 0.4 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = part.name || part.partId;
    mesh.castShadow = mesh.receiveShadow = true;

    const t = part.transform || {};
    const pos = t.position || [0, 0, 0];
    /* A source-mesh part was re-centred on its own bounds, so put it back where
       it sat in the original; built parts use the spec's placement. */
    if (builderId === "SOURCE_MESH" && geo.userData?.sourceCentre) {
      mesh.position.fromArray(geo.userData.sourceCentre);
    } else {
      mesh.position.set(get(pos[0], 0), get(pos[1], 0), get(pos[2], 0));
    }
    if (t.rotationQuaternion) mesh.quaternion.fromArray(t.rotationQuaternion);
    if (t.scale) mesh.scale.set(get(t.scale[0], 1), get(t.scale[1], 1), get(t.scale[2], 1));

    mesh.userData = {
      isPart: true,
      partId: part.partId,
      specificationId: spec.specificationId,
      semanticRole: part.semanticRole,
      representationType: part.representation?.type || builderId,
      builderId,
      materialKey: part.materialIds?.[0],
      parameterIds: collectParamRefs(def),
    };
    root.add(mesh);
    report.built.push({ partId: part.partId, builderId });
  }
  return { root, report };
}

/** which registry entries a part's definition depends on */
function collectParamRefs(node, out = []) {
  if (!node || typeof node !== "object") return out;
  if (node.parameterRef) { out.push(node.parameterRef); return out; }
  for (const v of Object.values(node)) if (v && typeof v === "object") collectParamRefs(v, out);
  return out;
}

/** parts whose geometry depends on a given parameter */
export function partsAffectedBy(spec, parameterId) {
  const hit = [];
  for (const p of spec.parts || []) {
    const refs = collectParamRefs(p.geometryDefinition || {});
    for (const f of spec.featureTree || []) {
      if (f.partId === p.partId) collectParamRefs(f.inputs || {}, refs);
    }
    if (refs.includes(parameterId)) hit.push(p.partId);
  }
  return hit;
}
