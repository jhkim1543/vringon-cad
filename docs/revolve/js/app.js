/* VRINGON 회전체 — 워크스페이스 (index.html 의 두뇌)
   5단계: 도면 입력 → 판독(DSL) → 3D CAD → 검증 → 내보내기.
   정적 모드(GitHub Pages)에서는 샘플의 AI 판독 결과를 재생하고 업로드는 브라우저 실루엣 판독으로,
   라이브 모드(온프렘 서버)에서는 시각 LLM 판독이 실제로 돈다. 그 외 형상·도면·검증·내보내기는 모두 이 브라우저에서 실행된다. */

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { validateShaft, normalizeShaft, DSL_VERSION } from "./shaft-schema.js?v=2ebcdab1";
import { computeMass, totalLength, maxDiameter, buildTopLine, collectEvents } from "./shaft-profile.js?v=2ebcdab1";
import { densityOf } from "./shaft-standards.js?v=2ebcdab1";
import { buildShaft3D, makeMaterials, setSectionPlanes } from "./shaft-cad.js?v=2ebcdab1";
import { drawShaft, toSVG } from "./shaft-drawing.js?v=2ebcdab1";
import { extractHeuristic, extractViaServer } from "./shaft-extract.js?v=2ebcdab1";
import { verifyExtraction, goldenMetrics } from "./shaft-verify.js?v=2ebcdab1";
import { sampleShaft } from "./shaft-sampler.js?v=2ebcdab1";
import { exportSTEP, exportSTL, exportGLB, exportOBJ, exportUSDA, exportUSDZ, exportFBX, exportPLY, exportDrawingDXF, exportDrawingSVG, exportJSON, downloadBlob } from "./shaft-export.js?v=2ebcdab1";

const BUILD = "2ebcdab1";
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
  built: null, verify: null,
  section: false, showingDrawing: false, showingGolden: false,
};
/* PIPE[k] 는 k+1 단계. cta/note 는 그 단계를 "실행"하는 버튼의 말 — 다음 단계가 무엇을 하는지 미리 알린다 */
const PIPE = [
  { n: 1, label: "도면 입력", cta: "도면 불러오기", note: "도면을 시트에 올립니다" },
  { n: 2, label: "판독 · DSL", cta: "판독 시작", note: "도면을 읽어 파라메트릭 DSL 로 옮깁니다 (실루엣 측정 + AI 판독)" },
  { n: 3, label: "3D CAD", cta: "3D CAD 만들기", note: "DSL 을 회전(lathe) + 국부 CSG 로 컴파일합니다" },
  { n: 4, label: "검증", cta: "검증 실행", note: "DSL 을 다시 그려 도면 실루엣과 대조하고, 읽은 치수 문자를 DSL 과 대조합니다" },
  { n: 5, label: "내보내기", cta: "내보내기", note: "STEP · STL · GLB · OBJ · USD · DXF · SVG · JSON" },
];
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
renderer.setAnimationLoop(() => { controls.update(); const below = camera.position.y < controls.target.y; grid.visible = gridWanted && !below; shadowCatcher.visible = !below; renderer.render(scene, camera); });
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
    setSheetImage(svgToDataUrl(svg), `재생성 도면 · 지금 DSL 에서 렌더러가 다시 그림 (원본이 아님)`);
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
    const where = s.n === 2 ? (state.mode === "live" ? "온프렘 AI + 브라우저 실루엣" : state.source?.kind === "sample" && state.sample?.files?.extracted ? "서버에서 미리 판독" : "이 브라우저에서 실행") : "이 브라우저에서 실행";
    return `<div class="gen-step ${st}"><span class="dot"></span>${s.n}. ${s.label}<span style="color:var(--text-3);font-size:11px;margin-left:6px">${where}</span></div>`;
  }).join("");
  $("btnGolden").classList.toggle("show", !!state.gold && pipe.done >= 2);
  $("btnSection").classList.toggle("show", pipe.done >= 3);
  $("btnDrawing").classList.toggle("show", pipe.done >= 3);
  $("btnRegen").classList.toggle("show", pipe.done >= 2);
}
function showGen(on, title, sub, steps) {
  $("gen").classList.toggle("on", on);
  if (title) $("genTitle").textContent = title;
  if (sub !== undefined) $("genSub").textContent = sub;
  $("genBar").style.width = `${(pipe.done / PIPE.length) * 100}%`;
  $("genSteps").innerHTML = (steps || []).map((s) => `<div class="gen-step ${s.state || ""}"><span class="dot"></span>${s.text}</div>`).join("");
}
$("stageNext").onclick = () => runStep(pipe.done + 1);
for (const b of document.querySelectorAll("#stepper .st")) b.onclick = () => runStep(Number(b.dataset.step));

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
  setSheetImage(dataUrl, src.kind === "sample" ? `샘플 도면 · ${src.name}` : src.kind === "synthetic" ? `합성 도면 · ${src.name}` : `업로드 · ${src.name}`);
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
    else if (n === 5) await stepExport();
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
  const steps = [{ text: "외형선만 남겨 실루엣 r(x) 측정", state: "run" }, { text: method === "server" ? "온프렘 시각 LLM 판독 (스키마 제약 + few-shot + 실루엣 힌트)" : method === "replay" ? "서버에서 미리 판독한 결과 불러오기" : "RDP 세그먼트화 → DSL" }, { text: "스키마·기하 검증 (수리 루프)" }];
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
    ex.notes.unshift(`온프렘 서버가 미리 판독해 저장한 결과입니다 (${j.tier === "plan" ? "설계 티어" : "텍스트 티어"} 시각 LLM${j.repaired ? ", 수리 1회" : ""}, ${((j.elapsed_ms || 0) / 1000).toFixed(1)}초).`);
  } else if (method === "server") {
    if (!sil.ok) toast("실루엣을 재지 못해 힌트 없이 판독합니다");
    const hints = sil.ok ? { draft: sil.dsl, silhouette: { L: sil.silhouette.L, top: Array.from(sil.silhouette.top), bottom: Array.from(sil.silhouette.bottom) }, sectioned: !!sil.dsl.bore } : null;
    const tier = $("tierPlan").checked ? "plan" : "text";
    const j = await extractViaServer(state.source.image, { hints, overallLength: Number($("overallLen").value) || null, tier });
    if (j.not_revolve) {
      showUnsuitable(`AI 판독기가 회전체 정면도로 보지 않았습니다 — ${j.reason}`, (j.notes || []).filter((n) => n !== j.reason));
      throw new Error("회전체 도면이 아닙니다: " + j.reason);
    }
    ex = { method: "server", dsl: normalizeShaft(j.dsl), dims_read: j.dims_read || [], notes: j.notes || [], serverVerify: j.verify, provider: j.provider, tier: j.tier, repaired: j.repaired, ms: j.elapsed_ms };
  } else {
    if (!sil.ok) { showUnsuitable("도면에서 부품 외형을 찾지 못했습니다.", sil.notes || []); throw new Error(sil.notes?.join(" ") || "실루엣을 찾지 못했습니다"); }
    if (sil.plausible === false) showUnsuitable("실루엣 판독 결과가 회전체 정면도답지 않습니다 — 결과는 참고용입니다.", sil.reasons || []);
    ex = { method: "silhouette", dsl: sil.dsl, dims_read: [], notes: sil.notes, ms: performance.now() - t0 };
    if (!L) ex.notes.unshift("전체 길이를 입력하지 않아 100mm 로 가정했습니다. 왼쪽 '전체 길이'에 값을 넣고 다시 판독하면 절대 치수가 맞습니다.");
  }
  ex.silhouette = sil.ok ? sil.silhouette : null;
  ex.draft = sil.ok ? sil.dsl : null;
  /* 파일명·표제란은 입력 이름을 따른다 (판독기는 'extracted' 만 준다) */
  if (!ex.dsl.id || ex.dsl.id === "extracted") ex.dsl.id = state.source.id || "shaft";
  if (!ex.dsl.name_ko) ex.dsl.name_ko = state.source.name || "회전체";
  if (ex.draft) { ex.draft.id = ex.dsl.id; ex.draft.name_ko = ex.dsl.name_ko; }
  steps[1].state = "done"; steps[2].state = "run"; showGen(true, "2단계 · 판독", "", steps);
  const v = validateShaft(ex.dsl);
  if (!v.ok && ex.draft) { ex.notes.push(`판독 결과가 실행기 검증에 걸려(${v.errors[0]}) 실루엣 초안으로 대체했습니다.`); ex.dsl = ex.draft; }
  state.extraction = ex;
  setDsl(ex.dsl, { pristine: true });
  steps[2].state = "done"; showGen(true, "2단계 · 판독", "", steps);
  renderExtractPanel();
  drawOverlay();
  toast(`판독 완료 — 세그먼트 ${ex.dsl.segments.length}개${ex.dims_read?.length ? `, 치수 문자 ${ex.dims_read.length}개` : ""}`, true);
  $("jsonBlock").scrollIntoView({ behavior: "smooth", block: "start" });
}
/* 적합하지 않은 입력: 억지로 3D 를 만들기보다 왜 안 되는지와 안내를 보여준다 */
function showUnsuitable(title, reasons) {
  const box = $("unsuitable"); if (!box) return;
  box.style.display = "block";
  box.innerHTML = `<b>${escapeHtml(title)}</b>${reasons?.length ? `<ul style="margin:6px 0 0 16px">${reasons.slice(0, 5).map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ul>` : ""}
    <div style="margin-top:8px"><a href="./guide.html" target="_blank" class="btn btn-ghost btn-sm">어떤 도면을 올려야 하나요 →</a></div>`;
  toast(title);
}
function renderExtractPanel() {
  const ex = state.extraction; if (!ex) return;
  $("extractBlock").style.display = "";
  const label = ex.method === "server" ? `온프렘 AI${ex.tier === "plan" ? " · 정밀" : ""}${ex.repaired ? " · 수리" : ""}` : ex.method === "replay" ? "서버 판독 재생" : "브라우저 실루엣";
  $("exMethod").textContent = label;
  const conf = ex.serverVerify?.confidence ?? (ex.method === "silhouette" ? 0.6 : null);
  $("exConf").textContent = conf == null ? "—" : `${Math.round(conf * 100)}%`;
  $("exConfBar").style.width = conf == null ? "0" : `${Math.round(conf * 100)}%`;
  $("exDims").textContent = ex.dims_read?.length ? `${ex.dims_read.length}개` : "실루엣만 (문자 미판독)";
  $("exMs").textContent = ex.ms ? `${(ex.ms / 1000).toFixed(1)}초` : "—";
  $("exNotes").innerHTML = (ex.notes || []).slice(0, 6).map((n) => `<div>· ${escapeHtml(n)}</div>`).join("");
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
  msg.textContent = v.ok ? (v.warnings.length ? `주의: ${v.warnings.join(" / ")}` : "실행기 검증 통과. 값을 고치면 3D·도면·검증이 다시 계산됩니다.") : `실행기 오류: ${v.errors.join(" / ")}`;
  renderSegTable(); renderFeatList(); renderModelInfo();
}
function applyDslChange(next, why = "") {
  const v = validateShaft(next);
  if (!v.ok) { toast(`고칠 수 없습니다: ${v.errors[0]}`); return false; }
  next.meta = { ...(next.meta || {}), source: "edited" };
  setDsl(next);
  if (pipe.done >= 3) rebuild3D();
  if (pipe.done >= 4) computeVerify();
  if (state.sheetMode === "regen") refreshSheet(); else drawOverlay();
  return true;
}
$("btnBuild").onclick = () => {
  let d; try { d = JSON.parse($("jsonText").value); } catch (e) { $("jsonText").classList.add("bad"); $("jsonMsg").classList.add("bad"); $("jsonMsg").textContent = `JSON 문법 오류: ${e.message}`; return; }
  d = normalizeShaft(d);
  if (applyDslChange(d)) toast("DSL 을 적용했습니다", true);
};
$("btnRevert").onclick = () => { if (!state.pristine) return; applyDslChange(JSON.parse(state.pristine)); toast("판독 결과로 되돌렸습니다"); };
$("btnGolden").onclick = () => {
  if (!state.gold) return;
  state.showingGolden = !state.showingGolden;
  $("btnGolden").classList.toggle("on", state.showingGolden);
  $("btnGolden").textContent = state.showingGolden ? "판독 DSL 로" : "정답 DSL 보기";
  applyDslChange(JSON.parse(JSON.stringify(state.showingGolden ? state.gold : (state.pristine ? JSON.parse(state.pristine) : state.dsl))));
  toast(state.showingGolden ? "정답 DSL 을 불러왔습니다 (도면을 만든 원본)" : "판독 결과로 돌아왔습니다", true);
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
  $("mLen").textContent = `${fmt(totalLength(dsl), 2)} mm`;
  $("mDia").textContent = `⌀${fmt(maxDiameter(dsl), 2)} mm`;
  $("mMat").textContent = dsl.material || "—";
  if (v.ok) { const m = computeMass(dsl, densityOf(dsl.material)); $("mMass").textContent = `${fmt(m.volume_cm3, 2)} cm³ · ${fmt(m.mass_g, m.mass_g < 10 ? 2 : 1)} g`; }
  else $("mMass").textContent = "—";
}

/* ---- 3단계: 3D */
async function stepBuild() {
  const steps = [{ text: "반단면 프로파일 → 회전(lathe) 밴드", state: "run" }, { text: "키홈·평면·육각·횡구멍: 국부 CSG" }, { text: "나사·널링 재질 · 절단면 재질" }];
  showGen(true, "3단계 · 3D CAD", "", steps);
  await sleep(120);
  rebuild3D();
  steps.forEach((s) => (s.state = "done")); showGen(true, "3단계 · 3D CAD", "", steps);
  showSheet(false); $("dock").style.display = "";
  fitView();
  toast(`3D 완료 — 삼각형 ${state.built.stats.tris.toLocaleString()}개, ${state.built.stats.ms}ms${state.built.stats.csg ? ` (CSG ${state.built.stats.csg}회)` : ""}`, true);
}
function rebuild3D() {
  const dsl = state.dsl; const v = validateShaft(dsl); if (!v.ok) return;
  clearModel();
  const built = buildShaft3D(dsl, { materials, radial: 96 });
  state.built = built; model = built.root;
  const L = totalLength(dsl), R = maxDiameter(dsl) / 2;
  model.position.set(-L / 2, R + 0.02, 0);   /* 바닥 위에 눕힌다 */
  scene.add(model);
  if (state.section) setSectionPlanes(built, [sectionPlane]);
  $("stageEmpty").style.display = "none";
  $("mTris").textContent = `${built.stats.tris.toLocaleString()} · ${built.stats.ms}ms`;
  $("mNote").textContent = built.notes.length ? built.notes.join(" · ") : `밴드 ${built.stats.bands}개, CSG ${built.stats.csg}회. 나사·널링은 관례대로 장식 표현(호출·STEP 은 규격을 싣습니다).`;
  return built;
}

/* ---- 4단계: 검증 */
async function stepVerify() {
  await sleep(150);
  computeVerify();
  showSheet(true); drawOverlay();
  $("verifyBlock").style.display = ""; $("verifyBlock").scrollIntoView({ behavior: "smooth", block: "start" });
  toast(`검증 완료 — ${state.verify.verdict === "pass" ? "통과" : state.verify.verdict === "review" ? "확인 필요" : "불일치"}`, state.verify.verdict === "pass");
}
function computeVerify() {
  const ex = state.extraction; if (!ex || !state.dsl) return;
  const rep = verifyExtraction({ dsl: state.dsl, inputSilhouette: ex.silhouette, dimsRead: ex.dims_read });
  state.verify = rep;
  $("verifyBlock").style.display = "";
  const vd = $("verdict"); vd.className = `verdict ${rep.verdict}`; vd.textContent = { pass: "통과", review: "확인 필요", fail: "불일치", invalid: "유효하지 않음" }[rep.verdict];
  $("vIou").textContent = rep.iou == null ? "측정 없음" : rep.iou.toFixed(3);
  $("vIouBar").style.width = rep.iou == null ? "0" : `${Math.round(rep.iou * 100)}%`;
  $("vDims").textContent = rep.dims ? `${rep.dims.matched}/${rep.dims.total} (${Math.round(rep.dims.rate * 100)}%)` : ex.method === "silhouette" ? "문자 미판독" : "—";
  $("vValid").textContent = rep.valid ? (rep.warnings.length ? `통과 (주의 ${rep.warnings.length})` : "통과") : `오류 ${rep.errors.length}`;
  $("vConf").textContent = `${Math.round(rep.confidence * 100)}%`;
  const msgs = [];
  if (rep.dims?.unmatched?.length) msgs.push(`DSL 에 반영되지 않은 치수 문자: ${rep.dims.unmatched.map((u) => u.text || u.value).join(", ")}`);
  if (!rep.valid) msgs.push(rep.errors.join(" / "));
  if (rep.iou != null && rep.iou < 0.9) msgs.push("실루엣이 도면과 어긋납니다. 왼쪽 표에서 세그먼트 길이·지름을 고쳐 보세요 — IoU 가 즉시 다시 계산됩니다.");
  $("vMsg").innerHTML = msgs.map((m) => `<div>· ${escapeHtml(m)}</div>`).join("");
  $("vMsg").className = `msg ${rep.verdict === "pass" ? "" : rep.verdict === "review" ? "warn" : "bad"}`;
  /* 정답이 있으면(샘플·합성) 정답 대비 지표 */
  const gc = $("goldenCmp");
  if (state.gold) {
    const m = goldenMetrics(state.dsl, state.gold);
    const pct = (x) => `${Math.round(x * 100)}%`;
    gc.innerHTML = `<div class="hint" style="margin-bottom:5px">정답 DSL 대비 (이 도면은 정답에서 그렸습니다)</div>
      <div class="cmp"><span class="h">지표</span><span class="h">값</span><span class="h"></span>
      <span>세그먼트 F1</span><b>${pct(m.segment.f1)}</b><span></span>
      <span>피처 F1</span><b>${pct(m.feature.f1)}</b><span></span>
      <span>전이 F1</span><b>${pct(m.transition.f1)}</b><span></span>
      <span>치수 일치율</span><b>${pct(m.dim_rate)}</b><span style="color:var(--text-3)">${m.dims_total}개</span>
      <span>실루엣 IoU</span><b>${m.iou.toFixed(3)}</b><span></span>
      <span>완전 일치</span><b>${m.exact ? "예" : "아니오"}</b><span></span></div>`;
  } else gc.innerHTML = "";
}

/* ---- 5단계: 내보내기 */
async function stepExport() {
  await sleep(120);
  renderExportPanel();
  $("exportBlock").style.display = ""; $("exportBlock").scrollIntoView({ behavior: "smooth", block: "start" });
  toast("내보내기 준비 완료", true);
}
function renderExportPanel() {
  const dsl = state.dsl; const id = (dsl.id || "shaft").replace(/[^A-Za-z0-9_-]/g, "_");
  const row = (f, n, fn) => { const d = document.createElement("div"); d.className = "exp"; d.innerHTML = `<span class="f">${f}</span><span class="n">${n}</span><button title="내려받기"><svg><use href="#i-dl"/></svg></button>`; d.querySelector("button").onclick = fn; return d; };
  const l3 = $("dlList3d"), l2 = $("dlList2d"); l3.innerHTML = ""; l2.innerHTML = "";
  /* 정답과 형상이 완전히 같으면(키 순서·메타는 무시) 미리 만든 해석적 STEP 을 그대로 준다 */
  const stepPre = state.source?.kind === "sample" && state.sample?.files?.step && state.gold && goldenMetrics(dsl, state.gold).exact;
  if (stepPre) l3.appendChild(row("STEP", "해석적 B-rep · 파이썬 실행기(CadQuery)가 정답 DSL 로 미리 생성", async () => { const b = await fetch(`./samples/${state.sample.id}/${state.sample.files.step}?v=${BUILD}`).then((r) => r.blob()); downloadBlob(b, `${id}.step`); }));
  if (state.mode === "live" && state.serverStep) l3.appendChild(row("STEP", "해석적 B-rep · 온프렘 실행기(CadQuery)가 지금 이 DSL 로 생성", async () => {
    toast("서버 실행기가 STEP 을 만드는 중…");
    const r = await fetch("./api/step", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ dsl, formats: "step", download: "step" }) });
    if (!r.ok) { const j = await r.json().catch(() => ({})); return toast(`STEP 실패: ${j.error || r.status}`); }
    downloadBlob(await r.blob(), `${id}.step`); toast("STEP (해석적 B-rep) 내려받음", true);
  }));
  l3.appendChild(row("STEP", "면분할 B-rep · 이 브라우저 메시에서 (AP214)", () => downloadBlob(exportSTEP(model, id), `${id}_faceted.step`, "application/step")));
  l3.appendChild(row("STL", "바이너리 · 3D 프린팅", () => downloadBlob(exportSTL(model), `${id}.stl`, "model/stl")));
  l3.appendChild(row("GLB", "재질 포함 · 웹/뷰어", async () => downloadBlob(await exportGLB(model), `${id}.glb`, "model/gltf-binary")));
  l3.appendChild(row("OBJ", "메시 (mm)", () => downloadBlob(exportOBJ(model), `${id}.obj`, "text/plain")));
  l3.appendChild(row("FBX", "ASCII 7.4 · Maya/3ds Max/Unity/Unreal/Omniverse (Blender 는 GLB 권장)", () => downloadBlob(exportFBX(model), `${id}.fbx`, "application/octet-stream")));
  l3.appendChild(row("USD", "usda · 메시 + DSL 파라미터를 custom 속성으로 (Omniverse/Isaac)", () => downloadBlob(exportUSDA(model, dsl), `${id}.usda`, "text/plain")));
  l3.appendChild(row("USDZ", "OpenUSD 패키지 · three.js r185 USDZExporter (AR Quick Look/Omniverse)", async () => downloadBlob(await exportUSDZ(model), `${id}.usdz`, "model/vnd.usdz+zip")));
  l3.appendChild(row("PLY", "ASCII 정점/면 (점군·해석 도구)", () => downloadBlob(exportPLY(model), `${id}.ply`, "text/plain")));
  l2.appendChild(row("DXF", "이 DSL 로 다시 그린 제작 도면 (R12, 레이어·치수)", () => downloadBlob(exportDrawingDXF(dsl), `${id}_drawing.dxf`, "application/dxf")));
  l2.appendChild(row("SVG", "이 DSL 로 다시 그린 제작 도면", () => downloadBlob(exportDrawingSVG(dsl), `${id}_drawing.svg`, "image/svg+xml")));
  l2.appendChild(row("JSON", "DSL 사양 (스키마: schema/shaft_dsl.schema.json)", () => downloadBlob(exportJSON(dsl), `${id}.dsl.json`, "application/json")));
  const hasGoldenStep = state.source?.kind === "sample" && state.sample?.files?.step;
  $("exportNote").textContent = stepPre ? "STEP(해석적)은 정답 DSL 과 같을 때 미리 만든 파일을, 편집한 DSL 은 면분할 STEP 또는 온프렘 실행기를 씁니다."
    : state.mode === "live" && state.serverStep ? "STEP(해석적)은 온프렘 파이썬 실행기가 지금 DSL 로 만듭니다."
    : hasGoldenStep ? "해석적 B-rep STEP 은 온프렘 서버(파이썬 실행기)에서 만듭니다. 이 샘플은 정답 DSL 로 미리 만든 STEP 이 있어, 위의 '정답 DSL 보기'로 되돌리면 그 파일을 받을 수 있습니다. 지금 DSL 은 면분할 STEP 으로 받습니다."
    : "해석적 B-rep STEP 은 온프렘 서버(파이썬 실행기)에서 제공됩니다. 여기서는 면분할 STEP 을 받습니다.";
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
  clearModel(); highlightSegment(-1);
  if ($("unsuitable")) { $("unsuitable").style.display = "none"; $("unsuitable").innerHTML = ""; }
  state.source = null; state.raster = null; state.extraction = null; state.dsl = null; state.pristine = null; state.gold = null; state.built = null; state.verify = null; state.sample = null;
  state.showingGolden = false; $("btnGolden").textContent = "정답 DSL 보기"; $("btnGolden").classList.remove("on");
  state.sheetMode = "original"; $("btnRegen").textContent = "재생성 도면"; $("btnRegen").classList.remove("on");
  pipe.done = 0; pipe.running = 0; pipe.active = false;
  showSheet(false); $("stageEmpty").style.display = ""; $("dock").style.display = "none";
  for (const id of ["extractBlock", "segBlock", "featBlock", "jsonBlock", "verifyBlock", "exportBlock"]) $(id).style.display = "none";
  ["mLen", "mDia", "mMass", "mMat", "mTris"].forEach((id) => ($(id).textContent = "—")); $("mNote").textContent = "";
  if (full) { $("projName").textContent = "새 프로젝트"; $("mName").textContent = "—"; $("lenBlock").style.display = "none"; }
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

/* QA 훅: 콘솔에서 상태를 들여다보고 판독기를 직접 돌릴 수 있다 */
window.__vringon = { state, pipe, runStep, extractHeuristic, verifyExtraction, goldenMetrics, drawShaft, toSVG, sampleShaft, buildShaft3D, applyDslChange, get model() { return model; } };

/* ================================================================ 부팅 */
(async () => {
  try {
    const st = await fetch("./api/status", { cache: "no-store" }).then((r) => (r.ok ? r.json() : null)).catch(() => null);
    if (st?.ok && st.mode === "live") { state.mode = "live"; state.serverStep = !!st.step; }
  } catch {}
  const tag = $("modeTag");
  if (state.mode === "live") { tag.textContent = "온프렘 라이브 · AI 판독"; tag.classList.add("live"); }
  else { tag.textContent = "정적 데모 · 판독 결과 재생"; $("mServer").disabled = true; $("mServer").title = "온프렘 서버에서만"; $("tierPlan").disabled = true; }
  $("aboutHint").innerHTML = state.mode === "live"
    ? "온프렘 서버에 연결됐습니다. 도면을 올리면 <b>시각 LLM 이 실제로 판독</b>하고, 브라우저 실루엣 측정을 힌트로 받으며, 검증에 걸리면 한 번 스스로 고칩니다. 3D·검증·내보내기는 이 브라우저가 실행합니다."
    : "정적 데모입니다. 샘플은 <b>온프렘 서버가 미리 판독한 결과</b>를 재생하고, 업로드·합성 도면은 이 브라우저의 <b>실루엣 판독</b>(결정론)으로 DSL 을 만듭니다. AI 판독은 온프렘 서버에서만 돕니다.";
  try {
    const idx = await fetch(`./samples/index.json?v=${BUILD}`).then((r) => r.json());
    state.samples = idx.samples || [];
  } catch (e) { $("chips").innerHTML = `<span class="hint">샘플 목록을 불러오지 못했습니다: ${e.message}</span>`; return; }
  $("chips").innerHTML = state.samples.map((s) => `<button class="sample" data-id="${s.id}" title="${s.name}"><img class="thumb" src="./samples/${s.id}/${s.files.thumb || s.files.svg}?v=${BUILD}" alt="" loading="lazy" /><span class="lb">${s.name_ko}</span></button>`).join("");
  renderStepper();
})();
