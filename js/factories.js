// VRINGON CAD — procedural part-separated model factories
// Approach adapted from img2threejs (Apache-2.0): each product is a factory
// returning a THREE.Group whose children are named, independently editable
// parts (the runtime hierarchy the generation pipeline emits on-prem).

import * as THREE from "three";

/* ---------------- materials ---------------- */
const M = {
  aluminum: () => new THREE.MeshStandardMaterial({ color: 0xb4b9c2, metalness: 0.85, roughness: 0.35 }),
  steel:    () => new THREE.MeshStandardMaterial({ color: 0x8d939e, metalness: 0.9, roughness: 0.3 }),
  darkPoly: () => new THREE.MeshStandardMaterial({ color: 0x2e3138, metalness: 0.1, roughness: 0.6 }),
  indigo:   () => new THREE.MeshStandardMaterial({ color: 0x6d7cff, metalness: 0.2, roughness: 0.45 }),
  brass:    () => new THREE.MeshStandardMaterial({ color: 0xc9a86a, metalness: 0.9, roughness: 0.35 }),
  glass:    () => new THREE.MeshStandardMaterial({ color: 0x0d0f14, metalness: 0.4, roughness: 0.08 }),
  rubber:   () => new THREE.MeshStandardMaterial({ color: 0x1d1f24, metalness: 0.0, roughness: 0.9 }),
  redPoly:  () => new THREE.MeshStandardMaterial({ color: 0xc84b4b, metalness: 0.15, roughness: 0.55 }),
};

function part(name, mat, label) {
  const g = new THREE.Group();
  g.name = name;
  g.userData = { isPart: true, label: label || name, baseColor: "#" + mat.color.getHexString() };
  g.userData.material = mat;
  return g;
}
function mesh(parent, geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = m.receiveShadow = true;
  parent.add(m);
  return m;
}
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt, rb, h, seg = 32) => new THREE.CylinderGeometry(rt, rb, h, seg);
const tor = (r, t, seg = 24, tub = 48) => new THREE.TorusGeometry(r, t, seg, tub);

function roundedPlate(w, d, r, h) {
  const s = new THREE.Shape();
  const hw = w / 2, hd = d / 2;
  s.moveTo(-hw + r, -hd);
  s.lineTo(hw - r, -hd); s.absarc(hw - r, -hd + r, r, -Math.PI / 2, 0);
  s.lineTo(hw, hd - r);  s.absarc(hw - r, hd - r, r, 0, Math.PI / 2);
  s.lineTo(-hw + r, hd); s.absarc(-hw + r, hd - r, r, Math.PI / 2, Math.PI);
  s.lineTo(-hw, -hd + r); s.absarc(-hw + r, -hd + r, r, Math.PI, Math.PI * 1.5);
  const g = new THREE.ExtrudeGeometry(s, { depth: h, bevelEnabled: false, curveSegments: 14 });
  g.rotateX(-Math.PI / 2); // extrude depth becomes +Y: plate occupies y ∈ [0, h]
  return g;
}

/* ================================================================
   1. Gearbox — 감속기 하우징 어셈블리
   ================================================================ */
function buildGearbox() {
  const root = new THREE.Group();
  root.name = "gearbox_assembly";

  const base = part("housing_base", M.aluminum(), "하우징 베이스");
  mesh(base, roundedPlate(3.4, 2.4, 0.3, 1.25), base.userData.material);
  mesh(base, roundedPlate(3.9, 2.9, 0.3, 0.16), base.userData.material); // bottom flange
  for (const [x, z] of [[-1.75, -1.25], [1.75, -1.25], [-1.75, 1.25], [1.75, 1.25]])
    mesh(base, cyl(0.17, 0.17, 1.25), base.userData.material, x * 0.98, 0.62, z * 0.98);
  root.add(base);

  const cover = part("housing_cover", M.aluminum(), "하우징 커버");
  mesh(cover, roundedPlate(3.4, 2.4, 0.3, 0.28), cover.userData.material, 0, 0, 0).position.y = 1.25;
  mesh(cover, roundedPlate(2.6, 1.7, 0.25, 0.14), cover.userData.material, 0, 0, 0).position.y = 1.53;
  mesh(cover, cyl(0.34, 0.34, 0.34), cover.userData.material, -0.8, 1.62, 0);
  mesh(cover, cyl(0.5, 0.5, 0.3), cover.userData.material, 0.75, 1.6, 0);
  root.add(cover);

  const shaft = part("input_shaft", M.steel(), "입력 샤프트");
  mesh(shaft, cyl(0.14, 0.14, 1.5), shaft.userData.material, -0.8, 2.35, 0);
  mesh(shaft, cyl(0.2, 0.2, 0.22), shaft.userData.material, -0.8, 1.85, 0);
  mesh(shaft, box(0.06, 0.5, 0.06), shaft.userData.material, -0.66, 2.6, 0);
  root.add(shaft);

  const gear = part("output_gear", M.brass(), "출력 기어");
  mesh(gear, cyl(0.62, 0.62, 0.3, 48), gear.userData.material, 0.75, 1.9, 0);
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    mesh(gear, box(0.14, 0.28, 0.1), gear.userData.material,
      0.75 + Math.cos(a) * 0.68, 1.9, Math.sin(a) * 0.68, 0, -a, 0);
  }
  mesh(gear, cyl(0.16, 0.16, 0.9), gear.userData.material, 0.75, 2.3, 0);
  root.add(gear);

  const bolts = part("flange_bolts", M.steel(), "체결 볼트 ×4");
  for (const [x, z] of [[-1.7, -1.22], [1.7, -1.22], [-1.7, 1.22], [1.7, 1.22]]) {
    mesh(bolts, cyl(0.11, 0.11, 0.1, 6), bolts.userData.material, x, 1.6, z);
    mesh(bolts, cyl(0.06, 0.06, 0.16), bolts.userData.material, x, 1.48, z);
  }
  root.add(bolts);

  root.position.y = -1.1;
  return root;
}

/* ================================================================
   2. Power drill — 전동 드릴 (금형 데모: 좌/우 하우징 셸)
   ================================================================ */
function drillShellGeometry(thickness) {
  const s = new THREE.Shape();
  s.moveTo(-1.8, 0.55);
  s.lineTo(1.1, 0.55);
  s.quadraticCurveTo(1.55, 0.55, 1.55, 0.12);
  s.quadraticCurveTo(1.55, -0.32, 1.1, -0.32);
  s.lineTo(0.55, -0.32);
  s.lineTo(0.85, -1.9);
  s.quadraticCurveTo(0.9, -2.2, 0.6, -2.2);
  s.lineTo(-0.05, -2.2);
  s.quadraticCurveTo(-0.35, -2.2, -0.3, -1.9);
  s.lineTo(-0.28, -0.32);
  s.lineTo(-1.8, -0.32);
  s.quadraticCurveTo(-2.15, -0.32, -2.15, 0.11);
  s.quadraticCurveTo(-2.15, 0.55, -1.8, 0.55);
  return new THREE.ExtrudeGeometry(s, { depth: thickness, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 3, curveSegments: 12 });
}
function buildDrill() {
  const root = new THREE.Group();
  root.name = "drill_assembly";

  const left = part("housing_left", M.indigo(), "하우징 셸 (L)");
  mesh(left, drillShellGeometry(0.34), left.userData.material, 0, 0, -0.4);
  root.add(left);

  const right = part("housing_right", M.indigo(), "하우징 셸 (R)");
  mesh(right, drillShellGeometry(0.34), right.userData.material, 0, 0, 0.06);
  root.add(right);

  const chuck = part("chuck", M.steel(), "척 · 스핀들");
  mesh(chuck, cyl(0.3, 0.34, 0.55, 24), chuck.userData.material, 1.85, 0.11, 0, 0, 0, Math.PI / 2);
  mesh(chuck, cyl(0.12, 0.2, 0.5, 24), chuck.userData.material, 2.35, 0.11, 0, 0, 0, Math.PI / 2);
  mesh(chuck, cyl(0.055, 0.055, 0.75), chuck.userData.material, 2.9, 0.11, 0, 0, 0, Math.PI / 2);
  root.add(chuck);

  const trigger = part("trigger", M.darkPoly(), "트리거");
  mesh(trigger, box(0.24, 0.42, 0.3), trigger.userData.material, 0.32, -0.62, 0);
  root.add(trigger);

  const battery = part("battery_pack", M.darkPoly(), "배터리 팩");
  mesh(battery, roundedPlate(1.5, 0.9, 0.12, 0.5), battery.userData.material, 0.28, -2.7, 0);
  root.add(battery);

  const motor = part("motor_core", M.brass(), "모터 코어");
  mesh(motor, cyl(0.26, 0.26, 1.3, 24), motor.userData.material, -1.0, 0.11, 0, 0, 0, Math.PI / 2);
  root.add(motor);

  root.rotation.y = -0.3;
  root.position.y = 0.9;
  return root;
}

/* ================================================================
   3. Smartwatch — 스마트워치
   ================================================================ */
function buildWatch() {
  const root = new THREE.Group();
  root.name = "smartwatch_assembly";

  const caseB = part("case_body", M.aluminum(), "케이스 바디");
  mesh(caseB, cyl(1.12, 1.05, 0.4, 48), caseB.userData.material);
  for (const sy of [1, -1]) {
    mesh(caseB, box(0.7, 0.28, 0.28), caseB.userData.material, 0, 0, sy * 1.06);
  }
  root.add(caseB);

  const bezel = part("bezel", M.steel(), "베젤");
  mesh(bezel, tor(1.02, 0.09, 24, 64), bezel.userData.material, 0, 0.22, 0, Math.PI / 2, 0, 0);
  root.add(bezel);

  const screen = part("display_glass", M.glass(), "디스플레이 글라스");
  mesh(screen, cyl(0.97, 0.97, 0.06, 48), screen.userData.material, 0, 0.26, 0);
  root.add(screen);

  const crown = part("crown", M.steel(), "크라운");
  mesh(crown, cyl(0.14, 0.14, 0.18, 14), crown.userData.material, 1.22, 0.1, -0.3, 0, 0, Math.PI / 2);
  root.add(crown);

  const btn = part("side_button", M.steel(), "사이드 버튼");
  mesh(btn, box(0.14, 0.1, 0.34), btn.userData.material, 1.16, 0.05, 0.35);
  root.add(btn);

  const strapT = part("strap_upper", M.rubber(), "스트랩 (상)");
  const st = mesh(strapT, roundedPlate(0.62, 1.9, 0.18, 0.13), strapT.userData.material, 0, -0.33, 2.05);
  st.rotation.x = 0.35;
  root.add(strapT);

  const strapB = part("strap_lower", M.rubber(), "스트랩 (하)");
  const sb = mesh(strapB, roundedPlate(0.62, 1.9, 0.18, 0.13), strapB.userData.material, 0, -0.33, -2.05);
  sb.rotation.x = -0.35;
  root.add(strapB);

  const back = part("case_back", M.steel(), "케이스 백");
  mesh(back, cyl(0.92, 0.92, 0.08, 48), back.userData.material, 0, -0.24, 0);
  root.add(back);

  root.rotation.x = 0.5;
  root.scale.setScalar(1.15);
  return root;
}

/* ================================================================
   4. L-Bracket — 산업용 브래킷 (금형/주조 데모)
   ================================================================ */
function buildBracket() {
  const root = new THREE.Group();
  root.name = "bracket_assembly";

  const basePlate = part("base_plate", M.aluminum(), "베이스 플레이트");
  mesh(basePlate, roundedPlate(3.0, 2.0, 0.2, 0.3), basePlate.userData.material);
  root.add(basePlate);

  const wall = part("vertical_wall", M.aluminum(), "수직 월");
  mesh(wall, box(3.0, 2.2, 0.3), wall.userData.material, 0, 1.4, -0.85);
  mesh(wall, cyl(0.42, 0.42, 0.3, 32), wall.userData.material, 0, 2.5, -0.85, Math.PI / 2, 0, 0);
  root.add(wall);

  const ribGeoShape = new THREE.Shape();
  ribGeoShape.moveTo(0, 0); ribGeoShape.lineTo(1.15, 0); ribGeoShape.lineTo(0, 1.7); ribGeoShape.closePath();
  const ribGeo = new THREE.ExtrudeGeometry(ribGeoShape, { depth: 0.16, bevelEnabled: false });

  const ribL = part("rib_left", M.aluminum(), "보강 리브 (L)");
  mesh(ribL, ribGeo, ribL.userData.material, -1.2, 0.3, -0.62, 0, Math.PI / 2, 0);
  root.add(ribL);

  const ribR = part("rib_right", M.aluminum(), "보강 리브 (R)");
  mesh(ribR, ribGeo.clone(), ribR.userData.material, 1.04, 0.3, -0.62, 0, Math.PI / 2, 0);
  root.add(ribR);

  const bosses = part("bolt_bosses", M.steel(), "볼트 보스 ×4");
  for (const [x, z] of [[-1.15, 0.55], [1.15, 0.55], [-1.15, -0.35], [1.15, -0.35]]) {
    mesh(bosses, cyl(0.2, 0.24, 0.14, 24), bosses.userData.material, x, 0.37, z);
    mesh(bosses, cyl(0.09, 0.09, 0.16, 24), M.darkPoly(), x, 0.4, z);
  }
  root.add(bosses);

  const bushing = part("pivot_bushing", M.brass(), "피벗 부싱");
  mesh(bushing, cyl(0.2, 0.2, 0.46, 28), bushing.userData.material, 0, 2.5, -0.85, Math.PI / 2, 0, 0);
  root.add(bushing);

  root.position.y = -1.0;
  root.rotation.y = 0.5;
  return root;
}

/* ================================================================
   5. Connector — 방수 커넥터 하우징
   ================================================================ */
function buildConnector() {
  const root = new THREE.Group();
  root.name = "connector_assembly";

  const body = part("housing_body", M.darkPoly(), "하우징 바디");
  mesh(body, roundedPlate(2.2, 1.3, 0.24, 1.1), body.userData.material);
  mesh(body, roundedPlate(1.8, 1.0, 0.18, 0.5), body.userData.material, 0, 0, 0).position.y = 1.1;
  root.add(body);

  const latch = part("latch_arm", M.indigo(), "래치 암");
  mesh(latch, box(0.5, 0.1, 1.5), latch.userData.material, 0, 1.75, 0.1, -0.12, 0, 0);
  mesh(latch, box(0.5, 0.22, 0.18), latch.userData.material, 0, 1.86, 0.78);
  root.add(latch);

  const pins = part("terminal_pins", M.brass(), "터미널 핀 ×6");
  for (let i = 0; i < 6; i++) {
    const x = -0.7 + (i % 3) * 0.7, z = i < 3 ? -0.25 : 0.25;
    mesh(pins, cyl(0.05, 0.05, 0.55, 12), pins.userData.material, x, -0.25, z);
    mesh(pins, box(0.12, 0.3, 0.12), pins.userData.material, x, 0.15, z);
  }
  root.add(pins);

  const seal = part("seal_ring", M.rubber(), "실 링");
  mesh(seal, tor(0.92, 0.07, 16, 48), seal.userData.material, 0, 0.55, 0, Math.PI / 2, 0, 0);
  const sealScale = seal.children[0]; sealScale.scale.set(1.25, 0.72, 1);
  root.add(seal);

  const capNut = part("coupling_nut", M.steel(), "커플링 너트");
  mesh(capNut, cyl(0.55, 0.55, 0.5, 8), capNut.userData.material, 0, 1.65, -0.0);
  root.add(capNut);

  root.position.y = -0.6;
  root.rotation.y = 0.4;
  return root;
}

/* ================================================================
   registry + prompt matching
   ================================================================ */
export const SAMPLES = [
  { id: "gearbox",   icon: "⚙️", name: "Gearbox",   ko: "감속기 하우징", build: buildGearbox,
    kw: ["gear", "기어", "감속", "하우징", "gearbox", "reducer"] },
  { id: "drill",     icon: "🔩", name: "Drill",     ko: "전동 드릴",     build: buildDrill,
    kw: ["drill", "드릴", "공구", "전동"] },
  { id: "watch",     icon: "⌚", name: "Watch",     ko: "스마트워치",    build: buildWatch,
    kw: ["watch", "워치", "시계", "웨어러블", "wearable"] },
  { id: "bracket",   icon: "📐", name: "Bracket",   ko: "산업용 브래킷", build: buildBracket,
    kw: ["bracket", "브래킷", "브라켓", "마운트", "mount", "주조"] },
  { id: "connector", icon: "🔌", name: "Connector", ko: "방수 커넥터",   build: buildConnector,
    kw: ["connector", "커넥터", "단자", "터미널", "방수"] },
];

let cursor = 0;
export function matchSample(prompt) {
  const p = (prompt || "").toLowerCase();
  for (const s of SAMPLES) if (s.kw.some((k) => p.includes(k))) return s;
  const s = SAMPLES[cursor % SAMPLES.length];
  cursor += 1;
  return s;
}

export function buildSample(id) {
  const s = SAMPLES.find((x) => x.id === id) || SAMPLES[0];
  const group = s.build();
  group.userData.sampleId = s.id;
  group.userData.displayName = s.ko;
  return group;
}

// img2threejs-style generation pipeline stages (shown in the progress log)
export const PIPELINE_STAGES = [
  "이미지·프롬프트 분석 (detail inventory)",
  "블록아웃 — 실루엣 프로포션",
  "구조 생성 — 파트 계층 분리",
  "폼 스컬핑 — 곡면 정제",
  "재질 할당 — PBR 머티리얼",
  "품질 게이트 — 매니폴드 검증",
];

export function collectParts(root) {
  const parts = [];
  root.traverse((o) => { if (o.userData && o.userData.isPart) parts.push(o); });
  return parts;
}

export function modelStats(root) {
  let tris = 0, meshes = 0;
  root.traverse((o) => {
    if (o.isMesh && o.geometry) {
      meshes += 1;
      const idx = o.geometry.getIndex();
      tris += idx ? idx.count / 3 : o.geometry.getAttribute("position").count / 3;
    }
  });
  const bb = new THREE.Box3().setFromObject(root);
  const size = bb.getSize(new THREE.Vector3());
  return { parts: collectParts(root).length, meshes, triangles: Math.round(tris),
    dims: [size.x, size.y, size.z].map((v) => (v * 40).toFixed(1)) }; // scene unit ≈ 40 mm
}
