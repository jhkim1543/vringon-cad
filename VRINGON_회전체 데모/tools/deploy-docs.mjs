/* 정적 데모 배포: 이 폴더의 정적 부분을 ../docs/revolve/ 로 내보낸다.
   GitHub Pages(main /docs) → https://jhkim1543.github.io/vringon-cad/revolve/

   기본은 **보호 빌드**: 모듈을 하나로 묶어 최소화하고, 주석·모듈 구조·QA 훅을 지운다.
   외부에 링크를 공유했을 때 개발자 도구로 소스를 읽어도 설계 의도(주석)와 파일 구성이 드러나지 않게 하는 것이 목적이다.
   완전한 차단은 브라우저에서 불가능하다 — 실행되는 코드는 언제나 읽을 수 있다. 판독 프롬프트·서버 키처럼
   진짜 감춰야 하는 것은 애초에 서버에만 두고 배포본에 넣지 않는다(prompts/·server.mjs·config.local.json 은 복사 대상이 아니다).

   node tools/deploy-docs.mjs          보호 빌드 (기본)
   node tools/deploy-docs.mjs --raw    원본 그대로 (디버깅용)
   (Pages 는 JS 를 max-age=600 으로 주므로 버전 스탬프가 없으면 배포 후 10분간 옛 빌드가 돈다) */
import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { join } from "node:path";

const RAW = process.argv.includes("--raw");
const SRC = fileURLToPath(new URL("../", import.meta.url));
const DST = join(SRC, "..", "docs", "revolve") + "/";
/* 빌드 해시: 원본 js/ · 페이지 HTML · CSS · samples/index.json 에서.
   CSS 와 페이지를 넣지 않으면 그것만 바뀐 배포가 같은 버전으로 나가 캐시에 갇힌다(반응형 작업에서 실측).
   Build hash from js/, the page HTML, the CSS and samples/index.json. Leaving CSS and pages out meant a
   CSS-only deploy shipped under the same version and stayed cached (seen during the responsive work). */
const h = createHash("sha256");
for (const f of readdirSync(join(SRC, "js")).sort()) h.update(f).update(readFileSync(join(SRC, "js", f)));
for (const f of ["index.html", "revolve.html", "assembly.html", "sculpt.html", "guide.html"]) h.update(readFileSync(join(SRC, f)));
h.update(readFileSync(join(SRC, "css", "vringon.css"))).update(readFileSync(join(SRC, "samples", "index.json")));
const V = h.digest("hex").slice(0, 8);

rmSync(DST, { recursive: true, force: true });
mkdirSync(DST, { recursive: true });
for (const d of ["css", "assets", "samples", "schema"]) cpSync(join(SRC, d), join(DST, d), { recursive: true });
const PAGES = readdirSync(SRC).filter((f) => f.endsWith(".html"));
for (const f of PAGES) cpSync(join(SRC, f), join(DST, f));
/* samples 는 통째로(도면·정답·판독·STEP·USDA), prompts/·pipeline/·eval/ 은 정적 데모에 필요 없어 뺀다 */

const stampImports = (src) => src.replace(/(from\s+")(\.\/[^"?]+\.js)(\?v=[0-9a-f]+)?(")/g, `$1$2?v=${V}$4`).replace(/(src=")(\.\/js\/app\.js)(\?v=[0-9a-f]+)?(")/g, `$1$2?v=${V}$4`);

if (RAW) {
  /* ---- 원본 그대로 (모듈 + vendor 복사) */
  for (const d of ["js", "vendor"]) cpSync(join(SRC, d), join(DST, d), { recursive: true });
  for (const f of PAGES) writeFileSync(join(DST, f), stampImports(readFileSync(join(DST, f), "utf8")));
  for (const f of readdirSync(join(DST, "js"))) {
    if (!f.endsWith(".js")) continue;
    const p = join(DST, "js", f);
    writeFileSync(p, stampImports(readFileSync(p, "utf8")).replace(/const BUILD = "[^"]*";/, `const BUILD = "${V}";`));
  }
} else {
  /* ---- 보호 빌드: 한 파일로 묶고 최소화 */
  const esbuild = await import("esbuild").catch(() => {
    console.error("보호 빌드에는 esbuild 가 필요합니다: npm i (또는 원본 그대로 내보내려면 --raw)");
    process.exit(1);
  });
  const threeDir = join(SRC, "vendor", "three");
  const vendorResolve = {
    name: "vendor-three",
    setup(b) {
      b.onResolve({ filter: /^three$/ }, () => ({ path: join(threeDir, "three.module.js") }));
      b.onResolve({ filter: /^three\/addons\// }, (a) => ({ path: join(threeDir, a.path.slice("three/".length)) }));
      /* 문자 인식 엔진 본체는 번들에 넣지 않고 런타임에 vendor/ 에서 부른다(워커·wasm 경로가 상대 경로라서) */
      b.onResolve({ filter: /tesseract\.esm\.min\.js$/ }, () => ({ path: "../vendor/tesseract/tesseract.esm.min.js", external: true }));   /* 번들은 js/ 에 놓인다 */
      /* 진입점만 로드 시점에 손본다: QA 훅 제거 + 빌드 스탬프 */
      b.onLoad({ filter: /[\\/]js[\\/](app|part2)\.js$/ }, (a) => {
        let s = readFileSync(a.path, "utf8");
        s = s.replace(/\/\* qa:start \*\/[\s\S]*?\/\* qa:end \*\//, "");
        s = s.replace(/const BUILD = "[^"]*";/, `const BUILD = "${V}";`);
        return { contents: s, loader: "js" };
      });
    },
  };
  mkdirSync(join(DST, "js"), { recursive: true });
  /* i18n.js 는 진입 화면(index.html)이 직접 부르므로 따로 묶는다 */
  /* partnav.js 는 드론 화면(저장소 루트)도 가져다 쓰므로 따로 내보낸다 / partnav.js is also imported by the drone screen at the root */
  for (const entry of ["app.js", "part2.js", "sculpt.js", "i18n.js", "guide-boot.js", "partnav.js"]) {
    const out = await esbuild.build({
      entryPoints: [join(SRC, "js", entry)],
      bundle: true, format: "esm", minify: true, legalComments: "none", target: ["es2022"],
      plugins: [vendorResolve], write: false, logLevel: "warning",
    });
    writeFileSync(join(DST, "js", entry), out.outputFiles[0].text);
  }
  /* three 는 번들에 들어갔지만 폰트는 CSS 가, 문자 인식 엔진(워커·wasm·언어 데이터)은 런타임이 직접 부른다 */
  cpSync(join(SRC, "vendor", "fonts"), join(DST, "vendor", "fonts"), { recursive: true });
  cpSync(join(SRC, "vendor", "tesseract"), join(DST, "vendor", "tesseract"), { recursive: true });

  /* html: 모듈 지도(importmap) 제거, 주석 제거, 인라인 CSS/JS 최소화, 진입점에 버전 스탬프 */
  for (const f of PAGES) {
    let html = readFileSync(join(DST, f), "utf8");
    html = html.replace(/<script type="importmap">[\s\S]*?<\/script>\s*/, "");
    html = await squeezeHtml(html, esbuild);
    html = html.replace(/(src=")(\.\/js\/(?:app|part2|sculpt)\.js)(")/, `$1$2?v=${V}$3`);
    /* 스타일시트에도 버전을 붙인다. 안 붙이면 Pages 의 캐시(max-age=600) 때문에 반응형처럼 CSS 만
       바뀐 배포가 10분간 옛 모습으로 보인다(실측: 새 빌드인데 세 칸이 그대로 쌓여 나왔다).
       Stamp the stylesheet too. Without it a CSS-only deploy (like the responsive work) shows the old
       look for ten minutes under the Pages cache; seen in practice as three stacked columns on a new build. */
    html = html.replace(/(href=")(css\/vringon\.css)(")/, `$1$2?v=${V}$3`);
    writeFileSync(join(DST, f), html);
  }
  /* 라이선스 고지: 번들에 포함된 오픈소스 (MIT 는 고지 유지가 조건이다).
     형식만 따른 것도 함께 밝힌다 — 코드를 안 가져왔어도 출처는 적는 편이 맞다.
     Also credits a format we followed: no code was copied, but the source is still worth naming. */
  const SCULPT_CREDIT = [
    "",
    "".padEnd(72, "-"),
    "img2threejs - https://github.com/img2threejs/img2threejs",
    "Apache License 2.0",
    "",
    "Part 3(프롬프트·이미지에서 3D)의 사양 형식은 이 프로젝트의 ObjectSculptSpec 을 따릅니다.",
    "componentTree · attachment(부모 소켓) · materials · sockets 만 쓰는 부분집합이며,",
    "원본의 여덟 단계 조각 파이프라인 구현은 포함하지 않습니다. 코드는 가져오지 않았고 형식만 참고했습니다.",
    "",
    "Part 3 follows this project's ObjectSculptSpec format: a subset (componentTree, attachment",
    "with parent sockets, materials, sockets) without the original eight-pass sculpting pipeline.",
    "No code was copied; only the format was followed.",
    "",
  ].join("\n");
  writeFileSync(join(DST, "LICENSES.txt"), readFileSync(join(threeDir, "LICENSE"), "utf8") + SCULPT_CREDIT);
}

async function squeezeHtml(html, esbuild) {
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  const styles = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)];
  for (const m of styles) {
    const min = (await esbuild.transform(m[1], { loader: "css", minify: true })).code;
    html = html.replace(m[0], `<style>${min}</style>`);
  }
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  for (const m of scripts) {
    const min = (await esbuild.transform(m[1], { loader: "js", minify: true })).code;
    html = html.replace(m[0], `<script>${min}</script>`);
  }
  return html.replace(/\n{2,}/g, "\n");
}

writeFileSync(join(DST, "README.md"), `# VRINGON 회전체 — 정적 데모 (자동 생성)\n\n원본은 저장소의 \`VRINGON_회전체 데모/\` 폴더입니다. 이 폴더는 \`node tools/deploy-docs.mjs\` 가 만든 사본(빌드 ${V}${RAW ? ", 원본 그대로" : ", 보호 빌드"})이며 손으로 고치지 않습니다.\n\n- 공개 URL: https://jhkim1543.github.io/vringon-cad/revolve/\n- 체험 모드: 샘플은 미리 판독한 결과를 재생하고, 올린 도면은 브라우저가 외형을 재서 사양을 만듭니다. 치수 문자까지 읽는 AI 판독은 서버 모드에서 동작합니다.\n`);
/* 크기 보고 */
let total = 0; const walk = (p) => { for (const f of readdirSync(p)) { const q = join(p, f); const st = statSync(q); if (st.isDirectory()) walk(q); else total += st.size; } }; walk(DST);
console.log(`docs/revolve ← 빌드 ${V}${RAW ? " (원본)" : " (보호)"} · ${(total / 1048576).toFixed(1)} MB`);
