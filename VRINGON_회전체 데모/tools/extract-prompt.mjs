/* 판독 프롬프트 (M3) — 시각 LLM 에게 도면을 DSL 로 옮기게 하는 계약.
   • 표현은 스키마 하나(shaft-schema.js). 응답 스키마는 그 부분집합 + dims_read(판독 근거) + notes + confidence.
   • few-shot 은 샘플러가 만든 합성 도면 3장(prompts/fewshot/*) — 골든 12종과 겹치지 않아 평가가 새지 않는다.
   • 브라우저가 잰 실루엣 힌트(세그먼트 비율 초안)를 함께 주면 구조를 그것에 맞추고 수치는 도면 문자에서 읽게 한다.
   서버(server.mjs)와 평가 도구(tools/eval-extract.mjs)가 같은 함수를 쓴다. */

import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { SEGMENT_TYPES, TRANSITION_TYPES, GROOVE_KINDS, FEATURE_TYPES, PART_CLASSES } from "../js/shaft-schema.js";

const num = (d) => ({ type: "number", description: d });
const str = (d, e) => ({ type: "string", description: d, ...(e ? { enum: e } : {}) });
const int = (d) => ({ type: "integer", description: d });

export const EXTRACT_RESPONSE_SCHEMA = {
  type: "object", required: ["dsl", "dims_read", "notes", "confidence"],
  properties: {
    dsl: {
      type: "object", required: ["name_ko", "part_class", "material", "drawing_number", "segments", "transitions", "grooves", "bore", "features"],
      description: "부품 DSL. 배열은 해당 항목이 없어도 빈 배열로 반드시 낸다. 숫자 필드는 해당 없으면 0, 문자 필드는 빈 문자열.",
      properties: {
        name_ko: str("표제란 품명(한글). 없으면 형상으로 지은 이름."),
        part_class: str("부품 분류.", PART_CLASSES),
        material: str("표제란 재질 표기 (없으면 빈 문자열)."),
        drawing_number: str("도번 (없으면 빈 문자열)."),
        segments: { type: "array", description: "왼쪽→오른쪽 외형 세그먼트.", items: { type: "object", required: ["type", "length", "diameter", "d_start", "d_end", "spec", "pitch", "tolerance", "label"], properties: {
          type: str("cyl|taper|thread", SEGMENT_TYPES), length: num("길이 mm"), diameter: num("cyl/thread 지름(나사는 호칭경)"),
          d_start: num("taper 왼쪽 지름"), d_end: num("taper 오른쪽 지름"), spec: str("thread 호출 예 M20x1.5"), pitch: num("thread 피치"),
          tolerance: str("공차 표기 예 h6"), label: str("용도 라벨") } } },
        transitions: { type: "array", description: "경계 모서리 처리. at: 0=왼쪽 끝, n=오른쪽 끝, k=세그먼트 k-1|k 단차. 해당 없는 숫자는 0.", items: { type: "object", required: ["at", "type", "size", "angle", "radius", "width", "depth"], properties: {
          at: int("경계 번호"), type: str("chamfer|fillet|round|undercut", TRANSITION_TYPES), size: num("chamfer C 값"), angle: num("chamfer 각도(기본 45)"),
          radius: num("fillet/round R"), width: num("undercut 폭"), depth: num("undercut 깊이(반경)") } } },
        grooves: { type: "array", description: "환형 홈(멈춤링·오링). 없으면 [].", items: { type: "object", required: ["segment", "offset", "width", "depth", "kind"], properties: {
          segment: int("세그먼트 인덱스"), offset: num("세그먼트 왼쪽 시작에서 홈 왼쪽 벽까지"), width: num("홈 폭"), depth: num("홈 깊이(반경) = (세그먼트지름−홈지름)/2"), kind: str("홈 종류 snap_ring|relief|o_ring|generic") } } },
        bore: { type: ["object", "null"], description: "축 중심 보어. 없으면 null.", required: ["through", "from", "segments", "chamfer_left", "chamfer_right"], properties: {
          through: { type: "boolean", description: "관통" }, from: str("막힌 보어의 입구 left|right (관통이면 빈 문자열)"),
          segments: { type: "array", items: { type: "object", required: ["length", "diameter", "tolerance"], properties: { length: num("길이"), diameter: num("지름"), tolerance: str("공차 예 H7") } } },
          chamfer_left: num("왼쪽 입구 모따기"), chamfer_right: num("오른쪽 입구 모따기") } },
        features: { type: "array", description: "키홈·센터구멍·횡구멍·평면·육각·널링. 없으면 []. 해당 없는 숫자는 0, 문자는 빈 문자열.", items: { type: "object", required: ["type", "segment", "offset", "length", "width", "depth", "angle", "end", "form", "d", "position", "diameter", "through", "count", "across_flats", "pitch"], properties: {
          type: str("keyway|center_hole|cross_hole|flat|hex|knurl|hex_socket", FEATURE_TYPES), segment: int("세그먼트 인덱스(keyway/flat/hex/knurl)"), offset: num("세그먼트 시작에서 피처 시작까지"),
          length: num("길이"), width: num("keyway 폭 b"), depth: num("keyway t1 / flat 깊이"), angle: num("둘레 각도(정면 0)"), end: str("center_hole 끝면 left|right (아니면 빈 문자열)"),
          form: str("center_hole 형식 A|B|R (아니면 빈 문자열)"), d: num("center_hole 파일럿 지름"), position: num("cross_hole 중심 x(왼쪽 끝 기준)"), diameter: num("cross_hole 지름"),
          through: { type: "boolean", description: "cross_hole 관통" }, count: int("flat 개수 1|2"), across_flats: num("hex 대변 / hex_socket 대변 S"), pitch: num("knurl 피치") } } },
      },
    },
    dims_read: { type: "array", description: "도면에서 읽은 치수 문자열 전부 (검증용 근거).", items: { type: "object", required: ["text", "kind", "value", "where"], properties: {
      text: str("도면 문자 그대로 예 '⌀30 h6', 'M20×1.5', 'C1', '45'"), kind: str("종류", ["diameter", "length", "overall", "thread", "chamfer", "radius", "groove_width", "groove_diameter", "keyway_width", "keyway_depth", "bore_diameter", "position", "other"]),
      value: num("숫자 값(⌀30 → 30). 나사는 호칭경."), where: str("어디에 있는지 짧게") } } },
    notes: { type: "array", items: { type: "string" }, description: "불확실한 판단·생략된 치수의 유추 근거·읽지 못한 것." },
    confidence: num("전체 판독 신뢰도 0~1."),
  },
};

export const EXTRACT_SYSTEM = `당신은 기계 제도를 읽는 CAD 엔지니어다. 회전체(축·부시·핀·롤러·스페이서·플랜지·슬리브) 부품의 2D 제작 도면을 보고,
그 부품을 만드는 파라메트릭 DSL(JSON)로 옮긴다. 형상은 오직 DSL 로만 표현하고, 없는 피처를 지어내지 않는다.

[DSL 규약]
- 축 = 정면도 가로 방향, x=0 은 왼쪽 끝면. segments 는 왼쪽→오른쪽 순서. 길이 합 = 전체 길이.
- 세그먼트: cyl(원통: length, diameter), taper(원추: length, d_start, d_end), thread(수나사: length, spec 'M호칭[x피치]', diameter=호칭경, pitch).
- transitions[].at: 경계 번호. 0=왼쪽 끝면 모서리, n=오른쪽 끝면 모서리(n=세그먼트 수), k=세그먼트 k-1 과 k 사이 단차.
  chamfer(size=C 값, angle 기본 45) 는 볼록 모서리(끝면 또는 단차의 큰 지름 쪽), fillet(radius) 는 단차의 오목 모서리(작은 지름 쪽),
  round(radius) 는 끝면 볼록 라운드, undercut(width, depth) 는 단차 옆 도피홈(DIN 76 나사 도피홈·DIN 509 연삭 도피홈). depth 는 반경 방향 = (세그먼트 지름 − 도피홈 지름)/2.
- grooves: 세그먼트 안의 환형 홈. offset 은 그 세그먼트 왼쪽 시작에서 홈 왼쪽 벽까지. 도면이 위치를 세그먼트 오른쪽 끝에서 쟀으면 offset = 세그먼트 길이 − 위치 − 폭 으로 환산. depth = (세그먼트 지름 − 홈 지름)/2.
- bore: 단면도(해칭)에 보이는 중심 보어. 관통이면 through:true, segments 길이 합 = 전체 길이. 막힌 보어면 from(left|right) 과 깊이.
- features: keyway(segment, offset, length, width=b, depth=t1), center_hole(end, form A, d), cross_hole(position=왼쪽 끝 기준 x, diameter, through), flat(segment, offset, length, depth, count), hex(segment, across_flats), knurl, hex_socket(end, across_flats=S, depth: 끝면의 육각 렌치 구멍).
- 볼트·나사류: 육각 머리 = 머리 세그먼트(cyl, 지름은 대각≈대변/0.866) + hex 피처(across_flats=대변 s); 접시(카운터싱크) 머리 = taper 세그먼트(d_start 머리 지름 → d_end 나사 지름); 둥근/원통 머리(캡 스크루) = cyl 세그먼트 + 끝면 hex_socket; 세트 스크루 = 전체가 thread + hex_socket; 스터드 = 양끝 thread. 나사부 길이·호칭은 그대로.

[읽는 법]
1. 부품 아래에는 치수가 두 줄이다. 윗줄(연쇄)이 세그먼트 길이, 맨 아랫줄의 가장 긴 수평 치수(보조선이 부품 양 끝면에서 내려옴)가 전체 길이(overall)다.
   전체 길이는 세그먼트 길이의 합과 같아야 한다. 연쇄에서 세그먼트 하나가 생략돼 있으면(과잉치수 회피 관례) 그 길이 = 전체 − 나머지 합. 전체 길이를 어느 한 세그먼트의 길이로 쓰지 마라.
2. ⌀ 가 붙은 수직 관통 치수 = 그 세그먼트의 지름. 뒤의 h6/k6/H7 같은 기호는 tolerance.
   외형선이 비스듬한 구간(원추)은 반드시 type "taper" 로, 양끝의 ⌀ 두 개를 d_start(왼쪽)/d_end(오른쪽)에 넣는다. cyl 로 쓰면 형상이 계단이 되어 검증에 걸린다. 힌트 초안에 taper 가 있으면 taper 다.
3. 'M20×1.5' 같은 호출문 = 그 세그먼트는 thread(호칭경 20, 피치 1.5). 피치가 없으면 보통나사(M12→1.75, M16→2, M20→2.5 …). 가는선 두 줄(골지름)이 나사 구간이다.
4. 'C1' = chamfer size 1. 'R1.5' = 단차면 fillet, 끝면이면 round. '4.5×⌀17.8 (DIN 76-A)' 지시 = 도피홈(undercut): width 4.5, depth=(도피홈이 붙은 작은 세그먼트 지름−17.8)/2. 규격명만 있고 수치가 없으면 나사 피치 P 로 width≈3P, depth≈0.75P.
   같은 단차에 큰 쪽 모따기(C)와 작은 쪽 필렛(R)이 함께 있을 수 있다 — 둘 다 at 은 그 단차 번호.
5. 홈: 폭 치수(예 1.6)와 홈 지름(⌀28.6) 또는 'DIN 471 ⌀28.6×1.6' → grooves. 위치 치수는 가까운 세그먼트 경계에서 잰 값이다.
6. 키홈: 정면도의 둥근 끝 홈 윤곽 + 길이·위치 치수. 단면도 A-A 에 폭(b) 과 'D − t1' 값이 있다 → depth = 세그먼트지름 − 그 값. kind parallel.
7. 해칭이 있는 정면도 = 전단면 = 보어가 있는 부품. 안쪽 ⌀ 치수 = 보어 지름(H7 등). 보어 입구 C0.5 는 chamfer_left/right.
8. '센터구멍 A2.5 (DIN 332)' 지시 → center_hole {end: 지시된 끝, form 'A', d 2.5}. 지시가 양쪽이면 둘 다.
9. 작은 원 + '⌀4 관통' 지시 + 위치 치수 → cross_hole. 위치는 왼쪽 끝 기준 x 로 환산(오른쪽 끝에서 쟀으면 전체 − 값).
10. 단면도에 육각 + 대변 치수 → hex. 정면도 사각 윤곽 + 단면도 현(弦) → flat(depth = 세그먼트지름 − 표기값 (한 면), 두 면이면 (지름 − 대변)/2).
11. 단위는 mm. 소수 두 자리 인치 표기(예 .19, 1.19)이고 전체가 5 미만이면 ×25.4.
12. 표제란: 품명→name_ko, 재질→material, 도번→drawing_number.
13. dims_read 에는 도면에 적힌 치수 문자열을 빠짐없이 종류·값과 함께 적는다(검증기가 DSL 과 대조한다).
14. 확신이 없는 항목은 notes 에 이유를 쓰고 confidence 를 낮춘다. 읽을 수 없는 것을 추정으로 채우지 말고 notes 에 적어라.

[적합성 — 먼저 판단]
이 데모는 선반 가공 회전체(축·부시·핀·롤러·스페이서·플랜지·슬리브·볼트/나사류) 한 부품의 정면도를 읽는다.
도면이 그것이 아니면 — 조립체(캐스터·베어링 유닛·밸브), 판금·하우징·브래킷, 여러 부품이 한 장, 등각투상 그림, 사진, 손그림 —
segments 를 빈 배열 [] 로 내고 notes 첫 항목에 "회전체 아님: <무엇으로 보이는지와 이유>" 를 쓴다. 억지로 세그먼트를 만들지 마라.
회전체이지만 DSL 에 없는 피처(볼트 원 위의 축방향 구멍, 스플라인, 편심, 내부 홈, 곡면 프로파일)가 있으면 나머지는 최대한 옮기고
notes 에 "미지원 피처: …" 를 적고 confidence 를 낮춘다. 여러 투상도가 있으면 정면도(축이 가로로 긴 뷰)를 읽고 단면도·측면도는 보조로만 쓴다.
주의: 해칭이 있는 **전단면도(부시·슬리브·스페이서·플랜지)는 회전체 정면도다** — 보어(관통·막힌·단붙이)는 완전히 지원하는 피처이므로 "단면도" 나 "보어" 를 이유로 거부하지 마라.
거부는 조립체·비회전체·다중 부품·사진·등각투상에만 쓴다.

[실루엣 힌트가 주어지면]
브라우저가 도면 외형선만으로 잰 세그먼트 비율 초안이다(문자는 못 읽음). 세그먼트 개수·순서·길이 비율·지름 비율은 이 측정과 어긋나지 않게 하고,
절대 치수는 도면의 치수 문자에서 읽는다. 힌트에 없는 피처(센터구멍·나사 피치·공차·키홈 깊이)는 도면 문자에서 읽는다.`;

function hintsText(hints, overallLength) {
  if (!hints && !overallLength) return "";
  const parts = [];
  if (overallLength) parts.push(`사용자가 준 전체 길이: ${overallLength} mm.`);
  if (hints?.draft) {
    const d = hints.draft;
    parts.push(`실루엣 측정 초안(전체 길이 ${d.L ?? "?"} 로 정규화한 세그먼트, 비율만 신뢰): ` + JSON.stringify({
      segments: (d.segments || []).map((s) => ({ type: s.type, length: s.length, diameter: s.diameter, d_start: s.d_start, d_end: s.d_end })),
      transitions: (d.transitions || []).map((t) => ({ at: t.at, type: t.type, size: t.size, radius: t.radius, width: t.width, depth: t.depth })),
      grooves: d.grooves || [], bore: d.bore || null, features: (d.features || []).map((f) => ({ type: f.type, segment: f.segment, offset: f.offset, length: f.length, width: f.width, position: f.position, diameter: f.diameter })),
    }));
  }
  if (hints?.sectioned) parts.push("도면은 전단면도(위·아래 두 재료 반쪽)로 보였다 → 보어가 있을 가능성이 높다.");
  return parts.join("\n");
}

export function buildExtractMessages({ image, hints, overallLength, fewShot = [], repair = null }) {
  const user = [];
  fewShot.forEach((ex, i) => {
    user.push({ type: "text", text: `예시 ${i + 1} 도면:` });
    user.push({ type: "image_url", image_url: { url: ex.image, detail: "high" } });
    user.push({ type: "text", text: `예시 ${i + 1} 정답 DSL:\n${JSON.stringify(ex.dsl)}` });
  });
  const h = hintsText(hints, overallLength);
  user.push({ type: "text", text: `이제 이 도면을 판독해 JSON 으로 답하라.${h ? "\n" + h : ""}` });
  user.push({ type: "image_url", image_url: { url: image, detail: "high" } });
  if (repair) {
    user.push({ type: "text", text: `앞서 낸 답:\n${JSON.stringify(repair.previous?.dsl || {})}\n\n검증기가 다음 문제를 찾았다. 도면을 다시 보고 문제를 고친 완전한 JSON 을 다시 내라(고친 이유를 notes 에 쓴다):\n${repair.problems.join("\n\n")}` });
  }
  return [{ role: "system", content: EXTRACT_SYSTEM }, { role: "user", content: user }];
}

/* prompts/fewshot/<n>.png|jpg + <n>.json → [{image: dataURL, dsl}] */
export async function loadFewShot(rootDir, max = 3) {
  const dir = join(rootDir, "prompts", "fewshot");
  const files = (await readdir(dir)).filter((f) => f.endsWith(".json")).sort().slice(0, max);
  const out = [];
  for (const f of files) {
    const base = f.replace(/\.json$/, "");
    const dsl = JSON.parse(await readFile(join(dir, f), "utf8"));
    let img = null;
    for (const [ext, mime] of [["png", "image/png"], ["jpg", "image/jpeg"], ["webp", "image/webp"]]) {
      try { const b = await readFile(join(dir, `${base}.${ext}`)); img = `data:${mime};base64,${b.toString("base64")}`; break; } catch {}
    }
    if (img) out.push({ id: base, image: img, dsl: stripForFewShot(dsl) });
  }
  return out;
}
export function stripForFewShot(dsl) {
  const d = JSON.parse(JSON.stringify(dsl));
  delete d.meta; delete d.dsl; delete d.units; delete d.id; delete d.name;
  if (d.drawing) { d.drawing_number = d.drawing.number; delete d.drawing; }
  for (const s of d.segments || []) delete s.roughness;
  for (const t of d.transitions || []) delete t.standard;
  for (const g of d.grooves || []) delete g.standard;
  for (const f of d.features || []) delete f.standard;
  return d;
}

/* 모델 출력의 "해당 없음" 값(0·빈 문자열)을 걷어내고 스키마 모양으로 — normalizeShaft 앞에 한 번 */
export function postprocessExtracted(raw) {
  const d = JSON.parse(JSON.stringify(raw || {}));
  const dropZero = (o, keys) => { for (const k of keys) if (o[k] === 0 || o[k] === "" || o[k] === null) delete o[k]; };
  for (const s of d.segments || []) {
    dropZero(s, ["diameter", "d_start", "d_end", "pitch", "spec", "tolerance", "label"]);
    if (s.type !== "taper") { delete s.d_start; delete s.d_end; }
    if (s.type !== "thread") { delete s.spec; delete s.pitch; }
  }
  for (const t of d.transitions || []) {
    dropZero(t, ["size", "angle", "radius", "width", "depth"]);
    if (t.type === "chamfer") { delete t.radius; delete t.width; delete t.depth; }
    if (t.type === "fillet" || t.type === "round") { delete t.size; delete t.angle; delete t.width; delete t.depth; }
    if (t.type === "undercut") { delete t.size; delete t.angle; delete t.radius; }
  }
  for (const g of d.grooves || []) dropZero(g, ["kind", "corner_radius"]);
  for (const f of d.features || []) {
    dropZero(f, ["segment", "offset", "length", "width", "depth", "end", "form", "d", "position", "diameter", "count", "across_flats", "pitch"]);
    if (f.type === "keyway") { delete f.end; delete f.form; delete f.d; delete f.position; delete f.diameter; delete f.through; delete f.count; delete f.across_flats; delete f.pitch; if (f.offset === undefined) f.offset = 0; if (f.segment === undefined) f.segment = 0; }
    if (f.type === "center_hole") { for (const k of ["segment", "offset", "length", "width", "depth", "angle", "position", "diameter", "through", "count", "across_flats", "pitch"]) delete f[k]; if (!f.form) f.form = "A"; }
    if (f.type === "hex_socket") { for (const k of ["segment", "offset", "length", "width", "angle", "form", "d", "position", "diameter", "through", "count", "pitch"]) delete f[k]; }
    if (f.type === "cross_hole") { for (const k of ["segment", "offset", "length", "width", "end", "form", "d", "count", "across_flats", "pitch"]) delete f[k]; if (f.through === undefined) f.through = true; if (f.through) delete f.depth; }
    if (f.type === "flat") { for (const k of ["width", "end", "form", "d", "position", "diameter", "through", "across_flats", "pitch"]) delete f[k]; if (f.offset === undefined) f.offset = 0; if (f.segment === undefined) f.segment = 0; }
    if (f.type === "hex") { for (const k of ["offset", "length", "width", "depth", "end", "form", "d", "position", "diameter", "through", "count", "pitch"]) delete f[k]; if (f.segment === undefined) f.segment = 0; }
    if (f.type === "knurl") { for (const k of ["width", "depth", "end", "form", "d", "position", "diameter", "through", "count", "across_flats"]) delete f[k]; if (f.offset === undefined) f.offset = 0; if (f.segment === undefined) f.segment = 0; }
    if (f.angle === 0) delete f.angle;
  }
  if (d.bore) {
    dropZero(d.bore, ["from", "chamfer_left", "chamfer_right"]);
    for (const b of d.bore.segments || []) dropZero(b, ["tolerance", "thread"]);
    if (d.bore.through) delete d.bore.from;
  }
  if (d.drawing_number !== undefined) { d.drawing = { number: d.drawing_number || undefined }; delete d.drawing_number; if (!d.drawing.number) delete d.drawing; }
  dropZero(d, ["name_ko", "material", "part_class"]);
  return d;
}
