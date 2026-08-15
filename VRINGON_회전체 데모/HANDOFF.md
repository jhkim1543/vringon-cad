# HANDOFF — VRINGON 회전체: 도면 → 파라메트릭 CAD (2026-08-16)

이 문서가 정본이다. 무엇을 왜 이렇게 만들었는지, 어디까지 됐고 수치가 얼마인지, 다음 사람이 무엇부터 하면 되는지.

## 1. 한 줄 요약
"회전체 도면 → DSL → CAD" 를 **계약(스키마) → 실행기 → 합성 데이터 → 판독기 → 검증 루프 → UI** 순서로 만들었다.
판독(AI)은 모듈 경계 뒤에 있고, 나머지는 전부 결정론이라 **AI 가 틀리면 검증기가 잡고, AI 가 없어도 데모는 돈다.**
골든 12종 기준: 시각 LLM 판독(텍스트 티어 + 실루엣 힌트 + 수리 1회) **세그먼트 F1 100% · 피처 F1 96% · 치수 일치 98% · 실루엣 IoU 1.000 · 완전 일치 58%**, 실행기 유효율 100%.

## 2. 지시서 대비 방법론 분석 — 무엇을 그대로 두고 무엇을 바꿨나

받은 지시서(M0~M5)의 5원칙(계약 우선·역순 구축·골든 파일·수치 합격선·VLM 은 인터페이스 뒤)은 그대로 따랐다. 최근 기술과 본체 데모에서 얻은 교훈으로 **다섯 가지를 바꾸거나 더했다.**

| 지시서 | 여기서 한 것 | 이유 |
|---|---|---|
| VLM few-shot 이 판독의 전부 | **실루엣 결정론 판독기를 앞단에** 두고 그 측정을 VLM 힌트로 준다 (Point2CAD/CAD-Recode 류의 "측정 우선" 사고를 2D 에 적용) | 본체 데모 v13 교훈: 이미지→언어→좌표 전사 손실이 가장 크다. 실루엣 r(x) 는 픽셀에서 바로 나오고 비율은 IoU 0.997 로 정확하다. VLM 은 구조를 여기에 맞추고 문자(치수·나사·공차)만 읽으면 된다. 서버가 없어도 이 판독기로 데모가 돈다. |
| 검증 = 재렌더링 실루엣 IoU + 치수 재추출 | IoU 는 **래스터 없이 r(x) 표본으로 해석적으로**(회전체는 축대칭이라 IoU=Σmin/Σmax 가 정확), 치수 대조는 **모델이 읽었다고 보고한 문자열(dims_read)** 을 DSL 과 대조 | 빠르고(ms) 브라우저·서버·Node 어디서나 같은 코드. dims_read 는 "읽었는데 반영 안 한 값"을 드러내 수리 루프의 근거가 된다(CADCodeVerify 류의 검증-수리 사고). |
| 실행 실패 시 1회 재생성 | 수리 트리거를 셋으로: **실행기 오류 / 실루엣 IoU<0.85 / 치수 정합<0.9** — 각각의 증거를 프롬프트에 넣고, 수리본이 더 나을 때만 채택 | 실측: 12종 중 4~6종에서 발동, 신뢰도가 오를 때만 채택되어 회귀가 없다. |
| 응답 스키마 제약 | 응답 스키마의 **모든 키를 required** 로(해당 없음은 0/빈 문자열, 서버가 걷어냄) | 제약 디코딩이 선택 키를 통째로 생략하는 실측 현상(모델이 notes 에 "홈 offset 12.7 로 환산" 이라 쓰고 grooves 는 [] 를 낸다). required 로 바꾸자 피처 F1 25% → 96%. |
| CadQuery 실행기가 유일한 실행기 | 브라우저 실행기(three.js 밴드 lathe + 국부 CSG)를 **같은 프로파일 함수** 위에 하나 더 두고, 파이썬 실행기는 해석적 STEP/USDA 담당 | 데모는 즉시 반응해야 하고(수십 ms), 파라미터 편집이 3D·도면·검증에 동시에 반영돼야 한다. 두 실행기의 프로파일은 골든 테스트가 1e-6 로 묶는다. |

바꾸지 않은 것: DSL 을 유일한 표현으로 강제, 골든 파일 회귀, 합격선 수치화, 합성 데이터가 물량의 원천, USD 에 파라미터 어태치.

### 참고한 최근 흐름 (벤더명 없이)
- 도면→CAD 시퀀스 생성: Drawing2CAD(2025, CAD-VGDrawing), Text2CAD, CAD-Coder 류 — "출력은 실행 가능한 프로그램/시퀀스" 라는 점을 DSL 로 채택.
- 측정 우선 역설계: CAD-Recode(포인트→코드), Point2CAD — 좌표는 측정으로, 언어는 의미로.
- 생성-검증-수리 루프: CAD-Assistant/CADCodeVerify 류 — 실행기·렌더러 피드백을 프롬프트로 되돌림.
- 합성 도면 증강: CMU 의 치수 무작위화 합성(Data-Augmentation-Engineering-Drawing) — 여기선 표준 규격표 기반 샘플러 + 치수 생략·스캔 열화.
- 이 프로젝트의 본체(vringon-cad) 교훈: 실루엣 IoU 를 목적함수로, LLM 은 좌표를 만들지 않게, 지시만 하고 검증하지 않으면 지켜지지 않는다.

## 3. 마일스톤 상태

| M | 산출물 | 합격선(지시서) | 상태 · 실측 |
|---|---|---|---|
| **M1 DSL+실행기** | `js/shaft-schema.js` → `schema/shaft_dsl.schema.json`, `js/shaft-profile.js` ↔ `pipeline/shaft_dsl.py`(거울), `pipeline/executor.py`(CadQuery → STEP/STL/USDA) | 골든 10개 유효 B-rep, USD 열람 | ✅ 골든 **12개** 전부 유효 솔리드·STEP 왕복 통과(`pipeline/tests/test_golden.py`), USDA(metersPerUnit=0.001, custom `vringon:*` 속성) 생성. 부피: 실행기 vs 해석식 ±0.5% |
| **M2 합성 도면** | `js/shaft-sampler.js`(10 아키타입, DIN 471/6885/332/76·ISO 261), `js/shaft-drawing.js`(KS/ISO 관례: 연쇄/전체 치수·⌀·C·R·나사 호출·도피홈·홈·키홈 단면 A-A·전단면 해칭·센터구멍·표제란·과잉치수 생략), `tools/gen-dataset.mjs`(SVG/PNG/DSL/치수 라벨 bbox, 스캔 열화·치수 생략) | 5,000쌍, 라벨 자동, 육안 QC 20장 | ✅ 엔진 완성. 400시드 샘플링 유효율 100%. 40쌍 스모크 생성 확인(3.3MB). **5,000쌍은 `node tools/gen-dataset.mjs --n 5000` 한 줄**(약 15분, ~400MB) — 저장소에는 넣지 않았다. 육안 QC: 12종 골든 도면 + 아키타입별 1장씩 확인 |
| **M3 판독기** | `js/shaft-extract.js`(실루엣 결정론 / 재생 / 서버), `tools/extract-prompt.mjs`(프롬프트·응답 스키마·few-shot), `server.mjs /api/extract` | 합성 평가 100장 세그먼트 F1·치수 일치율 리포트 | ✅ 리포트 `eval/report-both-text.md`(골든 12): 시각 LLM 세그 F1 100%·치수 98%·완전일치 58%, 실루엣 단독 세그 F1 71%·IoU 0.997. **합성 100장 평가는 `--synthetic 100` 옵션으로 즉시**(비용상 12종만 돌렸다) |
| **M4 검증 루프** | `js/shaft-verify.js`(IoU·치수 정합·신뢰도·정답 지표), 서버 수리 루프, `eval/report-*.json` 의 `calibration[]` (신뢰도 vs 실제) | 신뢰도-정답 상관 확인 | ✅ 구현. 보정 데이터는 리포트에 쌓인다(12점). 곡선을 그리려면 `--synthetic 100` 이상 필요 |
| **M5 UI** | `index.html` + `js/app.js` (5단계, 세그먼트 표·JSON 편집→3D/도면/검증 즉시 재계산, 단면 보기, 도면 위 판독 외형 오버레이, USD/STEP 내려받기) | 카탈로그 실도면 5장 라이브 시연 | ⚠️ 데모·업로드 경로는 완성. **실제 카탈로그 도면(MISUMI 등) 5장은 이용약관상 사람이 수동 확보해야 하며 아직 안 했다** — 아래 6절 |
| **M0 샘플 확보** | `pipeline/m0_deepcad_filter.py`(DeepCAD/Fusion360 JSON → 동축 원기둥 적층 = 회전체 → DSL, `--selftest`) | 필터 스크립트 + 통계 | ✅ 스크립트·자체 테스트. 실데이터셋(수 GB)은 내려받지 않았다 → 6절 절차 |

## 4. 아키텍처 (데이터 흐름)
```
도면(PNG/JPG/SVG) ─┬─► 실루엣 측정(브라우저) ── r(x)·세그먼트 초안 ── 힌트 ─┐
                   │                                                      ▼
                   └─────────── 이미지 ──────────► /api/extract 시각 LLM(스키마 제약·few-shot 3) ── DSL, dims_read
                                                          ▲                       │
                                                          └── 수리 프롬프트 ◄── 검증(스키마·기하·IoU·치수 정합) ─ 신뢰도
DSL ─► shaft-profile(반단면) ─┬─► shaft-cad(three.js) ─► 뷰어 · STEP(면분할)/STL/GLB/OBJ/USDA
                              ├─► shaft-drawing ─► SVG/DXF 도면 · 검증용 r(x)
                              └─► pipeline/executor.py(CadQuery) ─► STEP(해석적)/STL/USDA   (서버 /api/step · 샘플은 미리 생성)
```
- **좌표 규약**: 축 = X, 왼쪽 끝 x=0. `transitions[].at` 은 경계 번호(0=왼쪽 끝, n=오른쪽 끝). 비축대칭 피처 `angle` 0°=+Z(정면 관찰자), 90°=+Y.
- **정적/라이브**: `index.html` 이 `/api/status` 로 감지. 정적(Pages)에서는 샘플의 `extracted.json` 재생 + 업로드/합성은 실루엣 판독. 라이브에서는 시각 LLM.
- **키·벤더**: `../config.local.json` 의 primary/fallback/… 역할명만. 코드·문서·리포트에 벤더명 없음(본체 정책 동일).
- **텔레메트리**: 라이브 판독은 `data/telemetry.jsonl` + `data/uploads/<hash>` 로 SFT 쌍이 쌓인다(gitignore).

## 5. 수치 (eval/, 2026-08-16, 골든 12종)
| 판독기 | 유효율 | 세그먼트 F1 | 피처 F1 | 전이 F1 | 홈 F1 | 치수 일치 | IoU | 완전 일치 | 평균 시간 |
|---|---|---|---|---|---|---|---|---|---|
| 실루엣(결정론, 브라우저) | 100% | 71% | 42% | 66% | 58% | 73% | 0.997 | 8% | ~0.2 s |
| 시각 LLM 텍스트 티어 + 힌트 + 수리 | 100% | 100% | 96% | 100% | 83% | 98% | 1.000 | 58% | 17.7 s |
| 시각 LLM 설계 티어(thinking) + 힌트 + 수리 | 100% | 100% | 94% | 100% | 83% | 97% | 1.000 | 67% | 39.7 s |

- 실루엣 판독기의 IoU 0.997 은 "비율은 정확, 절대치·의미(나사 피치·센터구멍·공차)는 못 읽음" 을 뜻한다. 그래서 VLM 힌트로 딱 맞다.
- 완전 일치를 깎는 잔여 오류: 키홈 위치(세그먼트 끝 기준 치수의 환산), 단일 평면 깊이(D−depth 를 두 면 대변으로 오해), 도피홈 수치. 프롬프트 규칙 6·10 을 손보거나 설계 티어를 쓰면 줄어든다.
- 재생용 `samples/<id>/extracted.json` 은 마지막으로 `--save` 로 돌린 티어의 결과다(현재: 설계 티어, 2026-08-16). 두 티어의 차이는 완전 일치 58%→67%뿐이라 라이브 기본값은 빠른 텍스트 티어, '정밀 판독' 체크박스가 설계 티어다.

## 6. 데이터 소스 (지시서 4계층) — 어디까지 했고 다음은
| 계층 | 여기서 | 다음 |
|---|---|---|
| ① 페어 데이터셋 필터 | `m0_deepcad_filter.py`: DeepCAD/Fusion360 JSON 은 압출뿐이라 "동축 원기둥 적층" 조건으로 회전체를 걸러 DSL 로 변환(자체 테스트 통과) | DeepCAD JSON(cad_json/*.json)을 받아 `--limit 5000` 으로 통계 → 부시·스페이서·단붙이 축 서브셋. Drawing2CAD(CAD-VGDrawing) 는 저장소 클론 후 도면-시퀀스 쌍에서 회전 대칭만 추려 우리 렌더러 없이도 **실도면 스타일 평가셋**으로 |
| ② 부품 카탈로그 실도면 | 미착수(약관) | 사람이 MISUMI/TraceParts/3D ContentCentral 에서 샤프트·부시·핀 PDF+STEP 50~100장을 내부 평가용으로만 확보 → PDF→PNG 로 업로드 경로에 넣으면 실도면 일반화 수치가 나온다. STEP 은 `pipeline/` 로 부피·바운딩박스 대조 |
| ③ 도면 이미지 컬렉션 | 미착수 | HuggingFace `engineering-drawings-as1100`(CC BY 4.0) 의 결함 주입 변형 → 치수 누락 강건성. 교과서 연습문제는 few-shot 후보 |
| ④ 합성 | 엔진 완성(`gen-dataset.mjs`), 40쌍 스모크 | `--n 5000 --augment 0.3 --omit 0.15` 로 학습셋 생성. 파인튜닝 SFT 는 (PNG, DSL JSON) 쌍 + `labels.json` 의 치수 bbox 로 OCR 보조 헤드까지 가능 |

## 7. 알려진 한계 · 주의
- 실루엣 판독기는 **정면도가 가로로 놓인 깨끗한 도면** 가정. 다중 투상도(정면+측면)가 나란히 있으면 가장 넓은 성분을 정면도로 잡는다. 사진·손그림은 임계값(105)에 걸릴 수 있다 → 업로드 시 "전체 길이" 입력이 축척을 정한다.
- 브라우저 실행기의 밴드 경계에는 내부 캡 면이 남는다(렌더에는 안 보이고 단면 보기에서 부채꼴로 보임). STL/GLB 는 각 밴드가 닫힌 솔리드라 프린팅엔 문제없고, 해석적 STEP 은 파이썬 실행기가 단일 솔리드로 만든다.
- 필렛·라운드는 폴리라인 근사(10분할). 파이썬 실행기에서 토러스 면이 필요하면 프로파일 태그(`fillet_arc`) 구간을 `threePointArc` 로 바꾸면 된다.
- 나사·널링은 관례대로 장식(형상 없음). 규격은 DSL·USDA 속성·STEP 이름에만.
- 응답 스키마 노드 수 105 — 1차 LLM 한도(본체 실측 250) 아래. 필드를 늘릴 때 `node -e "import('./tools/extract-prompt.mjs')…"` 로 노드 수를 세어 둘 것.
- 시각 LLM 이 없으면(정적) 업로드는 실루엣 판독만 — UI 가 그렇게 말한다. 정직성 원칙: 대역을 실제 출력이라고 쓰지 않는다.

## 8. 다음 사람이 할 일 (우선순위)
1. 카탈로그 실도면 5~10장 수동 확보 → 업로드 경로로 라이브 시연 + 실도면 수치(M5 합격선).
2. `--synthetic 100` 평가로 보정 곡선(신뢰도 vs 정확도) 그리기 → 임계값(0.85/0.6) 재조정.
3. 온프렘 GPU 서버에 배포: `git pull` 후 `pipeline/` venv 만들고 `node server.mjs 8349` (tmux, 본체와 같은 방식). nginx 로 `/revolve/` 프록시하면 본체와 한 주소.
4. 파인튜닝: `gen-dataset.mjs --n 5000` + 텔레메트리 SFT 쌍 → 소형 시각 모델. `extract(image)->DSL` 인터페이스는 그대로 두고 `server.mjs callVision` 만 갈아 끼운다.
5. DSL 확장 후보: 내부 홈(오링 보어), 테이퍼 나사, 스플라인, 다중 키홈, 편심(비회전체 경계). 스키마 → 프로파일 → 도면 → 검증 → 실행기 순으로 같은 날 다 고칠 것(하나만 고치면 골든 테스트가 잡는다).

## 9. 검증 절차 (재현)
```bash
node tools/build-samples.mjs && node tools/build-fewshot.mjs && node tools/export-schema.mjs
cd pipeline && PYTHONIOENCODING=utf-8 .venv/Scripts/python.exe tests/test_golden.py && .venv/Scripts/python.exe build_samples.py && cd ..
node server.mjs 8349 &   # 라이브 (config 필요) 
node tools/eval-extract.mjs --method both --tier text --save
node tools/deploy-docs.mjs && git add "VRINGON_회전체 데모" docs/revolve && git commit -m "회전체 데모"
```
