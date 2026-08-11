/* Does the specification brain actually answer, and is it the model we claim?

   This exists because a wrong request field was rejected with a 400, the
   silent fallback swallowed it, and the workspace kept naming the primary
   model while the fallback wrote every specification. A green banner is not
   evidence. This asks the API directly and prints modelVersion.

   node tools/llm-check.mjs
*/
import { readFile } from "node:fs/promises";

const cfg = JSON.parse(await readFile(new URL("../config.local.json", import.meta.url), "utf8"));
// same resolution order the server uses, so this checks the real credentials
const keys = [process.env.PRIMARY_LLM_API_KEY, cfg.primary?.apiKey].filter(Boolean);
const BASE = process.env.PRIMARY_LLM_URL || cfg.primary?.baseUrl || "";
const MODEL = process.env.PRIMARY_PLAN_MODEL || cfg.primary?.planModel || "";

if (!keys.length || !BASE || !MODEL) { console.error("config.local.json의 primary 섹션(키·baseUrl·planModel)이 필요합니다"); process.exit(1); }

const SCHEMA = { type: "OBJECT", properties: { ok: { type: "BOOLEAN" } }, required: ["ok"] };
const r = await fetch(`${BASE}/v1beta/models/${MODEL}:generateContent?key=${keys[0]}`, {
  method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: [{ role: "user", parts: [{ text: "ok:true 만 반환" }] }],
    generationConfig: { responseMimeType: "application/json", responseSchema: SCHEMA, maxOutputTokens: 2000 },
  }),
});
const j = await r.json();
if (!r.ok) { console.error("호출 실패:", j.error?.message || r.status); process.exit(1); }
console.log("응답 모델:", j.modelVersion || "(미표기)");
console.log("본문:", j.candidates?.[0]?.content?.parts?.[0]?.text || "(비어 있음)");
