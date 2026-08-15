/* ==========================================================================
   Let the measurement decide the coordinates.

   Up to here every number in a specification came from a language model
   reading a photograph. tools/similarity.mjs then said how far the compiled
   CAD landed from the shape it was meant to reproduce — but only said it. This
   closes the loop: the same silhouette agreement becomes an objective, and the
   part dimensions are searched until it stops improving. Nothing is generated;
   the specification that goes in is the specification that comes out, with
   different millimetres in it.

   What is deliberately NOT free:

   • Anything the user stated. A dimension carrying provenance USER_PROVIDED is
     the one number in the file that was not inferred, and an optimiser that
     edits it has quietly replaced the brief with its own opinion. Those axes
     never receive a knob — not clamped, not penalised, absent.
   • Anything the design checks or the server validator would reject. IoU is a
     picture metric and knows nothing about rotor wash, tipover or an aerofoil
     whose thickness has to equal chord × thickness_pct. Every candidate is
     compiled, flown through js/drone-sim.js checks and passed through
     validateSpec, and a candidate that turns a passing check into a failing one
     is discarded no matter what it did to the score. Baselines are captured
     first, so the samples' pre-existing complaints neither block the run nor
     get to grow.
   • The yaw alignment. similarity.mjs is allowed to rotate the reference by a
     quarter turn to undo a coordinate convention; here it is measured once on
     the untouched specification and frozen, because an optimiser permitted to
     re-pick its own frame can raise the number without moving a single part.

   The search is coordinate descent with a per-knob adaptive step. Not because
   it is the best optimiser but because it is the one whose every move is
   attributable: each accepted step names a part, a field and a delta, so the
   diff of the specification reads as a list of decisions rather than as the
   output of a black box. Parts are visited largest first and the pass repeats,
   which is what lets a later part react to an earlier one — the silhouettes
   are normalised by the whole assembly's bounding box, so every part's score
   depends on every other part's size.

     node tools/fit-spec.mjs <id...> [--rounds N] [--dry]
                             [--ref mesh|views] [--res N] [--views <dir>]
                             [--specs <dir>] [--scale F] [--rotate-all] [--json]

   Results are written back into the specification unless --dry.
   ========================================================================== */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { buildFromSpec } from "../js/spec-cad.js";
import { positionsFromObject3D, positionsFromGlb, loftAxis } from "../js/mesh-loft.js";
import { createDroneSim } from "../js/drone-sim.js";
import { validateSpec } from "../spec-validate.mjs";
import { masksFromGeometry, masksFromImages, viewFiles, alignYaw, VIEWS } from "./similarity.mjs";

const ROOT = new URL("../", import.meta.url);
const path = (rel) => fileURLToPath(new URL(rel, ROOT));

const AXES = ["w", "h", "d"];
const clone = (o) => JSON.parse(JSON.stringify(o));
/* One decimal, so a 9mm sensor can still move by a step the grid can see while
   a spec that was written in whole millimetres stays written in whole
   millimetres. */
const r1 = (v) => +v.toFixed(1);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/* ------------------------------------------------------- frozen dimensions

   dimensions[] is prose next to the geometry — "wingspan 1200mm" — and the
   link to size_mm is by value, not by name. Matching on the value is what
   makes the freeze specific: 1200 appears as size_mm.w of the wing, so only
   that axis is pinned and the chord stays free.

   When the number is not a length at all (a 10-litre tank) or matches no axis,
   the honest reading is that we do not know which axis carries it, and the
   whole part is frozen. Guessing would be the one failure mode this rule
   exists to prevent. */
function frozenAxes(spec) {
  const out = new Map();
  for (const p of spec.parts || []) {
    const g = p.geometry || {}, sz = g.size_mm || {};
    for (const d of p.dimensions || []) {
      if (d.provenance !== "USER_PROVIDED" || d.value == null) continue;
      let hit = [];
      if (d.unit === "mm") {
        hit = AXES.filter((a) => sz[a] > 0
          && Math.abs(sz[a] - d.value) <= Math.max(1, sz[a] * 0.01));
      }
      const axes = hit.length ? hit : AXES;
      const rec = out.get(p.part_id) || { axes: new Set(), why: [] };
      for (const a of axes) rec.axes.add(a);
      rec.why.push(`${d.name}=${d.value}${d.unit} → ${axes.join("·")}`
        + (hit.length ? "" : " (축 불명 · 전체 고정)"));
      out.set(p.part_id, rec);
    }
  }
  return out;
}

/* --------------------------------------------------------------- knobs

   A knob is a scalar with a base value, a range and a step. It never writes to
   the specification itself: materialise() rebuilds the whole file from the
   pristine base and the current vector, so two knobs that touch the same array
   — an outline's x and its y both scale the same ARC radius — cannot corrupt
   each other by running in the wrong order. */

const isRod = (g) => {
  const w = g?.size_mm?.w || 0, d = g?.size_mm?.d || 0;
  return w > 0 && d > 0 && Math.max(w, d) / Math.min(w, d) >= 3;
};

/* Parts placed on one circle are one circle. Motors, hubs, discs and guards in
   the samples all carry the same repeat.radius_mm, and moving the motor ring
   without the propeller ring detaches the propellers from their motors by an
   amount too small for the connectivity check to notice and large enough to be
   wrong. Equal radius at the start means one knob from then on.

   Rods are excluded: spec-cad's normalizeRadialStruts derives an arm's radius
   from the ring it has to reach, so a knob there would be overwritten between
   being set and being built. */
function repeatGroups(spec, field, pattern) {
  const groups = new Map();
  for (const p of spec.parts || []) {
    const rep = p.geometry?.repeat;
    if (!rep || !(rep.count > 1) || rep.pattern !== pattern) continue;
    if (!(rep[field] > 0)) continue;
    if (pattern === "CIRCULAR" && isRod(p.geometry)) continue;
    const key = Math.round(rep[field]);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(p.part_id);
  }
  return groups;
}

function makeKnobs(spec, opts) {
  const frozen = frozenAxes(spec);
  const knobs = [];

  /* Biggest levers first: a part's own volume times how many copies of it
     there are is a cheap stand-in for how much of the silhouette it owns, and
     the ordering only has to be roughly right. */
  const bulk = (p) => {
    const s = p.geometry?.size_mm || {};
    return (s.w || 0) * (s.h || 0) * (s.d || 0) * Math.max(1, p.geometry?.repeat?.count || 1);
  };
  const ordered = [...(spec.parts || [])].sort((a, b) => bulk(b) - bulk(a));

  for (const p of ordered) {
    const g = p.geometry || {};
    const sz = g.size_mm || {};
    const fr = frozen.get(p.part_id)?.axes || new Set();
    const span = Math.max(sz.w || 0, sz.h || 0, sz.d || 0);

    for (const a of AXES) {
      if (fr.has(a)) continue;
      if (!(sz[a] > 0)) continue;
      /* An aerofoil's thickness IS chord × thickness_pct and a lathe's two
         horizontal extents ARE the same radius. Those axes are not independent
         inputs, so they get no knob of their own — they follow the axis that
         drives them, inside materialise(). */
      if (a === "h" && g.airfoil?.thickness_pct > 0) continue;
      if (a === "d" && g.builder === "REVOLVE") continue;
      knobs.push({ id: `${p.part_id}.size.${a}`, part: p.part_id, kind: "size", axis: a,
        v: 1, lo: 1 / opts.scale, hi: opts.scale, step: 0.08, floor: 0.004,
        show: (v) => `size_mm.${a} ${r1(sz[a])} → ${r1(sz[a] * v)}` });
    }

    /* A part may move by about its own size. Further than that is not a
       refinement of where it sits, it is a claim that the specification put it
       on the wrong component — which is a question for the writer, not for a
       silhouette. */
    const reach = Math.max(10, span * 0.6);
    for (const a of ["x", "y", "z"]) {
      if (g.center_mm?.[a] == null) continue;
      /* A part written at x = 0 was put on the centreline on purpose — these
         airframes are laterally symmetric and everything off it is a
         MIRROR_PAIR. The reference is a reconstruction and is not perfectly
         symmetric, so a free x would drift a millimetre or two into that
         asymmetry and read as a finding. Sliding the fuselage sideways is a
         modelling decision, not a dimensional refinement. */
      if (a === "x" && g.center_mm.x === 0) continue;
      knobs.push({ id: `${p.part_id}.center.${a}`, part: p.part_id, kind: "center", axis: a,
        v: 0, lo: -reach, hi: reach, step: Math.max(2, span * 0.06), floor: 0.3,
        show: (v) => `center_mm.${a} ${r1(g.center_mm[a])} → ${r1(g.center_mm[a] + v)}` });
    }

    if ((g.loft_sections || []).length >= 2) {
      knobs.push({ id: `${p.part_id}.loft.fill`, part: p.part_id, kind: "fill",
        v: 0, lo: -0.25, hi: 0.25, step: 0.06, floor: 0.01,
        show: (v) => `loft fill ${v >= 0 ? "+" : ""}${v.toFixed(2)}` });
    }

    /* Only where the author already said the part tilts. Turning rotation on
       everywhere is a flag: a tilt is a statement about the design, not a
       fitting knob, and a point of IoU won by leaning eighteen parts the
       author drew upright is not a trade this tool makes on its own. (A
       rotated part is still measured — js/mesh-loft.js refineFromMesh reads
       it in its own frame — so measurability is no longer the reason.) */
    const authored = g.rotation_deg && ["x", "y", "z"].some((a) => g.rotation_deg[a]);
    if (authored || opts.rotateAll) {
      for (const a of ["x", "y", "z"]) {
        const base = g.rotation_deg?.[a] || 0;
        /* The range is on the ADJUSTMENT, not on the resulting angle. Bounding
           the angle would drag an authored 15° leg splay down to 12 just
           because 12 was the number chosen for parts that start at zero — the
           search would be overruling the author instead of refining them. The
           validator's own ±45 is the outer wall. */
        knobs.push({ id: `${p.part_id}.rot.${a}`, part: p.part_id, kind: "rot", axis: a,
          v: 0, lo: Math.max(-12, -45 - base), hi: Math.min(12, 45 - base), step: 4, floor: 0.4,
          show: (v) => `rotation_deg.${a} ${r1(base)} → ${r1(base + v)}` });
      }
    }
  }

  for (const [field, pattern, label] of [
    ["radius_mm", "CIRCULAR", "링 반경"], ["spacing_mm", "MIRROR_PAIR", "좌우 간격"],
  ]) {
    for (const [base, ids] of repeatGroups(spec, field, pattern)) {
      /* A ring whose parts are frozen by a user dimension is frozen too — the
         radius is what puts the wingspan where it is. */
      if (ids.some((id) => (frozen.get(id)?.axes.size || 0) > 0)) continue;
      knobs.push({ id: `ring${base}.${field}`, parts: ids, kind: "repeat", field,
        v: 1, lo: 1 / opts.scale, hi: opts.scale, step: 0.08, floor: 0.004,
        show: (v) => `${label} ${base} → ${r1(base * v)} (${ids.length}파트)` });
    }
  }

  return { knobs, frozen };
}

/* ---------------------------------------------------------- materialise

   One pure function from (pristine spec, parameter vector) to a specification.
   Every derived field is recomputed from the base rather than nudged, so a
   knob that is set and then set back leaves the file byte-identical. */

/* Which coordinate of an authored outline lands on which world axis. The
   outline is [x, y] in the plane the spec names, and this is the same mapping
   validateSpec uses to decide whether size_mm and the profile agree — the
   reason the profile has to be scaled at all is that leaving it behind turns
   every size edit into a PROFILE_SIZE_MISMATCH. */
function profileAxes(g) {
  if (g.builder === "REVOLVE") return ["w", "h"];    // x is a radius, y the height
  if (g.plane === "TOP") return ["w", "d"];
  if (g.plane === "SIDE") return ["d", "h"];
  return ["w", "h"];
}

/* A loft's rings are (w_mm, h_mm) in the part's local frame, and which world
   axes those become depends on which axis the stack runs along — the same
   loftAxis the builder calls, so the two cannot disagree. */
function loftAxes(la) {
  return la === 0 ? ["h", "d"] : la === 1 ? ["w", "d"] : ["w", "h"];
}

function scaleProfile(segs, fx, fy) {
  if (!Array.isArray(segs)) return segs;
  const pt = (p) => (Array.isArray(p) ? [r1(p[0] * fx), r1(p[1] * fy)] : p);
  /* The radius has to grow at least as fast as the chord it spans or an arc
     that was legal becomes ARC_RADIUS_TOO_SMALL; the larger of the two factors
     is the smallest one that is always safe. */
  const fr = Math.max(fx, fy);
  return segs.map((s) => ({
    ...s,
    start: pt(s.start), end: pt(s.end),
    control1: pt(s.control1), control2: pt(s.control2),
    radius: s.radius > 0 ? r1(s.radius * fr) : s.radius,
  }));
}

function materialize(base, theta) {
  const spec = clone(base);
  const byId = new Map((spec.parts || []).map((p) => [p.part_id, p]));
  const baseById = new Map((base.parts || []).map((p) => [p.part_id, p]));

  // size factors per part, gathered before anything is written
  const S = new Map();
  const get = (id) => {
    if (!S.has(id)) S.set(id, { w: 1, h: 1, d: 1 });
    return S.get(id);
  };
  for (const [key, v] of Object.entries(theta)) {
    const m = /^(.+)\.size\.([whd])$/.exec(key);
    if (m) get(m[1])[m[2]] = v;
  }

  for (const [id, f] of S) {
    const p = byId.get(id), bp = baseById.get(id);
    if (!p) continue;
    const g = p.geometry, bg = bp.geometry;
    /* The two dependent axes, restated here rather than in the knob list, so
       the coupling holds even when a vector is loaded from elsewhere. */
    if (bg.airfoil?.thickness_pct > 0) f.h = f.d;
    if (bg.builder === "REVOLVE") f.d = f.w;
    for (const a of AXES) if (bg.size_mm?.[a] > 0) g.size_mm[a] = r1(bg.size_mm[a] * f[a]);

    if ((bg.outer_profile || []).length || (bg.inner_profile || []).length) {
      const [ax, ay] = profileAxes(bg);
      g.outer_profile = scaleProfile(bg.outer_profile, f[ax], f[ay]);
      g.inner_profile = scaleProfile(bg.inner_profile, f[ax], f[ay]);
    }
    if ((bg.loft_sections || []).length >= 2) {
      const [aw, ah] = loftAxes(loftAxis(bg.size_mm || {}));
      g.loft_sections = bg.loft_sections.map((s) => ({
        ...s, w_mm: r1((s.w_mm ?? s.w) * f[aw]), h_mm: r1((s.h_mm ?? s.h) * f[ah]),
      }));
    }
  }

  for (const [key, v] of Object.entries(theta)) {
    let m = /^(.+)\.center\.([xyz])$/.exec(key);
    if (m) {
      const p = byId.get(m[1]), bp = baseById.get(m[1]);
      if (p) p.geometry.center_mm[m[2]] = r1((bp.geometry.center_mm[m[2]] || 0) + v);
      continue;
    }
    m = /^(.+)\.rot\.([xyz])$/.exec(key);
    if (m) {
      const p = byId.get(m[1]), bp = baseById.get(m[1]);
      /* A knob left at zero on a part that never declared a rotation writes
         nothing. Otherwise --rotate-all would stamp {x:0,y:0,z:0} onto every
         part in the file: harmless to the build, which treats all-zero as
         absent, but it turns the diff into a wall of noise and hides the one
         part that actually tilted. */
      if (p && (v !== 0 || bp.geometry.rotation_deg)) {
        const b = bp.geometry.rotation_deg || { x: 0, y: 0, z: 0 };
        p.geometry.rotation_deg = { ...(p.geometry.rotation_deg || b), [m[2]]: r1((b[m[2]] || 0) + v) };
      }
      continue;
    }
    m = /^(.+)\.loft\.fill$/.exec(key);
    if (m) {
      const p = byId.get(m[1]), bp = baseById.get(m[1]);
      if (p && (bp.geometry.loft_sections || []).length) {
        p.geometry.loft_sections = p.geometry.loft_sections.map((s, i) => ({
          ...s, fill: +clamp((bp.geometry.loft_sections[i].fill ?? 0.85) + v, 0.55, 1).toFixed(3),
        }));
      }
    }
  }

  for (const [key, v] of Object.entries(theta)) {
    const m = /^ring(-?\d+)\.(\w+)$/.exec(key);
    if (!m) continue;
    for (const p of spec.parts || []) {
      const bp = baseById.get(p.part_id);
      const bv = bp?.geometry?.repeat?.[m[2]];
      if (!(bv > 0) || Math.round(bv) !== +m[1]) continue;
      if (m[2] === "radius_mm" && isRod(bp.geometry)) continue;
      p.geometry.repeat[m[2]] = r1(bv * v);
    }
  }

  return spec;
}

/* ------------------------------------------------------------- objective */

function iou(a, b) {
  let inter = 0, uni = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] | b[i]) uni++;
    if (a[i] & b[i]) inter++;
  }
  return uni ? inter / uni : 0;
}

function compile(spec) {
  const { root } = buildFromSpec(spec, {});
  const model = positionsFromObject3D(root);
  return { root, model };
}

function meanIou(model, ref, res) {
  const cad = masksFromGeometry(model, res);
  let s = 0;
  for (const v of VIEWS) s += iou(cad[v.key], ref[v.key]);
  return { mean: s / VIEWS.length, cad };
}

/* ------------------------------------------------------------ constraints

   Three layers, cheapest first, because most rejections come from the first.

   1. The loft axis. loftAxis picks the stacking direction from which two
      extents are closest, so a size edit can flip a fuselage onto its side —
      a different part, not a refined one, and the sections would then be read
      against axes they were never measured on.
   2. validateSpec, by identity rather than by count. The bundled samples
      already carry complaints (the v24 measurement pass rewrote size_mm
      without touching the outlines), and a run that had to fix those first
      would never start; a run allowed to trade one for another would be
      laundering them.
   3. The design checks, which is where rotor overlap, assembly connectivity,
      tipover and the fixed-wing volume coefficients live. A check that was
      passing or undecided and is now failing rejects the candidate.
   4. The two checks that publish a number, compared as numbers. A verdict
      cannot express "still failing, but worse": the first version of this
      guard happily took sar-vtol from three detached groups to five and
      shrank its rotor gap from 47mm to 12mm, because both rows were already
      failing or undecided and stayed there. Assembly connectivity and rotor
      overlap are two of the three constraints this tool was asked to hold, so
      they are held on magnitude and not on the flag. */
function makeGuard(baseSpec, baseRoot, opts) {
  const key = (e) => `${e.error_code}@${e.field_path}`;
  const baseErr = new Set(validateSpec(baseSpec, {}).map(key));
  const baseRows = createDroneSim({ root: baseRoot, spec: baseSpec }).checks(opts.checkOpts);
  const baseChecks = new Map(baseRows.map((c) => [c.id, c.ok]));
  const baseN = new Map(baseRows.filter((c) => Number.isFinite(c.n))
    .map((c) => [c.id, { n: c.n, lower: !!c.lowerIsBetter }]));
  const baseLoft = new Map((baseSpec.parts || [])
    .filter((p) => p.geometry?.builder === "LOFT")
    .map((p) => [p.part_id, loftAxis(p.geometry.size_mm || {})]));

  return (spec, root) => {
    for (const p of spec.parts || []) {
      if (!baseLoft.has(p.part_id)) continue;
      if (loftAxis(p.geometry.size_mm || {}) !== baseLoft.get(p.part_id)) {
        return `로프트 축 뒤집힘 (${p.part_id})`;
      }
    }
    for (const e of validateSpec(spec, {})) {
      if (!baseErr.has(key(e))) return `검증 ${e.error_code} (${e.field_path})`;
    }
    for (const c of createDroneSim({ root, spec }).checks(opts.checkOpts)) {
      if (c.ok === false && baseChecks.get(c.id) !== false) return `설계검사 ${c.id}`;
      const b = baseN.get(c.id);
      /* A hair of tolerance so re-running on an unchanged file cannot reject
         itself on the last bit of a float. */
      if (b && Number.isFinite(c.n)
        && (b.lower ? c.n > b.n + 1e-9 : c.n < b.n - 1e-9)) return `설계검사 악화 ${c.id}`;
    }
    return null;
  };
}

/* -------------------------------------------------------------- reference */

const MESH_DIR = path("docs/assets/meshes");

function referenceMasks(id, opts) {
  /* A caller may hand the masks straight in. That is how the self-fit test
     works — the reference is the specification's own compiled silhouette, with
     no file and no resampling in between, and the correct answer is that
     nothing moves. Going through PNG would have measured the resampler
     instead. */
  if (opts.refMasks) return opts.refMasks;
  if (opts.ref === "mesh") {
    const index = JSON.parse(readFileSync(`${MESH_DIR}/index.json`, "utf8"));
    if (!index[id]) throw new Error("1단계 메시가 등록되어 있지 않습니다");
    const mesh = positionsFromGlb(readFileSync(`${MESH_DIR}/${index[id].file}`));
    if (!mesh) throw new Error("메시를 읽지 못했습니다");
    return masksFromGeometry(mesh, opts.res);
  }
  return masksFromImages(viewFiles(opts.views, id), opts.res, false);
}

/* ---------------------------------------------------------------- descent */

/* Below this an accepted step is the rasteriser's rounding, not a better fit;
   accepting it would let the specification drift for nothing. */
const GAIN = 1e-4;

function fit(id, opts, log) {
  const specPath = `${opts.specs}/${id}.json`;
  const base = JSON.parse(readFileSync(specPath, "utf8"));

  const { root: baseRoot, model: baseModel } = compile(base);
  if (!baseModel) throw new Error("컴파일된 형상이 비어 있습니다");

  /* Frozen before the first step and never revisited. */
  const rawRef = referenceMasks(id, opts);
  const aligned = alignYaw(masksFromGeometry(baseModel, opts.res), rawRef);
  const ref = aligned.masks;

  const guard = makeGuard(base, baseRoot, opts);
  const { knobs, frozen } = makeKnobs(base, opts);
  const theta = Object.fromEntries(knobs.map((k) => [k.id, k.v]));

  const evalTheta = (t) => {
    const spec = materialize(base, t);
    let built;
    try { built = compile(spec); } catch (e) { return { bad: `컴파일 실패: ${e.message}` }; }
    if (!built.model) return { bad: "형상이 비었습니다" };
    const why = guard(spec, built.root);
    if (why) return { bad: why };
    return { iou: meanIou(built.model, ref, opts.res).mean, spec };
  };

  const start = evalTheta(theta);
  if (start.bad) throw new Error(`기준 사양서가 자기 제약을 통과하지 못합니다: ${start.bad}`);
  let best = start.iou;

  log(`${id}: 노브 ${knobs.length}개 · 참조 ${opts.ref} · 격자 ${opts.res} · `
    + `회전 정렬 ${aligned.k * 90}° 고정 · 시작 IoU ${(best * 100).toFixed(2)}%`);
  for (const [pid, rec] of frozen) {
    log(`  고정 (USER_PROVIDED) ${pid}: ${rec.why.join(", ")}`);
  }

  const rejects = new Map();
  const moves = [];
  const alive = new Set(knobs.map((k) => k.id));
  let dead = [];
  const history = [best];
  let evals = 1;
  for (const k of knobs) k.step0 = k.step;

  /* Halving a knob's step on every rejection retires it long before the search
     as a whole is finished, because the axis it could not improve alone often
     becomes improvable once a neighbouring part has moved. Left as it was, a
     second invocation of this tool on its own output found another 0.5~3.4pp
     — which means one run was not a fixed point, and a fixed point is the only
     honest place to stop. So a pass that stops making progress does not end
     the run: every knob gets its opening step back and the search starts over
     from where it is. Two consecutive fruitless passes end it. */
  let restarted = false, restarts = 0;

  for (let round = 1; round <= opts.rounds; round++) {
    const before = best;
    for (const k of knobs) {
      if (!alive.has(k.id)) continue;
      let improved = false, probes = 0, flat = 0;
      for (const dir of [1, -1]) {
        const cand = clamp(theta[k.id] + dir * k.step, k.lo, k.hi);
        if (cand === theta[k.id]) continue;
        const t = { ...theta, [k.id]: cand };
        const r = evalTheta(t);
        evals++;
        if (r.bad) {
          const reason = r.bad.replace(/\(.*\)/, "").trim();
          rejects.set(reason, (rejects.get(reason) || 0) + 1);
          continue;
        }
        probes++;
        if (r.iou > best + GAIN) {
          moves.push({ round, id: k.id, from: theta[k.id], to: cand,
            gain: r.iou - best, text: k.show(cand) });
          theta[k.id] = cand;
          best = r.iou;
          improved = true;
          break;                       // take the first improvement, re-probe next round
        }
        if (Math.abs(r.iou - best) < 1e-12) flat++;
      }
      /* Both directions leaving the score identical to the last bit means the
         knob is not visible from outside: an avionics board inside the shell,
         or a loft's cross-axis that only the sections actually control. Not
         "no effect" — no effect ON THE SILHOUETTE, which is the only thing
         this objective can see. Dropping it stops the rest of the run being
         spent re-asking a question that has already been answered. */
      if (probes === 2 && flat === 2) { alive.delete(k.id); dead.push(k.id); }
      k.step = improved ? Math.min(k.step * 1.6, (k.hi - k.lo) / 2) : k.step * 0.5;
      if (k.step < k.floor) alive.delete(k.id);
    }
    history.push(best);
    const stuck = best - before < GAIN || !alive.size;
    log(`  라운드 ${String(round).padStart(2)} · IoU ${(best * 100).toFixed(2)}%`
      + ` (+${((best - before) * 100).toFixed(2)}pp) · 살아있는 노브 ${alive.size}/${knobs.length}`
      + ` · 평가 ${evals}`);
    if (!stuck) { restarted = false; continue; }
    if (restarted) { log("  다시 열어도 나아지지 않아 멈춥니다."); break; }
    for (const k of knobs) { k.step = k.step0; alive.add(k.id); }
    dead = [];
    restarted = true;
    restarts++;
    log(`  스텝을 되돌리고 노브를 전부 다시 엽니다 (${restarts}회).`);
  }

  /* A knob that finished pressed against its limit is the most useful thing
     this run produces. It means the search wanted to keep going and the range
     stopped it, and the range is what separates "this dimension was wrong" from
     "this is a different part". Read it as a question for the specification:
     either the writer was off by more than the range allows, or the reference
     has volume there that no part in the file accounts for and the nearest
     part is being stretched to cover it. Resizing cannot answer the second. */
  const pinned = knobs
    .filter((k) => Math.abs(theta[k.id] - k.lo) < 1e-9 || Math.abs(theta[k.id] - k.hi) < 1e-9)
    .map((k) => ({ id: k.id, at: theta[k.id] <= k.lo ? "하한" : "상한", text: k.show(theta[k.id]) }));

  const finalSpec = materialize(base, theta);

  /* What the fit did to the engineering numbers, printed whether or not any
     verdict moved. The guard's job is to refuse a change that breaks a check;
     it is not a claim that everything else stayed where it was.

     Why thrust margin and disk loading are reported rather than guarded, when
     connectivity and rotor overlap are guarded: the guarded two are geometric
     facts about the CAD — parts touch or they do not, discs overlap or they do
     not — and no reference can make a detached assembly correct. Thrust margin
     is derived from a mass estimated from part volumes, so when the fit finds
     the specification's parts were too small, the estimate rising is the model
     becoming more honest about the aircraft, not the aircraft getting worse.
     Freezing it would forbid the fit from ever admitting an undersized spec.
     The numbers still have to be looked at, so here they are. */
  const rowOf = (spec, root) =>
    new Map(createDroneSim({ root, spec }).checks(opts.checkOpts).map((c) => [c.id, c]));
  const rowsA = rowOf(base, baseRoot);
  const rowsB = rowOf(finalSpec, compile(finalSpec).root);
  const drift = [];
  for (const [cid, cb] of rowsB) {
    const ca = rowsA.get(cid);
    if (ca && ca.value !== cb.value) drift.push({ id: cid, label: cb.label, from: ca.value, to: cb.value });
  }

  return { id, base, spec: finalSpec, before: start.iou, after: best, history,
    knobs: knobs.length, dead, moves, evals, yaw: aligned.k * 90, pinned, drift,
    rejects: [...rejects.entries()].sort((a, b) => b[1] - a[1]),
    frozen: [...frozen.entries()].map(([pid, r]) => `${pid}: ${r.why.join(", ")}`),
    specPath };
}

/* ------------------------------------------------------------------- main */

function main() {
  const TAKES_VALUE = new Set(["rounds", "ref", "res", "views", "specs", "scale"]);
  const opt = {};
  const ids = [];
  for (let i = 0, a = process.argv.slice(2); i < a.length; i++) {
    if (!a[i].startsWith("--")) { ids.push(a[i]); continue; }
    const name = a[i].slice(2);
    opt[name] = TAKES_VALUE.has(name) ? a[++i] : true;
  }
  if (!ids.length) { console.error("사용법: node tools/fit-spec.mjs <id...> [--rounds N] [--dry]"); return 2; }

  const options = {
    ref: opt.ref || "mesh",
    res: Math.max(16, parseInt(opt.res, 10) || 128),
    /* A budget, not a target: the run stops when reopening every knob stops
       helping, and typically needs a couple of passes past the first stall. */
    rounds: Math.max(1, parseInt(opt.rounds, 10) || 40),
    views: opt.views || path("docs/assets/views"),
    specs: opt.specs || path("docs/specs"),
    rotateAll: !!opt["rotate-all"],
    /* How far a dimension may travel, as a factor either way. At 1.6 the
       search can say "this was out by half again" — which is already a strong
       claim about a specification — but not "this part is twice the size the
       writer thought", because past that the part has stopped being the part
       and started being whatever fills the reference's outline. */
    scale: Math.max(1.05, Math.min(4, parseFloat(opt.scale) || 1.6)),
    dry: !!opt.dry,
    /* The battery figure only decides whether the endurance row can be
       computed; it is the same number tools/qa-samples.mjs uses so the two
       tools judge the same design. */
    checkOpts: { batteryWh: 220 },
  };
  if (options.ref !== "mesh" && options.ref !== "views") {
    console.error("--ref 는 mesh 또는 views 입니다");
    return 2;
  }

  const AS_JSON = !!opt.json;
  const lines = [];
  const log = (s) => { if (AS_JSON) lines.push(s); else console.log(s); };

  const results = [];
  let failures = 0;
  for (const id of ids) {
    try {
      const r = fit(id, options, log);
      results.push(r);
      for (const m of r.moves) log(`    ${m.id.padEnd(34)} ${m.text}  (+${(m.gain * 100).toFixed(2)}pp)`);
      if (r.rejects.length) {
        log(`  기각: ${r.rejects.map(([k, n]) => `${k} ${n}`).join(" · ")}`);
      }
      if (r.dead.length) log(`  실루엣에 보이지 않는 노브 ${r.dead.length}개는 도중에 내렸습니다 `
        + `(내부 부품·가려진 면 — 이 목적함수로는 판정할 수 없는 치수입니다).`);
      if (r.drift.length) {
        log(`  설계검사 값 변화 (판정은 하나도 나빠지지 않았습니다 — 값은 움직입니다):`);
        for (const d of r.drift) log(`    ${d.label.padEnd(20)} ${d.from}  →  ${d.to}`);
      }
      if (r.pinned.length) {
        log(`  한계에 걸린 노브 ${r.pinned.length}개 — 더 늘리거나 줄이고 싶어했다는 뜻입니다. `
          + `사양서가 그만큼 틀렸거나, 참조에 있는 부피를 담당할 파트가 사양서에 없습니다:`);
        for (const q of r.pinned) log(`    ${q.at} ${q.id.padEnd(30)} ${q.text}`);
      }
      if (!options.dry && r.after > r.before + GAIN) {
        writeFileSync(r.specPath, `${JSON.stringify(r.spec, null, 2)}\n`);
        log(`  ${r.specPath} 에 썼습니다.`);
      } else if (!options.dry) {
        log("  개선이 없어 파일을 그대로 두었습니다.");
      }
    } catch (e) {
      failures++;
      log(`${id}: ${e.message}`);
    }
  }

  if (AS_JSON) {
    console.log(JSON.stringify({
      ref: options.ref, grid: options.res, rounds: options.rounds, dry: options.dry,
      log: lines,
      samples: Object.fromEntries(results.map((r) => [r.id, {
        before: +r.before.toFixed(4), after: +r.after.toFixed(4),
        gain_pp: +((r.after - r.before) * 100).toFixed(2),
        yaw_deg: r.yaw, knobs: r.knobs, dead: r.dead.length, evals: r.evals,
        history: r.history.map((v) => +v.toFixed(4)),
        pinned: r.pinned.map((q) => `${q.at} ${q.id} · ${q.text}`),
        check_drift: r.drift.map((d) => ({ id: d.id, from: d.from, to: d.to })),
        frozen: r.frozen, rejects: Object.fromEntries(r.rejects),
        moves: r.moves.map((m) => ({ round: m.round, knob: m.id, change: m.text,
          gain_pp: +(m.gain * 100).toFixed(2) })),
      }])),
    }, null, 2));
  } else if (results.length) {
    console.log(`\n${"샘플".padEnd(16)}${"전".padStart(7)}${"후".padStart(8)}${"변화".padStart(9)}`
      + `${"노브".padStart(7)}${"채택".padStart(6)}${"평가".padStart(7)}`);
    console.log("─".repeat(60));
    for (const r of results) {
      console.log(r.id.padEnd(16)
        + `${(r.before * 100).toFixed(2)}%`.padStart(7)
        + `${(r.after * 100).toFixed(2)}%`.padStart(8)
        + `${r.after >= r.before ? "+" : ""}${((r.after - r.before) * 100).toFixed(2)}pp`.padStart(9)
        + String(r.knobs).padStart(7) + String(r.moves.length).padStart(6)
        + String(r.evals).padStart(7));
    }
    if (options.dry) console.log("\n--dry 모드: 파일을 쓰지 않았습니다.");
  }
  return failures ? 1 : 0;
}

// importable as a library; the CLI only runs when this file is the entry point
if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  process.exit(main());
}

export { fit, materialize, makeKnobs, frozenAxes, makeGuard, referenceMasks };
