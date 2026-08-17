/* 화면에 나오는 한국어를 모아 사전 뼈대를 만든다.
   ① html 의 텍스트 노드와 title/placeholder 속성  ② js 의 문자열·템플릿 리터럴 중 한글이 든 것
   숫자가 섞인 문장은 {0} 자리표시자로 바꿔 패턴 하나로 묶는다(번역 항목 수를 줄인다).
   node tools/i18n-extract.mjs [--missing]   (--missing 이면 사전에 없는 것만) */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const HTML = ["index.html", "revolve.html", "assembly.html"];
const JS = ["js/app.js", "js/part2.js", "js/tour.js", "js/part-types.js", "js/multiview.js", "js/shaft-mates.js", "js/shaft-assembly.js", "js/shaft-extract.js", "js/views.js", "js/ocr-dims.js", "js/shaft-verify.js", "js/shaft-schema.js", "js/shaft-cad.js", "js/shaft-export.js"];
const hasKo = (s) => /[가-힣]/.test(s);
const found = new Map();   /* 원문 → {where:Set} */
const add = (s, where) => {
  const t = s.replace(/\s+/g, " ").trim();
  if (!t || !hasKo(t)) return;
  if (!found.has(t)) found.set(t, new Set());
  found.get(t).add(where);
};

/* ---- HTML: 태그를 지우고 텍스트 노드만 (script/style 제외) */
for (const f of HTML) {
  let s = readFileSync(root + f, "utf8");
  s = s.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "").replace(/<!--[\s\S]*?-->/g, "");
  /* 속성 */
  for (const m of s.matchAll(/\b(title|placeholder|aria-label)="([^"]*)"/g)) add(m[2], f + ":attr");
  /* 텍스트 노드 */
  for (const chunk of s.split(/<[^>]*>/)) add(chunk, f);
}
/* ---- JS: 주석을 지우고 문자열/템플릿 */
for (const f of JS) {
  if (!existsSync(root + f)) continue;
  let s = readFileSync(root + f, "utf8");
  s = s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:"'`\\])\/\/[^\n]*/g, "$1");
  for (const m of s.matchAll(/"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|`((?:[^`\\]|\\.)*)`/g)) {
    const raw = m[1] ?? m[2] ?? m[3] ?? "";
    if (!hasKo(raw)) continue;
    add(raw, f);
  }
}
/* ---- 숫자·보간을 자리표시자로 */
const pat = (s) => s.replace(/\$\{[^}]*\}/g, "{}").replace(/\d+(?:[.,]\d+)?/g, "{n}");
const byPattern = new Map();
for (const [s, where] of found) {
  const p = pat(s);
  if (!byPattern.has(p)) byPattern.set(p, { sample: s, where: new Set() });
  for (const w of where) byPattern.get(p).where.add(w);
}
const dictPath = root + "js/i18n-en.js";
let known = new Set();
if (existsSync(dictPath) && process.argv.includes("--missing")) {
  const txt = readFileSync(dictPath, "utf8");
  for (const m of txt.matchAll(/^\s*"((?:[^"\\]|\\.)*)":/gm)) known.add(m[1].replace(/\\"/g, '"'));
}
const out = [...byPattern.entries()].filter(([p]) => !known.has(p)).sort((a, b) => a[0].localeCompare(b[0]));
console.log(`원문 ${found.size}개 → 패턴 ${byPattern.size}개${known.size ? ` (사전에 없는 것 ${out.length}개)` : ""}\n`);
for (const [p, v] of out) console.log(JSON.stringify(p) + ": \"\",  /* " + [...v.where].slice(0, 2).join(",") + " */");
