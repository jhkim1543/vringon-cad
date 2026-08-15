"""골든 테스트 (모든 마일스톤의 머지 조건)
 1. 파이썬 프로파일 빌더 == JS 프로파일 빌더 (좌표 1e-6, 부피 1e-3 상대)
 2. 골든 12종 전부 CadQuery 유효 솔리드 (isValid, 솔리드 1개)
 3. STEP 내보내기 → 다시 읽기 → 솔리드 1개·부피 일치
 4. 실행기 부피 ≈ 해석 부피 (±2%: 키홈 둥근 끝·필렛 폴리라인 근사 허용)
실행:  .venv/Scripts/python.exe -m pytest tests -q   또는   .venv/Scripts/python.exe tests/test_golden.py
"""
import json, sys, math, tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
import shaft_dsl as S  # noqa: E402

ROOT = HERE.parent.parent
GOLDEN_IDS = json.loads((HERE / "golden_profiles.json").read_text(encoding="utf-8"))


def load_golden(gid):
    return json.loads((ROOT / "samples" / gid / "golden.json").read_text(encoding="utf-8"))


def test_profiles_match_js():
    for gid, ref in GOLDEN_IDS.items():
        dsl = load_golden(gid)
        top, _ = S.build_top_line(dsl, 10)
        inner = S.build_inner_line(dsl, 10)
        assert len(top) == len(ref["top"]), f"{gid}: top 점 수 {len(top)} != {len(ref['top'])}"
        for (x, r, tag), (rx, rr, rtag) in zip(top, ref["top"]):
            assert abs(x - rx) < 1e-6 and abs(r - rr) < 1e-6, f"{gid}: top ({x},{r}) != ({rx},{rr})"
            assert tag == rtag, f"{gid}: tag {tag} != {rtag}"
        assert len(inner) == len(ref["inner"]), f"{gid}: inner 점 수"
        for (x, r, tag), (rx, rr, rtag) in zip(inner, ref["inner"]):
            assert abs(x - rx) < 1e-6 and abs(r - rr) < 1e-6, f"{gid}: inner ({x},{r}) != ({rx},{rr})"
        v = S.volume_mm3(dsl)
        assert abs(v - ref["volume_mm3"]) <= max(1e-3, ref["volume_mm3"] * 1e-3), f"{gid}: 부피 {v} != {ref['volume_mm3']}"
        L, sil = S.silhouette(dsl, 100)
        for a, b in zip(sil, ref["silhouette100"]):
            assert abs(a - b) < 1e-3, f"{gid}: 실루엣 표본 불일치"


def test_validate_goldens():
    for gid in GOLDEN_IDS:
        ok, errors, _ = S.validate(load_golden(gid))
        assert ok, f"{gid}: {errors}"


def test_executor_builds_valid_solids():
    import cadquery as cq
    from executor import build_solid, run
    for gid in GOLDEN_IDS:
        dsl = load_golden(gid)
        body, notes = build_solid(dsl)
        shape = body.val()
        assert shape.isValid(), f"{gid}: invalid shape"
        assert len(body.solids().vals()) == 1, f"{gid}: solids != 1"
        assert not any("실패" in n for n in notes), f"{gid}: {notes}"
        va = S.volume_mm3(dsl)
        assert abs(shape.Volume() - va) <= va * 0.02 + 5, f"{gid}: 부피 {shape.Volume():.1f} vs 해석 {va:.1f}"
        with tempfile.TemporaryDirectory() as td:
            summ = run(dsl, td, ("step",))
            assert summ["ok"] and summ["valid"], f"{gid}: {summ}"
            re = cq.importers.importStep(str(Path(td) / "model.step"))
            assert len(re.solids().vals()) == 1, f"{gid}: STEP 재읽기 솔리드 수"
            assert abs(re.val().Volume() - shape.Volume()) < shape.Volume() * 1e-3, f"{gid}: STEP 왕복 부피"


if __name__ == "__main__":
    for name, fn in list(globals().items()):
        if name.startswith("test_"):
            fn(); print("PASS", name)
    print("all golden tests passed")
