/* 첫 방문 사용법 안내 — 사용 순서대로 화면의 실제 자리를 짚어 주는 툴팁.
   처음 열었을 때 한 번 자동으로 뜨고(기억은 localStorage), 위쪽 "사용법" 버튼으로 다시 볼 수 있다.
   구멍(스포트라이트)은 대상의 화면 좌표에 맞춰 그리며, 아직 나타나지 않은 버튼은 대체 영역을 짚는다. */

const KEY = "vringon.revolve.tour.v1";
const $ = (id) => document.getElementById(id);

const STEPS = [
  { el: "chips", place: "right", title: "샘플 도면으로 시작",
    body: "카드를 누르면 그 도면으로 바로 진행됩니다. 처음이라면 여기서 시작하세요." },
  { el: "drop", place: "right", title: "내 도면 올리기",
    body: "PNG, JPG, SVG 한 장을 올립니다. 회전체 정면도만 읽으니 올리기 전에 안내를 한 번 보세요.",
    link: { href: "./guide.html", text: "올리기 안내 열기" } },
  { el: "stepper", place: "bottom", title: "네 단계로 진행",
    body: "도면 입력, 판독, 3D CAD, 검증 순서입니다. 지금 단계가 위쪽에 표시됩니다." },
  { el: "stageNext", fallback: "stage", fallbackBox: { right: 18, bottom: 84, w: 150, h: 42 }, place: "top",
    title: "다음 단계 버튼", body: "오른쪽 아래 버튼을 누르면 다음 단계가 실행됩니다. 버튼 위 한 줄이 그 단계가 하는 일입니다." },
  { el: "stageActions", fallback: "stage", fallbackBox: { right: 14, top: 122, w: 210, h: 34 }, place: "left",
    title: "보기 전환과 조립 · 시뮬", body: "단면과 도면을 번갈아 보고, 조립 · 시뮬을 켜면 상대 부품과 회전이 붙습니다. 끄면 부품만 남습니다." },
  { el: "sideRight", place: "left", title: "결과와 내려받기",
    body: "판독한 치수를 고치면 3D와 도면이 함께 바뀝니다. 3D가 만들어지면 맨 아래 내보내기에서 STEP, STL, GLB 등으로 받습니다." },
];

let i = 0, root = null, onKey = null;

function rectOf(step) {
  const el = $(step.el);
  const r = el && el.getBoundingClientRect();
  if (r && r.width > 4 && r.height > 4 && el.offsetParent !== null) return r;
  const host = $(step.fallback || "stage");
  if (!host) return null;
  const h = host.getBoundingClientRect(), b = step.fallbackBox || {};
  const w = b.w || 200, hh = b.h || 40;
  const x = b.right !== undefined ? h.right - b.right - w : h.left + (b.left || 0);
  const y = b.bottom !== undefined ? h.bottom - b.bottom - hh : h.top + (b.top || 0);
  return { left: x, top: y, right: x + w, bottom: y + hh, width: w, height: hh };
}

function place(step) {
  const r = rectOf(step);
  const hole = root.querySelector(".tour-hole"), card = root.querySelector(".tour-card");
  if (!r) { root.classList.add("center"); hole.style.display = "none"; return; }
  root.classList.remove("center");
  const pad = 8;
  hole.style.display = "";
  hole.style.left = `${r.left - pad}px`; hole.style.top = `${r.top - pad}px`;
  hole.style.width = `${r.width + pad * 2}px`; hole.style.height = `${r.height + pad * 2}px`;

  const cw = card.offsetWidth || 320, ch = card.offsetHeight || 150, gap = 16;
  let x, y;
  if (step.place === "right") { x = r.right + gap; y = r.top; }
  else if (step.place === "left") { x = r.left - cw - gap; y = r.top; }
  else if (step.place === "top") { x = r.right - cw; y = r.top - ch - gap; }
  else { x = r.left + r.width / 2 - cw / 2; y = r.bottom + gap; }
  x = Math.min(Math.max(12, x), innerWidth - cw - 12);
  y = Math.min(Math.max(12, y), innerHeight - ch - 12);
  card.style.left = `${x}px`; card.style.top = `${y}px`;
}

function render() {
  const step = STEPS[i];
  root.querySelector(".tour-n").textContent = `${i + 1} / ${STEPS.length}`;
  root.querySelector(".tour-t").textContent = step.title;
  root.querySelector(".tour-b").textContent = step.body;
  const a = root.querySelector(".tour-link");
  if (step.link) { a.style.display = ""; a.href = step.link.href; a.textContent = step.link.text; } else a.style.display = "none";
  root.querySelector(".tour-next").textContent = i === STEPS.length - 1 ? "시작하기" : "다음";
  root.querySelector(".tour-prev").style.visibility = i ? "" : "hidden";
  requestAnimationFrame(() => place(step));
}

function close() {
  try { localStorage.setItem(KEY, "1"); } catch {}
  removeEventListener("keydown", onKey);
  removeEventListener("resize", reposition);
  root?.remove(); root = null;
}
function reposition() { if (root) place(STEPS[i]); }
function next(d = 1) {
  if (i + d >= STEPS.length) return close();
  i = Math.max(0, i + d); render();
}

export function startTour() {
  if (root) return;
  i = 0;
  root = document.createElement("div");
  root.className = "tour";
  root.innerHTML = `<div class="tour-hole"></div>
    <div class="tour-card">
      <div class="tour-n"></div>
      <b class="tour-t"></b>
      <p class="tour-b"></p>
      <a class="tour-link" target="_blank"></a>
      <div class="tour-row">
        <button class="tour-skip">건너뛰기</button>
        <span style="flex:1"></span>
        <button class="tour-prev">이전</button>
        <button class="tour-next"></button>
      </div>
    </div>`;
  document.body.appendChild(root);
  root.querySelector(".tour-next").onclick = () => next(1);
  root.querySelector(".tour-prev").onclick = () => next(-1);
  root.querySelector(".tour-skip").onclick = close;
  root.onclick = (e) => { if (e.target === root) next(1); };
  onKey = (e) => { if (e.key === "Escape") close(); else if (e.key === "Enter" || e.key === "ArrowRight") next(1); else if (e.key === "ArrowLeft") next(-1); };
  addEventListener("keydown", onKey);
  addEventListener("resize", reposition);
  render();
}

export function initTour() {
  const btn = $("btnTour");
  if (btn) btn.onclick = () => { root ? close() : startTour(); };
  let seen = false;
  try { seen = localStorage.getItem(KEY) === "1"; } catch {}
  if (!seen) setTimeout(startTour, 700);
}
