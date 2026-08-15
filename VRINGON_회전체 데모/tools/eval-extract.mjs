/* M3/M4 평가 — 골든 12종(+옵션: 합성 N장)에 대해 판독기를 돌리고 정답과 대조한 리포트를 쓴다.
   판독기: server(/api/extract, 시각 LLM — 서버가 떠 있어야 함) | silhouette(브라우저 결정론 판독의 Node 판) | both
   실행:  node tools/eval-extract.mjs [--method both] [--tier text|plan] [--synthetic 30] [--save] [--server http://localhost:8349]
   --save 를 주면 골든 샘플의 서버 판독 결과를 samples/<id>/extracted.json 에 저장한다(공개 데모 재생용).
   리포트: eval/report-<method>-<tier>.json + eval/report.md (벤더명 없음, 역할명만) */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { GOLDENS } from "./goldens.mjs";
import { sampleShaft } from "../js/shaft-sampler.js";
import { drawShaft, toSVG } from "../js/shaft-drawing.js";
import { extractHeuristic } from "../js/shaft-extract.js";
import { goldenMetrics, aggregateMetrics, verifyExtraction } from "../js/shaft-verify.js";
import { totalLength } from "../js/shaft-profile.js";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const method = opt("--method", "both");
const tier = opt("--tier", "text");
const nSyn = Number(opt("--synthetic", "0")) || 0;
const server = opt("--server", "http://localhost:8349");
const save = args.includes("--save");
const sharp = (await import("sharp")).default;
mkdirSync(`${ROOT}eval`, { recursive: true });

async function rasterize(svg, widthPx) {
  const { data, info } = await sharp(Buffer.from(svg)).resize({ width: widthPx }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  return { width: info.width, height: info.height, data: new Uint8ClampedArray(data.buffer, data.byteOffset, data.length) };
}
async function pngDataUrl(svg, widthPx = 1800) {
  const buf = await sharp(Buffer.from(svg)).resize({ width: widthPx }).flatten({ background: "#ffffff" }).png().toBuffer();
  return `data:image/png;base64,${buf.toString("base64")}`;
}

const cases = GOLDENS.map((g) => ({ id: g.id, gold: g, kind: "golden" }));
for (let k = 0; k < nSyn; k++) { const g = sampleShaft(1000 + k); if (g.meta.valid) cases.push({ id: g.id, gold: g, kind: "synthetic" }); }

const rows = [];
for (const c of cases) {
  const L = totalLength(c.gold);
  const svg = toSVG(drawShaft(c.gold, { scale: "auto", seed: 1 }));
  const img = await rasterize(svg, 2400);
  const row = { id: c.id, kind: c.kind, L, archetype: c.gold.meta?.archetype || c.gold.part_class };
  /* ① 실루엣 판독 (전체 길이는 정답값을 준다 — 브라우저에서는 사용자가 입력하거나 AI 가 읽는다) */
  const t0 = Date.now();
  const sil = extractHeuristic(img, { overallLength: L });
  row.silhouette = sil.ok ? { ms: Date.now() - t0, metrics: goldenMetrics(sil.dsl, c.gold), self: verifyExtraction({ dsl: sil.dsl, inputSilhouette: sil.silhouette }) } : { error: sil.notes };
  /* ② 서버(시각 LLM) — 브라우저와 같은 힌트를 보낸다 */
  if (method === "server" || method === "both") {
    try {
      const hints = sil.ok ? { draft: sil.dsl, silhouette: { L: sil.silhouette.L, top: Array.from(sil.silhouette.top), bottom: Array.from(sil.silhouette.bottom) }, sectioned: !!sil.dsl.bore } : null;
      const t1 = Date.now();
      const r = await fetch(`${server}/api/extract`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ imageB64: await pngDataUrl(svg), hints, tier }) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || `HTTP ${r.status}`);
      row.server = { ms: Date.now() - t1, provider: j.provider, repaired: j.repaired, valid: j.validation?.ok, verify: j.verify, metrics: goldenMetrics(j.dsl, c.gold), notes: j.notes };
      if (save && c.kind === "golden") {
        writeFileSync(`${ROOT}samples/${c.id}/extracted.json`, JSON.stringify({ ...j, evaluated: { tier, metrics: row.server.metrics, date: new Date().toISOString().slice(0, 10) } }, null, 1));
      }
    } catch (e) { row.server = { error: e.message }; }
  }
  const sm = row.silhouette?.metrics, vm = row.server?.metrics;
  console.log(c.id.padEnd(18), c.kind.padEnd(9),
    sm ? `실루엣 segF1 ${sm.segment.f1.toFixed(2)} dim ${sm.dim_rate.toFixed(2)} iou ${sm.iou.toFixed(3)}` : "실루엣 실패",
    vm ? ` | 서버(${row.server.provider}${row.server.repaired ? ",수리" : ""}) segF1 ${vm.segment.f1.toFixed(2)} feat ${vm.feature.f1.toFixed(2)} tr ${vm.transition.f1.toFixed(2)} dim ${vm.dim_rate.toFixed(2)} iou ${vm.iou.toFixed(3)} exact ${vm.exact ? "✓" : "✗"} ${row.server.ms}ms` : row.server?.error ? ` | 서버 오류: ${row.server.error}` : "");
  rows.push(row);
}
const report = {
  date: new Date().toISOString(), method, tier, n: rows.length,
  silhouette: aggregateMetrics(rows.filter((r) => r.silhouette?.metrics).map((r) => r.silhouette.metrics)),
  server: rows.some((r) => r.server?.metrics) ? aggregateMetrics(rows.filter((r) => r.server?.metrics).map((r) => r.server.metrics)) : null,
  server_ms_mean: rows.some((r) => r.server?.ms) ? Math.round(rows.filter((r) => r.server?.ms).reduce((a, r) => a + r.server.ms, 0) / rows.filter((r) => r.server?.ms).length) : null,
  server_repaired: rows.filter((r) => r.server?.repaired).length,
  /* 보정 데이터: (신뢰도, 실제 정확도) 쌍 */
  calibration: rows.filter((r) => r.server?.verify).map((r) => ({ id: r.id, confidence: r.server.verify.confidence, iou_reported: r.server.verify.iou, dim_rate_reported: r.server.verify.dims?.rate ?? null, seg_f1: r.server.metrics.segment.f1, exact: r.server.metrics.exact })),
  rows,
};
const fname = `${ROOT}eval/report-${method}-${tier}.json`;
writeFileSync(fname, JSON.stringify(report, null, 1));
/* 마크다운 요약 */
const pct = (v) => (v == null ? "-" : `${(v * 100).toFixed(0)}%`);
const md = [];
md.push(`# 판독 평가 리포트 (${report.date.slice(0, 10)}, method=${method}, tier=${tier}, n=${report.n})`, "");
md.push(`| 판독기 | 유효율 | 세그먼트 F1 | 피처 F1 | 전이 F1 | 홈 F1 | 치수 일치율 | 실루엣 IoU | 완전 일치 | 보어 정답 |`);
md.push(`|---|---|---|---|---|---|---|---|---|---|`);
const S = report.silhouette; md.push(`| 실루엣(결정론) | ${pct(S.valid_rate)} | ${pct(S.segment_f1)} | ${pct(S.feature_f1)} | ${pct(S.transition_f1)} | ${pct(S.groove_f1)} | ${pct(S.dim_rate)} | ${S.iou.toFixed(3)} | ${pct(S.exact_rate)} | ${pct(S.bore_ok_rate)} |`);
if (report.server) { const V = report.server; md.push(`| 시각 LLM (${tier} 티어, 힌트+수리) | ${pct(V.valid_rate)} | ${pct(V.segment_f1)} | ${pct(V.feature_f1)} | ${pct(V.transition_f1)} | ${pct(V.groove_f1)} | ${pct(V.dim_rate)} | ${V.iou.toFixed(3)} | ${pct(V.exact_rate)} | ${pct(V.bore_ok_rate)} |`); }
md.push("", `평균 응답 시간: ${report.server_ms_mean ?? "-"} ms · 수리 라운드 발동: ${report.server_repaired}/${report.n}`, "");
md.push(`| 샘플 | 종류 | 실루엣 segF1 | 서버 segF1 | 서버 피처F1 | 서버 치수 | 서버 IoU | 완전일치 | ms |`, `|---|---|---|---|---|---|---|---|---|`);
for (const r of rows) md.push(`| ${r.id} | ${r.kind} | ${r.silhouette?.metrics ? pct(r.silhouette.metrics.segment.f1) : "-"} | ${r.server?.metrics ? pct(r.server.metrics.segment.f1) : "-"} | ${r.server?.metrics ? pct(r.server.metrics.feature.f1) : "-"} | ${r.server?.metrics ? pct(r.server.metrics.dim_rate) : "-"} | ${r.server?.metrics ? r.server.metrics.iou.toFixed(3) : "-"} | ${r.server?.metrics ? (r.server.metrics.exact ? "✓" : "✗") : "-"} | ${r.server?.ms ?? "-"} |`);
writeFileSync(`${ROOT}eval/report-${method}-${tier}.md`, md.join("\n") + "\n");
console.log(`\n${md.slice(0, 6).join("\n")}\n→ ${fname}`);
