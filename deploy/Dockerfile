# VRINGON CAD — 드론 데모 서버 + 네 파트 입구 (3dcad.rebuilder.ai)
# The drone demo server and the four-part entry for 3dcad.rebuilder.ai
#
# 빌드 컨텍스트는 저장소 루트(vringon-cad/)다. 서버가 실제로 부르는 파일과 브라우저가 필요로 하는
# 것만 복사한다. 키는 이미지에 굽지 않는다 — 전부 환경변수(.env)로 들어온다.
# Build context is the repository root. Only what the server imports and what the browser needs is
# copied. No key is baked in; everything secret arrives through environment variables (.env).
#
#   docker compose -f deploy/docker-compose.yml up -d --build
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production

# 서버 / server (순수 Node, 패키지 없음 / pure Node, no packages)
COPY server.mjs guard.mjs asset-store.mjs glb-sanitize.mjs spec-validate.mjs /app/
COPY js/catalog.js js/program-spec.js js/recipes.js /app/js/
# 브라우저로 나가는 것 / what the browser gets (정적 허용 목록과 같다 / matches the static allowlist in guard.mjs)
COPY index.html index-en.html login.html app.html library.html asset.html contact.html solutions.html solutions-en.html spec.html seed.html /app/
COPY css /app/css
COPY js /app/js
COPY assets /app/assets
COPY vendor /app/vendor
# Part 1~3 의 보호 빌드: 루트 서버가 /revolve/ 로 내보낸다 / the protected build, served at /revolve/
COPY docs/revolve /app/docs/revolve

# 자산 저장소는 볼륨으로 / the asset store lives on a volume
RUN mkdir -p /app/data /app/generated
VOLUME ["/app/data", "/app/generated"]

ENV VRINGON_PUBLIC=1
EXPOSE 8347
HEALTHCHECK --interval=30s --timeout=4s CMD wget -qO- http://127.0.0.1:8347/api/status || exit 1
CMD ["node", "server.mjs", "8347"]
