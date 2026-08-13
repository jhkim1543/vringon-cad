// VRINGON CAD — export pipeline
// Ported/adapted from the WEB-CAD workbench export pipeline (web/src/io/exporters.ts):
// GLB · OBJ · STL follow the same three.js exporter path; STEP and DXF are
// mesh-native writers (STEP AP214 faceted B-Rep with shared edge topology,
// DXF 3DFACE with one layer per part) so CAD conversion runs fully on-prem.

import * as THREE from "three";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { STLExporter } from "three/addons/exporters/STLExporter.js";

export const SCENE_TO_MM = 1; // the scene unit IS the millimetre — no rescaling on export

/* ---------------- triangle soup collection, grouped by part ---------------- */
export function collectPartTriangles(root, scale = SCENE_TO_MM) {
  root.updateWorldMatrix(true, true);
  const parts = [];
  const v = new THREE.Vector3();

  const gather = (node, bucket) => {
    if (node.isMesh && node.visible && node.geometry) {
      const geo = node.geometry.index ? node.geometry.toNonIndexed() : node.geometry;
      const pos = geo.getAttribute("position");
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i).applyMatrix4(node.matrixWorld).multiplyScalar(scale);
        bucket.push(v.x, v.y, v.z);
      }
      if (geo !== node.geometry) geo.dispose();
    }
    for (const c of node.children) {
      if (!(c.userData && c.userData.isPart)) gather(c, bucket);
    }
  };

  const walk = (node) => {
    if (node.userData && node.userData.isPart) {
      if (node.visible) {
        const tris = [];
        gather(node, tris);
        if (tris.length) parts.push({ name: node.name || "part", tris });
      }
    } else {
      node.children.forEach(walk);
    }
  };
  walk(root);

  if (!parts.length) { // no part markup — export whole object as one solid
    const tris = [];
    gather(root, tris);
    if (tris.length) parts.push({ name: root.name || "model", tris });
  }
  return parts;
}

/* ================================================================
   STEP AP214 — faceted B-Rep, one MANIFOLD_SOLID_BREP per part
   ================================================================ */
const f = (n) => {
  if (!isFinite(n)) n = 0;
  const s = n.toFixed(5);
  return s === "-0.00000" ? "0.00000" : s;
};

export function exportSTEP(root, modelName = "vringon_model") {
  const parts = collectPartTriangles(root);
  const L = [];        // entity lines
  let id = 0;
  const E = (txt) => { id += 1; L.push(`#${id}=${txt};`); return id; };

  /* header-level product entities */
  const appCtx = E(`APPLICATION_CONTEXT('core data for automotive mechanical design processes')`);
  E(`APPLICATION_PROTOCOL_DEFINITION('international standard','automotive_design',2000,#${appCtx})`);
  const prodCtx = E(`PRODUCT_CONTEXT('',#${appCtx},'mechanical')`);
  const product = E(`PRODUCT('${modelName}','${modelName}','VRINGON CAD generated part',(#${prodCtx}))`);
  const formation = E(`PRODUCT_DEFINITION_FORMATION('','',#${product})`);
  const defCtx = E(`PRODUCT_DEFINITION_CONTEXT('part definition',#${appCtx},'design')`);
  const prodDef = E(`PRODUCT_DEFINITION('design','',#${formation},#${defCtx})`);
  const prodShape = E(`PRODUCT_DEFINITION_SHAPE('','',#${prodDef})`);

  /* units + representation context */
  const mm = E(`(LENGTH_UNIT()NAMED_UNIT(*)SI_UNIT(.MILLI.,.METRE.))`);
  const rad = E(`(NAMED_UNIT(*)PLANE_ANGLE_UNIT()SI_UNIT($,.RADIAN.))`);
  const sr = E(`(NAMED_UNIT(*)SI_UNIT($,.STERADIAN.)SOLID_ANGLE_UNIT())`);
  const unc = E(`UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(0.01),#${mm},'distance_accuracy_value','')`);
  const geomCtx = E(`(GEOMETRIC_REPRESENTATION_CONTEXT(3)GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT((#${unc}))GLOBAL_UNIT_ASSIGNED_CONTEXT((#${mm},#${rad},#${sr}))REPRESENTATION_CONTEXT('Context #1','3D Context'))`);

  const origin = E(`CARTESIAN_POINT('',(0.,0.,0.))`);
  const dz = E(`DIRECTION('',(0.,0.,1.))`);
  const dx = E(`DIRECTION('',(1.,0.,0.))`);
  const worldAxis = E(`AXIS2_PLACEMENT_3D('',#${origin},#${dz},#${dx})`);

  const solidIds = [];

  for (const part of parts) {
    const { tris, name } = part;
    /* vertex dedup */
    const vidByKey = new Map();
    const cpIds = [], vpIds = [];
    const triIdx = [];
    for (let i = 0; i < tris.length; i += 3) {
      const key = `${tris[i].toFixed(4)}_${tris[i + 1].toFixed(4)}_${tris[i + 2].toFixed(4)}`;
      let vi = vidByKey.get(key);
      if (vi === undefined) {
        vi = cpIds.length;
        vidByKey.set(key, vi);
        const cp = E(`CARTESIAN_POINT('',(${f(tris[i])},${f(tris[i + 1])},${f(tris[i + 2])}))`);
        cpIds.push(cp);
        vpIds.push(E(`VERTEX_POINT('',#${cp})`));
      }
      triIdx.push(vi);
    }

    /* shared edge topology */
    const edgeMap = new Map(); // "a_b" (a<b) -> edge curve id
    const edgeFor = (a, b) => {
      const key = a < b ? `${a}_${b}` : `${b}_${a}`;
      let ec = edgeMap.get(key);
      if (!ec) {
        const lo = a < b ? a : b, hi = a < b ? b : a;
        const pa = cpIds[lo];
        const dvx = getV(hi, 0) - getV(lo, 0), dvy = getV(hi, 1) - getV(lo, 1), dvz = getV(hi, 2) - getV(lo, 2);
        const len = Math.hypot(dvx, dvy, dvz) || 1;
        const dir = E(`DIRECTION('',(${f(dvx / len)},${f(dvy / len)},${f(dvz / len)}))`);
        const vec = E(`VECTOR('',#${dir},${f(len)})`);
        const line = E(`LINE('',#${pa},#${vec})`);
        ec = E(`EDGE_CURVE('',#${vpIds[lo]},#${vpIds[hi]},#${line},.T.)`);
        edgeMap.set(key, ec);
      }
      return { ec, fwd: a < b };
    };

    /* vertex coordinate accessor (first occurrence coords) */
    const coords = [];
    {
      const seen = new Map();
      let vi = 0;
      for (let i = 0; i < tris.length; i += 3) {
        const key = `${tris[i].toFixed(4)}_${tris[i + 1].toFixed(4)}_${tris[i + 2].toFixed(4)}`;
        if (!seen.has(key)) { seen.set(key, vi); coords.push(tris[i], tris[i + 1], tris[i + 2]); vi += 1; }
      }
    }
    function getV(vi, c) { return coords[vi * 3 + c]; }

    const faceIds = [];
    for (let t = 0; t < triIdx.length; t += 3) {
      const a = triIdx[t], b = triIdx[t + 1], c = triIdx[t + 2];
      if (a === b || b === c || a === c) continue;
      const ax = getV(a, 0), ay = getV(a, 1), az = getV(a, 2);
      const bx = getV(b, 0), by = getV(b, 1), bz = getV(b, 2);
      const cx = getV(c, 0), cy = getV(c, 1), cz = getV(c, 2);
      let nx = (by - ay) * (cz - az) - (bz - az) * (cy - ay);
      let ny = (bz - az) * (cx - ax) - (bx - ax) * (cz - az);
      let nz = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
      const nl = Math.hypot(nx, ny, nz);
      if (nl < 1e-9) continue; // degenerate
      nx /= nl; ny /= nl; nz /= nl;
      /* reference direction: edge a->b */
      let rx = bx - ax, ry = by - ay, rz = bz - az;
      const rl = Math.hypot(rx, ry, rz) || 1;
      rx /= rl; ry /= rl; rz /= rl;

      const e1 = edgeFor(a, b), e2 = edgeFor(b, c), e3 = edgeFor(c, a);
      const oe1 = E(`ORIENTED_EDGE('',*,*,#${e1.ec},${e1.fwd ? ".T." : ".F."})`);
      const oe2 = E(`ORIENTED_EDGE('',*,*,#${e2.ec},${e2.fwd ? ".T." : ".F."})`);
      const oe3 = E(`ORIENTED_EDGE('',*,*,#${e3.ec},${e3.fwd ? ".T." : ".F."})`);
      const loop = E(`EDGE_LOOP('',(#${oe1},#${oe2},#${oe3}))`);
      const bound = E(`FACE_OUTER_BOUND('',#${loop},.T.)`);
      const pcp = E(`CARTESIAN_POINT('',(${f(ax)},${f(ay)},${f(az)}))`);
      const pnd = E(`DIRECTION('',(${f(nx)},${f(ny)},${f(nz)}))`);
      const prd = E(`DIRECTION('',(${f(rx)},${f(ry)},${f(rz)}))`);
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
  return [
    "ISO-10303-21;",
    "HEADER;",
    "FILE_DESCRIPTION(('VRINGON CAD faceted B-Rep export'),'2;1');",
    `FILE_NAME('${sanitize(modelName)}.step','${now}',('VRINGON CAD'),('VRINGON Inc.'),'VRINGON CAD 1.0','VRINGON CAD','');`,
    "FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));",
    "ENDSEC;",
    "DATA;",
    ...L,
    "ENDSEC;",
    "END-ISO-10303-21;",
    "",
  ].join("\n");
}

function sanitize(s) { return String(s).replace(/[^A-Za-z0-9_\- ]/g, "_"); }

/* ================================================================
   DXF — 3DFACE mesh, one layer per part
   ================================================================ */
export function exportDXF(root) {
  const parts = collectPartTriangles(root);
  const out = [];
  const push = (...vals) => out.push(...vals);

  push("0", "SECTION", "2", "HEADER", "9", "$ACADVER", "1", "AC1014", "0", "ENDSEC");
  push("0", "SECTION", "2", "TABLES", "0", "TABLE", "2", "LAYER", "70", String(parts.length));
  parts.forEach((p, i) => {
    push("0", "LAYER", "2", sanitize(p.name), "70", "0", "62", String((i % 7) + 1), "6", "CONTINUOUS");
  });
  push("0", "ENDTAB", "0", "ENDSEC");
  push("0", "SECTION", "2", "ENTITIES");
  for (const p of parts) {
    const t = p.tris;
    for (let i = 0; i < t.length; i += 9) {
      push("0", "3DFACE", "8", sanitize(p.name));
      const pts = [0, 3, 6, 6]; // 4th vertex repeats 3rd (triangle)
      pts.forEach((o, k) => {
        push(String(10 + k), f(t[i + o]), String(20 + k), f(t[i + o + 1]), String(30 + k), f(t[i + o + 2]));
      });
    }
  }
  push("0", "ENDSEC", "0", "EOF", "");
  return out.join("\r\n");
}

/* ================================================================
   OBJ — part-grouped
   ================================================================ */
export function exportOBJ(root) {
  const parts = collectPartTriangles(root, 1); // OBJ stays in scene units
  const lines = ["# VRINGON CAD export", "# parts: " + parts.map((p) => p.name).join(", ")];
  let offset = 1;
  for (const p of parts) {
    lines.push(`g ${sanitize(p.name)}`, `o ${sanitize(p.name)}`);
    const t = p.tris;
    const n = t.length / 3;
    for (let i = 0; i < t.length; i += 3) lines.push(`v ${f(t[i])} ${f(t[i + 1])} ${f(t[i + 2])}`);
    for (let i = 0; i < n; i += 3) lines.push(`f ${offset + i} ${offset + i + 1} ${offset + i + 2}`);
    offset += n;
  }
  lines.push("");
  return lines.join("\n");
}

/* ================================================================
   GLB / STL — three.js exporter path (as in WEB-CAD)
   ================================================================ */
export function exportGLB(root) {
  return new Promise((resolve, reject) => {
    new GLTFExporter().parse(root,
      (result) => resolve(result),
      (err) => reject(err),
      { binary: true });
  });
}

export function exportSTL(root) {
  const exporter = new STLExporter();
  return exporter.parse(root, { binary: true }); // DataView
}

/* ---------------- download helper ---------------- */
export function downloadBlob(data, filename, mime = "application/octet-stream") {
  const blob = data instanceof Blob ? data : new Blob([data], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 800);
  return blob.size;
}
