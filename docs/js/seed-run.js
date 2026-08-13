/* ==========================================================================
   Reference dataset builder.

   For every dataset: build the parts as real millimetre geometry, run the same
   structure compiler the product uses (so links, joints, collision shapes and
   mass are MEASURED, not declared), then attach the enterprise data and
   register it. Nothing here is hand-waved: if the compiler cannot find a joint,
   the catalogue says so.
   ========================================================================== */
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { requireAuth } from "./auth.js?v=8c817597";
import { compileAsset, validateAsset, readinessScore } from "./robot.js?v=8c817597";
import { verifyExports as verifyRobotExports, exportURDF, exportUSDA, exportMJCF, stripCIR } from "./robot-export.js?v=8c817597";
import { buildAssetRecord, shapeSignature } from "./asset-record.js?v=8c817597";
import { exportGLB, exportSTEP } from "./exporters.js?v=8c817597";
import { DATASETS as BASE, MAT_COLOR, withVariants } from "./seed-datasets.js?v=8c817597";
import { PRECISION_PARTS } from "./seed-precision.js?v=8c817597";

/* Precision parts first, and no variants of them: each one is a distinct
   machined family, not a size class of the same product. Registering them
   ahead of the machine datasets puts them at the top of the asset list. */
const DATASETS = [...PRECISION_PARTS, ...withVariants(BASE)];

const $ = (id) => document.getElementById(id);
const user = requireAuth();
$("userTag").textContent = user;

/* ------------------------------------------------------------- tiny scene */
const view = $("view");
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1.5);
renderer.setSize(view.clientWidth, view.clientHeight, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
view.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c0c10);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.03).texture;
scene.add(new THREE.HemisphereLight(0xdfe6ff, 0x2a2a33, 1.2));
const dir = new THREE.DirectionalLight(0xffffff, 2.1);
dir.position.set(300, 500, 400);
scene.add(dir);
const camera = new THREE.PerspectiveCamera(38, view.clientWidth / view.clientHeight, 1, 20000);

function frame(root, seed = "") {
  const bb = new THREE.Box3().setFromObject(root);
  const c = bb.getCenter(new THREE.Vector3());
  const size = bb.getSize(new THREE.Vector3());
  /* Distance from the bounding sphere and the actual field of view. The old
     factor put the camera at roughly half the distance needed to contain the
     object, so large parts filled the frame with one dark face and the JPEG
     compressed to an empty-looking 1.4KB. Account for the horizontal FOV too,
     since the thumbnail is wider than it is tall. */
  const radius = (size.length() / 2) || 100;
  const vFov = (camera.fov * Math.PI) / 180;
  const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
  const need = radius / Math.sin(Math.min(vFov, hFov) / 2);
  const r = need * 1.12;                              // a little air around it
  /* One fixed three-quarter view made every catalogue card look alike. Swing
     the camera by a stable hash of the asset id, and look down harder on wide
     flat machines than on tall ones so each silhouette reads differently. */
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  const az = (Math.abs(h) % 100) * Math.PI / 180 + Math.PI * 0.16;
  const tall = size.y / Math.max(1e-6, Math.max(size.x, size.z));
  const el = tall > 1.6 ? 0.34 : tall < 0.5 ? 0.72 : 0.52;
  // keep the offset direction unit-length so elevation does not change distance
  const dirV = new THREE.Vector3(Math.cos(az), el, Math.sin(az)).normalize();
  camera.position.copy(c).addScaledVector(dirV, r);
  camera.near = Math.max(0.1, r / 500); camera.far = r * 40;
  camera.lookAt(c);
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
}

/* --------------------------------------------------------- geometry build */
function primitive(kind, size) {
  const [a, b] = size;
  switch (kind) {
    case "box": return new THREE.BoxGeometry(size[0], size[1], size[2], 2, 2, 2);
    case "cyl": return new THREE.CylinderGeometry(a, a, b, 40);
    case "tube": return new THREE.CylinderGeometry(a, a, b, 36, 1, true);
    /* A turned part is a profile, not a cylinder. size is [[r,y], ...] in
       millimetres, so chamfers, steps, undercuts and bores are in the geometry
       instead of being described in a caption. The profile is centred on its
       own height so it drops into the same placement as the other primitives. */
    case "lathe": {
      const pts = size.map((p) => new THREE.Vector2(Math.max(0.0001, p[0]), p[1]));
      const h = Math.max(...size.map((p) => p[1])) - Math.min(...size.map((p) => p[1]));
      const g = new THREE.LatheGeometry(pts, 96);
      g.translate(0, -Math.min(...size.map((p) => p[1])) - h / 2, 0);
      return g;
    }
    case "sphere": return new THREE.SphereGeometry(a, 32, 20);
    case "cone": return new THREE.ConeGeometry(a, b, 34);
    case "torus": return new THREE.TorusGeometry(a, b, 18, 44);
    default: return new THREE.BoxGeometry(a || 10, b || 10, 10);
  }
}

/* Detail features. A naked cylinder reads as a placeholder; a cylinder with a
   bolt circle, cooling fins and a keyway reads as a machine part. These merge
   into the parent link so the part count stays meaningful. */
function detailGeometries(det, size) {
  const out = [];
  if (!det) return out;
  const put = (g, x, y, z, rx = 0, ry = 0, rz = 0) => {
    g.rotateX(rx); g.rotateY(ry); g.rotateZ(rz);
    g.translate(x, y, z);
    out.push(g);
  };
  if (det.bolts) {                                   // bolt circle on a flange
    const { n = 6, r = size[0] * 0.8, d = 4, h = 8, y = 0 } = det.bolts;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      put(new THREE.CylinderGeometry(d / 2, d / 2, h, 12), Math.cos(a) * r, y, Math.sin(a) * r);
    }
  }
  if (det.fins) {                                    // radial cooling fins
    const { n = 8, w = 3, h = 40, len = 12, y = 0, r = size[0] } = det.fins;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const g = new THREE.BoxGeometry(len, h, w);
      g.translate(r + len / 2, 0, 0);
      g.rotateY(-a);
      g.translate(0, y, 0);
      out.push(g);
    }
  }
  if (det.ribs) {                                    // stiffening ribs on a wall
    const { n = 4, w = 6, h = 30, len = 60, span = 200, y = 0, z = 0 } = det.ribs;
    for (let i = 0; i < n; i++) {
      const x = -span / 2 + (span / Math.max(1, n - 1)) * i;
      put(new THREE.BoxGeometry(w, h, len), x, y, z);
    }
  }
  if (det.ring) {                                    // raised collar or seal land
    const { r = size[0] * 1.05, t = 4, y = 0 } = det.ring;
    put(new THREE.TorusGeometry(r, t, 12, 40), 0, y, 0, Math.PI / 2);
  }
  if (det.ports) {                                   // cable glands / hose ports
    const { n = 3, r = 9, h = 26, pitch = 30, y = 0, z = 0, axis = "z" } = det.ports;
    for (let i = 0; i < n; i++) {
      const off = (i - (n - 1) / 2) * pitch;
      if (axis === "z") put(new THREE.CylinderGeometry(r, r, h, 16), off, y, z, Math.PI / 2);
      else put(new THREE.CylinderGeometry(r, r, h, 16), z, y, off, 0, 0, Math.PI / 2);
    }
  }
  if (det.teeth) {                                   // gear teeth ring
    const { n = 18, r = size[0], w = 6, h = 8, depth = 10, y = 0 } = det.teeth;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const g = new THREE.BoxGeometry(depth, h, w);
      g.translate(r, 0, 0);
      g.rotateY(-a);
      g.translate(0, y, 0);
      out.push(g);
    }
  }
  return out;
}

/* Most parts were authored as bare boxes and cylinders, so an air handler, a
   server rack and an elevator all rendered as the same grey slab. Derive
   features from what the part IS: motors get fins, covers get bolt circles,
   frames get ribs, gear parts get teeth. Counts and pitches come from the
   part's own dimensions and a hash of its name, so every product ends up with
   a silhouette of its own and the result is still reproducible. */
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return Math.abs(h);
}

function autoDetail(name, semantic, kind, size) {
  const h = hash(name);
  const pick = (n) => h % n;
  const round = kind === "cyl" || kind === "tube" || kind === "cone";
  const r = size[0] || 10, hgt = size[1] || 10;
  switch (semantic) {
    case "motor":
      return { fins: { n: 8 + pick(7), w: Math.max(2, r * 0.06), h: hgt * 0.78, len: r * 0.22, r } };
    case "gearbox":
      return round ? { bolts: { n: 6 + pick(5), r: r * 0.78, d: Math.max(3, r * 0.12), h: hgt * 1.05 } }
        : { ribs: { n: 3 + pick(3), w: r * 0.08, h: hgt * 0.7, len: (size[2] || r) * 0.9, span: r * 1.4 } };
    case "bearing":
      return { ring: { r: r * 1.06, t: Math.max(1.5, r * 0.09), y: 0 } };
    case "protective_cover":
    case "panel":
      return round ? { bolts: { n: 6 + pick(4), r: r * 0.82, d: Math.max(3, r * 0.1), h: hgt * 1.4 } }
        : { ribs: { n: 3 + pick(4), w: Math.max(4, r * 0.03), h: hgt * 0.82, len: Math.max(6, (size[2] || 20) * 0.12), span: r * 0.82 } };
    case "shell":
      return round ? { fins: { n: 6 + pick(6), w: r * 0.07, h: hgt * 0.6, len: r * 0.14, r } }
        : { ports: { n: 2 + pick(3), r: Math.max(5, r * 0.045), h: Math.max(14, r * 0.14), pitch: r * 0.16, y: -hgt * 0.22, z: (size[2] || r) * 0.5 } };
    case "frame":
    case "base":
      return round ? { bolts: { n: 4 + pick(5), r: r * 0.84, d: Math.max(4, r * 0.11), h: hgt * 1.3 } }
        : { ribs: { n: 3 + pick(4), w: Math.max(5, r * 0.035), h: hgt * 1.1, len: (size[2] || r) * 0.86, span: r * 0.8 } };
    case "actuator":
      return round ? { teeth: { n: 12 + pick(20), r, w: Math.max(3, r * 0.1), h: hgt * 0.5, depth: r * 0.12 } }
        : { ribs: { n: 2 + pick(3), w: Math.max(3, r * 0.06), h: hgt * 0.8, len: (size[2] || r) * 0.6, span: r * 0.6 } };
    case "transmission":
      return round && hgt < r * 4
        ? { teeth: { n: 14 + pick(16), r, w: Math.max(2, r * 0.12), h: hgt * 0.6, depth: r * 0.14 } }
        : { ring: { r: r * 1.12, t: Math.max(1.5, r * 0.12), y: hgt * 0.28 } };
    case "sensor":
    case "camera":
    case "lidar":
      return { bolts: { n: 2 + pick(3), r: r * 0.6, d: Math.max(2, r * 0.08), h: hgt * 1.2 } };
    case "gripper":
    case "finger":
    case "tool":
      return { ribs: { n: 2 + pick(3), w: Math.max(2, r * 0.09), h: hgt * 0.66, len: (size[2] || r) * 0.7, span: r * 0.5 } };
    default:
      return null;
  }
}

function buildAssembly(ds) {
  const root = new THREE.Group();
  root.name = ds.id;
  for (const p of ds.parts) {
    const [name, semantic, kind, size, pos, mat, opt] = p;
    /* Detail features are sized from [radius, height] numbers. A lathe part's
       size is a profile — an array of [r,y] pairs — so handing it straight to
       the feature code made every default read an array as a number and
       produced NaN vertices. One NaN part poisons the whole model's bounding
       box, which is why those assets rendered as an empty thumbnail. */
    const detailSize = kind === "lathe"
      ? [Math.max(...size.map((q) => q[0])),
        Math.max(...size.map((q) => q[1])) - Math.min(...size.map((q) => q[1]))]
      : size;
    const det = opt?.detail || autoDetail(name, semantic, kind, detailSize);
    const parts = [primitive(kind, size), ...detailGeometries(det, detailSize)];
    let geo = parts.length > 1 ? mergeGeometries(parts.map((g) => g.toNonIndexed()), false) : parts[0];
    if (!geo) geo = parts[0];
    /* Say so rather than shipping a mesh that quietly blanks the thumbnail and
       every bounding-box calculation downstream. */
    const pa = geo.getAttribute("position");
    if (!pa || !Number.isFinite(pa.array[0]) || !Number.isFinite(pa.array[pa.array.length - 1])) {
      console.error(`[seed] ${ds.id}/${name}: NaN geometry, falling back to the bare primitive`);
      geo = primitive(kind, size);
    }
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color: MAT_COLOR[mat] ?? 0x9aa0aa,
      metalness: ["steel", "stainless", "aluminum", "brass", "copper", "chrome", "gold", "silver", "titanium"].includes(mat) ? 0.85 : 0.1,
      roughness: mat === "chrome" ? 0.12 : mat === "glass" ? 0.06 : 0.42,
      transparent: mat === "glass", opacity: mat === "glass" ? 0.45 : 1,
    }));
    if (opt?.rot) m.rotation.set(opt.rot[0] || 0, opt.rot[1] || 0, opt.rot[2] || 0);
    m.position.set(pos[0], pos[1], pos[2]);
    m.name = name;
    m.userData.seedMaterial = mat;
    m.userData.seedSemantic = semantic;
    root.add(m);
  }
  return root;
}

/* -------------------------------------------------------------- enterprise */
function enrich(record, ds, cir) {
  const byName = new Map(ds.parts.map((p) => [p[0], p]));
  // the compiler names links from geometry order, so restore the authored names
  record.structure.forEach((s, i) => {
    const src = ds.parts[i];
    if (!src) return;
    s.name = src[0];
    s.semanticType = src[1];
    s.material = src[5];
  });
  record.basic = {
    ...record.basic,
    name: ds.name, model: ds.model, manufacturer: ds.maker,
    category: ds.category, family: ds.family, status: ds.status,
    version: ds.version, owner: ds.owner, access: "org",
  };

  record.business.bom = record.structure.map((s, i) => {
    const extra = ds.bomExtra?.[s.name] || {};
    return {
      partNo: extra.partNo || `${ds.model.replace(/[^A-Z0-9]/gi, "").toUpperCase().slice(0, 6)}-${String(i + 1).padStart(3, "0")}`,
      name: s.name, qty: 1, material: s.material, mass: s.mass,
      supplier: extra.supplier || `${ds.maker} 사내`,
      price: extra.price ?? null, stock: extra.stock ?? null,
      lifetime: extra.life ?? null, torque: extra.torque ?? null,
      discontinued: false, replacement: null,
    };
  });

  const idOf = (name) => record.structure.find((s) => s.name === name)?.id || null;
  record.procedures = (ds.procedures || []).map((p) => ({
    procedureId: p.procedureId,
    title: p.title,
    kind: p.kind,
    revision: "1",
    estimatedMinutes: p.minutes,
    requiredRole: p.role,
    steps: p.steps.map((s, n) => ({
      sequence: n + 1,
      action: s.action,
      targetPart: idOf(s.part),
      targetName: s.part,
      tool: s.tool,
      torque: s.torque,
      direction: s.dir,
      instruction: s.text,
      safetyNotice: s.safety,
      minutes: s.min,
    })),
  }));

  /* variants carry the relations that make catalogue search useful: what fits
     what, and what supersedes what. One BOM line on the spec variant is marked
     discontinued with its replacement so the "단종 대체" query has an answer. */
  if (ds.variantOf) {
    record.relations.push(
      { from: record.assetId, to: ds.variantOfModel, type: "compatible_with", note: `${ds.variantOfModel}와(과) 장착 인터페이스 공용. ${ds.variantNote}` },
      { from: record.assetId, to: ds.variantOf, type: "derived_from", note: `${ds.variantOfModel} 설계에서 파생` },
    );
    if (ds.variantKind === "spec") {
      const target = record.business.bom[Math.min(4, record.business.bom.length - 1)];
      if (target) {
        const old = target.partNo;
        target.discontinued = true;
        target.replacement = `${old}R`;
        record.relations.push({
          from: record.assetId, to: old, type: "replaces",
          note: `${old} 단종. 내식 사양 ${old}R로 대체합니다.`,
        });
      }
    }
  }

  record.operations = {
    ...record.operations,
    manuals: [{ title: `${ds.name} 정비 매뉴얼`, summary: ds.summary, pages: 48 }],
    faults: (ds.faults || []).map((f) => ({
      symptom: f.symptom,
      parts: f.parts.map((n) => idOf(n)).filter(Boolean),
      partNames: f.parts,
      action: f.action,
    })),
    inspections: [{ at: new Date().toISOString().slice(0, 10), result: "pass", by: ds.owner }],
    changeLog: [{ at: new Date().toISOString(), by: ds.owner, what: "레퍼런스 데이터셋 등록" }],
  };
  record.market = ds.market;
  record.summaryText = ds.summary;
  return record;
}

/* ------------------------------------------------------------------- run */
const rows = $("rows");
DATASETS.forEach((d) => {
  const el = document.createElement("div");
  el.className = "row3";
  el.id = `row-${d.id}`;
  el.innerHTML = `<span class="nm">${d.name}</span>
    <span class="st2" style="width:230px;text-align:right">대기</span>`;
  rows.appendChild(el);
});
const setRow = (id, text, cls) => {
  const el = $(`row-${id}`);
  if (!el) return;
  el.className = `row3 ${cls || ""}`;
  el.querySelector(".st2").textContent = text;
};

const b64 = (buf) => {
  const u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = "";
  for (let i = 0; i < u8.length; i += 8192) s += String.fromCharCode(...u8.subarray(i, i + 8192));
  return "base64:" + btoa(s);
};

async function seedOne(ds, overwrite) {
  if (!overwrite) {
    const exists = await fetch(`/api/assets/${encodeURIComponent(ds.id)}`).then((r) => r.json()).catch(() => ({}));
    if (exists.ok) { setRow(ds.id, "이미 등록됨", "ok2"); return "skip"; }
  }
  setRow(ds.id, "형상 생성", "run2");
  const root = buildAssembly(ds);
  scene.add(root);
  frame(root, ds.id);
  await new Promise((r) => setTimeout(r, 30));

  setRow(ds.id, "구조 컴파일", "run2");
  const cir = compileAsset(root, { name: ds.name, inputType: "mesh", defaultMaterial: "steel" });
  cir.links.forEach((l, i) => {
    const src = ds.parts[i];
    if (src) { l.name = src[0]; l.semanticType = src[1]; l.material = src[5]; }
  });

  /* Apply the product's assembly mates. Geometry cannot tell a bolted cylinder
     from a journal, so which parts turn is declared by the product definition,
     the same way a CAD assembly carries mates. The axis, origin and travel stay
     measured; only the joint TYPE is authored, and it is marked as such. */
  if (ds.mates) {
    const nameOf = new Map(cir.links.map((l) => [l.id, l.name]));
    for (const j of cir.joints) {
      const childName = nameOf.get(j.child);
      const spins = (ds.mates.spin || []).includes(childName);
      const slides = (ds.mates.slide || []).includes(childName);
      const want = spins ? "revolute" : slides ? "prismatic" : "fixed";
      if (j.type === want || (spins && j.type === "continuous")) {
        j.evidence = [`제품 정의(assembly mate)로 확정. ${j.evidence?.[0] || ""}`.trim()];
      } else {
        j.type = want;
        j.evidence = [`제품 정의(assembly mate)에서 ${want === "revolute" ? "회전" : want === "prismatic" ? "직선 이동" : "고정"}으로 확정. 축과 원점은 형상에서 실측`];
        if (want === "fixed") j.limits = null;
      }
      j.confidence = { type: 0.98, axis: j.confidence?.axis ?? 0.8, origin: j.confidence?.origin ?? 0.8, limits: j.confidence?.limits ?? 0.5 };
      j.status = "source_verified";
      j.requiresReview = false;
    }
  }

  const validation = validateAsset(cir);
  const exp = await verifyRobotExports(cir, root);
  validation.lines.push(...exp.lines);
  const readiness = readinessScore(cir, validation, exp.ok);

  setRow(ds.id, "파일 생성", "run2");
  let record = buildAssetRecord(cir, {
    assetId: ds.id, name: ds.name, model: ds.model, manufacturer: ds.maker,
    category: ds.category, family: ds.family, status: ds.status, version: ds.version,
    owner: ds.owner, derivedFrom: `${ds.id}_source.step`,
  }, { readiness, validation, cir: stripCIR(cir) });
  record = enrich(record, ds, cir);
  record.signature = shapeSignature(cir);

  const glb = await exportGLB(root);
  const files = {
    glb: b64(glb),
    usd: exportUSDA(cir),
    urdf: exportURDF(cir),
    mjcf: exportMJCF(cir),
    step: exportSTEP(root, ds.id),
    json: JSON.stringify(stripCIR(cir), null, 2),
  };
  const thumbCanvas = document.createElement("canvas");
  thumbCanvas.width = renderer.domElement.width;
  thumbCanvas.height = renderer.domElement.height;
  thumbCanvas.getContext("2d").drawImage(renderer.domElement, 0, 0);

  setRow(ds.id, "등록", "run2");
  const r = await fetch("/api/assets", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ record, files, thumb: thumbCanvas.toDataURL("image/jpeg", 0.82) }),
  }).then((x) => x.json());

  scene.remove(root);
  root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  if (!r.ok) throw new Error(r.error || "등록 실패");
  setRow(ds.id, `링크 ${cir.links.length} · 조인트 ${cir.joints.length} · 준비도 ${readiness.total}`, "ok2");
  return "ok";
}

async function runAll(overwrite) {
  $("go").disabled = true; $("reGo").disabled = true;
  let done = 0, failed = 0;
  for (const ds of DATASETS) {
    try {
      await seedOne(ds, overwrite);
      done++;
    } catch (e) {
      console.error(ds.id, e);
      setRow(ds.id, "실패: " + e.message, "err2");
      failed++;
    }
    $("prog").textContent = `${done + failed}/${DATASETS.length} 처리`;
    await new Promise((r) => setTimeout(r, 20));
  }
  $("prog").textContent = `완료 ${done}건${failed ? ` · 실패 ${failed}건` : ""}`;
  $("go").disabled = false; $("reGo").disabled = false;
}

$("go").onclick = () => runAll(false);
$("reGo").onclick = () => runAll(true);
