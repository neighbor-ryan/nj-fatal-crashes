(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{8912:function(t){!function(){var e={675:function(t,e){"use strict";e.byteLength=function(t){var e=s(t),r=e[0],n=e[1];return(r+n)*3/4-n},e.toByteArray=function(t){var e,r,i=s(t),f=i[0],u=i[1],a=new o((f+u)*3/4-u),h=0,l=u>0?f-4:f;for(r=0;r<l;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],a[h++]=e>>16&255,a[h++]=e>>8&255,a[h++]=255&e;return 2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,a[h++]=255&e),1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,a[h++]=e>>8&255,a[h++]=255&e),a},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],f=0,u=n-o;f<u;f+=16383)i.push(function(t,e,n){for(var o,i=[],f=e;f<n;f+=3)i.push(r[(o=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]))>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return i.join("")}(t,f,f+16383>u?u:f+16383));return 1===o?i.push(r[(e=t[n-1])>>2]+r[e<<4&63]+"=="):2===o&&i.push(r[(e=(t[n-2]<<8)+t[n-1])>>10]+r[e>>4&63]+r[e<<2&63]+"="),i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,u=i.length;f<u;++f)r[f]=i[f],n[i.charCodeAt(f)]=f;function s(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},72:function(t,e,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var n=r(675),o=r(783),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function f(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}function u(t,e,r){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return h(t)}return s(t,e,r)}function s(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!u.isEncoding(e))throw TypeError("Unknown encoding: "+e);var r=0|p(t,e),n=f(r),o=n.write(t,e);return o!==r&&(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return l(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(T(t,ArrayBuffer)||t&&T(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(T(t,SharedArrayBuffer)||t&&T(t.buffer,SharedArrayBuffer)))return function(t,e,r){var n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),u.prototype),n}(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return u.from(n,e,r);var o=function(t){if(u.isBuffer(t)){var e,r=0|c(t.length),n=f(r);return 0===n.length||t.copy(n,0,0,r),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e?f(0):l(t):"Buffer"===t.type&&Array.isArray(t.data)?l(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function a(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return a(t),f(t<0?0:0|c(t))}function l(t){for(var e=t.length<0?0:0|c(t.length),r=f(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function c(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function p(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||T(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return U(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return R(t).length;default:if(o)return n?-1:U(t).length;e=(""+e).toLowerCase(),o=!0}}function y(t,e,r){var o,i,f=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=P[t[i]];return o}(this,e,r);case"utf8":case"utf-8":return b(this,e,r);case"ascii":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":return o=e,i=r,0===o&&i===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,e,r);default:if(f)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),f=!0}}function d(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function g(t,e,r,n,o){var i;if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:v(t,e,r,n,o);if("number"==typeof e)return(e&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):v(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function v(t,e,r,n,o){var i,f=1,u=t.length,s=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;f=2,u/=2,s/=2,r/=2}function a(t,e){return 1===f?t[e]:t.readUInt16BE(e*f)}if(o){var h=-1;for(i=r;i<u;i++)if(a(t,i)===a(e,-1===h?0:i-h)){if(-1===h&&(h=i),i-h+1===s)return h*f}else -1!==h&&(i-=i-h),h=-1}else for(r+s>u&&(r=u-s),i=r;i>=0;i--){for(var l=!0,c=0;c<s;c++)if(a(t,i+c)!==a(e,c)){l=!1;break}if(l)return i}return -1}function b(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,f,u,s,a=t[o],h=null,l=a>239?4:a>223?3:a>191?2:1;if(o+l<=r)switch(l){case 1:a<128&&(h=a);break;case 2:(192&(i=t[o+1]))==128&&(s=(31&a)<<6|63&i)>127&&(h=s);break;case 3:i=t[o+1],f=t[o+2],(192&i)==128&&(192&f)==128&&(s=(15&a)<<12|(63&i)<<6|63&f)>2047&&(s<55296||s>57343)&&(h=s);break;case 4:i=t[o+1],f=t[o+2],u=t[o+3],(192&i)==128&&(192&f)==128&&(192&u)==128&&(s=(15&a)<<18|(63&i)<<12|(63&f)<<6|63&u)>65535&&s<1114112&&(h=s)}null===h?(h=65533,l=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),o+=l}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}function m(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function w(t,e,r,n,o,i){if(!u.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function E(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function A(t,e,r,n,i){return e=+e,r>>>=0,i||E(t,e,r,4,34028234663852886e22,-34028234663852886e22),o.write(t,e,r,n,23,4),r+4}function B(t,e,r,n,i){return e=+e,r>>>=0,i||E(t,e,r,8,17976931348623157e292,-17976931348623157e292),o.write(t,e,r,n,52,8),r+8}e.Buffer=u,e.SlowBuffer=function(t){return+t!=t&&(t=0),u.alloc(+t)},e.INSPECT_MAX_BYTES=50,e.kMaxLength=2147483647,u.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(t,e,r){return s(t,e,r)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(t,e,r){return(a(t),t<=0)?f(t):void 0!==e?"string"==typeof r?f(t).fill(e,r):f(t).fill(e):f(t)},u.allocUnsafe=function(t){return h(t)},u.allocUnsafeSlow=function(t){return h(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype},u.compare=function(t,e){if(T(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),T(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(t)||!u.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;var r,n=u.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(T(i,Uint8Array)&&(i=u.from(i)),!u.isBuffer(i))throw TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},u.byteLength=p,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)d(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)d(this,e,e+3),d(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)d(this,e,e+7),d(this,e+1,e+6),d(this,e+2,e+5),d(this,e+3,e+4);return this},u.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?b(this,0,t):y.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(u.prototype[i]=u.prototype.inspect),u.prototype.compare=function(t,e,r,n,o){if(T(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,f=r-e,s=Math.min(i,f),a=this.slice(n,o),h=t.slice(e,r),l=0;l<s;++l)if(a[l]!==h[l]){i=a[l],f=h[l];break}return i<f?-1:f<i?1:0},u.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return g(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return g(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,f,u,s,a,h,l,c,p,y,d,g=this.length-e;if((void 0===r||r>g)&&(r=g),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var v=!1;;)switch(n){case"hex":return function(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var f=0;f<n;++f){var u=parseInt(e.substr(2*f,2),16);if(u!=u)break;t[r+f]=u}return f}(this,t,e,r);case"utf8":case"utf-8":return s=e,a=r,C(U(t,this.length-s),this,s,a);case"ascii":return h=e,l=r,C(k(t),this,h,l);case"latin1":case"binary":;return o=this,i=t,f=e,u=r,C(k(i),o,f,u);case"base64":return c=e,p=r,C(R(t),this,c,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return y=e,d=r,C(function(t,e){for(var r,n,o=[],i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-y),this,y,d);default:if(v)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),v=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},u.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return Object.setPrototypeOf(n,u.prototype),n},u.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||m(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},u.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||m(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},u.prototype.readUInt8=function(t,e){return t>>>=0,e||m(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return t>>>=0,e||m(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return t>>>=0,e||m(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return t>>>=0,e||m(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return t>>>=0,e||m(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||m(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||m(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},u.prototype.readInt8=function(t,e){return(t>>>=0,e||m(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},u.prototype.readInt16LE=function(t,e){t>>>=0,e||m(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){t>>>=0,e||m(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return t>>>=0,e||m(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return t>>>=0,e||m(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return t>>>=0,e||m(t,4,this.length),o.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return t>>>=0,e||m(t,4,this.length),o.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return t>>>=0,e||m(t,8,this.length),o.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return t>>>=0,e||m(t,8,this.length),o.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;w(this,t,e,r,o,0)}var i=1,f=0;for(this[e]=255&t;++f<r&&(i*=256);)this[e+f]=t/i&255;return e+r},u.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;w(this,t,e,r,o,0)}var i=r-1,f=1;for(this[e+i]=255&t;--i>=0&&(f*=256);)this[e+i]=t/f&255;return e+r},u.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||w(this,t,e,1,255,0),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||w(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||w(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||w(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||w(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);w(this,t,e,r,o-1,-o)}var i=0,f=1,u=0;for(this[e]=255&t;++i<r&&(f*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/f>>0)-u&255;return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);w(this,t,e,r,o-1,-o)}var i=r-1,f=1,u=0;for(this[e+i]=255&t;--i>=0&&(f*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/f>>0)-u&255;return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||w(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||w(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||w(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||w(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||w(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeFloatLE=function(t,e,r){return A(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return A(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return B(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return B(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(!u.isBuffer(t))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,n);else if(this===t&&r<e&&e<n)for(var i=o-1;i>=0;--i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,n),e);return o},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){var o,i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var f=u.isBuffer(t)?t:u.from(t,n),s=f.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=f[o%s]}return this};var O=/[^+/0-9A-Za-z-_]/g;function U(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],f=0;f<n;++f){if((r=t.charCodeAt(f))>55295&&r<57344){if(!o){if(r>56319||f+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function k(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function R(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(O,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function C(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}function T(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}var P=function(){for(var t="0123456789abcdef",e=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}()},783:function(t,e){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */e.read=function(t,e,r,n,o){var i,f,u=8*o-n-1,s=(1<<u)-1,a=s>>1,h=-7,l=r?o-1:0,c=r?-1:1,p=t[e+l];for(l+=c,i=p&(1<<-h)-1,p>>=-h,h+=u;h>0;i=256*i+t[e+l],l+=c,h-=8);for(f=i&(1<<-h)-1,i>>=-h,h+=n;h>0;f=256*f+t[e+l],l+=c,h-=8);if(0===i)i=1-a;else{if(i===s)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),i-=a}return(p?-1:1)*f*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var f,u,s,a=8*i-o-1,h=(1<<a)-1,l=h>>1,c=23===o?5960464477539062e-23:0,p=n?0:i-1,y=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(u=isNaN(e)?1:0,f=h):(f=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-f))<1&&(f--,s*=2),f+l>=1?e+=c/s:e+=c*Math.pow(2,1-l),e*s>=2&&(f++,s/=2),f+l>=h?(u=0,f=h):f+l>=1?(u=(e*s-1)*Math.pow(2,o),f+=l):(u=e*Math.pow(2,l-1)*Math.pow(2,o),f=0));o>=8;t[r+p]=255&u,p+=y,u/=256,o-=8);for(f=f<<o|u,a+=o;a>0;t[r+p]=255&f,p+=y,f/=256,a-=8);t[r+p-y]|=128*d}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}},f=!0;try{e[t](i,i.exports,n),f=!1}finally{f&&delete r[t]}return i.exports}n.ab="//";var o=n(72);t.exports=o}()},4049:function(t,e,r){"use strict";var n=r(6257);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,i,f){if(f!==n){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},507:function(t,e,r){t.exports=r(4049)()},6257:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2436:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(d,e);var r,o,f,u=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=l(d);if(r){var o=l(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return h(t)}(this,t)});function d(t){var e;return function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,d),(e=u.call(this,t)).p=Promise.resolve(),e.resizeHandler=null,e.handlers={},e.syncWindowResize=e.syncWindowResize.bind(h(e)),e.syncEventHandlers=e.syncEventHandlers.bind(h(e)),e.attachUpdateEvents=e.attachUpdateEvents.bind(h(e)),e.getRef=e.getRef.bind(h(e)),e.handleUpdate=e.handleUpdate.bind(h(e)),e.figureCallback=e.figureCallback.bind(h(e)),e.updatePlotly=e.updatePlotly.bind(h(e)),e}return o=[{key:"updatePlotly",value:function(e,r,n){var o=this;this.p=this.p.then(function(){if(!o.unmounting){if(!o.el)throw Error("Missing element reference");return t.react(o.el,{data:o.props.data,layout:o.props.layout,config:o.props.config,frames:o.props.frames})}}).then(function(){!o.unmounting&&(o.syncWindowResize(e),o.syncEventHandlers(),o.figureCallback(r),n&&o.attachUpdateEvents())}).catch(function(t){o.props.onError&&o.props.onError(t)})}},{key:"componentDidMount",value:function(){this.unmounting=!1,this.updatePlotly(!0,this.props.onInitialized,!0)}},{key:"componentDidUpdate",value:function(t){this.unmounting=!1;var e=t.frames&&t.frames.length?t.frames.length:0,r=this.props.frames&&this.props.frames.length?this.props.frames.length:0,n=!(t.layout===this.props.layout&&t.data===this.props.data&&t.config===this.props.config&&r===e),o=void 0!==t.revision,i=t.revision!==this.props.revision;(n||o&&(!o||i))&&this.updatePlotly(!1,this.props.onUpdate,!1)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0,this.figureCallback(this.props.onPurge),this.resizeHandler&&y&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.removeUpdateEvents(),t.purge(this.el)}},{key:"attachUpdateEvents",value:function(){var t=this;this.el&&this.el.removeListener&&p.forEach(function(e){t.el.on(e,t.handleUpdate)})}},{key:"removeUpdateEvents",value:function(){var t=this;this.el&&this.el.removeListener&&p.forEach(function(e){t.el.removeListener(e,t.handleUpdate)})}},{key:"handleUpdate",value:function(){this.figureCallback(this.props.onUpdate)}},{key:"figureCallback",value:function(t){if("function"==typeof t){var e=this.el;t({data:e.data,layout:e.layout,frames:this.el._transitionData?this.el._transitionData._frames:null},this.el)}}},{key:"syncWindowResize",value:function(e){var r=this;y&&(this.props.useResizeHandler&&!this.resizeHandler?(this.resizeHandler=function(){return t.Plots.resize(r.el)},window.addEventListener("resize",this.resizeHandler),e&&this.resizeHandler()):!this.props.useResizeHandler&&this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null))}},{key:"getRef",value:function(t){this.el=t,this.props.debug&&y&&(window.gd=this.el)}},{key:"syncEventHandlers",value:function(){var t=this;c.forEach(function(e){var r=t.props["on"+e],n=t.handlers[e],o=!!n;r&&!o?t.addEventHandler(e,r):!r&&o?t.removeEventHandler(e):r&&o&&r!==n&&(t.removeEventHandler(e),t.addEventHandler(e,r))})}},{key:"addEventHandler",value:function(t,e){this.handlers[t]=e,this.el.on(this.getPlotlyEventName(t),this.handlers[t])}},{key:"removeEventHandler",value:function(t){this.el.removeListener(this.getPlotlyEventName(t),this.handlers[t]),delete this.handlers[t]}},{key:"getPlotlyEventName",value:function(t){return"plotly_"+t.toLowerCase()}},{key:"render",value:function(){return i.default.createElement("div",{id:this.props.divId,style:this.props.style,ref:this.getRef,className:this.props.className})}}],s(d.prototype,o),f&&s(d,f),Object.defineProperty(d,"prototype",{writable:!1}),d}(i.Component);return e.propTypes={data:f.default.arrayOf(f.default.object),config:f.default.object,layout:f.default.object,frames:f.default.arrayOf(f.default.object),revision:f.default.number,onInitialized:f.default.func,onPurge:f.default.func,onError:f.default.func,onUpdate:f.default.func,debug:f.default.bool,style:f.default.object,className:f.default.string,useResizeHandler:f.default.bool,divId:f.default.string},c.forEach(function(t){e.propTypes["on"+t]=f.default.func}),e.defaultProps={debug:!1,useResizeHandler:!1,data:[],style:{position:"relative",display:"inline-block"}},e};var o,i=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var r=u(e);if(r&&r.has(t))return r.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in t)if("default"!==f&&Object.prototype.hasOwnProperty.call(t,f)){var s=i?Object.getOwnPropertyDescriptor(t,f):null;s&&(s.get||s.set)?Object.defineProperty(o,f,s):o[f]=t[f]}return o.default=t,r&&r.set(t,o),o}(r(959)),f=(o=r(507))&&o.__esModule?o:{default:o};function u(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(u=function(t){return t?r:e})(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=["AfterExport","AfterPlot","Animated","AnimatingFrame","AnimationInterrupted","AutoSize","BeforeExport","BeforeHover","ButtonClicked","Click","ClickAnnotation","Deselect","DoubleClick","Framework","Hover","LegendClick","LegendDoubleClick","Relayout","Relayouting","Restyle","Redraw","Selected","Selecting","SliderChange","SliderEnd","SliderStart","SunburstClick","Transitioning","TransitionInterrupted","Unhover","WebGlContextLost"],p=["plotly_restyle","plotly_redraw","plotly_relayout","plotly_relayouting","plotly_doubleclick","plotly_animated","plotly_sunburstclick"],y="undefined"!=typeof window},3408:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(r(2436)),o=i(r(3666));function i(t){return t&&t.__esModule?t:{default:t}}var f=(0,n.default)(o.default);e.default=f}}]);