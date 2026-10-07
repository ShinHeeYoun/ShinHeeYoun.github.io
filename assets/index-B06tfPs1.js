var Vf=Object.defineProperty;var ca=e=>{throw TypeError(e)};var Gf=(e,n,t)=>n in e?Vf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var B=(e,n,t)=>Gf(e,typeof n!="symbol"?n+"":n,t),Kf=(e,n,t)=>n.has(e)||ca("Cannot "+t);var da=(e,n,t)=>n.has(e)?ca("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t);var zt=(e,n,t)=>(Kf(e,n,"access private method"),t);function Jf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function qf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vu={exports:{}},to={},Gu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),Qf=Symbol.for("react.portal"),Xf=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),Zf=Symbol.for("react.profiler"),ep=Symbol.for("react.provider"),np=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),rp=Symbol.for("react.suspense"),lp=Symbol.for("react.memo"),op=Symbol.for("react.lazy"),fa=Symbol.iterator;function ip(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var Ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ju=Object.assign,qu={};function Mt(e,n,t){this.props=e,this.context=n,this.refs=qu,this.updater=t||Ku}Mt.prototype.isReactComponent={};Mt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Mt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qu(){}Qu.prototype=Mt.prototype;function ns(e,n,t){this.props=e,this.context=n,this.refs=qu,this.updater=t||Ku}var ts=ns.prototype=new Qu;ts.constructor=ns;Ju(ts,Mt.prototype);ts.isPureReactComponent=!0;var pa=Array.isArray,Xu=Object.prototype.hasOwnProperty,rs={current:null},Yu={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Xu.call(n,r)&&!Yu.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Ur,type:e,key:o,ref:i,props:l,_owner:rs.current}}function sp(e,n){return{$$typeof:Ur,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function ap(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ha=/\/+/g;function No(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ap(""+e.key):n.toString(36)}function hl(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ur:case Qf:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+No(i,0):r,pa(l)?(t="",e!=null&&(t=e.replace(ha,"$&/")+"/"),hl(l,n,t,"",function(u){return u})):l!=null&&(ls(l)&&(l=sp(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(ha,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",pa(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+No(o,s);i+=hl(o,n,t,a,l)}else if(a=ip(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+No(o,s++),i+=hl(o,n,t,a,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function qr(e,n,t){if(e==null)return e;var r=[],l=0;return hl(e,r,"","",function(o){return n.call(t,o,l++)}),r}function up(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},ml={transition:null},cp={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:ml,ReactCurrentOwner:rs};function ec(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:qr,forEach:function(e,n,t){qr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return qr(e,function(){n++}),n},toArray:function(e){return qr(e,function(n){return n})||[]},only:function(e){if(!ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Mt;I.Fragment=Xf;I.Profiler=Zf;I.PureComponent=ns;I.StrictMode=Yf;I.Suspense=rp;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;I.act=ec;I.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ju({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=rs.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Xu.call(n,a)&&!Yu.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ur,type:e.type,key:l,ref:o,props:r,_owner:i}};I.createContext=function(e){return e={$$typeof:np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ep,_context:e},e.Consumer=e};I.createElement=Zu;I.createFactory=function(e){var n=Zu.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:tp,render:e}};I.isValidElement=ls;I.lazy=function(e){return{$$typeof:op,_payload:{_status:-1,_result:e},_init:up}};I.memo=function(e,n){return{$$typeof:lp,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=ml.transition;ml.transition={};try{e()}finally{ml.transition=n}};I.unstable_act=ec;I.useCallback=function(e,n){return ge.current.useCallback(e,n)};I.useContext=function(e){return ge.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};I.useEffect=function(e,n){return ge.current.useEffect(e,n)};I.useId=function(){return ge.current.useId()};I.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};I.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return ge.current.useMemo(e,n)};I.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};I.useRef=function(e){return ge.current.useRef(e)};I.useState=function(e){return ge.current.useState(e)};I.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};I.useTransition=function(){return ge.current.useTransition()};I.version="18.3.1";Gu.exports=I;var C=Gu.exports;const dp=qf(C),fp=Jf({__proto__:null,default:dp},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=C,hp=Symbol.for("react.element"),mp=Symbol.for("react.fragment"),gp=Object.prototype.hasOwnProperty,vp=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yp={key:!0,ref:!0,__self:!0,__source:!0};function nc(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)gp.call(n,r)&&!yp.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:hp,type:e,key:o,ref:i,props:l,_owner:vp.current}}to.Fragment=mp;to.jsx=nc;to.jsxs=nc;Vu.exports=to;var g=Vu.exports,tc={exports:{}},Ae={},rc={exports:{}},lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(D,_){var j=D.length;D.push(_);e:for(;0<j;){var q=j-1>>>1,ee=D[q];if(0<l(ee,_))D[q]=_,D[j]=ee,j=q;else break e}}function t(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var _=D[0],j=D.pop();if(j!==_){D[0]=j;e:for(var q=0,ee=D.length,Kr=ee>>>1;q<Kr;){var Fn=2*(q+1)-1,Po=D[Fn],zn=Fn+1,Jr=D[zn];if(0>l(Po,j))zn<ee&&0>l(Jr,Po)?(D[q]=Jr,D[zn]=j,q=zn):(D[q]=Po,D[Fn]=j,q=Fn);else if(zn<ee&&0>l(Jr,j))D[q]=Jr,D[zn]=j,q=zn;else break e}}return _}function l(D,_){var j=D.sortIndex-_.sortIndex;return j!==0?j:D.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],u=[],d=1,f=null,h=3,y=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var _=t(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=D)r(u),_.sortIndex=_.expirationTime,n(a,_);else break;_=t(u)}}function x(D){if(w=!1,p(D),!v)if(t(a)!==null)v=!0,Eo(k);else{var _=t(u);_!==null&&To(x,_.startTime-D)}}function k(D,_){v=!1,w&&(w=!1,m(R),R=-1),y=!0;var j=h;try{for(p(_),f=t(a);f!==null&&(!(f.expirationTime>_)||D&&!ce());){var q=f.callback;if(typeof q=="function"){f.callback=null,h=f.priorityLevel;var ee=q(f.expirationTime<=_);_=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===t(a)&&r(a),p(_)}else r(a);f=t(a)}if(f!==null)var Kr=!0;else{var Fn=t(u);Fn!==null&&To(x,Fn.startTime-_),Kr=!1}return Kr}finally{f=null,h=j,y=!1}}var E=!1,P=null,R=-1,U=5,A=-1;function ce(){return!(e.unstable_now()-A<U)}function Bt(){if(P!==null){var D=e.unstable_now();A=D;var _=!0;try{_=P(!0,D)}finally{_?Ft():(E=!1,P=null)}}else E=!1}var Ft;if(typeof c=="function")Ft=function(){c(Bt)};else if(typeof MessageChannel<"u"){var ua=new MessageChannel,Hf=ua.port2;ua.port1.onmessage=Bt,Ft=function(){Hf.postMessage(null)}}else Ft=function(){S(Bt,0)};function Eo(D){P=D,E||(E=!0,Ft())}function To(D,_){R=S(function(){D(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Eo(k))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(D){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var j=h;h=_;try{return D()}finally{h=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,_){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=h;h=D;try{return _()}finally{h=j}},e.unstable_scheduleCallback=function(D,_,j){var q=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?q+j:q):j=q,D){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=j+ee,D={id:d++,callback:_,priorityLevel:D,startTime:j,expirationTime:ee,sortIndex:-1},j>q?(D.sortIndex=j,n(u,D),t(a)===null&&D===t(u)&&(w?(m(R),R=-1):w=!0,To(x,j-q))):(D.sortIndex=ee,n(a,D),v||y||(v=!0,Eo(k))),D},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(D){var _=h;return function(){var j=h;h=_;try{return D.apply(this,arguments)}finally{h=j}}}})(lc);rc.exports=lc;var xp=rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=C,Re=xp;function T(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oc=new Set,yr={};function rt(e,n){Dt(e,n),Dt(e+"Capture",n)}function Dt(e,n){for(yr[e]=n,e=0;e<n.length;e++)oc.add(n[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=Object.prototype.hasOwnProperty,kp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ma={},ga={};function Sp(e){return ti.call(ga,e)?!0:ti.call(ma,e)?!1:kp.test(e)?ga[e]=!0:(ma[e]=!0,!1)}function Cp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ep(e,n,t,r){if(n===null||typeof n>"u"||Cp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];oe[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var os=/[\-:]([a-z])/g;function is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(os,is);oe[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(os,is);oe[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(os,is);oe[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ss(e,n,t,r){var l=oe.hasOwnProperty(n)?oe[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ep(n,t,l,r)&&(t=null),r||l===null?Sp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var pn=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),ut=Symbol.for("react.portal"),ct=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),ic=Symbol.for("react.provider"),sc=Symbol.for("react.context"),us=Symbol.for("react.forward_ref"),li=Symbol.for("react.suspense"),oi=Symbol.for("react.suspense_list"),cs=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),ac=Symbol.for("react.offscreen"),va=Symbol.iterator;function $t(e){return e===null||typeof e!="object"?null:(e=va&&e[va]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Do;function tr(e){if(Do===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Do=n&&n[1]||""}return`
`+Do+e}var Ro=!1;function Ao(e,n){if(!e||Ro)return"";Ro=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Ro=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?tr(e):""}function Tp(e){switch(e.tag){case 5:return tr(e.type);case 16:return tr("Lazy");case 13:return tr("Suspense");case 19:return tr("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ct:return"Fragment";case ut:return"Portal";case ri:return"Profiler";case as:return"StrictMode";case li:return"Suspense";case oi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sc:return(e.displayName||"Context")+".Consumer";case ic:return(e._context.displayName||"Context")+".Provider";case us:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cs:return n=e.displayName||null,n!==null?n:ii(e.type)||"Memo";case vn:n=e._payload,e=e._init;try{return ii(e(n))}catch{}}return null}function Pp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ii(n);case 8:return n===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Np(e){var n=uc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xr(e){e._valueTracker||(e._valueTracker=Np(e))}function cc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=uc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function si(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ya(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=In(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function dc(e,n){n=n.checked,n!=null&&ss(e,"checked",n,!1)}function ai(e,n){dc(e,n);var t=In(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ui(e,n.type,t):n.hasOwnProperty("defaultValue")&&ui(e,n.type,In(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xa(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ui(e,n,t){(n!=="number"||Pl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var rr=Array.isArray;function kt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+In(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ci(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(T(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(T(92));if(rr(t)){if(1<t.length)throw Error(T(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:In(t)}}function fc(e,n){var t=In(n.value),r=In(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ka(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function pc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?pc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,hc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function xr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dp=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){Dp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ir[n]=ir[e]})});function mc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ir.hasOwnProperty(e)&&ir[e]?(""+n).trim():n+"px"}function gc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=mc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Rp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fi(e,n){if(n){if(Rp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(T(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(T(61))}if(n.style!=null&&typeof n.style!="object")throw Error(T(62))}}function pi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hi=null;function ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mi=null,St=null,Ct=null;function Sa(e){if(e=zr(e)){if(typeof mi!="function")throw Error(T(280));var n=e.stateNode;n&&(n=so(n),mi(e.stateNode,e.type,n))}}function vc(e){St?Ct?Ct.push(e):Ct=[e]:St=e}function yc(){if(St){var e=St,n=Ct;if(Ct=St=null,Sa(e),n)for(e=0;e<n.length;e++)Sa(n[e])}}function xc(e,n){return e(n)}function wc(){}var _o=!1;function kc(e,n,t){if(_o)return e(n,t);_o=!0;try{return xc(e,n,t)}finally{_o=!1,(St!==null||Ct!==null)&&(wc(),yc())}}function wr(e,n){var t=e.stateNode;if(t===null)return null;var r=so(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(T(231,n,typeof t));return t}var gi=!1;if(an)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){gi=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{gi=!1}function Ap(e,n,t,r,l,o,i,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var sr=!1,Nl=null,Dl=!1,vi=null,_p={onError:function(e){sr=!0,Nl=e}};function jp(e,n,t,r,l,o,i,s,a){sr=!1,Nl=null,Ap.apply(_p,arguments)}function Ip(e,n,t,r,l,o,i,s,a){if(jp.apply(this,arguments),sr){if(sr){var u=Nl;sr=!1,Nl=null}else throw Error(T(198));Dl||(Dl=!0,vi=u)}}function lt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Sc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ca(e){if(lt(e)!==e)throw Error(T(188))}function Op(e){var n=e.alternate;if(!n){if(n=lt(e),n===null)throw Error(T(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return Ca(l),e;if(o===r)return Ca(l),n;o=o.sibling}throw Error(T(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i)throw Error(T(189))}}if(t.alternate!==r)throw Error(T(190))}if(t.tag!==3)throw Error(T(188));return t.stateNode.current===t?e:n}function Cc(e){return e=Op(e),e!==null?Ec(e):null}function Ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ec(e);if(n!==null)return n;e=e.sibling}return null}var Tc=Re.unstable_scheduleCallback,Ea=Re.unstable_cancelCallback,Lp=Re.unstable_shouldYield,Mp=Re.unstable_requestPaint,Q=Re.unstable_now,bp=Re.unstable_getCurrentPriorityLevel,fs=Re.unstable_ImmediatePriority,Pc=Re.unstable_UserBlockingPriority,Rl=Re.unstable_NormalPriority,Up=Re.unstable_LowPriority,Nc=Re.unstable_IdlePriority,ro=null,Ze=null;function Bp(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(ro,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:$p,Fp=Math.log,zp=Math.LN2;function $p(e){return e>>>=0,e===0?32:31-(Fp(e)/zp|0)|0}var Zr=64,el=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Al(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~l;s!==0?r=lr(s):(o&=i,o!==0&&(r=lr(o)))}else i=t&~l,i!==0?r=lr(i):o!==0&&(r=lr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-He(n),l=1<<t,r|=e[t],n&=~l;return r}function Wp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-He(o),s=1<<i,a=l[i];a===-1?(!(s&t)||s&r)&&(l[i]=Wp(s,n)):a<=n&&(e.expiredLanes|=s),o&=~s}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dc(){var e=Zr;return Zr<<=1,!(Zr&4194240)&&(Zr=64),e}function jo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Br(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-He(n),e[n]=t}function Vp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-He(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function ps(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-He(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var M=0;function Rc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ac,hs,_c,jc,Ic,xi=!1,nl=[],En=null,Tn=null,Pn=null,kr=new Map,Sr=new Map,xn=[],Gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ta(e,n){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":kr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(n.pointerId)}}function Ht(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=zr(n),n!==null&&hs(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Kp(e,n,t,r,l){switch(n){case"focusin":return En=Ht(En,e,n,t,r,l),!0;case"dragenter":return Tn=Ht(Tn,e,n,t,r,l),!0;case"mouseover":return Pn=Ht(Pn,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return kr.set(o,Ht(kr.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Sr.set(o,Ht(Sr.get(o)||null,e,n,t,r,l)),!0}return!1}function Oc(e){var n=Hn(e.target);if(n!==null){var t=lt(n);if(t!==null){if(n=t.tag,n===13){if(n=Sc(t),n!==null){e.blockedOn=n,Ic(e.priority,function(){_c(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=wi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);hi=r,t.target.dispatchEvent(r),hi=null}else return n=zr(t),n!==null&&hs(n),e.blockedOn=t,!1;n.shift()}return!0}function Pa(e,n,t){gl(e)&&t.delete(n)}function Jp(){xi=!1,En!==null&&gl(En)&&(En=null),Tn!==null&&gl(Tn)&&(Tn=null),Pn!==null&&gl(Pn)&&(Pn=null),kr.forEach(Pa),Sr.forEach(Pa)}function Vt(e,n){e.blockedOn===n&&(e.blockedOn=null,xi||(xi=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Jp)))}function Cr(e){function n(l){return Vt(l,e)}if(0<nl.length){Vt(nl[0],e);for(var t=1;t<nl.length;t++){var r=nl[t];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&Vt(En,e),Tn!==null&&Vt(Tn,e),Pn!==null&&Vt(Pn,e),kr.forEach(n),Sr.forEach(n),t=0;t<xn.length;t++)r=xn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(t=xn[0],t.blockedOn===null);)Oc(t),t.blockedOn===null&&xn.shift()}var Et=pn.ReactCurrentBatchConfig,_l=!0;function qp(e,n,t,r){var l=M,o=Et.transition;Et.transition=null;try{M=1,ms(e,n,t,r)}finally{M=l,Et.transition=o}}function Qp(e,n,t,r){var l=M,o=Et.transition;Et.transition=null;try{M=4,ms(e,n,t,r)}finally{M=l,Et.transition=o}}function ms(e,n,t,r){if(_l){var l=wi(e,n,t,r);if(l===null)$o(e,n,r,jl,t),Ta(e,r);else if(Kp(l,e,n,t,r))r.stopPropagation();else if(Ta(e,r),n&4&&-1<Gp.indexOf(e)){for(;l!==null;){var o=zr(l);if(o!==null&&Ac(o),o=wi(e,n,t,r),o===null&&$o(e,n,r,jl,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else $o(e,n,r,null,t)}}var jl=null;function wi(e,n,t,r){if(jl=null,e=ds(r),e=Hn(e),e!==null)if(n=lt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Sc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return jl=e,null}function Lc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bp()){case fs:return 1;case Pc:return 4;case Rl:case Up:return 16;case Nc:return 536870912;default:return 16}default:return 16}}var kn=null,gs=null,vl=null;function Mc(){if(vl)return vl;var e,n=gs,t=n.length,r,l="value"in kn?kn.value:kn.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return vl=l.slice(e,1<r?1-r:void 0)}function yl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Na(){return!1}function _e(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?tl:Na,this.isPropagationStopped=Na,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=_e(bt),Fr=G({},bt,{view:0,detail:0}),Xp=_e(Fr),Io,Oo,Gt,lo=G({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gt&&(Gt&&e.type==="mousemove"?(Io=e.screenX-Gt.screenX,Oo=e.screenY-Gt.screenY):Oo=Io=0,Gt=e),Io)},movementY:function(e){return"movementY"in e?e.movementY:Oo}}),Da=_e(lo),Yp=G({},lo,{dataTransfer:0}),Zp=_e(Yp),eh=G({},Fr,{relatedTarget:0}),Lo=_e(eh),nh=G({},bt,{animationName:0,elapsedTime:0,pseudoElement:0}),th=_e(nh),rh=G({},bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lh=_e(rh),oh=G({},bt,{data:0}),Ra=_e(oh),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ah[e])?!!n[e]:!1}function ys(){return uh}var ch=G({},Fr,{key:function(e){if(e.key){var n=ih[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dh=_e(ch),fh=G({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Aa=_e(fh),ph=G({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),hh=_e(ph),mh=G({},bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),gh=_e(mh),vh=G({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yh=_e(vh),xh=[9,13,27,32],xs=an&&"CompositionEvent"in window,ar=null;an&&"documentMode"in document&&(ar=document.documentMode);var wh=an&&"TextEvent"in window&&!ar,bc=an&&(!xs||ar&&8<ar&&11>=ar),_a=" ",ja=!1;function Uc(e,n){switch(e){case"keyup":return xh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dt=!1;function kh(e,n){switch(e){case"compositionend":return Bc(n);case"keypress":return n.which!==32?null:(ja=!0,_a);case"textInput":return e=n.data,e===_a&&ja?null:e;default:return null}}function Sh(e,n){if(dt)return e==="compositionend"||!xs&&Uc(e,n)?(e=Mc(),vl=gs=kn=null,dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bc&&n.locale!=="ko"?null:n.data;default:return null}}var Ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ch[e.type]:n==="textarea"}function Fc(e,n,t,r){vc(r),n=Il(n,"onChange"),0<n.length&&(t=new vs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ur=null,Er=null;function Eh(e){Xc(e,0)}function oo(e){var n=ht(e);if(cc(n))return e}function Th(e,n){if(e==="change")return n}var zc=!1;if(an){var Mo;if(an){var bo="oninput"in document;if(!bo){var Oa=document.createElement("div");Oa.setAttribute("oninput","return;"),bo=typeof Oa.oninput=="function"}Mo=bo}else Mo=!1;zc=Mo&&(!document.documentMode||9<document.documentMode)}function La(){ur&&(ur.detachEvent("onpropertychange",$c),Er=ur=null)}function $c(e){if(e.propertyName==="value"&&oo(Er)){var n=[];Fc(n,Er,e,ds(e)),kc(Eh,n)}}function Ph(e,n,t){e==="focusin"?(La(),ur=n,Er=t,ur.attachEvent("onpropertychange",$c)):e==="focusout"&&La()}function Nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(Er)}function Dh(e,n){if(e==="click")return oo(n)}function Rh(e,n){if(e==="input"||e==="change")return oo(n)}function Ah(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ge=typeof Object.is=="function"?Object.is:Ah;function Tr(e,n){if(Ge(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!ti.call(n,l)||!Ge(e[l],n[l]))return!1}return!0}function Ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ba(e,n){var t=Ma(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ma(t)}}function Wc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hc(){for(var e=window,n=Pl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Pl(e.document)}return n}function ws(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function _h(e){var n=Hc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wc(t.ownerDocument.documentElement,t)){if(r!==null&&ws(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ba(t,o);var i=ba(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jh=an&&"documentMode"in document&&11>=document.documentMode,ft=null,ki=null,cr=null,Si=!1;function Ua(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Si||ft==null||ft!==Pl(r)||(r=ft,"selectionStart"in r&&ws(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&Tr(cr,r)||(cr=r,r=Il(ki,"onSelect"),0<r.length&&(n=new vs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ft)))}function rl(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var pt={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Uo={},Vc={};an&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete pt.animationend.animation,delete pt.animationiteration.animation,delete pt.animationstart.animation),"TransitionEvent"in window||delete pt.transitionend.transition);function io(e){if(Uo[e])return Uo[e];if(!pt[e])return e;var n=pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Vc)return Uo[e]=n[t];return e}var Gc=io("animationend"),Kc=io("animationiteration"),Jc=io("animationstart"),qc=io("transitionend"),Qc=new Map,Ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,n){Qc.set(e,n),rt(n,[e])}for(var Bo=0;Bo<Ba.length;Bo++){var Fo=Ba[Bo],Ih=Fo.toLowerCase(),Oh=Fo[0].toUpperCase()+Fo.slice(1);Ln(Ih,"on"+Oh)}Ln(Gc,"onAnimationEnd");Ln(Kc,"onAnimationIteration");Ln(Jc,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(qc,"onTransitionEnd");Dt("onMouseEnter",["mouseout","mouseover"]);Dt("onMouseLeave",["mouseout","mouseover"]);Dt("onPointerEnter",["pointerout","pointerover"]);Dt("onPointerLeave",["pointerout","pointerover"]);rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lh=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Fa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Ip(r,n,void 0,e),e.currentTarget=null}function Xc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;Fa(l,s,u),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;Fa(l,s,u),o=a}}}if(Dl)throw e=vi,Dl=!1,vi=null,e}function z(e,n){var t=n[Ni];t===void 0&&(t=n[Ni]=new Set);var r=e+"__bubble";t.has(r)||(Yc(n,e,2,!1),t.add(r))}function zo(e,n,t){var r=0;n&&(r|=4),Yc(t,e,r,n)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[ll]){e[ll]=!0,oc.forEach(function(t){t!=="selectionchange"&&(Lh.has(t)||zo(t,!1,e),zo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ll]||(n[ll]=!0,zo("selectionchange",!1,n))}}function Yc(e,n,t,r){switch(Lc(n)){case 1:var l=qp;break;case 4:l=Qp;break;default:l=ms}t=l.bind(null,n,t,e),l=void 0,!gi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function $o(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Hn(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}kc(function(){var u=o,d=ds(t),f=[];e:{var h=Qc.get(e);if(h!==void 0){var y=vs,v=e;switch(e){case"keypress":if(yl(t)===0)break e;case"keydown":case"keyup":y=dh;break;case"focusin":v="focus",y=Lo;break;case"focusout":v="blur",y=Lo;break;case"beforeblur":case"afterblur":y=Lo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Da;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=hh;break;case Gc:case Kc:case Jc:y=th;break;case qc:y=gh;break;case"scroll":y=Xp;break;case"wheel":y=yh;break;case"copy":case"cut":case"paste":y=lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Aa}var w=(n&4)!==0,S=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var c=u,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,m!==null&&(x=wr(c,m),x!=null&&w.push(Nr(c,x,p)))),S)break;c=c.return}0<w.length&&(h=new y(h,v,null,t,d),f.push({event:h,listeners:w}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==hi&&(v=t.relatedTarget||t.fromElement)&&(Hn(v)||v[un]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=u,v=v?Hn(v):null,v!==null&&(S=lt(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Da,x="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Aa,x="onPointerLeave",m="onPointerEnter",c="pointer"),S=y==null?h:ht(y),p=v==null?h:ht(v),h=new w(x,c+"leave",y,t,d),h.target=S,h.relatedTarget=p,x=null,Hn(d)===u&&(w=new w(m,c+"enter",v,t,d),w.target=p,w.relatedTarget=S,x=w),S=x,y&&v)n:{for(w=y,m=v,c=0,p=w;p;p=st(p))c++;for(p=0,x=m;x;x=st(x))p++;for(;0<c-p;)w=st(w),c--;for(;0<p-c;)m=st(m),p--;for(;c--;){if(w===m||m!==null&&w===m.alternate)break n;w=st(w),m=st(m)}w=null}else w=null;y!==null&&za(f,h,y,w,!1),v!==null&&S!==null&&za(f,S,v,w,!0)}}e:{if(h=u?ht(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var k=Th;else if(Ia(h))if(zc)k=Rh;else{k=Nh;var E=Ph}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Dh);if(k&&(k=k(e,u))){Fc(f,k,t,d);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&ui(h,"number",h.value)}switch(E=u?ht(u):window,e){case"focusin":(Ia(E)||E.contentEditable==="true")&&(ft=E,ki=u,cr=null);break;case"focusout":cr=ki=ft=null;break;case"mousedown":Si=!0;break;case"contextmenu":case"mouseup":case"dragend":Si=!1,Ua(f,t,d);break;case"selectionchange":if(jh)break;case"keydown":case"keyup":Ua(f,t,d)}var P;if(xs)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else dt?Uc(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(bc&&t.locale!=="ko"&&(dt||R!=="onCompositionStart"?R==="onCompositionEnd"&&dt&&(P=Mc()):(kn=d,gs="value"in kn?kn.value:kn.textContent,dt=!0)),E=Il(u,R),0<E.length&&(R=new Ra(R,e,null,t,d),f.push({event:R,listeners:E}),P?R.data=P:(P=Bc(t),P!==null&&(R.data=P)))),(P=wh?kh(e,t):Sh(e,t))&&(u=Il(u,"onBeforeInput"),0<u.length&&(d=new Ra("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:u}),d.data=P))}Xc(f,n)})}function Nr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Il(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=wr(e,t),o!=null&&r.unshift(Nr(e,o,l)),o=wr(e,n),o!=null&&r.push(Nr(e,o,l))),e=e.return}return r}function st(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function za(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,l?(a=wr(t,o),a!=null&&i.unshift(Nr(t,a,s))):l||(a=wr(t,o),a!=null&&i.push(Nr(t,a,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Mh=/\r\n?/g,bh=/\u0000|\uFFFD/g;function $a(e){return(typeof e=="string"?e:""+e).replace(Mh,`
`).replace(bh,"")}function ol(e,n,t){if(n=$a(n),$a(e)!==n&&t)throw Error(T(425))}function Ol(){}var Ci=null,Ei=null;function Ti(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pi=typeof setTimeout=="function"?setTimeout:void 0,Uh=typeof clearTimeout=="function"?clearTimeout:void 0,Wa=typeof Promise=="function"?Promise:void 0,Bh=typeof queueMicrotask=="function"?queueMicrotask:typeof Wa<"u"?function(e){return Wa.resolve(null).then(e).catch(Fh)}:Pi;function Fh(e){setTimeout(function(){throw e})}function Wo(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Cr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Cr(n)}function Nn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ha(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ut=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Ut,Dr="__reactProps$"+Ut,un="__reactContainer$"+Ut,Ni="__reactEvents$"+Ut,zh="__reactListeners$"+Ut,$h="__reactHandles$"+Ut;function Hn(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[un]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ha(e);e!==null;){if(t=e[Qe])return t;e=Ha(e)}return n}e=t,t=e.parentNode}return null}function zr(e){return e=e[Qe]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function so(e){return e[Dr]||null}var Di=[],mt=-1;function Mn(e){return{current:e}}function $(e){0>mt||(e.current=Di[mt],Di[mt]=null,mt--)}function F(e,n){mt++,Di[mt]=e.current,e.current=n}var On={},ue=Mn(On),we=Mn(!1),Xn=On;function Rt(e,n){var t=e.type.contextTypes;if(!t)return On;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function Ll(){$(we),$(ue)}function Va(e,n,t){if(ue.current!==On)throw Error(T(168));F(ue,n),F(we,t)}function Zc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(T(108,Pp(e)||"Unknown",l));return G({},t,r)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,Xn=ue.current,F(ue,e),F(we,we.current),!0}function Ga(e,n,t){var r=e.stateNode;if(!r)throw Error(T(169));t?(e=Zc(e,n,Xn),r.__reactInternalMemoizedMergedChildContext=e,$(we),$(ue),F(ue,e)):$(we),F(we,t)}var rn=null,ao=!1,Ho=!1;function ed(e){rn===null?rn=[e]:rn.push(e)}function Wh(e){ao=!0,ed(e)}function bn(){if(!Ho&&rn!==null){Ho=!0;var e=0,n=M;try{var t=rn;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}rn=null,ao=!1}catch(l){throw rn!==null&&(rn=rn.slice(e+1)),Tc(fs,bn),l}finally{M=n,Ho=!1}}return null}var gt=[],vt=0,bl=null,Ul=0,je=[],Ie=0,Yn=null,ln=1,on="";function $n(e,n){gt[vt++]=Ul,gt[vt++]=bl,bl=e,Ul=n}function nd(e,n,t){je[Ie++]=ln,je[Ie++]=on,je[Ie++]=Yn,Yn=e;var r=ln;e=on;var l=32-He(r)-1;r&=~(1<<l),t+=1;var o=32-He(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,ln=1<<32-He(n)+l|t<<l|r,on=o+e}else ln=1<<o|t<<l|r,on=e}function ks(e){e.return!==null&&($n(e,1),nd(e,1,0))}function Ss(e){for(;e===bl;)bl=gt[--vt],gt[vt]=null,Ul=gt[--vt],gt[vt]=null;for(;e===Yn;)Yn=je[--Ie],je[Ie]=null,on=je[--Ie],je[Ie]=null,ln=je[--Ie],je[Ie]=null}var De=null,Ne=null,W=!1,We=null;function td(e,n){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ka(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,De=e,Ne=Nn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,De=e,Ne=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Yn!==null?{id:ln,overflow:on}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,De=e,Ne=null,!0):!1;default:return!1}}function Ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ai(e){if(W){var n=Ne;if(n){var t=n;if(!Ka(e,n)){if(Ri(e))throw Error(T(418));n=Nn(t.nextSibling);var r=De;n&&Ka(e,n)?td(r,t):(e.flags=e.flags&-4097|2,W=!1,De=e)}}else{if(Ri(e))throw Error(T(418));e.flags=e.flags&-4097|2,W=!1,De=e}}}function Ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function il(e){if(e!==De)return!1;if(!W)return Ja(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ti(e.type,e.memoizedProps)),n&&(n=Ne)){if(Ri(e))throw rd(),Error(T(418));for(;n;)td(e,n),n=Nn(n.nextSibling)}if(Ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ne=Nn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ne=null}}else Ne=De?Nn(e.stateNode.nextSibling):null;return!0}function rd(){for(var e=Ne;e;)e=Nn(e.nextSibling)}function At(){Ne=De=null,W=!1}function Cs(e){We===null?We=[e]:We.push(e)}var Hh=pn.ReactCurrentBatchConfig;function Kt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(T(309));var r=t.stateNode}if(!r)throw Error(T(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(T(284));if(!t._owner)throw Error(T(290,e))}return e}function sl(e,n){throw e=Object.prototype.toString.call(n),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function qa(e){var n=e._init;return n(e._payload)}function ld(e){function n(m,c){if(e){var p=m.deletions;p===null?(m.deletions=[c],m.flags|=16):p.push(c)}}function t(m,c){if(!e)return null;for(;c!==null;)n(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function l(m,c){return m=_n(m,c),m.index=0,m.sibling=null,m}function o(m,c,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<c?(m.flags|=2,c):p):(m.flags|=2,c)):(m.flags|=1048576,c)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,c,p,x){return c===null||c.tag!==6?(c=Xo(p,m.mode,x),c.return=m,c):(c=l(c,p),c.return=m,c)}function a(m,c,p,x){var k=p.type;return k===ct?d(m,c,p.props.children,x,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===vn&&qa(k)===c.type)?(x=l(c,p.props),x.ref=Kt(m,c,p),x.return=m,x):(x=Tl(p.type,p.key,p.props,null,m.mode,x),x.ref=Kt(m,c,p),x.return=m,x)}function u(m,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Yo(p,m.mode,x),c.return=m,c):(c=l(c,p.children||[]),c.return=m,c)}function d(m,c,p,x,k){return c===null||c.tag!==7?(c=Qn(p,m.mode,x,k),c.return=m,c):(c=l(c,p),c.return=m,c)}function f(m,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Xo(""+c,m.mode,p),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return p=Tl(c.type,c.key,c.props,null,m.mode,p),p.ref=Kt(m,null,c),p.return=m,p;case ut:return c=Yo(c,m.mode,p),c.return=m,c;case vn:var x=c._init;return f(m,x(c._payload),p)}if(rr(c)||$t(c))return c=Qn(c,m.mode,p,null),c.return=m,c;sl(m,c)}return null}function h(m,c,p,x){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(m,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return p.key===k?a(m,c,p,x):null;case ut:return p.key===k?u(m,c,p,x):null;case vn:return k=p._init,h(m,c,k(p._payload),x)}if(rr(p)||$t(p))return k!==null?null:d(m,c,p,x,null);sl(m,p)}return null}function y(m,c,p,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(p)||null,s(c,m,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qr:return m=m.get(x.key===null?p:x.key)||null,a(c,m,x,k);case ut:return m=m.get(x.key===null?p:x.key)||null,u(c,m,x,k);case vn:var E=x._init;return y(m,c,p,E(x._payload),k)}if(rr(x)||$t(x))return m=m.get(p)||null,d(c,m,x,k,null);sl(c,x)}return null}function v(m,c,p,x){for(var k=null,E=null,P=c,R=c=0,U=null;P!==null&&R<p.length;R++){P.index>R?(U=P,P=null):U=P.sibling;var A=h(m,P,p[R],x);if(A===null){P===null&&(P=U);break}e&&P&&A.alternate===null&&n(m,P),c=o(A,c,R),E===null?k=A:E.sibling=A,E=A,P=U}if(R===p.length)return t(m,P),W&&$n(m,R),k;if(P===null){for(;R<p.length;R++)P=f(m,p[R],x),P!==null&&(c=o(P,c,R),E===null?k=P:E.sibling=P,E=P);return W&&$n(m,R),k}for(P=r(m,P);R<p.length;R++)U=y(P,m,R,p[R],x),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?R:U.key),c=o(U,c,R),E===null?k=U:E.sibling=U,E=U);return e&&P.forEach(function(ce){return n(m,ce)}),W&&$n(m,R),k}function w(m,c,p,x){var k=$t(p);if(typeof k!="function")throw Error(T(150));if(p=k.call(p),p==null)throw Error(T(151));for(var E=k=null,P=c,R=c=0,U=null,A=p.next();P!==null&&!A.done;R++,A=p.next()){P.index>R?(U=P,P=null):U=P.sibling;var ce=h(m,P,A.value,x);if(ce===null){P===null&&(P=U);break}e&&P&&ce.alternate===null&&n(m,P),c=o(ce,c,R),E===null?k=ce:E.sibling=ce,E=ce,P=U}if(A.done)return t(m,P),W&&$n(m,R),k;if(P===null){for(;!A.done;R++,A=p.next())A=f(m,A.value,x),A!==null&&(c=o(A,c,R),E===null?k=A:E.sibling=A,E=A);return W&&$n(m,R),k}for(P=r(m,P);!A.done;R++,A=p.next())A=y(P,m,R,A.value,x),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?R:A.key),c=o(A,c,R),E===null?k=A:E.sibling=A,E=A);return e&&P.forEach(function(Bt){return n(m,Bt)}),W&&$n(m,R),k}function S(m,c,p,x){if(typeof p=="object"&&p!==null&&p.type===ct&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:e:{for(var k=p.key,E=c;E!==null;){if(E.key===k){if(k=p.type,k===ct){if(E.tag===7){t(m,E.sibling),c=l(E,p.props.children),c.return=m,m=c;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===vn&&qa(k)===E.type){t(m,E.sibling),c=l(E,p.props),c.ref=Kt(m,E,p),c.return=m,m=c;break e}t(m,E);break}else n(m,E);E=E.sibling}p.type===ct?(c=Qn(p.props.children,m.mode,x,p.key),c.return=m,m=c):(x=Tl(p.type,p.key,p.props,null,m.mode,x),x.ref=Kt(m,c,p),x.return=m,m=x)}return i(m);case ut:e:{for(E=p.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(m,c.sibling),c=l(c,p.children||[]),c.return=m,m=c;break e}else{t(m,c);break}else n(m,c);c=c.sibling}c=Yo(p,m.mode,x),c.return=m,m=c}return i(m);case vn:return E=p._init,S(m,c,E(p._payload),x)}if(rr(p))return v(m,c,p,x);if($t(p))return w(m,c,p,x);sl(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(m,c.sibling),c=l(c,p),c.return=m,m=c):(t(m,c),c=Xo(p,m.mode,x),c.return=m,m=c),i(m)):t(m,c)}return S}var _t=ld(!0),od=ld(!1),Bl=Mn(null),Fl=null,yt=null,Es=null;function Ts(){Es=yt=Fl=null}function Ps(e){var n=Bl.current;$(Bl),e._currentValue=n}function _i(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Tt(e,n){Fl=e,Es=yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(xe=!0),e.firstContext=null)}function Ue(e){var n=e._currentValue;if(Es!==e)if(e={context:e,memoizedValue:n,next:null},yt===null){if(Fl===null)throw Error(T(308));yt=e,Fl.dependencies={lanes:0,firstContext:e}}else yt=yt.next=e;return n}var Vn=null;function Ns(e){Vn===null?Vn=[e]:Vn.push(e)}function id(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Ns(n)):(t.next=l.next,l.next=t),n.interleaved=t,cn(e,r)}function cn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var yn=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Dn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,cn(e,t)}return l=r.interleaved,l===null?(n.next=n,Ns(r)):(n.next=l.next,l.next=n),r.interleaved=n,cn(e,t)}function xl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ps(e,t)}}function Qa(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function zl(e,n,t,r){var l=e.updateQueue;yn=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,u=a.next;a.next=null,i===null?o=u:i.next=u,i=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(o!==null){var f=l.baseState;i=0,d=u=a=null,s=o;do{var h=s.lane,y=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(h=n,y=t,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(y,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(y,f,h):v,h==null)break e;f=G({},f,h);break e;case 2:yn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else y={eventTime:y,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=y,a=f):d=d.next=y,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(d===null&&(a=f),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=d,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);et|=i,e.lanes=i,e.memoizedState=f}}function Xa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(T(191,l));l.call(r)}}}var $r={},en=Mn($r),Rr=Mn($r),Ar=Mn($r);function Gn(e){if(e===$r)throw Error(T(174));return e}function Rs(e,n){switch(F(Ar,n),F(Rr,e),F(en,$r),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:di(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=di(n,e)}$(en),F(en,n)}function jt(){$(en),$(Rr),$(Ar)}function ad(e){Gn(Ar.current);var n=Gn(en.current),t=di(n,e.type);n!==t&&(F(Rr,e),F(en,t))}function As(e){Rr.current===e&&($(en),$(Rr))}var H=Mn(0);function $l(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vo=[];function _s(){for(var e=0;e<Vo.length;e++)Vo[e]._workInProgressVersionPrimary=null;Vo.length=0}var wl=pn.ReactCurrentDispatcher,Go=pn.ReactCurrentBatchConfig,Zn=0,V=null,Y=null,ne=null,Wl=!1,dr=!1,_r=0,Vh=0;function ie(){throw Error(T(321))}function js(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ge(e[t],n[t]))return!1;return!0}function Is(e,n,t,r,l,o){if(Zn=o,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wl.current=e===null||e.memoizedState===null?qh:Qh,e=t(r,l),dr){o=0;do{if(dr=!1,_r=0,25<=o)throw Error(T(301));o+=1,ne=Y=null,n.updateQueue=null,wl.current=Xh,e=t(r,l)}while(dr)}if(wl.current=Hl,n=Y!==null&&Y.next!==null,Zn=0,ne=Y=V=null,Wl=!1,n)throw Error(T(300));return e}function Os(){var e=_r!==0;return _r=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?V.memoizedState=ne=e:ne=ne.next=e,ne}function Be(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=ne===null?V.memoizedState:ne.next;if(n!==null)ne=n,Y=e;else{if(e===null)throw Error(T(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ne===null?V.memoizedState=ne=e:ne=ne.next=e}return ne}function jr(e,n){return typeof n=="function"?n(e):n}function Ko(e){var n=Be(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=Y,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,u=o;do{var d=u.lane;if((Zn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=f,i=r):a=a.next=f,V.lanes|=d,et|=d}u=u.next}while(u!==null&&u!==o);a===null?i=r:a.next=s,Ge(r,n.memoizedState)||(xe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,V.lanes|=o,et|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Jo(e){var n=Be(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ge(o,n.memoizedState)||(xe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function ud(){}function cd(e,n){var t=V,r=Be(),l=n(),o=!Ge(r.memoizedState,l);if(o&&(r.memoizedState=l,xe=!0),r=r.queue,Ls(pd.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,Ir(9,fd.bind(null,t,r,l,n),void 0,null),te===null)throw Error(T(349));Zn&30||dd(t,n,l)}return l}function dd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function fd(e,n,t,r){n.value=t,n.getSnapshot=r,hd(n)&&md(e)}function pd(e,n,t){return t(function(){hd(n)&&md(e)})}function hd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ge(e,t)}catch{return!0}}function md(e){var n=cn(e,1);n!==null&&Ve(n,e,1,-1)}function Ya(e){var n=qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},n.queue=e,e=e.dispatch=Jh.bind(null,V,e),[n.memoizedState,e]}function Ir(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function gd(){return Be().memoizedState}function kl(e,n,t,r){var l=qe();V.flags|=e,l.memoizedState=Ir(1|n,t,void 0,r===void 0?null:r)}function uo(e,n,t,r){var l=Be();r=r===void 0?null:r;var o=void 0;if(Y!==null){var i=Y.memoizedState;if(o=i.destroy,r!==null&&js(r,i.deps)){l.memoizedState=Ir(n,t,o,r);return}}V.flags|=e,l.memoizedState=Ir(1|n,t,o,r)}function Za(e,n){return kl(8390656,8,e,n)}function Ls(e,n){return uo(2048,8,e,n)}function vd(e,n){return uo(4,2,e,n)}function yd(e,n){return uo(4,4,e,n)}function xd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wd(e,n,t){return t=t!=null?t.concat([e]):null,uo(4,4,xd.bind(null,n,e),t)}function Ms(){}function kd(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&js(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Sd(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&js(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cd(e,n,t){return Zn&21?(Ge(t,n)||(t=Dc(),V.lanes|=t,et|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=t)}function Gh(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Go.transition;Go.transition={};try{e(!1),n()}finally{M=t,Go.transition=r}}function Ed(){return Be().memoizedState}function Kh(e,n,t){var r=An(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Td(e))Pd(n,t);else if(t=id(e,n,t,r),t!==null){var l=he();Ve(t,e,r,l),Nd(t,n,r)}}function Jh(e,n,t){var r=An(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Td(e))Pd(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(l.hasEagerState=!0,l.eagerState=s,Ge(s,i)){var a=n.interleaved;a===null?(l.next=l,Ns(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=id(e,n,l,r),t!==null&&(l=he(),Ve(t,e,r,l),Nd(t,n,r))}}function Td(e){var n=e.alternate;return e===V||n!==null&&n===V}function Pd(e,n){dr=Wl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Nd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ps(e,t)}}var Hl={readContext:Ue,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},qh={readContext:Ue,useCallback:function(e,n){return qe().memoizedState=[e,n===void 0?null:n],e},useContext:Ue,useEffect:Za,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,kl(4194308,4,xd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return kl(4194308,4,e,n)},useInsertionEffect:function(e,n){return kl(4,2,e,n)},useMemo:function(e,n){var t=qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Kh.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=qe();return e={current:e},n.memoizedState=e},useState:Ya,useDebugValue:Ms,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=Ya(!1),n=e[0];return e=Gh.bind(null,e[1]),qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,l=qe();if(W){if(t===void 0)throw Error(T(407));t=t()}else{if(t=n(),te===null)throw Error(T(349));Zn&30||dd(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Za(pd.bind(null,r,o,e),[e]),r.flags|=2048,Ir(9,fd.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=qe(),n=te.identifierPrefix;if(W){var t=on,r=ln;t=(r&~(1<<32-He(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=_r++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Vh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Qh={readContext:Ue,useCallback:kd,useContext:Ue,useEffect:Ls,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:yd,useMemo:Sd,useReducer:Ko,useRef:gd,useState:function(){return Ko(jr)},useDebugValue:Ms,useDeferredValue:function(e){var n=Be();return Cd(n,Y.memoizedState,e)},useTransition:function(){var e=Ko(jr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:ud,useSyncExternalStore:cd,useId:Ed,unstable_isNewReconciler:!1},Xh={readContext:Ue,useCallback:kd,useContext:Ue,useEffect:Ls,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:yd,useMemo:Sd,useReducer:Jo,useRef:gd,useState:function(){return Jo(jr)},useDebugValue:Ms,useDeferredValue:function(e){var n=Be();return Y===null?n.memoizedState=e:Cd(n,Y.memoizedState,e)},useTransition:function(){var e=Jo(jr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:ud,useSyncExternalStore:cd,useId:Ed,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ji(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var co={isMounted:function(e){return(e=e._reactInternals)?lt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=he(),l=An(e),o=sn(r,l);o.payload=n,t!=null&&(o.callback=t),n=Dn(e,o,l),n!==null&&(Ve(n,e,l,r),xl(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=he(),l=An(e),o=sn(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Dn(e,o,l),n!==null&&(Ve(n,e,l,r),xl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),r=An(e),l=sn(t,r);l.tag=2,n!=null&&(l.callback=n),n=Dn(e,l,r),n!==null&&(Ve(n,e,r,t),xl(n,e,r))}};function eu(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Tr(t,r)||!Tr(l,o):!0}function Dd(e,n,t){var r=!1,l=On,o=n.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(l=ke(n)?Xn:ue.current,r=n.contextTypes,o=(r=r!=null)?Rt(e,l):On),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=co,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function nu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&co.enqueueReplaceState(n,n.state,null)}function Ii(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Ds(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Ue(o):(o=ke(n)?Xn:ue.current,l.context=Rt(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ji(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&co.enqueueReplaceState(l,l.state,null),zl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function It(e,n){try{var t="",r=n;do t+=Tp(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function qo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Oi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Yh=typeof WeakMap=="function"?WeakMap:Map;function Rd(e,n,t){t=sn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Gl||(Gl=!0,Hi=r),Oi(e,n)},t}function Ad(e,n,t){t=sn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Oi(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Oi(e,n),typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function tu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Yh;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=fm.bind(null,e,n,t),n.then(e,e))}function ru(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function lu(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=sn(-1,1),n.tag=2,Dn(t,n,1))),t.lanes|=1),e)}var Zh=pn.ReactCurrentOwner,xe=!1;function de(e,n,t,r){n.child=e===null?od(n,null,t,r):_t(n,e.child,t,r)}function ou(e,n,t,r,l){t=t.render;var o=n.ref;return Tt(n,l),r=Is(e,n,t,r,o,l),t=Os(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,dn(e,n,l)):(W&&t&&ks(n),n.flags|=1,de(e,n,r,l),n.child)}function iu(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Hs(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,_d(e,n,o,r,l)):(e=Tl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Tr,t(i,r)&&e.ref===n.ref)return dn(e,n,l)}return n.flags|=1,e=_n(o,r),e.ref=n.ref,e.return=n,n.child=e}function _d(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Tr(o,r)&&e.ref===n.ref)if(xe=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(xe=!0);else return n.lanes=e.lanes,dn(e,n,l)}return Li(e,n,t,r,l)}function jd(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(wt,Ee),Ee|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(wt,Ee),Ee|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,F(wt,Ee),Ee|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,F(wt,Ee),Ee|=r;return de(e,n,l,t),n.child}function Id(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Li(e,n,t,r,l){var o=ke(t)?Xn:ue.current;return o=Rt(n,o),Tt(n,l),t=Is(e,n,t,r,o,l),r=Os(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,dn(e,n,l)):(W&&r&&ks(n),n.flags|=1,de(e,n,t,l),n.child)}function su(e,n,t,r,l){if(ke(t)){var o=!0;Ml(n)}else o=!1;if(Tt(n,l),n.stateNode===null)Sl(e,n),Dd(n,t,r),Ii(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var a=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=ke(t)?Xn:ue.current,u=Rt(n,u));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==u)&&nu(n,i,r,u),yn=!1;var h=n.memoizedState;i.state=h,zl(n,r,i,l),a=n.memoizedState,s!==r||h!==a||we.current||yn?(typeof d=="function"&&(ji(n,t,d,r),a=n.memoizedState),(s=yn||eu(n,t,s,r,h,a,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),i.props=r,i.state=a,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,sd(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:ze(n.type,s),i.props=u,f=n.pendingProps,h=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=ke(t)?Xn:ue.current,a=Rt(n,a));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==f||h!==a)&&nu(n,i,r,a),yn=!1,h=n.memoizedState,i.state=h,zl(n,r,i,l);var v=n.memoizedState;s!==f||h!==v||we.current||yn?(typeof y=="function"&&(ji(n,t,y,r),v=n.memoizedState),(u=yn||eu(n,t,u,r,h,v,a)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),i.props=r,i.state=v,i.context=a,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Mi(e,n,t,r,o,l)}function Mi(e,n,t,r,l,o){Id(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&Ga(n,t,!1),dn(e,n,o);r=n.stateNode,Zh.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=_t(n,e.child,null,o),n.child=_t(n,null,s,o)):de(e,n,s,o),n.memoizedState=r.state,l&&Ga(n,t,!0),n.child}function Od(e){var n=e.stateNode;n.pendingContext?Va(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Va(e,n.context,!1),Rs(e,n.containerInfo)}function au(e,n,t,r,l){return At(),Cs(l),n.flags|=256,de(e,n,t,r),n.child}var bi={dehydrated:null,treeContext:null,retryLane:0};function Ui(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ld(e,n,t){var r=n.pendingProps,l=H.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(H,l&1),e===null)return Ai(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=ho(i,r,0,null),e=Qn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Ui(t),n.memoizedState=bi,e):bs(n,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return em(e,n,i,r,s,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=_n(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=_n(s,o):(o=Qn(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Ui(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=bi,r}return o=e.child,e=o.sibling,r=_n(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function bs(e,n){return n=ho({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function al(e,n,t,r){return r!==null&&Cs(r),_t(n,e.child,null,t),e=bs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function em(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=qo(Error(T(422))),al(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=ho({mode:"visible",children:r.children},l,0,null),o=Qn(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&_t(n,e.child,null,i),n.child.memoizedState=Ui(i),n.memoizedState=bi,o);if(!(n.mode&1))return al(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(T(419)),r=qo(o,r,void 0),al(e,n,i,r)}if(s=(i&e.childLanes)!==0,xe||s){if(r=te,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,cn(e,l),Ve(r,e,l,-1))}return Ws(),r=qo(Error(T(421))),al(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=pm.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,Ne=Nn(l.nextSibling),De=n,W=!0,We=null,e!==null&&(je[Ie++]=ln,je[Ie++]=on,je[Ie++]=Yn,ln=e.id,on=e.overflow,Yn=n),n=bs(n,r.children),n.flags|=4096,n)}function uu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),_i(e.return,n,t)}function Qo(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function Md(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(de(e,n,r.children,t),r=H.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uu(e,t,n);else if(e.tag===19)uu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(H,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&$l(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Qo(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&$l(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Qo(n,!0,t,null,o);break;case"together":Qo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Sl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function dn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),et|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(T(153));if(n.child!==null){for(e=n.child,t=_n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=_n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function nm(e,n,t){switch(n.tag){case 3:Od(n),At();break;case 5:ad(n);break;case 1:ke(n.type)&&Ml(n);break;case 4:Rs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;F(Bl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?Ld(e,n,t):(F(H,H.current&1),e=dn(e,n,t),e!==null?e.sibling:null);F(H,H.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Md(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(H,H.current),r)break;return null;case 22:case 23:return n.lanes=0,jd(e,n,t)}return dn(e,n,t)}var bd,Bi,Ud,Bd;bd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Bi=function(){};Ud=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Gn(en.current);var o=null;switch(t){case"input":l=si(e,l),r=si(e,r),o=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":l=ci(e,l),r=ci(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ol)}fi(t,r);var i;t=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(o||(o=[]),o.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&z("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Bd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Jt(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function tm(e,n,t){var r=n.pendingProps;switch(Ss(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return ke(n.type)&&Ll(),se(n),null;case 3:return r=n.stateNode,jt(),$(we),$(ue),_s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(il(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,We!==null&&(Ki(We),We=null))),Bi(e,n),se(n),null;case 5:As(n);var l=Gn(Ar.current);if(t=n.type,e!==null&&n.stateNode!=null)Ud(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(T(166));return se(n),null}if(e=Gn(en.current),il(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Qe]=n,r[Dr]=o,e=(n.mode&1)!==0,t){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(l=0;l<or.length;l++)z(or[l],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":ya(r,o),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},z("invalid",r);break;case"textarea":wa(r,o),z("invalid",r)}fi(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ol(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ol(r.textContent,s,e),l=["children",""+s]):yr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&z("scroll",r)}switch(t){case"input":Xr(r),xa(r,o,!0);break;case"textarea":Xr(r),ka(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ol)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Qe]=n,e[Dr]=r,bd(e,n,!1,!1),n.stateNode=e;e:{switch(i=pi(t,r),t){case"dialog":z("cancel",e),z("close",e),l=r;break;case"iframe":case"object":case"embed":z("load",e),l=r;break;case"video":case"audio":for(l=0;l<or.length;l++)z(or[l],e);l=r;break;case"source":z("error",e),l=r;break;case"img":case"image":case"link":z("error",e),z("load",e),l=r;break;case"details":z("toggle",e),l=r;break;case"input":ya(e,r),l=si(e,r),z("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),z("invalid",e);break;case"textarea":wa(e,r),l=ci(e,r),z("invalid",e);break;default:l=r}fi(t,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?gc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&hc(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&xr(e,a):typeof a=="number"&&xr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&z("scroll",e):a!=null&&ss(e,o,a,i))}switch(t){case"input":Xr(e),xa(e,r,!1);break;case"textarea":Xr(e),ka(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kt(e,!!r.multiple,o,!1):r.defaultValue!=null&&kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ol)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Bd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(T(166));if(t=Gn(Ar.current),Gn(en.current),il(n)){if(r=n.stateNode,t=n.memoizedProps,r[Qe]=n,(o=r.nodeValue!==t)&&(e=De,e!==null))switch(e.tag){case 3:ol(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Qe]=n,n.stateNode=r}return se(n),null;case 13:if($(H),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ne!==null&&n.mode&1&&!(n.flags&128))rd(),At(),n.flags|=98560,o=!1;else if(o=il(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Qe]=n}else At(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),o=!1}else We!==null&&(Ki(We),We=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?Z===0&&(Z=3):Ws())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return jt(),Bi(e,n),e===null&&Pr(n.stateNode.containerInfo),se(n),null;case 10:return Ps(n.type._context),se(n),null;case 17:return ke(n.type)&&Ll(),se(n),null;case 19:if($(H),o=n.memoizedState,o===null)return se(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)Jt(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=$l(e),i!==null){for(n.flags|=128,Jt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(H,H.current&1|2),n.child}e=e.sibling}o.tail!==null&&Q()>Ot&&(n.flags|=128,r=!0,Jt(o,!1),n.lanes=4194304)}else{if(!r)if(e=$l(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Jt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!W)return se(n),null}else 2*Q()-o.renderingStartTime>Ot&&t!==1073741824&&(n.flags|=128,r=!0,Jt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Q(),n.sibling=null,t=H.current,F(H,r?t&1|2:t&1),n):(se(n),null);case 22:case 23:return $s(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ee&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(T(156,n.tag))}function rm(e,n){switch(Ss(n),n.tag){case 1:return ke(n.type)&&Ll(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return jt(),$(we),$(ue),_s(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return As(n),null;case 13:if($(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(T(340));At()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(H),null;case 4:return jt(),null;case 10:return Ps(n.type._context),null;case 22:case 23:return $s(),null;case 24:return null;default:return null}}var ul=!1,ae=!1,lm=typeof WeakSet=="function"?WeakSet:Set,N=null;function xt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(e,n,r)}else t.current=null}function Fi(e,n,t){try{t()}catch(r){K(e,n,r)}}var cu=!1;function om(e,n){if(Ci=_l,e=Hc(),ws(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,a=-1,u=0,d=0,f=e,h=null;n:for(;;){for(var y;f!==t||l!==0&&f.nodeType!==3||(s=i+l),f!==o||r!==0&&f.nodeType!==3||(a=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)h=f,f=y;for(;;){if(f===e)break n;if(h===t&&++u===l&&(s=i),h===o&&++d===r&&(a=i),(y=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=y}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ei={focusedElem:e,selectionRange:t},_l=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,S=v.memoizedState,m=n.stateNode,c=m.getSnapshotBeforeUpdate(n.elementType===n.type?w:ze(n.type,w),S);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(x){K(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return v=cu,cu=!1,v}function fr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Fi(n,t,o)}l=l.next}while(l!==r)}}function fo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function zi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Fd(e){var n=e.alternate;n!==null&&(e.alternate=null,Fd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[Dr],delete n[Ni],delete n[zh],delete n[$h])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zd(e){return e.tag===5||e.tag===3||e.tag===4}function du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $i(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ol));else if(r!==4&&(e=e.child,e!==null))for($i(e,n,t),e=e.sibling;e!==null;)$i(e,n,t),e=e.sibling}function Wi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wi(e,n,t),e=e.sibling;e!==null;)Wi(e,n,t),e=e.sibling}var re=null,$e=!1;function hn(e,n,t){for(t=t.child;t!==null;)$d(e,n,t),t=t.sibling}function $d(e,n,t){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(ro,t)}catch{}switch(t.tag){case 5:ae||xt(t,n);case 6:var r=re,l=$e;re=null,hn(e,n,t),re=r,$e=l,re!==null&&($e?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&($e?(e=re,t=t.stateNode,e.nodeType===8?Wo(e.parentNode,t):e.nodeType===1&&Wo(e,t),Cr(e)):Wo(re,t.stateNode));break;case 4:r=re,l=$e,re=t.stateNode.containerInfo,$e=!0,hn(e,n,t),re=r,$e=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Fi(t,n,i),l=l.next}while(l!==r)}hn(e,n,t);break;case 1:if(!ae&&(xt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){K(t,n,s)}hn(e,n,t);break;case 21:hn(e,n,t);break;case 22:t.mode&1?(ae=(r=ae)||t.memoizedState!==null,hn(e,n,t),ae=r):hn(e,n,t);break;default:hn(e,n,t)}}function fu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new lm),n.forEach(function(r){var l=hm.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Fe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,$e=!1;break e;case 3:re=s.stateNode.containerInfo,$e=!0;break e;case 4:re=s.stateNode.containerInfo,$e=!0;break e}s=s.return}if(re===null)throw Error(T(160));$d(o,i,l),re=null,$e=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){K(l,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wd(n,e),n=n.sibling}function Wd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(n,e),Ke(e),r&4){try{fr(3,e,e.return),fo(3,e)}catch(w){K(e,e.return,w)}try{fr(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:Fe(n,e),Ke(e),r&512&&t!==null&&xt(t,t.return);break;case 5:if(Fe(n,e),Ke(e),r&512&&t!==null&&xt(t,t.return),e.flags&32){var l=e.stateNode;try{xr(l,"")}catch(w){K(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&dc(l,o),pi(s,i);var u=pi(s,o);for(i=0;i<a.length;i+=2){var d=a[i],f=a[i+1];d==="style"?gc(l,f):d==="dangerouslySetInnerHTML"?hc(l,f):d==="children"?xr(l,f):ss(l,d,f,u)}switch(s){case"input":ai(l,o);break;case"textarea":fc(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?kt(l,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?kt(l,!!o.multiple,o.defaultValue,!0):kt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Dr]=o}catch(w){K(e,e.return,w)}}break;case 6:if(Fe(n,e),Ke(e),r&4){if(e.stateNode===null)throw Error(T(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(w){K(e,e.return,w)}}break;case 3:if(Fe(n,e),Ke(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Cr(n.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:Fe(n,e),Ke(e);break;case 13:Fe(n,e),Ke(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Fs=Q())),r&4&&fu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(u=ae)||d,Fe(n,e),ae=u):Fe(n,e),Ke(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(f=N=d;N!==null;){switch(h=N,y=h.child,h.tag){case 0:case 11:case 14:case 15:fr(4,h,h.return);break;case 1:xt(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(w){K(r,t,w)}}break;case 5:xt(h,h.return);break;case 22:if(h.memoizedState!==null){hu(f);continue}}y!==null?(y.return=h,N=y):hu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{l=f.stateNode,u?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,a=f.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=mc("display",i))}catch(w){K(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){K(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fe(n,e),Ke(e),r&4&&fu(e);break;case 21:break;default:Fe(n,e),Ke(e)}}function Ke(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(zd(t)){var r=t;break e}t=t.return}throw Error(T(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(xr(l,""),r.flags&=-33);var o=du(e);Wi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=du(e);$i(e,s,i);break;default:throw Error(T(161))}}catch(a){K(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function im(e,n,t){N=e,Hd(e)}function Hd(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var l=N,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||ul;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||ae;s=ul;var u=ae;if(ul=i,(ae=a)&&!u)for(N=l;N!==null;)i=N,a=i.child,i.tag===22&&i.memoizedState!==null?mu(l):a!==null?(a.return=i,N=a):mu(l);for(;o!==null;)N=o,Hd(o),o=o.sibling;N=l,ul=s,ae=u}pu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,N=o):pu(e)}}function pu(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||fo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ae)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Xa(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Xa(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Cr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ae||n.flags&512&&zi(n)}catch(h){K(n,n.return,h)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function hu(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function mu(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fo(4,n)}catch(a){K(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){K(n,l,a)}}var o=n.return;try{zi(n)}catch(a){K(n,o,a)}break;case 5:var i=n.return;try{zi(n)}catch(a){K(n,i,a)}}}catch(a){K(n,n.return,a)}if(n===e){N=null;break}var s=n.sibling;if(s!==null){s.return=n.return,N=s;break}N=n.return}}var sm=Math.ceil,Vl=pn.ReactCurrentDispatcher,Us=pn.ReactCurrentOwner,be=pn.ReactCurrentBatchConfig,O=0,te=null,X=null,le=0,Ee=0,wt=Mn(0),Z=0,Or=null,et=0,po=0,Bs=0,pr=null,ye=null,Fs=0,Ot=1/0,nn=null,Gl=!1,Hi=null,Rn=null,cl=!1,Sn=null,Kl=0,hr=0,Vi=null,Cl=-1,El=0;function he(){return O&6?Q():Cl!==-1?Cl:Cl=Q()}function An(e){return e.mode&1?O&2&&le!==0?le&-le:Hh.transition!==null?(El===0&&(El=Dc()),El):(e=M,e!==0||(e=window.event,e=e===void 0?16:Lc(e.type)),e):1}function Ve(e,n,t,r){if(50<hr)throw hr=0,Vi=null,Error(T(185));Br(e,t,r),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(po|=t),Z===4&&wn(e,le)),Se(e,r),t===1&&O===0&&!(n.mode&1)&&(Ot=Q()+500,ao&&bn()))}function Se(e,n){var t=e.callbackNode;Hp(e,n);var r=Al(e,e===te?le:0);if(r===0)t!==null&&Ea(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ea(t),n===1)e.tag===0?Wh(gu.bind(null,e)):ed(gu.bind(null,e)),Bh(function(){!(O&6)&&bn()}),t=null;else{switch(Rc(r)){case 1:t=fs;break;case 4:t=Pc;break;case 16:t=Rl;break;case 536870912:t=Nc;break;default:t=Rl}t=Yd(t,Vd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Vd(e,n){if(Cl=-1,El=0,O&6)throw Error(T(327));var t=e.callbackNode;if(Pt()&&e.callbackNode!==t)return null;var r=Al(e,e===te?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Jl(e,r);else{n=r;var l=O;O|=2;var o=Kd();(te!==e||le!==n)&&(nn=null,Ot=Q()+500,qn(e,n));do try{cm();break}catch(s){Gd(e,s)}while(!0);Ts(),Vl.current=o,O=l,X!==null?n=0:(te=null,le=0,n=Z)}if(n!==0){if(n===2&&(l=yi(e),l!==0&&(r=l,n=Gi(e,l))),n===1)throw t=Or,qn(e,0),wn(e,r),Se(e,Q()),t;if(n===6)wn(e,r);else{if(l=e.current.alternate,!(r&30)&&!am(l)&&(n=Jl(e,r),n===2&&(o=yi(e),o!==0&&(r=o,n=Gi(e,o))),n===1))throw t=Or,qn(e,0),wn(e,r),Se(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(T(345));case 2:Wn(e,ye,nn);break;case 3:if(wn(e,r),(r&130023424)===r&&(n=Fs+500-Q(),10<n)){if(Al(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Pi(Wn.bind(null,e,ye,nn),n);break}Wn(e,ye,nn);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-He(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sm(r/1960))-r,10<r){e.timeoutHandle=Pi(Wn.bind(null,e,ye,nn),r);break}Wn(e,ye,nn);break;case 5:Wn(e,ye,nn);break;default:throw Error(T(329))}}}return Se(e,Q()),e.callbackNode===t?Vd.bind(null,e):null}function Gi(e,n){var t=pr;return e.current.memoizedState.isDehydrated&&(qn(e,n).flags|=256),e=Jl(e,n),e!==2&&(n=ye,ye=t,n!==null&&Ki(n)),e}function Ki(e){ye===null?ye=e:ye.push.apply(ye,e)}function am(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Ge(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wn(e,n){for(n&=~Bs,n&=~po,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-He(n),r=1<<t;e[t]=-1,n&=~r}}function gu(e){if(O&6)throw Error(T(327));Pt();var n=Al(e,0);if(!(n&1))return Se(e,Q()),null;var t=Jl(e,n);if(e.tag!==0&&t===2){var r=yi(e);r!==0&&(n=r,t=Gi(e,r))}if(t===1)throw t=Or,qn(e,0),wn(e,n),Se(e,Q()),t;if(t===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Wn(e,ye,nn),Se(e,Q()),null}function zs(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(Ot=Q()+500,ao&&bn())}}function nt(e){Sn!==null&&Sn.tag===0&&!(O&6)&&Pt();var n=O;O|=1;var t=be.transition,r=M;try{if(be.transition=null,M=1,e)return e()}finally{M=r,be.transition=t,O=n,!(O&6)&&bn()}}function $s(){Ee=wt.current,$(wt)}function qn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Uh(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(Ss(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ll();break;case 3:jt(),$(we),$(ue),_s();break;case 5:As(r);break;case 4:jt();break;case 13:$(H);break;case 19:$(H);break;case 10:Ps(r.type._context);break;case 22:case 23:$s()}t=t.return}if(te=e,X=e=_n(e.current,null),le=Ee=n,Z=0,Or=null,Bs=po=et=0,ye=pr=null,Vn!==null){for(n=0;n<Vn.length;n++)if(t=Vn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}Vn=null}return e}function Gd(e,n){do{var t=X;try{if(Ts(),wl.current=Hl,Wl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Wl=!1}if(Zn=0,ne=Y=V=null,dr=!1,_r=0,Us.current=null,t===null||t.return===null){Z=1,Or=n,X=null;break}e:{var o=e,i=t.return,s=t,a=n;if(n=le,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=ru(i);if(y!==null){y.flags&=-257,lu(y,i,s,o,n),y.mode&1&&tu(o,u,n),n=y,a=u;var v=n.updateQueue;if(v===null){var w=new Set;w.add(a),n.updateQueue=w}else v.add(a);break e}else{if(!(n&1)){tu(o,u,n),Ws();break e}a=Error(T(426))}}else if(W&&s.mode&1){var S=ru(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),lu(S,i,s,o,n),Cs(It(a,s));break e}}o=a=It(a,s),Z!==4&&(Z=2),pr===null?pr=[o]:pr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=Rd(o,a,n);Qa(o,m);break e;case 1:s=a;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Rn===null||!Rn.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var x=Ad(o,s,n);Qa(o,x);break e}}o=o.return}while(o!==null)}qd(t)}catch(k){n=k,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function Kd(){var e=Vl.current;return Vl.current=Hl,e===null?Hl:e}function Ws(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!(et&268435455)&&!(po&268435455)||wn(te,le)}function Jl(e,n){var t=O;O|=2;var r=Kd();(te!==e||le!==n)&&(nn=null,qn(e,n));do try{um();break}catch(l){Gd(e,l)}while(!0);if(Ts(),O=t,Vl.current=r,X!==null)throw Error(T(261));return te=null,le=0,Z}function um(){for(;X!==null;)Jd(X)}function cm(){for(;X!==null&&!Lp();)Jd(X)}function Jd(e){var n=Xd(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,n===null?qd(e):X=n,Us.current=null}function qd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=rm(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(t=tm(t,n,Ee),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);Z===0&&(Z=5)}function Wn(e,n,t){var r=M,l=be.transition;try{be.transition=null,M=1,dm(e,n,t,r)}finally{be.transition=l,M=r}return null}function dm(e,n,t,r){do Pt();while(Sn!==null);if(O&6)throw Error(T(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Vp(e,o),e===te&&(X=te=null,le=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||cl||(cl=!0,Yd(Rl,function(){return Pt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=be.transition,be.transition=null;var i=M;M=1;var s=O;O|=4,Us.current=null,om(e,t),Wd(t,e),_h(Ei),_l=!!Ci,Ei=Ci=null,e.current=t,im(t),Mp(),O=s,M=i,be.transition=o}else e.current=t;if(cl&&(cl=!1,Sn=e,Kl=l),o=e.pendingLanes,o===0&&(Rn=null),Bp(t.stateNode),Se(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Gl)throw Gl=!1,e=Hi,Hi=null,e;return Kl&1&&e.tag!==0&&Pt(),o=e.pendingLanes,o&1?e===Vi?hr++:(hr=0,Vi=e):hr=0,bn(),null}function Pt(){if(Sn!==null){var e=Rc(Kl),n=be.transition,t=M;try{if(be.transition=null,M=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,Kl=0,O&6)throw Error(T(331));var l=O;for(O|=4,N=e.current;N!==null;){var o=N,i=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:fr(8,d,o)}var f=d.child;if(f!==null)f.return=d,N=f;else for(;N!==null;){d=N;var h=d.sibling,y=d.return;if(Fd(d),d===u){N=null;break}if(h!==null){h.return=y,N=h;break}N=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,N=i;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,N=m;break e}N=o.return}}var c=e.current;for(N=c;N!==null;){i=N;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,N=p;else e:for(i=c;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fo(9,s)}}catch(k){K(s,s.return,k)}if(s===i){N=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,N=x;break e}N=s.return}}if(O=l,bn(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(ro,e)}catch{}r=!0}return r}finally{M=t,be.transition=n}}return!1}function vu(e,n,t){n=It(t,n),n=Rd(e,n,1),e=Dn(e,n,1),n=he(),e!==null&&(Br(e,1,n),Se(e,n))}function K(e,n,t){if(e.tag===3)vu(e,e,t);else for(;n!==null;){if(n.tag===3){vu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))){e=It(t,e),e=Ad(n,e,1),n=Dn(n,e,1),e=he(),n!==null&&(Br(n,1,e),Se(n,e));break}}n=n.return}}function fm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(le&t)===t&&(Z===4||Z===3&&(le&130023424)===le&&500>Q()-Fs?qn(e,0):Bs|=t),Se(e,n)}function Qd(e,n){n===0&&(e.mode&1?(n=el,el<<=1,!(el&130023424)&&(el=4194304)):n=1);var t=he();e=cn(e,n),e!==null&&(Br(e,n,t),Se(e,t))}function pm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Qd(e,t)}function hm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(n),Qd(e,t)}var Xd;Xd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||we.current)xe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return xe=!1,nm(e,n,t);xe=!!(e.flags&131072)}else xe=!1,W&&n.flags&1048576&&nd(n,Ul,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Sl(e,n),e=n.pendingProps;var l=Rt(n,ue.current);Tt(n,t),l=Is(null,n,r,e,l,t);var o=Os();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ke(r)?(o=!0,Ml(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ds(n),l.updater=co,n.stateNode=l,l._reactInternals=n,Ii(n,r,e,t),n=Mi(null,n,r,!0,o,t)):(n.tag=0,W&&o&&ks(n),de(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Sl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=gm(r),e=ze(r,e),l){case 0:n=Li(null,n,r,e,t);break e;case 1:n=su(null,n,r,e,t);break e;case 11:n=ou(null,n,r,e,t);break e;case 14:n=iu(null,n,r,ze(r.type,e),t);break e}throw Error(T(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),Li(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),su(e,n,r,l,t);case 3:e:{if(Od(n),e===null)throw Error(T(387));r=n.pendingProps,o=n.memoizedState,l=o.element,sd(e,n),zl(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=It(Error(T(423)),n),n=au(e,n,r,t,l);break e}else if(r!==l){l=It(Error(T(424)),n),n=au(e,n,r,t,l);break e}else for(Ne=Nn(n.stateNode.containerInfo.firstChild),De=n,W=!0,We=null,t=od(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(At(),r===l){n=dn(e,n,t);break e}de(e,n,r,t)}n=n.child}return n;case 5:return ad(n),e===null&&Ai(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Ti(r,l)?i=null:o!==null&&Ti(r,o)&&(n.flags|=32),Id(e,n),de(e,n,i,t),n.child;case 6:return e===null&&Ai(n),null;case 13:return Ld(e,n,t);case 4:return Rs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=_t(n,null,r,t):de(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),ou(e,n,r,l,t);case 7:return de(e,n,n.pendingProps,t),n.child;case 8:return de(e,n,n.pendingProps.children,t),n.child;case 12:return de(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,F(Bl,r._currentValue),r._currentValue=i,o!==null)if(Ge(o.value,i)){if(o.children===l.children&&!we.current){n=dn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=sn(-1,t&-t),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),_i(o.return,t,n),s.lanes|=t;break}a=a.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(T(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),_i(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}de(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Tt(n,t),l=Ue(l),r=r(l),n.flags|=1,de(e,n,r,t),n.child;case 14:return r=n.type,l=ze(r,n.pendingProps),l=ze(r.type,l),iu(e,n,r,l,t);case 15:return _d(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),Sl(e,n),n.tag=1,ke(r)?(e=!0,Ml(n)):e=!1,Tt(n,t),Dd(n,r,l),Ii(n,r,l,t),Mi(null,n,r,!0,e,t);case 19:return Md(e,n,t);case 22:return jd(e,n,t)}throw Error(T(156,n.tag))};function Yd(e,n){return Tc(e,n)}function mm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,t,r){return new mm(e,n,t,r)}function Hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gm(e){if(typeof e=="function")return Hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===us)return 11;if(e===cs)return 14}return 2}function _n(e,n){var t=e.alternate;return t===null?(t=Me(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Tl(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")Hs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ct:return Qn(t.children,l,o,n);case as:i=8,l|=8;break;case ri:return e=Me(12,t,n,l|2),e.elementType=ri,e.lanes=o,e;case li:return e=Me(13,t,n,l),e.elementType=li,e.lanes=o,e;case oi:return e=Me(19,t,n,l),e.elementType=oi,e.lanes=o,e;case ac:return ho(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ic:i=10;break e;case sc:i=9;break e;case us:i=11;break e;case cs:i=14;break e;case vn:i=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return n=Me(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function Qn(e,n,t,r){return e=Me(7,e,r,n),e.lanes=t,e}function ho(e,n,t,r){return e=Me(22,e,r,n),e.elementType=ac,e.lanes=t,e.stateNode={isHidden:!1},e}function Xo(e,n,t){return e=Me(6,e,null,n),e.lanes=t,e}function Yo(e,n,t){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function vm(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jo(0),this.expirationTimes=jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Vs(e,n,t,r,l,o,i,s,a){return e=new vm(e,n,t,s,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Me(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ds(o),e}function ym(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ut,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Zd(e){if(!e)return On;e=e._reactInternals;e:{if(lt(e)!==e||e.tag!==1)throw Error(T(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(T(171))}if(e.tag===1){var t=e.type;if(ke(t))return Zc(e,t,n)}return n}function ef(e,n,t,r,l,o,i,s,a){return e=Vs(t,r,!0,e,l,o,i,s,a),e.context=Zd(null),t=e.current,r=he(),l=An(t),o=sn(r,l),o.callback=n??null,Dn(t,o,l),e.current.lanes=l,Br(e,l,r),Se(e,r),e}function mo(e,n,t,r){var l=n.current,o=he(),i=An(l);return t=Zd(t),n.context===null?n.context=t:n.pendingContext=t,n=sn(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Dn(l,n,i),e!==null&&(Ve(e,l,i,o),xl(e,l,i)),i}function ql(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Gs(e,n){yu(e,n),(e=e.alternate)&&yu(e,n)}function xm(){return null}var nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ks(e){this._internalRoot=e}go.prototype.render=Ks.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(T(409));mo(e,n,null,null)};go.prototype.unmount=Ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nt(function(){mo(null,e,null,null)}),n[un]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var n=jc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<xn.length&&n!==0&&n<xn[t].priority;t++);xn.splice(t,0,e),t===0&&Oc(e)}};function Js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xu(){}function wm(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var u=ql(i);o.call(u)}}var i=ef(n,r,e,0,null,!1,!1,"",xu);return e._reactRootContainer=i,e[un]=i.current,Pr(e.nodeType===8?e.parentNode:e),nt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=ql(a);s.call(u)}}var a=Vs(e,0,!1,null,null,!1,!1,"",xu);return e._reactRootContainer=a,e[un]=a.current,Pr(e.nodeType===8?e.parentNode:e),nt(function(){mo(n,a,t,r)}),a}function yo(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=ql(i);s.call(a)}}mo(n,i,e,l)}else i=wm(t,n,e,l,r);return ql(i)}Ac=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=lr(n.pendingLanes);t!==0&&(ps(n,t|1),Se(n,Q()),!(O&6)&&(Ot=Q()+500,bn()))}break;case 13:nt(function(){var r=cn(e,1);if(r!==null){var l=he();Ve(r,e,1,l)}}),Gs(e,1)}};hs=function(e){if(e.tag===13){var n=cn(e,134217728);if(n!==null){var t=he();Ve(n,e,134217728,t)}Gs(e,134217728)}};_c=function(e){if(e.tag===13){var n=An(e),t=cn(e,n);if(t!==null){var r=he();Ve(t,e,n,r)}Gs(e,n)}};jc=function(){return M};Ic=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};mi=function(e,n,t){switch(n){case"input":if(ai(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=so(r);if(!l)throw Error(T(90));cc(r),ai(r,l)}}}break;case"textarea":fc(e,t);break;case"select":n=t.value,n!=null&&kt(e,!!t.multiple,n,!1)}};xc=zs;wc=nt;var km={usingClientEntryPoint:!1,Events:[zr,ht,so,vc,yc,zs]},qt={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sm={bundleType:qt.bundleType,version:qt.version,rendererPackageName:qt.rendererPackageName,rendererConfig:qt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cc(e),e===null?null:e.stateNode},findFiberByHostInstance:qt.findFiberByHostInstance||xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{ro=dl.inject(Sm),Ze=dl}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Js(n))throw Error(T(200));return ym(e,n,null,t)};Ae.createRoot=function(e,n){if(!Js(e))throw Error(T(299));var t=!1,r="",l=nf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Vs(e,1,!1,null,null,t,!1,r,l),e[un]=n.current,Pr(e.nodeType===8?e.parentNode:e),new Ks(n)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Cc(n),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return nt(e)};Ae.hydrate=function(e,n,t){if(!vo(n))throw Error(T(200));return yo(null,e,n,!0,t)};Ae.hydrateRoot=function(e,n,t){if(!Js(e))throw Error(T(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=nf;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=ef(n,null,e,1,t??null,l,!1,o,i),e[un]=n.current,Pr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new go(n)};Ae.render=function(e,n,t){if(!vo(n))throw Error(T(200));return yo(null,e,n,!1,t)};Ae.unmountComponentAtNode=function(e){if(!vo(e))throw Error(T(40));return e._reactRootContainer?(nt(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Ae.unstable_batchedUpdates=zs;Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!vo(t))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return yo(e,n,t,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function tf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tf)}catch(e){console.error(e)}}tf(),tc.exports=Ae;var Cm=tc.exports,rf,wu=Cm;rf=wu.createRoot,wu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lr(){return Lr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Lr.apply(null,arguments)}var Cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cn||(Cn={}));const ku="popstate";function Em(e){e===void 0&&(e={});function n(l,o){let{pathname:i="/",search:s="",hash:a=""}=ot(l.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Ji("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(l,o){let i=l.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let a=l.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof o=="string"?o:Ql(o))}function r(l,o){qs(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Pm(n,t,r,e)}function J(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function qs(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Tm(){return Math.random().toString(36).substr(2,8)}function Su(e,n){return{usr:e.state,key:e.key,idx:n}}function Ji(e,n,t,r){return t===void 0&&(t=null),Lr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ot(n):n,{state:t,key:n&&n.key||r||Tm()})}function Ql(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function ot(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Pm(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,s=Cn.Pop,a=null,u=d();u==null&&(u=0,i.replaceState(Lr({},i.state,{idx:u}),""));function d(){return(i.state||{idx:null}).idx}function f(){s=Cn.Pop;let S=d(),m=S==null?null:S-u;u=S,a&&a({action:s,location:w.location,delta:m})}function h(S,m){s=Cn.Push;let c=Ji(w.location,S,m);t&&t(c,S),u=d()+1;let p=Su(c,u),x=w.createHref(c);try{i.pushState(p,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(x)}o&&a&&a({action:s,location:w.location,delta:1})}function y(S,m){s=Cn.Replace;let c=Ji(w.location,S,m);t&&t(c,S),u=d();let p=Su(c,u),x=w.createHref(c);i.replaceState(p,"",x),o&&a&&a({action:s,location:w.location,delta:0})}function v(S){let m=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof S=="string"?S:Ql(S);return c=c.replace(/ $/,"%20"),J(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let w={get action(){return s},get location(){return e(l,i)},listen(S){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(ku,f),a=S,()=>{l.removeEventListener(ku,f),a=null}},createHref(S){return n(l,S)},createURL:v,encodeLocation(S){let m=v(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:y,go(S){return i.go(S)}};return w}var Cu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cu||(Cu={}));function Nm(e,n,t){return t===void 0&&(t="/"),Dm(e,n,t)}function Dm(e,n,t,r){let l=typeof n=="string"?ot(n):n,o=Lt(l.pathname||"/",t);if(o==null)return null;let i=lf(e);Rm(i);let s=null,a=Fm(o);for(let u=0;s==null&&u<i.length;++u)s=Um(i[u],a);return s}function lf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(o,i,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(J(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=jn([r,a.relativePath]),d=t.concat(a);o.children&&o.children.length>0&&(J(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lf(o.children,n,d,u)),!(o.path==null&&!o.index)&&n.push({path:u,score:Mm(u,o.index),routesMeta:d})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))l(o,i);else for(let a of of(o.path))l(o,i,a)}),n}function of(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=of(r.join("/")),s=[];return s.push(...i.map(a=>a===""?o:[o,a].join("/"))),l&&s.push(...i),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Rm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:bm(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Am=/^:[\w-]+$/,_m=3,jm=2,Im=1,Om=10,Lm=-2,Eu=e=>e==="*";function Mm(e,n){let t=e.split("/"),r=t.length;return t.some(Eu)&&(r+=Lm),n&&(r+=jm),t.filter(l=>!Eu(l)).reduce((l,o)=>l+(Am.test(o)?_m:o===""?Im:Om),r)}function bm(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function Um(e,n,t){let{routesMeta:r}=e,l={},o="/",i=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=o==="/"?n:n.slice(o.length)||"/",f=qi({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),h=a.route;if(!f)return null;Object.assign(l,f.params),i.push({params:l,pathname:jn([o,f.pathname]),pathnameBase:Wm(jn([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=jn([o,f.pathnameBase]))}return i}function qi(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Bm(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:y}=d;if(h==="*"){let w=s[f]||"";i=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=s[f];return y&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function Bm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),qs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function Fm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return qs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Lt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function zm(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?ot(e):e,o;return t?(t=uf(t),t.startsWith("/")?o=Tu(t.substring(1),"/"):o=Tu(t,n)):o=n,{pathname:o,search:Hm(r),hash:Vm(l)}}function Tu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function Zo(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $m(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function sf(e,n){let t=$m(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function af(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=ot(e):(l=Lr({},e),J(!l.pathname||!l.pathname.includes("?"),Zo("?","pathname","search",l)),J(!l.pathname||!l.pathname.includes("#"),Zo("#","pathname","hash",l)),J(!l.search||!l.search.includes("#"),Zo("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,s;if(i==null)s=t;else{let f=n.length-1;if(!r&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),f-=1;l.pathname=h.join("/")}s=f>=0?n[f]:"/"}let a=zm(l,s),u=i&&i!=="/"&&i.endsWith("/"),d=(o||i===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const uf=e=>e.replace(/\/\/+/g,"/"),jn=e=>uf(e.join("/")),Wm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Hm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Gm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cf=["post","put","patch","delete"];new Set(cf);const Km=["get",...cf];new Set(Km);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Mr.apply(null,arguments)}const xo=C.createContext(null),df=C.createContext(null),Un=C.createContext(null),wo=C.createContext(null),Bn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),ff=C.createContext(null);function Jm(e,n){let{relative:t}=n===void 0?{}:n;Wr()||J(!1);let{basename:r,navigator:l}=C.useContext(Un),{hash:o,pathname:i,search:s}=ko(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:jn([r,i])),l.createHref({pathname:a,search:s,hash:o})}function Wr(){return C.useContext(wo)!=null}function Hr(){return Wr()||J(!1),C.useContext(wo).location}function pf(e){C.useContext(Un).static||C.useLayoutEffect(e)}function qm(){let{isDataRoute:e}=C.useContext(Bn);return e?ag():Qm()}function Qm(){Wr()||J(!1);let e=C.useContext(xo),{basename:n,future:t,navigator:r}=C.useContext(Un),{matches:l}=C.useContext(Bn),{pathname:o}=Hr(),i=JSON.stringify(sf(l,t.v7_relativeSplatPath)),s=C.useRef(!1);return pf(()=>{s.current=!0}),C.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=af(u,JSON.parse(i),o,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:jn([n,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[n,r,i,o,e])}function Qs(){let{matches:e}=C.useContext(Bn),n=e[e.length-1];return n?n.params:{}}function ko(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=C.useContext(Un),{matches:l}=C.useContext(Bn),{pathname:o}=Hr(),i=JSON.stringify(sf(l,r.v7_relativeSplatPath));return C.useMemo(()=>af(e,JSON.parse(i),o,t==="path"),[e,i,o,t])}function Xm(e,n){return Ym(e,n)}function Ym(e,n,t,r){Wr()||J(!1);let{navigator:l}=C.useContext(Un),{matches:o}=C.useContext(Bn),i=o[o.length-1],s=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let u=Hr(),d;if(n){var f;let S=typeof n=="string"?ot(n):n;a==="/"||(f=S.pathname)!=null&&f.startsWith(a)||J(!1),d=S}else d=u;let h=d.pathname||"/",y=h;if(a!=="/"){let S=a.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=Nm(e,{pathname:y}),w=rg(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:jn([a,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:jn([a,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,t,r);return n&&w?C.createElement(wo.Provider,{value:{location:Mr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Cn.Pop}},w):w}function Zm(){let e=sg(),n=Gm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},n),t?C.createElement("pre",{style:l},t):null,null)}const eg=C.createElement(Zm,null);class ng extends C.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?C.createElement(Bn.Provider,{value:this.props.routeContext},C.createElement(ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tg(e){let{routeContext:n,match:t,children:r}=e,l=C.useContext(xo);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(Bn.Provider,{value:n},r)}function rg(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,s=(l=t)==null?void 0:l.errors;if(s!=null){let d=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||J(!1),i=i.slice(0,Math.min(i.length,d+1))}let a=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:y}=t,v=f.route.loader&&h[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||v){a=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((d,f,h)=>{let y,v=!1,w=null,S=null;t&&(y=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||eg,a&&(u<0&&h===0?(ug("route-fallback"),v=!0,S=null):u===h&&(v=!0,S=f.route.hydrateFallbackElement||null)));let m=n.concat(i.slice(0,h+1)),c=()=>{let p;return y?p=w:v?p=S:f.route.Component?p=C.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,C.createElement(tg,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:t!=null},children:p})};return t&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?C.createElement(ng,{location:t.location,revalidation:t.revalidation,component:w,error:y,children:c(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):c()},null)}var hf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hf||{}),mf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mf||{});function lg(e){let n=C.useContext(xo);return n||J(!1),n}function og(e){let n=C.useContext(df);return n||J(!1),n}function ig(e){let n=C.useContext(Bn);return n||J(!1),n}function gf(e){let n=ig(),t=n.matches[n.matches.length-1];return t.route.id||J(!1),t.route.id}function sg(){var e;let n=C.useContext(ff),t=og(),r=gf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function ag(){let{router:e}=lg(hf.UseNavigateStable),n=gf(mf.UseNavigateStable),t=C.useRef(!1);return pf(()=>{t.current=!0}),C.useCallback(function(l,o){o===void 0&&(o={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Mr({fromRouteId:n},o)))},[e,n])}const Pu={};function ug(e,n,t){Pu[e]||(Pu[e]=!0)}function cg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Je(e){J(!1)}function dg(e){let{basename:n="/",children:t=null,location:r,navigationType:l=Cn.Pop,navigator:o,static:i=!1,future:s}=e;Wr()&&J(!1);let a=n.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:a,navigator:o,static:i,future:Mr({v7_relativeSplatPath:!1},s)}),[a,s,o,i]);typeof r=="string"&&(r=ot(r));let{pathname:d="/",search:f="",hash:h="",state:y=null,key:v="default"}=r,w=C.useMemo(()=>{let S=Lt(d,a);return S==null?null:{location:{pathname:S,search:f,hash:h,state:y,key:v},navigationType:l}},[a,d,f,h,y,v,l]);return w==null?null:C.createElement(Un.Provider,{value:u},C.createElement(wo.Provider,{children:t,value:w}))}function fg(e){let{children:n,location:t}=e;return Xm(Qi(n),t)}new Promise(()=>{});function Qi(e,n){n===void 0&&(n=[]);let t=[];return C.Children.forEach(e,(r,l)=>{if(!C.isValidElement(r))return;let o=[...n,l];if(r.type===C.Fragment){t.push.apply(t,Qi(r.props.children,o));return}r.type!==Je&&J(!1),!r.props.index||!r.props.children||J(!1);let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Qi(r.props.children,o)),t.push(i)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Xl.apply(null,arguments)}function vf(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function pg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hg(e,n){return e.button===0&&(!n||n==="_self")&&!pg(e)}const mg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gg=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],vg="6";try{window.__reactRouterVersion=vg}catch{}const yg=C.createContext({isTransitioning:!1}),xg="startTransition",Nu=fp[xg];function wg(e){let{basename:n,children:t,future:r,window:l}=e,o=C.useRef();o.current==null&&(o.current=Em({window:l,v5Compat:!0}));let i=o.current,[s,a]=C.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},d=C.useCallback(f=>{u&&Nu?Nu(()=>a(f)):a(f)},[a,u]);return C.useLayoutEffect(()=>i.listen(d),[i,d]),C.useEffect(()=>cg(r),[r]),C.createElement(dg,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:i,future:r})}const kg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,me=C.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:s,target:a,to:u,preventScrollReset:d,viewTransition:f}=n,h=vf(n,mg),{basename:y}=C.useContext(Un),v,w=!1;if(typeof u=="string"&&Sg.test(u)&&(v=u,kg))try{let p=new URL(window.location.href),x=u.startsWith("//")?new URL(p.protocol+u):new URL(u),k=Lt(x.pathname,y);x.origin===p.origin&&k!=null?u=k+x.search+x.hash:w=!0}catch{}let S=Jm(u,{relative:l}),m=Tg(u,{replace:i,state:s,target:a,preventScrollReset:d,relative:l,viewTransition:f});function c(p){r&&r(p),p.defaultPrevented||m(p)}return C.createElement("a",Xl({},h,{href:v||S,onClick:w||o?r:c,ref:t,target:a}))}),Cg=C.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:l=!1,className:o="",end:i=!1,style:s,to:a,viewTransition:u,children:d}=n,f=vf(n,gg),h=ko(a,{relative:f.relative}),y=Hr(),v=C.useContext(df),{navigator:w,basename:S}=C.useContext(Un),m=v!=null&&Pg(h)&&u===!0,c=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,p=y.pathname,x=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(p=p.toLowerCase(),x=x?x.toLowerCase():null,c=c.toLowerCase()),x&&S&&(x=Lt(x,S)||x);const k=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let E=p===c||!i&&p.startsWith(c)&&p.charAt(k)==="/",P=x!=null&&(x===c||!i&&x.startsWith(c)&&x.charAt(c.length)==="/"),R={isActive:E,isPending:P,isTransitioning:m},U=E?r:void 0,A;typeof o=="function"?A=o(R):A=[o,E?"active":null,P?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let ce=typeof s=="function"?s(R):s;return C.createElement(me,Xl({},f,{"aria-current":U,className:A,ref:t,style:ce,to:a,viewTransition:u}),typeof d=="function"?d(R):d)});var Xi;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xi||(Xi={}));var Du;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Du||(Du={}));function Eg(e){let n=C.useContext(xo);return n||J(!1),n}function Tg(e,n){let{target:t,replace:r,state:l,preventScrollReset:o,relative:i,viewTransition:s}=n===void 0?{}:n,a=qm(),u=Hr(),d=ko(e,{relative:i});return C.useCallback(f=>{if(hg(f,t)){f.preventDefault();let h=r!==void 0?r:Ql(u)===Ql(d);a(e,{replace:h,state:l,preventScrollReset:o,relative:i,viewTransition:s})}},[u,a,d,r,l,t,e,o,i,s])}function Pg(e,n){n===void 0&&(n={});let t=C.useContext(yg);t==null&&J(!1);let{basename:r}=Eg(Xi.useViewTransitionState),l=ko(e,{relative:n.relative});if(!t.isTransitioning)return!1;let o=Lt(t.currentLocation.pathname,r)||t.currentLocation.pathname,i=Lt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return qi(l.pathname,i)!=null||qi(l.pathname,o)!=null}const yf="theme";function Ng(){try{const e=localStorage.getItem(yf);return e==="light"||e==="dark"?e:null}catch{return null}}function Dg(e){try{localStorage.setItem(yf,e)}catch{}}function Rg(e){return e??"dark"}function Ag(e){document.documentElement.classList.toggle("dark",e==="dark")}const _g=[{to:"/",label:"Home",end:!0},{to:"/projects",label:"Projects",end:!1},{to:"/blog",label:"Blog",end:!1},{to:"/tools",label:"Tools",end:!1},{to:"/about",label:"About",end:!1},{to:"/write",label:"Write",end:!1}];function jg(){const[e,n]=C.useState(()=>Rg(Ng()));C.useEffect(()=>{Ag(e)},[e]);function t(){const r=e==="dark"?"light":"dark";n(r),Dg(r)}return g.jsx("nav",{className:"sticky top-0 z-50 border-b border-border bg-background font-mono text-sm",children:g.jsxs("div",{className:"flex w-full flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 md:px-12",children:[g.jsx(me,{to:"/",className:"mr-2 font-bold text-accent",children:"~/shinheeyoun"}),_g.map(r=>g.jsx(Cg,{to:r.to,end:r.end,className:({isActive:l})=>l?"text-accent":"text-muted transition-colors hover:text-foreground",children:({isActive:l})=>g.jsxs(g.Fragment,{children:[g.jsx("span",{className:l?"":"invisible","aria-hidden":"true",children:">"})," ",r.label]})},r.to)),g.jsx("button",{type:"button",onClick:t,"aria-label":"테마 전환",className:"ml-auto rounded-md border border-border px-2 py-1 text-sm hover:border-accent",children:e==="dark"?"🌙":"☀️"})]})})}function Ig(){return g.jsxs("section",{className:"py-10 font-mono",children:[g.jsx("p",{className:"text-sm text-muted",children:"$ whoami"}),g.jsxs("h1",{className:"mt-2 text-4xl font-bold md:text-5xl",children:["ShinHeeYoun",g.jsx("span",{className:"cursor-blink text-accent","aria-hidden":"true",children:"_"})]}),g.jsx("p",{className:"mt-3 text-lg text-foreground/90",children:"개발 연습 페이지"}),g.jsx("p",{className:"mt-2 max-w-xl font-sans text-muted",children:"github homepage with Claude"}),g.jsxs("div",{className:"mt-6 flex flex-wrap gap-3 text-sm",children:[g.jsx(me,{to:"/projects",className:"rounded border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-background",children:"view projects"}),g.jsx(me,{to:"/blog",className:"rounded border border-border px-4 py-2 text-muted transition-colors hover:border-accent hover:text-accent",children:"read blog"})]})]})}function xf({project:e}){return g.jsx(me,{to:`/projects/${e.id}`,className:"block",children:g.jsxs("article",{className:"card",children:[g.jsx("h3",{className:"card-title",children:e.title}),g.jsx("p",{className:"mt-2 text-foreground/80",children:e.summary}),g.jsx("ul",{className:"mt-3 flex flex-wrap gap-2",children:e.tags.map(n=>g.jsx("li",{className:"tag",children:n},n))})]})})}const Xs=[{id:"terminal-theme",title:"터미널 테마 디자인",summary:"색상 토큰 한 곳만 바꿔 사이트 전체의 분위기를 바꾸는 다크 터미널 디자인.",tags:["Tailwind","CSS 변수","다크모드"],overview:"사이트의 색은 컴포넌트마다 정해 두지 않고 background, accent 같은 의미 기반 토큰(CSS 변수)으로 정의해 둡니다. 그래서 index.css의 토큰 값 몇 줄만 바꾸면 대부분의 페이지 색이 한 번에 바뀝니다.",points:["다크 터미널이 기본값이고, 헤더의 토글로 크림색 라이트 테마로 바꿀 수 있습니다. 선택은 브라우저(localStorage)에 저장됩니다.","저장된 값이 없으면 항상 다크로 시작합니다. 화면이 그려지기 전에 index.html의 작은 스크립트가 테마를 먼저 적용해서 깜빡임이 없습니다.","제목과 메뉴는 모노스페이스 글꼴을 쓰고, 카드와 태그는 공용 CSS 클래스로 모양을 통일했습니다.",'히어로의 깜빡이는 커서는 "모션 줄이기" 설정을 켜 둔 사용자에게는 멈춥니다.']},{id:"blog-editor",title:"블로그와 브라우저 글쓰기",summary:"글은 마크다운 파일로 저장되고, 글쓰기 페이지에서 바로 작성·수정·삭제할 수 있습니다.",tags:["Markdown","GitHub API","React"],overview:"글 하나는 src/content/posts 폴더의 마크다운 파일 하나입니다. 빌드할 때 모든 글을 읽어 목록과 상세 페이지를 만들고, Write 페이지에서 쓴 글은 GitHub API로 저장소에 직접 커밋됩니다. 별도 서버나 데이터베이스는 없습니다.",points:["각 파일은 제목과 날짜를 담은 머리말(frontmatter)과 본문으로 구성됩니다. 본문은 marked 라이브러리로 HTML로 바꿔 보여줍니다.","글 주소는 날짜와 임의 문자열(예: 2026-09-23-gzblai)로 만듭니다. 제목이 한글이어도 주소가 깨지지 않게 하려는 선택입니다.","Write 페이지는 GitHub 개인 액세스 토큰(PAT)을 브라우저에 저장해 두고 GitHub Contents API를 호출합니다. 토큰은 api.github.com 요청에만 쓰입니다.","글을 올리면 커밋이 생기고, 그 커밋이 자동 배포를 일으켜 1분 안팎에 사이트에 반영됩니다.","수정과 삭제는 파일의 현재 sha 값을 먼저 조회한 뒤 요청합니다. GitHub API가 요구하는 방식입니다."]},{id:"calculator-tool",title:"도구 실행: 계산기",summary:"계산 로직(컨트롤러)과 화면(뷰)을 나눠 만든 버튼식 계산기와 단위 테스트.",tags:["React","Vitest","TypeScript"],overview:"Tools 페이지의 계산기는 로직과 화면이 분리되어 있습니다. 로직은 React를 전혀 모르는 순수 함수(리듀서)이고, 화면은 그 함수를 useReducer로 연결해 버튼을 그릴 뿐입니다.",points:["컨트롤러(controller.ts)는 현재 상태와 동작(숫자, 소수점, 연산자, =, 지우기)을 받아 새 상태를 돌려주는 함수입니다. 화면 없이도 테스트할 수 있습니다.","Vitest 단위 테스트가 사칙연산, 0으로 나누기, 연이은 계산 등을 확인합니다.","연산자 우선순위는 구현하지 않았습니다. 누른 순서대로 계산하므로 2 + 3 × 4 는 20입니다. 간단한 계산기의 방식입니다.","도구 목록과 화면 연결을 타입으로 묶어 두어서, 도구를 추가할 때 한쪽을 빠뜨리면 빌드가 실패합니다."]},{id:"dino-game",title:"도구 실행: 공룡 점프 게임",summary:"키 입력과 게임 로직이 로그로 흐르는 공룡 게임. 새와 나무, 불덩이, 낮밤 전환, 별똥별까지 있습니다.",tags:["React","Canvas","Vitest"],overview:"공룡 게임도 계산기처럼 로직과 화면이 나뉘어 있습니다. controller.ts는 React도 캔버스도 모르는 순수 함수(step, onKey)이고, DinoView.tsx가 매 프레임 그 함수를 호출해 캔버스에 그립니다. 공룡, 선인장, 새, 구름, 땅은 크롬 오프라인 게임의 스프라이트 시트(Chromium 프로젝트, BSD 3-Clause)에서 필요한 조각만 잘라 쓰고, 나무와 불덩이와 하늘은 코드로 직접 그립니다. 게임 아래 터미널 창에는 입력이 처리될 때 실행된 로직 한 줄이 실제 값과 함께 올라옵니다.",points:["↑는 점프, ↓는 누르고 있는 동안 숙이기, Space는 불덩이, ←와 →는 속도를 1씩 줄이거나 늘립니다(4~14). 점프는 방향키 전용이고, 땅에 있을 때만 뛰므로 이단 점프는 없습니다. ↓를 떼는 순간을 알아야 해서 keyup도 처리합니다.","선인장은 점프로, 새는 숙여서, 나무는 불덩이로만 지나갈 수 있습니다. 새는 머리 높이로 날아와서 서 있으면 부딪히고 숙이면 아래로 지나갑니다. 나무는 땅에서 화면 끝까지 닿아 점프로도 숙이기로도 못 피합니다. 불덩이는 0.5초마다 한 번 쏠 수 있고 나무만 태웁니다. 새는 100m부터, 나무는 200m부터 나옵니다.","30초마다 하늘이 4초에 걸쳐 낮과 밤으로 바뀝니다. 해와 달이 각자의 호를 따라 움직여서 해가 오른쪽으로 지는 동안 달이 왼쪽에서 뜹니다. 하늘이 중간 회색일 때 스프라이트와 글자도 같은 회색이 되어 사라지므로, 그 색들은 하늘보다 빠르게 바뀝니다. 밤에는 평균 10초에 한 번쯤 별똥별이 떨어집니다.",'점수는 미터입니다(40px가 1m). 100m마다 화면이 번쩍이고 커진 "100 m" 글자와 스파크가 나옵니다.',"땅과 구름과 선인장이 모두 같은 이동 거리 값에서 나옵니다. 속도를 바꾸면 배경과 장애물이 함께 빨라지거나 느려지고, 구름은 땅의 0.3배로 움직여 멀리 있는 느낌을 줍니다.","게임 로직은 화면 주사율과 상관없이 초당 60번(고정 간격)만 진행합니다. 처음에는 화면이 그려질 때마다 한 칸씩 진행해서, 144Hz 모니터에서는 게임이 두 배 넘게 빠르고 다리 모션이 겹쳐 보이는 버그가 있었습니다. 지금은 어떤 주사율에서도 같은 속도로 달리고, 다리는 초당 4번 바뀝니다.","스프라이트 시트는 회색 한 가지 색이라, 작은 임시 캔버스에서 조각마다 하늘에 맞는 색으로 다시 칠해 씁니다. 달리는 자세의 칸은 배경이 투명이 아니라 흰색이라, 흰색에 가까운 픽셀을 먼저 투명하게 바꾼 뒤 칠합니다. 그러지 않으면 앞발 앞의 틈까지 같은 색으로 메워져 공룡이 뭉툭한 덩어리가 됩니다.",'큰 선인장(50px)은 속도가 너무 느리면 점프로 넘을 수 없어서 최소 속도를 4로 정했습니다. "모든 속도에서 모든 장애물을 여유 있게 넘을 수 있다"를 테스트로 만들어 이 값을 확인했습니다.',"로그는 매 프레임이 아니라 이벤트(키 입력, 착지, 불덩이, 나무가 탐, 100m 도달, 해와 달의 교체, 별똥별, 충돌)가 있을 때만 남기고 최근 60줄만 보관합니다. 로직 옆에서 로그 한 줄을 함께 만들어 돌려주는 방식이라 소스가 단순합니다.","최고 기록(미터)은 localStorage에 저장돼 새로고침해도 남습니다. 서버가 없어서 방문자끼리 공유되지는 않고, 이 브라우저에만 기록됩니다. 점수를 미터로 바꾸면서 예전 기록은 단위가 달라 새 키로 옮기지 않았습니다.","게임 화면을 클릭해 포커스를 줘야 키 입력을 받고, 그때만 Space와 방향키의 스크롤 동작을 막습니다. 포커스가 빠지면 일시정지하고, 놓친 keyup 때문에 숙인 채로 굳지 않게 숙이기도 풉니다.","Vitest 단위 테스트가 점프, 숙이기, 불덩이와 쿨다운, 새와 나무와 선인장의 충돌 규칙, 장애물이 나오는 거리, 100m 도달, 낮밤 전환 시각, 별똥별, 게임오버 후 정지, 로그 출력을 확인합니다. 나무가 어떤 속도와 타이밍에도 점프로 못 넘는다는 것과, 한 번의 불덩이로 어떤 속도에서도 치울 수 있다는 것도 테스트합니다."]},{id:"deploy-pipeline",title:"자동 배포 파이프라인",summary:"main에 push하면 테스트, 빌드, 배포가 자동으로 실행되어 GitHub Pages에 반영됩니다.",tags:["GitHub Actions","GitHub Pages","CI"],overview:"이 사이트는 정적 파일만 올리는 GitHub Pages에서 동작합니다. main 브랜치에 변경이 올라오면 GitHub Actions가 의존성 설치, 테스트, 빌드를 차례로 실행하고 결과물을 gh-pages 브랜치에 게시합니다.",points:["테스트가 하나라도 실패하면 빌드와 배포까지 가지 않습니다.","서버가 없어서 페이지 이동에는 HashRouter를 씁니다. 주소가 /#/blog처럼 #을 포함하지만, 어느 페이지에서 새로고침해도 404가 나지 않습니다.","짧은 시간에 여러 번 push해도 배포가 꼬이지 않도록 concurrency 설정으로 이전 실행을 취소합니다.","게시되는 것은 Vite가 만든 HTML, CSS, JS 파일뿐입니다. 글쓰기 기능도 이 정적 사이트 안에서 브라우저가 GitHub API를 직접 호출하는 방식으로 동작합니다."]},{id:"claude-workflow",title:"Claude와 만드는 개발 방식",summary:"아이디어를 설계, 계획, 구현, 리뷰 순서로 쪼개서 Claude와 함께 만들었습니다.",tags:["Claude Code","워크플로","코드 리뷰"],overview:"이 사이트의 기능은 한 번에 만들어진 것이 아니라 단계마다 같은 순서로 만들어졌습니다. 무엇을 만들지 질문으로 정리하고(설계), 작업을 작은 단위로 나누고(계획), 단위마다 구현한 뒤 따로 검토했습니다.",points:["먼저 Claude가 질문을 하나씩 던져 범위와 선택지를 정하고, 합의한 내용을 설계 문서로 남깁니다.","설계를 바탕으로 작업 계획을 세우고, 작업마다 구현 담당과 별도의 검토 담당이 맡아 서로의 결과를 확인합니다.","마지막에 전체 변경을 한 번 더 검토합니다. 검증과 최종 검토 단계에서 실제 문제가 발견됐습니다. 예를 들어 윈도우의 줄바꿈(CRLF) 때문에 글을 읽어 오는 단계에서 오류가 나던 버그, 포인트 색을 바꾼 뒤 버튼 글씨가 거의 안 보이게 된 문제입니다.","배포나 push처럼 되돌리기 어려운 작업은 그때마다 사람에게 확인을 받고 진행했습니다."]}];function Og(){return g.jsxs("section",{children:[g.jsxs("div",{className:"flex items-baseline justify-between",children:[g.jsx("h2",{className:"text-xl font-semibold",children:"주요 구성"}),g.jsx(me,{to:"/projects",className:"font-mono text-sm text-accent hover:text-accent-hover",children:"전체 보기 →"})]}),g.jsx("div",{className:"mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:Xs.slice(0,3).map(e=>g.jsx(xf,{project:e},e.id))})]})}const Lg=`---
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

`,Mg=`---
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

`,bg='---\ntitle: Tomcat 10 (Jakarta EE) 라이브러리 마이그레이션 도구 설명서\ndate: 2026-10-06\n---\n# Tomcat 10 (Jakarta EE) 라이브러리 마이그레이션 도구 설명서\n\n## 1. 개요\n\n### 1.1 목적\nTomcat 9 이하 환경에서 사용하던 `javax.*` 기반 라이브러리(jar)를 Tomcat 10 이상에서 사용하는 `jakarta.*` 기반으로 변환한다. 이 문서는 변환 도구의 사용 방법과 동작 방식, 그리고 변환 결과를 Tomcat 10에 적용하고 설치 상태를 확인하는 절차까지 정리한다.\n\n### 1.2 변환이 필요한 이유\nTomcat 10부터 Java EE가 Jakarta EE로 이전되면서 패키지 이름이 `javax.servlet.*` 에서 `jakarta.servlet.*` 로 바뀌었다. 기존 jar가 `javax.*` 를 참조하면 Tomcat 10에서 `ClassNotFoundException`, `NoClassDefFoundError` 가 발생한다.\n\n### 1.3 문서 범위\n| 구분 | 내용 | 도구가 수행하는지 |\n|---|---|---|\n| 계정 준비 | Tomcat 실행/작업용 계정 생성 | 아니오 (수동) |\n| 환경 준비 | Java 설치 확인 | 아니오 (수동) |\n| 라이브러리 변환 | jar 내부 `javax` 를 `jakarta` 로 변환 | 예 |\n| 결과 확인 | 로그 및 파일 점검 | 부분 (로그 생성) |\n| Tomcat 반영 | 변환된 jar 배포 | 아니오 (수동) |\n| 설치 확인 | Tomcat 버전 및 기동 확인 | 아니오 (수동) |\n\n계정 생성, Java 확인, Tomcat 반영과 설치 확인은 아래 도구에 포함되어 있지 않으며, 이 문서에서 절차만 안내한다.\n\n---\n\n## 2. 구성 파일\n\n작업 폴더: `D:\\storageD\\110_2) TOMCAT_10 MIGRATION 방법\\`\n\n| 파일 | 역할 |\n|---|---|\n| `Run_Migration_Tool.bat` | 실행 진입점. PowerShell 스크립트를 호출한다. |\n| `Tomcat_Migration_Tool.ps1` | 폴더 선택과 실행 버튼을 제공하는 GUI. 변환 jar를 호출한다. |\n| `jakartaee-migration-1.0.12-shaded.jar` | 실제 변환을 수행하는 Apache Tomcat Migration Tool for Jakarta EE (1.0.12). 의존 라이브러리가 하나로 묶인(shaded) 실행 가능 jar. |\n| `lib_beforeMig\\` | (예시) 변환 전 라이브러리 폴더 |\n| `lib_migrated\\` | (예시) 변환 후 라이브러리 폴더. `migration_log.txt` 가 함께 생성된다. |\n\n세 파일(`.bat`, `.ps1`, `.jar`)은 반드시 같은 폴더에 있어야 한다.\n\n---\n\n## 3. 사용방법\n\n### 3.1 계정 준비\n1. Tomcat을 실행하고 변환 작업을 수행할 전용 계정을 생성한다. 관리자 권한이 필요 없는 일반 계정을 권장한다.\n2. 해당 계정에 다음 권한을 부여한다.\n   - 작업 폴더(`D:\\storageD\\110_2) TOMCAT_10 MIGRATION 방법\\`): 읽기, 쓰기\n   - Tomcat 설치 폴더: 읽기, 실행 (배포 시 `webapps` 또는 `WEB-INF\\lib` 쓰기)\n3. 생성한 계정으로 로그인한다.\n\n### 3.2 Java 설치 확인\n변환 도구는 `java` 명령을 PATH에서 찾아 실행한다.\n\n1. 명령 프롬프트를 열고 다음을 실행한다.\n\n   ```\n   java -version\n   ```\n\n2. 버전이 출력되면 정상이다. 명령을 찾을 수 없다는 메시지가 나오면 JDK/JRE를 설치하고 `JAVA_HOME` 및 PATH를 설정한다.\n3. 변환 도구는 Java 8 이상에서 동작한다. 배포 대상이 Tomcat 10.1 이면 Java 11 이상이 필요하다.\n\n### 3.3 변환 대상 준비\n1. 변환할 jar 파일들을 하나의 폴더에 모은다. (예: `lib_beforeMig`)\n2. 원본 폴더는 변환 중 수정되지 않지만, 안전을 위해 별도로 백업해 둔다.\n3. 출력 폴더는 원본과 다른 경로로 정한다. (예: `lib_migrated`) 존재하지 않으면 자동 생성된다.\n\n### 3.4 도구 실행\n1. `Run_Migration_Tool.bat` 를 더블클릭한다.\n2. "Tomcat 10 (Jakarta EE) Migration Tool" 창이 열린다.\n3. `Source Lib Directory` 의 `Browse...` 를 눌러 변환 전 폴더를 선택한다.\n4. `Destination Directory` 의 `Browse...` 를 눌러 출력 폴더를 선택한다.\n5. `Run Migration` 버튼을 누른다.\n6. 처리 중에는 버튼이 비활성화된다. 완료되면 완료 메시지 창이 표시되고, 상태 창에 로그가 출력된다.\n\n### 3.5 결과 확인\n1. 출력 폴더의 `migration_log.txt` 를 연다.\n2. 마지막 줄이 `Migration completed successfully in [...] milliseconds` 인지 확인한다.\n3. 로그에 `ERROR`, `Exception`, `Unable` 등 오류 문구가 없는지 검색한다.\n4. 입력 폴더와 출력 폴더의 jar 파일 개수가 같은지 비교한다.\n\n### 3.6 Tomcat 10 반영\n1. Tomcat 10을 중지한다.\n2. 변환된 jar를 애플리케이션의 `WEB-INF\\lib` 또는 Tomcat의 `lib` 폴더에 복사한다. 기존 변환 전 jar는 제거한다.\n3. 애플리케이션 자체의 코드와 설정(`web.xml`, 소스의 `javax.servlet` 등)도 `jakarta` 기준으로 변환되어 있어야 한다. 이 도구는 라이브러리 jar만 변환한다.\n4. 필요하면 `<Tomcat>\\webapps` 대신 `webapps-javaee` 폴더에 두어 Tomcat 자체 변환 기능을 이용하는 방법도 있다. (이 도구와는 별개의 방법이다.)\n\n### 3.7 Tomcat 설치 확인\n1. 버전 확인\n\n   ```\n   <Tomcat 설치경로>\\bin\\version.bat\n   ```\n\n   출력의 `Server version` 이 `Apache Tomcat/10.x.x` 인지 확인한다. `JVM Version` 도 함께 확인한다.\n\n2. 기동\n\n   ```\n   <Tomcat 설치경로>\\bin\\startup.bat\n   ```\n\n3. 기동 로그 확인: `<Tomcat 설치경로>\\logs\\catalina.<날짜>.log` 에 `Server startup in [...] milliseconds` 가 있는지 확인한다.\n4. 접속 확인: 브라우저에서 `http://localhost:8080/` 에 접속하여 Tomcat 기본 페이지 또는 애플리케이션 화면이 표시되는지 확인한다.\n5. 오류 확인: `catalina.<날짜>.log` 와 `localhost.<날짜>.log` 에 `ClassNotFoundException`, `NoClassDefFoundError`, `javax.` 관련 오류가 없는지 확인한다.\n6. 기능 확인: 메일 발송, SOAP(Axis2), 스케줄러(Quartz), 리포트 등 변환된 라이브러리를 사용하는 기능을 실제로 호출해 본다.\n\n---\n\n## 4. 기술 설명\n\n### 4.1 전체 동작 흐름\n\n```\nRun_Migration_Tool.bat\n   └─ powershell -File Tomcat_Migration_Tool.ps1\n        └─ (Run Migration 클릭) cmd /c java -jar jakartaee-migration-1.0.12-shaded.jar <source> <dest> > <dest>\\migration_log.txt 2>&1\n             └─ 종료 코드 확인 후 결과 표시\n```\n\n### 4.2 Run_Migration_Tool.bat\n| 항목 | 내용 |\n|---|---|\n| `@echo off` | 실행 명령 출력을 끈다. |\n| `powershell -ExecutionPolicy Bypass` | 이번 실행에 한해 스크립트 실행 정책을 우회한다. 시스템 설정은 변경하지 않는다. |\n| `-WindowStyle Hidden` | PowerShell 콘솔 창을 숨긴다. GUI 창만 표시된다. |\n| `-File "%~dp0Tomcat_Migration_Tool.ps1"` | `%~dp0` 는 bat 파일이 위치한 폴더이다. 어느 경로에서 실행해도 같은 폴더의 ps1을 찾는다. |\n\n### 4.3 Tomcat_Migration_Tool.ps1\n1. 초기화\n   - Windows Forms, Drawing 어셈블리를 로드한다.\n   - 스크립트와 같은 폴더에서 `jakartaee-migration-1.0.12-shaded.jar` 를 찾는다. 없으면 오류 메시지를 표시하고 종료한다.\n2. 화면 구성\n   - Source 경로 입력란과 Browse 버튼\n   - Destination 경로 입력란과 Browse 버튼\n   - Run Migration 버튼\n   - 읽기 전용 상태 창\n3. 실행 전 검사\n   - Source 또는 Destination이 비어 있으면 경고 후 중단한다.\n   - Source 폴더가 존재하지 않으면 오류 후 중단한다.\n   - Destination 폴더가 없으면 생성한다.\n4. 변환 실행\n   - `cmd.exe /c java -jar "<jar>" "<source>" "<dest>" > "<dest>\\migration_log.txt" 2>&1` 를 콘솔 창 없이 실행한다.\n   - 표준 출력과 표준 오류를 모두 `migration_log.txt` 로 저장한다.\n   - 실행 중 `DoEvents()` 와 100ms 대기를 반복하여 화면이 멈추지 않도록 한다.\n5. 결과 판정\n   - 프로세스 종료 코드가 0이면 성공, 그 외는 실패로 표시한다.\n   - 로그 파일을 시스템 기본 인코딩으로 읽어 상태 창에 출력한다.\n6. 예외 처리\n   - 프로세스 시작 자체가 실패하면 Java 설치 여부를 확인하라는 메시지를 표시한다.\n   - Java가 PATH에 없는 경우에는 `cmd` 가 오류 코드를 반환하므로, 실패 메시지와 로그 파일의 `java` 인식 오류 문구로 확인한다.\n\n### 4.4 jakartaee-migration-1.0.12-shaded.jar\nApache Tomcat 프로젝트의 Jakarta EE Migration Tool이다. 이 스크립트는 `<source>` `<dest>` 두 인자만 전달하므로 기본 설정으로 동작한다.\n\n| 항목 | 동작 |\n|---|---|\n| 프로파일 | 기본값 `TOMCAT`. 로그 첫 줄에 `Jakarta EE specification profile [TOMCAT]` 로 표시된다. |\n| 입력이 폴더인 경우 | 폴더 안의 파일을 처리하여 출력 폴더에 저장한다. jar는 변환하고, 변환 대상이 아닌 파일은 그대로 복사한다. |\n| 변환 내용 | 클래스 파일의 바이트코드와 텍스트 리소스에 포함된 `javax.*` 패키지 참조를 `jakarta.*` 로 치환한다. 대상은 Servlet, JSP, EL, WebSocket, Mail, Activation, JMS, XML Binding 등 Jakarta EE 명세 패키지이다. |\n| 제외 대상 | 기본 제외 목록에 있는 jar(`asm`, `bcprov`, `bcpkix`, `slf4j-api` 등)는 변환하지 않고 그대로 복사한다. 로그에 `excluded (the archive was copied unchanged)` 로 표시된다. |\n| 처리 방식 | 스트리밍 방식(`using streaming`)으로 jar를 읽으며 변환하여 메모리 사용을 줄인다. |\n| 중첩 jar | jar 안에 포함된 jar도 재귀적으로 변환한다. |\n| 서명 파일 | jar 내용이 바뀌면 기존 서명이 무효가 되므로 `META-INF/*.SF`, `*.RSA`, `*.DSA` 를 삭제한다. 로그에 `Drop cryptographic signature file` 로 표시된다. |\n| 종료 코드 | 정상 완료 시 0, 오류 시 0이 아닌 값 |\n\n### 4.5 로그 메시지 해석\n| 로그 | 의미 | 조치 |\n|---|---|---|\n| `Migration starting for archive [...]` | 해당 jar 처리 시작 | 없음 |\n| `Migration finished for archive [...]` | 해당 jar 처리 완료 | 없음 |\n| `Migration skipped ... because it is excluded` | 제외 대상으로 변환 없이 복사 | 없음 |\n| `Drop cryptographic signature file [...]` | 서명 파일 삭제 | 없음 |\n| `Migration completed successfully in [N] milliseconds` | 전체 정상 종료 | 없음 |\n| 그 외 `ERROR`, `Exception` 등 | 변환 실패 | 해당 jar 확인 |\n\n로그에 표시되는 경로의 한글이 깨져 보일 수 있다. 이는 로그 파일 인코딩 문제이며 변환 결과에는 영향이 없다.\n\n---\n\n## 5. 제약 사항 및 주의사항\n\n1. 변환 성공은 도구가 오류 없이 끝났다는 의미이며, 변환된 라이브러리가 Tomcat 10에서 정상 동작한다는 보증이 아니다. 반드시 3.7절의 기동 및 기능 확인을 수행한다.\n2. 문자열을 조합하여 만든 클래스 이름(리플렉션), 설정 파일 내 참조 등은 변환되지 않을 수 있다.\n3. 오래된 라이브러리(예: Axis2 1.7.0, Axiom 1.2.13, JAXB API 2.1, Mail, Activation, Geronimo JMS)는 변환해도 정상 동작하지 않을 수 있다. 가능하면 Jakarta를 정식 지원하는 최신 버전으로 교체한다.\n4. 서명이 삭제된 jar는 서명 검증이 필요한 환경에서는 사용할 수 없다.\n5. 출력 폴더를 입력 폴더와 동일하게 지정하지 않는다.\n6. `migration_log.txt` 는 출력 폴더에 함께 생성되므로 배포 시 jar만 선별하여 복사한다.\n7. 변환 도구는 라이브러리만 변환한다. 애플리케이션 소스, `web.xml`, 기타 설정 파일은 별도로 점검한다.\n\n---\n\n## 6. 문제 해결\n\n| 증상 | 원인 | 조치 |\n|---|---|---|\n| `Migration jar file not found` 메시지 | ps1과 같은 폴더에 jar가 없음 | 세 파일을 같은 폴더에 둔다. |\n| `Migration failed with exit code` 표시 | Java 미설치 또는 PATH 미설정, 변환 오류 | `java -version` 확인 후 `migration_log.txt` 를 확인한다. |\n| 로그 파일이 비어 있음 | `java` 명령을 찾지 못함 | Java를 설치하고 PATH를 설정한다. |\n| 실행 시 창이 열리지 않음 | PowerShell 실행 제한 또는 보안 프로그램 차단 | 명령 프롬프트에서 bat을 실행하여 오류를 확인한다. |\n| Tomcat 기동 시 `NoClassDefFoundError` | 변환 누락 또는 일부 jar가 변환 전 상태로 남아 있음 | 변환 전 jar가 배포 위치에 남아 있는지 확인한다. |\n| Tomcat 기동 시 `UnsupportedClassVersionError` | Java 버전이 Tomcat 요구 버전보다 낮음 | Tomcat 10.1은 Java 11 이상을 사용한다. |\n\n',Ug=`---
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

`,Bg=`---
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

`,Fg=`---
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

`,zg=`---
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

`;function wf(e){const t=e.replace(/\r\n/g,`
`).match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);if(!t)throw new Error("Missing frontmatter block");const[,r,l]=t,o={};for(const i of r.split(`
`)){const s=i.indexOf(":");if(s===-1)continue;const a=i.slice(0,s).trim(),u=i.slice(s+1).trim();o[a]=u}if(!o.title||!o.date)throw new Error("Frontmatter must include title and date");return{frontmatter:{title:o.title,date:o.date},body:l.trim()}}function $g(e,n){return`---
title: ${e.title}
date: ${e.date}
---
${n}
`}function Wg(e,n,t=80){const r=kf(e,n).replace(/```[\s\S]*?```/g," ").replace(/^\s{0,3}#{1,6}\s+/gm,"").replace(/^\s*(?:[-*+]|\d+\.)\s+/gm,"").replace(/^\s*>\s?/gm,"").replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm," ").replace(/!\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/\*\*|__|~~|`/g,"").replace(/\*(\S[^*]*?)\*/g,"$1").replace(/\|/g," ").replace(/\s+/g," ").trim();return r.length>t?`${r.slice(0,t)}...`:r}function kf(e,n){const t=e.split(`
`),r=t.findIndex(o=>o.trim()!=="");if(r===-1||t[r].trimEnd()!==`# ${n}`)return e;let l=r+1;for(;l<t.length&&t[l].trim()==="";)l+=1;return t.slice(l).join(`
`)}const Hg=80,Vg=Object.assign({"/src/content/posts/2026-10-06-18d8nk.md":Lg,"/src/content/posts/2026-10-06-dd7f50.md":Mg,"/src/content/posts/2026-10-06-hicvn4.md":bg,"/src/content/posts/2026-10-06-lj520p.md":Ug,"/src/content/posts/2026-10-06-orbtn7.md":Bg,"/src/content/posts/2026-10-07-26ryr4.md":Fg,"/src/content/posts/2026-10-07-905xsv.md":zg});function Gg(e){const n=e.match(/([^/]+)\.md$/);if(!n)throw new Error(`Unexpected post file path: ${e}`);return n[1]}const So=Object.entries(Vg).map(([e,n])=>{const{frontmatter:t,body:r}=wf(n);return{slug:Gg(e),title:t.title,date:t.date,excerpt:Wg(r,t.title,Hg),body:r}}).sort((e,n)=>e.date<n.date?1:e.date>n.date?-1:0);function Kg(e){const n=Math.random().toString(36).slice(2,8);return`${e}-${n}`}function Jg({post:e}){return g.jsx(me,{to:`/blog/${e.slug}`,className:"block",children:g.jsxs("article",{className:"card",children:[g.jsx("h3",{className:"card-title",children:e.title}),g.jsx("p",{className:"mt-1 text-sm text-muted",children:e.date}),g.jsx("p",{className:"mt-2 text-foreground/80",children:e.excerpt})]})})}function qg(){return g.jsxs("section",{children:[g.jsx("h2",{className:"text-xl font-semibold",children:"최신 글"}),g.jsx("div",{className:"mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:So.slice(0,3).map(e=>g.jsx(Jg,{post:e},e.slug))})]})}const Qg="https://github.com/ShinHeeYoun/ShinHeeYoun.github.io";function Xg(){return g.jsxs("section",{children:[g.jsx("h2",{className:"text-xl font-semibold",children:"Source"}),g.jsxs("p",{className:"mt-3 font-mono text-sm",children:[g.jsx("span",{className:"text-muted",children:"$ open "}),g.jsx("a",{href:Qg,target:"_blank",rel:"noopener noreferrer",className:"text-accent underline-offset-4 hover:underline",children:"github.com/ShinHeeYoun/ShinHeeYoun.github.io"})]})]})}function Yg(){return g.jsxs("main",{className:"w-full px-6 py-8 md:px-12",children:[g.jsx(Ig,{}),g.jsxs("div",{className:"mt-12 space-y-14",children:[g.jsx(Og,{}),g.jsx(qg,{}),g.jsx(Xg,{})]})]})}function Zg(){return g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("h1",{className:"text-2xl font-bold",children:"Blog"}),g.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:So.map(e=>g.jsx(me,{to:`/blog/${e.slug}`,className:"block",children:g.jsxs("article",{className:"card",children:[g.jsx("h2",{className:"card-title",children:e.title}),g.jsx("p",{className:"mt-1 text-sm text-muted",children:e.date}),g.jsx("p",{className:"mt-2 text-foreground/80",children:e.excerpt})]})},e.slug))})]})}function Ys(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let it=Ys();function Sf(e){it=e}const Cf=/[&<>"']/,e0=new RegExp(Cf.source,"g"),Ef=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,n0=new RegExp(Ef.source,"g"),t0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ru=e=>t0[e];function Te(e,n){if(n){if(Cf.test(e))return e.replace(e0,Ru)}else if(Ef.test(e))return e.replace(n0,Ru);return e}const r0=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function l0(e){return e.replace(r0,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const o0=/(^|[^\[])\^/g;function b(e,n){let t=typeof e=="string"?e:e.source;n=n||"";const r={replace:(l,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(o0,"$1"),t=t.replace(l,i),r},getRegex:()=>new RegExp(t,n)};return r}function Au(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const mr={exec:()=>null};function _u(e,n){const t=e.replace(/\|/g,(o,i,s)=>{let a=!1,u=i;for(;--u>=0&&s[u]==="\\";)a=!a;return a?"|":" |"}),r=t.split(/ \|/);let l=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;l<r.length;l++)r[l]=r[l].trim().replace(/\\\|/g,"|");return r}function Qt(e,n,t){const r=e.length;if(r===0)return"";let l=0;for(;l<r&&e.charAt(r-l-1)===n;)l++;return e.slice(0,r-l)}function i0(e,n){if(e.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===n[0])t++;else if(e[r]===n[1]&&(t--,t<0))return r;return-1}function ju(e,n,t,r){const l=n.href,o=n.title?Te(n.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){r.state.inLink=!0;const s={type:"link",raw:t,href:l,title:o,text:i,tokens:r.inlineTokens(i)};return r.state.inLink=!1,s}return{type:"image",raw:t,href:l,title:o,text:Te(i)}}function s0(e,n){const t=e.match(/^(\s+)(?:```)/);if(t===null)return n;const r=t[1];return n.split(`
`).map(l=>{const o=l.match(/^\s+/);if(o===null)return l;const[i]=o;return i.length>=r.length?l.slice(r.length):l}).join(`
`)}class Yl{constructor(n){B(this,"options");B(this,"rules");B(this,"lexer");this.options=n||it}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Qt(r,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const r=t[0],l=s0(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:l}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let r=t[2].trim();if(/#$/.test(r)){const l=Qt(r,"#");(this.options.pedantic||!l||/ $/.test(l))&&(r=l.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:Qt(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let r=Qt(t[0],`
`).split(`
`),l="",o="";const i=[];for(;r.length>0;){let s=!1;const a=[];let u;for(u=0;u<r.length;u++)if(/^ {0,3}>/.test(r[u]))a.push(r[u]),s=!0;else if(!s)a.push(r[u]);else break;r=r.slice(u);const d=a.join(`
`),f=d.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");l=l?`${l}
${d}`:d,o=o?`${o}
${f}`:f;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,i,!0),this.lexer.state.top=h,r.length===0)break;const y=i[i.length-1];if((y==null?void 0:y.type)==="code")break;if((y==null?void 0:y.type)==="blockquote"){const v=y,w=v.raw+`
`+r.join(`
`),S=this.blockquote(w);i[i.length-1]=S,l=l.substring(0,l.length-v.raw.length)+S.raw,o=o.substring(0,o.length-v.text.length)+S.text;break}else if((y==null?void 0:y.type)==="list"){const v=y,w=v.raw+`
`+r.join(`
`),S=this.list(w);i[i.length-1]=S,l=l.substring(0,l.length-y.raw.length)+S.raw,o=o.substring(0,o.length-v.raw.length)+S.raw,r=w.substring(i[i.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:l,tokens:i,text:o}}}list(n){let t=this.rules.block.list.exec(n);if(t){let r=t[1].trim();const l=r.length>1,o={type:"list",raw:"",ordered:l,start:l?+r.slice(0,-1):"",loose:!1,items:[]};r=l?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=l?r:"[*+-]");const i=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let s=!1;for(;n;){let a=!1,u="",d="";if(!(t=i.exec(n))||this.rules.block.hr.test(n))break;u=t[0],n=n.substring(u.length);let f=t[2].split(`
`,1)[0].replace(/^\t+/,m=>" ".repeat(3*m.length)),h=n.split(`
`,1)[0],y=!f.trim(),v=0;if(this.options.pedantic?(v=2,d=f.trimStart()):y?v=t[1].length+1:(v=t[2].search(/[^ ]/),v=v>4?1:v,d=f.slice(v),v+=t[1].length),y&&/^ *$/.test(h)&&(u+=h+`
`,n=n.substring(h.length+1),a=!0),!a){const m=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),c=new RegExp(`^ {0,${Math.min(3,v-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),p=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:\`\`\`|~~~)`),x=new RegExp(`^ {0,${Math.min(3,v-1)}}#`);for(;n;){const k=n.split(`
`,1)[0];if(h=k,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),p.test(h)||x.test(h)||m.test(h)||c.test(n))break;if(h.search(/[^ ]/)>=v||!h.trim())d+=`
`+h.slice(v);else{if(y||f.search(/[^ ]/)>=4||p.test(f)||x.test(f)||c.test(f))break;d+=`
`+h}!y&&!h.trim()&&(y=!0),u+=k+`
`,n=n.substring(k.length+1),f=h.slice(v)}}o.loose||(s?o.loose=!0:/\n *\n *$/.test(u)&&(s=!0));let w=null,S;this.options.gfm&&(w=/^\[[ xX]\] /.exec(d),w&&(S=w[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:u,task:!!w,checked:S,loose:!1,text:d,tokens:[]}),o.raw+=u}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let a=0;a<o.items.length;a++)if(this.lexer.state.top=!1,o.items[a].tokens=this.lexer.blockTokens(o.items[a].text,[]),!o.loose){const u=o.items[a].tokens.filter(f=>f.type==="space"),d=u.length>0&&u.some(f=>/\n.*\n/.test(f.raw));o.loose=d}if(o.loose)for(let a=0;a<o.items.length;a++)o.items[a].loose=!0;return o}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),l=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:l,title:o}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const r=_u(t[1]),l=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===l.length){for(const s of l)/^ *-+: *$/.test(s)?i.align.push("right"):/^ *:-+: *$/.test(s)?i.align.push("center"):/^ *:-+ *$/.test(s)?i.align.push("left"):i.align.push(null);for(let s=0;s<r.length;s++)i.header.push({text:r[s],tokens:this.lexer.inline(r[s]),header:!0,align:i.align[s]});for(const s of o)i.rows.push(_u(s,i.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[u]})));return i}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Te(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const i=Qt(r.slice(0,-1),"\\");if((r.length-i.length)%2===0)return}else{const i=i0(t[2],"()");if(i>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let l=t[2],o="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);i&&(l=i[1],o=i[3])}else o=t[3]?t[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(this.options.pedantic&&!/>$/.test(r)?l=l.slice(1):l=l.slice(1,-1)),ju(t,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let r;if((r=this.rules.inline.reflink.exec(n))||(r=this.rules.inline.nolink.exec(n))){const l=(r[2]||r[1]).replace(/\s+/g," "),o=t[l.toLowerCase()];if(!o){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return ju(r,o,r[0],this.lexer)}}emStrong(n,t,r=""){let l=this.rules.inline.emStrongLDelim.exec(n);if(!l||l[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(l[1]||l[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const i=[...l[0]].length-1;let s,a,u=i,d=0;const f=l[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*n.length+i);(l=f.exec(t))!=null;){if(s=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!s)continue;if(a=[...s].length,l[3]||l[4]){u+=a;continue}else if((l[5]||l[6])&&i%3&&!((i+a)%3)){d+=a;continue}if(u-=a,u>0)continue;a=Math.min(a,a+u+d);const h=[...l[0]][0].length,y=n.slice(0,i+l.index+h+a);if(Math.min(i,a)%2){const w=y.slice(1,-1);return{type:"em",raw:y,text:w,tokens:this.lexer.inlineTokens(w)}}const v=y.slice(2,-2);return{type:"strong",raw:y,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let r=t[2].replace(/\n/g," ");const l=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return l&&o&&(r=r.substring(1,r.length-1)),r=Te(r,!0),{type:"codespan",raw:t[0],text:r}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let r,l;return t[2]==="@"?(r=Te(t[1]),l="mailto:"+r):(r=Te(t[1]),l=r),{type:"link",raw:t[0],text:r,href:l,tokens:[{type:"text",raw:r,text:r}]}}}url(n){var r;let t;if(t=this.rules.inline.url.exec(n)){let l,o;if(t[2]==="@")l=Te(t[0]),o="mailto:"+l;else{let i;do i=t[0],t[0]=((r=this.rules.inline._backpedal.exec(t[0]))==null?void 0:r[0])??"";while(i!==t[0]);l=Te(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let r;return this.lexer.state.inRawBlock?r=t[0]:r=Te(t[0]),{type:"text",raw:t[0],text:r}}}}const a0=/^(?: *(?:\n|$))+/,u0=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,c0=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Vr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,d0=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Tf=/(?:[*+-]|\d{1,9}[.)])/,Pf=b(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Tf).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Zs=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,f0=/^[^\n]+/,ea=/(?!\s*\])(?:\\.|[^\[\]\\])+/,p0=b(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ea).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),h0=b(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Tf).getRegex(),Co="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",na=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,m0=b("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",na).replace("tag",Co).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Nf=b(Zs).replace("hr",Vr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Co).getRegex(),g0=b(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Nf).getRegex(),ta={blockquote:g0,code:u0,def:p0,fences:c0,heading:d0,hr:Vr,html:m0,lheading:Pf,list:h0,newline:a0,paragraph:Nf,table:mr,text:f0},Iu=b("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Vr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Co).getRegex(),v0={...ta,table:Iu,paragraph:b(Zs).replace("hr",Vr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Iu).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Co).getRegex()},y0={...ta,html:b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",na).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:mr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:b(Zs).replace("hr",Vr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Pf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Df=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,x0=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Rf=/^( {2,}|\\)\n(?!\s*$)/,w0=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Gr="\\p{P}\\p{S}",k0=b(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Gr).getRegex(),S0=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,C0=b(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Gr).getRegex(),E0=b("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Gr).getRegex(),T0=b("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Gr).getRegex(),P0=b(/\\([punct])/,"gu").replace(/punct/g,Gr).getRegex(),N0=b(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),D0=b(na).replace("(?:-->|$)","-->").getRegex(),R0=b("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",D0).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Zl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,A0=b(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Zl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Af=b(/^!?\[(label)\]\[(ref)\]/).replace("label",Zl).replace("ref",ea).getRegex(),_f=b(/^!?\[(ref)\](?:\[\])?/).replace("ref",ea).getRegex(),_0=b("reflink|nolink(?!\\()","g").replace("reflink",Af).replace("nolink",_f).getRegex(),ra={_backpedal:mr,anyPunctuation:P0,autolink:N0,blockSkip:S0,br:Rf,code:x0,del:mr,emStrongLDelim:C0,emStrongRDelimAst:E0,emStrongRDelimUnd:T0,escape:Df,link:A0,nolink:_f,punctuation:k0,reflink:Af,reflinkSearch:_0,tag:R0,text:w0,url:mr},j0={...ra,link:b(/^!?\[(label)\]\((.*?)\)/).replace("label",Zl).getRegex(),reflink:b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Zl).getRegex()},Yi={...ra,escape:b(Df).replace("])","~|])").getRegex(),url:b(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},I0={...Yi,br:b(Rf).replace("{2,}","*").getRegex(),text:b(Yi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},fl={normal:ta,gfm:v0,pedantic:y0},Xt={normal:ra,gfm:Yi,breaks:I0,pedantic:j0};class Xe{constructor(n){B(this,"tokens");B(this,"options");B(this,"state");B(this,"tokenizer");B(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||it,this.options.tokenizer=this.options.tokenizer||new Yl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:fl.normal,inline:Xt.normal};this.options.pedantic?(t.block=fl.pedantic,t.inline=Xt.pedantic):this.options.gfm&&(t.block=fl.gfm,this.options.breaks?t.inline=Xt.breaks:t.inline=Xt.gfm),this.tokenizer.rules=t}static get rules(){return{block:fl,inline:Xt}}static lex(n,t){return new Xe(t).lex(n)}static lexInline(n,t){return new Xe(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],r=!1){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(s,a,u)=>a+"    ".repeat(u.length));let l,o,i;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>(l=s.call({lexer:this},n,t))?(n=n.substring(l.raw.length),t.push(l),!0):!1))){if(l=this.tokenizer.space(n)){n=n.substring(l.raw.length),l.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(l);continue}if(l=this.tokenizer.code(n)){n=n.substring(l.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+l.raw,o.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(l);continue}if(l=this.tokenizer.fences(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.heading(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.hr(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.blockquote(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.list(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.html(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.def(n)){n=n.substring(l.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+l.raw,o.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.lheading(n)){n=n.substring(l.raw.length),t.push(l);continue}if(i=n,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const a=n.slice(1);let u;this.options.extensions.startBlock.forEach(d=>{u=d.call({lexer:this},a),typeof u=="number"&&u>=0&&(s=Math.min(s,u))}),s<1/0&&s>=0&&(i=n.substring(0,s+1))}if(this.state.top&&(l=this.tokenizer.paragraph(i))){o=t[t.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+l.raw,o.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(l),r=i.length!==n.length,n=n.substring(l.raw.length);continue}if(l=this.tokenizer.text(n)){n=n.substring(l.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+l.raw,o.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(l);continue}if(n){const s="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let r,l,o,i=n,s,a,u;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)d.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(a||(u=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(r=d.call({lexer:this},n,t))?(n=n.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(n)){n=n.substring(r.raw.length),l=t[t.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(r.raw.length),l=t[t.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(n,i,u)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(n)){n=n.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(n))){n=n.substring(r.raw.length),t.push(r);continue}if(o=n,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const f=n.slice(1);let h;this.options.extensions.startInline.forEach(y=>{h=y.call({lexer:this},f),typeof h=="number"&&h>=0&&(d=Math.min(d,h))}),d<1/0&&d>=0&&(o=n.substring(0,d+1))}if(r=this.tokenizer.inlineText(o)){n=n.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(u=r.raw.slice(-1)),a=!0,l=t[t.length-1],l&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(n){const d="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}}class eo{constructor(n){B(this,"options");B(this,"parser");this.options=n||it}space(n){return""}code({text:n,lang:t,escaped:r}){var i;const l=(i=(t||"").match(/^\S*/))==null?void 0:i[0],o=n.replace(/\n$/,"")+`
`;return l?'<pre><code class="language-'+Te(l)+'">'+(r?o:Te(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Te(o,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,r=n.start;let l="";for(let s=0;s<n.items.length;s++){const a=n.items[s];l+=this.listitem(a)}const o=t?"ol":"ul",i=t&&r!==1?' start="'+r+'"':"";return"<"+o+i+`>
`+l+"</"+o+`>
`}listitem(n){let t="";if(n.task){const r=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=r+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=r+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):t+=r+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",r="";for(let o=0;o<n.header.length;o++)r+=this.tablecell(n.header[o]);t+=this.tablerow({text:r});let l="";for(let o=0;o<n.rows.length;o++){const i=n.rows[o];r="";for(let s=0;s<i.length;s++)r+=this.tablecell(i[s]);l+=this.tablerow({text:r})}return l&&(l=`<tbody>${l}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+l+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:r}){const l=this.parser.parseInline(r),o=Au(n);if(o===null)return l;n=o;let i='<a href="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=">"+l+"</a>",i}image({href:n,title:t,text:r}){const l=Au(n);if(l===null)return r;n=l;let o=`<img src="${n}" alt="${r}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class la{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class Ye{constructor(n){B(this,"options");B(this,"renderer");B(this,"textRenderer");this.options=n||it,this.options.renderer=this.options.renderer||new eo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new la}static parse(n,t){return new Ye(t).parse(n)}static parseInline(n,t){return new Ye(t).parseInline(n)}parse(n,t=!0){let r="";for(let l=0;l<n.length;l++){const o=n[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const s=o,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){r+=a||"";continue}}const i=o;switch(i.type){case"space":{r+=this.renderer.space(i);continue}case"hr":{r+=this.renderer.hr(i);continue}case"heading":{r+=this.renderer.heading(i);continue}case"code":{r+=this.renderer.code(i);continue}case"table":{r+=this.renderer.table(i);continue}case"blockquote":{r+=this.renderer.blockquote(i);continue}case"list":{r+=this.renderer.list(i);continue}case"html":{r+=this.renderer.html(i);continue}case"paragraph":{r+=this.renderer.paragraph(i);continue}case"text":{let s=i,a=this.renderer.text(s);for(;l+1<n.length&&n[l+1].type==="text";)s=n[++l],a+=`
`+this.renderer.text(s);t?r+=this.renderer.paragraph({type:"paragraph",raw:a,text:a,tokens:[{type:"text",raw:a,text:a}]}):r+=a;continue}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(n,t){t=t||this.renderer;let r="";for(let l=0;l<n.length;l++){const o=n[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=s||"";continue}}const i=o;switch(i.type){case"escape":{r+=t.text(i);break}case"html":{r+=t.html(i);break}case"link":{r+=t.link(i);break}case"image":{r+=t.image(i);break}case"strong":{r+=t.strong(i);break}case"em":{r+=t.em(i);break}case"codespan":{r+=t.codespan(i);break}case"br":{r+=t.br(i);break}case"del":{r+=t.del(i);break}case"text":{r+=t.text(i);break}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}}class gr{constructor(n){B(this,"options");this.options=n||it}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}B(gr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var fn,jf,Zi,If;class O0{constructor(...n){da(this,fn);B(this,"defaults",Ys());B(this,"options",this.setOptions);B(this,"parse",zt(this,fn,Zi).call(this,Xe.lex,Ye.parse));B(this,"parseInline",zt(this,fn,Zi).call(this,Xe.lexInline,Ye.parseInline));B(this,"Parser",Ye);B(this,"Renderer",eo);B(this,"TextRenderer",la);B(this,"Lexer",Xe);B(this,"Tokenizer",Yl);B(this,"Hooks",gr);this.use(...n)}walkTokens(n,t){var l,o;let r=[];for(const i of n)switch(r=r.concat(t.call(this,i)),i.type){case"table":{const s=i;for(const a of s.header)r=r.concat(this.walkTokens(a.tokens,t));for(const a of s.rows)for(const u of a)r=r.concat(this.walkTokens(u.tokens,t));break}case"list":{const s=i;r=r.concat(this.walkTokens(s.items,t));break}default:{const s=i;(o=(l=this.defaults.extensions)==null?void 0:l.childTokens)!=null&&o[s.type]?this.defaults.extensions.childTokens[s.type].forEach(a=>{const u=s[a].flat(1/0);r=r.concat(this.walkTokens(u,t))}):s.tokens&&(r=r.concat(this.walkTokens(s.tokens,t)))}}return r}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(r=>{const l={...r};if(l.async=this.defaults.async||l.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const i=t.renderers[o.name];i?t.renderers[o.name]=function(...s){let a=o.renderer.apply(this,s);return a===!1&&(a=i.apply(this,s)),a}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[o.level];i?i.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),l.extensions=t),r.renderer){const o=this.defaults.renderer||new eo(this.defaults);for(const i in r.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const s=i;let a=r.renderer[s];r.useNewRenderer||(a=zt(this,fn,jf).call(this,a,s,o));const u=o[s];o[s]=(...d)=>{let f=a.apply(o,d);return f===!1&&(f=u.apply(o,d)),f||""}}l.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new Yl(this.defaults);for(const i in r.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const s=i,a=r.tokenizer[s],u=o[s];o[s]=(...d)=>{let f=a.apply(o,d);return f===!1&&(f=u.apply(o,d)),f}}l.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new gr;for(const i in r.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(i==="options")continue;const s=i,a=r.hooks[s],u=o[s];gr.passThroughHooks.has(i)?o[s]=d=>{if(this.defaults.async)return Promise.resolve(a.call(o,d)).then(h=>u.call(o,h));const f=a.call(o,d);return u.call(o,f)}:o[s]=(...d)=>{let f=a.apply(o,d);return f===!1&&(f=u.apply(o,d)),f}}l.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,i=r.walkTokens;l.walkTokens=function(s){let a=[];return a.push(i.call(this,s)),o&&(a=a.concat(o.call(this,s))),a}}this.defaults={...this.defaults,...l}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Xe.lex(n,t??this.defaults)}parser(n,t){return Ye.parse(n,t??this.defaults)}}fn=new WeakSet,jf=function(n,t,r){switch(t){case"heading":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,r.parser.parseInline(l.tokens),l.depth,l0(r.parser.parseInline(l.tokens,r.parser.textRenderer)))};case"code":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text,l.lang,!!l.escaped)};case"table":return function(l){if(!l.type||l.type!==t)return n.apply(this,arguments);let o="",i="";for(let a=0;a<l.header.length;a++)i+=this.tablecell({text:l.header[a].text,tokens:l.header[a].tokens,header:!0,align:l.align[a]});o+=this.tablerow({text:i});let s="";for(let a=0;a<l.rows.length;a++){const u=l.rows[a];i="";for(let d=0;d<u.length;d++)i+=this.tablecell({text:u[d].text,tokens:u[d].tokens,header:!1,align:l.align[d]});s+=this.tablerow({text:i})}return n.call(this,o,s)};case"blockquote":return function(l){if(!l.type||l.type!==t)return n.apply(this,arguments);const o=this.parser.parse(l.tokens);return n.call(this,o)};case"list":return function(l){if(!l.type||l.type!==t)return n.apply(this,arguments);const o=l.ordered,i=l.start,s=l.loose;let a="";for(let u=0;u<l.items.length;u++){const d=l.items[u],f=d.checked,h=d.task;let y="";if(d.task){const v=this.checkbox({checked:!!f});s?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=v+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=v+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:v+" "}):y+=v+" "}y+=this.parser.parse(d.tokens,s),a+=this.listitem({type:"list_item",raw:y,text:y,task:h,checked:!!f,loose:s,tokens:d.tokens})}return n.call(this,a,o,i)};case"html":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text,l.block)};case"paragraph":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"escape":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text)};case"link":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.href,l.title,this.parser.parseInline(l.tokens))};case"image":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.href,l.title,l.text)};case"strong":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"em":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"codespan":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text)};case"del":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"text":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text)}}return n},Zi=function(n,t){return(r,l)=>{const o={...l},i={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);const s=zt(this,fn,If).call(this,!!i.silent,!!i.async);if(typeof r>"u"||r===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(r):r).then(a=>n(a,i)).then(a=>i.hooks?i.hooks.processAllTokens(a):a).then(a=>i.walkTokens?Promise.all(this.walkTokens(a,i.walkTokens)).then(()=>a):a).then(a=>t(a,i)).then(a=>i.hooks?i.hooks.postprocess(a):a).catch(s);try{i.hooks&&(r=i.hooks.preprocess(r));let a=n(r,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let u=t(a,i);return i.hooks&&(u=i.hooks.postprocess(u)),u}catch(a){return s(a)}}},If=function(n,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const l="<p>An error occurred:</p><pre>"+Te(r.message+"",!0)+"</pre>";return t?Promise.resolve(l):l}if(t)return Promise.reject(r);throw r}};const tt=new O0;function L(e,n){return tt.parse(e,n)}L.options=L.setOptions=function(e){return tt.setOptions(e),L.defaults=tt.defaults,Sf(L.defaults),L};L.getDefaults=Ys;L.defaults=it;L.use=function(...e){return tt.use(...e),L.defaults=tt.defaults,Sf(L.defaults),L};L.walkTokens=function(e,n){return tt.walkTokens(e,n)};L.parseInline=tt.parseInline;L.Parser=Ye;L.parser=Ye.parse;L.Renderer=eo;L.TextRenderer=la;L.Lexer=Xe;L.lexer=Xe.lex;L.Tokenizer=Yl;L.Hooks=gr;L.parse=L;L.options;L.setOptions;L.use;L.walkTokens;L.parseInline;Ye.parse;Xe.lex;function L0(){const{slug:e}=Qs(),n=So.find(r=>r.slug===e);if(!n)return g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("p",{children:"글을 찾을 수 없습니다."}),g.jsx(me,{to:"/blog",className:"text-accent underline",children:"목록으로"})]});const t=L.parse(kf(n.body,n.title),{async:!1});return g.jsx("main",{className:"w-full px-6 py-12 md:px-12",children:g.jsxs("div",{className:"mx-auto max-w-3xl",children:[g.jsx(me,{to:"/blog",className:"text-sm text-accent underline",children:"← 목록으로"}),g.jsx("h1",{className:"mt-4 text-2xl font-bold",children:n.title}),g.jsx("p",{className:"mt-1 text-sm text-muted",children:n.date}),g.jsx("div",{className:"markdown-body mt-8",dangerouslySetInnerHTML:{__html:t}})]})})}const M0="ShinHeeYoun",b0="ShinHeeYoun.github.io",Of="main";function U0(e){return`https://api.github.com/repos/${M0}/${b0}/contents/${e}`}function B0(e){const n=new TextEncoder().encode(e);let t="";for(const r of n)t+=String.fromCharCode(r);return btoa(t)}function F0(e){const n=atob(e.replace(/\n/g,"")),t=Uint8Array.from(n,r=>r.charCodeAt(0));return new TextDecoder().decode(t)}async function oa(e,n,t){const r=await fetch(U0(e),{...t,headers:{Authorization:`Bearer ${n}`,Accept:"application/vnd.github+json",...t.headers}});if(!r.ok){const l=await r.json().catch(()=>({})),o=typeof l.message=="string"?l.message:r.statusText;throw new Error(`GitHub API error (${r.status}): ${o}`)}return r}async function Ou(e,n){const r=await(await oa(e,n,{method:"GET"})).json();return{content:F0(r.content),sha:r.sha}}async function z0(e,n,t,r,l){await oa(e,r,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,content:B0(n),branch:Of,...l?{sha:l}:{}})})}async function $0(e,n,t,r){await oa(e,r,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:n,sha:t,branch:Of})})}const Lf="gh_pat";function W0(){try{return localStorage.getItem(Lf)??""}catch{return""}}function ei(e){try{localStorage.setItem(Lf,e)}catch{}}function H0(){const e=new Date,n=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${n}-${t}-${r}`}function V0(){const[e,n]=C.useState(W0()),[t,r]=C.useState(""),[l,o]=C.useState(""),[i,s]=C.useState(null),[a,u]=C.useState(!1),[d,f]=C.useState(null),[h,y]=C.useState(null),[v,w]=C.useState(null),[S,m]=C.useState(null);function c(){r(""),o(""),f(null),y(null),w(null)}async function p(){s(null),u(!0);try{ei(e);const E=v??H0(),P=d??Kg(E),R=$g({title:t,date:E},l),U=d?`post: update ${t}`:`post: ${t}`;await z0(`src/content/posts/${P}.md`,R,U,e,h??void 0),s("게시됨 — 배포까지 약 1분 정도 걸려요."),c()}catch(E){s(E instanceof Error?E.message:"게시 중 오류가 발생했습니다.")}finally{u(!1)}}async function x(E){s(null),m(E.slug);try{ei(e);const P=`src/content/posts/${E.slug}.md`,{content:R,sha:U}=await Ou(P,e),{frontmatter:A,body:ce}=wf(R);r(A.title),o(ce),w(A.date),f(E.slug),y(U)}catch(P){s(P instanceof Error?P.message:"글을 불러오지 못했습니다.")}finally{m(null)}}async function k(E){if(window.confirm(`"${E.title}" 글을 삭제할까요? 되돌릴 수 없습니다.`)){s(null),m(E.slug);try{ei(e);const P=`src/content/posts/${E.slug}.md`,{sha:R}=await Ou(P,e);await $0(P,`post: delete ${E.title}`,R,e),s("삭제됨 — 배포까지 약 1분 정도 걸려요."),d===E.slug&&c()}catch(P){s(P instanceof Error?P.message:"삭제 중 오류가 발생했습니다.")}finally{m(null)}}}return g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("h1",{className:"text-2xl font-bold",children:"Write"}),g.jsx("p",{className:"mt-4 rounded-md bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",children:"이 저장소(ShinHeeYoun/ShinHeeYoun.github.io) 전용, Contents: Read and write 권한만 있는 fine-grained PAT를 사용하세요. 이 토큰은 브라우저 localStorage에 저장되며, 이 브라우저에서 스크립트를 실행할 수 있는 누구나 읽을 수 있습니다."}),g.jsxs("div",{className:"mt-4",children:[g.jsx("label",{className:"block text-sm font-medium",children:"Personal Access Token"}),g.jsx("input",{type:"password",value:e,onChange:E=>n(E.target.value),className:"mt-1 w-full rounded-md border border-border bg-surface p-2 text-foreground"})]}),g.jsxs("div",{className:"mt-4",children:[g.jsxs("label",{className:"block text-sm font-medium",children:["제목 ",d&&g.jsxs("span",{className:"text-xs text-muted",children:["(수정 중: ",d,")"]})]}),g.jsx("input",{type:"text",value:t,onChange:E=>r(E.target.value),className:"mt-1 w-full rounded-md border border-border bg-surface p-2 text-foreground"})]}),g.jsxs("div",{className:"mt-4",children:[g.jsx("label",{className:"block text-sm font-medium",children:"본문 (Markdown)"}),g.jsx("textarea",{value:l,onChange:E=>o(E.target.value),rows:12,className:"mt-1 w-full rounded-md border border-border bg-surface p-2 font-mono text-sm text-foreground"})]}),g.jsxs("div",{className:"mt-4 flex gap-2",children:[g.jsx("button",{type:"button",onClick:p,disabled:a||!e||!t||!l,className:"rounded-md bg-accent px-4 py-2 text-background transition-colors hover:bg-accent-hover disabled:opacity-50",children:a?"게시 중...":d?"수정 게시":"게시"}),d&&g.jsx("button",{type:"button",onClick:c,className:"rounded-md border border-border px-4 py-2 hover:bg-surface",children:"취소"})]}),i&&g.jsx("p",{className:"mt-4 text-sm",children:i}),g.jsx("h2",{className:"mt-12 text-xl font-semibold",children:"내 글 목록"}),g.jsx("ul",{className:"mt-4 space-y-2",children:So.map(E=>g.jsxs("li",{className:"flex items-center justify-between rounded-md border border-border p-3",children:[g.jsxs("span",{children:[E.title," ",g.jsxs("span",{className:"text-xs text-muted",children:["(",E.date,")"]})]}),g.jsxs("span",{className:"flex gap-3",children:[g.jsx("button",{type:"button",onClick:()=>x(E),disabled:S!==null||!e,className:"text-sm text-accent underline disabled:opacity-50",children:S===E.slug?"불러오는 중...":"수정"}),g.jsx("button",{type:"button",onClick:()=>k(E),disabled:S!==null||!e,className:"text-sm text-red-600 underline disabled:opacity-50 dark:text-red-400",children:"삭제"})]})]},E.slug))})]})}const Mf=[{id:"calculator",name:"계산기",description:"기본 사칙연산을 지원하는 버튼식 계산기입니다."},{id:"dino",name:"공룡 점프 게임",description:"새는 숙여서 피하고 나무는 불덩이로 태우며 달리는 공룡 게임입니다. 입력과 게임 로직이 로그로 흐릅니다."}];function G0(){return g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("h1",{className:"text-2xl font-bold",children:"Tools"}),g.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:Mf.map(e=>g.jsx(me,{to:`/tools/${e.id}`,className:"block",children:g.jsxs("article",{className:"card",children:[g.jsx("h2",{className:"card-title",children:e.name}),g.jsx("p",{className:"mt-2 text-foreground/80",children:e.description})]})},e.id))})]})}const bf={display:"0",pendingValue:null,pendingOperator:null,overwrite:!1};function Lu(e,n,t){switch(t){case"+":return e+n;case"-":return e-n;case"×":return e*n;case"÷":return n===0?NaN:e/n}}function K0(e,n){switch(n.type){case"digit":return e.overwrite||e.display==="0"?{...e,display:n.digit,overwrite:!1}:{...e,display:e.display+n.digit};case"decimal":return e.overwrite?{...e,display:"0.",overwrite:!1}:e.display.includes(".")?e:{...e,display:e.display+"."};case"operator":{const t=Number(e.display);if(e.pendingOperator!==null&&!e.overwrite){const r=Lu(e.pendingValue??0,t,e.pendingOperator);return{display:String(r),pendingValue:r,pendingOperator:n.operator,overwrite:!0}}return{...e,pendingValue:t,pendingOperator:n.operator,overwrite:!0}}case"equals":{if(e.pendingOperator===null)return e;const t=Number(e.display),r=Lu(e.pendingValue??0,t,e.pendingOperator);return{display:String(r),pendingValue:null,pendingOperator:null,overwrite:!0}}case"clear":return bf}}const J0=[{kind:"digit",label:"7"},{kind:"digit",label:"8"},{kind:"digit",label:"9"},{kind:"operator",label:"÷",operator:"÷"},{kind:"digit",label:"4"},{kind:"digit",label:"5"},{kind:"digit",label:"6"},{kind:"operator",label:"×",operator:"×"},{kind:"digit",label:"1"},{kind:"digit",label:"2"},{kind:"digit",label:"3"},{kind:"operator",label:"-",operator:"-"},{kind:"digit",label:"0"},{kind:"decimal",label:"."},{kind:"equals",label:"="},{kind:"operator",label:"+",operator:"+"},{kind:"clear",label:"C"}];function q0(){const[e,n]=C.useReducer(K0,bf);function t(r){switch(r.kind){case"digit":n({type:"digit",digit:r.label});break;case"decimal":n({type:"decimal"});break;case"operator":n({type:"operator",operator:r.operator});break;case"equals":n({type:"equals"});break;case"clear":n({type:"clear"});break}}return g.jsxs("div",{className:"mx-auto max-w-xs",children:[g.jsx("div",{className:"mb-4 rounded-md border border-border bg-surface p-4 text-right text-2xl font-mono break-all",children:e.display}),g.jsx("div",{className:"grid grid-cols-4 gap-2",children:J0.map((r,l)=>g.jsx("button",{type:"button",onClick:()=>t(r),className:`rounded-md border p-3 text-lg transition-colors ${r.kind==="equals"?"border-accent bg-accent text-background hover:bg-accent-hover":"border-border hover:bg-surface"} ${r.kind==="clear"?"col-span-4":""}`,children:r.label},l))})]})}const Q0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNEAAABkBAMAAABayruYAAAAJFBMVEUAAADa2tr/////9/e6urpTU1O5ubn39/f///9ZWVlfX1/z8/O/OctmAAAACXRSTlMA//////////ZO3iNwAAALPElEQVR4AezdwY6bShMF4GP6krX9Bqgk9kiI/SzyAAir9lnlFfL6N26OWhXckDae9mClj/L7L1czMMbfbYDMOCgpKSkpwelyRmIEd6mEhTQpDabvu1C7vsf2ALM6cLlctquVtq2YDwC1jrfHEVDV8fagvln7p7XOlUKVi9SKWrncY5GQnN0DhLuZ1HZJa7WZPemU0GCc6hUMBtVue4BZHeD3v1caTn9KIyiPSimIvjw8SqtDVaQlvKrT2e91JEVUsEilOtGTNkkNUglWnFLX1oDrWSwGSOZ8V91CRczFDnBkWVEaKG0WBISZDPOTeeD2MIZK/Sz4YESUkbxdRhlkTXTrJ74d+aQ1bFRPSRvYjUuLmLOKmNjIch3/fQesGygrHW/SyO2WWzWmSyvSHjpVE1WJSWsIqwJk0agmSmsb39gnzbGKSaOXyJTGKmFSA6vvv/Nh3NQaDpyjPWaCp22mt0+ahkj+LlTzU4tu3Ujjrt4nrZoIq20qlT8brW/4k7S5sQGq73ZJO+M5aawjc5pHRmmYLxMozY/64llp8oAeeaQrMWkir5EGnSPLg8aZ6OaIrJ3n8WsX0lptPCy5ldOiYaT5xro0p9cEaa7nAENd99DOrEzIK0btxOrDSKMl0JeyCgugtr2DSWunmDR2Xy7tdF7c7MgmrfmLNDa7LWmOX9pllzbSDac0UBqrpTQOHOboeQBpIWJOjU3Oq8dItu+pNZRWLaWFBg+nnyBt6FhxIMIrVGxfFqGujcuDj/lkf6S0EeYC9E5aGDiUtAMcPUNkMZ8xl/Oj0qqJ0tomSFs2xDfkaWlOr1FpZzwrzU5qP3jn1px/qeroQUGVDyR2q/hs9X5auSI44T5nLheTJkppdnDpiNJCY1ta3wVQcB2lceBrpH3Dj29F2qdKO50vEWunl0qb6RDUcO0ojQOGYFya6++gnVlRGiubIO1CXgtq+IFPTZF2AeJvBBeT+Ffz8TlpvJnhZTleSTo+NwOB4Iq0QbvPl/btJz41Rdpanpemf5EWbmZQVheXZgei0m7Fp0v7+Ts/APteqI6savX/Y22XCa3NJVlH9qrP092DSROfv3qUOXdt/t8z0iyo3rjplgMJ0ugkemPjHCobnKK3PPiFnNOOL61Iq95cGq89rZ9aQ6l1MKNYhLqi9XKZX79if0EokqNrk9FZwtZj0EJks01pamYztFYaSz7qXmmue5U0f+0Zs0FpWqR9rbSpIqwGFWEpG0Fau1/a4Fn1r5rTskv7pV5aJeYwA4hKli4UjFXmh2LhGho8mujW1yNzlFE+R7QdpDWUNgGoOHmxQWnazP090nr/R/UV0sLfe2ryGVfcZB1Zkms+qLRKhGki0iTkC6VNglmaNKC0KTSCNAhnvf3SOnT5pW3pwlgnzWnLqwOY9ghKE2nDzuQ7laUL81KMtHlYDC9TtpNIY+xJsrTl1pmnD6I8OeNE1gAsGzZgpIGz3pa0fkvaFe7qpfX5pH18fPyj0sKX6SRipTHKiHyJtIrS0Fppk4ANwgvSpNmW5hOXdu078Cab5pP23/cZx9oZV6I0qI5RaVC9SVO+dwyd5OlCNXKHQ9QsTF5qy8nY0zRp0a2nUiPO1bY9O6O0RaO10hpsSHPb0oD80vzP3AKqutSVfD+NITS7JAnrQaWRFeulNA35ImmVzLAgbZBmGySnKdIwJEjDkH1Oe4U0+94JnWTqQlUNNARpd5napTob2QYU33qqNEbifUn+3ahbK0Ga25bm/JzGhTKep+VOTmlFWpMiDcOmtKEbtLs9aNZrz9dIY+z5fKYu1MTc5dDVTBKlliBtsfWUyNpXiG2nSpvENHiJqT1B9To/dIDjQFSa0+ugvV5d32f7G/Yi7d2lAVYaQ0zMFeAgB0jwThrglDYzSMMXSIOPZOnGpW1Tm5pK2qelIS2yeptXGOB5aZ0zNaXZAaqLSKPNIm21W6TRCakMpqY0/8QNlmNcWpfj9wheElEbydxFVBpE1qVhSS2FkOyTlrDsPmlGVxfQXPuO0swAh1gupdHm+0uT3F1EoGWXJjiANCLqezuJMYMZIEGWVhoHcvwW3uupSfYurLRtapPc0iBOTXywFtkpTZBJGvp+CCdmvJIEYwZIkKWRlu932I8vrUjL8KlWhuDwhtLSr+3zdxGDZqnxdi2LBlhSEwlF+qv6XGkQaWZyImmNHZ815HojLfETYFguoeG0+gkwx5ZWpO3Krk+14tVCzk+1ej01kVd0EYHmNf15a2NOw1FLTSBM6qtKjajgYNJ4upb3k/r+TWki7SRr0iYRlX9Kmh/su8yfPvqa8MglqiKpXeGBzXYlaQ2khntpLX9AyEuLsOFWU+XYrSdHcDxpbtAuDGT6ROV/SVollNZULdcd32oSHZ7OcevKvKc0WGmZPiX+ZRFVgaikd3lgW1JLWsOs7F6a/3yLBmvSBBAh5/2vKn/ySztyji8NVZAW1m1CaXNQpL2vNOFDWjcSEUldAxQxaSLSTg3WpBHYQ9IERdpqijQmLi09qkXaYY+eKqndeBLXAFU+RA6gTcKqd7yq40hzFlS3MRCX1uHoKdJqfG2c86AGb6Wbf1b7ejcAx4GINA68c8Jvhqd240lbw3p4hra66vSoLrZ+gAyDhqnLXZUzlB0gwXnAWWl2IH+KtPeOc/3vdCCoWxYDJEhfHVz4LTwzkJKSEmetDN1ygARvA47/7OfQud4OJKWkxFJxCQOh5pP3S0lJSUlJSYmq4sipVcdF/Y4pqcfbnwNHgXFRv2FKagWgOG74D97a+h1Tonw8ZgiLjxo6nxQteV1GzmzK8NlxYkyMz/lAydGmEEVJSe7Mc0dJrY8uPyaedO4PN5I96Zsr+yp9c6ppKwKjSIuurYAZk48wy4xJb7COO2jU3CIXKPsqcV8dMnXaEjuiO76DL9xLZV/Va9+T6oP/LSVN3yO3wMXzRLEnY9lXyUk8dOquw8R4vHNG1T3fmCa90LKv0vfV/+2dQW6jQBBFEascwyqpL9RSiZO0ejvL4QZDbmB8g/hy0zXwRUPZ0QiRDfwnJ5aesstTCdNNm7yAEEJaWXE7ztQQEnRFPM6Q04+orftuwLS64XaUacjpR5Q7KyQuRirMBt0QjzLNmSHyr7TNSVuFOJuPYRjGifsw/GFp+yCtqBHlnemH4XOcKdH9Ymm7IKIT8eYNShvB/X1p3cYY2RlNznSXKI20CgQmrk2PkWZ8U1remtrBqDddukJpRNxHvxDDaqj1w7hwn0pLKbl5lfOL0pIrzZkuX6A00sYqDwy5sBpq/edYMZWWsxWTC3VpaWsK6o12G5NgmhPD0uRlaQFmKu05Pp6FL5TW5ZxRydSMqbQ1BXXGulqbDNOcFtKqqMoM7q5FM6Eq7WGlGShNp5lmoBm0B4MQVwYzbW0STENOS1AJUTQKLsuso2ARiBRnprfKvsbCo7zdUVpeLrLiG5O6vDX22pguw5y0NIKurDIJqorSROyXvU+ljVaaUZeWXFfedMmX5kyXLlAaCXNkWpcWA0JAaV/PbWkp/09pzmjypek1SmNp0ZWmMEtpoytNfUU7zTVLY2nK0sjPlKa+NGFp5AdKc58INE4/LI0cWloUe6E0TDjxpT1YGtmLaEFEcD8NJkiA6S2xmRGlZYBmDjENOftWDtFCrEyU9WrUBFajsIqElaajTEOuVFpQZKDx3Qr7Mozwx4eYhpyXsJR2m4wsGbzeNcQ9t2QHLf7pKjD1SPM7IVka2UUruKshMMGEISyNHMe8mh6lMrhuc88RDCyN7Gba9xhvlYlaBJ/CI8fSBg0qt9pIEYvpkdrdRhpLI57dXw66Mh+/K3haAuEJMOQ88FQrsoO/etICpT2ul1QAAAAASUVORK5CYII=",br=1800,vr=240,X0=e=>e*e*(3-2*e);function es(e){const n=e+vr/2,t=Math.floor(n/br),r=n-t*br,l=t%2;if(r>=vr)return l;const o=t===0?0:(t-1)%2;return o+(l-o)*X0(r/vr)}function Uf(e,n){const t=br*2;return(((e-n+vr/2)%t+t)%t-vr/2)/br}const Mu=e=>Uf(e,0),bu=e=>Uf(e,br),pe=600,Nt=150,Kn=130,ia=40,Uu=9,Y0=.5,Z0=4,e1=14,n1=6,at=40,Bu=30,t1=10,Fu=10,zu=ia+44,r1=32,l1=14,o1=1/600,$u=ia+8,i1={w:28,h:43},Bf={w:40,h:24},Yt=2,Jn={small:{w:17,h:35,y:0},large:{w:25,h:50,y:0},bird:{w:46,h:40,y:32},tree:{w:30,h:130,y:0}},s1={small:0,large:0,bird:100,tree:200},Ff={y:0,vy:0,ducking:!1,speed:n1,distance:0,ticks:0,nextSpawn:400,obstacles:[],fireballs:[],fireCooldown:0,meteors:[],milestone:0,milestoneTick:0,over:!1},zf=e=>Math.floor(e.distance/at),sa=e=>e.ducking&&e.y===0,tn=e=>({type:"event",text:e}),fe=e=>({type:"code",text:e}),$f=["ArrowUp","Space"],Wf=[...$f,"ArrowDown","ArrowLeft","ArrowRight"];function a1(e,n){if(!Wf.includes(n))return{state:e,logs:[]};const t=[tn(`keydown ${n}`)];if(n==="ArrowLeft"||n==="ArrowRight"){const l=Math.min(e1,Math.max(Z0,e.speed+(n==="ArrowRight"?1:-1))),o=n==="ArrowRight"?"Math.min(MAX_SPEED, speed + 1)":"Math.max(MIN_SPEED, speed - 1)";return t.push(fe(`speed = ${o}   // speed=${l}`)),{state:{...e,speed:l},logs:t}}if(n==="ArrowDown")return t.push(fe(`ducking = true   // hitbox h=${Bf.h} while on the ground`)),{state:{...e,ducking:!0},logs:t};if(e.over)return t.push(fe(`if (over) state = restart(speed)   // restart, speed=${e.speed}`)),{state:{...Ff,speed:e.speed},logs:t};if(n==="ArrowUp")return e.y===0?(t.push(fe(`if (y === 0) vy = JUMP_V   // vy=${Uu}`)),{state:{...e,vy:Uu},logs:t}):(t.push(fe(`if (y === 0) vy = JUMP_V   // ignored: y=${e.y.toFixed(1)} (airborne)`)),{state:e,logs:t});if(e.fireCooldown>0)return t.push(fe(`if (fireCooldown === 0) fireballs.push(...)   // ignored: cooldown=${e.fireCooldown}`)),{state:e,logs:t};const r=e.y+(sa(e)?l1:r1);return t.push(fe(`if (fireCooldown === 0) fireballs.push({ x: ${zu}, y: ${r} })   // cooldown=${Bu}`)),{state:{...e,fireballs:[...e.fireballs,{x:zu,y:r}],fireCooldown:Bu},logs:t}}function u1(e,n){return n!=="ArrowDown"?{state:e,logs:[]}:{state:{...e,ducking:!1},logs:[tn(`keyup ${n}`),fe("ducking = false")]}}function c1(e,n=Math.random){if(e.over)return{state:e,logs:[]};const t=[];let{y:r,vy:l,nextSpawn:o}=e;const i=e.ticks+1,s=e.distance+e.speed;let a=e.obstacles.map(c=>({...c,x:c.x-e.speed})).filter(c=>c.x+Jn[c.kind].w>0);(r>0||l>0)&&(r+=l,l-=Y0,r<=0&&(r=0,l=0,t.push(tn("landed"),fe("if (y <= 0) { y = 0; vy = 0 }   // on the ground again"))));const u=[];for(const c of e.fireballs){const p={...c,x:c.x+t1},x=a.findIndex(k=>k.kind==="tree"&&p.x+Fu>k.x+Yt&&p.x<k.x+Jn.tree.w);x>=0?(t.push(tn("tree burned"),fe(`if (fireball.x + ${Fu} > tree.x) obstacles.remove(tree)   // tree.x=${Math.round(a[x].x)}`)),a=a.filter((k,E)=>E!==x)):p.x<pe&&u.push(p)}if(s>=o){const c=Math.floor(s/at),p=Object.keys(Jn).filter(k=>c>=s1[k]),x=p[Math.min(p.length-1,Math.floor(n()*p.length))];a.push({x:pe,kind:x}),o=s+e.speed*(45+n()*30),t.push(tn("spawn obstacle"),fe(`obstacles.push({ x: WIDTH, kind: '${x}' })   // next at distance=${Math.round(o)}`))}const d=Math.floor(e.distance/at/100),f=Math.floor(s/at/100);let{milestone:h,milestoneTick:y}=e;f>d&&(h=f,y=i,t.push(tn(`${f*100} m`),fe(`if (meters % 100 === 0) effect('${f*100} m')   // meters=${Math.floor(s/at)}`)));const v=es(i);v>=.5!=es(e.ticks)>=.5&&t.push(tn(v>=.5?"night falls":"day breaks"),fe(`sky = night >= 0.5 ? 'night' : 'day'   // night=${v.toFixed(2)}`));let w=e.meteors.map(c=>({x:c.x-6,y:c.y+3.5})).filter(c=>c.y<Kn&&c.x>-60);if(v>.6&&n()<o1){const c={x:250+Math.floor(n()*400),y:-10};w=[...w,c],t.push(tn("meteor"),fe(`if (night > 0.6 && rng() < 1 / 600) meteors.push({ x: ${c.x}, y: ${c.y} })   // night=${v.toFixed(2)}`))}const S=sa({...e,y:r})?Bf:i1,m=a.some(c=>{const{w:p,h:x,y:k}=Jn[c.kind];return $u<c.x+p-Yt&&$u+S.w>c.x+Yt&&r<k+x-Yt&&r+S.h>k+Yt});return m&&t.push(tn("collision"),fe(`if (overlaps(dino, obstacle)) over = true   // meters=${Math.floor(s/at)}`)),{state:{...e,y:r,vy:l,distance:s,ticks:i,nextSpawn:o,obstacles:a,fireballs:u,fireCooldown:Math.max(0,e.fireCooldown-1),meteors:w,milestone:h,milestoneTick:y,over:m},logs:t}}const ni=240;function d1(e){for(let n=0;n<e.length;n+=4)e[n]>ni&&e[n+1]>ni&&e[n+2]>ni&&(e[n+3]=0)}const no=2,Wu=1e3/60,f1=15,p1=10,aa="dino_best_m",Ce={x:848,y:2,w:44,h:47,standing:0,running:[88,132],crashed:220,crashedFootPad:2},Hu={w:59,frames:[264,323]},Zt={x:134,y:2,w:46,h:40,frames:[0,46]},h1={small:228,large:332},pl={x:86,y:2,w:46,h:14},gn={x:2,y:54,w:1200,h:12,lineRow:4},Oe={skyTop:[138,200,255],skyBottom:[226,243,255],ink:[62,62,62],dino:[8,140,90],hud:[60,72,90],trunk:[122,86,50],bark:[92,64,36],leaves:[42,150,84],leavesLight:[86,190,110]},Le={skyTop:[6,10,30],skyBottom:[26,36,70],ink:[226,233,241],dino:[61,220,151],hud:[160,172,190],trunk:[74,52,34],bark:[52,36,24],leaves:[24,88,58],leavesLight:[40,124,80]},Pe=(e,n,t)=>`rgb(${e.map((r,l)=>Math.round(r+(n[l]-r)*t)).join(",")})`,m1=Array.from({length:36},(e,n)=>({x:(n*97+31)%580+10,y:(n*53+7)%80+5}));function g1(){try{return Number(localStorage.getItem(aa))||0}catch{return 0}}function v1(e){try{localStorage.setItem(aa,String(e))}catch{}}let mn=null,er=null;function nr(e,n,t,[r,l,o,i],s,a){if(!mn){mn=document.createElement("canvas"),mn.width=n.width,mn.height=n.height;const d=mn.getContext("2d");d.drawImage(n,0,0);const f=d.getImageData(0,0,mn.width,mn.height);d1(f.data),d.putImageData(f,0,0),er=document.createElement("canvas"),er.width=gn.w,er.height=60}const u=er.getContext("2d");u.globalCompositeOperation="source-over",u.clearRect(0,0,o,i),u.drawImage(mn,r,l,o,i,0,0,o,i),u.globalCompositeOperation="source-in",u.fillStyle=t,u.fillRect(0,0,o,i),e.drawImage(er,0,0,o,i,s,a,o,i)}function y1(e,n,t){const r=e.createLinearGradient(0,0,0,Nt);r.addColorStop(0,Pe(Oe.skyTop,Le.skyTop,n)),r.addColorStop(1,Pe(Oe.skyBottom,Le.skyBottom,n)),e.fillStyle=r,e.fillRect(0,0,pe,Nt),e.fillStyle="#fff",m1.forEach((a,u)=>{e.globalAlpha=n*(.45+.55*Math.sin(t/18+u*1.7)**2),e.fillRect(a.x,a.y,u%5===0?2:1,u%5===0?2:1)});const l=40+520*Mu(t),o=98-62*Math.sin(Math.PI*Mu(t));e.globalAlpha=1-n,e.fillStyle="#ffd34d",e.beginPath(),e.arc(l,o,12,0,Math.PI*2),e.fill(),e.globalAlpha=(1-n)*.25,e.beginPath(),e.arc(l,o,18,0,Math.PI*2),e.fill();const i=40+520*bu(t),s=98-62*Math.sin(Math.PI*bu(t));e.globalAlpha=n,e.fillStyle="#eef3fb",e.save(),e.beginPath(),e.rect(0,0,pe,Nt),e.moveTo(i+15,s-3),e.arc(i+5,s-3,10,0,Math.PI*2),e.clip("evenodd"),e.beginPath(),e.arc(i,s,11,0,Math.PI*2),e.fill(),e.restore(),e.globalAlpha=1}function x1(e,n){for(const t of n.meteors){const r=e.createLinearGradient(t.x,t.y,t.x+42,t.y-24.5);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=r,e.lineWidth=2,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+42,t.y-24.5),e.stroke(),e.fillStyle="#fff",e.fillRect(t.x-1.5,t.y-1.5,3,3)}}function w1(e,n,t){const r=Kn-Jn.tree.h,l=(s,a,u,d,f)=>{e.fillStyle=s,e.fillRect(n+a,r+u,d,f)};l(Pe(Oe.trunk,Le.trunk,t),5,40,20,Jn.tree.h-40),l(Pe(Oe.bark,Le.bark,t),9,50,3,70),l(Pe(Oe.bark,Le.bark,t),18,62,3,58);const o=Pe(Oe.leaves,Le.leaves,t);l(o,7,0,16,8),l(o,2,8,26,14),l(o,0,22,30,18),l(o,2,40,8,8),l(o,20,62,10,10),l(o,0,76,9,9);const i=Pe(Oe.leavesLight,Le.leavesLight,t);l(i,6,4,8,4),l(i,4,14,8,4),l(i,14,27,10,5)}function k1(e,n,t,r){const l=Kn-t,o=r%4<2?0:1;e.fillStyle="rgba(255,90,30,0.45)",e.fillRect(n-16,l-2+o,10,4),e.fillStyle="rgba(255,120,30,0.7)",e.fillRect(n-8,l-4-o,10,8),e.fillStyle="#ff8c1a",e.fillRect(n,l-5,10,10),e.fillStyle="#ffd23f",e.fillRect(n+2,l-3,6,6)}function S1(e,n,t){const r=n.ticks-n.milestoneTick;if(n.milestone===0||r>=90)return;r<24&&(e.fillStyle=`rgba(255,255,255,${.4*(1-r/24)})`,e.fillRect(0,0,pe,Nt));const l=30+12*Math.max(0,1-r/20);e.globalAlpha=r<60?1:(90-r)/30,e.font=`bold ${l}px ui-monospace, Consolas, monospace`,e.textAlign="center",e.lineWidth=4,e.strokeStyle=Pe([255,255,255],[10,14,30],t),e.fillStyle=Pe(Oe.dino,Le.dino,t),e.strokeText(`${n.milestone*100} m`,pe/2,70),e.fillText(`${n.milestone*100} m`,pe/2,70);for(let o=0;o<12;o++){const i=o/12*Math.PI*2;e.fillStyle=o%2?"#ffd23f":Pe(Oe.dino,Le.dino,t),e.fillRect(pe/2+Math.cos(i)*(30+r*2.4),58+Math.sin(i)*(18+r*1.2),4,4)}e.globalAlpha=1}function C1(e,n,t,r,l){const o=es(t.ticks),i=Math.min(1,Math.max(0,(o-.35)/.3)),s=i*i*(3-2*i),a=Pe(Oe.ink,Le.ink,s),u=Pe(Oe.dino,Le.dino,s),d=Pe(Oe.hud,Le.hud,s);e.setTransform(no,0,0,no,0,0),e.imageSmoothingEnabled=!1,e.clearRect(0,0,pe,Nt),y1(e,o,t.ticks),x1(e,t),e.globalAlpha=.5;for(const p of[90,260,430]){const x=((p-t.distance*.3)%(pe+80)+pe+80)%(pe+80)-40;nr(e,n,d,[pl.x,pl.y,pl.w,pl.h],x,24+p%24)}e.globalAlpha=1;const f=Kn-gn.lineRow,h=t.distance%gn.w;for(const p of[-h,gn.w-h])nr(e,n,d,[gn.x,gn.y,gn.w,gn.h],p,f);for(const p of t.obstacles){const{w:x,h:k,y:E}=Jn[p.kind];if(p.kind==="tree")w1(e,p.x,o);else if(p.kind==="bird"){const P=Zt.frames[Math.floor(t.ticks/p1)%2];nr(e,n,a,[Zt.x+P,Zt.y,Zt.w,Zt.h],p.x,Kn-E-k)}else nr(e,n,a,[h1[p.kind],Ce.y,x,k],p.x,Kn-k)}for(const p of t.fireballs)k1(e,p.x,p.y,t.ticks);const y=Math.floor(t.ticks/f1)%2;let v=Ce.x+Ce.standing,w=Ce.w;t.over?v=Ce.x+Ce.crashed:sa(t)?(v=Ce.x+Hu.frames[y],w=Hu.w):t.y===0&&l&&(v=Ce.x+Ce.running[y]);const S=Kn-Ce.h-t.y+(t.over?Ce.crashedFootPad:0);nr(e,n,u,[v,Ce.y,w,Ce.h],ia,S),S1(e,t,o);const m=zf(t);e.font="14px ui-monospace, Consolas, monospace",e.fillStyle=d,e.textAlign="left",e.fillText(`speed ${t.speed}`,10,20),e.textAlign="right",e.fillText(`HI ${r} m   ${m} m`,pe-10,20);const c=t.over?"GAME OVER - ↑ / Space 로 다시 시작":l?"":"클릭 후 ↑ 또는 Space 로 시작";c&&(e.fillStyle=a,e.textAlign="center",e.fillText(c,pe/2,76))}function E1(){const e=C.useRef(null),n=C.useRef(null),t=C.useRef(Ff),r=C.useRef(!1),l=C.useRef(g1()),o=C.useRef(0),[i,s]=C.useState([]);function a(h){if(h.length===0)return;const y=h.map(v=>({...v,id:o.current++}));s(v=>[...v,...y].slice(-60))}function u(h){const y=a1(t.current,h);t.current=y.state,$f.includes(h)&&(r.current=!0),a(y.logs)}function d(h){Wf.includes(h.code)&&(h.preventDefault(),h.repeat||u(h.code))}function f(h){const y=u1(t.current,h.code);t.current=y.state,a(y.logs)}return C.useEffect(()=>{},[]),C.useEffect(()=>{const h=e.current.getContext("2d"),y=new Image;y.src=Q0;let v=0,w=performance.now(),S=0;function m(){const p=c1(t.current),x=[...p.logs];if(p.state.over&&!t.current.over){const k=zf(p.state);k>l.current&&(l.current=k,v1(k),x.push({type:"code",text:`if (meters > best) localStorage.setItem('${aa}', meters)   // best=${k}`}))}t.current=p.state,a(x)}function c(p=performance.now()){if(r.current)for(S+=Math.min(p-w,100);S>=Wu;)m(),S-=Wu;else S=0;w=p,y.complete&&y.naturalWidth>0&&C1(h,y,t.current,l.current,r.current),v=requestAnimationFrame(c)}return c(),()=>cancelAnimationFrame(v)},[]),C.useEffect(()=>{const h=n.current;h&&(h.scrollTop=h.scrollHeight)},[i]),g.jsxs("div",{children:[g.jsx("p",{className:"mb-3 text-sm text-muted",children:"게임 화면을 클릭한 뒤 ↑ 점프, ↓ 숙이기, Space 불덩이, ← → 감속·증속합니다."}),g.jsx("canvas",{ref:e,width:pe*no,height:Nt*no,tabIndex:0,"aria-label":"공룡 점프 게임",onKeyDown:d,onKeyUp:f,onBlur:()=>{r.current=!1,t.current={...t.current,ducking:!1}},onMouseDown:h=>{h.currentTarget.focus(),u("ArrowUp")},className:"w-full cursor-pointer rounded-md border border-border bg-surface outline-none focus-visible:border-accent"}),g.jsxs("div",{ref:n,role:"log","aria-live":"off",className:"mt-4 h-56 overflow-y-auto rounded-md border border-border bg-surface p-3 font-mono text-xs leading-5",children:[g.jsx("div",{className:"text-muted",children:"$ tail -f dino.log"}),i.map(h=>g.jsxs("div",{className:"whitespace-pre-wrap break-all",children:[g.jsx("span",{className:h.type==="event"?"text-accent":"text-muted",children:h.type==="event"?"$":">"})," ",h.text]},h.id))]}),g.jsxs("p",{className:"mt-3 text-xs text-muted",children:["공룡 그래픽:"," ",g.jsx("a",{href:"https://github.com/ShinHeeYoun/ShinHeeYoun.github.io/blob/main/src/tools/dino/CHROMIUM-LICENSE.txt",target:"_blank",rel:"noreferrer",className:"underline",children:"Chromium 프로젝트 (BSD 3-Clause)"})]})]})}const T1={calculator:q0,dino:E1};function P1(){const{id:e}=Qs(),n=e?T1[e]:void 0,t=Mf.find(r=>r.id===e);return!n||!t?g.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-12",children:[g.jsx("p",{children:"도구를 찾을 수 없습니다."}),g.jsx(me,{to:"/tools",className:"text-accent underline",children:"목록으로"})]}):g.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-12",children:[g.jsx(me,{to:"/tools",className:"text-sm text-accent underline",children:"← 목록으로"}),g.jsx("h1",{className:"mt-4 text-2xl font-bold",children:t.name}),g.jsx("div",{className:"mt-6",children:g.jsx(n,{})})]})}function N1(){return g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("h1",{className:"text-2xl font-bold",children:"Projects"}),g.jsx("p",{className:"mt-2 text-muted",children:"이 사이트를 이루는 구성 요소를 하나씩 설명합니다."}),g.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:Xs.map(e=>g.jsx(xf,{project:e},e.id))})]})}function D1(){const{id:e}=Qs(),n=Xs.find(t=>t.id===e);return n?g.jsx("main",{className:"w-full px-6 py-12 md:px-12",children:g.jsxs("div",{className:"max-w-2xl",children:[g.jsx(me,{to:"/projects",className:"text-sm text-accent underline-offset-4 hover:underline",children:"← 목록으로"}),g.jsx("h1",{className:"mt-4 text-2xl font-bold",children:n.title}),g.jsx("ul",{className:"mt-3 flex flex-wrap gap-2",children:n.tags.map(t=>g.jsx("li",{className:"tag",children:t},t))}),g.jsx("p",{className:"mt-6 leading-relaxed text-foreground/90",children:n.overview}),g.jsx("h2",{className:"mt-8 text-lg font-semibold",children:"핵심 포인트"}),g.jsx("ul",{className:"mt-3 list-inside list-disc space-y-2 leading-relaxed text-foreground/90",children:n.points.map(t=>g.jsx("li",{children:t},t))})]})}):g.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[g.jsx("p",{children:"프로젝트를 찾을 수 없습니다."}),g.jsx(me,{to:"/projects",className:"text-accent underline-offset-4 hover:underline",children:"목록으로"})]})}const R1=[{name:"React 18 · TypeScript",description:"화면을 컴포넌트 단위로 나눠 만들고, 타입으로 실수를 빌드 단계에서 잡습니다."},{name:"Vite",description:"개발 서버와 빌드 도구입니다. 빠르고 설정이 단순하며, 마크다운 글을 빌드할 때 읽어 오는 기능(import.meta.glob)도 Vite가 제공합니다."},{name:"Tailwind CSS",description:"유틸리티 클래스로 스타일을 작성합니다. 색은 CSS 변수 토큰으로 묶어서 다크/라이트 테마를 한 곳에서 바꿉니다."},{name:"React Router (HashRouter)",description:"페이지 이동을 맡습니다. GitHub Pages에는 서버 설정이 없어서 주소에 #을 쓰는 방식을 택했고, 덕분에 어느 페이지에서 새로고침해도 404가 나지 않습니다."},{name:"marked",description:"블로그의 마크다운 본문을 HTML로 바꿔 줍니다."},{name:"GitHub Pages · GitHub Actions",description:"정적 파일 호스팅과 자동 배포입니다. main에 push하면 테스트, 빌드, 배포가 차례로 실행됩니다."},{name:"GitHub Contents API",description:"Write 페이지가 브라우저에서 글 파일을 저장소에 직접 커밋할 때 쓰는 API입니다. 별도 서버 없이 글쓰기를 가능하게 합니다."},{name:"Vitest",description:"단위 테스트 도구입니다. 계산기 로직, 글 머리말(frontmatter) 파서, 테마 선택 규칙, 프로젝트 데이터를 검사합니다."},{name:"Claude Code",description:"설계, 계획, 구현, 리뷰를 함께 진행한 AI 개발 도구입니다. 이 사이트의 코드와 문서 대부분이 이 방식으로 만들어졌습니다."}];function A1(){return g.jsx("main",{className:"w-full px-6 py-12 md:px-12",children:g.jsxs("div",{className:"max-w-2xl",children:[g.jsx("h1",{className:"text-2xl font-bold",children:"About"}),g.jsx("p",{className:"mt-6 leading-relaxed text-foreground/90",children:"이 페이지는 GitHub Pages 위에서 Claude와 함께 만든 개발 연습 페이지입니다. 블로그, 도구 실행, 브라우저 글쓰기 같은 기능을 하나씩 직접 만들어 보면서, 정적 사이트로 어디까지 할 수 있는지 연습하고 있습니다."}),g.jsx("h2",{className:"mt-10 text-lg font-semibold",children:"사용한 기술"}),g.jsx("ul",{className:"mt-4 space-y-5",children:R1.map(e=>g.jsxs("li",{children:[g.jsx("p",{className:"font-mono text-accent",children:e.name}),g.jsx("p",{className:"mt-1 leading-relaxed text-foreground/90",children:e.description})]},e.name))})]})})}function _1(){return g.jsxs(g.Fragment,{children:[g.jsx(jg,{}),g.jsxs(fg,{children:[g.jsx(Je,{path:"/",element:g.jsx(Yg,{})}),g.jsx(Je,{path:"/blog",element:g.jsx(Zg,{})}),g.jsx(Je,{path:"/blog/:slug",element:g.jsx(L0,{})}),g.jsx(Je,{path:"/write",element:g.jsx(V0,{})}),g.jsx(Je,{path:"/tools",element:g.jsx(G0,{})}),g.jsx(Je,{path:"/tools/:id",element:g.jsx(P1,{})}),g.jsx(Je,{path:"/projects",element:g.jsx(N1,{})}),g.jsx(Je,{path:"/projects/:id",element:g.jsx(D1,{})}),g.jsx(Je,{path:"/about",element:g.jsx(A1,{})})]})]})}rf(document.getElementById("root")).render(g.jsx(C.StrictMode,{children:g.jsx(wg,{children:g.jsx(_1,{})})}));
