/* ==========================================================================
   Asset detail — a spatial interface over one enterprise asset.

   Not a file browser: the 3D model IS the index. Selecting a part selects its
   BOM line, its relations and its maintenance steps; playing a procedure step
   highlights the target part and draws the direction it comes off in. The same
   structured steps that drive this view are what a tablet card, an AR script or
   a printed work order would be generated from.
   ========================================================================== */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { requireAuth, logout } from "./auth.js?v=832e871a";

const $ = (id) => document.getElementById(id);
const user = requireAuth();
$("userTag").textContent = user;
$("btnLogout").onclick = logout;

const assetId = new URLSearchParams(location.search).get("id");
let ASSET = null;
let PARTS = new Map();          // linkId → THREE.Object3D
let selected = null;
let exploded = false;
let sweepRAF = 0;
let arrow = null;

/* ------------------------------------------------------------------ scene */
const stage = $("stage");
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c0c10);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;

const camera = new THREE.PerspectiveCamera(38, 1, 0.5, 8000);
camera.position.set(280, 210, 330);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;

scene.add(new THREE.HemisphereLight(0xdfe6ff, 0x2a2a33, 1.1));
const key = new THREE.DirectionalLight(0xffffff, 2.2);
key.position.set(220, 400, 240);
scene.add(key);
const grid = new THREE.GridHelper(1200, 48, 0x2a2a34, 0x1b1b22);
grid.material.transparent = true; grid.material.opacity = 0.5;
scene.add(grid);

function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(stage);
(function loop() {
  requestAnimationFrame(loop);
  controls.update();
  renderer.render(scene, camera);
})();

function fitView() {
  const box = new THREE.Box3();
  for (const p of PARTS.values()) box.expandByObject(p);
  if (box.isEmpty()) return;
  const c = box.getCenter(new THREE.Vector3());
  const r = box.getSize(new THREE.Vector3()).length() * 0.62 || 120;
  controls.target.copy(c);
  camera.position.copy(c).add(new THREE.Vector3(r * 0.95, r * 0.72, r * 1.05));
  camera.near = Math.max(0.5, r / 180); camera.far = r * 40;
  camera.updateProjectionMatrix();
}

/* ------------------------------------------------------------------- load */
const MAT = {
  base: new THREE.MeshStandardMaterial({ color: 0x9aa0aa, metalness: 0.75, roughness: 0.34 }),
  sel: new THREE.MeshStandardMaterial({ color: 0x5b6bf0, metalness: 0.45, roughness: 0.3, emissive: 0x1b2270 }),
  target: new THREE.MeshStandardMaterial({ color: 0xe8b84b, metalness: 0.5, roughness: 0.32, emissive: 0x4a3608 }),
  dim: new THREE.MeshStandardMaterial({ color: 0x6a6f79, metalness: 0.5, roughness: 0.6, transparent: true, opacity: 0.28 }),
};

async function load() {
  const r = await fetch(`/api/assets/${encodeURIComponent(assetId)}`).then((x) => x.json());
  if (!r.ok) { $("aName").textContent = "자산을 찾을 수 없습니다"; return; }
  ASSET = r.asset;
  renderHeader();
  renderTree();
  renderBOM();
  renderVersions();
  renderBasic();
  renderRelations();
  renderBottom("proc");
  findSimilar();

  const glb = ASSET.files?.glb?.url;
  if (!glb) return;
  const gltf = await new GLTFLoader().loadAsync(glb);
  const root = gltf.scene;
  root.updateWorldMatrix(true, true);
  /* GLTFExporter wraps the assembly in an extra group, so root.children is one
     node and naive index mapping attaches every link to it. Unwrap until the
     level that actually fans out, then match links by NAME first (the exporter
     keeps names, swapping spaces for underscores) and only fall back to order. */
  let level = root;
  const hasMesh = (c) => { let m = false; c.traverse((o) => { if (o.isMesh) m = true; }); return m; };
  while (true) {
    const meshKids = level.children.filter(hasMesh);
    if (meshKids.length === 1 && ASSET.structure.length > 1 && meshKids[0].children.length) level = meshKids[0];
    else break;
  }
  const kids = level.children.filter(hasMesh);
  const norm = (s) => String(s || "").replace(/[\s_]+/g, "").toLowerCase();
  const byName = new Map(kids.map((k) => [norm(k.name), k]));
  const used = new Set();
  ASSET.structure.forEach((s, i) => {
    let node = byName.get(norm(s.name)) || null;
    if (node && used.has(node)) node = null;
    if (!node) node = kids.find((k) => !used.has(k)) || null;   // order fallback
    if (!node) return;
    used.add(node);
    node.traverse((o) => { if (o.isMesh) o.material = MAT.base.clone(); });
    node.userData.home = node.position.clone();
    PARTS.set(s.id, node);
  });
  scene.add(root);
  resize(); fitView();
}

function renderHeader() {
  const b = ASSET.basic || {};
  $("aName").textContent = b.name || ASSET.assetId;
  $("aId").textContent = `${ASSET.assetId}${b.model ? " · " + b.model : ""}`;
  $("aStatus").textContent = `${b.status} · v${b.version}`;
  $("aReady").textContent = ASSET.readiness?.total != null ? `준비도 ${ASSET.readiness.total}/100` : "준비도 -";
}

function renderBasic() {
  const b = ASSET.basic || {};
  const rows = [["제조사", b.manufacturer], ["제품군", b.family], ["카테고리", b.category],
    ["출시일", b.releaseDate], ["담당 조직", b.owner], ["접근 권한", b.access],
    ["컴파일 파이프라인", ASSET.provenance?.pipeline], ["원본", ASSET.provenance?.sourceFile]];
  $("basic").innerHTML = rows.filter(([, v]) => v).map(([k, v]) =>
    `<div class="kv2"><span>${k}</span><b>${v}</b></div>`).join("");
}

/* --------------------------------------------------------- product structure */
function renderTree() {
  const byParent = new Map();
  for (const s of ASSET.structure) {
    const p = s.parent || "__root__";
    if (!byParent.has(p)) byParent.set(p, []);
    byParent.get(p).push(s);
  }
  /* neutral greys: coloured status dots made the panel look machine-generated,
     and the same information is spelled out in the part detail anyway */
  const colorOf = (s) => s.massStatus === "source_verified" ? "#C9CDD4"
    : s.massStatus === "derived_from_source" ? "#8A8F98" : "#5C6068";
  const walk = (id, depth) => (byParent.get(id) || []).map((s) => `
    <div class="tree-row" data-id="${s.id}" style="padding-left:${7 + depth * 13}px">
      <i class="dot" style="background:${colorOf(s)}"></i>
      <span>${s.name}</span>
      <span class="st">${s.semanticKo || s.semanticType || ""}</span>
    </div>${walk(s.id, depth + 1)}`).join("");
  $("tree").innerHTML = walk("__root__", 0) || ASSET.structure.map((s) =>
    `<div class="tree-row" data-id="${s.id}"><i class="dot" style="background:${colorOf(s)}"></i><span>${s.name}</span></div>`).join("");
}
$("tree").onclick = (e) => {
  const row = e.target.closest(".tree-row");
  if (row) selectPart(row.dataset.id);
};

function renderBOM() {
  const bom = ASSET.business?.bom || [];
  $("bom").innerHTML = bom.map((x) => `
    <div class="bom-row" data-part="${x.name}">
      <span><b>${x.partNo}</b>${x.name}</span>
      <span>${x.mass ? x.mass.toFixed(3) + "kg" : "—"}</span>
    </div>`).join("") || `<div class="hint">BOM 없음</div>`;
}

function renderVersions() {
  const b = ASSET.basic || {};
  const log = ASSET.operations?.changeLog || [];
  $("ver").innerHTML = `
    <div class="kv2"><span>현재</span><b>v${b.version} (${b.status})</b></div>
    <div class="kv2"><span>등록</span><b>${(ASSET.createdAt || "").slice(0, 10)}</b></div>
    <div class="kv2"><span>수정</span><b>${(ASSET.updatedAt || "").slice(0, 10)}</b></div>
    <div class="kv2"><span>이력</span><b>${log.length}건</b></div>`;
}

/* ------------------------------------------------------------- part select */
function selectPart(id) {
  selected = id;
  for (const [pid, node] of PARTS) {
    node.traverse((o) => { if (o.isMesh) o.material = pid === id ? MAT.sel.clone() : MAT.base.clone(); });
  }
  [...document.querySelectorAll(".tree-row")].forEach((r) => r.classList.toggle("on", r.dataset.id === id));
  const s = ASSET.structure.find((x) => x.id === id);
  if (!s) return;
  const bom = (ASSET.business?.bom || []).find((x) => x.name === s.name);
  const rels = (ASSET.relations || []).filter((e) => e.from === id || e.to === id);
  const size = s.bbox ? s.bbox.max.map((v, i) => ((v - s.bbox.min[i]) * 1000).toFixed(1)) : null;
  $("partHead").textContent = `부품 정보, ${s.name}`;
  $("partInfo").innerHTML = `
    <div class="kv2"><span>부품번호</span><b>${bom?.partNo || "-"}</b></div>
    <div class="kv2"><span>의미 유형</span><b>${s.semanticKo || s.semanticType || "-"}</b></div>
    <div class="kv2"><span>재질</span><b>${s.material || "-"}</b></div>
    <div class="kv2"><span>질량</span><b>${s.mass != null ? s.mass.toFixed(3) + " kg" : "-"}</b></div>
    <div class="kv2"><span>질량 근거</span><b>${s.massStatus === "source_verified" ? "닫힌 메시 실측"
      : s.massStatus === "derived_from_source" ? "원본 부피 배분" : "추정 (검토 필요)"}</b></div>
    <div class="kv2"><span>충돌체</span><b>${s.collision || "-"}</b></div>
    <div class="kv2"><span>치수 (mm)</span><b>${size ? size.join(" × ") : "-"}</b></div>
    <div class="kv2"><span>삼각형</span><b>${s.tris?.toLocaleString?.() || "-"}</b></div>
    <div style="margin-top:9px;font-size:11.5px;color:var(--text-3)">연결 관계 ${rels.length}건</div>`;
  $("selNote").style.display = "block";
  $("selNote").innerHTML = `<b>${s.name}</b><br/><span style="color:var(--text-3);font-size:11px">
    ${s.semanticKo || s.semanticType || "부품"} · ${s.material} · ${s.mass != null ? s.mass.toFixed(3) + "kg" : "-"}</span>`;
}

/* picking */
const ray = new THREE.Raycaster();
renderer.domElement.addEventListener("pointerdown", (e) => {
  const r = renderer.domElement.getBoundingClientRect();
  ray.setFromCamera(new THREE.Vector2(
    ((e.clientX - r.left) / r.width) * 2 - 1,
    -((e.clientY - r.top) / r.height) * 2 + 1), camera);
  for (const [id, node] of PARTS) {
    if (ray.intersectObject(node, true).length) { selectPart(id); return; }
  }
});

/* ------------------------------------------------------------- relations
   "고정된다 캐비닛 → 인터록 센서 (55%)" told the reader almost nothing: not what
   the relation means for the machine, not which way it acts, not why the number
   is there. Group by what the relation DOES, say it in a sentence, and put the
   axis and travel in the units an engineer thinks in. */
/* Korean particles agree with the previous syllable's final consonant. Writing
   "임펠러이(가)" everywhere is the tell of generated text, so pick the right
   one. Falls back to the neutral form for Latin or digit endings. */
function josa(word, pair) {
  const [withBatchim, without] = pair;
  const ch = String(word || "").trim().slice(-1);
  const code = ch.charCodeAt(0);
  if (!(code >= 0xac00 && code <= 0xd7a3)) return without;   // not Hangul
  return (code - 0xac00) % 28 ? withBatchim : without;
}
const iga = (w) => `${w}${josa(w, ["이", "가"])}`;
const eulreul = (w) => `${w}${josa(w, ["을", "를"])}`;
const wagwa = (w) => `${w}${josa(w, ["과", "와"])}`;
const euro = (w) => `${w}${josa(w, ["으로", "로"])}`;

const REL_GROUP = {
  fixed_to: {
    title: "고정 결합", order: 2,
    say: (a, b) => `${a}에 ${iga(b)} 고정되어 있습니다. 서로 상대 운동이 없습니다.`,
  },
  revolute_to: {
    title: "회전 관절", order: 0,
    say: (a, b, e) => `${iga(b)} ${a} 위에서 회전합니다. ${axisWord(e.axis)} 중심${limitWord(e)}.`,
  },
  continuous_to: {
    title: "회전 관절", order: 0,
    say: (a, b, e) => `${iga(b)} ${a} 위에서 제한 없이 회전합니다. ${axisWord(e.axis)} 중심.`,
  },
  prismatic_to: {
    title: "직선 이동", order: 1,
    say: (a, b, e) => `${iga(b)} ${eulreul(a)} 따라 직선 이동합니다. ${axisWord(e.axis)} 방향${limitWord(e)}.`,
  },
  compatible_with: {
    title: "호환", order: 3,
    say: (a, b, e) => `${wagwa(b)} 호환됩니다. ${e.note || ""}`.trim(),
  },
  replaces: {
    title: "대체", order: 4,
    say: (a, b, e) => `${eulreul(b)} 대체합니다. ${e.note || ""}`.trim(),
  },
  derived_from: {
    title: "출처", order: 5,
    say: (a, b, e) => `원본 ${b}에서 파생된 자산입니다.`,
  },
  used_in: { title: "사용처", order: 6, say: (a, b) => `${b}에 사용됩니다.` },
  documented_by: { title: "문서", order: 7, say: (a, b) => `${b}에 설명되어 있습니다.` },
  connects_sensor: { title: "센서 연결", order: 3, say: (a, b) => `${wagwa(b)} 신호로 연결됩니다.` },
};

/* Procedure verbs read as machine output in English. Say them the way a work
   order says them. */
const ACTION_KO = {
  power_off: "전원 차단", remove: "분리", extract: "인출", install: "장착",
  disconnect: "결선 해제", inspect: "점검", measure: "계측", adjust: "조정",
  drain: "배출", fill: "주입",
};

function axisWord(axis) {
  if (!Array.isArray(axis)) return "축";
  const n = ["X", "Y", "Z"];
  const i = axis.map(Math.abs).indexOf(Math.max(...axis.map(Math.abs)));
  const pure = Math.abs(Math.abs(axis[i]) - 1) < 0.12;
  return pure ? `${n[i]}축` : `${axis.map((v) => v.toFixed(2)).join(", ")} 방향 축`;
}
function limitWord(e) {
  const l = e.limits;
  if (!l) return "";
  if (e.type === "prismatic_to") {
    return `, 행정 ${(l.lower * 1000).toFixed(0)}~${(l.upper * 1000).toFixed(0)}mm`;
  }
  const d = (r) => (r * 180 / Math.PI).toFixed(0);
  return `, 가동 ${d(l.lower)}°~${d(l.upper)}°`;
}

function renderRelations() {
  const nameOf = (id) => ASSET.structure.find((s) => s.id === id)?.name || id;
  const all = (ASSET.relations || []).filter((e) => e.type !== "contains");
  if (!all.length) { $("rels").innerHTML = `<div class="hint">등록된 관계가 없습니다.</div>`; return; }

  const buckets = new Map();
  for (const e of all) {
    const g = REL_GROUP[e.type] || { title: e.type, order: 9, say: (a, b) => `${a} → ${b}` };
    if (!buckets.has(g.title)) buckets.set(g.title, { order: g.order, items: [] });
    const from = nameOf(e.from), to = nameOf(e.to);
    buckets.get(g.title).items.push({
      text: g.say(from, to, e),
      basis: e.note || "",
      confidence: e.confidence,
      partId: ASSET.structure.some((s) => s.id === e.to) ? e.to : null,
    });
  }
  const order = [...buckets.entries()].sort((a, b) => a[1].order - b[1].order);
  $("rels").innerHTML = order.map(([title, g]) => `
    <div class="relg">
      <div class="relg-t">${title} <span>${g.items.length}</span></div>
      ${g.items.map((it) => `
        <div class="relr"${it.partId ? ` data-part="${it.partId}"` : ""}>
          <div class="relr-x">${it.text}</div>
          ${it.basis ? `<div class="relr-b">판정 근거: ${it.basis}</div>` : ""}
          ${it.confidence != null && it.confidence < 0.7
            ? `<div class="relr-r">확인 필요, 판정 신뢰도 ${Math.round(it.confidence * 100)}%</div>` : ""}
        </div>`).join("")}
    </div>`).join("");

  const contains = (ASSET.relations || []).filter((e) => e.type === "contains").length;
  if (contains) {
    $("rels").innerHTML += `<div class="hint" style="margin-top:8px">부모·자식 포함 관계 ${contains}건은 왼쪽 제품 구조 트리에 계층으로 표시됩니다.</div>`;
  }
}
$("rels").addEventListener("click", (e) => {
  const row = e.target.closest(".relr");
  if (row?.dataset.part) selectPart(row.dataset.part);
});

/* -------------------------------------------------- similar assets (shape) */
async function findSimilar() {
  if (!Array.isArray(ASSET.signature)) return;
  try {
    const r = await fetch("/api/asset-search", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ signature: ASSET.signature, minSimilarity: 0.8 }),
    }).then((x) => x.json());
    const hits = (r.hits || []).filter((h) => h.asset.assetId !== ASSET.assetId).slice(0, 5);
    $("similar").innerHTML = hits.length
      ? hits.map((h) => `<div class="rel"><em>${h.reasons[0]?.match(/[\d.]+%/)?.[0] || ""}</em>
          <a href="asset.html?id=${h.asset.assetId}" style="color:var(--text-2)">${h.asset.name}</a></div>`).join("")
      : `<div class="hint">형상이 유사한 다른 자산이 아직 없습니다.</div>`;
  } catch { $("similar").innerHTML = `<div class="hint">유사도 계산 실패</div>`; }
}

/* ------------------------------------------------------- bottom tab region */
function renderBottom(tab) {
  const host = $("btabc");
  if (tab === "spec") {
    /* The runtime execution spec: what the compiler will do with this asset,
       part by part, and why. Written from the stored 3D rather than from a
       picture of it, so the fit numbers are measurements. */
    const txt = ASSET.specificationText;
    if (!txt) {
      host.innerHTML = `<div class="hint">이 자산에는 아직 실행 사양서가 없습니다.</div>`;
      return;
    }
    const parts = ASSET.specification?.parts || [];
    const tally = parts.reduce((a, p) => (a[p.representationType] = (a[p.representationType] || 0) + 1, a), {});
    host.innerHTML = `
      <div style="font-size:11.5px;color:var(--text-3);margin-bottom:8px">
        파트 ${parts.length}개 · 원본 메시 유지 ${tally.SOURCE_MESH || 0} ·
        파라메트릭 ${tally.PARAMETRIC || 0} · 하이브리드 ${tally.HYBRID || 0}
      </div>
      <pre style="font-size:11.5px;line-height:1.65;white-space:pre-wrap;color:var(--text-2);
        font-family:ui-monospace,monospace;margin:0">${txt.replace(/[<&]/g, (c) => (c === "<" ? "&lt;" : "&amp;"))}</pre>`;
    return;
  }
  if (tab === "proc") {
    const procs = ASSET.procedures || [];
    host.innerHTML = procs.map((p) => `
      <div style="margin-bottom:12px">
        <div style="font-weight:650;font-size:12.5px;color:var(--text);margin-bottom:6px">
          ${p.title || p.procedureId} <span style="color:var(--text-3);font-weight:500">· ${p.kind} · ${p.steps.length}단계
          · 예상 ${p.steps.reduce((n, s) => n + (s.minutes || 0), 0)}분</span></div>
        ${p.steps.map((s) => `
          <div class="stepr" data-proc="${p.procedureId}" data-seq="${s.sequence}">
            <span class="n">${s.sequence}</span>
            <span>
              <b style="color:var(--text)">${ACTION_KO[s.action] || s.action}</b> ${s.targetName || s.targetPart || ""}
              ${s.tool ? `<span style="color:var(--text-3)"> · 공구 ${s.tool}</span>` : ""}
              ${s.torque ? `<span style="color:var(--text-3)"> · ${s.torque}</span>` : ""}
              <div style="margin-top:2px">${s.instruction || ""}</div>
              ${s.safetyNotice ? `<div class="warn2">⚠ ${s.safetyNotice}</div>` : ""}
            </span>
          </div>`).join("")}
      </div>`).join("") || `<div class="hint">등록된 절차가 없습니다.</div>`;
  } else if (tab === "files") {
    const f = ASSET.files || {};
    const LABEL = { glb: "웹용 GLB", usd: "시뮬레이션용 USD", urdf: "ROS URDF", mjcf: "MuJoCo MJCF",
      step: "원본 STEP", json: "Canonical Asset Graph" };
    host.innerHTML = Object.entries(f).map(([k, v]) => `
      <div class="fl"><b>${k.toUpperCase()}</b><span>${LABEL[k] || k} · ${(v.bytes / 1024).toFixed(0)} KB</span>
        <a class="btn btn-ghost btn-sm" href="${v.url}" download>다운로드</a></div>`).join("")
      + `<div class="hint" style="margin-top:8px">모두 같은 Canonical Asset Graph에서 생성되어 서로 일치합니다.
         파트별 메시는 워크스페이스의 ZIP 번들에 포함됩니다.</div>`;
  } else if (tab === "hist") {
    const log = ASSET.operations?.changeLog || [];
    host.innerHTML = log.map((l) => `
      <div class="kv2"><span>${(l.at || "").replace("T", " ").slice(0, 16)} · ${l.by}</span><b>${l.what}</b></div>`).join("")
      || `<div class="hint">변경 이력 없음</div>`;
  } else {
    const v = ASSET.validation;
    const rev = ASSET.operations?.reviews || [];
    host.innerHTML = (v ? `<div style="margin-bottom:8px">검증: 오류 ${v.errors}건 · 경고 ${v.warnings}건</div>`
      + (v.lines || []).map((l) => `<div class="vl ${l.level}">${l.level === "ok" ? "✓" : l.level === "warn" ? "⚠" : "✕"} ${l.text}</div>`).join("")
      : `<div class="hint">검증 기록 없음</div>`)
      + rev.map((r) => `<div class="kv2" style="margin-top:8px"><span>${(r.at || "").slice(0, 10)} 검수</span><b>${r.readiness ?? "-"}/100</b></div>`).join("");
  }
}
$("btabs").onclick = (e) => {
  const b = e.target.closest("button"); if (!b) return;
  [...document.querySelectorAll("#btabs button")].forEach((x) => x.classList.toggle("on", x === b));
  renderBottom(b.dataset.t);
};

/* procedure step → 3D: highlight the target and draw the removal direction */
$("btabc").addEventListener("click", (e) => {
  const row = e.target.closest(".stepr");
  if (!row) return;
  [...document.querySelectorAll(".stepr")].forEach((r) => r.classList.toggle("on", r === row));
  const proc = (ASSET.procedures || []).find((p) => p.procedureId === row.dataset.proc);
  const step = proc?.steps.find((s) => String(s.sequence) === row.dataset.seq);
  if (!step) return;
  for (const [pid, node] of PARTS) {
    const isTarget = pid === step.targetPart;
    node.traverse((o) => { if (o.isMesh) o.material = isTarget ? MAT.target.clone() : MAT.dim.clone(); });
  }
  if (arrow) { scene.remove(arrow); arrow = null; }
  const node = PARTS.get(step.targetPart);
  if (node && Array.isArray(step.direction)) {
    const box = new THREE.Box3().setFromObject(node);
    const c = box.getCenter(new THREE.Vector3());
    const len = box.getSize(new THREE.Vector3()).length() * 0.9 || 60;
    arrow = new THREE.ArrowHelper(
      new THREE.Vector3().fromArray(step.direction).normalize(), c, len, 0xe8b84b, len * 0.24, len * 0.14);
    scene.add(arrow);
  }
  $("selNote").style.display = "block";
  const target = step.targetName || step.targetPart;
  $("selNote").innerHTML = `<b>${step.sequence}. ${ACTION_KO[step.action] || step.action}${target ? ` · ${target}` : ""}</b>
    <div style="color:var(--text-3);font-size:11px;margin-top:4px">${step.instruction || ""}</div>
    ${step.tool ? `<div style="font-size:11px;margin-top:4px">공구 ${step.tool}${step.torque ? ` · ${step.torque}` : ""}</div>` : ""}
    ${step.safetyNotice ? `<div style="color:var(--warn);font-size:11px;margin-top:4px">⚠ ${step.safetyNotice}</div>` : ""}`;
});

/* ------------------------------------------------------------------ tools */
$("tFit").onclick = fitView;
$("tExplode").onclick = () => {
  exploded = !exploded;
  $("tExplode").classList.toggle("on", exploded);
  const box = new THREE.Box3();
  for (const p of PARTS.values()) box.expandByObject(p);
  const c = box.getCenter(new THREE.Vector3());
  const span = box.getSize(new THREE.Vector3()).length() * 0.28;
  for (const node of PARTS.values()) {
    const home = node.userData.home || node.position.clone();
    if (!node.userData.home) node.userData.home = home;
    const b = new THREE.Box3().setFromObject(node);
    const dir = b.getCenter(new THREE.Vector3()).sub(c).normalize();
    node.position.copy(exploded ? home.clone().addScaledVector(dir, span) : home);
  }
};
$("tSweep").onclick = () => {
  const movable = (ASSET.relations || []).filter((e) => ["revolute_to", "continuous_to", "prismatic_to"].includes(e.type));
  if (!movable.length) { $("selNote").style.display = "block"; $("selNote").textContent = "가동 조인트가 없는 자산입니다"; return; }
  if (sweepRAF) { cancelAnimationFrame(sweepRAF); sweepRAF = 0; $("tSweep").classList.remove("on"); resetPose(); return; }
  $("tSweep").classList.add("on");
  const t0 = performance.now();
  const tick = () => {
    const t = (performance.now() - t0) / 1000;
    movable.forEach((e, i) => {
      const node = PARTS.get(e.to);
      if (!node) return;
      const home = node.userData.home || (node.userData.home = node.position.clone());
      const k = Math.sin(t * 1.1 + i * 0.8);
      const axis = new THREE.Vector3().fromArray(e.axis || [0, 1, 0]).normalize();
      if (e.type === "prismatic_to") {
        node.position.copy(home).addScaledVector(axis, k * 18);
        node.quaternion.identity();
      } else {
        const pivot = new THREE.Vector3().fromArray((e.origin || [0, 0, 0]).map((v) => v * 1000));
        const q = new THREE.Quaternion().setFromAxisAngle(axis, k * 0.6);
        node.quaternion.copy(q);
        node.position.copy(home).sub(pivot).applyQuaternion(q).add(pivot);
      }
    });
    sweepRAF = requestAnimationFrame(tick);
  };
  tick();
};
function resetPose() {
  for (const node of PARTS.values()) {
    if (node.userData.home) node.position.copy(node.userData.home);
    node.quaternion.identity();
  }
}
$("tReset").onclick = () => {
  if (sweepRAF) { cancelAnimationFrame(sweepRAF); sweepRAF = 0; $("tSweep").classList.remove("on"); }
  exploded = false; $("tExplode").classList.remove("on");
  resetPose();
  if (arrow) { scene.remove(arrow); arrow = null; }
  for (const node of PARTS.values()) node.traverse((o) => { if (o.isMesh) o.material = MAT.base.clone(); });
  [...document.querySelectorAll(".stepr")].forEach((r) => r.classList.remove("on"));
  $("selNote").style.display = "none";
  selected = null;
  fitView();
};

load().catch((e) => { console.error(e); $("aName").textContent = "불러오기 실패: " + e.message; });
