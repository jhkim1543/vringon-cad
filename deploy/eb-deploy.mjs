/* Elastic Beanstalk 에 올린다: S3 업로드 → 버전 등록 → 환경 갱신 → 될 때까지 기다림 → 바깥에서 확인.
   Deploys to Elastic Beanstalk: upload to S3, register the version, update the environment, wait, then probe from outside.

   먼저 / first:  aws login  (ap-northeast-2),  node deploy/eb-bundle.mjs
   실행 / run:    node deploy/eb-deploy.mjs [--env vringon-cad-prod] [--app Vringon-CAD] [--set KEY=VALUE ...] [--no-wait]

   환경변수(--set)는 여기서만 넘기고 어디에도 적지 않는다. 값은 출력에 찍지 않는다.
   --set values are passed straight through and never logged or written anywhere. */
import { execFileSync } from "node:child_process";
import { statSync, writeFileSync, unlinkSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { tmpdir } from "node:os";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const APP = opt("--app", "Vringon-CAD"), ENV = opt("--env", "vringon-cad-prod"), REGION = opt("--region", "ap-northeast-2");
const SETS = args.flatMap((a, i) => (a === "--set" ? [args[i + 1]] : []));
const ZIP = join(ROOT, "deploy", "eb-bundle.zip");

const aws = (...a) => execFileSync("aws", [...a, "--region", REGION, "--output", "json"], { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] });
const j = (s) => JSON.parse(s);

/* 누구로 들어왔나 / who we are */
const who = j(aws("sts", "get-caller-identity"));
console.log(`계정 ${who.Account} · ${who.Arn.split("/").pop()}`);

/* 환경이 있나 / does the environment exist */
const envs = j(aws("elasticbeanstalk", "describe-environments", "--application-name", APP, "--environment-names", ENV)).Environments;
if (!envs.length) throw new Error(`환경 ${ENV} 이 ${APP} 에 없습니다`);
console.log(`환경 ${ENV} · ${envs[0].Status} · ${envs[0].Health} · 지금 버전 ${envs[0].VersionLabel} · ${envs[0].CNAME}`);

/* S3 로 / to S3 */
const bucket = j(aws("elasticbeanstalk", "create-storage-location")).S3Bucket;
const label = `v${new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14)}`;
const key = `${APP}/${label}.zip`;
console.log(`번들 ${(statSync(ZIP).size / 1e6).toFixed(1)} MB → s3://${bucket}/${key}`);
aws("s3", "cp", ZIP, `s3://${bucket}/${key}`, "--only-show-errors");

/* 버전 등록 / register the version */
aws("elasticbeanstalk", "create-application-version", "--application-name", APP, "--version-label", label,
  "--source-bundle", `S3Bucket=${bucket},S3Key=${key}`, "--description", `deploy ${label}`, "--no-auto-create-application");
console.log(`버전 ${label} 등록`);

/* 환경변수 (있으면) — 임시 파일로 넘겨 셸에 값이 찍히지 않게 한다 / env props via a temp file so values never hit a shell line */
const upd = ["elasticbeanstalk", "update-environment", "--application-name", APP, "--environment-name", ENV, "--version-label", label];
let tmp = null;
if (SETS.length) {
  const items = SETS.map((kv) => { const i = kv.indexOf("="); return { Namespace: "aws:elasticbeanstalk:application:environment", OptionName: kv.slice(0, i), Value: kv.slice(i + 1) }; });
  tmp = join(tmpdir(), `eb-opts-${process.pid}.json`);
  writeFileSync(tmp, JSON.stringify(items));
  upd.push("--option-settings", `file://${tmp}`);
  console.log(`환경변수 ${items.length}개: ${items.map((x) => x.OptionName).join(", ")}`);
}
try { aws(...upd); } finally { if (tmp) unlinkSync(tmp); }
console.log("환경 갱신 요청됨");

if (args.includes("--no-wait")) process.exit(0);
/* 될 때까지 / wait for Ready */
const t0 = Date.now();
for (;;) {
  await new Promise((r) => setTimeout(r, 15000));
  const e = j(aws("elasticbeanstalk", "describe-environments", "--environment-names", ENV)).Environments[0];
  console.log(`  ${Math.round((Date.now() - t0) / 1000)}s  ${e.Status} · ${e.Health} · ${e.VersionLabel}`);
  if (e.Status === "Ready" && e.VersionLabel === label) break;
  if (Date.now() - t0 > 15 * 60e3) throw new Error("15분이 지나도 Ready 가 아닙니다");
}
/* 바깥에서 확인 / probe from outside */
const host = `https://${envs[0].CNAME.includes("elasticbeanstalk") ? "3dcad.rebuilder.ai" : envs[0].CNAME}`;
for (const [p, want] of [["/server.mjs", 404], ["/api/status", 200], ["/revolve/", 302], ["/index.html", 200]]) {
  const r = await fetch(host + p, { redirect: "manual" }).catch(() => null);
  console.log(`  ${r?.status === want ? "OK " : "?? "} ${p} → ${r?.status} (기대 ${want})`);
}
console.log(`끝: ${host}`);
