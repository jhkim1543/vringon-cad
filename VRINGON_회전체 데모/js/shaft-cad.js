/* VRINGON 회전체 — DSL → three.js 형상 (브라우저 실행기)
   ① shaft-profile 의 반단면 폴리곤을 축(X) 둘레로 회전(lathe)한다.
   ② 비축대칭 피처(키홈·평면·육각·횡구멍)가 있는 축 구간만 "밴드"로 잘라 국부 CSG 를 돌린다.
      몸통 전체를 CSG 에 넣지 않으므로 대화형 속도가 나온다.
   ③ 나사·널링은 관례대로 장식 표현(다른 재질 밴드) — 도면 호출과 STEP 이 규격을 싣는다.
   출력 단위 = mm. 축 = +X, 각도 0° = +Z(정면), 90° = +Y(위).

   서버 실행기(pipeline/executor.py, CadQuery)는 같은 프로파일로 진짜 B-rep 을 만든다. */

import * as THREE from "three";
import { CSG } from "./csg.js";
import { buildTopLine, buildInnerLine, collectEvents, totalLength, segmentDiameters, outerDiameterAt } from "./shaft-profile.js";

const DEG = Math.PI / 180;

/* ------------------------------------------------------------- 재질 */
export function makeMaterials(overrides = {}) {
  const base = { metalness: 0.9, roughness: 0.32, color: 0xB9BDC5, envMapIntensity: 1.0 };
  const m = {
    body: new THREE.MeshStandardMaterial({ ...base, name: "steel" }),
    thread: new THREE.MeshStandardMaterial({ ...base, color: 0x9DA1A9, roughness: 0.55, name: "thread" }),
    knurl: new THREE.MeshStandardMaterial({ ...base, color: 0xA3A7AF, roughness: 0.75, metalness: 0.75, name: "knurl" }),
    /* 단면 보기: 잘린 안쪽은 뒷면이 보인다. 뒷면 전용 재질로 절단면 색을 준다. */
    cut: new THREE.MeshStandardMaterial({ color: 0x8C5B4A, roughness: 0.85, metalness: 0.15, side: THREE.BackSide, name: "cut" }),
    ghost: new THREE.MeshBasicMaterial({ color: 0x7C89FF, wireframe: true, transparent: true, opacity: 0.55, depthTest: false, name: "ghost" }),
  };
  for (const [k, v] of Object.entries(overrides)) if (m[k]) m[k].setValues(v);
  return m;
}

/* ------------------------------------------------------- 커스텀 lathe
   (x, r) 폴리라인을 X 축 둘레로 회전. 꺾이는 각이 crease 이상이면 정점을 분리해
   모서리를 살리고, 그 아래면 법선을 평균해 원호·테이퍼를 매끈하게 한다.
   three.js LatheGeometry 는 단차 모서리까지 부드럽게 만들어 그늘이 번지므로 쓰지 않는다. */
export function latheXY(points, radial = 96, crease = 30, thetaStart = 0, thetaLength = 2 * Math.PI) {
  const pts = points.filter((p, i) => i === 0 || Math.abs(p.x - points[i - 1].x) > 1e-9 || Math.abs(p.r - points[i - 1].r) > 1e-9);
  const n = pts.length;
  if (n < 2) return new THREE.BufferGeometry();
  /* 각 선분의 2D 바깥 법선: 진행 (dx, dr) → (−dr, dx) */
  const segN = [];
  for (let i = 0; i < n - 1; i++) {
    const dx = pts[i + 1].x - pts[i].x, dr = pts[i + 1].r - pts[i].r;
    const l = Math.hypot(dx, dr) || 1;
    segN.push({ x: -dr / l, r: dx / l });
  }
  /* 각 점의 법선(들): 앞뒤 선분 각도차가 crease 미만이면 평균 하나, 아니면 둘 */
  const ringNormals = [];   /* per point: [{nx, nr}] one or two */
  for (let i = 0; i < n; i++) {
    const a = segN[i - 1], b = segN[i];
    if (!a) ringNormals.push([b]);
    else if (!b) ringNormals.push([a]);
    else {
      const dot = a.x * b.x + a.r * b.r;
      if (Math.acos(Math.max(-1, Math.min(1, dot))) < crease * DEG) {
        const nx = a.x + b.x, nr = a.r + b.r, l = Math.hypot(nx, nr) || 1;
        ringNormals.push([{ x: nx / l, r: nr / l }]);
      } else ringNormals.push([a, b]);
    }
  }
  const positions = [], normals = [], indices = [];
  const ringIndex = [];   /* per point: [startIndexOfRing for normal0, (normal1)] */
  const cols = radial + 1;
  for (let i = 0; i < n; i++) {
    const rows = [];
    for (const nrm of ringNormals[i]) {
      rows.push(positions.length / 3);
      for (let j = 0; j <= radial; j++) {
        const th = thetaStart + (thetaLength * j) / radial;
        const s = Math.sin(th), c = Math.cos(th);
        positions.push(pts[i].x, pts[i].r * s, pts[i].r * c);
        /* 3D 법선: 축성분 nx, 반경성분 nr 을 (s,c) 로 회전 */
        normals.push(nrm.x, nrm.r * s, nrm.r * c);
      }
    }
    ringIndex.push(rows);
  }
  for (let i = 0; i < n - 1; i++) {
    /* 선분 i 는 점 i 의 마지막 링과 점 i+1 의 첫 링을 잇는다 */
    const a = ringIndex[i][ringIndex[i].length - 1], b = ringIndex[i + 1][0];
    const degenA = pts[i].r < 1e-9, degenB = pts[i + 1].r < 1e-9;
    for (let j = 0; j < radial; j++) {
      const a0 = a + j, a1 = a + j + 1, b0 = b + j, b1 = b + j + 1;
      /* 바깥 법선이 (−dr, dx) 이므로 (x 증가·r 일정)일 때 +r 이 바깥. 그에 맞는 감김. */
      if (!degenA) indices.push(a0, b0, a1);
      if (!degenB) indices.push(a1, b0, b1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geo.setIndex(indices);
  /* 감김 방향 검증: 첫 유효 삼각형의 기하 법선이 정점 법선과 반대면 전부 뒤집는다 */
  const pa = new THREE.Vector3(), pb = new THREE.Vector3(), pc = new THREE.Vector3(), nn = new THREE.Vector3();
  const pos = geo.getAttribute("position"), nr = geo.getAttribute("normal");
  let flip = 0, checked = 0;
  for (let t = 0; t < indices.length && checked < 12; t += 3) {
    pa.fromBufferAttribute(pos, indices[t]); pb.fromBufferAttribute(pos, indices[t + 1]); pc.fromBufferAttribute(pos, indices[t + 2]);
    const fn = pb.clone().sub(pa).cross(pc.clone().sub(pa));
    if (fn.lengthSq() < 1e-10) continue;
    nn.fromBufferAttribute(nr, indices[t]).add(new THREE.Vector3().fromBufferAttribute(nr, indices[t + 1])).add(new THREE.Vector3().fromBufferAttribute(nr, indices[t + 2]));
    flip += fn.dot(nn) < 0 ? 1 : -1; checked++;
  }
  if (flip > 0) { for (let t = 0; t < indices.length; t += 3) { const s = indices[t + 1]; indices[t + 1] = indices[t + 2]; indices[t + 2] = s; } geo.setIndex(indices); }
  return geo;
}

/* 폴리라인을 x∈[xa,xb] 로 자른다 (경계에서 보간). 수직 구간은 경계 안이면 그대로 */
function clipPolyline(pts, xa, xb) {
  const out = [];
  const inRange = (x) => x >= xa - 1e-9 && x <= xb + 1e-9;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], q = pts[i + 1];
    if (inRange(p.x)) out.push({ x: Math.min(xb, Math.max(xa, p.x)), r: p.r });
    if (!q) break;
    /* 경계 교차 */
    for (const xc of [xa, xb]) {
      if ((p.x < xc && q.x > xc) || (p.x > xc && q.x < xc)) {
        const t = (xc - p.x) / (q.x - p.x);
        out.push({ x: xc, r: p.r + (q.r - p.r) * t, cut: true });
      }
    }
  }
  /* x 순 정렬 유지(원래 순서대로 들어왔으므로 교차점만 위치 보정) */
  out.sort((a, b) => a.x - b.x || 0);
  return out.filter((p, i) => i === 0 || Math.abs(p.x - out[i - 1].x) > 1e-9 || Math.abs(p.r - out[i - 1].r) > 1e-9);
}
/* clipPolyline 은 정렬을 위해 sort 를 쓰는데, 같은 x 의 수직 구간은 원래 순서를 지켜야
   한다(위→아래인지 아래→위인지). 위 sort 는 안정 정렬이므로 같은 x 끼리 순서가 보존된다. */

/* 밴드 [xa,xb] 의 닫힌 반단면 폴리곤 */
function bandPolygon(top, inner, xa, xb) {
  const t = clipPolyline(top, xa, xb);
  const b = clipPolyline(inner, xa, xb).reverse();
  const poly = [...t, ...b];
  /* 닫는다: 마지막(왼쪽 내형) → 처음(왼쪽 외형) 이 왼쪽 끝면. 이 변이 없으면 열린 셸이 되어
     부피도 CSG 도 틀린다(실측: 부피 2.3배). */
  const f = poly[0], l = poly[poly.length - 1];
  if (f && l && (Math.abs(f.x - l.x) > 1e-9 || Math.abs(f.r - l.r) > 1e-9)) poly.push({ x: f.x, r: f.r });
  return poly;
}

/* ------------------------------------------------------- 피처 커터 */
function dirOf(angleDeg) { const a = (angleDeg || 0) * DEG; return new THREE.Vector3(0, Math.sin(a), Math.cos(a)); }
function orientRadial(mesh, angleDeg) {
  /* 로컬 +Z(반경 방향)를 dir(angle) 로 */
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dirOf(angleDeg));
}
function stadiumShape(length, width) {
  const s = new THREE.Shape(), r = width / 2, hl = length / 2 - r;
  if (hl <= 0) { s.absarc(0, 0, r, 0, Math.PI * 2, false); return s; }
  s.moveTo(-hl, -r); s.lineTo(hl, -r); s.absarc(hl, 0, r, -Math.PI / 2, Math.PI / 2, false);
  s.lineTo(-hl, r); s.absarc(-hl, 0, r, Math.PI / 2, (3 * Math.PI) / 2, false);
  return s;
}
export function featureCutter(f, ctx) {
  /* ctx: {R (세그먼트 반경), xc (피처 중심 x), L} → {mesh(비회전 로컬), op:'subtract'|'intersect'} */
  const R = ctx.R;
  const margin = Math.max(1.5, R * 0.1);
  if (f.type === "keyway") {
    const depth = f.depth + (ctx.taperExtra || 0);
    const geo = new THREE.ExtrudeGeometry(stadiumShape(f.length, f.width), { depth: depth + margin, bevelEnabled: false, curveSegments: 12 });
    /* Extrude 는 z 0..depth 로 뽑힌다 → 바닥이 R−depth 에 오도록 */
    geo.translate(0, 0, R - depth);
    const mesh = new THREE.Mesh(geo);
    mesh.position.x = ctx.xc;
    orientRadial(mesh, f.angle);
    return { mesh, op: "subtract" };
  }
  if (f.type === "flat") {
    const cnt = f.count === 2 ? 2 : 1;
    const g = new THREE.BoxGeometry(f.length, R * 2 + 4, f.depth + margin);
    g.translate(0, 0, R - f.depth + (f.depth + margin) / 2);
    const group = new THREE.Group();
    for (let k = 0; k < cnt; k++) {
      const m = new THREE.Mesh(g.clone());
      m.position.x = ctx.xc;
      orientRadial(m, (f.angle || 0) + 180 * k);
      group.add(m);
    }
    return { mesh: group, op: "subtract" };
  }
  if (f.type === "hex") {
    const ac = f.across_flats / Math.cos(30 * DEG);   /* 대각 거리 */
    const g = new THREE.CylinderGeometry(ac / 2, ac / 2, ctx.length + 2, 6, 1, false);
    /* CylinderGeometry 축은 Y. 축을 X 로: Z 축 기준 −90° 회전. 꼭짓점 위상: 기본 첫 정점이 +Z(θ=0)에
       놓이므로 30° 돌려 면(플랫)이 +Z 를 보게 한다. */
    g.rotateY(30 * DEG);
    g.rotateZ(-90 * DEG);
    const mesh = new THREE.Mesh(g);
    mesh.position.x = ctx.xc;
    mesh.rotation.x = -(f.angle || 0) * DEG;   /* angle: +Z 기준, +Y 로 도는 방향 = X 축 기준 음의 회전 */
    return { mesh, op: "intersect" };
  }
  if (f.type === "hex_socket") {
    const ac = f.across_flats / Math.cos(30 * DEG);
    const g = new THREE.CylinderGeometry(ac / 2, ac / 2, f.depth + 2, 6, 1, false);
    g.rotateY(30 * DEG);
    g.rotateZ(-90 * DEG);   /* 축 → X */
    const mesh = new THREE.Mesh(g);
    /* 끝면에서 depth 만큼 안으로 (여유 1mm 는 바깥으로) */
    mesh.position.x = f.end === "left" ? f.depth / 2 - 1 : ctx.L - f.depth / 2 + 1;
    return { mesh, op: "subtract" };
  }
  if (f.type === "cross_hole") {
    const through = f.through !== false;
    const len = through ? R * 2 + 4 : (f.depth || R) + margin;
    const g = new THREE.CylinderGeometry(f.diameter / 2, f.diameter / 2, len, 48, 1, false);
    /* 원기둥 축 Y → 로컬 +Z(반경 방향) : X 축 기준 +90° */
    g.rotateX(Math.PI / 2);
    if (!through) g.translate(0, 0, R + margin - len / 2);
    const mesh = new THREE.Mesh(g);
    mesh.position.x = f.position;
    orientRadial(mesh, f.angle);
    return { mesh, op: "subtract" };
  }
  return null;
}

/* ------------------------------------------------------- 메인 */
export function buildShaft3D(dsl, opts = {}) {
  const radial = opts.radial || 96;
  const arcN = opts.arcN || 10;
  const mats = opts.materials || makeMaterials();
  const t0 = (typeof performance !== "undefined" ? performance : Date).now();
  const notes = [];
  const L = totalLength(dsl);
  const top = buildTopLine(dsl, arcN);
  const inner = buildInnerLine(dsl, arcN);
  notes.push(...top.notes);
  const ev = collectEvents(dsl);

  /* ---- 밴드 경계: 0, L, 나사·널링 구간, 비축대칭 피처 구간(여유 포함) */
  const cuts = new Set([0, L]);
  const bandsSpecial = [];   /* {xa, xb, kind:'thread'|'knurl'|'feature', payload} */
  for (const th of ev.threads) { cuts.add(th.x0); cuts.add(th.x1); bandsSpecial.push({ xa: th.x0, xb: th.x1, kind: "thread" }); }
  for (const f of ev.features) {
    if (f.type === "knurl") { cuts.add(f.x0); cuts.add(f.x1); bandsSpecial.push({ xa: f.x0, xb: f.x1, kind: "knurl" }); continue; }
    if (f.type === "center_hole") continue;
    const pad = f.type === "hex" || f.type === "hex_socket" ? 0 : Math.min(1.0, Math.max(0.2, (f.x1 - f.x0) * 0.05));
    const xa = Math.max(0, f.x0 - pad), xb = Math.min(L, f.x1 + pad);
    cuts.add(xa); cuts.add(xb);
    bandsSpecial.push({ xa, xb, kind: "feature", f });
  }
  const xs = [...cuts].sort((a, b) => a - b).filter((x, i, arr) => i === 0 || x - arr[i - 1] > 1e-6);

  const group = new THREE.Group();
  group.name = dsl.name || dsl.id || "shaft";
  group.userData.isPart = true;
  const ghosts = new THREE.Group(); ghosts.name = "ghosts"; ghosts.visible = false;
  const bodyGeos = [], threadGeos = [], knurlGeos = [];
  let csgMs = 0, csgCount = 0;
  const featureMeshes = [];

  for (let i = 0; i < xs.length - 1; i++) {
    const xa = xs[i], xb = xs[i + 1];
    const poly = bandPolygon(top.points, inner.points, xa, xb);
    if (poly.length < 3) continue;
    const feats = bandsSpecial.filter((b) => b.kind === "feature" && b.xa < xb - 1e-9 && b.xb > xa + 1e-9);
    const isThread = bandsSpecial.some((b) => b.kind === "thread" && b.xa <= xa + 1e-9 && b.xb >= xb - 1e-9);
    const isKnurl = bandsSpecial.some((b) => b.kind === "knurl" && b.xa <= xa + 1e-9 && b.xb >= xb - 1e-9);
    let geo = latheXY(poly, radial, 30);
    if (feats.length) {
      const c0 = (typeof performance !== "undefined" ? performance : Date).now();
      let csg = CSG.fromGeometry(geo, null, 0);
      for (const b of feats) {
        const f = b.f;
        const seg = f.segment >= 0 ? dsl.segments[f.segment] : null;
        const R = seg ? Math.min(...segmentDiameters(seg)) / 2 : outerDiameterAt(dsl, f.position) / 2;
        const xc = f.type === "cross_hole" ? f.position : (f.x0 + f.x1) / 2;
        const cut = featureCutter(f, { R, xc, length: f.x1 - f.x0, L });
        if (!cut) continue;
        cut.mesh.updateMatrixWorld(true);
        const parts = [];
        cut.mesh.traverse((o) => { if (o.isMesh) parts.push(o); });
        for (const m of parts) {
          const cg = CSG.fromGeometry(m.geometry, m.matrixWorld, 0);
          csg = cut.op === "intersect" ? csg.intersect(cg) : csg.subtract(cg);
          csgCount++;
        }
        /* 고스트(피처 강조용) */
        for (const m of parts) {
          const gm = new THREE.Mesh(m.geometry.clone(), mats.ghost);
          gm.applyMatrix4(m.matrixWorld); gm.userData.featureIndex = (dsl.features || []).indexOf(f); gm.name = `ghost:${f.type}`;
          ghosts.add(gm);
        }
      }
      geo.dispose();
      geo = csg.toGeometry();
      csgMs += (typeof performance !== "undefined" ? performance : Date).now() - c0;
      featureMeshes.push(...feats.map((b) => b.f.type));
    }
    if (isThread) threadGeos.push(geo); else if (isKnurl) knurlGeos.push(geo); else bodyGeos.push(geo);
  }

  const merge = (geos) => {
    if (!geos.length) return null;
    const nonIdx = geos.map((g) => (g.index ? g.toNonIndexed() : g));
    let count = 0; for (const g of nonIdx) count += g.getAttribute("position").count;
    const pos = new Float32Array(count * 3), nrm = new Float32Array(count * 3);
    let o = 0;
    for (const g of nonIdx) {
      pos.set(g.getAttribute("position").array, o * 3); nrm.set(g.getAttribute("normal").array, o * 3);
      o += g.getAttribute("position").count;
    }
    const out = new THREE.BufferGeometry();
    out.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    out.setAttribute("normal", new THREE.BufferAttribute(nrm, 3));
    return out;
  };
  const addMesh = (geo, mat, name) => {
    if (!geo) return null;
    const m = new THREE.Mesh(geo, mat); m.name = name; m.castShadow = m.receiveShadow = true;
    /* 절단면용 뒷면 메시(같은 지오메트리) */
    const back = new THREE.Mesh(geo, mats.cut); back.name = `${name}:cut`; back.renderOrder = -1;
    group.add(m, back);
    return m;
  };
  const body = addMesh(merge(bodyGeos), mats.body, "body");
  const thread = addMesh(merge(threadGeos), mats.thread, "thread");
  const knurl = addMesh(merge(knurlGeos), mats.knurl, "knurl");
  group.add(ghosts);
  /* 원점: 왼쪽 끝면이 x=0, 축이 X. 뷰어가 편하게 보도록 중심을 원점으로 옮기는 건 호출자가 한다. */
  let tris = 0;
  group.traverse((o) => { if (o.isMesh && !o.name.endsWith(":cut") && o.parent !== ghosts) tris += o.geometry.getAttribute("position").count / 3; });
  return {
    root: group, body, thread, knurl, ghosts, notes,
    stats: { tris: Math.round(tris), bands: xs.length - 1, csg: csgCount, csg_ms: Math.round(csgMs), ms: Math.round((typeof performance !== "undefined" ? performance : Date).now() - t0), features: featureMeshes },
    length: L, materials: mats,
  };
}

/* 단면 보기: 잘려 나가는 반쪽을 재질 클리핑으로 없앤다. planes=null 이면 해제 */
export function setSectionPlanes(built, planes) {
  const list = planes || [];
  for (const k of ["body", "thread", "knurl", "cut"]) built.materials[k].clippingPlanes = list;
  for (const k of ["body", "thread", "knurl", "cut"]) built.materials[k].needsUpdate = true;
}
