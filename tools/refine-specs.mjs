/* Measure loft sections off the committed stage-1 meshes and write them into
   the specifications.

   This is the step that stops the specification writer from guessing the one
   thing it cannot see. An extrusion carries a single silhouette, so the survey
   wing's fuselage was a 760mm side profile pushed through a constant 140mm —
   a plank with a good outline. The mesh knows better: sliced along its own
   axis it reports a section running 186mm tall at the nose, 76mm at the waist
   and 118mm again further back.

   Free and deterministic: no segmentation service, because each part's own
   declared box is the mask.

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
       it.
     · 사양서 선언 — what the specification itself said before any measurement
       touched the part. A battery sled or a distribution plate is airframe, not
       a catalogue component, and the author's figure is the one that was drawn
       around.

   Parts left alone on purpose: inspect-quad's ESC, whose 45×10×45 was never
   overwritten, and every part the mesh really can see.

   --reset-internal repairs and stops. It deliberately does NOT re-measure: the
   committed specifications are not raw measurement output — the silhouette fit
   in tools/fit-spec.mjs has been over them since — and a fresh pass would
   overwrite that with numbers 13% larger than the last reading, which is the
   same outward creep this repair exists to undo. Measuring is what the tool
   does without the flag. The pass still runs here against a copy, so the log
   can show that the restored parts are now declined rather than re-inflated. */
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
  },
  "sar-vtol": {
    part_battery_pack: { builder: "BOX", size: [120, 80, 250], center: [0, 320, 0],
      why: "사양서 선언 — 카탈로그 bat_12s_16000(210×95×85)을 수납하는 배터리 베이" },
    part_flight_controller: { builder: "BOX", size: [50, 30, 50], center: [0, 380, 50],
      why: "사양서 선언 — 비행제어 컴퓨터" },
    part_esc: { builder: "BOX", size: [100, 40, 150], center: [0, 350, -150],
      why: "사양서 선언 — 변속기·전원분배부" },
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
    const was = `${g.size_mm.w}×${g.size_mm.h}×${g.size_mm.d}`;
    g.builder = want.builder;
    g.size_mm = { w: want.size[0], h: want.size[1], d: want.size[2] };
    g.center_mm = { x: want.center[0], y: want.center[1], z: want.center[2] };
    /* A loft written from the airframe would otherwise survive the reset and
       keep drawing the shape the box measured. */
    delete g.loft_sections;
    done.push(`${part.display_name_ko || part.part_id} ${was} → ${want.size.join("×")} (${want.why})`);
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
  /* In repair mode the measurement is run against a copy and only its verdict
     is printed, so the restored dimensions are what gets written. */
  const r = refineFromMesh(RESET ? structuredClone(spec) : spec, mesh);
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
}

if (DRY) console.log("\n--dry 모드: 파일을 쓰지 않았습니다.");
