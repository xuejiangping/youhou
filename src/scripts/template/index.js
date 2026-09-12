// ==UserScript==
// @name         template
// @namespace    http://tampermonkey.net/
// @version      2026-08-27
// @description  模版!
// @author       xuejiangping
// @match        https://www.baidu.com/
// @match         http://127.0.0.1
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_xmlhttpRequest
// @require      https://xuejiangping.github.io/youhou/dist/utils/yh-utils.umd.cjs?a=1
// ==/UserScript==


import { initWatchInput } from './features/WatchInput.js';
initWatchInput()
