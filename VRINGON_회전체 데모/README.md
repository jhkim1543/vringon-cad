# VRINGON 회전체 데모 — 도면 → 파라메트릭 3D CAD

축·부시·핀·롤러·스페이서·슬리브 같은 **회전체 부품의 2D 제작 도면**을 읽어 **파라메트릭 DSL** 로 옮기고,
그 DSL 에서 **3D CAD · 재렌더링 검증 · STEP/USD/DXF 내보내기**까지 이어지는 데모입니다.
판독만 AI(시각 LLM)가 하고, 형상·도면·검증·내보내기는 전부 결정론 코드가 실행합니다.
본체 [VRINGON CAD](../README.md) 데모의 디자인 시스템(`css/vringon.css`)과 5단계 스텝퍼 UI 를 그대로 씁니다.

## 두 갈래
- **Part 1 (`revolve.html`)** — 단일 도면 회전체. 아래 설명이 전부 여기에 해당합니다.
- **Part 2 (`assembly.html`)** — 다시점 도면에서 뷰를 나눠 **부품 단위**로 3D 를 만듭니다(회전체 · 판 · 윤곽 압출).
  기하만으로는 뷰가 무엇인지 알 수 없으므로 사람이 유형을 정하는 반자동입니다. 진입 화면(`index.html`)에서 고릅니다.

| | 주소 | 비고 |
|---|---|---|
| 공개 데모 (정적, 로그인 없음) | https://jhkim1543.github.io/vringon-cad/revolve/ | 샘플은 미리 판독한 결과를 재생 · 올린 도면은 브라우저 외형 판독 · **보호 빌드**(한 파일로 묶고 주석·QA 훅 제거) |
| 온프렘 전체 기능 (실제 AI 판독 + 해석적 STEP) | `node server.mjs 8349` → http://<서버>:8349 | 키·모델은 `../config.local.json` 의 역할명(primary/fallback)만 참조 |
| 소스 | 이 폴더 (`VRINGON_회전체 데모/`) | 정적 사본은 `../docs/revolve/` (자동 생성, 손대지 않음) |

## 4단계 + 두 가지 상시 기능
1. **도면 입력** — 샘플 17종(정답 DSL 에서 렌더한 KS/ISO 관례 도면; 볼트·스크루 5종 포함), 업로드(PNG/JPG/SVG — [올리기 안내](guide.html)), 또는 샘플러가 즉석에서 만든 **무작위 합성 도면**
2. **판독 · DSL** — ① 브라우저 실루엣 측정(외형선만 남겨 r(x) → RDP 세그먼트) → ② 온프렘 시각 LLM 판독(스키마 제약 + 합성 few-shot 3장 + 실루엣 힌트) → ③ 스키마·기하 검증에 걸리거나 실루엣/치수 정합이 나쁘면 오류·측정치를 넣어 **1회 자기 수리**
3. **3D CAD** — DSL → 반단면 프로파일 → 회전(lathe) 밴드 + 키홈·평면·육각·횡구멍 국부 CSG (브라우저, 수십 ms) · 단면 보기 · 세그먼트 표/JSON 편집 즉시 반영
4. **검증** — DSL 을 다시 그린 외형과 도면 실루엣의 IoU, 읽은 치수 문자 ↔ DSL 정합, 실행기 유효성 → 신뢰도·판정. 정답이 있는 도면(샘플·합성)은 정답 대비 F1 까지 표시

처음 열면 **사용 순서대로 안내 툴팁**이 한 번 뜨고(위쪽 "사용법" 으로 다시 볼 수 있습니다), 화면 문구에는
알고리즘·라이브러리 이름을 쓰지 않습니다(외부 공유용).

그리고 단계가 아니라 **언제든 쓰는 두 가지**:
- **내보내기** — 3D 가 만들어지면 오른쪽 패널에 상시: STEP(해석적 B-rep: 파이썬 CadQuery 실행기 / 면분할: 브라우저) · STL · GLB · OBJ · **FBX(ASCII 7.4)** · **OpenUSD(usda + DSL 파라미터 custom 속성 · usdz · 실행기 usdc)** · PLY · DXF/SVG(다시 그린 제작 도면) · JSON(DSL)
- **조립 · 시뮬 토글** — 뷰포트 우상단 버튼. 켜면 도면의 규격 표기(멈춤링 홈·키홈·나사·공차·횡구멍·육각)에서 **상대 부품과 운동을 결정론 규칙으로** 읽어 분해/조립·자전(rpm)·나사 체결을 보여 주고(근거·신뢰도·분해 순서·조립 점검 포함), **끄면 부품만 남습니다**

## 폴더
```
index.html, js/app.js        워크스페이스 (정적/라이브 자동 감지: /api/status)
js/shaft-schema.js           ★ DSL 계약: JSON Schema + 검사기(스키마·기하) + 정규화        → schema/shaft_dsl.schema.json
js/shaft-profile.js          DSL → 반단면 프로파일(외형·내형·이벤트·해석 부피)  (pipeline/shaft_dsl.py 와 거울)
js/shaft-cad.js, csg.js      DSL → three.js 형상 (밴드 lathe + 국부 BSP CSG, 단면 클리핑)
js/shaft-drawing.js          DSL → 제작 도면 (그리기 목록 → SVG / DXF R12; 치수 라벨 자동 산출)
js/shaft-sampler.js          표준 규격(DIN 471/6885/332/76, ISO 261) 기반 시드 샘플러 (10 아키타입)
js/shaft-extract.js          판독기: 실루엣(결정론) / 재생 / 서버 호출
js/shaft-verify.js           검증기: 실루엣 IoU · 치수 정합 · 신뢰도 · 정답 지표(F1)
js/shaft-mates.js            도면 → 결합부·자전축·분해 순서 판정 (결정론, 근거·신뢰도 포함)
js/shaft-assembly.js         상대 부품 3D 생성 + 분해·조립·자전·나사 체결 시뮬레이션
js/shaft-export.js, fbx-export.js  STEP(면분할)·STL·GLB·OBJ·FBX·USDA/USDZ·PLY·DXF·SVG·JSON
js/tour.js                   첫 방문 사용법 안내 (Part 1·2 각각의 순서)
index.html                   진입 화면 (Part 1 / Part 2 고르기)
assembly.html, js/part2.js   ★ Part 2 워크스페이스
js/views.js                  뷰 분할 + 뷰별 신호(대칭·평탄·원형) + 윤곽·구멍 추적
js/part2-cad.js              뷰 → 부품 3D (회전 / 압출), 부피, 나란히 배치
deploy/, DEPLOY.md           외부 도메인 배포 한 벌 (컨테이너·자동 HTTPS·접근 코드) 와 안내
guide.html, assets/guide/    업로드 안내 (되는/안 되는 도면 삽화 + 치수 기준 그림)
js/shaft-standards.js        규격표 (재질 밀도 포함)
server.mjs                   온프렘 서버: /api/status /api/extract /api/step (의존성 없음)
tools/extract-prompt.mjs     판독 프롬프트·응답 스키마·few-shot 로더 (서버·평가 공용)
tools/goldens.mjs            골든 DSL 12종 (손저작 정답)
tools/build-samples.mjs      골든 → samples/<id>/{golden,drawing.svg/png,labels,silhouette,index}
tools/build-fewshot.mjs      합성 few-shot 3장 → prompts/fewshot/
tools/eval-extract.mjs       M3/M4 평가 리포트 (실루엣 vs 시각 LLM, 정답 대비) → eval/
tools/gen-dataset.mjs        M2 합성 데이터셋 (도면 SVG/PNG ↔ DSL ↔ 치수 라벨, 스캔 열화·치수 생략)
tools/export-schema.mjs      스키마 파일 + 파이썬 골든 프로파일 내보내기
tools/deploy-docs.mjs        ../docs/revolve/ 로 정적 배포 (버전 스탬프)
pipeline/                    파이썬 참조 구현: CadQuery 실행기(STEP/USDA), 골든 테스트, DeepCAD 필터 (README 참조)
samples/<id>/                골든·도면·라벨·AI 판독 결과(extracted.json)·해석적 STEP/USDA·실행기 요약
eval/report-*.md|json        평가 리포트 (텍스트 티어 / 설계 티어)
```

## 실행
```bash
npm start                                   # node server.mjs 8349  (config 없으면 정적 모드로 뜬다)
node tools/build-samples.mjs                # 골든을 고쳤을 때
node tools/eval-extract.mjs --method both --tier text --save     # 서버가 떠 있어야 함. --save 는 재생용 결과 저장
node tools/gen-dataset.mjs --n 5000 --out dataset --augment 0.3 --omit 0.15
node tools/deploy-docs.mjs                  # ../docs/revolve/ 보호 빌드 갱신 → 커밋 (--raw 는 디버깅용 원본 복사)
node tools/test-assembly.mjs && node tools/test-exports.mjs      # 조립·시뮬 / 내보내기 회귀
node tools/test-input-guard.mjs             # 회전체가 아닌 도면을 판독 전에 막는지 (정상 60건 오거부 0)
cd pipeline && PYTHONIOENCODING=utf-8 .venv/Scripts/python.exe tests/test_golden.py
```
방법론·마일스톤 상태·수치·데이터 소스·다음 할 일은 [HANDOFF.md](HANDOFF.md), 외부 공유·도메인 배포·코드 보호는 [DEPLOY.md](DEPLOY.md) 에 있습니다.
