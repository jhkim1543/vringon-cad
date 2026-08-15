/* VRINGON 회전체 — 내보내기 (M5)
   브라우저 실행기의 메시에서: STEP(면 분할 B-rep) · STL · GLB · OBJ · USDA(파라미터 커스텀 속성) ·
   그리고 DSL 로 다시 그린 도면을 DXF/SVG 로, DSL 자체를 JSON 으로.
   해석적 B-rep STEP(원통·원추·토러스 면)은 서버 실행기(pipeline/executor.py, CadQuery)가 만든다 —
   샘플은 미리 만들어 samples/<id>/model.step 에 두었고, 라이브 서버는 /api/step 으로 준다.
   STEP 면분할 작성기는 vringon-cad js/exporters.js 의 것을 그대로 옮겼다(같은 회사 CAD 파이프라인). */

import * as THREE from "three";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { STLExporter } from "three/addons/exporters/STLExporter.js";
import { drawShaft, toSVG, toDXF } from "./shaft-drawing.js";
import { computeMass, totalLength, maxDiameter } from "./shaft-profile.js";
import { densityOf } from "./shaft-standards.js";

/* 파트 삼각형 수집 (렌더 전용 뒷면/고스트 메시 제외) */
export function collectTriangles(root, filter = null) {
  root.updateWorldMatrix(true, true);
  const out = [];
  const v = new THREE.Vector3();
  root.traverse((node) => {
    if (!node.isMesh || !node.visible || !node.geometry) return;
    if (node.name.endsWith(":cut") || node.name.startsWith("ghost")) return;
    if (filter && !filter(node)) return;
    const geo = node.geometry.index ? node.geometry.toNonIndexed() : node.geometry;
    const pos = geo.getAttribute("position");
    const tris = [];
    for (let i = 0; i < pos.count; i++) { v.fromBufferAttribute(pos, i).applyMatrix4(node.matrixWorld); tris.push(v.x, v.y, v.z); }
    if (geo !== node.geometry) geo.dispose();
    out.push({ name: node.name || "part", tris });
  });
  return out;
}
const f = (n) => { if (!isFinite(n)) n = 0; const s = n.toFixed(5); return s === "-0.00000" ? "0.00000" : s; };
const sanitize = (s) => String(s).replace(/[^A-Za-z0-9_\- ]/g, "_");

/* ------------------------------------------------------------ STEP AP214 (면분할 B-rep) */
export function exportSTEP(root, modelName = "vringon_shaft") {
  const parts = collectTriangles(root);
  const L = []; let id = 0;
  const E = (txt) => { id += 1; L.push(`#${id}=${txt};`); return id; };
  const appCtx = E(`APPLICATION_CONTEXT('core data for automotive mechanical design processes')`);
  E(`APPLICATION_PROTOCOL_DEFINITION('international standard','automotive_design',2000,#${appCtx})`);
  const prodCtx = E(`PRODUCT_CONTEXT('',#${appCtx},'mechanical')`);
  const product = E(`PRODUCT('${sanitize(modelName)}','${sanitize(modelName)}','VRINGON revolve part',(#${prodCtx}))`);
  const formation = E(`PRODUCT_DEFINITION_FORMATION('','',#${product})`);
  const defCtx = E(`PRODUCT_DEFINITION_CONTEXT('part definition',#${appCtx},'design')`);
  const prodDef = E(`PRODUCT_DEFINITION('design','',#${formation},#${defCtx})`);
  const prodShape = E(`PRODUCT_DEFINITION_SHAPE('','',#${prodDef})`);
  const mm = E(`(LENGTH_UNIT()NAMED_UNIT(*)SI_UNIT(.MILLI.,.METRE.))`);
  const rad = E(`(NAMED_UNIT(*)PLANE_ANGLE_UNIT()SI_UNIT($,.RADIAN.))`);
  const sr = E(`(NAMED_UNIT(*)SI_UNIT($,.STERADIAN.)SOLID_ANGLE_UNIT())`);
  const unc = E(`UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(0.01),#${mm},'distance_accuracy_value','')`);
  const geomCtx = E(`(GEOMETRIC_REPRESENTATION_CONTEXT(3)GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT((#${unc}))GLOBAL_UNIT_ASSIGNED_CONTEXT((#${mm},#${rad},#${sr}))REPRESENTATION_CONTEXT('Context #1','3D Context'))`);
  const origin = E(`CARTESIAN_POINT('',(0.,0.,0.))`);
  const dz = E(`DIRECTION('',(0.,0.,1.))`), dx = E(`DIRECTION('',(1.,0.,0.))`);
  const worldAxis = E(`AXIS2_PLACEMENT_3D('',#${origin},#${dz},#${dx})`);
  const solidIds = [];
  for (const part of parts) {
    const { tris, name } = part;
    const vidByKey = new Map(); const cpIds = [], vpIds = [], coords = []; const triIdx = [];
    for (let i = 0; i < tris.length; i += 3) {
      const key = `${tris[i].toFixed(4)}_${tris[i + 1].toFixed(4)}_${tris[i + 2].toFixed(4)}`;
      let vi = vidByKey.get(key);
      if (vi === undefined) {
        vi = cpIds.length; vidByKey.set(key, vi);
        const cp = E(`CARTESIAN_POINT('',(${f(tris[i])},${f(tris[i + 1])},${f(tris[i + 2])}))`);
        cpIds.push(cp); vpIds.push(E(`VERTEX_POINT('',#${cp})`)); coords.push(tris[i], tris[i + 1], tris[i + 2]);
      }
      triIdx.push(vi);
    }
    const getV = (vi, c) => coords[vi * 3 + c];
    const edgeMap = new Map();
    const edgeFor = (a, b) => {
      const key = a < b ? `${a}_${b}` : `${b}_${a}`;
      let ec = edgeMap.get(key);
      if (!ec) {
        const lo = a < b ? a : b, hi = a < b ? b : a;
        const dvx = getV(hi, 0) - getV(lo, 0), dvy = getV(hi, 1) - getV(lo, 1), dvz = getV(hi, 2) - getV(lo, 2);
        const len = Math.hypot(dvx, dvy, dvz) || 1;
        const dir = E(`DIRECTION('',(${f(dvx / len)},${f(dvy / len)},${f(dvz / len)}))`);
        const vec = E(`VECTOR('',#${dir},${f(len)})`);
        const line = E(`LINE('',#${cpIds[lo]},#${vec})`);
        ec = E(`EDGE_CURVE('',#${vpIds[lo]},#${vpIds[hi]},#${line},.T.)`);
        edgeMap.set(key, ec);
      }
      return { ec, fwd: a < b };
    };
    const faceIds = [];
    for (let t = 0; t < triIdx.length; t += 3) {
      const a = triIdx[t], b = triIdx[t + 1], c = triIdx[t + 2];
      if (a === b || b === c || a === c) continue;
      const ax = getV(a, 0), ay = getV(a, 1), az = getV(a, 2), bx = getV(b, 0), by = getV(b, 1), bz = getV(b, 2), cx = getV(c, 0), cy = getV(c, 1), cz = getV(c, 2);
      let nx = (by - ay) * (cz - az) - (bz - az) * (cy - ay), ny = (bz - az) * (cx - ax) - (bx - ax) * (cz - az), nz = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
      const nl = Math.hypot(nx, ny, nz); if (nl < 1e-9) continue; nx /= nl; ny /= nl; nz /= nl;
      let rx = bx - ax, ry = by - ay, rz = bz - az; const rl = Math.hypot(rx, ry, rz) || 1; rx /= rl; ry /= rl; rz /= rl;
      const e1 = edgeFor(a, b), e2 = edgeFor(b, c), e3 = edgeFor(c, a);
      const oe1 = E(`ORIENTED_EDGE('',*,*,#${e1.ec},${e1.fwd ? ".T." : ".F."})`), oe2 = E(`ORIENTED_EDGE('',*,*,#${e2.ec},${e2.fwd ? ".T." : ".F."})`), oe3 = E(`ORIENTED_EDGE('',*,*,#${e3.ec},${e3.fwd ? ".T." : ".F."})`);
      const loop = E(`EDGE_LOOP('',(#${oe1},#${oe2},#${oe3}))`);
      const bound = E(`FACE_OUTER_BOUND('',#${loop},.T.)`);
      const pcp = E(`CARTESIAN_POINT('',(${f(ax)},${f(ay)},${f(az)}))`), pnd = E(`DIRECTION('',(${f(nx)},${f(ny)},${f(nz)}))`), prd = E(`DIRECTION('',(${f(rx)},${f(ry)},${f(rz)}))`);
      const axis = E(`AXIS2_PLACEMENT_3D('',#${pcp},#${pnd},#${prd})`);
      const plane = E(`PLANE('',#${axis})`);
      faceIds.push(E(`ADVANCED_FACE('',(#${bound}),#${plane},.T.)`));
    }
    if (!faceIds.length) continue;
    const shell = E(`CLOSED_SHELL('',(${faceIds.map((i) => "#" + i).join(",")}))`);
    solidIds.push(E(`MANIFOLD_SOLID_BREP('${sanitize(name)}',#${shell})`));
  }
  const rep = E(`ADVANCED_BREP_SHAPE_REPRESENTATION('${sanitize(modelName)}',(#${worldAxis},${solidIds.map((i) => "#" + i).join(",")}),#${geomCtx})`);
  E(`SHAPE_DEFINITION_REPRESENTATION(#${prodShape},#${rep})`);
  const now = new Date().toISOString().slice(0, 19);
  return ["ISO-10303-21;", "HEADER;", "FILE_DESCRIPTION(('VRINGON revolve faceted B-Rep export'),'2;1');",
    `FILE_NAME('${sanitize(modelName)}.step','${now}',('VRINGON CAD'),('VRINGON Inc.'),'VRINGON CAD 1.0','VRINGON CAD','');`,
    "FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));", "ENDSEC;", "DATA;", ...L, "ENDSEC;", "END-ISO-10303-21;", ""].join("\n");
}

/* ------------------------------------------------------------ OBJ / STL / GLB */
export function exportOBJ(root) {
  const parts = collectTriangles(root);
  const lines = ["# VRINGON revolve export (mm)"];
  let offset = 1;
  for (const p of parts) {
    lines.push(`o ${sanitize(p.name)}`);
    const t = p.tris, n = t.length / 3;
    for (let i = 0; i < t.length; i += 3) lines.push(`v ${f(t[i])} ${f(t[i + 1])} ${f(t[i + 2])}`);
    for (let i = 0; i < n; i += 3) lines.push(`f ${offset + i} ${offset + i + 1} ${offset + i + 2}`);
    offset += n;
  }
  lines.push("");
  return lines.join("\n");
}
export function exportSTL(root) {
  const g = new THREE.Group();
  root.traverse((n) => { if (n.isMesh && !n.name.endsWith(":cut") && !n.name.startsWith("ghost")) { const m = new THREE.Mesh(n.geometry, n.material); m.applyMatrix4(n.matrixWorld); g.add(m); } });
  return new STLExporter().parse(g, { binary: true });
}
export function exportGLB(root) {
  const g = new THREE.Group();
  root.traverse((n) => { if (n.isMesh && !n.name.endsWith(":cut") && !n.name.startsWith("ghost")) { const m = new THREE.Mesh(n.geometry, n.material); m.name = n.name; m.applyMatrix4(n.matrixWorld); g.add(m); } });
  return new Promise((resolve, reject) => new GLTFExporter().parse(g, resolve, reject, { binary: true }));
}

/* ------------------------------------------------------------ USDA (OpenUSD ASCII)
   메시 + DSL 파라미터를 custom 속성으로. metersPerUnit=0.001 로 mm 를 선언한다.
   usdview / Omniverse / Isaac 로 바로 열린다. */
export function exportUSDA(root, dsl, opts = {}) {
  const parts = collectTriangles(root);
  const name = sanitize(dsl.id || dsl.name || "shaft").replace(/[^A-Za-z0-9_]/g, "_") || "shaft";
  const mass = computeMass(dsl, densityOf(dsl.material));
  const q = (s) => `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  const out = [];
  out.push(`#usda 1.0`, `(`, `    defaultPrim = "${name}"`, `    metersPerUnit = 0.001`, `    upAxis = "Y"`, `    doc = "VRINGON revolve part — generated from shaft DSL"`, `)`, ``);
  out.push(`def Xform "${name}" (`, `    kind = "component"`, `)`, `{`);
  out.push(`    custom string vringon:dsl_version = ${q(dsl.dsl || "vringon-shaft/1.0")}`);
  out.push(`    custom string vringon:dsl_json = ${q(JSON.stringify(dsl))}`);
  out.push(`    custom string vringon:name_ko = ${q(dsl.name_ko || "")}`);
  out.push(`    custom string vringon:material = ${q(dsl.material || "")}`);
  out.push(`    custom double vringon:length_mm = ${totalLength(dsl)}`);
  out.push(`    custom double vringon:max_diameter_mm = ${maxDiameter(dsl)}`);
  out.push(`    custom double vringon:volume_mm3 = ${mass.volume_mm3.toFixed(3)}`);
  out.push(`    custom double vringon:mass_g = ${mass.mass_g.toFixed(3)}`);
  out.push(`    custom double[] vringon:segment_lengths_mm = [${(dsl.segments || []).map((s) => s.length).join(", ")}]`);
  out.push(`    custom double[] vringon:segment_diameters_mm = [${(dsl.segments || []).map((s) => (s.type === "taper" ? s.d_start : s.diameter)).join(", ")}]`);
  out.push(`    custom string[] vringon:segment_types = [${(dsl.segments || []).map((s) => q(s.type)).join(", ")}]`);
  out.push(`    custom string[] vringon:features = [${(dsl.features || []).map((s) => q(s.type)).join(", ")}]`);
  out.push(``);
  for (const p of parts) {
    const t = p.tris; const n = t.length / 3;
    const pts = []; for (let i = 0; i < t.length; i += 3) pts.push(`(${f(t[i])}, ${f(t[i + 1])}, ${f(t[i + 2])})`);
    const counts = new Array(n / 3).fill(3).join(", ");
    const idx = Array.from({ length: n }, (_, i) => i).join(", ");
    let minx = Infinity, miny = Infinity, minz = Infinity, maxx = -Infinity, maxy = -Infinity, maxz = -Infinity;
    for (let i = 0; i < t.length; i += 3) { minx = Math.min(minx, t[i]); maxx = Math.max(maxx, t[i]); miny = Math.min(miny, t[i + 1]); maxy = Math.max(maxy, t[i + 1]); minz = Math.min(minz, t[i + 2]); maxz = Math.max(maxz, t[i + 2]); }
    out.push(`    def Mesh "${sanitize(p.name).replace(/[^A-Za-z0-9_]/g, "_") || "mesh"}"`, `    {`);
    out.push(`        float3[] extent = [(${f(minx)}, ${f(miny)}, ${f(minz)}), (${f(maxx)}, ${f(maxy)}, ${f(maxz)})]`);
    out.push(`        int[] faceVertexCounts = [${counts}]`);
    out.push(`        int[] faceVertexIndices = [${idx}]`);
    out.push(`        point3f[] points = [${pts.join(", ")}]`);
    out.push(`        uniform token subdivisionScheme = "none"`);
    out.push(`        color3f[] primvars:displayColor = [(0.72, 0.74, 0.77)]`);
    out.push(`    }`);
  }
  out.push(`}`, ``);
  return out.join("\n");
}

/* ------------------------------------------------------------ 도면 (DXF/SVG) · JSON */
export function exportDrawingDXF(dsl, opts = {}) { return toDXF(drawShaft(dsl, { scale: "auto", ...opts })); }
export function exportDrawingSVG(dsl, opts = {}) { return toSVG(drawShaft(dsl, { scale: "auto", ...opts })); }
export function exportJSON(dsl) { return JSON.stringify(dsl, null, 2); }

export function downloadBlob(data, filename, mime = "application/octet-stream") {
  const blob = data instanceof Blob ? data : new Blob([data], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 800);
  return blob.size;
}
