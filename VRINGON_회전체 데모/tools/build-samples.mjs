/* 골든 12종 → samples/<id>/{golden.json, drawing.svg, drawing.png, labels.json, silhouette.json} + samples/index.json
   PNG 는 sharp 가 있을 때만(없으면 SVG 만 — 브라우저는 SVG 를 직접 래스터화한다).
   실행: node tools/build-samples.mjs [--png-width 2000]
   골든을 고치면 다시 돌린다. 판독 결과(extracted.json)와 STEP(model.step)은 각각 eval-extract / pipeline 이 만든다. */
import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { GOLDENS } from "./goldens.mjs";
import { validateShaft } from "../js/shaft-schema.js";
import { drawShaft, toSVG, toDXF, drawingLabels } from "../js/shaft-drawing.js";
import { computeMass, totalLength, maxDiameter, silhouetteSamples } from "../js/shaft-profile.js";
import { densityOf } from "../js/shaft-standards.js";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const args = process.argv.slice(2);
const pngWidth = Number(args[args.indexOf("--png-width") + 1]) || 2000;
let sharp = null;
try { sharp = (await import("sharp")).default; } catch { console.log("sharp 없음 — PNG 는 건너뜁니다 (브라우저가 SVG 를 직접 씁니다)"); }

const index = [];
for (const g of GOLDENS) {
  const v = validateShaft(g);
  if (!v.ok) { console.error(`✗ ${g.id}: 골든이 유효하지 않습니다`, v.errors); process.exitCode = 1; continue; }
  const dir = `${ROOT}samples/${g.id}/`;
  mkdirSync(dir, { recursive: true });
  const dr = drawShaft(g, { scale: "auto", seed: 1 });
  const svg = toSVG(dr);
  writeFileSync(`${dir}golden.json`, JSON.stringify(g, null, 2));
  writeFileSync(`${dir}drawing.svg`, svg);
  writeFileSync(`${dir}drawing.dxf`, toDXF(dr));
  writeFileSync(`${dir}labels.json`, JSON.stringify({ scale: dr.scale, sheet: dr.sheet, labels: drawingLabels(dr) }, null, 1));
  const sil = silhouetteSamples(g, 400);
  writeFileSync(`${dir}silhouette.json`, JSON.stringify({ L: sil.L, samples: Array.from(sil.samples).map((x) => +x.toFixed(4)) }));
  let png = false;
  if (sharp) {
    await sharp(Buffer.from(svg)).resize({ width: pngWidth }).flatten({ background: "#ffffff" }).png({ compressionLevel: 9 }).toFile(`${dir}drawing.png`);
    /* 썸네일(칩) */
    await sharp(Buffer.from(svg)).resize({ width: 640 }).flatten({ background: "#ffffff" }).webp({ quality: 82 }).toFile(`${dir}thumb.webp`);
    png = true;
  }
  const mass = computeMass(g, densityOf(g.material));
  const has = (f) => existsSync(`${dir}${f}`);
  index.push({
    id: g.id, name: g.name, name_ko: g.name_ko, part_class: g.part_class, material: g.material, difficulty: g.meta?.difficulty || 0,
    L: totalLength(g), Dmax: maxDiameter(g), mass_g: +mass.mass_g.toFixed(1), scale: dr.scale,
    segments: g.segments.length, features: (g.features || []).map((f) => f.type), grooves: (g.grooves || []).length, bore: !!g.bore,
    files: { golden: "golden.json", svg: "drawing.svg", png: png ? "drawing.png" : null, thumb: png ? "thumb.webp" : null, dxf: "drawing.dxf", labels: "labels.json",
      extracted: has("extracted.json") ? "extracted.json" : null, step: has("model.step") ? "model.step" : null, usda: has("model.usda") ? "model.usda" : null, usdc: has("model.usdc") ? "model.usdc" : null },
  });
  console.log(`✓ ${g.id.padEnd(16)} L${totalLength(g)} ⌀${maxDiameter(g)} scale ${dr.scale}  items ${dr.items.length} labels ${dr.labels.length}${v.warnings.length ? "  ⚠ " + v.warnings.join(" / ") : ""}`);
}
writeFileSync(`${ROOT}samples/index.json`, JSON.stringify({ built: new Date().toISOString().slice(0, 10), count: index.length, samples: index }, null, 1));
console.log(`samples/index.json — ${index.length}개`);
