/* Part 2 — 다시점 도면 부품 워크스페이스.
   흐름: 도면 올리기 → 뷰 자동 분할 → 뷰 고르기 → 유형·두께 정하기 → 부품 만들기 → 쌓기 → 내보내기.
   기하만으로는 "무엇을 어느 방향에서 본 것인지" 를 알 수 없으므로(캐스터 평면도가 회전 점수 1.00),
   판정은 사람이 하고 계산은 전부 이 브라우저가 한다. 없는 치수는 만들지 않는다(축척을 넣기 전에는 만들 수 없다). */

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { splitViews, viewProfile, viewContours, suggestKind } from "./views.js";
import { makePartMaterials, buildRevolvePart, buildExtrudePart, meshVolumeCm3, arrangeRow } from "./part2-cad.js";
import { exportSTEP, exportSTL, exportGLB, exportOBJ, exportPLY, exportFBX, downloadBlob } from "./shaft-export.js";
import { initTour } from "./tour.js";

const BUILD = "dev";
const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fmt = (v, d = 1) => (Number.isFinite(v) ? (Math.round(v * 10 ** d) / 10 ** d).toString() : "—");
function toast(msg, ok = false) {
  const t = document.createElement("div");
  t.className = `toast${ok ? " ok" : ""}`; t.textContent = msg;
  $("toasts").appendChild(t); setTimeout(() => t.remove(), 4200);
}
const SAMPLES = [
  { id: "caster", name: "캐스터 조립도", file: "assets/part2/caster.svg" },
  { id: "flange", name: "플랜지 3면도", file: "assets/part2/flange.svg" },
  { id: "sole", name: "신발 밑창", file: "assets/part2/sole.svg" },
];

const state = { image: null, raster: null, views: [], pick: null, mmPerPx: 0, parts: [], name: "" };

/* ================================================================ 3D */
const stage = $("stage");
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.45;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
stage.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0C0C10);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
const camera = new THREE.PerspectiveCamera(38, 1, 0.5, 12000);
camera.position.set(180, 140, 240);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.075;
const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
keyLight.position.set(220, 400, 260); keyLight.castShadow = true; keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.near = 20; keyLight.shadow.camera.far = 2200;
keyLight.shadow.camera.left = keyLight.shadow.camera.bottom = -500; keyLight.shadow.camera.right = keyLight.shadow.camera.top = 500;
keyLight.shadow.bias = -0.0012; keyLight.shadow.normalBias = 0.7;
scene.add(keyLight, new THREE.DirectionalLight(0xc8d2ff, 0.5).translateX(-320).translateY(180).translateZ(140),
  new THREE.HemisphereLight(0xc4ccdd, 0x3a3d48, 1.05), new THREE.AmbientLight(0xffffff, 0.25));
const grid = new THREE.GridHelper(2400, 60, 0x2a2a34, 0x1a1a20);
grid.material.transparent = true; grid.material.opacity = 0.5; scene.add(grid);
const floor = new THREE.Mesh(new THREE.CircleGeometry(1200, 64).rotateX(-Math.PI / 2), new THREE.ShadowMaterial({ opacity: 0.4 }));
floor.receiveShadow = true; scene.add(floor);
const root = new THREE.Group(); scene.add(root);
const mats = makePartMaterials();
function resize() { const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); }
new ResizeObserver(resize).observe(stage); resize();
renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });
function fitView() {
  if (!state.parts.length) return;
  const bb = new THREE.Box3().setFromObject(root);
  const c = bb.getCenter(new THREE.Vector3());
  const r = Math.max(10, bb.getSize(new THREE.Vector3()).length() / 2);
  controls.target.copy(c);
  const vHalf = THREE.MathUtils.degToRad(camera.fov / 2), hHalf = Math.atan(Math.tan(vHalf) * Math.max(0.6, camera.aspect));
  const dist = (r / Math.sin(Math.min(vHalf, hHalf))) * 1.15;
  camera.position.copy(c).add(new THREE.Vector3(0.5, 0.45, 0.75).normalize().multiplyScalar(dist));
  camera.near = Math.max(0.2, r / 80); camera.far = r * 90; camera.updateProjectionMatrix(); controls.update();
}
$("btnFit").onclick = fitView;

/* ================================================================ 도면 시트 */
function showSheet(on) { $("sheet").classList.toggle("show", on); $("btnSheet").classList.toggle("on", on); }
$("btnSheet").onclick = () => showSheet(!$("sheet").classList.contains("show"));

async function rasterize(dataUrl, isSvg) {
  const img = new Image();
  await new Promise((res, rej) => { img.onload = res; img.onerror = () => rej(new Error("이미지를 열지 못했습니다")); img.src = dataUrl; });
  const w0 = img.naturalWidth || img.width, h0 = img.naturalHeight || img.height;
  const scale = isSvg ? Math.min(2.6, Math.max(1, 2600 / Math.max(1, w0))) : Math.min(1.6, 2200 / Math.max(1, w0));
  const w = Math.max(500, Math.round(w0 * scale)), h = Math.max(300, Math.round(h0 * scale));
  const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  return { imageData: ctx.getImageData(0, 0, w, h), w, h, png: cv.toDataURL("image/png") };
}
const svgToDataUrl = (svg) => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

async function loadSheet(src) {
  reset(false);
  const dataUrl = src.svg ? svgToDataUrl(src.svg) : src.dataUrl;
  let r;
  try { r = await rasterize(dataUrl, !!src.svg); } catch (e) { return toast(`도면을 열지 못했습니다: ${e.message}`); }
  state.image = { url: src.svg ? r.png : dataUrl, w: r.w, h: r.h };
  state.raster = r.imageData;
  state.name = src.name;
  $("projName").textContent = src.name;
  $("sheetImg").src = state.image.url;
  $("stageEmpty").style.display = "none";
  showSheet(true);
  await detectViews();
}

/* ================================================================ 뷰 분할 */
async function detectViews() {
  const steps = [{ text: "외형선만 남기고 성분 찾기", state: "run" }, { text: "가까운 성분을 뷰로 묶기" }, { text: "뷰마다 대칭·평탄·구멍 재기" }];
  showGen(true, "뷰 나누기", "", steps);
  await sleep(60);
  const res = splitViews(state.raster);
  steps.forEach((s) => (s.state = "done")); showGen(true, "뷰 나누기", "", steps);
  await sleep(120); showGen(false);
  if (!res.ok) { toast(res.reason || "뷰를 찾지 못했습니다"); return; }
  state.views = res.views.map((v) => {
    const c = viewContours(v);
    return Object.assign(v, { contours: c, suggest: suggestKind(v), used: 0 });
  });
  renderViewList(); drawBoxes();
  $("viewBlock").style.display = ""; $("scaleBlock").style.display = "";
  $("hintBox").innerHTML = `뷰 <b>${state.views.length}개</b>를 찾았습니다. 도면에서 상자를 누르거나 왼쪽 목록에서 뷰를 고르세요.`;
  toast(`뷰 ${state.views.length}개를 찾았습니다`, true);
}
function showGen(on, title, sub, steps) {
  $("gen").classList.toggle("on", on);
  if (title) $("genTitle").textContent = title;
  if (sub !== undefined) $("genSub").textContent = sub;
  $("genBar").style.width = `${(steps || []).filter((s) => s.state === "done").length / Math.max(1, (steps || []).length) * 100}%`;
  $("genSteps").innerHTML = (steps || []).map((s) => `<div class="gen-step ${s.state || ""}"><span class="dot"></span>${s.text}</div>`).join("");
}
const KIND_KO = { revolve: "회전체", plate: "판", extrude: "윤곽 압출" };
function renderViewList() {
  $("viewCount").textContent = `${state.views.length}개`;
  $("viewList").innerHTML = state.views.map((v) => `
    <div class="vrow ${state.pick === v ? "on" : ""} ${v.used ? "used" : ""}" data-v="${v.id}">
      <span class="n">${v.id}</span>
      <span class="m">${v.W}×${v.H}<br/><span class="s">추천 ${KIND_KO[v.suggest.kind]}${v.contours.holes.length ? ` · 구멍 ${v.contours.holes.length}` : ""}</span></span>
      <span class="s">회전 ${v.revolveScore.toFixed(2)}</span>
    </div>`).join("");
}
$("viewList").onclick = (e) => { const r = e.target.closest("[data-v]"); if (r) pickView(state.views.find((v) => v.id === Number(r.dataset.v))); };

function drawBoxes() {
  const ov = $("ov"); const { w, h } = state.image;
  ov.setAttribute("viewBox", `0 0 ${w} ${h}`);
  ov.setAttribute("preserveAspectRatio", "none");
  ov.innerHTML = state.views.map((v) => `
    <rect class="vbox ${state.pick === v ? "on" : ""} ${v.used ? "used" : ""}" data-v="${v.id}" x="${v.x0 - 6}" y="${v.y0 - 6}" width="${v.W + 12}" height="${v.H + 12}" rx="6"/>
    <text class="vlab" x="${v.x0 + 4}" y="${v.y0 - 12}">${v.id}${v.used ? " ✓" : ""}</text>`).join("");
  ov.querySelectorAll(".vbox").forEach((el) => (el.onclick = () => pickView(state.views.find((v) => v.id === Number(el.dataset.v)))));
}

function pickView(v) {
  if (!v) return;
  state.pick = v;
  $("makeBlock").style.display = "";
  $("pickTag").textContent = `뷰 ${v.id}`;
  $("pickSize").textContent = `${v.W} × ${v.H} px`;
  $("pickScore").textContent = v.revolveScore.toFixed(2);
  $("pickShape").textContent = `${v.contours.outer ? `${v.contours.outer.length}점` : "윤곽 없음"} · 구멍 ${v.contours.holes.length}개`;
  setKind(v.suggest.kind);
  $("kindWhy").textContent = `추천: ${KIND_KO[v.suggest.kind]} — ${v.suggest.why}`;
  renderViewList(); drawBoxes();
}
function setKind(k) {
  document.querySelectorAll("#kindSeg button").forEach((b) => b.classList.toggle("on", b.dataset.k === k));
  $("thickRow").style.display = k === "revolve" ? "none" : "";
}
$("kindSeg").onclick = (e) => { const b = e.target.closest("button"); if (b) setKind(b.dataset.k); };
const chosenKind = () => document.querySelector("#kindSeg button.on")?.dataset.k || "plate";

/* ================================================================ 부품 만들기 */
$("btnMake").onclick = () => {
  const v = state.pick; if (!v) return;
  const len = Number($("scaleLen").value) || 0;
  if (!state.mmPerPx && !len) {
    toast("먼저 왼쪽 축척에 이 뷰의 가로 실제 길이를 넣어 주세요");
    $("scaleLen").focus(); $("scaleLen").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (!state.mmPerPx) {
    state.mmPerPx = len / v.W;
    $("scaleNote").innerHTML = `1 px = <b>${state.mmPerPx.toFixed(4)} mm</b> (뷰 ${v.id} 의 가로 ${len} mm 기준)`;
  }
  const kind = chosenKind();
  const mm = state.mmPerPx;
  let mesh = null, meta = {};
  if (kind === "revolve") {
    const prof = viewProfile(v, 420);
    const rMm = Float64Array.from(prof, (p) => p * mm);
    mesh = buildRevolvePart(rMm, v.W * mm, { material: mats.revolve.clone() });
    meta = { 길이: `${fmt(v.W * mm, 1)} mm`, 최대지름: `⌀${fmt(2 * Math.max(...rMm), 1)} mm` };
  } else {
    if (!v.contours.outer) return toast("이 뷰에서 닫힌 윤곽을 찾지 못했습니다");
    const t = Math.max(0.2, Number($("thick").value) || 10);
    const outer = v.contours.outer.map(([x, y]) => [x * mm, y * mm]);
    const holes = v.contours.holes.map((h) => h.map(([x, y]) => [x * mm, y * mm]));
    mesh = buildExtrudePart(outer, holes, t, { material: (kind === "plate" ? mats.plate : mats.extrude).clone() });
    if (!mesh) return toast("윤곽으로 형상을 만들지 못했습니다");
    meta = { 크기: `${fmt(v.W * mm, 1)} × ${fmt(v.H * mm, 1)} mm`, 두께: `${fmt(t, 1)} mm`, 구멍: `${holes.length}개` };
  }
  const part = { id: state.parts.length + 1, kind, view: v.id, mesh, meta, vol: meshVolumeCm3(mesh) };
  mesh.name = `part${part.id}:${kind}`;
  state.parts.push(part);
  root.add(mesh);
  arrangeRow(state.parts.map((p) => p.mesh));
  v.used = (v.used || 0) + 1;
  renderParts(); renderViewList(); drawBoxes();
  showSheet(false); fitView();
  $("exportBlock").style.display = ""; renderExport();
  toast(`부품 ${part.id} (${KIND_KO[kind]}) 을 만들었습니다`, true);
};

function renderParts() {
  $("partsBlock").style.display = state.parts.length ? "" : "none";
  $("partCount").textContent = `${state.parts.length}개`;
  $("partList").innerHTML = state.parts.map((p) => `
    <div class="prow" data-p="${p.id}">
      <span class="k"><b>${p.id}. ${KIND_KO[p.kind]}</b><br/><span class="t">뷰 ${p.view} · ${Object.entries(p.meta).map(([k, v]) => `${k} ${v}`).join(" · ")}</span></span>
      <button title="삭제">×</button></div>`).join("");
  $("totVol").textContent = `${fmt(state.parts.reduce((a, p) => a + p.vol, 0), 1)} cm³`;
}
$("partList").onclick = (e) => {
  const b = e.target.closest("button"); if (!b) return;
  const id = Number(b.closest("[data-p]").dataset.p);
  const i = state.parts.findIndex((p) => p.id === id); if (i < 0) return;
  root.remove(state.parts[i].mesh); state.parts[i].mesh.geometry.dispose();
  const v = state.views.find((x) => x.id === state.parts[i].view); if (v) v.used = Math.max(0, (v.used || 1) - 1);
  state.parts.splice(i, 1);
  arrangeRow(state.parts.map((p) => p.mesh));
  renderParts(); renderViewList(); drawBoxes(); fitView();
  if (!state.parts.length) $("exportBlock").style.display = "none";
};

/* ================================================================ 내보내기 */
function renderExport() {
  const id = (state.name || "parts").replace(/\.[^.]+$/, "").replace(/[^A-Za-z0-9_-]+/g, "_") || "parts";
  const row = (f, n, fn) => { const d = document.createElement("div"); d.className = "exp"; d.innerHTML = `<span class="f">${f}</span><span class="n">${n}</span><button title="내려받기"><svg><use href="#i-dl"/></svg></button>`; d.querySelector("button").onclick = fn; return d; };
  const list = $("dlList"); list.innerHTML = "";
  list.appendChild(row("STEP·면", "삼각형 면 · 기계 CAD", () => downloadBlob(exportSTEP(root, id), `${id}.step`, "application/step")));
  list.appendChild(row("STL", "3D 프린팅", () => downloadBlob(exportSTL(root), `${id}.stl`, "model/stl")));
  list.appendChild(row("GLB", "재질 포함 · 웹 뷰어", async () => downloadBlob(await exportGLB(root), `${id}.glb`, "model/gltf-binary")));
  list.appendChild(row("OBJ", "메시 (mm)", () => downloadBlob(exportOBJ(root), `${id}.obj`, "text/plain")));
  list.appendChild(row("FBX", "Maya, 3ds Max, Unity, Unreal", () => downloadBlob(exportFBX(root), `${id}.fbx`, "application/octet-stream")));
  list.appendChild(row("PLY", "정점과 면 (해석 도구)", () => downloadBlob(exportPLY(root), `${id}.ply`, "text/plain")));
  list.appendChild(row("JSON", "부품 목록과 치수", () => downloadBlob(new Blob([JSON.stringify({
    sheet: state.name, mm_per_px: state.mmPerPx,
    parts: state.parts.map((p) => ({ id: p.id, kind: p.kind, view: p.view, ...p.meta, volume_cm3: +p.vol.toFixed(2) })),
  }, null, 2)], { type: "application/json" }), `${id}.parts.json`)));
  $("exportNote").textContent = `부품 ${state.parts.length}개를 한 파일로 내보냅니다. 배치는 보기용이며 조립 위치가 아닙니다.`;
}

/* ================================================================ 입력 */
function reset(full = true) {
  for (const p of state.parts) { root.remove(p.mesh); p.mesh.geometry.dispose(); }
  state.parts = []; state.views = []; state.pick = null; state.mmPerPx = 0;
  $("viewBlock").style.display = "none"; $("scaleBlock").style.display = "none";
  $("makeBlock").style.display = "none"; $("partsBlock").style.display = "none"; $("exportBlock").style.display = "none";
  $("ov").innerHTML = ""; $("scaleLen").value = "";
  $("scaleNote").textContent = "한 번만 넣으면 도면 전체에 적용됩니다. 넣기 전에는 실제 치수를 알 수 없습니다.";
  $("hintBox").innerHTML = "도면을 올리면 뷰를 자동으로 나눕니다. 뷰를 고르고 유형을 정한 뒤 <b>부품 만들기</b> 를 누르세요.";
  if (full) { state.image = null; state.raster = null; $("projName").textContent = "새 도면"; showSheet(false); $("stageEmpty").style.display = ""; }
}
$("btnNew").onclick = () => { reset(true); toast("처음으로 돌아왔습니다"); };
const drop = $("drop"), fileInput = $("file");
drop.onclick = () => fileInput.click();
fileInput.onchange = async () => { const f = fileInput.files[0]; if (f) await fromFile(f); fileInput.value = ""; };
drop.ondragover = (e) => { e.preventDefault(); drop.classList.add("over"); };
drop.ondragleave = () => drop.classList.remove("over");
drop.ondrop = async (e) => { e.preventDefault(); drop.classList.remove("over"); const f = e.dataTransfer.files?.[0]; if (f) await fromFile(f); };
async function fromFile(file) {
  const isSvg = /svg/i.test(file.type) || /\.svg$/i.test(file.name);
  if (isSvg) return loadSheet({ name: file.name, svg: await file.text() });
  const dataUrl = await new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = rej; fr.readAsDataURL(file); });
  return loadSheet({ name: file.name, dataUrl });
}
$("chips").innerHTML = SAMPLES.map((s) => `<button class="sample" data-id="${s.id}" title="${s.name}"><img class="thumb" src="./${s.file}?v=${BUILD}" alt="" loading="lazy" style="background:#fff" /><span class="lb">${s.name}</span></button>`).join("");
$("chips").onclick = async (e) => {
  const b = e.target.closest(".sample"); if (!b) return;
  const s = SAMPLES.find((x) => x.id === b.dataset.id); if (!s) return;
  const svg = await fetch(`./${s.file}?v=${BUILD}`).then((r) => r.text());
  await loadSheet({ name: s.name, svg });
};
initTour("part2");

/* qa:start */
window.__vringon2 = { state, splitViews, viewContours, viewProfile, get scene() { return scene; }, get root() { return root; },
  forceRender() { controls.update(); renderer.render(scene, camera); } };
/* qa:end */
