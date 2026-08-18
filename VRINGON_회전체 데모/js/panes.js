/* 좁은 화면에서 작업 화면을 한 칸씩 보여 준다 (도면 · 3D · 결과).
   Shows the workspace one pane at a time on narrow screens (drawing, 3D, result).

   왜 이렇게 하나 / Why:
   폰으로 데모를 열어 본 사람이 하는 일은 정해져 있다. 샘플을 고르고, 3D 가 되는 것을 보고,
   돌려 보고, 판독과 해석을 훑는다. 세 칸을 그대로 두면 3D 가 240px 로 찌그러지고, 위아래로
   쌓으면 칸마다 210px 라 아무것도 못 읽는다. 한 번에 한 칸만 꽉 채워 보여 주고 아래 탭으로
   옮기되, 흐름을 따라 저절로도 넘어가게 한다(샘플을 고르면 3D 로, 판독하면 결과로).
   Someone opening the demo on a phone does a fixed set of things: pick a sample, watch it become 3D,
   spin it, skim the reading and analysis. Keeping three columns squeezes the 3D to 240px; stacking
   them leaves 210px per pane. So one pane fills the screen, a bottom tab bar moves between them, and
   the tabs also advance with the flow (pick a sample and you land on 3D; read and you land on result).

   넓은 화면에서는 아무 일도 하지 않는다. CSS 가 막대를 감추고 세 칸을 그대로 둔다.
   On wide screens this does nothing: CSS hides the bar and leaves all three columns in place. */
import { t } from "./i18n.js";

const NARROW = "(max-width: 1023px)";

/* 호출부 / how it is used:
     const panes = initPanes({ rightKo: "결과" });
     panes.show("stage")          칸으로 옮긴다 (좁은 화면에서만 효과) / move to a pane (narrow screens only)
     panes.ready("right", true)   그 칸에 볼 것이 생겼다고 점을 켠다 / mark a pane as having something new
     panes.narrow()               지금 좁은 화면인가 / are we narrow right now */
export function initPanes({ body = "wsBody", leftKo = "도면", rightKo = "결과" } = {}) {
  const el = document.getElementById(body);
  if (!el || document.querySelector(".pane-tabs")) return null;
  const mq = window.matchMedia(NARROW);
  const panes = [{ id: "left", ko: leftKo }, { id: "stage", ko: "3D" }, { id: "right", ko: rightKo }];

  const bar = document.createElement("nav");
  bar.className = "pane-tabs";
  bar.setAttribute("data-i18n-skip", "");     /* 라벨은 t() 로 직접 넣는다 / labels are set with t() here */
  bar.innerHTML = panes.map((p, i) => `<button data-pane="${p.id}"><span class="k">${i + 1}</span>${t(p.ko)}</button>`).join("");
  /* 작업 화면(.ws) 의 맨 아래에 둔다. flex 컬럼이라 order 로 내려간다 / appended to .ws, pushed down by order */
  el.parentNode.appendChild(bar);

  let cur = "left";
  const show = (id) => {
    cur = id;
    el.classList.remove("only-left", "only-stage", "only-right");
    if (mq.matches) el.classList.add(`only-${id}`);
    for (const b of bar.children) {
      const on = b.dataset.pane === id;
      b.classList.toggle("on", on);
      if (on) b.classList.remove("ready");
    }
    /* 칸이 보이면서 크기가 생긴다 → 3D 는 ResizeObserver 로 다시 맞춘다. 한 프레임 뒤에 알린다.
       The pane gains a size when shown; the 3D refits through its ResizeObserver, told a frame later. */
    /* 탭이 가려져 있으면 rAF 가 멈추므로 타이머로 보낸다 / rAF stalls in a hidden tab, so use a timer */
    setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
  };
  const ready = (id, on = true) => { const b = bar.querySelector(`[data-pane="${id}"]`); if (b && id !== cur) b.classList.toggle("ready", on); };
  bar.onclick = (e) => { const b = e.target.closest("button"); if (b) show(b.dataset.pane); };

  show("left");
  mq.addEventListener?.("change", () => { if (mq.matches) show(cur); else el.classList.remove("only-left", "only-stage", "only-right"); });

  return { show, ready, narrow: () => mq.matches, get current() { return cur; } };
}
