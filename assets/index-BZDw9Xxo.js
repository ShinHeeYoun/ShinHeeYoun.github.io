var rf=Object.defineProperty;var $s=e=>{throw TypeError(e)};var lf=(e,n,t)=>n in e?rf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var F=(e,n,t)=>lf(e,typeof n!="symbol"?n+"":n,t),of=(e,n,t)=>n.has(e)||$s("Cannot "+t);var Fs=(e,n,t)=>n.has(e)?$s("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t);var Nt=(e,n,t)=>(of(e,n,"access private method"),t);function sf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function af(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cu={exports:{}},zl={},du={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),uf=Symbol.for("react.portal"),cf=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),pf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),vf=Symbol.for("react.memo"),yf=Symbol.for("react.lazy"),Us=Symbol.iterator;function xf(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var fu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pu=Object.assign,hu={};function Ct(e,n,t){this.props=e,this.context=n,this.refs=hu,this.updater=t||fu}Ct.prototype.isReactComponent={};Ct.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ct.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mu(){}mu.prototype=Ct.prototype;function Lo(e,n,t){this.props=e,this.context=n,this.refs=hu,this.updater=t||fu}var Ao=Lo.prototype=new mu;Ao.constructor=Lo;pu(Ao,Ct.prototype);Ao.isPureReactComponent=!0;var Bs=Array.isArray,gu=Object.prototype.hasOwnProperty,Oo={current:null},vu={key:!0,ref:!0,__self:!0,__source:!0};function yu(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)gu.call(n,r)&&!vu.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:xr,type:e,key:i,ref:o,props:l,_owner:Oo.current}}function wf(e,n){return{$$typeof:xr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function zo(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr}function kf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Hs=/\/+/g;function ii(e,n){return typeof e=="object"&&e!==null&&e.key!=null?kf(""+e.key):n.toString(36)}function Kr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xr:case uf:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+ii(o,0):r,Bs(l)?(t="",e!=null&&(t=e.replace(Hs,"$&/")+"/"),Kr(l,n,t,"",function(u){return u})):l!=null&&(zo(l)&&(l=wf(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Hs,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Bs(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+ii(i,s);o+=Kr(i,n,t,a,l)}else if(a=xf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+ii(i,s++),o+=Kr(i,n,t,a,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Rr(e,n,t){if(e==null)return e;var r=[],l=0;return Kr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Sf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Jr={transition:null},Cf={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Jr,ReactCurrentOwner:Oo};function xu(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Rr,forEach:function(e,n,t){Rr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Rr(e,function(){n++}),n},toArray:function(e){return Rr(e,function(n){return n})||[]},only:function(e){if(!zo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Ct;A.Fragment=cf;A.Profiler=ff;A.PureComponent=Lo;A.StrictMode=df;A.Suspense=gf;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf;A.act=xu;A.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pu({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Oo.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)gu.call(n,a)&&!vu.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:xr,type:e.type,key:l,ref:i,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:hf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pf,_context:e},e.Consumer=e};A.createElement=yu;A.createFactory=function(e){var n=yu.bind(null,e);return n.type=e,n};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:mf,render:e}};A.isValidElement=zo;A.lazy=function(e){return{$$typeof:yf,_payload:{_status:-1,_result:e},_init:Sf}};A.memo=function(e,n){return{$$typeof:vf,type:e,compare:n===void 0?null:n}};A.startTransition=function(e){var n=Jr.transition;Jr.transition={};try{e()}finally{Jr.transition=n}};A.unstable_act=xu;A.useCallback=function(e,n){return he.current.useCallback(e,n)};A.useContext=function(e){return he.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return he.current.useDeferredValue(e)};A.useEffect=function(e,n){return he.current.useEffect(e,n)};A.useId=function(){return he.current.useId()};A.useImperativeHandle=function(e,n,t){return he.current.useImperativeHandle(e,n,t)};A.useInsertionEffect=function(e,n){return he.current.useInsertionEffect(e,n)};A.useLayoutEffect=function(e,n){return he.current.useLayoutEffect(e,n)};A.useMemo=function(e,n){return he.current.useMemo(e,n)};A.useReducer=function(e,n,t){return he.current.useReducer(e,n,t)};A.useRef=function(e){return he.current.useRef(e)};A.useState=function(e){return he.current.useState(e)};A.useSyncExternalStore=function(e,n,t){return he.current.useSyncExternalStore(e,n,t)};A.useTransition=function(){return he.current.useTransition()};A.version="18.3.1";du.exports=A;var E=du.exports;const Ef=af(E),Pf=sf({__proto__:null,default:Ef},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=E,_f=Symbol.for("react.element"),Nf=Symbol.for("react.fragment"),jf=Object.prototype.hasOwnProperty,Rf=Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,If={key:!0,ref:!0,__self:!0,__source:!0};function wu(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)jf.call(n,r)&&!If.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:_f,type:e,key:i,ref:o,props:l,_owner:Rf.current}}zl.Fragment=Nf;zl.jsx=wu;zl.jsxs=wu;cu.exports=zl;var g=cu.exports,ku={exports:{}},Te={},Su={exports:{}},Cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,I){var L=N.length;N.push(I);e:for(;0<L;){var J=L-1>>>1,ee=N[J];if(0<l(ee,I))N[J]=I,N[L]=ee,L=J;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],L=N.pop();if(L!==I){N[0]=L;e:for(var J=0,ee=N.length,Nr=ee>>>1;J<Nr;){var In=2*(J+1)-1,li=N[In],Ln=In+1,jr=N[Ln];if(0>l(li,L))Ln<ee&&0>l(jr,li)?(N[J]=jr,N[Ln]=L,J=Ln):(N[J]=li,N[In]=L,J=In);else if(Ln<ee&&0>l(jr,L))N[J]=jr,N[Ln]=L,J=Ln;else break e}}return I}function l(N,I){var L=N.sortIndex-I.sortIndex;return L!==0?L:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],u=[],d=1,f=null,m=3,y=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var I=t(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=N)r(u),I.sortIndex=I.expirationTime,n(a,I);else break;I=t(u)}}function x(N){if(w=!1,h(N),!v)if(t(a)!==null)v=!0,ti(P);else{var I=t(u);I!==null&&ri(x,I.startTime-N)}}function P(N,I){v=!1,w&&(w=!1,p(j),j=-1),y=!0;var L=m;try{for(h(I),f=t(a);f!==null&&(!(f.expirationTime>I)||N&&!ce());){var J=f.callback;if(typeof J=="function"){f.callback=null,m=f.priorityLevel;var ee=J(f.expirationTime<=I);I=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===t(a)&&r(a),h(I)}else r(a);f=t(a)}if(f!==null)var Nr=!0;else{var In=t(u);In!==null&&ri(x,In.startTime-I),Nr=!1}return Nr}finally{f=null,m=L,y=!1}}var S=!1,T=null,j=-1,$=5,R=-1;function ce(){return!(e.unstable_now()-R<$)}function Tt(){if(T!==null){var N=e.unstable_now();R=N;var I=!0;try{I=T(!0,N)}finally{I?_t():(S=!1,T=null)}}else S=!1}var _t;if(typeof c=="function")_t=function(){c(Tt)};else if(typeof MessageChannel<"u"){var Ds=new MessageChannel,tf=Ds.port2;Ds.port1.onmessage=Tt,_t=function(){tf.postMessage(null)}}else _t=function(){C(Tt,0)};function ti(N){T=N,S||(S=!0,_t())}function ri(N,I){j=C(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,ti(P))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var L=m;m=I;try{return N()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=m;m=N;try{return I()}finally{m=L}},e.unstable_scheduleCallback=function(N,I,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=L+ee,N={id:d++,callback:I,priorityLevel:N,startTime:L,expirationTime:ee,sortIndex:-1},L>J?(N.sortIndex=L,n(u,N),t(a)===null&&N===t(u)&&(w?(p(j),j=-1):w=!0,ri(x,L-J))):(N.sortIndex=ee,n(a,N),v||y||(v=!0,ti(P))),N},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(N){var I=m;return function(){var L=m;m=I;try{return N.apply(this,arguments)}finally{m=L}}}})(Cu);Su.exports=Cu;var Lf=Su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af=E,Pe=Lf;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eu=new Set,er={};function Gn(e,n){mt(e,n),mt(e+"Capture",n)}function mt(e,n){for(er[e]=n,e=0;e<n.length;e++)Eu.add(n[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ai=Object.prototype.hasOwnProperty,Of=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vs={},Ws={};function zf(e){return Ai.call(Ws,e)?!0:Ai.call(Vs,e)?!1:Of.test(e)?Ws[e]=!0:(Vs[e]=!0,!1)}function Mf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Df(e,n,t,r){if(n===null||typeof n>"u"||Mf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function me(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ie[n]=new me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mo=/[\-:]([a-z])/g;function Do(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Mo,Do);ie[n]=new me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Mo,Do);ie[n]=new me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Mo,Do);ie[n]=new me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function $o(e,n,t,r){var l=ie.hasOwnProperty(n)?ie[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Df(n,t,l,r)&&(t=null),r||l===null?zf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var on=Af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ir=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),Fo=Symbol.for("react.strict_mode"),Oi=Symbol.for("react.profiler"),Pu=Symbol.for("react.provider"),Tu=Symbol.for("react.context"),Uo=Symbol.for("react.forward_ref"),zi=Symbol.for("react.suspense"),Mi=Symbol.for("react.suspense_list"),Bo=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),_u=Symbol.for("react.offscreen"),bs=Symbol.iterator;function jt(e){return e===null||typeof e!="object"?null:(e=bs&&e[bs]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,oi;function Ft(e){if(oi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);oi=n&&n[1]||""}return`
`+oi+e}var si=!1;function ai(e,n){if(!e||si)return"";si=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{si=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ft(e):""}function $f(e){switch(e.tag){case 5:return Ft(e.type);case 16:return Ft("Lazy");case 13:return Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 2:case 15:return e=ai(e.type,!1),e;case 11:return e=ai(e.type.render,!1),e;case 1:return e=ai(e.type,!0),e;default:return""}}function Di(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Xn:return"Portal";case Oi:return"Profiler";case Fo:return"StrictMode";case zi:return"Suspense";case Mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tu:return(e.displayName||"Context")+".Consumer";case Pu:return(e._context.displayName||"Context")+".Provider";case Uo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bo:return n=e.displayName||null,n!==null?n:Di(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return Di(e(n))}catch{}}return null}function Ff(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Di(n);case 8:return n===Fo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uf(e){var n=Nu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Lr(e){e._valueTracker||(e._valueTracker=Uf(e))}function ju(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Nu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $i(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Gs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=En(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ru(e,n){n=n.checked,n!=null&&$o(e,"checked",n,!1)}function Fi(e,n){Ru(e,n);var t=En(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ui(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ui(e,n.type,En(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Qs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ui(e,n,t){(n!=="number"||ol(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ut=Array.isArray;function ut(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+En(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Bi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ks(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Ut(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:En(t)}}function Iu(e,n){var t=En(n.value),r=En(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Js(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Lu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ar,Au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function nr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Vt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bf=["Webkit","ms","Moz","O"];Object.keys(Vt).forEach(function(e){Bf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Vt[n]=Vt[e]})});function Ou(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Vt.hasOwnProperty(e)&&Vt[e]?(""+n).trim():n+"px"}function zu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Ou(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Hf=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vi(e,n){if(n){if(Hf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Wi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function Ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gi=null,ct=null,dt=null;function Ys(e){if(e=Sr(e)){if(typeof Gi!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Ul(n),Gi(e.stateNode,e.type,n))}}function Mu(e){ct?dt?dt.push(e):dt=[e]:ct=e}function Du(){if(ct){var e=ct,n=dt;if(dt=ct=null,Ys(e),n)for(e=0;e<n.length;e++)Ys(n[e])}}function $u(e,n){return e(n)}function Fu(){}var ui=!1;function Uu(e,n,t){if(ui)return e(n,t);ui=!0;try{return $u(e,n,t)}finally{ui=!1,(ct!==null||dt!==null)&&(Fu(),Du())}}function tr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ul(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Qi=!1;if(en)try{var Rt={};Object.defineProperty(Rt,"passive",{get:function(){Qi=!0}}),window.addEventListener("test",Rt,Rt),window.removeEventListener("test",Rt,Rt)}catch{Qi=!1}function Vf(e,n,t,r,l,i,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var Wt=!1,sl=null,al=!1,Ki=null,Wf={onError:function(e){Wt=!0,sl=e}};function bf(e,n,t,r,l,i,o,s,a){Wt=!1,sl=null,Vf.apply(Wf,arguments)}function Gf(e,n,t,r,l,i,o,s,a){if(bf.apply(this,arguments),Wt){if(Wt){var u=sl;Wt=!1,sl=null}else throw Error(k(198));al||(al=!0,Ki=u)}}function Qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Bu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Xs(e){if(Qn(e)!==e)throw Error(k(188))}function Qf(e){var n=e.alternate;if(!n){if(n=Qn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Xs(l),e;if(i===r)return Xs(l),n;i=i.sibling}throw Error(k(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function Hu(e){return e=Qf(e),e!==null?Vu(e):null}function Vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Vu(e);if(n!==null)return n;e=e.sibling}return null}var Wu=Pe.unstable_scheduleCallback,Zs=Pe.unstable_cancelCallback,Kf=Pe.unstable_shouldYield,Jf=Pe.unstable_requestPaint,Y=Pe.unstable_now,Yf=Pe.unstable_getCurrentPriorityLevel,Vo=Pe.unstable_ImmediatePriority,bu=Pe.unstable_UserBlockingPriority,ul=Pe.unstable_NormalPriority,Xf=Pe.unstable_LowPriority,Gu=Pe.unstable_IdlePriority,Ml=null,Qe=null;function Zf(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:np,qf=Math.log,ep=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(qf(e)/ep|0)|0}var Or=64,zr=4194304;function Bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~l;s!==0?r=Bt(s):(i&=o,i!==0&&(r=Bt(i)))}else o=t&~l,o!==0?r=Bt(o):i!==0&&(r=Bt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-$e(n),l=1<<t,r|=e[t],n&=~l;return r}function tp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-$e(i),s=1<<o,a=l[o];a===-1?(!(s&t)||s&r)&&(l[o]=tp(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function Ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qu(){var e=Or;return Or<<=1,!(Or&4194240)&&(Or=64),e}function ci(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function wr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$e(n),e[n]=t}function lp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-$e(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Wo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-$e(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var M=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ju,bo,Yu,Xu,Zu,Yi=!1,Mr=[],mn=null,gn=null,vn=null,rr=new Map,lr=new Map,cn=[],ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,n){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":rr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(n.pointerId)}}function It(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Sr(n),n!==null&&bo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function op(e,n,t,r,l){switch(n){case"focusin":return mn=It(mn,e,n,t,r,l),!0;case"dragenter":return gn=It(gn,e,n,t,r,l),!0;case"mouseover":return vn=It(vn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return rr.set(i,It(rr.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,lr.set(i,It(lr.get(i)||null,e,n,t,r,l)),!0}return!1}function qu(e){var n=zn(e.target);if(n!==null){var t=Qn(n);if(t!==null){if(n=t.tag,n===13){if(n=Bu(t),n!==null){e.blockedOn=n,Zu(e.priority,function(){Yu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Xi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);bi=r,t.target.dispatchEvent(r),bi=null}else return n=Sr(t),n!==null&&bo(n),e.blockedOn=t,!1;n.shift()}return!0}function ea(e,n,t){Yr(e)&&t.delete(n)}function sp(){Yi=!1,mn!==null&&Yr(mn)&&(mn=null),gn!==null&&Yr(gn)&&(gn=null),vn!==null&&Yr(vn)&&(vn=null),rr.forEach(ea),lr.forEach(ea)}function Lt(e,n){e.blockedOn===n&&(e.blockedOn=null,Yi||(Yi=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,sp)))}function ir(e){function n(l){return Lt(l,e)}if(0<Mr.length){Lt(Mr[0],e);for(var t=1;t<Mr.length;t++){var r=Mr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Lt(mn,e),gn!==null&&Lt(gn,e),vn!==null&&Lt(vn,e),rr.forEach(n),lr.forEach(n),t=0;t<cn.length;t++)r=cn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<cn.length&&(t=cn[0],t.blockedOn===null);)qu(t),t.blockedOn===null&&cn.shift()}var ft=on.ReactCurrentBatchConfig,dl=!0;function ap(e,n,t,r){var l=M,i=ft.transition;ft.transition=null;try{M=1,Go(e,n,t,r)}finally{M=l,ft.transition=i}}function up(e,n,t,r){var l=M,i=ft.transition;ft.transition=null;try{M=4,Go(e,n,t,r)}finally{M=l,ft.transition=i}}function Go(e,n,t,r){if(dl){var l=Xi(e,n,t,r);if(l===null)wi(e,n,r,fl,t),qs(e,r);else if(op(l,e,n,t,r))r.stopPropagation();else if(qs(e,r),n&4&&-1<ip.indexOf(e)){for(;l!==null;){var i=Sr(l);if(i!==null&&Ju(i),i=Xi(e,n,t,r),i===null&&wi(e,n,r,fl,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else wi(e,n,r,null,t)}}var fl=null;function Xi(e,n,t,r){if(fl=null,e=Ho(r),e=zn(e),e!==null)if(n=Qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Bu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return fl=e,null}function ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yf()){case Vo:return 1;case bu:return 4;case ul:case Xf:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var fn=null,Qo=null,Xr=null;function nc(){if(Xr)return Xr;var e,n=Qo,t=n.length,r,l="value"in fn?fn.value:fn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Xr=l.slice(e,1<r?1-r:void 0)}function Zr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function na(){return!1}function _e(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Dr:na,this.isPropagationStopped=na,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),n}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=_e(Et),kr=G({},Et,{view:0,detail:0}),cp=_e(kr),di,fi,At,Dl=G({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==At&&(At&&e.type==="mousemove"?(di=e.screenX-At.screenX,fi=e.screenY-At.screenY):fi=di=0,At=e),di)},movementY:function(e){return"movementY"in e?e.movementY:fi}}),ta=_e(Dl),dp=G({},Dl,{dataTransfer:0}),fp=_e(dp),pp=G({},kr,{relatedTarget:0}),pi=_e(pp),hp=G({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),mp=_e(hp),gp=G({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vp=_e(gp),yp=G({},Et,{data:0}),ra=_e(yp),xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=kp[e])?!!n[e]:!1}function Jo(){return Sp}var Cp=G({},kr,{key:function(e){if(e.key){var n=xp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jo,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ep=_e(Cp),Pp=G({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),la=_e(Pp),Tp=G({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jo}),_p=_e(Tp),Np=G({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),jp=_e(Np),Rp=G({},Dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ip=_e(Rp),Lp=[9,13,27,32],Yo=en&&"CompositionEvent"in window,bt=null;en&&"documentMode"in document&&(bt=document.documentMode);var Ap=en&&"TextEvent"in window&&!bt,tc=en&&(!Yo||bt&&8<bt&&11>=bt),ia=" ",oa=!1;function rc(e,n){switch(e){case"keyup":return Lp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function Op(e,n){switch(e){case"compositionend":return lc(n);case"keypress":return n.which!==32?null:(oa=!0,ia);case"textInput":return e=n.data,e===ia&&oa?null:e;default:return null}}function zp(e,n){if(qn)return e==="compositionend"||!Yo&&rc(e,n)?(e=nc(),Xr=Qo=fn=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tc&&n.locale!=="ko"?null:n.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Mp[e.type]:n==="textarea"}function ic(e,n,t,r){Mu(r),n=pl(n,"onChange"),0<n.length&&(t=new Ko("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Gt=null,or=null;function Dp(e){gc(e,0)}function $l(e){var n=tt(e);if(ju(n))return e}function $p(e,n){if(e==="change")return n}var oc=!1;if(en){var hi;if(en){var mi="oninput"in document;if(!mi){var aa=document.createElement("div");aa.setAttribute("oninput","return;"),mi=typeof aa.oninput=="function"}hi=mi}else hi=!1;oc=hi&&(!document.documentMode||9<document.documentMode)}function ua(){Gt&&(Gt.detachEvent("onpropertychange",sc),or=Gt=null)}function sc(e){if(e.propertyName==="value"&&$l(or)){var n=[];ic(n,or,e,Ho(e)),Uu(Dp,n)}}function Fp(e,n,t){e==="focusin"?(ua(),Gt=n,or=t,Gt.attachEvent("onpropertychange",sc)):e==="focusout"&&ua()}function Up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(or)}function Bp(e,n){if(e==="click")return $l(n)}function Hp(e,n){if(e==="input"||e==="change")return $l(n)}function Vp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ue=typeof Object.is=="function"?Object.is:Vp;function sr(e,n){if(Ue(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Ai.call(n,l)||!Ue(e[l],n[l]))return!1}return!0}function ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function da(e,n){var t=ca(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ca(t)}}function ac(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ac(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function uc(){for(var e=window,n=ol();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ol(e.document)}return n}function Xo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Wp(e){var n=uc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ac(t.ownerDocument.documentElement,t)){if(r!==null&&Xo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=da(t,i);var o=da(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bp=en&&"documentMode"in document&&11>=document.documentMode,et=null,Zi=null,Qt=null,qi=!1;function fa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;qi||et==null||et!==ol(r)||(r=et,"selectionStart"in r&&Xo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qt&&sr(Qt,r)||(Qt=r,r=pl(Zi,"onSelect"),0<r.length&&(n=new Ko("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=et)))}function $r(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var nt={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},gi={},cc={};en&&(cc=document.createElement("div").style,"AnimationEvent"in window||(delete nt.animationend.animation,delete nt.animationiteration.animation,delete nt.animationstart.animation),"TransitionEvent"in window||delete nt.transitionend.transition);function Fl(e){if(gi[e])return gi[e];if(!nt[e])return e;var n=nt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in cc)return gi[e]=n[t];return e}var dc=Fl("animationend"),fc=Fl("animationiteration"),pc=Fl("animationstart"),hc=Fl("transitionend"),mc=new Map,pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,n){mc.set(e,n),Gn(n,[e])}for(var vi=0;vi<pa.length;vi++){var yi=pa[vi],Gp=yi.toLowerCase(),Qp=yi[0].toUpperCase()+yi.slice(1);Tn(Gp,"on"+Qp)}Tn(dc,"onAnimationEnd");Tn(fc,"onAnimationIteration");Tn(pc,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(hc,"onTransitionEnd");mt("onMouseEnter",["mouseout","mouseover"]);mt("onMouseLeave",["mouseout","mouseover"]);mt("onPointerEnter",["pointerout","pointerover"]);mt("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ht="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ht));function ha(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Gf(r,n,void 0,e),e.currentTarget=null}function gc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;ha(l,s,u),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;ha(l,s,u),i=a}}}if(al)throw e=Ki,al=!1,Ki=null,e}function B(e,n){var t=n[lo];t===void 0&&(t=n[lo]=new Set);var r=e+"__bubble";t.has(r)||(vc(n,e,2,!1),t.add(r))}function xi(e,n,t){var r=0;n&&(r|=4),vc(t,e,r,n)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Fr]){e[Fr]=!0,Eu.forEach(function(t){t!=="selectionchange"&&(Kp.has(t)||xi(t,!1,e),xi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fr]||(n[Fr]=!0,xi("selectionchange",!1,n))}}function vc(e,n,t,r){switch(ec(n)){case 1:var l=ap;break;case 4:l=up;break;default:l=Go}t=l.bind(null,n,t,e),l=void 0,!Qi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function wi(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=zn(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Uu(function(){var u=i,d=Ho(t),f=[];e:{var m=mc.get(e);if(m!==void 0){var y=Ko,v=e;switch(e){case"keypress":if(Zr(t)===0)break e;case"keydown":case"keyup":y=Ep;break;case"focusin":v="focus",y=pi;break;case"focusout":v="blur",y=pi;break;case"beforeblur":case"afterblur":y=pi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=_p;break;case dc:case fc:case pc:y=mp;break;case hc:y=jp;break;case"scroll":y=cp;break;case"wheel":y=Ip;break;case"copy":case"cut":case"paste":y=vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=la}var w=(n&4)!==0,C=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,h;c!==null;){h=c;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=tr(c,p),x!=null&&w.push(ur(c,x,h)))),C)break;c=c.return}0<w.length&&(m=new y(m,v,null,t,d),f.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==bi&&(v=t.relatedTarget||t.fromElement)&&(zn(v)||v[nn]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=u,v=v?zn(v):null,v!==null&&(C=Qn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=ta,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=la,x="onPointerLeave",p="onPointerEnter",c="pointer"),C=y==null?m:tt(y),h=v==null?m:tt(v),m=new w(x,c+"leave",y,t,d),m.target=C,m.relatedTarget=h,x=null,zn(d)===u&&(w=new w(p,c+"enter",v,t,d),w.target=h,w.relatedTarget=C,x=w),C=x,y&&v)n:{for(w=y,p=v,c=0,h=w;h;h=Yn(h))c++;for(h=0,x=p;x;x=Yn(x))h++;for(;0<c-h;)w=Yn(w),c--;for(;0<h-c;)p=Yn(p),h--;for(;c--;){if(w===p||p!==null&&w===p.alternate)break n;w=Yn(w),p=Yn(p)}w=null}else w=null;y!==null&&ma(f,m,y,w,!1),v!==null&&C!==null&&ma(f,C,v,w,!0)}}e:{if(m=u?tt(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var P=$p;else if(sa(m))if(oc)P=Hp;else{P=Up;var S=Fp}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=Bp);if(P&&(P=P(e,u))){ic(f,P,t,d);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Ui(m,"number",m.value)}switch(S=u?tt(u):window,e){case"focusin":(sa(S)||S.contentEditable==="true")&&(et=S,Zi=u,Qt=null);break;case"focusout":Qt=Zi=et=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,fa(f,t,d);break;case"selectionchange":if(bp)break;case"keydown":case"keyup":fa(f,t,d)}var T;if(Yo)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else qn?rc(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(tc&&t.locale!=="ko"&&(qn||j!=="onCompositionStart"?j==="onCompositionEnd"&&qn&&(T=nc()):(fn=d,Qo="value"in fn?fn.value:fn.textContent,qn=!0)),S=pl(u,j),0<S.length&&(j=new ra(j,e,null,t,d),f.push({event:j,listeners:S}),T?j.data=T:(T=lc(t),T!==null&&(j.data=T)))),(T=Ap?Op(e,t):zp(e,t))&&(u=pl(u,"onBeforeInput"),0<u.length&&(d=new ra("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:u}),d.data=T))}gc(f,n)})}function ur(e,n,t){return{instance:e,listener:n,currentTarget:t}}function pl(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=tr(e,t),i!=null&&r.unshift(ur(e,i,l)),i=tr(e,n),i!=null&&r.push(ur(e,i,l))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ma(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,l?(a=tr(t,i),a!=null&&o.unshift(ur(t,a,s))):l||(a=tr(t,i),a!=null&&o.push(ur(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Jp=/\r\n?/g,Yp=/\u0000|\uFFFD/g;function ga(e){return(typeof e=="string"?e:""+e).replace(Jp,`
`).replace(Yp,"")}function Ur(e,n,t){if(n=ga(n),ga(e)!==n&&t)throw Error(k(425))}function hl(){}var eo=null,no=null;function to(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ro=typeof setTimeout=="function"?setTimeout:void 0,Xp=typeof clearTimeout=="function"?clearTimeout:void 0,va=typeof Promise=="function"?Promise:void 0,Zp=typeof queueMicrotask=="function"?queueMicrotask:typeof va<"u"?function(e){return va.resolve(null).then(e).catch(qp)}:ro;function qp(e){setTimeout(function(){throw e})}function ki(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),ir(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);ir(n)}function yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ya(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Pt=Math.random().toString(36).slice(2),We="__reactFiber$"+Pt,cr="__reactProps$"+Pt,nn="__reactContainer$"+Pt,lo="__reactEvents$"+Pt,eh="__reactListeners$"+Pt,nh="__reactHandles$"+Pt;function zn(e){var n=e[We];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nn]||t[We]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ya(e);e!==null;){if(t=e[We])return t;e=ya(e)}return n}e=t,t=e.parentNode}return null}function Sr(e){return e=e[We]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ul(e){return e[cr]||null}var io=[],rt=-1;function _n(e){return{current:e}}function H(e){0>rt||(e.current=io[rt],io[rt]=null,rt--)}function U(e,n){rt++,io[rt]=e.current,e.current=n}var Pn={},ue=_n(Pn),ye=_n(!1),Un=Pn;function gt(e,n){var t=e.type.contextTypes;if(!t)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function ml(){H(ye),H(ue)}function xa(e,n,t){if(ue.current!==Pn)throw Error(k(168));U(ue,n),U(ye,t)}function yc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(k(108,Ff(e)||"Unknown",l));return G({},t,r)}function gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Un=ue.current,U(ue,e),U(ye,ye.current),!0}function wa(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=yc(e,n,Un),r.__reactInternalMemoizedMergedChildContext=e,H(ye),H(ue),U(ue,e)):H(ye),U(ye,t)}var Ye=null,Bl=!1,Si=!1;function xc(e){Ye===null?Ye=[e]:Ye.push(e)}function th(e){Bl=!0,xc(e)}function Nn(){if(!Si&&Ye!==null){Si=!0;var e=0,n=M;try{var t=Ye;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ye=null,Bl=!1}catch(l){throw Ye!==null&&(Ye=Ye.slice(e+1)),Wu(Vo,Nn),l}finally{M=n,Si=!1}}return null}var lt=[],it=0,vl=null,yl=0,Ne=[],je=0,Bn=null,Xe=1,Ze="";function An(e,n){lt[it++]=yl,lt[it++]=vl,vl=e,yl=n}function wc(e,n,t){Ne[je++]=Xe,Ne[je++]=Ze,Ne[je++]=Bn,Bn=e;var r=Xe;e=Ze;var l=32-$e(r)-1;r&=~(1<<l),t+=1;var i=32-$e(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Xe=1<<32-$e(n)+l|t<<l|r,Ze=i+e}else Xe=1<<i|t<<l|r,Ze=e}function Zo(e){e.return!==null&&(An(e,1),wc(e,1,0))}function qo(e){for(;e===vl;)vl=lt[--it],lt[it]=null,yl=lt[--it],lt[it]=null;for(;e===Bn;)Bn=Ne[--je],Ne[je]=null,Ze=Ne[--je],Ne[je]=null,Xe=Ne[--je],Ne[je]=null}var Ee=null,Ce=null,V=!1,De=null;function kc(e,n){var t=Re(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ka(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ee=e,Ce=yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ee=e,Ce=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Bn!==null?{id:Xe,overflow:Ze}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Re(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ee=e,Ce=null,!0):!1;default:return!1}}function oo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function so(e){if(V){var n=Ce;if(n){var t=n;if(!ka(e,n)){if(oo(e))throw Error(k(418));n=yn(t.nextSibling);var r=Ee;n&&ka(e,n)?kc(r,t):(e.flags=e.flags&-4097|2,V=!1,Ee=e)}}else{if(oo(e))throw Error(k(418));e.flags=e.flags&-4097|2,V=!1,Ee=e}}}function Sa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Br(e){if(e!==Ee)return!1;if(!V)return Sa(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!to(e.type,e.memoizedProps)),n&&(n=Ce)){if(oo(e))throw Sc(),Error(k(418));for(;n;)kc(e,n),n=yn(n.nextSibling)}if(Sa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ce=yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ce=null}}else Ce=Ee?yn(e.stateNode.nextSibling):null;return!0}function Sc(){for(var e=Ce;e;)e=yn(e.nextSibling)}function vt(){Ce=Ee=null,V=!1}function es(e){De===null?De=[e]:De.push(e)}var rh=on.ReactCurrentBatchConfig;function Ot(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Hr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ca(e){var n=e._init;return n(e._payload)}function Cc(e){function n(p,c){if(e){var h=p.deletions;h===null?(p.deletions=[c],p.flags|=16):h.push(c)}}function t(p,c){if(!e)return null;for(;c!==null;)n(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Sn(p,c),p.index=0,p.sibling=null,p}function i(p,c,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<c?(p.flags|=2,c):h):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,h,x){return c===null||c.tag!==6?(c=ji(h,p.mode,x),c.return=p,c):(c=l(c,h),c.return=p,c)}function a(p,c,h,x){var P=h.type;return P===Zn?d(p,c,h.props.children,x,h.key):c!==null&&(c.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===an&&Ca(P)===c.type)?(x=l(c,h.props),x.ref=Ot(p,c,h),x.return=p,x):(x=il(h.type,h.key,h.props,null,p.mode,x),x.ref=Ot(p,c,h),x.return=p,x)}function u(p,c,h,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Ri(h,p.mode,x),c.return=p,c):(c=l(c,h.children||[]),c.return=p,c)}function d(p,c,h,x,P){return c===null||c.tag!==7?(c=Fn(h,p.mode,x,P),c.return=p,c):(c=l(c,h),c.return=p,c)}function f(p,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ji(""+c,p.mode,h),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ir:return h=il(c.type,c.key,c.props,null,p.mode,h),h.ref=Ot(p,null,c),h.return=p,h;case Xn:return c=Ri(c,p.mode,h),c.return=p,c;case an:var x=c._init;return f(p,x(c._payload),h)}if(Ut(c)||jt(c))return c=Fn(c,p.mode,h,null),c.return=p,c;Hr(p,c)}return null}function m(p,c,h,x){var P=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return P!==null?null:s(p,c,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ir:return h.key===P?a(p,c,h,x):null;case Xn:return h.key===P?u(p,c,h,x):null;case an:return P=h._init,m(p,c,P(h._payload),x)}if(Ut(h)||jt(h))return P!==null?null:d(p,c,h,x,null);Hr(p,h)}return null}function y(p,c,h,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,s(c,p,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ir:return p=p.get(x.key===null?h:x.key)||null,a(c,p,x,P);case Xn:return p=p.get(x.key===null?h:x.key)||null,u(c,p,x,P);case an:var S=x._init;return y(p,c,h,S(x._payload),P)}if(Ut(x)||jt(x))return p=p.get(h)||null,d(c,p,x,P,null);Hr(c,x)}return null}function v(p,c,h,x){for(var P=null,S=null,T=c,j=c=0,$=null;T!==null&&j<h.length;j++){T.index>j?($=T,T=null):$=T.sibling;var R=m(p,T,h[j],x);if(R===null){T===null&&(T=$);break}e&&T&&R.alternate===null&&n(p,T),c=i(R,c,j),S===null?P=R:S.sibling=R,S=R,T=$}if(j===h.length)return t(p,T),V&&An(p,j),P;if(T===null){for(;j<h.length;j++)T=f(p,h[j],x),T!==null&&(c=i(T,c,j),S===null?P=T:S.sibling=T,S=T);return V&&An(p,j),P}for(T=r(p,T);j<h.length;j++)$=y(T,p,j,h[j],x),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?j:$.key),c=i($,c,j),S===null?P=$:S.sibling=$,S=$);return e&&T.forEach(function(ce){return n(p,ce)}),V&&An(p,j),P}function w(p,c,h,x){var P=jt(h);if(typeof P!="function")throw Error(k(150));if(h=P.call(h),h==null)throw Error(k(151));for(var S=P=null,T=c,j=c=0,$=null,R=h.next();T!==null&&!R.done;j++,R=h.next()){T.index>j?($=T,T=null):$=T.sibling;var ce=m(p,T,R.value,x);if(ce===null){T===null&&(T=$);break}e&&T&&ce.alternate===null&&n(p,T),c=i(ce,c,j),S===null?P=ce:S.sibling=ce,S=ce,T=$}if(R.done)return t(p,T),V&&An(p,j),P;if(T===null){for(;!R.done;j++,R=h.next())R=f(p,R.value,x),R!==null&&(c=i(R,c,j),S===null?P=R:S.sibling=R,S=R);return V&&An(p,j),P}for(T=r(p,T);!R.done;j++,R=h.next())R=y(T,p,j,R.value,x),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?j:R.key),c=i(R,c,j),S===null?P=R:S.sibling=R,S=R);return e&&T.forEach(function(Tt){return n(p,Tt)}),V&&An(p,j),P}function C(p,c,h,x){if(typeof h=="object"&&h!==null&&h.type===Zn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ir:e:{for(var P=h.key,S=c;S!==null;){if(S.key===P){if(P=h.type,P===Zn){if(S.tag===7){t(p,S.sibling),c=l(S,h.props.children),c.return=p,p=c;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===an&&Ca(P)===S.type){t(p,S.sibling),c=l(S,h.props),c.ref=Ot(p,S,h),c.return=p,p=c;break e}t(p,S);break}else n(p,S);S=S.sibling}h.type===Zn?(c=Fn(h.props.children,p.mode,x,h.key),c.return=p,p=c):(x=il(h.type,h.key,h.props,null,p.mode,x),x.ref=Ot(p,c,h),x.return=p,p=x)}return o(p);case Xn:e:{for(S=h.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){t(p,c.sibling),c=l(c,h.children||[]),c.return=p,p=c;break e}else{t(p,c);break}else n(p,c);c=c.sibling}c=Ri(h,p.mode,x),c.return=p,p=c}return o(p);case an:return S=h._init,C(p,c,S(h._payload),x)}if(Ut(h))return v(p,c,h,x);if(jt(h))return w(p,c,h,x);Hr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(t(p,c.sibling),c=l(c,h),c.return=p,p=c):(t(p,c),c=ji(h,p.mode,x),c.return=p,p=c),o(p)):t(p,c)}return C}var yt=Cc(!0),Ec=Cc(!1),xl=_n(null),wl=null,ot=null,ns=null;function ts(){ns=ot=wl=null}function rs(e){var n=xl.current;H(xl),e._currentValue=n}function ao(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function pt(e,n){wl=e,ns=ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ve=!0),e.firstContext=null)}function Le(e){var n=e._currentValue;if(ns!==e)if(e={context:e,memoizedValue:n,next:null},ot===null){if(wl===null)throw Error(k(308));ot=e,wl.dependencies={lanes:0,firstContext:e}}else ot=ot.next=e;return n}var Mn=null;function ls(e){Mn===null?Mn=[e]:Mn.push(e)}function Pc(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,ls(n)):(t.next=l.next,l.next=t),n.interleaved=t,tn(e,r)}function tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var un=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function xn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,tn(e,t)}return l=r.interleaved,l===null?(n.next=n,ls(r)):(n.next=l.next,l.next=n),r.interleaved=n,tn(e,t)}function qr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wo(e,t)}}function Ea(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function kl(e,n,t,r){var l=e.updateQueue;un=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var f=l.baseState;o=0,d=u=a=null,s=i;do{var m=s.lane,y=s.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(m=n,y=t,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(y,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(y,f,m):v,m==null)break e;f=G({},f,m);break e;case 2:un=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=y,a=f):d=d.next=y,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(d===null&&(a=f),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=d,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Vn|=o,e.lanes=o,e.memoizedState=f}}function Pa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var Cr={},Ke=_n(Cr),dr=_n(Cr),fr=_n(Cr);function Dn(e){if(e===Cr)throw Error(k(174));return e}function os(e,n){switch(U(fr,n),U(dr,e),U(Ke,Cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Hi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Hi(n,e)}H(Ke),U(Ke,n)}function xt(){H(Ke),H(dr),H(fr)}function _c(e){Dn(fr.current);var n=Dn(Ke.current),t=Hi(n,e.type);n!==t&&(U(dr,e),U(Ke,t))}function ss(e){dr.current===e&&(H(Ke),H(dr))}var W=_n(0);function Sl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ci=[];function as(){for(var e=0;e<Ci.length;e++)Ci[e]._workInProgressVersionPrimary=null;Ci.length=0}var el=on.ReactCurrentDispatcher,Ei=on.ReactCurrentBatchConfig,Hn=0,b=null,Z=null,ne=null,Cl=!1,Kt=!1,pr=0,lh=0;function oe(){throw Error(k(321))}function us(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ue(e[t],n[t]))return!1;return!0}function cs(e,n,t,r,l,i){if(Hn=i,b=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,el.current=e===null||e.memoizedState===null?ah:uh,e=t(r,l),Kt){i=0;do{if(Kt=!1,pr=0,25<=i)throw Error(k(301));i+=1,ne=Z=null,n.updateQueue=null,el.current=ch,e=t(r,l)}while(Kt)}if(el.current=El,n=Z!==null&&Z.next!==null,Hn=0,ne=Z=b=null,Cl=!1,n)throw Error(k(300));return e}function ds(){var e=pr!==0;return pr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?b.memoizedState=ne=e:ne=ne.next=e,ne}function Ae(){if(Z===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var n=ne===null?b.memoizedState:ne.next;if(n!==null)ne=n,Z=e;else{if(e===null)throw Error(k(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ne===null?b.memoizedState=ne=e:ne=ne.next=e}return ne}function hr(e,n){return typeof n=="function"?n(e):n}function Pi(e){var n=Ae(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=Z,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,u=i;do{var d=u.lane;if((Hn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=f,o=r):a=a.next=f,b.lanes|=d,Vn|=d}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=s,Ue(r,n.memoizedState)||(ve=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,b.lanes|=i,Vn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ti(e){var n=Ae(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ue(i,n.memoizedState)||(ve=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Nc(){}function jc(e,n){var t=b,r=Ae(),l=n(),i=!Ue(r.memoizedState,l);if(i&&(r.memoizedState=l,ve=!0),r=r.queue,fs(Lc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,mr(9,Ic.bind(null,t,r,l,n),void 0,null),te===null)throw Error(k(349));Hn&30||Rc(t,n,l)}return l}function Rc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=b.updateQueue,n===null?(n={lastEffect:null,stores:null},b.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ic(e,n,t,r){n.value=t,n.getSnapshot=r,Ac(n)&&Oc(e)}function Lc(e,n,t){return t(function(){Ac(n)&&Oc(e)})}function Ac(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ue(e,t)}catch{return!0}}function Oc(e){var n=tn(e,1);n!==null&&Fe(n,e,1,-1)}function Ta(e){var n=Ve();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},n.queue=e,e=e.dispatch=sh.bind(null,b,e),[n.memoizedState,e]}function mr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=b.updateQueue,n===null?(n={lastEffect:null,stores:null},b.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function zc(){return Ae().memoizedState}function nl(e,n,t,r){var l=Ve();b.flags|=e,l.memoizedState=mr(1|n,t,void 0,r===void 0?null:r)}function Hl(e,n,t,r){var l=Ae();r=r===void 0?null:r;var i=void 0;if(Z!==null){var o=Z.memoizedState;if(i=o.destroy,r!==null&&us(r,o.deps)){l.memoizedState=mr(n,t,i,r);return}}b.flags|=e,l.memoizedState=mr(1|n,t,i,r)}function _a(e,n){return nl(8390656,8,e,n)}function fs(e,n){return Hl(2048,8,e,n)}function Mc(e,n){return Hl(4,2,e,n)}function Dc(e,n){return Hl(4,4,e,n)}function $c(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fc(e,n,t){return t=t!=null?t.concat([e]):null,Hl(4,4,$c.bind(null,n,e),t)}function ps(){}function Uc(e,n){var t=Ae();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&us(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Bc(e,n){var t=Ae();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&us(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Hc(e,n,t){return Hn&21?(Ue(t,n)||(t=Qu(),b.lanes|=t,Vn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=t)}function ih(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Ei.transition;Ei.transition={};try{e(!1),n()}finally{M=t,Ei.transition=r}}function Vc(){return Ae().memoizedState}function oh(e,n,t){var r=kn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Wc(e))bc(n,t);else if(t=Pc(e,n,t,r),t!==null){var l=fe();Fe(t,e,r,l),Gc(t,n,r)}}function sh(e,n,t){var r=kn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wc(e))bc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,s=i(o,t);if(l.hasEagerState=!0,l.eagerState=s,Ue(s,o)){var a=n.interleaved;a===null?(l.next=l,ls(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=Pc(e,n,l,r),t!==null&&(l=fe(),Fe(t,e,r,l),Gc(t,n,r))}}function Wc(e){var n=e.alternate;return e===b||n!==null&&n===b}function bc(e,n){Kt=Cl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Gc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wo(e,t)}}var El={readContext:Le,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},ah={readContext:Le,useCallback:function(e,n){return Ve().memoizedState=[e,n===void 0?null:n],e},useContext:Le,useEffect:_a,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,nl(4194308,4,$c.bind(null,n,e),t)},useLayoutEffect:function(e,n){return nl(4194308,4,e,n)},useInsertionEffect:function(e,n){return nl(4,2,e,n)},useMemo:function(e,n){var t=Ve();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ve();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=oh.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var n=Ve();return e={current:e},n.memoizedState=e},useState:Ta,useDebugValue:ps,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Ta(!1),n=e[0];return e=ih.bind(null,e[1]),Ve().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=b,l=Ve();if(V){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),te===null)throw Error(k(349));Hn&30||Rc(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,_a(Lc.bind(null,r,i,e),[e]),r.flags|=2048,mr(9,Ic.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ve(),n=te.identifierPrefix;if(V){var t=Ze,r=Xe;t=(r&~(1<<32-$e(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=pr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=lh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},uh={readContext:Le,useCallback:Uc,useContext:Le,useEffect:fs,useImperativeHandle:Fc,useInsertionEffect:Mc,useLayoutEffect:Dc,useMemo:Bc,useReducer:Pi,useRef:zc,useState:function(){return Pi(hr)},useDebugValue:ps,useDeferredValue:function(e){var n=Ae();return Hc(n,Z.memoizedState,e)},useTransition:function(){var e=Pi(hr)[0],n=Ae().memoizedState;return[e,n]},useMutableSource:Nc,useSyncExternalStore:jc,useId:Vc,unstable_isNewReconciler:!1},ch={readContext:Le,useCallback:Uc,useContext:Le,useEffect:fs,useImperativeHandle:Fc,useInsertionEffect:Mc,useLayoutEffect:Dc,useMemo:Bc,useReducer:Ti,useRef:zc,useState:function(){return Ti(hr)},useDebugValue:ps,useDeferredValue:function(e){var n=Ae();return Z===null?n.memoizedState=e:Hc(n,Z.memoizedState,e)},useTransition:function(){var e=Ti(hr)[0],n=Ae().memoizedState;return[e,n]},useMutableSource:Nc,useSyncExternalStore:jc,useId:Vc,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function uo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Vl={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=fe(),l=kn(e),i=qe(r,l);i.payload=n,t!=null&&(i.callback=t),n=xn(e,i,l),n!==null&&(Fe(n,e,l,r),qr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=fe(),l=kn(e),i=qe(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=xn(e,i,l),n!==null&&(Fe(n,e,l,r),qr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=fe(),r=kn(e),l=qe(t,r);l.tag=2,n!=null&&(l.callback=n),n=xn(e,l,r),n!==null&&(Fe(n,e,r,t),qr(n,e,r))}};function Na(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!sr(t,r)||!sr(l,i):!0}function Qc(e,n,t){var r=!1,l=Pn,i=n.contextType;return typeof i=="object"&&i!==null?i=Le(i):(l=xe(n)?Un:ue.current,r=n.contextTypes,i=(r=r!=null)?gt(e,l):Pn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Vl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function ja(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Vl.enqueueReplaceState(n,n.state,null)}function co(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},is(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Le(i):(i=xe(n)?Un:ue.current,l.context=gt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(uo(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Vl.enqueueReplaceState(l,l.state,null),kl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function wt(e,n){try{var t="",r=n;do t+=$f(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function _i(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function fo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var dh=typeof WeakMap=="function"?WeakMap:Map;function Kc(e,n,t){t=qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Tl||(Tl=!0,So=r),fo(e,n)},t}function Jc(e,n,t){t=qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){fo(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){fo(e,n),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Ra(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new dh;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Ph.bind(null,e,n,t),n.then(e,e))}function Ia(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function La(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=qe(-1,1),n.tag=2,xn(t,n,1))),t.lanes|=1),e)}var fh=on.ReactCurrentOwner,ve=!1;function de(e,n,t,r){n.child=e===null?Ec(n,null,t,r):yt(n,e.child,t,r)}function Aa(e,n,t,r,l){t=t.render;var i=n.ref;return pt(n,l),r=cs(e,n,t,r,i,l),t=ds(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,rn(e,n,l)):(V&&t&&Zo(n),n.flags|=1,de(e,n,r,l),n.child)}function Oa(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!ks(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Yc(e,n,i,r,l)):(e=il(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:sr,t(o,r)&&e.ref===n.ref)return rn(e,n,l)}return n.flags|=1,e=Sn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Yc(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(sr(i,r)&&e.ref===n.ref)if(ve=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ve=!0);else return n.lanes=e.lanes,rn(e,n,l)}return po(e,n,t,r,l)}function Xc(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(at,ke),ke|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(at,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,U(at,ke),ke|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,U(at,ke),ke|=r;return de(e,n,l,t),n.child}function Zc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function po(e,n,t,r,l){var i=xe(t)?Un:ue.current;return i=gt(n,i),pt(n,l),t=cs(e,n,t,r,i,l),r=ds(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,rn(e,n,l)):(V&&r&&Zo(n),n.flags|=1,de(e,n,t,l),n.child)}function za(e,n,t,r,l){if(xe(t)){var i=!0;gl(n)}else i=!1;if(pt(n,l),n.stateNode===null)tl(e,n),Qc(n,t,r),co(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=xe(t)?Un:ue.current,u=gt(n,u));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&ja(n,o,r,u),un=!1;var m=n.memoizedState;o.state=m,kl(n,r,o,l),a=n.memoizedState,s!==r||m!==a||ye.current||un?(typeof d=="function"&&(uo(n,t,d,r),a=n.memoizedState),(s=un||Na(n,t,s,r,m,a,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Tc(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:ze(n.type,s),o.props=u,f=n.pendingProps,m=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Le(a):(a=xe(t)?Un:ue.current,a=gt(n,a));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||m!==a)&&ja(n,o,r,a),un=!1,m=n.memoizedState,o.state=m,kl(n,r,o,l);var v=n.memoizedState;s!==f||m!==v||ye.current||un?(typeof y=="function"&&(uo(n,t,y,r),v=n.memoizedState),(u=un||Na(n,t,u,r,m,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return ho(e,n,t,r,i,l)}function ho(e,n,t,r,l,i){Zc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&wa(n,t,!1),rn(e,n,i);r=n.stateNode,fh.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=yt(n,e.child,null,i),n.child=yt(n,null,s,i)):de(e,n,s,i),n.memoizedState=r.state,l&&wa(n,t,!0),n.child}function qc(e){var n=e.stateNode;n.pendingContext?xa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&xa(e,n.context,!1),os(e,n.containerInfo)}function Ma(e,n,t,r,l){return vt(),es(l),n.flags|=256,de(e,n,t,r),n.child}var mo={dehydrated:null,treeContext:null,retryLane:0};function go(e){return{baseLanes:e,cachePool:null,transitions:null}}function ed(e,n,t){var r=n.pendingProps,l=W.current,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(W,l&1),e===null)return so(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Gl(o,r,0,null),e=Fn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=go(t),n.memoizedState=mo,e):hs(n,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return ph(e,n,o,r,s,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Sn(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Sn(s,i):(i=Fn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?go(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=mo,r}return i=e.child,e=i.sibling,r=Sn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function hs(e,n){return n=Gl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Vr(e,n,t,r){return r!==null&&es(r),yt(n,e.child,null,t),e=hs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ph(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=_i(Error(k(422))),Vr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Gl({mode:"visible",children:r.children},l,0,null),i=Fn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&yt(n,e.child,null,o),n.child.memoizedState=go(o),n.memoizedState=mo,i);if(!(n.mode&1))return Vr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=_i(i,r,void 0),Vr(e,n,o,r)}if(s=(o&e.childLanes)!==0,ve||s){if(r=te,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,tn(e,l),Fe(r,e,l,-1))}return ws(),r=_i(Error(k(421))),Vr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Th.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,Ce=yn(l.nextSibling),Ee=n,V=!0,De=null,e!==null&&(Ne[je++]=Xe,Ne[je++]=Ze,Ne[je++]=Bn,Xe=e.id,Ze=e.overflow,Bn=n),n=hs(n,r.children),n.flags|=4096,n)}function Da(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ao(e.return,n,t)}function Ni(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function nd(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(de(e,n,r.children,t),r=W.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Da(e,t,n);else if(e.tag===19)Da(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(W,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Sl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ni(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Sl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ni(n,!0,t,null,i);break;case"together":Ni(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function tl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Vn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Sn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Sn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function hh(e,n,t){switch(n.tag){case 3:qc(n),vt();break;case 5:_c(n);break;case 1:xe(n.type)&&gl(n);break;case 4:os(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;U(xl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(U(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?ed(e,n,t):(U(W,W.current&1),e=rn(e,n,t),e!==null?e.sibling:null);U(W,W.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return nd(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(W,W.current),r)break;return null;case 22:case 23:return n.lanes=0,Xc(e,n,t)}return rn(e,n,t)}var td,vo,rd,ld;td=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};vo=function(){};rd=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Dn(Ke.current);var i=null;switch(t){case"input":l=$i(e,l),r=$i(e,r),i=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),i=[];break;case"textarea":l=Bi(e,l),r=Bi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hl)}Vi(t,r);var o;t=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(er.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(i||(i=[]),i.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(er.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&B("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};ld=function(e,n,t,r){t!==r&&(n.flags|=4)};function zt(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function mh(e,n,t){var r=n.pendingProps;switch(qo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return xe(n.type)&&ml(),se(n),null;case 3:return r=n.stateNode,xt(),H(ye),H(ue),as(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(Po(De),De=null))),vo(e,n),se(n),null;case 5:ss(n);var l=Dn(fr.current);if(t=n.type,e!==null&&n.stateNode!=null)rd(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return se(n),null}if(e=Dn(Ke.current),Br(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[We]=n,r[cr]=i,e=(n.mode&1)!==0,t){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<Ht.length;l++)B(Ht[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Gs(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":Ks(r,i),B("invalid",r)}Vi(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ur(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ur(r.textContent,s,e),l=["children",""+s]):er.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&B("scroll",r)}switch(t){case"input":Lr(r),Qs(r,i,!0);break;case"textarea":Lr(r),Js(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=hl)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[We]=n,e[cr]=r,td(e,n,!1,!1),n.stateNode=e;e:{switch(o=Wi(t,r),t){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<Ht.length;l++)B(Ht[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":Gs(e,r),l=$i(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),B("invalid",e);break;case"textarea":Ks(e,r),l=Bi(e,r),B("invalid",e);break;default:l=r}Vi(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?zu(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Au(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&nr(e,a):typeof a=="number"&&nr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(er.hasOwnProperty(i)?a!=null&&i==="onScroll"&&B("scroll",e):a!=null&&$o(e,i,a,o))}switch(t){case"input":Lr(e),Qs(e,r,!1);break;case"textarea":Lr(e),Js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ut(e,!!r.multiple,i,!1):r.defaultValue!=null&&ut(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=hl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)ld(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Dn(fr.current),Dn(Ke.current),Br(n)){if(r=n.stateNode,t=n.memoizedProps,r[We]=n,(i=r.nodeValue!==t)&&(e=Ee,e!==null))switch(e.tag){case 3:Ur(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ur(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[We]=n,n.stateNode=r}return se(n),null;case 13:if(H(W),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ce!==null&&n.mode&1&&!(n.flags&128))Sc(),vt(),n.flags|=98560,i=!1;else if(i=Br(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[We]=n}else vt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),i=!1}else De!==null&&(Po(De),De=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?q===0&&(q=3):ws())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return xt(),vo(e,n),e===null&&ar(n.stateNode.containerInfo),se(n),null;case 10:return rs(n.type._context),se(n),null;case 17:return xe(n.type)&&ml(),se(n),null;case 19:if(H(W),i=n.memoizedState,i===null)return se(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)zt(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Sl(e),o!==null){for(n.flags|=128,zt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(W,W.current&1|2),n.child}e=e.sibling}i.tail!==null&&Y()>kt&&(n.flags|=128,r=!0,zt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Sl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),zt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!V)return se(n),null}else 2*Y()-i.renderingStartTime>kt&&t!==1073741824&&(n.flags|=128,r=!0,zt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Y(),n.sibling=null,t=W.current,U(W,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return xs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ke&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function gh(e,n){switch(qo(n),n.tag){case 1:return xe(n.type)&&ml(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return xt(),H(ye),H(ue),as(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ss(n),null;case 13:if(H(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));vt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(W),null;case 4:return xt(),null;case 10:return rs(n.type._context),null;case 22:case 23:return xs(),null;case 24:return null;default:return null}}var Wr=!1,ae=!1,vh=typeof WeakSet=="function"?WeakSet:Set,_=null;function st(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(e,n,r)}else t.current=null}function yo(e,n,t){try{t()}catch(r){Q(e,n,r)}}var $a=!1;function yh(e,n){if(eo=dl,e=uc(),Xo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,u=0,d=0,f=e,m=null;n:for(;;){for(var y;f!==t||l!==0&&f.nodeType!==3||(s=o+l),f!==i||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break n;if(m===t&&++u===l&&(s=o),m===i&&++d===r&&(a=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(no={focusedElem:e,selectionRange:t},dl=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,p=n.stateNode,c=p.getSnapshotBeforeUpdate(n.elementType===n.type?w:ze(n.type,w),C);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){Q(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return v=$a,$a=!1,v}function Jt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&yo(n,t,i)}l=l.next}while(l!==r)}}function Wl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function xo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function id(e){var n=e.alternate;n!==null&&(e.alternate=null,id(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[We],delete n[cr],delete n[lo],delete n[eh],delete n[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function od(e){return e.tag===5||e.tag===3||e.tag===4}function Fa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=hl));else if(r!==4&&(e=e.child,e!==null))for(wo(e,n,t),e=e.sibling;e!==null;)wo(e,n,t),e=e.sibling}function ko(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ko(e,n,t),e=e.sibling;e!==null;)ko(e,n,t),e=e.sibling}var re=null,Me=!1;function sn(e,n,t){for(t=t.child;t!==null;)sd(e,n,t),t=t.sibling}function sd(e,n,t){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Ml,t)}catch{}switch(t.tag){case 5:ae||st(t,n);case 6:var r=re,l=Me;re=null,sn(e,n,t),re=r,Me=l,re!==null&&(Me?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(Me?(e=re,t=t.stateNode,e.nodeType===8?ki(e.parentNode,t):e.nodeType===1&&ki(e,t),ir(e)):ki(re,t.stateNode));break;case 4:r=re,l=Me,re=t.stateNode.containerInfo,Me=!0,sn(e,n,t),re=r,Me=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&yo(t,n,o),l=l.next}while(l!==r)}sn(e,n,t);break;case 1:if(!ae&&(st(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){Q(t,n,s)}sn(e,n,t);break;case 21:sn(e,n,t);break;case 22:t.mode&1?(ae=(r=ae)||t.memoizedState!==null,sn(e,n,t),ae=r):sn(e,n,t);break;default:sn(e,n,t)}}function Ua(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new vh),n.forEach(function(r){var l=_h.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Oe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Me=!1;break e;case 3:re=s.stateNode.containerInfo,Me=!0;break e;case 4:re=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(re===null)throw Error(k(160));sd(i,o,l),re=null,Me=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){Q(l,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ad(n,e),n=n.sibling}function ad(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(n,e),Be(e),r&4){try{Jt(3,e,e.return),Wl(3,e)}catch(w){Q(e,e.return,w)}try{Jt(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:Oe(n,e),Be(e),r&512&&t!==null&&st(t,t.return);break;case 5:if(Oe(n,e),Be(e),r&512&&t!==null&&st(t,t.return),e.flags&32){var l=e.stateNode;try{nr(l,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ru(l,i),Wi(s,o);var u=Wi(s,i);for(o=0;o<a.length;o+=2){var d=a[o],f=a[o+1];d==="style"?zu(l,f):d==="dangerouslySetInnerHTML"?Au(l,f):d==="children"?nr(l,f):$o(l,d,f,u)}switch(s){case"input":Fi(l,i);break;case"textarea":Iu(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?ut(l,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?ut(l,!!i.multiple,i.defaultValue,!0):ut(l,!!i.multiple,i.multiple?[]:"",!1))}l[cr]=i}catch(w){Q(e,e.return,w)}}break;case 6:if(Oe(n,e),Be(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){Q(e,e.return,w)}}break;case 3:if(Oe(n,e),Be(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ir(n.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:Oe(n,e),Be(e);break;case 13:Oe(n,e),Be(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(vs=Y())),r&4&&Ua(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(u=ae)||d,Oe(n,e),ae=u):Oe(n,e),Be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(f=_=d;_!==null;){switch(m=_,y=m.child,m.tag){case 0:case 11:case 14:case 15:Jt(4,m,m.return);break;case 1:st(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(w){Q(r,t,w)}}break;case 5:st(m,m.return);break;case 22:if(m.memoizedState!==null){Ha(f);continue}}y!==null?(y.return=m,_=y):Ha(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{l=f.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ou("display",o))}catch(w){Q(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Oe(n,e),Be(e),r&4&&Ua(e);break;case 21:break;default:Oe(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(od(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(nr(l,""),r.flags&=-33);var i=Fa(e);ko(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Fa(e);wo(e,s,o);break;default:throw Error(k(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xh(e,n,t){_=e,ud(e)}function ud(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var l=_,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Wr;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||ae;s=Wr;var u=ae;if(Wr=o,(ae=a)&&!u)for(_=l;_!==null;)o=_,a=o.child,o.tag===22&&o.memoizedState!==null?Va(l):a!==null?(a.return=o,_=a):Va(l);for(;i!==null;)_=i,ud(i),i=i.sibling;_=l,Wr=s,ae=u}Ba(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,_=i):Ba(e)}}function Ba(e){for(;_!==null;){var n=_;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||Wl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ae)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Pa(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Pa(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ir(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||n.flags&512&&xo(n)}catch(m){Q(n,n.return,m)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function Ha(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function Va(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Wl(4,n)}catch(a){Q(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){Q(n,l,a)}}var i=n.return;try{xo(n)}catch(a){Q(n,i,a)}break;case 5:var o=n.return;try{xo(n)}catch(a){Q(n,o,a)}}}catch(a){Q(n,n.return,a)}if(n===e){_=null;break}var s=n.sibling;if(s!==null){s.return=n.return,_=s;break}_=n.return}}var wh=Math.ceil,Pl=on.ReactCurrentDispatcher,ms=on.ReactCurrentOwner,Ie=on.ReactCurrentBatchConfig,O=0,te=null,X=null,le=0,ke=0,at=_n(0),q=0,gr=null,Vn=0,bl=0,gs=0,Yt=null,ge=null,vs=0,kt=1/0,Je=null,Tl=!1,So=null,wn=null,br=!1,pn=null,_l=0,Xt=0,Co=null,rl=-1,ll=0;function fe(){return O&6?Y():rl!==-1?rl:rl=Y()}function kn(e){return e.mode&1?O&2&&le!==0?le&-le:rh.transition!==null?(ll===0&&(ll=Qu()),ll):(e=M,e!==0||(e=window.event,e=e===void 0?16:ec(e.type)),e):1}function Fe(e,n,t,r){if(50<Xt)throw Xt=0,Co=null,Error(k(185));wr(e,t,r),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(bl|=t),q===4&&dn(e,le)),we(e,r),t===1&&O===0&&!(n.mode&1)&&(kt=Y()+500,Bl&&Nn()))}function we(e,n){var t=e.callbackNode;rp(e,n);var r=cl(e,e===te?le:0);if(r===0)t!==null&&Zs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Zs(t),n===1)e.tag===0?th(Wa.bind(null,e)):xc(Wa.bind(null,e)),Zp(function(){!(O&6)&&Nn()}),t=null;else{switch(Ku(r)){case 1:t=Vo;break;case 4:t=bu;break;case 16:t=ul;break;case 536870912:t=Gu;break;default:t=ul}t=vd(t,cd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function cd(e,n){if(rl=-1,ll=0,O&6)throw Error(k(327));var t=e.callbackNode;if(ht()&&e.callbackNode!==t)return null;var r=cl(e,e===te?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Nl(e,r);else{n=r;var l=O;O|=2;var i=fd();(te!==e||le!==n)&&(Je=null,kt=Y()+500,$n(e,n));do try{Ch();break}catch(s){dd(e,s)}while(!0);ts(),Pl.current=i,O=l,X!==null?n=0:(te=null,le=0,n=q)}if(n!==0){if(n===2&&(l=Ji(e),l!==0&&(r=l,n=Eo(e,l))),n===1)throw t=gr,$n(e,0),dn(e,r),we(e,Y()),t;if(n===6)dn(e,r);else{if(l=e.current.alternate,!(r&30)&&!kh(l)&&(n=Nl(e,r),n===2&&(i=Ji(e),i!==0&&(r=i,n=Eo(e,i))),n===1))throw t=gr,$n(e,0),dn(e,r),we(e,Y()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:On(e,ge,Je);break;case 3:if(dn(e,r),(r&130023424)===r&&(n=vs+500-Y(),10<n)){if(cl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ro(On.bind(null,e,ge,Je),n);break}On(e,ge,Je);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-$e(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wh(r/1960))-r,10<r){e.timeoutHandle=ro(On.bind(null,e,ge,Je),r);break}On(e,ge,Je);break;case 5:On(e,ge,Je);break;default:throw Error(k(329))}}}return we(e,Y()),e.callbackNode===t?cd.bind(null,e):null}function Eo(e,n){var t=Yt;return e.current.memoizedState.isDehydrated&&($n(e,n).flags|=256),e=Nl(e,n),e!==2&&(n=ge,ge=t,n!==null&&Po(n)),e}function Po(e){ge===null?ge=e:ge.push.apply(ge,e)}function kh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Ue(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dn(e,n){for(n&=~gs,n&=~bl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-$e(n),r=1<<t;e[t]=-1,n&=~r}}function Wa(e){if(O&6)throw Error(k(327));ht();var n=cl(e,0);if(!(n&1))return we(e,Y()),null;var t=Nl(e,n);if(e.tag!==0&&t===2){var r=Ji(e);r!==0&&(n=r,t=Eo(e,r))}if(t===1)throw t=gr,$n(e,0),dn(e,n),we(e,Y()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,On(e,ge,Je),we(e,Y()),null}function ys(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(kt=Y()+500,Bl&&Nn())}}function Wn(e){pn!==null&&pn.tag===0&&!(O&6)&&ht();var n=O;O|=1;var t=Ie.transition,r=M;try{if(Ie.transition=null,M=1,e)return e()}finally{M=r,Ie.transition=t,O=n,!(O&6)&&Nn()}}function xs(){ke=at.current,H(at)}function $n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xp(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(qo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:xt(),H(ye),H(ue),as();break;case 5:ss(r);break;case 4:xt();break;case 13:H(W);break;case 19:H(W);break;case 10:rs(r.type._context);break;case 22:case 23:xs()}t=t.return}if(te=e,X=e=Sn(e.current,null),le=ke=n,q=0,gr=null,gs=bl=Vn=0,ge=Yt=null,Mn!==null){for(n=0;n<Mn.length;n++)if(t=Mn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Mn=null}return e}function dd(e,n){do{var t=X;try{if(ts(),el.current=El,Cl){for(var r=b.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Cl=!1}if(Hn=0,ne=Z=b=null,Kt=!1,pr=0,ms.current=null,t===null||t.return===null){q=1,gr=n,X=null;break}e:{var i=e,o=t.return,s=t,a=n;if(n=le,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Ia(o);if(y!==null){y.flags&=-257,La(y,o,s,i,n),y.mode&1&&Ra(i,u,n),n=y,a=u;var v=n.updateQueue;if(v===null){var w=new Set;w.add(a),n.updateQueue=w}else v.add(a);break e}else{if(!(n&1)){Ra(i,u,n),ws();break e}a=Error(k(426))}}else if(V&&s.mode&1){var C=Ia(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),La(C,o,s,i,n),es(wt(a,s));break e}}i=a=wt(a,s),q!==4&&(q=2),Yt===null?Yt=[i]:Yt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=Kc(i,a,n);Ea(i,p);break e;case 1:s=a;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wn===null||!wn.has(h)))){i.flags|=65536,n&=-n,i.lanes|=n;var x=Jc(i,s,n);Ea(i,x);break e}}i=i.return}while(i!==null)}hd(t)}catch(P){n=P,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function fd(){var e=Pl.current;return Pl.current=El,e===null?El:e}function ws(){(q===0||q===3||q===2)&&(q=4),te===null||!(Vn&268435455)&&!(bl&268435455)||dn(te,le)}function Nl(e,n){var t=O;O|=2;var r=fd();(te!==e||le!==n)&&(Je=null,$n(e,n));do try{Sh();break}catch(l){dd(e,l)}while(!0);if(ts(),O=t,Pl.current=r,X!==null)throw Error(k(261));return te=null,le=0,q}function Sh(){for(;X!==null;)pd(X)}function Ch(){for(;X!==null&&!Kf();)pd(X)}function pd(e){var n=gd(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?hd(e):X=n,ms.current=null}function hd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=gh(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,X=null;return}}else if(t=mh(t,n,ke),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);q===0&&(q=5)}function On(e,n,t){var r=M,l=Ie.transition;try{Ie.transition=null,M=1,Eh(e,n,t,r)}finally{Ie.transition=l,M=r}return null}function Eh(e,n,t,r){do ht();while(pn!==null);if(O&6)throw Error(k(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(lp(e,i),e===te&&(X=te=null,le=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||br||(br=!0,vd(ul,function(){return ht(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ie.transition,Ie.transition=null;var o=M;M=1;var s=O;O|=4,ms.current=null,yh(e,t),ad(t,e),Wp(no),dl=!!eo,no=eo=null,e.current=t,xh(t),Jf(),O=s,M=o,Ie.transition=i}else e.current=t;if(br&&(br=!1,pn=e,_l=l),i=e.pendingLanes,i===0&&(wn=null),Zf(t.stateNode),we(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Tl)throw Tl=!1,e=So,So=null,e;return _l&1&&e.tag!==0&&ht(),i=e.pendingLanes,i&1?e===Co?Xt++:(Xt=0,Co=e):Xt=0,Nn(),null}function ht(){if(pn!==null){var e=Ku(_l),n=Ie.transition,t=M;try{if(Ie.transition=null,M=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,_l=0,O&6)throw Error(k(331));var l=O;for(O|=4,_=e.current;_!==null;){var i=_,o=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:Jt(8,d,i)}var f=d.child;if(f!==null)f.return=d,_=f;else for(;_!==null;){d=_;var m=d.sibling,y=d.return;if(id(d),d===u){_=null;break}if(m!==null){m.return=y,_=m;break}_=y}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}_=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,_=o;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Jt(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,_=p;break e}_=i.return}}var c=e.current;for(_=c;_!==null;){o=_;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,_=h;else e:for(o=c;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wl(9,s)}}catch(P){Q(s,s.return,P)}if(s===o){_=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,_=x;break e}_=s.return}}if(O=l,Nn(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Ml,e)}catch{}r=!0}return r}finally{M=t,Ie.transition=n}}return!1}function ba(e,n,t){n=wt(t,n),n=Kc(e,n,1),e=xn(e,n,1),n=fe(),e!==null&&(wr(e,1,n),we(e,n))}function Q(e,n,t){if(e.tag===3)ba(e,e,t);else for(;n!==null;){if(n.tag===3){ba(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=wt(t,e),e=Jc(n,e,1),n=xn(n,e,1),e=fe(),n!==null&&(wr(n,1,e),we(n,e));break}}n=n.return}}function Ph(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=fe(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(le&t)===t&&(q===4||q===3&&(le&130023424)===le&&500>Y()-vs?$n(e,0):gs|=t),we(e,n)}function md(e,n){n===0&&(e.mode&1?(n=zr,zr<<=1,!(zr&130023424)&&(zr=4194304)):n=1);var t=fe();e=tn(e,n),e!==null&&(wr(e,n,t),we(e,t))}function Th(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),md(e,t)}function _h(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),md(e,t)}var gd;gd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ye.current)ve=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ve=!1,hh(e,n,t);ve=!!(e.flags&131072)}else ve=!1,V&&n.flags&1048576&&wc(n,yl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;tl(e,n),e=n.pendingProps;var l=gt(n,ue.current);pt(n,t),l=cs(null,n,r,e,l,t);var i=ds();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,xe(r)?(i=!0,gl(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,is(n),l.updater=Vl,n.stateNode=l,l._reactInternals=n,co(n,r,e,t),n=ho(null,n,r,!0,i,t)):(n.tag=0,V&&i&&Zo(n),de(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(tl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=jh(r),e=ze(r,e),l){case 0:n=po(null,n,r,e,t);break e;case 1:n=za(null,n,r,e,t);break e;case 11:n=Aa(null,n,r,e,t);break e;case 14:n=Oa(null,n,r,ze(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),po(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),za(e,n,r,l,t);case 3:e:{if(qc(n),e===null)throw Error(k(387));r=n.pendingProps,i=n.memoizedState,l=i.element,Tc(e,n),kl(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=wt(Error(k(423)),n),n=Ma(e,n,r,t,l);break e}else if(r!==l){l=wt(Error(k(424)),n),n=Ma(e,n,r,t,l);break e}else for(Ce=yn(n.stateNode.containerInfo.firstChild),Ee=n,V=!0,De=null,t=Ec(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(vt(),r===l){n=rn(e,n,t);break e}de(e,n,r,t)}n=n.child}return n;case 5:return _c(n),e===null&&so(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,to(r,l)?o=null:i!==null&&to(r,i)&&(n.flags|=32),Zc(e,n),de(e,n,o,t),n.child;case 6:return e===null&&so(n),null;case 13:return ed(e,n,t);case 4:return os(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=yt(n,null,r,t):de(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),Aa(e,n,r,l,t);case 7:return de(e,n,n.pendingProps,t),n.child;case 8:return de(e,n,n.pendingProps.children,t),n.child;case 12:return de(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,U(xl,r._currentValue),r._currentValue=o,i!==null)if(Ue(i.value,o)){if(i.children===l.children&&!ye.current){n=rn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=qe(-1,t&-t),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),ao(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),ao(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}de(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,pt(n,t),l=Le(l),r=r(l),n.flags|=1,de(e,n,r,t),n.child;case 14:return r=n.type,l=ze(r,n.pendingProps),l=ze(r.type,l),Oa(e,n,r,l,t);case 15:return Yc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),tl(e,n),n.tag=1,xe(r)?(e=!0,gl(n)):e=!1,pt(n,t),Qc(n,r,l),co(n,r,l,t),ho(null,n,r,!0,e,t);case 19:return nd(e,n,t);case 22:return Xc(e,n,t)}throw Error(k(156,n.tag))};function vd(e,n){return Wu(e,n)}function Nh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,n,t,r){return new Nh(e,n,t,r)}function ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jh(e){if(typeof e=="function")return ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uo)return 11;if(e===Bo)return 14}return 2}function Sn(e,n){var t=e.alternate;return t===null?(t=Re(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function il(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")ks(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zn:return Fn(t.children,l,i,n);case Fo:o=8,l|=8;break;case Oi:return e=Re(12,t,n,l|2),e.elementType=Oi,e.lanes=i,e;case zi:return e=Re(13,t,n,l),e.elementType=zi,e.lanes=i,e;case Mi:return e=Re(19,t,n,l),e.elementType=Mi,e.lanes=i,e;case _u:return Gl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pu:o=10;break e;case Tu:o=9;break e;case Uo:o=11;break e;case Bo:o=14;break e;case an:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Re(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Fn(e,n,t,r){return e=Re(7,e,r,n),e.lanes=t,e}function Gl(e,n,t,r){return e=Re(22,e,r,n),e.elementType=_u,e.lanes=t,e.stateNode={isHidden:!1},e}function ji(e,n,t){return e=Re(6,e,null,n),e.lanes=t,e}function Ri(e,n,t){return n=Re(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Rh(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ci(0),this.expirationTimes=ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ci(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ss(e,n,t,r,l,i,o,s,a){return e=new Rh(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Re(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},is(i),e}function Ih(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function yd(e){if(!e)return Pn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(xe(t))return yc(e,t,n)}return n}function xd(e,n,t,r,l,i,o,s,a){return e=Ss(t,r,!0,e,l,i,o,s,a),e.context=yd(null),t=e.current,r=fe(),l=kn(t),i=qe(r,l),i.callback=n??null,xn(t,i,l),e.current.lanes=l,wr(e,l,r),we(e,r),e}function Ql(e,n,t,r){var l=n.current,i=fe(),o=kn(l);return t=yd(t),n.context===null?n.context=t:n.pendingContext=t,n=qe(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=xn(l,n,o),e!==null&&(Fe(e,l,o,i),qr(e,l,o)),o}function jl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ga(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Cs(e,n){Ga(e,n),(e=e.alternate)&&Ga(e,n)}function Lh(){return null}var wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}Kl.prototype.render=Es.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Ql(e,n,null,null)};Kl.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wn(function(){Ql(null,e,null,null)}),n[nn]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<cn.length&&n!==0&&n<cn[t].priority;t++);cn.splice(t,0,e),t===0&&qu(e)}};function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qa(){}function Ah(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=jl(o);i.call(u)}}var o=xd(n,r,e,0,null,!1,!1,"",Qa);return e._reactRootContainer=o,e[nn]=o.current,ar(e.nodeType===8?e.parentNode:e),Wn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=jl(a);s.call(u)}}var a=Ss(e,0,!1,null,null,!1,!1,"",Qa);return e._reactRootContainer=a,e[nn]=a.current,ar(e.nodeType===8?e.parentNode:e),Wn(function(){Ql(n,a,t,r)}),a}function Yl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=jl(o);s.call(a)}}Ql(n,o,e,l)}else o=Ah(t,n,e,l,r);return jl(o)}Ju=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Bt(n.pendingLanes);t!==0&&(Wo(n,t|1),we(n,Y()),!(O&6)&&(kt=Y()+500,Nn()))}break;case 13:Wn(function(){var r=tn(e,1);if(r!==null){var l=fe();Fe(r,e,1,l)}}),Cs(e,1)}};bo=function(e){if(e.tag===13){var n=tn(e,134217728);if(n!==null){var t=fe();Fe(n,e,134217728,t)}Cs(e,134217728)}};Yu=function(e){if(e.tag===13){var n=kn(e),t=tn(e,n);if(t!==null){var r=fe();Fe(t,e,n,r)}Cs(e,n)}};Xu=function(){return M};Zu=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};Gi=function(e,n,t){switch(n){case"input":if(Fi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Ul(r);if(!l)throw Error(k(90));ju(r),Fi(r,l)}}}break;case"textarea":Iu(e,t);break;case"select":n=t.value,n!=null&&ut(e,!!t.multiple,n,!1)}};$u=ys;Fu=Wn;var Oh={usingClientEntryPoint:!1,Events:[Sr,tt,Ul,Mu,Du,ys]},Mt={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zh={bundleType:Mt.bundleType,version:Mt.version,rendererPackageName:Mt.rendererPackageName,rendererConfig:Mt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mt.findFiberByHostInstance||Lh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{Ml=Gr.inject(zh),Qe=Gr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oh;Te.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ps(n))throw Error(k(200));return Ih(e,n,null,t)};Te.createRoot=function(e,n){if(!Ps(e))throw Error(k(299));var t=!1,r="",l=wd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Ss(e,1,!1,null,null,t,!1,r,l),e[nn]=n.current,ar(e.nodeType===8?e.parentNode:e),new Es(n)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Hu(n),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Wn(e)};Te.hydrate=function(e,n,t){if(!Jl(n))throw Error(k(200));return Yl(null,e,n,!0,t)};Te.hydrateRoot=function(e,n,t){if(!Ps(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=wd;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=xd(n,null,e,1,t??null,l,!1,i,o),e[nn]=n.current,ar(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Kl(n)};Te.render=function(e,n,t){if(!Jl(n))throw Error(k(200));return Yl(null,e,n,!1,t)};Te.unmountComponentAtNode=function(e){if(!Jl(e))throw Error(k(40));return e._reactRootContainer?(Wn(function(){Yl(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};Te.unstable_batchedUpdates=ys;Te.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Jl(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Yl(e,n,t,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function kd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kd)}catch(e){console.error(e)}}kd(),ku.exports=Te;var Mh=ku.exports,Sd,Ka=Mh;Sd=Ka.createRoot,Ka.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vr(){return vr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vr.apply(null,arguments)}var hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hn||(hn={}));const Ja="popstate";function Dh(e){e===void 0&&(e={});function n(l,i){let{pathname:o="/",search:s="",hash:a=""}=Kn(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),To("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(l,i){let o=l.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let a=l.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:Rl(i))}function r(l,i){Ts(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Fh(n,t,r,e)}function K(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ts(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function $h(){return Math.random().toString(36).substr(2,8)}function Ya(e,n){return{usr:e.state,key:e.key,idx:n}}function To(e,n,t,r){return t===void 0&&(t=null),vr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Kn(n):n,{state:t,key:n&&n.key||r||$h()})}function Rl(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Kn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Fh(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=hn.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(vr({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){s=hn.Pop;let C=d(),p=C==null?null:C-u;u=C,a&&a({action:s,location:w.location,delta:p})}function m(C,p){s=hn.Push;let c=To(w.location,C,p);t&&t(c,C),u=d()+1;let h=Ya(c,u),x=w.createHref(c);try{o.pushState(h,"",x)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(x)}i&&a&&a({action:s,location:w.location,delta:1})}function y(C,p){s=hn.Replace;let c=To(w.location,C,p);t&&t(c,C),u=d();let h=Ya(c,u),x=w.createHref(c);o.replaceState(h,"",x),i&&a&&a({action:s,location:w.location,delta:0})}function v(C){let p=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof C=="string"?C:Rl(C);return c=c.replace(/ $/,"%20"),K(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let w={get action(){return s},get location(){return e(l,o)},listen(C){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(Ja,f),a=C,()=>{l.removeEventListener(Ja,f),a=null}},createHref(C){return n(l,C)},createURL:v,encodeLocation(C){let p=v(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:y,go(C){return o.go(C)}};return w}var Xa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Xa||(Xa={}));function Uh(e,n,t){return t===void 0&&(t="/"),Bh(e,n,t)}function Bh(e,n,t,r){let l=typeof n=="string"?Kn(n):n,i=St(l.pathname||"/",t);if(i==null)return null;let o=Cd(e);Hh(o);let s=null,a=qh(i);for(let u=0;s==null&&u<o.length;++u)s=Xh(o[u],a);return s}function Cd(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(i,o,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(K(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Cn([r,a.relativePath]),d=t.concat(a);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cd(i.children,n,d,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:Jh(u,i.index),routesMeta:d})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let a of Ed(i.path))l(i,o,a)}),n}function Ed(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Ed(r.join("/")),s=[];return s.push(...o.map(a=>a===""?i:[i,a].join("/"))),l&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Hh(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Yh(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Vh=/^:[\w-]+$/,Wh=3,bh=2,Gh=1,Qh=10,Kh=-2,Za=e=>e==="*";function Jh(e,n){let t=e.split("/"),r=t.length;return t.some(Za)&&(r+=Kh),n&&(r+=bh),t.filter(l=>!Za(l)).reduce((l,i)=>l+(Vh.test(i)?Wh:i===""?Gh:Qh),r)}function Yh(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function Xh(e,n,t){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",f=_o({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),m=a.route;if(!f)return null;Object.assign(l,f.params),o.push({params:l,pathname:Cn([i,f.pathname]),pathnameBase:tm(Cn([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=Cn([i,f.pathnameBase]))}return o}function _o(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Zh(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let w=s[f]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const v=s[f];return y&&!v?u[m]=void 0:u[m]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Zh(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ts(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function qh(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ts(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function St(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function em(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?Kn(e):e,i;return t?(t=_d(t),t.startsWith("/")?i=qa(t.substring(1),"/"):i=qa(t,n)):i=n,{pathname:i,search:rm(r),hash:lm(l)}}function qa(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function Ii(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Pd(e,n){let t=nm(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Td(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Kn(e):(l=vr({},e),K(!l.pathname||!l.pathname.includes("?"),Ii("?","pathname","search",l)),K(!l.pathname||!l.pathname.includes("#"),Ii("#","pathname","hash",l)),K(!l.search||!l.search.includes("#"),Ii("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=t;else{let f=n.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;l.pathname=m.join("/")}s=f>=0?n[f]:"/"}let a=em(l,s),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const _d=e=>e.replace(/\/\/+/g,"/"),Cn=e=>_d(e.join("/")),tm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function im(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Nd=["post","put","patch","delete"];new Set(Nd);const om=["get",...Nd];new Set(om);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yr.apply(null,arguments)}const Xl=E.createContext(null),jd=E.createContext(null),jn=E.createContext(null),Zl=E.createContext(null),Rn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Rd=E.createContext(null);function sm(e,n){let{relative:t}=n===void 0?{}:n;Er()||K(!1);let{basename:r,navigator:l}=E.useContext(jn),{hash:i,pathname:o,search:s}=ql(e,{relative:t}),a=o;return r!=="/"&&(a=o==="/"?r:Cn([r,o])),l.createHref({pathname:a,search:s,hash:i})}function Er(){return E.useContext(Zl)!=null}function Pr(){return Er()||K(!1),E.useContext(Zl).location}function Id(e){E.useContext(jn).static||E.useLayoutEffect(e)}function am(){let{isDataRoute:e}=E.useContext(Rn);return e?km():um()}function um(){Er()||K(!1);let e=E.useContext(Xl),{basename:n,future:t,navigator:r}=E.useContext(jn),{matches:l}=E.useContext(Rn),{pathname:i}=Pr(),o=JSON.stringify(Pd(l,t.v7_relativeSplatPath)),s=E.useRef(!1);return Id(()=>{s.current=!0}),E.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Td(u,JSON.parse(o),i,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Cn([n,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[n,r,o,i,e])}function _s(){let{matches:e}=E.useContext(Rn),n=e[e.length-1];return n?n.params:{}}function ql(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=E.useContext(jn),{matches:l}=E.useContext(Rn),{pathname:i}=Pr(),o=JSON.stringify(Pd(l,r.v7_relativeSplatPath));return E.useMemo(()=>Td(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function cm(e,n){return dm(e,n)}function dm(e,n,t,r){Er()||K(!1);let{navigator:l}=E.useContext(jn),{matches:i}=E.useContext(Rn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Pr(),d;if(n){var f;let C=typeof n=="string"?Kn(n):n;a==="/"||(f=C.pathname)!=null&&f.startsWith(a)||K(!1),d=C}else d=u;let m=d.pathname||"/",y=m;if(a!=="/"){let C=a.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=Uh(e,{pathname:y}),w=gm(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Cn([a,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:Cn([a,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,t,r);return n&&w?E.createElement(Zl.Provider,{value:{location:yr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:hn.Pop}},w):w}function fm(){let e=wm(),n=im(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:l},t):null,null)}const pm=E.createElement(fm,null);class hm extends E.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?E.createElement(Rn.Provider,{value:this.props.routeContext},E.createElement(Rd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mm(e){let{routeContext:n,match:t,children:r}=e,l=E.useContext(Xl);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(Rn.Provider,{value:n},r)}function gm(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,s=(l=t)==null?void 0:l.errors;if(s!=null){let d=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||K(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:y}=t,v=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||v){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let y,v=!1,w=null,C=null;t&&(y=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||pm,a&&(u<0&&m===0?(Sm("route-fallback"),v=!0,C=null):u===m&&(v=!0,C=f.route.hydrateFallbackElement||null)));let p=n.concat(o.slice(0,m+1)),c=()=>{let h;return y?h=w:v?h=C:f.route.Component?h=E.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,E.createElement(mm,{match:f,routeContext:{outlet:d,matches:p,isDataRoute:t!=null},children:h})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?E.createElement(hm,{location:t.location,revalidation:t.revalidation,component:w,error:y,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var Ld=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ld||{}),Ad=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ad||{});function vm(e){let n=E.useContext(Xl);return n||K(!1),n}function ym(e){let n=E.useContext(jd);return n||K(!1),n}function xm(e){let n=E.useContext(Rn);return n||K(!1),n}function Od(e){let n=xm(),t=n.matches[n.matches.length-1];return t.route.id||K(!1),t.route.id}function wm(){var e;let n=E.useContext(Rd),t=ym(),r=Od();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function km(){let{router:e}=vm(Ld.UseNavigateStable),n=Od(Ad.UseNavigateStable),t=E.useRef(!1);return Id(()=>{t.current=!0}),E.useCallback(function(l,i){i===void 0&&(i={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,yr({fromRouteId:n},i)))},[e,n])}const eu={};function Sm(e,n,t){eu[e]||(eu[e]=!0)}function Cm(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function He(e){K(!1)}function Em(e){let{basename:n="/",children:t=null,location:r,navigationType:l=hn.Pop,navigator:i,static:o=!1,future:s}=e;Er()&&K(!1);let a=n.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:a,navigator:i,static:o,future:yr({v7_relativeSplatPath:!1},s)}),[a,s,i,o]);typeof r=="string"&&(r=Kn(r));let{pathname:d="/",search:f="",hash:m="",state:y=null,key:v="default"}=r,w=E.useMemo(()=>{let C=St(d,a);return C==null?null:{location:{pathname:C,search:f,hash:m,state:y,key:v},navigationType:l}},[a,d,f,m,y,v,l]);return w==null?null:E.createElement(jn.Provider,{value:u},E.createElement(Zl.Provider,{children:t,value:w}))}function Pm(e){let{children:n,location:t}=e;return cm(No(n),t)}new Promise(()=>{});function No(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(r,l)=>{if(!E.isValidElement(r))return;let i=[...n,l];if(r.type===E.Fragment){t.push.apply(t,No(r.props.children,i));return}r.type!==He&&K(!1),!r.props.index||!r.props.children||K(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=No(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Il.apply(null,arguments)}function zd(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Tm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _m(e,n){return e.button===0&&(!n||n==="_self")&&!Tm(e)}const Nm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jm=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Rm="6";try{window.__reactRouterVersion=Rm}catch{}const Im=E.createContext({isTransitioning:!1}),Lm="startTransition",nu=Pf[Lm];function Am(e){let{basename:n,children:t,future:r,window:l}=e,i=E.useRef();i.current==null&&(i.current=Dh({window:l,v5Compat:!0}));let o=i.current,[s,a]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=E.useCallback(f=>{u&&nu?nu(()=>a(f)):a(f)},[a,u]);return E.useLayoutEffect(()=>o.listen(d),[o,d]),E.useEffect(()=>Cm(r),[r]),E.createElement(Em,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:o,future:r})}const Om=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pe=E.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:s,target:a,to:u,preventScrollReset:d,viewTransition:f}=n,m=zd(n,Nm),{basename:y}=E.useContext(jn),v,w=!1;if(typeof u=="string"&&zm.test(u)&&(v=u,Om))try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),P=St(x.pathname,y);x.origin===h.origin&&P!=null?u=P+x.search+x.hash:w=!0}catch{}let C=sm(u,{relative:l}),p=$m(u,{replace:o,state:s,target:a,preventScrollReset:d,relative:l,viewTransition:f});function c(h){r&&r(h),h.defaultPrevented||p(h)}return E.createElement("a",Il({},m,{href:v||C,onClick:w||i?r:c,ref:t,target:a}))}),Mm=E.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:l=!1,className:i="",end:o=!1,style:s,to:a,viewTransition:u,children:d}=n,f=zd(n,jm),m=ql(a,{relative:f.relative}),y=Pr(),v=E.useContext(jd),{navigator:w,basename:C}=E.useContext(jn),p=v!=null&&Fm(m)&&u===!0,c=w.encodeLocation?w.encodeLocation(m).pathname:m.pathname,h=y.pathname,x=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(h=h.toLowerCase(),x=x?x.toLowerCase():null,c=c.toLowerCase()),x&&C&&(x=St(x,C)||x);const P=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let S=h===c||!o&&h.startsWith(c)&&h.charAt(P)==="/",T=x!=null&&(x===c||!o&&x.startsWith(c)&&x.charAt(c.length)==="/"),j={isActive:S,isPending:T,isTransitioning:p},$=S?r:void 0,R;typeof i=="function"?R=i(j):R=[i,S?"active":null,T?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ce=typeof s=="function"?s(j):s;return E.createElement(pe,Il({},f,{"aria-current":$,className:R,ref:t,style:ce,to:a,viewTransition:u}),typeof d=="function"?d(j):d)});var jo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jo||(jo={}));var tu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tu||(tu={}));function Dm(e){let n=E.useContext(Xl);return n||K(!1),n}function $m(e,n){let{target:t,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:s}=n===void 0?{}:n,a=am(),u=Pr(),d=ql(e,{relative:o});return E.useCallback(f=>{if(_m(f,t)){f.preventDefault();let m=r!==void 0?r:Rl(u)===Rl(d);a(e,{replace:m,state:l,preventScrollReset:i,relative:o,viewTransition:s})}},[u,a,d,r,l,t,e,i,o,s])}function Fm(e,n){n===void 0&&(n={});let t=E.useContext(Im);t==null&&K(!1);let{basename:r}=Dm(jo.useViewTransitionState),l=ql(e,{relative:n.relative});if(!t.isTransitioning)return!1;let i=St(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=St(t.nextLocation.pathname,r)||t.nextLocation.pathname;return _o(l.pathname,o)!=null||_o(l.pathname,i)!=null}const Md="theme";function Um(){try{const e=localStorage.getItem(Md);return e==="light"||e==="dark"?e:null}catch{return null}}function Bm(e){try{localStorage.setItem(Md,e)}catch{}}function Hm(e){return e??"dark"}function Vm(e){document.documentElement.classList.toggle("dark",e==="dark")}const Wm=[{to:"/",label:"Home",end:!0},{to:"/projects",label:"Projects",end:!1},{to:"/blog",label:"Blog",end:!1},{to:"/tools",label:"Tools",end:!1},{to:"/about",label:"About",end:!1},{to:"/write",label:"Write",end:!1}];function bm(){const[e,n]=E.useState(()=>Hm(Um()));E.useEffect(()=>{Vm(e)},[e]);function t(){const r=e==="dark"?"light":"dark";n(r),Bm(r)}return g.jsx("nav",{className:"sticky top-0 z-50 border-b border-border bg-background font-mono text-sm",children:g.jsxs("div",{className:"flex w-full flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 md:px-12",children:[g.jsx(pe,{to:"/",className:"mr-2 font-bold text-accent",children:"~/shinheeyoun"}),Wm.map(r=>g.jsx(Mm,{to:r.to,end:r.end,className:({isActive:l})=>l?"text-accent":"text-muted transition-colors hover:text-foreground",children:({isActive:l})=>g.jsxs(g.Fragment,{children:[g.jsx("span",{className:l?"":"invisible","aria-hidden":"true",children:">"})," ",r.label]})},r.to)),g.jsx("button",{type:"button",onClick:t,"aria-label":"테마 전환",className:"ml-auto rounded-md border border-border px-2 py-1 text-sm hover:border-accent",children:e==="dark"?"🌙":"☀️"})]})})}function Gm(){return g.jsxs("section",{className:"py-10 font-mono",children:[g.jsx("p",{className:"text-sm text-muted",children:"$ whoami"}),g.jsxs("h1",{className:"mt-2 text-4xl font-bold md:text-5xl",children:["ShinHeeYoun",g.jsx("span",{className:"cursor-blink text-accent","aria-hidden":"true",children:"_"})]}),g.jsx("p",{className:"mt-3 text-lg text-foreground/90",children:"개발 연습 페이지"}),g.jsx("p",{className:"mt-2 max-w-xl font-sans text-muted",children:"github homepage with Claude"}),g.jsxs("div",{className:"mt-6 flex flex-wrap gap-3 text-sm",children:[g.jsx(pe,{to:"/projects",className:"rounded border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-background",children:"view projects"}),g.jsx(pe,{to:"/blog",className:"rounded border border-border px-4 py-2 text-muted transition-colors hover:border-accent hover:text-accent",children:"read blog"})]})]})}function Dd({project:e}){return g.jsx(pe,{to:`/projects/${e.id}`,className:"block",children:g.jsxs("article",{className:"card",children:[g.jsx("h3",{className:"card-title",children:e.title}),g.jsx("p",{className:"mt-2 text-foreground/80",children:e.summary}),g.jsx("ul",{className:"mt-3 flex flex-wrap gap-2",children:e.tags.map(n=>g.jsx("li",{className:"tag",children:n},n))})]})})}const Ns=[{id:"terminal-theme",title:"터미널 테마 디자인",summary:"색상 토큰 한 곳만 바꿔 사이트 전체의 분위기를 바꾸는 다크 터미널 디자인.",tags:["Tailwind","CSS 변수","다크모드"],overview:"사이트의 색은 컴포넌트마다 정해 두지 않고 background, accent 같은 의미 기반 토큰(CSS 변수)으로 정의해 둡니다. 그래서 index.css의 토큰 값 몇 줄만 바꾸면 대부분의 페이지 색이 한 번에 바뀝니다.",points:["다크 터미널이 기본값이고, 헤더의 토글로 크림색 라이트 테마로 바꿀 수 있습니다. 선택은 브라우저(localStorage)에 저장됩니다.","저장된 값이 없으면 항상 다크로 시작합니다. 화면이 그려지기 전에 index.html의 작은 스크립트가 테마를 먼저 적용해서 깜빡임이 없습니다.","제목과 메뉴는 모노스페이스 글꼴을 쓰고, 카드와 태그는 공용 CSS 클래스로 모양을 통일했습니다.",'히어로의 깜빡이는 커서는 "모션 줄이기" 설정을 켜 둔 사용자에게는 멈춥니다.']},{id:"blog-editor",title:"블로그와 브라우저 글쓰기",summary:"글은 마크다운 파일로 저장되고, 글쓰기 페이지에서 바로 작성·수정·삭제할 수 있습니다.",tags:["Markdown","GitHub API","React"],overview:"글 하나는 src/content/posts 폴더의 마크다운 파일 하나입니다. 빌드할 때 모든 글을 읽어 목록과 상세 페이지를 만들고, Write 페이지에서 쓴 글은 GitHub API로 저장소에 직접 커밋됩니다. 별도 서버나 데이터베이스는 없습니다.",points:["각 파일은 제목과 날짜를 담은 머리말(frontmatter)과 본문으로 구성됩니다. 본문은 marked 라이브러리로 HTML로 바꿔 보여줍니다.","글 주소는 날짜와 임의 문자열(예: 2026-09-23-gzblai)로 만듭니다. 제목이 한글이어도 주소가 깨지지 않게 하려는 선택입니다.","Write 페이지는 GitHub 개인 액세스 토큰(PAT)을 브라우저에 저장해 두고 GitHub Contents API를 호출합니다. 토큰은 api.github.com 요청에만 쓰입니다.","글을 올리면 커밋이 생기고, 그 커밋이 자동 배포를 일으켜 1분 안팎에 사이트에 반영됩니다.","수정과 삭제는 파일의 현재 sha 값을 먼저 조회한 뒤 요청합니다. GitHub API가 요구하는 방식입니다."]},{id:"calculator-tool",title:"도구 실행: 계산기",summary:"계산 로직(컨트롤러)과 화면(뷰)을 나눠 만든 버튼식 계산기와 단위 테스트.",tags:["React","Vitest","TypeScript"],overview:"Tools 페이지의 계산기는 로직과 화면이 분리되어 있습니다. 로직은 React를 전혀 모르는 순수 함수(리듀서)이고, 화면은 그 함수를 useReducer로 연결해 버튼을 그릴 뿐입니다.",points:["컨트롤러(controller.ts)는 현재 상태와 동작(숫자, 소수점, 연산자, =, 지우기)을 받아 새 상태를 돌려주는 함수입니다. 화면 없이도 테스트할 수 있습니다.","Vitest 단위 테스트가 사칙연산, 0으로 나누기, 연이은 계산 등을 확인합니다.","연산자 우선순위는 구현하지 않았습니다. 누른 순서대로 계산하므로 2 + 3 × 4 는 20입니다. 간단한 계산기의 방식입니다.","도구 목록과 화면 연결을 타입으로 묶어 두어서, 도구를 추가할 때 한쪽을 빠뜨리면 빌드가 실패합니다."]},{id:"deploy-pipeline",title:"자동 배포 파이프라인",summary:"main에 push하면 테스트, 빌드, 배포가 자동으로 실행되어 GitHub Pages에 반영됩니다.",tags:["GitHub Actions","GitHub Pages","CI"],overview:"이 사이트는 정적 파일만 올리는 GitHub Pages에서 동작합니다. main 브랜치에 변경이 올라오면 GitHub Actions가 의존성 설치, 테스트, 빌드를 차례로 실행하고 결과물을 gh-pages 브랜치에 게시합니다.",points:["테스트가 하나라도 실패하면 빌드와 배포까지 가지 않습니다.","서버가 없어서 페이지 이동에는 HashRouter를 씁니다. 주소가 /#/blog처럼 #을 포함하지만, 어느 페이지에서 새로고침해도 404가 나지 않습니다.","짧은 시간에 여러 번 push해도 배포가 꼬이지 않도록 concurrency 설정으로 이전 실행을 취소합니다.","게시되는 것은 Vite가 만든 HTML, CSS, JS 파일뿐입니다. 글쓰기 기능도 이 정적 사이트 안에서 브라우저가 GitHub API를 직접 호출하는 방식으로 동작합니다."]},{id:"claude-workflow",title:"Claude와 만드는 개발 방식",summary:"아이디어를 설계, 계획, 구현, 리뷰 순서로 쪼개서 Claude와 함께 만들었습니다.",tags:["Claude Code","워크플로","코드 리뷰"],overview:"이 사이트의 기능은 한 번에 만들어진 것이 아니라 단계마다 같은 순서로 만들어졌습니다. 무엇을 만들지 질문으로 정리하고(설계), 작업을 작은 단위로 나누고(계획), 단위마다 구현한 뒤 따로 검토했습니다.",points:["먼저 Claude가 질문을 하나씩 던져 범위와 선택지를 정하고, 합의한 내용을 설계 문서로 남깁니다.","설계를 바탕으로 작업 계획을 세우고, 작업마다 구현 담당과 별도의 검토 담당이 맡아 서로의 결과를 확인합니다.","마지막에 전체 변경을 한 번 더 검토합니다. 검증과 최종 검토 단계에서 실제 문제가 발견됐습니다. 예를 들어 윈도우의 줄바꿈(CRLF) 때문에 글을 읽어 오는 단계에서 오류가 나던 버그, 포인트 색을 바꾼 뒤 버튼 글씨가 거의 안 보이게 된 문제입니다.","배포나 push처럼 되돌리기 어려운 작업은 그때마다 사람에게 확인을 받고 진행했습니다."]}];function Qm(){return g.jsxs("section",{children:[g.jsxs("div",{className:"flex items-baseline justify-between",children:[g.jsx("h2",{className:"text-xl font-semibold",children:"주요 구성"}),g.jsx(pe,{to:"/projects",className:"font-mono text-sm text-accent hover:text-accent-hover",children:"전체 보기 →"})]}),g.jsx("div",{className:"mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:Ns.slice(0,3).map(e=>g.jsx(Dd,{project:e},e.id))})]})}const Km=`---
title: EXE 크래시 덤프(.dmp) 분석 방법 (WinDbg)
date: 2026-10-06
---
# WinDbg를 사용한 EXE 크래시 덤프(.dmp) 분석 방법

## 0. 문서 개요

- 목적: WinDbg로 32비트 프로세스의 크래시 덤프를 열어 원인 모듈과 호출 경로를 확인하는 절차를 정리한다.
- 대상: 크래시 덤프(.dmp)를 처음 분석하는 개발자.
- 전제: Windows에서 WinDbg(Microsoft Store 버전 또는 Windows SDK 버전)가 설치되어 있고, 인터넷에 접속할 수 있다.
- 분석 대상 예시: \`ocx(8.2.3.420).1001104150.dmp\`
  - 호스트 프로세스: \`UXStudio92.exe\` (32비트)
  - 크래시 유형: Access Violation (0xC0000005)
- 이 문서의 명령은 모두 WinDbg 하단의 명령 입력창에 입력한다.

---

## 1. 분석 흐름 요약

| 단계 | 내용 | 목적 |
|---|---|---|
| 1 | 덤프 열기 | WinDbg에서 .dmp 파일 로드 |
| 2 | 심볼 설정 | 함수 이름을 읽을 수 있게 함 |
| 3 | 32비트 컨텍스트 전환 | 스택이 정상적으로 보이게 함 |
| 4 | 자동 분석과 로그 저장 | 핵심 정보를 한 번에 수집 |
| 5 | 결과 해석 | 예외 종류, 크래시 위치, 호출 경로 확인 |
| 6 | 의심 모듈 확인 | 모듈 버전과 로드 여부 확인 |
| 7 | 추가 분석 | 메모리, 스레드 정보 확인 |
| 8 | 결론 정리 | 원인 모듈과 근거 구분 |

---

## 2. 덤프 열기

1. WinDbg를 실행한다.
2. 메뉴 \`File\` → \`Open dump file\` (또는 \`Start debugging\` → \`Open dump file\`)을 선택한다.
3. 분석할 .dmp 파일을 선택한다.
4. 로딩이 끝나면 명령 입력창에 프롬프트(\`0:009>\` 등)가 나타난다.
   - 숫자는 현재 스레드 번호이다. 크래시 스레드로 자동 설정되는 경우가 많다.

---

## 3. 심볼 설정

심볼(PDB)이 없으면 함수 이름 대신 \`모듈+오프셋\`으로만 표시된다. 가장 먼저 설정한다.

\`\`\`
.symfix
.reload /f
\`\`\`

- \`.symfix\`: Microsoft 공개 심볼 서버를 심볼 경로로 설정한다. 기본 캐시 경로는 \`C:\\ProgramData\\Dbg\\sym\`이다.
- \`.reload /f\`: 심볼을 강제로 다시 로드한다.
- 자체 개발 모듈의 PDB가 있다면 경로를 추가한다.

\`\`\`
.sympath+ D:\\내\\pdb\\경로
.reload /f
\`\`\`

주의 사항

- 처음 실행할 때는 심볼 다운로드 때문에 시간이 오래 걸릴 수 있다. 이번 분석에서는 첫 \`!analyze -v\`의 초기화에 수 분이 소요되었다.
- Microsoft 공개 심볼에는 타입 정보가 없다. 따라서 \`dt hhctrl!CIndex\` 같은 구조체 출력은 \`Symbol not found\`로 실패한다. 정상 동작이므로 시도하지 않아도 된다.

---

## 4. 32비트 덤프 처리

32비트 프로세스의 덤프를 64비트 WinDbg로 열면 스택이 64비트 기준(\`wow64cpu\`, 64비트 \`ntdll\`)으로 보이거나 깨져 보일 수 있다. 스택 출력 전에 컨텍스트를 맞춘다.

방법 1. 가장 간단한 방법

\`\`\`
.effmach x86
\`\`\`

방법 2. 방법 1이 동작하지 않을 때

\`\`\`
.load wow64exts
!wow64exts.sw
\`\`\`

확인 방법

- \`kv\` 결과에 \`wow64\`, \`wow64cpu\` 모듈만 가득하고 호스트 EXE나 대상 모듈이 보이지 않으면 아직 전환되지 않은 상태이다.
- 32비트에서는 레지스터 이름이 \`rip\`, \`rsp\` 대신 \`eip\`, \`esp\`이다. 명령도 \`@rip\`가 아니라 \`@eip\`를 사용한다.

참고: 이번 덤프는 \`.ecxr\` 실행만으로 32비트 컨텍스트가 정상 표시되었다. 그래도 \`.effmach x86\`을 미리 넣어 두면 두 경우 모두 안전하다.

---

## 5. 분석 결과를 로그 파일로 저장

화면 출력은 길어서 복사하기 어렵다. 로그 파일로 저장하면 다른 사람이나 도구에 파일 하나만 전달하면 된다.

### 5.1 실행 명령 (그대로 복사해서 입력)

\`\`\`
.symfix
.reload /f
.effmach x86
.logopen D:\\Develop_Claude\\dump_analysis.txt
.echo ===== ANALYZE =====
!analyze -v
.echo ===== EXCEPTION =====
.exr -1
.ecxr
.echo ===== STACK (exception context) =====
kv
.echo ===== ALL THREADS =====
~*kv
.echo ===== MODULES =====
lm
.echo ===== FAULT INSTRUCTION =====
u @eip-20 @eip+10
r
.echo ===== PROCESS/OS =====
vertarget
|
.logclose
\`\`\`

### 5.2 각 명령의 의미

| 명령 | 설명 |
|---|---|
| \`!analyze -v\` | 자동 분석. 예외 코드, 실패 모듈, 스택, 버킷 이름을 출력한다. 가장 먼저 볼 결과이다. |
| \`.exr -1\` | 예외 레코드. 예외 코드와 접근 주소를 보여준다. |
| \`.ecxr\` | 예외가 발생한 시점의 컨텍스트(레지스터, 스택)로 전환한다. |
| \`kv\` | 현재 컨텍스트의 호출 스택(인자 포함). |
| \`~*kv\` | 모든 스레드의 호출 스택. |
| \`lm\` | 로드된 모듈 목록. |
| \`u @eip-20 @eip+10\` | 크래시 명령어 주변의 디스어셈블리. |
| \`r\` | 레지스터 값. |
| \`vertarget\` | OS 버전, 덤프 시각, 프로세스 실행 시간. |
| \`\\|\` | 프로세스 정보(실행 파일 경로). |
| \`.logopen\` / \`.logclose\` | 로그 기록 시작 / 종료. |

### 5.3 저장 경로 선택

- 분석을 도와줄 도구(예: Claude Code)가 읽을 수 있는 작업 폴더에 저장한다.
- 폴더가 없으면 \`.logopen\`이 실패한다. 미리 폴더를 만들어 둔다.

---

## 6. 결과 해석

### 6.1 예외 정보 확인

\`!analyze -v\` 결과에서 먼저 확인할 항목

| 항목 | 이번 사례 값 | 의미 |
|---|---|---|
| \`ExceptionCode\` | c0000005 | Access Violation. 잘못된 메모리 접근 |
| \`Parameter[0]\` | 00000000 | 0이면 읽기, 1이면 쓰기, 8이면 실행 |
| \`Parameter[1]\` | 001c7908 | 접근하려던 주소 |
| \`FAULTING_MODULE\` / \`MODULE_NAME\` | hhctrl | 크래시가 난 코드가 속한 모듈 |
| \`SYMBOL_NAME\` | hhctrl!CIndex::OnCommand+eca | 크래시 위치 |
| \`PROCESS_NAME\` | UXStudio92.exe | 호스트 프로세스 |
| \`FAILURE_BUCKET_ID\` | INVALID_POINTER_READ_... | 실패 유형 분류 |

### 6.2 크래시 명령어 해석

\`\`\`
6620c1d7 8b410c          mov     eax,dword ptr [ecx+0Ch]
6620c1da 8b0c98          mov     ecx,dword ptr [eax+ebx*4]
\`\`\`

- 첫 줄에서 \`ecx\`가 가리키는 객체의 +0x0C 위치 값을 읽어 \`eax\`에 넣는다.
- 둘째 줄에서 \`eax\`를 배열 시작 주소로 보고 \`ebx\`번째 요소를 읽는다.
- 이때 \`eax\`(001c7900)가 유효하지 않은 주소라 실패한다.
- 즉 객체 포인터(\`ecx\`) 또는 객체 내부의 배열 포인터가 이미 깨져 있던 상태이다.
- \`ecx\` 값(13712c91)이 홀수이면 정상 포인터가 아닐 가능성이 높다.

### 6.3 호출 스택 읽는 방법

1. 스택은 위쪽이 최근 호출이다. 맨 위 프레임이 크래시 위치이다.
2. 아래로 내려가며 어떤 모듈이 어떤 순서로 호출했는지 본다.
3. 이번 사례의 흐름

\`\`\`
EditSL_Char (comctl32)            에디트 컨트롤에 글자 입력
 -> Edit_NotifyParent             부모에게 EN_CHANGE 알림
  -> ChildWndProc (hhctrl)
   -> HelpWndProc (hhctrl)        WM_COMMAND 처리
    -> CIndex::OnCommand (hhctrl) 크래시
\`\`\`

4. 윈도우 메시지 번호 참고: \`0x102\` = WM_CHAR, \`0x111\` = WM_COMMAND, \`0x300\` 대역의 값 = EN_CHANGE 알림 코드.
5. 이 호출 스택에는 \`hhctrl\`, \`comctl32\`, \`user32\`만 있었고 호스트 EXE의 확장 모듈은 없었다.

---

## 7. 의심 모듈 확인

### 7.1 모듈 정보 확인 명령

\`\`\`
lmvm 모듈명
\`\`\`

- 모듈명은 \`lm\` 출력의 \`module name\` 열을 정확히 그대로 쓴다.
- 파일 확장자가 아니라 모듈명이다. 예: \`cxviewer80u\` (\`cxviewer80u.ocx\` 파일의 모듈명).
- 출력 항목: 이미지 경로, 타임스탬프, 파일 버전, 로드 주소.

### 7.2 확인할 것

1. 대상 모듈이 로드되어 있는가.
2. 대상 모듈이 크래시 스택 또는 다른 스레드 스택에 나타나는가.
3. 파일 버전과 타임스탬프가 예상과 일치하는가.

이번 사례에서는 대상 모듈이 프로세스에 로드되어 있었지만, 어떤 스레드의 스택에도 나타나지 않았다.

---

## 8. 추가 분석 (선택)

### 8.1 지역변수와 메모리 확인

\`\`\`
.ecxr
dd ebp-2640h L4        스택 지역변수 확인
dc 13712c90 L20        특정 주소의 메모리 내용 (4바이트 단위 + 문자)
!address 13712c90      해당 주소의 메모리 영역 속성
\`\`\`

- 크래시 직전에 코드가 읽는 지역변수 값이 레지스터 값과 같으면, 그 값은 우연이 아니라 코드가 저장해 둔 값이다.
- 포인터 값이 다른 스레드의 스택이나 스레드 시작 인자 값과 비슷하면, 해제된 메모리가 다른 용도로 재사용된 것(use-after-free)일 수 있다. 확정 근거는 아니고 정황이다.

### 8.2 함수 전체 디스어셈블

\`\`\`
uf 모듈!함수명
\`\`\`

- 출력이 길 수 있으므로 로그 파일로 저장한다.
- 크래시한 값이 어디서 만들어지는지 추적할 때 사용한다.

### 8.3 덤프 종류 확인

\`\`\`
.dumpdebug
\`\`\`

- 덤프에 어떤 메모리가 포함되었는지 보여준다.
- 미니덤프이면 힙 정보가 없어 힙 분석이 제한된다.

---

## 9. 시행착오와 주의사항

### 9.1 모듈명 오해로 \`lmvm\`이 빈 결과를 반환

- 증상: \`lmvm ocx\` 실행 시 모듈 헤더만 나오고 내용이 없었다.
- 원인: 덤프 파일명의 \`ocx\`는 모듈명이 아니었다. 실제 모듈은 \`cxviewer80u\`였다.
- 대응: 항상 \`lm\` 결과의 \`module name\` 열을 보고 정확한 이름을 사용한다. 파일명에서 모듈명을 추측하지 않는다.
- 결과적으로 처음에는 "해당 모듈이 로드되지 않았다"고 잘못 해석할 뻔했다. 빈 결과는 "없음"이 아니라 "이름이 틀림"일 수 있다.

### 9.2 \`dt 모듈!타입\` 실패

- 증상: \`Symbol hhctrl!CIndex not found.\`
- 원인: Microsoft 공개 심볼에는 구조체 타입 정보가 없다.
- 대응: 타입 정보가 필요하면 해당 모듈의 개인 심볼(private PDB)이 있어야 한다. 없다면 디스어셈블과 레지스터 값 해석으로 진행한다.

### 9.3 \`!heap -p -a\` 실패

- 증상: \`unable to read 7ffdf068\`
- 원인: 32비트 프로세스의 PEB(\`7ffdf000\` 대역)를 읽을 수 없다. 덤프에 힙 관련 메모리가 포함되지 않은 미니덤프이다.
- 대응: \`.dumpdebug\`로 덤프 종류를 확인한다. 힙 분석이 필요하면 풀 메모리 덤프(또는 힙 포함 덤프)를 다시 수집해야 한다.

### 9.4 32비트 덤프를 64비트 WinDbg에서 열었을 때

- 증상: 스택에 WOW64 관련 프레임만 보이거나 호출 경로가 깨진다.
- 대응: 4장의 \`.effmach x86\` 또는 \`.load wow64exts\` + \`!wow64exts.sw\`를 사용한다.

### 9.5 크래시 스레드의 스택이 이상하게 보이는 경우

- 증상: 9번 스레드의 \`~*kv\` 출력이 \`NtGetContextThread\` 등으로 보여 실제 크래시 스택과 다르다.
- 원인: 프로세스 안에서 덤프를 기록하는 중에 해당 스레드의 컨텍스트가 캡처된 것이다.
- 대응: 크래시 스택은 \`~*kv\`가 아니라 \`.ecxr\` 이후의 \`kv\`로 본다.
- 참고: \`dbgcore\`, \`dbghelp\` 모듈이 로드되어 있고 위와 같은 스택이면 프로세스 내부 크래시 핸들러가 \`MiniDumpWriteDump\`를 호출해 덤프를 만든 것일 수 있다. 이 경우 덤프 파일명은 핸들러를 설치한 모듈 이름을 따를 수 있으며, 그 모듈이 원인이라는 뜻은 아니다.

### 9.6 출력이 너무 길어서 한 번에 읽을 수 없음

- \`lm\`과 \`~*kv\`가 로그의 대부분을 차지한다. 파일로 저장한 뒤 필요한 구간(\`ANALYZE\`, \`EXCEPTION\`, \`STACK\`)부터 읽는다.
- 도구에 텍스트를 직접 붙여넣을 때는 최소한 \`!analyze -v\` 전체와 \`.ecxr\` 이후의 \`kv\`만 전달한다.

### 9.7 크래시 모듈 = 원인 모듈이 아닐 수 있음

- 크래시가 난 코드가 속한 모듈과, 메모리를 손상시킨 모듈은 다를 수 있다.
- use-after-free나 힙 손상은 문제를 일으킨 코드와 크래시 위치가 떨어져 있다.
- 그래서 스택에 나타나지 않은 모듈에 대해서는 "직접 원인이 아님"과 "간접 원인일 가능성 없음"을 구분해서 기술한다.

---

## 10. 결론 정리 방법

분석 결과를 보고할 때는 사실과 추정을 나누어 적는다.

### 10.1 사실 (덤프에서 직접 확인된 것)

- 예외 코드, 접근 주소, 크래시 함수와 오프셋
- 호출 스택과 포함된 모듈
- 대상 모듈의 로드 여부, 버전
- OS 버전, 프로세스 실행 시간

### 10.2 추정 (정황 근거)

- 해제된 메모리 재사용 가능성
- 트리거 조건 (이번 사례: 도움말 색인 탭의 검색란에 한글 입력)

### 10.3 미확인 사항

- 다른 모듈에 의한 힙 손상 여부
- 재현 조건의 정확한 범위

### 10.4 이번 사례 요약

| 항목 | 내용 |
|---|---|
| 크래시 모듈 | Windows HTML Help 컨트롤 (\`hhctrl.ocx\`) |
| 크래시 위치 | \`hhctrl!CIndex::OnCommand+0xeca\` |
| 호스트 | \`UXStudio92.exe\` (32비트) |
| 유형 | 유효하지 않은 포인터 읽기 (use-after-free 의심) |
| 트리거 | 도움말 색인 탭 검색란의 글자 입력 처리 중 |
| 대상 모듈 (\`cxviewer80u.ocx\` 8.2.3.420) | 프로세스에 로드되어 있었으나 어떤 스택에도 없음 |

---

## 11. 원인 구분을 위한 재현 테스트

덤프 분석만으로 결론이 나지 않을 때는 비교 테스트가 가장 결정적이다.

1. 대상 모듈을 로드하지 않은 상태에서 같은 조작을 수행한다.
2. 재현되면 대상 모듈과 무관하다.
3. 대상 모듈을 로드했을 때만 재현되면 대상 모듈의 영향을 점검한다.
4. 점검 항목 예시
   - 전역 훅 사용 (\`SetWindowsHookEx\`, \`SetWinEventHook\`)
   - 다른 모듈의 윈도우 서브클래싱
   - 프로세스 내부 크래시 핸들러 (\`SetUnhandledExceptionFilter\`, \`MiniDumpWriteDump\`)
   - 외부에서 할당된 메모리를 해제하는 코드

바이너리에서 확인할 때는 개발 환경에서 다음 명령을 사용한다.

\`\`\`
dumpbin /imports 대상모듈.ocx | findstr /i "Hook HtmlHelp UnhandledException MiniDump"
\`\`\`

---

## 12. 명령어 빠른 참조

| 목적 | 명령 |
|---|---|
| 심볼 설정 | \`.symfix\` / \`.reload /f\` / \`.sympath+ 경로\` |
| 자동 분석 | \`!analyze -v\` |
| 예외 정보 | \`.exr -1\` |
| 예외 시점으로 전환 | \`.ecxr\` |
| 32비트 전환 | \`.effmach x86\` 또는 \`.load wow64exts\` + \`!wow64exts.sw\` |
| 현재 스택 | \`kv\`, \`kn\` |
| 전체 스레드 스택 | \`~*kv\` |
| 스레드 전환 | \`~9s\` |
| 프레임 이동 | \`.frame 번호\` |
| 모듈 목록 / 상세 | \`lm\` / \`lmvm 모듈명\` |
| 레지스터 | \`r\` |
| 디스어셈블 | \`u 주소\`, \`uf 함수명\` |
| 메모리 출력 | \`dd 주소\`, \`dc 주소\`, \`da\`, \`du\` |
| 메모리 속성 | \`!address 주소\` |
| 덤프 종류 | \`.dumpdebug\` |
| 시스템 정보 | \`vertarget\`, \`\\|\` |
| 로그 저장 | \`.logopen 경로\` / \`.logclose\` |

`,Jm=`---
title: Tomcat 6 CPU 사용량 과부하 원인 파악 및 조치 과정
date: 2026-10-06
---
# Tomcat 6 CPU 사용량 과부하 원인 파악 및 조치 과정

## 1. 문서 개요

### 1.1 목적
Tomcat 6 프로세스의 CPU 사용률이 지속적으로 높게(약 95%) 유지될 때, 원인을 단계적으로 좁혀 가는 절차와 조치 방법을 정리한다. 이 문서의 순서대로 명령어를 실행하면 동일한 분석을 재현할 수 있다.

### 1.2 전제 조건
- 운영체제: Linux (Windows 환경은 9장 참고)
- 대상: Tomcat 6 (JVM 위에서 동작하는 \`java\` 프로세스)
- JDK(JRE가 아닌)가 설치되어 있어 \`jstack\`, \`jstat\`, \`jmap\`을 사용할 수 있을 것
- Tomcat을 실행한 계정으로 접속하거나 해당 계정으로 전환(\`sudo -u\`)할 수 있을 것

### 1.3 기본 원칙
- 원인을 확인하기 전에는 조치(설정 변경, 재기동)를 하지 않는다.
- 증거(top 출력, 스레드 덤프, GC 상태)는 문제가 발생한 시점에 수집한다.
- 한 번에 하나의 가설만 검증한다.

---

## 2. 분석 흐름 요약

| 단계 | 내용 | 사용 도구 |
|---|---|---|
| 1 | CPU를 점유한 프로세스/스레드 식별 | \`top -H\` |
| 2 | 스레드 덤프 수집 | \`jstack\`, \`kill -3\` |
| 3 | 스레드 ID 매칭으로 실행 중인 코드 확인 | \`printf\`, 덤프 파일 |
| 4 | GC/메모리 상태 확인 | \`jstat\`, \`jmap\` |
| 5 | 요청 로그 확인 | \`catalina.out\`, access log |
| 6 | 원인별 조치 | 설정 변경, 개발 요청 |

---

## 3. 사전 준비

### 3.1 Tomcat 프로세스 ID 확인
\`\`\`bash
ps -ef | grep catalina | grep -v grep
\`\`\`
출력의 두 번째 컬럼이 PID이다. 이하 \`<PID>\`로 표기한다.

### 3.2 실행 계정 확인
\`\`\`bash
ps -o user= -p <PID>
\`\`\`
\`jstack\` 등 JVM 도구는 대상 JVM과 같은 계정으로 실행해야 한다. 계정이 다르면 4.3절과 같은 오류가 발생한다.

### 3.3 증거 저장 디렉터리 생성
\`\`\`bash
mkdir -p /tmp/cpu_diag
cd /tmp/cpu_diag
\`\`\`

---

## 4. 1단계: CPU를 점유한 스레드 식별

### 4.1 스레드 단위로 CPU 사용량 확인
\`\`\`bash
top -H -p <PID>
\`\`\`
- \`-H\` 옵션으로 프로세스 내부 스레드를 개별 행으로 표시한다.
- CPU 사용률이 높은 상위 스레드의 PID 컬럼 값(스레드 ID, 10진수)을 기록한다.

파일로 남기려면 다음과 같이 실행한다.
\`\`\`bash
top -H -b -n 1 -p <PID> | head -30 > top_threads.txt
\`\`\`

### 4.2 스레드 ID를 16진수로 변환
스레드 덤프에는 스레드 ID가 16진수(\`nid=0x...\`)로 표시되므로 변환이 필요하다.
\`\`\`bash
printf "%x\\n" <스레드ID>
\`\`\`
예: 스레드 ID가 \`12345\`이면 결과는 \`3039\`이고, 덤프에서는 \`nid=0x3039\`로 찾는다.

### 4.3 주의: top의 CPU 사용률 해석
- 멀티코어 환경에서 \`top\`의 프로세스 CPU 값은 코어별 합산이므로 100%를 초과할 수 있다.
- 따라서 "95%"가 전체 CPU의 95%인지, 코어 1개 기준 95%인지 먼저 구분한다. 구분 방법은 \`top\` 실행 후 \`1\` 키를 눌러 코어별 사용률을 확인한다.

---

## 5. 2단계: 스레드 덤프 수집

### 5.1 jstack 사용
\`\`\`bash
jstack <PID> > threaddump_1.txt
\`\`\`

### 5.2 kill -3 사용 (jstack이 동작하지 않을 때)
\`\`\`bash
kill -3 <PID>
\`\`\`
- 프로세스가 종료되지 않는다. 덤프는 터미널이 아니라 Tomcat의 표준 출력 파일(\`catalina.out\`)에 기록된다.
- \`catalina.out\`에서 \`Full thread dump\` 문자열로 덤프 시작 위치를 찾는다.

### 5.3 반복 수집
덤프 한 번으로는 일시적 상태와 지속 상태를 구분할 수 없다. 5~10초 간격으로 3~5회 수집한다.
\`\`\`bash
for i in 1 2 3 4 5; do
  jstack <PID> > threaddump_$i.txt
  sleep 5
done
\`\`\`

### 5.4 시행착오 (jstack 관련)
- 오류 \`Unable to open socket file: target process not responding or HotSpot VM not loaded\`
  - 원인: Tomcat 실행 계정과 다른 계정에서 실행했거나, JDK 버전이 대상 JVM과 맞지 않음.
  - 조치: \`sudo -u <Tomcat실행계정> jstack <PID>\`로 실행한다. 여러 JDK가 설치된 경우 Tomcat이 사용하는 JDK의 \`jstack\`을 절대 경로로 호출한다.
- 오류 \`Well-known file is not secure\`
  - 원인: 임시 디렉터리(\`/tmp\`) 내 JVM 소켓 파일의 소유자와 실행 계정 불일치.
  - 조치: 위와 동일하게 실행 계정을 맞춘다.
- JRE만 설치된 서버에는 \`jstack\`이 없다. 이 경우 \`kill -3\`을 사용한다.
- Tomcat 6이 구버전 JDK(6, 7)에서 동작하는 경우가 많으므로 \`jcmd\`는 사용할 수 없을 수 있다.

---

## 6. 3단계: 스레드 ID 매칭 및 패턴 분류

### 6.1 CPU 점유 스레드의 스택 확인
4.2절에서 변환한 값으로 덤프를 검색한다.
\`\`\`bash
grep -A 30 "nid=0x3039" threaddump_1.txt
\`\`\`
\`-A 30\`은 해당 행 이후 30행(스택 트레이스)을 함께 출력한다.

### 6.2 지속성 확인
수집한 모든 덤프에서 같은 스레드가 같은 위치(같은 클래스/메서드/행 번호)에 있는지 비교한다.
\`\`\`bash
grep -A 10 "nid=0x3039" threaddump_*.txt
\`\`\`
- 같은 위치에 반복해서 나타나면 무한 루프 또는 장시간 연산 가능성이 높다.
- 위치가 매번 다르면 일반적인 부하(요청 처리)일 가능성이 높다.

### 6.3 패턴별 해석

| 덤프에서 확인되는 모습 | 의심 원인 | 다음 단계 |
|---|---|---|
| \`VM Thread\`, \`GC task thread#N\` 등 GC 스레드가 상위 | GC 과다 (메모리 부족, 누수) | 7장 |
| 특정 애플리케이션 스레드가 매번 같은 스택 (정규식, 파싱, 반복문, 재귀) | 애플리케이션 코드 문제 | 8.2절 |
| 요청 처리 스레드(\`http-8080-N\` 형태)가 다수 RUNNABLE | 트래픽 급증 또는 특정 요청 폭주 | 5단계(로그), 8.3절 |
| 요청 처리 스레드가 대부분 WAITING/BLOCKED | CPU 문제가 아니라 락/DB 대기 문제 | 락 경합 분석 |
| 스레드는 한가한데 시스템 CPU가 높음 | 로깅 과다, 디스크 I/O, 다른 프로세스 | \`top\`, \`iostat\`으로 재확인 |

### 6.4 시행착오 (스레드 이름)
- Tomcat 6의 요청 처리 스레드 이름은 \`http-8080-1\`, \`http-8080-2\` 형태(포트 번호 포함)이다. \`http-nio-8080-exec-N\`, \`http-bio-8080-exec-N\` 형태는 Tomcat 7 이후의 명명이므로 Tomcat 6 덤프에서 이 이름을 찾으면 검색되지 않는다.
- APR 커넥터를 사용하는 경우 \`http-apr-8080-exec-N\` 형태일 수 있다. 실제 이름은 덤프에서 \`"http-\` 로 시작하는 스레드를 검색해 확인한다.

---

## 7. 4단계: GC 및 메모리 상태 확인

### 7.1 GC 통계 확인
\`\`\`bash
jstat -gcutil <PID> 1000 10
\`\`\`
1초 간격으로 10회 출력한다. 주요 컬럼은 다음과 같다.

| 컬럼 | 의미 |
|---|---|
| \`O\` | Old 영역 사용률(%) |
| \`P\` | Permanent 영역 사용률(%) (JDK 7 이하) |
| \`FGC\` | Full GC 누적 횟수 |
| \`FGCT\` | Full GC 누적 소요 시간(초) |

### 7.2 판단 기준
- \`O\`가 90% 이상이고 \`FGC\`가 짧은 시간에 계속 증가하면 Full GC가 반복되는 상태이다. 이때 GC 스레드가 CPU를 점유하는 것이 원인이다.
- Full GC 후에도 \`O\`가 거의 줄지 않으면 메모리 누수 또는 힙 크기 부족이다.
- \`P\`가 100%에 가까우면 PermGen 부족이다 (재배포를 반복하는 환경에서 흔함).

### 7.3 힙 상세 확인 (주의)
\`\`\`bash
jmap -heap <PID>
jmap -histo <PID> | head -30
\`\`\`
- \`jmap -histo:live\`는 Full GC를 유발하므로 운영 중 CPU 과부하 상황에서는 사용하지 않는다. 옵션 없는 \`-histo\`를 사용한다.
- \`jmap -dump\`(힙 덤프)는 서비스가 일시 정지되고 파일 크기가 힙 크기만큼 커지므로, 디스크 여유 공간과 서비스 영향을 확인한 후 실행한다.

### 7.4 GC 로그 활성화 (재발 대비)
\`$CATALINA_HOME/bin/setenv.sh\`에 다음을 추가한다. (Tomcat 6.0.24 이상에서 \`setenv.sh\`를 자동 인식한다. 파일이 없으면 새로 만든다.)
\`\`\`bash
CATALINA_OPTS="$CATALINA_OPTS -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -Xloggc:/path/to/gc.log"
\`\`\`
적용에는 Tomcat 재기동이 필요하다.

---

## 8. 5단계 및 6단계: 로그 확인과 조치

### 8.1 요청 로그 확인
\`catalina.out\`과 access log(\`localhost_access_log.*\`)에서 문제 시점의 요청을 확인한다.

URL별 요청 수 상위 집계 (기본 access log 형식 기준, 7번째 필드가 요청 URL):
\`\`\`bash
awk '{print $7}' localhost_access_log.YYYY-MM-DD.txt | sort | uniq -c | sort -rn | head -20
\`\`\`
접속 IP별 요청 수 상위 집계 (1번째 필드가 클라이언트 IP):
\`\`\`bash
awk '{print $1}' localhost_access_log.YYYY-MM-DD.txt | sort | uniq -c | sort -rn | head -20
\`\`\`
access log 패턴을 변경한 경우 필드 번호가 다르므로 로그 한 줄을 먼저 확인한다.

확인 항목:
- 특정 URL 또는 특정 IP에 요청이 집중되는가 (크롤러, 비정상 호출)
- 같은 요청이 반복되는가 (무한 리다이렉트, 클라이언트 재시도 루프)
- 최근 배포 또는 설정 변경 시점과 문제 발생 시점이 일치하는가

### 8.2 원인이 애플리케이션 코드인 경우
- 스레드 덤프(스택 트레이스 포함)와 해당 시점의 요청 로그를 개발 담당자에게 전달한다.
- 전달 시 포함할 정보: 문제 시각, CPU 점유 스레드의 스택 트레이스 전체, 5회 수집한 덤프에서의 반복 여부.
- 정규식 처리, 대용량 데이터 반복 처리, 종료 조건이 없는 루프가 대표적인 원인이다.

### 8.3 원인이 트래픽(요청 폭주)인 경우
- 특정 IP/URL 집중이면 방화벽 또는 웹서버(Apache 등) 단에서 차단하거나 제한한다.
- 정상 트래픽 증가이면 서버 증설, 캐시 적용, 커넥터 \`maxThreads\` 검토를 한다. \`maxThreads\`를 무작정 늘리면 CPU 경합이 오히려 악화될 수 있으므로 원인 확인 후 조정한다.

### 8.4 원인이 GC/메모리인 경우
- 힙 크기 조정: \`setenv.sh\`의 \`CATALINA_OPTS\`에서 \`-Xms\`, \`-Xmx\` 값을 서버 메모리 범위 내에서 조정한다. 두 값을 동일하게 두면 힙 크기 변동으로 인한 부하를 줄일 수 있다.
- PermGen 부족: \`-XX:MaxPermSize=256m\` 등으로 조정한다.
- 메모리 누수가 의심되면 힙 덤프를 수집하여 Eclipse MAT 등으로 분석한다. 힙 크기 증설은 임시 완화책일 뿐 근본 해결이 아니다.

### 8.5 원인이 로깅인 경우
- 운영 환경에서 DEBUG 레벨 로그가 켜져 있는지 확인하고 INFO 이상으로 조정한다.
- \`catalina.out\`이 계속 커지는지 확인한다 (\`ls -l\`로 크기 증가 속도 확인).

### 8.6 임시 조치와 근본 조치의 구분
- Tomcat 재기동은 CPU를 일시적으로 낮출 수 있으나 원인을 제거하지 못한다. 증거 수집을 마친 후에만 수행한다.
- 조치 후에는 동일한 부하 조건에서 \`top -H\`와 \`jstat\`을 다시 실행하여 개선 여부를 확인한다.

---

## 9. 참고: Windows 환경
- 스레드 CPU 확인: Process Explorer에서 \`java.exe\`의 Threads 탭을 확인한다. (스레드 ID는 10진수)
- 스레드 덤프: \`jstack <PID>\`는 동일하게 사용 가능하다. 콘솔로 실행 중이면 \`Ctrl+Break\`로 덤프를 출력할 수 있다.
- 서비스로 실행 중인 경우 \`jstack\`은 서비스 실행 계정 권한이 필요할 수 있다.
- 16진수 변환은 계산기(프로그래머 모드) 또는 PowerShell \`'{0:x}' -f <스레드ID>\`를 사용한다.

---

## 10. 시행착오 및 주의사항 종합

| 번호 | 실수 | 결과 | 올바른 방법 |
|---|---|---|---|
| 1 | 증거 수집 전에 Tomcat 재기동 | CPU는 내려가지만 원인 확인 불가, 재발 | 먼저 \`top -H\`, 스레드 덤프 수집 후 재기동 |
| 2 | 스레드 덤프를 1회만 수집 | 일시적 상태와 지속 상태 구분 불가 | 5~10초 간격 3~5회 수집 |
| 3 | \`top\`의 스레드 ID(10진수)를 덤프에서 그대로 검색 | 일치하는 스레드 없음 | \`printf "%x"\`로 16진수 변환 후 \`nid=0x...\` 검색 |
| 4 | 다른 계정으로 \`jstack\` 실행 | \`Unable to open socket file\` 오류 | Tomcat 실행 계정으로 실행 |
| 5 | \`kill -3\` 후 터미널에서 출력 확인 시도 | 아무것도 출력되지 않음 | \`catalina.out\`에서 \`Full thread dump\` 검색 |
| 6 | \`jmap -histo:live\`, \`jmap -dump\`를 운영 중 즉시 실행 | Full GC 유발, 서비스 정지, 부하 악화 | 옵션 없는 \`-histo\` 사용, 힙 덤프는 영향 확인 후 실행 |
| 7 | Tomcat 7 이후의 스레드 이름(\`http-nio-...\`)으로 검색 | 검색 결과 없음 | Tomcat 6은 \`http-8080-N\` 형태. \`"http-\`로 검색 |
| 8 | \`top\`의 CPU 값을 전체 CPU 기준으로 오해 | 심각도 오판 | \`top\`에서 \`1\` 키로 코어별 사용률 확인 |
| 9 | 원인 확인 없이 \`-Xmx\`, \`maxThreads\`부터 증설 | 증상만 지연되거나 악화 | 6장 패턴 분류 후 원인에 맞는 조치 |
| 10 | 한 번에 여러 설정을 동시 변경 | 어떤 변경이 효과 있는지 판단 불가 | 한 번에 하나씩 변경하고 결과 확인 |

---

## 11. 증거 일괄 수집 스크립트

장애 시점에 수동으로 입력할 시간이 없을 때를 대비하여 한 번에 수집하는 스크립트이다. Tomcat 실행 계정으로 실행한다.

\`\`\`bash
#!/bin/bash
# 사용법: ./collect.sh <PID>
PID=$1
OUT=/tmp/cpu_diag/$(date +%Y%m%d_%H%M%S)
mkdir -p "$OUT"

top -H -b -n 1 -p "$PID" | head -40 > "$OUT/top_threads.txt"

for i in 1 2 3 4 5; do
  jstack "$PID" > "$OUT/threaddump_$i.txt"
  sleep 5
done

jstat -gcutil "$PID" 1000 10 > "$OUT/jstat_gcutil.txt"

echo "수집 완료: $OUT"
\`\`\`

수집된 파일을 이용한 분석은 4.2절, 6.1절, 6.2절의 절차를 따른다.

---

## 12. 작업 기록 양식

작업 시 아래 항목을 기록해 두면 재발 시 비교가 가능하다.

| 항목 | 내용 |
|---|---|
| 발생 일시 | |
| 증상 (CPU 사용률, 응답 지연 여부) | |
| Tomcat / JDK 버전 | |
| 서버 CPU 코어 수 / 메모리 | |
| CPU 점유 스레드 이름 및 스택 요약 | |
| \`jstat\` Old 영역 사용률 / FGC 증가 여부 | |
| 요청 로그 특이사항 | |
| 최종 원인 | |
| 조치 내용 | |
| 조치 후 확인 결과 | |

`,Ym='---\ntitle: Tomcat 10 (Jakarta EE) 라이브러리 마이그레이션 도구 설명서\ndate: 2026-10-06\n---\n# Tomcat 10 (Jakarta EE) 라이브러리 마이그레이션 도구 설명서\n\n## 1. 개요\n\n### 1.1 목적\nTomcat 9 이하 환경에서 사용하던 `javax.*` 기반 라이브러리(jar)를 Tomcat 10 이상에서 사용하는 `jakarta.*` 기반으로 변환한다. 이 문서는 변환 도구의 사용 방법과 동작 방식, 그리고 변환 결과를 Tomcat 10에 적용하고 설치 상태를 확인하는 절차까지 정리한다.\n\n### 1.2 변환이 필요한 이유\nTomcat 10부터 Java EE가 Jakarta EE로 이전되면서 패키지 이름이 `javax.servlet.*` 에서 `jakarta.servlet.*` 로 바뀌었다. 기존 jar가 `javax.*` 를 참조하면 Tomcat 10에서 `ClassNotFoundException`, `NoClassDefFoundError` 가 발생한다.\n\n### 1.3 문서 범위\n| 구분 | 내용 | 도구가 수행하는지 |\n|---|---|---|\n| 계정 준비 | Tomcat 실행/작업용 계정 생성 | 아니오 (수동) |\n| 환경 준비 | Java 설치 확인 | 아니오 (수동) |\n| 라이브러리 변환 | jar 내부 `javax` 를 `jakarta` 로 변환 | 예 |\n| 결과 확인 | 로그 및 파일 점검 | 부분 (로그 생성) |\n| Tomcat 반영 | 변환된 jar 배포 | 아니오 (수동) |\n| 설치 확인 | Tomcat 버전 및 기동 확인 | 아니오 (수동) |\n\n계정 생성, Java 확인, Tomcat 반영과 설치 확인은 아래 도구에 포함되어 있지 않으며, 이 문서에서 절차만 안내한다.\n\n---\n\n## 2. 구성 파일\n\n작업 폴더: `D:\\storageD\\110_2) TOMCAT_10 MIGRATION 방법\\`\n\n| 파일 | 역할 |\n|---|---|\n| `Run_Migration_Tool.bat` | 실행 진입점. PowerShell 스크립트를 호출한다. |\n| `Tomcat_Migration_Tool.ps1` | 폴더 선택과 실행 버튼을 제공하는 GUI. 변환 jar를 호출한다. |\n| `jakartaee-migration-1.0.12-shaded.jar` | 실제 변환을 수행하는 Apache Tomcat Migration Tool for Jakarta EE (1.0.12). 의존 라이브러리가 하나로 묶인(shaded) 실행 가능 jar. |\n| `lib_beforeMig\\` | (예시) 변환 전 라이브러리 폴더 |\n| `lib_migrated\\` | (예시) 변환 후 라이브러리 폴더. `migration_log.txt` 가 함께 생성된다. |\n\n세 파일(`.bat`, `.ps1`, `.jar`)은 반드시 같은 폴더에 있어야 한다.\n\n---\n\n## 3. 사용방법\n\n### 3.1 계정 준비\n1. Tomcat을 실행하고 변환 작업을 수행할 전용 계정을 생성한다. 관리자 권한이 필요 없는 일반 계정을 권장한다.\n2. 해당 계정에 다음 권한을 부여한다.\n   - 작업 폴더(`D:\\storageD\\110_2) TOMCAT_10 MIGRATION 방법\\`): 읽기, 쓰기\n   - Tomcat 설치 폴더: 읽기, 실행 (배포 시 `webapps` 또는 `WEB-INF\\lib` 쓰기)\n3. 생성한 계정으로 로그인한다.\n\n### 3.2 Java 설치 확인\n변환 도구는 `java` 명령을 PATH에서 찾아 실행한다.\n\n1. 명령 프롬프트를 열고 다음을 실행한다.\n\n   ```\n   java -version\n   ```\n\n2. 버전이 출력되면 정상이다. 명령을 찾을 수 없다는 메시지가 나오면 JDK/JRE를 설치하고 `JAVA_HOME` 및 PATH를 설정한다.\n3. 변환 도구는 Java 8 이상에서 동작한다. 배포 대상이 Tomcat 10.1 이면 Java 11 이상이 필요하다.\n\n### 3.3 변환 대상 준비\n1. 변환할 jar 파일들을 하나의 폴더에 모은다. (예: `lib_beforeMig`)\n2. 원본 폴더는 변환 중 수정되지 않지만, 안전을 위해 별도로 백업해 둔다.\n3. 출력 폴더는 원본과 다른 경로로 정한다. (예: `lib_migrated`) 존재하지 않으면 자동 생성된다.\n\n### 3.4 도구 실행\n1. `Run_Migration_Tool.bat` 를 더블클릭한다.\n2. "Tomcat 10 (Jakarta EE) Migration Tool" 창이 열린다.\n3. `Source Lib Directory` 의 `Browse...` 를 눌러 변환 전 폴더를 선택한다.\n4. `Destination Directory` 의 `Browse...` 를 눌러 출력 폴더를 선택한다.\n5. `Run Migration` 버튼을 누른다.\n6. 처리 중에는 버튼이 비활성화된다. 완료되면 완료 메시지 창이 표시되고, 상태 창에 로그가 출력된다.\n\n### 3.5 결과 확인\n1. 출력 폴더의 `migration_log.txt` 를 연다.\n2. 마지막 줄이 `Migration completed successfully in [...] milliseconds` 인지 확인한다.\n3. 로그에 `ERROR`, `Exception`, `Unable` 등 오류 문구가 없는지 검색한다.\n4. 입력 폴더와 출력 폴더의 jar 파일 개수가 같은지 비교한다.\n\n### 3.6 Tomcat 10 반영\n1. Tomcat 10을 중지한다.\n2. 변환된 jar를 애플리케이션의 `WEB-INF\\lib` 또는 Tomcat의 `lib` 폴더에 복사한다. 기존 변환 전 jar는 제거한다.\n3. 애플리케이션 자체의 코드와 설정(`web.xml`, 소스의 `javax.servlet` 등)도 `jakarta` 기준으로 변환되어 있어야 한다. 이 도구는 라이브러리 jar만 변환한다.\n4. 필요하면 `<Tomcat>\\webapps` 대신 `webapps-javaee` 폴더에 두어 Tomcat 자체 변환 기능을 이용하는 방법도 있다. (이 도구와는 별개의 방법이다.)\n\n### 3.7 Tomcat 설치 확인\n1. 버전 확인\n\n   ```\n   <Tomcat 설치경로>\\bin\\version.bat\n   ```\n\n   출력의 `Server version` 이 `Apache Tomcat/10.x.x` 인지 확인한다. `JVM Version` 도 함께 확인한다.\n\n2. 기동\n\n   ```\n   <Tomcat 설치경로>\\bin\\startup.bat\n   ```\n\n3. 기동 로그 확인: `<Tomcat 설치경로>\\logs\\catalina.<날짜>.log` 에 `Server startup in [...] milliseconds` 가 있는지 확인한다.\n4. 접속 확인: 브라우저에서 `http://localhost:8080/` 에 접속하여 Tomcat 기본 페이지 또는 애플리케이션 화면이 표시되는지 확인한다.\n5. 오류 확인: `catalina.<날짜>.log` 와 `localhost.<날짜>.log` 에 `ClassNotFoundException`, `NoClassDefFoundError`, `javax.` 관련 오류가 없는지 확인한다.\n6. 기능 확인: 메일 발송, SOAP(Axis2), 스케줄러(Quartz), 리포트 등 변환된 라이브러리를 사용하는 기능을 실제로 호출해 본다.\n\n---\n\n## 4. 기술 설명\n\n### 4.1 전체 동작 흐름\n\n```\nRun_Migration_Tool.bat\n   └─ powershell -File Tomcat_Migration_Tool.ps1\n        └─ (Run Migration 클릭) cmd /c java -jar jakartaee-migration-1.0.12-shaded.jar <source> <dest> > <dest>\\migration_log.txt 2>&1\n             └─ 종료 코드 확인 후 결과 표시\n```\n\n### 4.2 Run_Migration_Tool.bat\n| 항목 | 내용 |\n|---|---|\n| `@echo off` | 실행 명령 출력을 끈다. |\n| `powershell -ExecutionPolicy Bypass` | 이번 실행에 한해 스크립트 실행 정책을 우회한다. 시스템 설정은 변경하지 않는다. |\n| `-WindowStyle Hidden` | PowerShell 콘솔 창을 숨긴다. GUI 창만 표시된다. |\n| `-File "%~dp0Tomcat_Migration_Tool.ps1"` | `%~dp0` 는 bat 파일이 위치한 폴더이다. 어느 경로에서 실행해도 같은 폴더의 ps1을 찾는다. |\n\n### 4.3 Tomcat_Migration_Tool.ps1\n1. 초기화\n   - Windows Forms, Drawing 어셈블리를 로드한다.\n   - 스크립트와 같은 폴더에서 `jakartaee-migration-1.0.12-shaded.jar` 를 찾는다. 없으면 오류 메시지를 표시하고 종료한다.\n2. 화면 구성\n   - Source 경로 입력란과 Browse 버튼\n   - Destination 경로 입력란과 Browse 버튼\n   - Run Migration 버튼\n   - 읽기 전용 상태 창\n3. 실행 전 검사\n   - Source 또는 Destination이 비어 있으면 경고 후 중단한다.\n   - Source 폴더가 존재하지 않으면 오류 후 중단한다.\n   - Destination 폴더가 없으면 생성한다.\n4. 변환 실행\n   - `cmd.exe /c java -jar "<jar>" "<source>" "<dest>" > "<dest>\\migration_log.txt" 2>&1` 를 콘솔 창 없이 실행한다.\n   - 표준 출력과 표준 오류를 모두 `migration_log.txt` 로 저장한다.\n   - 실행 중 `DoEvents()` 와 100ms 대기를 반복하여 화면이 멈추지 않도록 한다.\n5. 결과 판정\n   - 프로세스 종료 코드가 0이면 성공, 그 외는 실패로 표시한다.\n   - 로그 파일을 시스템 기본 인코딩으로 읽어 상태 창에 출력한다.\n6. 예외 처리\n   - 프로세스 시작 자체가 실패하면 Java 설치 여부를 확인하라는 메시지를 표시한다.\n   - Java가 PATH에 없는 경우에는 `cmd` 가 오류 코드를 반환하므로, 실패 메시지와 로그 파일의 `java` 인식 오류 문구로 확인한다.\n\n### 4.4 jakartaee-migration-1.0.12-shaded.jar\nApache Tomcat 프로젝트의 Jakarta EE Migration Tool이다. 이 스크립트는 `<source>` `<dest>` 두 인자만 전달하므로 기본 설정으로 동작한다.\n\n| 항목 | 동작 |\n|---|---|\n| 프로파일 | 기본값 `TOMCAT`. 로그 첫 줄에 `Jakarta EE specification profile [TOMCAT]` 로 표시된다. |\n| 입력이 폴더인 경우 | 폴더 안의 파일을 처리하여 출력 폴더에 저장한다. jar는 변환하고, 변환 대상이 아닌 파일은 그대로 복사한다. |\n| 변환 내용 | 클래스 파일의 바이트코드와 텍스트 리소스에 포함된 `javax.*` 패키지 참조를 `jakarta.*` 로 치환한다. 대상은 Servlet, JSP, EL, WebSocket, Mail, Activation, JMS, XML Binding 등 Jakarta EE 명세 패키지이다. |\n| 제외 대상 | 기본 제외 목록에 있는 jar(`asm`, `bcprov`, `bcpkix`, `slf4j-api` 등)는 변환하지 않고 그대로 복사한다. 로그에 `excluded (the archive was copied unchanged)` 로 표시된다. |\n| 처리 방식 | 스트리밍 방식(`using streaming`)으로 jar를 읽으며 변환하여 메모리 사용을 줄인다. |\n| 중첩 jar | jar 안에 포함된 jar도 재귀적으로 변환한다. |\n| 서명 파일 | jar 내용이 바뀌면 기존 서명이 무효가 되므로 `META-INF/*.SF`, `*.RSA`, `*.DSA` 를 삭제한다. 로그에 `Drop cryptographic signature file` 로 표시된다. |\n| 종료 코드 | 정상 완료 시 0, 오류 시 0이 아닌 값 |\n\n### 4.5 로그 메시지 해석\n| 로그 | 의미 | 조치 |\n|---|---|---|\n| `Migration starting for archive [...]` | 해당 jar 처리 시작 | 없음 |\n| `Migration finished for archive [...]` | 해당 jar 처리 완료 | 없음 |\n| `Migration skipped ... because it is excluded` | 제외 대상으로 변환 없이 복사 | 없음 |\n| `Drop cryptographic signature file [...]` | 서명 파일 삭제 | 없음 |\n| `Migration completed successfully in [N] milliseconds` | 전체 정상 종료 | 없음 |\n| 그 외 `ERROR`, `Exception` 등 | 변환 실패 | 해당 jar 확인 |\n\n로그에 표시되는 경로의 한글이 깨져 보일 수 있다. 이는 로그 파일 인코딩 문제이며 변환 결과에는 영향이 없다.\n\n---\n\n## 5. 제약 사항 및 주의사항\n\n1. 변환 성공은 도구가 오류 없이 끝났다는 의미이며, 변환된 라이브러리가 Tomcat 10에서 정상 동작한다는 보증이 아니다. 반드시 3.7절의 기동 및 기능 확인을 수행한다.\n2. 문자열을 조합하여 만든 클래스 이름(리플렉션), 설정 파일 내 참조 등은 변환되지 않을 수 있다.\n3. 오래된 라이브러리(예: Axis2 1.7.0, Axiom 1.2.13, JAXB API 2.1, Mail, Activation, Geronimo JMS)는 변환해도 정상 동작하지 않을 수 있다. 가능하면 Jakarta를 정식 지원하는 최신 버전으로 교체한다.\n4. 서명이 삭제된 jar는 서명 검증이 필요한 환경에서는 사용할 수 없다.\n5. 출력 폴더를 입력 폴더와 동일하게 지정하지 않는다.\n6. `migration_log.txt` 는 출력 폴더에 함께 생성되므로 배포 시 jar만 선별하여 복사한다.\n7. 변환 도구는 라이브러리만 변환한다. 애플리케이션 소스, `web.xml`, 기타 설정 파일은 별도로 점검한다.\n\n---\n\n## 6. 문제 해결\n\n| 증상 | 원인 | 조치 |\n|---|---|---|\n| `Migration jar file not found` 메시지 | ps1과 같은 폴더에 jar가 없음 | 세 파일을 같은 폴더에 둔다. |\n| `Migration failed with exit code` 표시 | Java 미설치 또는 PATH 미설정, 변환 오류 | `java -version` 확인 후 `migration_log.txt` 를 확인한다. |\n| 로그 파일이 비어 있음 | `java` 명령을 찾지 못함 | Java를 설치하고 PATH를 설정한다. |\n| 실행 시 창이 열리지 않음 | PowerShell 실행 제한 또는 보안 프로그램 차단 | 명령 프롬프트에서 bat을 실행하여 오류를 확인한다. |\n| Tomcat 기동 시 `NoClassDefFoundError` | 변환 누락 또는 일부 jar가 변환 전 상태로 남아 있음 | 변환 전 jar가 배포 위치에 남아 있는지 확인한다. |\n| Tomcat 기동 시 `UnsupportedClassVersionError` | Java 버전이 Tomcat 요구 버전보다 낮음 | Tomcat 10.1은 Java 11 이상을 사용한다. |\n\n',Xm=`---
title: OracleCloud 사용하여 무료 서버 띄우는 방법
date: 2026-10-06
---
# OracleCloud 사용하여 무료 서버 띄우는 방법

Oracle Cloud(OCI)에서 계정을 만들고, 무료 한도 안에서 메모리 6GB 서버를 생성한 뒤 Tomcat 설치까지 확인하는 절차를 정리한 문서입니다.

## 목차

1. 개요
2. 사전 준비
3. 무료로 사용할 수 있는 범위
4. 계정 생성
5. Pay As You Go 계정으로 전환
6. 예산 알림(Budget) 설정
7. 인스턴스 생성
8. 네트워크 포트 개방
9. SSH 접속
10. Java 및 Tomcat 설치
11. 설치 확인
12. 참고: 파일 업로드와 권한
13. 보안 및 비용 점검
14. 시행착오 모음

---

## 1. 개요

### 1.1 목적

- 별도 비용 없이 Tomcat을 올릴 수 있는 서버를 Oracle Cloud에 만듭니다.
- 이 문서는 계정 생성부터 Tomcat 기동 확인까지를 다룹니다.

### 1.2 최종 구성

| 항목 | 값 |
|---|---|
| 서버 종류 | VM.Standard.A1.Flex (ARM, Ampere) |
| CPU / 메모리 | 1 OCPU / 6GB |
| 디스크 | 부트 볼륨 약 46.6GB |
| OS | Oracle Linux 9 |
| Java | OpenJDK 17 |
| Tomcat | 9.0.x |
| 접속 계정 | opc |

### 1.3 작성 기준

- 작성 시점은 2026년 10월입니다.
- 홈 리전은 Japan East (Tokyo)입니다.
- 콘솔 화면 구성과 무료 정책은 변경될 수 있습니다. 진행 전에 [Always Free 공식 문서](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)를 확인하세요.

### 1.4 이 방식을 선택한 이유

- 1GB 메모리 서버(Oracle Micro)에서는 웹 애플리케이션이 정상 기동되지 않았습니다.
- AWS는 프리티어가 끝나 비용 부담이 컸습니다.
- Naver Cloud는 무료 Micro 서버(1년, 1GB)가 Oracle Micro와 같은 메모리라 해결책이 되지 않았습니다. 2GB(Compact)는 월 26,000원(HDD 기준)이었습니다.
- Oracle의 ARM 서버(A1)는 무료 한도 안에서 최대 24GB까지 사용할 수 있어 이 방식을 선택했습니다.

---

## 2. 사전 준비

| 준비물 | 설명 |
|---|---|
| 이메일 주소 | 가입 및 안내 메일 수신용 |
| 휴대폰 | SMS 인증용 |
| 신용카드 | 해외결제가 가능한 신용카드 |
| PC | Windows 기준으로 설명합니다. SSH 클라이언트(OpenSSH)가 필요합니다. |

유의사항

- 체크카드는 인증 단계에서 거절되는 경우가 많습니다. 신용카드를 준비하세요.
- 카드 인증용으로 소액이 임시 승인되었다가 자동으로 취소됩니다.
- 카드사에서 해외결제를 차단해 두었다면 미리 허용하세요.

---

## 3. 무료로 사용할 수 있는 범위

### 3.1 Always Free 한도 (계정 전체 합계)

| 항목 | 한도 |
|---|---|
| ARM 서버 (A1.Flex) | 합계 4 OCPU / 24GB 메모리 |
| AMD 서버 (Micro) | 2대, 각 1GB 메모리 |
| 블록 스토리지 | 합계 200GB (부트 볼륨 포함) |
| 아웃바운드 트래픽 | 월 10TB |

### 3.2 유의사항

- 한도를 넘기는 즉시 초과분이 과금됩니다.
- 부트 볼륨도 200GB 한도에 포함됩니다. 삭제한 서버의 부트 볼륨이 남아 있으면 한도를 차지합니다.
- 무료 리소스는 홈 리전에서만 만들 수 있습니다.
- 이 문서의 구성(1 OCPU / 6GB / 약 46.6GB)은 한도 안에 있습니다.

### 3.3 한도를 넘길 때의 비용 (참고)

- A1은 OCPU당 시간당 약 $0.01, 메모리 GB당 시간당 약 $0.0015입니다.
- 1 OCPU와 4GB를 한 달 내내 쓰면 약 $11.7 수준입니다. 정확한 금액은 [Cost Estimator](https://www.oracle.com/cloud/costestimator.html)로 확인하세요.

---

## 4. 계정 생성

### 4.1 가입 절차

가입 화면의 항목과 순서는 시점과 국가에 따라 다를 수 있습니다. 아래는 일반적인 흐름입니다.

1. [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/) 페이지에서 **Start for free**를 선택합니다.
2. 국가, 이름, 이메일을 입력하고 이메일 인증을 진행합니다.
3. 비밀번호와 **Cloud Account Name**(테넌시 이름)을 입력합니다.
4. **Home Region**을 선택합니다. (4.2 참고)
5. 주소와 휴대폰 번호를 입력하고 SMS 인증을 진행합니다.
6. 신용카드 정보를 입력하고 본인 확인을 완료합니다.
7. 약관에 동의하고 가입을 완료합니다.
8. 계정 준비가 끝나면 안내 메일이 오고, 이후 콘솔에 로그인할 수 있습니다.

### 4.2 Home Region 선택 시 유의사항

- **Home Region은 계정 생성 후 변경할 수 없습니다.** 지원 요청으로도 변경되지 않습니다.
- 무료(Always Free) 리소스는 홈 리전에서만 만들 수 있으므로 가장 중요한 선택입니다.
- 한국에서 사용한다면 서울 또는 춘천 리전이 지연 시간 면에서 유리합니다.
- 다만 A1 서버는 인기가 많아 리전에 따라 용량이 부족(Out of capacity)할 수 있습니다. 서울 리전의 상황은 확인하지 못했습니다.
- 이 문서의 작성 환경은 도쿄 리전입니다. 한국에서 도쿄까지의 지연 시간은 일반적으로 30~40ms 수준이라 웹 서비스 용도로는 큰 문제가 없었습니다.

### 4.3 휴대폰 번호 입력 형식

- 국가번호 \`+82\`를 선택했다면 번호 맨 앞의 \`0\`을 뺍니다.
- 예: \`010-1234-5678\`은 \`10 1234 5678\`로 입력합니다.
- 국가 선택 칸에 \`+82\`가 이미 있으면 번호 칸에 \`+82\`를 다시 입력하지 않습니다.

---

## 5. Pay As You Go 계정으로 전환

### 5.1 전환하는 이유

- 무료 체험 계정(Free Tier)은 A1 서버 생성 시 용량 부족 오류가 자주 발생한다고 알려져 있습니다.
- Pay As You Go(PAYG)로 전환해도 **Always Free 리소스는 계속 무료**이며, 한도를 넘긴 만큼만 과금됩니다.
- 작업 환경에서는 전환 후 A1 서버가 첫 시도에 생성되었습니다. 모든 환경에서 보장되는 것은 아닙니다.

### 5.2 전환 절차

1. 콘솔 좌측 상단 메뉴(≡)에서 **Billing & Cost Management → Upgrade and Manage Payment**로 이동합니다.
   - 한글 콘솔에서는 \`청구 및 비용 관리 → 결제 업그레이드 및 관리\`입니다.
2. 현재 Plan type이 **Free Tier**인지 확인합니다.
3. **Pay As You Go** 영역의 **Upgrade your account**를 선택합니다.
4. 다음 항목을 확인하고 진행합니다.
   - Account type: **Individual**
   - Tax details: 개인이면 **Tax information is not available**을 선택한 상태로 둡니다.
   - Terms & conditions: 약관을 읽고 동의합니다.
5. **Upgrade your account**를 누릅니다.
6. "Your upgrade is in progress" 메시지가 표시되고, 완료되면 이메일이 옵니다.
7. 페이지를 새로고침하여 Plan type이 **Pay As You Go**로 바뀌었는지 확인합니다.

### 5.3 유의사항

- 전환에는 시간이 걸립니다. 이번 작업에서는 약 2시간이 걸렸습니다. 24시간까지는 정상 범위로 보고, 그 이상 지속되면 콘솔의 Help(?) → Contact Support에서 Billing 문의를 접수합니다.
- 카드 인증에서 지연되는 경우가 많습니다. 카드사 앱이나 문자에 해외결제 승인 요청이 없었는지 확인하세요.
- 완료 메일에 로그인이나 카드 입력을 요구하는 링크가 있으면 발신 도메인이 \`oracle.com\`인지 확인하세요. 의심되면 링크 대신 콘솔에 직접 접속합니다.
- 전환 후부터는 한도를 넘긴 리소스가 카드로 청구됩니다. 6장의 예산 알림을 바로 설정하세요.

### 5.4 시행착오: 업그레이드 페이지가 로딩되지 않는 경우

- 증상: 한글 콘솔에서 **결제 업그레이드 및 관리** 페이지가 회색 막대만 표시되고 로딩되지 않았습니다.
- 확인: 브라우저 개발자 도구(F12) Network 탭에서 \`ko.json\`(한국어 번역 파일) 요청이 404로 실패하고 있었습니다.
- 해결: 주소 끝에 \`&lang=en\`을 붙여 영어 화면으로 접속하니 정상 표시되었습니다.

\`\`\`
https://cloud.oracle.com/invoices-and-orders/upgrade-and-payment?region=<리전>&lang=en
\`\`\`

- 참고: 우측 상단 또는 하단의 언어 설정을 English로 바꿔도 됩니다.

### 5.5 시행착오: 요금 계산기와 혼동

- 업그레이드를 검색하다가 **Cost Estimator**(요금 계산기, \`oracle.com/cloud/costestimator\`) 화면이 열렸습니다.
- 이 화면은 예상 비용만 계산하며 계정 전환과 무관합니다. 전환은 5.2의 메뉴에서 진행합니다.

---

## 6. 예산 알림(Budget) 설정

### 6.1 절차

1. **Billing & Cost Management → Budgets → Create Budget**로 이동합니다.
2. 다음과 같이 입력합니다.

| 항목 | 값 |
|---|---|
| Name / Description | 임의 (예: \`budget-alert\`) |
| Budget Scope | Compartment |
| Target Compartment | 테넌시 이름 (root) |
| Schedule | Monthly |
| Budget Amount | 5 (월 $5) |
| Day of the month to begin budget processing | 1 |

3. **Budget Alert Rule**을 추가합니다.
   - Threshold Metric: Actual Spend
   - Threshold Type: Percentage of Budget
   - Threshold: 낮은 값 (예: 10%)
   - Recipients: 본인 이메일
4. **Create**를 누릅니다.

### 6.2 유의사항

- Budget은 **알림만 보내며 과금을 막지는 않습니다.** 알림을 받으면 직접 리소스를 정리해야 합니다.
- 비용 데이터 반영에 지연이 있어 알림은 실제 과금 몇 시간 후에 올 수 있습니다.

---

## 7. 인스턴스 생성

### 7.1 시작

- **Compute → Instances → Create instance**로 이동합니다. 아래 순서의 항목은 한 화면에서 위에서 아래로 나옵니다.

### 7.2 Basic information

| 항목 | 설정 |
|---|---|
| Name | 임의 (예: \`AlwaysFree-서버\`) |
| Compartment | root 그대로 |
| Availability domain | 하나만 있으면 그대로 |

### 7.3 Image and shape

1. **Image**: **Oracle Linux 9**(기본값)를 사용합니다.
   - Ubuntu에 익숙하면 **Change image**에서 Ubuntu 22.04/24.04를 선택합니다. 이때 반드시 **aarch64(ARM)** 이미지여야 합니다.
2. **Shape**: **Change shape → Ampere → VM.Standard.A1.Flex**를 선택합니다.
   - OCPU는 1, 메모리는 기본값 6GB로 둡니다. (1 OCPU 기준 기본값이 6GB입니다.)
   - 선택한 shape 옆에 **Always Free-eligible** 배지가 표시되는지 확인합니다.

유의사항

- OCPU나 메모리를 늘린 뒤에도 **Always Free-eligible** 배지가 유지되는지 확인합니다. 배지가 사라지면 한도를 넘긴 것입니다.
- 서버 합계가 4 OCPU / 24GB 이내이면 무료입니다.
- Oracle Linux는 패키지 관리자가 \`dnf\`, 방화벽이 \`firewalld\`, 기본 계정이 \`opc\`입니다. Ubuntu는 각각 \`apt\`, \`iptables\`, \`ubuntu\`입니다. 이 문서는 Oracle Linux 기준입니다.

### 7.4 Security

- 기본값(Shielded instance와 Confidential computing 모두 끔)을 그대로 둡니다.
- "현재 설정으로는 Confidential computing을 켤 수 없다"는 안내가 표시되어도 무시해도 됩니다.

### 7.5 Networking

1. **Primary network**
   - 기존 VCN이 있으면 **Select existing virtual cloud network**와 기존 퍼블릭 서브넷을 선택합니다.
   - 처음이라면 **Create new virtual cloud network**와 **Create new public subnet**을 선택합니다.
2. **Automatically assign public IPv4 address**를 켭니다. 꺼져 있으면 외부에서 접속할 수 없습니다.
3. IPv6는 사용하지 않으므로 끈 상태로 둡니다. "VCN이 IPv6를 지원하지 않는다"는 경고는 무시해도 됩니다.

### 7.6 Add SSH keys

1. **Generate a key pair for me**를 선택합니다.
2. **Download private key**를 눌러 개인키 파일(\`ssh-key-날짜.key\`)을 저장합니다.
3. **Download public key**도 함께 저장해 둡니다.

유의사항

- **개인키는 이 화면에서만 받을 수 있고 다시 보여주지 않습니다.** 받은 뒤에 다음 단계로 넘어가세요.
- 개인키를 분실하면 이 서버에 접속할 수 없습니다. 안전한 위치에 보관하고 타인에게 공유하지 않습니다.
- 서버를 새로 만들 때마다 새 키 쌍을 만들면 파일이 여러 개가 되어 혼동됩니다. 파일 이름에 날짜가 들어가므로 어떤 서버용인지 구분해서 보관하세요.

### 7.7 Storage

- **Boot volume**은 기본값(약 46.6GB)을 유지합니다. 커스텀 크기 옵션은 켜지 않습니다.
- **In-transit encryption**은 기본값(켜짐)을 유지합니다.
- 추가 **Block volume**은 붙이지 않습니다.

### 7.8 Review 및 생성

1. **View estimated cost**로 예상 비용을 확인합니다.
2. **Create**를 누릅니다.
3. 상태가 Provisioning에서 **Running**으로 바뀔 때까지 1~3분 기다립니다.
4. 상세 화면의 **Public IP address**와 **Username**(opc)을 메모합니다.

유의사항

- 예상 비용 화면에 부트 볼륨 비용(작업 환경에서는 월 $2.76)이 표시될 수 있습니다. 이 화면은 무료 한도를 반영하지 않는 정가 기준 추정치입니다. Compute 항목이 표시되지 않으면 A1 서버가 무료 대상이라는 뜻입니다.
- 실제 청구액은 생성 후 며칠 뒤 **Billing & Cost Management → Cost Analysis**에서 확인하세요.
- 이전에 만든 서버가 있다면 부트 볼륨이 남아 있는지 **Storage → Block Storage → Boot Volumes**에서 확인합니다. 한도 200GB를 넘기지 않아야 합니다.

### 7.9 생성이 실패하는 경우 (Out of capacity)

- 가용 도메인(AD)이 여러 개면 다른 AD로 바꿔 다시 시도합니다.
- 시간대를 바꿔 다시 시도합니다.
- 5장의 PAYG 전환 후 다시 시도합니다.

---

## 8. 네트워크 포트 개방

Tomcat 기본 포트 8080으로 외부에서 접속하려면 두 곳을 모두 열어야 합니다.

### 8.1 OCI 콘솔: Security List

1. 인스턴스 상세 화면에서 **Virtual cloud network**를 선택합니다.
2. **Subnets**에서 사용 중인 서브넷을 선택하고 **Security Lists**의 기본 목록(Default Security List)을 선택합니다.
3. **Add Ingress Rules**를 누르고 다음과 같이 입력합니다.

| 항목 | 값 |
|---|---|
| Source CIDR | 접속을 허용할 IP (전체 허용은 \`0.0.0.0/0\`) |
| IP Protocol | TCP |
| Destination Port Range | 8080 |

### 8.2 서버 내부: 방화벽

SSH로 접속한 뒤(9장) 실행합니다.

\`\`\`bash
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload
\`\`\`

### 8.3 유의사항

- 두 곳 중 하나라도 열려 있지 않으면 접속이 되지 않습니다.
- Source를 \`0.0.0.0/0\`으로 두면 인터넷 전체에 공개됩니다. 13장을 참고해 가능하면 허용 IP를 제한하세요.
- Ubuntu 이미지는 방화벽이 \`firewalld\`가 아니라 \`iptables\` 규칙으로 되어 있어 명령이 다릅니다.

---

## 9. SSH 접속

### 9.1 개인키 권한 설정 (Windows)

개인키 파일을 본인만 읽을 수 있도록 제한합니다. 권한이 넓으면 SSH가 키 사용을 거부할 수 있습니다.

키 파일이 있는 폴더에서 **명령 프롬프트(cmd)** 로 실행합니다.

\`\`\`bat
icacls ".\\ssh-key-날짜.key" /inheritance:r
icacls ".\\ssh-key-날짜.key" /grant:r "%USERNAME%:(R)"
\`\`\`

PowerShell에서는 두 번째 줄의 환경변수 표기가 다릅니다.

\`\`\`powershell
icacls .\\ssh-key-날짜.key /inheritance:r
icacls .\\ssh-key-날짜.key /grant:r "\${env:USERNAME}:(R)"
\`\`\`

유의사항

- \`%USERNAME%\`은 cmd 문법이고 \`$env:USERNAME\`은 PowerShell 문법입니다. 프롬프트가 \`C:\\...>\` 형태이면 cmd입니다. 섞어서 쓰면 "매개 변수가 잘못되었습니다" 오류가 납니다.
- 첫 번째 명령을 실행하면 모든 계정의 권한이 사라집니다. 두 번째 명령까지 반드시 실행해야 합니다.
- 결과 확인은 \`icacls ".\\ssh-key-날짜.key"\`로 합니다. 본인 계정만 \`(R)\`로 표시되면 정상입니다.
- Linux나 macOS는 \`chmod 600 키파일\`을 사용합니다.

### 9.2 접속

\`\`\`bash
ssh -i .\\ssh-key-날짜.key opc@<공인IP>
\`\`\`

- 처음 접속할 때 호스트 지문 확인 질문이 나오면 \`yes\`를 입력합니다.
- 여러 개의 키 파일이 있다면 **해당 서버를 만들 때 받은 키**를 지정해야 합니다. 다른 서버의 키로는 접속되지 않습니다.
- 계정은 \`opc\`입니다. \`root\`나 \`ubuntu\`가 아닙니다. (Ubuntu 이미지 선택 시에는 \`ubuntu\`)

### 9.3 접속 확인

\`\`\`bash
free -h
\`\`\`

- Mem 합계가 약 5.5Gi로 표시되면 정상입니다. 6GB 중 커널 예약분이 제외된 값입니다.
- Oracle Linux 이미지에는 4GB 스왑이 기본으로 잡혀 있습니다.

### 9.4 접속이 안 될 때

- 접속이 한참 멈추면 공인 IP 할당 여부와 Security List의 22번 포트 규칙(기본값으로 열려 있음)을 확인합니다.
- \`Permission denied (publickey)\`가 나오면 키 파일이나 사용자명이 잘못된 것입니다.
- SSH가 되지 않을 때는 콘솔의 **Console Connection**(직렬 콘솔)으로 접속해 볼 수 있습니다.

---

## 10. Java 및 Tomcat 설치

### 10.1 시스템 업데이트 및 Java 설치

\`\`\`bash
sudo dnf update -y
sudo dnf install -y java-17-openjdk-headless
java -version
\`\`\`

- \`openjdk version "17..."\`이 출력되면 정상입니다.
- 애플리케이션이 Java 8이나 11을 요구하면 맞는 버전(\`java-11-openjdk-headless\` 등)을 설치합니다.

### 10.2 Tomcat 버전 선택

| Tomcat 버전 | 서블릿 패키지 | 적합한 경우 |
|---|---|---|
| 9 | \`javax.servlet\` | Spring 5 이하, 오래된 WAR 애플리케이션 |
| 10.1 | \`jakarta.servlet\` | Spring 6, Spring Boot 3 이상 |

- 애플리케이션의 서블릿 패키지를 모르겠다면 **Tomcat 9**가 호환성 면에서 안전합니다.
- 버전을 잘못 고르면 애플리케이션이 기동되지 않습니다. 이 문서는 Tomcat 9 기준이며, 10.1로 설치하려면 스크립트의 \`TOMCAT_MAJOR=9\`를 \`10\`으로 바꿉니다.

### 10.3 Tomcat 다운로드 및 설치

최신 버전을 자동으로 조회하여 \`/opt/tomcat\`에 설치합니다.

\`\`\`bash
TOMCAT_MAJOR=9
BASE=https://dlcdn.apache.org/tomcat/tomcat-\${TOMCAT_MAJOR}
VER=$(curl -s \${BASE}/ | grep -o "v\${TOMCAT_MAJOR}\\.[0-9.]*" | sort -V | tail -1 | tr -d v)
echo "설치할 버전: $VER"

cd /tmp
curl -fLO \${BASE}/v\${VER}/bin/apache-tomcat-\${VER}.tar.gz
sudo mkdir -p /opt/tomcat
sudo tar -xzf apache-tomcat-\${VER}.tar.gz -C /opt/tomcat --strip-components=1
sudo useradd -r -s /sbin/nologin tomcat
sudo chown -R tomcat:tomcat /opt/tomcat
rm -f apache-tomcat-\${VER}.tar.gz
\`\`\`

유의사항

- \`설치할 버전\`이 비어 있으면 조회에 실패한 것입니다. [Apache Tomcat 다운로드 페이지](https://tomcat.apache.org/)에서 버전을 확인해 \`VER\` 값을 직접 지정합니다.
- \`dlcdn.apache.org\`에는 현재 배포 중인 최신 버전만 있습니다. 특정 구 버전이 필요하면 \`https://archive.apache.org/dist/tomcat/\`을 사용합니다.
- \`tomcat\` 계정은 로그인 셸이 없는 서비스 전용 계정입니다. 이 계정으로 SSH나 SFTP 접속은 할 수 없습니다.

### 10.4 서비스 등록

재부팅 후에도 자동으로 기동되도록 systemd 서비스로 등록합니다.

\`\`\`bash
sudo tee /etc/systemd/system/tomcat.service > /dev/null <<'EOF'
[Unit]
Description=Apache Tomcat
After=network.target

[Service]
Type=forking
User=tomcat
Group=tomcat
Environment=JAVA_HOME=/usr/lib/jvm/jre
Environment=CATALINA_HOME=/opt/tomcat
Environment=CATALINA_BASE=/opt/tomcat
Environment="CATALINA_OPTS=-Xms512m -Xmx2g"
ExecStart=/opt/tomcat/bin/startup.sh
ExecStop=/opt/tomcat/bin/shutdown.sh
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now tomcat
\`\`\`

유의사항

- \`-Xms512m -Xmx2g\`는 Tomcat이 사용할 힙 메모리의 시작값과 최댓값입니다. 서버 메모리 6GB 기준이며, 같은 서버에 DB를 함께 두면 이 정도가 적당합니다. 서버 사양에 맞게 조정합니다.
- 1GB 서버에서는 \`-Xmx\`를 400m 안팎으로 낮추고 스왑을 늘려야 하지만, 이 방식은 권장하지 않습니다. (14장 참고)

### 10.5 방화벽 개방

8.2의 \`firewall-cmd\` 명령을 아직 실행하지 않았다면 지금 실행합니다.

---

## 11. 설치 확인

### 11.1 서버 내부에서 확인

\`\`\`bash
sudo systemctl status tomcat --no-pager
curl -I http://localhost:8080
\`\`\`

- 상태가 \`active (running)\`이고 \`HTTP/1.1 200\`이 출력되면 Tomcat이 정상 기동된 것입니다.
- 기동에는 약 10~15초가 걸립니다. 직후에 실패하면 잠시 후 다시 실행합니다.

### 11.2 외부에서 확인

- 브라우저에서 \`http://<공인IP>:8080\`으로 접속합니다.
- Tomcat 기본 화면이 표시되면 설치가 완료된 것입니다.

### 11.3 접속이 안 될 때 점검 순서

1. 11.1의 \`curl\`이 성공하는지 확인합니다. 실패하면 Tomcat 문제입니다.
2. 서버 방화벽에 8080이 열려 있는지 확인합니다: \`sudo firewall-cmd --list-ports\`
3. OCI Security List의 Ingress Rule에 8080(TCP)이 있는지 확인합니다.
4. 인스턴스에 공인 IP가 할당되어 있는지 확인합니다.
5. Tomcat 로그를 확인합니다.

\`\`\`bash
sudo ls /opt/tomcat/logs
sudo tail -n 100 /opt/tomcat/logs/catalina.$(date +%Y-%m-%d).log
\`\`\`

---

## 12. 참고: 파일 업로드와 권한

애플리케이션을 \`/opt/tomcat/webapps\`에 올릴 때 필요한 내용입니다.

### 12.1 SFTP 업로드 (FileZilla 등)

| 항목 | 값 |
|---|---|
| 프로토콜 | SFTP |
| 호스트 | 공인 IP |
| 포트 | 22 |
| 사용자 | opc |
| 로그인 유형 | 키 파일 (7.6에서 받은 개인키) |

### 12.2 시행착오: webapps 폴더에서 Permission denied

- 증상: FileZilla로 \`/opt/tomcat/webapps\`에 들어가면 \`SSH_FX_PERMISSION_DENIED\`가 표시됩니다.
- 원인: Tomcat을 \`tomcat\` 계정 소유로 설치했고, 접속 계정 \`opc\`에는 해당 폴더 권한이 없습니다.
- 해결: \`opc\`를 \`tomcat\` 그룹에 추가하고 \`webapps\`에 그룹 쓰기 권한을 줍니다.

\`\`\`bash
sudo usermod -aG tomcat opc
sudo chmod 2775 /opt/tomcat/webapps
\`\`\`

- 그룹 변경은 **새로 접속할 때부터 적용**됩니다. SSH와 FileZilla를 끊었다가 다시 연결하세요.
- 이미 \`webapps\` 안에 있는 파일에도 그룹 쓰기가 필요하면 다음을 실행합니다.

\`\`\`bash
sudo find /opt/tomcat/webapps -mindepth 1 -type d -exec chmod g+rwx {} +
sudo find /opt/tomcat/webapps -mindepth 1 -type f -exec chmod g+rw {} +
\`\`\`

### 12.3 시행착오: lib, conf 등 다른 폴더

- \`lib\`, \`conf\`, \`logs\`는 \`tomcat\` 계정만 접근하도록 되어 있습니다. 설정 파일에 DB 비밀번호 등이 들어갈 수 있으므로 \`chmod 777\`처럼 모두에게 여는 방식은 쓰지 않습니다.
- 대신 홈 폴더(\`/home/opc\`)에 올린 뒤 \`sudo\`로 옮기고 소유자를 맞춥니다.

\`\`\`bash
sudo cp ~/파일.jar /opt/tomcat/lib/
sudo chown tomcat:tomcat /opt/tomcat/lib/파일.jar
sudo chmod 640 /opt/tomcat/lib/파일.jar
sudo systemctl restart tomcat
\`\`\`

- \`lib\` 폴더의 JAR은 Tomcat 기동 시 읽으므로 추가 후 재시작이 필요합니다.

### 12.4 시행착오: sudo cd

- \`sudo cd /opt/tomcat/lib\`는 동작하지 않습니다. \`cd\`는 셸 내장 명령이라 \`sudo\`로 실행할 수 없습니다.
- 한두 개 명령만 실행할 때는 \`sudo ls /opt/tomcat/lib\`처럼 명령 앞에 \`sudo\`를 붙입니다.
- 여러 명령을 이어서 실행할 때는 \`sudo -i\`(root 셸) 또는 \`sudo -u tomcat bash\`(tomcat 권한 셸)를 사용합니다. 종료는 \`exit\`입니다.
- \`su - tomcat\`은 \`tomcat\` 계정에 로그인 셸이 없어 동작하지 않습니다.

### 12.5 시행착오: tomcat 계정으로 FileZilla 접속

- \`tomcat\` 계정으로 재접속하면 해결되지 않을까 생각할 수 있지만, 이 계정은 로그인이 막혀 있어 불가능합니다.
- 항상 \`opc\`로 접속하고, 12.2~12.3의 권한 설정이나 \`sudo\`를 사용합니다.

### 12.6 WAR 및 폴더 형태 애플리케이션 배포

- WAR 파일은 \`/opt/tomcat/webapps/\`에 올리면 자동으로 배포됩니다.
- 압축을 푼 폴더 형태의 애플리케이션은 \`webapps\` 아래에 폴더째 두면 됩니다.
- 큰 파일을 올릴 때는 완전히 전송되기 전에 Tomcat이 배포를 시작하지 않도록, Tomcat을 멈추고 올린 뒤 시작하는 편이 안전합니다.

\`\`\`bash
sudo systemctl stop tomcat
# 파일 배치 및 권한 설정
sudo chown -R tomcat:tomcat /opt/tomcat/webapps/<앱이름>
sudo systemctl start tomcat
\`\`\`

---

## 13. 보안 및 비용 점검

### 13.1 보안

- 8080을 \`0.0.0.0/0\`으로 열어 두면 외부 스캐너의 접근이 곧 시작됩니다. 작업 환경에서도 Tomcat 로그에 \`Invalid character found in method name ...\` 형태의 비정상 요청이 기록되었습니다. Tomcat이 거부하므로 서비스에는 영향이 없었지만, 불필요하게 공개된 상태입니다.
- OCI Security List의 8080 Source를 사용하는 PC나 회사의 공인 IP로 제한하는 것을 권장합니다.
- Tomcat의 기본 애플리케이션(\`docs\`, \`examples\`, \`manager\`, \`host-manager\`)이 필요 없다면 \`/opt/tomcat/webapps\`에서 삭제합니다.
- 운영 환경이라면 Nginx 등을 앞에 두고 80/443과 HTTPS를 적용합니다.
- 개인키 파일은 공유하지 않고, 사용하지 않는 서버의 키는 폐기합니다.

### 13.2 비용

- 한 달 뒤 **Cost Analysis**에서 청구액이 0인지 확인합니다.
- Budget 알림 메일이 오면 즉시 어떤 리소스가 한도를 넘겼는지 확인합니다.
- 서버를 삭제(Terminate)할 때는 **부트 볼륨도 함께 삭제**하는 옵션을 선택합니다. 남은 부트 볼륨이 무료 스토리지 한도를 차지합니다.

---

## 14. 시행착오 모음

| 번호 | 증상 | 원인 | 해결 및 예방 |
|---|---|---|---|
| 1 | 무료 서버를 만들다 보니 홈 리전이 의도하지 않은 곳(Tokyo)으로 지정됨 | Home Region은 변경할 수 없음 | 가입 시 리전을 신중히 선택. 이미 정해졌다면 그대로 사용(한국→도쿄 지연은 일반적으로 30~40ms) |
| 2 | 1GB 서버(Oracle Micro)에서 웹 애플리케이션이 정상 기동되지 않음 | 메모리 부족 | 1GB 서버는 Tomcat과 DB를 함께 올리기 어려움. A1(6GB)로 구성 |
| 3 | 스왑을 추가했으나 하루 뒤 재부팅해도 SSH 접속이 무한 로딩 | 확정하지 못했으나, 메모리 부족과 스왑으로 인한 디스크 I/O 포화로 SSH 데몬이 응답하지 못하는 상태로 추정 | 1GB 서버에서 스왑으로 버티지 말고 A1로 교체. 증상이 있으면 콘솔의 Console Connection으로 접속 시도 |
| 4 | AWS 프리티어 종료 후 비용 부담 | 유료 전환 | Oracle Always Free(A1)를 한도 안에서 사용 |
| 5 | Naver Cloud 무료 서버로 해결하려 했으나 같은 1GB | Micro 서버는 1년 무료, 1GB, 1 vCore | 2GB는 월 26,000원(HDD)으로 Oracle A1보다 비쌈 |
| 6 | 결제 업그레이드 페이지가 회색 막대만 표시되고 로딩 안 됨 | 한국어 번역 파일(\`ko.json\`) 요청이 404 | 주소 끝에 \`&lang=en\`을 붙여 영어 화면으로 접속 |
| 7 | 요금 계산기(Cost Estimator) 화면을 업그레이드 화면으로 착각 | 계산기는 예상 비용만 보여 줌 | 전환은 Billing & Cost Management → Upgrade and Manage Payment에서 진행 |
| 8 | 업그레이드가 "in progress"에서 오래 머묾 | 카드 인증과 계정 검증 소요 | 약 2시간 소요됨. 24시간까지 대기하고 그 이상이면 Contact Support |
| 9 | 휴대폰 인증 번호 입력 오류 | \`+82\` 입력 시 맨 앞 \`0\`을 빼야 함 | \`010-1234-5678\`은 \`10 1234 5678\`로 입력 |
| 10 | 인스턴스 생성 화면의 예상 비용에 부트 볼륨 요금($2.76/월)이 표시됨 | 예상 비용 화면은 무료 한도를 반영하지 않음 | 생성 후 Cost Analysis에서 실제 청구액 확인. 한도(200GB) 안이면 무료 |
| 11 | 이전 서버를 삭제했지만 부트 볼륨이 남을 수 있음 | 삭제 시 부트 볼륨 삭제 옵션 미선택 | Boot Volumes 목록을 확인해 불필요한 볼륨 삭제 |
| 12 | \`icacls\` 두 번째 명령에서 "매개 변수가 잘못되었습니다" | cmd에서 PowerShell 문법(\`$env:USERNAME\`) 사용 | cmd는 \`%USERNAME%\`, PowerShell은 \`\${env:USERNAME}\` |
| 13 | FileZilla에서 \`webapps\` 접근 시 Permission denied | 폴더가 \`tomcat\` 소유이고 \`opc\` 권한 없음 | \`opc\`를 \`tomcat\` 그룹에 추가하고 \`webapps\`에 그룹 쓰기 권한 부여. 재접속 필요 |
| 14 | \`cd /opt/tomcat/lib\`가 Permission denied | \`lib\`는 \`tomcat\` 계정만 접근 가능 | \`sudo ls\`, \`sudo -i\`, \`sudo -u tomcat bash\` 사용. \`sudo cd\`는 불가 |
| 15 | \`tomcat\` 계정으로 FileZilla 접속을 시도 | \`tomcat\` 계정은 로그인 셸이 없음 | \`opc\`로 접속하고 권한 설정 또는 \`sudo\` 사용 |
| 16 | Tomcat 로그에 \`Invalid character found in method name ...\` 반복 | 8080이 인터넷에 공개되어 외부 스캐너가 접근 | Security List의 Source를 허용 IP로 제한 |

---

## 부록. 전체 작업 요약

1. 신용카드와 휴대폰을 준비하고 Oracle Cloud 계정을 만듭니다. (홈 리전 신중히 선택)
2. Pay As You Go로 전환합니다. (필요 시 \`&lang=en\` 사용)
3. Budget 알림을 설정합니다.
4. A1.Flex 인스턴스를 만들고 SSH 개인키를 보관합니다. (Always Free-eligible 배지 확인)
5. Security List와 서버 방화벽에서 8080 포트를 엽니다.
6. 개인키 권한을 설정하고 SSH로 접속합니다.
7. Java 17과 Tomcat 9를 설치하고 systemd 서비스로 등록합니다.
8. \`http://<공인IP>:8080\`에서 Tomcat 기본 화면을 확인합니다.
9. 필요 시 8080 접근 IP를 제한하고, 한 달 뒤 청구액을 확인합니다.

`,Zm=`---
title: exe 프로그램 디버깅 방법: Process Monitor를 이용한 폰트 대체 현상 분석
date: 2026-10-06
---
# exe 프로그램 디버깅 방법: Process Monitor를 이용한 폰트 대체 현상 분석

## 0. 문서 개요

### 0.1 목적
소스 코드나 디버깅 심볼 없이, DLL을 사용하는 exe(ActiveX 뷰어 호스트 프로세스 포함)의 동작을 외부에서 관찰하여 원인을 찾는 방법을 정리한다. 실제 사례로 "PDF 저장 시 특정 폰트가 바탕체로 바뀌는 현상"을 분석한 과정을 기록한다.

### 0.2 사용 도구
| 도구 | 용도 |
|---|---|
| Process Monitor (Sysinternals) | 프로세스의 파일, 레지스트리 접근 기록 |
| Acrobat Reader | PDF에 포함된 폰트 확인 |
| Windows 설정 > 개인 설정 > 글꼴 | 폰트 설치 위치 확인 |
| Python 3 (선택) | 저장한 CSV 로그 요약 |

### 0.3 사례 요약
- 증상: 뷰어 화면에서는 폰트가 정상인데 PDF로 저장하면 바탕체로 바뀜
- 원인: PDF 저장 로직이 HKLM의 폰트 목록만 읽고 HKCU(개인용 설치 폰트)는 읽지 않음
- 임시 대응: 폰트를 "모든 사용자용으로 설치"

---

## 1. 분석 절차

### 1.1 증상 정리 및 재현 조건 확인
1. 같은 문서를 뷰어에서 열었을 때와 PDF로 저장했을 때를 비교한다.
2. 폰트별로 재현 여부를 확인한다. 이 사례에서는 모든 폰트가 아니라 특정 폰트(우리다움, 마루 부리 계열)만 재현되었다.
3. 재현되는 폰트와 되지 않는 폰트의 차이를 찾는다. 이 사례에서는 설치 방식이 달랐다.

### 1.2 결과물 확인
1. 저장된 PDF를 Acrobat으로 연다.
2. 파일 > 속성 > 글꼴 탭에서 사용된 글꼴 목록을 확인한다.
3. 의도한 폰트가 없고 대체 폰트(BatangChe 등)만 있으면 PDF 생성 단계에서 폰트가 대체된 것이다.

### 1.3 폰트 파일 속성 확인
폰트 자체의 문제인지 확인하기 위해 이름과 임베딩 권한을 본다.

\`\`\`powershell
Add-Type -AssemblyName PresentationCore
$f = New-Object System.Windows.Media.GlyphTypeface([Uri]'C:\\경로\\폰트파일.ttf')
$f.FamilyNames
$f.Win32FamilyNames
$f.EmbeddingRights
\`\`\`

이 사례에서 임베딩 권한은 PreviewAndPrint였으나, 최종 원인은 아니었다(5장 참조).

### 1.4 폰트 설치 위치 확인
1. 설정 > 개인 설정 > 글꼴 에서 해당 폰트를 선택한다.
2. 하단의 "글꼴 파일" 경로를 확인한다.

| 설치 방식 | 파일 경로 | 레지스트리 |
|---|---|---|
| 개인용 | \`C:\\Users\\<사용자>\\AppData\\Local\\Microsoft\\Windows\\Fonts\` | HKCU |
| 모든 사용자용 | \`C:\\Windows\\Fonts\` | HKLM |

Windows 10 1809 이상에서 ttf 파일을 더블클릭하거나 우클릭 > 설치 를 하면 개인용으로 설치된다. "모든 사용자용으로 설치"는 별도 메뉴이며 관리자 권한이 필요하다.

---

## 2. Process Monitor 준비

### 2.1 실행
1. Sysinternals 사이트에서 Process Monitor를 내려받아 압축을 푼다.
2. \`Procmon64.exe\`를 관리자 권한으로 실행한다.
3. 분석 대상이 32비트 exe여도 64비트 Windows에서는 \`Procmon64.exe\`를 사용한다. 32비트 프로세스의 이벤트도 모두 수집된다.
4. 실행 직후 캡처가 시작되므로 \`Ctrl+E\`로 캡처를 끄고 \`Ctrl+X\`로 화면을 지운다.

### 2.2 대상 프로세스 이름 확인
필터에 넣을 프로세스 이름은 작업 관리자에 표시되는 이름이 아니라 실제 exe 파일명이어야 한다.

1. 작업 관리자에서 해당 프로세스를 우클릭하고 "파일 위치 열기"를 선택한다.
2. 또는 "자세히" 탭의 "이미지 이름" 열을 확인한다.

이 사례에서는 실행한 exe(\`ClientAgent_u.exe\`)와 실제 보고서를 처리하는 프로세스(\`ReportingExecutor.exe\`)가 달랐다.

### 2.3 필터 설정
\`Ctrl+L\`로 필터 창을 연다. 항목 선택, 관계 선택, 값 입력 후 Add를 누른다.

권장 시작 필터는 다음과 같다.

| Column | Relation | Value | Action |
|---|---|---|---|
| Process Name | is | (2.2에서 확인한 exe명) | Include |
| Path | contains | Fonts | Include |

필터 동작 규칙은 다음과 같다.
- 서로 다른 Column의 Include 조건은 AND로 결합된다.
- 같은 Column의 Include 조건은 OR로 결합된다.

레지스트리 조회를 볼 때는 Path 조건을 \`CurrentVersion\\Fonts\`로 바꾸어 별도로 캡처한다.

---

## 3. 로그 수집

### 3.1 캡처 순서
1. \`Ctrl+X\`로 화면을 지운다.
2. \`Ctrl+E\`로 캡처를 켠다. 돋보기 아이콘에 빨간 X가 없어야 켜진 상태이다.
3. 재현 동작(PDF 저장)을 수행한다.
4. 동작이 끝나면 즉시 \`Ctrl+E\`로 캡처를 끈다.
5. File > Save 에서 CSV 형식으로 저장한다.

### 3.2 수집 시나리오
원인 구분을 위해 다음 로그를 각각 따로 수집한다.

| 번호 | 시나리오 | 필터 Path 조건 |
|---|---|---|
| 1 | 문서를 열기만 한 경우(뷰잉) | Fonts |
| 2 | PDF 저장 | Fonts |
| 3 | PDF 저장(레지스트리) | CurrentVersion\\Fonts |
| 4 | 문서를 열기만 한 경우(레지스트리) | CurrentVersion\\Fonts |

뷰잉 로그를 찍을 때는 뷰어를 완전히 종료한 뒤 새로 열어야 한다. 이미 열려 있는 뷰어는 폰트가 캐시되어 접근 기록이 남지 않을 수 있다.

---

## 4. 로그 분석

### 4.1 분석 관점
1. 어떤 프로세스가 어떤 폰트 파일을 열었는가(\`CreateFile\`, \`ReadFile\`)
2. 파일을 열지 않은 폰트는 무엇인가
3. 레지스트리의 어느 키를 읽었는가(\`RegOpenKey\`, \`RegEnumValue\`, \`RegQueryValue\`)
4. \`NAME NOT FOUND\`, \`ACCESS DENIED\` 같은 실패 결과가 있는가

### 4.2 CSV 요약 스크립트
CSV는 UTF-8(BOM) 형식이며 한글이 포함되므로 인코딩을 지정해야 한다. 같은 동작이 반복 기록되므로 연속된 동일 행을 묶어서 본다.

\`\`\`python
import csv, sys
sys.stdout.reconfigure(encoding='utf-8')
rows = list(csv.DictReader(open(r'C:\\경로\\Logfile.CSV', encoding='utf-8-sig')))
prev = None; n = 0; first = None; out = []
for x in rows:
    k = (x['Operation'], x['Path'], x['Result'])
    if k == prev:
        n += 1
    else:
        if prev: out.append((first, prev, n))
        prev, n, first = k, 1, x['Time of Day']
out.append((first, prev, n))
for t, k, n in out:
    print(t.split()[-1], n, *k)
\`\`\`

특정 문자열(폰트명) 포함 여부는 \`grep -ci "문자열" Logfile.CSV\` 또는 Python의 \`in\` 연산으로 확인한다.

### 4.3 이 사례의 분석 결과
| 로그 | 확인된 내용 |
|---|---|
| PDF 저장(파일) | \`C:\\Windows\\Fonts\` 아래 파일만 열림. 개인용으로 설치한 폰트 파일은 접근 기록 없음 |
| PDF 저장(레지스트리) | \`HKLM\\...\\CurrentVersion\\Fonts\` 키의 값 806개를 \`RegEnumValue\`로 열거. 개인용 폰트는 목록에 없음. \`HKCU\` 접근 0건 |
| 뷰잉(파일) | \`AppData\\Local\\Microsoft\\Windows\\Fonts\` 아래 파일 58개를 열었음. 문제 폰트 포함 |
| 뷰잉(레지스트리) | 폰트 목록 열거 없음. \`FontSubstitutes\` 키만 조회 |

### 4.4 결론
- 뷰잉 시에는 개인용 폰트 폴더의 파일도 읽으므로 화면이 정상이다.
- PDF 저장 로직은 \`HKLM\`의 폰트 목록만 사용하므로 개인용으로 설치된 폰트를 찾지 못하고 대체 폰트로 처리한다.
- 사용자 환경 설정 오류가 아니라 제품의 동작 한계이다.

---

## 5. 시행착오 기록

### 5.1 프로세스 이름을 잘못 지정함
- 상황: 실행한 exe 이름(\`ClientAgent_u.exe\`)으로 필터를 걸었더니 로그가 하나도 나오지 않았다.
- 원인: 실제 처리는 별도 프로세스(\`ReportingExecutor.exe\`)에서 수행되었다.
- 대처: 필터를 Path 조건(\`Fonts\`)만 남기고 캡처하여 \`Process Name\` 열에서 실제 프로세스를 찾았다. 이후 작업 관리자의 "파일 위치 열기"로 확인했다.
- 교훈: 실행한 exe와 실제 작업 프로세스는 다를 수 있다. 처음에는 프로세스 조건 없이 Path 조건만으로 캡처한다.

### 5.2 로그가 비어 있을 때 점검할 것
1. 캡처가 켜져 있는지(돋보기 아이콘)
2. 하단 상태줄 \`Showing X of Y events\`에서 Y가 0인지(캡처 문제) X만 0인지(필터 문제)
3. Exclude 조건이 과도하지 않은지(\`Path contains .dll\` 같은 넓은 조건)

### 5.3 폰트 임베딩 권한을 원인으로 의심함
- 폰트의 임베딩 권한이 PreviewAndPrint여서 PDF에 포함되지 않는다고 가정했다.
- 그러나 같은 폰트를 모든 사용자용으로 설치하면 정상이었으므로 원인이 아니었다.
- 교훈: 가설은 같은 조건에서 변수를 하나만 바꾸는 비교로 검증한다. 이 사례에서는 "설치 방식"만 바꾼 비교가 결정적이었다.

### 5.4 설치 위치를 레지스트리 조회만으로 판단함
- 레지스트리 조회 출력이 잘려 값을 확인하지 못했는데도 모든 사용자용으로 설치된 것으로 판단했다.
- 실제로는 개인용(AppData)이었다.
- 교훈: 폰트 설치 위치는 설정 > 개인 설정 > 글꼴 의 "글꼴 파일" 경로로 직접 확인한다.

### 5.5 관리자 권한으로 재실행하면 해결될 것으로 기대함
- 관리자 권한으로 exe를 다시 실행해도 증상은 같았다.
- 같은 사용자 계정에서 권한만 올리는 것은 개인용 폰트 폴더나 HKCU 접근 여부를 바꾸지 않는다.
- 교훈: 이 증상에서는 권한 상승이 해결책이 아니다.

### 5.6 정상 로그와 문제 로그를 혼동함
- 파일명이 \`Logfile.CSV\`로 같아 어떤 상태에서 찍은 로그인지 헷갈렸다. 한 문서에 정상 폰트와 문제 폰트가 함께 있어 해석도 어긋났다.
- 교훈: 로그 파일명에 상태를 적는다(예: \`pdf저장_개인용폰트.CSV\`, \`뷰잉_개인용폰트.CSV\`). 가능하면 문서에 문제 폰트만 넣고 캡처한다.

### 5.7 파일 필터만으로는 레지스트리 접근을 볼 수 없음
- \`Path contains Fonts\` 필터로 찍은 로그에는 레지스트리 조회가 일부만 보이거나 보이지 않는다.
- 레지스트리는 \`CurrentVersion\\Fonts\` 조건으로 별도 캡처해야 폰트 목록 열거 여부를 확인할 수 있다.

### 5.8 이미 열려 있는 뷰어에서 뷰잉 로그를 찍음
- 뷰잉 로그를 찍을 때 폰트 파일 접근이 보이지 않을 수 있다.
- 뷰어를 완전히 종료한 후 문서를 새로 열면서 캡처한다.

---

## 6. 임시 대응 및 개선 요청

### 6.1 임시 대응
1. 보고서에 사용되는 폰트를 모든 사용자용으로 설치한다.
   - ttf 파일 우클릭 > "모든 사용자용으로 설치" (관리자 권한 필요)
   - 이미 개인용으로 설치된 폰트가 있으면 먼저 설정 > 개인 설정 > 글꼴 에서 제거한다.
2. 사용자 수가 많으면 그룹 정책, SCCM, Intune 등 배포 도구로 \`C:\\Windows\\Fonts\`에 일괄 배포한다.
3. 폰트 배포 전에 폰트 라이선스의 배포 조건을 확인한다.

### 6.2 개발사 전달 항목
- 증상: 뷰잉은 정상이나 PDF 저장 시 개인용 설치 폰트가 대체됨
- 원인: PDF 저장 시 폰트 목록을 \`HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Fonts\`에서만 열거하고 \`HKCU\` 키는 읽지 않음
- 근거: Procmon 로그 (HKLM 값 열거, HKCU 접근 0건, 뷰잉 시 AppData 폰트 접근)
- 요청: \`HKCU\\...\\CurrentVersion\\Fonts\`도 열거 대상에 추가. HKCU 값의 데이터는 전체 경로로 저장되므로 파일명만 가정한 경로 조합 로직 수정 필요. 또는 GDI(\`GetFontData\`)로 폰트 데이터를 읽도록 변경

---

## 7. 요약 체크리스트
1. 뷰잉과 결과물(PDF)의 차이를 확인한다.
2. 결과물에서 실제 사용된 폰트를 확인한다.
3. 폰트 설치 위치(개인용 또는 모든 사용자용)를 확인한다.
4. 작업 프로세스의 실제 exe명을 확인한다.
5. Procmon 필터를 \`Process Name\` + \`Path contains Fonts\`로 설정한다.
6. 시나리오별(뷰잉, 저장, 파일, 레지스트리)로 로그를 따로 저장한다.
7. CSV를 요약하여 열린 파일, 읽은 레지스트리 키, 실패 결과를 비교한다.
8. 가설은 변수 하나만 바꾼 비교로 검증한다.

`;function $d(e){const t=e.replace(/\r\n/g,`
`).match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);if(!t)throw new Error("Missing frontmatter block");const[,r,l]=t,i={};for(const o of r.split(`
`)){const s=o.indexOf(":");if(s===-1)continue;const a=o.slice(0,s).trim(),u=o.slice(s+1).trim();i[a]=u}if(!i.title||!i.date)throw new Error("Frontmatter must include title and date");return{frontmatter:{title:i.title,date:i.date},body:l.trim()}}function qm(e,n){return`---
title: ${e.title}
date: ${e.date}
---
${n}
`}function eg(e,n,t=80){const r=Fd(e,n).replace(/```[\s\S]*?```/g," ").replace(/^\s{0,3}#{1,6}\s+/gm,"").replace(/^\s*(?:[-*+]|\d+\.)\s+/gm,"").replace(/^\s*>\s?/gm,"").replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm," ").replace(/!\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/\*\*|__|~~|`/g,"").replace(/\*(\S[^*]*?)\*/g,"$1").replace(/\|/g," ").replace(/\s+/g," ").trim();return r.length>t?`${r.slice(0,t)}...`:r}function Fd(e,n){const t=e.split(`
`),r=t.findIndex(i=>i.trim()!=="");if(r===-1||t[r].trimEnd()!==`# ${n}`)return e;let l=r+1;for(;l<t.length&&t[l].trim()==="";)l+=1;return t.slice(l).join(`
`)}const ng=80,tg=Object.assign({"/src/content/posts/2026-10-06-18d8nk.md":Km,"/src/content/posts/2026-10-06-dd7f50.md":Jm,"/src/content/posts/2026-10-06-hicvn4.md":Ym,"/src/content/posts/2026-10-06-lj520p.md":Xm,"/src/content/posts/2026-10-06-orbtn7.md":Zm});function rg(e){const n=e.match(/([^/]+)\.md$/);if(!n)throw new Error(`Unexpected post file path: ${e}`);return n[1]}const ei=Object.entries(tg).map(([e,n])=>{const{frontmatter:t,body:r}=$d(n);return{slug:rg(e),title:t.title,date:t.date,excerpt:eg(r,t.title,ng),body:r}}).sort((e,n)=>e.date<n.date?1:e.date>n.date?-1:0);function lg(e){const n=Math.random().toString(36).slice(2,8);return`${e}-${n}`}function ig({post:e}){return g.jsx(pe,{to:`/blog/${e.slug}`,className:"block",children:g.jsxs("article",{className:"card",children:[g.jsx("h3",{className:"card-title",children:e.title}),g.jsx("p",{className:"mt-1 text-sm text-muted",children:e.date}),g.jsx("p",{className:"mt-2 text-foreground/80",children:e.excerpt})]})})}function og(){return g.jsxs("section",{children:[g.jsx("h2",{className:"text-xl font-semibold",children:"최신 글"}),g.jsx("div",{className:"mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:ei.slice(0,3).map(e=>g.jsx(ig,{post:e},e.slug))})]})}const sg="https://github.com/ShinHeeYoun/ShinHeeYoun.github.io";function ag(){return g.jsxs("section",{children:[g.jsx("h2",{className:"text-xl font-semibold",children:"Source"}),g.jsxs("p",{className:"mt-3 font-mono text-sm",children:[g.jsx("span",{className:"text-muted",children:"$ open "}),g.jsx("a",{href:sg,target:"_blank",rel:"noopener noreferrer",className:"text-accent underline-offset-4 hover:underline",children:"github.com/ShinHeeYoun/ShinHeeYoun.github.io"})]})]})}function ug(){return g.jsxs("main",{className:"w-full px-6 py-8 md:px-12",children:[g.jsx(Gm,{}),g.jsxs("div",{className:"mt-12 space-y-14",children:[g.jsx(Qm,{}),g.jsx(og,{}),g.jsx(ag,{})]})]})}function cg(){return g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("h1",{className:"text-2xl font-bold",children:"Blog"}),g.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:ei.map(e=>g.jsx(pe,{to:`/blog/${e.slug}`,className:"block",children:g.jsxs("article",{className:"card",children:[g.jsx("h2",{className:"card-title",children:e.title}),g.jsx("p",{className:"mt-1 text-sm text-muted",children:e.date}),g.jsx("p",{className:"mt-2 text-foreground/80",children:e.excerpt})]})},e.slug))})]})}function js(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Jn=js();function Ud(e){Jn=e}const Bd=/[&<>"']/,dg=new RegExp(Bd.source,"g"),Hd=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,fg=new RegExp(Hd.source,"g"),pg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ru=e=>pg[e];function Se(e,n){if(n){if(Bd.test(e))return e.replace(dg,ru)}else if(Hd.test(e))return e.replace(fg,ru);return e}const hg=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function mg(e){return e.replace(hg,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const gg=/(^|[^\[])\^/g;function D(e,n){let t=typeof e=="string"?e:e.source;n=n||"";const r={replace:(l,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(gg,"$1"),t=t.replace(l,o),r},getRegex:()=>new RegExp(t,n)};return r}function lu(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Zt={exec:()=>null};function iu(e,n){const t=e.replace(/\|/g,(i,o,s)=>{let a=!1,u=o;for(;--u>=0&&s[u]==="\\";)a=!a;return a?"|":" |"}),r=t.split(/ \|/);let l=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;l<r.length;l++)r[l]=r[l].trim().replace(/\\\|/g,"|");return r}function Dt(e,n,t){const r=e.length;if(r===0)return"";let l=0;for(;l<r&&e.charAt(r-l-1)===n;)l++;return e.slice(0,r-l)}function vg(e,n){if(e.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===n[0])t++;else if(e[r]===n[1]&&(t--,t<0))return r;return-1}function ou(e,n,t,r){const l=n.href,i=n.title?Se(n.title):null,o=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){r.state.inLink=!0;const s={type:"link",raw:t,href:l,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,s}return{type:"image",raw:t,href:l,title:i,text:Se(o)}}function yg(e,n){const t=e.match(/^(\s+)(?:```)/);if(t===null)return n;const r=t[1];return n.split(`
`).map(l=>{const i=l.match(/^\s+/);if(i===null)return l;const[o]=i;return o.length>=r.length?l.slice(r.length):l}).join(`
`)}class Ll{constructor(n){F(this,"options");F(this,"rules");F(this,"lexer");this.options=n||Jn}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Dt(r,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const r=t[0],l=yg(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:l}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let r=t[2].trim();if(/#$/.test(r)){const l=Dt(r,"#");(this.options.pedantic||!l||/ $/.test(l))&&(r=l.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:Dt(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let r=Dt(t[0],`
`).split(`
`),l="",i="";const o=[];for(;r.length>0;){let s=!1;const a=[];let u;for(u=0;u<r.length;u++)if(/^ {0,3}>/.test(r[u]))a.push(r[u]),s=!0;else if(!s)a.push(r[u]);else break;r=r.slice(u);const d=a.join(`
`),f=d.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");l=l?`${l}
${d}`:d,i=i?`${i}
${f}`:f;const m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,o,!0),this.lexer.state.top=m,r.length===0)break;const y=o[o.length-1];if((y==null?void 0:y.type)==="code")break;if((y==null?void 0:y.type)==="blockquote"){const v=y,w=v.raw+`
`+r.join(`
`),C=this.blockquote(w);o[o.length-1]=C,l=l.substring(0,l.length-v.raw.length)+C.raw,i=i.substring(0,i.length-v.text.length)+C.text;break}else if((y==null?void 0:y.type)==="list"){const v=y,w=v.raw+`
`+r.join(`
`),C=this.list(w);o[o.length-1]=C,l=l.substring(0,l.length-y.raw.length)+C.raw,i=i.substring(0,i.length-v.raw.length)+C.raw,r=w.substring(o[o.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:l,tokens:o,text:i}}}list(n){let t=this.rules.block.list.exec(n);if(t){let r=t[1].trim();const l=r.length>1,i={type:"list",raw:"",ordered:l,start:l?+r.slice(0,-1):"",loose:!1,items:[]};r=l?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=l?r:"[*+-]");const o=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let s=!1;for(;n;){let a=!1,u="",d="";if(!(t=o.exec(n))||this.rules.block.hr.test(n))break;u=t[0],n=n.substring(u.length);let f=t[2].split(`
`,1)[0].replace(/^\t+/,p=>" ".repeat(3*p.length)),m=n.split(`
`,1)[0],y=!f.trim(),v=0;if(this.options.pedantic?(v=2,d=f.trimStart()):y?v=t[1].length+1:(v=t[2].search(/[^ ]/),v=v>4?1:v,d=f.slice(v),v+=t[1].length),y&&/^ *$/.test(m)&&(u+=m+`
`,n=n.substring(m.length+1),a=!0),!a){const p=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),c=new RegExp(`^ {0,${Math.min(3,v-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),h=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:\`\`\`|~~~)`),x=new RegExp(`^ {0,${Math.min(3,v-1)}}#`);for(;n;){const P=n.split(`
`,1)[0];if(m=P,this.options.pedantic&&(m=m.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),h.test(m)||x.test(m)||p.test(m)||c.test(n))break;if(m.search(/[^ ]/)>=v||!m.trim())d+=`
`+m.slice(v);else{if(y||f.search(/[^ ]/)>=4||h.test(f)||x.test(f)||c.test(f))break;d+=`
`+m}!y&&!m.trim()&&(y=!0),u+=P+`
`,n=n.substring(P.length+1),f=m.slice(v)}}i.loose||(s?i.loose=!0:/\n *\n *$/.test(u)&&(s=!0));let w=null,C;this.options.gfm&&(w=/^\[[ xX]\] /.exec(d),w&&(C=w[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:u,task:!!w,checked:C,loose:!1,text:d,tokens:[]}),i.raw+=u}i.items[i.items.length-1].raw=i.items[i.items.length-1].raw.trimEnd(),i.items[i.items.length-1].text=i.items[i.items.length-1].text.trimEnd(),i.raw=i.raw.trimEnd();for(let a=0;a<i.items.length;a++)if(this.lexer.state.top=!1,i.items[a].tokens=this.lexer.blockTokens(i.items[a].text,[]),!i.loose){const u=i.items[a].tokens.filter(f=>f.type==="space"),d=u.length>0&&u.some(f=>/\n.*\n/.test(f.raw));i.loose=d}if(i.loose)for(let a=0;a<i.items.length;a++)i.items[a].loose=!0;return i}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),l=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:l,title:i}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const r=iu(t[1]),l=t[2].replace(/^\||\| *$/g,"").split("|"),i=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===l.length){for(const s of l)/^ *-+: *$/.test(s)?o.align.push("right"):/^ *:-+: *$/.test(s)?o.align.push("center"):/^ *:-+ *$/.test(s)?o.align.push("left"):o.align.push(null);for(let s=0;s<r.length;s++)o.header.push({text:r[s],tokens:this.lexer.inline(r[s]),header:!0,align:o.align[s]});for(const s of i)o.rows.push(iu(s,o.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:o.align[u]})));return o}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Se(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=Dt(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=vg(t[2],"()");if(o>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let l=t[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);o&&(l=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(this.options.pedantic&&!/>$/.test(r)?l=l.slice(1):l=l.slice(1,-1)),ou(t,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let r;if((r=this.rules.inline.reflink.exec(n))||(r=this.rules.inline.nolink.exec(n))){const l=(r[2]||r[1]).replace(/\s+/g," "),i=t[l.toLowerCase()];if(!i){const o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return ou(r,i,r[0],this.lexer)}}emStrong(n,t,r=""){let l=this.rules.inline.emStrongLDelim.exec(n);if(!l||l[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(l[1]||l[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const o=[...l[0]].length-1;let s,a,u=o,d=0;const f=l[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*n.length+o);(l=f.exec(t))!=null;){if(s=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!s)continue;if(a=[...s].length,l[3]||l[4]){u+=a;continue}else if((l[5]||l[6])&&o%3&&!((o+a)%3)){d+=a;continue}if(u-=a,u>0)continue;a=Math.min(a,a+u+d);const m=[...l[0]][0].length,y=n.slice(0,o+l.index+m+a);if(Math.min(o,a)%2){const w=y.slice(1,-1);return{type:"em",raw:y,text:w,tokens:this.lexer.inlineTokens(w)}}const v=y.slice(2,-2);return{type:"strong",raw:y,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let r=t[2].replace(/\n/g," ");const l=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return l&&i&&(r=r.substring(1,r.length-1)),r=Se(r,!0),{type:"codespan",raw:t[0],text:r}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let r,l;return t[2]==="@"?(r=Se(t[1]),l="mailto:"+r):(r=Se(t[1]),l=r),{type:"link",raw:t[0],text:r,href:l,tokens:[{type:"text",raw:r,text:r}]}}}url(n){var r;let t;if(t=this.rules.inline.url.exec(n)){let l,i;if(t[2]==="@")l=Se(t[0]),i="mailto:"+l;else{let o;do o=t[0],t[0]=((r=this.rules.inline._backpedal.exec(t[0]))==null?void 0:r[0])??"";while(o!==t[0]);l=Se(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:l,href:i,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let r;return this.lexer.state.inRawBlock?r=t[0]:r=Se(t[0]),{type:"text",raw:t[0],text:r}}}}const xg=/^(?: *(?:\n|$))+/,wg=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,kg=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Tr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Sg=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Vd=/(?:[*+-]|\d{1,9}[.)])/,Wd=D(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Vd).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Rs=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Cg=/^[^\n]+/,Is=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Eg=D(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Is).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Pg=D(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Vd).getRegex(),ni="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ls=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Tg=D("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Ls).replace("tag",ni).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),bd=D(Rs).replace("hr",Tr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ni).getRegex(),_g=D(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",bd).getRegex(),As={blockquote:_g,code:wg,def:Eg,fences:kg,heading:Sg,hr:Tr,html:Tg,lheading:Wd,list:Pg,newline:xg,paragraph:bd,table:Zt,text:Cg},su=D("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Tr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ni).getRegex(),Ng={...As,table:su,paragraph:D(Rs).replace("hr",Tr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",su).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ni).getRegex()},jg={...As,html:D(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ls).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Zt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:D(Rs).replace("hr",Tr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Wd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Gd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Rg=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Qd=/^( {2,}|\\)\n(?!\s*$)/,Ig=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,_r="\\p{P}\\p{S}",Lg=D(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,_r).getRegex(),Ag=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Og=D(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,_r).getRegex(),zg=D("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,_r).getRegex(),Mg=D("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,_r).getRegex(),Dg=D(/\\([punct])/,"gu").replace(/punct/g,_r).getRegex(),$g=D(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Fg=D(Ls).replace("(?:-->|$)","-->").getRegex(),Ug=D("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Fg).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Al=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Bg=D(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Al).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Kd=D(/^!?\[(label)\]\[(ref)\]/).replace("label",Al).replace("ref",Is).getRegex(),Jd=D(/^!?\[(ref)\](?:\[\])?/).replace("ref",Is).getRegex(),Hg=D("reflink|nolink(?!\\()","g").replace("reflink",Kd).replace("nolink",Jd).getRegex(),Os={_backpedal:Zt,anyPunctuation:Dg,autolink:$g,blockSkip:Ag,br:Qd,code:Rg,del:Zt,emStrongLDelim:Og,emStrongRDelimAst:zg,emStrongRDelimUnd:Mg,escape:Gd,link:Bg,nolink:Jd,punctuation:Lg,reflink:Kd,reflinkSearch:Hg,tag:Ug,text:Ig,url:Zt},Vg={...Os,link:D(/^!?\[(label)\]\((.*?)\)/).replace("label",Al).getRegex(),reflink:D(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Al).getRegex()},Ro={...Os,escape:D(Gd).replace("])","~|])").getRegex(),url:D(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Wg={...Ro,br:D(Qd).replace("{2,}","*").getRegex(),text:D(Ro.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Qr={normal:As,gfm:Ng,pedantic:jg},$t={normal:Os,gfm:Ro,breaks:Wg,pedantic:Vg};class be{constructor(n){F(this,"tokens");F(this,"options");F(this,"state");F(this,"tokenizer");F(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Jn,this.options.tokenizer=this.options.tokenizer||new Ll,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Qr.normal,inline:$t.normal};this.options.pedantic?(t.block=Qr.pedantic,t.inline=$t.pedantic):this.options.gfm&&(t.block=Qr.gfm,this.options.breaks?t.inline=$t.breaks:t.inline=$t.gfm),this.tokenizer.rules=t}static get rules(){return{block:Qr,inline:$t}}static lex(n,t){return new be(t).lex(n)}static lexInline(n,t){return new be(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],r=!1){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(s,a,u)=>a+"    ".repeat(u.length));let l,i,o;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>(l=s.call({lexer:this},n,t))?(n=n.substring(l.raw.length),t.push(l),!0):!1))){if(l=this.tokenizer.space(n)){n=n.substring(l.raw.length),l.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(l);continue}if(l=this.tokenizer.code(n)){n=n.substring(l.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(l);continue}if(l=this.tokenizer.fences(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.heading(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.hr(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.blockquote(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.list(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.html(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.def(n)){n=n.substring(l.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+l.raw,i.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.lheading(n)){n=n.substring(l.raw.length),t.push(l);continue}if(o=n,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const a=n.slice(1);let u;this.options.extensions.startBlock.forEach(d=>{u=d.call({lexer:this},a),typeof u=="number"&&u>=0&&(s=Math.min(s,u))}),s<1/0&&s>=0&&(o=n.substring(0,s+1))}if(this.state.top&&(l=this.tokenizer.paragraph(o))){i=t[t.length-1],r&&(i==null?void 0:i.type)==="paragraph"?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(l),r=o.length!==n.length,n=n.substring(l.raw.length);continue}if(l=this.tokenizer.text(n)){n=n.substring(l.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(l);continue}if(n){const s="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let r,l,i,o=n,s,a,u;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)d.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,s.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(a||(u=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(r=d.call({lexer:this},n,t))?(n=n.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(n)){n=n.substring(r.raw.length),l=t[t.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(r.raw.length),l=t[t.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(n,o,u)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(n)){n=n.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(n))){n=n.substring(r.raw.length),t.push(r);continue}if(i=n,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const f=n.slice(1);let m;this.options.extensions.startInline.forEach(y=>{m=y.call({lexer:this},f),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(i=n.substring(0,d+1))}if(r=this.tokenizer.inlineText(i)){n=n.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(u=r.raw.slice(-1)),a=!0,l=t[t.length-1],l&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(n){const d="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}}class Ol{constructor(n){F(this,"options");F(this,"parser");this.options=n||Jn}space(n){return""}code({text:n,lang:t,escaped:r}){var o;const l=(o=(t||"").match(/^\S*/))==null?void 0:o[0],i=n.replace(/\n$/,"")+`
`;return l?'<pre><code class="language-'+Se(l)+'">'+(r?i:Se(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:Se(i,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,r=n.start;let l="";for(let s=0;s<n.items.length;s++){const a=n.items[s];l+=this.listitem(a)}const i=t?"ol":"ul",o=t&&r!==1?' start="'+r+'"':"";return"<"+i+o+`>
`+l+"</"+i+`>
`}listitem(n){let t="";if(n.task){const r=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=r+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=r+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):t+=r+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",r="";for(let i=0;i<n.header.length;i++)r+=this.tablecell(n.header[i]);t+=this.tablerow({text:r});let l="";for(let i=0;i<n.rows.length;i++){const o=n.rows[i];r="";for(let s=0;s<o.length;s++)r+=this.tablecell(o[s]);l+=this.tablerow({text:r})}return l&&(l=`<tbody>${l}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+l+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:r}){const l=this.parser.parseInline(r),i=lu(n);if(i===null)return l;n=i;let o='<a href="'+n+'"';return t&&(o+=' title="'+t+'"'),o+=">"+l+"</a>",o}image({href:n,title:t,text:r}){const l=lu(n);if(l===null)return r;n=l;let i=`<img src="${n}" alt="${r}"`;return t&&(i+=` title="${t}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class zs{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class Ge{constructor(n){F(this,"options");F(this,"renderer");F(this,"textRenderer");this.options=n||Jn,this.options.renderer=this.options.renderer||new Ol,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new zs}static parse(n,t){return new Ge(t).parse(n)}static parseInline(n,t){return new Ge(t).parseInline(n)}parse(n,t=!0){let r="";for(let l=0;l<n.length;l++){const i=n[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const s=i,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){r+=a||"";continue}}const o=i;switch(o.type){case"space":{r+=this.renderer.space(o);continue}case"hr":{r+=this.renderer.hr(o);continue}case"heading":{r+=this.renderer.heading(o);continue}case"code":{r+=this.renderer.code(o);continue}case"table":{r+=this.renderer.table(o);continue}case"blockquote":{r+=this.renderer.blockquote(o);continue}case"list":{r+=this.renderer.list(o);continue}case"html":{r+=this.renderer.html(o);continue}case"paragraph":{r+=this.renderer.paragraph(o);continue}case"text":{let s=o,a=this.renderer.text(s);for(;l+1<n.length&&n[l+1].type==="text";)s=n[++l],a+=`
`+this.renderer.text(s);t?r+=this.renderer.paragraph({type:"paragraph",raw:a,text:a,tokens:[{type:"text",raw:a,text:a}]}):r+=a;continue}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(n,t){t=t||this.renderer;let r="";for(let l=0;l<n.length;l++){const i=n[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=s||"";continue}}const o=i;switch(o.type){case"escape":{r+=t.text(o);break}case"html":{r+=t.html(o);break}case"link":{r+=t.link(o);break}case"image":{r+=t.image(o);break}case"strong":{r+=t.strong(o);break}case"em":{r+=t.em(o);break}case"codespan":{r+=t.codespan(o);break}case"br":{r+=t.br(o);break}case"del":{r+=t.del(o);break}case"text":{r+=t.text(o);break}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}}class qt{constructor(n){F(this,"options");this.options=n||Jn}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}F(qt,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var ln,Yd,Io,Xd;class bg{constructor(...n){Fs(this,ln);F(this,"defaults",js());F(this,"options",this.setOptions);F(this,"parse",Nt(this,ln,Io).call(this,be.lex,Ge.parse));F(this,"parseInline",Nt(this,ln,Io).call(this,be.lexInline,Ge.parseInline));F(this,"Parser",Ge);F(this,"Renderer",Ol);F(this,"TextRenderer",zs);F(this,"Lexer",be);F(this,"Tokenizer",Ll);F(this,"Hooks",qt);this.use(...n)}walkTokens(n,t){var l,i;let r=[];for(const o of n)switch(r=r.concat(t.call(this,o)),o.type){case"table":{const s=o;for(const a of s.header)r=r.concat(this.walkTokens(a.tokens,t));for(const a of s.rows)for(const u of a)r=r.concat(this.walkTokens(u.tokens,t));break}case"list":{const s=o;r=r.concat(this.walkTokens(s.items,t));break}default:{const s=o;(i=(l=this.defaults.extensions)==null?void 0:l.childTokens)!=null&&i[s.type]?this.defaults.extensions.childTokens[s.type].forEach(a=>{const u=s[a].flat(1/0);r=r.concat(this.walkTokens(u,t))}):s.tokens&&(r=r.concat(this.walkTokens(s.tokens,t)))}}return r}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(r=>{const l={...r};if(l.async=this.defaults.async||l.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const o=t.renderers[i.name];o?t.renderers[i.name]=function(...s){let a=i.renderer.apply(this,s);return a===!1&&(a=o.apply(this,s)),a}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[i.level];o?o.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),l.extensions=t),r.renderer){const i=this.defaults.renderer||new Ol(this.defaults);for(const o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const s=o;let a=r.renderer[s];r.useNewRenderer||(a=Nt(this,ln,Yd).call(this,a,s,i));const u=i[s];i[s]=(...d)=>{let f=a.apply(i,d);return f===!1&&(f=u.apply(i,d)),f||""}}l.renderer=i}if(r.tokenizer){const i=this.defaults.tokenizer||new Ll(this.defaults);for(const o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const s=o,a=r.tokenizer[s],u=i[s];i[s]=(...d)=>{let f=a.apply(i,d);return f===!1&&(f=u.apply(i,d)),f}}l.tokenizer=i}if(r.hooks){const i=this.defaults.hooks||new qt;for(const o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const s=o,a=r.hooks[s],u=i[s];qt.passThroughHooks.has(o)?i[s]=d=>{if(this.defaults.async)return Promise.resolve(a.call(i,d)).then(m=>u.call(i,m));const f=a.call(i,d);return u.call(i,f)}:i[s]=(...d)=>{let f=a.apply(i,d);return f===!1&&(f=u.apply(i,d)),f}}l.hooks=i}if(r.walkTokens){const i=this.defaults.walkTokens,o=r.walkTokens;l.walkTokens=function(s){let a=[];return a.push(o.call(this,s)),i&&(a=a.concat(i.call(this,s))),a}}this.defaults={...this.defaults,...l}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return be.lex(n,t??this.defaults)}parser(n,t){return Ge.parse(n,t??this.defaults)}}ln=new WeakSet,Yd=function(n,t,r){switch(t){case"heading":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,r.parser.parseInline(l.tokens),l.depth,mg(r.parser.parseInline(l.tokens,r.parser.textRenderer)))};case"code":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text,l.lang,!!l.escaped)};case"table":return function(l){if(!l.type||l.type!==t)return n.apply(this,arguments);let i="",o="";for(let a=0;a<l.header.length;a++)o+=this.tablecell({text:l.header[a].text,tokens:l.header[a].tokens,header:!0,align:l.align[a]});i+=this.tablerow({text:o});let s="";for(let a=0;a<l.rows.length;a++){const u=l.rows[a];o="";for(let d=0;d<u.length;d++)o+=this.tablecell({text:u[d].text,tokens:u[d].tokens,header:!1,align:l.align[d]});s+=this.tablerow({text:o})}return n.call(this,i,s)};case"blockquote":return function(l){if(!l.type||l.type!==t)return n.apply(this,arguments);const i=this.parser.parse(l.tokens);return n.call(this,i)};case"list":return function(l){if(!l.type||l.type!==t)return n.apply(this,arguments);const i=l.ordered,o=l.start,s=l.loose;let a="";for(let u=0;u<l.items.length;u++){const d=l.items[u],f=d.checked,m=d.task;let y="";if(d.task){const v=this.checkbox({checked:!!f});s?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=v+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=v+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:v+" "}):y+=v+" "}y+=this.parser.parse(d.tokens,s),a+=this.listitem({type:"list_item",raw:y,text:y,task:m,checked:!!f,loose:s,tokens:d.tokens})}return n.call(this,a,i,o)};case"html":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text,l.block)};case"paragraph":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"escape":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text)};case"link":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.href,l.title,this.parser.parseInline(l.tokens))};case"image":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.href,l.title,l.text)};case"strong":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"em":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"codespan":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text)};case"del":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"text":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text)}}return n},Io=function(n,t){return(r,l)=>{const i={...l},o={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const s=Nt(this,ln,Xd).call(this,!!o.silent,!!o.async);if(typeof r>"u"||r===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(r):r).then(a=>n(a,o)).then(a=>o.hooks?o.hooks.processAllTokens(a):a).then(a=>o.walkTokens?Promise.all(this.walkTokens(a,o.walkTokens)).then(()=>a):a).then(a=>t(a,o)).then(a=>o.hooks?o.hooks.postprocess(a):a).catch(s);try{o.hooks&&(r=o.hooks.preprocess(r));let a=n(r,o);o.hooks&&(a=o.hooks.processAllTokens(a)),o.walkTokens&&this.walkTokens(a,o.walkTokens);let u=t(a,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(a){return s(a)}}},Xd=function(n,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const l="<p>An error occurred:</p><pre>"+Se(r.message+"",!0)+"</pre>";return t?Promise.resolve(l):l}if(t)return Promise.reject(r);throw r}};const bn=new bg;function z(e,n){return bn.parse(e,n)}z.options=z.setOptions=function(e){return bn.setOptions(e),z.defaults=bn.defaults,Ud(z.defaults),z};z.getDefaults=js;z.defaults=Jn;z.use=function(...e){return bn.use(...e),z.defaults=bn.defaults,Ud(z.defaults),z};z.walkTokens=function(e,n){return bn.walkTokens(e,n)};z.parseInline=bn.parseInline;z.Parser=Ge;z.parser=Ge.parse;z.Renderer=Ol;z.TextRenderer=zs;z.Lexer=be;z.lexer=be.lex;z.Tokenizer=Ll;z.Hooks=qt;z.parse=z;z.options;z.setOptions;z.use;z.walkTokens;z.parseInline;Ge.parse;be.lex;function Gg(){const{slug:e}=_s(),n=ei.find(r=>r.slug===e);if(!n)return g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("p",{children:"글을 찾을 수 없습니다."}),g.jsx(pe,{to:"/blog",className:"text-accent underline",children:"목록으로"})]});const t=z.parse(Fd(n.body,n.title),{async:!1});return g.jsx("main",{className:"w-full px-6 py-12 md:px-12",children:g.jsxs("div",{className:"mx-auto max-w-3xl",children:[g.jsx(pe,{to:"/blog",className:"text-sm text-accent underline",children:"← 목록으로"}),g.jsx("h1",{className:"mt-4 text-2xl font-bold",children:n.title}),g.jsx("p",{className:"mt-1 text-sm text-muted",children:n.date}),g.jsx("div",{className:"markdown-body mt-8",dangerouslySetInnerHTML:{__html:t}})]})})}const Qg="ShinHeeYoun",Kg="ShinHeeYoun.github.io",Zd="main";function Jg(e){return`https://api.github.com/repos/${Qg}/${Kg}/contents/${e}`}function Yg(e){const n=new TextEncoder().encode(e);let t="";for(const r of n)t+=String.fromCharCode(r);return btoa(t)}function Xg(e){const n=atob(e.replace(/\n/g,"")),t=Uint8Array.from(n,r=>r.charCodeAt(0));return new TextDecoder().decode(t)}async function Ms(e,n,t){const r=await fetch(Jg(e),{...t,headers:{Authorization:`Bearer ${n}`,Accept:"application/vnd.github+json",...t.headers}});if(!r.ok){const l=await r.json().catch(()=>({})),i=typeof l.message=="string"?l.message:r.statusText;throw new Error(`GitHub API error (${r.status}): ${i}`)}return r}async function au(e,n){const r=await(await Ms(e,n,{method:"GET"})).json();return{content:Xg(r.content),sha:r.sha}}async function Zg(e,n,t,r,l){await Ms(e,r,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,content:Yg(n),branch:Zd,...l?{sha:l}:{}})})}async function qg(e,n,t,r){await Ms(e,r,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:n,sha:t,branch:Zd})})}const qd="gh_pat";function e0(){try{return localStorage.getItem(qd)??""}catch{return""}}function Li(e){try{localStorage.setItem(qd,e)}catch{}}function n0(){const e=new Date,n=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${n}-${t}-${r}`}function t0(){const[e,n]=E.useState(e0()),[t,r]=E.useState(""),[l,i]=E.useState(""),[o,s]=E.useState(null),[a,u]=E.useState(!1),[d,f]=E.useState(null),[m,y]=E.useState(null),[v,w]=E.useState(null),[C,p]=E.useState(null);function c(){r(""),i(""),f(null),y(null),w(null)}async function h(){s(null),u(!0);try{Li(e);const S=v??n0(),T=d??lg(S),j=qm({title:t,date:S},l),$=d?`post: update ${t}`:`post: ${t}`;await Zg(`src/content/posts/${T}.md`,j,$,e,m??void 0),s("게시됨 — 배포까지 약 1분 정도 걸려요."),c()}catch(S){s(S instanceof Error?S.message:"게시 중 오류가 발생했습니다.")}finally{u(!1)}}async function x(S){s(null),p(S.slug);try{Li(e);const T=`src/content/posts/${S.slug}.md`,{content:j,sha:$}=await au(T,e),{frontmatter:R,body:ce}=$d(j);r(R.title),i(ce),w(R.date),f(S.slug),y($)}catch(T){s(T instanceof Error?T.message:"글을 불러오지 못했습니다.")}finally{p(null)}}async function P(S){if(window.confirm(`"${S.title}" 글을 삭제할까요? 되돌릴 수 없습니다.`)){s(null),p(S.slug);try{Li(e);const T=`src/content/posts/${S.slug}.md`,{sha:j}=await au(T,e);await qg(T,`post: delete ${S.title}`,j,e),s("삭제됨 — 배포까지 약 1분 정도 걸려요."),d===S.slug&&c()}catch(T){s(T instanceof Error?T.message:"삭제 중 오류가 발생했습니다.")}finally{p(null)}}}return g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("h1",{className:"text-2xl font-bold",children:"Write"}),g.jsx("p",{className:"mt-4 rounded-md bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",children:"이 저장소(ShinHeeYoun/ShinHeeYoun.github.io) 전용, Contents: Read and write 권한만 있는 fine-grained PAT를 사용하세요. 이 토큰은 브라우저 localStorage에 저장되며, 이 브라우저에서 스크립트를 실행할 수 있는 누구나 읽을 수 있습니다."}),g.jsxs("div",{className:"mt-4",children:[g.jsx("label",{className:"block text-sm font-medium",children:"Personal Access Token"}),g.jsx("input",{type:"password",value:e,onChange:S=>n(S.target.value),className:"mt-1 w-full rounded-md border border-border bg-surface p-2 text-foreground"})]}),g.jsxs("div",{className:"mt-4",children:[g.jsxs("label",{className:"block text-sm font-medium",children:["제목 ",d&&g.jsxs("span",{className:"text-xs text-muted",children:["(수정 중: ",d,")"]})]}),g.jsx("input",{type:"text",value:t,onChange:S=>r(S.target.value),className:"mt-1 w-full rounded-md border border-border bg-surface p-2 text-foreground"})]}),g.jsxs("div",{className:"mt-4",children:[g.jsx("label",{className:"block text-sm font-medium",children:"본문 (Markdown)"}),g.jsx("textarea",{value:l,onChange:S=>i(S.target.value),rows:12,className:"mt-1 w-full rounded-md border border-border bg-surface p-2 font-mono text-sm text-foreground"})]}),g.jsxs("div",{className:"mt-4 flex gap-2",children:[g.jsx("button",{type:"button",onClick:h,disabled:a||!e||!t||!l,className:"rounded-md bg-accent px-4 py-2 text-background transition-colors hover:bg-accent-hover disabled:opacity-50",children:a?"게시 중...":d?"수정 게시":"게시"}),d&&g.jsx("button",{type:"button",onClick:c,className:"rounded-md border border-border px-4 py-2 hover:bg-surface",children:"취소"})]}),o&&g.jsx("p",{className:"mt-4 text-sm",children:o}),g.jsx("h2",{className:"mt-12 text-xl font-semibold",children:"내 글 목록"}),g.jsx("ul",{className:"mt-4 space-y-2",children:ei.map(S=>g.jsxs("li",{className:"flex items-center justify-between rounded-md border border-border p-3",children:[g.jsxs("span",{children:[S.title," ",g.jsxs("span",{className:"text-xs text-muted",children:["(",S.date,")"]})]}),g.jsxs("span",{className:"flex gap-3",children:[g.jsx("button",{type:"button",onClick:()=>x(S),disabled:C!==null||!e,className:"text-sm text-accent underline disabled:opacity-50",children:C===S.slug?"불러오는 중...":"수정"}),g.jsx("button",{type:"button",onClick:()=>P(S),disabled:C!==null||!e,className:"text-sm text-red-600 underline disabled:opacity-50 dark:text-red-400",children:"삭제"})]})]},S.slug))})]})}const ef=[{id:"calculator",name:"계산기",description:"기본 사칙연산을 지원하는 버튼식 계산기입니다."}];function r0(){return g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("h1",{className:"text-2xl font-bold",children:"Tools"}),g.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:ef.map(e=>g.jsx(pe,{to:`/tools/${e.id}`,className:"block",children:g.jsxs("article",{className:"card",children:[g.jsx("h2",{className:"card-title",children:e.name}),g.jsx("p",{className:"mt-2 text-foreground/80",children:e.description})]})},e.id))})]})}const nf={display:"0",pendingValue:null,pendingOperator:null,overwrite:!1};function uu(e,n,t){switch(t){case"+":return e+n;case"-":return e-n;case"×":return e*n;case"÷":return n===0?NaN:e/n}}function l0(e,n){switch(n.type){case"digit":return e.overwrite||e.display==="0"?{...e,display:n.digit,overwrite:!1}:{...e,display:e.display+n.digit};case"decimal":return e.overwrite?{...e,display:"0.",overwrite:!1}:e.display.includes(".")?e:{...e,display:e.display+"."};case"operator":{const t=Number(e.display);if(e.pendingOperator!==null&&!e.overwrite){const r=uu(e.pendingValue??0,t,e.pendingOperator);return{display:String(r),pendingValue:r,pendingOperator:n.operator,overwrite:!0}}return{...e,pendingValue:t,pendingOperator:n.operator,overwrite:!0}}case"equals":{if(e.pendingOperator===null)return e;const t=Number(e.display),r=uu(e.pendingValue??0,t,e.pendingOperator);return{display:String(r),pendingValue:null,pendingOperator:null,overwrite:!0}}case"clear":return nf}}const i0=[{kind:"digit",label:"7"},{kind:"digit",label:"8"},{kind:"digit",label:"9"},{kind:"operator",label:"÷",operator:"÷"},{kind:"digit",label:"4"},{kind:"digit",label:"5"},{kind:"digit",label:"6"},{kind:"operator",label:"×",operator:"×"},{kind:"digit",label:"1"},{kind:"digit",label:"2"},{kind:"digit",label:"3"},{kind:"operator",label:"-",operator:"-"},{kind:"digit",label:"0"},{kind:"decimal",label:"."},{kind:"equals",label:"="},{kind:"operator",label:"+",operator:"+"},{kind:"clear",label:"C"}];function o0(){const[e,n]=E.useReducer(l0,nf);function t(r){switch(r.kind){case"digit":n({type:"digit",digit:r.label});break;case"decimal":n({type:"decimal"});break;case"operator":n({type:"operator",operator:r.operator});break;case"equals":n({type:"equals"});break;case"clear":n({type:"clear"});break}}return g.jsxs("div",{className:"mx-auto max-w-xs",children:[g.jsx("div",{className:"mb-4 rounded-md border border-border bg-surface p-4 text-right text-2xl font-mono break-all",children:e.display}),g.jsx("div",{className:"grid grid-cols-4 gap-2",children:i0.map((r,l)=>g.jsx("button",{type:"button",onClick:()=>t(r),className:`rounded-md border p-3 text-lg transition-colors ${r.kind==="equals"?"border-accent bg-accent text-background hover:bg-accent-hover":"border-border hover:bg-surface"} ${r.kind==="clear"?"col-span-4":""}`,children:r.label},l))})]})}const s0={calculator:o0};function a0(){const{id:e}=_s(),n=e?s0[e]:void 0,t=ef.find(r=>r.id===e);return!n||!t?g.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-12",children:[g.jsx("p",{children:"도구를 찾을 수 없습니다."}),g.jsx(pe,{to:"/tools",className:"text-accent underline",children:"목록으로"})]}):g.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-12",children:[g.jsx(pe,{to:"/tools",className:"text-sm text-accent underline",children:"← 목록으로"}),g.jsx("h1",{className:"mt-4 text-2xl font-bold",children:t.name}),g.jsx("div",{className:"mt-6",children:g.jsx(n,{})})]})}function u0(){return g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("h1",{className:"text-2xl font-bold",children:"Projects"}),g.jsx("p",{className:"mt-2 text-muted",children:"이 사이트를 이루는 구성 요소를 하나씩 설명합니다."}),g.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:Ns.map(e=>g.jsx(Dd,{project:e},e.id))})]})}function c0(){const{id:e}=_s(),n=Ns.find(t=>t.id===e);return n?g.jsx("main",{className:"w-full px-6 py-12 md:px-12",children:g.jsxs("div",{className:"max-w-2xl",children:[g.jsx(pe,{to:"/projects",className:"text-sm text-accent underline-offset-4 hover:underline",children:"← 목록으로"}),g.jsx("h1",{className:"mt-4 text-2xl font-bold",children:n.title}),g.jsx("ul",{className:"mt-3 flex flex-wrap gap-2",children:n.tags.map(t=>g.jsx("li",{className:"tag",children:t},t))}),g.jsx("p",{className:"mt-6 leading-relaxed text-foreground/90",children:n.overview}),g.jsx("h2",{className:"mt-8 text-lg font-semibold",children:"핵심 포인트"}),g.jsx("ul",{className:"mt-3 list-inside list-disc space-y-2 leading-relaxed text-foreground/90",children:n.points.map(t=>g.jsx("li",{children:t},t))})]})}):g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("p",{children:"프로젝트를 찾을 수 없습니다."}),g.jsx(pe,{to:"/projects",className:"text-accent underline-offset-4 hover:underline",children:"목록으로"})]})}const d0=[{name:"React 18 · TypeScript",description:"화면을 컴포넌트 단위로 나눠 만들고, 타입으로 실수를 빌드 단계에서 잡습니다."},{name:"Vite",description:"개발 서버와 빌드 도구입니다. 빠르고 설정이 단순하며, 마크다운 글을 빌드할 때 읽어 오는 기능(import.meta.glob)도 Vite가 제공합니다."},{name:"Tailwind CSS",description:"유틸리티 클래스로 스타일을 작성합니다. 색은 CSS 변수 토큰으로 묶어서 다크/라이트 테마를 한 곳에서 바꿉니다."},{name:"React Router (HashRouter)",description:"페이지 이동을 맡습니다. GitHub Pages에는 서버 설정이 없어서 주소에 #을 쓰는 방식을 택했고, 덕분에 어느 페이지에서 새로고침해도 404가 나지 않습니다."},{name:"marked",description:"블로그의 마크다운 본문을 HTML로 바꿔 줍니다."},{name:"GitHub Pages · GitHub Actions",description:"정적 파일 호스팅과 자동 배포입니다. main에 push하면 테스트, 빌드, 배포가 차례로 실행됩니다."},{name:"GitHub Contents API",description:"Write 페이지가 브라우저에서 글 파일을 저장소에 직접 커밋할 때 쓰는 API입니다. 별도 서버 없이 글쓰기를 가능하게 합니다."},{name:"Vitest",description:"단위 테스트 도구입니다. 계산기 로직, 글 머리말(frontmatter) 파서, 테마 선택 규칙, 프로젝트 데이터를 검사합니다."},{name:"Claude Code",description:"설계, 계획, 구현, 리뷰를 함께 진행한 AI 개발 도구입니다. 이 사이트의 코드와 문서 대부분이 이 방식으로 만들어졌습니다."}];function f0(){return g.jsx("main",{className:"w-full px-6 py-12 md:px-12",children:g.jsxs("div",{className:"max-w-2xl",children:[g.jsx("h1",{className:"text-2xl font-bold",children:"About"}),g.jsx("p",{className:"mt-6 leading-relaxed text-foreground/90",children:"이 페이지는 GitHub Pages 위에서 Claude와 함께 만든 개발 연습 페이지입니다. 블로그, 도구 실행, 브라우저 글쓰기 같은 기능을 하나씩 직접 만들어 보면서, 정적 사이트로 어디까지 할 수 있는지 연습하고 있습니다."}),g.jsx("h2",{className:"mt-10 text-lg font-semibold",children:"사용한 기술"}),g.jsx("ul",{className:"mt-4 space-y-5",children:d0.map(e=>g.jsxs("li",{children:[g.jsx("p",{className:"font-mono text-accent",children:e.name}),g.jsx("p",{className:"mt-1 leading-relaxed text-foreground/90",children:e.description})]},e.name))})]})})}function p0(){return g.jsxs(g.Fragment,{children:[g.jsx(bm,{}),g.jsxs(Pm,{children:[g.jsx(He,{path:"/",element:g.jsx(ug,{})}),g.jsx(He,{path:"/blog",element:g.jsx(cg,{})}),g.jsx(He,{path:"/blog/:slug",element:g.jsx(Gg,{})}),g.jsx(He,{path:"/write",element:g.jsx(t0,{})}),g.jsx(He,{path:"/tools",element:g.jsx(r0,{})}),g.jsx(He,{path:"/tools/:id",element:g.jsx(a0,{})}),g.jsx(He,{path:"/projects",element:g.jsx(u0,{})}),g.jsx(He,{path:"/projects/:id",element:g.jsx(c0,{})}),g.jsx(He,{path:"/about",element:g.jsx(f0,{})})]})]})}Sd(document.getElementById("root")).render(g.jsx(E.StrictMode,{children:g.jsx(Am,{children:g.jsx(p0,{})})}));
