# pipeline/ — 파이썬 참조 구현 (M0 · M1 · 골든 테스트)

브라우저 데모와 **같은 DSL 계약**(`../schema/shaft_dsl.schema.json`)을 읽어 진짜 B-rep 을 만드는 쪽입니다.
JS 쪽(`../js/shaft-profile.js`)과 프로파일 좌표가 1e-6 안에서 같도록 골든 테스트로 묶어 두었습니다.

| 파일 | 역할 |
|---|---|
| `shaft_dsl.py` | 스키마 로드·검증, 프로파일 빌더(JS 거울), 해석 부피, 실루엣·IoU |
| `executor.py` | **M1 실행기** — DSL → CadQuery 회전 B-rep(+키홈·평면·육각·횡구멍·육각소켓 불리언) → `model.step` · `model.stl` · `model.usda`(DSL 파라미터를 custom 속성으로) · `model.usdc`(usd-core 있을 때, pxr API) · `summary.json` |
| `build_samples.py` | 골든 12종의 STEP/USDA 를 `../samples/<id>/` 에 미리 생성 (공개 데모의 '해석적 STEP' 내려받기) |
| `m0_deepcad_filter.py` | **M0** — DeepCAD/Fusion360 재구성 JSON 에서 동축 원기둥 적층(=회전체)만 걸러 DSL 로 변환 (`--selftest` 로 형식 확인) |
| `tests/test_golden.py` | 골든 테스트: JS↔Py 프로파일 일치, 12종 유효 솔리드, STEP 왕복, 부피 ±2% |
| `tests/golden_profiles.json` | JS 가 낸 정답 좌표 (`node tools/export-schema.mjs` 가 갱신) |

## 설치 (검증된 조합: Python 3.12 + cadquery 2.8.0)
```bash
cd pipeline
uv venv --python 3.12 .venv
uv pip install --python .venv/Scripts/python.exe -r requirements.txt     # (posix: .venv/bin/python)
```
서버(`../server.mjs`)는 `pipeline/.venv/Scripts/python.exe` 또는 `pipeline/.venv/bin/python` 이 있으면 `/api/step` 을 켠다.

## 실행
```bash
.venv/Scripts/python.exe executor.py ../samples/stepped-shaft/golden.json --out ../data/tmp/x --formats step,stl,usda
.venv/Scripts/python.exe build_samples.py            # 12종 STEP/USDA → ../samples/<id>/
PYTHONIOENCODING=utf-8 .venv/Scripts/python.exe tests/test_golden.py
.venv/Scripts/python.exe m0_deepcad_filter.py --selftest
.venv/Scripts/python.exe m0_deepcad_filter.py <deepcad_json_dir> --out revolve_subset --limit 2000
```

## 실행기 규약
- 좌표: X = 축, 왼쪽 끝면 x=0. 반단면 폴리곤 (x, r) 을 XY 평면에 그려 X 축 둘레로 360° 회전.
- 필렛·라운드는 폴리라인 근사(각 10분할). 진짜 토러스 면이 필요하면 `build_solid` 에서 arc 태그 구간을 `threePointArc` 로 바꾸면 된다(태그는 이미 있다).
- 나사·널링은 관례대로 형상을 만들지 않는다(장식). 규격은 USDA custom 속성 `vringon:threads` 와 `summary.json` 에 남는다.
- 비축대칭 피처의 `angle`: 0° = +Z(정면도 관찰자 방향), 90° = +Y.
- 유효하지 않은 DSL(스키마·기하) 은 `summary.json {"ok": false, "errors": [...]}` 로 거부한다 — 이 메시지가 그대로 판독기의 수리 프롬프트가 된다.
