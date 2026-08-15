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

   The second form is a repair, not a measurement — see below.
*/
import { readFile, writeFile } from "node:fs/promises";
import { positionsFromGlb, refineFromMesh } from "../js/mesh-loft.js";

const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const RESET = args.includes("--reset-internal");
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
    part_018: { builder: "CYLINDER", size: [8, 878, 8], center: [0, 186, 0],
      why: "사양서 선언 — 테더 전원선의 길이는 임의(지상국까지); 측정값 738@271은 마스트 꼭대기 위로 나옴" },
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
