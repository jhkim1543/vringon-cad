# VRINGON CAD — on-prem image-to-3D mesh service (TRELLIS, MIT license)
# FastAPI daemon on :8348. server.mjs tries this first and falls back to 메시 클라우드.
#   POST /generate {imageB64: dataURI} -> {ok, glbB64}
#   GET  /health                       -> {ok, engine, device}
import base64
import io
import os
import tempfile

os.environ.setdefault("ATTN_BACKEND", "xformers")     # flash-attn optional
os.environ.setdefault("SPCONV_ALGO", "native")        # first-run friendly

from fastapi import FastAPI
from pydantic import BaseModel
from PIL import Image

app = FastAPI()

# Triangle budget for the returned mesh. High enough to keep cast fillets and
# surface detail, low enough that segmentation and contact analysis stay
# interactive in the browser.
FACE_BUDGET = int(os.environ.get("VRINGON_FACE_BUDGET", "180000"))
PIPE = None
STATE = {"ready": False, "loading": True, "error": None}


def _load():
    """Weights (~4GB) load once at startup, in a thread.

    Lazily loading on the first request meant the caller waited out a cold model
    download and gave up, so the node server silently fell back to the cloud
    even though the local service was healthy. /health now reports `ready`, and
    the caller only routes here once it is true.
    """
    global PIPE
    try:
        from trellis.pipelines import TrellisImageTo3DPipeline
        p = TrellisImageTo3DPipeline.from_pretrained("microsoft/TRELLIS-image-large")
        p.cuda()
        PIPE = p
        STATE.update(ready=True, loading=False)
        print("[vringon] TRELLIS ready", flush=True)
    except Exception as e:  # noqa: BLE001
        STATE.update(ready=False, loading=False, error=f"{type(e).__name__}: {e}")
        print("[vringon] TRELLIS load failed:", STATE["error"], flush=True)


@app.on_event("startup")
def warm():
    import threading
    threading.Thread(target=_load, daemon=True).start()


def pipeline():
    if PIPE is None:
        raise RuntimeError(STATE["error"] or "모델 로딩 중입니다 (최초 1회 가중치 다운로드)")
    return PIPE


class GenReq(BaseModel):
    imageB64: str


@app.get("/health")
def health():
    return {"ok": True, "engine": "trellis-image-large", **STATE}


def _to_glb_bytes(mesh_out):
    """MeshExtractResult -> binary glb via trimesh (geometry only).

    The robot asset compiler consumes geometry — parts, contacts, axes — and
    applies its own materials, so we skip the gaussian texture bake and its
    heavy rasteriser dependencies entirely.
    """
    import numpy as np
    import trimesh
    verts = mesh_out.vertices.detach().cpu().numpy().astype(np.float64)
    faces = mesh_out.faces.detach().cpu().numpy().astype(np.int64)
    tm = trimesh.Trimesh(vertices=verts, faces=faces)
    tm.merge_vertices()
    tm.fix_normals()

    # TRELLIS returns whatever the marching cubes grid produced — 900k faces on a
    # drone bracket. Structure compilation walks every triangle for segmentation,
    # contacts and mass, so an unbounded mesh stalls the browser for minutes.
    # Decimate here, on the GPU box, where it is one quadric pass.
    if len(tm.faces) > FACE_BUDGET:
        before = len(tm.faces)
        # trimesh 4.x takes the target as a keyword; passed positionally it is
        # read as a 0..1 reduction ratio and raises instead of decimating.
        try:
            try:
                tm = tm.simplify_quadric_decimation(face_count=FACE_BUDGET)
            except TypeError:
                tm = tm.simplify_quadric_decimation(FACE_BUDGET)
            print(f"[vringon] decimated {before} -> {len(tm.faces)} faces", flush=True)
        except Exception as e:  # noqa: BLE001 — a big mesh beats no mesh at all
            print(f"[vringon] DECIMATION FAILED ({type(e).__name__}: {e}); "
                  f"returning {before} faces, structure compilation will be slow",
                  flush=True)
    with tempfile.NamedTemporaryFile(suffix=".glb", delete=False) as f:
        path = f.name
    tm.export(path)
    with open(path, "rb") as f:
        data = f.read()
    os.unlink(path)
    return data


@app.post("/generate")
def generate(req: GenReq):
    try:
        b64 = req.imageB64.split(",", 1)[1] if "," in req.imageB64 else req.imageB64
        img = Image.open(io.BytesIO(base64.b64decode(b64))).convert("RGB")
        out = pipeline().run(img, seed=1, formats=["mesh"])
        data = _to_glb_bytes(out["mesh"][0])
        return {"ok": True, "glbB64": base64.b64encode(data).decode()}
    except Exception as e:  # noqa: BLE001 — the JS side surfaces this string to the UI
        return {"ok": False, "error": f"{type(e).__name__}: {e}"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8348)
