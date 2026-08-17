/* 회전체 부품 유형과 유형별 시뮬레이션 계획.
   같은 회전체라도 축·핀·부시·볼트는 다른 상대와 다른 운동을 한다. 유형이 정해지면
   ① 어떤 상대 부품을 기대하는지, ② 어떤 운동이 의미 있는지(자전 / 축방향 삽입 / 나사 체결 / 압입),
   ③ 시뮬 도크에 어느 버튼을 앞세울지가 정해진다. 유형은 판독기(AI)가 제안하고 사람이 고칠 수 있다.
   순수 모듈(브라우저·Node 공용). */

export const PART_TYPES = [
  { id: "shaft", ko: "축", group: "회전 전달", spins: true,
    what: "회전을 전달하는 축. 베어링에 걸리고 키·멈춤링으로 상대 부품을 잡는다.",
    expect: ["베어링 자리(h6·j6·k6)", "키홈", "멈춤링 홈", "센터구멍"],
    plan: [{ motion: "spin", ko: "자전", why: "축과 함께 도는 부품(내륜·허브·키)만 돈다" }, { motion: "explode", ko: "분해", why: "베어링·허브·멈춤링을 축방향·반경방향으로 뺀다" }],
    primary: "spin" },
  { id: "spindle", ko: "스핀들", group: "회전 전달", spins: true,
    what: "고속으로 도는 축. 베어링 자리와 공구·척 인터페이스가 있다.",
    expect: ["베어링 자리", "나사", "테이퍼"], plan: [{ motion: "spin", ko: "자전", why: "베어링 내륜만 함께 돈다" }, { motion: "explode", ko: "분해", why: "" }], primary: "spin" },
  { id: "pin", ko: "핀", group: "연결", spins: false,
    what: "두 부품을 잇는 핀. 구멍에 끼우고 분할핀·멈춤링으로 빠지지 않게 한다. 스스로 돌지 않는다.",
    expect: ["횡구멍(분할핀)", "멈춤링 홈", "모따기"],
    plan: [{ motion: "insert", ko: "끼우기", why: "요크(클레비스) 구멍에 축방향으로 넣는다" }, { motion: "explode", ko: "분해", why: "분할핀을 반경 방향으로 뽑고 핀을 뺀다" }],
    primary: "explode", companions: ["clevis"] },
  { id: "bushing", ko: "부시", group: "미끄럼 지지", spins: false,
    what: "하우징에 압입되어 안에서 도는 축을 받치는 미끄럼 베어링. 부시 자체는 돌지 않는다.",
    expect: ["외경 압입 공차(m6·n6)", "보어 H7", "플랜지"],
    plan: [{ motion: "explode", ko: "압입·분리", why: "하우징에 축방향으로 압입되고, 상대 축이 보어에 들어간다" }, { motion: "spin_inner", ko: "상대 축 회전", why: "부시는 고정, 안의 축이 돈다" }],
    primary: "explode" },
  { id: "sleeve", ko: "슬리브", group: "미끄럼 지지", spins: false,
    what: "축에 끼우는 통. 간격 유지·보호·미끄럼면.", expect: ["보어", "외경"],
    plan: [{ motion: "explode", ko: "끼우기·빼기", why: "축방향으로 끼운다" }], primary: "explode" },
  { id: "spacer", ko: "스페이서", group: "간격 유지", spins: false,
    what: "부품 사이 간격을 정하는 링. 축에 끼워 베어링·기어 사이에 둔다.", expect: ["보어", "양 끝면"],
    plan: [{ motion: "explode", ko: "끼우기", why: "축방향으로 끼운다" }], primary: "explode" },
  { id: "roller", ko: "롤러", group: "구름", spins: true,
    what: "물건을 굴리는 롤러. 양 끝 축이 베어링에 걸리고 몸통이 돈다.", expect: ["양 끝 축", "몸통"],
    plan: [{ motion: "spin", ko: "자전", why: "몸통이 돈다" }], primary: "spin" },
  { id: "flange", ko: "플랜지", group: "체결", spins: false,
    what: "볼트로 상대에 붙는 원판. 축방향으로 맞대어 조인다.", expect: ["보어", "볼트 원"],
    plan: [{ motion: "explode", ko: "맞대기·분리", why: "축방향으로 붙인다" }], primary: "explode" },
  { id: "bolt", ko: "볼트·나사", group: "체결", spins: false,
    what: "머리를 돌려 상대 암나사에 체결하는 부품. 1회전에 피치만큼 들어간다.",
    expect: ["나사부(M호칭×피치)", "육각 머리 또는 육각 소켓", "모따기 끝"],
    plan: [{ motion: "screw", ko: "체결", why: "1회전 = 피치만큼 전진, 공구가 함께 돈다" }, { motion: "explode", ko: "분리", why: "풀어서 뺀다" }],
    primary: "screw" },
  { id: "stud", ko: "스터드", group: "체결", spins: false,
    what: "양 끝에 나사가 있는 봉. 한쪽은 몸체에, 다른 쪽은 너트로.", expect: ["양 끝 나사부"],
    plan: [{ motion: "screw", ko: "체결", why: "너트가 돌며 들어간다" }, { motion: "explode", ko: "분리", why: "" }], primary: "screw" },
  { id: "other", ko: "기타 회전체", group: "", spins: true, what: "선반에서 깎는 그 밖의 회전체.", expect: [], plan: [{ motion: "spin", ko: "자전", why: "" }, { motion: "explode", ko: "분해", why: "" }], primary: "spin" },
];
export const PART_TYPE_KO = Object.fromEntries(PART_TYPES.map((t) => [t.id, t.ko]));
export const typeOf = (id) => PART_TYPES.find((t) => t.id === id) || PART_TYPES.find((t) => t.id === "other");

/* 판독된 사양에서 유형을 추정한다 (part_class 가 없거나 "other" 일 때). 나사류를 갈라내는 것이 핵심이다 */
export function inferPartType(dsl) {
  const pc = dsl.part_class;
  const segs = dsl.segments || [], feats = dsl.features || [];
  const threads = segs.filter((s) => s.type === "thread");
  const threadLen = threads.reduce((a, s) => a + s.length, 0), total = segs.reduce((a, s) => a + s.length, 0) || 1;
  const hasHead = feats.some((f) => f.type === "hex" || f.type === "hex_socket") || (segs.length >= 2 && (segs[0].diameter || 0) > 1.4 * (segs[1].diameter || segs[1].d_start || 1));
  const bothEnds = threads.length >= 2 && segs[0].type === "thread" && segs[segs.length - 1].type === "thread";
  if (bothEnds && !hasHead) return { id: "stud", why: "양 끝이 나사부" };
  if (threadLen / total > 0.45 && (hasHead || threads.length === 1)) return { id: "bolt", why: `길이의 ${Math.round((threadLen / total) * 100)}% 가 나사부${hasHead ? ", 머리 있음" : ""}` };
  if (pc && pc !== "other" && PART_TYPES.some((t) => t.id === pc)) return { id: pc, why: "판독기가 분류한 유형" };
  if (dsl.bore) return { id: total > 3 * Math.max(...segs.map((s) => s.diameter || s.d_start || 0)) ? "sleeve" : "bushing", why: "보어가 있음" };
  if (feats.some((f) => f.type === "cross_hole") && segs.length <= 3) return { id: "pin", why: "횡구멍이 있는 단순 원통" };
  if (feats.some((f) => f.type === "keyway") || segs.some((s) => s.tolerance)) return { id: "shaft", why: "키홈 또는 베어링 공차" };
  return { id: "other", why: "" };
}
