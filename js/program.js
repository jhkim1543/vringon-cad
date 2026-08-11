// VRINGON CAD — freeform design programs (img2threejs approach, safely)
//
// The planner AI authors a *program* per request: a parameter schema in mm
// plus a list of parts whose meshes are built from a fixed geometry
// vocabulary, with every number allowed to be an arithmetic expression over
// the parameters. We interpret that program instead of eval-ing AI code, so
// the result is fully parametric (sliders + follow-up prompts keep working)
// while nothing arbitrary ever executes.

import * as THREE from "three";
import {
  roundedBox, plate, lathe, chamferCyl, loft, gear, bolt, tube, rib,
  gemGeometry, GEM_SHAPES, GEM_CUTS, meshOf, makeMaterial,
} from "./geometry.js";
import { MATERIAL_KEYS } from "./catalog.js";
import { measureInterior } from "./measure.js";

/* ---------------------------------------------------------------- expressions
   numbers · parameter names · + - * / % ( ) · unary minus
   functions: min max abs round floor ceil sqrt pow sin cos tan (degrees)
   constant: pi                                                              */
const FN = {
  min: Math.min, max: Math.max, abs: Math.abs, round: Math.round,
  floor: Math.floor, ceil: Math.ceil, sqrt: Math.sqrt, pow: Math.pow,
  sin: (d) => Math.sin((d * Math.PI) / 180),
  cos: (d) => Math.cos((d * Math.PI) / 180),
  tan: (d) => Math.tan((d * Math.PI) / 180),
};

export function evalExpr(expr, vars) {
  if (typeof expr === "number") return expr;
  if (typeof expr !== "string") throw new Error("bad expr type");
  const src = expr.trim();
  if (!src) throw new Error("empty expr");
  let i = 0;

  const peek = () => src[i];
  const eat = (c) => { if (src[i] !== c) throw new Error(`'${c}' expected at ${i} in "${src}"`); i++; };
  const skip = () => { while (i < src.length && src[i] === " ") i++; };

  function primary() {
    skip();
    if (peek() === "(") { eat("("); const v = sum(); skip(); eat(")"); return v; }
    if (peek() === "-") { eat("-"); return -primary(); }
    if (/[0-9.]/.test(peek() || "")) {
      const m = /^[0-9]*\.?[0-9]+/.exec(src.slice(i));
      if (!m) throw new Error(`number expected at ${i}`);
      i += m[0].length;
      return parseFloat(m[0]);
    }
    const m = /^[A-Za-z_][A-Za-z0-9_]*/.exec(src.slice(i));
    if (!m) throw new Error(`token expected at ${i} in "${src}"`);
    i += m[0].length;
    const name = m[0];
    skip();
    if (peek() === "(") {
      if (!FN[name]) throw new Error(`unknown function ${name}`);
      eat("(");
      const args = [sum()];
      skip();
      while (peek() === ",") { eat(","); args.push(sum()); skip(); }
      eat(")");
      return FN[name](...args);
    }
    if (name === "pi") return Math.PI;
    let key = name;
    if (!(key in vars)) {
      // planners drift on identifier casing (Length vs length) — match loosely
      key = Object.keys(vars).find((k) => k.toLowerCase() === name.toLowerCase());
      if (!key) throw new Error(`unknown param ${name}`);
    }
    const v = Number(vars[key]);
    if (!isFinite(v)) throw new Error(`param ${name} not numeric`);
    return v;
  }
  function product() {
    let v = primary();
    for (;;) {
      skip();
      const c = peek();
      if (c === "*") { eat("*"); v *= primary(); }
      else if (c === "/") { eat("/"); const d = primary(); v = d === 0 ? 0 : v / d; }
      else if (c === "%") { eat("%"); const d = primary(); v = d === 0 ? 0 : v % d; }
      else return v;
    }
  }
  function sum() {
    let v = product();
    for (;;) {
      skip();
      const c = peek();
      if (c === "+") { eat("+"); v += product(); }
      else if (c === "-") { eat("-"); v -= product(); }
      else return v;
    }
  }
  const out = sum();
  skip();
  if (i !== src.length) throw new Error(`trailing input at ${i} in "${src}"`);
  if (!isFinite(out)) throw new Error(`non-finite result of "${src}"`);
  return out;
}

/* ---------------------------------------------------------------- primitives
   Each entry: [minArgs, maxArgs, builder]. All dimensions in mm.            */
const PRIMS = {
  box:        [3, 4, (w, h, d, r) => (r ? roundedBox(w, h, d, r) : new THREE.BoxGeometry(w, h, d))],
  roundedBox: [4, 4, (w, h, d, r) => roundedBox(w, h, d, r)],
  plate:      [4, 5, (w, d, t, r, bevel) => plate(w, d, t, r, bevel ?? 0)],
  cylinder:   [3, 4, (rt, rb, h, seg) => new THREE.CylinderGeometry(Math.max(0.01, rt), Math.max(0.01, rb), h, Math.max(3, Math.round(seg ?? 48)))],
  chamferCyl: [3, 4, (r, h, ch, seg) => chamferCyl(r, h, ch, Math.max(8, Math.round(seg ?? 64)))],
  sphere:     [1, 3, (r, wSeg, hSeg) => new THREE.SphereGeometry(r, Math.max(8, Math.round(wSeg ?? 40)), Math.max(6, Math.round(hSeg ?? 24)))],
  capsule:    [2, 2, (r, h) => new THREE.CapsuleGeometry(r, Math.max(0.01, h), 8, 24)],
  torus:      [2, 4, (r, t, arcDeg, seg) => new THREE.TorusGeometry(r, t, 20, Math.max(12, Math.round(seg ?? 64)), ((arcDeg ?? 360) * Math.PI) / 180)],
  // purpose-built mug/kettle handle: a vertical C-loop whose opening faces −X
  // (the body side), so the planner can never lay it flat by mistake
  handle:     [2, 3, (loopR, tubeR, arcDeg) => {
    const arc = ((arcDeg ?? 250) * Math.PI) / 180;
    const g = new THREE.TorusGeometry(loopR, tubeR, 18, 48, arc);
    g.rotateZ(-arc / 2);   // solid arc centred on +X, opening facing the body (−X)
    return g;
  }],
  cone:       [2, 3, (r, h, seg) => new THREE.ConeGeometry(r, h, Math.max(3, Math.round(seg ?? 48)))],
  gear:       [3, 4, (radius, teeth, thickness, boreR) => gear(radius, Math.max(6, Math.round(teeth)), thickness, boreR ?? 0)],
  bolt:       [4, 4, (shankD, len, headD, headH) => bolt(shankD, len, headD, headH)],
  rib:        [3, 3, (len, height, t) => rib(len, height, t)],
};

// primitives that take structured (non-scalar) input, handled specially
function buildLathe(profile, vars, seg) {
  if (!Array.isArray(profile) || profile.length < 3) throw new Error("lathe profile needs 3+ points");
  const pts = profile.map((p) => {
    if (!Array.isArray(p) || p.length !== 2) throw new Error("lathe point must be [x,y]");
    return [evalExpr(p[0], vars), evalExpr(p[1], vars)];
  });
  // Solids need closed ends; planners routinely forget them, leaving paper-thin
  // open shells. Snap both profile ends to the axis so the surface always closes.
  if (pts[0][0] > 0.05) pts.unshift([0.0001, pts[0][1]]);
  if (pts[pts.length - 1][0] > 0.05) pts.push([0.0001, pts[pts.length - 1][1]]);
  return lathe(pts, Math.max(12, Math.round(seg ?? 80)));
}
function buildLoft(sections, vars) {
  if (!Array.isArray(sections) || sections.length < 2) throw new Error("loft needs 2+ sections");
  return loft(sections.map((s) => ({
    w: evalExpr(s.w, vars), d: evalExpr(s.d, vars),
    y: evalExpr(s.y, vars), r: evalExpr(s.r ?? 0, vars),
  })));
}
function buildGem(spec, vars) {
  return gemGeometry({
    d: evalExpr(spec.d ?? 6, vars),
    shape: GEM_SHAPES.includes(spec.shape) ? spec.shape : "round",
    cut: GEM_CUTS.includes(spec.cut) ? spec.cut : "brilliant",
    ratio: evalExpr(spec.ratio ?? 1, vars),
    tablePct: evalExpr(spec.tablePct ?? 56, vars),
    crownAngle: evalExpr(spec.crownAngle ?? 34.5, vars),
    pavAngle: evalExpr(spec.pavAngle ?? 40.8, vars),
  });
}

/* ---------------------------------------------------------------- programs */
export const PROGRAM_LIMITS = { parts: 24, meshesPerPart: 48, params: 16, repeat: 64 };

export function defaultProgramParams(program) {
  const out = {};
  for (const [k, d] of Object.entries(program.params || {})) out[k] = Number(d.value) || 0;
  return out;
}

export function clampProgramParams(program, params) {
  const out = {};
  for (const [k, d] of Object.entries(program.params || {})) {
    let v = Number(params?.[k]);
    if (!isFinite(v)) v = Number(d.value) || 0;
    v = Math.max(Number(d.min) || 0, Math.min(Number(d.max) || 1e5, v));
    const step = Number(d.step) || 1;
    out[k] = step >= 1 ? Math.round(v) : Math.round(v / step) * step;
  }
  return out;
}

function meshGeometry(mesh, vars) {
  if (mesh.prim === "lathe") return buildLathe(mesh.profile, vars, mesh.seg ? evalExpr(mesh.seg, vars) : undefined);
  if (mesh.prim === "loft") return buildLoft(mesh.sections, vars);
  if (mesh.prim === "gem") return buildGem(mesh.gem || {}, vars);
  const def = PRIMS[mesh.prim];
  if (!def) throw new Error(`unknown primitive '${mesh.prim}'`);
  const [minA, maxA, make] = def;
  const args = (mesh.args || []).map((a) => evalExpr(a, vars));
  if (args.length < minA || args.length > maxA) {
    throw new Error(`${mesh.prim} expects ${minA}${maxA > minA ? "~" + maxA : ""} args, got ${args.length}`);
  }
  return make(...args);
}

/* Build a THREE.Group with the same part contract the archetype builder
   produces, so selection, materials, explode, export and the library all
   work unchanged. */
export function buildProgramModel(program, params, materialOverrides = {}) {
  const p = { ...defaultProgramParams(program), ...params };
  const root = new THREE.Group();
  root.name = (program.id || "freeform").replace(/[^A-Za-z0-9_-]/g, "").slice(0, 24) || "freeform";
  root.userData = { program: true, displayName: program.title, params: p };

  for (const part of (program.parts || []).slice(0, PROGRAM_LIMITS.parts)) {
    const key = materialOverrides[part.id] || (MATERIAL_KEYS.includes(part.material) ? part.material : "aluminum");
    const mat = makeMaterial(key);
    const g = new THREE.Group();
    g.name = String(part.id || "part").slice(0, 40);
    g.userData = { isPart: true, label: String(part.label || part.id || "part").slice(0, 40), materialKey: key };

    for (const mesh of (part.meshes || []).slice(0, PROGRAM_LIMITS.meshesPerPart)) {
      const fixedOrient = mesh.prim === "handle"; // orientation is baked into the primitive
      const place = {
        x: evalExpr(mesh.x ?? 0, p), y: evalExpr(mesh.y ?? 0, p), z: evalExpr(mesh.z ?? 0, p),
        rx: fixedOrient ? 0 : (evalExpr(mesh.rxDeg ?? 0, p) * Math.PI) / 180,
        ry: fixedOrient ? 0 : (evalExpr(mesh.ryDeg ?? 0, p) * Math.PI) / 180,
        rz: fixedOrient ? 0 : (evalExpr(mesh.rzDeg ?? 0, p) * Math.PI) / 180,
      };
      if (mesh.repeat) {
        const count = Math.max(1, Math.min(PROGRAM_LIMITS.repeat, Math.round(evalExpr(mesh.repeat.count, p))));
        const radius = evalExpr(mesh.repeat.radius ?? 0, p);
        const start = (evalExpr(mesh.repeat.startDeg ?? 0, p) * Math.PI) / 180;
        const face = mesh.repeat.face !== false;
        for (let k = 0; k < count; k++) {
          const a = start + (k / count) * Math.PI * 2;
          g.add(meshOf(meshGeometry(mesh, p), mat, {
            ...place,
            x: place.x + Math.cos(a) * radius,
            z: place.z + Math.sin(a) * radius,
            ry: place.ry + (face ? -a : 0),
          }));
        }
      } else {
        g.add(meshOf(meshGeometry(mesh, p), mat, place));
      }
    }
    g.userData.__handleOnly = (part.meshes || []).length > 0 &&
      (part.meshes || []).every((m) => m.prim === "handle");
    if (g.children.length) root.add(g);
  }

  if (!root.children.length) throw new Error("program produced no parts");

  // Deterministic attachment: planners chronically misplace handles along X,
  // so snap any handle-only part flush against the rest of the model instead
  // of trusting the authored offset.
  const handles = root.children.filter((g) => g.userData.__handleOnly);
  if (handles.length && root.children.length > handles.length) {
    const bodyBB = new THREE.Box3();
    for (const g of root.children) if (!g.userData.__handleOnly) bodyBB.expandByObject(g);
    for (const g of handles) {
      const hb = new THREE.Box3().setFromObject(g);
      if (!isFinite(hb.min.x)) continue;
      g.position.x += (bodyBB.max.x - 3) - hb.min.x;   // 3 mm bite into the wall
    }
  }

  closeAssemblyGaps(root);

  const bb = new THREE.Box3().setFromObject(root);
  const c = bb.getCenter(new THREE.Vector3());
  root.position.set(-c.x, -bb.min.y, -c.z);
  return root;
}

/* Planners get proportions right and placement wrong, leaving parts hovering
   in mid-air. Fix it geometrically: grow the assembly outward from its largest
   part, and translate each disconnected part along the shortest vector that
   brings it into contact. Works for stacked lids and side-mounted cranks alike. */
function closeAssemblyGaps(root) {
  const parts = root.children.filter((g) => g.userData?.isPart);
  if (parts.length < 2) return;

  const items = parts.map((g) => {
    const b = new THREE.Box3().setFromObject(g);
    const s = b.getSize(new THREE.Vector3());
    return { g, b, volume: Math.max(1e-6, s.x * s.y * s.z) };
  }).filter((i) => isFinite(i.volume) && isFinite(i.b.min.x));
  if (items.length < 2) return;

  const total = new THREE.Box3();
  items.forEach((i) => total.union(i.b));
  const span = total.getSize(new THREE.Vector3()).length();
  if (!isFinite(span) || span <= 0) return;
  const tol = Math.max(1.2, span * 0.012);

  // gap vector that brings box a into contact with box b (zero per axis if already overlapping)
  const gapVector = (a, b) => {
    const v = new THREE.Vector3();
    const axis = (aMin, aMax, bMin, bMax) => {
      if (aMin > bMax) return -(aMin - bMax);
      if (bMin > aMax) return bMin - aMax;
      return 0;
    };
    v.x = axis(a.min.x, a.max.x, b.min.x, b.max.x);
    v.y = axis(a.min.y, a.max.y, b.min.y, b.max.y);
    v.z = axis(a.min.z, a.max.z, b.min.z, b.max.z);
    return v;
  };

  // seed with the bulkiest part — that is the body in practically every product
  items.sort((x, y) => y.volume - x.volume);
  const attached = [items[0]];
  const pending = items.slice(1);

  while (pending.length) {
    let best = null;
    for (let i = 0; i < pending.length; i++) {
      for (const anchor of attached) {
        const v = gapVector(pending[i].b, anchor.b);
        const d = v.length();
        if (!best || d < best.d) best = { i, v, d };
      }
    }
    const { i, v, d } = best;
    const item = pending.splice(i, 1)[0];
    if (d > tol) {
      // pull back a hair so touching faces leave a seam instead of fusing
      const move = v.clone().multiplyScalar(Math.max(0, (d - tol * 0.3) / d));
      item.g.position.add(move);
      item.b.translate(move);
    }
    attached.push(item);
  }
}

/* Signed volume of every triangle in the tree, in world space. For a closed
   mesh this is the material volume, so a hollow shell reads as its walls. */
function solidVolume(root) {
  root.updateWorldMatrix(true, true);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  let v = 0;
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry?.attributes?.position) return;
    const pos = o.geometry.attributes.position;
    const idx = o.geometry.index;
    const n = idx ? idx.count : pos.count;
    for (let i = 0; i < n; i += 3) {
      const i0 = idx ? idx.getX(i) : i, i1 = idx ? idx.getX(i + 1) : i + 1, i2 = idx ? idx.getX(i + 2) : i + 2;
      a.fromBufferAttribute(pos, i0).applyMatrix4(o.matrixWorld);
      b.fromBufferAttribute(pos, i1).applyMatrix4(o.matrixWorld);
      c.fromBufferAttribute(pos, i2).applyMatrix4(o.matrixWorld);
      v += a.dot(b.clone().cross(c)) / 6;
    }
  });
  return Math.abs(v);
}

/* dry-run with default params: returns [] when buildable, else error strings */
export function validateProgram(program, expect = null) {
  const errs = [];
  if (!program || typeof program !== "object") return ["program missing"];
  const pk = Object.keys(program.params || {});
  if (!pk.length) errs.push("params empty");
  if (pk.length > PROGRAM_LIMITS.params) errs.push(`too many params (${pk.length})`);
  if (!Array.isArray(program.parts) || !program.parts.length) errs.push("parts empty");
  if (errs.length) return errs;
  try {
    const root = buildProgramModel(program, defaultProgramParams(program));
    const bb = new THREE.Box3().setFromObject(root);
    const s = bb.getSize(new THREE.Vector3());
    const maxDim = Math.max(s.x, s.y, s.z);
    const minDim = Math.min(s.x, s.y, s.z);
    if (!isFinite(maxDim) || maxDim <= 0) errs.push("degenerate bounds");
    else if (maxDim < 8) {
      // inch drawings transcribed as millimetres land here (1.19 in → "1.19 mm")
      errs.push(`전체 크기가 ${maxDim.toFixed(2)}mm로 비현실적입니다. 도면이 인치 표기였다면 모든 치수를 ×25.4 해서 mm로 다시 쓰세요`);
    } else if (maxDim > 3000) errs.push(`implausible size ${maxDim.toFixed(1)}mm`);
    else if (minDim < 0.8) {
      errs.push(`가장 얇은 방향이 ${minDim.toFixed(2)}mm입니다. 치수 단위가 뒤섞였는지 확인하고 세 축을 같은 단위로 다시 쓰세요`);
    }
    /* The spec sheet is a contract, not a suggestion. A gearbox housing came
       back as an 815mm disc with 400mm spikes because repeat radii and rib
       lengths ran away, and nothing downstream caught it: the plausibility band
       above is far too wide to notice. Check the built envelope against the
       spec and send the difference back as a repairable error. */
    if (expect) {
      /* Compare all three axes, not just the largest. A bottle built twice as
         wide as it should be still passed, because its height happened to be
         close: the width was 1.94x and nothing looked at it. Sorting both
         triples and checking each one catches a profile whose radii were used
         as diameters, which is the usual way this goes wrong. */
      const want = [Number(expect.width) || 0, Number(expect.height) || 0, Number(expect.depth) || 0]
        .filter((v) => v > 0).sort((a, b) => b - a);
      const got = [s.x, s.y, s.z].sort((a, b) => b - a);
      if (want.length === 3 && got[0] > 0) {
        const off = want.map((w, i) => ({ w, g: got[i], ratio: got[i] / w }))
          .filter((d) => d.ratio > 1.6 || d.ratio < 0.55);
        if (off.length) {
          const worst = off.reduce((a, b) => (Math.abs(Math.log(a.ratio)) > Math.abs(Math.log(b.ratio)) ? a : b));
          errs.push(`치수가 사양서와 다릅니다. 사양 ${want.map((v) => v.toFixed(0)).join("×")}mm, 결과 ${got.map((v) => v.toFixed(0)).join("×")}mm`
            + ` (가장 큰 차이 ${worst.ratio.toFixed(2)}배).`
            + (worst.ratio > 1.8 && worst.ratio < 2.2
              ? ` 정확히 2배에 가깝습니다. lathe profile의 첫 값은 **반경**입니다. 지름을 넣지 마십시오.`
              : ` repeat의 radius, 리브·핀 길이, 부착물 오프셋이 본체 밖으로 나가지 않게 줄이십시오.`));
        }
      }

      /* A container authored from its outer profile alone is a solid lump. It
         passes every dimensional check — the outside is right — and only the
         mass gives it away: a 300ml bottle came out at 1.94kg. Two ways it
         shows: too much material against a measured cavity, or no cavity at all
         in a product the spec sheet says is hollow. The second is the common
         one, because image-to-3D hands us a sealed solid to measure. */
      if (expect.hollow) {
        const built = solidVolume(root);
        const inside = measureInterior(root);
        if (!inside) {
          errs.push("속이 빈 제품인데 통짜로 만들었습니다."
            + " 사양서에 벽 두께와 내용적이 적힌 파트는 lathe 프로파일을 셸로 그리십시오:"
            + " 바닥 중심에서 외벽을 따라 올라가고, 림에서 보어 반경으로 꺾어 내벽을 따라 내려오고,"
            + " 공동 바닥에서 축으로 닫습니다. 예: [0,0] [30,0] [30,100] [26,100] [26,3] [0,3]"
            + (expect.capacityMl ? ` 내용적이 ${expect.capacityMl}ml가 되도록 보어 반경과 높이를 맞추십시오.` : ""));
          /* Capacity is deliberately NOT checked here. It is a quality number,
             not a buildability failure, and adding it as a third blocking gate
             threw away geometrically sound models: two rejections in a row drop
             the run to the generic catalogue shape, which scored 41% silhouette
             against the 66% the rejected program had. It is reported after the
             build instead, where the build sheet can tune the bore. */
        } else if (expect.volumeMm3 > 0 && built > expect.volumeMm3 * 2.2) {
          errs.push(`속을 덜 팠습니다. 실측 재료 부피는 ${(expect.volumeMm3 / 1000).toFixed(1)}cm³인데`
            + ` 만들어진 형상은 ${(built / 1000).toFixed(1)}cm³로 ${(built / expect.volumeMm3).toFixed(1)}배입니다.`
            + ` 보어 반경을 키우거나 공동 바닥을 낮추십시오.`);
        }
      }
    }
    root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  } catch (e) {
    errs.push(String(e.message || e));
  }
  return errs;
}

/* simulation defs from the program (optional), same shape the sim engine eats */
export function programSims(program, params) {
  const p = { ...defaultProgramParams(program), ...params };
  const out = [];
  for (const s of (program.sims || []).slice(0, 8)) {
    if (!["spinY", "spinX", "spinZ", "lift", "unscrew"].includes(s.mode)) continue;
    out.push({
      part: s.part, mode: s.mode,
      rpm: s.rpm !== undefined ? evalExpr(s.rpm, p) : 30,
      travel: s.travel !== undefined ? evalExpr(s.travel, p) : 10,
      period: s.period !== undefined ? evalExpr(s.period, p) : 2.6,
      pivot: Array.isArray(s.pivot) && s.pivot.length === 2
        ? [evalExpr(s.pivot[0], p), evalExpr(s.pivot[1], p)] : [0, 0],
    });
  }
  return out;
}

export { PROGRAM_SPEC, PROGRAM_EXAMPLE } from "./program-spec.js";
