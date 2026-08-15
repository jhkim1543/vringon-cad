/* VRINGON 회전체 — DSL → 2D 제작 도면 (KS/ISO 관례)
   합성 데이터의 "도면" 쪽을 만드는 렌더러이자, 검증기가 재렌더링에 쓰는 렌더러다.
   출력은 중립 그리기 목록(선·원호·원·문자·화살표·해칭)이고, toSVG / toDXF 가 이를 파일로 쓴다.
   같은 목록에서 라벨(치수 문자열·bbox·DSL 대응 필드)이 나오므로 데이터셋 라벨은 렌더와 어긋날 수 없다.

   좌표: 모델 공간은 mm, 축 = x, y 위쪽 양수(수학 좌표). SVG 로 갈 때 y 를 뒤집는다.
   정면도 = +Z 에서 본 모습. 키홈·평면·횡구멍의 angle 0 은 관찰자를 향한다.
   순수 모듈(브라우저·Node 공용). */

import { totalLength, segmentDiameters, boreDiameterAt } from "./shaft-schema.js";
import { buildTopLine, buildInnerLine, collectEvents } from "./shaft-profile.js";
import { parseThreadSpec, centerHoleDims } from "./shaft-standards.js";

const DEG = Math.PI / 180;
const fmt = (v) => {
  const r = Math.round(v * 100) / 100;
  return Number.isInteger(r) ? String(r) : String(r).replace(/\.?0+$/, "");
};
export const DIA = "⌀";   /* ⌀ */

/* 문자 폭 추정 (sheet mm) — 정렬·충돌 회피용 */
function textWidth(text, size) {
  let w = 0;
  for (const ch of String(text)) w += /[0-9]/.test(ch) ? 0.56 : ch === "." ? 0.28 : ch === " " ? 0.3 : /[A-Z]/.test(ch) ? 0.68 : /[a-z]/.test(ch) ? 0.55 : /[가-힣]/.test(ch) ? 0.95 : /[⌀×]/.test(ch) ? 0.75 : 0.6;
  return w * size;
}

/* ============================================================== 그리기 목록 */
class Draw {
  constructor(opts) {
    this.items = []; this.labels = []; this.opts = opts;
    this.textBoxes = [];   /* 충돌 회피용 (모델 공간 bbox) */
  }
  line(x1, y1, x2, y2, layer = "outline") { this.items.push({ kind: "line", x1, y1, x2, y2, layer }); }
  poly(pts, layer = "outline", closed = false) { this.items.push({ kind: "polyline", pts, layer, closed }); }
  circle(cx, cy, r, layer = "outline") { this.items.push({ kind: "circle", cx, cy, r, layer }); }
  arc(cx, cy, r, a0, a1, layer = "outline") { this.items.push({ kind: "arc", cx, cy, r, a0, a1, layer }); }   /* 도, CCW a0→a1 */
  hatch(polygon) { this.items.push({ kind: "hatch", polygon, layer: "hatch" }); }
  arrow(x, y, angle, layer = "dim") { this.items.push({ kind: "arrow", x, y, angle, size: this.opts.arrow, layer }); }
  text(x, y, text, o = {}) {
    const size = o.size || this.opts.textSize;
    const anchor = o.anchor || "middle";
    const w = textWidth(text, size) / this.opts.scale, h = size / this.opts.scale;
    const x0 = anchor === "middle" ? x - w / 2 : anchor === "end" ? x - w : x;
    const box = o.rotate ? [x - h / 2, y - w / 2, x + h / 2, y + w / 2] : [x0, y - h * 0.15, x0 + w, y + h * 0.9];
    this.items.push({ kind: "text", x, y, text, size, anchor, rotate: o.rotate || 0, layer: o.layer || "text", role: o.role || "dim" });
    if (o.label) this.labels.push({ text, ...o.label, bbox: box });
    this.textBoxes.push(box);
    return box;
  }
  /* 문자 상자가 겹치면 위로 밀어 올린다(모델 공간). 반환: 최종 y */
  freeY(x, y, text, size, step) {
    const w = textWidth(text, size) / this.opts.scale, h = size / this.opts.scale;
    let yy = y;
    for (let k = 0; k < 8; k++) {
      const box = [x - w / 2 - 0.5, yy - h * 0.15, x + w / 2 + 0.5, yy + h * 0.9];
      const hit = this.textBoxes.some((b) => !(box[2] < b[0] || box[0] > b[2] || box[3] < b[1] || box[1] > b[3]));
      if (!hit) return yy;
      yy += step;
    }
    return yy;
  }
}

/* 선형 치수: (x1,y1)-(x2,y2) 사이, 치수선을 offset 만큼 법선 방향으로 띄워서.
   horizontal: 치수선 y = yd; vertical: 치수선 x = xd. 화살표는 안/밖 자동. */
function dimLinear(D, a, b, dimPos, text, o = {}) {
  const horiz = o.dir !== "v";
  const { extGap, extOver, arrow } = D.opts;
  const label = o.label;
  if (horiz) {
    const [x1, x2] = [Math.min(a.x, b.x), Math.max(a.x, b.x)];
    const yd = dimPos;
    /* 보조선: 도형에서 extGap 띄워 시작, 치수선 너머 extOver */
    if (!o.noExt) {
      for (const p of [a, b]) {
        const dir = Math.sign(yd - p.y) || 1;
        D.line(p.x, p.y + dir * extGap, p.x, yd + dir * extOver, "dim");
      }
    }
    const span = x2 - x1;
    const inside = span >= arrow * 2.6 + 0.5;
    if (inside) {
      D.line(x1, yd, x2, yd, "dim");
      D.arrow(x1, yd, 0, "dim"); D.arrow(x2, yd, 180, "dim");
    } else {
      D.line(x1 - arrow * 2.2, yd, x2 + arrow * 2.2, yd, "dim");
      D.arrow(x1, yd, 180, "dim"); D.arrow(x2, yd, 0, "dim");
    }
    const size = o.size || D.opts.textSize;
    const tw = textWidth(text, size) / D.opts.scale;
    let tx = (x1 + x2) / 2, ty = yd + 0.9;
    if (!inside || tw > span - 1) {
      /* 좁으면 문자를 옆으로 뺀다 (오른쪽 화살표 바깥) */
      tx = o.narrowSide === "left" ? x1 - arrow * 2.4 - tw / 2 : x2 + arrow * 2.4 + tw / 2;
    }
    if (o.avoid !== false) ty = D.freeY(tx, ty, text, size, (size / D.opts.scale) * 1.4);
    D.text(tx, ty, text, { size, label });
    return { x: tx, y: ty };
  }
  const [y1, y2] = [Math.min(a.y, b.y), Math.max(a.y, b.y)];
  const xd = dimPos;
  if (!o.noExt) {
    for (const p of [a, b]) {
      const dir = Math.sign(xd - p.x) || 1;
      D.line(p.x + dir * extGap, p.y, xd + dir * extOver, p.y, "dim");
    }
  }
  const span = y2 - y1;
  const inside = span >= arrow * 2.6 + 0.5;
  if (inside) {
    D.line(xd, y1, xd, y2, "dim");
    D.arrow(xd, y1, 90, "dim"); D.arrow(xd, y2, 270, "dim");
  } else {
    D.line(xd, y1 - arrow * 2.2, xd, y2 + arrow * 2.2, "dim");
    D.arrow(xd, y1, 270, "dim"); D.arrow(xd, y2, 90, "dim");
  }
  const size = o.size || D.opts.textSize;
  /* 수직 치수 문자는 세로쓰기(회전 90°) 로 치수선 왼쪽 */
  const tx = xd - 0.9, ty = (y1 + y2) / 2;
  D.text(tx, ty, text, { size, rotate: 90, label });
  return { x: tx, y: ty };
}

/* 지름 치수(도형 관통형): x 위치에 −r..+r 수직 치수선, 문자는 위쪽 바깥 */
function dimDiameterInside(D, x, r, text, o = {}) {
  const { arrow } = D.opts;
  const size = o.size || D.opts.textSize;
  const inside = 2 * r >= arrow * 2.6 + 1;
  const topEnd = r + (o.lead ?? 5);
  if (inside) {
    D.line(x, -r, x, topEnd, "dim");
    D.arrow(x, -r, 90, "dim"); D.arrow(x, r, 270, "dim");
  } else {
    D.line(x, -r - arrow * 2.2, x, topEnd, "dim");
    D.arrow(x, -r, 270, "dim"); D.arrow(x, r, 90, "dim");
  }
  const ty = D.freeY(x, topEnd + 0.8, text, size, (size / D.opts.scale) * 1.4);
  if (ty > topEnd + 0.8 + 1e-6) D.line(x, topEnd, x, ty - 0.3, "dim");
  D.text(x, ty, text, { size, label: o.label });
  return ty;
}

/* 지시선 + 문자: (px,py) 에서 (tx,ty) 로 꺾인 지시선, 끝에 화살표(도형을 가리킴) */
function leader(D, px, py, tx, ty, text, o = {}) {
  const size = o.size || D.opts.textSize;
  D.line(px, py, tx, ty, "dim");
  const w = textWidth(text, size) / D.opts.scale;
  const right = tx >= px;
  const shelfEnd = right ? tx + w + 1 : tx - w - 1;
  D.line(tx, ty, shelfEnd, ty, "dim");
  D.arrow(px, py, (Math.atan2(py - ty, px - tx) / DEG), "dim");
  D.text(right ? tx + 0.5 : tx - 0.5, ty + 0.7, text, { size, anchor: right ? "start" : "end", label: o.label });
}


/* 절단선 표시: 부품 위·아래 바깥에 굵은 짧은 선 + 보는 방향 화살표(−x, 오른쪽에서 봄) + 문자 */
function cutMarker(D, xc, R, lt, M, O) {
  for (const s of [1, -1]) {
    const y0 = s * (R + M(2.5)), y1 = s * (R + M(7.5));
    D.line(xc, y0, xc, y1, "cut");
    D.line(xc, y1, xc - M(3), y1, "cut");
    D.arrow(xc - M(4.5), y1, 0, "cut");
    D.text(xc + M(1.5), y1 + (s > 0 ? M(0.6) : -M(3.2)), lt, { size: O.textSize, anchor: "start", role: "note" });
  }
}

/* ============================================================== 메인 */
export const DEFAULT_DRAW_OPTS = {
  scale: 1,           /* 시트 축척 (도형 mm → 시트 mm) — 자동 결정됨 */
  textSize: 3.5,      /* 치수 문자 높이 (sheet mm) */
  noteSize: 2.5,
  arrow: 3.0,         /* 화살표 길이 (sheet mm) */
  extGap: 1.0, extOver: 2.0,
  chainOmit: "longest",   /* 'longest' | 'none' | 'random' : 연쇄치수에서 하나 생략(과잉치수 회피) */
  omitRatio: 0,           /* 강건성 세트: 추가로 무작위 생략할 치수 비율 */
  showHidden: true,
  titleBlock: true,
  sectionViews: true,
  paper: "white",
  seed: 1,
  centerHoleCallout: true,
};

export function drawShaft(dsl, userOpts = {}) {
  const opts = { ...DEFAULT_DRAW_OPTS, ...userOpts };
  const L = totalLength(dsl);
  const ev = collectEvents(dsl);
  const top = buildTopLine(dsl, 12).points;
  const inner = buildInnerLine(dsl, 12).points;
  const Rmax = Math.max(...top.map((p) => p.r));
  /* 축척: 정면도 + 단면도가 A4 가로(297×210, 여백 20) 에 들어가도록 */
  const nSections = opts.sectionViews ? ev.features.filter((f) => ["keyway", "flat", "hex"].includes(f.type)).length : 0;
  const contentW = L + nSections * (Rmax * 2 + 30) + 20;
  const contentH = Rmax * 2 + 42;
  const fitScale = Math.min(250 / contentW, 160 / contentH);
  const std = [5, 2, 1, 0.5, 0.2, 0.1];
  const scale = opts.scale === "auto" || opts.scale == null ? (std.find((s) => s <= fitScale) || 0.1) : opts.scale;
  const O = { ...opts, scale };
  /* 시트 공간에서 상수인 것들을 모델 공간으로 환산 */
  const M = (mm) => mm / scale;
  const D = new Draw({ ...O, arrow: M(O.arrow), extGap: M(O.extGap), extOver: M(O.extOver) });
  const rnd = mulberry(O.seed);
  const omit = (kind) => O.omitRatio > 0 && rnd() < O.omitRatio ? (D.labels.push({ omitted: true, kind }), true) : false;

  const sectioned = !!ev.bore;   /* 보어가 있으면 전단면도로 그린다 */

  /* ------------------------------------------------ 정면도 외형 (외형선) */
  const mirror = (pts) => pts.map((p) => ({ x: p.x, r: -p.r }));
  const polyPts = (pts) => pts.map((p) => [p.x, p.r]);
  D.poly(polyPts(top), "outline");
  D.poly(polyPts(mirror(top)), "outline");
  /* 끝면 수직선 */
  const first = top[0], last = top[top.length - 1];
  const rin0 = inner[0].r, rin1 = inner[inner.length - 1].r;
  if (sectioned) {
    D.line(0, rin0, 0, first.r, "outline"); D.line(0, -rin0, 0, -first.r, "outline");
    D.line(L, rin1, L, last.r, "outline"); D.line(L, -rin1, L, -last.r, "outline");
  } else {
    D.line(0, -first.r, 0, first.r, "outline");
    D.line(L, -last.r, L, last.r, "outline");
  }
  /* 단차·홈·모따기 등 수직 구간은 외형선 폴리라인에 이미 있다(같은 x 의 두 점).
     정면도에서 원통끼리 만나는 단차 면은 위·아래 외형선 사이를 잇는 수직선으로 보인다. */
  for (let i = 1; i < top.length; i++) {
    const a = top[i - 1], b = top[i];
    if (Math.abs(a.x - b.x) < 1e-9 && Math.abs(a.r - b.r) > 1e-9) {
      /* 단차/홈 벽: 위쪽 끝점의 작은 r 에서 아래쪽 대칭점까지 (관통 수직선) */
      const rSmall = Math.min(a.r, b.r);
      if (sectioned) {
        const rb = boreDiameterAt(dsl, a.x + 1e-6) / 2;
        const rb2 = boreDiameterAt(dsl, a.x - 1e-6) / 2;
        const rIn = Math.max(rb, rb2);
        D.line(a.x, rIn, a.x, rSmall, "outline"); D.line(a.x, -rIn, a.x, -rSmall, "outline");
      } else {
        D.line(a.x, -rSmall, a.x, rSmall, "outline");
      }
    }
    /* 모따기·라운드·필렛 시작점: 접선이 아닌 모서리(모따기)는 수직선을 그린다 */
    if (["chamfer_end", "chamfer_start"].includes(b.tag) || ["chamfer_end", "chamfer_start"].includes(a.tag)) {
      const p = ["chamfer_end", "chamfer_start"].includes(b.tag) ? b : a;
      if (sectioned) { const rb = boreDiameterAt(dsl, p.x) / 2; D.line(p.x, rb, p.x, p.r, "outline"); D.line(p.x, -rb, p.x, -p.r, "outline"); }
      else D.line(p.x, -p.r, p.x, p.r, "outline");
    }
  }
  /* 중심선 */
  D.line(-4, 0, L + 4, 0, "center");

  /* ------------------------------------------------ 단면(보어) */
  if (sectioned) {
    D.poly(polyPts(inner), "outline");
    D.poly(polyPts(mirror(inner)), "outline");
    for (let i = 1; i < inner.length; i++) {
      const a = inner[i - 1], b = inner[i];
      if (Math.abs(a.x - b.x) < 1e-9 && Math.abs(a.r - b.r) > 1e-9 && a.tag !== "bore_bottom") { /* 보어 단차 벽은 폴리라인이 그림 */ }
    }
    /* 해칭: 위 재료 영역 (외형 위선 ∪ 내형 위선 역순), 아래는 대칭 */
    const region = [...top.map((p) => [p.x, p.r]), ...inner.slice().reverse().map((p) => [p.x, p.r])];
    D.hatch(region);
    D.hatch(region.map(([x, y]) => [x, -y]));
  } else if (O.showHidden) {
    /* 외형도: 센터구멍은 숨은선 */
    for (const c of ev.centerHoles) {
      const s = c.end === "left" ? 1 : -1, x0 = c.x;
      const x1 = x0 + s * c.cone_depth, x2 = x1 + s * c.pilot_depth, x3 = x2 + s * (c.d / 2) / Math.tan(59 * DEG);
      for (const sg of [1, -1]) {
        D.line(x0, sg * c.D / 2, x1, sg * c.d / 2, "hidden");
        D.line(x1, sg * c.d / 2, x2, sg * c.d / 2, "hidden");
        D.line(x2, sg * c.d / 2, x3, 0, "hidden");
      }
      D.line(x1, -c.d / 2, x1, c.d / 2, "hidden");
    }
  }

  /* ------------------------------------------------ 나사 표기 (ISO 6410: 골지름 가는선, 나사끝 굵은선) */
  for (const th of ev.threads) {
    const seg = dsl.segments[th.i];
    /* 골지름선: 모따기 안쪽부터 나사끝까지 */
    const cham = ev.transitions.find((t) => t.type === "chamfer" && t.side === th.i);
    let xa = th.x0, xb = th.x1;
    if (cham) { if (cham.dir === "left" || cham.at === th.i) xa += cham.size; else xb -= cham.size; }
    /* 실제로 어느 쪽 끝이 자유단인지: 인접 세그먼트가 없거나 작으면 그쪽이 시작 */
    D.line(xa, th.r_minor, xb, th.r_minor, "thin");
    D.line(xa, -th.r_minor, xb, -th.r_minor, "thin");
    /* 나사 끝선(런아웃): 몸통에 붙은 쪽 */
    const nextL = th.i > 0 ? segmentDiameters(dsl.segments[th.i - 1])[1] / 2 : null;
    const nextR = th.i < dsl.segments.length - 1 ? segmentDiameters(dsl.segments[th.i + 1])[0] / 2 : null;
    const endX = (nextL !== null && nextL >= th.r_major) ? th.x0 : (nextR !== null && nextR >= th.r_major) ? th.x1 : null;
    if (endX !== null && Math.abs(endX - th.x0) > 1e-9) D.line(endX, -th.r_major, endX, th.r_major, "outline");
    if (endX !== null && Math.abs(endX - th.x0) < 1e-9 && !cham) D.line(endX, -th.r_major, endX, th.r_major, "outline");
  }

  /* ------------------------------------------------ 비축대칭 피처 (정면도) */
  const sectionsToDraw = [];
  let letter = 0;
  const LET = "ABCDEFGH";
  for (const f of ev.features) {
    if (f.type === "keyway") {
      const R = f.D / 2;
      /* 관찰자를 향한 키홈: 둥근 끝 홈 윤곽 (외형선) */
      const w2 = f.width / 2, x0 = f.x0, x1 = f.x1;
      if (x1 - x0 > f.width) {
        D.line(x0 + w2, w2, x1 - w2, w2, "outline"); D.line(x0 + w2, -w2, x1 - w2, -w2, "outline");
        D.arc(x0 + w2, 0, w2, 90, 270, "outline"); D.arc(x1 - w2, 0, w2, -90, 90, "outline");
      } else D.circle((x0 + x1) / 2, 0, w2, "outline");
      /* 절단선 A-A */
      const xc = (x0 + x1) / 2, lt = LET[letter++];
      cutMarker(D, xc, R, lt, M, O);
      sectionsToDraw.push({ f, R, letter: lt, xc });
    } else if (f.type === "flat") {
      const R = f.D / 2, c = Math.sqrt(Math.max(0, R * R - (R - f.depth) ** 2));
      D.line(f.x0, c, f.x1, c, "outline"); D.line(f.x0, -c, f.x1, -c, "outline");
      D.line(f.x0, -c, f.x0, c, "outline"); D.line(f.x1, -c, f.x1, c, "outline");
      const xc = (f.x0 + f.x1) / 2, lt = LET[letter++];
      cutMarker(D, xc, R, lt, M, O);
      sectionsToDraw.push({ f, R, letter: lt, xc });
    } else if (f.type === "hex") {
      const R = f.D / 2, a = f.across_flats / 2, Rc = a / Math.cos(30 * DEG);
      /* 정면: 앞을 보는 면의 위·아래 모서리 (Rc/2), 꼭짓점 실루엣은 외형선이 담당(min(R,Rc)) */
      const e = Math.min(Rc, R) / 2;
      D.line(f.x0, e, f.x1, e, "outline"); D.line(f.x0, -e, f.x1, -e, "outline");
      if (Rc > R) { /* 원통에 잘린 꼭짓점: 면과 원통 경계선 */
        const yb = Math.sqrt(Math.max(0, R * R - a * a));
        D.line(f.x0, yb, f.x1, yb, "thin"); D.line(f.x0, -yb, f.x1, -yb, "thin");
      }
      const xc = (f.x0 + f.x1) / 2, lt = LET[letter++];
      cutMarker(D, xc, R, lt, M, O);
      sectionsToDraw.push({ f, R, letter: lt, xc });
    } else if (f.type === "cross_hole") {
      const R = f.D / 2;
      if ((f.angle || 0) % 180 < 45 || (f.angle || 0) % 180 > 135) {
        D.circle(f.position, 0, f.diameter / 2, "outline");
        D.line(f.position - f.diameter / 2 - M(2), 0, f.position + f.diameter / 2 + M(2), 0, "center");
        D.line(f.position, -f.diameter / 2 - M(2), f.position, f.diameter / 2 + M(2), "center");
      } else if (O.showHidden) {
        const yb = boreDiameterAt(dsl, f.position) / 2;
        for (const s of [-1, 1]) {
          const x = f.position + s * f.diameter / 2;
          if (f.through !== false) { D.line(x, yb, x, R, "hidden"); D.line(x, -R, x, -yb, "hidden"); }
          else { D.line(x, R - (f.depth || R), x, R, "hidden"); }
        }
        if (f.through === false) D.line(f.position - f.diameter / 2, R - (f.depth || R), f.position + f.diameter / 2, R - (f.depth || R), "hidden");
      }
    } else if (f.type === "knurl") {
      /* 널링: 해칭 표시(관례) 구간 */
      const R = f.D / 2;
      const poly = [[f.x0, -R], [f.x1, -R], [f.x1, R], [f.x0, R]];
      D.items.push({ kind: "hatch", polygon: poly, layer: "hatch", angle: f.pattern === "straight" ? 90 : 45, spacing: M(1.5), knurl: true });
      if (f.pattern !== "straight") D.items.push({ kind: "hatch", polygon: poly, layer: "hatch", angle: -45, spacing: M(1.5), knurl: true });
    }
  }

  /* ------------------------------------------------ 치수 */
  const dimRow1 = -Rmax - M(15);   /* 연쇄 길이 */
  const dimRow2 = dimRow1 - M(9);  /* 전체 길이 */
  const spans = ev.segments;
  /* 연쇄치수에서 하나 생략(과잉치수 회피): 가장 긴 원통 */
  let omitIdx = -1;
  if (O.chainOmit === "longest" && spans.length > 1) {
    let best = -1;
    spans.forEach((s, i) => { if (s.type === "cyl" && (best < 0 || (s.x1 - s.x0) > (spans[best].x1 - spans[best].x0))) best = i; });
    omitIdx = best;
  } else if (O.chainOmit === "random" && spans.length > 1) omitIdx = Math.floor(rnd() * spans.length);
  spans.forEach((s, i) => {
    if (i === omitIdx) { D.labels.push({ omitted: true, kind: "length", segment: i, value: s.x1 - s.x0 }); return; }
    if (omit("length")) return;
    const rL = Math.max(Math.abs(s.ds), Math.abs(s.de)) / 2;
    dimLinear(D, { x: s.x0, y: -rL }, { x: s.x1, y: -rL }, dimRow1, fmt(s.x1 - s.x0),
      { label: { kind: "length", segment: i, value: s.x1 - s.x0 }, narrowSide: i === spans.length - 1 ? "left" : "right" });
  });
  if (spans.length > 1 && !omit("overall")) {
    dimLinear(D, { x: 0, y: -Rmax }, { x: L, y: -Rmax }, dimRow2, fmt(L), { label: { kind: "overall", value: L } });
  } else if (spans.length === 1 && omitIdx < 0) { /* 단일 세그먼트: 연쇄가 곧 전체 */ }

  /* 지름 치수 (관통형) — 나사는 호출문으로 대체 */
  spans.forEach((s, i) => {
    if (s.type === "thread") {
      const th = ev.threads.find((t) => t.i === i);
      const specText = String(s.spec || "").replace(/x/i, "×");
      const xm = (s.x0 + s.x1) / 2;
      const ty = D.freeY(xm + M(6), th.r_major + M(9), specText, O.textSize, M(5));
      if (!omit("thread")) leader(D, xm, th.r_major, xm + M(6), ty, specText, { label: { kind: "thread", segment: i, value: s.spec } });
      return;
    }
    if (omit("diameter")) return;
    const xm = (s.x0 + s.x1) / 2;
    if (s.type === "taper") {
      /* 테이퍼: 양끝 지름 (안쪽 치수) — 시작은 왼쪽 1/4, 끝은 오른쪽 3/4 위치 */
      const tol = s.tolerance ? ` ${s.tolerance}` : "";
      dimDiameterInside(D, s.x0 + (s.x1 - s.x0) * 0.22, s.ds / 2 + ((s.de - s.ds) / 2) * 0.22, `${DIA}${fmt(s.ds)}`, { label: { kind: "diameter", segment: i, which: "d_start", value: s.ds } });
      dimDiameterInside(D, s.x0 + (s.x1 - s.x0) * 0.78, s.ds / 2 + ((s.de - s.ds) / 2) * 0.78, `${DIA}${fmt(s.de)}${tol}`, { label: { kind: "diameter", segment: i, which: "d_end", value: s.de } });
      return;
    }
    const tol = s.tolerance ? ` ${s.tolerance}` : "";
    dimDiameterInside(D, xm, s.ds / 2, `${DIA}${fmt(s.ds)}${tol}`, { label: { kind: "diameter", segment: i, value: s.ds, tolerance: s.tolerance || null } });
  });
  /* 보어 지름 */
  if (ev.bore) {
    for (const [k, b] of ev.bore.segments.entries()) {
      if (omit("bore")) continue;
      const xm = (b.x0 + b.x1) / 2;
      const tol = b.tolerance ? ` ${b.tolerance}` : "";
      const text = b.thread ? String(b.thread).replace(/x/i, "×") : `${DIA}${fmt(b.diameter)}${tol}`;
      dimDiameterInside(D, xm, b.r, text, { lead: Math.max(0, Rmax - b.r) + M(5), label: { kind: b.thread ? "bore_thread" : "bore_diameter", bore_segment: k, value: b.thread || b.diameter } });
      /* 막힌 보어 깊이 */
    }
    if (!ev.bore.through) {
      const depth = ev.bore.segments.reduce((a, s) => a + (s.x1 - s.x0), 0);
      const from = ev.bore.from === "right" ? L : 0;
      const to = ev.bore.from === "right" ? L - depth : depth;
      if (!omit("bore_depth")) dimLinear(D, { x: from, y: Rmax }, { x: to, y: Rmax }, Rmax + M(9), fmt(depth), { label: { kind: "bore_depth", value: depth } });
    }
    /* 보어 단차 위치는 생략(연쇄에서 유추) — 실제 도면 관례상 깊이만 */
  }

  /* 모따기·라운드·필렛·도피홈 호출 */
  const usedCham = new Set();
  for (const t of ev.transitions) {
    if (t.type === "chamfer" && t.size > 0) {
      const key = `${fmt(t.size)}|${t.angle || 45}`;
      const px = t.dir === "left" ? t.x + t.size / 2 : t.x - t.size / 2;
      const drop = t.size * Math.tan((t.angle || 45) * DEG);
      const py = t.r - drop / 2;
      const text = (t.angle || 45) === 45 ? `C${fmt(t.size)}` : `${fmt(t.size)}×${t.angle}°`;
      if (omit("chamfer")) continue;
      /* 같은 크기 모따기가 여럿이면 첫 하나에만 "C1 (양단)"식 대신 각각 표시(판독 단순화) */
      const dx = t.dir === "left" ? -M(6) : M(6);
      const ty = D.freeY(px + dx, py + M(8), text, O.textSize, M(5));
      leader(D, px, py, px + dx, ty, text, { label: { kind: "chamfer", at: t.at, value: t.size, angle: t.angle || 45 } });
      usedCham.add(key);
    } else if ((t.type === "round" || t.type === "fillet") && t.radius > 0) {
      if (omit("radius")) continue;
      const text = `R${fmt(t.radius)}`;
      /* 원호 중간점 근처를 가리키는 지시선 */
      let px, py;
      if (t.type === "fillet") { const s = t.dir === "left" ? -1 : 1; px = t.x + s * t.radius * 0.29; py = t.r + t.radius * 0.29; }
      else { const s = t.dir === "left" ? 1 : -1; px = t.x + s * t.radius * 0.29; py = t.r - t.radius * 0.29; }
      const dx = t.dir === "left" ? -M(5) : M(5);
      const ty = D.freeY(px + dx, py + M(7), text, O.textSize, M(5));
      leader(D, px, py, px + dx, ty, text, { label: { kind: t.type, at: t.at, value: t.radius } });
    } else if (t.type === "undercut" && t.width > 0) {
      if (omit("undercut")) continue;
      const relief = 2 * (t.r - t.depth);
      const text = `${fmt(t.width)}×${DIA}${fmt(relief)}${t.standard ? ` (${t.standard})` : ""}`;
      const px = t.dir === "left" ? t.x + t.width / 2 : t.x - t.width / 2, py = t.r - t.depth;
      const dx = t.dir === "left" ? M(6) : -M(6);
      const ty = D.freeY(px + dx, t.r + M(9), text, O.textSize, M(5));
      leader(D, px, py, px + dx, ty, text, { label: { kind: "undercut", at: t.at, width: t.width, depth: t.depth } });
    }
  }
  /* 홈: 폭 치수 + 홈지름(관통형) + 위치 */
  for (const [k, g] of ev.grooves.entries()) {
    if (omit("groove")) continue;
    const row = Rmax + M(9);
    dimLinear(D, { x: g.x0, y: g.r_top }, { x: g.x1, y: g.r_top }, row, fmt(g.width), { label: { kind: "groove_width", groove: k, value: g.width }, narrowSide: "right" });
    /* 위치: 가까운 세그먼트 경계에서 */
    const seg = spans[g.segment];
    const fromLeft = (g.x0 - seg.x0) <= (seg.x1 - g.x1);
    const ref = fromLeft ? seg.x0 : seg.x1;
    const pos = fromLeft ? g.x0 - seg.x0 : seg.x1 - g.x1;
    if (pos > 0.01) dimLinear(D, { x: ref, y: g.r_top }, { x: fromLeft ? g.x0 : g.x1, y: g.r_top }, row, fmt(pos), { label: { kind: "groove_position", groove: k, value: pos, from: fromLeft ? "segment_start" : "segment_end" }, narrowSide: fromLeft ? "left" : "right" });
    const gd = 2 * g.r_floor;
    dimDiameterInside(D, (g.x0 + g.x1) / 2, g.r_floor, `${DIA}${fmt(gd)}`, { lead: (g.r_top - g.r_floor) + M(5), label: { kind: "groove_diameter", groove: k, value: gd } });
  }
  /* 키홈·평면·널링·횡구멍 위치와 길이 */
  for (const [k, f] of ev.features.entries()) {
    if (f.type === "keyway" || f.type === "flat" || f.type === "knurl") {
      if (omit("feature_length")) continue;
      const seg = spans[f.segment];
      const R = f.D / 2;
      const row = R + M(f.type === "knurl" ? 9 : 12);
      /* 길이 */
      dimLinear(D, { x: f.x0, y: R }, { x: f.x1, y: R }, row, fmt(f.x1 - f.x0), { label: { kind: `${f.type}_length`, feature: k, value: f.x1 - f.x0 } });
      /* 위치: 가까운 세그먼트 경계에서 */
      const fromLeft = (f.x0 - seg.x0) <= (seg.x1 - f.x1);
      const ref = fromLeft ? seg.x0 : seg.x1;
      const pos = fromLeft ? f.x0 - seg.x0 : seg.x1 - f.x1;
      if (pos > 0.01) dimLinear(D, { x: ref, y: R }, { x: fromLeft ? f.x0 : f.x1, y: R }, row, fmt(pos), { label: { kind: `${f.type}_position`, feature: k, value: pos, from: fromLeft ? "segment_start" : "segment_end" }, narrowSide: fromLeft ? "left" : "right" });
      if (f.type === "knurl") {
        const text = `널링 ${f.pattern === "straight" ? "평목" : "빗목"} p${fmt(f.pitch || 1)}`;
        const ty = D.freeY((f.x0 + f.x1) / 2 + M(6), R + M(15), text, O.noteSize, M(4));
        leader(D, (f.x0 + f.x1) / 2, R, (f.x0 + f.x1) / 2 + M(6), ty, text, { size: O.noteSize, label: { kind: "knurl", feature: k, value: f.pitch || 1 } });
      }
    } else if (f.type === "cross_hole") {
      if (omit("cross_hole")) continue;
      const R = f.D / 2;
      const text = `${DIA}${fmt(f.diameter)}${f.through === false ? ` 깊이 ${fmt(f.depth)}` : " 관통"}`;
      const ty = D.freeY(f.position + M(7), R + M(11), text, O.textSize, M(5));
      const py = ((f.angle || 0) % 180 < 45 || (f.angle || 0) % 180 > 135) ? f.diameter / 2 * 0.7 : R;
      leader(D, f.position + f.diameter / 2 * 0.7, py, f.position + M(7), ty, text, { label: { kind: "cross_hole", feature: k, value: f.diameter } });
      /* 위치: 가까운 끝에서 */
      const fromLeft = f.position <= L - f.position;
      const ref = fromLeft ? 0 : L, pos = fromLeft ? f.position : L - f.position;
      dimLinear(D, { x: ref, y: R }, { x: f.position, y: R }, R + M(9), fmt(pos), { label: { kind: "cross_hole_position", feature: k, value: pos, from: fromLeft ? "left_end" : "right_end" }, narrowSide: fromLeft ? "left" : "right" });
    }
  }
  /* 센터구멍 호출 */
  if (O.centerHoleCallout) for (const c of ev.centerHoles) {
    if (omit("center_hole")) continue;
    const text = `센터구멍 ${c.form || "A"}${fmt(c.d)} (DIN 332)`;
    const s = c.end === "left" ? -1 : 1;
    const R = c.end === "left" ? top[0].r : top[top.length - 1].r;
    const px = c.x, py = R * 0.35;
    const tx = c.x + s * M(5);
    const ty = D.freeY(tx + s * textWidth(text, O.noteSize) / (2 * scale), R + M(10), text, O.noteSize, M(4));
    leader(D, px, py, tx, ty, text, { size: O.noteSize, label: { kind: "center_hole", end: c.end, form: c.form || "A", value: c.d } });
  }

  /* ------------------------------------------------ 단면도 A-A … (오른쪽) */
  const sectionOrigins = [];
  if (O.sectionViews) {
    let sx = L + M(14) + Rmax;
    for (const sec of sectionsToDraw) {
      const { f, R, letter: lt } = sec;
      const cx = sx, cy = 0;
      sectionOrigins.push({ letter: lt, cx, cy, R });
      D.text(cx, R + M(12), `${lt}-${lt}`, { size: O.textSize + 0.5, role: "note" });
      /* 중심선 십자 */
      D.line(cx - R - M(3), cy, cx + R + M(3), cy, "center"); D.line(cx, cy - R - M(3), cx, cy + R + M(3), "center");
      const rb = boreDiameterAt(dsl, sec.xc) / 2;
      if (rb > 0) D.circle(cx, cy, rb, "outline");
      const hatchPoly = [];
      if (f.type === "keyway") {
        const w2 = f.width / 2, yw = Math.sqrt(Math.max(0, R * R - w2 * w2)), yf = R - f.depth;
        const aL = Math.atan2(yw, -w2) / DEG, aR = Math.atan2(yw, w2) / DEG;
        D.arc(cx, cy, R, aL, aR + 360, "outline");
        D.line(cx - w2, cy + yf, cx - w2, cy + yw, "outline"); D.line(cx + w2, cy + yf, cx + w2, cy + yw, "outline");
        D.line(cx - w2, cy + yf, cx + w2, cy + yf, "outline");
        /* 폭 */
        dimLinear(D, { x: cx - w2, y: cy + yw }, { x: cx + w2, y: cy + yw }, cy + R + M(6), fmt(f.width), { label: { kind: "keyway_width", value: f.width } });
        /* 깊이: 홈바닥에서 반대쪽까지 (D − t1) */
        dimLinear(D, { x: cx + w2, y: cy + yf }, { x: cx, y: cy - R }, cx + R + M(7), fmt(2 * R - f.depth), { dir: "v", label: { kind: "keyway_depth_ref", value: 2 * R - f.depth, depth: f.depth } });
        /* 해칭 영역: 원 − 홈 (다각형 근사) */
        const poly = [];
        for (let a = aR; a <= aL + 360 - 1e-9; a += 6) poly.push([cx + R * Math.cos(a * DEG), cy + R * Math.sin(a * DEG)]);
        poly.push([cx + R * Math.cos((aL) * DEG), cy + yw]); /* aL 점 */
        poly.push([cx - w2, cy + yf], [cx + w2, cy + yf], [cx + w2, cy + yw]);
        hatchPoly.push(poly);
      } else if (f.type === "flat") {
        const yf = R - f.depth, c = Math.sqrt(Math.max(0, R * R - yf * yf));
        const cnt = f.count === 2 ? 2 : 1;
        const aR = Math.atan2(yf, c) / DEG, aL = Math.atan2(yf, -c) / DEG;
        if (cnt === 1) {
          D.arc(cx, cy, R, aL, aR + 360, "outline");
          D.line(cx - c, cy + yf, cx + c, cy + yf, "outline");
          dimLinear(D, { x: cx + c, y: cy + yf }, { x: cx, y: cy - R }, cx + R + M(7), fmt(R + yf), { dir: "v", label: { kind: "flat_depth_ref", value: R + yf, depth: f.depth } });
          const poly = [];
          for (let a = aR; a <= aL + 360 + 1e-9; a += 6) poly.push([cx + R * Math.cos(a * DEG), cy + R * Math.sin(a * DEG)]);
          poly.push([cx - c, cy + yf]);
          hatchPoly.push(poly);
        } else {
          D.arc(cx, cy, R, aL, 180 + aR, "outline"); D.arc(cx, cy, R, 180 + aL, aR + 360, "outline");
          D.line(cx - c, cy + yf, cx + c, cy + yf, "outline"); D.line(cx - c, cy - yf, cx + c, cy - yf, "outline");
          dimLinear(D, { x: cx + c, y: cy + yf }, { x: cx + c, y: cy - yf }, cx + R + M(7), fmt(2 * yf), { dir: "v", label: { kind: "flat_across", value: 2 * yf, depth: f.depth } });
          const poly = [];
          for (let a = aR; a <= aL + 1e-9; a += 6) poly.push([cx + R * Math.cos(a * DEG), cy + R * Math.sin(a * DEG)]);
          for (let a = 180 + aR; a <= 180 + aL + 1e-9; a += 6) poly.push([cx + R * Math.cos(a * DEG), cy + R * Math.sin(a * DEG)]);
          hatchPoly.push(poly);
        }
      } else if (f.type === "hex") {
        const a = f.across_flats / 2, Rc = a / Math.cos(30 * DEG);
        const poly = [];
        for (let k = 0; k < 6; k++) {
          const ang = 90 + 60 * k;   /* 면 법선 각 (윗면 90°) */
          const nx = Math.cos(ang * DEG), ny = Math.sin(ang * DEG);
          const tx = -ny, ty = nx;
          const half = Math.min(a * Math.tan(30 * DEG), Math.sqrt(Math.max(0, R * R - a * a)));
          const p1 = [cx + a * nx - half * tx, cy + a * ny - half * ty], p2 = [cx + a * nx + half * tx, cy + a * ny + half * ty];
          D.line(p1[0], p1[1], p2[0], p2[1], "outline");
          poly.push(p1, p2);
          if (Rc > R + 1e-9) {
            /* 잘린 꼭짓점: 이 면 끝 → 다음 면 시작 원호 */
            const a1 = Math.atan2(p2[1] - cy, p2[0] - cx) / DEG;
            const ang2 = ang + 60, nx2 = Math.cos(ang2 * DEG), ny2 = Math.sin(ang2 * DEG), tx2 = -ny2, ty2 = nx2;
            const q1 = [cx + a * nx2 - half * tx2, cy + a * ny2 - half * ty2];
            const a2 = Math.atan2(q1[1] - cy, q1[0] - cx) / DEG;
            D.arc(cx, cy, R, a1, a2 < a1 ? a2 + 360 : a2, "outline");
          }
        }
        dimLinear(D, { x: cx + Math.min(a * Math.tan(30 * DEG), R), y: cy + a }, { x: cx + Math.min(a * Math.tan(30 * DEG), R), y: cy - a }, cx + R + M(7), fmt(f.across_flats), { dir: "v", label: { kind: "hex_across_flats", value: f.across_flats } });
        hatchPoly.push(poly);
      }
      for (const hp of hatchPoly) {
        if (rb > 0) { /* 보어가 있으면 링 해칭: 다각형에서 원 제외 (근사: 홀 폴리곤 별도) */
          D.items.push({ kind: "hatch", polygon: hp, holes: [circlePoly(cx, cy, rb)], layer: "hatch" });
        } else D.hatch(hp);
      }
      sx += R * 2 + M(26);
    }
  }

  /* ------------------------------------------------ 시트·표제란 */
  let bb = bounds(D.items);
  const marginS = M(12);
  let sheetW, sheetH, ox, oy;
  /* A4 가로 기준: 내용이 들어가면 297×210, 아니면 내용 크기 + 여백 */
  const contentWmm = (bb.x1 - bb.x0) * scale + 24, contentHmm = (bb.y1 - bb.y0) * scale + (O.titleBlock ? 52 : 24);
  const paperW = Math.max(297, Math.ceil(contentWmm / 10) * 10), paperH = Math.max(210, Math.ceil(contentHmm / 10) * 10);
  sheetW = paperW; sheetH = paperH;
  /* 모델 원점을 시트 중앙(표제란 위)으로 */
  const usableH = sheetH - (O.titleBlock ? 30 : 0);
  ox = (sheetW - (bb.x1 - bb.x0) * scale) / 2 - bb.x0 * scale;
  oy = (usableH - (bb.y1 - bb.y0) * scale) / 2 - bb.y0 * scale + (O.titleBlock ? 30 : 0);   /* 시트 좌표: y 위쪽 양수, 아래 30 은 표제란 */

  const sheetItems = [];
  const frameM = 10;
  sheetItems.push({ kind: "rect", x: frameM, y: frameM, w: sheetW - 2 * frameM, h: sheetH - 2 * frameM, layer: "frame" });
  if (O.titleBlock) {
    const tbW = 110, tbH = 24, x0 = sheetW - frameM - tbW, y0 = frameM;
    sheetItems.push({ kind: "rect", x: x0, y: y0, w: tbW, h: tbH, layer: "frame" });
    sheetItems.push({ kind: "line", x1: x0, y1: y0 + 8, x2: x0 + tbW, y2: y0 + 8, layer: "frame" });
    sheetItems.push({ kind: "line", x1: x0, y1: y0 + 16, x2: x0 + tbW, y2: y0 + 16, layer: "frame" });
    sheetItems.push({ kind: "line", x1: x0 + 55, y1: y0, x2: x0 + 55, y2: y0 + 16, layer: "frame" });
    sheetItems.push({ kind: "line", x1: x0 + 78, y1: y0 + 16, x2: x0 + 78, y2: y0 + tbH, layer: "frame" });
    const T = (x, y, text, size = 2.5, anchor = "start", role = "title") => sheetItems.push({ kind: "text", x, y, text, size, anchor, layer: "text", role });
    T(x0 + 2, y0 + tbH - 5.5, "VRINGON", 4.2, "start", "title");
    T(x0 + 80, y0 + tbH - 5.5, `도번 ${dsl.drawing?.number || dsl.id || "-"}`, 2.5);
    T(x0 + 2, y0 + 10.5, `품명 ${dsl.name_ko || dsl.name || "회전체"}`, 2.8);
    T(x0 + 57, y0 + 10.5, `재질 ${dsl.material || "-"}`, 2.8);
    T(x0 + 2, y0 + 2.5, `척도 ${scale >= 1 ? `${fmt(scale)}:1` : `1:${fmt(1 / scale)}`}`, 2.5);
    T(x0 + 57, y0 + 2.5, `${dsl.drawing?.projection === "first" ? "1각법" : "3각법"} · 단위 mm`, 2.5);
    /* 3각법 기호 (원뿔대 정면+측면) */
    const sx = x0 + 88, sy = y0 + 2.5;
    sheetItems.push({ kind: "circle", cx: sx + 4, cy: sy + 4, r: 2.4, layer: "frame" }, { kind: "circle", cx: sx + 4, cy: sy + 4, r: 1.2, layer: "frame" });
    sheetItems.push({ kind: "polyline", pts: [[sx + 9.5, sy + 1.4], [sx + 16, sy + 2.6], [sx + 16, sy + 5.4], [sx + 9.5, sy + 6.6]], layer: "frame", closed: true });
    /* 일반 주기 */
    const notes = [...(dsl.drawing?.notes || [])];
    if (!notes.length) notes.push("지시 없는 모따기 C0.5", "지시 없는 공차 KS B ISO 2768-m");
    notes.forEach((n, i) => T(frameM + 4, frameM + 4 + (notes.length - 1 - i) * 4.2, `${i + 1}. ${n}`, 2.6, "start", "note"));
  }

  return {
    dsl_id: dsl.id, scale, sheet: { w: sheetW, h: sheetH, ox, oy }, paper: O.paper,
    items: D.items, sheetItems, labels: D.labels, bounds: bb, sections: sectionOrigins,
    lineWeights: LINE_WEIGHTS, options: O,
  };
}

function circlePoly(cx, cy, r, n = 48) {
  const out = [];
  for (let k = 0; k < n; k++) out.push([cx + r * Math.cos((2 * Math.PI * k) / n), cy + r * Math.sin((2 * Math.PI * k) / n)]);
  return out;
}
function bounds(items) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const add = (x, y) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); };
  for (const it of items) {
    if (it.kind === "line") { add(it.x1, it.y1); add(it.x2, it.y2); }
    else if (it.kind === "polyline") it.pts.forEach(([x, y]) => add(x, y));
    else if (it.kind === "circle" || it.kind === "arc") { add(it.cx - it.r, it.cy - it.r); add(it.cx + it.r, it.cy + it.r); }
    else if (it.kind === "text") { const w = textWidth(it.text, it.size) ; add(it.x - w, it.y - it.size); add(it.x + w, it.y + it.size); }
    else if (it.kind === "hatch") it.polygon.forEach(([x, y]) => add(x, y));
  }
  return { x0, y0, x1, y1 };
}
function mulberry(seed) {
  let a = (seed >>> 0) || 1;
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export const LINE_WEIGHTS = { outline: 0.5, hidden: 0.25, center: 0.18, thin: 0.25, dim: 0.18, hatch: 0.18, frame: 0.5, cut: 0.7 };
const DASHES = { hidden: [3, 1.5], center: [8, 1.5, 0.5, 1.5], cut: [8, 2] };

/* 해칭 다각형을 45° 선분들로 (모델 공간). 짝수-홀수 규칙, 구멍 지원 */
function hatchLines(polygon, holes = [], angleDeg = 45, spacing = 2.5) {
  const a = angleDeg * DEG, dx = Math.cos(a), dy = Math.sin(a);   /* 선 방향 */
  const nx = -dy, ny = dx;   /* 법선 */
  const polys = [polygon, ...holes];
  let smin = Infinity, smax = -Infinity, tmin = Infinity, tmax = -Infinity;
  for (const p of polys) for (const [x, y] of p) { const s = x * nx + y * ny, t = x * dx + y * dy; smin = Math.min(smin, s); smax = Math.max(smax, s); tmin = Math.min(tmin, t); tmax = Math.max(tmax, t); }
  const lines = [];
  for (let s = smin + spacing / 2; s < smax; s += spacing) {
    /* 이 해칭선(법선 좌표 s)과 각 다각형 변의 교차 t 를 모은다 */
    const ts = [];
    for (const p of polys) {
      for (let i = 0; i < p.length; i++) {
        const [x1, y1] = p[i], [x2, y2] = p[(i + 1) % p.length];
        const s1 = x1 * nx + y1 * ny, s2 = x2 * nx + y2 * ny;
        if ((s1 <= s && s2 > s) || (s2 <= s && s1 > s)) {
          const u = (s - s1) / (s2 - s1);
          ts.push((x1 + (x2 - x1) * u) * dx + (y1 + (y2 - y1) * u) * dy);
        }
      }
    }
    ts.sort((p, q) => p - q);
    for (let i = 0; i + 1 < ts.length; i += 2) {
      const t1 = ts[i], t2 = ts[i + 1];
      if (t2 - t1 < 1e-6) continue;
      lines.push([s * nx + t1 * dx, s * ny + t1 * dy, s * nx + t2 * dx, s * ny + t2 * dy]);
    }
  }
  return lines;
}

/* ============================================================== SVG */
export function toSVG(drawing, o = {}) {
  const { sheet, scale, items, sheetItems } = drawing;
  const pxPerMm = o.pxPerMm || 4;   /* 뷰박스는 mm, 폭 픽셀만 지정 */
  const W = sheet.w, H = sheet.h;
  const paper = drawing.paper === "aged" ? "#F1EBDC" : "#FFFFFF";
  const ink = o.ink || "#111111";
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const font = o.font || "Pretendard, 'Segoe UI', Arial, sans-serif";
  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${Math.round(W * pxPerMm)}" height="${Math.round(H * pxPerMm)}" font-family="${font}" data-vringon-dsl="${esc(drawing.dsl_id || "")}" data-scale="${scale}">`);
  out.push(`<rect width="${W}" height="${H}" fill="${paper}"/>`);
  /* 시트 좌표: y 위쪽 양수 → SVG y 아래쪽: y_svg = H − y */
  const S = (x, y) => [x, H - y];
  const styleFor = (layer) => {
    const w = LINE_WEIGHTS[layer] ?? 0.25;
    const dash = DASHES[layer] ? ` stroke-dasharray="${DASHES[layer].join(" ")}"` : "";
    return `stroke="${ink}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"${dash}`;
  };
  /* 모델 그룹: 시트 원점 이동 + 축척 + y 뒤집기 → 선폭·문자는 축척 역보정 */
  const groups = {};
  const G = (layer) => (groups[layer] ||= []);
  const T = (x, y) => [sheet.ox + x * scale, H - (sheet.oy + y * scale)];   /* 모델 → SVG */
  for (const it of items) {
    const layer = it.layer;
    if (it.kind === "line") { const [x1, y1] = T(it.x1, it.y1), [x2, y2] = T(it.x2, it.y2); G(layer).push(`<line x1="${f3(x1)}" y1="${f3(y1)}" x2="${f3(x2)}" y2="${f3(y2)}"/>`); }
    else if (it.kind === "polyline") { G(layer).push(`<polyline points="${it.pts.map(([x, y]) => T(x, y).map(f3).join(",")).join(" ")}"${it.closed ? ' data-closed="1"' : ""}/>`); }
    else if (it.kind === "circle") { const [cx, cy] = T(it.cx, it.cy); G(layer).push(`<circle cx="${f3(cx)}" cy="${f3(cy)}" r="${f3(it.r * scale)}"/>`); }
    else if (it.kind === "arc") {
      const r = it.r * scale;
      const a0 = it.a0 * DEG, a1 = it.a1 * DEG;
      const [x0, y0] = T(it.cx + it.r * Math.cos(a0), it.cy + it.r * Math.sin(a0));
      const [x1, y1] = T(it.cx + it.r * Math.cos(a1), it.cy + it.r * Math.sin(a1));
      const large = Math.abs(it.a1 - it.a0) > 180 ? 1 : 0;
      /* CCW(수학) 진행은 SVG(y 아래) 에서 sweep=0 */
      if (Math.abs(it.a1 - it.a0) >= 360 - 1e-9) { const [cx, cy] = T(it.cx, it.cy); G(layer).push(`<circle cx="${f3(cx)}" cy="${f3(cy)}" r="${f3(r)}"/>`); }
      else G(layer).push(`<path d="M ${f3(x0)} ${f3(y0)} A ${f3(r)} ${f3(r)} 0 ${large} 0 ${f3(x1)} ${f3(y1)}"/>`);
    }
    else if (it.kind === "arrow") {
      const [x, y] = T(it.x, it.y);
      const len = it.size * scale, a = it.angle * DEG;   /* 화살표는 (x,y) 를 가리키고 angle 방향으로 뻗는다 */
      const bx = x + len * Math.cos(a), by = y - len * Math.sin(a);   /* SVG y 뒤집기 */
      const px = -Math.sin(a) * len * 0.17, py = -Math.cos(a) * len * 0.17;
      G("dim").push(`<polygon points="${f3(x)},${f3(y)} ${f3(bx + px)},${f3(by + py)} ${f3(bx - px)},${f3(by - py)}" fill="${ink}" stroke="none"/>`);
    }
    else if (it.kind === "text") {
      const [x, y] = T(it.x, it.y);
      const anchor = it.anchor === "middle" ? "middle" : it.anchor === "end" ? "end" : "start";
      const rot = it.rotate ? ` transform="rotate(${-it.rotate} ${f3(x)} ${f3(y)})"` : "";
      G("text").push(`<text x="${f3(x)}" y="${f3(y)}" font-size="${it.size}" text-anchor="${anchor}" fill="${ink}" data-role="${it.role || "dim"}"${rot}>${esc(it.text)}</text>`);
    }
    else if (it.kind === "hatch") {
      const lines = hatchLines(it.polygon, it.holes || [], it.angle ?? 45, it.spacing ?? 2.5 / scale);
      for (const [x1, y1, x2, y2] of lines) { const [a, b] = T(x1, y1), [c, d] = T(x2, y2); G("hatch").push(`<line x1="${f3(a)}" y1="${f3(b)}" x2="${f3(c)}" y2="${f3(d)}"/>`); }
    }
  }
  const order = ["hatch", "center", "hidden", "thin", "dim", "cut", "outline", "text"];
  for (const layer of order) {
    if (!groups[layer]?.length) continue;
    out.push(`<g id="${layer}" ${layer === "text" ? `fill="${ink}"` : styleFor(layer)}>`);
    out.push(...groups[layer]);
    out.push(`</g>`);
  }
  /* 시트 항목(틀·표제란) */
  out.push(`<g id="frame" ${styleFor("frame")}>`);
  for (const it of sheetItems) {
    if (it.kind === "rect") out.push(`<rect x="${f3(it.x)}" y="${f3(H - it.y - it.h)}" width="${f3(it.w)}" height="${f3(it.h)}"/>`);
    else if (it.kind === "line") { const [x1, y1] = S(it.x1, it.y1), [x2, y2] = S(it.x2, it.y2); out.push(`<line x1="${f3(x1)}" y1="${f3(y1)}" x2="${f3(x2)}" y2="${f3(y2)}"/>`); }
    else if (it.kind === "circle") { const [cx, cy] = S(it.cx, it.cy); out.push(`<circle cx="${f3(cx)}" cy="${f3(cy)}" r="${f3(it.r)}"/>`); }
    else if (it.kind === "polyline") out.push(`<polyline points="${it.pts.map(([x, y]) => S(x, y).map(f3).join(",")).join(" ")}"${it.closed ? "" : ""}/>` );
  }
  out.push(`</g><g id="sheet-text" fill="${ink}">`);
  for (const it of sheetItems) if (it.kind === "text") { const [x, y] = S(it.x, it.y); out.push(`<text x="${f3(x)}" y="${f3(y)}" font-size="${it.size}" text-anchor="${it.anchor}" font-weight="${it.role === "title" ? 700 : 400}" data-role="${it.role}">${esc(it.text)}</text>`); }
  out.push(`</g></svg>`);
  return out.join("\n");
}
const f3 = (v) => (Math.round(v * 1000) / 1000).toString();

/* ============================================================== DXF (R12 ASCII) */
export function toDXF(drawing) {
  const { sheet, scale, items, sheetItems } = drawing;
  const out = [];
  const p = (...v) => out.push(...v);
  const layers = [["OUTLINE", 7, "CONTINUOUS"], ["HIDDEN", 8, "DASHED"], ["CENTER", 1, "CENTER"], ["THIN", 7, "CONTINUOUS"], ["DIM", 3, "CONTINUOUS"], ["HATCH", 8, "CONTINUOUS"], ["FRAME", 7, "CONTINUOUS"], ["TEXT", 7, "CONTINUOUS"], ["CUT", 5, "DASHED"]];
  p("0", "SECTION", "2", "HEADER", "9", "$ACADVER", "1", "AC1009", "9", "$INSUNITS", "70", "4", "0", "ENDSEC");
  p("0", "SECTION", "2", "TABLES");
  p("0", "TABLE", "2", "LTYPE", "70", "3");
  p("0", "LTYPE", "2", "CONTINUOUS", "70", "0", "3", "Solid line", "72", "65", "73", "0", "40", "0");
  p("0", "LTYPE", "2", "DASHED", "70", "0", "3", "Dashed __ __ __", "72", "65", "73", "2", "40", "4.5", "49", "3", "49", "-1.5");
  p("0", "LTYPE", "2", "CENTER", "70", "0", "3", "Center ____ _ ____", "72", "65", "73", "4", "40", "11.5", "49", "8", "49", "-1.5", "49", "0.5", "49", "-1.5");
  p("0", "ENDTAB");
  p("0", "TABLE", "2", "LAYER", "70", String(layers.length));
  for (const [name, color, lt] of layers) p("0", "LAYER", "2", name, "70", "0", "62", String(color), "6", lt);
  p("0", "ENDTAB", "0", "ENDSEC");
  p("0", "SECTION", "2", "ENTITIES");
  const T = (x, y) => [sheet.ox + x * scale, sheet.oy + y * scale];   /* 시트 mm, y 위쪽 (DXF 도 y 위쪽) */
  const LAY = (l) => (l || "outline").toUpperCase();
  const line = (x1, y1, x2, y2, layer) => p("0", "LINE", "8", LAY(layer), "10", f3(x1), "20", f3(y1), "30", "0", "11", f3(x2), "21", f3(y2), "31", "0");
  for (const it of items) {
    if (it.kind === "line") { const [a, b] = T(it.x1, it.y1), [c, d] = T(it.x2, it.y2); line(a, b, c, d, it.layer); }
    else if (it.kind === "polyline") { for (let i = 1; i < it.pts.length; i++) { const [a, b] = T(...it.pts[i - 1]), [c, d] = T(...it.pts[i]); line(a, b, c, d, it.layer); } }
    else if (it.kind === "circle") { const [cx, cy] = T(it.cx, it.cy); p("0", "CIRCLE", "8", LAY(it.layer), "10", f3(cx), "20", f3(cy), "30", "0", "40", f3(it.r * scale)); }
    else if (it.kind === "arc") { const [cx, cy] = T(it.cx, it.cy); p("0", "ARC", "8", LAY(it.layer), "10", f3(cx), "20", f3(cy), "30", "0", "40", f3(it.r * scale), "50", f3(it.a0), "51", f3(it.a1 % 360)); }
    else if (it.kind === "arrow") {
      const [x, y] = T(it.x, it.y); const len = it.size * scale, a = it.angle * DEG;
      const bx = x + len * Math.cos(a), by = y + len * Math.sin(a), px = -Math.sin(a) * len * 0.17, py = Math.cos(a) * len * 0.17;
      p("0", "SOLID", "8", "DIM", "10", f3(x), "20", f3(y), "30", "0", "11", f3(bx + px), "21", f3(by + py), "31", "0", "12", f3(bx - px), "22", f3(by - py), "32", "0", "13", f3(bx - px), "23", f3(by - py), "33", "0");
    }
    else if (it.kind === "text") {
      const [x, y] = T(it.x, it.y);
      const align = it.anchor === "middle" ? 1 : it.anchor === "end" ? 2 : 0;
      p("0", "TEXT", "8", "TEXT", "10", f3(x), "20", f3(y), "30", "0", "40", f3(it.size), "1", it.text.replace(/⌀/g, "%%c"), "50", f3(it.rotate || 0), "72", String(align), "11", f3(x), "21", f3(y), "31", "0");
    }
    else if (it.kind === "hatch") {
      for (const [x1, y1, x2, y2] of hatchLines(it.polygon, it.holes || [], it.angle ?? 45, it.spacing ?? 2.5 / scale)) { const [a, b] = T(x1, y1), [c, d] = T(x2, y2); line(a, b, c, d, "hatch"); }
    }
  }
  for (const it of sheetItems) {
    if (it.kind === "rect") { line(it.x, it.y, it.x + it.w, it.y, "frame"); line(it.x + it.w, it.y, it.x + it.w, it.y + it.h, "frame"); line(it.x + it.w, it.y + it.h, it.x, it.y + it.h, "frame"); line(it.x, it.y + it.h, it.x, it.y, "frame"); }
    else if (it.kind === "line") line(it.x1, it.y1, it.x2, it.y2, "frame");
    else if (it.kind === "circle") p("0", "CIRCLE", "8", "FRAME", "10", f3(it.cx), "20", f3(it.cy), "30", "0", "40", f3(it.r));
    else if (it.kind === "polyline") { const pts = it.closed ? [...it.pts, it.pts[0]] : it.pts; for (let i = 1; i < pts.length; i++) line(pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], "frame"); }
    else if (it.kind === "text") p("0", "TEXT", "8", "TEXT", "10", f3(it.x), "20", f3(it.y), "30", "0", "40", f3(it.size), "1", it.text, "72", it.anchor === "middle" ? "1" : it.anchor === "end" ? "2" : "0", "11", f3(it.x), "21", f3(it.y), "31", "0");
  }
  p("0", "ENDSEC", "0", "EOF", "");
  return out.join("\r\n");
}

/* 라벨 요약(데이터셋용): 문자 → DSL 필드 매핑 */
export function drawingLabels(drawing) {
  return drawing.labels.map((l) => ({ ...l, bbox_sheet: l.bbox ? [drawing.sheet.ox + l.bbox[0] * drawing.scale, drawing.sheet.oy + l.bbox[1] * drawing.scale, drawing.sheet.ox + l.bbox[2] * drawing.scale, drawing.sheet.oy + l.bbox[3] * drawing.scale] : null }));
}
