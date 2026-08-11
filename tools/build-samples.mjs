/* Pre-build the specification library for the public demo.

   The static page has no API key, so its samples have to be generated once
   against a running server and committed. Each entry keeps the prompt it was
   actually generated from, so the composer shows the real input rather than a
   caption written afterwards.

   node tools/build-samples.mjs [http://host:port]
*/
import { writeFile, mkdir, readFile } from "node:fs/promises";
import { request as httpRequest } from "node:http";

const API = process.argv.slice(2).find((a) => a.startsWith("http")) || "http://61.107.200.148:8347";
const OUT = new URL("../docs/specs/", import.meta.url);
const IMG = new URL("../docs/assets/samples/drones/", import.meta.url);

/* img: the sample's own photograph, sent as grounding. A spec written blind
   from the prompt alone describes a category archetype, not the aircraft in
   the picture — the first sar-vtol landed its lift rotors on a ring the photo
   never had. Samples without a photo stay text-only, honestly. */
const CATALOG = [
  { id: "inspect-quad", group: "점검", img: "inspection-quad.jpg",
    prompt: "휠베이스 450mm 교량 점검용 쿼드콥터, 상부 짐벌 줌 카메라, 프로펠러 가드",
    drone: { domain: "CIVIL_COMMERCIAL", mission: "INFRASTRUCTURE_INSPECTION", platform: "QUAD_X" } },
  { id: "agri-hexa", group: "농업", img: "agri-hexa.jpg",
    prompt: "농업 살포 헥사콥터, 휠베이스 1400mm, 하부 10L 탱크와 노즐 붐",
    drone: { domain: "CIVIL_COMMERCIAL", mission: "AGRICULTURE_APPLICATION", platform: "HEXA" } },
  { id: "map-wing", group: "측량", img: "mapping-fixedwing.jpg",
    prompt: "측량용 고정익, 날개폭 1200mm, 하방 카메라 창, 유선형 동체",
    drone: { domain: "CIVIL_COMMERCIAL", mission: "MAPPING_SURVEY", platform: "FIXED_WING" } },
  { id: "sar-vtol", group: "공공안전", img: "sar-vtol.jpg",
    prompt: "수색구조 하이브리드 VTOL, 리프트 붐 2개와 리프트 로터 4개, 전방 짐벌과 탐조등",
    drone: { domain: "PUBLIC_SAFETY", mission: "SEARCH_AND_RESCUE", platform: "LIFT_AND_CRUISE" } },
  { id: "delivery-octo", group: "물류", prompt: "배송용 X8 동축 옥토콥터, 하부 카고 베이, 넓은 랜딩기어",
    drone: { domain: "CIVIL_COMMERCIAL", mission: "DELIVERY", platform: "OCTO_X8" } },
  { id: "isr-wing", group: "방산", prompt: "방산 정찰용 고정익, 날개폭 1800mm, 하방 안정화 센서 터렛, 견고한 동체",
    drone: { domain: "DEFENSE", mission: "DEFENSE_ISR", platform: "FIXED_WING" } },
];

/* Node's fetch (undici) gives up waiting for response headers after 300
   seconds and reports it as a bare "fetch failed". A hybrid VTOL specification
   at high thinking runs past that — one run finished at 269s and the next died
   at 301s — so this uses node:http, which imposes no such limit. Browsers do
   not have this timeout, so only the build tool needed it. */
function post(path, body) {
  const payload = JSON.stringify(body);
  const u = new URL(API + path);
  return new Promise((resolve, reject) => {
    const req = httpRequest({
      hostname: u.hostname, port: u.port || 80, path: u.pathname, method: "POST",
      headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload) },
    }, (res) => {
      let data = "";
      res.setEncoding("utf8");
      res.on("data", (c) => { data += c; });
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`bad JSON (${res.statusCode}, ${data.length}자): ${e.message}`)); }
      });
    });
    req.setTimeout(20 * 60 * 1000, () => req.destroy(new Error("20분 초과")));
    req.on("error", reject);
    req.end(payload);
  });
}

await mkdir(OUT, { recursive: true });
const index = [];

/* Each specification costs a minute or four of a paid model, so a rerun after
   one network failure must not redo the ones that already landed. */
async function existing(id) {
  try {
    const spec = JSON.parse(await readFile(new URL(`${id}.json`, OUT), "utf8"));
    return (spec.parts || []).length ? spec : null;
  } catch { return null; }
}

function record(item, spec) {
  const parts = spec.parts || [];
  index.push({
    id: item.id, prompt: item.prompt, group: item.group,
    name: parts[0]?.display_name_ko || item.id,
    recipe: spec.classification?.platform_architecture || spec.classification?.recipe_id || null,
    parts: parts.length,
  });
  return parts;
}

/* ids on the command line narrow a --force rerun to just those samples, so a
   grounding improvement does not re-bill the four that were already right. */
const ONLY = process.argv.slice(2).filter((a) => !a.startsWith("--") && !a.startsWith("http"));

for (const item of CATALOG) {
  process.stdout.write(`${item.id} … `);
  const t0 = Date.now();
  const skip = ONLY.length && !ONLY.includes(item.id);
  const have = (skip || !process.argv.includes("--force")) ? await existing(item.id) : null;
  if (have) {
    record(item, have);
    console.log(`이미 있음 (${(have.parts || []).length}파트) — 건너뜁니다`);
    continue;
  }
  try {
    let imageB64 = null;
    if (item.img) {
      const jpg = await readFile(new URL(item.img, IMG));
      imageB64 = `data:image/jpeg;base64,${jpg.toString("base64")}`;
    }
    const spec = await post("/api/spec-json", { prompt: item.prompt, drone: item.drone, imageB64 });
    if (!spec.ok || !spec.spec) throw new Error(spec.error || "spec failed");

    await writeFile(new URL(`${item.id}.json`, OUT), JSON.stringify(spec.spec, null, 2));
    const parts = record(item, spec.spec);
    const segs = parts.reduce((n, p) => n + (p.geometry?.outer_profile || []).length, 0);
    const curved = parts.reduce((n, p) => n + [...(p.geometry?.outer_profile || []),
      ...(p.geometry?.inner_profile || [])].filter((s) => s.type !== "LINE").length, 0);
    console.log(`${parts.length}파트 · 세그 ${segs} · 곡선 ${curved} · `
      + `검증 ${(spec.validationErrors || []).length}건 · ${((Date.now() - t0) / 1000).toFixed(0)}초`);
  } catch (e) {
    console.log(`실패 — ${e.message}`);
  }
}

await writeFile(new URL("index.json", OUT), JSON.stringify(index, null, 2));
console.log(`\n${index.length}/${CATALOG.length}개를 docs/specs/에 썼습니다.`);
