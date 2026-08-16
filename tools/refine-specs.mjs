/* Measure loft sections off the committed stage-1 meshes and write them into
   the specifications.

   This is the step that stops the specification writer from guessing the one
   thing it cannot see. An extrusion carries a single silhouette, so the survey
   wing's fuselage was a 760mm side profile pushed through a constant 140mm —
   a plank with a good outline. The mesh knows better: sliced along its own
   axis it reports a section running 186mm tall at the nose, 76mm at the waist
   and 118mm again further back.

   Free and deterministic: no segmentation service, because each part's own
   declared box is the mask. A part with rotation_deg is masked in its own
   frame — the mesh is turned by the inverse rotation first, so the box stays
   tight and what comes back is the pre-tilt size_mm the compiler expects
   (js/mesh-loft.js, part frames). Those parts are marked 회전 in the log and
   get a before → after line of their own, because a tilted antenna or a canted
   leg is where a reading most needs a human glance before it is committed.

   node tools/refine-specs.mjs [id ...] [--dry]
   node tools/refine-specs.mjs --reset-internal [id ...] [--dry]
   node tools/refine-specs.mjs --tune [id ...] [--dry]

   The second form is a repair, not a measurement — see below. The third
   applies the design-similarity round-1 table (TUNE_TABLE), also below.
*/
import { readFile, writeFile } from "node:fs/promises";
import { positionsFromGlb, refineFromMesh } from "../js/mesh-loft.js";

const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const RESET = args.includes("--reset-internal");
const TUNE = args.includes("--tune");
const ONLY = args.filter((a) => !a.startsWith("--"));

const SPECS = new URL("../docs/specs/", import.meta.url);
const MESHES = new URL("../docs/assets/meshes/", import.meta.url);

/* ------------------------------------------------------- internal repair

   Parts inside the airframe were measured against a mesh that only ever showed
   the outside of it, so what came back was the airframe. Every box the search
   widened found the shell overhead, wrote it down as the part, and widened
   again around that reading on the next run: the inspection quad's battery
   left a declared 60×30×100 and arrived at 12×35×232 — a strip of fuselage
   carrying a battery's name. js/mesh-loft.js no longer measures a part the
   specification marks OCCLUDED, but the numbers already written have to be put
   back by hand, and the measurement that replaced them is gone.

   So they are restored to component sizes, and where the number came from is
   part of the entry:
     · 카탈로그 — the matching row of js/drone-catalog.js, the same table the
       component swap in the editor writes from. Its dims_mm are L×W×H; here H
       goes to h (h is the vertical axis throughout these specifications), the
       longer of the part's two horizontal extents takes L, and the other W, so
       a 140mm pack ends up lying fore-and-aft in a fuselage rather than across
       it. A motor lying on its side (a pusher) is the exception: its axial
       length H runs along the thrust axis, which is d, and the two diameters
       take w and h.
     · 사양서 선언 — what the specification itself said before any measurement
       touched the part. A battery sled or a distribution plate is airframe, not
       a catalogue component, and the author's figure is the one that was drawn
       around.
     · 사진 — the sample's own source photograph (docs/assets/samples/drones/),
       cross-checked against the stage-1 mesh. Used for airframe parts that no
       catalogue lists and whose authored figure was itself a guess.

   Two visible parts are in the table for a related reason: their box was not
   empty, it was full of a neighbour. The survey wing's pusher motor came back
   as 27×5×79 — a 5mm-tall motor does not exist; the box had read the prop and
   the mount — and the VTOL's front landing-gear arch as a 26.6×46×40 stub at
   x=61, a sliver of whatever the widening box met, while its twin ("identical
   to front, placed rearward") stayed a 461-wide arch. The ratio and box-agreement
   guards in js/mesh-loft.js stop this from happening again, but numbers that
   were already written stay written until something puts them back.

   Parts left alone on purpose: inspect-quad's ESC, whose 45×10×45 was never
   overwritten, and every other part the mesh really can see.

   --reset-internal repairs and stops. It deliberately does NOT re-measure: the
   committed specifications are not raw measurement output — the silhouette fit
   in tools/fit-spec.mjs has been over them since — and a fresh pass would
   overwrite that with numbers 13% larger than the last reading, which is the
   same outward creep this repair exists to undo. Measuring is what the tool
   does without the flag. The pass still runs here against a copy, so the log
   can show that the restored parts are now declined rather than re-inflated. */

/* The VTOL's landing-gear arch, as its author drew it (first commit): an
   inverted U whose legs are 6% of the width and whose crown is 13% of the
   height, here scaled to any box so the outline and size_mm cannot disagree
   (that disagreement is what PROFILE_SIZE_MISMATCH reports). Coordinates are
   the FRONT-plane outline in millimetres about the part centre; the arch stands
   on the two skids and its crown sits up inside the fuselage belly. */
function archProfile(w, h) {
  const X = w / 2, Y = h / 2, leg = 0.12 * X, crown = 0.739 * Y;
  const r1 = (v) => +v.toFixed(1);
  const pt = (x, y) => [r1(x), r1(y)];
  const seg = (type, start, end, c1 = null, c2 = null) => ({
    type, start: pt(...start), end: pt(...end), radius: null, sweep: "NONE",
    control1: c1 ? pt(...c1) : null, control2: c2 ? pt(...c2) : null,
  });
  return [
    seg("LINE", [-X, -Y], [-X, -Y]),
    seg("BEZIER", [-X, -Y], [0, Y], [-0.6 * X, Y], [-0.2 * X, Y]),
    seg("BEZIER", [0, Y], [X, -Y], [0.2 * X, Y], [0.6 * X, Y]),
    seg("LINE", [X, -Y], [X - leg, -Y]),
    seg("BEZIER", [X - leg, -Y], [0, crown], [0.52 * X, crown], [0.2 * X, crown]),
    seg("BEZIER", [0, crown], [-(X - leg), -Y], [-0.2 * X, crown], [-0.52 * X, crown]),
    seg("LINE", [-(X - leg), -Y], [-X, -Y]),
  ];
}

/* Both VTOL arches share one box: 550 wide so the 33mm legs stand centred on
   the skids (MIRROR_PAIR spacing 520, skid width 41), 260 tall from 5mm into
   the skid top (35.7) to 18mm up inside the fuselage belly at the front station
   (belly ≈272 there), 50 fore-and-aft — the photograph shows a blade about
   40 at the foot and 60 where it meets the wing root. */
const VTOL_ARCH = { builder: "EXTRUDE_2D", plane: "FRONT", size: [550, 260, 50],
  profile: archProfile(550, 260) };

const RESET_TABLE = {
  "inspect-quad": {
    part_battery: { builder: "BOX", size: [48, 42, 140], center: [0, 145, 0],
      why: "카탈로그 bat_6s_5000 (6S 5000mAh · 111Wh · 산업 소형) 140×48×42" },
    part_fc_stack: { builder: "BOX", size: [37, 16, 37], center: [0, 175, 0],
      why: "카탈로그 fc_f7_stack (F7 FC + 4in1 ESC) 37×37×16" },
    part_downward_gimbal_base: { builder: "CYLINDER", size: [30, 30, 30], center: [0, 115, 90],
      why: "사양서 선언 — 짐벌 마운트 30mm 각" },
    part_downward_camera: { builder: "ROUNDED_BOX", size: [60, 50, 70], center: [0, 90, 90],
      why: "사양서 선언 — 카탈로그 cam_gimbal_small(70×60×90) 과 같은 등급" },
  },
  "agri-hexa": {
    part_013: { builder: "BOX", size: [50, 30, 50], center: [0, 500, 0],
      why: "사양서 선언 — 비행제어 스택" },
    part_014: { builder: "BOX", size: [200, 20, 200], center: [0, 480, 0],
      why: "사양서 선언 — 배전 플레이트(카탈로그 부품이 아님)" },
    part_016: { builder: "BOX", size: [250, 100, 200], center: [0, 675, 0],
      why: "사양서 선언 — 카탈로그 bat_12s_16000(210×95×85)을 여유 있게 수납하는 슬레드" },
  },
  "map-wing": {
    part_battery: { builder: "BOX", size: [48, 42, 140], center: [0, 30, 50],
      why: "카탈로그 bat_6s_5000 (6S 5000mAh · 111Wh) 140×48×42" },
    part_fc: { builder: "BOX", size: [37, 16, 37], center: [0, 30, 0],
      why: "카탈로그 fc_f7_stack (F7 FC + 4in1 ESC) 37×37×16" },
    part_esc: { builder: "BOX", size: [30, 15, 50], center: [0, 30, -60],
      why: "사양서 선언 — 카탈로그 esc_40a(55×25×10) 등급" },
    /* 1200mm survey wing, MTOW 3.5kg, 260mm (10in) pusher prop: the 2814 class,
       which is also exactly what the author declared before the measurement
       pass read the mount and the prop into this box. Lying on its side, so the
       40mm axial length is d; plane FRONT already puts the cylinder axis on z. */
    part_pusher_motor: { builder: "CYLINDER", size: [35, 35, 40], center: [0, 145, -160],
      why: "카탈로그 mot_2814 (2814 900KV · 9~11인치 · 최대추력 ~2.5kg) 35×35×40 — 푸셔라 축 길이 40이 d(z), 사양서 선언 35×35×40과 동일" },
  },
  "sar-vtol": {
    part_battery_pack: { builder: "BOX", size: [120, 80, 250], center: [0, 320, 0],
      why: "사양서 선언 — 카탈로그 bat_12s_16000(210×95×85)을 수납하는 배터리 베이" },
    part_flight_controller: { builder: "BOX", size: [50, 30, 50], center: [0, 380, 50],
      why: "사양서 선언 — 비행제어 컴퓨터" },
    part_esc: { builder: "BOX", size: [100, 40, 150], center: [0, 350, -150],
      why: "사양서 선언 — 변속기·전원분배부" },
    /* Photograph docs/assets/samples/drones/sar-vtol.jpg: one curved blade
       strut per side, rising from mid-skid outward-and-up to the fuselage belly
       just behind the gimbal, under the wing-root leading edge; no rear strut is
       visible. The stage-1 mesh puts that station at z≈150~260 in this
       specification's frame (skid-top y≈20 → belly 240, legs 30~40 wide,
       40~60 fore-and-aft), which is where the front arch goes. The rear arch is
       the author's twin ("identical to front, placed rearward"), kept as such
       and mirrored about the fuselage centre (z 2.5) — the authored ±250 — but
       pulled in to −185 because the skid ends at −215 and a leg has to stand
       on it. */
    part_landing_gear_strut_front: { ...VTOL_ARCH, center: [0, 160, 190],
      why: "사진 sar-vtol.jpg + 1단계 메시 — 스키드 중앙에서 동체 밑면(주익 뿌리 앞전)까지 바깥으로 벌어져 오르는 곡선 지지대, 메시상 z≈150~260 · 폭 550(스키드 간격 520+다리) · 높이 260(스키드 윗면 36 → 동체 밑 272 +18 매입) · 두께 50" },
    part_landing_gear_strut_rear: { ...VTOL_ARCH, center: [0, 160, -185],
      why: "전방과 동일 형상·치수(사양서 선언 '전방과 동일, 후방 배치') · 동체 중심 z 2.5 기준 대칭, 스키드 끝(−215) 위에 서도록 −185 — 사진에는 후방 아치가 보이지 않음" },
  },
  /* The relay hexacopter's mast and legs were written at about half of what
     the photograph shows — the writer scaled them to the 280mm body, not to the
     900mm wheelbase it was told. Measuring cannot see that: the pass fits the
     mesh into the specification's own bounds per axis, so a mast that is too
     short overall comes back too short overall, and its 5-station loft for a
     straight leg tube and its 8-station loft for a lathe-turned shell are the
     mask reading the payload and tether below them. What is kept from that
     pass is the parts it can judge (canopy height, split ring, payload module,
     module sizes, rod diameters); the lengths and stations below are read off
     docs/assets/samples/drones/relay-hexa.png and the four generated views
     (rotor span 679px = 900 + 380 → 1.72~1.89 mm/px), and the three parts the
     mask misread go back to what the author declared.

     The legs are also turned the other way. rotation_deg.z −20 on a MIRROR_PAIR
     hinged at the mirror plane leans the FOOT inboard (a V, feet 37mm from the
     centreline, 117mm short of the skids they carry — the two skids were their
     own connectivity groups for that reason); the photograph's Λ needs the
     positive sign. With the hinge at ±190 and 25° of splay, a 340mm tube puts
     its root at x≈±100 under the lower shell (y≈265) and its foot at ±244,
     y≈−43: 308mm of standing height and a 488mm track, against ~290–330 and
     ~470–540 in the photograph. */
  "relay-hexa": {
    part_003: { builder: "REVOLVE", size: [280, 43, 280], center: [-8, 280, 6],
      why: "사양서 선언 — 회전체 하단 셸(PROFILE_REVOLVE); 측정은 셸 아래 페이로드·테더까지 8단면 로프트로 읽었음" },
    part_011: { builder: "CYLINDER", size: [6, 120, 6], center: [0, 50, 0],
      why: "사양서 선언 — 페이로드 중앙에서 지상까지의 테더 스텁; 측정은 스키드 아래로 끌어내렸음" },
    /* Only the top end moves. The author's 878@186 ran the cable from −253 up
       to +625 — through the payload, through the shell, past the canopy and
       out above it. A tether leaves its spool; it does not skewer the
       aircraft. Bringing the top down to the spool (95) and leaving the bottom
       exactly at −253 keeps every silhouette byte-identical (형상 15, 메시
       IoU 35 both before and after) and stops the model claiming a rod through
       its own airframe.

       The bottom deliberately does NOT move, and that is the finding of this
       round rather than an omission. relay-hexa's 형상 15 is the lowest number
       in the sample set and it is almost entirely this cable: the photo-traced
       front silhouette is 1112px tall of which 345 is a hairline mast and 468
       a hairline tether, so 73% of the frame the IoU is computed over is two
       lines and only ~11% is aircraft. Hanging the cable 620~681mm below the
       skids — matching the traced reference's own 42% — lifts 형상 15→42 and
       배치 48→70. It is not kept, because the two references disagree about
       this one quantity and the photograph settles it against the traced one:

         참조            마스트 / 기체 / 테더      테더 비율
         1단계 메시       41% / 35% / 24%          24%
         사진 4면 실루엣   31% / 26% / 42%          42%
         사양서(현행)      48% / 35% / 17%          17%

       Sweeping the drop against BOTH (테더비율 → 형상 · 메시 IoU):
         17% → 15 · 35   21% → 18 · 36   24% → 20 · 33   27% → 21 · 33
         30% → 22 · 32   35% → 30 · 21   40% → 42 · 17   42% → 41 · 16
       Past ~30% the mesh collapses, and the mesh is the regression baseline.

       What the photograph actually shows (crop around x 400~800, y 700~1024):
       the aircraft is STANDING — skids down, contact shadow under them — and
       the cable drops from the payload, reaches the floor and curves away
       ALONG it out of frame. There is no hanging cable to measure. The traced
       view drew a vertical line to the picture edge because an orthographic
       silhouette generator has no way to render a cable lying on the ground,
       which is exactly what v36 suspected when it wrote "참조 케이블 결함으로
       판정 불가" and could not yet prove. Ending the cable at the skid plane
       instead is worse on both (형상 10 · 메시 21) — the cable does continue,
       just not downward. So the modelled drop stays at the author's 189mm and
       relay-hexa's 형상 15 is recorded as a reference defect, not a CAD one. */
    part_018: { builder: "CYLINDER", size: [8, 348, 8], center: [0, -79, 0],
      why: "사양서 선언 — 테더 전원선의 길이는 임의(지상국까지). 아래 끝(−253)은 작성자 값 그대로 두고 위 끝만 스풀(95)로 내린다: 기존 878@186 은 케이블을 캐노피 위 y 625 까지 관통시켜 놓았음. 실루엣 불변(형상 15 · 메시 IoU 35), 기체를 꿰뚫던 봉만 사라진다" },
    part_012: { builder: "CYLINDER", size: [15, 200, 16], center: [0, 415, 0],
      why: "사진 relay-hexa.png + 4뷰 실루엣 — 캐노피 위 하부 기둥, 실루엣 116px ≈ 200~219 (지름은 측정값)" },
    part_013: { builder: "BOX", size: [50, 50, 50], center: [0, 540, 0],
      why: "사진 — 기둥 중간의 정육면체 모듈(사양서 '큐브형'), 사진 ≈ 50 · 실루엣 37px ≈ 64~70" },
    part_014: { builder: "BOX", size: [50, 50, 50], center: [0, 602, 0],
      why: "사진 — 위쪽 정육면체 모듈, 하부와 같은 크기, 12mm 간격" },
    part_015: { builder: "CYLINDER", size: [13, 300, 12], center: [0, 715, 0],
      why: "사진 + 실루엣 — 상부 모듈을 관통해 끝까지: 실루엣 노출부 135px ≈ 232~255 + 모듈 관통 50 (기존 105는 사진의 절반)" },
    part_008: { builder: "CYLINDER", size: [18, 340, 18], center: [0, 31, 0], rotation: [0, 0, 25], spacing: 380,
      why: "사진 — 동체 밑 ±100에서 25° 벌어져 내려가는 다리, 수직 308(사진 290~330) · 발끝 ±244(트랙 488, 사진 470~540); 기존 −20°는 발이 안으로 모이는 V자" },
    part_009: { builder: "CYLINDER", size: [25, 25, 350], center: [0, -52, 0], spacing: 488,
      why: "다리 발끝(±244, y −43)에 맞춰 이동 — 기존 310 간격은 다리와 117mm 떨어져 따로 놀았음" },
  },
};

function resetInternal(id, spec) {
  const table = RESET_TABLE[id];
  if (!table) return [];
  const done = [];
  for (const part of spec.parts || []) {
    const want = table[part.part_id];
    if (!want) continue;
    const g = part.geometry;
    const was = `${g.builder} ${g.size_mm.w}×${g.size_mm.h}×${g.size_mm.d}`;
    g.builder = want.builder;
    if (want.plane) g.plane = want.plane;
    g.size_mm = { w: want.size[0], h: want.size[1], d: want.size[2] };
    g.center_mm = { x: want.center[0], y: want.center[1], z: want.center[2] };
    /* A repeated or tilted part is placed by these two as much as by its
       centre; a leg restored to the right length but the old splay would still
       miss its skid. */
    if (want.rotation) g.rotation_deg = { x: want.rotation[0], y: want.rotation[1], z: want.rotation[2] };
    if (want.spacing != null && g.repeat) g.repeat.spacing_mm = want.spacing;
    /* A loft written from the airframe would otherwise survive the reset and
       keep drawing the shape the box measured. */
    delete g.loft_sections;
    /* An outline is only carried for the profile builders; it is written whole
       so that size_mm and the profile are one statement, not two. */
    if (want.profile) { g.outer_profile = structuredClone(want.profile); g.inner_profile = null; }
    done.push(`${part.display_name_ko || part.part_id} ${was} → ${want.builder} ${want.size.join("×")} @(${want.center.join(", ")}) (${want.why})`);
  }
  return done;
}

/* ------------------------------------------------------ design-similarity tuning

   Round 1 of closing the gap tools/design-similarity.mjs measures. Only the
   items tools/ablate-layers.mjs put in the "fixable in the specification"
   class are here — the ones the reference itself gets wrong (perspective in
   the photo-derived views, the tether drawn to the picture frame) and the ones
   the primitive vocabulary cannot express (free-form canopies, geodesic cages)
   are not, and PROGRESS.md v36 says which is which.

   Every entry names its evidence the way RESET_TABLE does, and every entry was
   measured: `node tools/design-similarity.mjs <id> --no-write --no-render`
   before and after. An entry that did not raise the composite is kept in the
   table with `reverted` set — printed, never applied — so the next round does
   not try it again without knowing.

   TWO metrics gate an entry, not one. design-similarity's reference for six of
   these samples is four silhouettes traced off a single perspective photograph;
   tools/similarity.mjs measures the same CAD against the stage-1 mesh, and that
   number is the repository's regression baseline (52/57/68/61 · 61/43/48/34).
   When the two disagree the mesh wins, because a disagreement is the traced
   reference admitting its own perspective: sar-vtol's V-tail and fire-octo's
   760mm legs each lift the composite by chasing the traced height and drop the
   mesh IoU by 11 and 5 points. Both are in the table as `reverted` with both
   numbers. Every `reverted` note therefore carries 종합 and, where it is the
   reason, 메시 IoU.

   HOW HIGH CAN 형상 GO AT ALL. Round 3 asked the question the earlier rounds
   kept running into sideways, and it has a number. Rasterise the stage-1 mesh
   itself against the traced four views — the mesh is a reconstruction of the
   same photograph, so no specification can be a better model of that photo
   than it is — and the IoU comes out:

     샘플          메시→사진4뷰(천장)   현행 CAD 형상   출처
     inspect-quad        61.6              52           photo
     agri-hexa           52.0              57  ← 초과   photo
     sar-vtol            49.4              46           photo
     fpv-racer           53.6              65  ← 초과   photo
     fire-octo           56.6              48           photo
     relay-hexa          18.3              15           photo
     map-wing            83.2              75           mesh
     cage-inspect        83.9              52           mesh

   On the six photo-traced samples the ceiling averages 48.6 and the CAD
   averages 47.2 — the specifications are at 97% of what the reference admits,
   and two of them already score ABOVE the reconstruction. That is the answer
   to "why does the 형상 layer not rise when the builders are corrected": on
   those six there is almost nothing left to win, and every correct-builder
   edit spends real silhouette to buy honesty the metric cannot see.

   It also retires an old temptation. relay-hexa's ceiling is 18.3, so the
   형상 42 that a longer tether reaches (the sweep in RESET_TABLE) is 24 points
   ABOVE what a true 3D model of the photograph can score. A number that beats
   the reconstruction is not a better drone; it is a model fitted to the trace's
   defect. Left rejected, now for a reason that can be checked.

   The two mesh-traced samples are where headroom actually was, and one of them
   gave it up (map-wing: 형상 64.3 → 75.7, 메시 IoU 68.2 → 82.2, below). cage-inspect keeps its 31 points because they
   are behind a geodesic lattice, not behind a builder choice.

   Measured in round 3, under a point either way, not applied and not worth an
   entry of their own — recorded so nobody spends a morning on them again:
     agri-hexa  GNSS 마스트 67→20              형상 56.98 → 57.33 (메시 −0.3)
     agri-hexa  캐노피 544 정사각 → 480         57.35 (메시 −0.8)
     agri-hexa  다리·탱크 단면 ×0.7~1.2         56.2 ~ 57.2 (전부 노이즈)
     fpv-racer  프롭 두께 6 → 4                65.17 → 65.96 (근거 없음: 5인치
                                              프롭 허브는 5~6mm 가 실물이다)
     fire-octo  릴 단면 ×0.8 / 프레임 ×0.9      45.3 / 47.8 (현행 47.7)
     fire-octo  프레임 → EXTRUDE_2D A자 윤곽    46.4 — map-wing 과 같은 수법이
                여기서는 듣지 않는다. 다리는 굽은 판이 아니라 굽은 봉이고,
                윤곽 압출은 봉 사이의 빈 삼각형까지 채운다
     fire-octo  하단 로터 삭제                 47.7 → 50.5 — 유일하게 큰 값이고
                유일하게 못 쓰는 값이다(동축 X8 의 로터 4개를 지우면 구성이
                무너진다). 참조 4면이 하단 로터를 그리지 않았을 뿐이다
                (획득 3 · 낭비 169)

   Entry forms (all optional fields):
     { part, size, center, rotation, spacing, radius, builder, plane, material,
       name, display, wall, loft: null, profile, why }   edit an existing part
                                                (wall = TUBE 벽 두께 mm,
                                                 profile = outer_profile 통째)
     { add: { after, part: {...} }, why }        insert a whole part after another
     { material, color, why }                    repaint a material (photo-measured)
     { material_add: { material_id, base_color_hex, ... }, why }   add a material
     { ..., reverted: "..." }                    tried, did not help, not applied

   The user's own numbers are untouchable: a part listed under `affects` of a
   USER_PROVIDED parameter refuses size / spacing / radius / rotation / builder
   edits (position along an axis the parameter does not fix, material and
   naming are still allowed — a motor pod may move up its arm, the wheelbase
   is the arm). */
/* A part inserted whole. Fields the compiler and the QA run read are all here;
   the rest mirror what the specification writer emits for a primitive. */
function newPart(part_id, parent, name, display, role, geometry, material_id, reason) {
  return {
    part_id, parent_part_id: parent, name, display_name_ko: display, semantic_role: role,
    visibility: "VISIBLE", representation_strategy: "PRIMITIVE", representation_reason: reason,
    editable: true, locked_characteristics: [],
    geometry: {
      builder: geometry.builder, plane: geometry.plane,
      size_mm: { w: geometry.size[0], h: geometry.size[1], d: geometry.size[2] },
      center_mm: { x: geometry.center[0], y: geometry.center[1], z: geometry.center[2] },
      outer_profile: null, inner_profile: null, corner_radius_mm: null,
      repeat: geometry.repeat || null, loft_sections: null,
      rotation_deg: geometry.rotation ? { x: geometry.rotation[0], y: geometry.rotation[1], z: geometry.rotation[2] } : null,
      airfoil: null,
    },
    dimensions: [], features: [], material_id, confidence: 0.7,
  };
}

const TUNE_TABLE = {
  "inspect-quad": [
    /* Photograph inspection-quad.jpg: a white body with orange accents (the
       specification paints the whole lower shell orange — the flat render comes
       out 56% orange against 20% in the photograph), a gimbal camera hanging
       under the nose (the specification had it buried inside the lower shell,
       0 exclusive pixels in v35's ablation), and D-shaped guard loops slung
       under the arms. Measured one at a time from the committed specification
       (종합 / 메시 IoU): camera out 81.11 / 53.31, shell white 81.09 / 52.44,
       guards as an 80mm band 81.93 / 50.83, all three together 82.33 / 51.66.
       Guard variants tried: h60@136 81.90, h70@131 82.29, h80@136 81.96,
       h100@116 81.88 — the 80mm band at 126 is the best of them. */
    { part: "part_downward_camera", center: [0, 55, 90],
      why: "사진 — 짐벌 카메라가 노즈 아래로 매달림; 종전 y 90은 하부 셸(y 77~180) 안에 완전히 묻혀 있었음 (v35 절제: 전용 화소 0)" },
    { part: "part_downward_gimbal_base", center: [0, 85, 90],
      why: "카메라 위 짐벌 마운트, 셸 밑면(77)에서 카메라(55)로 이어지도록" },
    { part: "part_lower_shell", material_id: "mat_white",
      why: "사진 팔레트 — 몸통은 흰색(#ded7d1 16%), 주황(#ed7818 8% + 그림자 #9c3a0c 12%)은 가드와 악센트; 렌더 주황 56%→가드만 (외관 80.5→82.8)" },
    { part: "part_prop_guards", size: [281.3, 80, 233], center: [0, 126, 0],
      why: "사진 — 가드는 암 아래로 매달린 D형 루프(깊이 ≈ 링 지름의 0.28); 어휘엔 없어 암 밑면(166)에서 86까지 80mm 띠 링으로 근사 (형상 46.9→51.6)" },
    /* Applied this round on the author's instruction, against the metric.
       A propeller 85mm BELOW the motor that drives it is not a shape opinion
       the reference gets a vote on — the disc is bolted to the shaft between
       the pod top (182.7) and the hub cap (184.6~201.5), so 187 puts it there
       and nowhere else. Three rounds have now measured the cost and it is the
       same each time: 형상 53→52, 배치 79→78, 종합 82 unchanged (y 184 · 190 ·
       195 all give the identical pair, so the number is not tuned). The cost
       is the traced reference's perspective — its four views draw the prop
       line at ARM height, which is where the disc used to sit. The metric is
       paying 1 point to keep a physically impossible assembly, and a spec that
       exports to CAD cannot ship a rotor under its own motor. */
    { part: "part_propellers", center: [0, 187, 0],
      why: "물리 — 프로펠러가 모터 포드(y 150~183) 위·허브 캡(y 185~202) 아래의 축에 물려야 하는데 y 81.7(가드 아래)에 있었음. 포드 상면 182.7 + 디스크 두께 9의 절반 = 187 (형상 53→52 · 배치 79→78 · 종합 82 유지 — 지표 손해를 알고 적용한다; 참조 4면이 원근을 품어 프롭 선을 암 높이에 그려 놓았다)" },
    /* A rotor disc is the circle a blade sweeps, so its two cross-axes are one
       number: the rotor diameter. The measurement pass reads a 2-blade
       propeller per axis and gets the BLADE, not the disc — 249.5 × 213.5 here
       against the part's own locked dimension rotor_diameter = 300 and the
       parameter propulsion.rotor_diameter = 300 that names this very part in
       `affects`. Making the geometry agree with the number the part already
       declares is honouring the lock, not breaking it. */
    { part: "part_propellers", size: [300, 9, 300],
      why: "사양서 자기모순 — 이 파트의 dimensions rotor_diameter=300 · 파라미터 propulsion.rotor_diameter=300 인데 geometry 는 249.5×213.5(타원비 1.17). 로터 디스크는 블레이드가 쓸고 지나간 원이라 두 횡축이 같아야 한다; 측정 패스가 2엽 프로펠러의 블레이드를 축별로 읽은 값",
      reverted: "형상 53 그대로였지만 적용하지 않는다 — part_propellers 는 USER_PROVIDED airframe.wheelbase(450, LOCKED)의 affects 에 있어 size 편집이 막힌다. 여기서 300 을 뒷받침하는 것은 COMPUTED 파라미터와 파트 자신의 dimensions 뿐이고, 사용자가 준 수는 아니다. 가드가 넓게 잡은 것은 맞지만(휠베이스는 프롭 지름을 정하지 않는다) 사용자 수치를 지키는 가드를 그 정도 근거로 좁히지는 않는다. dimensions 와 geometry 중 어느 쪽이 맞는지는 작성자 판단 — fpv-racer 쪽은 사용자가 직접 127 을 준 경우라 honours 로 통과시켰다" },
    /* Wall, and only wall. The guard's outside does not move, so this cannot
       change any silhouette; it changes what is inside it. */
    { part: "part_prop_guards", wall: 6,
      why: "검증기 TUBE_WALL_UNSPECIFIED — 지름 281 TUBE 가 벽을 말하지 않아 기본값 반경 28% = 벽 39mm 양동이로 빌드되고 있었음. 사진의 가드는 얇은 주황 파이프 (형상 53 그대로 — 바깥면이 안 움직이므로 원리상 불변)" },
    /* The honest guard, measured three ways and not applied. The photograph
       (crop docs/assets/samples/drones/inspection-quad.jpg) shows a thin ring
       at rotor height plus a U bracket dropping from the ring's outer rim to
       the ground — the guards ARE the skids, which is also why the photo
       inventory's "랜딩 스키드" has no part. The reference front silhouette
       agrees: rows 59~100% are a hollow band 733px wide (216 lit of 701 span).
       The 80mm band the spec builds covers rows 40~67% instead, i.e. the rows
       the reference fills with PROPELLER, and that is where its 546 gained
       pixels come from — a wrong part collecting a right part's area. */
    { part: "part_prop_guards", builder: "TORUS", size: [281.3, 12, 233],
      why: "사진 — 가드는 로터 높이의 얇은 후프이지 높이 80·벽 39 의 통이 아님",
      reverted: "형상 53→47 (종합 82→81). 얇게 만들면 링이 덮던 로터 높이의 화소가 비는데, 참조에서 그 띠를 채우는 것은 프로펠러다. CAD 프롭은 ±218, 가드는 ±261 — 참조는 반대로 프롭(0.98W)이 가드(0.97W)보다 넓다" },
    { add: { after: "part_prop_guards", part: newPart("part_prop_guard_struts", "part_prop_guards", "guard_drop_bracket", "프로펠러 가드 지지 브래킷(랜딩 스키드 겸용)", "FRAME",
      { builder: "TORUS", plane: "FRONT", size: [200, 200, 14], center: [0, 26, 0],
        repeat: { pattern: "CIRCULAR", count: 4, radius_mm: 187.2, spacing_mm: null, start_angle_deg: 45 } }, "mat_orange", "링 바깥 테에서 접지면까지 내려오는 U자 브래킷") },
      why: "사진 + 인벤토리 '랜딩 스키드' — 가드 링에서 지면까지 U자 브래킷이 내려오고 그것이 접지면이다; 사양서엔 스키드 파트가 아예 없음 (구성 98→100, 비율 85→94)",
      reverted: "얇은 링과 함께 적용해 형상 53→44~48 (w 140/180/240 · h 139/200, plane FRONT/SIDE 6종 측정). 브래킷 자체는 참조의 빈 루프 자리에 들어가지만, js/spec-to-code.js 의 normalizeRadialStruts 가 CIRCULAR 반복의 가는 막대(w/d ≥ 3)를 모두 '허브에서 링까지 뻗는 암'으로 보고 repeat 반경을 ringR−len/2 로 덮어써서, 반경 187 로 쓴 브래킷이 87~117 에 놓인다. 참조의 루프는 링 바깥 테(반경 ≈258)에 있다 — 사양서만으로는 그 자리에 놓을 수 없다" },
    { part: "part_prop_guards", size: [281.3, 140, 233], center: [0, 96, 0],
      why: "사진 — 가드가 지면까지 닿는다면 띠를 아래로 늘려 접지면까지",
      reverted: "형상 53→49 (h 120@106: 50 · h 140@96: 49 · h 160@86: 47 · h 180@76: 46). 띠를 내릴수록 로터 높이가 비어 손해 — 현재 80@126 이 이 지표의 국소 최적" },
    /* Round 3 closed the guard question by exhausting it. Twelve shapes for the
       same part, every one of them a better description of the photograph than
       the 80mm band, every one of them worse on both metrics:

         TORUS 로드 10, 기울기 0° / 20° / 35° / 50°   형상 47.0 · 49.8 · 43.3 · 41.9
         TORUS 로드 14 / 20 / 30 (기울기 0)           형상 47.6 · 47.6 · 48.9
         TUBE 벽 6, h 160 (지면까지)                  형상 47.8
         EXTRUDE_2D 로드 루프(안쪽 윤곽으로 구멍),
           plane FRONT 280×180 / FRONT 280×240 /
           SIDE 232×180 / TOP 280×232, 로드 10        형상 48.5 · 46.7 · 48.3 · 46.0
         가드 파트 삭제                               형상 47.5
       현행(TUBE 281×80×233 벽 6)                     형상 51.9

       The tilted torus is the shape the photograph actually shows — a thin rod
       loop leaving the arm end, arcing outboard of the disc and continuing to
       the floor, guard and skid in one piece — and it is 2 points down. The
       reason is unchanged from the earlier rounds and now measured from every
       direction: the traced reference fills the whole rotor-height band because
       perspective smears arm, propeller and guard into one stripe, and only a
       part with area there can score it. Not applied. What IS applied is the
       wall (6mm, entry above): it removes 74% of the estimated print mass and
       moves no outer surface, so the honesty is bought for zero metric. */
  ],
  "agri-hexa": [
    /* Photograph agri-hexa.jpg: the battery box sits down in the canopy, not
       proud of it; the skid rails stand wider than the legs' feet; the spray
       boom hangs at skid height with four orange nozzles, and every arm end
       carries its own nozzle under the motor pod.

       This is the sample where the two references disagree least and the gains
       are smallest — every candidate moved the composite by less than 0.2p.
       Measured (종합 / 메시 IoU, committed = 88.01 / 57.35):
         배터리 슬레드 y675→610       88.13 / 56.77   ← 적용
         스키드 트랙 490.4→582        88.08 / 57.35   ← 적용 (합 88.19 / 56.84)
         다리 벌림 z 12°              88.04 / 55.54   ← 되돌림
         노즐 붐 y76.2→40             87.95 / —       ← 되돌림
         모터 포드 하부 노즐 6개 추가    87.84 / —       ← 되돌림 */
    { part: "part_016", center: [0, 610, 0],
      why: "사진 — 배터리 상자가 캐노피(y 597~657) 위로 18 돌출해 있었음; 상면을 캐노피 상면에 맞춰 660→610 (형상 55.8→56.7)" },
    { part: "part_007", spacing: 582,
      why: "사진 — 스키드 레일이 다리보다 바깥으로 벌어져 접지폭이 넓음; 트랙 490.4→582 (형상 55.8→57.0)" },
    { part: "part_006", rotation: [0, 0, 12],
      why: "사진 — 랜딩기어 다리가 A형으로 벌어짐(발끝이 스키드 위로)",
      reverted: "종합 +0.03 뿐인데 메시 참조 IoU 57.35→55.54 (회귀 기준선 57 이탈). 다리·스키드를 함께 582로 벌리는 안도 55.01 로 같은 이유로 기각" },
    { part: "part_010", center: [0, 40, 221.4],
      why: "사진 — 노즐 붐이 스키드 높이에 가깝게 낮음",
      reverted: "종합 88.01→87.95 (형상 −0.3): 참조 실루엣의 붐은 이미 현재 높이" },
    { add: { after: "part_004", part: newPart("part_020", "part_004", "pod_spray_nozzle", "모터 포드 하부 살포 노즐", "MECHANISM",
      { builder: "CONE", plane: "TOP", size: [50, 90, 50], center: [0, 450, 0],
        repeat: { pattern: "CIRCULAR", count: 6, radius_mm: 655.2, spacing_mm: null, start_angle_deg: null } }, "mat_plastic_orange", "각 모터 포드 아래의 살포 노즐") },
      why: "사진 — 붐 노즐 외에 각 암 끝 모터 포드 아래에도 노즐이 달려 있음(인벤토리 '살포 노즐' 6개)",
      reverted: "종합 88.19→87.84 (형상 −1.3, 외관 −1.3): 참조 실루엣의 암 끝은 프롭 원반이 채우고 있어 노즐이 낭비 화소가 됨" },
    /* The disc rule (see inspect-quad) fails here, and the failure says the
       declared number is the wrong one. 550 is what the parameter says; 343 ×
       350 is what the photograph measures, and the two cross-axes already
       agree to 2%. When a round disc disagrees with its label by 57%, the
       label is the thing to fix — but that is a dimensions edit, not a
       geometry edit, and it needs the author. */
    { part: "part_005", size: [350, 19, 350],
      why: "로터 디스크는 원이다 — 342.9×350 을 350×350 으로 (형상 57 유지; 2% 라 층위는 안 움직이고 계약만 성립한다)",
      reverted: "층위는 그대로였지만 적용하지 않는다 — part_005 는 USER_PROVIDED airframe.wheelbase 의 affects 에 있고, 350 을 뒷받침하는 USER_PROVIDED 파라미터가 없어 honours 영수증을 낼 수 없다. 2%짜리 반올림 때문에 사용자 수치 가드를 우회하지는 않는다" },
    { part: "part_005", size: [550, 19, 550],
      why: "사양서 자기모순 — dimensions rotor_diameter=550 인데 geometry 는 342.9×350",
      reverted: "형상 57→47 (종합 88→84). 여기서는 geometry 쪽이 이미 원형(타원비 1.02)이고 사진과 맞는다 — 틀린 것은 선언값 550 이다. 사양서의 dimensions 를 350 으로 고쳐야 하는 건이며 geometry 를 550 으로 늘리는 건이 아니다. part_005 는 USER_PROVIDED airframe.wheelbase 의 affects 에도 있어 honours 없이는 통과하지도 않는다" },
  ],
  "map-wing": [
    /* Reference is the stage-1 mesh, so there is no perspective error to blame
       and both metrics agree. Both candidates were measured and neither helped
       (committed = 89.66 / 메시 IoU 68.24). */
    { part: "part_propeller", center: [0, 145, -160],
      why: "물리 — 프로펠러가 모터(x 0, y 145)에서 x +89·y −16 어긋나 있음",
      reverted: "종합 89.66→89.66, 메시 IoU 68.24 그대로: 프로펠러는 실루엣 래스터에서 제외되는 파트라 위치가 지표에 전혀 잡히지 않음(프롭을 아예 지워도 형상·배치·메시 IoU 불변, 구성만 97.5→52.5). 지표로는 판정 불가한 진짜 오류 — 다음 라운드로" },
    /* The hypothesis was right and the builder was wrong. MIRROR_PAIR is
       already the dihedral idiom — js/spec-to-code.js hinges a mirrored pair on
       the mirror plane precisely so two halves can be swung about the
       centreline — but a LOFT half cannot ride it: a LOFT stacks closed
       sections along one straight axis, so halving the part rebuilds the
       planform around the half-axis and the sections land where the wing never
       was. Give the same hinge an EXTRUDE_2D half-planform instead and it
       works, because an authored outline does not care which axis it is
       stacked on. See the applied entry below. */
    { part: "part_main_wing", size: [600, 44.6, 124], rotation: [0, 0, 7],
      why: "메시 — 주익에 상반각이 보임; 관통 한 파트로는 표현할 수 없어 MIRROR_PAIR 반익 2개(spacing 600, 팁 ±600 유지)로 나누고 z 회전",
      reverted: "종합 89.66→88.62(4°)·86.61(7°)·84.62(10°). 각도 0°로 나누기만 해도 89.46 — 반익으로 쪼개면 loft 단면이 반쪽 축에 다시 쌓인다. 틀린 것은 MIRROR_PAIR 힌지가 아니라 LOFT 였다 — 같은 힌지에 EXTRUDE_2D 반익 평면형을 태우면 형상 64.3→75.7 (아래 적용 항목). 이 항목(LOFT 반익)은 기각 유지" },
    { part: "part_propeller", size: [180, 4, 180],
      why: "사양서 자기모순 — dimensions propeller_diameter=180 인데 geometry 는 82×4×260(타원비 3.17). 로터 디스크에 3:1 타원은 없다; 측정 패스가 푸셔 프롭의 블레이드 한 장을 축별로 읽은 값 (형상 64 유지)" },
    /* APPLIED BY HAND — this entry cannot run, and the reason matters.
       ────────────────────────────────────────────────────────────────
       part_main_wing  LOFT TOP 1200×44.6×124, loft_sections 8단면
                    →  EXTRUDE_2D TOP 604.4×22×133 @(0, 96, 6.9),
                       rotation_deg z 8, repeat MIRROR_PAIR 간격 604.4,
                       loft_sections null, outer_profile = 반익 평면형
                       (뿌리 시위 133 → 팁 91, 팁은 ARC 캡)

       Where every number comes from — the stage-1 mesh, sliced into 24 bands
       along the span and read for the wing's own vertical extent in each:

         · 상반각 8°. Mid-height rises 0.0412 of the span over 0.2917 of it.
           Two independent check points, not a fit: the mesh puts the wing's
           mid-height at +8mm (mesh frame) 225mm out and +57mm 575mm out; the
           line y = 96 + |x|·tan8° gives 127.6 and 176.8 against the mesh's
           127.5 and 176.9. That is what fixes y = 96 as well — it is the
           intercept of the measured line, not a swept value.
         · 단면 22. Bands read 35.9 · 32.8 · 27.6 · 20.8mm inboard-to-outboard,
           but a band is 1/24 of the span and at 8° its own slope inflates each
           by 50·tan8° = 7.0mm. Subtract: 29 at the root, 14 at the tip, and an
           extrusion carries one thickness — 22.
         · 시위 133 → 91. The bands' chordwise extent at the same two stations.
         · 반익 604.4. Projected tip-to-tip comes out at 1200.1mm against
           USER_PROVIDED airframe.wingspan = 1200, and the odd 604.4 is why:
           the panel's outer corner projects 604.4·cos8° + 11·sin8°, so the
           plate's own thickness is part of the span. Rounding the half to the
           clean 600/cos8° = 606 builds a 1203.3mm aircraft. qa-vocab asserts
           the built span against the parameter for exactly this reason.

       형상 64.31 → 75.73 · 메시 IoU 68.24 → 82.17 · 배치 86.4 → 89.3 ·
       종합 89.66 → 91.97, and validateSpec drops from 8 errors to 6 (the wing's
       BUILDER_STRATEGY_MISMATCH and PROFILE_SIZE_MISMATCH both clear — its
       representation_strategy always said PROFILE_EXTRUDE while the builder
       said LOFT). Both references move the same way and by a lot, which is
       what a real shape error looks like when it is removed. Control: the same
       hinge at 0° dihedral scores 63.3, BELOW the loft — the gain is the bend,
       not the builder swap.

       A rejected near-miss worth naming, because it scores the same and is
       worse: one through-wing EXTRUDE_2D in the FRONT plane with the bend
       drawn into a V outline measures 75.23 / 82.04. It is a point of nothing,
       and it costs the planform — a front-plane outline has one chord for the
       whole span, so the taper 133→91 disappears, and no view in either
       reference set is a top view, so the metric cannot see the loss. It also
       trips WING_NOT_TOP_PLANE, which is the validator saying the same thing.
       Taking the tie-break on the metric would have been taking it blind.

       Why it is hand-applied. tune()'s USER_PROVIDED receipt admits `honours`
       only when every guarded key in the entry is `size` and the parameter's
       value appears in it twice (a diameter). airframe.wingspan = 1200 guards
       part_main_wing; this edit preserves it exactly but proves it through
       606·cos8°, and touches `builder`, `rotation` and `spacing` besides. No
       receipt of that shape exists, and inventing a loose one to let this
       through would weaken the guard for everything else. Owner's call: either
       a receipt of the form "the parameter's own quantity is unchanged, and
       here is the arithmetic" or leave edits like this hand-applied with a
       provenance block. Until then the edit lives in docs/specs/map-wing.json
       and this is its provenance. Re-running `--tune map-wing` does NOT
       overwrite it — no executable entry touches part_main_wing. */
  ],
  "sar-vtol": [
    /* Photograph sar-vtol.jpg: a large orange nose cap around the searchlight,
       orange wingtips, a canopy hump over the forward fuselage and a panel
       split line the specification never wrote.

       Two candidates from the v35 diagnosis are NOT here. Raising the V-tail
       (187→320) and the landing-gear arch (260→300) both chase the reference's
       vertical extent, and the reference is the one thing about this sample
       that is known to be wrong (four views traced off one perspective photo,
       yaw-180 ambiguous). Measured, they lower the silhouette in BOTH
       references at once: tail alone 종합 78.03→77.99 with 메시 IoU 61.20→49.62,
       arch alone 78.38 with 49.62→52.32, the two together 79.36 with ~50. The
       composite only rises because 비율 carries 25 points and 형상 15. The
       photograph's own tail is not visibly taller than the CAD's, so this is
       the reference's error being copied into the model, and the mesh-reference
       regression baseline (61) says so numerically. Left out.

       Kept, each measured alone from the committed specification (종합 / 메시):
         분리선                78.71 / 61.20
         캐노피 150×50×420@465  78.77 / 60.93   (60@480 78.70/60.32, 40@462 78.71/61.20)
         노즈 캡 200×180×400@660 78.46 / 61.02   (220×200×300@720 78.30/59.06)
         넷 합                 79.91 / 60.80 */
    { add: { after: "part_fuselage", part: newPart("part_split_line", "part_fuselage", "body_split_line", "기체 상판/하판 분리선", "SHELL",
      { builder: "BOX", plane: "TOP", size: [472, 4, 1100], center: [0, 356, 50] }, "mat_carbon_black", "동체 중간 높이의 상하판 패널 분리선") },
      why: "사진 인벤토리 '기체 상판/하판 분리선' — 동체 중간 높이(주익 뿌리)에 어두운 패널선; 최광폭 구간 1100 길이, 4mm 띠 (구성 90.9→93.2)" },
    { add: { after: "part_fuselage", part: newPart("part_canopy", "part_fuselage", "canopy_shell", "캐노피·셸", "SHELL",
      { builder: "LOFT", plane: "SIDE", size: [150, 50, 420], center: [0, 465, 250] }, "mat_plastic_white", "동체 전방 상부의 캐노피 융기") },
      why: "사진 인벤토리 '캐노피·셸' — 동체 앞쪽 위로 솟은 흰 캐노피; 높이 50·상면 490 으로 동체 윗면(472)에서 18만 솟게 잡아야 메시 참조가 유지됨(60 h·y480 은 메시 60.32)" },
    { material_add: { material_id: "mat_accent_orange", base_color_hex: "#E56D1C", material_subtype: "Polycarbonate" },
      why: "사진 팔레트 #e56d1c 10% — 노즈의 주황 악센트; 사양서엔 주황 재질이 아예 없었음" },
    { add: { after: "part_fuselage", part: newPart("part_nose_cap", "part_fuselage", "nose_cap_orange", "주황 노즈 캡", "SHELL",
      { builder: "SPHERE", plane: "FRONT", size: [200, 180, 400], center: [0, 352, 660] }, "mat_accent_orange", "동체 전방 주황 노즈 캡") },
      why: "사진 — 탐조등(z 652)을 감싼 주황 노즈; 동체 앞 400mm 를 덮되 동체 단면 안에 들어가는 크기로 (외관 87.5→92.8)" },
    { add: { after: "part_main_wing", part: newPart("part_wingtips", "part_main_wing", "wingtip_panels_orange", "주황 윙팁 패널", "SHELL",
      { builder: "BOX", plane: "TOP", size: [180, 30, 200], center: [0, 356.5, -50],
        repeat: { pattern: "MIRROR_PAIR", count: 2, radius_mm: null, spacing_mm: 1530, start_angle_deg: null } }, "mat_accent_orange", "주익 끝 주황 패널") },
      why: "사진 — 주익 끝 주황 패널",
      reverted: "종합 79.91→79.91 (외관 +0.09, 배치 −0.01): 4면 플랫 렌더에서 윙팁은 화소 몇 개, 측정 불가" },
    { part: "part_nose_cap", builder: "CONE",
      why: "검증기 SPHERE_NOT_SPHERICAL — 200×180×400 은 한 축이 2.2배라 구가 아니다. SPHERE 를 늘이면 곡률이 균일한 타원체가 되어 노즈의 어깨선이 사라진다; 축대칭 테이퍼는 CONE (형상 46 유지, 배치 80→81)" },
    /* Round 3 re-opened the nose because the traced side view shows a BLUNT
       rounded end and CONE draws a 400mm point. Three replacements measured,
       none of them better: SPHERE(원래) 45.6 · CONE(현행) 46.1 · LOFT 무딘 오지브
       400 45.98 · 같은 LOFT 250 45.1 · 노즈 파트 삭제 45.5. REVOLVE, which the
       validator names first, is not a candidate here at all: the lathe always
       spins about Y whatever `plane` says (js/spec-cad.js recentres it on h),
       so a nose lying along Z comes out as a 400mm standing spindle — measured
       38.8, the worst of the set. The whole part is worth ±1 point; CONE stays.
       Worth knowing for the next round that reaches for REVOLVE on a
       horizontal body: it will get a vertical one. */
    /* Both rotors, same rule as inspect-quad. Note the thickness axis: for a
       prop the builder takes max(w,h,d) as the diameter and min as the blade
       thickness regardless of `plane`, so the cruise rotor's 18 lives in h and
       must stay there — setting w = h = 600 makes 534 the minimum and builds a
       600 disc 534mm thick. That variant measures 구성 95→85, 형상 46→37. */
    { part: "part_lift_rotors", size: [600, 4, 600],
      why: "사양서 선언 rotor_diameter=600 — geometry 522.2×525.6 (형상 46 유지)" },
    { part: "part_cruise_rotor", size: [500, 18, 500],
      why: "파라미터 propulsion.cruise_propeller_diameter=500 (리프트 로터의 600 이 아니다) — geometry 606.7×18×534, 두께축 h=18 은 그대로 (형상 46 유지)" },
  ],
  "cage-inspect": [
    /* The one item v35 estimated at +3p, measured and wrong. The cage is a
       hollow LOFT sphere shell that renders as an opaque sphere; the photograph
       and the reference show a lattice. Replacing it with great-circle TORUS
       rings does make the render honest — 외관 87.43→91.91 — but the silhouette
       layer rasterises occupancy, and the reference silhouette is FILLED: the
       opaque sphere matches it, a ring cage does not. Nothing else in this
       sample was worth an entry (구성 100, 비율 97). */
    { part: "part_001_cage", builder: "TORUS", size: [412, 10, 395], loft: null,
      radius: 1, why: "사진 — 케이지는 격자이지 속찬 구가 아님; 대원 링 3~6개(TORUS + CIRCULAR)로 바꿔 내부 파트를 드러냄",
      reverted: "종합 88.24→82.68(링 3)·82.85(링 6), 메시 IoU 60.99→26.22·27.36. 외관은 +4.5 오르지만 형상이 52.36→25 로 무너진다 — 참조 실루엣이 채워진 원반이라 불투명 구가 오히려 맞는 화소를 낸다. 지표 한계이지 사양서 결함이 아님. 재측정(대원 3링 → +위도 2링 → +자오선 45/135° → +위도 4링, rotation_deg 사용): 형상 28·31·36·38, 종합 82·82·84·84. 링을 늘릴수록 오르지만 52 를 넘지 못한다 — 산술이 이유를 말해 준다. 참조는 원반의 55.7% 를 채운 격자다. 불투명 구는 그 55.7% 를 전부 덮으므로 IoU = 0.557 (실측 52). 같은 밀도의 격자라도 링이 어긋나 있으면 교집합 ≈ 0.557² = 0.31, 합집합 ≈ 0.81 → IoU ≈ 0.39 (실측 38). 격자가 이기려면 참조 격자와 72% 이상 겹쳐야 하고, 그건 사양서에 참조의 지오데식 배치를 베껴 넣는 일이지 올바른 빌더를 고르는 일이 아니다. // v38 재측정: 위 결론은 유지되지만 수치는 링 3~6개짜리 값이라 달성 가능한 최선을 크게 과소평가하고 있었다. 자오선 13링(FRONT/SIDE plane 분담 + rotation_deg ±45)으로 올리면 로드 지름별로 형상 8mm:42 · 10mm:44 · 14mm:46 · 20mm:50 · 26mm:52 · 32mm:53, 종합 86·86·87·87·88·88. 메시 IoU 는 61→57(로드 20)로 −4 에 그치고 경계 오차는 오히려 7.3%→1.6%, 종횡비 1.8%→0.9% 로 4배 이상 좋아진다 — 링 격자의 바깥 껍질이 로프트 구보다 참조 구에 더 잘 맞는다는 뜻이다. 그럼에도 적용하지 않는 이유는 두 가지다: (1) 형상이 동률이 되는 로드 26~32mm 는 지름 400 케이지에 물리적으로 말이 안 된다 — 사진의 로드는 케이지 지름의 1.5% 남짓(≈6~10mm)이고, 그 정직한 굵기에서는 형상 42~44 로 52 에 8~10 모자란다. (2) 구성이 100→97 로 내려간다(파트 1개가 13개가 되어 인벤토리 대조가 어긋난다). 다만 절제 분석은 격자 쪽이 옳다고 분명히 말한다: 현행 불투명 구에서는 17개 내부 파트가 전용 화소 0(구 안에 완전히 묻힘)인데, 로드 10mm 격자로 바꾸면 동체 52/52 · 캐노피 39/39 · GNSS 24/24 · 로터 59/60 · 모터 포드 67/76 등 9개 파트가 전용 화소를 얻고 그 대부분이 획득(참조와 일치)이다. 즉 참조 메시는 내부 드론을 실제로 담고 있고 불투명 구가 그것을 가리고 있다. 형상 −8 을 감수하고 내부를 드러낼지는 소유자 판단 사항으로 남긴다" },
    { part: "part_005_rotors", size: [100, 6, 100],
      why: "사양서 선언 propeller_diameter=100 — geometry 93×6×113 (형상 52 유지)" },
    /* Round 3 adds the one number the earlier passes were missing: the ceiling.
       cage-inspect's four views are rasterised from the stage-1 mesh, so the
       mesh scored against them is what a perfect model of this reference can
       reach — 83.9 against the CAD's 52.4. Unlike the six photo-traced samples
       (where the CAD is already at 97% of the ceiling), the 31 points here are
       real and unclaimed. The ablation says the same thing from the other side:
       the cage paints 9,781 pixels no other part paints, of which 4,972 are the
       reference's lattice and 4,809 are the holes between its rods. So there is
       nothing wrong with the diagnosis; what is missing is a way to write a
       geodesic in the specification's vocabulary. Concentric rings need
       per-ring parts (repeat CIRCULAR pushes copies outward), and to beat 52
       the rings must overlap the reference's own geodesic by 72% — which means
       transcribing its node layout, not choosing a builder. Still the owner's
       call, and still the largest single opportunity in the sample set. */
  ],
  "fpv-racer": [
    /* Photograph fpv-racer.png: the battery rides behind the canopy with its
       top level with the canopy top; the specification stacked it 22mm above
       (72 vs canopy top 64.5). Lowered in steps 72→68 87.59, 64 87.76, 58 87.35,
       52 86.62 — 64 kept. The canopy's lower flanks are orange (photo cluster
       #832f08 4%, no orange material in the spec): two thin panels, +0.1.
       Both references agree here — 메시 IoU 43.12→44.36. */
    { part: "part_010", center: [-2, 64, -15],
      why: "사진 — 배터리 상면이 캐노피 상면과 같은 높이; 종전 y 72는 캐노피 위로 22 돌출 (측정 68: 87.59 · 64: 87.76 · 58: 87.35)" },
    { part: "part_013", center: [-4, 48, -15],
      why: "배터리 슬레드를 배터리 밑면(49.5)에 맞춰 8 하향" },
    { material_add: { material_id: "mat_accent_orange", base_color_hex: "#832F08" },
      why: "사진 팔레트 #832f08 4% — 캐노피 하단 측면 주황(그늘 측정값 그대로); 사양서엔 주황 재질 없음" },
    { add: { after: "part_007", part: newPart("part_015", "part_007", "canopy_side_panels_orange", "캐노피 측면 주황 패널", "SHELL",
      { builder: "BOX", plane: "FRONT", size: [4, 14, 50], center: [0, 28, 15], repeat: { pattern: "MIRROR_PAIR", count: 2, radius_mm: null, spacing_mm: 46, start_angle_deg: null } }, "mat_accent_orange", "캐노피 하단 측면의 주황 패널") },
      why: "사진 — 캐노피 양 측면 하단의 주황 패널 (외관 90.4→91.8)" },
    { part: "part_007", size: [46, 32, 142], center: [0, 32, 7],
      why: "사진 — 캐노피가 낮고 뒤로 경사", reverted: "종합 87.30→87.06: 참조 상단선은 배터리가 정하고 있어 캐노피만 낮추면 형상 −1" },
    { part: "part_009", rotation: [25, 0, 0],
      why: "사진 — 안테나 후방 기울기", reverted: "종합 87.30→87.28: 참조 4면(yaw 180 정합)에선 현재 부호가 맞음" },
    { part: "part_006", center: [0, 12, 0],
      why: "사진 — 랜딩 패드 없음, 모터 벨이 발", reverted: "종합 87.30→86.49 (비율 91→88): 패드가 높이 범위 하단을 정함" },
    /* The prompt says 5인치. A 5-inch propeller is 127mm across, and the
       parameter propulsion.rotor_diameter already says 127. The geometry said
       100 × 82 — neither the prompt's number nor a circle. This is the one
       disc-rule case in the repository that moves the silhouette, because on a
       220mm quad the disc is a quarter of the whole airframe. */
    { part: "part_004", size: [127, 6, 127], honours: "propulsion.rotor_diameter",
      why: "프롬프트 '5인치 FPV 레이싱 쿼드' → 파라미터 propulsion.rotor_diameter=127 (USER_PROVIDED) 인데 geometry 는 100×6×82(타원비 1.22)로 프롬프트 수치도 원형도 아니었음. 이 파트는 USER_PROVIDED airframe.wheelbase 의 affects 에도 있으나, 휠베이스는 프롭을 배치할 뿐 지름을 정하지 않는다 — honours 로 어느 사용자 수치를 따르는지 밝히고 통과 (형상 61→65, 배치 84→86; 비율은 91→86 으로 내려가 종합 88 유지)" },
  ],
  "fire-octo": [
    /* The prompt asks for a "전방 소화 노즐" and the specification wrote only the
       tube it screws onto. Adding the cone is the single largest gain in this
       whole round — 구성 87.5→100, 종합 79.01→82.75 — and it costs the mesh
       reference nothing (47.79→47.73).

       The gear is the sample's other story and it has a ceiling. The photograph
       stands the aircraft high on splayed legs and the composite's 비율 layer
       wants that badly, but past ~600mm the leg silhouette outruns both
       references at once. Measured (종합 / 메시 IoU, committed = 79.01 / 47.79):
         h520 트랙500  80.07 / 48.83     h600 트랙600  80.64 / 49.46  ← 적용
         h560 트랙560  80.18 / 48.67     h640 트랙640  80.67 / 49.63
         h680 트랙660  80.54 / 47.59     h720 트랙680  81.02 / 45.22
         h760 트랙700  82.40 / 43.12  ← 회귀 기준선 48 이탈, 기각
       600 을 고른 것은 640 과 종합이 사실상 같으면서(80.64 vs 80.67) 형상이
       45.90 대 44.07 로 유일하게 오르는 지점이기 때문이다. */
    { add: { after: "front_boom_tube", part: newPart("fire_nozzle", "front_boom_tube", "fire_nozzle", "전방 소화 노즐", "MECHANISM",
      { builder: "CONE", plane: "FRONT", size: [50, 50, 70], center: [0, 500, 368] }, "mat_dark_metal", "전방 튜브 끝의 소화 노즐(프롬프트 명시)") },
      why: "프롬프트 '전방 소화 노즐' — 사양서는 튜브만 두고 노즐을 빠뜨림; 튜브 끝(z 333)에 지름 50 노즐 (구성 87.5→100, 종합 +3.7)" },
    { part: "landing_gear_frames", size: [36, 600, 568], center: [0, 293, 0], spacing: 600,
      why: "사진 fire-octo.png — 다리 상단을 하판(y 593)에 붙이고 발끝 −7까지 600(스팬 1600 의 0.375), 트랙 500→600 (비율 84.6→90.3, 메시 IoU 47.8→49.5)" },
    { part: "landing_gear_skids", center: [0, -62, 0], spacing: 600,
      why: "다리 발끝(y −7)에 맞춰 스키드 하향, 트랙 600" },
    { part: "cable_reel_payload", center: [0, 180, 0],
      why: "사진 — 릴이 하판에 붙지 않고 다리 중간 높이에 매달림; 270→180 (측정 260: 84.35 · 240: 84.49 · 220: 84.50 · 200: 84.73 · 180: 84.86 · 150: 84.63)" },
    { part: "cable_reel_payload", size: [400, 400, 360],
      why: "사진 — 릴 지름 ≈ 스팬 0.2(≈450) 로 확대", reverted: "종합 −0.07 (형상 −0.3): 참조 실루엣의 릴이 CAD 크기와 이미 일치, 확대는 손해" },
  ],
  "relay-hexa": [
    /* Every geometric change here is measured against a reference that draws
       the ground-lying tether as a vertical line to the picture frame, which
       squeezes the airframe into the top half of the mask (PROGRESS v35): the
       legs' splay, tried at 32° with the skids moved out to match, moved the
       composite 72.68→72.69 and is not kept — nothing about the legs is
       decidable against this reference. The spool is different: the prompt
       names it, the specification wrote a box instead, and the drum reads in
       both references (메시 IoU 33.93→34.72). */
    { part: "part_010", builder: "CYLINDER", plane: "SIDE", size: [200, 130, 130], center: [-1, 160, 0],
      name: "tether_cable_spool", display: "하부 계류 케이블 스풀(페이로드)",
      why: "프롬프트 '하부 계류 케이블 스풀' + 사진 relay-hexa.png — 다리 사이 하부 페이로드는 케이블이 빠져나오는 가로축 드럼(스풀)이지 상자가 아님; 사양서는 '하부 페이로드 모듈' 상자로 적어 스풀을 빠뜨렸음. 드럼 지름 ≈130·폭 ≈200(로터 스팬 1280 대비 사진 비례). 구성 87.8→100, 종합 68.93→72.68" },
    { part: "part_008", rotation: [0, 0, 32], why: "사진 — 다리 벌림 25→32°", reverted: "종합 72.68→72.69, 참조 케이블 결함으로 판정 불가" },
    /* v36 could not decide the cable and said so. It is decided now, against
       the traced reference: RESET_TABLE part_018 carries the photograph, the
       two-reference sweep and the arithmetic. Nothing about the cable's length
       changes; what is left here is the plate. */
    { part: "part_002", builder: "CYLINDER",
      why: "검증기 PLATE_AS_TUBE — 두께 15 · 지름 284 의 판인데 TUBE 로 쓰여 가운데가 뚫린 링으로 빌드되고 있었음. 원형 판은 CYLINDER (형상 41 유지 — 이 파트는 캐노피 안에 묻혀 전용 화소 0)" },
  ],
  "delivery-octo": [
    /* No photograph and no stage-1 mesh, so only 구성 is measurable and the
       silhouette layers say nothing either way. Applied on the validator's
       word and the part's own name. */
    { part: "part_arm_set", builder: "TUBE", wall: 2,
      why: "검증기 TUBE_AS_SOLID_CYLINDER — '카본 튜브 암' 이 CYLINDER 라 속이 찬 봉으로 빌드됨. 치수·plane 그대로 TUBE + 벽 2mm (참조가 없어 형상 측정 불가; 프린트 질량만 줄어든다)" },
  ],
};

const GUARDED_KEYS = ["size", "spacing", "radius", "rotation", "builder"];

function userProvidedParts(spec) {
  const ids = new Set();
  for (const p of spec.parameters || []) {
    if (p.provenance !== "USER_PROVIDED") continue;
    for (const a of p.affects || []) ids.add(a);
  }
  return ids;
}

/* describe() plus the repeat, because several entries here move nothing but a
   track width: without the spacing in the line, a skid rail widened from 490
   to 582 logs as before → after with both sides identical. */
function describeRepeat(g) {
  const r = g.repeat;
  const extra = !r ? "" : ` · ${r.pattern}${r.count > 1 ? `×${r.count}` : ""}`
    + (r.spacing_mm != null ? ` 간격 ${r.spacing_mm}` : "")
    + (r.radius_mm != null ? ` 반경 ${r.radius_mm}` : "");
  const rot = g.rotation_deg && (g.rotation_deg.x || g.rotation_deg.y || g.rotation_deg.z)
    ? ` · 회전 ${g.rotation_deg.x}/${g.rotation_deg.y}/${g.rotation_deg.z}` : "";
  /* A wall edit moves no outer surface, so without this the log line is
     identical on both sides of the arrow and reads as a no-op. */
  const wall = g.builder === "TUBE" ? ` · 벽 ${g.corner_radius_mm > 0 ? g.corner_radius_mm : "미지정(반경 28%)"}` : "";
  return describe(g) + extra + rot + wall;
}

function tune(id, spec) {
  const table = TUNE_TABLE[id];
  if (!table) return { done: [], skipped: [] };
  const guarded = userProvidedParts(spec);
  const done = [], skipped = [];
  const label = (p) => p.display_name_ko || p.part_id;
  for (const e of table) {
    if (e.reverted) { skipped.push(`${e.part || e.add?.part?.part_id || e.material}: ${e.why} — 되돌림(${e.reverted})`); continue; }
    if (e.material_add) {
      if (!(spec.materials || []).some((x) => x.material_id === e.material_add.material_id)) {
        /* A colour the photograph shows and the writer left out — an accent
           panel, a nose cap. Observed in the picture, so IMAGE_OBSERVED. */
        spec.materials.push({ material_class: "PLASTIC", material_subtype: null, finish: "MATTE", metalness: 0, roughness: 0.5,
          provenance: "IMAGE_OBSERVED", confidence: 0.8, requires_confirmation: false, ...e.material_add });
        done.push(`+ 재질 ${e.material_add.material_id} ${e.material_add.base_color_hex} (${e.why})`);
      }
      continue;
    }
    if (e.material && !e.part) {
      const m = (spec.materials || []).find((x) => x.material_id === e.material);
      if (!m) throw new Error(`${id}: 재질 ${e.material} 없음`);
      const was = m.base_color_hex;
      m.base_color_hex = e.color;
      /* A colour read off the photograph is an observation, and says so. */
      m.provenance = "IMAGE_OBSERVED";
      done.push(`재질 ${e.material} ${was} → ${e.color} (${e.why})`);
      continue;
    }
    if (e.add) {
      if ((spec.parts || []).some((p) => p.part_id === e.add.part.part_id)) { done.push(`${e.add.part.part_id} 이미 있음 — 건너뜀`); continue; }
      const at = spec.parts.findIndex((p) => p.part_id === e.add.after);
      spec.parts.splice(at < 0 ? spec.parts.length : at + 1, 0, structuredClone(e.add.part));
      done.push(`+ ${e.add.part.display_name_ko || e.add.part.part_id} ${e.add.part.geometry.builder} (${e.why})`);
      continue;
    }
    const part = (spec.parts || []).find((p) => p.part_id === e.part);
    if (!part) throw new Error(`${id}: 파트 ${e.part} 없음`);
    if (guarded.has(e.part)) {
      const bad = GUARDED_KEYS.filter((k) => e[k] !== undefined);
      /* One parameter guards a part, another parameter fixes the number the
         edit writes, and both can be the user's. fpv-racer says "5인치 …
         대각 220mm": the wheelbase lists the rotor in `affects` (it places the
         rotor, it does not size it) while propulsion.rotor_diameter — also
         USER_PROVIDED — says 127 and the geometry said 100 × 82. Refusing that
         edit protects one user number by keeping another one broken.

         `honours` names the parameter being obeyed and is CHECKED, not
         believed: it must exist, be USER_PROVIDED, name this part in
         `affects`, and its value must be the size actually written. An entry
         cannot talk its way past the guard, only show its receipt. Anything
         other than `size` still refuses. */
      if (bad.length && e.honours) {
        const par = (spec.parameters || []).find((x) => x.id === e.honours);
        const want = par?.value;
        const ok = par && par.provenance === "USER_PROVIDED" && (par.affects || []).includes(e.part)
          && bad.every((k) => k === "size") && e.size.filter((v) => v === want).length === 2;
        if (!ok) {
          throw new Error(`${id}: ${e.part} honours ${e.honours} 가 성립하지 않습니다 `
            + `(USER_PROVIDED 여부 ${par?.provenance} · affects 포함 ${!!par && (par.affects || []).includes(e.part)} `
            + `· 값 ${want} 가 size ${JSON.stringify(e.size)} 에 두 축으로 들어가는가)`);
        }
      } else if (bad.length) {
        throw new Error(`${id}: ${e.part} 는 USER_PROVIDED 파라미터가 정하는 파트 — ${bad.join("/")} 수정 불가`);
      }
    }
    const g = part.geometry;
    const was = describeRepeat(g);
    if (e.builder) g.builder = e.builder;
    if (e.plane) g.plane = e.plane;
    if (e.size) g.size_mm = { w: e.size[0], h: e.size[1], d: e.size[2] };
    if (e.center) g.center_mm = { x: e.center[0], y: e.center[1], z: e.center[2] };
    if (e.rotation) g.rotation_deg = { x: e.rotation[0], y: e.rotation[1], z: e.rotation[2] };
    /* A TUBE's wall is carried by corner_radius_mm (js/spec-cad.js says which
       field and why). It is the only edit here that changes no outer surface
       at all, so it can never move a silhouette — which is exactly why it has
       to be expressible: otherwise the only way to stop a 281mm guard being
       built with a 39mm wall is to change its outside too. */
    if (e.wall != null) g.corner_radius_mm = e.wall;
    if (e.spacing != null && g.repeat) g.repeat.spacing_mm = e.spacing;
    if (e.radius != null && g.repeat) g.repeat.radius_mm = e.radius;
    if (e.loft === null) g.loft_sections = null;
    if (e.loft) g.loft_sections = structuredClone(e.loft);
    if (e.profile !== undefined) { g.outer_profile = e.profile ? structuredClone(e.profile) : null; g.inner_profile = null; }
    if (e.material_id) part.material_id = e.material_id;
    if (e.name) part.name = e.name;
    if (e.display) part.display_name_ko = e.display;
    done.push(`${label(part)} ${was} → ${describeRepeat(g)}${e.material_id ? ` · ${e.material_id}` : ""} (${e.why})`);
  }
  return { done, skipped };
}

if (TUNE) {
  const ids = ONLY.length ? ONLY : Object.keys(TUNE_TABLE);
  for (const id of ids) {
    const specUrl = new URL(`${id}.json`, SPECS);
    const spec = JSON.parse(await readFile(specUrl, "utf8"));
    const { done, skipped } = tune(id, spec);
    if (done.length && !DRY) await writeFile(specUrl, JSON.stringify(spec, null, 2));
    console.log(`${id.padEnd(14)} 조정 ${done.length}건${skipped.length ? ` · 되돌린 항목 ${skipped.length}건` : ""}`);
    for (const line of done) console.log(`  ✎ ${line}`);
    for (const line of skipped) console.log(`  ↩ ${line}`);
  }
  if (DRY) console.log("\n--dry 모드: 파일을 쓰지 않았습니다.");
  process.exit(0);
}

const index = JSON.parse(await readFile(new URL("index.json", MESHES), "utf8"));

for (const id of Object.keys(index)) {
  if (ONLY.length && !ONLY.includes(id)) continue;
  const specUrl = new URL(`${id}.json`, SPECS);
  const spec = JSON.parse(await readFile(specUrl, "utf8"));
  const mesh = positionsFromGlb(await readFile(new URL(index[id].file, MESHES)));
  if (!mesh) { console.log(`${id} … 메시를 읽지 못했습니다`); continue; }

  const reset = RESET ? resetInternal(id, spec) : [];
  /* Rotated parts are measured in their own frame and the numbers written are
     pre-tilt; the log shows each one before → after so the reading can be
     judged against the tilt it was taken through. Snapshot before the pass,
     which edits the specification in place. */
  const rotated = new Map();
  for (const part of spec.parts || []) {
    const g = part.geometry, rot = g?.rotation_deg;
    if (rot && (rot.x || rot.y || rot.z)) rotated.set(part, describe(g));
  }
  /* In repair mode the measurement is run against a copy and only its verdict
     is printed, so the restored dimensions are what gets written. */
  const target = RESET ? structuredClone(spec) : spec;
  const r = refineFromMesh(target, mesh);
  const touched = r.measured, skipped = r.internal, authored = r.authored || [];
  const write = RESET ? reset.length > 0 : touched.length > 0;
  if (write && !DRY) await writeFile(specUrl, JSON.stringify(spec, null, 2));
  const total = touched.length + skipped.length + authored.length;
  console.log(`${id.padEnd(14)} ${RESET ? "복원(측정 안 함) · 판정" : "측정"} ${touched.length}/${total}`
    + (touched.length ? ` · ${touched.join(", ")}` : "")
    + (skipped.length ? ` · 내부(메시 없음) ${skipped.join(", ")}` : "")
    /* Printed rather than counted silently: this pass is run in bulk over the
       committed samples, and a section quietly measured away would be found
       later as a plank with nothing in the log to say when it happened. */
    + (authored.length ? ` · 사양서 우선 ${authored.join(", ")}` : ""));
  for (const line of reset) console.log(`  ↩ ${line}`);
  for (const [part, before] of rotated) {
    const g = (target.parts || []).find((p) => p.part_id === part.part_id)?.geometry;
    if (!g) continue;
    const rot = part.geometry.rotation_deg;
    const after = describe(g);
    console.log(`  ↻ ${part.display_name_ko || part.part_id} 회전(${rot.x || 0}, ${rot.y || 0}, ${rot.z || 0})° · ${before}`
      + (after === before ? " — 변화 없음" : ` → ${after}`));
  }
}

/* One line for a part's geometry: builder, pre-tilt size, centre, sections. */
function describe(g) {
  const s = g.size_mm || {}, c = g.center_mm || {};
  return `${g.builder} ${s.w}×${s.h}×${s.d} @(${c.x}, ${c.y}, ${c.z})`
    + (g.loft_sections?.length ? ` · ${g.loft_sections.length}단면` : "");
}

if (DRY) console.log("\n--dry 모드: 파일을 쓰지 않았습니다.");
