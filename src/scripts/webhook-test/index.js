// ==UserScript==
// @name         webhook test hello world !
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  webhook测试脚本!
// @author       xuejiangping
// @match        *://www.baidu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license MIT

// ==/UserScript==
import { initWebhook } from './features/webhook.js';
(function () {
  'use strict'

  initWebhook()
})()