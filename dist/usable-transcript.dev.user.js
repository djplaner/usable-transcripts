// ==UserScript==
// @name        usable-transcript -> dev
// @description Example dev of usable Canvas userscript
// @namespace   https://djon.es/
// @version     0.0.1-alpha
// @homepage    https://github.com/djplaner/usable-transcript#readme
// @updateURL	 https://raw.githubusercontent.com/djplaner/usable-transcript/main/dev/usable-transcript.dev.user.js
// @downloadURL	 https://raw.githubusercontent.com/djplaner/usable-transcript/main/dev/usable-transcript.dev.user.js
// @author      David Jones
// @resource    css file:///C:/Users/s2986288/code/usable-transcripts/dev/usable-transcripts.css
// @match       https://*/courses/*
// @run-at      document-idle
// @require     file:///C:/Users/s2986288/code/usable-transcripts/dev/usable-transcripts.js
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant       GM_xmlhttpRequest
// ==/UserScript==

/**
 * Userscript for local development i.e. you're making changes
 * - Will only work with the Chrome browser see
 *   https://www.tampermonkey.net/faq.php#Q204
 * - Modify the file paths for the css and Javascript from
 *       file:///C:/Users/djones/code/svelte/usable-transcript/dist/usable-transcript.js
 *   to the path you've installed the Canvas Collections src code
 */