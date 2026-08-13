/* ==========================================================================
   Design recipe library.

   A recipe is a contract, not a prompt. It states which observations must be
   obtainable from the image before the shape can be built, which builders run
   in which order, and what has to be true of the result. If the required
   observations are not there the recipe refuses rather than inventing them —
   that refusal is the whole point.

   Recipes compose. A cosmetic jar is a revolved container plus a threaded
   closure plus a capacity check, so new products get covered by combination
   instead of by adding another special case.
   ========================================================================== */

/* Shape families. A part is classified by how it must be MADE, not by what the
   product is called. One product mixes several. */
export const SHAPE_FAMILY = [
  "REVOLVE", "EXTRUDE", "SWEEP", "LOFT", "SHELL",
  "SUBDIVISION_SURFACE", "BOOLEAN", "HEIGHTFIELD", "RECONSTRUCTED_MESH",
];

/* What a result may honestly be called. A single photo cannot reach the third. */
export const GRADE = {
  VISUAL: "visual_replica",
  EDITABLE: "editable_design_approximation",
  MANUFACTURING: "manufacturing_cad",
};

/* ---------------------------------------------------------- base recipes */
export const BASE_RECIPES = [
  {
    recipeId: "revolved_container",
    label: "회전체 용기",
    targets: "화장품 용기, 병, 컵, 캔, 노브",
    families: ["REVOLVE", "SHELL"],
    applicability: {
      useWhen: ["단일 회전축", "원형 단면", "축 대칭 실루엣"],
      rejectWhen: ["회전축이 없음", "단면이 비원형"],
    },
    requiredObservations: ["silhouette", "axis_of_revolution", "outer_revolve_profile"],
    optionalObservations: ["inner_revolve_profile", "opening_boundary"],
    requiredParameters: ["wall_thickness", "base_thickness", "overall_height", "max_diameter"],
    geometryGraph: [
      { node: "outer", builder: "REVOLVE", from: "outer_revolve_profile" },
      { node: "cavity", builder: "REVOLVE", from: "inner_revolve_profile" },
      { node: "body", builder: "SHELL", from: ["outer", "cavity"] },
    ],
    validators: ["silhouette", "volume", "wall_thickness"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "dispensing_package",
    label: "디스펜싱 패키지",
    targets: "펌프병, 스프레이, 튜브",
    families: ["REVOLVE", "SWEEP", "BOOLEAN"],
    applicability: { useWhen: ["용기 위에 작동부", "펌프 또는 노즐"], rejectWhen: ["작동부가 보이지 않음"] },
    requiredObservations: ["silhouette", "axis_of_revolution", "outer_revolve_profile"],
    optionalObservations: ["pump_axis", "nozzle_boundary"],
    requiredParameters: ["stroke", "dip_tube_length", "closure_diameter"],
    geometryGraph: [
      { node: "container", builder: "RECIPE", from: "revolved_container" },
      { node: "pump", builder: "REVOLVE", from: "pump_profile" },
      { node: "nozzle", builder: "SWEEP", from: "nozzle_path" },
    ],
    validators: ["silhouette", "interference", "volume"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "prismatic_enclosure",
    label: "각형 함체",
    targets: "가전, 전자기기, 배터리 하우징",
    families: ["EXTRUDE", "SHELL", "BOOLEAN"],
    applicability: { useWhen: ["직교 박스형", "모서리 라운드"], rejectWhen: ["유기 곡면이 지배적"] },
    requiredObservations: ["silhouette"],
    optionalObservations: ["outer_boundary", "panel_split_lines", "openings"],
    requiredParameters: ["corner_radius", "wall_thickness", "overall_width", "overall_height", "overall_depth"],
    geometryGraph: [
      { node: "outer", builder: "ROUNDED_BOX", from: "outer_boundary" },
      { node: "hollow", builder: "SHELL", from: "outer" },
      { node: "cuts", builder: "BOOLEAN", from: "openings" },
    ],
    validators: ["silhouette", "wall_thickness", "interference"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "organic_shell",
    label: "유기 곡면 셸",
    targets: "마우스, 헬멧, 케이스, 유선형 커버",
    families: ["SUBDIVISION_SURFACE", "LOFT", "SHELL"],
    applicability: { useWhen: ["연속 자유곡면", "대칭면 존재"], rejectWhen: ["평면과 직교면이 지배적"] },
    requiredObservations: ["silhouette", "symmetry_plane", "longitudinal_sections", "transverse_sections", "parting_line"],
    requiredParameters: ["overall_length", "overall_width", "overall_height", "wall_thickness"],
    geometryGraph: [
      { node: "surface", builder: "LOFT", from: ["longitudinal_sections", "transverse_sections"] },
      { node: "shell", builder: "SHELL", from: "surface" },
    ],
    validators: ["silhouette", "wall_thickness"],
    grade: GRADE.VISUAL,
  },
  {
    recipeId: "sheet_metal_surface_panel",
    label: "판금 곡면 패널",
    targets: "자동차 도어, 후드, 외장 패널",
    families: ["LOFT", "SHELL", "BOOLEAN"],
    applicability: { useWhen: ["대형 얇은 곡면 패널", "개구부와 플랜지"], rejectWhen: ["부분 크롭", "외곽선 불명확"] },
    requiredObservations: [
      "outer_boundary", "window_opening_boundary", "beltline_curve",
      "section_front", "section_center", "section_rear",
    ],
    requiredParameters: ["panel_crown_depth", "sheet_thickness", "hem_width", "overall_width_or_height"],
    geometryGraph: [
      { node: "panel_outer_surface", builder: "LOFT", from: ["outer_boundary", "section_front", "section_center", "section_rear"] },
      { node: "panel", builder: "SHELL", from: "panel_outer_surface" },
      { node: "window_cut", builder: "BOOLEAN", from: "window_opening_boundary" },
      { node: "window_frame", builder: "SWEEP", from: "window_opening_boundary" },
    ],
    sharedBoundaries: [{ curve: "window_opening_boundary", usedBy: ["panel", "window_frame", "glass"] },
      { curve: "beltline_curve", usedBy: ["panel_outer_surface", "window_frame"] }],
    validators: ["silhouette", "interference", "wall_thickness"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "mechanical_bracket",
    label: "기계 브래킷",
    targets: "브래킷, 마운트, 플레이트",
    families: ["EXTRUDE", "BOOLEAN"],
    applicability: { useWhen: ["평판 기반", "구멍과 굽힘"], rejectWhen: ["자유곡면이 지배적"] },
    requiredObservations: ["silhouette", "outer_boundary"],
    optionalObservations: ["base_plane", "hole_positions"],
    requiredParameters: ["thickness", "hole_diameter", "fillet_radius"],
    geometryGraph: [
      { node: "plate", builder: "EXTRUDE", from: "outer_boundary" },
      { node: "holes", builder: "BOOLEAN", from: "hole_positions" },
    ],
    validators: ["silhouette", "interference"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "rotational_mechanical",
    label: "회전 기계 부품",
    targets: "휠, 풀리, 롤러, 기어",
    families: ["REVOLVE", "BOOLEAN"],
    applicability: { useWhen: ["회전축 중심 반복 구조"], rejectWhen: ["회전 대칭 없음"] },
    requiredObservations: ["silhouette", "axis_of_revolution", "outer_revolve_profile"],
    optionalObservations: ["bore_boundary", "repeat_features"],
    requiredParameters: ["bore_diameter", "outer_diameter", "width", "feature_count"],
    geometryGraph: [
      { node: "body", builder: "REVOLVE", from: "outer_revolve_profile" },
      { node: "bore", builder: "BOOLEAN", from: "bore_boundary" },
      { node: "pattern", builder: "PATTERN", from: "repeat_features" },
    ],
    validators: ["silhouette", "interference"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "tubular_frame",
    label: "튜브 프레임",
    targets: "드론 프레임, 자전거, 랙, 금속 의자",
    families: ["SWEEP"],
    applicability: { useWhen: ["가는 부재의 연결 구조"], rejectWhen: ["면이 지배적"] },
    requiredObservations: ["silhouette", "centerlines"],
    optionalObservations: ["joint_points", "member_section"],
    requiredParameters: ["tube_diameter", "wall_thickness", "member_count"],
    geometryGraph: [
      { node: "members", builder: "SWEEP", from: ["centerlines", "member_section"] },
      { node: "joints", builder: "BOOLEAN", from: "joint_points" },
    ],
    validators: ["silhouette", "interference"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "pipe_duct_manifold",
    label: "배관·매니폴드",
    targets: "배관, 덕트, 매니폴드",
    families: ["SWEEP", "LOFT", "BOOLEAN"],
    applicability: { useWhen: ["중심 경로를 따르는 관"], rejectWhen: ["경로 불명확"] },
    requiredObservations: ["silhouette", "center_path", "branch_points", "diameter_changes"],
    requiredParameters: ["inner_diameter", "wall_thickness"],
    geometryGraph: [
      { node: "main", builder: "SWEEP", from: "center_path" },
      { node: "branches", builder: "SWEEP", from: "branch_points" },
    ],
    validators: ["silhouette", "wall_thickness", "interference"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "panel_furniture",
    label: "판재 가구",
    targets: "캐비닛, 테이블, 선반",
    families: ["EXTRUDE", "BOOLEAN"],
    applicability: { useWhen: ["판재 조합"], rejectWhen: ["곡면 성형이 지배적"] },
    requiredObservations: ["silhouette", "panel_boundaries", "joint_lines"],
    requiredParameters: ["panel_thickness", "overall_width", "overall_height", "overall_depth"],
    geometryGraph: [{ node: "panels", builder: "EXTRUDE", from: "panel_boundaries" }],
    validators: ["silhouette", "interference"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "footwear_sole",
    label: "신발 솔",
    targets: "미드솔, 아웃솔, 플레이트",
    families: ["LOFT", "HEIGHTFIELD"],
    applicability: { useWhen: ["발형 외곽과 두께 변화"], rejectWhen: ["외곽선 불명확"] },
    requiredObservations: ["silhouette", "outer_boundary", "height_profile", "tread_pattern"],
    requiredParameters: ["length", "width", "heel_height", "toe_height"],
    geometryGraph: [
      { node: "sole", builder: "LOFT", from: ["outer_boundary", "height_profile"] },
      { node: "tread", builder: "HEIGHTFIELD", from: "tread_pattern" },
    ],
    validators: ["silhouette"],
    grade: GRADE.VISUAL,
  },
  {
    recipeId: "jewelry_accessory",
    label: "주얼리·액세서리",
    targets: "반지, 팔찌, 시계, 버클",
    families: ["SWEEP", "REVOLVE", "BOOLEAN"],
    applicability: { useWhen: ["중심 경로 + 단면", "반복 세팅"], rejectWhen: ["경로 불명확"] },
    requiredObservations: ["silhouette", "center_path", "band_section", "stone_seats"],
    requiredParameters: ["band_width", "band_thickness", "inner_diameter"],
    geometryGraph: [
      { node: "band", builder: "SWEEP", from: ["center_path", "band_section"] },
      { node: "settings", builder: "PATTERN", from: "stone_seats" },
    ],
    validators: ["silhouette", "interference"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "lighting_fixture",
    label: "조명 기구",
    targets: "램프, 조명 커버",
    families: ["REVOLVE", "SHELL"],
    applicability: { useWhen: ["확산 커버와 광원"], rejectWhen: ["구조 불명확"] },
    requiredObservations: ["silhouette", "axis_of_revolution", "outer_revolve_profile", "opening_boundary"],
    requiredParameters: ["wall_thickness", "overall_height", "max_diameter"],
    geometryGraph: [
      { node: "cover", builder: "REVOLVE", from: "outer_revolve_profile" },
      { node: "hollow", builder: "SHELL", from: "cover" },
    ],
    validators: ["silhouette", "wall_thickness"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "drone_robot_assembly",
    label: "드론·로봇 조립체",
    targets: "드론, 로봇, 이동 플랫폼",
    families: ["EXTRUDE", "SWEEP", "BOOLEAN"],
    applicability: { useWhen: ["모듈이 프레임에 부착"], rejectWhen: ["단일 덩어리"] },
    requiredObservations: ["silhouette", "frame_centerlines", "module_anchors", "motor_axes"],
    requiredParameters: ["frame_thickness", "motor_mount_diameter", "arm_count"],
    geometryGraph: [
      { node: "frame", builder: "EXTRUDE", from: "frame_centerlines" },
      { node: "mounts", builder: "PATTERN", from: "motor_axes" },
    ],
    validators: ["silhouette", "interference"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "architectural_fixture",
    label: "건축 설비",
    targets: "창호, 문, 수전, 위생도기",
    families: ["SWEEP", "EXTRUDE", "REVOLVE"],
    applicability: { useWhen: ["프로파일 압출 + 하드웨어"], rejectWhen: ["프로파일 불명확"] },
    requiredObservations: ["silhouette", "profile_section", "opening_boundary", "hardware_anchors"],
    requiredParameters: ["frame_depth", "profile_width"],
    geometryGraph: [{ node: "frame", builder: "SWEEP", from: ["profile_section", "opening_boundary"] }],
    validators: ["silhouette", "interference"],
    grade: GRADE.EDITABLE,
  },
  {
    recipeId: "freeform_visual_replica",
    label: "자유형 시각 복제",
    targets: "미분류 조형물, 복잡한 자유형",
    families: ["RECONSTRUCTED_MESH", "SUBDIVISION_SURFACE"],
    /* The honest fallback. Never a silent default: choosing it says the shape
       could not be described by any contract, and the grade says so too. */
    applicability: { useWhen: ["어떤 레시피의 필수 관측도 확보 불가"], rejectWhen: [] },
    requiredObservations: ["silhouette"],
    requiredParameters: ["overall_bounding_size"],
    geometryGraph: [{ node: "mesh", builder: "RECONSTRUCTED_MESH", from: "silhouette" }],
    validators: ["silhouette"],
    grade: GRADE.VISUAL,
  },
];

/* -------------------------------------------------------- feature recipes */
export const FEATURE_RECIPES = [
  {
    recipeId: "threaded_closure", label: "나사식 뚜껑",
    requiredObservations: ["neck_profile", "cap_inner_profile"],
    requiredParameters: ["thread_pitch", "engagement_depth", "closure_clearance"],
    validators: ["interference"],
  },
  {
    recipeId: "capacity_check", label: "용량 검증",
    requiredObservations: ["inner_revolve_profile"],
    requiredParameters: ["fill_height", "rated_volume"],
    validators: ["volume"],
  },
  {
    recipeId: "label_zone", label: "라벨 영역",
    requiredObservations: ["label_boundary"],
    requiredParameters: ["label_height", "label_wrap_angle"],
    validators: [],
  },
  {
    recipeId: "projected_groove", label: "캐릭터 라인",
    requiredObservations: ["path_curve"],
    requiredParameters: ["groove_depth", "falloff_width"],
    validators: ["silhouette"],
  },
  {
    recipeId: "handle_recess", label: "핸들 리세스",
    requiredObservations: ["capsule_boundary"],
    requiredParameters: ["depth", "edge_radius"],
    validators: ["interference"],
  },
  {
    recipeId: "perforation_pattern", label: "타공 패턴",
    requiredObservations: ["pattern_region"],
    requiredParameters: ["pitch", "hole_diameter", "count"],
    validators: ["interference"],
  },
  {
    recipeId: "bore_keyway", label: "보어·키홈",
    requiredObservations: ["bore_boundary"],
    requiredParameters: ["bore_diameter", "keyway_width", "keyway_depth"],
    validators: ["interference"],
  },
];

/* ------------------------------------------------------- assembly recipes */
export const ASSEMBLY_RECIPES = [
  { recipeId: "screw_fastened_assembly", label: "나사 체결", requiredParameters: ["engagement_depth", "clearance"], motion: "FIXED" },
  { recipeId: "snap_fit_assembly", label: "스냅 결합", requiredParameters: ["undercut", "clearance"], motion: "FIXED" },
  { recipeId: "hinged_assembly", label: "힌지 조립", requiredObservations: ["hinge_axis"], requiredParameters: ["range_deg"], motion: "ROTATE" },
  { recipeId: "sliding_assembly", label: "슬라이드 조립", requiredObservations: ["slide_axis"], requiredParameters: ["travel"], motion: "TRANSLATE" },
  { recipeId: "press_fit_assembly", label: "압입", requiredParameters: ["interference_fit"], motion: "FIXED" },
];

export const ALL_RECIPES = { base: BASE_RECIPES, features: FEATURE_RECIPES, assemblies: ASSEMBLY_RECIPES };

/** compact contract text for the model that has to fill it in */
export function recipeContract(r) {
  const L = [];
  L.push(`recipe_id: ${r.recipeId}  (${r.label} — ${r.targets || ""})`);
  L.push(`형상 계열: ${r.families.join(", ")}`);
  L.push(`적용 조건: ${r.applicability.useWhen.join(" / ")}`);
  if (r.applicability.rejectWhen?.length) L.push(`거부 조건: ${r.applicability.rejectWhen.join(" / ")}`);
  L.push(`필수 관측: ${r.requiredObservations.join(", ")}`);
  L.push(`필수 파라미터: ${r.requiredParameters.join(", ")}`);
  L.push(`빌더 그래프: ${r.geometryGraph.map((g) => `${g.node}=${g.builder}(${[].concat(g.from).join("+")})`).join(" → ")}`);
  if (r.sharedBoundaries?.length) {
    L.push(`공유 경계: ${r.sharedBoundaries.map((s) => `${s.curve} → ${s.usedBy.join(",")}`).join(" / ")}`);
  }
  L.push(`검증: ${r.validators.join(", ")} · 산출 등급: ${r.grade}`);
  return L.join("\n");
}

export function findRecipe(id) {
  return BASE_RECIPES.find((r) => r.recipeId === id)
    || FEATURE_RECIPES.find((r) => r.recipeId === id)
    || ASSEMBLY_RECIPES.find((r) => r.recipeId === id) || null;
}

/**
 * Whether a recipe can actually run on what was observed. Missing required
 * observations is a refusal, not a warning: building anyway is how a door panel
 * becomes a generic box.
 */
export function recipeReadiness(recipe, observations = {}, parameters = {}) {
  const have = (k) => {
    const v = observations[k] ?? parameters[k];
    if (v == null) return false;
    if (Array.isArray(v)) return v.length > 0;
    if (typeof v === "object") return Object.keys(v).length > 0;
    return true;
  };
  const missingObs = recipe.requiredObservations.filter((k) => !have(k));
  const missingParams = (recipe.requiredParameters || []).filter((k) => !have(k));
  const total = recipe.requiredObservations.length + (recipe.requiredParameters || []).length;
  const got = total - missingObs.length - missingParams.length;
  return {
    recipeId: recipe.recipeId,
    ready: missingObs.length === 0,
    coverage: total ? Number((got / total).toFixed(2)) : 0,
    missingObservations: missingObs,
    missingParameters: missingParams,
    grade: missingParams.length ? GRADE.VISUAL : recipe.grade,
  };
}

/** rank candidates by what the observations actually support */
export function rankRecipes(observations, parameters, hints = []) {
  const scored = BASE_RECIPES.map((r) => {
    const rd = recipeReadiness(r, observations, parameters);
    const hinted = hints.includes(r.recipeId) ? 0.15 : 0;
    return { recipe: r, ...rd, score: rd.coverage + hinted + (rd.ready ? 0.25 : 0) };
  }).sort((a, b) => b.score - a.score);
  return scored;
}
