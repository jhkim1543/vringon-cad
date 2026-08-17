/* Part 2 샘플 한 장을 화면과 같은 순서로 복원한다 (Node 용).
   Rebuilds one Part 2 sample sheet the same way the screen does, for Node.

   왜 따로 두나 / Why this exists:
   라이브러리의 "결과" 그림과 회귀 테스트가 같은 경로를 밟아야 짝이 사실과 맞는다.
   화면(part2.js)은 브라우저 API 에 묶여 있어 그대로 쓸 수 없으므로, 같은 모듈들을 같은
   순서로 부르는 얇은 겉면만 만든다: 뷰 나누기 → 역할 추천 → 치수 읽기 → 교집합.
   The library's "result" image and the regression test must walk the same path for the pair to be
   truthful. The screen (part2.js) is tied to browser APIs, so this is a thin shell that calls the
   same modules in the same order: split views, suggest roles, read dimensions, intersect. */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import * as THREE from "three";
import { createWorker } from "tesseract.js";
import { splitViews, viewContours } from "../js/views.js";
import { getOcrWorker, readNumberTokens, scaleFromDims } from "../js/ocr-dims.js";
import { suggestRoles, buildOrthoPart } from "../js/multiview.js";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
let worker = null;

/* 도면 한 장 → 삼각형 묶음. 만들지 못하는 부류(곡관 등)는 null 을 준다.
   One sheet → triangle groups. Returns null for the kinds this version cannot build (elbows). */
export async function buildPart2(id, golden) {
  if (golden?.unsupported) return null;
  if (!worker) worker = await getOcrWorker({ langPath: ROOT + "vendor/tesseract" }, createWorker);

  const svg = readFileSync(`${ROOT}assets/part2/${id}.svg`);
  const png = await sharp(svg).resize({ width: 2400 }).flatten({ background: "#fff" }).png().toBuffer();
  const { data, info } = await sharp(png).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const img = { width: info.width, height: info.height, data };

  const split = splitViews(img);
  const views = split.views.map((v) => Object.assign(v, { contours: viewContours(v) }));
  const roles = suggestRoles(views, "third");
  const sc = scaleFromDims(await readNumberTokens(worker, png), img);
  if (!sc.ok) return null;

  const built = buildOrthoPart(views.map((v) => ({ view: v, role: roles[v.id] })), sc.mmPerPx);
  if (!built.ok) return null;

  /* 렌더러가 쓰는 모양으로 / into the shape the renderer wants */
  const mesh = new THREE.Mesh(built.geometry);
  mesh.updateWorldMatrix(true, true);
  const pos = built.geometry.getAttribute("position");
  const tris = [];
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) { v.fromBufferAttribute(pos, i); tris.push(v.x, v.y, v.z); }
  return { root: mesh, groups: [{ name: id, tris }], size: built.size, volume_cm3: built.volume_cm3 };
}

export async function closePart2() { if (worker) { await worker.terminate(); worker = null; } }
