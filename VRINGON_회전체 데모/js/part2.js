/* Part 2 — 다시점 도면에서 부품 하나 (워크스페이스).
   흐름: 도면 올리기 → 뷰 자동 분할 + 방향 추천 → (사람) 뷰마다 방향 확정 → 치수 문자 읽어 축척 → 방법 고르기 → 만들기 → 뷰 정합 → 내보내기.
   기하만으로는 "무엇을 어느 방향에서 본 것인지" 를 알 수 없으므로 방향은 사람이 확정한다(추천은 배치 기하로).
   치수는 도면의 문자를 읽어 정한다. 못 읽으면 그때만 한 치수를 묻는다. 지어내지 않는다. */

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import Tesseract from "../vendor/tesseract/tesseract.esm.min.js";
const { createWorker } = Tesseract;
import { splitViews, viewProfile, viewContours } from "./views.js";
import { getOcrWorker, readNumberTokens, scaleFromDims } from "./ocr-dims.js";
import { ROLES, ROLE_KO, isOrtho, suggestRoles, suggestMethod, buildOrthoPart, projectionIoU, geometryVolume } from "./multiview.js";
import { makePartMaterials, buildRevolvePart, buildExtrudePart } from "./part2-cad.js";
import { exportSTEP, exportSTL, exportGLB, exportOBJ, exportPLY, exportFBX, exportUSDA, exportUSDZ, downloadBlob } from "./shaft-export.js";
import { initTour } from "./tour.js";
import { initI18n, t } from "./i18n.js";
const roleName = (id) => t(ROLE_KO[id] || id || "");

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
  { id: "bracket", name: "L 브래킷 3면도", file: "assets/part2/bracket.svg", level: 1 },
  { id: "housing", name: "베어링 하우징", file: "assets/part2/housing.svg", level: 2 },
  { id: "elbow", name: "사각 플랜지 곡관", file: "assets/part2/elbow.svg", level: 3 },
];
const LEVEL = { 1: { cls: "l1", ko: "1단계 · 각기둥", note: "정확히 나옵니다." },
                2: { cls: "l2", ko: "2단계 · 원통 근사", note: "안쪽 형상은 근사입니다." },
                3: { cls: "l3", ko: "3단계 · 곡면", note: "만들지 못하는 부류입니다." } };

const state = { image: null, raster: null, png: null, views: [], pick: null, roles: {}, projection: "third",
  ocr: null, tokens: [], scale: null, mmPerPx: 0, part: null, name: "", sample: null, showDims: false };

/* ================================================================ 3D */
const stage = $("stage");
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.45;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
stage.appendChild(renderer.domElement);
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0C0C10);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
const camera = new THREE.PerspectiveCamera(38, 1, 0.5, 12000); camera.position.set(180, 140, 240);
const controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = true; controls.dampingFactor = 0.075;
const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
keyLight.position.set(220, 400, 260); keyLight.castShadow = true; keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.near = 20; keyLight.shadow.camera.far = 2200;
keyLight.shadow.camera.left = keyLight.shadow.camera.bottom = -500; keyLight.shadow.camera.right = keyLight.shadow.camera.top = 500;
keyLight.shadow.bias = -0.0012; keyLight.shadow.normalBias = 0.7;
scene.add(keyLight, new THREE.DirectionalLight(0xc8d2ff, 0.5).translateX(-320).translateY(180).translateZ(140), new THREE.HemisphereLight(0xc4ccdd, 0x3a3d48, 1.05), new THREE.AmbientLight(0xffffff, 0.25));
const grid = new THREE.GridHelper(2400, 60, 0x2a2a34, 0x1a1a20); grid.material.transparent = true; grid.material.opacity = 0.5; scene.add(grid);
const floor = new THREE.Mesh(new THREE.CircleGeometry(1200, 64).rotateX(-Math.PI / 2), new THREE.ShadowMaterial({ opacity: 0.4 })); floor.receiveShadow = true; scene.add(floor);
const root = new THREE.Group(); scene.add(root);
const mats = makePartMaterials();
function resize() { const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); }
new ResizeObserver(resize).observe(stage); resize();
renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });
function fitView() {
  if (!root.children.length) return;
  const bb = new THREE.Box3().setFromObject(root);
  const c = bb.getCenter(new THREE.Vector3()), r = Math.max(10, bb.getSize(new THREE.Vector3()).length() / 2);
  controls.target.copy(c);
  const vHalf = THREE.MathUtils.degToRad(camera.fov / 2), hHalf = Math.atan(Math.tan(vHalf) * Math.max(0.6, camera.aspect));
  camera.position.copy(c).add(new THREE.Vector3(0.5, 0.45, 0.75).normalize().multiplyScalar((r / Math.sin(Math.min(vHalf, hHalf))) * 1.15));
  camera.near = Math.max(0.2, r / 80); camera.far = r * 90; camera.updateProjectionMatrix(); controls.update();
}
$("btnFit").onclick = fitView;
function clearPart() { for (const o of root.children.slice()) { root.remove(o); o.geometry?.dispose(); } state.part = null; }

/* ================================================================ 시트 */
function showSheet(on) { $("sheet").classList.toggle("show", on); $("btnSheet").classList.toggle("on", on); }
$("btnSheet").onclick = () => showSheet(!$("sheet").classList.contains("show"));
$("btnDims").onclick = () => { state.showDims = !state.showDims; $("btnDims").classList.toggle("on", state.showDims); drawOverlay(); showSheet(true); };
async function rasterize(dataUrl, isSvg) {
  const img = new Image();
  await new Promise((res, rej) => { img.onload = res; img.onerror = () => rej(new Error("이미지를 열지 못했습니다")); img.src = dataUrl; });
  const w0 = img.naturalWidth || img.width, h0 = img.naturalHeight || img.height;
  const scale = isSvg ? Math.min(2.6, Math.max(1, 2400 / Math.max(1, w0))) : Math.min(1.6, 2400 / Math.max(1, w0));
  const w = Math.max(500, Math.round(w0 * scale)), h = Math.max(300, Math.round(h0 * scale));
  const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h); ctx.drawImage(img, 0, 0, w, h);
  return { imageData: ctx.getImageData(0, 0, w, h), w, h, png: cv.toDataURL("image/png") };
}
const svgToDataUrl = (svg) => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

async function loadSheet(src) {
  reset(false);
  const dataUrl = src.svg ? svgToDataUrl(src.svg) : src.dataUrl;
  let r;
  try { r = await rasterize(dataUrl, !!src.svg); } catch (e) { return toast(`도면을 열지 못했습니다: ${e.message}`); }
  state.image = { url: r.png, w: r.w, h: r.h }; state.raster = r.imageData; state.png = r.png; state.name = src.name; state.sample = src.sample || null;
  $("projName").textContent = src.name; $("sheetImg").src = r.png; $("stageEmpty").style.display = "none";
  showSheet(true);
  await detectViews();
  await readDims();
}

/* ================================================================ ① 뷰 분할 + 방향 추천 */
async function detectViews() {
  const steps = [{ text: "외형선만 남기고 성분 찾기", state: "run" }, { text: "가까운 성분을 뷰로 묶기" }, { text: "윤곽 · 구멍 따기, 배치로 방향 추천" }];
  showGen(true, "뷰 나누기", "", steps); await sleep(60);
  const res = splitViews(state.raster);
  if (!res.ok) { showGen(false); toast(res.reason || "뷰를 찾지 못했습니다"); return; }
  state.views = res.views.map((v) => Object.assign(v, { contours: viewContours(v) }));
  state.roles = suggestRoles(state.views, state.projection);
  steps.forEach((s) => (s.state = "done")); showGen(true, "뷰 나누기", "", steps); await sleep(100); showGen(false);
  $("viewBlock").style.display = ""; $("methodBlock").style.display = "";
  renderViewList(); drawOverlay(); renderCube(); renderMethod();
  pickView(state.views.find((v) => state.roles[v.id] === "front") || state.views[0]);
  toast(`뷰 ${state.views.length}개. 방향을 확인하세요`, true);
}
$("projSeg").onclick = (e) => { const b = e.target.closest("button"); if (!b) return; document.querySelectorAll("#projSeg button").forEach((x) => x.classList.toggle("on", x === b)); state.projection = b.dataset.p; state.roles = suggestRoles(state.views, state.projection); renderAll(); };
function renderViewList() {
  $("viewCount").textContent = `${state.views.length}개`;
  $("viewList").innerHTML = state.views.map((v) => `
    <div class="vrow ${state.pick === v ? "on" : ""}" data-v="${v.id}">
      <span class="n">${v.id}</span>
      <span class="m">${v.part.W}×${v.part.H} px<br/><small>${t("구멍")} ${v.contours.holes.length}${v.contours.ignored.length ? ` · ${t("안쪽 모서리")} ${v.contours.ignored.length}` : ""} · ${t("회전체 점수")} ${v.revolveScore.toFixed(2)}</small></span>
      <select data-role="${v.id}">${ROLES.map((r) => `<option value="${r.id}" ${state.roles[v.id] === r.id ? "selected" : ""}>${t(r.ko)}</option>`).join("")}</select>
    </div>`).join("");
}
$("viewList").addEventListener("click", (e) => { if (e.target.tagName === "SELECT") return; const r = e.target.closest("[data-v]"); if (r) pickView(state.views.find((v) => v.id === Number(r.dataset.v))); });
$("viewList").addEventListener("change", (e) => { const s = e.target; if (!s.dataset.role) return; setRole(Number(s.dataset.role), s.value); });
function setRole(vid, role) {
  /* 정투상 방향은 뷰 하나에만 — 같은 방향이 이미 있으면 그쪽을 참고로 돌린다 */
  if (isOrtho(role)) for (const k of Object.keys(state.roles)) if (Number(k) !== vid && state.roles[k] === role) state.roles[k] = "skip";
  state.roles[vid] = role;
  renderAll();
}
function renderAll() { renderViewList(); drawOverlay(); renderCube(); renderMethod(); }
function pickView(v) { state.pick = v || null; $("pickTag").textContent = v ? `${t("뷰")} ${v.id}` : t("뷰 없음"); renderAll(); }

function drawOverlay() {
  const ov = $("ov"); if (!state.image) return;
  const { w, h } = state.image;
  ov.setAttribute("viewBox", `0 0 ${w} ${h}`); ov.setAttribute("preserveAspectRatio", "none");
  let s = state.views.map((v) => {
    const role = state.roles[v.id], ref = !isOrtho(role);
    return `<rect class="vbox ${state.pick === v ? "on" : ""} ${ref ? "ref" : ""}" data-v="${v.id}" x="${v.part.x0 - 8}" y="${v.part.y0 - 8}" width="${v.part.W + 16}" height="${v.part.H + 16}" rx="6"/>
      <text class="vlab" x="${v.part.x0 - 2}" y="${v.part.y0 - 14}">${v.id}</text><text class="vlab role" x="${v.part.x0 + 16}" y="${v.part.y0 - 14}">${roleName(role)}</text>`;
  }).join("");
  if (state.showDims && state.scale) {
    const used = new Set((state.scale.used || []).map((u) => u.text));
    s += state.tokens.map((t) => `<rect class="dimtok ${used.has(t.text) ? "used" : ""}" x="${t.x0 - 2}" y="${t.y0 - 2}" width="${t.x1 - t.x0 + 4}" height="${t.y1 - t.y0 + 4}" rx="3"/>`).join("");
  }
  ov.innerHTML = s;
  ov.querySelectorAll(".vbox").forEach((el) => (el.onclick = () => pickView(state.views.find((v) => v.id === Number(el.dataset.v)))));
}

/* ---- 기준 정육면체: 보이는 세 면 + 나머지 세 방향 버튼. 누르면 고른 뷰에 그 방향을 준다 */
const FACES = [
  { id: "top", pts: "75,12 138,42 75,72 12,42", tx: 75, ty: 46 },
  { id: "front", pts: "12,42 75,72 75,132 12,102", tx: 43, ty: 92 },
  { id: "right", pts: "75,72 138,42 138,102 75,132", tx: 107, ty: 92 },
];
function renderCube() {
  const assigned = new Map(Object.entries(state.roles).map(([vid, r]) => [r, Number(vid)]));
  const pickRole = state.pick ? state.roles[state.pick.id] : null;
  $("cube").innerHTML = FACES.map((f) => {
    const vid = assigned.get(f.id);
    return `<polygon class="f ${vid ? "assigned" : "free"} ${pickRole === f.id ? "on" : ""}" data-face="${f.id}" points="${f.pts}" stroke="#0C0C10" stroke-width="1.5"/>
      <text x="${f.tx}" y="${f.ty}">${roleName(f.id)}${vid ? ` · ${t("뷰")} ${vid}` : ""}</text>`;
  }).join("");
  $("cube").querySelectorAll(".f").forEach((el) => (el.onclick = () => { if (!state.pick) return toast("먼저 뷰를 고르세요"); setRole(state.pick.id, el.dataset.face); }));
  $("roleBtns").innerHTML = ROLES.filter((r) => !FACES.some((f) => f.id === r.id)).map((r) => {
    const vid = assigned.get(r.id);
    return `<button data-role="${r.id}" class="${pickRole === r.id ? "on" : ""}">${t(r.ko)}${vid && isOrtho(r.id) ? ` · ${t("뷰")} ${vid}` : ""}</button>`;
  }).join("");
  $("roleBtns").querySelectorAll("button").forEach((b) => (b.onclick = () => { if (!state.pick) return toast("먼저 뷰를 고르세요"); setRole(state.pick.id, b.dataset.role); }));
  $("cubeHint").innerHTML = state.pick
    ? `<b>${t("뷰")} ${state.pick.id}</b>: <b>${roleName(state.roles[state.pick.id])}</b>`
    : "왼쪽 목록이나 도면 위 상자에서 뷰를 고른 뒤 면을 누르세요.";
}

/* ================================================================ ② 치수 읽기 → 축척 */
let ocrReady = null;
async function ensureOcr() {
  if (!ocrReady) {
    $("ocrTag").textContent = "문자 인식 불러오는 중…";
    ocrReady = getOcrWorker({ workerPath: "./vendor/tesseract/worker.min.js", corePath: "./vendor/tesseract/", langPath: "./vendor/tesseract" }, createWorker)
      .then((w) => { $("ocrTag").textContent = "문자 인식 준비됨"; return w; })
      .catch((e) => { $("ocrTag").textContent = "문자 인식 없음"; throw e; });
  }
  return ocrReady;
}
async function readDims() {
  if (!state.raster) return;
  $("dimBlock").style.display = "";
  $("dimTag").textContent = "읽는 중…"; $("dimList").innerHTML = ""; $("dimNote").textContent = "";
  let worker;
  try { worker = await ensureOcr(); } catch (e) { return dimsFailed(`문자 인식 엔진을 불러오지 못했습니다 (${e.message}).`); }
  const t0 = performance.now();
  try {
    state.tokens = await readNumberTokens(worker, state.png);
    state.scale = scaleFromDims(state.tokens, state.raster);
  } catch (e) { return dimsFailed(`치수를 읽는 중 오류: ${e.message}`); }
  const sc = state.scale, ms = Math.round(performance.now() - t0);
  $("dimTag").textContent = `${state.tokens.length}개 읽음 · ${(ms / 1000).toFixed(1)}초`;
  const usedSet = new Set((sc.used || []).map((u) => u.text)), rejSet = new Set((sc.rejected || []).map((u) => u.text));
  $("dimList").innerHTML = state.tokens.map((t) => `<span class="${usedSet.has(t.text) ? "used" : rejSet.has(t.text) ? "rej" : ""}" title="${t.kind}">${t.text}</span>`).join("");
  if (sc.ok) {
    state.mmPerPx = sc.mmPerPx;
    $("dimScale").textContent = `1 px = ${sc.mmPerPx.toFixed(4)} mm`;
    $("dimAgree").textContent = `${sc.agree} / ${sc.total}`;
    $("dimNote").innerHTML = sc.agree < 3 ? "맞는 치수가 적습니다. 아는 치수 하나를 넣어 확인할 수 있습니다." : "여러 치수가 같은 축척을 가리킵니다.";
    $("dimManual").style.display = sc.agree < 3 ? "" : "none";
  } else dimsFailed(sc.reason || "치수를 읽지 못했습니다.");
  drawOverlay(); renderMethod();
}
function dimsFailed(msg) {
  state.mmPerPx = 0; state.scale = state.scale && state.scale.ok ? state.scale : { ok: false, used: [], rejected: [] };
  $("dimTag").textContent = "읽지 못함"; $("dimScale").textContent = "—"; $("dimAgree").textContent = "—";
  $("dimNote").innerHTML = `${msg} 고른 뷰의 가로 실제 길이를 넣어 주세요.`;
  $("dimManual").style.display = "";
  renderMethod();
}
$("btnReadDims").onclick = readDims;
$("manualLen").onchange = () => {
  const L = Number($("manualLen").value); const v = state.pick;
  if (!L || !v) return;
  state.mmPerPx = L / v.part.W;
  $("dimScale").textContent = `1 px = ${state.mmPerPx.toFixed(4)} mm (뷰 ${v.id} 가로 ${L} mm 입력)`;
  renderMethod(); toast("입력한 치수로 축척을 정했습니다", true);
};

/* ================================================================ ③ 방법 · 만들기 */
const chosenMethod = () => document.querySelector("#methodSeg button.on")?.dataset.m || "auto";
$("methodSeg").onclick = (e) => { const b = e.target.closest("button"); if (!b) return; document.querySelectorAll("#methodSeg button").forEach((x) => x.classList.toggle("on", x === b)); renderMethod(); };
function assigned() { return state.views.map((v) => ({ view: v, role: state.roles[v.id] || "skip" })); }
function effectiveMethod() {
  const m = chosenMethod();
  if (m !== "auto") return { method: m, why: "직접 고름" };
  return suggestMethod(assigned());
}
function renderMethod() {
  const em = effectiveMethod();
  $("methodWhy").textContent = em.why;
  $("thickRow").style.display = em.method === "plate" ? "" : "none";
  const lv = state.sample?.level;
  $("levelNote").innerHTML = lv ? `<span class="lvl ${LEVEL[lv].cls}">${LEVEL[lv].ko}</span> ${LEVEL[lv].note}` : "";
  const can = em.method !== "none" && em.method !== "unsupported" && state.mmPerPx > 0;
  $("btnMake").disabled = !can;
  $("btnMake").textContent = em.method === "unsupported" ? "이 부류는 만들 수 없습니다" : !state.mmPerPx ? "먼저 치수를 정해 주세요" : "부품 만들기";
}
$("btnMake").onclick = async () => {
  const em = effectiveMethod(); if (!state.mmPerPx) return;
  const steps = [{ text: "뷰마다 윤곽을 그 방향으로 밀어내기", state: "run" }, { text: "전부 교집합하기" }, { text: "각 뷰로 다시 투영해 도면과 대조" }];
  showGen(true, "부품 만들기", "", steps); await sleep(60);
  clearPart();
  let mesh = null, result = null;
  const mm = state.mmPerPx, A = assigned();
  if (em.method === "ortho") {
    const r = buildOrthoPart(A, mm, {});
    if (!r.ok) { showGen(false); return toast(r.reason); }
    steps[0].state = steps[1].state = "done"; steps[2].state = "run"; showGen(true, "부품 만들기", "", steps); await sleep(30);
    const ious = A.filter((a) => isOrtho(a.role)).map((a) => ({ ...projectionIoU(r.geometry, a.view, a.role, mm, r.ext), viewId: a.view.id }));
    r.geometry.center();
    mesh = new THREE.Mesh(r.geometry, mats.plate.clone());
    result = { kind: "ortho", size: r.size, volume: r.volume_cm3, ious, checks: r.checks, notes: r.notes };
  } else if (em.method === "revolve") {
    const a = A.find((x) => isOrtho(x.role)); if (!a) { showGen(false); return toast("회전체로 볼 뷰를 정해 주세요"); }
    const prof = viewProfile(a.view, 420), rMm = Float64Array.from(prof, (p) => p * mm);
    mesh = buildRevolvePart(rMm, a.view.part.W * mm, { material: mats.revolve.clone() });
    const bb = new THREE.Box3().setFromObject(mesh), sz = bb.getSize(new THREE.Vector3());
    result = { kind: "revolve", size: { X: sz.x, Y: sz.y, Z: sz.z }, volume: geometryVolume(mesh.geometry) / 1000, ious: [], checks: [], notes: ["뷰 하나를 축 둘레로 돌렸습니다"] };
  } else if (em.method === "plate") {
    const a = A.find((x) => isOrtho(x.role)); if (!a) { showGen(false); return toast("판으로 볼 뷰를 정해 주세요"); }
    const t = Math.max(0.2, Number($("thick").value) || 10);
    const outer = a.view.contours.outer.map(([x, y]) => [x * mm, y * mm]), holes = a.view.contours.holes.map((h) => h.map(([x, y]) => [x * mm, y * mm]));
    mesh = buildExtrudePart(outer, holes, t, { material: mats.plate.clone() });
    if (!mesh) { showGen(false); return toast("윤곽으로 형상을 만들지 못했습니다"); }
    const bb = new THREE.Box3().setFromObject(mesh), sz = bb.getSize(new THREE.Vector3());
    result = { kind: "plate", size: { X: sz.x, Y: sz.y, Z: sz.z }, volume: geometryVolume(mesh.geometry) / 1000, ious: [], checks: [], notes: [`두께 ${t} mm 는 입력값입니다`] };
  } else { showGen(false); return; }
  mesh.castShadow = mesh.receiveShadow = true;
  const bb0 = new THREE.Box3().setFromObject(mesh); mesh.position.y -= bb0.min.y;
  root.add(mesh); state.part = { mesh, result };
  steps.forEach((s) => (s.state = "done")); showGen(true, "부품 만들기", "", steps); await sleep(120); showGen(false);
  showSheet(false); fitView(); renderResult(); renderExport();
  toast("부품을 만들었습니다", true);
};
function renderResult() {
  const p = state.part; if (!p) return $("resultBlock").style.display = "none";
  const r = p.result;
  $("resultBlock").style.display = "";
  const lv = state.sample?.level || (r.kind === "ortho" ? 1 : 2);
  $("lvlTag").className = `lvl ${LEVEL[lv].cls}`; $("lvlTag").textContent = LEVEL[lv].ko;
  $("rSize").textContent = `${fmt(r.size.X)} × ${fmt(r.size.Y)} × ${fmt(r.size.Z)} mm`;
  $("rVol").textContent = `${fmt(r.volume, 1)} cm³`;
  $("rTris").textContent = `${(p.mesh.geometry.attributes.position.count / 3).toLocaleString()}개`;
  const rows = r.ious.map((x) => { const pct = x.iou * 100; const cls = pct >= 95 ? "ok" : pct >= 85 ? "warn" : "bad"; return `<div class="r"><span>${roleName(x.role)}</span><b class="${cls}">${pct.toFixed(1)}%</b></div>`; });
  for (const c of r.checks) rows.push(`<div class="r"><span>${c.axis} ${t("크기")} · ${roleName(c.a.role)} ${t("와")} ${roleName(c.b.role)}</span><b class="${c.ok ? "ok" : "warn"}">차이 ${c.diffPct}%</b></div>`);
  $("rChecks").innerHTML = rows.join("") || `<div class="mini">대조할 정투상 뷰가 없습니다.</div>`;
  const low = r.ious.filter((x) => x.iou < 0.9);
  $("rNote").innerHTML = (r.notes || []).concat(low.length ? [t("{} 정합이 낮습니다. 방향과 구멍을 확인하세요.", { "": low.map((x) => roleName(x.role)).join(", ") })] : []).join("<br/>");
}

/* ================================================================ 내보내기 */
function renderExport() {
  if (!state.part) return $("exportBlock").style.display = "none";
  $("exportBlock").style.display = "";
  const id = (state.name || "part").replace(/\.[^.]+$/, "").replace(/[^A-Za-z0-9_-]+/g, "_") || "part";
  const row = (f, n, fn) => { const d = document.createElement("div"); d.className = "exp"; d.innerHTML = `<span class="f">${f}</span><span class="n">${n}</span><button title="내려받기"><svg><use href="#i-dl"/></svg></button>`; d.querySelector("button").onclick = fn; return d; };
  const list = $("dlList"); list.innerHTML = "";
  const spec = { part2: true, sheet: state.name, mm_per_px: state.mmPerPx, roles: Object.fromEntries(state.views.map((v) => [v.id, state.roles[v.id]])), result: state.part.result };
  list.appendChild(row("STEP·면", "삼각형 면 셸 (교집합 결과는 솔리드로 닫히지 않음)", () => downloadBlob(exportSTEP(root, id), `${id}.step`, "application/step")));
  list.appendChild(row("STL", "3D 프린팅", () => downloadBlob(exportSTL(root), `${id}.stl`, "model/stl")));
  list.appendChild(row("GLB", "재질 포함 · 웹 뷰어", async () => downloadBlob(await exportGLB(root), `${id}.glb`, "model/gltf-binary")));
  list.appendChild(row("OBJ", "메시 (mm)", () => downloadBlob(exportOBJ(root), `${id}.obj`, "text/plain")));
  list.appendChild(row("FBX", "Maya, 3ds Max, Unity, Unreal", () => downloadBlob(exportFBX(root), `${id}.fbx`, "application/octet-stream")));
  list.appendChild(row("USD", "메시와 뷰·치수 정보를 함께", () => downloadBlob(exportUSDA(root, spec), `${id}.usda`, "text/plain")));
  list.appendChild(row("USDZ", "AR 미리보기 패키지", async () => downloadBlob(await exportUSDZ(root), `${id}.usdz`, "model/vnd.usdz+zip")));
  list.appendChild(row("PLY", "정점과 면", () => downloadBlob(exportPLY(root), `${id}.ply`, "text/plain")));
  list.appendChild(row("JSON", "뷰 방향 · 축척 · 결과", () => downloadBlob(new Blob([JSON.stringify(spec, null, 2)], { type: "application/json" }), `${id}.part2.json`)));
  $("exportNote").textContent = "";
}

/* ================================================================ 입력 · 초기화 */
function showGen(on, title, sub, steps) {
  $("gen").classList.toggle("on", on);
  if (title) $("genTitle").textContent = title;
  if (sub !== undefined) $("genSub").textContent = sub;
  $("genBar").style.width = `${((steps || []).filter((s) => s.state === "done").length / Math.max(1, (steps || []).length)) * 100}%`;
  $("genSteps").innerHTML = (steps || []).map((s) => `<div class="gen-step ${s.state || ""}"><span class="dot"></span>${s.text}</div>`).join("");
}
function reset(full = true) {
  clearPart();
  state.views = []; state.pick = null; state.roles = {}; state.tokens = []; state.scale = null; state.mmPerPx = 0; state.sample = null;
  for (const id of ["viewBlock", "dimBlock", "methodBlock", "resultBlock", "exportBlock"]) $(id).style.display = "none";
  $("ov").innerHTML = ""; $("manualLen").value = ""; $("dimManual").style.display = "none";
  renderCube(); $("pickTag").textContent = "뷰 없음";
  if (full) { state.image = null; state.raster = null; $("projName").textContent = "새 도면"; showSheet(false); $("stageEmpty").style.display = ""; }
}
$("btnNew").onclick = () => { reset(true); toast("처음으로 돌아왔습니다"); };
const drop = $("drop"), fileInput = $("file");
const SKIP_KEY = "vringon.part2.check.v2";
function openCheck() { $("checkModal").classList.add("show"); }
function closeCheck(pick) { $("checkModal").classList.remove("show"); if ($("chkSkip").checked) { try { localStorage.setItem(SKIP_KEY, "1"); } catch {} } if (pick) fileInput.click(); }
$("btnPickFile").onclick = () => closeCheck(true);
$("checkModal").onclick = (e) => { if (e.target === $("checkModal")) closeCheck(false); };
$("linkCheck").onclick = (e) => { e.preventDefault(); openCheck(); };
drop.onclick = () => { let skip = false; try { skip = localStorage.getItem(SKIP_KEY) === "1"; } catch {} if (skip) fileInput.click(); else openCheck(); };
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
  await loadSheet({ name: s.name, svg, sample: s });
};
renderCube();
initI18n();
initTour("part2");
ensureOcr().catch(() => {});   /* 미리 불러 둔다 (첫 판독을 기다리지 않게) */

/* qa:start */
window.__vringon2 = { state, splitViews, viewContours, suggestRoles, buildOrthoPart, get scene() { return scene; }, get root() { return root; }, setRole, pickView, readDims,
  forceRender() { controls.update(); renderer.render(scene, camera); } };
/* qa:end */
