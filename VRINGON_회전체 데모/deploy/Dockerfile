# VRINGON 회전체 데모 — 외부 도메인 서비스용 이미지
# 빌드 컨텍스트는 저장소 루트(vringon-cad/)다. 보호 빌드(docs/revolve)를 정적으로 서빙하고,
# 판독 API 만 서버에서 돈다. 원본 모듈·프롬프트는 이미지 안에만 있고 밖으로 서빙되지 않는다.
#
#   docker build -f "VRINGON_회전체 데모/deploy/Dockerfile" -t vringon-revolve .
#   docker run -p 8349:8349 --env-file .env vringon-revolve
FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production
# 서버가 실제로 쓰는 것만 복사한다 (판독 API + 검증 + 프롬프트)
COPY ["VRINGON_회전체 데모/server.mjs", "/app/demo/"]
COPY ["VRINGON_회전체 데모/package.json", "/app/demo/"]
COPY ["VRINGON_회전체 데모/js/shaft-schema.js", "VRINGON_회전체 데모/js/shaft-profile.js", "VRINGON_회전체 데모/js/shaft-standards.js", "VRINGON_회전체 데모/js/shaft-verify.js", "/app/demo/js/"]
COPY ["VRINGON_회전체 데모/tools/extract-prompt.mjs", "VRINGON_회전체 데모/tools/describe-prompt.mjs", "/app/demo/tools/"]
COPY ["VRINGON_회전체 데모/prompts", "/app/demo/prompts/"]
# 브라우저로 나가는 것은 보호 빌드뿐
COPY docs/revolve /app/docs/revolve

WORKDIR /app/demo
ENV VRINGON_STATIC=../docs/revolve
ENV PORT=8349
# 외부 도메인 뒤: 개발용 경로를 끄고 Secure 쿠키·보안 헤더를 켠다 / public: dev routes off, Secure cookie and headers on
ENV VRINGON_PUBLIC=1
EXPOSE 8349
# 키·접근 코드는 이미지에 굽지 않는다 (--env-file 또는 오케스트레이터 비밀값으로 주입)
HEALTHCHECK --interval=30s --timeout=4s CMD wget -qO- http://127.0.0.1:8349/api/status || exit 1
CMD ["node", "server.mjs"]
