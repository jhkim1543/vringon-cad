/* Draw the sample photographs for drone types the library does not cover yet.

   The four aircraft that shipped first were photographed in one studio setup —
   seamless warm-grey backdrop, one soft key from the upper left, a contact
   shadow, an elevated three-quarter view, square frame. Anything added later
   has to arrive in that same setup or the library stops being a set of samples
   and becomes a scrapbook: the stage-1 mesh, the silhouette sheet and the
   similarity score all read the picture, and a picture lit differently is a
   different measurement, not a different aircraft.

   Drawn rather than collected. A photograph taken from the web carries someone
   else's rights, and a demo that cannot say where its pictures came from is
   worth less than one with fewer of them.

   Each image is a paid call, so an existing file is left alone unless --force.

     node tools/gen-drone-photos.mjs [--force] [id ...]
*/
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";

const argv = process.argv.slice(2);
const FORCE = argv.includes("--force");
const ONLY = argv.filter((a) => !a.startsWith("--"));

const cfg = JSON.parse(await readFile(new URL("../config.local.json", import.meta.url), "utf8"));
/* Endpoint, model name and keys live in config.local.json; only the role is
   named here, the same rule the rest of the repository follows. */
const KEYS = [cfg.fallback?.apiKey, cfg.fallback?.spareApiKey].filter(Boolean);
const BASE = cfg.fallback?.baseUrl;
const MODEL = cfg.fallback?.imageModel;

/* Measured off the four originals rather than invented: backdrop is a warm
   light grey with a soft vertical falloff, the key is large and high on the
   left, the aircraft sits on its own contact shadow, and the camera is above
   the horizon looking down at maybe 25 degrees. The colourway — matte white
   shell, safety orange accents, matte black carbon and motors — is the one
   three of the four already wear. */
const STYLE = "Photorealistic industrial product photograph of one single unmanned aircraft, "
  + "centred in a square frame on a seamless warm light grey studio backdrop (#e9e8e6) with a soft "
  + "vertical falloff, one large soft key light from the upper left, gentle diffuse contact shadow "
  + "directly beneath the aircraft, camera raised about 25 degrees above the aircraft looking down "
  + "in a three-quarter front view, the complete aircraft inside the frame with clear empty margin "
  + "on every side, matte finish, crisp focus edge to edge, "
  + "no text, no numbers, no logo, no watermark, no people, no props, no ground plane markings";

/* One picture per aircraft, and each aircraft is a different point in the
   domain / mission / airframe taxonomy the specification writer classifies
   against — a fifth quadcopter for infrastructure inspection would test the
   pipeline on ground it has already covered. */
const JOBS = [
  ["cage-inspect.png",
    "A small caged inspection multirotor for flying inside tanks and ducts: a compact quadcopter "
    + "completely enclosed in a spherical protective cage woven from thin matte black carbon rods "
    + "with visible ring joints, roughly 400mm across, the cage free to roll around the inner "
    + "aircraft on two gimbal rings, a matte white body with safety orange accents inside it "
    + "carrying a small forward camera and two white LED spotlights, four small black propellers "
    + "visible through the cage."],
  ["fpv-racer.png",
    "A small five-inch FPV racing quadcopter, about 220mm motor to motor: a flat X-shaped matte "
    + "black carbon fibre frame with visibly thick arms, four exposed black motors with orange bell "
    + "tops, four black three-blade propellers, a low matte white canopy with safety orange side "
    + "panels over the electronics, a small square camera tilted steeply upward at the nose, a "
    + "single black whip antenna trailing at the rear, a slim battery strapped on top, no landing "
    + "gear beyond short frame standoffs."],
  /* Arm count spelled out twice and negated once. Asked for an X8 in one line
     the model drew a six-arm coaxial, which is a different airframe than the
     one the classification names and would have put the specification writer
     in front of a photograph that contradicts its own brief. */
  ["fire-octo.png",
    "A large firefighting heavy-lift octocopter in coaxial X8 layout, about 1600mm motor to motor. "
    + "It has EXACTLY FOUR arms, not six and not eight: four thick matte black carbon arms leaving "
    + "the body in an X, one to the front left, one to the front right, one to the rear left and one "
    + "to the rear right. Each of those four arms ends in a coaxial motor pod carrying two motors "
    + "stacked one directly above the other, a propeller on top and a second propeller underneath, "
    + "so there are four arms and eight propellers in total. A broad matte white central body with "
    + "safety orange panels, a straight black water-cannon nozzle on the nose pointing forward, a "
    + "black hose reel slung under the belly with coiled hose on it, tall wide black tubular landing "
    + "legs."],
  ["relay-hexa.png",
    "A tethered communications relay hexacopter, about 900mm motor to motor: six matte black carbon "
    + "arms in a flat hexagon each ending in a black motor and a two-blade black propeller, a matte "
    + "white central body with safety orange trim, a slim vertical white antenna mast standing about "
    + "300mm above the body with two small box radios on it, a black cable spool mounted under the "
    + "belly with a thin tether cable running down from it, four short black landing legs."],
];

const OUT = new URL("../docs/assets/samples/drones/", import.meta.url);
await mkdir(OUT, { recursive: true });

/* Squares only: the four originals are square, and a wider frame would put the
   aircraft at a different size inside its own picture, which the silhouette
   sheet in tools/build-views.mjs would then have to undo. */
const SIZE = "1024x1024";

async function draw(prompt) {
  let last = null;
  for (const key of KEYS) {
    try {
      const r = await fetch(`${BASE}/v1/images/generations`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
        signal: AbortSignal.timeout(300000),
        body: JSON.stringify({ model: MODEL, prompt, size: SIZE, quality: "medium", n: 1 }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error?.message || `HTTP ${r.status}`);
      const b64 = j.data?.[0]?.b64_json;
      if (!b64) throw new Error("이미지가 오지 않았습니다");
      return Buffer.from(b64, "base64");
    } catch (e) { last = e; console.log(`  재시도: ${String(e.message).slice(0, 90)}`); }
  }
  throw last || new Error("이미지 모델 설정이 없습니다");
}

for (const [name, subject] of JOBS) {
  const id = name.replace(/\.\w+$/, "");
  if (ONLY.length && !ONLY.includes(id)) continue;
  const dest = new URL(name, OUT);
  if (!FORCE) {
    try {
      const s = await stat(dest);
      if (s.size > 1000) { console.log(`${id} … 이미 있음 (${(s.size / 1024).toFixed(0)}KB) — 건너뜁니다`); continue; }
    } catch { /* not drawn yet */ }
  }
  process.stdout.write(`${id} … `);
  const t0 = Date.now();
  try {
    const buf = await draw(`${subject}\n\n${STYLE}`);
    await writeFile(dest, buf);
    console.log(`${(buf.length / 1024).toFixed(0)}KB · ${((Date.now() - t0) / 1000).toFixed(0)}초`);
  } catch (e) {
    console.log(`실패 — ${e.message}`);
  }
}
