(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{56164:function(e,t,r){"use strict";r.d(t,{g_:function(){return f},t$:function(){return i},UI:function(){return s},F2:function(){return u}});var n=function(e,t,r){if(r||2==arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},a=function(e,t){var r="number"==typeof e?function(t){return t.length>=e}:e;return function(){var e=Array.from(arguments);return r(arguments)?t.apply(this,e):function(r){return t.apply(void 0,n([r],e,!1))}}};function o(e){return function(t,r){return e.map(t,function(){return r})}}Object.prototype.hasOwnProperty;var i=function(e){return{_tag:"Left",left:e}},u=function(e){return{_tag:"Right",right:e}},s=function(e){return function(t){return c(t)?t:u(e(t.right))}},l={URI:"Either",map:function(e,t){return function(e,t,r,n,a,o,i,u,s){switch(arguments.length){case 1:return e;case 2:return t(e);case 3:return r(t(e));case 4:return n(r(t(e)));case 5:return a(n(r(t(e))));case 6:return o(a(n(r(t(e)))));case 7:return i(o(a(n(r(t(e))))));case 8:return u(i(o(a(n(r(t(e)))))));case 9:return(void 0)(u(i(o(a(n(r(t(e))))))));default:for(var l=arguments[0],c=1;c<arguments.length;c++)l=arguments[c](l);return l}}(e,s(t))}};a(2,o(l)),o(l);var c=function(e){return"Left"===e._tag},f=function(e,t){return function(r){return c(r)?e(r.left):t(r.right)}}},43413:function(e){e.exports=(()=>{"use strict";var e={870:(e,t,r)=>{r.r(t),r.d(t,{createEndpoint:()=>a,expose:()=>l,proxy:()=>h,proxyMarker:()=>n,releaseProxy:()=>o,transfer:()=>m,transferHandlers:()=>s,windowEndpoint:()=>y,wrap:()=>f});let n=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),i=Symbol("Comlink.thrown"),u=e=>"object"==typeof e&&null!==e||"function"==typeof e,s=new Map([["proxy",{canHandle:e=>u(e)&&e[n],serialize(e){let{port1:t,port2:r}=new MessageChannel;return l(e,t),[r,[r]]},deserialize:e=>(e.start(),f(e))}],["throw",{canHandle:e=>u(e)&&i in e,serialize:({value:e})=>[e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]],deserialize(e){if(e.isError)throw Object.assign(Error(e.value.message),e.value);throw e.value}}]]);function l(e,t=self){t.addEventListener("message",function r(n){let a;if(!n||!n.data)return;let{id:o,type:u,path:s}=Object.assign({path:[]},n.data),f=(n.data.argumentList||[]).map(b);try{let t=s.slice(0,-1).reduce((e,t)=>e[t],e),r=s.reduce((e,t)=>e[t],e);switch(u){case 0:a=r;break;case 1:t[s.slice(-1)[0]]=b(n.data.value),a=!0;break;case 2:a=r.apply(t,f);break;case 3:a=h(new r(...f));break;case 4:{let{port1:t,port2:r}=new MessageChannel;l(e,r),a=m(t,[t])}break;case 5:a=void 0}}catch(e){a={value:e,[i]:0}}Promise.resolve(a).catch(e=>({value:e,[i]:0})).then(e=>{let[n,a]=v(e);t.postMessage(Object.assign(Object.assign({},n),{id:o}),a),5===u&&(t.removeEventListener("message",r),c(t))})}),t.start&&t.start()}function c(e){"MessagePort"===e.constructor.name&&e.close()}function f(e,t){return function e(t,r=[],n=function(){}){let i=!1,u=new Proxy(n,{get(n,a){if(d(i),a===o)return()=>w(t,{type:5,path:r.map(e=>e.toString())}).then(()=>{c(t),i=!0});if("then"===a){if(0===r.length)return{then:()=>u};let e=w(t,{type:0,path:r.map(e=>e.toString())}).then(b);return e.then.bind(e)}return e(t,[...r,a])},set(e,n,a){d(i);let[o,u]=v(a);return w(t,{type:1,path:[...r,n].map(e=>e.toString()),value:o},u).then(b)},apply(n,o,u){d(i);let s=r[r.length-1];if(s===a)return w(t,{type:4}).then(b);if("bind"===s)return e(t,r.slice(0,-1));let[l,c]=p(u);return w(t,{type:2,path:r.map(e=>e.toString()),argumentList:l},c).then(b)},construct(e,n){d(i);let[a,o]=p(n);return w(t,{type:3,path:r.map(e=>e.toString()),argumentList:a},o).then(b)}});return u}(e,[],t)}function d(e){if(e)throw Error("Proxy has been released and is not useable")}function p(e){var t;let r=e.map(v);return[r.map(e=>e[0]),(t=r.map(e=>e[1]),Array.prototype.concat.apply([],t))]}let g=new WeakMap;function m(e,t){return g.set(e,t),e}function h(e){return Object.assign(e,{[n]:!0})}function y(e,t=self,r="*"){return{postMessage:(t,n)=>e.postMessage(t,r,n),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function v(e){for(let[t,r]of s)if(r.canHandle(e)){let[n,a]=r.serialize(e);return[{type:3,name:t,value:n},a]}return[{type:0,value:e},g.get(e)||[]]}function b(e){switch(e.type){case 3:return s.get(e.name).deserialize(e.value);case 0:return e.value}}function w(e,t,r){return new Promise(n=>{let a=[,,,,].fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",function t(r){r.data&&r.data.id&&r.data.id===a&&(e.removeEventListener("message",t),n(r.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),r)})}},162:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createDbWorker=void 0;let i=o(r(870));async function u(e){if(e.data&&"eval"===e.data.action){let t;let r=new Int32Array(e.data.notify,0,2),n=new Uint8Array(e.data.notify,8);try{t={ok:await c(e.data.request)}}catch(r){console.error("worker request error",e.data.request,r),t={err:String(r)}}let a=(new TextEncoder).encode(JSON.stringify(t));n.set(a,0),r[1]=a.length,Atomics.notify(r,0)}}function s(e){if("BODY"===e.tagName)return"body";let t=[];for(;e.parentElement&&"BODY"!==e.tagName;){if(e.id){t.unshift("#"+e.id);break}{let r=1,n=e;for(;n.previousElementSibling;)n=n.previousElementSibling,r++;t.unshift(e.tagName.toLowerCase()+":nth-child("+r+")")}e=e.parentElement}return t.join(" > ")}function l(e){return Object.keys(e)}async function c(e){if(console.log("dom vtable request",e),"select"===e.type)return[...document.querySelectorAll(e.selector)].map(t=>{let r={};for(let n of e.columns)"selector"===n?r.selector=s(t):"parent"===n?t.parentElement&&(r.parent=t.parentElement?s(t.parentElement):null):"idx"===n||(r[n]=t[n]);return r});if("insert"===e.type){if(!e.value.parent)throw Error('"parent" column must be set when inserting');let t=document.querySelectorAll(e.value.parent);if(0===t.length)throw Error(`Parent element ${e.value.parent} could not be found`);if(t.length>1)throw Error(`Parent element ${e.value.parent} ambiguous (${t.length} results)`);let r=t[0];if(!e.value.tagName)throw Error("tagName must be set for inserting");let n=document.createElement(e.value.tagName);for(let t of l(e.value))if(null!==e.value[t]){if("tagName"===t||"parent"===t)continue;if("idx"===t||"selector"===t)throw Error(`${t} can't be set`);n[t]=e.value[t]}return r.appendChild(n),null}if("update"===e.type){let t=document.querySelector(e.value.selector);if(!t)throw Error(`Element ${e.value.selector} not found!`);let r=[];for(let n of l(e.value)){let a=e.value[n];if("parent"!==n){if("idx"!==n&&"selector"!==n&&a!==t[n]){if(console.log("SETTING ",n,t[n],"->",a),"tagName"===n)throw Error("can't change tagName");r.push(n)}}else if(a!==s(t.parentElement)){let e=document.querySelectorAll(a);if(1!==e.length)throw Error(`Invalid target parent: found ${e.length} matches`);e[0].appendChild(t)}}for(let n of r)t[n]=e.value[n];return null}throw Error(`unknown request ${e.type}`)}i.transferHandlers.set("WORKERSQLPROXIES",{canHandle:e=>!1,serialize(e){throw Error("no")},deserialize:e=>(e.start(),i.wrap(e))}),t.createDbWorker=async function(e,t,r,n=1/0){let a=new Worker(t),o=i.wrap(a),s=await o.SplitFileHttpDatabase(r,e,void 0,n);return a.addEventListener("message",u),{db:s,worker:o,configs:e}}},432:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),a(r(162),t)}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(432)})()},8699:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(50959);let a=new Map,o=new Set;function i(e){for(let t of[...o])t(e)}function u(e){try{return e()}catch(e){return}}var s=function(e,t){let[r]=(0,n.useState)(null==t?void 0:t.defaultValue);if("undefined"==typeof window)return[r,()=>{},{isPersistent:!0,removeItem:()=>{}}];let s=null==t?void 0:t.serializer;return function(e,t,r=!0,s=function(e){return"undefined"===e?void 0:JSON.parse(e)},l=JSON.stringify){a.has(e)||void 0===t||null!==u(()=>sessionStorage.getItem(e))||u(()=>sessionStorage.setItem(e,l(t)));let c=(0,n.useRef)({item:null,parsed:t}),f=(0,n.useSyncExternalStore)((0,n.useCallback)(t=>{let r=r=>{e===r&&t()};return o.add(r),()=>{o.delete(r)}},[e]),()=>{var r;let n=null!==(r=u(()=>sessionStorage.getItem(e)))&&void 0!==r?r:null;if(a.has(e))c.current={item:n,parsed:a.get(e)};else if(n!==c.current.item){let e;try{e=null===n?t:s(n)}catch(r){e=t}c.current={item:n,parsed:e}}return c.current.parsed},()=>t),d=(0,n.useCallback)(t=>{let r=t instanceof Function?t(c.current.parsed):t;try{sessionStorage.setItem(e,l(r)),a.delete(e)}catch(t){a.set(e,r)}i(e)},[e,l]);return(0,n.useEffect)(()=>{if(!r)return;let t=t=>{t.storageArea===u(()=>sessionStorage)&&t.key===e&&i(e)};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)},[e,r]),(0,n.useMemo)(()=>[f,d,{isPersistent:f===t||!a.has(e),removeItem(){u(()=>sessionStorage.removeItem(e)),a.delete(e),i(e)}}],[e,d,f,t])}(e,r,null==t?void 0:t.storageSync,null==s?void 0:s.parse,null==s?void 0:s.stringify)}},73289:function(e,t,r){"use strict";e.exports=r.p+"static/media/sql-wasm.9b4392f6.wasm"},8777:function(e,t,r){"use strict";e.exports=r.p+"static/media/sqlite.worker.b8507771.js"},68325:function(e,t,r){"use strict";r.d(t,{id:function(){return g},tI:function(){return d},o8:function(){return p}});var n=r(43413),a=r(50959),o=Object.prototype.hasOwnProperty;function i(e,t,r){for(r of e.keys())if(u(r,t))return r}function u(e,t){var r,n,a;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&u(e[n],t[n]););return -1===n}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if((a=n)&&"object"==typeof a&&!(a=i(t,a))||!t.has(a))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if((a=n[0])&&"object"==typeof a&&!(a=i(t,a))||!u(n[1],t.get(a)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return -1===n}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return -1===n}if(!r||"object"==typeof e){for(r in n=0,e)if(o.call(e,r)&&++n&&!o.call(t,r)||!(r in t)||!u(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!=e&&t!=t}class s{constructor(e,t){this.id=e,this.msg=t}start(){var e,t;e=this.id,t=this.msg,e&&console.time(`${e}: ${t}`)}end(){var e,t;e=this.id,t=this.msg,e&&console.timeEnd(`${e}: ${t}`)}}async function l(e,t={}){let a=new r.U(r(8777)),o=new r.U(r(73289)),i=Array.isArray(e)?e:[{from:"inline",config:{serverMode:"full",...e,requestChunkSize:e.requestChunkSize??4096}}],{timerId:u}=t,l=new s(u,"created db worker");l.start();let c=await (0,n.createDbWorker)(i,a.toString(),o.toString(),t.maxBytesToRead);return l.end(),c}async function c(e,t={}){return(await l(e,t)).db}var f=r(56164);function d({url:e,requestChunkSize:t,maxBytesToRead:r,timerId:n}){let o=function(e,t={}){var r;let n=(0,a.useRef)(null),[o,i]=(0,a.useState)(0);return r=[e,t],a.useEffect(()=>{(async function(){let{openTimer:r}=t;r&&r.start(),n.current=await c(e,t).catch(r=>(console.error("Error opening db:",r,"props:",e,"opts:",t),null)),i(o+1),console.log(`setDbId(${o+1}):`,e,t)})()},function(e){let t=a.useRef(e),r=a.useRef(0);return u(e,t.current)||(t.current=e,r.current+=1),a.useMemo(()=>t.current,[r.current])}(r)),(0,a.useMemo)(()=>n.current,[o])}((0,a.useMemo)(()=>({url:e,requestChunkSize:t}),[e,t]),(0,a.useMemo)(()=>({timerId:n,maxBytesToRead:r}),[n,r]));return(0,a.useCallback)(e=>{if(!o||!e)return null;let t=new s(n,`ran query ${e}`);return t.start(),o.query(e).then(e=>(t.end(),console.log("rows:",e),(0,f.F2)(e))).catch(e=>(0,f.t$)(e))},[o])}function p({setResult:e,...t}){let r=d(t);return(0,a.useCallback)(t=>{let n=r(t);return n?n.then(t=>{e(t)}):null},[r])}function g({query:e,...t}){let r=d(t),[n,o]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let t=r(e);t?.then(e=>o(e))},[r,e]),n}}}]);