/* 안내 문서 전용 시작점: 본문 사전을 더한 뒤 언어 전환을 켠다.
   화면(app.js·part2.js) 번들에는 이 사전이 들어가지 않는다. */
import { initI18n, addDict } from "./i18n.js";
import { GUIDE_EN } from "./i18n-en-guide.js";

addDict(GUIDE_EN);
initI18n();
