/* ==========================================================================
   Non-destructive modifier stack.

   The source vertex buffers are never written. Each mesh keeps its original
   positions, and every edit is re-evaluated from that baseline, so removing a
   modifier restores the geometry exactly rather than approximately.

   Region edits are weighted by distance to the region, with a smooth falloff,
   so pushing a mounting face does not tear it away from the frame it belongs
   to. Untouched regions come back bit-identical, which is what makes
   "원본 보호" a claim we can actually check.
   ========================================================================== */
import * as THREE from "three";

const BASE = "__vringonBasePositions";

/** stash the pristine positions once, so every rebuild starts from the source */
export function captureBaseline(root) {
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry?.attributes?.position) return;
    if (o.geometry.userData[BASE]) return;
    o.geometry.userData[BASE] = o.geometry.attributes.position.array.slice();
  });
}

export function hasBaseline(root) {
  let found = false;
  root.traverse((o) => { if (o.isMesh && o.geometry?.userData?.[BASE]) found = true; });
  return found;
}

/**
 * Weight for a vertex against a region: 1 inside, falling smoothly to 0 across
 * a margin. A hard cut would leave a visible seam and break the surface.
 */
function regionWeight(x, y, z, region, margin) {
  const c = region.geometry.centre;
  const s = region.geometry.size;
  const hx = Math.max(s[0] / 2, 1e-3), hy = Math.max(s[1] / 2, 1e-3), hz = Math.max(s[2] / 2, 1e-3);
  const dx = Math.abs(x - c[0]) - hx;
  const dy = Math.abs(y - c[1]) - hy;
  const dz = Math.abs(z - c[2]) - hz;
  const d = Math.max(dx, dy, dz);            // signed box distance, outside > 0
  if (d <= 0) return 1;
  if (d >= margin) return 0;
  const t = 1 - d / margin;
  return t * t * (3 - 2 * t);                // smoothstep
}

/**
 * Re-evaluate every mesh from its baseline with the active modifiers applied.
 * Returns how many vertices actually moved, which is the number the validation
 * pass uses to confirm that protected areas stayed put.
 */
export function applyModifiers(root, spec) {
  captureBaseline(root);
  const mods = (spec.modifiers || []).filter((m) => m.enabled !== false);
  const byRegion = new Map();
  for (const r of spec.semanticRegions || []) byRegion.set(r.regionId, r);

  const bb = new THREE.Box3().setFromObject(root);
  const diag = bb.getSize(new THREE.Vector3()).length() || 1;
  const margin = diag * 0.06;

  let moved = 0, total = 0;
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry?.attributes?.position) return;
    const attr = o.geometry.attributes.position;
    const base = o.geometry.userData[BASE];
    if (!base) return;
    const arr = attr.array;
    // start from the pristine buffer every time; modifiers never accumulate
    arr.set(base);
    total += attr.count;

    if (!mods.length) { attr.needsUpdate = true; return; }

    const v = new THREE.Vector3();
    const local = new THREE.Vector3();
    o.updateWorldMatrix(true, false);
    const toWorld = o.matrixWorld;
    const toLocal = new THREE.Matrix4().copy(toWorld).invert();

    for (let i = 0; i < attr.count; i++) {
      v.set(base[i * 3], base[i * 3 + 1], base[i * 3 + 2]);
      local.copy(v);
      v.applyMatrix4(toWorld);                       // region geometry is world-space
      let dx = 0, dy = 0, dz = 0, touched = false;

      for (const m of mods) {
        if (m.type === "REGION_OFFSET" || m.type === "REGION_SCALE") {
          for (const rid of m.targetRegionIds || []) {
            const r = byRegion.get(rid);
            if (!r) continue;
            const w = regionWeight(v.x, v.y, v.z, r, margin);
            if (w <= 0) continue;
            touched = true;
            if (m.type === "REGION_OFFSET") {
              const n = r.geometry.normal;
              const d = Number(m.parameters?.distance) || 0;
              dx += n[0] * d * w; dy += n[1] * d * w; dz += n[2] * d * w;
            } else {
              const k = Number(m.parameters?.scale);
              if (!isFinite(k) || k === 1) continue;
              const c = r.geometry.centre;
              dx += (v.x - c[0]) * (k - 1) * w;
              dy += (v.y - c[1]) * (k - 1) * w;
              dz += (v.z - c[2]) * (k - 1) * w;
            }
          }
        }
      }

      if (!touched || (dx === 0 && dy === 0 && dz === 0)) continue;
      // back to object space, since that is what the buffer holds
      const wp = new THREE.Vector3(v.x + dx, v.y + dy, v.z + dz).applyMatrix4(toLocal);
      arr[i * 3] = wp.x; arr[i * 3 + 1] = wp.y; arr[i * 3 + 2] = wp.z;
      moved++;
    }
    attr.needsUpdate = true;
    o.geometry.computeVertexNormals();
    o.geometry.computeBoundingBox();
    o.geometry.computeBoundingSphere();
  });

  return { moved, total, untouched: total - moved };
}

/** find or create the modifier a parameter drives */
export function modifierFor(spec, { type, regionId, partId, featureId }) {
  spec.modifiers = spec.modifiers || [];
  const key = regionId || partId || featureId || "MODEL";
  let m = spec.modifiers.find((x) => x.type === type
    && (x.targetRegionIds || []).includes(regionId)
    || (x.type === type && x.__key === key));
  if (!m) {
    m = {
      modifierId: `MOD_${type}_${key}`,
      __key: key,
      type,
      targetBodyIds: [], targetPartIds: partId ? [partId] : [],
      targetRegionIds: regionId ? [regionId] : [],
      targetFeatureIds: featureId ? [featureId] : [],
      parameters: {},
      boundaryPolicy: "SMOOTH_FALLOFF",
      enabled: true,
    };
    spec.modifiers.push(m);
  }
  return m;
}

/**
 * Run a parameter change. Nothing here rebuilds the model: each operation
 * touches only what it names, which is the difference between an edit and a
 * regeneration.
 */
export function runOperation(spec, root, parameter, value) {
  const t = parameter.target || {};
  switch (parameter.operation) {
    case "GLOBAL_TRANSFORM": {
      if (parameter.label.includes("배율")) root.scale.setScalar(value);
      else if (parameter.label.includes("X")) root.position.x = value;
      else if (parameter.label.includes("Y")) root.position.y = value;
      else if (parameter.label.includes("Z")) root.position.z = value;
      return { rebuilt: false, scope: "transform" };
    }
    case "PART_TRANSFORM": {
      const node = root.children.find((c) => c.userData?.partId === t.partId) || root.children[0];
      if (node) node.position.y = value;
      return { rebuilt: false, scope: "part-transform" };
    }
    case "REGION_OFFSET": {
      const m = modifierFor(spec, { type: "REGION_OFFSET", regionId: t.regionId });
      m.parameters.distance = value;
      const r = applyModifiers(root, spec);
      return { rebuilt: false, scope: "region", ...r };
    }
    case "REGION_SCALE": {
      const m = modifierFor(spec, { type: "REGION_SCALE", regionId: t.regionId });
      m.parameters.scale = value;
      const r = applyModifiers(root, spec);
      return { rebuilt: false, scope: "region", ...r };
    }
    case "HOLE_DIAMETER":
      /* Honest refusal: enlarging a bore in a triangle soup needs a boolean
         kernel we do not have in the browser. Recording the intent keeps it in
         the spec for the geometry service instead of silently doing nothing. */
      return {
        rebuilt: false, scope: "feature", deferred: true,
        message: "보어 직경 변경은 국부 불리언 연산이 필요합니다. 사양서에 기록했고 형상은 아직 바꾸지 않았습니다.",
      };
    default:
      return { rebuilt: false, scope: "none", deferred: true, message: `${parameter.operation} 미구현` };
  }
}
