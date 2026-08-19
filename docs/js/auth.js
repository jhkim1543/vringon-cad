/* VRINGON CAD — 데모 로그인 (브라우저 쪽).
   VRINGON CAD demo login, browser side.

   판정은 서버가 한다. 브라우저에는 비밀번호도 해시도 없다.
   전에는 해시가 이 파일에 있었고 API 는 누구나 부를 수 있었다 — 로그인이 장식이었다.
   지금은 /api/login 이 httpOnly 쿠키를 주고, 세션이 없으면 API 가 401 을 돌려준다.
   여기 sessionStorage 에 남기는 것은 화면용 이름표일 뿐이다. 지어내도 API 는 열리지 않는다.
   The server decides. No password and no hash live in the browser. Before, the hash sat in this
   file and every API was open to anyone, so the login was decoration. Now /api/login sets an
   httpOnly cookie and the APIs return 401 without a session. What sessionStorage keeps here is a
   display label only; forging it opens nothing. */

const KEY = "vringon.session";

export async function login(id, pw) {
  let r;
  try {
    r = await fetch("/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, pw }) });
  } catch (e) {
    return { ok: false, reason: "서버에 닿지 못했습니다: " + (e.message || e) };
  }
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.ok) return { ok: false, reason: j.reason || j.error || "로그인하지 못했습니다." };
  sessionStorage.setItem(KEY, JSON.stringify({ user: j.user, at: Date.now() }));
  return { ok: true, user: j.user };
}

export function currentUser() {
  try {
    const s = JSON.parse(sessionStorage.getItem(KEY));
    return s && s.user ? s.user : null;
  } catch { return null; }
}

export async function logout() {
  sessionStorage.removeItem(KEY);
  try { await fetch("/api/logout"); } catch {}
  location.href = "login.html";
}

/* 화면을 열 때 부른다. 이름표가 없으면 바로 로그인으로, 있으면 서버에 한 번 확인한다
   (쿠키가 만료됐거나 서버가 재시작돼 세션이 풀렸을 수 있다).
   Called when a screen opens. No label → straight to login; with one, confirm once with the server
   (the cookie may have expired, or a restart may have dropped the session). */
export function requireAuth() {
  const u = currentUser();
  if (!u) { location.replace("login.html"); return null; }
  fetch("/api/me").then((r) => r.json()).then((j) => { if (!j.user) { sessionStorage.removeItem(KEY); location.replace("login.html"); } }).catch(() => {});
  return u;
}
