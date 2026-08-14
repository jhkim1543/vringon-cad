/* ==========================================================================
   Step 4 — flight preview and design checks.

   Everything here is honest about its fidelity. The motion is kinematic — a
   scripted mission profile, not integrated aerodynamics — and the drop test is
   a single rigid body under gravity with a coefficient of restitution. The
   checks are closed-form: disk loading, per-rotor hover thrust, rotor
   clearance, CG against the support polygon. That is what can be computed
   truthfully from a specification without motor curves; anything deeper
   (6-DoF, SITL, CFD) needs data the image cannot provide, and the panel says
   so instead of inventing it.
   ========================================================================== */
import * as THREE from "three";
import { createFlightModel } from "./drone-6dof.js?v=396db0bf";

/* "로터 암", "모터 마운트", "프로펠러 가드" all contain rotor words and none of
   them should spin. Membership means: named like a rotor AND not named like the
   structure that carries one. */
const ROTOR_RX = /로터|프로펠러|rotor|propeller|prop\b/i;
const NOT_ROTOR_RX = /암|arm|마운트|mount|가드|guard|붐|boom|모터|motor|허브|캡|hub|cap|스피너|spinner/i;
const GEAR_RX = /랜딩|스키드|landing|skid|gear/i;
const isRotor = (name) => ROTOR_RX.test(name) && !NOT_ROTOR_RX.test(name);

const G = 9.81;

export function createDroneSim({ root, spec }) {
  /* Rotors spin in place, so each needs its own pivot at its own centre —
     spinning the mesh's Y rotation only works if the geometry is centred,
     which placements() guarantees for repeated parts. */
  /* Each rotor spins about its own thin axis. Discs were axisymmetric so a
     wrong axis was invisible; real blades make it obvious — a cruise
     propeller (blades in XY) must spin about z, not swing about y like a
     rudder. The thin dimension of the local geometry names the axis. */
  const rotors = [];
  const spinAxis = [];
  root.traverse((o) => {
    if (!o.isMesh || !isRotor(`${o.name} ${o.userData?.regionId || ""}`)) return;
    rotors.push(o);
    o.geometry.computeBoundingBox();
    const s = o.geometry.boundingBox.getSize(new THREE.Vector3());
    spinAxis.push(s.y <= s.x && s.y <= s.z ? "y" : s.z <= s.x ? "z" : "x");
  });
  const spin = (r, i, delta) => { r.rotation[spinAxis[i]] += delta; };

  const home = { pos: root.position.clone(), rot: root.rotation.clone() };
  const state = {
    mode: "idle",          // idle | fly | drop | rotorout
    t: 0,
    spin: 0,               // rotor angular velocity, rad/s
    vy: 0,                 // drop velocity
    bounces: 0,
    wind: 0,               // m/s, side gust during hover
    payload: 0,            // kg added to MTOW for what-if rows
    failedRotor: -1,
    events: [],
  };
  function setWind(mps) { state.wind = Math.max(0, Math.min(15, mps)); }
  function setPayload(kg) { state.payload = Math.max(0, kg); }

  const platform = spec?.classification?.platform_family || "MULTIROTOR";

  /* The integrated model is built lazily: it costs an inertia pass over every
     mesh, and the scripted preview is what most users watch. */
  let flight = null;
  const flightModel = () => {
    if (!flight) flight = createFlightModel({ root, spec, rotors });
    return flight;
  };

  function reset() {
    if (flight) flight.reset();
    root.position.copy(home.pos);
    root.rotation.copy(home.rot);
    state.mode = "idle"; state.t = 0; state.spin = 0; state.vy = 0; state.bounces = 0;
  }

  /* 6-DoF: the same buttons, but the motion is integrated from thrust,
     inertia and a controller rather than played back. */
  function flyPhysical(alt = 0.6) {
    reset();
    const fm = flightModel();
    fm.arm(alt);
    fm.setWind(state.wind);
    state.mode = "physical";
    state.events = [];
  }
  function failRotorPhysical() {
    if (state.mode !== "physical") flyPhysical();
    const fm = flightModel();
    // let it settle into hover before the failure, so the change is legible
    for (let i = 0; i < 600; i++) fm.step(1 / 200);
    fm.failRotor(0);
    state.events.push("로터 1개 정지");
  }

  /* ------------------------------------------------------------- missions */
  function fly() { reset(); state.mode = "fly"; state.events = []; }
  function drop(height = 400) {
    reset();
    root.position.y = home.pos.y + height;
    state.mode = "drop"; state.vy = 0; state.events = [];
  }
  function stop() { reset(); }

  /* Single-rotor failure, played by platform class. The behaviours follow the
     fault-tolerance literature: a quad cannot keep yaw after losing a rotor —
     the studied recovery is to give up yaw and spin (Mueller & D'Andrea);
     a hexa/octo redistributes thrust and continues degraded; a fixed wing
     glides. The numbers shown are kinematics of those regimes, not a control
     simulation. */
  function rotorOut() {
    reset();
    state.mode = "rotorout";
    state.t = 0;
    state.events = [];
    state.failedRotor = rotors.length ? Math.floor(rotors.length / 2) : -1;
    root.position.y = home.pos.y + MISSION.alt;   // failure happens in hover
    state.vy = 0;
  }

  function rotorOutUpdate(dt) {
    state.t += dt;
    const n = rotors.length;
    const failed = state.failedRotor;
    if (platform === "MULTIROTOR" && n <= 4) {
      /* yaw authority is gone: accelerate into a flat spin while descending
         under partial thrust. Descent ~35% of free-fall on remaining thrust. */
      const spinRate = Math.min(8, state.t * 3.5);
      root.rotation.y += spinRate * dt;
      root.rotation.z = home.rot.z + Math.min(0.30, state.t * 0.25);
      state.vy -= G * 1000 * 0.35 * dt;
      root.position.y += state.vy * dt;
      rotors.forEach((r, i) => { if (i !== failed) spin(r, i, (i % 2 ? -1 : 1) * 110 * dt); });
      if (root.position.y <= home.pos.y) {
        root.position.y = home.pos.y;
        state.events.push(`회전 하강 착지 — ${state.t.toFixed(1)}초`);
        state.mode = "idle";
      }
    } else if (platform === "MULTIROTOR" || platform === "FIXED_WING_VTOL") {
      /* redundant rotors: hold altitude with a visible limp — extra tilt
         toward the dead arm, slow parasitic yaw, remaining rotors sped up */
      const k = state.t;
      root.rotation.z = home.rot.z + 0.10 * Math.sin(k * 1.1) + 0.06;
      root.rotation.y += 0.25 * dt;
      root.position.y = home.pos.y + MISSION.alt + Math.sin(k * 1.7) * 14;
      rotors.forEach((r, i) => { if (i !== failed) spin(r, i, (i % 2 ? -1 : 1) * 120 * dt); });
      if (k > 8) { state.events.push("성능 저하 상태로 호버 유지 — 착륙 권고"); state.mode = "idle"; reset(); }
    } else {
      // fixed wing: motor-out is a glide, roughly 8:1 for a small survey wing
      root.position.z += 380 * dt;
      state.vy = -380 / 8;
      root.position.y += state.vy * dt;
      root.rotation.x = home.rot.x - 0.06;
      if (root.position.y <= home.pos.y) {
        state.events.push(`활공 착륙 — ${state.t.toFixed(1)}초, 전진 ${(root.position.z / 1000).toFixed(1)}m`);
        state.mode = "idle"; reset();
      }
    }
  }

  /* Scripted hover mission: spool-up → vertical climb → hover bob with a slow
     yaw orbit → descent. The point is to see the assembly move as one machine
     and the rotors move as rotors. */
  const MISSION = { spool: 1.2, climb: 2.2, hover: 6.0, descend: 2.2, alt: 260 };

  function update(dt) {
    dt = Math.min(dt, 0.05);
    if (state.mode === "fly") {
      state.t += dt;
      const t = state.t;
      const M = MISSION;
      let alt = 0, yaw = 0, sway = 0;
      if (t < M.spool) {
        state.spin = 90 * (t / M.spool);
      } else if (t < M.spool + M.climb) {
        state.spin = 90;
        const k = (t - M.spool) / M.climb;
        alt = M.alt * (1 - Math.pow(1 - k, 3));
      } else if (t < M.spool + M.climb + M.hover) {
        state.spin = 90;
        const k = t - M.spool - M.climb;
        /* A gust shows up as a lean into the wind plus low-frequency drift —
           the hover controller's visible signature, without pretending to be
           the controller itself. */
        const gustTilt = state.wind * 1.6 * (Math.PI / 180) * (1 + 0.25 * Math.sin(k * 3.7));
        const gustBob = state.wind * 1.4 * Math.sin(k * 2.9);
        alt = M.alt + Math.sin(k * 2.1) * 6 + gustBob;
        yaw = k * 0.45;
        sway = Math.sin(k * 1.3) * 2 * (Math.PI / 180) + gustTilt;
        root.position.x = home.pos.x + state.wind * 2.2 * Math.sin(k * 0.9);
      } else if (t < M.spool + M.climb + M.hover + M.descend) {
        state.spin = 70;
        const k = (t - M.spool - M.climb - M.hover) / M.descend;
        alt = M.alt * Math.pow(1 - k, 2);
        yaw = M.hover * 0.45;
      } else {
        state.mode = "idle";
        state.spin = 0;
        reset();
      }
      if (state.mode === "fly") {
        root.position.y = home.pos.y + alt;
        root.rotation.y = home.rot.y + yaw;
        root.rotation.z = home.rot.z + sway;
      }
    } else if (state.mode === "physical") {
      const fm = flightModel();
      fm.setWind(state.wind);
      // fixed sub-steps: the integrator's stability must not depend on frame rate
      const h = 1 / 240;
      for (let acc = 0; acc < dt; acc += h) fm.step(h);
      state.spin = 60;   // rotors keep visibly turning
      rotors.forEach((r, i) => {
        const w = fm.state.w[i] || 0;
        spin(r, i, (i % 2 ? -1 : 1) * Math.min(w, 220) * dt);
      });
      return state.mode;
    } else if (state.mode === "rotorout") {
      rotorOutUpdate(dt);
    } else if (state.mode === "drop") {
      state.vy -= G * 1000 * dt;             // scene units are mm
      root.position.y += state.vy * dt;
      if (root.position.y <= home.pos.y) {
        root.position.y = home.pos.y;
        if (Math.abs(state.vy) < 180 || state.bounces >= 3) {
          state.events.push(`착지 — 반발 ${state.bounces}회`);
          state.mode = "idle"; state.vy = 0;
        } else {
          state.bounces += 1;
          state.vy = -state.vy * 0.38;       // restitution of a landed airframe
        }
      }
    }
    // rotors keep whatever speed the mission set; alternate spin direction per index
    if (state.spin > 0) {
      rotors.forEach((r, i) => { spin(r, i, (i % 2 ? -1 : 1) * state.spin * dt); });
    }
    return state.mode;
  }

  /* --------------------------------------------------------------- checks
     Each entry carries its formula and its inputs, so the panel reads as an
     engineering note rather than a verdict from nowhere. */
  function checks(opts = {}) {
    const out = [];
    const sp = spec?.size_performance || {};
    const n = rotors.length || sp.rotor_count || 0;

    // rotor disk clearance, measured off the built geometry
    if (rotors.length >= 2) {
      /* Box3.setFromObject transforms the axis-aligned box, so a rotated
         instance reads √2 too wide. The disk's true diameter lives in its
         local geometry; the rotation only moves it. */
      let minGap = Infinity, dia = 0;
      const centers = rotors.map((r) => {
        if (!r.geometry.boundingBox) r.geometry.computeBoundingBox();
        const s = r.geometry.boundingBox.getSize(new THREE.Vector3());
        dia = Math.max(dia, Math.max(s.x, s.z) * Math.max(r.scale.x, r.scale.z));
        return r.getWorldPosition(new THREE.Vector3());
      });
      for (let i = 0; i < centers.length; i++)
        for (let j = i + 1; j < centers.length; j++)
          minGap = Math.min(minGap, centers[i].distanceTo(centers[j]));
      const clear = minGap - dia;
      /* Interference studies put the knee near separation ratio s/D ≈ 1.2:
         above it rotor-rotor losses stay in the low single digits, and above
         ≈1.5 hover performance is insensitive to spacing (RMIT thesis 2024;
         Lei & Cheng 2020 hexrotor spacing study). */
      const sepRatio = dia > 0 ? minGap / dia : 0;
      out.push({
        id: "rotor_clearance", label: "로터 디스크 간격",
        value: `${clear.toFixed(0)}mm (s/D ${sepRatio.toFixed(2)})`,
        /* `n` is the same quantity as `value`, without the sentence around it.
           ok is a verdict against a threshold and cannot say that a design got
           worse while staying on the same side of it — tools/fit-spec.mjs has
           to refuse a change that halves the rotor gap even when the gap was
           already below the recommended ratio, and reading that back out of a
           Korean string would be a parser waiting to break. Higher is better. */
        n: sepRatio,
        ok: clear > 0 ? (sepRatio >= 1.15 ? true : null) : false,
        note: `인접 로터 중심거리 ${minGap.toFixed(0)} − 디스크 지름 ${dia.toFixed(0)}. `
          + (clear <= 0 ? "디스크가 겹칩니다 — 휠베이스를 넓히거나 로터를 줄이십시오."
            : sepRatio >= 1.15 ? "간섭 손실이 수 % 이내인 영역입니다 (연구 권장 s/D ≥ 1.2)."
            : "겹치진 않지만 s/D < 1.2라 후류 간섭으로 호버 효율이 떨어지는 영역입니다."),
      });

      /* Rotor-out verdict by platform class, following the fault-tolerance
         literature rather than optimism. */
      if (n >= 3) {
        const alt = MISSION.alt / 1000;
        const tFall = Math.sqrt(2 * alt / G);
        if (n <= 4) {
          out.push({
            id: "rotor_out", label: "로터 1개 고장 시",
            value: "요 제어 상실", ok: false,
            note: `쿼드는 여분 로터가 없어 요 제어를 포기하고 회전 하강하는 것이 연구된 대응입니다. `
              + `호버 고도 ${MISSION.alt}mm에서 무동력 자유낙하는 ${tFall.toFixed(2)}초, `
              + `부분 추력 회전 하강은 그보다 깁니다. 시뮬레이션의 '로터 고장'으로 재생됩니다.`,
          });
        } else {
          const powK = Math.pow(n / (n - 1), 1.5);
          out.push({
            id: "rotor_out", label: "로터 1개 고장 시",
            value: `유지 (파워 +${((powK - 1) * 100).toFixed(0)}%)`, ok: true,
            note: `${n}로터는 잔여 로터가 추력을 재분배해 성능 저하 상태로 비행을 유지합니다 `
              + `(추력/로터 ×${(n / (n - 1)).toFixed(2)}, 파워 ×${powK.toFixed(2)}). 요 여유는 줄어듭니다.`,
          });
        }
      }

      const mtow = sp.mtow?.value != null ? sp.mtow.value + state.payload : null;
      if (mtow != null && dia > 0) {
        const areaM2 = n * Math.PI * Math.pow(dia / 2000, 2);
        const loading = mtow / areaM2;
        /* Hover power per unit weight grows with √(disk loading) — momentum
           theory. Class bands from surveyed aircraft: camera/inspection quads
           sit near 5~12 kg/m², agricultural and delivery heavy-lifts 10~25
           (Agras T30 ≈ 16), helicopters 15~40. Above ~30 the drone pays
           helicopter-class hover power. */
        const band = loading < 12 ? "촬영·점검급" : loading < 25 ? "농업·물류 헤비리프트급" : "회전익기급 고하중";
        out.push({
          id: "disk_loading", label: `디스크 로딩${state.payload ? ` (+탑재 ${state.payload}kg)` : ""}`,
          value: `${loading.toFixed(1)} kg/m² · ${band}`, ok: loading < 25 ? true : loading < 32 ? null : false,
          note: `중량 ${mtow.toFixed(1)}kg ÷ (${n} × π × ${(dia / 2000).toFixed(3)}²m²). `
            + `호버 파워/중량은 √(디스크로딩)에 비례하므로 낮을수록 체공에 유리합니다. `
            + `촬영·점검 5~12, 농업·물류 10~25가 통상 범위입니다.`,
        });
        out.push({
          id: "hover_thrust", label: "호버 필요 추력 (로터당)",
          value: `${((mtow * G) / n).toFixed(1)} N`, ok: true,
          note: `MTOW×g÷로터수. 모터·프로펠러 추력 곡선은 카탈로그 값이 필요해 `
            + `여기서 판정하지 않습니다 (USER_REQUIRED).`,
        });

        /* Momentum theory: ideal induced power P = T^1.5 / √(2ρA) per rotor,
           divided by a figure of merit for real-rotor losses. This is the
           standard first-order hover estimate — real, but first-order, and the
           row says which. */
        const rho = 1.225, FM = 0.7;
        const T = (mtow * G) / n;
        const A1 = Math.PI * Math.pow(dia / 2000, 2);
        const pHover = (n * Math.pow(T, 1.5) / Math.sqrt(2 * rho * A1)) / FM;
        out.push({
          id: "hover_power", label: "호버 파워 (운동량이론)",
          value: `${pHover.toFixed(0)} W`, ok: null,
          note: `n·T^1.5/√(2ρA)÷FM(0.7). 유도 파워 1차 근사이며 전기·프로펠러 손실은 FM에 뭉뚱그려집니다.`,
        });
        if (opts.batteryWh > 0) {
          const endurance = (opts.batteryWh * 0.85 / pHover) * 60;
          out.push({
            id: "endurance", label: "예상 호버 시간",
            value: `${endurance.toFixed(0)}분`, ok: endurance >= 10,
            note: `배터리 ${opts.batteryWh}Wh × 방전 여유 0.85 ÷ ${pHover.toFixed(0)}W. `
              + `상용 멀티로터 통상 체공 10~30분이고, 착륙 예비 20~25%는 별도로 남겨야 합니다. `
              + `순항·바람·페이로드에 따라 실제는 이보다 짧습니다.`,
          });
          /* Battery mass fraction: surveys put practical multirotors at
             25~40% of MTOW; endurance keeps rising to ~2/3 but structure and
             safety margins collapse first (flying-batteries literature). */
          let battG = 0;
          for (const p of spec?.parts || []) {
            if (/배터리|battery/i.test(`${p.name || ""} ${p.display_name_ko || ""}`) && p.component_ref?.mass_g)
              battG += p.component_ref.mass_g * (p.geometry?.repeat?.count || 1);
          }
          if (battG > 0 && mtow > 0) {
            const frac = battG / 1000 / mtow;
            out.push({
              id: "battery_fraction", label: "배터리 질량분율",
              value: `${(frac * 100).toFixed(0)}%`,
              ok: frac >= 0.2 && frac <= 0.45 ? true : frac < 0.1 || frac > 0.55 ? false : null,
              note: `배터리 ${(battG / 1000).toFixed(2)}kg ÷ MTOW ${mtow.toFixed(1)}kg. `
                + `실용 멀티로터는 25~40%가 통상이고, 체공은 ~2/3까지 늘지만 구조·안전 여유가 먼저 무너집니다.`,
            });
          }
        } else {
          out.push({
            id: "endurance", label: "예상 호버 시간", value: "배터리 미입력", ok: null,
            note: "배터리 용량(Wh)을 입력하면 운동량이론 파워로 호버 시간을 추정합니다.",
          });
        }
        const cap = sp.payload_capacity?.value;
        if (cap > 0) {
          const pFull = (n * Math.pow(((mtow + cap) * G) / n, 1.5) / Math.sqrt(2 * rho * A1)) / FM;
          out.push({
            id: "payload_power", label: "만재 시 파워 증가",
            value: `+${(((pFull / pHover) - 1) * 100).toFixed(0)}%`, ok: null,
            note: `탑재 ${cap}kg 추가 시 호버 파워 ${pHover.toFixed(0)}→${pFull.toFixed(0)}W. `
              + `비행시간은 대략 그 비율로 줄어듭니다.`,
          });
        }
      } else {
        out.push({
          id: "disk_loading", label: "디스크 로딩", value: "미입력", ok: null,
          note: "MTOW가 입력되지 않아 계산할 수 없습니다. 사양서 size_performance.mtow를 채우십시오.",
        });
      }
    }

    /* CG vs support polygon: uniform density over mesh bounding volumes is an
       approximation and is labelled as one. */
    let volSum = 0; const cg = new THREE.Vector3();
    const contacts = [];
    root.traverse((o) => {
      if (!o.isMesh) return;
      const b = new THREE.Box3().setFromObject(o);
      const s = b.getSize(new THREE.Vector3());
      const v = Math.max(1, s.x * s.y * s.z);
      cg.addScaledVector(b.getCenter(new THREE.Vector3()), v);
      volSum += v;
      if (GEAR_RX.test(`${o.name} ${o.userData?.regionId || ""}`)) {
        const c = b.getCenter(new THREE.Vector3());
        contacts.push(new THREE.Vector2(c.x, c.z));
      }
    });
    if (volSum > 0) {
      cg.divideScalar(volSum);
      if (contacts.length >= 3 || contacts.length === 2) {
        // radius of the support footprint vs CG offset from its centroid
        const ctr = contacts.reduce((a, p) => a.add(p), new THREE.Vector2()).divideScalar(contacts.length);
        const rad = Math.max(...contacts.map((p) => p.distanceTo(ctr)));
        const off = new THREE.Vector2(cg.x, cg.z).distanceTo(ctr);
        out.push({
          id: "cg_support", label: "무게중심 · 지지면",
          value: `이탈 ${off.toFixed(0)}mm / 반경 ${rad.toFixed(0)}mm`, ok: off < rad * 0.6,
          note: `균일 밀도 근사 CG (${cg.x.toFixed(0)}, ${cg.y.toFixed(0)}, ${cg.z.toFixed(0)})와 `
            + `랜딩기어 접지 중심의 수평 거리. 실제 CG는 파트 질량 입력 후 달라집니다.`,
        });
        /* Ground tip-over: the angle from vertical of the CG-to-contact line.
           Landing gear design practice wants the machine to survive ≥25° of
           tilt (turnover criterion; tipback ≥15°) — sloped pads, gusts on the
           ground, one-skid touchdowns. */
        const track = Math.max(...contacts.map((p) => p.distanceTo(ctr)));
        if (track > 0 && cg.y > 0) {
          const tip = Math.atan(track / cg.y) * 180 / Math.PI;
          out.push({
            id: "tipover", label: "지상 전복각",
            value: `${tip.toFixed(0)}°`, ok: tip >= 25 ? true : tip >= 18 ? null : false,
            note: `atan(접지 반폭 ${track.toFixed(0)} / CG 높이 ${cg.y.toFixed(0)}). `
              + `착륙장 경사·돌풍·한쪽 스키드 접지를 견디려면 25° 이상이 설계 관례입니다. `
              + `부족하면 기어 폭을 넓히거나 CG를 낮추십시오.`,
          });
        }
      } else {
        out.push({
          id: "cg_support", label: "무게중심 · 지지면", value: "판정 불가", ok: null,
          note: "랜딩기어로 인식된 파트가 부족합니다. 파트 이름에 랜딩/스키드가 들어가야 합니다.",
        });
      }
    }

    /* Is this one machine or a pile of islands? Measured on the built meshes,
       so it sees the real rotated geometry rather than the specification's
       axis-aligned estimate. A detached group is what makes a render read as
       an assembly kit instead of an aircraft. */
    {
      const boxes = [];
      root.traverse((o) => { if (o.isMesh) boxes.push(new THREE.Box3().setFromObject(o)); });
      if (boxes.length >= 3) {
        const TOL = 10;
        const grown = boxes.map((b) => b.clone().expandByScalar(TOL / 2));
        const comp = new Array(boxes.length).fill(-1);
        let groups = 0, mainSize = 0;
        for (let i = 0; i < grown.length; i++) {
          if (comp[i] !== -1) continue;
          const id = groups++; comp[i] = id;
          const stack = [i]; let size = 0;
          while (stack.length) {
            const k = stack.pop(); size++;
            for (let j = 0; j < grown.length; j++) {
              if (comp[j] === -1 && grown[k].intersectsBox(grown[j])) { comp[j] = id; stack.push(j); }
            }
          }
          mainSize = Math.max(mainSize, size);
        }
        out.push({
          id: "assembly_contact", label: "조립 연결성",
          value: groups === 1 ? "한 덩어리" : `${groups}덩어리로 분리`,
          /* Machine-readable for the same reason as rotor_clearance: an
             assembly that was already in three pieces must not be allowed to
             fall into five on the way to a better silhouette. Lower is better,
             1 is whole. */
          n: groups, lowerIsBetter: true,
          ok: groups === 1,
          note: groups === 1
            ? `메시 ${boxes.length}개가 ${TOL}mm 이내로 서로 이어져 있습니다.`
            : `가장 큰 덩어리에 메시 ${mainSize}/${boxes.length}개만 속합니다. 떨어진 파트는 `
              + `center_mm을 옮겨 인접 파트와 맞닿게 해야 합니다 — 실물은 한 덩어리입니다.`,
        });
      }
    }

    /* Mass budget from chosen catalogue components — a partial sum labelled
       as one, never presented as the vehicle's weight. */
    let compMass = 0, compCount = 0;
    for (const p of spec?.parts || []) {
      if (p.component_ref?.mass_g) {
        compMass += p.component_ref.mass_g * (p.geometry?.repeat?.count || 1);
        compCount += 1;
      }
    }
    if (compCount) {
      out.push({
        id: "mass_budget", label: "부품 질량 합계",
        value: `${(compMass / 1000).toFixed(2)} kg`, ok: null,
        note: `카탈로그에서 고른 부품 ${compCount}종의 합입니다. 프레임·배선·체결류는 포함되지 않은 부분합입니다.`,
      });
    }

    /* Facts the integrated model can state: thrust margin from the actual
       inertia and rotor coefficients, not a rule of thumb. */
    if (opts.includeFlight !== false && rotors.length >= 3) {
      try {
        const f = flightFacts();
        out.push({
          id: "thrust_margin", label: "추력 여유 (6-DoF)",
          value: `${f.thrustMargin.toFixed(2)}×`, ok: f.thrustMargin >= 1.8,
          note: `최대 ω ${f.wMax.toFixed(0)} / 호버 ω ${f.hoverW.toFixed(0)} rad/s. `
            + `질량 ${f.mass.toFixed(2)}kg는 파트별 카탈로그 중량과 부피 추정의 합입니다. `
            + `1.8배 미만이면 기동·돌풍 여유가 부족합니다. 계수 출처 ${f.coefSource}.`,
        });
        out.push({
          id: "inertia", label: "관성 텐서 (대각)",
          value: `${f.inertia.x.toFixed(3)} / ${f.inertia.y.toFixed(3)} / ${f.inertia.z.toFixed(3)}`,
          ok: null,
          note: `kg·m² (Ixx/Iyy/Izz). 파트 박스의 평행축 정리 합이며 6-DoF 적분에 그대로 쓰입니다.`,
        });
        /* Tip speed at max rpm: efficiency wants < M0.7 (compressibility),
           and rotational noise scales like Vtip^5~6, so the same thrust from
           a bigger, slower disc is dramatically quieter. */
        if (rotors.length) {
          const r0 = rotors[0];
          if (!r0.geometry.boundingBox) r0.geometry.computeBoundingBox();
          const bs = r0.geometry.boundingBox.getSize(new THREE.Vector3());
          const radiusM = Math.max(bs.x, bs.y, bs.z) / 2 / 1000;
          const vTip = f.wMax * radiusM, mach = vTip / 343;
          out.push({
            id: "tip_speed", label: "로터 팁 속도 (최대 rpm)",
            value: `${vTip.toFixed(0)} m/s · M${mach.toFixed(2)}`,
            ok: mach < 0.7 ? true : mach < 0.85 ? null : false,
            note: `최대 ω ${f.wMax.toFixed(0)} rad/s × 반경 ${(radiusM * 1000).toFixed(0)}mm. `
              + `효율은 M0.7 미만, 회전 소음은 팁 속도의 5~6제곱에 비례합니다 — `
              + `같은 추력이면 큰 로터를 느리게 돌리는 쪽이 훨씬 조용합니다.`,
          });
        }
      } catch { /* a spec with no usable rotors simply omits these rows */ }
    }

    /* Fixed-wing sizing rules, computed from the spec's own part geometry.
       These are the preliminary-design checks the literature actually uses:
       tail volume coefficients (Raymer/Scholz: V_H 0.4~0.7, V_V 0.02~0.05
       for UAVs), wing loading with the stall speed it implies, and aspect
       ratio. Planform areas use a 0.75 taper factor — an approximation, and
       each row says so. */
    const findPart = (rx, notRx) => (spec?.parts || []).find((p) => {
      const nm = `${p.name || ""} ${p.display_name_ko || ""}`;
      return rx.test(nm) && !(notRx && notRx.test(nm));
    });
    const wing = findPart(/주익|main\s*wing/i);
    if (wing?.geometry?.size_mm) {
      const ws = wing.geometry.size_mm;
      const span = ws.w / 1000, chord = ws.d / 1000;
      const S = span * chord * 0.75, MAC = chord * 0.9;
      const AR = S > 0 ? (span * span) / S : 0;
      out.push({
        id: "aspect_ratio", label: "주익 종횡비 (AR)",
        value: AR.toFixed(1), ok: AR >= 5 && AR <= 14 ? true : AR >= 4 && AR <= 18 ? null : false,
        note: `스팬² ÷ 면적(테이퍼 0.75 근사 ${S.toFixed(2)}m²). 측량·정찰급 통상 6~12 — `
          + `낮으면 유도항력이 커 체공이 줄고, 높으면 날개 구조가 무거워집니다.`,
      });
      const mtowW = sp.mtow?.value;
      if (mtowW > 0 && S > 0) {
        const wl = mtowW / S;
        const vs = Math.sqrt((2 * mtowW * G) / (1.225 * S * 1.2));
        out.push({
          id: "wing_loading", label: "날개 하중 · 실속 속도",
          value: `${wl.toFixed(1)} kg/m² · Vs ${vs.toFixed(0)} m/s`,
          ok: wl >= 4 && wl <= 18 ? true : null,
          note: `MTOW ÷ 주익 면적. 소형 측량기 통상 5~15 kg/m². 실속 속도는 `
            + `√(2W/(ρS·CLmax)), CLmax 1.2 가정 — 착륙 접근은 1.3×Vs로 계획합니다.`,
        });
      }
      const htail = findPart(/수평\s*미익|V형\s*미익|h[_-]?stab|v[_-]?tail|tail\s*plane/i, /수직/i);
      if (htail?.geometry?.size_mm && htail.geometry.center_mm) {
        const hs = htail.geometry.size_mm;
        const isVee = /V형|v[_-]?tail/i.test(`${htail.name || ""} ${htail.display_name_ko || ""}`);
        /* A V-tail splits its area between pitch and yaw duty roughly by
           cos²/sin² of its dihedral; 0.65/0.35 matches a ~35° vee. */
        const Sh = (hs.w / 1000) * (hs.d / 1000) * 0.75 * (isVee ? 0.65 : 1);
        const Lh = Math.abs((htail.geometry.center_mm.z || 0) - (wing.geometry.center_mm?.z || 0)) / 1000;
        if (Lh > 0.05 && S > 0 && MAC > 0) {
          const VH = (Sh * Lh) / (S * MAC);
          out.push({
            id: "tail_volume_h", label: `수평 미익 체적계수 V_H${isVee ? " (V미익 65% 배분)" : ""}`,
            value: VH.toFixed(2), ok: VH >= 0.35 && VH <= 0.9 ? true : VH >= 0.25 ? null : false,
            note: `S_h·L_h ÷ (S·MAC) = ${Sh.toFixed(2)}·${Lh.toFixed(2)} ÷ ${S.toFixed(2)}·${MAC.toFixed(2)}. `
              + `UAV 통상 0.4~0.7 — 작으면 피치 안정 부족, 크면 트림 항력. 면적은 평면형 근사입니다.`,
          });
          if (isVee) {
            const VV = (((hs.w / 1000) * (hs.d / 1000) * 0.75 * 0.35) * Lh) / (S * span);
            out.push({
              id: "tail_volume_v", label: "수직 미익 체적계수 V_V (V미익 35% 배분)",
              value: VV.toFixed(3), ok: VV >= 0.015 && VV <= 0.08 ? true : null,
              note: `S_v·L_v ÷ (S·스팬). UAV 통상 0.02~0.05 — 작으면 방향 안정·측풍 대응이 약합니다.`,
            });
          }
        }
      }
      const vtail = findPart(/수직\s*미익|v[_-]?stab|rudder|fin\b/i, /수평|V형/i);
      if (vtail?.geometry?.size_mm && vtail.geometry.center_mm && S > 0) {
        const vs2 = vtail.geometry.size_mm;
        const Sv = (vs2.h / 1000) * (vs2.d / 1000) * 0.75;
        const Lv = Math.abs((vtail.geometry.center_mm.z || 0) - (wing.geometry.center_mm?.z || 0)) / 1000;
        if (Lv > 0.05) {
          const VV = (Sv * Lv) / (S * span);
          out.push({
            id: "tail_volume_v", label: "수직 미익 체적계수 V_V",
            value: VV.toFixed(3), ok: VV >= 0.015 && VV <= 0.08 ? true : null,
            note: `S_v·L_v ÷ (S·스팬) = ${Sv.toFixed(3)}·${Lv.toFixed(2)} ÷ ${S.toFixed(2)}·${span.toFixed(2)}. `
              + `UAV 통상 0.02~0.05.`,
          });
        }
      }
    }

    for (const v of spec?.state_variants || []) {
      out.push({ id: `state_${v.id}`, label: `상태 ${v.id}`, value: "정의됨", ok: true, note: v.description_ko || "" });
    }
    const a = spec?.assurance || {};
    out.push({
      id: "fidelity", label: "이 검사의 한계", value: a.engineering_status || "UNVERIFIED", ok: null,
      note: "운동은 각본형 프리뷰이고 낙하는 단일 강체 근사입니다. 6-DoF 비행역학·SITL·CFD는 "
        + "모터·배터리·공력 데이터가 입력된 뒤의 다음 단계입니다.",
    });
    return out;
  }

  /* Numbers the integrated model can state that the scripted one cannot. */
  function flightFacts() {
    const fm = flightModel();
    return {
      mass: fm.mass, inertia: fm.inertia, cg: fm.cg,
      hoverW: fm.hoverW, wMax: fm.wMax, feasible: fm.feasible,
      thrustMargin: fm.wMax > 0 ? Math.pow(fm.wMax / Math.max(1e-6, fm.hoverW), 2) : 0,
      coefSource: fm.coef.source,
    };
  }

  return { fly, drop, stop, rotorOut, flyPhysical, failRotorPhysical, flightFacts,
    update, checks, reset, setWind, setPayload, rotorCount: rotors.length, state };
}
