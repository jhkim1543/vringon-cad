/* ==========================================================================
   Step 5 — 3D-print planning.

   The volume is real: a signed-tetrahedron integral over every triangle of
   the compiled CAD, so a hollow revolve counts its wall and not its cavity.
   The time is an estimate and says so: commercial slicers plan toolpaths;
   this model divides deposited volume by a printer's sustainable flow rate,
   derates it per material, and adds per-part handling overhead. Printer flow
   classes follow published spec-sheet speeds (Bambu X1C 500mm/s class,
   Prusa MK4 input-shaper class, Ender-3 class) reduced to sustained rates —
   figures a slicer would refine, not contradict.
   ========================================================================== */
import * as THREE from "three";

export const PRINTERS = [
  { id: "x1c", name: "Bambu Lab X1 Carbon", build_mm: [256, 256, 256],
    flow_mm3s: 16, note: "코어XY 고속. AMS 멀티 재료" },
  { id: "mk4", name: "Prusa MK4S", build_mm: [250, 210, 220],
    flow_mm3s: 13, note: "인풋 셰이핑 고속" },
  { id: "ender3", name: "Creality Ender-3 V3 SE", build_mm: [220, 220, 250],
    flow_mm3s: 6, note: "보급형" },
];

export const MATERIALS = [
  { id: "pla", name: "PLA", density: 1.24, speed_k: 1.0,
    note: "출력 쉬움 · 강성 높음 · 열에 약함 — 형상 확인용" },
  { id: "petg", name: "PETG", density: 1.27, speed_k: 0.85,
    note: "내충격·내후성 — 외피·마운트" },
  { id: "abs", name: "ABS", density: 1.04, speed_k: 0.8,
    note: "내열·후가공 — 챔버 필요" },
  { id: "asa", name: "ASA", density: 1.07, speed_k: 0.8,
    note: "UV 내후성 — 야외 기체 외피" },
  { id: "tpu", name: "TPU 95A", density: 1.21, speed_k: 0.35,
    note: "유연 — 랜딩 패드·범퍼·가드" },
];

/** True enclosed volume of a mesh in mm³ via signed tetrahedra. */
export function meshVolume(root) {
  let vol = 0;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  root.updateWorldMatrix(true, true);
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry?.attributes?.position) return;
    const pos = o.geometry.attributes.position;
    const idx = o.geometry.index;
    const n = idx ? idx.count : pos.count;
    const sw = o.getWorldScale(new THREE.Vector3());
    const scale = Math.abs(sw.x * sw.y * sw.z);
    let v = 0;
    for (let i = 0; i < n; i += 3) {
      const i0 = idx ? idx.getX(i) : i, i1 = idx ? idx.getX(i + 1) : i + 1, i2 = idx ? idx.getX(i + 2) : i + 2;
      a.fromBufferAttribute(pos, i0); b.fromBufferAttribute(pos, i1); c.fromBufferAttribute(pos, i2);
      v += a.dot(b.clone().cross(c)) / 6;
    }
    vol += Math.abs(v) * scale;
  });
  return vol;
}

/**
 * Estimate one print job.
 * Deposited volume = solid volume × (perimeter fraction + infill × core
 * fraction): walls and top/bottom are printed dense, the core at the chosen
 * infill. 0.30/0.70 is the customary split for part-scale objects.
 */
export function estimatePrint({ root, printer, material, infill = 0.15, parts = 1 }) {
  const solid = meshVolume(root);
  const deposited = solid * (0.30 + 0.70 * infill);
  const grams = (deposited / 1000) * material.density;
  const flow = printer.flow_mm3s * material.speed_k;
  const hours = deposited / flow / 3600 + 0.12 * parts;   // handling·heat-up per part

  const bb = new THREE.Box3().setFromObject(root);
  const size = bb.getSize(new THREE.Vector3());
  const dims = [size.x, size.y, size.z].sort((x, y) => y - x);
  const build = [...printer.build_mm].sort((x, y) => y - x);
  const fitScale = Math.min(build[0] / dims[0], build[1] / dims[1], build[2] / dims[2]);

  return {
    solid_cm3: solid / 1000,
    deposited_cm3: deposited / 1000,
    grams,
    hours,
    fits: fitScale >= 1,
    fitScale,
    size_mm: [size.x, size.y, size.z],
  };
}
