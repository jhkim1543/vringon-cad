/* 생성된 3D 를 그림으로 굽는다 (라이브러리의 "결과" 쪽 짝).
   Bakes the generated 3D into an image (the "result" half of each library pair).

   왜 직접 그리나 / Why rasterise by hand:
   브라우저 없이 돌아야 해서 WebGL 을 쓸 수 없다. 삼각형만 있으면 되는 그림이라
   z 버퍼 + 램버트 음영만으로 충분하다. 화면과 같은 파랑 계열을 쓴다.
   It has to run without a browser, so WebGL is out. A z-buffer with Lambert shading
   is all this picture needs, and it uses the same blue palette as the screen.

   실행 / Run:
     node tools/render-thumb.mjs                 모든 샘플 / every sample
     node tools/render-thumb.mjs --only roller   하나만 / just one
     node tools/render-thumb.mjs --part2         Part 2 샘플 / Part 2 samples

   결과 / Output: samples/<id>/result.webp (Part 1), assets/part2/<id>-result.webp (Part 2) */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { collectTriangles } from "../js/shaft-export.js";

const ROOT = fileURLToPath(new URL("../", import.meta.url));

/* 화면과 같은 색 / same colours as the screen */
const PALETTE = {
  bg: [255, 255, 255],        /* 배경 / background */
  body: [96, 132, 186],       /* 부품 / part body */
  light: [255, 255, 255],     /* 하이라이트 / highlight */
  shadow: [26, 44, 74],       /* 그늘 / shade */
  floor: [232, 238, 247],     /* 바닥 그림자 / floor shadow */
};

/* ------------------------------------------------------------------ 카메라 / camera
   부품을 감싸는 상자를 보고 화면에 꽉 차게 맞춘다. 방향은 늘 같은 등각이라
   샘플끼리 나란히 놓으면 크기 비교가 된다.
   Fits the part's bounding box to the frame. The direction is always the same
   isometric view, so samples line up comparably side by side. */
function cameraFor(box, w, h, pad = 0.86) {
  const yaw = (-35 * Math.PI) / 180, pitch = (24 * Math.PI) / 180;
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  /* 월드 → 카메라 (회전만; 평행 투영이라 원근은 없다) / world → camera, orthographic */
  const rot = (p) => {
    const x = p[0] * cy + p[2] * sy;
    const z = -p[0] * sy + p[2] * cy;
    const y = p[1] * cp - z * sp;
    const d = p[1] * sp + z * cp;
    return [x, y, d];
  };
  const corners = [];
  for (const x of [box.min[0], box.max[0]]) for (const y of [box.min[1], box.max[1]]) for (const z of [box.min[2], box.max[2]]) corners.push(rot([x, y, z]));
  const xs = corners.map((c) => c[0]), ys = corners.map((c) => c[1]);
  const spanX = Math.max(...xs) - Math.min(...xs), spanY = Math.max(...ys) - Math.min(...ys);
  const scale = Math.min((w * pad) / (spanX || 1), (h * pad) / (spanY || 1));
  const midX = (Math.max(...xs) + Math.min(...xs)) / 2, midY = (Math.max(...ys) + Math.min(...ys)) / 2;
  return (p) => {
    const c = rot(p);
    return [w / 2 + (c[0] - midX) * scale, h / 2 - (c[1] - midY) * scale, c[2]];
  };
}

/* ------------------------------------------------------------------ 래스터 / raster
   가장자리를 부드럽게 하려고 3배로 그린 뒤 줄인다(수퍼샘플링).
   Drawn at 3× and shrunk down, which is what smooths the edges (supersampling). */
function raster(groups, w, h) {
  const SS = 3, W = w * SS, H = h * SS;
  const px = new Float32Array(W * H * 3);
  const zb = new Float32Array(W * H).fill(-Infinity);
  const hit = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) { px[i * 3] = PALETTE.bg[0]; px[i * 3 + 1] = PALETTE.bg[1]; px[i * 3 + 2] = PALETTE.bg[2]; }

  /* 상자 구하기 / bounding box */
  const box = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
  for (const g of groups) for (let i = 0; i < g.tris.length; i += 3) {
    for (let k = 0; k < 3; k++) { const v = g.tris[i + k]; if (v < box.min[k]) box.min[k] = v; if (v > box.max[k]) box.max[k] = v; }
  }
  if (!isFinite(box.min[0])) return null;
  const project = cameraFor(box, W, H);

  /* 빛은 왼쪽 위 앞에서 / light from upper left front */
  const L = (() => { const v = [-0.45, 0.78, 0.44]; const n = Math.hypot(...v); return v.map((c) => c / n); })();

  for (const g of groups) {
    for (let i = 0; i < g.tris.length; i += 9) {
      const a = [g.tris[i], g.tris[i + 1], g.tris[i + 2]];
      const b = [g.tris[i + 3], g.tris[i + 4], g.tris[i + 5]];
      const c = [g.tris[i + 6], g.tris[i + 7], g.tris[i + 8]];
      const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
      const v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
      let n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
      const nl = Math.hypot(...n) || 1; n = n.map((x) => x / nl);
      /* 램버트 + 약한 환경광. 뒷면도 밝기는 같게(법선 방향이 뒤집힌 면이 섞여 있다).
         Lambert plus a little ambient; back faces get the same brightness because
         some meshes carry flipped normals. */
      const lam = Math.abs(n[0] * L[0] + n[1] * L[1] + n[2] * L[2]);
      const t = 0.30 + 0.70 * lam;
      const col = [0, 1, 2].map((k) => (t < 0.5
        ? PALETTE.shadow[k] + (PALETTE.body[k] - PALETTE.shadow[k]) * (t / 0.5)
        : PALETTE.body[k] + (PALETTE.light[k] - PALETTE.body[k]) * ((t - 0.5) / 0.5) * 0.55));

      const p0 = project(a), p1 = project(b), p2 = project(c);
      const minX = Math.max(0, Math.floor(Math.min(p0[0], p1[0], p2[0])));
      const maxX = Math.min(W - 1, Math.ceil(Math.max(p0[0], p1[0], p2[0])));
      const minY = Math.max(0, Math.floor(Math.min(p0[1], p1[1], p2[1])));
      const maxY = Math.min(H - 1, Math.ceil(Math.max(p0[1], p1[1], p2[1])));
      const area = (p1[0] - p0[0]) * (p2[1] - p0[1]) - (p2[0] - p0[0]) * (p1[1] - p0[1]);
      if (!area) continue;
      for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
          const cx = x + 0.5, cy = y + 0.5;
          const w0 = ((p1[0] - p0[0]) * (cy - p0[1]) - (cx - p0[0]) * (p1[1] - p0[1])) / area;
          const w1 = ((cx - p0[0]) * (p2[1] - p0[1]) - (p2[0] - p0[0]) * (cy - p0[1])) / area;
          const w2 = 1 - w0 - w1;
          if (w0 < 0 || w1 < 0 || w2 < 0) continue;
          const z = p0[2] * w2 + p1[2] * w1 + p2[2] * w0;
          const idx = y * W + x;
          if (z <= zb[idx]) continue;
          zb[idx] = z; hit[idx] = 1;
          px[idx * 3] = col[0]; px[idx * 3 + 1] = col[1]; px[idx * 3 + 2] = col[2];
        }
      }
    }
  }
  return { px, W, H, SS, hit };
}

/* 3배 그림을 원래 크기로 줄인다 / shrink the 3× buffer back down */
function downsample({ px, W, H, SS }, w, h) {
  const out = Buffer.alloc(w * h * 3);
  const n = SS * SS;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0, g = 0, b = 0;
      for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
        const i = ((y * SS + sy) * W + (x * SS + sx)) * 3;
        r += px[i]; g += px[i + 1]; b += px[i + 2];
      }
      const o = (y * w + x) * 3;
      out[o] = Math.round(r / n); out[o + 1] = Math.round(g / n); out[o + 2] = Math.round(b / n);
    }
  }
  return out;
}

/* 그룹(부품 묶음) → 파일 / groups of triangles → a file on disk */
export async function renderGroups(groups, file, { width = 480, height = 320 } = {}) {
  const r = raster(groups, width, height);
  if (!r) throw new Error("삼각형이 없습니다 / no triangles");
  const rgb = downsample(r, width, height);
  await sharp(rgb, { raw: { width, height, channels: 3 } }).webp({ quality: 88 }).toFile(file);
  return { width, height, painted: r.hit.reduce((a, b) => a + b, 0) };
}

/* ------------------------------------------------------------------ 실행 / entry point */
/* 직접 실행할 때만 돈다. 다른 모듈이 renderGroups 만 가져다 쓸 때는 건너뛴다
   (argv[1] 이 없을 수 있어 방어적으로 읽는다).
   Runs only when executed directly; skipped when another module imports renderGroups
   (argv[1] can be absent, so it is read defensively). */
if ((process.argv[1] || "").endsWith("render-thumb.mjs")) {
  const args = process.argv.slice(2);
  const only = args.includes("--only") ? args[args.indexOf("--only") + 1] : null;
  const doPart2 = args.includes("--part2");
  const doPart1 = !doPart2 || args.includes("--part1");
  let made = 0;

  if (doPart1) {
    const { buildShaft3D } = await import("../js/shaft-cad.js");
    const idxPath = ROOT + "samples/index.json";
    const idx = JSON.parse(readFileSync(idxPath, "utf8"));
    for (const s of idx.samples) {
      if (only && s.id !== only) continue;
      const dir = `${ROOT}samples/${s.id}/`;
      /* 무엇을 그릴 것인가 / which spec to draw:
         판독 결과가 있으면 그것을 그린다. 화면에서 그 샘플을 눌렀을 때 실제로 나오는 모양이라
         "도면 → 결과" 짝이 사실과 맞는다. 없으면 정답 사양으로 그리고 그 사실을 기록한다.
         If a reading exists, draw that: it is what the screen actually shows for this sample, so the
         drawing→result pair stays truthful. Otherwise draw the reference spec and record that it is one. */
      const hasRead = existsSync(dir + "extracted.json");
      const spec = hasRead
        ? (JSON.parse(readFileSync(dir + "extracted.json", "utf8")).dsl)
        : JSON.parse(readFileSync(dir + "golden.json", "utf8"));
      const built = buildShaft3D(spec);            /* { root, notes, ... } */
      const info = await renderGroups(collectTriangles(built.root), dir + "result.webp");
      s.files.result = "result.webp";
      s.result_from = hasRead ? "read" : "reference";
      console.log(`  ${s.id} → result.webp (${info.painted} px, ${s.result_from})`);
      made++;
    }
    if (!only) writeFileSync(idxPath, JSON.stringify(idx, null, 1));
  }

  if (doPart2) {
    const { buildPart2, closePart2 } = await import("./part2-build.mjs");
    const golden = JSON.parse(readFileSync(ROOT + "assets/part2/golden.json", "utf8"));
    for (const [id, g] of Object.entries(golden)) {
      if (only && id !== only) continue;
      const built = await buildPart2(id, g);
      if (!built) { console.log(`  ${id} — 만들지 못하는 부류라 건너뜁니다 / not buildable, skipped`); continue; }
      const info = await renderGroups(built.groups, `${ROOT}assets/part2/${id}-result.webp`);
      console.log(`  ${id} → ${id}-result.webp (${info.painted} px)`);
      made++;
    }
    await closePart2();
  }
  console.log(`그림 ${made}장 / ${made} images`);
}
