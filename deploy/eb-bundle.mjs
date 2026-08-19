/* Elastic Beanstalk 번들을 만든다 — 3dcad.rebuilder.ai (환경 vringon-cad-prod) 에 올리는 zip.
   Builds the Elastic Beanstalk bundle: the zip uploaded to 3dcad.rebuilder.ai (environment vringon-cad-prod).

   들어가는 것 / what goes in:
     · 루트 서버와 그것이 부르는 모듈 (guard.mjs 포함) / the root server and the modules it imports
     · 브라우저가 필요로 하는 것만: 페이지 html · css · js · assets · vendor (정적 허용 목록과 같다)
       only what the browser needs, matching the static allowlist in guard.mjs
     · docs/revolve — Part 1~3 의 보호 빌드 (/revolve/ 로 서빙된다)
     · revolve-server/ — 회전체 서버 (Part 1~3 의 AI). 한글 폴더명을 피해 ASCII 이름으로 옮긴다
       the turned-part server, staged under an ASCII name instead of the Korean folder name
     · Procfile — EB 가 무엇을 실행할지 / what EB runs
   안 들어가는 것 / what stays out: config.local.json · data/ · 도구 · 테스트 · .md · node_modules · .git

   실행 / run:  node deploy/eb-bundle.mjs   →  deploy/eb-bundle.zip */
import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const STAGE = join(ROOT, "deploy", "eb-stage");
const ZIP = join(ROOT, "deploy", "eb-bundle.zip");
const REV = join(ROOT, "VRINGON_회전체 데모");

rmSync(STAGE, { recursive: true, force: true });
mkdirSync(STAGE, { recursive: true });
const cp = (from, to = from) => { const s = join(ROOT, from), d = join(STAGE, to); if (!existsSync(s)) { console.warn("  빠짐 / missing:", from); return; } mkdirSync(join(d, ".."), { recursive: true }); cpSync(s, d, { recursive: true }); };

/* 서버 / server */
for (const f of ["server.mjs", "guard.mjs", "asset-store.mjs", "glb-sanitize.mjs", "spec-validate.mjs"]) cp(f);
for (const f of ["js/catalog.js", "js/program-spec.js", "js/recipes.js"]) cp(f);
/* 브라우저 / browser */
for (const f of readdirSync(ROOT).filter((f) => f.endsWith(".html"))) cp(f);
for (const d of ["css", "js", "assets", "vendor"]) cp(d);
/* Part 1~3 보호 빌드 / the protected build */
cp("docs/revolve", "docs/revolve");
/* 회전체 서버 — 실행에 필요한 것만 / the turned-part server, runtime pieces only */
const rev = (from, to = from) => { const s = join(REV, from), d = join(STAGE, "revolve-server", to); if (!existsSync(s)) { console.warn("  빠짐 / missing: revolve/", from); return; } mkdirSync(join(d, ".."), { recursive: true }); cpSync(s, d, { recursive: true }); };
rev("server.mjs"); rev("package.json");
for (const f of ["extract-prompt.mjs", "describe-prompt.mjs", "sculpt-prompt.mjs"]) rev(`tools/${f}`);
for (const f of ["shaft-schema.js", "shaft-profile.js", "shaft-standards.js", "shaft-verify.js"]) rev(`js/${f}`);
rev("prompts");

/* EB 가 실행할 것. PORT 는 EB 가 준다(8080) — 여기서 정하지 않는다 / what EB runs; PORT comes from EB, never set here */
writeFileSync(join(STAGE, "Procfile"), "web: node server.mjs\n");
/* 비밀이 섞이지 않았는지 마지막 확인 / last check that no secret slipped in */
for (const bad of ["config.local.json", "contacts.jsonl", "deploy", "data", ".git", "node_modules"]) if (existsSync(join(STAGE, bad))) throw new Error(`번들에 ${bad} 가 들어갔습니다`);

/* zip — Windows 에서는 PowerShell, 그 밖에서는 zip / PowerShell on Windows, zip elsewhere */
rmSync(ZIP, { force: true });
if (process.platform === "win32") {
  execFileSync("powershell", ["-NoProfile", "-Command", `Compress-Archive -Path '${STAGE}\\*' -DestinationPath '${ZIP}' -CompressionLevel Optimal`], { stdio: "inherit" });
} else {
  execFileSync("zip", ["-qr", ZIP, "."], { cwd: STAGE, stdio: "inherit" });
}
const size = (p) => { let n = 0; const walk = (d) => { for (const f of readdirSync(d)) { const q = join(d, f); statSync(q).isDirectory() ? walk(q) : (n += statSync(q).size); } }; walk(p); return n; };
console.log(`deploy/eb-bundle.zip ← ${(statSync(ZIP).size / 1e6).toFixed(1)} MB (펼치면 ${(size(STAGE) / 1e6).toFixed(1)} MB)`);
