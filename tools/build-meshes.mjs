/* Generate the public demo's stage-1 meshes with 메시 클라우드, once.

   The static page has no API key, so stage 1 either shows a real mesh that was
   generated ahead of time or it shows nothing that came from 메시 클라우드 at all.
   This runs each sample photograph through the on-prem server's image-to-3D
   path and commits the resulting GLB, so the claim the page makes about stage
   one is a claim the page can actually back up.

   Each mesh costs 메시 클라우드 credits, so an existing file is left alone unless
   --force is passed.

   node tools/build-meshes.mjs [http://host:port] [--force] [id ...]
*/
import { writeFile, mkdir, readFile, stat } from "node:fs/promises";
import { request as httpRequest } from "node:http";
import { basename } from "node:path";

const argv = process.argv.slice(2);
const API = argv.find((a) => a.startsWith("http")) || "http://61.107.200.148:8347";
const FORCE = argv.includes("--force");
const ONLY = argv.filter((a) => !a.startsWith("http") && !a.startsWith("--"));

const SRC = new URL("../docs/assets/samples/drones/", import.meta.url);
const OUT = new URL("../docs/assets/meshes/", import.meta.url);

/* Only samples with their own photograph can be run: image-to-3D needs an
   image, and feeding one drone's photo in under another drone's name would
   reintroduce exactly the mislabelling this is meant to remove. */
const JOBS = [
  { id: "inspect-quad", img: "inspection-quad.jpg" },
  { id: "agri-hexa", img: "agri-hexa.jpg" },
  { id: "map-wing", img: "mapping-fixedwing.jpg" },
  { id: "sar-vtol", img: "sar-vtol.jpg" },
  { id: "cage-inspect", img: "cage-inspect.png" },
  { id: "fpv-racer", img: "fpv-racer.png" },
  { id: "fire-octo", img: "fire-octo.png" },
  { id: "relay-hexa", img: "relay-hexa.png" },
];

/* The first four photographs were collected as JPEG and the ones drawn by
   tools/gen-drone-photos.mjs arrive as PNG, so the media type is read off the
   name rather than assumed — mislabelling a PNG as JPEG makes the upload fail
   inside 메시 클라우드 rather than here, where the message would say so. */
const mimeOf = (name) => (name.toLowerCase().endsWith(".png") ? "image/png" : "image/jpeg");

/* Node's fetch gives up waiting for response headers at 300 seconds and
   reports it as a bare "fetch failed". 메시 클라우드 routinely runs longer than that,
   so this goes through node:http, which imposes no such limit. */
function req(method, path, body) {
  const payload = body ? JSON.stringify(body) : null;
  const u = new URL(API + path);
  return new Promise((resolve, reject) => {
    const r = httpRequest({
      hostname: u.hostname, port: u.port || 80, path: u.pathname, method,
      headers: payload
        ? { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload) }
        : {},
    }, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve({ status: res.statusCode, buf: Buffer.concat(chunks) }));
    });
    r.setTimeout(20 * 60 * 1000, () => r.destroy(new Error("20분 초과")));
    r.on("error", reject);
    r.end(payload);
  });
}

await mkdir(OUT, { recursive: true });
const manifest = {};

for (const job of JOBS) {
  if (ONLY.length && !ONLY.includes(job.id)) continue;
  const dest = new URL(`${job.id}.glb`, OUT);
  process.stdout.write(`${job.id} … `);

  if (!FORCE) {
    try {
      const s = await stat(dest);
      if (s.size > 1000) {
        manifest[job.id] = { file: `${job.id}.glb`, bytes: s.size };
        console.log(`이미 있음 (${(s.size / 1048576).toFixed(1)}MB) — 건너뜁니다`);
        continue;
      }
    } catch { /* not built yet */ }
  }

  const t0 = Date.now();
  try {
    const photo = await readFile(new URL(job.img, SRC));
    const dataUri = `data:${mimeOf(job.img)};base64,${photo.toString("base64")}`;
    const { status, buf } = await req("POST", "/api/mesh3d", {
      imageB64: dataUri, engine: "cloud", preferCloud: true,
    });
    const j = JSON.parse(buf.toString("utf8"));
    if (!j.ok || !j.url) throw new Error(j.error || `HTTP ${status}`);

    const dl = await req("GET", j.url);
    if (dl.status !== 200 || dl.buf.length < 1000) throw new Error(`다운로드 실패 ${dl.status}`);
    await writeFile(dest, dl.buf);
    manifest[job.id] = { file: `${job.id}.glb`, bytes: dl.buf.length };
    console.log(`${j.engine} · ${(dl.buf.length / 1048576).toFixed(1)}MB · `
      + `${((Date.now() - t0) / 1000).toFixed(0)}초 · ${basename(j.url)}`);
  } catch (e) {
    console.log(`실패 — ${e.message}`);
  }
}

/* The page reads this to decide whether stage 1 has a real mesh for a sample
   or has to fall back to the compiled specification. */
const idxUrl = new URL("index.json", OUT);
let prev = {};
try { prev = JSON.parse(await readFile(idxUrl, "utf8")); } catch { /* first run */ }
await writeFile(idxUrl, JSON.stringify({ ...prev, ...manifest }, null, 2));
console.log(`\n메시 ${Object.keys({ ...prev, ...manifest }).length}종을 docs/assets/meshes/에 기록했습니다.`);
