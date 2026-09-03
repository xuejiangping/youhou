
export * from './sayHello.js';
export function request_yh({
  method,
  url,
  timeout
}) {
  return new Promise((resolve,reject) => {
    if (typeof GM_xmlhttpRequest !== 'undefined') {
      GM_xmlhttpRequest({
        method,
        url,
        timeout,
        onload: function (res) {
          resolve(res)
        },
        onerror: function (err) {
          reject(err)
        },
        ontimeout: function () {
          reject('timeout:' + timeout)
        }
      });
    } else {
      return fetch({
        method,url,
      })
    }
  })


}

console.log('YHUtils loaded')