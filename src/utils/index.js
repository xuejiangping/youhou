
export * from './sayHello.js';
export function request_yh(options) {
  return new Promise((resolve,reject) => {
    if (typeof GM_xmlhttpRequest !== 'undefined') {
      GM_xmlhttpRequest({
        ...options,
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
      return fetch(options)
    }
  })


}

console.log('YHUtils loaded')