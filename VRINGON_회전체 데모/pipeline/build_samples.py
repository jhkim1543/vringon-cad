"""골든 샘플 12종 → samples/<id>/model.step · model.usda · executor.json  (공개 데모의 '해석적 STEP' 내려받기용)
    .venv/Scripts/python.exe build_samples.py [--formats step,usda]
끝나면 node tools/build-samples.mjs 를 다시 돌려 index.json 의 files.step/usda 를 갱신한다."""
import json, sys, argparse
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from executor import run

ROOT = Path(__file__).resolve().parent.parent
ap = argparse.ArgumentParser(); ap.add_argument("--formats", default="step,usda"); a = ap.parse_args()
formats = tuple(x for x in a.formats.split(",") if x)
for d in sorted((ROOT / "samples").iterdir()):
    g = d / "golden.json"
    if not g.exists():
        continue
    dsl = json.loads(g.read_text(encoding="utf-8"))
    summ = run(dsl, str(d), formats)
    (d / "executor.json").write_text(json.dumps(summ, ensure_ascii=False, indent=1), encoding="utf-8")
    (d / "summary.json").unlink(missing_ok=True)
    print(f"{d.name:18s} ok={summ.get('ok')} valid={summ.get('valid')} faces={summ.get('faces')} vol={summ.get('volume_mm3')} ({summ.get('ms')}ms)")
