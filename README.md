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

## 보안 메모
- `config.local.json` 의 폴백 LLM 키 2개는 채팅에 노출된 적이 있으므로 **데모 후 로테이션 권장**.
  교체 시 서버의 같은 파일만 수정 후 `tmux kill-session -t vringon` → crontab 라인 수동 실행.
- 정적 자산·폰트·three.js 전부 자체 서빙 — 외부 CDN 없음. AI 플래너만 폴백 LLM로 나가며,
  키 제거 시 완전 폐쇄망 모드(로컬 폴백)로 동작.
