if(!self.define){let e,c={};const n=(n,s)=>(n=new URL(n+".js",s).href,c[n]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=c,document.head.appendChild(e)}else e=n,importScripts(n),c()})).then((()=>{let e=c[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(c[t])return;let i={};const r=e=>n(e,t),o={module:{uri:t},exports:i,require:r};c[t]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conference/2021/_next/static/chunks/372-f0bbff33b914a055.js",revision:"f0bbff33b914a055"},{url:"/conference/2021/_next/static/chunks/752-7c936637e3e79d24.js",revision:"7c936637e3e79d24"},{url:"/conference/2021/_next/static/chunks/97-7a45fa78267a4c06.js",revision:"7a45fa78267a4c06"},{url:"/conference/2021/_next/static/chunks/main-0eee19c98af23e24.js",revision:"0eee19c98af23e24"},{url:"/conference/2021/_next/static/chunks/pages/%5Blang%5D-0deeb0e505b939ea.js",revision:"0deeb0e505b939ea"},{url:"/conference/2021/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-3a434f86c334eb3e.js",revision:"3a434f86c334eb3e"},{url:"/conference/2021/_next/static/chunks/pages/%5Blang%5D/contact-ed974ecc419d5cb9.js",revision:"ed974ecc419d5cb9"},{url:"/conference/2021/_next/static/chunks/pages/%5Blang%5D/pre-event-1ffabc7a983977b7.js",revision:"1ffabc7a983977b7"},{url:"/conference/2021/_next/static/chunks/pages/%5Blang%5D/privacy-policy-919d4752ccaf9b74.js",revision:"919d4752ccaf9b74"},{url:"/conference/2021/_next/static/chunks/pages/_app-19b41c86be5650fb.js",revision:"19b41c86be5650fb"},{url:"/conference/2021/_next/static/chunks/pages/_error-7608f7038469bf2b.js",revision:"7608f7038469bf2b"},{url:"/conference/2021/_next/static/chunks/pages/index-1813a326cd53e268.js",revision:"1813a326cd53e268"},{url:"/conference/2021/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/conference/2021/_next/static/chunks/reactPlayerDailyMotion.2515fa44c4a384fa.js",revision:"2515fa44c4a384fa"},{url:"/conference/2021/_next/static/chunks/reactPlayerFacebook.30acdda010281f87.js",revision:"30acdda010281f87"},{url:"/conference/2021/_next/static/chunks/reactPlayerFilePlayer.f78f145e63348952.js",revision:"f78f145e63348952"},{url:"/conference/2021/_next/static/chunks/reactPlayerKaltura.98d019806426e401.js",revision:"98d019806426e401"},{url:"/conference/2021/_next/static/chunks/reactPlayerMixcloud.aa504b3f27bfb62c.js",revision:"aa504b3f27bfb62c"},{url:"/conference/2021/_next/static/chunks/reactPlayerPreview.af56ef4efaaa1a7b.js",revision:"af56ef4efaaa1a7b"},{url:"/conference/2021/_next/static/chunks/reactPlayerSoundCloud.c8f57b61ef1b33b9.js",revision:"c8f57b61ef1b33b9"},{url:"/conference/2021/_next/static/chunks/reactPlayerStreamable.fc8799dfc0a7017b.js",revision:"fc8799dfc0a7017b"},{url:"/conference/2021/_next/static/chunks/reactPlayerTwitch.f38c3b1bb2dbd6be.js",revision:"f38c3b1bb2dbd6be"},{url:"/conference/2021/_next/static/chunks/reactPlayerVidyard.cf77ef07026827f3.js",revision:"cf77ef07026827f3"},{url:"/conference/2021/_next/static/chunks/reactPlayerVimeo.1d8aed584f963238.js",revision:"1d8aed584f963238"},{url:"/conference/2021/_next/static/chunks/reactPlayerWistia.135cfe3d79b2d35c.js",revision:"135cfe3d79b2d35c"},{url:"/conference/2021/_next/static/chunks/reactPlayerYouTube.512f571fffc812eb.js",revision:"512f571fffc812eb"},{url:"/conference/2021/_next/static/chunks/webpack-89c8f61d73106264.js",revision:"89c8f61d73106264"},{url:"/conference/2021/_next/static/css/28c42bb555b48081.css",revision:"28c42bb555b48081"},{url:"/conference/2021/_next/static/css/56703c38bf570240.css",revision:"56703c38bf570240"},{url:"/conference/2021/_next/static/css/b04d82041d23249e.css",revision:"b04d82041d23249e"},{url:"/conference/2021/_next/static/css/d107e7910814055c.css",revision:"d107e7910814055c"},{url:"/conference/2021/_next/static/flpP96UhSSMKYD4nGkQGl/_buildManifest.js",revision:"1e11f82542bd7157eac5906f9ecd1f9c"},{url:"/conference/2021/_next/static/flpP96UhSSMKYD4nGkQGl/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conference/2021",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:n,state:s})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
