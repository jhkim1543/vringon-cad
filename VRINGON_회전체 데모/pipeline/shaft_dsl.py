"""VRINGON 회전체 DSL — 파이썬 쪽 계약 구현 (js/shaft-schema.js · js/shaft-profile.js 의 거울)

- load_schema()      : schema/shaft_dsl.schema.json (계약 파일)
- validate(dsl)      : jsonschema 검사 + 기하 검사(핵심 항목) → (ok, errors, warnings)
- build_top_line()   : 외형선 (x, r, tag) — 모따기·필렛·라운드·도피홈·홈 반영
- build_inner_line() : 내형선 (보어·센터구멍)
- section_polygon()  : 닫힌 반단면 폴리곤 (revolve 입력)
- volume_mm3()       : 해석 부피(회전체 절두체 합 − 비축대칭 피처 근사)
- silhouette()       : r(x) 표본 (검증기)

JS 와 좌표가 1e-6 안에서 같아야 한다 (tests/test_golden.py 가 golden_profiles.json 과 대조).
"""
from __future__ import annotations
import json, math, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEG = math.pi / 180

ISO_COARSE_PITCH = {3: 0.5, 4: 0.7, 5: 0.8, 6: 1, 8: 1.25, 10: 1.5, 12: 1.75, 14: 2, 16: 2, 18: 2.5, 20: 2.5, 22: 2.5, 24: 3, 27: 3, 30: 3.5, 33: 3.5, 36: 4, 39: 4, 42: 4.5, 45: 4.5, 48: 5}
DIN332_CENTER = {1: 2.12, 1.6: 3.35, 2: 4.25, 2.5: 5.3, 3.15: 6.7, 4: 8.5, 5: 10.6, 6.3: 13.2, 8: 17}


def load_schema() -> dict:
    return json.loads((ROOT / "schema" / "shaft_dsl.schema.json").read_text(encoding="utf-8"))


def parse_thread_spec(spec):
    m = re.match(r"^M\s*(\d+(?:\.\d+)?)\s*(?:[x×X]\s*(\d+(?:\.\d+)?))?", str(spec or "").strip())
    if not m:
        return None
    nominal = float(m.group(1))
    pitch = float(m.group(2)) if m.group(2) else ISO_COARSE_PITCH.get(int(nominal)) if nominal == int(nominal) else None
    return {"nominal": nominal, "pitch": pitch}


def center_hole_dims(d):
    D = DIN332_CENTER.get(d) or round(2.12 * d, 2)
    return {"d": d, "D": D, "pilot_depth": round(2 * d, 2), "cone_depth": round(((D - d) / 2) / math.tan(math.pi / 6), 3)}


def segment_diameters(seg):
    if seg["type"] == "taper":
        return seg["d_start"], seg["d_end"]
    d = seg.get("diameter")
    if not d and seg["type"] == "thread":
        ps = parse_thread_spec(seg.get("spec"))
        if ps:
            d = ps["nominal"]
    return d, d


def total_length(dsl):
    return sum(float(s["length"]) for s in dsl.get("segments", []))


def max_diameter(dsl):
    m = 0.0
    for s in dsl.get("segments", []):
        for d in segment_diameters(s):
            if d:
                m = max(m, d)
    return m


def segment_spans(dsl):
    out, x = [], 0.0
    for s in dsl.get("segments", []):
        out.append((x, x + s["length"]))
        x += s["length"]
    return out


def outer_diameter_at(dsl, x):
    for (a, b), s in zip(segment_spans(dsl), dsl["segments"]):
        if a - 1e-9 <= x <= b + 1e-9:
            if s["type"] == "taper":
                t = min(1, max(0, (x - a) / (b - a)))
                return s["d_start"] + (s["d_end"] - s["d_start"]) * t
            return segment_diameters(s)[0]
    return 0.0


def bore_diameter_at(dsl, x):
    b = dsl.get("bore")
    if not b or not b.get("segments"):
        return 0.0
    L = total_length(dsl)
    from_right = (not b.get("through")) and b.get("from") == "right"
    start = L if from_right else 0.0
    for s in b["segments"]:
        a, e = (start - s["length"], start) if from_right else (start, start + s["length"])
        if a - 1e-9 <= x <= e + 1e-9:
            return s["diameter"]
        start = a if from_right else e
    return 0.0


# ------------------------------------------------------------ 검증 (스키마 + 기하 핵심)
def validate(dsl):
    errors, warnings = [], []
    try:
        import jsonschema
        v = jsonschema.Draft7Validator(load_schema())
        for e in sorted(v.iter_errors(dsl), key=lambda e: list(e.path)):
            errors.append("$." + ".".join(str(p) for p in e.path) + ": " + e.message)
    except ImportError:
        warnings.append("jsonschema 미설치 — 스키마 검사 생략")
    if errors:
        return False, errors, warnings
    segs = dsl.get("segments", [])
    n = len(segs)
    L = total_length(dsl)
    if L <= 0:
        errors.append("segments: 전체 길이가 0")
    for i, s in enumerate(segs):
        if s["type"] == "taper" and not (s.get("d_start", 0) > 0 and s.get("d_end", 0) > 0):
            errors.append(f"segments[{i}]: taper 는 d_start·d_end 필요")
        if s["type"] != "taper" and not (segment_diameters(s)[0] or 0) > 0:
            errors.append(f"segments[{i}]: diameter 필요")
        if s["type"] == "thread" and not parse_thread_spec(s.get("spec")):
            errors.append(f"segments[{i}]: thread spec 해석 불가")
    spans = segment_spans(dsl)
    for i, t in enumerate(dsl.get("transitions", []) or []):
        at = t.get("at", -1)
        if not (0 <= at <= n):
            errors.append(f"transitions[{i}]: at={at} 범위 밖")
            continue
        is_end = at in (0, n)
        x = 0.0 if at == 0 else spans[at - 1][1]
        rL = None if at == 0 else segment_diameters(segs[at - 1])[1] / 2
        rR = None if at == n else segment_diameters(segs[at])[0] / 2
        r_big = max(rL or 0, rR or 0)
        r_small = r_big if is_end else min(rL, rR)
        step = (r_big - bore_diameter_at(dsl, x) / 2) if is_end else (r_big - r_small)
        if t["type"] == "chamfer":
            if not t.get("size", 0) > 0:
                errors.append(f"transitions[{i}]: chamfer size 필요")
            else:
                drop = t["size"] * math.tan((t.get("angle") or 45) * DEG)
                if step > 1e-6 and drop >= step - 1e-9:
                    errors.append(f"transitions[{i}]: 모따기 낙차 {drop:.2f} ≥ 단차 {step:.2f}")
        elif t["type"] in ("fillet", "round"):
            if not t.get("radius", 0) > 0:
                errors.append(f"transitions[{i}]: radius 필요")
            elif t["type"] == "fillet" and not is_end and step > 1e-6 and t["radius"] > step + 1e-9:
                errors.append(f"transitions[{i}]: 필렛 R{t['radius']} > 단차 {step:.2f}")
        elif t["type"] == "undercut":
            if not (t.get("width", 0) > 0 and t.get("depth", 0) > 0):
                errors.append(f"transitions[{i}]: undercut width·depth 필요")
            elif is_end:
                errors.append(f"transitions[{i}]: undercut 은 단차에만")
    for i, g in enumerate(dsl.get("grooves", []) or []):
        if not (0 <= g["segment"] < n):
            errors.append(f"grooves[{i}]: segment 범위 밖")
            continue
        s = segs[g["segment"]]
        if g["offset"] + g["width"] > s["length"] + 1e-9:
            errors.append(f"grooves[{i}]: 홈이 세그먼트 밖")
        x = spans[g["segment"]][0] + g["offset"] + g["width"] / 2
        if g["depth"] >= outer_diameter_at(dsl, x) / 2 - bore_diameter_at(dsl, x) / 2 - 0.3:
            errors.append(f"grooves[{i}]: 홈 깊이가 살두께 초과")
    b = dsl.get("bore")
    if b:
        tot = sum(s["length"] for s in b["segments"])
        if b.get("through") and abs(tot - L) > 1e-6:
            errors.append(f"bore: 관통 보어 길이 합 {tot} ≠ 전체 {L}")
        if not b.get("through") and tot >= L:
            errors.append("bore: 막힌 보어 깊이가 전체 길이 이상")
    for i, f in enumerate(dsl.get("features", []) or []):
        t = f["type"]
        if t in ("keyway", "flat", "hex", "knurl") and not (0 <= f.get("segment", -1) < n):
            errors.append(f"features[{i}]: segment 범위 밖")
            continue
        if t == "keyway":
            s = segs[f["segment"]]
            if f.get("offset", 0) + f["length"] > s["length"] + 1e-9:
                errors.append(f"features[{i}]: 키홈이 세그먼트 밖")
        if t == "center_hole":
            x = 0.0 if f["end"] == "left" else L
            if bore_diameter_at(dsl, x + (1e-6 if f["end"] == "left" else -1e-6)) > 0:
                errors.append(f"features[{i}]: 보어 끝에 센터구멍 불가")
        if t == "cross_hole":
            if f["position"] - f["diameter"] / 2 < -1e-9 or f["position"] + f["diameter"] / 2 > L + 1e-9:
                errors.append(f"features[{i}]: 횡구멍이 부품 밖")
        if t == "hex_socket":
            x = 1e-6 if f.get("end") == "left" else L - 1e-6
            if f.get("end") not in ("left", "right"):
                errors.append(f"features[{i}]: hex_socket end 필요")
            elif bore_diameter_at(dsl, x) > 0:
                errors.append(f"features[{i}]: 보어 끝에 육각 소켓 불가")
            elif f["across_flats"] / math.cos(math.pi / 6) >= 0.85 * outer_diameter_at(dsl, x):
                errors.append(f"features[{i}]: 육각 소켓이 끝면 지름에 비해 큼")
    return len(errors) == 0, errors, warnings


# ------------------------------------------------------------ 프로파일 (shaft-profile.js 거울)
def _arc_points(cx, cr, R, a0, a1, n, tag):
    out = []
    for k in range(n + 1):
        a = (a0 + (a1 - a0) * k / n) * DEG
        out.append((cx + R * math.cos(a), cr + R * math.sin(a), tag if k in (0, n) else f"{tag}_arc"))
    return out


def _mods_at(dsl, at):
    out = {}
    for t in dsl.get("transitions", []) or []:
        if t.get("at") == at:
            out[t["type"]] = t
    return out


def _dedupe(pts):
    out = []
    for p in pts:
        if out and abs(out[-1][0] - p[0]) < 1e-9 and abs(out[-1][1] - p[1]) < 1e-9:
            continue
        out.append(p)
    return out


def build_top_line(dsl, arc_n=10):
    segs = dsl.get("segments", [])
    spans = segment_spans(dsl)
    n = len(segs)
    pts, notes = [], []
    push = lambda x, r, tag: pts.append((x, r, tag))
    for i, s in enumerate(segs):
        x0, x1 = spans[i]
        ds, de = segment_diameters(s)
        rs, re_ = ds / 2, de / 2
        rat = lambda x: rs + (re_ - rs) * (x - x0) / ((x1 - x0) or 1)
        mL = _mods_at(dsl, i)
        if i == 0:
            left = "convex"
        else:
            rp = segment_diameters(segs[i - 1])[1] / 2
            left = "convex" if rs > rp + 1e-9 else "concave" if rs < rp - 1e-9 else "flush"
        mR = _mods_at(dsl, i + 1)
        if i == n - 1:
            right = "convex"
        else:
            rn = segment_diameters(segs[i + 1])[0] / 2
            right = "convex" if re_ > rn + 1e-9 else "concave" if re_ < rn - 1e-9 else "flush"
        cursor = x0
        c = mL.get("chamfer")
        if left == "convex" and c and c.get("size", 0) > 0:
            drop = c["size"] * math.tan((c.get("angle") or 45) * DEG)
            push(x0, rs - drop, "chamfer"); push(x0 + c["size"], rat(x0 + c["size"]), "chamfer_end"); cursor = x0 + c["size"]
        elif left == "convex" and mL.get("round", {}).get("radius", 0) > 0:
            R = mL["round"]["radius"]; pts.extend(_arc_points(x0 + R, rs - R, R, 180, 90, arc_n, "round")); cursor = x0 + R
        elif left == "concave" and mL.get("undercut", {}).get("width", 0) > 0:
            u = mL["undercut"]
            push(x0, rs - u["depth"], "undercut"); push(x0 + u["width"], rs - u["depth"], "undercut"); push(x0 + u["width"], rat(x0 + u["width"]), "undercut_end"); cursor = x0 + u["width"]
        elif left == "concave" and mL.get("fillet", {}).get("radius", 0) > 0:
            R = mL["fillet"]["radius"]; pts.extend(_arc_points(x0 + R, rs + R, R, 180, 270, arc_n, "fillet")); cursor = x0 + R
        else:
            push(x0, rs, "corner")
        for g in sorted([g for g in (dsl.get("grooves") or []) if g["segment"] == i], key=lambda g: g["offset"]):
            gx0, gx1 = x0 + g["offset"], x0 + g["offset"] + g["width"]
            if gx0 < cursor - 1e-9:
                notes.append(f"grooves: seg {i} 홈이 모서리 처리와 겹쳐 건너뜀"); continue
            push(gx0, rat(gx0), "groove"); push(gx0, rat(gx0) - g["depth"], "groove_floor"); push(gx1, rat(gx1) - g["depth"], "groove_floor"); push(gx1, rat(gx1), "groove_end")
            cursor = gx1
        c = mR.get("chamfer")
        if right == "convex" and c and c.get("size", 0) > 0:
            drop = c["size"] * math.tan((c.get("angle") or 45) * DEG)
            push(x1 - c["size"], rat(x1 - c["size"]), "chamfer_start"); push(x1, re_ - drop, "chamfer")
        elif right == "convex" and mR.get("round", {}).get("radius", 0) > 0:
            R = mR["round"]["radius"]; pts.extend(_arc_points(x1 - R, re_ - R, R, 90, 0, arc_n, "round"))
        elif right == "concave" and mR.get("undercut", {}).get("width", 0) > 0:
            u = mR["undercut"]
            push(x1 - u["width"], rat(x1 - u["width"]), "undercut_start"); push(x1 - u["width"], re_ - u["depth"], "undercut"); push(x1, re_ - u["depth"], "undercut")
        elif right == "concave" and mR.get("fillet", {}).get("radius", 0) > 0:
            R = mR["fillet"]["radius"]; pts.extend(_arc_points(x1 - R, re_ + R, R, 270, 360, arc_n, "fillet"))
        else:
            push(x1, re_, "corner")
    return _dedupe(pts), notes


def build_inner_line(dsl, arc_n=10):
    L = total_length(dsl)
    pts = []
    push = lambda x, r, tag: pts.append((x, r, tag))
    centers = {f["end"]: f for f in (dsl.get("features") or []) if f["type"] == "center_hole"}

    def center_left():
        f = centers.get("left")
        if not f:
            push(0.0, 0.0, "axis"); return
        c = center_hole_dims(f.get("d") or 2)
        tip = (c["d"] / 2) / math.tan(59 * DEG)
        push(0.0, c["D"] / 2, "center_hole"); push(c["cone_depth"], c["d"] / 2, "center_hole")
        push(c["cone_depth"] + c["pilot_depth"], c["d"] / 2, "center_hole"); push(c["cone_depth"] + c["pilot_depth"] + tip, 0.0, "center_hole_tip")

    def center_right():
        f = centers.get("right")
        if not f:
            push(L, 0.0, "axis"); return
        c = center_hole_dims(f.get("d") or 2)
        tip = (c["d"] / 2) / math.tan(59 * DEG)
        push(L - c["cone_depth"] - c["pilot_depth"] - tip, 0.0, "center_hole_tip"); push(L - c["cone_depth"] - c["pilot_depth"], c["d"] / 2, "center_hole")
        push(L - c["cone_depth"], c["d"] / 2, "center_hole"); push(L, c["D"] / 2, "center_hole")

    b = dsl.get("bore")
    if not b or not b.get("segments"):
        center_left(); center_right(); return _dedupe(pts)
    bsegs = b["segments"]; cl = b.get("chamfer_left") or 0; cr = b.get("chamfer_right") or 0
    if b.get("through"):
        x = 0.0
        for i, s in enumerate(bsegs):
            r = s["diameter"] / 2
            if i == 0:
                if cl > 0: push(0.0, r + cl, "bore_chamfer"); push(cl, r, "bore_chamfer_end")
                else: push(0.0, r, "bore")
            else:
                push(x, r, "bore_step")
            xe = x + s["length"]
            if i == len(bsegs) - 1:
                if cr > 0: push(xe - cr, r, "bore_chamfer_start"); push(xe, r + cr, "bore_chamfer")
                else: push(xe, r, "bore")
            else:
                push(xe, r, "bore")
            x = xe
    elif b.get("from") == "right":
        center_left()
        depth = sum(s["length"] for s in bsegs)
        x = L - depth
        push(x, 0.0, "bore_bottom")
        for i, s in enumerate(list(reversed(bsegs))):
            r = s["diameter"] / 2
            push(x, r, "bore_bottom" if i == 0 else "bore_step")
            xe = x + s["length"]
            if i == len(bsegs) - 1:
                if cr > 0: push(xe - cr, r, "bore_chamfer_start"); push(xe, r + cr, "bore_chamfer")
                else: push(xe, r, "bore")
            else:
                push(xe, r, "bore")
            x = xe
    else:
        x = 0.0
        for i, s in enumerate(bsegs):
            r = s["diameter"] / 2
            if i == 0:
                if cl > 0: push(0.0, r + cl, "bore_chamfer"); push(cl, r, "bore_chamfer_end")
                else: push(0.0, r, "bore")
            else:
                push(x, r, "bore_step")
            xe = x + s["length"]; push(xe, r, "bore"); x = xe
        push(x, 0.0, "bore_bottom")
        center_right()
    return _dedupe(pts)


def section_polygon(dsl, arc_n=10):
    top, notes = build_top_line(dsl, arc_n)
    inner = build_inner_line(dsl, arc_n)
    poly = [(x, r) for x, r, _ in top] + [(x, r) for x, r, _ in reversed(inner)]
    out = []
    for p in poly:
        if out and abs(out[-1][0] - p[0]) < 1e-9 and abs(out[-1][1] - p[1]) < 1e-9:
            continue
        out.append(p)
    return out, top, inner, notes


def _frustum_volume(pts):
    v = 0.0
    for (x0, r0, *_), (x1, r1, *_) in zip(pts, pts[1:]):
        v += (math.pi / 3) * (x1 - x0) * (r0 * r0 + r0 * r1 + r1 * r1)
    return v


def cross_section_removed(R, f, N=720):
    full, kept = math.pi * R * R, 0.0
    w2, d, a = (f.get("width") or 0) / 2, f.get("depth") or 0, (f.get("across_flats") or 0) / 2
    for k in range(N):
        th = 2 * math.pi * (k + 0.5) / N
        rb = R
        if f["type"] == "keyway":
            c, s = math.cos(th), abs(math.sin(th))
            if c > 0:
                if (R - d) * s <= w2 * c: rb = min(R, (R - d) / c)
                elif R * s <= w2: rb = min(R, w2 / s)
        elif f["type"] == "flat":
            c = math.cos(th)
            if c > 0: rb = min(R, (R - d) / c)
            if f.get("count") == 2 and c < 0: rb = min(R, (R - d) / -c)
        elif f["type"] == "hex":
            t = ((th + math.pi / 6) % (math.pi / 3)) - math.pi / 6
            rb = min(R, a / math.cos(t))
        kept += 0.5 * rb * rb * (2 * math.pi / N)
    return max(0.0, full - kept)


def volume_mm3(dsl, arc_n=12):
    top, _ = build_top_line(dsl, arc_n)
    inner = build_inner_line(dsl, arc_n)
    v = _frustum_volume(top) - _frustum_volume(inner)
    for f in dsl.get("features") or []:
        if f["type"] in ("keyway", "flat", "hex"):
            s = dsl["segments"][f["segment"]]
            R = min(segment_diameters(s)) / 2
            ln = s["length"] if f["type"] == "hex" else f["length"]
            v -= cross_section_removed(R, f) * ln
        elif f["type"] == "hex_socket":
            v -= (math.sqrt(3) / 2) * f["across_flats"] ** 2 * f["depth"]
        elif f["type"] == "cross_hole":
            D = outer_diameter_at(dsl, f["position"]); db = bore_diameter_at(dsl, f["position"])
            ln = min(f.get("depth") or 0, D) if f.get("through") is False else max(0.0, D - db)
            v -= math.pi * (f["diameter"] / 2) ** 2 * ln
    return max(0.0, v)


def top_radius_at(top, x):
    best = 0.0
    for (x0, r0, *_), (x1, r1, *_) in zip(top, top[1:]):
        if x < min(x0, x1) - 1e-9 or x > max(x0, x1) + 1e-9:
            continue
        best = max(best, max(r0, r1) if abs(x1 - x0) < 1e-9 else r0 + (r1 - r0) * (x - x0) / (x1 - x0))
    return best


def silhouette(dsl, N=400):
    L = total_length(dsl)
    top, _ = build_top_line(dsl, 8)
    return L, [top_radius_at(top, L * (k + 0.5) / N) for k in range(N)]


def silhouette_iou(a, b):
    """a, b = (L, samples) — 길이 정규화 IoU (js/shaft-verify.js silhouetteIoU 거울)"""
    N = max(len(a[1]), len(b[1]), 200)
    def at(arr, t):
        n = len(arr); x = t * n - 0.5
        i0 = max(0, min(n - 1, int(math.floor(x)))); i1 = max(0, min(n - 1, i0 + 1)); f = max(0.0, min(1.0, x - i0))
        return arr[i0] * (1 - f) + arr[i1] * f
    inter = uni = 0.0
    for i in range(N):
        t = (i + 0.5) / N
        ra, rb = at(a[1], t) / (a[0] or 1), at(b[1], t) / (b[0] or 1)
        inter += min(ra, rb); uni += max(ra, rb)
    return inter / uni if uni > 0 else 0.0
