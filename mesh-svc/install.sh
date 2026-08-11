#!/usr/bin/env bash
# TRELLIS (MIT) on-prem install — run once on the GPU server, logs to install.log.
# Afterwards:  tmux new -d -s trellis "cd ~/vringon-cad/mesh-svc && ./run.sh"
set -e
cd "$(dirname "$0")"
ENVDIR="$HOME/miniforge3/envs/trellis"

if [ ! -d "$ENVDIR" ]; then
  "$HOME/miniforge3/bin/conda" create -y -n trellis python=3.10
fi
PIP="$ENVDIR/bin/pip"

$PIP install torch==2.4.0 torchvision==0.19.0 --index-url https://download.pytorch.org/whl/cu121
$PIP install xformers==0.0.27.post2 --index-url https://download.pytorch.org/whl/cu121

if [ ! -d TRELLIS ]; then
  git clone --recurse-submodules https://github.com/microsoft/TRELLIS.git
fi
$PIP install pillow imageio imageio-ffmpeg tqdm easydict opencv-python-headless \
  scipy ninja rembg onnxruntime trimesh open3d xatlas pyvista pymeshfix igraph transformers
$PIP install git+https://github.com/EasternJournalist/utils3d.git
$PIP install spconv-cu120
$PIP install fastapi uvicorn pydantic

# kaolin + nvdiffrast + diffoctreerast + mip-gaussian (TRELLIS extras)
$PIP install kaolin -f https://nvidia-kaolin.s3.us-east-2.amazonaws.com/torch-2.4.0_cu121.html || true
$PIP install git+https://github.com/NVlabs/nvdiffrast.git || true
$PIP install git+https://github.com/JeffreyXiang/diffoctreerast.git || true
$PIP install git+https://github.com/autonomousvision/mip-splatting.git#subdirectory=submodules/diff-gaussian-rasterization || true

echo "PYTHONPATH=$PWD/TRELLIS" > .env
echo "install done — start with ./run.sh"
