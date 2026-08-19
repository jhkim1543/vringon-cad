/* 공개 배포용 문지기 — 세션 · 호출 제한 · 정적 허용 목록 · 보안 헤더.
   Gatekeeper for the public deploy: sessions, rate limits, a static allowlist and security headers.

   왜 생겼나 / Why this exists:
   3dcad.rebuilder.ai 에 올라간 서버를 찔러 보니 (1) /server.mjs 와 /asset-store.mjs 가 그대로
   내려받아졌고 (2) 로그인은 브라우저 장식일 뿐 API 는 누구나 인증 없이 부를 수 있었고 (3) 비밀번호
   해시가 공개 JS 안에 있었다. AI 가 꺼져 있어 무사했지만, 키를 넣는 순간 누구나 비용을 태울 수 있다.
   Probing the server at 3dcad.rebuilder.ai showed (1) /server.mjs and /asset-store.mjs downloadable,
   (2) the login was browser-only decoration with every API callable unauthenticated, and (3) the
   password hash sat in public JS. Harmless only while AI was off; the moment keys go in, anyone can
   burn the budget.

   설정은 전부 환경변수다. 소스에는 비밀이 없다 / everything is configured by environment variables:
     VRINGON_DEMO_USERS            쉼표로 나눈 계정 (기본: Test1..Test20,dsht)
     VRINGON_DEMO_PASSWORD         평문 비밀번호 (이것 또는 아래 해시 중 하나)
     VRINGON_DEMO_PASSWORD_SHA256  비밀번호의 sha256 (평문을 환경에 두기 싫을 때)
     VRINGON_SESSION_SECRET        세션 서명 키 (없으면 프로세스마다 새로 — 재시작하면 다시 로그인)
     VRINGON_RATE_PER_HOUR         주소당 시간당 비용 호출 한도 (기본 120, 0 이면 무제한)
     VRINGON_PUBLIC                1 이면 쿠키에 Secure (HTTPS 뒤에서) */
import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const env = process.env;
export const PUBLIC = /^(1|true|yes)$/i.test(env.VRINGON_PUBLIC || "");

/* ---------------------------------------------------------------- 계정 / accounts */
const USERS = (env.VRINGON_DEMO_USERS || [...Array.from({ length: 20 }, (_, i) => `Test${i + 1}`), "dsht"].join(","))
  .split(",").map((s) => s.trim()).filter(Boolean);
/* 해시 하나로 비교한다. 평문이 주어지면 여기서 해시하고, 둘 다 없으면 예전 데모 비밀번호의 해시를 쓴다
   (그래야 이미 돌고 있는 사이트의 로그인이 끊기지 않는다). 어느 쪽이든 브라우저로는 내려가지 않는다.
   One hash to compare against: a plaintext env is hashed here; with neither set, the legacy demo
   hash keeps the running site's login working. Either way nothing reaches the browser. */
const LEGACY_HASH = "937e8d5fbb48bd4949536cd65b8d35c426b80d2f830c5c308e2cdec422ae2244";
const sha = (s) => createHash("sha256").update(String(s)).digest("hex");
const PW_HASH = env.VRINGON_DEMO_PASSWORD ? sha(env.VRINGON_DEMO_PASSWORD) : (env.VRINGON_DEMO_PASSWORD_SHA256 || LEGACY_HASH).toLowerCase();
if (!env.VRINGON_DEMO_PASSWORD && !env.VRINGON_DEMO_PASSWORD_SHA256) console.warn("[guard] 데모 비밀번호가 환경변수에 없어 기본값을 씁니다 (VRINGON_DEMO_PASSWORD 를 주세요)");

/* ---------------------------------------------------------------- 세션 / sessions
   토큰 = user.issuedAt.hmac . 서버가 서명하므로 브라우저가 만들어 낼 수 없다.
   token = user.issuedAt.hmac; server-signed, so the browser cannot forge one. */
const SECRET = env.VRINGON_SESSION_SECRET || randomBytes(32).toString("hex");
if (!env.VRINGON_SESSION_SECRET) console.warn("[guard] VRINGON_SESSION_SECRET 이 없어 임시 키를 씁니다 (재시작하면 세션이 풀립니다)");
const TTL_MS = 7 * 24 * 3600e3;
const sign = (user, at) => createHmac("sha256", SECRET).update(`${user}.${at}`).digest("hex").slice(0, 40);
const eq = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && timingSafeEqual(x, y); };

export function issueSession(user) { const at = Date.now(); return `${user}.${at}.${sign(user, at)}`; }
export function readSession(req) {
  const m = /(?:^|;\s*)vr_session=([^;]+)/.exec(req.headers.cookie || "");
  if (!m) return null;
  const [user, at, sig] = decodeURIComponent(m[1]).split(".");
  if (!user || !at || !sig) return null;
  if (Date.now() - Number(at) > TTL_MS) return null;
  if (!eq(sig, sign(user, at))) return null;
  return USERS.includes(user) ? user : null;
}
export const cookieFor = (token) => `vr_session=${encodeURIComponent(token)}; Path=/; Max-Age=${TTL_MS / 1000}; HttpOnly; SameSite=Lax${PUBLIC ? "; Secure" : ""}`;
export const clearCookie = () => `vr_session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${PUBLIC ? "; Secure" : ""}`;

/* 틀리면 잠깐 기다리게 해 추측을 늦춘다 / a short wait on failure slows guessing */
export async function checkLogin(id, pw) {
  const user = USERS.find((u) => u.toLowerCase() === String(id || "").trim().toLowerCase());
  const ok = !!user && eq(sha(pw || ""), PW_HASH);
  if (!ok) await new Promise((r) => setTimeout(r, 600));
  return ok ? user : null;
}

/* ---------------------------------------------------------------- 호출 제한 / rate limit */
const RATE = Number(env.VRINGON_RATE_PER_HOUR ?? 120);
const hits = new Map();
export const ipOf = (req) => req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress || "?";
export function rateOk(req) {
  if (!RATE) return true;
  const ip = ipOf(req), now = Date.now();
  const h = (hits.get(ip) || []).filter((t) => now - t < 3600e3);
  if (h.length >= RATE) { hits.set(ip, h); return false; }
  h.push(now); hits.set(ip, h); return true;
}

/* ---------------------------------------------------------------- 무엇을 누가 / who may call what
   세션 없이 되는 것: 상태 · 로그인 · 로그아웃 · 문의 · 이벤트 기록. 나머지 API 는 전부 세션.
   Open without a session: status, login, logout, contact, event logging. Every other API needs one. */
const OPEN = new Set(["/api/status", "/api/login", "/api/logout", "/api/contact", "/api/event"]);
export const needsSession = (path) => path.startsWith("/api/") && !OPEN.has(path);
/* 비용이 드는 것: 쓰기(POST/PATCH) 전부. 읽기(GET)는 제한하지 않는다 / costly: every write; reads are free */
export const isCostly = (req, path) => path.startsWith("/api/") && req.method !== "GET" && !OPEN.has(path);

/* ---------------------------------------------------------------- 정적 허용 목록 / static allowlist
   브라우저가 필요로 하는 것만 내보낸다. 그 밖의 모든 것 — *.mjs · 도구 · 데이터 · 점 파일 — 은 없는 것으로 답한다.
   Serve only what the browser needs; everything else — *.mjs, tools, data, dotfiles — answers as not found. */
const DIRS = ["/css/", "/js/", "/assets/", "/vendor/", "/revolve/"];
export function staticAllowed(path) {
  if (path.split("/").some((s) => s.startsWith(".") && s !== "." && s !== "..")) return false;
  if (path === "/" ) return true;
  if (/^\/[A-Za-z0-9_-]+\.html$/.test(path)) return true;             /* 루트의 페이지 / pages at the root */
  if (/^\/(favicon\.ico|robots\.txt)$/.test(path)) return true;
  return DIRS.some((d) => path.startsWith(d)) && !/\.mjs$/.test(path);
}

/* ---------------------------------------------------------------- 보안 헤더 / security headers */
export const SEC_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "no-referrer",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

export const guardSummary = () => `계정 ${USERS.length} · 비밀번호 ${env.VRINGON_DEMO_PASSWORD || env.VRINGON_DEMO_PASSWORD_SHA256 ? "환경변수" : "기본값"} · 세션키 ${env.VRINGON_SESSION_SECRET ? "환경변수" : "임시"} · 제한 ${RATE}/h · ${PUBLIC ? "공개 모드" : "로컬 모드"}`;
