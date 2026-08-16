/* 업로드 안내(guide.html)용 예시 이미지 — 폴백 LLM 의 이미지 모델(config.local.json fallback.imageModel)로 생성.
   "이런 도면은 되고, 이런 것은 안 된다" 를 보여 주는 삽화다. 치수 기준을 설명하는 도면은 이 저장소 렌더러가 그린 실제 도면
   (assets/guide/dim-guide.png, tools/gen-guide-annot.mjs) 을 쓴다 — 이미지 모델이 그린 숫자는 정확하지 않기 때문이다.
   node tools/gen-guide-images.mjs [--force]      # 있는 파일은 건너뛴다(유료 호출). 결과는 sharp 로 다시 인코딩해 메타데이터를 벗긴다. */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
const ROOT = fileURLToPath(new URL("../", import.meta.url));
let cfg = {};
for (const p of ["../config.local.json", "../../config.local.json"]) { try { cfg = JSON.parse(await readFile(new URL(p, import.meta.url), "utf8")); break; } catch {} }
const URL_ = cfg.fallback?.baseUrl, KEY = cfg.fallback?.apiKey, MODEL = cfg.fallback?.imageModel;
if (!URL_ || !KEY || !MODEL) { console.error("config.local.json 의 폴백 이미지 모델 설정이 없습니다"); process.exit(1); }
const sharp = (await import("sharp")).default;
const force = process.argv.includes("--force");
const OUT = `${ROOT}assets/guide/`;
await mkdir(OUT, { recursive: true });

const STYLE = "Technical engineering drawing style, black ink on white paper, orthographic projection, thin dimension lines with arrowheads, clean vector look, no color, no shading, no perspective.";
const IMAGES = [
  { id: "good-shaft", size: "1536x1024", prompt: `${STYLE} A single front view of a stepped machine shaft lying horizontally: several cylindrical steps of different diameters, a chamfer at each end, a small keyway slot on the largest step, an external thread at the right end. Diameter dimensions drawn as vertical dimension lines through the part, chain length dimensions below the part and one overall length dimension underneath, a small title block in the lower right corner. Only this one part on the sheet.` },
  { id: "good-bushing", size: "1536x1024", prompt: `${STYLE} A full section view of a bronze flanged bushing lying horizontally: hatched material areas, a through bore, small chamfers at both ends, diameter dimensions for outer diameter, flange diameter and bore, chain length dimensions below and an overall length. Title block at the lower right. Only this one part.` },
  { id: "good-bolt", size: "1536x1024", prompt: `${STYLE} A front view of a hex bolt lying horizontally with the hexagon head on the left, a plain shank and a threaded portion to the right, thread callout text, chamfer at the tip, a small removed section showing the hexagon shape next to it, dimensions for head height, thread length and overall length.` },
  { id: "bad-assembly", size: "1536x1024", prompt: `${STYLE} An assembly drawing of a swivel caster wheel with a mounting plate, fork and brake lever, shown in three orthographic views (front, side and bottom) on one sheet, with letter dimensions like R, A, H, L, B. Many parts, no single machined part.` },
  { id: "bad-iso", size: "1024x1024", prompt: `Photorealistic 3D rendering of a machined aluminum flange adapter with four bolt holes and a slot, isometric view on a light gray studio background, soft shadows, no dimensions, no drawing lines.` },
  { id: "bad-photo", size: "1024x1024", prompt: `Photograph of a real steel machine shaft with several stepped diameters lying on a wooden workbench next to a caliper, natural light, slight perspective, no drawing, no dimensions.` },
  { id: "bad-scan", size: "1536x1024", prompt: `A crooked, blurry smartphone photo of a printed mechanical drawing of a shaft on a desk, taken at an angle with a shadow across the paper, low contrast, jpeg artifacts, part of the sheet cut off.` },
];
for (const im of IMAGES) {
  const file = `${OUT}${im.id}.webp`;
  if (existsSync(file) && !force) { console.log("skip", im.id); continue; }
  const t0 = Date.now();
  const r = await fetch(`${URL_}/v1/images/generations`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` }, body: JSON.stringify({ model: MODEL, prompt: im.prompt, size: im.size, quality: "medium", n: 1 }) });
  const j = await r.json();
  if (!r.ok || !j.data?.[0]) { console.error(im.id, "실패", j.error?.message || r.status); continue; }
  const b64 = j.data[0].b64_json;
  const buf = b64 ? Buffer.from(b64, "base64") : Buffer.from(await (await fetch(j.data[0].url)).arrayBuffer());
  /* 재인코딩: 메타데이터 제거 + webp 압축 */
  await sharp(buf).resize({ width: 1200 }).webp({ quality: 84 }).toFile(file);
  console.log("✓", im.id, `${Math.round((Date.now() - t0) / 1000)}s`);
}
await writeFile(`${OUT}prompts.json`, JSON.stringify({ generator: "fallback image model (config.local.json fallback.imageModel)", note: "삽화용. 치수 기준 안내는 렌더러 도면(dim-guide.png)을 쓴다.", images: IMAGES }, null, 1));
console.log("done →", OUT);
