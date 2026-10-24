var j0=Object.defineProperty;var du=e=>{throw TypeError(e)};var E0=(e,n,t)=>n in e?j0(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var V=(e,n,t)=>E0(e,typeof n!="symbol"?n+"":n,t),T0=(e,n,t)=>n.has(e)||du("Cannot "+t);var pu=(e,n,t)=>n.has(e)?du("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t);var Ir=(e,n,t)=>(T0(e,n,"access private method"),t);function A0(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function I0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Op={exports:{}},vl={},Mp={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),_0=Symbol.for("react.portal"),D0=Symbol.for("react.fragment"),R0=Symbol.for("react.strict_mode"),L0=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),M0=Symbol.for("react.context"),$0=Symbol.for("react.forward_ref"),F0=Symbol.for("react.suspense"),U0=Symbol.for("react.memo"),B0=Symbol.for("react.lazy"),fu=Symbol.iterator;function z0(e){return e===null||typeof e!="object"?null:(e=fu&&e[fu]||e["@@iterator"],typeof e=="function"?e:null)}var $p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fp=Object.assign,Up={};function Pr(e,n,t){this.props=e,this.context=n,this.refs=Up,this.updater=t||$p}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bp(){}Bp.prototype=Pr.prototype;function Hi(e,n,t){this.props=e,this.context=n,this.refs=Up,this.updater=t||$p}var Wi=Hi.prototype=new Bp;Wi.constructor=Hi;Fp(Wi,Pr.prototype);Wi.isPureReactComponent=!0;var mu=Array.isArray,zp=Object.prototype.hasOwnProperty,Gi={current:null},Hp={key:!0,ref:!0,__self:!0,__source:!0};function Wp(e,n,t){var r,s={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)zp.call(n,r)&&!Hp.hasOwnProperty(r)&&(s[r]=n[r]);var i=arguments.length-2;if(i===1)s.children=t;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)s[r]===void 0&&(s[r]=i[r]);return{$$typeof:Ls,type:e,key:o,ref:l,props:s,_owner:Gi.current}}function H0(e,n){return{$$typeof:Ls,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ls}function W0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var hu=/\/+/g;function Gl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?W0(""+e.key):n.toString(36)}function wo(e,n,t,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ls:case _0:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+Gl(l,0):r,mu(s)?(t="",e!=null&&(t=e.replace(hu,"$&/")+"/"),wo(s,n,t,"",function(u){return u})):s!=null&&(Vi(s)&&(s=H0(s,t+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(hu,"$&/")+"/")+e)),n.push(s)),1;if(l=0,r=r===""?".":r+":",mu(e))for(var i=0;i<e.length;i++){o=e[i];var c=r+Gl(o,i);l+=wo(o,n,t,c,s)}else if(c=z0(e),typeof c=="function")for(e=c.call(e),i=0;!(o=e.next()).done;)o=o.value,c=r+Gl(o,i++),l+=wo(o,n,t,c,s);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Ks(e,n,t){if(e==null)return e;var r=[],s=0;return wo(e,r,"","",function(o){return n.call(t,o,s++)}),r}function G0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},ko={transition:null},V0={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:ko,ReactCurrentOwner:Gi};function Gp(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Ks,forEach:function(e,n,t){Ks(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ks(e,function(){n++}),n},toArray:function(e){return Ks(e,function(n){return n})||[]},only:function(e){if(!Vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Pr;B.Fragment=D0;B.Profiler=L0;B.PureComponent=Hi;B.StrictMode=R0;B.Suspense=F0;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V0;B.act=Gp;B.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fp({},e.props),s=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Gi.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in n)zp.call(n,c)&&!Hp.hasOwnProperty(c)&&(r[c]=n[c]===void 0&&i!==void 0?i[c]:n[c])}var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:Ls,type:e.type,key:s,ref:o,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:M0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:O0,_context:e},e.Consumer=e};B.createElement=Wp;B.createFactory=function(e){var n=Wp.bind(null,e);return n.type=e,n};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:$0,render:e}};B.isValidElement=Vi;B.lazy=function(e){return{$$typeof:B0,_payload:{_status:-1,_result:e},_init:G0}};B.memo=function(e,n){return{$$typeof:U0,type:e,compare:n===void 0?null:n}};B.startTransition=function(e){var n=ko.transition;ko.transition={};try{e()}finally{ko.transition=n}};B.unstable_act=Gp;B.useCallback=function(e,n){return Te.current.useCallback(e,n)};B.useContext=function(e){return Te.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};B.useEffect=function(e,n){return Te.current.useEffect(e,n)};B.useId=function(){return Te.current.useId()};B.useImperativeHandle=function(e,n,t){return Te.current.useImperativeHandle(e,n,t)};B.useInsertionEffect=function(e,n){return Te.current.useInsertionEffect(e,n)};B.useLayoutEffect=function(e,n){return Te.current.useLayoutEffect(e,n)};B.useMemo=function(e,n){return Te.current.useMemo(e,n)};B.useReducer=function(e,n,t){return Te.current.useReducer(e,n,t)};B.useRef=function(e){return Te.current.useRef(e)};B.useState=function(e){return Te.current.useState(e)};B.useSyncExternalStore=function(e,n,t){return Te.current.useSyncExternalStore(e,n,t)};B.useTransition=function(){return Te.current.useTransition()};B.version="18.3.1";Mp.exports=B;var x=Mp.exports;const K0=I0(x),J0=A0({__proto__:null,default:K0},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=x,Y0=Symbol.for("react.element"),q0=Symbol.for("react.fragment"),Q0=Object.prototype.hasOwnProperty,Z0=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eg={key:!0,ref:!0,__self:!0,__source:!0};function Vp(e,n,t){var r,s={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Q0.call(n,r)&&!eg.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)s[r]===void 0&&(s[r]=n[r]);return{$$typeof:Y0,type:e,key:o,ref:l,props:s,_owner:Z0.current}}vl.Fragment=q0;vl.jsx=Vp;vl.jsxs=Vp;Op.exports=vl;var a=Op.exports,Kp={exports:{}},Ge={},Jp={exports:{}},Xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,R){var M=T.length;T.push(R);e:for(;0<M;){var Y=M-1>>>1,Z=T[Y];if(0<s(Z,R))T[Y]=R,T[M]=Z,M=Y;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],M=T.pop();if(M!==R){T[0]=M;e:for(var Y=0,Z=T.length,Oe=Z>>>1;Y<Oe;){var Me=2*(Y+1)-1,Mn=T[Me],Ce=Me+1,$n=T[Ce];if(0>s(Mn,M))Ce<Z&&0>s($n,Mn)?(T[Y]=$n,T[Ce]=M,Y=Ce):(T[Y]=Mn,T[Me]=M,Y=Me);else if(Ce<Z&&0>s($n,M))T[Y]=$n,T[Ce]=M,Y=Ce;else break e}}return R}function s(T,R){var M=T.sortIndex-R.sortIndex;return M!==0?M:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],u=[],d=1,f=null,m=3,y=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var R=t(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=T)r(u),R.sortIndex=R.expirationTime,n(c,R);else break;R=t(u)}}function S(T){if(w=!1,g(T),!v)if(t(c)!==null)v=!0,A(k);else{var R=t(u);R!==null&&z(S,R.startTime-T)}}function k(T,R){v=!1,w&&(w=!1,h(N),N=-1),y=!0;var M=m;try{for(g(R),f=t(c);f!==null&&(!(f.expirationTime>R)||T&&!L());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,m=f.priorityLevel;var Z=Y(f.expirationTime<=R);R=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===t(c)&&r(c),g(R)}else r(c);f=t(c)}if(f!==null)var Oe=!0;else{var Me=t(u);Me!==null&&z(S,Me.startTime-R),Oe=!1}return Oe}finally{f=null,m=M,y=!1}}var C=!1,E=null,N=-1,U=5,I=-1;function L(){return!(e.unstable_now()-I<U)}function J(){if(E!==null){var T=e.unstable_now();I=T;var R=!0;try{R=E(!0,T)}finally{R?ue():(C=!1,E=null)}}else C=!1}var ue;if(typeof p=="function")ue=function(){p(J)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,$=Ke.port2;Ke.port1.onmessage=J,ue=function(){$.postMessage(null)}}else ue=function(){b(J,0)};function A(T){E=T,C||(C=!0,ue())}function z(T,R){N=b(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,A(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var M=m;m=R;try{return T()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=m;m=T;try{return R()}finally{m=M}},e.unstable_scheduleCallback=function(T,R,M){var Y=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Y+M:Y):M=Y,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=M+Z,T={id:d++,callback:R,priorityLevel:T,startTime:M,expirationTime:Z,sortIndex:-1},M>Y?(T.sortIndex=M,n(u,T),t(c)===null&&T===t(u)&&(w?(h(N),N=-1):w=!0,z(S,M-Y))):(T.sortIndex=Z,n(c,T),v||y||(v=!0,A(k))),T},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(T){var R=m;return function(){var M=m;m=R;try{return T.apply(this,arguments)}finally{m=M}}}})(Xp);Jp.exports=Xp;var ng=Jp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg=x,We=ng;function j(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yp=new Set,ps={};function Lt(e,n){xr(e,n),xr(e+"Capture",n)}function xr(e,n){for(ps[e]=n,e=0;e<n.length;e++)Yp.add(n[e])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,rg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},xu={};function sg(e){return Aa.call(xu,e)?!0:Aa.call(gu,e)?!1:rg.test(e)?xu[e]=!0:(gu[e]=!0,!1)}function og(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lg(e,n,t,r){if(n===null||typeof n>"u"||og(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ae(e,n,t,r,s,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ve[n]=new Ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ki=/[\-:]([a-z])/g;function Ji(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ki,Ji);ve[n]=new Ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ki,Ji);ve[n]=new Ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ki,Ji);ve[n]=new Ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xi(e,n,t,r){var s=ve.hasOwnProperty(n)?ve[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(lg(n,t,s,r)&&(t=null),r||s===null?sg(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,r=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Rn=tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),Yi=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),qp=Symbol.for("react.provider"),Qp=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),_a=Symbol.for("react.suspense"),Da=Symbol.for("react.suspense_list"),Qi=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),Zp=Symbol.for("react.offscreen"),yu=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Vl;function Jr(e){if(Vl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Vl=n&&n[1]||""}return`
`+Vl+e}var Kl=!1;function Jl(e,n){if(!e||Kl)return"";Kl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),o=r.stack.split(`
`),l=s.length-1,i=o.length-1;1<=l&&0<=i&&s[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==o[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==o[i]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{Kl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Jr(e):""}function ag(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=Jl(e.type,!1),e;case 11:return e=Jl(e.type.render,!1),e;case 1:return e=Jl(e.type,!0),e;default:return""}}function Ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Kt:return"Portal";case Ia:return"Profiler";case Yi:return"StrictMode";case _a:return"Suspense";case Da:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qp:return(e.displayName||"Context")+".Consumer";case qp:return(e._context.displayName||"Context")+".Provider";case qi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qi:return n=e.displayName||null,n!==null?n:Ra(e.type)||"Memo";case Hn:n=e._payload,e=e._init;try{return Ra(e(n))}catch{}}return null}function ig(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ra(n);case 8:return n===Yi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function at(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ef(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cg(e){var n=ef(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xs(e){e._valueTracker||(e._valueTracker=cg(e))}function nf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ef(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function La(e,n){var t=n.checked;return le({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function vu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=at(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function tf(e,n){n=n.checked,n!=null&&Xi(e,"checked",n,!1)}function Oa(e,n){tf(e,n);var t=at(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ma(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ma(e,n.type,at(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Su(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ma(e,n,t){(n!=="number"||Fo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Xr=Array.isArray;function ar(e,n,t,r){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&r&&(e[t].defaultSelected=!0)}else{for(t=""+at(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function $a(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(j(91));return le({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(j(92));if(Xr(t)){if(1<t.length)throw Error(j(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:at(t)}}function rf(e,n){var t=at(n.value),r=at(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ku(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function sf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?sf(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ys,of=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ys=Ys||document.createElement("div"),Ys.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ys.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function fs(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ug=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){ug.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Qr[n]=Qr[e]})});function lf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+n).trim():n+"px"}function af(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,s=lf(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,s):e[t]=s}}var dg=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(e,n){if(n){if(dg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(j(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(j(61))}if(n.style!=null&&typeof n.style!="object")throw Error(j(62))}}function Ba(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=null;function Zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,ir=null,cr=null;function bu(e){if(e=$s(e)){if(typeof Ha!="function")throw Error(j(280));var n=e.stateNode;n&&(n=Cl(n),Ha(e.stateNode,e.type,n))}}function cf(e){ir?cr?cr.push(e):cr=[e]:ir=e}function uf(){if(ir){var e=ir,n=cr;if(cr=ir=null,bu(e),n)for(e=0;e<n.length;e++)bu(n[e])}}function df(e,n){return e(n)}function pf(){}var Xl=!1;function ff(e,n,t){if(Xl)return e(n,t);Xl=!0;try{return df(e,n,t)}finally{Xl=!1,(ir!==null||cr!==null)&&(pf(),uf())}}function ms(e,n){var t=e.stateNode;if(t===null)return null;var r=Cl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(j(231,n,typeof t));return t}var Wa=!1;if(Tn)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Wa=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Wa=!1}function pg(e,n,t,r,s,o,l,i,c){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var Zr=!1,Uo=null,Bo=!1,Ga=null,fg={onError:function(e){Zr=!0,Uo=e}};function mg(e,n,t,r,s,o,l,i,c){Zr=!1,Uo=null,pg.apply(fg,arguments)}function hg(e,n,t,r,s,o,l,i,c){if(mg.apply(this,arguments),Zr){if(Zr){var u=Uo;Zr=!1,Uo=null}else throw Error(j(198));Bo||(Bo=!0,Ga=u)}}function Ot(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function mf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Cu(e){if(Ot(e)!==e)throw Error(j(188))}function gg(e){var n=e.alternate;if(!n){if(n=Ot(e),n===null)throw Error(j(188));return n!==e?null:e}for(var t=e,r=n;;){var s=t.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){t=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===t)return Cu(s),e;if(o===r)return Cu(s),n;o=o.sibling}throw Error(j(188))}if(t.return!==r.return)t=s,r=o;else{for(var l=!1,i=s.child;i;){if(i===t){l=!0,t=s,r=o;break}if(i===r){l=!0,r=s,t=o;break}i=i.sibling}if(!l){for(i=o.child;i;){if(i===t){l=!0,t=o,r=s;break}if(i===r){l=!0,r=o,t=s;break}i=i.sibling}if(!l)throw Error(j(189))}}if(t.alternate!==r)throw Error(j(190))}if(t.tag!==3)throw Error(j(188));return t.stateNode.current===t?e:n}function hf(e){return e=gg(e),e!==null?gf(e):null}function gf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=gf(e);if(n!==null)return n;e=e.sibling}return null}var xf=We.unstable_scheduleCallback,Nu=We.unstable_cancelCallback,xg=We.unstable_shouldYield,yg=We.unstable_requestPaint,ie=We.unstable_now,vg=We.unstable_getCurrentPriorityLevel,ec=We.unstable_ImmediatePriority,yf=We.unstable_UserBlockingPriority,zo=We.unstable_NormalPriority,Sg=We.unstable_LowPriority,vf=We.unstable_IdlePriority,Sl=null,Sn=null;function wg(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:Cg,kg=Math.log,bg=Math.LN2;function Cg(e){return e>>>=0,e===0?32:31-(kg(e)/bg|0)|0}var qs=64,Qs=4194304;function Yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var i=l&~s;i!==0?r=Yr(i):(o&=l,o!==0&&(r=Yr(o)))}else l=t&~s,l!==0?r=Yr(l):o!==0&&(r=Yr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&s)&&(s=r&-r,o=n&-n,s>=o||s===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-an(n),s=1<<t,r|=e[t],n&=~s;return r}function Ng(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pg(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-an(o),i=1<<l,c=s[l];c===-1?(!(i&t)||i&r)&&(s[l]=Ng(i,n)):c<=n&&(e.expiredLanes|=i),o&=~i}}function Va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sf(){var e=qs;return qs<<=1,!(qs&4194240)&&(qs=64),e}function Yl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Os(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-an(n),e[n]=t}function jg(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-an(t),o=1<<s;n[s]=0,r[s]=-1,e[s]=-1,t&=~o}}function nc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-an(t),s=1<<r;s&n|e[r]&n&&(e[r]|=n),t&=~s}}var G=0;function wf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kf,tc,bf,Cf,Nf,Ka=!1,Zs=[],Qn=null,Zn=null,et=null,hs=new Map,gs=new Map,Gn=[],Eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(e,n){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":et=null;break;case"pointerover":case"pointerout":hs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gs.delete(n.pointerId)}}function Rr(e,n,t,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},n!==null&&(n=$s(n),n!==null&&tc(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Tg(e,n,t,r,s){switch(n){case"focusin":return Qn=Rr(Qn,e,n,t,r,s),!0;case"dragenter":return Zn=Rr(Zn,e,n,t,r,s),!0;case"mouseover":return et=Rr(et,e,n,t,r,s),!0;case"pointerover":var o=s.pointerId;return hs.set(o,Rr(hs.get(o)||null,e,n,t,r,s)),!0;case"gotpointercapture":return o=s.pointerId,gs.set(o,Rr(gs.get(o)||null,e,n,t,r,s)),!0}return!1}function Pf(e){var n=St(e.target);if(n!==null){var t=Ot(n);if(t!==null){if(n=t.tag,n===13){if(n=mf(t),n!==null){e.blockedOn=n,Nf(e.priority,function(){bf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ja(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);za=r,t.target.dispatchEvent(r),za=null}else return n=$s(t),n!==null&&tc(n),e.blockedOn=t,!1;n.shift()}return!0}function ju(e,n,t){bo(e)&&t.delete(n)}function Ag(){Ka=!1,Qn!==null&&bo(Qn)&&(Qn=null),Zn!==null&&bo(Zn)&&(Zn=null),et!==null&&bo(et)&&(et=null),hs.forEach(ju),gs.forEach(ju)}function Lr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ka||(Ka=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Ag)))}function xs(e){function n(s){return Lr(s,e)}if(0<Zs.length){Lr(Zs[0],e);for(var t=1;t<Zs.length;t++){var r=Zs[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Qn!==null&&Lr(Qn,e),Zn!==null&&Lr(Zn,e),et!==null&&Lr(et,e),hs.forEach(n),gs.forEach(n),t=0;t<Gn.length;t++)r=Gn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gn.length&&(t=Gn[0],t.blockedOn===null);)Pf(t),t.blockedOn===null&&Gn.shift()}var ur=Rn.ReactCurrentBatchConfig,Wo=!0;function Ig(e,n,t,r){var s=G,o=ur.transition;ur.transition=null;try{G=1,rc(e,n,t,r)}finally{G=s,ur.transition=o}}function _g(e,n,t,r){var s=G,o=ur.transition;ur.transition=null;try{G=4,rc(e,n,t,r)}finally{G=s,ur.transition=o}}function rc(e,n,t,r){if(Wo){var s=Ja(e,n,t,r);if(s===null)la(e,n,r,Go,t),Pu(e,r);else if(Tg(s,e,n,t,r))r.stopPropagation();else if(Pu(e,r),n&4&&-1<Eg.indexOf(e)){for(;s!==null;){var o=$s(s);if(o!==null&&kf(o),o=Ja(e,n,t,r),o===null&&la(e,n,r,Go,t),o===s)break;s=o}s!==null&&r.stopPropagation()}else la(e,n,r,null,t)}}var Go=null;function Ja(e,n,t,r){if(Go=null,e=Zi(r),e=St(e),e!==null)if(n=Ot(e),n===null)e=null;else if(t=n.tag,t===13){if(e=mf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Go=e,null}function jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vg()){case ec:return 1;case yf:return 4;case zo:case Sg:return 16;case vf:return 536870912;default:return 16}default:return 16}}var Jn=null,sc=null,Co=null;function Ef(){if(Co)return Co;var e,n=sc,t=n.length,r,s="value"in Jn?Jn.value:Jn.textContent,o=s.length;for(e=0;e<t&&n[e]===s[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===s[o-r];r++);return Co=s.slice(e,1<r?1-r:void 0)}function No(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function Eu(){return!1}function Ve(e){function n(t,r,s,o,l){this._reactName=t,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?eo:Eu,this.isPropagationStopped=Eu,this}return le(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),n}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=Ve(jr),Ms=le({},jr,{view:0,detail:0}),Dg=Ve(Ms),ql,Ql,Or,wl=le({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(ql=e.screenX-Or.screenX,Ql=e.screenY-Or.screenY):Ql=ql=0,Or=e),ql)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),Tu=Ve(wl),Rg=le({},wl,{dataTransfer:0}),Lg=Ve(Rg),Og=le({},Ms,{relatedTarget:0}),Zl=Ve(Og),Mg=le({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=Ve(Mg),Fg=le({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ug=Ve(Fg),Bg=le({},jr,{data:0}),Au=Ve(Bg),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wg[e])?!!n[e]:!1}function lc(){return Gg}var Vg=le({},Ms,{key:function(e){if(e.key){var n=zg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kg=Ve(Vg),Jg=le({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=Ve(Jg),Xg=le({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),Yg=Ve(Xg),qg=le({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=Ve(qg),Zg=le({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e1=Ve(Zg),n1=[9,13,27,32],ac=Tn&&"CompositionEvent"in window,es=null;Tn&&"documentMode"in document&&(es=document.documentMode);var t1=Tn&&"TextEvent"in window&&!es,Tf=Tn&&(!ac||es&&8<es&&11>=es),_u=" ",Du=!1;function Af(e,n){switch(e){case"keyup":return n1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function r1(e,n){switch(e){case"compositionend":return If(n);case"keypress":return n.which!==32?null:(Du=!0,_u);case"textInput":return e=n.data,e===_u&&Du?null:e;default:return null}}function s1(e,n){if(Xt)return e==="compositionend"||!ac&&Af(e,n)?(e=Ef(),Co=sc=Jn=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Tf&&n.locale!=="ko"?null:n.data;default:return null}}var o1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!o1[e.type]:n==="textarea"}function _f(e,n,t,r){cf(r),n=Vo(n,"onChange"),0<n.length&&(t=new oc("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ns=null,ys=null;function l1(e){Hf(e,0)}function kl(e){var n=Qt(e);if(nf(n))return e}function a1(e,n){if(e==="change")return n}var Df=!1;if(Tn){var ea;if(Tn){var na="oninput"in document;if(!na){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),na=typeof Lu.oninput=="function"}ea=na}else ea=!1;Df=ea&&(!document.documentMode||9<document.documentMode)}function Ou(){ns&&(ns.detachEvent("onpropertychange",Rf),ys=ns=null)}function Rf(e){if(e.propertyName==="value"&&kl(ys)){var n=[];_f(n,ys,e,Zi(e)),ff(l1,n)}}function i1(e,n,t){e==="focusin"?(Ou(),ns=n,ys=t,ns.attachEvent("onpropertychange",Rf)):e==="focusout"&&Ou()}function c1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(ys)}function u1(e,n){if(e==="click")return kl(n)}function d1(e,n){if(e==="input"||e==="change")return kl(n)}function p1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var dn=typeof Object.is=="function"?Object.is:p1;function vs(e,n){if(dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var s=t[r];if(!Aa.call(n,s)||!dn(e[s],n[s]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $u(e,n){var t=Mu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Mu(t)}}function Lf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Of(){for(var e=window,n=Fo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Fo(e.document)}return n}function ic(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function f1(e){var n=Of(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Lf(t.ownerDocument.documentElement,t)){if(r!==null&&ic(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=$u(t,o);var l=$u(t,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var m1=Tn&&"documentMode"in document&&11>=document.documentMode,Yt=null,Xa=null,ts=null,Ya=!1;function Fu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ya||Yt==null||Yt!==Fo(r)||(r=Yt,"selectionStart"in r&&ic(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&vs(ts,r)||(ts=r,r=Vo(Xa,"onSelect"),0<r.length&&(n=new oc("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Yt)))}function no(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var qt={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},ta={},Mf={};Tn&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function bl(e){if(ta[e])return ta[e];if(!qt[e])return e;var n=qt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Mf)return ta[e]=n[t];return e}var $f=bl("animationend"),Ff=bl("animationiteration"),Uf=bl("animationstart"),Bf=bl("transitionend"),zf=new Map,Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ut(e,n){zf.set(e,n),Lt(n,[e])}for(var ra=0;ra<Uu.length;ra++){var sa=Uu[ra],h1=sa.toLowerCase(),g1=sa[0].toUpperCase()+sa.slice(1);ut(h1,"on"+g1)}ut($f,"onAnimationEnd");ut(Ff,"onAnimationIteration");ut(Uf,"onAnimationStart");ut("dblclick","onDoubleClick");ut("focusin","onFocus");ut("focusout","onBlur");ut(Bf,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x1=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function Bu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,hg(r,n,void 0,e),e.currentTarget=null}function Hf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],s=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var i=r[l],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==o&&s.isPropagationStopped())break e;Bu(s,i,u),o=c}else for(l=0;l<r.length;l++){if(i=r[l],c=i.instance,u=i.currentTarget,i=i.listener,c!==o&&s.isPropagationStopped())break e;Bu(s,i,u),o=c}}}if(Bo)throw e=Ga,Bo=!1,Ga=null,e}function ee(e,n){var t=n[ni];t===void 0&&(t=n[ni]=new Set);var r=e+"__bubble";t.has(r)||(Wf(n,e,2,!1),t.add(r))}function oa(e,n,t){var r=0;n&&(r|=4),Wf(t,e,r,n)}var to="_reactListening"+Math.random().toString(36).slice(2);function Ss(e){if(!e[to]){e[to]=!0,Yp.forEach(function(t){t!=="selectionchange"&&(x1.has(t)||oa(t,!1,e),oa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[to]||(n[to]=!0,oa("selectionchange",!1,n))}}function Wf(e,n,t,r){switch(jf(n)){case 1:var s=Ig;break;case 4:s=_g;break;default:s=rc}t=s.bind(null,n,t,e),s=void 0,!Wa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function la(e,n,t,r,s){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;i!==null;){if(l=St(i),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}i=i.parentNode}}r=r.return}ff(function(){var u=o,d=Zi(t),f=[];e:{var m=zf.get(e);if(m!==void 0){var y=oc,v=e;switch(e){case"keypress":if(No(t)===0)break e;case"keydown":case"keyup":y=Kg;break;case"focusin":v="focus",y=Zl;break;case"focusout":v="blur",y=Zl;break;case"beforeblur":case"afterblur":y=Zl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Yg;break;case $f:case Ff:case Uf:y=$g;break;case Bf:y=Qg;break;case"scroll":y=Dg;break;case"wheel":y=e1;break;case"copy":case"cut":case"paste":y=Ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Iu}var w=(n&4)!==0,b=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var p=u,g;p!==null;){g=p;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=ms(p,h),S!=null&&w.push(ws(p,S,g)))),b)break;p=p.return}0<w.length&&(m=new y(m,v,null,t,d),f.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==za&&(v=t.relatedTarget||t.fromElement)&&(St(v)||v[An]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=u,v=v?St(v):null,v!==null&&(b=Ot(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Tu,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Iu,S="onPointerLeave",h="onPointerEnter",p="pointer"),b=y==null?m:Qt(y),g=v==null?m:Qt(v),m=new w(S,p+"leave",y,t,d),m.target=b,m.relatedTarget=g,S=null,St(d)===u&&(w=new w(h,p+"enter",v,t,d),w.target=g,w.relatedTarget=b,S=w),b=S,y&&v)n:{for(w=y,h=v,p=0,g=w;g;g=Bt(g))p++;for(g=0,S=h;S;S=Bt(S))g++;for(;0<p-g;)w=Bt(w),p--;for(;0<g-p;)h=Bt(h),g--;for(;p--;){if(w===h||h!==null&&w===h.alternate)break n;w=Bt(w),h=Bt(h)}w=null}else w=null;y!==null&&zu(f,m,y,w,!1),v!==null&&b!==null&&zu(f,b,v,w,!0)}}e:{if(m=u?Qt(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var k=a1;else if(Ru(m))if(Df)k=d1;else{k=c1;var C=i1}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=u1);if(k&&(k=k(e,u))){_f(f,k,t,d);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Ma(m,"number",m.value)}switch(C=u?Qt(u):window,e){case"focusin":(Ru(C)||C.contentEditable==="true")&&(Yt=C,Xa=u,ts=null);break;case"focusout":ts=Xa=Yt=null;break;case"mousedown":Ya=!0;break;case"contextmenu":case"mouseup":case"dragend":Ya=!1,Fu(f,t,d);break;case"selectionchange":if(m1)break;case"keydown":case"keyup":Fu(f,t,d)}var E;if(ac)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Xt?Af(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Tf&&t.locale!=="ko"&&(Xt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Xt&&(E=Ef()):(Jn=d,sc="value"in Jn?Jn.value:Jn.textContent,Xt=!0)),C=Vo(u,N),0<C.length&&(N=new Au(N,e,null,t,d),f.push({event:N,listeners:C}),E?N.data=E:(E=If(t),E!==null&&(N.data=E)))),(E=t1?r1(e,t):s1(e,t))&&(u=Vo(u,"onBeforeInput"),0<u.length&&(d=new Au("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:u}),d.data=E))}Hf(f,n)})}function ws(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Vo(e,n){for(var t=n+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=ms(e,t),o!=null&&r.unshift(ws(e,o,s)),o=ms(e,n),o!=null&&r.push(ws(e,o,s))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,n,t,r,s){for(var o=n._reactName,l=[];t!==null&&t!==r;){var i=t,c=i.alternate,u=i.stateNode;if(c!==null&&c===r)break;i.tag===5&&u!==null&&(i=u,s?(c=ms(t,o),c!=null&&l.unshift(ws(t,c,i))):s||(c=ms(t,o),c!=null&&l.push(ws(t,c,i)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var y1=/\r\n?/g,v1=/\u0000|\uFFFD/g;function Hu(e){return(typeof e=="string"?e:""+e).replace(y1,`
`).replace(v1,"")}function ro(e,n,t){if(n=Hu(n),Hu(e)!==n&&t)throw Error(j(425))}function Ko(){}var qa=null,Qa=null;function Za(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ei=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,Wu=typeof Promise=="function"?Promise:void 0,w1=typeof queueMicrotask=="function"?queueMicrotask:typeof Wu<"u"?function(e){return Wu.resolve(null).then(e).catch(k1)}:ei;function k1(e){setTimeout(function(){throw e})}function aa(e,n){var t=n,r=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(r===0){e.removeChild(s),xs(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=s}while(t);xs(n)}function nt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Gu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),xn="__reactFiber$"+Er,ks="__reactProps$"+Er,An="__reactContainer$"+Er,ni="__reactEvents$"+Er,b1="__reactListeners$"+Er,C1="__reactHandles$"+Er;function St(e){var n=e[xn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[An]||t[xn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Gu(e);e!==null;){if(t=e[xn])return t;e=Gu(e)}return n}e=t,t=e.parentNode}return null}function $s(e){return e=e[xn]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Cl(e){return e[ks]||null}var ti=[],Zt=-1;function dt(e){return{current:e}}function ne(e){0>Zt||(e.current=ti[Zt],ti[Zt]=null,Zt--)}function Q(e,n){Zt++,ti[Zt]=e.current,e.current=n}var it={},be=dt(it),De=dt(!1),Tt=it;function yr(e,n){var t=e.type.contextTypes;if(!t)return it;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in t)s[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function Re(e){return e=e.childContextTypes,e!=null}function Jo(){ne(De),ne(be)}function Vu(e,n,t){if(be.current!==it)throw Error(j(168));Q(be,n),Q(De,t)}function Gf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(j(108,ig(e)||"Unknown",s));return le({},t,r)}function Xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||it,Tt=be.current,Q(be,e),Q(De,De.current),!0}function Ku(e,n,t){var r=e.stateNode;if(!r)throw Error(j(169));t?(e=Gf(e,n,Tt),r.__reactInternalMemoizedMergedChildContext=e,ne(De),ne(be),Q(be,e)):ne(De),Q(De,t)}var Nn=null,Nl=!1,ia=!1;function Vf(e){Nn===null?Nn=[e]:Nn.push(e)}function N1(e){Nl=!0,Vf(e)}function pt(){if(!ia&&Nn!==null){ia=!0;var e=0,n=G;try{var t=Nn;for(G=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Nn=null,Nl=!1}catch(s){throw Nn!==null&&(Nn=Nn.slice(e+1)),xf(ec,pt),s}finally{G=n,ia=!1}}return null}var er=[],nr=0,Yo=null,qo=0,Xe=[],Ye=0,At=null,Pn=1,jn="";function yt(e,n){er[nr++]=qo,er[nr++]=Yo,Yo=e,qo=n}function Kf(e,n,t){Xe[Ye++]=Pn,Xe[Ye++]=jn,Xe[Ye++]=At,At=e;var r=Pn;e=jn;var s=32-an(r)-1;r&=~(1<<s),t+=1;var o=32-an(n)+s;if(30<o){var l=s-s%5;o=(r&(1<<l)-1).toString(32),r>>=l,s-=l,Pn=1<<32-an(n)+s|t<<s|r,jn=o+e}else Pn=1<<o|t<<s|r,jn=e}function cc(e){e.return!==null&&(yt(e,1),Kf(e,1,0))}function uc(e){for(;e===Yo;)Yo=er[--nr],er[nr]=null,qo=er[--nr],er[nr]=null;for(;e===At;)At=Xe[--Ye],Xe[Ye]=null,jn=Xe[--Ye],Xe[Ye]=null,Pn=Xe[--Ye],Xe[Ye]=null}var He=null,ze=null,te=!1,ln=null;function Jf(e,n){var t=Ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ju(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,He=e,ze=nt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,He=e,ze=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=At!==null?{id:Pn,overflow:jn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,He=e,ze=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function si(e){if(te){var n=ze;if(n){var t=n;if(!Ju(e,n)){if(ri(e))throw Error(j(418));n=nt(t.nextSibling);var r=He;n&&Ju(e,n)?Jf(r,t):(e.flags=e.flags&-4097|2,te=!1,He=e)}}else{if(ri(e))throw Error(j(418));e.flags=e.flags&-4097|2,te=!1,He=e}}}function Xu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function so(e){if(e!==He)return!1;if(!te)return Xu(e),te=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Za(e.type,e.memoizedProps)),n&&(n=ze)){if(ri(e))throw Xf(),Error(j(418));for(;n;)Jf(e,n),n=nt(n.nextSibling)}if(Xu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ze=nt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ze=null}}else ze=He?nt(e.stateNode.nextSibling):null;return!0}function Xf(){for(var e=ze;e;)e=nt(e.nextSibling)}function vr(){ze=He=null,te=!1}function dc(e){ln===null?ln=[e]:ln.push(e)}var P1=Rn.ReactCurrentBatchConfig;function Mr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(j(309));var r=t.stateNode}if(!r)throw Error(j(147,e));var s=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var i=s.refs;l===null?delete i[o]:i[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(j(284));if(!t._owner)throw Error(j(290,e))}return e}function oo(e,n){throw e=Object.prototype.toString.call(n),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Yu(e){var n=e._init;return n(e._payload)}function Yf(e){function n(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function t(h,p){if(!e)return null;for(;p!==null;)n(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function s(h,p){return h=ot(h,p),h.index=0,h.sibling=null,h}function o(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function i(h,p,g,S){return p===null||p.tag!==6?(p=ha(g,h.mode,S),p.return=h,p):(p=s(p,g),p.return=h,p)}function c(h,p,g,S){var k=g.type;return k===Jt?d(h,p,g.props.children,S,g.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Hn&&Yu(k)===p.type)?(S=s(p,g.props),S.ref=Mr(h,p,g),S.return=h,S):(S=_o(g.type,g.key,g.props,null,h.mode,S),S.ref=Mr(h,p,g),S.return=h,S)}function u(h,p,g,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ga(g,h.mode,S),p.return=h,p):(p=s(p,g.children||[]),p.return=h,p)}function d(h,p,g,S,k){return p===null||p.tag!==7?(p=jt(g,h.mode,S,k),p.return=h,p):(p=s(p,g),p.return=h,p)}function f(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ha(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Js:return g=_o(p.type,p.key,p.props,null,h.mode,g),g.ref=Mr(h,null,p),g.return=h,g;case Kt:return p=ga(p,h.mode,g),p.return=h,p;case Hn:var S=p._init;return f(h,S(p._payload),g)}if(Xr(p)||_r(p))return p=jt(p,h.mode,g,null),p.return=h,p;oo(h,p)}return null}function m(h,p,g,S){var k=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:i(h,p,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:return g.key===k?c(h,p,g,S):null;case Kt:return g.key===k?u(h,p,g,S):null;case Hn:return k=g._init,m(h,p,k(g._payload),S)}if(Xr(g)||_r(g))return k!==null?null:d(h,p,g,S,null);oo(h,g)}return null}function y(h,p,g,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,i(p,h,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Js:return h=h.get(S.key===null?g:S.key)||null,c(p,h,S,k);case Kt:return h=h.get(S.key===null?g:S.key)||null,u(p,h,S,k);case Hn:var C=S._init;return y(h,p,g,C(S._payload),k)}if(Xr(S)||_r(S))return h=h.get(g)||null,d(p,h,S,k,null);oo(p,S)}return null}function v(h,p,g,S){for(var k=null,C=null,E=p,N=p=0,U=null;E!==null&&N<g.length;N++){E.index>N?(U=E,E=null):U=E.sibling;var I=m(h,E,g[N],S);if(I===null){E===null&&(E=U);break}e&&E&&I.alternate===null&&n(h,E),p=o(I,p,N),C===null?k=I:C.sibling=I,C=I,E=U}if(N===g.length)return t(h,E),te&&yt(h,N),k;if(E===null){for(;N<g.length;N++)E=f(h,g[N],S),E!==null&&(p=o(E,p,N),C===null?k=E:C.sibling=E,C=E);return te&&yt(h,N),k}for(E=r(h,E);N<g.length;N++)U=y(E,h,N,g[N],S),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?N:U.key),p=o(U,p,N),C===null?k=U:C.sibling=U,C=U);return e&&E.forEach(function(L){return n(h,L)}),te&&yt(h,N),k}function w(h,p,g,S){var k=_r(g);if(typeof k!="function")throw Error(j(150));if(g=k.call(g),g==null)throw Error(j(151));for(var C=k=null,E=p,N=p=0,U=null,I=g.next();E!==null&&!I.done;N++,I=g.next()){E.index>N?(U=E,E=null):U=E.sibling;var L=m(h,E,I.value,S);if(L===null){E===null&&(E=U);break}e&&E&&L.alternate===null&&n(h,E),p=o(L,p,N),C===null?k=L:C.sibling=L,C=L,E=U}if(I.done)return t(h,E),te&&yt(h,N),k;if(E===null){for(;!I.done;N++,I=g.next())I=f(h,I.value,S),I!==null&&(p=o(I,p,N),C===null?k=I:C.sibling=I,C=I);return te&&yt(h,N),k}for(E=r(h,E);!I.done;N++,I=g.next())I=y(E,h,N,I.value,S),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?N:I.key),p=o(I,p,N),C===null?k=I:C.sibling=I,C=I);return e&&E.forEach(function(J){return n(h,J)}),te&&yt(h,N),k}function b(h,p,g,S){if(typeof g=="object"&&g!==null&&g.type===Jt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:e:{for(var k=g.key,C=p;C!==null;){if(C.key===k){if(k=g.type,k===Jt){if(C.tag===7){t(h,C.sibling),p=s(C,g.props.children),p.return=h,h=p;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Hn&&Yu(k)===C.type){t(h,C.sibling),p=s(C,g.props),p.ref=Mr(h,C,g),p.return=h,h=p;break e}t(h,C);break}else n(h,C);C=C.sibling}g.type===Jt?(p=jt(g.props.children,h.mode,S,g.key),p.return=h,h=p):(S=_o(g.type,g.key,g.props,null,h.mode,S),S.ref=Mr(h,p,g),S.return=h,h=S)}return l(h);case Kt:e:{for(C=g.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){t(h,p.sibling),p=s(p,g.children||[]),p.return=h,h=p;break e}else{t(h,p);break}else n(h,p);p=p.sibling}p=ga(g,h.mode,S),p.return=h,h=p}return l(h);case Hn:return C=g._init,b(h,p,C(g._payload),S)}if(Xr(g))return v(h,p,g,S);if(_r(g))return w(h,p,g,S);oo(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(t(h,p.sibling),p=s(p,g),p.return=h,h=p):(t(h,p),p=ha(g,h.mode,S),p.return=h,h=p),l(h)):t(h,p)}return b}var Sr=Yf(!0),qf=Yf(!1),Qo=dt(null),Zo=null,tr=null,pc=null;function fc(){pc=tr=Zo=null}function mc(e){var n=Qo.current;ne(Qo),e._currentValue=n}function oi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function dr(e,n){Zo=e,pc=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(_e=!0),e.firstContext=null)}function nn(e){var n=e._currentValue;if(pc!==e)if(e={context:e,memoizedValue:n,next:null},tr===null){if(Zo===null)throw Error(j(308));tr=e,Zo.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return n}var wt=null;function hc(e){wt===null?wt=[e]:wt.push(e)}function Qf(e,n,t,r){var s=n.interleaved;return s===null?(t.next=t,hc(n)):(t.next=s.next,s.next=t),n.interleaved=t,In(e,r)}function In(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Wn=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function tt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,In(e,t)}return s=r.interleaved,s===null?(n.next=n,hc(r)):(n.next=s.next,s.next=n),r.interleaved=n,In(e,t)}function Po(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,nc(e,t)}}function qu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var s=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?s=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?s=o=n:o=o.next=n}else s=o=n;t={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function el(e,n,t,r){var s=e.updateQueue;Wn=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var c=i,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==l&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=s.baseState;l=0,d=u=c=null,i=o;do{var m=i.lane,y=i.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var v=e,w=i;switch(m=n,y=t,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(y,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(y,f,m):v,m==null)break e;f=le({},f,m);break e;case 2:Wn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=s.effects,m===null?s.effects=[i]:m.push(i))}else y={eventTime:y,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=y,c=f):d=d.next=y,l|=m;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;m=i,i=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(d===null&&(c=f),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,n=s.shared.interleaved,n!==null){s=n;do l|=s.lane,s=s.next;while(s!==n)}else o===null&&(s.shared.lanes=0);_t|=l,e.lanes=l,e.memoizedState=f}}function Qu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],s=r.callback;if(s!==null){if(r.callback=null,r=t,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Fs={},wn=dt(Fs),bs=dt(Fs),Cs=dt(Fs);function kt(e){if(e===Fs)throw Error(j(174));return e}function xc(e,n){switch(Q(Cs,n),Q(bs,e),Q(wn,Fs),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Fa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Fa(n,e)}ne(wn),Q(wn,n)}function wr(){ne(wn),ne(bs),ne(Cs)}function em(e){kt(Cs.current);var n=kt(wn.current),t=Fa(n,e.type);n!==t&&(Q(bs,e),Q(wn,t))}function yc(e){bs.current===e&&(ne(wn),ne(bs))}var re=dt(0);function nl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=[];function vc(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var jo=Rn.ReactCurrentDispatcher,ua=Rn.ReactCurrentBatchConfig,It=0,se=null,pe=null,he=null,tl=!1,rs=!1,Ns=0,j1=0;function Se(){throw Error(j(321))}function Sc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!dn(e[t],n[t]))return!1;return!0}function wc(e,n,t,r,s,o){if(It=o,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,jo.current=e===null||e.memoizedState===null?I1:_1,e=t(r,s),rs){o=0;do{if(rs=!1,Ns=0,25<=o)throw Error(j(301));o+=1,he=pe=null,n.updateQueue=null,jo.current=D1,e=t(r,s)}while(rs)}if(jo.current=rl,n=pe!==null&&pe.next!==null,It=0,he=pe=se=null,tl=!1,n)throw Error(j(300));return e}function kc(){var e=Ns!==0;return Ns=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?se.memoizedState=he=e:he=he.next=e,he}function tn(){if(pe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=he===null?se.memoizedState:he.next;if(n!==null)he=n,pe=e;else{if(e===null)throw Error(j(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},he===null?se.memoizedState=he=e:he=he.next=e}return he}function Ps(e,n){return typeof n=="function"?n(e):n}function da(e){var n=tn(),t=n.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var r=pe,s=r.baseQueue,o=t.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}r.baseQueue=s=o,t.pending=null}if(s!==null){o=s.next,r=r.baseState;var i=l=null,c=null,u=o;do{var d=u.lane;if((It&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=f,l=r):c=c.next=f,se.lanes|=d,_t|=d}u=u.next}while(u!==null&&u!==o);c===null?l=r:c.next=i,dn(r,n.memoizedState)||(_e=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){s=e;do o=s.lane,se.lanes|=o,_t|=o,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function pa(e){var n=tn(),t=n.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var r=t.dispatch,s=t.pending,o=n.memoizedState;if(s!==null){t.pending=null;var l=s=s.next;do o=e(o,l.action),l=l.next;while(l!==s);dn(o,n.memoizedState)||(_e=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function nm(){}function tm(e,n){var t=se,r=tn(),s=n(),o=!dn(r.memoizedState,s);if(o&&(r.memoizedState=s,_e=!0),r=r.queue,bc(om.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||he!==null&&he.memoizedState.tag&1){if(t.flags|=2048,js(9,sm.bind(null,t,r,s,n),void 0,null),ge===null)throw Error(j(349));It&30||rm(t,n,s)}return s}function rm(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=se.updateQueue,n===null?(n={lastEffect:null,stores:null},se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function sm(e,n,t,r){n.value=t,n.getSnapshot=r,lm(n)&&am(e)}function om(e,n,t){return t(function(){lm(n)&&am(e)})}function lm(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!dn(e,t)}catch{return!0}}function am(e){var n=In(e,1);n!==null&&cn(n,e,1,-1)}function Zu(e){var n=gn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:e},n.queue=e,e=e.dispatch=A1.bind(null,se,e),[n.memoizedState,e]}function js(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=se.updateQueue,n===null?(n={lastEffect:null,stores:null},se.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function im(){return tn().memoizedState}function Eo(e,n,t,r){var s=gn();se.flags|=e,s.memoizedState=js(1|n,t,void 0,r===void 0?null:r)}function Pl(e,n,t,r){var s=tn();r=r===void 0?null:r;var o=void 0;if(pe!==null){var l=pe.memoizedState;if(o=l.destroy,r!==null&&Sc(r,l.deps)){s.memoizedState=js(n,t,o,r);return}}se.flags|=e,s.memoizedState=js(1|n,t,o,r)}function ed(e,n){return Eo(8390656,8,e,n)}function bc(e,n){return Pl(2048,8,e,n)}function cm(e,n){return Pl(4,2,e,n)}function um(e,n){return Pl(4,4,e,n)}function dm(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function pm(e,n,t){return t=t!=null?t.concat([e]):null,Pl(4,4,dm.bind(null,n,e),t)}function Cc(){}function fm(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Sc(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function mm(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Sc(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function hm(e,n,t){return It&21?(dn(t,n)||(t=Sf(),se.lanes|=t,_t|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=t)}function E1(e,n){var t=G;G=t!==0&&4>t?t:4,e(!0);var r=ua.transition;ua.transition={};try{e(!1),n()}finally{G=t,ua.transition=r}}function gm(){return tn().memoizedState}function T1(e,n,t){var r=st(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},xm(e))ym(n,t);else if(t=Qf(e,n,t,r),t!==null){var s=Ee();cn(t,e,r,s),vm(t,n,r)}}function A1(e,n,t){var r=st(e),s={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(xm(e))ym(n,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,i=o(l,t);if(s.hasEagerState=!0,s.eagerState=i,dn(i,l)){var c=n.interleaved;c===null?(s.next=s,hc(n)):(s.next=c.next,c.next=s),n.interleaved=s;return}}catch{}finally{}t=Qf(e,n,s,r),t!==null&&(s=Ee(),cn(t,e,r,s),vm(t,n,r))}}function xm(e){var n=e.alternate;return e===se||n!==null&&n===se}function ym(e,n){rs=tl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function vm(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,nc(e,t)}}var rl={readContext:nn,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},I1={readContext:nn,useCallback:function(e,n){return gn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:ed,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Eo(4194308,4,dm.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Eo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Eo(4,2,e,n)},useMemo:function(e,n){var t=gn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=gn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=T1.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var n=gn();return e={current:e},n.memoizedState=e},useState:Zu,useDebugValue:Cc,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Zu(!1),n=e[0];return e=E1.bind(null,e[1]),gn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=se,s=gn();if(te){if(t===void 0)throw Error(j(407));t=t()}else{if(t=n(),ge===null)throw Error(j(349));It&30||rm(r,n,t)}s.memoizedState=t;var o={value:t,getSnapshot:n};return s.queue=o,ed(om.bind(null,r,o,e),[e]),r.flags|=2048,js(9,sm.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=gn(),n=ge.identifierPrefix;if(te){var t=jn,r=Pn;t=(r&~(1<<32-an(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ns++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=j1++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},_1={readContext:nn,useCallback:fm,useContext:nn,useEffect:bc,useImperativeHandle:pm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:mm,useReducer:da,useRef:im,useState:function(){return da(Ps)},useDebugValue:Cc,useDeferredValue:function(e){var n=tn();return hm(n,pe.memoizedState,e)},useTransition:function(){var e=da(Ps)[0],n=tn().memoizedState;return[e,n]},useMutableSource:nm,useSyncExternalStore:tm,useId:gm,unstable_isNewReconciler:!1},D1={readContext:nn,useCallback:fm,useContext:nn,useEffect:bc,useImperativeHandle:pm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:mm,useReducer:pa,useRef:im,useState:function(){return pa(Ps)},useDebugValue:Cc,useDeferredValue:function(e){var n=tn();return pe===null?n.memoizedState=e:hm(n,pe.memoizedState,e)},useTransition:function(){var e=pa(Ps)[0],n=tn().memoizedState;return[e,n]},useMutableSource:nm,useSyncExternalStore:tm,useId:gm,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=le({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function li(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:le({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var jl={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ee(),s=st(e),o=En(r,s);o.payload=n,t!=null&&(o.callback=t),n=tt(e,o,s),n!==null&&(cn(n,e,s,r),Po(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ee(),s=st(e),o=En(r,s);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=tt(e,o,s),n!==null&&(cn(n,e,s,r),Po(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ee(),r=st(e),s=En(t,r);s.tag=2,n!=null&&(s.callback=n),n=tt(e,s,r),n!==null&&(cn(n,e,r,t),Po(n,e,r))}};function nd(e,n,t,r,s,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!vs(t,r)||!vs(s,o):!0}function Sm(e,n,t){var r=!1,s=it,o=n.contextType;return typeof o=="object"&&o!==null?o=nn(o):(s=Re(n)?Tt:be.current,r=n.contextTypes,o=(r=r!=null)?yr(e,s):it),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=jl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),n}function td(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&jl.enqueueReplaceState(n,n.state,null)}function ai(e,n,t,r){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},gc(e);var o=n.contextType;typeof o=="object"&&o!==null?s.context=nn(o):(o=Re(n)?Tt:be.current,s.context=yr(e,o)),s.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(li(e,n,o,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&jl.enqueueReplaceState(s,s.state,null),el(e,t,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function kr(e,n){try{var t="",r=n;do t+=ag(r),r=r.return;while(r);var s=t}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:s,digest:null}}function fa(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ii(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var R1=typeof WeakMap=="function"?WeakMap:Map;function wm(e,n,t){t=En(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ol||(ol=!0,yi=r),ii(e,n)},t}function km(e,n,t){t=En(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;t.payload=function(){return r(s)},t.callback=function(){ii(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ii(e,n),typeof r!="function"&&(rt===null?rt=new Set([this]):rt.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function rd(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new R1;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(t)||(s.add(t),e=J1.bind(null,e,n,t),n.then(e,e))}function sd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function od(e,n,t,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=En(-1,1),n.tag=2,tt(t,n,1))),t.lanes|=1),e)}var L1=Rn.ReactCurrentOwner,_e=!1;function Ne(e,n,t,r){n.child=e===null?qf(n,null,t,r):Sr(n,e.child,t,r)}function ld(e,n,t,r,s){t=t.render;var o=n.ref;return dr(n,s),r=wc(e,n,t,r,o,s),t=kc(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,_n(e,n,s)):(te&&t&&cc(n),n.flags|=1,Ne(e,n,r,s),n.child)}function ad(e,n,t,r,s){if(e===null){var o=t.type;return typeof o=="function"&&!_c(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,bm(e,n,o,r,s)):(e=_o(t.type,null,r,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&s)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:vs,t(l,r)&&e.ref===n.ref)return _n(e,n,s)}return n.flags|=1,e=ot(o,r),e.ref=n.ref,e.return=n,n.child=e}function bm(e,n,t,r,s){if(e!==null){var o=e.memoizedProps;if(vs(o,r)&&e.ref===n.ref)if(_e=!1,n.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(_e=!0);else return n.lanes=e.lanes,_n(e,n,s)}return ci(e,n,t,r,s)}function Cm(e,n,t){var r=n.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(sr,Fe),Fe|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Q(sr,Fe),Fe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,Q(sr,Fe),Fe|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,Q(sr,Fe),Fe|=r;return Ne(e,n,s,t),n.child}function Nm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ci(e,n,t,r,s){var o=Re(t)?Tt:be.current;return o=yr(n,o),dr(n,s),t=wc(e,n,t,r,o,s),r=kc(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,_n(e,n,s)):(te&&r&&cc(n),n.flags|=1,Ne(e,n,t,s),n.child)}function id(e,n,t,r,s){if(Re(t)){var o=!0;Xo(n)}else o=!1;if(dr(n,s),n.stateNode===null)To(e,n),Sm(n,t,r),ai(n,t,r,s),r=!0;else if(e===null){var l=n.stateNode,i=n.memoizedProps;l.props=i;var c=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=Re(t)?Tt:be.current,u=yr(n,u));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||c!==u)&&td(n,l,r,u),Wn=!1;var m=n.memoizedState;l.state=m,el(n,r,l,s),c=n.memoizedState,i!==r||m!==c||De.current||Wn?(typeof d=="function"&&(li(n,t,d,r),c=n.memoizedState),(i=Wn||nd(n,t,i,r,m,c,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),l.props=r,l.state=c,l.context=u,r=i):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Zf(e,n),i=n.memoizedProps,u=n.type===n.elementType?i:sn(n.type,i),l.props=u,f=n.pendingProps,m=l.context,c=t.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=Re(t)?Tt:be.current,c=yr(n,c));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==f||m!==c)&&td(n,l,r,c),Wn=!1,m=n.memoizedState,l.state=m,el(n,r,l,s);var v=n.memoizedState;i!==f||m!==v||De.current||Wn?(typeof y=="function"&&(li(n,t,y,r),v=n.memoizedState),(u=Wn||nd(n,t,u,r,m,v,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),l.props=r,l.state=v,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return ui(e,n,t,r,o,s)}function ui(e,n,t,r,s,o){Nm(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return s&&Ku(n,t,!1),_n(e,n,o);r=n.stateNode,L1.current=n;var i=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Sr(n,e.child,null,o),n.child=Sr(n,null,i,o)):Ne(e,n,i,o),n.memoizedState=r.state,s&&Ku(n,t,!0),n.child}function Pm(e){var n=e.stateNode;n.pendingContext?Vu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Vu(e,n.context,!1),xc(e,n.containerInfo)}function cd(e,n,t,r,s){return vr(),dc(s),n.flags|=256,Ne(e,n,t,r),n.child}var di={dehydrated:null,treeContext:null,retryLane:0};function pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function jm(e,n,t){var r=n.pendingProps,s=re.current,o=!1,l=(n.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Q(re,s&1),e===null)return si(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Al(l,r,0,null),e=jt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=pi(t),n.memoizedState=di,e):Nc(n,l));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return O1(e,n,l,r,i,s,t);if(o){o=r.fallback,l=n.mode,s=e.child,i=s.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=ot(s,c),r.subtreeFlags=s.subtreeFlags&14680064),i!==null?o=ot(i,o):(o=jt(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?pi(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=di,r}return o=e.child,e=o.sibling,r=ot(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Nc(e,n){return n=Al({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function lo(e,n,t,r){return r!==null&&dc(r),Sr(n,e.child,null,t),e=Nc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function O1(e,n,t,r,s,o,l){if(t)return n.flags&256?(n.flags&=-257,r=fa(Error(j(422))),lo(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,s=n.mode,r=Al({mode:"visible",children:r.children},s,0,null),o=jt(o,s,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Sr(n,e.child,null,l),n.child.memoizedState=pi(l),n.memoizedState=di,o);if(!(n.mode&1))return lo(e,n,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var i=r.dgst;return r=i,o=Error(j(419)),r=fa(o,r,void 0),lo(e,n,l,r)}if(i=(l&e.childLanes)!==0,_e||i){if(r=ge,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,In(e,s),cn(r,e,s,-1))}return Ic(),r=fa(Error(j(421))),lo(e,n,l,r)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=X1.bind(null,e),s._reactRetry=n,null):(e=o.treeContext,ze=nt(s.nextSibling),He=n,te=!0,ln=null,e!==null&&(Xe[Ye++]=Pn,Xe[Ye++]=jn,Xe[Ye++]=At,Pn=e.id,jn=e.overflow,At=n),n=Nc(n,r.children),n.flags|=4096,n)}function ud(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),oi(e.return,n,t)}function ma(e,n,t,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:s}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=s)}function Em(e,n,t){var r=n.pendingProps,s=r.revealOrder,o=r.tail;if(Ne(e,n,r.children,t),r=re.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,t,n);else if(e.tag===19)ud(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(re,r),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&nl(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),ma(n,!1,s,t,o);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&nl(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}ma(n,!0,t,null,o);break;case"together":ma(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function To(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function _n(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_t|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(j(153));if(n.child!==null){for(e=n.child,t=ot(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ot(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function M1(e,n,t){switch(n.tag){case 3:Pm(n),vr();break;case 5:em(n);break;case 1:Re(n.type)&&Xo(n);break;case 4:xc(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;Q(Qo,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Q(re,re.current&1),n.flags|=128,null):t&n.child.childLanes?jm(e,n,t):(Q(re,re.current&1),e=_n(e,n,t),e!==null?e.sibling:null);Q(re,re.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Em(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Q(re,re.current),r)break;return null;case 22:case 23:return n.lanes=0,Cm(e,n,t)}return _n(e,n,t)}var Tm,fi,Am,Im;Tm=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fi=function(){};Am=function(e,n,t,r){var s=e.memoizedProps;if(s!==r){e=n.stateNode,kt(wn.current);var o=null;switch(t){case"input":s=La(e,s),r=La(e,r),o=[];break;case"select":s=le({},s,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":s=$a(e,s),r=$a(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ko)}Ua(t,r);var l;t=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var i=s[u];for(l in i)i.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ps.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(i=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(t||(t={}),t[l]=c[l])}else t||(o||(o=[]),o.push(u,t)),t=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ps.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ee("scroll",e),o||i===c||(o=[])):(o=o||[]).push(u,c))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Im=function(e,n,t,r){t!==r&&(n.flags|=4)};function $r(e,n){if(!te)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function $1(e,n,t){var r=n.pendingProps;switch(uc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(n),null;case 1:return Re(n.type)&&Jo(),we(n),null;case 3:return r=n.stateNode,wr(),ne(De),ne(be),vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ln!==null&&(wi(ln),ln=null))),fi(e,n),we(n),null;case 5:yc(n);var s=kt(Cs.current);if(t=n.type,e!==null&&n.stateNode!=null)Am(e,n,t,r,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(j(166));return we(n),null}if(e=kt(wn.current),so(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[xn]=n,r[ks]=o,e=(n.mode&1)!==0,t){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(s=0;s<qr.length;s++)ee(qr[s],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":vu(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":wu(r,o),ee("invalid",r)}Ua(t,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="children"?typeof i=="string"?r.textContent!==i&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,i,e),s=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,i,e),s=["children",""+i]):ps.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&ee("scroll",r)}switch(t){case"input":Xs(r),Su(r,o,!0);break;case"textarea":Xs(r),ku(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ko)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sf(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[xn]=n,e[ks]=r,Tm(e,n,!1,!1),n.stateNode=e;e:{switch(l=Ba(t,r),t){case"dialog":ee("cancel",e),ee("close",e),s=r;break;case"iframe":case"object":case"embed":ee("load",e),s=r;break;case"video":case"audio":for(s=0;s<qr.length;s++)ee(qr[s],e);s=r;break;case"source":ee("error",e),s=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),s=r;break;case"details":ee("toggle",e),s=r;break;case"input":vu(e,r),s=La(e,r),ee("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=le({},r,{value:void 0}),ee("invalid",e);break;case"textarea":wu(e,r),s=$a(e,r),ee("invalid",e);break;default:s=r}Ua(t,s),i=s;for(o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="style"?af(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&of(e,c)):o==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&fs(e,c):typeof c=="number"&&fs(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ps.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ee("scroll",e):c!=null&&Xi(e,o,c,l))}switch(t){case"input":Xs(e),Su(e,r,!1);break;case"textarea":Xs(e),ku(e);break;case"option":r.value!=null&&e.setAttribute("value",""+at(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ar(e,!!r.multiple,o,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ko)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return we(n),null;case 6:if(e&&n.stateNode!=null)Im(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(j(166));if(t=kt(Cs.current),kt(wn.current),so(n)){if(r=n.stateNode,t=n.memoizedProps,r[xn]=n,(o=r.nodeValue!==t)&&(e=He,e!==null))switch(e.tag){case 3:ro(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[xn]=n,n.stateNode=r}return we(n),null;case 13:if(ne(re),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&ze!==null&&n.mode&1&&!(n.flags&128))Xf(),vr(),n.flags|=98560,o=!1;else if(o=so(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[xn]=n}else vr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;we(n),o=!1}else ln!==null&&(wi(ln),ln=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||re.current&1?fe===0&&(fe=3):Ic())),n.updateQueue!==null&&(n.flags|=4),we(n),null);case 4:return wr(),fi(e,n),e===null&&Ss(n.stateNode.containerInfo),we(n),null;case 10:return mc(n.type._context),we(n),null;case 17:return Re(n.type)&&Jo(),we(n),null;case 19:if(ne(re),o=n.memoizedState,o===null)return we(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)$r(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=nl(e),l!==null){for(n.flags|=128,$r(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Q(re,re.current&1|2),n.child}e=e.sibling}o.tail!==null&&ie()>br&&(n.flags|=128,r=!0,$r(o,!1),n.lanes=4194304)}else{if(!r)if(e=nl(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return we(n),null}else 2*ie()-o.renderingStartTime>br&&t!==1073741824&&(n.flags|=128,r=!0,$r(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ie(),n.sibling=null,t=re.current,Q(re,r?t&1|2:t&1),n):(we(n),null);case 22:case 23:return Ac(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Fe&1073741824&&(we(n),n.subtreeFlags&6&&(n.flags|=8192)):we(n),null;case 24:return null;case 25:return null}throw Error(j(156,n.tag))}function F1(e,n){switch(uc(n),n.tag){case 1:return Re(n.type)&&Jo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return wr(),ne(De),ne(be),vc(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return yc(n),null;case 13:if(ne(re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(j(340));vr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(re),null;case 4:return wr(),null;case 10:return mc(n.type._context),null;case 22:case 23:return Ac(),null;case 24:return null;default:return null}}var ao=!1,ke=!1,U1=typeof WeakSet=="function"?WeakSet:Set,_=null;function rr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ae(e,n,r)}else t.current=null}function mi(e,n,t){try{t()}catch(r){ae(e,n,r)}}var dd=!1;function B1(e,n){if(qa=Wo,e=Of(),ic(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,i=-1,c=-1,u=0,d=0,f=e,m=null;n:for(;;){for(var y;f!==t||s!==0&&f.nodeType!==3||(i=l+s),f!==o||r!==0&&f.nodeType!==3||(c=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break n;if(m===t&&++u===s&&(i=l),m===o&&++d===r&&(c=l),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}t=i===-1||c===-1?null:{start:i,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Qa={focusedElem:e,selectionRange:t},Wo=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,h=n.stateNode,p=h.getSnapshotBeforeUpdate(n.elementType===n.type?w:sn(n.type,w),b);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(S){ae(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return v=dd,dd=!1,v}function ss(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&mi(n,t,o)}s=s.next}while(s!==r)}}function El(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function hi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function _m(e){var n=e.alternate;n!==null&&(e.alternate=null,_m(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[xn],delete n[ks],delete n[ni],delete n[b1],delete n[C1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dm(e){return e.tag===5||e.tag===3||e.tag===4}function pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ko));else if(r!==4&&(e=e.child,e!==null))for(gi(e,n,t),e=e.sibling;e!==null;)gi(e,n,t),e=e.sibling}function xi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xi(e,n,t),e=e.sibling;e!==null;)xi(e,n,t),e=e.sibling}var xe=null,on=!1;function Fn(e,n,t){for(t=t.child;t!==null;)Rm(e,n,t),t=t.sibling}function Rm(e,n,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Sl,t)}catch{}switch(t.tag){case 5:ke||rr(t,n);case 6:var r=xe,s=on;xe=null,Fn(e,n,t),xe=r,on=s,xe!==null&&(on?(e=xe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):xe.removeChild(t.stateNode));break;case 18:xe!==null&&(on?(e=xe,t=t.stateNode,e.nodeType===8?aa(e.parentNode,t):e.nodeType===1&&aa(e,t),xs(e)):aa(xe,t.stateNode));break;case 4:r=xe,s=on,xe=t.stateNode.containerInfo,on=!0,Fn(e,n,t),xe=r,on=s;break;case 0:case 11:case 14:case 15:if(!ke&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&mi(t,n,l),s=s.next}while(s!==r)}Fn(e,n,t);break;case 1:if(!ke&&(rr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(i){ae(t,n,i)}Fn(e,n,t);break;case 21:Fn(e,n,t);break;case 22:t.mode&1?(ke=(r=ke)||t.memoizedState!==null,Fn(e,n,t),ke=r):Fn(e,n,t);break;default:Fn(e,n,t)}}function fd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new U1),n.forEach(function(r){var s=Y1.bind(null,e,r);t.has(r)||(t.add(r),r.then(s,s))})}}function rn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];try{var o=e,l=n,i=l;e:for(;i!==null;){switch(i.tag){case 5:xe=i.stateNode,on=!1;break e;case 3:xe=i.stateNode.containerInfo,on=!0;break e;case 4:xe=i.stateNode.containerInfo,on=!0;break e}i=i.return}if(xe===null)throw Error(j(160));Rm(o,l,s),xe=null,on=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ae(s,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Lm(n,e),n=n.sibling}function Lm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rn(n,e),mn(e),r&4){try{ss(3,e,e.return),El(3,e)}catch(w){ae(e,e.return,w)}try{ss(5,e,e.return)}catch(w){ae(e,e.return,w)}}break;case 1:rn(n,e),mn(e),r&512&&t!==null&&rr(t,t.return);break;case 5:if(rn(n,e),mn(e),r&512&&t!==null&&rr(t,t.return),e.flags&32){var s=e.stateNode;try{fs(s,"")}catch(w){ae(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&tf(s,o),Ba(i,l);var u=Ba(i,o);for(l=0;l<c.length;l+=2){var d=c[l],f=c[l+1];d==="style"?af(s,f):d==="dangerouslySetInnerHTML"?of(s,f):d==="children"?fs(s,f):Xi(s,d,f,u)}switch(i){case"input":Oa(s,o);break;case"textarea":rf(s,o);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?ar(s,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?ar(s,!!o.multiple,o.defaultValue,!0):ar(s,!!o.multiple,o.multiple?[]:"",!1))}s[ks]=o}catch(w){ae(e,e.return,w)}}break;case 6:if(rn(n,e),mn(e),r&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(w){ae(e,e.return,w)}}break;case 3:if(rn(n,e),mn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(w){ae(e,e.return,w)}break;case 4:rn(n,e),mn(e);break;case 13:rn(n,e),mn(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Ec=ie())),r&4&&fd(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ke=(u=ke)||d,rn(n,e),ke=u):rn(n,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(f=_=d;_!==null;){switch(m=_,y=m.child,m.tag){case 0:case 11:case 14:case 15:ss(4,m,m.return);break;case 1:rr(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(w){ae(r,t,w)}}break;case 5:rr(m,m.return);break;case 22:if(m.memoizedState!==null){hd(f);continue}}y!==null?(y.return=m,_=y):hd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{s=f.stateNode,u?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=lf("display",l))}catch(w){ae(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ae(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:rn(n,e),mn(e),r&4&&fd(e);break;case 21:break;default:rn(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Dm(t)){var r=t;break e}t=t.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(fs(s,""),r.flags&=-33);var o=pd(e);xi(e,o,s);break;case 3:case 4:var l=r.stateNode.containerInfo,i=pd(e);gi(e,i,l);break;default:throw Error(j(161))}}catch(c){ae(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function z1(e,n,t){_=e,Om(e)}function Om(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var s=_,o=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||ao;if(!l){var i=s.alternate,c=i!==null&&i.memoizedState!==null||ke;i=ao;var u=ke;if(ao=l,(ke=c)&&!u)for(_=s;_!==null;)l=_,c=l.child,l.tag===22&&l.memoizedState!==null?gd(s):c!==null?(c.return=l,_=c):gd(s);for(;o!==null;)_=o,Om(o),o=o.sibling;_=s,ao=i,ke=u}md(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,_=o):md(e)}}function md(e){for(;_!==null;){var n=_;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ke||El(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ke)if(t===null)r.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(s,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Qu(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Qu(n,l,t)}break;case 5:var i=n.stateNode;if(t===null&&n.flags&4){t=i;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&xs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ke||n.flags&512&&hi(n)}catch(m){ae(n,n.return,m)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function hd(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function gd(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{El(4,n)}catch(c){ae(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(c){ae(n,s,c)}}var o=n.return;try{hi(n)}catch(c){ae(n,o,c)}break;case 5:var l=n.return;try{hi(n)}catch(c){ae(n,l,c)}}}catch(c){ae(n,n.return,c)}if(n===e){_=null;break}var i=n.sibling;if(i!==null){i.return=n.return,_=i;break}_=n.return}}var H1=Math.ceil,sl=Rn.ReactCurrentDispatcher,Pc=Rn.ReactCurrentOwner,en=Rn.ReactCurrentBatchConfig,H=0,ge=null,ce=null,ye=0,Fe=0,sr=dt(0),fe=0,Es=null,_t=0,Tl=0,jc=0,os=null,Ie=null,Ec=0,br=1/0,bn=null,ol=!1,yi=null,rt=null,io=!1,Xn=null,ll=0,ls=0,vi=null,Ao=-1,Io=0;function Ee(){return H&6?ie():Ao!==-1?Ao:Ao=ie()}function st(e){return e.mode&1?H&2&&ye!==0?ye&-ye:P1.transition!==null?(Io===0&&(Io=Sf()),Io):(e=G,e!==0||(e=window.event,e=e===void 0?16:jf(e.type)),e):1}function cn(e,n,t,r){if(50<ls)throw ls=0,vi=null,Error(j(185));Os(e,t,r),(!(H&2)||e!==ge)&&(e===ge&&(!(H&2)&&(Tl|=t),fe===4&&Vn(e,ye)),Le(e,r),t===1&&H===0&&!(n.mode&1)&&(br=ie()+500,Nl&&pt()))}function Le(e,n){var t=e.callbackNode;Pg(e,n);var r=Ho(e,e===ge?ye:0);if(r===0)t!==null&&Nu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Nu(t),n===1)e.tag===0?N1(xd.bind(null,e)):Vf(xd.bind(null,e)),w1(function(){!(H&6)&&pt()}),t=null;else{switch(wf(r)){case 1:t=ec;break;case 4:t=yf;break;case 16:t=zo;break;case 536870912:t=vf;break;default:t=zo}t=Wm(t,Mm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Mm(e,n){if(Ao=-1,Io=0,H&6)throw Error(j(327));var t=e.callbackNode;if(pr()&&e.callbackNode!==t)return null;var r=Ho(e,e===ge?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=al(e,r);else{n=r;var s=H;H|=2;var o=Fm();(ge!==e||ye!==n)&&(bn=null,br=ie()+500,Pt(e,n));do try{V1();break}catch(i){$m(e,i)}while(!0);fc(),sl.current=o,H=s,ce!==null?n=0:(ge=null,ye=0,n=fe)}if(n!==0){if(n===2&&(s=Va(e),s!==0&&(r=s,n=Si(e,s))),n===1)throw t=Es,Pt(e,0),Vn(e,r),Le(e,ie()),t;if(n===6)Vn(e,r);else{if(s=e.current.alternate,!(r&30)&&!W1(s)&&(n=al(e,r),n===2&&(o=Va(e),o!==0&&(r=o,n=Si(e,o))),n===1))throw t=Es,Pt(e,0),Vn(e,r),Le(e,ie()),t;switch(e.finishedWork=s,e.finishedLanes=r,n){case 0:case 1:throw Error(j(345));case 2:vt(e,Ie,bn);break;case 3:if(Vn(e,r),(r&130023424)===r&&(n=Ec+500-ie(),10<n)){if(Ho(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ei(vt.bind(null,e,Ie,bn),n);break}vt(e,Ie,bn);break;case 4:if(Vn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,s=-1;0<r;){var l=31-an(r);o=1<<l,l=n[l],l>s&&(s=l),r&=~o}if(r=s,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*H1(r/1960))-r,10<r){e.timeoutHandle=ei(vt.bind(null,e,Ie,bn),r);break}vt(e,Ie,bn);break;case 5:vt(e,Ie,bn);break;default:throw Error(j(329))}}}return Le(e,ie()),e.callbackNode===t?Mm.bind(null,e):null}function Si(e,n){var t=os;return e.current.memoizedState.isDehydrated&&(Pt(e,n).flags|=256),e=al(e,n),e!==2&&(n=Ie,Ie=t,n!==null&&wi(n)),e}function wi(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function W1(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var s=t[r],o=s.getSnapshot;s=s.value;try{if(!dn(o(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vn(e,n){for(n&=~jc,n&=~Tl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-an(n),r=1<<t;e[t]=-1,n&=~r}}function xd(e){if(H&6)throw Error(j(327));pr();var n=Ho(e,0);if(!(n&1))return Le(e,ie()),null;var t=al(e,n);if(e.tag!==0&&t===2){var r=Va(e);r!==0&&(n=r,t=Si(e,r))}if(t===1)throw t=Es,Pt(e,0),Vn(e,n),Le(e,ie()),t;if(t===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vt(e,Ie,bn),Le(e,ie()),null}function Tc(e,n){var t=H;H|=1;try{return e(n)}finally{H=t,H===0&&(br=ie()+500,Nl&&pt())}}function Dt(e){Xn!==null&&Xn.tag===0&&!(H&6)&&pr();var n=H;H|=1;var t=en.transition,r=G;try{if(en.transition=null,G=1,e)return e()}finally{G=r,en.transition=t,H=n,!(H&6)&&pt()}}function Ac(){Fe=sr.current,ne(sr)}function Pt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,S1(t)),ce!==null)for(t=ce.return;t!==null;){var r=t;switch(uc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jo();break;case 3:wr(),ne(De),ne(be),vc();break;case 5:yc(r);break;case 4:wr();break;case 13:ne(re);break;case 19:ne(re);break;case 10:mc(r.type._context);break;case 22:case 23:Ac()}t=t.return}if(ge=e,ce=e=ot(e.current,null),ye=Fe=n,fe=0,Es=null,jc=Tl=_t=0,Ie=os=null,wt!==null){for(n=0;n<wt.length;n++)if(t=wt[n],r=t.interleaved,r!==null){t.interleaved=null;var s=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=s,r.next=l}t.pending=r}wt=null}return e}function $m(e,n){do{var t=ce;try{if(fc(),jo.current=rl,tl){for(var r=se.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}tl=!1}if(It=0,he=pe=se=null,rs=!1,Ns=0,Pc.current=null,t===null||t.return===null){fe=1,Es=n,ce=null;break}e:{var o=e,l=t.return,i=t,c=n;if(n=ye,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=i,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=sd(l);if(y!==null){y.flags&=-257,od(y,l,i,o,n),y.mode&1&&rd(o,u,n),n=y,c=u;var v=n.updateQueue;if(v===null){var w=new Set;w.add(c),n.updateQueue=w}else v.add(c);break e}else{if(!(n&1)){rd(o,u,n),Ic();break e}c=Error(j(426))}}else if(te&&i.mode&1){var b=sd(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),od(b,l,i,o,n),dc(kr(c,i));break e}}o=c=kr(c,i),fe!==4&&(fe=2),os===null?os=[o]:os.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var h=wm(o,c,n);qu(o,h);break e;case 1:i=c;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rt===null||!rt.has(g)))){o.flags|=65536,n&=-n,o.lanes|=n;var S=km(o,i,n);qu(o,S);break e}}o=o.return}while(o!==null)}Bm(t)}catch(k){n=k,ce===t&&t!==null&&(ce=t=t.return);continue}break}while(!0)}function Fm(){var e=sl.current;return sl.current=rl,e===null?rl:e}function Ic(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||!(_t&268435455)&&!(Tl&268435455)||Vn(ge,ye)}function al(e,n){var t=H;H|=2;var r=Fm();(ge!==e||ye!==n)&&(bn=null,Pt(e,n));do try{G1();break}catch(s){$m(e,s)}while(!0);if(fc(),H=t,sl.current=r,ce!==null)throw Error(j(261));return ge=null,ye=0,fe}function G1(){for(;ce!==null;)Um(ce)}function V1(){for(;ce!==null&&!xg();)Um(ce)}function Um(e){var n=Hm(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,n===null?Bm(e):ce=n,Pc.current=null}function Bm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=F1(t,n),t!==null){t.flags&=32767,ce=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ce=null;return}}else if(t=$1(t,n,Fe),t!==null){ce=t;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=e}while(n!==null);fe===0&&(fe=5)}function vt(e,n,t){var r=G,s=en.transition;try{en.transition=null,G=1,K1(e,n,t,r)}finally{en.transition=s,G=r}return null}function K1(e,n,t,r){do pr();while(Xn!==null);if(H&6)throw Error(j(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(jg(e,o),e===ge&&(ce=ge=null,ye=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||io||(io=!0,Wm(zo,function(){return pr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=en.transition,en.transition=null;var l=G;G=1;var i=H;H|=4,Pc.current=null,B1(e,t),Lm(t,e),f1(Qa),Wo=!!qa,Qa=qa=null,e.current=t,z1(t),yg(),H=i,G=l,en.transition=o}else e.current=t;if(io&&(io=!1,Xn=e,ll=s),o=e.pendingLanes,o===0&&(rt=null),wg(t.stateNode),Le(e,ie()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],r(s.value,{componentStack:s.stack,digest:s.digest});if(ol)throw ol=!1,e=yi,yi=null,e;return ll&1&&e.tag!==0&&pr(),o=e.pendingLanes,o&1?e===vi?ls++:(ls=0,vi=e):ls=0,pt(),null}function pr(){if(Xn!==null){var e=wf(ll),n=en.transition,t=G;try{if(en.transition=null,G=16>e?16:e,Xn===null)var r=!1;else{if(e=Xn,Xn=null,ll=0,H&6)throw Error(j(331));var s=H;for(H|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var i=o.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:ss(8,d,o)}var f=d.child;if(f!==null)f.return=d,_=f;else for(;_!==null;){d=_;var m=d.sibling,y=d.return;if(_m(d),d===u){_=null;break}if(m!==null){m.return=y,_=m;break}_=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ss(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,_=h;break e}_=o.return}}var p=e.current;for(_=p;_!==null;){l=_;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,_=g;else e:for(l=p;_!==null;){if(i=_,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:El(9,i)}}catch(k){ae(i,i.return,k)}if(i===l){_=null;break e}var S=i.sibling;if(S!==null){S.return=i.return,_=S;break e}_=i.return}}if(H=s,pt(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Sl,e)}catch{}r=!0}return r}finally{G=t,en.transition=n}}return!1}function yd(e,n,t){n=kr(t,n),n=wm(e,n,1),e=tt(e,n,1),n=Ee(),e!==null&&(Os(e,1,n),Le(e,n))}function ae(e,n,t){if(e.tag===3)yd(e,e,t);else for(;n!==null;){if(n.tag===3){yd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rt===null||!rt.has(r))){e=kr(t,e),e=km(n,e,1),n=tt(n,e,1),e=Ee(),n!==null&&(Os(n,1,e),Le(n,e));break}}n=n.return}}function J1(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ee(),e.pingedLanes|=e.suspendedLanes&t,ge===e&&(ye&t)===t&&(fe===4||fe===3&&(ye&130023424)===ye&&500>ie()-Ec?Pt(e,0):jc|=t),Le(e,n)}function zm(e,n){n===0&&(e.mode&1?(n=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):n=1);var t=Ee();e=In(e,n),e!==null&&(Os(e,n,t),Le(e,t))}function X1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),zm(e,t)}function Y1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(n),zm(e,t)}var Hm;Hm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||De.current)_e=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return _e=!1,M1(e,n,t);_e=!!(e.flags&131072)}else _e=!1,te&&n.flags&1048576&&Kf(n,qo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;To(e,n),e=n.pendingProps;var s=yr(n,be.current);dr(n,t),s=wc(null,n,r,e,s,t);var o=kc();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Re(r)?(o=!0,Xo(n)):o=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,gc(n),s.updater=jl,n.stateNode=s,s._reactInternals=n,ai(n,r,e,t),n=ui(null,n,r,!0,o,t)):(n.tag=0,te&&o&&cc(n),Ne(null,n,s,t),n=n.child),n;case 16:r=n.elementType;e:{switch(To(e,n),e=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=Q1(r),e=sn(r,e),s){case 0:n=ci(null,n,r,e,t);break e;case 1:n=id(null,n,r,e,t);break e;case 11:n=ld(null,n,r,e,t);break e;case 14:n=ad(null,n,r,sn(r.type,e),t);break e}throw Error(j(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:sn(r,s),ci(e,n,r,s,t);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:sn(r,s),id(e,n,r,s,t);case 3:e:{if(Pm(n),e===null)throw Error(j(387));r=n.pendingProps,o=n.memoizedState,s=o.element,Zf(e,n),el(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){s=kr(Error(j(423)),n),n=cd(e,n,r,t,s);break e}else if(r!==s){s=kr(Error(j(424)),n),n=cd(e,n,r,t,s);break e}else for(ze=nt(n.stateNode.containerInfo.firstChild),He=n,te=!0,ln=null,t=qf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(vr(),r===s){n=_n(e,n,t);break e}Ne(e,n,r,t)}n=n.child}return n;case 5:return em(n),e===null&&si(n),r=n.type,s=n.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,Za(r,s)?l=null:o!==null&&Za(r,o)&&(n.flags|=32),Nm(e,n),Ne(e,n,l,t),n.child;case 6:return e===null&&si(n),null;case 13:return jm(e,n,t);case 4:return xc(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Sr(n,null,r,t):Ne(e,n,r,t),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:sn(r,s),ld(e,n,r,s,t);case 7:return Ne(e,n,n.pendingProps,t),n.child;case 8:return Ne(e,n,n.pendingProps.children,t),n.child;case 12:return Ne(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,o=n.memoizedProps,l=s.value,Q(Qo,r._currentValue),r._currentValue=l,o!==null)if(dn(o.value,l)){if(o.children===s.children&&!De.current){n=_n(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var i=o.dependencies;if(i!==null){l=o.child;for(var c=i.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=En(-1,t&-t),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),oi(o.return,t,n),i.lanes|=t;break}c=c.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(j(341));l.lanes|=t,i=l.alternate,i!==null&&(i.lanes|=t),oi(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ne(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,dr(n,t),s=nn(s),r=r(s),n.flags|=1,Ne(e,n,r,t),n.child;case 14:return r=n.type,s=sn(r,n.pendingProps),s=sn(r.type,s),ad(e,n,r,s,t);case 15:return bm(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:sn(r,s),To(e,n),n.tag=1,Re(r)?(e=!0,Xo(n)):e=!1,dr(n,t),Sm(n,r,s),ai(n,r,s,t),ui(null,n,r,!0,e,t);case 19:return Em(e,n,t);case 22:return Cm(e,n,t)}throw Error(j(156,n.tag))};function Wm(e,n){return xf(e,n)}function q1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,n,t,r){return new q1(e,n,t,r)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Q1(e){if(typeof e=="function")return _c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===Qi)return 14}return 2}function ot(e,n){var t=e.alternate;return t===null?(t=Ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _o(e,n,t,r,s,o){var l=2;if(r=e,typeof e=="function")_c(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Jt:return jt(t.children,s,o,n);case Yi:l=8,s|=8;break;case Ia:return e=Ze(12,t,n,s|2),e.elementType=Ia,e.lanes=o,e;case _a:return e=Ze(13,t,n,s),e.elementType=_a,e.lanes=o,e;case Da:return e=Ze(19,t,n,s),e.elementType=Da,e.lanes=o,e;case Zp:return Al(t,s,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qp:l=10;break e;case Qp:l=9;break e;case qi:l=11;break e;case Qi:l=14;break e;case Hn:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return n=Ze(l,t,n,s),n.elementType=e,n.type=r,n.lanes=o,n}function jt(e,n,t,r){return e=Ze(7,e,r,n),e.lanes=t,e}function Al(e,n,t,r){return e=Ze(22,e,r,n),e.elementType=Zp,e.lanes=t,e.stateNode={isHidden:!1},e}function ha(e,n,t){return e=Ze(6,e,null,n),e.lanes=t,e}function ga(e,n,t){return n=Ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Z1(e,n,t,r,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Dc(e,n,t,r,s,o,l,i,c){return e=new Z1(e,n,t,i,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ze(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(o),e}function ex(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Gm(e){if(!e)return it;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(j(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Re(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(j(171))}if(e.tag===1){var t=e.type;if(Re(t))return Gf(e,t,n)}return n}function Vm(e,n,t,r,s,o,l,i,c){return e=Dc(t,r,!0,e,s,o,l,i,c),e.context=Gm(null),t=e.current,r=Ee(),s=st(t),o=En(r,s),o.callback=n??null,tt(t,o,s),e.current.lanes=s,Os(e,s,r),Le(e,r),e}function Il(e,n,t,r){var s=n.current,o=Ee(),l=st(s);return t=Gm(t),n.context===null?n.context=t:n.pendingContext=t,n=En(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=tt(s,n,l),e!==null&&(cn(e,s,l,o),Po(e,s,l)),l}function il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Rc(e,n){vd(e,n),(e=e.alternate)&&vd(e,n)}function nx(){return null}var Km=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lc(e){this._internalRoot=e}_l.prototype.render=Lc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(j(409));Il(e,n,null,null)};_l.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dt(function(){Il(null,e,null,null)}),n[An]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var n=Cf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Gn.length&&n!==0&&n<Gn[t].priority;t++);Gn.splice(t,0,e),t===0&&Pf(e)}};function Oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sd(){}function tx(e,n,t,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var u=il(l);o.call(u)}}var l=Vm(n,r,e,0,null,!1,!1,"",Sd);return e._reactRootContainer=l,e[An]=l.current,Ss(e.nodeType===8?e.parentNode:e),Dt(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var i=r;r=function(){var u=il(c);i.call(u)}}var c=Dc(e,0,!1,null,null,!1,!1,"",Sd);return e._reactRootContainer=c,e[An]=c.current,Ss(e.nodeType===8?e.parentNode:e),Dt(function(){Il(n,c,t,r)}),c}function Rl(e,n,t,r,s){var o=t._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var i=s;s=function(){var c=il(l);i.call(c)}}Il(n,l,e,s)}else l=tx(t,n,e,s,r);return il(l)}kf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Yr(n.pendingLanes);t!==0&&(nc(n,t|1),Le(n,ie()),!(H&6)&&(br=ie()+500,pt()))}break;case 13:Dt(function(){var r=In(e,1);if(r!==null){var s=Ee();cn(r,e,1,s)}}),Rc(e,1)}};tc=function(e){if(e.tag===13){var n=In(e,134217728);if(n!==null){var t=Ee();cn(n,e,134217728,t)}Rc(e,134217728)}};bf=function(e){if(e.tag===13){var n=st(e),t=In(e,n);if(t!==null){var r=Ee();cn(t,e,n,r)}Rc(e,n)}};Cf=function(){return G};Nf=function(e,n){var t=G;try{return G=e,n()}finally{G=t}};Ha=function(e,n,t){switch(n){case"input":if(Oa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var s=Cl(r);if(!s)throw Error(j(90));nf(r),Oa(r,s)}}}break;case"textarea":rf(e,t);break;case"select":n=t.value,n!=null&&ar(e,!!t.multiple,n,!1)}};df=Tc;pf=Dt;var rx={usingClientEntryPoint:!1,Events:[$s,Qt,Cl,cf,uf,Tc]},Fr={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sx={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hf(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{Sl=co.inject(sx),Sn=co}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rx;Ge.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oc(n))throw Error(j(200));return ex(e,n,null,t)};Ge.createRoot=function(e,n){if(!Oc(e))throw Error(j(299));var t=!1,r="",s=Km;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Dc(e,1,!1,null,null,t,!1,r,s),e[An]=n.current,Ss(e.nodeType===8?e.parentNode:e),new Lc(n)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=hf(n),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Dt(e)};Ge.hydrate=function(e,n,t){if(!Dl(n))throw Error(j(200));return Rl(null,e,n,!0,t)};Ge.hydrateRoot=function(e,n,t){if(!Oc(e))throw Error(j(405));var r=t!=null&&t.hydratedSources||null,s=!1,o="",l=Km;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Vm(n,null,e,1,t??null,s,!1,o,l),e[An]=n.current,Ss(e),r)for(e=0;e<r.length;e++)t=r[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new _l(n)};Ge.render=function(e,n,t){if(!Dl(n))throw Error(j(200));return Rl(null,e,n,!1,t)};Ge.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(j(40));return e._reactRootContainer?(Dt(function(){Rl(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1};Ge.unstable_batchedUpdates=Tc;Ge.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Dl(t))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Rl(e,n,t,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function Jm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jm)}catch(e){console.error(e)}}Jm(),Kp.exports=Ge;var ox=Kp.exports,Xm,wd=ox;Xm=wd.createRoot,wd.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts(){return Ts=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ts.apply(null,arguments)}var Yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yn||(Yn={}));const kd="popstate";function lx(e){e===void 0&&(e={});function n(s,o){let{pathname:l="/",search:i="",hash:c=""}=Mt(s.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ki("",{pathname:l,search:i,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){let l=s.document.querySelector("base"),i="";if(l&&l.getAttribute("href")){let c=s.location.href,u=c.indexOf("#");i=u===-1?c:c.slice(0,u)}return i+"#"+(typeof o=="string"?o:cl(o))}function r(s,o){Mc(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return ix(n,t,r,e)}function oe(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Mc(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function ax(){return Math.random().toString(36).substr(2,8)}function bd(e,n){return{usr:e.state,key:e.key,idx:n}}function ki(e,n,t,r){return t===void 0&&(t=null),Ts({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Mt(n):n,{state:t,key:n&&n.key||r||ax()})}function cl(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Mt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function ix(e,n,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:o=!1}=r,l=s.history,i=Yn.Pop,c=null,u=d();u==null&&(u=0,l.replaceState(Ts({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){i=Yn.Pop;let b=d(),h=b==null?null:b-u;u=b,c&&c({action:i,location:w.location,delta:h})}function m(b,h){i=Yn.Push;let p=ki(w.location,b,h);t&&t(p,b),u=d()+1;let g=bd(p,u),S=w.createHref(p);try{l.pushState(g,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(S)}o&&c&&c({action:i,location:w.location,delta:1})}function y(b,h){i=Yn.Replace;let p=ki(w.location,b,h);t&&t(p,b),u=d();let g=bd(p,u),S=w.createHref(p);l.replaceState(g,"",S),o&&c&&c({action:i,location:w.location,delta:0})}function v(b){let h=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof b=="string"?b:cl(b);return p=p.replace(/ $/,"%20"),oe(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let w={get action(){return i},get location(){return e(s,l)},listen(b){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(kd,f),c=b,()=>{s.removeEventListener(kd,f),c=null}},createHref(b){return n(s,b)},createURL:v,encodeLocation(b){let h=v(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:y,go(b){return l.go(b)}};return w}var Cd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cd||(Cd={}));function cx(e,n,t){return t===void 0&&(t="/"),ux(e,n,t)}function ux(e,n,t,r){let s=typeof n=="string"?Mt(n):n,o=Cr(s.pathname||"/",t);if(o==null)return null;let l=Ym(e);dx(l);let i=null,c=kx(o);for(let u=0;i==null&&u<l.length;++u)i=Sx(l[u],c);return i}function Ym(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(o,l,i)=>{let c={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(oe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=lt([r,c.relativePath]),d=t.concat(c);o.children&&o.children.length>0&&(oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ym(o.children,n,d,u)),!(o.path==null&&!o.index)&&n.push({path:u,score:yx(u,o.index),routesMeta:d})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))s(o,l);else for(let c of qm(o.path))s(o,l,c)}),n}function qm(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,s=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let l=qm(r.join("/")),i=[];return i.push(...l.map(c=>c===""?o:[o,c].join("/"))),s&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function dx(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:vx(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const px=/^:[\w-]+$/,fx=3,mx=2,hx=1,gx=10,xx=-2,Nd=e=>e==="*";function yx(e,n){let t=e.split("/"),r=t.length;return t.some(Nd)&&(r+=xx),n&&(r+=mx),t.filter(s=>!Nd(s)).reduce((s,o)=>s+(px.test(o)?fx:o===""?hx:gx),r)}function vx(e,n){return e.length===n.length&&e.slice(0,-1).every((r,s)=>r===n[s])?e[e.length-1]-n[n.length-1]:0}function Sx(e,n,t){let{routesMeta:r}=e,s={},o="/",l=[];for(let i=0;i<r.length;++i){let c=r[i],u=i===r.length-1,d=o==="/"?n:n.slice(o.length)||"/",f=bi({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),m=c.route;if(!f)return null;Object.assign(s,f.params),l.push({params:s,pathname:lt([o,f.pathname]),pathnameBase:Nx(lt([o,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(o=lt([o,f.pathnameBase]))}return l}function bi(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=wx(e.path,e.caseSensitive,e.end),s=n.match(t);if(!s)return null;let o=s[0],l=o.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let w=i[f]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=i[f];return y&&!v?u[m]=void 0:u[m]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function wx(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Mc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,i,c)=>(r.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),r]}function kx(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Mc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Cr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function bx(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:s=""}=typeof e=="string"?Mt(e):e,o;return t?(t=Qm(t),t.startsWith("/")?o=Pd(t.substring(1),"/"):o=Pd(t,n)):o=n,{pathname:o,search:Px(r),hash:jx(s)}}function Pd(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function xa(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cx(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function $c(e,n){let t=Cx(e);return n?t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Fc(e,n,t,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=Mt(e):(s=Ts({},e),oe(!s.pathname||!s.pathname.includes("?"),xa("?","pathname","search",s)),oe(!s.pathname||!s.pathname.includes("#"),xa("#","pathname","hash",s)),oe(!s.search||!s.search.includes("#"),xa("#","search","hash",s)));let o=e===""||s.pathname==="",l=o?"/":s.pathname,i;if(l==null)i=t;else{let f=n.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}i=f>=0?n[f]:"/"}let c=bx(s,i),u=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Qm=e=>e.replace(/\/\/+/g,"/"),lt=e=>Qm(e.join("/")),Nx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Px=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ex(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zm=["post","put","patch","delete"];new Set(Zm);const Tx=["get",...Zm];new Set(Tx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function As(){return As=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},As.apply(null,arguments)}const Ll=x.createContext(null),eh=x.createContext(null),Ln=x.createContext(null),Ol=x.createContext(null),On=x.createContext({outlet:null,matches:[],isDataRoute:!1}),nh=x.createContext(null);function Ax(e,n){let{relative:t}=n===void 0?{}:n;Tr()||oe(!1);let{basename:r,navigator:s}=x.useContext(Ln),{hash:o,pathname:l,search:i}=$l(e,{relative:t}),c=l;return r!=="/"&&(c=l==="/"?r:lt([r,l])),s.createHref({pathname:c,search:i,hash:o})}function Tr(){return x.useContext(Ol)!=null}function ft(){return Tr()||oe(!1),x.useContext(Ol).location}function th(e){x.useContext(Ln).static||x.useLayoutEffect(e)}function Ml(){let{isDataRoute:e}=x.useContext(On);return e?Hx():Ix()}function Ix(){Tr()||oe(!1);let e=x.useContext(Ll),{basename:n,future:t,navigator:r}=x.useContext(Ln),{matches:s}=x.useContext(On),{pathname:o}=ft(),l=JSON.stringify($c(s,t.v7_relativeSplatPath)),i=x.useRef(!1);return th(()=>{i.current=!0}),x.useCallback(function(u,d){if(d===void 0&&(d={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let f=Fc(u,JSON.parse(l),o,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:lt([n,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[n,r,l,o,e])}function rh(){let{matches:e}=x.useContext(On),n=e[e.length-1];return n?n.params:{}}function $l(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=x.useContext(Ln),{matches:s}=x.useContext(On),{pathname:o}=ft(),l=JSON.stringify($c(s,r.v7_relativeSplatPath));return x.useMemo(()=>Fc(e,JSON.parse(l),o,t==="path"),[e,l,o,t])}function _x(e,n){return Dx(e,n)}function Dx(e,n,t,r){Tr()||oe(!1);let{navigator:s}=x.useContext(Ln),{matches:o}=x.useContext(On),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=ft(),d;if(n){var f;let b=typeof n=="string"?Mt(n):n;c==="/"||(f=b.pathname)!=null&&f.startsWith(c)||oe(!1),d=b}else d=u;let m=d.pathname||"/",y=m;if(c!=="/"){let b=c.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=cx(e,{pathname:y}),w=$x(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},i,b.params),pathname:lt([c,s.encodeLocation?s.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:lt([c,s.encodeLocation?s.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,t,r);return n&&w?x.createElement(Ol.Provider,{value:{location:As({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Yn.Pop}},w):w}function Rx(){let e=zx(),n=Ex(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},n),t?x.createElement("pre",{style:s},t):null,null)}const Lx=x.createElement(Rx,null);class Ox extends x.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?x.createElement(On.Provider,{value:this.props.routeContext},x.createElement(nh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mx(e){let{routeContext:n,match:t,children:r}=e,s=x.useContext(Ll);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(On.Provider,{value:n},r)}function $x(e,n,t,r){var s;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,i=(s=t)==null?void 0:s.errors;if(i!=null){let d=l.findIndex(f=>f.route.id&&(i==null?void 0:i[f.route.id])!==void 0);d>=0||oe(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:y}=t,v=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||v){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,f,m)=>{let y,v=!1,w=null,b=null;t&&(y=i&&f.route.id?i[f.route.id]:void 0,w=f.route.errorElement||Lx,c&&(u<0&&m===0?(Wx("route-fallback"),v=!0,b=null):u===m&&(v=!0,b=f.route.hydrateFallbackElement||null)));let h=n.concat(l.slice(0,m+1)),p=()=>{let g;return y?g=w:v?g=b:f.route.Component?g=x.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,x.createElement(Mx,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:t!=null},children:g})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?x.createElement(Ox,{location:t.location,revalidation:t.revalidation,component:w,error:y,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var sh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sh||{}),oh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(oh||{});function Fx(e){let n=x.useContext(Ll);return n||oe(!1),n}function Ux(e){let n=x.useContext(eh);return n||oe(!1),n}function Bx(e){let n=x.useContext(On);return n||oe(!1),n}function lh(e){let n=Bx(),t=n.matches[n.matches.length-1];return t.route.id||oe(!1),t.route.id}function zx(){var e;let n=x.useContext(nh),t=Ux(),r=lh();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Hx(){let{router:e}=Fx(sh.UseNavigateStable),n=lh(oh.UseNavigateStable),t=x.useRef(!1);return th(()=>{t.current=!0}),x.useCallback(function(s,o){o===void 0&&(o={}),t.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,As({fromRouteId:n},o)))},[e,n])}const jd={};function Wx(e,n,t){jd[e]||(jd[e]=!0)}function Gx(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Vx(e){let{to:n,replace:t,state:r,relative:s}=e;Tr()||oe(!1);let{future:o,static:l}=x.useContext(Ln),{matches:i}=x.useContext(On),{pathname:c}=ft(),u=Ml(),d=Fc(n,$c(i,o.v7_relativeSplatPath),c,s==="path"),f=JSON.stringify(d);return x.useEffect(()=>u(JSON.parse(f),{replace:t,state:r,relative:s}),[u,f,s,t,r]),null}function Je(e){oe(!1)}function Kx(e){let{basename:n="/",children:t=null,location:r,navigationType:s=Yn.Pop,navigator:o,static:l=!1,future:i}=e;Tr()&&oe(!1);let c=n.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:c,navigator:o,static:l,future:As({v7_relativeSplatPath:!1},i)}),[c,i,o,l]);typeof r=="string"&&(r=Mt(r));let{pathname:d="/",search:f="",hash:m="",state:y=null,key:v="default"}=r,w=x.useMemo(()=>{let b=Cr(d,c);return b==null?null:{location:{pathname:b,search:f,hash:m,state:y,key:v},navigationType:s}},[c,d,f,m,y,v,s]);return w==null?null:x.createElement(Ln.Provider,{value:u},x.createElement(Ol.Provider,{children:t,value:w}))}function Jx(e){let{children:n,location:t}=e;return _x(Ci(n),t)}new Promise(()=>{});function Ci(e,n){n===void 0&&(n=[]);let t=[];return x.Children.forEach(e,(r,s)=>{if(!x.isValidElement(r))return;let o=[...n,s];if(r.type===x.Fragment){t.push.apply(t,Ci(r.props.children,o));return}r.type!==Je&&oe(!1),!r.props.index||!r.props.children||oe(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ci(r.props.children,o)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ul.apply(null,arguments)}function ah(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Xx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yx(e,n){return e.button===0&&(!n||n==="_self")&&!Xx(e)}function Ni(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,t)=>{let r=e[t];return n.concat(Array.isArray(r)?r.map(s=>[t,s]):[[t,r]])},[]))}function qx(e,n){let t=Ni(e);return n&&n.forEach((r,s)=>{t.has(s)||n.getAll(s).forEach(o=>{t.append(s,o)})}),t}const Qx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Zx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ey="6";try{window.__reactRouterVersion=ey}catch{}const ny=x.createContext({isTransitioning:!1}),ty="startTransition",Ed=J0[ty];function ry(e){let{basename:n,children:t,future:r,window:s}=e,o=x.useRef();o.current==null&&(o.current=lx({window:s,v5Compat:!0}));let l=o.current,[i,c]=x.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=x.useCallback(f=>{u&&Ed?Ed(()=>c(f)):c(f)},[c,u]);return x.useLayoutEffect(()=>l.listen(d),[l,d]),x.useEffect(()=>Gx(r),[r]),x.createElement(Kx,{basename:n,children:t,location:i.location,navigationType:i.action,navigator:l,future:r})}const sy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pn=x.forwardRef(function(n,t){let{onClick:r,relative:s,reloadDocument:o,replace:l,state:i,target:c,to:u,preventScrollReset:d,viewTransition:f}=n,m=ah(n,Qx),{basename:y}=x.useContext(Ln),v,w=!1;if(typeof u=="string"&&oy.test(u)&&(v=u,sy))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),k=Cr(S.pathname,y);S.origin===g.origin&&k!=null?u=k+S.search+S.hash:w=!0}catch{}let b=Ax(u,{relative:s}),h=iy(u,{replace:l,state:i,target:c,preventScrollReset:d,relative:s,viewTransition:f});function p(g){r&&r(g),g.defaultPrevented||h(g)}return x.createElement("a",ul({},m,{href:v||b,onClick:w||o?r:p,ref:t,target:c}))}),ly=x.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:s=!1,className:o="",end:l=!1,style:i,to:c,viewTransition:u,children:d}=n,f=ah(n,Zx),m=$l(c,{relative:f.relative}),y=ft(),v=x.useContext(eh),{navigator:w,basename:b}=x.useContext(Ln),h=v!=null&&cy(m)&&u===!0,p=w.encodeLocation?w.encodeLocation(m).pathname:m.pathname,g=y.pathname,S=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;s||(g=g.toLowerCase(),S=S?S.toLowerCase():null,p=p.toLowerCase()),S&&b&&(S=Cr(S,b)||S);const k=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let C=g===p||!l&&g.startsWith(p)&&g.charAt(k)==="/",E=S!=null&&(S===p||!l&&S.startsWith(p)&&S.charAt(p.length)==="/"),N={isActive:C,isPending:E,isTransitioning:h},U=C?r:void 0,I;typeof o=="function"?I=o(N):I=[o,C?"active":null,E?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let L=typeof i=="function"?i(N):i;return x.createElement(pn,ul({},f,{"aria-current":U,className:I,ref:t,style:L,to:c,viewTransition:u}),typeof d=="function"?d(N):d)});var Pi;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pi||(Pi={}));var Td;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Td||(Td={}));function ay(e){let n=x.useContext(Ll);return n||oe(!1),n}function iy(e,n){let{target:t,replace:r,state:s,preventScrollReset:o,relative:l,viewTransition:i}=n===void 0?{}:n,c=Ml(),u=ft(),d=$l(e,{relative:l});return x.useCallback(f=>{if(Yx(f,t)){f.preventDefault();let m=r!==void 0?r:cl(u)===cl(d);c(e,{replace:m,state:s,preventScrollReset:o,relative:l,viewTransition:i})}},[u,c,d,r,s,t,e,o,l,i])}function ih(e){let n=x.useRef(Ni(e)),t=x.useRef(!1),r=ft(),s=x.useMemo(()=>qx(r.search,t.current?null:n.current),[r.search]),o=Ml(),l=x.useCallback((i,c)=>{const u=Ni(typeof i=="function"?i(s):i);t.current=!0,o("?"+u,c)},[o,s]);return[s,l]}function cy(e,n){n===void 0&&(n={});let t=x.useContext(ny);t==null&&oe(!1);let{basename:r}=ay(Pi.useViewTransitionState),s=$l(e,{relative:n.relative});if(!t.isTransitioning)return!1;let o=Cr(t.currentLocation.pathname,r)||t.currentLocation.pathname,l=Cr(t.nextLocation.pathname,r)||t.nextLocation.pathname;return bi(s.pathname,l)!=null||bi(s.pathname,o)!=null}const ch="theme";function uy(){try{const e=localStorage.getItem(ch);return e==="light"||e==="dark"?e:null}catch{return null}}function dy(e){try{localStorage.setItem(ch,e)}catch{}}function py(e){return e??"dark"}function fy(e){document.documentElement.classList.toggle("dark",e==="dark")}const my="ShinHeeYoun",hy="ShinHeeYoun.github.io",uh="main",dh=`https://api.github.com/repos/${my}/${hy}`;function gy(e){return`${dh}/contents/${e}`}function xy(e){const n=new TextEncoder().encode(e);let t="";for(const r of n)t+=String.fromCharCode(r);return btoa(t)}function yy(e){const n=atob(e.replace(/\n/g,"")),t=Uint8Array.from(n,r=>r.charCodeAt(0));return new TextDecoder().decode(t)}async function Uc(e,n,t){const r=await fetch(gy(e),{...t,headers:{Authorization:`Bearer ${n}`,Accept:"application/vnd.github+json",...t.headers}});if(!r.ok){const s=await r.json().catch(()=>({})),o=typeof s.message=="string"?s.message:r.statusText;throw new Error(`GitHub API error (${r.status}): ${o}`)}return r}async function ph(e,n){const r=await(await Uc(e,n,{method:"GET"})).json();return{content:yy(r.content),sha:r.sha}}async function fh(e,n,t,r,s){await Uc(e,r,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,content:xy(n),branch:uh,...s?{sha:s}:{}})})}async function vy(e,n,t,r){await Uc(e,r,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:n,sha:t,branch:uh})})}async function Ad(e,n=fetch){var r;const t=e.trim();if(!t)return"invalid";try{const s=await n(dh,{headers:{Authorization:`Bearer ${t}`,Accept:"application/vnd.github+json"}});return s.status===401?"invalid":s.ok?((r=(await s.json().catch(()=>({}))).permissions)==null?void 0:r.push)===!1?"no-write":"ok":"error"}catch{return"error"}}const Bc="gh_pat";function Sy(){try{return localStorage.getItem(Bc)??""}catch{return""}}function wy(e){try{localStorage.setItem(Bc,e)}catch{}}function Id(){try{localStorage.removeItem(Bc)}catch{}}const mh=x.createContext(null);function ky({children:e}){const[n]=x.useState(Sy),[t,r]=x.useState(n?"checking":"locked"),[s,o]=x.useState("");x.useEffect(()=>{if(!n)return;let u=!1;return Ad(n).then(d=>{u||(d==="ok"?(o(n),r("admin")):(d==="invalid"&&Id(),r("locked")))}),()=>{u=!0}},[n]);const l=x.useCallback(async u=>{const d=await Ad(u);if(d==="ok"){const f=u.trim();wy(f),o(f),r("admin")}return d},[]),i=x.useCallback(()=>{Id(),o(""),r("locked")},[]),c=x.useMemo(()=>({status:t,pat:s,login:l,logout:i}),[t,s,l,i]);return a.jsx(mh.Provider,{value:c,children:e})}function $t(){const e=x.useContext(mh);if(!e)throw new Error("useAdmin must be used inside AdminProvider");return e}const by={invalid:"올바른 토큰이 아닙니다.","no-write":"이 저장소에 쓸 수 있는 권한이 없는 토큰입니다. Contents: Read and write 권한이 필요해요.",error:"GitHub에 연결하지 못했습니다. 잠시 후 다시 시도해 주세요."};function Cy(){const{status:e,login:n,logout:t}=$t(),r=Ml(),[s,o]=x.useState(!1),[l,i]=x.useState(""),[c,u]=x.useState(null),[d,f]=x.useState(!1),m=x.useRef(null),y=x.useRef(null);x.useEffect(()=>{if(!s)return;const h=g=>{g.key==="Escape"&&o(!1)},p=g=>{m.current&&!m.current.contains(g.target)&&o(!1)};return document.addEventListener("keydown",h),document.addEventListener("mousedown",p),()=>{document.removeEventListener("keydown",h),document.removeEventListener("mousedown",p)}},[s]),x.useEffect(()=>{var h;s&&e!=="admin"&&((h=y.current)==null||h.focus())},[s,e]);async function v(h){h.preventDefault(),f(!0),u(null);const p=await n(l);f(!1),p==="ok"?(i(""),o(!1),r("/write")):u(by[p])}function w(){t(),o(!1)}const b=e==="admin";return a.jsxs("div",{ref:m,className:"relative",children:[a.jsx("button",{type:"button",onClick:()=>o(h=>!h),"aria-expanded":s,"aria-haspopup":"dialog",className:`rounded-md border px-2 py-1 text-xs tracking-wide hover:border-accent ${b?"border-accent text-accent":"border-border text-muted hover:text-foreground"}`,children:"ADMIN"}),s&&a.jsx("div",{role:"dialog","aria-label":"관리자",className:"absolute right-0 top-full z-50 mt-2 w-72 max-w-[calc(100vw-3rem)] rounded-md border border-border bg-surface p-4 shadow-lg",children:b?a.jsxs("div",{className:"space-y-3",children:[a.jsx("p",{className:"text-sm",children:"관리자로 로그인되어 있습니다."}),a.jsx("button",{type:"button",onClick:w,className:"rounded-md border border-border px-3 py-1.5 text-sm hover:border-accent",children:"로그아웃"})]}):a.jsxs("form",{onSubmit:v,className:"space-y-3",children:[a.jsx("label",{htmlFor:"admin-pat",className:"block text-sm font-medium",children:"Personal Access Token"}),a.jsx("input",{id:"admin-pat",ref:y,type:"password",value:l,onChange:h=>i(h.target.value),autoComplete:"off",spellCheck:!1,className:"w-full rounded-md border border-border bg-background p-2 text-sm text-foreground outline-none focus:border-accent"}),a.jsx("button",{type:"submit",disabled:d||!l.trim(),className:"rounded-md bg-accent px-3 py-1.5 text-sm text-background transition-colors hover:bg-accent-hover disabled:opacity-50",children:d?"확인 중...":"확인"}),c&&a.jsx("p",{role:"alert",className:"text-xs text-red-600 dark:text-red-400",children:c})]})})]})}const _d=[{to:"/write",label:"Write"},{to:"/edit",label:"Edit"},{to:"/delete",label:"Delete"}];function Ny(){const{pathname:e}=ft(),[n,t]=x.useState(!1),r=x.useRef(null),s=_d.some(o=>o.to===e);return x.useEffect(()=>{t(!1)},[e]),x.useEffect(()=>{if(!n)return;const o=i=>{i.key==="Escape"&&t(!1)},l=i=>{r.current&&!r.current.contains(i.target)&&t(!1)};return document.addEventListener("keydown",o),document.addEventListener("mousedown",l),()=>{document.removeEventListener("keydown",o),document.removeEventListener("mousedown",l)}},[n]),a.jsxs("div",{ref:r,className:"relative",children:[a.jsxs("button",{type:"button",onClick:()=>t(o=>!o),"aria-expanded":n,"aria-haspopup":"menu",className:s?"text-accent":"text-muted transition-colors hover:text-foreground",children:[a.jsx("span",{className:s?"":"invisible","aria-hidden":"true",children:">"})," ","Admin ",a.jsx("span",{"aria-hidden":"true",children:"▾"})]}),n&&a.jsx("ul",{role:"menu","aria-label":"Admin",className:"absolute left-0 top-full z-50 mt-2 min-w-36 rounded-md border border-border bg-surface py-1 shadow-lg",children:_d.map(o=>a.jsx("li",{role:"none",children:a.jsx(pn,{to:o.to,role:"menuitem",className:`block px-4 py-2 hover:bg-background ${e===o.to?"text-accent":"text-foreground"}`,children:o.label})},o.to))})]})}const Py=[{to:"/",label:"Home",end:!0},{to:"/blog",label:"Blog",end:!1},{to:"/tools",label:"Tools",end:!1},{to:"/ers",label:"ERS",end:!1},{to:"/guestbook",label:"Guestbook",end:!1},{to:"/about",label:"About",end:!1}];function jy(){const{status:e}=$t(),[n,t]=x.useState(()=>py(uy()));x.useEffect(()=>{fy(n)},[n]);function r(){const s=n==="dark"?"light":"dark";t(s),dy(s)}return a.jsx("nav",{className:"sticky top-0 z-50 border-b border-border bg-background font-mono text-sm",children:a.jsxs("div",{className:"page-width flex flex-wrap items-center gap-x-6 gap-y-2 py-4",children:[a.jsx(pn,{to:"/",className:"mr-2 font-bold text-accent",children:"~/shinheeyoun"}),Py.map(s=>a.jsx(ly,{to:s.to,end:s.end,className:({isActive:o})=>o?"text-accent":"text-muted transition-colors hover:text-foreground",children:({isActive:o})=>a.jsxs(a.Fragment,{children:[a.jsx("span",{className:o?"":"invisible","aria-hidden":"true",children:">"})," ",s.label]})},s.to)),e==="admin"&&a.jsx(Ny,{}),a.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[a.jsx(Cy,{}),a.jsx("button",{type:"button",onClick:r,"aria-label":"테마 전환",className:"rounded-md border border-border px-2 py-1 text-sm hover:border-accent",children:n==="dark"?"🌙":"☀️"})]})]})})}function ya({children:e}){const{status:n}=$t();return n==="checking"?a.jsx("main",{className:"page-width py-12",children:a.jsx("p",{className:"font-mono text-sm text-muted",children:"관리자 확인 중..."})}):n==="locked"?a.jsx(Vx,{to:"/",replace:!0}):a.jsx(a.Fragment,{children:e})}function Ey(){return a.jsxs("section",{className:"py-10 font-mono",children:[a.jsx("p",{className:"text-sm text-muted",children:"$ whoami"}),a.jsxs("h1",{className:"mt-2 text-4xl font-bold md:text-5xl",children:["ShinHeeYoun",a.jsx("span",{className:"cursor-blink text-accent","aria-hidden":"true",children:"_"})]}),a.jsx("p",{className:"mt-3 text-lg text-foreground/90",children:"개발 연습 페이지"}),a.jsx("p",{className:"mt-2 max-w-xl font-sans text-muted",children:"github homepage with Claude"}),a.jsx("div",{className:"mt-6 flex flex-wrap gap-3 text-sm",children:a.jsx(pn,{to:"/blog",className:"rounded border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-background",children:"read blog"})})]})}const Ty=`---
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

`,Ay=`---
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

`,Iy='---\ntitle: Tomcat 10 (Jakarta EE) 라이브러리 마이그레이션 도구 설명서\ndate: 2026-10-06\n---\n# Tomcat 10 (Jakarta EE) 라이브러리 마이그레이션 도구 설명서\n\n## 1. 개요\n\n### 1.1 목적\nTomcat 9 이하 환경에서 사용하던 `javax.*` 기반 라이브러리(jar)를 Tomcat 10 이상에서 사용하는 `jakarta.*` 기반으로 변환한다. 이 문서는 변환 도구의 사용 방법과 동작 방식, 그리고 변환 결과를 Tomcat 10에 적용하고 설치 상태를 확인하는 절차까지 정리한다.\n\n### 1.2 변환이 필요한 이유\nTomcat 10부터 Java EE가 Jakarta EE로 이전되면서 패키지 이름이 `javax.servlet.*` 에서 `jakarta.servlet.*` 로 바뀌었다. 기존 jar가 `javax.*` 를 참조하면 Tomcat 10에서 `ClassNotFoundException`, `NoClassDefFoundError` 가 발생한다.\n\n### 1.3 문서 범위\n| 구분 | 내용 | 도구가 수행하는지 |\n|---|---|---|\n| 계정 준비 | Tomcat 실행/작업용 계정 생성 | 아니오 (수동) |\n| 환경 준비 | Java 설치 확인 | 아니오 (수동) |\n| 라이브러리 변환 | jar 내부 `javax` 를 `jakarta` 로 변환 | 예 |\n| 결과 확인 | 로그 및 파일 점검 | 부분 (로그 생성) |\n| Tomcat 반영 | 변환된 jar 배포 | 아니오 (수동) |\n| 설치 확인 | Tomcat 버전 및 기동 확인 | 아니오 (수동) |\n\n계정 생성, Java 확인, Tomcat 반영과 설치 확인은 아래 도구에 포함되어 있지 않으며, 이 문서에서 절차만 안내한다.\n\n---\n\n## 2. 구성 파일\n\n작업 폴더: `D:\\storageD\\110_2) TOMCAT_10 MIGRATION 방법\\`\n\n| 파일 | 역할 |\n|---|---|\n| `Run_Migration_Tool.bat` | 실행 진입점. PowerShell 스크립트를 호출한다. |\n| `Tomcat_Migration_Tool.ps1` | 폴더 선택과 실행 버튼을 제공하는 GUI. 변환 jar를 호출한다. |\n| `jakartaee-migration-1.0.12-shaded.jar` | 실제 변환을 수행하는 Apache Tomcat Migration Tool for Jakarta EE (1.0.12). 의존 라이브러리가 하나로 묶인(shaded) 실행 가능 jar. |\n| `lib_beforeMig\\` | (예시) 변환 전 라이브러리 폴더 |\n| `lib_migrated\\` | (예시) 변환 후 라이브러리 폴더. `migration_log.txt` 가 함께 생성된다. |\n\n세 파일(`.bat`, `.ps1`, `.jar`)은 반드시 같은 폴더에 있어야 한다.\n\n---\n\n## 3. 사용방법\n\n### 3.1 계정 준비\n1. Tomcat을 실행하고 변환 작업을 수행할 전용 계정을 생성한다. 관리자 권한이 필요 없는 일반 계정을 권장한다.\n2. 해당 계정에 다음 권한을 부여한다.\n   - 작업 폴더(`D:\\storageD\\110_2) TOMCAT_10 MIGRATION 방법\\`): 읽기, 쓰기\n   - Tomcat 설치 폴더: 읽기, 실행 (배포 시 `webapps` 또는 `WEB-INF\\lib` 쓰기)\n3. 생성한 계정으로 로그인한다.\n\n### 3.2 Java 설치 확인\n변환 도구는 `java` 명령을 PATH에서 찾아 실행한다.\n\n1. 명령 프롬프트를 열고 다음을 실행한다.\n\n   ```\n   java -version\n   ```\n\n2. 버전이 출력되면 정상이다. 명령을 찾을 수 없다는 메시지가 나오면 JDK/JRE를 설치하고 `JAVA_HOME` 및 PATH를 설정한다.\n3. 변환 도구는 Java 8 이상에서 동작한다. 배포 대상이 Tomcat 10.1 이면 Java 11 이상이 필요하다.\n\n### 3.3 변환 대상 준비\n1. 변환할 jar 파일들을 하나의 폴더에 모은다. (예: `lib_beforeMig`)\n2. 원본 폴더는 변환 중 수정되지 않지만, 안전을 위해 별도로 백업해 둔다.\n3. 출력 폴더는 원본과 다른 경로로 정한다. (예: `lib_migrated`) 존재하지 않으면 자동 생성된다.\n\n### 3.4 도구 실행\n1. `Run_Migration_Tool.bat` 를 더블클릭한다.\n2. "Tomcat 10 (Jakarta EE) Migration Tool" 창이 열린다.\n3. `Source Lib Directory` 의 `Browse...` 를 눌러 변환 전 폴더를 선택한다.\n4. `Destination Directory` 의 `Browse...` 를 눌러 출력 폴더를 선택한다.\n5. `Run Migration` 버튼을 누른다.\n6. 처리 중에는 버튼이 비활성화된다. 완료되면 완료 메시지 창이 표시되고, 상태 창에 로그가 출력된다.\n\n### 3.5 결과 확인\n1. 출력 폴더의 `migration_log.txt` 를 연다.\n2. 마지막 줄이 `Migration completed successfully in [...] milliseconds` 인지 확인한다.\n3. 로그에 `ERROR`, `Exception`, `Unable` 등 오류 문구가 없는지 검색한다.\n4. 입력 폴더와 출력 폴더의 jar 파일 개수가 같은지 비교한다.\n\n### 3.6 Tomcat 10 반영\n1. Tomcat 10을 중지한다.\n2. 변환된 jar를 애플리케이션의 `WEB-INF\\lib` 또는 Tomcat의 `lib` 폴더에 복사한다. 기존 변환 전 jar는 제거한다.\n3. 애플리케이션 자체의 코드와 설정(`web.xml`, 소스의 `javax.servlet` 등)도 `jakarta` 기준으로 변환되어 있어야 한다. 이 도구는 라이브러리 jar만 변환한다.\n4. 필요하면 `<Tomcat>\\webapps` 대신 `webapps-javaee` 폴더에 두어 Tomcat 자체 변환 기능을 이용하는 방법도 있다. (이 도구와는 별개의 방법이다.)\n\n### 3.7 Tomcat 설치 확인\n1. 버전 확인\n\n   ```\n   <Tomcat 설치경로>\\bin\\version.bat\n   ```\n\n   출력의 `Server version` 이 `Apache Tomcat/10.x.x` 인지 확인한다. `JVM Version` 도 함께 확인한다.\n\n2. 기동\n\n   ```\n   <Tomcat 설치경로>\\bin\\startup.bat\n   ```\n\n3. 기동 로그 확인: `<Tomcat 설치경로>\\logs\\catalina.<날짜>.log` 에 `Server startup in [...] milliseconds` 가 있는지 확인한다.\n4. 접속 확인: 브라우저에서 `http://localhost:8080/` 에 접속하여 Tomcat 기본 페이지 또는 애플리케이션 화면이 표시되는지 확인한다.\n5. 오류 확인: `catalina.<날짜>.log` 와 `localhost.<날짜>.log` 에 `ClassNotFoundException`, `NoClassDefFoundError`, `javax.` 관련 오류가 없는지 확인한다.\n6. 기능 확인: 메일 발송, SOAP(Axis2), 스케줄러(Quartz), 리포트 등 변환된 라이브러리를 사용하는 기능을 실제로 호출해 본다.\n\n---\n\n## 4. 기술 설명\n\n### 4.1 전체 동작 흐름\n\n```\nRun_Migration_Tool.bat\n   └─ powershell -File Tomcat_Migration_Tool.ps1\n        └─ (Run Migration 클릭) cmd /c java -jar jakartaee-migration-1.0.12-shaded.jar <source> <dest> > <dest>\\migration_log.txt 2>&1\n             └─ 종료 코드 확인 후 결과 표시\n```\n\n### 4.2 Run_Migration_Tool.bat\n| 항목 | 내용 |\n|---|---|\n| `@echo off` | 실행 명령 출력을 끈다. |\n| `powershell -ExecutionPolicy Bypass` | 이번 실행에 한해 스크립트 실행 정책을 우회한다. 시스템 설정은 변경하지 않는다. |\n| `-WindowStyle Hidden` | PowerShell 콘솔 창을 숨긴다. GUI 창만 표시된다. |\n| `-File "%~dp0Tomcat_Migration_Tool.ps1"` | `%~dp0` 는 bat 파일이 위치한 폴더이다. 어느 경로에서 실행해도 같은 폴더의 ps1을 찾는다. |\n\n### 4.3 Tomcat_Migration_Tool.ps1\n1. 초기화\n   - Windows Forms, Drawing 어셈블리를 로드한다.\n   - 스크립트와 같은 폴더에서 `jakartaee-migration-1.0.12-shaded.jar` 를 찾는다. 없으면 오류 메시지를 표시하고 종료한다.\n2. 화면 구성\n   - Source 경로 입력란과 Browse 버튼\n   - Destination 경로 입력란과 Browse 버튼\n   - Run Migration 버튼\n   - 읽기 전용 상태 창\n3. 실행 전 검사\n   - Source 또는 Destination이 비어 있으면 경고 후 중단한다.\n   - Source 폴더가 존재하지 않으면 오류 후 중단한다.\n   - Destination 폴더가 없으면 생성한다.\n4. 변환 실행\n   - `cmd.exe /c java -jar "<jar>" "<source>" "<dest>" > "<dest>\\migration_log.txt" 2>&1` 를 콘솔 창 없이 실행한다.\n   - 표준 출력과 표준 오류를 모두 `migration_log.txt` 로 저장한다.\n   - 실행 중 `DoEvents()` 와 100ms 대기를 반복하여 화면이 멈추지 않도록 한다.\n5. 결과 판정\n   - 프로세스 종료 코드가 0이면 성공, 그 외는 실패로 표시한다.\n   - 로그 파일을 시스템 기본 인코딩으로 읽어 상태 창에 출력한다.\n6. 예외 처리\n   - 프로세스 시작 자체가 실패하면 Java 설치 여부를 확인하라는 메시지를 표시한다.\n   - Java가 PATH에 없는 경우에는 `cmd` 가 오류 코드를 반환하므로, 실패 메시지와 로그 파일의 `java` 인식 오류 문구로 확인한다.\n\n### 4.4 jakartaee-migration-1.0.12-shaded.jar\nApache Tomcat 프로젝트의 Jakarta EE Migration Tool이다. 이 스크립트는 `<source>` `<dest>` 두 인자만 전달하므로 기본 설정으로 동작한다.\n\n| 항목 | 동작 |\n|---|---|\n| 프로파일 | 기본값 `TOMCAT`. 로그 첫 줄에 `Jakarta EE specification profile [TOMCAT]` 로 표시된다. |\n| 입력이 폴더인 경우 | 폴더 안의 파일을 처리하여 출력 폴더에 저장한다. jar는 변환하고, 변환 대상이 아닌 파일은 그대로 복사한다. |\n| 변환 내용 | 클래스 파일의 바이트코드와 텍스트 리소스에 포함된 `javax.*` 패키지 참조를 `jakarta.*` 로 치환한다. 대상은 Servlet, JSP, EL, WebSocket, Mail, Activation, JMS, XML Binding 등 Jakarta EE 명세 패키지이다. |\n| 제외 대상 | 기본 제외 목록에 있는 jar(`asm`, `bcprov`, `bcpkix`, `slf4j-api` 등)는 변환하지 않고 그대로 복사한다. 로그에 `excluded (the archive was copied unchanged)` 로 표시된다. |\n| 처리 방식 | 스트리밍 방식(`using streaming`)으로 jar를 읽으며 변환하여 메모리 사용을 줄인다. |\n| 중첩 jar | jar 안에 포함된 jar도 재귀적으로 변환한다. |\n| 서명 파일 | jar 내용이 바뀌면 기존 서명이 무효가 되므로 `META-INF/*.SF`, `*.RSA`, `*.DSA` 를 삭제한다. 로그에 `Drop cryptographic signature file` 로 표시된다. |\n| 종료 코드 | 정상 완료 시 0, 오류 시 0이 아닌 값 |\n\n### 4.5 로그 메시지 해석\n| 로그 | 의미 | 조치 |\n|---|---|---|\n| `Migration starting for archive [...]` | 해당 jar 처리 시작 | 없음 |\n| `Migration finished for archive [...]` | 해당 jar 처리 완료 | 없음 |\n| `Migration skipped ... because it is excluded` | 제외 대상으로 변환 없이 복사 | 없음 |\n| `Drop cryptographic signature file [...]` | 서명 파일 삭제 | 없음 |\n| `Migration completed successfully in [N] milliseconds` | 전체 정상 종료 | 없음 |\n| 그 외 `ERROR`, `Exception` 등 | 변환 실패 | 해당 jar 확인 |\n\n로그에 표시되는 경로의 한글이 깨져 보일 수 있다. 이는 로그 파일 인코딩 문제이며 변환 결과에는 영향이 없다.\n\n---\n\n## 5. 제약 사항 및 주의사항\n\n1. 변환 성공은 도구가 오류 없이 끝났다는 의미이며, 변환된 라이브러리가 Tomcat 10에서 정상 동작한다는 보증이 아니다. 반드시 3.7절의 기동 및 기능 확인을 수행한다.\n2. 문자열을 조합하여 만든 클래스 이름(리플렉션), 설정 파일 내 참조 등은 변환되지 않을 수 있다.\n3. 오래된 라이브러리(예: Axis2 1.7.0, Axiom 1.2.13, JAXB API 2.1, Mail, Activation, Geronimo JMS)는 변환해도 정상 동작하지 않을 수 있다. 가능하면 Jakarta를 정식 지원하는 최신 버전으로 교체한다.\n4. 서명이 삭제된 jar는 서명 검증이 필요한 환경에서는 사용할 수 없다.\n5. 출력 폴더를 입력 폴더와 동일하게 지정하지 않는다.\n6. `migration_log.txt` 는 출력 폴더에 함께 생성되므로 배포 시 jar만 선별하여 복사한다.\n7. 변환 도구는 라이브러리만 변환한다. 애플리케이션 소스, `web.xml`, 기타 설정 파일은 별도로 점검한다.\n\n---\n\n## 6. 문제 해결\n\n| 증상 | 원인 | 조치 |\n|---|---|---|\n| `Migration jar file not found` 메시지 | ps1과 같은 폴더에 jar가 없음 | 세 파일을 같은 폴더에 둔다. |\n| `Migration failed with exit code` 표시 | Java 미설치 또는 PATH 미설정, 변환 오류 | `java -version` 확인 후 `migration_log.txt` 를 확인한다. |\n| 로그 파일이 비어 있음 | `java` 명령을 찾지 못함 | Java를 설치하고 PATH를 설정한다. |\n| 실행 시 창이 열리지 않음 | PowerShell 실행 제한 또는 보안 프로그램 차단 | 명령 프롬프트에서 bat을 실행하여 오류를 확인한다. |\n| Tomcat 기동 시 `NoClassDefFoundError` | 변환 누락 또는 일부 jar가 변환 전 상태로 남아 있음 | 변환 전 jar가 배포 위치에 남아 있는지 확인한다. |\n| Tomcat 기동 시 `UnsupportedClassVersionError` | Java 버전이 Tomcat 요구 버전보다 낮음 | Tomcat 10.1은 Java 11 이상을 사용한다. |\n\n',_y=`---
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

`,Dy=`---
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

`,Ry=`---
title: HsqlException 원인 파악 및 조치 과정 및 방법
date: 2026-10-07
---
# HsqlException 원인 파악 및 조치 과정 및 방법

| 항목 | 내용 |
|---|---|
| 작성일 | 2026-10-06 |
| 대상 제품 | ReportingServer 8 (내장 DB: HSQLDB 2.3.4) |
| 대상 증상 | WAS 기동 시 HsqlException 발생, 스케줄러 관련 기능 오류 |
| 비고 | 고객사명, 서버명, IP는 익명화함 (WAS-1, WAS-2 등). 제품 소스 코드는 포함하지 않으며 파일명과 설정 키 이름만 기재함 |

---

## 1. 개요

### 1.1 문제 요약

고객사가 운영 서버의 SSL 인증서를 교체하고 WAS를 재기동한 뒤, WAS 로그와 ReportingServer 접속 시 아래 예외가 발생했다.

\`\`\`
java.sql.SQLException: error in script file line: 53
org.hsqldb.HsqlException: error in script file: SET DATABASE UNIQUE NAME HSQLDB8E53417F64
\`\`\`

\`db/data\` 폴더를 비우고 재기동하도록 안내했으나, 개발 서버에서 다른 형태의 예외가 이어서 발생했다.

\`\`\`
org.hsqldb.HsqlException: Database lock acquisition failure: lockFile: ...hsqldb.lck ...
\`\`\`

### 1.2 결론 요약

1. SSL 인증서와는 무관하다.
2. 두 예외 모두 ReportingServer의 내장 DB(HSQLDB)를 두 개의 주체가 동시에 사용하려 할 때 발생하는 같은 계열의 문제다.
3. 고객사 환경에서는 같은 장비의 WAS 프로세스 2개(포트만 다름)가 동일한 ReportingServer 디렉터리를 공유하고 있었다.
4. 두 WAS 모두 \`schedule.use=true\`로 설정되어 기동 시 내장 DB에 접속한다.
5. 단순 환경(Tomcat 1대)에서도 Tomcat Manager의 "Reload"를 사용하면 같은 락 예외가 재현된다.
6. 조치는 "스케줄러를 한 노드에서만 사용" 또는 "외부 DB로 전환"이다. \`db/data\` 폴더를 비우는 것은 임시 복구일 뿐이다.

### 1.3 이 문서의 사용법

- 2장은 배경 지식, 3장은 증상, 4장은 분석 절차, 5장은 원인, 6장은 재현 테스트, 7장은 조치 방법이다.
- 8장의 시행착오를 먼저 읽으면 같은 실수를 피할 수 있다.
- 명령어는 부록 A에 모아 두었다.

---

## 2. 배경 지식

### 2.1 내장 DB 위치와 파일 구성

ReportingServer는 \`<ReportingServer 설치 경로>/db/data\` 폴더에 HSQLDB 파일 모드 DB를 만든다. 접속 URL의 기준 이름은 \`hsqldb\`이다.

| 파일 | 설명 |
|---|---|
| \`hsqldb.script\` | 텍스트 형식의 DB 정의와 데이터. 기동 시 위에서 아래로 한 줄씩 실행하여 DB를 복원한다. 이번 문제의 대상 파일 |
| \`hsqldb.properties\` | DB 상태 (\`modified=no\`는 마지막 종료가 정상이었음을 의미) |
| \`hsqldb.log\` | 마지막 체크포인트 이후의 변경 이력 |
| \`hsqldb.lck\` | 락 파일. 16바이트 (문자열 \`HSQLLOCK\` 8바이트 + 시각 8바이트) |
| \`hsqldb.tmp\` | 임시 폴더 (보통 비어 있음) |

스케줄러 테이블은 메모리 테이블이므로 별도의 데이터 파일 없이 \`hsqldb.script\` 안에 데이터가 저장된다.

### 2.2 내장 DB를 사용하는 기능

제품 소스(디컴파일본) 검토 결과, 내장 DB 접속 정보를 사용하는 기능은 아래 3가지다.

| 기능 | 사용 여부를 정하는 설정 (\`server.properties\`) | 내장 DB 사용 설정 | 기본값 |
|---|---|---|---|
| 스케줄러 | \`schedule.use\` | \`schedule.db.embedded\` | 내장 DB 사용 (true) |
| 상태진단 스케줄러 | \`diagnostics.use\` | 설정과 무관하게 내장 DB로 고정 | 미사용 (false) |
| 오류로그 수집 | \`errorCollect.use\` | \`errorCollect.db.embedded\` | 기능 미사용 (false), 켜면 내장 DB 사용 (true) |

주의 사항은 다음과 같다.

- \`schedule.use=true\`이면 WAS 기동 시점에 스케줄러가 초기화되면서 내장 DB에 접속한다.
- \`schedule.use=false\`이면 기동 시 내장 DB에 접속하지 않고, ERS Manager 화면에도 스케줄러 메뉴가 표시되지 않는다.
- \`server.properties\`에 있는 \`server.diagnostics.use\`는 \`diagnostics.use\`와 다른 키다. 혼동하지 않는다.

### 2.3 락 파일(hsqldb.lck)의 동작

HSQLDB 파일 모드는 OS 파일 잠금이 아니라 "하트비트" 방식으로 중복 사용을 막는다.

1. DB를 연 프로세스는 \`hsqldb.lck\`에 현재 시각을 10초마다 계속 기록한다.
2. 다른 주체가 같은 DB를 열려 하면 \`hsqldb.lck\`의 기록 시각과 현재 시각의 차이를 확인한다.
3. 차이가 약 10.1초 이내이면 "다른 주체가 사용 중"으로 판단하고 접속을 거부한다 (\`Database lock acquisition failure\`).
4. 먼저 연 프로세스가 살아 있는 동안에는 하트비트가 계속 갱신되므로, 나중에 여는 쪽은 몇 분 뒤에 열어도 항상 거부된다. 시간 간격을 둔다고 피할 수 없다.
5. 프로세스가 종료되면 락이 해제된다.

예외 메시지 끝의 \`heartbeat - read: -4889 ms\`는 "락 파일 기록 시각 - 현재 시각"이다. 음수는 기록 시각이 현재보다 과거라는 뜻이며 시계 오차가 아니다. 절댓값이 10100 이하이면 사용 중으로 판단된다.

### 2.4 정상 script 파일의 구조

- 첫 줄이 \`SET DATABASE UNIQUE NAME HSQLDBxxxxxxxxxx\`이다. 이 문구는 파일 전체에서 한 번만 나타나야 한다.
- 이어서 \`SET DATABASE ...\`, \`SET FILES ...\`, \`CREATE USER\`, \`CREATE MEMORY TABLE ...\` 등 정의 구간이 나온다.
- 이후 \`INSERT INTO ...\` 로 시작하는 데이터 구간이 나온다.
- 데이터 구간에서는 \`INSERT\`와 \`SET SCHEMA\`만 허용된다. 그 외 문장이 나오면 \`error in script file\` 예외가 발생한다.
- 스케줄러 작업이 하나도 등록되지 않은 경우 데이터 구간에는 내부용 \`INSERT INTO BLOCKS ...\` 한 줄만 있다 (52~56줄 내외의 짧은 파일).

---

## 3. 증상

### 3.1 증상 A: script 파일 오류

\`\`\`
java.sql.SQLException: error in script file line: 53 org.hsqldb.HsqlException:
  error in script file: SET DATABASE UNIQUE NAME HSQLDB8E53417F64
Caused by: org.hsqldb.HsqlException: ...
    at org.hsqldb.scriptio.ScriptReaderText.readExistingData(Unknown Source)
    at org.hsqldb.persist.Log.processScript(Unknown Source)
    at org.hsqldb.persist.Log.open(Unknown Source)
    at org.hsqldb.Database.reopen(Unknown Source)
    ...
\`\`\`

- 스택의 상위에는 제품의 스케줄러 관련 프레임이 있으며, 로그 메시지는 "TaskGroup 정보의 취득에 실패했습니다"이다.
- 발생 시점은 ERS Manager의 스케줄러 화면에서 TaskGroup을 조회할 때이다.
- 일반 리포트 조회(debug.log의 \`writeMmlDocument success\`)는 정상 동작했다.

### 3.2 증상 B: 락 획득 실패

\`\`\`
org.hsqldb.HsqlException: Database lock acquisition failure:
  lockFile: ...[file =/.../ReportingServer/db/data/hsqldb.lck, exists=true, locked=false, valid=false, ]
  method: checkHeartbeat read: 2026-09-29 07:47:55 heartbeat - read: -8281 ms.
    at org.hsqldb.persist.LockFile.newLockFileLock(Unknown Source)
    ...
    (제품 스케줄러 초기화 프레임)
    at (제품 서버 기동 프레임)
    at (제품 ContextListener.contextInitialized)
    at (WAS 배포 프레임)
\`\`\`

- WAS가 웹앱을 배포(contextInitialized)하는 과정에서 발생한다.
- 이 호출 구간에는 예외를 잡는 처리가 없어서 예외가 WAS 배포 단계까지 전달된다. 해당 노드의 웹앱 기동이 실패할 수 있다.

---

## 4. 분석 과정

### 4.1 고객사에 요청할 자료

처음에는 로그만 받았으나, 원인 특정에는 아래 자료가 모두 필요했다. 처음부터 한 번에 요청하면 회신 횟수를 줄일 수 있다.

| 번호 | 자료 | 확인 목적 |
|---|---|---|
| 1 | \`db/data\` 폴더 전체 (script, properties, log, lck, tmp), 파일 수정 시각 | 손상 형태, 잔존 파일 확인 |
| 2 | 삭제 전 백업과 삭제 후 재기동 시 생성된 \`db/data\` | 초기화 정상 여부 확인 |
| 3 | \`WEB-INF/conf/server.properties\` | \`schedule.use\`, \`errorCollect.use\` 등 확인 |
| 4 | WAS 기동 로그 전체 (deploy 로그) | 노드 구성, 기동 순서 확인 |
| 5 | 오류 발생 화면 캡처 | 발생 지점 확인 |
| 6 | 개발, 운영 환경 각각의 위 자료 | 환경별 차이 확인 |
| 7 | WAS 노드 수, 로드밸런서 유무, 평소 재기동 방식 | 구성 확인 |

### 4.2 로그 파일 읽기

고객사가 xlsx에 로그를 붙여 보낸 경우 다음 방법으로 읽는다.

1. \`markitdown\`은 한글이 깨져 출력될 수 있다. \`openpyxl\`로 셀 값을 UTF-8로 읽는 스크립트를 사용한다.
2. 시트별(\`Debug.log\`, \`engine.log\`, \`error.log\`, \`report.log\`)로 나누어 확인한다.
3. 긴 로그(수 MB)는 한 번에 열지 말고 \`grep\`으로 키워드(\`hsql\`, \`lock\`, \`scheduler\`, 노드명)를 검색한다.

### 4.3 예외 발생 위치 확인

1. 스택트레이스를 아래에서 위로 읽어 어느 기능이 DB를 열었는지 확인한다.
2. 이번 건은 두 증상 모두 스케줄러 초기화 또는 TaskGroup 조회 경로에서 내장 DB에 접속하는 구간이었다.
3. 따라서 스케줄러(\`schedule.use\`)가 관여하는 환경이라는 것이 확인된다.

### 4.4 script 파일 구조 분석

손상 여부는 아래 명령으로 확인한다.

\`\`\`bash
# UNIQUE NAME 문구가 몇 번 나오는지 (정상이면 1회, 1번째 줄)
grep -n "SET DATABASE UNIQUE NAME" hsqldb.script

# 전체 줄 수 확인
wc -l hsqldb.script

# 데이터 행(INSERT) 확인
grep -n "^INSERT" hsqldb.script
\`\`\`

이번 건의 확인 결과는 다음과 같다.

| 파일 | 결과 |
|---|---|
| 운영 서버, 삭제 전 | 104줄. 1~52번째 줄과 53~104번째 줄이 완전히 동일 (파일 내용이 통째로 2번 기록됨) |
| 개발 서버, 삭제 전 | 52줄. 정상 구조 |
| 개발 서버, 삭제 후 재생성 | 43줄. 스케줄러, 오류로그 관련 \`CREATE TABLE\`이 없음 (초기화가 끝나기 전에 중단된 것으로 해석) |

- 운영 서버 파일의 "통째로 중복" 형태는 파일 일부가 깨진 것이 아니라 두 개의 완성된 script가 이어 붙은 모양이다. 두 주체가 각각 script를 기록했다는 해석과 일치한다.
- 모든 환경에서 스케줄러 테이블에 등록된 작업 데이터(\`INSERT INTO ERS_SCHEDULE_...\`)는 없었다. 즉 실제로 스케줄을 등록해 사용한 흔적이 없다.

### 4.5 설정 확인

\`\`\`bash
grep -n "schedule.use\\|schedule.db\\|errorCollect\\|diagnostics" server.properties
\`\`\`

개발, 운영 모두 \`schedule.use=true\`, \`schedule.db.embedded=true\`, \`errorCollect.use=false\`였다.

### 4.6 WAS 구성 확인 (deploy 로그)

\`\`\`bash
# 서버 기동 순서와 시각
grep -n "is being started" deploy.log

# 각 서버의 IP, 포트, 호스트명, PID
grep -n "SERVER-0002\\|SERVER-0568" deploy.log

# 어느 서버에 어떤 애플리케이션이 배포되는지
grep -n "Distributing the application" deploy.log

# 로그에 찍힌 설치 경로 (노드별 경로가 같은지 비교)
grep -o "/data/[A-Za-z0-9_./-]*ReportingServer[^ ,\\"]*" deploy.log | sort -u
\`\`\`

확인된 사실은 다음과 같다.

1. WAS-1과 WAS-2는 IP와 호스트명이 같고 포트만 다르다. 같은 장비의 프로세스 2개다.
2. 두 WAS 모두 ReportingServer 애플리케이션을 배포한다. 기동 시각은 약 20초 간격이다.
3. 두 WAS가 로그에 남기는 설치 경로가 문자 단위로 동일하다. 노드별 복사본이 아니라 하나의 디렉터리를 직접 참조한다.
4. 락 오류는 나중에 기동한 WAS-2에서 발생했다. 직전 로그에 WAS-1에서의 접속 허용 메시지가 있었다.
5. 이 deploy 로그는 개발 환경 자료다. 운영 환경의 노드 구성은 로그로 확인하지 못했다.

### 4.7 같은 파일을 실제로 열고 있는지 직접 확인하는 방법

4.6은 로그 문자열을 근거로 한 추론이다. 확정하려면 고객사 서버에서 두 WAS가 동시에 떠 있는 상태로 아래를 실행한다.

\`\`\`bash
ps -ef | grep -E "WAS-1|WAS-2"             # PID 확인
lsof -p <WAS-1 PID> | grep hsqldb          # 열려 있는 파일 확인
lsof -p <WAS-2 PID> | grep hsqldb
stat /<설치경로>/ReportingServer/db/data/hsqldb.script   # inode 확인
\`\`\`

두 PID가 동일한 경로와 동일한 inode의 \`hsqldb.*\`를 열고 있으면 공유가 확정된다. 또한 WAS 설정(domain.xml 등)에서 두 서버가 애플리케이션을 어느 경로에서 읽는지 확인한다.

---

## 5. 원인

### 5.1 직접 원인

| 증상 | 직접 원인 |
|---|---|
| A: script 오류 | \`hsqldb.script\`의 데이터 구간에 헤더 문장(\`SET DATABASE UNIQUE NAME ...\`)이 다시 나타나 복원 중 예외 발생. 운영 파일은 script 전체가 2번 기록된 상태 |
| B: 락 획득 실패 | 먼저 기동한 WAS가 이미 DB를 열고 \`hsqldb.lck\`를 갱신하고 있어서, 나중에 기동한 WAS의 접속이 거부됨 |

### 5.2 근본 원인

- 같은 장비의 WAS 프로세스 2개가 같은 ReportingServer 디렉터리(\`db/data\` 포함)를 공유한다.
- 두 WAS 모두 \`schedule.use=true\`이므로 기동 시 같은 내장 DB 파일을 열려고 한다.
- HSQLDB 파일 모드는 하나의 프로세스만 사용하는 것을 전제로 하므로, 두 프로세스가 동시에 쓰면 증상 B처럼 거부되거나 증상 A처럼 파일이 손상될 수 있다.

### 5.3 두 증상의 관계

- 같은 원인이 타이밍에 따라 다르게 나타난 것이다.
- 한쪽이 이미 락을 잡고 있는 것이 확인되면 거부된다 (증상 B).
- 락 확인 시점을 비껴가서 둘 다 script를 기록하면 파일이 중복 기록된다 (증상 A).
- 증상 A에서 정확히 어떤 순서로 두 번 기록되는지는 재현하지 못했다. "두 개의 완성된 script가 이어 붙은 형태"라는 파일 모양과 환경 구성에 근거한 해석이다.

### 5.4 SSL 인증서 교체와의 관계

- 인증서 교체 자체는 원인이 아니다.
- 인증서 교체 때문에 WAS 전체를 한꺼번에 재기동하게 되어, 두 WAS가 거의 동시에 기동하는 상황이 만들어졌다.

### 5.5 단순 환경에서도 발생하는 경우 (웹앱 Reload)

Tomcat 1대인 개발 PC의 \`error.log\`에서도 증상 B가 발생했다. 스택트레이스에 Tomcat Manager의 reload 호출(\`StandardContext.reload\`, \`HTMLManagerServlet.reload\`)이 있었고, 로그 시간 순서는 다음과 같았다.

\`\`\`
11:18:28  Shut down ERS-ReportingServer...
11:18:41  Scheduler의 Task 등록에 실패했습니다  (Database lock acquisition failure, heartbeat - read: -4889 ms)
11:18:42  Started up ERS-ReportingServer...
\`\`\`

- Reload는 JVM을 재기동하지 않고 같은 JVM 안에서 웹앱만 내렸다 올린다.
- 제품 소스 검토 결과, 스케줄러 종료 처리는 Quartz 스케줄 엔진만 중지하고 내장 DB를 닫거나 종료(\`SHUTDOWN\`)하는 호출을 찾지 못했다.
- 따라서 이전 웹앱이 연 DB의 하트비트 스레드가 JVM 안에 남아 락 파일을 계속 갱신하고, 새로 뜬 웹앱이 같은 DB를 열 때 거부되는 것으로 판단한다. (소스와 로그에 근거한 판단이며, 이 Reload 시나리오를 별도로 재현 테스트하지는 않았다.)
- 정리하면 "프로세스가 몇 개인가"가 아니라 "이미 열린 DB 세션이 살아 있는 상태에서 같은 DB를 다시 여는가"가 조건이다.
- 이 문제는 제품의 스케줄러 종료 처리 보완 사항으로 별도 검토할 수 있다.

---

## 6. 검증 테스트 (재현 절차)

제품 내장 DB 계정 정보를 쓰지 않고, 범용 테스트 DB(\`SA\` 계정)로 동일한 현상을 재현한다. 사용하는 jar는 제품에 포함된 \`WEB-INF/lib/hsqldb-2.3.4-jdk5.jar\`이다. 버전이 다르면 결과가 다를 수 있으므로 같은 버전을 사용한다.

### 6.1 준비

1. 작업 폴더를 만들고 jar를 복사한다.
2. 부록 B의 Java 파일 3개를 같은 폴더에 저장하고 컴파일한다.

\`\`\`bash
mkdir -p work
javac -cp hsqldb-2.3.4-jdk5.jar CreateDb.java OpenDb.java HoldDb.java
\`\`\`

- 이후 실행 명령의 클래스패스 구분자는 Windows는 \`;\`, Linux는 \`:\`이다. 아래는 Windows 기준이다.
- Git Bash에서 Windows용 \`java.exe\`를 쓸 때는 \`/c/Users/...\` 형식 경로를 인식하지 못한다. \`C:/Users/...\` 형식 경로를 사용한다.

### 6.2 테스트 1: script 전체 중복으로 증상 A 재현

\`\`\`bash
CP="hsqldb-2.3.4-jdk5.jar;."

# 1) 정상 DB 생성 (테이블 1개, 데이터 2건, 체크포인트 후 정상 종료)
java -cp "$CP" CreateDb work

# 2) 정상 script 확인 (마지막 줄이 INSERT INTO T_TASK 2건)
cat -n work/testdb.script | tail -5

# 3) script 내용을 통째로 한 번 더 이어 붙임 (운영 파일의 손상 형태 모사)
cp work/testdb.script work/tmp.script
cat work/tmp.script >> work/testdb.script
rm work/tmp.script
wc -l work/testdb.script

# 4) 다시 열기
java -cp "$CP" OpenDb work
\`\`\`

기대 결과 (실제 확인한 결과):

\`\`\`
OPEN FAILED: error in script file line: 51 org.hsqldb.HsqlException:
  error in script file: SET DATABASE UNIQUE NAME HSQLDBxxxxxxxxxx
\`\`\`

- 정상 script는 50줄이고 이어 붙이면 100줄이 된다. 51번째 줄(복사본의 첫 줄)에서 예외가 난다.
- 고객사 로그와 같은 예외 메시지, 같은 호출 경로(\`ScriptReaderText.readExistingData\` → \`Log.processScript\` → \`Log.open\`)가 재현된다.

### 6.3 테스트 2: 복구

중복된 뒷부분을 제거하고 다시 열어 데이터가 보존되는지 확인한다.

\`\`\`bash
head -n 50 work/testdb.script > work/fixed.script
mv work/fixed.script work/testdb.script
java -cp "$CP" OpenDb work
\`\`\`

기대 결과: \`OPEN OK, rows=2\` (데이터 2건 보존)

### 6.4 테스트 3: 두 프로세스의 락 충돌로 증상 B 재현

프로세스 A가 DB를 연 상태를 유지하는 동안 프로세스 B가 같은 DB를 열어 본다.

\`\`\`bash
# 터미널 1: 프로세스 A (30초 동안 DB를 연 상태 유지)
java -cp "$CP" HoldDb work 30
# "HOLDING" 이 출력될 때까지 기다린다

# 터미널 2: 프로세스 B (A가 HOLDING 출력 후 30초 이내에 실행)
java -cp "$CP" OpenDb work
\`\`\`

기대 결과 (프로세스 B):

\`\`\`
OPEN FAILED: Database lock acquisition failure: lockFile: ...testdb.lck, exists=true, locked=false, valid=false, ]
  method: checkHeartbeat read: ... heartbeat - read: -NNNN ms.
\`\`\`

- NNNN은 10100 미만의 값이다.
- 프로세스 A가 종료(30초 경과)된 뒤 \`OpenDb\`를 다시 실행하면 \`OPEN OK, rows=2\`가 출력된다. 프로세스가 끝나면 락이 해제된다는 것을 확인할 수 있다.
- 락 파일을 확인하면 16바이트이며 앞 8바이트가 \`HSQLLOCK\`이다.

\`\`\`bash
ls -l work/testdb.lck
xxd work/testdb.lck | head -2
\`\`\`

### 6.5 테스트 결과 해석

| 테스트 | 확인된 것 |
|---|---|
| 1 | script에 헤더 문장이 데이터 구간에서 다시 나타나면 고객사와 동일한 예외가 발생한다 |
| 2 | 중복된 부분만 제거하면 데이터 손실 없이 복구된다 |
| 3 | 한 프로세스가 DB를 열고 있는 동안 다른 프로세스는 접속이 거부된다. 종료되면 해제된다 |

테스트 1과 2는 "중복된 script가 어떤 경위로 만들어졌는지"를 재현한 것이 아니라, "그런 형태의 파일이 있으면 이 예외가 난다"는 것을 확인한 것이다.

---

## 7. 조치 방법

### 7.1 즉시 복구 (서비스 우선)

1. 해당 WAS를 모두 중지한다. 프로세스가 완전히 종료되었는지 확인한다.
2. \`db/data\` 폴더 전체를 다른 위치에 백업한다. (script, properties 등. 삭제 전 백업이 없으면 원인 분석이 어려워진다.)
3. 다음 중 하나를 선택한다.
   - 데이터 보존이 필요하면: \`hsqldb.script\`을 편집하여 첫 번째 정상 구간만 남기고 중복된 뒷부분을 삭제한다. 6.3 절차와 같다.
   - 보존할 데이터가 없으면: \`db/data\` 폴더 안의 파일을 모두 삭제한다. 다음 기동 시 빈 DB가 자동 생성된다. 단, 등록된 스케줄 작업이 있었다면 모두 사라지므로 재등록이 필요하다.
4. WAS를 재기동한다. 이때 가능하면 한 번에 한 노드씩 기동한다.
5. 이 조치는 임시 복구다. 7.2의 근본 조치를 하지 않으면 두 WAS가 겹쳐 기동할 때 재발한다. 개발 서버에서 폴더를 비운 뒤에도 증상 B가 이어서 발생한 것이 그 사례다.

### 7.2 근본 조치 (택 1)

| 안 | 내용 | 장점 | 단점 |
|---|---|---|---|
| A | 여러 WAS 중 한 곳에서만 \`schedule.use=true\`, 나머지는 \`false\` | 설정 변경만으로 가능, 즉시 적용 | 스케줄러가 한 노드에 한정됨. 오류로그 수집 기능을 켜면 같은 문제 재발 가능 |
| B | \`schedule.db.embedded=false\`로 하고 \`schedule.db.service\`에 외부 DB(Oracle, MySQL 등) 지정. 오류로그 수집을 쓸 경우 \`errorCollect.db.embedded=false\`도 함께 지정 | 여러 노드가 동시에 사용해도 안전. 세 기능 모두 해결 | 외부 DB 준비와 테이블 생성이 필요 (제품 \`db\` 폴더의 \`create_*.sql\` 사용) |
| C | 노드별로 \`db/data\`를 서로 다른 로컬 경로로 분리 | 충돌 없음 | 현재 구조에서는 디렉터리 전체 공유를 바꿔야 하며, 노드별로 스케줄 데이터가 따로 관리됨 |

권장 순서는 "A로 우선 안정화 후, 스케줄러를 계속 사용할 경우 B 검토"이다.

### 7.3 스케줄러를 사용하지 않는 경우

1. 등록된 스케줄 작업이 있는지 먼저 확인한다 (ERS Manager의 스케줄러 화면 또는 \`hsqldb.script\`의 \`INSERT INTO ERS_SCHEDULE_...\` 유무).
2. 작업이 없으면 모든 노드에서 \`schedule.use=false\`로 변경하고 재기동한다.
3. 이 경우 기동 시 내장 DB에 접속하지 않으므로 \`db/data\` 파일은 생성되지 않는다. 폴더를 비운 뒤 새 파일이 생기지 않는 것은 정상이다.

### 7.4 오류로그 수집 기능 사용 시 주의

- \`errorCollect.use=true\`로 켜면 스케줄러와 별개 경로로 같은 내장 DB를 사용한다.
- \`errorCollect.db.embedded\` 기본값이 true이므로, 공유 디렉터리 구조에서는 반드시 \`errorCollect.db.embedded=false\`와 \`errorCollect.db.service\`를 함께 설정한다.

### 7.5 재기동 절차 권고

1. 가능하면 WAS 프로세스를 완전히 종료한 후 기동한다.
2. 웹앱 단독 Reload(Tomcat Manager)나 재배포는 \`schedule.use=true\` 환경에서 락 오류를 만들 수 있으므로, 프로세스 전체 재기동을 사용한다.
3. 강제 종료(\`kill -9\`)는 가급적 피하고, 부득이한 경우 \`hsqldb.lck\`, \`hsqldb.script\` 상태를 점검한다.

### 7.6 조치 후 확인 항목

- WAS 기동 로그와 ReportingServer \`error.log\`에 \`HsqlException\`, \`Database lock acquisition failure\`가 없는지 확인한다.
- ERS Manager에서 스케줄러 화면 진입이 정상인지 확인한다 (\`schedule.use=true\`인 경우).
- \`grep -c "SET DATABASE UNIQUE NAME" hsqldb.script\` 결과가 1인지 확인한다.
- 두 WAS를 동시에 기동하는 재기동 절차를 한 번 수행하여 재발하지 않는지 확인한다.

---

## 8. 시행착오 및 주의사항

### 8.1 분석 과정에서 잘못 판단했던 것

| 번호 | 처음 판단 | 확인 방법 | 정정 내용 |
|---|---|---|---|
| 1 | SSL 인증서 교체가 원인일 것이다 | 예외 위치(스케줄러 내장 DB 접속)와 파일 상태 확인 | SSL과 무관. 인증서 교체는 WAS 전체 재기동의 계기였을 뿐이다 |
| 2 | 체크포인트 쓰기 중 프로세스가 강제 종료되어 파일 뒷부분이 남았을 것이다 | HSQLDB의 script 저장 방식 확인 | 새 script를 별도 파일(\`.script.new\`)에 쓴 뒤 교체하는 방식이라 단순 강제 종료만으로는 이런 모양이 되기 어렵다. 2개 주체의 동시 기록으로 판단을 수정 |
| 3 | script의 53번째 줄에 헤더가 한 줄 끼어든 형태일 것이다 | 운영 script 전체를 다시 열어 확인 | 한 줄이 아니라 1~52줄이 53~104줄에 통째로 반복되어 있었다. 처음 재현 테스트는 한 줄 삽입으로 했으므로, 문서의 재현 절차(6.2)는 전체 이어 붙이기로 수정했다 |
| 4 | 같은 절대경로이므로 공유 스토리지(NFS 등) 구성일 것이다 | deploy 로그의 IP 확인 | IP가 같은 동일 장비의 프로세스 2개였다. 공유 스토리지가 아니라 같은 로컬 디스크를 직접 참조한다 |
| 5 | 기동 시간 차이가 있으면 락 충돌을 피한다 | 락 하트비트 동작 확인 | 먼저 연 쪽이 살아 있는 동안 하트비트가 계속 갱신되므로 시간 간격은 무관하다. 매번 거부된다 |
| 6 | 락 예외 메시지의 음수 값(-8281 ms)은 시계 오차일 것이다 | 예외 메시지 계산식 확인 | 단순히 "기록 시각 - 현재 시각"이며 과거 시각이면 음수다. 정상 값이다 |
| 7 | "이전에는 정상이었다"는 고객 말에 따라 기동 타이밍 문제일 것이다 | 예외 전파 구간 확인 | 이 예외는 웹앱 기동 단계까지 전달되어 해당 노드의 웹앱 기동이 실패할 수 있다. 로드밸런서가 있으면 다른 노드가 서비스를 받아 장애가 가려졌을 가능성이 있다. 고객사 확인 필요 |

### 8.2 제품 동작 관련 오해

| 번호 | 오해 | 실제 |
|---|---|---|
| 1 | 스케줄러를 안 쓰면 \`db/data\`는 필요 없다. 스케줄러 화면을 열어보면 파일이 재생성된다 | \`schedule.use=false\`이면 ERS Manager에 스케줄러 메뉴가 표시되지 않으므로 화면 진입 자체가 불가능하다. 재생성하려면 \`schedule.use=true\`로 바꾸고 재기동해야 한다 |
| 2 | 파일을 삭제하고 재기동하면 항상 새 파일이 생긴다 | \`schedule.use=false\`이면 기동 시 내장 DB에 접속하지 않아 새 파일이 생성되지 않는다 (정상) |
| 3 | 2개의 WAS가 문제이므로, 프로세스 1개인 환경에서는 발생하지 않는다 | Tomcat Reload 등 JVM을 그대로 두고 웹앱만 내렸다 올리는 경우에도 발생한다 (5.5) |
| 4 | \`server.diagnostics.use\`가 상태진단 스케줄러 설정이다 | 코드가 읽는 키는 \`diagnostics.use\`이다. 두 키는 별개다 |

### 8.3 작업 환경(도구) 관련

1. xlsx를 \`markitdown\`으로 변환하면 한글이 깨졌다. \`openpyxl\`로 UTF-8 출력하도록 스크립트를 따로 사용했다.
2. Bash 도구에서 \`/tmp\` 쓰기가 막혀 있었다. 임시 파일은 세션 전용 작업 폴더에 만들었다.
3. Windows용 \`java.exe\`는 Git Bash 경로(\`/c/Users/...\`)를 인식하지 못해 \`Could not find or load main class\` 오류가 났다. \`C:/Users/...\` 형식으로 지정했다.
4. 클래스패스에 공백이 있는 경로(\`ERS Develop\` 등)를 쓰면 번거로우므로 jar를 작업 폴더로 복사해서 사용한다.
5. deploy 로그가 3.5MB(약 4.7만 줄)여서 편집기/뷰어 도구로 한 번에 열리지 않았다. \`grep\`으로 키워드 검색 후 해당 줄 범위만 확인했다.
6. 락 충돌 재현(6.4) 시 프로세스 A가 \`HOLDING\`을 출력하기 전에 프로세스 B를 실행하면, B가 먼저 DB를 열어 버려 충돌이 재현되지 않는다 (JVM 기동이 느린 경우 발생). A의 출력을 확인한 뒤 B를 실행한다. 또한 이전 테스트의 프로세스가 남아 있으면 락 파일이 남을 수 있으므로 시작 전에 확인한다.
7. 재현 테스트를 제품 내장 DB 계정(제품 코드에 고정된 계정, 비밀번호)으로 하면 문서에 계정 정보가 들어간다. 범용 DB(\`SA\` 계정)로 새로 만들어 재현하는 것이 안전하다.

### 8.4 고객 소통 관련

1. 개발, 운영 파일을 모두 받은 경우, 어느 환경의 파일을 근거로 하는지 문장마다 명시한다. 운영 파일에서만 "중복 기록"이 확인되었고 개발은 정상 52줄이었으므로 구분하지 않으면 혼동된다.
2. "두 프로세스가 동시에 수정했다"는 표현은 증상 A(운영 script 중복)에는 맞지만 증상 B(락 거부)에는 맞지 않는다. 증상 B는 수정이 일어나기 전에 접속이 거부된 것이다.
3. "조치: 스케줄러를 끄세요"만 전달하면 스케줄러가 필요한 고객에게 해결책이 되지 않는다. 필요한 경우의 대안(7.2의 A, B)을 함께 제시한다.
4. 운영 환경의 노드 구성은 개발 로그로는 확인되지 않는다. 운영의 노드 수, 노드명, WAS 재기동 로그를 별도로 요청해야 한다.
5. 스케줄러 사용 여부를 끄도록 안내할 때는, 그동안 새로 등록한 작업이 있을 수 있으므로 작업 유무를 먼저 확인하도록 안내한다.

---

## 9. 고객 회신 시 근거 자료 정리

고객에게 "어느 파일에서 무엇을 확인했는지"를 함께 전달할 때 사용하는 표이다.

| 자료 | 확인한 내용 | 알아낸 것 |
|---|---|---|
| 오류 화면 캡처 | \`Database lock acquisition failure\`, 경로, 노드 표식(\`WAS-2\`) | 폴더를 비우고 재기동한 뒤에도 WAS-2에서 락 충돌이 발생 |
| deploy 로그 | 두 서버의 IP, 포트, 기동 시각, 애플리케이션 배포, 로그 상의 설치 경로 | 같은 장비의 WAS 2개가 같은 ReportingServer 디렉터리를 참조 |
| 운영 \`hsqldb.script\` | 1~52줄이 53~104줄에 그대로 반복 | 두 개의 완성된 script가 이어 붙은 형태 |
| 개발 \`hsqldb.script\` (삭제 전) | 52줄, 정상 구조, 등록된 작업 없음 | 개발은 손상되지 않았고 스케줄 작업이 없음 |
| 개발 \`hsqldb.script\` (삭제 후) | 일부 테이블 생성 구문이 없음 | 초기화가 끝나기 전에 중단된 것으로 해석 |
| \`server.properties\` (개발, 운영) | \`schedule.use=true\`, \`schedule.db.embedded=true\`, \`errorCollect.use=false\` | 스케줄러가 켜져 있어 내장 DB를 사용 중 |

---

## 10. 미확인 사항

1. 운영 환경의 WAS 노드 수와 구성 (개발은 로그로 확인, 운영은 미확인).
2. 두 WAS가 같은 디렉터리를 참조하는 것이 의도된 구성인지 (고객사 확인 필요).
3. 두 WAS가 같은 inode를 실제로 열고 있는지 (\`lsof\` 결과 미수령).
4. 로드밸런서 유무와 평소 재기동 방식 (이전에 정상이었다는 진술의 해석에 필요).
5. 증상 A에서 script가 통째로 2번 기록되는 정확한 순서 (재현하지 못함).
6. 5.5의 웹앱 Reload 시나리오는 소스 검토와 로그로 판단했으며 별도 재현은 하지 않았다.
7. 최초 자료(\`engine.log\`)에 있던 \`MalformedURLException: For input string: "8080null"\` (이미지 URL 포트 뒤에 \`null\`이 붙는 오류)는 이번 건과 별개로 보이며 원인을 분석하지 못했다.

---

## 부록 A. 명령어 모음

\`\`\`bash
# script 상태 확인
grep -n "SET DATABASE UNIQUE NAME" hsqldb.script
wc -l hsqldb.script
grep -n "^INSERT" hsqldb.script

# 설정 확인
grep -n "schedule.use\\|schedule.db\\|errorCollect\\|diagnostics" server.properties

# deploy 로그 확인
grep -n "is being started" deploy.log
grep -n "SERVER-0002\\|SERVER-0568" deploy.log
grep -n "Distributing the application" deploy.log

# 프로세스가 같은 파일을 여는지 직접 확인 (고객사 서버, 두 WAS 동시 기동 상태)
ps -ef | grep <서버명>
lsof -p <PID> | grep hsqldb
stat <설치경로>/ReportingServer/db/data/hsqldb.script

# 락 파일 확인 (16바이트, 앞 8바이트 HSQLLOCK)
ls -l hsqldb.lck
xxd hsqldb.lck | head -2
\`\`\`

## 부록 B. 재현용 Java 코드

범용 테스트 DB를 만들고 여는 단순 코드이며 제품 코드와 무관하다.

\`CreateDb.java\`

\`\`\`java
import java.sql.*;

public class CreateDb {
    public static void main(String[] a) throws Exception {
        Class.forName("org.hsqldb.jdbc.JDBCDriver");
        Connection c = DriverManager.getConnection("jdbc:hsqldb:file:" + a[0] + "/testdb", "SA", "");
        Statement s = c.createStatement();
        s.execute("CREATE TABLE T_TASK (ID VARCHAR(20) PRIMARY KEY, NOTE VARCHAR(50))");
        s.execute("INSERT INTO T_TASK VALUES ('A1','first')");
        s.execute("INSERT INTO T_TASK VALUES ('A2','second')");
        s.execute("CHECKPOINT");
        s.execute("SHUTDOWN");
        System.out.println("created");
    }
}
\`\`\`

\`OpenDb.java\`

\`\`\`java
import java.sql.*;

public class OpenDb {
    public static void main(String[] a) throws Exception {
        Class.forName("org.hsqldb.jdbc.JDBCDriver");
        try {
            Connection c = DriverManager.getConnection("jdbc:hsqldb:file:" + a[0] + "/testdb", "SA", "");
            ResultSet r = c.createStatement().executeQuery("SELECT COUNT(*) FROM T_TASK");
            r.next();
            System.out.println("OPEN OK, rows=" + r.getInt(1));
            c.close();
        } catch (SQLException e) {
            System.out.println("OPEN FAILED: " + e.getMessage());
        }
    }
}
\`\`\`

\`HoldDb.java\`

\`\`\`java
import java.sql.*;

public class HoldDb {
    public static void main(String[] a) throws Exception {
        Class.forName("org.hsqldb.jdbc.JDBCDriver");
        Connection c = DriverManager.getConnection("jdbc:hsqldb:file:" + a[0] + "/testdb", "SA", "");
        System.out.println("HOLDING");
        Thread.sleep(Long.parseLong(a[1]) * 1000L);
    }
}
\`\`\`

`,Ly=`---
title: Oracle Cloud 도메인 등록 및 https 적용방법
date: 2026-10-07
---
# Oracle Cloud 도메인 등록 및 https 적용방법

목차

0. 개요
1. 사전 준비
2. 도메인 등록 (DuckDNS)
3. 포트 열기 (80, 443)
4. nginx 설치와 설정
5. 인증서 발급 (Let's Encrypt, certbot)
6. 일부 경로만 공개하기 (선택)
7. 최종 확인
8. 시행착오와 해결
9. 운영 시 주의사항
10. 되돌리는 방법
- 부록 A. Windows PowerShell에서 서버 작업 스크립트 실행
- 부록 B. 다른 도메인에서 Tomcat API를 호출할 때(CORS)

## 0. 개요

### 0.1 목적

Oracle Cloud(OCI)의 무료 인스턴스에서 Tomcat이 \`http://서버IP:8080\`으로 서비스되고 있을 때, 무료 도메인(DuckDNS)을 연결하고 Let's Encrypt 인증서로 \`https://도메인\`을 적용한다.

### 0.2 왜 필요한가

HTTPS로 제공되는 웹 페이지(예: GitHub Pages)는 브라우저가 \`http://\` 주소로 보내는 요청을 차단한다(mixed content). 서버가 \`http://IP:8080\`뿐이면 HTTPS 페이지에서 서버의 API를 호출할 수 없다. 서버에 HTTPS 주소가 필요하다.

Let's Encrypt는 IP 주소가 아니라 도메인 이름에 대해 인증서를 발급하므로 도메인이 먼저 필요하다.

### 0.3 최종 구성

\`\`\`
브라우저 --https:443--> nginx --http:8080--> Tomcat
                         |
                         +-- http:80 은 https 로 리다이렉트
\`\`\`

- nginx가 443 포트에서 인증서로 암호화를 처리하고, 요청을 같은 서버의 Tomcat(8080)으로 전달한다.
- Tomcat 설정은 바꾸지 않는다. 기존 \`http://IP:8080\` 접속도 그대로 동작한다.
- 인증서는 90일마다 자동 갱신된다.

### 0.4 이 문서를 작성한 환경

| 항목 | 값 |
|---|---|
| 서버 | OCI Always Free 인스턴스, Oracle Linux 9.8 (aarch64) |
| 접속 계정 | \`opc\` (sudo 가능) |
| Tomcat | 9.0.122, \`/opt/tomcat\`, systemd 서비스 \`tomcat\` |
| nginx | 1.20.1 (Oracle Linux AppStream 저장소) |
| certbot | 3.1.0 (Oracle Linux EPEL 저장소) |
| 로컬 PC | Windows, PowerShell 5.1, OpenSSH 클라이언트 |
| 작업 시기 | 2026년 10월 |

다른 OS나 버전이면 패키지 이름과 저장소 이름이 다를 수 있다.

### 0.5 문서에서 쓰는 예시 값

본인의 값으로 바꿔서 입력한다.

| 표기 | 의미 |
|---|---|
| \`example.duckdns.org\` | 등록할 도메인 |
| \`203.0.113.10\` | 서버 공인 IP (문서 작성용 예시 주소) |
| \`<키파일>\` | SSH 개인키 파일 경로 (예: \`ssh-key-xxxx.key\`) |
| \`app1\`, \`app2\` | Tomcat에 배포된 애플리케이션 이름 (6절) |

## 1. 사전 준비

1. 서버에 SSH로 접속할 수 있어야 한다.

   \`\`\`
   ssh -i <키파일> opc@203.0.113.10
   \`\`\`

2. Tomcat이 8080 포트에서 응답하는지 확인한다.

   \`\`\`
   curl -I http://203.0.113.10:8080/
   \`\`\`

3. 서버에서 \`sudo\`를 비밀번호 없이 쓸 수 있는지 확인한다.

   \`\`\`
   sudo -n true && echo ok
   \`\`\`

   이후 명령에서는 \`sudo -n\`을 쓴다. 비밀번호를 물어보는 상황이면 멈추지 않고 바로 실패하게 하기 위해서다.

4. 서버에서 사용할 포트를 정리한다. 이 문서는 80(인증서 발급, 리다이렉트)과 443(HTTPS)을 사용한다. 두 포트에서 이미 도는 프로그램이 없어야 한다.

   \`\`\`
   sudo ss -tlnp | grep -E ':(80|443) ' || echo "80, 443 사용 중인 프로그램 없음"
   \`\`\`

## 2. 도메인 등록 (DuckDNS)

### 2.1 도메인 만들기

1. \`https://www.duckdns.org\`에 접속하여 소셜 계정(GitHub, Google 등)으로 로그인한다.
2. \`sub domain\` 입력란에 원하는 이름을 입력하고 \`add domain\`을 누른다. 결과는 \`이름.duckdns.org\`가 된다.
3. 목록에 나타난 도메인의 \`current ip\` 칸에 서버의 공인 IP를 입력하고 \`update ip\`를 누른다.

화면의 문구는 사이트 개편에 따라 달라질 수 있다.

### 2.2 확인

로컬 PC에서 도메인이 서버 IP로 연결되는지 확인한다.

\`\`\`
nslookup example.duckdns.org
\`\`\`

\`Address\`가 서버의 공인 IP로 나오면 된다. 바로 나오지 않으면 잠시 기다린 뒤 다시 확인한다.

기존 8080 접속이 도메인으로도 되는지 확인한다.

\`\`\`
curl -I http://example.duckdns.org:8080/
\`\`\`

### 2.3 공인 IP 고정 (권장)

인스턴스를 중지했다가 시작하면 기본 공인 IP(임시 IP)가 바뀔 수 있다. IP가 바뀌면 DuckDNS의 \`current ip\`를 다시 수정해야 한다. 이를 피하려면 OCI 콘솔에서 인스턴스의 공용 IP를 "예약된 공용 IP"로 바꾼다. 메뉴 이름은 콘솔 버전에 따라 다를 수 있다.

## 3. 포트 열기 (80, 443)

포트는 두 곳에서 모두 열어야 한다. 한 곳이라도 닫혀 있으면 바깥에서 접속되지 않는다.

- OCI의 보안 목록(콘솔에서 설정, 인스턴스 바깥의 방화벽)
- 서버의 firewalld(인스턴스 안쪽의 방화벽)

### 3.1 OCI 보안 목록 (콘솔)

1. OCI 콘솔 왼쪽 위의 메뉴(≡)에서 \`Networking\` > \`Virtual cloud networks\`를 연다.
2. 인스턴스가 연결된 VCN 이름을 클릭한다. VCN 자체를 수정하는 것이 아니다.
3. 인스턴스가 속한 서브넷을 선택하고, \`Security\` 탭의 \`Security Lists\`에서 \`Default Security List for ...\`를 연다. 화면 구성은 콘솔 버전에 따라 다를 수 있다.
4. \`Add Ingress Rules\`를 누르고 아래 규칙을 두 개 추가한다.

   | 항목 | 규칙 1 | 규칙 2 |
   |---|---|---|
   | Stateless | 체크하지 않음 | 체크하지 않음 |
   | Source Type | CIDR | CIDR |
   | Source CIDR | \`0.0.0.0/0\` | \`0.0.0.0/0\` |
   | IP Protocol | TCP | TCP |
   | Source Port Range | 비워 둠 | 비워 둠 |
   | Destination Port Range | \`80\` | \`443\` |

5. 저장한다. 기존 규칙(SSH 22번, 8080 등)은 수정하지 않는다.

인스턴스에 NSG(네트워크 보안 그룹)가 연결되어 있다면 NSG에도 같은 규칙을 추가해야 한다. 인스턴스 상세 화면의 \`Network security groups\` 항목에서 확인할 수 있다.

### 3.2 서버 방화벽 (firewalld)

1. 현재 영구 설정에 저장된 포트를 확인한다.

   \`\`\`
   sudo firewall-cmd --permanent --list-ports
   \`\`\`

   기존에 사용하던 포트(예: \`8080/tcp\`)가 목록에 있는지 확인한다.

2. \`http\`, \`https\` 서비스를 현재 적용 설정과 영구 설정에 각각 추가한다.

   \`\`\`
   sudo firewall-cmd --add-service=http --add-service=https
   sudo firewall-cmd --permanent --add-service=http --add-service=https
   \`\`\`

3. 확인한다.

   \`\`\`
   sudo firewall-cmd --list-services
   \`\`\`

   \`http https\`가 포함되어야 한다.

주의: \`firewall-cmd --reload\`는 사용하지 않는다. reload는 영구 설정을 다시 읽으므로, 영구 설정에 저장하지 않고 임시로 연 포트가 닫힌다. 1번에서 기존 포트가 영구 설정에 있음을 확인했다면 reload를 해도 되지만, 이 절차에서는 reload가 필요 없다.

## 4. nginx 설치와 설정

### 4.1 설치

\`\`\`
sudo dnf install -y nginx
rpm -q nginx
\`\`\`

### 4.2 SELinux 설정

SELinux가 \`Enforcing\`이면 nginx가 다른 포트(8080)로 연결하는 것이 기본으로 차단된다.

\`\`\`
getenforce
sudo setsebool -P httpd_can_network_connect 1
getsebool httpd_can_network_connect
\`\`\`

\`httpd_can_network_connect --> on\`으로 나오면 된다. \`-P\`는 재부팅 후에도 유지한다는 뜻이다. SELinux 자체를 끄는 설정이 아니다. 이 설정이 없으면 nginx가 Tomcat에 연결하지 못해 \`502 Bad Gateway\`가 나오는 것이 일반적이다. 이 문서의 작업에서는 사전에 설정하여 해당 오류를 직접 겪지는 않았다.

### 4.3 설정 파일 작성

\`/etc/nginx/conf.d/example.duckdns.org.conf\` 파일을 만든다. 처음에는 80 포트용으로만 작성한다. certbot이 이 파일을 읽어 443 설정을 추가한다.

\`\`\`nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.duckdns.org;
    server_tokens off;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect http://$host/ https://$host/;
        client_max_body_size 100m;
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
    }
}
\`\`\`

각 항목의 의미는 다음과 같다.

| 설정 | 의미 |
|---|---|
| \`server_name\` | 이 설정이 적용될 도메인. certbot이 이 값을 보고 인증서 대상 도메인을 찾는다 |
| \`proxy_pass\` | 요청을 전달할 Tomcat 주소 |
| \`proxy_set_header Host $host\` | 원래 요청의 호스트 이름을 Tomcat에 전달 |
| \`X-Forwarded-Proto\` | 원래 요청이 http인지 https인지 전달 |
| \`proxy_redirect\` | Tomcat이 \`http://도메인/...\`으로 보내는 리다이렉트를 \`https://\`로 바꿈 |
| \`client_max_body_size\` | 업로드 크기 제한. nginx 기본값은 1MB이므로 업로드가 있는 앱은 늘려야 한다 |
| \`proxy_read_timeout\`, \`proxy_send_timeout\` | 오래 걸리는 요청의 대기 시간 |

모든 경로를 Tomcat으로 전달하는 설정이다. 일부 경로만 공개하려면 6절을 참고한다.

### 4.4 문법 검사와 시작

\`\`\`
sudo nginx -t
sudo systemctl enable --now nginx
systemctl is-active nginx
\`\`\`

\`nginx -t\`가 \`test is successful\`을 출력해야 한다.

### 4.5 80 포트 접속 확인

서버 안에서 확인한다.

\`\`\`
curl -I -H "Host: example.duckdns.org" http://127.0.0.1/
\`\`\`

로컬 PC에서 확인한다.

\`\`\`
curl -I http://example.duckdns.org/
\`\`\`

Tomcat의 응답(예: \`200\`)이 나오면 정상이다. 서버 안에서는 되는데 로컬 PC에서만 시간 초과가 나면 3절(OCI 보안 목록, firewalld)을 다시 확인한다. 8절의 1번 항목을 참고한다.

## 5. 인증서 발급 (Let's Encrypt, certbot)

### 5.1 certbot 설치

Oracle Linux 9에서는 certbot이 기본 저장소에 없고 EPEL 저장소에 있다. EPEL 저장소 설정 파일은 설치되지만 기본으로 비활성화되어 있다.

\`\`\`
sudo dnf install -y oracle-epel-release-el9
dnf repolist --all | grep -i epel
sudo dnf install -y --enablerepo=ol9_developer_EPEL certbot python3-certbot-nginx
certbot --version
\`\`\`

- 두 번째 명령에서 저장소 이름(\`ol9_developer_EPEL\`)과 \`disabled\` 상태를 확인한다. 이름이 다르면 그 이름을 \`--enablerepo\`에 사용한다.
- \`--enablerepo\`는 이 명령 한 번에만 저장소를 켠다. 저장소 설정은 비활성화된 상태로 남는다.
- 이 저장소는 Oracle이 개발용으로 제공하는 EPEL이다. 운영 환경 정책에 맞는지 확인한다.

### 5.2 인증서 발급

Let's Encrypt 이용약관(Subscriber Agreement)을 읽고 동의한 뒤 진행한다. 약관은 \`https://letsencrypt.org/repository/\`에서 볼 수 있다.

이메일 없이 발급하는 경우:

\`\`\`
sudo certbot --nginx -d example.duckdns.org --non-interactive --agree-tos --register-unsafely-without-email --redirect
\`\`\`

이메일을 등록하는 경우(만료 임박, 갱신 실패 알림을 받을 수 있다):

\`\`\`
sudo certbot --nginx -d example.duckdns.org --non-interactive --agree-tos -m 본인이메일 --redirect
\`\`\`

| 옵션 | 의미 |
|---|---|
| \`--nginx\` | nginx 설정을 읽어 도메인을 확인하고 인증서 적용 설정까지 자동으로 수정 |
| \`-d\` | 인증서를 발급받을 도메인 |
| \`--non-interactive\` | 질문 없이 실행 |
| \`--agree-tos\` | 이용약관에 동의 |
| \`--register-unsafely-without-email\` | 이메일 없이 등록. 만료 경고 메일을 받을 수 없다 |
| \`--redirect\` | http 요청을 https로 리다이렉트하는 설정 추가 |

발급은 80 포트로 Let's Encrypt가 도메인 소유를 확인하는 방식(HTTP-01)으로 진행된다. 80 포트가 바깥에서 접속되지 않으면 실패한다.

정상이면 다음과 비슷한 출력이 나온다.

\`\`\`
Account registered.
Requesting a certificate for example.duckdns.org

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/example.duckdns.org/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/example.duckdns.org/privkey.pem
This certificate expires on 2027-01-05.
...
Successfully deployed certificate for example.duckdns.org to /etc/nginx/conf.d/example.duckdns.org.conf
Congratulations! You have successfully enabled HTTPS on https://example.duckdns.org
\`\`\`

### 5.3 자동 갱신 활성화

인증서 유효기간은 90일이다. certbot 패키지에는 갱신용 systemd 타이머가 포함되어 있지만 설치 직후에는 비활성화(\`disabled\`)되어 있었다. 직접 활성화해야 한다.

\`\`\`
sudo systemctl enable --now certbot-renew.timer
systemctl is-enabled certbot-renew.timer
systemctl list-timers certbot-renew.timer
\`\`\`

갱신이 실제로 되는지 시험한다. Let's Encrypt의 시험용 서버로 하는 모의 실행이며 실제 인증서는 바뀌지 않는다.

\`\`\`
sudo certbot renew --dry-run
\`\`\`

\`all simulated renewals succeeded\`가 나오면 정상이다. 인증서 정보와 만료일은 다음으로 확인한다.

\`\`\`
sudo certbot certificates
\`\`\`

### 5.4 certbot이 수정한 nginx 설정

certbot은 4.3절의 파일을 다음과 같이 바꾼다. 기존 \`server\` 블록이 443용이 되고, 80용 리다이렉트 블록이 새로 생긴다.

\`\`\`nginx
server {
    server_name example.duckdns.org;
    server_tokens off;

    location / {
        ...(4.3절과 동일)...
    }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/example.duckdns.org/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/example.duckdns.org/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = example.duckdns.org) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    listen [::]:80;
    server_name example.duckdns.org;
    return 404; # managed by Certbot
}
\`\`\`

\`managed by Certbot\` 주석이 붙은 줄은 certbot이 관리하므로 직접 수정하지 않는다.

## 6. 일부 경로만 공개하기 (선택)

4.3절의 설정은 도메인의 모든 경로를 Tomcat으로 전달한다. Tomcat에 여러 애플리케이션이 있고 그중 일부만 도메인으로 공개하려면, 허용할 경로만 전달하고 나머지는 404로 막는다.

### 6.1 설정

\`location /\` 블록을 다음 두 블록으로 바꾼다. 앱 이름은 Tomcat의 \`webapps\` 아래 폴더 이름이다.

\`\`\`
ls /opt/tomcat/webapps
\`\`\`

\`\`\`nginx
    location ~ ^/(app1|app2)(/|$) {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect http://$host/ https://$host/;
        client_max_body_size 100m;
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
    }

    location / {
        return 404;
    }
\`\`\`

- 요청 경로가 접두어 위치(\`location /\`)와 정규식 위치(\`location ~\`)에 모두 맞으면 정규식 위치가 선택된다. 따라서 \`app1\`, \`app2\`로 시작하는 경로만 전달되고 나머지는 \`location /\`에서 404가 된다.
- \`proxy_pass\`에 경로를 붙이지 않는다(\`http://127.0.0.1:8080\`까지만). 정규식 위치에서는 요청 경로가 그대로 전달된다.
- \`8080\`으로 직접 접속하는 방식은 이 설정과 무관하게 그대로 동작한다.

### 6.2 안전하게 적용하는 방법

설정 파일을 백업하고, 문법 검사에 실패하면 되돌리고, 성공하면 \`reload\`로 적용한다. \`reload\`는 접속을 끊지 않고 설정만 다시 읽는다. \`restart\`는 사용하지 않는다.

\`\`\`
CONF=/etc/nginx/conf.d/example.duckdns.org.conf
sudo cp -p $CONF $CONF.bak
(설정 파일 수정)
sudo nginx -t && sudo systemctl reload nginx || sudo cp -p $CONF.bak $CONF
\`\`\`

백업 파일 이름은 \`.conf\`로 끝나지 않게 한다(\`.bak\`). nginx는 \`conf.d/*.conf\`만 읽으므로 백업 파일이 설정에 섞이지 않는다.

### 6.3 확인

\`\`\`
curl -sS -L --max-redirs 5 -o /dev/null -w "%{http_code}  hops=%{num_redirects}  final=%{url_effective}\\n" https://example.duckdns.org/app1/
curl -sS -o /dev/null -w "%{http_code} -> %{redirect_url}\\n" https://example.duckdns.org/app1
curl -sS -o /dev/null -w "%{http_code}\\n" https://example.duckdns.org/
\`\`\`

- 첫 번째: \`200\`, 최종 주소가 \`https://\`로 시작해야 한다.
- 두 번째(끝에 \`/\`가 없는 주소): \`302 -> https://example.duckdns.org/app1/\`처럼 \`https\`로 리다이렉트되어야 한다. \`http://\`나 \`:8080\`이 나오면 \`proxy_redirect\` 설정을 확인한다.
- 세 번째(허용하지 않은 경로): \`404\`.

### 6.4 애플리케이션이 http로 인식하는 문제

nginx와 Tomcat 사이는 http이므로 Tomcat은 모든 요청을 http로 인식한다. 앱이 \`request.getScheme()\`으로 절대 주소를 만들어 응답에 넣으면 \`http://...\` 주소가 나올 수 있다. 확인 방법은 앱의 화면 소스에서 \`:8080\` 또는 \`http://\`로 시작하는 링크를 찾는 것이다.

\`\`\`
curl -sS https://example.duckdns.org/app1/ | grep -oE ':8080|http://[^" ]+'
\`\`\`

해당 문자열이 나오지 않으면 문제가 없다. 나오는 경우 Tomcat의 \`server.xml\`에 \`RemoteIpValve\`를 추가하여 \`X-Forwarded-Proto\` 헤더를 인식하게 할 수 있다. 이 값을 바꾸려면 Tomcat 재기동이 필요하므로 이 문서의 작업에서는 적용하지 않았다.

## 7. 최종 확인

로컬 PC에서 실행한다. 인증서 검증을 끄는 옵션(\`-k\`)을 쓰지 않는다.

| 확인 | 명령 | 기대 결과 |
|---|---|---|
| DNS | \`nslookup example.duckdns.org\` | 서버 공인 IP |
| HTTPS | \`curl -I https://example.duckdns.org/\` | \`HTTP/1.1 200\`, 인증서 오류 없음 |
| http 리다이렉트 | \`curl -sS -o /dev/null -w "%{http_code} -> %{redirect_url}\\n" http://example.duckdns.org/\` | \`301 -> https://example.duckdns.org/\` |
| 기존 8080 접속 | \`curl -I http://example.duckdns.org:8080/\` | 이전과 동일한 응답 |
| 인증서 만료일 | 서버에서 \`sudo certbot certificates\` | 약 90일 뒤 |
| 갱신 타이머 | 서버에서 \`systemctl is-enabled certbot-renew.timer\` | \`enabled\` |
| 갱신 시험 | 서버에서 \`sudo certbot renew --dry-run\` | \`all simulated renewals succeeded\` |

브라우저에서도 \`https://example.duckdns.org/\`에 접속하여 주소창에 인증서 경고가 없는지 확인한다.

## 8. 시행착오와 해결

작업 중 실제로 겪은 문제와 해결 방법이다. 같은 증상이 보이면 해당 항목을 먼저 확인한다.

### 8.1 OCI 규칙을 추가했는데도 80, 443이 시간 초과

- 증상: OCI 콘솔에서 인그레스 규칙을 추가했는데도 \`curl http://도메인:80/\`이 \`Connection timed out\`으로 끝난다.
- 확인된 사실: 규칙을 추가한 직후에도 시간 초과였고, 서버에서 firewalld에 \`http\`, \`https\`를 열고 nginx를 시작한 뒤에는 같은 OCI 규칙으로 접속되었다.
- 추정되는 원인: 그 시점에 서버의 firewalld가 80, 443을 열지 않았고 80 포트를 듣는 프로그램도 없었다. 이 상태에서는 OCI 규칙이 정상이어도 바깥에서는 시간 초과로 보인 것으로 판단한다.
- 해결: 3.2절(firewalld)과 4절(nginx 시작)을 먼저 끝낸 뒤 다시 확인한다.
- 교훈: OCI 규칙이 제대로 들어갔는지는 서버에서 80 포트를 열고 응답하는 프로그램을 띄운 뒤에야 판단할 수 있다. 시간 초과가 "연결 거부"로 바뀔 것이라고 기대하지 않는다. 이번 환경에서는 바뀌지 않았다.

### 8.2 firewall-cmd --reload로 기존 포트가 닫힐 수 있음

- 위험: 임시로 열어 둔 포트가 영구 설정에 없는 상태에서 \`--reload\`를 하면 그 포트가 닫힌다. 8080을 쓰는 서비스가 중단될 수 있다.
- 대응: 변경 전에 \`sudo firewall-cmd --permanent --list-ports\`로 기존 포트가 영구 설정에 있는지 확인한다. 그리고 reload 없이 현재 적용 설정과 영구 설정에 각각 추가한다(3.2절).
- 이번 환경에서는 \`8080/tcp\`가 이미 영구 설정에 있었고, reload는 쓰지 않았다.

### 8.3 certbot 패키지를 찾을 수 없음

- 증상: \`sudo dnf install certbot python3-certbot-nginx\`가 \`No match for argument: certbot\`으로 실패한다.
- 원인: Oracle Linux 9에서 certbot은 EPEL 저장소에 있다. \`oracle-epel-release-el9\`를 설치해도 저장소가 \`disabled\` 상태다. 설치 명령이 \`Nothing to do\`라고만 나와서 이미 활성화된 것으로 오해하기 쉽다.
- 해결: \`dnf repolist --all | grep -i epel\`로 저장소 이름과 상태를 확인하고, \`--enablerepo=<저장소 이름>\`을 붙여 설치한다(5.1절). 저장소를 영구적으로 켜지 않아도 된다.

### 8.4 certbot-renew.timer가 비활성화 상태

- 증상: certbot 설치 직후 \`systemctl list-unit-files | grep certbot\`에서 \`certbot-renew.timer\`가 \`disabled\`로 나온다. 인증서 발급 때 certbot은 "자동 갱신 작업을 설정했다"고 출력하지만, 이 출력만으로는 타이머가 켜졌는지 알 수 없다.
- 원인: 패키지가 타이머 유닛 파일만 설치하고 활성화하지 않는다. (발급 직후의 상태는 확인하지 않고 바로 활성화 명령을 실행했다.)
- 해결: \`sudo systemctl enable --now certbot-renew.timer\`를 직접 실행한다(5.3절). 이미 활성화되어 있어도 문제없다. 이후 \`certbot renew --dry-run\`으로 확인한다.
- 교훈: 갱신을 활성화하지 않으면 90일 뒤 인증서가 만료되어 HTTPS 접속이 모두 경고로 막힌다.

### 8.5 HTTPS를 적용했더니 기존 주소가 404

- 증상: 기존에 \`http://IP:8080/앱/...\`로 접속하던 페이지를 \`https://도메인/앱/...\`으로 열면 404가 나온다.
- 원인: nginx 설정에서 공개할 경로를 일부(예: 상태 API)로만 제한하고 나머지는 \`return 404\`로 막았기 때문이다. 의도한 동작이었지만 기존 앱까지 막힌다는 점을 미리 정하지 않았다.
- 해결: 공개할 경로를 먼저 정한다. 모두 공개하려면 4.3절의 \`location /\`를, 일부만 공개하려면 6절을 사용한다. 경로를 추가한 뒤에는 6.3절의 방법으로 확인한다.
- 참고: 이 설정은 \`8080\` 직접 접속에 영향을 주지 않는다.

### 8.6 HTTPS 페이지에서 http 서버를 호출하면 요청이 차단됨

- 증상: HTTPS로 제공되는 웹 페이지의 스크립트가 \`http://서버IP:8080/...\`을 호출하면 브라우저 콘솔에 mixed content 오류가 나고 요청이 전송되지 않는다.
- 원인: 브라우저는 HTTPS 페이지에서 http 주소로 가는 요청을 차단한다.
- 해결: 서버에 HTTPS 주소를 만들고(이 문서 전체), 스크립트가 호출하는 주소를 \`https://도메인/...\`으로 바꾼다.

### 8.7 Windows PowerShell에서 ssh 원격 명령이 문법 오류

- 증상: PowerShell에서 \`ssh ... 'echo "a"; grep -E "^(x)" ...'\`처럼 큰따옴표와 괄호가 들어간 명령을 한 줄로 보내면 서버에서 \`syntax error near unexpected token '('\`가 나온다.
- 원인: Windows PowerShell 5.1이 외부 명령에 인자를 넘길 때 문자열 안의 큰따옴표를 제거한다. 서버의 bash가 따옴표가 사라진 문장을 받는다. 이 경우 명령이 실행되기 전에 문법 오류로 거부되어 서버에는 변경이 없다.
- 해결: 명령을 스크립트 파일로 만들고 표준입력으로 전달한다(부록 A).

### 8.8 스크립트 첫 줄이 "command not found"

- 증상: 표준입력으로 보낸 스크립트의 첫 줄이 항상 \`bash: line 1: \uFEFF: command not found\`로 실패한다. 첫 줄이 변수 지정(\`TS=$(date ...)\`)이면 그 변수가 비어 있게 된다. 예를 들어 백업 폴더 이름의 날짜 부분이 빈 값이 되어 \`webapps-disabled-\`처럼 만들어졌다.
- 원인: PowerShell이 파이프로 보내는 문자열 맨 앞에 보이지 않는 BOM 문자가 붙는다. 이 문자가 첫 줄의 첫 단어에 붙어 명령 이름이 달라진다. \`$OutputEncoding\`을 BOM 없는 UTF-8로 설정해도 사라지지 않았다.
- 오해하기 쉬운 경우: 첫 줄이 조건 검사(\`sudo -n true && echo ok || echo "sudo 불가"\`)이면 sudo가 정상이어도 항상 실패 쪽 메시지가 출력된다. 이 때문에 sudo가 안 된다고 잘못 판단할 수 있다. 같은 스크립트의 다음 줄 이후의 \`sudo -n\` 명령은 정상 동작했다.
- 해결: 스크립트의 첫 줄을 빈 줄로 둔다. 첫 줄은 실패하지만 이후 줄은 정상 실행된다. 중요한 명령이나 변수 지정, 조건 검사를 첫 줄에 두지 않는다(부록 A).

### 8.9 스크립트 끝에 "$'\\r': command not found"

- 증상: 스크립트 실행이 끝날 때 마지막에 \`bash: line N: $'\\r': command not found\`가 한 줄 나온다.
- 원인: PowerShell이 파이프 끝에 줄바꿈(CRLF)을 붙인다.
- 해결: 무시해도 된다. 스크립트 본문에 영향을 주지 않는다. 스크립트 파일 자체는 LF 줄바꿈으로 저장한다.

### 8.10 설정 범위를 전역으로 할지 앱 단위로 할지

- 상황: 브라우저에서 다른 도메인의 페이지가 Tomcat을 호출하게 하는 CORS 설정(부록 B)을 처음에 Tomcat 전역 설정(\`conf/web.xml\`)에 넣으려 했다.
- 문제: 같은 Tomcat에 다른 앱이 있으면 전역 필터가 그 앱들의 요청에도 적용된다. 허용하지 않은 출처에서 \`Origin\` 헤더가 붙은 요청이 오면 403이 날 수 있다.
- 해결: 해당 앱의 \`WEB-INF/web.xml\`에만 적용하여 다른 앱에 영향이 없게 했다.

## 9. 운영 시 주의사항

1. 인증서 갱신 확인. 이메일 없이 발급하면 갱신 실패 알림을 받을 수 없다. 가끔 \`sudo certbot certificates\`로 만료일을 확인한다.
2. DuckDNS의 IP. 공인 IP가 바뀌면 DuckDNS의 \`current ip\`를 갱신해야 한다. 2.3절의 예약된 공용 IP를 권장한다.
3. 인스턴스 유지. OCI Always Free 인스턴스는 사용량이 매우 낮은 상태가 길게 이어지면 회수될 수 있다고 알려져 있다. Oracle의 현재 정책을 확인한다.
4. 8080 포트. 이 구성은 8080을 닫지 않는다. 8080은 암호화되지 않은 경로로 남는다. 운영 환경이라면 OCI 보안 목록과 firewalld에서 8080을 닫고 nginx를 통해서만 접속하게 하는 것이 안전하다. 닫기 전에 8080을 쓰는 다른 도구가 없는지 확인한다.
5. nginx 설정 변경. 설정을 바꾼 뒤에는 항상 \`nginx -t\`로 검사하고 \`reload\`로 적용한다.
6. 로그. 문제가 있으면 \`sudo tail /var/log/nginx/error.log\`, \`sudo tail /var/log/letsencrypt/letsencrypt.log\`를 확인한다.

## 10. 되돌리는 방법

필요한 단계만 수행한다. Tomcat과 기존 8080 접속은 영향받지 않는다.

1. nginx 중지와 비활성화

   \`\`\`
   sudo systemctl disable --now nginx
   \`\`\`

2. 인증서 삭제

   \`\`\`
   sudo certbot delete --cert-name example.duckdns.org
   sudo systemctl disable --now certbot-renew.timer
   \`\`\`

3. 방화벽 규칙 제거

   \`\`\`
   sudo firewall-cmd --remove-service=http --remove-service=https
   sudo firewall-cmd --permanent --remove-service=http --remove-service=https
   \`\`\`

4. SELinux 설정 복원

   \`\`\`
   sudo setsebool -P httpd_can_network_connect 0
   \`\`\`

5. OCI 콘솔에서 80, 443 인그레스 규칙 삭제, DuckDNS에서 도메인 삭제.

## 부록 A. Windows PowerShell에서 서버 작업 스크립트 실행

8.7, 8.8, 8.9절의 문제를 피하는 방법이다.

### A.1 방법

1. 서버에서 실행할 명령을 스크립트 파일로 저장한다. 줄바꿈은 LF로 저장하고, 첫 줄은 빈 줄로 둔다.

   \`\`\`
   
   echo "서버 이름: $(hostname)"
   sudo -n systemctl is-active nginx
   \`\`\`

2. PowerShell에서 파일 내용을 표준입력으로 전달한다.

   \`\`\`powershell
   $OutputEncoding = New-Object System.Text.UTF8Encoding $false
   Get-Content -Raw .\\script.sh | ssh -i <키파일> -o BatchMode=yes -o ConnectTimeout=15 opc@203.0.113.10 'bash -s'
   \`\`\`

### A.2 옵션 설명

| 옵션 | 의미 |
|---|---|
| \`-i <키파일>\` | 개인키 파일 지정. 파일 내용은 출력하거나 다른 곳에 복사하지 않는다 |
| \`-o BatchMode=yes\` | 암호나 확인 질문을 하지 않고 바로 실패. 스크립트 실행이 멈추는 것을 방지 |
| \`-o ConnectTimeout=15\` | 접속 대기 시간 15초 |
| \`'bash -s'\` | 표준입력으로 받은 내용을 bash 스크립트로 실행 |

### A.3 스크립트 작성 요령

- 스크립트 앞에 \`set -eo pipefail\`을 두면 중간 명령이 실패했을 때 멈춘다. 파이프(\`| tail\` 등) 중간의 실패도 감지한다.
- \`sudo\`는 \`sudo -n\`으로 쓴다.
- 서버에서 파일을 만들 때는 \`sudo -n tee 파일 > /dev/null <<'EOF' ... EOF\` 형태를 사용한다. \`'EOF'\`에 따옴표를 붙이면 본문의 \`$host\` 같은 변수가 서버에서 치환되지 않고 그대로 파일에 들어간다.
- 변경하기 전에 백업과 되돌리기를 스크립트에 넣는다(6.2절).

## 부록 B. 다른 도메인에서 Tomcat API를 호출할 때(CORS)

HTTPS를 적용한 뒤 \`https://다른사이트\`의 스크립트가 \`https://example.duckdns.org/api\`를 호출하려면 서버가 CORS 응답 헤더를 보내야 한다. 헤더가 없으면 브라우저가 응답을 막는다.

Tomcat에는 \`org.apache.catalina.filters.CorsFilter\`가 내장되어 있다. 해당 앱의 \`WEB-INF/web.xml\`에 추가한다. 앱 단위로 적용하면 같은 Tomcat의 다른 앱에 영향이 없다(8.10절).

\`\`\`xml
<filter>
  <filter-name>CorsFilter</filter-name>
  <filter-class>org.apache.catalina.filters.CorsFilter</filter-class>
  <init-param>
    <param-name>cors.allowed.origins</param-name>
    <param-value>https://허용할사이트</param-value>
  </init-param>
  <init-param>
    <param-name>cors.allowed.methods</param-name>
    <param-value>GET,HEAD,OPTIONS</param-value>
  </init-param>
  <init-param>
    <param-name>cors.support.credentials</param-name>
    <param-value>false</param-value>
  </init-param>
  <init-param>
    <param-name>cors.preflight.maxage</param-name>
    <param-value>600</param-value>
  </init-param>
</filter>
<filter-mapping>
  <filter-name>CorsFilter</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>
\`\`\`

확인은 \`Origin\` 헤더를 붙여 요청한다.

\`\`\`
curl -i -H "Origin: https://허용할사이트" https://example.duckdns.org/api    # Access-Control-Allow-Origin 헤더가 있어야 한다
curl -i -H "Origin: https://other.example" https://example.duckdns.org/api   # 403
curl -i https://example.duckdns.org/api                                     # Origin 이 없으면 CORS 와 무관하게 정상 응답
\`\`\`

nginx를 거치는 경우 nginx는 \`Origin\` 헤더를 그대로 Tomcat에 전달하므로, CORS 헤더는 Tomcat이 붙인다. nginx에서 \`add_header Access-Control-Allow-Origin\`을 따로 추가하면 헤더가 중복될 수 있으므로 추가하지 않는다.

`,Oy=`---
title: 응답없음(데드락) 원인 파악을 위한 jstack 덤프 파일 생성 방법
date: 2026-10-07
---
# 응답없음(데드락) 원인 파악을 위한 jstack 덤프 파일 생성 방법

## 1. 문서 개요

### 1.1 목적
Java 웹 애플리케이션(Tomcat)이 응답하지 않거나 CPU를 과점유할 때, 스레드 덤프를 수집하고 분석해서 원인을 좁혀 가는 절차를 정리한다. 이 문서의 순서대로 따라 하면 덤프 수집, 분석, 재현 테스트까지 동일하게 수행할 수 있다.

### 1.2 전제 조건
- 운영체제: Windows (Windows Server 2008 이상, Windows 10/11)
- 대상: Tomcat 위에서 동작하는 Java 웹 애플리케이션
- JDK가 설치되어 있을 것. \`jstack\`, \`jcmd\`, \`jps\`, \`jstat\`은 JDK에만 포함되고 JRE에는 없다.
- 대상 JVM과 같은 버전(또는 가까운 버전)의 JDK를 사용할 것
- 관리자 권한으로 명령 프롬프트 또는 PowerShell을 실행할 수 있을 것

### 1.3 기본 원칙
- 증거를 수집하기 전에는 재기동하지 않는다. 재기동하면 GC 로그와 스레드 상태가 사라진다.
- 덤프는 한 장이 아니라 간격을 두고 여러 장 뜬다.
- 덤프 분석에 들어가기 전에 애플리케이션 로그의 에러 메시지부터 확인한다.
- 원인 유형(데드락, 스레드 고갈, CPU 연산, GC)을 미리 단정하지 않는다.
- 한 번에 하나의 가설만 검증한다.

### 1.4 관련 문서
- \`Tomcat6_CPU_High_Usage_Troubleshooting.md\`: Linux 환경 기준 CPU 과부하 분석 절차

---

## 2. "응답없음"의 유형

화면상 증상은 모두 "응답이 없다"로 같지만 원인은 다음 네 가지로 나뉜다. 덤프와 보조 도구에서 보이는 모습이 서로 다르다.

| 유형 | 덤프에서 보이는 모습 | 함께 확인할 것 |
|---|---|---|
| 데드락 | \`BLOCKED\` 스레드가 서로의 락을 기다림. 덤프 끝에 \`Found one Java-level deadlock\` 표시 | 같은 스레드가 여러 덤프에서 계속 같은 락을 기다리는지 |
| 스레드 풀 고갈 | 작업 스레드 전부가 외부 응답 대기(\`socketRead0\` 등)나 같은 지점에 멈춤 | 외부 시스템(DB, 연동 서버) 응답 시간 |
| CPU 과점유(애플리케이션 연산) | 애플리케이션 코드에서 \`RUNNABLE\`인 스레드가 여러 덤프에 반복 등장 | 스레드별 CPU 사용량 |
| CPU 과점유(GC) | 애플리케이션 스레드는 대기 또는 정지 상태. 덤프만으로는 판별 어려움 | \`jstat\`, GC 로그, 로그의 \`OutOfMemoryError\` |

GC 과점유는 스레드 덤프에 잘 드러나지 않는다. JDK 8의 jstack은 GC 스레드를 항상 \`runnable\`로만 표시하므로, 반드시 6.8절의 방법으로 따로 확인한다.

---

## 3. 사전 준비

### 3.1 JDK 도구 위치 확인
\`\`\`bat
where jstack
\`\`\`
결과가 없으면 JDK의 \`bin\` 폴더(예: \`C:\\Program Files\\Java\\jdk-17\\bin\`)를 PATH에 추가하거나, 전체 경로로 실행한다.

### 3.2 대상 JVM 버전 확인
JDK 버전에 따라 덤프에 표시되는 정보가 다르다.

| 항목 | JDK 8 | JDK 11 이상 |
|---|---|---|
| 스레드별 누적 CPU 시간 (\`cpu=\`) | 표시 안 됨 | 표시됨 |
| 스레드 생성 후 경과 시간 (\`elapsed=\`) | 표시 안 됨 | 표시됨 |

대상 JVM 버전은 덤프 파일 두 번째 줄(\`Full thread dump Java HotSpot(TM) ... (25.141-b15 ...)\`)이나 애플리케이션 로그 상단의 \`java.version\`에서 확인한다. \`25.x\`는 JDK 8이다.

### 3.3 Tomcat 프로세스 ID(PID) 확인
방법 1. \`jps\` 사용
\`\`\`bat
jps -l
\`\`\`
\`org.apache.catalina.startup.Bootstrap\`으로 표시되는 줄의 앞 숫자가 PID이다.

방법 2. \`jps\`에 보이지 않을 때
Tomcat을 Windows 서비스로 실행하면 서비스 계정이 달라서 \`jps\`에 나오지 않을 수 있다. 이때는 다음 명령이나 작업 관리자의 PID 열로 확인한다.
\`\`\`bat
tasklist /fi "imagename eq tomcat6.exe"
\`\`\`
서비스 실행 파일 이름은 Tomcat 버전과 서비스 이름에 따라 다르다(\`tomcat7.exe\`, \`tomcat9.exe\` 등). 서비스가 아니면 \`java.exe\`이다.

이하 PID는 \`<PID>\`로 표기한다.

### 3.4 증거 저장 폴더 생성
\`\`\`bat
mkdir D:\\diag\\20260918
cd /d D:\\diag\\20260918
\`\`\`

### 3.5 권한
- 명령 프롬프트를 관리자 권한으로 실행한다.
- 서비스 계정(LocalSystem 등)으로 실행 중인 JVM에 접속이 거부되면, Sysinternals의 \`psexec\`으로 같은 계정 권한에서 실행한다.
\`\`\`bat
psexec -s -accepteula jstack -l <PID> > thread_dump_1.txt
\`\`\`

---

## 4. 덤프 생성

### 4.1 jstack으로 한 장 생성
\`\`\`bat
jstack -l <PID> > thread_dump_1.txt
\`\`\`
- \`-l\`: 각 스레드가 보유한 락(\`Locked ownable synchronizers\`)까지 출력한다. 데드락 분석에 필요하므로 항상 붙인다.

### 4.2 jcmd로 생성 (같은 내용)
\`\`\`bat
jcmd <PID> Thread.print -l > thread_dump_jcmd.txt
\`\`\`
jstack과 같은 정보를 준다. jstack이 실패할 때 대안으로 사용한다.

### 4.3 간격을 두고 여러 장 생성 (권장)
한 장으로는 "잠깐 대기 중인지, 계속 멈춰 있는지" 구분할 수 없다. 10~20초 간격으로 3장 이상 뜬다. 아래 내용을 \`dump3.bat\`으로 저장해서 사용한다.
\`\`\`bat
@echo off
rem usage: dump3.bat <PID>
set TARGET_PID=%1
for /L %%i in (1,1,3) do (
  jstack -l %TARGET_PID% > thread_dump_%%i.txt
  timeout /t 10 /nobreak > nul
)
\`\`\`
실행:
\`\`\`bat
dump3.bat <PID>
\`\`\`
각 덤프 파일 첫 줄에 생성 시각이 기록되므로 파일 이름에 시각을 넣지 않아도 된다.

### 4.4 PowerShell에서 실행할 때 주의
- \`$PID\`는 PowerShell 예약 변수(현재 PowerShell 프로세스 ID)이므로 변수 이름으로 쓰지 않는다.
- Windows PowerShell 5.1의 \`>\` 리다이렉트는 파일을 UTF-16으로 저장한다. 이후 검색 도구에서 문제가 생길 수 있으므로 \`cmd /c\`로 감싸서 실행한다.
\`\`\`powershell
$targetPid = 12345
1..3 | ForEach-Object {
    cmd /c "jstack -l $targetPid > thread_dump_$_.txt"
    Start-Sleep -Seconds 10
}
\`\`\`

### 4.5 덤프와 같은 시점에 함께 수집할 것
덤프만으로는 원인을 확정할 수 없는 경우가 많다. 아래 항목을 덤프와 같은 시점에 수집한다.

| 항목 | 방법 | 용도 |
|---|---|---|
| 스레드별 CPU 사용량 | Process Explorer 캡처 (6.6.2절) | CPU를 쓰는 스레드 특정 |
| 힙/GC 상태 | \`jstat -gcutil <PID> 1000 30\` | GC 과점유 여부 |
| GC 로그 | 설정된 경로의 GC 로그 파일 복사 | GC 발생 이력 |
| 힙 덤프 | 설정된 경로의 \`.hprof\` 파일 확인 | 메모리를 채운 객체 확인 |
| 애플리케이션 로그 | 로그 폴더 전체 복사 | 에러, 요청별 처리 시간 |
| 작업 관리자 화면 | 프로세스 탭, 성능 탭 캡처 | 전체 CPU, 메모리 상황 |

---

## 5. 덤프 기본 구조 읽기

### 5.1 파일 헤더
\`\`\`
2026-09-18 13:58:00
Full thread dump Java HotSpot(TM) 64-Bit Server VM (25.141-b15 mixed mode):
\`\`\`
첫 줄은 덤프 생성 시각, 둘째 줄은 JVM 종류와 버전이다.

### 5.2 스레드 헤더 필드
\`\`\`
"http-nio-8080-exec-1" #96 daemon prio=5 os_prio=0 cpu=109.38ms elapsed=223.87s tid=0x... nid=0xfe8 waiting on condition [0x...]
   java.lang.Thread.State: WAITING (parking)
\`\`\`

| 필드 | 의미 |
|---|---|
| \`"http-nio-8080-exec-1"\` | 스레드 이름 |
| \`#96\` | JVM 내부 스레드 번호. 클수록 늦게 생성된 스레드 |
| \`cpu=\` | 스레드 생성 후 누적 CPU 시간 (JDK 11 이상) |
| \`elapsed=\` | 스레드 생성 후 경과 시간 (JDK 11 이상) |
| \`tid\` | JVM 내부 주소. OS 스레드 ID가 아니다 |
| \`nid\` | OS 스레드 ID(16진수). 작업 관리자/Process Explorer의 스레드 ID와 대조할 때 사용 |
| \`Thread.State\` | 스레드 상태 |

### 5.3 스레드 상태

| 상태 | 의미 |
|---|---|
| \`RUNNABLE\` | 실행 중이거나 실행 가능. 단, 네이티브 I/O 대기도 이 상태로 표시된다(6.3절) |
| \`BLOCKED\` | \`synchronized\` 진입을 위해 다른 스레드의 락을 기다림 |
| \`WAITING\` | 다른 스레드의 신호를 무기한 기다림 (\`Object.wait\`, \`LockSupport.park\`) |
| \`TIMED_WAITING\` | 시간 제한이 있는 대기 (\`Thread.sleep\`, \`wait(timeout)\`) |

### 5.4 스레드 분류
분석할 때는 위에서부터 읽지 말고 스레드 이름으로 먼저 분류한다.

| 분류 | 이름 예 | 분석 비중 |
|---|---|---|
| JVM/GC 내부 | \`GC task thread#0 (ParallelGC)\`, \`GC Thread#0\`, \`C2 CompilerThread0\`, \`VM Thread\` | 낮음 (단, GC 스레드 수는 6.8절에 활용) |
| Tomcat 커넥터 | \`http-nio-8080-exec-N\`, \`TP-Processor N\`, \`*-Acceptor\`, \`*-Poller\` | 중간 (요청 처리 상태 확인) |
| 애플리케이션 | 애플리케이션 패키지가 스택에 있는 스레드, 애플리케이션 전용 작업 스레드 | 높음 |

원인은 대부분 애플리케이션 스레드의 스택에서 나온다.

---

## 6. 분석 절차

### 6.1 상태별 스레드 수 집계
\`\`\`powershell
Select-String -Path .\\thread_dump_1.txt -Pattern 'java\\.lang\\.Thread\\.State: (\\w+)' |
  ForEach-Object { $_.Matches[0].Groups[1].Value } |
  Group-Object | Sort-Object Count -Descending | Format-Table Count, Name
\`\`\`
- \`BLOCKED\`가 많으면 락 경합 또는 데드락을 먼저 의심한다.
- \`RUNNABLE\`이 많아도 바로 CPU 과점유로 판단하지 않는다(6.3절).

### 6.2 데드락 확인
\`\`\`powershell
Select-String -Path .\\thread_dump_*.txt -Pattern 'Found one Java-level deadlock' -Context 0,20
\`\`\`
데드락이 있으면 덤프 끝에 다음과 같은 형식으로 표시된다.
\`\`\`
Found one Java-level deadlock:
=============================
"Thread-A":
  waiting to lock monitor 0x... (object 0x..., a java.lang.Object),
  which is held by "Thread-B"
"Thread-B":
  waiting to lock monitor 0x... (object 0x..., a java.lang.Object),
  which is held by "Thread-A"
\`\`\`
- JVM이 감지하는 것은 JVM 내부 락 사이의 데드락뿐이다.
- DB 락 대기처럼 JVM 밖에서 생기는 교착은 감지되지 않는다. 이 경우 스레드는 \`socketRead0\`(DB 응답 대기)에 머물러 있으므로, DB 쪽 락 정보를 따로 확인한다.

### 6.3 정상 대기 패턴 제외
다음 패턴은 일이 없어서 쉬고 있는 정상 상태이다. 분석 대상에서 제외한다.

| 스택 최상단 또는 특징 | 의미 |
|---|---|
| \`TaskQueue.take\`, \`LinkedBlockingQueue.take\` (WAITING) | Tomcat 작업 스레드가 요청을 기다림 |
| \`ThreadPoolExecutor.getTask\` | 스레드 풀이 작업을 기다림 |
| \`SocketInputStream.socketRead0\` (RUNNABLE) | 소켓에서 데이터를 기다림 (keep-alive 연결, 외부 응답 대기) |
| \`PlainSocketImpl.socketAccept\`, \`accept0\` (RUNNABLE) | 새 연결을 기다림 |
| \`Thread.sleep\` (TIMED_WAITING) | 주기 작업의 대기 |

\`socketRead0\`, \`accept0\`은 \`RUNNABLE\`로 표시되지만 실제로는 OS 커널에서 블로킹 대기 중이라 CPU를 거의 쓰지 않는다. 오래된 BIO/AJP 커넥터(\`TP-Processor\`)를 쓰는 Tomcat은 이런 스레드가 수십 개씩 보이므로 특히 주의한다.

단, 애플리케이션 작업 스레드가 \`socketRead0\`에서 오래 멈춰 있다면 외부 시스템 응답이 느린 것이므로 6.7절(스레드 풀 고갈)에서 다시 본다.

### 6.4 애플리케이션 코드에서 실행 중인 스레드 추출
스택 최상단이 I/O 대기가 아니면서 애플리케이션 패키지를 포함한 \`RUNNABLE\` 스레드만 뽑는다. \`<애플리케이션 패키지>\`는 실제 패키지명(예: \`com\\.example\`)으로 바꾼다.
\`\`\`powershell
$text   = Get-Content .\\thread_dump_1.txt -Raw
$blocks = $text -split '(\\r?\\n){2,}'
$ioTop  = 'socketRead0|socketWrite0|accept0|socketAccept|poll0|epollWait|SocketDispatcher\\.read0'

$blocks | Where-Object {
    $_ -match 'Thread\\.State: RUNNABLE\\s*\\r?\\n\\s*at (\\S+)' -and
    $Matches[1] -notmatch $ioTop -and
    $_ -match '<애플리케이션 패키지>'
}
\`\`\`
결과로 나온 스레드의 스택 최상단 메서드가 CPU를 쓰는 지점의 후보이다.

### 6.5 여러 덤프에서 같은 스레드 추적
스레드 이름은 재사용되거나 중복될 수 있으므로 \`nid\`로 추적한다.
\`\`\`powershell
Select-String -Path .\\thread_dump_*.txt -Pattern 'nid=0x738 ' -Context 0,8
\`\`\`

| 여러 덤프에서의 모습 | 판단 |
|---|---|
| 같은 스레드가 매번 같은 줄에 멈춰 있음 | 멈춤(hang). 락 대기 또는 외부 응답 대기 |
| 같은 스레드가 매번 같은 메서드 안에서 최상단만 바뀜 | 그 메서드 안에서 계속 연산 중 (CPU 사용) |
| 매번 다른 작업을 하고 있음 | 바쁜 것일 뿐 멈춘 것은 아님 |

### 6.6 CPU를 쓰는 스레드 특정

#### 6.6.1 JDK 11 이상: \`cpu=\` 증분 계산
\`cpu=\`는 스레드가 만들어진 뒤의 누적값이다. 한 장의 값만 보면 과거 사용량이 섞여 있으므로, 같은 \`nid\`의 두 덤프 사이 증분을 계산한다.

| 스레드 (nid) | 덤프1 cpu | 덤프2 cpu | 증분 | 판단 |
|---|---|---|---|---|
| 0x6644 | 7,625ms | 13,062ms | +5,437ms | 덤프 간격 동안 CPU를 많이 사용 |
| 0x4968 | 0ms | 0ms | 0ms | 대기 |

증분을 덤프 간격(초)으로 나누면 해당 스레드의 대략적인 CPU 점유율이 된다.

#### 6.6.2 JDK 8: OS 도구로 스레드별 CPU 확인
JDK 8 덤프에는 \`cpu=\`가 없으므로 OS 도구를 함께 사용한다.

1. Sysinternals Process Explorer를 실행한다.
2. Tomcat 프로세스를 더블클릭하고 Threads 탭을 연다.
3. CPU 열로 정렬해서 상위 스레드의 TID(10진수)를 기록한다. 화면을 캡처한다.
4. 같은 시점에 jstack을 뜬다.
5. TID를 16진수로 바꿔서 덤프의 \`nid\`와 대조한다.
\`\`\`powershell
'{0:x}' -f 1848          # 10진수 → 16진수 (결과: 738 → nid=0x738)
[Convert]::ToInt32('738', 16)   # 16진수 → 10진수
\`\`\`
Process Explorer를 설치할 수 없으면 \`wmic\`으로 스레드별 CPU를 조회한다. 값은 순간 샘플이므로 여러 번 실행한다.
\`\`\`bat
wmic path Win32_PerfFormattedData_PerfProc_Thread where "IDProcess=<PID>" get IDThread,PercentProcessorTime
\`\`\`

\`nid\`는 JVM을 재기동하면 바뀐다. 반드시 같은 시점에 수집한 자료끼리 대조한다.

### 6.7 스레드 풀 고갈 판단
1. 요청을 처리하는 스레드 풀을 이름으로 찾는다. (Tomcat 커넥터 스레드, 애플리케이션 전용 작업 스레드)
2. 그중 6.3절의 대기 패턴이 아닌 스레드 수를 센다.
3. 그 수가 풀의 최대 크기(Tomcat \`maxThreads\`, 애플리케이션 작업 스레드 수 설정값)와 같으면 풀이 고갈된 것이다.
4. 고갈된 스레드들이 모두 같은 외부 호출(DB, 연동 서버)에서 멈춰 있으면 그 외부 시스템이 원인 후보이다.

외부 시스템이 같은 Tomcat에 배포된 다른 웹 애플리케이션이라면, 그쪽의 느린 응답은 독립 원인이 아니라 같은 JVM 과부하의 결과일 수 있다. 분석 전에 배포 구조(어떤 웹앱이 같은 Tomcat에 있는지)를 먼저 확인한다.

### 6.8 GC 과점유 여부 확인

#### 6.8.1 CPU 코어 수 추정
JDK 8 기본 설정(ParallelGC)에서 GC 스레드 수는 논리 CPU 수와 같다(8개 이하일 때).
\`\`\`powershell
(Select-String -Path .\\thread_dump_1.txt -Pattern '^"GC task thread#').Count
\`\`\`
결과가 4이면 CPU 4개 서버이다. 작업 스레드 수가 CPU 수와 같거나 많으면, 작업 스레드만으로 CPU 100%가 될 수 있다.

#### 6.8.2 jstat으로 힙 상태 확인
\`\`\`bat
jstat -gcutil <PID> 1000 30
\`\`\`
1초 간격으로 30번 출력한다.

| 컬럼 | 의미 |
|---|---|
| \`O\` | Old 영역 사용률(%) |
| \`YGC\` / \`FGC\` | Young GC / Full GC 누적 횟수 |
| \`FGCT\` / \`GCT\` | Full GC / 전체 GC 누적 시간(초) |

- \`O\`가 95% 이상이고 \`FGC\`가 계속 증가하면 GC 과점유이다.
- \`O\`가 여유 있고 \`FGC\`가 그대로인데 CPU가 100%이면 애플리케이션 스레드가 원인이다.

#### 6.8.3 로그에서 OutOfMemoryError 검색
\`\`\`powershell
Select-String -Path .\\*.log -Pattern 'OutOfMemoryError'
\`\`\`
\`java.lang.OutOfMemoryError: GC overhead limit exceeded\`는 JVM이 시간의 98% 이상을 GC에 쓰면서 힙을 2%도 회수하지 못할 때 발생한다. 이 메시지가 있으면 그 시간대에 GC가 CPU를 점유했다고 볼 수 있다.

#### 6.8.4 작업 관리자의 메모리 값으로 판단하지 않는다
최대 힙(\`-Xmx\`)과 초기 힙(\`-Xms\`)이 같으면 JVM은 시작할 때 힙 전체를 확보한다. 힙 내부가 가득 차도 작업 관리자의 프로세스 메모리 값은 거의 변하지 않는다. 서버 메모리에 여유가 있어도 JVM 힙은 가득 찰 수 있으므로, 힙 상태는 반드시 \`jstat\`이나 GC 로그로 확인한다.

### 6.9 애플리케이션 로그와 교차 확인

#### 6.9.1 로그와 덤프의 시간 범위부터 맞춘다
\`\`\`powershell
Get-ChildItem .\\*.log | Select-Object Name, Length, LastWriteTime
\`\`\`
- 각 로그의 첫 타임스탬프와 마지막 타임스탬프를 확인한다.
- 로그 파일이 덤프보다 먼저 복사되었으면 덤프 시점의 로그는 들어 있지 않다.

#### 6.9.2 실패 메시지를 먼저 전부 뽑는다
\`\`\`powershell
Select-String -Path .\\report.log, .\\error.log -Pattern 'message=' |
  Where-Object { $_.Line -notmatch 'message=null' }
\`\`\`
로그 형식에 맞게 패턴을 바꾼다. 덤프 분석보다 이 단계를 먼저 하면 원인에 훨씬 빨리 도달한다.

#### 6.9.3 요청별 체류 시간 계산
요청 ID나 로그에 시작 시각과 종료 시각이 있으면 둘의 차이로 각 요청이 스레드를 점유한 시간을 계산한다. 다음 항목을 표로 정리한다.

| 요청 ID | 시작 | 종료 | 소요 시간 | 결과 | 요청 파라미터 |
|---|---|---|---|---|---|

- 오래 걸린 요청과 실패한 요청이 특정 화면(보고서)이나 특정 파라미터 조합에 몰려 있는지 본다.
- 같은 시각에 동시에 떠 있던 요청 수를 센다. 작업 스레드 수와 비교한다.
- 평소에는 빠른 요청이 특정 시간대에만 한꺼번에 느려졌다면, 그 요청들은 원인이 아니라 피해자일 가능성이 높다.

### 6.10 소스와 대조할 때
- 디컴파일한 소스의 줄 번호는 원본 소스의 줄 번호와 다르다. 덤프의 \`(파일.java:줄번호)\`와 정확히 맞지 않으면 메서드 이름과 호출 순서로 대조한다.
- 스택에 \`StringBuilder.append\`가 보인다고 해서 원본 코드가 \`StringBuilder\`를 쓴 것은 아니다. Java 8 컴파일러는 문자열 \`+\` 연산을 \`StringBuilder.append\` 호출로 바꾼다.
- 같은 메서드라도 버전마다 내용이 다를 수 있으므로 운영 중인 버전의 라이브러리를 기준으로 본다.

---

## 7. 재현 테스트 방법

### 7.1 실제 요청 찾기
웹 화면 URL을 그대로 호출하면 화면 틀(HTML, JavaScript)만 받고 실제 처리 요청은 실행되지 않는 경우가 많다. 실제 요청은 브라우저 개발자 도구로 찾는다.

1. 브라우저에서 \`F12\`를 눌러 개발자 도구를 연다.
2. Network 탭을 열고 Fetch/XHR 필터를 선택한다.
3. 화면을 새로 고치거나 해당 기능을 실행한다.
4. 처리 시간이 긴 요청(대개 POST)을 찾는다.
5. 요청을 오른쪽 클릭하고 Copy, Copy as cURL (bash)를 선택한다.

### 7.2 동시 요청 보내기
Git Bash에서 실행한다. \`URL\`과 \`DATA\`에 7.1절에서 복사한 값을 넣는다. 요청 본문에 고유 ID 값이 있으면 요청마다 다르게 만든다. 아래 예는 고유 ID 파라미터를 본문 맨 끝에 두고 뒤에 \`-$i\`를 붙이는 방식이다.
\`\`\`bash
URL='https://localhost/<서비스 경로>'
DATA='param1=value1&param2=value2&request_id=loadtest'

for i in $(seq 1 30); do
  curl -sk --max-time 300 -X POST "$URL" \\
    -H "Content-Type: application/x-www-form-urlencoded" \\
    --data "\${DATA}-$i" \\
    -o /dev/null -w "req#$i status=%{http_code} time=%{time_total}s\\n" &
done
wait
\`\`\`
- \`-k\`는 테스트 서버의 자체 서명 인증서를 무시하는 옵션이다. 운영 서버에는 사용하지 않는다.
- 응답 본문을 버리므로, 처음에는 \`-o result.txt\`로 한 건을 저장해서 정상 결과(에러 페이지가 아님)인지 확인한다.

### 7.3 A/B 비교 테스트 설계
원인으로 의심되는 조건 하나만 다른 두 가지 설정을 만들어 같은 조건에서 비교한다.

- 예: 같은 쿼리를 쓰되 줄바꿈 문자만 다른 보고서 파일 두 개 (\`CRLF_TEST.mrd\`, \`Non_CRLF_TEST.mrd\`)
- 동시 요청 수, 서버 상태, 측정 방법은 동일하게 맞춘다.
- 측정 항목: 응답 시간 분포, 작업 스레드의 \`cpu=\` 증분, 덤프에 잡힌 스택

### 7.4 테스트 중 덤프 함께 수집
요청을 백그라운드로 보내고, 그 사이에 덤프를 여러 장 뜬다.
\`\`\`bash
PID=19404
mkdir -p ab_test/case_a && cd ab_test/case_a

for i in $(seq 1 30); do
  curl -sk --max-time 300 -X POST "$URL" --data "\${DATA}-$i" \\
    -o /dev/null -w "req#$i time=%{time_total}s\\n" > "resp_$i.log" &
done

sleep 1;  jstack -l $PID > dump_t1s.txt
sleep 3;  jstack -l $PID > dump_t4s.txt
sleep 4;  jstack -l $PID > dump_t8s.txt

wait
cat resp_*.log | sort -t'#' -k2 -n
\`\`\`
비교할 다른 조건(case_b)도 같은 스크립트로 수행한다.

### 7.5 결과 해석
- 응답 시간이 일정 개수씩 묶여서 계단처럼 늘어나면, 그 묶음 크기가 실제로 동시에 처리되는 작업 스레드 수이다.
- 계단 사이의 간격이 요청 1건이 작업 스레드를 점유하는 시간이다.
- 같은 \`nid\` 스레드의 \`cpu=\` 증분이 한쪽 조건에서만 크게 늘면, 그 조건이 CPU를 쓰는 원인이다.
- 동시 실행 시 첫 묶음이 단독 실행보다 느리면, 스레드들이 CPU를 놓고 경합하는 CPU 사용 작업이다. I/O 대기라면 동시에 실행해도 서로 느려지지 않는다.

### 7.6 운영 서버 조건에 맞추기
- 운영 서버와 테스트 PC의 CPU 수가 다르면 결과가 달라진다. 테스트 PC에서 Tomcat이 쓸 CPU를 제한한다.
\`\`\`powershell
(Get-Process -Id <PID>).ProcessorAffinity = 0xF   # CPU 0~3번만 사용
\`\`\`
- 애플리케이션 작업 스레드 수 설정도 운영 서버와 맞춘다.
- 테스트 데이터의 크기와 구조(한 요청 안에서 반복 호출되는 횟수 포함)를 운영과 비슷하게 만든다. 1회 호출 비용만 크게 만들어 재현하면 원리는 확인되지만 운영에서의 영향 크기는 판단할 수 없다.

### 7.7 의심 로직을 격리해서 측정
로그 출력, 네트워크 같은 I/O 영향을 배제하려면 의심 로직만 떼어 낸 프로그램으로 측정한다. 아래 틀의 \`suspect\` 메서드에 의심 로직을 옮겨 넣는다.
\`\`\`java
import java.nio.file.*;
import java.nio.charset.StandardCharsets;

public class Bench {
    public static void main(String[] args) throws Exception {
        String input = new String(Files.readAllBytes(Paths.get(args[0])), StandardCharsets.UTF_8);
        for (int run = 1; run <= 5; run++) {
            long start = System.nanoTime();
            String out = suspect(input);
            long ms = (System.nanoTime() - start) / 1_000_000;
            System.out.println("run=" + run + " len=" + input.length() + " ms=" + ms + " outLen=" + out.length());
        }
    }

    // 의심 로직을 그대로 옮긴다. 파일, 네트워크, 로그 출력은 넣지 않는다.
    static String suspect(String s) {
        return s;
    }
}
\`\`\`
\`\`\`bat
javac Bench.java
java Bench input.txt
\`\`\`
- 입력 크기를 2배씩 늘려 가며 시간을 잰다. 시간이 2배 정도면 선형, 4배 정도면 입력 크기의 제곱에 비례하는 로직이다.
- I/O가 없는 이 프로그램에서도 같은 증가 패턴이 나오면, 원인은 I/O가 아니라 로직 자체이다.

### 7.8 측정 편차
- JVM은 처음 실행되는 코드를 점차 최적화(JIT 컴파일)하므로 첫 요청은 느리다. 몇 번 실행한 뒤 측정한다.
- 같은 테스트도 실행할 때마다 결과가 다를 수 있다. 같은 조건으로 여러 번 반복하고 경향을 본다.

---

## 8. 시행착오 정리

실제 분석 과정에서 겪은 시행착오이다. 같은 실수를 반복하지 않도록 기록한다.

### 8.1 RUNNABLE을 CPU 사용으로 판단함
- 상황: 덤프에 \`RUNNABLE\` 스레드가 60개 이상 있어서 CPU를 쓰는 스레드가 많다고 생각했다.
- 원인: 대부분 \`socketRead0\`, \`accept0\`에서 블로킹 대기 중인 커넥터 스레드였다.
- 방법: 스택 최상단을 확인하고 I/O 대기 패턴을 제외한다(6.3절).

### 8.2 작업 스레드 일부만 보고 결론을 냄
- 상황: 작업 스레드 4개 중 2개가 특정 메서드에서 연산 중인 것만 보고 원인을 단정했다.
- 원인: 나머지 2개는 외부 응답을 기다리고 있었고, 덤프마다 역할이 바뀌고 있었다.
- 방법: 같은 풀의 스레드를 모두, 모든 덤프에서 \`nid\`로 추적해 표로 정리한다(6.5절).

### 8.3 다른 덤프의 정보를 섞어서 판단함
- 상황: 연습용 덤프(JDK 17)에 있던 \`elapsed=\` 값을 운영 덤프(JDK 8)의 정보로 착각해 "직전에 재기동했다"고 잘못 판단했다.
- 원인: JDK 8 덤프에는 \`elapsed=\`가 없다.
- 방법: 덤프마다 JVM 버전(둘째 줄)과 파일 출처를 확인한다. JVM 가동 기간은 스레드 번호(\`#31978\`처럼 큰 번호면 오래 가동됨)로 짐작할 수 있다.

### 8.4 로그와 덤프의 시간대가 다른 것을 늦게 알아챔
- 상황: 로그는 11시대에 끝나고 덤프는 13시 58분에 생성되어, 그 사이에 무슨 일이 있었는지 잘못 추정했다.
- 원인: 로그 파일을 11시 26분에 복사해서 그 이후 내용이 없었다.
- 방법: 분석 전에 각 파일의 수정 시각과 첫/마지막 타임스탬프를 확인한다(6.9.1절).

### 8.5 로그의 OutOfMemoryError를 가장 늦게 발견함
- 상황: 덤프, 소스, 재현 테스트를 먼저 진행한 뒤에야 로그에서 \`OutOfMemoryError: GC overhead limit exceeded\` 5건을 발견했다. 이것이 CPU 과점유의 직접 원인이었다.
- 방법: 덤프 분석 전에 로그 전체에서 실패 메시지와 \`OutOfMemoryError\`부터 검색한다(6.8.3절, 6.9.2절).

### 8.6 누적 CPU 시간을 요청 1건의 비용으로 착각함
- 상황: 테스트 후 스레드의 \`cpu=\` 증가량(약 6초)을 요청 1건의 처리 비용으로 해석했다.
- 원인: 그 스레드는 테스트 중 요청 7~8건을 차례로 처리했고, 증가량은 그 합계였다.
- 방법: 증분을 처리 건수로 나누거나, 응답 시간 계단의 간격으로 1건 비용을 계산한다(7.5절).

### 8.7 1회 호출 비용만 보고 영향이 작다고 판단함
- 상황: 의심 로직의 1회 비용이 수십 ms라서 장애 원인으로 보기 어렵다고 생각했다.
- 원인: 해당 쿼리는 주 데이터의 레코드마다 다시 실행되는 구조였다. 레코드 수만큼 비용이 곱해진다.
- 방법: 1회 비용과 함께 요청 1건 안에서 몇 번 호출되는지(쿼리의 바인딩 구조, 로그의 호출 횟수)를 확인한다.

### 8.8 작업 관리자의 메모리 여유를 힙 여유로 판단함
- 상황: 장애 시 작업 관리자의 메모리에 여유가 있어서 GC 문제가 아니라고 생각했다.
- 원인: \`-Xms\`와 \`-Xmx\`가 같아서 프로세스 메모리 값은 고정되어 있었다. 힙 내부는 가득 찰 수 있다.
- 방법: \`jstat -gcutil\`과 GC 로그로 확인한다(6.8.4절).

### 8.9 System Idle Process 값을 사용률로 판단함
- 상황: 작업 관리자에서 System Idle Process가 98을 쓰고 있다고 생각했다.
- 원인: 이 값은 CPU가 쉬고 있는 비율이다. 실제 사용률은 상태 표시줄의 \`CPU 사용\`이다.

### 8.10 같은 Tomcat의 다른 웹앱 오류를 외부 원인으로 판단함
- 상황: 연동 서버가 503을 반환해서 외부 서버 과부하를 원인으로 생각했다.
- 원인: 연동 서버는 같은 Tomcat에 배포된 웹 애플리케이션이었다. 같은 JVM의 CPU/메모리 부족 때문에 함께 응답하지 못한 것이었다.
- 방법: 분석 전에 배포 구조를 확인한다. 덤프에서 연동 서버의 진입점(JSP, 서블릿)이 같은 커넥터 스레드에서 실행되는지 보면 확인할 수 있다.

### 8.11 화면 URL을 curl로 호출해서 부하 테스트를 함
- 상황: 화면 URL에 30건을 동시에 보냈지만 모두 0.2초 안에 끝났다.
- 원인: 해당 URL은 화면 틀(HTML)만 반환하고, 실제 처리는 브라우저의 JavaScript가 보내는 별도 요청이었다.
- 방법: 개발자 도구에서 실제 요청을 복사해서 사용한다(7.1절).

### 8.12 메모장에서 \`\\r\`로 검색해서 0건이 나옴
- 상황: 쿼리 파일에 단독 CR 문자가 있는지 메모장에서 \`\\r\`, \`\\r\\n\`으로 검색했지만 0건이었다.
- 원인: 메모장 찾기는 문자를 그대로 검색한다. \`\\r\`을 줄바꿈 문자가 아니라 백슬래시와 r로 찾는다.
- 방법: 스크립트로 문자 단위로 센다(10.2절). Notepad++를 쓴다면 보기, 기호 표시, 모든 문자 표시를 켜거나 정규식 모드에서 검색한다.

### 8.13 줄바꿈 문자가 복사, 저장 과정에서 바뀜
- 상황: 줄바꿈 문자를 확인하거나 테스트 데이터를 만들 때 결과가 예상과 달랐다.
- 원인: 다음 과정에서 단독 CR이 자동으로 LF나 CRLF로 바뀐다.
  - Python에서 파일을 텍스트 모드로 읽을 때
  - 브라우저나 채팅 창의 텍스트를 복사할 때
  - 일부 편집기나 입력 창에 붙여 넣을 때
- 방법: 확인은 바이너리 또는 \`ReadAllText\`로 한다(10.2절). 테스트 데이터는 Notepad++의 편집, 줄 끝 문자 변환, Macintosh(CR)로 만들고, 저장된 파일을 다시 확인한다.

### 8.14 디컴파일 소스의 줄 번호가 덤프와 맞지 않음
- 상황: 덤프의 줄 번호와 디컴파일 소스의 줄 번호가 수십 줄씩 차이 났다.
- 원인: 디컴파일러는 원본 줄 번호를 보존하지 않는다.
- 방법: 메서드 이름과 호출 순서로 대조한다. 여러 지점의 줄 번호 차이가 일정하면 같은 코드로 본다(6.10절).

### 8.15 로그 출력 I/O를 원인으로 의심함
- 상황: 로그 레벨이 높아 쿼리 전문을 매번 파일에 쓰고 있어서, 느려진 원인이 로그 I/O라고 의심했다.
- 확인: I/O가 없는 격리 프로그램에서도 같은 증가 패턴이 나왔고, 덤프에도 파일 쓰기가 아닌 연산 지점이 잡혔다. 로그 I/O는 원인이 아니었다.
- 방법: 의심 로직을 격리해서 측정한다(7.7절). 다만 운영에서 높은 로그 레벨은 별도로 낮추는 것이 좋다.

### 8.16 재기동으로 GC 로그가 사라지고 힙 덤프가 저장되지 않을 수 있음
- JDK 8의 \`-Xloggc\` 파일은 JVM이 시작할 때 비워진다. 재기동 전에 반드시 복사한다.
- \`-XX:HeapDumpPath\`를 파일 이름(예: \`java_pid.hprof\`)으로 지정하면, 그 파일이 이미 있을 때 새 힙 덤프가 저장되지 않는다. 폴더로 지정한다.
- 힙 덤프는 JVM이 떠 있는 동안 첫 번째 \`OutOfMemoryError\`에서 한 번만 생성된다.
- 힙 덤프에는 처리 중이던 데이터(개인정보 포함)가 들어 있다. 전달할 때는 보안 규정에 맞는 방법을 쓴다.

---

## 9. 장애 발생 시 수집 체크리스트

아래 순서로 수집한 뒤 재기동한다.

1. 작업 관리자의 프로세스 탭(CPU 열 정렬)과 성능 탭을 캡처한다.
2. Process Explorer에서 Tomcat 프로세스의 Threads 탭(CPU 열 정렬)을 캡처한다.
3. 2번과 같은 시점에 \`dump3.bat <PID>\`로 덤프 3장을 생성한다(4.3절).
4. \`jstat -gcutil <PID> 1000 30\` 결과를 저장한다.
\`\`\`bat
jstat -gcutil <PID> 1000 30 > jstat_gcutil.txt
\`\`\`
5. GC 로그 파일을 복사한다.
6. 힙 덤프 경로에 \`.hprof\` 파일이 있는지, 생성 시각이 언제인지 확인한다.
7. 애플리케이션 로그 폴더를 통째로 복사하고, 복사한 시각을 기록한다.
8. 재기동한다.
9. 6장 순서로 분석한다. 6.8.3절(OutOfMemoryError 검색)과 6.9.2절(실패 메시지)을 가장 먼저 수행한다.

---

## 10. 부록

### 10.1 명령어 모음

| 목적 | 명령 |
|---|---|
| Java 프로세스 목록 | \`jps -l\` |
| 서비스 프로세스 PID | \`tasklist /fi "imagename eq tomcat6.exe"\` |
| 스레드 덤프 | \`jstack -l <PID> > thread_dump.txt\` |
| 스레드 덤프 (대안) | \`jcmd <PID> Thread.print -l > thread_dump.txt\` |
| 힙/GC 상태 | \`jstat -gcutil <PID> 1000 30\` |
| 10진수 → 16진수 | \`'{0:x}' -f 1848\` (PowerShell) |
| 16진수 → 10진수 | \`[Convert]::ToInt32('738', 16)\` (PowerShell) |
| CPU 제한 (테스트) | \`(Get-Process -Id <PID>).ProcessorAffinity = 0xF\` (PowerShell) |

### 10.2 텍스트 파일의 줄바꿈 문자 확인
PowerShell에서 실행한다. \`ReadAllText\`는 줄바꿈 문자를 바꾸지 않고 읽는다.
\`\`\`powershell
$t = [IO.File]::ReadAllText('D:\\path\\query.txt')
'전체 CR : ' + ([regex]::Matches($t, '\\r')).Count
'CRLF    : ' + ([regex]::Matches($t, '\\r\\n')).Count
'단독 CR : ' + ([regex]::Matches($t, '\\r(?!\\n)')).Count
\`\`\`
Git Bash가 있으면 \`file\` 명령으로도 줄바꿈 종류를 확인할 수 있다.
\`\`\`bash
file query.txt
\`\`\`
결과에 \`with CRLF, CR line terminators\`처럼 CR이 따로 표시되면 단독 CR이 섞여 있는 것이다.

### 10.3 GC 로그와 힙 덤프 옵션 (JDK 8)
Tomcat을 Windows 서비스로 실행하면 Tomcat Monitor(\`tomcat6w.exe\` 등)의 Java 탭, Java Options 칸에 한 줄에 하나씩 입력한다. 적용하려면 재기동해야 한다.
\`\`\`
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=D:\\heapdump
-Xloggc:D:\\gclog\\gc_%t.log
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
-XX:+UseGCLogFileRotation
-XX:NumberOfGCLogFiles=10
-XX:GCLogFileSize=50M
\`\`\`
- \`%t\`는 JVM 시작 시각으로 바뀐다. 재기동해도 이전 로그가 남는다.
- \`PrintGCDateStamps\`는 로그에 실제 날짜와 시각을 남겨 애플리케이션 로그와 대조할 수 있게 한다.
- \`D:\\heapdump\`, \`D:\\gclog\` 폴더는 미리 만든다. 힙 덤프 경로에는 최대 힙 크기 이상의 여유 공간이 있어야 한다.
- 최대 힙(\`Maximum memory pool\`)은 물리 메모리에서 OS(약 2GB), 힙 이외의 JVM 메모리(0.5~1GB), 다른 프로세스 사용량을 뺀 범위 안에서 정한다.

JDK 9 이상은 통합 로깅 옵션을 사용한다. 경로의 드라이브 문자 콜론(\`D:\`)이 옵션 구분자와 겹치므로 경로를 따옴표로 감싼다. 적용 전에 테스트 환경에서 기동을 확인한다.
\`\`\`
-Xlog:gc*:file="D:\\gclog\\gc_%t.log":time,uptime:filecount=10,filesize=50m
\`\`\`

### 10.4 보안 점검 항목
분석 중 다음 설정이 보이면 함께 점검한다.
- \`-Dcom.sun.management.jmxremote.authenticate=false\`: 해당 포트에 접속할 수 있는 누구나 JVM을 원격으로 조작할 수 있다. 방화벽으로 접근 IP를 제한하거나 인증을 사용한다.

---

## 11. 참고: 적용 사례 요약

| 항목 | 내용 |
|---|---|
| 증상 | Tomcat CPU 100%, 웹 화면 응답 없음, 재기동 후 약 1주 뒤 재발 |
| 환경 | Windows Server 2008, Tomcat 6, JDK 8(ParallelGC), CPU 4개, 최대 힙 2GB, 보고서 서버와 데이터 연동 웹앱이 같은 Tomcat에 배포됨 |
| 1차 판단 | 덤프에서 작업 스레드가 쿼리 문자열 처리 메서드 안에서 연산 중인 것을 확인. A/B 테스트로 해당 로직이 CPU를 쓰는 것은 확인했으나, 1회 비용만으로는 장애 규모를 설명하지 못함 |
| 결정적 증거 | 애플리케이션 로그(\`report.log\`)의 \`OutOfMemoryError: GC overhead limit exceeded\` 5건. 모두 같은 보고서(\`sa_ju_2120r.mrd\`)를 조회 조건 없이 실행한 요청 |
| 원인 | 조회 조건(학번, 학과)이 비면 대상 전체를 조회하고, 레코드마다 서브쿼리가 다시 실행되며 결과가 메모리에 쌓임. 이런 요청 여러 건이 겹쳐 힙이 가득 차고 GC가 CPU를 점유함. 같은 Tomcat의 연동 웹앱도 함께 응답하지 못해 503 발생 |
| 조치 | 조회 조건 미입력 시 요청을 보내지 않도록 호출 화면 수정. GC 로그와 힙 덤프를 재기동 전에 확보하는 절차 마련 |
| 교훈 | 로그의 \`OutOfMemoryError\`를 먼저 확인했다면 분석 시간을 크게 줄일 수 있었다(8.5절) |

`,My=`---
title: Project Zomboid 크래시 원인 확인 절차
date: 2026-10-12
---
# Project Zomboid 크래시 원인 확인 절차

## 1. 개요

Project Zomboid(이하 PZ)가 실행 중 종료되었을 때 로그 파일을 이용해 종료 원인을 판별하는 절차를 정리한다.
모든 명령은 Windows 기본 PowerShell(5.1)에서 실행하며, 별도 프로그램 설치는 필요하지 않다.

- 적용 대상: Windows, Steam판 PZ (Build 41 / Build 42)
- 작성 기준 환경: Build 42.20.4, Windows 11, 모드 약 40개 사용
- 이 문서의 결과 예시는 모두 작성자 PC에서 실제로 실행한 출력이다. 경로, 시각, 숫자는 사용자마다 다르다.

## 2. 로그 파일 위치와 용도

| 파일 | 위치 | 용도 | 비고 |
|---|---|---|---|
| \`hs_err_pid<번호>.log\` | 게임 설치 폴더 | Java 런타임 자체가 죽었을 때 생성되는 크래시 덤프 | 크래시 1회당 1개 생성. 없으면 JVM 크래시가 아님 |
| \`console.txt\` | \`%USERPROFILE%\\Zomboid\\\` | 가장 최근 실행의 게임 로그 | 게임을 다시 실행하면 덮어써짐 |
| \`<날짜>_<시각>_DebugLog.txt\` | \`%USERPROFILE%\\Zomboid\\Logs\\\` 및 \`Logs\\logs_<날짜>\\\` | 실행 1회당 1개씩 보관되는 로그. 각 줄에 시각 포함 | 과거 크래시 분석에는 이 파일을 사용 |
| \`version.txt\` | \`%USERPROFILE%\\Zomboid\\\` | 게임 빌드 버전 | |

주의: 크래시 후 게임을 다시 실행했다면 \`console.txt\`에는 크래시 당시 내용이 남아 있지 않다. 이 경우 4.5절의 방법으로 \`DebugLog.txt\`를 찾는다.

## 3. 사전 준비

PowerShell을 열고(시작 메뉴에서 \`PowerShell\` 검색) 아래 명령으로 경로 변수를 설정한다. 이후 모든 명령은 같은 창에서 실행한다.

### 3.1 게임 설치 폴더 찾기

\`\`\`powershell
$steam = (Get-ItemProperty "HKCU:\\Software\\Valve\\Steam").SteamPath
$libs = Select-String -Path "$steam\\steamapps\\libraryfolders.vdf" -Pattern '"path"\\s+"(.+)"' | ForEach-Object { $_.Matches[0].Groups[1].Value -replace '\\\\\\\\','\\' }
$pz = $libs | ForEach-Object { Join-Path $_ "steamapps\\common\\ProjectZomboid" } | Where-Object { Test-Path $_ } | Select-Object -First 1
$zd = "$env:USERPROFILE\\Zomboid"
$pz
\`\`\`

결과 예시:

\`\`\`
P:\\SteamLibrary\\steamapps\\common\\ProjectZomboid
\`\`\`

출력이 비어 있으면 Steam 라이브러리에서 PZ 우클릭 > 관리 > 로컬 파일 보기로 경로를 확인한 뒤 직접 지정한다.

\`\`\`powershell
$pz = "D:\\SteamLibrary\\steamapps\\common\\ProjectZomboid"
\`\`\`

### 3.2 게임 버전 확인

\`\`\`powershell
Get-Content "$zd\\version.txt"
\`\`\`

결과 예시:

\`\`\`
42.20.4 b0bbce05d5
revision=b0bbce05d5 pzbullet=1.0.0.28
\`\`\`

## 4. 분석 절차

### 4.1 크래시 덤프 존재 여부 확인

\`\`\`powershell
Get-ChildItem $pz -Filter "hs_err_pid*.log" | Sort-Object LastWriteTime -Descending | Select-Object Name, Length, LastWriteTime | Format-Table -AutoSize
\`\`\`

결과 예시:

\`\`\`
Name                 Length LastWriteTime
----                 ------ -------------
hs_err_pid6712.log  1017244 2026-09-19 오전 1:33:20
hs_err_pid14944.log 1086252 2026-09-18 오후 11:46:31
hs_err_pid22452.log  458993 2026-09-17 오전 11:13:46
hs_err_pid3176.log   209476 2025-05-11 오후 2:38:38
\`\`\`

판단 기준:

- 게임이 꺼진 시각과 \`LastWriteTime\`이 일치하는 파일이 있으면 JVM 크래시다. 4.2절로 진행한다.
- 해당 시각의 파일이 없으면 JVM 크래시가 아니다. 4.5절부터 진행하고, 4.9절도 확인한다.

### 4.2 크래시 유형 판별

가장 최근 덤프의 앞부분을 출력한다.

\`\`\`powershell
$dump = Get-ChildItem $pz -Filter "hs_err_pid*.log" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
Get-Content $dump.FullName -TotalCount 9
Select-String -Path $dump.FullName -Pattern "^siginfo|^Time:" | ForEach-Object { $_.Line }
\`\`\`

결과 예시 1 (네이티브 메모리 접근 위반):

\`\`\`
#
# A fatal error has been detected by the Java Runtime Environment:
#
#  EXCEPTION_ACCESS_VIOLATION (0xc0000005) at pc=0x00007ff866513bba, pid=6712, tid=5640
#
# JRE version: OpenJDK Runtime Environment Zulu25.30+17-CA (25.0.1+8) (build 25.0.1+8-LTS)
...
siginfo: EXCEPTION_ACCESS_VIOLATION (0xc0000005), reading address 0x000000000013a700
Time: Sat Sep 19 01:33:19 2026 elapsed time: 2658.308331 seconds (0d 0h 44m 18s)
\`\`\`

결과 예시 2 (네이티브 메모리 부족):

\`\`\`
#
# There is insufficient memory for the Java Runtime Environment to continue.
# Native memory allocation (malloc) failed to allocate 451928 bytes. Error detail: Chunk::new
\`\`\`

| 첫 줄 내용 | 의미 | 다음 단계 |
|---|---|---|
| \`EXCEPTION_ACCESS_VIOLATION\` | 네이티브 코드가 잘못된 메모리 주소를 읽거나 씀 | 4.3절에서 어느 코드인지 확인 |
| \`insufficient memory\` / \`malloc failed\` | 프로세스가 메모리를 추가로 할당받지 못함 | 시스템 메모리 사용량, 페이지 파일, 실행 옵션 \`-Xmx\` 확인 |
| \`EXCEPTION_STACK_OVERFLOW\` | 재귀 호출 과다 | 4.3절에서 반복되는 프레임 확인 |

참고: \`Chunk::new\`는 Java 런타임 내부 메모리 영역 이름이며, 게임 맵의 청크와는 관계없다.

### 4.3 크래시 발생 코드 확인 (Java 스택)

\`\`\`powershell
Select-String -Path $dump.FullName -Pattern "^J |^j " | Select-Object -First 12 | ForEach-Object { $_.Line }
\`\`\`

결과 예시:

\`\`\`
J 21609  zombie.iso.LightingJNI.getChunkDirty(IIII)Z (0 bytes) @ 0x0000020a08a384d6 ...
J 41585 c2 zombie.iso.fboRenderChunk.FBORenderCell.updateChunkLighting(I)V (221 bytes) ...
J 48231 c2 zombie.iso.fboRenderChunk.FBORenderCell.renderTilesInternal(I)V (1416 bytes) ...
J 45270 c2 zombie.iso.fboRenderChunk.FBORenderCell.renderInternal()V (1116 bytes) ...
J 31073 c2 zombie.iso.IsoWorld.renderInternal()V (432 bytes) ...
J 48012 c2 zombie.iso.IsoWorld.render()V (43 bytes) ...
j  zombie.savefile.SavefileThumbnail.renderWorld(IZZ)V+59
j  zombie.savefile.SavefileThumbnail.create(I)V+43
j  zombie.savefile.SavefileThumbnail.create()V+37
j  zombie.GameWindow.save(Z)V+317
\`\`\`

읽는 방법:

- 위에서 아래로 "호출된 함수 ← 호출한 함수" 순서다. 첫 줄이 크래시 직전에 실행 중이던 코드다.
- \`zombie.\`으로 시작하는 프레임은 게임 본체(바닐라) 코드다.
- \`Lua(\`, \`MOD:\` 등 모드 이름이 포함된 프레임이 없으면 크래시 지점은 게임 본체다. 단, 모드가 간접적으로 원인 상태를 만들었을 가능성은 이 정보만으로 배제할 수 없다.
- 예시에서는 \`GameWindow.save\` → \`SavefileThumbnail.create\`(세이브 썸네일 생성) → \`IsoWorld.render\` → \`LightingJNI.getChunkDirty\`(조명 네이티브 코드)에서 종료되었다.

### 4.4 여러 덤프 비교

같은 원인이 반복되는지 확인한다. 접근 주소와 최상위 프레임이 같으면 동일 원인으로 본다.

\`\`\`powershell
Get-ChildItem $pz -Filter "hs_err_pid*.log" | Sort-Object LastWriteTime | ForEach-Object {
  $h = (Get-Content $_.FullName -TotalCount 4)[1..3] -join ' '
  $sig = (Select-String -Path $_.FullName -Pattern "^siginfo" | Select-Object -First 1).Line
  $top = (Select-String -Path $_.FullName -Pattern "^J |^j " | Select-Object -First 1).Line
  [PSCustomObject]@{ File=$_.Name; Time=$_.LastWriteTime; Header=$h.Trim(); Signal=$sig; TopFrame=$top }
} | Format-List
\`\`\`

결과 예시 (일부):

\`\`\`
File     : hs_err_pid22452.log
Time     : 2026-09-17 오전 11:13:46
Header   : # There is insufficient memory for the Java Runtime Environment to continue. # Native memory allocation (malloc) failed to allocate 451928 bytes. Error detail: Chunk::new # Possible reasons:
Signal   :
TopFrame :

File     : hs_err_pid14944.log
Time     : 2026-09-18 오후 11:46:31
Header   : # A fatal error has been detected by the Java Runtime Environment: # #  EXCEPTION_ACCESS_VIOLATION (0xc0000005) at pc=0x00007ff862413bba, pid=14944, tid=20940
Signal   : siginfo: EXCEPTION_ACCESS_VIOLATION (0xc0000005), reading address 0x000000000013a700
TopFrame : J 25191  zombie.iso.LightingJNI.getChunkDirty(IIII)Z (0 bytes) @ 0x0000022f88b39556 ...

File     : hs_err_pid6712.log
Time     : 2026-09-19 오전 1:33:20
Header   : # A fatal error has been detected by the Java Runtime Environment: # #  EXCEPTION_ACCESS_VIOLATION (0xc0000005) at pc=0x00007ff866513bba, pid=6712, tid=5640
Signal   : siginfo: EXCEPTION_ACCESS_VIOLATION (0xc0000005), reading address 0x000000000013a700
TopFrame : J 21609  zombie.iso.LightingJNI.getChunkDirty(IIII)Z (0 bytes) @ 0x0000020a08a384d6 ...
\`\`\`

메모리 부족 유형 덤프는 \`Signal\`, \`TopFrame\`이 비어 있고 \`Header\`에 \`insufficient memory\`가 표시된다.

### 4.5 크래시 시각에 해당하는 DebugLog 찾기

크래시 시각 전후 2분 이내에 마지막으로 기록된 DebugLog를 찾는다. 시각은 4.1절의 \`LastWriteTime\`을 사용한다.

\`\`\`powershell
$t = $dump.LastWriteTime
$log = Get-ChildItem "$zd\\Logs" -Recurse -Filter "*DebugLog.txt" | Where-Object { [Math]::Abs(($_.LastWriteTime - $t).TotalSeconds) -lt 120 } | Select-Object -First 1
$log.FullName
Get-Content $log.FullName -Tail 4
\`\`\`

덤프가 없는 경우에는 \`$t\`를 게임이 꺼진 시각으로 직접 지정한다.

\`\`\`powershell
$t = Get-Date "2026-09-19 00:45:30"
\`\`\`

결과 예시:

\`\`\`
C:\\Users\\SHY\\Zomboid\\Logs\\logs_2026-09-19\\2026-09-19_00-49_DebugLog.txt
[19-09-26 01:33:19.034] LOG  : General      f:243929> Saving worldgen params.
[19-09-26 01:33:19.038] LOG  : Lua          f:243929> ISMiniHealth(): Opened config file for writing....
[19-09-26 01:33:19.059] LOG  : Lua          f:243929> ISMiniHealth(): Closed config file..
\`\`\`

로그 마지막 줄 시각(01:33:19)과 덤프 시각(01:33:19)이 같으므로 해당 세션의 로그임을 확인할 수 있다.

### 4.6 세션 오류 건수 집계

\`\`\`powershell
"ERROR lines : " + (Select-String -Path $log.FullName -Pattern "\\] ERROR").Count
"WARN lines  : " + (Select-String -Path $log.FullName -Pattern "\\] WARN").Count
"Exceptions  : " + (Select-String -Path $log.FullName -Pattern "Exception thrown").Count
\`\`\`

결과 예시:

\`\`\`
ERROR lines : 467
WARN lines  : 72
Exceptions  : 100
\`\`\`

\`ERROR lines\`는 스택 출력 줄까지 포함하므로 실제 오류 건수보다 크다. 오류 건수는 \`Exceptions\` 값을 기준으로 본다.

### 4.7 예외 종류별 집계

\`\`\`powershell
Select-String -Path $log.FullName -Pattern "Exception thrown" -Context 0,1 |
  ForEach-Object { $_.Context.PostContext[0] } |
  Where-Object { $_ -match '^\\s+[\\w\\.]+(Exception|Error)' } |
  ForEach-Object { ($_.Trim() -split ' at ')[0] } |
  Group-Object | Sort-Object Count -Descending |
  Select-Object Count, Name | Format-Table -AutoSize -Wrap
\`\`\`

결과 예시:

\`\`\`
Count Name
----- ----
   71 java.lang.RuntimeException: attempted index: getName of non-table: null
   14 java.lang.IllegalStateException: Forward Direction cannot be zero length vector.
    2 java.lang.NullPointerException: Cannot invoke "zombie.iso.IsoChunk.getRenderLevels(int)" because the return value of "zombie.iso.IsoGridSquare.getChunk()" is null
    2 java.lang.NullPointerException: Cannot invoke "zombie.iso.RoomDef.getArea()" because the return value of "zombie.iso.areas.IsoRoom.getRoomDef()" is null
    1 java.lang.RuntimeException: Object tried to call nil in isValidCampfire
    1 java.lang.RuntimeException: Stored entity mismatch
\`\`\`

여기서 집계되는 예외는 게임이 처리하고 계속 진행한 오류다. 이 예외 자체로 게임이 종료되지는 않는다. 크래시와의 관련성은 4.8절에서 발생 시각을 비교해 판단한다.

### 4.8 Lua 오류 발생 위치 집계

Lua 스크립트 오류는 원본 파일과 줄 번호가 기록된다. 위치별로 묶어 어느 스크립트에서 반복되는지 확인한다.

\`\`\`powershell
Select-String -Path $log.FullName -Pattern "DEBUG-MODE STACK TRACE" -Context 0,1 |
  ForEach-Object { ($_.Context.PostContext[0] -split '> ', 2)[1].Trim() } |
  Group-Object | Sort-Object Count -Descending |
  Select-Object Count, Name | Format-Table -AutoSize
\`\`\`

결과 예시:

\`\`\`
Count Name
----- ----
   71 Lua(Vanilla).populate(ISCraftInventoryPanel.lua:346)
    1 Lua(Vanilla).isValidCampfire(ISCampingMenu.lua:26)
\`\`\`

- \`Lua(Vanilla)\`: 오류가 발생한 줄은 바닐라 스크립트다.
- \`Lua((MOD:모드이름))\`: 오류가 발생한 줄은 해당 모드 스크립트다.
- 오류 줄이 바닐라여도 호출 경로 중간에 모드가 있으면 모드가 원인일 수 있다. 전체 호출 경로는 아래 명령으로 본다.

\`\`\`powershell
Select-String -Path $log.FullName -Pattern "isValidCampfire" -Context 1,12 | Select-Object -First 1 | ForEach-Object { $_.Context.PreContext; $_.Line; $_.Context.PostContext }
\`\`\`

결과 예시:

\`\`\`
[19-09-26 01:19:16.385] ERROR: General      f:149224> Lua(Vanilla).isValidCampfire> Exception thrown
	java.lang.RuntimeException: Object tried to call nil in isValidCampfire at KahluaUtil.fail(KahluaUtil.java:100).
	Stack trace:
		se.krka.kahlua.vm.KahluaUtil.fail(KahluaUtil.java:100)
		Lua(Vanilla).isValidCampfire(ISCampingMenu.lua:26)
		Lua((MOD:Common Sense)).onAddMultipleFuel(BB_CS_Camping.lua:47)
		...
		Lua((MOD:Tidy Up Meister)).add(P4TidyUpMeister.lua:1150)
\`\`\`

이 예시는 바닐라 함수에서 오류가 났지만 \`Common Sense\` 모드가 호출한 경우다.

오류 줄의 실제 코드는 게임 폴더에서 확인할 수 있다.

\`\`\`powershell
$f = Get-ChildItem "$pz\\media\\lua" -Recurse -Filter "ISCraftInventoryPanel.lua" | Select-Object -First 1
Get-Content $f.FullName | Select-Object -Index (342..345)
\`\`\`

\`-Index\`는 0부터 센다. 346번째 줄은 345로 지정한다.

결과 예시:

\`\`\`
                        if addedPairs[inputItem:getDisplayName()] == nil then
                            addedPairs[inputItem:getDisplayName()] = {};
                        end
                        table.insert(addedPairs[inputItem:getDisplayName()], inputItem:getNormalTexture():getName());
\`\`\`

\`inputItem:getNormalTexture()\`가 nil을 반환해 \`getName\`을 호출하지 못한 오류다. 아이콘 텍스처가 없는 아이템이 제작 창 재료 목록에 표시될 때 발생한다.

### 4.9 오류 발생 시각 분포와 크래시 직전 상태

오류가 크래시 직전에 몰려 있는지 확인한다.

\`\`\`powershell
Select-String -Path $log.FullName -Pattern "Exception thrown" | ForEach-Object { $_.Line.Substring(1,14) } | Group-Object | Select-Object Count, Name | Format-Table -AutoSize
\`\`\`

결과 예시 (분 단위 집계):

\`\`\`
Count Name
----- ----
    1 19-09-26 00:49
    7 19-09-26 00:56
    2 19-09-26 00:57
    3 19-09-26 00:58
    2 19-09-26 00:59
    1 19-09-26 01:05
    1 19-09-26 01:10
    1 19-09-26 01:19
    1 19-09-26 01:26
    5 19-09-26 01:29
   71 19-09-26 01:32
    5 19-09-26 01:33
\`\`\`

크래시 직전 게임 상태 전환과 저장 기록을 확인한다.

\`\`\`powershell
Select-String -Path $log.FullName -Pattern "STATE: |Saving worldgen" | ForEach-Object { $_.Line }
\`\`\`

결과 예시:

\`\`\`
[19-09-26 00:50:07.934] LOG  : General      f:0> STATE: exit zombie.gameStates.GameLoadingState.
[19-09-26 01:29:14.138] LOG  : General      f:218335> Saving worldgen params.
[19-09-26 01:29:46.119] LOG  : General      f:222081> Saving worldgen params.
[19-09-26 01:33:13.758] LOG  : General      f:243928> Saving worldgen params.
[19-09-26 01:33:14.160] LOG  : General      f:243928> STATE: exit zombie.gameStates.IngameState.
[19-09-26 01:33:19.034] LOG  : General      f:243929> Saving worldgen params.
\`\`\`

| 기록 | 의미 |
|---|---|
| \`STATE: exit zombie.gameStates.GameLoadingState\` | 세이브 로딩 완료, 게임 플레이 시작 |
| \`Saving worldgen params\` | 저장 수행 (자동 저장 또는 수동 저장) |
| \`STATE: exit zombie.gameStates.IngameState\` | 게임 플레이 종료 (저장 후 메인 메뉴로 나가기 등) |
| \`GameThread exited.\` | 게임 메인 스레드가 정상 경로로 종료됨 |

### 4.10 크래시 덤프가 없을 때: Windows 이벤트 로그 확인

로그 마지막 줄이 \`GameThread exited.\`이고 덤프가 없으면 프로세스가 정상 경로로 종료된 것이다. 외부 요인(그래픽 드라이버 오류 등)이 있었는지 Windows 이벤트 로그에서 확인한다.

\`\`\`powershell
$from = (Get-Date "2026-09-18 23:00:00")
Get-WinEvent -LogName Application -MaxEvents 3000 | Where-Object { $_.TimeCreated -ge $from -and $_.Message -match 'zomboid|javaw|java\\.exe' } | Select-Object TimeCreated, Id, ProviderName, LevelDisplayName | Format-Table -AutoSize
Get-WinEvent -LogName System -MaxEvents 3000 | Where-Object { $_.TimeCreated -ge $from -and $_.LevelDisplayName -in 'Error','Warning' } | Select-Object TimeCreated, Id, ProviderName, LevelDisplayName | Format-Table -AutoSize
\`\`\`

\`$from\`은 확인할 시작 시각으로 바꾼다.

결과 예시:

\`\`\`
(Application 로그: 출력 없음)

TimeCreated               Id ProviderName                     LevelDisplayName
-----------               -- ------------                     ----------------
2026-09-18 오후 11:50:17 10016 Microsoft-Windows-DistributedCOM Warning
2026-09-18 오후 11:00:19 10016 Microsoft-Windows-DistributedCOM Warning
\`\`\`

| 이벤트 | 의미 |
|---|---|
| Application, \`Application Error\`, ID 1000, \`javaw.exe\` 또는 \`ProjectZomboid64.exe\` | 프로세스가 비정상 종료됨 |
| System, \`Display\`, ID 4101 또는 \`nvlddmkm\`, \`amdkmdag\` 오류 | 그래픽 드라이버 응답 중지 |
| System, \`Resource-Exhaustion-Detector\`, ID 2004 | 시스템 메모리 부족 |
| \`DistributedCOM\` ID 10016 | Windows 일반 경고. PZ와 무관 |

## 5. 판별 요약

| 덤프 | 덤프 내용 | 로그 마지막 상태 | 판단 |
|---|---|---|---|
| 있음 | \`EXCEPTION_ACCESS_VIOLATION\`, 최상위 프레임 \`zombie.\` | 저장 또는 \`IngameState\` 종료 직후 | 게임 본체 네이티브 코드 오류 |
| 있음 | \`EXCEPTION_ACCESS_VIOLATION\`, 스택에 모드 Lua 포함 | 무관 | 해당 모드 확인 필요 |
| 있음 | \`insufficient memory\` | 무관 | 메모리 부족. 시스템 메모리, 페이지 파일, 동시 실행 프로그램 확인 |
| 없음 | - | \`GameThread exited.\` | 정상 경로 종료. 사용자 종료, 외부 프로그램 종료 여부 확인. 4.10절 수행 |
| 없음 | - | 로그가 중간에 끊김 | 외부 강제 종료 또는 시스템 오류. 4.10절 수행 |

## 6. 작성자 PC 진행 내용 및 결과

### 6.1 환경

| 항목 | 값 |
|---|---|
| OS | Windows 11 Pro (Build 26100) |
| CPU / RAM | Intel Core i5-10400, 31 GB |
| 게임 버전 | 42.20.4 (revision b0bbce05d5) |
| Java 런타임 | Zulu 25.0.1 (게임 내장) |
| 실행 옵션 | \`-Xmx3072m -XX:+UseZGC\` |
| 게임 설치 경로 | \`P:\\SteamLibrary\\steamapps\\common\\ProjectZomboid\` |
| 사용 모드 | 약 40개 (Hydrocraft 계열 Hx_KR, PZGKO, ISA, Common Sense, Tidy Up Meister 등) |

### 6.2 크래시 덤프 목록

| 파일 | 시각 | 유형 |
|---|---|---|
| \`hs_err_pid20176.log\` | 2024-10-27 15:01 | 메모리 부족 (\`malloc failed ... Chunk::new\`) |
| \`hs_err_pid9208.log\` | 2024-11-17 14:56 | 메모리 부족 |
| \`hs_err_pid3176.log\` | 2025-05-11 14:38 | 메모리 부족 |
| \`hs_err_pid22452.log\` | 2026-09-17 11:13 | 메모리 부족 |
| \`hs_err_pid14944.log\` | 2026-09-18 23:46 | 메모리 접근 위반, \`LightingJNI.getChunkDirty\` |
| \`hs_err_pid6712.log\` | 2026-09-19 01:33 | 메모리 접근 위반, \`LightingJNI.getChunkDirty\` |

### 6.3 사례 A: 2026-09-18 23:46 크래시

- 덤프: \`hs_err_pid14944.log\`
- 로그: \`Logs\\logs_2026-09-18\\2026-09-18_23-00_DebugLog.txt\`
- 플레이 시간: 46분 19초
- 접근 주소: \`0x000000000013a700\`
- 스택: \`IsoWorld.render\` → \`FBORenderCell.renderTilesInternal\` → \`FBORenderCell.updateChunkLighting\` → \`LightingJNI.getChunkDirty\`

로그 경과:

\`\`\`
[18-09-26 23:46:21.885] Saving worldgen params.
[18-09-26 23:46:22.323] STATE: exit zombie.gameStates.IngameState.
(이후 23:46:30 크래시까지 예외 다수)
\`\`\`

예외 집계 (총 859건):

| 건수 | 내용 |
|---|---|
| 835 | \`NullPointerException\`: \`IsoGridSquare.getChunk()\`가 null (\`FBORenderObjectPicker.getClickObjects\`) |
| 15 | \`IllegalStateException\`: \`Forward Direction cannot be zero length vector\` |
| 1 | \`RuntimeException\`: \`Stored entity mismatch\` (\`IsoChunk.removeFromWorld\`) |
| 1 | \`NullPointerException\`: \`MapCollisionData.notifyThread\` |

859건 중 837건이 \`IngameState\` 종료 이후 약 8초 사이에 발생했다. 게임 플레이 종료 처리로 청크가 해제되는 동안 화면 렌더링과 마우스 선택 처리가 계속 실행되면서 해제된 청크를 참조했고, 마지막에 조명 네이티브 코드가 해제된 메모리를 읽어 종료되었다.

### 6.4 사례 B: 2026-09-19 00:45 종료

- 덤프: 없음
- 로그: \`Logs\\logs_2026-09-18\\2026-09-18_23-49_DebugLog.txt\`

로그 경과:

\`\`\`
[...] f:295850> NullPointerException ... IsoGridSquare.getRoom().building is null (IsoGameCharacter.updateInternal)
[...] f:295850> Saving worldgen params
[...] f:295850> STATE: exit zombie.gameStates.IngameState
(모드 재로딩, 인트로 영상 재생)
[19-09-26 00:45:28.275] binkId: 5.
[19-09-26 00:45:28.526] GameThread exited..
\`\`\`

Windows 이벤트 로그(Application, System)에 해당 시각의 PZ 또는 드라이버 관련 오류는 없었다. 저장 후 메인 메뉴로 나간 뒤 메인 메뉴 진입 직전에 정상 경로로 종료되었다. 크래시 덤프와 오류 기록이 없어 엔진 오류로 판단할 근거는 확인되지 않았다.

### 6.5 사례 C: 2026-09-19 01:33 크래시

- 덤프: \`hs_err_pid6712.log\`
- 로그: \`Logs\\logs_2026-09-19\\2026-09-19_00-49_DebugLog.txt\`
- 플레이 시간: 44분 18초
- 접근 주소: \`0x000000000013a700\` (사례 A와 동일)
- 스택: \`GameWindow.save\` → \`SavefileThumbnail.create\` → \`IsoWorld.render\` → \`FBORenderCell.updateChunkLighting\` → \`LightingJNI.getChunkDirty\`

로그 경과:

\`\`\`
[19-09-26 01:33:13.758] Saving worldgen params.
[19-09-26 01:33:14.160] STATE: exit zombie.gameStates.IngameState.
[19-09-26 01:33:19.034] Saving worldgen params.
[19-09-26 01:33:19.059] ISMiniHealth(): Closed config file..   <- 마지막 기록
\`\`\`

\`IngameState\` 종료 후 다시 저장하면서 세이브 썸네일 이미지를 만들기 위해 월드를 렌더링하던 중 사례 A와 같은 지점에서 종료되었다.

예외 집계 (총 100건):

| 건수 | 내용 | 발생 위치 |
|---|---|---|
| 71 | \`RuntimeException: attempted index: getName of non-table: null\` | \`ISCraftInventoryPanel.lua:346\` (바닐라 제작 창) |
| 14 | \`IllegalStateException: Forward Direction cannot be zero length vector\` | 좀비 \`LungeState\` |
| 2 | \`NullPointerException\`: \`IsoGridSquare.getChunk()\`가 null | \`FBORenderObjectPicker\` |
| 2 | \`NullPointerException\`: \`IsoRoom.getRoomDef()\`가 null | \`ParameterFirearmRoomSize\` (총기 사운드) |
| 1 | \`RuntimeException: Object tried to call nil in isValidCampfire\` | \`ISCampingMenu.lua:26\`, 호출자 \`Common Sense\` 모드 |
| 1 | \`RuntimeException: Stored entity mismatch\` | \`GameEntityManager.UnregisterEntity\` |

\`RuntimeException\` 73건은 위 표의 71 + 1 + 1건이다.

- 71건은 01:32:00 ~ 01:32:18 사이 제작 창을 연 상태에서 매 프레임 반복되었다. 아이콘 텍스처가 없는 아이템이 재료 목록에 포함되어 발생한 UI 오류다. 게임 시작 시 \`Could not find icon: Build_AnvilStone\` 경고가 있어 모드 추가 아이템의 아이콘 누락으로 추정하나, 어느 아이템인지는 로그에서 확인되지 않았다.
- 이 71건은 크래시 약 1분 전에 끝났고 스택에 저장/렌더링 경로가 없으므로 크래시의 직접 원인은 아니다.
- 1건은 \`Common Sense\` 모드(\`BB_CS_Camping.lua:47\`)가 바닐라 모닥불 함수를 호출하다 발생했다. 크래시와 시각상 관련 없다.

### 6.6 사례 D: 메모리 부족 크래시 (2024-10 ~ 2026-09-17, 4건)

네 덤프 모두 \`Native memory allocation (malloc) failed ... Chunk::new\`로 시작한다. Java 힙(\`-Xmx3072m\`) 부족이 아니라 프로세스의 네이티브 메모리 할당 실패다. 크래시 당시 시스템 메모리 사용량 기록이 없어 원인을 특정하지 못했다.

### 6.7 결론

1. 사례 A와 C는 접근 주소(\`0x13a700\`)와 크래시 함수(\`zombie.iso.LightingJNI.getChunkDirty\`)가 같아 동일 원인으로 판단한다.
2. 두 경우 모두 \`STATE: exit zombie.gameStates.IngameState\` 직후, 즉 저장 후 게임 플레이를 종료하는 과정에서 발생했다.
3. 크래시 스택은 모두 게임 본체 코드이며 모드 프레임은 없다.
4. 세션 중 기록된 Lua 오류(제작 창 71건, Common Sense 1건)는 크래시 시점과 떨어져 있어 직접 원인이 아니다.
5. 사례 B는 덤프와 오류 기록이 없는 정상 경로 종료다.

### 6.8 조치 및 확인 사항

| 항목 | 내용 |
|---|---|
| 게임 파일 검사 | Steam > PZ 우클릭 > 속성 > 설치된 파일 > 게임 파일 무결성 확인 |
| 버그 제보 | The Indie Stone 공식 포럼 버그 트래커에 \`hs_err_pid14944.log\`, \`hs_err_pid6712.log\`와 해당 DebugLog 첨부 |
| 재현 조건 기록 | 저장 후 메인 메뉴로 나갈 때 크래시가 반복되는지 기록 |
| 제작 창 오류 | 제작 창을 열었을 때 오류가 반복되는 레시피를 확인하고, 해당 재료 아이템을 추가한 모드를 비활성화해 재현 여부 확인 |
| 메모리 부족 | 크래시 시 작업 관리자의 메모리 사용량 확인. 게임 실행 중 다른 프로그램 종료 |

## 7. 제한 사항

- 이 문서의 판단은 로그 기록에 근거한다. 로그에 남지 않은 원인(하드웨어 오류, 외부 프로그램 개입 등)은 확인할 수 없다.
- 크래시 지점이 게임 본체 코드라도 모드가 만든 상태가 간접 원인일 수 있다. 확정하려면 모드를 모두 끈 상태에서 같은 조건으로 재현 시험이 필요하다.
- \`hs_err\` 덤프의 네이티브 프레임(\`C 0x00007ff8...\`)은 디버그 심볼이 없어 함수 이름을 확인할 수 없다. 이 문서는 바로 위 Java 프레임으로 위치를 판단한다.

`,$y=`---
title: 와이파이 느릴 때 조치방법1 (USB 무선랜 어댑터 USB 2.0 / 3.0 연결 모드 확인 및 USB 3.0 전환 절차)
date: 2026-10-12
---
# USB 무선랜 어댑터 USB 2.0 / 3.0 연결 모드 확인 및 USB 3.0 전환 절차

작성일: 2026-10-12
대상 OS: Windows 10 / 11
대상 장치: USB 타입 무선랜 어댑터 (Realtek 칩셋 기준으로 검증)

---

## 1. 개요

USB 3.0 포트(파란색 포트)에 꽂은 USB 무선랜 어댑터도 USB 2.0 모드로 동작할 수 있다. 원인은 다음 중 하나이다.

- 포트, 케이블(연장선), 허브가 USB 3.0 신호를 전달하지 못함
- 어댑터 드라이버의 USB 모드 전환 기능이 동작하지 않음

일부 Realtek USB 무선랜 어댑터는 처음에 USB 2.0으로 인식된 뒤, 드라이버와 함께 설치되는 **USB 전환 서비스**가 USB 3.0으로 전환시킨다. 이 서비스가 비활성화되어 있으면 포트와 케이블이 정상이어도 USB 2.0 상태로 유지된다. 이 서비스는 PC 최적화 프로그램이나 수동 서비스 정리 과정에서 비활성화될 수 있다.

이 문서는 다음 순서로 진행한다.

1. 어댑터 확인
2. 현재 USB 연결 모드 확인
3. 하드웨어 점검
4. 드라이버의 USB 전환 서비스 확인
5. 서비스 활성화
6. 결과 확인

---

## 2. 사전 준비

- 2~4단계 확인 작업: 일반 PowerShell에서 실행한다. (시작 버튼 우클릭 > 터미널)
- 5단계 변경 작업: **관리자 권한** 터미널에서 실행한다. (시작 버튼 우클릭 > 터미널(관리자))
- 5단계 실행 시 무선랜 연결이 수 초간 끊길 수 있다. 진행 중인 다운로드나 온라인 작업은 미리 정리한다.

---

## 3. 절차

### 3.1 USB 무선랜 어댑터 확인

명령어:

\`\`\`powershell
Get-PnpDevice -Class Net -PresentOnly | Where-Object InstanceId -like 'USB\\*' | Format-Table FriendlyName, Status, InstanceId -AutoSize
\`\`\`

결과 예시:

\`\`\`
FriendlyName                               Status InstanceId
------------                               ------ ----------
Realtek 8912AU Wireless LAN WiFi 7 USB NIC OK     USB\\VID_0BDA&PID_8912\\B0386CF3A5CC
\`\`\`

- \`FriendlyName\`: 어댑터 이름
- \`InstanceId\`의 \`VID_0BDA\`: 제조사 ID. \`0BDA\`는 Realtek이다.
- 결과가 여러 줄이면 무선랜 어댑터에 해당하는 줄을 확인한다. 이후 명령은 첫 번째 USB 네트워크 장치를 대상으로 하므로, USB 네트워크 장치가 여러 개면 3.2의 \`Select-Object -First 1\` 부분을 \`Where-Object FriendlyName -like '*어댑터 이름 일부*'\`로 바꾼다.

### 3.2 현재 USB 연결 모드 확인

명령어:

\`\`\`powershell
$d = Get-PnpDevice -Class Net -PresentOnly | Where-Object InstanceId -like 'USB\\*' | Select-Object -First 1
(Get-PnpDeviceProperty -InstanceId $d.InstanceId -KeyName DEVPKEY_Device_LocationPaths).Data
\`\`\`

결과 예시 (USB 2.0 상태):

\`\`\`
PCIROOT(0)#PCI(1400)#USBROOT(0)#USB(7)
ACPI(_SB_)#ACPI(PCI0)#ACPI(XHC_)#ACPI(RHUB)#ACPI(HS07)
\`\`\`

결과 예시 (USB 3.0 상태):

\`\`\`
PCIROOT(0)#PCI(1400)#USBROOT(0)#USB(23)
ACPI(_SB_)#ACPI(PCI0)#ACPI(XHC_)#ACPI(RHUB)#ACPI(SS07)
\`\`\`

판정 기준 (두 번째 줄의 마지막 항목):

| 표시 | 의미 |
|---|---|
| \`HSxx\` | High-Speed. USB 2.0으로 연결됨 (최대 480Mbps) |
| \`SSxx\` | SuperSpeed. USB 3.0 이상으로 연결됨 (5Gbps 이상) |

- 같은 물리 포트라도 2.0으로 연결되면 \`HS07\`, 3.0으로 연결되면 \`SS07\`처럼 접두어만 달라진다.
- \`SSxx\`이면 이 문서의 작업이 필요 없다.
- 이 판정은 Intel USB 3.0 컨트롤러(xHCI)의 ACPI 포트 이름을 기준으로 한다. 다른 칩셋(AMD 등)이나 추가 장착한 USB 카드에서는 \`HS\`/\`SS\` 표기가 나타나지 않을 수 있다. 이 경우 USB 장치 트리 확인 도구(예: UsbTreeView)에서 장치의 연결 속도(High-Speed / SuperSpeed)를 확인한다.

### 3.3 하드웨어 점검

\`HSxx\`로 표시되면 먼저 다음을 확인한다.

1. 포트가 USB 3.0 이상인지 확인한다. 일반적으로 내부가 파란색(또는 빨간색, 청록색)이거나 \`SS\` 표기가 있다.
2. 연장선, 거치대, 허브를 사용 중이면 USB 3.0 규격인지 확인한다. 커넥터 내부가 파란색이면 3.0 규격인 경우가 많다.
3. 가능하면 연장선 없이 어댑터를 본체의 USB 3.0 포트에 직접 연결한 뒤 3.2를 다시 실행한다.
4. 다른 USB 3.0 포트로 옮겨서 3.2를 다시 실행한다.

여러 포트에서 모두 \`HSxx\`로 표시되면 4단계로 진행한다.

참고: 키보드, 마우스 등 USB 2.0 장치는 3.0 포트에 연결해도 \`HSxx\`로 표시된다. 다른 장치의 표시만으로 포트의 3.0 지원 여부를 판단할 수 없다.

### 3.4 드라이버의 USB 전환 서비스 확인

#### 3.4.1 드라이버가 설치하는 서비스 목록 확인

명령어:

\`\`\`powershell
$d = Get-PnpDevice -Class Net -PresentOnly | Where-Object InstanceId -like 'USB\\*' | Select-Object -First 1
$inf = (Get-PnpDeviceProperty -InstanceId $d.InstanceId -KeyName DEVPKEY_Device_DriverInfPath).Data
$inf
Select-String -Path "C:\\Windows\\INF\\$inf" -Pattern '^\\s*AddService' | ForEach-Object { $_.Line.Trim() } | Sort-Object -Unique
\`\`\`

결과 예시:

\`\`\`
oem14.inf
AddService          = RTUsbSwSrvc, 0x0000800, RTUsbSwSrvc.Service
AddService          = rtwlanu7, 2, rtwlanu7.Service, rtwlanu7.EventLog
\`\`\`

- \`rtwlanu7\`과 같이 \`rtwlan\`으로 시작하는 항목은 무선랜 드라이버 본체이다.
- \`RTUsbSwSrvc\`가 USB 모드 전환 서비스이다.
- 출력에 \`RTUsbSwSrvc\` 또는 이와 유사한 USB 전환 서비스가 없으면 해당 드라이버에는 이 기능이 없다. 이 경우 이 문서의 5단계는 적용되지 않으며, 3.3의 하드웨어 점검과 제조사 드라이버 업데이트를 확인한다.
- \`oem14.inf\`의 숫자는 PC마다 다르다.

#### 3.4.2 서비스 상태 확인

명령어:

\`\`\`powershell
Get-Service RTUsbSwSrvc | Format-Table Name, Status, StartType -AutoSize
\`\`\`

결과 예시 (문제 상태):

\`\`\`
Name          Status StartType
----          ------ ---------
RTUsbSwSrvc  Stopped  Disabled
\`\`\`

결과 예시 (정상 상태):

\`\`\`
Name         Status StartType
----         ------ ---------
RTUsbSwSrvc Running Automatic
\`\`\`

- \`StartType\`이 \`Disabled\`이면 서비스가 비활성화된 상태이다. 이 경우 어댑터는 USB 2.0 모드로 유지된다.

#### 3.4.3 드라이버 기본 설정 확인 (선택)

드라이버가 원래 의도한 시작 유형을 확인한다.

명령어:

\`\`\`powershell
$c = Get-Content "C:\\Windows\\INF\\$inf"
$i = ($c | Select-String '^\\[RTUsbSwSrvc.Service\\]').LineNumber
$c[($i-1)..($i+3)]
\`\`\`

결과 예시:

\`\`\`
[RTUsbSwSrvc.Service]
DisplayName       = %RTUsbSwSrvc.DeviceDesc.DispName%
ServiceType       = 0x00000010        ; %SERVICE_WIN32_OWN_PROCESS%
StartType         = 2     ; %SERRVICE_DEMAND_START%
ErrorControl      = 0     ; %SERRVICE_ERROR_NORMAL%
\`\`\`

\`StartType\` 값의 의미:

| 값 | 의미 |
|---|---|
| 2 | 자동 |
| 3 | 수동 |
| 4 | 사용 안 함 |

- 위 예시는 값이 \`2\`(자동)이다. 같은 줄의 주석에는 \`DEMAND_START\`(수동)라고 적혀 있으나 Windows는 숫자 값을 기준으로 처리한다.

### 3.5 서비스 활성화

**관리자 권한** 터미널에서 다음 두 명령을 순서대로 실행한다.

명령어 1 (시작 유형을 자동으로 변경):

\`\`\`
sc.exe config RTUsbSwSrvc start= auto
\`\`\`

결과 예시:

\`\`\`
[SC] ChangeServiceConfig 성공
\`\`\`

명령어 2 (서비스 시작):

\`\`\`
sc.exe start RTUsbSwSrvc
\`\`\`

결과 예시:

\`\`\`
SERVICE_NAME: RTUsbSwSrvc
        종류               : 10  WIN32_OWN_PROCESS
        상태               : 2  START_PENDING
                                (STOPPABLE, PAUSABLE, ACCEPTS_SHUTDOWN)
        WIN32_EXIT_CODE    : 0  (0x0)
        SERVICE_EXIT_CODE  : 0  (0x0)
        검사점             : 0x0
        WAIT_HINT          : 0x0
        PID                : 18400
        플래그             :
\`\`\`

주의 사항:

- \`start= auto\`에서 \`=\` 뒤에 공백이 반드시 있어야 한다.
- PowerShell에서는 \`sc\`가 다른 명령(\`Set-Content\`)의 별칭이므로 반드시 \`sc.exe\`로 입력한다.
- 서비스가 시작되면 어댑터가 USB 3.0으로 다시 연결되면서 무선랜이 수 초간 끊겼다가 재연결될 수 있다.

GUI로 변경하는 방법:

1. \`Win + R\` > \`services.msc\` 입력 > 확인
2. 목록에서 \`RTUsbSwSrvc\` 더블클릭
3. 시작 유형을 \`자동\`으로 변경 > 적용
4. \`시작\` 버튼 클릭 > 확인

### 3.6 결과 확인

1. 3.2의 명령을 다시 실행하여 \`SSxx\`로 바뀌었는지 확인한다.
2. 3.4.2의 명령을 다시 실행하여 \`Running\` / \`Automatic\`인지 확인한다.
3. PC를 재부팅한 뒤 1~2를 한 번 더 확인한다.

---

## 4. 문제 해결

| 증상 | 확인 사항 |
|---|---|
| 서비스 시작 후에도 \`HSxx\` | 어댑터를 뽑았다가 다시 꽂고 3.2 재확인. 이후에도 \`HSxx\`이면 3.3 하드웨어 점검 재수행 |
| \`sc.exe\` 실행 시 "액세스가 거부되었습니다" | 관리자 권한 터미널에서 실행하지 않음 |
| \`Get-Service\`에서 서비스를 찾을 수 없음 | 서비스 이름 확인 (3.4.1). 드라이버에 해당 기능이 없을 수 있음 |
| 재부팅 후 다시 \`Disabled\`로 바뀜 | PC 최적화 프로그램, 서비스 정리 도구의 설정에서 해당 서비스를 예외로 지정 |
| 드라이버 재설치 후 다시 \`HSxx\` | 3.4.2부터 다시 확인 |

---

## 5. 참고 사항

- USB 3.0 전환으로 해결되는 것은 **USB 구간의 대역폭 제한(USB 2.0: 실사용 약 250~300Mbps)**이다. 실제 인터넷 속도는 인터넷 요금제, 공유기, 무선 신호 상태의 영향을 함께 받으므로, 전환 후에도 측정 속도가 달라지지 않을 수 있다.
- 드라이버 레지스트리의 \`EnableUsbSS\` 값은 SuperSpeed 설정이 아니라 **USB 선택적 절전(Selective Suspend)** 설정이다. USB 2.0 / 3.0 연결 모드와 관계없다.

---

## 6. 테스트 기록 (작성자 PC)

### 6.1 환경

| 항목 | 내용 |
|---|---|
| OS | Windows 11 Pro 10.0.26200 |
| 메인보드 | ASRock B460M Steel Legend (Intel USB 3.0 xHCI, PCI\\VEN_8086&DEV_A3AF) |
| 무선랜 어댑터 | Realtek 8912AU Wireless LAN WiFi 7 USB NIC (USB\\VID_0BDA&PID_8912) |
| 드라이버 | Realtek 5102.24.126.7 (2025-11-18), oem14.inf |
| 연결 방식 | 본체 후면 USB 3.0 포트 > USB 3.0 연장선 > 어댑터 |
| 공유기 | LG U+ 공유기, 5GHz 36번 채널, 802.11ax, WPA2-Personal |

### 6.2 증상

- 평소 속도는 약 300Mbps이나, 간헐적으로 속도가 KB/s 단위까지 떨어짐
- 전원 관리 옵션 조정 후에도 증상 동일

### 6.3 확인 결과 (조치 전)

| 시도 | 연결 위치 | 3.2 결과 | 판정 |
|---|---|---|---|
| 1 | 후면 USB 3.0 포트 (기존) | \`ACPI(HS03)\` | USB 2.0 |
| 2 | 다른 USB 3.0 포트 | \`ACPI(HS04)\` | USB 2.0 |
| 3 | 다른 USB 3.0 포트 | \`ACPI(HS07)\` | USB 2.0 |

| 항목 | 값 |
|---|---|
| \`RTUsbSwSrvc\` 상태 | Stopped |
| \`RTUsbSwSrvc\` 시작 유형 | Disabled (레지스트리 Start = 4) |
| INF 기본 시작 유형 | 2 (자동) |
| 드라이버 레지스트리 \`UsbSwitchCnt\` | 0 (USB 모드 전환 기록 없음) |

판단: 포트 3곳 모두 USB 2.0으로 연결되었고, 드라이버 기본값이 자동인 USB 전환 서비스가 사용 안 함 상태였다. 서비스 비활성화를 원인으로 판단하였다.

### 6.4 조치

관리자 권한 명령 프롬프트에서 실행:

\`\`\`
sc.exe config RTUsbSwSrvc start= auto
sc.exe start RTUsbSwSrvc
\`\`\`

### 6.5 확인 결과 (조치 후)

| 항목 | 조치 전 | 조치 후 |
|---|---|---|
| 연결 위치 (같은 포트) | \`ACPI(HS07)\` | \`ACPI(SS07)\` |
| 연결 모드 | USB 2.0 | USB 3.0 |
| \`RTUsbSwSrvc\` | Stopped / Disabled | Running / Automatic |
| 무선 연결 | 연결됨 | 연결됨 (신호 72%, 수신 1201Mbps / 송신 720.5Mbps) |

포트를 바꾸지 않은 상태에서 서비스 시작 직후 \`HS07\`이 \`SS07\`로 바뀌었다. 포트와 연장선은 USB 3.0 신호를 정상적으로 전달하고 있었으며, 서비스 비활성화가 USB 2.0 상태의 원인이었음을 확인하였다.

### 6.6 속도 측정 (조치 후)

| 항목 | 값 |
|---|---|
| 다운로드 | 305.7 Mbps |
| 업로드 | 282.5 Mbps |
| 지연 시간 | 5 ms |
| 서버 | Seoul |

조치 전과 최고 속도는 비슷하다. 따라서 약 300Mbps의 최고 속도는 USB 2.0 제한이 아니라 인터넷 요금제 또는 공유기 구간에서 정해지는 것으로 판단된다.

### 6.7 미확인 사항

- 간헐적으로 KB/s 단위까지 떨어지는 증상이 이번 조치로 해소되었는지는 **확인되지 않았다.** USB 2.0도 약 300Mbps까지 처리할 수 있으므로, USB 2.0 동작만으로는 이 증상을 설명할 수 없다.
- 후속 확인을 위해 2초 간격으로 신호 세기, 링크 속도, 공유기 및 외부 핑, 실제 트래픽, USB 연결 모드를 기록하는 모니터링 스크립트를 시작 프로그램에 등록하여 운용 중이다.

`,Fy=`---
title: 휴대폰으로 Windows 11 PC 켜기/끄기/절전 제어
date: 2026-10-12
---
# 휴대폰으로 Windows 11 PC 켜기/끄기/절전 제어

## 1. 개요

휴대폰으로 PC를 제어하는 구성은 세 부분으로 나뉜다.

| 목적 | 방법 | 필요 조건 |
|---|---|---|
| PC 끄기, 재시작, 절전 | Unified Remote | PC가 켜져 있고 같은 네트워크에 있을 것 |
| PC 켜기 | Wake-on-LAN (WoL) | PC가 유선 LAN으로 연결되어 있을 것 |
| 외부(집 밖)에서 제어 | VPN (예: Tailscale) | PC와 휴대폰 모두 VPN 설치 |

추가로 다음 두 가지를 다룬다.

- 마우스를 건드려도 절전이 해제되지 않게 설정
- 절전 단축키 만들기

적용 환경: Windows 11 Pro, Android 또는 iOS 휴대폰, 공유기를 통한 가정 내 네트워크.

## 2. 작업 환경 (이 문서를 작성한 PC)

| 항목 | 값 |
|---|---|
| OS | Microsoft Windows 11 Pro |
| 유선 LAN | Realtek Gaming 2.5GbE Family Controller (조회 시점 상태: Not Present) |
| 무선 LAN | Realtek 8912AU Wireless LAN WiFi 7 USB NIC (조회 시점 상태: Up, 720.5 Mbps) |
| 마우스 | Logitech (VID_046D, PID_C092) |
| 키보드 | VID_258A, PID_002A (Sino Wealth 칩 계열) |
| 원격 제어 | Unified Remote (가상 HID 장치 UVHID 확인됨) |

## 3. 이 PC에서 진행한 내용과 결과 요약

| 항목 | 결과 |
|---|---|
| Unified Remote 서버 설치 및 휴대폰 연결 | 완료. 사용자가 자동 검색으로 연결되어 정상 동작한다고 확인함 |
| 마우스 절전 해제 권한 해제 | 완료. 장치 관리자에서 HID 규격 마우스 4개 모두 체크 해제 |
| 절전 해제 가능 장치 확인 | 완료. 마우스는 목록에서 제외됨, 키보드만 남음 (5.3절 참고) |
| 빠른 시작 상태 확인 | 비활성화 상태 (HiberbootEnabled = 0) |
| 최대 절전 모드 상태 확인 | 사용 가능 상태 |
| WoL 설정 | 미진행. 조회 시점에 유선 LAN이 연결되어 있지 않아 이 PC에서는 현재 WoL을 쓸 수 없음 |
| 절전 단축키 생성 | 미진행. 방법만 7절에 기재 |

## 4. Unified Remote로 PC 끄기, 재시작, 절전

### 4.1 PC 서버 설치

1. https://www.unifiedremote.com 에서 Windows용 Unified Remote Server를 내려받아 설치한다.
2. 설치 중 "Windows 시작 시 실행" 옵션을 켠다. 켜지 않으면 재부팅 후 서버가 실행되지 않아 휴대폰에서 연결할 수 없다.
3. 방화벽 허용 창이 나타나면 개인 네트워크에서 허용한다.
4. 작업 표시줄 우측 시스템 트레이에 Unified Remote 아이콘이 보이면 서버가 실행 중이다.

### 4.2 휴대폰 앱 설치 및 연결

1. Play 스토어(Android) 또는 App Store(iOS)에서 Unified Remote를 설치한다.
2. 휴대폰을 PC와 같은 Wi-Fi 또는 같은 공유기 네트워크에 연결한다.
3. 앱을 실행하면 같은 네트워크의 PC가 자동으로 검색된다. 목록에서 PC를 선택한다.
4. 자동 검색이 되지 않으면 Servers 메뉴에서 수동 추가를 선택하고 PC의 IP 주소를 입력한다.

PC의 IP 주소 확인 명령어:

\`\`\`powershell
ipconfig
\`\`\`

출력 예시 (값은 환경마다 다름):

\`\`\`
Wireless LAN adapter Wi-Fi 2:

   IPv4 Address. . . . . . . . . . . : 192.168.0.25
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.0.1
\`\`\`

### 4.3 PC 끄기

1. 앱 메인 화면에서 Power 리모컨을 선택한다.
2. Shutdown, Restart, Sleep, Hibernate, Log off 중 원하는 항목을 선택한다.
3. 확인 창이 표시되면 한 번 더 선택한다.

Power 리모컨이 보이지 않으면 Remotes 메뉴에서 추가한다.

### 4.4 IP 주소가 바뀌는 문제

공유기는 DHCP로 IP를 자동 배정하므로 PC 재부팅 후 IP가 바뀔 수 있다.

- 자동 검색으로 연결한 경우: IP가 바뀌어도 앱이 PC를 다시 찾으므로 영향이 없다.
- IP를 수동 입력한 경우: IP가 바뀌면 연결이 끊긴다. 아래 방법으로 고정한다.

방법 1. 공유기에서 IP 예약 (권장)

1. 브라우저에서 공유기 관리 페이지에 접속한다. 주소는 보통 \`192.168.0.1\` 또는 \`192.168.1.1\`이다.
2. DHCP 설정에서 "고정 IP 할당", "IP 예약", "주소 예약" 중 해당하는 메뉴를 찾는다.
3. PC의 MAC 주소에 원하는 IP를 지정한다.

방법 2. Windows에서 고정 IP 설정

1. 설정 > 네트워크 및 인터넷 > 사용 중인 어댑터 > IP 할당 > 편집을 연다.
2. 수동을 선택하고 IPv4를 켠다.
3. IP 주소, 서브넷 접두사 길이(보통 24), 게이트웨이(공유기 주소), DNS를 입력한다.
4. 공유기 DHCP 범위 밖의 주소를 사용하고, 다른 기기와 중복되지 않게 한다.

## 5. 마우스로 절전이 해제되지 않게 설정

기본적으로 Windows는 마우스 움직임으로도 절전을 해제한다. 장치별 "절전 해제 허용" 권한을 끄면 키보드로만 해제된다.

### 5.1 설정 절차

1. 시작 버튼을 우클릭하고 장치 관리자를 연다.
2. "마우스 및 기타 포인팅 장치"를 펼친다.
3. 항목(예: HID 규격 마우스)을 더블클릭한다.
4. 전원 관리 탭에서 "이 장치를 사용하여 컴퓨터의 대기 모드를 해제할 수 있음"의 체크를 해제하고 확인을 누른다.
5. 목록의 모든 HID 규격 마우스 항목에 대해 반복한다.

전원 관리 탭이 보이지 않는 항목은 건너뛰어도 된다.

키보드 항목은 체크를 유지해야 키보드로 절전을 해제할 수 있다.

### 5.2 마우스 항목이 여러 개인 이유

마우스가 하나여도 장치 관리자에 HID 규격 마우스가 여러 개 표시될 수 있다. 원인은 다음과 같다.

- 키보드가 마우스 기능(멀티미디어 키 등)을 별도 HID 인터페이스로 노출하는 경우
- 원격 제어 소프트웨어가 가상 HID 마우스를 생성하는 경우 (Unified Remote의 UVHID)
- USB 포트를 바꿔 연결해 이전 포트의 장치 정보가 남은 경우 (상태 Unknown)

확인 명령어:

\`\`\`powershell
Get-PnpDevice -Class Mouse | Format-Table Status, FriendlyName, InstanceId -AutoSize -Wrap
\`\`\`

이 PC의 실행 결과:

\`\`\`
Status  FriendlyName        InstanceId
------  ------------        ----------
Unknown HID-compliant mouse HID\\VID_258A&PID_002A&MI_01&COL08\\7&15C8284F&0&0007
OK      HID-compliant mouse HID\\VID_258A&PID_002A&MI_01&COL08\\7&17B403A9&0&0007
OK      HID-compliant mouse HID\\UVHID&COL05\\1&2D595CA7&0&0004
OK      HID-compliant mouse HID\\VID_046D&PID_C092&MI_00\\7&2716026B&0&0000
OK      HID-compliant mouse HID\\UVHID&COL06\\1&2D595CA7&0&0005
\`\`\`

결과 해석:

| InstanceId | 구분 |
|---|---|
| VID_046D&PID_C092 | 실제 마우스 (Logitech) |
| VID_258A&PID_002A (Status OK) | 키보드가 노출한 마우스 인터페이스 |
| VID_258A&PID_002A (Status Unknown) | 다른 USB 포트에 연결했던 과거 기록. 현재 미연결 |
| UVHID (2개) | Unified Remote가 생성한 가상 HID 장치. 삭제하지 않는다 |

### 5.3 설정 확인

절전 해제가 가능하도록 설정된 장치 목록을 조회한다.

\`\`\`powershell
powercfg /devicequery wake_armed
\`\`\`

이 PC의 실행 결과:

\`\`\`
HID 키보드 장치
NVIDIA USB Type-C Port Policy Controller
HID 키보드 장치 (005)
HID 키보드 장치 (006)
\`\`\`

마우스 항목이 목록에 없으면 설정이 적용된 것이다. 목록에 마우스가 남아 있으면 해당 장치의 5.1절 절차를 다시 수행한다.

테스트 방법:

1. PC를 절전 상태로 만든다.
2. 마우스를 움직이거나 클릭한다. PC가 깨어나지 않아야 한다.
3. 키보드 키를 누른다. PC가 깨어나야 한다.

## 6. 휴대폰으로 PC 켜기 (Wake-on-LAN)

Unified Remote는 켜져 있는 PC만 제어한다. 꺼진 PC를 켜려면 WoL이 필요하다. WoL은 네트워크로 "매직 패킷"을 보내 PC의 LAN 카드가 전원을 켜게 하는 방식이다.

### 6.1 제약 조건

- 유선 LAN(이더넷) 연결이 필요하다. 무선 LAN은 대부분 WoL을 지원하지 않는다.
- 휴대폰과 PC가 같은 네트워크에 있어야 한다. 외부에서는 VPN이 필요하다 (6.5절).
- BIOS/UEFI에서 WoL 관련 옵션을 켜야 한다.

이 PC의 현재 상태:

\`\`\`powershell
Get-NetAdapter | Format-Table Name, InterfaceDescription, Status, LinkSpeed -AutoSize
\`\`\`

\`\`\`
Name    InterfaceDescription                       Status      LinkSpeed
----    --------------------                       ------      ---------
Wi-Fi 4 Realtek 8912AU Wireless LAN WiFi 7 USB NIC Not Present 0 bps
Wi-Fi 3 Realtek 8912AU Wireless LAN WiFi 7 USB NIC Not Present 0 bps
이더넷  Realtek Gaming 2.5GbE Family Controller    Not Present 0 bps
Wi-Fi 2 Realtek 8912AU Wireless LAN WiFi 7 USB NIC Up          720.5 Mbps
\`\`\`

이더넷 어댑터의 상태가 Not Present이고 무선 어댑터만 Up이다. 이 PC는 조회 시점에 유선 LAN 케이블이 연결되어 있지 않았으므로 WoL을 사용하려면 먼저 유선 연결이 필요하다. 이 PC에서는 WoL 설정과 테스트를 진행하지 않았다.

### 6.2 BIOS/UEFI 설정

1. PC를 재부팅하며 BIOS 진입 키(보통 Del 또는 F2)를 누른다.
2. 전원 관리(Power Management) 또는 Advanced 메뉴에서 다음 항목 중 해당하는 것을 활성화한다.
   - Wake on LAN
   - Power On By PCI-E / PCIe Device
   - Resume by LAN
3. 저장 후 종료한다.

항목 이름은 메인보드 제조사마다 다르다. 메인보드 매뉴얼을 확인한다.

### 6.3 Windows 설정

1. 장치 관리자 > 네트워크 어댑터에서 유선 LAN 어댑터를 더블클릭한다.
2. 전원 관리 탭에서 다음 두 항목을 체크한다.
   - 이 장치를 사용하여 컴퓨터의 대기 모드를 해제할 수 있음
   - Magic Packet으로만 컴퓨터의 대기 모드를 해제할 수 있음
3. 고급 탭에서 \`Wake on Magic Packet\`(또는 \`Magic Packet 시 해제\`)을 사용으로 설정한다.
4. 빠른 시작을 끈다. 제어판 > 전원 옵션 > 전원 단추 동작 선택 > 현재 사용할 수 없는 설정 변경 > "빠른 시작 켜기" 체크 해제.

빠른 시작 상태 확인:

\`\`\`powershell
(Get-ItemProperty 'HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Power').HiberbootEnabled
\`\`\`

이 PC의 결과:

\`\`\`
0
\`\`\`

0이면 빠른 시작이 꺼져 있다. 1이면 켜져 있다.

어댑터의 WoL 관련 고급 속성 확인:

\`\`\`powershell
Get-NetAdapterAdvancedProperty | Where-Object DisplayName -match 'Wake|Magic' | Format-Table Name, DisplayName, DisplayValue -AutoSize
\`\`\`

이 명령은 이 PC에서 실행하지 않았다. 출력 예시:

\`\`\`
Name   DisplayName            DisplayValue
----   -----------            ------------
이더넷 Wake on Magic Packet   Enabled
\`\`\`

### 6.4 MAC 주소 확인과 휴대폰 설정

MAC 주소 확인:

\`\`\`powershell
Get-NetAdapter -Name "이더넷" | Format-Table Name, MacAddress
\`\`\`

출력 예시:

\`\`\`
Name   MacAddress
----   ----------
이더넷 AA-BB-CC-DD-EE-FF
\`\`\`

휴대폰 설정:

1. WoL 앱을 설치한다 (예: Wake On Lan, Fing).
2. 장치를 추가하고 MAC 주소, 브로드캐스트 주소(보통 \`192.168.0.255\`), 포트(9)를 입력한다.
3. PC를 종료한 뒤 앱에서 켜기를 실행한다.

테스트 방법:

1. PC를 종료한다. 유선 LAN 포트의 LED가 켜져 있는지 확인한다. 꺼져 있으면 BIOS 설정이 적용되지 않은 것이다.
2. 휴대폰이 같은 공유기에 연결된 상태에서 앱으로 매직 패킷을 보낸다.
3. 수 초 안에 PC가 부팅되어야 한다.

### 6.5 집 밖에서 제어

공유기 포트 포워딩으로 WoL 포트를 외부에 노출하는 방식은 보안상 권장하지 않는다. VPN(예: Tailscale)을 사용한다.

1. PC 또는 같은 네트워크의 상시 켜진 기기와 휴대폰에 VPN을 설치하고 같은 계정으로 로그인한다.
2. 휴대폰을 VPN에 연결한 상태에서 Unified Remote 또는 WoL 앱을 사용한다.
3. WoL은 PC가 꺼져 있으면 VPN 클라이언트도 동작하지 않으므로, 같은 네트워크에서 상시 켜져 있는 다른 기기(라즈베리파이, NAS 등)가 매직 패킷을 대신 보내야 한다.

### 6.6 대안: 스마트 플러그

WoL을 쓸 수 없는 환경(무선 LAN만 사용하는 경우 등)의 대안이다.

1. BIOS에서 \`Restore on AC Power Loss\` 항목을 \`Power On\`으로 설정한다.
2. PC 전원 케이블을 스마트 플러그에 연결한다.
3. 스마트 플러그 앱에서 전원을 껐다 켜면 PC가 자동으로 부팅된다.

이 방법으로 끄면 PC가 강제 종료되므로 켜는 용도로만 사용하고, 끌 때는 Unified Remote를 사용한다. 이 PC에서는 진행하지 않았다.

## 7. 절전 단축키

Windows에는 절전 전용 단일 단축키가 기본 제공되지 않는다.

### 7.1 기본 제공 방법

| 방법 | 동작 |
|---|---|
| Win + X, 이어서 U, 이어서 S | 키를 차례로 누르면 절전 |
| 바탕화면에서 Alt + F4 | 종료 창에서 절전 선택 후 Enter |
| 키보드의 절전 키 | 키보드에 있는 경우 |

### 7.2 사용자 지정 단축키 생성

1. 바탕화면 우클릭 > 새로 만들기 > 바로 가기를 선택한다.
2. 위치에 다음을 입력한다.

   \`\`\`
   rundll32.exe powrprof.dll,SetSuspendState 0,1,0
   \`\`\`

3. 이름을 \`절전\`으로 지정하고 완료한다.
4. 생성된 바로 가기를 우클릭 > 속성 > 바로 가기 키 칸을 클릭하고 원하는 조합(예: Ctrl + Alt + S)을 누른 뒤 확인한다.

바로 가기 파일을 삭제하면 단축키도 사라진다.

### 7.3 최대 절전 모드와의 관계

최대 절전 모드가 사용 가능한 상태에서는 위 명령이 절전(S3) 대신 최대 절전으로 동작할 수 있다. 사용 가능한 절전 모드 확인:

\`\`\`powershell
powercfg /a
\`\`\`

이 PC의 결과 (일부):

\`\`\`
이 시스템에서 다음 절전 모드를 사용할 수 있습니다.
    대기 모드 (S3)
    최대 절전 모드
    하이브리드 절전 모드

이 시스템에서 다음 절전 모드를 사용할 수 없습니다.
    빠른 시작
        이 작업은 현재 시스템 정책에서 사용하지 않도록 설정되었습니다.
\`\`\`

이 PC는 최대 절전 모드가 사용 가능하므로 7.2절의 바로 가기는 절전이 아닌 최대 절전으로 동작할 수 있다. 절전으로 동작하게 하려면 관리자 권한 PowerShell에서 최대 절전을 끈다.

\`\`\`powershell
powercfg /hibernate off
\`\`\`

이 명령은 최대 절전 모드를 비활성화하며 hiberfil.sys 파일이 삭제된다. 최대 절전 모드를 쓰지 않는 경우에만 실행한다. 이 PC에서는 실행하지 않았다.

## 8. 문제 해결

| 증상 | 확인 사항 |
|---|---|
| 휴대폰 앱이 PC를 찾지 못함 | 휴대폰과 PC가 같은 네트워크인지 확인. PC의 Unified Remote Server 실행 여부와 방화벽 허용 여부 확인. 수동으로 IP 입력 |
| IP를 수동 입력했는데 어느 날 연결이 안 됨 | PC의 IP가 바뀐 것. \`ipconfig\`로 확인하고 공유기에서 IP 예약 |
| WoL로 PC가 켜지지 않음 | 유선 LAN 연결 여부, BIOS 설정, 어댑터 전원 관리 설정, 빠른 시작 비활성화 여부, MAC 주소 입력 값 순서로 확인 |
| 마우스를 건드려도 계속 절전이 해제됨 | \`powercfg /devicequery wake_armed\` 결과에 마우스가 남았는지 확인. 무선 수신기나 USB 루트 허브 항목도 확인 |
| 장치 관리자에 전원 관리 탭이 없음 | 해당 장치는 절전 해제 설정을 지원하지 않는 항목. 다른 HID 항목 확인 |
| 절전 단축키가 최대 절전으로 동작함 | 7.3절 참고 |

## 9. 참고 명령어 모음

\`\`\`powershell
# IP 주소 확인
ipconfig

# 네트워크 어댑터와 연결 상태
Get-NetAdapter | Format-Table Name, InterfaceDescription, Status, LinkSpeed -AutoSize

# MAC 주소
Get-NetAdapter | Format-Table Name, MacAddress

# 마우스 장치 목록
Get-PnpDevice -Class Mouse | Format-Table Status, FriendlyName, InstanceId -AutoSize -Wrap

# 절전 해제가 가능한 장치
powercfg /devicequery wake_armed

# 사용 가능한 절전 모드
powercfg /a

# 빠른 시작 상태 (0: 꺼짐, 1: 켜짐)
(Get-ItemProperty 'HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Power').HiberbootEnabled
\`\`\`

`,Uy=`---
title: Claude Code 플러그인 설치 및 사용 절차 (karpathy-skills, superpowers)
date: 2026-10-12
---
# Claude Code 플러그인 설치 및 사용 절차 (karpathy-skills, superpowers)

작성일: 2026-10-12
대상: Claude Code (터미널 CLI 또는 Claude 데스크톱 앱 Code 탭)
대상 OS: Windows 10 / 11 (macOS, Linux도 명령어 동일. 경로 표기만 다름)
검증 플러그인:
- andrej-karpathy-skills 1.0.0 (마켓플레이스: karpathy-skills)
- superpowers 6.4.1 (마켓플레이스: claude-plugins-official)

---

## 1. 개요

### 1.1 용어

| 용어 | 설명 |
|------|------|
| 마켓플레이스 | 플러그인 목록을 담은 Git 저장소. 먼저 등록해야 그 안의 플러그인을 설치할 수 있다. |
| 플러그인 | 스킬, 슬래시 명령어, 훅, MCP 서버 등을 묶은 설치 단위. |
| 스킬 | 플러그인에 포함된 작업 지침 파일(\`SKILL.md\`). Claude가 상황에 맞으면 스스로 불러와 따른다. |

플러그인 식별자는 \`플러그인이름@마켓플레이스이름\` 형식이다.

- \`andrej-karpathy-skills@karpathy-skills\`
- \`superpowers@claude-plugins-official\`

### 1.2 이 문서에서 설치하는 플러그인

| 플러그인 | 포함 스킬 | 역할 |
|----------|-----------|------|
| andrej-karpathy-skills | karpathy-guidelines (1개) | 코드 작성/리뷰/리팩토링 시 지침. 과도한 복잡화 방지, 최소 변경, 가정 명시, 검증 기준 정의. |
| superpowers | brainstorming, writing-plans, executing-plans, test-driven-development, systematic-debugging, requesting-code-review, receiving-code-review, verification-before-completion, using-git-worktrees, finishing-a-development-branch, dispatching-parallel-agents, subagent-driven-development, using-superpowers, writing-skills, diagnosing-superpowers (15개) | 작업 절차 지침. 설계, 계획, TDD, 디버깅, 리뷰, 완료 전 검증 등. |

두 플러그인은 다루는 영역이 다르다(superpowers: 작업 절차, karpathy-guidelines: 코드 작성 기준). 함께 설치해도 충돌하지 않는다.

### 1.3 진행 순서

1. 마켓플레이스 등록
2. 플러그인 설치
3. Claude Code 재시작 (새 세션)
4. 설치 확인
5. 사용

---

## 2. 사전 준비

- Claude Code가 설치되어 있고 로그인된 상태여야 한다.
- 마켓플레이스 등록 시 GitHub에서 저장소를 내려받으므로 인터넷 연결이 필요하다.
- 이 문서의 \`/plugin ...\` 명령어는 Claude Code 세션의 입력창에 입력한다. PowerShell이나 명령 프롬프트에 입력하는 명령어가 아니다.
- 데스크톱 앱에서 \`/plugin\` 명령이 동작하지 않으면 터미널에서 \`claude\`를 실행한 뒤 같은 명령을 입력한다.
- 4장의 확인 명령어(PowerShell)는 일반 PowerShell에서 실행한다. 관리자 권한은 필요 없다.

---

## 3. 절차

### 3.1 마켓플레이스 등록

명령어 (Claude Code 입력창):

\`\`\`
/plugin marketplace add forrestchang/andrej-karpathy-skills
\`\`\`

- 인자는 GitHub \`소유자/저장소\` 형식이다. 전체 URL(\`https://github.com/forrestchang/andrej-karpathy-skills.git\`)도 사용할 수 있다.
- 등록되는 마켓플레이스 이름은 저장소 이름이 아니라 저장소 안의 \`.claude-plugin/marketplace.json\`에 적힌 \`name\` 값이다. 이 저장소는 \`karpathy-skills\`로 등록된다.

결과 예시 (문구는 Claude Code 버전에 따라 다를 수 있음):

\`\`\`
Successfully added marketplace: karpathy-skills
\`\`\`

superpowers는 Anthropic 공식 마켓플레이스(\`claude-plugins-official\`)에 포함되어 있다. 공식 마켓플레이스는 기본 등록되어 있으므로 별도 등록이 필요 없다. 목록에 없으면 다음 명령으로 등록한다.

\`\`\`
/plugin marketplace add anthropics/claude-plugins-official
\`\`\`

등록된 마켓플레이스 확인:

\`\`\`
/plugin marketplace list
\`\`\`

결과 예시:

\`\`\`
claude-plugins-official
karpathy-skills
\`\`\`

### 3.2 플러그인 설치

명령어 (Claude Code 입력창, 한 줄씩 실행):

\`\`\`
/plugin install andrej-karpathy-skills@karpathy-skills
\`\`\`

\`\`\`
/plugin install superpowers@claude-plugins-official
\`\`\`

결과 예시 (문구는 버전에 따라 다를 수 있음):

\`\`\`
Installed andrej-karpathy-skills. Restart Claude Code to load new plugins.
\`\`\`

- 식별자를 모를 때는 인자 없이 \`/plugin\`을 입력하면 메뉴가 열린다. 메뉴에서 마켓플레이스를 선택하고 플러그인을 골라 설치할 수 있다.
- 설치 범위(scope) 기본값은 \`user\`이다. 이 PC의 사용자 계정 전체(모든 프로젝트)에 적용된다.

### 3.3 Claude Code 재시작

설치한 플러그인의 스킬은 세션이 시작될 때 불러온다. 설치한 세션에서는 바로 적용되지 않는다.

- 터미널 CLI: \`/exit\`로 종료 후 \`claude\`를 다시 실행한다.
- 데스크톱 앱: 새 대화(세션)를 시작한다.

---

## 4. 설치 확인

### 4.1 설치 목록 파일 확인 (PowerShell)

명령어:

\`\`\`powershell
$p = Get-Content "$env:USERPROFILE\\.claude\\plugins\\installed_plugins.json" -Raw | ConvertFrom-Json
$p.plugins.PSObject.Properties | ForEach-Object { [pscustomobject]@{ Plugin = $_.Name; Version = $_.Value[0].version; Scope = $_.Value[0].scope; InstalledAt = $_.Value[0].installedAt } } | Format-Table -AutoSize
\`\`\`

결과 예시:

\`\`\`
Plugin                                 Version Scope InstalledAt
------                                 ------- ----- -----------
andrej-karpathy-skills@karpathy-skills 1.0.0   user  2026-09-16T11:46:38.058Z
superpowers@claude-plugins-official    6.4.1   user  2026-09-16T12:24:33.255Z
\`\`\`

- 설치한 플러그인이 모두 표시되면 정상이다.
- 파일이 없거나 해당 줄이 없으면 3.2를 다시 진행한다.

### 4.2 활성화 상태 확인 (PowerShell)

명령어:

\`\`\`powershell
(Get-Content "$env:USERPROFILE\\.claude\\settings.json" -Raw | ConvertFrom-Json).enabledPlugins | Format-List
\`\`\`

결과 예시:

\`\`\`
andrej-karpathy-skills@karpathy-skills : True
superpowers@claude-plugins-official    : True
\`\`\`

- \`True\`: 활성화 상태. 스킬이 로드된다.
- \`False\`: 설치되어 있으나 비활성화 상태. 5.2의 \`enable\` 명령으로 활성화한다.

### 4.3 등록된 마켓플레이스 확인 (PowerShell)

명령어:

\`\`\`powershell
$m = Get-Content "$env:USERPROFILE\\.claude\\plugins\\known_marketplaces.json" -Raw | ConvertFrom-Json
$m.PSObject.Properties | ForEach-Object { [pscustomobject]@{ Marketplace = $_.Name; Url = $_.Value.source.url } } | Format-Table -AutoSize
\`\`\`

결과 예시:

\`\`\`
Marketplace             Url
-----------             ---
claude-plugins-official https://github.com/anthropics/claude-plugins-official.git
karpathy-skills         https://github.com/forrestchang/andrej-karpathy-skills.git
\`\`\`

### 4.4 스킬 로드 확인 (Claude Code 입력창)

새 세션에서 다음과 같이 입력한다.

\`\`\`
현재 사용 가능한 스킬 목록 중 andrej-karpathy-skills와 superpowers 스킬 이름만 나열해줘.
\`\`\`

결과 예시:

\`\`\`
andrej-karpathy-skills:karpathy-guidelines
superpowers:brainstorming
superpowers:dispatching-parallel-agents
superpowers:executing-plans
superpowers:finishing-a-development-branch
superpowers:receiving-code-review
superpowers:requesting-code-review
superpowers:subagent-driven-development
superpowers:systematic-debugging
superpowers:test-driven-development
superpowers:using-git-worktrees
superpowers:using-superpowers
superpowers:verification-before-completion
superpowers:writing-plans
superpowers:writing-skills
superpowers:diagnosing-superpowers
\`\`\`

- 목록에 없으면 3.3(재시작)을 진행했는지 확인한다.
- 입력창에 \`/\`를 입력하면 자동완성 목록에도 스킬 이름이 표시된다.

---

## 5. 사용 방법

### 5.1 자동 사용

별도 명령어를 입력하지 않아도 된다. 각 스킬에는 "언제 사용하는지"가 적힌 설명이 있고, Claude는 요청 내용이 그 설명에 맞으면 스스로 스킬을 불러온다.

| 요청 예시 | 불러오는 스킬 (예) |
|-----------|--------------------|
| "이 함수 리팩토링해줘" | andrej-karpathy-skills:karpathy-guidelines |
| "테스트가 실패하는데 원인 찾아줘" | superpowers:systematic-debugging |
| "로그인 기능 추가해줘" | superpowers:brainstorming, superpowers:writing-plans, superpowers:test-driven-development |
| "작업 끝났으면 커밋해줘" | superpowers:verification-before-completion |

스킬을 불러오면 대화 화면에 \`Skill\` 도구 호출이 표시된다.

결과 예시:

\`\`\`
Skill(andrej-karpathy-skills:karpathy-guidelines)
\`\`\`

자동 사용은 Claude가 요청과 스킬 설명을 비교해 판단하는 방식이다. 요청이 모호하면 불러오지 않을 수 있다.

### 5.2 직접 호출

특정 스킬을 반드시 사용하게 하려면 이름으로 호출한다.

명령어 (Claude Code 입력창):

\`\`\`
/andrej-karpathy-skills:karpathy-guidelines
\`\`\`

\`\`\`
/superpowers:brainstorming
\`\`\`

또는 문장으로 지정한다.

\`\`\`
karpathy-guidelines 스킬을 적용해서 src/utils.py를 리뷰해줘.
\`\`\`

### 5.3 동작 테스트

설치 후 다음 요청으로 스킬이 실제로 적용되는지 확인한다.

테스트 1 (karpathy-guidelines):

\`\`\`
다음 파이썬 함수를 리팩토링해줘.
def add(a, b):
    result = a + b
    return result
\`\`\`

확인 항목:
- 대화 화면에 \`Skill(andrej-karpathy-skills:karpathy-guidelines)\` 호출이 표시된다.
- 클래스 추가, 타입 검사, 예외 처리 등 요청하지 않은 기능을 덧붙이지 않고 최소한으로 수정한다.

테스트 2 (superpowers):

\`\`\`
간단한 할 일 목록 CLI 프로그램을 만들고 싶어.
\`\`\`

확인 항목:
- 대화 화면에 \`Skill(superpowers:brainstorming)\` 호출이 표시된다.
- 바로 코드를 작성하지 않고 요구사항(저장 방식, 기능 범위 등)을 먼저 질문한다.

---

## 6. 관리

명령어 (Claude Code 입력창). \`<식별자>\`는 \`플러그인이름@마켓플레이스이름\`이다.

| 작업 | 명령어 |
|------|--------|
| 관리 메뉴 열기 | \`/plugin\` |
| 마켓플레이스 목록 | \`/plugin marketplace list\` |
| 마켓플레이스 갱신 (새 버전 확인) | \`/plugin marketplace update karpathy-skills\` |
| 플러그인 비활성화 | \`/plugin disable andrej-karpathy-skills@karpathy-skills\` |
| 플러그인 활성화 | \`/plugin enable andrej-karpathy-skills@karpathy-skills\` |
| 플러그인 제거 | \`/plugin uninstall andrej-karpathy-skills@karpathy-skills\` |
| 마켓플레이스 제거 | \`/plugin marketplace remove karpathy-skills\` |

- 활성화, 비활성화, 제거 후에도 새 세션부터 적용된다.

---

## 7. 문제 해결

| 증상 | 원인 | 조치 |
|------|------|------|
| \`/plugin install\` 시 플러그인을 찾을 수 없음 | 마켓플레이스 미등록 또는 이름 오기 | \`/plugin marketplace list\`로 마켓플레이스 이름 확인. 식별자는 저장소 이름이 아니라 \`marketplace.json\`의 \`name\` 값을 사용한다. (예: \`andrej-karpathy-skills@karpathy-skills\`) |
| 설치했는데 스킬 목록에 없음 | 재시작하지 않음 | 3.3 진행 |
| 설치했는데 스킬 목록에 없음 | 비활성화 상태 | 4.2 확인 후 \`/plugin enable <식별자>\` |
| 마켓플레이스 등록 실패 | 네트워크 또는 GitHub 접근 문제 | 브라우저로 \`https://github.com/forrestchang/andrej-karpathy-skills\` 접속 가능 여부 확인 |
| 데스크톱 앱에서 \`/plugin\` 메뉴가 열리지 않음 | 대화형 메뉴 미지원 환경 | 터미널에서 \`claude\` 실행 후 진행. 설치 결과는 \`~/.claude\` 폴더에 저장되므로 데스크톱 앱에도 동일하게 적용된다. |
| PowerShell에서 \`claude\` 명령을 찾을 수 없음 | CLI 미설치 또는 PATH 미등록 | 데스크톱 앱만 사용하는 경우 정상. 플러그인은 앱 안에서 설치/사용할 수 있다. |

---

## 8. 이 PC에서 진행한 내용 및 결과

### 8.1 환경

| 항목 | 값 |
|------|-----|
| OS | Windows 11 Pro 10.0.26200 |
| 사용 환경 | Claude 데스크톱 앱 (Code 탭) |
| 사용자 설정 폴더 | \`C:\\Users\\SHY\\.claude\` |
| \`claude\` CLI | PATH에 없음 (PowerShell에서 \`claude --version\` 실행 시 "not recognized" 오류) |

### 8.2 진행 이력

| 일시 (UTC) | 작업 | 결과 |
|------------|------|------|
| 2026-09-16 11:46:28 | 마켓플레이스 등록: \`forrestchang/andrej-karpathy-skills\` | \`karpathy-skills\`로 등록됨 |
| 2026-09-16 11:46:38 | 플러그인 설치: \`andrej-karpathy-skills@karpathy-skills\` | 1.0.0 설치 (commit \`2c606141\`) |
| 2026-09-16 12:22:52 | 마켓플레이스 등록: \`obra/superpowers-marketplace\` | \`superpowers-marketplace\`로 등록됨 (설치에는 사용하지 않음) |
| 2026-09-16 12:24:33 | 플러그인 설치: \`superpowers@claude-plugins-official\` | 설치 완료 |
| 2026-10-11 15:21:23 | superpowers 갱신 | 6.4.1 (commit \`5bf4e780\`) |
| 2026-10-12 | 4장 확인 명령 실행 | 아래 8.3 결과 |

superpowers는 \`obra/superpowers-marketplace\`와 공식 마켓플레이스 양쪽에서 제공된다. 이 PC에서는 공식 마켓플레이스(\`claude-plugins-official\`)의 것을 설치했다. 하나만 설치하면 되며, 양쪽에서 중복 설치하지 않는다.

### 8.3 확인 결과

4.1 설치 목록:

\`\`\`
Plugin                                 Version Scope InstalledAt
------                                 ------- ----- -----------
andrej-karpathy-skills@karpathy-skills 1.0.0   user  2026-09-16T11:46:38.058Z
superpowers@claude-plugins-official    6.4.1   user  2026-09-16T12:24:33.255Z
\`\`\`

4.2 활성화 상태:

\`\`\`
andrej-karpathy-skills@karpathy-skills : True
superpowers@claude-plugins-official    : True
\`\`\`

4.3 마켓플레이스:

\`\`\`
Marketplace             Url
-----------             ---
claude-plugins-official https://github.com/anthropics/claude-plugins-official.git
karpathy-skills         https://github.com/forrestchang/andrej-karpathy-skills.git
superpowers-marketplace https://github.com/obra/superpowers-marketplace.git
\`\`\`

4.4 스킬 로드: 새 세션 시작 시 Claude에게 제공되는 스킬 목록에 \`andrej-karpathy-skills:karpathy-guidelines\` 1개와 \`superpowers:*\` 15개가 포함된 것을 확인했다. 설치 직후 같은 세션에는 superpowers 스킬이 없었고, 세션을 다시 연 뒤 표시되었다. (3.3 재시작 필요 확인)

### 8.4 설정 파일 내용

\`C:\\Users\\SHY\\.claude\\settings.json\`:

\`\`\`json
{
  "enabledPlugins": {
    "andrej-karpathy-skills@karpathy-skills": true,
    "superpowers@claude-plugins-official": true
  },
  "extraKnownMarketplaces": {
    "claude-plugins-official": {
      "source": { "source": "git", "url": "https://github.com/anthropics/claude-plugins-official.git" }
    },
    "karpathy-skills": {
      "source": { "source": "git", "url": "https://github.com/forrestchang/andrej-karpathy-skills.git" }
    },
    "superpowers-marketplace": {
      "source": { "source": "git", "url": "https://github.com/obra/superpowers-marketplace.git" }
    }
  }
}
\`\`\`

이 파일은 \`/plugin\` 명령이 자동으로 수정한다. 직접 편집할 필요는 없다.

### 8.5 설치 파일 위치

| 구분 | 경로 |
|------|------|
| 설치 목록 | \`C:\\Users\\SHY\\.claude\\plugins\\installed_plugins.json\` |
| 마켓플레이스 목록 | \`C:\\Users\\SHY\\.claude\\plugins\\known_marketplaces.json\` |
| 마켓플레이스 저장소 사본 | \`C:\\Users\\SHY\\.claude\\plugins\\marketplaces\\<마켓플레이스이름>\\\` |
| karpathy-guidelines 스킬 | \`C:\\Users\\SHY\\.claude\\plugins\\cache\\karpathy-skills\\andrej-karpathy-skills\\1.0.0\\skills\\karpathy-guidelines\\SKILL.md\` |
| superpowers 스킬 | \`C:\\Users\\SHY\\.claude\\plugins\\cache\\claude-plugins-official\\superpowers\\6.4.1\\skills\\<스킬이름>\\SKILL.md\` |

`,By=`---
title: 후쿠오카 관광 정보
date: 2026-10-13
---
# 후쿠오카 3박 4일 여행 가이드

> **여행 시기 가정:** 2026년 10월 하순 (작성일 2026-10-13 기준 D-7)
> **대상:** 한국에서 출발하는 첫 후쿠오카 자유여행자
> 요금·운영시간은 조사 시점 기준이며 바뀔 수 있습니다.

---

## 목차

0. [요약](#0-요약)
1. [여행 준비 (D-7 ~ D-1)](#1-여행-준비-d-7--d-1)
2. [후쿠오카 공항 도착 & 입국](#2-후쿠오카-공항-도착--입국)
3. [공항에서 시내로](#3-공항에서-시내로)
4. [숙소: 지역 선택 & 예약 방법](#4-숙소-지역-선택--예약-방법)
5. [시내 이동 방법](#5-시내-이동-방법)
6. [관광지 (시내 + 근교)](#6-관광지-시내--근교)
7. [먹거리 & 추천 식당](#7-먹거리--추천-식당)
8. [쇼핑 & 구매 추천 상품](#8-쇼핑--구매-추천-상품)
9. [추천 3박 4일 일정표](#9-추천-3박-4일-일정표)
10. [예산 가이드](#10-예산-가이드)
11. [현지 매너 & 비상시 대처](#11-현지-매너--비상시-대처)
12. [공항 복귀 방법](#12-공항-복귀-방법)
13. [출국 & 한국 귀국 시 팁](#13-출국--한국-귀국-시-팁)
14. [최종 체크리스트](#14-최종-체크리스트)

---

## 0. 요약

| 항목           | 핵심 내용                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------- |
| 비행시간       | 인천 → 후쿠오카 약 1시간 20분 / 김해 → 후쿠오카 약 50분                                            |
| 비자           | 한국인 90일 무비자                                                                                 |
| 시차           | 없음                                                                                               |
| 전압           | **100V, 11자 플러그(A타입)** → "돼지코" 어댑터 필요                                                |
| 10월 하순 날씨 | 낮 20~23℃ / 아침·저녁 13~16℃ → 얇은 겉옷 필요                                                      |
| 공항 ↔ 시내    | 국제선에서 하카타역까지 **버스로 약 20분**                                                         |
| 교통카드       | 아이폰 Suica / 현지 nimoca·하야카켄 / **컨택리스(터치) 신용카드**도 지하철·일부 버스에서 사용 가능 |
| 면세           | 이번 여행(10월)은 **기존 즉시면세** 방식. **11/1부터 "환급형"으로 변경**                           |
| 출국세         | 2026년 7월부터 **1인 3,000엔**으로 인상 (항공권 가격에 포함)                                       |

---

## 1. 여행 준비 (D-7 ~ D-1)

### 1-1. D-7

| 우선순위 | 할 일                                              | 비고                                                                    |
| -------- | -------------------------------------------------- | ----------------------------------------------------------------------- |
| ★★★      | **여권 유효기간 확인**                             | 체류기간 이상 유효하면 입국 가능하나, 항공사·안전상 **6개월 이상 권장** |
| ★★★      | 항공권 이름(영문)과 여권 영문명 **철자 일치** 확인 | 불일치 시 탑승 거부 가능                                                |
| ★★★      | 숙소 예약 확인 (예약번호·주소 캡처)                | 4장 참고                                                                |
| ★★       | **Visit Japan Web(VJW)** 등록                      | 입국심사·세관신고 QR 발급. 아래 1-2 참고                                |
| ★★       | 여행자 보험 가입                                   | 해외 병원비 대비. 휴대품 도난 특약 고려                                 |
| ★★       | 데이터(eSIM/유심/로밍) 준비                        | 1-4 참고                                                                |
| ★★       | 근교 투어(유후인·벳푸 등) 예약                     | 주말에는 일찍 마감되는 경우가 있음                                      |
| ★        | 인기 식당 예약 (모츠나베·미즈타키 등)              | 7장 참고                                                                |

### 1-2. Visit Japan Web 등록 방법

1. \`vjw.digital.go.jp\` 접속 → 계정 생성 (이메일 인증)
2. **본인 정보 등록**: 여권 촬영으로 자동 입력 가능
3. **입국·귀국 예정 등록**: 도착일, 항공편명, 숙소 주소·전화번호 입력
4. **입국심사(외국인 입국기록)** + **세관신고** 두 항목 모두 작성
5. QR 코드 2개(입국심사용/세관용) 생성 → **스크린샷 저장** (공항 와이파이가 느릴 수 있음)

> 참고: 도착 6시간 전까지 완료해 두는 것을 권장합니다.
> 참고: VJW는 선택사항입니다. 등록하지 않았다면 기내/공항에서 나눠주는 **종이 입국카드·세관신고서**를 작성하면 됩니다.

### 1-3. 환전 & 결제 수단

후쿠오카도 카드 결제가 가능한 곳이 늘었지만 **포장마차(야타이), 작은 라멘집, 신사 부적, 일부 버스**는 현금만 받는 곳이 있습니다.

| 수단                                                                            | 장점                                                       | 용도                               |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------- |
| **트래블 카드** (트래블월렛, 토스 외화통장, 하나 트래블로그, 신한 SOL트래블 등) | 환전 수수료 낮음, 현지 ATM 인출 수수료 면제(카드사별 상이) | 주 결제 수단 + 현지 ATM 엔화 인출  |
| 엔화 현금                                                                       | 어디서나 사용                                              | 야타이, 소규모 식당, 코인락커      |
| 일반 신용카드                                                                   | 별도 준비 불필요                                           | 백화점·호텔 (해외결제 수수료 확인) |

- **현금 준비량:** 1인 3~4만 엔 정도 + 트래블 카드. 부족하면 **세븐일레븐 ATM(세븐은행)** 또는 이온·우체국 ATM에서 인출
- ⚠️ 해외결제 시 **원화 결제(DCC)** 를 선택하면 수수료가 이중으로 붙습니다. 결제 화면에서 **"JPY(엔화)"를 선택**하고, 카드사 앱에서 해외원화결제 차단 서비스를 신청해 두세요.

### 1-4. 데이터(인터넷)

| 방식          | 특징                                        | 대상                 |
| ------------- | ------------------------------------------- | -------------------- |
| **eSIM**      | QR로 설치, 유심 교체 불필요, 한국 번호 유지 | eSIM 지원 폰 사용자  |
| 유심          | 저렴, 공항 수령/택배                        | eSIM 미지원 폰       |
| 포켓 와이파이 | 여러 명 공유                                | 3인 이상 그룹        |
| 통신사 로밍   | 설정이 간단, 상대적으로 비쌈                | 별도 설정을 원치 않는 경우 |

> 참고: eSIM은 **출국 전 한국에서 설치**하고, 현지 도착 후 "데이터 로밍 ON + 회선 전환"만 하면 됩니다.

### 1-5. 설치해 두면 좋은 앱

| 앱                               | 용도                                       |
| -------------------------------- | ------------------------------------------ |
| **Google 지도**                  | 길찾기·대중교통 경로·식당 영업시간         |
| **파파고 / 구글 번역**           | 메뉴판 카메라 번역                         |
| **GO / DiDi / Uber**             | 택시 호출 (GO는 일본에서 이용자가 많은 앱) |
| **Visit Japan Web**              | 입국 QR (웹사이트, 홈화면에 추가)          |
| **Klook / KKday / 마이리얼트립** | 투어·패스·입장권 예약                      |
| **타베로그(食べログ)**           | 일본 현지 맛집 평점 (3.5 이상이면 상위권)  |
| **Apple 지갑(Suica)**            | 아이폰 교통카드 (5장 참고)                 |

### 1-6. 짐 싸기

**필수**

- 여권, 항공권(e-티켓), 숙소 예약 확인서 (캡처본)
- 트래블 카드 + 신용카드 1장 이상 + 엔화 현금
- **돼지코 어댑터(11자, A타입)** — 한국 충전기는 대부분 110~240V 프리볼트라 어댑터만 있으면 사용 가능
- 보조배터리, 충전 케이블
- 상비약 (소화제, 진통제, 밴드)

**10월 하순 옷차림**

- 반팔/얇은 긴팔 + **가디건·바람막이** (일교차 7~10℃)
- **편한 운동화** (도보 이동이 많음)
- 접이식 우산

**있으면 좋은 것**

- 동전 지갑 (일본은 동전 사용이 많음)
- 접이식 장바구니/에코백 (편의점·마트 봉투 유료)
- 쇼핑용 여분 캐리어 공간 또는 접이식 보조가방

> ⚠️ **보조배터리 규정**: 위탁수하물 불가, 기내에만 반입. 한국 국적사와 일본 항공 당국 모두 **기내 선반 보관 금지 / 몸 가까이 보관**하도록 규정을 강화했습니다. 단자에 절연 테이프를 붙이거나 개별 파우치에 넣으세요. 160Wh 초과는 반입 불가.

---

## 2. 후쿠오카 공항 도착 & 입국

### 2-1. 공항 구조

후쿠오카 공항은 **국제선 터미널과 국내선 터미널이 떨어져 있습니다.**

\`\`\`
[국제선 터미널] ── 무료 셔틀버스 약 10~15분 ──▶ [국내선 터미널] ── 지하철 공항선 (후쿠오카쿠코역)
       │
       └── 니시테츠 버스 ──▶ 하카타역 / 텐진 (직행)
\`\`\`

- 한국발 항공편은 모두 **국제선 터미널**에 도착
- **지하철역은 국내선 터미널에만 있음** → 지하철을 타려면 무료 셔틀 이용
- 국제선 터미널은 2025년 3월 리뉴얼로 면세점·푸드코트가 확장됨

### 2-2. 입국 절차 순서

1. **비행기 하차** → "Arrival(到着)" 표지판 따라 이동
2. **검역**
3. **입국심사**
   - VJW QR 또는 종이 입국카드 제출
   - 지문 채취 + 얼굴 사진 촬영
   - 참고: 입국심사 대기줄이 길 수 있으니 기내에서 미리 화장실을 다녀오는 것이 좋습니다.
4. **수하물 찾기** (전광판에서 항공편명으로 벨트 번호 확인)
5. **세관검사**
   - VJW 세관 QR → **전자신고 게이트(키오스크)** 에서 QR을 찍고 얼굴 인증
   - 종이 신고서 소지자는 유인 카운터로
6. **도착 로비**

### 2-3. 도착 로비에서 할 일

| 할 일                  | 위치/방법                                                 |
| ---------------------- | --------------------------------------------------------- |
| 유심/포켓와이파이 수령 | 도착 로비 수령 카운터 (예약 확인서 지참)                  |
| 엔화 인출              | 도착 로비 **세븐은행 ATM** 등                             |
| 관광 정보·지도         | 관광안내소 (한국어 팜플렛 있음)                           |
| 교통카드 구매/충전     | 도착층 니시테츠 버스 매표소, 또는 지하철역(국내선) 발매기 |
| 화장실                 | 이동 전에 해결 (시내까지 버스로 20분 이상)                |

> 참고: 국제선 터미널 도착 구역 근처에 **입국 면세점**이 있습니다. 술·담배를 살 계획이라면 이용할 수 있습니다.

---

## 3. 공항에서 시내로

### 3-1. 교통수단 비교 (국제선 터미널 출발)

| 수단                  | 목적지                         | 소요시간                     | 요금(대략)       | 적합한 경우                          |
| --------------------- | ------------------------------ | ---------------------------- | ---------------- | ------------------------------------ |
| **니시테츠 공항버스** | 하카타역 (치쿠시 출구)         | 약 20~25분                   | 약 300~400엔     | **짐이 많거나 하카타 숙소**          |
| 니시테츠 버스         | 텐진 (텐진 고속버스터미널)     | 약 30~40분                   | 약 500엔         | 텐진 숙소                            |
| 무료셔틀 + 지하철     | 하카타 / 나카스카와바타 / 텐진 | 셔틀 10~15분 + 지하철 5~11분 | 지하철 260~300엔 | 나카스·텐진 숙소, 출퇴근 정체 시간대 |
| 택시                  | 하카타역                       | 약 15분                      | 약 1,500~2,500엔 | 3~4인 그룹, 늦은 밤                  |

> ⚠️ 버스 요금은 2026년 인상·캐시리스 할인(교통카드/터치결제 시 20엔 할인) 등으로 출처마다 다르게 나옵니다. 탑승 시 정류장 안내판 또는 니시테츠 공식 사이트를 확인하세요.

### 3-2. 공항버스 타는 법 (하카타행)

1. 도착 로비 밖 **버스 정류장**에서 하카타역행 표지 확인
2. **가운데 문으로 승차** → 교통카드/터치결제 시 승차 때도 단말기 터치
3. 하차 시 **앞문**에서 교통카드/터치결제 다시 터치 (현금은 운임함에 투입, 잔돈 미리 준비)
4. "博多駅(하카타에키)" 안내방송 → 하차벨 누르기

### 3-3. 지하철 이용 시

1. 국제선 터미널 1층 **5번 정류장** 부근에서 **국내선행 무료 셔틀** 탑승
2. 국내선 터미널 하차 → 지하철 "후쿠오카쿠코(福岡空港)"역
3. 공항선(오렌지색) 탑승 — 하카타 2정거장(약 5분), 나카스카와바타·텐진 약 10분

> 참고: 공항역이 시발역이라 대부분 앉아서 갈 수 있습니다.

---

## 4. 숙소: 지역 선택 & 예약 방법

### 4-1. 지역별 비교

| 지역                | 장점                                                   | 단점                      | 적합한 경우                        |
| ------------------- | ------------------------------------------------------ | ------------------------- | ---------------------------------- |
| **하카타역 주변**   | 공항과 가까움, JR·고속버스·신칸센 허브, 근교 여행 편리 | 밤 분위기는 텐진보다 조용 | **첫 방문, 근교(유후인·벳푸) 계획** |
| **텐진**            | 쇼핑·맛집·카페가 많음, 다이묘 거리                     | 공항에서 조금 더 멂       | 쇼핑·식도락 위주                   |
| **나카스·카와바타** | 하카타와 텐진 중간, 야타이 도보권, 캐널시티 인접       | 일부 골목은 유흥가        | 동선 효율 + 야경·야타이            |
| **기온·고후쿠마치** | 하카타역 도보권, 상대적으로 저렴, 사찰·신사 근처       | 저녁엔 조용               | 가성비                             |
| **모모치(해변)**    | 바다 전망, 후쿠오카타워 인접                           | 시내 이동 불편            | 휴양 위주                          |

> 참고: 첫 방문이라면 **"하카타역 ~ 나카스카와바타" 사이**가 무난합니다. 하카타↔텐진은 지하철로 5분, 도보 30분 거리라 어느 지역에 묵어도 이동 부담은 크지 않습니다.

### 4-2. 숙소 예시 (등급별)

> 가격대·평점은 시기마다 달라지므로 예약 사이트에서 최신 후기를 확인하세요.

**가성비 (1박 1~2만엔대 / 2인 기준)**

- **도미인 계열** (도미인 프리미엄 하카타 캐널시티마에 등) — 대욕장, **밤에 무료 라멘(요나키소바)** 제공
- **다이와 로이넷, 미쓰이 가든, 솔라리아 니시테츠 계열** — 비즈니스호텔
- 토요코인, 슈퍼호텔 — 저렴한 편, 조식 포함 플랜이 많음

**중급~고급**

- **JR 큐슈 호텔 블라썸 하카타 센트럴** — 하카타역 바로 앞
- **호텔 닛코 후쿠오카** — 하카타역 도보 3분
- **그랜드 하얏트 후쿠오카** — 캐널시티 직결
- **ONE FUKUOKA HOTEL** — 2025년 개장한 텐진 원후쿠오카빌딩 최상층, 테라스·루프탑 바

**고급**

- **더 리츠칼튼 후쿠오카** (텐진)
- **힐튼 후쿠오카 씨호크** (모모치, 바다 전망)

### 4-3. 예약 방법

| 사이트                         | 특징                                        |
| ------------------------------ | ------------------------------------------- |
| 아고다 / 부킹닷컴 / 익스피디아 | 한국어 지원, 카드사 할인 쿠폰               |
| 라쿠텐 트래블 / 자란           | 일본 현지 사이트, 조식 포함 플랜 등 선택지 많음 |
| 호텔 공식 홈페이지             | 회원가·조기예약 할인, 변경이 비교적 자유로움 |

**예약 시 확인할 것**

- **환불 가능 여부** (D-7이면 무료 취소 기한이 지났을 수 있음)
- **객실 크기**: 일본 호텔은 좁은 편입니다. 2인이면 **15㎡ 이상**, 캐리어 2개를 펼치려면 **18㎡ 이상** 권장
- **침대 타입**: "세미더블"은 1인용보다 조금 큰 정도 → 2인은 **트윈 또는 더블(140cm 이상)** 선택
- **숙박세**: 후쿠오카시는 1인 1박당 숙박세(약 200엔, 고가 객실은 500엔)를 **현장에서 별도 징수**하는 경우가 많음
- 체크인 15:00 / 체크아웃 10:00~11:00가 일반적 → **체크인 전·체크아웃 후 짐 보관** 가능 여부 확인 (대부분 무료)

---

## 5. 시내 이동 방법

### 5-1. 교통수단 개요

| 수단                  | 특징                      | 주 사용처                             |
| --------------------- | ------------------------- | ------------------------------------- |
| **지하철** (3개 노선) | 노선이 단순, 배차 정확    | 공항·하카타·나카스·텐진·오호리공원    |
| **니시테츠 버스**     | 지하철이 없는 지역 연결   | 후쿠오카타워, 모모치, 야쿠인 등       |
| **니시테츠 전철**     | 텐진 출발                 | 다자이후, 야나가와                    |
| **JR**                | 하카타역 출발             | 고쿠라·모지코, 유후인(특급), 이토시마 |
| 도보                  | 시내 범위가 작음          | 하카타 ↔ 나카스 ↔ 텐진                |
| 택시                  | 기본요금이 저렴한 편      | 늦은 밤, 다인원                       |

**지하철 노선**

- **공항선(구코선, 주황)**: 후쿠오카공항 – **하카타** – 기온 – **나카스카와바타** – **텐진** – 아카사카 – **오호리코엔** – 니시진 – 메이노하마
- **하코자키선(파랑)**: 나카스카와바타 – 하코자키미야마에(하코자키 신궁) – 가이즈카
- **나나쿠마선(초록)**: 하카타 – 구시다진자마에(캐널시티) – 텐진미나미 – 야쿠인 – …

### 5-2. 교통카드 & 결제 방법

| 방법                             | 사용처                              | 비고                                                                                                        |
| -------------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **아이폰 Suica (Apple 지갑)**    | 지하철·버스·JR·편의점 전국 호환     | 한국 아이폰에서도 발급 가능. 충전은 Apple Pay에 등록된 카드로 (일부 카드 충전 거부 시 마스터카드 계열 시도) |
| **nimoca / 하야카켄 / SUGOCA**   | 후쿠오카 현지 IC카드, 전국 호환     | 지하철역·버스터미널에서 구매 (보증금 500엔)                                                                 |
| **컨택리스(터치) 신용/체크카드** | 후쿠오카 지하철, 일부 니시테츠 버스 | Visa·JCB·AMEX 등 터치 결제 마크 카드. **지하철은 하루 이용액 상한이 자동 적용**됨                           |
| 1일 승차권                       | 지하철 1일 무제한                   | 약 640~660엔. **하루 3회 이상** 타면 이득                                                                   |
| 투어리스트 시티 패스             | 지하철 + 버스 + JR(시내) 1일 무제한 | 약 2,500엔대. 다자이후 버전 별도. 시내만 다니면 손해일 수 있음                                              |

> 참고: 대부분은 **Suica(아이폰) 또는 nimoca + 터치결제 카드**로 충분합니다. 패스는 하루에 지하철을 많이 타는 날에만 고려하세요.

### 5-3. 이동 팁

- 하카타 ↔ 텐진: 지하철 5분 / 버스 약 15분 / **도보 30분** (나카스 강변을 따라 걸을 수 있음)
- 택시: 일본 택시 **뒷문은 자동**입니다. 직접 열고 닫지 마세요.
- 구글지도 대중교통 경로를 그대로 따라가면 됩니다.
- 버스는 **가운데 문 승차, 앞문 하차, 하차 시 요금 지불**이 기본

---

## 6. 관광지 (시내 + 근교)

### 6-1. 시내 관광지

#### 하카타 지역

| 장소                                   | 내용                                             | 소요    | 팁                              |
| -------------------------------------- | ------------------------------------------------ | ------- | ------------------------------- |
| **구시다 신사**                        | 후쿠오카 대표 신사, 야마카사 축제 가마 상설 전시 | 30분    | 캐널시티에서 도보 5분           |
| **도초지 · 쇼후쿠지**                  | 목조 대불(도초지), 일본 최초 선종 사찰(쇼후쿠지) | 40분    | 지하철 기온역 근처              |
| **캐널시티 하카타**                    | 운하가 있는 대형 쇼핑몰, 분수쇼, 라멘 스타디움   | 1~2시간 | 분수쇼는 매 정시~30분 간격      |
| **하카타역 (JR하카타시티·아뮤플라자)** | 쇼핑·식당가, **옥상 정원·전망**                  | 1시간   | 옥상 '쓰바메노모리 히로바' 무료 |

#### 나카스·텐진 지역

| 장소                                    | 내용                                              | 소요    | 팁                                                            |
| --------------------------------------- | ------------------------------------------------- | ------- | ------------------------------------------------------------- |
| **나카스 야타이 거리**                  | 강변 포장마차                                     | 1~2시간 | 18시 이후 영업. 11장 매너 참고                                |
| **텐진 지하상가**                       | 지하 쇼핑가, 약 150개 점포                        | 1시간   | 비 오는 날 이동 동선으로 활용                                 |
| **다이묘 · 이마이즈미**                 | 편집숍·카페·빈티지 골목                           | 1~2시간 |                                                               |
| **원 후쿠오카 빌딩 / 텐진 신규 빌딩들** | '텐진 빅뱅' 재개발로 2025~2026년 신축 쇼핑몰 다수 | 1시간   | 2026년 8월 '텐진 비즈니스센터 II' 개장(대형 서점·아트 설치물) |

#### 오호리 · 모모치 지역

| 장소                              | 내용                                        | 소요    | 팁                                                            |
| --------------------------------- | ------------------------------------------- | ------- | ------------------------------------------------------------- |
| **오호리 공원**                   | 호수 산책로, 호숫가 스타벅스, 일본정원      | 1~2시간 | 오전 산책                                                     |
| **후쿠오카성 터 (마이즈루 공원)** | 성곽 돌담·천수대 전망                       | 1시간   | 오호리공원과 붙어 있음                                        |
| **후쿠오카 타워**                 | 234m 전망대, 바다 쪽 야경                   | 1시간   | 해 질 무렵 입장. 외국인 여권 제시 시 할인되는 경우 있음      |
| **모모치 해변**                   | 인공 해변, 마리존 건물, 석양                | 1시간   | 후쿠오카타워와 같이 방문                                      |

### 6-2. 10월 하순 계절 장소

| 장소                         | 시기 관련 내용                                       | 가는 법                                       |
| ---------------------------- | ---------------------------------------------------- | --------------------------------------------- |
| **노코노시마 아일랜드 파크** | 가을 **코스모스** 시즌 (보통 10월 중순~하순)         | 메이노하마 여객선터미널 → 페리 약 10분 + 버스 |
| **우미노나카미치 해변공원**  | 코스모스, **코키아(댑싸리)** 단풍                    | JR 우미노나카미치역 또는 하카타항 페리        |
| **이토시마**                 | 바다 위 부부바위(후타미가우라), 해변 카페            | JR + 버스 또는 렌터카. 석양 시간대 방문       |

> 참고: 꽃 개화 상황은 각 공원 공식 SNS/홈페이지에서 출발 전 확인하세요.

### 6-3. 근교 당일치기

| 행선지                       | 볼거리                                                                                      | 이동                                                                                          | 소요   | 추천도 |
| ---------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------ | ------ |
| **다자이후**                 | **다자이후 덴만구**(학문의 신), 참배길 우메가에모치, 구마 겐고 설계 스타벅스, 규슈국립박물관 | 니시테츠 텐진역 → 후츠카이치 환승 → 다자이후 (약 40분) / 하카타 버스터미널 직행버스(약 40분) | 반나절 | ★★★★★  |
| **야나가와**                 | 뱃사공이 노를 젓는 **수로 뱃놀이**, 장어 찜밥(세이로무시)                                   | 니시테츠 텐진 → 야나가와 (약 50분)                                                            | 반나절 | ★★★★   |
| **유후인**                   | 온천 마을, 긴린코 호수(가을 아침 물안개), 유노츠보 거리                                     | 하카타 버스터미널 고속버스 '유후인호' 약 2시간 (**사전 예약 권장**) / JR 특급                 | 하루   | ★★★★★  |
| **벳푸**                     | 지옥 온천 순례(지고쿠메구리), 온천                                                          | JR 특급 소닉 약 2시간                                                                         | 하루   | ★★★★   |
| **기타큐슈 (모지코·고쿠라)** | 항구 거리, 야키카레, 고쿠라성                                                               | JR 신칸센 15분 / 쾌속 약 1시간 반                                                             | 하루   | ★★★    |

> 참고: **"다자이후 + 야나가와"** 는 니시테츠 관광 패키지 티켓(왕복 전철 + 뱃놀이)을 이용하면 따로 사는 것보다 저렴합니다.
> 참고: **"다자이후 + 유후인 + 벳푸"** 를 하루에 도는 **버스 투어**(Klook·KKday·마이리얼트립·VELTRA 등)를 이용하면 교통편을 따로 알아볼 필요가 없습니다. 3박 4일 중 하루를 투어로 잡는 방법을 권합니다.

---

## 7. 먹거리 & 추천 식당

### 7-1. 후쿠오카 대표 음식

| 음식                    | 설명                                                                             | 대표 가게 (예시)                                                             |
| ----------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **돈코츠 라멘**         | 돼지뼈 육수 + 가는 면. **면 익힘 단계(바리카타 등) 선택, '카에다마(면 추가)'** 가능 | 이치란 본점(나카스), 잇푸도 다이묘 본점, 신신(텐진), 잇코샤, 간소 나가하마야 |
| **모츠나베**            | 소곱창 전골, 마늘·부추를 넣음. 마무리는 짬뽕면                                   | 오야마, 라쿠텐치, 야마나카                                                   |
| **미즈타키**            | 닭 육수 전골. 첫 국물을 먼저 마시는 것이 일반적                                  | 하카타 하나미도리, 미즈타키 나가노, 토리덴                                   |
| **멘타이코(명란)**      | 후쿠오카가 원조. 명란 덮밥·명란 계란말이                                         | 간소 하카타 멘타이주(명란 덮밥, 대기 있음), 후쿠야                           |
| **한입 교자**           | 철판에 구운 작은 교자                                                            | 테츠나베, 하카타 교자                                                        |
| **야키토리 & 야타이**    | 하카타식 야키토리는 **삼겹살 꼬치(부타바라)** 가 대표 메뉴                       | 나카스·텐진 야타이                                                           |
| **하카타 우동**         | 부드러운 면, **고보텐(우엉튀김) 우동**                                           | 다이치노 우동, 마키노 우동                                                   |
| **스시·해산물**         | 겐카이나다 해산물                                                                | 효탄 스시(텐진), 나가하마 수산시장 근처 식당                                 |
| **아마오우 딸기 디저트** | 후쿠오카 브랜드 딸기                                                             | 백화점 디저트 매장 (제철은 겨울~봄)                                          |

### 7-2. 지역별 식사 장소

| 지역                  | 내용                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| **하카타역**          | 역 빌딩 지하·상층 식당가(아뮤플라자, 데이토스), **하카타 멘타이주, 라멘 골목(하카타 멘가이도)** |
| **캐널시티**          | 5층 **라멘 스타디움** (여러 지역 라멘 가게가 모여 있음)                                        |
| **나카스**            | 이치란 본점, **야타이 거리**, 모츠나베                                                         |
| **텐진·다이묘**       | 신신 라멘, 잇푸도 본점, 카페·디저트, 텐진 야타이                                               |
| **야쿠인·이마이즈미** | 카페, 이자카야                                                                                 |

### 7-3. 식당 이용 팁

- **인기 모츠나베·미즈타키 가게는 예약 권장** (구글지도·타베로그·핫페퍼 예약, 또는 호텔 컨시어지)
- 라멘집은 대부분 **식권 자판기** → 버튼 누르고 결제 → 식권 전달
- 이자카야는 **오토시(자릿세 성격의 기본 안주, 300~500엔)** 가 자동 청구될 수 있음
- 팁 문화 없음
- ⚠️ 야타이는 **현금만** 받는 곳이 많고, 가격 표시가 없는 곳도 있으니 주문 전 가격 확인
- 이치란 본점 등 유명점은 **오픈 직후 또는 오후 3~5시**에 대기가 짧은 편

---

## 8. 쇼핑 & 구매 추천 상품

### 8-1. 후쿠오카 기념품(먹거리)

| 상품                      | 설명                          | 주의                                                                           |
| ------------------------- | ----------------------------- | ------------------------------------------------------------------------------ |
| **하카타 토리몬**         | 후쿠오카 대표 만쥬, 우유 앙금 | 유통기한 짧은 편                                                               |
| **히요코 만쥬**           | 병아리 모양 만쥬              |                                                                                |
| **멘타이코(명란)**        | 후쿠야·야마야·카네후쿠 등     | 냉장 필요 → **보냉백+아이스팩**, 튜브형은 액체류 취급될 수 있어 **위탁수하물** |
| **멘타이 센베이·과자**    | 명란맛 센베이 (상온 보관)     | 생명란 대신 선물용으로 적합                                                    |
| **아마오우 딸기 과자**    | 딸기 킷캣, 딸기 쿠키 등       |                                                                                |
| **로이스·각종 한정 과자** | 하카타역·공항에서 구매 가능   |                                                                                |
| **다자이후 우메가에모치** | 구운 찹쌀떡                   | 당일~이틀 내 섭취                                                              |

### 8-2. 드럭스토어 구매 품목

| 분류   | 상품 예                                                                                       |
| ------ | --------------------------------------------------------------------------------------------- |
| 의약품 | 이브(EVE) 진통제, 오타이산(위장약), 카베진, 동전파스(로이히 츠보코), 사카무케아 (액상 반창고) |
| 화장품 | 비오레 UV 선크림, 룰루룬 마스크팩, 캔메이크·세잔느, 키스미 마스카라                           |
| 생활   | 휴족시간(다리 쿨링 시트), 메구리즘 수면 안대                                                  |

> 참고: **마츠모토키요시, 다이코쿠, 코쿠민, 선드럭** 등 가게마다 가격이 다릅니다. 할인 쿠폰은 각 체인 홈페이지나 블로그에서 미리 확인하세요.

### 8-3. 쇼핑 장소

| 장소                                             | 특징                                                      |
| ------------------------------------------------ | --------------------------------------------------------- |
| **돈키호테 (나카스점 등)**                       | 늦게까지 영업, 기념품·과자·화장품·잡화. 면세 카운터 있음 |
| **캐널시티 하카타**                              | 패션·잡화·디즈니·지브리 굿즈                              |
| **아뮤플라자 하카타 / 한큐백화점**               | 하카타역 직결, 브랜드·기념품                              |
| **텐진 지하상가 · 파르코 · 이와타야 · 다이마루** | 패션·백화점                                               |
| **포켓몬센터 (아뮤플라자 하카타)**               | 캐릭터 굿즈                                               |
| **이온몰 / 슈퍼마켓**                            | 현지 과자·조미료                                          |
| **미츠이 아울렛 파크 (마리노아·공항 근처 등)**   | 아울렛                                                    |

### 8-4. 면세(Tax-Free) — 이번 여행은 기존 방식

**이번 여행 (2026년 10월 31일까지 구매분) — 즉시 면세**

- "Tax-Free" 표시 매장에서 **같은 날 같은 가게에서 세전 5,000엔 이상** 구매 시
- **여권 원본 제시** → 계산 시 소비세(10%/식품 8%)를 빼고 결제
- 소모품(화장품·식품·의약품)은 **밀봉 봉투**에 담아줌 → ⚠️ **일본 출국 전 개봉 금지**

**참고: 2026년 11월 1일부터 바뀌는 제도 (환급형)**

- 매장에서는 **세금 포함 금액을 결제** → 출국 시 공항 세관에서 물건 확인 후 **세금을 환급**
- 밀봉 봉투 제도 폐지, 소모품/일반품 구분 폐지
- 출국 시 **해당 영수증의 물건을 모두 지참**해야 환급 가능
- 다음 일본 여행부터는 공항에 더 일찍 도착해야 합니다.

---

## 9. 추천 3박 4일 일정표

> 하카타·나카스 숙소 기준. 오전 출발 / 오후 귀국편 가정

### Day 1 — 도착 & 하카타·나카스

| 시간 | 일정                                                    |
| ---- | ------------------------------------------------------- |
| 오전 | 후쿠오카 공항 도착 → 버스로 하카타역 (숙소에 짐 맡기기) |
| 점심 | 하카타역 **멘타이주(명란 덮밥)** 또는 하카타역 라멘     |
| 오후 | 구시다 신사 → 캐널시티 하카타 (분수쇼, 쇼핑)            |
| 저녁 | **모츠나베** (예약)                                     |
| 밤   | **나카스 야타이** → 강변 산책 → 돈키호테                |

### Day 2 — 근교 (택 1)

| 옵션              | 일정                                                                  |
| ----------------- | --------------------------------------------------------------------- |
| **A. 버스투어**   | 다자이후 → 유후인 → 벳푸 (하루 투어, 하카타 집결)                     |
| **B. 자유여행**   | 오전 다자이후 덴만구 + 우메가에모치 → 오후 야나가와 뱃놀이 + 장어덮밥 |
| 저녁              | 하카타 복귀 → **미즈타키** 또는 숙소 근처 이자카야                    |

### Day 3 — 텐진·오호리·해변

| 시간   | 일정                                          |
| ------ | --------------------------------------------- |
| 오전   | 오호리 공원 산책 → 후쿠오카성 터              |
| 점심   | 텐진 **신신 라멘** 또는 효탄 스시             |
| 오후   | 다이묘·텐진 쇼핑 (텐진 지하상가, 신규 빌딩들) |
| 해질녘 | **후쿠오카 타워** + 모모치 해변               |
| 밤     | 텐진 야타이 또는 한입 교자                    |
| 대체안 | 오전에 **노코노시마(코스모스)**               |

### Day 4 — 귀국

| 시간            | 일정                                                   |
| --------------- | ------------------------------------------------------ |
| 오전            | 체크아웃 (짐 보관) → 하카타역 기념품 쇼핑, 점심        |
| 출발 2.5시간 전 | 하카타역에서 공항 국제선행 버스 탑승                   |
| 공항            | 체크인 → 출국 → 면세점·푸드코트                        |

---

## 10. 예산 가이드

> 1인 기준, 항공·숙박 제외 현지 경비 (대략)

| 항목                                   | 절약형       | 보통         | 여유          |
| -------------------------------------- | ------------ | ------------ | ------------- |
| 식비 (1일)                             | 4,000엔      | 7,000엔      | 12,000엔+     |
| 교통비 (1일)                           | 800엔        | 1,500엔      | 3,000엔       |
| 입장료·체험 (총)                       | 3,000엔      | 8,000엔      | 15,000엔      |
| 근교 투어 (1회)                        | 5,000엔      | 8,000엔      | 15,000엔      |
| **3박 4일 현지 경비 합계** (쇼핑 제외) | **약 3만엔** | **약 5만엔** | **약 9만엔+** |

**물가 예시**

- 라멘 한 그릇: 900~1,300엔
- 모츠나베 1인: 2,000~3,500엔
- 야타이 1~2곳: 1,500~4,000엔
- 편의점 커피: 150~250엔
- 지하철 1구간: 210엔~

---

## 11. 현지 매너 & 비상시 대처

### 11-1. 기본 매너

- **에스컬레이터**: 후쿠오카는 왼쪽에 서는 편 (오사카와 반대)
- 지하철·버스 안 **통화 자제**, 대화는 작게
- **길거리 흡연 금지** 구역이 많음 → 지정 흡연소 이용 (위반 시 과태료)
- 길에 쓰레기통이 거의 없음 → 편의점 쓰레기통을 이용하거나 숙소로 가져가기
- 신발을 벗는 식당·료칸이 있음
- 라멘을 소리 내어 먹는 것은 실례가 아님. 음식을 많이 남기는 것은 지양

### 11-2. 야타이(포장마차) 에티켓

- 자리가 8~10석으로 좁음 → **짐은 최소화** (큰 캐리어 지참 X)
- **1인 1음료 이상 주문**이 기본, 주문 없이 오래 앉아 있지 않기
- 한 곳에 오래 있기보다 **여러 곳에서 1~2접시씩** 먹는 방식이 일반적
- 비·강풍이 있는 날은 휴무할 수 있음

### 11-3. 비상 연락처

| 상황                                     | 연락처                                                                                    |
| ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| 경찰                                     | **110**                                                                                   |
| 화재·구급차                              | **119**                                                                                   |
| 주후쿠오카 대한민국 총영사관             | +81-92-771-0461 (후쿠오카시 주오구 지교하마) — 방문 전 영사관 홈페이지에서 최신 번호 확인 |
| 외교부 영사콜센터 (24시간)               | **+82-2-3210-0404**                                                                       |
| JNTO 관광객 핫라인 (24시간, 한국어 가능) | 050-3816-2787                                                                             |

### 11-4. 여권 분실 시

1. 가까운 **경찰서(코반, 交番)** 에서 분실신고 → **분실신고 접수증** 받기
2. **주후쿠오카 총영사관** 방문 → **여행증명서** 또는 긴급여권 발급
3. 필요 서류: 분실신고 접수증, 신분증(주민등록증 등), 여권용 사진, 항공권

> 참고: 출국 전 **여권 사본(사진)** 을 휴대폰과 클라우드에 저장해 두세요.

---

## 12. 공항 복귀 방법

### 12-1. 출발 시간 계산

- **국제선 출발 2시간 30분 전 공항 도착** 권장
- 하카타역 → 국제선 터미널 버스 약 20~25분 + 대기 시간
- **비행기 출발 3시간~3시간 30분 전에 숙소 출발** 기준으로 계획

### 12-2. 교통수단

| 수단              | 출발지                                   | 방법                                                                    | 비고                                              |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| **니시테츠 버스** | 하카타역 버스터미널 / 하카타역 앞 정류장 | "国際線(국제선)" 행 탑승 → 국제선 터미널 직행                           | 짐이 많을 때 편리. 출퇴근 시간 정체 주의          |
| 니시테츠 버스     | 텐진 고속버스터미널                      | 국제선 직행 (약 30~40분, 약 500엔)                                      | 텐진 숙소                                         |
| 지하철 + 셔틀     | 지하철역                                 | 공항선 "후쿠오카쿠코"역 하차 → **국내선 터미널에서 국제선행 무료 셔틀** | ⚠️ 셔틀 환승 시간 포함 **20~30분 추가 여유** 필요 |
| 택시              | 숙소                                     | GO 앱 호출                                                              | 3~4인이면 버스와 비용 차이가 적음                 |

> ⚠️ **지하철 "후쿠오카쿠코역"은 국내선 터미널입니다.** 국제선을 이용한다면 셔틀로 갈아타야 합니다.

### 12-3. 체크아웃 날 짐 관리

- 체크아웃 후 **호텔 프런트에 짐 보관** (대부분 무료) → 쇼핑 후 찾아서 공항으로
- 하카타역 **코인락커**: 대형 사이즈는 빨리 차므로 오전에 확보, 교통카드 결제 가능한 락커가 많음
- 짐 보관 서비스 앱(ecbo cloak 등)도 이용 가능

---

## 13. 출국 & 한국 귀국 시 팁

### 13-1. 후쿠오카 공항 출국 절차

1. **항공사 체크인 카운터** (출발 3시간 전부터 여는 경우가 많음 / 온라인 체크인 시 수하물만 맡기면 됨)
2. **보안검색**
   - 액체류 100ml 초과 용기는 기내 반입 불가 → **명란 튜브, 소스, 술은 위탁수하물**
   - 보조배터리·전자담배·라이터는 **기내만** (위탁 불가)
3. **출국심사** — 얼굴인식 자동 게이트, 여권 스캔
   - 면세 구매기록은 여권과 전자 연동되어 있어 이번(10월) 여행에서는 별도 절차가 거의 없음
4. **면세구역** — 2025년 이후 확장. 유니클로·세븐일레븐 등 일반 매장도 있어 기념품·술·담배·화장품 구매 가능
5. **탑승구 이동** (탑승 마감은 보통 출발 20분 전)

> 참고: 출국세 **3,000엔(2026년 7월 인상)** 과 공항시설이용료는 **항공권 요금에 포함**되어 있어 공항에서 따로 내지 않습니다.
> 참고: 남은 동전은 공항 편의점·자판기에서 쓰거나 다음 여행용으로 보관하세요.

### 13-2. 한국 입국 시 면세 한도 & 세관

| 항목      | 면세 한도 (1인)                      |
| --------- | ------------------------------------ |
| 일반 물품 | **미화 800달러**                     |
| 술        | **2병, 합계 2L 이하 & 400달러 이하** |
| 담배      | 궐련 **200개비(1보루)**              |
| 향수      | **100ml 이하**                       |

- 한도 초과 시 **자진신고하면 관세 30% 감면** (최대 20만 원). 미신고 적발 시 가산세 부과
- **'여행자 휴대품 신고' 앱/모바일 신고**를 이용하면 종이 신고서 없이 처리 가능 (신고 대상자만)
- ⚠️ **반입 금지 품목**: **육류·육가공품 (소시지, 육포, 햄, 고기가 든 만두·라멘 건더기 등)** 은 원칙적으로 반입 금지 → 적발 시 과태료. 과일·생식물도 금지
- 명란 등 **수산 가공품**은 개인 소비용 소량이면 일반적으로 반입 가능. 냉장 상태 유지 필요 (보냉백 + 아이스팩)
- 의약품은 **개인 사용 목적 소량(종류별 6병 이내 수준)** 만

### 13-3. 귀국 후

- 해외 카드 결제 내역 확인 (DCC 수수료가 붙었는지)
- 남은 엔화 → 트래블 카드 재충전/재환전 또는 다음 여행용 보관
- 로밍/eSIM 해제 확인

---

## 14. 최종 체크리스트

### 출발 전

- [ ] 여권 (유효기간 확인) + 여권 사본 사진
- [ ] 항공권 e-티켓, 숙소 예약 확인서 캡처
- [ ] Visit Japan Web QR 2개 캡처
- [ ] 트래블 카드 충전 + 엔화 현금 3~4만 엔
- [ ] eSIM/유심 설치·준비
- [ ] 돼지코 어댑터, 충전기, 보조배터리 (기내용)
- [ ] 여행자 보험
- [ ] 아이폰 Suica 발급 (또는 현지에서 nimoca 구매)
- [ ] 근교 투어/유후인 버스 예약
- [ ] 얇은 겉옷, 편한 신발, 접이식 우산
- [ ] Google 지도에 갈 곳 저장

### 현지에서

- [ ] 결제 시 **엔화(JPY)** 선택
- [ ] 면세 구매 시 여권 지참, 밀봉 봉투 개봉 금지
- [ ] 야타이용 현금 준비

### 귀국 날

- [ ] 출발 3시간 이상 전 숙소 출발
- [ ] **국제선 터미널**로 가는지 확인 (지하철 이용 시 셔틀 환승)
- [ ] 액체류(명란 튜브·술) → 위탁수하물
- [ ] 보조배터리 → 기내 반입
- [ ] 면세 한도(800달러) 초과 시 자진신고
- [ ] 육가공품 반입 금지 확인

---

## 참고 출처

- 후쿠오카 공항 국제선 리뉴얼·시설: [Fukuoka Now – Terminal Expansion](https://www.fukuoka-now.com/en/news/fukuoka-airport-terminal-expansion-nears-completion/), [TTG Asia](https://www.ttgasia.com/2025/04/09/fukuoka-airport-starts-work-on-new-commercial-complex-as-expansion-continues/)
- 공항 ↔ 시내 교통: [GLTJP – Fukuoka Airport to Hakata](https://www.gltjp.com/en/article/item/21073/), [Fukuoka Now – Nishitetsu 버스 요금](https://www.fukuoka-now.com/en/?p=176437), [Cities Insider – Fukuoka Transport](https://citiesinsider.com/country/japan/fukuoka/transportation-ticketing/en)
- 면세 제도 변경(2026.11): [japan-guide.com](https://www.japan-guide.com/news/tax-free-shopping.html), [GLTJP – Tax-Free Reform](https://www.gltjp.com/en/article/item/21542/)
- 출국세 3,000엔 인상(2026.7): [Travel Voice](https://www.travelvoice.jp/english/the-japanese-ruling-parties-specify-a-rise-in-departure-tax-to-3-000-yen-in-the-tax-reform-outline-for-fy2026), [Adnkronos](https://english.adnkronos.com/2026/06/29/japan-departure-tax-to-rise-to-3000-yen-on-wed/)
- 야타이 매너: [Go Fukuoka (후쿠오카시 공식 관광)](https://gofukuoka.jp/articles/detail/d54ca24e-9574-45b1-9f82-c8fe1090d398), [Crossroad Fukuoka](https://www.crossroadfukuoka.jp/en/articles/yatai)
- 신규 시설(텐진 빅뱅): [FUN! JAPAN – 2025-2026 신규 시설](https://www.fun-japan.jp/en/articles/13617), [Fukuoka Now – ONE FUKUOKA BLDG.](https://www.fukuoka-now.com/en/news/one-building-opens/)
- 근교 이동: [japan-guide.com – Dazaifu](https://www.japan-guide.com/e/e4854.html)
- Visit Japan Web 공식: \`https://vjw.digital.go.jp\`

> ⚠️ 요금·운영시간은 수시로 바뀝니다. **버스 요금, 패스 가격, 꽃 개화 시기, 가게 휴무일**은 출발 직전 공식 사이트·구글지도에서 확인하세요.

`,zy=`---
title: Zebra 프린터 없이 prn파일 생성 가이드
date: 2026-10-14
---
# Zebra 프린터 없이 prn(ZPL) 파일 생성하기

실제 Zebra 프린터가 없어도, Zebra 드라이버를 설치하고 포트를 파일 경로로 지정하면 프린터로 전송될 데이터(ZPL)를 파일로 받을 수 있다.
이 파일을 분석하면 프린터가 실제로 받는 도트 단위 이미지를 확인할 수 있다.

- 확인 환경: Windows 11, ZDesigner 드라이버 10.6.26.28275, 모델 ZT411-203dpi
- 용도 예시: 출력 방식별(EXE 뷰어, PDF, 브라우저) 바코드 출력 품질 비교

---

## 1. 드라이버 다운로드

1. Zebra 홈페이지(zebra.com)의 지원 및 다운로드 페이지에서 해당 프린터 모델(예: ZT411)을 검색한다.
2. "Drivers" 항목에서 Windows용 ZDesigner 드라이버를 다운로드한다.
   - 파일 예: \`zddriver-v1062628275-certified.zip\`
3. 압축을 해제한다. 안에 설치 파일(\`zddriver-v1062628275-certified.exe\`)이 하나 들어 있다.

---

## 2. 출력 폴더 생성

prn 파일이 저장될 폴더를 먼저 만든다. 폴더가 없으면 인쇄해도 파일이 생성되지 않는다.

\`\`\`
C:\\zebra_test
\`\`\`

---

## 3. 드라이버 설치

1. \`zddriver-...-certified.exe\`를 관리자 권한으로 실행한다.
2. 드라이버 설치를 진행하고, 프린터 설치 마법사가 나오면 아래와 같이 선택한다.

| 단계 | 선택 |
|---|---|
| 포트 선택 화면 | **기타(O)** (직렬/병렬 포트) |
| 로컬 포트 선택 화면 | **LPT1:** 선택 후 다음 |
| 프린터 모델 | 테스트할 모델 (예: **ZDesigner ZT411-203dpi ZPL**) |
| 프린터 옵션 화면 | 이름은 기본값 유지, "Windows 기본 프린터로 설정" 체크 해제 |

3. "설치"를 눌러 완료한다.

참고
- 포트 선택 화면에서 "포트 추가"를 누르면 TCP/IP 포트 설정 창이 열린다. 이 창은 사용하지 않으므로 Cancel을 누른다.
- 마법사에서는 파일 경로 포트를 만들 수 없다. LPT1로 설치한 뒤 4단계에서 변경한다.

---

## 4. 포트를 파일 경로로 변경

1. 설정 > 블루투스 및 장치 > 프린터 및 스캐너 에서 설치한 프린터를 선택한다.
2. **프린터 속성**을 연다. ("인쇄 기본 설정"이 아님)
3. **포트** 탭에서 **포트 추가**를 누른다.
4. "사용 가능한 포트 종류" 목록에서 **Local Port**를 선택하고 **새 포트**를 누른다.
   - "ZDesigner Port Monitor"가 기본 선택되어 있을 수 있으니 Local Port로 바꿔서 선택한다.
5. 포트 이름에 아래 경로를 입력하고 확인을 누른다.

\`\`\`
C:\\zebra_test\\zt411.prn
\`\`\`

6. 프린터 포트 창을 닫는다.
7. 포트 목록에서 \`C:\\zebra_test\\zt411.prn\` 앞의 체크박스를 **체크**한다. (LPT1 체크는 자동 해제)
8. **양방향 지원** 체크를 **해제**한다. 파일 포트에서는 프린터 상태를 읽을 수 없어 인쇄가 지연될 수 있다.
9. 적용 > 확인.

### 설정 확인 (선택)

PowerShell에서 아래 명령으로 포트가 바뀌었는지 확인한다.

\`\`\`powershell
Get-Printer -Name "ZDesigner ZT411-203dpi ZPL" | Select Name,PortName
\`\`\`

\`PortName\`이 \`C:\\zebra_test\\zt411.prn\`이면 정상이다. LPT1:로 나오면 7번 체크가 적용되지 않은 것이다.

참고: \`zt411.prn\` 파일은 인쇄를 한 번 해야 생성된다. 설정 직후 파일이 없는 것은 정상이다.

---

## 5. 용지 및 그래픽 설정

프린터 > **인쇄 기본 설정**에서 설정한다.

### 5-1. 페이지 설정 (용지)

기본값은 4 x 2인치(104 x 51mm)라 라벨이 잘린다. 테스트할 라벨에 맞게 변경한다.

| 항목 | 예시 값 |
|---|---|
| 너비 | 104 mm (ZT411 최대 인쇄 폭) |
| 높이 | 150 mm |
| 회전 | 0° - 세로 |

- 너비는 프린터의 최대 인쇄 폭을 넘길 수 없다. (ZT411 4인치 모델: 약 104mm)

### 5-2. 그래픽 옵션 (디더링)

| 슬라이더 위치 | 의미 |
|---|---|
| 왼쪽 끝 "사진" (기본값) | 회색을 점무늬로 표현 (디더링 최대) |
| 오른쪽 끝 "클립아트" | 회색을 검정/흰색으로 변환 (디더링 없음) |

- 고객 환경을 재현할 때는 고객과 같은 설정으로 둔다.
- 바코드 출력에는 "클립아트"가 유리하다. ("사진"이면 바코드 경계가 점무늬로 깨질 수 있음)
- "이미지 전송 모드", "그래픽 유형"은 기본값을 유지한다.

---

## 6. 인쇄하여 prn 파일 생성

1. 테스트할 프로그램(EXE 뷰어, 브라우저, Acrobat 등)에서 프린터를 **ZDesigner ZT411-203dpi ZPL**로 선택하여 인쇄한다.
   - 브라우저/Acrobat은 배율 100%(실제 크기), 여백 없음으로 설정한다.
2. \`C:\\zebra_test\\zt411.prn\` 파일이 생성된다.
3. **다음 인쇄 전에 파일 이름을 변경한다.** 같은 파일에 덮어쓰기 때문이다.
   - 예: \`exeViewer_print.prn\`, \`html5viewer_pdf_print.prn\`, \`html5viewer_pdf_print_디더링끄기.prn\`

### Acrobat 명령줄로 PDF 인쇄 (선택)

PDF는 Acrobat 명령줄로 화면 조작 없이 인쇄할 수 있다.

\`\`\`powershell
$acro = "C:\\Program Files\\Adobe\\Acrobat DC\\Acrobat\\Acrobat.exe"
$pdf  = "D:\\test\\sample.pdf"
$pr   = "ZDesigner ZT411-203dpi ZPL"
Start-Process -FilePath $acro -ArgumentList "/n","/s","/h","/t","\`"$pdf\`"","\`"$pr\`""
\`\`\`

---

## 7. prn 파일 내용 확인

prn 파일은 텍스트 파일이므로 메모장 등으로 열 수 있다. 주요 명령은 아래와 같다.

| 명령 | 의미 |
|---|---|
| \`^PW831\` | 인쇄 폭 831도트 (203dpi 기준 약 104mm) |
| \`^LL1199\` | 라벨 길이 1199도트 (약 150mm) |
| \`^FO64,195\` | 이후 데이터의 시작 위치 (x, y 도트) |
| \`^GFA,...,:Z64:...\` | 그래픽(비트맵) 데이터. Z64 = Base64 + zlib 압축 |
| \`^GB\` | 사각형/선 명령 |
| \`^BC\` | 프린터 내장 Code128 바코드 명령 |

판단 기준
- 바코드가 \`^GFA\` 안에 들어 있으면: 드라이버가 비트맵으로 변환하여 전송한 것이다.
- \`^BC\` 명령이 있으면: 프린터가 바코드를 직접 생성한다(가장 정확).
- ZDesigner 드라이버로 일반 프로그램에서 인쇄하면 보통 라벨 전체가 \`^GFA\` 하나로 전송된다.

---

## 8. 비트맵 복원 및 분석 (선택)

\`^GFA\` 데이터를 이미지로 복원하면 프린터가 찍을 도트를 그대로 볼 수 있다. (1픽셀 = 1도트)

복원 절차
1. \`^GFA,a,b,c,:Z64:데이터:CRC\` 형식에서 a = 전체 바이트 수, c = 한 줄 바이트 수.
2. \`:Z64:\`와 다음 \`:\` 사이의 문자열을 Base64 디코딩한다.
3. zlib(Inflate)으로 압축을 해제한다. 결과는 b 바이트의 1비트 흑백 데이터다.
4. c 바이트씩 한 줄로 나누고, 각 비트가 1이면 검정 도트로 그린다. 너비 = c x 8 도트, 높이 = b / c 줄.
5. \`^FO\` 좌표만큼 이동시켜 배치한다.

분석 예시 (바코드)
- 복원 이미지에서 바코드를 가로지르는 줄을 따라 막대/공백 폭(도트 수)을 측정한다.
- 1모듈 폭이 일정한지(예: 3도트로 균일한지), 막대 경계에 점무늬가 있는지 확인한다.
- 스캐너 방식(edge-to-edge)으로 디코딩하여 읽히는지 확인할 수 있다.

주의
- 고객 데이터가 포함된 prn 파일을 외부 웹 서비스(ZPL 온라인 뷰어 등)에 올리지 않는다. 로컬 도구로 복원한다.

---

## 9. 테스트 후 정리

테스트가 끝나면 필요에 따라 아래를 정리한다.

1. 설정 > 프린터 및 스캐너 에서 ZDesigner 프린터 제거
2. \`C:\\zebra_test\` 폴더 삭제
3. 드라이버 제거가 필요하면 Zebra 설치 프로그램의 제거 기능 또는 "인쇄 관리"에서 드라이버 삭제

---

## 참고: 실제 확인 사례 (2026-10-14)

ZT411 203dpi, Code128 바코드 라벨을 출력 방식별로 prn 파일로 받아 비교한 결과.

| 출력 방식 | 디더링 | 디코딩 성공 스캔 라인 | 막대 경계 |
|---|---|---|---|
| EXE 뷰어 직접 인쇄 | 사진 | 40 / 43 | 깨끗함 |
| HTML5 PDF 변환 인쇄 | 사진 | 6 / 17 | 점무늬로 깨짐 |
| HTML5 PDF 변환 인쇄 | 클립아트 | 41 / 47 | 깨끗함 |

- 모든 출력 방식이 \`^GFA\` 비트맵으로 전송되었다.
- PDF 경로는 고해상도 바코드 이미지를 203dpi로 축소하면서 경계가 회색이 되고, 디더링 "사진" 설정이 이를 점무늬로 찍어 품질이 떨어졌다.
- 디더링을 "클립아트"로 바꾸자 EXE 뷰어 직접 인쇄와 같은 수준이 되었다.

`,Hy=`---
title: 아테네 3일 관광 가이드
date: 2026-10-22
---
# ️ 아테네 3일 역사 탐방 완전 가이드
### 역사 좋아하는 남자 셋이 "그대로 따라만 하면 되는" 시간표

> **이 문서 사용법**
> - 각 Day는 **시각 → 이동 수단·소요 시간 → 볼 것·체류 시간 → 먹을 것** 순서로 적혀 있습니다. 위에서부터 그대로 따라가면 됩니다.
> - ⏰ = 시간표, 🚇 = 이동, 👀 = 관람 포인트, 🍽️ = 식사, 💶 = 비용, ⚠️ = 주의사항
> - 가격·운영시간은 **2025년 기준**입니다. 그리스 유적은 계절(하절기 4~10월 / 동절기 11~3월)과 폭염·파업에 따라 시간이 자주 바뀌므로, **출발 1주 전과 전날 밤에 공식 사이트를 꼭 다시 확인**하세요.
>   - 국가 유적 공식 티켓: **hhticket.gr** (Hellenic Heritage)
>   - 아크로폴리스 박물관: **theacropolismuseum.gr**
>   - 국립고고학박물관: **namuseum.gr**

---

## 📋 목차
0. [한눈에 보는 3일 일정](#0-한눈에-보는-3일-일정)
1. [출발 전 준비 (필수)](#1-출발-전-준비-필수)
2. [5분 만에 훑는 아테네 역사](#2-5분-만에-훑는-아테네-역사)
3. [도착일: 공항 → 숙소](#3-도착일-공항--숙소)
4. [DAY 1 — 아크로폴리스 & 파르테논 신전 & 아크로폴리스 박물관](#4-day-1--아크로폴리스--파르테논-신전--아크로폴리스-박물관)
5. [DAY 2 — 고대 아고라 & 로마 시대 아테네 & 국립고고학박물관](#5-day-2--고대-아고라--로마-시대-아테네--국립고고학박물관)
6. [DAY 3 — 올림피아 제우스 신전 & 판아테나이코 경기장 & 수니온 곶 일몰](#6-day-3--올림피아-제우스-신전--판아테나이코-경기장--수니온-곶-일몰)
7. [교통 총정리](#7-교통-총정리)
8. [먹거리 총정리 & 주문 팁](#8-먹거리-총정리--주문-팁)
9. [예산표 (1인 기준)](#9-예산표-1인-기준)
10. [안전·매너·비상 연락처](#10-안전매너비상-연락처)
11. [플랜 B (비·폭염·파업·휴관일)](#11-플랜-b-비폭염파업휴관일)
12. [최종 체크리스트](#12-최종-체크리스트)

---

## 0. 한눈에 보는 3일 일정

| | 오전 | 점심 | 오후 | 저녁 |
|---|---|---|---|---|
| **DAY 1** | 🏛️ **아크로폴리스·파르테논** (08:00~11:00) → 아레오파고스 언덕 | 플라카 그릭 타베르나 | 🏛️ **아크로폴리스 박물관** (13:30~17:00) | 필로파포스 언덕 일몰 → 아크로폴리스 뷰 디너 |
| **DAY 2** | 고대 아고라·헤파이스토스 신전 → 로마 아고라·바람의 탑 → 하드리아누스 도서관 | 모나스티라키 케밥 | 🏛️ **국립고고학박물관** (14:00~18:00) | 프시리 지구 메제 & 와인 |
| **DAY 3** | 올림피아 제우스 신전 → 판아테나이코 경기장 → 신타그마 근위병 교대식 | 중앙시장 노포 | 🚌 **수니온 곶 포세이돈 신전** (해안버스) | 일몰 → 아테네 복귀 → 마지막 수블라키 |

**숙소 추천 지역** (모두 도보로 유적 접근 가능)
1. **마크리야니/쿠카키 (Makrygianni / Koukaki)** — 메트로 *Akropoli*역. 아크로폴리스 남쪽 입구와 박물관까지 도보 3~5분. **1순위 추천.**
2. **플라카 (Plaka)** — 구시가지 한복판. 분위기 최고, 다소 비쌈.
3. **모나스티라키/프시리 (Monastiraki / Psyrri)** — 교통 허브, 밤 늦게까지 활기. 소매치기 주의.

> 3인이면 **3베드 아파트(에어비앤비/부킹닷컴)** 가 호텔 트리플룸보다 쌉니다. 1박 1실 €150~250 수준(성수기 기준).

---

## 1. 출발 전 준비 (필수)

### 1-1. 티켓 예매 — ⚠️ 가장 중요
아크로폴리스는 **시간 지정 입장제(Timed Entry)** 입니다. 현장 구매도 가능하지만 성수기엔 원하는 시간대가 매진됩니다. **최소 2~3주 전 온라인 예매**하세요.

| 장소 | 예매처 | 가격(성인, 2025) | 예매 팁 |
|---|---|---|---|
| **아크로폴리스** (파르테논 포함) | hhticket.gr | **€30** | **DAY 1 08:00 슬롯** 선택. 남쪽 사면 포함 |
| **아크로폴리스 박물관** | theacropolismuseum.gr | €20 (동절기 할인 있을 수 있음) | DAY 1 13:30 전후. 시간 지정 |
| **국립고고학박물관** | hhticket.gr 또는 현장 | €12~20 (계절별 상이) | 현장 구매로도 충분 |
| **고대 아고라** | hhticket.gr / 현장 | €20 전후 | 현장 OK |
| **로마 아고라 / 하드리아누스 도서관 / 올림피아 제우스 신전 / 케라메이코스** | hhticket.gr / 현장 | 각 €8~20 | 현장 OK |
| **판아테나이코 경기장** | 현장 (panathenaicstadium.gr) | €12 전후 (오디오가이드 포함) | 현장 OK |
| **수니온 포세이돈 신전** | 현장 / hhticket.gr | €20 전후 | 현장 OK |

> 💡 **통합권(Combined Ticket)**: 아크로폴리스 + 고대 아고라 + 로마 아고라 + 하드리아누스 도서관 + 올림피아 제우스 신전 + 케라메이코스 + 아리스토텔레스 리케이온을 묶은 5일 유효 통합권이 있습니다(2025년 기준 약 €100 이하). 이 가이드는 위 유적을 **거의 다 방문**하므로, 예매 시점에 **개별 합계와 통합권 가격을 비교**해 싼 쪽을 사세요. 통합권을 사도 **아크로폴리스는 별도로 시간 슬롯 지정**이 필요합니다.
>
> ⚠️ 학생·청소년 무료/할인은 **EU 국적자 대상**인 경우가 대부분이라 한국인 성인은 정가라고 생각하면 됩니다.
>
> 📅 **무료입장일**: 3월 6일, 4월 18일, 5월 18일, 9월 마지막 주말, 10월 28일, 그리고 11월 1일~3월 31일 사이 매월 첫째 일요일 등(매년 변동). 무료일은 엄청 붐비니 오히려 피하는 것도 방법.

### 1-2. 앱 설치
| 앱 | 용도 |
|---|---|
| **Google Maps** | 도보·메트로 경로. 오프라인 지도 "Athens" 미리 다운로드 |
| **FREENOW** 또는 **Uber** | 택시 호출 (아테네 Uber는 실제로 공식 택시가 옴) |
| **OASA Telematics** | 시내버스 실시간 도착 |
| **Athens Transport (Athena Ticket)** | 교통 카드 충전·잔액 확인 |
| **Papago / Google 번역** | 그리스어 메뉴판 사진 번역 |

### 1-3. 짐 & 복장
- **밑창 접지력 좋은 운동화 (필수!)**: 아크로폴리스의 대리석 바닥은 수천 년간 닳아서 **유리처럼 미끄럽습니다.** 샌들·구두 금지.
- 모자, 선글라스, 선크림(SPF50): 아크로폴리스에는 **그늘이 거의 없습니다.**
- 1인 1리터 물병: 유적 안에 식수대 있음(리필 가능), 매점은 비쌈.
- 얇은 바람막이: 10월~4월 저녁과 수니온 곶은 바람이 셉니다.
- 보조배터리: 사진·지도로 배터리 빨리 닳음.
- **유로 현금 €50~100/인**: 작은 식당·키오스크·버스는 현금이 편함 (카드는 대부분 됨).
- 유럽형 플러그(C/F 타입) — 한국 220V 플러그 **그대로 사용 가능**. 별도 어댑터 필요 없음.

### 1-4. 기본 정보
- **시차**: 한국보다 **6시간 늦음**(서머타임 3월 말~10월 말), 그 외 7시간.
- **통화**: 유로(€). 카드 결제 보편화.
- **팁**: 의무 아님. 식당에서 만족하면 5~10% 또는 잔돈 올림.
- **화장실**: 유적지 입구 근처에 있음. 카페 이용 시 해결하는 게 편함.
- **유적 내 금지사항**: 삼각대·셀카봉 일부 제한, 대리석에 앉거나 만지기 금지, 음식 반입 제한(물은 OK). 드론 절대 금지.

---

## 2. 5분 만에 훑는 아테네 역사
> 현장에서 "아는 만큼 보입니다." 비행기에서 한 번 읽어두세요.

| 시기 | 연도 | 핵심 사건 | 이 여행에서 볼 곳 |
|---|---|---|---|
| **미케네 시대** | BC 1600~1100 | 트로이 전쟁의 시대. 아크로폴리스는 왕의 요새 | 국립고고학박물관 **아가멤논의 황금 가면** |
| **암흑기~아르카익** | BC 1100~480 | 폴리스 형성. 솔론의 개혁(BC 594), 클레이스테네스의 민주정(BC 508) | 아크로폴리스 박물관 **아르카익 갤러리(코레·모스코포로스)** |
| **페르시아 전쟁** | BC 490~479 | 마라톤 전투(490), 테르모필레·살라미스(480), 페르시아가 아크로폴리스를 **불태움** | 박물관의 불탄 조각들, 파르테논 북벽에 박힌 옛 기둥 조각 |
| **페리클레스 황금기** | BC 461~429 | 델로스 동맹 자금으로 **파르테논 건설(BC 447~432)**. 조각 총감독 **페이디아스** | **파르테논, 에레크테이온, 니케 신전, 프로필라이아** |
| **펠로폰네소스 전쟁** | BC 431~404 | 아테네 vs 스파르타. 아테네 패배 | — |
| **철학의 시대** | BC 5~4세기 | 소크라테스(아고라에서 토론, BC 399 사형), 플라톤, 아리스토텔레스 | **고대 아고라**, 소크라테스 감옥 추정지 |
| **헬레니즘~로마** | BC 146~AD 330 | 로마 지배. 하드리아누스 황제의 대대적 건설 | **로마 아고라, 바람의 탑, 하드리아누스 도서관·개선문, 올림피아 제우스 신전** |
| **비잔틴** | 330~1456 | 파르테논이 **교회**로 사용 | 아고라의 성 사도 교회 |
| **오스만** | 1456~1833 | 파르테논이 **모스크**로 사용. **1687년 베네치아군 포격으로 화약고 폭발 → 지금의 폐허 모습** | 파르테논 중앙부 붕괴 흔적 |
| **엘긴 마블** | 1801~1812 | 영국 엘긴 경이 파르테논 조각 상당수를 떼어감 → 현재 대영박물관 | 박물관 3층의 **석고 복제본(흰색)과 원본(누런색)의 대비** |
| **근대 그리스** | 1830~ | 독립. 1896년 **제1회 근대 올림픽** | **판아테나이코 경기장**, 신타그마 의회·무명용사비 |

---

## 3. 도착일: 공항 → 숙소

**아테네 국제공항(ATH, 엘레프테리오스 베니젤로스)** → 시내까지 약 33km.

| 수단 | 시간 | 가격 | 추천 상황 |
|---|---|---|---|
| 🚕 **택시 (정액제)** | 35~50분 | 주간(05~24시) **€40**, 야간(00~05시) **€55** (2025 기준, 차 한 대 요금) | ⭐ **3인이면 1인당 €13~18로 메트로와 큰 차이 없음 + 숙소 문 앞. 최우선 추천** |
| 🚇 메트로 3호선 (파란선) | 약 40분 | 1인 **€9** (2025 기준) | 낮 도착, 숙소가 신타그마·모나스티라키 근처일 때 |
| 🚌 X95 버스 (→신타그마) | 60~90분 | 1인 €5.50 | 24시간 운행, 심야 대안 |

**택시 이용법**
1. 입국장(Arrivals) 3번 출구 쪽 **공식 택시 승강장**(노란 택시) 줄 서기.
2. 탑승 전 "**Fixed price to [숙소 주소], 40 euros?**" 확인. 주소는 **휴대폰에 영문+그리스어로** 보여주기.
3. 짐 추가요금 없음(정액제에 포함). 영수증 요청: "**Receipt, please.**"
4. 호객하는 비공식 기사 무시.

> 💡 도착일 저녁 여유가 있으면: 숙소 근처 **디오니시우 아레오파기투 거리(Dionysiou Areopagitou)** 를 산책하며 **조명이 켜진 아크로폴리스**를 올려다보세요. 내일의 예고편입니다. 저녁은 가볍게 수블라키(§8 참조).

---

## 4. DAY 1 — 아크로폴리스 & 파르테논 신전 & 아크로폴리스 박물관
**테마: 고대 아테네의 심장. 이 여행의 하이라이트.**
**총 도보: 약 8~10km / 계단·오르막 많음**

### ⏰ 07:00 — 기상 & 아침 (40분)
🍽️ 숙소 근처 빵집(Fournos, Φούρνος)에서 그리스식 아침:
- **쿨루리(Koulouri)** — 깨 묻힌 링 빵, €0.6~1
- **스파나코피타(Spanakopita)** — 시금치·페타치즈 파이, €2.5~3.5
- **티로피타(Tiropita)** — 치즈 파이
- **프레도 에스프레소(Freddo Espresso)** — 그리스 국민 아이스커피, €2~3.5

⚠️ 아크로폴리스 안에서는 매점이 거의 없으니 **물 1L씩 채우고** 출발.

### ⏰ 07:40 — 아크로폴리스 남쪽 입구로 이동 (🚶 도보 5~15분)
- 🚇 숙소가 멀면: 메트로 2호선(빨간선) **Akropoli(Ακρόπολη)역** 하차 → 출구 나와 디오니시우 아레오파기투 보행자 거리로 직진 → 도보 3분.
- **남쪽 입구(South Slope / Dionysiou Areopagitou 입구)** 를 이용하세요. 서쪽 정문보다 덜 붐비고, 디오니소스 극장부터 순서대로 올라가는 "역사적 동선"이 됩니다.
- 07:50 도착 → 줄 서기 → 가방 보안검사 → **08:00 입장**.

> 💡 **왜 08:00인가?** ① 크루즈선 단체 관광객이 09:30~11:00에 몰려옴 ② 여름엔 11시부터 그늘 없는 언덕이 35도 이상 ③ 아침 사광(斜光)에 대리석이 황금빛으로 빛나 사진이 가장 잘 나옴.

### ⏰ 08:00~11:00 — 🏛️ 아크로폴리스 관람 (3시간)
아래 **번호 순서대로** 걸으면 됩니다. (남쪽 입구 → 남쪽 사면 → 정상 → 서쪽 출구)

#### ① 디오니소스 극장 (Theatre of Dionysus) — 20분
- **세계 최초의 극장** 중 하나. BC 6세기 기원, 현재 모습은 BC 4세기(리쿠르고스) 석조 극장.
- 👀 **소포클레스, 아이스킬로스, 에우리피데스의 비극**과 **아리스토파네스의 희극**이 바로 여기서 초연됨. 약 1만 7천 명 수용.
- 👀 맨 앞줄의 **등받이 있는 대리석 의자들** = 사제·귀빈석. 중앙의 가장 화려한 의자는 **디오니소스 사제석**(사자 발 조각 확인).
- 👀 무대 앞 **부조 프리즈**(로마 시대 추가) — 디오니소스 신화 장면.

#### ② 아스클레피오스 성역 & 에우메네스 주랑 — 10분
- 극장 위쪽 오솔길. 의술의 신 아스클레피오스 성역 터(BC 420년). 걸으며 지나쳐도 됨.

#### ③ 헤로데스 아티쿠스 음악당 (Odeon of Herodes Atticus) — 10분 (위에서 내려다보기)
- AD 161년, 부호 헤로데스 아티쿠스가 죽은 아내를 기리며 건축한 로마식 음악당. 5천 석.
- 👀 **지금도 여름 아테네 페스티벌 공연장**으로 사용(내부 입장은 공연 때만). 위 전망 포인트에서 내려다보는 아치형 벽이 최고의 포토존.

#### ④ 불레 문(Beulé Gate) → 프로필라이아 (Propylaea) — 20분
- **프로필라이아** = 아크로폴리스의 **기념비적 정문**. 건축가 므네시클레스, BC 437~432.
- 👀 **바깥쪽은 도리아식, 안쪽은 이오니아식 기둥** — 한 건물에 두 양식이 섞인 첫 사례.
- 👀 고대 판아테나이아 축제 행렬이 이 문을 지나 아테나 여신에게 새 옷(페플로스)을 바치러 갔음.
- ⚠️ **여기가 최대 병목 구간**. 계단이 미끄러우니 천천히.

#### ⑤ 아테나 니케 신전 (Temple of Athena Nike) — 10분
- 프로필라이아 오른쪽(남서쪽) 돌출부 위의 **작은 이오니아식 보석 같은 신전**. BC 420년경.
- "니케(Nike)" = 승리. **페르시아 전쟁 승리 기념**.
- 👀 주변 난간에 있던 **"샌들 끈을 묶는 니케"** 부조는 박물관에 있음 → 오후에 꼭 찾아보세요.
- 👀 전설: 아테네 왕 **아이게우스**가 아들 테세우스의 배에 검은 돛이 걸린 걸 보고 이 자리에서 바다로 투신 → **에게해(Aegean Sea)** 의 어원.

#### ⑥ ⭐ 파르테논 신전 (Parthenon) — 50분 (이 여행의 정점)
- **BC 447~432년**, 건축가 **익티노스 & 칼리크라테스**, 조각 총감독 **페이디아스**. 아테나 파르테노스(처녀신 아테나)에게 봉헌.
- 크기: 69.5m × 30.9m, 도리아식 기둥 정면 8개 × 측면 17개 = 총 46개 외주.
- **반드시 확인할 것 (천천히 한 바퀴 돌며)**
  1. 👀 **착시 보정 설계(Optical refinements)**: 이 건물엔 **직선이 거의 없습니다.**
     - 기단(스틸로바테)이 가운데가 **약 6~11cm 위로 볼록** → 멀리서 보면 처지지 않고 수평으로 보이도록.
     - 기둥은 가운데가 살짝 부푼 **엔타시스(Entasis)** 곡선 → 기둥이 가늘어 보이는 착시 방지. (한국 **부석사 무량수전의 배흘림기둥**과 같은 원리! 셋이서 비교 토론 추천)
     - 기둥들이 **안쪽으로 미세하게 기울어** 있음 → 연장하면 약 2km 상공에서 만남.
     - **모서리 기둥이 다른 기둥보다 굵음** → 하늘을 배경으로 가늘어 보이는 것 보정.
  2. 👀 **동쪽 정면(동쪽 박공)** = 실제 정문. 아테나 탄생 장면이 있던 자리. 서쪽 박공 = 아테나 vs 포세이돈의 아티카 수호신 경쟁.
  3. 👀 **중앙부의 거대한 공백**: **1687년 베네치아군 모로시니의 포격**으로 오스만군이 보관하던 화약이 폭발 → 지붕과 중앙 벽 붕괴. 그 전까지는 거의 온전했습니다.
  4. 👀 **흰 대리석과 누런 대리석의 차이**: 흰색 = 복원용 신재(펜텔리 산 대리석, 원재료와 같은 채석장), 누런색 = 2,500년 된 원본(철분 산화).
  5. 👀 **크레인과 비계**: 1975년부터 계속되는 복원 공사. "영원히 공사 중인 신전"이라는 농담이 있을 정도. 이것도 역사의 일부.
- ⚠️ **신전 내부는 출입 금지**. 주위를 한 바퀴 돌며 보는 방식.
- 📸 **베스트 포토 스팟**: 북서쪽 모서리에서 대각선으로(기둥 두 면이 다 나옴).

#### ⑦ 에레크테이온 (Erechtheion) & 카리아티드 — 25분
- BC 421~406. 파르테논 북쪽의 **비대칭 이오니아식 신전**. 아테나·포세이돈·전설의 왕 에레크테우스를 함께 모심.
- 👀 **카리아티드 현관(Porch of the Caryatids)**: 기둥 대신 **6명의 여인상**이 지붕을 받침. 현재 서 있는 것은 **모두 복제품**. 원본 5개는 오후에 갈 박물관에, **1개는 엘긴이 가져가 대영박물관**에 있음.
- 👀 **아테나의 올리브나무**: 서쪽 벽 앞의 올리브나무 = 신화에서 아테나가 아테네 시민에게 선물한 나무의 "후손"(1917년 식재).
- 👀 **포세이돈의 삼지창 자국**: 북쪽 현관 바닥 아래 바위의 구멍 — 신화에선 포세이돈이 삼지창으로 찍어 소금물 샘을 낸 흔적.

#### ⑧ 정상 동쪽 끝 전망대 & 그리스 국기 게양대 — 15분
- 👀 아테네 시내 360도 파노라마. **리카베투스 언덕, 판아테나이코 경기장(하얀 U자), 올림피아 제우스 신전(기둥 몇 개 남은 곳)** 위치를 미리 확인해두면 DAY 3 동선이 머리에 그려짐.
- 👀 1941년 나치 점령 당시, 청년 **마놀리스 글레조스와 아포스톨로스 산타스**가 이 게양대에서 나치 깃발을 끌어내린 저항의 장소.

#### ⑨ 서쪽 출구로 하산 — 10분

> ⚠️ **폭염 주의**: 여름(6~8월) 기온이 38~40°C를 넘으면 **12:00~17:00 아크로폴리스가 임시 폐쇄**될 수 있습니다. 08:00 입장이면 이 리스크도 피합니다.

### ⏰ 11:00~11:30 — 아레오파고스 언덕 (Areopagus Hill) (🚶 서쪽 출구에서 도보 3분, 체류 30분)
- 💶 무료, 상시 개방.
- 아크로폴리스 서쪽 출구 바로 앞의 **반질반질한 바위 언덕**. 금속 계단으로 올라가세요(⚠️ 바위 자체는 매우 미끄러움).
- 👀 **역사**: 고대 아테네 **최고 법정(아레오파고스 회의)** 이 열린 곳. 신화에선 아레스가 재판받은 곳, 오레스테스가 어머니 살해죄로 재판받은 곳(아이스킬로스 『에우메니데스』).
- 👀 **AD 51년경 사도 바울이 "알지 못하는 신"에 대해 설교**한 곳(사도행전 17장). 언덕 입구 청동판에 그리스어 설교문.
- 📸 **아크로폴리스 서쪽 면 + 프로필라이아를 정면으로 찍을 수 있는 최고 포인트.** 아래로 고대 아고라(DAY 2)가 내려다보임.
- 앉아서 물 마시며 휴식.

### ⏰ 11:30~11:50 — 플라카로 이동 (🚶 도보 15분)
- 아레오파고스 → 아크로폴리스 북쪽 사면 길(Theorias 거리) → **아나피오티카(Anafiotika)** 경유 → 플라카.
- 👀 **아나피오티카**: 19세기 키클라데스 제도 아나피 섬 석공들이 왕궁 건설하러 왔다가 지은 **하얀 골목 마을**. 아테네 한복판의 산토리니. 골목이 미로라 구글맵 켜고 걷기.

### ⏰ 12:00~13:15 — 🍽️ 점심: 플라카 타베르나 (1시간 15분)
**추천 메뉴 (3명 기준 나눠먹기)** — 그리스는 **가운데 놓고 나눠먹는 문화**라 한국인에게 딱 맞음.
| 메뉴 | 설명 | 예상가 |
|---|---|---|
| **그릭 샐러드 (Horiatiki)** | 토마토·오이·양파·올리브 + 페타치즈 덩어리 | €9~12 |
| **무사카 (Moussaka)** | 가지·감자·다진 고기·베샤멜 그라탕. 그리스 대표 요리 | €12~15 |
| **수블라키 플레이트** | 돼지고기/닭고기 꼬치 + 감자튀김 + 피타 | €12~16 |
| **차지키 (Tzatziki)** | 요거트·오이·마늘 딥. 피타에 찍어 먹기 | €5~6 |
| **사가나키 (Saganaki)** | 팬에 구운 치즈. 레몬 짜서 | €7~9 |
- 1인 €18~25 예상.
- **식당 고르는 팁**: 플라카 메인 거리(Kydathineon, Adrianou)는 호객형 관광 식당이 많음. 메뉴판에 **사진이 10장 넘게 붙어 있고 호객꾼이 서 있으면 패스**. 구글맵 평점 4.5↑ & 리뷰 1,000개↑를 기준으로 고르세요.
- 플라카 무난한 후보: **Psaras(Ψαράς)** (계단 위 테라스, 해산물·전통요리), **Klimataria(Κληματαριά)** (라이브 음악 노포, 프시리 쪽), **Kuzina** (조금 고급, 아크로폴리스 뷰 옥상, 아드리아누 거리). ※ 영업 여부·시간은 구글맵으로 당일 확인.

### ⏰ 13:15~13:30 — 아크로폴리스 박물관으로 이동 (🚶 도보 10분)
- 플라카 → 디오니시우 아레오파기투 거리 → 박물관 정문. (메트로 Akropoli역 바로 앞)

### ⏰ 13:30~17:00 — 🏛️ 아크로폴리스 박물관 (Acropolis Museum) (3시간 30분)
- 💶 €20 전후 (사전 예매)
- 🕐 운영: 보통 월 09:00~17:00 / 화~일 09:00~20:00 / **금 09:00~22:00** (계절 변동, 확인 필수)
- 2009년 개관. 건축가 베르나르 츄미. **아크로폴리스에서 출토된 원본 유물만** 전시. 오전에 본 것들의 "진짜"를 만나는 곳.
- 🎧 오디오 가이드(유료) 또는 공식 앱 활용. 박물관 내부 **사진 촬영은 대부분 가능**(아르카익 갤러리 등 일부 금지 구역 표시 확인, 플래시 금지).

**층별 관람 순서 (이 순서 그대로)**

#### 🔹 입구 & 지하 발굴 현장 — 20분
- 👀 입구 바닥이 **유리**. 발아래로 **AD 4~7세기 아테네 주거지 유적**이 보임. 박물관이 유적 위에 떠 있는 구조.
- (지하 발굴 현장 "Archaeological Excavation"은 별도 입구로 들어가 걸어볼 수 있음, 시간 되면 20분 추가.)

#### 🔹 0층 → 1층 경사로: 아크로폴리스 사면 갤러리 — 20분
- 👀 유리 경사로 = 아크로폴리스 언덕을 오르는 체험의 은유.
- 👀 성역에서 나온 봉헌물, 결혼식용 물병(루트로포로스) 등.

#### 🔹 1층: ⭐ 아르카익 갤러리 (Archaic Gallery) — 50분
- **페르시아군이 BC 480년 아크로폴리스를 파괴하기 전**의 조각들. 아테네인들이 부서진 조각들을 땅에 묻어서(페르시아 퇴적층) 오히려 보존됨.
- 👀 **모스코포로스 (Moschophoros, 송아지를 멘 남자, BC 570년경)** — 그리스 조각의 "**아르카익 미소**" 대표작.
- 👀 **코레(Kore) 여인상들** — 채색 흔적이 남아 있음! 고대 그리스 조각은 **원래 화려하게 채색**되어 있었다는 증거. **페플로스 코레** 옆의 채색 복원 모형을 꼭 보세요.
- 👀 **크리티오스 소년 (Kritios Boy, BC 480년경)** — 체중을 한쪽 다리에 싣는 **콘트라포스토** 자세의 최초 사례. 아르카익의 경직성에서 클래식의 자연스러움으로 넘어가는 **서양 미술사의 전환점**.
- 👀 **기마상(Rampin Rider 상반신 복제)** 등.

#### 🔹 1층: ⭐ 에레크테이온 카리아티드 — 20분
- 👀 **5명의 원본 카리아티드**. 한 자리가 비어 있음 → 대영박물관에 있는 6번째.
- 👀 레이저 세정으로 복원된 원래의 색감. 뒤로 돌아가 **땋은 머리(뒤태)** 를 꼭 보세요 — 머리카락이 목 부분의 구조 보강 역할.

#### 🔹 1층: 아테나 니케 신전 & 프로필라이아 — 15분
- 👀 **"샌들 끈을 묶는 니케(Sandal-binder)"** — 얇은 천이 몸에 젖은 듯 달라붙은 "**젖은 옷 기법(wet drapery)**"의 걸작.

#### 🔹 2층: 카페 & 휴식 — 20분 (추천)
- 박물관 2층 레스토랑/카페 테라스에서 **아크로폴리스를 바라보며** 커피·디저트. 가격도 합리적.
- 🍽️ 프레도 카푸치노 + 요거트 디저트 등, 1인 €6~10.

#### 🔹 3층: ⭐⭐ 파르테논 갤러리 (Parthenon Gallery) — 60분 (박물관의 하이라이트)
- **3층 전체가 파르테논과 똑같은 크기·방향으로 회전 배치**된 유리방. 창밖으로 실제 파르테논이 보임.
- 👀 **프리즈(Frieze, 띠 부조) 160m**: 판아테나이아 대축제 행렬. 기병, 전차, 제물 소, 물병 운반자 → 동쪽 면에서 신들이 맞이하는 장면.
  - 👀 **누런 원본** vs **하얀 석고 복제본(=대영박물관 소장분)** 이 섞여 있음. 하얀 부분이 그만큼 "빠져 있는" 것. 그리스 정부가 **반환을 요구하며 일부러 빈자리를 석고로 채워 보여주는** 강력한 정치적 메시지.
  - 👀 기병들의 말 갈기, 옷 주름 표현 — 이게 BC 440년 작품이라는 걸 생각하면 소름.
- 👀 **메토프(Metopes) 92개**: 신과 거인의 싸움(기간토마키아), 라피타이족 vs 켄타우로스, 아테네인 vs 아마존, 트로이 전쟁. 남쪽 메토프 다수가 런던에 있음.
- 👀 **박공(Pediment) 조각**: 아테나 탄생(동), 아테나 vs 포세이돈(서).
- 💡 **이 방에서 셋이서 토론할 거리**: "엘긴 마블은 반환되어야 하는가?" — 박물관 설명 패널에 그리스 측 입장이 자세히 나와 있음.
- 📸 파르테논 실물과 조각을 한 프레임에 담을 수 있는 창가 자리.

#### 🔹 1층 나머지 — 남은 시간 (BC 5세기 이후~로마 시대 조각, 알렉산드로스 대왕 두상 등)

> ⚠️ **월요일**은 박물관이 17:00에 닫을 수 있습니다. 일정이 월요일이면 시간 엄수.
> 💡 **금요일**이면 22:00까지 열어서, 순서를 바꿔 "오후 아크로폴리스 → 저녁 박물관"도 가능.

### ⏰ 17:00~17:30 — 숙소 복귀 & 휴식 (30분) or 바로 이동
- 박물관 → 숙소(쿠카키/마크리야니면 도보 5분). 샤워·옷 갈아입기.

### ⏰ 일몰 1시간 전 — 필로파포스 언덕 (Philopappos Hill) 일몰 (🚶 도보 15~20분 오르막, 체류 60분)
- 💶 무료.
- 디오니시우 아레오파기투 거리 서쪽 끝에서 올라가는 돌길. 소나무 숲 산책로.
- 👀 정상의 **필로파포스 기념비(AD 114~116)**: 코마게네 왕국 왕자이자 아테네 시민이었던 필로파포스의 무덤 기념비.
- 👀 가는 길에 **"소크라테스의 감옥"** 이라 불리는 바위 동굴(전승일 뿐 증거는 없음)과 **프닉스 언덕(Pnyx)** — **아테네 민회(에클레시아)가 열린 곳, 페리클레스·데모스테네스가 연설한 연단(베마)** 이 있음. 시간 되면 프닉스까지 15분 추가.
- 📸 **아크로폴리스와 파르테논을 정면 측면에서 담는 아테네 최고의 일몰 포인트.** 파르테논 뒤로 해가 지는 게 아니라, **해 지는 빛을 받아 파르테논이 주황색으로 물드는** 장면. 이후 조명이 켜지는 순간까지 보기.

**참고 일몰 시각 (아테네)**
| 월 | 일몰 | 월 | 일몰 |
|---|---|---|---|
| 3월 | 18:20~19:50* | 9월 | 19:50~19:10 |
| 4월 | 20:00~20:20 | 10월 | 19:10~18:20* |
| 5~6월 | 20:30~20:50 | 11월 | 17:10~17:00 |
| 7~8월 | 20:50~20:10 | 12~2월 | 17:05~17:50 |
*서머타임 전환 시기 1시간 변동. 여행 날짜에 맞춰 검색 확인.

### ⏰ 일몰 후 — 🍽️ 저녁: 아크로폴리스 뷰 디너 (1시간 30분)
- 필로파포스에서 내려와 도보 5~10분.
- **추천: Strofi(Στροφή)** — 로베르투 갈리 거리, 헤로데스 아티쿠스 음악당 바로 근처. 옥상 테라스에서 **조명 켜진 파르테논**을 보며 식사. 아테네 전통 요리. **예약 필수**(전화/구글).
- 대안: 쿠카키 동네 타베르나(관광객 적고 저렴).
- **추천 메뉴**: 양고기 오븐구이(**Kleftiko** 또는 **Arni sto fourno**), **파스티치오**(그리스식 라자냐), **돌마데스**(포도잎 쌈밥), **그릴 문어(Ochtapodi)**.
- 🍷 **그리스 와인**: 하우스 와인 1/2리터 카라페(€8~12)로 시작. 레드는 **아기오르기티코(Agiorgitiko)**, 화이트는 **아시르티코(Assyrtiko)**. 아니면 **우조(Ouzo)** 를 물에 타서(하얗게 변함) 식전주로.
- 1인 €30~45 예상.
- 식후: 숙소 복귀. **내일 아침 일찍 시작하니 23시 전 취침 권장.**

---

## 5. DAY 2 — 고대 아고라 & 로마 시대 아테네 & 국립고고학박물관
**테마: 민주주의와 철학이 태어난 광장 → 로마 제국의 아테네 → 그리스 3,000년 유물의 총집합**
**총 도보: 약 7~9km**

### ⏰ 07:30 — 아침 (40분)
🍽️ 오늘은 **그릭 요거트 + 꿀 + 호두** 또는 **부가차(Bougatsa)** — 크림 커스터드 파이에 슈가파우더·시나몬. 카페에서 €3~5.

### ⏰ 07:45 — 고대 아고라로 이동
- 🚶 쿠카키/마크리야니에서 도보 약 20분 (디오니시우 아레오파기투 → 아포스톨루 파블루 거리, 아크로폴리스 언덕을 끼고 도는 아름다운 보행자 길)
- 🚇 또는 메트로 1호선(초록선)/3호선(파란선) **Monastiraki(Μοναστηράκι)역** 하차 → 아드리아누(Adrianou) 거리 입구까지 도보 5분.
- 입구: **아드리아누 거리 입구** 또는 **티시오(Thiseio) 쪽 입구**.

### ⏰ 08:00~10:30 — 🏛️ 고대 아고라 (Ancient Agora) (2시간 30분)
- 💶 €20 전후 (통합권 포함)
- **고대 아테네의 시민 생활 중심지.** 정치(평의회), 사법(법정), 상업(시장), 종교, 철학 토론이 모두 이곳에서. **민주주의가 실제로 "작동"한 장소.** 소크라테스가 매일 사람을 붙잡고 질문하던 곳.

**관람 순서**
#### ① ⭐ 헤파이스토스 신전 (Temple of Hephaestus / Hephaisteion) — 40분
- 아고라 서쪽 언덕(콜로노스 아고라이오스) 위. BC 449~415.
- 👀 **현존하는 고대 그리스 신전 중 가장 보존 상태가 좋은 것.** 지붕까지 거의 온전! 파르테논이 "원래 어땠을지" 상상하려면 이 신전을 보세요.
- 👀 보존 이유: **7세기부터 1834년까지 그리스 정교회 성당(성 게오르기오스)** 으로 사용되어 파괴를 피함.
- 👀 대장장이 신 헤파이스토스 + 아테나 에르가네(공예의 여신)에게 봉헌 → 주변 발굴에서 **대장간·금속 공방 흔적**이 많이 나옴.
- 👀 동쪽 메토프: **헤라클레스의 12과업**, 테세우스의 업적(그래서 한때 "테세이온"으로 잘못 불림 → 지역명 **티시오**의 유래).
- 📸 신전 뒤쪽 언덕에서 내려다보는 **아고라 전경 + 아크로폴리스**.

#### ② 아고라 서쪽 행정구역 — 25분 (신전에서 내려오며)
- 👀 **톨로스(Tholos)**: 원형 건물. 평의회 상임위원 50명(프리타네이스)이 **24시간 교대로 숙식**하며 국정 운영. 일종의 "고대 대통령실 상황실".
- 👀 **불레우테리온(Bouleuterion)**: 500인 평의회 회의장 터.
- 👀 **메트룬(Metroon)**: 국가 문서 보관소.
- 👀 **명칭 영웅 기념비(Monument of the Eponymous Heroes)**: 10개 부족의 영웅상이 있던 받침대 = **고대의 공고 게시판**. 법안·징집 명단이 여기 붙음.
- 👀 **스토아 바실레이오스(왕의 주랑)**: **소크라테스가 불경죄로 기소장을 받은 곳** (플라톤 『에우티프론』의 배경).

#### ③ 판아테나이아 길 (Panathenaic Way) — 10분
- 👀 아고라를 대각선으로 가로질러 아크로폴리스까지 이어지는 **축제 행렬 도로**. 어제 박물관 프리즈에서 본 그 행렬이 실제로 걸어간 길을 걸어보세요.

#### ④ 성 사도 교회 (Church of the Holy Apostles) — 10분
- 👀 AD 10세기 비잔틴 교회. 아고라 안에서 유일하게 온전한 중세 건물. 내부 프레스코.

#### ⑤ ⭐ 아탈로스 주랑 & 아고라 박물관 (Stoa of Attalos) — 45분
- 👀 BC 2세기 **페르가몬 왕 아탈로스 2세**가 아테네에 기증한 2층 쇼핑몰(상점 42개). **1950년대 미국 고전학회가 원래 모습 그대로 완전 재건**. 그리스 주랑의 원래 공간감을 체험할 수 있는 유일한 곳.
- 박물관 내부 **필수 관람 유물**:
  - 👀 **도편추방 도편(Ostraka)**: 깨진 도자기 조각에 추방할 사람 이름을 새긴 투표용지. **테미스토클레스, 아리스테이데스, 페리클레스** 등 교과서 속 인물들의 이름이 실제로 새겨져 있음! 역사 덕후 필견.
  - 👀 **클레로테리온(Kleroterion)**: 돌로 만든 **배심원 무작위 추첨 기계**. 시민 신분증(피나키온)을 꽂고 흑백 구슬로 추첨. "고대 민주주의는 추첨제"였다는 걸 보여주는 물건.
  - 👀 **클렙시드라(Klepsydra)**: 법정 발언 시간 제한용 **물시계**. 약 6분.
  - 👀 법정 투표용 청동 원반, 표준 도량형, 어린이 장난감, 이동식 화로.
- 👀 2층 테라스: 아고라 전경 조망(개방 여부는 시기별 상이).
- 화장실: 주랑 근처.

> 💡 근처 **"소크라테스의 감옥" 추정지**(남서쪽 경계 밖 Simon the Cobbler의 집 터 = 소크라테스가 자주 들렀다는 구두장이 시몬의 공방)에 대한 표지판을 찾아보세요.

### ⏰ 10:30~10:40 — 로마 아고라로 이동 (🚶 도보 5~10분)
- 아고라 동쪽 출구(아드리아누 거리) → 폴리그노투 거리 → 로마 아고라.

### ⏰ 10:40~11:25 — 🏛️ 로마 아고라 & 바람의 탑 (Roman Agora & Tower of the Winds) (45분)
- 💶 €8~10 전후 (통합권 포함)
- BC 1세기 **율리우스 카이사르와 아우구스투스의 기부금**으로 지은 로마 시대 시장.
- 👀 **아테나 아르케게티스 문(Gate of Athena Archegetis)**: 서쪽 정문. 도리아식 기둥 4개가 온전.
- 👀 ⭐ **바람의 탑 (Tower of the Winds / Horologion of Andronikos)**: BC 1세기 천문학자 **키로스의 안드로니코스**가 만든 **팔각형 대리석 시계탑**.
  - 8면에 **8방위 바람의 신** 부조 (북풍 보레아스, 서풍 제피로스 등) — 각 신의 표정과 옷차림이 날씨 성격을 반영(북풍은 두꺼운 망토).
  - 외벽엔 **해시계** 눈금, 내부엔 **물시계**, 꼭대기엔 청동 풍향계(트리톤)가 있었음. **세계 최초의 기상관측소**라 불림.
  - 2016년 복원 후 **내부 입장 가능** — 안에 들어가 물시계 장치 흔적 확인.
- 👀 **오스만 시대 모스크(페티예 모스크)** 와 **메드레세(이슬람 학교) 문** — 아테네의 오스만 시대 흔적.

### ⏰ 11:25~11:30 — 하드리아누스 도서관으로 이동 (🚶 도보 3분)

### ⏰ 11:30~12:10 — 🏛️ 하드리아누스 도서관 (Hadrian's Library) (40분)
- 💶 €6~8 전후 (통합권 포함)
- AD 132년, **하드리아누스 황제**(그리스 문화 광팬, "그리스 꼬마"라는 별명)가 지은 거대 도서관 복합단지. 100개의 기둥으로 둘러싸인 정원 + 두루마리 서고 + 강의실.
- 👀 **서쪽 정면의 코린트식 기둥 열** — 모나스티라키 광장 쪽에서 보이는 웅장한 벽.
- 👀 안쪽에 겹겹이 쌓인 **5세기 교회 → 비잔틴 교회 → 오스만 시대** 흔적. 한 자리에 시대가 지층처럼.
- ⚠️ 시간 부족하면 **바깥 담장 너머로만 보고 스킵 가능** (모나스티라키 광장에서 상당 부분 보임).

### ⏰ 12:10~13:10 — 🍽️ 점심: 모나스티라키 케밥 (1시간)
- 🚶 하드리아누스 도서관 바로 옆 **미트로폴레오스(Mitropoleos) 거리** = 아테네 "**수블라키/케밥 골목**".
- **추천**: **O Thanasis(Ο Θανάσης)** 또는 **Bairaktaris(Μπαϊρακτάρης)** — 수십 년 된 노포.
- **주문법**:
  - **케밥 피타 (Kebab pita)**: 다진 고기를 꼬치에 구워 피타빵에 양파·토마토·파프리카 가루와 싸 줌. 이게 이 골목의 시그니처. 1개 €3~5.
  - **케밥 플레이트 (Merida kebab)**: 접시로 2~3개 + 감자튀김 + 구운 토마토·고추. €12~15.
  - **차지키, 그릭 샐러드** 하나씩 시켜 나눠먹기.
  - 🍺 그리스 맥주 **미토스(Mythos)**, **알파(Alfa)**, **피스(Fix)**.
- 1인 €12~18.
- 📸 식사 후 **모나스티라키 광장**에서 하드리아누스 도서관 + 판타나사 교회 + 뒤로 아크로폴리스가 한 번에 나오는 사진.

### ⏰ 13:10~13:40 — 국립고고학박물관으로 이동 (🚇 메트로 약 15분 + 도보 10분)
1. 🚇 **Monastiraki역** → **1호선(초록선, Kifisia 방향)** 탑승 → 2정거장 → **Omonia(Ομόνοια)역** 하차 (약 5분)
   - 또는 3정거장 **Victoria(Βικτώρια)역**에서 내려도 됨(도보 거리 비슷).
2. 🚶 Omonia역에서 **28is Oktovriou (Patision) 대로**를 따라 북쪽으로 도보 약 10분 → 박물관(신고전주의 건물, 앞에 넓은 정원).
- 🚕 3인이면 택시도 OK: €6~8, 약 10분.
- ⚠️ **오모니아~박물관 구간은 노숙인·마약 사용자가 있어 분위기가 좋지 않을 수 있습니다.** 대낮에는 큰 문제 없지만 소지품 단단히, 대로변으로만 걷기.

### ⏰ 13:40~18:00 — 🏛️ 국립고고학박물관 (National Archaeological Museum) (4시간 20분)
- 💶 €12~20 (계절별)
- 🕐 보통 08:30~20:00 (**화요일은 13:00 개관**인 경우 많음, 동절기 단축. 꼭 확인)
- **세계 최고의 고대 그리스 유물 컬렉션.** 선사시대부터 로마 시대까지. 매우 넓어서 **아래 "필견 리스트" 위주로** 돌아야 4시간 안에 핵심을 봅니다.
- 🗺️ 입구에서 **무료 평면도(Floor plan)** 받기. 방 번호(Room #) 기준으로 이동.

**필견 리스트 (이 순서대로)**

#### ① ⭐⭐ 미케네 홀 (Room 4, 정문 들어가 정면 중앙) — 45분
- 👀 **아가멤논의 황금 가면 (Mask of Agamemnon)**: 1876년 **하인리히 슐리만**이 미케네 원형 무덤 A에서 발굴. "나는 아가멤논의 얼굴을 보았다!"는 전보로 유명. 실제로는 트로이 전쟁(BC 1200년경)보다 **약 300년 앞선 BC 1550~1500년** 것으로 밝혀짐. 그래도 이름은 그대로.
- 👀 황금 잔(**네스토르의 잔**), 황금 장신구, 상감 단검(사자 사냥 장면), 황소 머리 리톤.
- 👀 **바피오 황금잔 2점**: 크레타 미노아 양식의 소 사냥 장면.
- 💡 호메로스 『일리아스』의 세계가 실제 존재했음을 보여주는 방. 역사 덕후라면 여기서 시간 넉넉히.

#### ② 키클라데스 컬렉션 (Room 6) — 15분
- 👀 BC 3000년경 **키클라데스 대리석 인형**: 극도로 단순화된 기하학적 인체. **피카소·모딜리아니**에게 영향을 준 "5,000년 전의 현대미술". **하프 연주자 상** 필견.

#### ③ 아르카익 조각 (Rooms 7~14) — 30분
- 👀 **쿠로스(Kouros) 상들**: 왼발을 내밀고 주먹 쥔 청년 입상. 이집트 조각 영향 → 점점 자연스러워지는 변화를 방 순서대로 따라가며 관찰.
  - **수니온 쿠로스 (Sounion Kouros, BC 600년경)** — 3m 거구. 내일 갈 수니온 곶에서 출토!
  - **아나비소스 쿠로스 (Kroisos, BC 530년경)** — 받침대에 "전사한 크로이소스를 위해" 비문.
- 👀 **프라시클레이아 코레(Phrasikleia Kore)** — 채색 흔적이 생생.

#### ④ ⭐⭐ 아르테미시온의 청동상들 (Room 15, 21) — 30분
- 👀 **아르테미시온의 제우스(또는 포세이돈) (Room 15, BC 460년경)**: 1928년 에우보이아 섬 앞바다 난파선에서 인양. 2m 넘는 청동 신이 **번개(또는 삼지창)를 던지려는 순간**. 고대 그리스 청동상의 최고 걸작. 팔 길이가 비현실적으로 긴데 오히려 균형감이 완벽 — 셋이서 "제우스냐 포세이돈이냐" 논쟁해보세요(손에 쥔 무기가 사라져 학계도 미결).
- 👀 **아르테미시온의 기수 소년 (Jockey of Artemision, Room 21, BC 140년경)**: 질주하는 말 위의 어린 기수. 같은 난파선에서 나옴. 말의 근육·소년의 긴장된 표정.

#### ⑤ 고전기 장례 조각 (Rooms 16~20) — 20분
- 👀 아테네 귀족들의 **묘비 부조**: 죽은 이와 가족이 손을 잡고(덱시오시스) 작별하는 장면. 감정을 절제한 슬픔 표현이 인상적.

#### ⑥ 휴식 — 15분
- 👀 박물관 안뜰 **카페**(정원 안). 커피·물·스낵. 다리 쉬기.

#### ⑦ ⭐⭐ 안티키테라 메커니즘 (Antikythera Mechanism, Room 38 부근 — 안티키테라 난파선 전시실) — 30분
- 👀 **BC 2~1세기의 "세계 최초의 아날로그 컴퓨터".** 1901년 안티키테라 섬 앞바다 로마 시대 난파선에서 발견.
- 30개 이상의 청동 톱니바퀴로 **해·달의 위치, 월식·일식 예측, 올림픽 개최 주기**까지 계산. 이 수준의 기계는 **1,000년 이상 뒤**에야 다시 등장.
- 👀 같은 난파선의 **안티키테라 청년상(Antikythera Youth, 청동)**, **철학자 두상** 도 함께.
- 💡 공학·과학사 좋아하는 사람에게 이 여행 최대의 충격일 수 있음. 옆에 있는 **복원 모형과 설명 영상** 꼭 보기.

#### ⑧ 헬레니즘·로마 조각 — 20분
- 👀 **아프로디테·판·에로스 상 (Room 30, BC 100년경)**: 슬리퍼로 판(염소 다리 목신)을 때리려는 아프로디테 — 고대 그리스식 유머.
- 👀 **아우구스투스, 하드리아누스 황제 흉상** — 어제·오늘 본 건물들의 "건축주" 얼굴 확인.

#### ⑨ (여력 되면) 2층 — 산토리니 아크로티리 프레스코 & 도자기 컬렉션 — 30분
- 👀 **아크로티리(산토리니) 벽화**: BC 17세기 화산 폭발로 묻힌 "에게해의 폼페이". **권투하는 소년들**, **봄 풍경(제비)** 프레스코. 2층에 있음.
- 👀 **디필론 암포라** 등 기하학 양식 도자기.

> ⚠️ 박물관 관람은 체력 소모가 큽니다. **18:00에 나오는 것으로 끊으세요.** 다 볼 수는 없습니다 — 위 ①④⑦은 반드시, 나머지는 체력 따라.

### ⏰ 18:00~18:30 — 숙소 또는 프시리로 이동 (🚇 메트로 15분)
- Omonia역 → 1호선 → **Monastiraki역** (2정거장) 또는 숙소 방면.
- 숙소에서 30분 휴식 추천.

### ⏰ 19:30~22:00 — 🍽️ 저녁: 프시리(Psyrri) 메제 & 와인 (2시간 30분)
- 프시리 = 모나스티라키 북쪽의 옛 공방 지구 → 지금은 **아테네 최고의 먹자·바 골목**. 벽화(그래피티)와 노천 테이블 가득.
- 그리스인 저녁 시간은 **21시 이후**가 보통. 19:30이면 한산하게 자리 잡을 수 있음.
- **추천 스타일: 메제도폴리오(Mezedopoleio) / 치푸라디코(Tsipouradiko)** — 작은 접시 안주(메제)를 여러 개 시켜 술과 함께. 한국 "포차" 느낌.
- **추천 메뉴**:
  | 메뉴 | 설명 |
  |---|---|
  | **칼라마라키 (Kalamarakia tiganita)** | 오징어 튀김 |
  | **케프테데스 (Keftedes)** | 그리스식 미트볼 |
  | **기간테스 (Gigantes)** | 토마토소스 대왕콩 오븐구이 |
  | **파바 (Fava)** | 노란 완두 퓌레 + 양파·올리브유 (산토리니식) |
  | **소시지 & 그릴 할루미** | 맥주 안주로 최고 |
  | **치푸로 (Tsipouro)** | 포도 찌꺼기 증류주 (40도+). 작은 병으로 시키면 메제가 따라나오는 집도 있음. ⚠️ 독함 |
- 대안 노포: **Klimataria** (라이브 그리스 음악 + 전통요리, 주말 밤 분위기 최고). 또는 쿠카키/엑사르히아 동네 타베르나.
- 1인 €25~40.
- 🌃 2차: 모나스티라키 광장 주변 **루프탑 바**(예: A for Athens, 360 Cocktail Bar 등 — 야경의 아크로폴리스 뷰). 칵테일 €12~16. 성수기엔 대기 있음.

---

## 6. DAY 3 — 올림피아 제우스 신전 & 판아테나이코 경기장 & 수니온 곶 일몰
**테마: 로마 황제의 아테네 → 근대 올림픽의 성지 → 현대 그리스의 심장 → 에게해 끝 포세이돈 신전에서 마무리**
**총 도보: 약 6~8km + 버스 왕복 4시간**

> ⚠️ **일요일**이면 11:00 근위병 교대식이 **대규모 정식 의장(군악대 + 정장)** 으로 열립니다. 가능하면 DAY 3를 일요일로 맞추세요.

### ⏰ 07:30 — 아침 & 체크아웃 준비 (40분)
- 마지막 날이면 짐은 숙소 보관 또는 **짐 보관 서비스**(신타그마/모나스티라키 인근 "Bounce", "Stasher" 등 앱, 1개 €5~8/일).

### ⏰ 08:00~08:50 — 🏛️ 올림피아 제우스 신전 (Temple of Olympian Zeus / Olympieion) (50분)
- 🚶 마크리야니에서 도보 10분 / 🚇 Akropoli역 또는 Syntagma역에서 도보 10분.
- 💶 €20 전후 (통합권 포함)
- 👀 **고대 그리스 최대의 신전.** BC 6세기 참주 **페이시스트라토스**가 착공 → 참주정 몰락으로 중단 → 셀레우코스 왕 안티오코스 4세가 재개 → 로마군 술라가 기둥을 로마로 약탈 → **AD 131년 하드리아누스 황제가 650년 만에 완공.**
- 👀 원래 **104개의 코린트식 기둥**(높이 17m) → 지금 **15개만 서 있고 1개는 쓰러져 있음**. **1852년 폭풍으로 쓰러진 기둥**이 원통 조각들(드럼)이 도미노처럼 누운 상태로 그대로 있음 → 기둥이 어떻게 쌓였는지 내부 구조를 볼 수 있는 귀한 기회.
- 👀 신전 남쪽 **아크로폴리스 조망** — 거대 기둥 사이로 파르테논이 보이는 구도.

### ⏰ 08:50~09:00 — 하드리아누스 개선문 (Arch of Hadrian) (10분, 무료)
- 신전 입구 바로 옆, 아말리아스 대로변.
- 👀 AD 131년. 문 위 비문 두 개:
  - 아크로폴리스 쪽: **"이곳은 아테네, 테세우스의 옛 도시"**
  - 반대쪽: **"이곳은 하드리아누스의 도시, 테세우스의 도시가 아니다"**
  - → **옛 그리스 도시와 로마 신도시의 경계선**. 역사적 자부심과 정치적 선전이 공존하는 문.

### ⏰ 09:00~09:15 — 판아테나이코 경기장으로 이동 (🚶 도보 10~15분)
- 아말리아스 대로 → 바실리시스 올가스 대로를 따라 동쪽으로 → 경기장 정문.
- 왼쪽으로 **자피온(Zappeion)** 전시관과 국립정원이 보임.

### ⏰ 09:15~10:20 — 🏟️ 판아테나이코 경기장 (Panathenaic Stadium / Kallimarmaro) (1시간 5분)
- 💶 €12 전후 (오디오가이드 포함, 한국어 미지원 가능 — 영어)
- 🕐 보통 08:00~19:00 (동절기 ~17:00)
- 👀 **세계 유일의 전체가 대리석으로 만들어진 경기장.** "칼리마르마로(아름다운 대리석)"라는 별명.
- 👀 **역사의 층위**:
  - BC 330년경 리쿠르고스가 판아테나이아 축제 경기용으로 건설
  - AD 140년경 **헤로데스 아티쿠스**(DAY 1 음악당 그 사람!)가 펜텔리 대리석으로 재건, 5만 석
  - 중세에 대리석이 석회로 구워져 사라짐 → 1870년 발굴
  - **1896년 제1회 근대 올림픽 개최지**. 그리스 목동 **스피리돈 루이스**가 마라톤 우승한 결승선.
  - **2004년 아테네 올림픽 양궁 경기·마라톤 결승선**
  - 지금도 **모든 올림픽 성화 인계식**이 이곳에서 열림.
- **할 일**:
  1. 🏃 **트랙 한 바퀴 달리기 / 걷기** — 셋이서 100m 경주 강력 추천(실제로 관광객들이 다 함). U자형 트랙 직선 구간.
  2. 🥇 **시상대**에 올라가 1·2·3등 사진. 남자 셋이니 딱 맞음.
  3. 🪑 꼭대기 관중석까지 올라가서 전경 + 멀리 아크로폴리스.
  4. 🔦 관중석 뒤쪽 **터널** 통로 → 고대 선수 입장 통로. 끝에 **역대 올림픽 성화봉·포스터 전시관** (1896년부터. **1988 서울 올림픽 포스터·성화봉**도 찾아보세요!).

### ⏰ 10:20~10:50 — 국립정원 산책하며 신타그마로 이동 (🚶 도보 20~30분)
- 경기장 맞은편 → **자피온(Zappeion)** 건물 앞 정원(1888년 신고전주의 전시관, 1896 올림픽 펜싱 경기장) → **국립정원(National Garden)** 을 가로질러 북쪽으로 → 신타그마 광장 국회의사당 앞.
- 국립정원: 그늘 많은 숲길, 오리 연못, 작은 고대 모자이크 유적. 여름엔 이 구간이 오아시스.

### ⏰ 10:50~11:30 — 🇬🇷 신타그마 광장 & 근위병 교대식 (40분)
- **장소**: 국회의사당(구 왕궁, 1843년) 앞 **무명용사의 묘(Tomb of the Unknown Soldier)**.
- 👀 **에브조네스(Evzones) 근위병**: 대통령 친위대. 400개 주름 치마(**푸스타넬라** — 오스만 지배 400년을 상징한다는 설), 술 달린 모자, 400g짜리 **징 박힌 신발(차루키)**.
- ⏰ 교대식: **매시 정각**(소규모, 약 10분). **일요일 11:00 = 대규모 정식 교대식** (군악대·수십 명의 근위병, 약 30~40분, 30분 일찍 자리 잡기).
- 👀 슬로모션처럼 다리를 높이 들어 올리는 독특한 행진 — 장시간 정지 자세 후 혈액순환을 위한 동작이라는 설명이 있음.
- 👀 무명용사의 묘 부조: 죽은 고대 그리스 전사(아이기나 섬 아파이아 신전 박공 조각 모티프). 벽에는 **그리스가 참전한 전투 이름**이 새겨져 있는데, **"KOREA(ΚΟΡΕΑ)"** 도 있습니다! **그리스는 6·25 전쟁 참전국**(약 4,000~5,000명 파병, 186명 전사). 꼭 찾아서 사진 찍고 묵념하세요.
- ⚠️ 근위병과 사진은 가능하나 **만지거나 너무 가까이 가지 말 것** (근위병이 총 개머리판으로 바닥을 쳐서 경고함).
- 💡 신타그마 메트로역 내부에 **공사 중 출토된 유물·지층 단면 전시**가 있음 (무료, 5분이면 충분, 개찰구 밖 공간).

### ⏰ 11:30~11:50 — 에르무 거리 → 중앙시장 이동 (🚶 도보 15~20분)
- 신타그마 → **에르무(Ermou) 거리**(아테네 메인 쇼핑 보행자 거리) 서쪽으로.
- 👀 중간에 거리 한복판에 박힌 **카프니카레아 교회(Panagia Kapnikarea, 11세기 비잔틴)**. 2분 들러보기.
- 👀 **아테네 대성당(메트로폴리스)** 과 그 옆 **작은 메트로폴리스(12세기, 고대·비잔틴 부조 조각을 벽에 재활용)** — 5분.
- → 아티나스(Athinas) 거리로 북쪽 → 중앙시장.

### ⏰ 11:50~13:00 — 🍽️ 점심: 바르바키오스 중앙시장 (Varvakios Agora) (1시간 10분)
- 👀 1886년부터 운영된 **아테네 최대 재래시장**. 고기 시장·생선 시장 홀이 압도적(생선 시장의 그리스 상인 고함 소리가 볼거리). 맞은편 건너편은 채소·과일 시장. ⚠️ 일요일은 휴무.
- 🍽️ **추천 1: Diporto(Δίπορτο)** — 소크라투스/테아그레누스 거리 모퉁이 **지하 노포**. **메뉴판 없음**, 주인이 오늘 있는 걸 가져다줌 (병아리콩 수프 레비티아, 생선 튀김, 샐러드, 배럴 와인). 아테네 서민 식당의 원형. 현금 준비. 영업시간이 들쭉날쭉(점심 위주)하니 구글맵 확인. 1인 €10~15.
- 🍽️ **추천 2: 시장 안 식당 (Oinomageireio Papandreou 등)** — 내장탕 **파차스(Patsas)** (한국 해장국 느낌, 시장 상인들의 해장 메뉴), 양고기 수프. 모험심 있으면 도전.
- 🍽️ **추천 3: Ta Karamanlidika tou Fani** — 시장 근처 델리 레스토랑. 소아시아(카파도키아) 출신 그리스인의 **파스투르마(Pastourma, 향신료 절임 소고기)**, 소시지, 치즈 플래터. 맥주 안주 최고. 1인 €15~25.
- 🛒 **기념품 쇼핑(시장 주변)**: 그리스 **올리브유**, **타임 꿀**, **오레가노·마운틴 티**, **피스타치오(아이기나산)**. 시장 주변 향신료 가게가 관광지보다 저렴. 액체류는 위탁수하물로.

### ⏰ 13:00~13:40 — 숙소 짐 정리 or 휴식 (40분)
- 수니온 왕복 동안 짐은 숙소/보관소에.
- ⚠️ **수니온 출발 시간은 계절·일몰에 맞춰 조정하세요.** 목표는 **"일몰 1시간 전 수니온 도착"**.
  - 예) 10월 일몰 18:30 → **15:00 출발 버스** / 6월 일몰 20:50 → **17:00~17:30 출발 버스**
  - 여름이면 13:00~16:00 시간이 비므로 **케라메이코스 고대 묘지**(§11 참조)나 **베나키 박물관**, **비잔틴·기독교 박물관**을 끼워 넣으세요.

### ⏰ (아래는 10월 기준) 14:30~15:00 — 🚌 KTEL 버스 정류장으로 이동
- **KTEL Attikis 수니온행 해안 노선(Paraliaki, 해안도로 경유)** 출발지: **페디온 아레오스(Pedion tou Areos) 공원 앞, Mavromateon 거리** 정류장.
- 🚇 가는 법: 메트로 1호선 **Victoria역** 하차 → 도보 10분 / 또는 숙소에서 🚕 택시 €6~10.
- 일부 버스는 시내 중심 **Filellinon 거리(신타그마 근처)** 에도 정차 — 시간표에서 확인.
- 💶 편도 **€7 전후** (2025 기준), **현금으로 버스 안 차장에게 지불**하는 경우가 많음 → 잔돈 준비.
- ⏰ 대략 **1시간 간격** 운행. 시간표: **ktelattikis.gr** 에서 "Sounio (paraliaki)" 확인.
- ⚠️ 성수기 오후 버스는 만석일 수 있음 → **출발 20~30분 전 도착해 줄 서기.**

### ⏰ 15:00~17:00 — 🚌 해안도로 따라 수니온으로 (약 1시간 45분~2시간)
- 🪟 **버스 오른쪽 좌석**에 앉으세요! 출발 후 30분 정도 지나면 **아테네 리비에라** 해안도로 — 글리파다, 불리아그메니, 바리, 라고니시를 지나며 **에게해(사로니코스만)가 내내 오른쪽 창밖에** 펼쳐짐. 그 자체가 관광.
- 종점 직전/종점이 **수니온 곶 신전 입구 아래**. 기사에게 "**Naos Poseidona? (포세이돈 신전?)**" 확인.

### ⏰ 17:00~일몰 후 30분 — 🏛️ 수니온 곶 포세이돈 신전 (Temple of Poseidon, Cape Sounion) (약 2시간)
- 💶 €20 전후 / 🕐 보통 **일몰까지 개방** (동절기 단축 확인)
- 👀 **BC 444~440년**, 파르테논과 거의 같은 시기. 아티카 반도 최남단 절벽 60m 위의 **도리아식 신전**. 바다의 신 포세이돈에게 봉헌. 현재 기둥 15~16개 남음.
- 👀 **아테네 선원들이 귀향할 때 가장 먼저 보이고, 떠날 때 가장 마지막에 보이던 신전**. 신화 속 아이게우스 왕이 투신한 곳이 이 곶이라는 버전도 있음 → "에게해"가 이 발아래 바다.
- 👀 ⭐ **바이런 경의 낙서**: 영국 시인 **바이런**이 1810년경 기둥에 자기 이름 **"BYRON"** 을 새김. 입구 쪽 기둥 하단(울타리 너머라 망원으로 찾아야 함). 낭만주의 시대 그리스 사랑(필헬레니즘)의 흔적이자 원조 관광객 낙서. 바이런은 이후 **그리스 독립전쟁에 참전해 1824년 메솔롱기에서 병사** — 그리스의 국민적 영웅.
- 👀 신전 주변 **포세이돈 성역 성벽 터, 아테나 신전 터**(아래쪽 언덕).
- 📸 **일몰 포인트**: 신전 서쪽(바다 쪽) 바위 언덕. 해가 **사로니코스만 섬들 너머 바다로 떨어지며 신전 기둥이 실루엣**이 되는 장면 = 그리스 여행 최고의 일몰 중 하나. 이걸로 3일 여행 마무리.
- 🍽️ 신전 아래 **카페-레스토랑 (Sounio Cafe/ Restaurant)** 에서 일몰 전 커피 or 맥주 가능.
- ⚠️ 절벽 바람이 매우 셈 → **바람막이 필수**. 일몰 후 급격히 추워짐.

### ⏰ 일몰 후 ~ — 🚌 아테네 복귀 (약 2시간)
- ⚠️ **막차 시간 반드시 사전 확인!** 일몰 후 1~2시간 내 마지막 버스가 있는 경우가 보통이지만 계절마다 다름. 내려올 때 버스 정류장 시간표 사진 찍어두기.
- 돌아오는 버스는 어두워서 바다 경치가 안 보이니 잠자기 좋음.
- 💡 **대안: 택시/투어**
  - **수니온 일몰 반나절 투어** (GetYourGuide, Viator 등): 왕복 미니버스 + 가이드, 1인 €50~70, 호텔 픽업. 버스 시간 걱정 없음 → **3인이라면 충분히 고려할 만함**.
  - **프라이빗 택시 왕복 + 대기**: 차 한 대 €150~220 (흥정, 사전 예약 앱). 3인이면 1인 €50~75. 중간에 **불리아그메니 호수**나 해변 사진 정차 가능.
  - **렌터카**: 국제운전면허증 필요. 해안도로 드라이브는 훌륭하지만 아테네 시내 운전·주차는 비추천.

### ⏰ 21:00~22:30 — 🍽️ 마지막 저녁: "아테네 최고의 수블라키" (1시간 30분)
- 늦게 도착해도 아테네는 밤 11시까지 식사 가능.
- **추천: Kostas (Κώστας) 수블라키** — 아기아 이리니 광장(Plateia Agias Irinis) 근처, 1950년부터 이어온 **아테네 수블라키의 전설**. 돼지고기 수블라키 피타 하나 €3~4. ⚠️ **점심 위주 영업이라 저녁엔 문 닫았을 확률 높음** → 이 경우 대안:
- **대안**: 모나스티라키 **Bairaktaris / O Thanasis**(늦게까지 영업), 또는 동네 **수블라치디코(Souvlatzidiko)** 아무 곳 — 아테네 수블라키는 평균 수준이 높아서 실패 확률이 낮음.
- **주문법**: "**Ena souvlaki pita, hirino, me ola**" = 돼지고기 피타 수블라키 하나, 전부 넣어서(양파·토마토·차지키·감자튀김).
- 그리고 마지막 디저트 ⬇️
- 🍯 **루쿠마데스 (Loukoumades)**: 그리스식 미니 도넛 + 꿀 + 시나몬. 아이올루 거리의 **Lukumades** 가게(늦게까지 영업) 추천. €5~7.
- 🥂 마지막 건배는 모나스티라키 루프탑에서 **조명 켜진 파르테논**을 보며.

---

## 7. 교통 총정리

### 7-1. 메트로 노선 (이 여행에서 쓰는 역만)
| 노선 | 색 | 이 여행 주요 역 |
|---|---|---|
| **1호선** (Piraeus ↔ Kifisia) | 🟢 초록 | Thiseio, **Monastiraki**, **Omonia**, **Victoria** |
| **2호선** (Anthoupoli ↔ Elliniko) | 🔴 빨강 | **Akropoli**, **Syntagma**, Omonia |
| **3호선** (Dimotiko Theatro ↔ **Airport**) | 🔵 파랑 | **Airport**, **Syntagma**, **Monastiraki** |

### 7-2. 티켓 (2025 기준, 변동 가능)
| 종류 | 가격 | 메모 |
|---|---|---|
| 1회권 (90분, 환승 가능) | €1.20 | 공항 노선 제외 |
| 24시간권 | €4.10 | |
| 5일권 | €8.20 | 공항 노선 제외 |
| **3일 관광권 (공항 왕복 1회 포함)** | €20 | 공항을 메트로로 오가면 이게 이득 |
| 공항 메트로/X95 단일권 | €9 / €5.50 | |
- 구매: 역 자동발매기(영어 지원) → **종이 카드 Athena Ticket** 에 충전. 또는 **비접촉 신용카드/휴대폰 결제로 개찰구에 바로 태그**(1회권 요금 적용, 대부분 역 지원).
- ⚠️ **탑승 전 반드시 개찰구/버스 단말기에 태그(Validation)**. 미태그 시 벌금 €60 이상. 검표원 자주 다님.
- 💡 이 일정은 대부분 **도보**입니다. 메트로는 하루 2~4회 정도. **DAY 2에 24시간권 1장**이면 충분하고, 나머진 1회권/카드 태그로.

### 7-3. 택시
- 기본요금 €4 전후, 시내 대부분 €6~12. **3인이면 메트로보다 편하고 비용 차이 작음.**
- 앱(**FREENOW / Uber**)으로 부르면 바가지 걱정 없음. 길에서 잡을 땐 **미터기(Taximeter) 켰는지 확인**.
- 야간(00~05시) 할증.

---

## 8. 먹거리 총정리 & 주문 팁

### 8-1. 3일간 꼭 먹어볼 것 체크리스트
- [ ] 수블라키 피타 (Souvlaki pita) — 길거리 국민음식
- [ ] 기로스 (Gyros) — 회전 꼬치 고기 피타
- [ ] 무사카 (Moussaka)
- [ ] 파스티치오 (Pastitsio)
- [ ] 그릭 샐러드 (Horiatiki)
- [ ] 차지키 (Tzatziki)
- [ ] 스파나코피타 / 티로피타 — 아침 파이
- [ ] 클레프티코 (Kleftiko) — 양고기 저온 오븐구이
- [ ] 그릴 문어 (Ochtapodi sti skara)
- [ ] 루쿠마데스 (Loukoumades) — 꿀 도넛
- [ ] 부가차 (Bougatsa) — 커스터드 파이
- [ ] 그릭 요거트 + 꿀
- [ ] 프레도 에스프레소 / 프레도 카푸치노
- [ ] 우조 (Ouzo) / 치푸로 (Tsipouro)
- [ ] 그리스 와인 (Assyrtiko, Agiorgitiko)
- [ ] 미토스 / 알파 / 피스 맥주

### 8-2. 식당 이용 팁
- 🕐 **그리스 식사 시간**: 점심 13:00~15:00, 저녁 **20:30~23:00**(현지인 기준). 관광객 시간대(12시, 19시)면 대기 없음.
- 🍞 테이블에 빵이 나오면 **빵값(€1~2/인, "Couvert")** 이 청구될 수 있음 — 정상.
- 💧 물: 수돗물 마셔도 안전. "**Nero tis vrisis (수돗물)**" 요청 가능. 생수 주문 시 €1~3.
- 🍰 식사 후 **서비스 디저트(요거트·과일·할바 등)** 를 주는 집이 많음 — 무료.
- 💳 계산: "**To logariasmo, parakalo (계산서 주세요)**". 테이블에서 계산. 3인 나눠 계산은 가능하지만 한 번에 내고 정산하는 게 편함(토스·카카오페이로 정산).
- 🚬 그리스는 야외 테라스 흡연 많음. 비흡연자면 실내 요청.
- ⚠️ 영수증 확인: 그리스는 **영수증(Apodeixi) 발행 의무**. 영수증 안 주면 요청.

### 8-3. 생존 그리스어
| 한국어 | 그리스어 (발음) |
|---|---|
| 안녕하세요 | Γειά σας (**야사스**) |
| 감사합니다 | Ευχαριστώ (**에프하리스토**) |
| 부탁합니다/천만에요 | Παρακαλώ (**파라칼로**) |
| 네 / 아니오 | Ναι (**네**) / Όχι (**오히**) ⚠️ "네"가 YES입니다! |
| 건배 | Γειά μας (**야마스**) |
| 계산서 주세요 | Τον λογαριασμό, παρακαλώ (**톤 로가리아즈모, 파라칼로**) |
| 맛있어요 | Πολύ νόστιμο (**폴리 노스티모**) |
| 얼마예요? | Πόσο κάνει; (**포소 카니?**) |
| 화장실 어디예요? | Πού είναι η τουαλέτα; (**푸 이네 이 투알레타?**) |

---

## 9. 예산표 (1인 기준)
*2025년 물가 기준 대략치. 항공권 제외. 3인 숙소 공유 가정.*

| 항목 | 내역 | 금액 (€) |
|---|---|---|
| **숙소** | 3박, 3인 아파트 1실 €200/박 ÷ 3 | 약 200 |
| **입장료** | 아크로폴리스 30 + 아크로폴리스 박물관 20 + 국립고고학박물관 ~15 + 고대 아고라 ~20 + 로마 아고라 ~8 + 하드리아누스 도서관 ~6 + 올림피아 제우스 ~20 + 판아테나이코 ~12 + 수니온 ~20 (※통합권 비교) | 약 140~150 |
| **교통** | 공항 왕복(택시 1/3) ~28 + 시내 메트로 ~8 + 수니온 버스 왕복 ~14 + 택시 기타 ~10 | 약 60 |
| **식비** | 아침 €8 + 점심 €18 + 저녁 €35 + 카페·간식 €10 ≈ 하루 €70 × 3일 | 약 210 |
| **술·바** | 루프탑 칵테일, 와인 등 | 약 40 |
| **기념품·기타** | | 약 40~80 |
| **합계** | | **약 €690~740 (약 105~115만 원)** |

> 💡 수니온을 **반나절 투어**로 바꾸면 +€40~50, **프라이빗 택시**로 바꾸면 +€40~60.

---

## 10. 안전·매너·비상 연락처

### 10-1. 소매치기 ⚠️
아테네는 강력범죄는 드물지만 **소매치기가 매우 흔합니다.**
- 🔴 **위험 구역**: 메트로 **1호선(초록선)** 특히 Monastiraki~Omonia~Piraeus 구간, **공항 메트로**, 모나스티라키 광장, 아크로폴리스 입구 혼잡 구간, 오모니아 광장.
- 수법: 문 닫히기 직전 밀치기, 지도 들고 길 묻기, 서명 운동(설문지), 팔찌 강매.
- 대책: **휴대폰 뒷주머니 금지**, 크로스백은 앞으로, 3명이 **서로 뒤를 봐주기**, 지갑 분산.

### 10-2. 사기 주의
- 신타그마 광장 **비둘기 모이 → 손에 쥐어주고 돈 요구**
- 친근하게 다가와 "**바(bar) 가자**" → 바가지 술값 (특히 남성 여행객 대상 고전적 수법)
- 택시 미터기 미작동 → 앱 택시 이용

### 10-3. 유적지 매너
- 대리석·기둥 **만지기, 올라가기, 앉기 금지** (호루라기 불며 경비원이 바로 제지).
- 유적에서 돌멩이 줍기 **절대 금지** — 문화재 반출로 처벌.
- 교회 입장 시 **민소매·반바지 지양**(일부 수도원·교회는 입장 거부). 얇은 셔츠 하나 챙기기.

### 10-4. 비상 연락처
| 용도 | 번호 |
|---|---|
| **유럽 통합 긴급번호** | **112** (영어 가능) |
| 경찰 | 100 |
| 관광경찰 (Tourist Police) | **1571** (영어 가능, 분실·사기 신고) |
| 구급차 | 166 |
| **외교부 영사콜센터 (24시간)** | **+82-2-3210-0404** |
| 주그리스 대한민국 대사관 | 외교부 해외안전여행 사이트(0404.go.kr) 또는 대사관 홈페이지에서 주소·긴급연락처 **출발 전 캡처해두기** |

- 여권 분실 대비: **여권 사본 + 여권 사진 2매** 따로 보관, 휴대폰에 여권 사진 저장.
- **해외여행자보험** 가입 권장.

---

## 11. 플랜 B (비·폭염·파업·휴관일)

### 11-1. 상황별 대처
| 상황 | 대처 |
|---|---|
| **폭염 (38°C↑)** | 아크로폴리스 낮 시간 폐쇄 가능 → 08:00 입장 고수. 오후는 박물관(냉방) 위주로. 13~17시 실외 활동 최소화 |
| **비** | DAY 1 ↔ DAY 2 순서 바꾸기 (비 오는 날 = 국립고고학박물관 + 아크로폴리스 박물관). 아크로폴리스 대리석은 비 오면 **극도로 미끄러움** |
| **파업 (Απεργία)** | 그리스는 교통·유적 직원 파업이 잦음. 보통 **전날 뉴스로 공지**. 전날 밤 구글에 "Athens strike [날짜]" 검색. 유적 파업 시 오전만 닫는 경우 많음 |
| **강풍** | 아크로폴리스·수니온 일부 폐쇄 가능 |
| **일요일** | 중앙시장 휴무 → DAY 3 점심을 플라카/모나스티라키로 대체 |
| **월요일** | 아크로폴리스 박물관 단축 운영 가능 |
| **화요일** | 국립고고학박물관 오후 개관 가능 → DAY 2 오후 배치라 대부분 문제없음 |
| **공휴일** | 1/1, 1/6, 3/25(독립기념일), 그리스 정교회 부활절(매년 다름), 5/1, 8/15, 10/28(오히 데이), 12/25~26 → 유적 휴관 또는 단축. **부활절 주간은 반드시 확인** |

### 11-2. 시간이 남거나 대체할 때 추천 장소
| 장소 | 소요 | 메모 |
|---|---|---|
| **케라메이코스 (Kerameikos)** | 1~1.5시간 | 고대 아테네 **공동묘지**. 페리클레스가 **전몰자 추도 연설**을 한 곳(투키디데스 『펠로폰네소스 전쟁사』). 성문 **디필론 문**, 아름다운 묘비 부조. 관광객 적고 조용함. 메트로 Thiseio/Kerameikos역. **역사 덕후 강추** |
| **베나키 박물관 (Benaki Museum)** | 2시간 | 선사시대~근대 그리스 문화사 총정리. 독립전쟁 유물 |
| **비잔틴·기독교 박물관** | 1.5시간 | 비잔틴 성화(이콘), 모자이크 |
| **키클라데스 미술관** | 1.5시간 | 키클라데스 인형 전문 |
| **리카베투스 언덕 (Lycabettus)** | 2시간 | 아테네 최고 높이(277m). 케이블카(푸니쿨라) 또는 도보. 야경·일몰 |
| **피레우스 항구** | 반나절 | 고대 아테네의 군항. 피레우스 고고학박물관(청동 아테나·아폴론 상) |
| **델포이 당일치기** | 하루 종일 | 세계의 배꼽, 아폴론 신탁소. 버스 편도 3시간. 일정이 4일 이상이면 **강력 추천** |
| **마라톤 전투지 (Marathon Tomb)** | 반나절 | BC 490 마라톤 전투 전사자 192명 무덤(소로스). 마라톤 박물관 |

---

## 12. 최종 체크리스트

### 출발 2~3주 전
- [ ] 아크로폴리스 **DAY 1 08:00 슬롯** 예매 (hhticket.gr) — 3인분
- [ ] 아크로폴리스 박물관 DAY 1 13:30 예매
- [ ] 통합권 vs 개별권 가격 비교 후 결정
- [ ] 숙소 예약 (마크리야니/쿠카키 추천)
- [ ] DAY 1 저녁 **Strofi 등 뷰 레스토랑 예약**
- [ ] 수니온: 버스로 갈지, 투어/택시로 갈지 결정 (투어면 예약)
- [ ] 여행자보험 가입

### 출발 1주 전
- [ ] 모든 유적·박물관 **운영시간 재확인** (계절 변경, 휴관일, 공휴일)
- [ ] KTEL 수니온 버스 시간표 확인 (ktelattikis.gr)
- [ ] 여행 날짜 아테네 **일몰 시각** 확인 → DAY 1 필로파포스, DAY 3 수니온 출발 시간 확정
- [ ] 그리스 공휴일·파업 예정 확인
- [ ] 앱 설치 (구글맵 오프라인, FREENOW/Uber, 번역)
- [ ] 이 문서 휴대폰에 오프라인 저장

### 매일 밤
- [ ] 다음 날 날씨 확인 (폭염/비/강풍)
- [ ] "Athens strike" 검색
- [ ] 휴대폰·보조배터리 충전
- [ ] 물병 비우고 세척, 다음 날 동선 1회 읽어보기

### 가방 속
- [ ] 여권 (+ 사본)
- [ ] 신용카드 2장 이상 (분산) + 현금 €
- [ ] 티켓 QR (스크린샷 저장 — 유적 안에서 데이터 안 터질 수 있음)
- [ ] 접지력 좋은 운동화 착용
- [ ] 모자, 선글라스, 선크림
- [ ] 물병
- [ ] 바람막이 (DAY 3 수니온 필수)
- [ ] 보조배터리

---

> 🏛️ **마지막 한마디**
> 파르테논 앞에 서면 "생각보다 작다"는 사람도, "사진이랑 차원이 다르다"는 사람도 있습니다. 차이는 **배경지식**입니다. 2,500년 전 페리클레스가 "우리 도시는 그리스의 학교다"라고 했던 그 자부심, 1687년의 폭발, 1801년의 엘긴, 지금도 계속되는 복원 — 그 모든 이야기를 알고 보면 돌 하나하나가 말을 겁니다. 셋이서 토론하며 걸으세요. **Καλό ταξίδι! (칼로 탁시디 — 좋은 여행 되세요!)**

`;function hh(e){const t=e.replace(/\r\n/g,`
`).match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);if(!t)throw new Error("Missing frontmatter block");const[,r,s]=t,o={};for(const l of r.split(`
`)){const i=l.indexOf(":");if(i===-1)continue;const c=l.slice(0,i).trim(),u=l.slice(i+1).trim();o[c]=u}if(!o.title||!o.date)throw new Error("Frontmatter must include title and date");return{frontmatter:{title:o.title,date:o.date},body:s.trim()}}function gh(e,n){return`---
title: ${e.title}
date: ${e.date}
---
${n}
`}const Wy={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:" "};function Gy(e){return e.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi,(n,t)=>{if(t[0]==="#"){const r=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);try{return String.fromCodePoint(r)}catch{return n}}return Wy[t.toLowerCase()]??n})}const Vy=new Set(["a","abbr","b","code","em","font","i","mark","small","span","strong","sub","sup","u"]);function zc(e){const n=e.replace(/<!--[\s\S]*?-->/g," ").replace(/<[!?][^>]*>/g," ").replace(/<(script|style|head|noscript|template)\b[\s\S]*?<\/\1\s*>/gi," ").replace(/<\/?([a-z][a-z0-9-]*)\b[^>]*>/gi,(t,r)=>Vy.has(r.toLowerCase())?"":" ");return Gy(n).replace(/\s+/g," ").trim()}function Ky(e,n){for(const t of[/<title\b[^>]*>([\s\S]*?)<\/title\s*>/i,/<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/i]){const r=t.exec(e),s=r?zc(r[1]):"";if(s)return s}return n}function xh(e,n){return`<!--post
title: ${e.title.replace(/\s+/g," ").replace(/-->/g,"--&gt;").trim()}
date: ${e.date}
-->
${n}`}function yh(e){const n=e.replace(/^﻿/,"").match(/^<!--post\r?\n([\s\S]*?)\r?\n-->\r?\n?([\s\S]*)$/);if(!n)throw new Error("Missing post comment");const t={};for(const r of n[1].split(/\r?\n/)){const s=r.indexOf(":");s!==-1&&(t[r.slice(0,s).trim()]=r.slice(s+1).trim())}if(!t.title||!t.date)throw new Error("Post comment must include title and date");return{title:t.title,date:t.date,html:n[2]}}const Jy=/<style data-post-css>[\s\S]*?<\/style>\n?/g,vh=e=>(e.split(/[?#]/)[0].split("/").pop()??"").toLowerCase();function Xy(e,n){if(n.length===0)return e;const t=new Set(n.map(c=>c.name.toLowerCase())),r=e.replace(Jy,"").replace(/<link\b[^>]*>/gi,c=>{const u=/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(c),d=u?u[1]??u[2]??u[3]??"":"";return/\brel\s*=\s*["']?[^"'>]*stylesheet/i.test(c)&&t.has(vh(d))?"":c}),o=`<style data-post-css>${(n.length===1?n[0].text:n.map(c=>`/* ${c.name} */
${c.text}`).join(`

`)).replace(/<\/style/gi,"<\\/style")}</style>`;if(/<\/head\s*>/i.test(r))return r.replace(/<\/head\s*>/i,c=>`${o}
${c}`);const l=/<html\b[^>]*>/i.exec(r);if(l){const c=l.index+l[0].length;return`${r.slice(0,c)}<head>${o}</head>${r.slice(c)}`}const i=/^\s*<!doctype[^>]*>/i.exec(r);return i?`${r.slice(0,i[0].length)}${o}${r.slice(i[0].length)}`:o+r}function Yy(e,n){const t=new Set(n.map(s=>s.toLowerCase())),r=[];for(const s of e.matchAll(/<(link|script|img|source)\b[^>]*>/gi)){const o=s[1].toLowerCase()==="link"?"href":"src",l=new RegExp(`\\b${o}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,"i").exec(s[0]),i=l?(l[1]??l[2]??l[3]??"").trim():"";!i||/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(i)||t.has(vh(i))||r.includes(i)||r.push(i)}return r}const qy=`<script>
(function () {
  function report() {
    var height = Math.ceil(document.documentElement.getBoundingClientRect().height);
    parent.postMessage({ type: 'post-frame-height', height: height }, '*');
  }
  if (window.ResizeObserver) {
    var observer = new ResizeObserver(report);
    observer.observe(document.documentElement);
  }
  window.addEventListener('load', report);
  window.addEventListener('resize', report);
  // The site asks once the page has loaded, in case the first reports were sent before the site was listening.
  window.addEventListener('message', function (event) {
    if (event.data === 'post-frame-ping') report();
  });
  report();
  document.addEventListener('click', function (event) {
    var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (!link) return;
    var href = link.getAttribute('href');
    if (/^(https?:)?\\/\\//i.test(href)) {
      event.preventDefault();
      window.open(link.href, '_blank', 'noopener');
    } else if (href.charAt(0) === '#') {
      var id = href.slice(1);
      try { id = decodeURIComponent(id); } catch (e) {}
      var target = id ? (document.getElementById(id) || document.getElementsByName(id)[0]) : document.documentElement;
      if (target) {
        event.preventDefault();
        var top = id ? target.getBoundingClientRect().top + window.pageYOffset : 0;
        parent.postMessage({ type: 'post-frame-scroll', top: top }, '*');
      }
    }
  });
})();
<\/script>`;function Qy(e){return e+qy}const ji=1e6;function Sh(e){return new TextEncoder().encode(e).length}const Dd={title:"",html:null,htmlName:null,css:[]};function Fl(e){return e.html===null?null:Xy(e.html,e.css)}function Hc(e){const n=Fl(e);return n===null?"HTML 파일을 선택하세요.":Sh(n)>ji?`파일이 너무 큽니다. HTML과 CSS를 합쳐 ${Math.floor(ji/1e3)}KB까지 올릴 수 있어요.`:null}function Wc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ft=Wc();function wh(e){Ft=e}const kh=/[&<>"']/,Zy=new RegExp(kh.source,"g"),bh=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ev=new RegExp(bh.source,"g"),nv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Rd=e=>nv[e];function Ue(e,n){if(n){if(kh.test(e))return e.replace(Zy,Rd)}else if(bh.test(e))return e.replace(ev,Rd);return e}const tv=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function rv(e){return e.replace(tv,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const sv=/(^|[^\[])\^/g;function K(e,n){let t=typeof e=="string"?e:e.source;n=n||"";const r={replace:(s,o)=>{let l=typeof o=="string"?o:o.source;return l=l.replace(sv,"$1"),t=t.replace(s,l),r},getRegex:()=>new RegExp(t,n)};return r}function Ld(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const as={exec:()=>null};function Od(e,n){const t=e.replace(/\|/g,(o,l,i)=>{let c=!1,u=l;for(;--u>=0&&i[u]==="\\";)c=!c;return c?"|":" |"}),r=t.split(/ \|/);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function Ur(e,n,t){const r=e.length;if(r===0)return"";let s=0;for(;s<r&&e.charAt(r-s-1)===n;)s++;return e.slice(0,r-s)}function ov(e,n){if(e.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===n[0])t++;else if(e[r]===n[1]&&(t--,t<0))return r;return-1}function Md(e,n,t,r){const s=n.href,o=n.title?Ue(n.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){r.state.inLink=!0;const i={type:"link",raw:t,href:s,title:o,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,i}return{type:"image",raw:t,href:s,title:o,text:Ue(l)}}function lv(e,n){const t=e.match(/^(\s+)(?:```)/);if(t===null)return n;const r=t[1];return n.split(`
`).map(s=>{const o=s.match(/^\s+/);if(o===null)return s;const[l]=o;return l.length>=r.length?s.slice(r.length):s}).join(`
`)}class dl{constructor(n){V(this,"options");V(this,"rules");V(this,"lexer");this.options=n||Ft}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Ur(r,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const r=t[0],s=lv(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let r=t[2].trim();if(/#$/.test(r)){const s=Ur(r,"#");(this.options.pedantic||!s||/ $/.test(s))&&(r=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:Ur(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let r=Ur(t[0],`
`).split(`
`),s="",o="";const l=[];for(;r.length>0;){let i=!1;const c=[];let u;for(u=0;u<r.length;u++)if(/^ {0,3}>/.test(r[u]))c.push(r[u]),i=!0;else if(!i)c.push(r[u]);else break;r=r.slice(u);const d=c.join(`
`),f=d.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");s=s?`${s}
${d}`:d,o=o?`${o}
${f}`:f;const m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,l,!0),this.lexer.state.top=m,r.length===0)break;const y=l[l.length-1];if((y==null?void 0:y.type)==="code")break;if((y==null?void 0:y.type)==="blockquote"){const v=y,w=v.raw+`
`+r.join(`
`),b=this.blockquote(w);l[l.length-1]=b,s=s.substring(0,s.length-v.raw.length)+b.raw,o=o.substring(0,o.length-v.text.length)+b.text;break}else if((y==null?void 0:y.type)==="list"){const v=y,w=v.raw+`
`+r.join(`
`),b=this.list(w);l[l.length-1]=b,s=s.substring(0,s.length-y.raw.length)+b.raw,o=o.substring(0,o.length-v.raw.length)+b.raw,r=w.substring(l[l.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:l,text:o}}}list(n){let t=this.rules.block.list.exec(n);if(t){let r=t[1].trim();const s=r.length>1,o={type:"list",raw:"",ordered:s,start:s?+r.slice(0,-1):"",loose:!1,items:[]};r=s?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=s?r:"[*+-]");const l=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let i=!1;for(;n;){let c=!1,u="",d="";if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;u=t[0],n=n.substring(u.length);let f=t[2].split(`
`,1)[0].replace(/^\t+/,h=>" ".repeat(3*h.length)),m=n.split(`
`,1)[0],y=!f.trim(),v=0;if(this.options.pedantic?(v=2,d=f.trimStart()):y?v=t[1].length+1:(v=t[2].search(/[^ ]/),v=v>4?1:v,d=f.slice(v),v+=t[1].length),y&&/^ *$/.test(m)&&(u+=m+`
`,n=n.substring(m.length+1),c=!0),!c){const h=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),p=new RegExp(`^ {0,${Math.min(3,v-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),g=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:\`\`\`|~~~)`),S=new RegExp(`^ {0,${Math.min(3,v-1)}}#`);for(;n;){const k=n.split(`
`,1)[0];if(m=k,this.options.pedantic&&(m=m.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),g.test(m)||S.test(m)||h.test(m)||p.test(n))break;if(m.search(/[^ ]/)>=v||!m.trim())d+=`
`+m.slice(v);else{if(y||f.search(/[^ ]/)>=4||g.test(f)||S.test(f)||p.test(f))break;d+=`
`+m}!y&&!m.trim()&&(y=!0),u+=k+`
`,n=n.substring(k.length+1),f=m.slice(v)}}o.loose||(i?o.loose=!0:/\n *\n *$/.test(u)&&(i=!0));let w=null,b;this.options.gfm&&(w=/^\[[ xX]\] /.exec(d),w&&(b=w[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:u,task:!!w,checked:b,loose:!1,text:d,tokens:[]}),o.raw+=u}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let c=0;c<o.items.length;c++)if(this.lexer.state.top=!1,o.items[c].tokens=this.lexer.blockTokens(o.items[c].text,[]),!o.loose){const u=o.items[c].tokens.filter(f=>f.type==="space"),d=u.length>0&&u.some(f=>/\n.*\n/.test(f.raw));o.loose=d}if(o.loose)for(let c=0;c<o.items.length;c++)o.items[c].loose=!0;return o}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:s,title:o}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const r=Od(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===s.length){for(const i of s)/^ *-+: *$/.test(i)?l.align.push("right"):/^ *:-+: *$/.test(i)?l.align.push("center"):/^ *:-+ *$/.test(i)?l.align.push("left"):l.align.push(null);for(let i=0;i<r.length;i++)l.header.push({text:r[i],tokens:this.lexer.inline(r[i]),header:!0,align:l.align[i]});for(const i of o)l.rows.push(Od(i,l.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:l.align[u]})));return l}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Ue(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const l=Ur(r.slice(0,-1),"\\");if((r.length-l.length)%2===0)return}else{const l=ov(t[2],"()");if(l>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let s=t[2],o="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);l&&(s=l[1],o=l[3])}else o=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(r)?s=s.slice(1):s=s.slice(1,-1)),Md(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let r;if((r=this.rules.inline.reflink.exec(n))||(r=this.rules.inline.nolink.exec(n))){const s=(r[2]||r[1]).replace(/\s+/g," "),o=t[s.toLowerCase()];if(!o){const l=r[0].charAt(0);return{type:"text",raw:l,text:l}}return Md(r,o,r[0],this.lexer)}}emStrong(n,t,r=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!s||s[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const l=[...s[0]].length-1;let i,c,u=l,d=0;const f=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*n.length+l);(s=f.exec(t))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(c=[...i].length,s[3]||s[4]){u+=c;continue}else if((s[5]||s[6])&&l%3&&!((l+c)%3)){d+=c;continue}if(u-=c,u>0)continue;c=Math.min(c,c+u+d);const m=[...s[0]][0].length,y=n.slice(0,l+s.index+m+c);if(Math.min(l,c)%2){const w=y.slice(1,-1);return{type:"em",raw:y,text:w,tokens:this.lexer.inlineTokens(w)}}const v=y.slice(2,-2);return{type:"strong",raw:y,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let r=t[2].replace(/\n/g," ");const s=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return s&&o&&(r=r.substring(1,r.length-1)),r=Ue(r,!0),{type:"codespan",raw:t[0],text:r}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let r,s;return t[2]==="@"?(r=Ue(t[1]),s="mailto:"+r):(r=Ue(t[1]),s=r),{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(n){var r;let t;if(t=this.rules.inline.url.exec(n)){let s,o;if(t[2]==="@")s=Ue(t[0]),o="mailto:"+s;else{let l;do l=t[0],t[0]=((r=this.rules.inline._backpedal.exec(t[0]))==null?void 0:r[0])??"";while(l!==t[0]);s=Ue(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let r;return this.lexer.state.inRawBlock?r=t[0]:r=Ue(t[0]),{type:"text",raw:t[0],text:r}}}}const av=/^(?: *(?:\n|$))+/,iv=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,cv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Us=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,uv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ch=/(?:[*+-]|\d{1,9}[.)])/,Nh=K(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Ch).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Gc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,dv=/^[^\n]+/,Vc=/(?!\s*\])(?:\\.|[^\[\]\\])+/,pv=K(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Vc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),fv=K(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ch).getRegex(),Ul="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Kc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,mv=K("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Kc).replace("tag",Ul).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ph=K(Gc).replace("hr",Us).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex(),hv=K(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ph).getRegex(),Jc={blockquote:hv,code:iv,def:pv,fences:cv,heading:uv,hr:Us,html:mv,lheading:Nh,list:fv,newline:av,paragraph:Ph,table:as,text:dv},$d=K("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Us).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex(),gv={...Jc,table:$d,paragraph:K(Gc).replace("hr",Us).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",$d).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex()},xv={...Jc,html:K(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Kc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:as,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:K(Gc).replace("hr",Us).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Nh).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},jh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,yv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Eh=/^( {2,}|\\)\n(?!\s*$)/,vv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Bs="\\p{P}\\p{S}",Sv=K(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Bs).getRegex(),wv=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,kv=K(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Bs).getRegex(),bv=K("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Bs).getRegex(),Cv=K("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Bs).getRegex(),Nv=K(/\\([punct])/,"gu").replace(/punct/g,Bs).getRegex(),Pv=K(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),jv=K(Kc).replace("(?:-->|$)","-->").getRegex(),Ev=K("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",jv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),pl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Tv=K(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",pl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Th=K(/^!?\[(label)\]\[(ref)\]/).replace("label",pl).replace("ref",Vc).getRegex(),Ah=K(/^!?\[(ref)\](?:\[\])?/).replace("ref",Vc).getRegex(),Av=K("reflink|nolink(?!\\()","g").replace("reflink",Th).replace("nolink",Ah).getRegex(),Xc={_backpedal:as,anyPunctuation:Nv,autolink:Pv,blockSkip:wv,br:Eh,code:yv,del:as,emStrongLDelim:kv,emStrongRDelimAst:bv,emStrongRDelimUnd:Cv,escape:jh,link:Tv,nolink:Ah,punctuation:Sv,reflink:Th,reflinkSearch:Av,tag:Ev,text:vv,url:as},Iv={...Xc,link:K(/^!?\[(label)\]\((.*?)\)/).replace("label",pl).getRegex(),reflink:K(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",pl).getRegex()},Ei={...Xc,escape:K(jh).replace("])","~|])").getRegex(),url:K(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},_v={...Ei,br:K(Eh).replace("{2,}","*").getRegex(),text:K(Ei.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},uo={normal:Jc,gfm:gv,pedantic:xv},Br={normal:Xc,gfm:Ei,breaks:_v,pedantic:Iv};class yn{constructor(n){V(this,"tokens");V(this,"options");V(this,"state");V(this,"tokenizer");V(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Ft,this.options.tokenizer=this.options.tokenizer||new dl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:uo.normal,inline:Br.normal};this.options.pedantic?(t.block=uo.pedantic,t.inline=Br.pedantic):this.options.gfm&&(t.block=uo.gfm,this.options.breaks?t.inline=Br.breaks:t.inline=Br.gfm),this.tokenizer.rules=t}static get rules(){return{block:uo,inline:Br}}static lex(n,t){return new yn(t).lex(n)}static lexInline(n,t){return new yn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],r=!1){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(i,c,u)=>c+"    ".repeat(u.length));let s,o,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(i=>(s=i.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(l=n,this.options.extensions&&this.options.extensions.startBlock){let i=1/0;const c=n.slice(1);let u;this.options.extensions.startBlock.forEach(d=>{u=d.call({lexer:this},c),typeof u=="number"&&u>=0&&(i=Math.min(i,u))}),i<1/0&&i>=0&&(l=n.substring(0,i+1))}if(this.state.top&&(s=this.tokenizer.paragraph(l))){o=t[t.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),r=l.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(n){const i="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let r,s,o,l=n,i,c,u;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)d.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,i.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(c||(u=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(r=d.call({lexer:this},n,t))?(n=n.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(n)){n=n.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(n,l,u)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(n)){n=n.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(n))){n=n.substring(r.raw.length),t.push(r);continue}if(o=n,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const f=n.slice(1);let m;this.options.extensions.startInline.forEach(y=>{m=y.call({lexer:this},f),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(o=n.substring(0,d+1))}if(r=this.tokenizer.inlineText(o)){n=n.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(u=r.raw.slice(-1)),c=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(n){const d="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}}class fl{constructor(n){V(this,"options");V(this,"parser");this.options=n||Ft}space(n){return""}code({text:n,lang:t,escaped:r}){var l;const s=(l=(t||"").match(/^\S*/))==null?void 0:l[0],o=n.replace(/\n$/,"")+`
`;return s?'<pre><code class="language-'+Ue(s)+'">'+(r?o:Ue(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Ue(o,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,r=n.start;let s="";for(let i=0;i<n.items.length;i++){const c=n.items[i];s+=this.listitem(c)}const o=t?"ol":"ul",l=t&&r!==1?' start="'+r+'"':"";return"<"+o+l+`>
`+s+"</"+o+`>
`}listitem(n){let t="";if(n.task){const r=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=r+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=r+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):t+=r+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",r="";for(let o=0;o<n.header.length;o++)r+=this.tablecell(n.header[o]);t+=this.tablerow({text:r});let s="";for(let o=0;o<n.rows.length;o++){const l=n.rows[o];r="";for(let i=0;i<l.length;i++)r+=this.tablecell(l[i]);s+=this.tablerow({text:r})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:r}){const s=this.parser.parseInline(r),o=Ld(n);if(o===null)return s;n=o;let l='<a href="'+n+'"';return t&&(l+=' title="'+t+'"'),l+=">"+s+"</a>",l}image({href:n,title:t,text:r}){const s=Ld(n);if(s===null)return r;n=s;let o=`<img src="${n}" alt="${r}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Yc{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class vn{constructor(n){V(this,"options");V(this,"renderer");V(this,"textRenderer");this.options=n||Ft,this.options.renderer=this.options.renderer||new fl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Yc}static parse(n,t){return new vn(t).parse(n)}static parseInline(n,t){return new vn(t).parseInline(n)}parse(n,t=!0){let r="";for(let s=0;s<n.length;s++){const o=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const i=o,c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(i.type)){r+=c||"";continue}}const l=o;switch(l.type){case"space":{r+=this.renderer.space(l);continue}case"hr":{r+=this.renderer.hr(l);continue}case"heading":{r+=this.renderer.heading(l);continue}case"code":{r+=this.renderer.code(l);continue}case"table":{r+=this.renderer.table(l);continue}case"blockquote":{r+=this.renderer.blockquote(l);continue}case"list":{r+=this.renderer.list(l);continue}case"html":{r+=this.renderer.html(l);continue}case"paragraph":{r+=this.renderer.paragraph(l);continue}case"text":{let i=l,c=this.renderer.text(i);for(;s+1<n.length&&n[s+1].type==="text";)i=n[++s],c+=`
`+this.renderer.text(i);t?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c}]}):r+=c;continue}default:{const i='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return r}parseInline(n,t){t=t||this.renderer;let r="";for(let s=0;s<n.length;s++){const o=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const i=this.options.extensions.renderers[o.type].call({parser:this},o);if(i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=i||"";continue}}const l=o;switch(l.type){case"escape":{r+=t.text(l);break}case"html":{r+=t.html(l);break}case"link":{r+=t.link(l);break}case"image":{r+=t.image(l);break}case"strong":{r+=t.strong(l);break}case"em":{r+=t.em(l);break}case"codespan":{r+=t.codespan(l);break}case"br":{r+=t.br(l);break}case"del":{r+=t.del(l);break}case"text":{r+=t.text(l);break}default:{const i='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return r}}class is{constructor(n){V(this,"options");this.options=n||Ft}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}V(is,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Dn,Ih,Ti,_h;class Dv{constructor(...n){pu(this,Dn);V(this,"defaults",Wc());V(this,"options",this.setOptions);V(this,"parse",Ir(this,Dn,Ti).call(this,yn.lex,vn.parse));V(this,"parseInline",Ir(this,Dn,Ti).call(this,yn.lexInline,vn.parseInline));V(this,"Parser",vn);V(this,"Renderer",fl);V(this,"TextRenderer",Yc);V(this,"Lexer",yn);V(this,"Tokenizer",dl);V(this,"Hooks",is);this.use(...n)}walkTokens(n,t){var s,o;let r=[];for(const l of n)switch(r=r.concat(t.call(this,l)),l.type){case"table":{const i=l;for(const c of i.header)r=r.concat(this.walkTokens(c.tokens,t));for(const c of i.rows)for(const u of c)r=r.concat(this.walkTokens(u.tokens,t));break}case"list":{const i=l;r=r.concat(this.walkTokens(i.items,t));break}default:{const i=l;(o=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&o[i.type]?this.defaults.extensions.childTokens[i.type].forEach(c=>{const u=i[c].flat(1/0);r=r.concat(this.walkTokens(u,t))}):i.tokens&&(r=r.concat(this.walkTokens(i.tokens,t)))}}return r}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(r=>{const s={...r};if(s.async=this.defaults.async||s.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const l=t.renderers[o.name];l?t.renderers[o.name]=function(...i){let c=o.renderer.apply(this,i);return c===!1&&(c=l.apply(this,i)),c}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[o.level];l?l.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),s.extensions=t),r.renderer){const o=this.defaults.renderer||new fl(this.defaults);for(const l in r.renderer){if(!(l in o))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;const i=l;let c=r.renderer[i];r.useNewRenderer||(c=Ir(this,Dn,Ih).call(this,c,i,o));const u=o[i];o[i]=(...d)=>{let f=c.apply(o,d);return f===!1&&(f=u.apply(o,d)),f||""}}s.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new dl(this.defaults);for(const l in r.tokenizer){if(!(l in o))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const i=l,c=r.tokenizer[i],u=o[i];o[i]=(...d)=>{let f=c.apply(o,d);return f===!1&&(f=u.apply(o,d)),f}}s.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new is;for(const l in r.hooks){if(!(l in o))throw new Error(`hook '${l}' does not exist`);if(l==="options")continue;const i=l,c=r.hooks[i],u=o[i];is.passThroughHooks.has(l)?o[i]=d=>{if(this.defaults.async)return Promise.resolve(c.call(o,d)).then(m=>u.call(o,m));const f=c.call(o,d);return u.call(o,f)}:o[i]=(...d)=>{let f=c.apply(o,d);return f===!1&&(f=u.apply(o,d)),f}}s.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,l=r.walkTokens;s.walkTokens=function(i){let c=[];return c.push(l.call(this,i)),o&&(c=c.concat(o.call(this,i))),c}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return yn.lex(n,t??this.defaults)}parser(n,t){return vn.parse(n,t??this.defaults)}}Dn=new WeakSet,Ih=function(n,t,r){switch(t){case"heading":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,r.parser.parseInline(s.tokens),s.depth,rv(r.parser.parseInline(s.tokens,r.parser.textRenderer)))};case"code":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.lang,!!s.escaped)};case"table":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);let o="",l="";for(let c=0;c<s.header.length;c++)l+=this.tablecell({text:s.header[c].text,tokens:s.header[c].tokens,header:!0,align:s.align[c]});o+=this.tablerow({text:l});let i="";for(let c=0;c<s.rows.length;c++){const u=s.rows[c];l="";for(let d=0;d<u.length;d++)l+=this.tablecell({text:u[d].text,tokens:u[d].tokens,header:!1,align:s.align[d]});i+=this.tablerow({text:l})}return n.call(this,o,i)};case"blockquote":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const o=this.parser.parse(s.tokens);return n.call(this,o)};case"list":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const o=s.ordered,l=s.start,i=s.loose;let c="";for(let u=0;u<s.items.length;u++){const d=s.items[u],f=d.checked,m=d.task;let y="";if(d.task){const v=this.checkbox({checked:!!f});i?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=v+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=v+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:v+" "}):y+=v+" "}y+=this.parser.parse(d.tokens,i),c+=this.listitem({type:"list_item",raw:y,text:y,task:m,checked:!!f,loose:i,tokens:d.tokens})}return n.call(this,c,o,l)};case"html":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.block)};case"paragraph":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"escape":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"link":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,this.parser.parseInline(s.tokens))};case"image":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,s.text)};case"strong":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"em":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"codespan":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"del":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"text":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)}}return n},Ti=function(n,t){return(r,s)=>{const o={...s},l={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const i=Ir(this,Dn,_h).call(this,!!l.silent,!!l.async);if(typeof r>"u"||r===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(r):r).then(c=>n(c,l)).then(c=>l.hooks?l.hooks.processAllTokens(c):c).then(c=>l.walkTokens?Promise.all(this.walkTokens(c,l.walkTokens)).then(()=>c):c).then(c=>t(c,l)).then(c=>l.hooks?l.hooks.postprocess(c):c).catch(i);try{l.hooks&&(r=l.hooks.preprocess(r));let c=n(r,l);l.hooks&&(c=l.hooks.processAllTokens(c)),l.walkTokens&&this.walkTokens(c,l.walkTokens);let u=t(c,l);return l.hooks&&(u=l.hooks.postprocess(u)),u}catch(c){return i(c)}}},_h=function(n,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const s="<p>An error occurred:</p><pre>"+Ue(r.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(r);throw r}};const Rt=new Dv;function W(e,n){return Rt.parse(e,n)}W.options=W.setOptions=function(e){return Rt.setOptions(e),W.defaults=Rt.defaults,wh(W.defaults),W};W.getDefaults=Wc;W.defaults=Ft;W.use=function(...e){return Rt.use(...e),W.defaults=Rt.defaults,wh(W.defaults),W};W.walkTokens=function(e,n){return Rt.walkTokens(e,n)};W.parseInline=Rt.parseInline;W.Parser=vn;W.parser=vn.parse;W.Renderer=fl;W.TextRenderer=Yc;W.Lexer=yn;W.lexer=yn.lex;W.Tokenizer=dl;W.Hooks=is;W.parse=W;W.options;W.setOptions;W.use;W.walkTokens;W.parseInline;vn.parse;yn.lex;function Rv(e){return e.replace(/^[ \t]*[|:\- \t]*-{3}[|:\- \t]*$/gm," ").replace(/^\s{0,3}#{1,6}\s+/gm,"").replace(/^\s*(?:[-*+]|\d+\.)\s+/gm,"").replace(/^\s*>\s?/gm,"").replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm," ").replace(/!\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/\*\*|__|~~|`/g,"").replace(/\*(\S[^*]*?)\*/g,"$1").replace(/\|/g," ")}function Dh(e,n=!1){const t=[];let r=[],s=null;const o=()=>{r.length>0&&t.push(Rv(r.join(`
`))),r=[]};for(const l of e.split(`
`))/^\s{0,3}```/.test(l)?s===null?(o(),s=[]):(n&&t.push(s.join(`
`)),s=null):s===null?r.push(l):s.push(l);return o(),s!==null&&n&&t.push(s.join(`
`)),t.join(" ").replace(/\s+/g," ").trim()}function Lv(e,n,t=80){const r=Dh(qc(e,n));return r.length>t?`${r.slice(0,t)}...`:r}function qc(e,n){const t=e.split(`
`),r=t.findIndex(o=>o.trim()!=="");if(r===-1||t[r].trimEnd()!==`# ${n}`)return e;let s=r+1;for(;s<t.length&&t[s].trim()==="";)s+=1;return t.slice(s).join(`
`)}function Ov(e){return e.replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&")}function Mv(e){return e.toLowerCase().replace(/[^\p{L}\p{M}\p{N}_ -]/gu,"").replace(/ /g,"-")}function Rh(e,n){const t=W.parse(qc(e,n),{async:!1}),r=new Map;return t.replace(/<h([1-6])>([\s\S]*?)<\/h\1>/g,(s,o,l)=>{const i=Mv(Ov(l)),c=r.get(i)??0;r.set(i,c+1);const u=c===0?i:`${i}-${c}`;return`<h${o} id="${u}">${l}</h${o}>`})}function $v(e){if(!e.startsWith("#")||e.length===1)return null;const n=e.slice(1);try{return decodeURIComponent(n)}catch{return n}}const va=80,Fv=Object.assign({"/src/content/posts/2026-10-06-18d8nk.md":Ty,"/src/content/posts/2026-10-06-dd7f50.md":Ay,"/src/content/posts/2026-10-06-hicvn4.md":Iy,"/src/content/posts/2026-10-06-lj520p.md":_y,"/src/content/posts/2026-10-06-orbtn7.md":Dy,"/src/content/posts/2026-10-07-26ryr4.md":Ry,"/src/content/posts/2026-10-07-81vtvs.md":Ly,"/src/content/posts/2026-10-07-905xsv.md":Oy,"/src/content/posts/2026-10-12-dmya75.md":My,"/src/content/posts/2026-10-12-fqjs3t.md":$y,"/src/content/posts/2026-10-12-iqj4r0.md":Fy,"/src/content/posts/2026-10-12-qngb1m.md":Uy,"/src/content/posts/2026-10-13-76ve33.md":By,"/src/content/posts/2026-10-14-b2s52w.md":zy,"/src/content/posts/2026-10-22-zjsrfm.md":Hy});function Uv(e){const n=e.match(/([^/]+)\.(?:md|html)$/);if(!n)throw new Error(`Unexpected post file path: ${e}`);return n[1]}function Bv(e,n){const t=Uv(e),r=e.replace(/^\//,"");if(e.endsWith(".html")){const{title:l,date:i,html:c}=yh(n),u=zc(c),d=u.length>va?`${u.slice(0,va)}...`:u;return{slug:t,format:"html",path:r,title:l,date:i,excerpt:d,body:c}}const{frontmatter:s,body:o}=hh(n);return{slug:t,format:"md",path:r,title:s.title,date:s.date,excerpt:Lv(o,s.title,va),body:o}}const Ar=Object.entries(Fv).map(([e,n])=>Bv(e,n)).sort((e,n)=>e.date<n.date?1:e.date>n.date?-1:0);function Fd(e){const n=Math.random().toString(36).slice(2,8);return`${e}-${n}`}function Sa(){const e=new Date,n=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${n}-${t}-${r}`}function zv({post:e}){return a.jsx(pn,{to:`/blog/${e.slug}`,className:"block",children:a.jsxs("article",{className:"card",children:[a.jsx("h3",{className:"card-title",children:e.title}),a.jsxs("p",{className:"mt-1 text-sm text-muted",children:[e.date,e.format==="html"&&a.jsx("span",{className:"tag ml-2",children:"HTML"})]}),a.jsx("p",{className:"mt-2 text-foreground/80",children:e.excerpt})]})})}function Hv(){return a.jsxs("section",{children:[a.jsx("h2",{className:"text-xl font-semibold",children:"최신 글"}),a.jsx("div",{className:"mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:Ar.slice(0,3).map(e=>a.jsx(zv,{post:e},e.slug))})]})}const Ud=200,wa=40;function zt({values:e,label:n,current:t,window:r}){const s=Math.min(...e),l=Math.max(...e)-s||1,i=e.map((c,u)=>{const d=u/(e.length-1)*Ud,f=wa-4-(c-s)/l*(wa-8);return`${d.toFixed(1)},${f.toFixed(1)}`}).join(" ");return a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-baseline justify-between font-mono text-xs",children:[a.jsx("span",{className:"text-muted",children:n}),a.jsx("span",{children:t})]}),e.length<2?a.jsx("p",{className:"mt-1 font-mono text-xs text-muted",children:"값을 모으는 중..."}):a.jsx("svg",{viewBox:`0 0 ${Ud} ${wa}`,preserveAspectRatio:"none",role:"img","aria-label":`${n}: 최근 ${r}, 현재 ${t}`,className:"mt-1 h-10 w-full rounded border border-border bg-background",children:a.jsx("polyline",{points:i,fill:"none",stroke:"rgb(var(--color-accent))",strokeWidth:"1.5",vectorEffect:"non-scaling-stroke",strokeLinejoin:"round"})}),e.length>=2&&a.jsxs("p",{className:"mt-1 text-right font-mono text-[11px] text-muted",children:["최근 ",r]})]})}const Qc="https://shinheeyoun.duckdns.org";function Wv(e,n,t){return n==="https:"&&e.startsWith("http:")?null:`${e}/status/api`}function Lh(e,n,t){return n==="https:"&&e.startsWith("http:")?null:e}const Oh=e=>typeof e=="object"&&e!==null,O=e=>typeof e=="number"&&Number.isFinite(e)?e:null,Ht=e=>typeof e=="string"?e:"",hn=e=>Oh(e)?e:{};function Gv(e){if(!Oh(e))return null;const n=hn(e.os),t=hn(e.host),r=hn(e.heap),s=hn(e.jvm),o=hn(s.threadStates),l=hn(e.threads),i=hn(e.http),c=hn(e.gc),u=hn(e.cpu),d=O(e.uptimeMs),f=O(r.used),m=O(l.live);if(d===null||f===null||m===null)return null;const y=[];if(Array.isArray(e.history))for(const v of e.history){const w=hn(v),b=O(w.t),h=O(w.heap),p=O(w.threads);b!==null&&h!==null&&p!==null&&y.push({t:b,heap:h,threads:p,busy:O(w.busy),cpu:O(w.cpu),req:O(w.req),mem:O(w.mem)})}return{tomcat:Ht(e.tomcat),java:Ht(e.java),vm:Ht(e.vm),vendor:Ht(e.vendor),uptimeMs:d,os:{name:Ht(n.name),arch:Ht(n.arch),uptimeMs:O(n.uptimeMs)},host:{memTotal:O(t.memTotal),memAvailable:O(t.memAvailable),swapTotal:O(t.swapTotal),swapFree:O(t.swapFree),diskTotal:O(t.diskTotal),diskUsable:O(t.diskUsable),fdOpen:O(t.fdOpen),fdMax:O(t.fdMax)},heap:{used:f,committed:O(r.committed)??f,max:O(r.max)},nonHeapUsed:O(e.nonHeapUsed),jvm:{metaspace:O(s.metaspace),classes:O(s.classes),threadStates:{runnable:O(o.runnable),waiting:O(o.waiting),timedWaiting:O(o.timedWaiting),blocked:O(o.blocked)}},threads:{live:m,peak:O(l.peak)??m,daemon:O(l.daemon)??0},http:{threadsBusy:O(i.threadsBusy),threadsMax:O(i.threadsMax),requests:O(i.requests),errors:O(i.errors),avgMs:O(i.avgMs),maxMs:O(i.maxMs),bytesIn:O(i.bytesIn),bytesOut:O(i.bytesOut),connections:O(i.connections),sessions:O(i.sessions)},gc:{count:O(c.count)??0,millis:O(c.millis)??0},cpu:{process:O(u.process),system:O(u.system),cores:O(u.cores),loadAverage:O(u.loadAverage)},history:y}}function Vv(e){const n=[];for(let t=1;t<e.length;t++){const r=e[t-1],s=e[t];if(r.req===null||s.req===null)continue;const o=(s.t-r.t)/1e3,l=s.req-r.req;o<=0||l<0||n.push(l/o)}return n}function Un(e){const n=Math.max(0,Math.floor(e/1e3)),t=Math.floor(n/86400),r=Math.floor(n%86400/3600),s=Math.floor(n%3600/60);return t>0?`${t}일 ${r}시간`:r>0?`${r}시간 ${s}분`:s>0?`${s}분`:`${n}초`}function bt(e){const n=e/1048576;return n>=1024?`${(n/1024).toFixed(1)} GB`:n>=1?`${Math.round(n)} MB`:`${Math.round(e/1024)} KB`}function Bd(e){return e===null?"-":e>=1e3?`${(e/1e3).toFixed(1)}초`:`${Number.isInteger(e)?e:e.toFixed(1)}ms`}function Kv(e){return e===0?"0/s":e>=10?`${Math.round(e)}/s`:`${Number(e.toFixed(2))}/s`}function ka(e){if(e===null)return"-";const n=e*100;return`${n<10?n.toFixed(1).replace(/\.0$/,""):Math.round(n)}%`}const Jv=1e4,Xv=5e3;function Yv(){const e=Wv(Qc,window.location.protocol),[n,t]=x.useState(e?{kind:"loading"}:{kind:"preparing"});return x.useEffect(()=>{if(!e)return;let r=!1,s=0,o;async function l(){o=new AbortController;const u=window.setTimeout(()=>o==null?void 0:o.abort(),Xv);try{const d=await fetch(e,{signal:o.signal}),f=d.ok?Gv(await d.json()):null;r||t(f?{kind:"online",status:f}:{kind:"offline"})}catch{r||t({kind:"offline"})}finally{window.clearTimeout(u)}}function i(){s=window.setTimeout(async()=>{document.visibilityState==="visible"&&await l(),r||i()},Jv)}function c(){document.visibilityState==="visible"&&l()}return l().then(()=>{r||i()}),document.addEventListener("visibilitychange",c),()=>{r=!0,window.clearTimeout(s),o==null||o.abort(),document.removeEventListener("visibilitychange",c)}},[e]),n}function po({label:e,value:n,sub:t}){return a.jsxs("div",{children:[a.jsx("div",{className:"font-mono text-xs text-muted",children:e}),a.jsx("div",{className:"font-mono text-lg font-semibold",children:n}),t&&a.jsx("div",{className:"font-mono text-xs text-muted",children:t})]})}function qv({label:e,percent:n}){return a.jsx("div",{role:"img","aria-label":`${e} ${Math.round(n)}%`,className:"mt-1 h-1.5 w-full overflow-hidden rounded bg-border",children:a.jsx("div",{className:"h-full bg-accent",style:{width:`${Math.min(100,n)}%`}})})}function ba({title:e,children:n}){return a.jsxs("div",{children:[a.jsx("h3",{className:"font-mono text-xs font-semibold text-accent",children:e}),a.jsx("dl",{className:"mt-2 space-y-1.5",children:n})]})}function q({label:e,value:n,bar:t}){return a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-baseline justify-between gap-3 font-mono text-xs",children:[a.jsx("dt",{className:"shrink-0 text-muted",children:e}),a.jsx("dd",{className:"text-right",children:n})]}),t&&a.jsx(qv,{label:t.label,percent:t.percent})]})}const ml=(e,n)=>e===null?"-":n(e),mt=e=>ml(e,n=>n.toLocaleString("ko-KR")),zr=e=>ml(e,bt);function fo(e,n){return e===null||n===null||n<=0?{text:"-",percent:null}:{text:`${bt(e)} / ${bt(n)}`,percent:e/n*100}}function Qv({status:e}){const{heap:n,threads:t,http:r,cpu:s,gc:o,history:l,host:i,jvm:c,os:u}=e,d=n.max?Math.min(100,n.used/n.max*100):null,f=l.length>1?l[l.length-1].t-l[0].t:0,m=i.memTotal!==null&&i.memAvailable!==null?i.memTotal-i.memAvailable:null,y=i.swapTotal!==null&&i.swapFree!==null?i.swapTotal-i.swapFree:null,v=i.diskTotal!==null&&i.diskUsable!==null?i.diskTotal-i.diskUsable:null,w=fo(m,i.memTotal),b=fo(y,i.swapTotal),h=fo(v,i.diskTotal),p=fo(n.used,n.max),g=Vv(l),S=g.length>0?g[g.length-1]:null,k=l.filter(L=>L.cpu!==null).map(L=>L.cpu),C=l.filter(L=>L.mem!==null).map(L=>L.mem),E=l.filter(L=>L.busy!==null).map(L=>L.busy),N=L=>L.length>0?L[L.length-1]:null,U=c.threadStates,I=[["실행",U.runnable],["대기",U.waiting],["시간 대기",U.timedWaiting],["차단",U.blocked]].map(([L,J])=>`${L} ${J??"-"}`).join(" · ");return a.jsxs("div",{children:[a.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-2 font-mono text-sm",children:[a.jsxs("span",{children:[a.jsxs("span",{className:"text-accent","aria-hidden":"true",children:["●"," "]}),"online"]}),a.jsxs("span",{className:"text-muted",children:[e.tomcat," · Java ",e.java]})]}),a.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4 md:grid-cols-4",children:[a.jsx(po,{label:"업타임",value:Un(e.uptimeMs),sub:"Tomcat 시작 후"}),a.jsxs("div",{children:[a.jsx(po,{label:"힙 메모리",value:bt(n.used),sub:n.max?`최대 ${bt(n.max)}`:void 0}),d!==null&&a.jsx("div",{role:"img","aria-label":`힙 사용률 ${Math.round(d)}%`,className:"mt-1 h-1.5 w-full overflow-hidden rounded bg-border",children:a.jsx("div",{className:"h-full bg-accent",style:{width:`${d}%`}})})]}),a.jsx(po,{label:"스레드",value:String(t.live),sub:`최고 ${t.peak}개`}),a.jsx(po,{label:"HTTP 요청",value:r.requests===null?"-":r.requests.toLocaleString("ko-KR"),sub:`오류 ${r.errors??"-"} · 처리 중 ${r.threadsBusy??"-"}/${r.threadsMax??"-"}`})]}),a.jsxs("div",{className:"mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[a.jsx(zt,{label:"힙 사용량",current:bt(n.used),window:Un(f),values:l.map(L=>L.heap)}),a.jsx(zt,{label:"스레드 수",current:`${t.live}개`,window:Un(f),values:l.map(L=>L.threads)}),a.jsx(zt,{label:"CPU (서버 전체)",current:ka(N(k)??s.system),window:Un(f),values:k}),a.jsx(zt,{label:"서버 메모리 사용량",current:zr(N(C)??m),window:Un(f),values:C}),a.jsx(zt,{label:"초당 요청",current:S===null?"-":Kv(S),window:Un(f),values:g}),a.jsx(zt,{label:"처리 중인 요청",current:ml(N(E),L=>`${L}개`),window:Un(f),values:E})]}),a.jsxs("div",{className:"mt-6 grid gap-6 border-t border-border pt-5 md:grid-cols-3",children:[a.jsxs(ba,{title:"서버 (호스트)",children:[a.jsx(q,{label:"운영체제",value:[u.name,u.arch].filter(Boolean).join(" ")||"-"}),a.jsx(q,{label:"서버 가동",value:ml(u.uptimeMs,Un)}),a.jsx(q,{label:"메모리",value:w.text,bar:w.percent===null?null:{label:"서버 메모리 사용률",percent:w.percent}}),a.jsx(q,{label:"스왑",value:i.swapTotal===0?"없음":b.text,bar:b.percent===null||i.swapTotal===0?null:{label:"스왑 사용률",percent:b.percent}}),a.jsx(q,{label:"디스크",value:h.text,bar:h.percent===null?null:{label:"디스크 사용률",percent:h.percent}}),a.jsx(q,{label:"CPU",value:`서버 ${ka(s.system)} · JVM ${ka(s.process)}`}),a.jsx(q,{label:"코어 · 부하 평균",value:`${s.cores??"-"}개 · ${s.loadAverage===null?"-":s.loadAverage.toFixed(2)}`}),a.jsx(q,{label:"열린 파일",value:i.fdOpen===null?"-":`${mt(i.fdOpen)} / ${mt(i.fdMax)}`})]}),a.jsxs(ba,{title:"JVM",children:[a.jsx(q,{label:"가상 머신",value:[e.vm,e.vendor].filter(Boolean).join(" · ")||"-"}),a.jsx(q,{label:"힙",value:p.text,bar:p.percent===null?null:{label:"힙 사용률",percent:p.percent}}),a.jsx(q,{label:"힙 확보량",value:bt(n.committed)}),a.jsx(q,{label:"힙 밖 메모리",value:zr(e.nonHeapUsed)}),a.jsx(q,{label:"메타스페이스",value:zr(c.metaspace)}),a.jsx(q,{label:"로드된 클래스",value:mt(c.classes)}),a.jsx(q,{label:"스레드",value:`${t.live}개 (최고 ${t.peak} · 데몬 ${t.daemon})`}),a.jsx(q,{label:"스레드 상태",value:I}),a.jsx(q,{label:"GC",value:`${o.count.toLocaleString("ko-KR")}회 · ${o.millis.toLocaleString("ko-KR")}ms`})]}),a.jsxs(ba,{title:"HTTP · Tomcat",children:[a.jsx(q,{label:"요청 수",value:mt(r.requests)}),a.jsx(q,{label:"오류 응답",value:mt(r.errors)}),a.jsx(q,{label:"평균 처리 시간",value:Bd(r.avgMs)}),a.jsx(q,{label:"가장 느렸던 요청",value:Bd(r.maxMs)}),a.jsx(q,{label:"받은 데이터",value:zr(r.bytesIn)}),a.jsx(q,{label:"보낸 데이터",value:zr(r.bytesOut)}),a.jsx(q,{label:"연결 수",value:mt(r.connections)}),a.jsx(q,{label:"처리 스레드",value:`${r.threadsBusy??"-"} / ${r.threadsMax??"-"}`}),a.jsx(q,{label:"세션 수",value:mt(r.sessions)})]})]}),a.jsx("p",{className:"mt-5 font-mono text-[11px] text-muted",children:"요청 수와 처리 시간에는 이 카드가 10초마다 보내는 요청도 포함됩니다. 호스트 이름, 경로, IP, 앱 이름은 보여주지 않습니다."})]})}function Zv(){const e=Yv();return a.jsxs("section",{children:[a.jsx("h2",{className:"text-xl font-semibold",children:"라이브 서버 상태"}),a.jsxs("div",{className:"card mt-4",children:[e.kind==="online"&&a.jsx(Qv,{status:e.status}),e.kind==="loading"&&a.jsx("p",{className:"font-mono text-sm text-muted",children:"서버에 물어보는 중..."}),e.kind==="preparing"&&a.jsx("p",{className:"font-mono text-sm text-muted",children:"서버 연결을 준비하고 있습니다."}),e.kind==="offline"&&a.jsx("p",{className:"font-mono text-sm text-muted",children:"서버에 연결할 수 없습니다. 점검 중이거나 꺼져 있을 수 있어요. 이 사이트의 다른 기능에는 영향이 없습니다."})]})]})}const e2="https://github.com/ShinHeeYoun/ShinHeeYoun.github.io";function n2(){return a.jsxs("section",{children:[a.jsx("h2",{className:"text-xl font-semibold",children:"Source"}),a.jsxs("p",{className:"mt-3 font-mono text-sm",children:[a.jsx("span",{className:"text-muted",children:"$ open "}),a.jsx("a",{href:e2,target:"_blank",rel:"noopener noreferrer",className:"text-accent underline-offset-4 hover:underline",children:"github.com/ShinHeeYoun/ShinHeeYoun.github.io"})]})]})}function t2(){return a.jsxs("main",{className:"page-width py-8",children:[a.jsx(Ey,{}),a.jsxs("div",{className:"mt-12 space-y-14",children:[a.jsx(Zv,{}),a.jsx(Hv,{}),a.jsx(n2,{})]})]})}function zd({text:e}){return a.jsxs(a.Fragment,{children:[e.before,a.jsx("mark",{className:"search-match",children:e.match}),e.after]})}const r2=40,s2=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Hd=e=>e.replace(/\s+/g," ").trim();function Wd(e,n){if(n==="")return null;const t=new RegExp(s2(n),"i").exec(e);return t?{index:t.index,length:t[0].length}:null}function o2(e,n,t=r2){const r=n.index+n.length;let s=Math.max(0,n.index-t),o=Math.min(e.length,r+t);if(s>0&&e[s-1]!==" "){const l=e.indexOf(" ",s);l!==-1&&l<n.index&&(s=l+1)}if(o<e.length){const l=e.lastIndexOf(" ",o);l>r&&(o=l)}return{before:(s>0?"...":"")+e.slice(s,n.index),match:e.slice(n.index,r),after:e.slice(r,o)+(o<e.length?"...":"")}}function l2(e,n){return{before:e.slice(0,n.index),match:e.slice(n.index,n.index+n.length),after:e.slice(n.index+n.length)}}const Gd=new WeakMap;function a2(e){let n=Gd.get(e);return n===void 0&&(n=e.format==="html"?zc(e.body):Dh(qc(e.body,e.title),!0),Gd.set(e,n)),n}function i2(e,n){const t=Hd(n);if(t==="")return[];const r=[],s=[];for(const o of e){const l=Hd(o.title),i=Wd(l,t),c=a2(o),u=Wd(c,t);if(!i&&!u)continue;const d={post:o,title:i?l2(l,i):null,snippet:u?o2(c,u):null};(i?r:s).push(d)}return[...r,...s]}const c2=Ar.map(e=>({post:e,title:null,snippet:null}));function u2(){const[e,n]=ih(),[t,r]=x.useState(e.get("q")??""),s=x.useDeferredValue(t).trim(),o=x.useMemo(()=>i2(Ar,s),[s]),l=s!=="";x.useEffect(()=>{(e.get("q")??"")!==t&&n(t.trim()?{q:t}:{},{replace:!0})},[t,e,n]);const i=l?o:c2;return a.jsxs("main",{className:"page-width py-12",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"Blog"}),a.jsxs("form",{role:"search",className:"mt-6 max-w-xl",onSubmit:c=>c.preventDefault(),children:[a.jsx("label",{htmlFor:"blog-search",className:"sr-only",children:"글 검색"}),a.jsx("input",{id:"blog-search",type:"search",value:t,onChange:c=>r(c.target.value),placeholder:"제목과 본문에서 검색",autoComplete:"off",className:"w-full rounded-md border border-border bg-surface px-3 py-2 font-mono text-sm outline-none focus:border-accent"})]}),l&&a.jsx("p",{role:"status",className:"mt-4 text-sm text-muted",children:o.length>0?`검색 결과 ${o.length}건`:`'${s}' 검색 결과가 없습니다.`}),a.jsx("div",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:i.map(({post:c,title:u,snippet:d})=>a.jsx(pn,{to:`/blog/${c.slug}`,className:"block",children:a.jsxs("article",{className:"card",children:[a.jsx("h2",{className:"card-title",children:u?a.jsx(zd,{text:u}):c.title}),a.jsxs("p",{className:"mt-1 text-sm text-muted",children:[c.date,c.format==="html"&&a.jsx("span",{className:"tag ml-2",children:"HTML"})]}),a.jsx("p",{className:"mt-2 break-words text-foreground/80",children:d?a.jsx(zd,{text:d}):c.excerpt})]})},c.slug))})]})}const Ca=200,d2=80,p2=3e4;function Mh({html:e,title:n}){const t=x.useRef(null),[r,s]=x.useState(Ca),o=x.useMemo(()=>Qy(e),[e]);return x.useLayoutEffect(()=>{s(Ca);function l(i){var u;if(i.source!==((u=t.current)==null?void 0:u.contentWindow))return;const c=i.data;if(!(!c||typeof c!="object")){if(c.type==="post-frame-height"&&typeof c.height=="number"&&Number.isFinite(c.height))s(Math.min(p2,Math.max(Ca,Math.ceil(c.height))));else if(c.type==="post-frame-scroll"&&typeof c.top=="number"&&Number.isFinite(c.top)){const d=t.current?t.current.getBoundingClientRect().top+window.scrollY:0,f=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:Math.max(0,d+c.top-d2),behavior:f?"auto":"smooth"})}}}return window.addEventListener("message",l),()=>window.removeEventListener("message",l)},[o]),a.jsx("iframe",{ref:t,title:n,srcDoc:o,onLoad:()=>{var l,i;return(i=(l=t.current)==null?void 0:l.contentWindow)==null?void 0:i.postMessage("post-frame-ping","*")},sandbox:"allow-scripts allow-popups allow-popups-to-escape-sandbox",style:{height:r},className:"block w-full rounded-md border border-border bg-white"})}function $h({html:e,className:n=""}){function t(r){const s=r.target.closest("a");if(!s)return;const o=$v(s.getAttribute("href")??"");if(o===null)return;r.preventDefault();const l=[...r.currentTarget.querySelectorAll("[id]")].find(c=>c.id===o),i=window.matchMedia("(prefers-reduced-motion: reduce)").matches;l==null||l.scrollIntoView({behavior:i?"auto":"smooth",block:"start"})}return a.jsx("div",{className:`markdown-body ${n}`.trim(),onClick:t,dangerouslySetInnerHTML:{__html:e}})}function f2(){const{slug:e}=rh(),n=Ar.find(s=>s.slug===e);if(!n)return a.jsxs("main",{className:"page-width py-12",children:[a.jsx("p",{children:"글을 찾을 수 없습니다."}),a.jsx(pn,{to:"/blog",className:"text-accent underline",children:"목록으로"})]});const t=n.format==="html",r=t?"":Rh(n.body,n.title);return a.jsx("main",{className:"page-width py-12",children:a.jsxs("div",{className:`mx-auto ${t?"max-w-5xl":"max-w-3xl"}`,children:[a.jsx(pn,{to:"/blog",className:"text-sm text-accent underline",children:"← 목록으로"}),a.jsx("h1",{className:"mt-4 text-2xl font-bold",children:n.title}),a.jsx("p",{className:"mt-1 text-sm text-muted",children:n.date}),t?a.jsx("div",{className:"mt-8",children:a.jsx(Mh,{html:n.body,title:n.title})}):a.jsx($h,{html:r,className:"mt-8"})]})})}function Zc(){return a.jsx("p",{className:"mt-4 rounded-md bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",children:"ADMIN에서 입력한 토큰으로 저장소에 직접 반영합니다. 이 저장소(ShinHeeYoun/ShinHeeYoun.github.io) 전용, Contents: Read and write 권한만 있는 fine-grained PAT를 사용하세요. 토큰은 브라우저 localStorage에 저장되니 공용 PC에서는 ADMIN에서 로그아웃하세요."})}const Vd=e=>`${Math.max(1,Math.round(e/1e3))}KB`;function Fh({draft:e,onChange:n,note:t,keptNote:r,children:s}){const o=x.useId(),l=Fl(e),i=e.html===null?null:Hc(e),c=e.html===null?[]:Yy(e.html,e.css.map(f=>f.name));async function u(f){var v;const m=(v=f.target.files)==null?void 0:v[0];if(f.target.value="",!m)return;const y=await m.text();n({...e,html:y,htmlName:m.name,title:Ky(y,m.name.replace(/\.[^.]+$/,""))})}async function d(f){const m=[...f.target.files??[]];if(f.target.value="",m.length===0)return;const y=await Promise.all(m.map(async v=>({name:v.name,text:await v.text()})));n({...e,css:y})}return a.jsxs("div",{className:"mt-6 grid gap-6 lg:grid-cols-2",children:[a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsxs("label",{htmlFor:`${o}-title`,className:"block text-sm font-medium",children:["제목 ",t&&a.jsx("span",{className:"text-xs text-muted",children:t})]}),a.jsx("input",{id:`${o}-title`,type:"text",value:e.title,onChange:f=>n({...e,title:f.target.value}),className:"mt-1 w-full rounded-md border border-border bg-surface p-2 text-foreground"}),a.jsx("p",{className:"mt-1 text-xs text-muted",children:"HTML 파일을 고르면 파일의 제목으로 채워집니다. 고쳐 쓸 수 있어요."})]}),a.jsxs("div",{className:"mt-4",children:[a.jsx("label",{htmlFor:`${o}-html`,className:"block text-sm font-medium",children:"HTML 파일"}),a.jsx("input",{id:`${o}-html`,type:"file",accept:".html,.htm,text/html",onChange:u,className:"mt-1 block w-full text-sm file:mr-3 file:rounded-md file:border file:border-border file:bg-surface file:px-3 file:py-1.5 file:text-foreground hover:file:border-accent"}),a.jsx("p",{className:"mt-1 text-xs text-muted",children:e.htmlName?`선택됨: ${e.htmlName}`:e.html!==null?r:"선택된 파일이 없습니다."})]}),a.jsxs("div",{className:"mt-4",children:[a.jsxs("label",{htmlFor:`${o}-css`,className:"block text-sm font-medium",children:["CSS 파일 ",a.jsx("span",{className:"text-xs font-normal text-muted",children:"(선택, 여러 개 가능)"})]}),a.jsx("input",{id:`${o}-css`,type:"file",accept:".css,text/css",multiple:!0,onChange:d,className:"mt-1 block w-full text-sm file:mr-3 file:rounded-md file:border file:border-border file:bg-surface file:px-3 file:py-1.5 file:text-foreground hover:file:border-accent"}),a.jsx("p",{className:"mt-1 text-xs text-muted",children:e.css.length>0?`선택됨: ${e.css.map(f=>f.name).join(", ")} — 다시 고르면 바뀝니다.`:"고른 CSS는 글 안에 함께 저장됩니다. HTML이 같은 이름의 CSS를 <link>로 부르고 있으면 그 연결은 자동으로 대신합니다."})]}),c.length>0&&a.jsxs("p",{role:"status",className:"mt-4 rounded-md bg-amber-50 p-2 text-xs text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",children:["이 페이지가 부르는 파일이 함께 올라오지 않았습니다: ",c.join(", "),". 이 파일들은 글에서 불러와지지 않아요. 이미지는 data: 주소나 http(s) 주소로 넣고, 스타일은 위의 CSS 파일로 올려 주세요."]}),l!==null&&a.jsx("p",{className:`mt-3 text-xs ${i?"text-red-600 dark:text-red-400":"text-muted"}`,children:i??`크기 ${Vd(Sh(l))} / 최대 ${Vd(ji)}`}),a.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:s})]}),a.jsx("section",{"aria-label":"미리보기",className:"min-w-0 rounded-md border border-border bg-surface p-5",children:l===null?a.jsx("p",{className:"text-sm text-muted",children:"HTML 파일을 선택하면 여기에 표시됩니다."}):a.jsxs(a.Fragment,{children:[a.jsx("h1",{className:"text-2xl font-bold",children:e.title||"(제목 없음)"}),a.jsx("div",{className:"mt-6",children:a.jsx(Mh,{html:l,title:"미리보기"})})]})})]})}function Uh({title:e,body:n,date:t,onTitleChange:r,onBodyChange:s,note:o,children:l}){const[i,c]=x.useState(null),u=x.useMemo(()=>i?Rh(i.body,i.title):"",[i]),d=i!==null&&(i.title!==e||i.body!==n);return a.jsxs("div",{className:"mt-6 grid gap-6 lg:grid-cols-2",children:[a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsxs("label",{htmlFor:"editor-title",className:"block text-sm font-medium",children:["제목 ",o&&a.jsx("span",{className:"text-xs text-muted",children:o})]}),a.jsx("input",{id:"editor-title",type:"text",value:e,onChange:f=>r(f.target.value),className:"mt-1 w-full rounded-md border border-border bg-surface p-2 text-foreground"})]}),a.jsxs("div",{className:"mt-4",children:[a.jsx("label",{htmlFor:"editor-body",className:"block text-sm font-medium",children:"본문 (Markdown)"}),a.jsx("textarea",{id:"editor-body",value:n,onChange:f=>s(f.target.value),rows:20,className:"mt-1 w-full rounded-md border border-border bg-surface p-2 font-mono text-sm text-foreground"})]}),a.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[a.jsx("button",{type:"button",onClick:()=>c({title:e,body:n,date:t}),disabled:!e&&!n,className:"rounded-md border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-background disabled:opacity-50",children:"미리보기"}),l]})]}),a.jsxs("section",{"aria-label":"미리보기",className:"min-w-0 rounded-md border border-border bg-surface p-5",children:[d&&a.jsx("p",{role:"status",className:"mb-4 rounded-md bg-amber-50 p-2 text-xs text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",children:"내용이 바뀌었습니다. 미리보기를 다시 눌러 갱신하세요."}),i?a.jsxs(a.Fragment,{children:[a.jsx("h1",{className:"text-2xl font-bold",children:i.title||"(제목 없음)"}),a.jsx("p",{className:"mt-1 text-sm text-muted",children:i.date}),a.jsx($h,{html:u,className:"mt-8"})]}):a.jsx("p",{className:"text-sm text-muted",children:"미리보기를 누르면 여기에 표시됩니다."})]})]})}const Kd="rounded-md bg-accent px-4 py-2 text-background transition-colors hover:bg-accent-hover disabled:opacity-50";function m2(){const{pat:e}=$t(),[n,t]=x.useState("md"),[r,s]=x.useState(""),[o,l]=x.useState(""),[i,c]=x.useState(Dd),[u,d]=x.useState(null),[f,m]=x.useState(!1);async function y(b,h,p,g){d(null),m(!0);try{await fh(b,h,`post: ${p}`,e),d("게시됨 — 배포까지 약 1분 정도 걸려요."),g()}catch(S){d(S instanceof Error?S.message:"게시 중 오류가 발생했습니다.")}finally{m(!1)}}function v(){const b=Sa();y(`src/content/posts/${Fd(b)}.md`,gh({title:r,date:b},o),r,()=>{s(""),l("")})}function w(){const b=Fl(i);if(b===null)return;const h=Sa();y(`src/content/posts/${Fd(h)}.html`,xh({title:i.title,date:h},b),i.title,()=>c(Dd))}return a.jsxs("main",{className:"page-width py-12",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"Write"}),a.jsx(Zc,{}),a.jsxs("div",{className:"mt-6 flex items-center gap-3",children:[a.jsx("label",{htmlFor:"post-format",className:"text-sm font-medium",children:"형식"}),a.jsxs("select",{id:"post-format",value:n,onChange:b=>t(b.target.value),className:"rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground",children:[a.jsx("option",{value:"md",children:"Markdown"}),a.jsx("option",{value:"html",children:"HTML"})]})]}),n==="md"?a.jsx(Uh,{title:r,body:o,date:Sa(),onTitleChange:s,onBodyChange:l,children:a.jsx("button",{type:"button",onClick:v,disabled:f||!r||!o,className:Kd,children:f?"게시 중...":"게시"})}):a.jsx(Fh,{draft:i,onChange:c,children:a.jsx("button",{type:"button",onClick:w,disabled:f||!i.title.trim()||Hc(i)!==null,className:Kd,children:f?"게시 중...":"게시"})}),u&&a.jsx("p",{className:"mt-4 text-sm",children:u})]})}const Jd="rounded-md bg-accent px-4 py-2 text-background transition-colors hover:bg-accent-hover disabled:opacity-50";function h2(){const{pat:e}=$t(),[n,t]=x.useState(null),[r,s]=x.useState(null),[o,l]=x.useState(null),[i,c]=x.useState(!1);async function u(m){s(null),l(m.slug);try{const{content:y,sha:v}=await ph(m.path,e),w={slug:m.slug,path:m.path,sha:v};if(m.format==="html"){const{title:b,date:h,html:p}=yh(y);t({...w,format:"html",date:h,draft:{title:b,html:p,htmlName:null,css:[]}})}else{const{frontmatter:b,body:h}=hh(y);t({...w,format:"md",date:b.date,title:b.title,body:h})}}catch(y){s(y instanceof Error?y.message:"글을 불러오지 못했습니다.")}finally{l(null)}}async function d(){if(!n)return;let m,y;if(n.format==="md")y=n.title,m=gh({title:y,date:n.date},n.body);else{const v=Fl(n.draft);if(v===null)return;y=n.draft.title,m=xh({title:y,date:n.date},v)}s(null),c(!0);try{await fh(n.path,m,`post: update ${y}`,e,n.sha),s("수정됨 — 배포까지 약 1분 정도 걸려요."),t(null)}catch(v){s(v instanceof Error?v.message:"수정 중 오류가 발생했습니다.")}finally{c(!1)}}const f=a.jsx("button",{type:"button",onClick:()=>t(null),className:"rounded-md border border-border px-4 py-2 hover:bg-surface",children:"취소"});return a.jsxs("main",{className:"page-width py-12",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"Edit"}),a.jsx(Zc,{}),(n==null?void 0:n.format)==="md"&&a.jsxs(Uh,{title:n.title,body:n.body,date:n.date,note:`(수정 중: ${n.slug})`,onTitleChange:m=>t({...n,title:m}),onBodyChange:m=>t({...n,body:m}),children:[a.jsx("button",{type:"button",onClick:d,disabled:i||!n.title||!n.body,className:Jd,children:i?"저장 중...":"Update"}),f]}),(n==null?void 0:n.format)==="html"&&a.jsxs(Fh,{draft:n.draft,onChange:m=>t({...n,draft:m}),note:`(수정 중: ${n.slug})`,keptNote:"저장된 페이지를 그대로 씁니다. 새 파일을 고르면 바뀝니다.",children:[a.jsx("button",{type:"button",onClick:d,disabled:i||!n.draft.title.trim()||Hc(n.draft)!==null,className:Jd,children:i?"저장 중...":"Update"}),f]}),!n&&a.jsx("ul",{className:"mt-6 space-y-2",children:Ar.map(m=>a.jsxs("li",{className:"flex items-center justify-between gap-3 rounded-md border border-border p-3",children:[a.jsxs("span",{className:"min-w-0 break-words",children:[m.title," ",a.jsxs("span",{className:"text-xs text-muted",children:["(",m.date,")"]}),m.format==="html"&&a.jsx("span",{className:"tag ml-2",children:"HTML"})]}),a.jsx("button",{type:"button",onClick:()=>u(m),disabled:o!==null,className:"shrink-0 text-sm text-accent underline disabled:opacity-50",children:o===m.slug?"불러오는 중...":"Edit"})]},m.slug))}),r&&a.jsx("p",{className:"mt-4 text-sm",children:r})]})}function g2(){const{pat:e}=$t(),[n,t]=x.useState(null),[r,s]=x.useState(null),[o,l]=x.useState([]);async function i(u){if(window.confirm(`"${u.title}" 글을 삭제할까요? 되돌릴 수 없습니다.`)){t(null),s(u.slug);try{const{sha:d}=await ph(u.path,e);await vy(u.path,`post: delete ${u.title}`,d,e),l(f=>[...f,u.slug]),t("삭제됨 — 배포까지 약 1분 정도 걸려요.")}catch(d){t(d instanceof Error?d.message:"삭제 중 오류가 발생했습니다.")}finally{s(null)}}}const c=Ar.filter(u=>!o.includes(u.slug));return a.jsxs("main",{className:"page-width py-12",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"Delete"}),a.jsx(Zc,{}),a.jsx("ul",{className:"mt-6 space-y-2",children:c.map(u=>a.jsxs("li",{className:"flex items-center justify-between gap-3 rounded-md border border-border p-3",children:[a.jsxs("span",{className:"min-w-0 break-words",children:[u.title," ",a.jsxs("span",{className:"text-xs text-muted",children:["(",u.date,")"]}),u.format==="html"&&a.jsx("span",{className:"tag ml-2",children:"HTML"})]}),a.jsx("button",{type:"button",onClick:()=>i(u),disabled:r!==null,className:"shrink-0 text-sm text-red-600 underline disabled:opacity-50 dark:text-red-400",children:r===u.slug?"삭제 중...":"Delete"})]},u.slug))}),c.length===0&&a.jsx("p",{className:"mt-6 text-sm text-muted",children:"남은 글이 없습니다."}),n&&a.jsx("p",{className:"mt-4 text-sm",children:n})]})}const Bh=[{id:"calculator",name:"계산기",description:"기본 사칙연산을 지원하는 버튼식 계산기입니다."},{id:"dino",name:"공룡 점프 게임",description:"새는 숙여서 피하고 나무는 불덩이로 태우며 달리는 공룡 게임입니다. 입력과 게임 로직이 로그로 흐릅니다."},{id:"ladder",name:"사다리타기",description:"열 수와 이름·결과를 정하고 시작하면 사다리가 만들어집니다. 길을 눌러 하나씩 확인하거나 전체 결과를 한 번에 볼 수 있습니다.",wide:!0},{id:"yacht",name:"Yacht Dice",description:"주사위 5개를 최대 3번 굴려 12개 칸을 채우는 요트 다이스입니다. 굴리기 버튼을 누르고 있는 동안 주사위 눈이 바뀌다가, 떼는 순간 결정됩니다.",wide:!0},{id:"roulette",name:"룰렛",description:"항목을 직접 적고 돌리면 하나가 뽑힙니다. 모든 항목의 확률이 같고, 결과는 돌리기 전에 정해집니다.",wide:!0},{id:"map",name:"세계 지도",description:"Google Maps로 세계 지도를 봅니다. 눌러서 위도·경도와 현지 시각·날씨 보기, 거리와 면적 재기, 내 위치, 화면 링크 공유, 도시 위치 맞히기 퀴즈를 할 수 있습니다.",wide:!0}];function x2(){return a.jsxs("main",{className:"page-width py-12",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"Tools"}),a.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:Bh.map(e=>a.jsx(pn,{to:`/tools/${e.id}`,className:"block",children:a.jsxs("article",{className:"card",children:[a.jsx("h2",{className:"card-title",children:e.name}),a.jsx("p",{className:"mt-2 text-foreground/80",children:e.description})]})},e.id))})]})}const zh={display:"0",pendingValue:null,pendingOperator:null,overwrite:!1};function Xd(e,n,t){switch(t){case"+":return e+n;case"-":return e-n;case"×":return e*n;case"÷":return n===0?NaN:e/n}}function y2(e,n){switch(n.type){case"digit":return e.overwrite||e.display==="0"?{...e,display:n.digit,overwrite:!1}:{...e,display:e.display+n.digit};case"decimal":return e.overwrite?{...e,display:"0.",overwrite:!1}:e.display.includes(".")?e:{...e,display:e.display+"."};case"operator":{const t=Number(e.display);if(e.pendingOperator!==null&&!e.overwrite){const r=Xd(e.pendingValue??0,t,e.pendingOperator);return{display:String(r),pendingValue:r,pendingOperator:n.operator,overwrite:!0}}return{...e,pendingValue:t,pendingOperator:n.operator,overwrite:!0}}case"equals":{if(e.pendingOperator===null)return e;const t=Number(e.display),r=Xd(e.pendingValue??0,t,e.pendingOperator);return{display:String(r),pendingValue:null,pendingOperator:null,overwrite:!0}}case"clear":return zh}}const v2=[{kind:"digit",label:"7"},{kind:"digit",label:"8"},{kind:"digit",label:"9"},{kind:"operator",label:"÷",operator:"÷"},{kind:"digit",label:"4"},{kind:"digit",label:"5"},{kind:"digit",label:"6"},{kind:"operator",label:"×",operator:"×"},{kind:"digit",label:"1"},{kind:"digit",label:"2"},{kind:"digit",label:"3"},{kind:"operator",label:"-",operator:"-"},{kind:"digit",label:"0"},{kind:"decimal",label:"."},{kind:"equals",label:"="},{kind:"operator",label:"+",operator:"+"},{kind:"clear",label:"C"}];function S2(){const[e,n]=x.useReducer(y2,zh);function t(r){switch(r.kind){case"digit":n({type:"digit",digit:r.label});break;case"decimal":n({type:"decimal"});break;case"operator":n({type:"operator",operator:r.operator});break;case"equals":n({type:"equals"});break;case"clear":n({type:"clear"});break}}return a.jsxs("div",{className:"mx-auto max-w-xs",children:[a.jsx("div",{className:"mb-4 rounded-md border border-border bg-surface p-4 text-right text-2xl font-mono break-all",children:e.display}),a.jsx("div",{className:"grid grid-cols-4 gap-2",children:v2.map((r,s)=>a.jsx("button",{type:"button",onClick:()=>t(r),className:`rounded-md border p-3 text-lg transition-colors ${r.kind==="equals"?"border-accent bg-accent text-background hover:bg-accent-hover":"border-border hover:bg-surface"} ${r.kind==="clear"?"col-span-4":""}`,children:r.label},s))})]})}const w2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNEAAABkBAMAAABayruYAAAAJFBMVEUAAADa2tr/////9/e6urpTU1O5ubn39/f///9ZWVlfX1/z8/O/OctmAAAACXRSTlMA//////////ZO3iNwAAALPElEQVR4AezdwY6bShMF4GP6krX9Bqgk9kiI/SzyAAir9lnlFfL6N26OWhXckDae9mClj/L7L1czMMbfbYDMOCgpKSkpwelyRmIEd6mEhTQpDabvu1C7vsf2ALM6cLlctquVtq2YDwC1jrfHEVDV8fagvln7p7XOlUKVi9SKWrncY5GQnN0DhLuZ1HZJa7WZPemU0GCc6hUMBtVue4BZHeD3v1caTn9KIyiPSimIvjw8SqtDVaQlvKrT2e91JEVUsEilOtGTNkkNUglWnFLX1oDrWSwGSOZ8V91CRczFDnBkWVEaKG0WBISZDPOTeeD2MIZK/Sz4YESUkbxdRhlkTXTrJ74d+aQ1bFRPSRvYjUuLmLOKmNjIch3/fQesGygrHW/SyO2WWzWmSyvSHjpVE1WJSWsIqwJk0agmSmsb39gnzbGKSaOXyJTGKmFSA6vvv/Nh3NQaDpyjPWaCp22mt0+ahkj+LlTzU4tu3Ujjrt4nrZoIq20qlT8brW/4k7S5sQGq73ZJO+M5aawjc5pHRmmYLxMozY/64llp8oAeeaQrMWkir5EGnSPLg8aZ6OaIrJ3n8WsX0lptPCy5ldOiYaT5xro0p9cEaa7nAENd99DOrEzIK0btxOrDSKMl0JeyCgugtr2DSWunmDR2Xy7tdF7c7MgmrfmLNDa7LWmOX9pllzbSDac0UBqrpTQOHOboeQBpIWJOjU3Oq8dItu+pNZRWLaWFBg+nnyBt6FhxIMIrVGxfFqGujcuDj/lkf6S0EeYC9E5aGDiUtAMcPUNkMZ8xl/Oj0qqJ0tomSFs2xDfkaWlOr1FpZzwrzU5qP3jn1px/qeroQUGVDyR2q/hs9X5auSI44T5nLheTJkppdnDpiNJCY1ta3wVQcB2lceBrpH3Dj29F2qdKO50vEWunl0qb6RDUcO0ojQOGYFya6++gnVlRGiubIO1CXgtq+IFPTZF2AeJvBBeT+Ffz8TlpvJnhZTleSTo+NwOB4Iq0QbvPl/btJz41Rdpanpemf5EWbmZQVheXZgei0m7Fp0v7+Ts/APteqI6savX/Y22XCa3NJVlH9qrP092DSROfv3qUOXdt/t8z0iyo3rjplgMJ0ugkemPjHCobnKK3PPiFnNOOL61Iq95cGq89rZ9aQ6l1MKNYhLqi9XKZX79if0EokqNrk9FZwtZj0EJks01pamYztFYaSz7qXmmue5U0f+0Zs0FpWqR9rbSpIqwGFWEpG0Fau1/a4Fn1r5rTskv7pV5aJeYwA4hKli4UjFXmh2LhGho8mujW1yNzlFE+R7QdpDWUNgGoOHmxQWnazP090nr/R/UV0sLfe2ryGVfcZB1Zkms+qLRKhGki0iTkC6VNglmaNKC0KTSCNAhnvf3SOnT5pW3pwlgnzWnLqwOY9ghKE2nDzuQ7laUL81KMtHlYDC9TtpNIY+xJsrTl1pmnD6I8OeNE1gAsGzZgpIGz3pa0fkvaFe7qpfX5pH18fPyj0sKX6SRipTHKiHyJtIrS0Fppk4ANwgvSpNmW5hOXdu078Cab5pP23/cZx9oZV6I0qI5RaVC9SVO+dwyd5OlCNXKHQ9QsTF5qy8nY0zRp0a2nUiPO1bY9O6O0RaO10hpsSHPb0oD80vzP3AKqutSVfD+NITS7JAnrQaWRFeulNA35ImmVzLAgbZBmGySnKdIwJEjDkH1Oe4U0+94JnWTqQlUNNARpd5napTob2QYU33qqNEbifUn+3ahbK0Ga25bm/JzGhTKep+VOTmlFWpMiDcOmtKEbtLs9aNZrz9dIY+z5fKYu1MTc5dDVTBKlliBtsfWUyNpXiG2nSpvENHiJqT1B9To/dIDjQFSa0+ugvV5d32f7G/Yi7d2lAVYaQ0zMFeAgB0jwThrglDYzSMMXSIOPZOnGpW1Tm5pK2qelIS2yeptXGOB5aZ0zNaXZAaqLSKPNIm21W6TRCakMpqY0/8QNlmNcWpfj9wheElEbydxFVBpE1qVhSS2FkOyTlrDsPmlGVxfQXPuO0swAh1gupdHm+0uT3F1EoGWXJjiANCLqezuJMYMZIEGWVhoHcvwW3uupSfYurLRtapPc0iBOTXywFtkpTZBJGvp+CCdmvJIEYwZIkKWRlu932I8vrUjL8KlWhuDwhtLSr+3zdxGDZqnxdi2LBlhSEwlF+qv6XGkQaWZyImmNHZ815HojLfETYFguoeG0+gkwx5ZWpO3Krk+14tVCzk+1ej01kVd0EYHmNf15a2NOw1FLTSBM6qtKjajgYNJ4upb3k/r+TWki7SRr0iYRlX9Kmh/su8yfPvqa8MglqiKpXeGBzXYlaQ2khntpLX9AyEuLsOFWU+XYrSdHcDxpbtAuDGT6ROV/SVollNZULdcd32oSHZ7OcevKvKc0WGmZPiX+ZRFVgaikd3lgW1JLWsOs7F6a/3yLBmvSBBAh5/2vKn/ySztyji8NVZAW1m1CaXNQpL2vNOFDWjcSEUldAxQxaSLSTg3WpBHYQ9IERdpqijQmLi09qkXaYY+eKqndeBLXAFU+RA6gTcKqd7yq40hzFlS3MRCX1uHoKdJqfG2c86AGb6Wbf1b7ejcAx4GINA68c8Jvhqd240lbw3p4hra66vSoLrZ+gAyDhqnLXZUzlB0gwXnAWWl2IH+KtPeOc/3vdCCoWxYDJEhfHVz4LTwzkJKSEmetDN1ygARvA47/7OfQud4OJKWkxFJxCQOh5pP3S0lJSUlJSYmq4sipVcdF/Y4pqcfbnwNHgXFRv2FKagWgOG74D97a+h1Tonw8ZgiLjxo6nxQteV1GzmzK8NlxYkyMz/lAydGmEEVJSe7Mc0dJrY8uPyaedO4PN5I96Zsr+yp9c6ppKwKjSIuurYAZk48wy4xJb7COO2jU3CIXKPsqcV8dMnXaEjuiO76DL9xLZV/Va9+T6oP/LSVN3yO3wMXzRLEnY9lXyUk8dOquw8R4vHNG1T3fmCa90LKv0vfV/+2dQW6jQBBFEascwyqpL9RSiZO0ejvL4QZDbmB8g/hy0zXwRUPZ0QiRDfwnJ5aesstTCdNNm7yAEEJaWXE7ztQQEnRFPM6Q04+orftuwLS64XaUacjpR5Q7KyQuRirMBt0QjzLNmSHyr7TNSVuFOJuPYRjGifsw/GFp+yCtqBHlnemH4XOcKdH9Ymm7IKIT8eYNShvB/X1p3cYY2RlNznSXKI20CgQmrk2PkWZ8U1remtrBqDddukJpRNxHvxDDaqj1w7hwn0pLKbl5lfOL0pIrzZkuX6A00sYqDwy5sBpq/edYMZWWsxWTC3VpaWsK6o12G5NgmhPD0uRlaQFmKu05Pp6FL5TW5ZxRydSMqbQ1BXXGulqbDNOcFtKqqMoM7q5FM6Eq7WGlGShNp5lmoBm0B4MQVwYzbW0STENOS1AJUTQKLsuso2ARiBRnprfKvsbCo7zdUVpeLrLiG5O6vDX22pguw5y0NIKurDIJqorSROyXvU+ljVaaUZeWXFfedMmX5kyXLlAaCXNkWpcWA0JAaV/PbWkp/09pzmjypek1SmNp0ZWmMEtpoytNfUU7zTVLY2nK0sjPlKa+NGFp5AdKc58INE4/LI0cWloUe6E0TDjxpT1YGtmLaEFEcD8NJkiA6S2xmRGlZYBmDjENOftWDtFCrEyU9WrUBFajsIqElaajTEOuVFpQZKDx3Qr7Mozwx4eYhpyXsJR2m4wsGbzeNcQ9t2QHLf7pKjD1SPM7IVka2UUruKshMMGEISyNHMe8mh6lMrhuc88RDCyN7Gba9xhvlYlaBJ/CI8fSBg0qt9pIEYvpkdrdRhpLI57dXw66Mh+/K3haAuEJMOQ88FQrsoO/etICpT2ul1QAAAAASUVORK5CYII=",Is=1800,cs=240,k2=e=>e*e*(3-2*e);function Ai(e){const n=e+cs/2,t=Math.floor(n/Is),r=n-t*Is,s=t%2;if(r>=cs)return s;const o=t===0?0:(t-1)%2;return o+(s-o)*k2(r/cs)}function Hh(e,n){const t=Is*2;return(((e-n+cs/2)%t+t)%t-cs/2)/Is}const Yd=e=>Hh(e,0),qd=e=>Hh(e,Is),je=600,fr=150,Ct=130,eu=40,Qd=9,b2=.5,C2=4,N2=14,P2=6,Vt=40,Zd=30,j2=10,ep=10,np=eu+44,E2=32,T2=14,A2=1/600,tp=eu+8,I2={w:28,h:43},Wh={w:40,h:24},Hr=2,Nt={small:{w:17,h:35,y:0},large:{w:25,h:50,y:0},bird:{w:46,h:40,y:32},tree:{w:30,h:130,y:0}},_2={small:0,large:0,bird:100,tree:200},Gh={y:0,vy:0,ducking:!1,speed:P2,distance:0,ticks:0,nextSpawn:400,obstacles:[],fireballs:[],fireCooldown:0,meteors:[],milestone:0,milestoneTick:0,over:!1},Vh=e=>Math.floor(e.distance/Vt),nu=e=>e.ducking&&e.y===0,Cn=e=>({type:"event",text:e}),Pe=e=>({type:"code",text:e}),Kh=["ArrowUp","Space"],Jh=[...Kh,"ArrowDown","ArrowLeft","ArrowRight"];function D2(e,n){if(!Jh.includes(n))return{state:e,logs:[]};const t=[Cn(`keydown ${n}`)];if(n==="ArrowLeft"||n==="ArrowRight"){const s=Math.min(N2,Math.max(C2,e.speed+(n==="ArrowRight"?1:-1))),o=n==="ArrowRight"?"Math.min(MAX_SPEED, speed + 1)":"Math.max(MIN_SPEED, speed - 1)";return t.push(Pe(`speed = ${o}   // speed=${s}`)),{state:{...e,speed:s},logs:t}}if(n==="ArrowDown")return t.push(Pe(`ducking = true   // hitbox h=${Wh.h} while on the ground`)),{state:{...e,ducking:!0},logs:t};if(e.over)return t.push(Pe(`if (over) state = restart(speed)   // restart, speed=${e.speed}`)),{state:{...Gh,speed:e.speed},logs:t};if(n==="ArrowUp")return e.y===0?(t.push(Pe(`if (y === 0) vy = JUMP_V   // vy=${Qd}`)),{state:{...e,vy:Qd},logs:t}):(t.push(Pe(`if (y === 0) vy = JUMP_V   // ignored: y=${e.y.toFixed(1)} (airborne)`)),{state:e,logs:t});if(e.fireCooldown>0)return t.push(Pe(`if (fireCooldown === 0) fireballs.push(...)   // ignored: cooldown=${e.fireCooldown}`)),{state:e,logs:t};const r=e.y+(nu(e)?T2:E2);return t.push(Pe(`if (fireCooldown === 0) fireballs.push({ x: ${np}, y: ${r} })   // cooldown=${Zd}`)),{state:{...e,fireballs:[...e.fireballs,{x:np,y:r}],fireCooldown:Zd},logs:t}}function R2(e,n){return n!=="ArrowDown"?{state:e,logs:[]}:{state:{...e,ducking:!1},logs:[Cn(`keyup ${n}`),Pe("ducking = false")]}}function L2(e,n=Math.random){if(e.over)return{state:e,logs:[]};const t=[];let{y:r,vy:s,nextSpawn:o}=e;const l=e.ticks+1,i=e.distance+e.speed;let c=e.obstacles.map(p=>({...p,x:p.x-e.speed})).filter(p=>p.x+Nt[p.kind].w>0);(r>0||s>0)&&(r+=s,s-=b2,r<=0&&(r=0,s=0,t.push(Cn("landed"),Pe("if (y <= 0) { y = 0; vy = 0 }   // on the ground again"))));const u=[];for(const p of e.fireballs){const g={...p,x:p.x+j2},S=c.findIndex(k=>k.kind==="tree"&&g.x+ep>k.x+Hr&&g.x<k.x+Nt.tree.w);S>=0?(t.push(Cn("tree burned"),Pe(`if (fireball.x + ${ep} > tree.x) obstacles.remove(tree)   // tree.x=${Math.round(c[S].x)}`)),c=c.filter((k,C)=>C!==S)):g.x<je&&u.push(g)}if(i>=o){const p=Math.floor(i/Vt),g=Object.keys(Nt).filter(k=>p>=_2[k]),S=g[Math.min(g.length-1,Math.floor(n()*g.length))];c.push({x:je,kind:S}),o=i+e.speed*(45+n()*30),t.push(Cn("spawn obstacle"),Pe(`obstacles.push({ x: WIDTH, kind: '${S}' })   // next at distance=${Math.round(o)}`))}const d=Math.floor(e.distance/Vt/100),f=Math.floor(i/Vt/100);let{milestone:m,milestoneTick:y}=e;f>d&&(m=f,y=l,t.push(Cn(`${f*100} m`),Pe(`if (meters % 100 === 0) effect('${f*100} m')   // meters=${Math.floor(i/Vt)}`)));const v=Ai(l);v>=.5!=Ai(e.ticks)>=.5&&t.push(Cn(v>=.5?"night falls":"day breaks"),Pe(`sky = night >= 0.5 ? 'night' : 'day'   // night=${v.toFixed(2)}`));let w=e.meteors.map(p=>({x:p.x-6,y:p.y+3.5})).filter(p=>p.y<Ct&&p.x>-60);if(v>.6&&n()<A2){const p={x:250+Math.floor(n()*400),y:-10};w=[...w,p],t.push(Cn("meteor"),Pe(`if (night > 0.6 && rng() < 1 / 600) meteors.push({ x: ${p.x}, y: ${p.y} })   // night=${v.toFixed(2)}`))}const b=nu({...e,y:r})?Wh:I2,h=c.some(p=>{const{w:g,h:S,y:k}=Nt[p.kind];return tp<p.x+g-Hr&&tp+b.w>p.x+Hr&&r<k+S-Hr&&r+b.h>k+Hr});return h&&t.push(Cn("collision"),Pe(`if (overlaps(dino, obstacle)) over = true   // meters=${Math.floor(i/Vt)}`)),{state:{...e,y:r,vy:s,distance:i,ticks:l,nextSpawn:o,obstacles:c,fireballs:u,fireCooldown:Math.max(0,e.fireCooldown-1),meteors:w,milestone:m,milestoneTick:y,over:h},logs:t}}const Na=240;function O2(e){for(let n=0;n<e.length;n+=4)e[n]>Na&&e[n+1]>Na&&e[n+2]>Na&&(e[n+3]=0)}const hl=2,rp=1e3/60,M2=15,$2=10,tu="dino_best_m",$e={x:848,y:2,w:44,h:47,standing:0,running:[88,132],crashed:220,crashedFootPad:2},sp={w:59,frames:[264,323]},Wr={x:134,y:2,w:46,h:40,frames:[0,46]},F2={small:228,large:332},mo={x:86,y:2,w:46,h:14},zn={x:2,y:54,w:1200,h:12,lineRow:4},qe={skyTop:[138,200,255],skyBottom:[226,243,255],ink:[62,62,62],dino:[8,140,90],hud:[60,72,90],trunk:[122,86,50],bark:[92,64,36],leaves:[42,150,84],leavesLight:[86,190,110]},Qe={skyTop:[6,10,30],skyBottom:[26,36,70],ink:[226,233,241],dino:[61,220,151],hud:[160,172,190],trunk:[74,52,34],bark:[52,36,24],leaves:[24,88,58],leavesLight:[40,124,80]},Be=(e,n,t)=>`rgb(${e.map((r,s)=>Math.round(r+(n[s]-r)*t)).join(",")})`,U2=Array.from({length:36},(e,n)=>({x:(n*97+31)%580+10,y:(n*53+7)%80+5}));function B2(){try{return Number(localStorage.getItem(tu))||0}catch{return 0}}function z2(e){try{localStorage.setItem(tu,String(e))}catch{}}let Bn=null,Gr=null;function Vr(e,n,t,[r,s,o,l],i,c){if(!Bn){Bn=document.createElement("canvas"),Bn.width=n.width,Bn.height=n.height;const d=Bn.getContext("2d");d.drawImage(n,0,0);const f=d.getImageData(0,0,Bn.width,Bn.height);O2(f.data),d.putImageData(f,0,0),Gr=document.createElement("canvas"),Gr.width=zn.w,Gr.height=60}const u=Gr.getContext("2d");u.globalCompositeOperation="source-over",u.clearRect(0,0,o,l),u.drawImage(Bn,r,s,o,l,0,0,o,l),u.globalCompositeOperation="source-in",u.fillStyle=t,u.fillRect(0,0,o,l),e.drawImage(Gr,0,0,o,l,i,c,o,l)}function H2(e,n,t){const r=e.createLinearGradient(0,0,0,fr);r.addColorStop(0,Be(qe.skyTop,Qe.skyTop,n)),r.addColorStop(1,Be(qe.skyBottom,Qe.skyBottom,n)),e.fillStyle=r,e.fillRect(0,0,je,fr),e.fillStyle="#fff",U2.forEach((c,u)=>{e.globalAlpha=n*(.45+.55*Math.sin(t/18+u*1.7)**2),e.fillRect(c.x,c.y,u%5===0?2:1,u%5===0?2:1)});const s=40+520*Yd(t),o=98-62*Math.sin(Math.PI*Yd(t));e.globalAlpha=1-n,e.fillStyle="#ffd34d",e.beginPath(),e.arc(s,o,12,0,Math.PI*2),e.fill(),e.globalAlpha=(1-n)*.25,e.beginPath(),e.arc(s,o,18,0,Math.PI*2),e.fill();const l=40+520*qd(t),i=98-62*Math.sin(Math.PI*qd(t));e.globalAlpha=n,e.fillStyle="#eef3fb",e.save(),e.beginPath(),e.rect(0,0,je,fr),e.moveTo(l+15,i-3),e.arc(l+5,i-3,10,0,Math.PI*2),e.clip("evenodd"),e.beginPath(),e.arc(l,i,11,0,Math.PI*2),e.fill(),e.restore(),e.globalAlpha=1}function W2(e,n){for(const t of n.meteors){const r=e.createLinearGradient(t.x,t.y,t.x+42,t.y-24.5);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=r,e.lineWidth=2,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+42,t.y-24.5),e.stroke(),e.fillStyle="#fff",e.fillRect(t.x-1.5,t.y-1.5,3,3)}}function G2(e,n,t){const r=Ct-Nt.tree.h,s=(i,c,u,d,f)=>{e.fillStyle=i,e.fillRect(n+c,r+u,d,f)};s(Be(qe.trunk,Qe.trunk,t),5,40,20,Nt.tree.h-40),s(Be(qe.bark,Qe.bark,t),9,50,3,70),s(Be(qe.bark,Qe.bark,t),18,62,3,58);const o=Be(qe.leaves,Qe.leaves,t);s(o,7,0,16,8),s(o,2,8,26,14),s(o,0,22,30,18),s(o,2,40,8,8),s(o,20,62,10,10),s(o,0,76,9,9);const l=Be(qe.leavesLight,Qe.leavesLight,t);s(l,6,4,8,4),s(l,4,14,8,4),s(l,14,27,10,5)}function V2(e,n,t,r){const s=Ct-t,o=r%4<2?0:1;e.fillStyle="rgba(255,90,30,0.45)",e.fillRect(n-16,s-2+o,10,4),e.fillStyle="rgba(255,120,30,0.7)",e.fillRect(n-8,s-4-o,10,8),e.fillStyle="#ff8c1a",e.fillRect(n,s-5,10,10),e.fillStyle="#ffd23f",e.fillRect(n+2,s-3,6,6)}function K2(e,n,t){const r=n.ticks-n.milestoneTick;if(n.milestone===0||r>=90)return;r<24&&(e.fillStyle=`rgba(255,255,255,${.4*(1-r/24)})`,e.fillRect(0,0,je,fr));const s=30+12*Math.max(0,1-r/20);e.globalAlpha=r<60?1:(90-r)/30,e.font=`bold ${s}px ui-monospace, Consolas, monospace`,e.textAlign="center",e.lineWidth=4,e.strokeStyle=Be([255,255,255],[10,14,30],t),e.fillStyle=Be(qe.dino,Qe.dino,t),e.strokeText(`${n.milestone*100} m`,je/2,70),e.fillText(`${n.milestone*100} m`,je/2,70);for(let o=0;o<12;o++){const l=o/12*Math.PI*2;e.fillStyle=o%2?"#ffd23f":Be(qe.dino,Qe.dino,t),e.fillRect(je/2+Math.cos(l)*(30+r*2.4),58+Math.sin(l)*(18+r*1.2),4,4)}e.globalAlpha=1}function J2(e,n,t,r,s){const o=Ai(t.ticks),l=Math.min(1,Math.max(0,(o-.35)/.3)),i=l*l*(3-2*l),c=Be(qe.ink,Qe.ink,i),u=Be(qe.dino,Qe.dino,i),d=Be(qe.hud,Qe.hud,i);e.setTransform(hl,0,0,hl,0,0),e.imageSmoothingEnabled=!1,e.clearRect(0,0,je,fr),H2(e,o,t.ticks),W2(e,t),e.globalAlpha=.5;for(const g of[90,260,430]){const S=((g-t.distance*.3)%(je+80)+je+80)%(je+80)-40;Vr(e,n,d,[mo.x,mo.y,mo.w,mo.h],S,24+g%24)}e.globalAlpha=1;const f=Ct-zn.lineRow,m=t.distance%zn.w;for(const g of[-m,zn.w-m])Vr(e,n,d,[zn.x,zn.y,zn.w,zn.h],g,f);for(const g of t.obstacles){const{w:S,h:k,y:C}=Nt[g.kind];if(g.kind==="tree")G2(e,g.x,o);else if(g.kind==="bird"){const E=Wr.frames[Math.floor(t.ticks/$2)%2];Vr(e,n,c,[Wr.x+E,Wr.y,Wr.w,Wr.h],g.x,Ct-C-k)}else Vr(e,n,c,[F2[g.kind],$e.y,S,k],g.x,Ct-k)}for(const g of t.fireballs)V2(e,g.x,g.y,t.ticks);const y=Math.floor(t.ticks/M2)%2;let v=$e.x+$e.standing,w=$e.w;t.over?v=$e.x+$e.crashed:nu(t)?(v=$e.x+sp.frames[y],w=sp.w):t.y===0&&s&&(v=$e.x+$e.running[y]);const b=Ct-$e.h-t.y+(t.over?$e.crashedFootPad:0);Vr(e,n,u,[v,$e.y,w,$e.h],eu,b),K2(e,t,o);const h=Vh(t);e.font="14px ui-monospace, Consolas, monospace",e.fillStyle=d,e.textAlign="left",e.fillText(`speed ${t.speed}`,10,20),e.textAlign="right",e.fillText(`HI ${r} m   ${h} m`,je-10,20);const p=t.over?"GAME OVER - ↑ / Space 로 다시 시작":s?"":"클릭 후 ↑ 또는 Space 로 시작";p&&(e.fillStyle=c,e.textAlign="center",e.fillText(p,je/2,76))}function X2(){const e=x.useRef(null),n=x.useRef(null),t=x.useRef(Gh),r=x.useRef(!1),s=x.useRef(B2()),o=x.useRef(0),[l,i]=x.useState([]);function c(m){if(m.length===0)return;const y=m.map(v=>({...v,id:o.current++}));i(v=>[...v,...y].slice(-60))}function u(m){const y=D2(t.current,m);t.current=y.state,Kh.includes(m)&&(r.current=!0),c(y.logs)}function d(m){Jh.includes(m.code)&&(m.preventDefault(),m.repeat||u(m.code))}function f(m){const y=R2(t.current,m.code);t.current=y.state,c(y.logs)}return x.useEffect(()=>{},[]),x.useEffect(()=>{const m=e.current.getContext("2d"),y=new Image;y.src=w2;let v=0,w=performance.now(),b=0;function h(){const g=L2(t.current),S=[...g.logs];if(g.state.over&&!t.current.over){const k=Vh(g.state);k>s.current&&(s.current=k,z2(k),S.push({type:"code",text:`if (meters > best) localStorage.setItem('${tu}', meters)   // best=${k}`}))}t.current=g.state,c(S)}function p(g=performance.now()){if(r.current)for(b+=Math.min(g-w,100);b>=rp;)h(),b-=rp;else b=0;w=g,y.complete&&y.naturalWidth>0&&J2(m,y,t.current,s.current,r.current),v=requestAnimationFrame(p)}return p(),()=>cancelAnimationFrame(v)},[]),x.useEffect(()=>{const m=n.current;m&&(m.scrollTop=m.scrollHeight)},[l]),a.jsxs("div",{children:[a.jsx("p",{className:"mb-3 text-sm text-muted",children:"게임 화면을 클릭한 뒤 ↑ 점프, ↓ 숙이기, Space 불덩이, ← → 감속·증속합니다."}),a.jsx("canvas",{ref:e,width:je*hl,height:fr*hl,tabIndex:0,"aria-label":"공룡 점프 게임",onKeyDown:d,onKeyUp:f,onBlur:()=>{r.current=!1,t.current={...t.current,ducking:!1}},onMouseDown:m=>{m.currentTarget.focus(),u("ArrowUp")},className:"w-full cursor-pointer rounded-md border border-border bg-surface outline-none focus-visible:border-accent"}),a.jsxs("div",{ref:n,role:"log","aria-live":"off",className:"mt-4 h-56 overflow-y-auto rounded-md border border-border bg-surface p-3 font-mono text-xs leading-5",children:[a.jsx("div",{className:"text-muted",children:"$ tail -f dino.log"}),l.map(m=>a.jsxs("div",{className:"whitespace-pre-wrap break-all",children:[a.jsx("span",{className:m.type==="event"?"text-accent":"text-muted",children:m.type==="event"?"$":">"})," ",m.text]},m.id))]}),a.jsxs("p",{className:"mt-3 text-xs text-muted",children:["공룡 그래픽:"," ",a.jsx("a",{href:"https://github.com/ShinHeeYoun/ShinHeeYoun.github.io/blob/main/src/tools/dino/CHROMIUM-LICENSE.txt",target:"_blank",rel:"noreferrer",className:"underline",children:"Chromium 프로젝트 (BSD 3-Clause)"})]})]})}function Et(){return()=>{const e=new Uint32Array(1);return crypto.getRandomValues(e),e[0]/4294967296}}const Do=2,Ro=20,Lo=4;function Xh(e){return Number.isNaN(e)?Lo:Math.min(Ro,Math.max(Do,Math.floor(e)))}function Y2(e,n){const t=Number(e);return e.trim()===""||!Number.isFinite(t)?n:Xh(t)}function op(){return{count:Lo,tops:Array(Lo).fill(""),bottoms:Array(Lo).fill("")}}function Ii(e,n){const t=Xh(n),r=s=>Array.from({length:t},(o,l)=>s[l]??"");return{count:t,tops:r(e.tops),bottoms:r(e.bottoms)}}function lp(e,n,t,r){const s=n==="top"?"tops":"bottoms",o=[...e[s]];return o[t]=r,{...e,[s]:o}}function ap(e,n,t){const r=n==="top"?"tops":"bottoms",s=[...e[r]];for(let o=s.length-1;o>0;o--){const l=Math.floor(t()*(o+1));[s[o],s[l]]=[s[l],s[o]]}return{...e,[r]:s}}function q2(e){if(typeof e!="object"||e===null)return null;const{count:n,tops:t,bottoms:r}=e;if(typeof n!="number")return null;const s=o=>Array.isArray(o)&&o.every(l=>typeof l=="string");return!s(t)||!s(r)?null:Ii({tops:t,bottoms:r},n)}function ho(e,n){return e.trim()||`${n+1}번`}function go(e){return e.trim()||"-"}const Q2={low:1.5,normal:2.5,high:4},Z2={low:.2,normal:.35,high:.5};function Yh(e,n){return Math.max(8,Math.round(e*Q2[n]))}function eS(e,n,t){const r=Yh(e,n),s=e-1,o=Array.from({length:r},()=>Array(s).fill(!1));let l=-1;for(let i=0;i<s;i++){let c=Math.floor(t()*(r-1));l>=0&&c>=l&&(c+=1),o[c][i]=!0,l=c}for(let i=0;i<r;i++)for(let c=0;c<s;c++)o[i][c]||o[i][c-1]||o[i][c+1]||t()<Z2[n]&&(o[i][c]=!0);return o}function ru(e,n){return e[n]?n+1:n>0&&e[n-1]?n-1:n}function Wt(e,n){let t=n;for(const r of e)t=ru(r,t);return t}function nS(e,n){let t=n;for(let r=e.length-1;r>=0;r--)t=ru(e[r],t);return t}function ip(e,n){const t=[{column:n,level:0}];let r=n;return e.forEach((s,o)=>{const l=ru(s,r);l!==r&&(t.push({column:r,level:o+1},{column:l,level:o+1}),r=l)}),t.push({column:r,level:e.length+1}),t}function tS(e,n,t,r){if(e.length<2||n>=1)return[...e];const s=(c,u)=>Math.abs(u.column-c.column)*t+Math.abs(u.level-c.level)*r;let o=0;for(let c=1;c<e.length;c++)o+=s(e[c-1],e[c]);let l=Math.max(0,n)*o;const i=[e[0]];for(let c=1;c<e.length;c++){const u=s(e[c-1],e[c]);if(l>=u){i.push(e[c]),l-=u;continue}if(l>0&&u>0){const d=l/u;i.push({column:e[c-1].column+(e[c].column-e[c-1].column)*d,level:e[c-1].level+(e[c].level-e[c-1].level)*d})}break}return i}const Gt="hsl(0 85% 55%)",rS="hsl(0 0% 55%)",Pa=[225,45,165,285,105,255,75,195,135,300];function sS(e){const n=Pa[e%Pa.length],t=Math.floor(e/Pa.length)%2===0?52:38;return`hsl(${n} 70% ${t}%)`}function oS(e){const n=new Map;return e.map(t=>{const r=t.trim();return r===""?rS:(n.has(r)||n.set(r,n.size),sS(n.get(r)))})}const qh="ladder_draft",cp=76,up=18,lS=900,dp="rgb(var(--color-muted) / 0.55)",pp={low:"적게",normal:"보통",high:"많이"},xo=(e,n)=>e.replace(/\)$/,` / ${n})`);function aS(){try{const e=localStorage.getItem(qh);return e&&q2(JSON.parse(e))||op()}catch{return op()}}function fp(e){return e.map(n=>`${n.column+.5},${n.level}`).join(" ")}const ht="rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent disabled:opacity-50",yo="w-full min-w-0 rounded-md border px-2 py-1.5 text-center text-sm";function iS(){const[e,n]=x.useState(aS),[t,r]=x.useState(()=>String(e.count)),[s,o]=x.useState("normal"),[l,i]=x.useState(null),[c,u]=x.useState(null),[d,f]=x.useState([]),[m,y]=x.useState(!1),[v,w]=x.useState(1),[b,h]=x.useState(!1);x.useEffect(()=>{try{localStorage.setItem(qh,JSON.stringify(e))}catch{}},[e]),x.useEffect(()=>{if(!c)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){w(1);return}w(0);const $=performance.now();let A=0;const z=T=>{const R=Math.min(1,(T-$)/lS);w(R),R<1&&(A=requestAnimationFrame(z))};return A=requestAnimationFrame(z),()=>cancelAnimationFrame(A)},[c]);const p=e.count,g=l?l.length:Yh(p,s),S=x.useMemo(()=>oS(e.bottoms),[e.bottoms]),k=l!==null;function C($){r($);const A=Number($);$.trim()!==""&&Number.isInteger(A)&&A>=Do&&A<=Ro&&n(z=>Ii(z,A))}function E(){i(eS(p,s,Et())),u(null),f([]),y(!1)}function N(){i(null),u(null),f([]),y(!1)}function U($){u($),f(A=>A.includes($.start)?A:[...A,$.start])}function I(){y(!1),u(null),f([])}async function L(){if(!l)return;const $=Array.from({length:p},(A,z)=>`${ho(e.tops[z],z)} → ${go(e.bottoms[Wt(l,z)])}`);try{await navigator.clipboard.writeText($.join(`
`)),h(!0),window.setTimeout(()=>h(!1),2e3)}catch{}}const J=$=>m||d.includes($),ue=x.useMemo(()=>{if(!l||!c)return null;const $=ip(l,c.start);return{end:Wt(l,c.start),forward:$,drawn:c.from==="bottom"?[...$].reverse():$}},[l,c]),Ke={gridTemplateColumns:`repeat(${p}, minmax(0, 1fr))`};return a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-muted",children:"열 수를 정하고 위(이름)와 아래(결과)를 적은 뒤 시작을 누르세요. 시작하기 전에는 사다리의 가로줄이 만들어지지 않습니다."}),!k&&a.jsxs("div",{className:"mt-4 flex flex-wrap items-end gap-x-5 gap-y-3",children:[a.jsxs("div",{children:[a.jsxs("label",{htmlFor:"ladder-count",className:"block text-sm font-medium",children:["열 수 (",Do,"~",Ro,")"]}),a.jsx("input",{id:"ladder-count",type:"number",inputMode:"numeric",min:Do,max:Ro,step:1,value:t,onChange:$=>C($.target.value),onBlur:()=>{const $=Y2(t,e.count);n(Ii(e,$)),r(String($))},className:"mt-1 w-24 rounded-md border border-border bg-surface px-2 py-1.5 text-sm outline-none focus:border-accent"})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"ladder-density",className:"block text-sm font-medium",children:"가로줄"}),a.jsx("select",{id:"ladder-density",value:s,onChange:$=>o($.target.value),className:"mt-1 rounded-md border border-border bg-surface px-2 py-1.5 text-sm",children:Object.keys(pp).map($=>a.jsx("option",{value:$,children:pp[$]},$))})]}),a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx("button",{type:"button",className:ht,onClick:()=>n(ap(e,"top",Et())),children:"이름 섞기"}),a.jsx("button",{type:"button",className:ht,onClick:()=>n(ap(e,"bottom",Et())),children:"결과 섞기"}),a.jsx("button",{type:"button",onClick:E,className:"rounded-md bg-accent px-5 py-1.5 text-sm font-semibold text-background transition-colors hover:bg-accent-hover",children:"시작"})]})]}),k&&a.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[m?a.jsx("button",{type:"button",className:ht,onClick:I,children:"결과 숨기기"}):a.jsx("button",{type:"button",className:ht,onClick:()=>y(!0),children:"전체 결과 보기"}),m&&a.jsx("button",{type:"button",className:ht,onClick:L,children:b?"복사됨":"결과 복사"}),a.jsx("button",{type:"button",className:ht,onClick:E,children:"다시 섞기"}),a.jsx("button",{type:"button",className:ht,onClick:N,children:"처음으로"})]}),a.jsx("div",{className:"mt-5 overflow-x-auto pb-2",children:a.jsxs("div",{style:{minWidth:p*cp},children:[a.jsx("div",{className:"grid",style:Ke,children:Array.from({length:p},($,A)=>{const z=(c==null?void 0:c.start)===A;return a.jsx("div",{className:"px-1",children:k?a.jsxs("button",{type:"button","aria-pressed":z,onClick:()=>U({start:A,from:"top"}),className:`${yo} truncate`,style:z?{borderColor:Gt,backgroundColor:xo(Gt,.2)}:J(A)&&l?{borderColor:S[Wt(l,A)],backgroundColor:xo(S[Wt(l,A)],.15)}:{borderColor:"rgb(var(--color-border))"},children:[J(A)&&"✓ ",ho(e.tops[A],A)]}):a.jsx("input",{type:"text",value:e.tops[A],maxLength:20,placeholder:`${A+1}번`,"aria-label":`${A+1}번째 열 위 텍스트`,onChange:T=>n(lp(e,"top",A,T.target.value)),className:`${yo} border-border bg-surface outline-none focus:border-accent`})},A)})}),a.jsxs("div",{className:"relative",children:[a.jsxs("svg",{viewBox:`0 0 ${p} ${g+1}`,preserveAspectRatio:"none","aria-hidden":"true",className:"block w-full",style:{height:(g+1)*up},children:[Array.from({length:p},($,A)=>a.jsx("line",{x1:A+.5,x2:A+.5,y1:0,y2:g+1,stroke:dp,strokeWidth:2,strokeDasharray:k?void 0:"4 5",vectorEffect:"non-scaling-stroke"},`v${A}`)),l==null?void 0:l.map(($,A)=>$.map((z,T)=>z?a.jsx("line",{x1:T+.5,x2:T+1.5,y1:A+1,y2:A+1,stroke:dp,strokeWidth:2,strokeLinecap:"round",vectorEffect:"non-scaling-stroke"},`h${A}-${T}`):null)),l&&Array.from({length:p},($,A)=>J(A)&&A!==(c==null?void 0:c.start)?a.jsx("polyline",{points:fp(ip(l,A)),fill:"none",stroke:S[Wt(l,A)],strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},`p${A}`):null),ue&&a.jsx("polyline",{"data-testid":"picked-path",points:fp(tS(ue.drawn,v,cp,up)),fill:"none",stroke:Gt,strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]}),!k&&a.jsx("p",{className:"pointer-events-none absolute inset-0 flex items-center justify-center text-center text-sm text-muted",children:a.jsx("span",{className:"rounded bg-background/80 px-3 py-1",children:"시작하면 사다리가 나타납니다"})})]}),a.jsx("div",{className:"grid",style:Ke,children:Array.from({length:p},($,A)=>{const z=(ue==null?void 0:ue.end)===A;return a.jsx("div",{className:"px-1",children:k&&l?a.jsx("button",{type:"button","aria-pressed":z,onClick:()=>U({start:nS(l,A),from:"bottom"}),className:`${yo} truncate`,style:z?{borderColor:Gt,backgroundColor:xo(Gt,.2)}:{borderColor:S[A],backgroundColor:xo(S[A],.15)},children:go(e.bottoms[A])}):a.jsx("input",{type:"text",value:e.bottoms[A],maxLength:20,placeholder:"결과","aria-label":`${A+1}번째 열 아래 텍스트`,onChange:T=>n(lp(e,"bottom",A,T.target.value)),className:`${yo} bg-surface outline-none focus:border-accent`,style:{borderColor:e.bottoms[A].trim()?S[A]:"rgb(var(--color-border))"}})},A)})})]})}),k&&l&&a.jsxs("div",{className:"mt-4",children:[a.jsx("p",{role:"status",className:"min-h-6 font-mono text-sm",children:c&&ue?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{color:Gt},children:"●"})," ",ho(e.tops[c.start],c.start)," →"," ",a.jsx("strong",{children:go(e.bottoms[ue.end])})]}):a.jsx("span",{className:"text-muted",children:"위 또는 아래 상자를 눌러 연결된 길을 확인하세요."})}),a.jsxs("p",{className:"mt-1 text-xs text-muted",children:["확인한 열 ",m?p:d.length," / ",p]}),a.jsxs("table",{className:"mt-3 w-full max-w-md border-collapse text-sm",children:[a.jsx("caption",{className:"sr-only",children:"이름별 결과"}),a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-border text-left text-xs text-muted",children:[a.jsx("th",{className:"py-1 pr-3 font-normal",children:"이름"}),a.jsx("th",{className:"py-1 font-normal",children:"결과"})]})}),a.jsx("tbody",{children:Array.from({length:p},($,A)=>{const z=Wt(l,A);return a.jsxs("tr",{className:"border-b border-border/60",children:[a.jsx("td",{className:"py-1 pr-3",children:ho(e.tops[A],A)}),a.jsx("td",{className:"py-1",children:J(A)?a.jsxs("span",{className:"inline-flex items-center gap-2",children:[a.jsx("span",{"aria-hidden":"true",className:"inline-block h-2.5 w-2.5 rounded-full",style:{backgroundColor:S[z]}}),go(e.bottoms[z])]}):a.jsx("span",{className:"text-muted",children:"?"})})]},A)})})]})]})]})}const cS="AIzaSyB5pTwlj3fIO2dQ6AOt8UvoDHDk-VAcT8I",uS="".trim()||cS,Qh="__googleMapsReady";let Kr=null;function dS(e){return`https://maps.googleapis.com/maps/api/js?${new URLSearchParams({key:e,v:"weekly",loading:"async",language:"ko",callback:Qh}).toString()}`}function pS(e,n){const t=window;return t.gm_authFailure=n,Kr||(Kr=new Promise((r,s)=>{t[Qh]=()=>r();const o=document.createElement("script");o.src=dS(e),o.async=!0,o.onerror=()=>{Kr=null,o.remove(),s(new Error("The Google Maps script could not be loaded"))},document.head.appendChild(o)}),Kr)}const fS={center:{lat:20,lng:0},zoom:2},Zh=2,Nr=85;function zs(e){return e>=-180&&e<180?e:((e+180)%360+360)%360-180}function mS(e){return Math.min(Nr,Math.max(-Nr,e))}function e0({lat:e,lng:n}){const t=zs(n),r=e<0?"S":"N",s=t<0?"W":"E";return`${Math.abs(e).toFixed(5)}° ${r}, ${Math.abs(t).toFixed(5)}° ${s}`}function hS({lat:e,lng:n}){return`${e.toFixed(5)}, ${zs(n).toFixed(5)}`}const gS=5;function xS({dark:e,initial:n,restoreType:t,locked:r,onView:s,onClick:o,markers:l,lines:i,jump:c,onJumped:u}){const d=x.useRef(null),f=x.useRef(null),m=x.useRef(null),y=x.useRef(!1),v=x.useRef(null),[w,b]=x.useState(!1),h=x.useRef({onView:s,onClick:o,onJumped:u});return h.current={onView:s,onClick:o,onJumped:u},x.useEffect(()=>{let p=!1;const g=d.current;async function S(){const{Map:k}=await google.maps.importLibrary("maps"),C=await google.maps.importLibrary("marker");if(p||!g)return;m.current={AdvancedMarkerElement:C.AdvancedMarkerElement,PinElement:C.PinElement};const E=new k(g,{center:n.center,zoom:n.zoom,mapTypeId:n.mapTypeId,minZoom:Zh,mapId:"DEMO_MAP_ID",colorScheme:e?google.maps.ColorScheme.DARK:google.maps.ColorScheme.LIGHT,restriction:{latLngBounds:{north:Nr,south:-Nr,west:-180,east:180},strictBounds:!0},gestureHandling:window.matchMedia("(pointer: coarse)").matches?"cooperative":"greedy",streetViewControl:!1,mapTypeControl:!0,fullscreenControl:!0});E.addListener("click",N=>{N.latLng&&h.current.onClick({lat:N.latLng.lat(),lng:zs(N.latLng.lng())})}),E.addListener("idle",()=>{const N=E.getCenter();N&&h.current.onView({center:{lat:N.lat(),lng:N.lng()},zoom:E.getZoom()??n.zoom,mapTypeId:E.getMapTypeId()??n.mapTypeId})}),f.current=E,b(!0)}return S(),()=>{p=!0,f.current&&google.maps.event.clearInstanceListeners(f.current),f.current=null,m.current=null,g&&(g.innerHTML="")}},[]),x.useEffect(()=>{const p=f.current;if(!(!w||!p||r===y.current))if(y.current=r,r)v.current={center:p.getCenter(),zoom:p.getZoom()},p.setOptions({mapTypeId:"satellite",mapTypeControl:!1,maxZoom:gS});else{p.setOptions({mapTypeId:t,mapTypeControl:!0,maxZoom:null});const g=v.current;v.current=null,g!=null&&g.center&&p.setCenter(g.center),(g==null?void 0:g.zoom)!==void 0&&p.setZoom(g.zoom)}},[r,w,t]),x.useEffect(()=>{const p=f.current,g=m.current;if(!w||!p||!g)return;const S=l.map(C=>{let E;if(C.kind==="pin")E=new g.PinElement({background:C.color,borderColor:"#ffffff",glyphColor:"#ffffff",glyph:C.glyph}).element;else{const N=document.createElement("div");N.className="h-3.5 w-3.5 rounded-full border-2 border-white shadow",N.style.background=C.color,N.style.transform="translateY(50%)",E=N}return new g.AdvancedMarkerElement({map:p,position:C.position,title:C.title,content:E})}),k=i.filter(C=>C.path.length>=2).map(C=>C.closed&&C.path.length>=3?new google.maps.Polygon({map:p,paths:C.path,geodesic:!0,strokeColor:C.color,strokeWeight:3,fillColor:C.color,fillOpacity:.18}):new google.maps.Polyline({map:p,path:C.path,geodesic:!0,strokeColor:C.color,strokeWeight:3,...C.dashed?{strokeOpacity:0,icons:[{icon:{path:"M 0,-1 0,1",strokeOpacity:1,scale:3},offset:"0",repeat:"14px"}]}:{}}));return()=>{for(const C of S)C.map=null;for(const C of k)C.setMap(null)}},[l,i,w]),x.useEffect(()=>{!w||!f.current||!c||(f.current.panTo({lat:c.place.lat,lng:c.place.lng}),f.current.setZoom(c.place.zoom),h.current.onJumped())},[c,w]),a.jsx("div",{ref:d,className:"h-[65vh] min-h-[22rem] w-full overflow-hidden rounded-lg border border-border bg-surface"})}const n0=6371.0088,or=e=>e*Math.PI/180;function _i(e,n){const t=or(n.lat-e.lat),r=or(n.lng-e.lng),s=Math.sin(t/2)**2+Math.cos(or(e.lat))*Math.cos(or(n.lat))*Math.sin(r/2)**2;return 2*n0*Math.asin(Math.min(1,Math.sqrt(s)))}function yS(e,n=!1){let t=0;for(let r=1;r<e.length;r++)t+=_i(e[r-1],e[r]);return n&&e.length>2&&(t+=_i(e[e.length-1],e[0])),t}const vS=({lat:e,lng:n})=>{const t=or(e),r=or(n);return[Math.cos(t)*Math.cos(r),Math.cos(t)*Math.sin(r),Math.sin(t)]},vo=(e,n)=>e[0]*n[0]+e[1]*n[1]+e[2]*n[2],SS=(e,n)=>[e[1]*n[2]-e[2]*n[1],e[2]*n[0]-e[0]*n[2],e[0]*n[1]-e[1]*n[0]];function wS(e){if(e.length<3)return 0;const n=e.map(vS);let t=0;for(let s=1;s<n.length-1;s++){const o=vo(n[0],SS(n[s],n[s+1])),l=1+vo(n[0],n[s])+vo(n[s],n[s+1])+vo(n[s+1],n[0]);t+=2*Math.atan2(o,l)}const r=Math.abs(t);return Math.min(r,4*Math.PI-r)*n0**2}const Di=e=>Math.round(e).toLocaleString("en-US");function Ri(e){return e<1?`${Math.round(e*1e3)} m`:e<100?`${e.toFixed(1)} km`:`${Di(e)} km`}function kS(e){return e<1?`${Di(e*1e6)} m²`:e<100?`${e.toFixed(1)} km²`:`${Di(e)} km²`}const bS=10,su=1e3,CS=[{name:"서울",country:"대한민국",lat:37.5665,lng:126.978},{name:"도쿄",country:"일본",lat:35.6762,lng:139.6503},{name:"베이징",country:"중국",lat:39.9042,lng:116.4074},{name:"상하이",country:"중국",lat:31.2304,lng:121.4737},{name:"홍콩",country:"중국",lat:22.3193,lng:114.1694},{name:"하노이",country:"베트남",lat:21.0278,lng:105.8342},{name:"방콕",country:"태국",lat:13.7563,lng:100.5018},{name:"싱가포르",country:"싱가포르",lat:1.3521,lng:103.8198},{name:"자카르타",country:"인도네시아",lat:-6.2088,lng:106.8456},{name:"델리",country:"인도",lat:28.6139,lng:77.209},{name:"뭄바이",country:"인도",lat:19.076,lng:72.8777},{name:"울란바토르",country:"몽골",lat:47.8864,lng:106.9057},{name:"두바이",country:"아랍에미리트",lat:25.2048,lng:55.2708},{name:"이스탄불",country:"튀르키예",lat:41.0082,lng:28.9784},{name:"모스크바",country:"러시아",lat:55.7558,lng:37.6173},{name:"카이로",country:"이집트",lat:30.0444,lng:31.2357},{name:"나이로비",country:"케냐",lat:-1.2921,lng:36.8219},{name:"케이프타운",country:"남아프리카공화국",lat:-33.9249,lng:18.4241},{name:"라고스",country:"나이지리아",lat:6.5244,lng:3.3792},{name:"파리",country:"프랑스",lat:48.8566,lng:2.3522},{name:"런던",country:"영국",lat:51.5072,lng:-.1276},{name:"로마",country:"이탈리아",lat:41.9028,lng:12.4964},{name:"베를린",country:"독일",lat:52.52,lng:13.405},{name:"마드리드",country:"스페인",lat:40.4168,lng:-3.7038},{name:"암스테르담",country:"네덜란드",lat:52.3676,lng:4.9041},{name:"아테네",country:"그리스",lat:37.9838,lng:23.7275},{name:"스톡홀름",country:"스웨덴",lat:59.3293,lng:18.0686},{name:"레이캬비크",country:"아이슬란드",lat:64.1466,lng:-21.9426},{name:"뉴욕",country:"미국",lat:40.7128,lng:-74.006},{name:"워싱턴 D.C.",country:"미국",lat:38.9072,lng:-77.0369},{name:"시카고",country:"미국",lat:41.8781,lng:-87.6298},{name:"로스앤젤레스",country:"미국",lat:34.0522,lng:-118.2437},{name:"호놀룰루",country:"미국",lat:21.3099,lng:-157.8581},{name:"밴쿠버",country:"캐나다",lat:49.2827,lng:-123.1207},{name:"멕시코시티",country:"멕시코",lat:19.4326,lng:-99.1332},{name:"보고타",country:"콜롬비아",lat:4.711,lng:-74.0721},{name:"리마",country:"페루",lat:-12.0464,lng:-77.0428},{name:"상파울루",country:"브라질",lat:-23.5505,lng:-46.6333},{name:"부에노스아이레스",country:"아르헨티나",lat:-34.6037,lng:-58.3816},{name:"시드니",country:"오스트레일리아",lat:-33.8688,lng:151.2093},{name:"멜버른",country:"오스트레일리아",lat:-37.8136,lng:144.9631},{name:"오클랜드",country:"뉴질랜드",lat:-36.8485,lng:174.7633}];function NS(e){return Math.round(su*Math.exp(-Math.max(0,e)/1500))}function PS(e,n=bS,t=CS){const r=[...t],s=Math.min(n,r.length);for(let o=0;o<s;o++){const l=o+Math.min(r.length-o-1,Math.floor(e()*(r.length-o)));[r[o],r[l]]=[r[l],r[o]]}return{places:r.slice(0,s),results:[],revealed:!1}}function t0(e){return e.results.length===e.places.length&&!e.revealed}function jS(e){return e.places[e.revealed?e.results.length-1:e.results.length]}function ES(e,n){if(e.revealed||e.results.length>=e.places.length)return e;const t=e.places[e.results.length],r=_i(n,t);return{...e,results:[...e.results,{place:t,guess:n,km:r,points:NS(r)}],revealed:!0}}function TS(e){return e.revealed?{...e,revealed:!1}:e}function Li(e){return e.results.reduce((n,t)=>n+t.points,0)}function AS(e){return e.places.length*su}function IS(e){const n=typeof e=="string"?Number(e):e;return typeof n=="number"&&Number.isInteger(n)&&n>=0?n:0}const mp=e=>Math.round(e*1e4)/1e4;function _S(e){return`https://api.open-meteo.com/v1/forecast?${new URLSearchParams({latitude:String(mp(e.lat)),longitude:String(mp(e.lng)),current:"temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",wind_speed_unit:"ms",timezone:"auto"}).toString()}`}function DS(e){if(typeof e!="object"||e===null)return null;const{timezone:n,utc_offset_seconds:t,current:r}=e;if(typeof n!="string"||n===""||typeof t!="number"||!Number.isFinite(t)||typeof r!="object"||r===null)return null;const s=r,o=d=>typeof d=="number"&&Number.isFinite(d)?d:null,l=o(s.temperature_2m),i=o(s.relative_humidity_2m),c=o(s.wind_speed_10m),u=o(s.weather_code);return l===null||i===null||c===null||u===null?null:{timeZone:n,utcOffsetSeconds:t,temperature:l,humidity:i,windSpeed:c,code:u}}async function RS(e,n=(t,r)=>fetch(t,r)){const t=await n(_S(e));if(!t.ok)throw new Error(`Weather service error (${t.status})`);const r=DS(await t.json());if(!r)throw new Error("The weather service answered with something unexpected");return r}function hp(e){return e===0?{text:"맑음",icon:"☀️"}:e===1?{text:"대체로 맑음",icon:"🌤️"}:e===2?{text:"구름 조금",icon:"⛅"}:e===3?{text:"흐림",icon:"☁️"}:e===45||e===48?{text:"안개",icon:"🌫️"}:e>=51&&e<=55?{text:"이슬비",icon:"🌦️"}:e===56||e===57?{text:"어는 이슬비",icon:"🌧️"}:e>=61&&e<=65?{text:"비",icon:"🌧️"}:e===66||e===67?{text:"어는 비",icon:"🌧️"}:e>=71&&e<=75?{text:"눈",icon:"🌨️"}:e===77?{text:"싸락눈",icon:"🌨️"}:e>=80&&e<=82?{text:"소나기",icon:"🌦️"}:e===85||e===86?{text:"눈 소나기",icon:"🌨️"}:e===95?{text:"뇌우",icon:"⛈️"}:e===96||e===99?{text:"우박을 동반한 뇌우",icon:"⛈️"}:{text:"알 수 없음",icon:"❔"}}function LS(e,n){try{return new Intl.DateTimeFormat("ko-KR",{timeZone:n,year:"numeric",month:"long",day:"numeric",weekday:"short",hour:"numeric",minute:"2-digit",second:"2-digit"}).format(e)}catch{return""}}function OS(e,n){const t=Math.round((e-n)/60);if(t===0)return"나와 같은 시각";const r=Math.floor(Math.abs(t)/60),s=Math.abs(t)%60;return`나보다 ${[r>0?`${r}시간`:"",s>0?`${s}분`:""].filter(Boolean).join(" ")} ${t>0?"빠름":"느림"}`}const mr="rounded-lg border border-border bg-surface p-4",hr="rounded-md border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:border-accent disabled:opacity-50",ja="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover disabled:opacity-50";function MS({picked:e,weather:n,now:t,copied:r,onCopy:s,onClear:o}){if(!e)return a.jsx("div",{className:mr,children:a.jsx("p",{className:"text-sm text-muted",children:"지도를 누르면 그 곳의 위도·경도와 현지 시각, 날씨가 표시됩니다."})});const l=-t.getTimezoneOffset()*60;return a.jsxs("div",{className:mr,"aria-live":"polite",children:[a.jsx("p",{className:"text-xs text-muted",children:"선택한 위치"}),a.jsx("p",{className:"mt-1 font-mono text-lg",children:e0(e)}),n.status==="loading"&&a.jsx("p",{className:"mt-3 text-sm text-muted",children:"시각과 날씨를 불러오는 중..."}),n.status==="error"&&a.jsx("p",{className:"mt-3 text-sm text-muted",children:"이 위치의 시각과 날씨를 가져오지 못했습니다. 잠시 후 다시 눌러 보세요."}),n.status==="ready"&&a.jsxs("dl",{className:"mt-3 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2",children:[a.jsxs("div",{children:[a.jsxs("dt",{className:"text-xs text-muted",children:["현지 시각 (",n.weather.timeZone,")"]}),a.jsx("dd",{className:"font-mono",children:LS(t,n.weather.timeZone)}),a.jsx("dd",{className:"text-xs text-muted",children:OS(n.weather.utcOffsetSeconds,l)})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"text-xs text-muted",children:"지금 날씨"}),a.jsxs("dd",{children:[a.jsxs("span",{"aria-hidden":"true",children:[hp(n.weather.code).icon," "]}),hp(n.weather.code).text,", ",a.jsxs("span",{className:"font-mono",children:[n.weather.temperature.toFixed(1),"°C"]})]}),a.jsxs("dd",{className:"text-xs text-muted",children:["습도 ",Math.round(n.weather.humidity),"% · 바람 ",n.weather.windSpeed.toFixed(1)," m/s"]})]})]}),a.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[a.jsx("button",{type:"button",onClick:s,className:hr,children:r?"복사했습니다":"좌표 복사"}),a.jsx("button",{type:"button",onClick:o,className:hr,children:"표시 지우기"})]}),n.status!=="idle"&&a.jsxs("p",{className:"mt-3 text-xs text-muted",children:["날씨 정보:"," ",a.jsx("a",{href:"https://open-meteo.com/",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"Open-Meteo.com"})," ","(CC BY 4.0). 누른 위치의 좌표가 이 서비스로 전달됩니다."]})]})}function $S({points:e,closed:n,onToggleClosed:t,onUndo:r,onClear:s}){const o=n&&e.length>=3;return a.jsxs("div",{className:mr,"aria-live":"polite",children:[e.length===0?a.jsx("p",{className:"text-sm text-muted",children:"지도를 눌러 점을 찍으면 점 사이의 거리를 재 줍니다. 점을 계속 이어서 찍어 보세요."}):a.jsxs("dl",{className:"flex flex-wrap gap-x-10 gap-y-2",children:[a.jsxs("div",{children:[a.jsx("dt",{className:"text-xs text-muted",children:"점"}),a.jsxs("dd",{className:"font-mono text-lg",children:[e.length,"개"]})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"text-xs text-muted",children:o?"둘레":"거리"}),a.jsx("dd",{className:"font-mono text-lg",children:Ri(yS(e,o))})]}),o&&a.jsxs("div",{children:[a.jsx("dt",{className:"text-xs text-muted",children:"면적"}),a.jsx("dd",{className:"font-mono text-lg",children:kS(wS(e))})]})]}),a.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[a.jsx("button",{type:"button",onClick:r,disabled:e.length===0,className:hr,children:"마지막 점 취소"}),a.jsx("button",{type:"button",onClick:s,disabled:e.length===0,className:hr,children:"모두 지우기"}),a.jsx("button",{type:"button",onClick:t,disabled:e.length<3,"aria-pressed":n,className:hr,children:n?"도형 닫기 해제":"도형으로 닫기 (면적 보기)"})]}),a.jsx("p",{className:"mt-3 text-xs text-muted",children:"두 점 사이는 지구 표면을 따라 가장 짧은 길(대권)로 잽니다. 그래서 평평한 지도 위의 직선과는 다르게 보일 수 있고, 지구를 완전한 구로 보고 계산해서 실제와 0.5% 안팎의 차이가 있을 수 있습니다."})]})}function FS({children:e}){return a.jsx("li",{className:"flex flex-wrap items-baseline justify-between gap-x-4 border-b border-border/60 py-1 text-sm",children:e})}function US({quiz:e,best:n,newRecord:t,onStart:r,onNext:s,onQuit:o}){if(!e)return a.jsxs("div",{className:mr,children:[a.jsxs("p",{className:"text-sm",children:["도시 이름이 나오면 지도에서 그 위치를 눌러 맞히는 퀴즈입니다. 한 판은 10문제이고, 정답에 가까울수록 높은 점수(문제당 최대"," ",su,"점)를 받습니다."]}),a.jsxs("p",{className:"mt-2 text-xs text-muted",children:["지도는 이름이 없는 위성 사진으로 바뀌고 확대는 제한됩니다. ",n>0?`최고 기록: ${n}점`:"아직 기록이 없습니다."]}),a.jsx("button",{type:"button",onClick:r,className:`${ja} mt-3`,children:"시작"})]});if(t0(e)){const u=Li(e);return a.jsxs("div",{className:mr,role:"status",children:[a.jsx("p",{className:"text-sm text-muted",children:"게임 종료"}),a.jsxs("p",{className:"mt-1 font-mono text-4xl font-bold",children:[u,"점 ",a.jsxs("span",{className:"text-lg font-normal text-muted",children:["/ ",AS(e)]})]}),a.jsx("p",{className:"mt-1 text-sm",children:t?a.jsx("span",{className:"font-semibold text-accent",children:"최고 기록을 넘었습니다!"}):`최고 기록: ${n}점`}),a.jsx("ol",{className:"mt-3 max-w-md",children:e.results.map((d,f)=>a.jsxs(FS,{children:[a.jsxs("span",{children:[f+1,". ",d.place.name," ",a.jsxs("span",{className:"text-xs text-muted",children:["(",d.place.country,")"]})]}),a.jsxs("span",{className:"font-mono",children:[Ri(d.km)," · ",d.points,"점"]})]},f))}),a.jsx("button",{type:"button",onClick:r,className:`${ja} mt-3`,children:"다시 하기"})]})}const l=jS(e),i=e.results[e.results.length-1],c=e.revealed?e.results.length:e.results.length+1;return a.jsxs("div",{className:mr,role:"status",children:[a.jsxs("p",{className:"flex flex-wrap justify-between gap-2 text-sm text-muted",children:[a.jsxs("span",{children:["문제 ",c," / ",e.places.length]}),a.jsxs("span",{className:"font-mono",children:["현재 ",Li(e),"점"]})]}),l&&a.jsxs("p",{className:"mt-2 text-xl",children:[a.jsx("span",{className:"font-bold",children:l.name})," ",a.jsxs("span",{className:"text-sm text-muted",children:["(",l.country,")"]})]}),e.revealed&&i?a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:"mt-2 text-sm",children:["정답과 ",a.jsx("span",{className:"font-mono font-semibold",children:Ri(i.km)})," 떨어졌습니다 ·"," ",a.jsxs("span",{className:"font-mono font-semibold",children:["+",i.points,"점"]})]}),a.jsx("p",{className:"mt-1 text-xs text-muted",children:"지도의 파란 핀이 내 답, 초록 핀이 정답입니다."})]}):a.jsx("p",{className:"mt-2 text-sm text-muted",children:"이 도시가 있다고 생각하는 곳을 지도에서 누르세요."}),a.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[e.revealed&&a.jsx("button",{type:"button",onClick:s,className:ja,children:e.results.length===e.places.length?"결과 보기":"다음 문제"}),a.jsx("button",{type:"button",onClick:o,className:hr,children:"그만하기"})]})]})}const BS=["roadmap","satellite","hybrid","terrain"],zS=21;function HS(e){const n=l=>{const i=e.get(l);if(i===null||i.trim()==="")return null;const c=Number(i);return Number.isFinite(c)?c:null},t=n("lat"),r=n("lng"),s=n("z");if(t===null||r===null||s===null)return null;const o=e.get("t")??"roadmap";return{center:{lat:Math.min(Nr,Math.max(-Nr,t)),lng:zs(r)},zoom:Math.min(zS,Math.max(Zh,s)),mapTypeId:BS.includes(o)?o:"roadmap"}}function WS(e){const n=new URLSearchParams;return n.set("lat",e.center.lat.toFixed(5)),n.set("lng",zs(e.center.lng).toFixed(5)),n.set("z",String(Math.round(e.zoom*10)/10)),e.mapTypeId!=="roadmap"&&n.set("t",e.mapTypeId),n}const GS=[{id:"explore",label:"탐색"},{id:"measure",label:"거리·면적 재기"},{id:"quiz",label:"지도 퀴즈"}],r0="map_quiz_best",gp=()=>document.documentElement.classList.contains("dark");function VS(){try{return IS(localStorage.getItem(r0))}catch{return 0}}const xp="rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent disabled:opacity-50";function KS(e){return e===1?"위치 권한이 거부되었습니다. 브라우저 설정에서 이 사이트의 위치 권한을 허용해 주세요.":e===3?"위치를 찾는 데 너무 오래 걸렸습니다. 다시 시도해 주세요.":"현재 위치를 알 수 없습니다."}function JS(){const[e,n]=ih(),[t,r]=x.useState("loading"),[s,o]=x.useState(gp),[l,i]=x.useState("explore"),[c,u]=x.useState(null),[d,f]=x.useState(null),[m,y]=x.useState({status:"idle"}),[v,w]=x.useState(()=>new Date),[b,h]=x.useState(null),[p,g]=x.useState(!1),[S,k]=x.useState(null),[C,E]=x.useState([]),[N,U]=x.useState(!1),[I,L]=x.useState(null),[J,ue]=x.useState(VS),[Ke,$]=x.useState(!1),A=x.useRef(null);A.current===null&&(A.current=HS(e)??{...fS,mapTypeId:"roadmap"});const z=x.useRef(""),T=x.useRef(0),R=l==="quiz",M=x.useRef(R);M.current=R,x.useEffect(()=>{let D=!0;return pS(uS,()=>D&&r("refused")).then(()=>D&&r(X=>X==="refused"?X:"ready"),()=>D&&r("error")),()=>{D=!1}},[]),x.useEffect(()=>{const D=new MutationObserver(()=>o(gp()));return D.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>D.disconnect()},[]),x.useEffect(()=>{if(!d){y({status:"idle"});return}let D=!1;y({status:"loading"});const X=window.setTimeout(()=>{RS(d).then(fn=>!D&&y({status:"ready",weather:fn}),()=>!D&&y({status:"error"}))},300);return()=>{D=!0,window.clearTimeout(X)}},[d]),x.useEffect(()=>{if(m.status!=="ready")return;const D=window.setInterval(()=>w(new Date),1e3);return()=>window.clearInterval(D)},[m.status]),x.useEffect(()=>{C.length<3&&U(!1)},[C.length]);function Y(D){var kn;const X=M.current?((kn=A.current)==null?void 0:kn.mapTypeId)??"roadmap":D.mapTypeId;if(A.current={...D,mapTypeId:X},M.current)return;const fn=WS(A.current).toString();fn!==z.current&&(z.current=fn,n(new URLSearchParams(fn),{replace:!0}))}function Z(D){l==="explore"?f(D):l==="measure"?E(X=>[...X,D]):L(X=>X&&ES(X,D))}function Oe(D){T.current+=1,u({place:D,nonce:T.current})}function Me(){if(!("geolocation"in navigator)){k("이 브라우저는 위치 기능을 지원하지 않습니다.");return}g(!0),k(null),navigator.geolocation.getCurrentPosition(D=>{const X={lat:mS(D.coords.latitude),lng:D.coords.longitude};f(X),Oe({id:"me",name:"내 위치",...X,zoom:14}),g(!1)},D=>{k(KS(D.code)),g(!1)},{timeout:1e4,maximumAge:6e4})}async function Mn(D){const X=D==="link"?window.location.href:d?hS(d):"";if(X)try{await navigator.clipboard.writeText(X),h(D),window.setTimeout(()=>h(null),1500)}catch{}}function Ce(){L(PS(Et())),$(!1)}function $n(){if(!I)return;const D=TS(I);if(L(D),t0(D)){const X=Li(D);if(X>J){ue(X),$(!0);try{localStorage.setItem(r0,String(X))}catch{}}}}const Ws=x.useMemo(()=>{if(l==="explore"&&d)return[{id:"picked",position:d,kind:"pin",color:"#3b82f6",title:e0(d)}];if(l==="measure")return C.map((D,X)=>({id:`point-${X}`,position:D,kind:"dot",color:"#f59e0b",title:`점 ${X+1}`}));if(l==="quiz"&&(I!=null&&I.revealed)){const D=I.results[I.results.length-1];return[{id:"guess",position:D.guess,kind:"pin",color:"#3b82f6",glyph:"나",title:"내 답"},{id:"answer",position:{lat:D.place.lat,lng:D.place.lng},kind:"pin",color:"#16a34a",glyph:"✓",title:`정답: ${D.place.name}`}]}return[]},[l,d,C,I]),Wl=x.useMemo(()=>{if(l==="measure"&&C.length>=2)return[{id:"path",path:C,closed:N&&C.length>=3,color:"#f59e0b"}];if(l==="quiz"&&(I!=null&&I.revealed)){const D=I.results[I.results.length-1];return[{id:"miss",path:[D.guess,{lat:D.place.lat,lng:D.place.lng}],closed:!1,color:"#ef4444",dashed:!0}]}return[]},[l,C,N,I]);return a.jsxs("div",{children:[a.jsx("div",{className:"flex flex-wrap gap-2",role:"group","aria-label":"지도 기능",children:GS.map(D=>a.jsx("button",{type:"button","aria-pressed":l===D.id,onClick:()=>i(D.id),className:`rounded-md border px-3 py-1.5 text-sm font-semibold transition-colors ${l===D.id?"border-accent bg-accent text-background":"border-border bg-surface hover:border-accent"}`,children:D.label},D.id))}),l!=="quiz"&&a.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[a.jsx("button",{type:"button",onClick:Me,disabled:p,className:xp,children:p?"찾는 중...":"내 위치"}),a.jsx("button",{type:"button",onClick:()=>void Mn("link"),className:xp,children:b==="link"?"복사했습니다":"이 화면 링크 복사"})]}),S&&l!=="quiz"&&a.jsx("p",{role:"alert",className:"mt-2 text-sm text-red-500",children:S}),a.jsxs("div",{className:"mt-4",children:[t==="ready"&&a.jsx(xS,{dark:s,initial:A.current,restoreType:A.current.mapTypeId,locked:R,onView:Y,onClick:Z,markers:Ws,lines:Wl,jump:c,onJumped:()=>u(null)},s?"dark":"light"),t==="loading"&&a.jsx("div",{className:"flex h-[65vh] min-h-[22rem] items-center justify-center rounded-lg border border-border bg-surface text-sm text-muted",children:"지도를 불러오는 중..."}),t==="refused"&&a.jsx("p",{role:"alert",className:"rounded-lg border border-border bg-surface p-4 text-sm",children:"Google이 이 API 키를 받아주지 않았습니다. 키가 맞는지, 이 사이트 주소가 키의 허용 목록에 있는지, Maps JavaScript API가 켜져 있는지 확인하세요."}),t==="error"&&a.jsx("p",{role:"alert",className:"rounded-lg border border-border bg-surface p-4 text-sm",children:"Google 지도를 불러오지 못했습니다. 인터넷 연결을 확인하고 새로고침해 보세요."})]}),a.jsxs("div",{className:"mt-4 min-h-[14rem]",children:[l==="explore"&&a.jsx(MS,{picked:d,weather:m,now:v,copied:b==="coords",onCopy:()=>void Mn("coords"),onClear:()=>f(null)}),l==="measure"&&a.jsx($S,{points:C,closed:N,onToggleClosed:()=>U(D=>!D),onUndo:()=>E(D=>D.slice(0,-1)),onClear:()=>{E([]),U(!1)}}),l==="quiz"&&a.jsx(US,{quiz:I,best:J,newRecord:Ke,onStart:Ce,onNext:$n,onQuit:()=>L(null)})]}),a.jsx("p",{className:"mt-3 text-xs text-muted",children:"지도는 Google Maps를 사용합니다. 휠이나 두 손가락으로 확대·축소하고, 왼쪽 위에서 일반 지도와 위성 사진을 바꿀 수 있습니다."})]})}const Hs=2,us=20,Oi=20,Mi=["짜장면","짬뽕","볶음밥","탕수육"],s0=5e3,Ea=4,yp=6,vp=.1;function o0(e){const n=[];return e.forEach((t,r)=>{const s=[...t.trim()].slice(0,Oi).join("");s!==""&&n.push({row:r,name:s})}),n}function XS(e){return o0(e).length>=Hs}function Sp(e,n){if(e.length>=us)return e;const t=n===void 0?e.length:Math.min(e.length,Math.max(0,n+1));return[...e.slice(0,t),"",...e.slice(t)]}function wp(e,n){return n<0||n>=e.length?e:e.length<=Hs?e.map((t,r)=>r===n?"":t):e.filter((t,r)=>r!==n)}function YS(e,n,t){return e.map((r,s)=>s===n?t:r)}function qS(e){if(!Array.isArray(e)||!e.every(t=>typeof t=="string"))return null;const n=e.slice(0,us);for(;n.length<Hs;)n.push("");return n}function QS(e,n){return Math.min(e-1,Math.floor(n()*e))}function ZS(e){return(e%360+360)%360}function ew(e,n,t,r){const s=360/n,o=t*s+s*(vp+(1-2*vp)*r()),l=Ea+Math.min(yp-Ea,Math.floor(r()*(yp-Ea+1))),i=ZS(-o-e);return e+l*360+i}const kp=(e,n,t,r)=>{const s=r*Math.PI/180;return[e+t*Math.sin(s),n-t*Math.cos(s)]},So=e=>Math.round(e*100)/100;function nw(e,n,t,r,s){const[o,l]=kp(e,n,t,r),[i,c]=kp(e,n,t,s),u=s-r>180?1:0;return`M ${e} ${n} L ${So(o)} ${So(l)} A ${t} ${t} 0 ${u} 1 ${So(i)} ${So(c)} Z`}function l0(e){return`hsl(${Math.round(e*137.5%360)} 55% 38%)`}function tw(e,n){const t=n<=6?12:n<=10?9:n<=14?7:5,r=[...e];return r.length<=t?e:`${r.slice(0,t-1).join("")}…`}function rw(e){return e<=6?20:e<=10?16:e<=14?13:11}const a0="roulette_rows",sw=10,gt=220,xt=230,Ta=190;function ow(){try{const e=localStorage.getItem(a0);return(e?qS(JSON.parse(e)):null)??Mi}catch{return Mi}}function lw({entries:e,rotation:n,spinning:t}){const r=e.length,s=360/r,o=rw(r);return a.jsxs("svg",{viewBox:"0 0 440 440",role:"img","aria-label":r>=2?`룰렛: ${e.map(l=>l.name).join(", ")}`:"룰렛: 항목이 부족합니다",className:"mx-auto block h-auto w-full max-w-[28rem]",children:[r>=2?a.jsx("g",{style:{transform:`rotate(${n}deg)`,transformOrigin:`${gt}px ${xt}px`,transition:t?`transform ${s0}ms cubic-bezier(0.12, 0.6, 0.1, 1)`:"none"},children:e.map((l,i)=>a.jsxs("g",{children:[a.jsx("path",{d:nw(gt,xt,Ta,i*s,(i+1)*s),fill:l0(i),stroke:"white",strokeWidth:"2"}),a.jsx("text",{x:gt+Ta-14,y:xt,transform:`rotate(${i*s+s/2-90} ${gt} ${xt})`,textAnchor:"end",dominantBaseline:"central",fontSize:o,fontWeight:"600",fill:"white",children:tw(l.name,r)})]},l.row))}):a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:gt,cy:xt,r:Ta,className:"fill-surface stroke-border",strokeWidth:"2"}),a.jsxs("text",{x:gt,y:xt,textAnchor:"middle",dominantBaseline:"central",fontSize:"18",className:"fill-muted",children:["항목을 ",Hs,"개 이상 입력하세요"]})]}),a.jsx("circle",{cx:gt,cy:xt,r:"22",className:"fill-background stroke-border",strokeWidth:"3"}),a.jsx("polygon",{points:"203,6 237,6 220,50",className:"fill-accent stroke-background",strokeWidth:"3",strokeLinejoin:"round"})]})}function aw(){const[e,n]=x.useState(ow),[t,r]=x.useState(0),[s,o]=x.useState(!1),[l,i]=x.useState(null),[c,u]=x.useState([]),d=x.useRef(null),f=x.useRef(null),m=x.useRef([]),y=o0(e),v=XS(e);x.useEffect(()=>{try{localStorage.setItem(a0,JSON.stringify(e))}catch{}},[e]),x.useEffect(()=>()=>{d.current!==null&&window.clearTimeout(d.current)},[]),x.useEffect(()=>{var S;f.current!==null&&((S=m.current[f.current])==null||S.focus(),f.current=null)},[e]);function w(S){n(S),r(0),i(null)}function b(S){d.current=null,o(!1),i(S),u(k=>[S.name,...k].slice(0,sw))}function h(){if(s||!v)return;const S=Et(),k=y[QS(y.length,S)],C=ew(t,y.length,y.indexOf(k),S);if(i(null),r(C),window.matchMedia("(prefers-reduced-motion: reduce)").matches){b(k);return}o(!0),d.current=window.setTimeout(()=>b(k),s0+100)}function p(S,k){S.key==="Enter"&&!S.nativeEvent.isComposing&&e.length<us&&(S.preventDefault(),f.current=k+1,w(Sp(e,k)))}function g(){l&&w(wp(e,l.row))}return a.jsxs("div",{className:"grid gap-8 lg:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]",children:[a.jsxs("div",{children:[a.jsx(lw,{entries:y,rotation:t,spinning:s}),a.jsx("button",{type:"button",onClick:h,disabled:s||!v,className:"mt-4 w-full rounded-lg bg-accent px-4 py-4 text-lg font-semibold text-background transition-colors hover:bg-accent-hover disabled:opacity-50",children:s?"돌아가는 중...":"돌리기"}),a.jsx("div",{role:"status","aria-live":"polite",className:"mt-4 min-h-[5rem]",children:l&&a.jsxs("div",{className:"rounded-lg border border-accent bg-accent/10 p-4",children:[a.jsx("p",{className:"text-sm text-muted",children:"결과"}),a.jsx("p",{className:"mt-1 break-words text-3xl font-bold",children:l.name}),a.jsx("button",{type:"button",onClick:g,className:"mt-3 rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent",children:"이 항목 빼고 다시"})]})})]}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-semibold",children:"항목"}),a.jsxs("p",{className:"mt-1 text-xs text-muted",children:[Hs,"~",us,"개, 이름은 ",Oi,"자까지입니다. 비워 둔 칸은 빼고 돌립니다. 결과는 돌리기 전에 브라우저의 보안 난수로 정해지고, 모든 항목의 확률이 같습니다."]}),a.jsx("ul",{className:"mt-3 space-y-2",children:e.map((S,k)=>a.jsxs("li",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"h-4 w-4 shrink-0 rounded-sm",style:{background:S.trim()===""?"transparent":l0(y.findIndex(C=>C.row===k))},"aria-hidden":"true"}),a.jsx("input",{ref:C=>{m.current[k]=C},type:"text",value:S,disabled:s,maxLength:Oi*2,placeholder:`항목 ${k+1}`,"aria-label":`항목 ${k+1}`,onChange:C=>w(YS(e,k,C.target.value)),onKeyDown:C=>p(C,k),className:"min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none disabled:opacity-60"}),a.jsx("button",{type:"button",disabled:s,onClick:()=>w(wp(e,k)),"aria-label":`항목 ${k+1} 지우기`,className:"rounded-md border border-border bg-surface px-2.5 py-2 text-sm transition-colors hover:border-accent disabled:opacity-50",children:"✕"})]},k))}),a.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[a.jsx("button",{type:"button",disabled:s||e.length>=us,onClick:()=>{f.current=e.length,w(Sp(e))},className:"rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent disabled:opacity-50",children:"항목 추가"}),a.jsx("button",{type:"button",disabled:s,onClick:()=>w(Mi),className:"rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent disabled:opacity-50",children:"예시로 되돌리기"})]}),c.length>0&&a.jsxs("section",{className:"mt-8",children:[a.jsx("h2",{className:"text-lg font-semibold",children:"지난 결과"}),a.jsx("ol",{className:"mt-2 list-inside list-decimal space-y-1 text-sm",children:c.map((S,k)=>a.jsx("li",{className:k===0?"font-semibold":"text-muted",children:S},k))})]})]})]})}const ct=5,Bl=3,un=["aces","deuces","threes","fours","fives","sixes","choice","fourOfAKind","fullHouse","smallStraight","largeStraight","yacht"],gl=un.slice(0,6),Oo=63,ou=35,iw=105,cw=323,bp={aces:"Aces",deuces:"Deuces",threes:"Threes",fours:"Fours",fives:"Fives",sixes:"Sixes",choice:"Choice",fourOfAKind:"4 of a Kind",fullHouse:"Full House",smallStraight:"Small Straight",largeStraight:"Large Straight",yacht:"Yacht"},uw={aces:"1의 눈의 합",deuces:"2의 눈의 합",threes:"3의 눈의 합",fours:"4의 눈의 합",fives:"5의 눈의 합",sixes:"6의 눈의 합",choice:"모든 눈의 합",fourOfAKind:"같은 눈 4개 이상: 모든 눈의 합",fullHouse:"3개 + 2개: 모든 눈의 합",smallStraight:"4개 연속: 15점",largeStraight:"5개 연속: 30점",yacht:"5개 모두 같음: 50점"};function i0(e){return Array.isArray(e)&&e.length===ct&&e.every(n=>Number.isInteger(n)&&n>=1&&n<=6)}function _s(e,n){if(!i0(n))throw new RangeError(`Expected ${ct} dice showing 1 to 6, got ${JSON.stringify(n)}`);const t=[0,0,0,0,0,0,0];for(const o of n)t[o]++;const r=n.reduce((o,l)=>o+l,0),s=(o,l)=>t.slice(o,o+l).every(i=>i>0);switch(e){case"aces":return t[1]*1;case"deuces":return t[2]*2;case"threes":return t[3]*3;case"fours":return t[4]*4;case"fives":return t[5]*5;case"sixes":return t[6]*6;case"choice":return r;case"fourOfAKind":return t.some(o=>o>=4)?r:0;case"fullHouse":return t.includes(3)&&t.includes(2)?r:0;case"smallStraight":return s(1,4)||s(2,4)||s(3,4)?15:0;case"largeStraight":return s(1,5)||s(2,5)?30:0;case"yacht":return t.includes(5)?50:0}}function gr(e){return e>=Oo?ou:0}function Cp(){const e={};for(const n of un)e[n]=null;return{dice:Array(ct).fill(0),held:Array(ct).fill(!1),rollsLeft:Bl,scores:e,history:[]}}function zl(e){return e.rollsLeft<Bl}function qn(e){return e.history.length>=un.length}function c0(e){return 1+Math.floor(e()*6)}function dw(e,n){if(qn(e)||e.rollsLeft<=0)return e;const t=e.dice.map((r,s)=>e.held[s]?r:c0(n));return{...e,dice:t,rollsLeft:e.rollsLeft-1}}function pw(e,n){if(!Number.isInteger(n)||n<0||n>=ct||qn(e)||!zl(e)||e.rollsLeft<=0)return e;const t=e.held.map((r,s)=>s===n?!r:r);return{...e,held:t}}function fw(e,n){return qn(e)||!zl(e)||!un.includes(n)||e.scores[n]!==null?e:{dice:Array(ct).fill(0),held:Array(ct).fill(!1),rollsLeft:Bl,scores:{...e.scores,[n]:_s(n,e.dice)},history:[...e.history,{dice:[...e.dice],category:n}]}}function mw(e){const n={};for(const t of un)n[t]=zl(e)&&e.scores[t]===null?_s(t,e.dice):null;return n}function xl(e){return gl.reduce((n,t)=>n+(e.scores[t]??0),0)}function $i(e){return un.reduce((t,r)=>t+(e.scores[r]??0),0)+gr(xl(e))}function hw(e,n,t){if(!qn(e))throw new Error("A record can only be made of a finished game");return{id:n,playedAt:t,total:$i(e),upperSum:xl(e),bonus:gr(xl(e)),turns:e.history.map(r=>({dice:[...r.dice],category:r.category}))}}function u0(e){if(typeof e!="object"||e===null)return!1;const{turns:n}=e;if(!Array.isArray(n)||n.length!==un.length)return!1;const t=new Set;let r=0,s=0;for(const l of n){if(typeof l!="object"||l===null||!i0(l.dice)||!un.includes(l.category)||t.has(l.category))return!1;t.add(l.category);const i=_s(l.category,l.dice);r+=i,gl.includes(l.category)&&(s+=i)}const o=gr(s);return e.upperSum===s&&e.bonus===o&&e.total===r+o}const lu=55,Fi=24,d0=6e3,gw=Math.floor(d0/lu);function xw(e){return!Number.isFinite(e)||e<0?Fi:Math.min(gw,Math.max(Fi,Math.floor(e/lu)))}function yw(e,n){if(!Number.isInteger(e)||e<1||e>6)return c0(n);const t=1+Math.floor(n()*5);return t>=e?t+1:t}const Ds=12,vw=/^[\p{L}\p{Nd}_-]+(?: [\p{L}\p{Nd}_-]+)*$/u;function Hl(e){if(typeof e!="string")return null;const n=e.replace(/ +/g," ").replace(/^ | $/g,"");return n===""||[...n].length>Ds?null:vw.test(n)?n:null}function Sw(e){return{id:e.id,playedAt:e.playedAt,total:e.total,upperSum:e.upperSum,bonus:e.bonus}}const Np=(e,n,t)=>typeof e=="number"&&Number.isInteger(e)&&e>=n&&e<=t;function p0(e){if(!Array.isArray(e))return[];const n=[];for(const t of e){if(typeof t!="object"||t===null)continue;const{id:r,playedAt:s,total:o,upperSum:l,bonus:i,nickname:c}=t;if(typeof r!="string"||r===""||typeof s!="string"||Number.isNaN(Date.parse(s))||!Np(o,0,cw)||!Np(l,0,iw)||i!==0&&i!==ou)continue;const u={id:r,playedAt:s,total:o,upperSum:l,bonus:i};typeof c=="string"&&Hl(c)===c&&(u.nickname=c),n.push(u)}return n}const Pp=(e,n)=>Date.parse(n.playedAt)-Date.parse(e.playedAt),jp="yacht_scores",Mo=100;function ww(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}class kw{constructor(n=ww()){this.storage=n}read(){var n;try{const t=(n=this.storage)==null?void 0:n.getItem(jp);return t?p0(JSON.parse(t)):[]}catch{return[]}}async save(n,t){var r;if(!u0(n))return"saved";try{const s=this.read();if(s.some(l=>l.id===n.id))return"duplicate";const o=[...s,Sw(n)].slice(-Mo);(r=this.storage)==null||r.setItem(jp,JSON.stringify(o))}catch{}return"saved"}async top(n){return[...this.read()].sort((t,r)=>r.total-t.total||Pp(t,r)).slice(0,Math.max(0,n))}async recent(n){return[...this.read()].sort(Pp).slice(0,Math.max(0,n))}}function Ep(e){if(e.length===0)return{games:0,best:0,average:0};const n=e.reduce((t,r)=>t+r.total,0);return{games:e.length,best:Math.max(...e.map(t=>t.total)),average:Math.round(n/e.length*10)/10}}class Ui extends Error{constructor(n){super(`Score server error (${n})`),this.status=n,this.name="ScoreServerError"}}class bw{constructor(n,t=(r,s)=>fetch(r,s)){V(this,"base");this.fetcher=t,this.base=n.replace(/\/+$/,"")}async save(n,t){const r=t===void 0?null:Hl(t);if(r===null)throw new Error("A usable nickname is needed to join the ranking");if(!u0(n))throw new Error("Refusing to send a record that is not a real game");const s=await this.fetcher(`${this.base}/scores/api/yacht`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,nickname:r})});if(s.status===200)return"duplicate";if(s.status===201)return"saved";throw new Ui(s.status)}top(n){return this.list("top",n)}recent(n){return this.list("recent",n)}async list(n,t){const r=await this.fetcher(`${this.base}/scores/api/yacht/${n}?limit=${t}`);if(!r.ok)throw new Ui(r.status);return p0(await r.json())}}function Cw(e){let n=null;function t({frequency:r,seconds:s,volume:o,type:l,slideTo:i}){if(e())try{const c=window.AudioContext??window.webkitAudioContext;if(!c)return;n??(n=new c),n.state==="suspended"&&n.resume();const u=n.currentTime,d=n.createOscillator(),f=n.createGain();d.type=l,d.frequency.setValueAtTime(r,u),i&&d.frequency.exponentialRampToValueAtTime(i,u+s),f.gain.setValueAtTime(o,u),f.gain.exponentialRampToValueAtTime(1e-4,u+s),d.connect(f).connect(n.destination),d.start(u),d.stop(u+s)}catch{}}return{tick:()=>t({frequency:500+Math.random()*400,seconds:.03,volume:.04,type:"square"}),settle:()=>t({frequency:220,seconds:.18,volume:.12,type:"triangle",slideTo:90}),yacht:()=>{t({frequency:660,seconds:.12,volume:.1,type:"triangle"}),window.setTimeout(()=>t({frequency:880,seconds:.12,volume:.1,type:"triangle"}),120),window.setTimeout(()=>t({frequency:1320,seconds:.25,volume:.1,type:"triangle"}),240)}}}const Tp="yacht_sound",Ap="yacht_nickname",Ip=10;function Nw(e){try{return localStorage.getItem(e)??""}catch{return""}}function Pw(e){if(e instanceof Ui){if(e.status===429)return"짧은 시간에 너무 많이 등록했습니다. 잠시 후 다시 시도하세요.";if(e.status===400||e.status===413||e.status===415)return"서버가 이 기록을 받아들이지 않았습니다."}return"서버에 연결하지 못했습니다. 잠시 후 다시 시도하세요."}const jw={1:[[50,50]],2:[[27,27],[73,73]],3:[[27,27],[50,50],[73,73]],4:[[27,27],[73,27],[27,73],[73,73]],5:[[27,27],[73,27],[50,50],[27,73],[73,73]],6:[[27,24],[73,24],[27,50],[73,50],[27,76],[73,76]]};function Ew(){return typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now()}-${Math.random()}`}function _p(e){const n=new Date(e),t=r=>String(r).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function Tw({value:e,held:n,rolling:t,canHold:r,index:s,onToggle:o}){return a.jsxs("div",{className:"flex flex-col items-center",children:[a.jsx("button",{type:"button",onClick:o,disabled:!r,"aria-pressed":n,"aria-label":`주사위 ${s+1}: ${e===0?"굴리기 전":`${e}`}${n?", 고정됨":""}`,className:"rounded-xl outline-none transition-transform duration-150 focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-default",style:{transform:n?"translateY(-10px)":"none"},children:a.jsxs("svg",{viewBox:"0 0 100 100",className:"block h-12 w-12 sm:h-16 sm:w-16",role:"img","aria-hidden":"true","data-testid":`die-${s}`,"data-value":e,children:[a.jsx("rect",{x:"4",y:"4",width:"92",height:"92",rx:"18",fill:e===0?"rgb(var(--color-surface))":"#f5f5f4",stroke:n?"rgb(var(--color-accent))":e===0?"rgb(var(--color-border))":"#a8a29e",strokeWidth:n?6:3,strokeDasharray:e===0?"6 6":void 0}),(jw[e]??[]).map(([l,i],c)=>a.jsx("circle",{cx:l,cy:i,r:e===1?11:9,fill:t&&!n?"#44403c":"#1c1917"},c))]})}),a.jsx("span",{className:`mt-1 h-4 text-xs ${n?"text-accent":"text-transparent"}`,"aria-hidden":"true",children:"고정"})]})}function Aw(){const[e,n]=x.useState(Cp),[t,r]=x.useState(null),[s,o]=x.useState(!1),[l,i]=x.useState(null),[c,u]=x.useState(null),[d,f]=x.useState([]),[m,y]=x.useState(null),[v,w]=x.useState(null),[b,h]=x.useState(()=>Nw(Ap)),[p,g]=x.useState({state:"idle"}),[S,k]=x.useState("loading"),[C,E]=x.useState(null),[N,U]=x.useState(()=>{try{return localStorage.getItem(Tp)==="1"}catch{return!1}}),I=x.useRef(e),L=x.useRef(e.dice),J=x.useRef(null),ue=x.useRef(N),Ke=x.useRef(Cw(()=>ue.current)),$=x.useRef(d),A=x.useMemo(()=>new kw,[]),z=x.useMemo(()=>{const P=Lh(Qc,window.location.protocol);return P===null?null:new bw(P)},[]);ue.current=N,$.current=d;function T(P){I.current=P,n(P)}x.useEffect(()=>{let P=!0;return A.recent(Mo).then(F=>P&&f(F)),()=>{P=!1}},[A]),x.useEffect(()=>()=>{J.current&&window.clearInterval(J.current.timer)},[]);function R(P=()=>!0){if(!z){k("error");return}z.top(Ip).then(F=>P()&&k(F),()=>P()&&k("error"))}x.useEffect(()=>{let P=!0;return R(()=>P),()=>{P=!1}},[z]);function M(P){window.clearInterval(P.timer),J.current=null;const F=dw(I.current,Et());T(F),L.current=F.dice,r(null),o(!1),Ke.current.settle(),_s("yacht",F.dice)===50&&(u("Yacht: 주사위 5개가 모두 같습니다. Yacht 칸에 기록하면 50점입니다."),Ke.current.yacht())}function Y(P){const F=I.current,de=Et(),me=F.dice.map((Vs,uu)=>F.held[uu]?Vs:yw(L.current[uu]??0,de));L.current=me,r(me),P.flips+=1,Ke.current.tick(),P.released?P.flips>=P.needed&&M(P):performance.now()-P.startedAt>=d0&&Oe()}function Z(){const P=I.current;if(J.current||qn(P)||P.rollsLeft<=0)return;const F={startedAt:performance.now(),flips:0,released:!1,needed:Fi,timer:0};J.current=F,L.current=P.dice,o(!0),i(null),u(null),F.timer=window.setInterval(()=>Y(F),lu),Y(F)}function Oe(){const P=J.current;!P||P.released||(P.released=!0,P.needed=xw(performance.now()-P.startedAt),P.flips>=P.needed&&M(P))}function Me(P){J.current||T(pw(I.current,P))}function Mn(P){const F=Ep($.current),de=hw(P,Ew(),new Date().toISOString());y({total:de.total,newBest:F.games>0&&de.total>F.best}),w(de),A.save(de).then(()=>A.recent(Mo)).then(f)}const Ce=Hl(b);function $n(){if(!(!z||!v||Ce===null||p.state==="sending")){g({state:"sending"});try{localStorage.setItem(Ap,Ce)}catch{}z.save(v,Ce).then(()=>{E(v.id),g({state:"done"}),R()},P=>g({state:"error",message:Pw(P)}))}}function Ws(P){const F=I.current,de=fw(F,P);de!==F&&(T(de),i(null),u(null),qn(de)&&Mn(de))}function Wl(P){J.current||(l===P?Ws(P):i(P))}function D(){const P=I.current;if(P.history.length>0&&!qn(P)&&!window.confirm("진행 중인 게임을 버리고 새로 시작할까요?"))return;J.current&&window.clearInterval(J.current.timer),J.current=null;const F=Cp();T(F),L.current=F.dice,r(null),o(!1),i(null),u(null),y(null),w(null),g({state:"idle"})}function X(){const P=!N;U(P),ue.current=P;try{localStorage.setItem(Tp,P?"1":"0")}catch{}P&&Ke.current.tick()}const fn=x.useRef({startRoll:Z,endRoll:Oe,holdDie:Me});fn.current={startRoll:Z,endRoll:Oe,holdDie:Me},x.useEffect(()=>{const P=me=>me.target===document.body,F=me=>{!P(me)||me.repeat||(me.code==="Space"?(me.preventDefault(),fn.current.startRoll()):/^Digit[1-5]$/.test(me.code)&&fn.current.holdDie(Number(me.code.slice(5))-1))},de=me=>{me.code==="Space"&&P(me)&&fn.current.endRoll()};return window.addEventListener("keydown",F),window.addEventListener("keyup",de),()=>{window.removeEventListener("keydown",F),window.removeEventListener("keyup",de)}},[]);const kn=qn(e),au=zl(e),w0=mw(e),k0=s&&t?t:e.dice,b0=au&&!s&&e.rollsLeft>0&&!kn,C0=Math.min(e.history.length+1,un.length),Ut=xl(e),Gs=Ep(d),iu=l?_s(l,e.dice):0,N0={onKeyDown:P=>{(P.key===" "||P.key==="Enter")&&!P.repeat&&(P.preventDefault(),Z())},onKeyUp:P=>{(P.key===" "||P.key==="Enter")&&Oe()}},P0={onPointerDown:P=>{try{P.currentTarget.setPointerCapture(P.pointerId)}catch{}Z()},onPointerUp:()=>Oe(),onPointerCancel:()=>Oe(),onContextMenu:P=>P.preventDefault()},cu=P=>{const F=e.scores[P]!==null,de=!F&&au&&!s&&!kn,me=l===P,Vs=F?e.scores[P]:de?w0[P]:null;return a.jsx("li",{children:a.jsxs("button",{type:"button",disabled:!de,"aria-pressed":me,onClick:()=>Wl(P),className:`flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-left transition-colors ${me?"border-accent bg-accent/10":de?"border-border hover:border-accent":"border-transparent"} disabled:cursor-default`,children:[a.jsxs("span",{className:"min-w-0",children:[a.jsx("span",{className:F?"font-semibold":"font-medium",children:bp[P]}),a.jsx("span",{className:"block text-xs text-muted",children:uw[P]})]}),a.jsx("span",{className:`shrink-0 font-mono text-lg ${F?"font-semibold":de?"italic text-muted":"text-muted"} ${me?"!text-accent !not-italic font-semibold":""}`,children:Vs===null?"-":Vs})]})},P)};return a.jsxs("div",{children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[a.jsxs("p",{className:"font-mono text-sm","aria-live":"polite",children:["턴 ",C0," / ",un.length,!kn&&a.jsxs("span",{className:"ml-4",children:["남은 굴리기 ",e.rollsLeft]})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("button",{type:"button","aria-pressed":N,onClick:X,className:"rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent",children:["소리 ",N?"끄기":"켜기"]}),a.jsx("button",{type:"button",onClick:D,className:"rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent",children:"새 게임"})]})]}),a.jsxs("div",{className:"mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]",children:[a.jsxs("div",{children:[a.jsx("div",{className:"rounded-lg border border-border bg-surface px-3 pb-3 pt-6",children:a.jsx("div",{className:"flex flex-wrap justify-center gap-x-2 gap-y-2 sm:gap-x-5",children:Array.from({length:ct},(P,F)=>a.jsx(Tw,{index:F,value:k0[F],held:e.held[F],rolling:s,canHold:b0,onToggle:()=>Me(F)},F))})}),!kn&&a.jsxs("div",{className:"mt-4",children:[a.jsx("button",{type:"button",disabled:e.rollsLeft<=0,"aria-pressed":s,...P0,...N0,className:`w-full touch-none select-none rounded-lg px-4 py-4 text-lg font-semibold transition-colors disabled:opacity-50 ${s?"bg-accent-hover text-background":"bg-accent text-background hover:bg-accent-hover"}`,children:e.rollsLeft<=0?"점수 칸을 선택하세요":s?"굴리는 중... 손을 떼면 결정됩니다":"굴리기 (누르고 있기)"}),a.jsx("p",{className:"mt-2 text-xs text-muted",children:"버튼을 누르고 있는 동안 주사위 눈이 바뀌고, 떼는 순간 결정됩니다. 단축키: Space(누르고 있기) 굴리기, 1~5 주사위 고정."})]}),c&&a.jsx("p",{role:"status",className:"mt-3 rounded-md border border-accent bg-accent/10 px-3 py-2 text-sm font-semibold",children:c}),l&&!kn&&a.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[a.jsxs("button",{type:"button",onClick:()=>Ws(l),className:"rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover",children:[bp[l],"에 ",iu,"점 기록"]}),a.jsx("button",{type:"button",onClick:()=>i(null),className:"rounded-md border border-border bg-surface px-3 py-2 text-sm transition-colors hover:border-accent",children:"취소"}),iu===0&&a.jsx("span",{className:"text-xs text-muted",children:"조건에 맞지 않아 0점으로 기록됩니다."})]}),kn&&a.jsxs("div",{className:"mt-4 rounded-lg border border-accent bg-accent/10 p-4",role:"status",children:[a.jsx("p",{className:"text-sm text-muted",children:"게임 종료"}),a.jsxs("p",{className:"mt-1 font-mono text-4xl font-bold",children:[(m==null?void 0:m.total)??$i(e),"점"]}),a.jsxs("p",{className:"mt-2 text-sm",children:["상단 합계 ",Ut," / ",Oo," · 보너스 ",gr(Ut),(m==null?void 0:m.newBest)&&a.jsx("span",{className:"ml-2 font-semibold",children:"최고 기록을 넘었습니다."})]}),a.jsx("p",{className:"mt-1 text-xs text-muted",children:"이번 기록은 이 브라우저에 저장되었습니다."}),z&&v&&a.jsx("form",{className:"mt-4 border-t border-border pt-3",onSubmit:P=>{P.preventDefault(),$n()},children:p.state==="done"?a.jsxs("p",{className:"text-sm font-semibold",children:["순위에 등록했습니다: ",Ce]}):a.jsxs(a.Fragment,{children:[a.jsx("label",{htmlFor:"yacht-nickname",className:"block text-sm font-semibold",children:"전체 순위에 등록하기"}),a.jsxs("div",{className:"mt-2 flex flex-wrap items-center gap-2",children:[a.jsx("input",{id:"yacht-nickname",type:"text",value:b,maxLength:Ds*2,autoComplete:"off",placeholder:"닉네임",onChange:P=>h(P.target.value),"aria-describedby":"yacht-nickname-help",className:"w-40 rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"}),a.jsx("button",{type:"submit",disabled:Ce===null||p.state==="sending",className:"rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover disabled:opacity-50",children:p.state==="sending"?"등록 중...":"순위 등록"})]}),a.jsxs("p",{id:"yacht-nickname-help",className:"mt-1 text-xs text-muted",children:["글자(한글 포함), 숫자, _ 와 -, 단어 사이 공백만 쓸 수 있고 1~",Ds,"자입니다."]}),p.state==="error"&&a.jsx("p",{role:"alert",className:"mt-2 text-sm text-red-500",children:p.message})]})}),a.jsx("button",{type:"button",onClick:D,className:"mt-3 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover",children:"새 게임"})]})]}),a.jsxs("section",{"aria-label":"점수판",children:[a.jsx("ul",{className:"space-y-1",children:gl.map(cu)}),a.jsxs("p",{className:"my-2 flex items-center justify-between rounded-md bg-surface px-3 py-2 font-mono text-sm",children:[a.jsxs("span",{children:["상단 합계 ",Ut," / ",Oo]}),a.jsx("span",{className:gr(Ut)>0?"font-semibold text-accent":"text-muted",children:gr(Ut)>0?`보너스 +${ou}`:`보너스까지 ${Math.max(0,Oo-Ut)}점`})]}),a.jsx("ul",{className:"space-y-1",children:un.filter(P=>!gl.includes(P)).map(cu)}),a.jsxs("p",{className:"mt-3 flex items-center justify-between border-t border-border px-3 pt-3 font-mono text-lg font-bold",children:[a.jsx("span",{children:"합계"}),a.jsx("span",{children:$i(e)})]})]})]}),a.jsxs("section",{className:"mt-10 border-t border-border pt-6","aria-label":"전체 순위",children:[a.jsxs("h2",{className:"text-lg font-semibold",children:["전체 순위 TOP ",Ip]}),a.jsx("p",{className:"mt-1 text-xs text-muted",children:"게임이 끝난 뒤 닉네임으로 등록한 기록입니다. 서버가 주사위와 선택을 다시 계산해 맞는 기록만 받습니다."}),S==="loading"?a.jsx("p",{className:"mt-3 text-sm text-muted",children:"불러오는 중..."}):S==="error"?a.jsx("p",{className:"mt-3 text-sm text-muted",children:"순위를 불러오지 못했습니다. 게임은 그대로 할 수 있고, 내 기록은 이 브라우저에 저장됩니다."}):S.length===0?a.jsx("p",{className:"mt-3 text-sm text-muted",children:"아직 등록된 기록이 없습니다. 첫 번째가 되어 보세요."}):a.jsxs("table",{className:"mt-4 w-full max-w-md border-collapse text-sm",children:[a.jsx("caption",{className:"sr-only",children:"전체 순위"}),a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-border text-left text-xs text-muted",children:[a.jsx("th",{className:"py-1 pr-3 font-normal",children:"순위"}),a.jsx("th",{className:"py-1 pr-3 font-normal",children:"닉네임"}),a.jsx("th",{className:"py-1 pr-3 text-right font-normal",children:"점수"}),a.jsx("th",{className:"py-1 text-right font-normal",children:"날짜"})]})}),a.jsx("tbody",{children:S.map((P,F)=>a.jsxs("tr",{className:`border-b border-border/60 ${P.id===C?"font-semibold text-accent":""}`,children:[a.jsx("td",{className:"py-1 pr-3 font-mono",children:F+1}),a.jsx("td",{className:"py-1 pr-3",children:P.nickname??"-"}),a.jsx("td",{className:"py-1 pr-3 text-right font-mono",children:P.total}),a.jsx("td",{className:"py-1 text-right font-mono",children:_p(P.playedAt)})]},P.id))})]})]}),a.jsxs("section",{className:"mt-10 border-t border-border pt-6",children:[a.jsx("h2",{className:"text-lg font-semibold",children:"내 기록"}),a.jsxs("p",{className:"mt-1 text-xs text-muted",children:["이 브라우저에만 저장됩니다. 최근 ",Mo,"게임까지 남습니다."]}),Gs.games===0?a.jsx("p",{className:"mt-3 text-sm text-muted",children:"아직 끝낸 게임이 없습니다."}):a.jsxs(a.Fragment,{children:[a.jsxs("dl",{className:"mt-3 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm",children:[a.jsxs("div",{children:[a.jsx("dt",{className:"text-xs text-muted",children:"플레이"}),a.jsxs("dd",{children:[Gs.games,"회"]})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"text-xs text-muted",children:"최고"}),a.jsxs("dd",{children:[Gs.best,"점"]})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"text-xs text-muted",children:"평균"}),a.jsxs("dd",{children:[Gs.average,"점"]})]})]}),a.jsxs("table",{className:"mt-4 w-full max-w-md border-collapse text-sm",children:[a.jsx("caption",{className:"sr-only",children:"최근 게임"}),a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-border text-left text-xs text-muted",children:[a.jsx("th",{className:"py-1 pr-3 font-normal",children:"날짜"}),a.jsx("th",{className:"py-1 pr-3 text-right font-normal",children:"점수"}),a.jsx("th",{className:"py-1 text-right font-normal",children:"상단 합계"})]})}),a.jsx("tbody",{children:d.slice().sort((P,F)=>Date.parse(F.playedAt)-Date.parse(P.playedAt)).slice(0,5).map(P=>a.jsxs("tr",{className:"border-b border-border/60",children:[a.jsx("td",{className:"py-1 pr-3 font-mono",children:_p(P.playedAt)}),a.jsx("td",{className:"py-1 pr-3 text-right font-mono",children:P.total}),a.jsx("td",{className:"py-1 text-right font-mono",children:P.upperSum})]},P.id))})]})]})]}),a.jsxs("section",{className:"mt-10 border-t border-border pt-6",children:[a.jsx("h2",{className:"text-lg font-semibold",children:"규칙"}),a.jsxs("ul",{className:"mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed",children:[a.jsxs("li",{children:["주사위 5개를 한 턴에 최대 ",Bl,"번 굴린다."]}),a.jsx("li",{children:"굴린 뒤 남길 주사위를 눌러 고정하고, 나머지만 다시 굴릴 수 있다."}),a.jsx("li",{children:"한 턴이 끝나면 점수판의 칸 하나를 골라 점수를 기록한다. 각 칸은 한 번만 쓸 수 있다."}),a.jsx("li",{children:"조건에 맞지 않는 칸에도 기록할 수 있으며, 이때는 0점이다."}),a.jsx("li",{children:"12개 칸을 모두 채우면 게임이 끝나고, 점수의 합계가 최종 점수이다."})]}),a.jsx("h3",{className:"mt-5 text-sm font-semibold",children:"점수 계산"}),a.jsxs("ul",{className:"mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed",children:[a.jsx("li",{children:"Aces, Deuces, Threes, Fours, Fives, Sixes: 해당 눈이 나온 주사위 눈의 합"}),a.jsx("li",{children:"상단 보너스: 위 여섯 칸의 합이 63점 이상이면 35점을 더한다."}),a.jsx("li",{children:"Choice: 주사위 5개 눈의 합"}),a.jsx("li",{children:"4 of a Kind: 같은 눈이 4개 이상이면 주사위 5개 눈의 합"}),a.jsx("li",{children:"Full House: 같은 눈 3개와 다른 눈 2개이면 주사위 5개 눈의 합. 5개가 모두 같으면 해당하지 않는다."}),a.jsx("li",{children:"Small Straight: 4개가 연속이면 15점"}),a.jsx("li",{children:"Large Straight: 5개가 연속이면 30점"}),a.jsx("li",{children:"Yacht: 5개가 모두 같으면 50점"}),a.jsx("li",{children:"최고 점수는 323점이다."})]})]})]})}const Iw={calculator:S2,dino:X2,ladder:iS,roulette:aw,map:JS,yacht:Aw};function _w(){const{id:e}=rh(),n=e?Iw[e]:void 0,t=Bh.find(s=>s.id===e);if(!n||!t)return a.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-12",children:[a.jsx("p",{children:"도구를 찾을 수 없습니다."}),a.jsx(pn,{to:"/tools",className:"text-accent underline",children:"목록으로"})]});const r=t.wide===!0;return a.jsxs("main",{className:r?"page-width py-12":"mx-auto max-w-2xl px-4 py-12",children:[a.jsx(pn,{to:"/tools",className:"text-sm text-accent underline",children:"← 목록으로"}),a.jsx("h1",{className:"mt-4 text-2xl font-bold",children:t.name}),a.jsx("div",{className:"mt-6",children:a.jsx(n,{})})]})}const Dw=["사이트: React로 만든 정적 파일입니다. GitHub Pages가 그대로 보여주고, 사이트 자체에는 서버 코드가 없습니다.","글 관리: 브라우저가 GitHub API로 저장소에 직접 커밋하면 GitHub Actions가 다시 빌드하고 배포합니다.","서버 기능: 라이브 서버 상태와 ERS 탭은 따로 운영하는 Oracle Cloud 무료 서버(Tomcat)를 https로 호출합니다."],Rw=[{title:"프런트엔드",items:[{name:"React 18 · TypeScript",what:"React는 화면을 컴포넌트(재사용 부품) 단위로 만드는 라이브러리이고, TypeScript는 변수에 타입을 붙여 실수를 빌드 단계에서 잡아 주는 언어입니다.",how:"페이지는 src/pages, 부품은 src/components에 컴포넌트로 나눴습니다. 서버가 보낸 JSON처럼 믿을 수 없는 값은 타입만 믿지 않고 실행 중에도 검사해서 걸러냅니다(parseStatus).",files:"src/pages · src/components · src/lib/serverStatus.ts"},{name:"Vite",what:"개발 서버와 번들러(여러 파일을 하나로 묶는 도구)입니다. 저장하면 화면이 바로 갱신됩니다.",how:"빌드할 때 import.meta.glob으로 글 파일(.md, .html)을 문자열로 읽어 스크립트에 포함합니다. 개발 중에는 /server-api 프록시로 서버를 호출해 CORS 문제를 피합니다.",files:"vite.config.ts · src/lib/posts.ts"},{name:"React Router (HashRouter)",what:"주소에 따라 보여줄 페이지를 바꿔 주는 라우터입니다. HashRouter는 주소의 # 뒤를 경로로 씁니다.",how:"GitHub Pages는 서버 설정을 바꿀 수 없어서, 일반 주소에서 새로고침하면 404가 납니다. # 뒤는 서버로 전달되지 않기 때문에 어느 페이지에서 새로고침해도 괜찮습니다. 대신 글 안의 #목차 링크가 라우터와 충돌해서, 클릭을 가로채 해당 제목으로 스크롤시킵니다.",files:"src/App.tsx · src/components/MarkdownBody.tsx"},{name:"Tailwind CSS",what:"미리 만들어진 작은 클래스(예: px-6, text-muted)를 조합해 스타일을 쓰는 CSS 도구입니다.",how:"색을 CSS 변수(--color-*)로 정의하고, <html>의 dark 클래스에 따라 값만 바꿔서 다크/라이트 테마를 만듭니다. 공통 폭 규칙(.page-width)은 작은 화면에서는 전체 폭, 넓은 화면에서는 72rem으로 제한해 가운데 정렬합니다.",files:"src/index.css · tailwind.config.js"}]},{title:"글 시스템",items:[{name:"Markdown 글 · marked",what:"Markdown은 간단한 표기로 문서를 쓰는 형식이고, marked는 이를 HTML로 바꿔 주는 라이브러리입니다.",how:"글은 src/content/posts/*.md 파일이며, 맨 위 머리말(title, date)을 직접 만든 파서가 읽습니다. 변환한 HTML의 제목(h1~h6)에는 GitHub와 같은 규칙으로 id를 붙여서 목차 링크가 동작하게 했습니다.",files:"src/lib/frontmatter.ts · src/lib/markdown.ts"},{name:"HTML 글 · 격리된 iframe",what:"iframe은 화면 속의 화면입니다. sandbox 속성을 주면 그 안의 페이지가 할 수 있는 일을 제한할 수 있습니다.",how:"업로드한 HTML은 .html 파일로 저장하고(맨 앞 주석에 제목과 날짜), 함께 올린 CSS는 <style>로 합칩니다. 보여줄 때는 sandbox에 allow-same-origin을 주지 않은 iframe에 넣어서, 스크립트는 돌지만 이 사이트의 저장소(로그인 토큰이 있는 곳)에는 접근하지 못하게 했습니다. iframe의 높이는 안쪽 페이지가 postMessage로 알려줍니다.",files:"src/lib/htmlPost.ts · src/components/HtmlFrame.tsx"},{name:"블로그 검색",what:"서버 없이 브라우저에서 하는 문자열 검색입니다.",how:"빌드에 포함된 모든 글의 제목과 본문(HTML 글은 화면에 보이는 글자만)에서 입력한 구절이 들어 있는 글을 찾습니다. 제목이 맞은 글을 먼저 보여주고, 본문은 첫 일치 부분 앞뒤를 잘라 <mark>로 강조합니다. 검색어는 주소(?q=)에 반영해서 뒤로 가기 해도 결과가 유지되고, useDeferredValue로 입력이 끊기지 않게 했습니다.",files:"src/lib/search.ts · src/pages/Blog.tsx"},{name:"GitHub Contents API",what:"GitHub 저장소의 파일을 HTTP 요청으로 읽고, 쓰고, 지우는 API입니다. 쓰기와 삭제는 커밋으로 남습니다.",how:"이 사이트에 서버가 없는데도 글을 관리할 수 있는 이유입니다. 브라우저가 GET, PUT, DELETE 요청을 직접 보내서 글 파일을 만들고 고치고 지웁니다(Write, Edit, Delete 화면).",files:"src/lib/github.ts · src/pages/Write.tsx"},{name:"ADMIN 로그인 (PAT)",what:"PAT(Personal Access Token)는 비밀번호 대신 쓰는 GitHub 접근 토큰입니다. 이 저장소에만, 파일 읽기/쓰기 권한만 주도록 만듭니다.",how:"ADMIN 패널에서 토큰을 입력하면 저장소 정보를 조회해서 토큰이 유효하고 쓰기 권한이 있는지 확인합니다. 통과하면 브라우저 localStorage에 저장하고, 로그인 상태를 Context로 공유해서 Admin 메뉴와 /write, /edit, /delete 접근을 열어 줍니다. 이 화면 잠금은 보이는 것만 가립니다. 실제 방어는 토큰이어서, 토큰이 없으면 누구도 글을 올리거나 지울 수 없습니다.",files:"src/lib/admin.ts · src/components/AdminContext.tsx · src/components/RequireAdmin.tsx"}]},{title:"서버 연동",items:[{name:"Java 서블릿 · Tomcat",what:"Tomcat은 Java 웹 애플리케이션을 실행하는 서버이고, 서블릿은 요청을 받아 응답을 만드는 Java 클래스입니다.",how:"작은 앱 하나(status)가 /status/api로 서버 상태를 JSON으로 돌려줍니다. JVM의 관리 빈(MXBean)과 Tomcat의 MBean에서 힙 메모리, 스레드, CPU, 요청 수를 읽고, 5초마다 값을 모아 최근 120개(10분)를 보관합니다. 요청이 몰려도 서버가 더 일하지 않도록 응답을 2초간 캐시합니다.",files:"server/status"},{name:"라이브 서버 상태 카드",what:"위 서버가 알려주는 값을 사이트에서 보여주는 화면입니다.",how:"fetch로 10초마다 서버를 호출하고(탭이 보일 때만, 5초 안에 응답이 없으면 중단), 응답을 검사한 뒤 숫자와 SVG 그래프로 그립니다. 서버가 꺼져 있으면 안내 문구만 보이고 사이트의 다른 기능에는 영향이 없습니다.",files:"src/components/ServerStatusSection.tsx · src/components/Sparkline.tsx"},{name:"CORS (Tomcat CorsFilter)",what:'브라우저는 보안을 위해 다른 도메인으로 보내는 요청을 기본으로 막습니다. CORS는 서버가 "이 출처는 허용한다"고 알려서 이를 푸는 규칙입니다.',how:"상태 앱의 web.xml에 Tomcat 내장 CorsFilter를 걸어 https://shinheeyoun.github.io만 허용하고, 다른 출처의 요청은 403으로 거절합니다. 이 앱에만 적용되어서 같은 Tomcat의 다른 앱에는 영향이 없습니다.",files:"server/status/src/main/webapp/WEB-INF/web.xml"},{name:"nginx · Let's Encrypt · DuckDNS",what:"nginx는 앞에서 요청을 받아 뒤의 서버로 넘겨 주는 리버스 프록시입니다. Let's Encrypt는 무료 https 인증서를, DuckDNS는 무료 도메인 이름을 제공합니다.",how:"https 사이트는 http 서버를 호출할 수 없어서(혼합 콘텐츠 차단) 서버에 https 주소가 필요했습니다. DuckDNS 이름에 인증서를 발급받아 자동 갱신하고, nginx가 허용한 경로만 Tomcat으로 전달합니다. 나머지 경로는 404이고, 상태 API는 초당 요청 수를 제한합니다.",files:"server/nginx/shinheeyoun.conf · server/HTTPS.md"},{name:"ERS 탭 (iframe)",what:"서버에 올라간 보고서 뷰어(Crownix HTML5 Viewer) 화면을 이 사이트 안에서 바로 쓰는 탭입니다.",how:'뷰어 주소를 iframe으로 띄웁니다. 직접 운영하는 서버라서 sandbox는 걸지 않았습니다. 서로 다른 사이트 사이의 iframe에서는 브라우저가 로그인 세션 쿠키를 막을 수 있어서, 동작이 이상하면 쓰도록 "새 탭에서 열기" 링크를 같이 둡니다.',files:"src/pages/ERS.tsx · src/lib/ers.ts"}]},{title:"Tools",items:[{name:"로직과 화면 분리 (controller)",what:"계산 규칙(로직)과 화면 그리기(뷰)를 나눠서 만드는 방식입니다.",how:'계산기, 공룡 게임, 사다리타기, 룰렛, 세계 지도, Yacht Dice 모두 "현재 상태와 입력을 받아 새 상태를 돌려주는" 순수 함수를 controller.ts에 두고, 화면 컴포넌트는 그 결과를 그리기만 합니다. 화면 없이 규칙만 테스트할 수 있습니다.',files:"src/tools/calculator · src/tools/dino · src/tools/ladder · src/tools/roulette · src/tools/map · src/tools/yacht"},{name:"사다리타기 (SVG)",what:"SVG는 선과 도형을 코드로 그리는 벡터 그래픽 형식입니다. 화면 크기에 맞춰 늘어나도 선명합니다.",how:"시작 버튼을 누를 때 브라우저의 보안 난수(crypto.getRandomValues)로 가로줄을 만듭니다. 시작 전에는 가로줄을 CSS로 가리는 게 아니라 아예 만들지 않아서 화면 요소로도 존재하지 않습니다. 같은 줄에서 가로줄이 붙지 않고, 이웃한 두 열은 반드시 하나 이상 이어지도록 만듭니다. 선택한 길은 순수 함수로 따라가서(위에서 아래, 아래에서 위 모두) 빨간 선으로 그리고, 같은 결과 텍스트는 같은 색으로 보여줍니다.",files:"src/tools/ladder"},{name:"룰렛 (SVG와 CSS 회전)",what:"직접 적은 항목 중 하나를 돌려서 뽑는 도구입니다.",how:'당첨은 바퀴가 움직이기 전에 브라우저의 보안 난수로 먼저 정하고, 그 칸의 어느 지점에 멈출지까지 계산한 회전 각도로 CSS transition을 한 번 걸어 5초 동안 돌립니다. 그래서 애니메이션은 결과를 보여주기만 하고 확률에 영향을 주지 않으며, 어느 칸이든 확률이 같습니다. 칸은 SVG 부채꼴 경로로 그리고, 칸 경계에 멈추지 않도록 칸의 양 끝을 피해서 각도를 잡습니다. 모션 줄이기 설정을 켠 사람에게는 돌리지 않고 바로 결과를 보여줍니다. 각도 계산은 모든 칸 수와 당첨 칸 조합으로 "포인터 아래 칸이 당첨 칸인가"를 테스트합니다.',files:"src/tools/roulette"},{name:"세계 지도 (Google Maps)",what:"Google Maps JavaScript API로 세계 지도를 보여주고, 그 위에 거리 재기와 퀴즈 같은 기능을 얹었습니다.",how:"Google의 스크립트는 지도 페이지를 열 때만 불러옵니다. 이 API의 키는 브라우저가 직접 보내야 해서 비밀로 둘 수 없으므로, 허용 사이트와 사용할 API를 제한하는 것이 보호 수단입니다. 개발용 키는 커밋되지 않는 .env.local에 두고 저장소에는 넣지 않습니다. 사이트의 다크·라이트 테마에 맞춰 지도의 색 구성도 바꾸는데, Google이 지도를 만들 때만 색 구성을 정할 수 있어서 테마를 바꾸면 지도를 새로 만들고 보던 위치를 이어서 보여줍니다. 계산은 모두 Google과 화면에서 떼어 순수 함수로 두고 테스트합니다. 두 지점 사이 거리는 지구 표면을 따라 가장 짧은 길(대권, haversine 공식)로 재고, 다각형의 면적은 삼각형으로 나눠 구면 초과량으로 구하며 세 변의 길이로 면적을 구하는 다른 공식으로 계산한 값과 맞는지 비교합니다. 지도를 누르면 그 위치의 현지 시각과 날씨를 키가 필요 없는 무료 서비스(Open-Meteo)에서 가져오고, 시각은 브라우저의 Intl로 시간대에 맞춰 보여줍니다. 지금 보는 위치와 확대, 지도 종류는 주소(# 뒤의 쿼리)에 기록해서 링크로 공유할 수 있고, 주소에 적힌 값은 믿지 않고 범위를 검사합니다. 지도 퀴즈는 정답과의 거리로 점수를 주는데, 일반 지도에는 도시 이름이 있어 답이 드러나므로 퀴즈 중에는 이름 없는 위성 사진으로 바꾸고 확대를 제한하며, 끝나면 보던 화면으로 돌려놓습니다.",files:"src/tools/map"},{name:"Yacht Dice (타이머와 점수 저장소)",what:"주사위 5개를 최대 3번 굴려 12개 칸을 채우는 주사위 게임입니다.",how:"굴리기 버튼을 누르고 있는 동안 setInterval로 0.055초마다 주사위 눈과 그림(SVG)을 바꾸고, 떼는 순간 멈춥니다. 바뀌는 횟수는 누른 시간에 비례하지만(최소 24번, 최대 6초) 최종 눈은 멈추는 순간 보안 난수로 따로 뽑아서 확률은 누른 시간과 상관없이 같습니다. 점수 칸 12개의 계산은 순수 함수로 만들고, 가능한 모든 주사위 조합(7776가지)으로 검증합니다. 끝난 게임은 ScoreStore 인터페이스로 저장합니다. 내 기록은 브라우저에 두고, 닉네임을 붙여 순위에 등록하면 주사위와 선택 전체를 서버(Tomcat의 Java 서블릿)로 보냅니다. 서버는 점수를 처음부터 다시 계산해 맞지 않으면 거절하고, 같은 판을 두 번 보내도 한 번만 저장하며(id가 기본키), 한 주소에서 한 시간에 10판까지만 받습니다. 저장소는 Oracle Autonomous DB이고, 사이트의 검증 코드와 서버의 Java 코드가 같은 사례 파일(JSON)로 테스트되어 서로 어긋나지 않게 합니다.",files:"src/tools/yacht · server/scores"},{name:"Guestbook (방명록)",what:"누구나 아이디, 비밀번호, 댓글을 남길 수 있고 답글도 달 수 있는 방명록입니다.",how:"글은 같은 Java 서블릿 앱을 거쳐 Oracle DB에 저장됩니다. SQL에는 사용자가 쓴 값을 이어 붙이지 않고 모두 바인드 변수로만 넘겨서 SQL 인젝션이 불가능하고, 비밀번호는 원문 대신 솔트를 섞은 PBKDF2 해시로 저장합니다. 작성자 IP와 시간은 기록하되 화면에는 보내지 않고, 주소당 작성 횟수와 한 글에 대한 비밀번호 시도 횟수를 제한합니다. 내용은 Markdown으로 보여주는데, marked는 글을 토큰으로 나누는 데만 쓰고 화면은 그 토큰으로 React 요소를 직접 만들어서 사용자가 쓴 HTML은 글자로만 나오고 javascript: 링크와 이미지는 막습니다. 관리자로 로그인했으면 GitHub 토큰을 서버에 보내 저장소에 쓸 수 있는 사람인지 GitHub에 확인한 뒤 비밀번호 없이 지울 수 있습니다.",files:"src/pages/Guestbook.tsx · src/guestbook · server/scores"},{name:"공룡 게임 (canvas)",what:"canvas는 자바스크립트로 직접 그림을 그리는 HTML 요소입니다.",how:"게임 로직은 화면 주사율과 상관없이 초당 60번(고정 간격)만 진행해서 어떤 모니터에서도 같은 속도입니다. 공룡, 선인장, 새 그래픽은 Chromium 프로젝트(BSD 3-Clause)의 스프라이트를 잘라 쓰고, 나무, 불덩이, 하늘, 해와 달은 코드로 그립니다.",files:"src/tools/dino"}]},{title:"배포와 개발 방식",items:[{name:"GitHub Pages · GitHub Actions",what:"Pages는 저장소의 정적 파일을 웹사이트로 서빙하고, Actions는 push 같은 사건이 생기면 정해 둔 작업을 자동으로 실행합니다.",how:"main에 push하면 의존성 설치, 테스트, 빌드를 순서대로 실행하고, 결과물을 gh-pages 브랜치에 올려 배포합니다. 테스트가 하나라도 실패하면 배포까지 가지 않고, 연달아 push하면 이전 실행은 취소합니다.",files:".github/workflows/deploy.yml"},{name:"Vitest",what:"자바스크립트용 단위 테스트 도구입니다. 함수가 기대한 값을 돌려주는지 자동으로 검사합니다.",how:"화면이 아니라 순수한 로직을 위주로 테스트합니다(node 환경). 계산기, 공룡 게임, 사다리, 룰렛, 지도(거리·면적·퀴즈·주소 링크), Yacht Dice 규칙, 글 머리말·HTML 글 파서, 마크다운 제목 id, 블로그 검색, 서버 응답 해석 등을 확인합니다.",files:"*.test.ts"},{name:"Claude Code",what:"Anthropic의 AI 코딩 도구입니다.",how:"이 사이트의 코드와 문서는 Claude와 함께 만들었습니다. 설계를 먼저 정하고, 테스트를 먼저 쓰고, 구현한 뒤, 브라우저에서 직접 확인하고, 마지막에 push하는 순서로 진행합니다."}]}];function Lw(){return a.jsx("main",{className:"page-width py-12",children:a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"About"}),a.jsx("p",{className:"mt-6 leading-relaxed text-foreground/90",children:"정적 사이트(GitHub Pages)에 서버 연동과 글 관리 기능까지 붙여 보는 개발 연습 프로젝트입니다. 이 문서는 어떤 기술을 어디에, 어떻게 썼는지 정리합니다."}),a.jsx("h2",{className:"mt-10 text-lg font-semibold",children:"전체 구조"}),a.jsx("ul",{className:"mt-4 list-inside list-disc space-y-2 leading-relaxed text-foreground/90",children:Dw.map(e=>a.jsx("li",{children:e},e))}),Rw.map(e=>a.jsxs("section",{children:[a.jsx("h2",{className:"mt-10 text-lg font-semibold",children:e.title}),a.jsx("ul",{className:"mt-4 space-y-6",children:e.items.map(n=>a.jsxs("li",{children:[a.jsx("p",{className:"font-mono text-accent",children:n.name}),a.jsxs("dl",{className:"mt-1 space-y-1 leading-relaxed text-foreground/90",children:[a.jsxs("div",{children:[a.jsx("dt",{className:"inline font-semibold",children:"기능 "}),a.jsx("dd",{className:"inline",children:n.what})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"inline font-semibold",children:"적용 "}),a.jsx("dd",{className:"inline",children:n.how})]})]}),n.files&&a.jsx("p",{className:"mt-1 break-words font-mono text-xs text-muted",children:n.files})]},n.name))})]},e.title))]})})}const Dp="https://shinheeyoun.duckdns.org/ReportingServer/html5/sample/QS.jsp";function Ow(){return a.jsxs("main",{className:"page-width py-6",children:[a.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"ERS"}),a.jsx("a",{href:Dp,target:"_blank",rel:"noopener noreferrer",className:"text-sm text-accent underline-offset-4 hover:underline",children:"새 탭에서 열기"})]}),a.jsx("p",{className:"mt-2 text-sm text-muted",children:"MRD 경로에는 ReportingServer가 접근 가능한 경로가 올라가야 합니다. 예시로 파일 서버 도메인 경로나 구글 드라이브 경로가 있습니다."}),a.jsx("iframe",{src:Dp,title:"ERS 보고서 뷰어",allow:"fullscreen; clipboard-write",className:"mt-4 block h-[calc(100vh-12rem)] min-h-[480px] w-full rounded-md border border-border bg-white"})]})}class ds extends Error{constructor(n){super(`Guestbook server error (${n})`),this.status=n,this.name="GuestbookError"}}function f0(e){if(typeof e!="object"||e===null)return null;const n=e,{id:t,parentId:r,author:s,body:o,createdAt:l,replyCount:i}=n;return typeof t!="number"||!Number.isSafeInteger(t)||t<1||typeof s!="string"||typeof o!="string"||typeof l!="string"||Number.isNaN(Date.parse(l))||typeof i!="number"||!Number.isSafeInteger(i)||i<0||r!=null&&(typeof r!="number"||!Number.isSafeInteger(r))?null:{id:t,parentId:typeof r=="number"?r:null,author:s,body:o,createdAt:l,replyCount:i}}function Rp(e){if(!Array.isArray(e))throw new Error("The guestbook answered with something that is not a list");return e.flatMap(n=>{const t=f0(n);return t?[t]:[]})}class Mw{constructor(n,t=(r,s)=>fetch(r,s)){V(this,"base");this.fetcher=t,this.base=`${n.replace(/\/+$/,"")}/scores/api/guestbook`}async list(n,t=20){const r=`limit=${t}${n===void 0?"":`&before=${n}`}`,s=await this.read(`${this.base}?${r}`);return{comments:Rp(s.comments),hasMore:s.hasMore===!0}}async replies(n){const t=await this.read(`${this.base}/${n}/replies`);return Rp(t.replies)}async write(n){const t=await this.fetcher(this.base,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(t.status!==201)throw new ds(t.status);const r=f0(await t.json());if(!r)throw new Error("The guestbook answered with something that is not an entry");return r}async remove(n,t){const r={"Content-Type":"application/json"};let s="{}";"adminToken"in t?r.Authorization=`Bearer ${t.adminToken}`:s=JSON.stringify({password:t.password});const o=await this.fetcher(`${this.base}/${n}/delete`,{method:"POST",headers:r,body:s});if(o.status!==200)throw new ds(o.status)}async read(n){const t=await this.fetcher(n);if(!t.ok)throw new ds(t.status);return t.json()}}const Rs=300,Lp=4,Bi=32;function yl(e){return[...e].length}function m0(e,n){for(const t of e){const r=t.codePointAt(0)??0;if((r<32||r>=127&&r<=159)&&!(n&&(r===10||r===9))||r>=55296&&r<=57343)return!0}return!1}function $w(e){const n=e.replace(/\r\n?/g,`
`).trim();return n===""||yl(n)>Rs||m0(n,!0)?null:n}function Fw(e){const n=Hl(e.author);if(n===null)return{ok:!1,field:"author",message:`아이디는 글자(한글 포함), 숫자, _ 와 -, 단어 사이 공백만 쓸 수 있고 1~${Ds}자입니다.`};const t=yl(e.password);if(t<Lp||t>Bi||m0(e.password,!1))return{ok:!1,field:"password",message:`비밀번호는 ${Lp}~${Bi}자로 입력하세요.`};const r=$w(e.body);return r===null?{ok:!1,field:"body",message:yl(e.body.trim())>Rs?`내용은 ${Rs}자까지 쓸 수 있습니다.`:"내용을 입력하세요."}:{ok:!0,author:n,password:e.password,body:r}}const h0="guestbook_author";function Uw(){try{return localStorage.getItem(h0)??""}catch{return""}}function Bw(e){if(e instanceof ds){if(e.status===429)return"짧은 시간에 너무 많이 작성했습니다. 잠시 후 다시 시도하세요.";if(e.status===404)return"답글을 달려던 댓글이 이미 삭제되었습니다.";if(e.status===400||e.status===413||e.status===415)return"서버가 이 내용을 받아들이지 않았습니다."}return"서버에 연결하지 못했습니다. 잠시 후 다시 시도하세요."}function g0({submitLabel:e,bodyLabel:n,send:t,onDone:r,onCancel:s}){const o={author:x.useId(),password:x.useId(),body:x.useId()},[l,i]=x.useState(Uw),[c,u]=x.useState(""),[d,f]=x.useState(""),[m,y]=x.useState(!1),[v,w]=x.useState(null),[b,h]=x.useState(null);async function p(){if(m)return;const N=Fw({author:l,password:c,body:d});if(!N.ok){w(N.message),h(N.field);return}w(null),h(null),y(!0);try{const U=await t({author:N.author,password:N.password,body:N.body});try{localStorage.setItem(h0,N.author)}catch{}r(U)}catch(U){w(Bw(U))}finally{y(!1)}}function g(N){N.preventDefault(),p()}function S(N){N.key==="Enter"&&(N.ctrlKey||N.metaKey)&&(N.preventDefault(),p())}const k="w-full rounded-md border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none",C=N=>b===N?"border-red-500":"border-border",E=yl(d);return a.jsxs("form",{onSubmit:g,className:"space-y-3 rounded-lg border border-border bg-surface p-4",children:[a.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:o.author,className:"block text-xs text-muted",children:"아이디"}),a.jsx("input",{id:o.author,type:"text",value:l,autoComplete:"nickname",maxLength:Ds*2,onChange:N=>i(N.target.value),"aria-invalid":b==="author",className:`${k} ${C("author")}`})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:o.password,className:"block text-xs text-muted",children:"비밀번호 (삭제할 때 필요)"}),a.jsx("input",{id:o.password,type:"password",value:c,autoComplete:"new-password",maxLength:Bi*2,onChange:N=>u(N.target.value),"aria-invalid":b==="password",className:`${k} ${C("password")}`})]})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:o.body,className:"block text-xs text-muted",children:n}),a.jsx("textarea",{id:o.body,value:d,rows:4,onChange:N=>f(N.target.value),onKeyDown:S,"aria-invalid":b==="body",className:`${k} ${C("body")} resize-y`}),a.jsxs("p",{className:"mt-1 flex justify-between text-xs text-muted",children:[a.jsx("span",{children:"Markdown을 쓸 수 있습니다. Ctrl+Enter로 등록합니다."}),a.jsxs("span",{className:E>Rs?"font-semibold text-red-500":"",children:[E," / ",Rs]})]})]}),a.jsx("p",{className:"text-xs text-muted",children:"등록하면 IP 주소와 작성 시간이 서버에 기록됩니다. IP 주소는 화면에 보이지 않습니다."}),v&&a.jsx("p",{role:"alert",className:"text-sm text-red-500",children:v}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{type:"submit",disabled:m,className:"rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover disabled:opacity-50",children:m?"등록 중...":e}),a.jsx("button",{type:"button",onClick:s,className:"rounded-md border border-border bg-background px-3 py-2 text-sm transition-colors hover:border-accent",children:"취소"})]})]})}const x0=8;function $o(e){return e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&")}function zw(e){const n=e.trim();try{const t=new URL(n);return["http:","https:","mailto:"].includes(t.protocol)?n:null}catch{return null}}function Kn(e,n){return(e??[]).map((t,r)=>a.jsx(x.Fragment,{children:Hw(t,n)},r))}function Hw(e,n){if(n>x0)return e.raw;switch(e.type){case"text":case"escape":{const t=e;return t.tokens?Kn(t.tokens,n+1):$o(t.text)}case"strong":return a.jsx("strong",{children:Kn(e.tokens,n+1)});case"em":return a.jsx("em",{children:Kn(e.tokens,n+1)});case"del":return a.jsx("del",{children:Kn(e.tokens,n+1)});case"codespan":return a.jsx("code",{className:"rounded bg-surface px-1 font-mono text-[0.9em]",children:$o(e.text)});case"br":return a.jsx("br",{});case"link":{const t=e,r=zw(t.href),s=Kn(t.tokens,n+1);return r===null?a.jsx(a.Fragment,{children:s}):a.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer nofollow ugc",className:"text-accent underline",children:s})}case"image":return $o(e.text);default:return e.raw}}function Ww(e,n){if(n>x0)return a.jsx("p",{className:"my-1 whitespace-pre-wrap",children:e.raw});switch(e.type){case"space":return null;case"paragraph":return a.jsx("p",{className:"my-1",children:Kn(e.tokens,n+1)});case"text":{const t=e;return a.jsx("p",{className:"my-1",children:t.tokens?Kn(t.tokens,n+1):$o(t.text)})}case"heading":{const t=e;return a.jsx("p",{className:`my-1 font-semibold ${t.depth<=2?"text-base":"text-sm"}`,children:Kn(t.tokens,n+1)})}case"blockquote":return a.jsx("blockquote",{className:"my-1 border-l-2 border-border pl-3 text-muted",children:zi(e.tokens,n+1)});case"code":return a.jsx("pre",{className:"my-1 overflow-x-auto rounded bg-surface p-2 font-mono text-[0.9em]",children:a.jsx("code",{children:e.text})});case"hr":return a.jsx("hr",{className:"my-2 border-border"});case"list":{const t=e,r=t.items.map((s,o)=>a.jsx("li",{children:zi(s.tokens,n+1)},o));return t.ordered?a.jsx("ol",{start:typeof t.start=="number"?t.start:1,className:"my-1 list-decimal pl-6",children:r}):a.jsx("ul",{className:"my-1 list-disc pl-6",children:r})}default:return a.jsx("p",{className:"my-1 whitespace-pre-wrap",children:e.raw.trim()})}}function zi(e,n){return e.map((t,r)=>a.jsx(x.Fragment,{children:Ww(t,n)},r))}function y0({source:e}){const n=W.lexer(e,{gfm:!0,breaks:!0});return a.jsx("div",{className:"break-words text-sm leading-relaxed",children:zi(n,0)})}function Gw(e){const n=new Date(e),t=r=>String(r).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function Vw(e){if(e instanceof ds){if(e.status===403)return"비밀번호가 맞지 않습니다.";if(e.status===404)return"이미 삭제된 글입니다.";if(e.status===429)return"시도가 너무 많습니다. 잠시 후 다시 시도하세요."}return"서버에 연결하지 못했습니다. 잠시 후 다시 시도하세요."}const lr="rounded-md border border-border bg-background px-2 py-1 text-xs transition-colors hover:border-accent";function v0({id:e,admin:n,remove:t}){const[r,s]=x.useState(!1),[o,l]=x.useState(""),[i,c]=x.useState(!1),[u,d]=x.useState(null);async function f(y){if(!i){c(!0),d(null);try{await t(e,y)}catch(v){d(Vw(v)),c(!1)}}}function m(y){y.preventDefault(),o!==""&&f(o)}return n?a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",disabled:i,onClick:()=>{window.confirm("관리자 권한으로 이 글을 삭제할까요? 달린 답글도 함께 삭제됩니다.")&&f()},className:lr,children:"삭제 (관리자)"}),u&&a.jsx("span",{role:"alert",className:"text-xs text-red-500",children:u})]}):r?a.jsxs("form",{onSubmit:m,className:"flex flex-wrap items-center gap-2",children:[a.jsx("input",{type:"password",value:o,autoComplete:"off",placeholder:"비밀번호","aria-label":"삭제할 글의 비밀번호",onChange:y=>l(y.target.value),className:"w-32 rounded-md border border-border bg-background px-2 py-1 text-xs focus:border-accent focus:outline-none"}),a.jsx("button",{type:"submit",disabled:i||o==="",className:`${lr} disabled:opacity-50`,children:"삭제 확인"}),a.jsx("button",{type:"button",onClick:()=>{s(!1),l(""),d(null)},className:lr,children:"취소"}),u&&a.jsx("span",{role:"alert",className:"text-xs text-red-500",children:u})]}):a.jsx("button",{type:"button",onClick:()=>s(!0),className:lr,children:"삭제"})}function S0({entry:e}){return a.jsxs("p",{className:"flex flex-wrap items-baseline gap-x-3 text-xs text-muted",children:[a.jsx("span",{className:"font-semibold text-foreground",children:e.author}),a.jsx("time",{dateTime:e.createdAt,children:Gw(e.createdAt)})]})}function Kw({entry:e,admin:n,remove:t}){return a.jsxs("li",{className:"rounded-md border border-border/60 bg-background px-3 py-2",children:[a.jsx(S0,{entry:e}),a.jsx(y0,{source:e.body}),a.jsx("div",{className:"mt-1 flex flex-wrap items-center gap-2",children:a.jsx(v0,{id:e.id,admin:n,remove:t})})]})}function Jw({entry:e,api:n,admin:t,remove:r,onDeleted:s,onReplyCountChange:o}){const[l,i]=x.useState(!1),[c,u]=x.useState(null),[d,f]=x.useState(!1),[m,y]=x.useState(!1),v=x.useCallback(async()=>{f(!0),y(!1);try{u(await n.replies(e.id))}catch{y(!0)}finally{f(!1)}},[n,e.id]);async function w(h,p){await r(h,p);const g=(c??[]).filter(S=>S.id!==h);u(g),o(e.id,g.length)}async function b(h,p){await r(h,p),s(h)}return a.jsxs("li",{className:"rounded-lg border border-border bg-surface p-4",children:[a.jsx(S0,{entry:e}),a.jsx(y0,{source:e.body}),a.jsxs("div",{className:"mt-2 flex flex-wrap items-center gap-2",children:[a.jsx("button",{type:"button",onClick:()=>i(h=>!h),"aria-expanded":l,className:lr,children:"답글"}),a.jsx(v0,{id:e.id,admin:t,remove:b}),e.replyCount>0&&a.jsx("button",{type:"button",disabled:d,onClick:()=>c===null?void v():u(null),"aria-expanded":c!==null,className:lr,children:c===null?`답글 ${e.replyCount}개 더보기`:"답글 접기"})]}),m&&a.jsx("p",{role:"alert",className:"mt-2 text-xs text-red-500",children:"답글을 불러오지 못했습니다."}),d&&a.jsx("p",{className:"mt-2 text-xs text-muted",children:"불러오는 중..."}),c!==null&&c.length>0&&a.jsx("ul",{className:"mt-3 space-y-2 border-l-2 border-border pl-3",children:c.map(h=>a.jsx(Kw,{entry:h,admin:t,remove:w},h.id))}),l&&a.jsx("div",{className:"mt-3",children:a.jsx(g0,{submitLabel:"답글 등록",bodyLabel:"답글",send:h=>n.write({...h,parentId:e.id}),onCancel:()=>i(!1),onDone:h=>{i(!1),c===null?(o(e.id,e.replyCount+1),v()):(u([...c,h]),o(e.id,c.length+1))}})})]})}function Xw(){const{status:e,pat:n}=$t(),t=e==="admin",r=x.useMemo(()=>{const h=Lh(Qc,window.location.protocol);return h===null?null:new Mw(h)},[]),[s,o]=x.useState([]),[l,i]=x.useState(!1),[c,u]=x.useState("loading"),[d,f]=x.useState(!1),[m,y]=x.useState(!1);x.useEffect(()=>{if(!r){u("error");return}let h=!0;return r.list().then(p=>{h&&(o(p.comments),i(p.hasMore),u("ready"))},()=>h&&u("error")),()=>{h=!1}},[r]);async function v(){if(!(!r||d||s.length===0)){f(!0);try{const h=await r.list(s[s.length-1].id);o(p=>[...p,...h.comments.filter(g=>!p.some(S=>S.id===g.id))]),i(h.hasMore)}catch{i(!0)}finally{f(!1)}}}const w=x.useCallback(async(h,p)=>{if(!r)throw new Error("The guestbook is not reachable");await r.remove(h,p===void 0?{adminToken:n}:{password:p})},[r,n]);function b(h,p){o(g=>g.map(S=>S.id===h?{...S,replyCount:p}:S))}return a.jsxs("main",{className:"page-width py-12",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"Guestbook"}),r&&!m&&a.jsx("button",{type:"button",onClick:()=>y(!0),className:"rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover",children:"작성"})]}),a.jsx("p",{className:"mt-2 text-sm text-muted",children:"누구나 남길 수 있는 방명록입니다. 비밀번호를 입력하면 쓴 글을 삭제할 수 있고, Markdown 문법이 적용됩니다."}),r&&m&&a.jsx("div",{className:"mt-6",children:a.jsx(g0,{submitLabel:"등록",bodyLabel:"댓글",send:h=>r.write(h),onCancel:()=>y(!1),onDone:h=>{y(!1),o(p=>[h,...p.filter(g=>g.id!==h.id)])}})}),a.jsxs("div",{className:"mt-8",children:[c==="loading"&&a.jsx("p",{className:"text-sm text-muted",children:"불러오는 중..."}),c==="error"&&a.jsx("p",{className:"text-sm text-muted",children:"방명록을 불러오지 못했습니다. 서버가 준비되지 않았거나 잠시 응답하지 않는 중일 수 있습니다."}),c==="ready"&&s.length===0&&a.jsx("p",{className:"text-sm text-muted",children:"아직 글이 없습니다. 첫 번째 글을 남겨 보세요."}),c==="ready"&&r&&a.jsx("ul",{className:"space-y-3",children:s.map(h=>a.jsx(Jw,{entry:h,api:r,admin:t,remove:w,onDeleted:p=>o(g=>g.filter(S=>S.id!==p)),onReplyCountChange:b},h.id))}),c==="ready"&&l&&a.jsx("button",{type:"button",disabled:d,onClick:()=>void v(),className:"mt-4 rounded-md border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-accent disabled:opacity-50",children:d?"불러오는 중...":"이전 글 더 보기"})]})]})}function Yw(){return a.jsxs(ky,{children:[a.jsx(jy,{}),a.jsxs(Jx,{children:[a.jsx(Je,{path:"/",element:a.jsx(t2,{})}),a.jsx(Je,{path:"/blog",element:a.jsx(u2,{})}),a.jsx(Je,{path:"/blog/:slug",element:a.jsx(f2,{})}),a.jsx(Je,{path:"/write",element:a.jsx(ya,{children:a.jsx(m2,{})})}),a.jsx(Je,{path:"/edit",element:a.jsx(ya,{children:a.jsx(h2,{})})}),a.jsx(Je,{path:"/delete",element:a.jsx(ya,{children:a.jsx(g2,{})})}),a.jsx(Je,{path:"/tools",element:a.jsx(x2,{})}),a.jsx(Je,{path:"/tools/:id",element:a.jsx(_w,{})}),a.jsx(Je,{path:"/ers",element:a.jsx(Ow,{})}),a.jsx(Je,{path:"/guestbook",element:a.jsx(Xw,{})}),a.jsx(Je,{path:"/about",element:a.jsx(Lw,{})})]})]})}Xm(document.getElementById("root")).render(a.jsx(x.StrictMode,{children:a.jsx(ry,{children:a.jsx(Yw,{})})}));
