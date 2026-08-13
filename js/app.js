// VRINGON CAD — workspace
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import { SimplifyModifier } from "three/addons/modifiers/SimplifyModifier.js";
import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";
import { requireAuth, logout } from "./auth.js";
import { CATALOG, clampParams, MATERIAL_KEYS, RECOMMENDED_MATERIALS } from "./catalog.js";
import { buildModel, defaultParams, matchArchetype, matchArchetypeScored, ARCHETYPE_BY_ID, SIMS } from "./archetypes.js";
import { buildProgramModel, validateProgram, clampProgramParams, defaultProgramParams, programSims } from "./program.js";
import { MATERIALS, makeMaterial, setQuality, surfaceMaps } from "./geometry.js";
import { exportSTEP, exportDXF, exportOBJ, exportGLB, exportSTL, downloadBlob, collectPartTriangles } from "./exporters.js";
import { compileAsset, validateAsset, readinessScore, computeInertial } from "./robot.js";
import { exportURDF, exportUSDA, exportMJCF, exportBundle, stripCIR, verifyExports as verifyRobotExports } from "./robot-export.js";
import { buildAssetRecord, ASSET_CATEGORIES } from "./asset-record.js";
import { measureForm, measurementText, formAgreement, orientUpright, silhouettes } from "./measure.js";
import { planRepresentation, buildSpecification, specText } from "./threespec.js";
import { specSummary, applyPatch } from "./spec-build.js";
import { compileSpec, partsAffectedBy } from "./spec-compile.js";
import { buildStructuredSpec, structuredSpecText, rebuildEligibility, MODE, ORIGIN } from "./model-spec.js";
import { applyModifiers, runOperation, captureBaseline } from "./modifier.js";
import { buildFromSpec, specThreeCode, specSummaryText } from "./spec-cad.js";
import { createDroneSim } from "./drone-sim.js";
import { positionsFromObject3D, refineFromMesh } from "./mesh-loft.js";
import { applyParameter, partFields, applyPartField } from "./drone-params.js";
import { COMPONENT_CATALOG, CATALOG_GROUPS, fitTargets, applyComponent, addComponentAsPart } from "./drone-catalog.js";
import { PRINTERS, MATERIALS as PRINT_MATERIALS, estimatePrint } from "./print-estimate.js";

const $ = (id) => document.getElementById(id);
const user = requireAuth();
$("userTag").textContent = user;
$("btnLogout").onclick = logout;

/* Model output reads as machine-written when it leans on em dashes and stacked
   clauses. Strip those before anything reaches the panel. */
function clean(s) {
  return String(s || "")
    .replace(/\s*[—–]\s*/g, ", ")
    .replace(/\s+·\s+·\s+/g, " · ")
    .replace(/,\s*,/g, ",")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,)])/g, "$1")
    .trim();
}

/* ------------------------------------------------------------ toast */
function toast(msg, ok = false) {
  const el = document.createElement("div");
  el.className = "toast" + (ok ? " ok" : "");
  el.textContent = msg;
  $("toasts").appendChild(el);
  setTimeout(() => el.remove(), 3400);
}

/* ------------------------------------------------------------ scene */
const stage = $("stage");
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.62;
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x15161c);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
/* A metal part is almost entirely a reflection of its surroundings, so with a
   dim environment metalness 0.9 renders nearly black no matter how many lights
   are added. Lifting the environment is what actually makes these readable. */
if ("environmentIntensity" in scene) scene.environmentIntensity = 1.9;

const camera = new THREE.PerspectiveCamera(38, 1, 1, 8000);
camera.position.set(320, 230, 380);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
/* No polar clamp. The camera used to stop a fraction above the horizon, which
   meant the underside of a part could never be inspected — exactly the face a
   bottom recess, a gate mark or a base thickness lives on. The floor gets out
   of the way instead (see the render loop). */

// three-point studio rig, sized for a ~150 mm part
const key = new THREE.DirectionalLight(0xffffff, 2.6);
key.position.set(240, 420, 260);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.near = 50; key.shadow.camera.far = 1400;
key.shadow.camera.left = key.shadow.camera.bottom = -320;
key.shadow.camera.right = key.shadow.camera.top = 320;
key.shadow.bias = -0.0012;
key.shadow.normalBias = 0.6;
const fill = new THREE.DirectionalLight(0xc8d2ff, 0.55);
fill.position.set(-320, 180, 140);
const rim = new THREE.DirectionalLight(0xbcc6ff, 0.9);
rim.position.set(-140, 240, -360);
scene.add(key, fill, rim,
  new THREE.HemisphereLight(0xc4ccdd, 0x3a3d48, 1.15),
  // floor for the shadowed side, so dark faces stay legible instead of black
  new THREE.AmbientLight(0xffffff, 0.28));

const grid = new THREE.GridHelper(1200, 48, 0x2a2a34, 0x1a1a20);
grid.material.transparent = true; grid.material.opacity = 0.55;
scene.add(grid);
const shadowCatcher = new THREE.Mesh(
  new THREE.CircleGeometry(600, 64).rotateX(-Math.PI / 2),
  new THREE.ShadowMaterial({ opacity: 0.42 })
);
shadowCatcher.position.y = 0.02;
shadowCatcher.receiveShadow = true;
scene.add(shadowCatcher);

const tc = new TransformControls(camera, renderer.domElement);
tc.setSize(0.8);
tc.addEventListener("dragging-changed", (e) => (controls.enabled = !e.value));
scene.add(tc);

function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  if (!w || !h) return;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(stage);
resize();
/* Looking up from beneath, the ground plane is between the eye and the part.
   Dropping it while the camera is under the floor is what makes a full tumble
   usable rather than just possible. `gridWanted` keeps the toolbar toggle in
   charge of the other half of the sphere. */
let gridWanted = true;
function floorVisibility() {
  const below = camera.position.y < controls.target.y;
  grid.visible = gridWanted && !below;
  shadowCatcher.visible = !below;
}
let droneSim = null;
const simClock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  controls.update();
  floorVisibility();
  tickSim();
  // the delta must be consumed every frame, or the first sim step jumps
  const dt = simClock.getDelta();
  if (droneSim) droneSim.update(dt);
  renderer.render(scene, camera);
});
window.__vringon = { renderer, scene, camera, controls,
  // forceRender skips the animation loop, so run the same per-frame work here
  forceRender: () => { floorVisibility(); renderer.render(scene, camera); },
  peek: () => ({ kind: state.kind, program: state.program, params: state.params, title: state.title }),
  // QA hooks: check the four-view render and the interior probe without spending a cloud call
  views: () => captureViews(state.origMesh || state.model),
  inside: (o) => measureForm(o || state.origMesh || state.model).interior,
  /* load a saved specification straight into step-2-complete state, so the
     CAD compile and simulation stages can be exercised without paying for a
     메시 클라우드 run and a 설계 AI call every time */
  qaSpec: (spec) => {
    pipe.prompt = spec?.identity?.name_ko || "qa";
    pipe.active = true; pipe.done = 2; pipe.running = 0; pipe.notes = [];
    /* A new specification is a new drone: carrying the last one's title and
       library id forward attaches this build to the wrong entry. */
    state.title = spec?.identity?.name_ko || "드론";
    state.libId = null;
    setPipeSpec(spec);
    renderStepper();
  },
  qaStep: (n) => pipeRun(n),
  /* Save the current drone as a NEW library entry under a given name — the
     seeding path for shipping worked examples alongside the samples. */
  saveAs: (title) => {
    state.title = title;
    state.libId = null;
    $("mName").textContent = title;
    $("projName").textContent = title;
    saveToLibrary();
    const id = state.libId;
    /* Detach: a named entry is a snapshot. Leaving libId set meant the next
       run's autosave overwrote it, so every saved drone held the following
       drone's specification. */
    state.libId = null;
    return id;
  } };

/* ------------------------------------------------------------ state */
const state = {
  model: null, parts: [], selected: null,
  kind: "archetype", program: null,
  archetype: null, params: {}, materials: {},
  title: "", brief: "", exploded: false, decimated: 0,
  quality: 1, imported: false, busy: false,
  /* robot asset compiler */
  cir: null,              // canonical robot asset graph
  validation: null,       // structural / static / motion checks
  readiness: null,        // asset readiness subscores
  selectedJoint: null,
  jointPose: {},          // joint id → current sweep value (rad or mm)
};

function dispose(root) {
  root.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
  });
}

function clearModel() {
  tc.detach();
  if (state.model) { scene.remove(state.model); dispose(state.model); }
  state.model = null; state.parts = []; state.selected = null; state.exploded = false;
  state.decimated = 0; state.imported = false;
  $("parts").innerHTML = ""; $("mName").textContent = "—";
  $("mParts").textContent = $("mTris").textContent = $("mDims").textContent = "—";
  $("mBrief").textContent = ""; $("polyNote").textContent = "";
  $("scopeNote").textContent = ""; $("scopeNote").classList.remove("show");
  $("designImg").style.display = "none"; $("designImg").removeAttribute("src");
  $("specBox").style.display = "none"; $("specText").textContent = "";
  if ($("cirBox")) { $("cirBox").style.display = "none"; $("cirText").textContent = ""; }
  state.cirText = "";
  state.coverage = "match"; state.coverageNote = ""; state.designImageB64 = null; state.spec = "";
  $("stageEmpty").style.display = "";
  ["matBlock", "sheetBlock", "jointBlock", "physBlock", "paramBlock", "polyBlock"].forEach((id) => ($(id).style.display = "none"));
  if ($("sheet")) $("sheet").innerHTML = "";
  state.cir = null; state.validation = null; state.readiness = null;
  state.selectedJoint = null; state.jointPose = {};
  $("joints").innerHTML = ""; $("phys").innerHTML = "";
  $("bpBlock").style.display = "none"; $("bpText").textContent = ""; state.blueprint = null;
  $("valConsole").innerHTML = ""; $("valSummary").textContent = "";
  $("readyBreak").innerHTML = ""; $("scoreRow").style.display = "none";
  if ($("agreeRow")) $("agreeRow").style.display = "none";
  if (state.refForm) { dispose(state.refForm); state.refForm = null; }
  state.formAgreement = null; state.measured = null; state.measuredText = "";
  state.fidelity = null; state.blueprint = null;
  if ($("fidelity")) { $("fidelity").innerHTML = ""; $("fidelity").style.display = "none"; }
  $("btnKeep").style.display = "none";
  $("btnExplodeTop").classList.remove("show", "on");
  $("btnExplodeTop").textContent = "분해하기";
  $("editBar").classList.remove("show");
  stopSim();
  $("btnSim").classList.remove("show");
  $("btnReverse").classList.remove("show");
  $("btnHiFi").classList.remove("show");
  if (state.origMesh) { scene.remove(state.origMesh); dispose(state.origMesh); }
  state.origMesh = null; state.showingOrig = false; state.origLabel = "";
  $("btnOrig").classList.remove("show", "on");
  state.libId = null;
  $("decimate").value = 0; $("decimateV").textContent = "0%";
}

/* 원본 메시 ↔ 파라메트릭 트윈 토글. The mesh is no longer produced during
   generation, so the first press is what asks for it — that is the whole reason
   a run now takes seconds instead of minutes. */
$("btnOrig").onclick = async () => {
  if (!state.origMesh && state.designImageB64 && !state.busy) {
    // first press generates it; there is nothing to toggle between yet
    await generateSourceMesh("local");
    return;
  }
  if (!state.origMesh || !state.model || state.origMesh === state.model) return;
  state.showingOrig = !state.showingOrig;
  if (state.showingOrig) { scene.remove(state.model); scene.add(state.origMesh); }
  else { scene.remove(state.origMesh); scene.add(state.model); }
  $("btnOrig").classList.toggle("on", state.showingOrig);
  const src = state.origLabel || "업로드 원본";
  if (state.showingOrig) fitView(false);
  toast(state.showingOrig
    ? `${src}를 표시합니다. 설계 수치는 이 형상을 실측해서 나왔습니다 (편집은 파라메트릭 뷰에서)`
    : "파라메트릭 모델을 표시합니다", true);
};

/* ------------------------------------------------------------ metrics */
function triCount(root) {
  let t = 0;
  root.traverse((o) => {
    if (o.isMesh && o.geometry && o.visible) {
      const p = o.geometry.getAttribute("position");
      t += (o.geometry.index ? o.geometry.index.count : p.count) / 3;
    }
  });
  return Math.round(t);
}
function refreshStats() {
  if (!state.model) return;
  const bb = new THREE.Box3().setFromObject(state.model);
  const s = bb.getSize(new THREE.Vector3());
  $("mParts").textContent = state.parts.length;
  $("mTris").textContent = triCount(state.model).toLocaleString();
  $("mDims").textContent = `${s.x.toFixed(1)} × ${s.y.toFixed(1)} × ${s.z.toFixed(1)}`;
}

function fitView(anim = true) {
  if (!state.model) return;
  const bb = new THREE.Box3().setFromObject(state.model);
  const c = bb.getCenter(new THREE.Vector3());
  const r = Math.max(30, bb.getSize(new THREE.Vector3()).length() / 2);
  controls.target.copy(c);
  // sphere-fit distance (projection-safe at any view angle) + margin
  const vHalf = THREE.MathUtils.degToRad(camera.fov / 2);
  const hHalf = Math.atan(Math.tan(vHalf) * Math.max(0.6, camera.aspect));
  const dist = (r / Math.sin(Math.min(vHalf, hHalf))) * 1.12;
  // keep current azimuth, standardise elevation to a product-shot ~21°
  const flat = camera.position.clone().sub(c); flat.y = 0;
  if (flat.lengthSq() < 1) flat.set(0.75, 0, 1);
  flat.normalize();
  const elev = Math.sin(THREE.MathUtils.degToRad(21));
  const dir = new THREE.Vector3(flat.x * Math.sqrt(1 - elev * elev), elev, flat.z * Math.sqrt(1 - elev * elev));
  const target = c.clone().add(dir.multiplyScalar(dist));
  if (anim) {
    const from = camera.position.clone();
    const t0 = performance.now();
    const step = () => {
      const k = Math.min(1, (performance.now() - t0) / 420);
      const e = 1 - Math.pow(1 - k, 3);
      camera.position.lerpVectors(from, target, e);
      camera.lookAt(c);
      if (k < 1) requestAnimationFrame(step);
    };
    step();
  } else {
    camera.position.copy(target);
    camera.lookAt(c);
  }
  camera.near = Math.max(1, r / 60); camera.far = r * 60;
  camera.updateProjectionMatrix();
  controls.update();
}

/* ------------------------------------------------------------ parts UI */
function partColor(p) {
  let c = "#8a8f9c";
  p.traverse((o) => { if (o.isMesh) { c = "#" + o.material.color.getHexString(); } });
  return c;
}
function buildPartList() {
  const host = $("parts");
  host.innerHTML = "";
  for (const p of state.parts) {
    const row = document.createElement("button");
    row.className = "part";
    row.dataset.id = p.name;
    row.innerHTML = `<span class="sw" style="background:${partColor(p)}"></span>
      <span class="nm">${p.userData.label || p.name}</span>
      <span class="vis"><svg><use href="#i-eye"/></svg></span>`;
    row.onclick = (e) => {
      if (e.target.closest(".vis")) {
        p.visible = !p.visible;
        row.classList.toggle("off", !p.visible);
        row.querySelector(".vis use").setAttribute("href", p.visible ? "#i-eye" : "#i-eye-off");
        if (!p.visible && state.selected === p) select(null);
        refreshStats();
        return;
      }
      select(p);
    };
    host.appendChild(row);
  }
}
function select(p) {
  if (state.selected) highlight(state.selected, 0);
  state.selected = p;
  document.querySelectorAll(".part").forEach((r) => r.classList.toggle("on", !!p && r.dataset.id === p.name));
  const scopeEl = $("editScope");
  if (p) {
    highlight(p, 0.25);
    $("matSelect").value = p.userData.materialKey || "aluminum";
    if (tool !== "select") tc.attach(p);
    scopeEl.style.display = "";
    scopeEl.textContent = `◈ ${p.userData.label || p.name}`;
    $("editPrompt").placeholder = "선택한 파트만 편집: 예) 이 파트를 황동으로, 더 두껍게";
  } else {
    tc.detach();
    scopeEl.style.display = "none";
    $("editPrompt").placeholder = "이어서 편집: 예) 높이를 160mm로 낮추고 캡은 검정으로";
  }
  /* per-part deterministic editor follows the selection when a drone spec is
     loaded; part instances share their spec entry via regionId */
  if (pipe?.spec && p?.userData?.regionId) buildPartEditor(p.userData.regionId);
  else $("partEditBlock").style.display = "none";
}
function highlight(p, v) {
  p.traverse((o) => {
    if (o.isMesh && o.material.emissive) { o.material.emissive.set(0x5b6bf0); o.material.emissiveIntensity = v; }
  });
}

const ray = new THREE.Raycaster();
let down = null;
renderer.domElement.addEventListener("pointerdown", (e) => (down = [e.clientX, e.clientY]));
renderer.domElement.addEventListener("pointerup", (e) => {
  if (!down || !state.model || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 5) return;
  const r = renderer.domElement.getBoundingClientRect();
  ray.setFromCamera(new THREE.Vector2(
    ((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), camera);
  const hit = ray.intersectObject(state.model, true)[0];
  if (!hit) return select(null);
  let n = hit.object;
  while (n && !(n.userData && n.userData.isPart)) n = n.parent;
  select(n || null);
});

/* ------------------------------------------------------------ tools */
let tool = "select";
const toolBtns = { select: $("tSelect"), translate: $("tMove"), rotate: $("tRotate"), scale: $("tScale") };
function setTool(t) {
  tool = t;
  Object.entries(toolBtns).forEach(([k, b]) => b.classList.toggle("on", k === t));
  if (t === "select") tc.detach();
  else { tc.setMode(t); if (state.selected) tc.attach(state.selected); }
}
$("tSelect").onclick = () => setTool("select");
$("tMove").onclick = () => setTool("translate");
$("tRotate").onclick = () => setTool("rotate");
$("tScale").onclick = () => setTool("scale");
$("tFit").onclick = () => fitView();
$("tGrid").onclick = (e) => { gridWanted = !gridWanted; e.currentTarget.classList.toggle("on", !gridWanted); };
$("tSpin").onclick = (e) => {
  controls.autoRotate = !controls.autoRotate; controls.autoRotateSpeed = 1.6;
  e.currentTarget.classList.toggle("on", controls.autoRotate);
};
$("tShot").onclick = () => {
  renderer.render(scene, camera);
  const a = document.createElement("a");
  a.href = renderer.domElement.toDataURL("image/png");
  a.download = "vringon-cad.png"; a.click();
  toast("스크린샷을 저장했습니다", true);
};
$("btnExplodeTop").onclick = (e) => {
  if (!state.model) return;
  state.exploded = !state.exploded;
  e.currentTarget.classList.toggle("on", state.exploded);
  e.currentTarget.textContent = state.exploded ? "조립하기" : "분해하기";
  animateExplode(state.exploded ? 1 : 0);
};
addEventListener("keydown", (e) => {
  if (["TEXTAREA", "INPUT", "SELECT"].includes(e.target.tagName)) return;
  const k = e.key.toLowerCase();
  if (k === "q") setTool("select"); else if (k === "w") setTool("translate");
  else if (k === "e") setTool("rotate"); else if (k === "r") setTool("scale");
  else if (k === "f") fitView();
});

function captureExplodeBasis() {
  const bb = new THREE.Box3().setFromObject(state.model);
  const c = bb.getCenter(new THREE.Vector3());
  state.explodeSpan = bb.getSize(new THREE.Vector3()).length() * 0.24;
  for (const p of state.parts) {
    p.userData.home = p.position.clone();
    const pb = new THREE.Box3().setFromObject(p);
    const d = pb.getCenter(new THREE.Vector3()).sub(c);
    if (d.lengthSq() < 1e-6) d.set(0, 1, 0);
    d.y *= 0.6;                        // keep the motion mostly lateral
    p.userData.dir = d.normalize();
    p.userData.minY = pb.min.y;        // never push a part through the floor
  }
}
let explodeK = 0;
function animateExplode(target) {
  const from = explodeK, t0 = performance.now();
  const step = () => {
    const k = Math.min(1, (performance.now() - t0) / 480);
    explodeK = from + (target - from) * (1 - Math.pow(1 - k, 3));
    for (const p of state.parts) {
      const off = p.userData.dir.clone().multiplyScalar(explodeK * state.explodeSpan);
      if (p.userData.minY + off.y < 1) off.y = Math.max(off.y, 1 - p.userData.minY);
      p.position.copy(p.userData.home.clone().add(off));
    }
    if (k < 1) requestAnimationFrame(step);
  };
  step();
}

/* ------------------------------------------------------------ material
   Per-archetype curated list first, full library below, and a "+" entry
   that lets the user upload their own texture maps. */
const matSel = $("matSelect");
const customMats = {}; // id -> { label, material }
let customSeq = 0;

function rebuildMatSelect() {
  const rec = RECOMMENDED_MATERIALS[state.archetype] || [];
  const rest = MATERIAL_KEYS.filter((k) => !rec.includes(k));
  const opt = (k) => `<option value="${k}">${MATERIALS[k].label}</option>`;
  matSel.innerHTML =
    `<option value="__upload">＋ 텍스처 업로드 (커스텀 재질)</option>` +
    Object.entries(customMats).map(([id, c]) => `<option value="custom:${id}">${c.label}</option>`).join("") +
    (rec.length ? `<optgroup label="이 제품에 자주 쓰는 재질">${rec.map(opt).join("")}</optgroup>` : "") +
    `<optgroup label="${rec.length ? "전체 재질" : "재질"}">${rest.map(opt).join("")}</optgroup>`;
}
rebuildMatSelect();

function applyMaterialToSelected(mat, key, label) {
  state.materials[state.selected.name] = key;
  state.selected.traverse((o) => { if (o.isMesh) { o.material.dispose(); o.material = mat.clone(); } });
  state.selected.userData.materialKey = key;
  highlight(state.selected, 0.25);
  const sw = document.querySelector(`.part[data-id="${state.selected.name}"] .sw`);
  if (sw) sw.style.background = "#" + (mat.color ? mat.color.getHexString() : "888");
  toast(`${label} 적용`, true);
  saveToLibrary();
}

matSel.onchange = () => {
  const v = matSel.value;
  if (v === "__upload") {
    $("texUpload").click();
    matSel.value = state.selected?.userData.materialKey || "aluminum";
    return;
  }
  if (!state.selected) { toast("파트를 먼저 선택하세요"); return; }
  if (v.startsWith("custom:")) {
    const c = customMats[v.slice(7)];
    if (c) applyMaterialToSelected(c.material, v, c.label);
    return;
  }
  applyMaterialToSelected(makeMaterial(v), v, MATERIALS[v].label);
};

$("texUpload").addEventListener("change", async (e) => {
  const files = [...e.target.files];
  if (!files.length) return;
  const load = (f) => new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img); img.onerror = rej;
    img.src = URL.createObjectURL(f);
  });
  const toTex = (img, srgb) => {
    const t = new THREE.Texture(img);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    t.needsUpdate = true;
    return t;
  };
  try {
    const slots = { albedo: null, normal: null, rough: null, metal: null };
    for (const f of files) {
      const n = f.name.toLowerCase();
      if (/normal|nrm|_nor/.test(n)) slots.normal = f;
      else if (/rough|_rgh/.test(n)) slots.rough = f;
      else if (/metal|_mtl/.test(n)) slots.metal = f;
      else slots.albedo = slots.albedo || f;
    }
    if (!slots.albedo) { toast("베이스 컬러(알베도) 이미지가 필요합니다"); return; }
    const mat = new THREE.MeshStandardMaterial({
      map: toTex(await load(slots.albedo), true),
      normalMap: slots.normal ? toTex(await load(slots.normal)) : surfaceMaps().normal,
      roughnessMap: slots.rough ? toTex(await load(slots.rough)) : null,
      metalnessMap: slots.metal ? toTex(await load(slots.metal)) : null,
      roughness: slots.rough ? 1.0 : 0.55,
      metalness: slots.metal ? 1.0 : 0.05,
    });
    const id = String(++customSeq);
    const label = `커스텀: ${slots.albedo.name.replace(/\.[^.]+$/, "").slice(0, 18)}`;
    customMats[id] = { label, material: mat };
    rebuildMatSelect();
    const detected = ["albedo", slots.normal && "normal", slots.rough && "roughness", slots.metal && "metalness"].filter(Boolean).join(" + ");
    if (state.selected) {
      matSel.value = `custom:${id}`;
      applyMaterialToSelected(mat, `custom:${id}`, label);
      toast(`텍스처 인식: ${detected}`, true);
    } else {
      toast(`재질 등록 완료 (${detected}). 파트를 선택 후 목록에서 적용하세요`, true);
    }
  } catch {
    toast("텍스처를 읽지 못했습니다. JPG/PNG 이미지를 사용해 주세요");
  }
  e.target.value = "";
});

/* ------------------------------------------------------------ params */
function buildParamUI() {
  const host = $("params");
  host.innerHTML = "";
  const defs = currentParamDefs();
  for (const [k, d] of Object.entries(defs)) {
    const val = state.params[k] ?? d.value;
    const row = document.createElement("div");

    if (d.options) {                       // discrete choice → dropdown
      row.className = "slider choice";
      row.innerHTML = `<label title="${d.label}">${d.label}</label>
        <select class="input">${d.options.map((o, i) =>
          `<option value="${i}"${i === Math.round(val) ? " selected" : ""}>${o}</option>`).join("")}</select>`;
      row.querySelector("select").onchange = (e) => {
        state.params[k] = Number(e.target.value);
        rebuild();
        saveToLibrary();
      };
      host.appendChild(row);
      continue;
    }

    row.className = "slider";
    row.innerHTML = `<label title="${d.label}">${d.label}</label>
      <input type="range" min="${d.min}" max="${d.max}" step="${d.step}" value="${val}" />
      <span class="v">${val}</span>`;
    const input = row.querySelector("input");
    const out = row.querySelector(".v");
    input.oninput = () => { out.textContent = input.value; };
    input.onchange = () => {
      state.params[k] = Number(input.value);
      rebuild();
      saveToLibrary();
    };
    host.appendChild(row);
  }
}

/* one builder for both generation kinds */
function buildCurrent() {
  return state.kind === "program"
    ? buildProgramModel(state.program, state.params, state.materials)
    : buildModel(state.archetype, state.params, state.materials);
}
function currentParamDefs() {
  return state.kind === "program" ? (state.program.params || {}) : CATALOG[state.archetype].params;
}

function rebuild() {
  if (!state.archetype && !state.program) return;
  // editing a parameter always speaks to the parametric twin — leave 원본 view
  if (state.showingOrig && state.origMesh) {
    scene.remove(state.origMesh);
    state.showingOrig = false;
    $("btnOrig").classList.remove("on");
  }
  const keepSel = state.selected?.name;
  const hidden = state.parts.filter((p) => !p.visible).map((p) => p.name);
  const wasExploded = state.exploded;
  if (state.model) { scene.remove(state.model); dispose(state.model); }
  setQuality(state.quality);
  const root = buildCurrent();
  scene.add(root);
  state.model = root;
  state.parts = root.children.filter((c) => c.userData.isPart);
  state.parts.forEach((p) => { if (hidden.includes(p.name)) p.visible = false; });
  state.decimated = 0;
  explodeK = 0;
  captureExplodeBasis();
  buildPartList();
  state.parts.forEach((p) => {
    if (!p.visible) {
      const row = document.querySelector(`.part[data-id="${p.name}"]`);
      if (row) { row.classList.add("off"); row.querySelector(".vis use").setAttribute("href", "#i-eye-off"); }
    }
  });
  // re-apply custom (uploaded texture) materials, which the builder can't recreate
  for (const p of state.parts) {
    const k = state.materials[p.name];
    if (typeof k === "string" && k.startsWith("custom:")) {
      const c = customMats[k.slice(7)];
      if (c) { p.traverse((o) => { if (o.isMesh) { o.material.dispose(); o.material = c.material.clone(); } }); p.userData.materialKey = k; }
    }
  }
  const sel = state.parts.find((p) => p.name === keepSel);
  state.selected = null;
  if (sel) select(sel);
  if (wasExploded) { state.exploded = true; animateExplode(1); }
  refreshStats();
}

/* ------------------------------------------------------------ polygon
   One pipeline: the quality preset sets tessellation density (rebuild),
   then the reduction ratio decimates that mesh. Changing either one
   re-applies the other, so the two controls always compose. */
$("lodSeg").onclick = (e) => {
  const b = e.target.closest("button"); if (!b) return;
  if (!state.model) return;
  document.querySelectorAll("#lodSeg button").forEach((x) => x.classList.toggle("on", x === b));
  state.quality = { high: 1, mid: 0.55, low: 0.3 }[b.dataset.lod];
  if (state.imported) { toast("업로드 모델은 테셀레이션을 다시 만들 수 없어 감축률만 적용됩니다"); return; }
  const before = triCount(state.model);
  rebuild();
  const ratio = Number($("decimate").value) / 100;
  if (ratio > 0) applyDecimation(ratio, true);
  $("polyNote").textContent = `${b.textContent}${ratio > 0 ? ` + 감축 ${Math.round(ratio * 100)}%` : ""}: ${before.toLocaleString()} → ${triCount(state.model).toLocaleString()} 삼각형`;
};
$("decimate").oninput = (e) => ($("decimateV").textContent = `${e.target.value}%`);
$("btnDecimate").onclick = () => {
  if (!state.model) return;
  const ratio = Number($("decimate").value) / 100;
  const before = triCount(state.model);
  if (ratio <= 0) {
    if (!state.imported) { rebuild(); $("polyNote").textContent = "감축 없이 현재 품질의 원본 해상도입니다"; }
    return;
  }
  if (!state.imported && state.decimated > 0) rebuild(); // decimate from a pristine mesh
  applyDecimation(ratio);
  const after = triCount(state.model);
  refreshStats();
  $("polyNote").textContent = `감축 ${Math.round(ratio * 100)}%: ${before.toLocaleString()} → ${after.toLocaleString()} 삼각형`;
  toast(`폴리곤 ${Math.max(0, Math.round((1 - after / before) * 100))}% 감축`, true);
};
function applyDecimation(ratio, silent = false) {
  const mod = new SimplifyModifier();
  let failed = 0;
  state.model.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    try {
      // weld duplicated vertices first — SimplifyModifier collapses edges, so it
      // needs real shared topology, not an unindexed triangle soup
      let g = o.geometry.clone();
      g.deleteAttribute("uv"); g.deleteAttribute("uv1"); g.deleteAttribute("normal");
      g = mergeVertices(g, 1e-3);
      const verts = g.getAttribute("position").count;
      const remove = Math.floor(verts * ratio);
      if (remove < 4 || verts - remove < 24) { g.dispose(); return; }
      const simplified = mod.modify(g, remove);
      if (!simplified.index || simplified.index.count < 12) { simplified.dispose(); g.dispose(); failed += 1; return; }
      simplified.computeVertexNormals();
      o.geometry.dispose();
      o.geometry = simplified;
      g.dispose();
    } catch { failed += 1; }
  });
  state.decimated = ratio;
  if (failed && !silent) toast(`${failed}개 메시는 형상 보존을 위해 원본 유지`);
}

/* ------------------------------------------------------------ simulation
   Archetype-defined motion: gears spin, caps unscrew, lids lift.
   Transforms are applied around each part's own pivot and fully
   restored when the simulation stops. */
let simActive = false;
let simItems = [];
let simT0 = 0;

function simDefs() {
  if (state.kind === "program" && state.program) return programSims(state.program, state.params);
  if (state.archetype && SIMS[state.archetype]) return SIMS[state.archetype](state.params);
  return [];
}
function simAvailable() {
  return simDefs().length > 0;
}
function startSim() {
  if (!state.model || !simAvailable()) return;
  if (state.exploded) { $("btnExplodeTop").click(); } // assemble first
  simItems = [];
  for (const def of simDefs()) {
    const part = state.parts.find((p) => p.name === def.part);
    if (!part) continue;
    const bb = new THREE.Box3().setFromObject(part);
    const c = bb.getCenter(new THREE.Vector3());
    simItems.push({
      part, def,
      pivot: def.pivot ? new THREE.Vector3(def.pivot[0], c.y, def.pivot[1]) : c,
      home: part.position.clone(),
      homeRot: part.rotation.clone(),
    });
  }
  simT0 = performance.now();
  simActive = true;
  $("btnSim").classList.add("on");
  $("btnSim").textContent = "정지";
}
function stopSim() {
  simActive = false;
  for (const it of simItems) {
    it.part.position.copy(it.home);
    it.part.rotation.copy(it.homeRot);
  }
  simItems = [];
  $("btnSim").classList.remove("on");
  $("btnSim").textContent = state.cir ? "조인트 스윕" : "시뮬레이션";
}
function tickSim() {
  if (!simActive) return;
  const t = (performance.now() - simT0) / 1000;
  for (const it of simItems) {
    const { part, def, pivot, home, homeRot } = it;
    const w = ((def.rpm || 30) / 60) * Math.PI * 2;
    if (def.mode === "spinY" || def.mode === "unscrew") {
      const th = w * t;
      const c = Math.cos(th), s = Math.sin(th);
      part.rotation.set(homeRot.x, homeRot.y + th, homeRot.z);
      part.position.set(
        home.x + pivot.x - (pivot.x * c + pivot.z * s),
        home.y,
        home.z + pivot.z - (-pivot.x * s + pivot.z * c)
      );
      if (def.mode === "unscrew") {
        const cycle = (t % 6) / 6; // unscrew 3s, rewind 3s
        const k = cycle < 0.5 ? cycle * 2 : (1 - cycle) * 2;
        part.position.y = home.y + k * (def.travel || 10);
      }
    } else if (def.mode === "spinZ") {
      part.rotation.set(homeRot.x, homeRot.y, homeRot.z + w * t);
    } else if (def.mode === "spinX") {
      part.rotation.set(homeRot.x + w * t, homeRot.y, homeRot.z);
    } else if (def.mode === "lift") {
      const k = (Math.sin((t / (def.period || 2.5)) * Math.PI * 2 - Math.PI / 2) + 1) / 2;
      part.position.set(home.x, home.y + k * (def.travel || 10), home.z);
    }
  }
}
/* joint sweep: drive every movable joint through its measured range so the user
   sees the kinematics — this is the same motion the penetration check scores. */
let sweepRAF = 0;
function startJointSweep() {
  const movable = (state.cir?.joints || []).filter((j) => j.type !== "fixed" && j.limits);
  if (!movable.length) return;
  if (state.exploded) $("btnExplodeTop").click();
  $("btnSim").classList.add("on");
  $("btnSim").textContent = "정지";
  const t0 = performance.now();
  const loop = () => {
    if (!$("btnSim").classList.contains("on")) return;
    const t = (performance.now() - t0) / 1000;
    for (const j of movable) {
      const k = (Math.sin(t * 0.9 + movable.indexOf(j) * 0.7) + 1) / 2;   // 0..1 ping-pong
      applyJointPose(j.id, j.limits.lower + (j.limits.upper - j.limits.lower) * k);
    }
    sweepRAF = requestAnimationFrame(loop);
  };
  loop();
}
function stopJointSweep() {
  cancelAnimationFrame(sweepRAF);
  $("btnSim").classList.remove("on");
  $("btnSim").textContent = "조인트 스윕";
  resetJointPoses();
  buildJointUI();
}
$("btnSim").onclick = () => {
  if (state.cir) {
    $("btnSim").classList.contains("on") ? stopJointSweep() : startJointSweep();
    return;
  }
  simActive ? stopSim() : startSim();
};

/* ------------------------------------------------------------ library
   Per-account storage: every generated design is saved with a thumbnail
   and can be reopened from library.html to continue editing. */
const LIB_KEY = `vringon.library.${user}`;
function libRead() {
  try { return JSON.parse(localStorage.getItem(LIB_KEY)) || []; } catch { return []; }
}
function libWrite(items) {
  try { localStorage.setItem(LIB_KEY, JSON.stringify(items.slice(0, 60))); } catch {}
}
function thumb() {
  try {
    renderer.render(scene, camera);
    const src = renderer.domElement;
    const c = document.createElement("canvas");
    const s = 300 / src.width;
    c.width = 300; c.height = Math.round(src.height * s);
    c.getContext("2d").drawImage(src, 0, 0, c.width, c.height);
    return c.toDataURL("image/jpeg", 0.7);
  } catch { return null; }
}
function saveToLibrary() {
  /* A drone run has neither a catalogue archetype nor a program — its identity
     IS the specification. Gating on the two legacy fields meant every drone
     the user made vanished when they left the page. */
  if (!state.model || (!state.archetype && !state.program && !pipe?.spec)) return;
  const items = libRead();
  const entry = {
    droneSpec: pipe?.spec || null,
    id: state.libId || `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    at: Date.now(),
    title: state.title,
    prompt: state.prompt || "",
    kind: state.kind || "archetype",
    program: state.kind === "program" ? state.program : undefined,
    archetype: state.archetype || "freeform",
    params: { ...state.params },
    materials: { ...state.materials },
    brief: state.brief,
    spec: state.spec || "",
    coverage: state.coverage || "match",
    coverageNote: state.coverageNote || "",
    thumb: thumb(),
  };
  state.libId = entry.id;
  const i = items.findIndex((x) => x.id === entry.id);
  if (i >= 0) items[i] = entry; else items.unshift(entry);
  libWrite(items);
}

function restoreFromLibrary() {
  let entry = null;
  try { entry = JSON.parse(sessionStorage.getItem("vringon.open")); } catch {}
  sessionStorage.removeItem("vringon.open");
  if (!entry) return false;
  /* A stored drone rebuilds from its specification — the same compile the
     pipeline runs, so a restored drone is the drone that was saved. */
  if (entry.droneSpec) {
    pipe.spec = entry.droneSpec;
    pipe.prompt = entry.prompt || "";
    pipe.done = 3; pipe.running = 0; pipe.active = true; pipe.notes = [];
    state.kind = "archetype"; state.program = null; state.archetype = null;
    state.title = entry.title;
    state.brief = entry.brief || "";
    state.libId = entry.id;
    state.imported = false;
    clearModelKeepSpec();
    setPipeSpec(entry.droneSpec);
    const built = buildFromSpec(entry.droneSpec, {});
    scene.add(built.root);
    state.model = built.root;
    state.parts = built.root.children.filter((c) => c.userData.isPart || c.isMesh);
    state.threeCode = specThreeCode(entry.droneSpec);
    explodeK = 0;
    captureExplodeBasis();
    buildPartList();
    select(null);
    refreshStats();
    fitView(false);
    $("stageEmpty").style.display = "none";
    ["matBlock", "polyBlock"].forEach((id) => ($(id).style.display = ""));
    rebuildMatSelect();
    $("mName").textContent = state.title;
    $("projName").textContent = state.title;
    buildDroneParamUI();
    renderStepper();
    toast(`라이브러리에서 ${state.title}을(를) 열었습니다`, true);
    return true;
  }
  if (entry.kind === "program" && entry.program) {
    if (validateProgram(entry.program).length) return false;
    state.kind = "program";
    state.program = entry.program;
    state.archetype = null;
    state.params = clampProgramParams(entry.program, entry.params);
  } else if (CATALOG[entry.archetype]) {
    state.kind = "archetype";
    state.program = null;
    state.archetype = entry.archetype;
    state.params = clampParams(entry.archetype, entry.params);
  } else return false;
  state.materials = entry.materials || {};
  state.title = entry.title;
  state.brief = entry.brief || "";
  state.prompt = entry.prompt || "";
  state.libId = entry.id;
  state.imported = false;
  clearModelKeepSpec();
  setQuality(state.quality);
  const root = buildCurrent();
  scene.add(root);
  state.model = root;
  state.parts = root.children.filter((c) => c.userData.isPart);
  explodeK = 0;
  captureExplodeBasis();
  buildPartList();
  select(null);
  $("mName").textContent = state.title;
  $("mBrief").textContent = state.brief;
  $("projName").textContent = state.title;
  state.coverage = entry.coverage || "match";
  state.coverageNote = entry.coverageNote || "";
  state.spec = entry.spec || "";
  if (state.spec) { $("specText").textContent = state.spec; $("specBox").style.display = ""; }
  showCoverage();
  refreshStats();
  fitView(false);
  $("stageEmpty").style.display = "none";
  ["matBlock", "sheetBlock", "paramBlock", "polyBlock"].forEach((id) => ($(id).style.display = ""));
  buildSheetUI();
  $("editBar").classList.add("show");
  $("btnExplodeTop").classList.add("show");
  $("btnSim").classList.toggle("show", simAvailable());
  rebuildMatSelect();
  buildParamUI();
  toast("라이브러리에서 불러왔습니다. 이어서 편집하세요", true);
  return true;
}

/* ------------------------------------------------------------ generation
   The stepper above the viewport carries the four stages now, so this box only
   reports what the running stage is doing at the moment. Two competing step
   lists on one screen read as two different pipelines. */
function showGen(on, title) {
  $("gen").classList.toggle("on", on);
  if (title) $("genTitle").textContent = title;
  if (!on) $("genSteps").innerHTML = "";
}
function renderSteps(i, subtitle) {
  if (subtitle) $("genSub").textContent = subtitle;
  $("genBar").style.width = `${Math.min(1, (i + 1) / 4) * 100}%`;
}

/* honest scope notice: shown whenever the request fell outside (or beside)
   the supported product families, so a "car" never silently becomes a shell */
function showCoverage() {
  const el = $("scopeNote");
  const note = state.coverageNote;
  if (note && (state.coverage === "out_of_scope" || state.coverage === "approximate")) {
    el.textContent = note;
    el.classList.add("show");
    if (state.coverage === "out_of_scope") toast("요청이 데모 제품군 밖입니다. 안내를 확인하세요");
  } else {
    el.textContent = "";
    el.classList.remove("show");
  }
}

function clearModelKeepSpec() {
  tc.detach();
  if (state.model) { scene.remove(state.model); dispose(state.model); }
  state.model = null; state.parts = []; state.selected = null; state.exploded = false;
  $("btnExplodeTop").classList.remove("on");
  $("btnExplodeTop").textContent = "분해하기";
}

/* ============================================================================
   The three steps.

   Each one stops when it is done. Splitting the run this way is not decoration:
   the specification is the thing the user is buying, and a pipeline that races
   past it to a finished model gives no place to read it, disagree with it, and
   change it before geometry is committed.

   1  3D 생성        프롬프트면 시안을 그린 뒤 메시로, 이미지면 곧장 메시로,
                     3D 파일이면 그대로 뷰어에. 여기서는 메시만 받고 파트별
                     텍스처를 바꿉니다.
   2  JSON 사양서    카테고리 라우팅 후 Core 사양서. 직접 고치거나 프롬프트로 고칩니다.
   3  Three.js CAD   사양서만 읽고 형상을 만듭니다. 하단 프롬프트는 뒤에서 사양서를
                     고쳐 곧바로 다시 그립니다. 2단계로 돌아가지 않습니다.
   ========================================================================== */
/* The advance control is one primary button whose label IS the next stage —
   "다음" said nothing about what pressing it would cost or produce. */
const PIPE = [
  { n: 1, label: "3D 생성", run: pipeStep1,
    cta: "메시 3D 생성", note: "프롬프트면 시안을 그린 뒤 3D로, 이미지면 바로 3D로 (1~3분)" },
  { n: 2, label: "JSON 사양서", run: pipeStep2,
    cta: "정밀 3D 설계 사양서 생성하기", note: "드론 분류에 맞춰 설계 사양서를 JSON으로 씁니다" },
  { n: 3, label: "Three.js CAD", run: pipeStep3,
    cta: "코드 베이스 3D 생성", note: "사양서 JSON만 읽어 Three.js 형상을 만듭니다" },
  { n: 4, label: "시뮬레이션", run: pipeStep4,
    cta: "시뮬레이션 실행", note: "로터 회전·호버·로터 고장·낙하와 설계 검사를 실행합니다" },
  { n: 5, label: "3D 프린팅", run: pipeStep5,
    cta: "3D 프린팅 · 다운로드", note: "프린터·재료별 예상 출력 시간과 파일 다운로드" },
];
const pipe = { done: 0, running: 0, prompt: "", route: null, spec: null, notes: [], active: false };

function renderStepper() {
  $("stepper").classList.toggle("show", pipe.active);
  for (const b of document.querySelectorAll("#stepper .st")) {
    const n = Number(b.dataset.step);
    b.classList.toggle("done", n <= pipe.done && n !== pipe.running);
    b.classList.toggle("on", n === pipe.done + 1 || n === pipe.running);
    b.classList.toggle("run", n === pipe.running);
    b.disabled = n > pipe.done + 1 || state.busy || !!pipe.running;   // no skipping ahead
  }
  const next = PIPE[pipe.done];
  const cta = $("stageNext");
  cta.style.display = pipe.active && next && !pipe.running ? "" : "none";
  cta.disabled = state.busy || !!pipe.running;
  cta.textContent = next ? next.cta : "";

  const note = $("stepNote");
  note.classList.toggle("show", pipe.active && !pipe.running);
  note.textContent = next
    ? `오른쪽 아래 버튼: ${next.note}`
    : "다섯 단계를 모두 마쳤습니다. 하단 프롬프트로 고치면 사양서부터 바꿔 다시 그립니다";
  applyStepUI();
}

/* What the panels offer follows what actually exists. Showing a STEP button
   over a triangle soup, or a part-scoped export before parts are separated,
   promises something the file will not contain. */
function applyStepUI() {
  const at = pipe.active ? Math.max(pipe.done, pipe.running) : 0;
  const cad = at >= 3;
  $("dlCad").style.display = cad ? "" : "none";
  $("dlRobot").style.display = cad ? "" : "none";
  $("scopeSeg").style.display = cad ? "" : "none";
  // a part-scoped export cannot outlive the panel that offered it
  if (!cad && !$("scopeAll").classList.contains("on")) $("scopeAll").click();
  $("dlStage").textContent = !pipe.active ? "" : cad ? "CAD · 메시 · 파트별" : "메시";
  $("dlNote").textContent = !pipe.active
    ? "보관하면 원본·파생 파일과 제품 구조·관계가 라이브러리 자산 탭에 등록됩니다."
    : cad
      ? "사양서에서 만든 솔리드라 CAD 형식이 의미를 갖습니다. 파트를 선택하면 그 파트만 받습니다."
      : "1단계 결과는 삼각형 메시입니다. CAD 형식은 3단계에서 사양서로 형상을 만든 뒤에 열립니다.";
  // the specification sheet belongs to step 2 onward
  $("btnSpecOpen").style.display = pipe.spec ? "" : "none";
  if (!pipe.spec) $("specSheet").classList.remove("show");
  $("specBar").classList.toggle("show", !!pipe.spec && at >= 2);
  $("specPrompt").placeholder = cad
    ? "고치고 싶은 것을 쓰면 사양서를 바꿔 바로 다시 그립니다: 예) 휠베이스를 520mm로"
    : "사양서를 고칩니다: 예) 로터를 6개로 바꾸고 짐벌을 상부로";
}

async function pipeRun(n) {
  if (state.busy || pipe.running) return;
  const step = PIPE[n - 1];
  if (!step) return;
  pipe.running = n;
  renderStepper();
  try {
    const ok = await step.run();
    if (ok !== false) pipe.done = Math.max(pipe.done, n);
  } catch (e) {
    console.error(`step ${n} failed`, e);
    toast(`${n}단계 실패: ${e.message}`);
  } finally {
    pipe.running = 0;
    renderStepper();
  }
}

/* ------------------------------------------------------------------- 1 3D
   Three ways in, one thing out: a mesh in the viewport. A prompt is drawn
   first because the reconstruction reads an image, an uploaded image already
   is that image, and an uploaded 3D file is already the answer. */
async function pipeStep1() {
  if (state.imported && state.model) {
    // a 3D upload arrives finished; there is nothing to reconstruct
    state.pipeMesh = state.model;
    toast("업로드한 3D를 그대로 사용합니다. 2단계에서 사양서를 씁니다", true);
    return true;
  }

  if (!state.designImageB64) {
    state.busy = true;
    $("btnGenerate").disabled = true;
    showGen(true, "1단계 · 3D 생성");
    try {
      $("genPreview").style.display = "none";
      if (state.refImageB64) {
        state.designImageB64 = state.refImageB64;
        renderSteps(0, "업로드한 이미지에서 바로 3D를 만듭니다");
      } else {
        renderSteps(0, "프롬프트에서 제품 디자인 시안을 그립니다");
        const d = await fetch("/api/design", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: pipe.prompt }),
        }).then((r) => r.json());
        if (!d.ok || !d.imageB64) throw new Error(d.error || "디자인 생성 실패");
        state.designImageB64 = d.imageB64;
        state.requirements = d.requirements || null;
        state.title = (pipe.prompt || "자산").slice(0, 30);
        $("mName").textContent = state.title;
        $("projName").textContent = state.title;
      }
      $("genPreview").src = state.designImageB64; $("genPreview").style.display = "";
      $("designImg").src = state.designImageB64; $("designImg").style.display = "";
    } finally {
      // generateSourceMesh owns the run flag next, so release it here
      state.busy = false; $("btnGenerate").disabled = false;
      showGen(false);
    }
  }

  /* 이미지·프롬프트는 메시 클라우드를 거친다. 메시 클라우드가 설정되지 않았거나 실패하면
     서버가 로컬 복원으로 내려가고, 그래도 안 되면 사양서 단계가 3D 없이
     비례 기반으로 진행된다. */
  const ok = await generateSourceMesh("mesh-cloud", "1단계 · 3D 생성");
  if (ok) {
    state.pipeMesh = state.origMesh || state.model;
    $("btnOrig").classList.add("show", "on");
    toast("3D를 만들었습니다. 파트별 재질을 바꾸거나 메시로 내려받을 수 있습니다", true);
    return true;
  }
  /* The reconstruction is the step that depends on a service outside this box.
     Blocking the pipeline on it would mean an unreachable renderer takes the
     whole demo down, so the stage completes without one and the specification
     is told it has no original to measure against. */
  state.pipeMesh = null;
  pipe.notes.push("1단계 3D 없음: 사양서가 스케일 기준 없이 형상을 작성합니다");
  toast("3D 생성에 실패했습니다. 3D 없이 2단계 사양서를 진행합니다");
  return true;
}

/* ------------------------------------------------------------------ 2 spec */
function meshInfoForSpec() {
  const m = state.pipeMesh;
  if (!m) return null;
  const b = new THREE.Box3().setFromObject(m);
  const s = b.getSize(new THREE.Vector3());
  return {
    triangles: triCount(m),
    bbox: [s.x, s.y, s.z].map((v) => Number(v.toFixed(1))),
  };
}

async function pipeStep2() {
  if (!state.designImageB64 && !state.pipeMesh) { toast("1단계를 먼저 실행하세요"); return false; }
  state.busy = true;
  showGen(true, "2단계 · 드론 설계 사양서");
  try {
    /* No category routing call: the user picked domain·mission·platform before
       generating, and those selections ARE the classification. */
    renderSteps(1, `${droneSelection().label} 사양서를 설계 AI로 작성합니다 (1~3분)`);
    /* The bounding box alone tells the model nothing about layout. Four
       renders of the stage-1 mesh let it read boom positions, rotor stations
       and tail geometry off the thing it is specifying. */
    let views = null;
    if (state.pipeMesh) {
      try { views = captureViews(state.pipeMesh); } catch (e) { console.warn("view capture failed", e); }
    }
    const s = await fetch("/api/spec-json", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: pipe.prompt, imageB64: state.designImageB64,
        drone: droneSelection(), meshInfo: meshInfoForSpec(), views,
      }),
    }).then((x) => x.json());
    if (!s.ok || !s.spec) throw new Error(s.error || "사양서 생성 실패");

    /* The specification writer cannot see how a section changes along a body,
       so it writes an extrusion and the fuselage comes out a plank. The stage-1
       mesh can be measured: slice each shell part inside its own declared box
       and write the stations back. Deterministic, free, and it runs before the
       sheet is shown so the JSON the user reads is the one that compiles. */
    if (state.pipeMesh) {
      try {
        const mesh = positionsFromObject3D(state.pipeMesh);
        /* The fit is worked out inside refineFromMesh, per axis, from the two
           bounding boxes — nothing to line up here. */
        if (mesh) {
          const done = refineFromMesh(s.spec, mesh);
          const authored = done.authored || [];
          const total = done.measured.length + done.internal.length + authored.length;
          if (done.measured.length) {
            toast(`메시에서 좌표 측정 ${done.measured.length}/${total}파트`
              + (done.internal.length ? ` · 내부 ${done.internal.length}개는 사양서 값 유지` : "")
              /* Saying which parts were skipped and why: a wing whose section
                 the measurement would have flattened back into a plank is the
                 one place a user would otherwise think the tool did nothing. */
              + (authored.length ? ` · 회전·에어포일 ${authored.length}개는 사양서가 형상을 정함` : ""), true);
          }
        }
      } catch (e) { console.warn('loft refine failed', e); }
    }

    setPipeSpec(s.spec, s.validationErrors || []);
    $("specSheet").classList.add("show");   // the sheet is the point of this step
    const bad = (s.validationErrors || []).length;
    toast(`사양서를 작성했습니다 — 파트 ${(s.spec.parts || []).length}개`
      + (bad ? ` · 검증 경고 ${bad}건` : "") + ". 확인·수정 후 3단계로 진행하세요", true);
    return true;
  } finally {
    state.busy = false;
    showGen(false);
  }
}

/** Put a specification into the sheet and remember it. */
function setPipeSpec(spec, errors = []) {
  pipe.spec = spec;
  pipe.specErrors = errors;
  $("jsonText").value = JSON.stringify(spec, null, 2);
  $("jsonText").classList.remove("bad");
  const arch = spec.classification?.platform_architecture || spec.classification?.recipe_id || "-";
  $("jsonMeta").textContent = `${arch} · 파트 ${(spec.parts || []).length}`;
  const msg = $("jsonMsg");
  msg.classList.toggle("bad", errors.length > 0);
  msg.textContent = errors.length
    ? `검증 경고 ${errors.length}건: ` + errors.slice(0, 3).map((e) => `${e.field_path} ${e.error_code}`).join(", ")
    : "JSON 탭에서 좌표·파라미터를 고치고 사양 반영을 누르면 그대로 다시 만듭니다.";
  state.pipeSpec = spec;
  buildCatalogUI();
  /* 일반 사양서 is a deterministic rendering of the same JSON — regenerated on
     every change so the two tabs can never tell different stories. */
  $("specPlain").textContent = droneSpecText(spec, pipe.notes);
  $("specText").textContent = $("specPlain").textContent;
  $("specBox").style.display = "";
  applyStepUI();
}

/* --------------------------------------------------- the spec sheet itself */
function droneSpecText(spec, notes = []) {
  const cl = spec.classification || {};
  if (!cl.platform_architecture) return specSummaryText(spec, notes);   // non-drone spec
  const L = [];
  const q = (o, unit) => (o && o.value != null ? `${o.value}${unit || o.unit || ""}` : "미확정");
  L.push(`${spec.identity?.name_ko || "드론"}  ·  Rev ${spec.identity?.revision || "A"}`);
  L.push("");
  L.push("[분류]");
  L.push(`  용도 ${cl.domain} · 임무 ${cl.mission_primary} (${cl.mission_effect})`);
  L.push(`  기체 ${cl.platform_family} / ${cl.platform_architecture}`);
  const sp = spec.size_performance || {};
  L.push("");
  L.push("[크기·성능]");
  L.push(`  최대이륙중량 ${q(sp.mtow, "kg")} · 자체중량 ${q(sp.empty_mass, "kg")} · 탑재 ${q(sp.payload_capacity, "kg")}`);
  if (sp.wheelbase_mm) L.push(`  휠베이스 ${sp.wheelbase_mm}mm · 로터 ${sp.rotor_count || "-"}개`);
  if (sp.wingspan_mm) L.push(`  날개폭 ${sp.wingspan_mm}mm`);
  for (const x of spec.external_classifications || []) {
    L.push(`  ${x.scheme}: ${x.value} (${x.derivation === "COMPUTED_FROM_MTOW" ? "MTOW에서 계산" : x.derivation})`);
  }
  L.push("");
  L.push(`[파트 ${(spec.parts || []).length}]`);
  for (const p of spec.parts || []) {
    const g = p.geometry || {}, s = g.size_mm || {};
    L.push(`  ${p.part_id} ${p.display_name_ko || p.name}`);
    L.push(`    ${g.builder || "-"} · ${s.w}×${s.h}×${s.d}mm`
      + (g.repeat?.count > 1 ? ` · ${g.repeat.pattern} ×${g.repeat.count}` : ""));
  }
  const params = spec.parameters || [];
  if (params.length) {
    L.push("");
    L.push(`[파라미터 ${params.length}]`);
    for (const pm of params) {
      L.push(`  ${pm.label_ko} (${pm.id})`
        + ` = ${pm.value == null ? "미입력" : pm.value + pm.unit}`
        + (pm.min != null && pm.max != null ? `  범위 ${pm.min}~${pm.max}` : "")
        + `  · ${pm.default_policy}`);
    }
  }
  if ((spec.state_variants || []).length) {
    L.push("");
    L.push(`[검증 상태] ${(spec.state_variants || []).map((v) => v.id).join(" · ")}`);
  }
  const a = spec.assurance || {};
  L.push("");
  L.push(`[신뢰도] 형상 ${a.geometry_status || "-"} · 공학 검증 ${a.engineering_status || "-"}`);
  L.push("  이 사양서는 형상 설계 문서이며 감항 인증 근거가 아닙니다.");
  if ((spec.uncertainties || []).length) {
    L.push("");
    L.push("[불확실]");
    for (const u of spec.uncertainties) L.push(`  ${u.severity} ${u.field_path}: ${u.reason}`);
  }
  if (notes.length) {
    L.push("");
    L.push("[빌드 기록]");
    for (const n of notes) L.push(`  ${n}`);
  }
  return L.join("\n");
}

const SPEC_HELP_HTML = `
<h4>이 사양서가 Three.js가 되는 방식</h4>
JSON의 <code>parts[].geometry</code>만 형상이 됩니다. 여기 없는 값은 만들어지지 않습니다.
단위는 전부 mm, Y가 위, 원점은 조립체 바닥 중앙입니다.

<h4>builder — 파트를 만드는 방법</h4>
<code>REVOLVE</code> 회전체 (동체·허브·레이돔) — outer_profile [반경,높이] 단면을 회전<br/>
<code>EXTRUDE_2D</code> 판재·암·날개 — outer_profile [x,y] 외곽선을 size_mm.d 두께로 압출<br/>
<code>CYLINDER · BOX · SPHERE</code> 모터·배터리·센서 같은 단순 파트<br/>
얇은 <code>CYLINDER</code>(h 2~3)에 반투명 재질을 쓰면 로터 디스크가 됩니다.

<h4>프로파일 좌표 쓰는 법</h4>
방향이 바뀌는 모든 지점에 반경을 넣습니다. 직선끼리 90°로 만나면 각진 깡통이 됩니다.
<pre>{"type":"ARC","start":[42.5,0],"end":[45,2.5],
 "radius":2.5,"sweep":"CCW"}   ← 바닥 모서리 R2.5</pre>
ARC는 radius·sweep 필수, radius는 두 점 거리의 절반 이상.
BEZIER는 control1·control2 필수.

<h4>repeat — 로터·암 배치</h4>
같은 파트가 원형으로 반복되면 <code>repeat.CIRCULAR</code>를 씁니다.
<pre>{"pattern":"CIRCULAR","count":4,
 "radius_mm":225,"start_angle_deg":45}  ← 쿼드 X</pre>
암 끝·모터·로터의 radius_mm이 같아야 조립이 맞습니다.
로터 디스크 지름 &lt; 휠베이스 × sin(180°/로터수) 를 지켜야 디스크가 겹치지 않습니다.

<h4>파라미터</h4>
<code>parameters[]</code>의 값은 형상을 바꾸는 손잡이입니다.
<code>affects</code>에 적힌 part_id가 그 값을 따라 움직입니다.
이미지로 알 수 없는 값(모터 정격·배터리 용량·비행시간)은
<code>USER_REQUIRED</code>로 null이며, 직접 채우면 USER_PROVIDED로 기록됩니다.

<h4>수치를 고칠 때</h4>
휠베이스를 바꾸면: 암 repeat.radius_mm, 모터·로터 radius_mm,
size_performance.wheelbase_mm을 같이 바꿔야 합니다.
하단 프롬프트에 "휠베이스를 520mm로"라고 쓰면 이 연쇄를 AI가 대신 처리합니다.`;

let specTab = "plain";
function showSpecTab(tab) {
  specTab = tab;
  for (const b of document.querySelectorAll("#specTabs button"))
    b.classList.toggle("on", b.dataset.tab === tab);
  $("specPlain").style.display = tab === "plain" ? "" : "none";
  $("jsonText").style.display = tab === "json" ? "" : "none";
  $("specHelp").style.display = "none";
}
document.querySelectorAll("#specTabs button").forEach((b) => {
  b.onclick = () => showSpecTab(b.dataset.tab);
});
$("btnSpecHelp").onclick = () => {
  const open = $("specHelp").style.display === "none";
  $("specHelp").innerHTML = SPEC_HELP_HTML;
  $("specHelp").style.display = open ? "" : "none";
  $("specPlain").style.display = open ? "none" : (specTab === "plain" ? "" : "none");
  $("jsonText").style.display = open ? "none" : (specTab === "json" ? "" : "none");
};
$("btnSpecClose").onclick = () => $("specSheet").classList.remove("show");
$("btnSpecOpen").onclick = () => $("specSheet").classList.toggle("show");

/* ------------------------------------------------------------------- 3 cad */
async function pipeStep3() {
  if (!pipe.spec) { toast("2단계를 먼저 실행하세요"); return false; }
  state.busy = true;
  showGen(true, "3단계 · Three.js CAD");
  teardownSim();   // the sim animates the model this step is about to replace
  try {
    renderSteps(2, "사양서의 geometry 블록만 읽어 형상을 만듭니다");
    const built = buildFromSpec(pipe.spec, { sourceMesh: state.pipeMesh || null });
    pipe.notes = built.notes;

    if (state.model && state.model !== state.pipeMesh) { scene.remove(state.model); dispose(state.model); }
    else if (state.model) scene.remove(state.model);
    scene.add(built.root);
    state.model = built.root;
    state.parts = built.root.children.filter((c) => c.userData.isPart || c.isMesh);
    state.kind = "archetype";
    state.imported = false;
    state.analysis = built.analysis;
    state.threeCode = specThreeCode(pipe.spec);
    explodeK = 0;
    captureExplodeBasis();
    buildPartList();
    select(null);
    refreshStats();
    fitView(false);
    $("stageEmpty").style.display = "none";
    ["matBlock", "polyBlock"].forEach((id) => ($(id).style.display = ""));
    rebuildMatSelect();
    $("btnExplodeTop").classList.add("show");
    $("btnHiFi").classList.add("show");
    if (state.pipeMesh) $("btnOrig").classList.add("show");
    $("btnOrig").classList.remove("on");
    $("sheetBlock").style.display = "";
    buildCodeSheetUI();
    buildDroneParamUI();
    $("specText").textContent = specSummaryText(pipe.spec, built.notes);
    $("specBox").style.display = "";
    $("specBar").classList.add("show");
    $("btnKeep").style.display = "";

    /* The same re-render check the rest of the workspace uses: the model is
       scored against the image it came from, with no correction pass, because
       the specification is the user's to change rather than ours. */
    try {
      const v = await validateAgainstImage(built.root, state.designImageB64, { correct: false });
      if (v?.after != null) {
        state.reviewScore = v.after;
        $("agreeRow").style.display = "";
        $("mAgree").textContent = `${(v.after * 100).toFixed(0)}%`;
      }
    } catch {}

    addHistory(pipe.prompt);
    saveToLibrary();
    toast(`사양서에서 ${state.parts.length}개 파트를 만들었습니다`
      + (built.notes.length ? ` · 기록 ${built.notes.length}건` : ""), true);
    return true;
  } finally {
    state.busy = false;
    showGen(false);
  }
}

/* ------------------------------------------------------ deterministic edit
   Sliders write into the spec JSON and recompile — no model call. A pending
   simulation is torn down first because it animates the model being replaced;
   selection survives by part id, camera stays put. */
let quickTimer = 0;
function quickRebuild() {
  if (!pipe.spec) return;
  const keepSel = state.selected?.userData?.regionId || null;
  const simWasOn = !!droneSim;   // a knob edit must not silently end step 4
  teardownSim();
  const built = buildFromSpec(pipe.spec, { sourceMesh: state.pipeMesh || null });
  pipe.notes = built.notes;
  if (state.model && state.model !== state.pipeMesh) { scene.remove(state.model); dispose(state.model); }
  else if (state.model) scene.remove(state.model);
  scene.add(built.root);
  state.model = built.root;
  state.parts = built.root.children.filter((c) => c.userData.isPart || c.isMesh);
  state.threeCode = specThreeCode(pipe.spec);
  captureExplodeBasis();
  buildPartList();
  refreshStats();
  // refresh both sheet views from the mutated JSON without collapsing the panel
  $("jsonText").value = JSON.stringify(pipe.spec, null, 2);
  $("specPlain").textContent = droneSpecText(pipe.spec, pipe.notes);
  $("specText").textContent = $("specPlain").textContent;
  if (keepSel) {
    const again = state.parts.find((p) => p.userData?.regionId === keepSel);
    if (again) select(again);
  }
  buildCatalogUI();
  if ($("printBlock").style.display !== "none") renderPrintEstimate();
  if (simWasOn) spawnSim({ quiet: true });
}

/** Create the sim on the current model and populate the panel. */
function spawnSim({ quiet = false } = {}) {
  droneSim = createDroneSim({ root: state.model, spec: pipe.spec });
  $("simDock").classList.add("show");
  $("simBlock").style.display = "";
  $("simMeta").textContent = `로터 ${droneSim.rotorCount}개 인식`;
  droneSim.setWind(Number($("simWind").value) || 0);
  const rows = renderSimChecks();
  if (!quiet && droneSim.rotorCount === 0) {
    toast("로터로 인식된 파트가 없습니다. 파트 이름에 로터·프로펠러가 들어가야 회전합니다");
  }
  return rows;
}
const scheduleQuickRebuild = () => { clearTimeout(quickTimer); quickTimer = setTimeout(quickRebuild, 220); };

function numRow(label, value, { min = null, max = null, step = 1 } = {}, onSet) {
  const row = document.createElement("div");
  row.className = "slider";
  const lab = document.createElement("label");
  lab.textContent = label;
  const num = document.createElement("input");
  num.type = "number"; num.value = value == null ? "" : Number(value.toFixed ? value.toFixed(1) : value);
  num.step = step;
  num.style.cssText = "width:76px;background:#0F0F13;border:1px solid var(--line-2);border-radius:6px;color:var(--text);padding:4px 7px;font-size:12px";
  let rng = null;
  if (min != null && max != null && value != null) {
    rng = document.createElement("input");
    rng.type = "range"; rng.min = min; rng.max = max; rng.step = step; rng.value = value;
    rng.oninput = () => { num.value = rng.value; onSet(Number(rng.value)); };
  }
  num.onchange = () => {
    const v = Number(num.value);
    if (!Number.isFinite(v)) return;
    if (rng) rng.value = v;
    onSet(v);
  };
  row.append(lab);
  if (rng) row.append(rng);
  row.append(num);
  return row;
}

/** Global drone knobs, one row per spec parameter. */
function buildDroneParamUI() {
  const host = $("droneParams");
  host.innerHTML = "";
  const params = pipe.spec?.parameters || [];
  $("paramDroneBlock").style.display = params.length ? "" : "none";
  for (const pm of params) {
    const range = pm.min != null && pm.max != null ? { min: pm.min, max: pm.max, step: pm.unit === "count" ? 1 : 1 } : {};
    const row = numRow(`${pm.label_ko} (${pm.unit})`, pm.value, range, (v) => {
      const touched = applyParameter(pipe.spec, pm.id, v);
      if (!touched.length) toast(`${pm.label_ko}: 연결된 형상 규칙이 없어 값만 기록됩니다`);
      scheduleQuickRebuild();
    });
    host.appendChild(row);
  }
}

/** Direct fields for the selected part. */
function buildPartEditor(partId) {
  const specPart = (pipe.spec?.parts || []).find((x) => x.part_id === partId);
  if (!specPart) { $("partEditBlock").style.display = "none"; return; }
  $("partEditBlock").style.display = "";
  $("partEditName").textContent = specPart.display_name_ko || specPart.name;
  const host = $("partEditFields");
  host.innerHTML = "";
  for (const f of partFields(pipe.spec, partId)) {
    host.appendChild(numRow(f.label, f.value, { min: f.min, max: f.max, step: f.step || 1 }, (v) => {
      applyPartField(pipe.spec, partId, f.key, v);
      scheduleQuickRebuild();
    }));
  }
}

/* ------------------------------------------------------------------ 4 sim
   The machine has to move. Step 4 spins the rotors, flies a scripted hover
   mission, and runs the design checks that a specification can honestly
   answer — each check row shows the formula it came from. */
function teardownSim() {
  if (droneSim) { droneSim.reset(); droneSim = null; }
  $("simDock").classList.remove("show");
  $("simBlock").style.display = "none";
}

async function pipeStep4() {
  if (!state.model || !pipe.spec) { toast("3단계 CAD를 먼저 만들어야 시뮬레이션이 가능합니다"); return false; }
  teardownSim();
  const rows = spawnSim();
  if (droneSim.rotorCount > 0) {
    droneSim.fly();
    toast(`시뮬레이션 시작 — 로터 ${droneSim.rotorCount}개, 이륙·호버 프리뷰`, true);
  }
  const bad = rows.filter((c) => c.ok === false);
  if (bad.length) toast(`설계 검사 경고 ${bad.length}건: ${bad.map((c) => c.label).join(", ")}`);
  return true;
}

/* ---------------------------------------------------------------- 5 print
   Volume comes from the actual triangles; the hours are an estimate against
   published printer speed classes and are labelled as such. */
async function pipeStep5() {
  if (!state.model) { toast("3단계 CAD가 있어야 프린팅을 계획할 수 있습니다"); return false; }
  $("printBlock").style.display = "";
  if (!$("printPrinter").options.length) {
    $("printPrinter").innerHTML = PRINTERS.map((p) => `<option value="${p.id}">${p.name}</option>`).join("");
    $("printMaterial").innerHTML = PRINT_MATERIALS.map((m) => `<option value="${m.id}">${m.name}</option>`).join("");
  }
  renderPrintEstimate();
  $("printBlock").scrollIntoView({ behavior: "smooth", block: "start" });
  toast("프린터·재료를 고르면 예상 출력 시간이 계산됩니다", true);
  return true;
}

function renderPrintEstimate() {
  if (!state.model) return;
  const printer = PRINTERS.find((p) => p.id === $("printPrinter").value) || PRINTERS[0];
  const material = PRINT_MATERIALS.find((m) => m.id === $("printMaterial").value) || PRINT_MATERIALS[0];
  const infill = Number($("printInfill").value) / 100;
  const est = estimatePrint({ root: state.model, printer, material, infill, parts: state.parts.length });
  const h = Math.floor(est.hours), m = Math.round((est.hours - h) * 60);
  $("printResult").innerHTML = `
    <div class="kv"><span>부피 (솔리드)</span><b>${est.solid_cm3.toFixed(1)} cm³</b></div>
    <div class="kv"><span>재료 사용</span><b>${est.grams.toFixed(0)} g ${material.name}</b></div>
    <div class="kv"><span>예상 출력 시간</span><b>${h}시간 ${m}분</b></div>
    <div class="kv"><span>빌드 볼륨</span><b>${est.fits ? "맞음"
      : `1/${(1 / est.fitScale).toFixed(1)} 축소 또는 파트 분할 필요`}</b></div>
    <div class="hint" style="margin-top:7px">${printer.note} · ${material.note}<br/>
    슬라이서 추정이 아니라 지속 유량(${printer.flow_mm3s}mm³/s × 재료 계수 ${material.speed_k}) 기반
    근사입니다. 서포트·이동은 포함되지 않습니다.</div>`;
}
["printPrinter", "printMaterial"].forEach((id) => { $(id).onchange = renderPrintEstimate; });
$("printInfill").oninput = () => {
  $("printInfillV").textContent = `${$("printInfill").value}%`;
  renderPrintEstimate();
};

/* -------------------------------------------------------------- catalogue */
let catalogGroup = CATALOG_GROUPS[0];
function buildCatalogUI() {
  if (!pipe.spec) { $("catalogBlock").style.display = "none"; return; }
  $("catalogBlock").style.display = "";
  $("catalogTabs").innerHTML = CATALOG_GROUPS.map((g) =>
    `<button class="${g === catalogGroup ? "on" : ""}" data-g="${g}">${g}</button>`).join("");
  const items = COMPONENT_CATALOG.filter((c) => c.group === catalogGroup);
  $("catalogItems").innerHTML = items.map((c) => {
    const targets = fitTargets(pipe.spec, c);
    // motors need a placement ring, so they can only replace, never spawn
    const canAdd = !targets.length && c.group !== "모터";
    return `<button class="part" data-c="${c.id}" ${targets.length || canAdd ? "" : "disabled style='opacity:.4'"}>
      <div style="flex:1;min-width:0">
        <div style="font-size:12.5px;font-weight:600">${c.name}
          <span style="color:var(--text-3);font-weight:500">· ${c.mass_g}g</span></div>
        <div style="font-size:11px;color:var(--text-3)">${c.spec}${targets.length ? "" : canAdd ? " · 파트로 추가" : " · 링 필요"}</div>
      </div></button>`;
  }).join("");
}
$("catalogTabs").onclick = (e) => {
  const b = e.target.closest("button"); if (!b) return;
  catalogGroup = b.dataset.g;
  buildCatalogUI();
};
$("catalogItems").onclick = (e) => {
  const b = e.target.closest(".part"); if (!b || b.disabled) return;
  const item = COMPONENT_CATALOG.find((c) => c.id === b.dataset.c);
  const targets = fitTargets(pipe.spec, item);
  if (targets.length) {
    /* the selected part wins if it fits; otherwise the first matching part */
    const selId = state.selected?.userData?.regionId;
    const target = targets.find((t) => t.part_id === selId) || targets[0];
    applyComponent(pipe.spec, target.part_id, item);
    toast(`${target.display_name_ko || target.part_id} ← ${item.name} (${item.mass_g}g)`, true);
  } else if (item.group !== "모터") {
    const id = addComponentAsPart(pipe.spec, item);
    toast(`${item.name}을(를) 새 파트로 추가했습니다 (${item.mass_g}g) — 파트 편집에서 위치를 조정하세요`, true);
    if (id && item.wh && pipe.spec) $("simBattery").value = item.wh;
  } else return;
  scheduleQuickRebuild();
};

function renderSimChecks() {
  if (!droneSim) return [];
  const rows = droneSim.checks({ batteryWh: Number($("simBattery").value) || 0 });
  $("simChecks").innerHTML = rows.map((c) => `
    <div class="simcheck">
      <div class="r"><span>${c.label}</span>
        <b class="${c.ok === true ? "ok" : c.ok === false ? "bad" : ""}">${c.value}</b></div>
      <div class="n">${c.note}</div>
    </div>`).join("");
  return rows;
}

$("btnFly").onclick = () => droneSim?.fly();
$("btnFly6").onclick = () => {
  if (!droneSim) return;
  droneSim.flyPhysical(0.6);
  const f = droneSim.flightFacts();
  toast(`6-DoF 비행 — 질량 ${f.mass.toFixed(2)}kg · 추력 여유 ${(f.thrustMargin).toFixed(2)}배`, true);
};
$("btnRotorOut").onclick = () => {
  if (!droneSim) return;
  /* In 6-DoF the failure is a consequence, not a keyframe: whether the
     airframe survives falls out of the allocation. */
  if (droneSim.state.mode === "physical") {
    droneSim.failRotorPhysical();
    toast("6-DoF 로터 고장 — 잔여 로터의 배분 결과가 그대로 나타납니다", true);
  } else {
    droneSim.rotorOut();
    toast("로터 1개 고장 시나리오 — 설계 검사의 판정과 같은 거동입니다", true);
  }
};
$("btnDrop").onclick = () => droneSim?.drop(400);
$("btnSimStop").onclick = () => droneSim?.stop();
$("simWind").oninput = () => {
  $("simWindV").textContent = `${$("simWind").value}`;
  droneSim?.setWind(Number($("simWind").value));
};
$("simPayload").oninput = () => {
  $("simPayloadV").textContent = `${$("simPayload").value}kg`;
  droneSim?.setPayload(Number($("simPayload").value));
  renderSimChecks();
};
$("simBattery").onchange = () => renderSimChecks();

/* JSON edited by hand */
$("btnJsonApply").onclick = async () => {
  let parsed;
  try { parsed = JSON.parse($("jsonText").value); }
  catch (e) {
    $("jsonText").classList.add("bad");
    $("jsonMsg").classList.add("bad");
    $("jsonMsg").textContent = `JSON 문법 오류: ${e.message}`;
    return;
  }
  setPipeSpec(parsed, []);
  /* Once geometry exists it is rebuilt in place. The stepper does not move,
     because an edit is not a step backwards. */
  if (pipe.done >= 3) await pipeStep3();
  else toast("사양을 반영했습니다. 3단계로 진행하세요", true);
};
$("btnJsonRevert").onclick = () => {
  if (!pipe.spec) return;
  $("jsonText").value = JSON.stringify(pipe.spec, null, 2);
  $("jsonText").classList.remove("bad");
  $("jsonMsg").classList.remove("bad");
  $("jsonMsg").textContent = "편집을 되돌렸습니다.";
};

/* The bottom bar always edits the SPECIFICATION first, never the mesh. Editing
   geometry directly would leave the spec describing something that is no longer
   on screen, and the spec is what the exports and the CAD are built from.

   At step 3 the rebuild happens right here rather than sending anyone back to
   step 2: the JSON changes behind the panel and the new shape appears in place. */
$("btnSpecEdit").onclick = async () => {
  const instr = $("specPrompt").value.trim();
  if (!instr || !pipe.spec || state.busy) return;
  const rebuild = pipe.done >= 3;
  $("btnSpecEdit").disabled = true;
  $("btnSpecEdit").textContent = "…";
  if (rebuild) showGen(true, "사양서 수정 · 다시 그리기");
  try {
    if (rebuild) renderSteps(0, "요청대로 사양서 JSON을 고칩니다");
    const r = await fetch("/api/spec-patch", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ spec: pipe.spec, instruction: instr, hasMesh: !!state.pipeMesh }),
    }).then((x) => x.json());
    if (!r.ok || !r.spec) throw new Error(r.error || "사양 수정 실패");
    setPipeSpec(r.spec, r.validationErrors || []);
    $("specPrompt").value = "";
    if (rebuild) await pipeStep3();
    else toast("사양서를 고쳤습니다. 3단계로 진행하세요", true);
  } catch (e) {
    toast(`사양 수정 실패: ${e.message}`);
  } finally {
    $("btnSpecEdit").disabled = false;
    $("btnSpecEdit").textContent = "적용";
    showGen(false);
  }
};
$("specPrompt").addEventListener("keydown", (e) => { if (e.key === "Enter") $("btnSpecEdit").click(); });

$("stageNext").onclick = () => pipeRun(pipe.done + 1);
for (const b of document.querySelectorAll("#stepper .st")) {
  b.onclick = () => pipeRun(Number(b.dataset.step));
}

$("btnGenerate").onclick = () => {
  /* Any one input is enough. The classification selectors are always set, so
     a run can start from those alone — the prompt is then written from the
     chosen mission and platform rather than demanded from the user. */
  /* A click that does nothing and says nothing reads as a broken button. A run
     already in flight is the usual reason, so say so and name the way out. */
  if (state.busy || pipe.running) {
    toast("이미 실행 중입니다. 취소하려면 왼쪽 위 + (새로 시작)을 누르세요");
    return;
  }
  const typed = $("prompt").value.trim();
  const sel = droneSelection();
  const p = typed || (DRONE_TAX ? `${sel.label} 드론` : "");
  if (!p && !state.refImageB64) { toast("드론 분류를 고르거나 설명·이미지를 넣으세요"); return; }
  if (!typed && !state.refImageB64) toast(`분류만으로 시작합니다 — ${sel.label}`, true);

  pipe.prompt = p;
  pipe.done = 0; pipe.route = null; pipe.spec = null; pipe.notes = []; pipe.active = true;
  /* A fresh run starts from this input, not from whatever the last one left
     behind: a stale design image would be redrawn as 3D and an earlier upload
     would short-circuit step 1 into reusing itself. */
  state.pipeMesh = null;
  state.designImageB64 = null;
  state.imported = false;
  $("specSheet").classList.remove("show");
  $("specBar").classList.remove("show");
  teardownSim();
  ["catalogBlock", "printBlock", "paramDroneBlock", "partEditBlock"].forEach((id) => ($(id).style.display = "none"));
  renderStepper();
  pipeRun(1);
};
$("prompt").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) $("btnGenerate").click();
});

/* follow-up prompt editing (viewer bottom bar, part-scoped when a part is selected) */
$("btnEdit").onclick = async () => {
  const instr = $("editPrompt").value.trim();
  if (!instr) return;
  if (!state.archetype && !state.program) { toast("업로드 모델은 프롬프트 편집 대신 재질·최적화를 사용하세요"); return; }
  $("btnEdit").disabled = true;
  $("btnEdit").textContent = "…";
  try {
    let payload;
    if (state.kind === "program") {
      // embed the user's current slider values so the AI edits from live state
      const prog = JSON.parse(JSON.stringify(state.program));
      for (const [k, d] of Object.entries(prog.params || {})) {
        if (state.params[k] !== undefined) d.value = state.params[k];
      }
      payload = { kind: "program", program: prog, instruction: instr,
        selectedPart: state.selected?.name || null,
        selectedLabel: state.selected?.userData.label || null };
    } else {
      payload = { archetype: state.archetype, params: state.params, instruction: instr,
        selectedPart: state.selected?.name || null,
        selectedLabel: state.selected?.userData.label || null };
    }
    const r = await fetch("/api/edit", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const j = await r.json();
    if (j.source === "ai" && j.kind === "program" && j.program) {
      const errs = validateProgram(j.program);
      if (errs.length) { toast("수정안이 형상 검증에 실패했습니다. 다르게 요청해 보세요"); }
      else {
        state.program = j.program;
        state.params = clampProgramParams(j.program, defaultProgramParams(j.program));
        rebuild();
        buildParamUI();
        saveToLibrary();
        $("editPrompt").value = "";
        toast(j.note || "수정 사항을 반영했습니다", true);
      }
    } else if (j.source === "ai" && j.params) {
      state.params = j.params;
      if (j.materials && Object.keys(j.materials).length) state.materials = { ...state.materials, ...j.materials };
      rebuild();
      buildParamUI();          // sliders re-sync to the AI-updated parameters
      saveToLibrary();
      $("editPrompt").value = "";
      toast(j.note || "수정 사항을 반영했습니다", true);
    } else {
      toast("설계 AI에 연결할 수 없습니다. 오른쪽 파라미터로 직접 조정하세요.");
    }
  } catch {
    toast("요청에 실패했습니다. 다시 시도해 주세요.");
  }
  $("btnEdit").disabled = false;
  $("btnEdit").textContent = "적용";
};
$("editPrompt").addEventListener("keydown", (e) => { if (e.key === "Enter") $("btnEdit").click(); });

/* sample prompts — pool + shuffle */
/* every entry below was verified end-to-end in this demo build:
   category archetypes finish in seconds with guaranteed assembly,
   the mouse exercises the mesh-first route, the perfume bottle the
   freeform + hi-fi upgrade path. nothing speculative goes in here. */
/* ---------------------------------------------------------- drone taxonomy
   Domain, mission and platform are separate axes — folding them into one
   category loses exactly the differences that change the airframe. The lists
   come from the server so client and spec writer can never disagree. */
let DRONE_TAX = null;
function droneSelection() {
  const dm = $("selDomain").value, ms = $("selMission").value, pf = $("selPlatform").value;
  const pfKo = DRONE_TAX?.platforms.find((p) => p.id === pf)?.ko || pf;
  const msKo = DRONE_TAX?.missions.find((m) => m.id === ms)?.ko || ms;
  return { domain: dm, mission: ms, platform: pf, label: `${msKo} · ${pfKo}` };
}
(async () => {
  try {
    const t = await fetch("/api/drone-taxonomy").then((r) => r.json());
    DRONE_TAX = t.taxonomy;
    $("selDomain").innerHTML = DRONE_TAX.domains.map((d) => `<option value="${d.id}">${d.ko}</option>`).join("");
    $("selMission").innerHTML = DRONE_TAX.missions.map((m) => `<option value="${m.id}">${m.ko}</option>`).join("");
    $("selPlatform").innerHTML = DRONE_TAX.platforms.map((p) => `<option value="${p.id}">${p.ko}</option>`).join("");
    $("selDomain").value = "CIVIL_COMMERCIAL";
    $("selMission").value = "INFRASTRUCTURE_INSPECTION";
    $("selPlatform").value = "QUAD_X";
    /* Defense missions only make sense in the defense domain; hiding the
       mismatch beats generating a spec that contradicts itself. */
    const syncMissions = () => {
      const def = $("selDomain").value === "DEFENSE";
      for (const o of $("selMission").options) {
        const isDef = o.value.startsWith("DEFENSE_");
        o.hidden = def ? !isDef && o.value !== "COMMUNICATION_RELAY" : isDef;
      }
      const cur = $("selMission").selectedOptions[0];
      if (cur?.hidden) $("selMission").value = def ? "DEFENSE_ISR" : "INFRASTRUCTURE_INSPECTION";
    };
    $("selDomain").onchange = syncMissions;
    syncMissions();
  } catch (e) { console.warn("taxonomy load failed", e); }
})();

/* Drone image samples: clicking one attaches the image AND sets the matching
   classification, so the example carries its whole context. */
const DRONE_SAMPLES = [
  { img: "assets/samples/drones/inspection-quad.jpg", label: "점검용 쿼드콥터",
    domain: "CIVIL_COMMERCIAL", mission: "INFRASTRUCTURE_INSPECTION", platform: "QUAD_X" },
  { img: "assets/samples/drones/agri-hexa.jpg", label: "농업 살포 헥사",
    domain: "CIVIL_COMMERCIAL", mission: "AGRICULTURE_APPLICATION", platform: "HEXA" },
  { img: "assets/samples/drones/mapping-fixedwing.jpg", label: "측량용 고정익",
    domain: "CIVIL_COMMERCIAL", mission: "MAPPING_SURVEY", platform: "FIXED_WING" },
  { img: "assets/samples/drones/sar-vtol.jpg", label: "수색구조 VTOL",
    domain: "PUBLIC_SAFETY", mission: "SEARCH_AND_RESCUE", platform: "LIFT_AND_CRUISE" },
];
$("droneSamples").innerHTML = DRONE_SAMPLES.map((s, i) =>
  `<button class="sample" data-i="${i}"><img class="thumb" src="${s.img}" alt="${s.label}" loading="lazy" /><span class="lb">${s.label}</span></button>`).join("");
$("droneSamples").onclick = async (e) => {
  const b = e.target.closest(".sample"); if (!b) return;
  const s = DRONE_SAMPLES[Number(b.dataset.i)];
  $("selDomain").value = s.domain;
  $("selDomain").onchange?.();
  $("selMission").value = s.mission;
  $("selPlatform").value = s.platform;
  try {
    await attachURL(s.img, s.label);
    toast(`${s.label} 이미지를 첨부했습니다. 생성을 누르세요`, true);
  } catch { toast("샘플 이미지를 불러오지 못했습니다"); }
};

/* history */
const history = [];
function addHistory(promptText) {
  history.unshift({ prompt: promptText, kind: state.kind, program: state.program,
    archetype: state.archetype, params: { ...state.params },
    materials: { ...state.materials }, title: state.title, brief: state.brief });
  const host = $("history");
  host.innerHTML = history.map((h, i) =>
    `<button class="hist ${i === 0 ? "on" : ""}" data-i="${i}">
      <div><div class="t">${h.title}</div><div class="d">${h.prompt.slice(0, 40)}</div></div></button>`).join("");
  host.onclick = (e) => {
    const b = e.target.closest(".hist"); if (!b) return;
    const h = history[Number(b.dataset.i)];
    state.kind = h.kind || "archetype"; state.program = h.program || null;
    state.archetype = h.archetype; state.params = { ...h.params }; state.materials = { ...h.materials };
    state.title = h.title; state.brief = h.brief; state.imported = false;
    rebuild(); buildParamUI();
    $("mName").textContent = h.title; $("mBrief").textContent = h.brief; $("projName").textContent = h.title;
    fitView();
    document.querySelectorAll(".hist").forEach((x) => x.classList.toggle("on", x === b));
  };
}

/* ---------------------------------------------------- image attachment
   Two distinct intents:
     replicate — reproduce the product in the photo as closely as possible
     reference — treat a sketch or mood image as design input, not a target
   Each opens a picker with built-in samples plus upload. */
const MODES = {
  replicate: {
    title: "이미지로 그대로 만들기",
    desc: "사진 속 제품의 형태와 비례를 그대로 3D로 재현합니다. 프롬프트 없이 이미지만으로 생성할 수 있고, 프롬프트를 함께 쓰면 치수나 재질을 덧붙여 지정할 수 있습니다.",
    dropTitle: "제품 사진 업로드",
    dropHint: "JPG · PNG · 배경이 단순하고 제품 전체가 보이는 사진일수록 정확합니다",
    sampleLabel: "샘플 드론 사진",
    badge: "이미지 재현",
    placeholder: "이미지만으로 생성됩니다. 휠베이스 같은 치수를 덧붙이려면 여기에 입력하세요.",
    samples: [
      { src: "assets/samples/drones/inspection-quad.jpg", label: "점검용 쿼드콥터" },
      { src: "assets/samples/drones/agri-hexa.jpg", label: "농업 살포 헥사" },
      { src: "assets/samples/drones/mapping-fixedwing.jpg", label: "측량용 고정익" },
      { src: "assets/samples/drones/sar-vtol.jpg", label: "수색구조 VTOL" },
    ],
  },
  reference: {
    title: "스케치·레퍼런스로 설계하기",
    desc: "스케치·설계 도면·참고 이미지를 올립니다. 도면이면 기입된 치수(Ø, H, W…)를 그대로 읽어 그 수치로 설계하고, 스케치면 선을 따라 형상을 잡습니다. 참고 사진은 비례만 참고해 새로 디자인합니다.",
    dropTitle: "설계 도면 · 스케치 · 참고 이미지 업로드",
    dropHint: "치수가 기입된 2D 도면이 가장 정확합니다 (Ø·R·t 기호 그대로 전사)",
    sampleLabel: "샘플 드론 스케치",
    badge: "레퍼런스",
    placeholder: "스케치를 어떻게 해석할지 덧붙이세요. 예: 휠베이스 500mm로, 카본 프레임으로",
    samples: [
      { src: "assets/samples/drones/sketch-quad.jpg", label: "쿼드콥터 도면 스케치" },
      { src: "assets/samples/drones/sketch-vtol.jpg", label: "VTOL 콘셉트 스케치" },
    ],
  },
};

let pickerMode = "replicate";

function openPicker(mode) {
  pickerMode = mode;
  const m = MODES[mode];
  $("modalTitle").textContent = m.title;
  $("modalDesc").textContent = m.desc;
  $("modalDropTitle").textContent = m.dropTitle;
  $("modalDropHint").textContent = m.dropHint;
  $("modalSampleLabel").textContent = m.sampleLabel;
  $("modalSamples").innerHTML = m.samples.map((s, i) =>
    `<button class="sample" data-i="${i}"><img class="thumb" src="${s.src}" alt="${s.label}" /><div class="lb">${s.label}</div></button>`).join("");
  $("modalBack").classList.add("show");
}
function closePicker() { $("modalBack").classList.remove("show"); }

$("btnModeImage").onclick = () => openPicker("replicate");
$("btnModeRef").onclick = () => openPicker("reference");
$("btnMode3d").onclick = () => $("import3d").click();
$("modalClose").onclick = closePicker;
$("modalBack").onclick = (e) => { if (e.target === $("modalBack")) closePicker(); };
addEventListener("keydown", (e) => { if (e.key === "Escape") closePicker(); });

$("modalDrop").onclick = () => $("fileImage").click();
$("modalDrop").addEventListener("dragover", (e) => { e.preventDefault(); $("modalDrop").classList.add("over"); });
$("modalDrop").addEventListener("dragleave", () => $("modalDrop").classList.remove("over"));
$("modalDrop").addEventListener("drop", (e) => {
  e.preventDefault();
  $("modalDrop").classList.remove("over");
  const f = e.dataTransfer.files[0];
  if (f && f.type.startsWith("image/")) attachFile(f);
});

$("modalSamples").onclick = async (e) => {
  const b = e.target.closest(".sample"); if (!b) return;
  const s = MODES[pickerMode].samples[Number(b.dataset.i)];
  await attachURL(s.src, s.label);
};

$("fileImage").onchange = (e) => { const f = e.target.files[0]; if (f) attachFile(f); e.target.value = ""; };

async function toDataURL(src) {
  // rasterises SVG sketches too, so the vision model always receives a bitmap
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = src;
  await new Promise((r, j) => { img.onload = r; img.onerror = j; });
  const w = Math.min(768, img.naturalWidth || 768);
  const h = Math.round((img.naturalHeight || 768) * w / (img.naturalWidth || 768));
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  return c.toDataURL("image/jpeg", 0.86);
}

async function attachURL(src, name) {
  try {
    const dataUrl = await toDataURL(src);
    setAttachment(dataUrl, name, pickerMode);
  } catch { toast("이미지를 불러오지 못했습니다"); }
}
function attachFile(f) {
  const url = URL.createObjectURL(f);
  toDataURL(url)
    .then((d) => { setAttachment(d, f.name, pickerMode); URL.revokeObjectURL(url); })
    .catch(() => toast("이미지를 읽지 못했습니다"));
}

function setAttachment(dataUrl, name, mode) {
  state.refImageB64 = dataUrl;
  state.refMode = mode;
  state.refName = name;
  $("attachThumb").src = dataUrl;
  $("attachMode").textContent = MODES[mode].badge;
  $("attachMode").className = "mode " + (mode === "replicate" ? "rep" : "ref");
  $("attachName").textContent = name;
  $("attach").classList.add("show");
  $("btnModeImage").classList.toggle("armed", mode === "replicate");
  $("btnModeRef").classList.toggle("armed", mode === "reference");
  $("prompt").placeholder = MODES[mode].placeholder;
  closePicker();
  toast(`${MODES[mode].badge}으로 등록했습니다`, true);
}
function clearAttachment() {
  state.refImageB64 = null; state.refMode = null; state.refName = null;
  $("attach").classList.remove("show");
  $("attachThumb").removeAttribute("src");
  $("btnModeImage").classList.remove("armed");
  $("btnModeRef").classList.remove("armed");
  $("prompt").placeholder = "만들고 싶은 제품을 설명하세요.\n예: 500ml 스테인리스 텀블러, 슬림한 형태";
}
$("attachClear").onclick = clearAttachment;

/* 3D import → same edit + CAD pipeline.
   Mesh formats (GLB/FBX/OBJ/STL) and true CAD solids (STEP/IGES via OCCT). */
$("import3d").onchange = async (e) => {
  const f = e.target.files[0]; if (!f) return;
  const ext = f.name.split(".").pop().toLowerCase();
  showGen(true, "불러오는 중"); renderSteps(3, "업로드한 형상을 파트로 정리합니다");
  try {
    let root;
    if (ext === "glb" || ext === "gltf") root = (await new GLTFLoader().parseAsync(await f.arrayBuffer(), "")).scene;
    else if (ext === "obj") root = new OBJLoader().parse(await f.text());
    else if (ext === "fbx") {
      const { FBXLoader } = await import("three/addons/loaders/FBXLoader.js");
      root = new FBXLoader().parse(await f.arrayBuffer(), "");
    } else if (["step", "stp", "iges", "igs", "brep"].includes(ext)) {
      renderSteps(3, "CAD 솔리드를 해석하는 중입니다 (OpenCascade)");
      const { loadCadFile } = await import("./reverse.js");
      root = await loadCadFile(await f.arrayBuffer(), ext, makeMaterial);
    } else if (ext === "stl") {
      const g = new STLLoader().parse(await f.arrayBuffer());
      g.computeVertexNormals();
      root = new THREE.Group();
      root.add(new THREE.Mesh(g, makeMaterial("aluminum")));
    } else throw new Error("지원하지 않는 형식");

    clearModel();
    root.name = f.name.replace(/\.[^.]+$/, "");
    markParts(root);
    normalize(root);
    scene.add(root);
    state.model = root;
    state.parts = root.children.filter((c) => c.userData.isPart);
    state.imported = true; state.archetype = null;
    state.title = `${root.name} (업로드)`;
    state.brief = `${ext.toUpperCase()} 파일을 불러왔습니다. 재질 변경·폴리곤 최적화·CAD 변환을 그대로 사용할 수 있습니다.`;
    explodeK = 0; captureExplodeBasis(); buildPartList();
    $("mName").textContent = state.title; $("mBrief").textContent = state.brief;
    $("projName").textContent = root.name;
    state.coverage = "match"; state.coverageNote = "";
    showCoverage();
    refreshStats(); fitView(false);
    $("stageEmpty").style.display = "none";
    $("matBlock").style.display = ""; $("polyBlock").style.display = "";
    $("btnExplodeTop").classList.add("show");
    $("btnReverse").classList.add("show");
    state.inputKind = ["step", "stp", "iges", "igs", "brep"].includes(ext) ? "cad" : "mesh";
    showGen(false);

    /* An uploaded 3D file IS step 1's output, so the pipeline opens with that
       stage already satisfied and the specification is the next thing to do.
       Structure compilation stays behind its own button: routing every upload
       into it took minutes and switched the workspace into asset mode. */
    pipe.prompt = $("prompt").value.trim();
    pipe.done = 1; pipe.route = null; pipe.spec = null; pipe.notes = []; pipe.active = true;
    state.pipeMesh = root;
    state.origMesh = root;
    state.origLabel = `업로드한 ${ext.toUpperCase()}`;
    $("btnOrig").classList.add("show", "on");
    $("specSheet").classList.remove("show");
    $("specBar").classList.remove("show");
    renderStepper();
    toast("업로드한 3D를 뷰어에 올렸습니다. 오른쪽 아래 버튼으로 사양서를 씁니다", true);
    return;
  } catch (err) {
    toast("불러오기 실패: " + err.message);
  }
  showGen(false);
};

/* ------------------------------------------------- structure compilation
   Geometry in, executable robot structure out. Parts → assembly graph →
   kinematics → physics → validated CIR. Every number is measured; the AI is
   only asked for semantic NAMES afterwards. */
$("btnReverse").onclick = () => compileStructure();
async function compileStructure() {
  if (!state.model || state.busy) return;
  state.busy = true;
  $("btnReverse").disabled = true;
  showGen(true, "구조 컴파일 중");
  try {
    const srcName = (state.model.name || "asset").replace(/\s*\(업로드\)\s*/, "");
    renderSteps(1, "입력 품질을 진단하고 파트를 분리합니다");
    await new Promise((r) => setTimeout(r, 30));       // let the overlay paint

    const cir = compileAsset(state.model, {
      name: srcName,
      inputType: state.inputKind || "mesh",
      defaultMaterial: "aluminum",
      materialFor: (i) => makeMaterial(["aluminum", "abs", "steel", "matte", "nylon"][i % 5]),
    });
    if (!cir.links.length) throw new Error("링크를 찾지 못했습니다");

    renderSteps(2, `링크 ${cir.links.length}개 · 조인트 ${cir.joints.length}개, 축과 가동범위를 실측했습니다`);

    /* the ONLY AI step: semantic names for links (never geometry) */
    try {
      const sem = await fetch("/api/semantics", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: srcName,
          blueprint: state.blueprint ? {
            title: state.blueprint.title,
            parts: (state.blueprint.parts || []).map((p) => ({ name: p.name, role: p.role, material: p.material })),
          } : null,
          links: cir.links.map((l) => ({
            id: l.id, size: l.bbox.max.map((v, i) => Number((v - l.bbox.min[i]).toFixed(3))),
            volume: Number((l.inertial.mass / l.inertial.density).toExponential(3)),
            isRoot: l.isRoot, parent: l.parentLink, collision: l.collision.type,
          })),
          joints: cir.joints.map((j) => ({ id: j.id, type: j.type, parent: j.parent, child: j.child })),
        }),
      }).then((r) => r.json());
      if (sem.source === "ai") {
        if (sem.title) cir.name = String(sem.title).slice(0, 40);
        for (const l of cir.links) {
          if (sem.names?.[l.id]) l.name = String(sem.names[l.id]).slice(0, 40);
          if (sem.semanticTypes?.[l.id]) l.semanticType = String(sem.semanticTypes[l.id]).slice(0, 32);
          if (sem.materials?.[l.id] && MATERIAL_KEYS.includes(sem.materials[l.id])) {
            l.material = sem.materials[l.id];
            l.inertial = { ...l.inertial, ...recomputeMass(l) };
          }
        }
        if (sem.brief) state.brief = String(sem.brief).slice(0, 600);
      }
      state.semantics = sem;
    } catch {}

    renderSteps(3, "충돌체·질량을 확정하고 시뮬레이션 검증을 실행합니다");
    const validation = validateAsset(cir);
    const exp = await verifyRobotExports(cir, state.model);
    validation.lines.push(...exp.lines);
    const readiness = readinessScore(cir, validation, exp.ok);

    /* the compiled links become the viewport parts, so selection, explode,
       materials and per-link export all address real links */
    adoptCompiledScene(cir);

    /* Representation planning, per part, against the part's own geometry. This
       is the step that decides whether a primitive is allowed to replace what
       the generator made. Everything that a primitive cannot describe keeps its
       original mesh, which is the whole reason the reconstruction is worth
       having. Runs after adoption so it measures the parts as they now sit. */
    try {
      renderSteps(3, "파트별 표현 전략을 판정합니다");
      const specParts = state.parts.map((node, i) => {
        const link = cir.links[i] || cir.links.find((l) => l.name === node.name);
        const plan = planRepresentation(node);
        const bb = new THREE.Box3().setFromObject(node);
        const size = bb.getSize(new THREE.Vector3());
        const ctr = bb.getCenter(new THREE.Vector3());
        node.userData.representationType = plan.representationType;
        node.userData.primitiveFit = plan.fit.chosen;
        return {
          id: link?.id || `part_${i}`,
          name: link?.name || node.name || `파트 ${i + 1}`,
          role: link?.semanticType || "component",
          nodeName: node.name,
          material: link?.material,
          bbox: [size.x, size.y, size.z],
          centroid: ctr.toArray().map((v) => Number(v.toFixed(2))),
          position: node.position.toArray().map((v) => Number(v.toFixed(2))),
          plan,
        };
      });
      state.threeSpec = buildSpecification({
        assetInfo: { assetId: srcName, format: "glb", triangles: triCount(state.model) },
        parts: specParts,
        measured: state.measured,
        semantics: { title: cir.name, brief: state.brief },
        domain: state.blueprint?.productClass || null,
        prompt: $("prompt").value.trim(),
      });
      state.threeSpec.assembly.joints = cir.joints.map((j) => ({ name: j.id, type: j.type }));
      state.spec = specText(state.threeSpec);
      const kept = specParts.filter((p) => p.plan.representationType === "SOURCE_MESH").length;
      const para = specParts.filter((p) => p.plan.representationType === "PARAMETRIC").length;
      renderSteps(3, `원본 메시 유지 ${kept}개 · 파라메트릭 ${para}개 · 하이브리드 ${specParts.length - kept - para}개`);
    } catch (e) { console.warn("spec failed", e); }

    state.cir = cir;
    state.validation = validation;
    state.readiness = readiness;
    state.kind = "asset";
    state.title = cir.name || srcName;
    /* the spec sheet is the design intent and the CIR is the built result;
       overwriting one with the other made the blueprint vanish the moment the
       structure compiled, so keep them in separate panels */
    state.cirText = JSON.stringify(stripCIR(cir), null, 2).slice(0, 20000);
    if (cir.segmentation === "surface_cluster") {
      state.brief = `단일 메시를 표면 군집 ${cir.links.length}개 구역으로 나눴습니다. `
        + `구역 경계는 실제 부품 경계가 아니므로 조인트와 동작은 판정하지 않았습니다. `
        + `부품 단위 구조가 필요하면 파트가 나뉜 3D나 CAD 어셈블리를 올리세요.`;
    } else if (!state.brief) {
      state.brief = `링크 ${cir.links.length}개, 조인트 ${cir.joints.length}개로 컴파일했습니다. `
        + `분리 방식은 ${cir.links[0].origin}이고, 질량·관성은 ${cir.links.filter((l) => l.inertial.status === "source_verified").length}/${cir.links.length} 링크가 닫힌 메시 적분입니다.`;
    }

    $("mName").textContent = state.title;
    $("mBrief").textContent = clean(state.brief);
    $("projName").textContent = state.title;
    if (state.spec) { $("specText").textContent = state.spec; $("specBox").style.display = ""; }
    if (state.cirText) { $("cirText").textContent = state.cirText; $("cirBox").style.display = ""; }
    showCoverage();
    refreshStats();
    fitView(false);
    $("stageEmpty").style.display = "none";
    ["matBlock", "jointBlock", "physBlock", "polyBlock"].forEach((id) => ($(id).style.display = ""));
    /* The build sheet stays editable after compilation for code-authored
       assets. Keying this off state.kind never worked: kind became "asset" a
       few lines above, so the sheet silently reverted to its empty hint. What
       matters is whether a program exists to edit. */
    if (state.program || state.threeSpec) { $("sheetBlock").style.display = ""; buildSheetUI(); }
    $("editBar").classList.remove("show");           // no parametric prompt editing
    $("btnSim").classList.toggle("show", cir.joints.some((j) => j.type !== "fixed"));
    $("btnSim").textContent = "조인트 스윕";
    $("btnReverse").classList.remove("show");
    $("btnOrig").classList.toggle("show", !!state.origMesh);
    $("btnOrig").classList.remove("on");
    rebuildMatSelect();
    buildJointUI();
    buildPhysUI();
    renderValidation();
    state.fidelity = fidelityReport(state.blueprint, cir);
    renderFidelity();
    renderReadiness();
    $("btnKeep").style.display = "";
    saveToLibrary();
    toast(`구조 컴파일 완료, 준비도 ${readiness.total}/100`, readiness.total >= 70);
  } catch (err) {
    console.error(err);
    toast("구조 컴파일 실패: " + err.message);
  }
  showGen(false);
  state.busy = false;
  $("btnReverse").disabled = false;
}

/** mass/inertia recomputed from the measured volume when the density changes */
function recomputeMass(link) {
  return link._measured ? computeInertial(link._measured, link.material) : {};
}

/** swap the viewport over to the compiled link set */
function adoptCompiledScene(cir) {
  const prev = state.model;
  const group = new THREE.Group();
  group.name = cir.name || "asset";
  cir.links.forEach((l) => {
    const node = l._measured?.node;
    if (!node) return;
    /* Bake the WORLD transform into the node before reparenting. The source
       root often carries a unit-fix scale (image-to-3D arrives in ~1 unit), and
       lifting children out of it silently dropped that scale, so a correctly
       measured 40mm watch rendered as a 1mm speck. */
    node.updateWorldMatrix(true, false);
    const mw = node.matrixWorld.clone();
    if (node.parent) node.parent.remove(node);
    mw.decompose(node.position, node.quaternion, node.scale);
    node.name = l.name || l.id;
    node.userData.isPart = true;
    node.userData.label = l.name || l.id;
    node.userData.linkId = l.id;
    node.userData.materialKey = l.material;
    node.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = o.receiveShadow = true;
        if (!o.material?.isMeshStandardMaterial) o.material = makeMaterial(l.material || "aluminum");
      }
    });
    group.add(node);
  });
  /* Keep the untouched upload behind the 원본 메시 toggle. When the run already
     produced a reconstruction, that mesh is the original and the authored
     program is the derived thing, so it must not be overwritten here. */
  if (prev) {
    scene.remove(prev);
    if (state.refForm && state.origMesh === state.refForm) dispose(prev);
    else {
      if (state.origMesh && state.origMesh !== prev) { scene.remove(state.origMesh); dispose(state.origMesh); }
      state.origMesh = prev;
      state.origLabel = "업로드 원본";
    }
  }
  state.showingOrig = false;
  scene.add(group);
  state.model = group;
  state.parts = group.children.filter((c) => c.userData.isPart);
  state.imported = false;
  state.libId = null;
  explodeK = 0;
  captureExplodeBasis();
  buildPartList();
  select(null);
}

/* Write the runtime spec for whatever mesh is on screen, without compiling a
   robot asset out of it. Cheap enough to run on every generation: the fit test
   is a handful of rays per part, not a full segmentation pass. */
/* Build the viewport model from the specification. The source GLB is kept as
   the binding target for SOURCE_MESH parts and as the 원본 메시 reference, so it
   is never discarded, only moved out of the way. */
function compileFromSpec({ first = false } = {}) {
  const spec = state.modelSpec;
  if (!spec) return null;
  /* There may be no source mesh at all now: an image-analysed spec builds
     entirely from numbers. Only stash one when it exists. */
  const source = state.specSource || (spec.origin === "IMAGE_ANALYSIS" ? null : state.model);
  if (first && source) {
    state.specSource = source;
    scene.remove(source);
    if (state.origMesh && state.origMesh !== source) { scene.remove(state.origMesh); dispose(state.origMesh); }
    state.origMesh = source;
    state.origLabel = "생성된 원본 메시";
  }

  const { root, report } = compileSpec(spec, state.specSource, {
    materialFor: (id, part) => makeMaterial(part.materialIds?.[0]?.replace(/^MAT_/, "").toLowerCase() || "aluminum"),
  });
  if (!root.children.length) { console.warn("spec compiled to nothing", report); return null; }

  if (state.model && state.model !== state.specSource) { scene.remove(state.model); dispose(state.model); }
  scene.add(root);
  state.model = root;
  state.parts = root.children.filter((c) => c.userData.isPart);
  state.specReport = report;
  // how far a part may be moved in the sheet, from the model's own size
  const mb = new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3());
  state.modelSpan = Math.max(mb.x, mb.y, mb.z) || 200;
  state.imported = false;
  explodeK = 0;
  captureExplodeBasis();
  buildPartList();
  select(null);
  refreshStats();
  if (first) fitView(false);

  if (report.failed.length) {
    console.warn("[spec] 빌더 실패, 원본 메시로 대체:", report.failed);
  }
  const byBuilder = report.built.reduce((a, b) => (a[b.builderId] = (a[b.builderId] || 0) + 1, a), {});
  const parts = Object.entries(byBuilder).map(([k, n]) => `${k} ${n}`).join(" · ");
  if (first) toast(`사양서에서 ${report.built.length}개 파트를 컴파일했습니다 (${parts})`, true);
  return report;
}

/* ---------------------------------------------------- re-render validation
   The build is checked against the ORIGINAL image, not against a description
   of it. Design renders sit on a plain seamless background, so the product
   mask falls out of a border-colour threshold; the model is rendered through
   the same orthographic front view and the two masks are compared.

   When they disagree, parameters are corrected — never the code. One pass:
   match the model's width/height aspect to the image mask and re-score. */
async function imageMask(dataUri, size = 192) {
  const img = await new Promise((res, rej) => {
    const i = new Image();
    i.onload = () => res(i); i.onerror = rej;
    i.src = dataUri;
  });
  const cv = document.createElement("canvas");
  cv.width = cv.height = size;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  // contain-fit so aspect is preserved
  const s = Math.min(size / img.width, size / img.height);
  const w = img.width * s, h = img.height * s;
  ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, size, size);
  ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
  const d = ctx.getImageData(0, 0, size, size).data;
  // background colour from the corners, product = whatever differs from it
  const corner = (x, y) => { const i = (y * size + x) * 4; return [d[i], d[i + 1], d[i + 2]]; };
  const cs = [corner(2, 2), corner(size - 3, 2), corner(2, size - 3), corner(size - 3, size - 3)];
  const bg = cs.reduce((a, c) => [a[0] + c[0] / 4, a[1] + c[1] / 4, a[2] + c[2] / 4], [0, 0, 0]);
  const mask = new Uint8Array(size * size);
  for (let i = 0; i < size * size; i++) {
    const dr = d[i * 4] - bg[0], dg = d[i * 4 + 1] - bg[1], db = d[i * 4 + 2] - bg[2];
    mask[i] = (dr * dr + dg * dg + db * db) > 2400 ? 1 : 0;
  }
  return { mask, size };
}

function maskBBox(m) {
  let x0 = m.size, y0 = m.size, x1 = -1, y1 = -1;
  for (let y = 0; y < m.size; y++) for (let x = 0; x < m.size; x++) {
    if (!m.mask[y * m.size + x]) continue;
    if (x < x0) x0 = x; if (x > x1) x1 = x;
    if (y < y0) y0 = y; if (y > y1) y1 = y;
  }
  return x1 < 0 ? null : { x0, y0, x1, y1, w: x1 - x0 + 1, h: y1 - y0 + 1 };
}

/** IoU of two masks after aligning their bounding boxes (translation+scale) */
function alignedIoU(a, b) {
  const ba = maskBBox(a), bb = maskBBox(b);
  if (!ba || !bb) return null;
  let inter = 0, union = 0;
  for (let y = 0; y < a.size; y++) for (let x = 0; x < a.size; x++) {
    const va = a.mask[y * a.size + x];
    // sample b at the corresponding bbox-relative position
    const bx = Math.round(bb.x0 + ((x - ba.x0) / ba.w) * bb.w);
    const by = Math.round(bb.y0 + ((y - ba.y0) / ba.h) * bb.h);
    const vb = (bx >= 0 && by >= 0 && bx < b.size && by < b.size) ? b.mask[by * b.size + bx] : 0;
    if (va || vb) union++;
    if (va && vb) inter++;
  }
  return union ? inter / union : null;
}

async function validateAgainstImage(model, designImage, { correct = true } = {}) {
  const imgM = await imageMask(designImage);
  const ib = maskBBox(imgM);
  if (!ib) return null;
  const modelSil = () => silhouettes(renderer, model, 192).front;

  const before = alignedIoU(imgM, modelSil());

  /* Correction: the image mask's aspect is an observation; the model's aspect
     is a parameter outcome. Bring the second to the first — but only as a
     nudge. The photo's view direction is not guaranteed to match our front
     render (a face-on pulley reads as a circle), so a large "correction" can
     confidently wreck a correct model. And after a USER edit we do not correct
     at all: the optimiser must never fight the person. */
  const mb = maskBBox(modelSil());
  let correction = null, after = before;
  if (mb && correct) {
    const imgAspect = ib.w / ib.h;
    const modelAspect = mb.w / mb.h;
    const k = imgAspect / modelAspect;
    if (isFinite(k) && Math.abs(k - 1) > 0.04 && k > 0.75 && k < 1.33) {
      model.scale.x *= k;
      model.scale.z *= k;
      model.updateWorldMatrix(true, true);
      correction = `폭 비례 ×${k.toFixed(3)} (이미지 종횡비에 맞춤)`;
      after = alignedIoU(imgM, modelSil());
      if (after != null && before != null && after < before) {
        // the correction made it worse — undo, and say we tried
        model.scale.x /= k; model.scale.z /= k;
        model.updateWorldMatrix(true, true);
        correction += " → 악화되어 되돌림";
        after = before;
      }
    }
  }
  return { before, after, correction };
}

/* --------------------------------------------------------- capacity scaling
   Image-to-3D output has no real size. The mesh is normalised, so a bottle
   comes back at whatever envelope the reconstruction happened to land on, and
   the proportions are the only trustworthy part of it.

   That collides with the interior: a 113.7 x 150mm vessel with 2mm walls holds
   about 1300ml, so an author told to build 300ml has to either thicken the
   walls to 9mm or leave an 8mm-deep dish. Both happened. A stated capacity is a
   hard number the customer reads off the label, so let it set the scale and
   keep the measured proportions.

   Returns null unless a capacity was actually stated and the correction is
   within a believable band, because a misread number here resizes everything. */
/* ------------------------------------------------------- build sheet editor
   The generated program is the build sheet: primitives with numbers. Editing
   those numbers in place and rebuilding takes no model call, so a designer can
   tune a shoulder radius or add a profile point and see it immediately. Values
   written here become literals: a hand-set number should not drift when a
   parameter it was once derived from changes. */
let sheetTimer = 0;
function scheduleSheetRebuild() {
  clearTimeout(sheetTimer);
  sheetTimer = setTimeout(() => {
    /* after a structure compile the viewport holds compiled links, not the
       program. Editing the sheet means going back to the authored geometry, so
       the structure has to be recompiled afterwards rather than silently kept
       from the previous shape. */
    if (state.kind !== "program" && state.program) {
      state.kind = "program";
      state.cir = null; state.validation = null; state.readiness = null;
      ["jointBlock", "physBlock"].forEach((id) => ($(id).style.display = "none"));
      $("scoreRow").style.display = "none";
      $("btnReverse").classList.add("show");
      $("btnSim").classList.remove("show");
      $("btnKeep").style.display = "none";
    }
    rebuild();
    refreshStats();
    if (state.refForm && state.model) {
      try {
        const a = formAgreement(renderer, state.model, state.refForm);
        state.formAgreement = a;
        if (a.overall != null) {
          $("mAgree").textContent = `${a.overall}%  (정면 ${a.per.front ?? "-"} · 측면 ${a.per.side ?? "-"} · 평면 ${a.per.top ?? "-"})`;
          $("agreeRow").style.display = "";
        }
      } catch {}
    }
    saveToLibrary();
  }, 260);
}

/** resolve an expression or number to the value the viewport is showing */
function sheetValue(v) {
  if (typeof v === "number") return v;
  try {
    const p = { ...defaultProgramParams(state.program), ...state.params };
    const n = evalSheetExpr(String(v), p);
    return isFinite(n) ? n : 0;
  } catch { return 0; }
}
function evalSheetExpr(expr, params) {
  const n = Number(expr);
  if (isFinite(n)) return n;
  // reuse the program interpreter's own evaluation by building a probe program
  const probe = { id: "p", title: "p", params: state.program?.params || {},
    parts: [{ id: "p", label: "p", material: "steel", meshes: [{ prim: "box", args: [expr, 1, 1] }] }] };
  try {
    const root = buildProgramModel(probe, params);
    const bb = new THREE.Box3().setFromObject(root);
    const w = bb.getSize(new THREE.Vector3()).x;
    root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    return w;
  } catch { return 0; }
}

/* A slider is the right primary control for a dimension — you feel the shape
   change as you drag — but a slider alone cannot express "38.2". Both, sharing
   one value: drag for the shape, type for the number. */
function numField(value, onSet, step = 0.1, range = null) {
  const v0 = Number(sheetValue(value)) || 0;
  const wrap = document.createElement("div");
  wrap.className = "sf-pair";
  const lo = range ? range[0] : Math.min(0, v0 * 1.6);
  const hi = range ? range[1] : Math.max(v0 * 1.6, v0 + 12, 12);

  const sl = document.createElement("input");
  sl.type = "range"; sl.className = "sf-slider";
  sl.min = lo; sl.max = hi; sl.step = step; sl.value = v0;

  const nu = document.createElement("input");
  nu.type = "number"; nu.className = "sf"; nu.step = step;
  nu.value = v0.toFixed(1);

  // dragging repaints live; typing commits on change
  sl.oninput = () => { nu.value = Number(sl.value).toFixed(1); onSet(Number(sl.value)); scheduleSheetRebuild(); };
  nu.onchange = () => {
    const n = Number(nu.value);
    if (n < Number(sl.min)) sl.min = n;            // typing may exceed the drag range
    if (n > Number(sl.max)) sl.max = n;
    sl.value = n; onSet(n); scheduleSheetRebuild();
  };
  wrap.append(sl, nu);
  return wrap;
}

const REP_LABEL = {
  SOURCE_MESH: "원본 메시 유지",
  PARAMETRIC: "파라메트릭",
  HYBRID: "하이브리드",
};

function buildSheetUI() {
  const host = $("sheet");
  if (!host) return;
  host.innerHTML = "";
  /* When the run kept the generated mesh there is no primitive program to
     edit, and pretending otherwise is what made the sliders feel like a
     downgrade. Show what each part actually is and what it supports. */
  if (!state.program?.parts?.length) {
    /* The generated Three.js source is the editable artefact now: reading it
       tells you exactly what the specification produced, and it is the thing
       worth copying out. */
    if (state.threeCode) { buildCodeSheetUI(); return; }
    // structured spec (source-mesh preserving) takes precedence over everything
    if (state.modelSpec?.editableParameters) { buildStructuredSheetUI(state.modelSpec); return; }
    if (state.modelSpec?.parts?.length) { buildParameterSheetUI(state.modelSpec); return; }
    if (state.threeSpec?.parts?.length) { buildSpecSheetUI(state.threeSpec); return; }
    host.innerHTML = `<div class="hint">사양서가 아직 없습니다. 생성하거나 원본 메시를 만들면 구조가 분석됩니다.</div>`;
    return;
  }
  state.program.parts.forEach((part, pi) => {
    const box = document.createElement("div");
    box.className = "sheet-part";
    const head = document.createElement("div");
    head.className = "sp-head";
    head.innerHTML = `<b>${part.label || part.id}</b><span>${part.meshes.length}개 요소</span>`;
    box.appendChild(head);

    part.meshes.forEach((mesh, mi) => {
      const row = document.createElement("div");
      row.className = "sp-mesh";
      const title = document.createElement("div");
      title.className = "sm-t";
      title.textContent = mesh.prim + (mesh.repeat?.count ? ` ×${mesh.repeat.count}` : "");
      row.appendChild(title);

      if (mesh.prim === "lathe" && Array.isArray(mesh.profile)) {
        const list = document.createElement("div");
        list.className = "sm-prof";
        // radius and height need their own slider ranges, taken from the profile
        const rMax = Math.max(...mesh.profile.map((p) => sheetValue(p[0]))) || 10;
        const yMax = Math.max(...mesh.profile.map((p) => sheetValue(p[1]))) || 10;
        const rRange = [0, Number((rMax * 1.4).toFixed(1))];
        const yRange = [0, Number((yMax * 1.1).toFixed(1))];
        mesh.profile.forEach((pt, k) => {
          const line = document.createElement("div");
          line.className = "pf";
          line.append(`${k + 1}`);
          line.appendChild(numField(pt[0], (v) => { mesh.profile[k][0] = v; }, 0.1, rRange));
          line.appendChild(numField(pt[1], (v) => { mesh.profile[k][1] = v; }, 0.1, yRange));
          const del = document.createElement("button");
          del.textContent = "×"; del.title = "이 점 삭제";
          del.onclick = () => {
            if (mesh.profile.length <= 3) { toast("프로파일은 최소 3점이 필요합니다"); return; }
            mesh.profile.splice(k, 1); buildSheetUI(); scheduleSheetRebuild();
          };
          line.appendChild(del);
          const ins = document.createElement("button");
          ins.textContent = "+"; ins.title = "아래에 점 추가 (곡률을 촘촘하게)";
          ins.onclick = () => {
            const a = mesh.profile[k], b = mesh.profile[k + 1] || a;
            mesh.profile.splice(k + 1, 0, [
              Number(((sheetValue(a[0]) + sheetValue(b[0])) / 2).toFixed(2)),
              Number(((sheetValue(a[1]) + sheetValue(b[1])) / 2).toFixed(2)),
            ]);
            buildSheetUI(); scheduleSheetRebuild();
          };
          line.appendChild(ins);
          list.appendChild(line);
        });
        const cap = document.createElement("div");
        cap.className = "sm-cap";
        cap.textContent = `프로파일 ${mesh.profile.length}점 (반경, 높이)`;
        row.appendChild(cap);
        row.appendChild(list);
      } else if (mesh.prim === "loft" && Array.isArray(mesh.sections)) {
        const cap = document.createElement("div");
        cap.className = "sm-cap";
        cap.textContent = `단면 ${mesh.sections.length}단 (폭, 깊이, 높이, 라운드)`;
        row.appendChild(cap);
        mesh.sections.forEach((s, k) => {
          const line = document.createElement("div");
          line.className = "pf";
          line.append(`${k + 1}`);
          for (const key of ["w", "d", "y", "r"]) {
            line.appendChild(numField(s[key], (v) => { s[key] = v; }));
          }
          row.appendChild(line);
        });
      } else if (Array.isArray(mesh.args)) {
        const cap = document.createElement("div");
        cap.className = "sm-cap";
        cap.textContent = "치수";
        row.appendChild(cap);
        const line = document.createElement("div");
        line.className = "pf";
        mesh.args.forEach((a, k) => line.appendChild(numField(a, (v) => { mesh.args[k] = v; })));
        row.appendChild(line);
      }

      // placement is the other half of a build sheet
      const pos = document.createElement("div");
      pos.className = "pf";
      pos.append("위치");
      for (const key of ["x", "y", "z"]) {
        pos.appendChild(numField(mesh[key] ?? 0, (v) => { mesh[key] = v; }));
      }
      row.appendChild(pos);
      box.appendChild(row);
    });
    host.appendChild(box);
  });
}


/* The generated Three.js source. Editing it re-runs the build, so the code is
   the model rather than a printout beside it. */
function buildCodeSheetUI() {
  const host = $("sheet");
  host.innerHTML = "";
  const box = document.createElement("div");
  box.className = "sheet-part";
  const head = document.createElement("div");
  head.className = "sp-head";
  const parts = state.parts?.length || 0;
  head.innerHTML = `<b>Three.js 코드</b><span>${state.threeCode.split("\n").length}줄 · 파트 ${parts}</span>`;
  box.appendChild(head);

  const body = document.createElement("div");
  body.className = "sp-mesh";
  const cap = document.createElement("div");
  cap.className = "sm-cap";
  cap.textContent = "사양서에서 생성된 코드입니다. 수치를 고치고 적용을 누르면 형상이 다시 만들어집니다.";
  body.appendChild(cap);

  const ta = document.createElement("textarea");
  ta.value = state.threeCode;
  ta.spellcheck = false;
  ta.style.cssText = "width:100%;height:340px;background:#0E0E12;border:1px solid var(--line-2);"
    + "border-radius:6px;color:var(--text);font:11px/1.55 ui-monospace,monospace;padding:8px;resize:vertical";
  body.appendChild(ta);

  const row = document.createElement("div");
  row.className = "pf";
  row.style.marginTop = "6px";
  const apply = document.createElement("button");
  apply.textContent = "적용";
  apply.style.cssText = "width:auto;padding:0 12px";
  apply.onclick = () => {
    state.threeCode = ta.value;
    const r = runThreeCode(ta.value);
    toast(r.ok ? `코드를 적용했습니다 (파트 ${r.parts})` : `코드 실행 실패: ${r.error}`, true);
    if (r.ok) { refreshStats(); saveToLibrary(); }
  };
  const copy = document.createElement("button");
  copy.textContent = "복사";
  copy.style.cssText = "width:auto;padding:0 12px";
  copy.onclick = () => {
    navigator.clipboard?.writeText(ta.value).then(() => toast("코드를 복사했습니다", true));
  };
  row.append(apply, copy);
  body.appendChild(row);
  box.appendChild(body);
  host.appendChild(box);
}

/* Run edited source in a narrow scope: it only gets THREE, and it has to hand
   back a Group. A syntax slip reports itself instead of clearing the viewport. */
function runThreeCode(src) {
  try {
    const body = `${src}\n;const __fns = Object.keys(this).filter(k => typeof this[k] === "function");`;
    const factory = new Function("THREE", `${src.replace(/^\s*import[^\n]*\n/gm, "").replace(/\bexport\s+/g, "")}
      const __candidates = [${(src.match(/function\s+(build\w*)/g) || []).map((m) => m.split(/\s+/)[1]).join(",")}];
      for (const f of __candidates) { if (typeof f === "function") return f(); }
      throw new Error("build 함수를 찾지 못했습니다");`);
    const root = factory(THREE);
    if (!root || !root.isObject3D) throw new Error("Group을 반환하지 않았습니다");
    root.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = o.receiveShadow = true;
        o.userData.isPart = o.userData.isPart ?? true;
      }
    });
    if (state.model) { scene.remove(state.model); dispose(state.model); }
    scene.add(root);
    state.model = root;
    state.parts = root.children.filter((c) => c.userData.isPart || c.isMesh);
    explodeK = 0;
    captureExplodeBasis();
    buildPartList();
    select(null);
    fitView(false);
    return { ok: true, parts: state.parts.length };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

/* The edit panel for a source-mesh-preserving specification.

   Only parameters whose target exists and whose operation is implemented reach
   this list — the spec builder refuses to create any other kind. What cannot be
   done safely is printed underneath with the reason, rather than being offered
   as a slider that quietly does nothing. */
const OP_LABEL = {
  GLOBAL_TRANSFORM: "전체 변환", PART_TRANSFORM: "부품 변환",
  REGION_OFFSET: "영역 돌출", REGION_SCALE: "영역 배율",
  HOLE_DIAMETER: "홀 직경", MATERIAL_PARAMETER: "재질",
};
const ORIGIN_SHORT = {
  MESH_MEASURED: "실측", FEATURE_DETECTED: "검출",
  USER_PROVIDED: "입력", USER_DEFINED: "정의",
};
let structTimer = 0;

function buildStructuredSheetUI(spec) {
  const host = $("sheet");
  host.innerHTML = "";

  const card = (title, badge) => {
    const box = document.createElement("div");
    box.className = "sheet-part";
    const head = document.createElement("div");
    head.className = "sp-head";
    head.innerHTML = `<b>${title}</b>${badge ? `<span>${badge}</span>` : ""}`;
    box.appendChild(head);
    const body = document.createElement("div");
    body.className = "sp-mesh";
    box.appendChild(body);
    host.appendChild(box);
    return body;
  };

  // ---- representation, stated plainly
  const rep = card("표현 방식", "원본 보호 ON");
  const rp = spec.representationPlans[0];
  const repLine = document.createElement("div");
  repLine.className = "sm-cap";
  repLine.textContent = rp.mode === MODE.LOCKED ? "원본 메시 유지 + 하이브리드 영역 편집" : rp.mode;
  rep.appendChild(repLine);
  const repWhy = document.createElement("div");
  repWhy.className = "sm-cap";
  repWhy.textContent = rp.reason;
  rep.appendChild(repWhy);

  // ---- structure
  const st = card("구조", `바디 ${spec.physicalBodies.length} · 영역 ${spec.semanticRegions.length} · 피처 ${spec.engineeringFeatures.length}`);
  for (const b of spec.physicalBodies) {
    const d = document.createElement("div");
    d.className = "sm-cap";
    d.textContent = `${b.bodyId} ${b.name} — ${b.rigidBodyBehavior}, 삼각형 ${b.triangles.toLocaleString()}`;
    st.appendChild(d);
  }
  for (const r of spec.semanticRegions) {
    const d = document.createElement("div");
    d.className = "sm-cap";
    d.textContent = `${r.regionId} ${r.name} · ${r.geometry.kind} · 신뢰도 ${r.confidence}`;
    d.style.cursor = "pointer";
    d.title = r.evidence;
    d.onclick = () => highlightRegion(r);
    st.appendChild(d);
  }
  for (const f of spec.engineeringFeatures) {
    const d = document.createElement("div");
    d.className = "sm-cap";
    d.textContent = `${f.featureId} ${f.name} · 신뢰도 ${f.confidence}`;
    d.title = f.evidence;
    st.appendChild(d);
  }

  // ---- executable edits, grouped by target
  const groups = new Map();
  for (const p of spec.editableParameters) {
    const key = p.target.featureId || p.target.regionId || p.target.partId || "MODEL";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(p);
  }
  for (const [key, list] of groups) {
    const label = key === "MODEL" ? "전체 모델"
      : spec.semanticRegions.find((r) => r.regionId === key)?.name
      || spec.engineeringFeatures.find((f) => f.featureId === key)?.name
      || spec.assemblyParts.find((a) => a.partId === key)?.name || key;
    const body = card(label, key);
    for (const p of list) {
      const cap = document.createElement("div");
      cap.className = "sm-cap";
      cap.textContent = `${OP_LABEL[p.operation] || p.operation} · 근거 ${ORIGIN_SHORT[p.origin]} · 신뢰도 ${p.confidence}`
        + (p.requiresPreview ? " · 미리보기 필요" : "");
      body.appendChild(cap);
      if (p.note) {
        const n = document.createElement("div");
        n.className = "sm-cap";
        n.textContent = p.note;
        body.appendChild(n);
      }
      const line = document.createElement("div");
      line.className = "pf";
      const lab = document.createElement("span");
      lab.style.cssText = "flex:1;min-width:0";
      lab.textContent = p.label;
      line.appendChild(lab);
      line.appendChild(numField(p.value, (v) => {
        p.value = v;
        clearTimeout(structTimer);
        structTimer = setTimeout(() => {
          const res = runOperation(spec, state.model, p, v);
          spec.specificationVersion += 1;
          spec.editHistory.unshift({
            patchId: `PATCH_${Date.now().toString(36)}`,
            at: new Date().toISOString(),
            operations: [{ operation: "SET_PARAMETER", parameterId: p.parameterId, newValue: v }],
          });
          if (res.deferred) toast(res.message, true);
          else if (res.untouched != null) {
            // the number that makes "원본 보호" checkable rather than a claim
            toast(`${p.label} 적용 — 변형 정점 ${res.moved.toLocaleString()} / 보존 ${res.untouched.toLocaleString()}`, true);
          }
          refreshStats();
          state.spec = structuredSpecText(spec);
          $("specText").textContent = state.spec;
          saveToLibrary();
        }, 220);
      }, p.step || 0.1, [p.minimum ?? 0, p.maximum ?? 100]));
      body.appendChild(line);
    }
  }

  // ---- what is deliberately not offered
  const un = card("지원하지 않는 편집", `${spec.validation.unsupported.length}건`);
  for (const u of spec.validation.unsupported) {
    const d = document.createElement("div");
    d.className = "sm-cap";
    d.textContent = `${u.capability}: ${u.reason}`;
    un.appendChild(d);
  }

  // ---- rebuild stays an advanced, gated choice
  const rb = card("파라메트릭 재구축", "고급");
  const gate = rebuildEligibility(spec.validation.rebuildScores || {});
  const g = document.createElement("div");
  g.className = "sm-cap";
  g.textContent = gate.eligible
    ? "승인 게이트를 통과했습니다. 선택한 영역만 파생 자산으로 재구축합니다."
    : `게이트 미통과 — ${gate.reasons.join(" · ")}`;
  rb.appendChild(g);
  const note = document.createElement("div");
  note.className = "sm-cap";
  note.textContent = "재구축은 원본을 대체하지 않고 별도 파생 자산으로 저장됩니다.";
  rb.appendChild(note);
}

/** flash a region's bounds so the structure list points at something visible */
let regionBox = null;
function highlightRegion(r) {
  if (regionBox) { scene.remove(regionBox); regionBox.geometry.dispose(); regionBox.material.dispose(); regionBox = null; }
  const s = r.geometry.size, c = r.geometry.centre;
  const g = new THREE.BoxGeometry(Math.max(s[0], 1), Math.max(s[1], 1), Math.max(s[2], 1));
  regionBox = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.55 }));
  regionBox.position.set(c[0], c[1], c[2]);
  scene.add(regionBox);
  toast(`${r.name} — ${r.evidence}`, true);
  setTimeout(() => {
    if (regionBox) { scene.remove(regionBox); regionBox.geometry.dispose(); regionBox.material.dispose(); regionBox = null; }
  }, 4000);
}

/* The build sheet, driven by the specification's parameter registry. Editing a
   number here writes a SpecPatch, bumps the version and rebuilds only the parts
   that reference it — the point of holding every dimension in one place. */
let patchTimer = 0;
function buildParameterSheetUI(spec) {
  const host = $("sheet");
  host.innerHTML = "";

  const paramRow = (id, p, into) => {
    const line = document.createElement("div");
    line.className = "pf";
    const label = document.createElement("span");
    label.style.cssText = "flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis";
    label.textContent = id.includes(".") ? id.split(".").slice(1).join(".") : id;
    label.title = `${id} · ${p.sourceStatus} (신뢰도 ${p.confidence})`;
    line.appendChild(label);
    line.appendChild(numField(p.value, (v) => {
      clearTimeout(patchTimer);
      const affected = partsAffectedBy(spec, id);
      applyPatch(spec, {
        patchId: `PATCH_${Date.now().toString(36)}`,
        baseSpecificationVersion: spec.specificationVersion,
        operations: [{ operation: "SET_PARAMETER", parameterId: id, newValue: v, affectedPartIds: affected }],
      });
      patchTimer = setTimeout(() => {
        compileFromSpec();
        state.spec = specSummary(spec);
        $("specText").textContent = state.spec;
        rescoreAgainstSource();
        saveToLibrary();
      }, 240);
    }, p.step || 0.1, [p.minimum, p.maximum]));
    into.appendChild(line);
  };

  // model-wide parameters first, then one card per part
  const globals = Object.entries(spec.parameters).filter(([id]) => id.startsWith("MODEL."));
  if (globals.length) {
    const box = document.createElement("div");
    box.className = "sheet-part";
    const head = document.createElement("div");
    head.className = "sp-head";
    head.innerHTML = `<b>전체 치수</b><span>실측</span>`;
    box.appendChild(head);
    const row = document.createElement("div");
    row.className = "sp-mesh";
    const cap = document.createElement("div");
    cap.className = "sm-cap";
    cap.textContent = "참조용 실측값입니다. 형상은 아래 파트 파라미터가 만듭니다.";
    row.appendChild(cap);
    for (const [id, p] of globals) paramRow(id, p, row);
    box.appendChild(row);
    host.appendChild(box);
  }

  spec.parts.forEach((part, i) => {
    const node = state.parts[i];
    const box = document.createElement("div");
    box.className = "sheet-part";
    const head = document.createElement("div");
    head.className = "sp-head";
    const label = { SOURCE_MESH: "원본 메시", PARAMETRIC: "파라메트릭", HYBRID: "하이브리드" };
    head.innerHTML = `<b>${part.name}</b><span>${label[part.representation.type] || part.representation.type}</span>`;
    box.appendChild(head);

    const row = document.createElement("div");
    row.className = "sp-mesh";
    const cap = document.createElement("div");
    cap.className = "sm-cap";
    cap.textContent = `${part.geometryDefinition.builderId}`
      + ` · 프리미티브 오차 회전체 ${(part.primitiveFit.revolve.rms * 100).toFixed(1)}%`
      + ` · 각형 ${(part.primitiveFit.box.rms * 100).toFixed(1)}%`;
    row.appendChild(cap);

    const own = Object.entries(spec.parameters).filter(([id]) => id.startsWith(`${part.partId}.`));
    if (own.length) {
      for (const [id, p] of own) paramRow(id, p, row);
    } else {
      const hint = document.createElement("div");
      hint.className = "sm-cap";
      hint.textContent = "원본 메시 파트입니다. 형상 치수 대신 위치·표시를 편집합니다.";
      row.appendChild(hint);
    }

    if (node) {
      /* Placement is free: the slider spans several times the model so a part
         can be pulled well clear of the assembly, and typing goes past even
         that. The explode span made this a narrow nudge. */
      const reach = Math.max(200, (state.modelSpan || 0) * 3, Math.abs(node.position.length()) * 3);
      for (const key of ["x", "y", "z"]) {
        const line = document.createElement("div");
        line.className = "pf";
        const lab = document.createElement("span");
        lab.style.cssText = "flex:1;min-width:0";
        lab.textContent = `위치 ${key.toUpperCase()}`;
        line.appendChild(lab);
        line.appendChild(numField(node.position[key], (v) => {
          node.position[key] = v;
          node.userData.home = node.position.clone();
          part.transform.position = node.position.toArray().map((n) => Number(n.toFixed(2)));
          saveToLibrary();
        }, 0.5, [-reach, reach]));
        row.appendChild(line);
      }
    }
    box.appendChild(row);
    host.appendChild(box);
  });
}

/** silhouette agreement of the compiled model against the source GLB */
function rescoreAgainstSource() {
  if (!state.specSource || !state.model) return;
  try {
    const agree = formAgreement(renderer, state.model, state.specSource);
    state.formAgreement = agree;
    if (agree.overall != null) {
      $("mAgree").textContent = `${agree.overall}%  (정면 ${agree.per.front ?? "-"} · 측면 ${agree.per.side ?? "-"} · 평면 ${agree.per.top ?? "-"})`;
      $("agreeRow").style.display = "";
    }
  } catch (e) { console.warn("agreement failed", e); }
}

/* The specification view of the build sheet: one card per part showing the
   representation the planner chose, how well a primitive fitted, and the edits
   that representation supports. Source-mesh parts get placement and material
   rather than dimensions, because their shape is the generated geometry. */
function buildSpecSheetUI(spec) {
  const host = $("sheet");
  host.innerHTML = "";
  spec.parts.forEach((p, i) => {
    const node = state.parts[i];
    const box = document.createElement("div");
    box.className = "sheet-part";
    const head = document.createElement("div");
    head.className = "sp-head";
    head.innerHTML = `<b>${p.name}</b><span>${REP_LABEL[p.representationType] || p.representationType}</span>`;
    box.appendChild(head);

    const row = document.createElement("div");
    row.className = "sp-mesh";
    const cap = document.createElement("div");
    cap.className = "sm-cap";
    const fit = p.geometryAnalysis.primitiveFit;
    cap.textContent = `삼각형 ${p.geometryAnalysis.triangles.toLocaleString()} · `
      + `프리미티브 오차 회전체 ${(fit.revolve.rms * 100).toFixed(1)}% · 각형 ${(fit.box.rms * 100).toFixed(1)}%`;
    row.appendChild(cap);

    const why = document.createElement("div");
    why.className = "sm-cap";
    why.textContent = p.reason;
    row.appendChild(why);

    if (node) {
      const pos = document.createElement("div");
      pos.className = "pf";
      pos.append("위치");
      const span = state.explodeSpan || 200;
      for (const key of ["x", "y", "z"]) {
        pos.appendChild(numField(node.position[key], (v) => {
          node.position[key] = v;
          node.userData.home = node.position.clone();
        }, 0.5, [-span, span]));
      }
      row.appendChild(pos);

      const vis = document.createElement("div");
      vis.className = "pf";
      const btn = document.createElement("button");
      btn.textContent = node.visible ? "숨기기" : "표시";
      btn.style.width = "auto";
      btn.style.padding = "0 8px";
      btn.onclick = () => { node.visible = !node.visible; btn.textContent = node.visible ? "숨기기" : "표시"; };
      vis.appendChild(btn);
      row.appendChild(vis);
    }
    box.appendChild(row);
    host.appendChild(box);
  });
}

/* ------------------------------------------------------------ joint editor
   Replaces the parametric slider block: the editable surface of a robot asset
   is its kinematics, not millimetre dimensions. */
const JOINT_TYPES = ["fixed", "revolute", "continuous", "prismatic"];
const CONF_CLASS = (c) => (c >= 0.75 ? "ok" : c >= 0.5 ? "warn" : "err");

function buildJointUI() {
  const host = $("joints");
  if (!host) return;
  const cir = state.cir;
  host.innerHTML = "";
  if (!cir?.joints.length) { host.innerHTML = `<div class="hint">조인트가 없습니다 (단일 링크 자산)</div>`; return; }
  const nameOf = (id) => cir.links.find((l) => l.id === id)?.name || id;
  cir.joints.forEach((j) => {
    const row = document.createElement("div");
    row.className = "joint-row" + (state.selectedJoint === j.id ? " sel" : "");
    const isRot = j.type === "revolute" || j.type === "continuous";
    const unit = isRot ? "°" : "mm";
    const toUi = (v) => (isRot ? v * 180 / Math.PI : v * 1000);
    const lo = j.limits ? toUi(j.limits.lower) : 0;
    const hi = j.limits ? toUi(j.limits.upper) : 0;
    row.innerHTML = `
      <div class="jr-head">
        <b>${nameOf(j.parent)} → ${nameOf(j.child)}</b>
        <span class="conf ${CONF_CLASS(j.confidence.type)}">${Math.round(j.confidence.type * 100)}%</span>
      </div>
      <div class="jr-body">
        <select class="input jt">${JOINT_TYPES.map((t) =>
          `<option value="${t}"${t === j.type ? " selected" : ""}>${t}</option>`).join("")}</select>
        ${j.type !== "fixed" ? `<div class="slider"><label>가동</label>
          <input type="range" class="jpose" min="${lo.toFixed(1)}" max="${hi.toFixed(1)}"
                 step="${isRot ? 1 : 0.5}" value="0" />
          <span class="v">0${unit}</span></div>` : ""}
        <div class="jr-meta">축 ${j.axis.map((v) => v.toFixed(2)).join(", ")} ·
          원점 ${j.origin.position.map((v) => (v * 1000).toFixed(0)).join(", ")}mm
          ${j.limits ? `· 범위 ${lo.toFixed(0)}~${hi.toFixed(0)}${unit}` : ""}</div>
        <div class="jr-ev">${j.evidence.map((e) => `· ${e}`).join("<br/>")}</div>
        ${j.requiresReview ? `<div class="jr-review">검토 필요, 판정 신뢰도가 낮습니다</div>` : ""}
      </div>`;
    row.querySelector(".jt").onchange = (e) => {
      j.type = e.target.value;
      j.status = "user_confirmed";
      j.confidence = { ...j.confidence, type: 1 };
      j.requiresReview = false;
      revalidate();
      buildJointUI();
    };
    const pose = row.querySelector(".jpose");
    if (pose) {
      const out = row.querySelector(".slider .v");
      pose.oninput = () => {
        out.textContent = `${pose.value}${unit}`;
        applyJointPose(j.id, isRot ? Number(pose.value) * Math.PI / 180 : Number(pose.value) / 1000);
      };
    }
    row.querySelector(".jr-head").onclick = () => {
      state.selectedJoint = state.selectedJoint === j.id ? null : j.id;
      const link = cir.links.find((l) => l.id === j.child);
      const node = link?._measured?.node;
      if (node) select(node);
      buildJointUI();
    };
    host.appendChild(row);
  });
}

/** live joint articulation in the viewport (visual only — CIR untouched) */
function applyJointPose(jointId, value) {
  const cir = state.cir;
  const j = cir?.joints.find((x) => x.id === jointId);
  if (!j) return;
  state.jointPose[jointId] = value;
  // every descendant of the child link moves with it
  const kids = new Set([j.child]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const l of cir.links) {
      if (l.parentLink && kids.has(l.parentLink) && !kids.has(l.id)) { kids.add(l.id); grew = true; }
    }
  }
  const axis = new THREE.Vector3().fromArray(j.axis).normalize();
  const pivot = j._pivotMm.clone();
  const isRot = j.type !== "prismatic";
  for (const id of kids) {
    const link = cir.links.find((l) => l.id === id);
    const node = link?._measured?.node;
    if (!node) continue;
    if (!node.userData.poseHome) node.userData.poseHome = node.position.clone();
    node.position.copy(node.userData.poseHome);
    node.quaternion.identity();
    if (isRot) {
      const q = new THREE.Quaternion().setFromAxisAngle(axis, value);
      node.quaternion.copy(q);
      // rotate the node's own origin about the pivot
      const p = node.position.clone().sub(pivot).applyQuaternion(q).add(pivot);
      node.position.copy(p);
    } else {
      node.position.addScaledVector(axis, value * 1000);
    }
  }
}

function resetJointPoses() {
  for (const l of state.cir?.links || []) {
    const node = l._measured?.node;
    if (node?.userData.poseHome) { node.position.copy(node.userData.poseHome); node.quaternion.identity(); }
  }
  state.jointPose = {};
}

/* --------------------------------------------------- collision & mass block */
function buildPhysUI() {
  const host = $("phys");
  if (!host || !state.cir) return;
  const cir = state.cir;
  const verified = cir.links.filter((l) => l.inertial.status !== "ai_proposed").length;
  const totalMass = cir.links.reduce((n, l) => n + l.inertial.mass, 0);
  host.innerHTML = `
    <div class="kv"><span>총 질량</span><b>${totalMass.toFixed(3)} kg</b></div>
    <div class="kv"><span>질량 근거 확보</span><b>${verified}/${cir.links.length} 링크</b></div>
    <div class="kv"><span>충돌체</span><b>${cir.links.map((l) => l.collision.type).filter((v, i, a) => a.indexOf(v) === i).join(", ")}</b></div>
    <div class="phys-list">${cir.links.map((l) => `
      <div class="phys-row">
        <span class="pn">${l.name}</span>
        <span class="pm">${l.inertial.mass.toFixed(3)}kg</span>
        <span class="pc ${l.collision.fidelity === "primitive" ? "ok" : "warn"}">${l.collision.type}${l.collision.shapeCount > 1 ? `×${l.collision.shapeCount}` : ""}</span>
        <span class="ps ${l.inertial.status === "ai_proposed" ? "warn" : "ok"}">${
          l.inertial.status === "source_verified" ? "실측"
          : l.inertial.status === "derived_from_source" ? "배분" : "추정"}</span>
      </div>`).join("")}</div>
    <div class="hint" style="margin-top:8px">충돌체는 시각 메시와 분리되어 프리미티브·복합 프리미티브로 생성됩니다.
    열린 메시의 질량은 부피 적분 근사치이므로 실측값 확인이 필요합니다.</div>`;
}

function renderValidation() {
  const host = $("valConsole");
  if (!host || !state.validation) return;
  const v = state.validation;
  host.innerHTML = v.lines.map((l) =>
    `<div class="vl ${l.level}">${l.level === "ok" ? "✓" : l.level === "warn" ? "⚠" : "✕"} ${l.text}</div>`).join("");
  $("valSummary").textContent = v.errors ? `오류 ${v.errors}건 · 경고 ${v.warnings}건`
    : v.warnings ? `통과 · 경고 ${v.warnings}건` : "전체 통과";
  $("valSummary").className = "val-sum " + (v.errors ? "err" : v.warnings ? "warn" : "ok");
}

/* How close did the built asset land to the specification it was measured
   against? Reporting this keeps the spec honest: if the mesh comes back with
   two links when the blueprint listed eleven parts, the panel says so instead
   of quietly showing a high readiness score. */
function fidelityReport(bp, cir) {
  if (!bp || !cir) return null;
  const bb = new THREE.Box3().setFromObject(state.model);
  const s = bb.getSize(new THREE.Vector3());
  const built = [s.x, s.y, s.z].sort((a, b) => b - a);
  const want = [Number(bp.overall?.width) || 0, Number(bp.overall?.height) || 0, Number(bp.overall?.depth) || 0]
    .sort((a, b) => b - a);
  const dimErr = want[0] > 0
    ? built.map((v, i) => (want[i] > 0 ? Math.abs(v - want[i]) / want[i] : null)).filter((v) => v != null)
    : [];
  const dimScore = dimErr.length ? Math.max(0, 100 - (dimErr.reduce((a, b) => a + b, 0) / dimErr.length) * 100) : null;
  const specParts = (bp.parts || []).length;
  const builtParts = cir.links.length;
  const partScore = specParts ? Math.round(Math.min(1, builtParts / specParts) * 100) : null;
  const notes = [];
  if (dimScore != null) {
    notes.push(`치수 ${built.map((v) => v.toFixed(1)).join(" × ")}mm, 사양 ${want.map((v) => v.toFixed(0)).join(" × ")}mm`);
  }
  if (specParts) {
    notes.push(builtParts >= specParts
      ? `사양 ${specParts}개 파트를 ${builtParts}개로 분리`
      : `사양은 ${specParts}개 파트인데 ${builtParts}개만 분리됨. 세부 파트는 하나의 링크에 묶여 있습니다`);
  }
  return {
    dimScore: dimScore == null ? null : Math.round(dimScore),
    partScore, specParts, builtParts, notes,
  };
}

function renderFidelity() {
  const host = $("fidelity");
  if (!host) return;
  const f = state.fidelity;
  if (!f) { host.innerHTML = ""; host.style.display = "none"; return; }
  host.style.display = "";
  host.innerHTML = `
    <div class="kv"><span>설계 사양 대비 치수</span><b>${f.dimScore != null ? f.dimScore + "%" : "기준 없음"}</b></div>
    <div class="kv"><span>설계 사양 대비 파트</span><b>${f.partScore != null ? `${f.builtParts} / ${f.specParts}` : "기준 없음"}</b></div>
    ${f.notes.map((n) => `<div class="hint" style="margin-top:5px">${n}</div>`).join("")}`;
}

function renderReadiness() {
  const r = state.readiness;
  if (!r) { $("scoreRow").style.display = "none"; return; }
  $("scoreRow").style.display = "";
  $("mScore").textContent = `${r.total} / 100`;
  const host = $("readyBreak");
  if (host) {
    const rows = [["파트 구조", r.part], ["계층", r.hierarchy], ["조인트 타입", r.jointType],
      ["조인트 프레임", r.jointFrame], ["충돌체", r.collision], ["질량·관성", r.inertial],
      ["시뮬레이션 검증", r.simulation], ["내보내기 검증", r.export]];
    host.innerHTML = rows.map(([k, v]) =>
      `<div class="rb"><span>${k}</span><i><b style="width:${v}%"></b></i><em>${v}</em></div>`).join("")
      + (r.todo.length ? `<div class="rb-todo"><b>검토 필요</b>${r.todo.map((t) => `<div>· ${t}</div>`).join("")}</div>` : "");
  }
}

function revalidate() {
  if (!state.cir) return;
  state.validation = validateAsset(state.cir);
  verifyRobotExports(state.cir, state.model).then((exp) => {
    state.validation.lines.push(...exp.lines);
    state.readiness = readinessScore(state.cir, state.validation, exp.ok);
    renderValidation();
    renderReadiness();
  });
}
function markParts(root) {
  let cands = root.children.slice();
  if (cands.length === 1 && cands[0].children.length > 1) cands = cands[0].children;
  if (!cands.length) cands = [root];
  cands.forEach((c, i) => {
    c.userData.isPart = true;
    c.userData.label = c.name || `part_${i + 1}`;
    c.userData.materialKey = "aluminum";
    if (!c.name) c.name = `part_${i + 1}`;
    c.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = o.receiveShadow = true;
        if (!o.material?.isMeshStandardMaterial) o.material = makeMaterial("aluminum");
      }
    });
  });
}
/* Nothing a person designs is 1mm across or 8m across in this workbench.
   Anything outside that band came from a unit-less source, so bring it back to
   a size the viewport and the mass calculation can both work with. */
function ensurePlausibleScale(root, target = 150) {
  const bb = new THREE.Box3().setFromObject(root);
  const s = bb.getSize(new THREE.Vector3());
  const max = Math.max(s.x, s.y, s.z);
  if (max > 0 && (max < 5 || max > 3000)) {
    root.scale.multiplyScalar(target / max);
    return true;
  }
  return false;
}

function normalize(root) {
  const bb = new THREE.Box3().setFromObject(root);
  const size = bb.getSize(new THREE.Vector3()).length();
  if (size > 0 && (size < 20 || size > 2000)) root.scale.setScalar(180 / size);
  const bb2 = new THREE.Box3().setFromObject(root);
  const c = bb2.getCenter(new THREE.Vector3());
  root.position.set(-c.x, -bb2.min.y, -c.z);
}

$("btnNew").onclick = () => {
  clearModel();
  // #refNote was removed from the markup long ago; reading it here threw and
  // took the whole reset with it, which is why 새로 시작 appeared to do nothing
  $("prompt").value = ""; $("projName").textContent = "새 프로젝트";
  clearAttachment();
  state.archetype = null; state.program = null; state.kind = "archetype";
  state.refImageB64 = null; state.requirements = null;
  /* The run is the pipeline, so starting over has to put the pipeline back too.
     Leaving the stepper on 완료 and the specification panel open said the last
     product was still loaded when the viewport was already empty. */
  state.designImageB64 = null; state.pipeMesh = null; state.imported = false;
  state.pipeSpec = null; state.threeCode = null; state.analysis = null;
  pipe.done = 0; pipe.running = 0; pipe.route = null; pipe.spec = null;
  pipe.notes = []; pipe.active = false; pipe.prompt = "";
  /* 새로 시작 is also the cancel: an in-flight stage leaves these flags set,
     and without clearing them the workspace stays wedged with a dead 생성. */
  state.busy = false;
  $("btnGenerate").disabled = false;
  showGen(false);
  $("designImg").style.display = "none";
  $("specBox").style.display = "none";
  $("sheetBlock").style.display = "none";
  $("agreeRow").style.display = "none";
  $("btnKeep").style.display = "none";
  ["btnExplodeTop", "btnHiFi", "btnOrig", "btnReverse", "btnSim"].forEach((id) =>
    $(id).classList.remove("show", "on"));
  $("stageEmpty").style.display = "";
  renderStepper();
  teardownSim();
  $("catalogBlock").style.display = "none";
  $("printBlock").style.display = "none";
  $("paramDroneBlock").style.display = "none";
  $("partEditBlock").style.display = "none";
  $("stageNext").style.display = "none";
  toast("새 작업을 시작합니다");
};

/* showcase removed — the sample prompts above are all live-verified paths,
   which sells better than canned models ever did */

/* ---------------------------------------------------------- multi-view capture
   Four clean renders of whatever is on screen. From a single image an
   image-to-3D model has to invent the back of the object, and that invention is
   what every later measurement inherits. Showing it four sides removes the
   guess, so the 고품질 메시 button feeds these to the cloud model.

   Object-only scene, flat background, no grid or ground plane: the reconstructor
   should see the product, not our viewport. */
const VIEW_AZIMUTH = { front: 0, left: -Math.PI / 2, back: Math.PI, right: Math.PI / 2 };

function captureViews(object, size = 768) {
  const parent = object.parent;
  const idx = parent ? parent.children.indexOf(object) : -1;
  const tmp = new THREE.Scene();
  tmp.background = new THREE.Color(0xf4f4f4);
  tmp.add(new THREE.HemisphereLight(0xffffff, 0xa8a8a8, 2.4));
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(3, 4, 3); tmp.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.9); fill.position.set(-3, 1.5, -2); tmp.add(fill);
  tmp.add(object);

  const bb = new THREE.Box3().setFromObject(object);
  const c = bb.getCenter(new THREE.Vector3());
  const radius = bb.getSize(new THREE.Vector3()).length() / 2 || 1;
  const dist = radius * 2.9;

  const target = new THREE.WebGLRenderTarget(size, size);
  const prevTarget = renderer.getRenderTarget();
  const prevClear = renderer.getClearColor(new THREE.Color());
  const cv = document.createElement("canvas");
  cv.width = cv.height = size;
  const ctx = cv.getContext("2d");
  const buf = new Uint8Array(size * size * 4);
  const flipped = ctx.createImageData(size, size);
  const out = {};

  try {
    for (const [name, az] of Object.entries(VIEW_AZIMUTH)) {
      const cam = new THREE.PerspectiveCamera(32, 1, radius * 0.05, dist + radius * 4);
      cam.position.set(c.x + Math.sin(az) * dist, c.y + radius * 0.22, c.z + Math.cos(az) * dist);
      cam.lookAt(c);
      renderer.setRenderTarget(target);
      renderer.setClearColor(0xf4f4f4, 1);
      renderer.clear();
      renderer.render(tmp, cam);
      renderer.readRenderTargetPixels(target, 0, 0, size, size, buf);
      // WebGL reads bottom-up; a canvas expects top-down
      for (let y = 0; y < size; y++) {
        const src = (size - 1 - y) * size * 4;
        flipped.data.set(buf.subarray(src, src + size * 4), y * size * 4);
      }
      ctx.putImageData(flipped, 0, 0);
      out[name] = cv.toDataURL("image/png");
    }
  } finally {
    renderer.setRenderTarget(prevTarget);
    renderer.setClearColor(prevClear, 1);
    tmp.remove(object);
    if (parent) {
      if (idx >= 0) parent.children.splice(idx, 0, object); else parent.children.push(object);
      object.parent = parent;
    }
    target.dispose();
  }
  return out;
}

/* ------------------------------------------------- hi-fi mesh (메시 클라우드 hybrid)
   design render → image-to-3D mesh → deterministic reverse engineering.
   Visual parity from the mesh model, editability from our program fitting. */
/* 고품질 메시 goes to the cloud model. On a spec-built model the mesh is a
   reference the specification did not have, so it is fetched alongside rather
   than replacing what is on screen; an older mesh-first result still swaps. */
$("btnHiFi").onclick = () => (state.modelSpec?.origin === "IMAGE_ANALYSIS"
  ? generateSourceMesh("mesh-cloud")
  : applyHiFiMesh("manual"));
/* mode: "manual" (button) | "promoted" (score gate) | "routed" (shape pre-router) */
/* Fetch the source mesh for a spec that was written from the image alone. The
   spec-built model stays as the working geometry; this becomes the reference
   behind 원본 메시 and gives the spec a measured bounding box to sit next to its
   target dimensions.

   engine: "local" uses the on-prem model, "mesh-cloud" the cloud one. */
async function generateSourceMesh(engine = "local", title = null) {
  if (!state.designImageB64 || state.busy) return false;
  state.busy = true;
  $("btnOrig").disabled = true; $("btnHiFi").disabled = true;
  showGen(true, title || (engine === "cloud" ? "고품질 메시 생성" : "원본 메시 생성"));
  try {
    let views = null;
    if (engine === "cloud" && state.model) {
      try { views = captureViews(state.model); } catch (e) { console.warn("view capture failed", e); }
    }
    renderSteps(1, engine === "cloud"
      ? "정면·좌·후·우 4면을 메시 3D 엔진에 보내 고해상도 메시를 만듭니다 (2~5분)"
      : "시안 이미지에서 3D 메시를 만듭니다 (1~3분)");
    const j = await fetch("/api/mesh3d", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageB64: state.designImageB64,
        views,
        engine,
        preferCloud: engine === "cloud",
      }),
    }).then((r) => r.json());
    if (!j.ok || !j.url) throw new Error(j.error || "메시 생성 실패");

    renderSteps(2, "메시를 불러옵니다");
    const gltf = await new GLTFLoader().loadAsync(j.url);
    const root = gltf.scene;
    root.name = (state.title || "source").replace(/[^\w가-힣-]/g, "_").slice(0, 24);
    markParts(root);
    root.traverse((o) => { if (o.isMesh) { o.castShadow = o.receiveShadow = true; } });

    // scale it to the specification's target envelope, then stand it up
    const want = state.modelSpec?.targetDimensions;
    const hb = new THREE.Box3().setFromObject(root);
    const hs = hb.getSize(new THREE.Vector3());
    const hMax = Math.max(hs.x, hs.y, hs.z);
    if (want && hMax > 0) {
      const target = Math.max(Number(want.width) || 0, Number(want.height) || 0, Number(want.depth) || 0);
      if (target > 0) root.scale.multiplyScalar(target / hMax);
    }
    ensurePlausibleScale(root);
    try { orientUpright(root); } catch {}
    const b2 = new THREE.Box3().setFromObject(root);
    const c2 = b2.getCenter(new THREE.Vector3());
    root.position.set(-c2.x, -b2.min.y, -c2.z);

    /* This mesh IS the model. The specification describes it; it does not
       replace it, and nothing rebuilds it out of primitives. */
    if (state.origMesh) { scene.remove(state.origMesh); dispose(state.origMesh); }
    if (state.model) { scene.remove(state.model); dispose(state.model); }
    scene.add(root);
    state.model = root;
    state.parts = root.children.filter((c) => c.userData.isPart);
    state.origMesh = root;
    state.specSource = root;
    state.imported = false;
    state.kind = "archetype";
    state.origLabel = engine === "cloud" ? "고품질 메시 (메시 클라우드)" : "생성된 원본 메시";
    explodeK = 0;
    captureExplodeBasis();
    buildPartList();
    select(null);
    refreshStats();
    fitView(false);
    $("stageEmpty").style.display = "none";
    ["matBlock", "polyBlock"].forEach((id) => ($(id).style.display = ""));
    rebuildMatSelect();
    $("btnExplodeTop").classList.add("show");
    $("btnReverse").classList.add("show");

    /* Now that real geometry exists, the specification is rebuilt FROM it:
       bodies, regions and features all come from the mesh, and every editable
       parameter names something that was actually detected. The image analysis
       contributes names and roles only — never dimensions. */
    try {
      const m = measureForm(root);
      state.measured = m;
      state.measuredText = measurementText(m);
      renderSteps(3, "원본 메시에서 바디·영역·피처를 검출합니다");
      captureBaseline(root);
      state.modelSpec = buildStructuredSpec({
        root,
        title: state.title,
        prompt: $("prompt").value.trim(),
        analysis: state.imageAnalysis || null,
        assetUri: j.url,
        measured: m,
      });
      state.spec = structuredSpecText(state.modelSpec);
      $("specText").textContent = state.spec;
      $("specBox").style.display = "";
      $("sheetBlock").style.display = "";
      buildSheetUI();
      const s = state.modelSpec;
      toast(`구조 분석 완료 — 바디 ${s.physicalBodies.length} · 의미 영역 ${s.semanticRegions.length}`
        + ` · 피처 ${s.engineeringFeatures.length} · 실행 가능한 편집 ${s.editableParameters.length}개`, true);
    } catch (e) { console.warn("structure analysis failed", e); }

    $("btnOrig").classList.add("show");
    toast(`${state.origLabel}를 만들었습니다 (${triCount(root).toLocaleString()} 삼각형${j.sec ? `, ${j.sec}초` : ""})`, true);
    saveToLibrary();
    return true;
  } catch (e) {
    toast(`메시 생성 실패: ${e.message}`);
    return false;
  } finally {
    state.busy = false;
    $("btnOrig").disabled = false; $("btnHiFi").disabled = false;
    showGen(false);
  }
}

async function applyHiFiMesh(mode = "manual") {
  if (!state.designImageB64 || state.busy) return false;
  state.busy = true;
  $("btnHiFi").disabled = true;
  const NOTICE = {
    manual: "고품질 메시 재생성",
    prompt: "시안 → 3D 형상 생성",
    image: "업로드 이미지 → 3D 형상 생성",
  };
  showGen(true, NOTICE[mode] || NOTICE.manual);
  let ok = false;
  try {
    /* Manual re-runs have a model on screen already, so send it four ways round
       instead of one design render. The automatic routes have nothing to
       photograph yet and stay on the single image. */
    const source = mode === "manual" ? (state.origMesh || state.model) : null;
    let views = null;
    if (source) {
      try { views = captureViews(source); } catch (e) { console.warn("view capture failed", e); }
    }
    renderSteps(1, views
      ? "정면·좌·후·우 4면을 렌더해 고해상도 3D로 재구성합니다 (2~5분)"
      : "시안 이미지를 3D 메시로 변환합니다 (1~3분)");
    const j = await fetch("/api/mesh3d", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageB64: state.designImageB64, views }),
    }).then((r) => r.json());
    if (!j.ok || !j.url) throw new Error(j.error || "메시 생성 실패");
    if (j.engine === "cloud-multiview") toast(`4면 렌더 ${j.views}장으로 고해상도 재구성 (${j.sec}초)`, true);

    renderSteps(3, "메시를 불러와 파트로 정리합니다");
    const gltf = await new GLTFLoader().loadAsync(j.url);
    const root = gltf.scene;
    // scale the arbitrary-unit mesh to the program's real-world height
    // the program model is the dimensional reference: keep the mesh at its scale.
    // With no prior model (mesh-first route) fall back to a plausible product
    // envelope on the LONGEST axis — height alone turns a mouse into a monolith.
    const prevH = state.model ? new THREE.Box3().setFromObject(state.model).getSize(new THREE.Vector3()).y : null;
    const wantSize = state.blueprint?.overall || null;   // millimetres from the spec sheet
    const keep = {
      design: state.designImageB64, title: state.title, brief: state.brief,
      spec: state.spec, prompt: $("prompt").value,
    };
    clearModel();
    root.name = (keep.title || "hifi").replace(/[^\w가-힣-]/g, "_").slice(0, 24);
    markParts(root);
    /* Image-to-3D meshes arrive in arbitrary units (often a ~1 unit cube), so
       the viewport showed a 1mm speck. The spec sheet states the real envelope
       in millimetres, so scale to that; otherwise fall back to a plausible
       product size. Either way the result is range-checked, because trusting a
       previous model's height propagates any earlier scale error. */
    const hb = new THREE.Box3().setFromObject(root);
    const hs = hb.getSize(new THREE.Vector3());
    const hMax = Math.max(hs.x, hs.y, hs.z);
    if (wantSize && Number(wantSize.height) > 0 && hs.y > 0) {
      const want = Math.max(Number(wantSize.width) || 0, Number(wantSize.height) || 0, Number(wantSize.depth) || 0);
      root.scale.multiplyScalar(want / hMax);
    } else if (prevH && hs.y > 0) root.scale.multiplyScalar(prevH / hs.y);
    else if (hMax > 0) root.scale.multiplyScalar(150 / hMax);
    ensurePlausibleScale(root);
    const hb2 = new THREE.Box3().setFromObject(root);
    const hc = hb2.getCenter(new THREE.Vector3());
    root.position.set(-hc.x, -hb2.min.y, -hc.z);
    scene.add(root);
    state.model = root;
    state.parts = root.children.filter((c) => c.userData.isPart);
    state.imported = true; state.kind = "archetype"; state.program = null; state.archetype = null;
    state.designImageB64 = keep.design;
    state.title = keep.title; state.brief = keep.brief; state.spec = keep.spec;
    $("mName").textContent = keep.title || "고품질 메시";
    $("mBrief").textContent = keep.brief
      ? `${keep.brief}\n[고품질 메시, 시안 이미지를 image-to-3D로 재구성했습니다]`
      : "시안 이미지를 image-to-3D로 재구성한 고품질 메시입니다.";
    if (keep.spec) { $("specText").textContent = keep.spec; $("specBox").style.display = ""; }
    if (keep.design) {
      $("designImg").src = keep.design;      // already a full data URI
      $("designImg").style.display = "";
    }
    $("prompt").value = keep.prompt;
    explodeK = 0; captureExplodeBasis(); buildPartList();
    refreshStats(); fitView(false);
    $("stageEmpty").style.display = "none";       // the placeholder outlived the model
    ["matBlock", "polyBlock"].forEach((id) => ($(id).style.display = ""));
    rebuildMatSelect();
    $("btnExplodeTop").classList.add("show");
    $("btnHiFi").classList.add("show");
    $("btnReverse").classList.add("show");
    showGen(false);
    // the mesh is the visual truth; the caller compiles structure off it next
    if (mode === "manual") toast("메시 재생성 완료, 구조 컴파일 버튼으로 다시 컴파일하세요", true);
    state.busy = false;
    ok = true;
  } catch (err) {
    toast("고품질 변환 실패: " + err.message);
    showGen(false);
    state.busy = false;
  }
  $("btnHiFi").disabled = false;
  return ok;
}

/* ------------------------------------------------------- keep as asset
   Promotes a compiled asset into the enterprise catalogue: the derivative
   files go to object storage, the structure/relations/BOM/procedures to the
   catalog record, and it becomes searchable by text, relation and shape. */
const $keep = (id) => $(id);
function fillCategorySelects() {
  const cat = $("kCat"), fam = $("kFamily");
  cat.innerHTML = Object.keys(ASSET_CATEGORIES).map((c) => `<option value="${c}">${c}</option>`).join("");
  const sync = () => {
    fam.innerHTML = (ASSET_CATEGORIES[cat.value] || []).map((f) => `<option value="${f}">${f}</option>`).join("");
  };
  cat.onchange = sync;
  sync();
}
$("btnKeep").onclick = () => {
  if (!state.cir) { toast("먼저 구조 컴파일을 실행하세요"); return; }
  fillCategorySelects();
  $("kName").value = state.title || "";
  $("kModel").value = (state.title || "").replace(/\s+/g, "-").toUpperCase().slice(0, 16);
  $("kOwner").value = user;
  const cir = state.cir;
  $("keepNote").textContent = `링크 ${cir.links.length} · 조인트 ${cir.joints.length} · 준비도 ${state.readiness?.total ?? "-"}/100 `
    + `· 함께 저장될 파일: GLB, USD, URDF, MJCF, STEP, 파트별 메시 ${cir.links.length}개`;
  $("keepBack").classList.add("on");
};
$("keepClose").onclick = () => $("keepBack").classList.remove("on");
$("keepBack").onclick = (e) => { if (e.target.id === "keepBack") $("keepBack").classList.remove("on"); };

$("keepGo").onclick = async () => {
  if (!state.cir || state.busy) return;
  const btn = $("keepGo");
  btn.disabled = true; btn.textContent = "등록 중…";
  try {
    const cir = state.cir;
    const meta = {
      name: $("kName").value.trim() || state.title,
      model: $("kModel").value.trim(),
      manufacturer: $("kMaker").value.trim(),
      category: $("kCat").value,
      family: $("kFamily").value,
      status: $("kStatus").value,
      version: $("kVer").value.trim() || "1.0",
      owner: $("kOwner").value.trim() || user,
      access: $("kAccess").value,
      assetId: ($("kModel").value.trim() || $("kName").value.trim() || state.title),
      derivedFrom: state.origMesh?.name || state.model?.name || null,
    };
    const record = buildAssetRecord(cir, meta, {
      readiness: state.readiness,
      validation: state.validation,
      cir: stripCIR(cir),
    });

    // derivative files — object storage layer
    const b64 = (buf) => {
      const u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
      let s = "";
      for (let i = 0; i < u8.length; i += 8192) s += String.fromCharCode(...u8.subarray(i, i + 8192));
      return "base64:" + btoa(s);
    };
    const glb = await exportGLB(state.model);
    const files = {
      glb: b64(glb),
      usd: exportUSDA(cir),
      urdf: exportURDF(cir),
      mjcf: exportMJCF(cir),
      step: exportSTEP(state.model, record.assetId),
      json: JSON.stringify(stripCIR(cir), null, 2),
    };
    fitView(false);
    renderer.render(scene, camera);
    const tc2 = document.createElement("canvas");
    const s = Math.min(1, 520 / renderer.domElement.width);
    tc2.width = Math.round(renderer.domElement.width * s);
    tc2.height = Math.round(renderer.domElement.height * s);
    tc2.getContext("2d").drawImage(renderer.domElement, 0, 0, tc2.width, tc2.height);

    const r = await fetch("/api/assets", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ record, files, thumb: tc2.toDataURL("image/jpeg", 0.82) }),
    }).then((x) => x.json());
    if (!r.ok) throw new Error(r.error || "등록 실패");
    $("keepBack").classList.remove("on");
    toast(`자산으로 보관했습니다, ${r.asset.name}`, true);
    setTimeout(() => {
      if (confirm("자산 카탈로그에서 열어볼까요?")) location.href = `asset.html?id=${encodeURIComponent(r.asset.assetId)}`;
    }, 400);
  } catch (e) {
    console.error(e);
    toast("보관 실패: " + e.message);
  }
  btn.disabled = false; btn.textContent = "등록하기";
};

/* boot: reopen a design handed over from the library */
restoreFromLibrary();

/* ------------------------------------------------------------ export */
let scope = "all";
$("scopeAll").onclick = () => { scope = "all"; $("scopeAll").classList.add("on"); $("scopeSel").classList.remove("on"); };
$("scopeSel").onclick = () => { scope = "sel"; $("scopeSel").classList.add("on"); $("scopeAll").classList.remove("on"); };

/* Export polygon budget. The viewport model is never touched by a download —
   the reduction runs on a clone. SimplifyModifier is three.js's quadric
   edge-collapse; the ratios are what left drone-scale parts intact in testing. */
let exportLod = "high";
const EXPORT_LOD_RATIO = { high: 0, mid: 0.45, low: 0.72 };
document.querySelectorAll("#lodExportSeg button").forEach((b) => {
  b.onclick = () => {
    exportLod = b.dataset.lod;
    document.querySelectorAll("#lodExportSeg button").forEach((x) => x.classList.toggle("on", x === b));
  };
});

function decimateClone(src, ratio) {
  const root = src.clone(true);
  if (!(ratio > 0)) return root;
  const mod = new SimplifyModifier();
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    try {
      let g = o.geometry.clone();
      g.deleteAttribute("uv"); g.deleteAttribute("uv1"); g.deleteAttribute("normal");
      g = mergeVertices(g, 1e-3);
      const verts = g.getAttribute("position").count;
      const remove = Math.floor(verts * ratio);
      if (remove < 4 || verts - remove < 24) { g.dispose(); return; }
      const simplified = mod.modify(g, remove);
      if (!simplified.index || simplified.index.count < 12) { simplified.dispose(); g.dispose(); return; }
      simplified.computeVertexNormals();
      o.geometry = simplified;
      g.dispose();
    } catch { /* keep the original geometry for this mesh */ }
  });
  return root;
}

function exportTarget() {
  if (!state.model) { toast("먼저 모델을 생성하세요"); return null; }
  const src = scope === "sel" ? state.selected : state.model;
  if (scope === "sel" && !src) { toast("파트를 먼저 선택하세요"); return null; }
  const label = scope === "sel" ? src.name : "assembly";
  const ratio = EXPORT_LOD_RATIO[exportLod] || 0;
  return { obj: decimateClone(src, ratio), label: `${label}_${exportLod}`, temp: true };
}
const slug = () => (state.archetype || state.model?.name || "model").replace(/[^A-Za-z0-9_-]/g, "");

document.querySelectorAll("[data-fmt]").forEach((btn) => {
  btn.onclick = async () => {
    const t = exportTarget(); if (!t) return;
    const fmt = btn.dataset.fmt;
    const base = `vringon_${slug()}_${t.label}`;
    btn.disabled = true;
    try {
      let size = 0;
      const needsCir = ["urdf", "usd", "mjcf", "bundle"].includes(fmt);
      if (needsCir && !state.cir) { toast("먼저 구조 컴파일을 실행하세요"); btn.disabled = false; return; }
      if (fmt === "urdf") size = downloadBlob(exportURDF(state.cir), `${base}.urdf`, "application/xml");
      else if (fmt === "usd") size = downloadBlob(exportUSDA(state.cir), `${base}.usda`, "text/plain");
      else if (fmt === "mjcf") size = downloadBlob(exportMJCF(state.cir), `${base}.xml`, "application/xml");
      else if (fmt === "bundle") size = downloadBlob(exportBundle(state.cir, state.model), `${base}_robot_asset.zip`, "application/zip");
      else if (fmt === "step") {
        /* STEP writes a faceted B-Rep: every triangle becomes points, edges and
           an advanced face, about 800 bytes each. A 180k-triangle reconstruction
           is a 148MB file that most CAD seats will not open. Say so before
           spending the memory, and point at the reduction control rather than
           silently dropping triangles, which would tear the solid open. */
        const n = triCount(t.obj);
        if (n > 60000) {
          const mb = Math.round((n * 800) / 1e6);
          const go = confirm(`이 형상은 삼각형 ${n.toLocaleString()}개입니다.\n`
            + `STEP은 삼각형마다 면을 기록하므로 파일이 약 ${mb}MB가 되고 일반 CAD에서 열기 어렵습니다.\n\n`
            + `왼쪽 폴리곤 최적화에서 감축한 뒤 내보내는 것을 권합니다.\n`
            + `그래도 지금 내보내시겠습니까?`);
          // the re-enable sits after the try, so a bare return would lock the button
          if (!go) {
            toast("STEP 내보내기를 취소했습니다. 폴리곤 최적화에서 감축 후 다시 시도하세요");
            btn.disabled = false;
            return;
          }
        }
        size = downloadBlob(exportSTEP(t.obj, base), `${base}.step`, "application/step");
      }
      else if (fmt === "dxf") size = downloadBlob(exportDXF(t.obj), `${base}.dxf`, "application/dxf");
      else if (fmt === "obj") size = downloadBlob(exportOBJ(t.obj), `${base}.obj`, "text/plain");
      else if (fmt === "stl") size = downloadBlob(exportSTL(t.obj), `${base}.stl`);
      else if (fmt === "glb") size = downloadBlob(await exportGLB(t.obj), `${base}.glb`, "model/gltf-binary");
      toast(`${fmt.toUpperCase()} 다운로드 (${(size / 1024).toFixed(0)} KB)`, true);
      // an export is the strongest "this result was useful" label for the flywheel
      fetch("/api/event", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "export", fmt, kind: state.kind, title: state.title }) }).catch(() => {});
    } catch (err) {
      console.error(err);
      toast(`${fmt.toUpperCase()} 변환 실패: ${err.message}`);
    }
    btn.disabled = false;
  };
});

/* validation console: structure + static + motion + export round-trip.
   An asset that fails here is never presented as simulation-ready. */
$("btnVerify").onclick = async () => {
  if (!state.model) { toast("먼저 모델을 불러오세요"); return; }
  $("btnVerify").disabled = true;
  try {
    if (state.cir) {
      $("valSummary").textContent = "검증 중…";
      state.validation = validateAsset(state.cir);
      const exp = await verifyRobotExports(state.cir, state.model);
      state.validation.lines.push(...exp.lines);
      const geo = await verifyExports(state.model);
      state.validation.lines.push(...geo.lines.map((t) => ({ level: "ok", text: t.replace(/<[^>]*>/g, " ") })));
      state.readiness = readinessScore(state.cir, state.validation, exp.ok);
      renderValidation();
      renderReadiness();
      toast(state.validation.errors ? `오류 ${state.validation.errors}건, 검증 콘솔을 확인하세요`
        : "시뮬레이션·내보내기 검증 통과", !state.validation.errors);
    } else {
      const r = await verifyExports(state.model);
      $("valConsole").innerHTML = r.lines.map((l) => `<div class="vl ok">✓ ${l}</div>`).join("");
      $("valSummary").textContent = r.ok ? "메시 포맷 일치" : "포맷 차이 있음";
      toast(r.ok ? "메시 내보내기 일치" : "일부 포맷에서 차이가 있습니다", r.ok);
    }
  } catch (e) {
    console.error(e);
    $("valSummary").textContent = "검증 실패: " + e.message;
  }
  $("btnVerify").disabled = false;
};

export async function verifyExports(target) {
  const src = collectPartTriangles(target);
  const srcTris = src.reduce((n, p) => n + p.tris.length / 9, 0);
  const bbOf = (arr) => {
    const b = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
    for (const p of arr) for (let i = 0; i < p.tris.length; i += 3) {
      for (let k = 0; k < 3; k++) {
        b.min[k] = Math.min(b.min[k], p.tris[i + k]);
        b.max[k] = Math.max(b.max[k], p.tris[i + k]);
      }
    }
    return b;
  };
  const srcBB = bbOf(src);
  const dim = (b) => b.max.map((v, i) => v - b.min[i]);
  const srcDim = dim(srcBB);
  const close = (a, b, tol = 0.05) => Math.abs(a - b) <= Math.max(0.02, Math.abs(b) * tol);
  const lines = [];
  let ok = true;
  const mark = (pass) => { if (!pass) ok = false; return pass ? "일치" : "차이"; };

  // GLB
  const glb = await exportGLB(target);
  const gltf = await new GLTFLoader().parseAsync(glb.slice(0), "");
  let gTris = 0;
  gltf.scene.traverse((o) => {
    if (o.isMesh) { const p = o.geometry.getAttribute("position"); gTris += (o.geometry.index ? o.geometry.index.count : p.count) / 3; }
  });
  const gbb = new THREE.Box3().setFromObject(gltf.scene);
  const gs = gbb.getSize(new THREE.Vector3());
  lines.push(`GLB ${gTris.toLocaleString()}면 / ${gs.x.toFixed(1)}×${gs.y.toFixed(1)}×${gs.z.toFixed(1)}mm, ${
    mark(close(gTris, srcTris, 0.001) && close(gs.x, srcDim[0]) && close(gs.y, srcDim[1]))}`);

  // STL
  const stl = exportSTL(target);
  const stlGeo = new STLLoader().parse(stl.buffer ? stl.buffer.slice(0) : stl.slice(0));
  const sTris = stlGeo.getAttribute("position").count / 3;
  stlGeo.computeBoundingBox();
  const sSize = stlGeo.boundingBox.getSize(new THREE.Vector3());
  lines.push(`STL ${sTris.toLocaleString()}면 / ${sSize.x.toFixed(1)}×${sSize.y.toFixed(1)}×${sSize.z.toFixed(1)}mm, ${
    mark(close(sTris, srcTris, 0.001) && close(sSize.x, srcDim[0]) && close(sSize.y, srcDim[1]))}`);
  stlGeo.dispose();

  // OBJ
  const objText = exportOBJ(target);
  const objRoot = new OBJLoader().parse(objText);
  let oTris = 0, oGroups = 0;
  objRoot.traverse((o) => { if (o.isMesh) { oGroups += 1; oTris += o.geometry.getAttribute("position").count / 3; } });
  const obb = new THREE.Box3().setFromObject(objRoot);
  const os = obb.getSize(new THREE.Vector3());
  lines.push(`OBJ ${oTris.toLocaleString()}면 / ${oGroups}그룹, ${
    mark(close(oTris, srcTris, 0.001) && close(os.x, srcDim[0]))}`);

  // STEP — count faces and solids, and read the coordinate extent back
  const step = exportSTEP(target, "verify");
  const faces = (step.match(/ADVANCED_FACE/g) || []).length;
  const solids = (step.match(/MANIFOLD_SOLID_BREP/g) || []).length;
  let sx = [Infinity, -Infinity];
  for (const m of step.matchAll(/CARTESIAN_POINT\('',\((-?[\d.]+),(-?[\d.]+),(-?[\d.]+)\)\)/g)) {
    const v = parseFloat(m[1]); sx[0] = Math.min(sx[0], v); sx[1] = Math.max(sx[1], v);
  }
  // STEP drops zero-area sliver triangles by design — allow up to 10% face loss
  lines.push(`STEP ${faces.toLocaleString()}면 / 솔리드 ${solids} / X ${(sx[1] - sx[0]).toFixed(1)}mm, ${
    mark(faces >= srcTris * 0.9 && faces <= srcTris * 1.001 && solids === src.length && close(sx[1] - sx[0], srcDim[0]))}`);

  // DXF
  const dxf = exportDXF(target);
  const faces3d = (dxf.match(/\r\n3DFACE\r\n/g) || []).length;
  const layers = new Set([...dxf.matchAll(/\r\nLAYER\r\n\s*2\r\n(.+?)\r\n/g)].map((m) => m[1]));
  lines.push(`DXF ${faces3d.toLocaleString()}면 / 레이어 ${layers.size}, ${
    mark(close(faces3d, srcTris, 0.001) && layers.size === src.length)}`);

  lines.unshift(`<b style="color:var(--text)">뷰포트 기준 ${Math.round(srcTris).toLocaleString()}면 · ${
    srcDim.map((v) => v.toFixed(1)).join(" × ")}mm</b>`);
  return { ok, lines, srcTris, srcDim };
}
window.__verify = verifyExports;
