/* 화면 언어 전환 (한국어 · English).
   원문이 한국어이므로 **한국어 문장이 곧 사전 키**다. 화면에 이미 그려진 텍스트를 훑어 영어로 바꾸고,
   그 뒤에 생기는 내용(패널·토스트·목록)은 MutationObserver 가 잡아서 같은 규칙으로 바꾼다.
   덕분에 수백 군데의 호출부를 고치지 않고도 동적으로 만들어지는 문장까지 번역된다.

   사전 항목은 두 가지다.
     · 그대로 일치: "판독 완료" → "Reading done"
     · 자리표시자: "결합부 {n}개" 처럼 숫자·변수가 끼는 문장. {n} 은 숫자, {} 는 아무 토막.
       영어 쪽에서 같은 자리표시자를 같은 순서로 쓰면 값이 그대로 들어간다.
   사전에 없는 한국어는 그대로 둔다(번역 누락은 조용히 한국어로 남는다). lang=en 일 때
   window.__i18nMissing 에 모여서 무엇이 빠졌는지 확인할 수 있다. */

import { EN } from "./i18n-en.js";

const KEY = "vringon.lang";
const hasKo = (s) => /[가-힣]/.test(s);
export const LANGS = { ko: "한국어", en: "English" };

function initialLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q && LANGS[q]) return q;
  try { const s = localStorage.getItem(KEY); if (s && LANGS[s]) return s; } catch {}
  return (navigator.language || "").toLowerCase().startsWith("ko") ? "ko" : "en";
}
export let lang = initialLang();

/* ---------------------------------------------------------------- 사전 */
const exact = new Map();
const patterns = [];   /* {re, en, holes} */
function compile(dict) {
  exact.clear(); patterns.length = 0;
  for (const [ko, en] of Object.entries(dict)) {
    if (!en) continue;
    if (!/\{n?\}/.test(ko)) { exact.set(ko, en); continue; }
    /* 자리표시자를 정규식으로: {n} 은 숫자(소수·쉼표 포함), {} 는 최소 일치 */
    const parts = ko.split(/(\{n\}|\{\})/);
    let src = "^";
    const holes = [];
    for (const p of parts) {
      if (p === "{n}") { src += "(-?[\\d.,]+)"; holes.push("n"); }
      else if (p === "{}") { src += "(.*?)"; holes.push(""); }
      else src += p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    src += "$";
    patterns.push({ re: new RegExp(src), en, holes });
  }
}
const DICT = { ...EN };
compile(DICT);

/* 그 페이지에서만 쓰는 사전을 더한다(안내 문서처럼 분량이 큰 본문). initI18n 앞에서 부른다. */
export function addDict(extra) { Object.assign(DICT, extra); compile(DICT); }

export const missing = new Set();
if (typeof window !== "undefined") window.__i18nMissing = missing;

/* 한 문장 번역. 못 찾으면 원문 그대로 */
export function t(ko, vars) {
  let s = String(ko);
  /* vars: {"": v} 는 이름 없는 자리표시자 {} 하나를 채운다 */
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, v);
  if (lang === "ko") return s;
  const hit = exact.get(s.trim());
  if (hit !== undefined) return keepEdges(s, hit);
  for (const p of patterns) {
    const m = p.re.exec(s.trim());
    if (!m) continue;
    let out = p.en, i = 1;
    out = out.replace(/\{n?\}/g, () => m[i++] ?? "");
    return keepEdges(s, out);
  }
  /* 목록 기호("· ")나 괄호가 붙어 나오는 문장이 많다. 껍데기를 벗겨 순서대로 다시 찾아본다.
     괄호를 먼저 벗기면 "키홈. 토크 전달(회전)" 처럼 문장 끝이 괄호인 항목을 놓친다 → 목록 기호부터. */
  const shells = [];
  const lead = /^([\s\u00b7\-]+)([\s\S]*)$/.exec(s);
  if (lead) shells.push([lead[1], lead[2], ""]);
  const num = /^(\s*\d+\.\s+)([\s\S]*)$/.exec(s);      /* 목록 번호 "1. " */
  if (num) shells.push([num[1], num[2], ""]);
  const paren = /^([\s\u00b7\-]*)\(([\s\S]*)\)(\s*)$/.exec(s);
  if (paren) shells.push([paren[1] + "(", paren[2], ")" + paren[3]]);
  for (const [pre, inner, post] of shells) {
    const hit2 = exact.get(inner.trim());
    if (hit2 !== undefined) return pre + hit2 + post;
    for (const p of patterns) {
      const mm = p.re.exec(inner.trim());
      if (!mm) continue;
      let out = p.en, i = 1;
      out = out.replace(/\{n?\}/g, () => mm[i++] ?? "");
      return pre + out + post;
    }
  }
  if (hasKo(s)) missing.add(s.trim());
  return s;
}
/* 원문의 앞뒤 공백을 살린다(줄바꿈 들여쓰기가 있는 HTML 텍스트 노드) */
function keepEdges(src, out) {
  const a = /^\s*/.exec(src)[0], b = /\s*$/.exec(src)[0];
  return a + out + b;
}

/* ---------------------------------------------------------------- DOM 번역 */
const ATTRS = ["title", "placeholder", "aria-label"];
const SKIP = new Set(["SCRIPT", "STYLE", "CODE", "PRE"]);
const orig = new WeakMap();     /* 노드 → 한국어 원문 (되돌리기용) */

function translateText(node) {
  const el = node.parentElement;
  if (!el || SKIP.has(el.tagName) || el.closest("[data-i18n-skip]")) return;
  const ko = orig.get(node) ?? node.nodeValue;
  if (!hasKo(ko)) return;
  if (!orig.has(node)) orig.set(node, ko);
  const out = t(ko);
  if (node.nodeValue !== out) node.nodeValue = out;
}
function translateAttrs(el) {
  if (el.closest?.("[data-i18n-skip]")) return;
  for (const a of ATTRS) {
    if (!el.hasAttribute?.(a)) continue;
    const key = `__i18n_${a}`;
    const ko = el.dataset[key] ?? el.getAttribute(a);
    if (!hasKo(ko)) continue;
    if (el.dataset[key] === undefined) el.dataset[key] = ko;
    const out = t(ko);
    if (el.getAttribute(a) !== out) el.setAttribute(a, out);
  }
}
export function translateTree(root = document.body) {
  if (!root) return;
  if (root.nodeType === 3) return translateText(root);
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const texts = [];
  for (let n = w.nextNode(); n; n = w.nextNode()) texts.push(n);
  texts.forEach(translateText);
  if (root.nodeType === 1) translateAttrs(root);
  root.querySelectorAll?.("[title],[placeholder],[aria-label]").forEach(translateAttrs);
}

let observer = null;
function observe() {
  if (observer) return;
  observer = new MutationObserver((muts) => {
    if (lang === "ko") return;
    observer.disconnect();
    for (const m of muts) {
      if (m.type === "characterData") translateText(m.target);
      else if (m.type === "attributes") translateAttrs(m.target);
      else m.addedNodes.forEach((n) => { if (n.nodeType === 1 || n.nodeType === 3) translateTree(n); });
    }
    start();
  });
  start();
  function start() { observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS }); }
}

/* ---------------------------------------------------------------- 전환 */
export function setLang(next, { reload = false } = {}) {
  if (!LANGS[next] || next === lang) return;
  lang = next;
  try { localStorage.setItem(KEY, next); } catch {}
  document.documentElement.lang = next;
  /* 주소에 lang= 이 남아 있으면 새로고침 때 그것이 이긴다. 제자리에서 바꿀 때도 함께 고친다. */
  try {
    const q = new URL(location.href);
    if (q.searchParams.get("lang") && q.searchParams.get("lang") !== next) {
      q.searchParams.set("lang", next);
      history.replaceState(null, "", q.toString());
    }
  } catch {}
  if (reload || next === "ko") {
    /* 한국어로 돌아갈 때는 원문을 다시 그리는 편이 확실하다. 주소에 lang= 이 남아 있으면 그것이 이겨서
       고른 언어가 무시되므로 함께 고친다(실측: ?lang=en 에서 한국어를 눌러도 영어로 돌아왔다). */
    const u = new URL(location.href);
    if (u.searchParams.has("lang")) u.searchParams.set("lang", next);
    location.replace(u.toString());
    return;
  }
  translateTree(document.body);
  observe();
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

/* 상단 바에 토글을 넣는다 (버튼 두 개, 지금 언어가 눌린 상태) */
export function mountLangToggle(hostSelector = ".ws-top, .nav") {
  const host = document.querySelector(hostSelector);
  if (!host) return;
  const wrap = document.createElement("div");
  wrap.className = "seg lang-seg";
  wrap.setAttribute("data-i18n-skip", "");
  wrap.innerHTML = `<button data-lang="ko">한국어</button><button data-lang="en">EN</button>`;
  const sp = host.querySelector(".sp");
  if (sp && sp.nextSibling) host.insertBefore(wrap, sp.nextSibling); else host.appendChild(wrap);
  const sync = () => wrap.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));
  wrap.onclick = (e) => { const b = e.target.closest("button"); if (b) { setLang(b.dataset.lang); sync(); } };
  sync();
}

/* 페이지에서 한 번 부른다 */
export function initI18n({ toggle = true } = {}) {
  document.documentElement.lang = lang;
  /* 제목은 body 밖이라 훑기에 걸리지 않는다. "제품 | 설명" 에서 뒷부분만 바꾼다. */
  if (lang !== "ko" && document.title.includes("|")) {
    const [head, ...rest] = document.title.split("|");
    document.title = head + "| " + t(rest.join("|").trim());
  }
  if (toggle) mountLangToggle();
  if (lang !== "ko") { translateTree(document.body); observe(); }
}
