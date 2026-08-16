/* ==========================================================================
   Batch specification pass over the asset catalogue.

   The specification is written by looking at the actual 3D, not at a picture of
   it, so this loads each asset's stored GLB and runs the same analysis the live
   pipeline runs: per part, does a primitive actually describe this geometry, and
   what editing does that answer allow. The result is attached to the asset
   record as `specification` and shown in the asset view.

   Nothing is regenerated. These assets already have their high quality geometry;
   what they lacked was the structure on top of it.
   ========================================================================== */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { requireAuth } from "./auth.js?v=2d99286f";
import { measureForm } from "./measure.js?v=2d99286f";
import { planRepresentation, buildSpecification, specText } from "./threespec.js?v=2d99286f";

requireAuth();
const $ = (id) => document.getElementById(id);

/* The categories that carry the demo. Precision machined parts first because
   they are the reference for how a spec should read, then the machine
   assemblies that exercise joints and hierarchy. */
const TARGET = 30;
const PRIORITY = ["정밀 가공품", "산업 장비", "로봇·자동화", "자동차 부품", "전자제품"];

let ASSETS = [];

function pickAssets(all) {
  /* Spread the budget across categories rather than letting the first one eat
     it: a catalogue that only demonstrates turned parts proves less. */
  const byCat = new Map();
  for (const a of all) {
    const c = a.category || "기타";
    if (!byCat.has(c)) byCat.set(c, []);
    byCat.get(c).push(a);
  }
  // skip the -l / -ht size variants: same geometry, nothing new to show
  for (const [c, list] of byCat) {
    byCat.set(c, list.filter((a) => !/-l$|-ht$/.test(a.assetId)));
  }
  const out = [];
  const cats = [...PRIORITY.filter((c) => byCat.has(c)), ...[...byCat.keys()].filter((c) => !PRIORITY.includes(c))];
  let round = 0;
  while (out.length < TARGET && round < 40) {
    let added = 0;
    for (const c of cats) {
      const list = byCat.get(c) || [];
      if (round < list.length && out.length < TARGET) { out.push(list[round]); added++; }
    }
    if (!added) break;
    round++;
  }
  return out;
}

async function loadGLB(url) {
  const gltf = await new GLTFLoader().loadAsync(url);
  let root = gltf.scene;
  // GLTFExporter wraps assemblies one level deep; unwrap so parts are children
  while (root.children.length === 1 && !root.children[0].isMesh) root = root.children[0];
  return root;
}

/* Match nodes to the compiled links by name. GLB node names have spaces
   replaced by underscores, and the exporter nests them, so neither the child
   order nor the depth can be trusted — matching by name is what the asset
   viewer already had to do. Falls back to geometry-bearing children. */
const normName = (s) => String(s || "").replace(/[_\s]+/g, " ").trim().toLowerCase();

function partsOf(root, links) {
  if (links?.length) {
    const byName = new Map();
    root.traverse((o) => {
      const k = normName(o.name);
      if (k && !byName.has(k)) byName.set(k, o);
    });
    const matched = links.map((l) => byName.get(normName(l.name)) || null);
    if (matched.filter(Boolean).length >= Math.ceil(links.length * 0.6)) {
      return matched.map((node, i) => ({ node, link: links[i] })).filter((x) => x.node);
    }
  }
  const out = [];
  for (const c of root.children) {
    let has = false;
    c.traverse((o) => { if (o.isMesh) has = true; });
    if (has) out.push({ node: c, link: null });
  }
  return out.length ? out : [{ node: root, link: null }];
}

async function specifyAsset(summary, row) {
  const detail = await fetch(`/api/assets/${encodeURIComponent(summary.assetId)}`).then((r) => r.json());
  const rec = detail.asset;
  const glb = rec?.files?.glb?.url;
  if (!glb) throw new Error("GLB 없음");

  row.textContent = "메시 로드";
  const root = await loadGLB(glb);
  root.updateWorldMatrix(true, true);

  row.textContent = "실측";
  const measured = measureForm(root, { skipInterior: false });

  row.textContent = "표현 전략 판정";
  // names, roles and materials live in the compiled CIR, not in structure.parts
  const links = rec.cir?.links || [];
  const pairs = partsOf(root, links);
  const specParts = pairs.map(({ node, link }, i) => {
    const plan = planRepresentation(node);
    const bb = new THREE.Box3().setFromObject(node);
    const size = bb.getSize(new THREE.Vector3());
    const ctr = bb.getCenter(new THREE.Vector3());
    const meta = link || {};
    return {
      id: meta.id || `part_${i}`,
      name: meta.name || node.name?.replace(/_/g, " ") || `파트 ${i + 1}`,
      role: meta.semanticType || meta.role || "component",
      nodeName: node.name,
      material: meta.material,
      bbox: [size.x, size.y, size.z],
      centroid: ctr.toArray().map((v) => Number(v.toFixed(2))),
      position: node.position.toArray().map((v) => Number(v.toFixed(2))),
      plan,
    };
  });

  let tris = 0;
  root.traverse((o) => {
    if (o.isMesh && o.geometry) {
      const p = o.geometry.getAttribute("position");
      tris += (o.geometry.index ? o.geometry.index.count : p.count) / 3;
    }
  });

  const spec = buildSpecification({
    assetInfo: {
      assetId: summary.assetId, format: "glb",
      originalUri: glb, normalizedUri: glb,
      triangles: Math.round(tris),
    },
    parts: specParts,
    measured,
    semantics: { title: summary.name, brief: rec.basic?.summary || "" },
    domain: summary.category,
    prompt: summary.name,
  });
  spec.assembly.joints = (rec.cir?.joints || []).map((j) => ({ name: j.id || j.name, type: j.type }));

  row.textContent = "저장";
  const r = await fetch(`/api/assets/${encodeURIComponent(summary.assetId)}`, {
    method: "PATCH", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      patch: { specification: spec, specificationText: specText(spec) },
      by: "spec-pass", what: "3D 기반 실행 사양서 생성",
    }),
  }).then((x) => x.json());
  if (!r.ok) throw new Error(r.error || "저장 실패");

  root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  const kept = specParts.filter((p) => p.plan.representationType === "SOURCE_MESH").length;
  const para = specParts.filter((p) => p.plan.representationType === "PARAMETRIC").length;
  return { parts: specParts.length, kept, para, hybrid: specParts.length - kept - para };
}

async function run() {
  $("go").disabled = true;
  const list = pickAssets(ASSETS);
  $("prog").textContent = `${list.length}건 처리 시작`;
  let done = 0, failed = 0;
  const totals = { parts: 0, kept: 0, para: 0, hybrid: 0 };

  for (const a of list) {
    const row = document.querySelector(`[data-row="${a.assetId}"] .st`);
    try {
      const res = await specifyAsset(a, row);
      totals.parts += res.parts; totals.kept += res.kept;
      totals.para += res.para; totals.hybrid += res.hybrid;
      row.textContent = `완료 · 파트 ${res.parts} (원본 ${res.kept} / 파라 ${res.para} / 하이브리드 ${res.hybrid})`;
      done++;
    } catch (e) {
      row.textContent = `실패: ${e.message}`;
      failed++;
    }
    $("prog").textContent = `${done + failed}/${list.length} 처리`;
    await new Promise((r) => setTimeout(r, 20));   // let the row paint
  }
  $("prog").textContent = `완료 ${done}건, 실패 ${failed}건 · `
    + `파트 ${totals.parts}개 (원본 메시 ${totals.kept} / 파라메트릭 ${totals.para} / 하이브리드 ${totals.hybrid})`;
  $("go").disabled = false;
}

(async () => {
  try {
    const r = await fetch("/api/assets").then((x) => x.json());
    ASSETS = r.assets || [];
  } catch { ASSETS = []; }
  const list = pickAssets(ASSETS);
  $("list").innerHTML = list.map((a) =>
    `<div class="row" data-row="${a.assetId}"><b>${a.name}</b>
       <span class="cat">${a.category}</span><span class="st">대기</span></div>`).join("");
  $("prog").textContent = `${ASSETS.length}건 중 ${list.length}건 선택`;
  $("go").onclick = run;
})();
