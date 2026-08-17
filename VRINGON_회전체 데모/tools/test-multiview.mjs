/* Part 2 회귀: 예시 도면 3장 → 뷰 분할 → 역할 추천 → 치수 OCR → 정투상 교집합 → 정답 크기와 대조.
   node tools/test-multiview.mjs   (sharp · tesseract.js 필요) */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { createWorker } from "tesseract.js";
import { splitViews, viewContours } from "../js/views.js";
import { getOcrWorker, readNumberTokens, scaleFromDims } from "../js/ocr-dims.js";
import { suggestRoles, buildOrthoPart, projectionIoU, suggestMethod, ROLE_KO } from "../js/multiview.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const golden = JSON.parse(readFileSync(root + "assets/part2/golden.json"));
const worker = await getOcrWorker({ langPath: root + "vendor/tesseract" }, createWorker);
let fail = 0;
for (const id of ["bracket", "housing", "elbow", "plate", "channel", "block"]) {
  const g = golden[id];
  const svg = readFileSync(root + `assets/part2/${id}.svg`);
  const png = await sharp(svg).resize({ width: 2400 }).flatten({ background: "#fff" }).png().toBuffer();
  const { data, info } = await sharp(png).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const img = { width: info.width, height: info.height, data };
  const split = splitViews(img);
  const views = split.views.map((v) => Object.assign(v, { contours: viewContours(v), cx: () => (v.x0 + v.x1) / 2, cy: () => (v.y0 + v.y1) / 2 }));
  const roles = suggestRoles(views, "third");
  const tokens = await readNumberTokens(worker, png);
  const sc = scaleFromDims(tokens, img);
  const assigned = views.map((v) => ({ view: v, role: roles[v.id] }));
  const method = suggestMethod(assigned);
  console.log(`\n== ${g.name}  뷰 ${views.length}개 → ${views.map((v) => `#${v.id}:${ROLE_KO[roles[v.id]]}`).join(" ")}`);
  console.log(`   축척 ${sc.ok ? sc.mmPerPx.toFixed(5) : "실패"} (합의 ${sc.agree}/${sc.total}) · 방법 ${method.method}: ${method.why}`);
  if (g.unsupported) {
    const ok = method.method !== "ortho" || assigned.filter((a) => ["front", "top", "right", "left"].includes(a.role)).length < 2;
    console.log(`   ${ok ? "PASS" : "  X"} 미지원 부류를 교집합으로 만들려 하지 ${ok ? "않는다" : "한다"}`);
    if (!ok) fail++;
    continue;
  }
  if (!sc.ok) { console.log("   X 축척 실패"); fail++; continue; }
  const r = buildOrthoPart(assigned, sc.mmPerPx);
  if (!r.ok) { console.log("   X 만들기 실패:", r.reason); fail++; continue; }
  const sz = [r.size.X, r.size.Y, r.size.Z].map((x) => +x.toFixed(1));
  const err = sz.map((s, i) => Math.abs(s - g.size[i]) / g.size[i] * 100);
  const okSize = err.every((e) => e <= 2.5);
  const ious = assigned.filter((a) => ["front", "top", "right", "left", "bottom", "back"].includes(a.role)).map((a) => projectionIoU(r.geometry, a.view, a.role, sc.mmPerPx, r.ext));
  const okIou = ious.every((x) => x.iou >= 0.9);
  console.log(`   크기 ${sz.join(" × ")} (정답 ${g.size.join(" × ")}, 오차 ${err.map((e) => e.toFixed(1) + "%").join(" ")}) 부피 ${r.volume_cm3.toFixed(1)} cm³${g.volume_cm3 ? ` (정답 ${g.volume_cm3})` : ""}`);
  console.log(`   뷰 정합: ${ious.map((x) => `${ROLE_KO[x.role]} ${(x.iou * 100).toFixed(1)}%`).join(" · ")}  ${r.checks.map((c) => `${c.axis}축 ${c.a.role}↔${c.b.role} ${c.diffPct}%`).join(" · ")}`);
  console.log(`   ${okSize && okIou ? "PASS" : "  X"}`);
  if (!(okSize && okIou)) fail++;
}
await worker.terminate();
if (fail) { console.log(`\n실패 ${fail}건`); process.exit(1); }
console.log("\nall multiview tests passed");
