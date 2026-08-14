/* ==========================================================================
   ThreeJsSpecification.

   The pipeline used to generate a high quality mesh, measure it, and then throw
   it away to rebuild the product out of lathes and boxes. Everything that made
   the reconstruction good — the cast fillets, the draft faces, the decoration —
   was lost, and the result was worse than the mesh it came from.

   This module implements the other contract: the generated 3D is the source of
   truth for shape, and the specification is a runtime execution spec that says
   how to STRUCTURE that mesh — which triangles are which part, what each part
   does, which parts are genuinely standard enough to be rebuilt parametrically,
   and what the user is allowed to edit.

   A part is only rebuilt when a primitive actually fits it. Everything else
   keeps its original geometry.
   ========================================================================== */
import * as THREE from "three";
import { worldTris, surfaceSamples } from "./robot.js?v=396db0bf";
import { preciseProfile } from "./measure.js?v=396db0bf";

/* ------------------------------------------------------------- fit testing
   How well does a primitive describe this part? Measured as the residual
   between the actual surface points and the surface a primitive would make,
   normalised by the part's size so the number is comparable across scales. */

/* Normalise by the geometric mean of the three dimensions, not the largest.
   Dividing by the longest axis made a 14mm-radius shaft 210mm long read as a
   2% box fit — the residual is small next to the length and large next to the
   cross-section, and only the cross-section is what the box gets wrong. */
const fitScale = (size) => {
  const d = [size.x, size.y, size.z].filter((v) => isFinite(v) && v > 1e-6);
  if (!d.length) return 1;
  return Math.pow(d.reduce((a, b) => a * b, 1), 1 / d.length);
};

function statsOf(residuals, scale) {
  if (!residuals.length) return { rms: 1, max: 1, n: 0 };
  let sum = 0, max = 0;
  for (const d of residuals) { sum += d * d; if (d > max) max = d; }
  return {
    rms: Math.sqrt(sum / residuals.length) / scale,
    max: max / scale,
    n: residuals.length,
  };
}

/** residual of the part against the solid of revolution its own profile implies */
export function revolveFit(object, profile) {
  const pts = surfaceSamples(object, 1200);
  if (pts.length < 40 || !profile?.length) return { rms: 1, max: 1, n: 0 };
  const bb = new THREE.Box3().setFromObject(object);
  const c = bb.getCenter(new THREE.Vector3());
  const size = bb.getSize(new THREE.Vector3());
  const scale = fitScale(size);

  /* Distance from the sample to the profile POLYLINE, not the radius at that
     height. A shoulder is a horizontal run in (r,y): points on that annular
     face lie exactly on the profile, but comparing them to an interpolated
     radius made every stepped shaft look like a 10% misfit and pushed real
     turned parts to SOURCE_MESH. */
  const distToProfile = (r, t) => {
    let best = Infinity;
    for (let i = 1; i < profile.length; i++) {
      const a = profile[i - 1], b = profile[i];
      const dr = b.r - a.r, dt = b.t - a.t;
      const len2 = dr * dr + dt * dt;
      let u = len2 > 1e-12 ? ((r - a.r) * dr + (t - a.t) * dt) / len2 : 0;
      u = Math.max(0, Math.min(1, u));
      const d = Math.hypot(r - (a.r + dr * u), t - (a.t + dt * u));
      if (d < best) best = d;
    }
    return isFinite(best) ? best : Math.abs(r - profile[0].r);
  };

  const res = [];
  for (const p of pts) {
    const t = p.y - bb.min.y;
    const r = Math.hypot(p.x - c.x, p.z - c.z);
    /* Points on the flat top and bottom sit inside the profile radius rather
       than on it, and counting them as error would reject every real turned
       part. Only the side wall tests the revolve assumption. The band is a
       fraction of the part's own HEIGHT: taken from the largest dimension it
       excluded nothing on a flat disc, whose caps are most of its surface, and
       every disc was scored as a bad revolve. */
    const band = Math.max(size.y * 0.06, 0.3);
    if (t < band || t > size.y - band) continue;
    res.push(distToProfile(r, t));
  }
  return statsOf(res, scale);
}

/** residual against the part's own bounding box surface */
export function boxFit(object) {
  const pts = surfaceSamples(object, 1200);
  if (pts.length < 40) return { rms: 1, max: 1, n: 0 };
  const bb = new THREE.Box3().setFromObject(object);
  const size = bb.getSize(new THREE.Vector3());
  const scale = fitScale(size);
  const res = pts.map((p) => Math.min(
    Math.abs(p.x - bb.min.x), Math.abs(p.x - bb.max.x),
    Math.abs(p.y - bb.min.y), Math.abs(p.y - bb.max.y),
    Math.abs(p.z - bb.min.z), Math.abs(p.z - bb.max.z),
  ));
  return statsOf(res, scale);
}

/** what kind of surface this part is made of, from its face normals */
export function geometryCharacteristics(object) {
  /* Count the real triangles from the buffers; the normal statistics below are
     computed from a subsample, and reporting that subsample as the part's
     triangle count understated a 180k mesh as 22.5k. */
  let actual = 0;
  object.traverse((o) => {
    if (!o.isMesh || !o.geometry?.attributes?.position) return;
    const g = o.geometry;
    actual += (g.index ? g.index.count : g.attributes.position.count) / 3;
  });
  // normal statistics converge long before the full triangle count
  const tris = worldTris(object, 24000);
  const n = new THREE.Vector3(), a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const ab = new THREE.Vector3(), ac = new THREE.Vector3();
  let planar = 0, total = 0;
  const axisHist = [0, 0, 0];
  for (let i = 0; i < tris.length; i += 9) {
    a.set(tris[i], tris[i + 1], tris[i + 2]);
    b.set(tris[i + 3], tris[i + 4], tris[i + 5]);
    c.set(tris[i + 6], tris[i + 7], tris[i + 8]);
    ab.subVectors(b, a); ac.subVectors(c, a);
    n.crossVectors(ab, ac);
    if (n.lengthSq() < 1e-12) continue;
    n.normalize();
    total++;
    const ax = Math.abs(n.x), ay = Math.abs(n.y), az = Math.abs(n.z);
    const m = Math.max(ax, ay, az);
    if (m > 0.985) { planar++; axisHist[ax === m ? 0 : ay === m ? 1 : 2]++; }
  }
  return {
    planarRatio: total ? Number((planar / total).toFixed(3)) : 0,
    axisAligned: axisHist,
    triangles: Math.round(actual),
    sampled: Math.round(tris.length / 9),
  };
}

/* --------------------------------------------------------- representation
   The decision the old pipeline never made. Default is to keep what the
   generator produced; a primitive has to earn the right to replace it. */
const FIT_GOOD = 0.02;      // 2% of the part's largest dimension
const FIT_LOOSE = 0.05;

export function planRepresentation(object, opts = {}) {
  const bb0 = new THREE.Box3().setFromObject(object);
  const s0 = bb0.getSize(new THREE.Vector3());
  // a degenerate or NaN part cannot be judged; keep what the generator made
  if (![s0.x, s0.y, s0.z].every((v) => isFinite(v) && v > 1e-4)) {
    return {
      representationType: "SOURCE_MESH", builder: null,
      fit: { revolve: { rms: 1, max: 1 }, box: { rms: 1, max: 1 }, chosen: 1 },
      profile: null, characteristics: { planarRatio: 0, axisAligned: [0, 0, 0], triangles: 0 },
      reason: "형상을 측정할 수 없어 원본 메시를 그대로 유지합니다.", confidence: 0.4,
    };
  }
  const chars = geometryCharacteristics(object);
  /* Fit testing is a yes/no question, not a design profile: 48 levels answer it
     and 240 do not answer it better. At full resolution this ran 3,840 rays per
     part against every triangle in its slab and locked the tab for minutes. */
  const prof = (() => {
    try { return preciseProfile(object, { levels: 48, angles: 8, ...opts.profileOpts }); }
    catch { return null; }
  })();
  const rev = prof ? revolveFit(object, prof.profile) : { rms: 1, max: 1, n: 0 };
  const box = boxFit(object);

  const best = rev.rms <= box.rms ? "lathe" : "box";
  const bestRms = Math.min(rev.rms, box.rms);

  let type, builder = null, why;
  if (bestRms <= FIT_GOOD) {
    type = "PARAMETRIC";
    builder = best;
    why = `${best === "lathe" ? "회전체" : "각형"} 프리미티브가 표면을 오차 ${(bestRms * 100).toFixed(1)}%로 재현합니다.`
      + " 규격 형상이므로 파라메트릭으로 재구축해 치수 편집을 지원합니다.";
  } else if (bestRms <= FIT_LOOSE) {
    type = "HYBRID";
    builder = best;
    why = `프리미티브 오차가 ${(bestRms * 100).toFixed(1)}%입니다. 외형은 원본 메시를 유지하고`
      + " 치수 편집이 필요한 요소만 파라메트릭 프록시로 다룹니다.";
  } else {
    type = "SOURCE_MESH";
    why = `프리미티브 오차가 ${(bestRms * 100).toFixed(1)}%로 커서 재구축하면 형상이 뭉개집니다.`
      + " 생성된 메시를 그대로 유지합니다.";
  }
  if (opts.forceSource) { type = "SOURCE_MESH"; builder = null; }

  return {
    representationType: type,
    builder,
    fit: {
      revolve: { rms: Number(rev.rms.toFixed(4)), max: Number(rev.max.toFixed(4)) },
      box: { rms: Number(box.rms.toFixed(4)), max: Number(box.max.toFixed(4)) },
      chosen: Number(bestRms.toFixed(4)),
    },
    profile: prof?.profile || null,
    characteristics: chars,
    reason: why,
    confidence: Number(Math.max(0.35, Math.min(0.97, 1 - bestRms * 8)).toFixed(2)),
  };
}

/* ------------------------------------------------------------ source value
   Every number carries where it came from. A measured radius and an assumed
   wall thickness must never read the same way. */
export const sv = (value, status, confidence, reason = "", unit = "mm") => ({
  value, unit, status, confidence,
  evidenceRefs: [], reason,
  requiresConfirmation: status === "INFERRED_FROM_DOMAIN" || status === "ASSUMED_FOR_RUNTIME" || status === "UNKNOWN",
  lockedByUser: false,
});

/* ----------------------------------------------------------- specification */
export function buildSpecification({ assetInfo, parts, measured, semantics, domain, prompt }) {
  const now = new Date().toISOString();
  const spec = {
    specificationId: `spec_${Date.now().toString(36)}`,
    version: 1,
    createdAt: now,
    sourceAsset: {
      assetId: assetInfo.assetId || "generated",
      format: assetInfo.format || "glb",
      originalUri: assetInfo.originalUri || null,
      normalizedUri: assetInfo.normalizedUri || null,
      unit: "mm",
      coordinateSystem: "right-handed, Y-up",
      boundingBox: measured?.overall || null,
      triangles: assetInfo.triangles || null,
    },
    identity: {
      objectName: sv(semantics?.title || prompt || "생성 형상", semantics ? "DOCUMENTED" : "USER_PROVIDED", 0.9, "", ""),
      domainCandidates: domain ? [domain] : [],
      intendedFunction: sv(semantics?.brief || "", semantics ? "INFERRED_FROM_DOMAIN" : "UNKNOWN", 0.6, "", ""),
    },
    scene: {
      scaleFactor: 1,
      upAxis: "Y",
      frontAxis: "Z",
      origin: [0, 0, 0],
      lightingPreset: "studio-room",
    },
    parts: [],
    materials: [],
    assembly: { hierarchy: [], joints: [] },
    editing: { operations: [] },
    optimization: {
      triangleBudget: 400000,
      lod: [{ level: 0, ratio: 1 }],
      shadowPolicy: "cast+receive",
    },
    validation: { metrics: {}, tolerances: { visual: 0.05, mechanical: 0.01 } },
    assumptions: [],
    unknowns: [],
    conflicts: [],
  };

  for (const p of parts) {
    const plan = p.plan;
    spec.parts.push({
      partId: p.id,
      name: p.name,
      semanticRole: p.role || "component",
      sourceReferences: { nodeIds: [p.nodeName || p.id], meshIds: p.meshIds || [] },
      representationType: plan.representationType,
      transform: {
        position: p.position, rotation: [0, 0, 0, 1], scale: [1, 1, 1],
        pivot: p.pivot || p.position,
      },
      geometryAnalysis: {
        boundingBox: p.bbox,
        centroid: p.centroid,
        triangles: plan.characteristics.triangles,
        planarRatio: plan.characteristics.planarRatio,
        primitiveFit: plan.fit,
      },
      parametricDefinition: plan.builder ? {
        builderId: plan.builder,
        profile: plan.profile ? plan.profile.map((s) => [s.r, s.t]) : null,
        parameters: parametersFor(plan, p),
      } : null,
      meshEditingDefinition: plan.representationType === "SOURCE_MESH" ? {
        allowedOperations: ["transform", "material", "visibility", "separate", "deform"],
      } : null,
      materialIds: [p.material || "steel"],
      interaction: {
        selectable: true, draggable: true, rotatable: true,
        hideable: true, replaceable: plan.representationType !== "SOURCE_MESH",
      },
      jointAnchorIds: [], colliderId: null,
      sourceStatus: "MESH_MEASURED",
      confidence: plan.confidence,
      reason: plan.reason,
    });
  }
  return spec;
}

/** the editable parameters a part actually supports, from its fitted builder */
function parametersFor(plan, p) {
  const out = [];
  const [w, h, d] = p.bbox || [0, 0, 0];
  if (plan.builder === "lathe" && plan.profile?.length) {
    out.push({ id: "height", label: "전체 높이", value: Number(h.toFixed(1)), unit: "mm", min: h * 0.4, max: h * 2 });
    const rMax = Math.max(...plan.profile.map((s) => s.r));
    out.push({ id: "radius", label: "최대 반경", value: Number(rMax.toFixed(1)), unit: "mm", min: rMax * 0.4, max: rMax * 2 });
    out.push({ id: "profile", label: "프로파일", kind: "profile", points: plan.profile.length });
  } else if (plan.builder === "box") {
    out.push({ id: "width", label: "폭", value: Number(w.toFixed(1)), unit: "mm", min: w * 0.4, max: w * 2 });
    out.push({ id: "height", label: "높이", value: Number(h.toFixed(1)), unit: "mm", min: h * 0.4, max: h * 2 });
    out.push({ id: "depth", label: "깊이", value: Number(d.toFixed(1)), unit: "mm", min: d * 0.4, max: d * 2 });
  }
  return out;
}

/* --------------------------------------------------------------- readable
   The panel shows this. It is a runtime spec, so it leads with what the
   compiler will do, not with a description of the product. */
const TYPE_LABEL = {
  SOURCE_MESH: "원본 메시 유지",
  PARAMETRIC: "파라메트릭 재구축",
  HYBRID: "하이브리드",
};

export function specText(spec) {
  const L = [];
  const a = spec.sourceAsset;
  L.push(`${spec.identity.objectName.value}`);
  L.push("");
  L.push("[소스 자산]");
  L.push(`  포맷 ${a.format} · 단위 ${a.unit} · 좌표계 ${a.coordinateSystem}`);
  if (a.boundingBox) L.push(`  바운딩박스 ${a.boundingBox.width} × ${a.boundingBox.height} × ${a.boundingBox.depth} mm`);
  if (a.triangles) L.push(`  삼각형 ${a.triangles.toLocaleString()}개`);
  L.push("");
  L.push(`[파트 ${spec.parts.length}개 · 표현 전략]`);
  for (const p of spec.parts) {
    L.push(`  ${p.name} — ${TYPE_LABEL[p.representationType]} (신뢰도 ${p.confidence})`);
    L.push(`    역할 ${p.semanticRole} · 삼각형 ${p.geometryAnalysis.triangles.toLocaleString()}`);
    L.push(`    치수 ${p.geometryAnalysis.boundingBox.map((v) => v.toFixed(1)).join(" × ")} mm`);
    L.push(`    프리미티브 적합도 회전체 ${(p.geometryAnalysis.primitiveFit.revolve.rms * 100).toFixed(1)}%`
      + ` · 각형 ${(p.geometryAnalysis.primitiveFit.box.rms * 100).toFixed(1)}%`);
    L.push(`    ${p.reason}`);
    if (p.parametricDefinition?.parameters?.length) {
      L.push(`    편집 파라미터: ${p.parametricDefinition.parameters.map((q) => q.label).join(", ")}`);
    } else {
      L.push(`    편집: 위치·회전·재질·표시 (형상은 원본 유지)`);
    }
  }
  if (spec.assembly.joints.length) {
    L.push("");
    L.push("[조립·조인트]");
    for (const j of spec.assembly.joints) L.push(`  ${j.name}: ${j.type}`);
  }
  L.push("");
  L.push("[검증]");
  L.push(`  원본 3D 대비 허용 오차 — 시각 파트 ${spec.validation.tolerances.visual * 100}%,`
    + ` 기계 파트 ${spec.validation.tolerances.mechanical * 100}%`);
  return L.join("\n");
}
