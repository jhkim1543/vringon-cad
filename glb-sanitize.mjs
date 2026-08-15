/* Strip upstream supplier identity out of a GLB.

   A mesh that comes back from an external service is stamped with that
   service's brand in places a text editor never shows: asset.generator, and the
   name on every node, mesh, material, texture and animation. The node name is
   the worst of them, because the workbench turns node names straight into the
   part list — so the supplier's brand is printed in the right-hand panel of a
   product that is not supposed to name its suppliers.

   Scrubbing the copies that had already been committed was not enough: the
   server writes a fresh file on every generation, and those were never touched.
   This module exists so the scrub happens once, at the moment the bytes are
   about to hit disk, and so the same code can re-clean files written before it
   existed.

   Why parse instead of substituting bytes: a same-length byte swap is safe but
   can only ever produce another five-letter word, so a name like
   "<brand>_node_69a724e4-cfb8-4176-885b-32906fddb672" stays exactly as
   unreadable as it was. Rebuilding the JSON chunk lets us put a real part name
   there. A GLB stores its chunk lengths in the header, so the rebuild recomputes
   both the chunk length and the file length and re-pads to the 4-byte boundary
   the format requires.

   The binary chunk is a different problem: its byte offsets are baked into
   every accessor and bufferView, so nothing there may change length. Tokens
   found inside it (image metadata carried along in an embedded JPEG, say) get a
   same-length in-place swap, which cannot move an offset. No sample has ever
   needed it, but the guarantee this module offers is "zero tokens", and a
   guarantee with a hole in it is not one.
*/

/* Supplier and model names, hex-encoded on purpose: spelling them out would
   make this file the grep hit that the whole exercise is meant to prevent.
   Each replacement is byte-identical in length to the token it replaces, which
   is what makes the in-place binary-chunk patch safe. */
const TOKEN_TABLE = [
  ["747269706f", "vmesh"],
  ["67656d696e69", "vmodel"],
  ["6f70656e6169", "vmodel"],
  ["6770742d34", "model"],
  ["616e7468726f706963", "assistant"],
  ["636c61756465", "helper"],
];

export const VENDOR_TOKENS = TOKEN_TABLE.map(([h]) => Buffer.from(h, "hex").toString("latin1"));
const REPLACEMENTS = new Map(TOKEN_TABLE.map(([h, r]) => [Buffer.from(h, "hex").toString("latin1"), r]));

/* Neutral value for the one field whose whole job is to name the producer. */
const GENERATOR = "VRINGON CAD";

/** Every token present in a buffer or string, lowercased haystack. */
export function findVendorTokens(data) {
  const hay = (Buffer.isBuffer(data) ? data.toString("latin1") : String(data)).toLowerCase();
  return VENDOR_TOKENS.filter((t) => hay.includes(t));
}

export const isTainted = (s) => typeof s === "string" && findVendorTokens(s).length > 0;

/** Replace tokens in a string, preserving a leading capital so "Foo" -> "Vmesh". */
function scrubString(s) {
  let out = s;
  for (const [tok, rep] of REPLACEMENTS) {
    out = out.replace(new RegExp(tok, "gi"), (m) =>
      m[0] === m[0].toUpperCase() && m[0] !== m[0].toLowerCase()
        ? rep[0].toUpperCase() + rep.slice(1)
        : rep);
  }
  return out;
}

/* Readable stand-ins for a supplier-branded name. Node names are what the part
   list prints, so they follow the same "part_N" convention js/app.js already
   falls back to for an unnamed node — one convention, and ASCII, because the
   DXF/OBJ/STEP exporters replace every non-ASCII character in a layer name with
   an underscore. */
const NAME_RULES = [
  ["nodes", (i) => `part_${i + 1}`],
  ["meshes", (i) => `mesh_${i + 1}`],
  ["materials", (i) => `material_${i + 1}`],
  ["images", (i) => `texture_${i + 1}`],
  ["textures", (i) => `texture_${i + 1}`],
  ["samplers", (i) => `sampler_${i + 1}`],
  ["animations", (i) => `clip_${i + 1}`],
  ["scenes", (i) => `scene_${i + 1}`],
  ["skins", (i) => `skin_${i + 1}`],
  ["cameras", (i) => `camera_${i + 1}`],
  ["buffers", (i) => `buffer_${i + 1}`],
];

/* A node name that is really a machine id: a UUID, or a long unbroken run of
   hex. The earlier same-length byte swap could only ever turn one five-letter
   token into another, so the meshes cleaned before this module existed still
   print names like "<word>_node_7e2deab4-3779-4419-ae83-8aca9db2ffac" in the
   part list — no supplier named, but nothing a person can read either. Only
   node names are judged this way, because only node names become part labels;
   an image called "Color_<uuid>" still tells a reader which map it is. */
const OPAQUE_NAME = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|[0-9a-f]{24,}/i;

/**
 * Clean a parsed glTF JSON tree in place.
 * @param {object} json parsed glTF
 * @param {{renameOpaque?: boolean}} opts renameOpaque also replaces node names
 *   that are machine ids rather than words, even when no supplier is named.
 * @returns {string[]} human-readable notes, one per edit, for the server log.
 */
export function sanitizeGltfJson(json, opts = {}) {
  const notes = [];

  // 1. The producer field, whose only content is a supplier's identity.
  if (isTainted(json.asset?.generator)) {
    notes.push(`asset.generator "${json.asset.generator}" -> "${GENERATOR}"`);
    json.asset.generator = GENERATOR;
  }
  if (isTainted(json.asset?.copyright)) {
    notes.push(`asset.copyright 제거`);
    delete json.asset.copyright;
  }

  // 2. Named collections. A clean author-given name is somebody's decision and
  //    is left alone; only a branded one is replaced, and its mirror copy in
  //    extras goes with it so the two cannot disagree.
  for (const [key, nameFor] of NAME_RULES) {
    const arr = json[key];
    if (!Array.isArray(arr)) continue;
    arr.forEach((el, i) => {
      if (!el || typeof el !== "object" || !isTainted(el.name)) return;
      const next = nameFor(i);
      notes.push(`${key}[${i}].name "${el.name}" -> "${next}"`);
      if (el.extras && isTainted(el.extras.name)) el.extras.name = next;
      el.name = next;
    });
  }

  // 2b. Opaque-but-clean node names, only when the caller asks for it.
  if (opts.renameOpaque && Array.isArray(json.nodes)) {
    json.nodes.forEach((el, i) => {
      if (!el || typeof el !== "object" || !el.name || !OPAQUE_NAME.test(el.name)) return;
      const next = `part_${i + 1}`;
      if (el.name === next) return;
      notes.push(`nodes[${i}].name "${el.name}" -> "${next}" (기계 식별자)`);
      if (el.extras && typeof el.extras.name === "string" && OPAQUE_NAME.test(el.extras.name)) el.extras.name = next;
      el.name = next;
    });
  }

  // 3. Extension names appear twice — in the used/required lists and as the key
  //    of every extensions object — so both have to move together or the file
  //    stops being self-consistent. A renamed vendor extension is still an
  //    unknown extension to the loader, so this changes nothing about how the
  //    file loads.
  const renamedExt = new Map();
  for (const list of ["extensionsUsed", "extensionsRequired"]) {
    if (!Array.isArray(json[list])) continue;
    json[list] = json[list].map((n) => {
      if (!isTainted(n)) return n;
      const next = renamedExt.get(n) || scrubString(n);
      renamedExt.set(n, next);
      notes.push(`${list} "${n}" -> "${next}"`);
      return next;
    });
  }

  // 4. Everything else: extras blobs, uris, and any string or object key the
  //    three passes above do not know about. This is the backstop that makes
  //    "zero tokens" true rather than "zero tokens in the places we listed".
  const walk = (node, path) => {
    if (Array.isArray(node)) {
      node.forEach((v, i) => {
        if (typeof v === "string" && isTainted(v)) {
          const next = scrubString(v);
          notes.push(`${path}[${i}] "${v}" -> "${next}"`);
          node[i] = next;
        } else if (v && typeof v === "object") walk(v, `${path}[${i}]`);
      });
      return;
    }
    for (const k of Object.keys(node)) {
      const v = node[k];
      const cleanKey = isTainted(k) ? (renamedExt.get(k) || scrubString(k)) : k;
      if (cleanKey !== k) {
        notes.push(`${path}.${k} 키 -> "${cleanKey}"`);
        delete node[k];
        node[cleanKey] = v;
      }
      if (typeof v === "string" && isTainted(v)) {
        const next = scrubString(v);
        notes.push(`${path}.${cleanKey} "${v}" -> "${next}"`);
        node[cleanKey] = next;
      } else if (v && typeof v === "object") walk(v, `${path}.${cleanKey}`);
    }
  };
  walk(json, "");

  return notes;
}

/** Split a GLB into its header and chunk list without copying the payload. */
function readChunks(buf) {
  if (buf.length < 20 || buf.readUInt32BE(0) !== 0x676c5446) return null; // "glTF"
  const chunks = [];
  let off = 12;
  while (off + 8 <= buf.length) {
    const len = buf.readUInt32LE(off);
    const type = buf.toString("latin1", off + 4, off + 8);
    const start = off + 8;
    if (start + len > buf.length) return null;
    chunks.push({ type, start, end: start + len });
    off = start + len;
  }
  return chunks;
}

/* Same-length swap inside the binary chunk. Offsets are load-bearing there, so
   this is the one place a byte substitution is the correct tool rather than a
   shortcut. */
function patchBinInPlace(buf, start, end) {
  const slice = buf.subarray(start, end);
  const hay = slice.toString("latin1");
  let patched = hay;
  for (const [tok, rep] of REPLACEMENTS) patched = patched.replace(new RegExp(tok, "gi"), rep);
  if (patched === hay) return 0;
  const next = Buffer.from(patched, "latin1");
  if (next.length !== slice.length) throw new Error("BIN 치환이 길이를 바꿨습니다");
  next.copy(buf, start);
  return 1;
}

/**
 * Clean a GLB buffer.
 * @param {Buffer} buf raw GLB
 * @returns {{buf: Buffer, notes: string[], changed: boolean}}
 * @throws if the input is not a parseable GLB, or if the result still has a token
 */
export function sanitizeGlb(buf, opts = {}) {
  const chunks = readChunks(buf);
  if (!chunks) throw new Error("GLB 형식이 아닙니다");
  const jc = chunks.find((c) => c.type === "JSON");
  if (!jc) throw new Error("GLB에 JSON 청크가 없습니다");

  /* Padding is spaces in a JSON chunk and NULs in a BIN chunk; both are legal
     trailing bytes that JSON.parse will not accept. */
  const raw = buf.toString("utf8", jc.start, jc.end).replace(/[\s\0]+$/, "");
  const json = JSON.parse(raw);
  const notes = sanitizeGltfJson(json, opts);

  const out = Buffer.from(JSON.stringify(json), "utf8");
  const pad = (4 - (out.length % 4)) % 4;
  const jsonChunk = Buffer.concat([out, Buffer.alloc(pad, 0x20)]);

  const pieces = [];
  for (const c of chunks) {
    const head = Buffer.alloc(8);
    if (c.type === "JSON") {
      head.writeUInt32LE(jsonChunk.length, 0);
      head.write("JSON", 4, "latin1");
      pieces.push(head, jsonChunk);
    } else {
      /* Copied rather than referenced: patchBinInPlace writes into it. */
      const body = Buffer.from(buf.subarray(c.start, c.end));
      if (patchBinInPlace(body, 0, body.length)) notes.push(`${c.type.trim()} 청크 동일길이 치환`);
      head.writeUInt32LE(body.length, 0);
      head.write(c.type, 4, "latin1");
      pieces.push(head, body);
    }
  }

  const total = 12 + pieces.reduce((n, p) => n + p.length, 0);
  const header = Buffer.alloc(12);
  header.write("glTF", 0, "latin1");
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(total, 8);
  const result = Buffer.concat([header, ...pieces]);

  /* Prove the promise instead of assuming it: the file must still parse, and
     nothing may be left behind. */
  const check = readChunks(result);
  const cj = check?.find((c) => c.type === "JSON");
  if (!cj) throw new Error("세척 후 GLB를 다시 읽지 못했습니다");
  JSON.parse(result.toString("utf8", cj.start, cj.end).replace(/[\s\0]+$/, ""));
  const left = findVendorTokens(result);
  if (left.length) throw new Error(`세척 후에도 공급사명이 ${left.length}건 남았습니다`);

  return { buf: result, notes, changed: notes.length > 0 || result.length !== buf.length };
}

/**
 * Clean any generated mesh file, GLB or not, with a guarantee of zero tokens.
 *
 * The parser is the preferred path because only it can produce a readable part
 * name. If a file will not parse — a truncated download, a format the supplier
 * changes under us — falling back to a same-length byte swap still removes the
 * brand, and same-length means no offset inside the file can move. Refusing to
 * write at all would turn a cosmetic problem into a failed generation.
 *
 * @returns {{buf: Buffer, notes: string[], mode: "gltf"|"bytes"}}
 */
export function sanitizeMeshBytes(buf, opts = {}) {
  try {
    const r = sanitizeGlb(buf, opts);
    return { buf: r.buf, notes: r.notes, mode: "gltf" };
  } catch (e) {
    const body = Buffer.from(buf);
    const n = patchBinInPlace(body, 0, body.length);
    const left = findVendorTokens(body);
    if (left.length) throw new Error(`메시 세척 실패(${e.message}), 잔여 ${left.length}건`);
    return { buf: body, notes: n ? [`파싱 실패(${e.message}) — 동일길이 바이트 치환으로 대체`] : [], mode: "bytes" };
  }
}

/* Strings long enough to be a payload rather than a label, made only of base64
   characters. A token can occur inside one by pure chance, and rewriting bytes
   in the middle of an encoded image would damage the image to fix nothing. */
const looksEncoded = (s) => s.length > 512 && (s.startsWith("data:") || /^[A-Za-z0-9+/=\s]+$/.test(s));

/**
 * Deep-scrub a value destined for an API response, in place.
 *
 * Upstream failures are the leak nobody plans for: a DNS error carries the
 * supplier's hostname in its message, the catch block puts that message in
 * `error`, and the browser prints it. Labels get cleaned; encoded payloads are
 * left alone.
 */
export function scrubResponse(value) {
  if (typeof value === "string") return isTainted(value) && !looksEncoded(value) ? scrubString(value) : value;
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) value[i] = scrubResponse(value[i]);
    return value;
  }
  if (value && typeof value === "object") {
    for (const k of Object.keys(value)) {
      const clean = isTainted(k) ? scrubString(k) : k;
      const v = scrubResponse(value[k]);
      if (clean !== k) { delete value[k]; value[clean] = v; } else value[k] = v;
    }
  }
  return value;
}

/** Node names in order — what the workbench will print in the part list. */
export function glbPartNames(buf) {
  const chunks = readChunks(buf);
  const jc = chunks?.find((c) => c.type === "JSON");
  if (!jc) return [];
  const json = JSON.parse(buf.toString("utf8", jc.start, jc.end).replace(/[\s\0]+$/, ""));
  return (json.nodes || []).map((n, i) => n?.name || `part_${i + 1}`);
}
