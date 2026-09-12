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


(function() {
	//#region src/utils/HotReload.js
	var HotReload = class {
		ws_url;
		ws;
		constructor({ ws_url }) {
			this.ws_url = ws_url;
			this.ws = new WebSocket(this.ws_url);
			this.ws.addEventListener("message", (e) => {
				try {
					const { type } = JSON.parse(e.data);
					if (type == "reload") location.reload();
				} catch (error) {
					console.error(error);
				}
			});
		}
		createConnection() {}
	};
	var url3 = "http://106.12.9.249:1234/yh-get-input";
	console.log("YHUtils", YHUtils);
	var WatchInput = class {
		constructor({ selector, url }) {
			this.url = url;
			this.inputEl = document.querySelector(selector);
			if (!this.inputEl) throw new Error("input element not found");
			this.watch();
		}
		watch() {
			this.inputEl.addEventListener("change", (event) => {
				const value = event.target.value;
				console.log(`Input value changed: ${value}`);
				this.sendValue(value);
			});
		}
		sendValue(value) {
			console.log(`Sending value: ${value}`);
			YHUtils.request_yh({
				url: this.url,
				method: "post",
				data: JSON.stringify({ value })
			}).then((r) => {
				console.log("Value sent successfully:", r.responseText);
			});
		}
	};
	function initWatchInput() {
		console.log("WatchInput 创建实例");
		new WatchInput({
			selector: "#chat-textarea",
			url: url3
		});
	}
	new HotReload({ ws_url: "wss://localhost:1234" });
	initWatchInput();
	console.log("2222222", 2222222);
	//#endregion
})();
