/* 위 막대의 파트 전환기 — 어느 화면에서든 Part 1~4 와 처음 화면으로 한 번에 간다.
   The part switcher in the top bar: from any screen, reach Parts 1 to 4 and the picker in one click.

   네 파트가 한 주소에 모이면서 화면마다 제각각이던 "Part 1 / Part 2" 링크를 하나로 합쳤다.
   지금 있는 파트는 밝게, 나머지는 흐리게. 드론 화면(Part 4)은 저장소 루트에 있어 경로 기준이 다르므로
   base 로 어디서 부르는지 알려 준다.
   With the four parts on one host, the ad-hoc "Part 1 / Part 2" links that differed per screen
   become one control. The current part is lit, the rest dimmed. The drone screen (Part 4) lives at
   the repository root, so `base` tells the control where it is being mounted from.

   순수 DOM 이다. 스타일은 css/vringon.css 의 .partnav / pure DOM; styled by .partnav in css/vringon.css */
const PARTS = [
  { n: 1, ko: "회전체", page: "revolve.html" },
  { n: 2, ko: "다시점", page: "assembly.html" },
  { n: 3, ko: "설명·사진", page: "sculpt.html" },
  { n: 4, ko: "드론", page: "app.html", root: true },     /* 저장소 루트 / repository root */
];

/* base: 회전체 폴더에서 부르면 "./", 루트(드론)에서 부르면 "revolve/" / where the revolve pages are, seen from the caller */
export function mountPartNav({ current, base = "./", rootBase = "../", label = "Part" } = {}) {
  const top = document.querySelector(".ws-top");
  if (!top || top.querySelector(".partnav")) return;
  const nav = document.createElement("nav");
  nav.className = "partnav";
  nav.setAttribute("aria-label", "parts");
  nav.setAttribute("data-i18n-skip", "");
  nav.innerHTML = PARTS.map((p) => {
    const href = p.root ? rootBase + p.page : base + p.page;
    const on = p.n === current;
    return `<a class="pn${on ? " on" : ""}" href="${href}" title="${label} ${p.n} · ${p.ko}" ${on ? 'aria-current="page"' : ""}><b>${p.n}</b><span>${p.ko}</span></a>`;
  }).join("") + `<a class="pn home" href="${base}index.html" title="전체 보기">⌂</a>`;
  /* 빵부스러기 바로 뒤, 여백(.sp) 앞에 둔다 / right after the breadcrumb, before the spacer */
  const sp = top.querySelector(".sp");
  sp ? top.insertBefore(nav, sp) : top.appendChild(nav);
}
