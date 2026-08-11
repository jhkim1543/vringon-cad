/* ==========================================================================
   CIR → enterprise asset record.

   The compiler already measured everything an engineer needs; this turns that
   into the record a company actually files: identity, derivative files, product
   structure, the relation graph, structured procedures, BOM and operations.

   Assembly instructions are stored as STEPS, not video — so they can drive the
   3D view (highlight the part, show the pull direction), be re-ordered, be
   translated, and be regenerated as a web guide / tablet card / AR script.
   ========================================================================== */

export const ASSET_CATEGORIES = {
  "산업 장비": ["Pump", "Compressor", "Motor", "Gearbox", "Valve"],
  "로봇·자동화": ["Robot Arm", "Gripper", "AMR", "Actuator", "Linear Stage"],
  "자동차 부품": ["Brake", "Suspension", "Powertrain", "Interior"],
  "전자제품": ["Enclosure", "Connector", "Sensor", "Display"],
  "기타": ["General"],
};

const SEMANTIC_KO = {
  base: "베이스", frame: "프레임", torso: "몸체", link: "링크", motor: "모터",
  gearbox: "기어박스", actuator: "액추에이터", transmission: "동력전달부",
  bearing: "베어링", gripper: "그리퍼", finger: "핑거", suction_cup: "석션컵",
  tool: "툴", camera: "카메라", lidar: "라이다", force_torque: "힘·토크 센서",
  imu: "IMU", shell: "쉘", panel: "패널", protective_cover: "보호 커버",
};

/* joint type → the relation vocabulary the knowledge graph speaks */
const JOINT_EDGE = {
  fixed: "fixed_to", revolute: "revolute_to",
  continuous: "continuous_to", prismatic: "prismatic_to",
};

/** shape signature for "find me a similar 3D part" — all from measured values */
export function shapeSignature(cir) {
  const links = cir.links || [];
  const joints = cir.joints || [];
  const size = links.reduce((acc, l) => {
    for (let i = 0; i < 3; i++) acc[i] = Math.max(acc[i], (l.bbox.max[i] - l.bbox.min[i]));
    return acc;
  }, [0, 0, 0]);
  const span = Math.max(...size) || 1;
  const mass = links.reduce((n, l) => n + (l.inertial?.mass || 0), 0);
  const jt = ["fixed", "revolute", "continuous", "prismatic"]
    .map((t) => joints.filter((j) => j.type === t).length / Math.max(1, joints.length));
  const coll = ["box", "cylinder", "capsule", "sphere", "compound_box"]
    .map((t) => links.filter((l) => l.collision?.type === t).length / Math.max(1, links.length));
  return [
    Math.log10(Math.max(1e-4, span)) / 2,          // scale
    size[1] / span, size[2] / span,                // proportions
    Math.min(1, links.length / 10),                // structural complexity
    Math.min(1, joints.length / 10),
    Math.log10(Math.max(1e-4, mass)) / 3,
    ...jt, ...coll,
  ].map((v) => Number(Number(v).toFixed(4)));
}

/** default maintenance procedure derived from the measured kinematics */
function seedProcedures(cir) {
  const byId = new Map(cir.links.map((l) => [l.id, l]));
  const removable = cir.joints
    .filter((j) => j.type !== "fixed")
    .map((j) => ({ j, child: byId.get(j.child) }))
    .filter((x) => x.child);
  if (!removable.length) return [];
  const steps = [];
  let seq = 1;
  for (const { j, child } of removable.slice(0, 6)) {
    const rot = j.type !== "prismatic";
    steps.push({
      sequence: seq++,
      action: "remove",
      targetPart: child.id,
      targetName: child.name,
      tool: rot ? "hex-key-6mm" : "puller",
      torque: rot ? "12 N·m" : null,
      direction: j.axis,
      instruction: rot
        ? `${child.name}를 회전축(${j.axis.map((v) => v.toFixed(2)).join(", ")}) 기준으로 풀어 분리합니다.`
        : `${child.name}를 직선축 방향으로 당겨 분리합니다.`,
      safetyNotice: seq === 2 ? "작업 전 장비 전원을 차단하십시오." : null,
      minutes: 5,
    });
  }
  return [{
    procedureId: "disassembly-v1",
    title: "기본 분해 절차 (측정된 조인트에서 자동 생성)",
    kind: "disassembly",
    generated: true,
    steps,
  }, {
    procedureId: "assembly-v1",
    title: "기본 조립 절차 (분해 역순)",
    kind: "assembly",
    generated: true,
    steps: steps.slice().reverse().map((s, i) => ({
      ...s, sequence: i + 1, action: "install",
      instruction: s.instruction.replace("분리합니다", "장착합니다").replace("풀어", "맞물려"),
    })),
  }];
}

export function buildAssetRecord(cir, meta = {}, extras = {}) {
  const links = cir.links || [];
  const joints = cir.joints || [];
  const id = (meta.assetId || meta.model || cir.name || "asset")
    .toString().toLowerCase().replace(/[^a-z0-9가-힣_-]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);

  const structure = links.map((l) => ({
    id: l.id,
    name: l.name,
    semanticType: l.semanticType || null,
    semanticKo: SEMANTIC_KO[l.semanticType] || null,
    parent: l.parentLink,
    isRoot: !!l.isRoot,
    material: l.material,
    mass: l.inertial?.mass ?? null,
    massStatus: l.inertial?.status || "ai_proposed",
    collision: l.collision?.type || null,
    tris: l.visual?.tris ?? null,
    bbox: l.bbox,
  }));

  /* relation graph: kinematics from measurement, business relations from the user */
  const relations = joints.map((j) => ({
    from: j.parent, to: j.child, type: JOINT_EDGE[j.type] || "fixed_to",
    axis: j.axis, origin: j.origin.position,
    limits: j.limits || null,               // the panel states travel in real units
    confidence: j.confidence?.type ?? null,
    note: (j.evidence || [])[0] || "",
  }));
  for (const l of structure) {
    if (l.parent) relations.push({ from: l.parent, to: l.id, type: "contains", note: "부모·자식 구조" });
  }
  if (meta.derivedFrom) relations.push({ from: id, to: meta.derivedFrom, type: "derived_from", note: "원본 파일" });
  for (const r of extras.relations || []) relations.push(r);

  const bom = structure.map((s, i) => ({
    partNo: `${(meta.model || id).toString().toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8) || "PART"}-${String(i + 1).padStart(3, "0")}`,
    name: s.name,
    qty: 1,
    material: s.material,
    mass: s.mass,
    supplier: null, price: null, stock: null,
    discontinued: false, replacement: null,
  }));

  return {
    assetId: id,
    basic: {
      name: meta.name || cir.name || id,
      model: meta.model || "",
      manufacturer: meta.manufacturer || "",
      family: meta.family || "",
      category: meta.category || "기타",
      releaseDate: meta.releaseDate || new Date().toISOString().slice(0, 10),
      status: meta.status || "draft",
      version: meta.version || "1.0",
      owner: meta.owner || "",
      access: meta.access || "org",
    },
    files: {},                                  // filled by the server after upload
    structure,
    relations,
    procedures: seedProcedures(cir),
    business: { bom },
    operations: {
      manuals: [], inspections: [], sensors: [], faults: [],
      changeLog: [{ at: new Date().toISOString(), by: meta.owner || "user", what: "자산 등록" }],
      reviews: [{
        at: new Date().toISOString(),
        readiness: cir.readiness?.total ?? null,
        note: "컴파일 직후 자동 검증 결과",
      }],
    },
    provenance: {
      pipeline: cir.diagnosis?.recommendedPipeline || null,
      sourceFile: meta.derivedFrom || null,
      compiledAt: new Date().toISOString(),
      diagnosis: cir.diagnosis || null,
    },
    readiness: extras.readiness || null,
    validation: extras.validation
      ? { errors: extras.validation.errors, warnings: extras.validation.warnings, lines: extras.validation.lines }
      : null,
    signature: shapeSignature(cir),
    cir: extras.cir || null,
  };
}
