// VRINGON CAD — parametric product archetypes
// Each archetype is a real parametric model: every dimension below is a named
// millimetre parameter, so the AI planner, the parameter sliders and follow-up
// prompt edits all drive the same rebuild path.

import * as THREE from "three";
import { plate, roundedBox, lathe, chamferCyl, loft, gear, bolt, rib, meshOf, makeMaterial,
  gemGeometry, GEM_SHAPES, GEM_CUTS } from "./geometry.js?v=2d99286f";
import { CATALOG, clampParams } from "./catalog.js?v=2d99286f";

/* ---------------------------------------------------------------- gearbox */
const gearbox = {
  id: "gearbox", name: "Gearbox", ko: "감속기 하우징",
  keywords: ["gear", "기어", "감속", "gearbox", "reducer", "하우징", "housing", "모터"],
  params: CATALOG.gearbox.params,
  build(p) {
    const parts = [];
    const halfH = p.bodyH * 0.62;

    parts.push({
      id: "housing_base", label: "하우징 베이스", material: "aluminum",
      meshes: [
        { geo: plate(p.bodyW, p.bodyD, halfH, p.filletR, 2), y: 0 },
        { geo: plate(p.bodyW + p.flangeT * 2.2, p.bodyD + p.flangeT * 2.2, p.flangeT, p.filletR + 3, 1.4), y: 0 },
        { geo: plate(p.bodyW * 0.82, p.bodyD * 0.82, 2.5, p.filletR, 0.8), y: halfH - 2.5 },
      ],
    });

    parts.push({
      id: "housing_cover", label: "하우징 커버", material: "aluminum",
      meshes: [
        { geo: plate(p.bodyW, p.bodyD, p.bodyH - halfH, p.filletR, 2.5), y: halfH },
        { geo: plate(p.bodyW * 0.6, p.bodyD * 0.58, 3, p.filletR * 0.7, 1), y: p.bodyH },
        { geo: chamferCyl(p.shaftD * 0.92, 7, 1.2, 48, p.bodyH), x: -p.bodyW * 0.22 },
        { geo: chamferCyl(p.gearR * 0.42, 6, 1.2, 48, p.bodyH), x: p.bodyW * 0.2 },
      ],
    });

    const shaftLen = p.bodyH * 0.62;
    parts.push({
      id: "input_shaft", label: "입력 샤프트", material: "steel",
      meshes: [
        { geo: chamferCyl(p.shaftD / 2, shaftLen, 1, 40, p.bodyH + 4), x: -p.bodyW * 0.22 },
        { geo: chamferCyl(p.shaftD * 0.78, 5, 0.8, 40, p.bodyH + 2), x: -p.bodyW * 0.22 },
        { geo: roundedBox(p.shaftD * 0.28, shaftLen * 0.55, p.shaftD * 0.28, 0.5),
          x: -p.bodyW * 0.22 + p.shaftD * 0.42, y: p.bodyH + 4 + shaftLen * 0.55 },
      ],
    });

    parts.push({
      id: "output_gear", label: "출력 기어", material: "brass",
      meshes: [
        { geo: gear(p.gearR, Math.round(p.gearTeeth), 12, p.gearR * 0.2), x: p.bodyW * 0.2, y: p.bodyH + 5 },
        { geo: chamferCyl(p.gearR * 0.34, 22, 1, 40, p.bodyH + 5), x: p.bodyW * 0.2 },
        { geo: chamferCyl(p.gearR * 0.2, 30, 0.8, 32, p.bodyH + 12), x: p.bodyW * 0.2 },
      ],
    });

    const bolts = [];
    const n = Math.max(4, Math.round(p.boltCount));
    const rx = (p.bodyW + p.flangeT * 2.2) / 2 - p.flangeT * 0.9;
    const rz = (p.bodyD + p.flangeT * 2.2) / 2 - p.flangeT * 0.9;
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 2 + Math.PI / 4;
      bolts.push({ geo: bolt(5, 10, 9, 4), x: Math.cos(t) * rx, z: Math.sin(t) * rz, y: p.flangeT });
    }
    parts.push({ id: "flange_bolts", label: `플랜지 볼트 ×${n}`, material: "steel", meshes: bolts });
    return parts;
  },
};

/* ------------------------------------------------------------- enclosure */
const enclosure = {
  id: "enclosure", name: "Enclosure", ko: "방수 전장 함체",
  keywords: ["enclosure", "함체", "케이스", "case", "박스", "box", "컨트롤러", "전장", "방수"],
  params: CATALOG.enclosure.params,
  build(p) {
    const parts = [];
    const baseH = p.bodyH - p.lidH;
    parts.push({
      id: "shell_base", label: "베이스 셸", material: "abs_black",
      meshes: [
        { geo: plate(p.bodyW, p.bodyD, baseH, p.filletR, 3), y: 0 },
        { geo: plate(p.bodyW - p.wall * 2, p.bodyD - p.wall * 2, 2, p.filletR * 0.8, 0.6), y: baseH },
        { geo: plate(p.bodyW * 0.5, p.bodyD * 0.22, 3, 3, 1), y: -3 },
      ],
    });
    parts.push({
      id: "shell_lid", label: "리드 커버", material: "abs_white",
      meshes: [
        { geo: plate(p.bodyW, p.bodyD, p.lidH, p.filletR, 3.5), y: baseH + 2 },
        { geo: plate(p.bodyW * 0.66, p.bodyD * 0.5, 1.6, 6, 0.6), y: baseH + 2 + p.lidH },
      ],
    });
    parts.push({
      id: "gasket", label: "실링 가스켓", material: "rubber",
      meshes: [{ geo: plate(p.bodyW - p.wall * 1.2, p.bodyD - p.wall * 1.2, 2.2, p.filletR * 0.9, 0.7), y: baseH }],
    });
    parts.push({
      id: "connector", label: "방수 커넥터", material: "steel",
      meshes: [
        { geo: lathe([[0, 0], [p.connectorD / 2, 0], [p.connectorD / 2, 6], [p.connectorD / 2 - 1.4, 8],
          [p.connectorD / 2 - 1.4, 16], [p.connectorD / 2 - 3, 18], [0, 18]], 40),
          x: p.bodyW / 2, y: baseH * 0.55, rz: Math.PI / 2 },
      ],
    });
    const bosses = [];
    const n = Math.max(4, Math.round(p.screwCount));
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 2 + Math.PI / 4;
      const x = Math.cos(t) * (p.bodyW / 2 - p.filletR * 0.85);
      const z = Math.sin(t) * (p.bodyD / 2 - p.filletR * 0.85);
      bosses.push({ geo: lathe([[0, 0], [5.5, 0], [5.5, baseH - 4], [4, baseH - 2], [2.6, baseH - 2], [2.6, 2], [0, 2]], 32), x, z });
      bosses.push({ geo: bolt(3.4, 6, 6.4, 2.6), x, z, y: baseH + p.lidH + 2 });
    }
    parts.push({ id: "screw_bosses", label: `나사 보스 ×${n}`, material: "abs_black", meshes: bosses });
    return parts;
  },
};

/* ---------------------------------------------------------------- vessel */
const vessel = {
  id: "vessel", name: "Vessel", ko: "보틀 · 용기",
  keywords: ["bottle", "보틀", "병", "용기", "텀블러", "tumbler", "container", "cup", "컵", "화장품", "cosmetic"],
  params: CATALOG.vessel.params,
  build(p) {
    const parts = [];
    const R = p.bodyD / 2, nR = p.neckD / 2;
    const shoulderStart = p.bodyH - p.shoulderR;
    const prof = [[0, 0], [R - p.baseR, 0], [R, p.baseR], [R, shoulderStart]];
    const steps = 14;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const y = shoulderStart + p.shoulderR * t;
      const r = R + (nR - R) * (t * t * (3 - 2 * t));
      prof.push([r, y]);
    }
    prof.push([nR, p.bodyH + p.neckH - 2], [nR - 1.2, p.bodyH + p.neckH], [0, p.bodyH + p.neckH]);
    parts.push({ id: "bottle_body", label: "보틀 바디", material: "glass", meshes: [{ geo: lathe(prof, 128) }] });

    parts.push({
      id: "neck_thread", label: "넥 스레드", material: "abs_white",
      meshes: [{ geo: lathe([[nR, p.bodyH], [nR + 1.6, p.bodyH + 2], [nR + 1.6, p.bodyH + p.neckH - 6],
        [nR, p.bodyH + p.neckH - 4], [nR, p.bodyH]], 96) }],
    });

    const capY = p.bodyH + p.neckH - 6;
    const capR = nR + 3.2;
    parts.push({
      id: "cap", label: "캡", material: "abs_color",
      meshes: [
        { geo: lathe([[0, capY], [capR - 1.5, capY], [capR, capY + 1.5], [capR, capY + p.capH - 2],
          [capR - 2, capY + p.capH], [0, capY + p.capH]], 96) },
        ...Array.from({ length: Math.round(p.knurlCount) }, (_, i) => {
          const a = (i / Math.round(p.knurlCount)) * Math.PI * 2;
          return { geo: roundedBox(1.1, p.capH - 5, 1.1, 0.5, 2),
            x: Math.cos(a) * capR, z: Math.sin(a) * capR, y: capY + p.capH / 2, ry: -a };
        }),
      ],
    });

    parts.push({
      id: "label_band", label: "라벨 밴드", material: "abs_white",
      meshes: [{ geo: lathe([[R + 0.35, p.bodyH * 0.22], [R + 0.35, p.bodyH * 0.62]], 128) }],
    });
    return parts;
  },
};

/* --------------------------------------------------------------- bracket */
const bracket = {
  id: "bracket", name: "Bracket", ko: "구조 브래킷",
  keywords: ["bracket", "브래킷", "브라켓", "mount", "마운트", "지지", "앵글", "주조"],
  params: CATALOG.bracket.params,
  build(p) {
    const parts = [];
    parts.push({
      id: "base_plate", label: "베이스 플레이트", material: "aluminum",
      meshes: [{ geo: plate(p.baseW, p.baseD, p.plateT, p.plateT * 0.9, 2) }],
    });
    const wallZ = -p.baseD / 2 + p.plateT / 2;
    parts.push({
      id: "vertical_wall", label: "수직 웹", material: "aluminum",
      meshes: [
        { geo: roundedBox(p.baseW, p.wallH, p.plateT, p.plateT * 0.35, 4), y: p.plateT + p.wallH / 2, z: wallZ },
        { geo: lathe([[0, 0], [p.pivotD / 2 + 9, 0], [p.pivotD / 2 + 9, p.plateT], [0, p.plateT]], 64),
          y: p.plateT + p.wallH, z: wallZ - p.plateT / 2, rx: Math.PI / 2 },
      ],
    });
    parts.push({
      id: "pivot_bushing", label: "피벗 부싱", material: "brass",
      meshes: [{ geo: lathe([[p.pivotD / 2 - 4, 0], [p.pivotD / 2, 0], [p.pivotD / 2, p.plateT + 6],
        [p.pivotD / 2 - 4, p.plateT + 6]], 64),
        y: p.plateT + p.wallH, z: wallZ - p.plateT / 2 - 3, rx: Math.PI / 2 }],
    });
    const ribs = [];
    const rc = Math.round(p.ribCount);
    for (let i = 0; i < rc; i++) {
      const x = rc === 1 ? 0 : -p.baseW * 0.33 + (i / (rc - 1)) * p.baseW * 0.66;
      ribs.push({ geo: rib(p.baseD * 0.6, p.wallH * 0.62, p.plateT * 0.6),
        x: x - p.plateT * 0.3, y: p.plateT, z: wallZ + p.plateT / 2, ry: Math.PI / 2, rx: 0 });
    }
    if (ribs.length) parts.push({ id: "ribs", label: `보강 리브 ×${rc}`, material: "aluminum", meshes: ribs });

    const bosses = [];
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const x = sx * p.baseW * 0.34, z = sz * p.baseD * 0.26 + p.baseD * 0.1;
      bosses.push({ geo: lathe([[p.holeD / 2, 0], [p.bossD / 2, 0], [p.bossD / 2, 5],
        [p.holeD / 2 + 1, 6.5], [p.holeD / 2, 6.5]], 48), x, z, y: p.plateT });
    }
    parts.push({ id: "bolt_bosses", label: "체결 보스 ×4", material: "aluminum", meshes: bosses });
    return parts;
  },
};

/* ---------------------------------------------------------------- pulley */
const pulley = {
  id: "pulley", name: "Pulley", ko: "풀리 · 플랜지",
  keywords: ["pulley", "풀리", "flange", "플랜지", "wheel", "휠", "디스크", "disc", "로터"],
  params: CATALOG.pulley.params,
  build(p) {
    const parts = [];
    const R = p.outerD / 2, W = p.width;
    const g = p.grooveD;
    parts.push({
      id: "rim", label: "림", material: "aluminum",
      meshes: [{ geo: lathe([
        [R - p.rimT, 0], [R, 0], [R, W * 0.28],
        [R - g, W * 0.5], [R, W * 0.72], [R, W],
        [R - p.rimT, W], [R - p.rimT, 0],
      ], 128) }],
    });
    parts.push({
      id: "hub", label: "허브", material: "steel",
      meshes: [
        { geo: lathe([[p.innerD / 2, -4], [p.hubD / 2 - 2, -4], [p.hubD / 2, -2],
          [p.hubD / 2, W + 2], [p.hubD / 2 - 2, W + 4], [p.innerD / 2, W + 4]], 96) },
        { geo: lathe([[p.innerD / 2, -4], [p.innerD / 2, W + 4]], 96) },
      ],
    });
    const spokes = [];
    const n = Math.round(p.spokeCount);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const mid = (p.hubD / 2 + R - p.rimT) / 2;
      spokes.push({ geo: roundedBox(R - p.rimT - p.hubD / 2 + 4, W * 0.55, p.spokeW, Math.min(4, p.spokeW / 3), 4),
        x: Math.cos(a) * mid, z: Math.sin(a) * mid, y: W / 2, ry: -a });
    }
    parts.push({ id: "spokes", label: `스포크 ×${n}`, material: "aluminum", meshes: spokes });
    parts.push({
      id: "set_screw", label: "세트 스크류", material: "steel",
      meshes: [{ geo: bolt(5, 8, 8, 4), x: p.hubD / 2, y: W + 2, rz: Math.PI / 2 }],
    });
    return parts;
  },
};

/* -------------------------------------------------------------- handheld */
const handheld = {
  id: "handheld", name: "Handheld", ko: "핸드헬드 디바이스",
  keywords: ["handheld", "리모컨", "remote", "디바이스", "device", "핸드헬드", "센서", "스캐너", "그립", "가전"],
  params: CATALOG.handheld.params,
  build(p) {
    const parts = [];
    const secs = [];
    const N = 16;
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const y = t * p.bodyL;
      // gentle waisted profile: wider at both ends, pinched at the grip
      const k = 1 - 0.22 * Math.sin(Math.PI * t) * (1 - p.taper);
      const endEase = Math.min(1, Math.sin(Math.PI * Math.min(1, t * 1.6)) * 1.6 + 0.55);
      secs.push({
        y,
        w: p.bodyW * k * Math.min(1, endEase),
        d: p.bodyT * (0.82 + 0.18 * k) * Math.min(1, endEase),
        r: p.filletR * 0.8,
      });
    }
    const upper = secs.map((s) => ({ ...s }));
    parts.push({ id: "shell_upper", label: "상부 셸", material: "abs_color",
      meshes: [{ geo: loft(upper, 56), y: 0 }] });
    parts.push({ id: "shell_lower", label: "하부 셸", material: "abs_black",
      meshes: [{ geo: loft(secs.map((s) => ({ ...s, w: s.w * 0.995, d: s.d * 0.42 })), 56), y: 0, z: -p.bodyT * 0.3 }] });
    parts.push({
      id: "display", label: "디스플레이", material: "glass",
      meshes: [{ geo: plate(p.screenW, p.screenH, 1.6, 5, 0.5), y: p.bodyL * 0.62, z: p.bodyT * 0.38, rx: -Math.PI / 2 }],
    });
    parts.push({
      id: "buttons", label: "버튼", material: "rubber",
      meshes: [
        { geo: lathe([[0, 0], [p.buttonD / 2 - 1.2, 0], [p.buttonD / 2, 1.2], [p.buttonD / 2, 3],
          [p.buttonD / 2 - 2, 4.2], [0, 4.2]], 48), y: p.bodyL * 0.3, z: p.bodyT * 0.36, rx: -Math.PI / 2 },
        { geo: roundedBox(p.buttonD * 1.6, 4, p.buttonD * 0.5, 1.6, 3), y: p.bodyL * 0.18, z: p.bodyT * 0.36, rx: -Math.PI / 2 },
      ],
    });
    parts.push({
      id: "port", label: "커넥터 포트", material: "steel",
      meshes: [{ geo: roundedBox(p.bodyW * 0.28, 7, 5, 1.6, 3), y: 3.5, z: p.bodyT * 0.2 }],
    });
    return parts;
  },
};

/* ----------------------------------------------------------------- watch */
const watch = {
  id: "watch", name: "Watch", ko: "워치 · 시계",
  keywords: ["watch", "워치", "시계", "손목", "크로노", "다이버", "스마트워치", "wearable"],
  params: CATALOG.watch.params,
  build(p) {
    const parts = [];
    const R = p.caseD / 2, H = p.caseH;

    parts.push({
      id: "case_body", label: "케이스 바디", material: "steel",
      meshes: [
        { geo: lathe([[0, 0], [R - 2, 0], [R, 2], [R, H - 1.5], [R - 1.2, H], [R * 0.82, H], [0, H]], 96) },
        // lugs
        ...[-1, 1].flatMap((sz) => [-1, 1].map((sx) => ({
          geo: roundedBox(6, H * 0.55, 9, 1.6, 3),
          x: sx * (p.lugW / 2 - 2.4), y: H * 0.36, z: sz * (R + 3),
        }))),
      ],
    });

    parts.push({
      id: "bezel", label: "베젤", material: "steel",
      meshes: [{ geo: lathe([[R * 0.82, H - 0.5], [R - 1, H - 0.5], [R, H + p.bezelT * 0.4],
        [R - p.bezelT, H + p.bezelT], [R * 0.82, H + p.bezelT * 0.6]], 96) }],
    });

    parts.push({
      id: "glass", label: "글라스", material: "glass",
      meshes: [{ geo: lathe([[0, H - 0.4], [R - p.bezelT - 0.4, H - 0.4], [R - p.bezelT - 0.4, H + 0.6],
        [R * 0.6, H + 1.1], [0, H + 1.2]], 80) }],
    });

    parts.push({
      id: "case_back", label: "케이스 백", material: "steel",
      meshes: [{ geo: lathe([[0, -1.2], [R * 0.8, -1.2], [R * 0.86, 0], [0, 0]], 80) }],
    });

    parts.push({
      id: "crown", label: "크라운", material: "steel",
      meshes: [
        { geo: chamferCyl(p.crownD / 2, p.crownD * 0.8, 0.8, 14, 0), x: R + p.crownD * 0.4 + 1, y: H / 2, rz: Math.PI / 2 },
        { geo: chamferCyl(p.crownD * 0.22, 2.2, 0.3, 16, 0), x: R + 0.4, y: H / 2, rz: Math.PI / 2 },
      ],
    });

    const bc = Math.round(p.buttonCount);
    if (bc > 0) {
      parts.push({
        id: "side_buttons", label: `사이드 버튼 ×${bc}`, material: "steel",
        meshes: Array.from({ length: bc }, (_, i) => {
          const a = (i - (bc - 1) / 2) * 0.55 + Math.PI * 0.13;
          return { geo: roundedBox(4.5, 3, 5.5, 1.1, 3),
            x: Math.cos(a) * (R + 1.6), z: Math.sin(a) * (R + 1.6), y: H / 2, ry: -a };
        }),
      });
    }

    const strap = (sign, id, label) => {
      const g = plate(p.lugW, p.strapL, p.strapT, p.lugW * 0.28, 1);
      g.translate(0, -p.strapT / 2, sign * p.strapL / 2); // hinge sits at the lug edge
      return {
        id, label, material: "rubber",
        meshes: [{ geo: g, z: sign * (R + 2), y: H * 0.4, rx: sign * 0.38 }], // drape down
      };
    };
    parts.push(strap(1, "strap_upper", "스트랩 (상)"));
    parts.push(strap(-1, "strap_lower", "스트랩 (하)"));
    return parts;
  },
};

/* ------------------------------------------------------------------ ring */
// Reads the ring's stone parameters into the lapidary gem generator.
// `scale` shrinks the same cut for the accent stones.
function stoneOf(p, scale = 1) {
  return gemGeometry({
    d: p.stoneD * scale,
    shape: GEM_SHAPES[Math.round(p.stoneShape ?? 0)] || "round",
    cut: GEM_CUTS[Math.round(p.stoneCut ?? 0)] || "brilliant",
    ratio: p.stoneRatio ?? 1,
    tablePct: p.tablePct ?? 56,
    crownAngle: p.crownAngle ?? 34.5,
    pavAngle: p.pavAngle ?? 40.8,
    girdlePct: p.girdlePct ?? 3.5,
    culetPct: p.culetPct ?? 0.5,
    rows: Math.round(p.facetRows ?? 3),
    seg: Math.round(p.stoneSeg ?? 16),
  });
}
// full height of the cut, used to seat the stone in the setting
function stoneMetrics(p, scale = 1) {
  const d = p.stoneD * scale, rg = d / 2;
  const rad = (x) => (x * Math.PI) / 180;
  const rt = rg * Math.min(0.92, (p.tablePct ?? 56) / 100);
  const rc = rg * Math.min(0.4, (p.culetPct ?? 0.5) / 100);
  const crown = (rg - rt) * Math.tan(rad(p.crownAngle ?? 34.5));
  const pav = (rg - rc) * Math.tan(rad(p.pavAngle ?? 40.8));
  const girdle = d * ((p.girdlePct ?? 3.5) / 100);
  return { rg, crown, pav, girdle, total: crown + pav + girdle };
}
const ring = {
  id: "ring", name: "Ring", ko: "링 · 주얼리",
  keywords: ["ring", "링", "반지", "주얼리", "jewelry", "웨딩", "다이아", "보석", "귀걸이", "펜던트", "목걸이"],
  params: CATALOG.ring.params,
  build(p) {
    const parts = [];
    const Rin = p.innerD / 2, Rout = Rin + p.bandT;

    const bandProfile = [];
    const steps = 22;
    for (let i = 0; i <= steps; i++) {           // comfort-fit rounded band section
      const t = (i / steps) * Math.PI * 2;
      bandProfile.push([Rin + p.bandT / 2 + (p.bandT / 2) * Math.cos(t), (p.bandW / 2) * Math.sin(t)]);
    }
    const bandGeo = lathe(bandProfile, 128);
    bandGeo.rotateX(Math.PI / 2);                // stand the ring upright
    parts.push({ id: "band", label: "밴드", material: "gold", meshes: [{ geo: bandGeo }] });

    const m = stoneMetrics(p);
    const rot = ((p.stoneRot ?? 0) * Math.PI) / 180;
    // The gem's local origin is the centre of its girdle, so seating it is a
    // single placement: put that origin where the girdle should sit. The
    // basket ends just under it and the prongs clip just over it.
    const girdleY = Rout + p.headH;
    const basketTop = p.headH * 0.86;

    parts.push({
      id: "setting_head", label: "세팅 헤드", material: "gold",
      meshes: [
        { geo: lathe([
            [m.rg * 0.26, 0], [m.rg * 0.52, 0],
            [m.rg * 0.94, basketTop * 0.86], [m.rg * 0.94, basketTop],
            [m.rg * 0.78, basketTop], [m.rg * 0.22, basketTop * 0.2],
            [m.rg * 0.26, 0],
          ], 48),
          y: Rout - p.bandT * 0.35 },
      ],
    });

    const pc = Math.round(p.prongCount);
    const prongL = m.girdle + Math.min(p.headH * 0.42, m.rg * 0.8);
    parts.push({
      id: "prongs", label: `프롱 ×${pc}`, material: "gold",
      meshes: Array.from({ length: pc }, (_, i) => {
        const a = (i / pc) * Math.PI * 2 + Math.PI / pc + rot;
        const rx = m.rg * 0.94 * (p.stoneRatio ?? 1), rz = m.rg * 0.94;
        return {
          geo: chamferCyl(Math.max(0.22, m.rg * 0.12), prongL, m.rg * 0.09, 12, 0),
          x: Math.cos(a) * rx, z: Math.sin(a) * rz,
          y: girdleY + m.girdle * 0.4 - prongL / 2 + m.girdle * 0.5,
        };
      }),
    });

    parts.push({
      id: "stone", label: "센터 스톤", material: "gem",
      meshes: [{ geo: stoneOf(p), y: girdleY, ry: rot }],
    });

    const ac = Math.round(p.accentCount);
    if (ac > 0) {
      const am = stoneMetrics(p, 0.3);
      parts.push({
        id: "accent_stones", label: `보조 스톤 ×${ac}`, material: "gem",
        meshes: Array.from({ length: ac }, (_, i) => {
          const side = i % 2 === 0 ? 1 : -1;
          const a = Math.PI / 2 + side * (0.30 + Math.floor(i / 2) * 0.26);
          const r = Rout - am.pav * 0.45;         // pavé-seated into the band shoulder
          return { geo: stoneOf(p, 0.3), x: Math.cos(a) * r, y: Math.sin(a) * r, rz: -(a - Math.PI / 2) };
        }),
      });
    }
    return parts;
  },
};

export const ARCHETYPES = [gearbox, enclosure, vessel, bracket, pulley, handheld, watch, ring];
export const ARCHETYPE_BY_ID = Object.fromEntries(ARCHETYPES.map((a) => [a.id, a]));

/* Motion simulation definitions per archetype.
   mode: spinY (rotate about vertical axis through pivot), spinZ, lift (bob), unscrew (spin + rise) */
export const SIMS = {
  gearbox: (p) => [
    { part: "input_shaft", mode: "spinY", rpm: 60, pivot: [-p.bodyW * 0.22, 0] },
    { part: "output_gear", mode: "spinY", rpm: -60 * (12 / Math.max(12, p.gearTeeth)), pivot: [p.bodyW * 0.2, 0] },
  ],
  pulley: (p) => [
    { part: "rim", mode: "spinY", rpm: 45, pivot: [0, 0] },
    { part: "spokes", mode: "spinY", rpm: 45, pivot: [0, 0] },
    { part: "hub", mode: "spinY", rpm: 45, pivot: [0, 0] },
    { part: "set_screw", mode: "spinY", rpm: 45, pivot: [0, 0] },
  ],
  vessel: (p) => [
    { part: "cap", mode: "unscrew", rpm: 30, pivot: [0, 0], travel: p.capH * 0.9 },
  ],
  enclosure: (p) => [
    { part: "shell_lid", mode: "lift", travel: p.lidH * 1.6, period: 2.6 },
  ],
  bracket: () => [
    { part: "pivot_bushing", mode: "spinZ", rpm: 40 },
  ],
  watch: (p) => [
    { part: "crown", mode: "spinX", rpm: 50 },
    { part: "bezel", mode: "spinY", rpm: 12, pivot: [0, 0] },
  ],
};

export function defaultParams(id) {
  const a = ARCHETYPE_BY_ID[id];
  return Object.fromEntries(Object.entries(a.params).map(([k, v]) => [k, v.value]));
}

export function matchArchetype(prompt) {
  return matchArchetypeScored(prompt).archetype;
}

/* score > 0 means a real keyword hit — used to route category requests to the
   hand-crafted template instead of the freeform pipeline */
export function matchArchetypeScored(prompt) {
  const s = (prompt || "").toLowerCase();
  let best = null, bestScore = 0;
  for (const a of ARCHETYPES) {
    const score = a.keywords.reduce((n, k) => n + (s.includes(k) ? k.length : 0), 0);
    if (score > bestScore) { bestScore = score; best = a; }
  }
  return { archetype: best || ARCHETYPES[0], score: bestScore };
}

/* Build a THREE.Group whose direct children are the editable parts. */
export function buildModel(id, params, materialOverrides = {}) {
  const arch = ARCHETYPE_BY_ID[id];
  const p = { ...defaultParams(id), ...params };
  const root = new THREE.Group();
  root.name = arch.id;
  root.userData = { archetype: arch.id, displayName: arch.ko, params: p };

  for (const part of arch.build(p)) {
    const key = materialOverrides[part.id] || part.material;
    const mat = makeMaterial(key);
    const g = new THREE.Group();
    g.name = part.id;
    g.userData = { isPart: true, label: part.label, materialKey: key };
    for (const m of part.meshes) g.add(meshOf(m.geo, mat, m));
    root.add(g);
  }

  // sit the model on the ground plane and centre it in X/Z
  const bb = new THREE.Box3().setFromObject(root);
  const c = bb.getCenter(new THREE.Vector3());
  root.position.set(-c.x, -bb.min.y, -c.z);
  return root;
}
