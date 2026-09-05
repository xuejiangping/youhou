// ==UserScript==
// @name         watch input
// @namespace    http://tampermonkey.net/
// @version      2026-08-27
// @description  watch input!
// @author       xuejiangping
// @match        https://www.baidu.com/
// @match         http://127.0.0.1
// @match        https://www.douyin.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_xmlhttpRequest
// @require      https://xuejiangping.github.io/youhou/dist/utils/yh-utils.umd.cjs?a=1
// ==/UserScript==


import { initWatchInput } from './features/WatchInput.js';
initWatchInput()