/* M2 합성 데이터셋 — 도면(SVG/PNG) ↔ 정답 DSL 쌍을 임의 규모로.
   node tools/gen-dataset.mjs --n 5000 --out dataset [--seed 1] [--png-width 1600] [--augment 0.3] [--omit 0.15]
   각 항목: dataset/<split>/<id>.svg  <id>.png(선택)  <id>.json(DSL)  <id>.labels.json(치수 문자·bbox·DSL 필드 매핑)
   --augment p : 비율 p 만큼 스캔 열화(회전·블러·감마·JPEG) 사본을 추가로 만든다 (강건성 세트)
   --omit r    : 치수 무작위 생략 비율 (치수 누락 강건성)
   dataset/manifest.jsonl 에 한 줄씩. 학습/개발 분할은 9:1. sharp 가 없으면 SVG 만 쓴다. */
import { mkdirSync, writeFileSync, appendFileSync, existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { sampleShaft } from "../js/shaft-sampler.js";
import { drawShaft, toSVG, drawingLabels } from "../js/shaft-drawing.js";
import { validateShaft } from "../js/shaft-schema.js";
import { totalLength, maxDiameter } from "../js/shaft-profile.js";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const N = Number(opt("--n", "50")), seed0 = Number(opt("--seed", "1")), outDir = `${ROOT}${opt("--out", "dataset")}/`;
const pngW = Number(opt("--png-width", "1600")), augP = Number(opt("--augment", "0.3")), omitR = Number(opt("--omit", "0.15"));
let sharp = null; try { sharp = (await import("sharp")).default; } catch { console.log("sharp 없음 — SVG 만 생성"); }
if (existsSync(outDir) && args.includes("--clean")) rmSync(outDir, { recursive: true });
for (const s of ["train", "dev"]) mkdirSync(`${outDir}${s}`, { recursive: true });
const manifest = `${outDir}manifest.jsonl`; writeFileSync(manifest, "");
const rnd = (() => { let a = seed0 * 7919 + 17; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; })();

let made = 0, seed = seed0, stats = {};
const t0 = Date.now();
while (made < N) {
  const dsl = sampleShaft(seed++);
  if (!dsl.meta.valid || !validateShaft(dsl).ok) continue;
  const split = made % 10 === 9 ? "dev" : "train";
  const id = `${String(made).padStart(5, "0")}-${dsl.meta.archetype}`;
  const omit = rnd() < 0.5 ? omitR : 0;
  const style = { scale: "auto", seed: seed, omitRatio: omit, chainOmit: rnd() < 0.8 ? "longest" : "none", paper: rnd() < 0.15 ? "aged" : "white", showHidden: rnd() < 0.85 };
  const dr = drawShaft(dsl, style);
  const svg = toSVG(dr);
  const base = `${outDir}${split}/${id}`;
  writeFileSync(`${base}.svg`, svg);
  writeFileSync(`${base}.json`, JSON.stringify(dsl));
  const labels = drawingLabels(dr);
  writeFileSync(`${base}.labels.json`, JSON.stringify({ scale: dr.scale, sheet: dr.sheet, style, labels }));
  const rec = { id, split, archetype: dsl.meta.archetype, seed: dsl.meta.seed, L: totalLength(dsl), Dmax: maxDiameter(dsl), segments: dsl.segments.length, features: (dsl.features || []).map((f) => f.type), grooves: (dsl.grooves || []).length, bore: !!dsl.bore, omitted: labels.filter((l) => l.omitted).length, files: { svg: `${split}/${id}.svg`, dsl: `${split}/${id}.json`, labels: `${split}/${id}.labels.json` } };
  if (sharp) {
    await sharp(Buffer.from(svg)).resize({ width: pngW }).flatten({ background: "#ffffff" }).png({ compressionLevel: 8 }).toFile(`${base}.png`);
    rec.files.png = `${split}/${id}.png`;
    if (rnd() < augP) {
      /* 스캔 열화: 살짝 회전 + 블러 + 감마 + JPEG 압축 + 약간의 노이즈(감마 뒤 임계 없이) */
      const rot = (rnd() - 0.5) * 2.4, blur = 0.5 + rnd() * 0.9, gamma = 1.6 + rnd() * 1.4, q = 45 + Math.floor(rnd() * 35);
      await sharp(Buffer.from(svg)).resize({ width: pngW }).flatten({ background: "#ffffff" }).rotate(rot, { background: "#ffffff" }).blur(blur).gamma(gamma).jpeg({ quality: q }).toFile(`${base}.scan.jpg`);
      rec.files.scan = `${split}/${id}.scan.jpg`; rec.augment = { rot: +rot.toFixed(2), blur: +blur.toFixed(2), gamma: +gamma.toFixed(2), jpeg_q: q };
    }
  }
  appendFileSync(manifest, JSON.stringify(rec) + "\n");
  stats[dsl.meta.archetype] = (stats[dsl.meta.archetype] || 0) + 1;
  made++;
  if (made % 100 === 0) console.log(`${made}/${N} … ${Math.round((Date.now() - t0) / 1000)}s`);
}
writeFileSync(`${outDir}stats.json`, JSON.stringify({ n: made, seed0, archetypes: stats, png: !!sharp, augment: augP, omit: omitR, ms: Date.now() - t0 }, null, 1));
console.log(`완료: ${made}개 → ${outDir} (${Math.round((Date.now() - t0) / 1000)}s)`, stats);
