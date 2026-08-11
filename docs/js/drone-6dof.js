/* ==========================================================================
   6-DoF rigid-body flight, integrated rather than scripted.

   This is the step the earlier preview kept deferring: given per-rotor thrust
   coefficients, an inertia tensor built from the part masses, and a rate
   controller, the vehicle's motion comes out of the equations instead of a
   keyframe. Rotor loss is then a consequence — a quad with three rotors is
   genuinely unable to hold yaw, and you watch it fail rather than watch an
   animation of failing.

   Model, stated plainly:
   - thrust  T = kT · ω²   torque  Q = kQ · ω²   (momentum theory forms; kT is
     derived from the catalogue propeller's static thrust, kQ from disk theory)
   - first-order motor lag on commanded ω
   - quadratic body drag per axis
   - inertia tensor from part boxes (parallel-axis), mass from the catalogue
   - cascaded controller: attitude P → body-rate PD → mixer → per-rotor ω,
     saturated at the motor's maximum
   What it is not: no blade element theory, no induced-flow lag, no ground
   effect, no aeroelasticity. It is a flight-dynamics preview whose numbers
   move for the right reasons.
   ========================================================================== */
import * as THREE from "three";

const G = 9.81;
const RHO = 1.225;

/* Catalogue propellers publish static thrust; the coefficient follows from
   T = kT ω² at the rated point. Where the spec gives only a diameter, a
   figure-of-merit disk estimate stands in and is marked as such. */
export function rotorCoefficients({ diameter_mm, maxThrust_N = null, maxRpm = 9000 }) {
  const R = diameter_mm / 2000;                 // m
  /* A fixed rpm ceiling regardless of diameter puts a 26" agricultural prop
     at Mach 0.87 — no real large rotor spins there. Propeller practice caps
     tip speed near M0.6 (~206 m/s) for efficiency and noise, and small fast
     props genuinely reach ~9000 rpm, so the binding limit is whichever is
     lower. */
  const rpmTipLimit = R > 0 ? (206 / R) * 60 / (2 * Math.PI) : maxRpm;
  const wMax = (Math.min(maxRpm, rpmTipLimit) * 2 * Math.PI) / 60;   // rad/s
  let kT;
  if (maxThrust_N) {
    kT = maxThrust_N / (wMax * wMax);
    return { kT, kQ: kT * R * 0.06, wMax, source: "CATALOG_THRUST" };
  }
  /* Disk-theory sizing: a well-matched rotor at tip speed ~120 m/s produces
     roughly FM·ρ·A·(ΩR)²·Ct_eff. Ct_eff 0.011 is the customary small-UAV value. */
  const A = Math.PI * R * R;
  const T = 0.011 * RHO * A * Math.pow(wMax * R, 2);
  kT = T / (wMax * wMax);
  return { kT, kQ: kT * R * 0.06, wMax, source: "DISK_ESTIMATE" };
}

/** Mass and inertia from the compiled parts, using catalogue masses where set. */
export function massProperties(root, spec) {
  const parts = [];
  let total = 0;
  const byRegion = new Map();
  for (const p of spec?.parts || []) byRegion.set(p.part_id, p);

  root.traverse((o) => {
    if (!o.isMesh) return;
    const bb = new THREE.Box3().setFromObject(o);
    const s = bb.getSize(new THREE.Vector3());
    const c = bb.getCenter(new THREE.Vector3()).multiplyScalar(0.001);   // m
    const specPart = byRegion.get(o.userData?.regionId);
    const n = specPart?.geometry?.repeat?.count || 1;
    /* A catalogue mass is per component and the repeat spreads it over the
       instances; without one, volume × a light composite density stands in. */
    const m = specPart?.component_ref?.mass_g
      ? specPart.component_ref.mass_g / 1000 / n
      : Math.max(0.004, (s.x * s.y * s.z) * 1e-9 * 300);
    total += m;
    parts.push({ m, c, s: s.multiplyScalar(0.001) });
  });

  const cg = new THREE.Vector3();
  for (const p of parts) cg.addScaledVector(p.c, p.m);
  if (total > 0) cg.divideScalar(total);

  // diagonal inertia via box terms + parallel axis; products are small for a
  // roughly symmetric airframe and are left out rather than half-computed
  let Ixx = 0, Iyy = 0, Izz = 0;
  for (const p of parts) {
    const d = p.c.clone().sub(cg);
    Ixx += p.m * ((p.s.y ** 2 + p.s.z ** 2) / 12 + d.y ** 2 + d.z ** 2);
    Iyy += p.m * ((p.s.x ** 2 + p.s.z ** 2) / 12 + d.x ** 2 + d.z ** 2);
    Izz += p.m * ((p.s.x ** 2 + p.s.y ** 2) / 12 + d.x ** 2 + d.y ** 2);
  }
  return { mass: total, cg, I: new THREE.Vector3(Ixx, Iyy, Izz) };
}

/**
 * Integrated flight. `rotors` are meshes; their world positions give the
 * moment arms and their index parity gives the spin direction, the same
 * convention the visual preview uses.
 */
export function createFlightModel({ root, spec, rotors }) {
  const mp = massProperties(root, spec);
  const home = root.position.clone();

  // rotor geometry: arm vectors from the CG, in metres, body frame
  const arms = rotors.map((r) => {
    const w = r.getWorldPosition(new THREE.Vector3()).multiplyScalar(0.001);
    return w.sub(mp.cg);
  });
  const spinDir = rotors.map((_, i) => (i % 2 ? -1 : 1));

  let dia = 254;
  if (rotors[0]?.geometry) {
    if (!rotors[0].geometry.boundingBox) rotors[0].geometry.computeBoundingBox();
    const s = rotors[0].geometry.boundingBox.getSize(new THREE.Vector3());
    dia = Math.max(s.x, s.z) * Math.max(rotors[0].scale.x, rotors[0].scale.z);
  }
  const motorRef = (spec?.parts || []).find((p) => p.component_ref && /모터|motor/i.test(p.display_name_ko || p.name));
  const coef = rotorCoefficients({
    diameter_mm: dia,
    maxThrust_N: motorRef?.component_ref?.maxThrust_N || null,
  });

  const n = rotors.length;
  const state = {
    pos: new THREE.Vector3(0, 0, 0),      // m, relative to home
    vel: new THREE.Vector3(),
    q: new THREE.Quaternion(),
    omega: new THREE.Vector3(),           // body rates rad/s
    w: new Array(n).fill(0),              // rotor speeds rad/s
    wCmd: new Array(n).fill(0),
    failed: new Set(),
    wind: 0,
    armed: false,
    t: 0,
    log: [],
  };

  const hoverW = Math.sqrt((mp.mass * G) / Math.max(1e-6, n * coef.kT));
  const feasible = hoverW < coef.wMax;

  function reset() {
    state.pos.set(0, 0, 0); state.vel.set(0, 0, 0);
    state.q.identity(); state.omega.set(0, 0, 0);
    state.w.fill(0); state.wCmd.fill(0);
    state.failed.clear(); state.armed = false; state.t = 0; state.log = [];
    root.position.copy(home);
    root.quaternion.identity();
  }

  function arm(targetAlt = 0.6) { reset(); state.armed = true; state.targetAlt = targetAlt; }
  function failRotor(i = 0) {
    state.failed.add(i % n);
    state.log.push(`${(state.t).toFixed(2)}s 로터 ${i % n + 1} 정지`);
  }
  function setWind(mps) { state.wind = mps; }

  /* Cascaded control. The mixer solves for per-rotor thrust from the desired
     collective and moments using the actual arm geometry, so a missing rotor
     changes what the remaining ones can produce rather than being papered over. */
  function control(dt) {
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(state.q);
    const tilt = Math.acos(THREE.MathUtils.clamp(up.y, -1, 1));

    // altitude → collective
    const altErr = (state.targetAlt ?? 0) - state.pos.y;
    const climb = THREE.MathUtils.clamp(1.8 * altErr - 1.6 * state.vel.y, -4, 4);
    /* Tilt compensation with a 0.15 floor asked for nearly 7× hover thrust as
       the vehicle passed 80°, which fed a flip into a rocket. Past 60° the
       vehicle is not holding altitude any more and pretending otherwise only
       hides the failure. */
    const collective = (mp.mass * (G + climb)) / Math.max(0.5, Math.cos(tilt));

    /* Attitude → body rates. Position hold leans the vehicle toward home:
       a −z tilt (nose down about x) accelerates it in +z, so the desired
       pitch opposes the z error, and roll about z likewise opposes x. */
    const e = new THREE.Euler().setFromQuaternion(state.q, "YZX");
    /* Velocity-dominant position hold. Leaning hard on position error made the
       loop chase its own overshoot until the vehicle tumbled; damping the
       velocity first is what keeps a gust from turning into an oscillation. */
    const kP = 0.10, kD = 0.42, maxTilt = 0.30;
    const desPitch = THREE.MathUtils.clamp(-kP * state.pos.z - kD * state.vel.z, -maxTilt, maxTilt);
    const desRoll = THREE.MathUtils.clamp(kP * state.pos.x + kD * state.vel.x, -maxTilt, maxTilt);
    const rateLim = 3.5;
    const rateCmd = new THREE.Vector3(
      THREE.MathUtils.clamp(3.2 * (desPitch - e.x), -rateLim, rateLim),
      THREE.MathUtils.clamp(1.8 * (0 - e.y), -rateLim, rateLim),
      THREE.MathUtils.clamp(3.2 * (desRoll - e.z), -rateLim, rateLim),
    );
    const torque = new THREE.Vector3(
      mp.I.x * (2.2 * (rateCmd.x - state.omega.x)),
      mp.I.y * (1.8 * (rateCmd.y - state.omega.y)),
      mp.I.z * (2.2 * (rateCmd.z - state.omega.z)),
    );

    /* Mixer derived from the same moment equations the integrator uses, so the
       signs cannot drift apart:
           Mx = Σ −a.z·T     (pitch)
           Mz = Σ  a.x·T     (roll)
           My = Σ −(kQ/kT)·dir·T   (yaw reaction)
       Allocating each axis by its own arm-squared sum is the pseudo-inverse
       for this geometry; a dead rotor simply drops out of the sums, which is
       what makes a quad's yaw authority vanish rather than be faked away. */
    const live = [];
    for (let i = 0; i < n; i++) if (!state.failed.has(i)) live.push(i);
    if (!live.length) { state.wCmd.fill(0); return; }

    const yawGain = coef.kQ / coef.kT;
    const base = collective / live.length;

    /* Uniform thrust is only moment-free when the rotors are symmetric about
       the CG. They rarely are — a gimbal hangs forward, a battery sits back —
       so the base itself produces a moment the differential has to cancel
       before it can do anything else. Without this the controller trims the
       offset by leaning, and a hovering drone sat at 32 degrees. */
    const Mbase = new THREE.Vector3();
    for (const i of live) {
      const a = arms[i];
      Mbase.x += -a.z * base;
      Mbase.z += a.x * base;
      Mbase.y += -yawGain * spinDir[i] * base;
    }
    const need = torque.clone().sub(Mbase);

    const Tmax = coef.kT * coef.wMax ** 2;

    /* Axis priority: attitude first, heading last. When a rotor dies the
       remaining set often cannot deliver every axis at once. Scaling all three
       together loses roll and pitch to a heading demand that was never
       achievable — which is how a redundant airframe ends up tumbling. The
       fault-tolerance literature's answer is to abandon yaw and stay upright,
       so yaw only gets the headroom left over. */
    /* Least-squares allocation over the live rotors. Handing each axis its own
       arm-squared sum is only right when the geometry is symmetric about both
       axes; a hexagon missing one rotor is not, and the ignored cross-coupling
       flipped it. B·t = M with the minimum-norm solution t = Bᵀ(BBᵀ)⁻¹M gets
       the coupling right for any layout. */
    const B = [[], [], []];   // rows: Mx, My, Mz
    for (const i of live) {
      B[0].push(-arms[i].z);
      B[1].push(-yawGain * spinDir[i]);
      B[2].push(arms[i].x);
    }
    const G3 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        let s = 0;
        for (let k = 0; k < live.length; k++) s += B[r][k] * B[c][k];
        G3[r][c] = s + (r === c ? 1e-9 : 0);   // ridge term keeps it invertible
      }
    }
    const det = G3[0][0] * (G3[1][1] * G3[2][2] - G3[1][2] * G3[2][1])
      - G3[0][1] * (G3[1][0] * G3[2][2] - G3[1][2] * G3[2][0])
      + G3[0][2] * (G3[1][0] * G3[2][1] - G3[1][1] * G3[2][0]);
    const solve = (v) => {
      if (Math.abs(det) < 1e-14) return [0, 0, 0];
      const inv = [
        [(G3[1][1] * G3[2][2] - G3[1][2] * G3[2][1]) / det,
         (G3[0][2] * G3[2][1] - G3[0][1] * G3[2][2]) / det,
         (G3[0][1] * G3[1][2] - G3[0][2] * G3[1][1]) / det],
        [(G3[1][2] * G3[2][0] - G3[1][0] * G3[2][2]) / det,
         (G3[0][0] * G3[2][2] - G3[0][2] * G3[2][0]) / det,
         (G3[0][2] * G3[1][0] - G3[0][0] * G3[1][2]) / det],
        [(G3[1][0] * G3[2][1] - G3[1][1] * G3[2][0]) / det,
         (G3[0][1] * G3[2][0] - G3[0][0] * G3[2][1]) / det,
         (G3[0][0] * G3[1][1] - G3[0][1] * G3[1][0]) / det],
      ];
      return [
        inv[0][0] * v[0] + inv[0][1] * v[1] + inv[0][2] * v[2],
        inv[1][0] * v[0] + inv[1][1] * v[1] + inv[1][2] * v[2],
        inv[2][0] * v[0] + inv[2][1] * v[1] + inv[2][2] * v[2],
      ];
    };

    const attitude = new Array(n).fill(0);
    const yawTerm = new Array(n).fill(0);
    const lamAtt = solve([need.x, 0, need.z]);
    const lamYaw = solve([0, need.y, 0]);
    live.forEach((i, k) => {
      attitude[i] = B[0][k] * lamAtt[0] + B[1][k] * lamAtt[1] + B[2][k] * lamAtt[2];
      yawTerm[i] = B[0][k] * lamYaw[0] + B[1][k] * lamYaw[1] + B[2][k] * lamYaw[2];
    });

    const headroom = (arr, extra) => {
      let s = 1;
      for (const i of live) {
        const d = arr[i];
        if (Math.abs(d) < 1e-9) continue;
        const hi = base + extra[i] + d;
        if (hi > Tmax) s = Math.min(s, (Tmax - base - extra[i]) / d);
        if (hi < 0) s = Math.min(s, (0 - base - extra[i]) / d);
      }
      return THREE.MathUtils.clamp(s, 0, 1);
    };

    const zero = new Array(n).fill(0);
    const sAtt = headroom(attitude, zero);
    const scaledAtt = attitude.map((d) => d * sAtt);
    const sYaw = headroom(yawTerm, scaledAtt);

    /* With a rotor missing the differential no longer sums to zero, so it
       quietly eats collective thrust — the vehicle stayed upright and sank.
       Re-solving the base against the total keeps lift equal to what the
       altitude loop asked for. */
    let dSum = 0;
    for (const i of live) dSum += scaledAtt[i] + yawTerm[i] * sYaw;
    const baseC = Math.max(0, (collective - dSum) / live.length);

    for (let i = 0; i < n; i++) {
      if (state.failed.has(i)) { state.wCmd[i] = 0; continue; }
      const Ti = THREE.MathUtils.clamp(baseC + scaledAtt[i] + yawTerm[i] * sYaw, 0, Tmax);
      state.wCmd[i] = Math.sqrt(Ti / coef.kT);
    }
    state.saturation = 1 - sAtt;
    state.yawAuthority = sYaw;
  }

  function step(dt) {
    if (!state.armed) return state;
    dt = Math.min(dt, 0.02);
    state.t += dt;
    control(dt);

    // first-order motor response
    const tau = 0.06;
    for (let i = 0; i < n; i++) {
      state.w[i] += ((state.wCmd[i] - state.w[i]) * dt) / tau;
      if (state.failed.has(i)) state.w[i] = Math.max(0, state.w[i] - (dt / 0.25) * coef.wMax);
    }

    // forces and moments in the body frame
    const F = new THREE.Vector3();
    const M = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      const T = coef.kT * state.w[i] * state.w[i];
      const Q = coef.kQ * state.w[i] * state.w[i] * spinDir[i];
      F.y += T;
      const a = arms[i];
      /* r × F with F = (0, T, 0):  M = (−a.z·T, 0, a.x·T).
         Writing these by intuition rather than by expanding the cross product
         put both signs the wrong way round, which turned every attitude
         correction into positive feedback — stable in still hover, a flip the
         moment anything disturbed it. */
      M.x += -a.z * T;
      M.z += a.x * T;
      M.y += -Q;           // reaction torque
    }

    // to world, add gravity, drag and wind
    const Fw = F.clone().applyQuaternion(state.q);
    Fw.y -= mp.mass * G;
    const rel = state.vel.clone();
    rel.x -= state.wind;                                  // gust from +x
    const cdA = 0.35 * 0.09;                              // Cd·A, small airframe
    Fw.addScaledVector(rel, -0.5 * RHO * cdA * rel.length());

    state.vel.addScaledVector(Fw, dt / mp.mass);
    state.pos.addScaledVector(state.vel, dt);

    // rotational dynamics with gyroscopic-free Euler equations
    const wdot = new THREE.Vector3(
      (M.x - (mp.I.z - mp.I.y) * state.omega.y * state.omega.z) / mp.I.x,
      (M.y - (mp.I.x - mp.I.z) * state.omega.z * state.omega.x) / mp.I.y,
      (M.z - (mp.I.y - mp.I.x) * state.omega.x * state.omega.y) / mp.I.z,
    );
    state.omega.addScaledVector(wdot, dt);
    const dq = new THREE.Quaternion(
      state.omega.x * dt * 0.5, state.omega.y * dt * 0.5, state.omega.z * dt * 0.5, 1).normalize();
    state.q.multiply(dq).normalize();

    // ground
    if (state.pos.y < 0) {
      state.pos.y = 0;
      if (state.vel.y < 0) state.vel.y = 0;
      state.omega.multiplyScalar(0.3);
    }

    root.position.copy(home).add(state.pos.clone().multiplyScalar(1000));
    root.quaternion.copy(state.q);
    return state;
  }

  return {
    step, reset, arm, failRotor, setWind, state,
    mass: mp.mass, inertia: mp.I, cg: mp.cg,
    hoverW, wMax: coef.wMax, feasible, coef, rotorCount: n,
    rotorSpeeds: () => state.w.slice(),
  };
}
