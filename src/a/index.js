
// ==UserScript==
// @name         Safe Baidu fetch demo
// ==/UserScript==

const url1 = 'http://106.12.9.249:1234/xjp';
const url2 = 'http://106.12.9.249:1234/yh-test1';

console.log('脚本准备请求:',url2);
console.log('YHUtils',YHUtils)

YHUtils.request_yh({
  url: url2,
  method: 'get',
  timeout: 3000
}).then(r => {
  console.log('r',r.responseText)
}).catch(err => {
  console.log('err',err)
})
