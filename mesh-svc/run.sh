#!/usr/bin/env bash
cd "$(dirname "$0")"
export PYTHONPATH="$PWD/TRELLIS:$PYTHONPATH"
export ATTN_BACKEND=xformers
export SPCONV_ALGO=native
export CUDA_VISIBLE_DEVICES=${CUDA_VISIBLE_DEVICES:-7}
exec "$HOME/miniforge3/envs/trellis/bin/python" serve.py
