var app=function(){"use strict";function t(){}function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function n(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,r,o){e.$$.on_destroy.push(function(e,...r){if(null==e)return t;const o=e.subscribe(...r);return o.unsubscribe?()=>o.unsubscribe():o}(r,o))}function l(t,e){t.appendChild(e)}function s(t,e,r){t.insertBefore(e,r||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(t,e,r,o){return t.addEventListener(e,r,o),()=>t.removeEventListener(e,r,o)}function f(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function b(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function y(t,e,r){e in t?t[e]="boolean"==typeof t[e]&&""===r||r:b(t,e,r)}function g(t,e,r,o){null===r?t.style.removeProperty(e):t.style.setProperty(e,r,o?"important":"")}let m;function v(t){m=t}function w(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const _=[],x=[];let $=[];const S=[],A=Promise.resolve();let k=!1;function E(t){$.push(t)}const C=new Set;let O=0;function j(){if(0!==O)return;const t=m;do{try{for(;O<_.length;){const t=_[O];O++,v(t),P(t.$$)}}catch(t){throw _.length=0,O=0,t}for(v(null),_.length=0,O=0;x.length;)x.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];C.has(e)||(C.add(e),e())}$.length=0}while(_.length);for(;S.length;)S.pop()();k=!1,C.clear(),v(t)}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const T=new Set;let I;function F(t,e){t&&t.i&&(T.delete(t),t.i(e))}function D(t,e,r,o){if(t&&t.o){if(T.has(t))return;T.add(t),I.c.push((()=>{T.delete(t),o&&(r&&t.d(1),o())})),t.o(e)}else o&&o()}function z(t,r,i,a){const{fragment:l,after_update:s}=t.$$;l&&l.m(r,i),a||E((()=>{const r=t.$$.on_mount.map(e).filter(n);t.$$.on_destroy?t.$$.on_destroy.push(...r):o(r),t.$$.on_mount=[]})),s.forEach(E)}function M(t,e){const r=t.$$;null!==r.fragment&&(!function(t){const e=[],r=[];$.forEach((o=>-1===t.indexOf(o)?e.push(o):r.push(o))),r.forEach((t=>t())),$=e}(r.after_update),o(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(_.push(t),k||(k=!0,A.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,n,i,a,l,s,u,d=[-1]){const p=m;v(e);const h=e.$$={fragment:null,ctx:[],props:s,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:r(),dirty:d,skip_bound:!1,root:n.target||p.$$.root};u&&u(h.root);let f=!1;if(h.ctx=i?i(e,n.props||{},((t,r,...o)=>{const n=o.length?o[0]:r;return h.ctx&&l(h.ctx[t],h.ctx[t]=n)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](n),f&&R(e,t)),r})):[],h.update(),f=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();n.intro&&F(e.$$.fragment),z(e,n.target,n.anchor,n.customElement),j()}v(p)}class L{$destroy(){M(this,1),this.$destroy=t}$on(e,r){if(!n(r))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(r),()=>{const t=o.indexOf(r);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const N=[];
/**
     * @fileoverview Define any Svelte stores used in the app
     * @author @djplanner
     * @license MIT
     * @version 0.0.1
     */
const B=function(e,r=t){let o;const n=new Set;function a(t){if(i(e,t)&&(e=t,o)){const t=!N.length;for(const t of n)t[1](),N.push(t,e);if(t){for(let t=0;t<N.length;t+=2)N[t][0](N[t+1]);N.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(i,l=t){const s=[i,l];return n.add(s),1===n.size&&(o=r(a)||t),i(e),()=>{n.delete(s),0===n.size&&o&&(o(),o=null)}}}}({});function V(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})})),e}function H(t){var e={exports:{}};return t(e,e.exports),e.exports}var W,q=Array.prototype.slice,G=Object.prototype.toString,K=Function.prototype.bind||function(t){var e=this;if("function"!=typeof e||"[object Function]"!==G.call(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var r,o=q.call(arguments,1),n=Math.max(0,e.length-o.length),i=[],a=0;a<n;a++)i.push("$"+a);if(r=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof r){var n=e.apply(this,o.concat(q.call(arguments)));return Object(n)===n?n:this}return e.apply(t,o.concat(q.call(arguments)))})),e.prototype){var l=function(){};l.prototype=e.prototype,r.prototype=new l,l.prototype=null}return r},J=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0},X="undefined"!=typeof Symbol&&Symbol,Z=function(){return"function"==typeof X&&("function"==typeof Symbol&&("symbol"==typeof X("foo")&&("symbol"==typeof Symbol("bar")&&J())))},Y=K.call(Function.call,Object.prototype.hasOwnProperty),Q=SyntaxError,tt=Function,et=TypeError,rt=function(t){try{return tt('"use strict"; return ('+t+").constructor;")()}catch(t){}},ot=Object.getOwnPropertyDescriptor;if(ot)try{ot({},"")}catch(Xl){ot=null}var nt=function(){throw new et},it=ot?function(){try{return nt}catch(t){try{return ot(arguments,"callee").get}catch(t){return nt}}}():nt,at=Z(),lt=Object.getPrototypeOf||function(t){return t.__proto__},st={},ct="undefined"==typeof Uint8Array?W:lt(Uint8Array),ut={"%AggregateError%":"undefined"==typeof AggregateError?W:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?W:ArrayBuffer,"%ArrayIteratorPrototype%":at?lt([][Symbol.iterator]()):W,"%AsyncFromSyncIteratorPrototype%":W,"%AsyncFunction%":st,"%AsyncGenerator%":st,"%AsyncGeneratorFunction%":st,"%AsyncIteratorPrototype%":st,"%Atomics%":"undefined"==typeof Atomics?W:Atomics,"%BigInt%":"undefined"==typeof BigInt?W:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?W:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?W:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?W:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?W:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?W:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?W:FinalizationRegistry,"%Function%":tt,"%GeneratorFunction%":st,"%Int8Array%":"undefined"==typeof Int8Array?W:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?W:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?W:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":at?lt(lt([][Symbol.iterator]())):W,"%JSON%":"object"==typeof JSON?JSON:W,"%Map%":"undefined"==typeof Map?W:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&at?lt((new Map)[Symbol.iterator]()):W,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?W:Promise,"%Proxy%":"undefined"==typeof Proxy?W:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?W:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?W:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&at?lt((new Set)[Symbol.iterator]()):W,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?W:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":at?lt(""[Symbol.iterator]()):W,"%Symbol%":at?Symbol:W,"%SyntaxError%":Q,"%ThrowTypeError%":it,"%TypedArray%":ct,"%TypeError%":et,"%Uint8Array%":"undefined"==typeof Uint8Array?W:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?W:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?W:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?W:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?W:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?W:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?W:WeakSet};try{null.error}catch(Xl){var dt=lt(lt(Xl));ut["%Error.prototype%"]=dt}var pt,ht=function t(e){var r;if("%AsyncFunction%"===e)r=rt("async function () {}");else if("%GeneratorFunction%"===e)r=rt("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=rt("async function* () {}");else if("%AsyncGenerator%"===e){var o=t("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===e){var n=t("%AsyncGenerator%");n&&(r=lt(n.prototype))}return ut[e]=r,r},ft={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},bt=K.call(Function.call,Array.prototype.concat),yt=K.call(Function.apply,Array.prototype.splice),gt=K.call(Function.call,String.prototype.replace),mt=K.call(Function.call,String.prototype.slice),vt=K.call(Function.call,RegExp.prototype.exec),wt=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,_t=/\\(\\)?/g,xt=function(t,e){var r,o=t;if(Y(ft,o)&&(o="%"+(r=ft[o])[0]+"%"),Y(ut,o)){var n=ut[o];if(n===st&&(n=ht(o)),void 0===n&&!e)throw new et("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:n}}throw new Q("intrinsic "+t+" does not exist!")},$t=function(t,e){if("string"!=typeof t||0===t.length)throw new et("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new et('"allowMissing" argument must be a boolean');if(null===vt(/^%?[^%]*%?$/,t))throw new Q("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=function(t){var e=mt(t,0,1),r=mt(t,-1);if("%"===e&&"%"!==r)throw new Q("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new Q("invalid intrinsic syntax, expected opening `%`");var o=[];return gt(t,wt,(function(t,e,r,n){o[o.length]=r?gt(n,_t,"$1"):e||t})),o}(t),o=r.length>0?r[0]:"",n=xt("%"+o+"%",e),i=n.name,a=n.value,l=!1,s=n.alias;s&&(o=s[0],yt(r,bt([0,1],s)));for(var c=1,u=!0;c<r.length;c+=1){var d=r[c],p=mt(d,0,1),h=mt(d,-1);if(('"'===p||"'"===p||"`"===p||'"'===h||"'"===h||"`"===h)&&p!==h)throw new Q("property names with quotes must have matching quotes");if("constructor"!==d&&u||(l=!0),Y(ut,i="%"+(o+="."+d)+"%"))a=ut[i];else if(null!=a){if(!(d in a)){if(!e)throw new et("base intrinsic for "+t+" exists, but the property is not available.");return}if(ot&&c+1>=r.length){var f=ot(a,d);a=(u=!!f)&&"get"in f&&!("originalValue"in f.get)?f.get:a[d]}else u=Y(a,d),a=a[d];u&&!l&&(ut[i]=a)}}return a},St=H((function(t){var e=$t("%Function.prototype.apply%"),r=$t("%Function.prototype.call%"),o=$t("%Reflect.apply%",!0)||K.call(r,e),n=$t("%Object.getOwnPropertyDescriptor%",!0),i=$t("%Object.defineProperty%",!0),a=$t("%Math.max%");if(i)try{i({},"a",{value:1})}catch(t){i=null}t.exports=function(t){var e=o(K,r,arguments);n&&i&&(n(e,"length").configurable&&i(e,"length",{value:1+a(0,t.length-(arguments.length-1))}));return e};var l=function(){return o(K,e,arguments)};i?i(t.exports,"apply",{value:l}):t.exports.apply=l})),At=Object.prototype.toString,kt=function(t){var e=At.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===At.call(t.callee)),r};if(!Object.keys){var Et=Object.prototype.hasOwnProperty,Ct=Object.prototype.toString,Ot=kt,jt=Object.prototype.propertyIsEnumerable,Pt=!jt.call({toString:null},"toString"),Tt=jt.call((function(){}),"prototype"),It=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],Ft=function(t){var e=t.constructor;return e&&e.prototype===t},Dt={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},zt=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!Dt["$"+t]&&Et.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{Ft(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();pt=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===Ct.call(t),o=Ot(t),n=e&&"[object String]"===Ct.call(t),i=[];if(!e&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var a=Tt&&r;if(n&&t.length>0&&!Et.call(t,0))for(var l=0;l<t.length;++l)i.push(String(l));if(o&&t.length>0)for(var s=0;s<t.length;++s)i.push(String(s));else for(var c in t)a&&"prototype"===c||!Et.call(t,c)||i.push(String(c));if(Pt)for(var u=function(t){if("undefined"==typeof window||!zt)return Ft(t);try{return Ft(t)}catch(t){return!1}}(t),d=0;d<It.length;++d)u&&"constructor"===It[d]||!Et.call(t,It[d])||i.push(It[d]);return i}}var Mt=pt,Rt=Array.prototype.slice,Ut=Object.keys,Lt=Ut?function(t){return Ut(t)}:Mt,Nt=Object.keys;Lt.shim=function(){if(Object.keys){var t=function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2);t||(Object.keys=function(t){return kt(t)?Nt(Rt.call(t)):Nt(t)})}else Object.keys=Lt;return Object.keys||Lt};var Bt=Lt,Vt=$t("%Object.defineProperty%",!0),Ht=function(){if(Vt)try{return Vt({},"a",{value:1}),!0}catch(t){return!1}return!1};Ht.hasArrayLengthDefineBug=function(){if(!Ht())return null;try{return 1!==Vt([],"length",{value:1}).length}catch(t){return!0}};var Wt=Ht,qt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Gt=Object.prototype.toString,Kt=Array.prototype.concat,Jt=Object.defineProperty,Xt=Wt(),Zt=Jt&&Xt,Yt=function(t,e,r,o){if(e in t)if(!0===o){if(t[e]===r)return}else if("function"!=typeof(n=o)||"[object Function]"!==Gt.call(n)||!o())return;var n;Zt?Jt(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r},Qt=function(t,e){var r=arguments.length>2?arguments[2]:{},o=Bt(e);qt&&(o=Kt.call(o,Object.getOwnPropertySymbols(e)));for(var n=0;n<o.length;n+=1)Yt(t,o[n],e[o[n]],r[o[n]])};Qt.supportsDescriptors=!!Zt;var te=Qt,ee=St($t("String.prototype.indexOf")),re=function(t,e){var r=$t(t,!!e);return"function"==typeof r&&ee(t,".prototype.")>-1?St(r):r},oe=$t("%Array%"),ne=!oe.isArray&&re("Object.prototype.toString"),ie=oe.isArray||function(t){return"[object Array]"===ne(t)},ae=ie,le=$t("%TypeError%"),se=$t("%Reflect.apply%",!0)||re("Function.prototype.apply"),ce=V(Object.freeze({__proto__:null,default:{}})),ue="function"==typeof Map&&Map.prototype,de=Object.getOwnPropertyDescriptor&&ue?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,pe=ue&&de&&"function"==typeof de.get?de.get:null,he=ue&&Map.prototype.forEach,fe="function"==typeof Set&&Set.prototype,be=Object.getOwnPropertyDescriptor&&fe?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,ye=fe&&be&&"function"==typeof be.get?be.get:null,ge=fe&&Set.prototype.forEach,me="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,ve="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,we="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,_e=Boolean.prototype.valueOf,xe=Object.prototype.toString,$e=Function.prototype.toString,Se=String.prototype.match,Ae=String.prototype.slice,ke=String.prototype.replace,Ee=String.prototype.toUpperCase,Ce=String.prototype.toLowerCase,Oe=RegExp.prototype.test,je=Array.prototype.concat,Pe=Array.prototype.join,Te=Array.prototype.slice,Ie=Math.floor,Fe="function"==typeof BigInt?BigInt.prototype.valueOf:null,De=Object.getOwnPropertySymbols,ze="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,Me="function"==typeof Symbol&&"object"==typeof Symbol.iterator,Re="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Me||"symbol")?Symbol.toStringTag:null,Ue=Object.prototype.propertyIsEnumerable,Le=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function Ne(t,e){if(t===1/0||t===-1/0||t!=t||t&&t>-1e3&&t<1e3||Oe.call(/e/,e))return e;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof t){var o=t<0?-Ie(-t):Ie(t);if(o!==t){var n=String(o),i=Ae.call(e,n.length+1);return ke.call(n,r,"$&_")+"."+ke.call(ke.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return ke.call(e,r,"$&_")}var Be=ce.custom,Ve=Ke(Be)?Be:null;function He(t,e,r){var o="double"===(r.quoteStyle||e)?'"':"'";return o+t+o}function We(t){return ke.call(String(t),/"/g,"&quot;")}function qe(t){return!("[object Array]"!==Ze(t)||Re&&"object"==typeof t&&Re in t)}function Ge(t){return!("[object RegExp]"!==Ze(t)||Re&&"object"==typeof t&&Re in t)}function Ke(t){if(Me)return t&&"object"==typeof t&&t instanceof Symbol;if("symbol"==typeof t)return!0;if(!t||"object"!=typeof t||!ze)return!1;try{return ze.call(t),!0}catch(t){}return!1}var Je=Object.prototype.hasOwnProperty||function(t){return t in this};function Xe(t,e){return Je.call(t,e)}function Ze(t){return xe.call(t)}function Ye(t,e){if(t.indexOf)return t.indexOf(e);for(var r=0,o=t.length;r<o;r++)if(t[r]===e)return r;return-1}function Qe(t,e){if(t.length>e.maxStringLength){var r=t.length-e.maxStringLength,o="... "+r+" more character"+(r>1?"s":"");return Qe(Ae.call(t,0,e.maxStringLength),e)+o}return He(ke.call(ke.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,tr),"single",e)}function tr(t){var e=t.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return r?"\\"+r:"\\x"+(e<16?"0":"")+Ee.call(e.toString(16))}function er(t){return"Object("+t+")"}function rr(t){return t+" { ? }"}function or(t,e,r,o){return t+" ("+e+") {"+(o?nr(r,o):Pe.call(r,", "))+"}"}function nr(t,e){if(0===t.length)return"";var r="\n"+e.prev+e.base;return r+Pe.call(t,","+r)+"\n"+e.prev}function ir(t,e){var r=qe(t),o=[];if(r){o.length=t.length;for(var n=0;n<t.length;n++)o[n]=Xe(t,n)?e(t[n],t):""}var i,a="function"==typeof De?De(t):[];if(Me){i={};for(var l=0;l<a.length;l++)i["$"+a[l]]=a[l]}for(var s in t)Xe(t,s)&&(r&&String(Number(s))===s&&s<t.length||Me&&i["$"+s]instanceof Symbol||(Oe.call(/[^\w$]/,s)?o.push(e(s,t)+": "+e(t[s],t)):o.push(s+": "+e(t[s],t))));if("function"==typeof De)for(var c=0;c<a.length;c++)Ue.call(t,a[c])&&o.push("["+e(a[c])+"]: "+e(t[a[c]],t));return o}var ar,lr,sr=function(t){return null===t?"Null":void 0===t?"Undefined":"function"==typeof t||"object"==typeof t?"Object":"number"==typeof t?"Number":"boolean"==typeof t?"Boolean":"string"==typeof t?"String":void 0},cr=function t(e,r,o,n){var i=r||{};if(Xe(i,"quoteStyle")&&"single"!==i.quoteStyle&&"double"!==i.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(Xe(i,"maxStringLength")&&("number"==typeof i.maxStringLength?i.maxStringLength<0&&i.maxStringLength!==1/0:null!==i.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=!Xe(i,"customInspect")||i.customInspect;if("boolean"!=typeof a&&"symbol"!==a)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Xe(i,"indent")&&null!==i.indent&&"\t"!==i.indent&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Xe(i,"numericSeparator")&&"boolean"!=typeof i.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var l=i.numericSeparator;if(void 0===e)return"undefined";if(null===e)return"null";if("boolean"==typeof e)return e?"true":"false";if("string"==typeof e)return Qe(e,i);if("number"==typeof e){if(0===e)return 1/0/e>0?"0":"-0";var s=String(e);return l?Ne(e,s):s}if("bigint"==typeof e){var c=String(e)+"n";return l?Ne(e,c):c}var u=void 0===i.depth?5:i.depth;if(void 0===o&&(o=0),o>=u&&u>0&&"object"==typeof e)return qe(e)?"[Array]":"[Object]";var d=function(t,e){var r;if("\t"===t.indent)r="\t";else{if(!("number"==typeof t.indent&&t.indent>0))return null;r=Pe.call(Array(t.indent+1)," ")}return{base:r,prev:Pe.call(Array(e+1),r)}}(i,o);if(void 0===n)n=[];else if(Ye(n,e)>=0)return"[Circular]";function p(e,r,a){if(r&&(n=Te.call(n)).push(r),a){var l={depth:i.depth};return Xe(i,"quoteStyle")&&(l.quoteStyle=i.quoteStyle),t(e,l,o+1,n)}return t(e,i,o+1,n)}if("function"==typeof e&&!Ge(e)){var h=function(t){if(t.name)return t.name;var e=Se.call($e.call(t),/^function\s*([\w$]+)/);if(e)return e[1];return null}(e),f=ir(e,p);return"[Function"+(h?": "+h:" (anonymous)")+"]"+(f.length>0?" { "+Pe.call(f,", ")+" }":"")}if(Ke(e)){var b=Me?ke.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):ze.call(e);return"object"!=typeof e||Me?b:er(b)}if(function(t){if(!t||"object"!=typeof t)return!1;if("undefined"!=typeof HTMLElement&&t instanceof HTMLElement)return!0;return"string"==typeof t.nodeName&&"function"==typeof t.getAttribute}(e)){for(var y="<"+Ce.call(String(e.nodeName)),g=e.attributes||[],m=0;m<g.length;m++)y+=" "+g[m].name+"="+He(We(g[m].value),"double",i);return y+=">",e.childNodes&&e.childNodes.length&&(y+="..."),y+="</"+Ce.call(String(e.nodeName))+">"}if(qe(e)){if(0===e.length)return"[]";var v=ir(e,p);return d&&!function(t){for(var e=0;e<t.length;e++)if(Ye(t[e],"\n")>=0)return!1;return!0}(v)?"["+nr(v,d)+"]":"[ "+Pe.call(v,", ")+" ]"}if(function(t){return!("[object Error]"!==Ze(t)||Re&&"object"==typeof t&&Re in t)}(e)){var w=ir(e,p);return"cause"in Error.prototype||!("cause"in e)||Ue.call(e,"cause")?0===w.length?"["+String(e)+"]":"{ ["+String(e)+"] "+Pe.call(w,", ")+" }":"{ ["+String(e)+"] "+Pe.call(je.call("[cause]: "+p(e.cause),w),", ")+" }"}if("object"==typeof e&&a){if(Ve&&"function"==typeof e[Ve]&&ce)return ce(e,{depth:u-o});if("symbol"!==a&&"function"==typeof e.inspect)return e.inspect()}if(function(t){if(!pe||!t||"object"!=typeof t)return!1;try{pe.call(t);try{ye.call(t)}catch(t){return!0}return t instanceof Map}catch(t){}return!1}(e)){var _=[];return he&&he.call(e,(function(t,r){_.push(p(r,e,!0)+" => "+p(t,e))})),or("Map",pe.call(e),_,d)}if(function(t){if(!ye||!t||"object"!=typeof t)return!1;try{ye.call(t);try{pe.call(t)}catch(t){return!0}return t instanceof Set}catch(t){}return!1}(e)){var x=[];return ge&&ge.call(e,(function(t){x.push(p(t,e))})),or("Set",ye.call(e),x,d)}if(function(t){if(!me||!t||"object"!=typeof t)return!1;try{me.call(t,me);try{ve.call(t,ve)}catch(t){return!0}return t instanceof WeakMap}catch(t){}return!1}(e))return rr("WeakMap");if(function(t){if(!ve||!t||"object"!=typeof t)return!1;try{ve.call(t,ve);try{me.call(t,me)}catch(t){return!0}return t instanceof WeakSet}catch(t){}return!1}(e))return rr("WeakSet");if(function(t){if(!we||!t||"object"!=typeof t)return!1;try{return we.call(t),!0}catch(t){}return!1}(e))return rr("WeakRef");if(function(t){return!("[object Number]"!==Ze(t)||Re&&"object"==typeof t&&Re in t)}(e))return er(p(Number(e)));if(function(t){if(!t||"object"!=typeof t||!Fe)return!1;try{return Fe.call(t),!0}catch(t){}return!1}(e))return er(p(Fe.call(e)));if(function(t){return!("[object Boolean]"!==Ze(t)||Re&&"object"==typeof t&&Re in t)}(e))return er(_e.call(e));if(function(t){return!("[object String]"!==Ze(t)||Re&&"object"==typeof t&&Re in t)}(e))return er(p(String(e)));if(!function(t){return!("[object Date]"!==Ze(t)||Re&&"object"==typeof t&&Re in t)}(e)&&!Ge(e)){var $=ir(e,p),S=Le?Le(e)===Object.prototype:e instanceof Object||e.constructor===Object,A=e instanceof Object?"":"null prototype",k=!S&&Re&&Object(e)===e&&Re in e?Ae.call(Ze(e),8,-1):A?"Object":"",E=(S||"function"!=typeof e.constructor?"":e.constructor.name?e.constructor.name+" ":"")+(k||A?"["+Pe.call(je.call([],k||[],A||[]),": ")+"] ":"");return 0===$.length?E+"{}":d?E+"{"+nr($,d)+"}":E+"{ "+Pe.call($,", ")+" }"}return String(e)},ur=function(t){return"string"==typeof t||"symbol"==typeof t},dr=function(t){return"symbol"==typeof t?"Symbol":"bigint"==typeof t?"BigInt":sr(t)},pr=$t("%TypeError%"),hr=$t("%TypeError%"),fr=function(t,e){if(null==t)throw new hr(e||"Cannot call method on "+t);return t},br=$t("%Object%"),yr=function(t){return fr(t),br(t)},gr=$t("%TypeError%"),mr=Function.prototype.toString,vr="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof vr&&"function"==typeof Object.defineProperty)try{ar=Object.defineProperty({},"length",{get:function(){throw lr}}),lr={},vr((function(){throw 42}),null,ar)}catch(el){el!==lr&&(vr=null)}else vr=null;var wr=/^\s*class\b/,_r=function(t){try{var e=mr.call(t);return wr.test(e)}catch(t){return!1}},xr=function(t){try{return!_r(t)&&(mr.call(t),!0)}catch(t){return!1}},$r=Object.prototype.toString,Sr="function"==typeof Symbol&&!!Symbol.toStringTag,Ar=!(0 in[,]),kr=function(){return!1};if("object"==typeof document){var Er=document.all;$r.call(Er)===$r.call(document.all)&&(kr=function(t){if((Ar||!t)&&(void 0===t||"object"==typeof t))try{var e=$r.call(t);return("[object HTMLAllCollection]"===e||"[object HTML document.all class]"===e||"[object HTMLCollection]"===e||"[object Object]"===e)&&null==t("")}catch(t){}return!1})}var Cr,Or,jr,Pr,Tr=vr?function(t){if(kr(t))return!0;if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;try{vr(t,null,ar)}catch(t){if(t!==lr)return!1}return!_r(t)&&xr(t)}:function(t){if(kr(t))return!0;if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if(Sr)return xr(t);if(_r(t))return!1;var e=$r.call(t);return!("[object Function]"!==e&&"[object GeneratorFunction]"!==e&&!/^\[object HTML/.test(e))&&xr(t)},Ir=function(t,e){if(!ur(e))throw new gr("Assertion failed: IsPropertyKey(P) is not true");return yr(t)[e]},Fr=Tr,Dr=$t("%TypeError%"),zr=function(){return J()&&!!Symbol.toStringTag},Mr=zr();if(Mr){Cr=re("Object.prototype.hasOwnProperty"),Or=re("RegExp.prototype.exec"),jr={};var Rr=function(){throw jr};Pr={toString:Rr,valueOf:Rr},"symbol"==typeof Symbol.toPrimitive&&(Pr[Symbol.toPrimitive]=Rr)}var Ur=re("Object.prototype.toString"),Lr=Object.getOwnPropertyDescriptor,Nr=Mr?function(t){if(!t||"object"!=typeof t)return!1;var e=Lr(t,"lastIndex");if(!(e&&Cr(e,"value")))return!1;try{Or(t,Pr)}catch(t){return t===jr}}:function(t){return!(!t||"object"!=typeof t&&"function"!=typeof t)&&"[object RegExp]"===Ur(t)},Br=function(t){return!!t},Vr=$t("%Symbol.match%",!0),Hr=$t("%String%"),Wr=$t("%TypeError%"),qr=function(){return"string"==typeof function(){}.name},Gr=Object.getOwnPropertyDescriptor;if(Gr)try{Gr([],"length")}catch(Xl){Gr=null}qr.functionsHaveConfigurableNames=function(){if(!qr()||!Gr)return!1;var t=Gr((function(){}),"name");return!!t&&!!t.configurable};var Kr=Function.prototype.bind;qr.boundFunctionsHaveNames=function(){return qr()&&"function"==typeof Kr&&""!==function(){}.bind().name};var Jr=qr,Xr=H((function(t){var e=Jr.functionsHaveConfigurableNames(),r=Object,o=TypeError;t.exports=function(){if(null!=this&&this!==r(this))throw new o("RegExp.prototype.flags getter called on non-object");var t="";return this.hasIndices&&(t+="d"),this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.dotAll&&(t+="s"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t},e&&Object.defineProperty&&Object.defineProperty(t.exports,"name",{value:"get flags"})})),Zr=te.supportsDescriptors,Yr=Object.getOwnPropertyDescriptor,Qr=function(){if(Zr&&"gim"===/a/gim.flags){var t=Yr(RegExp.prototype,"flags");if(t&&"function"==typeof t.get&&"boolean"==typeof RegExp.prototype.dotAll&&"boolean"==typeof RegExp.prototype.hasIndices){var e="",r={};if(Object.defineProperty(r,"hasIndices",{get:function(){e+="d"}}),Object.defineProperty(r,"sticky",{get:function(){e+="y"}}),"dy"===e)return t.get}}return Xr},to=te.supportsDescriptors,eo=Object.getOwnPropertyDescriptor,ro=Object.defineProperty,oo=TypeError,no=Object.getPrototypeOf,io=/a/,ao=St(Qr());te(ao,{getPolyfill:Qr,implementation:Xr,shim:function(){if(!to||!no)throw new oo("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var t=Qr(),e=no(io),r=eo(e,"flags");return r&&r.get===t||ro(e,"flags",{configurable:!0,enumerable:!1,get:t}),t}});var lo=ao,so=function(t){return"number"==typeof t&&t>=55296&&t<=56319},co=function(t){return"number"==typeof t&&t>=56320&&t<=57343},uo=$t("%TypeError%"),po=$t("%String.fromCharCode%"),ho=function(t,e){if(!so(t)||!co(e))throw new uo("Assertion failed: `lead` must be a leading surrogate char code, and `trail` must be a trailing surrogate char code");return po(t)+po(e)},fo=$t("%TypeError%"),bo=re("String.prototype.charAt"),yo=re("String.prototype.charCodeAt"),go=$t("%Math.abs%"),mo=Math.floor,vo=Number.isNaN||function(t){return t!=t},wo=vo,_o=function(t){return go(t)},xo=function(t){return"BigInt"===dr(t)?t:mo(t)},$o=function(t){return("number"==typeof t||"bigint"==typeof t)&&!wo(t)&&t!==1/0&&t!==-1/0},So=$t("%Math%"),Ao=$t("%Number%").MAX_SAFE_INTEGER||So.pow(2,53)-1,ko=function(t,e){if("String"!==dr(t))throw new fo("Assertion failed: `string` must be a String");var r=t.length;if(e<0||e>=r)throw new fo("Assertion failed: `position` must be >= 0, and < the length of `string`");var o=yo(t,e),n=bo(t,e),i=so(o),a=co(o);if(!i&&!a)return{"[[CodePoint]]":n,"[[CodeUnitCount]]":1,"[[IsUnpairedSurrogate]]":!1};if(a||e+1===r)return{"[[CodePoint]]":n,"[[CodeUnitCount]]":1,"[[IsUnpairedSurrogate]]":!0};var l=yo(t,e+1);return co(l)?{"[[CodePoint]]":ho(o,l),"[[CodeUnitCount]]":2,"[[IsUnpairedSurrogate]]":!1}:{"[[CodePoint]]":n,"[[CodeUnitCount]]":1,"[[IsUnpairedSurrogate]]":!0}},Eo=function(t){if("Number"!==dr(t)||wo(t)||!$o(t))return!1;var e=_o(t);return xo(e)===e},Co=Ao,Oo=$t("%TypeError%"),jo=$t("%TypeError%"),Po=Wt()&&$t("%Object.defineProperty%",!0),To=Wt.hasArrayLengthDefineBug(),Io=To&&ie,Fo=re("Object.prototype.propertyIsEnumerable"),Do=function(t){return Y(t,"[[StartIndex]]")&&Y(t,"[[EndIndex]]")&&t["[[StartIndex]]"]>=0&&t["[[EndIndex]]"]>=t["[[StartIndex]]"]&&String(parseInt(t["[[StartIndex]]"],10))===String(t["[[StartIndex]]"])&&String(parseInt(t["[[EndIndex]]"],10))===String(t["[[EndIndex]]"])},zo=$t("%TypeError%"),Mo=$t("%SyntaxError%"),Ro={"Property Descriptor":function(t){var e={"[[Configurable]]":!0,"[[Enumerable]]":!0,"[[Get]]":!0,"[[Set]]":!0,"[[Value]]":!0,"[[Writable]]":!0};if(!t)return!1;for(var r in t)if(Y(t,r)&&!e[r])return!1;var o=Y(t,"[[Value]]"),n=Y(t,"[[Get]]")||Y(t,"[[Set]]");if(o&&n)throw new zo("Property Descriptors may not be both accessor and data descriptors");return!0},"Match Record":Do,"Iterator Record":function(t){return Y(t,"[[Iterator]]")&&Y(t,"[[NextMethod]]")&&Y(t,"[[Done]]")},"PromiseCapability Record":function(t){return!!t&&Y(t,"[[Resolve]]")&&"function"==typeof t["[[Resolve]]"]&&Y(t,"[[Reject]]")&&"function"==typeof t["[[Reject]]"]&&Y(t,"[[Promise]]")&&t["[[Promise]]"]&&"function"==typeof t["[[Promise]]"].then},"AsyncGeneratorRequest Record":function(t){return!!t&&Y(t,"[[Completion]]")&&Y(t,"[[Capability]]")&&Ro["PromiseCapability Record"](t["[[Capability]]"])}},Uo=function(t,e,r,o){var n=Ro[e];if("function"!=typeof n)throw new Mo("unknown record type: "+e);if("Object"!==t(o)||!n(o))throw new zo(r+" must be a "+e)},Lo=function(t){if(void 0===t)return t;var e={};return"[[Value]]"in t&&(e.value=t["[[Value]]"]),"[[Writable]]"in t&&(e.writable=!!t["[[Writable]]"]),"[[Get]]"in t&&(e.get=t["[[Get]]"]),"[[Set]]"in t&&(e.set=t["[[Set]]"]),"[[Enumerable]]"in t&&(e.enumerable=!!t["[[Enumerable]]"]),"[[Configurable]]"in t&&(e.configurable=!!t["[[Configurable]]"]),e},No=function(t,e,r,o,n,i){if(!Po){if(!t(i))return!1;if(!i["[[Configurable]]"]||!i["[[Writable]]"])return!1;if(n in o&&Fo(o,n)!==!!i["[[Enumerable]]"])return!1;var a=i["[[Value]]"];return o[n]=a,e(o[n],a)}return To&&"length"===n&&"[[Value]]"in i&&Io(o)&&o.length!==i["[[Value]]"]?(o.length=i["[[Value]]"],o.length===i["[[Value]]"]):(Po(o,n,r(i)),!0)},Bo=function(t){return void 0!==t&&Uo(dr,"Property Descriptor","Desc",t),Lo(t)},Vo=function(t){return void 0!==t&&(Uo(dr,"Property Descriptor","Desc",t),!(!Y(t,"[[Value]]")&&!Y(t,"[[Writable]]")))},Ho=function(t,e){return t===e?0!==t||1/t==1/e:wo(t)&&wo(e)},Wo=$t("%TypeError%"),qo=$t("%TypeError%"),Go=$t("%WeakMap%",!0),Ko=$t("%Map%",!0),Jo=re("WeakMap.prototype.get",!0),Xo=re("WeakMap.prototype.set",!0),Zo=re("WeakMap.prototype.has",!0),Yo=re("Map.prototype.get",!0),Qo=re("Map.prototype.set",!0),tn=re("Map.prototype.has",!0),en=function(t,e){for(var r,o=t;null!==(r=o.next);o=r)if(r.key===e)return o.next=r.next,r.next=t.next,t.next=r,r},rn=function(){var t,e,r,o={assert:function(t){if(!o.has(t))throw new qo("Side channel does not contain "+cr(t))},get:function(o){if(Go&&o&&("object"==typeof o||"function"==typeof o)){if(t)return Jo(t,o)}else if(Ko){if(e)return Yo(e,o)}else if(r)return function(t,e){var r=en(t,e);return r&&r.value}(r,o)},has:function(o){if(Go&&o&&("object"==typeof o||"function"==typeof o)){if(t)return Zo(t,o)}else if(Ko){if(e)return tn(e,o)}else if(r)return function(t,e){return!!en(t,e)}(r,o);return!1},set:function(o,n){Go&&o&&("object"==typeof o||"function"==typeof o)?(t||(t=new Go),Xo(t,o,n)):Ko?(e||(e=new Ko),Qo(e,o,n)):(r||(r={key:{},next:null}),function(t,e,r){var o=en(t,e);o?o.value=r:t.next={key:e,next:t.next,value:r}}(r,o,n))}};return o}(),on=$t("%TypeError%"),nn={assert:function(t,e){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new on("`O` is not an object");if("string"!=typeof e)throw new on("`slot` must be a string");if(rn.assert(t),!nn.has(t,e))throw new on("`"+e+"` is not present on `O`")},get:function(t,e){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new on("`O` is not an object");if("string"!=typeof e)throw new on("`slot` must be a string");var r=rn.get(t);return r&&r["$"+e]},has:function(t,e){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new on("`O` is not an object");if("string"!=typeof e)throw new on("`slot` must be a string");var r=rn.get(t);return!!r&&Y(r,"$"+e)},set:function(t,e,r){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new on("`O` is not an object");if("string"!=typeof e)throw new on("`slot` must be a string");var o=rn.get(t);o||(o={},rn.set(t,o)),o["$"+e]=r}};Object.freeze&&Object.freeze(nn);var an=nn,ln={foo:{}},sn=Object,cn=function(t,e){for(var r=0;r<t.length;r+=1)e(t[r],r,t)},un=$t("%Object.create%",!0),dn=$t("%TypeError%"),pn=$t("%SyntaxError%"),hn={__proto__:ln}.foo===ln.foo&&!({__proto__:null}instanceof sn),fn=function(t,e){var r=arguments.length>2?arguments[2]:[];if(!ae(r))throw new le("Assertion failed: optional `argumentsList`, if provided, must be a List");return se(t,e,r)},bn=function(t,e){if("Object"!==dr(t))throw new pr("Assertion failed: Type(O) is not Object");if(!ur(e))throw new pr("Assertion failed: IsPropertyKey(P) is not true, got "+cr(e));return t[e]},yn=$t("%TypeError%"),gn=re("RegExp.prototype.exec"),mn=$t("%TypeError%"),vn=function(){try{return delete[].length,!0}catch(t){return!1}}(),wn=function(t){return null===t||"function"!=typeof t&&"object"!=typeof t},_n=Date.prototype.getDay,xn=Object.prototype.toString,$n=zr(),Sn=function(t){return"object"==typeof t&&null!==t&&($n?function(t){try{return _n.call(t),!0}catch(t){return!1}}(t):"[object Date]"===xn.call(t))},An=H((function(t){var e=Object.prototype.toString;if(Z()){var r=Symbol.prototype.toString,o=/^Symbol\(.*\)$/;t.exports=function(t){if("symbol"==typeof t)return!0;if("[object Symbol]"!==e.call(t))return!1;try{return function(t){return"symbol"==typeof t.valueOf()&&o.test(r.call(t))}(t)}catch(t){return!1}}}else t.exports=function(t){return!1}})),kn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator,En=function(t){if(wn(t))return t;var e,r="default";if(arguments.length>1&&(arguments[1]===String?r="string":arguments[1]===Number&&(r="number")),kn&&(Symbol.toPrimitive?e=function(t,e){var r=t[e];if(null!=r){if(!Tr(r))throw new TypeError(r+" returned for property "+e+" of object "+t+" is not a function");return r}}(t,Symbol.toPrimitive):An(t)&&(e=Symbol.prototype.valueOf)),void 0!==e){var o=e.call(t,r);if(wn(o))return o;throw new TypeError("unable to convert exotic object to primitive")}return"default"===r&&(Sn(t)||An(t))&&(r="string"),function(t,e){if(null==t)throw new TypeError("Cannot call method on "+t);if("string"!=typeof e||"number"!==e&&"string"!==e)throw new TypeError('hint must be "string" or "number"');var r,o,n,i="string"===e?["toString","valueOf"]:["valueOf","toString"];for(n=0;n<i.length;++n)if(r=t[i[n]],Tr(r)&&(o=r.call(t),wn(o)))return o;throw new TypeError("No default value")}(t,"default"===r?"number":r)},Cn=re("RegExp.prototype.exec"),On=$t("%TypeError%"),jn=function(t){if(!Nr(t))throw new On("`regex` must be a RegExp");return function(e){return null!==Cn(t,e)}},Pn=function(t){if("symbol"==typeof t)throw new Wr("Cannot convert a Symbol value to a string");return Hr(t)},Tn=re("String.prototype.replace"),In=/^\s$/.test("᠎"),Fn=In?/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/:/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,Dn=In?/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/:/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/,zn=function(){var t=Pn(fr(this));return Tn(Tn(t,Fn,""),Dn,"")},Mn="᠎",Rn=function(){return String.prototype.trim&&"​"==="​".trim()&&Mn.trim()===Mn&&"_᠎"==="_᠎".trim()&&"᠎_"==="᠎_".trim()?String.prototype.trim:zn},Un=St(Rn()),Ln=function(t){return fr(t),Un(t)};te(Ln,{getPolyfill:Rn,implementation:zn,shim:function(){var t=Rn();return te(String.prototype,{trim:t},{trim:function(){return String.prototype.trim!==t}}),t}});var Nn=Ln,Bn=$t("%Number%"),Vn=$t("%RegExp%"),Hn=$t("%TypeError%"),Wn=$t("%parseInt%"),qn=re("String.prototype.slice"),Gn=jn(/^0b[01]+$/i),Kn=jn(/^0o[0-7]+$/i),Jn=jn(/^[-+]0x[0-9a-f]+$/i),Xn=jn(new Vn("["+["","​","￾"].join("")+"]","g")),Zn=function(t){return null===t||"function"!=typeof t&&"object"!=typeof t},Yn=function(t){return arguments.length>1?En(t,arguments[1]):En(t)},Qn=function t(e){if("String"!==dr(e))throw new Hn("Assertion failed: `argument` is not a String");if(Gn(e))return Bn(Wn(qn(e,2),2));if(Kn(e))return Bn(Wn(qn(e,2),8));if(Xn(e)||Jn(e))return NaN;var r=Nn(e);return r!==e?t(r):Bn(e)},ti=$t("%TypeError%"),ei=$t("%Number%"),ri=function(t){var e=Zn(t)?t:Yn(t,ei);if("symbol"==typeof e)throw new ti("Cannot convert a Symbol value to a number");if("bigint"==typeof e)throw new ti("Conversion from 'BigInt' to 'number' is not allowed.");return"string"==typeof e?Qn(e):ei(e)},oi=function(t){return t>=0?1:-1},ni=function(t){var e=ri(t);if(wo(e)||0===e)return 0;if(!$o(e))return e;var r=xo(_o(e));return 0===r?0:oi(e)*r},ii=$t("%Object.defineProperty%",!0),ai=zr()?Symbol.toStringTag:null,li=function(t,e,r){if("String"!==dr(t))throw new Oo("Assertion failed: `S` must be a String");if(!Eo(e)||e<0||e>Co)throw new Oo("Assertion failed: `length` must be an integer >= 0 and <= 2**53");if("Boolean"!==dr(r))throw new Oo("Assertion failed: `unicode` must be a Boolean");return r?e+1>=t.length?e+1:e+ko(t,e)["[[CodeUnitCount]]"]:e+1},si=function(t,e){if("Boolean"!==dr(e))throw new jo("Assertion failed: Type(done) is not Boolean");return{value:t,done:e}},ci=function(t,e,r){if("Object"!==dr(t))throw new Wo("Assertion failed: Type(O) is not Object");if(!ur(e))throw new Wo("Assertion failed: IsPropertyKey(P) is not true");return No(Vo,Ho,Bo,t,e,{"[[Configurable]]":!0,"[[Enumerable]]":!1,"[[Value]]":r,"[[Writable]]":!0})},ui=function(t){if(null!==t&&"Object"!==dr(t))throw new dn("Assertion failed: `proto` must be null or an object");var e,r=arguments.length<2?[]:arguments[1];if(!ae(r))throw new dn("Assertion failed: `additionalInternalSlotsList` must be an Array");if(un)e=un(t);else if(hn)e={__proto__:t};else{if(null===t)throw new pn("native Object.create support is required to create null objects");var o=function(){};o.prototype=t,e=new o}return r.length>0&&cn(r,(function(t){an.set(e,t,void 0)})),e},di=function(t,e){if("Object"!==dr(t))throw new yn("Assertion failed: `R` must be an Object");if("String"!==dr(e))throw new yn("Assertion failed: `S` must be a String");var r=bn(t,"exec");if(Fr(r)){var o=fn(r,t,[e]);if(null===o||"Object"===dr(o))return o;throw new yn('"exec" method must return `null` or an Object')}return gn(t,e)},pi=function(t,e,r,o){if("Object"!==dr(t))throw new mn("Assertion failed: `O` must be an Object");if(!ur(e))throw new mn("Assertion failed: `P` must be a Property Key");if("Boolean"!==dr(o))throw new mn("Assertion failed: `Throw` must be a Boolean");if(o){if(t[e]=r,vn&&!Ho(t[e],r))throw new mn("Attempted to assign to readonly property.");return!0}try{return t[e]=r,!vn||Ho(t[e],r)}catch(t){return!1}},hi=function(t){var e=ni(t);return e<=0?0:e>Co?Co:e},fi=function(t,e){var r=arguments.length>2&&arguments[2]&&arguments[2].force;!ai||!r&&Y(t,ai)||(ii?ii(t,ai,{configurable:!0,enumerable:!1,value:e,writable:!1}):t[ai]=e)},bi=Z(),yi=$t("%TypeError%"),gi=$t("%IteratorPrototype%",!0),mi=function(t,e,r,o){if("String"!==dr(e))throw new yi("`S` must be a string");if("Boolean"!==dr(r))throw new yi("`global` must be a boolean");if("Boolean"!==dr(o))throw new yi("`fullUnicode` must be a boolean");an.set(this,"[[IteratingRegExp]]",t),an.set(this,"[[IteratedString]]",e),an.set(this,"[[Global]]",r),an.set(this,"[[Unicode]]",o),an.set(this,"[[Done]]",!1)};gi&&(mi.prototype=ui(gi));if(ci(mi.prototype,"next",(function(){var t=this;if("Object"!==dr(t))throw new yi("receiver must be an object");if(!(t instanceof mi&&an.has(t,"[[IteratingRegExp]]")&&an.has(t,"[[IteratedString]]")&&an.has(t,"[[Global]]")&&an.has(t,"[[Unicode]]")&&an.has(t,"[[Done]]")))throw new yi('"this" value must be a RegExpStringIterator instance');if(an.get(t,"[[Done]]"))return si(void 0,!0);var e=an.get(t,"[[IteratingRegExp]]"),r=an.get(t,"[[IteratedString]]"),o=an.get(t,"[[Global]]"),n=an.get(t,"[[Unicode]]"),i=di(e,r);if(null===i)return an.set(t,"[[Done]]",!0),si(void 0,!0);if(o){if(""===Pn(bn(i,"0"))){var a=hi(bn(e,"lastIndex")),l=li(r,a,n);pi(e,"lastIndex",l,!0)}return si(i,!1)}return an.set(t,"[[Done]]",!0),si(i,!1)})),bi&&(fi(mi.prototype,"RegExp String Iterator"),Symbol.iterator&&"function"!=typeof mi.prototype[Symbol.iterator])){ci(mi.prototype,Symbol.iterator,(function(){return this}))}var vi=$t,wi=$t("%TypeError%"),_i=$t("%TypeError%"),xi=function(t,e){if("Object"!==t.Type(e))return!1;var r={"[[Configurable]]":!0,"[[Enumerable]]":!0,"[[Get]]":!0,"[[Set]]":!0,"[[Value]]":!0,"[[Writable]]":!0};for(var o in e)if(Y(e,o)&&!r[o])return!1;if(t.IsDataDescriptor(e)&&t.IsAccessorDescriptor(e))throw new wi("Property Descriptors may not be both accessor and data descriptors");return!0},$i=function(t){return void 0!==t&&(Uo(dr,"Property Descriptor","Desc",t),!(!Y(t,"[[Get]]")&&!Y(t,"[[Set]]")))},Si=function(t){if("Object"!==dr(t))throw new _i("ToPropertyDescriptor requires an object");var e={};if(Y(t,"enumerable")&&(e["[[Enumerable]]"]=Br(t.enumerable)),Y(t,"configurable")&&(e["[[Configurable]]"]=Br(t.configurable)),Y(t,"value")&&(e["[[Value]]"]=t.value),Y(t,"writable")&&(e["[[Writable]]"]=Br(t.writable)),Y(t,"get")){var r=t.get;if(void 0!==r&&!Fr(r))throw new _i("getter must be a function");e["[[Get]]"]=r}if(Y(t,"set")){var o=t.set;if(void 0!==o&&!Fr(o))throw new _i("setter must be a function");e["[[Set]]"]=o}if((Y(e,"[[Get]]")||Y(e,"[[Set]]"))&&(Y(e,"[[Value]]")||Y(e,"[[Writable]]")))throw new _i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");return e},Ai=$t("%TypeError%"),ki=vi,Ei=function(t,e,r){if("Object"!==dr(t))throw new Ai("Assertion failed: Type(O) is not Object");if(!ur(e))throw new Ai("Assertion failed: IsPropertyKey(P) is not true");var o=xi({Type:dr,IsDataDescriptor:Vo,IsAccessorDescriptor:$i},r)?r:Si(r);if(!xi({Type:dr,IsDataDescriptor:Vo,IsAccessorDescriptor:$i},o))throw new Ai("Assertion failed: Desc is not a valid Property Descriptor");return No(Vo,Ho,Bo,t,e,o)},Ci=H((function(t){var e=ki("%Reflect.construct%",!0),r=Ei;try{r({},"",{"[[Get]]":function(){}})}catch(t){r=null}if(r&&e){var o={},n={};r(n,"length",{"[[Get]]":function(){throw o},"[[Enumerable]]":!0}),t.exports=function(t){try{e(t,n)}catch(t){return t===o}}}else t.exports=function(t){return"function"==typeof t&&!!t.prototype}})),Oi=Ci,ji=$t("%Symbol.species%",!0),Pi=$t("%TypeError%"),Ti=function(t,e,r,o){return new mi(t,e,r,o)},Ii=function(t,e){if("Object"!==dr(t))throw new Pi("Assertion failed: Type(O) is not Object");var r=t.constructor;if(void 0===r)return e;if("Object"!==dr(r))throw new Pi("O.constructor is not an Object");var o=ji?r[ji]:void 0;if(null==o)return e;if(Oi(o))return o;throw new Pi("no constructor found")},Fi=re("String.prototype.indexOf"),Di=RegExp,zi="flags"in RegExp.prototype,Mi=function(t){var e=this;if("Object"!==dr(e))throw new TypeError('"this" value must be an Object');var r=Pn(t),o=function(t,e){var r="flags"in e?bn(e,"flags"):Pn(lo(e));return{flags:r,matcher:new t(zi&&"string"==typeof r?e:t===Di?e.source:e,r)}}(Ii(e,Di),e),n=o.flags,i=o.matcher,a=hi(bn(e,"lastIndex"));pi(i,"lastIndex",a,!0);var l=Fi(n,"g")>-1,s=Fi(n,"u")>-1;return Ti(i,r,l,s)},Ri=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor;if(Ri&&Ui){var Li=Ui(Mi,"name");Li&&Li.configurable&&Ri(Mi,"name",{value:"[Symbol.matchAll]"})}var Ni=Mi,Bi=Z(),Vi=function(){return Bi&&"symbol"==typeof Symbol.matchAll&&"function"==typeof RegExp.prototype[Symbol.matchAll]?RegExp.prototype[Symbol.matchAll]:Ni},Hi=function(t,e){if(!ur(e))throw new Dr("Assertion failed: IsPropertyKey(P) is not true");var r=Ir(t,e);if(null!=r){if(!Fr(r))throw new Dr(cr(e)+" is not a function: "+cr(r));return r}},Wi=function(t){if(!t||"object"!=typeof t)return!1;if(Vr){var e=t[Vr];if(void 0!==e)return Br(e)}return Nr(t)},qi=Z(),Gi=re("String.prototype.indexOf"),Ki=function(t){var e=Vi();if(qi&&"symbol"==typeof Symbol.matchAll){var r=Hi(t,Symbol.matchAll);return r===RegExp.prototype[Symbol.matchAll]&&r!==e?e:r}if(Wi(t))return e},Ji=function(t){var e=fr(this);if(null!=t){if(Wi(t)){var r="flags"in t?bn(t,"flags"):lo(t);if(fr(r),Gi(Pn(r),"g")<0)throw new TypeError("matchAll requires a global regular expression")}var o=Ki(t);if(void 0!==o)return fn(o,t,[e])}var n=Pn(e),i=new RegExp(t,"g");return fn(Ki(i),i,[n])},Xi=function(){if(String.prototype.matchAll)try{"".matchAll(RegExp.prototype)}catch(t){return String.prototype.matchAll}return Ji},Zi=Z(),Yi=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,ta=St(Ji);te(ta,{getPolyfill:Xi,implementation:Ji,shim:function(){var t=Xi();if(te(String.prototype,{matchAll:t},{matchAll:function(){return String.prototype.matchAll!==t}}),Zi){var e=Symbol.matchAll||(Symbol.for?Symbol.for("Symbol.matchAll"):Symbol("Symbol.matchAll"));if(te(Symbol,{matchAll:e},{matchAll:function(){return Symbol.matchAll!==e}}),Yi&&Qi){var r=Qi(Symbol,e);r&&!r.configurable||Yi(Symbol,e,{configurable:!1,enumerable:!1,value:e,writable:!1})}var o=Vi(),n={};n[e]=o;var i={};i[e]=function(){return RegExp.prototype[e]!==o},te(RegExp.prototype,n,i)}return t}});var ea=ta;const ra=t=>{if(!t)return null;const e=Number(t);if(e>=0)return e;if("string"==typeof t){const e=t.replace(",",".").split(":").reverse(),[r,o,n="0"]=e;return+r+60*+o+60*+n*60}},oa={srt:/^(\d+\s+)(\d\d:\d\d:\d\d,\d\d\d)\s+-->\s+(\d\d:\d\d:\d\d,\d\d\d)\s+([\s\S]+?)[\n\r]{2}/gm,vtt:/^(.+[\n\r])?(\d?\d?:?\d\d:\d\d\.\d\d\d)\s+-->\s+(\d?\d?:?\d\d:\d\d\.\d\d\d).*?[\n\r]([\s\S]+?)[\n\r]{2}/gm,ass:/^(Dialogue: 0,)?(\d?\d:\d\d:\d\d\.\d\d),(\d?\d:\d\d:\d\d\.\d\d)(,Default,,0,0,0,,)? ?(.+?)$/gm,audacity:/^(\d+?(\.\d+?)?)\s+?(\d+?\.?(\.\d+?)?)\s+?(.+)$/gm,unknown:/^(.+)$/gm},na={srt:{identifier:1,start:2,end:3,body:4},vtt:{identifier:1,start:2,end:3,body:4},audacity:{start:1,end:3,body:5},ass:{start:2,end:3,body:5},unknown:{body:0}},ia=(t,e=!0)=>{const r=(t=>{for(const e in oa){const r=oa[e];if((t.match(r)||[]).length>0)return e}})(t),o=na[r],n=[...ea(t+"\n\n",oa[r])].map(((t,r)=>{const n=r+1,i=o.identifier&&t[o.identifier]?t[o.identifier].trim():"",a=ra(t[o.start]),l=ra(t[o.end]),s=e?(t=>{const e=new RegExp(/<v(\S+?)?\s+?(.+?)>([\s\S]+?)(<\/v>|$)/g),r=[...ea(t,e)];if(r.length){const e=r.reduce(((t,e,r,o)=>{const[n,i="",a,l=""]=e,{index:s,input:c}=e,u=s+n.length,d=i?i.trim().slice(1).split("."):[],{index:p}=o[r+1]||c.length,h=[{voice:{name:a,classes:d},text:l.trim()}];if(u<p){const t=c.slice(u,p).trim();t&&h.push({text:t})}return[...t,...h]}),[]),o=()=>{const{index:e}=r[0],o=t.slice(0,e).trim();return e>0&&o?[{text:o}]:[]},n=()=>{const e=r[r.length-1],{index:o}=e,[n=""]=e,i=o+n.length,a=t.slice(i,t.length).trim();return i<t.length&&a?[{text:a}]:[]};return[...o(),...e,...n()]}return[{text:t}]})(t[o.body]):t[o.body],c={id:n,identifier:i,start:a,end:l,body:s};return i||delete c.identifier,a||0===a||delete c.start,l||0===l||delete c.end,c}));return n};function aa(t){let e=ia(t);return function(t){t[0].pause=0;for(let e=0;e<t.length;e++){let r=t[e],o=t[e+1];if(o){let t=o.start-r.end;o.pause=t}}console.log(t)}(e),e}function la(t,e=0,r=!1){console.log("--------------- convertTOTranscript");let o="<p>";return t.forEach((t=>{let n="",i=new RegExp("[\\.!\\?]\\s*$","sm");t.body.forEach((t=>{n+=t.text+" "})),t.pause>e&&(!r||r&&i.test(n))?o+=`${n}</p><p>`:o+=n})),o+="</p>",o}var sa=Object.defineProperty,ca=Object.defineProperties,ua=Object.getOwnPropertyDescriptor,da=Object.getOwnPropertyDescriptors,pa=Object.getOwnPropertySymbols,ha=Object.prototype.hasOwnProperty,fa=Object.prototype.propertyIsEnumerable,ba=(t,e,r)=>e in t?sa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ya=(t,e)=>{for(var r in e||(e={}))ha.call(e,r)&&ba(t,r,e[r]);if(pa)for(var r of pa(e))fa.call(e,r)&&ba(t,r,e[r]);return t},ga=(t,e)=>ca(t,da(e)),ma=(t,e,r,o)=>{for(var n,i=o>1?void 0:o?ua(e,r):e,a=t.length-1;a>=0;a--)(n=t[a])&&(i=(o?n(e,r,i):n(i))||i);return o&&i&&sa(e,r,i),i},va=new WeakMap,wa=new WeakMap,_a=new Set,xa=new WeakMap,$a=class{constructor(t,e){(this.host=t).addController(this),this.options=ya({form:t=>{if(t.hasAttribute("form")&&""!==t.getAttribute("form")){const e=t.getRootNode(),r=t.getAttribute("form");if(r)return e.getElementById(r)}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),xa.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),xa.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction)}))}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,va.has(this.form)?va.get(this.form).add(this.host):va.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),wa.has(this.form)||(wa.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&(null==(t=va.get(this.form))||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),wa.has(this.form)&&(this.form.reportValidity=wa.get(this.form),wa.delete(this.form))),this.form=void 0}handleFormData(t){const e=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),n="sl-button"===this.host.tagName.toLowerCase();!e&&!n&&"string"==typeof r&&r.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach((e=>{t.formData.append(r,e.toString())})):t.formData.append(r,o.toString()))}handleFormSubmit(t){var e;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=va.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||r||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),xa.set(this.host,[])}handleInteraction(t){const e=xa.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){e?_a.add(t):_a.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const r=document.createElement("button");r.type=t,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&(r.name=e.name,r.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&r.setAttribute(t,e.getAttribute(t))}))),this.form.append(r),r.click(),r.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,r=Boolean(_a.has(e)),o=Boolean(e.required);e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&r),e.toggleAttribute("data-user-valid",t&&r)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},Sa=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ga(ya({},Sa),{valid:!1,valueMissing:!0})),Object.freeze(ga(ya({},Sa),{valid:!1,customError:!0}));var Aa,ka,Ea=window,Ca=Ea.ShadowRoot&&(void 0===Ea.ShadyCSS||Ea.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oa=Symbol(),ja=new WeakMap,Pa=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Oa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ca&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=ja.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ja.set(e,t))}return t}toString(){return this.cssText}},Ta=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new Pa(r,t,Oa)},Ia=Ca?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new Pa("string"==typeof t?t:t+"",void 0,Oa))(e)})(t):t,Fa=window,Da=Fa.trustedTypes,za=Da?Da.emptyScript:"",Ma=Fa.reactiveElementPolyfillSupport,Ra={toAttribute(t,e){switch(e){case Boolean:t=t?za:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},Ua=(t,e)=>e!==t&&(e==e||t==t),La={attribute:!0,type:String,converter:Ra,reflect:!1,hasChanged:Ua},Na=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const o=this._$Ep(r,e);void 0!==o&&(this._$Ev.set(o,r),t.push(o))})),t}static createProperty(t,e=La){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||La}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(Ia(t))}else void 0!==t&&e.push(Ia(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{Ca?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),o=Ea.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=e.cssText,t.appendChild(r)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=La){var o;const n=this.constructor._$Ep(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==(null===(o=r.converter)||void 0===o?void 0:o.toAttribute)?r.converter:Ra).toAttribute(e,r.type);this._$El=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$El=null}}_$AK(t,e){var r;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:Ra;this._$El=n,this[n]=i.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Ua)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Na.finalized=!0,Na.elementProperties=new Map,Na.elementStyles=[],Na.shadowRootOptions={mode:"open"},null==Ma||Ma({ReactiveElement:Na}),(null!==(Aa=Fa.reactiveElementVersions)&&void 0!==Aa?Aa:Fa.reactiveElementVersions=[]).push("1.6.1");var Ba=window,Va=Ba.trustedTypes,Ha=Va?Va.createPolicy("lit-html",{createHTML:t=>t}):void 0,Wa=`lit$${(Math.random()+"").slice(9)}$`,qa="?"+Wa,Ga=`<${qa}>`,Ka=document,Ja=(t="")=>Ka.createComment(t),Xa=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Za=Array.isArray,Ya=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qa=/-->/g,tl=/>/g,el=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),rl=/'/g,ol=/"/g,nl=/^(?:script|style|textarea|title)$/i,il=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),al=Symbol.for("lit-noChange"),ll=Symbol.for("lit-nothing"),sl=new WeakMap,cl=Ka.createTreeWalker(Ka,129,null,!1),ul=class{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,i=0;const a=t.length-1,l=this.parts,[s,c]=((t,e)=>{const r=t.length-1,o=[];let n,i=2===e?"<svg>":"",a=Ya;for(let e=0;e<r;e++){const r=t[e];let l,s,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,s=a.exec(r),null!==s);)u=a.lastIndex,a===Ya?"!--"===s[1]?a=Qa:void 0!==s[1]?a=tl:void 0!==s[2]?(nl.test(s[2])&&(n=RegExp("</"+s[2],"g")),a=el):void 0!==s[3]&&(a=el):a===el?">"===s[0]?(a=null!=n?n:Ya,c=-1):void 0===s[1]?c=-2:(c=a.lastIndex-s[2].length,l=s[1],a=void 0===s[3]?el:'"'===s[3]?ol:rl):a===ol||a===rl?a=el:a===Qa||a===tl?a=Ya:(a=el,n=void 0);const d=a===el&&t[e+1].startsWith("/>")?" ":"";i+=a===Ya?r+Ga:c>=0?(o.push(l),r.slice(0,c)+"$lit$"+r.slice(c)+Wa+d):r+Wa+(-2===c?(o.push(void 0),e):d)}const l=i+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==Ha?Ha.createHTML(l):l,o]})(t,e);if(this.el=ul.createElement(s,r),cl.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=cl.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(Wa)){const r=c[i++];if(t.push(e),void 0!==r){const t=o.getAttribute(r.toLowerCase()+"$lit$").split(Wa),e=/([.?@])?(.*)/.exec(r);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?fl:"?"===e[1]?yl:"@"===e[1]?gl:hl})}else l.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(nl.test(o.tagName)){const t=o.textContent.split(Wa),e=t.length-1;if(e>0){o.textContent=Va?Va.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],Ja()),cl.nextNode(),l.push({type:2,index:++n});o.append(t[e],Ja())}}}else if(8===o.nodeType)if(o.data===qa)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(Wa,t+1));)l.push({type:7,index:n}),t+=Wa.length-1}n++}}static createElement(t,e){const r=Ka.createElement("template");return r.innerHTML=t,r}};function dl(t,e,r=t,o){var n,i,a,l;if(e===al)return e;let s=void 0!==o?null===(n=r._$Co)||void 0===n?void 0:n[o]:r._$Cl;const c=Xa(e)?void 0:e._$litDirective$;return(null==s?void 0:s.constructor)!==c&&(null===(i=null==s?void 0:s._$AO)||void 0===i||i.call(s,!1),void 0===c?s=void 0:(s=new c(t),s._$AT(t,r,o)),void 0!==o?(null!==(a=(l=r)._$Co)&&void 0!==a?a:l._$Co=[])[o]=s:r._$Cl=s),void 0!==s&&(e=dl(t,s._$AS(t,e.values),s,o)),e}var pl=class{constructor(t,e,r,o){var n;this.type=2,this._$AH=ll,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cm=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=dl(this,t,e),Xa(t)?t===ll||null==t||""===t?(this._$AH!==ll&&this._$AR(),this._$AH=ll):t!==this._$AH&&t!==al&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Za(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==ll&&Xa(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ka.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=ul.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(r);else{const t=new class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:r},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Ka).importNode(r,!0);cl.currentNode=n;let i=cl.nextNode(),a=0,l=0,s=o[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new pl(i,i.nextSibling,this,t):1===s.type?e=new s.ctor(i,s.name,s.strings,this,t):6===s.type&&(e=new ml(i,this,t)),this.u.push(e),s=o[++l]}a!==(null==s?void 0:s.index)&&(i=cl.nextNode(),a++)}return n}p(t){let e=0;for(const r of this.u)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}(n,this),e=t.v(this.options);t.p(r),this.T(e),this._$AH=t}}_$AC(t){let e=sl.get(t.strings);return void 0===e&&sl.set(t.strings,e=new ul(t)),e}k(t){Za(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const n of t)o===e.length?e.push(r=new pl(this.O(Ja()),this.O(Ja()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},hl=class{constructor(t,e,r,o,n){this.type=1,this._$AH=ll,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ll}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){const n=this.strings;let i=!1;if(void 0===n)t=dl(this,t,e,0),i=!Xa(t)||t!==this._$AH&&t!==al,i&&(this._$AH=t);else{const o=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=dl(this,o[r+a],e,a),l===al&&(l=this._$AH[a]),i||(i=!Xa(l)||l!==this._$AH[a]),l===ll?t=ll:t!==ll&&(t+=(null!=l?l:"")+n[a+1]),this._$AH[a]=l}i&&!o&&this.j(t)}j(t){t===ll?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},fl=class extends hl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ll?void 0:t}},bl=Va?Va.emptyScript:"",yl=class extends hl{constructor(){super(...arguments),this.type=4}j(t){t&&t!==ll?this.element.setAttribute(this.name,bl):this.element.removeAttribute(this.name)}},gl=class extends hl{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=dl(this,t,e,0))&&void 0!==r?r:ll)===al)return;const o=this._$AH,n=t===ll&&o!==ll||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==ll&&(o===ll||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}},ml=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){dl(this,t)}},vl=Ba.litHtmlPolyfillSupport;null==vl||vl(ul,pl),(null!==(ka=Ba.litHtmlVersions)&&void 0!==ka?ka:Ba.litHtmlVersions=[]).push("2.6.1");var wl,_l,xl=class extends Na{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,r)=>{var o,n;const i=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:e;let a=i._$litPart$;if(void 0===a){const t=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;i._$litPart$=a=new pl(e.insertBefore(Ja(),t),t,void 0,null!=r?r:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return al}};xl.finalized=!0,xl._$litElement$=!0,null===(wl=globalThis.litElementHydrateSupport)||void 0===wl||wl.call(globalThis,{LitElement:xl});var $l=globalThis.litElementPolyfillSupport;null==$l||$l({LitElement:xl}),(null!==(_l=globalThis.litElementVersions)&&void 0!==_l?_l:globalThis.litElementVersions=[]).push("3.2.0");
/*! Bundled license information:

    @lit/reactive-element/css-tag.js:
      (**
       * @license
       * Copyright 2019 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    @lit/reactive-element/reactive-element.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    lit-html/lit-html.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    lit-element/lit-element.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    lit-html/is-server.js:
      (**
       * @license
       * Copyright 2022 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)
    */
var Sl,Al=Ta`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,kl=Ta`
  ${Al}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,El=Symbol.for(""),Cl=t=>{if((null==t?void 0:t.r)===El)return null==t?void 0:t._$litStatic$},Ol=(t,...e)=>({_$litStatic$:e.reduce(((e,r,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[o+1]),t[0]),r:El}),jl=new Map,Pl=(t=>(e,...r)=>{const o=r.length;let n,i;const a=[],l=[];let s,c=0,u=!1;for(;c<o;){for(s=e[c];c<o&&void 0!==(i=r[c],n=Cl(i));)s+=n+e[++c],u=!0;l.push(i),a.push(s),c++}if(c===o&&a.push(e[o]),u){const t=a.join("$$lit$$");void 0===(e=jl.get(t))&&(a.raw=a,jl.set(t,e=a)),r=l}return t(e,...r)})(il),Tl=t=>null!=t?t:ll
/*! Bundled license information:

    lit-html/directives/if-defined.js:
      (**
       * @license
       * Copyright 2018 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)
    */,Il=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}},Fl=1,Dl=2,zl=3,Ml=4,Rl=t=>(...e)=>({_$litDirective$:t,values:e}),Ul=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},Ll=Rl(class extends Ul{constructor(t){var e;if(super(t),t.type!==Fl||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,o;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.nt.add(t);return this.render(e)}const n=t.element.classList;this.nt.forEach((t=>{t in e||(n.remove(t),this.nt.delete(t))}));for(const t in e){const r=!!e[t];r===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(r?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return al}}),Nl=new Set,Bl=new MutationObserver(ql),Vl=new Map,Hl=document.documentElement.dir||"ltr",Wl=document.documentElement.lang||navigator.language;function ql(){Hl=document.documentElement.dir||"ltr",Wl=document.documentElement.lang||navigator.language,[...Nl.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}Bl.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Gl=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Nl.add(this.host)}hostDisconnected(){Nl.delete(this.host)}dir(){return`${this.host.dir||Hl}`.toLowerCase()}lang(){return`${this.host.lang||Wl}`.toLowerCase()}getTranslationData(t){var e,r;const o=new Intl.Locale(t),n=null==o?void 0:o.language.toLowerCase(),i=null!==(r=null===(e=null==o?void 0:o.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==r?r:"";return{locale:o,language:n,region:i,primary:Vl.get(`${n}-${i}`),secondary:Vl.get(n)}}exists(t,e){var r;const{primary:o,secondary:n}=this.getTranslationData(null!==(r=e.lang)&&void 0!==r?r:this.lang());return e=Object.assign({includeFallback:!1},e),!!(o&&o[t]||n&&n[t]||e.includeFallback&&Sl&&Sl[t])}term(t,...e){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let n;if(r&&r[t])n=r[t];else if(o&&o[t])n=o[t];else{if(!Sl||!Sl[t])return console.error(`No translation found for: ${String(t)}`),String(t);n=Sl[t]}return"function"==typeof n?n(...e):n}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,e)}},Kl=class extends Gl{};function Jl(t,e){const r=ya({waitUntilFirstUpdate:!1},e);return(e,o)=>{const{update:n}=e,i=Array.isArray(t)?t:[t];e.update=function(t){i.forEach((e=>{const n=e;if(t.has(n)){const e=t.get(n),i=this[n];e!==i&&(r.waitUntilFirstUpdate&&!this.hasUpdated||this[o](e,i))}})),n.call(this,t)}}}!function(...t){t.map((t=>{const e=t.$code.toLowerCase();Vl.has(e)?Vl.set(e,Object.assign(Object.assign({},Vl.get(e)),t)):Vl.set(e,t),Sl||(Sl=t)})),ql()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slide_num:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"});var Xl=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:o}=e;return{kind:r,elements:o,finisher(e){customElements.define(t,e)}}})(t,e),Zl=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?ga(ya({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function Yl(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):Zl(t,e)}function Ql(t){return Yl(ga(ya({},t),{state:!0}))}var ts,es=({finisher:t,descriptor:e})=>(r,o)=>{var n;if(void 0===o){const o=null!==(n=r.originalKey)&&void 0!==n?n:r.key,i=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(r.key)}:ga(ya({},r),{key:o});return null!=t&&(i.finisher=function(e){t(e,o)}),i}{const n=r.constructor;void 0!==e&&Object.defineProperty(r,o,e(o)),null==t||t(n,o)}};function rs(t,e){return es({descriptor:r=>{const o={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;o.get=function(){var r,o;return void 0===this[e]&&(this[e]=null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}null===(ts=window.HTMLSlotElement)||void 0===ts||ts.prototype.assignedElements;var os=class extends xl{emit(t,e){const r=new CustomEvent(t,ya({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(r),r}};ma([Yl()],os.prototype,"dir",2),ma([Yl()],os.prototype,"lang",2);
/*! Bundled license information:

    @lit/reactive-element/decorators/custom-element.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    @lit/reactive-element/decorators/property.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    @lit/reactive-element/decorators/state.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    @lit/reactive-element/decorators/base.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    @lit/reactive-element/decorators/event-options.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    @lit/reactive-element/decorators/query.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    @lit/reactive-element/decorators/query-async.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    @lit/reactive-element/decorators/query-all.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    @lit/reactive-element/decorators/query-assigned-elements.js:
      (**
       * @license
       * Copyright 2021 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    @lit/reactive-element/decorators/query-assigned-nodes.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)
    */
var ns=class extends os{constructor(){super(...arguments),this.formControlController=new $a(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),r=t.getAttribute("form");return e.getElementById(r)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Il(this,"[default]","prefix","suffix"),this.localize=new Kl(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Sa}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleHostClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopImmediatePropagation())}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Ol`a`:Ol`button`;return Pl`
      <${e}
        part="base"
        class=${Ll({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Tl(t?void 0:this.disabled)}
        type=${Tl(t?void 0:this.type)}
        title=${this.title}
        name=${Tl(t?void 0:this.name)}
        value=${Tl(t?void 0:this.value)}
        href=${Tl(t?this.href:void 0)}
        target=${Tl(t?this.target:void 0)}
        download=${Tl(t?this.download:void 0)}
        rel=${Tl(t?this.rel:void 0)}
        role=${Tl(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Pl` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Pl`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};ns.styles=kl,ma([rs(".button")],ns.prototype,"button",2),ma([Ql()],ns.prototype,"hasFocus",2),ma([Ql()],ns.prototype,"invalid",2),ma([Yl()],ns.prototype,"title",2),ma([Yl({reflect:!0})],ns.prototype,"variant",2),ma([Yl({reflect:!0})],ns.prototype,"size",2),ma([Yl({type:Boolean,reflect:!0})],ns.prototype,"caret",2),ma([Yl({type:Boolean,reflect:!0})],ns.prototype,"disabled",2),ma([Yl({type:Boolean,reflect:!0})],ns.prototype,"loading",2),ma([Yl({type:Boolean,reflect:!0})],ns.prototype,"outline",2),ma([Yl({type:Boolean,reflect:!0})],ns.prototype,"pill",2),ma([Yl({type:Boolean,reflect:!0})],ns.prototype,"circle",2),ma([Yl()],ns.prototype,"type",2),ma([Yl()],ns.prototype,"name",2),ma([Yl()],ns.prototype,"value",2),ma([Yl()],ns.prototype,"href",2),ma([Yl()],ns.prototype,"target",2),ma([Yl()],ns.prototype,"rel",2),ma([Yl()],ns.prototype,"download",2),ma([Yl()],ns.prototype,"form",2),ma([Yl({attribute:"formaction"})],ns.prototype,"formAction",2),ma([Yl({attribute:"formenctype"})],ns.prototype,"formEnctype",2),ma([Yl({attribute:"formmethod"})],ns.prototype,"formMethod",2),ma([Yl({attribute:"formnovalidate",type:Boolean})],ns.prototype,"formNoValidate",2),ma([Yl({attribute:"formtarget"})],ns.prototype,"formTarget",2),ma([Jl("disabled",{waitUntilFirstUpdate:!0})],ns.prototype,"handleDisabledChange",1),ns=ma([Xl("sl-button")],ns);var is=Ta`
  ${Al}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,as=class extends os{constructor(){super(...arguments),this.localize=new Kl(this)}render(){return il`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};as.styles=is,as=ma([Xl("sl-spinner")],as);var ls="";function ss(t){ls=t}var cs={name:"default",resolver:t=>function(t=""){if(!ls){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)ss(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)));let r="";e&&(r=e.getAttribute("src")),ss(r.split("/").slice(0,-1).join("/"))}}return ls.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},us={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},ds=[cs,{name:"system",resolver:t=>t in us?`data:image/svg+xml,${encodeURIComponent(us[t])}`:""}],ps=[];function hs(t){return ds.find((e=>e.name===t))}var fs=new Map;var bs=new Map;async function ys(t){if(bs.has(t))return bs.get(t);const e=await function(t,e="cors"){if(fs.has(t))return fs.get(t);const r=fetch(t,{mode:e}).then((async t=>({ok:t.ok,status:t.status,html:await t.text()})));return fs.set(t,r),r}(t),r={ok:e.ok,status:e.status,svg:null};if(e.ok){const t=document.createElement("div");t.innerHTML=e.html;const o=t.firstElementChild;r.svg="svg"===(null==o?void 0:o.tagName.toLowerCase())?o.outerHTML:""}return bs.set(t,r),r}var gs=Ta`
  ${Al}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,ms=class extends Ul{constructor(t){if(super(t),this.it=ll,t.type!==Dl)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ll||null==t)return this._t=void 0,this.it=t;if(t===al)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ms.directiveName="unsafeHTML",ms.resultType=1;var vs=class extends ms{};vs.directiveName="unsafeSVG",vs.resultType=2;var ws,_s=Rl(vs),xs=class extends os{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var t;super.connectedCallback(),t=this,ps.push(t)}firstUpdated(){this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,ps=ps.filter((e=>e!==t))}getUrl(){const t=hs(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=hs(this.library),r=this.getUrl();if(ws||(ws=new DOMParser),r)try{const o=await ys(r);if(r!==this.getUrl())return;if(o.ok){const r=ws.parseFromString(o.svg,"text/html").body.querySelector("svg");null!==r?(r.part.add("svg"),null==(t=null==e?void 0:e.mutator)||t.call(e,r),this.svg=r.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch(t){this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return il` ${_s(this.svg)} `}};
/*! Bundled license information:

    lit-html/directives/unsafe-html.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)

    lit-html/directives/unsafe-svg.js:
      (**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       *)
    */
function $s(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(null!==t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}xs.styles=gs,ma([Ql()],xs.prototype,"svg",2),ma([Yl({reflect:!0})],xs.prototype,"name",2),ma([Yl()],xs.prototype,"src",2),ma([Yl()],xs.prototype,"label",2),ma([Yl({reflect:!0})],xs.prototype,"library",2),ma([Jl("label")],xs.prototype,"handleLabelChange",1),ma([Jl(["name","src","library"])],xs.prototype,"setIcon",1),xs=ma([Xl("sl-icon")],xs);var Ss=[],As=new Set;function ks(t){if(As.add(t),!document.body.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Es(t){As.delete(t),0===As.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scrollbar-width"))}var Cs=Ta`
  ${Al}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Os=new Map,js=new WeakMap;function Ps(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ts(t,e){Os.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Is(t,e,r){const o=js.get(t);if(null==o?void 0:o[e])return Ps(o[e],r.dir);const n=Os.get(e);return n?Ps(n,r.dir):{keyframes:[],options:{duration:0}}}function Fs(t,e){return new Promise((r=>{t.addEventListener(e,(function o(n){n.target===t&&(t.removeEventListener(e,o),r())}))}))}function Ds(t,e,r){return new Promise((o=>{if((null==r?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,ga(ya({},r),{duration:zs()?0:r.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})}))}function zs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ms(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const r=requestAnimationFrame(e);t.addEventListener("cancel",(()=>r),{once:!0}),t.addEventListener("finish",(()=>r),{once:!0}),t.cancel()})))))}var Rs=class extends os{constructor(){super(...arguments),this.hasSlotController=new Il(this,"footer"),this.localize=new Kl(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Ss.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ss=Ss.filter((t=>t!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ss[Ss.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=function(t){var e,r;const o=[];return function t(e){e instanceof HTMLElement&&(o.push(e),null!==e.shadowRoot&&"open"===e.shadowRoot.mode&&t(e.shadowRoot)),[...e.children].forEach((e=>t(e)))}(t),{start:null!=(e=o.find((t=>$s(t))))?e:null,end:null!=(r=o.reverse().find((t=>$s(t))))?r:null}}(this.element),r="forward"===this.tabDirection?t:e;"function"==typeof(null==r?void 0:r.focus)&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){"Tab"===t.key&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame((()=>this.checkFocus())))}handleKeyUp(){this.tabDirection="forward"}}(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ks(this))}disconnectedCallback(){super.disconnectedCallback(),Es(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Is(this,"dialog.denyClose",{dir:this.localize.dir()});Ds(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(t){this.open&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ks(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ms(this.dialog),Ms(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=Is(this,"dialog.show",{dir:this.localize.dir()}),r=Is(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ds(this.panel,e.keyframes,e.options),Ds(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ms(this.dialog),Ms(this.overlay)]);const t=Is(this,"dialog.hide",{dir:this.localize.dir()}),e=Is(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ds(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),Ds(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Es(this);const r=this.originalTrigger;"function"==typeof(null==r?void 0:r.focus)&&setTimeout((()=>r.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Fs(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Fs(this,"sl-after-hide")}render(){return il`
      <div
        part="base"
        class=${Ll({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Tl(this.noHeader?this.label:void 0)}
          aria-labelledby=${Tl(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":il`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Rs.styles=Cs,ma([rs(".dialog")],Rs.prototype,"dialog",2),ma([rs(".dialog__panel")],Rs.prototype,"panel",2),ma([rs(".dialog__overlay")],Rs.prototype,"overlay",2),ma([Yl({type:Boolean,reflect:!0})],Rs.prototype,"open",2),ma([Yl({reflect:!0})],Rs.prototype,"label",2),ma([Yl({attribute:"no-header",type:Boolean,reflect:!0})],Rs.prototype,"noHeader",2),ma([Jl("open",{waitUntilFirstUpdate:!0})],Rs.prototype,"handleOpenChange",1),Rs=ma([Xl("sl-dialog")],Rs),Ts("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Ts("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Ts("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),Ts("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Ts("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Us=Ta`
  ${Al}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Ls=class extends os{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Ol`a`:Ol`button`;return Pl`
      <${e}
        part="base"
        class=${Ll({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Tl(t?void 0:this.disabled)}
        type=${Tl(t?void 0:"button")}
        href=${Tl(t?this.href:void 0)}
        target=${Tl(t?this.target:void 0)}
        download=${Tl(t?this.download:void 0)}
        rel=${Tl(t&&this.target?"noreferrer noopener":void 0)}
        role=${Tl(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Tl(this.name)}
          library=${Tl(this.library)}
          src=${Tl(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Ls.styles=Us,ma([rs(".icon-button")],Ls.prototype,"button",2),ma([Ql()],Ls.prototype,"hasFocus",2),ma([Yl()],Ls.prototype,"name",2),ma([Yl()],Ls.prototype,"library",2),ma([Yl()],Ls.prototype,"src",2),ma([Yl()],Ls.prototype,"href",2),ma([Yl()],Ls.prototype,"target",2),ma([Yl()],Ls.prototype,"download",2),ma([Yl()],Ls.prototype,"label",2),ma([Yl({type:Boolean,reflect:!0})],Ls.prototype,"disabled",2),Ls=ma([Xl("sl-icon-button")],Ls);var Ns,Bs=Ta`
  ${Al}
  ${Ta`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Vs={},Hs=Rl(class extends Ul{constructor(t){if(super(t),t.type!==zl&&t.type!==Fl&&t.type!==Ml)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===al||e===ll)return e;const r=t.element,o=t.name;if(t.type===zl){if(e===r[o])return al}else if(t.type===Ml){if(!!e===r.hasAttribute(o))return al}else if(t.type===Fl&&r.getAttribute(o)===e+"")return al;return((t,e=Vs)=>{t._$AH=e})(t),e}}),Ws=class extends os{constructor(){super(...arguments),this.formControlController=new $a(this),this.hasSlotController=new Il(this,"help-text","label"),this.localize=new Kl(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.syncRange())),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then((()=>{this.syncRange(),this.resizeObserver.observe(this.input)}))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%")}syncTooltip(t){if(null!==this.output){const e=this.input.offsetWidth,r=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),n=e*t;if("rtl"===this.localize.dir()){const i=`${e-n}px + ${t} * ${o}`;this.output.style.translate=`calc((${i} - ${r/2}px - ${o} / 2))`}else{const e=`${n}px - ${t} * ${o}`;this.output.style.translate=`calc(${e} - ${r/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),"none"!==this.tooltip&&this.syncTooltip(t)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=!!this.label||!!t,o=!!this.helpText||!!e;return il`
      <div
        part="form-control"
        class=${Ll({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Ll({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${Tl(this.name)}
              ?disabled=${this.disabled}
              min=${Tl(this.min)}
              max=${Tl(this.max)}
              step=${Tl(this.step)}
              .value=${Hs(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"===this.tooltip||this.disabled?"":il`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};function qs(e){let r,n,i,a,m,v,w,_,x,$,S,A,k,E,C,O,j,P,T,I,F,D,z,M;return{c(){r=u("sl-dialog"),n=u("div"),i=u("div"),a=u("input"),m=p(),v=u("label"),v.textContent="Paragraph ends with sentence end",w=p(),_=u("div"),x=u("label"),$=d("Pause Duration - "),S=d(e[3]),A=p(),k=u("sl-range"),C=p(),O=u("h1"),O.textContent="Transcript",j=p(),P=u("div"),T=p(),I=u("sl-button"),I.textContent="HTML > clipboard",F=p(),D=u("sl-button"),D.textContent="Close",b(a,"type","checkbox"),b(a,"id","fullstop-checkbox"),b(v,"for","fullstop-checkbox"),b(i,"class","transcript-configuration-item"),b(x,"for","transcript-range"),y(k,"id","transcript-range"),y(k,"class","transcript-range svelte-1jx8xnw"),y(k,"min","0"),y(k,"max",E=e[4].length),y(k,"step","1"),y(k,"value",Gs),g(k,"--track-color-active","black"),g(k,"--track-color-inactive","grey"),b(_,"class","transcript-configuration-item"),b(n,"class","transcript-configuration svelte-1jx8xnw"),b(P,"id","usable-transcript"),y(I,"slot","footer"),y(D,"slot","footer"),y(D,"variant","primary"),y(r,"label","cc > transcript"),y(r,"class","transcript-overview svelte-1jx8xnw")},m(t,o){s(t,r,o),l(r,n),l(n,i),l(i,a),a.checked=e[2],l(i,m),l(i,v),l(n,w),l(n,_),l(_,x),l(x,$),l(x,S),l(_,A),l(_,k),l(r,C),l(r,O),l(r,j),l(r,P),P.innerHTML=e[1],l(r,T),l(r,I),l(r,F),l(r,D),z||(M=[h(a,"change",e[8]),h(a,"change",e[9]),h(k,"sl-change",e[6]),h(I,"click",f(Ks)),h(I,"keydown",f(Ks)),h(D,"keydown",f(e[10])),h(D,"click",f(e[11]))],z=!0)},p(t,[e]){4&e&&(a.checked=t[2]),8&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(S,t[3]),16&e&&E!==(E=t[4].length)&&y(k,"max",E),2&e&&(P.innerHTML=t[1])},i:t,o:t,d(t){t&&c(r),z=!1,o(M)}}}Ws.styles=Bs,ma([rs(".range__control")],Ws.prototype,"input",2),ma([rs(".range__tooltip")],Ws.prototype,"output",2),ma([Ql()],Ws.prototype,"hasFocus",2),ma([Ql()],Ws.prototype,"hasTooltip",2),ma([Yl()],Ws.prototype,"title",2),ma([Yl()],Ws.prototype,"name",2),ma([Yl({type:Number})],Ws.prototype,"value",2),ma([Yl()],Ws.prototype,"label",2),ma([Yl({attribute:"help-text"})],Ws.prototype,"helpText",2),ma([Yl({type:Boolean,reflect:!0})],Ws.prototype,"disabled",2),ma([Yl({type:Number})],Ws.prototype,"min",2),ma([Yl({type:Number})],Ws.prototype,"max",2),ma([Yl({type:Number})],Ws.prototype,"step",2),ma([Yl()],Ws.prototype,"tooltip",2),ma([Yl({attribute:!1})],Ws.prototype,"tooltipFormatter",2),ma([Yl({reflect:!0})],Ws.prototype,"form",2),ma([((t="value")=>(e,r)=>{const o=e.constructor,n=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(e,i,a){var l;const s=o.getPropertyOptions(t);if(e===("string"==typeof s.attribute?s.attribute:t)){const e=s.converter||Ra,o=("function"==typeof e?e:null!=(l=null==e?void 0:e.fromAttribute)?l:Ra.fromAttribute)(a,s.type);this[t]!==o&&(this[r]=o)}n.call(this,e,i,a)}})()],Ws.prototype,"defaultValue",2),ma([(Ns={passive:!0},es({finisher:(t,e)=>{Object.assign(t.prototype[e],Ns)}}))],Ws.prototype,"handleThumbDragStart",1),ma([Jl("value",{waitUntilFirstUpdate:!0})],Ws.prototype,"handleValueChange",1),ma([Jl("disabled",{waitUntilFirstUpdate:!0})],Ws.prototype,"handleDisabledChange",1),ma([Jl("hasTooltip",{waitUntilFirstUpdate:!0})],Ws.prototype,"syncRange",1),Ws=ma([Xl("sl-range")],Ws);let Gs=1;function Ks(){const t=document.getElementById("usable-transcript");navigator.clipboard.writeText(t.innerText),alert(`Copied ${t.innerText.length} characters to clipboard`)}function Js(t,e,r){var o=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))((function(n,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function l(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,l)}s((o=o.apply(t,e||[])).next())}))};ss("../node_modules/@shoelace-style/shoelace/dist/");let{captions:n}=e,i=null,a=null,l=null,s=!0,c=0,u=null,d=null;function p(){console.log("Close button hit"),r(7,n="")}a=aa(n),u=function(t){let e=t.map((t=>t.pause)),r=[...new Set(e)],o={};return r.forEach((t=>{let r=e.filter((e=>e===t)).length;o[t]=r})),o}(a),d=Object.keys(u),d.sort(((t,e)=>t-e)),Math.max.apply(null,d),l=la(a,c,s),w((()=>o(void 0,void 0,void 0,(function*(){i=document.querySelector(".transcript-overview"),i?(console.log("found transcript dialog"),i.show()):console.log("no transcript dialog"),i.querySelector('sl-button[variant="primary"]');document.querySelector(".transcript-range").tooltipFormatter=t=>function(t){const e=d[t];if(u.hasOwnProperty(e))return`Pause: ${e} # phrases: ${u[e]}`;console.log(`no key ${e} in uniqueDurations`)}(t)}))));return t.$$set=t=>{"captions"in t&&r(7,n=t.captions)},[a,l,s,c,d,p,function(t){console.log(t);const e=t.target.value;console.log(`changePauseDuration called with ${e}`),r(3,c=d[e]),r(1,l=la(a,c,s))},n,function(){s=this.checked,r(2,s)},()=>r(1,l=la(a,c,s)),()=>p(),()=>p()]}class Xs extends L{constructor(t){super(),U(this,t,Js,qs,i,{captions:7})}}function Zs(t){let e,r,o;function n(e){t[10](e)}let i={};return void 0!==t[1]&&(i.captions=t[1]),e=new Xs({props:i}),x.push((()=>function(t,e,r){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=r,r(t.$$.ctx[o]))}(e,"captions",n))),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,r){z(e,t,r),o=!0},p(t,o){const n={};var i;!r&&2&o&&(r=!0,n.captions=t[1],i=()=>r=!1,S.push(i)),e.$set(n)},i(t){o||(F(e.$$.fragment,t),o=!0)},o(t){D(e.$$.fragment,t),o=!1},d(t){M(e,t)}}}function Ys(t){let e,r,n,i,a,f,y,g,m,v=t[1]&&Zs(t);return{c(){e=u("div"),r=u("input"),n=p(),i=u("label"),i.textContent="🇨‌🇨‌ > transcript",a=p(),v&&v.c(),f=d(""),b(r,"type","file"),b(r,"class","usable-file-selector svelte-xc4vyf"),b(r,"id","subsFile"),b(r,"accept",".vtt, .srt"),b(i,"for","subsFile"),b(i,"class","svelte-xc4vyf"),b(e,"class","usable-file svelte-xc4vyf")},m(o,c){var u;s(o,e,c),l(e,r),l(e,n),l(e,i),s(o,a,c),v&&v.m(o,c),s(o,f,c),y=!0,g||(m=[h(r,"change",t[8]),h(r,"change",(u=t[9],function(t){return t.preventDefault(),u.call(this,t)}))],g=!0)},p(t,[e]){t[1]?v?(v.p(t,e),2&e&&F(v,1)):(v=Zs(t),v.c(),F(v,1),v.m(f.parentNode,f)):v&&(I={r:0,c:[],p:I},D(v,1,1,(()=>{v=null})),I.r||o(I.c),I=I.p)},i(t){y||(F(v),y=!0)},o(t){D(v),y=!1},d(t){t&&c(e),t&&c(a),v&&v.d(t),t&&c(f),g=!1,o(m)}}}function Qs(t,e,r){let o;a(t,B,(t=>r(11,o=t)));let{courseId:n}=e,{editMode:i}=e,{csrfToken:l}=e,{currentObject:s}=e,{currentDetail:c}=e;var u;let d;o={courseId:n,editMode:i,csrfToken:l,currentObject:s,currentDetail:c},u=o,B.set(u);let p=null;function h(){document.getElementById("subsFile");let t=d[0];const e=new FileReader;e.readAsText(t),e.onerror=t=>{console.log(`reading error for ${t} - ${e.error}`)},e.onload=()=>{r(1,p=e.result)},r(0,d=[]),t=null}return t.$$set=t=>{"courseId"in t&&r(3,n=t.courseId),"editMode"in t&&r(4,i=t.editMode),"csrfToken"in t&&r(5,l=t.csrfToken),"currentObject"in t&&r(6,s=t.currentObject),"currentDetail"in t&&r(7,c=t.currentDetail)},[d,p,h,n,i,l,s,c,function(){d=this.files,r(0,d)},()=>h(),function(t){p=t,r(1,p)}]}class tc extends L{constructor(t){super(),U(this,t,Qs,Ys,i,{courseId:3,editMode:4,csrfToken:5,currentObject:6,currentDetail:7})}}const ec=function(){let t={editMode:!1,courseId:null,currentObject:null,currentDetail:null,csrfToken:null},e=new URL(window.location.href);e.hash="";const r=e.href;if(ENV.COURSE_ID&&ENV.COURSE_ID.match(/^\d+$/))t.courseId=ENV.COURSE_ID;else{let e=r.split("courses/")[1];if(e){const r=e.split("/")[0];r.match(/^\d+$/)&&(t.courseId=parseInt(r))}}if(!t.courseId)throw new Error("No courseId found");let o=new RegExp(".*/courses/[0-9]+/([^/]*)(.*)$");const n=r.match(o);return n&&(t.currentObject=n[1],t.currentDetail=n[2]),t.editMode=null!==document.getElementById("easy_student_view"),t.csrfToken=function(){let t=new RegExp("^_csrf_token=(.*)$"),e=document.cookie.split(";");for(let r=0;r<e.length;r++){let o=e[r].trim(),n=t.exec(o);if(n)return decodeURIComponent(n[1])}return null}(),t}();let rc=null;if(["pages","modules"].includes(ec.currentObject)){const t=document.querySelector(".right-of-crumbs");if(!t)throw new Error("div.right-of-crumbs not found");const e=document.createElement("div");e.className="usable-transcript",e.style.display="flex",t.appendChild(e),rc=new tc({target:e,props:{editMode:ec.editMode,courseId:ec.courseId,currentObject:ec.currentObject,currentDetail:ec.currentDetail,csrfToken:ec.csrfToken}}),addEventListener("beforeunload",(t=>{rc.$destroy()}))}return rc}();
