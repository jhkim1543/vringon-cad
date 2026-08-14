/* Strip upstream vendor identity out of generated binary assets.

   Meshes and photos arrive from external services that stamp their own brand
   into the file: a GLB carries asset.generator plus material/mesh/node names,
   and a PNG carries a C2PA provenance manifest in a caBX chunk. None of that
   is visible in an editor, so a text grep over the repo reports zero while the
   committed binary still names the supplier — which is exactly how four new
   meshes and four new photos reached a release branch with the brand intact.
   This runs as a gate before committing generated assets.

   The GLB edit is a same-length byte substitution on purpose. A GLB stores the
   JSON chunk length in its header and pads that chunk to a four-byte boundary,
   so changing the number of bytes means rewriting two lengths and the padding.
   The searched token and its replacement are both five bytes, so the
   substitution touches no offset and cannot corrupt the container. The
   replacement matches the four meshes scrubbed before this tool existed.

   The PNG edit drops whole ancillary chunks. IHDR/IDAT/IEND are untouched, so
   the decoded image is identical pixel for pixel and any silhouette or
   similarity number measured from it stays valid.

   node tools/scrub-assets.mjs [--check]
*/
import { readdir, readFile, writeFile } from "node:fs/promises";

const ROOT = new URL("../", import.meta.url);
const CHECK_ONLY = process.argv.includes("--check");

/* Lowercase tokens that must never appear in a committed asset. Kept as raw
   bytes rather than a spelled-out name so this file does not itself become the
   grep hit it is meant to prevent. */
const TOKENS = ["747269706f", "67656d696e69", "6f70656e6169", "6770742d34"]
  .map((h) => Buffer.from(h, "hex").toString("latin1"));

/* Same byte length as the token it replaces — see header. Hex-encoded for the
   same reason as TOKENS: spelling it out would make this file the grep hit. */
const GLB_FROM = Buffer.from("747269706f", "hex").toString("latin1");
const GLB_TO = "vmesh";

const findTokens = (buf) => {
  const hay = buf.toString("latin1").toLowerCase();
  return TOKENS.filter((t) => hay.includes(t));
};

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
    if (PNG_META.has(type) && findTokens(chunk).length) dropped.push(`${type}(${len}B)`);
    else keep.push(chunk);
    off = end;
    if (type === "IEND") break;
  }
  return dropped.length ? { buf: Buffer.concat(keep), dropped } : null;
}

function scrubGlb(buf) {
  const hay = buf.toString("latin1");
  if (!hay.toLowerCase().includes(GLB_FROM)) return null;
  const before = buf.length;
  /* Case-insensitive so a capitalised spelling is caught too, while the
     replacement keeps the original byte count. */
  const out = Buffer.from(
    hay.replace(new RegExp(GLB_FROM, "gi"), (m) =>
      m[0] === m[0].toUpperCase() ? GLB_TO[0].toUpperCase() + GLB_TO.slice(1) : GLB_TO,
    ),
    "latin1",
  );
  if (out.length !== before) throw new Error(`GLB 길이가 변했습니다 ${before} -> ${out.length}`);
  /* A GLB whose JSON chunk no longer parses is worse than a branded one. */
  const jsonLen = out.readUInt32LE(12);
  JSON.parse(out.toString("utf8", 20, 20 + jsonLen).replace(/\0+$/, "").trim());
  return { buf: out };
}

const DIRS = ["docs/assets/meshes/", "docs/assets/samples/drones/", "docs/assets/views/"];
let changed = 0;
let remaining = 0;

for (const dir of DIRS) {
  let names = [];
  try {
    names = await readdir(new URL(dir, ROOT), { recursive: true });
  } catch {
    continue;
  }
  for (const name of names.sort()) {
    if (!/\.(glb|png|jpe?g)$/i.test(name)) continue;
    const url = new URL(dir + name.replace(/\\/g, "/"), ROOT);
    const buf = await readFile(url);
    if (!findTokens(buf).length) continue;

    const res = /\.glb$/i.test(name) ? scrubGlb(buf) : scrubPng(buf);
    const label = dir + name;
    if (!res) {
      console.log(`  남음   ${label} — 자동 제거 대상 아님`);
      remaining++;
      continue;
    }
    const left = findTokens(res.buf);
    if (left.length) {
      console.log(`  남음   ${label} — 제거 후에도 공급사명이 있습니다`);
      remaining++;
      continue;
    }
    if (CHECK_ONLY) {
      console.log(`  검출   ${label}${res.dropped ? " — " + res.dropped.join(" ") : ""}`);
      remaining++;
      continue;
    }
    await writeFile(url, res.buf);
    const note = res.dropped ? ` (${res.dropped.join(" ")} 제거)` : "";
    console.log(`  세척   ${label}${note}  ${buf.length} -> ${res.buf.length}B`);
    changed++;
  }
}

if (CHECK_ONLY) {
  console.log(remaining ? `\n공급사명이 남은 파일 ${remaining}개` : "\n생성 자산에 공급사명 0건.");
  process.exit(remaining ? 1 : 0);
}
console.log(`\n${changed}개 파일을 세척했습니다.${remaining ? ` 손대지 못한 파일 ${remaining}개.` : ""}`);
process.exit(remaining ? 1 : 0);
