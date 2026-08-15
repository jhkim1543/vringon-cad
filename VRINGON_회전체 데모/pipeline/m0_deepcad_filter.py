"""M0 — 공개 CAD 데이터셋에서 회전체 서브셋을 걸러 DSL 로 옮기기 (DeepCAD / Fusion 360 Gallery 재구성 JSON 형식)

DeepCAD 의 명령 집합은 스케치+압출(extrude)뿐이라 'revolve 1회' 모델은 없다. 대신
  "모든 스케치 프로파일이 동심원(들)이고, 모든 압출이 같은 축 위에 있으며, 연산이 NewBody/Join/Cut 인 모델"
= 원판·부시·스페이서·단붙이 축(원기둥 압출의 적층) = 회전체다. 이 스크립트가 그 조건을 검사하고,
동축 원기둥 적층을 우리 DSL(segments 는 축 방향 순서, 안쪽 원은 bore) 로 변환한다.

    python m0_deepcad_filter.py <deepcad_json_dir> --out revolve_subset [--limit N]
    python m0_deepcad_filter.py --selftest      # 내장 예제로 동작 확인 (데이터셋 없이)

출력: <out>/<model_id>.dsl.json + <out>/report.json (전체/통과/실패 사유 통계)
주의: 파일 형식 필드명은 Fusion 360 Gallery reconstruction JSON 을 따른다(entities / sequence / profiles / loops /
profile_curves(Circle3D) / ExtrudeFeature.extent_one.distance.value / operation). 형식이 다르면 report 에 사유가 남는다.
"""
from __future__ import annotations
import argparse, json, math, sys
from pathlib import Path


def _vec(o):
    return (float(o.get("x", 0)), float(o.get("y", 0)), float(o.get("z", 0)))


def _dot(a, b): return sum(x * y for x, y in zip(a, b))
def _sub(a, b): return tuple(x - y for x, y in zip(a, b))
def _norm(a):
    n = math.sqrt(_dot(a, a)); return tuple(x / n for x in a) if n > 1e-12 else a


def analyze(model: dict):
    """→ dict(ok, reason, dsl?) — 회전체면 DSL 로 변환"""
    ents = model.get("entities", {})
    seq = model.get("sequence", [])
    sketches = {k: v for k, v in ents.items() if v.get("type") == "Sketch"}
    extrudes = [ents[s["entity"]] for s in seq if s.get("type") == "ExtrudeFeature" and s.get("entity") in ents]
    if not extrudes:
        return {"ok": False, "reason": "no_extrude"}
    axis = None; origin = None
    stack = []  # (start_along_axis, end_along_axis, outer_r, inner_r|None, op)
    for ex in extrudes:
        profs = ex.get("profiles", [])
        if not profs:
            return {"ok": False, "reason": "extrude_without_profile"}
        for pr in profs:
            sk = sketches.get(pr.get("sketch"))
            if not sk:
                return {"ok": False, "reason": "missing_sketch"}
            prof = (sk.get("profiles") or {}).get(pr.get("profile"))
            if not prof:
                return {"ok": False, "reason": "missing_profile"}
            tr = sk.get("transform", {})
            n = _norm(_vec(tr.get("z_axis", {"x": 0, "y": 0, "z": 1})))
            o = _vec(tr.get("origin", {}))
            radii = []; centers = []
            for loop in prof.get("loops", []):
                curves = loop.get("profile_curves", [])
                if len(curves) != 1 or curves[0].get("type") != "Circle3D":
                    return {"ok": False, "reason": "non_circle_profile"}
                radii.append((float(curves[0]["radius"]), bool(loop.get("is_outer", True))))
                centers.append(_vec(curves[0].get("center_point", {})))
            if not radii:
                return {"ok": False, "reason": "empty_profile"}
            # 동축 검사: 모든 원 중심이 같은 축선 위
            c0 = centers[0]
            for c in centers[1:]:
                d = _sub(c, c0)
                if math.sqrt(_dot(d, d) - _dot(d, n) ** 2) > 1e-4:
                    return {"ok": False, "reason": "non_concentric"}
            if axis is None:
                axis, origin = n, c0
            else:
                if abs(abs(_dot(axis, n)) - 1) > 1e-4:
                    return {"ok": False, "reason": "axis_mismatch"}
                d = _sub(c0, origin)
                if math.sqrt(max(0.0, _dot(d, d) - _dot(d, axis) ** 2)) > 1e-4:
                    return {"ok": False, "reason": "off_axis"}
            outer = max(r for r, is_outer in radii if is_outer) if any(io for _, io in radii) else max(r for r, _ in radii)
            inners = [r for r, is_outer in radii if not is_outer]
            inner = max(inners) if inners else None
            dist = float(((ex.get("extent_one") or {}).get("distance") or {}).get("value", 0))
            ext_type = ex.get("extent_type", "OneSideFeatureExtentType")
            two = float(((ex.get("extent_two") or {}).get("distance") or {}).get("value", 0)) if ext_type == "TwoSidesFeatureExtentType" else 0.0
            s0 = _dot(_sub(c0, origin), axis)
            if ext_type == "SymmetricFeatureExtentType":
                a, b = s0 - dist / 2, s0 + dist / 2
            elif ext_type == "TwoSidesFeatureExtentType":
                a, b = s0 - two, s0 + dist
            else:
                a, b = (s0, s0 + dist) if dist >= 0 else (s0 + dist, s0)
            op = ex.get("operation", "NewBodyFeatureOperation")
            if op not in ("NewBodyFeatureOperation", "JoinFeatureOperation", "CutFeatureOperation"):
                return {"ok": False, "reason": f"op_{op}"}
            stack.append((a, b, outer, inner, op))
    if not stack:
        return {"ok": False, "reason": "empty"}
    # 축 방향 구간 분할 → 각 구간의 외경/내경 (Join 은 max, Cut 은 보어)
    cuts = sorted({round(v, 6) for a, b, *_ in stack for v in (a, b)})
    segs = []
    for x0, x1 in zip(cuts, cuts[1:]):
        if x1 - x0 < 1e-6:
            continue
        outer_r = 0.0; bore_r = 0.0
        for a, b, ro, ri, op in stack:
            if a <= x0 + 1e-9 and b >= x1 - 1e-9:
                if op == "CutFeatureOperation":
                    bore_r = max(bore_r, ro)
                else:
                    outer_r = max(outer_r, ro)
                    if ri:
                        bore_r = max(bore_r, ri) if bore_r == 0 else min(bore_r, ri) if False else max(bore_r, ri)
        if outer_r <= 0:
            continue
        segs.append({"length": round(x1 - x0, 4), "diameter": round(2 * outer_r, 4), "bore": round(2 * bore_r, 4) if bore_r > 0 else 0})
    if not segs:
        return {"ok": False, "reason": "no_solid_span"}
    # 같은 지름 연속 병합
    merged = []
    for s in segs:
        if merged and abs(merged[-1]["diameter"] - s["diameter"]) < 1e-6 and abs(merged[-1]["bore"] - s["bore"]) < 1e-6:
            merged[-1]["length"] = round(merged[-1]["length"] + s["length"], 4)
        else:
            merged.append(dict(s))
    dsl = {"dsl": "vringon-shaft/1.0", "id": model.get("id") or model.get("name") or "deepcad", "units": "mm", "part_class": "shaft" if not any(s["bore"] for s in merged) else "bushing",
           "segments": [{"type": "cyl", "length": s["length"], "diameter": s["diameter"]} for s in merged],
           "transitions": [], "grooves": [], "features": [], "meta": {"source": "deepcad-filter", "notes": ["원기둥 압출 적층에서 변환. 모따기·필렛·나사 정보는 원본에 없음."]}}
    bores = [s for s in merged if s["bore"]]
    if bores:
        L = sum(s["length"] for s in merged)
        if len(bores) == len(merged):
            dsl["bore"] = {"through": True, "segments": [{"length": s["length"], "diameter": s["bore"]} for s in merged]}
        else:
            # 부분 보어: 연속 구간이 한쪽 끝에 붙어 있으면 막힌 보어
            idx = [i for i, s in enumerate(merged) if s["bore"]]
            if idx == list(range(0, len(idx))):
                dsl["bore"] = {"through": False, "from": "left", "segments": [{"length": merged[i]["length"], "diameter": merged[i]["bore"]} for i in idx]}
            elif idx == list(range(len(merged) - len(idx), len(merged))):
                dsl["bore"] = {"through": False, "from": "right", "segments": [{"length": merged[i]["length"], "diameter": merged[i]["bore"]} for i in reversed(idx)]}
            else:
                return {"ok": False, "reason": "internal_bore_not_representable"}
    else:
        dsl["bore"] = None
    return {"ok": True, "dsl": dsl, "n_extrudes": len(extrudes)}


SELFTEST = {
    "id": "selftest-stepped-bushing",
    "entities": {
        "s1": {"type": "Sketch", "transform": {"origin": {"x": 0, "y": 0, "z": 0}, "z_axis": {"x": 0, "y": 0, "z": 1}},
               "profiles": {"p1": {"loops": [{"is_outer": True, "profile_curves": [{"type": "Circle3D", "center_point": {"x": 0, "y": 0, "z": 0}, "radius": 15}]},
                                              {"is_outer": False, "profile_curves": [{"type": "Circle3D", "center_point": {"x": 0, "y": 0, "z": 0}, "radius": 10}]}]}}},
        "e1": {"type": "ExtrudeFeature", "profiles": [{"sketch": "s1", "profile": "p1"}], "extent_one": {"distance": {"value": 25}}, "extent_type": "OneSideFeatureExtentType", "operation": "NewBodyFeatureOperation"},
        "s2": {"type": "Sketch", "transform": {"origin": {"x": 0, "y": 0, "z": 25}, "z_axis": {"x": 0, "y": 0, "z": 1}},
               "profiles": {"p2": {"loops": [{"is_outer": True, "profile_curves": [{"type": "Circle3D", "center_point": {"x": 0, "y": 0, "z": 25}, "radius": 20}]},
                                              {"is_outer": False, "profile_curves": [{"type": "Circle3D", "center_point": {"x": 0, "y": 0, "z": 25}, "radius": 10}]}]}}},
        "e2": {"type": "ExtrudeFeature", "profiles": [{"sketch": "s2", "profile": "p2"}], "extent_one": {"distance": {"value": 5}}, "extent_type": "OneSideFeatureExtentType", "operation": "JoinFeatureOperation"},
    },
    "sequence": [{"index": 0, "type": "Sketch", "entity": "s1"}, {"index": 1, "type": "ExtrudeFeature", "entity": "e1"}, {"index": 2, "type": "Sketch", "entity": "s2"}, {"index": 3, "type": "ExtrudeFeature", "entity": "e2"}],
}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", nargs="?")
    ap.add_argument("--out", default="revolve_subset")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--selftest", action="store_true")
    a = ap.parse_args()
    if a.selftest:
        r = analyze(SELFTEST)
        print(json.dumps(r, ensure_ascii=False, indent=1))
        assert r["ok"] and len(r["dsl"]["segments"]) == 2 and r["dsl"]["bore"]["through"], "selftest failed"
        print("selftest OK")
        return
    if not a.src:
        ap.error("src 디렉터리 또는 --selftest")
    src = Path(a.src); out = Path(a.out); out.mkdir(parents=True, exist_ok=True)
    stats = {"total": 0, "revolve": 0, "reasons": {}}
    files = sorted(src.rglob("*.json"))
    if a.limit:
        files = files[: a.limit]
    for f in files:
        stats["total"] += 1
        try:
            model = json.loads(f.read_text(encoding="utf-8"))
            r = analyze(model)
        except Exception as e:  # noqa
            r = {"ok": False, "reason": f"error:{type(e).__name__}"}
        if r["ok"]:
            stats["revolve"] += 1
            r["dsl"]["id"] = f.stem
            (out / f"{f.stem}.dsl.json").write_text(json.dumps(r["dsl"], ensure_ascii=False, indent=1), encoding="utf-8")
        else:
            stats["reasons"][r["reason"]] = stats["reasons"].get(r["reason"], 0) + 1
    (out / "report.json").write_text(json.dumps(stats, ensure_ascii=False, indent=1), encoding="utf-8")
    print(json.dumps(stats, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
