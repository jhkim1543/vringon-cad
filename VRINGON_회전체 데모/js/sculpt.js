/* Part 3 — 프롬프트나 사진 한 장에서 3D (워크스페이스).
   흐름: 설명하거나 사진 올리기 → 부품 트리(사양) → 3D → 파트 분리.
   Part 3 workspace: describe it or drop a photo → a component tree (the spec) → 3D → part separation.

   일부러 여기까지만 한다. 내보내기·검증·시뮬레이션은 Part 1·2 의 몫이고, 이 화면이 보여 줄 것은
   "부품이 트리로 나뉘어 나온다" 하나다.
   Deliberately stops here. Export, verification and simulation belong to Parts 1 and 2; the one thing
   this screen has to show is that the result comes apart into a tree of parts.

   사양이 어디서 오나 / where the spec comes from:
     · 예시  — 미리 써 둔 사양을 그대로 읽는다 (서버 없이 도는 정적 데모)
     · 라이브 — 서버가 설명·사진을 받아 사양을 쓴다 (/api/sculpt). 키는 서버에만 있다.
     examples replay a hand-written spec so the static demo works with no server; live mode asks the
     server to author one, and the key never leaves the server. */

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { buildFromSpec, validateSpec, NOT_MODELLED } from "./sculpt-spec.js";
import { initTour } from "./tour.js";
import { initI18n, addDict, t } from "./i18n.js";
import { SCULPT_EN } from "./i18n-en-sculpt.js";
import { initPanes } from "./panes.js";
import { mountPartNav } from "./partnav.js";

/* 사전은 t() 를 처음 쓰기 전에 더해야 한다. 나중에 더하면 그 전에 그려진 글자가 한국어로 남는다
   (실측: 예시 칩과 프롬프트 버튼 7개가 안 바뀌었다).
   The dictionary must be in place before the first t(): added later, anything already rendered stays
   Korean (seen: seven strings across the example chips and prompt buttons). */
addDict(SCULPT_EN);

const BUILD = "dev";
const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let panes = null;

function toast(msg, ok = false) {
  const el = document.createElement("div");
  el.className = `toast${ok ? " ok" : ""}`; el.textContent = msg;
  $("toasts").appendChild(el); setTimeout(() => el.remove(), 4200);
}

/* 예시 프롬프트 — 눌러서 채운다 / example prompts, click to fill the box */
const SEEDS = ["접이식 팔이 달린 금속 책상 스탠드", "손잡이가 달린 세라믹 머그컵", "다리 다섯 개 바퀴 의자"];

const state = { spec: null, built: null, parts: [], selected: null, hidden: new Set(), explode: 0, live: false };

/* ================================================================ 3D */
const stage = $("stage");
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.4;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0C0C10);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
const camera = new THREE.PerspectiveCamera(38, 1, 0.5, 12000); camera.position.set(320, 260, 420);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.075;

const key = new THREE.DirectionalLight(0xffffff, 2.2);
key.position.set(240, 420, 280); key.castShadow = true; key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.near = 20; key.shadow.camera.far = 2400;
key.shadow.camera.left = key.shadow.camera.bottom = -600; key.shadow.camera.right = key.shadow.camera.top = 600;
key.shadow.bias = -0.0012; key.shadow.normalBias = 0.7;
scene.add(key, new THREE.DirectionalLight(0xc8d2ff, 0.45).translateX(-320).translateY(180).translateZ(140),
  new THREE.HemisphereLight(0xc4ccdd, 0x3a3d48, 1.0), new THREE.AmbientLight(0xffffff, 0.22));
const grid = new THREE.GridHelper(2400, 60, 0x2a2a34, 0x1a1a20);
grid.material.transparent = true; grid.material.opacity = 0.5; scene.add(grid);
const floor = new THREE.Mesh(new THREE.CircleGeometry(1400, 64).rotateX(-Math.PI / 2), new THREE.ShadowMaterial({ opacity: 0.38 }));
floor.receiveShadow = true; scene.add(floor);
const root = new THREE.Group(); scene.add(root);

function resize() { const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); }
new ResizeObserver(resize).observe(stage); resize();
renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });

function fitView() {
  if (!root.children.length) return;
  const bb = new THREE.Box3().setFromObject(root);
  const c = bb.getCenter(new THREE.Vector3()), r = Math.max(10, bb.getSize(new THREE.Vector3()).length() / 2);
  controls.target.copy(c);
  const vHalf = THREE.MathUtils.degToRad(camera.fov / 2), hHalf = Math.atan(Math.tan(vHalf) * Math.max(0.6, camera.aspect));
  camera.position.copy(c).add(new THREE.Vector3(0.55, 0.42, 0.72).normalize().multiplyScalar((r / Math.sin(Math.min(vHalf, hHalf))) * 1.2));
  camera.near = Math.max(0.2, r / 80); camera.far = r * 90; camera.updateProjectionMatrix(); controls.update();
}
$("btnFit").onclick = fitView;

/* ================================================================ 파트 분리 / part separation
   각 파트를 모델 중심에서 바깥으로 민다. 부모가 움직이면 자식도 따라가므로,
   트리에서 최상위인 것만 밀면 계층이 그대로 드러난다.
   Each part is pushed outward from the model centre. Children follow their parent, so pushing only the
   top-level ones is what makes the hierarchy legible. */
function captureExplodeBasis() {
  const bb = new THREE.Box3().setFromObject(root);
  const c = bb.getCenter(new THREE.Vector3());
  state.span = bb.getSize(new THREE.Vector3()).length() * 0.3;
  for (const p of state.parts) {
    const o = p.object;
    o.userData.home = o.position.clone();
    const pb = new THREE.Box3().setFromObject(o);
    const d = pb.getCenter(new THREE.Vector3()).sub(c);
    if (d.lengthSq() < 1e-6) d.set(0, 1, 0);
    o.userData.dir = d.normalize();
  }
}
function applyExplode(k) {
  state.explode = k;
  for (const p of state.parts) {
    const o = p.object;
    if (!o.userData.home) continue;
    /* 부모가 이미 밀렸으면 자식은 덜 민다. 안 그러면 멀리 있는 자식이 화면 밖으로 나간다.
       Children move less when their parent already moved, otherwise deep children fly off screen. */
    const depth = p.parent ? 0.45 : 1;
    o.position.copy(o.userData.home).addScaledVector(o.userData.dir, state.span * k * depth);
  }
  $("expRange").value = Math.round(k * 100);
  $("expVal").textContent = `${Math.round(k * 100)}%`;
  $("btnExplode").classList.toggle("on", k > 0);
  $("btnExplode").textContent = k > 0 ? t("합치기") : t("파트 분리");
}
$("btnExplode").onclick = () => applyExplode(state.explode > 0 ? 0 : 1);
$("expRange").oninput = (e) => applyExplode(Number(e.target.value) / 100);

/* ================================================================ 파트 목록 / part list */
function colorOf(p) {
  const m = p.object.material;
  return `#${m.color.getHexString()}`;
}
function renderParts() {
  const list = state.parts;
  $("partCount").textContent = `${list.length}`;
  $("mParts").textContent = `${list.length}`;
  $("parts").innerHTML = list.map((p) => {
    const indent = p.parent ? 14 : 0;
    const hidden = state.hidden.has(p.id);
    return `<div class="prow${state.selected === p.id ? " on" : ""}${hidden ? " dim" : ""}" data-id="${p.id}" style="margin-left:${indent}px">
      <span class="sw" style="background:${colorOf(p)}"></span>
      <span class="nm">${p.name}</span>
      <span class="lv">${p.level}</span>
      <button class="eye" data-eye="${p.id}" title="${hidden ? t("보이기") : t("숨기기")}">${hidden ? "◻" : "◼"}</button>
    </div>`;
  }).join("");
}
$("parts").onclick = (e) => {
  const eye = e.target.closest("[data-eye]");
  if (eye) {
    const id = eye.dataset.eye;
    state.hidden.has(id) ? state.hidden.delete(id) : state.hidden.add(id);
    const p = state.parts.find((x) => x.id === id);
    if (p) p.object.visible = !state.hidden.has(id);
    return renderParts();
  }
  const row = e.target.closest(".prow"); if (!row) return;
  state.selected = state.selected === row.dataset.id ? null : row.dataset.id;
  /* 고른 파트만 진하게, 나머지는 흐리게 / the picked part stays solid, the rest go translucent */
  for (const p of state.parts) {
    const on = !state.selected || p.id === state.selected;
    p.object.material.opacity = on ? 1 : 0.18;
    p.object.material.transparent = !on;
    p.object.material.needsUpdate = true;
  }
  renderParts();
};
$("btnShowAll").onclick = () => {
  state.hidden.clear(); state.selected = null;
  for (const p of state.parts) { p.object.visible = true; p.object.material.opacity = 1; p.object.material.transparent = false; }
  renderParts();
};
$("btnDownload").onclick = () => {
  if (!state.spec) return;
  const blob = new Blob([JSON.stringify(state.spec, null, 1)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = `${state.spec.id || "sculpt"}.json`; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
};

/* ================================================================ 진행 표시 / progress */
function showGen(on, title = "", sub = "", steps = []) {
  $("gen").classList.toggle("on", on);
  $("genTitle").textContent = title; $("genSub").textContent = sub;
  const done = steps.filter((s) => s.state === "done").length;
  $("genBar").style.width = `${steps.length ? (done / steps.length) * 100 : 0}%`;
  $("genSteps").innerHTML = steps.map((s) => `<div class="gen-step ${s.state || ""}"><i class="dot"></i>${s.text}</div>`).join("");
  $("runSteps").innerHTML = steps.map((s) => `<div class="gen-step ${s.state || ""}"><i class="dot"></i>${s.text}</div>`).join("");
}

/* ================================================================ 만들기 / build */
function clearModel() {
  for (const o of root.children.slice()) { root.remove(o); o.traverse?.((c) => c.geometry?.dispose()); }
  state.built = null; state.parts = []; state.selected = null; state.hidden.clear(); state.explode = 0;
  $("partBlock").style.display = "none"; $("limitBlock").style.display = "none"; $("expDock").style.display = "none";
  $("parts").innerHTML = "";
  for (const k of ["mName", "mParts", "mSize", "mTris"]) $(k).textContent = "—";
}

async function buildSpec(spec, label) {
  const v = validateSpec(spec);
  if (!v.ok) { showGen(false); return toast(`${t("사양을 쓸 수 없습니다")}: ${v.errors[0]}`); }
  clearModel();
  state.spec = spec;
  const built = buildFromSpec(spec);
  state.built = built; state.parts = built.parts;
  root.add(built.root);
  $("stageEmpty").style.display = "none";
  $("projName").textContent = label || spec.name || spec.id;
  $("mName").textContent = spec.name || spec.id;
  const s = built.stats.size;
  $("mSize").textContent = `${Math.round(s.x)} × ${Math.round(s.y)} × ${Math.round(s.z)} mm`;
  $("mTris").textContent = built.stats.triangles.toLocaleString();
  $("partBlock").style.display = ""; $("limitBlock").style.display = ""; $("expDock").style.display = "";
  $("limits").innerHTML = NOT_MODELLED.map((x) => `<li>${t(x)}</li>`).join("");
  renderParts();
  captureExplodeBasis();
  applyExplode(0);
  fitView();
  for (const n of built.notes) toast(n);
  panes?.show("stage");
}

/* 예시: 미리 써 둔 사양을 그대로 / examples replay a stored spec */
async function fromSample(id, name) {
  const steps = [{ text: t("사양 불러오기"), state: "run" }, { text: t("부품 트리 세우기") }];
  showGen(true, t("예시 만들기"), name, steps);
  try {
    const spec = await fetch(`./assets/sculpt/${id}.json?v=${BUILD}`).then((r) => r.json());
    steps[0].state = "done"; steps[1].state = "run"; showGen(true, t("예시 만들기"), name, steps);
    await sleep(160);
    await buildSpec(spec, name);
    steps[1].state = "done"; showGen(true, t("예시 만들기"), name, steps); await sleep(220);
  } catch (e) { toast(`${t("예시를 불러오지 못했습니다")}: ${e.message}`); }
  showGen(false);
}

/* 라이브: 서버가 사양을 쓴다 / live: the server authors the spec */
async function fromInput({ text, imageDataUrl }) {
  if (!state.live) {
    return toast(t("지금은 예시만 볼 수 있습니다. 서버 모드에서 직접 만들 수 있습니다."));
  }
  const steps = [{ text: t("무엇인지 살피기"), state: "run" }, { text: t("부품으로 나누기") }, { text: t("부품 트리 세우기") }];
  showGen(true, t("3D 만들기"), text ? text.slice(0, 40) : t("사진에서"), steps);
  const t0 = performance.now();
  try {
    const r = await fetch("./api/sculpt", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: text || "", image: imageDataUrl || null, lang: document.documentElement.lang || "ko" }),
    });
    const j = await r.json();
    if (!r.ok) throw new Error(j.error || `HTTP ${r.status}`);
    steps[0].state = steps[1].state = "done"; steps[2].state = "run";
    showGen(true, t("3D 만들기"), `${((performance.now() - t0) / 1000).toFixed(1)}${t("초")}`, steps);
    await buildSpec(j.spec, text ? text.slice(0, 40) : t("사진에서"));
    steps[2].state = "done"; showGen(true, t("3D 만들기"), "", steps); await sleep(240);
  } catch (e) {
    toast(`${t("만들지 못했습니다")}: ${e.message}`);
  }
  showGen(false);
}

$("btnMake").onclick = () => {
  const text = $("prompt").value.trim();
  if (!text) return toast(t("무엇을 만들지 한 줄로 적어 주세요"));
  fromInput({ text });
};

/* 사진 / photo */
const drop = $("drop");
drop.onclick = () => $("file").click();
$("file").onchange = (e) => { const f = e.target.files?.[0]; if (f) fromFile(f); };
drop.ondragover = (e) => { e.preventDefault(); drop.classList.add("over"); };
drop.ondragleave = () => drop.classList.remove("over");
drop.ondrop = (e) => { e.preventDefault(); drop.classList.remove("over"); const f = e.dataTransfer.files?.[0]; if (f) fromFile(f); };
async function fromFile(file) {
  const dataUrl = await new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = rej; fr.readAsDataURL(file); });
  fromInput({ text: "", imageDataUrl: dataUrl });
}

$("btnNew").onclick = () => { clearModel(); $("stageEmpty").style.display = ""; $("projName").textContent = t("새 작업"); showGen(false); panes?.show("left"); };

/* ================================================================ 시작 / boot */
$("seeds").innerHTML = SEEDS.map((s) => `<button data-seed="${s}">${t(s)}</button>`).join("");
$("seeds").onclick = (e) => { const b = e.target.closest("[data-seed]"); if (b) $("prompt").value = b.dataset.seed; };

(async () => {
  /* 서버가 있으면 라이브, 없으면 예시만. 경로는 상대("./api/")로 둔다 — 한 호스트에서 /revolve/ 아래로 합쳐질 때
     드론 서버가 아니라 회전체 서버(프록시)로 가야 한다.
     Live when a server answers, examples only otherwise. The path is relative ("./api/") so that, once the
     demo is mounted under /revolve/ on a shared host, it reaches the turned-part server (via proxy), not the drone one. */
  try {
    const s = await fetch("./api/status", { cache: "no-store" }).then((r) => r.json());
    state.live = !!s.sculpt;
  } catch { state.live = false; }
  $("modeTag").textContent = state.live ? t("직접 만들기 가능") : t("예시 보기");
  $("modeTag").classList.toggle("live", state.live);

  try {
    const idx = await fetch(`./assets/sculpt/index.json?v=${BUILD}`).then((r) => r.json());
    $("chips").innerHTML = (idx.samples || []).map((s) => `
      <button class="sample" data-id="${s.id}" title="${s.prompt}">
        <img class="thumb" src="./assets/sculpt/${s.id}-preview.webp?v=${BUILD}" alt="" loading="lazy" />
        <span class="lb">${t(s.name)}</span>
      </button>`).join("");
    $("chips").onclick = (e) => {
      const b = e.target.closest(".sample"); if (!b) return;
      const s = (idx.samples || []).find((x) => x.id === b.dataset.id);
      if (s) fromSample(s.id, t(s.name));
    };
  } catch (e) { $("chips").innerHTML = `<span class="hint">${t("예시를 불러오지 못했습니다")}</span>`; }

  mountPartNav({ current: 3 });
  initI18n();
  panes = initPanes({ leftKo: "입력", rightKo: "파트" });
  initTour("sculpt");
})();

/* qa:start */
window.__vringon3 = { state, buildFromSpec, validateSpec, get scene() { return scene; }, get root() { return root; }, applyExplode, fromSample };
/* qa:end */
