/* 입력 가드 회귀: "회전체 정면도가 아닌 도면" 을 판독 전에 잡아내는가.
   ① 정상(샘플 17종 × 3해상도 + 열화 스캔)은 단 한 건도 막히면 안 된다.
   ② 음성 표본(조립체·유기 윤곽·원형 투상)은 대부분 판독을 멈춰야 한다.
   node tools/test-input-guard.mjs        (sharp 가 없으면 건너뛴다) */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { extractHeuristic } from "../js/shaft-extract.js";

let sharp = null;
try { sharp = (await import("sharp")).default; } catch { console.log("sharp 없음 — 입력 가드 테스트 건너뜀"); process.exit(0); }

const url = (p) => new URL(p, import.meta.url);
const toImageData = async (buf, width) => {
  const { data, info } = await sharp(buf).resize({ width }).flatten({ background: "#ffffff" }).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  return { width: info.width, height: info.height, data };
};
const read = async (buf, w) => extractHeuristic(await toImageData(buf, w), { overallLength: 0 });

let fail = 0, nOk = 0;
/* ① 정상 도면: 막히면 안 된다 */
const idx = JSON.parse(readFileSync(url("../samples/index.json")));
for (const s of idx.samples) {
  const svg = readFileSync(url(`../samples/${s.id}/drawing.svg`));
  for (const w of [1200, 1800, 2400]) {
    const r = await read(svg, w);
    if (!r.ok) continue;                        /* 판독 실패는 이 테스트의 대상이 아니다 */
    nOk++;
    if (r.verdict === "not_revolve") { fail++; console.log(`  X 정상 도면을 막았다: ${s.id}@${w} — ${r.reasons[0]}`); }
  }
}
const scanDir = url("../data/dataset-smoke/");
if (existsSync(scanDir)) {
  for (const dir of ["train", "dev"]) {
    for (const f of readdirSync(new URL(dir, scanDir)).filter((x) => x.endsWith(".scan.jpg"))) {
      const r = await read(readFileSync(new URL(`${dir}/${f}`, scanDir)), 1600);
      if (!r.ok) continue;
      nOk++;
      if (r.verdict === "not_revolve") { fail++; console.log(`  X 정상 스캔을 막았다: ${f} — ${r.reasons[0]}`); }
    }
  }
}
console.log(`정상 도면 ${nOk}건 중 잘못 막은 것 ${fail}건`);

/* ② 음성 표본: 3해상도 중 2번 이상 막아야 한다 */
for (const f of readdirSync(url("./fixtures")).filter((x) => x.startsWith("negative-"))) {
  const buf = readFileSync(url(`./fixtures/${f}`));
  const hits = [];
  for (const w of [1100, 1600, 2200]) { const r = await read(buf, w); hits.push(r.ok && r.verdict === "not_revolve"); }
  const n = hits.filter(Boolean).length;
  const name = f.replace("negative-", "").replace(".svg", "");
  if (n >= 2) console.log(`PASS ${name.padEnd(18)} 3해상도 중 ${n}회 차단`);
  else { fail++; console.log(`  X ${name} 차단 ${n}/3 — 가드가 약하다`); }
}
if (fail) { console.log(`\n실패 ${fail}건`); process.exit(1); }
console.log("all input guard tests passed");
