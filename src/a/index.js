
// ==UserScript==
// @name         Safe Baidu fetch demo
// ==/UserScript==

const url1 = 'http://106.12.9.249:1234/xjp';
const url2 = 'http://106.12.9.249:1234/yh-test1';

console.log('脚本准备请求:',url2);


request_yh({
  url: url2,
  method: 'get',
  timeout: 3000
}).then(r => {
  console.log('r',r)
}).catch(err => {
  console.log('err',err)
})


function request_yh({
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