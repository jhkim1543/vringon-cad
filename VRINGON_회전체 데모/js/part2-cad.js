/* Part 2 — 뷰 하나에서 부품 하나를 만든다 (결정론).
   회전체는 Part 1 과 같은 회전(lathe) 을 쓰고, 판·윤곽 부품은 윤곽을 두께만큼 밀어낸다.
   좌표 약속: 부품은 원점 기준으로 가운데 정렬해서 만들고, 배치는 호출자가 한다. 단위는 mm. */

import * as THREE from "three";
import { latheXY } from "./shaft-cad.js";

export function makePartMaterials() {
  const base = { metalness: 0.86, roughness: 0.34, envMapIntensity: 1 };
  return {
    revolve: new THREE.MeshStandardMaterial({ ...base, color: 0xB9BDC5, name: "revolve" }),
    plate: new THREE.MeshStandardMaterial({ ...base, color: 0x9FB0C8, roughness: 0.42, name: "plate" }),
    extrude: new THREE.MeshStandardMaterial({ ...base, color: 0xC0B49C, roughness: 0.5, metalness: 0.6, name: "extrude" }),
    selected: new THREE.MeshStandardMaterial({ ...base, color: 0x7C89FF, roughness: 0.3, name: "selected" }),
  };
}

/* 표본을 그대로 돌리면 삼각형이 수만 개가 된다(내보내기 파일이 수십 MB). 꺾이는 곳만 남긴다. */
function simplifyProfile(pts, eps) {
  if (pts.length < 3) return pts.slice();
  const a = pts[0], b = pts[pts.length - 1];
  let idx = -1, dmax = 0;
  const dx = b.x - a.x, dr = b.r - a.r, len = Math.hypot(dx, dr) || 1;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i];
    const d = Math.abs(dr * p.x - dx * p.r + b.x * a.r - b.r * a.x) / len;
    if (d > dmax) { dmax = d; idx = i; }
  }
  if (dmax > eps) return simplifyProfile(pts.slice(0, idx + 1), eps).slice(0, -1).concat(simplifyProfile(pts.slice(idx), eps));
  return [a, b];
}

/* 회전체: 반경 표본 r(x) 를 축(X) 둘레로 돌린다 */
export function buildRevolvePart(rMm, lengthMm, { radial = 96, material, tol = 0.004 } = {}) {
  const n = rMm.length;
  let pts = [];
  for (let i = 0; i < n; i++) pts.push({ x: ((i + 0.5) / n) * lengthMm, r: Math.max(0.01, rMm[i]) });
  pts = simplifyProfile(pts, Math.max(0.05, lengthMm * tol));
  pts = [{ x: 0, r: 0 }, ...pts, { x: lengthMm, r: 0 }];
  const geo = latheXY(pts, radial, 28);
  geo.computeBoundingBox();
  const c = geo.boundingBox.getCenter(new THREE.Vector3());
  geo.translate(-c.x, -c.y, -c.z);
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

/* 판·윤곽: 닫힌 윤곽(+구멍)을 두께만큼 밀어낸다. 도면 좌표(y 아래로 증가)를 3D 로 뒤집는다 */
export function buildExtrudePart(outerMm, holesMm, thicknessMm, { material, bevel = 0 } = {}) {
  if (!outerMm || outerMm.length < 3) return null;
  const shape = new THREE.Shape(outerMm.map(([x, y]) => new THREE.Vector2(x, -y)));
  for (const h of holesMm || []) {
    if (!h || h.length < 3) continue;
    shape.holes.push(new THREE.Path(h.map(([x, y]) => new THREE.Vector2(x, -y))));
  }
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(0.2, thicknessMm), bevelEnabled: bevel > 0, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 2, curveSegments: 4,
  });
  geo.computeVertexNormals();
  geo.computeBoundingBox();
  const c = geo.boundingBox.getCenter(new THREE.Vector3());
  geo.translate(-c.x, -c.y, -c.z);
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

/* 부피(cm³): 삼각형 부호 부피 합 */
export function meshVolumeCm3(mesh) {
  const g = mesh.geometry, pos = g.attributes.position;
  const idx = g.index;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  let v = 0;
  const tri = (i0, i1, i2) => {
    a.fromBufferAttribute(pos, i0); b.fromBufferAttribute(pos, i1); c.fromBufferAttribute(pos, i2);
    v += a.dot(b.clone().cross(c)) / 6;
  };
  if (idx) for (let i = 0; i < idx.count; i += 3) tri(idx.getX(i), idx.getX(i + 1), idx.getX(i + 2));
  else for (let i = 0; i < pos.count; i += 3) tri(i, i + 1, i + 2);
  return Math.abs(v) / 1000;
}

/* 부품들을 겹치지 않게 X 방향으로 늘어놓는다. 조립 위치는 도면에서 정하지 않는다(뷰 사이 대응이 필요). */
export function arrangeRow(parts, gapMm = 12) {
  let x = 0;
  const boxes = parts.map((p) => new THREE.Box3().setFromObject(p));
  const total = boxes.reduce((a, b) => a + (b.max.x - b.min.x), 0) + gapMm * Math.max(0, parts.length - 1);
  x = -total / 2;
  parts.forEach((p, i) => {
    const bb = boxes[i], w = bb.max.x - bb.min.x, hy = bb.max.y - bb.min.y;
    p.position.x += x - bb.min.x;
    p.position.y += hy / 2 - bb.max.y;      /* 바닥을 0 에 맞춘다 */
    x += w + gapMm;
  });
}
