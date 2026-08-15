# VRINGON 회전체 데모 — 도면 → 파라메트릭 3D CAD

축·부시·핀·롤러·스페이서·슬리브 같은 **회전체 부품의 2D 제작 도면**을 읽어 **파라메트릭 DSL** 로 옮기고,
그 DSL 에서 **3D CAD · 재렌더링 검증 · STEP/USD/DXF 내보내기**까지 이어지는 데모입니다.
판독만 AI(시각 LLM)가 하고, 형상·도면·검증·내보내기는 전부 결정론 코드가 실행합니다.
본체 [VRINGON CAD](../README.md) 데모의 디자인 시스템(`css/vringon.css`)과 5단계 스텝퍼 UI 를 그대로 씁니다.

| | 주소 | 비고 |
|---|---|---|
| 공개 데모 (정적, 로그인 없음) | https://jhkim1543.github.io/vringon-cad/revolve/ | 샘플의 AI 판독 결과를 재생 · 업로드/합성 도면은 브라우저 실루엣 판독 |
| 온프렘 전체 기능 (실제 AI 판독 + 해석적 STEP) | `node server.mjs 8349` → http://<서버>:8349 | 키·모델은 `../config.local.json` 의 역할명(primary/fallback)만 참조 |
| 소스 | 이 폴더 (`VRINGON_회전체 데모/`) | 정적 사본은 `../docs/revolve/` (자동 생성, 손대지 않음) |

## 5단계
1. **도면 입력** — 샘플 12종(정답 DSL 에서 렌더한 KS/ISO 관례 도면), 업로드(PNG/JPG/SVG), 또는 샘플러가 즉석에서 만든 **무작위 합성 도면**
2. **판독 · DSL** — ① 브라우저 실루엣 측정(외형선만 남겨 r(x) → RDP 세그먼트) → ② 온프렘 시각 LLM 판독(스키마 제약 + 합성 few-shot 3장 + 실루엣 힌트) → ③ 스키마·기하 검증에 걸리거나 실루엣/치수 정합이 나쁘면 오류·측정치를 넣어 **1회 자기 수리**
3. **3D CAD** — DSL → 반단면 프로파일 → 회전(lathe) 밴드 + 키홈·평면·육각·횡구멍 국부 CSG (브라우저, 수십 ms) · 단면 보기 · 세그먼트 표/JSON 편집 즉시 반영
4. **검증** — DSL 을 다시 그린 외형과 도면 실루엣의 IoU, 읽은 치수 문자 ↔ DSL 정합, 실행기 유효성 → 신뢰도·판정. 정답이 있는 도면(샘플·합성)은 정답 대비 F1 까지 표시
5. **내보내기** — STEP(해석적 B-rep: 파이썬 CadQuery 실행기 / 면분할: 브라우저) · STL · GLB · OBJ · **USD(usda, DSL 파라미터를 custom 속성으로)** · DXF/SVG(다시 그린 제작 도면) · JSON(DSL)

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
js/shaft-export.js           STEP(면분할)·STL·GLB·OBJ·USDA·DXF·SVG·JSON
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
node tools/deploy-docs.mjs                  # ../docs/revolve/ 갱신 → 커밋
cd pipeline && PYTHONIOENCODING=utf-8 .venv/Scripts/python.exe tests/test_golden.py
```
방법론·마일스톤 상태·수치·데이터 소스·다음 할 일은 [HANDOFF.md](HANDOFF.md) 에 있습니다.
