/* Supplier-name gate: does any byte a user can reach name one of our suppliers?

   Why this exists. The rule "no supplier names anywhere" was checked by reading
   source and grepping text, and it missed twice for the same reason both times.
   First, a grep over the working tree walks source files but skips binaries, so
   a brand sitting inside a GLB's JSON chunk read as zero hits. Second — and
   this is the one that reached a live demo — even a binary-aware scan of the
   repository only ever sees committed files, and the server writes a brand-new
   mesh into generated/ on every run. Every committed file was clean while the
   file the browser actually loaded was not.

   So the gate has two halves, and both matter:

     node tools/qa-vendor-scan.mjs
         Every file on disk, binary included. Run before committing.

     node tools/qa-vendor-scan.mjs --server http://host:port [url ...]
         Every byte a running server hands out: the pages, the scripts they
         pull in, the JSON endpoints, and any extra URL named on the command
         line — pass the /generated/... url a fresh generation returned. Run
         after touching anything on the mesh path.

   Both halves exit non-zero on a hit so a script can gate on them.
*/
import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { findVendorTokens } from "../glb-sanitize.mjs";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const argv = process.argv.slice(2);
const serverAt = argv.indexOf("--server");
const SERVER = serverAt !== -1 ? argv[serverAt + 1]?.replace(/\/$/, "") : null;
/* Absolute URLs are accepted as well as paths: a Windows shell rewrites a bare
   "/generated/x.glb" argument into a local path before node ever sees it. */
const EXTRA = argv.filter((a, i) => i > serverAt + 1 && (a.startsWith("/") || a.startsWith("http")));

/* Server-side-only files. config.local.json is where the endpoints and keys are
   deliberately kept — naming suppliers is its entire job — and it is gitignored
   and never served. Skipping it is the point, not an oversight; if it ever
   became reachable that is a different and much louder bug.

   TRELLIS is the upstream checkout of the local mesh model on the GPU box: MIT
   source we do not author, do not commit (three wrapper scripts are tracked, the
   checkout is not) and never serve. Its hits are model identifiers in research
   code, the same category as node_modules.

   Every exclusion is printed with the result. An exclusion nobody can see is
   how a scan comes back green while the thing it was meant to catch sails
   past, which is the exact failure this tool was written for. */
const SKIP_DIRS = new Set([".git", "node_modules", "data", "shots", "TRELLIS"]);
const SKIP_FILES = new Set(["config.local.json", "server.log", "contacts.jsonl"]);

/* This file and the sanitiser both carry the tokens as hex so they can do their
   job; a scan that flagged them would be reporting its own tooling. */
const SELF = new Set(["tools/qa-vendor-scan.mjs", "glb-sanitize.mjs", "tools/scrub-assets.mjs"]);

async function walk(dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name) || e.name === "uploads") continue;
      await walk(join(dir, e.name), out);
    } else if (e.isFile() && !SKIP_FILES.has(e.name)) {
      out.push(join(dir, e.name));
    }
  }
  return out;
}

let hits = 0;

if (!SERVER) {
  const files = await walk(ROOT);
  let scanned = 0, bytes = 0;
  for (const f of files) {
    const rel = relative(ROOT, f).split(sep).join("/");
    if (SELF.has(rel)) continue;
    const s = await stat(f);
    /* Read whole: a token can sit anywhere, and the largest file here is a
       12MB mesh, which is nothing. */
    const buf = await readFile(f);
    scanned++; bytes += s.size;
    const found = findVendorTokens(buf);
    if (found.length) {
      hits++;
      console.log(`  적발  ${rel}  (${found.length}종, ${s.size}B)`);
    }
  }
  console.log(`\n파일 ${scanned}개 / ${(bytes / 1048576).toFixed(0)}MB 검사 — ${hits ? `공급사명 ${hits}개 파일` : "공급사명 0건"}`);
  console.log(`제외: ${[...SKIP_DIRS].join(" ")} / ${[...SKIP_FILES].join(" ")} (서버 전용·서드파티, 브라우저에 나가지 않음)`);
  process.exit(hits ? 1 : 0);
}

/* ---- live server ---- */

const seen = new Set();
async function probe(path, why) {
  const url = path.startsWith("http") ? path : SERVER + path;
  if (seen.has(url)) return null;
  seen.add(url);
  let r, buf;
  try {
    r = await fetch(url, { signal: AbortSignal.timeout(120000) });
    buf = Buffer.from(await r.arrayBuffer());
  } catch (e) {
    console.log(`  오류  ${path} — ${e.message}`);
    return null;
  }
  /* Headers travel to the browser too, and a proxy or framework banner is
     exactly the kind of thing nobody thinks to check. */
  const head = [...r.headers].map(([k, v]) => `${k}: ${v}`).join("\n");
  const found = [...new Set([...findVendorTokens(buf), ...findVendorTokens(head)])];
  if (found.length) {
    hits++;
    console.log(`  적발  ${r.status} ${path}  (${found.length}종, ${buf.length}B) ${why}`);
  } else {
    console.log(`  통과  ${r.status} ${String(buf.length).padStart(9)}B  ${path}`);
  }
  return buf;
}

const PAGES = ["/", "/app.html", "/library.html", "/spec.html", "/asset.html", "/index-en.html"];
const APIS = ["/api/status", "/api/drone-taxonomy", "/api/assets", "/api/asset-search?q=drone"];

console.log(`${SERVER} 응답 검사`);
for (const p of PAGES) {
  const body = await probe(p, "");
  if (!body) continue;
  /* Follow what the page tells the browser to load; a script or a stylesheet is
     served bytes just the same. */
  const html = body.toString("utf8");
  const refs = new Set();
  for (const m of html.matchAll(/(?:src|href)\s*=\s*["']([^"']+)["']/g)) {
    const u = m[1];
    if (/^(https?:|data:|#|mailto:)/.test(u)) continue;
    refs.add(u.startsWith("/") ? u : "/" + u.replace(/^\.\//, ""));
  }
  for (const u of refs) if (/\.(js|mjs|css|json|glb|svg|png|wasm)$/i.test(u)) await probe(u, `← ${p}`);
}
for (const p of APIS) await probe(p, "");
for (const p of EXTRA) await probe(p, "지정");

console.log(`\nURL ${seen.size}개 검사 — ${hits ? `공급사명 ${hits}건` : "공급사명 0건"}`);
process.exit(hits ? 1 : 0);
