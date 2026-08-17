/* Part 2 예시 도면 3종을 SVG 로 그린다 (3각법 · 정면/윗면/우측면 + 등각 참고도 + 치수).
   사용자가 준 실제 도면(브래킷 3면도 · 베어링 하우징 · 사각 플랜지 곡관)과 같은 부류를 정답 치수와 함께 만든다.
   같은 파일이 정답(golden)도 낸다: 3D 복원 결과를 무엇과 비교할지 여기서 정한다.
   node tools/gen-part2-samples.mjs  → assets/part2/{bracket,housing,elbow}.svg + assets/part2/golden.json */
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const OUT = join(fileURLToPath(new URL("../", import.meta.url)), "assets", "part2");
mkdirSync(OUT, { recursive: true });

const S = "#111111", THIN = 1, THICK = 2.6, HATCH = "#333";
const F = 'font-family="Helvetica, Arial, sans-serif"';

/* 픽셀/밀리 축척(px per mm)과 원점을 뷰마다 다르게 두어 "OCR 로 축척을 읽는" 게 의미 있게 한다 */
/* 제도 관례대로: 치수 보조선은 물체 가장자리(from)에서 조금 띄워 시작해 치수선 너머 6px 까지, 화살촉은 8×3 */
function dimH(x1, x2, y, text, opts = {}) {
  const from = opts.from ?? y - 12;
  const dir = y > from ? 1 : -1;
  const ex = `<path d="M${x1} ${from + 3 * dir} V${y + 6 * dir} M${x2} ${from + 3 * dir} V${y + 6 * dir}"/>`;
  return `${ex}<path d="M${x1} ${y} H${x2}"/><path d="M${x1} ${y} l8 -1.5 v3 z M${x2} ${y} l-8 -1.5 v3 z" fill="${S}"/>
    <text x="${(x1 + x2) / 2}" y="${y - 5}" text-anchor="middle" font-size="${opts.fs ?? 15}" ${F} fill="${S}">${text}</text>`;
}
function dimV(y1, y2, x, text, opts = {}) {
  const from = opts.from ?? x + 12;
  const dir = x > from ? 1 : -1;
  const ex = `<path d="M${from + 3 * dir} ${y1} H${x + 6 * dir} M${from + 3 * dir} ${y2} H${x + 6 * dir}"/>`;
  return `${ex}<path d="M${x} ${y1} V${y2}"/><path d="M${x} ${y1} l-1.5 8 h3 z M${x} ${y2} l-1.5 -8 h3 z" fill="${S}"/>
    <text x="${x + 6}" y="${(y1 + y2) / 2 + 5}" font-size="${opts.fs ?? 15}" ${F} fill="${S}">${text}</text>`;
}
const cl = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke-dasharray="16 5 3 5" stroke-width="0.9"/>`;
const hatch = (x, y, w, h) => { let s = ""; for (let k = -h; k < w; k += 9) s += `<path d="M${x + k} ${y + h} L${x + k + h} ${y}" stroke="${HATCH}" stroke-width="0.8"/>`; return `<g clip-path="url(#c${x}${y})"><clipPath id="c${x}${y}"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath>${s}</g>`; };
const title = (x, y, name, no, scale = "1:1") => `<g stroke="${S}" stroke-width="1" fill="none"><rect x="${x}" y="${y}" width="300" height="60"/><path d="M${x} ${y + 30} H${x + 300} M${x + 150} ${y} V${y + 60}"/></g>
  <g font-size="12" ${F} fill="${S}"><text x="${x + 6}" y="${y + 20}">부품명 ${name}</text><text x="${x + 156}" y="${y + 20}">도번 ${no}</text><text x="${x + 6}" y="${y + 50}">척도 ${scale}</text><text x="${x + 156}" y="${y + 50}">3각법 · 단위 mm</text></g>`;
const iso = (paths, x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="${S}" stroke-width="1.6" fill="#f3f3f3" stroke-linejoin="round">${paths}</g>`;

/* ================================================================ 1. L 브래킷 (이미지 2 부류)
   밑판 90×50×10, 왼쪽 끝 세움판 50(폭)×40(높이)×10, 세움판에 ⌀12 관통, 밑판 오른쪽에 ⌀20 관통, 세움판 위 모서리 C5 ×2 */
{
  const k = 5;                       /* px/mm */
  const L = 90, W = 50, T = 10, H = 40, HOLE1 = 12, HOLE2 = 20;
  const fx = 90, fy = 620;           /* 정면도 원점(왼쪽 아래) */
  const front = `M${fx} ${fy} h${L * k} v${-T * k} h${-(L - T) * k} v${-(H - T) * k} l${-0} 0 h${-T * k} z`;
  /* 정면 윤곽: 세움판 위 모서리 모따기 C5 (왼쪽 위 두 모서리) */
  const frontPath = `M${fx} ${fy} H${fx + L * k} V${fy - T * k} H${fx + T * k} V${fy - H * k + k * 5} L${fx + T * k - 0} ${fy - H * k}  H${fx + 5 * k} L${fx} ${fy - H * k + 5 * k} Z`;
  const tx = fx, ty = fy - H * k - 60 - W * k;   /* 윗면도 원점(왼쪽 위) — 3각법이라 정면도 위에 */
  const sx = fx + L * k + 70, sy = fy;             /* 우측면도 원점(왼쪽 아래) — 정면도 오른쪽 */
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="860" viewBox="0 0 1200 860">
<rect width="1200" height="860" fill="#ffffff"/>
<g stroke="${S}" stroke-width="${THICK}" fill="#f3f3f3">
  <!-- 정면도 -->
  <path d="${frontPath}"/>
  <!-- 윗면도: 밑판 90×50, 세움판 자리 10×50, 구멍 ⌀20 (x=70,z=25), 세움판 구멍은 위에서 안 보임 -->
  <rect x="${tx}" y="${ty}" width="${L * k}" height="${W * k}"/>
  <path d="M${tx + T * k} ${ty} V${ty + W * k}"/>
  <circle cx="${tx + 70 * k}" cy="${ty + 25 * k}" r="${(HOLE2 / 2) * k}" fill="#fff"/>
  <!-- 우측면도: 폭 50 × 높이 40, 밑판 두께 10, 세움판 구멍 ⌀12 (z=25, y=25) -->
  <path d="M${sx} ${sy} h${W * k} v${-H * k} h${-W * k} z"/>
  <path d="M${sx} ${sy - T * k} H${sx + W * k}"/>
  <circle cx="${sx + 25 * k}" cy="${sy - 25 * k}" r="${(HOLE1 / 2) * k}" fill="#fff"/>
</g>
<g stroke="${S}" stroke-width="1" fill="none">
  <!-- 숨은선: 정면도에 세움판 구멍(⌀12)·밑판 구멍(⌀20) -->
  <path d="M${fx + (25 - 6) * k} ${fy - T * k} V${fy - H * k + 5 * k}" stroke-dasharray="6 3"/>
  <path d="M${fx + 0} ${fy - (25 + 6) * k} H${fx + T * k} M${fx} ${fy - (25 - 6) * k} H${fx + T * k}" stroke-dasharray="6 3"/>
  <path d="M${fx + (70 - 10) * k} ${fy} V${fy - T * k} M${fx + (70 + 10) * k} ${fy} V${fy - T * k}" stroke-dasharray="6 3"/>
  <!-- 중심선 -->
  ${cl(tx + 70 * k, ty + 25 * k - 60, tx + 70 * k, ty + 25 * k + 60)}${cl(tx + 70 * k - 60, ty + 25 * k, tx + 70 * k + 60, ty + 25 * k)}
  ${cl(sx + 25 * k, sy - 25 * k - 45, sx + 25 * k, sy - 25 * k + 45)}${cl(sx + 25 * k - 45, sy - 25 * k, sx + 25 * k + 45, sy - 25 * k)}
  <!-- 치수 -->
  ${dimH(fx, fx + L * k, fy + 40, "90", { from: fy })}
  ${dimH(fx, fx + T * k, fy + 18, "10", { fs: 13, from: fy })}
  ${dimH(fx, fx + 70 * k, fy + 62, "70", { from: fy })}
  ${dimV(fy - H * k, fy, fx - 34, "40", { from: fx })}
  ${dimV(fy - T * k, fy, fx - 16, "10", { fs: 13, from: fx })}
  ${dimH(tx, tx + L * k, ty - 22, "90", { from: ty })}
  ${dimV(ty, ty + W * k, tx + L * k + 40, "50", { from: tx + L * k })}
  ${dimV(ty, ty + 25 * k, tx + L * k + 20, "25", { fs: 13, from: tx + L * k })}
  ${dimH(sx, sx + W * k, sy + 40, "50", { from: sy })}
  ${dimH(sx, sx + 25 * k, sy + 18, "25", { fs: 13, from: sy })}
  ${dimV(sy - H * k, sy, sx + W * k + 30, "40", { from: sx + W * k })}
  ${dimV(sy - 25 * k, sy, sx + W * k + 12, "25", { fs: 13, from: sx + W * k })}
</g>
<g font-size="15" ${F} fill="${S}">
  <text x="${tx + 70 * k + 30}" y="${ty + 25 * k - 40}">⌀20 관통</text>
  <text x="${sx + 25 * k + 36}" y="${sy - 25 * k - 34}">⌀12 관통</text>
  <text x="${fx + 12}" y="${fy - H * k - 22}">2-C5</text>
  <text x="${fx}" y="${fy + 100}" font-size="13">정면도</text><text x="${tx}" y="${ty - 40}" font-size="13">윗면도</text><text x="${sx}" y="${sy + 100}" font-size="13">우측면도</text>
</g>
${iso(`<path d="M0 120 L120 60 L120 30 L30 75 L30 0 L0 0 Z"/><path d="M0 120 L120 60 L200 100 L80 160 Z" fill="#e6e6e6"/><path d="M80 160 L200 100 L200 70 L80 130 Z" fill="#dcdcdc"/><path d="M30 0 L120 30 L120 60 L30 75 Z" fill="#e6e6e6"/><ellipse cx="150" cy="105" rx="14" ry="7" fill="#fff"/><ellipse cx="72" cy="42" rx="5" ry="10" fill="#fff"/>`, 880, 100, 1.1)}
<text x="900" y="330" font-size="12" ${F} fill="${S}">등각 (참고)</text>
${title(870, 780, "L 브래킷", "P2-BRK-01")}
</svg>`;
  writeFileSync(join(OUT, "bracket.svg"), svg);
}

/* ================================================================ 2. 베어링 하우징 (이미지 3 부류)
   밑판 120×50×15 (볼트 구멍 ⌀9 ×4), 위에 원통 하우징 외경 ⌀70 폭 40 중심높이 45, 보어 ⌀35 관통.
   하우징과 밑판 사이 목 폭 60. 정면 = 보어가 보이는 면. */
{
  const k = 3.6;
  const BL = 120, BW = 50, BT = 15, OD = 70, BORE = 35, HW = 40, CY = 45, NECK = 60;
  const fx = 110, fy = 760;              /* 정면도 (왼쪽 아래) */
  const cx = fx + (BL / 2) * k, cy = fy - CY * k;
  const tx = fx, ty = fy - (CY + OD / 2) * k - 110 - BW * k;   /* 윗면도 */
  const sx = fx + BL * k + 80, sy = fy;   /* 우측면도 */
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="960" viewBox="0 0 1200 960">
<rect width="1200" height="960" fill="#ffffff"/>
<g stroke="${S}" stroke-width="${THICK}" fill="#f3f3f3">
  <!-- 정면도: 밑판 + 목 + 원통 -->
  <path d="M${fx} ${fy} H${fx + BL * k} V${fy - BT * k} H${cx + (NECK / 2) * k} V${cy + Math.sqrt((OD / 2) ** 2 - (NECK / 2) ** 2) * k} A${(OD / 2) * k} ${(OD / 2) * k} 0 1 0 ${cx - (NECK / 2) * k} ${cy + Math.sqrt((OD / 2) ** 2 - (NECK / 2) ** 2) * k} V${fy - BT * k} H${fx} Z"/>
  <circle cx="${cx}" cy="${cy}" r="${(BORE / 2) * k}" fill="#fff"/>
  <!-- 윗면도: 밑판 120×50, 하우징 폭 40 띠, 볼트 구멍 4 -->
  <rect x="${tx}" y="${ty}" width="${BL * k}" height="${BW * k}"/>
  <rect x="${tx + ((BL - OD) / 2) * k}" y="${ty + ((BW - HW) / 2) * k}" width="${OD * k}" height="${HW * k}" fill="#e6e6e6"/>
  <path d="M${tx + ((BL - NECK) / 2) * k} ${ty + ((BW - HW) / 2) * k} V${ty + ((BW + HW) / 2) * k} M${tx + ((BL + NECK) / 2) * k} ${ty + ((BW - HW) / 2) * k} V${ty + ((BW + HW) / 2) * k}"/>
  <circle cx="${tx + 12 * k}" cy="${ty + 10 * k}" r="${4.5 * k}" fill="#fff"/><circle cx="${tx + (BL - 12) * k}" cy="${ty + 10 * k}" r="${4.5 * k}" fill="#fff"/>
  <circle cx="${tx + 12 * k}" cy="${ty + (BW - 10) * k}" r="${4.5 * k}" fill="#fff"/><circle cx="${tx + (BL - 12) * k}" cy="${ty + (BW - 10) * k}" r="${4.5 * k}" fill="#fff"/>
  <!-- 우측면도: 폭 50 밑판 15, 하우징 폭 40 높이 45+35=80 -->
  <path d="M${sx} ${sy} h${BW * k} v${-BT * k} h${-((BW - HW) / 2) * k} v${-(CY + OD / 2 - BT) * k} h${-HW * k} v${(CY + OD / 2 - BT) * k} h${-((BW - HW) / 2) * k} z"/>
</g>
<g stroke="${S}" stroke-width="1" fill="none">
  <!-- 숨은선: 우측면도의 보어 -->
  <path d="M${sx + ((BW - HW) / 2) * k} ${sy - (CY - BORE / 2) * k} H${sx + ((BW + HW) / 2) * k} M${sx + ((BW - HW) / 2) * k} ${sy - (CY + BORE / 2) * k} H${sx + ((BW + HW) / 2) * k}" stroke-dasharray="6 3"/>
  ${cl(cx, cy - 150, cx, cy + 150)}${cl(cx - 150, cy, cx + 150, cy)}
  ${cl(sx + (BW / 2) * k, sy - (CY + OD / 2) * k - 20, sx + (BW / 2) * k, sy + 20)}
  ${dimH(fx, fx + BL * k, fy + 40, "120", { from: fy })}
  ${dimH(cx - (NECK / 2) * k, cx + (NECK / 2) * k, fy + 18, "60", { fs: 13, from: fy })}
  ${dimV(cy, fy, fx - 34, "45", { from: fx })}
  ${dimV(fy - BT * k, fy, fx - 16, "15", { fs: 13, from: fx })}
  ${dimH(tx, tx + BL * k, ty - 30, "120", { from: ty })}
  ${dimH(tx, tx + 12 * k, ty - 12, "12", { fs: 12, from: ty })}
  ${dimV(ty, ty + BW * k, tx + BL * k + 44, "50", { from: tx + BL * k })}
  ${dimV(ty + ((BW - HW) / 2) * k, ty + ((BW + HW) / 2) * k, tx - 20, "40", { fs: 13, from: tx })}
  ${dimH(sx, sx + BW * k, sy + 40, "50", { from: sy })}
  ${dimH(sx + ((BW - HW) / 2) * k, sx + ((BW + HW) / 2) * k, sy + 18, "40", { fs: 13, from: sy })}
  ${dimV(sy - (CY + OD / 2) * k, sy, sx + BW * k + 30, "80", { from: sx + BW * k })}
</g>
<g font-size="15" ${F} fill="${S}">
  <text x="${cx + 70}" y="${cy - 110}">⌀70</text>
  <text x="${cx + (BORE / 2) * k + 14}" y="${cy + 40}">⌀35 관통</text>
  <text x="${tx + 20 * k}" y="${ty - 40}">4-⌀9</text>
  <text x="${fx}" y="${fy + 100}" font-size="13">정면도</text><text x="${tx}" y="${ty - 55}" font-size="13">윗면도</text><text x="${sx}" y="${sy + 100}" font-size="13">우측면도</text>
</g>
${iso(`<path d="M0 130 L140 60 L230 105 L90 175 Z" fill="#e6e6e6"/><path d="M90 175 L230 105 L230 85 L90 155 Z" fill="#dcdcdc"/><path d="M0 130 L0 110 L140 40 L140 60 Z"/><path d="M60 100 a40 40 0 1 1 80 -20 l30 15 a40 40 0 1 1 -80 20 z" fill="#ececec"/><ellipse cx="128" cy="78" rx="12" ry="18" fill="#fff"/><ellipse cx="30" cy="150" rx="6" ry="3" fill="#fff"/><ellipse cx="200" cy="120" rx="6" ry="3" fill="#fff"/>`, 880, 120, 1.05)}
<text x="900" y="360" font-size="12" ${F} fill="${S}">등각 (참고)</text>
${title(870, 880, "베어링 하우징", "P2-HSG-02")}
</svg>`;
  writeFileSync(join(OUT, "housing.svg"), svg);
}

/* ================================================================ 3. 사각 플랜지 곡관 (이미지 4 부류)
   □320 플랜지(구멍 4-⌀30) 두 개, 관 외경 ⌀250 내경 ⌀200, 굽힘 R250. 단면도로만 정의되는 부품 → 이 버전은 미지원임을 데모가 말해야 한다 */
{
  const k = 0.95;
  const fx = 90, fy = 420;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="900" viewBox="0 0 1300 900">
<rect width="1300" height="900" fill="#ffffff"/>
<g stroke="${S}" stroke-width="${THICK}" fill="#f3f3f3">
  <!-- 플랜지 정면(□320, ⌀200 관통, 4-⌀30) -->
  <rect x="${fx}" y="${fy - 320 * k}" width="${320 * k}" height="${320 * k}" rx="${15 * k}"/>
  <circle cx="${fx + 160 * k}" cy="${fy - 160 * k}" r="${100 * k}" fill="#fff"/>
  <circle cx="${fx + 40 * k}" cy="${fy - 280 * k}" r="${15 * k}" fill="#fff"/><circle cx="${fx + 280 * k}" cy="${fy - 280 * k}" r="${15 * k}" fill="#fff"/>
  <circle cx="${fx + 40 * k}" cy="${fy - 40 * k}" r="${15 * k}" fill="#fff"/><circle cx="${fx + 280 * k}" cy="${fy - 40 * k}" r="${15 * k}" fill="#fff"/>
  <!-- 단면 A-A: 곡관 (해칭) -->
  <g transform="translate(${fx + 400} ${fy - 320 * k})">
    <path d="M0 0 H${50 * k} V${100 * k} A${225 * k} ${225 * k} 0 0 1 ${275 * k} ${325 * k} H${375 * k} V${375 * k} H${275 * k} A${275 * k} ${275 * k} 0 0 0 ${0} ${100 * k} Z" fill="#fff"/>
    <path d="M${50 * k} 0 V${100 * k} A${225 * k} ${225 * k} 0 0 1 ${275 * k} ${325 * k} H${375 * k}" fill="none"/>
    <path d="M${50 * k} 0 H${100 * k} V${100 * k} A${175 * k} ${175 * k} 0 0 1 ${275 * k} ${275 * k} H${375 * k} V${325 * k} H${275 * k} A${225 * k} ${225 * k} 0 0 0 ${50 * k} ${100 * k} Z" fill="#fff"/>
  </g>
</g>
<g stroke="${S}" stroke-width="1" fill="none">
  ${dimH(fx, fx + 320 * k, fy - 320 * k - 30, "□320", { from: fy - 320 * k })}
  ${dimH(fx + 40 * k, fx + 280 * k, fy - 320 * k - 12, "240", { fs: 12, from: fy - 320 * k })}
  ${dimV(fy - 320 * k, fy, fx + 320 * k + 34, "□320", { from: fx + 320 * k })}
  ${dimH(fx + 400, fx + 400 + 375 * k, fy - 320 * k + 375 * k + 40, "375", { from: fy - 320 * k + 375 * k })}
  ${dimV(fy - 320 * k, fy - 320 * k + 375 * k, fx + 400 + 375 * k + 34, "375", { from: fx + 400 + 375 * k })}
</g>
<g font-size="15" ${F} fill="${S}">
  <text x="${fx + 60 * k}" y="${fy - 160 * k + 5}">⌀200</text>
  <text x="${fx + 300 * k}" y="${fy - 20 * k}">4-⌀30</text>
  <text x="${fx + 400 + 150 * k}" y="${fy - 320 * k + 200 * k}">R250 · ⌀250 / ⌀200</text>
  <text x="${fx + 400}" y="${fy - 320 * k + 375 * k + 80}" font-size="13">단면 A-A</text><text x="${fx}" y="${fy - 320 * k - 45}" font-size="13">플랜지 정면</text>
</g>
${iso(`<path d="M20 90 L120 40 L220 90 L120 140 Z" fill="#e6e6e6"/><ellipse cx="120" cy="90" rx="42" ry="21" fill="#fff"/><path d="M60 110 Q40 260 190 300 L200 262 Q100 240 120 140 Z" fill="#dcdcdc"/><path d="M150 265 L250 215 L350 265 L250 315 Z" fill="#e6e6e6"/><ellipse cx="250" cy="265" rx="42" ry="21" fill="#fff"/>`, 900, 40, 0.8)}
<text x="920" y="320" font-size="12" ${F} fill="${S}">등각 (참고)</text>
${title(970, 820, "사각 플랜지 곡관", "P2-ELB-03")}
</svg>`;
  writeFileSync(join(OUT, "elbow.svg"), svg);
}

/* 정답: 복원 결과를 비교할 값 (mm) */
writeFileSync(join(OUT, "golden.json"), JSON.stringify({
  bracket: { name: "L 브래킷", level: 1, size: [90, 40, 50], volume_cm3: +((90 * 50 * 10 + 40 * 50 * 10 - 10 * 50 * 10 - Math.PI * 100 * 10 - Math.PI * 36 * 10 - 2 * 12.5 * 50) / 1000).toFixed(1),
    holes: [{ dia: 20, axis: "Y" }, { dia: 12, axis: "X" }], dims: [90, 50, 40, 10, 70, 25, 20, 12] },
  housing: { name: "베어링 하우징", level: 2, size: [120, 80, 50], holes: [{ dia: 35, axis: "Z" }, { dia: 9, axis: "Y", count: 4 }], dims: [120, 50, 15, 45, 60, 40, 80, 70, 35, 9] },
  elbow: { name: "사각 플랜지 곡관", level: 3, size: [375, 375, 320], unsupported: "곡관은 단면도의 경로와 단면으로 스윕해야 한다. 3뷰 교집합으로는 만들 수 없다." },
}, null, 2));
console.log("assets/part2: bracket.svg housing.svg elbow.svg golden.json");
