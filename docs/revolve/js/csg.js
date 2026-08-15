/* VRINGON 회전체 — 최소 BSP CSG (Evan Wallace 의 csg.js 알고리즘, three.js 지오메트리용 재작성)
   회전체 몸통은 국부 밴드로 잘라 피처가 있는 밴드만 이 CSG 를 거친다. 밴드는 폴리곤이
   수백~수천 개라 BSP 로도 수십 ms 안에 끝난다. 전체 몸통(만 단위 폴리곤)을 한 번에
   넣지 말 것 — 그건 초 단위로 느려진다(shaft-cad.js 가 밴드를 자르는 이유). */

import * as THREE from "three";

const EPS = 1e-5;
const COPLANAR = 0, FRONT = 1, BACK = 2, SPANNING = 3;

class Vertex {
  constructor(pos, normal) { this.pos = pos; this.normal = normal; }
  clone() { return new Vertex(this.pos.clone(), this.normal.clone()); }
  flip() { this.normal.negate(); }
  interpolate(other, t) {
    return new Vertex(this.pos.clone().lerp(other.pos, t), this.normal.clone().lerp(other.normal, t).normalize());
  }
}
class Plane {
  constructor(normal, w) { this.normal = normal; this.w = w; }
  static fromPoints(a, b, c) {
    const n = new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a)).normalize();
    return new Plane(n, n.dot(a));
  }
  clone() { return new Plane(this.normal.clone(), this.w); }
  flip() { this.normal.negate(); this.w = -this.w; }
  splitPolygon(polygon, coplanarFront, coplanarBack, front, back) {
    let polygonType = 0;
    const types = [];
    for (const v of polygon.vertices) {
      const t = this.normal.dot(v.pos) - this.w;
      const type = t < -EPS ? BACK : t > EPS ? FRONT : COPLANAR;
      polygonType |= type;
      types.push(type);
    }
    switch (polygonType) {
      case COPLANAR:
        (this.normal.dot(polygon.plane.normal) > 0 ? coplanarFront : coplanarBack).push(polygon);
        break;
      case FRONT: front.push(polygon); break;
      case BACK: back.push(polygon); break;
      case SPANNING: {
        const f = [], b = [];
        const n = polygon.vertices.length;
        for (let i = 0; i < n; i++) {
          const j = (i + 1) % n;
          const ti = types[i], tj = types[j];
          const vi = polygon.vertices[i], vj = polygon.vertices[j];
          if (ti !== BACK) f.push(vi);
          if (ti !== FRONT) b.push(ti !== BACK ? vi.clone() : vi);
          if ((ti | tj) === SPANNING) {
            const t = (this.w - this.normal.dot(vi.pos)) / this.normal.dot(new THREE.Vector3().subVectors(vj.pos, vi.pos));
            const v = vi.interpolate(vj, t);
            f.push(v); b.push(v.clone());
          }
        }
        if (f.length >= 3) front.push(new Polygon(f, polygon.shared));
        if (b.length >= 3) back.push(new Polygon(b, polygon.shared));
        break;
      }
    }
  }
}
class Polygon {
  constructor(vertices, shared) {
    this.vertices = vertices; this.shared = shared;
    this.plane = Plane.fromPoints(vertices[0].pos, vertices[1].pos, vertices[2].pos);
  }
  clone() { return new Polygon(this.vertices.map((v) => v.clone()), this.shared); }
  flip() { this.vertices.reverse().forEach((v) => v.flip()); this.plane.flip(); }
}
class Node {
  constructor(polygons) { this.plane = null; this.front = null; this.back = null; this.polygons = []; if (polygons) this.build(polygons); }
  clone() {
    const n = new Node();
    n.plane = this.plane && this.plane.clone();
    n.front = this.front && this.front.clone();
    n.back = this.back && this.back.clone();
    n.polygons = this.polygons.map((p) => p.clone());
    return n;
  }
  invert() {
    for (const p of this.polygons) p.flip();
    if (this.plane) this.plane.flip();
    if (this.front) this.front.invert();
    if (this.back) this.back.invert();
    const t = this.front; this.front = this.back; this.back = t;
  }
  clipPolygons(polygons) {
    if (!this.plane) return polygons.slice();
    let front = [], back = [];
    for (const p of polygons) this.plane.splitPolygon(p, front, back, front, back);
    if (this.front) front = this.front.clipPolygons(front);
    back = this.back ? this.back.clipPolygons(back) : [];
    return front.concat(back);
  }
  clipTo(bsp) {
    this.polygons = bsp.clipPolygons(this.polygons);
    if (this.front) this.front.clipTo(bsp);
    if (this.back) this.back.clipTo(bsp);
  }
  allPolygons() {
    let out = this.polygons.slice();
    if (this.front) out = out.concat(this.front.allPolygons());
    if (this.back) out = out.concat(this.back.allPolygons());
    return out;
  }
  build(polygons) {
    if (!polygons.length) return;
    /* 분할 평면은 중간 폴리곤에서 고른다: 첫 폴리곤은 회전체 밴드에서 늘 같은 방향의
       면이라 트리가 한쪽으로 쏠린다 */
    if (!this.plane) this.plane = polygons[Math.floor(polygons.length / 2)].plane.clone();
    const front = [], back = [];
    for (const p of polygons) this.plane.splitPolygon(p, this.polygons, this.polygons, front, back);
    if (front.length) { if (!this.front) this.front = new Node(); this.front.build(front); }
    if (back.length) { if (!this.back) this.back = new Node(); this.back.build(back); }
  }
}

export class CSG {
  constructor(polygons = []) { this.polygons = polygons; }
  clone() { return new CSG(this.polygons.map((p) => p.clone())); }
  union(other) {
    const a = new Node(this.clone().polygons), b = new Node(other.clone().polygons);
    a.clipTo(b); b.clipTo(a); b.invert(); b.clipTo(a); b.invert(); a.build(b.allPolygons());
    return new CSG(a.allPolygons());
  }
  subtract(other) {
    const a = new Node(this.clone().polygons), b = new Node(other.clone().polygons);
    a.invert(); a.clipTo(b); b.clipTo(a); b.invert(); b.clipTo(a); b.invert(); a.build(b.allPolygons()); a.invert();
    return new CSG(a.allPolygons());
  }
  intersect(other) {
    const a = new Node(this.clone().polygons), b = new Node(other.clone().polygons);
    a.invert(); b.clipTo(a); b.invert(); a.clipTo(b); b.clipTo(a); a.build(b.allPolygons()); a.invert();
    return new CSG(a.allPolygons());
  }

  /* three.js BufferGeometry(+matrix) → CSG. 법선은 있으면 쓰고 없으면 면 법선 */
  static fromGeometry(geometry, matrix = null, shared = 0) {
    const g = geometry.index ? geometry.toNonIndexed() : geometry;
    const pos = g.getAttribute("position"), nrm = g.getAttribute("normal");
    const nm = matrix ? new THREE.Matrix3().getNormalMatrix(matrix) : null;
    const polys = [];
    for (let i = 0; i < pos.count; i += 3) {
      const vs = [];
      for (let k = 0; k < 3; k++) {
        const p = new THREE.Vector3().fromBufferAttribute(pos, i + k);
        if (matrix) p.applyMatrix4(matrix);
        let n = nrm ? new THREE.Vector3().fromBufferAttribute(nrm, i + k) : new THREE.Vector3();
        if (nm) n.applyMatrix3(nm).normalize();
        vs.push(new Vertex(p, n));
      }
      const a = vs[0].pos, b = vs[1].pos, c = vs[2].pos;
      const fn = new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a));
      if (fn.lengthSq() < 1e-14) continue;   /* 퇴화 삼각형 */
      if (!nrm) { fn.normalize(); vs.forEach((v) => v.normal.copy(fn)); }
      polys.push(new Polygon(vs, shared));
    }
    if (g !== geometry) g.dispose();
    return new CSG(polys);
  }
  /* CSG → 비인덱스 BufferGeometry (삼각형 팬 분할, 정점 법선 유지) */
  toGeometry() {
    const positions = [], normals = [], groups = [];
    let last = null, start = 0;
    for (const p of this.polygons) {
      const vs = p.vertices;
      if (last !== null && p.shared !== last) { groups.push([start, positions.length / 3 - start, last]); start = positions.length / 3; }
      last = p.shared;
      for (let i = 2; i < vs.length; i++) {
        for (const v of [vs[0], vs[i - 1], vs[i]]) {
          positions.push(v.pos.x, v.pos.y, v.pos.z);
          normals.push(v.normal.x, v.normal.y, v.normal.z);
        }
      }
    }
    if (last !== null) groups.push([start, positions.length / 3 - start, last]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
    for (const [s, c, m] of groups) geo.addGroup(s, c, m);
    return geo;
  }
}
