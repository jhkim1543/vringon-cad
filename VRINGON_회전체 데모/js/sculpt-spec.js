/* ObjectSculptSpec → THREE.Group.
   사양 하나를 받아 부품 트리를 그대로 3D 로 세운다. 파트 분리의 근거가 여기서 나온다.
   Turns one spec into a 3D part tree. This is where part separation gets its meaning.

   사양 형식은 img2threejs (Apache-2.0) 의 ObjectSculptSpec 을 따른다. 그 프로젝트의 여덟 단계
   조각 파이프라인 전체가 아니라, 브라우저에서 조립하는 데 필요한 부분만 쓴다:
   componentTree · attachment(부모 소켓) · materials · sockets.
   무엇을 안 쓰는지는 화면에도 적는다. 다 하는 척하지 않는다.
   The spec follows the ObjectSculptSpec of img2threejs (Apache-2.0). Not its whole eight-pass
   sculpting pipeline, only the part a browser needs to assemble: componentTree, attachment
   (parent sockets), materials and sockets. What is left out is stated on screen rather than implied away.

   순수 모듈이다 (브라우저·Node 공용) / pure module, runs in both browser and Node. */
import * as THREE from "three";

export const SPEC_KIND = "img2threejs/ObjectSculptSpec";

/* 만들 수 있는 기본 도형 / primitives we can build */
export const PRIMITIVES = ["box", "plate", "cylinder", "cone", "sphere", "capsule", "torus", "tube"];

/* ---------------------------------------------------------------- 검사 / validation
   사양이 틀렸을 때 조용히 이상한 것을 만드는 대신 무엇이 틀렸는지 말한다.
   Rather than quietly building something odd, say what is wrong with the spec. */
/* parent 를 값 하나로 정리한다. 모델이 없음을 문자열 "null"·"none"·"" 로 쓰는 일이 실제로 있었다.
   Normalises parent: models really do write absence as the strings "null", "none" or "". */
export const parentOf = (c) => {
  const p = c?.parent;
  if (p === null || p === undefined) return null;
  const t = String(p).trim();
  return t === "" || t === "null" || t === "none" || t === "root" ? null : t;
};

export function validateSpec(spec) {
  const errors = [];
  if (!spec || typeof spec !== "object") return { ok: false, errors: ["사양이 객체가 아닙니다"] };
  const tree = spec.componentTree;
  if (!Array.isArray(tree) || !tree.length) errors.push("componentTree 가 비어 있습니다");
  const ids = new Set();
  for (const [i, c] of (tree || []).entries()) {
    const at = `componentTree[${i}]`;
    if (!c.id) errors.push(`${at}: id 가 없습니다`);
    else if (ids.has(c.id)) errors.push(`${at}: id "${c.id}" 가 중복입니다`);
    else ids.add(c.id);
    if (!PRIMITIVES.includes(c.primitive)) errors.push(`${at}: primitive "${c.primitive}" 는 만들 수 없습니다`);
    const d = c.dimensions || {};
    for (const k of ["width", "height", "depth"]) if (!(d[k] > 0)) errors.push(`${at}: dimensions.${k} 가 필요합니다`);
  }
  /* 부모는 자식보다 먼저 나와야 한다. 트리를 한 번만 훑어 세우기 때문이다.
     Parents must come before children: the tree is walked once, in order. */
  const seen = new Set();
  for (const c of tree || []) {
    const par = parentOf(c);
    if (par && !seen.has(par)) errors.push(`${c.id}: 부모 "${par}" 가 앞에 없습니다`);
    seen.add(c.id);
  }
  return { ok: !errors.length, errors };
}

/* ---------------------------------------------------------------- 재질 / materials */
function materialOf(spec, id) {
  const m = (spec.materials || []).find((x) => x.id === id) || {};
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(m.color || "#9AA6BF"),
    roughness: m.roughness ?? 0.55,
    metalness: m.metalness ?? 0.1,
    transparent: (m.opacity ?? 1) < 1,
    opacity: m.opacity ?? 1,
  });
}

/* ---------------------------------------------------------------- 기하 / geometry
   치수는 상대값이다(units: "relative"). 실제 크기는 사양의 scaleHint 로 마지막에 한 번 정한다.
   Dimensions are relative; the real size is applied once at the end from the spec scaleHint. */
function geometryOf(c, seg) {
  const d = c.dimensions, w = d.width, h = d.height, dp = d.depth;
  const r = Math.max(w, dp) / 2;
  switch (c.primitive) {
    case "box": return new THREE.BoxGeometry(w, h, dp);
    case "plate": return new THREE.BoxGeometry(w, Math.max(h, 0.004), dp);
    case "cylinder": return new THREE.CylinderGeometry((c.topScale ?? 1) * (w / 2), w / 2, h, seg);
    case "cone": return new THREE.ConeGeometry(w / 2, h, seg);
    case "sphere": return new THREE.SphereGeometry(r, seg, Math.max(8, Math.round(seg / 2)));
    case "capsule": return new THREE.CapsuleGeometry(w / 2, Math.max(0.001, h - w), 6, seg);
    case "torus": return new THREE.TorusGeometry(Math.max(0.001, w / 2 - (c.tubeRadius ?? h / 2)), c.tubeRadius ?? h / 2, 12, seg);
    /* tube: 두 점을 잇는 관. 팔·케이블·손잡이처럼 이어 붙는 부품에 쓴다
       A tube between two points, for arms, cables and handles that bridge parts. */
    case "tube": {
      const a = new THREE.Vector3(...(c.from || [0, 0, 0])), b = new THREE.Vector3(...(c.to || [0, h, 0]));
      const g = new THREE.CylinderGeometry(w / 2, w / 2, Math.max(1e-4, a.distanceTo(b)), seg);
      const dir = b.clone().sub(a).normalize();
      g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir));
      const mid = a.clone().add(b).multiplyScalar(0.5);
      g.translate(mid.x, mid.y, mid.z);
      return g;
    }
    default: return new THREE.BoxGeometry(w, h, dp);
  }
}

/* 부모의 소켓 / a socket on the parent */
const socketOf = (parentSpec, id) => (parentSpec?.sockets || []).find((s) => s.id === id) || null;

/* ---------------------------------------------------------------- 조립 / assemble
   componentTree 를 순서대로 훑어 Object3D 트리를 만든다. attachment.parentSocket 이 있으면
   그 소켓 자리에 놓고 embedDepth 만큼 파묻는다 — 부품이 떠 보이는 것을 막는 접합 규칙이다.
   Walks componentTree in order into an Object3D tree. With attachment.parentSocket the child is
   seated at that socket and sunk in by embedDepth, the joint rule that stops parts from floating apart. */
export function buildFromSpec(spec, opts = {}) {
  const v = validateSpec(spec);
  if (!v.ok) throw new Error(v.errors.join(" · "));
  const seg = opts.segments || 48;
  const root = new THREE.Group();
  root.name = spec.id || "sculpt";
  const nodes = new Map();      /* id → Object3D */
  const specs = new Map();      /* id → 사양 노드 / spec node */
  const parts = [];
  const notes = [];

  for (const c of spec.componentTree) {
    const mesh = new THREE.Mesh(geometryOf(c, seg), materialOf(spec, c.material));
    mesh.name = c.id;
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.userData.spec = { id: c.id, name: c.name || c.id, level: c.level || "macro", role: c.role || "", material: c.material || "" };

    const t = c.transform || {};
    const local = new THREE.Vector3(...(t.position || [0, 0, 0]));
    mesh.position.copy(local);
    if (t.rotation) mesh.rotation.set(...t.rotation.map((deg) => (deg * Math.PI) / 180));
    if (t.scale) mesh.scale.set(...t.scale);

    const par = parentOf(c);
    const parentNode = par ? nodes.get(par) : null;
    if (par && !parentNode) notes.push(`${c.id}: 부모 ${par} 를 찾지 못해 최상위에 두었습니다`);

    /* 자리 정하기 — 규칙 하나로 못박는다. 소켓과 위치를 둘 다 더하면 두 번 옮겨져 부품이 떠 버린다
       (실측: 의자 다리 넷이 좌판 바깥으로 밀려 나갔다).
         1) localStart 가 있으면 그 점이 소켓에 닿게 놓는다 (접합 계약대로)
         2) 없고 위치가 주어졌으면 그 위치를 그대로 쓴다 (소켓은 참고점일 뿐)
         3) 둘 다 없으면 소켓에서 법선 방향으로 제 몸 절반만큼 나가 앉는다
       Placement, pinned to one rule. Adding socket and position together moves a part twice and it
       floats away (seen: four chair legs pushed outside the seat).
         1) with localStart, seat that point on the socket, per the attachment contract
         2) without it, an explicit position wins and the socket is only a reference
         3) with neither, sit half the part's own extent out along the socket normal */
    const at = c.attachment;
    if (at?.parentSocket && parentNode) {
      const sock = socketOf(specs.get(par), at.parentSocket);
      if (!sock) notes.push(`${c.id}: 소켓 ${at.parentSocket} 이 부모에 없습니다`);
      else {
        const n = new THREE.Vector3(...(sock.normal || [0, 1, 0])).normalize();
        const p = new THREE.Vector3(...(sock.position || [0, 0, 0])).addScaledVector(n, -(at.embedDepth ?? 0));
        const hasLocal = local.lengthSq() > 1e-12;
        if (at.localStart) {
          mesh.position.copy(p).sub(new THREE.Vector3(...at.localStart));
        } else if (hasLocal) {
          mesh.position.copy(local);
        } else if (c.primitive !== "tube") {
          const d = c.dimensions;
          const half = new THREE.Vector3(Math.abs(n.x) * d.width, Math.abs(n.y) * d.height, Math.abs(n.z) * d.depth).multiplyScalar(0.5);
          mesh.position.copy(p).addScaledVector(n, half.length());
        } else mesh.position.copy(p);
      }
    }

    (parentNode || root).add(mesh);
    nodes.set(c.id, mesh); specs.set(c.id, c);
    parts.push({ id: c.id, name: c.name || c.id, level: c.level || "macro", role: c.role || "", object: mesh, parent: par });
  }

  /* 실제 크기로 한 번에 맞추고 바닥에 세운다 / scale once to the intended size, then stand it on the floor */
  root.updateMatrixWorld(true);
  const size = new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3());
  const want = spec.scaleHint?.longestSide_mm;
  if (want > 0) root.scale.setScalar(want / Math.max(size.x, size.y, size.z, 1e-6));
  root.updateMatrixWorld(true);
  root.position.y -= new THREE.Box3().setFromObject(root).min.y;
  root.updateMatrixWorld(true);

  let tris = 0;
  root.traverse((o) => { if (o.isMesh) tris += (o.geometry.index ? o.geometry.index.count : o.geometry.getAttribute("position").count) / 3; });
  const box = new THREE.Box3().setFromObject(root);
  return { root, parts, notes, stats: { parts: parts.length, triangles: Math.round(tris), size: box.getSize(new THREE.Vector3()) } };
}

/* 사양이 담지 않는 것 / what this spec deliberately does not carry.
   화면에 그대로 띄운다. 그림 한 장으로는 알 수 없는 것들이다.
   Shown on screen as is: these are the things one image cannot tell you. */
export const NOT_MODELLED = [
  "가려진 뒷면은 앞면에서 유추한 것입니다",
  "표면 무늬와 로고는 넣지 않습니다",
  "치수는 비율이며 실제 값이 아닙니다",
];
