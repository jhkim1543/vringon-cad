/* Stamp a build version onto every cacheable asset the static demo loads.

   GitHub Pages serves JavaScript with max-age=600 and the module specifiers
   carry no version, so for ten minutes after a deploy a browser keeps running
   the previous build. That is not a hypothetical: a verification script of
   mine read a stale copy from the CDN and reported a fix as missing when it
   had shipped. A query string on each specifier makes a new build a new URL,
   so the moment the HTML is fresh the modules are too.

   The hash covers js/ and docs/specs/, so changing either invalidates. Run
   after copying js/ into docs/js/ and before committing.

   node tools/stamp-version.mjs
*/
import { readdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const ROOT = new URL("../", import.meta.url);
const hash = createHash("sha256");

/* Hash the sources, never the stamped copies: stamping changes docs/js, and
   hashing that would move the hash every run and never converge. */
for (const dir of ["js/", "docs/specs/"]) {
  const d = new URL(dir, ROOT);
  for (const f of (await readdir(d)).sort()) {
    if (!/\.(js|json)$/.test(f)) continue;
    /* Files starting with an underscore are measurements of the sources, not
       sources: _similarity.json is derived from the specs and never fetched by
       the page, so hashing it would move the build stamp every time the metric
       was re-run without a single shipped byte having changed. */
    if (f.startsWith("_")) continue;
    hash.update(f);
    hash.update(await readFile(new URL(f, d)));
  }
}
const V = hash.digest("hex").slice(0, 8);

/* Relative specifiers only. "three" and "three/addons/…" are bare specifiers
   resolved through the import map, and a query string there would not match
   the map's prefix. */
const stampImports = (src) =>
  src.replace(/(from\s+")(\.\/[^"?]+\.js)(\?v=[0-9a-f]+)?(")/g, `$1$2?v=${V}$4`);

let touched = 0;
const htmlUrl = new URL("docs/index.html", ROOT);
let html = await readFile(htmlUrl, "utf8");
const before = html;
html = stampImports(html);
// the page reads specs and meshes at runtime; BUILD rides along in those URLs
html = html.replace(/const BUILD = "[^"]*";/, `const BUILD = "${V}";`);
if (html !== before) { await writeFile(htmlUrl, html); touched++; }

const jsDir = new URL("docs/js/", ROOT);
for (const f of await readdir(jsDir)) {
  if (!f.endsWith(".js")) continue;
  const u = new URL(f, jsDir);
  const src = await readFile(u, "utf8");
  const out = stampImports(src);
  if (out !== src) { await writeFile(u, out); touched++; }
}

console.log(`빌드 ${V} · ${touched}개 파일에 버전을 찍었습니다.`);
