//#region src/utils/index.js
function e({ method: e, url: t, timeout: n }) {
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
console.log("99999999", 99999999);
//#endregion
export { e as request_yh };
