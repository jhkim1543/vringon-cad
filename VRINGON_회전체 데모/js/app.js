/* VRINGON 회전체 — 워크스페이스 (index.html 의 두뇌)
   4단계: 도면 입력 → 판독(사양) → 3D CAD → 검증. 내보내기는 상시 패널, 조립·시뮬은 토글.
   정적 모드에서는 샘플의 판독 결과를 재생하고 업로드는 브라우저 외형 판독으로,
   라이브 모드에서는 서버 판독이 실제로 돈다. 그 외는 모두 이 브라우저에서 실행된다.
   사용자에게 보이는 말에는 알고리즘·라이브러리 이름을 쓰지 않는다(외부 공유용). */

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { validateShaft, normalizeShaft, DSL_VERSION } from "./shaft-schema.js";
import { computeMass, totalLength, maxDiameter, buildTopLine, collectEvents } from "./shaft-profile.js";
import { densityOf } from "./shaft-standards.js";
import { buildShaft3D, makeMaterials, setSectionPlanes } from "./shaft-cad.js";
import { drawShaft, toSVG } from "./shaft-drawing.js";
import { extractHeuristic, extractViaServer } from "./shaft-extract.js";
import { verifyExtraction, goldenMetrics } from "./shaft-verify.js";
import { sampleShaft } from "./shaft-sampler.js";
import { analyzeMates, matesSummary } from "./shaft-mates.js";
import { PART_TYPES, typeOf, inferPartType } from "./part-types.js";
import { buildAssembly, createAssemblySim, assemblyChecks, makeMateMaterials, makeSpinMarker } from "./shaft-assembly.js";
import { initTour } from "./tour.js";
import { exportSTEP, exportSTL, exportGLB, exportOBJ, exportUSDA, exportUSDZ, exportFBX, exportPLY, exportDrawingDXF, exportDrawingSVG, exportJSON, downloadBlob } from "./shaft-export.js";

const BUILD = "dev";
const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fmt = (v, d = 1) => (Number.isFinite(v) ? (Math.round(v * 10 ** d) / 10 ** d).toString() : "—");

function toast(msg, ok = false) {
  const t = document.createElement("div");
  t.className = `toast${ok ? " ok" : ""}`; t.textContent = msg;
  $("toasts").appendChild(t); setTimeout(() => t.remove(), 4200);
}

/* ================================================================ 상태 */
const state = {
  mode: "static", serverStep: false, samples: [], sample: null,
  source: null,        /* {kind:'sample'|'upload'|'synthetic', name, image(dataURL), imgW, imgH, svg?, gold?, id} */
  raster: null,        /* ImageData 로 판독용 */
  extraction: null,    /* {method, dsl, dims_read, notes, silhouette, verify?, hints, ms} */
  dsl: null, pristine: null, gold: null,
  built: null, verify: null, mates: null, assembly: null, sim: null, marker: null, simOn: false, forceRead: false, ratioOnly: false, partType: "",
  section: false, showingDrawing: false, showingGolden: false,
};
/* PIPE[k] 는 k+1 단계. cta/note 는 그 단계를 "실행"하는 버튼의 말 — 다음 단계가 무엇을 하는지 미리 알린다 */
const PIPE = [
  { n: 1, label: "도면 입력", cta: "도면 불러오기", note: "도면을 시트에 올립니다" },
  { n: 2, label: "판독 · 사양", cta: "판독 시작", note: "도면을 읽어 치수 사양으로 옮깁니다" },
  { n: 3, label: "3D CAD", cta: "3D CAD 만들기", note: "사양대로 3D 형상을 만듭니다" },
  { n: 4, label: "검증", cta: "검증 실행", note: "사양으로 다시 그린 외형을 도면과 대조합니다" },
];
/* 조립·시뮬과 내보내기는 단계가 아니다: 내보내기는 3D 가 만들어지면 오른쪽 패널에 늘 있고,
   조립·시뮬은 뷰포트 토글이라 언제든 켜고 끌 수 있다(끄면 부품만 남는다). */
const pipe = { done: 0, running: 0, active: false };

/* ================================================================ 뷰어 */
const stage = $("stage");
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.5;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.localClippingEnabled = true;
stage.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0C0C10);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
const camera = new THREE.PerspectiveCamera(38, 1, 0.5, 8000);
camera.position.set(120, 90, 160);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.075; controls.autoRotateSpeed = 1.6;
const key = new THREE.DirectionalLight(0xffffff, 2.4);
key.position.set(200, 360, 240); key.castShadow = true; key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.near = 20; key.shadow.camera.far = 1400; key.shadow.camera.left = key.shadow.camera.bottom = -260; key.shadow.camera.right = key.shadow.camera.top = 260;
key.shadow.bias = -0.0012; key.shadow.normalBias = 0.6;
scene.add(key, new THREE.DirectionalLight(0xc8d2ff, 0.5).translateX(-320).translateY(180).translateZ(140), new THREE.HemisphereLight(0xc4ccdd, 0x3a3d48, 1.1), new THREE.AmbientLight(0xffffff, 0.25));
const grid = new THREE.GridHelper(1200, 48, 0x2a2a34, 0x1a1a20);
grid.material.transparent = true; grid.material.opacity = 0.55; scene.add(grid);
const shadowCatcher = new THREE.Mesh(new THREE.CircleGeometry(600, 64).rotateX(-Math.PI / 2), new THREE.ShadowMaterial({ opacity: 0.4 }));
shadowCatcher.receiveShadow = true; scene.add(shadowCatcher);
function resize() { const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); }
new ResizeObserver(resize).observe(stage); resize();
let gridWanted = true;
const simClock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  controls.update();
  const below = camera.position.y < controls.target.y;
  grid.visible = gridWanted && !below; shadowCatcher.visible = !below;
  const dt = simClock.getDelta();
  if (state.sim) {
    state.sim.update(dt);
    const now = performance.now();
    if (state.sim.state.mode !== "idle" && now - gaugeLast > 200) { gaugeLast = now; renderSimGauge(); }
  }
  renderer.render(scene, camera);
});
let model = null;
const materials = makeMaterials();
function clearModel() { if (!model) return; scene.remove(model); model.traverse((o) => { if (o.isMesh) o.geometry?.dispose(); }); model = null; }
function fitView() {
  if (!model) return;
  const bb = new THREE.Box3().setFromObject(model);
  const c = bb.getCenter(new THREE.Vector3());
  const r = Math.max(10, bb.getSize(new THREE.Vector3()).length() / 2);
  controls.target.copy(c);
  const vHalf = THREE.MathUtils.degToRad(camera.fov / 2), hHalf = Math.atan(Math.tan(vHalf) * Math.max(0.6, camera.aspect));
  const dist = (r / Math.sin(Math.min(vHalf, hHalf))) * 1.1;
  camera.position.copy(c).add(new THREE.Vector3(0.55, 0.42, 0.72).normalize().multiplyScalar(dist));
  camera.near = Math.max(0.2, r / 80); camera.far = r * 80; camera.updateProjectionMatrix(); controls.update();
}
$("tFit").onclick = fitView;
$("tGrid").onclick = (e) => { gridWanted = !gridWanted; e.currentTarget.classList.toggle("on", !gridWanted); };
$("tSpin").onclick = (e) => { controls.autoRotate = !controls.autoRotate; e.currentTarget.classList.toggle("on", controls.autoRotate); };
const sectionPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);
$("btnSection").onclick = () => {
  state.section = !state.section;
  if (state.built) setSectionPlanes(state.built, state.section ? [sectionPlane] : null);
  $("btnSection").classList.toggle("on", state.section);
  $("btnSection").textContent = state.section ? "단면 닫기" : "단면 보기";
};

/* ================================================================ 시트(도면) 표시 */
function showSheet(on) { $("sheet").classList.toggle("show", on); state.showingDrawing = on; $("btnDrawing").classList.toggle("on", on); }
$("btnDrawing").onclick = () => showSheet(!state.showingDrawing);
function setSheetImage(dataUrl, cap) { const img = $("sheetImg"); img.src = dataUrl; $("sheetCap").textContent = cap || ""; $("overlay").innerHTML = ""; }
/* 시트 모드: 원본(올린 이미지 + 판독 외형 오버레이) ↔ 재생성(지금 DSL 로 렌더러가 다시 그린 도면).
   파라메트릭 수정은 DSL → 3D·재생성 도면·검증 으로 한 방향으로만 흐른다. 원본 이미지는 고치지 않는다. */
state.sheetMode = "original";
function refreshSheet() {
  if (!state.source) return;
  if (state.sheetMode === "regen" && state.dsl && validateShaft(state.dsl).ok) {
    const svg = toSVG(drawShaft(state.dsl, { scale: "auto", seed: 1 }));
    setSheetImage(svgToDataUrl(svg), `재생성 도면 · 지금 사양으로 다시 그림 (원본 아님)`);
    $("overlay").innerHTML = "";
  } else {
    setSheetImage(state.source.svg ? svgToDataUrl(state.source.svg) : state.source.image, state.source.kind === "sample" ? `샘플 도면 · ${state.source.name}` : state.source.kind === "synthetic" ? `합성 도면 · ${state.source.name}` : `업로드 · ${state.source.name}`);
    drawOverlay();
  }
  $("btnRegen").classList.toggle("on", state.sheetMode === "regen");
  $("btnRegen").textContent = state.sheetMode === "regen" ? "원본 도면" : "재생성 도면";
}
$("btnRegen").onclick = () => { state.sheetMode = state.sheetMode === "regen" ? "original" : "regen"; showSheet(true); refreshSheet(); };
/* 판독한 DSL 을 도면 위에 겹쳐 그린다: 측정한 부품 bbox 안에 외형선을 맞춘다 */
function drawOverlay() {
  const ov = $("overlay"); ov.innerHTML = "";
  const sil = state.extraction?.silhouette;
  if (!sil || !state.dsl || !state.source?.imgW) return;
  const { imgW, imgH } = state.source;
  ov.setAttribute("viewBox", `0 0 ${imgW} ${imgH}`);
  ov.setAttribute("preserveAspectRatio", "none");
  const v = validateShaft(state.dsl); if (!v.ok) return;
  const L = totalLength(state.dsl);
  const bb = sil.bbox, axis = sil.axis, pxPerMm = (bb.x1 - bb.x0 + 1) / L;
  const top = buildTopLine(state.dsl, 10).points;
  const pts = top.map((p) => `${(bb.x0 + p.x * pxPerMm).toFixed(1)},${(axis - p.r * pxPerMm).toFixed(1)}`).join(" ");
  const ptsB = top.map((p) => `${(bb.x0 + p.x * pxPerMm).toFixed(1)},${(axis + p.r * pxPerMm).toFixed(1)}`).join(" ");
  const sw = Math.max(1.5, imgW / 900);
  ov.innerHTML = `<polyline points="${pts}" fill="none" stroke="#5B6BF0" stroke-width="${sw}" stroke-linejoin="round" opacity=".95"/>
    <polyline points="${ptsB}" fill="none" stroke="#5B6BF0" stroke-width="${sw}" stroke-linejoin="round" opacity=".95"/>
    <line x1="${bb.x0}" y1="${axis}" x2="${bb.x1}" y2="${axis}" stroke="#5B6BF0" stroke-width="${sw * 0.6}" stroke-dasharray="${sw * 6} ${sw * 3}" opacity=".6"/>`;
}

/* ================================================================ 스텝퍼 */
function renderStepper() {
  $("stepper").classList.toggle("show", pipe.active);
  for (const b of document.querySelectorAll("#stepper .st")) {
    const n = Number(b.dataset.step);
    b.classList.toggle("done", n <= pipe.done && n !== pipe.running);
    b.classList.toggle("on", n === pipe.done + 1 || n === pipe.running);
    b.classList.toggle("run", n === pipe.running);
    b.disabled = n > pipe.done + 1 || !!pipe.running;
    b.title = n < pipe.done ? "이 단계로 돌아가기" : n === pipe.done ? "지금 단계" : n === pipe.done + 1 ? "다음 단계 실행" : "";
  }
  const next = PIPE[pipe.done];
  const cta = $("stageNext");
  cta.style.display = pipe.active && next && next.cta && !pipe.running ? "" : "none";
  cta.disabled = !!pipe.running; cta.textContent = next?.cta || "";
  const note = $("stepperNote");
  note.classList.toggle("show", pipe.active && !!next?.note && !pipe.running);
  note.textContent = next?.note || "";
  $("runBlock").style.display = pipe.active ? "" : "none";
  $("runSteps").innerHTML = PIPE.map((s) => {
    const st = s.n <= pipe.done ? "done" : s.n === pipe.running ? "run" : "";
    const where = s.n === 2 ? (state.mode === "live" ? "서버 AI 판독" : state.source?.kind === "sample" && state.sample?.files?.extracted ? "미리 판독한 결과" : "이 브라우저에서 실행") : "이 브라우저에서 실행";
    return `<div class="gen-step ${st}"><span class="dot"></span>${s.n}. ${s.label}<span style="color:var(--text-3);font-size:11px;margin-left:6px">${where}</span></div>`;
  }).join("");
  $("btnGolden").classList.toggle("show", !!state.gold && pipe.done >= 2);
  $("btnSection").classList.toggle("show", pipe.done >= 3);
  $("btnDrawing").classList.toggle("show", pipe.done >= 3);
  $("btnRegen").classList.toggle("show", pipe.done >= 2);
  $("btnSim").classList.toggle("show", pipe.done >= 3);
}
function showGen(on, title, sub, steps) {
  $("gen").classList.toggle("on", on);
  if (title) $("genTitle").textContent = title;
  if (sub !== undefined) $("genSub").textContent = sub;
  $("genBar").style.width = `${(pipe.done / PIPE.length) * 100}%`;
  $("genSteps").innerHTML = (steps || []).map((s) => `<div class="gen-step ${s.state || ""}"><span class="dot"></span>${s.text}</div>`).join("");
}
$("stageNext").onclick = () => runStep(pipe.done + 1);
/* 스텝퍼: 앞으로는 실행, 뒤로는 그 단계 상태로 되돌린다(뒤 단계의 결과를 걷어낸다). 검증에서 3D CAD 를 누르면 3D 만 남는다 */
for (const b of document.querySelectorAll("#stepper .st")) b.onclick = () => { const n = Number(b.dataset.step); if (n <= pipe.done && n < pipe.done + 1) goBackTo(n); else runStep(n); };
function goBackTo(n) {
  if (pipe.running || n >= pipe.done) return;
  if (n < 4) { state.verify = null; $("verifyBlock").style.display = "none"; showSheet(false); drawOverlay(); }
  if (n < 3) {
    if (state.simOn) setSimMode(false);
    teardownAssembly(); clearModel(); state.built = null;
    $("dock").style.display = "none"; $("exportBlock").style.display = "none"; $("mTris").textContent = "—"; $("mNote").textContent = "";
    showSheet(true);
  }
  if (n < 2) {
    state.extraction = null; state.dsl = null; state.pristine = null;
    for (const id of ["extractBlock", "analysisBlock", "segBlock", "featBlock", "jsonBlock"]) $(id).style.display = "none";
    $("overlay").innerHTML = "";
  }
  pipe.done = n; renderStepper();
  toast(`${n}단계로 돌아왔습니다`);
}

/* ================================================================ 이미지 준비 */
/* SVG 는 크게 그린다(≈10px/mm): 외형선(0.5mm)이 5px, 가는선(0.18~0.25mm)이 2px 이 되어야
   침식으로 가는선만 걷어낼 수 있다. 래스터 업로드는 원본 해상도(최대 1.5배)로. */
async function rasterizeDataUrl(dataUrl, targetW = 2400, isSvg = false) {
  const img = new Image();
  await new Promise((res, rej) => { img.onload = res; img.onerror = () => rej(new Error("이미지를 열지 못했습니다")); img.src = dataUrl; });
  const w0 = img.naturalWidth || img.width, h0 = img.naturalHeight || img.height;
  const scale = isSvg ? Math.min(3, Math.max(1, 3000 / Math.max(1, w0))) : Math.min(1.5, targetW / Math.max(1, w0));
  const w = Math.max(400, Math.round(w0 * scale)), h = Math.max(200, Math.round(h0 * scale));
  const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  return { imageData: ctx.getImageData(0, 0, w, h), w, h, png: cv.toDataURL("image/png") };
}
const svgToDataUrl = (svg) => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);

async function loadSource(src) {
  /* src: {kind, name, id, svg?|dataUrl?, gold?, sample?} */
  const dataUrl = src.svg ? svgToDataUrl(src.svg) : src.dataUrl;
  const r = await rasterizeDataUrl(dataUrl, 2400, !!src.svg);
  state.source = { kind: src.kind, name: src.name, id: src.id, image: src.svg ? r.png : src.dataUrl, imgW: r.w, imgH: r.h, svg: src.svg || null };
  state.raster = r.imageData;
  state.gold = src.gold || null;
  state.sample = src.sample || null;
  setSheetImage(dataUrl, src.kind === "sample" ? `샘플 도면 · ${src.name}` : src.kind === "synthetic" ? `만든 도면 · ${src.name}` : `업로드 · ${src.name}`);
}

/* ================================================================ 파이프라인 */
async function runStep(n) {
  if (pipe.running || !state.source) return;
  const step = PIPE[n - 1]; if (!step) return;
  pipe.running = n; renderStepper();
  showGen(true, `${n}단계 · ${step.label}`, step.note);
  try {
    if (n === 1) { showSheet(true); $("stageEmpty").style.display = "none"; await sleep(300); }
    else if (n === 2) await stepExtract();
    else if (n === 3) await stepBuild();
    else if (n === 4) await stepVerify();
    pipe.done = Math.max(pipe.done, n);
  } catch (e) {
    console.error(e); toast(`${n}단계 실패: ${e.message}`);
  } finally { pipe.running = 0; showGen(false); renderStepper(); }
}

/* ---- 2단계: 판독 */
function chosenMethod() {
  const m = document.querySelector("#methodSeg button.on")?.dataset.m || "auto";
  if (m === "server") return state.mode === "live" ? "server" : "silhouette";
  if (m === "silhouette") return "silhouette";
  /* auto */
  if (state.mode === "live") return "server";
  if (state.source.kind === "sample" && state.sample?.files?.extracted) return "replay";
  return "silhouette";
}
async function stepExtract() {
  const method = chosenMethod();
  const L = Number($("overallLen").value) || (state.gold ? totalLength(state.gold) : null);
  const steps = [{ text: "도면에서 부품 외형 측정", state: "run" }, { text: method === "server" ? "AI 판독" : method === "replay" ? "미리 판독한 결과 불러오기" : "외형에서 치수 사양 만들기" }, { text: "형상 검증" }];
  showGen(true, "2단계 · 판독", "", steps);
  const t0 = performance.now();
  /* ① 실루엣 (항상 — 힌트이자 정적 판독기) */
  await sleep(30);
  const sil = extractHeuristic(state.raster, { overallLength: L || 100, id: state.source.id, name_ko: state.source.name });
  steps[0].state = "done"; steps[1].state = "run"; showGen(true, "2단계 · 판독", "", steps);
  let ex = null;
  if (method === "replay") {
    const j = await fetch(`./samples/${state.sample.id}/${state.sample.files.extracted}?v=${BUILD}`).then((r) => r.json());
    ex = { method: "replay", dsl: normalizeShaft(j.dsl), dims_read: j.dims_read || [], notes: [...(j.notes || [])], serverVerify: j.verify, provider: j.provider, tier: j.tier, repaired: j.repaired, ms: j.elapsed_ms, evaluated: j.evaluated };
    ex.notes.unshift(`서버가 미리 판독해 저장한 결과입니다 (${((j.elapsed_ms || 0) / 1000).toFixed(1)}초${j.repaired ? ", 자동 수정 1회" : ""}).`);
  } else if (method === "server") {
    if (!sil.ok) toast("외형을 재지 못해 힌트 없이 판독합니다");
    const hints = sil.ok ? { draft: sil.dsl, silhouette: { L: sil.silhouette.L, top: Array.from(sil.silhouette.top), bottom: Array.from(sil.silhouette.bottom) }, sectioned: !!sil.dsl.bore } : null;
    const tier = $("tierPlan").checked ? "plan" : "text";
    const j = await extractViaServer(state.source.image, { hints, overallLength: Number($("overallLen").value) || null, tier });
    if (j.not_revolve) {
      showUnsuitable(`회전체 정면도로 보이지 않습니다. ${j.reason}`, (j.notes || []).filter((n) => n !== j.reason));
      throw new Error("회전체 도면이 아닙니다: " + j.reason);
    }
    ex = { method: "server", dsl: normalizeShaft(j.dsl), dims_read: j.dims_read || [], notes: j.notes || [], serverVerify: j.verify, provider: j.provider, tier: j.tier, repaired: j.repaired, ms: j.elapsed_ms };
    /* 판독기가 치수 문자를 하나도 읽지 못했다면 그 숫자들은 근거가 없다 */
    if (!ex.dims_read.length && !L && !state.ratioOnly) { showNeedLength(); throw new Error("실제 치수를 결정할 수 없습니다"); }
    ex.dsl.meta = { ...(ex.dsl.meta || {}), scale: ex.dims_read.length ? "read" : L ? "input" : "assumed" };
  } else {
    if (!sil.ok) { showUnsuitable("도면에서 부품 외형을 찾지 못했습니다.", sil.notes || []); throw new Error(sil.notes?.join(" ") || "부품 외형을 찾지 못했습니다"); }
    /* 회전체 정면도가 아닌 것이 분명하면 여기서 멈춘다. 억지로 만들면 도면과 무관한 형상이 나온다(캐스터 조립도 사례). */
    if (sil.verdict === "not_revolve" && !state.forceRead) {
      showUnsuitable("회전체 정면도로 보이지 않아 판독을 멈췄습니다.", sil.reasons || [], true);
      throw new Error("회전체 정면도가 아닙니다");
    }
    if (sil.plausible === false) showUnsuitable("판독 결과가 회전체 정면도답지 않습니다. 결과는 참고용입니다.", sil.reasons || []);
    /* 실제 치수의 근거가 없으면 숫자를 지어내지 않는다. 100mm 를 몰래 가정하면 화면의 ⌀58.5 같은 값을
       도면에서 읽은 값으로 오해하게 된다(캐스터 사례). 비율만 보겠다고 하면 그때만 진행한다. */
    if (!L && !state.ratioOnly) { showNeedLength(); throw new Error("실제 치수를 결정할 수 없습니다"); }
    ex = { method: "silhouette", dsl: sil.dsl, dims_read: [], notes: sil.notes, ms: performance.now() - t0 };
    ex.dsl.meta = { ...(ex.dsl.meta || {}), scale: L ? "input" : "assumed" };
    if (!L) ex.notes.unshift("전체 길이를 넣지 않아 비율만 봅니다. 화면의 치수는 전체 길이를 100mm 로 놓았을 때의 비율이며 도면에서 읽은 값이 아닙니다.");
  }
  ex.silhouette = sil.ok ? sil.silhouette : null;
  ex.draft = sil.ok ? sil.dsl : null;
  /* 파일명·표제란은 입력 이름을 따른다 (판독기는 'extracted' 만 준다) */
  if (!ex.dsl.id || ex.dsl.id === "extracted") ex.dsl.id = state.source.id || "shaft";
  if (!ex.dsl.name_ko) ex.dsl.name_ko = state.source.name || "회전체";
  if (ex.draft) { ex.draft.id = ex.dsl.id; ex.draft.name_ko = ex.dsl.name_ko; }
  steps[1].state = "done"; steps[2].state = "run"; showGen(true, "2단계 · 판독", "", steps);
  const v = validateShaft(ex.dsl);
  if (!v.ok && ex.draft) { ex.notes.push(`판독 결과가 형상 검증에 걸려(${v.errors[0]}) 외형 판독 결과로 대체했습니다.`); ex.dsl = ex.draft; }
  state.extraction = ex;
  setDsl(ex.dsl, { pristine: true });
  /* 부품 유형: 사용자가 미리 골랐으면 그대로, 아니면 사양에서 추정 */
  if (!state.partType) { const g = inferPartType(ex.dsl); state.partType = g.id; $("partType").value = g.id; state.typeWhy = g.why; }
  renderTypeHint();
  runAnalysis();   /* 부품 해석: 샘플은 미리 만든 것을, 서버 모드는 지금 판독+OCR 로 */
  steps[2].state = "done"; showGen(true, "2단계 · 판독", "", steps);
  renderExtractPanel();
  drawOverlay();
  toast(`판독 완료 · 세그먼트 ${ex.dsl.segments.length}개${ex.dims_read?.length ? `, 읽은 치수 ${ex.dims_read.length}개` : ""}`, true);
  $("jsonBlock").scrollIntoView({ behavior: "smooth", block: "start" });
}
/* 적합하지 않은 입력: 억지로 3D 를 만들기보다 왜 안 되는지와 안내를 보여준다 */
function showUnsuitable(title, reasons, hard = false) {
  const box = $("unsuitable"); if (!box) return;
  box.style.display = "block";
  box.innerHTML = `<b>${escapeHtml(title)}</b>${reasons?.length ? `<ul style="margin:6px 0 0 16px">${reasons.slice(0, 5).map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ul>` : ""}
    <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap"><a href="./guide.html" target="_blank" class="btn btn-ghost btn-sm">어떤 도면을 올려야 하나요</a>
    ${hard ? `<button class="btn btn-ghost btn-sm" id="btnForceRead">그래도 읽어 보기</button>` : ""}</div>`;
  if (hard) $("btnForceRead").onclick = () => { state.forceRead = true; box.style.display = "none"; runStep(2); };
  toast(title);
}
/* 실제 치수의 근거(입력한 전체 길이 또는 읽은 치수 문자)가 없을 때 */
function showNeedLength() {
  const box = $("unsuitable"); if (!box) return;
  box.style.display = "block";
  box.innerHTML = `<b>실제 치수를 결정할 수 없습니다.</b>
    <div style="margin-top:6px">이 도면에서 문자를 읽지 않으므로 비율만 알 수 있습니다. 왼쪽 <b>전체 길이(mm)</b> 를 넣어 주세요.
    도면에 치수가 문자 기호(A·B·H 같은)로만 적혀 있다면 규격표의 값을 넣으면 됩니다.</div>
    <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
      <button class="btn btn-primary btn-sm" id="btnFocusLen">전체 길이 넣기</button>
      <button class="btn btn-ghost btn-sm" id="btnRatioOnly">비율만 보기</button></div>`;
  $("lenBlock").style.display = "";
  $("btnFocusLen").onclick = () => { $("overallLen").focus(); $("overallLen").scrollIntoView({ behavior: "smooth", block: "center" }); };
  $("btnRatioOnly").onclick = () => { state.ratioOnly = true; box.style.display = "none"; runStep(2); };
  toast("전체 길이를 넣어 주세요. 없으면 비율만 볼 수 있습니다");
}
/* ---- 부품 해석 (도면 문자 OCR + 사양 + 이미지 → 근거 달린 설명) */
let ocrWorkerP = null;
async function browserOcrTokens() {
  if (!state.source?.image) return [];
  try {
    if (!ocrWorkerP) {
      const [{ default: T }, { getOcrWorker }] = await Promise.all([import("../vendor/tesseract/tesseract.esm.min.js"), import("./ocr-dims.js")]);
      ocrWorkerP = getOcrWorker({ workerPath: "./vendor/tesseract/worker.min.js", corePath: "./vendor/tesseract/", langPath: "./vendor/tesseract" }, T.createWorker);
    }
    const { readNumberTokens } = await import("./ocr-dims.js");
    return await readNumberTokens(await ocrWorkerP, state.source.image);
  } catch (e) { console.warn("OCR 없음:", e.message); return []; }
}
async function runAnalysis() {
  const box = $("analysisBlock"); box.style.display = "";
  $("anTag").textContent = "해석 중…"; $("anLine").textContent = "—"; ["anFunc", "anFeats", "anMfg", "anUnc", "anSrc"].forEach((id) => ($(id).innerHTML = ""));
  let a = null, src = "";
  try {
    if (state.source?.kind === "sample" && state.sample && !(state.mode === "live" && state.extraction?.method === "server")) {
      a = await fetch(`./samples/${state.sample.id}/analysis.json?v=${BUILD}`).then((r) => (r.ok ? r.json() : null));
      src = a ? "미리 만든 해석 (도면 문자 인식 + 판독 사양 + 이미지)" : "";
    }
    if (!a && state.mode === "live" && state.dsl) {
      const tokens = await browserOcrTokens();
      const r = await fetch("./api/describe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ imageB64: state.source.image, dsl: state.dsl, ocrTokens: tokens.map((t) => ({ text: t.text, value: t.value, kind: t.kind })), partType: state.partType, dims_read: state.extraction?.dims_read || [] }) });
      if (r.ok) { a = await r.json(); src = `지금 해석 (도면 문자 ${tokens.length}개 + 사양 + 이미지, ${((a.elapsed_ms || 0) / 1000).toFixed(1)}초)`; }
    }
  } catch (e) { console.warn(e); }
  if (!a) { $("anTag").textContent = "없음"; $("anLine").textContent = state.mode === "live" ? "해석을 받지 못했습니다" : "서버 모드에서 도면을 올리면 해석합니다"; return; }
  state.analysis = a;
  $("anTag").textContent = a.part_type ? (PART_TYPES.find((t) => t.id === a.part_type)?.ko || a.part_type) : "";
  $("anLine").textContent = a.one_line || "—";
  $("anFunc").textContent = a.function || "";
  $("anFeats").innerHTML = (a.features || []).map((f) => `<div class="feat"><span class="k">${escapeHtml(f.what)}</span><span class="v">${escapeHtml(f.value)}<br/><span style="color:var(--text-3);font-size:11px">${escapeHtml(f.evidence)}</span></span></div>`).join("") || `<div class="hint">없음</div>`;
  $("anMfg").innerHTML = (a.manufacturing || []).map(escapeHtml).join("<br/>") || "없음";
  $("anUnc").innerHTML = (a.uncertain || []).map(escapeHtml).join("<br/>") || "없음";
  $("anSrc").textContent = src + (a.confidence != null ? ` · 신뢰도 ${Math.round(a.confidence * 100)}%` : "");
  /* 해석이 부품 유형을 더 잘 알면(사용자가 안 골랐을 때) 따른다 */
  if (a.part_type && !$("partType").dataset.userSet && PART_TYPES.some((t) => t.id === a.part_type) && a.part_type !== state.partType) { state.partType = a.part_type; $("partType").value = a.part_type; state.typeWhy = "해석 결과"; renderTypeHint(); }
}
function renderExtractPanel() {
  const ex = state.extraction; if (!ex) return;
  $("extractBlock").style.display = "";
  const label = ex.method === "server" ? `AI 판독${ex.tier === "plan" ? " · 정밀" : ""}${ex.repaired ? " · 자동 수정" : ""}` : ex.method === "replay" ? "미리 판독한 결과" : "외형 판독";
  $("exMethod").textContent = label;
  const conf = ex.serverVerify?.confidence ?? (ex.method === "silhouette" ? 0.6 : null);
  $("exConf").textContent = conf == null ? "—" : `${Math.round(conf * 100)}%`;
  $("exConfBar").style.width = conf == null ? "0" : `${Math.round(conf * 100)}%`;
  $("exDims").textContent = ex.dims_read?.length ? `${ex.dims_read.length}개` : "외형만 (문자 안 읽음)";
  $("exMs").textContent = ex.ms ? `${(ex.ms / 1000).toFixed(1)}초` : "—";
  $("exNotes").innerHTML = (ex.notes || []).slice(0, 3).map((n) => `<div>${escapeHtml(n)}</div>`).join("");
}
const escapeHtml = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

/* ---- DSL 상태 */
function setDsl(dsl, { pristine = false } = {}) {
  state.dsl = dsl;
  if (pristine) state.pristine = JSON.stringify(dsl, null, 2);
  const ta = $("jsonText"); ta.value = JSON.stringify(dsl, null, 2); ta.classList.remove("bad");
  $("jsonBlock").style.display = ""; $("segBlock").style.display = ""; $("featBlock").style.display = "";
  const v = validateShaft(dsl);
  $("jsonMeta").textContent = `${dsl.name_ko || dsl.id || "회전체"} · 세그먼트 ${dsl.segments.length}`;
  const msg = $("jsonMsg"); msg.classList.toggle("bad", !v.ok);
  msg.textContent = v.ok ? (v.warnings.length ? `주의: ${v.warnings.join(" / ")}` : "형상 검증 통과. 값을 고치면 3D, 도면, 검증이 다시 계산됩니다.") : `형상 오류: ${v.errors.join(" / ")}`;
  renderSegTable(); renderFeatList(); renderModelInfo();
}
function applyDslChange(next, why = "") {
  const v = validateShaft(next);
  if (!v.ok) { toast(`고칠 수 없습니다: ${v.errors[0]}`); return false; }
  next.meta = { ...(next.meta || {}), source: "edited" };
  setDsl(next);
  if (pipe.done >= 3) { rebuild3D(); showExportPanel(); }
  if (pipe.done >= 4) computeVerify();
  if (state.assembly) renderMatePanel();
  if (state.sheetMode === "regen") refreshSheet(); else drawOverlay();
  return true;
}
$("btnBuild").onclick = () => {
  let d; try { d = JSON.parse($("jsonText").value); } catch (e) { $("jsonText").classList.add("bad"); $("jsonMsg").classList.add("bad"); $("jsonMsg").textContent = `JSON 문법 오류: ${e.message}`; return; }
  d = normalizeShaft(d);
  if (applyDslChange(d)) toast("사양을 적용했습니다", true);
};
$("btnRevert").onclick = () => { if (!state.pristine) return; applyDslChange(JSON.parse(state.pristine)); toast("판독 결과로 되돌렸습니다"); };
$("btnGolden").onclick = () => {
  if (!state.gold) return;
  state.showingGolden = !state.showingGolden;
  $("btnGolden").classList.toggle("on", state.showingGolden);
  $("btnGolden").textContent = state.showingGolden ? "판독 결과로" : "정답 사양 보기";
  applyDslChange(JSON.parse(JSON.stringify(state.showingGolden ? state.gold : (state.pristine ? JSON.parse(state.pristine) : state.dsl))));
  toast(state.showingGolden ? "정답 사양을 불러왔습니다 (도면을 만든 원본)" : "판독 결과로 돌아왔습니다", true);
};

/* ---- 세그먼트 표 */
let editTimer = 0;
function renderSegTable() {
  const tb = $("segRows"); const dsl = state.dsl; if (!dsl) return;
  tb.innerHTML = dsl.segments.map((s, i) => {
    const dia = s.type === "taper"
      ? `<span style="display:flex;gap:3px;align-items:center"><input data-k="d_start" data-i="${i}" type="number" step="0.5" value="${s.d_start}" style="width:52px"/>→<input data-k="d_end" data-i="${i}" type="number" step="0.5" value="${s.d_end}" style="width:52px"/></span>`
      : s.type === "thread" ? `<input data-k="spec" data-i="${i}" type="text" value="${s.spec || ""}" style="width:78px"/>`
      : `<input data-k="diameter" data-i="${i}" type="number" step="0.5" value="${s.diameter}" style="width:60px"/>`;
    return `<tr data-i="${i}"><td class="n">${i + 1}</td>
      <td><select data-k="type" data-i="${i}"><option value="cyl" ${s.type === "cyl" ? "selected" : ""}>원통</option><option value="taper" ${s.type === "taper" ? "selected" : ""}>테이퍼</option><option value="thread" ${s.type === "thread" ? "selected" : ""}>나사</option></select></td>
      <td><input data-k="length" data-i="${i}" type="number" step="0.5" value="${s.length}" style="width:56px"/></td>
      <td>${dia}</td>
      <td><button class="x" data-del="${i}" title="삭제" style="width:20px;height:20px;border-radius:5px;color:var(--text-3)">×</button></td></tr>`;
  }).join("");
}
$("segRows").addEventListener("change", (e) => {
  const el = e.target; const i = Number(el.dataset.i); const k = el.dataset.k; if (!k) return;
  const next = JSON.parse(JSON.stringify(state.dsl)); const s = next.segments[i];
  if (k === "type") {
    const d = s.diameter || s.d_start || 20;
    if (el.value === "taper") { s.type = "taper"; s.d_start = d; s.d_end = Math.max(1, d - 2); delete s.diameter; delete s.spec; delete s.pitch; }
    else if (el.value === "thread") { s.type = "thread"; s.diameter = Math.round(d); s.spec = `M${Math.round(d)}`; delete s.d_start; delete s.d_end; delete s.pitch; }
    else { s.type = "cyl"; s.diameter = d; delete s.d_start; delete s.d_end; delete s.spec; delete s.pitch; }
  } else if (k === "spec") { s.spec = el.value.trim(); delete s.diameter; delete s.pitch; }
  else s[k] = Number(el.value);
  applyDslChange(normalizeShaft(next));
});
$("segRows").addEventListener("click", (e) => {
  const b = e.target.closest("[data-del]"); if (!b) return;
  const next = JSON.parse(JSON.stringify(state.dsl)); const i = Number(b.dataset.del);
  if (next.segments.length <= 1) return toast("세그먼트는 최소 하나입니다");
  next.segments.splice(i, 1);
  next.transitions = next.transitions.filter((t) => t.at !== i + 1 || i === next.segments.length).map((t) => ({ ...t, at: t.at > i ? t.at - 1 : t.at }));
  next.grooves = next.grooves.filter((g) => g.segment !== i).map((g) => ({ ...g, segment: g.segment > i ? g.segment - 1 : g.segment }));
  next.features = next.features.filter((f) => f.segment !== i).map((f) => (f.segment > i ? { ...f, segment: f.segment - 1 } : f));
  applyDslChange(next);
});
$("btnAddSeg").onclick = () => {
  const next = JSON.parse(JSON.stringify(state.dsl)); const last = next.segments[next.segments.length - 1];
  next.segments.push({ type: "cyl", length: 20, diameter: Math.max(4, (last.diameter || last.d_end || 20) - 5) });
  applyDslChange(next);
};
$("segRows").addEventListener("mouseover", (e) => { const tr = e.target.closest("tr"); if (tr) highlightSegment(Number(tr.dataset.i)); });
$("segRows").addEventListener("mouseout", () => highlightSegment(-1));

/* ---- 전이·홈·피처 목록 */
function renderFeatList() {
  const dsl = state.dsl; const host = $("featList"); if (!dsl) return;
  const rows = [];
  (dsl.transitions || []).forEach((t, i) => rows.push({ kind: "transitions", i, k: { chamfer: "모따기", fillet: "필렛", round: "라운드", undercut: "도피홈" }[t.type] || t.type, v: `경계 ${t.at} · ${t.type === "chamfer" ? `C${t.size}${t.angle && t.angle !== 45 ? `×${t.angle}°` : ""}` : t.type === "undercut" ? `${t.width}×${t.depth}` : `R${t.radius}`}` }));
  (dsl.grooves || []).forEach((g, i) => rows.push({ kind: "grooves", i, k: "홈", v: `seg ${g.segment + 1} · +${g.offset} · ${g.width}×${g.depth}${g.kind ? ` (${g.kind})` : ""}` }));
  (dsl.features || []).forEach((f, i) => rows.push({ kind: "features", i, k: { keyway: "키홈", center_hole: "센터구멍", cross_hole: "횡구멍", flat: "평면", hex: "육각", knurl: "널링", hex_socket: "육각 소켓" }[f.type] || f.type, v: f.type === "keyway" ? `seg ${f.segment + 1} · +${f.offset || 0} · ${f.width}×${f.depth} L${f.length}` : f.type === "center_hole" ? `${f.end === "left" ? "왼쪽" : "오른쪽"} · ${f.form || "A"}${f.d}` : f.type === "hex_socket" ? `${f.end === "left" ? "왼쪽" : "오른쪽"} · S${f.across_flats} 깊이 ${f.depth}` : f.type === "cross_hole" ? `x${f.position} · ⌀${f.diameter}${f.through === false ? ` 깊이 ${f.depth}` : " 관통"}` : f.type === "flat" ? `seg ${f.segment + 1} · +${f.offset || 0} · L${f.length} 깊이 ${f.depth}${f.count === 2 ? " ×2" : ""}` : f.type === "hex" ? `seg ${f.segment + 1} · 대변 ${f.across_flats}` : `seg ${f.segment + 1} · L${f.length}` }));
  if (dsl.bore) rows.push({ kind: "bore", i: 0, k: "보어", v: `${dsl.bore.through ? "관통" : `막힘(${dsl.bore.from})`} · ${dsl.bore.segments.map((b) => `⌀${b.diameter}×${b.length}`).join(" + ")}` });
  host.innerHTML = rows.length ? rows.map((r) => `<div class="feat" data-kind="${r.kind}" data-i="${r.i}"><span class="k">${r.k}</span><span class="v">${escapeHtml(r.v)}</span>${r.kind !== "bore" ? `<button class="x" title="삭제">×</button>` : ""}</div>`).join("") : `<div class="hint">전이·홈·피처가 없습니다.</div>`;
}
$("featList").addEventListener("click", (e) => {
  const b = e.target.closest(".x"); if (!b) return;
  const row = b.closest(".feat"); const next = JSON.parse(JSON.stringify(state.dsl));
  next[row.dataset.kind].splice(Number(row.dataset.i), 1);
  applyDslChange(next);
});
$("featList").addEventListener("mouseover", (e) => { const row = e.target.closest(".feat"); if (row && row.dataset.kind === "features") highlightFeature(Number(row.dataset.i)); });
$("featList").addEventListener("mouseout", () => highlightFeature(-1));
function highlightFeature(i) {
  const g = state.built?.ghosts; if (!g) return;
  g.visible = i >= 0; g.children.forEach((m) => { m.visible = m.userData.featureIndex === i; });
}
let segHighlight = null;
function highlightSegment(i) {
  if (segHighlight) { scene.remove(segHighlight); segHighlight.geometry.dispose(); segHighlight = null; }
  if (i < 0 || !state.dsl || !model) return;
  const ev = collectEvents(state.dsl); const s = ev.segments[i]; if (!s) return;
  const r = Math.max(s.ds, s.de) / 2 + 0.6;
  const geo = new THREE.CylinderGeometry(r, r, s.x1 - s.x0 + 0.4, 48, 1, true).rotateZ(-Math.PI / 2);
  segHighlight = new THREE.Mesh(geo, materials.ghost);
  segHighlight.position.set(model.position.x + (s.x0 + s.x1) / 2, model.position.y, 0);
  scene.add(segHighlight);
}

/* ---- 모델 정보 */
function renderModelInfo() {
  const dsl = state.dsl; if (!dsl) return;
  const v = validateShaft(dsl);
  $("mName").textContent = dsl.name_ko || dsl.name || dsl.id || "회전체";
  const assumed = dsl.meta?.scale === "assumed";
  $("mLen").textContent = `${fmt(totalLength(dsl), 2)} mm${assumed ? " (비율)" : ""}`;
  $("mDia").textContent = `⌀${fmt(maxDiameter(dsl), 2)} mm${assumed ? " (비율)" : ""}`;
  $("mMat").textContent = dsl.material || "—";
  if (v.ok) { const m = computeMass(dsl, densityOf(dsl.material)); $("mMass").textContent = `${fmt(m.volume_cm3, 2)} cm³ · ${fmt(m.mass_g, m.mass_g < 10 ? 2 : 1)} g`; }
  else $("mMass").textContent = "—";
}

/* ---- 3단계: 3D */
async function stepBuild() {
  const steps = [{ text: "단면 프로파일에서 회전 형상", state: "run" }, { text: "키홈, 평면, 육각, 횡구멍 가공" }, { text: "재질 적용" }];
  showGen(true, "3단계 · 3D CAD", "", steps);
  await sleep(120);
  rebuild3D();
  steps.forEach((s) => (s.state = "done")); showGen(true, "3단계 · 3D CAD", "", steps);
  showSheet(false); $("dock").style.display = "";
  fitView();
  showExportPanel();
  toast(`3D 완료. 오른쪽에서 내려받을 수 있습니다`, true);
}
function rebuild3D() {
  const dsl = state.dsl; const v = validateShaft(dsl); if (!v.ok) return;
  const hadAssembly = !!state.assembly || state.simOn;
  teardownAssembly();
  clearModel();
  const built = buildShaft3D(dsl, { materials, radial: 96 });
  state.built = built; model = built.root;
  const L = totalLength(dsl), R = maxDiameter(dsl) / 2;
  model.position.set(-L / 2, R + 0.02, 0);   /* 바닥 위에 눕힌다 */
  scene.add(model);
  if (state.section) setSectionPlanes(built, [sectionPlane]);
  $("stageEmpty").style.display = "none";
  $("mTris").textContent = `${built.stats.tris.toLocaleString()} · ${built.stats.ms}ms`;
  if (hadAssembly) spawnAssembly();
  $("mNote").textContent = built.notes.length ? built.notes.join(" · ") : "";
  return built;
}

/* ---- 4단계: 검증 */
async function stepVerify() {
  await sleep(150);
  computeVerify();
  showSheet(true); drawOverlay();
  $("verifyBlock").style.display = ""; $("verifyBlock").scrollIntoView({ behavior: "smooth", block: "start" });
  toast(`검증 완료 · ${state.verify.verdict === "pass" ? "통과" : state.verify.verdict === "review" ? "확인 필요" : "불일치"}`, state.verify.verdict === "pass");
}
function computeVerify() {
  const ex = state.extraction; if (!ex || !state.dsl) return;
  const rep = verifyExtraction({ dsl: state.dsl, inputSilhouette: ex.silhouette, dimsRead: ex.dims_read });
  state.verify = rep;
  $("verifyBlock").style.display = "";
  const vd = $("verdict"); vd.className = `verdict ${rep.verdict}`; vd.textContent = { pass: "통과", review: "확인 필요", fail: "불일치", invalid: "유효하지 않음" }[rep.verdict];
  $("vIou").textContent = rep.iou == null ? "측정 없음" : `${(rep.iou * 100).toFixed(1)}%`;
  $("vIouBar").style.width = rep.iou == null ? "0" : `${Math.round(rep.iou * 100)}%`;
  $("vDims").textContent = rep.dims ? `${rep.dims.matched}/${rep.dims.total} (${Math.round(rep.dims.rate * 100)}%)` : ex.method === "silhouette" ? "문자 안 읽음" : "—";
  $("vValid").textContent = rep.valid ? (rep.warnings.length ? `통과 (주의 ${rep.warnings.length})` : "통과") : `오류 ${rep.errors.length}`;
  $("vConf").textContent = `${Math.round(rep.confidence * 100)}%`;
  const msgs = [];
  if (rep.dims?.unmatched?.length) msgs.push(`사양에 반영되지 않은 치수: ${rep.dims.unmatched.map((u) => u.text || u.value).join(", ")}`);
  if (!rep.valid) msgs.push(rep.errors.join(" / "));
  if (rep.iou != null && rep.iou < 0.9) msgs.push("외형이 도면과 어긋납니다. 오른쪽 표에서 세그먼트 길이와 지름을 고치면 바로 다시 계산됩니다.");
  $("vMsg").innerHTML = msgs.map((m) => `<div>· ${escapeHtml(m)}</div>`).join("");
  $("vMsg").className = `msg ${rep.verdict === "pass" ? "" : rep.verdict === "review" ? "warn" : "bad"}`;
  /* 정답이 있으면(샘플·합성) 정답 대비 지표 */
  const gc = $("goldenCmp");
  if (state.gold) {
    const m = goldenMetrics(state.dsl, state.gold);
    const pct = (x) => `${Math.round(x * 100)}%`;
    gc.innerHTML = `<div class="hint" style="margin-bottom:5px">정답 사양 대비 (이 도면은 정답에서 그렸습니다)</div>
      <div class="cmp"><span class="h">항목</span><span class="h">일치</span><span class="h"></span>
      <span>세그먼트</span><b>${pct(m.segment.f1)}</b><span></span>
      <span>피처</span><b>${pct(m.feature.f1)}</b><span></span>
      <span>전이</span><b>${pct(m.transition.f1)}</b><span></span>
      <span>치수</span><b>${pct(m.dim_rate)}</b><span style="color:var(--text-3)">${m.dims_total}개</span>
      <span>외형</span><b>${(m.iou * 100).toFixed(1)}%</b><span></span>
      <span>완전 일치</span><b>${m.exact ? "예" : "아니오"}</b><span></span></div>`;
  } else gc.innerHTML = "";
}

/* ---- 조립 · 시뮬레이션 (단계가 아니라 토글)
   도면의 규격 표기에서 상대 부품과 운동을 규칙으로 읽는다(shaft-mates.js).
   부품 형상은 정확하고 상대 부품은 규격표 근사이며, UI 가 그렇게 말한다. */
const mateMaterials = makeMateMaterials();
function teardownAssembly() {
  if (state.sim) { state.sim.reset(); state.sim = null; }
  removeSpinMarker();
  if (state.assembly) {
    scene.remove(state.assembly.group);
    state.assembly.group.traverse((o) => { if (o.isMesh) o.geometry?.dispose(); });
    state.assembly = null;
  }
  if (model) model.rotation.x = 0;
  $("simDock").classList.remove("show");
  renderSimGauge();
}
/* 부품 + 상대 부품 전체가 들어오도록 카메라를 맞춘다 */
function fitAssemblyView() {
  if (!model) return;
  const bb = new THREE.Box3().setFromObject(model);
  if (state.assembly) bb.expandByObject(state.assembly.group);
  const c = bb.getCenter(new THREE.Vector3());
  const r = Math.max(10, bb.getSize(new THREE.Vector3()).length() / 2);
  controls.target.copy(c);
  const vHalf = THREE.MathUtils.degToRad(camera.fov / 2), hHalf = Math.atan(Math.tan(vHalf) * Math.max(0.6, camera.aspect));
  const dist = (r / Math.sin(Math.min(vHalf, hHalf))) * 1.12;
  camera.position.copy(c).add(new THREE.Vector3(0.55, 0.42, 0.72).normalize().multiplyScalar(dist));
  camera.near = Math.max(0.2, r / 80); camera.far = r * 80; camera.updateProjectionMatrix(); controls.update();
}
/* 계기: 회전수·각도(자전) 또는 체결 회전수·전진(나사). 축대칭이라 화면만으로는 알 수 없으므로 숫자로 보인다 */
let gaugeLast = 0;
function renderSimGauge() {
  const el = $("simGauge"); if (!el) return;
  const s = state.sim?.state;
  if (!s || s.mode === "idle") { el.textContent = state.sim ? "정지" : "—"; el.classList.remove("on"); return; }
  el.classList.add("on");
  if (s.mode === "spin") {
    const turns = s.spinAngle / (2 * Math.PI);
    el.textContent = `${Math.round(s.rpm)} rpm · ${turns.toFixed(1)} 회전 · ${Math.round((s.spinAngle * 180 / Math.PI) % 360)}°`;
  } else if (s.mode === "screw") {
    el.textContent = `체결 ${(s.screwTurns || 0).toFixed(1)} 회전 · ${(s.screwAdvance || 0).toFixed(1)} mm`;
  }
}
function attachSpinMarker() {
  if (!model || !state.dsl) return;
  removeSpinMarker();
  /* 회전체는 축대칭이라 자전해도 화면이 그대로다 -> 기준 표시를 부품에 붙여 회전을 눈으로 보이게 한다.
     model 의 자식이므로 같은 회전을 따라가고, 내보내기 수집기는 marker: 이름을 걸러낸다. */
  state.marker = makeSpinMarker(state.dsl, { length: totalLength(state.dsl), radius: maxDiameter(state.dsl) / 2 });
  model.add(state.marker);
}
function removeSpinMarker() {
  if (!state.marker) return;
  state.marker.parent?.remove(state.marker);
  state.marker.traverse((o) => { if (o.isMesh) o.geometry?.dispose(); });
  state.marker = null;
}
function spawnAssembly() {
  if (!state.dsl || !model) return;
  state.mates = analyzeMates(state.dsl, { partType: state.partType || undefined });
  const asm = buildAssembly(state.mates, { materials: mateMaterials });
  /* 부품과 같은 좌표계에 놓는다 (model 은 화면 중앙으로 옮겨져 있다) */
  asm.group.position.copy(model.position);
  asm.group.rotation.copy(model.rotation);
  scene.add(asm.group);
  state.assembly = asm;
  state.sim = createAssemblySim({ part: model, assembly: asm, analysis: state.mates });
  state.sim.applyExplode(Number($("simExplode").value) / 100);
  attachSpinMarker();
  $("simDock").classList.add("show");
  /* 상대 부품이 부품보다 크게 튀어나오므로(하우징·허브·베어링) 화면을 다시 맞춘다 */
  fitAssemblyView();
  renderSimGauge();
  return asm;
}
/* 조립·시뮬 토글: 켜면 상대 부품·기준 표시가 붙고, 끄면 부품만 남는다(형상은 그대로) */
async function setSimMode(on) {
  if (!model || !state.dsl) return;
  if (on) {
    const steps = [{ text: "도면에서 결합부 찾기 (멈춤링, 키, 나사, 공차)", state: "run" }, { text: "상대 부품 만들기 (규격표 근사)" }, { text: "분해 순서와 조립 점검" }];
    showGen(true, "조립 · 시뮬레이션", "", steps);
    await sleep(100);
    teardownAssembly();
    spawnAssembly();
    steps.forEach((x) => (x.state = "done"));
    renderMatePanel();
    /* 유형의 기본 운동이 분해·끼우기면 처음부터 반쯤 분해해 보여 준다(핀·부시는 돌려 봐야 아무것도 안 보인다) */
    if (state.sim && typeOf(state.mates?.partType || state.partType || "other").primary === "explode") { $("simExplode").value = 60; state.sim.applyExplode(0.6); }
    showSheet(false);
    $("mateBlock").style.display = "";
    $("mateBlock").scrollIntoView({ behavior: "smooth", block: "start" });
    showGen(false);
    const n = state.mates.mates.filter((m) => m.part).length;
    toast(n ? `결합부 ${n}개` : "결합부가 없어 회전만 보여 줍니다", true);
  } else {
    teardownAssembly();          /* 상대 부품·기준 표시·시뮬 상태를 모두 걷어낸다 */
    $("mateBlock").style.display = "none";
    $("simExplode").value = 0;
    $("btnSpin").classList.remove("on");
    fitView();                    /* 부품만 보이도록 화면 다시 맞춤 */
    toast("부품만 보기로 돌아왔습니다");
  }
  state.simOn = on;
  $("btnSim").classList.toggle("on", on);
  $("btnSim").textContent = on ? "조립 · 시뮬 끄기" : "조립 · 시뮬 켜기";
  if ($("asmExportRow")) $("asmExportRow").style.display = on && state.assembly ? "flex" : "none";
}
$("btnSim").onclick = () => setSimMode(!state.simOn);
const MATE_KO = { spin: "자전축", snap: "멈춤링", key: "키·허브", screw: "나사 체결", bearing: "베어링", pin: "핀", wrench: "공구", fit: "끼워맞춤" };
function renderTypeHint() {
  const t = typeOf(state.partType || "other");
  $("typeHint").innerHTML = state.partType ? `${t.what}${state.typeWhy ? ` <span style="color:var(--text-3)">(${state.typeWhy})</span>` : ""}` : "올리기 전에 알려 주면 그 유형에 맞는 시뮬레이션을 계획합니다.";
}
function renderMatePanel() {
  const a = state.mates; if (!a) return;
  $("mateMeta").textContent = matesSummary(a);
  const t = typeOf(a.partType || state.partType || "other");
  $("simPlan").innerHTML = `<b>${t.ko}</b> · ${t.what}<br/>` + t.plan.map((p) => `<span class="tag" style="margin:4px 4px 0 0">${p.ko}</span>${p.why ? `<span style="color:var(--text-3);font-size:11.5px"> ${p.why}</span>` : ""}`).join("<br/>");
  /* 계획의 첫 운동을 앞세운다: 핀·부시·볼트는 회전 대신 분해·체결이 기본이다 */
  $("btnSpin").classList.toggle("btn-primary", t.primary === "spin"); $("btnSpin").classList.toggle("btn-ghost", t.primary !== "spin");
  $("btnScrewSim").classList.toggle("btn-primary", t.primary === "screw"); $("btnScrewSim").classList.toggle("btn-ghost", t.primary !== "screw");
  $("btnAssemble").classList.toggle("btn-primary", t.primary === "explode"); $("btnAssemble").classList.toggle("btn-ghost", t.primary !== "explode");
  $("mateList").innerHTML = a.mates.map((m, i) => {
    const conf = Math.round(m.confidence * 100);
    const cls = conf >= 85 ? "ok" : conf >= 70 ? "warn" : "err";
    return `<div class="joint-row" data-mate="${i}">
      <div class="jr-head"><b>${MATE_KO[m.kind] || m.kind}</b>
        ${m.part ? `<span class="tag" style="font-size:10.5px">${m.approx ? "규격 근사" : "정확"}</span>` : ""}
        <span class="conf ${cls}">${conf}%</span></div>
      <div class="jr-body"><div class="jr-meta">x ${m.x.toFixed(1)}${m.x1 !== undefined ? `–${m.x1.toFixed(1)}` : ""} mm · ${m.motion.type === "spin" ? "자전(X축)" : m.motion.type === "axial" ? "축방향 조립" : m.motion.type === "radial" ? "반경 방향 조립" : `나사 이송 ${m.motion.pitch}mm/회전`}</div>
      <div class="jr-ev">${m.evidence.map((e) => `· ${escapeHtml(e)}`).join("<br/>")}</div></div></div>`;
  }).join("");
  $("mateOrder").innerHTML = a.order.length ? a.order.map((o) => `<div class="gen-step done" style="padding:3px 0"><span class="dot"></span>${o.step}. ${escapeHtml(o.text)}</div>`).join("") : `<div class="hint">분해할 상대 부품이 없습니다.</div>`;
  const checks = assemblyChecks(a, state.dsl);
  $("mateChecks").innerHTML = checks.length ? checks.map((c) => `<div class="simcheck"><div class="r"><span>${c.label}</span><b class="${c.ok === true ? "ok" : c.ok === false ? "bad" : ""}">${c.value}</b></div><div class="n">${escapeHtml(c.note)}</div></div>`).join("") : `<div class="hint">점검할 결합부가 없습니다.</div>`;
  if (a.notes.length) $("mateChecks").innerHTML += `<div class="hint" style="margin-top:6px">${a.notes.map(escapeHtml).join("<br/>")}</div>`;
}
$("mateList").addEventListener("mouseover", (e) => { const r = e.target.closest("[data-mate]"); if (r) highlightMate(Number(r.dataset.mate)); });
$("mateList").addEventListener("mouseout", () => highlightMate(-1));
function highlightMate(i) {
  if (!state.assembly) return;
  for (const { wrap, index } of state.assembly.items) {
    wrap.traverse((o) => { if (o.isMesh && o.material) { o.material.emissive?.setHex(index === i ? 0x2a3a8a : 0x000000); } });
  }
  /* 자전축을 가리키면 축선을 그린다 */
  if (i >= 0 && state.mates?.mates[i]?.kind === "spin") showAxisLine(true); else showAxisLine(false);
}
let axisLine = null;
function showAxisLine(on) {
  if (!on) { if (axisLine) { scene.remove(axisLine); axisLine.geometry.dispose(); axisLine = null; } return; }
  if (axisLine || !model || !state.dsl) return;
  const L = totalLength(state.dsl);
  const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-L * 0.15, 0, 0), new THREE.Vector3(L * 1.15, 0, 0)]);
  axisLine = new THREE.Line(g, new THREE.LineDashedMaterial({ color: 0x7C89FF, dashSize: 4, gapSize: 3 }));
  axisLine.computeLineDistances();
  axisLine.position.copy(model.position);
  scene.add(axisLine);
}
$("btnSpin").onclick = () => { if (!state.sim) return; state.sim.spin(Number($("simRpm").value) || 300); $("btnSpin").classList.add("on"); renderSimGauge();
  toast(`회전 ${$("simRpm").value} rpm. 기준선으로 회전이 보입니다`, true); };
$("btnScrewSim").onclick = () => { if (!state.sim) return; const has = state.mates?.mates.some((m) => m.motion.type === "screw" && m.part); if (!has) return toast("이 부품에는 나사 체결부가 없습니다"); state.sim.screw(true); $("btnSpin").classList.remove("on"); renderSimGauge(); };
$("btnAssemble").onclick = () => { if (!state.sim) return; $("simExplode").value = 0; state.sim.applyExplode(0); state.sim.stop(); $("btnSpin").classList.remove("on"); renderSimGauge(); };
$("btnSimStop").onclick = () => { if (!state.sim) return; state.sim.stop(); $("btnSpin").classList.remove("on"); renderSimGauge(); };
$("simExplode").oninput = () => { if (!state.sim) return; state.sim.stop(); $("btnSpin").classList.remove("on"); state.sim.applyExplode(Number($("simExplode").value) / 100); renderSimGauge(); };
$("simRpm").oninput = () => { $("simRpmV").textContent = $("simRpm").value; state.sim?.setRpm(Number($("simRpm").value)); renderSimGauge(); };

/* ---- 내보내기: 단계가 아니라 3D 가 있으면 늘 오른쪽 패널에 있다 */
function showExportPanel() {
  if (!model) return;
  renderExportPanel();
  $("exportBlock").style.display = "";
}
function exportRoot() {
  /* 조립체 포함 체크 시 상대 부품까지 한 그룹으로 (부품은 항상 첫 자식) */
  if (!$("asmExport")?.checked || !state.assembly) return model;
  const g = new THREE.Group(); g.name = `${state.dsl.id || "shaft"}_assembly`;
  g.add(model.clone(true));
  const asm = state.assembly.group.clone(true);
  asm.position.sub(model.position); asm.updateMatrixWorld(true);
  g.add(asm);
  return g;
}
function renderExportPanel() {
  const dsl = state.dsl; const id = (dsl.id || "shaft").replace(/[^A-Za-z0-9_-]/g, "_");
  $("asmExportRow").style.display = state.assembly ? "flex" : "none";
  const row = (f, n, fn) => { const d = document.createElement("div"); d.className = "exp"; d.innerHTML = `<span class="f">${f}</span><span class="n">${n}</span><button title="내려받기"><svg><use href="#i-dl"/></svg></button>`; d.querySelector("button").onclick = fn; return d; };
  const l3 = $("dlList3d"), l2 = $("dlList2d"); l3.innerHTML = ""; l2.innerHTML = "";
  /* 정답과 형상이 완전히 같으면(키 순서·메타는 무시) 미리 만든 해석적 STEP 을 그대로 준다 */
  const stepPre = state.source?.kind === "sample" && state.sample?.files?.step && state.gold && goldenMetrics(dsl, state.gold).exact;
  /* 해석적 STEP 은 한 줄만: 라이브 서버가 있으면 지금 DSL 로 만들고, 없으면 정답 DSL 로 미리 만든 파일을 준다.
     (셋 다 내보내면 목록에 STEP 이 세 번 나와 무엇을 받는지 알 수 없다.) */
  const liveStep = state.mode === "live" && state.serverStep;
  if (stepPre && !liveStep) l3.appendChild(row("STEP", "정밀 곡면 · 기계 CAD 용", async () => { const b = await fetch(`./samples/${state.sample.id}/${state.sample.files.step}?v=${BUILD}`).then((r) => r.blob()); downloadBlob(b, `${id}.step`); }));
  if (liveStep) l3.appendChild(row("STEP", "정밀 곡면 · 지금 사양으로 생성", async () => {
    toast("STEP 을 만드는 중…");
    const r = await fetch("./api/step", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ dsl, formats: "step", download: "step" }) });
    if (!r.ok) { const j = await r.json().catch(() => ({})); return toast(`STEP 실패: ${j.error || r.status}`); }
    downloadBlob(await r.blob(), `${id}.step`); toast("STEP 내려받음", true);
  }));
  /* 면 STEP: 국부 가공(키홈·횡구멍·육각)을 자른 부위는 T 접합이 남아 셸이 닫히지 않는다 → 그때는 "셸" 이라고 말한다 */
  const cut = (state.built?.stats?.csg || 0) > 0;
  l3.appendChild(row("STEP·면", cut ? "삼각형 면 셸 · 가공 부위가 있어 솔리드로 닫히지 않음, 정밀 STEP 권장" : "삼각형 면 솔리드 · 편집한 사양도 바로", () => downloadBlob(exportSTEP(exportRoot(), id), `${id}_faceted.step`, "application/step")));
  l3.appendChild(row("STL", "3D 프린팅", () => downloadBlob(exportSTL(exportRoot()), `${id}.stl`, "model/stl")));
  l3.appendChild(row("GLB", "재질 포함 · 웹 뷰어", async () => downloadBlob(await exportGLB(exportRoot()), `${id}.glb`, "model/gltf-binary")));
  l3.appendChild(row("OBJ", "메시 (mm)", () => downloadBlob(exportOBJ(exportRoot()), `${id}.obj`, "text/plain")));
  l3.appendChild(row("FBX", "Maya, 3ds Max, Unity, Unreal", () => downloadBlob(exportFBX(exportRoot()), `${id}.fbx`, "application/octet-stream")));
  l3.appendChild(row("USD", "메시와 치수 사양을 함께", () => downloadBlob(exportUSDA(exportRoot(), dsl), `${id}.usda`, "text/plain")));
  l3.appendChild(row("USDZ", "AR 미리보기 패키지", async () => downloadBlob(await exportUSDZ(exportRoot()), `${id}.usdz`, "model/vnd.usdz+zip")));
  l3.appendChild(row("PLY", "정점과 면 (해석 도구)", () => downloadBlob(exportPLY(exportRoot()), `${id}.ply`, "text/plain")));
  l2.appendChild(row("DXF", "다시 그린 제작 도면", () => downloadBlob(exportDrawingDXF(dsl), `${id}_drawing.dxf`, "application/dxf")));
  l2.appendChild(row("SVG", "다시 그린 제작 도면", () => downloadBlob(exportDrawingSVG(dsl), `${id}_drawing.svg`, "image/svg+xml")));
  l2.appendChild(row("JSON", "치수 사양", () => downloadBlob(exportJSON(dsl), `${id}.dsl.json`, "application/json")));
  const hasGoldenStep = state.source?.kind === "sample" && state.sample?.files?.step;
  $("exportNote").textContent = stepPre || (state.mode === "live" && state.serverStep)
    ? "정밀 곡면 STEP 은 사양이 정답과 같을 때 받을 수 있고, 편집한 사양은 면 STEP 으로 받습니다."
    : hasGoldenStep ? "정밀 곡면 STEP 은 '정답 사양 보기'로 되돌리면 받을 수 있습니다. 지금 사양은 면 STEP 으로 받습니다."
    : "여기서는 면 STEP 을 받습니다. 정밀 곡면 STEP 은 서버 모드에서 제공됩니다.";
}

/* ================================================================ 입력: 샘플·업로드·합성 */
async function startFromSample(s) {
  const svg = await fetch(`./samples/${s.id}/${s.files.svg}?v=${BUILD}`).then((r) => r.text());
  const gold = await fetch(`./samples/${s.id}/${s.files.golden}?v=${BUILD}`).then((r) => r.json());
  await startRun({ kind: "sample", id: s.id, name: s.name_ko, svg, gold, sample: s });
}
async function startFromSynthetic() {
  const seed = Math.floor(Math.random() * 100000) + 1;
  const dsl = sampleShaft(seed);
  const svg = toSVG(drawShaft(dsl, { scale: "auto", seed }));
  await startRun({ kind: "synthetic", id: dsl.id, name: `${dsl.name_ko} #${seed}`, svg, gold: dsl });
}
async function startFromFile(file) {
  const dataUrl = await new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = rej; fr.readAsDataURL(file); });
  const isSvg = /svg/i.test(file.type) || /\.svg$/i.test(file.name);
  await startRun({ kind: "upload", id: file.name.replace(/\.[^.]+$/, "").replace(/[^A-Za-z0-9_-]+/g, "_") || "upload", name: file.name, svg: isSvg ? await file.text() : null, dataUrl: isSvg ? null : dataUrl });
}
async function startRun(src) {
  resetWorkspace(false);
  try { await loadSource(src); }
  catch (e) { toast(`도면을 열지 못했습니다: ${e.message}`); return; }
  pipe.active = true; pipe.done = 0; pipe.running = 0;
  $("projName").textContent = src.name;
  $("mName").textContent = src.name;
  $("lenBlock").style.display = src.kind === "upload" && state.mode !== "live" ? "" : (src.kind === "upload" ? "" : "none");
  if (src.gold) $("overallLen").value = "";
  renderStepper();
  runStep(1);
}
function resetWorkspace(full = true) {
  teardownAssembly(); clearModel(); highlightSegment(-1); showAxisLine(false);
  state.mates = null; $("simExplode").value = 0;
  if ($("unsuitable")) { $("unsuitable").style.display = "none"; $("unsuitable").innerHTML = ""; }
  state.source = null; state.raster = null; state.extraction = null; state.dsl = null; state.pristine = null; state.gold = null; state.built = null; state.verify = null; state.sample = null;
  state.showingGolden = false; $("btnGolden").textContent = "정답 사양 보기"; $("btnGolden").classList.remove("on");
  state.sheetMode = "original"; $("btnRegen").textContent = "재생성 도면"; $("btnRegen").classList.remove("on");
  state.simOn = false; $("btnSim").textContent = "조립 · 시뮬 켜기"; $("btnSim").classList.remove("on");
  state.forceRead = false; state.ratioOnly = false; state.partType = $("partType")?.value || ""; state.typeWhy = "";
  pipe.done = 0; pipe.running = 0; pipe.active = false;
  showSheet(false); $("stageEmpty").style.display = ""; $("dock").style.display = "none";
  for (const id of ["extractBlock", "analysisBlock", "segBlock", "featBlock", "jsonBlock", "verifyBlock", "mateBlock", "exportBlock"]) $(id).style.display = "none";
  state.analysis = null;
  ["mLen", "mDia", "mMass", "mMat", "mTris"].forEach((id) => ($(id).textContent = "—")); $("mNote").textContent = "";
  if (full) { $("projName").textContent = "새 프로젝트"; $("mName").textContent = "—"; $("lenBlock").style.display = "none"; $("overallLen").value = ""; }
  renderStepper();
}
$("btnNew").onclick = () => { resetWorkspace(true); toast("처음으로 돌아왔습니다"); };
$("btnRandom").onclick = () => startFromSynthetic();
$("chips").onclick = (e) => { const b = e.target.closest(".sample"); if (!b) return; const s = state.samples.find((x) => x.id === b.dataset.id); if (s) startFromSample(s); };
$("methodSeg").onclick = (e) => { const b = e.target.closest("button"); if (!b || b.disabled) return; document.querySelectorAll("#methodSeg button").forEach((x) => x.classList.toggle("on", x === b)); };
/* 드롭존 */
const drop = $("drop"), fileInput = $("file");
drop.onclick = () => fileInput.click();
fileInput.onchange = () => { if (fileInput.files[0]) startFromFile(fileInput.files[0]); fileInput.value = ""; };
drop.ondragover = (e) => { e.preventDefault(); drop.classList.add("over"); };
drop.ondragleave = () => drop.classList.remove("over");
drop.ondrop = (e) => { e.preventDefault(); drop.classList.remove("over"); const f = e.dataTransfer.files?.[0]; if (f) startFromFile(f); };
$("overallLen").onchange = () => { if (state.source && pipe.done >= 2 && state.extraction?.method === "silhouette") { pipe.done = 1; runStep(2); } };

/* ================================================================ 라이브러리 */
function renderLibrary() {
  $("libCount").textContent = `${state.samples.length}개`;
  $("libGrid").innerHTML = state.samples.map((s) => `
    <button class="item" data-id="${s.id}">
      <img class="thumb" src="./samples/${s.id}/${s.files.thumb || s.files.svg}?v=${BUILD}" alt="" loading="lazy" />
      <div class="meta"><div class="t">${s.name_ko} <span style="color:var(--text-3);font-weight:500">· ${s.name}</span></div>
      <div class="d">L${s.L} · ⌀${s.Dmax} · ${s.material} · 세그먼트 ${s.segments}${s.features.length ? ` · ${[...new Set(s.features)].join("/")}` : ""}${s.bore ? " · 보어" : ""} · 난이도 ${"●".repeat(s.difficulty)}${"○".repeat(5 - s.difficulty)}</div></div>
    </button>`).join("");
}
$("libGrid").onclick = (e) => { const b = e.target.closest(".item"); if (!b) return; closeLib(); const s = state.samples.find((x) => x.id === b.dataset.id); if (s) startFromSample(s); };
function openLib() { $("lib").style.display = ""; $("wsBody").style.display = "none"; renderLibrary(); }
function closeLib() { $("lib").style.display = "none"; $("wsBody").style.display = ""; resize(); }
$("btnLib").onclick = () => ($("lib").style.display === "none" ? openLib() : closeLib());
$("btnLibClose").onclick = closeLib;

/* QA 훅: 콘솔에서 상태를 들여다보고 판독기를 직접 돌릴 수 있다.
   배포 빌드에서는 아래 표식 사이가 통째로 잘려 나간다(tools/deploy-docs.mjs). */
/* qa:start */
window.__vringon = { state, pipe, runStep, extractHeuristic, verifyExtraction, goldenMetrics, drawShaft, toSVG, sampleShaft, buildShaft3D, applyDslChange, analyzeMates, assemblyChecks,
  get model() { return model; }, get scene() { return scene; }, get camera() { return camera; },
  /* QA: 탭이 가려져 rAF 가 멈춰도 한 프레임을 강제로 그리고 저장한다 */
  forceRender(dt = 0) { if (dt && state.sim) { state.sim.update(dt); renderSimGauge(); } controls.update(); renderer.render(scene, camera); },
  async shot(name = "shot") {
    this.forceRender();
    const dataUrl = renderer.domElement.toDataURL("image/png");
    const r = await fetch("/__save", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, dataUrl }) });
    return r.json();
  } };
/* qa:end */

/* ================================================================ 부팅 */
(async () => {
  try {
    const st = await fetch("./api/status", { cache: "no-store" }).then((r) => (r.ok ? r.json() : null)).catch(() => null);
    if (st?.ok && st.mode === "live") { state.mode = "live"; state.serverStep = !!st.step; }
  } catch {}
  const tag = $("modeTag");
  if (state.mode === "live") { tag.textContent = "AI 판독 사용"; tag.classList.add("live"); }
  else { tag.textContent = "체험 모드"; $("mServer").disabled = true; $("mServer").title = "서버 모드에서만"; $("tierPlan").disabled = true; }
  $("aboutHint").innerHTML = state.mode === "live"
    ? "도면을 올리면 <b>AI 가 치수까지 읽어</b> 사양으로 옮깁니다. 3D, 검증, 내려받기는 이 브라우저에서 바로 실행됩니다."
    : "샘플은 <b>미리 판독한 결과</b>를 보여 주고, 올린 도면은 이 브라우저가 <b>외형을 재서</b> 사양을 만듭니다. 치수 문자까지 읽는 AI 판독은 서버 모드에서 동작합니다.";
  try {
    const idx = await fetch(`./samples/index.json?v=${BUILD}`).then((r) => r.json());
    state.samples = idx.samples || [];
  } catch (e) { $("chips").innerHTML = `<span class="hint">샘플 목록을 불러오지 못했습니다: ${e.message}</span>`; return; }
  $("chips").innerHTML = state.samples.map((s) => `<button class="sample" data-id="${s.id}" title="${s.name}"><img class="thumb" src="./samples/${s.id}/${s.files.thumb || s.files.svg}?v=${BUILD}" alt="" loading="lazy" /><span class="lb">${s.name_ko}</span></button>`).join("");
  renderStepper();
  $("partType").innerHTML = `<option value="">모름 (판독 뒤 추정)</option>` + PART_TYPES.map((t) => `<option value="${t.id}">${t.ko}</option>`).join("");
  $("partType").onchange = () => { state.partType = $("partType").value; $("partType").dataset.userSet = state.partType ? "1" : ""; renderTypeHint(); if (state.simOn) { teardownAssembly(); spawnAssembly(); renderMatePanel(); } };
  renderTypeHint();
  initTour();   /* 처음 열었을 때 사용 순서대로 한 번 안내 (위쪽 "사용법" 으로 다시 보기) */
})();
