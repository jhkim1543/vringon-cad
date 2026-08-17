/* 샘플 17종의 부품 해석을 미리 만든다: 도면 이미지 + 판독 사양 + OCR 토큰 → /api/describe → samples/<id>/analysis.json
   정적 데모는 이것을 재생하고, 서버 모드는 같은 API 를 실시간으로 부른다.
   node tools/build-analysis.mjs [--server http://localhost:8349] [--only clevis-pin] */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { createWorker } from "tesseract.js";
import { getOcrWorker, readNumberTokens } from "../js/ocr-dims.js";
import { inferPartType } from "../js/part-types.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const args = process.argv.slice(2);
const server = args.includes("--server") ? args[args.indexOf("--server") + 1] : "http://localhost:8349";
const only = args.includes("--only") ? args[args.indexOf("--only") + 1] : null;
const L = args.includes("--lang") ? args[args.indexOf("--lang") + 1] : "ko";
const idx = JSON.parse(readFileSync(root + "samples/index.json", "utf8"));
const worker = await getOcrWorker({ langPath: root + "vendor/tesseract" }, createWorker);
let ok = 0, fail = 0;
for (const s of idx.samples) {
  if (only && s.id !== only) continue;
  const dir = `${root}samples/${s.id}/`;
  const svg = readFileSync(dir + s.files.svg);
  const png = await sharp(svg).resize({ width: 2000 }).flatten({ background: "#fff" }).png().toBuffer();
  const tokens = await readNumberTokens(worker, png);
  const ex = existsSync(dir + "extracted.json") ? JSON.parse(readFileSync(dir + "extracted.json", "utf8")) : null;
  const dsl = ex?.dsl || JSON.parse(readFileSync(dir + s.files.golden, "utf8"));
  const partType = inferPartType(dsl).id;
  const body = { imageB64: "data:image/png;base64," + png.toString("base64"), dsl, ocrTokens: tokens.map((t) => ({ text: t.text, value: t.value, kind: t.kind })), partType, dims_read: ex?.dims_read || [], lang: L };
  const t0 = Date.now();
  try {
    const r = await fetch(`${server}/api/describe`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const j = await r.json();
    if (!r.ok) throw new Error(j.error || r.status);
    writeFileSync(dir + (L === "en" ? "analysis.en.json" : "analysis.json"), JSON.stringify({ ...j, part_type_inferred: partType, ocr_tokens: tokens.map((t) => t.text), built_at: new Date().toISOString() }, null, 2));
    console.log(`ok   ${s.id.padEnd(16)} ${j.part_type?.padEnd(8)} ${j.one_line}  (${((Date.now() - t0) / 1000).toFixed(1)}s, OCR ${tokens.length})`);
    ok++;
  } catch (e) { console.log(`FAIL ${s.id.padEnd(16)} ${e.message}`); fail++; }
}
await worker.terminate();
console.log(`\n해석 ${ok}건 저장, 실패 ${fail}건`);
