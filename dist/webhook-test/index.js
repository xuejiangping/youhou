// ==UserScript==
// @name         webhook test hello world !
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  webhook测试脚本!
// @author       xuejiangping
// @match        *://www.baidu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license MIT
// ==/UserScript==
//#region src/utils/sayHello.js
function sayHello(name = "World") {
	console.log(`Hello, ${name}!`);
}
//#endregion
//#region src/scripts/webhook-test/features/webhook.js
function initWebhook() {
	console.log("测试脚本， hello world !");
	sayHello("webhook test 0.3!");
}
//#endregion
//#region src/scripts/webhook-test/index.js
// @license MIT
(function() {
	"use strict";
	initWebhook();
})();
//#endregion
