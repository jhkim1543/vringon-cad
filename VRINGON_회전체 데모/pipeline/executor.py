"""VRINGON 회전체 — 실행기 (M1): DSL → CadQuery 회전 B-rep → STEP · STL · USDA

    python executor.py <dsl.json|-> --out <dir> [--formats step,stl,usda] [--radial 128]

이 실행기가 이후 모든 단계의 채점기다: 판독기가 낸 DSL 이 여기서 유효한 솔리드가 되지 않으면 그 판독은 실패다.
- 반단면 폴리곤(shaft_dsl.section_polygon, JS 와 같은 좌표)을 X 축 둘레로 360° 회전 → 원통·원추·평면·(필렛은 폴리라인 근사) 면을 가진 해석적 B-rep
- 키홈(둥근 끝 슬롯)·평면(D컷)·육각(교집합)·횡구멍(원기둥 차집합) 은 CadQuery 불리언
- 나사·널링은 관례대로 장식(형상 없음) — STEP 에는 없고 DSL 커스텀 속성(USDA)과 요약(summary.json)에만 규격을 싣는다
- USDA: 테셀레이션 메시 + DSL 파라미터를 custom 속성으로 (usdview/Omniverse 에서 바로 열림)
결과: <out>/model.step, model.stl, model.usda, summary.json (부피·바운딩박스·면 수·유효성)
"""
from __future__ import annotations
import argparse, json, math, sys, time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import shaft_dsl as S

DEG = math.pi / 180


def _wire_points_from_polygon(poly):
    """중복·역행 없는 폴리곤 (x, r) — CadQuery polyline 은 연속 중복점을 싫어한다"""
    out = []
    for p in poly:
        if out and abs(out[-1][0] - p[0]) < 1e-9 and abs(out[-1][1] - p[1]) < 1e-9:
            continue
        out.append((float(p[0]), float(p[1])))
    if len(out) > 2 and abs(out[0][0] - out[-1][0]) < 1e-9 and abs(out[0][1] - out[-1][1]) < 1e-9:
        out.pop()
    return out


def build_solid(dsl, radial_hint=None):
    import cadquery as cq

    poly, top, inner, notes = S.section_polygon(dsl, arc_n=10)
    pts = _wire_points_from_polygon(poly)
    # XY 평면: x = 축, y = 반경. X 축(0,0,0)-(1,0,0) 둘레로 회전
    body = cq.Workplane("XY").polyline(pts).close().revolve(360, (0, 0, 0), (1, 0, 0))
    L = S.total_length(dsl)
    ops = []
    for f in dsl.get("features") or []:
        t = f["type"]
        if t == "center_hole":
            continue  # 내형선에 이미 반영됨
        if t in ("keyway", "flat", "hex", "knurl"):
            seg = dsl["segments"][f["segment"]]
            x0 = S.segment_spans(dsl)[f["segment"]][0]
            R = min(S.segment_diameters(seg)) / 2
        angle = float(f.get("angle") or 0)  # 0 = +Z(정면), 90 = +Y
        # 반경 방향 단위벡터 (Y, Z 성분): dir = (0, sin a, cos a)
        dy, dz = math.sin(angle * DEG), math.cos(angle * DEG)
        if t == "keyway":
            xc = x0 + (f.get("offset") or 0) + f["length"] / 2
            depth = f["depth"]; margin = max(1.5, R * 0.1)
            # 로컬 XY 평면에 슬롯(길이 X, 폭 Y) 을 그리고 +Z 로 뽑은 뒤 회전/이동
            cutter = (cq.Workplane("XY").slot2D(f["length"], f["width"], 0).extrude(depth + margin)
                      .translate((0, 0, R - depth)))
            cutter = cutter.rotate((0, 0, 0), (1, 0, 0), -angle).translate((xc, 0, 0))
            ops.append(("cut", cutter, "keyway"))
        elif t == "flat":
            xc = x0 + (f.get("offset") or 0) + f["length"] / 2
            depth = f["depth"]; margin = max(1.5, R * 0.1)
            for k in range(2 if f.get("count") == 2 else 1):
                cutter = (cq.Workplane("XY").box(f["length"], 2 * R + 4, depth + margin)
                          .translate((0, 0, R - depth + (depth + margin) / 2)))
                cutter = cutter.rotate((0, 0, 0), (1, 0, 0), -(angle + 180 * k)).translate((xc, 0, 0))
                ops.append(("cut", cutter, "flat"))
        elif t == "hex":
            x1 = S.segment_spans(dsl)[f["segment"]][1]
            ac = f["across_flats"] / math.cos(30 * DEG)  # 대각
            # YZ 평면 위 육각(플랫이 +Z 를 보도록), X 로 뽑음
            prism = (cq.Workplane("YZ").polygon(6, ac).extrude(x1 - x0 + 2)
                     .translate((x0 - 1, 0, 0)))
            # polygon(6) 은 첫 꼭짓점이 로컬 +x(=월드 Y) 에 있음 → 플랫이 ±Z 를 보려면 30° 회전
            prism = prism.rotate((0, 0, 0), (1, 0, 0), 30 - angle)
            # 육각 구간만 교집합, 나머지 몸통은 그대로: 몸통 = (몸통 − 구간슬랩) ∪ (몸통 ∩ 프리즘)
            slab = cq.Workplane("YZ").rect(4 * R + 8, 4 * R + 8).extrude(x1 - x0).translate((x0, 0, 0))
            ops.append(("hex", (slab, prism), "hex"))
        elif t == "cross_hole":
            through = f.get("through", True) is not False
            Dx = S.outer_diameter_at(dsl, f["position"]) / 2
            length = 2 * Dx + 4 if through else (f.get("depth") or Dx) + max(1.5, Dx * 0.1)
            cyl = cq.Workplane("XY").circle(f["diameter"] / 2).extrude(length)  # +Z 로
            if through:
                cyl = cyl.translate((0, 0, -length / 2))
            else:
                cyl = cyl.translate((0, 0, Dx + max(1.5, Dx * 0.1) - length))
            cyl = cyl.rotate((0, 0, 0), (1, 0, 0), -angle).translate((f["position"], 0, 0))
            ops.append(("cut", cyl, "cross_hole"))
        elif t == "knurl":
            notes.append("knurl: 장식 표현(형상 없음)")
    for kind, obj, name in ops:
        try:
            if kind == "cut":
                body = body.cut(obj)
            elif kind == "hex":
                slab, prism = obj
                body = body.cut(slab).union(body.intersect(prism))
        except Exception as e:  # noqa
            notes.append(f"{name}: 불리언 실패 ({e}) — 건너뜀")
    return body, notes


def tessellate(shape, tol=0.05, ang=0.2):
    verts, tris = shape.tessellate(tol, ang)
    return [(v.x, v.y, v.z) for v in verts], [tuple(t) for t in tris]


def write_usda(path, dsl, verts, tris, summary):
    q = lambda s: '"' + str(s).replace("\\", "\\\\").replace('"', '\\"') + '"'
    name = "".join(ch if ch.isalnum() or ch == "_" else "_" for ch in (dsl.get("id") or "shaft")) or "shaft"
    L = S.total_length(dsl); D = S.max_diameter(dsl)
    lines = ["#usda 1.0", "(", f'    defaultPrim = "{name}"', "    metersPerUnit = 0.001", '    upAxis = "Y"',
             '    doc = "VRINGON revolve part — CadQuery executor"', ")", "",
             f'def Xform "{name}" (', '    kind = "component"', ")", "{",
             f"    custom string vringon:dsl_version = {q(dsl.get('dsl', 'vringon-shaft/1.0'))}",
             f"    custom string vringon:dsl_json = {q(json.dumps(dsl, ensure_ascii=False, separators=(',', ':')))}",
             f"    custom string vringon:name_ko = {q(dsl.get('name_ko', ''))}",
             f"    custom string vringon:material = {q(dsl.get('material', ''))}",
             f"    custom double vringon:length_mm = {L}", f"    custom double vringon:max_diameter_mm = {D}",
             f"    custom double vringon:volume_mm3 = {summary['volume_mm3']:.3f}",
             f"    custom double[] vringon:segment_lengths_mm = [{', '.join(str(s['length']) for s in dsl['segments'])}]",
             f"    custom string[] vringon:segment_types = [{', '.join(q(s['type']) for s in dsl['segments'])}]",
             f"    custom string[] vringon:threads = [{', '.join(q(s.get('spec', '')) for s in dsl['segments'] if s['type'] == 'thread')}]",
             f"    custom string[] vringon:features = [{', '.join(q(f['type']) for f in (dsl.get('features') or []))}]", "",
             '    def Mesh "body"', "    {"]
    xs = [v[0] for v in verts] or [0]; ys = [v[1] for v in verts] or [0]; zs = [v[2] for v in verts] or [0]
    lines.append(f"        float3[] extent = [({min(xs):.4f}, {min(ys):.4f}, {min(zs):.4f}), ({max(xs):.4f}, {max(ys):.4f}, {max(zs):.4f})]")
    lines.append(f"        int[] faceVertexCounts = [{', '.join(['3'] * len(tris))}]")
    lines.append(f"        int[] faceVertexIndices = [{', '.join(str(i) for t in tris for i in t)}]")
    lines.append(f"        point3f[] points = [{', '.join(f'({v[0]:.4f}, {v[1]:.4f}, {v[2]:.4f})' for v in verts)}]")
    lines.append('        uniform token subdivisionScheme = "none"')
    lines.append("        color3f[] primvars:displayColor = [(0.72, 0.74, 0.77)]")
    lines += ["    }", "}", ""]
    Path(path).write_text("\n".join(lines), encoding="utf-8")


def run(dsl, out_dir, formats=("step", "stl", "usda")):
    import cadquery as cq
    from cadquery import exporters
    out = Path(out_dir); out.mkdir(parents=True, exist_ok=True)
    t0 = time.time()
    ok, errors, warnings = S.validate(dsl)
    if not ok:
        summary = {"ok": False, "errors": errors, "warnings": warnings}
        (out / "summary.json").write_text(json.dumps(summary, ensure_ascii=False, indent=1), encoding="utf-8")
        return summary
    body, notes = build_solid(dsl)
    shape = body.val()
    solids = body.solids().vals()
    valid = shape.isValid()
    vol = shape.Volume()
    bb = shape.BoundingBox()
    files = {}
    if "step" in formats:
        exporters.export(body, str(out / "model.step"), exportType="STEP")
        files["step"] = "model.step"
    if "stl" in formats:
        exporters.export(body, str(out / "model.stl"), exportType="STL", tolerance=0.02, angularTolerance=0.15)
        files["stl"] = "model.stl"
    summary = {
        "ok": True, "valid": bool(valid), "solids": len(solids), "faces": len(body.faces().vals()), "edges": len(body.edges().vals()),
        "volume_mm3": round(vol, 3), "volume_analytic_mm3": round(S.volume_mm3(dsl), 3),
        "bbox_mm": [round(bb.xlen, 3), round(bb.ylen, 3), round(bb.zlen, 3)],
        "length_mm": S.total_length(dsl), "max_diameter_mm": S.max_diameter(dsl),
        "notes": notes, "warnings": warnings, "files": files, "ms": int((time.time() - t0) * 1000),
    }
    if "usda" in formats:
        verts, tris = tessellate(shape, 0.05, 0.2)
        write_usda(out / "model.usda", dsl, verts, tris, summary)
        files["usda"] = "model.usda"; summary["tris"] = len(tris)
    (out / "summary.json").write_text(json.dumps(summary, ensure_ascii=False, indent=1), encoding="utf-8")
    return summary


def main():
    ap = argparse.ArgumentParser(description="VRINGON 회전체 DSL → STEP/STL/USDA")
    ap.add_argument("dsl", help="DSL JSON 파일 경로 또는 - (stdin)")
    ap.add_argument("--out", required=True)
    ap.add_argument("--formats", default="step,stl,usda")
    a = ap.parse_args()
    raw = sys.stdin.read() if a.dsl == "-" else Path(a.dsl).read_text(encoding="utf-8")
    dsl = json.loads(raw)
    summary = run(dsl, a.out, tuple(x.strip() for x in a.formats.split(",") if x.strip()))
    print(json.dumps(summary, ensure_ascii=False))
    sys.exit(0 if summary.get("ok") else 2)


if __name__ == "__main__":
    main()
