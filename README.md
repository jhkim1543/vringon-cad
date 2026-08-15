# VRINGON CAD — 온프레미스 AI 제품 설계 데모

프롬프트·이미지 → **파트 분리 3D 생성** → 프롬프트/파라미터 편집 → **STEP·DXF 변환** → 폴리곤 최적화.
`cad.rebuilder.ai` 배포용. 랜딩(index) · 솔루션(solutions) · 로그인 · 워크스페이스(app)로 구성.

## 계정
- `Test1` ~ `Test20` / 비밀번호 `test1234` (회원가입 없음, 해시만 소스에 저장)

## 아키텍처
```
브라우저 (정적 SPA, three.js 벤더링 — 폐쇄망 동작)
   │  /api/plan  /api/edit  ← AI 설계 플래너 (프롬프트 → mm 사양)
node server.mjs (무의존성)  ← 폴백 LLM (폴백 소형 모델), 키는 config.local.json (서버 전용, 403 차단)
   └─ AI 미연동 시 로컬 키워드 폴백으로 항상 동작
```
- 씬 단위 = mm. 아키타입 6종(감속기/함체/보틀/브래킷/풀리/핸드헬드)의 모든 치수가 파라미터
- 익스포터: STEP AP214(파트별 솔리드, 공유 에지) · DXF(파트별 레이어) · GLB · OBJ · STL
  — WEB-CAD(web/src/io/exporters.ts) 파이프라인 포팅. "내보내기 검증" 버튼이 왕복 재임포트로 뷰포트와 수치 대조
- 폴리곤: 테셀레이션 3단계(`setQuality`) + SimplifyModifier 감축(용접 후 엣지 콜랩스)
- 생성 모션: 파트가 분해 상태로 등장 → 자동 조립. 도크의 분해 토글로 반복 가능

## 로컬 실행
```bash
node server.mjs 8347
```

## 운영 배포 (완료 상태)
- 서버: GPU 서버 61.107.200.148, `~/vringon-cad`, tmux 세션 `vringon`, 포트 8347
- 런타임: `~/miniforge3/envs/vringon/bin/node` (conda, sudo 불필요)
- nginx: `/etc/nginx/sites-available/vringon-cad.conf` — `cad.rebuilder.ai` → 127.0.0.1:8347, `/__save` 차단
- 재부팅 자동복구: jhkim crontab `@reboot` → tmux 재기동
- 로그: `~/vringon-cad/server.log`

### 남은 2단계 (콘솔 권한 필요)
1. **DNS**: AWS Route 53 → `rebuilder.ai` 호스티드 존 → A 레코드 `cad` → `61.107.200.148`
2. **TLS**: DNS 반영 후 서버에서 `~/vringon-cad/finish-tls.sh` 실행 (certbot --nginx, HTTPS 리다이렉트)

## 공급사명 노출 점검 (커밋 전 필수)

소스 grep만으로는 부족합니다. 두 번 뚫린 곳이 정확히 grep의 사각지대였습니다.
바이너리 안(GLB의 JSON 청크)과 **서버가 실행 중에 새로 만드는 파일**입니다.
저장소의 커밋된 파일이 전부 깨끗한데도 브라우저가 받아 간 메시에는 공급사명이
박혀 있었고, 파트 목록에 그대로 표시됐습니다.

```bash
node tools/qa-vendor-scan.mjs                      # 트리 전체 (바이너리 포함) — 커밋 전
node tools/qa-vendor-scan.mjs --server http://61.107.200.148:8347 <생성된 GLB URL>
                                                   # 실행 중 서버가 실제로 내보내는 바이트
node tools/scrub-assets.mjs [--check] [--dir <경로>] [--rename-opaque]
                                                   # 검출된 자산 세척
```

- 런타임 차단은 `glb-sanitize.mjs` 가 담당하고, `server.mjs` 의 `writeGeneratedMesh()`
  한 곳에서만 디스크에 씁니다. 메시 엔진을 새로 붙이면 **반드시 이 함수를 통과**시키세요.
- `/api/*` 응답은 `json()` 에서 한 번 더 걸러집니다. 상류 장애 메시지(DNS·TLS 오류)에
  공급사 도메인이 실려 오는 경로가 실제로 있습니다.
- `--rename-opaque` 는 공급사명이 없어도 `..._node_<UUID>` 같은 기계 식별자 노드명을
  `part_1` 로 바꿉니다. 예전 바이트 치환 방식이 남긴 이름들이 여기 해당합니다.

## 보안 메모
- `config.local.json` 의 폴백 LLM 키 2개는 채팅에 노출된 적이 있으므로 **데모 후 로테이션 권장**.
  교체 시 서버의 같은 파일만 수정 후 `tmux kill-session -t vringon` → crontab 라인 수동 실행.
- 정적 자산·폰트·three.js 전부 자체 서빙 — 외부 CDN 없음. AI 플래너만 폴백 LLM로 나가며,
  키 제거 시 완전 폐쇄망 모드(로컬 폴백)로 동작.

## 회전체 데모 — 도면 → 파라메트릭 CAD (`VRINGON_회전체 데모/`)
축·부시·핀 같은 회전체 부품의 2D 제작 도면을 시각 AI 가 파라메트릭 DSL 로 읽고, 결정론 실행기가 3D CAD·재렌더링 검증·STEP/USD 를 만듭니다.
- 공개 데모(정적): https://jhkim1543.github.io/vringon-cad/revolve/
- 온프렘(실제 AI 판독 + CadQuery 해석적 STEP): `cd "VRINGON_회전체 데모" && node server.mjs 8349`
- 설명·수치·다음 할 일: [`VRINGON_회전체 데모/HANDOFF.md`](VRINGON_회전체%20데모/HANDOFF.md)
