// ==UserScript==
// @name         🕊️flomo助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  memo变灰，用于防窥
// @author       mefengl
// @match        https://flomoapp.com/mine
// @icon         https://www.google.com/s2/favicons?domain=flomoapp.com
// @license MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function () {
        const memos = document.body.getElementsByClassName('content');
        for(let memo of memos) {
            memo.style.opacity = 0.3;
        }
})

})();
