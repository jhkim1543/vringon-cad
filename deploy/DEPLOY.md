# 3dcad.rebuilder.ai — 네 파트 한 주소 배포

한 주소에서 Part 1~4 를 다 쓴다. 입구는 드론 랜딩(`/index.html`)이고, 로그인하면 네 파트를 고르는 화면(`/revolve/index.html`)으로 간다.

| 경로 | 무엇 | 어디서 |
|---|---|---|
| `/` `/index.html` | 메인 랜딩 (드론 데모 소개) | 루트 |
| `/login.html` | 로그인 (서버가 판정) | 루트 |
| `/revolve/index.html` | 네 파트 고르기 | 보호 빌드 (`docs/revolve`) |
| `/revolve/revolve.html` `assembly.html` `sculpt.html` | Part 1 · 2 · 3 | 보호 빌드 |
| `/app.html` | Part 4 드론 CAD | 루트 |
| `/api/*` | 드론 서버 API (세션 필요) | `server.mjs` |
| `/revolve/api/*` | Part 1~3 API — 회전체 서버로 넘긴다 (세션 필요) | `server.mjs` → `revolve:8349` |

## 실제 운영: Elastic Beanstalk (3dcad.rebuilder.ai)

라이브는 **AWS Elastic Beanstalk** 에 있다 — 애플리케이션 `Vringon-CAD`, 환경 `vringon-cad-prod`, `ap-northeast-2`, Node.js 24, t4g.medium 한 대, ALB + ACM 인증서. (도커 구성은 사내 VM 용 대안이다.)

```bash
aws login                                   # 콘솔 계정으로 (브라우저가 뜬다)
node "VRINGON_회전체 데모/tools/deploy-docs.mjs"   # 보호 빌드 갱신
node deploy/eb-bundle.mjs                    # deploy/eb-bundle.zip
node deploy/eb-deploy.mjs                    # S3 업로드 → 버전 등록 → 환경 갱신 → 상태 확인
```

환경변수는 EB 환경 속성에 둔다(콘솔 Configuration → Environment properties, 또는 `aws elasticbeanstalk update-environment --option-settings`). **`PORT` 는 넣지 않는다**(EB 가 8080 을 준다). 한 프로세스 안에서 회전체 서버가 자식으로 돌고, 드론 쪽 키 이름(`PRIMARY_LLM_*`)이 회전체 쪽(`VRINGON_PRIMARY_*`)으로 자동으로 옮겨지므로 **키는 한 벌만** 넣으면 된다. 합계 4 KB 제한, 콘솔에 평문으로 보인다.

번들에 들어가는 것은 `deploy/eb-bundle.mjs` 가 정한다: 서버가 부르는 파일 · 페이지 · css/js/assets/vendor · `docs/revolve` · `revolve-server/`(회전체 서버 실행 파일만) · `Procfile`. `.md`·도구·데이터·키 파일은 들어가지 않는다.

## 사내 VM 대안: Docker

```bash
git clone https://github.com/jhkim1543/vringon-cad.git && cd vringon-cad
cp deploy/.env.example deploy/.env        # 채운다: 비밀번호 · 세션키 · AI 키
node "VRINGON_회전체 데모/tools/deploy-docs.mjs"   # 보호 빌드 갱신
docker compose -f deploy/docker-compose.yml up -d --build
curl -s http://127.0.0.1:8347/api/status   # {"ai":…} 가 나오면 뜬 것
```

프록시 매니저에는 `3dcad.rebuilder.ai → http://<VM IP>:8347`. HTTPS · HSTS · `X-Forwarded-For` 전달 · `client_max_body_size 80m` · `proxy_read_timeout 300s` (드론 GLB 등록이 크고, 판독이 길다).

## 키와 비밀은 어디에 있나

**전부 `deploy/.env` 의 환경변수.** 저장소에는 없고(`.gitignore`), 이미지에도 굽지 않고, 브라우저로는 어떤 것도 내려가지 않는다. 서버는 환경변수를 먼저 보고, 없을 때만 로컬 개발용 `config.local.json` 을 본다(이 파일도 `.gitignore` 이며 서버가 요청을 막는다).

## 2026-08-19 에 실측으로 찾아 고친 것

라이브(`3dcad.rebuilder.ai`)를 찔러 보니 셋이 열려 있었다. 셋 다 고쳤고, 고친 뒤 같은 항목을 다시 찔러 확인했다.

| 있었던 일 | 지금 |
|---|---|
| `/server.mjs`·`/asset-store.mjs` 가 그대로 내려받아졌다 (프롬프트·연동 로직 노출) | 정적 허용 목록(`guard.mjs`). html · css · js · assets · vendor · revolve 만. `*.mjs`·점 파일·도구·데이터는 404 |
| 로그인은 브라우저 장식. `POST /api/design` 이 인증 없이 200 | 서버 판정(`/api/login` → httpOnly 쿠키). 세션 없으면 모든 API 401. 위조 쿠키 401 |
| 비밀번호 해시가 공개 JS(`js/auth.js`)에 있었다 | 서버 환경변수. 브라우저에는 이름표만 |
| 호출 제한 없음 | 주소당 시간당 120 (쓰기 요청), `X-Forwarded-For` 기준 |
| (추가) | 보안 헤더 · 쿠키 `Secure` · 틀린 로그인 0.6초 지연 |

AI 가 꺼져 있어(`{"ai":false}`) 무사했던 것이지, 키를 넣는 순간 누구나 비용을 태울 수 있는 상태였다. **그래서 키를 넣는 일과 위 조치는 함께 가야 한다.**

## 지금 라이브에 필요한 조치

라이브 서버는 누가 어디에 띄웠는지 이 저장소만으로는 알 수 없다(DNS 는 `43.202.249.180`·`54.116.199.117`, nginx 뒤). 그 서버에서:

1. 최신 `main` 을 받는다 (이 커밋 이후).
2. `deploy/.env` 를 채운다 — 최소한 `VRINGON_DEMO_PASSWORD`, `VRINGON_SESSION_SECRET`. AI 를 켜려면 `PRIMARY_*`·`VRINGON_PRIMARY_*`.
3. `docker compose -f deploy/docker-compose.yml up -d --build`.
4. 확인: `/server.mjs` 404 · `/api/design` (로그인 없이) 401 · 로그인 뒤 `/revolve/` 200.

지금 돌고 있는 것은 예전 코드라 위 표의 "있었던 일" 상태다. 키를 넣기 **전에** 새 코드로 올려야 한다.
