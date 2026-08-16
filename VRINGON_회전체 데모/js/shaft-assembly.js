/* VRINGON 회전체 — 조립체 생성 + 시뮬레이션
   shaft-mates.js 가 도면(DSL)에서 읽은 결합부마다 **상대 부품**을 규격 근사로 만들고,
   분해·조립(축/반경 방향), 자전(rpm), 나사 체결(회전+전진) 을 애니메이션한다.

   원칙: 우리 부품의 형상은 DSL 이 정확히 정하고, 상대 부품은 규격표 근사다(색과 라벨로 구분, userData.approx=true).
   운동 방향은 회전체 기하에서 정확하다. 자전축 = X, 축방향 조립 = ±X, 링·키·핀 = 반경 방향.

   좌표: 부품 로컬 원점은 왼쪽 끝면 x=0, 축 = +X (shaft-cad.js 와 동일). 호출자가 group 을 옮겨도 무방하다. */

import * as THREE from "three";
import { latheXY } from "./shaft-cad.js";
import { buildTopLine, totalLength, maxDiameter } from "./shaft-profile.js";

const DEG = Math.PI / 180;

export function makeMateMaterials() {
  return {
    ring: new THREE.MeshStandardMaterial({ color: 0x8FA0C8, metalness: 0.85, roughness: 0.38, name: "ring" }),
    key: new THREE.MeshStandardMaterial({ color: 0xC9A15A, metalness: 0.8, roughness: 0.4, name: "key" }),
    nut: new THREE.MeshStandardMaterial({ color: 0x9AA3AE, metalness: 0.88, roughness: 0.35, name: "nut" }),
    bearing: new THREE.MeshStandardMaterial({ color: 0x6E7681, metalness: 0.9, roughness: 0.3, name: "bearing" }),
    hub: new THREE.MeshStandardMaterial({ color: 0x7C89FF, metalness: 0.55, roughness: 0.45, transparent: true, opacity: 0.62, name: "hub" }),
    pin: new THREE.MeshStandardMaterial({ color: 0xD08C6A, metalness: 0.8, roughness: 0.4, name: "pin" }),
    tool: new THREE.MeshStandardMaterial({ color: 0x4E5665, metalness: 0.75, roughness: 0.5, name: "tool" }),
  };
}

/* 축 둘레 링(사각 단면). thetaLength 로 C형 멈춤링의 틈을 만든다 */
function ringMesh(rInner, rOuter, width, mat, thetaLength = Math.PI * 2, thetaStart = 0) {
  const pts = [{ x: 0, r: rInner }, { x: 0, r: rOuter }, { x: width, r: rOuter }, { x: width, r: rInner }, { x: 0, r: rInner }];
  const geo = latheXY(pts, Math.max(24, Math.round((thetaLength / (Math.PI * 2)) * 72)), 30, thetaStart, thetaLength);
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = m.receiveShadow = true;
  return m;
}
/* 육각 프리즘 (축 = X, 플랫이 ±Z 를 봄) */
function hexPrism(acrossFlats, length, mat) {
  const ac = acrossFlats / Math.cos(30 * DEG);
  const g = new THREE.CylinderGeometry(ac / 2, ac / 2, length, 6, 1, false);
  g.rotateY(30 * DEG); g.rotateZ(-90 * DEG);
  const m = new THREE.Mesh(g, mat); m.castShadow = m.receiveShadow = true; return m;
}
function cylX(r, length, mat, seg = 40) {
  const g = new THREE.CylinderGeometry(r, r, length, seg, 1, false); g.rotateZ(-90 * DEG);
  const m = new THREE.Mesh(g, mat); m.castShadow = m.receiveShadow = true; return m;
}
/* 둥근 끝 평행키 (DIN 6885 A형): x 길이, y 폭, z 높이 */
function keyMesh(length, width, height, mat) {
  const s = new THREE.Shape(), r = width / 2, hl = Math.max(0.01, length / 2 - r);
  s.moveTo(-hl, -r); s.lineTo(hl, -r); s.absarc(hl, 0, r, -Math.PI / 2, Math.PI / 2, false);
  s.lineTo(-hl, r); s.absarc(-hl, 0, r, Math.PI / 2, (3 * Math.PI) / 2, false);
  const g = new THREE.ExtrudeGeometry(s, { depth: height, bevelEnabled: false, curveSegments: 10 });
  g.translate(0, 0, -height / 2);
  const m = new THREE.Mesh(g, mat); m.castShadow = m.receiveShadow = true; return m;
}
/* 원판 허브(보어 + 키홈) — 반투명이라 축이 비쳐 보인다 */
function hubMesh(bore, outer, width, keyWidth, keyHeight, mat) {
  const pts = [{ x: 0, r: bore / 2 }, { x: 0, r: outer / 2 }, { x: width, r: outer / 2 }, { x: width, r: bore / 2 }, { x: 0, r: bore / 2 }];
  const body = new THREE.Mesh(latheXY(pts, 72, 30), mat);
  body.castShadow = body.receiveShadow = true;
  if (!keyWidth) return body;
  /* 키홈은 반투명 재질이라 CSG 없이 얇은 상자를 겹쳐 표시(시각적 힌트) */
  const g = new THREE.Group(); g.add(body);
  const slot = new THREE.Mesh(new THREE.BoxGeometry(width + 0.2, keyWidth, keyHeight * 0.55), mat.clone());
  slot.material.opacity = 0.28;
  slot.position.set(width / 2, 0, bore / 2 + keyHeight * 0.2);
  g.add(slot);
  return g;
}

/* ------------------------------------------------------------ 조립체 생성 */
export function buildAssembly(analysis, opts = {}) {
  const mats = opts.materials || makeMateMaterials();
  const group = new THREE.Group();
  group.name = "assembly";
  const items = [];   /* {mesh, mate, home:Vector3, dir:Vector3, distance, kind, spins, screw} */
  const L = analysis.length;

  analysis.mates.forEach((m, idx) => {
    if (!m.part) return;
    let mesh = null, home = new THREE.Vector3(), spins = true, screw = null;
    const p = m.params;
    if (m.kind === "snap") {
      /* C형 멈춤링: 홈 바닥에 물리고 축 밖으로 나온다. 틈 55° */
      mesh = ringMesh(p.groove_d / 2, p.ring_outer / 2, p.ring_thickness, mats.ring, (360 - 55) * DEG, 27.5 * DEG);
      home.set(m.x + (p.width - p.ring_thickness) / 2, 0, 0);
    } else if (m.kind === "bearing") {
      const g = new THREE.Group();
      const inner = ringMesh(p.bore / 2, (p.bore + (p.outer - p.bore) * 0.28) / 2, p.width, mats.bearing);
      const outer = ringMesh((p.outer - (p.outer - p.bore) * 0.28) / 2, p.outer / 2, p.width, mats.bearing);
      const shield = ringMesh((p.bore + (p.outer - p.bore) * 0.3) / 2, (p.outer - (p.outer - p.bore) * 0.3) / 2, p.width * 0.16, mats.hub);
      shield.position.x = p.width * 0.42;
      g.add(inner, outer, shield);
      mesh = g;
      home.set(m.x + Math.max(0, (p.seat_length - p.width) / 2), 0, 0);
    } else if (m.kind === "key") {
      const g = new THREE.Group();
      const key = keyMesh(p.length, p.width, p.key_height, mats.key);
      key.position.set(m.x + p.length / 2, 0, p.shaft_d / 2 - p.depth + p.key_height / 2);
      key.userData.role = "key";
      const hub = hubMesh(p.hub_bore, p.hub_outer, p.hub_width, p.width, p.key_height, mats.hub);
      hub.position.set(m.x + (p.length - p.hub_width) / 2, 0, 0);
      hub.userData.role = "hub";
      g.add(key, hub);
      mesh = g;
    } else if (m.kind === "screw") {
      const g = new THREE.Group();
      const nut = hexPrism(p.nut_across_flats, p.nut_height, mats.nut);
      const bore = cylX(p.nominal / 2, p.nut_height + 0.4, mats.nut);   /* 시각용 안쪽 표시 (CSG 없이) */
      bore.material = mats.hub;
      g.add(nut, bore);
      mesh = g;
      const dirX = m.motion.dir[0];
      home.set(dirX > 0 ? m.x1 - p.nut_height : m.x, 0, 0);
      g.position.x = p.nut_height / 2;   /* hexPrism 은 중심 기준 */
      screw = { pitch: p.pitch, dir: dirX };
    } else if (m.kind === "pin") {
      mesh = cylX(p.diameter / 2, p.pin_length, mats.pin, 24);
      mesh.rotation.z = 90 * DEG;   /* 축을 Y 로 */
      const a = (p.angle || 0) * DEG;
      mesh.rotation.x = -a;
      home.set(p.position, 0, 0);
      spins = true;
    } else if (m.kind === "wrench" && m.part === "hex_key") {
      /* 육각 렌치: 긴 팔 + 짧은 팔 */
      const g = new THREE.Group();
      const long = hexPrism(p.across_flats, p.depth + 26, mats.tool);
      long.position.x = (p.depth + 26) / 2;
      const short = hexPrism(p.across_flats, 22, mats.tool);
      short.rotation.z = 90 * DEG;
      short.position.set(p.depth + 26, 11, 0);
      g.add(long, short);
      mesh = g;
      home.set(p.end === "left" ? -p.depth : L - 0.001, 0, 0);
      if (p.end === "left") { mesh.scale.x = -1; home.x = p.depth; }
      screw = { pitch: m.motion.pitch || 1, dir: m.motion.dir[0] };
    } else if (m.kind === "wrench" && m.part === "wrench") {
      /* 스패너: 육각을 물는 U 자 근사 (두 팔 + 손잡이) */
      const g = new THREE.Group();
      const s = p.across_flats, t = Math.max(3, s * 0.25);
      const armA = new THREE.Mesh(new THREE.BoxGeometry(t, s * 1.5, t), mats.tool); armA.position.set(0, s * 0.75 + s / 2, 0);
      const armB = new THREE.Mesh(new THREE.BoxGeometry(t, s * 1.5, t), mats.tool); armB.position.set(0, -(s * 0.75 + s / 2), 0);
      const back = new THREE.Mesh(new THREE.BoxGeometry(t, s + t * 2, t), mats.tool); back.position.set(0, 0, -(s / 2 + t));
      const handle = new THREE.Mesh(new THREE.BoxGeometry(t, t * 1.2, s * 2.6), mats.tool); handle.position.set(0, 0, -(s / 2 + t + s * 1.3));
      g.add(armA, armB, back, handle);
      mesh = g; spins = false;
      home.set((m.x + m.x1) / 2, 0, 0);
    } else if (m.kind === "fit" && m.part === "mating_shaft") {
      mesh = cylX(p.bore / 2 - 0.05, p.length + 14, mats.hub, 48);
      mesh.position.x = (p.length + 14) / 2;
      home.set(m.x - 7, 0, 0);
      spins = true;
    } else if (m.kind === "fit" && m.part === "housing") {
      const pts = [{ x: 0, r: p.outer / 2 }, { x: 0, r: p.housing_outer / 2 }, { x: p.seat_length, r: p.housing_outer / 2 }, { x: p.seat_length, r: p.outer / 2 }, { x: 0, r: p.outer / 2 }];
      mesh = new THREE.Mesh(latheXY(pts, 72, 30), mats.hub);
      home.set(m.x, 0, 0);
      spins = false;
    } else if (m.kind === "fit" && m.part === "taper_hub") {
      const big = Math.max(p.d_start, p.d_end);
      const pts = [{ x: 0, r: p.d_start / 2 }, { x: 0, r: p.hub_outer / 2 }, { x: p.length, r: p.hub_outer / 2 }, { x: p.length, r: p.d_end / 2 }, { x: 0, r: p.d_start / 2 }];
      mesh = new THREE.Mesh(latheXY(pts, 72, 30), mats.hub);
      home.set(m.x, 0, 0);
    }
    if (!mesh) return;
    const wrap = new THREE.Group();
    wrap.name = `mate:${m.kind}:${idx}`;
    wrap.add(mesh);
    wrap.position.copy(home);
    wrap.userData = { mateIndex: idx, kind: m.kind, part: m.part, approx: m.approx !== false, spins, screw };
    const d = m.motion.dir;
    wrap.userData.dir = new THREE.Vector3(d[0], d[1], d[2]).normalize();
    wrap.userData.distance = m.motion.distance || 20;
    wrap.userData.home = home.clone();
    /* 키·허브는 서로 다른 방향으로 빠진다: 키는 반경, 허브는 축방향 */
    group.add(wrap);
    items.push({ wrap, mate: m, index: idx });
  });
  return { group, items, materials: mats };
}

/* ------------------------------------------------------------ 회전 마커
   회전체는 축대칭이라 자전해도 화면이 **똑같다**. 키홈·평면·구멍이 없는 부시·스페이서는
   시뮬레이션이 도는지 눈으로 알 수 없다. 그래서 부품에 기준 표시를 붙인다:
   ① 바깥면을 따라 축방향으로 난 좁은 띠(각도 6°) ② 왼쪽 끝면의 반경선 ③ 축 끝의 화살 표시.
   부품의 자식으로 넣어 같은 회전을 그대로 따라간다. 형상이 아니라 표시이므로 내보내기에서는 제외된다
   (이름이 marker: 로 시작하고, 내보내기 수집기가 ghost·:cut 과 함께 걸러낸다). */
export function makeSpinMarker(dsl, opts = {}) {
  const L = opts.length || totalLength(dsl) || 100;
  const R = opts.radius || maxDiameter(dsl) / 2 || 10;
  const mat = new THREE.MeshStandardMaterial({ color: 0xFF7A3D, emissive: 0x923417, emissiveIntensity: 0.6, metalness: 0.2, roughness: 0.5, side: THREE.DoubleSide, name: "spin_marker" });
  const g = new THREE.Group();
  g.name = "marker:spin";
  const eps = Math.max(0.05, R * 0.004);   /* 표면 위로 살짝 띄워 z-fighting 회피 */
  const halfA = 3.2 * DEG;
  /* ① 바깥면을 따라가는 좁은 띠: 상수 반경이 아니라 **DSL 외형선**을 그대로 따른다.
     (상수 R 로 하면 단차가 있는 부품에서 띠가 공중에 뜬다. 플랜지 부시에서 실제로 그랬다.)
     latheXY 의 각도 0° 는 +Z 이므로 +Y(화면 위)에 놓으려면 90° 를 중심으로 잡는다. */
  const prof = buildTopLine(dsl, 8).points
    .filter((p) => p.r > 1e-6)
    .map((p) => ({ x: Math.min(L, Math.max(0, p.x)), r: p.r + eps }));
  if (prof.length >= 2) {
    const stripe = new THREE.Mesh(latheXY(prof, 2, 90, Math.PI / 2 - halfA, 2 * halfA), mat);
    g.add(stripe);
  }
  /* ② 왼쪽 끝면의 반경선 (끝에서 봐도 각도를 알 수 있게) */
  const r0 = prof.length ? prof[0].r : R;
  const face = new THREE.Mesh(new THREE.BoxGeometry(Math.max(0.15, R * 0.012), r0 * 0.78, Math.max(0.6, R * 0.055)), mat);
  face.position.set(-Math.max(0.08, R * 0.006), r0 * 0.55, 0);
  /* ③ 오른쪽 끝의 화살 표시 (축을 따라 밖으로) */
  const rN = prof.length ? prof[prof.length - 1].r : R;
  const knob = new THREE.Mesh(new THREE.ConeGeometry(Math.max(0.7, R * 0.1), Math.max(1.6, R * 0.22), 14), mat);
  knob.rotateZ(-90 * DEG);
  knob.position.set(L + Math.max(0.9, R * 0.12), rN * 0.6, 0);
  g.add(face, knob);
  g.userData.isMarker = true;
  g.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; o.renderOrder = 2; } });
  return g;
}

/* ------------------------------------------------------------ 시뮬레이션 */
export function createAssemblySim({ part, assembly, analysis }) {
  const state = { mode: "idle", t: 0, explode: 0, rpm: 0, spinAngle: 0, screwT: 0, speed: 1 };
  const items = assembly.items;
  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  /* 분해 t: 0 조립 → 1 완전 분해. 부품마다 순서에 따라 구간을 나눠 순차로 빠진다 */
  const order = analysis.order.map((o) => o.mate);
  function applyExplode(t) {
    state.explode = clamp01(t);
    const n = Math.max(1, order.length);
    items.forEach(({ wrap, index }) => {
      const k = Math.max(0, order.indexOf(index));
      const t0 = k / n, t1 = (k + 1) / n;
      const local = clamp01((state.explode - t0) / (t1 - t0));
      const u = local * local * (3 - 2 * local);   /* smoothstep */
      const d = wrap.userData;
      wrap.position.copy(d.home).addScaledVector(d.dir, u * d.distance);
      /* 키홈 조립체: 허브는 축방향으로 함께 빠진다 */
      const mate = analysis.mates[index];
      if (mate.kind === "key" && mate.motion.follow_axial) {
        const hub = wrap.children[0]?.children?.find((c) => c.userData.role === "hub");
        const fa = mate.motion.follow_axial;
        if (hub) hub.position.x = (mate.x + (mate.params.length - mate.params.hub_width) / 2) + u * fa.dir[0] * fa.distance - (wrap.position.x - d.home.x) * 0;
      }
      /* 너트는 나사를 풀며 빠진다(회전 동반) */
      if (d.screw && state.mode !== "screw") wrap.rotation.x = -u * (d.distance / (d.screw.pitch || 1)) * Math.PI * 2 * d.screw.dir;
    });
  }
  function setRpm(rpm) { state.rpm = rpm; }
  function spin(rpm = 300) { state.mode = "spin"; state.rpm = rpm; }
  function screw(on = true) { state.mode = on ? "screw" : "idle"; state.screwT = 0; }
  function stop() { state.mode = "idle"; state.rpm = 0; }
  function reset() {
    stop(); applyExplode(0);
    part.rotation.x = 0; state.spinAngle = 0;
    items.forEach(({ wrap }) => { wrap.rotation.x = 0; });
  }
  function update(dt) {
    dt = Math.min(dt, 0.05) * state.speed;
    if (state.mode === "spin" && state.rpm) {
      const dTheta = (state.rpm / 60) * Math.PI * 2 * dt;
      state.spinAngle += dTheta;
      part.rotation.x = state.spinAngle;
      /* 축과 함께 도는 부품(키·허브·링·핀·상대 축)은 같이, 베어링 외륜·공구는 그대로 */
      items.forEach(({ wrap, index }) => {
        const mate = analysis.mates[index];
        if (mate.kind === "bearing") {
          const inner = wrap.children[0]?.children?.[0];
          if (inner) inner.rotation.x = state.spinAngle;   /* 내륜만 회전 */
          return;
        }
        if (wrap.userData.spins) wrap.rotation.x = state.spinAngle;
      });
    } else if (state.mode === "screw") {
      state.screwT += dt * 0.35;
      state.screwTurns = 0;
      const u = (Math.sin(state.screwT * Math.PI - Math.PI / 2) + 1) / 2;   /* 0→1→0 왕복 */
      items.forEach(({ wrap, index }) => {
        const d = wrap.userData;
        if (!d.screw) return;
        const dist = d.distance * (1 - u);
        wrap.position.copy(d.home).addScaledVector(d.dir, dist);
        wrap.rotation.x = -(dist / (d.screw.pitch || 1)) * Math.PI * 2 * d.screw.dir;
        /* 계기 두 값은 같은 기준(체결해 들어간 양)이어야 한다 — 한쪽만 남은 거리로 재면 비율이 피치와 안 맞는다 */
        state.screwAdvance = d.distance - dist;
        state.screwTurns = state.screwAdvance / (d.screw.pitch || 1);
      });
    }
  }
  return { state, applyExplode, spin, setRpm, screw, stop, reset, update,
    get exploded() { return state.explode; } };
}

/* 조립 상태 점검 (UI 표시용) — 상대 부품이 실제로 자리에 물리는지 기하로 확인 */
export function assemblyChecks(analysis, dsl) {
  const out = [];
  for (const m of analysis.mates) {
    if (m.kind === "snap") {
      const depth = (m.params.shaft_d - m.params.groove_d) / 2;
      out.push({ label: "멈춤링 물림 깊이", value: `${depth.toFixed(2)} mm`, ok: depth >= 0.3, note: `홈 깊이 = (축 ⌀${m.params.shaft_d} − 홈 ⌀${m.params.groove_d})/2. 0.3mm 미만이면 링이 빠집니다.` });
    } else if (m.kind === "key") {
      const seat = m.params.key_height - m.params.depth;
      out.push({ label: "키 돌출(허브 쪽)", value: `${seat.toFixed(2)} mm`, ok: seat > 0.2, note: `키 높이 ${m.params.key_height} − 축 홈 깊이 ${m.params.depth}. 허브 홈이 이만큼 물립니다.` });
    } else if (m.kind === "screw") {
      const turns = m.params.thread_length / m.params.pitch;
      out.push({ label: "너트 체결 회전수", value: `${turns.toFixed(1)} 회전`, ok: m.params.thread_length >= m.params.nut_height, note: `나사 길이 ${m.params.thread_length} ÷ 피치 ${m.params.pitch}. 너트 높이 ${m.params.nut_height}mm 보다 짧으면 완전 체결이 안 됩니다.` });
    } else if (m.kind === "bearing") {
      out.push({ label: "베어링 자리 길이", value: `${m.params.seat_length.toFixed(1)} / 폭 ${m.params.width}`, ok: m.params.seat_length >= m.params.width - 0.01, note: "자리 길이가 베어링 폭보다 짧으면 내륜이 단차에 닿지 않습니다(근사 계열)." });
    } else if (m.kind === "pin") {
      out.push({ label: "핀 여유", value: `⌀${m.params.diameter}`, ok: true, note: m.params.through ? "관통핀. 반대편으로 빠집니다." : `막힌 구멍 깊이 ${m.params.depth}` });
    }
  }
  return out;
}
