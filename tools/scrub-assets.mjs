/* Strip upstream supplier identity out of generated binary assets.

   Meshes and photos arrive from external services that stamp their own brand
   into the file: a GLB carries asset.generator plus material/mesh/node names,
   and a PNG carries a C2PA provenance manifest in a caBX chunk. None of that
   is visible in an editor, so a text grep over the repo reports zero while the
   committed binary still names the supplier — which is exactly how four new
   meshes and four new photos reached a release branch with the brand intact.

   The second miss was narrower and worse. Only the files already committed were
   ever cleaned; the server writes a new mesh into generated/ on every run, and
   that path was never covered. A live demo showed the supplier's node name in
   the part list while every committed file was spotless. generated/ is in the
   scan list now, and the same scrub runs inside the server at write time
   (glb-sanitize.mjs) so this tool is the safety net rather than the only net.

   GLB scrubbing is delegated to glb-sanitize.mjs, which rebuilds the JSON chunk
   rather than swapping bytes — that is what allows a branded node name to be
   replaced by a readable part name instead of another opaque token.

   The PNG edit drops whole ancillary chunks. IHDR/IDAT/IEND are untouched, so
   the decoded image is identical pixel for pixel and any silhouette or
   similarity number measured from it stays valid.

   node tools/scrub-assets.mjs [--check] [--dir <path>] [--rename-opaque]
     --check          report without writing (exit 1 if anything is dirty)
     --dir            scrub one directory instead of the built-in list; used to
                      clean the on-prem generated/ tree over ssh
     --rename-opaque  also replace node names that are machine ids, which is
                      what the old byte-swap scrub left behind in the meshes it
                      cleaned. Off by default: it rewrites files that contain no
                      supplier name at all, so it should be a deliberate run.
*/
import { readdir, readFile, writeFile } from "node:fs/promises";
import { findVendorTokens, sanitizeMeshBytes, glbPartNames } from "../glb-sanitize.mjs";

const ROOT = new URL("../", import.meta.url);
const argv = process.argv.slice(2);
const CHECK_ONLY = argv.includes("--check");
const dirArg = argv.indexOf("--dir");
const ONE_DIR = dirArg !== -1 ? argv[dirArg + 1] : null;
const RENAME_OPAQUE = argv.includes("--rename-opaque");

/* PNG chunks that only ever carry metadata. Pixel chunks are never candidates
   for removal, so a scrub can not alter the image. */
const PNG_META = new Set(["caBX", "eXIf", "iTXt", "tEXt", "zTXt"]);

function scrubPng(buf) {
  if (buf.length < 8 || buf.readUInt32BE(0) !== 0x89504e47) return null;
  const keep = [buf.subarray(0, 8)];
  const dropped = [];
  let off = 8;
  while (off + 8 <= buf.length) {
    const len = buf.readUInt32BE(off);
    const type = buf.toString("latin1", off + 4, off + 8);
    const end = off + 12 + len;
    if (end > buf.length) break;
    const chunk = buf.subarray(off, end);
    /* Only drop a metadata chunk that actually names a vendor; an unrelated
       tEXt caption is somebody's content and not ours to delete. */
    if (PNG_META.has(type) && findVendorTokens(chunk).length) dropped.push(`${type}(${len}B)`);
    else keep.push(chunk);
    off = end;
    if (type === "IEND") break;
  }
  return dropped.length ? { buf: Buffer.concat(keep), notes: dropped } : null;
}

/* generated/ first: it is the one the server writes to, so a stale file there
   is the difference between a clean repo and a branded demo. */
const DIRS = ONE_DIR
  ? [ONE_DIR]
  : ["generated/", "docs/assets/meshes/", "docs/assets/samples/drones/", "docs/assets/views/", "assets/"];

let changed = 0;
let remaining = 0;
let scanned = 0;

for (const dir of DIRS) {
  const base = ONE_DIR ? new URL(`file://${dir.replace(/\\/g, "/").replace(/\/?$/, "/")}`) : new URL(dir, ROOT);
  let names = [];
  try {
    names = await readdir(base, { recursive: true });
  } catch {
    continue;
  }
  for (const name of names.sort()) {
    if (!/\.(glb|gltf|png|jpe?g)$/i.test(name)) continue;
    const url = new URL(name.replace(/\\/g, "/"), base);
    const buf = await readFile(url);
    scanned++;
    const isGlb = /\.glb$/i.test(name);
    /* A clean file is skipped, except that --rename-opaque is explicitly about
       files that are already clean and still unreadable. */
    if (!findVendorTokens(buf).length && !(isGlb && RENAME_OPAQUE)) continue;

    const label = (ONE_DIR ? "" : dir) + name;
    let res = null;
    try {
      res = isGlb ? sanitizeMeshBytes(buf, { renameOpaque: RENAME_OPAQUE }) : scrubPng(buf);
      if (res && isGlb && !res.notes.length) continue; // nothing to do
    } catch (e) {
      console.log(`  실패   ${label} — ${e.message}`);
      remaining++;
      continue;
    }
    if (!res) {
      console.log(`  남음   ${label} — 자동 제거 대상 아님`);
      remaining++;
      continue;
    }
    if (findVendorTokens(res.buf).length) {
      console.log(`  남음   ${label} — 제거 후에도 공급사명이 있습니다`);
      remaining++;
      continue;
    }
    if (CHECK_ONLY) {
      console.log(`  검출   ${label} — ${res.notes.join(" | ") || "공급사명 포함"}`);
      remaining++;
      continue;
    }
    await writeFile(url, res.buf);
    changed++;
    const parts = /\.glb$/i.test(name) ? ` 파트=${JSON.stringify(glbPartNames(res.buf))}` : "";
    console.log(`  세척   ${label}  ${buf.length} -> ${res.buf.length}B${parts}`);
    for (const n of res.notes) console.log(`           ${n}`);
  }
}

if (CHECK_ONLY) {
  console.log(remaining ? `\n${scanned}개 검사, 공급사명이 남은 파일 ${remaining}개` : `\n${scanned}개 검사, 생성 자산에 공급사명 0건.`);
  process.exit(remaining ? 1 : 0);
}
console.log(`\n${scanned}개 검사, ${changed}개 세척.${remaining ? ` 손대지 못한 파일 ${remaining}개.` : ""}`);
process.exit(remaining ? 1 : 0);
