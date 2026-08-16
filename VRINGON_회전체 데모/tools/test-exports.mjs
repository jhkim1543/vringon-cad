/* 내보내기 왕복 검사 (Node): 골든 → 3D → STL/OBJ/FBX/USDA/STEP(면분할)/PLY 를 쓰고, 읽을 수 있는 것은 three.js 로더로 다시 읽어 삼각형 수를 대조한다.
   GLB/USDZ 는 브라우저 API(FileReader·Blob)를 쓰므로 여기선 건너뛰고 브라우저 QA 에서 확인한다.
   node tools/test-exports.mjs */
import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import { GOLDENS } from "./goldens.mjs";
import { buildShaft3D } from "../js/shaft-cad.js";
import { exportSTL, exportOBJ, exportUSDA, exportSTEP, exportPLY, collectTriangles } from "../js/shaft-export.js";
import { exportFBX } from "../js/fbx-export.js";

let fails = 0;
for (const g of [GOLDENS[1], GOLDENS[9], GOLDENS[12], GOLDENS[13]]) {
  const b = buildShaft3D(g);
  const tris = collectTriangles(b.root).reduce((a, p) => a + p.tris.length / 9, 0);
  const fbx = exportFBX(b.root);
  const fbxScene = new FBXLoader().parse(new TextEncoder().encode(fbx).buffer, "");
  let fbxTris = 0; fbxScene.traverse((o) => { if (o.isMesh) fbxTris += (o.geometry.index ? o.geometry.index.count : o.geometry.getAttribute("position").count) / 3; });
  const obj = exportOBJ(b.root);
  const objScene = new OBJLoader().parse(obj);
  let objTris = 0; objScene.traverse((o) => { if (o.isMesh) objTris += o.geometry.getAttribute("position").count / 3; });
  const stl = exportSTL(b.root);
  const stlGeo = new STLLoader().parse(stl.buffer);
  const stlTris = stlGeo.getAttribute("position").count / 3;
  const usda = exportUSDA(b.root, g);
  const step = exportSTEP(b.root, g.id);
  const ply = exportPLY(b.root);
  const ok = fbxTris === tris && objTris === tris && stlTris === tris && usda.startsWith("#usda 1.0") && step.includes("MANIFOLD_SOLID_BREP") && ply.startsWith("ply");
  if (!ok) fails++;
  console.log(`${ok ? "PASS" : "FAIL"} ${g.id.padEnd(16)} tris ${tris} | fbx ${fbxTris} (${(fbx.length / 1024).toFixed(0)}KB) obj ${objTris} stl ${stlTris} usda ${(usda.length / 1024).toFixed(0)}KB step ${(step.length / 1024).toFixed(0)}KB ply ${(ply.length / 1024).toFixed(0)}KB`);
}
console.log(fails ? `${fails} FAILED` : "all export round trips passed");
process.exit(fails ? 1 : 0);
