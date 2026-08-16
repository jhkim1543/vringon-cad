/* VRINGON 회전체 — FBX 내보내기 (FBX 7.4 ASCII, 의존성 없음)
   three.js 에는 FBX 로더만 있고 내보내기가 없다. 여기서는 FBX SDK 가 읽는 ASCII 7.4 문법으로 직접 쓴다:
   FBXHeaderExtension / GlobalSettings(mm: UnitScaleFactor 0.1) / Definitions / Objects(Geometry·Model·Material) / Connections.
   메시는 삼각형 폴리곤(PolygonVertexIndex 의 마지막 인덱스는 ~i 로 음수), 법선은 ByPolygonVertex.
   확인: three.js FBXLoader(r185) 로 왕복 읽기 — tools/test-exports.mjs.
   한계: Blender 는 ASCII FBX 를 읽지 않는다(FBX SDK 계열: Maya·3ds Max·Unity·Unreal·Omniverse 는 읽는다).
        Blender 로 가려면 GLB 를 쓰거나 Autodesk FBX Converter 로 바이너리 변환. 서버에 assimp 가 있으면 바이너리 FBX 로 바꿔 줄 수 있다. */

import * as THREE from "three";

const f = (n) => { if (!isFinite(n)) n = 0; let s = (Math.round(n * 1e5) / 1e5).toString(); if (s === "-0") s = "0"; return s; };
const sanitize = (s) => String(s || "mesh").replace(/[^A-Za-z0-9_]/g, "_") || "mesh";

/* 파트(메시) 삼각형 + 법선 수집 (렌더 전용 뒷면/고스트 제외) */
function collectMeshes(root) {
  root.updateWorldMatrix(true, true);
  const out = [];
  const v = new THREE.Vector3(), nrm = new THREE.Vector3();
  root.traverse((node) => {
    if (!node.isMesh || !node.visible || !node.geometry) return;
    if (node.name.endsWith(":cut") || node.name.startsWith("ghost")) return;
    for (let o = node; o; o = o.parent) if (o.userData?.isMarker || String(o.name).startsWith("marker:")) return;   /* 회전 마커 제외 */
    const geo = node.geometry.index ? node.geometry.toNonIndexed() : node.geometry;
    const pos = geo.getAttribute("position"), nor = geo.getAttribute("normal");
    const nm = new THREE.Matrix3().getNormalMatrix(node.matrixWorld);
    const verts = [], normals = [];
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(node.matrixWorld); verts.push(v.x, v.y, v.z);
      if (nor) { nrm.fromBufferAttribute(nor, i).applyMatrix3(nm).normalize(); normals.push(nrm.x, nrm.y, nrm.z); }
    }
    if (geo !== node.geometry) geo.dispose();
    const color = node.material?.color ? node.material.color : new THREE.Color(0.72, 0.74, 0.77);
    out.push({ name: node.name || "mesh", verts, normals, color: [color.r, color.g, color.b], material: node.material?.name || "steel" });
  });
  return out;
}

export function exportFBX(root, opts = {}) {
  const meshes = collectMeshes(root);
  const now = new Date();
  const L = [];
  const p = (s) => L.push(s);
  p("; FBX 7.4.0 project file");
  p("; VRINGON CAD — revolve part (mm)");
  p("");
  p("FBXHeaderExtension:  {");
  p("\tFBXHeaderVersion: 1003");
  p("\tFBXVersion: 7400");
  p(`\tCreationTimeStamp:  {\n\t\tVersion: 1000\n\t\tYear: ${now.getFullYear()}\n\t\tMonth: ${now.getMonth() + 1}\n\t\tDay: ${now.getDate()}\n\t\tHour: ${now.getHours()}\n\t\tMinute: ${now.getMinutes()}\n\t\tSecond: ${now.getSeconds()}\n\t\tMillisecond: 0\n\t}`);
  p('\tCreator: "VRINGON CAD revolve exporter"');
  p("}");
  p("GlobalSettings:  {");
  p("\tVersion: 1000");
  p("\tProperties70:  {");
  p('\t\tP: "UpAxis", "int", "Integer", "",1');
  p('\t\tP: "UpAxisSign", "int", "Integer", "",1');
  p('\t\tP: "FrontAxis", "int", "Integer", "",2');
  p('\t\tP: "FrontAxisSign", "int", "Integer", "",1');
  p('\t\tP: "CoordAxis", "int", "Integer", "",0');
  p('\t\tP: "CoordAxisSign", "int", "Integer", "",1');
  p('\t\tP: "OriginalUpAxis", "int", "Integer", "",1');
  p('\t\tP: "OriginalUpAxisSign", "int", "Integer", "",1');
  /* FBX 기본 단위는 cm(=1.0). 우리 좌표는 mm 이므로 0.1 */
  p('\t\tP: "UnitScaleFactor", "double", "Number", "",0.1');
  p('\t\tP: "OriginalUnitScaleFactor", "double", "Number", "",0.1');
  p('\t\tP: "AmbientColor", "ColorRGB", "Color", "",0,0,0');
  p('\t\tP: "DefaultCamera", "KString", "", "", "Producer Perspective"');
  p('\t\tP: "TimeMode", "enum", "", "",11');
  p('\t\tP: "TimeSpanStart", "KTime", "Time", "",0');
  p('\t\tP: "TimeSpanStop", "KTime", "Time", "",46186158000');
  p('\t\tP: "CustomFrameRate", "double", "Number", "",-1');
  p("\t}");
  p("}");
  p("Documents:  {");
  p("\tCount: 1");
  p('\tDocument: 1000000, "", "Scene" {');
  p('\t\tProperties70:  {\n\t\t\tP: "SourceObject", "object", "", ""\n\t\t\tP: "ActiveAnimStackName", "KString", "", "", ""\n\t\t}');
  p("\t\tRootNode: 0");
  p("\t}");
  p("}");
  p("References:  {\n}");
  const nGeo = meshes.length, nMat = meshes.length;
  p("Definitions:  {");
  p("\tVersion: 100");
  p(`\tCount: ${1 + nGeo + nGeo + nMat}`);
  p('\tObjectType: "GlobalSettings" {\n\t\tCount: 1\n\t}');
  p(`\tObjectType: "Model" {\n\t\tCount: ${nGeo}\n\t\tPropertyTemplate: "FbxNode" {\n\t\t\tProperties70:  {\n\t\t\t\tP: "Lcl Translation", "Lcl Translation", "", "A",0,0,0\n\t\t\t\tP: "Lcl Rotation", "Lcl Rotation", "", "A",0,0,0\n\t\t\t\tP: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1\n\t\t\t\tP: "Visibility", "Visibility", "", "A",1\n\t\t\t}\n\t\t}\n\t}`);
  p(`\tObjectType: "Geometry" {\n\t\tCount: ${nGeo}\n\t\tPropertyTemplate: "FbxMesh" {\n\t\t\tProperties70:  {\n\t\t\t\tP: "Color", "ColorRGB", "Color", "",0.8,0.8,0.8\n\t\t\t\tP: "Primary Visibility", "bool", "", "",1\n\t\t\t\tP: "Casts Shadows", "bool", "", "",1\n\t\t\t\tP: "Receive Shadows", "bool", "", "",1\n\t\t\t}\n\t\t}\n\t}`);
  p(`\tObjectType: "Material" {\n\t\tCount: ${nMat}\n\t\tPropertyTemplate: "FbxSurfacePhong" {\n\t\t\tProperties70:  {\n\t\t\t\tP: "ShadingModel", "KString", "", "", "Phong"\n\t\t\t\tP: "DiffuseColor", "Color", "", "A",0.8,0.8,0.8\n\t\t\t\tP: "SpecularColor", "Color", "", "A",0.2,0.2,0.2\n\t\t\t\tP: "Shininess", "Number", "", "A",20\n\t\t\t}\n\t\t}\n\t}`);
  p("}");
  p("Objects:  {");
  const ids = [];
  meshes.forEach((m, k) => {
    const gid = 2000000 + k, mid = 3000000 + k, matid = 4000000 + k;
    ids.push({ gid, mid, matid });
    const nV = m.verts.length / 3;
    /* 폴리곤 인덱스: 삼각형 (i, i+1, ~(i+2)) */
    const idx = [];
    for (let i = 0; i < nV; i += 3) idx.push(i, i + 1, -(i + 2) - 1);
    p(`\tGeometry: ${gid}, "Geometry::${sanitize(m.name)}", "Mesh" {`);
    p(`\t\tVertices: *${m.verts.length} {\n\t\t\ta: ${m.verts.map(f).join(",")}\n\t\t}`);
    p(`\t\tPolygonVertexIndex: *${idx.length} {\n\t\t\ta: ${idx.join(",")}\n\t\t}`);
    p("\t\tGeometryVersion: 124");
    if (m.normals.length === m.verts.length) {
      p(`\t\tLayerElementNormal: 0 {\n\t\t\tVersion: 101\n\t\t\tName: ""\n\t\t\tMappingInformationType: "ByPolygonVertex"\n\t\t\tReferenceInformationType: "Direct"\n\t\t\tNormals: *${m.normals.length} {\n\t\t\t\ta: ${m.normals.map(f).join(",")}\n\t\t\t}\n\t\t}`);
    }
    p(`\t\tLayerElementMaterial: 0 {\n\t\t\tVersion: 101\n\t\t\tName: ""\n\t\t\tMappingInformationType: "AllSame"\n\t\t\tReferenceInformationType: "IndexToDirect"\n\t\t\tMaterials: *1 {\n\t\t\t\ta: 0\n\t\t\t}\n\t\t}`);
    p(`\t\tLayer: 0 {\n\t\t\tVersion: 100\n\t\t\tLayerElement:  {\n\t\t\t\tType: "LayerElementNormal"\n\t\t\t\tTypedIndex: 0\n\t\t\t}\n\t\t\tLayerElement:  {\n\t\t\t\tType: "LayerElementMaterial"\n\t\t\t\tTypedIndex: 0\n\t\t\t}\n\t\t}`);
    p("\t}");
    p(`\tModel: ${mid}, "Model::${sanitize(m.name)}", "Mesh" {\n\t\tVersion: 232\n\t\tProperties70:  {\n\t\t\tP: "InheritType", "enum", "", "",1\n\t\t\tP: "DefaultAttributeIndex", "int", "Integer", "",0\n\t\t\tP: "Lcl Translation", "Lcl Translation", "", "A",0,0,0\n\t\t}\n\t\tShading: T\n\t\tCulling: "CullingOff"\n\t}`);
    const [r, g, b] = m.color;
    p(`\tMaterial: ${matid}, "Material::${sanitize(m.material)}", "" {\n\t\tVersion: 102\n\t\tShadingModel: "phong"\n\t\tMultiLayer: 0\n\t\tProperties70:  {\n\t\t\tP: "ShadingModel", "KString", "", "", "Phong"\n\t\t\tP: "DiffuseColor", "Color", "", "A",${f(r)},${f(g)},${f(b)}\n\t\t\tP: "SpecularColor", "Color", "", "A",0.5,0.5,0.5\n\t\t\tP: "Shininess", "Number", "", "A",40\n\t\t\tP: "Opacity", "Number", "", "A",1\n\t\t}\n\t}`);
  });
  p("}");
  p("Connections:  {");
  for (const { gid, mid, matid } of ids) {
    p(`\t;Model::mesh, Model::RootNode\n\tC: "OO",${mid},0`);
    p(`\t;Geometry::mesh, Model::mesh\n\tC: "OO",${gid},${mid}`);
    p(`\t;Material::mat, Model::mesh\n\tC: "OO",${matid},${mid}`);
  }
  p("}");
  p("Takes:  {\n\tCurrent: \"\"\n}");
  return L.join("\n") + "\n";
}
