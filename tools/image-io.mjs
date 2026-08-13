/* ==========================================================================
   Image reading and writing with nothing but node:zlib.

   tools/similarity.mjs can score the compiled CAD against four silhouette
   masks instead of against a mesh, and those masks arrive as image files. This
   repository carries no dependencies and is not going to grow one to read a
   PNG, so the formats are decoded here by hand.

   PNG is the format a mask is actually saved in, and it is only DEFLATE plus a
   per-row filter, both of which node:zlib and thirty lines of arithmetic
   cover. JPEG is included because photographs and traced overlays get exported
   as JPEG whether or not it suits a two-colour image; only the luminance plane
   is reconstructed, since a silhouette has no use for chroma. PGM/PPM is the
   escape hatch: any converter on any machine can produce one, and it parses in
   a dozen lines, so a format this file cannot read is never a dead end.

   Everything returns the same thing — 8-bit luminance plus alpha if the file
   carried any — so the caller never branches on format.
   ========================================================================== */
import { inflateSync, deflateSync } from "node:zlib";

/* ---------------------------------------------------------------- PNG read */

function decodePng(buf) {
  let p = 8; // past the 8-byte signature
  let ihdr = null, plte = null, trns = null;
  const idat = [];
  while (p + 8 <= buf.length) {
    const len = buf.readUInt32BE(p);
    const type = buf.toString("latin1", p + 4, p + 8);
    const data = buf.subarray(p + 8, p + 8 + len);
    if (type === "IHDR") {
      ihdr = {
        width: data.readUInt32BE(0), height: data.readUInt32BE(4),
        depth: data[8], color: data[9], interlace: data[12],
      };
    } else if (type === "PLTE") plte = data;
    else if (type === "tRNS") trns = data;
    else if (type === "IDAT") idat.push(data);
    else if (type === "IEND") break;
    p += 12 + len;
  }
  if (!ihdr) throw new Error("PNG 헤더를 찾지 못했습니다");
  /* Adam7 would need a seven-pass reassembly for a gain no mask ever sees;
     refusing loudly beats returning a scrambled silhouette. */
  if (ihdr.interlace) throw new Error("인터레이스 PNG는 지원하지 않습니다 (인터레이스 없이 다시 저장하세요)");

  const { width: w, height: h, depth, color } = ihdr;
  const channels = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[color];
  if (!channels) throw new Error(`알 수 없는 PNG 색상 형식 ${color}`);

  const raw = inflateSync(Buffer.concat(idat));
  const rowBytes = Math.ceil((depth * channels * w) / 8);
  const bpp = Math.max(1, Math.ceil((depth * channels) / 8)); // filter stride, in bytes
  const img = new Uint8Array(rowBytes * h);
  let ip = 0;
  for (let y = 0; y < h; y++) {
    const ft = raw[ip++];
    const o = y * rowBytes, pr = o - rowBytes;
    for (let x = 0; x < rowBytes; x++) {
      const a = x >= bpp ? img[o + x - bpp] : 0;
      const b = y > 0 ? img[pr + x] : 0;
      const c = x >= bpp && y > 0 ? img[pr + x - bpp] : 0;
      let v = raw[ip + x];
      if (ft === 1) v += a;
      else if (ft === 2) v += b;
      else if (ft === 3) v += (a + b) >> 1;
      else if (ft === 4) {
        const q = a + b - c, pa = Math.abs(q - a), pb = Math.abs(q - b), pc = Math.abs(q - c);
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      } else if (ft !== 0) throw new Error(`알 수 없는 PNG 행 필터 ${ft}`);
      img[o + x] = v & 255;
    }
    ip += rowBytes;
  }

  /* Sub-byte depths pack several samples into one byte; 16-bit ones are read
     down to their high byte, which is all a threshold can use anyway. */
  const maxV = (1 << Math.min(depth, 8)) - 1;
  const sample = (row, i) => {
    if (depth === 16) return img[row + i * 2];
    if (depth === 8) return img[row + i];
    const per = 8 / depth;
    const byte = img[row + ((i / per) | 0)];
    const shift = 8 - depth * ((i % per) + 1);
    return ((byte >> shift) & maxV) * 255 / maxV;
  };

  const gray = new Uint8Array(w * h);
  const alpha = new Uint8Array(w * h).fill(255);
  let hasAlpha = false;
  for (let y = 0; y < h; y++) {
    const row = y * rowBytes;
    for (let x = 0; x < w; x++) {
      const i = y * w + x, s = x * channels;
      if (color === 0) gray[i] = sample(row, s);
      else if (color === 4) { gray[i] = sample(row, s); alpha[i] = sample(row, s + 1); hasAlpha = true; }
      else if (color === 3) {
        const idx = depth === 16 ? img[row + x * 2] : sample(row, s) * maxV / 255;
        gray[i] = luma(plte[idx * 3], plte[idx * 3 + 1], plte[idx * 3 + 2]);
        if (trns && idx < trns.length) { alpha[i] = trns[idx]; hasAlpha = true; }
      } else {
        gray[i] = luma(sample(row, s), sample(row, s + 1), sample(row, s + 2));
        if (color === 6) { alpha[i] = sample(row, s + 3); hasAlpha = true; }
      }
    }
  }
  return { w, h, gray, alpha: hasAlpha ? alpha : null };
}

const luma = (r, g, b) => (r * 77 + g * 150 + b * 29) >> 8;

/* ------------------------------------------------------------- PGM/PPM read */

function decodeNetpbm(buf) {
  const magic = buf.toString("latin1", 0, 2);
  let p = 2;
  const token = () => {
    while (p < buf.length) {
      const c = buf[p];
      if (c === 35) { while (p < buf.length && buf[p] !== 10) p++; }        // '#'
      else if (c === 32 || c === 9 || c === 10 || c === 13) p++;
      else break;
    }
    const s = p;
    while (p < buf.length && ![32, 9, 10, 13].includes(buf[p])) p++;
    return buf.toString("latin1", s, p);
  };
  const w = parseInt(token(), 10), h = parseInt(token(), 10);
  const ascii = magic === "P1" || magic === "P2" || magic === "P3";
  const chan = magic === "P3" || magic === "P6" ? 3 : 1;
  const bilevel = magic === "P1" || magic === "P4";
  const maxV = bilevel ? 1 : parseInt(token(), 10);
  const gray = new Uint8Array(w * h);

  if (ascii) {
    for (let i = 0; i < w * h; i++) {
      const c = [0, 0, 0];
      for (let k = 0; k < chan; k++) c[k] = parseInt(token(), 10) * 255 / maxV;
      // P1 is inverted by definition: 1 means black
      gray[i] = bilevel ? 255 - c[0] : chan === 3 ? luma(c[0], c[1], c[2]) : c[0];
    }
    return { w, h, gray, alpha: null };
  }

  p++; // exactly one whitespace byte separates the header from binary data
  if (magic === "P4") {
    const rowBytes = Math.ceil(w / 8);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const bit = (buf[p + y * rowBytes + (x >> 3)] >> (7 - (x & 7))) & 1;
      gray[y * w + x] = bit ? 0 : 255;
    }
    return { w, h, gray, alpha: null };
  }
  const wide = maxV > 255;
  const step = wide ? 2 : 1;
  for (let i = 0; i < w * h; i++) {
    const at = (k) => {
      const o = p + (i * chan + k) * step;
      return (wide ? buf.readUInt16BE(o) : buf[o]) * 255 / maxV;
    };
    gray[i] = chan === 3 ? luma(at(0), at(1), at(2)) : at(0);
  }
  return { w, h, gray, alpha: null };
}

/* --------------------------------------------------------------- JPEG read */

const ZIGZAG = new Int32Array([
  0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5,
  12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28,
  35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51,
  58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63,
]);

// separable IDCT: eight one-dimensional transforms per axis beats the 4096
// multiplies a literal reading of the definition would cost per block
const COS = new Float64Array(64);
for (let x = 0; x < 8; x++) for (let u = 0; u < 8; u++) {
  COS[x * 8 + u] = (u === 0 ? Math.SQRT1_2 : 1) * Math.cos(((2 * x + 1) * u * Math.PI) / 16) / 2;
}

function buildHuff(bits, vals) {
  const lut = new Map();
  let code = 0, k = 0;
  for (let l = 1; l <= 16; l++) {
    for (let i = 0; i < bits[l - 1]; i++) lut.set((l << 16) | code++, vals[k++]);
    code <<= 1;
  }
  return lut;
}

function decodeJpeg(buf) {
  const qt = [], hdc = [], hac = [];
  let frame = null, ri = 0, scan = null, scanStart = 0;

  let p = 2;
  while (p < buf.length - 1) {
    if (buf[p] !== 0xff) { p++; continue; }
    const m = buf[p + 1];
    if (m === 0xd8 || m === 0x01 || (m >= 0xd0 && m <= 0xd7) || m === 0xff) { p += 2; continue; }
    if (m === 0xd9) break;
    const len = buf.readUInt16BE(p + 2);
    const seg = buf.subarray(p + 4, p + 2 + len);

    if (m === 0xdb) {                                            // DQT
      for (let q = 0; q < seg.length;) {
        const pq = seg[q] >> 4, tq = seg[q] & 15; q++;
        const t = new Int32Array(64);
        for (let i = 0; i < 64; i++) { t[ZIGZAG[i]] = pq ? seg.readUInt16BE(q + i * 2) : seg[q + i]; }
        q += pq ? 128 : 64;
        qt[tq] = t;
      }
    } else if (m === 0xc4) {                                     // DHT
      for (let q = 0; q < seg.length;) {
        const tc = seg[q] >> 4, th = seg[q] & 15; q++;
        const bits = seg.subarray(q, q + 16); q += 16;
        let n = 0; for (let i = 0; i < 16; i++) n += bits[i];
        const vals = seg.subarray(q, q + n); q += n;
        (tc ? hac : hdc)[th] = buildHuff(bits, vals);
      }
    } else if (m === 0xc0 || m === 0xc1) {                       // SOF0/SOF1
      frame = { h: seg.readUInt16BE(1), w: seg.readUInt16BE(3), comps: [] };
      for (let i = 0, q = 6; i < seg[5]; i++, q += 3) {
        frame.comps.push({ id: seg[q], h: seg[q + 1] >> 4, v: seg[q + 1] & 15, tq: seg[q + 2] });
      }
    } else if (m === 0xc2) {
      throw new Error("프로그레시브 JPEG는 지원하지 않습니다 (PNG 또는 베이스라인 JPEG로 저장하세요)");
    } else if (m >= 0xc3 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
      throw new Error(`지원하지 않는 JPEG 방식입니다 (SOF 0x${m.toString(16)})`);
    } else if (m === 0xdd) {                                     // DRI
      ri = seg.readUInt16BE(0);
    } else if (m === 0xda) {                                     // SOS
      scan = [];
      for (let i = 0, q = 1; i < seg[0]; i++, q += 2) {
        const c = frame.comps.find((x) => x.id === seg[q]);
        scan.push({ c, dc: seg[q + 1] >> 4, ac: seg[q + 1] & 15 });
      }
      scanStart = p + 2 + len;
      break; // baseline carries a single scan, and entropy data runs to EOI
    }
    p += 2 + len;
  }
  if (!frame || !scan) throw new Error("JPEG 프레임을 읽지 못했습니다");

  const hmax = Math.max(...frame.comps.map((c) => c.h));
  const vmax = Math.max(...frame.comps.map((c) => c.v));
  const mcusX = Math.ceil(frame.w / (8 * hmax)), mcusY = Math.ceil(frame.h / (8 * vmax));
  const Y = frame.comps[0];
  const yW = mcusX * Y.h * 8, yH = mcusY * Y.v * 8;
  const plane = new Uint8Array(yW * yH);

  /* Bit reader. 0xFF in entropy-coded data is escaped as 0xFF00, and any other
     0xFF is a marker — reading past one would decode noise, so it stops. */
  let bp = scanStart, bits = 0, nbits = 0;
  const nextBit = () => {
    if (nbits === 0) {
      if (bp >= buf.length) return 0;
      let b = buf[bp++];
      if (b === 0xff) {
        const n = buf[bp];
        if (n === 0) bp++;
        else { bp--; b = 0; }
      }
      bits = b; nbits = 8;
    }
    nbits--;
    return (bits >> nbits) & 1;
  };
  const huffDecode = (lut) => {
    let code = 0;
    for (let l = 1; l <= 16; l++) {
      code = (code << 1) | nextBit();
      const v = lut.get((l << 16) | code);
      if (v !== undefined) return v;
    }
    return 0;
  };
  const receive = (n) => { let v = 0; for (let i = 0; i < n; i++) v = (v << 1) | nextBit(); return v; };
  // JPEG stores differences in a sign-folded form: the low half of each
  // magnitude band is the negative side
  const extend = (v, n) => (n === 0 ? 0 : v < 1 << (n - 1) ? v - (1 << n) + 1 : v);

  const blk = new Float64Array(64), tmp = new Float64Array(64);
  const decodeBlock = (s, bx, by, keep) => {
    blk.fill(0);
    const q = qt[s.c.tq];
    const t = huffDecode(hdc[s.dc]);
    s.pred = (s.pred || 0) + extend(receive(t), t);
    blk[0] = s.pred * q[0];
    for (let k = 1; k < 64;) {
      const rs = huffDecode(hac[s.ac]), r = rs >> 4, sz = rs & 15;
      if (sz === 0) { if (r !== 15) break; k += 16; continue; }
      k += r;
      if (k > 63) break;
      const z = ZIGZAG[k];
      blk[z] = extend(receive(sz), sz) * q[z];
      k++;
    }
    if (!keep) return;
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
      let v = 0;
      for (let u = 0; u < 8; u++) v += COS[x * 8 + u] * blk[y * 8 + u];
      tmp[y * 8 + x] = v;
    }
    for (let x = 0; x < 8; x++) for (let y = 0; y < 8; y++) {
      let v = 0;
      for (let u = 0; u < 8; u++) v += COS[y * 8 + u] * tmp[u * 8 + x];
      const px = bx * 8 + x, py = by * 8 + y;
      if (px < yW && py < yH) plane[py * yW + px] = Math.max(0, Math.min(255, Math.round(v + 128)));
    }
  };

  const single = scan.length === 1;
  const sX = single ? Math.ceil((frame.w * scan[0].c.h / hmax) / 8) : mcusX;
  const sY = single ? Math.ceil((frame.h * scan[0].c.v / vmax) / 8) : mcusY;
  let sinceRst = 0;
  for (let my = 0; my < sY; my++) {
    for (let mx = 0; mx < sX; mx++) {
      if (ri && sinceRst === ri) {                       // restart: realign and drop DC prediction
        nbits = 0;
        while (bp < buf.length - 1 && !(buf[bp] === 0xff && buf[bp + 1] >= 0xd0 && buf[bp + 1] <= 0xd7)) bp++;
        bp += 2;
        for (const s of scan) s.pred = 0;
        sinceRst = 0;
      }
      for (const s of scan) {
        const keep = s.c === Y;
        if (single) decodeBlock(s, mx, my, keep);
        else for (let v = 0; v < s.c.v; v++) for (let h = 0; h < s.c.h; h++) {
          decodeBlock(s, mx * s.c.h + h, my * s.c.v + v, keep);
        }
      }
      sinceRst++;
    }
  }

  // crop away the MCU padding, scaling up if luminance was itself subsampled
  const sx = hmax / Y.h, sy = vmax / Y.v;
  const gray = new Uint8Array(frame.w * frame.h);
  for (let y = 0; y < frame.h; y++) for (let x = 0; x < frame.w; x++) {
    gray[y * frame.w + x] = plane[Math.min(yH - 1, (y / sy) | 0) * yW + Math.min(yW - 1, (x / sx) | 0)];
  }
  return { w: frame.w, h: frame.h, gray, alpha: null };
}

/* ------------------------------------------------------------------ public */

/** Decode a PNG, baseline JPEG or PGM/PPM buffer into {w,h,gray,alpha}. */
export function decodeImage(buf, label = "이미지") {
  try {
    if (buf.length > 8 && buf[0] === 0x89 && buf.toString("latin1", 1, 4) === "PNG") return decodePng(buf);
    if (buf[0] === 0xff && buf[1] === 0xd8) return decodeJpeg(buf);
    if (buf[0] === 0x50 && buf[1] >= 0x31 && buf[1] <= 0x36) return decodeNetpbm(buf);
  } catch (e) {
    throw new Error(`${label}: ${e.message}`);
  }
  throw new Error(`${label}: PNG · JPEG · PGM/PPM 만 읽을 수 있습니다`);
}

const CRC = new Int32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  CRC[n] = c;
}
const crc32 = (b) => {
  let c = -1;
  for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 255] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
};

/** Write an 8-bit PNG. `channels` is 1 for grey or 3 for RGB. */
export function encodePng(w, h, data, channels = 1) {
  const stride = w * channels;
  const raw = Buffer.alloc((stride + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (stride + 1)] = 0;                        // filter 0: masks compress fine flat
    Buffer.from(data.buffer, data.byteOffset + y * stride, stride).copy(raw, y * (stride + 1) + 1);
  }
  const chunk = (type, body) => {
    const out = Buffer.alloc(12 + body.length);
    out.writeUInt32BE(body.length, 0);
    out.write(type, 4, "latin1");
    body.copy(out, 8);
    out.writeUInt32BE(crc32(out.subarray(4, 8 + body.length)), 8 + body.length);
    return out;
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;
  ihdr[9] = channels === 3 ? 2 : 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}
