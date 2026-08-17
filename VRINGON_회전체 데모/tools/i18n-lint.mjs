/* 사전 점검: 중복 키와 위험한 만능 패턴을 찾는다. --fix 는 중복을 지운다(뒤에 온 것을 남긴다: JS 객체 규칙과 같다).
   node tools/i18n-lint.mjs [--fix] */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const p = fileURLToPath(new URL("../js/i18n-en.js", import.meta.url));
const src = readFileSync(p, "utf8");
const fix = process.argv.includes("--fix");

/* 항목 한 줄(또는 두 줄) 단위로 자른다: 키가 줄 맨 앞에 오는 형태만 쓴다 */
const lines = src.split("\n");
const keyOf = (line) => { const m = /^\s*"((?:[^"\\]|\\.)*)":/.exec(line); return m ? m[1] : null; };
const seen = new Map();
const dupes = [];
lines.forEach((line, i) => {
  const k = keyOf(line);
  if (!k) return;
  if (seen.has(k)) dupes.push({ key: k, first: seen.get(k) + 1, again: i + 1 });
  seen.set(k, i);
});
/* 위험한 것은 이름 없는 {} (아무 토막이나 문다). {n} 은 숫자만 물어 안전하다.
   "{}. {}" 같은 패턴이 실제로 모든 문장을 삼켜 번역도 누락 기록도 막았다. */
/* {} 로 시작하면서 고정 문구가 거의 없는 것만 위험하다("{}. {}" 가 실제로 모든 문장을 삼켰다).
   {} 로 시작해도 뒤에 긴 문장이 붙어 있으면 그 문장이 자물쇠 역할을 한다. */
const core = (k) => k.replace(/\{n?\}/g, "").replace(/[\s.,·()\[\]:{}%×⌀\-–]/g, "");
const loose = [...seen.keys()].filter((k) => k.trimStart().startsWith("{}") && core(k).length < 8);

console.log(`항목 ${seen.size}개 · 중복 ${dupes.length}개 · 만능 패턴 ${loose.length}개`);
for (const d of dupes) console.log(`  중복 ${JSON.stringify(d.key).slice(0, 60)}  ${d.first}행과 ${d.again}행`);
for (const l of loose) console.log(`  만능 ${JSON.stringify(l)} — {} 로 시작하면 다른 문장까지 삼킨다. 앞에 고정 문구를 붙이거나 호출부에서 t() 로 나눠라`);

if (fix && dupes.length) {
  /* 앞선 중복 줄을 지운다. 항목이 두 줄로 접힌 경우(값이 다음 줄) 그 줄까지 */
  const drop = new Set();
  for (const d of dupes) {
    const i = d.first - 1;
    drop.add(i);
    if (!/,\s*$/.test(lines[i]) && lines[i + 1] !== undefined && !keyOf(lines[i + 1])) drop.add(i + 1);
  }
  writeFileSync(p, lines.filter((_, i) => !drop.has(i)).join("\n"));
  console.log(`\n중복 ${drop.size}줄을 지웠습니다.`);
}
process.exit(loose.length ? 1 : 0);
