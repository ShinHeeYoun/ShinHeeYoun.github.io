var xf=Object.defineProperty;var _a=e=>{throw TypeError(e)};var Sf=(e,n,t)=>n in e?xf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var $=(e,n,t)=>Sf(e,typeof n!="symbol"?n+"":n,t),wf=(e,n,t)=>n.has(e)||_a("Cannot "+t);var Na=(e,n,t)=>n.has(e)?_a("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t);var Qt=(e,n,t)=>(wf(e,n,"access private method"),t);function kf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function Cf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xc={exports:{}},go={},Sc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),Pf=Symbol.for("react.portal"),Ef=Symbol.for("react.fragment"),Tf=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),If=Symbol.for("react.provider"),_f=Symbol.for("react.context"),Nf=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Df=Symbol.for("react.memo"),jf=Symbol.for("react.lazy"),Aa=Symbol.iterator;function Rf(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var wc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kc=Object.assign,Cc={};function Vt(e,n,t){this.props=e,this.context=n,this.refs=Cc,this.updater=t||wc}Vt.prototype.isReactComponent={};Vt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Vt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pc(){}Pc.prototype=Vt.prototype;function ys(e,n,t){this.props=e,this.context=n,this.refs=Cc,this.updater=t||wc}var xs=ys.prototype=new Pc;xs.constructor=ys;kc(xs,Vt.prototype);xs.isPureReactComponent=!0;var Da=Array.isArray,Ec=Object.prototype.hasOwnProperty,Ss={current:null},Tc={key:!0,ref:!0,__self:!0,__source:!0};function bc(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Ec.call(n,r)&&!Tc.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:qr,type:e,key:o,ref:i,props:l,_owner:Ss.current}}function Of(e,n){return{$$typeof:qr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function Lf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ja=/\/+/g;function $o(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Lf(""+e.key):n.toString(36)}function Tl(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case qr:case Pf:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+$o(i,0):r,Da(l)?(t="",e!=null&&(t=e.replace(ja,"$&/")+"/"),Tl(l,n,t,"",function(u){return u})):l!=null&&(ws(l)&&(l=Of(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(ja,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",Da(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+$o(o,s);i+=Tl(o,n,t,a,l)}else if(a=Rf(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+$o(o,s++),i+=Tl(o,n,t,a,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function ol(e,n,t){if(e==null)return e;var r=[],l=0;return Tl(e,r,"","",function(o){return n.call(t,o,l++)}),r}function Mf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},bl={transition:null},Uf={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:bl,ReactCurrentOwner:Ss};function Ic(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ol,forEach:function(e,n,t){ol(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ol(e,function(){n++}),n},toArray:function(e){return ol(e,function(n){return n})||[]},only:function(e){if(!ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Vt;O.Fragment=Ef;O.Profiler=bf;O.PureComponent=ys;O.StrictMode=Tf;O.Suspense=Af;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uf;O.act=Ic;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kc({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Ss.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Ec.call(n,a)&&!Tc.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:qr,type:e.type,key:l,ref:o,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:_f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:If,_context:e},e.Consumer=e};O.createElement=bc;O.createFactory=function(e){var n=bc.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Nf,render:e}};O.isValidElement=ws;O.lazy=function(e){return{$$typeof:jf,_payload:{_status:-1,_result:e},_init:Mf}};O.memo=function(e,n){return{$$typeof:Df,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=bl.transition;bl.transition={};try{e()}finally{bl.transition=n}};O.unstable_act=Ic;O.useCallback=function(e,n){return ve.current.useCallback(e,n)};O.useContext=function(e){return ve.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};O.useEffect=function(e,n){return ve.current.useEffect(e,n)};O.useId=function(){return ve.current.useId()};O.useImperativeHandle=function(e,n,t){return ve.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return ve.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return ve.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return ve.current.useMemo(e,n)};O.useReducer=function(e,n,t){return ve.current.useReducer(e,n,t)};O.useRef=function(e){return ve.current.useRef(e)};O.useState=function(e){return ve.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return ve.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return ve.current.useTransition()};O.version="18.3.1";Sc.exports=O;var k=Sc.exports;const Ff=Cf(k),Bf=kf({__proto__:null,default:Ff},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f=k,zf=Symbol.for("react.element"),Wf=Symbol.for("react.fragment"),Hf=Object.prototype.hasOwnProperty,Gf=$f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vf={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Hf.call(n,r)&&!Vf.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:zf,type:e,key:o,ref:i,props:l,_owner:Gf.current}}go.Fragment=Wf;go.jsx=_c;go.jsxs=_c;xc.exports=go;var f=xc.exports,Nc={exports:{}},Ae={},Ac={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,D){var j=_.length;_.push(D);e:for(;0<j;){var Y=j-1>>>1,re=_[Y];if(0<l(re,D))_[Y]=D,_[j]=re,j=Y;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var D=_[0],j=_.pop();if(j!==D){_[0]=j;e:for(var Y=0,re=_.length,rl=re>>>1;Y<rl;){var Gn=2*(Y+1)-1,Bo=_[Gn],Vn=Gn+1,ll=_[Vn];if(0>l(Bo,j))Vn<re&&0>l(ll,Bo)?(_[Y]=ll,_[Vn]=j,Y=Vn):(_[Y]=Bo,_[Gn]=j,Y=Gn);else if(Vn<re&&0>l(ll,j))_[Y]=ll,_[Vn]=j,Y=Vn;else break e}}return D}function l(_,D){var j=_.sortIndex-D.sortIndex;return j!==0?j:_.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],u=[],d=1,p=null,m=3,y=!1,v=!1,S=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var D=t(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=_)r(u),D.sortIndex=D.expirationTime,n(a,D);else break;D=t(u)}}function x(_){if(S=!1,h(_),!v)if(t(a)!==null)v=!0,Uo(w);else{var D=t(u);D!==null&&Fo(x,D.startTime-_)}}function w(_,D){v=!1,S&&(S=!1,g(I),I=-1),y=!0;var j=m;try{for(h(D),p=t(a);p!==null&&(!(p.expirationTime>D)||_&&!R());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,m=p.priorityLevel;var re=Y(p.expirationTime<=D);D=e.unstable_now(),typeof re=="function"?p.callback=re:p===t(a)&&r(a),h(D)}else r(a);p=t(a)}if(p!==null)var rl=!0;else{var Gn=t(u);Gn!==null&&Fo(x,Gn.startTime-D),rl=!1}return rl}finally{p=null,m=j,y=!1}}var E=!1,T=null,I=-1,M=5,A=-1;function R(){return!(e.unstable_now()-A<M)}function Hn(){if(T!==null){var _=e.unstable_now();A=_;var D=!0;try{D=T(!0,_)}finally{D?Xt():(E=!1,T=null)}}else E=!1}var Xt;if(typeof c=="function")Xt=function(){c(Hn)};else if(typeof MessageChannel<"u"){var Ia=new MessageChannel,yf=Ia.port2;Ia.port1.onmessage=Hn,Xt=function(){yf.postMessage(null)}}else Xt=function(){C(Hn,0)};function Uo(_){T=_,E||(E=!0,Xt())}function Fo(_,D){I=C(function(){_(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Uo(w))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var j=m;m=D;try{return _()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,D){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var j=m;m=_;try{return D()}finally{m=j}},e.unstable_scheduleCallback=function(_,D,j){var Y=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Y+j:Y):j=Y,_){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,_={id:d++,callback:D,priorityLevel:_,startTime:j,expirationTime:re,sortIndex:-1},j>Y?(_.sortIndex=j,n(u,_),t(a)===null&&_===t(u)&&(S?(g(I),I=-1):S=!0,Fo(x,j-Y))):(_.sortIndex=re,n(a,_),v||y||(v=!0,Uo(w))),_},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(_){var D=m;return function(){var j=m;m=D;try{return _.apply(this,arguments)}finally{m=j}}}})(Dc);Ac.exports=Dc;var Jf=Ac.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf=k,Ne=Jf;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jc=new Set,_r={};function ct(e,n){Ut(e,n),Ut(e+"Capture",n)}function Ut(e,n){for(_r[e]=n,e=0;e<n.length;e++)jc.add(n[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yi=Object.prototype.hasOwnProperty,qf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ra={},Oa={};function Xf(e){return yi.call(Oa,e)?!0:yi.call(Ra,e)?!1:qf.test(e)?Oa[e]=!0:(Ra[e]=!0,!1)}function Qf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yf(e,n,t,r){if(n===null||typeof n>"u"||Qf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var ks=/[\-:]([a-z])/g;function Cs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ks,Cs);ae[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ks,Cs);ae[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ks,Cs);ae[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ps(e,n,t,r){var l=ae.hasOwnProperty(n)?ae[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Yf(n,t,l,r)&&(t=null),r||l===null?Xf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var mn=Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),xt=Symbol.for("react.portal"),St=Symbol.for("react.fragment"),Es=Symbol.for("react.strict_mode"),xi=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Ts=Symbol.for("react.forward_ref"),Si=Symbol.for("react.suspense"),wi=Symbol.for("react.suspense_list"),bs=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),Lc=Symbol.for("react.offscreen"),La=Symbol.iterator;function Yt(e){return e===null||typeof e!="object"?null:(e=La&&e[La]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,zo;function fr(e){if(zo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);zo=n&&n[1]||""}return`
`+zo+e}var Wo=!1;function Ho(e,n){if(!e||Wo)return"";Wo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Wo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?fr(e):""}function Zf(e){switch(e.tag){case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return fr("Suspense");case 19:return fr("SuspenseList");case 0:case 2:case 15:return e=Ho(e.type,!1),e;case 11:return e=Ho(e.type.render,!1),e;case 1:return e=Ho(e.type,!0),e;default:return""}}function ki(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case St:return"Fragment";case xt:return"Portal";case xi:return"Profiler";case Es:return"StrictMode";case Si:return"Suspense";case wi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case Rc:return(e._context.displayName||"Context")+".Provider";case Ts:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bs:return n=e.displayName||null,n!==null?n:ki(e.type)||"Memo";case Cn:n=e._payload,e=e._init;try{return ki(e(n))}catch{}}return null}function eh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ki(n);case 8:return n===Es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nh(e){var n=Mc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sl(e){e._valueTracker||(e._valueTracker=nh(e))}function Uc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Mc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,n){var t=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ma(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fc(e,n){n=n.checked,n!=null&&Ps(e,"checked",n,!1)}function Pi(e,n){Fc(e,n);var t=Fn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ei(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ei(e,n.type,Fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ua(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ei(e,n,t){(n!=="number"||Ul(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var hr=Array.isArray;function At(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Fn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Ti(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(hr(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Fn(t)}}function Bc(e,n){var t=Fn(n.value),r=Fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ba(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $c(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$c(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var al,zc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(al=al||document.createElement("div"),al.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=al.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Nr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},th=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){th.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),vr[n]=vr[e]})});function Wc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||vr.hasOwnProperty(e)&&vr[e]?(""+n).trim():n+"px"}function Hc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Wc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var rh=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,n){if(n){if(rh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function _i(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function Is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,Dt=null,jt=null;function $a(e){if(e=Yr(e)){if(typeof Ai!="function")throw Error(P(280));var n=e.stateNode;n&&(n=wo(n),Ai(e.stateNode,e.type,n))}}function Gc(e){Dt?jt?jt.push(e):jt=[e]:Dt=e}function Vc(){if(Dt){var e=Dt,n=jt;if(jt=Dt=null,$a(e),n)for(e=0;e<n.length;e++)$a(n[e])}}function Jc(e,n){return e(n)}function Kc(){}var Go=!1;function qc(e,n,t){if(Go)return e(n,t);Go=!0;try{return Jc(e,n,t)}finally{Go=!1,(Dt!==null||jt!==null)&&(Kc(),Vc())}}function Ar(e,n){var t=e.stateNode;if(t===null)return null;var r=wo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Di=!1;if(cn)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){Di=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{Di=!1}function lh(e,n,t,r,l,o,i,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var yr=!1,Fl=null,Bl=!1,ji=null,oh={onError:function(e){yr=!0,Fl=e}};function ih(e,n,t,r,l,o,i,s,a){yr=!1,Fl=null,lh.apply(oh,arguments)}function sh(e,n,t,r,l,o,i,s,a){if(ih.apply(this,arguments),yr){if(yr){var u=Fl;yr=!1,Fl=null}else throw Error(P(198));Bl||(Bl=!0,ji=u)}}function dt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Xc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function za(e){if(dt(e)!==e)throw Error(P(188))}function ah(e){var n=e.alternate;if(!n){if(n=dt(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return za(l),e;if(o===r)return za(l),n;o=o.sibling}throw Error(P(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function Qc(e){return e=ah(e),e!==null?Yc(e):null}function Yc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Yc(e);if(n!==null)return n;e=e.sibling}return null}var Zc=Ne.unstable_scheduleCallback,Wa=Ne.unstable_cancelCallback,uh=Ne.unstable_shouldYield,ch=Ne.unstable_requestPaint,Z=Ne.unstable_now,dh=Ne.unstable_getCurrentPriorityLevel,_s=Ne.unstable_ImmediatePriority,ed=Ne.unstable_UserBlockingPriority,$l=Ne.unstable_NormalPriority,ph=Ne.unstable_LowPriority,nd=Ne.unstable_IdlePriority,vo=null,en=null;function fh(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:gh,hh=Math.log,mh=Math.LN2;function gh(e){return e>>>=0,e===0?32:31-(hh(e)/mh|0)|0}var ul=64,cl=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~l;s!==0?r=mr(s):(o&=i,o!==0&&(r=mr(o)))}else i=t&~l,i!==0?r=mr(i):o!==0&&(r=mr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ge(n),l=1<<t,r|=e[t],n&=~l;return r}function vh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ge(o),s=1<<i,a=l[i];a===-1?(!(s&t)||s&r)&&(l[i]=vh(s,n)):a<=n&&(e.expiredLanes|=s),o&=~s}}function Ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function td(){var e=ul;return ul<<=1,!(ul&4194240)&&(ul=64),e}function Vo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Xr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ge(n),e[n]=t}function xh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Ge(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function Ns(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ge(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var F=0;function rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ld,As,od,id,sd,Oi=!1,dl=[],Nn=null,An=null,Dn=null,Dr=new Map,jr=new Map,En=[],Sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ha(e,n){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Dr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(n.pointerId)}}function er(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=Yr(n),n!==null&&As(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function wh(e,n,t,r,l){switch(n){case"focusin":return Nn=er(Nn,e,n,t,r,l),!0;case"dragenter":return An=er(An,e,n,t,r,l),!0;case"mouseover":return Dn=er(Dn,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return Dr.set(o,er(Dr.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,jr.set(o,er(jr.get(o)||null,e,n,t,r,l)),!0}return!1}function ad(e){var n=Xn(e.target);if(n!==null){var t=dt(n);if(t!==null){if(n=t.tag,n===13){if(n=Xc(t),n!==null){e.blockedOn=n,sd(e.priority,function(){od(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Li(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ni=r,t.target.dispatchEvent(r),Ni=null}else return n=Yr(t),n!==null&&As(n),e.blockedOn=t,!1;n.shift()}return!0}function Ga(e,n,t){Il(e)&&t.delete(n)}function kh(){Oi=!1,Nn!==null&&Il(Nn)&&(Nn=null),An!==null&&Il(An)&&(An=null),Dn!==null&&Il(Dn)&&(Dn=null),Dr.forEach(Ga),jr.forEach(Ga)}function nr(e,n){e.blockedOn===n&&(e.blockedOn=null,Oi||(Oi=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,kh)))}function Rr(e){function n(l){return nr(l,e)}if(0<dl.length){nr(dl[0],e);for(var t=1;t<dl.length;t++){var r=dl[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Nn!==null&&nr(Nn,e),An!==null&&nr(An,e),Dn!==null&&nr(Dn,e),Dr.forEach(n),jr.forEach(n),t=0;t<En.length;t++)r=En[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(t=En[0],t.blockedOn===null);)ad(t),t.blockedOn===null&&En.shift()}var Rt=mn.ReactCurrentBatchConfig,Wl=!0;function Ch(e,n,t,r){var l=F,o=Rt.transition;Rt.transition=null;try{F=1,Ds(e,n,t,r)}finally{F=l,Rt.transition=o}}function Ph(e,n,t,r){var l=F,o=Rt.transition;Rt.transition=null;try{F=4,Ds(e,n,t,r)}finally{F=l,Rt.transition=o}}function Ds(e,n,t,r){if(Wl){var l=Li(e,n,t,r);if(l===null)ti(e,n,r,Hl,t),Ha(e,r);else if(wh(l,e,n,t,r))r.stopPropagation();else if(Ha(e,r),n&4&&-1<Sh.indexOf(e)){for(;l!==null;){var o=Yr(l);if(o!==null&&ld(o),o=Li(e,n,t,r),o===null&&ti(e,n,r,Hl,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else ti(e,n,r,null,t)}}var Hl=null;function Li(e,n,t,r){if(Hl=null,e=Is(r),e=Xn(e),e!==null)if(n=dt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Xc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Hl=e,null}function ud(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dh()){case _s:return 1;case ed:return 4;case $l:case ph:return 16;case nd:return 536870912;default:return 16}default:return 16}}var bn=null,js=null,_l=null;function cd(){if(_l)return _l;var e,n=js,t=n.length,r,l="value"in bn?bn.value:bn.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return _l=l.slice(e,1<r?1-r:void 0)}function Nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function Va(){return!1}function De(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pl:Va,this.isPropagationStopped=Va,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=De(Jt),Qr=X({},Jt,{view:0,detail:0}),Eh=De(Qr),Jo,Ko,tr,yo=X({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Jo=e.screenX-tr.screenX,Ko=e.screenY-tr.screenY):Ko=Jo=0,tr=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),Ja=De(yo),Th=X({},yo,{dataTransfer:0}),bh=De(Th),Ih=X({},Qr,{relatedTarget:0}),qo=De(Ih),_h=X({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0}),Nh=De(_h),Ah=X({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dh=De(Ah),jh=X({},Jt,{data:0}),Ka=De(jh),Rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lh[e])?!!n[e]:!1}function Os(){return Mh}var Uh=X({},Qr,{key:function(e){if(e.key){var n=Rh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Oh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fh=De(Uh),Bh=X({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=De(Bh),$h=X({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),zh=De($h),Wh=X({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hh=De(Wh),Gh=X({},yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vh=De(Gh),Jh=[9,13,27,32],Ls=cn&&"CompositionEvent"in window,xr=null;cn&&"documentMode"in document&&(xr=document.documentMode);var Kh=cn&&"TextEvent"in window&&!xr,dd=cn&&(!Ls||xr&&8<xr&&11>=xr),Xa=" ",Qa=!1;function pd(e,n){switch(e){case"keyup":return Jh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wt=!1;function qh(e,n){switch(e){case"compositionend":return fd(n);case"keypress":return n.which!==32?null:(Qa=!0,Xa);case"textInput":return e=n.data,e===Xa&&Qa?null:e;default:return null}}function Xh(e,n){if(wt)return e==="compositionend"||!Ls&&pd(e,n)?(e=cd(),_l=js=bn=null,wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dd&&n.locale!=="ko"?null:n.data;default:return null}}var Qh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ya(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qh[e.type]:n==="textarea"}function hd(e,n,t,r){Gc(r),n=Gl(n,"onChange"),0<n.length&&(t=new Rs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Sr=null,Or=null;function Yh(e){Ed(e,0)}function xo(e){var n=Pt(e);if(Uc(n))return e}function Zh(e,n){if(e==="change")return n}var md=!1;if(cn){var Xo;if(cn){var Qo="oninput"in document;if(!Qo){var Za=document.createElement("div");Za.setAttribute("oninput","return;"),Qo=typeof Za.oninput=="function"}Xo=Qo}else Xo=!1;md=Xo&&(!document.documentMode||9<document.documentMode)}function eu(){Sr&&(Sr.detachEvent("onpropertychange",gd),Or=Sr=null)}function gd(e){if(e.propertyName==="value"&&xo(Or)){var n=[];hd(n,Or,e,Is(e)),qc(Yh,n)}}function em(e,n,t){e==="focusin"?(eu(),Sr=n,Or=t,Sr.attachEvent("onpropertychange",gd)):e==="focusout"&&eu()}function nm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(Or)}function tm(e,n){if(e==="click")return xo(n)}function rm(e,n){if(e==="input"||e==="change")return xo(n)}function lm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Je=typeof Object.is=="function"?Object.is:lm;function Lr(e,n){if(Je(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!yi.call(n,l)||!Je(e[l],n[l]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,n){var t=nu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nu(t)}}function vd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yd(){for(var e=window,n=Ul();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ul(e.document)}return n}function Ms(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function om(e){var n=yd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&vd(t.ownerDocument.documentElement,t)){if(r!==null&&Ms(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=tu(t,o);var i=tu(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var im=cn&&"documentMode"in document&&11>=document.documentMode,kt=null,Mi=null,wr=null,Ui=!1;function ru(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ui||kt==null||kt!==Ul(r)||(r=kt,"selectionStart"in r&&Ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Lr(wr,r)||(wr=r,r=Gl(Mi,"onSelect"),0<r.length&&(n=new Rs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=kt)))}function fl(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ct={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},Yo={},xd={};cn&&(xd=document.createElement("div").style,"AnimationEvent"in window||(delete Ct.animationend.animation,delete Ct.animationiteration.animation,delete Ct.animationstart.animation),"TransitionEvent"in window||delete Ct.transitionend.transition);function So(e){if(Yo[e])return Yo[e];if(!Ct[e])return e;var n=Ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in xd)return Yo[e]=n[t];return e}var Sd=So("animationend"),wd=So("animationiteration"),kd=So("animationstart"),Cd=So("transitionend"),Pd=new Map,lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){Pd.set(e,n),ct(n,[e])}for(var Zo=0;Zo<lu.length;Zo++){var ei=lu[Zo],sm=ei.toLowerCase(),am=ei[0].toUpperCase()+ei.slice(1);$n(sm,"on"+am)}$n(Sd,"onAnimationEnd");$n(wd,"onAnimationIteration");$n(kd,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Cd,"onTransitionEnd");Ut("onMouseEnter",["mouseout","mouseover"]);Ut("onMouseLeave",["mouseout","mouseover"]);Ut("onPointerEnter",["pointerout","pointerover"]);Ut("onPointerLeave",["pointerout","pointerover"]);ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ct("onBeforeInput",["compositionend","keypress","textInput","paste"]);ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),um=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function ou(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,sh(r,n,void 0,e),e.currentTarget=null}function Ed(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;ou(l,s,u),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;ou(l,s,u),o=a}}}if(Bl)throw e=ji,Bl=!1,ji=null,e}function H(e,n){var t=n[Wi];t===void 0&&(t=n[Wi]=new Set);var r=e+"__bubble";t.has(r)||(Td(n,e,2,!1),t.add(r))}function ni(e,n,t){var r=0;n&&(r|=4),Td(t,e,r,n)}var hl="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[hl]){e[hl]=!0,jc.forEach(function(t){t!=="selectionchange"&&(um.has(t)||ni(t,!1,e),ni(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[hl]||(n[hl]=!0,ni("selectionchange",!1,n))}}function Td(e,n,t,r){switch(ud(n)){case 1:var l=Ch;break;case 4:l=Ph;break;default:l=Ds}t=l.bind(null,n,t,e),l=void 0,!Di||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function ti(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Xn(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}qc(function(){var u=o,d=Is(t),p=[];e:{var m=Pd.get(e);if(m!==void 0){var y=Rs,v=e;switch(e){case"keypress":if(Nl(t)===0)break e;case"keydown":case"keyup":y=Fh;break;case"focusin":v="focus",y=qo;break;case"focusout":v="blur",y=qo;break;case"beforeblur":case"afterblur":y=qo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zh;break;case Sd:case wd:case kd:y=Nh;break;case Cd:y=Hh;break;case"scroll":y=Eh;break;case"wheel":y=Vh;break;case"copy":case"cut":case"paste":y=Dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qa}var S=(n&4)!==0,C=!S&&e==="scroll",g=S?m!==null?m+"Capture":null:m;S=[];for(var c=u,h;c!==null;){h=c;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,g!==null&&(x=Ar(c,g),x!=null&&S.push(Ur(c,x,h)))),C)break;c=c.return}0<S.length&&(m=new y(m,v,null,t,d),p.push({event:m,listeners:S}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&t!==Ni&&(v=t.relatedTarget||t.fromElement)&&(Xn(v)||v[dn]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=u,v=v?Xn(v):null,v!==null&&(C=dt(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(S=Ja,x="onMouseLeave",g="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=qa,x="onPointerLeave",g="onPointerEnter",c="pointer"),C=y==null?m:Pt(y),h=v==null?m:Pt(v),m=new S(x,c+"leave",y,t,d),m.target=C,m.relatedTarget=h,x=null,Xn(d)===u&&(S=new S(g,c+"enter",v,t,d),S.target=h,S.relatedTarget=C,x=S),C=x,y&&v)n:{for(S=y,g=v,c=0,h=S;h;h=mt(h))c++;for(h=0,x=g;x;x=mt(x))h++;for(;0<c-h;)S=mt(S),c--;for(;0<h-c;)g=mt(g),h--;for(;c--;){if(S===g||g!==null&&S===g.alternate)break n;S=mt(S),g=mt(g)}S=null}else S=null;y!==null&&iu(p,m,y,S,!1),v!==null&&C!==null&&iu(p,C,v,S,!0)}}e:{if(m=u?Pt(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var w=Zh;else if(Ya(m))if(md)w=rm;else{w=nm;var E=em}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=tm);if(w&&(w=w(e,u))){hd(p,w,t,d);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Ei(m,"number",m.value)}switch(E=u?Pt(u):window,e){case"focusin":(Ya(E)||E.contentEditable==="true")&&(kt=E,Mi=u,wr=null);break;case"focusout":wr=Mi=kt=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,ru(p,t,d);break;case"selectionchange":if(im)break;case"keydown":case"keyup":ru(p,t,d)}var T;if(Ls)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else wt?pd(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(dd&&t.locale!=="ko"&&(wt||I!=="onCompositionStart"?I==="onCompositionEnd"&&wt&&(T=cd()):(bn=d,js="value"in bn?bn.value:bn.textContent,wt=!0)),E=Gl(u,I),0<E.length&&(I=new Ka(I,e,null,t,d),p.push({event:I,listeners:E}),T?I.data=T:(T=fd(t),T!==null&&(I.data=T)))),(T=Kh?qh(e,t):Xh(e,t))&&(u=Gl(u,"onBeforeInput"),0<u.length&&(d=new Ka("onBeforeInput","beforeinput",null,t,d),p.push({event:d,listeners:u}),d.data=T))}Ed(p,n)})}function Ur(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Gl(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Ar(e,t),o!=null&&r.unshift(Ur(e,o,l)),o=Ar(e,n),o!=null&&r.push(Ur(e,o,l))),e=e.return}return r}function mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,l?(a=Ar(t,o),a!=null&&i.unshift(Ur(t,a,s))):l||(a=Ar(t,o),a!=null&&i.push(Ur(t,a,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var cm=/\r\n?/g,dm=/\u0000|\uFFFD/g;function su(e){return(typeof e=="string"?e:""+e).replace(cm,`
`).replace(dm,"")}function ml(e,n,t){if(n=su(n),su(e)!==n&&t)throw Error(P(425))}function Vl(){}var Fi=null,Bi=null;function $i(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,pm=typeof clearTimeout=="function"?clearTimeout:void 0,au=typeof Promise=="function"?Promise:void 0,fm=typeof queueMicrotask=="function"?queueMicrotask:typeof au<"u"?function(e){return au.resolve(null).then(e).catch(hm)}:zi;function hm(e){setTimeout(function(){throw e})}function ri(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Rr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Rr(n)}function jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Kt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Kt,Fr="__reactProps$"+Kt,dn="__reactContainer$"+Kt,Wi="__reactEvents$"+Kt,mm="__reactListeners$"+Kt,gm="__reactHandles$"+Kt;function Xn(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[dn]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=uu(e);e!==null;){if(t=e[Qe])return t;e=uu(e)}return n}e=t,t=e.parentNode}return null}function Yr(e){return e=e[Qe]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function wo(e){return e[Fr]||null}var Hi=[],Et=-1;function zn(e){return{current:e}}function G(e){0>Et||(e.current=Hi[Et],Hi[Et]=null,Et--)}function W(e,n){Et++,Hi[Et]=e.current,e.current=n}var Bn={},pe=zn(Bn),we=zn(!1),lt=Bn;function Ft(e,n){var t=e.type.contextTypes;if(!t)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function Jl(){G(we),G(pe)}function cu(e,n,t){if(pe.current!==Bn)throw Error(P(168));W(pe,n),W(we,t)}function bd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(P(108,eh(e)||"Unknown",l));return X({},t,r)}function Kl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,lt=pe.current,W(pe,e),W(we,we.current),!0}function du(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=bd(e,n,lt),r.__reactInternalMemoizedMergedChildContext=e,G(we),G(pe),W(pe,e)):G(we),W(we,t)}var on=null,ko=!1,li=!1;function Id(e){on===null?on=[e]:on.push(e)}function vm(e){ko=!0,Id(e)}function Wn(){if(!li&&on!==null){li=!0;var e=0,n=F;try{var t=on;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}on=null,ko=!1}catch(l){throw on!==null&&(on=on.slice(e+1)),Zc(_s,Wn),l}finally{F=n,li=!1}}return null}var Tt=[],bt=0,ql=null,Xl=0,je=[],Re=0,ot=null,sn=1,an="";function Kn(e,n){Tt[bt++]=Xl,Tt[bt++]=ql,ql=e,Xl=n}function _d(e,n,t){je[Re++]=sn,je[Re++]=an,je[Re++]=ot,ot=e;var r=sn;e=an;var l=32-Ge(r)-1;r&=~(1<<l),t+=1;var o=32-Ge(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,sn=1<<32-Ge(n)+l|t<<l|r,an=o+e}else sn=1<<o|t<<l|r,an=e}function Us(e){e.return!==null&&(Kn(e,1),_d(e,1,0))}function Fs(e){for(;e===ql;)ql=Tt[--bt],Tt[bt]=null,Xl=Tt[--bt],Tt[bt]=null;for(;e===ot;)ot=je[--Re],je[Re]=null,an=je[--Re],je[Re]=null,sn=je[--Re],je[Re]=null}var _e=null,Ie=null,V=!1,He=null;function Nd(e,n){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function pu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,_e=e,Ie=jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,_e=e,Ie=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ot!==null?{id:sn,overflow:an}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,_e=e,Ie=null,!0):!1;default:return!1}}function Gi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vi(e){if(V){var n=Ie;if(n){var t=n;if(!pu(e,n)){if(Gi(e))throw Error(P(418));n=jn(t.nextSibling);var r=_e;n&&pu(e,n)?Nd(r,t):(e.flags=e.flags&-4097|2,V=!1,_e=e)}}else{if(Gi(e))throw Error(P(418));e.flags=e.flags&-4097|2,V=!1,_e=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function gl(e){if(e!==_e)return!1;if(!V)return fu(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$i(e.type,e.memoizedProps)),n&&(n=Ie)){if(Gi(e))throw Ad(),Error(P(418));for(;n;)Nd(e,n),n=jn(n.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ie=jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ie=null}}else Ie=_e?jn(e.stateNode.nextSibling):null;return!0}function Ad(){for(var e=Ie;e;)e=jn(e.nextSibling)}function Bt(){Ie=_e=null,V=!1}function Bs(e){He===null?He=[e]:He.push(e)}var ym=mn.ReactCurrentBatchConfig;function rr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function vl(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function hu(e){var n=e._init;return n(e._payload)}function Dd(e){function n(g,c){if(e){var h=g.deletions;h===null?(g.deletions=[c],g.flags|=16):h.push(c)}}function t(g,c){if(!e)return null;for(;c!==null;)n(g,c),c=c.sibling;return null}function r(g,c){for(g=new Map;c!==null;)c.key!==null?g.set(c.key,c):g.set(c.index,c),c=c.sibling;return g}function l(g,c){return g=Mn(g,c),g.index=0,g.sibling=null,g}function o(g,c,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<c?(g.flags|=2,c):h):(g.flags|=2,c)):(g.flags|=1048576,c)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,c,h,x){return c===null||c.tag!==6?(c=di(h,g.mode,x),c.return=g,c):(c=l(c,h),c.return=g,c)}function a(g,c,h,x){var w=h.type;return w===St?d(g,c,h.props.children,x,h.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Cn&&hu(w)===c.type)?(x=l(c,h.props),x.ref=rr(g,c,h),x.return=g,x):(x=Ml(h.type,h.key,h.props,null,g.mode,x),x.ref=rr(g,c,h),x.return=g,x)}function u(g,c,h,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=pi(h,g.mode,x),c.return=g,c):(c=l(c,h.children||[]),c.return=g,c)}function d(g,c,h,x,w){return c===null||c.tag!==7?(c=rt(h,g.mode,x,w),c.return=g,c):(c=l(c,h),c.return=g,c)}function p(g,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=di(""+c,g.mode,h),c.return=g,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case il:return h=Ml(c.type,c.key,c.props,null,g.mode,h),h.ref=rr(g,null,c),h.return=g,h;case xt:return c=pi(c,g.mode,h),c.return=g,c;case Cn:var x=c._init;return p(g,x(c._payload),h)}if(hr(c)||Yt(c))return c=rt(c,g.mode,h,null),c.return=g,c;vl(g,c)}return null}function m(g,c,h,x){var w=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:s(g,c,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case il:return h.key===w?a(g,c,h,x):null;case xt:return h.key===w?u(g,c,h,x):null;case Cn:return w=h._init,m(g,c,w(h._payload),x)}if(hr(h)||Yt(h))return w!==null?null:d(g,c,h,x,null);vl(g,h)}return null}function y(g,c,h,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(h)||null,s(c,g,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case il:return g=g.get(x.key===null?h:x.key)||null,a(c,g,x,w);case xt:return g=g.get(x.key===null?h:x.key)||null,u(c,g,x,w);case Cn:var E=x._init;return y(g,c,h,E(x._payload),w)}if(hr(x)||Yt(x))return g=g.get(h)||null,d(c,g,x,w,null);vl(c,x)}return null}function v(g,c,h,x){for(var w=null,E=null,T=c,I=c=0,M=null;T!==null&&I<h.length;I++){T.index>I?(M=T,T=null):M=T.sibling;var A=m(g,T,h[I],x);if(A===null){T===null&&(T=M);break}e&&T&&A.alternate===null&&n(g,T),c=o(A,c,I),E===null?w=A:E.sibling=A,E=A,T=M}if(I===h.length)return t(g,T),V&&Kn(g,I),w;if(T===null){for(;I<h.length;I++)T=p(g,h[I],x),T!==null&&(c=o(T,c,I),E===null?w=T:E.sibling=T,E=T);return V&&Kn(g,I),w}for(T=r(g,T);I<h.length;I++)M=y(T,g,I,h[I],x),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?I:M.key),c=o(M,c,I),E===null?w=M:E.sibling=M,E=M);return e&&T.forEach(function(R){return n(g,R)}),V&&Kn(g,I),w}function S(g,c,h,x){var w=Yt(h);if(typeof w!="function")throw Error(P(150));if(h=w.call(h),h==null)throw Error(P(151));for(var E=w=null,T=c,I=c=0,M=null,A=h.next();T!==null&&!A.done;I++,A=h.next()){T.index>I?(M=T,T=null):M=T.sibling;var R=m(g,T,A.value,x);if(R===null){T===null&&(T=M);break}e&&T&&R.alternate===null&&n(g,T),c=o(R,c,I),E===null?w=R:E.sibling=R,E=R,T=M}if(A.done)return t(g,T),V&&Kn(g,I),w;if(T===null){for(;!A.done;I++,A=h.next())A=p(g,A.value,x),A!==null&&(c=o(A,c,I),E===null?w=A:E.sibling=A,E=A);return V&&Kn(g,I),w}for(T=r(g,T);!A.done;I++,A=h.next())A=y(T,g,I,A.value,x),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?I:A.key),c=o(A,c,I),E===null?w=A:E.sibling=A,E=A);return e&&T.forEach(function(Hn){return n(g,Hn)}),V&&Kn(g,I),w}function C(g,c,h,x){if(typeof h=="object"&&h!==null&&h.type===St&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case il:e:{for(var w=h.key,E=c;E!==null;){if(E.key===w){if(w=h.type,w===St){if(E.tag===7){t(g,E.sibling),c=l(E,h.props.children),c.return=g,g=c;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Cn&&hu(w)===E.type){t(g,E.sibling),c=l(E,h.props),c.ref=rr(g,E,h),c.return=g,g=c;break e}t(g,E);break}else n(g,E);E=E.sibling}h.type===St?(c=rt(h.props.children,g.mode,x,h.key),c.return=g,g=c):(x=Ml(h.type,h.key,h.props,null,g.mode,x),x.ref=rr(g,c,h),x.return=g,g=x)}return i(g);case xt:e:{for(E=h.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){t(g,c.sibling),c=l(c,h.children||[]),c.return=g,g=c;break e}else{t(g,c);break}else n(g,c);c=c.sibling}c=pi(h,g.mode,x),c.return=g,g=c}return i(g);case Cn:return E=h._init,C(g,c,E(h._payload),x)}if(hr(h))return v(g,c,h,x);if(Yt(h))return S(g,c,h,x);vl(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(t(g,c.sibling),c=l(c,h),c.return=g,g=c):(t(g,c),c=di(h,g.mode,x),c.return=g,g=c),i(g)):t(g,c)}return C}var $t=Dd(!0),jd=Dd(!1),Ql=zn(null),Yl=null,It=null,$s=null;function zs(){$s=It=Yl=null}function Ws(e){var n=Ql.current;G(Ql),e._currentValue=n}function Ji(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ot(e,n){Yl=e,$s=It=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Se=!0),e.firstContext=null)}function Fe(e){var n=e._currentValue;if($s!==e)if(e={context:e,memoizedValue:n,next:null},It===null){if(Yl===null)throw Error(P(308));It=e,Yl.dependencies={lanes:0,firstContext:e}}else It=It.next=e;return n}var Qn=null;function Hs(e){Qn===null?Qn=[e]:Qn.push(e)}function Rd(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Hs(n)):(t.next=l.next,l.next=t),n.interleaved=t,pn(e,r)}function pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Pn=!1;function Gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Od(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Rn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,pn(e,t)}return l=r.interleaved,l===null?(n.next=n,Hs(r)):(n.next=l.next,l.next=n),r.interleaved=n,pn(e,t)}function Al(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ns(e,t)}}function mu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Zl(e,n,t,r){var l=e.updateQueue;Pn=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,u=a.next;a.next=null,i===null?o=u:i.next=u,i=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(o!==null){var p=l.baseState;i=0,d=u=a=null,s=o;do{var m=s.lane,y=s.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,S=s;switch(m=n,y=t,S.tag){case 1:if(v=S.payload,typeof v=="function"){p=v.call(y,p,m);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,m=typeof v=="function"?v.call(y,p,m):v,m==null)break e;p=X({},p,m);break e;case 2:Pn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=y,a=p):d=d.next=y,i|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(d===null&&(a=p),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=d,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);st|=i,e.lanes=i,e.memoizedState=p}}function gu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(P(191,l));l.call(r)}}}var Zr={},nn=zn(Zr),Br=zn(Zr),$r=zn(Zr);function Yn(e){if(e===Zr)throw Error(P(174));return e}function Vs(e,n){switch(W($r,n),W(Br,e),W(nn,Zr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:bi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=bi(n,e)}G(nn),W(nn,n)}function zt(){G(nn),G(Br),G($r)}function Ld(e){Yn($r.current);var n=Yn(nn.current),t=bi(n,e.type);n!==t&&(W(Br,e),W(nn,t))}function Js(e){Br.current===e&&(G(nn),G(Br))}var J=zn(0);function eo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oi=[];function Ks(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var Dl=mn.ReactCurrentDispatcher,ii=mn.ReactCurrentBatchConfig,it=0,K=null,ne=null,le=null,no=!1,kr=!1,zr=0,xm=0;function ue(){throw Error(P(321))}function qs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Je(e[t],n[t]))return!1;return!0}function Xs(e,n,t,r,l,o){if(it=o,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Dl.current=e===null||e.memoizedState===null?Cm:Pm,e=t(r,l),kr){o=0;do{if(kr=!1,zr=0,25<=o)throw Error(P(301));o+=1,le=ne=null,n.updateQueue=null,Dl.current=Em,e=t(r,l)}while(kr)}if(Dl.current=to,n=ne!==null&&ne.next!==null,it=0,le=ne=K=null,no=!1,n)throw Error(P(300));return e}function Qs(){var e=zr!==0;return zr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?K.memoizedState=le=e:le=le.next=e,le}function Be(){if(ne===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=le===null?K.memoizedState:le.next;if(n!==null)le=n,ne=e;else{if(e===null)throw Error(P(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?K.memoizedState=le=e:le=le.next=e}return le}function Wr(e,n){return typeof n=="function"?n(e):n}function si(e){var n=Be(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=ne,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,u=o;do{var d=u.lane;if((it&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=p,i=r):a=a.next=p,K.lanes|=d,st|=d}u=u.next}while(u!==null&&u!==o);a===null?i=r:a.next=s,Je(r,n.memoizedState)||(Se=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,K.lanes|=o,st|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ai(e){var n=Be(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Je(o,n.memoizedState)||(Se=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Md(){}function Ud(e,n){var t=K,r=Be(),l=n(),o=!Je(r.memoizedState,l);if(o&&(r.memoizedState=l,Se=!0),r=r.queue,Ys($d.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,Hr(9,Bd.bind(null,t,r,l,n),void 0,null),oe===null)throw Error(P(349));it&30||Fd(t,n,l)}return l}function Fd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Bd(e,n,t,r){n.value=t,n.getSnapshot=r,zd(n)&&Wd(e)}function $d(e,n,t){return t(function(){zd(n)&&Wd(e)})}function zd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Je(e,t)}catch{return!0}}function Wd(e){var n=pn(e,1);n!==null&&Ve(n,e,1,-1)}function vu(e){var n=Xe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},n.queue=e,e=e.dispatch=km.bind(null,K,e),[n.memoizedState,e]}function Hr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Hd(){return Be().memoizedState}function jl(e,n,t,r){var l=Xe();K.flags|=e,l.memoizedState=Hr(1|n,t,void 0,r===void 0?null:r)}function Co(e,n,t,r){var l=Be();r=r===void 0?null:r;var o=void 0;if(ne!==null){var i=ne.memoizedState;if(o=i.destroy,r!==null&&qs(r,i.deps)){l.memoizedState=Hr(n,t,o,r);return}}K.flags|=e,l.memoizedState=Hr(1|n,t,o,r)}function yu(e,n){return jl(8390656,8,e,n)}function Ys(e,n){return Co(2048,8,e,n)}function Gd(e,n){return Co(4,2,e,n)}function Vd(e,n){return Co(4,4,e,n)}function Jd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kd(e,n,t){return t=t!=null?t.concat([e]):null,Co(4,4,Jd.bind(null,n,e),t)}function Zs(){}function qd(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Xd(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&qs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Qd(e,n,t){return it&21?(Je(t,n)||(t=td(),K.lanes|=t,st|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=t)}function Sm(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=ii.transition;ii.transition={};try{e(!1),n()}finally{F=t,ii.transition=r}}function Yd(){return Be().memoizedState}function wm(e,n,t){var r=Ln(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Zd(e))ep(n,t);else if(t=Rd(e,n,t,r),t!==null){var l=ge();Ve(t,e,r,l),np(t,n,r)}}function km(e,n,t){var r=Ln(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zd(e))ep(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(l.hasEagerState=!0,l.eagerState=s,Je(s,i)){var a=n.interleaved;a===null?(l.next=l,Hs(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=Rd(e,n,l,r),t!==null&&(l=ge(),Ve(t,e,r,l),np(t,n,r))}}function Zd(e){var n=e.alternate;return e===K||n!==null&&n===K}function ep(e,n){kr=no=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function np(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ns(e,t)}}var to={readContext:Fe,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Cm={readContext:Fe,useCallback:function(e,n){return Xe().memoizedState=[e,n===void 0?null:n],e},useContext:Fe,useEffect:yu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,jl(4194308,4,Jd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return jl(4194308,4,e,n)},useInsertionEffect:function(e,n){return jl(4,2,e,n)},useMemo:function(e,n){var t=Xe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Xe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=wm.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var n=Xe();return e={current:e},n.memoizedState=e},useState:vu,useDebugValue:Zs,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=vu(!1),n=e[0];return e=Sm.bind(null,e[1]),Xe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=K,l=Xe();if(V){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),oe===null)throw Error(P(349));it&30||Fd(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,yu($d.bind(null,r,o,e),[e]),r.flags|=2048,Hr(9,Bd.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Xe(),n=oe.identifierPrefix;if(V){var t=an,r=sn;t=(r&~(1<<32-Ge(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=zr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=xm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Pm={readContext:Fe,useCallback:qd,useContext:Fe,useEffect:Ys,useImperativeHandle:Kd,useInsertionEffect:Gd,useLayoutEffect:Vd,useMemo:Xd,useReducer:si,useRef:Hd,useState:function(){return si(Wr)},useDebugValue:Zs,useDeferredValue:function(e){var n=Be();return Qd(n,ne.memoizedState,e)},useTransition:function(){var e=si(Wr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:Md,useSyncExternalStore:Ud,useId:Yd,unstable_isNewReconciler:!1},Em={readContext:Fe,useCallback:qd,useContext:Fe,useEffect:Ys,useImperativeHandle:Kd,useInsertionEffect:Gd,useLayoutEffect:Vd,useMemo:Xd,useReducer:ai,useRef:Hd,useState:function(){return ai(Wr)},useDebugValue:Zs,useDeferredValue:function(e){var n=Be();return ne===null?n.memoizedState=e:Qd(n,ne.memoizedState,e)},useTransition:function(){var e=ai(Wr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:Md,useSyncExternalStore:Ud,useId:Yd,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ki(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:X({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Po={isMounted:function(e){return(e=e._reactInternals)?dt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),l=Ln(e),o=un(r,l);o.payload=n,t!=null&&(o.callback=t),n=Rn(e,o,l),n!==null&&(Ve(n,e,l,r),Al(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),l=Ln(e),o=un(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Rn(e,o,l),n!==null&&(Ve(n,e,l,r),Al(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=Ln(e),l=un(t,r);l.tag=2,n!=null&&(l.callback=n),n=Rn(e,l,r),n!==null&&(Ve(n,e,r,t),Al(n,e,r))}};function xu(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Lr(t,r)||!Lr(l,o):!0}function tp(e,n,t){var r=!1,l=Bn,o=n.contextType;return typeof o=="object"&&o!==null?o=Fe(o):(l=ke(n)?lt:pe.current,r=n.contextTypes,o=(r=r!=null)?Ft(e,l):Bn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Po,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Su(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Po.enqueueReplaceState(n,n.state,null)}function qi(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Gs(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Fe(o):(o=ke(n)?lt:pe.current,l.context=Ft(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ki(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Po.enqueueReplaceState(l,l.state,null),Zl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Wt(e,n){try{var t="",r=n;do t+=Zf(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function ui(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Xi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Tm=typeof WeakMap=="function"?WeakMap:Map;function rp(e,n,t){t=un(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){lo||(lo=!0,is=r),Xi(e,n)},t}function lp(e,n,t){t=un(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Xi(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Xi(e,n),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function wu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Tm;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Bm.bind(null,e,n,t),n.then(e,e))}function ku(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Cu(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=un(-1,1),n.tag=2,Rn(t,n,1))),t.lanes|=1),e)}var bm=mn.ReactCurrentOwner,Se=!1;function fe(e,n,t,r){n.child=e===null?jd(n,null,t,r):$t(n,e.child,t,r)}function Pu(e,n,t,r,l){t=t.render;var o=n.ref;return Ot(n,l),r=Xs(e,n,t,r,o,l),t=Qs(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,fn(e,n,l)):(V&&t&&Us(n),n.flags|=1,fe(e,n,r,l),n.child)}function Eu(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!sa(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,op(e,n,o,r,l)):(e=Ml(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Lr,t(i,r)&&e.ref===n.ref)return fn(e,n,l)}return n.flags|=1,e=Mn(o,r),e.ref=n.ref,e.return=n,n.child=e}function op(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Lr(o,r)&&e.ref===n.ref)if(Se=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(Se=!0);else return n.lanes=e.lanes,fn(e,n,l)}return Qi(e,n,t,r,l)}function ip(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Nt,Ee),Ee|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(Nt,Ee),Ee|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,W(Nt,Ee),Ee|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,W(Nt,Ee),Ee|=r;return fe(e,n,l,t),n.child}function sp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Qi(e,n,t,r,l){var o=ke(t)?lt:pe.current;return o=Ft(n,o),Ot(n,l),t=Xs(e,n,t,r,o,l),r=Qs(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,fn(e,n,l)):(V&&r&&Us(n),n.flags|=1,fe(e,n,t,l),n.child)}function Tu(e,n,t,r,l){if(ke(t)){var o=!0;Kl(n)}else o=!1;if(Ot(n,l),n.stateNode===null)Rl(e,n),tp(n,t,r),qi(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var a=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=ke(t)?lt:pe.current,u=Ft(n,u));var d=t.getDerivedStateFromProps,p=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Su(n,i,r,u),Pn=!1;var m=n.memoizedState;i.state=m,Zl(n,r,i,l),a=n.memoizedState,s!==r||m!==a||we.current||Pn?(typeof d=="function"&&(Ki(n,t,d,r),a=n.memoizedState),(s=Pn||xu(n,t,s,r,m,a,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),i.props=r,i.state=a,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Od(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:ze(n.type,s),i.props=u,p=n.pendingProps,m=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=Fe(a):(a=ke(t)?lt:pe.current,a=Ft(n,a));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||m!==a)&&Su(n,i,r,a),Pn=!1,m=n.memoizedState,i.state=m,Zl(n,r,i,l);var v=n.memoizedState;s!==p||m!==v||we.current||Pn?(typeof y=="function"&&(Ki(n,t,y,r),v=n.memoizedState),(u=Pn||xu(n,t,u,r,m,v,a)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),i.props=r,i.state=v,i.context=a,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Yi(e,n,t,r,o,l)}function Yi(e,n,t,r,l,o){sp(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&du(n,t,!1),fn(e,n,o);r=n.stateNode,bm.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=$t(n,e.child,null,o),n.child=$t(n,null,s,o)):fe(e,n,s,o),n.memoizedState=r.state,l&&du(n,t,!0),n.child}function ap(e){var n=e.stateNode;n.pendingContext?cu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&cu(e,n.context,!1),Vs(e,n.containerInfo)}function bu(e,n,t,r,l){return Bt(),Bs(l),n.flags|=256,fe(e,n,t,r),n.child}var Zi={dehydrated:null,treeContext:null,retryLane:0};function es(e){return{baseLanes:e,cachePool:null,transitions:null}}function up(e,n,t){var r=n.pendingProps,l=J.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),W(J,l&1),e===null)return Vi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=bo(i,r,0,null),e=rt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=es(t),n.memoizedState=Zi,e):ea(n,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Im(e,n,i,r,s,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Mn(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Mn(s,o):(o=rt(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?es(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Zi,r}return o=e.child,e=o.sibling,r=Mn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ea(e,n){return n=bo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function yl(e,n,t,r){return r!==null&&Bs(r),$t(n,e.child,null,t),e=ea(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Im(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=ui(Error(P(422))),yl(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=bo({mode:"visible",children:r.children},l,0,null),o=rt(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&$t(n,e.child,null,i),n.child.memoizedState=es(i),n.memoizedState=Zi,o);if(!(n.mode&1))return yl(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(P(419)),r=ui(o,r,void 0),yl(e,n,i,r)}if(s=(i&e.childLanes)!==0,Se||s){if(r=oe,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,pn(e,l),Ve(r,e,l,-1))}return ia(),r=ui(Error(P(421))),yl(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=$m.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,Ie=jn(l.nextSibling),_e=n,V=!0,He=null,e!==null&&(je[Re++]=sn,je[Re++]=an,je[Re++]=ot,sn=e.id,an=e.overflow,ot=n),n=ea(n,r.children),n.flags|=4096,n)}function Iu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ji(e.return,n,t)}function ci(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function cp(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(fe(e,n,r.children,t),r=J.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,t,n);else if(e.tag===19)Iu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(J,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&eo(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),ci(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&eo(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}ci(n,!0,t,null,o);break;case"together":ci(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Rl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),st|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=Mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _m(e,n,t){switch(n.tag){case 3:ap(n),Bt();break;case 5:Ld(n);break;case 1:ke(n.type)&&Kl(n);break;case 4:Vs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;W(Ql,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(W(J,J.current&1),n.flags|=128,null):t&n.child.childLanes?up(e,n,t):(W(J,J.current&1),e=fn(e,n,t),e!==null?e.sibling:null);W(J,J.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return cp(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(J,J.current),r)break;return null;case 22:case 23:return n.lanes=0,ip(e,n,t)}return fn(e,n,t)}var dp,ns,pp,fp;dp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ns=function(){};pp=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Yn(nn.current);var o=null;switch(t){case"input":l=Ci(e,l),r=Ci(e,r),o=[];break;case"select":l=X({},l,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":l=Ti(e,l),r=Ti(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vl)}Ii(t,r);var i;t=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_r.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(o||(o=[]),o.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_r.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};fp=function(e,n,t,r){t!==r&&(n.flags|=4)};function lr(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Nm(e,n,t){var r=n.pendingProps;switch(Fs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(n),null;case 1:return ke(n.type)&&Jl(),ce(n),null;case 3:return r=n.stateNode,zt(),G(we),G(pe),Ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gl(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,He!==null&&(us(He),He=null))),ns(e,n),ce(n),null;case 5:Js(n);var l=Yn($r.current);if(t=n.type,e!==null&&n.stateNode!=null)pp(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return ce(n),null}if(e=Yn(nn.current),gl(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Qe]=n,r[Fr]=o,e=(n.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<gr.length;l++)H(gr[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ma(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":Fa(r,o),H("invalid",r)}Ii(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ml(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ml(r.textContent,s,e),l=["children",""+s]):_r.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&H("scroll",r)}switch(t){case"input":sl(r),Ua(r,o,!0);break;case"textarea":sl(r),Ba(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vl)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$c(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Qe]=n,e[Fr]=r,dp(e,n,!1,!1),n.stateNode=e;e:{switch(i=_i(t,r),t){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<gr.length;l++)H(gr[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":Ma(e,r),l=Ci(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":Fa(e,r),l=Ti(e,r),H("invalid",e);break;default:l=r}Ii(t,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Hc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&zc(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Nr(e,a):typeof a=="number"&&Nr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_r.hasOwnProperty(o)?a!=null&&o==="onScroll"&&H("scroll",e):a!=null&&Ps(e,o,a,i))}switch(t){case"input":sl(e),Ua(e,r,!1);break;case"textarea":sl(e),Ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?At(e,!!r.multiple,o,!1):r.defaultValue!=null&&At(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Vl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ce(n),null;case 6:if(e&&n.stateNode!=null)fp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=Yn($r.current),Yn(nn.current),gl(n)){if(r=n.stateNode,t=n.memoizedProps,r[Qe]=n,(o=r.nodeValue!==t)&&(e=_e,e!==null))switch(e.tag){case 3:ml(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ml(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Qe]=n,n.stateNode=r}return ce(n),null;case 13:if(G(J),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ie!==null&&n.mode&1&&!(n.flags&128))Ad(),Bt(),n.flags|=98560,o=!1;else if(o=gl(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[Qe]=n}else Bt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ce(n),o=!1}else He!==null&&(us(He),He=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||J.current&1?te===0&&(te=3):ia())),n.updateQueue!==null&&(n.flags|=4),ce(n),null);case 4:return zt(),ns(e,n),e===null&&Mr(n.stateNode.containerInfo),ce(n),null;case 10:return Ws(n.type._context),ce(n),null;case 17:return ke(n.type)&&Jl(),ce(n),null;case 19:if(G(J),o=n.memoizedState,o===null)return ce(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)lr(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=eo(e),i!==null){for(n.flags|=128,lr(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(J,J.current&1|2),n.child}e=e.sibling}o.tail!==null&&Z()>Ht&&(n.flags|=128,r=!0,lr(o,!1),n.lanes=4194304)}else{if(!r)if(e=eo(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!V)return ce(n),null}else 2*Z()-o.renderingStartTime>Ht&&t!==1073741824&&(n.flags|=128,r=!0,lr(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Z(),n.sibling=null,t=J.current,W(J,r?t&1|2:t&1),n):(ce(n),null);case 22:case 23:return oa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ee&1073741824&&(ce(n),n.subtreeFlags&6&&(n.flags|=8192)):ce(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function Am(e,n){switch(Fs(n),n.tag){case 1:return ke(n.type)&&Jl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zt(),G(we),G(pe),Ks(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Js(n),null;case 13:if(G(J),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));Bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(J),null;case 4:return zt(),null;case 10:return Ws(n.type._context),null;case 22:case 23:return oa(),null;case 24:return null;default:return null}}var xl=!1,de=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,b=null;function _t(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(e,n,r)}else t.current=null}function ts(e,n,t){try{t()}catch(r){Q(e,n,r)}}var _u=!1;function jm(e,n){if(Fi=Wl,e=yd(),Ms(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,a=-1,u=0,d=0,p=e,m=null;n:for(;;){for(var y;p!==t||l!==0&&p.nodeType!==3||(s=i+l),p!==o||r!==0&&p.nodeType!==3||(a=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break n;if(m===t&&++u===l&&(s=i),m===o&&++d===r&&(a=i),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bi={focusedElem:e,selectionRange:t},Wl=!1,b=n;b!==null;)if(n=b,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,b=e;else for(;b!==null;){n=b;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,C=v.memoizedState,g=n.stateNode,c=g.getSnapshotBeforeUpdate(n.elementType===n.type?S:ze(n.type,S),C);g.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){Q(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,b=e;break}b=n.return}return v=_u,_u=!1,v}function Cr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&ts(n,t,o)}l=l.next}while(l!==r)}}function Eo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function rs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function hp(e){var n=e.alternate;n!==null&&(e.alternate=null,hp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[Fr],delete n[Wi],delete n[mm],delete n[gm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mp(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ls(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Vl));else if(r!==4&&(e=e.child,e!==null))for(ls(e,n,t),e=e.sibling;e!==null;)ls(e,n,t),e=e.sibling}function os(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(os(e,n,t),e=e.sibling;e!==null;)os(e,n,t),e=e.sibling}var ie=null,We=!1;function yn(e,n,t){for(t=t.child;t!==null;)gp(e,n,t),t=t.sibling}function gp(e,n,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(vo,t)}catch{}switch(t.tag){case 5:de||_t(t,n);case 6:var r=ie,l=We;ie=null,yn(e,n,t),ie=r,We=l,ie!==null&&(We?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(We?(e=ie,t=t.stateNode,e.nodeType===8?ri(e.parentNode,t):e.nodeType===1&&ri(e,t),Rr(e)):ri(ie,t.stateNode));break;case 4:r=ie,l=We,ie=t.stateNode.containerInfo,We=!0,yn(e,n,t),ie=r,We=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&ts(t,n,i),l=l.next}while(l!==r)}yn(e,n,t);break;case 1:if(!de&&(_t(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){Q(t,n,s)}yn(e,n,t);break;case 21:yn(e,n,t);break;case 22:t.mode&1?(de=(r=de)||t.memoizedState!==null,yn(e,n,t),de=r):yn(e,n,t);break;default:yn(e,n,t)}}function Au(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Dm),n.forEach(function(r){var l=zm.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function $e(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,We=!1;break e;case 3:ie=s.stateNode.containerInfo,We=!0;break e;case 4:ie=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(ie===null)throw Error(P(160));gp(o,i,l),ie=null,We=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){Q(l,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vp(n,e),n=n.sibling}function vp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(n,e),Ke(e),r&4){try{Cr(3,e,e.return),Eo(3,e)}catch(S){Q(e,e.return,S)}try{Cr(5,e,e.return)}catch(S){Q(e,e.return,S)}}break;case 1:$e(n,e),Ke(e),r&512&&t!==null&&_t(t,t.return);break;case 5:if($e(n,e),Ke(e),r&512&&t!==null&&_t(t,t.return),e.flags&32){var l=e.stateNode;try{Nr(l,"")}catch(S){Q(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Fc(l,o),_i(s,i);var u=_i(s,o);for(i=0;i<a.length;i+=2){var d=a[i],p=a[i+1];d==="style"?Hc(l,p):d==="dangerouslySetInnerHTML"?zc(l,p):d==="children"?Nr(l,p):Ps(l,d,p,u)}switch(s){case"input":Pi(l,o);break;case"textarea":Bc(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?At(l,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?At(l,!!o.multiple,o.defaultValue,!0):At(l,!!o.multiple,o.multiple?[]:"",!1))}l[Fr]=o}catch(S){Q(e,e.return,S)}}break;case 6:if($e(n,e),Ke(e),r&4){if(e.stateNode===null)throw Error(P(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){Q(e,e.return,S)}}break;case 3:if($e(n,e),Ke(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch(S){Q(e,e.return,S)}break;case 4:$e(n,e),Ke(e);break;case 13:$e(n,e),Ke(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ra=Z())),r&4&&Au(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(de=(u=de)||d,$e(n,e),de=u):$e(n,e),Ke(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(b=e,d=e.child;d!==null;){for(p=b=d;b!==null;){switch(m=b,y=m.child,m.tag){case 0:case 11:case 14:case 15:Cr(4,m,m.return);break;case 1:_t(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(S){Q(r,t,S)}}break;case 5:_t(m,m.return);break;case 22:if(m.memoizedState!==null){ju(p);continue}}y!==null?(y.return=m,b=y):ju(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{l=p.stateNode,u?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,a=p.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Wc("display",i))}catch(S){Q(e,e.return,S)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(S){Q(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:$e(n,e),Ke(e),r&4&&Au(e);break;case 21:break;default:$e(n,e),Ke(e)}}function Ke(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(mp(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Nr(l,""),r.flags&=-33);var o=Nu(e);os(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Nu(e);ls(e,s,i);break;default:throw Error(P(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Rm(e,n,t){b=e,yp(e)}function yp(e,n,t){for(var r=(e.mode&1)!==0;b!==null;){var l=b,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||xl;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||de;s=xl;var u=de;if(xl=i,(de=a)&&!u)for(b=l;b!==null;)i=b,a=i.child,i.tag===22&&i.memoizedState!==null?Ru(l):a!==null?(a.return=i,b=a):Ru(l);for(;o!==null;)b=o,yp(o),o=o.sibling;b=l,xl=s,de=u}Du(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,b=o):Du(e)}}function Du(e){for(;b!==null;){var n=b;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:de||Eo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!de)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&gu(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}gu(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Rr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}de||n.flags&512&&rs(n)}catch(m){Q(n,n.return,m)}}if(n===e){b=null;break}if(t=n.sibling,t!==null){t.return=n.return,b=t;break}b=n.return}}function ju(e){for(;b!==null;){var n=b;if(n===e){b=null;break}var t=n.sibling;if(t!==null){t.return=n.return,b=t;break}b=n.return}}function Ru(e){for(;b!==null;){var n=b;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Eo(4,n)}catch(a){Q(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){Q(n,l,a)}}var o=n.return;try{rs(n)}catch(a){Q(n,o,a)}break;case 5:var i=n.return;try{rs(n)}catch(a){Q(n,i,a)}}}catch(a){Q(n,n.return,a)}if(n===e){b=null;break}var s=n.sibling;if(s!==null){s.return=n.return,b=s;break}b=n.return}}var Om=Math.ceil,ro=mn.ReactCurrentDispatcher,na=mn.ReactCurrentOwner,Ue=mn.ReactCurrentBatchConfig,L=0,oe=null,ee=null,se=0,Ee=0,Nt=zn(0),te=0,Gr=null,st=0,To=0,ta=0,Pr=null,xe=null,ra=0,Ht=1/0,rn=null,lo=!1,is=null,On=null,Sl=!1,In=null,oo=0,Er=0,ss=null,Ol=-1,Ll=0;function ge(){return L&6?Z():Ol!==-1?Ol:Ol=Z()}function Ln(e){return e.mode&1?L&2&&se!==0?se&-se:ym.transition!==null?(Ll===0&&(Ll=td()),Ll):(e=F,e!==0||(e=window.event,e=e===void 0?16:ud(e.type)),e):1}function Ve(e,n,t,r){if(50<Er)throw Er=0,ss=null,Error(P(185));Xr(e,t,r),(!(L&2)||e!==oe)&&(e===oe&&(!(L&2)&&(To|=t),te===4&&Tn(e,se)),Ce(e,r),t===1&&L===0&&!(n.mode&1)&&(Ht=Z()+500,ko&&Wn()))}function Ce(e,n){var t=e.callbackNode;yh(e,n);var r=zl(e,e===oe?se:0);if(r===0)t!==null&&Wa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Wa(t),n===1)e.tag===0?vm(Ou.bind(null,e)):Id(Ou.bind(null,e)),fm(function(){!(L&6)&&Wn()}),t=null;else{switch(rd(r)){case 1:t=_s;break;case 4:t=ed;break;case 16:t=$l;break;case 536870912:t=nd;break;default:t=$l}t=Tp(t,xp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function xp(e,n){if(Ol=-1,Ll=0,L&6)throw Error(P(327));var t=e.callbackNode;if(Lt()&&e.callbackNode!==t)return null;var r=zl(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=io(e,r);else{n=r;var l=L;L|=2;var o=wp();(oe!==e||se!==n)&&(rn=null,Ht=Z()+500,tt(e,n));do try{Um();break}catch(s){Sp(e,s)}while(!0);zs(),ro.current=o,L=l,ee!==null?n=0:(oe=null,se=0,n=te)}if(n!==0){if(n===2&&(l=Ri(e),l!==0&&(r=l,n=as(e,l))),n===1)throw t=Gr,tt(e,0),Tn(e,r),Ce(e,Z()),t;if(n===6)Tn(e,r);else{if(l=e.current.alternate,!(r&30)&&!Lm(l)&&(n=io(e,r),n===2&&(o=Ri(e),o!==0&&(r=o,n=as(e,o))),n===1))throw t=Gr,tt(e,0),Tn(e,r),Ce(e,Z()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:qn(e,xe,rn);break;case 3:if(Tn(e,r),(r&130023424)===r&&(n=ra+500-Z(),10<n)){if(zl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=zi(qn.bind(null,e,xe,rn),n);break}qn(e,xe,rn);break;case 4:if(Tn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-Ge(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Om(r/1960))-r,10<r){e.timeoutHandle=zi(qn.bind(null,e,xe,rn),r);break}qn(e,xe,rn);break;case 5:qn(e,xe,rn);break;default:throw Error(P(329))}}}return Ce(e,Z()),e.callbackNode===t?xp.bind(null,e):null}function as(e,n){var t=Pr;return e.current.memoizedState.isDehydrated&&(tt(e,n).flags|=256),e=io(e,n),e!==2&&(n=xe,xe=t,n!==null&&us(n)),e}function us(e){xe===null?xe=e:xe.push.apply(xe,e)}function Lm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Je(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Tn(e,n){for(n&=~ta,n&=~To,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ge(n),r=1<<t;e[t]=-1,n&=~r}}function Ou(e){if(L&6)throw Error(P(327));Lt();var n=zl(e,0);if(!(n&1))return Ce(e,Z()),null;var t=io(e,n);if(e.tag!==0&&t===2){var r=Ri(e);r!==0&&(n=r,t=as(e,r))}if(t===1)throw t=Gr,tt(e,0),Tn(e,n),Ce(e,Z()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,qn(e,xe,rn),Ce(e,Z()),null}function la(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(Ht=Z()+500,ko&&Wn())}}function at(e){In!==null&&In.tag===0&&!(L&6)&&Lt();var n=L;L|=1;var t=Ue.transition,r=F;try{if(Ue.transition=null,F=1,e)return e()}finally{F=r,Ue.transition=t,L=n,!(L&6)&&Wn()}}function oa(){Ee=Nt.current,G(Nt)}function tt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pm(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(Fs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:zt(),G(we),G(pe),Ks();break;case 5:Js(r);break;case 4:zt();break;case 13:G(J);break;case 19:G(J);break;case 10:Ws(r.type._context);break;case 22:case 23:oa()}t=t.return}if(oe=e,ee=e=Mn(e.current,null),se=Ee=n,te=0,Gr=null,ta=To=st=0,xe=Pr=null,Qn!==null){for(n=0;n<Qn.length;n++)if(t=Qn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}Qn=null}return e}function Sp(e,n){do{var t=ee;try{if(zs(),Dl.current=to,no){for(var r=K.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}no=!1}if(it=0,le=ne=K=null,kr=!1,zr=0,na.current=null,t===null||t.return===null){te=1,Gr=n,ee=null;break}e:{var o=e,i=t.return,s=t,a=n;if(n=se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=ku(i);if(y!==null){y.flags&=-257,Cu(y,i,s,o,n),y.mode&1&&wu(o,u,n),n=y,a=u;var v=n.updateQueue;if(v===null){var S=new Set;S.add(a),n.updateQueue=S}else v.add(a);break e}else{if(!(n&1)){wu(o,u,n),ia();break e}a=Error(P(426))}}else if(V&&s.mode&1){var C=ku(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Cu(C,i,s,o,n),Bs(Wt(a,s));break e}}o=a=Wt(a,s),te!==4&&(te=2),Pr===null?Pr=[o]:Pr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=rp(o,a,n);mu(o,g);break e;case 1:s=a;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(On===null||!On.has(h)))){o.flags|=65536,n&=-n,o.lanes|=n;var x=lp(o,s,n);mu(o,x);break e}}o=o.return}while(o!==null)}Cp(t)}catch(w){n=w,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function wp(){var e=ro.current;return ro.current=to,e===null?to:e}function ia(){(te===0||te===3||te===2)&&(te=4),oe===null||!(st&268435455)&&!(To&268435455)||Tn(oe,se)}function io(e,n){var t=L;L|=2;var r=wp();(oe!==e||se!==n)&&(rn=null,tt(e,n));do try{Mm();break}catch(l){Sp(e,l)}while(!0);if(zs(),L=t,ro.current=r,ee!==null)throw Error(P(261));return oe=null,se=0,te}function Mm(){for(;ee!==null;)kp(ee)}function Um(){for(;ee!==null&&!uh();)kp(ee)}function kp(e){var n=Ep(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,n===null?Cp(e):ee=n,na.current=null}function Cp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Am(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,ee=null;return}}else if(t=Nm(t,n,Ee),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);te===0&&(te=5)}function qn(e,n,t){var r=F,l=Ue.transition;try{Ue.transition=null,F=1,Fm(e,n,t,r)}finally{Ue.transition=l,F=r}return null}function Fm(e,n,t,r){do Lt();while(In!==null);if(L&6)throw Error(P(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(xh(e,o),e===oe&&(ee=oe=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Sl||(Sl=!0,Tp($l,function(){return Lt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var i=F;F=1;var s=L;L|=4,na.current=null,jm(e,t),vp(t,e),om(Bi),Wl=!!Fi,Bi=Fi=null,e.current=t,Rm(t),ch(),L=s,F=i,Ue.transition=o}else e.current=t;if(Sl&&(Sl=!1,In=e,oo=l),o=e.pendingLanes,o===0&&(On=null),fh(t.stateNode),Ce(e,Z()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(lo)throw lo=!1,e=is,is=null,e;return oo&1&&e.tag!==0&&Lt(),o=e.pendingLanes,o&1?e===ss?Er++:(Er=0,ss=e):Er=0,Wn(),null}function Lt(){if(In!==null){var e=rd(oo),n=Ue.transition,t=F;try{if(Ue.transition=null,F=16>e?16:e,In===null)var r=!1;else{if(e=In,In=null,oo=0,L&6)throw Error(P(331));var l=L;for(L|=4,b=e.current;b!==null;){var o=b,i=o.child;if(b.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(b=u;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:Cr(8,d,o)}var p=d.child;if(p!==null)p.return=d,b=p;else for(;b!==null;){d=b;var m=d.sibling,y=d.return;if(hp(d),d===u){b=null;break}if(m!==null){m.return=y,b=m;break}b=y}}}var v=o.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var C=S.sibling;S.sibling=null,S=C}while(S!==null)}}b=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,b=i;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,b=g;break e}b=o.return}}var c=e.current;for(b=c;b!==null;){i=b;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,b=h;else e:for(i=c;b!==null;){if(s=b,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Eo(9,s)}}catch(w){Q(s,s.return,w)}if(s===i){b=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,b=x;break e}b=s.return}}if(L=l,Wn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(vo,e)}catch{}r=!0}return r}finally{F=t,Ue.transition=n}}return!1}function Lu(e,n,t){n=Wt(t,n),n=rp(e,n,1),e=Rn(e,n,1),n=ge(),e!==null&&(Xr(e,1,n),Ce(e,n))}function Q(e,n,t){if(e.tag===3)Lu(e,e,t);else for(;n!==null;){if(n.tag===3){Lu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){e=Wt(t,e),e=lp(n,e,1),n=Rn(n,e,1),e=ge(),n!==null&&(Xr(n,1,e),Ce(n,e));break}}n=n.return}}function Bm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,oe===e&&(se&t)===t&&(te===4||te===3&&(se&130023424)===se&&500>Z()-ra?tt(e,0):ta|=t),Ce(e,n)}function Pp(e,n){n===0&&(e.mode&1?(n=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):n=1);var t=ge();e=pn(e,n),e!==null&&(Xr(e,n,t),Ce(e,t))}function $m(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Pp(e,t)}function zm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),Pp(e,t)}var Ep;Ep=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||we.current)Se=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Se=!1,_m(e,n,t);Se=!!(e.flags&131072)}else Se=!1,V&&n.flags&1048576&&_d(n,Xl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Rl(e,n),e=n.pendingProps;var l=Ft(n,pe.current);Ot(n,t),l=Xs(null,n,r,e,l,t);var o=Qs();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ke(r)?(o=!0,Kl(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Gs(n),l.updater=Po,n.stateNode=l,l._reactInternals=n,qi(n,r,e,t),n=Yi(null,n,r,!0,o,t)):(n.tag=0,V&&o&&Us(n),fe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Rl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Hm(r),e=ze(r,e),l){case 0:n=Qi(null,n,r,e,t);break e;case 1:n=Tu(null,n,r,e,t);break e;case 11:n=Pu(null,n,r,e,t);break e;case 14:n=Eu(null,n,r,ze(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),Qi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),Tu(e,n,r,l,t);case 3:e:{if(ap(n),e===null)throw Error(P(387));r=n.pendingProps,o=n.memoizedState,l=o.element,Od(e,n),Zl(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=Wt(Error(P(423)),n),n=bu(e,n,r,t,l);break e}else if(r!==l){l=Wt(Error(P(424)),n),n=bu(e,n,r,t,l);break e}else for(Ie=jn(n.stateNode.containerInfo.firstChild),_e=n,V=!0,He=null,t=jd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Bt(),r===l){n=fn(e,n,t);break e}fe(e,n,r,t)}n=n.child}return n;case 5:return Ld(n),e===null&&Vi(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,$i(r,l)?i=null:o!==null&&$i(r,o)&&(n.flags|=32),sp(e,n),fe(e,n,i,t),n.child;case 6:return e===null&&Vi(n),null;case 13:return up(e,n,t);case 4:return Vs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=$t(n,null,r,t):fe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),Pu(e,n,r,l,t);case 7:return fe(e,n,n.pendingProps,t),n.child;case 8:return fe(e,n,n.pendingProps.children,t),n.child;case 12:return fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,W(Ql,r._currentValue),r._currentValue=i,o!==null)if(Je(o.value,i)){if(o.children===l.children&&!we.current){n=fn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=un(-1,t&-t),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ji(o.return,t,n),s.lanes|=t;break}a=a.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(P(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Ji(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}fe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Ot(n,t),l=Fe(l),r=r(l),n.flags|=1,fe(e,n,r,t),n.child;case 14:return r=n.type,l=ze(r,n.pendingProps),l=ze(r.type,l),Eu(e,n,r,l,t);case 15:return op(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),Rl(e,n),n.tag=1,ke(r)?(e=!0,Kl(n)):e=!1,Ot(n,t),tp(n,r,l),qi(n,r,l,t),Yi(null,n,r,!0,e,t);case 19:return cp(e,n,t);case 22:return ip(e,n,t)}throw Error(P(156,n.tag))};function Tp(e,n){return Zc(e,n)}function Wm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,t,r){return new Wm(e,n,t,r)}function sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hm(e){if(typeof e=="function")return sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ts)return 11;if(e===bs)return 14}return 2}function Mn(e,n){var t=e.alternate;return t===null?(t=Me(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ml(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")sa(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case St:return rt(t.children,l,o,n);case Es:i=8,l|=8;break;case xi:return e=Me(12,t,n,l|2),e.elementType=xi,e.lanes=o,e;case Si:return e=Me(13,t,n,l),e.elementType=Si,e.lanes=o,e;case wi:return e=Me(19,t,n,l),e.elementType=wi,e.lanes=o,e;case Lc:return bo(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rc:i=10;break e;case Oc:i=9;break e;case Ts:i=11;break e;case bs:i=14;break e;case Cn:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Me(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function rt(e,n,t,r){return e=Me(7,e,r,n),e.lanes=t,e}function bo(e,n,t,r){return e=Me(22,e,r,n),e.elementType=Lc,e.lanes=t,e.stateNode={isHidden:!1},e}function di(e,n,t){return e=Me(6,e,null,n),e.lanes=t,e}function pi(e,n,t){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Gm(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function aa(e,n,t,r,l,o,i,s,a){return e=new Gm(e,n,t,s,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Me(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gs(o),e}function Vm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function bp(e){if(!e)return Bn;e=e._reactInternals;e:{if(dt(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(ke(t))return bd(e,t,n)}return n}function Ip(e,n,t,r,l,o,i,s,a){return e=aa(t,r,!0,e,l,o,i,s,a),e.context=bp(null),t=e.current,r=ge(),l=Ln(t),o=un(r,l),o.callback=n??null,Rn(t,o,l),e.current.lanes=l,Xr(e,l,r),Ce(e,r),e}function Io(e,n,t,r){var l=n.current,o=ge(),i=Ln(l);return t=bp(t),n.context===null?n.context=t:n.pendingContext=t,n=un(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Rn(l,n,i),e!==null&&(Ve(e,l,i,o),Al(e,l,i)),i}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ua(e,n){Mu(e,n),(e=e.alternate)&&Mu(e,n)}function Jm(){return null}var _p=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}_o.prototype.render=ca.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Io(e,n,null,null)};_o.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;at(function(){Io(null,e,null,null)}),n[dn]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var n=id();e={blockedOn:null,target:e,priority:n};for(var t=0;t<En.length&&n!==0&&n<En[t].priority;t++);En.splice(t,0,e),t===0&&ad(e)}};function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function Km(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var u=so(i);o.call(u)}}var i=Ip(n,r,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=i,e[dn]=i.current,Mr(e.nodeType===8?e.parentNode:e),at(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=so(a);s.call(u)}}var a=aa(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=a,e[dn]=a.current,Mr(e.nodeType===8?e.parentNode:e),at(function(){Io(n,a,t,r)}),a}function Ao(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=so(i);s.call(a)}}Io(n,i,e,l)}else i=Km(t,n,e,l,r);return so(i)}ld=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=mr(n.pendingLanes);t!==0&&(Ns(n,t|1),Ce(n,Z()),!(L&6)&&(Ht=Z()+500,Wn()))}break;case 13:at(function(){var r=pn(e,1);if(r!==null){var l=ge();Ve(r,e,1,l)}}),ua(e,1)}};As=function(e){if(e.tag===13){var n=pn(e,134217728);if(n!==null){var t=ge();Ve(n,e,134217728,t)}ua(e,134217728)}};od=function(e){if(e.tag===13){var n=Ln(e),t=pn(e,n);if(t!==null){var r=ge();Ve(t,e,n,r)}ua(e,n)}};id=function(){return F};sd=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};Ai=function(e,n,t){switch(n){case"input":if(Pi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=wo(r);if(!l)throw Error(P(90));Uc(r),Pi(r,l)}}}break;case"textarea":Bc(e,t);break;case"select":n=t.value,n!=null&&At(e,!!t.multiple,n,!1)}};Jc=la;Kc=at;var qm={usingClientEntryPoint:!1,Events:[Yr,Pt,wo,Gc,Vc,la]},or={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xm={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qc(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||Jm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{vo=wl.inject(Xm),en=wl}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm;Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!da(n))throw Error(P(200));return Vm(e,n,null,t)};Ae.createRoot=function(e,n){if(!da(e))throw Error(P(299));var t=!1,r="",l=_p;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=aa(e,1,!1,null,null,t,!1,r,l),e[dn]=n.current,Mr(e.nodeType===8?e.parentNode:e),new ca(n)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Qc(n),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return at(e)};Ae.hydrate=function(e,n,t){if(!No(n))throw Error(P(200));return Ao(null,e,n,!0,t)};Ae.hydrateRoot=function(e,n,t){if(!da(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=_p;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Ip(n,null,e,1,t??null,l,!1,o,i),e[dn]=n.current,Mr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new _o(n)};Ae.render=function(e,n,t){if(!No(n))throw Error(P(200));return Ao(null,e,n,!1,t)};Ae.unmountComponentAtNode=function(e){if(!No(e))throw Error(P(40));return e._reactRootContainer?(at(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};Ae.unstable_batchedUpdates=la;Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!No(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ao(e,n,t,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function Np(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Np)}catch(e){console.error(e)}}Np(),Nc.exports=Ae;var Qm=Nc.exports,Ap,Fu=Qm;Ap=Fu.createRoot,Fu.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Vr.apply(null,arguments)}var _n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_n||(_n={}));const Bu="popstate";function Ym(e){e===void 0&&(e={});function n(l,o){let{pathname:i="/",search:s="",hash:a=""}=pt(l.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),cs("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(l,o){let i=l.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let a=l.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof o=="string"?o:ao(o))}function r(l,o){pa(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return eg(n,t,r,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function pa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Zm(){return Math.random().toString(36).substr(2,8)}function $u(e,n){return{usr:e.state,key:e.key,idx:n}}function cs(e,n,t,r){return t===void 0&&(t=null),Vr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?pt(n):n,{state:t,key:n&&n.key||r||Zm()})}function ao(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function pt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function eg(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,s=_n.Pop,a=null,u=d();u==null&&(u=0,i.replaceState(Vr({},i.state,{idx:u}),""));function d(){return(i.state||{idx:null}).idx}function p(){s=_n.Pop;let C=d(),g=C==null?null:C-u;u=C,a&&a({action:s,location:S.location,delta:g})}function m(C,g){s=_n.Push;let c=cs(S.location,C,g);t&&t(c,C),u=d()+1;let h=$u(c,u),x=S.createHref(c);try{i.pushState(h,"",x)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;l.location.assign(x)}o&&a&&a({action:s,location:S.location,delta:1})}function y(C,g){s=_n.Replace;let c=cs(S.location,C,g);t&&t(c,C),u=d();let h=$u(c,u),x=S.createHref(c);i.replaceState(h,"",x),o&&a&&a({action:s,location:S.location,delta:0})}function v(C){let g=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof C=="string"?C:ao(C);return c=c.replace(/ $/,"%20"),q(g,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,g)}let S={get action(){return s},get location(){return e(l,i)},listen(C){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(Bu,p),a=C,()=>{l.removeEventListener(Bu,p),a=null}},createHref(C){return n(l,C)},createURL:v,encodeLocation(C){let g=v(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:y,go(C){return i.go(C)}};return S}var zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zu||(zu={}));function ng(e,n,t){return t===void 0&&(t="/"),tg(e,n,t)}function tg(e,n,t,r){let l=typeof n=="string"?pt(n):n,o=Gt(l.pathname||"/",t);if(o==null)return null;let i=Dp(e);rg(i);let s=null,a=hg(o);for(let u=0;s==null&&u<i.length;++u)s=pg(i[u],a);return s}function Dp(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(o,i,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(q(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Un([r,a.relativePath]),d=t.concat(a);o.children&&o.children.length>0&&(q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Dp(o.children,n,d,u)),!(o.path==null&&!o.index)&&n.push({path:u,score:cg(u,o.index),routesMeta:d})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))l(o,i);else for(let a of jp(o.path))l(o,i,a)}),n}function jp(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=jp(r.join("/")),s=[];return s.push(...i.map(a=>a===""?o:[o,a].join("/"))),l&&s.push(...i),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function rg(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:dg(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const lg=/^:[\w-]+$/,og=3,ig=2,sg=1,ag=10,ug=-2,Wu=e=>e==="*";function cg(e,n){let t=e.split("/"),r=t.length;return t.some(Wu)&&(r+=ug),n&&(r+=ig),t.filter(l=>!Wu(l)).reduce((l,o)=>l+(lg.test(o)?og:o===""?sg:ag),r)}function dg(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function pg(e,n,t){let{routesMeta:r}=e,l={},o="/",i=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=o==="/"?n:n.slice(o.length)||"/",p=ds({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),m=a.route;if(!p)return null;Object.assign(l,p.params),i.push({params:l,pathname:Un([o,p.pathname]),pathnameBase:vg(Un([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=Un([o,p.pathnameBase]))}return i}function ds(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=fg(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let S=s[p]||"";i=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const v=s[p];return y&&!v?u[m]=void 0:u[m]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function fg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),pa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function hg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return pa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Gt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function mg(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?pt(e):e,o;return t?(t=Rp(t),t.startsWith("/")?o=Hu(t.substring(1),"/"):o=Hu(t,n)):o=n,{pathname:o,search:yg(r),hash:xg(l)}}function Hu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function fi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function fa(e,n){let t=gg(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ha(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=pt(e):(l=Vr({},e),q(!l.pathname||!l.pathname.includes("?"),fi("?","pathname","search",l)),q(!l.pathname||!l.pathname.includes("#"),fi("#","pathname","hash",l)),q(!l.search||!l.search.includes("#"),fi("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,s;if(i==null)s=t;else{let p=n.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),p-=1;l.pathname=m.join("/")}s=p>=0?n[p]:"/"}let a=mg(l,s),u=i&&i!=="/"&&i.endsWith("/"),d=(o||i===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Rp=e=>e.replace(/\/\/+/g,"/"),Un=e=>Rp(e.join("/")),vg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Op=["post","put","patch","delete"];new Set(Op);const wg=["get",...Op];new Set(wg);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Jr.apply(null,arguments)}const Do=k.createContext(null),Lp=k.createContext(null),gn=k.createContext(null),jo=k.createContext(null),vn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Mp=k.createContext(null);function kg(e,n){let{relative:t}=n===void 0?{}:n;qt()||q(!1);let{basename:r,navigator:l}=k.useContext(gn),{hash:o,pathname:i,search:s}=Oo(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:Un([r,i])),l.createHref({pathname:a,search:s,hash:o})}function qt(){return k.useContext(jo)!=null}function ft(){return qt()||q(!1),k.useContext(jo).location}function Up(e){k.useContext(gn).static||k.useLayoutEffect(e)}function Ro(){let{isDataRoute:e}=k.useContext(vn);return e?Og():Cg()}function Cg(){qt()||q(!1);let e=k.useContext(Do),{basename:n,future:t,navigator:r}=k.useContext(gn),{matches:l}=k.useContext(vn),{pathname:o}=ft(),i=JSON.stringify(fa(l,t.v7_relativeSplatPath)),s=k.useRef(!1);return Up(()=>{s.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=ha(u,JSON.parse(i),o,d.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:Un([n,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[n,r,i,o,e])}function Fp(){let{matches:e}=k.useContext(vn),n=e[e.length-1];return n?n.params:{}}function Oo(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=k.useContext(gn),{matches:l}=k.useContext(vn),{pathname:o}=ft(),i=JSON.stringify(fa(l,r.v7_relativeSplatPath));return k.useMemo(()=>ha(e,JSON.parse(i),o,t==="path"),[e,i,o,t])}function Pg(e,n){return Eg(e,n)}function Eg(e,n,t,r){qt()||q(!1);let{navigator:l}=k.useContext(gn),{matches:o}=k.useContext(vn),i=o[o.length-1],s=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let u=ft(),d;if(n){var p;let C=typeof n=="string"?pt(n):n;a==="/"||(p=C.pathname)!=null&&p.startsWith(a)||q(!1),d=C}else d=u;let m=d.pathname||"/",y=m;if(a!=="/"){let C=a.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=ng(e,{pathname:y}),S=Ng(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Un([a,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:Un([a,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,t,r);return n&&S?k.createElement(jo.Provider,{value:{location:Jr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_n.Pop}},S):S}function Tg(){let e=Rg(),n=Sg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},n),t?k.createElement("pre",{style:l},t):null,null)}const bg=k.createElement(Tg,null);class Ig extends k.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?k.createElement(vn.Provider,{value:this.props.routeContext},k.createElement(Mp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _g(e){let{routeContext:n,match:t,children:r}=e,l=k.useContext(Do);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(vn.Provider,{value:n},r)}function Ng(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,s=(l=t)==null?void 0:l.errors;if(s!=null){let d=i.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||q(!1),i=i.slice(0,Math.min(i.length,d+1))}let a=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<i.length;d++){let p=i[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:y}=t,v=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||v){a=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((d,p,m)=>{let y,v=!1,S=null,C=null;t&&(y=s&&p.route.id?s[p.route.id]:void 0,S=p.route.errorElement||bg,a&&(u<0&&m===0?(Lg("route-fallback"),v=!0,C=null):u===m&&(v=!0,C=p.route.hydrateFallbackElement||null)));let g=n.concat(i.slice(0,m+1)),c=()=>{let h;return y?h=S:v?h=C:p.route.Component?h=k.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,k.createElement(_g,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:h})};return t&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?k.createElement(Ig,{location:t.location,revalidation:t.revalidation,component:S,error:y,children:c(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):c()},null)}var Bp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bp||{}),$p=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($p||{});function Ag(e){let n=k.useContext(Do);return n||q(!1),n}function Dg(e){let n=k.useContext(Lp);return n||q(!1),n}function jg(e){let n=k.useContext(vn);return n||q(!1),n}function zp(e){let n=jg(),t=n.matches[n.matches.length-1];return t.route.id||q(!1),t.route.id}function Rg(){var e;let n=k.useContext(Mp),t=Dg(),r=zp();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Og(){let{router:e}=Ag(Bp.UseNavigateStable),n=zp($p.UseNavigateStable),t=k.useRef(!1);return Up(()=>{t.current=!0}),k.useCallback(function(l,o){o===void 0&&(o={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Jr({fromRouteId:n},o)))},[e,n])}const Gu={};function Lg(e,n,t){Gu[e]||(Gu[e]=!0)}function Mg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ug(e){let{to:n,replace:t,state:r,relative:l}=e;qt()||q(!1);let{future:o,static:i}=k.useContext(gn),{matches:s}=k.useContext(vn),{pathname:a}=ft(),u=Ro(),d=ha(n,fa(s,o.v7_relativeSplatPath),a,l==="path"),p=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(p),{replace:t,state:r,relative:l}),[u,p,l,t,r]),null}function wn(e){q(!1)}function Fg(e){let{basename:n="/",children:t=null,location:r,navigationType:l=_n.Pop,navigator:o,static:i=!1,future:s}=e;qt()&&q(!1);let a=n.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:a,navigator:o,static:i,future:Jr({v7_relativeSplatPath:!1},s)}),[a,s,o,i]);typeof r=="string"&&(r=pt(r));let{pathname:d="/",search:p="",hash:m="",state:y=null,key:v="default"}=r,S=k.useMemo(()=>{let C=Gt(d,a);return C==null?null:{location:{pathname:C,search:p,hash:m,state:y,key:v},navigationType:l}},[a,d,p,m,y,v,l]);return S==null?null:k.createElement(gn.Provider,{value:u},k.createElement(jo.Provider,{children:t,value:S}))}function Bg(e){let{children:n,location:t}=e;return Pg(ps(n),t)}new Promise(()=>{});function ps(e,n){n===void 0&&(n=[]);let t=[];return k.Children.forEach(e,(r,l)=>{if(!k.isValidElement(r))return;let o=[...n,l];if(r.type===k.Fragment){t.push.apply(t,ps(r.props.children,o));return}r.type!==wn&&q(!1),!r.props.index||!r.props.children||q(!1);let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ps(r.props.children,o)),t.push(i)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},uo.apply(null,arguments)}function Wp(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function $g(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zg(e,n){return e.button===0&&(!n||n==="_self")&&!$g(e)}function fs(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,t)=>{let r=e[t];return n.concat(Array.isArray(r)?r.map(l=>[t,l]):[[t,r]])},[]))}function Wg(e,n){let t=fs(e);return n&&n.forEach((r,l)=>{t.has(l)||n.getAll(l).forEach(o=>{t.append(l,o)})}),t}const Hg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Gg=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Vg="6";try{window.__reactRouterVersion=Vg}catch{}const Jg=k.createContext({isTransitioning:!1}),Kg="startTransition",Vu=Bf[Kg];function qg(e){let{basename:n,children:t,future:r,window:l}=e,o=k.useRef();o.current==null&&(o.current=Ym({window:l,v5Compat:!0}));let i=o.current,[s,a]=k.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},d=k.useCallback(p=>{u&&Vu?Vu(()=>a(p)):a(p)},[a,u]);return k.useLayoutEffect(()=>i.listen(d),[i,d]),k.useEffect(()=>Mg(r),[r]),k.createElement(Fg,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:i,future:r})}const Xg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tn=k.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:s,target:a,to:u,preventScrollReset:d,viewTransition:p}=n,m=Wp(n,Hg),{basename:y}=k.useContext(gn),v,S=!1;if(typeof u=="string"&&Qg.test(u)&&(v=u,Xg))try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),w=Gt(x.pathname,y);x.origin===h.origin&&w!=null?u=w+x.search+x.hash:S=!0}catch{}let C=kg(u,{relative:l}),g=e0(u,{replace:i,state:s,target:a,preventScrollReset:d,relative:l,viewTransition:p});function c(h){r&&r(h),h.defaultPrevented||g(h)}return k.createElement("a",uo({},m,{href:v||C,onClick:S||o?r:c,ref:t,target:a}))}),Yg=k.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:l=!1,className:o="",end:i=!1,style:s,to:a,viewTransition:u,children:d}=n,p=Wp(n,Gg),m=Oo(a,{relative:p.relative}),y=ft(),v=k.useContext(Lp),{navigator:S,basename:C}=k.useContext(gn),g=v!=null&&t0(m)&&u===!0,c=S.encodeLocation?S.encodeLocation(m).pathname:m.pathname,h=y.pathname,x=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(h=h.toLowerCase(),x=x?x.toLowerCase():null,c=c.toLowerCase()),x&&C&&(x=Gt(x,C)||x);const w=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let E=h===c||!i&&h.startsWith(c)&&h.charAt(w)==="/",T=x!=null&&(x===c||!i&&x.startsWith(c)&&x.charAt(c.length)==="/"),I={isActive:E,isPending:T,isTransitioning:g},M=E?r:void 0,A;typeof o=="function"?A=o(I):A=[o,E?"active":null,T?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let R=typeof s=="function"?s(I):s;return k.createElement(tn,uo({},p,{"aria-current":M,className:A,ref:t,style:R,to:a,viewTransition:u}),typeof d=="function"?d(I):d)});var hs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(hs||(hs={}));var Ju;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ju||(Ju={}));function Zg(e){let n=k.useContext(Do);return n||q(!1),n}function e0(e,n){let{target:t,replace:r,state:l,preventScrollReset:o,relative:i,viewTransition:s}=n===void 0?{}:n,a=Ro(),u=ft(),d=Oo(e,{relative:i});return k.useCallback(p=>{if(zg(p,t)){p.preventDefault();let m=r!==void 0?r:ao(u)===ao(d);a(e,{replace:m,state:l,preventScrollReset:o,relative:i,viewTransition:s})}},[u,a,d,r,l,t,e,o,i,s])}function n0(e){let n=k.useRef(fs(e)),t=k.useRef(!1),r=ft(),l=k.useMemo(()=>Wg(r.search,t.current?null:n.current),[r.search]),o=Ro(),i=k.useCallback((s,a)=>{const u=fs(typeof s=="function"?s(l):s);t.current=!0,o("?"+u,a)},[o,l]);return[l,i]}function t0(e,n){n===void 0&&(n={});let t=k.useContext(Jg);t==null&&q(!1);let{basename:r}=Zg(hs.useViewTransitionState),l=Oo(e,{relative:n.relative});if(!t.isTransitioning)return!1;let o=Gt(t.currentLocation.pathname,r)||t.currentLocation.pathname,i=Gt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return ds(l.pathname,i)!=null||ds(l.pathname,o)!=null}const Hp="theme";function r0(){try{const e=localStorage.getItem(Hp);return e==="light"||e==="dark"?e:null}catch{return null}}function l0(e){try{localStorage.setItem(Hp,e)}catch{}}function o0(e){return e??"dark"}function i0(e){document.documentElement.classList.toggle("dark",e==="dark")}const s0="ShinHeeYoun",a0="ShinHeeYoun.github.io",Gp="main",Vp=`https://api.github.com/repos/${s0}/${a0}`;function u0(e){return`${Vp}/contents/${e}`}function c0(e){const n=new TextEncoder().encode(e);let t="";for(const r of n)t+=String.fromCharCode(r);return btoa(t)}function d0(e){const n=atob(e.replace(/\n/g,"")),t=Uint8Array.from(n,r=>r.charCodeAt(0));return new TextDecoder().decode(t)}async function ma(e,n,t){const r=await fetch(u0(e),{...t,headers:{Authorization:`Bearer ${n}`,Accept:"application/vnd.github+json",...t.headers}});if(!r.ok){const l=await r.json().catch(()=>({})),o=typeof l.message=="string"?l.message:r.statusText;throw new Error(`GitHub API error (${r.status}): ${o}`)}return r}async function Ku(e,n){const r=await(await ma(e,n,{method:"GET"})).json();return{content:d0(r.content),sha:r.sha}}async function p0(e,n,t,r,l){await ma(e,r,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,content:c0(n),branch:Gp,...l?{sha:l}:{}})})}async function f0(e,n,t,r){await ma(e,r,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:n,sha:t,branch:Gp})})}async function qu(e,n=fetch){var r;const t=e.trim();if(!t)return"invalid";try{const l=await n(Vp,{headers:{Authorization:`Bearer ${t}`,Accept:"application/vnd.github+json"}});return l.status===401?"invalid":l.ok?((r=(await l.json().catch(()=>({}))).permissions)==null?void 0:r.push)===!1?"no-write":"ok":"error"}catch{return"error"}}const ga="gh_pat";function h0(){try{return localStorage.getItem(ga)??""}catch{return""}}function m0(e){try{localStorage.setItem(ga,e)}catch{}}function Xu(){try{localStorage.removeItem(ga)}catch{}}const Jp=k.createContext(null);function g0({children:e}){const[n]=k.useState(h0),[t,r]=k.useState(n?"checking":"locked"),[l,o]=k.useState("");k.useEffect(()=>{if(!n)return;let u=!1;return qu(n).then(d=>{u||(d==="ok"?(o(n),r("admin")):(d==="invalid"&&Xu(),r("locked")))}),()=>{u=!0}},[n]);const i=k.useCallback(async u=>{const d=await qu(u);if(d==="ok"){const p=u.trim();m0(p),o(p),r("admin")}return d},[]),s=k.useCallback(()=>{Xu(),o(""),r("locked")},[]),a=k.useMemo(()=>({status:t,pat:l,login:i,logout:s}),[t,l,i,s]);return f.jsx(Jp.Provider,{value:a,children:e})}function Lo(){const e=k.useContext(Jp);if(!e)throw new Error("useAdmin must be used inside AdminProvider");return e}const v0={invalid:"올바른 토큰이 아닙니다.","no-write":"이 저장소에 쓸 수 있는 권한이 없는 토큰입니다. Contents: Read and write 권한이 필요해요.",error:"GitHub에 연결하지 못했습니다. 잠시 후 다시 시도해 주세요."};function y0(){const{status:e,login:n,logout:t}=Lo(),r=Ro(),[l,o]=k.useState(!1),[i,s]=k.useState(""),[a,u]=k.useState(null),[d,p]=k.useState(!1),m=k.useRef(null),y=k.useRef(null);k.useEffect(()=>{if(!l)return;const g=h=>{h.key==="Escape"&&o(!1)},c=h=>{m.current&&!m.current.contains(h.target)&&o(!1)};return document.addEventListener("keydown",g),document.addEventListener("mousedown",c),()=>{document.removeEventListener("keydown",g),document.removeEventListener("mousedown",c)}},[l]),k.useEffect(()=>{var g;l&&e!=="admin"&&((g=y.current)==null||g.focus())},[l,e]);async function v(g){g.preventDefault(),p(!0),u(null);const c=await n(i);p(!1),c==="ok"?(s(""),o(!1),r("/write")):u(v0[c])}function S(){t(),o(!1)}const C=e==="admin";return f.jsxs("div",{ref:m,className:"relative",children:[f.jsx("button",{type:"button",onClick:()=>o(g=>!g),"aria-expanded":l,"aria-haspopup":"dialog",className:`rounded-md border px-2 py-1 text-xs tracking-wide hover:border-accent ${C?"border-accent text-accent":"border-border text-muted hover:text-foreground"}`,children:"ADMIN"}),l&&f.jsx("div",{role:"dialog","aria-label":"관리자",className:"absolute right-0 top-full z-50 mt-2 w-72 max-w-[calc(100vw-3rem)] rounded-md border border-border bg-surface p-4 shadow-lg",children:C?f.jsxs("div",{className:"space-y-3",children:[f.jsx("p",{className:"text-sm",children:"관리자로 로그인되어 있습니다."}),f.jsx("button",{type:"button",onClick:S,className:"rounded-md border border-border px-3 py-1.5 text-sm hover:border-accent",children:"로그아웃"})]}):f.jsxs("form",{onSubmit:v,className:"space-y-3",children:[f.jsx("label",{htmlFor:"admin-pat",className:"block text-sm font-medium",children:"Personal Access Token"}),f.jsx("input",{id:"admin-pat",ref:y,type:"password",value:i,onChange:g=>s(g.target.value),autoComplete:"off",spellCheck:!1,className:"w-full rounded-md border border-border bg-background p-2 text-sm text-foreground outline-none focus:border-accent"}),f.jsx("button",{type:"submit",disabled:d||!i.trim(),className:"rounded-md bg-accent px-3 py-1.5 text-sm text-background transition-colors hover:bg-accent-hover disabled:opacity-50",children:d?"확인 중...":"확인"}),a&&f.jsx("p",{role:"alert",className:"text-xs text-red-600 dark:text-red-400",children:a})]})})]})}const Qu=[{to:"/",label:"Home",end:!0},{to:"/blog",label:"Blog",end:!1},{to:"/tools",label:"Tools",end:!1},{to:"/about",label:"About",end:!1}],x0={to:"/write",label:"Write",end:!1};function S0(){const{status:e}=Lo(),n=e==="admin"?[...Qu,x0]:Qu,[t,r]=k.useState(()=>o0(r0()));k.useEffect(()=>{i0(t)},[t]);function l(){const o=t==="dark"?"light":"dark";r(o),l0(o)}return f.jsx("nav",{className:"sticky top-0 z-50 border-b border-border bg-background font-mono text-sm",children:f.jsxs("div",{className:"flex w-full flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 md:px-12",children:[f.jsx(tn,{to:"/",className:"mr-2 font-bold text-accent",children:"~/shinheeyoun"}),n.map(o=>f.jsx(Yg,{to:o.to,end:o.end,className:({isActive:i})=>i?"text-accent":"text-muted transition-colors hover:text-foreground",children:({isActive:i})=>f.jsxs(f.Fragment,{children:[f.jsx("span",{className:i?"":"invisible","aria-hidden":"true",children:">"})," ",o.label]})},o.to)),f.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[f.jsx(y0,{}),f.jsx("button",{type:"button",onClick:l,"aria-label":"테마 전환",className:"rounded-md border border-border px-2 py-1 text-sm hover:border-accent",children:t==="dark"?"🌙":"☀️"})]})]})})}function w0({children:e}){const{status:n}=Lo();return n==="checking"?f.jsx("main",{className:"w-full px-6 py-12 md:px-12",children:f.jsx("p",{className:"font-mono text-sm text-muted",children:"관리자 확인 중..."})}):n==="locked"?f.jsx(Ug,{to:"/",replace:!0}):f.jsx(f.Fragment,{children:e})}function k0(){return f.jsxs("section",{className:"py-10 font-mono",children:[f.jsx("p",{className:"text-sm text-muted",children:"$ whoami"}),f.jsxs("h1",{className:"mt-2 text-4xl font-bold md:text-5xl",children:["ShinHeeYoun",f.jsx("span",{className:"cursor-blink text-accent","aria-hidden":"true",children:"_"})]}),f.jsx("p",{className:"mt-3 text-lg text-foreground/90",children:"개발 연습 페이지"}),f.jsx("p",{className:"mt-2 max-w-xl font-sans text-muted",children:"github homepage with Claude"}),f.jsx("div",{className:"mt-6 flex flex-wrap gap-3 text-sm",children:f.jsx(tn,{to:"/blog",className:"rounded border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-background",children:"read blog"})})]})}const C0=`---
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

`,P0=`---
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

`,E0='---\ntitle: Tomcat 10 (Jakarta EE) 라이브러리 마이그레이션 도구 설명서\ndate: 2026-10-06\n---\n# Tomcat 10 (Jakarta EE) 라이브러리 마이그레이션 도구 설명서\n\n## 1. 개요\n\n### 1.1 목적\nTomcat 9 이하 환경에서 사용하던 `javax.*` 기반 라이브러리(jar)를 Tomcat 10 이상에서 사용하는 `jakarta.*` 기반으로 변환한다. 이 문서는 변환 도구의 사용 방법과 동작 방식, 그리고 변환 결과를 Tomcat 10에 적용하고 설치 상태를 확인하는 절차까지 정리한다.\n\n### 1.2 변환이 필요한 이유\nTomcat 10부터 Java EE가 Jakarta EE로 이전되면서 패키지 이름이 `javax.servlet.*` 에서 `jakarta.servlet.*` 로 바뀌었다. 기존 jar가 `javax.*` 를 참조하면 Tomcat 10에서 `ClassNotFoundException`, `NoClassDefFoundError` 가 발생한다.\n\n### 1.3 문서 범위\n| 구분 | 내용 | 도구가 수행하는지 |\n|---|---|---|\n| 계정 준비 | Tomcat 실행/작업용 계정 생성 | 아니오 (수동) |\n| 환경 준비 | Java 설치 확인 | 아니오 (수동) |\n| 라이브러리 변환 | jar 내부 `javax` 를 `jakarta` 로 변환 | 예 |\n| 결과 확인 | 로그 및 파일 점검 | 부분 (로그 생성) |\n| Tomcat 반영 | 변환된 jar 배포 | 아니오 (수동) |\n| 설치 확인 | Tomcat 버전 및 기동 확인 | 아니오 (수동) |\n\n계정 생성, Java 확인, Tomcat 반영과 설치 확인은 아래 도구에 포함되어 있지 않으며, 이 문서에서 절차만 안내한다.\n\n---\n\n## 2. 구성 파일\n\n작업 폴더: `D:\\storageD\\110_2) TOMCAT_10 MIGRATION 방법\\`\n\n| 파일 | 역할 |\n|---|---|\n| `Run_Migration_Tool.bat` | 실행 진입점. PowerShell 스크립트를 호출한다. |\n| `Tomcat_Migration_Tool.ps1` | 폴더 선택과 실행 버튼을 제공하는 GUI. 변환 jar를 호출한다. |\n| `jakartaee-migration-1.0.12-shaded.jar` | 실제 변환을 수행하는 Apache Tomcat Migration Tool for Jakarta EE (1.0.12). 의존 라이브러리가 하나로 묶인(shaded) 실행 가능 jar. |\n| `lib_beforeMig\\` | (예시) 변환 전 라이브러리 폴더 |\n| `lib_migrated\\` | (예시) 변환 후 라이브러리 폴더. `migration_log.txt` 가 함께 생성된다. |\n\n세 파일(`.bat`, `.ps1`, `.jar`)은 반드시 같은 폴더에 있어야 한다.\n\n---\n\n## 3. 사용방법\n\n### 3.1 계정 준비\n1. Tomcat을 실행하고 변환 작업을 수행할 전용 계정을 생성한다. 관리자 권한이 필요 없는 일반 계정을 권장한다.\n2. 해당 계정에 다음 권한을 부여한다.\n   - 작업 폴더(`D:\\storageD\\110_2) TOMCAT_10 MIGRATION 방법\\`): 읽기, 쓰기\n   - Tomcat 설치 폴더: 읽기, 실행 (배포 시 `webapps` 또는 `WEB-INF\\lib` 쓰기)\n3. 생성한 계정으로 로그인한다.\n\n### 3.2 Java 설치 확인\n변환 도구는 `java` 명령을 PATH에서 찾아 실행한다.\n\n1. 명령 프롬프트를 열고 다음을 실행한다.\n\n   ```\n   java -version\n   ```\n\n2. 버전이 출력되면 정상이다. 명령을 찾을 수 없다는 메시지가 나오면 JDK/JRE를 설치하고 `JAVA_HOME` 및 PATH를 설정한다.\n3. 변환 도구는 Java 8 이상에서 동작한다. 배포 대상이 Tomcat 10.1 이면 Java 11 이상이 필요하다.\n\n### 3.3 변환 대상 준비\n1. 변환할 jar 파일들을 하나의 폴더에 모은다. (예: `lib_beforeMig`)\n2. 원본 폴더는 변환 중 수정되지 않지만, 안전을 위해 별도로 백업해 둔다.\n3. 출력 폴더는 원본과 다른 경로로 정한다. (예: `lib_migrated`) 존재하지 않으면 자동 생성된다.\n\n### 3.4 도구 실행\n1. `Run_Migration_Tool.bat` 를 더블클릭한다.\n2. "Tomcat 10 (Jakarta EE) Migration Tool" 창이 열린다.\n3. `Source Lib Directory` 의 `Browse...` 를 눌러 변환 전 폴더를 선택한다.\n4. `Destination Directory` 의 `Browse...` 를 눌러 출력 폴더를 선택한다.\n5. `Run Migration` 버튼을 누른다.\n6. 처리 중에는 버튼이 비활성화된다. 완료되면 완료 메시지 창이 표시되고, 상태 창에 로그가 출력된다.\n\n### 3.5 결과 확인\n1. 출력 폴더의 `migration_log.txt` 를 연다.\n2. 마지막 줄이 `Migration completed successfully in [...] milliseconds` 인지 확인한다.\n3. 로그에 `ERROR`, `Exception`, `Unable` 등 오류 문구가 없는지 검색한다.\n4. 입력 폴더와 출력 폴더의 jar 파일 개수가 같은지 비교한다.\n\n### 3.6 Tomcat 10 반영\n1. Tomcat 10을 중지한다.\n2. 변환된 jar를 애플리케이션의 `WEB-INF\\lib` 또는 Tomcat의 `lib` 폴더에 복사한다. 기존 변환 전 jar는 제거한다.\n3. 애플리케이션 자체의 코드와 설정(`web.xml`, 소스의 `javax.servlet` 등)도 `jakarta` 기준으로 변환되어 있어야 한다. 이 도구는 라이브러리 jar만 변환한다.\n4. 필요하면 `<Tomcat>\\webapps` 대신 `webapps-javaee` 폴더에 두어 Tomcat 자체 변환 기능을 이용하는 방법도 있다. (이 도구와는 별개의 방법이다.)\n\n### 3.7 Tomcat 설치 확인\n1. 버전 확인\n\n   ```\n   <Tomcat 설치경로>\\bin\\version.bat\n   ```\n\n   출력의 `Server version` 이 `Apache Tomcat/10.x.x` 인지 확인한다. `JVM Version` 도 함께 확인한다.\n\n2. 기동\n\n   ```\n   <Tomcat 설치경로>\\bin\\startup.bat\n   ```\n\n3. 기동 로그 확인: `<Tomcat 설치경로>\\logs\\catalina.<날짜>.log` 에 `Server startup in [...] milliseconds` 가 있는지 확인한다.\n4. 접속 확인: 브라우저에서 `http://localhost:8080/` 에 접속하여 Tomcat 기본 페이지 또는 애플리케이션 화면이 표시되는지 확인한다.\n5. 오류 확인: `catalina.<날짜>.log` 와 `localhost.<날짜>.log` 에 `ClassNotFoundException`, `NoClassDefFoundError`, `javax.` 관련 오류가 없는지 확인한다.\n6. 기능 확인: 메일 발송, SOAP(Axis2), 스케줄러(Quartz), 리포트 등 변환된 라이브러리를 사용하는 기능을 실제로 호출해 본다.\n\n---\n\n## 4. 기술 설명\n\n### 4.1 전체 동작 흐름\n\n```\nRun_Migration_Tool.bat\n   └─ powershell -File Tomcat_Migration_Tool.ps1\n        └─ (Run Migration 클릭) cmd /c java -jar jakartaee-migration-1.0.12-shaded.jar <source> <dest> > <dest>\\migration_log.txt 2>&1\n             └─ 종료 코드 확인 후 결과 표시\n```\n\n### 4.2 Run_Migration_Tool.bat\n| 항목 | 내용 |\n|---|---|\n| `@echo off` | 실행 명령 출력을 끈다. |\n| `powershell -ExecutionPolicy Bypass` | 이번 실행에 한해 스크립트 실행 정책을 우회한다. 시스템 설정은 변경하지 않는다. |\n| `-WindowStyle Hidden` | PowerShell 콘솔 창을 숨긴다. GUI 창만 표시된다. |\n| `-File "%~dp0Tomcat_Migration_Tool.ps1"` | `%~dp0` 는 bat 파일이 위치한 폴더이다. 어느 경로에서 실행해도 같은 폴더의 ps1을 찾는다. |\n\n### 4.3 Tomcat_Migration_Tool.ps1\n1. 초기화\n   - Windows Forms, Drawing 어셈블리를 로드한다.\n   - 스크립트와 같은 폴더에서 `jakartaee-migration-1.0.12-shaded.jar` 를 찾는다. 없으면 오류 메시지를 표시하고 종료한다.\n2. 화면 구성\n   - Source 경로 입력란과 Browse 버튼\n   - Destination 경로 입력란과 Browse 버튼\n   - Run Migration 버튼\n   - 읽기 전용 상태 창\n3. 실행 전 검사\n   - Source 또는 Destination이 비어 있으면 경고 후 중단한다.\n   - Source 폴더가 존재하지 않으면 오류 후 중단한다.\n   - Destination 폴더가 없으면 생성한다.\n4. 변환 실행\n   - `cmd.exe /c java -jar "<jar>" "<source>" "<dest>" > "<dest>\\migration_log.txt" 2>&1` 를 콘솔 창 없이 실행한다.\n   - 표준 출력과 표준 오류를 모두 `migration_log.txt` 로 저장한다.\n   - 실행 중 `DoEvents()` 와 100ms 대기를 반복하여 화면이 멈추지 않도록 한다.\n5. 결과 판정\n   - 프로세스 종료 코드가 0이면 성공, 그 외는 실패로 표시한다.\n   - 로그 파일을 시스템 기본 인코딩으로 읽어 상태 창에 출력한다.\n6. 예외 처리\n   - 프로세스 시작 자체가 실패하면 Java 설치 여부를 확인하라는 메시지를 표시한다.\n   - Java가 PATH에 없는 경우에는 `cmd` 가 오류 코드를 반환하므로, 실패 메시지와 로그 파일의 `java` 인식 오류 문구로 확인한다.\n\n### 4.4 jakartaee-migration-1.0.12-shaded.jar\nApache Tomcat 프로젝트의 Jakarta EE Migration Tool이다. 이 스크립트는 `<source>` `<dest>` 두 인자만 전달하므로 기본 설정으로 동작한다.\n\n| 항목 | 동작 |\n|---|---|\n| 프로파일 | 기본값 `TOMCAT`. 로그 첫 줄에 `Jakarta EE specification profile [TOMCAT]` 로 표시된다. |\n| 입력이 폴더인 경우 | 폴더 안의 파일을 처리하여 출력 폴더에 저장한다. jar는 변환하고, 변환 대상이 아닌 파일은 그대로 복사한다. |\n| 변환 내용 | 클래스 파일의 바이트코드와 텍스트 리소스에 포함된 `javax.*` 패키지 참조를 `jakarta.*` 로 치환한다. 대상은 Servlet, JSP, EL, WebSocket, Mail, Activation, JMS, XML Binding 등 Jakarta EE 명세 패키지이다. |\n| 제외 대상 | 기본 제외 목록에 있는 jar(`asm`, `bcprov`, `bcpkix`, `slf4j-api` 등)는 변환하지 않고 그대로 복사한다. 로그에 `excluded (the archive was copied unchanged)` 로 표시된다. |\n| 처리 방식 | 스트리밍 방식(`using streaming`)으로 jar를 읽으며 변환하여 메모리 사용을 줄인다. |\n| 중첩 jar | jar 안에 포함된 jar도 재귀적으로 변환한다. |\n| 서명 파일 | jar 내용이 바뀌면 기존 서명이 무효가 되므로 `META-INF/*.SF`, `*.RSA`, `*.DSA` 를 삭제한다. 로그에 `Drop cryptographic signature file` 로 표시된다. |\n| 종료 코드 | 정상 완료 시 0, 오류 시 0이 아닌 값 |\n\n### 4.5 로그 메시지 해석\n| 로그 | 의미 | 조치 |\n|---|---|---|\n| `Migration starting for archive [...]` | 해당 jar 처리 시작 | 없음 |\n| `Migration finished for archive [...]` | 해당 jar 처리 완료 | 없음 |\n| `Migration skipped ... because it is excluded` | 제외 대상으로 변환 없이 복사 | 없음 |\n| `Drop cryptographic signature file [...]` | 서명 파일 삭제 | 없음 |\n| `Migration completed successfully in [N] milliseconds` | 전체 정상 종료 | 없음 |\n| 그 외 `ERROR`, `Exception` 등 | 변환 실패 | 해당 jar 확인 |\n\n로그에 표시되는 경로의 한글이 깨져 보일 수 있다. 이는 로그 파일 인코딩 문제이며 변환 결과에는 영향이 없다.\n\n---\n\n## 5. 제약 사항 및 주의사항\n\n1. 변환 성공은 도구가 오류 없이 끝났다는 의미이며, 변환된 라이브러리가 Tomcat 10에서 정상 동작한다는 보증이 아니다. 반드시 3.7절의 기동 및 기능 확인을 수행한다.\n2. 문자열을 조합하여 만든 클래스 이름(리플렉션), 설정 파일 내 참조 등은 변환되지 않을 수 있다.\n3. 오래된 라이브러리(예: Axis2 1.7.0, Axiom 1.2.13, JAXB API 2.1, Mail, Activation, Geronimo JMS)는 변환해도 정상 동작하지 않을 수 있다. 가능하면 Jakarta를 정식 지원하는 최신 버전으로 교체한다.\n4. 서명이 삭제된 jar는 서명 검증이 필요한 환경에서는 사용할 수 없다.\n5. 출력 폴더를 입력 폴더와 동일하게 지정하지 않는다.\n6. `migration_log.txt` 는 출력 폴더에 함께 생성되므로 배포 시 jar만 선별하여 복사한다.\n7. 변환 도구는 라이브러리만 변환한다. 애플리케이션 소스, `web.xml`, 기타 설정 파일은 별도로 점검한다.\n\n---\n\n## 6. 문제 해결\n\n| 증상 | 원인 | 조치 |\n|---|---|---|\n| `Migration jar file not found` 메시지 | ps1과 같은 폴더에 jar가 없음 | 세 파일을 같은 폴더에 둔다. |\n| `Migration failed with exit code` 표시 | Java 미설치 또는 PATH 미설정, 변환 오류 | `java -version` 확인 후 `migration_log.txt` 를 확인한다. |\n| 로그 파일이 비어 있음 | `java` 명령을 찾지 못함 | Java를 설치하고 PATH를 설정한다. |\n| 실행 시 창이 열리지 않음 | PowerShell 실행 제한 또는 보안 프로그램 차단 | 명령 프롬프트에서 bat을 실행하여 오류를 확인한다. |\n| Tomcat 기동 시 `NoClassDefFoundError` | 변환 누락 또는 일부 jar가 변환 전 상태로 남아 있음 | 변환 전 jar가 배포 위치에 남아 있는지 확인한다. |\n| Tomcat 기동 시 `UnsupportedClassVersionError` | Java 버전이 Tomcat 요구 버전보다 낮음 | Tomcat 10.1은 Java 11 이상을 사용한다. |\n\n',T0=`---
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

`,b0=`---
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

`,I0=`---
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

`,_0=`---
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

`,N0=`---
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

`,A0=`---
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

`,D0=`---
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

`,j0=`---
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

`,R0=`---
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

`;function Kp(e){const t=e.replace(/\r\n/g,`
`).match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);if(!t)throw new Error("Missing frontmatter block");const[,r,l]=t,o={};for(const i of r.split(`
`)){const s=i.indexOf(":");if(s===-1)continue;const a=i.slice(0,s).trim(),u=i.slice(s+1).trim();o[a]=u}if(!o.title||!o.date)throw new Error("Frontmatter must include title and date");return{frontmatter:{title:o.title,date:o.date},body:l.trim()}}function O0(e,n){return`---
title: ${e.title}
date: ${e.date}
---
${n}
`}function L0(e){return e.replace(/^[ \t]*[|:\- \t]*-{3}[|:\- \t]*$/gm," ").replace(/^\s{0,3}#{1,6}\s+/gm,"").replace(/^\s*(?:[-*+]|\d+\.)\s+/gm,"").replace(/^\s*>\s?/gm,"").replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm," ").replace(/!\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/\*\*|__|~~|`/g,"").replace(/\*(\S[^*]*?)\*/g,"$1").replace(/\|/g," ")}function qp(e,n=!1){const t=[];let r=[],l=null;const o=()=>{r.length>0&&t.push(L0(r.join(`
`))),r=[]};for(const i of e.split(`
`))/^\s{0,3}```/.test(i)?l===null?(o(),l=[]):(n&&t.push(l.join(`
`)),l=null):l===null?r.push(i):l.push(i);return o(),l!==null&&n&&t.push(l.join(`
`)),t.join(" ").replace(/\s+/g," ").trim()}function M0(e,n,t=80){const r=qp(va(e,n));return r.length>t?`${r.slice(0,t)}...`:r}function va(e,n){const t=e.split(`
`),r=t.findIndex(o=>o.trim()!=="");if(r===-1||t[r].trimEnd()!==`# ${n}`)return e;let l=r+1;for(;l<t.length&&t[l].trim()==="";)l+=1;return t.slice(l).join(`
`)}const U0=80,F0=Object.assign({"/src/content/posts/2026-10-06-18d8nk.md":C0,"/src/content/posts/2026-10-06-dd7f50.md":P0,"/src/content/posts/2026-10-06-hicvn4.md":E0,"/src/content/posts/2026-10-06-lj520p.md":T0,"/src/content/posts/2026-10-06-orbtn7.md":b0,"/src/content/posts/2026-10-07-26ryr4.md":I0,"/src/content/posts/2026-10-07-81vtvs.md":_0,"/src/content/posts/2026-10-07-905xsv.md":N0,"/src/content/posts/2026-10-12-dmya75.md":A0,"/src/content/posts/2026-10-12-fqjs3t.md":D0,"/src/content/posts/2026-10-12-iqj4r0.md":j0,"/src/content/posts/2026-10-12-qngb1m.md":R0});function B0(e){const n=e.match(/([^/]+)\.md$/);if(!n)throw new Error(`Unexpected post file path: ${e}`);return n[1]}const el=Object.entries(F0).map(([e,n])=>{const{frontmatter:t,body:r}=Kp(n);return{slug:B0(e),title:t.title,date:t.date,excerpt:M0(r,t.title,U0),body:r}}).sort((e,n)=>e.date<n.date?1:e.date>n.date?-1:0);function $0(e){const n=Math.random().toString(36).slice(2,8);return`${e}-${n}`}function z0({post:e}){return f.jsx(tn,{to:`/blog/${e.slug}`,className:"block",children:f.jsxs("article",{className:"card",children:[f.jsx("h3",{className:"card-title",children:e.title}),f.jsx("p",{className:"mt-1 text-sm text-muted",children:e.date}),f.jsx("p",{className:"mt-2 text-foreground/80",children:e.excerpt})]})})}function W0(){return f.jsxs("section",{children:[f.jsx("h2",{className:"text-xl font-semibold",children:"최신 글"}),f.jsx("div",{className:"mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:el.slice(0,3).map(e=>f.jsx(z0,{post:e},e.slug))})]})}const Yu=200,hi=40;function gt({values:e,label:n,current:t,window:r}){const l=Math.min(...e),i=Math.max(...e)-l||1,s=e.map((a,u)=>{const d=u/(e.length-1)*Yu,p=hi-4-(a-l)/i*(hi-8);return`${d.toFixed(1)},${p.toFixed(1)}`}).join(" ");return f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-baseline justify-between font-mono text-xs",children:[f.jsx("span",{className:"text-muted",children:n}),f.jsx("span",{children:t})]}),e.length<2?f.jsx("p",{className:"mt-1 font-mono text-xs text-muted",children:"값을 모으는 중..."}):f.jsx("svg",{viewBox:`0 0 ${Yu} ${hi}`,preserveAspectRatio:"none",role:"img","aria-label":`${n}: 최근 ${r}, 현재 ${t}`,className:"mt-1 h-10 w-full rounded border border-border bg-background",children:f.jsx("polyline",{points:s,fill:"none",stroke:"rgb(var(--color-accent))",strokeWidth:"1.5",vectorEffect:"non-scaling-stroke",strokeLinejoin:"round"})}),e.length>=2&&f.jsxs("p",{className:"mt-1 text-right font-mono text-[11px] text-muted",children:["최근 ",r]})]})}const H0="https://shinheeyoun.duckdns.org";function G0(e,n,t){return n==="https:"&&e.startsWith("http:")?null:`${e}/status/api`}const Xp=e=>typeof e=="object"&&e!==null,N=e=>typeof e=="number"&&Number.isFinite(e)?e:null,vt=e=>typeof e=="string"?e:"",qe=e=>Xp(e)?e:{};function V0(e){if(!Xp(e))return null;const n=qe(e.os),t=qe(e.host),r=qe(e.heap),l=qe(e.jvm),o=qe(l.threadStates),i=qe(e.threads),s=qe(e.http),a=qe(e.gc),u=qe(e.cpu),d=N(e.uptimeMs),p=N(r.used),m=N(i.live);if(d===null||p===null||m===null)return null;const y=[];if(Array.isArray(e.history))for(const v of e.history){const S=qe(v),C=N(S.t),g=N(S.heap),c=N(S.threads);C!==null&&g!==null&&c!==null&&y.push({t:C,heap:g,threads:c,busy:N(S.busy),cpu:N(S.cpu),req:N(S.req),mem:N(S.mem)})}return{tomcat:vt(e.tomcat),java:vt(e.java),vm:vt(e.vm),vendor:vt(e.vendor),uptimeMs:d,os:{name:vt(n.name),arch:vt(n.arch),uptimeMs:N(n.uptimeMs)},host:{memTotal:N(t.memTotal),memAvailable:N(t.memAvailable),swapTotal:N(t.swapTotal),swapFree:N(t.swapFree),diskTotal:N(t.diskTotal),diskUsable:N(t.diskUsable),fdOpen:N(t.fdOpen),fdMax:N(t.fdMax)},heap:{used:p,committed:N(r.committed)??p,max:N(r.max)},nonHeapUsed:N(e.nonHeapUsed),jvm:{metaspace:N(l.metaspace),classes:N(l.classes),threadStates:{runnable:N(o.runnable),waiting:N(o.waiting),timedWaiting:N(o.timedWaiting),blocked:N(o.blocked)}},threads:{live:m,peak:N(i.peak)??m,daemon:N(i.daemon)??0},http:{threadsBusy:N(s.threadsBusy),threadsMax:N(s.threadsMax),requests:N(s.requests),errors:N(s.errors),avgMs:N(s.avgMs),maxMs:N(s.maxMs),bytesIn:N(s.bytesIn),bytesOut:N(s.bytesOut),connections:N(s.connections),sessions:N(s.sessions)},gc:{count:N(a.count)??0,millis:N(a.millis)??0},cpu:{process:N(u.process),system:N(u.system),cores:N(u.cores),loadAverage:N(u.loadAverage)},history:y}}function J0(e){const n=[];for(let t=1;t<e.length;t++){const r=e[t-1],l=e[t];if(r.req===null||l.req===null)continue;const o=(l.t-r.t)/1e3,i=l.req-r.req;o<=0||i<0||n.push(i/o)}return n}function xn(e){const n=Math.max(0,Math.floor(e/1e3)),t=Math.floor(n/86400),r=Math.floor(n%86400/3600),l=Math.floor(n%3600/60);return t>0?`${t}일 ${r}시간`:r>0?`${r}시간 ${l}분`:l>0?`${l}분`:`${n}초`}function Zn(e){const n=e/1048576;return n>=1024?`${(n/1024).toFixed(1)} GB`:n>=1?`${Math.round(n)} MB`:`${Math.round(e/1024)} KB`}function Zu(e){return e===null?"-":e>=1e3?`${(e/1e3).toFixed(1)}초`:`${Number.isInteger(e)?e:e.toFixed(1)}ms`}function K0(e){return e===0?"0/s":e>=10?`${Math.round(e)}/s`:`${Number(e.toFixed(2))}/s`}function mi(e){if(e===null)return"-";const n=e*100;return`${n<10?n.toFixed(1).replace(/\.0$/,""):Math.round(n)}%`}const q0=1e4,X0=5e3;function Q0(){const e=G0(H0,window.location.protocol),[n,t]=k.useState(e?{kind:"loading"}:{kind:"preparing"});return k.useEffect(()=>{if(!e)return;let r=!1,l=0,o;async function i(){o=new AbortController;const u=window.setTimeout(()=>o==null?void 0:o.abort(),X0);try{const d=await fetch(e,{signal:o.signal}),p=d.ok?V0(await d.json()):null;r||t(p?{kind:"online",status:p}:{kind:"offline"})}catch{r||t({kind:"offline"})}finally{window.clearTimeout(u)}}function s(){l=window.setTimeout(async()=>{document.visibilityState==="visible"&&await i(),r||s()},q0)}function a(){document.visibilityState==="visible"&&i()}return i().then(()=>{r||s()}),document.addEventListener("visibilitychange",a),()=>{r=!0,window.clearTimeout(l),o==null||o.abort(),document.removeEventListener("visibilitychange",a)}},[e]),n}function kl({label:e,value:n,sub:t}){return f.jsxs("div",{children:[f.jsx("div",{className:"font-mono text-xs text-muted",children:e}),f.jsx("div",{className:"font-mono text-lg font-semibold",children:n}),t&&f.jsx("div",{className:"font-mono text-xs text-muted",children:t})]})}function Y0({label:e,percent:n}){return f.jsx("div",{role:"img","aria-label":`${e} ${Math.round(n)}%`,className:"mt-1 h-1.5 w-full overflow-hidden rounded bg-border",children:f.jsx("div",{className:"h-full bg-accent",style:{width:`${Math.min(100,n)}%`}})})}function gi({title:e,children:n}){return f.jsxs("div",{children:[f.jsx("h3",{className:"font-mono text-xs font-semibold text-accent",children:e}),f.jsx("dl",{className:"mt-2 space-y-1.5",children:n})]})}function z({label:e,value:n,bar:t}){return f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-baseline justify-between gap-3 font-mono text-xs",children:[f.jsx("dt",{className:"shrink-0 text-muted",children:e}),f.jsx("dd",{className:"text-right",children:n})]}),t&&f.jsx(Y0,{label:t.label,percent:t.percent})]})}const co=(e,n)=>e===null?"-":n(e),Jn=e=>co(e,n=>n.toLocaleString("ko-KR")),ir=e=>co(e,Zn);function Cl(e,n){return e===null||n===null||n<=0?{text:"-",percent:null}:{text:`${Zn(e)} / ${Zn(n)}`,percent:e/n*100}}function Z0({status:e}){const{heap:n,threads:t,http:r,cpu:l,gc:o,history:i,host:s,jvm:a,os:u}=e,d=n.max?Math.min(100,n.used/n.max*100):null,p=i.length>1?i[i.length-1].t-i[0].t:0,m=s.memTotal!==null&&s.memAvailable!==null?s.memTotal-s.memAvailable:null,y=s.swapTotal!==null&&s.swapFree!==null?s.swapTotal-s.swapFree:null,v=s.diskTotal!==null&&s.diskUsable!==null?s.diskTotal-s.diskUsable:null,S=Cl(m,s.memTotal),C=Cl(y,s.swapTotal),g=Cl(v,s.diskTotal),c=Cl(n.used,n.max),h=J0(i),x=h.length>0?h[h.length-1]:null,w=i.filter(R=>R.cpu!==null).map(R=>R.cpu),E=i.filter(R=>R.mem!==null).map(R=>R.mem),T=i.filter(R=>R.busy!==null).map(R=>R.busy),I=R=>R.length>0?R[R.length-1]:null,M=a.threadStates,A=[["실행",M.runnable],["대기",M.waiting],["시간 대기",M.timedWaiting],["차단",M.blocked]].map(([R,Hn])=>`${R} ${Hn??"-"}`).join(" · ");return f.jsxs("div",{children:[f.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-2 font-mono text-sm",children:[f.jsxs("span",{children:[f.jsxs("span",{className:"text-accent","aria-hidden":"true",children:["●"," "]}),"online"]}),f.jsxs("span",{className:"text-muted",children:[e.tomcat," · Java ",e.java]})]}),f.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4 md:grid-cols-4",children:[f.jsx(kl,{label:"업타임",value:xn(e.uptimeMs),sub:"Tomcat 시작 후"}),f.jsxs("div",{children:[f.jsx(kl,{label:"힙 메모리",value:Zn(n.used),sub:n.max?`최대 ${Zn(n.max)}`:void 0}),d!==null&&f.jsx("div",{role:"img","aria-label":`힙 사용률 ${Math.round(d)}%`,className:"mt-1 h-1.5 w-full overflow-hidden rounded bg-border",children:f.jsx("div",{className:"h-full bg-accent",style:{width:`${d}%`}})})]}),f.jsx(kl,{label:"스레드",value:String(t.live),sub:`최고 ${t.peak}개`}),f.jsx(kl,{label:"HTTP 요청",value:r.requests===null?"-":r.requests.toLocaleString("ko-KR"),sub:`오류 ${r.errors??"-"} · 처리 중 ${r.threadsBusy??"-"}/${r.threadsMax??"-"}`})]}),f.jsxs("div",{className:"mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[f.jsx(gt,{label:"힙 사용량",current:Zn(n.used),window:xn(p),values:i.map(R=>R.heap)}),f.jsx(gt,{label:"스레드 수",current:`${t.live}개`,window:xn(p),values:i.map(R=>R.threads)}),f.jsx(gt,{label:"CPU (서버 전체)",current:mi(I(w)??l.system),window:xn(p),values:w}),f.jsx(gt,{label:"서버 메모리 사용량",current:ir(I(E)??m),window:xn(p),values:E}),f.jsx(gt,{label:"초당 요청",current:x===null?"-":K0(x),window:xn(p),values:h}),f.jsx(gt,{label:"처리 중인 요청",current:co(I(T),R=>`${R}개`),window:xn(p),values:T})]}),f.jsxs("div",{className:"mt-6 grid gap-6 border-t border-border pt-5 md:grid-cols-3",children:[f.jsxs(gi,{title:"서버 (호스트)",children:[f.jsx(z,{label:"운영체제",value:[u.name,u.arch].filter(Boolean).join(" ")||"-"}),f.jsx(z,{label:"서버 가동",value:co(u.uptimeMs,xn)}),f.jsx(z,{label:"메모리",value:S.text,bar:S.percent===null?null:{label:"서버 메모리 사용률",percent:S.percent}}),f.jsx(z,{label:"스왑",value:s.swapTotal===0?"없음":C.text,bar:C.percent===null||s.swapTotal===0?null:{label:"스왑 사용률",percent:C.percent}}),f.jsx(z,{label:"디스크",value:g.text,bar:g.percent===null?null:{label:"디스크 사용률",percent:g.percent}}),f.jsx(z,{label:"CPU",value:`서버 ${mi(l.system)} · JVM ${mi(l.process)}`}),f.jsx(z,{label:"코어 · 부하 평균",value:`${l.cores??"-"}개 · ${l.loadAverage===null?"-":l.loadAverage.toFixed(2)}`}),f.jsx(z,{label:"열린 파일",value:s.fdOpen===null?"-":`${Jn(s.fdOpen)} / ${Jn(s.fdMax)}`})]}),f.jsxs(gi,{title:"JVM",children:[f.jsx(z,{label:"가상 머신",value:[e.vm,e.vendor].filter(Boolean).join(" · ")||"-"}),f.jsx(z,{label:"힙",value:c.text,bar:c.percent===null?null:{label:"힙 사용률",percent:c.percent}}),f.jsx(z,{label:"힙 확보량",value:Zn(n.committed)}),f.jsx(z,{label:"힙 밖 메모리",value:ir(e.nonHeapUsed)}),f.jsx(z,{label:"메타스페이스",value:ir(a.metaspace)}),f.jsx(z,{label:"로드된 클래스",value:Jn(a.classes)}),f.jsx(z,{label:"스레드",value:`${t.live}개 (최고 ${t.peak} · 데몬 ${t.daemon})`}),f.jsx(z,{label:"스레드 상태",value:A}),f.jsx(z,{label:"GC",value:`${o.count.toLocaleString("ko-KR")}회 · ${o.millis.toLocaleString("ko-KR")}ms`})]}),f.jsxs(gi,{title:"HTTP · Tomcat",children:[f.jsx(z,{label:"요청 수",value:Jn(r.requests)}),f.jsx(z,{label:"오류 응답",value:Jn(r.errors)}),f.jsx(z,{label:"평균 처리 시간",value:Zu(r.avgMs)}),f.jsx(z,{label:"가장 느렸던 요청",value:Zu(r.maxMs)}),f.jsx(z,{label:"받은 데이터",value:ir(r.bytesIn)}),f.jsx(z,{label:"보낸 데이터",value:ir(r.bytesOut)}),f.jsx(z,{label:"연결 수",value:Jn(r.connections)}),f.jsx(z,{label:"처리 스레드",value:`${r.threadsBusy??"-"} / ${r.threadsMax??"-"}`}),f.jsx(z,{label:"세션 수",value:Jn(r.sessions)})]})]}),f.jsx("p",{className:"mt-5 font-mono text-[11px] text-muted",children:"요청 수와 처리 시간에는 이 카드가 10초마다 보내는 요청도 포함됩니다. 호스트 이름, 경로, IP, 앱 이름은 보여주지 않습니다."})]})}function e1(){const e=Q0();return f.jsxs("section",{children:[f.jsx("h2",{className:"text-xl font-semibold",children:"라이브 서버 상태"}),f.jsxs("div",{className:"card mt-4",children:[e.kind==="online"&&f.jsx(Z0,{status:e.status}),e.kind==="loading"&&f.jsx("p",{className:"font-mono text-sm text-muted",children:"서버에 물어보는 중..."}),e.kind==="preparing"&&f.jsx("p",{className:"font-mono text-sm text-muted",children:"서버 연결을 준비하고 있습니다."}),e.kind==="offline"&&f.jsx("p",{className:"font-mono text-sm text-muted",children:"서버에 연결할 수 없습니다. 점검 중이거나 꺼져 있을 수 있어요. 이 사이트의 다른 기능에는 영향이 없습니다."})]})]})}const n1="https://github.com/ShinHeeYoun/ShinHeeYoun.github.io";function t1(){return f.jsxs("section",{children:[f.jsx("h2",{className:"text-xl font-semibold",children:"Source"}),f.jsxs("p",{className:"mt-3 font-mono text-sm",children:[f.jsx("span",{className:"text-muted",children:"$ open "}),f.jsx("a",{href:n1,target:"_blank",rel:"noopener noreferrer",className:"text-accent underline-offset-4 hover:underline",children:"github.com/ShinHeeYoun/ShinHeeYoun.github.io"})]})]})}function r1(){return f.jsxs("main",{className:"w-full px-6 py-8 md:px-12",children:[f.jsx(k0,{}),f.jsxs("div",{className:"mt-12 space-y-14",children:[f.jsx(e1,{}),f.jsx(W0,{}),f.jsx(t1,{})]})]})}function ec({text:e}){return f.jsxs(f.Fragment,{children:[e.before,f.jsx("mark",{className:"search-match",children:e.match}),e.after]})}const l1=40,o1=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),nc=e=>e.replace(/\s+/g," ").trim();function tc(e,n){if(n==="")return null;const t=new RegExp(o1(n),"i").exec(e);return t?{index:t.index,length:t[0].length}:null}function i1(e,n,t=l1){const r=n.index+n.length;let l=Math.max(0,n.index-t),o=Math.min(e.length,r+t);if(l>0&&e[l-1]!==" "){const i=e.indexOf(" ",l);i!==-1&&i<n.index&&(l=i+1)}if(o<e.length){const i=e.lastIndexOf(" ",o);i>r&&(o=i)}return{before:(l>0?"...":"")+e.slice(l,n.index),match:e.slice(n.index,r),after:e.slice(r,o)+(o<e.length?"...":"")}}function s1(e,n){return{before:e.slice(0,n.index),match:e.slice(n.index,n.index+n.length),after:e.slice(n.index+n.length)}}const rc=new WeakMap;function a1(e){let n=rc.get(e);return n===void 0&&(n=qp(va(e.body,e.title),!0),rc.set(e,n)),n}function u1(e,n){const t=nc(n);if(t==="")return[];const r=[],l=[];for(const o of e){const i=nc(o.title),s=tc(i,t),a=a1(o),u=tc(a,t);if(!s&&!u)continue;const d={post:o,title:s?s1(i,s):null,snippet:u?i1(a,u):null};(s?r:l).push(d)}return[...r,...l]}const c1=el.map(e=>({post:e,title:null,snippet:null}));function d1(){const[e,n]=n0(),[t,r]=k.useState(e.get("q")??""),l=k.useDeferredValue(t).trim(),o=k.useMemo(()=>u1(el,l),[l]),i=l!=="";k.useEffect(()=>{(e.get("q")??"")!==t&&n(t.trim()?{q:t}:{},{replace:!0})},[t,e,n]);const s=i?o:c1;return f.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[f.jsx("h1",{className:"text-2xl font-bold",children:"Blog"}),f.jsxs("form",{role:"search",className:"mt-6 max-w-xl",onSubmit:a=>a.preventDefault(),children:[f.jsx("label",{htmlFor:"blog-search",className:"sr-only",children:"글 검색"}),f.jsx("input",{id:"blog-search",type:"search",value:t,onChange:a=>r(a.target.value),placeholder:"제목과 본문에서 검색",autoComplete:"off",className:"w-full rounded-md border border-border bg-surface px-3 py-2 font-mono text-sm outline-none focus:border-accent"})]}),i&&f.jsx("p",{role:"status",className:"mt-4 text-sm text-muted",children:o.length>0?`검색 결과 ${o.length}건`:`'${l}' 검색 결과가 없습니다.`}),f.jsx("div",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:s.map(({post:a,title:u,snippet:d})=>f.jsx(tn,{to:`/blog/${a.slug}`,className:"block",children:f.jsxs("article",{className:"card",children:[f.jsx("h2",{className:"card-title",children:u?f.jsx(ec,{text:u}):a.title}),f.jsx("p",{className:"mt-1 text-sm text-muted",children:a.date}),f.jsx("p",{className:"mt-2 break-words text-foreground/80",children:d?f.jsx(ec,{text:d}):a.excerpt})]})},a.slug))})]})}function ya(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let ht=ya();function Qp(e){ht=e}const Yp=/[&<>"']/,p1=new RegExp(Yp.source,"g"),Zp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,f1=new RegExp(Zp.source,"g"),h1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lc=e=>h1[e];function Te(e,n){if(n){if(Yp.test(e))return e.replace(p1,lc)}else if(Zp.test(e))return e.replace(f1,lc);return e}const m1=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function g1(e){return e.replace(m1,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const v1=/(^|[^\[])\^/g;function B(e,n){let t=typeof e=="string"?e:e.source;n=n||"";const r={replace:(l,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(v1,"$1"),t=t.replace(l,i),r},getRegex:()=>new RegExp(t,n)};return r}function oc(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Tr={exec:()=>null};function ic(e,n){const t=e.replace(/\|/g,(o,i,s)=>{let a=!1,u=i;for(;--u>=0&&s[u]==="\\";)a=!a;return a?"|":" |"}),r=t.split(/ \|/);let l=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;l<r.length;l++)r[l]=r[l].trim().replace(/\\\|/g,"|");return r}function sr(e,n,t){const r=e.length;if(r===0)return"";let l=0;for(;l<r&&e.charAt(r-l-1)===n;)l++;return e.slice(0,r-l)}function y1(e,n){if(e.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===n[0])t++;else if(e[r]===n[1]&&(t--,t<0))return r;return-1}function sc(e,n,t,r){const l=n.href,o=n.title?Te(n.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){r.state.inLink=!0;const s={type:"link",raw:t,href:l,title:o,text:i,tokens:r.inlineTokens(i)};return r.state.inLink=!1,s}return{type:"image",raw:t,href:l,title:o,text:Te(i)}}function x1(e,n){const t=e.match(/^(\s+)(?:```)/);if(t===null)return n;const r=t[1];return n.split(`
`).map(l=>{const o=l.match(/^\s+/);if(o===null)return l;const[i]=o;return i.length>=r.length?l.slice(r.length):l}).join(`
`)}class po{constructor(n){$(this,"options");$(this,"rules");$(this,"lexer");this.options=n||ht}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:sr(r,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const r=t[0],l=x1(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:l}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let r=t[2].trim();if(/#$/.test(r)){const l=sr(r,"#");(this.options.pedantic||!l||/ $/.test(l))&&(r=l.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:sr(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let r=sr(t[0],`
`).split(`
`),l="",o="";const i=[];for(;r.length>0;){let s=!1;const a=[];let u;for(u=0;u<r.length;u++)if(/^ {0,3}>/.test(r[u]))a.push(r[u]),s=!0;else if(!s)a.push(r[u]);else break;r=r.slice(u);const d=a.join(`
`),p=d.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");l=l?`${l}
${d}`:d,o=o?`${o}
${p}`:p;const m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,i,!0),this.lexer.state.top=m,r.length===0)break;const y=i[i.length-1];if((y==null?void 0:y.type)==="code")break;if((y==null?void 0:y.type)==="blockquote"){const v=y,S=v.raw+`
`+r.join(`
`),C=this.blockquote(S);i[i.length-1]=C,l=l.substring(0,l.length-v.raw.length)+C.raw,o=o.substring(0,o.length-v.text.length)+C.text;break}else if((y==null?void 0:y.type)==="list"){const v=y,S=v.raw+`
`+r.join(`
`),C=this.list(S);i[i.length-1]=C,l=l.substring(0,l.length-y.raw.length)+C.raw,o=o.substring(0,o.length-v.raw.length)+C.raw,r=S.substring(i[i.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:l,tokens:i,text:o}}}list(n){let t=this.rules.block.list.exec(n);if(t){let r=t[1].trim();const l=r.length>1,o={type:"list",raw:"",ordered:l,start:l?+r.slice(0,-1):"",loose:!1,items:[]};r=l?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=l?r:"[*+-]");const i=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let s=!1;for(;n;){let a=!1,u="",d="";if(!(t=i.exec(n))||this.rules.block.hr.test(n))break;u=t[0],n=n.substring(u.length);let p=t[2].split(`
`,1)[0].replace(/^\t+/,g=>" ".repeat(3*g.length)),m=n.split(`
`,1)[0],y=!p.trim(),v=0;if(this.options.pedantic?(v=2,d=p.trimStart()):y?v=t[1].length+1:(v=t[2].search(/[^ ]/),v=v>4?1:v,d=p.slice(v),v+=t[1].length),y&&/^ *$/.test(m)&&(u+=m+`
`,n=n.substring(m.length+1),a=!0),!a){const g=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),c=new RegExp(`^ {0,${Math.min(3,v-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),h=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:\`\`\`|~~~)`),x=new RegExp(`^ {0,${Math.min(3,v-1)}}#`);for(;n;){const w=n.split(`
`,1)[0];if(m=w,this.options.pedantic&&(m=m.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),h.test(m)||x.test(m)||g.test(m)||c.test(n))break;if(m.search(/[^ ]/)>=v||!m.trim())d+=`
`+m.slice(v);else{if(y||p.search(/[^ ]/)>=4||h.test(p)||x.test(p)||c.test(p))break;d+=`
`+m}!y&&!m.trim()&&(y=!0),u+=w+`
`,n=n.substring(w.length+1),p=m.slice(v)}}o.loose||(s?o.loose=!0:/\n *\n *$/.test(u)&&(s=!0));let S=null,C;this.options.gfm&&(S=/^\[[ xX]\] /.exec(d),S&&(C=S[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:u,task:!!S,checked:C,loose:!1,text:d,tokens:[]}),o.raw+=u}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let a=0;a<o.items.length;a++)if(this.lexer.state.top=!1,o.items[a].tokens=this.lexer.blockTokens(o.items[a].text,[]),!o.loose){const u=o.items[a].tokens.filter(p=>p.type==="space"),d=u.length>0&&u.some(p=>/\n.*\n/.test(p.raw));o.loose=d}if(o.loose)for(let a=0;a<o.items.length;a++)o.items[a].loose=!0;return o}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),l=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:l,title:o}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const r=ic(t[1]),l=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===l.length){for(const s of l)/^ *-+: *$/.test(s)?i.align.push("right"):/^ *:-+: *$/.test(s)?i.align.push("center"):/^ *:-+ *$/.test(s)?i.align.push("left"):i.align.push(null);for(let s=0;s<r.length;s++)i.header.push({text:r[s],tokens:this.lexer.inline(r[s]),header:!0,align:i.align[s]});for(const s of o)i.rows.push(ic(s,i.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[u]})));return i}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Te(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const i=sr(r.slice(0,-1),"\\");if((r.length-i.length)%2===0)return}else{const i=y1(t[2],"()");if(i>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let l=t[2],o="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);i&&(l=i[1],o=i[3])}else o=t[3]?t[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(this.options.pedantic&&!/>$/.test(r)?l=l.slice(1):l=l.slice(1,-1)),sc(t,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let r;if((r=this.rules.inline.reflink.exec(n))||(r=this.rules.inline.nolink.exec(n))){const l=(r[2]||r[1]).replace(/\s+/g," "),o=t[l.toLowerCase()];if(!o){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return sc(r,o,r[0],this.lexer)}}emStrong(n,t,r=""){let l=this.rules.inline.emStrongLDelim.exec(n);if(!l||l[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(l[1]||l[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const i=[...l[0]].length-1;let s,a,u=i,d=0;const p=l[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*n.length+i);(l=p.exec(t))!=null;){if(s=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!s)continue;if(a=[...s].length,l[3]||l[4]){u+=a;continue}else if((l[5]||l[6])&&i%3&&!((i+a)%3)){d+=a;continue}if(u-=a,u>0)continue;a=Math.min(a,a+u+d);const m=[...l[0]][0].length,y=n.slice(0,i+l.index+m+a);if(Math.min(i,a)%2){const S=y.slice(1,-1);return{type:"em",raw:y,text:S,tokens:this.lexer.inlineTokens(S)}}const v=y.slice(2,-2);return{type:"strong",raw:y,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let r=t[2].replace(/\n/g," ");const l=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return l&&o&&(r=r.substring(1,r.length-1)),r=Te(r,!0),{type:"codespan",raw:t[0],text:r}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let r,l;return t[2]==="@"?(r=Te(t[1]),l="mailto:"+r):(r=Te(t[1]),l=r),{type:"link",raw:t[0],text:r,href:l,tokens:[{type:"text",raw:r,text:r}]}}}url(n){var r;let t;if(t=this.rules.inline.url.exec(n)){let l,o;if(t[2]==="@")l=Te(t[0]),o="mailto:"+l;else{let i;do i=t[0],t[0]=((r=this.rules.inline._backpedal.exec(t[0]))==null?void 0:r[0])??"";while(i!==t[0]);l=Te(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:l,href:o,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let r;return this.lexer.state.inRawBlock?r=t[0]:r=Te(t[0]),{type:"text",raw:t[0],text:r}}}}const S1=/^(?: *(?:\n|$))+/,w1=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,k1=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,nl=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,C1=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ef=/(?:[*+-]|\d{1,9}[.)])/,nf=B(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ef).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),xa=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,P1=/^[^\n]+/,Sa=/(?!\s*\])(?:\\.|[^\[\]\\])+/,E1=B(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Sa).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),T1=B(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ef).getRegex(),Mo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",wa=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,b1=B("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",wa).replace("tag",Mo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),tf=B(xa).replace("hr",nl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mo).getRegex(),I1=B(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",tf).getRegex(),ka={blockquote:I1,code:w1,def:E1,fences:k1,heading:C1,hr:nl,html:b1,lheading:nf,list:T1,newline:S1,paragraph:tf,table:Tr,text:P1},ac=B("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",nl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mo).getRegex(),_1={...ka,table:ac,paragraph:B(xa).replace("hr",nl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ac).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mo).getRegex()},N1={...ka,html:B(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",wa).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Tr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:B(xa).replace("hr",nl).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},rf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,A1=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,lf=/^( {2,}|\\)\n(?!\s*$)/,D1=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,tl="\\p{P}\\p{S}",j1=B(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,tl).getRegex(),R1=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,O1=B(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,tl).getRegex(),L1=B("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,tl).getRegex(),M1=B("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,tl).getRegex(),U1=B(/\\([punct])/,"gu").replace(/punct/g,tl).getRegex(),F1=B(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),B1=B(wa).replace("(?:-->|$)","-->").getRegex(),$1=B("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",B1).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),fo=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,z1=B(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",fo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),of=B(/^!?\[(label)\]\[(ref)\]/).replace("label",fo).replace("ref",Sa).getRegex(),sf=B(/^!?\[(ref)\](?:\[\])?/).replace("ref",Sa).getRegex(),W1=B("reflink|nolink(?!\\()","g").replace("reflink",of).replace("nolink",sf).getRegex(),Ca={_backpedal:Tr,anyPunctuation:U1,autolink:F1,blockSkip:R1,br:lf,code:A1,del:Tr,emStrongLDelim:O1,emStrongRDelimAst:L1,emStrongRDelimUnd:M1,escape:rf,link:z1,nolink:sf,punctuation:j1,reflink:of,reflinkSearch:W1,tag:$1,text:D1,url:Tr},H1={...Ca,link:B(/^!?\[(label)\]\((.*?)\)/).replace("label",fo).getRegex(),reflink:B(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",fo).getRegex()},ms={...Ca,escape:B(rf).replace("])","~|])").getRegex(),url:B(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},G1={...ms,br:B(lf).replace("{2,}","*").getRegex(),text:B(ms.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Pl={normal:ka,gfm:_1,pedantic:N1},ar={normal:Ca,gfm:ms,breaks:G1,pedantic:H1};class Ye{constructor(n){$(this,"tokens");$(this,"options");$(this,"state");$(this,"tokenizer");$(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||ht,this.options.tokenizer=this.options.tokenizer||new po,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Pl.normal,inline:ar.normal};this.options.pedantic?(t.block=Pl.pedantic,t.inline=ar.pedantic):this.options.gfm&&(t.block=Pl.gfm,this.options.breaks?t.inline=ar.breaks:t.inline=ar.gfm),this.tokenizer.rules=t}static get rules(){return{block:Pl,inline:ar}}static lex(n,t){return new Ye(t).lex(n)}static lexInline(n,t){return new Ye(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],r=!1){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(s,a,u)=>a+"    ".repeat(u.length));let l,o,i;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>(l=s.call({lexer:this},n,t))?(n=n.substring(l.raw.length),t.push(l),!0):!1))){if(l=this.tokenizer.space(n)){n=n.substring(l.raw.length),l.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(l);continue}if(l=this.tokenizer.code(n)){n=n.substring(l.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+l.raw,o.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(l);continue}if(l=this.tokenizer.fences(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.heading(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.hr(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.blockquote(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.list(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.html(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.def(n)){n=n.substring(l.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+l.raw,o.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(n)){n=n.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.lheading(n)){n=n.substring(l.raw.length),t.push(l);continue}if(i=n,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const a=n.slice(1);let u;this.options.extensions.startBlock.forEach(d=>{u=d.call({lexer:this},a),typeof u=="number"&&u>=0&&(s=Math.min(s,u))}),s<1/0&&s>=0&&(i=n.substring(0,s+1))}if(this.state.top&&(l=this.tokenizer.paragraph(i))){o=t[t.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+l.raw,o.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(l),r=i.length!==n.length,n=n.substring(l.raw.length);continue}if(l=this.tokenizer.text(n)){n=n.substring(l.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+l.raw,o.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(l);continue}if(n){const s="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let r,l,o,i=n,s,a,u;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)d.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(a||(u=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(r=d.call({lexer:this},n,t))?(n=n.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(n)){n=n.substring(r.raw.length),l=t[t.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(r.raw.length),l=t[t.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(n,i,u)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(n)){n=n.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(n))){n=n.substring(r.raw.length),t.push(r);continue}if(o=n,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const p=n.slice(1);let m;this.options.extensions.startInline.forEach(y=>{m=y.call({lexer:this},p),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(o=n.substring(0,d+1))}if(r=this.tokenizer.inlineText(o)){n=n.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(u=r.raw.slice(-1)),a=!0,l=t[t.length-1],l&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):t.push(r);continue}if(n){const d="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}}class ho{constructor(n){$(this,"options");$(this,"parser");this.options=n||ht}space(n){return""}code({text:n,lang:t,escaped:r}){var i;const l=(i=(t||"").match(/^\S*/))==null?void 0:i[0],o=n.replace(/\n$/,"")+`
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
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:r}){const l=this.parser.parseInline(r),o=oc(n);if(o===null)return l;n=o;let i='<a href="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=">"+l+"</a>",i}image({href:n,title:t,text:r}){const l=oc(n);if(l===null)return r;n=l;let o=`<img src="${n}" alt="${r}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Pa{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class Ze{constructor(n){$(this,"options");$(this,"renderer");$(this,"textRenderer");this.options=n||ht,this.options.renderer=this.options.renderer||new ho,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Pa}static parse(n,t){return new Ze(t).parse(n)}static parseInline(n,t){return new Ze(t).parseInline(n)}parse(n,t=!0){let r="";for(let l=0;l<n.length;l++){const o=n[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const s=o,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){r+=a||"";continue}}const i=o;switch(i.type){case"space":{r+=this.renderer.space(i);continue}case"hr":{r+=this.renderer.hr(i);continue}case"heading":{r+=this.renderer.heading(i);continue}case"code":{r+=this.renderer.code(i);continue}case"table":{r+=this.renderer.table(i);continue}case"blockquote":{r+=this.renderer.blockquote(i);continue}case"list":{r+=this.renderer.list(i);continue}case"html":{r+=this.renderer.html(i);continue}case"paragraph":{r+=this.renderer.paragraph(i);continue}case"text":{let s=i,a=this.renderer.text(s);for(;l+1<n.length&&n[l+1].type==="text";)s=n[++l],a+=`
`+this.renderer.text(s);t?r+=this.renderer.paragraph({type:"paragraph",raw:a,text:a,tokens:[{type:"text",raw:a,text:a}]}):r+=a;continue}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(n,t){t=t||this.renderer;let r="";for(let l=0;l<n.length;l++){const o=n[l];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=s||"";continue}}const i=o;switch(i.type){case"escape":{r+=t.text(i);break}case"html":{r+=t.html(i);break}case"link":{r+=t.link(i);break}case"image":{r+=t.image(i);break}case"strong":{r+=t.strong(i);break}case"em":{r+=t.em(i);break}case"codespan":{r+=t.codespan(i);break}case"br":{r+=t.br(i);break}case"del":{r+=t.del(i);break}case"text":{r+=t.text(i);break}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}}class br{constructor(n){$(this,"options");this.options=n||ht}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}$(br,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var hn,af,gs,uf;class V1{constructor(...n){Na(this,hn);$(this,"defaults",ya());$(this,"options",this.setOptions);$(this,"parse",Qt(this,hn,gs).call(this,Ye.lex,Ze.parse));$(this,"parseInline",Qt(this,hn,gs).call(this,Ye.lexInline,Ze.parseInline));$(this,"Parser",Ze);$(this,"Renderer",ho);$(this,"TextRenderer",Pa);$(this,"Lexer",Ye);$(this,"Tokenizer",po);$(this,"Hooks",br);this.use(...n)}walkTokens(n,t){var l,o;let r=[];for(const i of n)switch(r=r.concat(t.call(this,i)),i.type){case"table":{const s=i;for(const a of s.header)r=r.concat(this.walkTokens(a.tokens,t));for(const a of s.rows)for(const u of a)r=r.concat(this.walkTokens(u.tokens,t));break}case"list":{const s=i;r=r.concat(this.walkTokens(s.items,t));break}default:{const s=i;(o=(l=this.defaults.extensions)==null?void 0:l.childTokens)!=null&&o[s.type]?this.defaults.extensions.childTokens[s.type].forEach(a=>{const u=s[a].flat(1/0);r=r.concat(this.walkTokens(u,t))}):s.tokens&&(r=r.concat(this.walkTokens(s.tokens,t)))}}return r}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(r=>{const l={...r};if(l.async=this.defaults.async||l.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const i=t.renderers[o.name];i?t.renderers[o.name]=function(...s){let a=o.renderer.apply(this,s);return a===!1&&(a=i.apply(this,s)),a}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[o.level];i?i.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),l.extensions=t),r.renderer){const o=this.defaults.renderer||new ho(this.defaults);for(const i in r.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const s=i;let a=r.renderer[s];r.useNewRenderer||(a=Qt(this,hn,af).call(this,a,s,o));const u=o[s];o[s]=(...d)=>{let p=a.apply(o,d);return p===!1&&(p=u.apply(o,d)),p||""}}l.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new po(this.defaults);for(const i in r.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const s=i,a=r.tokenizer[s],u=o[s];o[s]=(...d)=>{let p=a.apply(o,d);return p===!1&&(p=u.apply(o,d)),p}}l.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new br;for(const i in r.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(i==="options")continue;const s=i,a=r.hooks[s],u=o[s];br.passThroughHooks.has(i)?o[s]=d=>{if(this.defaults.async)return Promise.resolve(a.call(o,d)).then(m=>u.call(o,m));const p=a.call(o,d);return u.call(o,p)}:o[s]=(...d)=>{let p=a.apply(o,d);return p===!1&&(p=u.apply(o,d)),p}}l.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,i=r.walkTokens;l.walkTokens=function(s){let a=[];return a.push(i.call(this,s)),o&&(a=a.concat(o.call(this,s))),a}}this.defaults={...this.defaults,...l}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Ye.lex(n,t??this.defaults)}parser(n,t){return Ze.parse(n,t??this.defaults)}}hn=new WeakSet,af=function(n,t,r){switch(t){case"heading":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,r.parser.parseInline(l.tokens),l.depth,g1(r.parser.parseInline(l.tokens,r.parser.textRenderer)))};case"code":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text,l.lang,!!l.escaped)};case"table":return function(l){if(!l.type||l.type!==t)return n.apply(this,arguments);let o="",i="";for(let a=0;a<l.header.length;a++)i+=this.tablecell({text:l.header[a].text,tokens:l.header[a].tokens,header:!0,align:l.align[a]});o+=this.tablerow({text:i});let s="";for(let a=0;a<l.rows.length;a++){const u=l.rows[a];i="";for(let d=0;d<u.length;d++)i+=this.tablecell({text:u[d].text,tokens:u[d].tokens,header:!1,align:l.align[d]});s+=this.tablerow({text:i})}return n.call(this,o,s)};case"blockquote":return function(l){if(!l.type||l.type!==t)return n.apply(this,arguments);const o=this.parser.parse(l.tokens);return n.call(this,o)};case"list":return function(l){if(!l.type||l.type!==t)return n.apply(this,arguments);const o=l.ordered,i=l.start,s=l.loose;let a="";for(let u=0;u<l.items.length;u++){const d=l.items[u],p=d.checked,m=d.task;let y="";if(d.task){const v=this.checkbox({checked:!!p});s?d.tokens.length>0&&d.tokens[0].type==="paragraph"?(d.tokens[0].text=v+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&d.tokens[0].tokens[0].type==="text"&&(d.tokens[0].tokens[0].text=v+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:v+" "}):y+=v+" "}y+=this.parser.parse(d.tokens,s),a+=this.listitem({type:"list_item",raw:y,text:y,task:m,checked:!!p,loose:s,tokens:d.tokens})}return n.call(this,a,o,i)};case"html":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text,l.block)};case"paragraph":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"escape":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text)};case"link":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.href,l.title,this.parser.parseInline(l.tokens))};case"image":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.href,l.title,l.text)};case"strong":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"em":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"codespan":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text)};case"del":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(l.tokens))};case"text":return function(l){return!l.type||l.type!==t?n.apply(this,arguments):n.call(this,l.text)}}return n},gs=function(n,t){return(r,l)=>{const o={...l},i={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);const s=Qt(this,hn,uf).call(this,!!i.silent,!!i.async);if(typeof r>"u"||r===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(r):r).then(a=>n(a,i)).then(a=>i.hooks?i.hooks.processAllTokens(a):a).then(a=>i.walkTokens?Promise.all(this.walkTokens(a,i.walkTokens)).then(()=>a):a).then(a=>t(a,i)).then(a=>i.hooks?i.hooks.postprocess(a):a).catch(s);try{i.hooks&&(r=i.hooks.preprocess(r));let a=n(r,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let u=t(a,i);return i.hooks&&(u=i.hooks.postprocess(u)),u}catch(a){return s(a)}}},uf=function(n,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const l="<p>An error occurred:</p><pre>"+Te(r.message+"",!0)+"</pre>";return t?Promise.resolve(l):l}if(t)return Promise.reject(r);throw r}};const ut=new V1;function U(e,n){return ut.parse(e,n)}U.options=U.setOptions=function(e){return ut.setOptions(e),U.defaults=ut.defaults,Qp(U.defaults),U};U.getDefaults=ya;U.defaults=ht;U.use=function(...e){return ut.use(...e),U.defaults=ut.defaults,Qp(U.defaults),U};U.walkTokens=function(e,n){return ut.walkTokens(e,n)};U.parseInline=ut.parseInline;U.Parser=Ze;U.parser=Ze.parse;U.Renderer=ho;U.TextRenderer=Pa;U.Lexer=Ye;U.lexer=Ye.lex;U.Tokenizer=po;U.Hooks=br;U.parse=U;U.options;U.setOptions;U.use;U.walkTokens;U.parseInline;Ze.parse;Ye.lex;function J1(){const{slug:e}=Fp(),n=el.find(r=>r.slug===e);if(!n)return f.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[f.jsx("p",{children:"글을 찾을 수 없습니다."}),f.jsx(tn,{to:"/blog",className:"text-accent underline",children:"목록으로"})]});const t=U.parse(va(n.body,n.title),{async:!1});return f.jsx("main",{className:"w-full px-6 py-12 md:px-12",children:f.jsxs("div",{className:"mx-auto max-w-3xl",children:[f.jsx(tn,{to:"/blog",className:"text-sm text-accent underline",children:"← 목록으로"}),f.jsx("h1",{className:"mt-4 text-2xl font-bold",children:n.title}),f.jsx("p",{className:"mt-1 text-sm text-muted",children:n.date}),f.jsx("div",{className:"markdown-body mt-8",dangerouslySetInnerHTML:{__html:t}})]})})}function K1(){const e=new Date,n=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${n}-${t}-${r}`}function q1(){const{pat:e}=Lo(),[n,t]=k.useState(""),[r,l]=k.useState(""),[o,i]=k.useState(null),[s,a]=k.useState(!1),[u,d]=k.useState(null),[p,m]=k.useState(null),[y,v]=k.useState(null),[S,C]=k.useState(null);function g(){t(""),l(""),d(null),m(null),v(null)}async function c(){i(null),a(!0);try{const w=y??K1(),E=u??$0(w),T=O0({title:n,date:w},r),I=u?`post: update ${n}`:`post: ${n}`;await p0(`src/content/posts/${E}.md`,T,I,e,p??void 0),i("게시됨 — 배포까지 약 1분 정도 걸려요."),g()}catch(w){i(w instanceof Error?w.message:"게시 중 오류가 발생했습니다.")}finally{a(!1)}}async function h(w){i(null),C(w.slug);try{const E=`src/content/posts/${w.slug}.md`,{content:T,sha:I}=await Ku(E,e),{frontmatter:M,body:A}=Kp(T);t(M.title),l(A),v(M.date),d(w.slug),m(I)}catch(E){i(E instanceof Error?E.message:"글을 불러오지 못했습니다.")}finally{C(null)}}async function x(w){if(window.confirm(`"${w.title}" 글을 삭제할까요? 되돌릴 수 없습니다.`)){i(null),C(w.slug);try{const E=`src/content/posts/${w.slug}.md`,{sha:T}=await Ku(E,e);await f0(E,`post: delete ${w.title}`,T,e),i("삭제됨 — 배포까지 약 1분 정도 걸려요."),u===w.slug&&g()}catch(E){i(E instanceof Error?E.message:"삭제 중 오류가 발생했습니다.")}finally{C(null)}}}return f.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[f.jsx("h1",{className:"text-2xl font-bold",children:"Write"}),f.jsx("p",{className:"mt-4 rounded-md bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",children:"ADMIN에서 입력한 토큰으로 글을 올립니다. 이 저장소(ShinHeeYoun/ShinHeeYoun.github.io) 전용, Contents: Read and write 권한만 있는 fine-grained PAT를 사용하세요. 이 토큰은 브라우저 localStorage에 저장되며, 이 브라우저에서 스크립트를 실행할 수 있는 누구나 읽을 수 있습니다. 공용 PC에서는 ADMIN에서 로그아웃하세요."}),f.jsxs("div",{className:"mt-4",children:[f.jsxs("label",{className:"block text-sm font-medium",children:["제목 ",u&&f.jsxs("span",{className:"text-xs text-muted",children:["(수정 중: ",u,")"]})]}),f.jsx("input",{type:"text",value:n,onChange:w=>t(w.target.value),className:"mt-1 w-full rounded-md border border-border bg-surface p-2 text-foreground"})]}),f.jsxs("div",{className:"mt-4",children:[f.jsx("label",{className:"block text-sm font-medium",children:"본문 (Markdown)"}),f.jsx("textarea",{value:r,onChange:w=>l(w.target.value),rows:12,className:"mt-1 w-full rounded-md border border-border bg-surface p-2 font-mono text-sm text-foreground"})]}),f.jsxs("div",{className:"mt-4 flex gap-2",children:[f.jsx("button",{type:"button",onClick:c,disabled:s||!e||!n||!r,className:"rounded-md bg-accent px-4 py-2 text-background transition-colors hover:bg-accent-hover disabled:opacity-50",children:s?"게시 중...":u?"수정 게시":"게시"}),u&&f.jsx("button",{type:"button",onClick:g,className:"rounded-md border border-border px-4 py-2 hover:bg-surface",children:"취소"})]}),o&&f.jsx("p",{className:"mt-4 text-sm",children:o}),f.jsx("h2",{className:"mt-12 text-xl font-semibold",children:"내 글 목록"}),f.jsx("ul",{className:"mt-4 space-y-2",children:el.map(w=>f.jsxs("li",{className:"flex items-center justify-between rounded-md border border-border p-3",children:[f.jsxs("span",{children:[w.title," ",f.jsxs("span",{className:"text-xs text-muted",children:["(",w.date,")"]})]}),f.jsxs("span",{className:"flex gap-3",children:[f.jsx("button",{type:"button",onClick:()=>h(w),disabled:S!==null||!e,className:"text-sm text-accent underline disabled:opacity-50",children:S===w.slug?"불러오는 중...":"수정"}),f.jsx("button",{type:"button",onClick:()=>x(w),disabled:S!==null||!e,className:"text-sm text-red-600 underline disabled:opacity-50 dark:text-red-400",children:"삭제"})]})]},w.slug))})]})}const cf=[{id:"calculator",name:"계산기",description:"기본 사칙연산을 지원하는 버튼식 계산기입니다."},{id:"dino",name:"공룡 점프 게임",description:"새는 숙여서 피하고 나무는 불덩이로 태우며 달리는 공룡 게임입니다. 입력과 게임 로직이 로그로 흐릅니다."}];function X1(){return f.jsxs("main",{className:"w-full px-6 py-12 md:px-12",children:[f.jsx("h1",{className:"text-2xl font-bold",children:"Tools"}),f.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:cf.map(e=>f.jsx(tn,{to:`/tools/${e.id}`,className:"block",children:f.jsxs("article",{className:"card",children:[f.jsx("h2",{className:"card-title",children:e.name}),f.jsx("p",{className:"mt-2 text-foreground/80",children:e.description})]})},e.id))})]})}const df={display:"0",pendingValue:null,pendingOperator:null,overwrite:!1};function uc(e,n,t){switch(t){case"+":return e+n;case"-":return e-n;case"×":return e*n;case"÷":return n===0?NaN:e/n}}function Q1(e,n){switch(n.type){case"digit":return e.overwrite||e.display==="0"?{...e,display:n.digit,overwrite:!1}:{...e,display:e.display+n.digit};case"decimal":return e.overwrite?{...e,display:"0.",overwrite:!1}:e.display.includes(".")?e:{...e,display:e.display+"."};case"operator":{const t=Number(e.display);if(e.pendingOperator!==null&&!e.overwrite){const r=uc(e.pendingValue??0,t,e.pendingOperator);return{display:String(r),pendingValue:r,pendingOperator:n.operator,overwrite:!0}}return{...e,pendingValue:t,pendingOperator:n.operator,overwrite:!0}}case"equals":{if(e.pendingOperator===null)return e;const t=Number(e.display),r=uc(e.pendingValue??0,t,e.pendingOperator);return{display:String(r),pendingValue:null,pendingOperator:null,overwrite:!0}}case"clear":return df}}const Y1=[{kind:"digit",label:"7"},{kind:"digit",label:"8"},{kind:"digit",label:"9"},{kind:"operator",label:"÷",operator:"÷"},{kind:"digit",label:"4"},{kind:"digit",label:"5"},{kind:"digit",label:"6"},{kind:"operator",label:"×",operator:"×"},{kind:"digit",label:"1"},{kind:"digit",label:"2"},{kind:"digit",label:"3"},{kind:"operator",label:"-",operator:"-"},{kind:"digit",label:"0"},{kind:"decimal",label:"."},{kind:"equals",label:"="},{kind:"operator",label:"+",operator:"+"},{kind:"clear",label:"C"}];function Z1(){const[e,n]=k.useReducer(Q1,df);function t(r){switch(r.kind){case"digit":n({type:"digit",digit:r.label});break;case"decimal":n({type:"decimal"});break;case"operator":n({type:"operator",operator:r.operator});break;case"equals":n({type:"equals"});break;case"clear":n({type:"clear"});break}}return f.jsxs("div",{className:"mx-auto max-w-xs",children:[f.jsx("div",{className:"mb-4 rounded-md border border-border bg-surface p-4 text-right text-2xl font-mono break-all",children:e.display}),f.jsx("div",{className:"grid grid-cols-4 gap-2",children:Y1.map((r,l)=>f.jsx("button",{type:"button",onClick:()=>t(r),className:`rounded-md border p-3 text-lg transition-colors ${r.kind==="equals"?"border-accent bg-accent text-background hover:bg-accent-hover":"border-border hover:bg-surface"} ${r.kind==="clear"?"col-span-4":""}`,children:r.label},l))})]})}const ev="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNEAAABkBAMAAABayruYAAAAJFBMVEUAAADa2tr/////9/e6urpTU1O5ubn39/f///9ZWVlfX1/z8/O/OctmAAAACXRSTlMA//////////ZO3iNwAAALPElEQVR4AezdwY6bShMF4GP6krX9Bqgk9kiI/SzyAAir9lnlFfL6N26OWhXckDae9mClj/L7L1czMMbfbYDMOCgpKSkpwelyRmIEd6mEhTQpDabvu1C7vsf2ALM6cLlctquVtq2YDwC1jrfHEVDV8fagvln7p7XOlUKVi9SKWrncY5GQnN0DhLuZ1HZJa7WZPemU0GCc6hUMBtVue4BZHeD3v1caTn9KIyiPSimIvjw8SqtDVaQlvKrT2e91JEVUsEilOtGTNkkNUglWnFLX1oDrWSwGSOZ8V91CRczFDnBkWVEaKG0WBISZDPOTeeD2MIZK/Sz4YESUkbxdRhlkTXTrJ74d+aQ1bFRPSRvYjUuLmLOKmNjIch3/fQesGygrHW/SyO2WWzWmSyvSHjpVE1WJSWsIqwJk0agmSmsb39gnzbGKSaOXyJTGKmFSA6vvv/Nh3NQaDpyjPWaCp22mt0+ahkj+LlTzU4tu3Ujjrt4nrZoIq20qlT8brW/4k7S5sQGq73ZJO+M5aawjc5pHRmmYLxMozY/64llp8oAeeaQrMWkir5EGnSPLg8aZ6OaIrJ3n8WsX0lptPCy5ldOiYaT5xro0p9cEaa7nAENd99DOrEzIK0btxOrDSKMl0JeyCgugtr2DSWunmDR2Xy7tdF7c7MgmrfmLNDa7LWmOX9pllzbSDac0UBqrpTQOHOboeQBpIWJOjU3Oq8dItu+pNZRWLaWFBg+nnyBt6FhxIMIrVGxfFqGujcuDj/lkf6S0EeYC9E5aGDiUtAMcPUNkMZ8xl/Oj0qqJ0tomSFs2xDfkaWlOr1FpZzwrzU5qP3jn1px/qeroQUGVDyR2q/hs9X5auSI44T5nLheTJkppdnDpiNJCY1ta3wVQcB2lceBrpH3Dj29F2qdKO50vEWunl0qb6RDUcO0ojQOGYFya6++gnVlRGiubIO1CXgtq+IFPTZF2AeJvBBeT+Ffz8TlpvJnhZTleSTo+NwOB4Iq0QbvPl/btJz41Rdpanpemf5EWbmZQVheXZgei0m7Fp0v7+Ts/APteqI6savX/Y22XCa3NJVlH9qrP092DSROfv3qUOXdt/t8z0iyo3rjplgMJ0ugkemPjHCobnKK3PPiFnNOOL61Iq95cGq89rZ9aQ6l1MKNYhLqi9XKZX79if0EokqNrk9FZwtZj0EJks01pamYztFYaSz7qXmmue5U0f+0Zs0FpWqR9rbSpIqwGFWEpG0Fau1/a4Fn1r5rTskv7pV5aJeYwA4hKli4UjFXmh2LhGho8mujW1yNzlFE+R7QdpDWUNgGoOHmxQWnazP090nr/R/UV0sLfe2ryGVfcZB1Zkms+qLRKhGki0iTkC6VNglmaNKC0KTSCNAhnvf3SOnT5pW3pwlgnzWnLqwOY9ghKE2nDzuQ7laUL81KMtHlYDC9TtpNIY+xJsrTl1pmnD6I8OeNE1gAsGzZgpIGz3pa0fkvaFe7qpfX5pH18fPyj0sKX6SRipTHKiHyJtIrS0Fppk4ANwgvSpNmW5hOXdu078Cab5pP23/cZx9oZV6I0qI5RaVC9SVO+dwyd5OlCNXKHQ9QsTF5qy8nY0zRp0a2nUiPO1bY9O6O0RaO10hpsSHPb0oD80vzP3AKqutSVfD+NITS7JAnrQaWRFeulNA35ImmVzLAgbZBmGySnKdIwJEjDkH1Oe4U0+94JnWTqQlUNNARpd5napTob2QYU33qqNEbifUn+3ahbK0Ga25bm/JzGhTKep+VOTmlFWpMiDcOmtKEbtLs9aNZrz9dIY+z5fKYu1MTc5dDVTBKlliBtsfWUyNpXiG2nSpvENHiJqT1B9To/dIDjQFSa0+ugvV5d32f7G/Yi7d2lAVYaQ0zMFeAgB0jwThrglDYzSMMXSIOPZOnGpW1Tm5pK2qelIS2yeptXGOB5aZ0zNaXZAaqLSKPNIm21W6TRCakMpqY0/8QNlmNcWpfj9wheElEbydxFVBpE1qVhSS2FkOyTlrDsPmlGVxfQXPuO0swAh1gupdHm+0uT3F1EoGWXJjiANCLqezuJMYMZIEGWVhoHcvwW3uupSfYurLRtapPc0iBOTXywFtkpTZBJGvp+CCdmvJIEYwZIkKWRlu932I8vrUjL8KlWhuDwhtLSr+3zdxGDZqnxdi2LBlhSEwlF+qv6XGkQaWZyImmNHZ815HojLfETYFguoeG0+gkwx5ZWpO3Krk+14tVCzk+1ej01kVd0EYHmNf15a2NOw1FLTSBM6qtKjajgYNJ4upb3k/r+TWki7SRr0iYRlX9Kmh/su8yfPvqa8MglqiKpXeGBzXYlaQ2khntpLX9AyEuLsOFWU+XYrSdHcDxpbtAuDGT6ROV/SVollNZULdcd32oSHZ7OcevKvKc0WGmZPiX+ZRFVgaikd3lgW1JLWsOs7F6a/3yLBmvSBBAh5/2vKn/ySztyji8NVZAW1m1CaXNQpL2vNOFDWjcSEUldAxQxaSLSTg3WpBHYQ9IERdpqijQmLi09qkXaYY+eKqndeBLXAFU+RA6gTcKqd7yq40hzFlS3MRCX1uHoKdJqfG2c86AGb6Wbf1b7ejcAx4GINA68c8Jvhqd240lbw3p4hra66vSoLrZ+gAyDhqnLXZUzlB0gwXnAWWl2IH+KtPeOc/3vdCCoWxYDJEhfHVz4LTwzkJKSEmetDN1ygARvA47/7OfQud4OJKWkxFJxCQOh5pP3S0lJSUlJSYmq4sipVcdF/Y4pqcfbnwNHgXFRv2FKagWgOG74D97a+h1Tonw8ZgiLjxo6nxQteV1GzmzK8NlxYkyMz/lAydGmEEVJSe7Mc0dJrY8uPyaedO4PN5I96Zsr+yp9c6ppKwKjSIuurYAZk48wy4xJb7COO2jU3CIXKPsqcV8dMnXaEjuiO76DL9xLZV/Va9+T6oP/LSVN3yO3wMXzRLEnY9lXyUk8dOquw8R4vHNG1T3fmCa90LKv0vfV/+2dQW6jQBBFEascwyqpL9RSiZO0ejvL4QZDbmB8g/hy0zXwRUPZ0QiRDfwnJ5aesstTCdNNm7yAEEJaWXE7ztQQEnRFPM6Q04+orftuwLS64XaUacjpR5Q7KyQuRirMBt0QjzLNmSHyr7TNSVuFOJuPYRjGifsw/GFp+yCtqBHlnemH4XOcKdH9Ymm7IKIT8eYNShvB/X1p3cYY2RlNznSXKI20CgQmrk2PkWZ8U1remtrBqDddukJpRNxHvxDDaqj1w7hwn0pLKbl5lfOL0pIrzZkuX6A00sYqDwy5sBpq/edYMZWWsxWTC3VpaWsK6o12G5NgmhPD0uRlaQFmKu05Pp6FL5TW5ZxRydSMqbQ1BXXGulqbDNOcFtKqqMoM7q5FM6Eq7WGlGShNp5lmoBm0B4MQVwYzbW0STENOS1AJUTQKLsuso2ARiBRnprfKvsbCo7zdUVpeLrLiG5O6vDX22pguw5y0NIKurDIJqorSROyXvU+ljVaaUZeWXFfedMmX5kyXLlAaCXNkWpcWA0JAaV/PbWkp/09pzmjypek1SmNp0ZWmMEtpoytNfUU7zTVLY2nK0sjPlKa+NGFp5AdKc58INE4/LI0cWloUe6E0TDjxpT1YGtmLaEFEcD8NJkiA6S2xmRGlZYBmDjENOftWDtFCrEyU9WrUBFajsIqElaajTEOuVFpQZKDx3Qr7Mozwx4eYhpyXsJR2m4wsGbzeNcQ9t2QHLf7pKjD1SPM7IVka2UUruKshMMGEISyNHMe8mh6lMrhuc88RDCyN7Gba9xhvlYlaBJ/CI8fSBg0qt9pIEYvpkdrdRhpLI57dXw66Mh+/K3haAuEJMOQ88FQrsoO/etICpT2ul1QAAAAASUVORK5CYII=",Kr=1800,Ir=240,nv=e=>e*e*(3-2*e);function vs(e){const n=e+Ir/2,t=Math.floor(n/Kr),r=n-t*Kr,l=t%2;if(r>=Ir)return l;const o=t===0?0:(t-1)%2;return o+(l-o)*nv(r/Ir)}function pf(e,n){const t=Kr*2;return(((e-n+Ir/2)%t+t)%t-Ir/2)/Kr}const cc=e=>pf(e,0),dc=e=>pf(e,Kr),me=600,Mt=150,et=130,Ea=40,pc=9,tv=.5,rv=4,lv=14,ov=6,yt=40,fc=30,iv=10,hc=10,mc=Ea+44,sv=32,av=14,uv=1/600,gc=Ea+8,cv={w:28,h:43},ff={w:40,h:24},ur=2,nt={small:{w:17,h:35,y:0},large:{w:25,h:50,y:0},bird:{w:46,h:40,y:32},tree:{w:30,h:130,y:0}},dv={small:0,large:0,bird:100,tree:200},hf={y:0,vy:0,ducking:!1,speed:ov,distance:0,ticks:0,nextSpawn:400,obstacles:[],fireballs:[],fireCooldown:0,meteors:[],milestone:0,milestoneTick:0,over:!1},mf=e=>Math.floor(e.distance/yt),Ta=e=>e.ducking&&e.y===0,ln=e=>({type:"event",text:e}),he=e=>({type:"code",text:e}),gf=["ArrowUp","Space"],vf=[...gf,"ArrowDown","ArrowLeft","ArrowRight"];function pv(e,n){if(!vf.includes(n))return{state:e,logs:[]};const t=[ln(`keydown ${n}`)];if(n==="ArrowLeft"||n==="ArrowRight"){const l=Math.min(lv,Math.max(rv,e.speed+(n==="ArrowRight"?1:-1))),o=n==="ArrowRight"?"Math.min(MAX_SPEED, speed + 1)":"Math.max(MIN_SPEED, speed - 1)";return t.push(he(`speed = ${o}   // speed=${l}`)),{state:{...e,speed:l},logs:t}}if(n==="ArrowDown")return t.push(he(`ducking = true   // hitbox h=${ff.h} while on the ground`)),{state:{...e,ducking:!0},logs:t};if(e.over)return t.push(he(`if (over) state = restart(speed)   // restart, speed=${e.speed}`)),{state:{...hf,speed:e.speed},logs:t};if(n==="ArrowUp")return e.y===0?(t.push(he(`if (y === 0) vy = JUMP_V   // vy=${pc}`)),{state:{...e,vy:pc},logs:t}):(t.push(he(`if (y === 0) vy = JUMP_V   // ignored: y=${e.y.toFixed(1)} (airborne)`)),{state:e,logs:t});if(e.fireCooldown>0)return t.push(he(`if (fireCooldown === 0) fireballs.push(...)   // ignored: cooldown=${e.fireCooldown}`)),{state:e,logs:t};const r=e.y+(Ta(e)?av:sv);return t.push(he(`if (fireCooldown === 0) fireballs.push({ x: ${mc}, y: ${r} })   // cooldown=${fc}`)),{state:{...e,fireballs:[...e.fireballs,{x:mc,y:r}],fireCooldown:fc},logs:t}}function fv(e,n){return n!=="ArrowDown"?{state:e,logs:[]}:{state:{...e,ducking:!1},logs:[ln(`keyup ${n}`),he("ducking = false")]}}function hv(e,n=Math.random){if(e.over)return{state:e,logs:[]};const t=[];let{y:r,vy:l,nextSpawn:o}=e;const i=e.ticks+1,s=e.distance+e.speed;let a=e.obstacles.map(c=>({...c,x:c.x-e.speed})).filter(c=>c.x+nt[c.kind].w>0);(r>0||l>0)&&(r+=l,l-=tv,r<=0&&(r=0,l=0,t.push(ln("landed"),he("if (y <= 0) { y = 0; vy = 0 }   // on the ground again"))));const u=[];for(const c of e.fireballs){const h={...c,x:c.x+iv},x=a.findIndex(w=>w.kind==="tree"&&h.x+hc>w.x+ur&&h.x<w.x+nt.tree.w);x>=0?(t.push(ln("tree burned"),he(`if (fireball.x + ${hc} > tree.x) obstacles.remove(tree)   // tree.x=${Math.round(a[x].x)}`)),a=a.filter((w,E)=>E!==x)):h.x<me&&u.push(h)}if(s>=o){const c=Math.floor(s/yt),h=Object.keys(nt).filter(w=>c>=dv[w]),x=h[Math.min(h.length-1,Math.floor(n()*h.length))];a.push({x:me,kind:x}),o=s+e.speed*(45+n()*30),t.push(ln("spawn obstacle"),he(`obstacles.push({ x: WIDTH, kind: '${x}' })   // next at distance=${Math.round(o)}`))}const d=Math.floor(e.distance/yt/100),p=Math.floor(s/yt/100);let{milestone:m,milestoneTick:y}=e;p>d&&(m=p,y=i,t.push(ln(`${p*100} m`),he(`if (meters % 100 === 0) effect('${p*100} m')   // meters=${Math.floor(s/yt)}`)));const v=vs(i);v>=.5!=vs(e.ticks)>=.5&&t.push(ln(v>=.5?"night falls":"day breaks"),he(`sky = night >= 0.5 ? 'night' : 'day'   // night=${v.toFixed(2)}`));let S=e.meteors.map(c=>({x:c.x-6,y:c.y+3.5})).filter(c=>c.y<et&&c.x>-60);if(v>.6&&n()<uv){const c={x:250+Math.floor(n()*400),y:-10};S=[...S,c],t.push(ln("meteor"),he(`if (night > 0.6 && rng() < 1 / 600) meteors.push({ x: ${c.x}, y: ${c.y} })   // night=${v.toFixed(2)}`))}const C=Ta({...e,y:r})?ff:cv,g=a.some(c=>{const{w:h,h:x,y:w}=nt[c.kind];return gc<c.x+h-ur&&gc+C.w>c.x+ur&&r<w+x-ur&&r+C.h>w+ur});return g&&t.push(ln("collision"),he(`if (overlaps(dino, obstacle)) over = true   // meters=${Math.floor(s/yt)}`)),{state:{...e,y:r,vy:l,distance:s,ticks:i,nextSpawn:o,obstacles:a,fireballs:u,fireCooldown:Math.max(0,e.fireCooldown-1),meteors:S,milestone:m,milestoneTick:y,over:g},logs:t}}const vi=240;function mv(e){for(let n=0;n<e.length;n+=4)e[n]>vi&&e[n+1]>vi&&e[n+2]>vi&&(e[n+3]=0)}const mo=2,vc=1e3/60,gv=15,vv=10,ba="dino_best_m",Pe={x:848,y:2,w:44,h:47,standing:0,running:[88,132],crashed:220,crashedFootPad:2},yc={w:59,frames:[264,323]},cr={x:134,y:2,w:46,h:40,frames:[0,46]},yv={small:228,large:332},El={x:86,y:2,w:46,h:14},kn={x:2,y:54,w:1200,h:12,lineRow:4},Oe={skyTop:[138,200,255],skyBottom:[226,243,255],ink:[62,62,62],dino:[8,140,90],hud:[60,72,90],trunk:[122,86,50],bark:[92,64,36],leaves:[42,150,84],leavesLight:[86,190,110]},Le={skyTop:[6,10,30],skyBottom:[26,36,70],ink:[226,233,241],dino:[61,220,151],hud:[160,172,190],trunk:[74,52,34],bark:[52,36,24],leaves:[24,88,58],leavesLight:[40,124,80]},be=(e,n,t)=>`rgb(${e.map((r,l)=>Math.round(r+(n[l]-r)*t)).join(",")})`,xv=Array.from({length:36},(e,n)=>({x:(n*97+31)%580+10,y:(n*53+7)%80+5}));function Sv(){try{return Number(localStorage.getItem(ba))||0}catch{return 0}}function wv(e){try{localStorage.setItem(ba,String(e))}catch{}}let Sn=null,dr=null;function pr(e,n,t,[r,l,o,i],s,a){if(!Sn){Sn=document.createElement("canvas"),Sn.width=n.width,Sn.height=n.height;const d=Sn.getContext("2d");d.drawImage(n,0,0);const p=d.getImageData(0,0,Sn.width,Sn.height);mv(p.data),d.putImageData(p,0,0),dr=document.createElement("canvas"),dr.width=kn.w,dr.height=60}const u=dr.getContext("2d");u.globalCompositeOperation="source-over",u.clearRect(0,0,o,i),u.drawImage(Sn,r,l,o,i,0,0,o,i),u.globalCompositeOperation="source-in",u.fillStyle=t,u.fillRect(0,0,o,i),e.drawImage(dr,0,0,o,i,s,a,o,i)}function kv(e,n,t){const r=e.createLinearGradient(0,0,0,Mt);r.addColorStop(0,be(Oe.skyTop,Le.skyTop,n)),r.addColorStop(1,be(Oe.skyBottom,Le.skyBottom,n)),e.fillStyle=r,e.fillRect(0,0,me,Mt),e.fillStyle="#fff",xv.forEach((a,u)=>{e.globalAlpha=n*(.45+.55*Math.sin(t/18+u*1.7)**2),e.fillRect(a.x,a.y,u%5===0?2:1,u%5===0?2:1)});const l=40+520*cc(t),o=98-62*Math.sin(Math.PI*cc(t));e.globalAlpha=1-n,e.fillStyle="#ffd34d",e.beginPath(),e.arc(l,o,12,0,Math.PI*2),e.fill(),e.globalAlpha=(1-n)*.25,e.beginPath(),e.arc(l,o,18,0,Math.PI*2),e.fill();const i=40+520*dc(t),s=98-62*Math.sin(Math.PI*dc(t));e.globalAlpha=n,e.fillStyle="#eef3fb",e.save(),e.beginPath(),e.rect(0,0,me,Mt),e.moveTo(i+15,s-3),e.arc(i+5,s-3,10,0,Math.PI*2),e.clip("evenodd"),e.beginPath(),e.arc(i,s,11,0,Math.PI*2),e.fill(),e.restore(),e.globalAlpha=1}function Cv(e,n){for(const t of n.meteors){const r=e.createLinearGradient(t.x,t.y,t.x+42,t.y-24.5);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=r,e.lineWidth=2,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+42,t.y-24.5),e.stroke(),e.fillStyle="#fff",e.fillRect(t.x-1.5,t.y-1.5,3,3)}}function Pv(e,n,t){const r=et-nt.tree.h,l=(s,a,u,d,p)=>{e.fillStyle=s,e.fillRect(n+a,r+u,d,p)};l(be(Oe.trunk,Le.trunk,t),5,40,20,nt.tree.h-40),l(be(Oe.bark,Le.bark,t),9,50,3,70),l(be(Oe.bark,Le.bark,t),18,62,3,58);const o=be(Oe.leaves,Le.leaves,t);l(o,7,0,16,8),l(o,2,8,26,14),l(o,0,22,30,18),l(o,2,40,8,8),l(o,20,62,10,10),l(o,0,76,9,9);const i=be(Oe.leavesLight,Le.leavesLight,t);l(i,6,4,8,4),l(i,4,14,8,4),l(i,14,27,10,5)}function Ev(e,n,t,r){const l=et-t,o=r%4<2?0:1;e.fillStyle="rgba(255,90,30,0.45)",e.fillRect(n-16,l-2+o,10,4),e.fillStyle="rgba(255,120,30,0.7)",e.fillRect(n-8,l-4-o,10,8),e.fillStyle="#ff8c1a",e.fillRect(n,l-5,10,10),e.fillStyle="#ffd23f",e.fillRect(n+2,l-3,6,6)}function Tv(e,n,t){const r=n.ticks-n.milestoneTick;if(n.milestone===0||r>=90)return;r<24&&(e.fillStyle=`rgba(255,255,255,${.4*(1-r/24)})`,e.fillRect(0,0,me,Mt));const l=30+12*Math.max(0,1-r/20);e.globalAlpha=r<60?1:(90-r)/30,e.font=`bold ${l}px ui-monospace, Consolas, monospace`,e.textAlign="center",e.lineWidth=4,e.strokeStyle=be([255,255,255],[10,14,30],t),e.fillStyle=be(Oe.dino,Le.dino,t),e.strokeText(`${n.milestone*100} m`,me/2,70),e.fillText(`${n.milestone*100} m`,me/2,70);for(let o=0;o<12;o++){const i=o/12*Math.PI*2;e.fillStyle=o%2?"#ffd23f":be(Oe.dino,Le.dino,t),e.fillRect(me/2+Math.cos(i)*(30+r*2.4),58+Math.sin(i)*(18+r*1.2),4,4)}e.globalAlpha=1}function bv(e,n,t,r,l){const o=vs(t.ticks),i=Math.min(1,Math.max(0,(o-.35)/.3)),s=i*i*(3-2*i),a=be(Oe.ink,Le.ink,s),u=be(Oe.dino,Le.dino,s),d=be(Oe.hud,Le.hud,s);e.setTransform(mo,0,0,mo,0,0),e.imageSmoothingEnabled=!1,e.clearRect(0,0,me,Mt),kv(e,o,t.ticks),Cv(e,t),e.globalAlpha=.5;for(const h of[90,260,430]){const x=((h-t.distance*.3)%(me+80)+me+80)%(me+80)-40;pr(e,n,d,[El.x,El.y,El.w,El.h],x,24+h%24)}e.globalAlpha=1;const p=et-kn.lineRow,m=t.distance%kn.w;for(const h of[-m,kn.w-m])pr(e,n,d,[kn.x,kn.y,kn.w,kn.h],h,p);for(const h of t.obstacles){const{w:x,h:w,y:E}=nt[h.kind];if(h.kind==="tree")Pv(e,h.x,o);else if(h.kind==="bird"){const T=cr.frames[Math.floor(t.ticks/vv)%2];pr(e,n,a,[cr.x+T,cr.y,cr.w,cr.h],h.x,et-E-w)}else pr(e,n,a,[yv[h.kind],Pe.y,x,w],h.x,et-w)}for(const h of t.fireballs)Ev(e,h.x,h.y,t.ticks);const y=Math.floor(t.ticks/gv)%2;let v=Pe.x+Pe.standing,S=Pe.w;t.over?v=Pe.x+Pe.crashed:Ta(t)?(v=Pe.x+yc.frames[y],S=yc.w):t.y===0&&l&&(v=Pe.x+Pe.running[y]);const C=et-Pe.h-t.y+(t.over?Pe.crashedFootPad:0);pr(e,n,u,[v,Pe.y,S,Pe.h],Ea,C),Tv(e,t,o);const g=mf(t);e.font="14px ui-monospace, Consolas, monospace",e.fillStyle=d,e.textAlign="left",e.fillText(`speed ${t.speed}`,10,20),e.textAlign="right",e.fillText(`HI ${r} m   ${g} m`,me-10,20);const c=t.over?"GAME OVER - ↑ / Space 로 다시 시작":l?"":"클릭 후 ↑ 또는 Space 로 시작";c&&(e.fillStyle=a,e.textAlign="center",e.fillText(c,me/2,76))}function Iv(){const e=k.useRef(null),n=k.useRef(null),t=k.useRef(hf),r=k.useRef(!1),l=k.useRef(Sv()),o=k.useRef(0),[i,s]=k.useState([]);function a(m){if(m.length===0)return;const y=m.map(v=>({...v,id:o.current++}));s(v=>[...v,...y].slice(-60))}function u(m){const y=pv(t.current,m);t.current=y.state,gf.includes(m)&&(r.current=!0),a(y.logs)}function d(m){vf.includes(m.code)&&(m.preventDefault(),m.repeat||u(m.code))}function p(m){const y=fv(t.current,m.code);t.current=y.state,a(y.logs)}return k.useEffect(()=>{},[]),k.useEffect(()=>{const m=e.current.getContext("2d"),y=new Image;y.src=ev;let v=0,S=performance.now(),C=0;function g(){const h=hv(t.current),x=[...h.logs];if(h.state.over&&!t.current.over){const w=mf(h.state);w>l.current&&(l.current=w,wv(w),x.push({type:"code",text:`if (meters > best) localStorage.setItem('${ba}', meters)   // best=${w}`}))}t.current=h.state,a(x)}function c(h=performance.now()){if(r.current)for(C+=Math.min(h-S,100);C>=vc;)g(),C-=vc;else C=0;S=h,y.complete&&y.naturalWidth>0&&bv(m,y,t.current,l.current,r.current),v=requestAnimationFrame(c)}return c(),()=>cancelAnimationFrame(v)},[]),k.useEffect(()=>{const m=n.current;m&&(m.scrollTop=m.scrollHeight)},[i]),f.jsxs("div",{children:[f.jsx("p",{className:"mb-3 text-sm text-muted",children:"게임 화면을 클릭한 뒤 ↑ 점프, ↓ 숙이기, Space 불덩이, ← → 감속·증속합니다."}),f.jsx("canvas",{ref:e,width:me*mo,height:Mt*mo,tabIndex:0,"aria-label":"공룡 점프 게임",onKeyDown:d,onKeyUp:p,onBlur:()=>{r.current=!1,t.current={...t.current,ducking:!1}},onMouseDown:m=>{m.currentTarget.focus(),u("ArrowUp")},className:"w-full cursor-pointer rounded-md border border-border bg-surface outline-none focus-visible:border-accent"}),f.jsxs("div",{ref:n,role:"log","aria-live":"off",className:"mt-4 h-56 overflow-y-auto rounded-md border border-border bg-surface p-3 font-mono text-xs leading-5",children:[f.jsx("div",{className:"text-muted",children:"$ tail -f dino.log"}),i.map(m=>f.jsxs("div",{className:"whitespace-pre-wrap break-all",children:[f.jsx("span",{className:m.type==="event"?"text-accent":"text-muted",children:m.type==="event"?"$":">"})," ",m.text]},m.id))]}),f.jsxs("p",{className:"mt-3 text-xs text-muted",children:["공룡 그래픽:"," ",f.jsx("a",{href:"https://github.com/ShinHeeYoun/ShinHeeYoun.github.io/blob/main/src/tools/dino/CHROMIUM-LICENSE.txt",target:"_blank",rel:"noreferrer",className:"underline",children:"Chromium 프로젝트 (BSD 3-Clause)"})]})]})}const _v={calculator:Z1,dino:Iv};function Nv(){const{id:e}=Fp(),n=e?_v[e]:void 0,t=cf.find(r=>r.id===e);return!n||!t?f.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-12",children:[f.jsx("p",{children:"도구를 찾을 수 없습니다."}),f.jsx(tn,{to:"/tools",className:"text-accent underline",children:"목록으로"})]}):f.jsxs("main",{className:"mx-auto max-w-2xl px-4 py-12",children:[f.jsx(tn,{to:"/tools",className:"text-sm text-accent underline",children:"← 목록으로"}),f.jsx("h1",{className:"mt-4 text-2xl font-bold",children:t.name}),f.jsx("div",{className:"mt-6",children:f.jsx(n,{})})]})}const Av=[{name:"React 18 · TypeScript",description:"화면을 컴포넌트 단위로 나눠 만들고, 타입으로 실수를 빌드 단계에서 잡습니다."},{name:"Vite",description:"개발 서버와 빌드 도구입니다. 빠르고 설정이 단순하며, 마크다운 글을 빌드할 때 읽어 오는 기능(import.meta.glob)도 Vite가 제공합니다."},{name:"Tailwind CSS",description:"유틸리티 클래스로 스타일을 작성합니다. 색은 CSS 변수 토큰으로 묶어서 다크/라이트 테마를 한 곳에서 바꿉니다."},{name:"React Router (HashRouter)",description:"페이지 이동을 맡습니다. GitHub Pages에는 서버 설정이 없어서 주소에 #을 쓰는 방식을 택했고, 덕분에 어느 페이지에서 새로고침해도 404가 나지 않습니다."},{name:"marked",description:"블로그의 마크다운 본문을 HTML로 바꿔 줍니다."},{name:"GitHub Pages · GitHub Actions",description:"정적 파일 호스팅과 자동 배포입니다. main에 push하면 테스트, 빌드, 배포가 차례로 실행됩니다."},{name:"GitHub Contents API",description:"Write 페이지가 브라우저에서 글 파일을 저장소에 직접 커밋할 때 쓰는 API입니다. 별도 서버 없이 글쓰기를 가능하게 합니다."},{name:"Vitest",description:"단위 테스트 도구입니다. 계산기 로직, 글 머리말(frontmatter) 파서, 테마 선택 규칙, 블로그 검색을 검사합니다."},{name:"Claude Code",description:"설계, 계획, 구현, 리뷰를 함께 진행한 AI 개발 도구입니다. 이 사이트의 코드와 문서 대부분이 이 방식으로 만들어졌습니다."}];function Dv(){return f.jsx("main",{className:"w-full px-6 py-12 md:px-12",children:f.jsxs("div",{className:"max-w-2xl",children:[f.jsx("h1",{className:"text-2xl font-bold",children:"About"}),f.jsx("p",{className:"mt-6 leading-relaxed text-foreground/90",children:"이 페이지는 GitHub Pages 위에서 Claude와 함께 만든 개발 연습 페이지입니다. 블로그, 도구 실행, 브라우저 글쓰기 같은 기능을 하나씩 직접 만들어 보면서, 정적 사이트로 어디까지 할 수 있는지 연습하고 있습니다."}),f.jsx("h2",{className:"mt-10 text-lg font-semibold",children:"사용한 기술"}),f.jsx("ul",{className:"mt-4 space-y-5",children:Av.map(e=>f.jsxs("li",{children:[f.jsx("p",{className:"font-mono text-accent",children:e.name}),f.jsx("p",{className:"mt-1 leading-relaxed text-foreground/90",children:e.description})]},e.name))})]})})}function jv(){return f.jsxs(g0,{children:[f.jsx(S0,{}),f.jsxs(Bg,{children:[f.jsx(wn,{path:"/",element:f.jsx(r1,{})}),f.jsx(wn,{path:"/blog",element:f.jsx(d1,{})}),f.jsx(wn,{path:"/blog/:slug",element:f.jsx(J1,{})}),f.jsx(wn,{path:"/write",element:f.jsx(w0,{children:f.jsx(q1,{})})}),f.jsx(wn,{path:"/tools",element:f.jsx(X1,{})}),f.jsx(wn,{path:"/tools/:id",element:f.jsx(Nv,{})}),f.jsx(wn,{path:"/about",element:f.jsx(Dv,{})})]})]})}Ap(document.getElementById("root")).render(f.jsx(k.StrictMode,{children:f.jsx(qg,{children:f.jsx(jv,{})})}));
