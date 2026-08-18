# 외부 공유 · 도메인 배포 · 코드 보호

외부에 링크를 주고 쓰게 하려면 두 가지를 정해야 합니다. **AI 판독을 열어 줄 것인가**(비용이 발생),
그리고 **누구까지 들어오게 할 것인가**(완전 공개 / 코드 아는 사람 / 사내만).

| 선택지 | AI 판독 | 비용 | 걸리는 시간 | 쓸 때 |
|---|---|---|---|---|
| ① 정적 데모 + 우리 도메인 | ✗ (미리 판독한 결과 재생, 올린 도면은 브라우저 외형 판독) | 0 | 30분 | 영업·소개용 링크 |
| ② 컨테이너 + 우리 도메인 | ✓ | 서버 + 판독 호출 | 반나절 | 상대가 자기 도면을 올려 볼 때 |
| ③ 사내 서버 + 터널 | ✓ | 판독 호출만 | 1시간 | 공인 IP 없이 사내 장비로 잠깐 열 때 |

---

## ① 정적 데모를 우리 도메인으로 (지금 바로 가능)

지금 공개본은 `https://jhkim1543.github.io/vringon-cad/revolve/` 입니다. 도메인만 갈아 끼우면 됩니다.

1. DNS 에 레코드를 추가합니다. 서브도메인이면 CNAME 한 줄이면 됩니다.

   | 이름 | 형식 | 값 |
   |---|---|---|
   | `3dcad` (→ 3dcad.rebuilder.ai) | CNAME | `jhkim1543.github.io` |

   최상위 도메인(rebuilder.ai 자체)에 붙이려면 CNAME 대신 A 레코드 네 개(`185.199.108~111.153`)를 씁니다.

2. 저장소의 `docs/CNAME.disabled` 를 `docs/CNAME` 으로 바꿉니다(내용은 `3dcad.rebuilder.ai`). 이미 준비돼 있습니다.
3. GitHub 저장소 Settings → Pages → Custom domain 에 같은 주소를 넣고 **Enforce HTTPS** 를 켭니다. 인증서는 자동입니다.
4. 몇 분 뒤 `https://3dcad.rebuilder.ai/revolve/` 로 열립니다.

주의: 이 도메인은 저장소의 `docs/` 전체(본체 CAD 데모 포함)에 걸립니다. 회전체만 따로 주고 싶으면 별도 저장소나 아래 ②를 씁니다.
GitHub Pages 는 저장소가 공개(public)여야 무료입니다. **저장소를 비공개로 두면서 도메인만 공개**하려면 Cloudflare Pages 를 쓰세요
(저장소 연결 → 출력 폴더 `docs` → Custom domain, 무료, 비공개 저장소 가능. 여기에 Cloudflare Access 를 얹으면 이메일 인증으로 접근을 막을 수 있습니다).

## ② AI 판독까지 되는 서비스 (컨테이너 + 도메인)

`deploy/` 에 한 벌 들어 있습니다. 서버는 **보호 빌드(docs/revolve)만 브라우저로 내보내고**, 원본 모듈·판독 프롬프트·키는 서버 안에만 둡니다.

```bash
cp "VRINGON_회전체 데모/deploy/.env.example" "VRINGON_회전체 데모/deploy/.env"   # 키·접근 코드 채우기
node "VRINGON_회전체 데모/tools/deploy-docs.mjs"                                   # 보호 빌드 갱신
docker compose -f "VRINGON_회전체 데모/deploy/docker-compose.yml" up -d --build
```

- `deploy/Caddyfile` 의 도메인만 바꾸면 인증서(Let's Encrypt)를 자동으로 받고 갱신합니다.
- DNS 는 A 레코드로 서버 공인 IP 를 가리키게 합니다.
- 환경변수: `VRINGON_PRIMARY_URL/KEY/TEXT_MODEL`(판독), `VRINGON_ACCESS_CODE`(접근 코드), `VRINGON_RATE_PER_HOUR`(주소당 시간 제한, 기본 30), `VRINGON_STATIC`(내보낼 정적 폴더).
- 정밀 곡면 STEP 은 파이썬 실행기가 필요해 이 이미지에는 없습니다. 없으면 면 STEP 으로 자동 대체되고, 쓰려면 `pipeline/` 을 담은 이미지를 하나 더 얹으면 됩니다.

접근 코드를 넣으면 어떤 화면도 코드 없이는 열리지 않습니다(판독 API 도 401). 코드를 비우면 완전 공개입니다.

## ③ 사내 서버를 그대로 도메인에 (공인 IP 없이)

```bash
VRINGON_STATIC=../docs/revolve VRINGON_ACCESS_CODE=... npm start        # 사내에서 8349 로 실행
cloudflared tunnel --url http://localhost:8349                          # 임시 주소 즉시 발급
```
고정 주소로 쓰려면 Cloudflare 대시보드에서 터널을 만들고 `3dcad.rebuilder.ai` 를 연결합니다. 방화벽에 구멍을 내지 않아도 됩니다.

---

## 코드를 못 읽게 할 수 있나

**완전히는 불가능합니다.** 브라우저에서 도는 것은 브라우저가 읽을 수 있어야 하므로, 화면에서 동작하는 코드는 원리상 누구나 내려받아 볼 수 있습니다.
"막는다"가 아니라 **"읽어도 쓸모없게, 진짜는 서버에"** 로 접근합니다. 지금 배포에 들어간 것:

| 조치 | 상태 | 효과 |
|---|---|---|
| 한 파일로 묶고 최소화 (`tools/deploy-docs.mjs`) | 적용 | 11개 모듈 구성이 사라지고 이름이 뭉개진 862KB 한 덩어리가 됩니다 |
| 주석 전량 삭제 | 적용 | 설계 의도·판정 근거·함정 기록(우리 자산의 대부분)이 배포본에서 사라집니다 |
| QA 훅(`window.__vringon`) 제거 | 적용 | 콘솔에서 내부 상태·판독기를 직접 만질 수 없습니다 |
| 소스맵 없음 | 적용 | 원본 파일 이름·줄 번호로 되돌릴 수 없습니다 |
| 판독 프롬프트·규칙 | 서버 전용 | `prompts/`·`tools/extract-prompt.mjs` 는 배포본에 들어가지 않습니다. 판독 품질의 핵심은 여기에 있습니다 |
| API 키 | 서버 전용 | 브라우저에 키를 내려보내지 않습니다(환경변수 → 서버 → 외부 호출) |
| 접근 코드 · 시간당 제한 | 선택 | 링크가 퍼져도 아무나·무한정 판독을 돌릴 수 없습니다 |

더 세게 막고 싶다면 (필요해지면):

- **형상 계산까지 서버로**: 지금은 3D·검증·내보내기를 브라우저가 합니다. 서버에서 계산해 결과 파일만 내려주면 브라우저에는 뷰어만 남습니다. 대신 서버 비용과 응답 시간이 늘고, 지금의 "즉시 반영되는 편집"이 사라집니다.
- **난독화 도구 추가**(문자열 암호화·제어 흐름 왜곡): 읽기를 더 어렵게 하지만 속도가 느려지고 디버깅이 어려워집니다. 지금 단계에서는 권하지 않습니다.
- **계약으로 막기**: 데모 링크에 사용 조건을 붙이는 편이 실효가 큽니다. 기술적 조치는 성실한 상대를 막고, 계약은 불성실한 상대를 막습니다.

## 공유 전 점검

- [ ] `node tools/deploy-docs.mjs` 로 보호 빌드 갱신 (`--raw` 는 디버깅용이니 배포에 쓰지 않기)
- [ ] `config.local.json`·`deploy/.env` 가 저장소에 올라가지 않았는지
- [ ] 접근 코드와 시간당 제한을 쓸지 정하기
- [ ] 검색 노출을 막을지 (`deploy/Caddyfile` 의 `X-Robots-Tag`)
- [ ] 처음 열었을 때 사용법 안내가 뜨는지, 상단 "사용법" 으로 다시 열리는지

---

## 3dcad.rebuilder.ai 실행 절차 (2026-08-18 기준)

`rebuilder.ai` 는 이미 Route 53 에 있다. 아래 순서로 하면 되고, **AI 판독을 켜는 순간 브라우저가 아니라 서버가 키를 들고 외부 API 를 부른다**(이 저장소의 server.mjs 가 그 역할이다. 브라우저에는 키가 내려가지 않는다).

### 어느 방식으로 가나

| | A. 사내 IDC 격리 VM + nginx 프록시 매니저 (권장) | B. 서버 PC 포트 개방 + Route 53 A 레코드 |
|---|---|---|
| 공인 IP 노출 | 없음 (공통 IP 뒤) | 서버 PC 의 IP 와 포트가 그대로 노출 |
| 인증서 | 프록시 매니저가 발급 | Caddy 가 발급 (deploy/Caddyfile) |
| 방화벽 | 사내 규칙 안에서 끝 | PC 방화벽·공유기 포트포워딩을 열어야 함 |
| 다른 서비스와 격리 | VM 단위 | 같은 PC 의 다른 것과 섞임 |
| 준비 | VPN · proxmox VM 하나 | 없음 |

**A 를 권한다.** 데모 서버는 외부 API 키를 들고 있으므로 "격리된 VM, 공인 IP 는 프록시 하나" 가 맞다. B 는 빠르지만 개인 PC 를 인터넷에 여는 것이라 데모용으로도 권하지 않는다.

### A. 격리 VM 으로

1. 사내 VPN 연결 → proxmox 에서 VM 하나(Ubuntu 22.04+, 2 vCPU · 4 GB · 20 GB 면 충분). Docker 설치.
2. VM 에 저장소를 놓는다(`git clone` 또는 `git archive` 로 만든 tar). `deploy/.env` 를 채운다:
   ```bash
   cp "VRINGON_회전체 데모/deploy/.env.example" "VRINGON_회전체 데모/deploy/.env"
   # 판독 키 · 접근 코드(VRINGON_ACCESS_CODE=…) · VRINGON_PUBLIC=1
   ```
   VM 안에서만 도는 서비스라 **Caddy 는 빼고 앱만** 띄운다(인증서는 프록시 매니저 몫):
   ```bash
   docker compose -f "VRINGON_회전체 데모/deploy/docker-compose.yml" up -d --build app
   docker compose -f "VRINGON_회전체 데모/deploy/docker-compose.yml" exec app wget -qO- http://127.0.0.1:8349/api/status
   ```
   VM 의 사설 IP 와 포트 **8349** 를 적어 둔다.
3. Route 53 에서 `3dcad.rebuilder.ai` A 레코드 → 사내 서버 공통 공인 IP(단순 라우팅). AWS CLI 가 로그인돼 있으면 아래 한 줄이다(호스티드 존 ID 와 IP 만 채운다):
   ```bash
   aws route53 change-resource-record-sets --hosted-zone-id ZXXXXXXXXXXXXX --change-batch '{"Changes":[{"Action":"UPSERT","ResourceRecordSet":{"Name":"3dcad.rebuilder.ai","Type":"A","TTL":300,"ResourceRecords":[{"Value":"<공통 공인 IP>"}]}}]}'
   ```
4. 사내 nginx 프록시 매니저에 Proxy Host 추가: Domain `3dcad.rebuilder.ai` → Forward `http://<VM 사설 IP>:8349`. **Websockets Support 는 필요 없고, Block Common Exploits 켜기, SSL 탭에서 Let's Encrypt 발급 + Force SSL + HSTS 켜기.** Advanced 에 `client_max_body_size 20m; proxy_read_timeout 300s;` (판독은 이미지 한 장을 통째로 올리고 최대 2분 걸린다).
5. 확인: `https://3dcad.rebuilder.ai/` → 접근 코드 화면 → 코드 입력 → 진입 화면. `https://3dcad.rebuilder.ai/api/status` 는 코드 없이 401.

### B. 서버 PC 포트 개방으로 (권하지 않음)

`docker compose … up -d --build` 로 **Caddy 까지** 띄우고(80·443 을 PC 에서 연다), Route 53 A 레코드를 PC 의 공인 IP 로. 공유기 포트포워딩 80·443 → PC. Caddy 가 인증서를 받는다. `deploy/Caddyfile` 은 이미 3dcad.rebuilder.ai 로 되어 있다.

### 서버가 갖춘 것 (VRINGON_PUBLIC=1 일 때)

| | |
|---|---|
| 키 | 서버 환경변수에만. 브라우저에는 판독 결과만 내려간다 |
| 접근 코드 | 없으면 어떤 화면도 401. 비교는 상수 시간, 틀리면 0.6초 지연. 쿠키 HttpOnly · SameSite=Lax · Secure · 7일 |
| 판독 호출 제한 | 접속 주소당 시간당 30회(`VRINGON_RATE_PER_HOUR`) |
| 개발용 경로 | `/__save` 는 공개 모드에서 404 (프록시 뒤에서는 루프백 검사가 무의미하다) |
| 정적 파일 | 보호 빌드(`docs/revolve`)만. 점 파일·상위 경로 차단 |
| 헤더 | nosniff · X-Frame-Options SAMEORIGIN · Referrer-Policy no-referrer · Permissions-Policy. HSTS 는 프록시에서 |
| 소스 | 원본 모듈·프롬프트는 컨테이너 안에만. 브라우저에는 한 덩어리 최소화 번들 |

### 지금 막힌 것

- 이 컴퓨터의 AWS CLI 는 **로그인이 안 되어 있다**(`aws sts get-caller-identity` → NoCredentials). Route 53 레코드는 `aws login` 또는 키를 환경변수로 넣어 주면 위 한 줄로 바로 만든다. 키를 파일이나 저장소에 두지 말고, 이 세션 셸의 환경변수로만 준다.
- 실행 방식(A/B) 을 정해 주면 그에 맞춰 나머지를 이어서 한다.
