/* 정적 데모 배포: 이 폴더의 정적 부분을 ../docs/revolve/ 로 복사하고 모듈 지정자에 빌드 버전을 찍는다.
   GitHub Pages(main /docs) → https://jhkim1543.github.io/vringon-cad/revolve/
   node tools/deploy-docs.mjs
   (Pages 는 JS 를 max-age=600 으로 주므로 버전 스탬프가 없으면 배포 후 10분간 옛 빌드가 돈다 — 본체 데모에서 실제로 겪은 일) */
import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { join } from "node:path";

const SRC = fileURLToPath(new URL("../", import.meta.url));
const DST = join(SRC, "..", "docs", "revolve") + "/";
/* 빌드 해시: 원본 js/·index.html·samples/index.json 에서 */
const h = createHash("sha256");
for (const f of readdirSync(join(SRC, "js")).sort()) h.update(f).update(readFileSync(join(SRC, "js", f)));
h.update(readFileSync(join(SRC, "index.html"))).update(readFileSync(join(SRC, "samples", "index.json")));
const V = h.digest("hex").slice(0, 8);

rmSync(DST, { recursive: true, force: true });
mkdirSync(DST, { recursive: true });
for (const d of ["css", "js", "vendor", "assets", "samples", "schema"]) cpSync(join(SRC, d), join(DST, d), { recursive: true });
cpSync(join(SRC, "index.html"), join(DST, "index.html"));
/* samples 는 통째로(도면·정답·판독·STEP·USDA), prompts/·pipeline/·eval/ 은 정적 데모에 필요 없어 뺀다 */
const stampImports = (src) => src.replace(/(from\s+")(\.\/[^"?]+\.js)(\?v=[0-9a-f]+)?(")/g, `$1$2?v=${V}$4`).replace(/(src=")(\.\/js\/app\.js)(\?v=[0-9a-f]+)?(")/g, `$1$2?v=${V}$4`);
let html = readFileSync(join(DST, "index.html"), "utf8");
html = stampImports(html);
writeFileSync(join(DST, "index.html"), html);
for (const f of readdirSync(join(DST, "js"))) {
  if (!f.endsWith(".js")) continue;
  let s = readFileSync(join(DST, "js", f), "utf8");
  s = stampImports(s).replace(/const BUILD = "[^"]*";/, `const BUILD = "${V}";`);
  writeFileSync(join(DST, "js", f), s);
}
writeFileSync(join(DST, "README.md"), `# VRINGON 회전체 — 정적 데모 (자동 생성)\n\n원본은 저장소의 \`VRINGON_회전체 데모/\` 폴더입니다. 이 폴더는 \`node tools/deploy-docs.mjs\` 가 복사·버전 스탬프(${V})한 사본이며 손으로 고치지 않습니다.\n\n- 공개 URL: https://jhkim1543.github.io/vringon-cad/revolve/\n- 정적 모드: 샘플의 AI 판독 결과를 재생하고, 업로드·합성 도면은 브라우저 실루엣 판독으로 DSL 을 만듭니다. AI 판독은 온프렘 서버(\`node server.mjs\`)에서만 돕니다.\n`);
/* 크기 보고 */
let total = 0; const walk = (p) => { for (const f of readdirSync(p)) { const q = join(p, f); const st = statSync(q); if (st.isDirectory()) walk(q); else total += st.size; } }; walk(DST);
console.log(`docs/revolve ← 빌드 ${V} · ${(total / 1048576).toFixed(1)} MB`);
