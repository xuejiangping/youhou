//#region src/utils/sayHello.js
function e(e = "World") {
	return `Hello, ${e}!`;
}
//#endregion
//#region src/utils/index.js
function t({ method: e, url: t, timeout: n }) {
	return new Promise((r, i) => {
		if (typeof GM_xmlhttpRequest < "u") GM_xmlhttpRequest({
			method: e,
			url: t,
			timeout: n,
			onload: function(e) {
				r(e);
			},
			onerror: function(e) {
				i(e);
			},
			ontimeout: function() {
				i("timeout:" + n);
			}
		});
		else return fetch({
			method: e,
			url: t
		});
	});
}
console.log("YHUtils loaded");
//#endregion
export { t as request_yh, e as sayHello };
