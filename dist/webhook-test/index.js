// ==UserScript==
// @name         webhook test hello world !
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  webhook测试脚本!
// @author       You
// @match        *://www.baidu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license MIT
// ==/UserScript==
//#region src/utils/sayHello.js
function sayHello(name = "World") {
	return `Hello, ${name}!`;
}
//#endregion
//#region src/webhook-test/index.js
// @license MIT
(function() {
	"use strict";
	console.log("测试脚本， hello world !");
	alert("测试脚本， hello world !");
	sayHello("webhook test!");
})();
//#endregion
