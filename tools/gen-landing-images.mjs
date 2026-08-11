// Generates the landing-page imagery with the fallback image model (one-time authoring tool).
import { readFile, writeFile, mkdir } from "node:fs/promises";

const cfg = JSON.parse(await readFile(new URL("../config.local.json", import.meta.url), "utf8"));
const keys = [cfg.fallback.apiKey, cfg.fallback.spareApiKey].filter(Boolean);

const STYLE = "Professional industrial product photography, charcoal grey studio background (#16181d, not pure black), soft key light from upper left, subtle cool indigo rim light, high detail, photorealistic, no text, no watermark, no people";

const JOBS = [
  ["hero_explode.png", "1536x1024",
    `Exploded view of a precision aluminum gearbox assembly floating in mid-air: housing base, housing cover, brass gear, steel shaft and four bolts separated vertically in perfect alignment, thin faint indigo guide lines connecting the parts. ${STYLE}`],
  ["sec_parts.png", "1024x1024",
    `A handheld electronic device split into its plastic enclosure parts hovering slightly apart — top shell, bottom shell, glass display, rubber buttons — each part edge-lit with a thin indigo outline. ${STYLE}`],
  ["sec_cad.png", "1536x1024",
    `Half of an aluminum machine part rendered as glowing indigo CAD wireframe blueprint transitioning into the other half as finished machined metal, engineering grid faintly visible below. ${STYLE}`],
  ["sec_onprem.png", "1024x1024",
    `A single compact black GPU server unit on a clean desk in a dim secure server room, one indigo status LED, shallow depth of field, understated and calm. ${STYLE}`],
  ["sec_mfg.png", "1024x1024",
    `Open steel injection mold halves on a workbench with a small molded plastic housing part between them, machining marks visible on the mold cavity. ${STYLE}`],
];

await mkdir(new URL("../assets/", import.meta.url), { recursive: true });

for (const [name, size, prompt] of JOBS) {
  let done = false;
  for (const key of keys) {
    try {
      const r = await fetch(`${cfg.fallback.baseUrl}/v1/images/generations`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
        body: JSON.stringify({ model: cfg.fallback.imageModel, prompt, size, quality: "medium", n: 1 }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error?.message || r.status);
      await writeFile(new URL(`../assets/${name}`, import.meta.url), Buffer.from(j.data[0].b64_json, "base64"));
      console.log("OK", name);
      done = true;
      break;
    } catch (e) { console.log("retry", name, String(e.message).slice(0, 80)); }
  }
  if (!done) console.log("FAIL", name);
}
console.log("done");
