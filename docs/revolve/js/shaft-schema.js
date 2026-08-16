/* VRINGON 회전체 — DSL 계약 (contract-first)
   회전체(축·부시·핀·롤러·스페이서·플랜지) 한 부품을 기술하는 유일한 표현이다.
   판독기·실행기·도면 렌더러·검증기·샘플러가 전부 이 파일의 스키마와 검사기만 본다.

   좌표 규약: 축 = X, x=0 이 왼쪽 끝면, 오른쪽으로 세그먼트가 이어진다.
   `transitions[].at` 은 경계 번호(0=왼쪽 끝, n=오른쪽 끝, k=세그먼트 k-1|k 단차).
   비축대칭 피처의 `angle` 은 정면도 관찰자 방향(+Z)=0°, 위(+Y)=90°.

   schema/shaft_dsl.schema.json 은 tools/export-schema.mjs 가 이 파일에서 뽑아 쓴다.
   순수 모듈(브라우저·Node 공용). */

export const DSL_VERSION = "vringon-shaft/1.0";

const num = (description, extra = {}) => ({ type: "number", description, ...extra });
const pos = (description, extra = {}) => ({ type: "number", exclusiveMinimum: 0, description, ...extra });
const str = (description, extra = {}) => ({ type: "string", description, ...extra });
const nullable = (schema) => ({ ...schema, type: [schema.type, "null"] });

export const SEGMENT_TYPES = ["cyl", "taper", "thread"];
export const TRANSITION_TYPES = ["chamfer", "fillet", "round", "undercut"];
export const GROOVE_KINDS = ["snap_ring", "relief", "o_ring", "generic"];
export const FEATURE_TYPES = ["keyway", "center_hole", "cross_hole", "flat", "hex", "knurl", "hex_socket"];
export const PART_CLASSES = ["shaft", "bushing", "pin", "roller", "spacer", "flange", "sleeve", "spindle", "other"];

export const SHAFT_SCHEMA = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://vringon.ai/schema/shaft_dsl.schema.json",
  title: "VRINGON 회전체 DSL",
  description: "회전체 부품 하나. 세그먼트(축 방향 외형) + 전이(모서리) + 홈 + 보어(내경) + 비축대칭 피처.",
  type: "object",
  additionalProperties: false,
  required: ["dsl", "segments"],
  properties: {
    dsl: str("DSL 버전 태그. 항상 'vringon-shaft/1.0'.", { const: DSL_VERSION }),
    id: str("슬러그 식별자 (예: stepped-shaft-01)."),
    name: str("영문 부품명."),
    name_ko: str("한글 부품명."),
    part_class: str("부품 분류.", { enum: PART_CLASSES }),
    units: str("길이 단위. mm 고정.", { enum: ["mm"] }),
    material: str("재질 (예: S45C, SUS304, A6061)."),
    drawing: {
      type: "object", additionalProperties: false,
      description: "도면 메타 (표제란).",
      properties: {
        number: str("도번."), scale: str("척도 (예: 1:1)."),
        projection: str("투상법.", { enum: ["third", "first"] }),
        notes: { type: "array", items: { type: "string" }, description: "일반 주기." },
      },
    },
    segments: {
      type: "array", minItems: 1, maxItems: 24,
      description: "왼쪽부터 오른쪽으로 이어지는 외형 세그먼트. 길이의 합이 전체 길이.",
      items: {
        type: "object", additionalProperties: false, required: ["type", "length"],
        properties: {
          type: str("cyl=원통, taper=테이퍼(원추), thread=수나사(호칭경=diameter).", { enum: SEGMENT_TYPES }),
          length: pos("축 방향 길이 (mm)."),
          diameter: pos("cyl·thread 의 지름 (mm). thread 는 호칭경(바깥지름)."),
          d_start: pos("taper 시작(왼쪽) 지름 (mm)."),
          d_end: pos("taper 끝(오른쪽) 지름 (mm)."),
          spec: str("thread 호칭 (예: M20x1.5, M12). 피치 생략 시 보통나사."),
          pitch: pos("thread 피치 (mm). spec 에서 유도되면 생략 가능."),
          hand: str("나사 방향.", { enum: ["right", "left"] }),
          tolerance: str("치수 공차 표기 (예: h6, k6, ±0.05, -0.013/-0.028)."),
          roughness: str("표면 거칠기 표기 (예: Ra 0.8)."),
          label: str("용도 라벨 (예: 베어링 자리, 기어 자리)."),
        },
      },
    },
    transitions: {
      type: "array", maxItems: 48,
      description: "경계(끝면·단차)의 모서리 처리. at=0 왼쪽 끝, at=n 오른쪽 끝, at=k 는 세그먼트 k-1|k 단차.",
      items: {
        type: "object", additionalProperties: false, required: ["at", "type"],
        properties: {
          at: { type: "integer", minimum: 0, description: "경계 번호." },
          type: str("chamfer=볼록 모서리 모따기, fillet=단차 오목 모서리 필렛, round=볼록 모서리 라운드, undercut=단차 도피홈.", { enum: TRANSITION_TYPES }),
          size: pos("chamfer 축 방향 길이 C (mm)."),
          angle: num("chamfer 각도(축 기준, 도). 기본 45.", { minimum: 5, maximum: 85 }),
          radius: pos("fillet·round 반경 R (mm)."),
          width: pos("undercut 폭 (mm)."),
          depth: pos("undercut 깊이 (mm, 반경 방향)."),
          standard: str("규격 표기 (예: DIN 76-A, DIN 509-E)."),
        },
      },
    },
    grooves: {
      type: "array", maxItems: 24,
      description: "세그먼트 안의 환형 홈 (멈춤링 홈·오링 홈 등). 회전 대칭.",
      items: {
        type: "object", additionalProperties: false, required: ["segment", "offset", "width", "depth"],
        properties: {
          segment: { type: "integer", minimum: 0, description: "세그먼트 인덱스." },
          offset: num("세그먼트 왼쪽 시작에서 홈 왼쪽 벽까지 (mm).", { minimum: 0 }),
          width: pos("홈 폭 (mm)."),
          depth: pos("홈 깊이 (mm, 반경 방향)."),
          kind: str("홈 종류.", { enum: GROOVE_KINDS }),
          corner_radius: num("홈 바닥 모서리 R (mm).", { minimum: 0 }),
          standard: str("규격 표기 (예: DIN 471 ⌀19×1.3)."),
        },
      },
    },
    bore: nullable({
      type: "object", additionalProperties: false, required: ["segments"],
      description: "축 중심 보어(내경). 없으면 null. through 면 세그먼트 길이 합 = 전체 길이.",
      properties: {
        through: { type: "boolean", description: "관통 여부." },
        from: str("막힌 보어의 시작 끝면.", { enum: ["left", "right"] }),
        segments: {
          type: "array", minItems: 1, maxItems: 12,
          items: {
            type: "object", additionalProperties: false, required: ["length", "diameter"],
            properties: {
              length: pos("보어 세그먼트 길이 (mm)."),
              diameter: pos("보어 지름 (mm)."),
              tolerance: str("공차 표기 (예: H7)."),
              thread: str("암나사 호칭 (예: M8). 있으면 이 보어 세그먼트가 탭 구멍."),
            },
          },
        },
        chamfer_left: num("왼쪽 입구 모따기 C (mm).", { minimum: 0 }),
        chamfer_right: num("오른쪽 입구 모따기 C (mm).", { minimum: 0 }),
      },
    }),
    features: {
      type: "array", maxItems: 24,
      description: "비축대칭·국부 피처. type 에 따라 쓰는 필드가 다르다.",
      items: {
        type: "object", additionalProperties: false, required: ["type"],
        properties: {
          type: str("keyway=키홈, center_hole=센터구멍, cross_hole=횡구멍, flat=평면가공(D컷), hex=육각, knurl=널링, hex_socket=끝면 육각 소켓(렌치 구멍).", { enum: FEATURE_TYPES }),
          segment: { type: "integer", minimum: 0, description: "keyway·flat·hex·knurl 이 놓이는 세그먼트." },
          offset: num("세그먼트 시작에서 피처 시작까지 (mm).", { minimum: 0 }),
          length: pos("keyway·flat·knurl 길이 (mm)."),
          width: pos("keyway 폭 b (mm)."),
          depth: pos("keyway 깊이 t1 · flat 깊이 · hex_socket 깊이 (mm)."),
          angle: num("둘레 각도 (도). 0=정면(+Z), 90=위(+Y).", { minimum: 0, maximum: 360 }),
          kind: str("keyway 형식.", { enum: ["parallel", "woodruff"] }),
          end: str("center_hole·hex_socket 이 있는 끝면.", { enum: ["left", "right"] }),
          form: str("center_hole 형식 (DIN 332).", { enum: ["A", "B", "R"] }),
          d: pos("center_hole 파일럿 지름 (mm)."),
          position: num("cross_hole 중심의 x 위치 (왼쪽 끝 기준, mm).", { minimum: 0 }),
          diameter: pos("cross_hole 지름 (mm)."),
          through: { type: "boolean", description: "cross_hole 관통 여부." },
          count: { type: "integer", minimum: 1, maximum: 2, description: "flat 개수 (2=마주보는 두 면)." },
          across_flats: pos("hex·hex_socket 대변 거리 (mm)."),
          pitch: pos("knurl 피치 (mm)."),
          pattern: str("knurl 무늬.", { enum: ["straight", "diamond"] }),
          standard: str("규격 표기 (예: DIN 6885 8×7, DIN 332-A2.5)."),
        },
      },
    },
    meta: {
      type: "object", additionalProperties: true,
      description: "출처·신뢰도 등 메타. 기하에 영향 없음.",
      properties: {
        source: str("golden | synthetic | extracted | edited"),
        confidence: num("판독 신뢰도 0~1.", { minimum: 0, maximum: 1 }),
        notes: { type: "array", items: { type: "string" } },
        generator: str("생성 도구/버전."),
        seed: { type: "integer" },
        archetype: str("샘플러 아키타입."),
        valid: { type: "boolean" },
      },
    },
  },
};

/* ------------------------------------------------------------ mini validator
   ajv 없이 위 스키마의 부분집합(type/enum/const/required/properties/items/
   additionalProperties/minimum/maximum/exclusiveMinimum/minItems/maxItems)만
   검사한다. 오류는 경로와 함께 한국어 문장으로. */
function typeOf(v) {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  if (typeof v === "number") return Number.isInteger(v) ? "integer" : "number";
  return typeof v;
}
function typeOk(schemaType, v) {
  const types = Array.isArray(schemaType) ? schemaType : [schemaType];
  const t = typeOf(v);
  return types.some((st) => st === t || (st === "number" && t === "integer"));
}
export function validateSchema(value, schema = SHAFT_SCHEMA, path = "$", errors = []) {
  if (schema.type && !typeOk(schema.type, value)) {
    errors.push(`${path}: ${Array.isArray(schema.type) ? schema.type.join("|") : schema.type} 이어야 하는데 ${typeOf(value)} 입니다.`);
    return errors;
  }
  if (value === null || value === undefined) return errors;
  if (schema.const !== undefined && value !== schema.const) errors.push(`${path}: '${schema.const}' 이어야 합니다.`);
  if (schema.enum && !schema.enum.includes(value)) errors.push(`${path}: [${schema.enum.join(", ")}] 중 하나여야 합니다 (받은 값: ${JSON.stringify(value)}).`);
  if (typeof value === "number") {
    if (schema.minimum !== undefined && value < schema.minimum) errors.push(`${path}: ${schema.minimum} 이상이어야 합니다 (${value}).`);
    if (schema.exclusiveMinimum !== undefined && value <= schema.exclusiveMinimum) errors.push(`${path}: ${schema.exclusiveMinimum} 보다 커야 합니다 (${value}).`);
    if (schema.maximum !== undefined && value > schema.maximum) errors.push(`${path}: ${schema.maximum} 이하여야 합니다 (${value}).`);
    if (!Number.isFinite(value)) errors.push(`${path}: 유한한 수여야 합니다.`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems !== undefined && value.length < schema.minItems) errors.push(`${path}: 최소 ${schema.minItems}개 필요합니다.`);
    if (schema.maxItems !== undefined && value.length > schema.maxItems) errors.push(`${path}: 최대 ${schema.maxItems}개까지입니다.`);
    if (schema.items) value.forEach((v, i) => validateSchema(v, schema.items, `${path}[${i}]`, errors));
  } else if (typeof value === "object") {
    for (const k of schema.required || []) if (value[k] === undefined) errors.push(`${path}.${k}: 필수 항목이 없습니다.`);
    for (const [k, v] of Object.entries(value)) {
      const sub = schema.properties?.[k];
      if (sub) validateSchema(v, sub, `${path}.${k}`, errors);
      else if (schema.additionalProperties === false) errors.push(`${path}.${k}: 스키마에 없는 항목입니다.`);
    }
  }
  return errors;
}

/* ------------------------------------------------------- geometric checks
   스키마가 통과해도 만들 수 없는 형상은 여기서 걸린다. 오류(errors)는 실행기가
   거부하고, 경고(warnings)는 만들되 알려준다. 판독기의 수리 루프는 이 문장을
   그대로 모델에 되돌려 준다. */
import { parseThreadSpec } from "./shaft-standards.js?v=26efc7b8";

export function segmentDiameters(seg) {
  if (seg.type === "taper") return [seg.d_start, seg.d_end];
  let d = seg.diameter;
  /* 나사는 spec 만으로도 충분하다: 호칭경이 곧 바깥지름 */
  if (!(d > 0) && seg.type === "thread") { const ps = parseThreadSpec(seg.spec); if (ps) d = ps.nominal; }
  return [d, d];
}
export function totalLength(dsl) { return (dsl.segments || []).reduce((a, s) => a + (Number(s.length) || 0), 0); }
export function maxDiameter(dsl) {
  let m = 0;
  for (const s of dsl.segments || []) for (const d of segmentDiameters(s)) if (Number.isFinite(d)) m = Math.max(m, d);
  return m;
}
/* 세그먼트 i 의 x 구간 [x0, x1] */
export function segmentSpans(dsl) {
  const out = []; let x = 0;
  for (const s of dsl.segments || []) { out.push([x, x + s.length]); x += s.length; }
  return out;
}
/* 위치 x 에서 외경 (경계에서는 오른쪽 세그먼트 값) */
export function outerDiameterAt(dsl, x) {
  const spans = segmentSpans(dsl);
  for (let i = 0; i < spans.length; i++) {
    const [a, b] = spans[i];
    if (x >= a - 1e-9 && x <= b + 1e-9) {
      const s = dsl.segments[i];
      if (s.type === "taper") return s.d_start + (s.d_end - s.d_start) * Math.min(1, Math.max(0, (x - a) / (b - a)));
      return s.diameter;
    }
  }
  return 0;
}
/* 위치 x 에서 보어 지름 (없으면 0) */
export function boreDiameterAt(dsl, x) {
  const b = dsl.bore;
  if (!b || !b.segments?.length) return 0;
  const L = totalLength(dsl);
  const fromRight = !b.through && b.from === "right";
  let start = fromRight ? L : 0;
  for (const s of b.segments) {
    const a = fromRight ? start - s.length : start, e = fromRight ? start : start + s.length;
    if (x >= a - 1e-9 && x <= e + 1e-9) return s.diameter;
    start = fromRight ? a : e;
  }
  return 0;
}

export function checkGeometry(dsl) {
  const errors = [], warnings = [];
  const segs = dsl.segments || [];
  const n = segs.length;
  const L = totalLength(dsl);
  if (!(L > 0)) errors.push("segments: 전체 길이가 0 입니다.");
  if (L > 3000) warnings.push(`전체 길이 ${L}mm 는 데모 범위(3000mm)를 넘습니다. 단위(inch?)를 확인하세요.`);
  segs.forEach((s, i) => {
    const p = `segments[${i}]`;
    if (s.type === "taper") {
      if (!(s.d_start > 0) || !(s.d_end > 0)) errors.push(`${p}: taper 는 d_start·d_end 가 필요합니다.`);
      else if (Math.abs(s.d_start - s.d_end) < 1e-6) warnings.push(`${p}: 시작·끝 지름이 같은 taper 는 cyl 로 쓰는 것이 맞습니다.`);
    } else {
      if (!(s.diameter > 0) && !(s.type === "thread" && parseThreadSpec(s.spec))) errors.push(`${p}: ${s.type} 은 diameter 가 필요합니다.`);
      if (s.d_start !== undefined || s.d_end !== undefined) warnings.push(`${p}: ${s.type} 에는 d_start/d_end 를 쓰지 않습니다(무시).`);
    }
    if (s.type === "thread") {
      const ps = parseThreadSpec(s.spec);
      if (!s.spec) errors.push(`${p}: thread 는 spec (예: M20x1.5) 이 필요합니다.`);
      else if (!ps) errors.push(`${p}: thread spec '${s.spec}' 을 해석하지 못했습니다 (M<호칭>[x<피치>] 형식).`);
      else {
        if (s.diameter && Math.abs(ps.nominal - s.diameter) > 0.01) warnings.push(`${p}: spec ${s.spec} 의 호칭경 ${ps.nominal} 과 diameter ${s.diameter} 가 다릅니다 (spec 우선).`);
        const pitch = s.pitch || ps.pitch;
        if (!pitch) errors.push(`${p}: 피치를 알 수 없습니다. spec 에 x<피치> 를 쓰거나 pitch 를 주세요.`);
        else if (s.length < 2 * pitch) warnings.push(`${p}: 나사 길이 ${s.length} 가 피치 ${pitch} 의 2배 미만입니다.`);
      }
    }
    if (s.diameter > 600 || s.d_start > 600 || s.d_end > 600) warnings.push(`${p}: 지름이 600mm 를 넘습니다. 단위를 확인하세요.`);
  });
  const rAt = (x) => outerDiameterAt(dsl, x) / 2;
  const rBoreAt = (x) => boreDiameterAt(dsl, x) / 2;
  const spans = segmentSpans(dsl);

  /* transitions */
  (dsl.transitions || []).forEach((t, i) => {
    const p = `transitions[${i}]`;
    if (!(t.at >= 0 && t.at <= n)) { errors.push(`${p}: at=${t.at} 는 0~${n} 사이여야 합니다.`); return; }
    const isEnd = t.at === 0 || t.at === n;
    const x = spans[Math.min(t.at, n - 1)]?.[t.at === n ? 1 : 0] ?? 0;
    const rL = t.at === 0 ? null : outerDiameterAt(dsl, x - 1e-6) / 2;
    const rR = t.at === n ? null : outerDiameterAt(dsl, x + 1e-6) / 2;
    const rBig = Math.max(rL ?? 0, rR ?? 0), rSmall = isEnd ? rBig : Math.min(rL, rR);
    const step = isEnd ? rBig - rBoreAt(x) : rBig - rSmall;
    if (t.type === "chamfer") {
      if (!(t.size > 0)) errors.push(`${p}: chamfer 는 size 가 필요합니다.`);
      else {
        const drop = t.size * Math.tan(((t.angle || 45) * Math.PI) / 180);
        if (!isEnd && step < 1e-6) warnings.push(`${p}: 경계 ${t.at} 에 단차가 없어 모따기가 만들어지지 않습니다.`);
        else if (drop >= step - 1e-9) errors.push(`${p}: 모따기 반경 낙차 ${drop.toFixed(2)} 가 ${isEnd ? "끝면 살두께" : "단차"} ${step.toFixed(2)} 이상입니다.`);
        const segLen = isEnd ? segs[t.at === 0 ? 0 : n - 1].length : Math.min(segs[t.at - 1].length, segs[t.at].length);
        if (t.size >= segLen) errors.push(`${p}: 모따기 길이 ${t.size} 가 인접 세그먼트 길이 ${segLen} 이상입니다.`);
      }
    } else if (t.type === "fillet") {
      if (!(t.radius > 0)) errors.push(`${p}: fillet 은 radius 가 필요합니다.`);
      else if (isEnd) warnings.push(`${p}: 끝면에는 fillet(오목) 대신 round(볼록)를 쓰세요. round 로 처리합니다.`);
      else if (step < 1e-6) warnings.push(`${p}: 경계 ${t.at} 에 단차가 없어 필렛이 만들어지지 않습니다.`);
      else {
        if (t.radius > step + 1e-9) errors.push(`${p}: 필렛 R${t.radius} 가 단차 ${step.toFixed(2)} 보다 큽니다.`);
        const smallSeg = rL < rR ? segs[t.at - 1] : segs[t.at];
        if (t.radius >= smallSeg.length) errors.push(`${p}: 필렛 R${t.radius} 가 작은쪽 세그먼트 길이 ${smallSeg.length} 이상입니다.`);
      }
    } else if (t.type === "round") {
      if (!(t.radius > 0)) errors.push(`${p}: round 는 radius 가 필요합니다.`);
      else if (t.radius >= step - 1e-9 && step > 0) errors.push(`${p}: 라운드 R${t.radius} 가 ${isEnd ? "끝면 살두께" : "단차"} ${step.toFixed(2)} 이상입니다.`);
    } else if (t.type === "undercut") {
      if (!(t.width > 0) || !(t.depth > 0)) errors.push(`${p}: undercut 은 width·depth 가 필요합니다.`);
      else if (isEnd) errors.push(`${p}: undercut 은 단차(0<at<n)에만 둘 수 있습니다.`);
      else if (step < 1e-6) warnings.push(`${p}: 경계 ${t.at} 에 단차가 없어 도피홈이 걸릴 벽이 없습니다.`);
      else {
        const smallSeg = rL < rR ? segs[t.at - 1] : segs[t.at];
        if (t.width >= smallSeg.length / 2) errors.push(`${p}: 도피홈 폭 ${t.width} 가 작은쪽 세그먼트 길이의 절반(${(smallSeg.length / 2).toFixed(1)}) 이상입니다.`);
        if (t.depth >= rSmall - rBoreAt(x) - 0.3) errors.push(`${p}: 도피홈 깊이 ${t.depth} 가 살두께를 넘습니다.`);
      }
    }
  });

  /* 같은 단차에 필렛(오목)과 모따기(볼록)가 함께 있으면 둘의 합이 단차 안에 들어야 한다 */
  for (let k = 1; k < n; k++) {
    const here = (dsl.transitions || []).filter((t) => t.at === k);
    const fil = here.find((t) => t.type === "fillet"), ch = here.find((t) => t.type === "chamfer"), uc = here.find((t) => t.type === "undercut");
    const step = Math.abs(segmentDiameters(segs[k - 1])[1] - segmentDiameters(segs[k])[0]) / 2;
    if (fil && ch && fil.radius > 0 && ch.size > 0) {
      const drop = ch.size * Math.tan(((ch.angle || 45) * Math.PI) / 180);
      if (fil.radius + drop >= step - 1e-9) errors.push(`경계 ${k}: 필렛 R${fil.radius} + 모따기 낙차 ${drop.toFixed(2)} 가 단차 ${step.toFixed(2)} 를 넘습니다.`);
    }
    if (fil && uc) warnings.push(`경계 ${k}: 도피홈과 필렛이 함께 있어 필렛은 무시됩니다.`);
  }

  /* grooves */
  (dsl.grooves || []).forEach((g, i) => {
    const p = `grooves[${i}]`;
    if (!(g.segment >= 0 && g.segment < n)) { errors.push(`${p}: segment=${g.segment} 는 0~${n - 1} 이어야 합니다.`); return; }
    const s = segs[g.segment];
    if (g.offset + g.width > s.length + 1e-9) errors.push(`${p}: 홈(offset ${g.offset} + 폭 ${g.width}) 이 세그먼트 길이 ${s.length} 를 넘습니다.`);
    const x = spans[g.segment][0] + g.offset + g.width / 2;
    const wall = rAt(x) - rBoreAt(x);
    if (g.depth >= wall - 0.3) errors.push(`${p}: 홈 깊이 ${g.depth} 가 살두께 ${wall.toFixed(2)} 를 넘습니다.`);
    if (s.type === "thread") warnings.push(`${p}: 나사부 안의 홈은 드뭅니다. 도피홈이면 transitions.undercut 을 쓰세요.`);
  });

  /* bore */
  if (dsl.bore) {
    const b = dsl.bore, sum = (b.segments || []).reduce((a, s) => a + s.length, 0);
    if (b.through) {
      if (Math.abs(sum - L) > 1e-6) errors.push(`bore: 관통 보어인데 세그먼트 길이 합 ${sum} 이 전체 길이 ${L} 와 다릅니다.`);
    } else {
      if (!b.from) errors.push("bore: 막힌 보어는 from(left|right) 이 필요합니다.");
      if (sum >= L) errors.push(`bore: 막힌 보어 깊이 ${sum} 가 전체 길이 ${L} 이상입니다 (관통이면 through:true).`);
    }
    /* 보어가 외경을 뚫지 않는지: 보어 각 세그먼트 구간의 최소 외경과 비교 */
    const fromRight = !b.through && b.from === "right";
    let start = fromRight ? L : 0;
    (b.segments || []).forEach((bs, i) => {
      const a = fromRight ? start - bs.length : start, e = fromRight ? start : start + bs.length;
      let minOuter = Infinity;
      for (let k = 0; k <= 20; k++) minOuter = Math.min(minOuter, outerDiameterAt(dsl, a + ((e - a) * k) / 20));
      if (bs.diameter >= minOuter - 0.6) errors.push(`bore.segments[${i}]: 보어 ⌀${bs.diameter} 가 그 구간 최소 외경 ⌀${minOuter.toFixed(2)} 에 대해 살두께를 남기지 않습니다.`);
      start = fromRight ? a : e;
    });
  }

  /* features */
  const ends = new Set();
  (dsl.features || []).forEach((f, i) => {
    const p = `features[${i}]`;
    const needSeg = ["keyway", "flat", "hex", "knurl"].includes(f.type);
    if (needSeg && !(f.segment >= 0 && f.segment < n)) { errors.push(`${p}: ${f.type} 의 segment=${f.segment} 는 0~${n - 1} 이어야 합니다.`); return; }
    const s = needSeg ? segs[f.segment] : null;
    const D = s ? Math.min(...segmentDiameters(s)) : 0;
    if (f.type === "keyway") {
      if (!(f.width > 0 && f.depth > 0 && f.length > 0)) errors.push(`${p}: keyway 는 width·depth·length 가 필요합니다.`);
      else {
        if ((f.offset || 0) + f.length > s.length + 1e-9) errors.push(`${p}: 키홈(offset ${f.offset || 0} + 길이 ${f.length}) 이 세그먼트 길이 ${s.length} 를 넘습니다.`);
        if (f.width >= D * 0.8) errors.push(`${p}: 키홈 폭 ${f.width} 가 축경 ${D} 에 비해 큽니다.`);
        const wall = D / 2 - boreDiameterAt(dsl, spans[f.segment][0] + (f.offset || 0) + f.length / 2) / 2;
        if (f.depth >= wall - 0.5) errors.push(`${p}: 키홈 깊이 ${f.depth} 가 살두께 ${wall.toFixed(2)} 를 넘습니다.`);
        if (s.type === "thread") warnings.push(`${p}: 나사부에 키홈은 드뭅니다.`);
      }
    } else if (f.type === "center_hole") {
      if (!["left", "right"].includes(f.end)) errors.push(`${p}: center_hole 은 end(left|right) 가 필요합니다.`);
      else {
        if (ends.has(f.end)) warnings.push(`${p}: ${f.end} 끝에 센터구멍이 중복입니다.`);
        ends.add(f.end);
        const x = f.end === "left" ? 0 : L;
        if (boreDiameterAt(dsl, x + (f.end === "left" ? 1e-6 : -1e-6)) > 0) errors.push(`${p}: ${f.end} 끝에 보어가 있어 센터구멍을 둘 수 없습니다.`);
        const D2 = outerDiameterAt(dsl, x + (f.end === "left" ? 1e-6 : -1e-6));
        if (f.d && f.d * 2.12 >= D2 * 0.6) errors.push(`${p}: 센터구멍 d${f.d} 가 끝면 지름 ⌀${D2} 에 비해 큽니다.`);
      }
    } else if (f.type === "cross_hole") {
      if (!(f.diameter > 0) || !(f.position >= 0)) errors.push(`${p}: cross_hole 은 position·diameter 가 필요합니다.`);
      else {
        const Dx = outerDiameterAt(dsl, f.position);
        if (f.position - f.diameter / 2 < -1e-9 || f.position + f.diameter / 2 > L + 1e-9) errors.push(`${p}: 횡구멍(x=${f.position}, ⌀${f.diameter}) 이 부품 길이 ${L} 밖으로 나갑니다.`);
        if (f.diameter >= Dx * 0.7) errors.push(`${p}: 횡구멍 ⌀${f.diameter} 가 그 위치 축경 ⌀${Dx.toFixed(1)} 에 비해 큽니다.`);
        if (f.through === false && !(f.depth > 0)) errors.push(`${p}: 막힌 횡구멍은 depth 가 필요합니다.`);
      }
    } else if (f.type === "flat") {
      if (!(f.depth > 0 && f.length > 0)) errors.push(`${p}: flat 은 depth·length 가 필요합니다.`);
      else {
        if ((f.offset || 0) + f.length > s.length + 1e-9) errors.push(`${p}: 평면(offset ${f.offset || 0} + 길이 ${f.length}) 이 세그먼트 길이 ${s.length} 를 넘습니다.`);
        if (f.depth >= D / 2 * 0.9) errors.push(`${p}: 평면 깊이 ${f.depth} 가 반경 ${D / 2} 에 비해 큽니다.`);
      }
    } else if (f.type === "hex") {
      if (!(f.across_flats > 0)) errors.push(`${p}: hex 는 across_flats 가 필요합니다.`);
      else {
        if (f.across_flats >= D) errors.push(`${p}: 육각 대변 ${f.across_flats} 는 세그먼트 지름 ${D} 보다 작아야 합니다.`);
        if (f.across_flats < D * 0.6) warnings.push(`${p}: 육각 대변 ${f.across_flats} 가 지름 ${D} 의 60% 미만이라 살이 얇습니다.`);
      }
    } else if (f.type === "knurl") {
      if (!(f.length > 0)) errors.push(`${p}: knurl 은 length 가 필요합니다.`);
      else if ((f.offset || 0) + f.length > s.length + 1e-9) errors.push(`${p}: 널링 구간이 세그먼트 길이 ${s.length} 를 넘습니다.`);
    } else if (f.type === "hex_socket") {
      if (!["left", "right"].includes(f.end)) errors.push(`${p}: hex_socket 은 end(left|right) 가 필요합니다.`);
      else if (!(f.across_flats > 0 && f.depth > 0)) errors.push(`${p}: hex_socket 은 across_flats·depth 가 필요합니다.`);
      else {
        const x = f.end === "left" ? 1e-6 : L - 1e-6;
        const D2 = outerDiameterAt(dsl, x);
        if (boreDiameterAt(dsl, x) > 0) errors.push(`${p}: ${f.end} 끝에 보어가 있어 육각 소켓을 둘 수 없습니다.`);
        if (ends.has(f.end)) errors.push(`${p}: ${f.end} 끝에 센터구멍과 육각 소켓이 함께 있습니다.`);
        const ac = f.across_flats / Math.cos(Math.PI / 6);
        if (ac >= D2 * 0.85) errors.push(`${p}: 육각 소켓 대각 ${ac.toFixed(1)} 이 끝면 지름 ⌀${D2} 에 비해 큽니다.`);
        if (f.depth >= L * 0.6) errors.push(`${p}: 육각 소켓 깊이 ${f.depth} 가 전체 길이의 60% 를 넘습니다.`);
      }
    }
  });
  return { ok: errors.length === 0, errors, warnings };
}

/* 스키마 + 기하 검사 한 번에 */
export function validateShaft(dsl) {
  const schemaErrors = validateSchema(dsl);
  if (schemaErrors.length) return { ok: false, errors: schemaErrors, warnings: [], stage: "schema" };
  const g = checkGeometry(dsl);
  return { ...g, stage: g.ok ? "ok" : "geometry" };
}

/* 판독 결과에서 흔한 느슨함을 고쳐 스키마에 맞춘다 (모델 출력 정규화). 파괴적이지 않다. */
export function normalizeShaft(input) {
  const dsl = JSON.parse(JSON.stringify(input || {}));
  dsl.dsl = DSL_VERSION;
  dsl.units = "mm";
  if (!Array.isArray(dsl.segments)) dsl.segments = [];
  for (const s of dsl.segments) {
    if (s.type === "cylinder") s.type = "cyl";
    if (s.type === "cone") s.type = "taper";
    if (s.type === "thread" && s.spec) {
      s.spec = String(s.spec).replace(/×/g, "x").replace(/\s+/g, "");
      const ps = parseThreadSpec(s.spec);
      if (ps) { if (!s.diameter) s.diameter = ps.nominal; if (!s.pitch && ps.pitch) s.pitch = ps.pitch; }
    }
    if (s.type === "taper" && s.diameter && !s.d_start) { s.d_start = s.diameter; s.d_end = s.diameter; }
    if (s.type !== "taper") { delete s.d_start; delete s.d_end; }
    for (const k of ["length", "diameter", "d_start", "d_end", "pitch"]) if (s[k] !== undefined && s[k] !== null) s[k] = Number(s[k]);
    for (const k of Object.keys(s)) if (s[k] === null || s[k] === "") delete s[k];
  }
  for (const key of ["transitions", "grooves", "features"]) {
    if (dsl[key] === null || dsl[key] === undefined) dsl[key] = [];
    if (!Array.isArray(dsl[key])) dsl[key] = [];
    for (const it of dsl[key]) for (const k of Object.keys(it)) if (it[k] === null || it[k] === "") delete it[k];
  }
  for (const t of dsl.transitions) {
    if (t.at !== undefined) t.at = Math.round(Number(t.at));
    if (t.type === "chamfer" && t.radius && !t.size) { t.size = t.radius; delete t.radius; }
    if (t.type === "fillet" && t.size && !t.radius) { t.radius = t.size; delete t.size; }
  }
  for (const f of dsl.features) {
    if (f.type === "center_hole" && !f.form) f.form = "A";
    if (f.type === "hex_socket") { delete f.form; delete f.d; }
    if (f.type === "cross_hole" && f.through === undefined) f.through = true;
    if (f.type === "keyway" && !f.kind) f.kind = "parallel";
    if (f.angle === undefined) delete f.angle;
  }
  if (dsl.bore === undefined || (dsl.bore && (!Array.isArray(dsl.bore.segments) || !dsl.bore.segments.length))) dsl.bore = null;
  if (dsl.bore) {
    if (dsl.bore.through === undefined) dsl.bore.through = !dsl.bore.from;
    for (const k of Object.keys(dsl.bore)) if (dsl.bore[k] === null) delete dsl.bore[k];
    if (dsl.bore.through) delete dsl.bore.from;
  }
  if (!dsl.meta) dsl.meta = {};
  return dsl;
}
