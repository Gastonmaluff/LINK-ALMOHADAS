function iS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g0={exports:{}},kc={},y0={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),oS=Symbol.for("react.portal"),aS=Symbol.for("react.fragment"),lS=Symbol.for("react.strict_mode"),uS=Symbol.for("react.profiler"),cS=Symbol.for("react.provider"),hS=Symbol.for("react.context"),dS=Symbol.for("react.forward_ref"),fS=Symbol.for("react.suspense"),pS=Symbol.for("react.memo"),mS=Symbol.for("react.lazy"),ty=Symbol.iterator;function gS(t){return t===null||typeof t!="object"?null:(t=ty&&t[ty]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v0=Object.assign,w0={};function go(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||_0}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E0(){}E0.prototype=go.prototype;function np(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||_0}var rp=np.prototype=new E0;rp.constructor=np;v0(rp,go.prototype);rp.isPureReactComponent=!0;var ny=Array.isArray,T0=Object.prototype.hasOwnProperty,ip={current:null},I0={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)T0.call(e,r)&&!I0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:tl,type:t,key:s,ref:o,props:i,_owner:ip.current}}function yS(t,e){return{$$typeof:tl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===tl}function _S(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ry=/\/+/g;function Uh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_S(""+t.key):e.toString(36)}function lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case tl:case oS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Uh(o,0):r,ny(i)?(n="",t!=null&&(n=t.replace(ry,"$&/")+"/"),lu(i,e,n,"",function(c){return c})):i!=null&&(sp(i)&&(i=yS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ry,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ny(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Uh(s,a);o+=lu(s,e,n,u,i)}else if(u=gS(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Uh(s,a++),o+=lu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ml(t,e,n){if(t==null)return t;var r=[],i=0;return lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},uu={transition:null},wS={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:uu,ReactCurrentOwner:ip};function S0(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Ml,forEach:function(t,e,n){Ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ml(t,function(){e++}),e},toArray:function(t){return Ml(t,function(e){return e})||[]},only:function(t){if(!sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=go;ce.Fragment=aS;ce.Profiler=uS;ce.PureComponent=np;ce.StrictMode=lS;ce.Suspense=fS;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;ce.act=S0;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=v0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ip.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)T0.call(e,u)&&!I0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:tl,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:hS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cS,_context:t},t.Consumer=t};ce.createElement=A0;ce.createFactory=function(t){var e=A0.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:dS,render:t}};ce.isValidElement=sp;ce.lazy=function(t){return{$$typeof:mS,_payload:{_status:-1,_result:t},_init:vS}};ce.memo=function(t,e){return{$$typeof:pS,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=uu.transition;uu.transition={};try{t()}finally{uu.transition=e}};ce.unstable_act=S0;ce.useCallback=function(t,e){return Bt.current.useCallback(t,e)};ce.useContext=function(t){return Bt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Bt.current.useEffect(t,e)};ce.useId=function(){return Bt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Bt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};ce.useRef=function(t){return Bt.current.useRef(t)};ce.useState=function(t){return Bt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Bt.current.useTransition()};ce.version="18.3.1";y0.exports=ce;var W=y0.exports;const R0=sS(W),ES=iS({__proto__:null,default:R0},[W]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TS=W,IS=Symbol.for("react.element"),AS=Symbol.for("react.fragment"),SS=Object.prototype.hasOwnProperty,RS=TS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CS={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SS.call(e,r)&&!CS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:IS,type:t,key:s,ref:o,props:i,_owner:RS.current}}kc.Fragment=AS;kc.jsx=C0;kc.jsxs=C0;g0.exports=kc;var L=g0.exports,kd={},P0={exports:{}},gn={},k0={exports:{}},b0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,U){var z=F.length;F.push(U);e:for(;0<z;){var Z=z-1>>>1,K=F[Z];if(0<i(K,U))F[Z]=U,F[z]=K,z=Z;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var U=F[0],z=F.pop();if(z!==U){F[0]=z;e:for(var Z=0,K=F.length,Y=K>>>1;Z<Y;){var Q=2*(Z+1)-1,H=F[Q],ie=Q+1,fe=F[ie];if(0>i(H,z))ie<K&&0>i(fe,H)?(F[Z]=fe,F[ie]=z,Z=ie):(F[Z]=H,F[Q]=z,Z=Q);else if(ie<K&&0>i(fe,z))F[Z]=fe,F[ie]=z,Z=ie;else break e}}return U}function i(F,U){var z=F.sortIndex-U.sortIndex;return z!==0?z:F.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,d=3,g=!1,v=!1,R=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(F){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=F)r(c),U.sortIndex=U.expirationTime,e(u,U);else break;U=n(c)}}function D(F){if(R=!1,C(F),!v)if(n(u)!==null)v=!0,O(M);else{var U=n(c);U!==null&&N(D,U.startTime-F)}}function M(F,U){v=!1,R&&(R=!1,E(m),m=-1),g=!0;var z=d;try{for(C(U),f=n(u);f!==null&&(!(f.expirationTime>U)||F&&!A());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,d=f.priorityLevel;var K=Z(f.expirationTime<=U);U=t.unstable_now(),typeof K=="function"?f.callback=K:f===n(u)&&r(u),C(U)}else r(u);f=n(u)}if(f!==null)var Y=!0;else{var Q=n(c);Q!==null&&N(D,Q.startTime-U),Y=!1}return Y}finally{f=null,d=z,g=!1}}var x=!1,T=null,m=-1,y=5,w=-1;function A(){return!(t.unstable_now()-w<y)}function P(){if(T!==null){var F=t.unstable_now();w=F;var U=!0;try{U=T(!0,F)}finally{U?I():(x=!1,T=null)}}else x=!1}var I;if(typeof S=="function")I=function(){S(P)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,B=V.port2;V.port1.onmessage=P,I=function(){B.postMessage(null)}}else I=function(){b(P,0)};function O(F){T=F,x||(x=!0,I())}function N(F,U){m=b(function(){F(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,O(M))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var z=d;d=U;try{return F()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,U){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var z=d;d=F;try{return U()}finally{d=z}},t.unstable_scheduleCallback=function(F,U,z){var Z=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Z+z:Z):z=Z,F){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=z+K,F={id:h++,callback:U,priorityLevel:F,startTime:z,expirationTime:K,sortIndex:-1},z>Z?(F.sortIndex=z,e(c,F),n(u)===null&&F===n(c)&&(R?(E(m),m=-1):R=!0,N(D,z-Z))):(F.sortIndex=K,e(u,F),v||g||(v=!0,O(M))),F},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(F){var U=d;return function(){var z=d;d=U;try{return F.apply(this,arguments)}finally{d=z}}}})(b0);k0.exports=b0;var PS=k0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kS=W,mn=PS;function X(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,Aa={};function cs(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(Aa[t]=e,t=0;t<e.length;t++)N0.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bd=Object.prototype.hasOwnProperty,bS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iy={},sy={};function NS(t){return bd.call(sy,t)?!0:bd.call(iy,t)?!1:bS.test(t)?sy[t]=!0:(iy[t]=!0,!1)}function xS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DS(t,e,n,r){if(e===null||typeof e>"u"||xS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var op=/[\-:]([a-z])/g;function ap(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(op,ap);Et[e]=new zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(op,ap);Et[e]=new zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(op,ap);Et[e]=new zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lp(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DS(e,n,i,r)&&(n=null),r||i===null?NS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pr=kS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),bs=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),up=Symbol.for("react.strict_mode"),Nd=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),Dd=Symbol.for("react.suspense_list"),hp=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),O0=Symbol.for("react.offscreen"),oy=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=oy&&t[oy]||t["@@iterator"],typeof t=="function"?t:null)}var He=Object.assign,Fh;function Qo(t){if(Fh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fh=e&&e[1]||""}return`
`+Fh+t}var jh=!1;function Bh(t,e){if(!t||jh)return"";jh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{jh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function OS(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Bh(t.type,!1),t;case 11:return t=Bh(t.type.render,!1),t;case 1:return t=Bh(t.type,!0),t;default:return""}}function Od(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case bs:return"Portal";case Nd:return"Profiler";case up:return"StrictMode";case xd:return"Suspense";case Dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D0:return(t.displayName||"Context")+".Consumer";case x0:return(t._context.displayName||"Context")+".Provider";case cp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hp:return e=t.displayName||null,e!==null?e:Od(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return Od(t(e))}catch{}}return null}function LS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Od(e);case 8:return e===up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function L0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VS(t){var e=L0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fl(t){t._valueTracker||(t._valueTracker=VS(t))}function V0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=L0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Nu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ld(t,e){var n=e.checked;return He({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ay(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M0(t,e){e=e.checked,e!=null&&lp(t,"checked",e,!1)}function Vd(t,e){M0(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Md(t,e.type,n):e.hasOwnProperty("defaultValue")&&Md(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ly(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Md(t,e,n){(e!=="number"||Nu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xo=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ud(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(X(91));return He({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(X(92));if(Xo(n)){if(1<n.length)throw Error(X(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function U0(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function F0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?F0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jl,j0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jl=jl||document.createElement("div"),jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MS=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){MS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function B0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=B0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var US=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jd(t,e){if(e){if(US[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(X(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(X(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(X(61))}if(e.style!=null&&typeof e.style!="object")throw Error(X(62))}}function Bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function dp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $d=null,Ws=null,Gs=null;function hy(t){if(t=il(t)){if(typeof $d!="function")throw Error(X(280));var e=t.stateNode;e&&(e=Oc(e),$d(t.stateNode,t.type,e))}}function $0(t){Ws?Gs?Gs.push(t):Gs=[t]:Ws=t}function H0(){if(Ws){var t=Ws,e=Gs;if(Gs=Ws=null,hy(t),e)for(t=0;t<e.length;t++)hy(e[t])}}function q0(t,e){return t(e)}function W0(){}var zh=!1;function G0(t,e,n){if(zh)return t(e,n);zh=!0;try{return q0(t,e,n)}finally{zh=!1,(Ws!==null||Gs!==null)&&(W0(),H0())}}function Ra(t,e){var n=t.stateNode;if(n===null)return null;var r=Oc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(X(231,e,typeof n));return n}var Hd=!1;if(vr)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Hd=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Hd=!1}function FS(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var oa=!1,xu=null,Du=!1,qd=null,jS={onError:function(t){oa=!0,xu=t}};function BS(t,e,n,r,i,s,o,a,u){oa=!1,xu=null,FS.apply(jS,arguments)}function zS(t,e,n,r,i,s,o,a,u){if(BS.apply(this,arguments),oa){if(oa){var c=xu;oa=!1,xu=null}else throw Error(X(198));Du||(Du=!0,qd=c)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dy(t){if(hs(t)!==t)throw Error(X(188))}function $S(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(X(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dy(i),t;if(s===r)return dy(i),e;s=s.sibling}throw Error(X(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(X(189))}}if(n.alternate!==r)throw Error(X(190))}if(n.tag!==3)throw Error(X(188));return n.stateNode.current===n?t:e}function Q0(t){return t=$S(t),t!==null?X0(t):null}function X0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X0(t);if(e!==null)return e;t=t.sibling}return null}var Y0=mn.unstable_scheduleCallback,fy=mn.unstable_cancelCallback,HS=mn.unstable_shouldYield,qS=mn.unstable_requestPaint,Ye=mn.unstable_now,WS=mn.unstable_getCurrentPriorityLevel,fp=mn.unstable_ImmediatePriority,J0=mn.unstable_UserBlockingPriority,Ou=mn.unstable_NormalPriority,GS=mn.unstable_LowPriority,Z0=mn.unstable_IdlePriority,bc=null,Zn=null;function KS(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:YS,QS=Math.log,XS=Math.LN2;function YS(t){return t>>>=0,t===0?32:31-(QS(t)/XS|0)|0}var Bl=64,zl=4194304;function Yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Yo(a):(s&=o,s!==0&&(r=Yo(s)))}else o=n&~i,o!==0?r=Yo(o):s!==0&&(r=Yo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Fn(e),i=1<<n,r|=t[n],e&=~i;return r}function JS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=JS(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ew(){var t=Bl;return Bl<<=1,!(Bl&4194240)&&(Bl=64),t}function $h(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function eR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function pp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Te=0;function tw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nw,mp,rw,iw,sw,Gd=!1,$l=[],Jr=null,Zr=null,ei=null,Ca=new Map,Pa=new Map,Br=[],tR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function py(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(e.pointerId)}}function zo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=il(e),e!==null&&mp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nR(t,e,n,r,i){switch(e){case"focusin":return Jr=zo(Jr,t,e,n,r,i),!0;case"dragenter":return Zr=zo(Zr,t,e,n,r,i),!0;case"mouseover":return ei=zo(ei,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ca.set(s,zo(Ca.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pa.set(s,zo(Pa.get(s)||null,t,e,n,r,i)),!0}return!1}function ow(t){var e=zi(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=K0(n),e!==null){t.blockedOn=e,sw(t.priority,function(){rw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zd=r,n.target.dispatchEvent(r),zd=null}else return e=il(n),e!==null&&mp(e),t.blockedOn=n,!1;e.shift()}return!0}function my(t,e,n){cu(t)&&n.delete(e)}function rR(){Gd=!1,Jr!==null&&cu(Jr)&&(Jr=null),Zr!==null&&cu(Zr)&&(Zr=null),ei!==null&&cu(ei)&&(ei=null),Ca.forEach(my),Pa.forEach(my)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,Gd||(Gd=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,rR)))}function ka(t){function e(i){return $o(i,t)}if(0<$l.length){$o($l[0],t);for(var n=1;n<$l.length;n++){var r=$l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jr!==null&&$o(Jr,t),Zr!==null&&$o(Zr,t),ei!==null&&$o(ei,t),Ca.forEach(e),Pa.forEach(e),n=0;n<Br.length;n++)r=Br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)ow(n),n.blockedOn===null&&Br.shift()}var Ks=Pr.ReactCurrentBatchConfig,Vu=!0;function iR(t,e,n,r){var i=Te,s=Ks.transition;Ks.transition=null;try{Te=1,gp(t,e,n,r)}finally{Te=i,Ks.transition=s}}function sR(t,e,n,r){var i=Te,s=Ks.transition;Ks.transition=null;try{Te=4,gp(t,e,n,r)}finally{Te=i,Ks.transition=s}}function gp(t,e,n,r){if(Vu){var i=Kd(t,e,n,r);if(i===null)Zh(t,e,r,Mu,n),py(t,r);else if(nR(i,t,e,n,r))r.stopPropagation();else if(py(t,r),e&4&&-1<tR.indexOf(t)){for(;i!==null;){var s=il(i);if(s!==null&&nw(s),s=Kd(t,e,n,r),s===null&&Zh(t,e,r,Mu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zh(t,e,r,null,n)}}var Mu=null;function Kd(t,e,n,r){if(Mu=null,t=dp(r),t=zi(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=K0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mu=t,null}function aw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WS()){case fp:return 1;case J0:return 4;case Ou:case GS:return 16;case Z0:return 536870912;default:return 16}default:return 16}}var Kr=null,yp=null,hu=null;function lw(){if(hu)return hu;var t,e=yp,n=e.length,r,i="value"in Kr?Kr.value:Kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return hu=i.slice(t,1<r?1-r:void 0)}function du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function gy(){return!1}function yn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hl:gy,this.isPropagationStopped=gy,this}return He(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_p=yn(yo),rl=He({},yo,{view:0,detail:0}),oR=yn(rl),Hh,qh,Ho,Nc=He({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(Hh=t.screenX-Ho.screenX,qh=t.screenY-Ho.screenY):qh=Hh=0,Ho=t),Hh)},movementY:function(t){return"movementY"in t?t.movementY:qh}}),yy=yn(Nc),aR=He({},Nc,{dataTransfer:0}),lR=yn(aR),uR=He({},rl,{relatedTarget:0}),Wh=yn(uR),cR=He({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),hR=yn(cR),dR=He({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fR=yn(dR),pR=He({},yo,{data:0}),_y=yn(pR),mR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _R(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yR[t])?!!e[t]:!1}function vp(){return _R}var vR=He({},rl,{key:function(t){if(t.key){var e=mR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vp,charCode:function(t){return t.type==="keypress"?du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wR=yn(vR),ER=He({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vy=yn(ER),TR=He({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vp}),IR=yn(TR),AR=He({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),SR=yn(AR),RR=He({},Nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CR=yn(RR),PR=[9,13,27,32],wp=vr&&"CompositionEvent"in window,aa=null;vr&&"documentMode"in document&&(aa=document.documentMode);var kR=vr&&"TextEvent"in window&&!aa,uw=vr&&(!wp||aa&&8<aa&&11>=aa),wy=" ",Ey=!1;function cw(t,e){switch(t){case"keyup":return PR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function bR(t,e){switch(t){case"compositionend":return hw(e);case"keypress":return e.which!==32?null:(Ey=!0,wy);case"textInput":return t=e.data,t===wy&&Ey?null:t;default:return null}}function NR(t,e){if(xs)return t==="compositionend"||!wp&&cw(t,e)?(t=lw(),hu=yp=Kr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uw&&e.locale!=="ko"?null:e.data;default:return null}}var xR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ty(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xR[t.type]:e==="textarea"}function dw(t,e,n,r){$0(r),e=Uu(e,"onChange"),0<e.length&&(n=new _p("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var la=null,ba=null;function DR(t){Iw(t,0)}function xc(t){var e=Ls(t);if(V0(e))return t}function OR(t,e){if(t==="change")return e}var fw=!1;if(vr){var Gh;if(vr){var Kh="oninput"in document;if(!Kh){var Iy=document.createElement("div");Iy.setAttribute("oninput","return;"),Kh=typeof Iy.oninput=="function"}Gh=Kh}else Gh=!1;fw=Gh&&(!document.documentMode||9<document.documentMode)}function Ay(){la&&(la.detachEvent("onpropertychange",pw),ba=la=null)}function pw(t){if(t.propertyName==="value"&&xc(ba)){var e=[];dw(e,ba,t,dp(t)),G0(DR,e)}}function LR(t,e,n){t==="focusin"?(Ay(),la=e,ba=n,la.attachEvent("onpropertychange",pw)):t==="focusout"&&Ay()}function VR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(ba)}function MR(t,e){if(t==="click")return xc(e)}function UR(t,e){if(t==="input"||t==="change")return xc(e)}function FR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:FR;function Na(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bd.call(e,i)||!Bn(t[i],e[i]))return!1}return!0}function Sy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ry(t,e){var n=Sy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sy(n)}}function mw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gw(){for(var t=window,e=Nu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nu(t.document)}return e}function Ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jR(t){var e=gw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mw(n.ownerDocument.documentElement,n)){if(r!==null&&Ep(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ry(n,s);var o=Ry(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BR=vr&&"documentMode"in document&&11>=document.documentMode,Ds=null,Qd=null,ua=null,Xd=!1;function Cy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xd||Ds==null||Ds!==Nu(r)||(r=Ds,"selectionStart"in r&&Ep(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ua&&Na(ua,r)||(ua=r,r=Uu(Qd,"onSelect"),0<r.length&&(e=new _p("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},Qh={},yw={};vr&&(yw=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Dc(t){if(Qh[t])return Qh[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yw)return Qh[t]=e[n];return t}var _w=Dc("animationend"),vw=Dc("animationiteration"),ww=Dc("animationstart"),Ew=Dc("transitionend"),Tw=new Map,Py="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(t,e){Tw.set(t,e),cs(e,[t])}for(var Xh=0;Xh<Py.length;Xh++){var Yh=Py[Xh],zR=Yh.toLowerCase(),$R=Yh[0].toUpperCase()+Yh.slice(1);Ii(zR,"on"+$R)}Ii(_w,"onAnimationEnd");Ii(vw,"onAnimationIteration");Ii(ww,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(Ew,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function ky(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zS(r,e,void 0,t),t.currentTarget=null}function Iw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ky(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ky(i,a,c),s=u}}}if(Du)throw t=qd,Du=!1,qd=null,t}function De(t,e){var n=e[tf];n===void 0&&(n=e[tf]=new Set);var r=t+"__bubble";n.has(r)||(Aw(e,t,2,!1),n.add(r))}function Jh(t,e,n){var r=0;e&&(r|=4),Aw(n,t,r,e)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[Wl]){t[Wl]=!0,N0.forEach(function(n){n!=="selectionchange"&&(HR.has(n)||Jh(n,!1,t),Jh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wl]||(e[Wl]=!0,Jh("selectionchange",!1,e))}}function Aw(t,e,n,r){switch(aw(e)){case 1:var i=iR;break;case 4:i=sR;break;default:i=gp}n=i.bind(null,e,n,t),i=void 0,!Hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}G0(function(){var c=s,h=dp(n),f=[];e:{var d=Tw.get(t);if(d!==void 0){var g=_p,v=t;switch(t){case"keypress":if(du(n)===0)break e;case"keydown":case"keyup":g=wR;break;case"focusin":v="focus",g=Wh;break;case"focusout":v="blur",g=Wh;break;case"beforeblur":case"afterblur":g=Wh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=yy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=IR;break;case _w:case vw:case ww:g=hR;break;case Ew:g=SR;break;case"scroll":g=oR;break;case"wheel":g=CR;break;case"copy":case"cut":case"paste":g=fR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vy}var R=(e&4)!==0,b=!R&&t==="scroll",E=R?d!==null?d+"Capture":null:d;R=[];for(var S=c,C;S!==null;){C=S;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,E!==null&&(D=Ra(S,E),D!=null&&R.push(Da(S,D,C)))),b)break;S=S.return}0<R.length&&(d=new g(d,v,null,n,h),f.push({event:d,listeners:R}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==zd&&(v=n.relatedTarget||n.fromElement)&&(zi(v)||v[wr]))break e;if((g||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?zi(v):null,v!==null&&(b=hs(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(R=yy,D="onMouseLeave",E="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(R=vy,D="onPointerLeave",E="onPointerEnter",S="pointer"),b=g==null?d:Ls(g),C=v==null?d:Ls(v),d=new R(D,S+"leave",g,n,h),d.target=b,d.relatedTarget=C,D=null,zi(h)===c&&(R=new R(E,S+"enter",v,n,h),R.target=C,R.relatedTarget=b,D=R),b=D,g&&v)t:{for(R=g,E=v,S=0,C=R;C;C=As(C))S++;for(C=0,D=E;D;D=As(D))C++;for(;0<S-C;)R=As(R),S--;for(;0<C-S;)E=As(E),C--;for(;S--;){if(R===E||E!==null&&R===E.alternate)break t;R=As(R),E=As(E)}R=null}else R=null;g!==null&&by(f,d,g,R,!1),v!==null&&b!==null&&by(f,b,v,R,!0)}}e:{if(d=c?Ls(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var M=OR;else if(Ty(d))if(fw)M=UR;else{M=VR;var x=LR}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=MR);if(M&&(M=M(t,c))){dw(f,M,n,h);break e}x&&x(t,d,c),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&Md(d,"number",d.value)}switch(x=c?Ls(c):window,t){case"focusin":(Ty(x)||x.contentEditable==="true")&&(Ds=x,Qd=c,ua=null);break;case"focusout":ua=Qd=Ds=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,Cy(f,n,h);break;case"selectionchange":if(BR)break;case"keydown":case"keyup":Cy(f,n,h)}var T;if(wp)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else xs?cw(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(uw&&n.locale!=="ko"&&(xs||m!=="onCompositionStart"?m==="onCompositionEnd"&&xs&&(T=lw()):(Kr=h,yp="value"in Kr?Kr.value:Kr.textContent,xs=!0)),x=Uu(c,m),0<x.length&&(m=new _y(m,t,null,n,h),f.push({event:m,listeners:x}),T?m.data=T:(T=hw(n),T!==null&&(m.data=T)))),(T=kR?bR(t,n):NR(t,n))&&(c=Uu(c,"onBeforeInput"),0<c.length&&(h=new _y("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}Iw(f,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ra(t,n),s!=null&&r.unshift(Da(t,s,i)),s=Ra(t,e),s!=null&&r.push(Da(t,s,i))),t=t.return}return r}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function by(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ra(n,s),u!=null&&o.unshift(Da(n,u,a))):i||(u=Ra(n,s),u!=null&&o.push(Da(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qR=/\r\n?/g,WR=/\u0000|\uFFFD/g;function Ny(t){return(typeof t=="string"?t:""+t).replace(qR,`
`).replace(WR,"")}function Gl(t,e,n){if(e=Ny(e),Ny(t)!==e&&n)throw Error(X(425))}function Fu(){}var Yd=null,Jd=null;function Zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ef=typeof setTimeout=="function"?setTimeout:void 0,GR=typeof clearTimeout=="function"?clearTimeout:void 0,xy=typeof Promise=="function"?Promise:void 0,KR=typeof queueMicrotask=="function"?queueMicrotask:typeof xy<"u"?function(t){return xy.resolve(null).then(t).catch(QR)}:ef;function QR(t){setTimeout(function(){throw t})}function ed(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ka(e)}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),Yn="__reactFiber$"+_o,Oa="__reactProps$"+_o,wr="__reactContainer$"+_o,tf="__reactEvents$"+_o,XR="__reactListeners$"+_o,YR="__reactHandles$"+_o;function zi(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dy(t);t!==null;){if(n=t[Yn])return n;t=Dy(t)}return e}t=n,n=t.parentNode}return null}function il(t){return t=t[Yn]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(X(33))}function Oc(t){return t[Oa]||null}var nf=[],Vs=-1;function Ai(t){return{current:t}}function Le(t){0>Vs||(t.current=nf[Vs],nf[Vs]=null,Vs--)}function be(t,e){Vs++,nf[Vs]=t.current,t.current=e}var fi={},Dt=Ai(fi),Xt=Ai(!1),Yi=fi;function ro(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(t){return t=t.childContextTypes,t!=null}function ju(){Le(Xt),Le(Dt)}function Oy(t,e,n){if(Dt.current!==fi)throw Error(X(168));be(Dt,e),be(Xt,n)}function Sw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(X(108,LS(t)||"Unknown",i));return He({},n,r)}function Bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Yi=Dt.current,be(Dt,t),be(Xt,Xt.current),!0}function Ly(t,e,n){var r=t.stateNode;if(!r)throw Error(X(169));n?(t=Sw(t,e,Yi),r.__reactInternalMemoizedMergedChildContext=t,Le(Xt),Le(Dt),be(Dt,t)):Le(Xt),be(Xt,n)}var cr=null,Lc=!1,td=!1;function Rw(t){cr===null?cr=[t]:cr.push(t)}function JR(t){Lc=!0,Rw(t)}function Si(){if(!td&&cr!==null){td=!0;var t=0,e=Te;try{var n=cr;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,Lc=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),Y0(fp,Si),i}finally{Te=e,td=!1}}return null}var Ms=[],Us=0,zu=null,$u=0,En=[],Tn=0,Ji=null,hr=1,dr="";function Ui(t,e){Ms[Us++]=$u,Ms[Us++]=zu,zu=t,$u=e}function Cw(t,e,n){En[Tn++]=hr,En[Tn++]=dr,En[Tn++]=Ji,Ji=t;var r=hr;t=dr;var i=32-Fn(r)-1;r&=~(1<<i),n+=1;var s=32-Fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hr=1<<32-Fn(e)+i|n<<i|r,dr=s+t}else hr=1<<s|n<<i|r,dr=t}function Tp(t){t.return!==null&&(Ui(t,1),Cw(t,1,0))}function Ip(t){for(;t===zu;)zu=Ms[--Us],Ms[Us]=null,$u=Ms[--Us],Ms[Us]=null;for(;t===Ji;)Ji=En[--Tn],En[Tn]=null,dr=En[--Tn],En[Tn]=null,hr=En[--Tn],En[Tn]=null}var dn=null,un=null,Ue=!1,Mn=null;function Pw(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ji!==null?{id:hr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function rf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sf(t){if(Ue){var e=un;if(e){var n=e;if(!Vy(t,e)){if(rf(t))throw Error(X(418));e=ti(n.nextSibling);var r=dn;e&&Vy(t,e)?Pw(r,n):(t.flags=t.flags&-4097|2,Ue=!1,dn=t)}}else{if(rf(t))throw Error(X(418));t.flags=t.flags&-4097|2,Ue=!1,dn=t}}}function My(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function Kl(t){if(t!==dn)return!1;if(!Ue)return My(t),Ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zd(t.type,t.memoizedProps)),e&&(e=un)){if(rf(t))throw kw(),Error(X(418));for(;e;)Pw(t,e),e=ti(e.nextSibling)}if(My(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(X(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=ti(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?ti(t.stateNode.nextSibling):null;return!0}function kw(){for(var t=un;t;)t=ti(t.nextSibling)}function io(){un=dn=null,Ue=!1}function Ap(t){Mn===null?Mn=[t]:Mn.push(t)}var ZR=Pr.ReactCurrentBatchConfig;function qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(X(309));var r=n.stateNode}if(!r)throw Error(X(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(X(284));if(!n._owner)throw Error(X(290,t))}return t}function Ql(t,e){throw t=Object.prototype.toString.call(e),Error(X(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Uy(t){var e=t._init;return e(t._payload)}function bw(t){function e(E,S){if(t){var C=E.deletions;C===null?(E.deletions=[S],E.flags|=16):C.push(S)}}function n(E,S){if(!t)return null;for(;S!==null;)e(E,S),S=S.sibling;return null}function r(E,S){for(E=new Map;S!==null;)S.key!==null?E.set(S.key,S):E.set(S.index,S),S=S.sibling;return E}function i(E,S){return E=si(E,S),E.index=0,E.sibling=null,E}function s(E,S,C){return E.index=C,t?(C=E.alternate,C!==null?(C=C.index,C<S?(E.flags|=2,S):C):(E.flags|=2,S)):(E.flags|=1048576,S)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,S,C,D){return S===null||S.tag!==6?(S=ld(C,E.mode,D),S.return=E,S):(S=i(S,C),S.return=E,S)}function u(E,S,C,D){var M=C.type;return M===Ns?h(E,S,C.props.children,D,C.key):S!==null&&(S.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fr&&Uy(M)===S.type)?(D=i(S,C.props),D.ref=qo(E,S,C),D.return=E,D):(D=vu(C.type,C.key,C.props,null,E.mode,D),D.ref=qo(E,S,C),D.return=E,D)}function c(E,S,C,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=ud(C,E.mode,D),S.return=E,S):(S=i(S,C.children||[]),S.return=E,S)}function h(E,S,C,D,M){return S===null||S.tag!==7?(S=Qi(C,E.mode,D,M),S.return=E,S):(S=i(S,C),S.return=E,S)}function f(E,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return S=ld(""+S,E.mode,C),S.return=E,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ul:return C=vu(S.type,S.key,S.props,null,E.mode,C),C.ref=qo(E,null,S),C.return=E,C;case bs:return S=ud(S,E.mode,C),S.return=E,S;case Fr:var D=S._init;return f(E,D(S._payload),C)}if(Xo(S)||jo(S))return S=Qi(S,E.mode,C,null),S.return=E,S;Ql(E,S)}return null}function d(E,S,C,D){var M=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return M!==null?null:a(E,S,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ul:return C.key===M?u(E,S,C,D):null;case bs:return C.key===M?c(E,S,C,D):null;case Fr:return M=C._init,d(E,S,M(C._payload),D)}if(Xo(C)||jo(C))return M!==null?null:h(E,S,C,D,null);Ql(E,C)}return null}function g(E,S,C,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(C)||null,a(S,E,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ul:return E=E.get(D.key===null?C:D.key)||null,u(S,E,D,M);case bs:return E=E.get(D.key===null?C:D.key)||null,c(S,E,D,M);case Fr:var x=D._init;return g(E,S,C,x(D._payload),M)}if(Xo(D)||jo(D))return E=E.get(C)||null,h(S,E,D,M,null);Ql(S,D)}return null}function v(E,S,C,D){for(var M=null,x=null,T=S,m=S=0,y=null;T!==null&&m<C.length;m++){T.index>m?(y=T,T=null):y=T.sibling;var w=d(E,T,C[m],D);if(w===null){T===null&&(T=y);break}t&&T&&w.alternate===null&&e(E,T),S=s(w,S,m),x===null?M=w:x.sibling=w,x=w,T=y}if(m===C.length)return n(E,T),Ue&&Ui(E,m),M;if(T===null){for(;m<C.length;m++)T=f(E,C[m],D),T!==null&&(S=s(T,S,m),x===null?M=T:x.sibling=T,x=T);return Ue&&Ui(E,m),M}for(T=r(E,T);m<C.length;m++)y=g(T,E,m,C[m],D),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?m:y.key),S=s(y,S,m),x===null?M=y:x.sibling=y,x=y);return t&&T.forEach(function(A){return e(E,A)}),Ue&&Ui(E,m),M}function R(E,S,C,D){var M=jo(C);if(typeof M!="function")throw Error(X(150));if(C=M.call(C),C==null)throw Error(X(151));for(var x=M=null,T=S,m=S=0,y=null,w=C.next();T!==null&&!w.done;m++,w=C.next()){T.index>m?(y=T,T=null):y=T.sibling;var A=d(E,T,w.value,D);if(A===null){T===null&&(T=y);break}t&&T&&A.alternate===null&&e(E,T),S=s(A,S,m),x===null?M=A:x.sibling=A,x=A,T=y}if(w.done)return n(E,T),Ue&&Ui(E,m),M;if(T===null){for(;!w.done;m++,w=C.next())w=f(E,w.value,D),w!==null&&(S=s(w,S,m),x===null?M=w:x.sibling=w,x=w);return Ue&&Ui(E,m),M}for(T=r(E,T);!w.done;m++,w=C.next())w=g(T,E,m,w.value,D),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?m:w.key),S=s(w,S,m),x===null?M=w:x.sibling=w,x=w);return t&&T.forEach(function(P){return e(E,P)}),Ue&&Ui(E,m),M}function b(E,S,C,D){if(typeof C=="object"&&C!==null&&C.type===Ns&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Ul:e:{for(var M=C.key,x=S;x!==null;){if(x.key===M){if(M=C.type,M===Ns){if(x.tag===7){n(E,x.sibling),S=i(x,C.props.children),S.return=E,E=S;break e}}else if(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Fr&&Uy(M)===x.type){n(E,x.sibling),S=i(x,C.props),S.ref=qo(E,x,C),S.return=E,E=S;break e}n(E,x);break}else e(E,x);x=x.sibling}C.type===Ns?(S=Qi(C.props.children,E.mode,D,C.key),S.return=E,E=S):(D=vu(C.type,C.key,C.props,null,E.mode,D),D.ref=qo(E,S,C),D.return=E,E=D)}return o(E);case bs:e:{for(x=C.key;S!==null;){if(S.key===x)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){n(E,S.sibling),S=i(S,C.children||[]),S.return=E,E=S;break e}else{n(E,S);break}else e(E,S);S=S.sibling}S=ud(C,E.mode,D),S.return=E,E=S}return o(E);case Fr:return x=C._init,b(E,S,x(C._payload),D)}if(Xo(C))return v(E,S,C,D);if(jo(C))return R(E,S,C,D);Ql(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,S!==null&&S.tag===6?(n(E,S.sibling),S=i(S,C),S.return=E,E=S):(n(E,S),S=ld(C,E.mode,D),S.return=E,E=S),o(E)):n(E,S)}return b}var so=bw(!0),Nw=bw(!1),Hu=Ai(null),qu=null,Fs=null,Sp=null;function Rp(){Sp=Fs=qu=null}function Cp(t){var e=Hu.current;Le(Hu),t._currentValue=e}function of(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){qu=t,Sp=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(Sp!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(qu===null)throw Error(X(308));Fs=t,qu.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var $i=null;function Pp(t){$i===null?$i=[t]:$i.push(t)}function xw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Pp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jr=!1;function kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ni(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Er(t,n)}return i=r.interleaved,i===null?(e.next=e,Pp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Er(t,n)}function fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pp(t,n)}}function Fy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wu(t,e,n,r){var i=t.updateQueue;jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,R=a;switch(d=e,g=n,R.tag){case 1:if(v=R.payload,typeof v=="function"){f=v.call(g,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=R.payload,d=typeof v=="function"?v.call(g,f,d):v,d==null)break e;f=He({},f,d);break e;case 2:jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,u=f):h=h.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=f}}function jy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(X(191,i));i.call(r)}}}var sl={},er=Ai(sl),La=Ai(sl),Va=Ai(sl);function Hi(t){if(t===sl)throw Error(X(174));return t}function bp(t,e){switch(be(Va,e),be(La,t),be(er,sl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fd(e,t)}Le(er),be(er,e)}function oo(){Le(er),Le(La),Le(Va)}function Ow(t){Hi(Va.current);var e=Hi(er.current),n=Fd(e,t.type);e!==n&&(be(La,t),be(er,n))}function Np(t){La.current===t&&(Le(er),Le(La))}var Be=Ai(0);function Gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nd=[];function xp(){for(var t=0;t<nd.length;t++)nd[t]._workInProgressVersionPrimary=null;nd.length=0}var pu=Pr.ReactCurrentDispatcher,rd=Pr.ReactCurrentBatchConfig,Zi=0,$e=null,at=null,ft=null,Ku=!1,ca=!1,Ma=0,eC=0;function Rt(){throw Error(X(321))}function Dp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Op(t,e,n,r,i,s){if(Zi=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pu.current=t===null||t.memoizedState===null?iC:sC,t=n(r,i),ca){s=0;do{if(ca=!1,Ma=0,25<=s)throw Error(X(301));s+=1,ft=at=null,e.updateQueue=null,pu.current=oC,t=n(r,i)}while(ca)}if(pu.current=Qu,e=at!==null&&at.next!==null,Zi=0,ft=at=$e=null,Ku=!1,e)throw Error(X(300));return t}function Lp(){var t=Ma!==0;return Ma=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?$e.memoizedState=ft=t:ft=ft.next=t,ft}function Cn(){if(at===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=ft===null?$e.memoizedState:ft.next;if(e!==null)ft=e,at=t;else{if(t===null)throw Error(X(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ft===null?$e.memoizedState=ft=t:ft=ft.next=t}return ft}function Ua(t,e){return typeof e=="function"?e(t):e}function id(t){var e=Cn(),n=e.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Zi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,$e.lanes|=h,es|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Bn(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,$e.lanes|=s,es|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sd(t){var e=Cn(),n=e.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Lw(){}function Vw(t,e){var n=$e,r=Cn(),i=e(),s=!Bn(r.memoizedState,i);if(s&&(r.memoizedState=i,Qt=!0),r=r.queue,Vp(Fw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,Fa(9,Uw.bind(null,n,r,i,e),void 0,null),mt===null)throw Error(X(349));Zi&30||Mw(n,e,i)}return i}function Mw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Uw(t,e,n,r){e.value=n,e.getSnapshot=r,jw(e)&&Bw(t)}function Fw(t,e,n){return n(function(){jw(e)&&Bw(t)})}function jw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Bw(t){var e=Er(t,1);e!==null&&jn(e,t,1,-1)}function By(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=rC.bind(null,$e,t),[e.memoizedState,t]}function Fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zw(){return Cn().memoizedState}function mu(t,e,n,r){var i=Kn();$e.flags|=t,i.memoizedState=Fa(1|e,n,void 0,r===void 0?null:r)}function Vc(t,e,n,r){var i=Cn();r=r===void 0?null:r;var s=void 0;if(at!==null){var o=at.memoizedState;if(s=o.destroy,r!==null&&Dp(r,o.deps)){i.memoizedState=Fa(e,n,s,r);return}}$e.flags|=t,i.memoizedState=Fa(1|e,n,s,r)}function zy(t,e){return mu(8390656,8,t,e)}function Vp(t,e){return Vc(2048,8,t,e)}function $w(t,e){return Vc(4,2,t,e)}function Hw(t,e){return Vc(4,4,t,e)}function qw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ww(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,qw.bind(null,e,t),n)}function Mp(){}function Gw(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Kw(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Qw(t,e,n){return Zi&21?(Bn(n,e)||(n=ew(),$e.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function tC(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=rd.transition;rd.transition={};try{t(!1),e()}finally{Te=n,rd.transition=r}}function Xw(){return Cn().memoizedState}function nC(t,e,n){var r=ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yw(t))Jw(e,n);else if(n=xw(t,e,n,r),n!==null){var i=jt();jn(n,t,r,i),Zw(n,e,r)}}function rC(t,e,n){var r=ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yw(t))Jw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Bn(a,o)){var u=e.interleaved;u===null?(i.next=i,Pp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=xw(t,e,i,r),n!==null&&(i=jt(),jn(n,t,r,i),Zw(n,e,r))}}function Yw(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function Jw(t,e){ca=Ku=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pp(t,n)}}var Qu={readContext:Rn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},iC={readContext:Rn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:zy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mu(4194308,4,qw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return mu(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nC.bind(null,$e,t),[r.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:By,useDebugValue:Mp,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=By(!1),e=t[0];return t=tC.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$e,i=Kn();if(Ue){if(n===void 0)throw Error(X(407));n=n()}else{if(n=e(),mt===null)throw Error(X(349));Zi&30||Mw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zy(Fw.bind(null,r,s,t),[t]),r.flags|=2048,Fa(9,Uw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=mt.identifierPrefix;if(Ue){var n=dr,r=hr;n=(r&~(1<<32-Fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sC={readContext:Rn,useCallback:Gw,useContext:Rn,useEffect:Vp,useImperativeHandle:Ww,useInsertionEffect:$w,useLayoutEffect:Hw,useMemo:Kw,useReducer:id,useRef:zw,useState:function(){return id(Ua)},useDebugValue:Mp,useDeferredValue:function(t){var e=Cn();return Qw(e,at.memoizedState,t)},useTransition:function(){var t=id(Ua)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Lw,useSyncExternalStore:Vw,useId:Xw,unstable_isNewReconciler:!1},oC={readContext:Rn,useCallback:Gw,useContext:Rn,useEffect:Vp,useImperativeHandle:Ww,useInsertionEffect:$w,useLayoutEffect:Hw,useMemo:Kw,useReducer:sd,useRef:zw,useState:function(){return sd(Ua)},useDebugValue:Mp,useDeferredValue:function(t){var e=Cn();return at===null?e.memoizedState=t:Qw(e,at.memoizedState,t)},useTransition:function(){var t=sd(Ua)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Lw,useSyncExternalStore:Vw,useId:Xw,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=He({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function af(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:He({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=ii(t),s=mr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(jn(e,t,i,r),fu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=ii(t),s=mr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(jn(e,t,i,r),fu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=ii(t),i=mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ni(t,i,r),e!==null&&(jn(e,t,r,n),fu(e,t,r))}};function $y(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Na(n,r)||!Na(i,s):!0}function eE(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(i=Yt(e)?Yi:Dt.current,r=e.contextTypes,s=(r=r!=null)?ro(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function lf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},kp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rn(s):(s=Yt(e)?Yi:Dt.current,i.context=ro(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(af(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),Wu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",r=e;do n+=OS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function od(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aC=typeof WeakMap=="function"?WeakMap:Map;function tE(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yu||(Yu=!0,vf=r),uf(t,e)},n}function nE(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uf(t,e),typeof r!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EC.bind(null,t,e,n),e.then(t,t))}function Wy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,ni(n,e,1))),n.lanes|=1),t)}var lC=Pr.ReactCurrentOwner,Qt=!1;function Ut(t,e,n,r){e.child=t===null?Nw(e,null,n,r):so(e,t.child,n,r)}function Ky(t,e,n,r,i){n=n.render;var s=e.ref;return Qs(e,i),r=Op(t,e,n,r,s,i),n=Lp(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(Ue&&n&&Tp(e),e.flags|=1,Ut(t,e,r,i),e.child)}function Qy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,rE(t,e,s,r,i)):(t=vu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(o,r)&&t.ref===e.ref)return Tr(t,e,i)}return e.flags|=1,t=si(s,r),t.ref=e.ref,t.return=e,e.child=t}function rE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Na(s,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,Tr(t,e,i)}return cf(t,e,n,r,i)}function iE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Bs,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,be(Bs,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,be(Bs,on),on|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,be(Bs,on),on|=r;return Ut(t,e,i,n),e.child}function sE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cf(t,e,n,r,i){var s=Yt(n)?Yi:Dt.current;return s=ro(e,s),Qs(e,i),n=Op(t,e,n,r,s,i),r=Lp(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(Ue&&r&&Tp(e),e.flags|=1,Ut(t,e,n,i),e.child)}function Xy(t,e,n,r,i){if(Yt(n)){var s=!0;Bu(e)}else s=!1;if(Qs(e,i),e.stateNode===null)gu(t,e),eE(e,n,r),lf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=Yt(n)?Yi:Dt.current,c=ro(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Hy(e,o,r,c),jr=!1;var d=e.memoizedState;o.state=d,Wu(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Xt.current||jr?(typeof h=="function"&&(af(e,n,h,r),u=e.memoizedState),(a=jr||$y(e,n,a,r,d,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Dw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ln(e.type,a),o.props=c,f=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rn(u):(u=Yt(n)?Yi:Dt.current,u=ro(e,u));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==u)&&Hy(e,o,r,u),jr=!1,d=e.memoizedState,o.state=d,Wu(e,r,o,i);var v=e.memoizedState;a!==f||d!==v||Xt.current||jr?(typeof g=="function"&&(af(e,n,g,r),v=e.memoizedState),(c=jr||$y(e,n,c,r,d,v,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return hf(t,e,n,r,s,i)}function hf(t,e,n,r,i,s){sE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ly(e,n,!1),Tr(t,e,s);r=e.stateNode,lC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=r.state,i&&Ly(e,n,!0),e.child}function oE(t){var e=t.stateNode;e.pendingContext?Oy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Oy(t,e.context,!1),bp(t,e.containerInfo)}function Yy(t,e,n,r,i){return io(),Ap(i),e.flags|=256,Ut(t,e,n,r),e.child}var df={dehydrated:null,treeContext:null,retryLane:0};function ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function aE(t,e,n){var r=e.pendingProps,i=Be.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),be(Be,i&1),t===null)return sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jc(o,r,0,null),t=Qi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ff(n),e.memoizedState=df,t):Up(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=si(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=si(a,s):(s=Qi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=df,r}return s=t.child,t=s.sibling,r=si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Up(t,e){return e=jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xl(t,e,n,r){return r!==null&&Ap(r),so(e,t.child,null,n),t=Up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=od(Error(X(422))),Xl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=jc({mode:"visible",children:r.children},i,0,null),s=Qi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=ff(o),e.memoizedState=df,s);if(!(e.mode&1))return Xl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(X(419)),r=od(s,r,void 0),Xl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qt||a){if(r=mt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(t,i),jn(r,t,i,-1))}return Hp(),r=od(Error(X(421))),Xl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=TC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,un=ti(i.nextSibling),dn=e,Ue=!0,Mn=null,t!==null&&(En[Tn++]=hr,En[Tn++]=dr,En[Tn++]=Ji,hr=t.id,dr=t.overflow,Ji=e),e=Up(e,r.children),e.flags|=4096,e)}function Jy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),of(t.return,e,n)}function ad(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function lE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=Be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jy(t,n,e);else if(t.tag===19)Jy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(be(Be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ad(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ad(e,!0,n,null,s);break;case"together":ad(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(X(153));if(e.child!==null){for(t=e.child,n=si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cC(t,e,n){switch(e.tag){case 3:oE(e),io();break;case 5:Ow(e);break;case 1:Yt(e.type)&&Bu(e);break;case 4:bp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;be(Hu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(be(Be,Be.current&1),e.flags|=128,null):n&e.child.childLanes?aE(t,e,n):(be(Be,Be.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);be(Be,Be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return lE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Be,Be.current),r)break;return null;case 22:case 23:return e.lanes=0,iE(t,e,n)}return Tr(t,e,n)}var uE,pf,cE,hE;uE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pf=function(){};cE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hi(er.current);var s=null;switch(n){case"input":i=Ld(t,i),r=Ld(t,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=Ud(t,i),r=Ud(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fu)}jd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&De("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};hE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wo(t,e){if(!Ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hC(t,e,n){var r=e.pendingProps;switch(Ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Yt(e.type)&&ju(),Ct(e),null;case 3:return r=e.stateNode,oo(),Le(Xt),Le(Dt),xp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(Tf(Mn),Mn=null))),pf(t,e),Ct(e),null;case 5:Np(e);var i=Hi(Va.current);if(n=e.type,t!==null&&e.stateNode!=null)cE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(X(166));return Ct(e),null}if(t=Hi(er.current),Kl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yn]=e,r[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(i=0;i<Jo.length;i++)De(Jo[i],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":ay(r,s),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},De("invalid",r);break;case"textarea":uy(r,s),De("invalid",r)}jd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Gl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Gl(r.textContent,a,t),i=["children",""+a]):Aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&De("scroll",r)}switch(n){case"input":Fl(r),ly(r,s,!0);break;case"textarea":Fl(r),cy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=F0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[Oa]=r,uE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bd(n,r),n){case"dialog":De("cancel",t),De("close",t),i=r;break;case"iframe":case"object":case"embed":De("load",t),i=r;break;case"video":case"audio":for(i=0;i<Jo.length;i++)De(Jo[i],t);i=r;break;case"source":De("error",t),i=r;break;case"img":case"image":case"link":De("error",t),De("load",t),i=r;break;case"details":De("toggle",t),i=r;break;case"input":ay(t,r),i=Ld(t,r),De("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),De("invalid",t);break;case"textarea":uy(t,r),i=Ud(t,r),De("invalid",t);break;default:i=r}jd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?z0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&j0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Sa(t,u):typeof u=="number"&&Sa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Aa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&De("scroll",t):u!=null&&lp(t,s,u,o))}switch(n){case"input":Fl(t),ly(t,r,!1);break;case"textarea":Fl(t),cy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qs(t,!!r.multiple,s,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)hE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(X(166));if(n=Hi(Va.current),Hi(er.current),Kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(s=r.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return Ct(e),null;case 13:if(Le(Be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ue&&un!==null&&e.mode&1&&!(e.flags&128))kw(),io(),e.flags|=98560,s=!1;else if(s=Kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(X(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(X(317));s[Yn]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),s=!1}else Mn!==null&&(Tf(Mn),Mn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Be.current&1?lt===0&&(lt=3):Hp())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return oo(),pf(t,e),t===null&&xa(e.stateNode.containerInfo),Ct(e),null;case 10:return Cp(e.type._context),Ct(e),null;case 17:return Yt(e.type)&&ju(),Ct(e),null;case 19:if(Le(Be),s=e.memoizedState,s===null)return Ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Wo(s,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gu(t),o!==null){for(e.flags|=128,Wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return be(Be,Be.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ye()>lo&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ue)return Ct(e),null}else 2*Ye()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ye(),e.sibling=null,n=Be.current,be(Be,r?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return $p(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?on&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(X(156,e.tag))}function dC(t,e){switch(Ip(e),e.tag){case 1:return Yt(e.type)&&ju(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),Le(Xt),Le(Dt),xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Np(e),null;case 13:if(Le(Be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(X(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Le(Be),null;case 4:return oo(),null;case 10:return Cp(e.type._context),null;case 22:case 23:return $p(),null;case 24:return null;default:return null}}var Yl=!1,Nt=!1,fC=typeof WeakSet=="function"?WeakSet:Set,ne=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(t,e,r)}else n.current=null}function mf(t,e,n){try{n()}catch(r){Ke(t,e,r)}}var Zy=!1;function pC(t,e){if(Yd=Vu,t=gw(),Ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++c===i&&(a=o),d===s&&++h===r&&(u=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jd={focusedElem:t,selectionRange:n},Vu=!1,ne=e;ne!==null;)if(e=ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ne=t;else for(;ne!==null;){e=ne;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var R=v.memoizedProps,b=v.memoizedState,E=e.stateNode,S=E.getSnapshotBeforeUpdate(e.elementType===e.type?R:Ln(e.type,R),b);E.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(D){Ke(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,ne=t;break}ne=e.return}return v=Zy,Zy=!1,v}function ha(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mf(e,n,s)}i=i.next}while(i!==r)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dE(t){var e=t.alternate;e!==null&&(t.alternate=null,dE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Oa],delete e[tf],delete e[XR],delete e[YR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fE(t){return t.tag===5||t.tag===3||t.tag===4}function e_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fu));else if(r!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}function _f(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_f(t,e,n),t=t.sibling;t!==null;)_f(t,e,n),t=t.sibling}var yt=null,Vn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)pE(t,e,n),n=n.sibling}function pE(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:Nt||js(n,e);case 6:var r=yt,i=Vn;yt=null,Vr(t,e,n),yt=r,Vn=i,yt!==null&&(Vn?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(Vn?(t=yt,n=n.stateNode,t.nodeType===8?ed(t.parentNode,n):t.nodeType===1&&ed(t,n),ka(t)):ed(yt,n.stateNode));break;case 4:r=yt,i=Vn,yt=n.stateNode.containerInfo,Vn=!0,Vr(t,e,n),yt=r,Vn=i;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mf(n,e,o),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!Nt&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ke(n,e,a)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,Vr(t,e,n),Nt=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function t_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fC),e.forEach(function(r){var i=IC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yt=a.stateNode,Vn=!1;break e;case 3:yt=a.stateNode.containerInfo,Vn=!0;break e;case 4:yt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(yt===null)throw Error(X(160));pE(s,o,i),yt=null,Vn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mE(e,t),e=e.sibling}function mE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Gn(t),r&4){try{ha(3,t,t.return),Uc(3,t)}catch(R){Ke(t,t.return,R)}try{ha(5,t,t.return)}catch(R){Ke(t,t.return,R)}}break;case 1:Dn(e,t),Gn(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(Dn(e,t),Gn(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var i=t.stateNode;try{Sa(i,"")}catch(R){Ke(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&M0(i,s),Bd(a,o);var c=Bd(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?z0(i,f):h==="dangerouslySetInnerHTML"?j0(i,f):h==="children"?Sa(i,f):lp(i,h,f,c)}switch(a){case"input":Vd(i,s);break;case"textarea":U0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qs(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?qs(i,!!s.multiple,s.defaultValue,!0):qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oa]=s}catch(R){Ke(t,t.return,R)}}break;case 6:if(Dn(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error(X(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ke(t,t.return,R)}}break;case 3:if(Dn(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(R){Ke(t,t.return,R)}break;case 4:Dn(e,t),Gn(t);break;case 13:Dn(e,t),Gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bp=Ye())),r&4&&t_(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(c=Nt)||h,Dn(e,t),Nt=c):Dn(e,t),Gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(ne=t,h=t.child;h!==null;){for(f=ne=h;ne!==null;){switch(d=ne,g=d.child,d.tag){case 0:case 11:case 14:case 15:ha(4,d,d.return);break;case 1:js(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(R){Ke(r,n,R)}}break;case 5:js(d,d.return);break;case 22:if(d.memoizedState!==null){r_(f);continue}}g!==null?(g.return=d,ne=g):r_(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=B0("display",o))}catch(R){Ke(t,t.return,R)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(R){Ke(t,t.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),Gn(t),r&4&&t_(t);break;case 21:break;default:Dn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fE(n)){var r=n;break e}n=n.return}throw Error(X(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sa(i,""),r.flags&=-33);var s=e_(t);_f(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=e_(t);yf(t,a,o);break;default:throw Error(X(161))}}catch(u){Ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mC(t,e,n){ne=t,gE(t)}function gE(t,e,n){for(var r=(t.mode&1)!==0;ne!==null;){var i=ne,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Nt;a=Yl;var c=Nt;if(Yl=o,(Nt=u)&&!c)for(ne=i;ne!==null;)o=ne,u=o.child,o.tag===22&&o.memoizedState!==null?i_(i):u!==null?(u.return=o,ne=u):i_(i);for(;s!==null;)ne=s,gE(s),s=s.sibling;ne=i,Yl=a,Nt=c}n_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ne=s):n_(t)}}function n_(t){for(;ne!==null;){var e=ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||Uc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ka(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}Nt||e.flags&512&&gf(e)}catch(d){Ke(e,e.return,d)}}if(e===t){ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,ne=n;break}ne=e.return}}function r_(t){for(;ne!==null;){var e=ne;if(e===t){ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ne=n;break}ne=e.return}}function i_(t){for(;ne!==null;){var e=ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(u){Ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ke(e,i,u)}}var s=e.return;try{gf(e)}catch(u){Ke(e,s,u)}break;case 5:var o=e.return;try{gf(e)}catch(u){Ke(e,o,u)}}}catch(u){Ke(e,e.return,u)}if(e===t){ne=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ne=a;break}ne=e.return}}var gC=Math.ceil,Xu=Pr.ReactCurrentDispatcher,Fp=Pr.ReactCurrentOwner,An=Pr.ReactCurrentBatchConfig,ge=0,mt=null,nt=null,wt=0,on=0,Bs=Ai(0),lt=0,ja=null,es=0,Fc=0,jp=0,da=null,Gt=null,Bp=0,lo=1/0,ur=null,Yu=!1,vf=null,ri=null,Jl=!1,Qr=null,Ju=0,fa=0,wf=null,yu=-1,_u=0;function jt(){return ge&6?Ye():yu!==-1?yu:yu=Ye()}function ii(t){return t.mode&1?ge&2&&wt!==0?wt&-wt:ZR.transition!==null?(_u===0&&(_u=ew()),_u):(t=Te,t!==0||(t=window.event,t=t===void 0?16:aw(t.type)),t):1}function jn(t,e,n,r){if(50<fa)throw fa=0,wf=null,Error(X(185));nl(t,n,r),(!(ge&2)||t!==mt)&&(t===mt&&(!(ge&2)&&(Fc|=n),lt===4&&zr(t,wt)),Jt(t,r),n===1&&ge===0&&!(e.mode&1)&&(lo=Ye()+500,Lc&&Si()))}function Jt(t,e){var n=t.callbackNode;ZS(t,e);var r=Lu(t,t===mt?wt:0);if(r===0)n!==null&&fy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fy(n),e===1)t.tag===0?JR(s_.bind(null,t)):Rw(s_.bind(null,t)),KR(function(){!(ge&6)&&Si()}),n=null;else{switch(tw(r)){case 1:n=fp;break;case 4:n=J0;break;case 16:n=Ou;break;case 536870912:n=Z0;break;default:n=Ou}n=AE(n,yE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yE(t,e){if(yu=-1,_u=0,ge&6)throw Error(X(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var r=Lu(t,t===mt?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zu(t,r);else{e=r;var i=ge;ge|=2;var s=vE();(mt!==t||wt!==e)&&(ur=null,lo=Ye()+500,Ki(t,e));do try{vC();break}catch(a){_E(t,a)}while(!0);Rp(),Xu.current=s,ge=i,nt!==null?e=0:(mt=null,wt=0,e=lt)}if(e!==0){if(e===2&&(i=Wd(t),i!==0&&(r=i,e=Ef(t,i))),e===1)throw n=ja,Ki(t,0),zr(t,r),Jt(t,Ye()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!yC(i)&&(e=Zu(t,r),e===2&&(s=Wd(t),s!==0&&(r=s,e=Ef(t,s))),e===1))throw n=ja,Ki(t,0),zr(t,r),Jt(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(X(345));case 2:Fi(t,Gt,ur);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=Bp+500-Ye(),10<e)){if(Lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ef(Fi.bind(null,t,Gt,ur),e);break}Fi(t,Gt,ur);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gC(r/1960))-r,10<r){t.timeoutHandle=ef(Fi.bind(null,t,Gt,ur),r);break}Fi(t,Gt,ur);break;case 5:Fi(t,Gt,ur);break;default:throw Error(X(329))}}}return Jt(t,Ye()),t.callbackNode===n?yE.bind(null,t):null}function Ef(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(Ki(t,e).flags|=256),t=Zu(t,e),t!==2&&(e=Gt,Gt=n,e!==null&&Tf(e)),t}function Tf(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function yC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~jp,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),r=1<<n;t[n]=-1,e&=~r}}function s_(t){if(ge&6)throw Error(X(327));Xs();var e=Lu(t,0);if(!(e&1))return Jt(t,Ye()),null;var n=Zu(t,e);if(t.tag!==0&&n===2){var r=Wd(t);r!==0&&(e=r,n=Ef(t,r))}if(n===1)throw n=ja,Ki(t,0),zr(t,e),Jt(t,Ye()),n;if(n===6)throw Error(X(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fi(t,Gt,ur),Jt(t,Ye()),null}function zp(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(lo=Ye()+500,Lc&&Si())}}function ts(t){Qr!==null&&Qr.tag===0&&!(ge&6)&&Xs();var e=ge;ge|=1;var n=An.transition,r=Te;try{if(An.transition=null,Te=1,t)return t()}finally{Te=r,An.transition=n,ge=e,!(ge&6)&&Si()}}function $p(){on=Bs.current,Le(Bs)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GR(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(Ip(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ju();break;case 3:oo(),Le(Xt),Le(Dt),xp();break;case 5:Np(r);break;case 4:oo();break;case 13:Le(Be);break;case 19:Le(Be);break;case 10:Cp(r.type._context);break;case 22:case 23:$p()}n=n.return}if(mt=t,nt=t=si(t.current,null),wt=on=e,lt=0,ja=null,jp=Fc=es=0,Gt=da=null,$i!==null){for(e=0;e<$i.length;e++)if(n=$i[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$i=null}return t}function _E(t,e){do{var n=nt;try{if(Rp(),pu.current=Qu,Ku){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ku=!1}if(Zi=0,ft=at=$e=null,ca=!1,Ma=0,Fp.current=null,n===null||n.return===null){lt=1,ja=e,nt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=wt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Wy(o);if(g!==null){g.flags&=-257,Gy(g,o,a,s,e),g.mode&1&&qy(s,c,e),e=g,u=c;var v=e.updateQueue;if(v===null){var R=new Set;R.add(u),e.updateQueue=R}else v.add(u);break e}else{if(!(e&1)){qy(s,c,e),Hp();break e}u=Error(X(426))}}else if(Ue&&a.mode&1){var b=Wy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Gy(b,o,a,s,e),Ap(ao(u,a));break e}}s=u=ao(u,a),lt!==4&&(lt=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=tE(s,u,e);Fy(s,E);break e;case 1:a=u;var S=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof S.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(ri===null||!ri.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=nE(s,a,e);Fy(s,D);break e}}s=s.return}while(s!==null)}EE(n)}catch(M){e=M,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(!0)}function vE(){var t=Xu.current;return Xu.current=Qu,t===null?Qu:t}function Hp(){(lt===0||lt===3||lt===2)&&(lt=4),mt===null||!(es&268435455)&&!(Fc&268435455)||zr(mt,wt)}function Zu(t,e){var n=ge;ge|=2;var r=vE();(mt!==t||wt!==e)&&(ur=null,Ki(t,e));do try{_C();break}catch(i){_E(t,i)}while(!0);if(Rp(),ge=n,Xu.current=r,nt!==null)throw Error(X(261));return mt=null,wt=0,lt}function _C(){for(;nt!==null;)wE(nt)}function vC(){for(;nt!==null&&!HS();)wE(nt)}function wE(t){var e=IE(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?EE(t):nt=e,Fp.current=null}function EE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dC(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,nt=null;return}}else if(n=hC(n,e,on),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);lt===0&&(lt=5)}function Fi(t,e,n){var r=Te,i=An.transition;try{An.transition=null,Te=1,wC(t,e,n,r)}finally{An.transition=i,Te=r}return null}function wC(t,e,n,r){do Xs();while(Qr!==null);if(ge&6)throw Error(X(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(X(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eR(t,s),t===mt&&(nt=mt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jl||(Jl=!0,AE(Ou,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=Te;Te=1;var a=ge;ge|=4,Fp.current=null,pC(t,n),mE(n,t),jR(Jd),Vu=!!Yd,Jd=Yd=null,t.current=n,mC(n),qS(),ge=a,Te=o,An.transition=s}else t.current=n;if(Jl&&(Jl=!1,Qr=t,Ju=i),s=t.pendingLanes,s===0&&(ri=null),KS(n.stateNode),Jt(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yu)throw Yu=!1,t=vf,vf=null,t;return Ju&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===wf?fa++:(fa=0,wf=t):fa=0,Si(),null}function Xs(){if(Qr!==null){var t=tw(Ju),e=An.transition,n=Te;try{if(An.transition=null,Te=16>t?16:t,Qr===null)var r=!1;else{if(t=Qr,Qr=null,Ju=0,ge&6)throw Error(X(331));var i=ge;for(ge|=4,ne=t.current;ne!==null;){var s=ne,o=s.child;if(ne.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(ne=c;ne!==null;){var h=ne;switch(h.tag){case 0:case 11:case 15:ha(8,h,s)}var f=h.child;if(f!==null)f.return=h,ne=f;else for(;ne!==null;){h=ne;var d=h.sibling,g=h.return;if(dE(h),h===c){ne=null;break}if(d!==null){d.return=g,ne=d;break}ne=g}}}var v=s.alternate;if(v!==null){var R=v.child;if(R!==null){v.child=null;do{var b=R.sibling;R.sibling=null,R=b}while(R!==null)}}ne=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ne=o;else e:for(;ne!==null;){if(s=ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,ne=E;break e}ne=s.return}}var S=t.current;for(ne=S;ne!==null;){o=ne;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,ne=C;else e:for(o=S;ne!==null;){if(a=ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uc(9,a)}}catch(M){Ke(a,a.return,M)}if(a===o){ne=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,ne=D;break e}ne=a.return}}if(ge=i,Si(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(bc,t)}catch{}r=!0}return r}finally{Te=n,An.transition=e}}return!1}function o_(t,e,n){e=ao(n,e),e=tE(t,e,1),t=ni(t,e,1),e=jt(),t!==null&&(nl(t,1,e),Jt(t,e))}function Ke(t,e,n){if(t.tag===3)o_(t,t,n);else for(;e!==null;){if(e.tag===3){o_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){t=ao(n,t),t=nE(e,t,1),e=ni(e,t,1),t=jt(),e!==null&&(nl(e,1,t),Jt(e,t));break}}e=e.return}}function EC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,mt===t&&(wt&n)===n&&(lt===4||lt===3&&(wt&130023424)===wt&&500>Ye()-Bp?Ki(t,0):jp|=n),Jt(t,e)}function TE(t,e){e===0&&(t.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var n=jt();t=Er(t,e),t!==null&&(nl(t,e,n),Jt(t,n))}function TC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),TE(t,n)}function IC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(X(314))}r!==null&&r.delete(e),TE(t,n)}var IE;IE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,cC(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,Ue&&e.flags&1048576&&Cw(e,$u,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gu(t,e),t=e.pendingProps;var i=ro(e,Dt.current);Qs(e,n),i=Op(null,e,r,t,i,n);var s=Lp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(r)?(s=!0,Bu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kp(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,lf(e,r,t,n),e=hf(null,e,r,!0,s,n)):(e.tag=0,Ue&&s&&Tp(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SC(r),t=Ln(r,t),i){case 0:e=cf(null,e,r,t,n);break e;case 1:e=Xy(null,e,r,t,n);break e;case 11:e=Ky(null,e,r,t,n);break e;case 14:e=Qy(null,e,r,Ln(r.type,t),n);break e}throw Error(X(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),cf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Xy(t,e,r,i,n);case 3:e:{if(oE(e),t===null)throw Error(X(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Dw(t,e),Wu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ao(Error(X(423)),e),e=Yy(t,e,r,n,i);break e}else if(r!==i){i=ao(Error(X(424)),e),e=Yy(t,e,r,n,i);break e}else for(un=ti(e.stateNode.containerInfo.firstChild),dn=e,Ue=!0,Mn=null,n=Nw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),r===i){e=Tr(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return Ow(e),t===null&&sf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zd(r,i)?o=null:s!==null&&Zd(r,s)&&(e.flags|=32),sE(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&sf(e),null;case 13:return aE(t,e,n);case 4:return bp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=so(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Ky(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,be(Hu,r._currentValue),r._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===i.children&&!Xt.current){e=Tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=mr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),of(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(X(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),of(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qs(e,n),i=Rn(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=Ln(r,e.pendingProps),i=Ln(r.type,i),Qy(t,e,r,i,n);case 15:return rE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),gu(t,e),e.tag=1,Yt(r)?(t=!0,Bu(e)):t=!1,Qs(e,n),eE(e,r,i),lf(e,r,i,n),hf(null,e,r,!0,t,n);case 19:return lE(t,e,n);case 22:return iE(t,e,n)}throw Error(X(156,e.tag))};function AE(t,e){return Y0(t,e)}function AC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new AC(t,e,n,r)}function qp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SC(t){if(typeof t=="function")return qp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cp)return 11;if(t===hp)return 14}return 2}function si(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Qi(n.children,i,s,e);case up:o=8,i|=8;break;case Nd:return t=In(12,n,e,i|2),t.elementType=Nd,t.lanes=s,t;case xd:return t=In(13,n,e,i),t.elementType=xd,t.lanes=s,t;case Dd:return t=In(19,n,e,i),t.elementType=Dd,t.lanes=s,t;case O0:return jc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x0:o=10;break e;case D0:o=9;break e;case cp:o=11;break e;case hp:o=14;break e;case Fr:o=16,r=null;break e}throw Error(X(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qi(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function jc(t,e,n,r){return t=In(22,t,r,e),t.elementType=O0,t.lanes=n,t.stateNode={isHidden:!1},t}function ld(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function ud(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$h(0),this.expirationTimes=$h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$h(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wp(t,e,n,r,i,s,o,a,u){return t=new RC(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kp(s),t}function CC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function SE(t){if(!t)return fi;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(X(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(X(171))}if(t.tag===1){var n=t.type;if(Yt(n))return Sw(t,n,e)}return e}function RE(t,e,n,r,i,s,o,a,u){return t=Wp(n,r,!0,t,i,s,o,a,u),t.context=SE(null),n=t.current,r=jt(),i=ii(n),s=mr(r,i),s.callback=e??null,ni(n,s,i),t.current.lanes=i,nl(t,i,r),Jt(t,r),t}function Bc(t,e,n,r){var i=e.current,s=jt(),o=ii(i);return n=SE(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ni(i,e,o),t!==null&&(jn(t,i,o,s),fu(t,i,o)),o}function ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function a_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gp(t,e){a_(t,e),(t=t.alternate)&&a_(t,e)}function PC(){return null}var CE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kp(t){this._internalRoot=t}zc.prototype.render=Kp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(X(409));Bc(t,e,null,null)};zc.prototype.unmount=Kp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){Bc(null,t,null,null)}),e[wr]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=iw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Br.length&&e!==0&&e<Br[n].priority;n++);Br.splice(n,0,t),n===0&&ow(t)}};function Qp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function l_(){}function kC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ec(o);s.call(c)}}var o=RE(e,r,t,0,null,!1,!1,"",l_);return t._reactRootContainer=o,t[wr]=o.current,xa(t.nodeType===8?t.parentNode:t),ts(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ec(u);a.call(c)}}var u=Wp(t,0,!1,null,null,!1,!1,"",l_);return t._reactRootContainer=u,t[wr]=u.current,xa(t.nodeType===8?t.parentNode:t),ts(function(){Bc(e,u,n,r)}),u}function Hc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ec(o);a.call(u)}}Bc(e,o,t,i)}else o=kC(n,e,t,i,r);return ec(o)}nw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yo(e.pendingLanes);n!==0&&(pp(e,n|1),Jt(e,Ye()),!(ge&6)&&(lo=Ye()+500,Si()))}break;case 13:ts(function(){var r=Er(t,1);if(r!==null){var i=jt();jn(r,t,1,i)}}),Gp(t,1)}};mp=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=jt();jn(e,t,134217728,n)}Gp(t,134217728)}};rw=function(t){if(t.tag===13){var e=ii(t),n=Er(t,e);if(n!==null){var r=jt();jn(n,t,e,r)}Gp(t,e)}};iw=function(){return Te};sw=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};$d=function(t,e,n){switch(e){case"input":if(Vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Oc(r);if(!i)throw Error(X(90));V0(r),Vd(r,i)}}}break;case"textarea":U0(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};q0=zp;W0=ts;var bC={usingClientEntryPoint:!1,Events:[il,Ls,Oc,$0,H0,zp]},Go={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NC={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Q0(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||PC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{bc=Zl.inject(NC),Zn=Zl}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bC;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qp(e))throw Error(X(200));return CC(t,e,null,n)};gn.createRoot=function(t,e){if(!Qp(t))throw Error(X(299));var n=!1,r="",i=CE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wp(t,1,!1,null,null,n,!1,r,i),t[wr]=e.current,xa(t.nodeType===8?t.parentNode:t),new Kp(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(X(188)):(t=Object.keys(t).join(","),Error(X(268,t)));return t=Q0(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return ts(t)};gn.hydrate=function(t,e,n){if(!$c(e))throw Error(X(200));return Hc(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Qp(t))throw Error(X(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=CE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=RE(e,null,t,1,n??null,i,!1,s,o),t[wr]=e.current,xa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zc(e)};gn.render=function(t,e,n){if(!$c(e))throw Error(X(200));return Hc(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!$c(t))throw Error(X(40));return t._reactRootContainer?(ts(function(){Hc(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};gn.unstable_batchedUpdates=zp;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$c(n))throw Error(X(200));if(t==null||t._reactInternals===void 0)throw Error(X(38));return Hc(t,e,n,!1,r)};gn.version="18.3.1-next-f1338f8080-20240426";function PE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(PE)}catch(t){console.error(t)}}PE(),P0.exports=gn;var xC=P0.exports,u_=xC;kd.createRoot=u_.createRoot,kd.hydrateRoot=u_.hydrateRoot;const DC="modulepreload",OC=function(t,e){return new URL(t,e).href},c_={},kE=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=OC(c,r),c in c_)return;c_[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!r)for(let v=o.length-1;v>=0;v--){const R=o[v];if(R.href===c&&(!h||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":DC,h||(g.as="script"),g.crossOrigin="",g.href=c,u&&g.setAttribute("nonce",u),document.head.appendChild(g),h)return new Promise((v,R)=>{g.addEventListener("load",v),g.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ba.apply(this,arguments)}var Xr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xr||(Xr={}));const h_="popstate";function LC(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=ds(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),If("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:tc(s))}function r(i,s){qc(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return MC(e,n,r,t)}function Je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VC(){return Math.random().toString(36).substr(2,8)}function d_(t,e){return{usr:t.state,key:t.key,idx:e}}function If(t,e,n,r){return n===void 0&&(n=null),Ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ds(e):e,{state:n,key:e&&e.key||r||VC()})}function tc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function MC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Xr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Ba({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Xr.Pop;let b=h(),E=b==null?null:b-c;c=b,u&&u({action:a,location:R.location,delta:E})}function d(b,E){a=Xr.Push;let S=If(R.location,b,E);n&&n(S,b),c=h()+1;let C=d_(S,c),D=R.createHref(S);try{o.pushState(C,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(D)}s&&u&&u({action:a,location:R.location,delta:1})}function g(b,E){a=Xr.Replace;let S=If(R.location,b,E);n&&n(S,b),c=h();let C=d_(S,c),D=R.createHref(S);o.replaceState(C,"",D),s&&u&&u({action:a,location:R.location,delta:0})}function v(b){let E=i.location.origin!=="null"?i.location.origin:i.location.href,S=typeof b=="string"?b:tc(b);return S=S.replace(/ $/,"%20"),Je(E,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,E)}let R={get action(){return a},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(h_,f),u=b,()=>{i.removeEventListener(h_,f),u=null}},createHref(b){return e(i,b)},createURL:v,encodeLocation(b){let E=v(b);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:d,replace:g,go(b){return o.go(b)}};return R}var f_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(f_||(f_={}));function UC(t,e,n){return n===void 0&&(n="/"),FC(t,e,n)}function FC(t,e,n,r){let i=typeof e=="string"?ds(e):e,s=Xp(i.pathname||"/",n);if(s==null)return null;let o=bE(t);jC(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=JC(s);a=QC(o[u],c)}return a}function bE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Je(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=oi([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Je(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),bE(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:GC(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of NE(s.path))i(s,o,u)}),e}function NE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=NE(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function jC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:KC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const BC=/^:[\w-]+$/,zC=3,$C=2,HC=1,qC=10,WC=-2,p_=t=>t==="*";function GC(t,e){let n=t.split("/"),r=n.length;return n.some(p_)&&(r+=WC),e&&(r+=$C),n.filter(i=>!p_(i)).reduce((i,s)=>i+(BC.test(s)?zC:s===""?HC:qC),r)}function KC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function QC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=XC({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),d=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:oi([s,f.pathname]),pathnameBase:rP(oi([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=oi([s,f.pathnameBase]))}return o}function XC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=YC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:d,isOptional:g}=h;if(d==="*"){let R=a[f]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const v=a[f];return g&&!v?c[d]=void 0:c[d]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function YC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function JC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Xp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const ZC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eP=t=>ZC.test(t);function tP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ds(t):t,s;if(n)if(eP(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),qc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=m_(n.substring(1),"/"):s=m_(n,e)}else s=e;return{pathname:s,search:iP(r),hash:sP(i)}}function m_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Yp(t,e){let n=nP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Jp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ds(t):(i=Ba({},t),Je(!i.pathname||!i.pathname.includes("?"),cd("?","pathname","search",i)),Je(!i.pathname||!i.pathname.includes("#"),cd("#","pathname","hash",i)),Je(!i.search||!i.search.includes("#"),cd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let u=tP(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),rP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),iP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,sP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function oP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xE=["post","put","patch","delete"];new Set(xE);const aP=["get",...xE];new Set(aP);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},za.apply(this,arguments)}const Zp=W.createContext(null),lP=W.createContext(null),Ri=W.createContext(null),Wc=W.createContext(null),kr=W.createContext({outlet:null,matches:[],isDataRoute:!1}),DE=W.createContext(null);function uP(t,e){let{relative:n}=e===void 0?{}:e;vo()||Je(!1);let{basename:r,navigator:i}=W.useContext(Ri),{hash:s,pathname:o,search:a}=VE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:oi([r,o])),i.createHref({pathname:u,search:a,hash:s})}function vo(){return W.useContext(Wc)!=null}function ol(){return vo()||Je(!1),W.useContext(Wc).location}function OE(t){W.useContext(Ri).static||W.useLayoutEffect(t)}function LE(){let{isDataRoute:t}=W.useContext(kr);return t?AP():cP()}function cP(){vo()||Je(!1);let t=W.useContext(Zp),{basename:e,future:n,navigator:r}=W.useContext(Ri),{matches:i}=W.useContext(kr),{pathname:s}=ol(),o=JSON.stringify(Yp(i,n.v7_relativeSplatPath)),a=W.useRef(!1);return OE(()=>{a.current=!0}),W.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Jp(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:oi([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}const hP=W.createContext(null);function dP(t){let e=W.useContext(kr).outlet;return e&&W.createElement(hP.Provider,{value:t},e)}function VE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=W.useContext(Ri),{matches:i}=W.useContext(kr),{pathname:s}=ol(),o=JSON.stringify(Yp(i,r.v7_relativeSplatPath));return W.useMemo(()=>Jp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function fP(t,e){return pP(t,e)}function pP(t,e,n,r){vo()||Je(!1);let{navigator:i}=W.useContext(Ri),{matches:s}=W.useContext(kr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ol(),h;if(e){var f;let b=typeof e=="string"?ds(e):e;u==="/"||(f=b.pathname)!=null&&f.startsWith(u)||Je(!1),h=b}else h=c;let d=h.pathname||"/",g=d;if(u!=="/"){let b=u.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=UC(t,{pathname:g}),R=vP(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:oi([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:oi([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&R?W.createElement(Wc.Provider,{value:{location:za({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Xr.Pop}},R):R}function mP(){let t=IP(),e=oP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),n?W.createElement("pre",{style:i},n):null,null)}const gP=W.createElement(mP,null);class yP extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?W.createElement(kr.Provider,{value:this.props.routeContext},W.createElement(DE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _P(t){let{routeContext:e,match:n,children:r}=t,i=W.useContext(Zp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),W.createElement(kr.Provider,{value:e},r)}function vP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Je(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:d,errors:g}=n,v=f.route.loader&&d[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,d)=>{let g,v=!1,R=null,b=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,R=f.route.errorElement||gP,u&&(c<0&&d===0?(SP("route-fallback"),v=!0,b=null):c===d&&(v=!0,b=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,d+1)),S=()=>{let C;return g?C=R:v?C=b:f.route.Component?C=W.createElement(f.route.Component,null):f.route.element?C=f.route.element:C=h,W.createElement(_P,{match:f,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:C})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?W.createElement(yP,{location:n.location,revalidation:n.revalidation,component:R,error:g,children:S(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):S()},null)}var ME=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ME||{}),UE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(UE||{});function wP(t){let e=W.useContext(Zp);return e||Je(!1),e}function EP(t){let e=W.useContext(lP);return e||Je(!1),e}function TP(t){let e=W.useContext(kr);return e||Je(!1),e}function FE(t){let e=TP(),n=e.matches[e.matches.length-1];return n.route.id||Je(!1),n.route.id}function IP(){var t;let e=W.useContext(DE),n=EP(),r=FE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function AP(){let{router:t}=wP(ME.UseNavigateStable),e=FE(UE.UseNavigateStable),n=W.useRef(!1);return OE(()=>{n.current=!0}),W.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,za({fromRouteId:e},s)))},[t,e])}const g_={};function SP(t,e,n){g_[t]||(g_[t]=!0)}function RP(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function nc(t){let{to:e,replace:n,state:r,relative:i}=t;vo()||Je(!1);let{future:s,static:o}=W.useContext(Ri),{matches:a}=W.useContext(kr),{pathname:u}=ol(),c=LE(),h=Jp(e,Yp(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return W.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function CP(t){return dP(t.context)}function Ur(t){Je(!1)}function PP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xr.Pop,navigator:s,static:o=!1,future:a}=t;vo()&&Je(!1);let u=e.replace(/^\/*/,"/"),c=W.useMemo(()=>({basename:u,navigator:s,static:o,future:za({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=ds(r));let{pathname:h="/",search:f="",hash:d="",state:g=null,key:v="default"}=r,R=W.useMemo(()=>{let b=Xp(h,u);return b==null?null:{location:{pathname:b,search:f,hash:d,state:g,key:v},navigationType:i}},[u,h,f,d,g,v,i]);return R==null?null:W.createElement(Ri.Provider,{value:c},W.createElement(Wc.Provider,{children:n,value:R}))}function kP(t){let{children:e,location:n}=t;return fP(Af(e),n)}new Promise(()=>{});function Af(t,e){e===void 0&&(e=[]);let n=[];return W.Children.forEach(t,(r,i)=>{if(!W.isValidElement(r))return;let s=[...e,i];if(r.type===W.Fragment){n.push.apply(n,Af(r.props.children,s));return}r.type!==Ur&&Je(!1),!r.props.index||!r.props.children||Je(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Af(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sf(){return Sf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sf.apply(this,arguments)}function bP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function NP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function xP(t,e){return t.button===0&&(!e||e==="_self")&&!NP(t)}const DP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],OP="6";try{window.__reactRouterVersion=OP}catch{}const LP="startTransition",y_=ES[LP];function VP(t){let{basename:e,children:n,future:r,window:i}=t,s=W.useRef();s.current==null&&(s.current=LC({window:i,v5Compat:!0}));let o=s.current,[a,u]=W.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=W.useCallback(f=>{c&&y_?y_(()=>u(f)):u(f)},[u,c]);return W.useLayoutEffect(()=>o.listen(h),[o,h]),W.useEffect(()=>RP(r),[r]),W.createElement(PP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const MP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,FP=W.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,viewTransition:f}=e,d=bP(e,DP),{basename:g}=W.useContext(Ri),v,R=!1;if(typeof c=="string"&&UP.test(c)&&(v=c,MP))try{let C=new URL(window.location.href),D=c.startsWith("//")?new URL(C.protocol+c):new URL(c),M=Xp(D.pathname,g);D.origin===C.origin&&M!=null?c=M+D.search+D.hash:R=!0}catch{}let b=uP(c,{relative:i}),E=jP(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:f});function S(C){r&&r(C),C.defaultPrevented||E(C)}return W.createElement("a",Sf({},d,{href:v||b,onClick:R||s?r:S,ref:n,target:u}))});var __;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(__||(__={}));var v_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(v_||(v_={}));function jP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=LE(),c=ol(),h=VE(t,{relative:o});return W.useCallback(f=>{if(xP(f,n)){f.preventDefault();let d=r!==void 0?r:tc(c)===tc(h);u(t,{replace:d,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}const BP=()=>{};var w_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},BE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(d=64)),r.push(n[h],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new $P;const d=s<<2|a>>4;if(r.push(d),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $P extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HP=function(t){const e=jE(t);return BE.encodeByteArray(e,!0)},rc=function(t){return HP(t).replace(/\./g,"")},zE=function(t){try{return BE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=()=>qP().__FIREBASE_DEFAULTS__,GP=()=>{if(typeof process>"u"||typeof w_>"u")return;const t=w_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zE(t[1]);return e&&JSON.parse(e)},Gc=()=>{try{return BP()||WP()||GP()||KP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$E=t=>{var e,n;return(n=(e=Gc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HE=t=>{const e=$E(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qE=()=>{var t;return(t=Gc())===null||t===void 0?void 0:t.config},WE=t=>{var e;return(e=Gc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function em(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),""].join(".")}const pa={};function XP(){const t={prod:[],emulator:[]};for(const e of Object.keys(pa))pa[e]?t.emulator.push(e):t.prod.push(e);return t}function YP(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let E_=!1;function tm(t,e){if(typeof window>"u"||typeof document>"u"||!Ci(window.location.host)||pa[t]===e||pa[t]||E_)return;pa[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",s=XP().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function u(d,g){d.setAttribute("width","24"),d.setAttribute("id",g),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{E_=!0,o()},d}function h(d,g){d.setAttribute("id",g),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=YP(r),g=n("text"),v=document.getElementById(g)||document.createElement("span"),R=n("learnmore"),b=document.getElementById(R)||document.createElement("a"),E=n("preprendIcon"),S=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const C=d.element;a(C),h(b,R);const D=c();u(S,E),C.append(S,v,b,D),document.body.appendChild(C)}s?(v.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function ZP(){var t;const e=(t=Gc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ek(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nk(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rk(){return!ZP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rm(){try{return typeof indexedDB=="object"}catch{return!1}}function im(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function KE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ik,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kn(i,a,r)}}function sk(t,e){return t.replace(ok,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ok=/\{\$([^}]+)}/g;function ak(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(T_(s)&&T_(o)){if(!pi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function T_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lk(t,e){const n=new uk(t,e);return n.subscribe.bind(n)}class uk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ck(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hd),i.error===void 0&&(i.error=hd),i.complete===void 0&&(i.complete=hd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ck(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=1e3,dk=2,fk=4*60*60*1e3,pk=.5;function I_(t,e=hk,n=dk){const r=e*Math.pow(n,t),i=Math.round(pk*r*(Math.random()-.5)*2);return Math.min(fk,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yk(e))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ji){return this.instances.has(e)}getOptions(e=ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ji){return this.component?this.component.multipleInstances?e:ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gk(t){return t===ji?void 0:t}function yk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const vk={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},wk=he.INFO,Ek={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Tk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ek[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kc{constructor(e){this.name=e,this._logLevel=wk,this._logHandler=Tk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Ik=(t,e)=>e.some(n=>t instanceof n);let A_,S_;function Ak(){return A_||(A_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sk(){return S_||(S_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QE=new WeakMap,Rf=new WeakMap,XE=new WeakMap,dd=new WeakMap,sm=new WeakMap;function Rk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ai(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&QE.set(n,t)}).catch(()=>{}),sm.set(e,t),e}function Ck(t){if(Rf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Rf.set(t,e)}let Cf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||XE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ai(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pk(t){Cf=t(Cf)}function kk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fd(this),e,...n);return XE.set(r,e.sort?e.sort():[e]),ai(r)}:Sk().includes(t)?function(...e){return t.apply(fd(this),e),ai(QE.get(this))}:function(...e){return ai(t.apply(fd(this),e))}}function bk(t){return typeof t=="function"?kk(t):(t instanceof IDBTransaction&&Ck(t),Ik(t,Ak())?new Proxy(t,Cf):t)}function ai(t){if(t instanceof IDBRequest)return Rk(t);if(dd.has(t))return dd.get(t);const e=bk(t);return e!==t&&(dd.set(t,e),sm.set(e,t)),e}const fd=t=>sm.get(t);function YE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ai(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ai(o.result),u.oldVersion,u.newVersion,ai(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Nk=["get","getKey","getAll","getAllKeys","count"],xk=["put","add","delete","clear"],pd=new Map;function R_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pd.get(e))return pd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Nk.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return pd.set(e,s),s}Pk(t=>({...t,get:(e,n,r)=>R_(e,n)||t.get(e,n,r),has:(e,n)=>!!R_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ok(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ok(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pf="@firebase/app",C_="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Kc("@firebase/app"),Lk="@firebase/app-compat",Vk="@firebase/analytics-compat",Mk="@firebase/analytics",Uk="@firebase/app-check-compat",Fk="@firebase/app-check",jk="@firebase/auth",Bk="@firebase/auth-compat",zk="@firebase/database",$k="@firebase/data-connect",Hk="@firebase/database-compat",qk="@firebase/functions",Wk="@firebase/functions-compat",Gk="@firebase/installations",Kk="@firebase/installations-compat",Qk="@firebase/messaging",Xk="@firebase/messaging-compat",Yk="@firebase/performance",Jk="@firebase/performance-compat",Zk="@firebase/remote-config",e2="@firebase/remote-config-compat",t2="@firebase/storage",n2="@firebase/storage-compat",r2="@firebase/firestore",i2="@firebase/ai",s2="@firebase/firestore-compat",o2="firebase",a2="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="[DEFAULT]",l2={[Pf]:"fire-core",[Lk]:"fire-core-compat",[Mk]:"fire-analytics",[Vk]:"fire-analytics-compat",[Fk]:"fire-app-check",[Uk]:"fire-app-check-compat",[jk]:"fire-auth",[Bk]:"fire-auth-compat",[zk]:"fire-rtdb",[$k]:"fire-data-connect",[Hk]:"fire-rtdb-compat",[qk]:"fire-fn",[Wk]:"fire-fn-compat",[Gk]:"fire-iid",[Kk]:"fire-iid-compat",[Qk]:"fire-fcm",[Xk]:"fire-fcm-compat",[Yk]:"fire-perf",[Jk]:"fire-perf-compat",[Zk]:"fire-rc",[e2]:"fire-rc-compat",[t2]:"fire-gcs",[n2]:"fire-gcs-compat",[r2]:"fire-fst",[s2]:"fire-fst-compat",[i2]:"fire-vertex","fire-js":"fire-js",[o2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Map,bf=new Map,Nf=new Map;function P_(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(Nf.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Nf.set(e,t);for(const n of ns.values())P_(n,t);for(const n of bf.values())P_(n,t);return!0}function Pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},li=new fs("app","Firebase",u2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw li.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=a2;function om(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kf,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw li.create("bad-app-name",{appName:String(i)});if(n||(n=qE()),!n)throw li.create("no-options");const s=ns.get(i);if(s){if(pi(n,s.options)&&pi(r,s.config))return s;throw li.create("duplicate-app",{appName:i})}const o=new _k(i);for(const u of Nf.values())o.addComponent(u);const a=new c2(n,r,o);return ns.set(i,a),a}function ll(t=kf){const e=ns.get(t);if(!e&&t===kf&&qE())return om();if(!e)throw li.create("no-app",{appName:t});return e}function h2(){return Array.from(ns.values())}async function d2(t){let e=!1;const n=t.name;ns.has(n)?(e=!0,ns.delete(n)):bf.has(n)&&t.decRefCount()<=0&&(bf.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Zt(t,e,n){var r;let i=(r=l2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(a.join(" "));return}zn(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2="firebase-heartbeat-database",p2=1,$a="firebase-heartbeat-store";let md=null;function JE(){return md||(md=YE(f2,p2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($a)}catch(n){console.warn(n)}}}}).catch(t=>{throw li.create("idb-open",{originalErrorMessage:t.message})})),md}async function m2(t){try{const n=(await JE()).transaction($a),r=await n.objectStore($a).get(ZE(t));return await n.done,r}catch(e){if(e instanceof kn)Ir.warn(e.message);else{const n=li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function k_(t,e){try{const r=(await JE()).transaction($a,"readwrite");await r.objectStore($a).put(e,ZE(t)),await r.done}catch(n){if(n instanceof kn)Ir.warn(n.message);else{const r=li.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(r.message)}}}function ZE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=1024,y2=30;class _2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new w2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=b_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>y2){const o=E2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=b_(),{heartbeatsToSend:r,unsentEntries:i}=v2(this._heartbeatsCache.heartbeats),s=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ir.warn(n),""}}}function b_(){return new Date().toISOString().substring(0,10)}function v2(t,e=g2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),N_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),N_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class w2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rm()?im().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await m2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return k_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return k_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function N_(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}function E2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t){zn(new Pn("platform-logger",e=>new Dk(e),"PRIVATE")),zn(new Pn("heartbeat",e=>new _2(e),"PRIVATE")),Zt(Pf,C_,t),Zt(Pf,C_,"esm2017"),Zt("fire-js","")}T2("");function am(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function e1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I2=e1,t1=new fs("auth","Firebase",e1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Kc("@firebase/auth");function A2(t,...e){ic.logLevel<=he.WARN&&ic.warn(`Auth (${ps}): ${t}`,...e)}function wu(t,...e){ic.logLevel<=he.ERROR&&ic.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,...e){throw lm(t,...e)}function tr(t,...e){return lm(t,...e)}function n1(t,e,n){const r=Object.assign(Object.assign({},I2()),{[e]:n});return new fs("auth","Firebase",r).create(e,{appName:t.name})}function gr(t){return n1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return t1.create(t,...e)}function ae(t,e,...n){if(!t)throw lm(e,...n)}function fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wu(e),new Error(e)}function Ar(t,e){t||fr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function S2(){return x_()==="http:"||x_()==="https:"}function x_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S2()||nm()||"connection"in navigator)?navigator.onLine:!0}function C2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=JP()||tk()}get(){return R2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t,e){Ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],b2=new ul(3e4,6e4);function ki(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function br(t,e,n,r,i={}){return i1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=al(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return ek()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ci(t.emulatorConfig.host)&&(c.credentials="include"),r1.fetch()(await s1(t,t.config.apiHost,n,a),c)})}async function i1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},P2),e);try{const i=new x2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw eu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw eu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw eu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw eu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw n1(t,h,c);$n(t,h)}}catch(i){if(i instanceof kn)throw i;$n(t,"network-request-failed",{message:String(i)})}}async function cl(t,e,n,r,i={}){const s=await br(t,e,n,r,i);return"mfaPendingCredential"in s&&$n(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function s1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?um(t.config,i):`${t.config.apiScheme}://${i}`;return k2.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function N2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class x2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tr(this.auth,"network-request-failed")),b2.get())})}}function eu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tr(t,e,r);return i.customData._tokenResponse=n,i}function D_(t){return t!==void 0&&t.enterprise!==void 0}class D2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return N2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function O2(t,e){return br(t,"GET","/v2/recaptchaConfig",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e){return br(t,"POST","/v1/accounts:delete",e)}async function sc(t,e){return br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function V2(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=cm(r);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ma(gd(i.auth_time)),issuedAtTime:ma(gd(i.iat)),expirationTime:ma(gd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gd(t){return Number(t)*1e3}function cm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=zE(n);return i?JSON.parse(i):(wu("Failed to decode base64 JWT payload"),null)}catch(i){return wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function O_(t){const e=cm(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&M2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function M2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ma(this.lastLoginAt),this.creationTime=ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await uo(t,sc(n,{idToken:r}));ae(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?o1(s.providerUserInfo):[],a=j2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Df(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function F2(t){const e=Ie(t);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function o1(t){return t.map(e=>{var{providerId:n}=e,r=am(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e){const n=await i1(t,{},async()=>{const r=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await s1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return t.emulatorConfig&&Ci(t.emulatorConfig.host)&&(u.credentials="include"),r1.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function z2(t,e){return br(t,"POST","/v2/accounts:revokeToken",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):O_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=O_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await B2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ys;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=am(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new U2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Df(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await uo(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return V2(this,e)}reload(){return F2(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await uo(this,L2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:D,isAnonymous:M,providerData:x,stsTokenManager:T}=n;ae(C&&T,e,"internal-error");const m=Ys.fromJSON(this.name,T);ae(typeof C=="string",e,"internal-error"),Mr(f,e.name),Mr(d,e.name),ae(typeof D=="boolean",e,"internal-error"),ae(typeof M=="boolean",e,"internal-error"),Mr(g,e.name),Mr(v,e.name),Mr(R,e.name),Mr(b,e.name),Mr(E,e.name),Mr(S,e.name);const y=new Un({uid:C,auth:e,email:d,emailVerified:D,displayName:f,isAnonymous:M,photoURL:v,phoneNumber:g,tenantId:R,stsTokenManager:m,createdAt:E,lastLoginAt:S});return x&&Array.isArray(x)&&(y.providerData=x.map(w=>Object.assign({},w))),b&&(y._redirectEventId=b),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ys;i.updateFromServerResponse(n);const s=new Un({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ae(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?o1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ys;a.updateFromIdToken(r);const u=new Un({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Df(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=new Map;function pr(t){Ar(t instanceof Function,"Expected a class definition");let e=L_.get(t);return e?(Ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,L_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a1.type="NONE";const V_=a1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Eu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Eu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sc(this.auth,{idToken:e}).catch(()=>{});return n?Un._fromGetAccountInfoResponse(this.auth,n,e):null}return Un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(pr(V_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||pr(V_);const o=Eu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){let f;if(typeof h=="string"){const d=await sc(e,{idToken:h}).catch(()=>{});if(!d)break;f=await Un._fromGetAccountInfoResponse(e,d,h)}else f=Un._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Js(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Js(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f1(e))return"Blackberry";if(p1(e))return"Webos";if(u1(e))return"Safari";if((e.includes("chrome/")||c1(e))&&!e.includes("edge/"))return"Chrome";if(d1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function l1(t=Ot()){return/firefox\//i.test(t)}function u1(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c1(t=Ot()){return/crios\//i.test(t)}function h1(t=Ot()){return/iemobile/i.test(t)}function d1(t=Ot()){return/android/i.test(t)}function f1(t=Ot()){return/blackberry/i.test(t)}function p1(t=Ot()){return/webos/i.test(t)}function hm(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $2(t=Ot()){var e;return hm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function H2(){return nk()&&document.documentMode===10}function m1(t=Ot()){return hm(t)||d1(t)||p1(t)||f1(t)||/windows phone/i.test(t)||h1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t,e=[]){let n;switch(t){case"Browser":n=M_(Ot());break;case"Worker":n=`${M_(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W2(t,e={}){return br(t,"GET","/v2/passwordPolicy",ki(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=6;class K2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:G2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new U_(this),this.idTokenSubscription=new U_(this),this.beforeStateQueue=new q2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sc(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(gr(this));const n=e?Ie(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await W2(this),n=new K2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await z2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pr(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[pr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(an(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&A2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ms(t){return Ie(t)}class U_{constructor(e){this.auth=e,this.observer=null,this.addObserver=lk(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function X2(t){Qc=t}function y1(t){return Qc.loadJS(t)}function Y2(){return Qc.recaptchaEnterpriseScript}function J2(){return Qc.gapiScript}function Z2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class eb{constructor(){this.enterprise=new tb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class tb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const nb="recaptcha-enterprise",_1="NO_RECAPTCHA";class rb{constructor(e){this.type=nb,this.auth=ms(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{O2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new D2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;D_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(_1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eb().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&D_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Y2();u.length!==0&&(u+=a),y1(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function F_(t,e,n,r=!1,i=!1){const s=new rb(t);let o;if(i)o=_1;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Of(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await F_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await F_(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t,e){const n=Pi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pi(s,e??{}))return i;$n(i,"already-initialized")}return n.initialize({options:e})}function sb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ob(t,e,n){const r=ms(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=v1(e),{host:o,port:a}=ab(e),u=a===null?"":`:${a}`,c={url:`${s}//${o}${u}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(pi(c,r.config.emulator)&&pi(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Ci(o)?(em(`${s}//${o}${u}`),tm("Auth",!0)):lb()}function v1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ab(t){const e=v1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:j_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:j_(o)}}}function j_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}async function ub(t,e){return br(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(t,e){return cl(t,"POST","/v1/accounts:signInWithPassword",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}async function db(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends dm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ha(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ha(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Of(e,n,"signInWithPassword",cb);case"emailLink":return hb(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Of(e,r,"signUpPassword",ub);case"emailLink":return db(e,{idToken:n,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e){return cl(t,"POST","/v1/accounts:signInWithIdp",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="http://localhost";class rs extends dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=am(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zs(e,n)}buildRequest(){const e={requestUri:fb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=al(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mb(t){const e=Zo(ea(t)).link,n=e?Zo(ea(e)).deep_link_id:null,r=Zo(ea(t)).deep_link_id;return(r?Zo(ea(r)).link:null)||r||n||e||t}class fm{constructor(e){var n,r,i,s,o,a;const u=Zo(ea(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=pb((i=u.mode)!==null&&i!==void 0?i:null);ae(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mb(e);try{return new fm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.providerId=wo.PROVIDER_ID}static credential(e,n){return Ha._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fm.parseLink(n);return ae(r,"argument-error"),Ha._fromEmailAndCode(e,r.code,r.tenantId)}}wo.PROVIDER_ID="password";wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends w1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends hl{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.FACEBOOK_SIGN_IN_METHOD="facebook.com";$r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.GOOGLE_SIGN_IN_METHOD="google.com";Hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends hl{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends hl{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(t,e){return cl(t,"POST","/v1/accounts:signUp",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Un._fromIdTokenResponse(e,r,i),o=B_(r);return new is({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=B_(r);return new is({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function B_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ac(e,n,r,i)}}function E1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(t,s,e,r):s})}async function yb(t,e,n=!1){const r=await uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(gr(r));const i="reauthenticate";try{const s=await uo(t,E1(r,i,e,t),n);ae(s.idToken,r,"internal-error");const o=cm(s.idToken);ae(o,r,"internal-error");const{sub:a}=o;return ae(t.uid===a,r,"user-mismatch"),is._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$n(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(t,e,n=!1){if(an(t.app))return Promise.reject(gr(t));const r="signIn",i=await E1(t,r,e),s=await is._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vb(t,e){return T1(ms(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(t){const e=ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wb(t,e,n){if(an(t.app))return Promise.reject(gr(t));const r=ms(t),o=await Of(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&I1(t),u}),a=await is._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Eb(t,e,n){return an(t.app)?Promise.reject(gr(t)):vb(Ie(t),wo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&I1(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){return br(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ie(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await uo(r,Tb(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Ab(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function Sb(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function Rb(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}function A1(t){return Ie(t).signOut()}const lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=1e3,Pb=10;class R1 extends S1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=m1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);H2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Cb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}R1.type="LOCAL";const kb=R1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1 extends S1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}C1.type="SESSION";const P1=C1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await bb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=pm("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function xb(t){nr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function Db(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ob(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lb(){return k1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="firebaseLocalStorageDb",Vb=1,uc="firebaseLocalStorage",N1="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yc(t,e){return t.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function Mb(){const t=indexedDB.deleteDatabase(b1);return new dl(t).toPromise()}function Lf(){const t=indexedDB.open(b1,Vb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uc,{keyPath:N1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uc)?e(r):(r.close(),await Mb(),e(await Lf()))})})}async function z_(t,e,n){const r=Yc(t,!0).put({[N1]:e,value:n});return new dl(r).toPromise()}async function Ub(t,e){const n=Yc(t,!1).get(e),r=await new dl(n).toPromise();return r===void 0?null:r.value}function $_(t,e){const n=Yc(t,!0).delete(e);return new dl(n).toPromise()}const Fb=800,jb=3;class x1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(Lb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Db(),!this.activeServiceWorker)return;this.sender=new Nb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ob()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lf();return await z_(e,lc,"1"),await $_(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>z_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ub(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yc(i,!1).getAll();return new dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x1.type="LOCAL";const Bb=x1;new ul(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t,e){return e?pr(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm extends dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $b(t){return T1(t.auth,new mm(t),t.bypassAuthState)}function Hb(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),_b(n,new mm(t),t.bypassAuthState)}async function qb(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),yb(n,new mm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $b;case"linkViaPopup":case"linkViaRedirect":return qb;case"reauthViaPopup":case"reauthViaRedirect":return Hb;default:$n(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=new ul(2e3,1e4);class zs extends D1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=pm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wb.get())};e()}}zs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="pendingRedirect",Tu=new Map;class Kb extends D1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tu.get(this.auth._key());if(!e){try{const r=await Qb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tu.set(this.auth._key(),e)}return this.bypassAuthState||Tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qb(t,e){const n=Jb(e),r=Yb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Xb(t,e){Tu.set(t._key(),e)}function Yb(t){return pr(t._redirectPersistence)}function Jb(t){return Eu(Gb,t.config.apiKey,t.name)}async function Zb(t,e,n=!1){if(an(t.app))return Promise.reject(gr(t));const r=ms(t),i=zb(r,e),o=await new Kb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=10*60*1e3;class tN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eN&&this.cachedEventUids.clear(),this.cachedEventUids.has(H_(e))}saveEventToCache(e){this.cachedEventUids.add(H_(e)),this.lastProcessedEventTime=Date.now()}}function H_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t,e={}){return br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sN=/^https?/;async function oN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rN(t);for(const n of e)try{if(aN(n))return}catch{}$n(t,"unauthorized-domain")}function aN(t){const e=xf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sN.test(n))return!1;if(iN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new ul(3e4,6e4);function q_(){const t=nr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uN(t){return new Promise((e,n)=>{var r,i,s;function o(){q_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{q_(),n(tr(t,"network-request-failed"))},timeout:lN.get()})}if(!((i=(r=nr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nr().gapi)===null||s===void 0)&&s.load)o();else{const a=Z2("iframefcb");return nr()[a]=()=>{gapi.load?o():n(tr(t,"network-request-failed"))},y1(`${J2()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Iu=null,e})}let Iu=null;function cN(t){return Iu=Iu||uN(t),Iu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=new ul(5e3,15e3),dN="__/auth/iframe",fN="emulator/auth/iframe",pN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gN(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?um(e,fN):`https://${t.config.authDomain}/${dN}`,r={apiKey:e.apiKey,appName:t.name,v:ps},i=mN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${al(r).slice(1)}`}async function yN(t){const e=await cN(t),n=nr().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:gN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tr(t,"network-request-failed"),a=nr().setTimeout(()=>{s(o)},hN.get());function u(){nr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vN=500,wN=600,EN="_blank",TN="http://localhost";class W_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IN(t,e,n,r=vN,i=wN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},_N),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ot().toLowerCase();n&&(a=c1(c)?EN:n),l1(c)&&(e=e||TN,u.scrollbars="yes");const h=Object.entries(u).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if($2(c)&&a!=="_self")return AN(e||"",a),new W_(null);const f=window.open(e||"",a,h);ae(f,t,"popup-blocked");try{f.focus()}catch{}return new W_(f)}function AN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="__/auth/handler",RN="emulator/auth/handler",CN=encodeURIComponent("fac");async function G_(t,e,n,r,i,s){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:i};if(e instanceof w1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ak(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof hl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${CN}=${encodeURIComponent(u)}`:"";return`${PN(t)}?${al(a).slice(1)}${c}`}function PN({config:t}){return t.emulator?um(t,RN):`https://${t.authDomain}/${SN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="webStorageSupport";class kN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P1,this._completeRedirectFn=Zb,this._overrideRedirectResult=Xb}async _openPopup(e,n,r,i){var s;Ar((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await G_(e,n,r,xf(),i);return IN(e,o,pm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await G_(e,n,r,xf(),i);return xb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ar(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yN(e),r=new tN(e);return n.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yd,{type:yd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yd];o!==void 0&&n(!!o),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return m1()||u1()||hm()}}const bN=kN;var K_="@firebase/auth",Q_="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DN(t){zn(new Pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g1(t)},c=new Q2(r,i,s,u);return sb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zn(new Pn("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(r=>new NN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(K_,Q_,xN(t)),Zt(K_,Q_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=5*60,LN=WE("authIdTokenMaxAge")||ON;let X_=null;const VN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LN)return;const i=n==null?void 0:n.token;X_!==i&&(X_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function L1(t=ll()){const e=Pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ib(t,{popupRedirectResolver:bN,persistence:[Bb,kb,P1]}),r=WE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=VN(s.toString());Sb(n,o,()=>o(n.currentUser)),Ab(n,a=>o(a))}}const i=$E("auth");return i&&ob(n,`http://${i}`),n}function MN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}X2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DN("Browser");var UN="firebase",FN="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(UN,FN,"app");const V1="@firebase/installations",gm="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=1e4,U1=`w:${gm}`,F1="FIS_v2",jN="https://firebaseinstallations.googleapis.com/v1",BN=60*60*1e3,zN="installations",$N="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ss=new fs(zN,$N,HN);function j1(t){return t instanceof kn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1({projectId:t}){return`${jN}/projects/${t}/installations`}function z1(t){return{token:t.token,requestStatus:2,expiresIn:WN(t.expiresIn),creationTime:Date.now()}}async function $1(t,e){const r=(await e.json()).error;return ss.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function H1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qN(t,{refreshToken:e}){const n=H1(t);return n.append("Authorization",GN(e)),n}async function q1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function WN(t){return Number(t.replace("s","000"))}function GN(t){return`${F1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=B1(t),i=H1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:F1,appId:t.appId,sdkVersion:U1},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await q1(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:z1(c.authToken)}}else throw await $1("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=/^[cdef][\w-]{21}$/,Vf="";function YN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=JN(t);return XN.test(n)?n:Vf}catch{return Vf}}function JN(t){return QN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=new Map;function K1(t,e){const n=Jc(t);Q1(n,e),ZN(n,e)}function Q1(t,e){const n=G1.get(t);if(n)for(const r of n)r(e)}function ZN(t,e){const n=ex();n&&n.postMessage({key:t,fid:e}),tx()}let qi=null;function ex(){return!qi&&"BroadcastChannel"in self&&(qi=new BroadcastChannel("[Firebase] FID Change"),qi.onmessage=t=>{Q1(t.data.key,t.data.fid)}),qi}function tx(){G1.size===0&&qi&&(qi.close(),qi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx="firebase-installations-database",rx=1,os="firebase-installations-store";let _d=null;function ym(){return _d||(_d=YE(nx,rx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(os)}}})),_d}async function cc(t,e){const n=Jc(t),i=(await ym()).transaction(os,"readwrite"),s=i.objectStore(os),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&K1(t,e.fid),e}async function X1(t){const e=Jc(t),r=(await ym()).transaction(os,"readwrite");await r.objectStore(os).delete(e),await r.done}async function Zc(t,e){const n=Jc(t),i=(await ym()).transaction(os,"readwrite"),s=i.objectStore(os),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&K1(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(t){let e;const n=await Zc(t.appConfig,r=>{const i=ix(r),s=sx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Vf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ix(t){const e=t||{fid:YN(),registrationStatus:0};return Y1(e)}function sx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ss.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ox(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ax(t)}:{installationEntry:e}}async function ox(t,e){try{const n=await KN(t,e);return cc(t.appConfig,n)}catch(n){throw j1(n)&&n.customData.serverCode===409?await X1(t.appConfig):await cc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ax(t){let e=await Y_(t.appConfig);for(;e.registrationStatus===1;)await W1(100),e=await Y_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _m(t);return r||n}return e}function Y_(t){return Zc(t,e=>{if(!e)throw ss.create("installation-not-found");return Y1(e)})}function Y1(t){return lx(t)?{fid:t.fid,registrationStatus:0}:t}function lx(t){return t.registrationStatus===1&&t.registrationTime+M1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux({appConfig:t,heartbeatServiceProvider:e},n){const r=cx(t,n),i=qN(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:U1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await q1(()=>fetch(r,a));if(u.ok){const c=await u.json();return z1(c)}else throw await $1("Generate Auth Token",u)}function cx(t,{fid:e}){return`${B1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(t,e=!1){let n;const r=await Zc(t.appConfig,s=>{if(!J1(s))throw ss.create("not-registered");const o=s.authToken;if(!e&&fx(o))return s;if(o.requestStatus===1)return n=hx(t,e),s;{if(!navigator.onLine)throw ss.create("app-offline");const a=mx(s);return n=dx(t,a),a}});return n?await n:r.authToken}async function hx(t,e){let n=await J_(t.appConfig);for(;n.authToken.requestStatus===1;)await W1(100),n=await J_(t.appConfig);const r=n.authToken;return r.requestStatus===0?vm(t,e):r}function J_(t){return Zc(t,e=>{if(!J1(e))throw ss.create("not-registered");const n=e.authToken;return gx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dx(t,e){try{const n=await ux(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await cc(t.appConfig,r),n}catch(n){if(j1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await X1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await cc(t.appConfig,r)}throw n}}function J1(t){return t!==void 0&&t.registrationStatus===2}function fx(t){return t.requestStatus===2&&!px(t)}function px(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+BN}function mx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gx(t){return t.requestStatus===1&&t.requestTime+M1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yx(t){const e=t,{installationEntry:n,registrationPromise:r}=await _m(e);return r?r.catch(console.error):vm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(t,e=!1){const n=t;return await vx(n),(await vm(n,e)).token}async function vx(t){const{registrationPromise:e}=await _m(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t){if(!t||!t.options)throw vd("App Configuration");if(!t.name)throw vd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw vd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function vd(t){return ss.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="installations",Ex="installations-internal",Tx=t=>{const e=t.getProvider("app").getImmediate(),n=wx(e),r=Pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ix=t=>{const e=t.getProvider("app").getImmediate(),n=Pi(e,Z1).getImmediate();return{getId:()=>yx(n),getToken:i=>_x(n,i)}};function Ax(){zn(new Pn(Z1,Tx,"PUBLIC")),zn(new Pn(Ex,Ix,"PRIVATE"))}Ax();Zt(V1,gm);Zt(V1,gm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="analytics",Sx="firebase_id",Rx="origin",Cx=60*1e3,Px="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Kc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new fs("analytics","Analytics",kx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(t){if(!t.startsWith(wm)){const e=fn.create("invalid-gtag-resource",{gtagURL:t});return en.warn(e.message),""}return t}function eT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Nx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function xx(t,e){const n=Nx("firebase-js-sdk-policy",{createScriptURL:bx}),r=document.createElement("script"),i=`${wm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Dx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Ox(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await eT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){en.error(a)}t("config",i,s)}async function Lx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await eT(n);for(const u of o){const c=a.find(f=>f.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){en.error(s)}}function Vx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await Lx(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await Ox(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){en.error(a)}}return i}function Mx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Vx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Ux(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=30,jx=1e3;class Bx{constructor(e={},n=jx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tT=new Bx;function zx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $x(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:zx(r)},s=Px.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Hx(t,e=tT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw fn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw fn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Gx;return setTimeout(async()=>{a.abort()},Cx),nT({appId:r,apiKey:i,measurementId:s},o,a,e)}async function nT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=tT){var s;const{appId:o,measurementId:a}=t;try{await qx(r,e)}catch(u){if(a)return en.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await $x(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!Wx(c)){if(i.deleteThrottleMetadata(o),a)return en.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?I_(n,i.intervalMillis,Fx):I_(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),en.debug(`Calling attemptFetch again in ${h} millis`),nT(t,f,r,i)}}function qx(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Wx(t){if(!(t instanceof kn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Gx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Kx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(){if(rm())try{await im()}catch(t){return en.warn(fn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return en.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Xx(t,e,n,r,i,s,o){var a;const u=Hx(t);u.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&en.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>en.error(g)),e.push(u);const c=Qx().then(g=>{if(g)return r.getId()}),[h,f]=await Promise.all([u,c]);Ux(s)||xx(s,h.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Rx]="firebase",d.update=!0,f!=null&&(d[Sx]=f),i("config",h.measurementId,d),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.app=e}_delete(){return delete ga[this.app.options.appId],Promise.resolve()}}let ga={},Z_=[];const ev={};let wd="dataLayer",Jx="gtag",tv,rT,nv=!1;function Zx(){const t=[];if(nm()&&t.push("This is a browser extension environment."),KE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=fn.create("invalid-analytics-context",{errorInfo:e});en.warn(n.message)}}function eD(t,e,n){Zx();const r=t.options.appId;if(!r)throw fn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)en.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(ga[r]!=null)throw fn.create("already-exists",{id:r});if(!nv){Dx(wd);const{wrappedGtag:s,gtagCore:o}=Mx(ga,Z_,ev,wd,Jx);rT=s,tv=o,nv=!0}return ga[r]=Xx(t,Z_,ev,e,tv,wd,n),new Yx(t)}function tD(t=ll()){t=Ie(t);const e=Pi(t,hc);return e.isInitialized()?e.getImmediate():nD(t)}function nD(t,e={}){const n=Pi(t,hc);if(n.isInitialized()){const i=n.getImmediate();if(pi(e,n.getOptions()))return i;throw fn.create("already-initialized")}return n.initialize({options:e})}async function rD(){if(nm()||!KE()||!rm())return!1;try{return await im()}catch{return!1}}function iD(t,e,n,r){t=Ie(t),Kx(rT,ga[t.app.options.appId],e,n,r).catch(i=>en.error(i))}const rv="@firebase/analytics",iv="0.10.17";function sD(){zn(new Pn(hc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return eD(r,i,n)},"PUBLIC")),zn(new Pn("analytics-internal",t,"PRIVATE")),Zt(rv,iv),Zt(rv,iv,"esm2017");function t(e){try{const n=e.getProvider(hc).getImmediate();return{logEvent:(r,i,s)=>iD(n,r,i,s)}}catch(n){throw fn.create("interop-component-reg-failed",{reason:n})}}}sD();var sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,iT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function y(){}y.prototype=m.prototype,T.D=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(w,A,P){for(var I=Array(arguments.length-2),V=2;V<arguments.length;V++)I[V-2]=arguments[V];return m.prototype[A].apply(w,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,y){y||(y=0);var w=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)w[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)w[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],A=T.g[2];var P=T.g[3],I=m+(P^y&(A^P))+w[0]+3614090360&4294967295;m=y+(I<<7&4294967295|I>>>25),I=P+(A^m&(y^A))+w[1]+3905402710&4294967295,P=m+(I<<12&4294967295|I>>>20),I=A+(y^P&(m^y))+w[2]+606105819&4294967295,A=P+(I<<17&4294967295|I>>>15),I=y+(m^A&(P^m))+w[3]+3250441966&4294967295,y=A+(I<<22&4294967295|I>>>10),I=m+(P^y&(A^P))+w[4]+4118548399&4294967295,m=y+(I<<7&4294967295|I>>>25),I=P+(A^m&(y^A))+w[5]+1200080426&4294967295,P=m+(I<<12&4294967295|I>>>20),I=A+(y^P&(m^y))+w[6]+2821735955&4294967295,A=P+(I<<17&4294967295|I>>>15),I=y+(m^A&(P^m))+w[7]+4249261313&4294967295,y=A+(I<<22&4294967295|I>>>10),I=m+(P^y&(A^P))+w[8]+1770035416&4294967295,m=y+(I<<7&4294967295|I>>>25),I=P+(A^m&(y^A))+w[9]+2336552879&4294967295,P=m+(I<<12&4294967295|I>>>20),I=A+(y^P&(m^y))+w[10]+4294925233&4294967295,A=P+(I<<17&4294967295|I>>>15),I=y+(m^A&(P^m))+w[11]+2304563134&4294967295,y=A+(I<<22&4294967295|I>>>10),I=m+(P^y&(A^P))+w[12]+1804603682&4294967295,m=y+(I<<7&4294967295|I>>>25),I=P+(A^m&(y^A))+w[13]+4254626195&4294967295,P=m+(I<<12&4294967295|I>>>20),I=A+(y^P&(m^y))+w[14]+2792965006&4294967295,A=P+(I<<17&4294967295|I>>>15),I=y+(m^A&(P^m))+w[15]+1236535329&4294967295,y=A+(I<<22&4294967295|I>>>10),I=m+(A^P&(y^A))+w[1]+4129170786&4294967295,m=y+(I<<5&4294967295|I>>>27),I=P+(y^A&(m^y))+w[6]+3225465664&4294967295,P=m+(I<<9&4294967295|I>>>23),I=A+(m^y&(P^m))+w[11]+643717713&4294967295,A=P+(I<<14&4294967295|I>>>18),I=y+(P^m&(A^P))+w[0]+3921069994&4294967295,y=A+(I<<20&4294967295|I>>>12),I=m+(A^P&(y^A))+w[5]+3593408605&4294967295,m=y+(I<<5&4294967295|I>>>27),I=P+(y^A&(m^y))+w[10]+38016083&4294967295,P=m+(I<<9&4294967295|I>>>23),I=A+(m^y&(P^m))+w[15]+3634488961&4294967295,A=P+(I<<14&4294967295|I>>>18),I=y+(P^m&(A^P))+w[4]+3889429448&4294967295,y=A+(I<<20&4294967295|I>>>12),I=m+(A^P&(y^A))+w[9]+568446438&4294967295,m=y+(I<<5&4294967295|I>>>27),I=P+(y^A&(m^y))+w[14]+3275163606&4294967295,P=m+(I<<9&4294967295|I>>>23),I=A+(m^y&(P^m))+w[3]+4107603335&4294967295,A=P+(I<<14&4294967295|I>>>18),I=y+(P^m&(A^P))+w[8]+1163531501&4294967295,y=A+(I<<20&4294967295|I>>>12),I=m+(A^P&(y^A))+w[13]+2850285829&4294967295,m=y+(I<<5&4294967295|I>>>27),I=P+(y^A&(m^y))+w[2]+4243563512&4294967295,P=m+(I<<9&4294967295|I>>>23),I=A+(m^y&(P^m))+w[7]+1735328473&4294967295,A=P+(I<<14&4294967295|I>>>18),I=y+(P^m&(A^P))+w[12]+2368359562&4294967295,y=A+(I<<20&4294967295|I>>>12),I=m+(y^A^P)+w[5]+4294588738&4294967295,m=y+(I<<4&4294967295|I>>>28),I=P+(m^y^A)+w[8]+2272392833&4294967295,P=m+(I<<11&4294967295|I>>>21),I=A+(P^m^y)+w[11]+1839030562&4294967295,A=P+(I<<16&4294967295|I>>>16),I=y+(A^P^m)+w[14]+4259657740&4294967295,y=A+(I<<23&4294967295|I>>>9),I=m+(y^A^P)+w[1]+2763975236&4294967295,m=y+(I<<4&4294967295|I>>>28),I=P+(m^y^A)+w[4]+1272893353&4294967295,P=m+(I<<11&4294967295|I>>>21),I=A+(P^m^y)+w[7]+4139469664&4294967295,A=P+(I<<16&4294967295|I>>>16),I=y+(A^P^m)+w[10]+3200236656&4294967295,y=A+(I<<23&4294967295|I>>>9),I=m+(y^A^P)+w[13]+681279174&4294967295,m=y+(I<<4&4294967295|I>>>28),I=P+(m^y^A)+w[0]+3936430074&4294967295,P=m+(I<<11&4294967295|I>>>21),I=A+(P^m^y)+w[3]+3572445317&4294967295,A=P+(I<<16&4294967295|I>>>16),I=y+(A^P^m)+w[6]+76029189&4294967295,y=A+(I<<23&4294967295|I>>>9),I=m+(y^A^P)+w[9]+3654602809&4294967295,m=y+(I<<4&4294967295|I>>>28),I=P+(m^y^A)+w[12]+3873151461&4294967295,P=m+(I<<11&4294967295|I>>>21),I=A+(P^m^y)+w[15]+530742520&4294967295,A=P+(I<<16&4294967295|I>>>16),I=y+(A^P^m)+w[2]+3299628645&4294967295,y=A+(I<<23&4294967295|I>>>9),I=m+(A^(y|~P))+w[0]+4096336452&4294967295,m=y+(I<<6&4294967295|I>>>26),I=P+(y^(m|~A))+w[7]+1126891415&4294967295,P=m+(I<<10&4294967295|I>>>22),I=A+(m^(P|~y))+w[14]+2878612391&4294967295,A=P+(I<<15&4294967295|I>>>17),I=y+(P^(A|~m))+w[5]+4237533241&4294967295,y=A+(I<<21&4294967295|I>>>11),I=m+(A^(y|~P))+w[12]+1700485571&4294967295,m=y+(I<<6&4294967295|I>>>26),I=P+(y^(m|~A))+w[3]+2399980690&4294967295,P=m+(I<<10&4294967295|I>>>22),I=A+(m^(P|~y))+w[10]+4293915773&4294967295,A=P+(I<<15&4294967295|I>>>17),I=y+(P^(A|~m))+w[1]+2240044497&4294967295,y=A+(I<<21&4294967295|I>>>11),I=m+(A^(y|~P))+w[8]+1873313359&4294967295,m=y+(I<<6&4294967295|I>>>26),I=P+(y^(m|~A))+w[15]+4264355552&4294967295,P=m+(I<<10&4294967295|I>>>22),I=A+(m^(P|~y))+w[6]+2734768916&4294967295,A=P+(I<<15&4294967295|I>>>17),I=y+(P^(A|~m))+w[13]+1309151649&4294967295,y=A+(I<<21&4294967295|I>>>11),I=m+(A^(y|~P))+w[4]+4149444226&4294967295,m=y+(I<<6&4294967295|I>>>26),I=P+(y^(m|~A))+w[11]+3174756917&4294967295,P=m+(I<<10&4294967295|I>>>22),I=A+(m^(P|~y))+w[2]+718787259&4294967295,A=P+(I<<15&4294967295|I>>>17),I=y+(P^(A|~m))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+P&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var y=m-this.blockSize,w=this.B,A=this.h,P=0;P<m;){if(A==0)for(;P<=y;)i(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<m;)if(w[A++]=T.charCodeAt(P++),A==this.blockSize){i(this,w),A=0;break}}else for(;P<m;)if(w[A++]=T[P++],A==this.blockSize){i(this,w),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var y=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=y&255,y/=256;for(this.u(T),T=Array(16),m=y=0;4>m;++m)for(var w=0;32>w;w+=8)T[y++]=this.g[m]>>>w&255;return T};function s(T,m){var y=a;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function o(T,m){this.h=m;for(var y=[],w=!0,A=T.length-1;0<=A;A--){var P=T[A]|0;w&&P==m||(y[A]=P,w=!1)}this.g=y}var a={};function u(T){return-128<=T&&128>T?s(T,function(m){return new o([m|0],0>m?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return b(c(-T));for(var m=[],y=1,w=0;T>=y;w++)m[w]=T/y|0,y*=4294967296;return new o(m,0)}function h(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return b(h(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=c(Math.pow(m,8)),w=f,A=0;A<T.length;A+=8){var P=Math.min(8,T.length-A),I=parseInt(T.substring(A,A+P),m);8>P?(P=c(Math.pow(m,P)),w=w.j(P).add(c(I))):(w=w.j(y),w=w.add(c(I)))}return w}var f=u(0),d=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-b(this).m();for(var T=0,m=1,y=0;y<this.g.length;y++){var w=this.i(y);T+=(0<=w?w:4294967296+w)*m,m*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(v(this))return"0";if(R(this))return"-"+b(this).toString(T);for(var m=c(Math.pow(T,6)),y=this,w="";;){var A=D(y,m).g;y=E(y,A.j(m));var P=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=A,v(y))return P+w;for(;6>P.length;)P="0"+P;w=P+w}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function v(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function R(T){return T.h==-1}t.l=function(T){return T=E(this,T),R(T)?-1:v(T)?0:1};function b(T){for(var m=T.g.length,y=[],w=0;w<m;w++)y[w]=~T.g[w];return new o(y,~T.h).add(d)}t.abs=function(){return R(this)?b(this):this},t.add=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],w=0,A=0;A<=m;A++){var P=w+(this.i(A)&65535)+(T.i(A)&65535),I=(P>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);w=I>>>16,P&=65535,I&=65535,y[A]=I<<16|P}return new o(y,y[y.length-1]&-2147483648?-1:0)};function E(T,m){return T.add(b(m))}t.j=function(T){if(v(this)||v(T))return f;if(R(this))return R(T)?b(this).j(b(T)):b(b(this).j(T));if(R(T))return b(this.j(b(T)));if(0>this.l(g)&&0>T.l(g))return c(this.m()*T.m());for(var m=this.g.length+T.g.length,y=[],w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<T.g.length;A++){var P=this.i(w)>>>16,I=this.i(w)&65535,V=T.i(A)>>>16,B=T.i(A)&65535;y[2*w+2*A]+=I*B,S(y,2*w+2*A),y[2*w+2*A+1]+=P*B,S(y,2*w+2*A+1),y[2*w+2*A+1]+=I*V,S(y,2*w+2*A+1),y[2*w+2*A+2]+=P*V,S(y,2*w+2*A+2)}for(w=0;w<m;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=m;w<2*m;w++)y[w]=0;return new o(y,0)};function S(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function C(T,m){this.g=T,this.h=m}function D(T,m){if(v(m))throw Error("division by zero");if(v(T))return new C(f,f);if(R(T))return m=D(b(T),m),new C(b(m.g),b(m.h));if(R(m))return m=D(T,b(m)),new C(b(m.g),m.h);if(30<T.g.length){if(R(T)||R(m))throw Error("slowDivide_ only works with positive integers.");for(var y=d,w=m;0>=w.l(T);)y=M(y),w=M(w);var A=x(y,1),P=x(w,1);for(w=x(w,2),y=x(y,2);!v(w);){var I=P.add(w);0>=I.l(T)&&(A=A.add(y),P=I),w=x(w,1),y=x(y,1)}return m=E(T,A.j(m)),new C(A,m)}for(A=f;0<=T.l(m);){for(y=Math.max(1,Math.floor(T.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),P=c(y),I=P.j(m);R(I)||0<I.l(T);)y-=w,P=c(y),I=P.j(m);v(P)&&(P=d),A=A.add(P),T=E(T,I)}return new C(A,T)}t.A=function(T){return D(this,T).h},t.and=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)&T.i(w);return new o(y,this.h&T.h)},t.or=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)|T.i(w);return new o(y,this.h|T.h)},t.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],w=0;w<m;w++)y[w]=this.i(w)^T.i(w);return new o(y,this.h^T.h)};function M(T){for(var m=T.g.length+1,y=[],w=0;w<m;w++)y[w]=T.i(w)<<1|T.i(w-1)>>>31;return new o(y,T.h)}function x(T,m){var y=m>>5;m%=32;for(var w=T.g.length-y,A=[],P=0;P<w;P++)A[P]=0<m?T.i(P+y)>>>m|T.i(P+y+1)<<32-m:T.i(P+y);return new o(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ui=o}).apply(typeof sv<"u"?sv:typeof self<"u"?self:typeof window<"u"?window:{});var tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sT,ta,oT,Au,Mf,aT,lT,uT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,p,_){return l==Array.prototype||l==Object.prototype||(l[p]=_.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof tu=="object"&&tu];for(var p=0;p<l.length;++p){var _=l[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=n(this);function i(l,p){if(p)e:{var _=r;l=l.split(".");for(var k=0;k<l.length-1;k++){var j=l[k];if(!(j in _))break e;_=_[j]}l=l[l.length-1],k=_[l],p=p(k),p!=k&&p!=null&&e(_,l,{configurable:!0,writable:!0,value:p})}}function s(l,p){l instanceof String&&(l+="");var _=0,k=!1,j={next:function(){if(!k&&_<l.length){var $=_++;return{value:p($,l[$]),done:!1}}return k=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}i("Array.prototype.values",function(l){return l||function(){return s(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var p=typeof l;return p=p!="object"?p:l?Array.isArray(l)?"array":p:"null",p=="array"||p=="object"&&typeof l.length=="number"}function c(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function h(l,p,_){return l.call.apply(l.bind,arguments)}function f(l,p,_){if(!l)throw Error();if(2<arguments.length){var k=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,k),l.apply(p,j)}}return function(){return l.apply(p,arguments)}}function d(l,p,_){return d=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,d.apply(null,arguments)}function g(l,p){var _=Array.prototype.slice.call(arguments,1);return function(){var k=_.slice();return k.push.apply(k,arguments),l.apply(this,k)}}function v(l,p){function _(){}_.prototype=p.prototype,l.aa=p.prototype,l.prototype=new _,l.prototype.constructor=l,l.Qb=function(k,j,$){for(var J=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)J[Re-2]=arguments[Re];return p.prototype[j].apply(k,J)}}function R(l){const p=l.length;if(0<p){const _=Array(p);for(let k=0;k<p;k++)_[k]=l[k];return _}return[]}function b(l,p){for(let _=1;_<arguments.length;_++){const k=arguments[_];if(u(k)){const j=l.length||0,$=k.length||0;l.length=j+$;for(let J=0;J<$;J++)l[j+J]=k[J]}else l.push(k)}}class E{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function S(l){return/^[\s\xa0]*$/.test(l)}function C(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var M=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function x(l,p,_){for(const k in l)p.call(_,l[k],k,l)}function T(l,p){for(const _ in l)p.call(void 0,l[_],_,l)}function m(l){const p={};for(const _ in l)p[_]=l[_];return p}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,p){let _,k;for(let j=1;j<arguments.length;j++){k=arguments[j];for(_ in k)l[_]=k[_];for(let $=0;$<y.length;$++)_=y[$],Object.prototype.hasOwnProperty.call(k,_)&&(l[_]=k[_])}}function A(l){var p=1;l=l.split(":");const _=[];for(;0<p&&l.length;)_.push(l.shift()),p--;return l.length&&_.push(l.join(":")),_}function P(l){a.setTimeout(()=>{throw l},0)}function I(){var l=U;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class V{constructor(){this.h=this.g=null}add(p,_){const k=B.get();k.set(p,_),this.h?this.h.next=k:this.g=k,this.h=k}}var B=new E(()=>new O,l=>l.reset());class O{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let N,F=!1,U=new V,z=()=>{const l=a.Promise.resolve(void 0);N=()=>{l.then(Z)}};var Z=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(_){P(_)}var p=B;p.j(l),100>p.h&&(p.h++,l.next=p.g,p.g=l)}F=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Y(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const _=()=>{};a.addEventListener("test",_,p),a.removeEventListener("test",_,p)}catch{}return l}();function H(l,p){if(Y.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var _=this.type=l.type,k=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget){if(M){e:{try{D(p.nodeName);var j=!0;break e}catch{}j=!1}j||(p=null)}}else _=="mouseover"?p=l.fromElement:_=="mouseout"&&(p=l.toElement);this.relatedTarget=p,k?(this.clientX=k.clientX!==void 0?k.clientX:k.pageX,this.clientY=k.clientY!==void 0?k.clientY:k.pageY,this.screenX=k.screenX||0,this.screenY=k.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ie[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&H.aa.h.call(this)}}v(H,Y);var ie={2:"touch",3:"pen",4:"mouse"};H.prototype.h=function(){H.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),we=0;function ye(l,p,_,k,j){this.listener=l,this.proxy=null,this.src=p,this.type=_,this.capture=!!k,this.ha=j,this.key=++we,this.da=this.fa=!1}function ve(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ce(l){this.src=l,this.g={},this.h=0}Ce.prototype.add=function(l,p,_,k,j){var $=l.toString();l=this.g[$],l||(l=this.g[$]=[],this.h++);var J=bn(l,p,k,j);return-1<J?(p=l[J],_||(p.fa=!1)):(p=new ye(p,this.src,$,!!k,j),p.fa=_,l.push(p)),p};function Fe(l,p){var _=p.type;if(_ in l.g){var k=l.g[_],j=Array.prototype.indexOf.call(k,p,void 0),$;($=0<=j)&&Array.prototype.splice.call(k,j,1),$&&(ve(p),l.g[_].length==0&&(delete l.g[_],l.h--))}}function bn(l,p,_,k){for(var j=0;j<l.length;++j){var $=l[j];if(!$.da&&$.listener==p&&$.capture==!!_&&$.ha==k)return j}return-1}var $t="closure_lm_"+(1e6*Math.random()|0),Pe={};function st(l,p,_,k,j){if(Array.isArray(p)){for(var $=0;$<p.length;$++)st(l,p[$],_,k,j);return null}return _=It(_),l&&l[fe]?l.K(p,_,c(k)?!!k.capture:!1,j):ke(l,p,_,!1,k,j)}function ke(l,p,_,k,j,$){if(!p)throw Error("Invalid event type");var J=c(j)?!!j.capture:!!j,Re=Me(l);if(Re||(l[$t]=Re=new Ce(l)),_=Re.add(p,_,k,J,$),_.proxy)return _;if(k=Se(),_.proxy=k,k.src=l,k.listener=_,l.addEventListener)Q||(j=J),j===void 0&&(j=!1),l.addEventListener(p.toString(),k,j);else if(l.attachEvent)l.attachEvent(je(p.toString()),k);else if(l.addListener&&l.removeListener)l.addListener(k);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Se(){function l(_){return p.call(l.src,l.listener,_)}const p=Lt;return l}function Ze(l,p,_,k,j){if(Array.isArray(p))for(var $=0;$<p.length;$++)Ze(l,p[$],_,k,j);else k=c(k)?!!k.capture:!!k,_=It(_),l&&l[fe]?(l=l.i,p=String(p).toString(),p in l.g&&($=l.g[p],_=bn($,_,k,j),-1<_&&(ve($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete l.g[p],l.h--)))):l&&(l=Me(l))&&(p=l.g[p.toString()],l=-1,p&&(l=bn(p,_,k,j)),(_=-1<l?p[l]:null)&&ot(_))}function ot(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[fe])Fe(p.i,l);else{var _=l.type,k=l.proxy;p.removeEventListener?p.removeEventListener(_,k,l.capture):p.detachEvent?p.detachEvent(je(_),k):p.addListener&&p.removeListener&&p.removeListener(k),(_=Me(p))?(Fe(_,l),_.h==0&&(_.src=null,p[$t]=null)):ve(l)}}}function je(l){return l in Pe?Pe[l]:Pe[l]="on"+l}function Lt(l,p){if(l.da)l=!0;else{p=new H(p,this);var _=l.listener,k=l.ha||l.src;l.fa&&ot(l),l=_.call(k,p)}return l}function Me(l){return l=l[$t],l instanceof Ce?l:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(l){return typeof l=="function"?l:(l[Ee]||(l[Ee]=function(p){return l.handleEvent(p)}),l[Ee])}function Ne(){K.call(this),this.i=new Ce(this),this.M=this,this.F=null}v(Ne,K),Ne.prototype[fe]=!0,Ne.prototype.removeEventListener=function(l,p,_,k){Ze(this,l,p,_,k)};function et(l,p){var _,k=l.F;if(k)for(_=[];k;k=k.F)_.push(k);if(l=l.M,k=p.type||p,typeof p=="string")p=new Y(p,l);else if(p instanceof Y)p.target=p.target||l;else{var j=p;p=new Y(k,l),w(p,j)}if(j=!0,_)for(var $=_.length-1;0<=$;$--){var J=p.g=_[$];j=Qe(J,k,!0,p)&&j}if(J=p.g=l,j=Qe(J,k,!0,p)&&j,j=Qe(J,k,!1,p)&&j,_)for($=0;$<_.length;$++)J=p.g=_[$],j=Qe(J,k,!1,p)&&j}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var l=this.i,p;for(p in l.g){for(var _=l.g[p],k=0;k<_.length;k++)ve(_[k]);delete l.g[p],l.h--}}this.F=null},Ne.prototype.K=function(l,p,_,k){return this.i.add(String(l),p,!1,_,k)},Ne.prototype.L=function(l,p,_,k){return this.i.add(String(l),p,!0,_,k)};function Qe(l,p,_,k){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();for(var j=!0,$=0;$<p.length;++$){var J=p[$];if(J&&!J.da&&J.capture==_){var Re=J.listener,gt=J.ha||J.src;J.fa&&Fe(l.i,J),j=Re.call(gt,k)!==!1&&j}}return j&&!k.defaultPrevented}function qn(l,p,_){if(typeof l=="function")_&&(l=d(l,_));else if(l&&typeof l.handleEvent=="function")l=d(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(l,p||0)}function ct(l){l.g=qn(()=>{l.g=null,l.i&&(l.i=!1,ct(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class tn extends K{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ct(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(l){K.call(this),this.h=l,this.g={}}v(ht,K);var _n=[];function nn(l){x(l.g,function(p,_){this.g.hasOwnProperty(_)&&ot(p)},l),l.g={}}ht.prototype.N=function(){ht.aa.N.call(this),nn(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nn=a.JSON.stringify,Po=a.JSON.parse,Sh=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function xi(){}xi.prototype.h=null;function ko(l){return l.h||(l.h=l.i())}function Nr(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vn(){Y.call(this,"d")}v(vn,Y);function wn(){Y.call(this,"c")}v(wn,Y);var Ht={},xr=null;function Oi(){return xr=xr||new Ne}Ht.La="serverreachability";function Wn(l){Y.call(this,Ht.La,l)}v(Wn,Y);function rn(l){const p=Oi();et(p,new Wn(p))}Ht.STAT_EVENT="statevent";function pg(l,p){Y.call(this,Ht.STAT_EVENT,l),this.stat=p}v(pg,Y);function Vt(l){const p=Oi();et(p,new pg(p,l))}Ht.Ma="timingevent";function mg(l,p){Y.call(this,Ht.Ma,l),this.size=p}v(mg,Y);function bo(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},p)}function No(){this.g=!0}No.prototype.xa=function(){this.g=!1};function LA(l,p,_,k,j,$){l.info(function(){if(l.g)if($)for(var J="",Re=$.split("&"),gt=0;gt<Re.length;gt++){var _e=Re[gt].split("=");if(1<_e.length){var At=_e[0];_e=_e[1];var St=At.split("_");J=2<=St.length&&St[1]=="type"?J+(At+"="+_e+"&"):J+(At+"=redacted&")}}else J=null;else J=$;return"XMLHTTP REQ ("+k+") [attempt "+j+"]: "+p+`
`+_+`
`+J})}function VA(l,p,_,k,j,$,J){l.info(function(){return"XMLHTTP RESP ("+k+") [ attempt "+j+"]: "+p+`
`+_+`
`+$+" "+J})}function ws(l,p,_,k){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+UA(l,_)+(k?" "+k:"")})}function MA(l,p){l.info(function(){return"TIMEOUT: "+p})}No.prototype.info=function(){};function UA(l,p){if(!l.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(l=0;l<_.length;l++)if(Array.isArray(_[l])){var k=_[l];if(!(2>k.length)){var j=k[1];if(Array.isArray(j)&&!(1>j.length)){var $=j[0];if($!="noop"&&$!="stop"&&$!="close")for(var J=1;J<j.length;J++)j[J]=""}}}}return Nn(_)}catch{return p}}var Il={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rh;function Al(){}v(Al,xi),Al.prototype.g=function(){return new XMLHttpRequest},Al.prototype.i=function(){return{}},Rh=new Al;function Dr(l,p,_,k){this.j=l,this.i=p,this.l=_,this.R=k||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yg}function yg(){this.i=null,this.g="",this.h=!1}var _g={},Ch={};function Ph(l,p,_){l.L=1,l.v=Pl(ar(p)),l.m=_,l.P=!0,vg(l,null)}function vg(l,p){l.F=Date.now(),Sl(l),l.A=ar(l.v);var _=l.A,k=l.R;Array.isArray(k)||(k=[String(k)]),Dg(_.i,"t",k),l.C=0,_=l.j.J,l.h=new yg,l.g=Yg(l.j,_?p:null,!l.m),0<l.O&&(l.M=new tn(d(l.Y,l,l.g),l.O)),p=l.U,_=l.g,k=l.ca;var j="readystatechange";Array.isArray(j)||(j&&(_n[0]=j.toString()),j=_n);for(var $=0;$<j.length;$++){var J=st(_,j[$],k||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=l.H?m(l.H):{},l.m?(l.u||(l.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,p)):(l.u="GET",l.g.ea(l.A,l.u,null,p)),rn(),LA(l.i,l.u,l.A,l.l,l.R,l.m)}Dr.prototype.ca=function(l){l=l.target;const p=this.M;p&&lr(l)==3?p.j():this.Y(l)},Dr.prototype.Y=function(l){try{if(l==this.g)e:{const St=lr(this.g);var p=this.g.Ba();const Is=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||jg(this.g)))){this.J||St!=4||p==7||(p==8||0>=Is?rn(3):rn(2)),kh(this);var _=this.g.Z();this.X=_;t:if(wg(this)){var k=jg(this.g);l="";var j=k.length,$=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Li(this),xo(this);var J="";break t}this.h.i=new a.TextDecoder}for(p=0;p<j;p++)this.h.h=!0,l+=this.h.i.decode(k[p],{stream:!($&&p==j-1)});k.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=_==200,VA(this.i,this.u,this.A,this.l,this.R,St,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,gt=this.g;if((Re=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(Re)){var _e=Re;break t}}_e=null}if(_=_e)ws(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bh(this,_);else{this.o=!1,this.s=3,Vt(12),Li(this),xo(this);break e}}if(this.P){_=!0;let xn;for(;!this.J&&this.C<J.length;)if(xn=FA(this,J),xn==Ch){St==4&&(this.s=4,Vt(14),_=!1),ws(this.i,this.l,null,"[Incomplete Response]");break}else if(xn==_g){this.s=4,Vt(15),ws(this.i,this.l,J,"[Invalid Chunk]"),_=!1;break}else ws(this.i,this.l,xn,null),bh(this,xn);if(wg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||J.length!=0||this.h.h||(this.s=1,Vt(16),_=!1),this.o=this.o&&_,!_)ws(this.i,this.l,J,"[Invalid Chunked Response]"),Li(this),xo(this);else if(0<J.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Vh(At),At.M=!0,Vt(11))}}else ws(this.i,this.l,J,null),bh(this,J);St==4&&Li(this),this.o&&!this.J&&(St==4?Gg(this.j,this):(this.o=!1,Sl(this)))}else nS(this.g),_==400&&0<J.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),Li(this),xo(this)}}}catch{}finally{}};function wg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function FA(l,p){var _=l.C,k=p.indexOf(`
`,_);return k==-1?Ch:(_=Number(p.substring(_,k)),isNaN(_)?_g:(k+=1,k+_>p.length?Ch:(p=p.slice(k,k+_),l.C=k+_,p)))}Dr.prototype.cancel=function(){this.J=!0,Li(this)};function Sl(l){l.S=Date.now()+l.I,Eg(l,l.I)}function Eg(l,p){if(l.B!=null)throw Error("WatchDog timer not null");l.B=bo(d(l.ba,l),p)}function kh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Dr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(MA(this.i,this.A),this.L!=2&&(rn(),Vt(17)),Li(this),this.s=2,xo(this)):Eg(this,this.S-l)};function xo(l){l.j.G==0||l.J||Gg(l.j,l)}function Li(l){kh(l);var p=l.M;p&&typeof p.ma=="function"&&p.ma(),l.M=null,nn(l.U),l.g&&(p=l.g,l.g=null,p.abort(),p.ma())}function bh(l,p){try{var _=l.j;if(_.G!=0&&(_.g==l||Nh(_.h,l))){if(!l.K&&Nh(_.h,l)&&_.G==3){try{var k=_.Da.g.parse(p)}catch{k=null}if(Array.isArray(k)&&k.length==3){var j=k;if(j[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<l.F)Ol(_),xl(_);else break e;Lh(_),Vt(18)}}else _.za=j[1],0<_.za-_.T&&37500>j[2]&&_.F&&_.v==0&&!_.C&&(_.C=bo(d(_.Za,_),6e3));if(1>=Ag(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Mi(_,11)}else if((l.K||_.g==l)&&Ol(_),!S(p))for(j=_.Da.g.parse(p),p=0;p<j.length;p++){let _e=j[p];if(_.T=_e[0],_e=_e[1],_.G==2)if(_e[0]=="c"){_.K=_e[1],_.ia=_e[2];const At=_e[3];At!=null&&(_.la=At,_.j.info("VER="+_.la));const St=_e[4];St!=null&&(_.Aa=St,_.j.info("SVER="+_.Aa));const Is=_e[5];Is!=null&&typeof Is=="number"&&0<Is&&(k=1.5*Is,_.L=k,_.j.info("backChannelRequestTimeoutMs_="+k)),k=_;const xn=l.g;if(xn){const Vl=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vl){var $=k.h;$.g||Vl.indexOf("spdy")==-1&&Vl.indexOf("quic")==-1&&Vl.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(xh($,$.h),$.h=null))}if(k.D){const Mh=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Mh&&(k.ya=Mh,xe(k.I,k.D,Mh))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-l.F,_.j.info("Handshake RTT: "+_.R+"ms")),k=_;var J=l;if(k.qa=Xg(k,k.J?k.ia:null,k.W),J.K){Sg(k.h,J);var Re=J,gt=k.L;gt&&(Re.I=gt),Re.B&&(kh(Re),Sl(Re)),k.g=J}else qg(k);0<_.i.length&&Dl(_)}else _e[0]!="stop"&&_e[0]!="close"||Mi(_,7);else _.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Mi(_,7):Oh(_):_e[0]!="noop"&&_.l&&_.l.ta(_e),_.v=0)}}rn(4)}catch{}}var jA=class{constructor(l,p){this.g=l,this.map=p}};function Tg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ig(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ag(l){return l.h?1:l.g?l.g.size:0}function Nh(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function xh(l,p){l.g?l.g.add(p):l.h=p}function Sg(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Tg.prototype.cancel=function(){if(this.i=Rg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Rg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const _ of l.g.values())p=p.concat(_.D);return p}return R(l.i)}function BA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var p=[],_=l.length,k=0;k<_;k++)p.push(l[k]);return p}p=[],_=0;for(k in l)p[_++]=l[k];return p}function zA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var p=[];l=l.length;for(var _=0;_<l;_++)p.push(_);return p}p=[],_=0;for(const k in l)p[_++]=k;return p}}}function Cg(l,p){if(l.forEach&&typeof l.forEach=="function")l.forEach(p,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,p,void 0);else for(var _=zA(l),k=BA(l),j=k.length,$=0;$<j;$++)p.call(void 0,k[$],_&&_[$],l)}var Pg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $A(l,p){if(l){l=l.split("&");for(var _=0;_<l.length;_++){var k=l[_].indexOf("="),j=null;if(0<=k){var $=l[_].substring(0,k);j=l[_].substring(k+1)}else $=l[_];p($,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Vi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Vi){this.h=l.h,Rl(this,l.j),this.o=l.o,this.g=l.g,Cl(this,l.s),this.l=l.l;var p=l.i,_=new Lo;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),kg(this,_),this.m=l.m}else l&&(p=String(l).match(Pg))?(this.h=!1,Rl(this,p[1]||"",!0),this.o=Do(p[2]||""),this.g=Do(p[3]||"",!0),Cl(this,p[4]),this.l=Do(p[5]||"",!0),kg(this,p[6]||"",!0),this.m=Do(p[7]||"")):(this.h=!1,this.i=new Lo(null,this.h))}Vi.prototype.toString=function(){var l=[],p=this.j;p&&l.push(Oo(p,bg,!0),":");var _=this.g;return(_||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Oo(p,bg,!0),"@"),l.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&l.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&l.push("/"),l.push(Oo(_,_.charAt(0)=="/"?WA:qA,!0))),(_=this.i.toString())&&l.push("?",_),(_=this.m)&&l.push("#",Oo(_,KA)),l.join("")};function ar(l){return new Vi(l)}function Rl(l,p,_){l.j=_?Do(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Cl(l,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);l.s=p}else l.s=null}function kg(l,p,_){p instanceof Lo?(l.i=p,QA(l.i,l.h)):(_||(p=Oo(p,GA)),l.i=new Lo(p,l.h))}function xe(l,p,_){l.i.set(p,_)}function Pl(l){return xe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Do(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Oo(l,p,_){return typeof l=="string"?(l=encodeURI(l).replace(p,HA),_&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function HA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var bg=/[#\/\?@]/g,qA=/[#\?:]/g,WA=/[#\?]/g,GA=/[#\?@]/g,KA=/#/g;function Lo(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Or(l){l.g||(l.g=new Map,l.h=0,l.i&&$A(l.i,function(p,_){l.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}t=Lo.prototype,t.add=function(l,p){Or(this),this.i=null,l=Es(this,l);var _=this.g.get(l);return _||this.g.set(l,_=[]),_.push(p),this.h+=1,this};function Ng(l,p){Or(l),p=Es(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function xg(l,p){return Or(l),p=Es(l,p),l.g.has(p)}t.forEach=function(l,p){Or(this),this.g.forEach(function(_,k){_.forEach(function(j){l.call(p,j,k,this)},this)},this)},t.na=function(){Or(this);const l=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let k=0;k<p.length;k++){const j=l[k];for(let $=0;$<j.length;$++)_.push(p[k])}return _},t.V=function(l){Or(this);let p=[];if(typeof l=="string")xg(this,l)&&(p=p.concat(this.g.get(Es(this,l))));else{l=Array.from(this.g.values());for(let _=0;_<l.length;_++)p=p.concat(l[_])}return p},t.set=function(l,p){return Or(this),this.i=null,l=Es(this,l),xg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},t.get=function(l,p){return l?(l=this.V(l),0<l.length?String(l[0]):p):p};function Dg(l,p,_){Ng(l,p),0<_.length&&(l.i=null,l.g.set(Es(l,p),R(_)),l.h+=_.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var k=p[_];const $=encodeURIComponent(String(k)),J=this.V(k);for(k=0;k<J.length;k++){var j=$;J[k]!==""&&(j+="="+encodeURIComponent(String(J[k]))),l.push(j)}}return this.i=l.join("&")};function Es(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function QA(l,p){p&&!l.j&&(Or(l),l.i=null,l.g.forEach(function(_,k){var j=k.toLowerCase();k!=j&&(Ng(this,k),Dg(this,j,_))},l)),l.j=p}function XA(l,p){const _=new No;if(a.Image){const k=new Image;k.onload=g(Lr,_,"TestLoadImage: loaded",!0,p,k),k.onerror=g(Lr,_,"TestLoadImage: error",!1,p,k),k.onabort=g(Lr,_,"TestLoadImage: abort",!1,p,k),k.ontimeout=g(Lr,_,"TestLoadImage: timeout",!1,p,k),a.setTimeout(function(){k.ontimeout&&k.ontimeout()},1e4),k.src=l}else p(!1)}function YA(l,p){const _=new No,k=new AbortController,j=setTimeout(()=>{k.abort(),Lr(_,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:k.signal}).then($=>{clearTimeout(j),$.ok?Lr(_,"TestPingServer: ok",!0,p):Lr(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(j),Lr(_,"TestPingServer: error",!1,p)})}function Lr(l,p,_,k,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),k(_)}catch{}}function JA(){this.g=new Sh}function ZA(l,p,_){const k=_||"";try{Cg(l,function(j,$){let J=j;c(j)&&(J=Nn(j)),p.push(k+$+"="+encodeURIComponent(J))})}catch(j){throw p.push(k+"type="+encodeURIComponent("_badmap")),j}}function kl(l){this.l=l.Ub||null,this.j=l.eb||!1}v(kl,xi),kl.prototype.g=function(){return new bl(this.l,this.j)},kl.prototype.i=function(l){return function(){return l}}({});function bl(l,p){Ne.call(this),this.D=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(bl,Ne),t=bl.prototype,t.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=p,this.readyState=1,Mo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(p.body=l),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Mo(this)),this.g&&(this.readyState=3,Mo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Og(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Og(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Vo(this):Mo(this),this.readyState==3&&Og(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Vo(this))},t.Qa=function(l){this.g&&(this.response=l,Vo(this))},t.ga=function(){this.g&&Vo(this)};function Vo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Mo(l)}t.setRequestHeader=function(l,p){this.u.append(l,p)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,l.push(_[0]+": "+_[1]),_=p.next();return l.join(`\r
`)};function Mo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(bl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Lg(l){let p="";return x(l,function(_,k){p+=k,p+=":",p+=_,p+=`\r
`}),p}function Dh(l,p,_){e:{for(k in _){var k=!1;break e}k=!0}k||(_=Lg(_),typeof l=="string"?_!=null&&encodeURIComponent(String(_)):xe(l,p,_))}function Ge(l){Ne.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(Ge,Ne);var eS=/^https?$/i,tS=["POST","PUT"];t=Ge.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,p,_,k){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rh.g(),this.v=this.o?ko(this.o):ko(Rh),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch($){Vg(this,$);return}if(l=_||"",_=new Map(this.headers),k)if(Object.getPrototypeOf(k)===Object.prototype)for(var j in k)_.set(j,k[j]);else if(typeof k.keys=="function"&&typeof k.get=="function")for(const $ of k.keys())_.set($,k.get($));else throw Error("Unknown input type for opt_headers: "+String(k));k=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),j=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tS,p,void 0))||k||j||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,J]of _)this.g.setRequestHeader($,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fg(this),this.u=!0,this.g.send(l),this.u=!1}catch($){Vg(this,$)}};function Vg(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.m=5,Mg(l),Nl(l)}function Mg(l){l.A||(l.A=!0,et(l,"complete"),et(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,et(this,"complete"),et(this,"abort"),Nl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nl(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ug(this):this.bb())},t.bb=function(){Ug(this)};function Ug(l){if(l.h&&typeof o<"u"&&(!l.v[1]||lr(l)!=4||l.Z()!=2)){if(l.u&&lr(l)==4)qn(l.Ea,0,l);else if(et(l,"readystatechange"),lr(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var k;if(k=J===0){var j=String(l.D).match(Pg)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),k=!eS.test(j?j.toLowerCase():"")}_=k}if(_)et(l,"complete"),et(l,"success");else{l.m=6;try{var $=2<lr(l)?l.g.statusText:""}catch{$=""}l.l=$+" ["+l.Z()+"]",Mg(l)}}finally{Nl(l)}}}}function Nl(l,p){if(l.g){Fg(l);const _=l.g,k=l.v[0]?()=>{}:null;l.g=null,l.v=null,p||et(l,"ready");try{_.onreadystatechange=k}catch{}}}function Fg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function lr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),Po(p)}};function jg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function nS(l){const p={};l=(l.g&&2<=lr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let k=0;k<l.length;k++){if(S(l[k]))continue;var _=A(l[k]);const j=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=p[j]||[];p[j]=$,$.push(_)}T(p,function(k){return k.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Uo(l,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[l]||p}function Bg(l){this.Aa=0,this.i=[],this.j=new No,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Uo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Uo("baseRetryDelayMs",5e3,l),this.cb=Uo("retryDelaySeedMs",1e4,l),this.Wa=Uo("forwardChannelMaxRetries",2,l),this.wa=Uo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Tg(l&&l.concurrentRequestLimit),this.Da=new JA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bg.prototype,t.la=8,t.G=1,t.connect=function(l,p,_,k){Vt(0),this.W=l,this.H=p||{},_&&k!==void 0&&(this.H.OSID=_,this.H.OAID=k),this.F=this.X,this.I=Xg(this,null,this.W),Dl(this)};function Oh(l){if(zg(l),l.G==3){var p=l.U++,_=ar(l.I);if(xe(_,"SID",l.K),xe(_,"RID",p),xe(_,"TYPE","terminate"),Fo(l,_),p=new Dr(l,l.j,p),p.L=2,p.v=Pl(ar(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=p.v,_=!0),_||(p.g=Yg(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Sl(p)}Qg(l)}function xl(l){l.g&&(Vh(l),l.g.cancel(),l.g=null)}function zg(l){xl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ol(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Dl(l){if(!Ig(l.h)&&!l.s){l.s=!0;var p=l.Ga;N||z(),F||(N(),F=!0),U.add(p,l),l.B=0}}function rS(l,p){return Ag(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=p.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=bo(d(l.Ga,l,p),Kg(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const j=new Dr(this,this.j,l);let $=this.o;if(this.S&&($?($=m($),w($,this.S)):$=this.S),this.m!==null||this.O||(j.H=$,$=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var k=this.i[_];if("__data__"in k.map&&(k=k.map.__data__,typeof k=="string")){k=k.length;break t}k=void 0}if(k===void 0)break;if(p+=k,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=Hg(this,j,p),_=ar(this.I),xe(_,"RID",l),xe(_,"CVER",22),this.D&&xe(_,"X-HTTP-Session-Id",this.D),Fo(this,_),$&&(this.O?p="headers="+encodeURIComponent(String(Lg($)))+"&"+p:this.m&&Dh(_,this.m,$)),xh(this.h,j),this.Ua&&xe(_,"TYPE","init"),this.P?(xe(_,"$req",p),xe(_,"SID","null"),j.T=!0,Ph(j,_,null)):Ph(j,_,p),this.G=2}}else this.G==3&&(l?$g(this,l):this.i.length==0||Ig(this.h)||$g(this))};function $g(l,p){var _;p?_=p.l:_=l.U++;const k=ar(l.I);xe(k,"SID",l.K),xe(k,"RID",_),xe(k,"AID",l.T),Fo(l,k),l.m&&l.o&&Dh(k,l.m,l.o),_=new Dr(l,l.j,_,l.B+1),l.m===null&&(_.H=l.o),p&&(l.i=p.D.concat(l.i)),p=Hg(l,_,1e3),_.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),xh(l.h,_),Ph(_,k,p)}function Fo(l,p){l.H&&x(l.H,function(_,k){xe(p,k,_)}),l.l&&Cg({},function(_,k){xe(p,k,_)})}function Hg(l,p,_){_=Math.min(l.i.length,_);var k=l.l?d(l.l.Na,l.l,l):null;e:{var j=l.i;let $=-1;for(;;){const J=["count="+_];$==-1?0<_?($=j[0].g,J.push("ofs="+$)):$=0:J.push("ofs="+$);let Re=!0;for(let gt=0;gt<_;gt++){let _e=j[gt].g;const At=j[gt].map;if(_e-=$,0>_e)$=Math.max(0,j[gt].g-100),Re=!1;else try{ZA(At,J,"req"+_e+"_")}catch{k&&k(At)}}if(Re){k=J.join("&");break e}}}return l=l.i.splice(0,_),p.D=l,k}function qg(l){if(!l.g&&!l.u){l.Y=1;var p=l.Fa;N||z(),F||(N(),F=!0),U.add(p,l),l.v=0}}function Lh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=bo(d(l.Fa,l),Kg(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Wg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=bo(d(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),xl(this),Wg(this))};function Vh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Wg(l){l.g=new Dr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var p=ar(l.qa);xe(p,"RID","rpc"),xe(p,"SID",l.K),xe(p,"AID",l.T),xe(p,"CI",l.F?"0":"1"),!l.F&&l.ja&&xe(p,"TO",l.ja),xe(p,"TYPE","xmlhttp"),Fo(l,p),l.m&&l.o&&Dh(p,l.m,l.o),l.L&&(l.g.I=l.L);var _=l.g;l=l.ia,_.L=1,_.v=Pl(ar(p)),_.m=null,_.P=!0,vg(_,l)}t.Za=function(){this.C!=null&&(this.C=null,xl(this),Lh(this),Vt(19))};function Ol(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Gg(l,p){var _=null;if(l.g==p){Ol(l),Vh(l),l.g=null;var k=2}else if(Nh(l.h,p))_=p.D,Sg(l.h,p),k=1;else return;if(l.G!=0){if(p.o)if(k==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var j=l.B;k=Oi(),et(k,new mg(k,_)),Dl(l)}else qg(l);else if(j=p.s,j==3||j==0&&0<p.X||!(k==1&&rS(l,p)||k==2&&Lh(l)))switch(_&&0<_.length&&(p=l.h,p.i=p.i.concat(_)),j){case 1:Mi(l,5);break;case 4:Mi(l,10);break;case 3:Mi(l,6);break;default:Mi(l,2)}}}function Kg(l,p){let _=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(_*=2),_*p}function Mi(l,p){if(l.j.info("Error code "+p),p==2){var _=d(l.fb,l),k=l.Xa;const j=!k;k=new Vi(k||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Rl(k,"https"),Pl(k),j?XA(k.toString(),_):YA(k.toString(),_)}else Vt(2);l.G=0,l.l&&l.l.sa(p),Qg(l),zg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Qg(l){if(l.G=0,l.ka=[],l.l){const p=Rg(l.h);(p.length!=0||l.i.length!=0)&&(b(l.ka,p),b(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function Xg(l,p,_){var k=_ instanceof Vi?ar(_):new Vi(_);if(k.g!="")p&&(k.g=p+"."+k.g),Cl(k,k.s);else{var j=a.location;k=j.protocol,p=p?p+"."+j.hostname:j.hostname,j=+j.port;var $=new Vi(null);k&&Rl($,k),p&&($.g=p),j&&Cl($,j),_&&($.l=_),k=$}return _=l.D,p=l.ya,_&&p&&xe(k,_,p),xe(k,"VER",l.la),Fo(l,k),k}function Yg(l,p,_){if(p&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Ca&&!l.pa?new Ge(new kl({eb:_})):new Ge(l.pa),p.Ha(l.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jg(){}t=Jg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ll(){}Ll.prototype.g=function(l,p){return new sn(l,p)};function sn(l,p){Ne.call(this),this.g=new Bg(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(l?l["X-WebChannel-Client-Profile"]=p.va:l={"X-WebChannel-Client-Profile":p.va}),this.g.S=l,(l=p&&p.Sb)&&!S(l)&&(this.g.m=l),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.D=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Ts(this)}v(sn,Ne),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){Oh(this.g)},sn.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var _={};_.__data__=l,l=_}else this.u&&(_={},_.__data__=Nn(l),l=_);p.i.push(new jA(p.Ya++,l)),p.G==3&&Dl(p)},sn.prototype.N=function(){this.g.l=null,delete this.j,Oh(this.g),delete this.g,sn.aa.N.call(this)};function Zg(l){vn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const _ in p){l=_;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}v(Zg,vn);function ey(){wn.call(this),this.status=1}v(ey,wn);function Ts(l){this.g=l}v(Ts,Jg),Ts.prototype.ua=function(){et(this.g,"a")},Ts.prototype.ta=function(l){et(this.g,new Zg(l))},Ts.prototype.sa=function(l){et(this.g,new ey)},Ts.prototype.ra=function(){et(this.g,"b")},Ll.prototype.createWebChannel=Ll.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,uT=function(){return new Ll},lT=function(){return Oi()},aT=Ht,Mf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Il.NO_ERROR=0,Il.TIMEOUT=8,Il.HTTP_ERROR=6,Au=Il,gg.COMPLETE="complete",oT=gg,Nr.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,ta=Nr,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,sT=Ge}).apply(typeof tu<"u"?tu:typeof self<"u"?self:typeof window<"u"?window:{});const ov="@firebase/firestore",av="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new Kc("@firebase/firestore");function Rs(){return as.logLevel}function te(t,...e){if(as.logLevel<=he.DEBUG){const n=e.map(Em);as.debug(`Firestore (${Eo}): ${t}`,...n)}}function Sr(t,...e){if(as.logLevel<=he.ERROR){const n=e.map(Em);as.error(`Firestore (${Eo}): ${t}`,...n)}}function mi(t,...e){if(as.logLevel<=he.WARN){const n=e.map(Em);as.warn(`Firestore (${Eo}): ${t}`,...n)}}function Em(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,cT(t,r,n)}function cT(t,e,n){let r=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Sr(r),new Error(r)}function me(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||cT(e,i,r)}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class aD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lD{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new hT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class uD{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cD{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new uD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,an(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){me(this.o===void 0,3512);const r=s=>{s.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new lv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new lv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=dD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Uf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return ue(r,i);{const s=dT(),o=fD(s.encode(uv(t,n)),s.encode(uv(e,n)));return o!==0?o:ue(r,i)}}n+=r>65535?2:1}return ue(t.length,e.length)}function uv(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function fD(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ue(t[n],e[n]);return ue(t.length,e.length)}function co(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="__name__";class Qn{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Qn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ue(e.length,n.length)}static compareSegments(e,n){const r=Qn.isNumericId(e),i=Qn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Qn.extractNumericId(e).compare(Qn.extractNumericId(n)):Uf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}}class Ae extends Qn{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const pD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Qn{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return pD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cv}static keyField(){return new vt([cv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ee(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ee(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ee(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ee(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ae.fromString(e))}static fromName(e){return new re(Ae.fromString(e).popFirst(5))}static empty(){return new re(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t,e,n){if(!n)throw new ee(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mD(t,e,n,r){if(e===!0&&r===!0)throw new ee(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hv(t){if(!re.isDocumentKey(t))throw new ee(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dv(t){if(re.isDocumentKey(t))throw new ee(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function eh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eh(t);throw new ee(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){const n={typeString:t};return e&&(n.value=e),n}function fl(t,e){if(!pT(t))throw new ee(q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new ee(q.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=-62135596800,pv=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*pv);return new Oe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fv)throw new ee(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pv}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fl(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:it("string",Oe._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Oe(0,0))}static max(){return new oe(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=-1;function gD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new gi(i,re.empty(),e)}function yD(t){return new gi(t.readTime,t.key,qa)}class gi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gi(oe.min(),re.empty(),qa)}static max(){return new gi(oe.max(),re.empty(),qa)}}function _D(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==vD)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new G((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):G.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):G.reject(n)}static resolve(e){return new G((n,r)=>{n(e)})}static reject(e){return new G((n,r)=>{r(e)})}static waitFor(e){return new G((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=G.resolve(!1);for(const r of e)n=n.next(i=>i?G.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new G((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new G((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ED(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Io(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}th.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=-1;function pl(t){return t==null}function dc(t){return t===0&&1/t==-1/0}function TD(t){return typeof t=="number"&&Number.isInteger(t)&&!dc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="";function ID(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=mv(e)),e=AD(t.get(n),e);return mv(e)}function AD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case mT:n+="";break;default:n+=s}}return n}function mv(t){return t+mT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nu(this.root,e,this.comparator,!0)}}class nu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=s??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new _t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yv(this.data.getIterator())}getIteratorFrom(e){return new yv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class yv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new cn([])}unionWith(e){let n=new ut(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yT("Invalid base64 string: "+s):s}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const SD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(t){if(me(!!t,39018),typeof t=="string"){let e=0;const n=SD.exec(t);if(me(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _i(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="server_timestamp",vT="__type__",wT="__previous_value__",ET="__local_write_time__";function Am(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[vT])===null||n===void 0?void 0:n.stringValue)===_T}function nh(t){const e=t.mapValue.fields[wT];return Am(e)?nh(e):e}function Wa(t){const e=yi(t.mapValue.fields[ET].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n,r,i,s,o,a,u,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=h}}const fc="(default)";class Ga{constructor(e,n){this.projectId=e,this.database=n||fc}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database===fc}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="__type__",CD="__max__",ru={mapValue:{}},IT="__vector__",pc="value";function vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Am(t)?4:kD(t)?9007199254740991:PD(t)?10:11:se(28295,{value:t})}function or(t,e){if(t===e)return!0;const n=vi(t);if(n!==vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wa(t).isEqual(Wa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=yi(i.timestampValue),a=yi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _i(i.bytesValue).isEqual(_i(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Xe(i.geoPointValue.latitude)===Xe(s.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Xe(i.integerValue)===Xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Xe(i.doubleValue),a=Xe(s.doubleValue);return o===a?dc(o)===dc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return co(t.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(gv(o)!==gv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!or(o[u],a[u])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function Ka(t,e){return(t.values||[]).find(n=>or(n,e))!==void 0}function ho(t,e){if(t===e)return 0;const n=vi(t),r=vi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Xe(s.integerValue||s.doubleValue),u=Xe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return _v(t.timestampValue,e.timestampValue);case 4:return _v(Wa(t),Wa(e));case 5:return Uf(t.stringValue,e.stringValue);case 6:return function(s,o){const a=_i(s),u=_i(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ue(a[c],u[c]);if(h!==0)return h}return ue(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Xe(s.latitude),Xe(o.latitude));return a!==0?a:ue(Xe(s.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},d=o.fields||{},g=(a=f[pc])===null||a===void 0?void 0:a.arrayValue,v=(u=d[pc])===null||u===void 0?void 0:u.arrayValue,R=ue(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:vv(g,v)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ru.mapValue&&o===ru.mapValue)return 0;if(s===ru.mapValue)return 1;if(o===ru.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const d=Uf(u[f],h[f]);if(d!==0)return d;const g=ho(a[u[f]],c[h[f]]);if(g!==0)return g}return ue(u.length,h.length)}(t.mapValue,e.mapValue);default:throw se(23264,{le:n})}}function _v(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=yi(t),r=yi(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function vv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ho(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function fo(t){return Ff(t)}function Ff(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _i(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ff(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ff(n.fields[o])}`;return i+"}"}(t.mapValue):se(61005,{value:t})}function Su(t){switch(vi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nh(t);return e?16+Su(e):16;case 5:return 2*t.stringValue.length;case 6:return _i(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Su(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return bi(r.fields,(s,o)=>{i+=s.length+Su(o)}),i}(t.mapValue);default:throw se(13486,{value:t})}}function wv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jf(t){return!!t&&"integerValue"in t}function Sm(t){return!!t&&"arrayValue"in t}function Ev(t){return!!t&&"nullValue"in t}function Tv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ru(t){return!!t&&"mapValue"in t}function PD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[TT])===null||n===void 0?void 0:n.stringValue)===IT}function ya(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ya(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ya(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===CD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ru(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ya(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ya(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ru(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ru(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){bi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(ya(this.value))}}function AT(t){const e=[];return bi(t.fields,(n,r)=>{const i=new vt([n]);if(Ru(r)){const s=AT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pt(e,0,oe.min(),oe.min(),oe.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,oe.min(),oe.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,oe.min(),oe.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n){this.position=e,this.inclusive=n}}function Iv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=ho(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Av(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!or(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n="asc"){this.field=e,this.dir=n}}function bD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{}class rt extends ST{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xD(e,n,r):n==="array-contains"?new LD(e,r):n==="in"?new VD(e,r):n==="not-in"?new MD(e,r):n==="array-contains-any"?new UD(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DD(e,r):new OD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ho(n,this.value)):n!==null&&vi(this.value)===vi(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends ST{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Hn(e,n)}matches(e){return RT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function RT(t){return t.op==="and"}function CT(t){return ND(t)&&RT(t)}function ND(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function Bf(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+fo(t.value);if(CT(t))return t.filters.map(e=>Bf(e)).join(",");{const e=t.filters.map(n=>Bf(n)).join(",");return`${t.op}(${e})`}}function PT(t,e){return t instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&or(r.value,i.value)}(t,e):t instanceof Hn?function(r,i){return i instanceof Hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&PT(o,i.filters[a]),!0):!1}(t,e):void se(19439)}function kT(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`}(t):t instanceof Hn?function(n){return n.op.toString()+" {"+n.getFilters().map(kT).join(" ,")+"}"}(t):"Filter"}class xD extends rt{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class DD extends rt{constructor(e,n){super(e,"in",n),this.keys=bT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OD extends rt{constructor(e,n){super(e,"not-in",n),this.keys=bT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class LD extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sm(n)&&Ka(n.arrayValue,this.value)}}class VD extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class MD extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ka(this.value.arrayValue,n)}}class UD extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Pe=null}}function Sv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new FD(t,e,n,r,i,s,o)}function Rm(t){const e=le(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),e.Pe=n}return e.Pe}function Cm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!PT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Av(t.startAt,e.startAt)&&Av(t.endAt,e.endAt)}function zf(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function jD(t,e,n,r,i,s,o,a){return new Ao(t,e,n,r,i,s,o,a)}function rh(t){return new Ao(t)}function Rv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function NT(t){return t.collectionGroup!==null}function _a(t){const e=le(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(vt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Qa(s,r))}),n.has(vt.keyField().canonicalString())||e.Te.push(new Qa(vt.keyField(),r))}return e.Te}function rr(t){const e=le(t);return e.Ie||(e.Ie=BD(e,_a(t))),e.Ie}function BD(t,e){if(t.limitType==="F")return Sv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Qa(i.field,s)});const n=t.endAt?new mc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mc(t.startAt.position,t.startAt.inclusive):null;return Sv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $f(t,e){const n=t.filters.concat([e]);return new Ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hf(t,e,n){return new Ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ih(t,e){return Cm(rr(t),rr(e))&&t.limitType===e.limitType}function xT(t){return`${Rm(rr(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>kT(i)).join(", ")}]`),pl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>fo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>fo(i)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function sh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):re.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _a(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Iv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,_a(r),i)||r.endAt&&!function(o,a,u){const c=Iv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,_a(r),i))}(t,e)}function zD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DT(t){return(e,n)=>{let r=!1;for(const i of _a(t)){const s=$D(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $D(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ho(u,c):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return gT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=new qe(re.comparator);function Rr(){return HD}const OT=new qe(re.comparator);function na(...t){let e=OT;for(const n of t)e=e.insert(n.key,n);return e}function LT(t){let e=OT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wi(){return va()}function VT(){return va()}function va(){return new gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const qD=new qe(re.comparator),WD=new ut(re.comparator);function de(...t){let e=WD;for(const n of t)e=e.add(n);return e}const GD=new ut(ue);function KD(){return GD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(e)?"-0":e}}function MT(t){return{integerValue:""+t}}function QD(t,e){return TD(e)?MT(e):Pm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this._=void 0}}function XD(t,e,n){return t instanceof Xa?function(i,s){const o={fields:{[vT]:{stringValue:_T},[ET]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Am(s)&&(s=nh(s)),s&&(o.fields[wT]=s),{mapValue:o}}(n,e):t instanceof Ya?FT(t,e):t instanceof Ja?jT(t,e):function(i,s){const o=UT(i,s),a=Cv(o)+Cv(i.Ee);return jf(o)&&jf(i.Ee)?MT(a):Pm(i.serializer,a)}(t,e)}function YD(t,e,n){return t instanceof Ya?FT(t,e):t instanceof Ja?jT(t,e):n}function UT(t,e){return t instanceof gc?function(r){return jf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xa extends oh{}class Ya extends oh{constructor(e){super(),this.elements=e}}function FT(t,e){const n=BT(e);for(const r of t.elements)n.some(i=>or(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ja extends oh{constructor(e){super(),this.elements=e}}function jT(t,e){let n=BT(e);for(const r of t.elements)n=n.filter(i=>!or(i,r));return{arrayValue:{values:n}}}class gc extends oh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Cv(t){return Xe(t.integerValue||t.doubleValue)}function BT(t){return Sm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n){this.field=e,this.transform=n}}function ZD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ya&&i instanceof Ya||r instanceof Ja&&i instanceof Ja?co(r.elements,i.elements,or):r instanceof gc&&i instanceof gc?or(r.Ee,i.Ee):r instanceof Xa&&i instanceof Xa}(t.transform,e.transform)}class eO{constructor(e,n){this.version=e,this.transformResults=n}}class xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ah{}function zT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lh(t.key,xt.none()):new ml(t.key,t.data,xt.none());{const n=t.data,r=Ft.empty();let i=new ut(vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ni(t.key,r,new cn(i.toArray()),xt.none())}}function tO(t,e,n){t instanceof ml?function(i,s,o){const a=i.value.clone(),u=kv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ni?function(i,s,o){if(!Cu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=kv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll($T(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wa(t,e,n,r){return t instanceof ml?function(s,o,a,u){if(!Cu(s.precondition,o))return a;const c=s.value.clone(),h=bv(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ni?function(s,o,a,u){if(!Cu(s.precondition,o))return a;const c=bv(s.fieldTransforms,u,o),h=o.data;return h.setAll($T(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Cu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function nO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=UT(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function Pv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&co(r,i,(s,o)=>ZD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ml extends ah{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ni extends ah{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $T(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kv(t,e,n){const r=new Map;me(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,YD(o,a,n[i]))}return r}function bv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,XD(s,o,e))}return r}class lh extends ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HT extends ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&tO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=VT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=zT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(n,r)=>Pv(n,r))&&co(this.baseMutations,e.baseMutations,(n,r)=>Pv(n,r))}}class km{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return qD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new km(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,pe;function qT(t){switch(t){case q.OK:return se(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function WT(t){if(t===void 0)return Sr("GRPC error has no .code"),q.UNKNOWN;switch(t){case tt.OK:return q.OK;case tt.CANCELLED:return q.CANCELLED;case tt.UNKNOWN:return q.UNKNOWN;case tt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case tt.INTERNAL:return q.INTERNAL;case tt.UNAVAILABLE:return q.UNAVAILABLE;case tt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case tt.NOT_FOUND:return q.NOT_FOUND;case tt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case tt.ABORTED:return q.ABORTED;case tt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case tt.DATA_LOSS:return q.DATA_LOSS;default:return se(39323,{code:t})}}(pe=tt||(tt={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=new ui([4294967295,4294967295],0);function Nv(t){const e=dT().encode(t),n=new iT;return n.update(e),new Uint8Array(n.digest())}function xv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ui([n,r],0),new ui([i,s],0)]}class bm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ra(`Invalid padding: ${n}`);if(r<0)throw new ra(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ra(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ra(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=ui.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(ui.fromNumber(r)));return i.compare(oO)===1&&(i=new ui([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Nv(e),[r,i]=xv(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new bm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.fe===0)return;const n=Nv(e),[r,i]=xv(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,gl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uh(oe.min(),i,new qe(ue),Rr(),de())}}class gl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gl(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class GT{constructor(e,n){this.targetId=e,this.De=n}}class KT{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dv{constructor(){this.ve=0,this.Ce=Ov(),this.Fe=Tt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=de(),n=de(),r=de();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:se(38017,{changeType:s})}}),new gl(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Ov()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class aO{constructor(e){this.We=e,this.Ge=new Map,this.ze=Rr(),this.je=iu(),this.Je=iu(),this.He=new qe(ue)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(zf(s))if(r===0){const o=new re(s.path);this.Xe(n,o,pt.newNoDocument(o,oe.min()))}else me(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const a=this._t(e),u=a?this.ut(a,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,c)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=_i(r).toUint8Array()}catch(u){if(u instanceof yT)return mi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new bm(o,i,s)}catch(u){return mi(u instanceof ra?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.fe===0?null:a}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const a=this.st(o);if(a){if(s.current&&zf(a.target)){const u=new re(a.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,pt.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=de();this.Je.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new uh(e,n,this.He,this.ze,r);return this.ze=Rr(),this.je=iu(),this.Je=iu(),this.He=new qe(ue),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Dv,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new ut(ue),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new ut(ue),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Dv),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function iu(){return new qe(re.comparator)}function Ov(){return new qe(re.comparator)}const lO={asc:"ASCENDING",desc:"DESCENDING"},uO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cO={and:"AND",or:"OR"};class hO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qf(t,e){return t.useProto3Json||pl(e)?e:{value:e}}function yc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dO(t,e){return yc(t,e.toTimestamp())}function pn(t){return me(!!t,49232),oe.fromTimestamp(function(n){const r=yi(n);return new Oe(r.seconds,r.nanos)}(t))}function Nm(t,e){return Wf(t,e).canonicalString()}function Wf(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function XT(t){const e=Ae.fromString(t);return me(nI(e),10190,{key:e.toString()}),e}function _c(t,e){return Nm(t.databaseId,e.path)}function Ea(t,e){const n=XT(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(JT(n))}function YT(t,e){return Nm(t.databaseId,e)}function fO(t){const e=XT(t);return e.length===4?Ae.emptyPath():JT(e)}function Gf(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function JT(t){return me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Lv(t,e,n){return{name:_c(t,e),fields:n.value.mapValue.fields}}function pO(t,e){return"found"in e?function(r,i){me(!!i.found,43571),i.found.name,i.found.updateTime;const s=Ea(r,i.found.name),o=pn(i.found.updateTime),a=i.found.createTime?pn(i.found.createTime):oe.min(),u=new Ft({mapValue:{fields:i.found.fields}});return pt.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){me(!!i.missing,3894),me(!!i.readTime,22933);const s=Ea(r,i.missing),o=pn(i.readTime);return pt.newNoDocument(s,o)}(t,e):se(7234,{result:e})}function mO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(me(h===void 0||typeof h=="string",58123),Tt.fromBase64String(h||"")):(me(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?q.UNKNOWN:WT(c.code);return new ee(h,c.message||"")}(o);n=new KT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ea(t,r.document.name),s=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):oe.min(),a=new Ft({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Pu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ea(t,r.document),s=r.readTime?pn(r.readTime):oe.min(),o=pt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ea(t,r.document),s=r.removedTargetIds||[];n=new Pu([],s,i,null)}else{if(!("filter"in e))return se(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sO(i,s),a=r.targetId;n=new GT(a,o)}}return n}function ZT(t,e){let n;if(e instanceof ml)n={update:Lv(t,e.key,e.value)};else if(e instanceof lh)n={delete:_c(t,e.key)};else if(e instanceof Ni)n={update:Lv(t,e.key,e.data),updateMask:AO(e.fieldMask)};else{if(!(e instanceof HT))return se(16599,{Rt:e.type});n={verify:_c(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ya)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gc)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se(27497)}(t,e.precondition)),n}function gO(t,e){return t&&t.length>0?(me(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?pn(i.updateTime):pn(s);return o.isEqual(oe.min())&&(o=pn(s)),new eO(o,i.transformResults||[])}(n,e))):[]}function yO(t,e){return{documents:[YT(t,e.path)]}}function _O(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=YT(t,i);const s=function(c){if(c.length!==0)return tI(Hn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(d){return{field:Ps(d.field),direction:EO(d.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=qf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Vt:n,parent:i}}function vO(t){let e=fO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1,65062);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const d=eI(f);return d instanceof Hn&&CT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(d=>function(v){return new Qa(ks(v.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,pl(d)?null:d}(n.limit));let u=null;n.startAt&&(u=function(f){const d=!!f.before,g=f.values||[];return new mc(g,d)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const d=!f.before,g=f.values||[];return new mc(g,d)}(n.endAt)),jD(e,i,o,s,a,"F",u,c)}function wO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function eI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ks(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ks(n.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ks(n.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return rt.create(ks(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hn.create(n.compositeFilter.filters.map(r=>eI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function EO(t){return lO[t]}function TO(t){return uO[t]}function IO(t){return cO[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function ks(t){return vt.fromServerFormat(t.fieldPath)}function tI(t){return t instanceof rt?function(n){if(n.op==="=="){if(Tv(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(Ev(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tv(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(Ev(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:TO(n.op),value:n.value}}}(t):t instanceof Hn?function(n){const r=n.getFilters().map(i=>tI(i));return r.length===1?r[0]:{compositeFilter:{op:IO(n.op),filters:r}}}(t):se(54877,{filter:t})}function AO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r,i,s=oe.min(),o=oe.min(),a=Tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.gt=e}}function RO(t){const e=vO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(){this.Dn=new PO}addToCollectionParentIndex(e,n){return this.Dn.add(n),G.resolve()}getCollectionParents(e,n){return G.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return G.resolve()}deleteFieldIndex(e,n){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,n){return G.resolve()}getDocumentsMatchingTarget(e,n){return G.resolve(null)}getIndexType(e,n){return G.resolve(0)}getFieldIndexes(e,n){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,n){return G.resolve(gi.min())}getMinOffsetFromCollectionGroup(e,n){return G.resolve(gi.min())}updateCollectionGroup(e,n,r){return G.resolve()}updateIndexEntries(e,n){return G.resolve()}}class PO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rI=41943040;class qt{static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(rI,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new po(0)}static ur(){return new po(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="LruGarbageCollector",kO=1048576;function Uv([t,e],[n,r]){const i=ue(t,n);return i===0?ue(e,r):i}class bO{constructor(e){this.Tr=e,this.buffer=new ut(Uv),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Uv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class NO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){te(Mv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Io(n)?te(Mv,"Ignoring IndexedDB error during garbage collection: ",n):await To(n)}await this.Rr(3e5)})}}class xO{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return G.resolve(th.ue);const r=new bO(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Vv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vv):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Rs()<=he.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function DO(t,e){return new xO(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(){this.changes=new gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?G.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&wa(r.mutation,i,cn.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=Wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=na();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Rr();const o=va(),a=function(){return va()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ni)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),wa(h.mutation,c,h.mutation.getFieldMask(),Oe.now())):o.set(c.key,cn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new LO(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=va();let i=new qe((o,a)=>o-a),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||cn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||de()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=VT();h.forEach(d=>{if(!s.has(d)){const g=zT(n.get(d),r.get(d));g!==null&&f.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):G.resolve(Wi());let a=qa,u=s;return o.next(c=>G.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?G.resolve():this.remoteDocumentCache.getEntry(e,h).next(d=>{u=u.insert(h,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,de())).next(h=>({batchId:a,changes:LT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=na();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=na();return this.indexManager.getCollectionParents(e,s).next(a=>G.forEach(a,u=>{const c=function(f,d){return new Ao(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,d)=>{o=o.insert(f,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,pt.newInvalidDocument(h)))});let a=na();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&wa(h.mutation,c,cn.empty(),Oe.now()),sh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return G.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pn(i.createTime)}}(n)),G.resolve()}getNamedQuery(e,n){return G.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:RO(i.bundledQuery),readTime:pn(i.readTime)}}(n)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(){this.overlays=new qe(re.comparator),this.kr=new Map}getOverlay(e,n){return G.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wi();return G.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),G.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),G.resolve()}getOverlaysForCollection(e,n,r){const i=Wi(),s=n.length+1,o=new re(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return G.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new qe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Wi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Wi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return G.resolve(a)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iO(n,r));let s=this.kr.get(n);s===void 0&&(s=de(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.qr=new ut(dt.Qr),this.$r=new ut(dt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new dt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new re(new Ae([])),r=new dt(n,e),i=new dt(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new re(new Ae([])),r=new dt(n,e),i=new dt(n,e+1);let s=de();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new dt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return re.comparator(e.key,n.key)||ue(e.Hr,n.Hr)}static Ur(e,n){return ue(e.Hr,n.Hr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new ut(dt.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Yr=this.Yr.add(new dt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,n){return G.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return G.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Im:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const a=this.Zr(o.Hr);s.push(a)}),G.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(ue);return n.forEach(i=>{const s=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],a=>{r=r.add(a.Hr)})}),G.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;re.isDocumentKey(s)||(s=s.child(""));const o=new dt(new re(s),0);let a=new ut(ue);return this.Yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.Hr)),!0)},o),G.resolve(this.ei(a))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return G.forEach(n.mutations,i=>{const s=new dt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new dt(n,0),i=this.Yr.firstAfterOrEqual(r);return G.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.ni=e,this.docs=function(){return new qe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return G.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Rr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),G.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Rr();const o=n.path,a=new re(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_D(yD(h),r)<=0||(i.has(h.key)||sh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return G.resolve(s)}getAllFromCollectionGroup(e,n,r,i){se(9500)}ri(e,n){return G.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zO(this)}getSize(e){return G.resolve(this.size)}}class zO extends OO{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),G.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.persistence=e,this.ii=new gs(n=>Rm(n),Cm),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.si=0,this.oi=new xm,this.targetCount=0,this._i=po.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),G.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new po(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,G.resolve()}updateTargetData(e,n){return this.hr(n),G.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),G.waitFor(s).next(()=>i)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return G.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),G.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),G.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),G.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return G.resolve(r)}containsKey(e,n){return G.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.ai={},this.overlays={},this.ui=new th(0),this.ci=!1,this.ci=!0,this.li=new FO,this.referenceDelegate=e(this),this.hi=new $O(this),this.indexManager=new CO,this.remoteDocumentCache=function(i){return new BO(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new SO(n),this.Ti=new MO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new jO(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const i=new HO(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return G.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class HO extends wD{constructor(e){super(),this.currentSequenceNumber=e}}class Dm{constructor(e){this.persistence=e,this.Ai=new xm,this.Ri=null}static Vi(e){return new Dm(e)}get mi(){if(this.Ri)return this.Ri;throw se(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),G.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),G.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,r=>{const i=re.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return G.or([()=>G.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class vc{constructor(e,n){this.persistence=e,this.gi=new gs(r=>ID(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=DO(this,n)}static Vi(e,n){return new vc(e,n)}Ii(){}di(e){return G.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return G.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?G.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,oe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),G.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Su(e.data.value)),n}Sr(e,n,r){return G.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return G.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Om(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return rk()?8:ED(Ot())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new qO;return this.ws(e,n,o).next(a=>{if(s.result=a,this.Rs)return this.Ss(e,n,o,a.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(Rs()<=he.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(Rs()<=he.DEBUG&&te("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Rs()<=he.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):G.resolve())}ps(e,n){if(Rv(n))return G.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hf(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.gs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,a);return this.Ds(n,c,o,u.readTime)?this.ps(e,Hf(n,null,"F")):this.vs(e,c,n,u)}))})))}ys(e,n,r,i){return Rv(n)||i.isEqual(oe.min())?G.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?G.resolve(null):(Rs()<=he.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cs(n)),this.vs(e,o,n,gD(i,qa)).next(a=>a))})}bs(e,n){let r=new ut(DT(e));return n.forEach((i,s)=>{sh(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return Rs()<=he.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.gs.getDocumentsMatchingQuery(e,n,gi.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="LocalStore",GO=3e8;class KO{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new qe(ue),this.Ms=new gs(s=>Rm(s),Cm),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VO(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function QO(t,e,n,r){return new KO(t,e,n,r)}async function sI(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=de();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Bs:c,removedBatchIds:o,addedBatchIds:a}))})})}function XO(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,d=f.keys();let g=G.resolve();return d.forEach(v=>{g=g.next(()=>h.getEntry(u,v)).next(R=>{const b=c.docVersions.get(v);me(b!==null,48541),R.version.compareTo(b)<0&&(f.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),h.addEntry(R)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=de();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oI(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function YO(t,e){const n=le(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.hi.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.hi.addMatchingKeys(s,h.addedDocuments,f)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Tt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(R,b,E){return R.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=GO?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,g,h)&&a.push(n.hi.updateTargetData(s,g))});let u=Rr(),c=de();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(JO(s,o,e.documentUpdates).next(h=>{u=h.Ls,c=h.ks})),!r.isEqual(oe.min())){const h=n.hi.getLastRemoteSnapshotVersion(s).next(f=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return G.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Fs=i,s))}function JO(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):te(Lm,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function ZO(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Im),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function e4(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,G.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new Yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Kf(t,e,n){const r=le(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Io(o))throw o;te(Lm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Fv(t,e,n){const r=le(t);let i=oe.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=le(u),d=f.Ms.get(h);return d!==void 0?G.resolve(f.Fs.get(d)):f.hi.getTargetData(c,h)}(r,o,rr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:de())).next(a=>(t4(r,zD(e),a),{documents:a,qs:s})))}function t4(t,e,n){let r=t.xs.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class jv{constructor(){this.activeTargetIds=KD()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class n4{constructor(){this.Fo=new jv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new jv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="ConnectivityMonitor";class zv{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){te(Bv,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){te(Bv,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su=null;function Qf(){return su===null?su=function(){return 268435456+Math.round(2147483648*Math.random())}():su++,"0x"+su.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="RestConnection",i4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class s4{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===fc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Qf(),a=this.Go(e,n.toUriEncodedString());te(Ed,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:c}=new URL(a),h=Ci(c);return this.jo(e,a,u,r,h).then(f=>(te(Ed,`Received RPC '${e}' ${o}: `,f),f),f=>{throw mi(Ed,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Eo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=i4[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class a4 extends s4{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=Qf();return new Promise((a,u)=>{const c=new sT;c.setWithCredentials(!0),c.listenOnce(oT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Au.NO_ERROR:const f=c.getResponseJson();te(Pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Au.TIMEOUT:te(Pt,`RPC '${e}' ${o} timed out`),u(new ee(q.DEADLINE_EXCEEDED,"Request time out"));break;case Au.HTTP_ERROR:const d=c.getStatus();if(te(Pt,`RPC '${e}' ${o} failed with status:`,d,"response text:",c.getResponseText()),d>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const R=function(E){const S=E.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(S)>=0?S:q.UNKNOWN}(v.status);u(new ee(R,v.message))}else u(new ee(q.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new ee(q.UNAVAILABLE,"Connection failed."));break;default:se(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{te(Pt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);te(Pt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",h,r,15)})}P_(e,n,r){const i=Qf(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uT(),a=lT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");te(Pt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);this.T_(f);let d=!1,g=!1;const v=new o4({Ho:b=>{g?te(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(d||(te(Pt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),te(Pt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},Yo:()=>f.close()}),R=(b,E,S)=>{b.listen(E,C=>{try{S(C)}catch(D){setTimeout(()=>{throw D},0)}})};return R(f,ta.EventType.OPEN,()=>{g||(te(Pt,`RPC '${e}' stream ${i} transport opened.`),v.s_())}),R(f,ta.EventType.CLOSE,()=>{g||(g=!0,te(Pt,`RPC '${e}' stream ${i} transport closed`),v.__(),this.I_(f))}),R(f,ta.EventType.ERROR,b=>{g||(g=!0,mi(Pt,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),v.__(new ee(q.UNAVAILABLE,"The operation could not be completed")))}),R(f,ta.EventType.MESSAGE,b=>{var E;if(!g){const S=b.data[0];me(!!S,16349);const C=S,D=(C==null?void 0:C.error)||((E=C[0])===null||E===void 0?void 0:E.error);if(D){te(Pt,`RPC '${e}' stream ${i} received error:`,D);const M=D.status;let x=function(y){const w=tt[y];if(w!==void 0)return WT(w)}(M),T=D.message;x===void 0&&(x=q.INTERNAL,T="Unknown error status: "+M+" with message "+D.message),g=!0,v.__(new ee(x,T)),f.close()}else te(Pt,`RPC '${e}' stream ${i} received:`,S),v.a_(S)}}),R(a,aT.STAT_EVENT,b=>{b.stat===Mf.PROXY?te(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Mf.NOPROXY&&te(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.o_()},0),v}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Td(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){return new hO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="PersistentStream";class aI{constructor(e,n,r,i,s,o,a,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Vm(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new ee(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return te($v,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(te($v,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class l4 extends aI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=mO(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?pn(o.readTime):oe.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Gf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=zf(u)?{documents:yO(s,u)}:{query:_O(s,u).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=QT(s,o.resumeToken);const c=qf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=yc(s,o.snapshotVersion.toTimestamp());const c=qf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=wO(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Gf(this.serializer),n.removeTarget=e,this.k_(n)}}class u4 extends aI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=gO(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Gf(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZT(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{}class h4 extends c4{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new ee(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Wf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ee(q.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Jo(e,Wf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(q.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class d4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Sr(n),this._a=!1):te("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="RemoteStore";class f4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{ys(this)&&(te(ls,"Restarting streams for network reachability change."),await async function(u){const c=le(u);c.Ia.add(4),await yl(c),c.Aa.set("Unknown"),c.Ia.delete(4),await hh(c)}(this))})}),this.Aa=new d4(r,i)}}async function hh(t){if(ys(t))for(const e of t.da)await e(!0)}async function yl(t){for(const e of t.da)await e(!1)}function lI(t,e){const n=le(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),jm(n)?Fm(n):So(n).x_()&&Um(n,e))}function Mm(t,e){const n=le(t),r=So(n);n.Ta.delete(e),r.x_()&&uI(n,e),n.Ta.size===0&&(r.x_()?r.B_():ys(n)&&n.Aa.set("Unknown"))}function Um(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}So(t).H_(e)}function uI(t,e){t.Ra.$e(e),So(t).Y_(e)}function Fm(t){t.Ra=new aO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),So(t).start(),t.Aa.aa()}function jm(t){return ys(t)&&!So(t).M_()&&t.Ta.size>0}function ys(t){return le(t).Ia.size===0}function cI(t){t.Ra=void 0}async function p4(t){t.Aa.set("Online")}async function m4(t){t.Ta.forEach((e,n)=>{Um(t,e)})}async function g4(t,e){cI(t),jm(t)?(t.Aa.la(e),Fm(t)):t.Aa.set("Unknown")}async function y4(t,e,n){if(t.Aa.set("Online"),e instanceof KT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ta.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ta.delete(a),i.Ra.removeTarget(a))}(t,e)}catch(r){te(ls,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wc(t,r)}else if(e instanceof Pu?t.Ra.Ye(e):e instanceof GT?t.Ra.it(e):t.Ra.et(e),!n.isEqual(oe.min()))try{const r=await oI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Ra.Pt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.Ta.get(c);h&&s.Ta.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.Ta.get(u);if(!h)return;s.Ta.set(u,h.withResumeToken(Tt.EMPTY_BYTE_STRING,h.snapshotVersion)),uI(s,u);const f=new Yr(h.target,u,c,h.sequenceNumber);Um(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te(ls,"Failed to raise snapshot:",r),await wc(t,r)}}async function wc(t,e,n){if(!Io(e))throw e;t.Ia.add(1),await yl(t),t.Aa.set("Offline"),n||(n=()=>oI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(ls,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await hh(t)})}function hI(t,e){return e().catch(n=>wc(t,n,e))}async function dh(t){const e=le(t),n=wi(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Im;for(;_4(e);)try{const i=await ZO(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,v4(e,i)}catch(i){await wc(e,i)}dI(e)&&fI(e)}function _4(t){return ys(t)&&t.Pa.length<10}function v4(t,e){t.Pa.push(e);const n=wi(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function dI(t){return ys(t)&&!wi(t).M_()&&t.Pa.length>0}function fI(t){wi(t).start()}async function w4(t){wi(t).na()}async function E4(t){const e=wi(t);for(const n of t.Pa)e.X_(n.mutations)}async function T4(t,e,n){const r=t.Pa.shift(),i=km.from(r,e,n);await hI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await dh(t)}async function I4(t,e){e&&wi(t).Z_&&await async function(r,i){if(function(o){return qT(o)&&o!==q.ABORTED}(i.code)){const s=r.Pa.shift();wi(r).N_(),await hI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await dh(r)}}(t,e),dI(t)&&fI(t)}async function Hv(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),te(ls,"RemoteStore received new credentials");const r=ys(n);n.Ia.add(3),await yl(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await hh(n)}async function A4(t,e){const n=le(t);e?(n.Ia.delete(2),await hh(n)):e||(n.Ia.add(2),await yl(n),n.Aa.set("Unknown"))}function So(t){return t.Va||(t.Va=function(n,r,i){const s=le(n);return s.ia(),new l4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:p4.bind(null,t),e_:m4.bind(null,t),n_:g4.bind(null,t),J_:y4.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),jm(t)?Fm(t):t.Aa.set("Unknown")):(await t.Va.stop(),cI(t))})),t.Va}function wi(t){return t.ma||(t.ma=function(n,r,i){const s=le(n);return s.ia(),new u4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:w4.bind(null,t),n_:I4.bind(null,t),ea:E4.bind(null,t),ta:T4.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await dh(t)):(await t.ma.stop(),t.Pa.length>0&&(te(ls,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Bm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zm(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),Io(t))return new ee(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{static emptySet(e){return new eo(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=na(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.fa=new qe(re.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):se(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class mo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mo(e,n,eo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ih(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class R4{constructor(){this.queries=Wv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=le(n),s=i.queries;i.queries=Wv(),s.forEach((o,a)=>{for(const u of a.wa)u.onError(r)})})(this,new ee(q.ABORTED,"Firestore shutting down"))}}function Wv(){return new gs(t=>xT(t),ih)}async function pI(t,e){const n=le(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new S4,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=zm(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&$m(n)}async function mI(t,e){const n=le(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function C4(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.wa)a.Ca(i)&&(r=!0);o.ya=i}}r&&$m(n)}function P4(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function $m(t){t.Da.forEach(e=>{e.next()})}var Xf,Gv;(Gv=Xf||(Xf={})).Fa="default",Gv.Cache="cache";class gI{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Xf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.key=e}}class _I{constructor(e){this.key=e}}class k4{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=de(),this.mutatedKeys=de(),this.Xa=DT(e),this.eu=new eo(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new qv,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),g=sh(this.query,f)?f:null,v=!!d&&this.mutatedKeys.has(d.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;d&&g?d.data.isEqual(g.data)?v!==R&&(r.track({type:3,doc:g}),b=!0):this.iu(d,g)||(r.track({type:2,doc:g}),b=!0,(u&&this.Xa(g,u)>0||c&&this.Xa(g,c)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),b=!0):d&&!g&&(r.track({type:1,doc:d}),b=!0,(u||c)&&(a=!0)),b&&(g?(o=o.add(g),s=R?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:a,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,f)=>function(g,v){const R=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{At:b})}};return R(g)-R(v)}(h.type,f.type)||this.Xa(h.doc,f.doc)),this.su(r),i=i!=null&&i;const a=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new mo(this.query,e.eu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new qv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=de(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new _I(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new yI(r))}),n}uu(e){this.Ha=e.qs,this.Za=de();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return mo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Hm="SyncEngine";class b4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class N4{constructor(e){this.key=e,this.lu=!1}}class x4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new gs(a=>xT(a),ih),this.Tu=new Map,this.Iu=new Set,this.du=new qe(re.comparator),this.Eu=new Map,this.Au=new xm,this.Ru={},this.Vu=new Map,this.mu=po.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function D4(t,e,n=!0){const r=AI(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await vI(r,e,n,!0),i}async function O4(t,e){const n=AI(t);await vI(n,e,!0,!1)}async function vI(t,e,n,r){const i=await e4(t.localStore,rr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await L4(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&lI(t.remoteStore,i),a}async function L4(t,e,n,r,i){t.gu=(f,d,g)=>async function(R,b,E,S){let C=b.view.nu(E);C.Ds&&(C=await Fv(R.localStore,b.query,!1).then(({documents:T})=>b.view.nu(T,C)));const D=S&&S.targetChanges.get(b.targetId),M=S&&S.targetMismatches.get(b.targetId)!=null,x=b.view.applyChanges(C,R.isPrimaryClient,D,M);return Qv(R,b.targetId,x._u),x.snapshot}(t,f,d,g);const s=await Fv(t.localStore,e,!0),o=new k4(e,s.qs),a=o.nu(s.documents),u=gl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Qv(t,n,c._u);const h=new b4(e,n,o);return t.Pu.set(e,h),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),c.snapshot}async function V4(t,e,n){const r=le(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!ih(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Kf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Mm(r.remoteStore,i.targetId),Yf(r,i.targetId)}).catch(To)):(Yf(r,i.targetId),await Kf(r.localStore,i.targetId,!0))}async function M4(t,e){const n=le(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mm(n.remoteStore,r.targetId))}async function U4(t,e,n){const r=q4(t);try{const i=await function(o,a){const u=le(o),c=Oe.now(),h=a.reduce((g,v)=>g.add(v.key),de());let f,d;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=Rr(),R=de();return u.Os.getEntries(g,h).next(b=>{v=b,v.forEach((E,S)=>{S.isValidDocument()||(R=R.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,v)).next(b=>{f=b;const E=[];for(const S of a){const C=nO(S,f.get(S.key).overlayedDocument);C!=null&&E.push(new Ni(S.key,C,AT(C.value.mapValue),xt.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,E,a)}).next(b=>{d=b;const E=b.applyToLocalDocumentSet(f,R);return u.documentOverlayCache.saveOverlays(g,b.batchId,E)})}).then(()=>({batchId:d.batchId,changes:LT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new qe(ue)),c=c.insert(a,u),o.Ru[o.currentUser.toKey()]=c}(r,i.batchId,n),await _l(r,i.changes),await dh(r.remoteStore)}catch(i){const s=zm(i,"Failed to persist write");n.reject(s)}}async function wI(t,e){const n=le(t);try{const r=await YO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?me(o.lu,14607):i.removedDocuments.size>0&&(me(o.lu,42227),o.lu=!1))}),await _l(n,r,e)}catch(r){await To(r)}}function Kv(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=le(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const d of f.wa)d.va(a)&&(c=!0)}),c&&$m(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function F4(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new qe(re.comparator);o=o.insert(s,pt.newNoDocument(s,oe.min()));const a=de().add(s),u=new uh(oe.min(),new Map,new qe(ue),o,a);await wI(r,u),r.du=r.du.remove(s),r.Eu.delete(e),qm(r)}else await Kf(r.localStore,e,!1).then(()=>Yf(r,e,n)).catch(To)}async function j4(t,e){const n=le(t),r=e.batch.batchId;try{const i=await XO(n.localStore,e);TI(n,r,null),EI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _l(n,i)}catch(i){await To(i)}}async function B4(t,e,n){const r=le(t);try{const i=await function(o,a){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(me(f!==null,37113),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);TI(r,e,n),EI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _l(r,i)}catch(i){await To(i)}}function EI(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function TI(t,e,n){const r=le(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Yf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||II(t,r)})}function II(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Mm(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),qm(t))}function Qv(t,e,n){for(const r of n)r instanceof yI?(t.Au.addReference(r.key,e),z4(t,r)):r instanceof _I?(te(Hm,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||II(t,r.key)):se(19791,{yu:r})}function z4(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(te(Hm,"New document in limbo: "+n),t.Iu.add(r),qm(t))}function qm(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new re(Ae.fromString(e)),r=t.mu.next();t.Eu.set(r,new N4(n)),t.du=t.du.insert(n,r),lI(t.remoteStore,new Yr(rr(rh(n.path)),r,"TargetPurposeLimboResolution",th.ue))}}async function _l(t,e,n){const r=le(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((a,u)=>{o.push(r.gu(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Om.Es(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,c){const h=le(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>G.forEach(c,d=>G.forEach(d.Is,g=>h.persistence.referenceDelegate.addReference(f,d.targetId,g)).next(()=>G.forEach(d.ds,g=>h.persistence.referenceDelegate.removeReference(f,d.targetId,g)))))}catch(f){if(!Io(f))throw f;te(Lm,"Failed to update sequence numbers: "+f)}for(const f of c){const d=f.targetId;if(!f.fromCache){const g=h.Fs.get(d),v=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(v);h.Fs=h.Fs.insert(d,R)}}}(r.localStore,s))}async function $4(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){te(Hm,"User change. New user:",e.toKey());const r=await sI(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(a=>{a.forEach(u=>{u.reject(new ee(q.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _l(n,r.Bs)}}function H4(t,e){const n=le(t),r=n.Eu.get(e);if(r&&r.lu)return de().add(r.key);{let i=de();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const a=n.Pu.get(o);i=i.unionWith(a.view.tu)}return i}}function AI(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=H4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=F4.bind(null,e),e.hu.J_=C4.bind(null,e.eventManager),e.hu.pu=P4.bind(null,e.eventManager),e}function q4(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=j4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=B4.bind(null,e),e}class Ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ch(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return QO(this.persistence,new WO,e.initialUser,this.serializer)}Du(e){return new iI(Dm.Vi,this.serializer)}bu(e){return new n4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ec.provider={build:()=>new Ec};class W4 extends Ec{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){me(this.persistence.referenceDelegate instanceof vc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new NO(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new iI(r=>vc.Vi(r,n),this.serializer)}}class Jf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$4.bind(null,this.syncEngine),await A4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new R4}()}createDatastore(e){const n=ch(e.databaseInfo.databaseId),r=function(s){return new a4(s)}(e.databaseInfo);return function(s,o,a,u){return new h4(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new f4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Kv(this.syncEngine,n,0),function(){return zv.C()?new zv:new r4}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new x4(i,s,o,a,u,c);return h&&(f.fu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=le(i);te(ls,"RemoteStore shutting down."),s.Ia.add(5),await yl(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jf.provider={build:()=>new Jf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ee(q.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=le(i),a={documents:s.map(f=>_c(o.serializer,f))},u=await o.Jo("BatchGetDocuments",o.serializer.databaseId,Ae.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const d=pO(o.serializer,f);c.set(d.key.toString(),d)});const h=[];return s.forEach(f=>{const d=c.get(f.toString());me(!!d,55234,{key:f}),h.push(d)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new lh(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=re.fromPath(r);this.mutations.push(new HT(i,this.precondition(i)))}),await async function(r,i){const s=le(r),o={writes:i.map(a=>ZT(s.serializer,a))};await s.Wo("Commit",s.serializer.databaseId,Ae.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw se(50498,{Wu:e.constructor.name});n=oe.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new ee(q.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(oe.min())?xt.exists(!1):xt.updateTime(n):xt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(oe.min()))throw new ee(q.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xt.updateTime(n)}return xt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Gu=r.maxAttempts,this.F_=new Vm(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_(async()=>{const e=new G4(this.datastore),n=this.Ju(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Hu(i)}))}).catch(r=>{this.Hu(r)})})}Ju(e){try{const n=this.updateFunction(e);return!pl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ju(),Promise.resolve()))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!qT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="FirestoreClient";class Q4{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=bt.UNAUTHENTICATED,this.clientId=Tm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{te(Ei,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(Ei,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Id(t,e){t.asyncQueue.verifyOperationInProgress(),te(Ei,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{mi("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{te("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{mi("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function Xv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await X4(t);te(Ei,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Hv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Hv(e.remoteStore,i)),t._onlineComponents=e}async function X4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(Ei,"Using user provided OfflineComponentProvider");try{await Id(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===q.FAILED_PRECONDITION||i.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;mi("Error using user provided cache. Falling back to memory cache: "+n),await Id(t,new Ec)}}else te(Ei,"Using default OfflineComponentProvider"),await Id(t,new W4(void 0));return t._offlineComponents}async function Wm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(Ei,"Using user provided OnlineComponentProvider"),await Xv(t,t._uninitializedComponentsProvider._online)):(te(Ei,"Using default OnlineComponentProvider"),await Xv(t,new Jf))),t._onlineComponents}function Y4(t){return Wm(t).then(e=>e.syncEngine)}function J4(t){return Wm(t).then(e=>e.datastore)}async function Zf(t){const e=await Wm(t),n=e.eventManager;return n.onListen=D4.bind(null,e.syncEngine),n.onUnlisten=V4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=O4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=M4.bind(null,e.syncEngine),n}function Z4(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new SI({next:d=>{h.Ou(),o.enqueueAndForget(()=>mI(s,f));const g=d.docs.has(a);!g&&d.fromCache?c.reject(new ee(q.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&u&&u.source==="server"?c.reject(new ee(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),f=new gI(rh(a.path),h,{includeMetadataChanges:!0,ka:!0});return pI(s,f)}(await Zf(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="firestore.googleapis.com",Jv=!0;class Zv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=CI,this.ssl=Jv}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Jv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kO)throw new ee(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ee(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ee(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ee(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oD;switch(r.type){case"firstParty":return new cD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Yv.get(n);r&&(te("ComponentProvider","Removing Datastore"),Yv.delete(n),r.terminate())}(this),Promise.resolve()}}function eL(t,e,n,r={}){var i;t=Sn(t,fh);const s=Ci(e),o=t._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(em(`https://${u}`),tm("Firestore",!0)),o.host!==CI&&o.host!==u&&mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!pi(c,a)&&(t._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=bt.MOCK_USER;else{h=GE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new ee(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new bt(d)}t._authCredentials=new aD(new hT(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _s(this.firestore,e,this._query)}}class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(fl(n,ze._jsonSchema))return new ze(e,r||null,new re(Ae.fromString(n.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:it("string",ze._jsonSchemaVersion),referencePath:it("string")};class ci extends _s{constructor(e,n,r){super(e,n,rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new re(e))}withConverter(e){return new ci(this.firestore,e,this._path)}}function Gm(t,e,...n){if(t=Ie(t),fT("collection","path",e),t instanceof fh){const r=Ae.fromString(e,...n);return dv(r),new ci(t,null,r)}{if(!(t instanceof ze||t instanceof ci))throw new ee(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return dv(r),new ci(t.firestore,null,r)}}function Ro(t,e,...n){if(t=Ie(t),arguments.length===1&&(e=Tm.newId()),fT("doc","path",e),t instanceof fh){const r=Ae.fromString(e,...n);return hv(r),new ze(t,null,new re(r))}{if(!(t instanceof ze||t instanceof ci))throw new ee(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return hv(r),new ze(t.firestore,t instanceof ci?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="AsyncQueue";class t0{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Vm(this,"async_queue_retry"),this.oc=()=>{const r=Td();r&&te(e0,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Td();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Td();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new yr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Io(e))throw e;te(e0,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Sr("INTERNAL UNHANDLED ERROR: ",n0(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Bm.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&se(47125,{hc:n0(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function n0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ti extends fh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new t0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new t0(e),this._firestoreClient=void 0,await e}}}function tL(t,e){const n=typeof t=="object"?t:ll(),r=typeof t=="string"?t:fc,i=Pi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=HE("firestore");s&&eL(i,...s)}return i}function ph(t){if(t._terminated)throw new ee(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||nL(t),t._firestoreClient}function nL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new RD(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,RI(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Q4(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ln(Tt.fromBase64String(e))}catch(n){throw new ee(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ln(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ln._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fl(e,ln._jsonSchema))return ln.fromBase64String(e.bytes)}}ln._jsonSchemaVersion="firestore/bytes/1.0",ln._jsonSchema={type:it("string",ln._jsonSchemaVersion),bytes:it("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ir._jsonSchemaVersion}}static fromJSON(e){if(fl(e,ir._jsonSchema))return new ir(e.latitude,e.longitude)}}ir._jsonSchemaVersion="firestore/geoPoint/1.0",ir._jsonSchema={type:it("string",ir._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fl(e,sr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new sr(e.vectorValues);throw new ee(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sr._jsonSchemaVersion="firestore/vectorValue/1.0",sr._jsonSchema={type:it("string",sr._jsonSchemaVersion),vectorValues:it("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=/^__.*__$/;class iL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new ml(e,this.data,n,this.fieldTransforms)}}class PI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ni(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function kI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{Ec:t})}}class Km{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Km(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Tc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(kI(this.Ec)&&rL.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class sL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ch(e)}Dc(e,n,r,i=!1){return new Km({Ec:e,methodName:n,bc:r,path:vt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gh(t){const e=t._freezeSettings(),n=ch(t._databaseId);return new sL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bI(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);Xm("Data must be an object, but it was:",o,r);const a=DI(r,o);let u,c;if(s.merge)u=new cn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const d=ep(e,f,n);if(!o.contains(d))throw new ee(q.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);LI(h,d)||h.push(d)}u=new cn(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new iL(new Ft(a),u,c)}class yh extends mh{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yh}}class Qm extends mh{_toFieldTransform(e){return new JD(e.path,new Xa)}isEqual(e){return e instanceof Qm}}function NI(t,e,n,r){const i=t.Dc(1,e,n);Xm("Data must be an object, but it was:",i,r);const s=[],o=Ft.empty();bi(r,(u,c)=>{const h=Ym(e,u,n);c=Ie(c);const f=i.gc(h);if(c instanceof yh)s.push(h);else{const d=wl(c,f);d!=null&&(s.push(h),o.set(h,d))}});const a=new cn(s);return new PI(o,a,i.fieldTransforms)}function xI(t,e,n,r,i,s){const o=t.Dc(1,e,n),a=[ep(e,r,n)],u=[i];if(s.length%2!=0)throw new ee(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ep(e,s[d])),u.push(s[d+1]);const c=[],h=Ft.empty();for(let d=a.length-1;d>=0;--d)if(!LI(c,a[d])){const g=a[d];let v=u[d];v=Ie(v);const R=o.gc(g);if(v instanceof yh)c.push(g);else{const b=wl(v,R);b!=null&&(c.push(g),h.set(g,b))}}const f=new cn(c);return new PI(h,f,o.fieldTransforms)}function oL(t,e,n,r=!1){return wl(n,t.Dc(r?4:3,e))}function wl(t,e){if(OI(t=Ie(t)))return Xm("Unsupported field value:",e,t),DI(t,e);if(t instanceof mh)return function(r,i){if(!kI(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=wl(a,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:yc(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yc(i.serializer,s)}}if(r instanceof ir)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ln)return{bytesValue:QT(i.serializer,r._byteString)};if(r instanceof ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Nm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof sr)return function(o,a){return{mapValue:{fields:{[TT]:{stringValue:IT},[pc]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.wc("VectorValues must only contain numeric values.");return Pm(a.serializer,c)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${eh(r)}`)}(t,e)}function DI(t,e){const n={};return gT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,(r,i)=>{const s=wl(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function OI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof ir||t instanceof ln||t instanceof ze||t instanceof mh||t instanceof sr)}function Xm(t,e,n){if(!OI(n)||!pT(n)){const r=eh(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ep(t,e,n){if((e=Ie(e))instanceof vl)return e._internalPath;if(typeof e=="string")return Ym(t,e);throw Tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const aL=new RegExp("[~\\*/\\[\\]]");function Ym(t,e,n){if(e.search(aL)>=0)throw Tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vl(...e.split("."))._internalPath}catch{throw Tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ee(q.INVALID_ARGUMENT,a+t+u)}function LI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_h("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lL extends Ic{data(){return super.data()}}function _h(t,e){return typeof e=="string"?Ym(t,e):e instanceof vl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jm{}class VI extends Jm{}function MI(t,e,...n){let r=[];e instanceof Jm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Zm).length,a=s.filter(u=>u instanceof vh).length;if(o>1||o>0&&a>0)throw new ee(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vh extends VI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vh(e,n,r)}_apply(e){const n=this._parse(e);return FI(e._query,n),new _s(e.firestore,e.converter,$f(e._query,n))}_parse(e){const n=gh(e.firestore);return function(s,o,a,u,c,h,f){let d;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ee(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){s0(f,h);const v=[];for(const R of f)v.push(i0(u,s,R));d={arrayValue:{values:v}}}else d=i0(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||s0(f,h),d=oL(a,o,f,h==="in"||h==="not-in");return rt.create(c,h,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function cL(t,e,n){const r=e,i=_h("where",t);return vh._create(i,r,n)}class Zm extends Jm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)FI(o,u),o=$f(o,u)}(e._query,n),new _s(e.firestore,e.converter,$f(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class eg extends VI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new eg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new ee(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new ee(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qa(s,o)}(e._query,this._field,this._direction);return new _s(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ao(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function UI(t,e="asc"){const n=e,r=_h("orderBy",t);return eg._create(r,n)}function i0(t,e,n){if(typeof(n=Ie(n))=="string"){if(n==="")throw new ee(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!NT(e)&&n.indexOf("/")!==-1)throw new ee(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!re.isDocumentKey(r))throw new ee(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wv(t,new re(r))}if(n instanceof ze)return wv(t,n._key);throw new ee(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${eh(n)}.`)}function s0(t,e){if(!Array.isArray(t)||t.length===0)throw new ee(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ee(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class jI{convertValue(e,n="none"){switch(vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[pc].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Xe(o.doubleValue));return new sr(s)}convertGeoPoint(e){return new ir(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const n=yi(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);me(nI(r),9688,{name:e});const i=new Ga(r.get(1),r.get(3)),s=new re(r.popFirst(5));return i.isEqual(n)||Sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class hL extends jI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}class $s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hi extends Ic{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_h("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=hi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",hi._jsonSchema={type:it("string",hi._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class ku extends hi{data(e={}){return super.data(e)}}class to{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new $s(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ku(this._firestore,this._userDataWriter,r.key,r,new $s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new ku(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $s(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new ku(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $s(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:dL(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=to._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Tm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(t){t=Sn(t,ze);const e=Sn(t.firestore,Ti);return Z4(ph(e),t._key).then(n=>HI(e,t,n))}to._jsonSchemaVersion="firestore/querySnapshot/1.0",to._jsonSchema={type:it("string",to._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};class tg extends jI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function zI(t,e,n){t=Sn(t,ze);const r=Sn(t.firestore,Ti),i=BI(t.converter,e,n);return ng(r,[bI(gh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xt.none())])}function pL(t,e,n,...r){t=Sn(t,ze);const i=Sn(t.firestore,Ti),s=gh(i);let o;return o=typeof(e=Ie(e))=="string"||e instanceof vl?xI(s,"updateDoc",t._key,e,n,r):NI(s,"updateDoc",t._key,e),ng(i,[o.toMutation(t._key,xt.exists(!0))])}function mL(t){return ng(Sn(t.firestore,Ti),[new lh(t._key,xt.none())])}function $I(t,...e){var n,r,i;t=Ie(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||r0(e[o])||(s=e[o++]);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(r0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof ze)c=Sn(t.firestore,Ti),h=rh(t._key.path),u={next:f=>{e[o]&&e[o](HI(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Sn(t,_s);c=Sn(f.firestore,Ti),h=f._query;const d=new tg(c);u={next:g=>{e[o]&&e[o](new to(c,d,f,g))},error:e[o+1],complete:e[o+2]},uL(t._query)}return function(d,g,v,R){const b=new SI(R),E=new gI(g,b,v);return d.asyncQueue.enqueueAndForget(async()=>pI(await Zf(d),E)),()=>{b.Ou(),d.asyncQueue.enqueueAndForget(async()=>mI(await Zf(d),E))}}(ph(c),h,a,u)}function ng(t,e){return function(r,i){const s=new yr;return r.asyncQueue.enqueueAndForget(async()=>U4(await Y4(r),i,s)),s.promise}(ph(t),e)}function HI(t,e,n){const r=n.docs.get(e._key),i=new tg(t);return new hi(t,i,e._key,r,new $s(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL={maxAttempts:5};function ia(t,e){if((t=Ie(t)).firestore!==e)throw new ee(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=gh(e)}get(e){const n=ia(e,this._firestore),r=new hL(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return se(24041);const s=i[0];if(s.isFoundDocument())return new Ic(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Ic(this._firestore,r,n._key,null,n.converter);throw se(18433,{doc:s})})}set(e,n,r){const i=ia(e,this._firestore),s=BI(i.converter,n,r),o=bI(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=ia(e,this._firestore);let o;return o=typeof(n=Ie(n))=="string"||n instanceof vl?xI(this._dataReader,"Transaction.update",s._key,n,r,i):NI(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=ia(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L extends yL{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ia(e,this._firestore),r=new tg(this._firestore);return super.get(e).then(i=>new hi(this._firestore,r,n._key,i._document,new $s(!1,!1),n.converter))}}function vL(t,e,n){t=Sn(t,Ti);const r=Object.assign(Object.assign({},gL),n);return function(s){if(s.maxAttempts<1)throw new ee(q.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new yr;return s.asyncQueue.enqueueAndForget(async()=>{const c=await J4(s);new K4(s.asyncQueue,c,a,o,u).zu()}),u.promise}(ph(t),i=>e(new _L(t,i)),r)}function Za(){return new Qm("serverTimestamp")}(function(e,n=!0){(function(i){Eo=i})(ps),zn(new Pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ti(new lD(r.getProvider("auth-internal")),new hD(o,r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ee(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Zt(ov,av,e),Zt(ov,av,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="firebasestorage.googleapis.com",WI="storageBucket",wL=2*60*1e3,EL=10*60*1e3,TL=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends kn{constructor(e,n,r=0){super(Ad(e),`Firebase Storage: ${n} (${Ad(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ad(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function Ad(t){return"storage/"+t}function rg(){const t="An unknown error occurred, please check the error payload for server response.";return new We(Ve.UNKNOWN,t)}function IL(t){return new We(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function AL(t){return new We(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function SL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(Ve.UNAUTHENTICATED,t)}function RL(){return new We(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function CL(t){return new We(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function GI(){return new We(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function KI(){return new We(Ve.CANCELED,"User canceled the upload/download.")}function PL(t){return new We(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function kL(t){return new We(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function bL(){return new We(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+WI+"' property when initializing the app?")}function QI(){return new We(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function NL(){return new We(Ve.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function xL(){return new We(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function DL(t){return new We(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tp(t){return new We(Ve.INVALID_ARGUMENT,t)}function XI(){return new We(Ve.APP_DELETED,"The Firebase app was deleted.")}function OL(t){return new We(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ta(t,e){return new We(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ko(t){throw new We(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw kL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},R=n===qI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",E=new RegExp(`^https?://${R}/${i}/${b}`,"i"),C=[{regex:a,indices:u,postModify:s},{regex:g,indices:v,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<C.length;D++){const M=C[D],x=M.regex.exec(e);if(x){const T=x[M.indices.bucket];let m=x[M.indices.path];m||(m=""),r=new hn(T,m),M.postModify(r);break}}if(r==null)throw PL(e);return r}}class LL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(g,u())},b)}function d(){s&&clearTimeout(s)}function g(b,...E){if(c){d();return}if(b){d(),h.call(null,b,...E);return}if(u()||o){d(),h.call(null,b,...E);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,f(C)}let v=!1;function R(b){v||(v=!0,d(),!c&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function ML(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(t){return t!==void 0}function FL(t){return typeof t=="function"}function jL(t){return typeof t=="object"&&!Array.isArray(t)}function wh(t){return typeof t=="string"||t instanceof String}function o0(t){return ig()&&t instanceof Blob}function ig(){return typeof Blob<"u"}function a0(t,e,n,r){if(r<e)throw tp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function YI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Xi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xi||(Xi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n,r,i,s,o,a,u,c,h,f,d=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=d,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,R)=>{this.resolve_=v,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ou(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Xi.NO_ERROR,u=s.getStatus();if(!a||JI(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Xi.ABORT;r(!1,new ou(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ou(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());UL(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=rg();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?XI():KI();o(u)}else{const u=GI();o(u)}};this.canceled_?n(!1,new ou(!1,null,!0)):this.backoffId_=VL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ML(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ou{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function zL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $L(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function WL(t,e,n,r,i,s,o=!0,a=!1){const u=YI(t.urlParams),c=t.url+u,h=Object.assign({},t.headers);return HL(h,e),zL(h,n),$L(h,s),qL(h,r),new BL(c,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function KL(...t){const e=GL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ig())return new Blob(t);throw new We(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(t){if(typeof atob>"u")throw DL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sd{constructor(e,n){this.data=e,this.contentType=n||null}}function YL(t,e){switch(t){case Jn.RAW:return new Sd(ZI(e));case Jn.BASE64:case Jn.BASE64URL:return new Sd(eA(t,e));case Jn.DATA_URL:return new Sd(ZL(e),eV(e))}throw rg()}function ZI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function JL(t){let e;try{e=decodeURIComponent(t)}catch{throw Ta(Jn.DATA_URL,"Malformed data URL.")}return ZI(e)}function eA(t,e){switch(t){case Jn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ta(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Jn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ta(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=XL(e)}catch(i){throw i.message.includes("polyfill")?i:Ta(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class tA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ta(Jn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=tV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ZL(t){const e=new tA(t);return e.base64?eA(Jn.BASE64,e.rest):JL(e.rest)}function eV(t){return new tA(t).contentType}function tV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){let r=0,i="";o0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(o0(this.data_)){const r=this.data_,i=QL(r,e,n);return i===null?null:new Gr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Gr(r,!0)}}static getBlob(...e){if(ig()){const n=e.map(r=>r instanceof Gr?r.data_:r);return new Gr(KL.apply(null,n))}else{const n=e.map(o=>wh(o)?YL(Jn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Gr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t){let e;try{e=JSON.parse(t)}catch{return null}return jL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function rA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iV(t,e){return e}class Mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||iV}}let au=null;function sV(t){return!wh(t)||t.length<2?t:rA(t)}function iA(){if(au)return au;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));function e(s,o){return sV(o)}const n=new Mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Mt("size");return i.xform=r,t.push(i),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),au=t,au}function oV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new hn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function aV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return oV(r,t),r}function sA(t,e,n){const r=nA(e);return r===null?null:aV(t,r,n)}function lV(t,e,n,r){const i=nA(e);if(i===null||!wh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,d="/b/"+o(h)+"/o/"+o(f),g=Co(d,n,r),v=YI({alt:"media",token:c});return g+v})[0]}function oA(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class vs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){if(!t)throw rg()}function sg(t,e){function n(r,i){const s=sA(t,i,e);return _r(s!==null),s}return n}function uV(t,e){function n(r,i){const s=sA(t,i,e);return _r(s!==null),lV(s,i,t.host,t._protocol)}return n}function El(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=RL():i=SL():n.getStatus()===402?i=AL(t.bucket):n.getStatus()===403?i=CL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function og(t){const e=El(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=IL(t.path)),s.serverResponse=i.serverResponse,s}return n}function cV(t,e,n){const r=e.fullServerUrl(),i=Co(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new vs(i,s,sg(t,n),o);return a.errorHandler=og(e),a}function hV(t,e,n){const r=e.fullServerUrl(),i=Co(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new vs(i,s,uV(t,n),o);return a.errorHandler=og(e),a}function dV(t,e){const n=e.fullServerUrl(),r=Co(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,c){}const a=new vs(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=og(e),a}function fV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function aA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=fV(null,e)),r}function pV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let D=0;D<2;D++)C=C+Math.random().toString().slice(2);return C}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=aA(e,r,i),h=oA(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+u+"--",g=Gr.getBlob(f,r,d);if(g===null)throw QI();const v={name:c.fullPath},R=Co(s,t.host,t._protocol),b="POST",E=t.maxUploadRetryTime,S=new vs(R,b,sg(t,n),E);return S.urlParams=v,S.headers=o,S.body=g.uploadData(),S.errorHandler=El(e),S}class Ac{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function ag(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{_r(!1)}return _r(!!n&&(e||["active"]).indexOf(n)!==-1),n}function mV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=aA(e,r,i),a={name:o.fullPath},u=Co(s,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=oA(o,n),d=t.maxUploadRetryTime;function g(R){ag(R);let b;try{b=R.getResponseHeader("X-Goog-Upload-URL")}catch{_r(!1)}return _r(wh(b)),b}const v=new vs(u,c,g,d);return v.urlParams=a,v.headers=h,v.body=f,v.errorHandler=El(e),v}function gV(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const h=ag(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{_r(!1)}f||_r(!1);const d=Number(f);return _r(!isNaN(d)),new Ac(d,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,u=new vs(n,o,s,a);return u.headers=i,u.errorHandler=El(e),u}const l0=256*1024;function yV(t,e,n,r,i,s,o,a){const u=new Ac(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw NL();const c=u.total-u.current;let h=c;i>0&&(h=Math.min(h,i));const f=u.current,d=f+h;let g="";h===0?g="finalize":c===h?g="upload, finalize":g="upload";const v={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${u.current}`},R=r.slice(f,d);if(R===null)throw QI();function b(D,M){const x=ag(D,["active","final"]),T=u.current+h,m=r.size();let y;return x==="final"?y=sg(e,s)(D,M):y=null,new Ac(T,m,x==="final",y)}const E="POST",S=e.maxUploadRetryTime,C=new vs(n,E,b,S);return C.headers=v,C.body=R.uploadData(),C.progressCallback=a||null,C.errorHandler=El(t),C}const Wt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Rd(t){switch(t){case"running":case"pausing":case"canceling":return Wt.RUNNING;case"paused":return Wt.PAUSED;case"success":return Wt.SUCCESS;case"canceled":return Wt.CANCELED;case"error":return Wt.ERROR;default:return Wt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e,n,r){if(FL(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class vV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Ko("cannot .send() more than once");if(Ci(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ko("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ko("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ko("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ko("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wV extends vV{initXhr(){this.xhr_.responseType="text"}}function Bi(){return new wV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=iA(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ve.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(JI(i.status,[]))if(s)i=GI();else{this.sleepTime=Math.max(this.sleepTime*2,TL),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ve.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=mV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Bi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=gV(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Bi,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=l0*this._chunkMultiplier,n=new Ac(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=yV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Bi,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){l0*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=cV(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Bi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=pV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Bi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=KI(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Rd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new _V(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Rd(this._state)){case Wt.SUCCESS:Ss(this._resolve.bind(null,this.snapshot))();break;case Wt.CANCELED:case Wt.ERROR:const n=this._reject;Ss(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Rd(this._state)){case Wt.RUNNING:case Wt.PAUSED:e.next&&Ss(e.next.bind(e,this.snapshot))();break;case Wt.SUCCESS:e.complete&&Ss(e.complete.bind(e))();break;case Wt.CANCELED:case Wt.ERROR:e.error&&Ss(e.error.bind(e,this._error))();break;default:e.error&&Ss(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new us(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rA(this._location.path)}get storage(){return this._service}get parent(){const e=nV(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new us(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw OL(e)}}function TV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new EV(t,new Gr(e),n)}function IV(t){t._throwIfRoot("getDownloadURL");const e=hV(t.storage,t._location,iA());return t.storage.makeRequestWithTokens(e,Bi).then(n=>{if(n===null)throw xL();return n})}function AV(t){t._throwIfRoot("deleteObject");const e=dV(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Bi)}function SV(t,e){const n=rV(t._location.path,e),r=new hn(t._location.bucket,n);return new us(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(t){return/^[A-Za-z]+:\/\//.test(t)}function CV(t,e){return new us(t,e)}function lA(t,e){if(t instanceof lg){const n=t;if(n._bucket==null)throw bL();const r=new us(n,n._bucket);return e!=null?lA(r,e):r}else return e!==void 0?SV(t,e):t}function PV(t,e){if(e&&RV(e)){if(t instanceof lg)return CV(t,e);throw tp("To use ref(service, url), the first argument must be a Storage instance.")}else return lA(t,e)}function u0(t,e){const n=e==null?void 0:e[WI];return n==null?null:hn.makeFromBucketSpec(n,t)}function kV(t,e,n,r={}){t.host=`${e}:${n}`;const i=Ci(e);i&&(em(`https://${t.host}/b`),tm("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:GE(s,t.app.options.projectId))}class lg{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=qI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wL,this._maxUploadRetryTime=EL,this._requests=new Set,i!=null?this._bucket=hn.makeFromBucketSpec(i,this._host):this._bucket=u0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=u0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(an(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new us(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new LL(XI());{const o=WL(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const c0="@firebase/storage",h0="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="storage";function bV(t,e,n){return t=Ie(t),TV(t,e,n)}function NV(t){return t=Ie(t),IV(t)}function xV(t){return t=Ie(t),AV(t)}function cA(t,e){return t=Ie(t),PV(t,e)}function DV(t=ll(),e){t=Ie(t);const r=Pi(t,uA).getImmediate({identifier:e}),i=HE("storage");return i&&OV(r,...i),r}function OV(t,e,n,r={}){kV(t,e,n,r)}function LV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new lg(n,r,i,e,ps)}function VV(){zn(new Pn(uA,LV,"PUBLIC").setMultipleInstances(!0)),Zt(c0,h0,""),Zt(c0,h0,"esm2017")}VV();const ug={apiKey:"AIzaSyDHawdIrKCPyw6jMWpzExBjNAwtlls8jYQ",authDomain:"link-almohadas.firebaseapp.com",projectId:"link-almohadas",storageBucket:"link-almohadas.firebasestorage.app",messagingSenderId:"193699810029",appId:"1:193699810029:web:23b6ae6df6f7f22c769ae4",measurementId:"G-ZSF8N9XPQ7"},Eh=h2().length?ll():om(ug);rD().then(t=>{t&&ug.measurementId&&tD(Eh)}).catch(()=>null);const cg=L1(Eh),Cr=tL(Eh),hA=DV(Eh),MV=Gm(Cr,"users");async function UV(t){const e=await fL(Ro(Cr,"users",t));return e.exists()?e.data():null}async function FV({uid:t,nombre:e,email:n,createdBy:r}){await zI(Ro(Cr,"users",t),{uid:t,nombre:e,email:n,role:"seller",createdBy:r,createdAt:Za()})}function jV(t,e){const n=MI(MV,cL("role","==","seller"),UI("createdAt","desc"));return $I(n,r=>{t(r.docs.map(i=>i.data()))},e)}async function BV(t,e){return(await Eb(cg,t,e)).user}async function zV(){await A1(cg)}async function $V(t,e){if((e==null?void 0:e.role)!=="superadmin")throw new Error("Solo el super admin puede crear usuarias vendedoras.");const n=om(ug,`seller-creator-${Date.now()}`),r=L1(n);try{const i=await wb(r,t.email.trim(),t.password);return await Ib(i.user,{displayName:t.nombre.trim()}),await FV({uid:i.user.uid,nombre:t.nombre.trim(),email:t.email.trim(),createdBy:e.uid}),i.user}catch(i){throw new Error(HV(i))}finally{await A1(r).catch(()=>null),await d2(n).catch(()=>null)}}function HV(t){switch(t.code){case"auth/email-already-in-use":return"Ese email ya esta registrado.";case"auth/invalid-email":return"El email no es valido.";case"auth/weak-password":return"La contrasena es demasiado debil.";case"auth/invalid-credential":return"Las credenciales no son validas.";default:return t.message||"Ocurrio un error con Firebase Authentication."}}const dA=W.createContext(null),d0="Gaston@mimartextiles.com".trim().toLowerCase();function qV(t,e){var n;return t?d0&&((n=t.email)==null?void 0:n.toLowerCase())===d0?{uid:t.uid,email:t.email,nombre:t.displayName||(e==null?void 0:e.nombre)||"Super admin",role:"superadmin"}:e?{uid:t.uid,email:e.email||t.email,nombre:e.nombre||t.displayName||"Operadora",role:e.role}:{uid:t.uid,email:t.email,nombre:t.displayName||"Usuario sin permisos",role:"unauthorized"}:null}function WV({children:t}){const[e,n]=W.useState(null),[r,i]=W.useState(null),[s,o]=W.useState(!0);W.useEffect(()=>Rb(cg,async c=>{if(o(!0),!c){n(null),i(null),o(!1);return}let h=null;try{h=await UV(c.uid)}catch(f){console.error("No se pudo cargar el perfil.",f)}n(c),i(qV(c,h)),o(!1)}),[]);const a=W.useMemo(()=>({authUser:e,profile:r,loading:s,role:(r==null?void 0:r.role)||null,isAuthenticated:!!e,isSuperAdmin:(r==null?void 0:r.role)==="superadmin",isSeller:(r==null?void 0:r.role)==="seller",login:BV,logout:zV}),[e,s,r]);return L.jsx(dA.Provider,{value:a,children:t})}function GV(){return W.useContext(dA)}const fA=W.createContext(null);let f0=0;function KV({children:t}){const[e,n]=W.useState([]),r=W.useCallback(o=>{n(a=>a.filter(u=>u.id!==o))},[]),i=W.useCallback(({title:o,description:a="",tone:u="neutral"})=>{f0+=1;const c=f0;n(h=>[...h,{id:c,title:o,description:a,tone:u}]),window.setTimeout(()=>{r(c)},4200)},[r]),s=W.useMemo(()=>({showToast:i,dismissToast:r}),[r,i]);return L.jsxs(fA.Provider,{value:s,children:[t,L.jsx("div",{className:"toast-stack","aria-live":"polite","aria-atomic":"true",children:e.map(o=>L.jsxs("div",{className:`toast toast--${o.tone}`,children:[L.jsxs("div",{children:[L.jsx("strong",{children:o.title}),o.description?L.jsx("p",{children:o.description}):null]}),L.jsx("button",{type:"button",className:"icon-button",onClick:()=>r(o.id),"aria-label":"Cerrar notificacion",children:"×"})]},o.id))})]})}function Th(){return W.useContext(fA)}function Tl(){return GV()}function Ih({label:t="Cargando...",fullScreen:e=!1}){return L.jsxs("div",{className:e?"loader-shell loader-shell--fullscreen":"loader-shell",children:[L.jsx("div",{className:"loader"}),L.jsx("span",{children:t})]})}function QV(){const{logout:t}=Tl();return L.jsx("section",{className:"auth-wrapper",children:L.jsxs("div",{className:"auth-card",children:[L.jsx("span",{className:"eyebrow",children:"Sin permisos"}),L.jsx("h1",{children:"Esta cuenta no tiene acceso al panel"}),L.jsx("p",{children:"Si deberia entrar, asignale un rol valido desde el super admin o revisa el email propietario configurado."}),L.jsxs("div",{className:"button-row",children:[L.jsx(FP,{to:"/",className:"ghost-button",children:"Volver al catalogo"}),L.jsx("button",{type:"button",className:"primary-button",onClick:t,children:"Cerrar sesion"})]})]})})}function XV({children:t,allowedRoles:e=[]}){const{isAuthenticated:n,loading:r,role:i}=Tl();return r?L.jsx(Ih,{fullScreen:!0,label:"Validando acceso..."}):n?i==="unauthorized"?L.jsx(QV,{}):e.length>0&&!e.includes(i)?L.jsx(nc,{to:"/admin",replace:!0}):t:L.jsx(nc,{to:"/login",replace:!0})}function YV(){return L.jsx("div",{className:"app-shell app-shell--public",children:L.jsx("main",{className:"public-main",children:L.jsx(CP,{})})})}const JV=Gm(Cr,"products");function ZV(t){return{id:t.id,...t.data()}}function e3(t,e){const n=MI(JV,UI("createdAt","desc"));return $I(n,r=>{t(r.docs.map(ZV))},e)}function hg(){const[t,e]=W.useState([]),[n,r]=W.useState(!0),[i,s]=W.useState("");return W.useEffect(()=>e3(a=>{e(a),r(!1)},a=>{s(a.message||"No se pudieron cargar los productos."),r(!1)}),[]),{products:t,loading:n,error:i}}function el({title:t,description:e}){return L.jsxs("div",{className:"empty-state",children:[L.jsx("strong",{children:t}),L.jsx("p",{children:e})]})}function t3({product:t,onOpen:e}){return L.jsx("button",{type:"button",className:"product-card",onClick:e,"aria-label":`Abrir diseno ${t.codigo}`,children:L.jsxs("div",{className:"product-image-frame",children:[L.jsx("img",{src:t.imageUrl,alt:`Diseno ${t.codigo}`,className:"product-image",loading:"lazy"}),L.jsx("span",{className:"product-code-chip",children:t.codigo})]})})}function n3(t){return t?t instanceof Date?t:typeof t.toDate=="function"?t.toDate():new Date(t):null}function pA(t){const e=Number(t)||0;return e===1?"1 par disponible":`${e} pares disponibles`}function mA(t){const e=n3(t);return!e||Number.isNaN(e.getTime())?"Sin fecha":new Intl.DateTimeFormat("es-PY",{dateStyle:"short",timeStyle:"short"}).format(e)}function Cd(t){return t?t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/(1024*1024)).toFixed(2)} MB`:"0 KB"}function gA(){return`${window.location.origin}${window.location.pathname}#/`}function r3(){const{products:t,loading:e,error:n}=hg(),[r,i]=W.useState(null),s=W.useRef(null),o=r===null?null:t[r],a=()=>{i(null),s.current=null},u=()=>{i(d=>d===null||t.length===0?d:d===0?t.length-1:d-1)},c=()=>{i(d=>d===null||t.length===0?d:d===t.length-1?0:d+1)};W.useEffect(()=>{r!==null&&r>t.length-1&&i(t.length?t.length-1:null)},[r,t.length]),W.useEffect(()=>{if(!o)return;const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=d}},[o]),W.useEffect(()=>{if(!o)return;const d=g=>{g.key==="Escape"&&a(),g.key==="ArrowLeft"&&u(),g.key==="ArrowRight"&&c()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[o,t.length]);const h=d=>{const g=d.touches[0];s.current={x:g.clientX,y:g.clientY}},f=d=>{if(!s.current)return;const g=d.changedTouches[0],v=g.clientX-s.current.x,R=g.clientY-s.current.y;if(s.current=null,!(Math.abs(v)<36||Math.abs(R)>64)){if(v<0){c();return}u()}};return L.jsxs("section",{className:"catalog-page",children:[e?L.jsx(Ih,{label:"Cargando catalogo..."}):null,!e&&n?L.jsx(el,{title:"No se pudo cargar el catalogo",description:n}):null,!e&&!n&&t.length===0?L.jsx(el,{title:"No hay almohadas disponibles",description:"Cuando cargues nuevos disenos desde el panel, apareceran automaticamente aca."}):null,!e&&!n&&t.length>0?L.jsx("div",{className:"catalog-grid","aria-label":"Catalogo publico de almohadas",children:t.map((d,g)=>L.jsx(t3,{product:d,onOpen:()=>i(g)},d.id))}):null,o?L.jsxs("div",{className:"catalog-lightbox",role:"dialog","aria-modal":"true","aria-label":`Vista ampliada del diseno ${o.codigo}`,onClick:a,children:[L.jsx("button",{type:"button",className:"catalog-lightbox-close",onClick:a,"aria-label":"Cerrar visor",children:"Cerrar"}),t.length>1?L.jsxs(L.Fragment,{children:[L.jsx("button",{type:"button",className:"catalog-lightbox-nav catalog-lightbox-nav--prev",onClick:d=>{d.stopPropagation(),u()},"aria-label":"Foto anterior",children:"‹"}),L.jsx("button",{type:"button",className:"catalog-lightbox-nav catalog-lightbox-nav--next",onClick:d=>{d.stopPropagation(),c()},"aria-label":"Foto siguiente",children:"›"})]}):null,L.jsxs("div",{className:"catalog-lightbox-dialog",onClick:d=>d.stopPropagation(),onTouchStart:h,onTouchEnd:f,children:[L.jsx("div",{className:"catalog-lightbox-media",children:L.jsx("img",{src:o.imageUrl,alt:`Diseno ${o.codigo}`,className:"catalog-lightbox-image"})}),L.jsxs("div",{className:"catalog-lightbox-footer",children:[L.jsx("span",{className:"catalog-lightbox-code",children:o.codigo}),L.jsx("span",{className:"catalog-lightbox-stock",children:pA(o.stockPares)})]})]})]}):null]})}function i3(t){return`ALM-${String(t).padStart(4,"0")}`}function s3(t,e){return e.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in t)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(t)}function yA(t,e){return new Promise(function(n,r){let i;return o3(t).then(function(s){try{return i=s,n(new Blob([e.slice(0,2),i,e.slice(2)],{type:"image/jpeg"}))}catch(o){return r(o)}},r)})}const o3=t=>new Promise((e,n)=>{const r=new FileReader;r.addEventListener("load",({target:{result:i}})=>{const s=new DataView(i);let o=0;if(s.getUint16(o)!==65496)return n("not a valid JPEG");for(o+=2;;){const a=s.getUint16(o);if(a===65498)break;const u=s.getUint16(o+2);if(a===65505&&s.getUint32(o+4)===1165519206){const c=o+10;let h;switch(s.getUint16(c)){case 18761:h=!0;break;case 19789:h=!1;break;default:return n("TIFF header contains invalid endian")}if(s.getUint16(c+2,h)!==42)return n("TIFF header contains invalid version");const f=s.getUint32(c+4,h),d=c+f+2+12*s.getUint16(c+f,h);for(let g=c+f+2;g<d;g+=12)if(s.getUint16(g,h)==274){if(s.getUint16(g+2,h)!==3)return n("Orientation data type is invalid");if(s.getUint32(g+4,h)!==1)return n("Orientation data count is invalid");s.setUint16(g+8,1,h);break}return e(i.slice(o,o+2+u))}o+=2+u}return e(new Blob)}),r.readAsArrayBuffer(t)});var Sc={},a3={get exports(){return Sc},set exports(t){Sc=t}};(function(t){var e,n,r={};a3.exports=r,r.parse=function(i,s){for(var o=r.bin.readUshort,a=r.bin.readUint,u=0,c={},h=new Uint8Array(i),f=h.length-4;a(h,f)!=101010256;)f--;u=f,u+=4;var d=o(h,u+=4);o(h,u+=2);var g=a(h,u+=2),v=a(h,u+=4);u+=4,u=v;for(var R=0;R<d;R++){a(h,u),u+=4,u+=4,u+=4,a(h,u+=4),g=a(h,u+=4);var b=a(h,u+=4),E=o(h,u+=4),S=o(h,u+2),C=o(h,u+4);u+=6;var D=a(h,u+=8);u+=4,u+=E+S+C,r._readLocal(h,D,c,g,b,s)}return c},r._readLocal=function(i,s,o,a,u,c){var h=r.bin.readUshort,f=r.bin.readUint;f(i,s),h(i,s+=4),h(i,s+=2);var d=h(i,s+=2);f(i,s+=2),f(i,s+=4),s+=4;var g=h(i,s+=8),v=h(i,s+=2);s+=2;var R=r.bin.readUTF8(i,s,g);if(s+=g,s+=v,c)o[R]={size:u,csize:a};else{var b=new Uint8Array(i.buffer,s);if(d==0)o[R]=new Uint8Array(b.buffer.slice(s,s+a));else{if(d!=8)throw"unknown compression method: "+d;var E=new Uint8Array(u);r.inflateRaw(b,E),o[R]=E}}},r.inflateRaw=function(i,s){return r.F.inflate(i,s)},r.inflate=function(i,s){return i[0],i[1],r.inflateRaw(new Uint8Array(i.buffer,i.byteOffset+2,i.length-6),s)},r.deflate=function(i,s){s==null&&(s={level:6});var o=0,a=new Uint8Array(50+Math.floor(1.1*i.length));a[o]=120,a[o+1]=156,o+=2,o=r.F.deflateRaw(i,a,o,s.level);var u=r.adler(i,0,i.length);return a[o+0]=u>>>24&255,a[o+1]=u>>>16&255,a[o+2]=u>>>8&255,a[o+3]=u>>>0&255,new Uint8Array(a.buffer,0,o+4)},r.deflateRaw=function(i,s){s==null&&(s={level:6});var o=new Uint8Array(50+Math.floor(1.1*i.length)),a=r.F.deflateRaw(i,o,a,s.level);return new Uint8Array(o.buffer,0,a)},r.encode=function(i,s){s==null&&(s=!1);var o=0,a=r.bin.writeUint,u=r.bin.writeUshort,c={};for(var h in i){var f=!r._noNeed(h)&&!s,d=i[h],g=r.crc.crc(d,0,d.length);c[h]={cpr:f,usize:d.length,crc:g,file:f?r.deflateRaw(d):d}}for(var h in c)o+=c[h].file.length+30+46+2*r.bin.sizeUTF8(h);o+=22;var v=new Uint8Array(o),R=0,b=[];for(var h in c){var E=c[h];b.push(R),R=r._writeHeader(v,R,h,E,0)}var S=0,C=R;for(var h in c)E=c[h],b.push(R),R=r._writeHeader(v,R,h,E,1,b[S++]);var D=R-C;return a(v,R,101010256),R+=4,u(v,R+=4,S),u(v,R+=2,S),a(v,R+=2,D),a(v,R+=4,C),R+=4,R+=2,v.buffer},r._noNeed=function(i){var s=i.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(s)!=-1},r._writeHeader=function(i,s,o,a,u,c){var h=r.bin.writeUint,f=r.bin.writeUshort,d=a.file;return h(i,s,u==0?67324752:33639248),s+=4,u==1&&(s+=2),f(i,s,20),f(i,s+=2,0),f(i,s+=2,a.cpr?8:0),h(i,s+=2,0),h(i,s+=4,a.crc),h(i,s+=4,d.length),h(i,s+=4,a.usize),f(i,s+=4,r.bin.sizeUTF8(o)),f(i,s+=2,0),s+=2,u==1&&(s+=2,s+=2,h(i,s+=6,c),s+=4),s+=r.bin.writeUTF8(i,s,o),u==0&&(i.set(d,s),s+=d.length),s},r.crc={table:function(){for(var i=new Uint32Array(256),s=0;s<256;s++){for(var o=s,a=0;a<8;a++)1&o?o=3988292384^o>>>1:o>>>=1;i[s]=o}return i}(),update:function(i,s,o,a){for(var u=0;u<a;u++)i=r.crc.table[255&(i^s[o+u])]^i>>>8;return i},crc:function(i,s,o){return 4294967295^r.crc.update(4294967295,i,s,o)}},r.adler=function(i,s,o){for(var a=1,u=0,c=s,h=s+o;c<h;){for(var f=Math.min(c+5552,h);c<f;)u+=a+=i[c++];a%=65521,u%=65521}return u<<16|a},r.bin={readUshort:function(i,s){return i[s]|i[s+1]<<8},writeUshort:function(i,s,o){i[s]=255&o,i[s+1]=o>>8&255},readUint:function(i,s){return 16777216*i[s+3]+(i[s+2]<<16|i[s+1]<<8|i[s])},writeUint:function(i,s,o){i[s]=255&o,i[s+1]=o>>8&255,i[s+2]=o>>16&255,i[s+3]=o>>24&255},readASCII:function(i,s,o){for(var a="",u=0;u<o;u++)a+=String.fromCharCode(i[s+u]);return a},writeASCII:function(i,s,o){for(var a=0;a<o.length;a++)i[s+a]=o.charCodeAt(a)},pad:function(i){return i.length<2?"0"+i:i},readUTF8:function(i,s,o){for(var a,u="",c=0;c<o;c++)u+="%"+r.bin.pad(i[s+c].toString(16));try{a=decodeURIComponent(u)}catch{return r.bin.readASCII(i,s,o)}return a},writeUTF8:function(i,s,o){for(var a=o.length,u=0,c=0;c<a;c++){var h=o.charCodeAt(c);if(!(4294967168&h))i[s+u]=h,u++;else if(!(4294965248&h))i[s+u]=192|h>>6,i[s+u+1]=128|h>>0&63,u+=2;else if(!(4294901760&h))i[s+u]=224|h>>12,i[s+u+1]=128|h>>6&63,i[s+u+2]=128|h>>0&63,u+=3;else{if(4292870144&h)throw"e";i[s+u]=240|h>>18,i[s+u+1]=128|h>>12&63,i[s+u+2]=128|h>>6&63,i[s+u+3]=128|h>>0&63,u+=4}}return u},sizeUTF8:function(i){for(var s=i.length,o=0,a=0;a<s;a++){var u=i.charCodeAt(a);if(!(4294967168&u))o++;else if(!(4294965248&u))o+=2;else if(!(4294901760&u))o+=3;else{if(4292870144&u)throw"e";o+=4}}return o}},r.F={},r.F.deflateRaw=function(i,s,o,a){var u=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][a],c=r.F.U,h=r.F._goodIndex;r.F._hash;var f=r.F._putsE,d=0,g=o<<3,v=0,R=i.length;if(a==0){for(;d<R;)f(s,g,d+(A=Math.min(65535,R-d))==R?1:0),g=r.F._copyExact(i,d,A,s,g+8),d+=A;return g>>>3}var b=c.lits,E=c.strt,S=c.prev,C=0,D=0,M=0,x=0,T=0,m=0;for(R>2&&(E[m=r.F._hash(i,0)]=0),d=0;d<R;d++){if(T=m,d+1<R-2){m=r.F._hash(i,d+1);var y=d+1&32767;S[y]=E[m],E[m]=y}if(v<=d){(C>14e3||D>26697)&&R-d>100&&(v<d&&(b[C]=d-v,C+=2,v=d),g=r.F._writeBlock(d==R-1||v==R?1:0,b,C,x,i,M,d-M,s,g),C=D=x=0,M=d);var w=0;d<R-2&&(w=r.F._bestMatch(i,d,S,T,Math.min(u[2],R-d),u[3]));var A=w>>>16,P=65535&w;if(w!=0){P=65535&w;var I=h(A=w>>>16,c.of0);c.lhst[257+I]++;var V=h(P,c.df0);c.dhst[V]++,x+=c.exb[I]+c.dxb[V],b[C]=A<<23|d-v,b[C+1]=P<<16|I<<8|V,C+=2,v=d+A}else c.lhst[i[d]]++;D++}}for(M==d&&i.length!=0||(v<d&&(b[C]=d-v,C+=2,v=d),g=r.F._writeBlock(1,b,C,x,i,M,d-M,s,g),C=0,D=0,C=D=x=0,M=d);7&g;)g++;return g>>>3},r.F._bestMatch=function(i,s,o,a,u,c){var h=32767&s,f=o[h],d=h-f+32768&32767;if(f==h||a!=r.F._hash(i,s-d))return 0;for(var g=0,v=0,R=Math.min(32767,s);d<=R&&--c!=0&&f!=h;){if(g==0||i[s+g]==i[s+g-d]){var b=r.F._howLong(i,s,d);if(b>g){if(v=d,(g=b)>=u)break;d+2<b&&(b=d+2);for(var E=0,S=0;S<b-2;S++){var C=s-d+S+32768&32767,D=C-o[C]+32768&32767;D>E&&(E=D,f=C)}}}d+=(h=f)-(f=o[h])+32768&32767}return g<<16|v},r.F._howLong=function(i,s,o){if(i[s]!=i[s-o]||i[s+1]!=i[s+1-o]||i[s+2]!=i[s+2-o])return 0;var a=s,u=Math.min(i.length,s+258);for(s+=3;s<u&&i[s]==i[s-o];)s++;return s-a},r.F._hash=function(i,s){return(i[s]<<8|i[s+1])+(i[s+2]<<4)&65535},r.saved=0,r.F._writeBlock=function(i,s,o,a,u,c,h,f,d){var g,v,R,b,E,S,C,D,M,x=r.F.U,T=r.F._putsF,m=r.F._putsE;x.lhst[256]++,v=(g=r.F.getTrees())[0],R=g[1],b=g[2],E=g[3],S=g[4],C=g[5],D=g[6],M=g[7];var y=32+(d+3&7?8-(d+3&7):0)+(h<<3),w=a+r.F.contSize(x.fltree,x.lhst)+r.F.contSize(x.fdtree,x.dhst),A=a+r.F.contSize(x.ltree,x.lhst)+r.F.contSize(x.dtree,x.dhst);A+=14+3*C+r.F.contSize(x.itree,x.ihst)+(2*x.ihst[16]+3*x.ihst[17]+7*x.ihst[18]);for(var P=0;P<286;P++)x.lhst[P]=0;for(P=0;P<30;P++)x.dhst[P]=0;for(P=0;P<19;P++)x.ihst[P]=0;var I=y<w&&y<A?0:w<A?1:2;if(T(f,d,i),T(f,d+1,I),d+=3,I==0){for(;7&d;)d++;d=r.F._copyExact(u,c,h,f,d)}else{var V,B;if(I==1&&(V=x.fltree,B=x.fdtree),I==2){r.F.makeCodes(x.ltree,v),r.F.revCodes(x.ltree,v),r.F.makeCodes(x.dtree,R),r.F.revCodes(x.dtree,R),r.F.makeCodes(x.itree,b),r.F.revCodes(x.itree,b),V=x.ltree,B=x.dtree,m(f,d,E-257),m(f,d+=5,S-1),m(f,d+=5,C-4),d+=4;for(var O=0;O<C;O++)m(f,d+3*O,x.itree[1+(x.ordr[O]<<1)]);d+=3*C,d=r.F._codeTiny(D,x.itree,f,d),d=r.F._codeTiny(M,x.itree,f,d)}for(var N=c,F=0;F<o;F+=2){for(var U=s[F],z=U>>>23,Z=N+(8388607&U);N<Z;)d=r.F._writeLit(u[N++],V,f,d);if(z!=0){var K=s[F+1],Y=K>>16,Q=K>>8&255,H=255&K;m(f,d=r.F._writeLit(257+Q,V,f,d),z-x.of0[Q]),d+=x.exb[Q],T(f,d=r.F._writeLit(H,B,f,d),Y-x.df0[H]),d+=x.dxb[H],N+=z}}d=r.F._writeLit(256,V,f,d)}return d},r.F._copyExact=function(i,s,o,a,u){var c=u>>>3;return a[c]=o,a[c+1]=o>>>8,a[c+2]=255-a[c],a[c+3]=255-a[c+1],c+=4,a.set(new Uint8Array(i.buffer,s,o),c),u+(o+4<<3)},r.F.getTrees=function(){for(var i=r.F.U,s=r.F._hufTree(i.lhst,i.ltree,15),o=r.F._hufTree(i.dhst,i.dtree,15),a=[],u=r.F._lenCodes(i.ltree,a),c=[],h=r.F._lenCodes(i.dtree,c),f=0;f<a.length;f+=2)i.ihst[a[f]]++;for(f=0;f<c.length;f+=2)i.ihst[c[f]]++;for(var d=r.F._hufTree(i.ihst,i.itree,7),g=19;g>4&&i.itree[1+(i.ordr[g-1]<<1)]==0;)g--;return[s,o,d,u,h,g,a,c]},r.F.getSecond=function(i){for(var s=[],o=0;o<i.length;o+=2)s.push(i[o+1]);return s},r.F.nonZero=function(i){for(var s="",o=0;o<i.length;o+=2)i[o+1]!=0&&(s+=(o>>1)+",");return s},r.F.contSize=function(i,s){for(var o=0,a=0;a<s.length;a++)o+=s[a]*i[1+(a<<1)];return o},r.F._codeTiny=function(i,s,o,a){for(var u=0;u<i.length;u+=2){var c=i[u],h=i[u+1];a=r.F._writeLit(c,s,o,a);var f=c==16?2:c==17?3:7;c>15&&(r.F._putsE(o,a,h,f),a+=f)}return a},r.F._lenCodes=function(i,s){for(var o=i.length;o!=2&&i[o-1]==0;)o-=2;for(var a=0;a<o;a+=2){var u=i[a+1],c=a+3<o?i[a+3]:-1,h=a+5<o?i[a+5]:-1,f=a==0?-1:i[a-1];if(u==0&&c==u&&h==u){for(var d=a+5;d+2<o&&i[d+2]==u;)d+=2;(g=Math.min(d+1-a>>>1,138))<11?s.push(17,g-3):s.push(18,g-11),a+=2*g-2}else if(u==f&&c==u&&h==u){for(d=a+5;d+2<o&&i[d+2]==u;)d+=2;var g=Math.min(d+1-a>>>1,6);s.push(16,g-3),a+=2*g-2}else s.push(u,0)}return o>>>1},r.F._hufTree=function(i,s,o){var a=[],u=i.length,c=s.length,h=0;for(h=0;h<c;h+=2)s[h]=0,s[h+1]=0;for(h=0;h<u;h++)i[h]!=0&&a.push({lit:h,f:i[h]});var f=a.length,d=a.slice(0);if(f==0)return 0;if(f==1){var g=a[0].lit;return d=g==0?1:0,s[1+(g<<1)]=1,s[1+(d<<1)]=1,1}a.sort(function(D,M){return D.f-M.f});var v=a[0],R=a[1],b=0,E=1,S=2;for(a[0]={lit:-1,f:v.f+R.f,l:v,r:R,d:0};E!=f-1;)v=b!=E&&(S==f||a[b].f<a[S].f)?a[b++]:a[S++],R=b!=E&&(S==f||a[b].f<a[S].f)?a[b++]:a[S++],a[E++]={lit:-1,f:v.f+R.f,l:v,r:R};var C=r.F.setDepth(a[E-1],0);for(C>o&&(r.F.restrictDepth(d,o,C),C=o),h=0;h<f;h++)s[1+(d[h].lit<<1)]=d[h].d;return C},r.F.setDepth=function(i,s){return i.lit!=-1?(i.d=s,s):Math.max(r.F.setDepth(i.l,s+1),r.F.setDepth(i.r,s+1))},r.F.restrictDepth=function(i,s,o){var a=0,u=1<<o-s,c=0;for(i.sort(function(f,d){return d.d==f.d?f.f-d.f:d.d-f.d}),a=0;a<i.length&&i[a].d>s;a++){var h=i[a].d;i[a].d=s,c+=u-(1<<o-h)}for(c>>>=o-s;c>0;)(h=i[a].d)<s?(i[a].d++,c-=1<<s-h-1):a++;for(;a>=0;a--)i[a].d==s&&c<0&&(i[a].d--,c++);c!=0&&console.log("debt left")},r.F._goodIndex=function(i,s){var o=0;return s[16|o]<=i&&(o|=16),s[8|o]<=i&&(o|=8),s[4|o]<=i&&(o|=4),s[2|o]<=i&&(o|=2),s[1|o]<=i&&(o|=1),o},r.F._writeLit=function(i,s,o,a){return r.F._putsF(o,a,s[i<<1]),a+s[1+(i<<1)]},r.F.inflate=function(i,s){var o=Uint8Array;if(i[0]==3&&i[1]==0)return s||new o(0);var a=r.F,u=a._bitsF,c=a._bitsE,h=a._decodeTiny,f=a.makeCodes,d=a.codes2map,g=a._get17,v=a.U,R=s==null;R&&(s=new o(i.length>>>2<<3));for(var b,E,S=0,C=0,D=0,M=0,x=0,T=0,m=0,y=0,w=0;S==0;)if(S=u(i,w,1),C=u(i,w+1,2),w+=3,C!=0){if(R&&(s=r.F._check(s,y+(1<<17))),C==1&&(b=v.flmap,E=v.fdmap,T=511,m=31),C==2){D=c(i,w,5)+257,M=c(i,w+5,5)+1,x=c(i,w+10,4)+4,w+=14;for(var A=0;A<38;A+=2)v.itree[A]=0,v.itree[A+1]=0;var P=1;for(A=0;A<x;A++){var I=c(i,w+3*A,3);v.itree[1+(v.ordr[A]<<1)]=I,I>P&&(P=I)}w+=3*x,f(v.itree,P),d(v.itree,P,v.imap),b=v.lmap,E=v.dmap,w=h(v.imap,(1<<P)-1,D+M,i,w,v.ttree);var V=a._copyOut(v.ttree,0,D,v.ltree);T=(1<<V)-1;var B=a._copyOut(v.ttree,D,M,v.dtree);m=(1<<B)-1,f(v.ltree,V),d(v.ltree,V,b),f(v.dtree,B),d(v.dtree,B,E)}for(;;){var O=b[g(i,w)&T];w+=15&O;var N=O>>>4;if(!(N>>>8))s[y++]=N;else{if(N==256)break;var F=y+N-254;if(N>264){var U=v.ldef[N-257];F=y+(U>>>3)+c(i,w,7&U),w+=7&U}var z=E[g(i,w)&m];w+=15&z;var Z=z>>>4,K=v.ddef[Z],Y=(K>>>4)+u(i,w,15&K);for(w+=15&K,R&&(s=r.F._check(s,y+(1<<17)));y<F;)s[y]=s[y++-Y],s[y]=s[y++-Y],s[y]=s[y++-Y],s[y]=s[y++-Y];y=F}}}else{7&w&&(w+=8-(7&w));var Q=4+(w>>>3),H=i[Q-4]|i[Q-3]<<8;R&&(s=r.F._check(s,y+H)),s.set(new o(i.buffer,i.byteOffset+Q,H),y),w=Q+H<<3,y+=H}return s.length==y?s:s.slice(0,y)},r.F._check=function(i,s){var o=i.length;if(s<=o)return i;var a=new Uint8Array(Math.max(o<<1,s));return a.set(i,0),a},r.F._decodeTiny=function(i,s,o,a,u,c){for(var h=r.F._bitsE,f=r.F._get17,d=0;d<o;){var g=i[f(a,u)&s];u+=15&g;var v=g>>>4;if(v<=15)c[d]=v,d++;else{var R=0,b=0;v==16?(b=3+h(a,u,2),u+=2,R=c[d-1]):v==17?(b=3+h(a,u,3),u+=3):v==18&&(b=11+h(a,u,7),u+=7);for(var E=d+b;d<E;)c[d]=R,d++}}return u},r.F._copyOut=function(i,s,o,a){for(var u=0,c=0,h=a.length>>>1;c<o;){var f=i[c+s];a[c<<1]=0,a[1+(c<<1)]=f,f>u&&(u=f),c++}for(;c<h;)a[c<<1]=0,a[1+(c<<1)]=0,c++;return u},r.F.makeCodes=function(i,s){for(var o,a,u,c,h=r.F.U,f=i.length,d=h.bl_count,g=0;g<=s;g++)d[g]=0;for(g=1;g<f;g+=2)d[i[g]]++;var v=h.next_code;for(o=0,d[0]=0,a=1;a<=s;a++)o=o+d[a-1]<<1,v[a]=o;for(u=0;u<f;u+=2)(c=i[u+1])!=0&&(i[u]=v[c],v[c]++)},r.F.codes2map=function(i,s,o){for(var a=i.length,u=r.F.U.rev15,c=0;c<a;c+=2)if(i[c+1]!=0)for(var h=c>>1,f=i[c+1],d=h<<4|f,g=s-f,v=i[c]<<g,R=v+(1<<g);v!=R;)o[u[v]>>>15-s]=d,v++},r.F.revCodes=function(i,s){for(var o=r.F.U.rev15,a=15-s,u=0;u<i.length;u+=2){var c=i[u]<<s-i[u+1];i[u]=o[c]>>>a}},r.F._putsE=function(i,s,o){o<<=7&s;var a=s>>>3;i[a]|=o,i[a+1]|=o>>>8},r.F._putsF=function(i,s,o){o<<=7&s;var a=s>>>3;i[a]|=o,i[a+1]|=o>>>8,i[a+2]|=o>>>16},r.F._bitsE=function(i,s,o){return(i[s>>>3]|i[1+(s>>>3)]<<8)>>>(7&s)&(1<<o)-1},r.F._bitsF=function(i,s,o){return(i[s>>>3]|i[1+(s>>>3)]<<8|i[2+(s>>>3)]<<16)>>>(7&s)&(1<<o)-1},r.F._get17=function(i,s){return(i[s>>>3]|i[1+(s>>>3)]<<8|i[2+(s>>>3)]<<16)>>>(7&s)},r.F._get25=function(i,s){return(i[s>>>3]|i[1+(s>>>3)]<<8|i[2+(s>>>3)]<<16|i[3+(s>>>3)]<<24)>>>(7&s)},r.F.U=(e=Uint16Array,n=Uint32Array,{next_code:new e(16),bl_count:new e(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new e(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new n(32),flmap:new e(512),fltree:[],fdmap:new e(32),fdtree:[],lmap:new e(32768),ltree:[],ttree:[],dmap:new e(32768),dtree:[],imap:new e(512),itree:[],rev15:new e(32768),lhst:new n(286),dhst:new n(30),ihst:new n(19),lits:new n(15e3),strt:new e(65536),prev:new e(32768)}),function(){for(var i=r.F.U,s=0;s<32768;s++){var o=s;o=(4278255360&(o=(4042322160&(o=(3435973836&(o=(2863311530&o)>>>1|(1431655765&o)<<1))>>>2|(858993459&o)<<2))>>>4|(252645135&o)<<4))>>>8|(16711935&o)<<8,i.rev15[s]=(o>>>16|o<<16)>>>17}function a(u,c,h){for(;c--!=0;)u.push(0,h)}for(s=0;s<32;s++)i.ldef[s]=i.of0[s]<<3|i.exb[s],i.ddef[s]=i.df0[s]<<4|i.dxb[s];a(i.fltree,144,8),a(i.fltree,112,9),a(i.fltree,24,7),a(i.fltree,8,8),r.F.makeCodes(i.fltree,9),r.F.codes2map(i.fltree,9,i.flmap),r.F.revCodes(i.fltree,9),a(i.fdtree,32,5),r.F.makeCodes(i.fdtree,5),r.F.codes2map(i.fdtree,5,i.fdmap),r.F.revCodes(i.fdtree,5),a(i.itree,19,0),a(i.ltree,286,0),a(i.dtree,30,0),a(i.ttree,320,0)}()})();var l3=s3({__proto__:null,default:Sc},[Sc]);const On=function(){var t={nextZero(h,f){for(;h[f]!=0;)f++;return f},readUshort:(h,f)=>h[f]<<8|h[f+1],writeUshort(h,f,d){h[f]=d>>8&255,h[f+1]=255&d},readUint:(h,f)=>16777216*h[f]+(h[f+1]<<16|h[f+2]<<8|h[f+3]),writeUint(h,f,d){h[f]=d>>24&255,h[f+1]=d>>16&255,h[f+2]=d>>8&255,h[f+3]=255&d},readASCII(h,f,d){let g="";for(let v=0;v<d;v++)g+=String.fromCharCode(h[f+v]);return g},writeASCII(h,f,d){for(let g=0;g<d.length;g++)h[f+g]=d.charCodeAt(g)},readBytes(h,f,d){const g=[];for(let v=0;v<d;v++)g.push(h[f+v]);return g},pad:h=>h.length<2?`0${h}`:h,readUTF8(h,f,d){let g,v="";for(let R=0;R<d;R++)v+=`%${t.pad(h[f+R].toString(16))}`;try{g=decodeURIComponent(v)}catch{return t.readASCII(h,f,d)}return g}};function e(h,f,d,g){const v=f*d,R=s(g),b=Math.ceil(f*R/8),E=new Uint8Array(4*v),S=new Uint32Array(E.buffer),{ctype:C}=g,{depth:D}=g,M=t.readUshort;if(C==6){const U=v<<2;if(D==8)for(var x=0;x<U;x+=4)E[x]=h[x],E[x+1]=h[x+1],E[x+2]=h[x+2],E[x+3]=h[x+3];if(D==16)for(x=0;x<U;x++)E[x]=h[x<<1]}else if(C==2){const U=g.tabs.tRNS;if(U==null){if(D==8)for(x=0;x<v;x++){var T=3*x;S[x]=255<<24|h[T+2]<<16|h[T+1]<<8|h[T]}if(D==16)for(x=0;x<v;x++)T=6*x,S[x]=255<<24|h[T+4]<<16|h[T+2]<<8|h[T]}else{var m=U[0];const z=U[1],Z=U[2];if(D==8)for(x=0;x<v;x++){var y=x<<2;T=3*x,S[x]=255<<24|h[T+2]<<16|h[T+1]<<8|h[T],h[T]==m&&h[T+1]==z&&h[T+2]==Z&&(E[y+3]=0)}if(D==16)for(x=0;x<v;x++)y=x<<2,T=6*x,S[x]=255<<24|h[T+4]<<16|h[T+2]<<8|h[T],M(h,T)==m&&M(h,T+2)==z&&M(h,T+4)==Z&&(E[y+3]=0)}}else if(C==3){const U=g.tabs.PLTE,z=g.tabs.tRNS,Z=z?z.length:0;if(D==1)for(var w=0;w<d;w++){var A=w*b,P=w*f;for(x=0;x<f;x++){y=P+x<<2;var I=3*(V=h[A+(x>>3)]>>7-((7&x)<<0)&1);E[y]=U[I],E[y+1]=U[I+1],E[y+2]=U[I+2],E[y+3]=V<Z?z[V]:255}}if(D==2)for(w=0;w<d;w++)for(A=w*b,P=w*f,x=0;x<f;x++)y=P+x<<2,I=3*(V=h[A+(x>>2)]>>6-((3&x)<<1)&3),E[y]=U[I],E[y+1]=U[I+1],E[y+2]=U[I+2],E[y+3]=V<Z?z[V]:255;if(D==4)for(w=0;w<d;w++)for(A=w*b,P=w*f,x=0;x<f;x++)y=P+x<<2,I=3*(V=h[A+(x>>1)]>>4-((1&x)<<2)&15),E[y]=U[I],E[y+1]=U[I+1],E[y+2]=U[I+2],E[y+3]=V<Z?z[V]:255;if(D==8)for(x=0;x<v;x++){var V;y=x<<2,I=3*(V=h[x]),E[y]=U[I],E[y+1]=U[I+1],E[y+2]=U[I+2],E[y+3]=V<Z?z[V]:255}}else if(C==4){if(D==8)for(x=0;x<v;x++){y=x<<2;var B=h[O=x<<1];E[y]=B,E[y+1]=B,E[y+2]=B,E[y+3]=h[O+1]}if(D==16)for(x=0;x<v;x++){var O;y=x<<2,B=h[O=x<<2],E[y]=B,E[y+1]=B,E[y+2]=B,E[y+3]=h[O+2]}}else if(C==0)for(m=g.tabs.tRNS?g.tabs.tRNS:-1,w=0;w<d;w++){const U=w*b,z=w*f;if(D==1)for(var N=0;N<f;N++){var F=(B=255*(h[U+(N>>>3)]>>>7-(7&N)&1))==255*m?0:255;S[z+N]=F<<24|B<<16|B<<8|B}else if(D==2)for(N=0;N<f;N++)F=(B=85*(h[U+(N>>>2)]>>>6-((3&N)<<1)&3))==85*m?0:255,S[z+N]=F<<24|B<<16|B<<8|B;else if(D==4)for(N=0;N<f;N++)F=(B=17*(h[U+(N>>>1)]>>>4-((1&N)<<2)&15))==17*m?0:255,S[z+N]=F<<24|B<<16|B<<8|B;else if(D==8)for(N=0;N<f;N++)F=(B=h[U+N])==m?0:255,S[z+N]=F<<24|B<<16|B<<8|B;else if(D==16)for(N=0;N<f;N++)B=h[U+(N<<1)],F=M(h,U+(N<<1))==m?0:255,S[z+N]=F<<24|B<<16|B<<8|B}return E}function n(h,f,d,g){const v=s(h),R=Math.ceil(d*v/8),b=new Uint8Array((R+1+h.interlace)*g);return f=h.tabs.CgBI?i(f,b):r(f,b),h.interlace==0?f=o(f,h,0,d,g):h.interlace==1&&(f=function(S,C){const D=C.width,M=C.height,x=s(C),T=x>>3,m=Math.ceil(D*x/8),y=new Uint8Array(M*m);let w=0;const A=[0,0,4,0,2,0,1],P=[0,4,0,2,0,1,0],I=[8,8,8,4,4,2,2],V=[8,8,4,4,2,2,1];let B=0;for(;B<7;){const N=I[B],F=V[B];let U=0,z=0,Z=A[B];for(;Z<M;)Z+=N,z++;let K=P[B];for(;K<D;)K+=F,U++;const Y=Math.ceil(U*x/8);o(S,C,w,U,z);let Q=0,H=A[B];for(;H<M;){let ie=P[B],fe=w+Q*Y<<3;for(;ie<D;){var O;if(x==1&&(O=(O=S[fe>>3])>>7-(7&fe)&1,y[H*m+(ie>>3)]|=O<<7-((7&ie)<<0)),x==2&&(O=(O=S[fe>>3])>>6-(7&fe)&3,y[H*m+(ie>>2)]|=O<<6-((3&ie)<<1)),x==4&&(O=(O=S[fe>>3])>>4-(7&fe)&15,y[H*m+(ie>>1)]|=O<<4-((1&ie)<<2)),x>=8){const we=H*m+ie*T;for(let ye=0;ye<T;ye++)y[we+ye]=S[(fe>>3)+ye]}fe+=x,ie+=F}Q++,H+=N}U*z!=0&&(w+=z*(1+Y)),B+=1}return y}(f,h)),f}function r(h,f){return i(new Uint8Array(h.buffer,2,h.length-6),f)}var i=function(){const h={H:{}};return h.H.N=function(f,d){const g=Uint8Array;let v,R,b=0,E=0,S=0,C=0,D=0,M=0,x=0,T=0,m=0;if(f[0]==3&&f[1]==0)return d||new g(0);const y=h.H,w=y.b,A=y.e,P=y.R,I=y.n,V=y.A,B=y.Z,O=y.m,N=d==null;for(N&&(d=new g(f.length>>>2<<5));b==0;)if(b=w(f,m,1),E=w(f,m+1,2),m+=3,E!=0){if(N&&(d=h.H.W(d,T+(1<<17))),E==1&&(v=O.J,R=O.h,M=511,x=31),E==2){S=A(f,m,5)+257,C=A(f,m+5,5)+1,D=A(f,m+10,4)+4,m+=14;let U=1;for(var F=0;F<38;F+=2)O.Q[F]=0,O.Q[F+1]=0;for(F=0;F<D;F++){const K=A(f,m+3*F,3);O.Q[1+(O.X[F]<<1)]=K,K>U&&(U=K)}m+=3*D,I(O.Q,U),V(O.Q,U,O.u),v=O.w,R=O.d,m=P(O.u,(1<<U)-1,S+C,f,m,O.v);const z=y.V(O.v,0,S,O.C);M=(1<<z)-1;const Z=y.V(O.v,S,C,O.D);x=(1<<Z)-1,I(O.C,z),V(O.C,z,v),I(O.D,Z),V(O.D,Z,R)}for(;;){const U=v[B(f,m)&M];m+=15&U;const z=U>>>4;if(!(z>>>8))d[T++]=z;else{if(z==256)break;{let Z=T+z-254;if(z>264){const ie=O.q[z-257];Z=T+(ie>>>3)+A(f,m,7&ie),m+=7&ie}const K=R[B(f,m)&x];m+=15&K;const Y=K>>>4,Q=O.c[Y],H=(Q>>>4)+w(f,m,15&Q);for(m+=15&Q;T<Z;)d[T]=d[T++-H],d[T]=d[T++-H],d[T]=d[T++-H],d[T]=d[T++-H];T=Z}}}}else{7&m&&(m+=8-(7&m));const U=4+(m>>>3),z=f[U-4]|f[U-3]<<8;N&&(d=h.H.W(d,T+z)),d.set(new g(f.buffer,f.byteOffset+U,z),T),m=U+z<<3,T+=z}return d.length==T?d:d.slice(0,T)},h.H.W=function(f,d){const g=f.length;if(d<=g)return f;const v=new Uint8Array(g<<1);return v.set(f,0),v},h.H.R=function(f,d,g,v,R,b){const E=h.H.e,S=h.H.Z;let C=0;for(;C<g;){const D=f[S(v,R)&d];R+=15&D;const M=D>>>4;if(M<=15)b[C]=M,C++;else{let x=0,T=0;M==16?(T=3+E(v,R,2),R+=2,x=b[C-1]):M==17?(T=3+E(v,R,3),R+=3):M==18&&(T=11+E(v,R,7),R+=7);const m=C+T;for(;C<m;)b[C]=x,C++}}return R},h.H.V=function(f,d,g,v){let R=0,b=0;const E=v.length>>>1;for(;b<g;){const S=f[b+d];v[b<<1]=0,v[1+(b<<1)]=S,S>R&&(R=S),b++}for(;b<E;)v[b<<1]=0,v[1+(b<<1)]=0,b++;return R},h.H.n=function(f,d){const g=h.H.m,v=f.length;let R,b,E,S;const C=g.j;for(var D=0;D<=d;D++)C[D]=0;for(D=1;D<v;D+=2)C[f[D]]++;const M=g.K;for(R=0,C[0]=0,b=1;b<=d;b++)R=R+C[b-1]<<1,M[b]=R;for(E=0;E<v;E+=2)S=f[E+1],S!=0&&(f[E]=M[S],M[S]++)},h.H.A=function(f,d,g){const v=f.length,R=h.H.m.r;for(let b=0;b<v;b+=2)if(f[b+1]!=0){const E=b>>1,S=f[b+1],C=E<<4|S,D=d-S;let M=f[b]<<D;const x=M+(1<<D);for(;M!=x;)g[R[M]>>>15-d]=C,M++}},h.H.l=function(f,d){const g=h.H.m.r,v=15-d;for(let R=0;R<f.length;R+=2){const b=f[R]<<d-f[R+1];f[R]=g[b]>>>v}},h.H.M=function(f,d,g){g<<=7&d;const v=d>>>3;f[v]|=g,f[v+1]|=g>>>8},h.H.I=function(f,d,g){g<<=7&d;const v=d>>>3;f[v]|=g,f[v+1]|=g>>>8,f[v+2]|=g>>>16},h.H.e=function(f,d,g){return(f[d>>>3]|f[1+(d>>>3)]<<8)>>>(7&d)&(1<<g)-1},h.H.b=function(f,d,g){return(f[d>>>3]|f[1+(d>>>3)]<<8|f[2+(d>>>3)]<<16)>>>(7&d)&(1<<g)-1},h.H.Z=function(f,d){return(f[d>>>3]|f[1+(d>>>3)]<<8|f[2+(d>>>3)]<<16)>>>(7&d)},h.H.i=function(f,d){return(f[d>>>3]|f[1+(d>>>3)]<<8|f[2+(d>>>3)]<<16|f[3+(d>>>3)]<<24)>>>(7&d)},h.H.m=function(){const f=Uint16Array,d=Uint32Array;return{K:new f(16),j:new f(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new f(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new d(32),J:new f(512),_:[],h:new f(32),$:[],w:new f(32768),C:[],v:[],d:new f(32768),D:[],u:new f(512),Q:[],r:new f(32768),s:new d(286),Y:new d(30),a:new d(19),t:new d(15e3),k:new f(65536),g:new f(32768)}}(),function(){const f=h.H.m;for(var d=0;d<32768;d++){let v=d;v=(2863311530&v)>>>1|(1431655765&v)<<1,v=(3435973836&v)>>>2|(858993459&v)<<2,v=(4042322160&v)>>>4|(252645135&v)<<4,v=(4278255360&v)>>>8|(16711935&v)<<8,f.r[d]=(v>>>16|v<<16)>>>17}function g(v,R,b){for(;R--!=0;)v.push(0,b)}for(d=0;d<32;d++)f.q[d]=f.S[d]<<3|f.T[d],f.c[d]=f.p[d]<<4|f.z[d];g(f._,144,8),g(f._,112,9),g(f._,24,7),g(f._,8,8),h.H.n(f._,9),h.H.A(f._,9,f.J),h.H.l(f._,9),g(f.$,32,5),h.H.n(f.$,5),h.H.A(f.$,5,f.h),h.H.l(f.$,5),g(f.Q,19,0),g(f.C,286,0),g(f.D,30,0),g(f.v,320,0)}(),h.H.N}();function s(h){return[1,null,3,1,2,null,4][h.ctype]*h.depth}function o(h,f,d,g,v){let R=s(f);const b=Math.ceil(g*R/8);let E,S;R=Math.ceil(R/8);let C=h[d],D=0;if(C>1&&(h[d]=[0,0,1][C-2]),C==3)for(D=R;D<b;D++)h[D+1]=h[D+1]+(h[D+1-R]>>>1)&255;for(let M=0;M<v;M++)if(E=d+M*b,S=E+M+1,C=h[S-1],D=0,C==0)for(;D<b;D++)h[E+D]=h[S+D];else if(C==1){for(;D<R;D++)h[E+D]=h[S+D];for(;D<b;D++)h[E+D]=h[S+D]+h[E+D-R]}else if(C==2)for(;D<b;D++)h[E+D]=h[S+D]+h[E+D-b];else if(C==3){for(;D<R;D++)h[E+D]=h[S+D]+(h[E+D-b]>>>1);for(;D<b;D++)h[E+D]=h[S+D]+(h[E+D-b]+h[E+D-R]>>>1)}else{for(;D<R;D++)h[E+D]=h[S+D]+a(0,h[E+D-b],0);for(;D<b;D++)h[E+D]=h[S+D]+a(h[E+D-R],h[E+D-b],h[E+D-R-b])}return h}function a(h,f,d){const g=h+f-d,v=g-h,R=g-f,b=g-d;return v*v<=R*R&&v*v<=b*b?h:R*R<=b*b?f:d}function u(h,f,d){d.width=t.readUint(h,f),f+=4,d.height=t.readUint(h,f),f+=4,d.depth=h[f],f++,d.ctype=h[f],f++,d.compress=h[f],f++,d.filter=h[f],f++,d.interlace=h[f],f++}function c(h,f,d,g,v,R,b,E,S){const C=Math.min(f,v),D=Math.min(d,R);let M=0,x=0;for(let B=0;B<D;B++)for(let O=0;O<C;O++)if(b>=0&&E>=0?(M=B*f+O<<2,x=(E+B)*v+b+O<<2):(M=(-E+B)*f-b+O<<2,x=B*v+O<<2),S==0)g[x]=h[M],g[x+1]=h[M+1],g[x+2]=h[M+2],g[x+3]=h[M+3];else if(S==1){var T=h[M+3]*.00392156862745098,m=h[M]*T,y=h[M+1]*T,w=h[M+2]*T,A=g[x+3]*(1/255),P=g[x]*A,I=g[x+1]*A,V=g[x+2]*A;const N=1-T,F=T+A*N,U=F==0?0:1/F;g[x+3]=255*F,g[x+0]=(m+P*N)*U,g[x+1]=(y+I*N)*U,g[x+2]=(w+V*N)*U}else if(S==2)T=h[M+3],m=h[M],y=h[M+1],w=h[M+2],A=g[x+3],P=g[x],I=g[x+1],V=g[x+2],T==A&&m==P&&y==I&&w==V?(g[x]=0,g[x+1]=0,g[x+2]=0,g[x+3]=0):(g[x]=m,g[x+1]=y,g[x+2]=w,g[x+3]=T);else if(S==3){if(T=h[M+3],m=h[M],y=h[M+1],w=h[M+2],A=g[x+3],P=g[x],I=g[x+1],V=g[x+2],T==A&&m==P&&y==I&&w==V)continue;if(T<220&&A>20)return!1}return!0}return{decode:function(f){const d=new Uint8Array(f);let g=8;const v=t,R=v.readUshort,b=v.readUint,E={tabs:{},frames:[]},S=new Uint8Array(d.length);let C,D=0,M=0;const x=[137,80,78,71,13,10,26,10];for(var T=0;T<8;T++)if(d[T]!=x[T])throw"The input is not a PNG file!";for(;g<d.length;){const B=v.readUint(d,g);g+=4;const O=v.readASCII(d,g,4);if(g+=4,O=="IHDR")u(d,g,E);else if(O=="iCCP"){for(var m=g;d[m]!=0;)m++;v.readASCII(d,g,m-g),d[m+1];const N=d.slice(m+2,g+B);let F=null;try{F=r(N)}catch{F=i(N)}E.tabs[O]=F}else if(O=="CgBI")E.tabs[O]=d.slice(g,g+4);else if(O=="IDAT"){for(T=0;T<B;T++)S[D+T]=d[g+T];D+=B}else if(O=="acTL")E.tabs[O]={num_frames:b(d,g),num_plays:b(d,g+4)},C=new Uint8Array(d.length);else if(O=="fcTL"){M!=0&&((V=E.frames[E.frames.length-1]).data=n(E,C.slice(0,M),V.rect.width,V.rect.height),M=0);const N={x:b(d,g+12),y:b(d,g+16),width:b(d,g+4),height:b(d,g+8)};let F=R(d,g+22);F=R(d,g+20)/(F==0?100:F);const U={rect:N,delay:Math.round(1e3*F),dispose:d[g+24],blend:d[g+25]};E.frames.push(U)}else if(O=="fdAT"){for(T=0;T<B-4;T++)C[M+T]=d[g+T+4];M+=B-4}else if(O=="pHYs")E.tabs[O]=[v.readUint(d,g),v.readUint(d,g+4),d[g+8]];else if(O=="cHRM")for(E.tabs[O]=[],T=0;T<8;T++)E.tabs[O].push(v.readUint(d,g+4*T));else if(O=="tEXt"||O=="zTXt"){E.tabs[O]==null&&(E.tabs[O]={});var y=v.nextZero(d,g),w=v.readASCII(d,g,y-g),A=g+B-y-1;if(O=="tEXt")I=v.readASCII(d,y+1,A);else{var P=r(d.slice(y+2,y+2+A));I=v.readUTF8(P,0,P.length)}E.tabs[O][w]=I}else if(O=="iTXt"){E.tabs[O]==null&&(E.tabs[O]={}),y=0,m=g,y=v.nextZero(d,m),w=v.readASCII(d,m,y-m);const N=d[m=y+1];var I;d[m+1],m+=2,y=v.nextZero(d,m),v.readASCII(d,m,y-m),m=y+1,y=v.nextZero(d,m),v.readUTF8(d,m,y-m),A=B-((m=y+1)-g),N==0?I=v.readUTF8(d,m,A):(P=r(d.slice(m,m+A)),I=v.readUTF8(P,0,P.length)),E.tabs[O][w]=I}else if(O=="PLTE")E.tabs[O]=v.readBytes(d,g,B);else if(O=="hIST"){const N=E.tabs.PLTE.length/3;for(E.tabs[O]=[],T=0;T<N;T++)E.tabs[O].push(R(d,g+2*T))}else if(O=="tRNS")E.ctype==3?E.tabs[O]=v.readBytes(d,g,B):E.ctype==0?E.tabs[O]=R(d,g):E.ctype==2&&(E.tabs[O]=[R(d,g),R(d,g+2),R(d,g+4)]);else if(O=="gAMA")E.tabs[O]=v.readUint(d,g)/1e5;else if(O=="sRGB")E.tabs[O]=d[g];else if(O=="bKGD")E.ctype==0||E.ctype==4?E.tabs[O]=[R(d,g)]:E.ctype==2||E.ctype==6?E.tabs[O]=[R(d,g),R(d,g+2),R(d,g+4)]:E.ctype==3&&(E.tabs[O]=d[g]);else if(O=="IEND")break;g+=B,v.readUint(d,g),g+=4}var V;return M!=0&&((V=E.frames[E.frames.length-1]).data=n(E,C.slice(0,M),V.rect.width,V.rect.height)),E.data=n(E,S,E.width,E.height),delete E.compress,delete E.interlace,delete E.filter,E},toRGBA8:function(f){const d=f.width,g=f.height;if(f.tabs.acTL==null)return[e(f.data,d,g,f).buffer];const v=[];f.frames[0].data==null&&(f.frames[0].data=f.data);const R=d*g*4,b=new Uint8Array(R),E=new Uint8Array(R),S=new Uint8Array(R);for(let D=0;D<f.frames.length;D++){const M=f.frames[D],x=M.rect.x,T=M.rect.y,m=M.rect.width,y=M.rect.height,w=e(M.data,m,y,f);if(D!=0)for(var C=0;C<R;C++)S[C]=b[C];if(M.blend==0?c(w,m,y,b,d,g,x,T,0):M.blend==1&&c(w,m,y,b,d,g,x,T,1),v.push(b.buffer.slice(0)),M.dispose!=0){if(M.dispose==1)c(E,m,y,b,d,g,x,T,0);else if(M.dispose==2)for(C=0;C<R;C++)b[C]=S[C]}}return v},_paeth:a,_copyTile:c,_bin:t}}();(function(){const{_copyTile:t}=On,{_bin:e}=On,n=On._paeth;var r={table:function(){const m=new Uint32Array(256);for(let y=0;y<256;y++){let w=y;for(let A=0;A<8;A++)1&w?w=3988292384^w>>>1:w>>>=1;m[y]=w}return m}(),update(m,y,w,A){for(let P=0;P<A;P++)m=r.table[255&(m^y[w+P])]^m>>>8;return m},crc:(m,y,w)=>4294967295^r.update(4294967295,m,y,w)};function i(m,y,w,A){y[w]+=m[0]*A>>4,y[w+1]+=m[1]*A>>4,y[w+2]+=m[2]*A>>4,y[w+3]+=m[3]*A>>4}function s(m){return Math.max(0,Math.min(255,m))}function o(m,y){const w=m[0]-y[0],A=m[1]-y[1],P=m[2]-y[2],I=m[3]-y[3];return w*w+A*A+P*P+I*I}function a(m,y,w,A,P,I,V){V==null&&(V=1);const B=A.length,O=[];for(var N=0;N<B;N++){const H=A[N];O.push([H>>>0&255,H>>>8&255,H>>>16&255,H>>>24&255])}for(N=0;N<B;N++){let H=4294967295;for(var F=0,U=0;U<B;U++){var z=o(O[N],O[U]);U!=N&&z<H&&(H=z,F=U)}}const Z=new Uint32Array(P.buffer),K=new Int16Array(y*w*4),Y=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(N=0;N<Y.length;N++)Y[N]=255*((Y[N]+.5)/16-.5);for(let H=0;H<w;H++)for(let ie=0;ie<y;ie++){var Q;N=4*(H*y+ie),V!=2?Q=[s(m[N]+K[N]),s(m[N+1]+K[N+1]),s(m[N+2]+K[N+2]),s(m[N+3]+K[N+3])]:(z=Y[4*(3&H)+(3&ie)],Q=[s(m[N]+z),s(m[N+1]+z),s(m[N+2]+z),s(m[N+3]+z)]),F=0;let fe=16777215;for(U=0;U<B;U++){const ve=o(Q,O[U]);ve<fe&&(fe=ve,F=U)}const we=O[F],ye=[Q[0]-we[0],Q[1]-we[1],Q[2]-we[2],Q[3]-we[3]];V==1&&(ie!=y-1&&i(ye,K,N+4,7),H!=w-1&&(ie!=0&&i(ye,K,N+4*y-4,3),i(ye,K,N+4*y,5),ie!=y-1&&i(ye,K,N+4*y+4,1))),I[N>>2]=F,Z[N>>2]=A[F]}}function u(m,y,w,A,P){P==null&&(P={});const{crc:I}=r,V=e.writeUint,B=e.writeUshort,O=e.writeASCII;let N=8;const F=m.frames.length>1;let U,z=!1,Z=33+(F?20:0);if(P.sRGB!=null&&(Z+=13),P.pHYs!=null&&(Z+=21),P.iCCP!=null&&(U=pako.deflate(P.iCCP),Z+=21+U.length+4),m.ctype==3){for(var K=m.plte.length,Y=0;Y<K;Y++)m.plte[Y]>>>24!=255&&(z=!0);Z+=8+3*K+4+(z?8+1*K+4:0)}for(var Q=0;Q<m.frames.length;Q++)F&&(Z+=38),Z+=(we=m.frames[Q]).cimg.length+12,Q!=0&&(Z+=4);Z+=12;const H=new Uint8Array(Z),ie=[137,80,78,71,13,10,26,10];for(Y=0;Y<8;Y++)H[Y]=ie[Y];if(V(H,N,13),N+=4,O(H,N,"IHDR"),N+=4,V(H,N,y),N+=4,V(H,N,w),N+=4,H[N]=m.depth,N++,H[N]=m.ctype,N++,H[N]=0,N++,H[N]=0,N++,H[N]=0,N++,V(H,N,I(H,N-17,17)),N+=4,P.sRGB!=null&&(V(H,N,1),N+=4,O(H,N,"sRGB"),N+=4,H[N]=P.sRGB,N++,V(H,N,I(H,N-5,5)),N+=4),P.iCCP!=null){const ye=13+U.length;V(H,N,ye),N+=4,O(H,N,"iCCP"),N+=4,O(H,N,"ICC profile"),N+=11,N+=2,H.set(U,N),N+=U.length,V(H,N,I(H,N-(ye+4),ye+4)),N+=4}if(P.pHYs!=null&&(V(H,N,9),N+=4,O(H,N,"pHYs"),N+=4,V(H,N,P.pHYs[0]),N+=4,V(H,N,P.pHYs[1]),N+=4,H[N]=P.pHYs[2],N++,V(H,N,I(H,N-13,13)),N+=4),F&&(V(H,N,8),N+=4,O(H,N,"acTL"),N+=4,V(H,N,m.frames.length),N+=4,V(H,N,P.loop!=null?P.loop:0),N+=4,V(H,N,I(H,N-12,12)),N+=4),m.ctype==3){for(V(H,N,3*(K=m.plte.length)),N+=4,O(H,N,"PLTE"),N+=4,Y=0;Y<K;Y++){const ye=3*Y,ve=m.plte[Y],Ce=255&ve,Fe=ve>>>8&255,bn=ve>>>16&255;H[N+ye+0]=Ce,H[N+ye+1]=Fe,H[N+ye+2]=bn}if(N+=3*K,V(H,N,I(H,N-3*K-4,3*K+4)),N+=4,z){for(V(H,N,K),N+=4,O(H,N,"tRNS"),N+=4,Y=0;Y<K;Y++)H[N+Y]=m.plte[Y]>>>24&255;N+=K,V(H,N,I(H,N-K-4,K+4)),N+=4}}let fe=0;for(Q=0;Q<m.frames.length;Q++){var we=m.frames[Q];F&&(V(H,N,26),N+=4,O(H,N,"fcTL"),N+=4,V(H,N,fe++),N+=4,V(H,N,we.rect.width),N+=4,V(H,N,we.rect.height),N+=4,V(H,N,we.rect.x),N+=4,V(H,N,we.rect.y),N+=4,B(H,N,A[Q]),N+=2,B(H,N,1e3),N+=2,H[N]=we.dispose,N++,H[N]=we.blend,N++,V(H,N,I(H,N-30,30)),N+=4);const ye=we.cimg;V(H,N,(K=ye.length)+(Q==0?0:4)),N+=4;const ve=N;O(H,N,Q==0?"IDAT":"fdAT"),N+=4,Q!=0&&(V(H,N,fe++),N+=4),H.set(ye,N),N+=K,V(H,N,I(H,ve,N-ve)),N+=4}return V(H,N,0),N+=4,O(H,N,"IEND"),N+=4,V(H,N,I(H,N-4,4)),N+=4,H.buffer}function c(m,y,w){for(let A=0;A<m.frames.length;A++){const P=m.frames[A];P.rect.width;const I=P.rect.height,V=new Uint8Array(I*P.bpl+I);P.cimg=g(P.img,I,P.bpp,P.bpl,V,y,w)}}function h(m,y,w,A,P){const I=P[0],V=P[1],B=P[2],O=P[3],N=P[4],F=P[5];let U=6,z=8,Z=255;for(var K=0;K<m.length;K++){const st=new Uint8Array(m[K]);for(var Y=st.length,Q=0;Q<Y;Q+=4)Z&=st[Q+3]}const H=Z!=255,ie=function(ke,Se,Ze,ot,je,Lt){const Me=[];for(var Ee=0;Ee<ke.length;Ee++){const ct=new Uint8Array(ke[Ee]),tn=new Uint32Array(ct.buffer);var It;let ht=0,_n=0,nn=Se,Nn=Ze,Po=ot?1:0;if(Ee!=0){const Sh=Lt||ot||Ee==1||Me[Ee-2].dispose!=0?1:2;let xi=0,ko=1e9;for(let Nr=0;Nr<Sh;Nr++){var Ne=new Uint8Array(ke[Ee-1-Nr]);const Di=new Uint32Array(ke[Ee-1-Nr]);let vn=Se,wn=Ze,Ht=-1,xr=-1;for(let Wn=0;Wn<Ze;Wn++)for(let rn=0;rn<Se;rn++)tn[Qe=Wn*Se+rn]!=Di[Qe]&&(rn<vn&&(vn=rn),rn>Ht&&(Ht=rn),Wn<wn&&(wn=Wn),Wn>xr&&(xr=Wn));Ht==-1&&(vn=wn=Ht=xr=0),je&&((1&vn)==1&&vn--,(1&wn)==1&&wn--);const Oi=(Ht-vn+1)*(xr-wn+1);Oi<ko&&(ko=Oi,xi=Nr,ht=vn,_n=wn,nn=Ht-vn+1,Nn=xr-wn+1)}Ne=new Uint8Array(ke[Ee-1-xi]),xi==1&&(Me[Ee-1].dispose=2),It=new Uint8Array(nn*Nn*4),t(Ne,Se,Ze,It,nn,Nn,-ht,-_n,0),Po=t(ct,Se,Ze,It,nn,Nn,-ht,-_n,3)?1:0,Po==1?d(ct,Se,Ze,It,{x:ht,y:_n,width:nn,height:Nn}):t(ct,Se,Ze,It,nn,Nn,-ht,-_n,0)}else It=ct.slice(0);Me.push({rect:{x:ht,y:_n,width:nn,height:Nn},img:It,blend:Po,dispose:0})}if(ot)for(Ee=0;Ee<Me.length;Ee++){if((qn=Me[Ee]).blend==1)continue;const ct=qn.rect,tn=Me[Ee-1].rect,ht=Math.min(ct.x,tn.x),_n=Math.min(ct.y,tn.y),nn={x:ht,y:_n,width:Math.max(ct.x+ct.width,tn.x+tn.width)-ht,height:Math.max(ct.y+ct.height,tn.y+tn.height)-_n};Me[Ee-1].dispose=1,Ee-1!=0&&f(ke,Se,Ze,Me,Ee-1,nn,je),f(ke,Se,Ze,Me,Ee,nn,je)}let et=0;if(ke.length!=1)for(var Qe=0;Qe<Me.length;Qe++){var qn;et+=(qn=Me[Qe]).rect.width*qn.rect.height}return Me}(m,y,w,I,V,B),fe={},we=[],ye=[];if(A!=0){const st=[];for(Q=0;Q<ie.length;Q++)st.push(ie[Q].img.buffer);const ke=function(je){let Lt=0;for(var Me=0;Me<je.length;Me++)Lt+=je[Me].byteLength;const Ee=new Uint8Array(Lt);let It=0;for(Me=0;Me<je.length;Me++){const Ne=new Uint8Array(je[Me]),et=Ne.length;for(let Qe=0;Qe<et;Qe+=4){let qn=Ne[Qe],ct=Ne[Qe+1],tn=Ne[Qe+2];const ht=Ne[Qe+3];ht==0&&(qn=ct=tn=0),Ee[It+Qe]=qn,Ee[It+Qe+1]=ct,Ee[It+Qe+2]=tn,Ee[It+Qe+3]=ht}It+=et}return Ee.buffer}(st),Se=R(ke,A);for(Q=0;Q<Se.plte.length;Q++)we.push(Se.plte[Q].est.rgba);let Ze=0;for(Q=0;Q<ie.length;Q++){const ot=(Ce=ie[Q]).img.length;var ve=new Uint8Array(Se.inds.buffer,Ze>>2,ot>>2);ye.push(ve);const je=new Uint8Array(Se.abuf,Ze,ot);F&&a(Ce.img,Ce.rect.width,Ce.rect.height,we,je,ve),Ce.img.set(je),Ze+=ot}}else for(K=0;K<ie.length;K++){var Ce=ie[K];const st=new Uint32Array(Ce.img.buffer);var Fe=Ce.rect.width;for(Y=st.length,ve=new Uint8Array(Y),ye.push(ve),Q=0;Q<Y;Q++){const ke=st[Q];if(Q!=0&&ke==st[Q-1])ve[Q]=ve[Q-1];else if(Q>Fe&&ke==st[Q-Fe])ve[Q]=ve[Q-Fe];else{let Se=fe[ke];if(Se==null&&(fe[ke]=Se=we.length,we.push(ke),we.length>=300))break;ve[Q]=Se}}}const bn=we.length;for(bn<=256&&N==0&&(z=bn<=2?1:bn<=4?2:bn<=16?4:8,z=Math.max(z,O)),K=0;K<ie.length;K++){(Ce=ie[K]).rect.x,Ce.rect.y,Fe=Ce.rect.width;const st=Ce.rect.height;let ke=Ce.img;new Uint32Array(ke.buffer);let Se=4*Fe,Ze=4;if(bn<=256&&N==0){Se=Math.ceil(z*Fe/8);var $t=new Uint8Array(Se*st);const ot=ye[K];for(let je=0;je<st;je++){Q=je*Se;const Lt=je*Fe;if(z==8)for(var Pe=0;Pe<Fe;Pe++)$t[Q+Pe]=ot[Lt+Pe];else if(z==4)for(Pe=0;Pe<Fe;Pe++)$t[Q+(Pe>>1)]|=ot[Lt+Pe]<<4-4*(1&Pe);else if(z==2)for(Pe=0;Pe<Fe;Pe++)$t[Q+(Pe>>2)]|=ot[Lt+Pe]<<6-2*(3&Pe);else if(z==1)for(Pe=0;Pe<Fe;Pe++)$t[Q+(Pe>>3)]|=ot[Lt+Pe]<<7-1*(7&Pe)}ke=$t,U=3,Ze=1}else if(H==0&&ie.length==1){$t=new Uint8Array(Fe*st*3);const ot=Fe*st;for(Q=0;Q<ot;Q++){const je=3*Q,Lt=4*Q;$t[je]=ke[Lt],$t[je+1]=ke[Lt+1],$t[je+2]=ke[Lt+2]}ke=$t,U=2,Ze=3,Se=3*Fe}Ce.img=ke,Ce.bpl=Se,Ce.bpp=Ze}return{ctype:U,depth:z,plte:we,frames:ie}}function f(m,y,w,A,P,I,V){const B=Uint8Array,O=Uint32Array,N=new B(m[P-1]),F=new O(m[P-1]),U=P+1<m.length?new B(m[P+1]):null,z=new B(m[P]),Z=new O(z.buffer);let K=y,Y=w,Q=-1,H=-1;for(let fe=0;fe<I.height;fe++)for(let we=0;we<I.width;we++){const ye=I.x+we,ve=I.y+fe,Ce=ve*y+ye,Fe=Z[Ce];Fe==0||A[P-1].dispose==0&&F[Ce]==Fe&&(U==null||U[4*Ce+3]!=0)||(ye<K&&(K=ye),ye>Q&&(Q=ye),ve<Y&&(Y=ve),ve>H&&(H=ve))}Q==-1&&(K=Y=Q=H=0),V&&((1&K)==1&&K--,(1&Y)==1&&Y--),I={x:K,y:Y,width:Q-K+1,height:H-Y+1};const ie=A[P];ie.rect=I,ie.blend=1,ie.img=new Uint8Array(I.width*I.height*4),A[P-1].dispose==0?(t(N,y,w,ie.img,I.width,I.height,-I.x,-I.y,0),d(z,y,w,ie.img,I)):t(z,y,w,ie.img,I.width,I.height,-I.x,-I.y,0)}function d(m,y,w,A,P){t(m,y,w,A,P.width,P.height,-P.x,-P.y,2)}function g(m,y,w,A,P,I,V){const B=[];let O,N=[0,1,2,3,4];I!=-1?N=[I]:(y*A>5e5||w==1)&&(N=[0]),V&&(O={level:0});const F=l3;for(var U=0;U<N.length;U++){for(let K=0;K<y;K++)v(P,m,K,A,w,N[U]);B.push(F.deflate(P,O))}let z,Z=1e9;for(U=0;U<B.length;U++)B[U].length<Z&&(z=U,Z=B[U].length);return B[z]}function v(m,y,w,A,P,I){const V=w*A;let B=V+w;if(m[B]=I,B++,I==0)if(A<500)for(var O=0;O<A;O++)m[B+O]=y[V+O];else m.set(new Uint8Array(y.buffer,V,A),B);else if(I==1){for(O=0;O<P;O++)m[B+O]=y[V+O];for(O=P;O<A;O++)m[B+O]=y[V+O]-y[V+O-P]+256&255}else if(w==0){for(O=0;O<P;O++)m[B+O]=y[V+O];if(I==2)for(O=P;O<A;O++)m[B+O]=y[V+O];if(I==3)for(O=P;O<A;O++)m[B+O]=y[V+O]-(y[V+O-P]>>1)+256&255;if(I==4)for(O=P;O<A;O++)m[B+O]=y[V+O]-n(y[V+O-P],0,0)+256&255}else{if(I==2)for(O=0;O<A;O++)m[B+O]=y[V+O]+256-y[V+O-A]&255;if(I==3){for(O=0;O<P;O++)m[B+O]=y[V+O]+256-(y[V+O-A]>>1)&255;for(O=P;O<A;O++)m[B+O]=y[V+O]+256-(y[V+O-A]+y[V+O-P]>>1)&255}if(I==4){for(O=0;O<P;O++)m[B+O]=y[V+O]+256-n(0,y[V+O-A],0)&255;for(O=P;O<A;O++)m[B+O]=y[V+O]+256-n(y[V+O-P],y[V+O-A],y[V+O-P-A])&255}}}function R(m,y){const w=new Uint8Array(m),A=w.slice(0),P=new Uint32Array(A.buffer),I=b(A,y),V=I[0],B=I[1],O=w.length,N=new Uint8Array(O>>2);let F;if(w.length<2e7)for(var U=0;U<O;U+=4)F=E(V,z=w[U]*(1/255),Z=w[U+1]*(1/255),K=w[U+2]*(1/255),Y=w[U+3]*(1/255)),N[U>>2]=F.ind,P[U>>2]=F.est.rgba;else for(U=0;U<O;U+=4){var z=w[U]*.00392156862745098,Z=w[U+1]*(1/255),K=w[U+2]*(1/255),Y=w[U+3]*(1/255);for(F=V;F.left;)F=S(F.est,z,Z,K,Y)<=0?F.left:F.right;N[U>>2]=F.ind,P[U>>2]=F.est.rgba}return{abuf:A.buffer,inds:N,plte:B}}function b(m,y,w){w==null&&(w=1e-4);const A=new Uint32Array(m.buffer),P={i0:0,i1:m.length,bst:null,est:null,tdst:0,left:null,right:null};P.bst=M(m,P.i0,P.i1),P.est=x(P.bst);const I=[P];for(;I.length<y;){let B=0,O=0;for(var V=0;V<I.length;V++)I[V].est.L>B&&(B=I[V].est.L,O=V);if(B<w)break;const N=I[O],F=C(m,A,N.i0,N.i1,N.est.e,N.est.eMq255);if(N.i0>=F||N.i1<=F){N.est.L=0;continue}const U={i0:N.i0,i1:F,bst:null,est:null,tdst:0,left:null,right:null};U.bst=M(m,U.i0,U.i1),U.est=x(U.bst);const z={i0:F,i1:N.i1,bst:null,est:null,tdst:0,left:null,right:null};for(z.bst={R:[],m:[],N:N.bst.N-U.bst.N},V=0;V<16;V++)z.bst.R[V]=N.bst.R[V]-U.bst.R[V];for(V=0;V<4;V++)z.bst.m[V]=N.bst.m[V]-U.bst.m[V];z.est=x(z.bst),N.left=U,N.right=z,I[O]=U,I.push(z)}for(I.sort((B,O)=>O.bst.N-B.bst.N),V=0;V<I.length;V++)I[V].ind=V;return[P,I]}function E(m,y,w,A,P){if(m.left==null)return m.tdst=function(U,z,Z,K,Y){const Q=z-U[0],H=Z-U[1],ie=K-U[2],fe=Y-U[3];return Q*Q+H*H+ie*ie+fe*fe}(m.est.q,y,w,A,P),m;const I=S(m.est,y,w,A,P);let V=m.left,B=m.right;I>0&&(V=m.right,B=m.left);const O=E(V,y,w,A,P);if(O.tdst<=I*I)return O;const N=E(B,y,w,A,P);return N.tdst<O.tdst?N:O}function S(m,y,w,A,P){const{e:I}=m;return I[0]*y+I[1]*w+I[2]*A+I[3]*P-m.eMq}function C(m,y,w,A,P,I){for(A-=4;w<A;){for(;D(m,w,P)<=I;)w+=4;for(;D(m,A,P)>I;)A-=4;if(w>=A)break;const V=y[w>>2];y[w>>2]=y[A>>2],y[A>>2]=V,w+=4,A-=4}for(;D(m,w,P)>I;)w-=4;return w+4}function D(m,y,w){return m[y]*w[0]+m[y+1]*w[1]+m[y+2]*w[2]+m[y+3]*w[3]}function M(m,y,w){const A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],P=[0,0,0,0],I=w-y>>2;for(let V=y;V<w;V+=4){const B=m[V]*.00392156862745098,O=m[V+1]*(1/255),N=m[V+2]*(1/255),F=m[V+3]*(1/255);P[0]+=B,P[1]+=O,P[2]+=N,P[3]+=F,A[0]+=B*B,A[1]+=B*O,A[2]+=B*N,A[3]+=B*F,A[5]+=O*O,A[6]+=O*N,A[7]+=O*F,A[10]+=N*N,A[11]+=N*F,A[15]+=F*F}return A[4]=A[1],A[8]=A[2],A[9]=A[6],A[12]=A[3],A[13]=A[7],A[14]=A[11],{R:A,m:P,N:I}}function x(m){const{R:y}=m,{m:w}=m,{N:A}=m,P=w[0],I=w[1],V=w[2],B=w[3],O=A==0?0:1/A,N=[y[0]-P*P*O,y[1]-P*I*O,y[2]-P*V*O,y[3]-P*B*O,y[4]-I*P*O,y[5]-I*I*O,y[6]-I*V*O,y[7]-I*B*O,y[8]-V*P*O,y[9]-V*I*O,y[10]-V*V*O,y[11]-V*B*O,y[12]-B*P*O,y[13]-B*I*O,y[14]-B*V*O,y[15]-B*B*O],F=N,U=T;let z=[Math.random(),Math.random(),Math.random(),Math.random()],Z=0,K=0;if(A!=0)for(let Q=0;Q<16&&(z=U.multVec(F,z),K=Math.sqrt(U.dot(z,z)),z=U.sml(1/K,z),!(Q!=0&&Math.abs(K-Z)<1e-9));Q++)Z=K;const Y=[P*O,I*O,V*O,B*O];return{Cov:N,q:Y,e:z,L:Z,eMq255:U.dot(U.sml(255,Y),z),eMq:U.dot(z,Y),rgba:(Math.round(255*Y[3])<<24|Math.round(255*Y[2])<<16|Math.round(255*Y[1])<<8|Math.round(255*Y[0])<<0)>>>0}}var T={multVec:(m,y)=>[m[0]*y[0]+m[1]*y[1]+m[2]*y[2]+m[3]*y[3],m[4]*y[0]+m[5]*y[1]+m[6]*y[2]+m[7]*y[3],m[8]*y[0]+m[9]*y[1]+m[10]*y[2]+m[11]*y[3],m[12]*y[0]+m[13]*y[1]+m[14]*y[2]+m[15]*y[3]],dot:(m,y)=>m[0]*y[0]+m[1]*y[1]+m[2]*y[2]+m[3]*y[3],sml:(m,y)=>[m*y[0],m*y[1],m*y[2],m*y[3]]};On.encode=function(y,w,A,P,I,V,B){P==null&&(P=0),B==null&&(B=!1);const O=h(y,w,A,P,[!1,!1,!1,0,B,!1]);return c(O,-1),u(O,w,A,I,V)},On.encodeLL=function(y,w,A,P,I,V,B,O){const N={ctype:0+(P==1?0:2)+(I==0?0:4),depth:V,frames:[]},F=(P+I)*V,U=F*w;for(let z=0;z<y.length;z++)N.frames.push({rect:{x:0,y:0,width:w,height:A},img:new Uint8Array(y[z]),blend:0,dispose:1,bpp:Math.ceil(F/8),bpl:Math.ceil(U/8)});return c(N,0,!0),u(N,w,A,B,O)},On.encode.compress=h,On.encode.dither=a,On.quantize=R,On.quantize.getKDtree=b,On.quantize.getNearest=E})();const _A={toArrayBuffer(t,e){const n=t.width,r=t.height,i=n<<2,s=t.getContext("2d").getImageData(0,0,n,r),o=new Uint32Array(s.data.buffer),a=(32*n+31)/32<<2,u=a*r,c=122+u,h=new ArrayBuffer(c),f=new DataView(h),d=1<<20;let g,v,R,b,E=d,S=0,C=0,D=0;function M(m){f.setUint16(C,m,!0),C+=2}function x(m){f.setUint32(C,m,!0),C+=4}function T(m){C+=m}M(19778),x(c),T(4),x(122),x(108),x(n),x(-r>>>0),M(1),M(32),x(3),x(u),x(2835),x(2835),T(8),x(16711680),x(65280),x(255),x(4278190080),x(1466527264),function m(){for(;S<r&&E>0;){for(b=122+S*a,g=0;g<i;)E--,v=o[D++],R=v>>>24,f.setUint32(b+g,v<<8|R),g+=4;S++}D<o.length?(E=d,setTimeout(m,_A._dly)):e(h)}()},toBlob(t,e){this.toArrayBuffer(t,n=>{e(new Blob([n],{type:"image/bmp"}))})},_dly:9};var Kt={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},u3={[Kt.CHROME]:16384,[Kt.FIREFOX]:11180,[Kt.DESKTOP_SAFARI]:16384,[Kt.IE]:8192,[Kt.IOS]:4096,[Kt.ETC]:8192};const dg=typeof window<"u",vA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Rc=dg&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),c3=(dg||vA)&&(Rc&&Rc.getOriginalSymbol(window,"File")||typeof File<"u"&&File),wA=(dg||vA)&&(Rc&&Rc.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function fg(t,e,n=Date.now()){return new Promise(r=>{const i=t.split(","),s=i[0].match(/:(.*?);/)[1],o=globalThis.atob(i[1]);let a=o.length;const u=new Uint8Array(a);for(;a--;)u[a]=o.charCodeAt(a);const c=new Blob([u],{type:s});c.name=e,c.lastModified=n,r(c)})}function EA(t){return new Promise((e,n)=>{const r=new wA;r.onload=()=>e(r.result),r.onerror=i=>n(i),r.readAsDataURL(t)})}function TA(t){return new Promise((e,n)=>{const r=new Image;r.onload=()=>e(r),r.onerror=i=>n(i),r.src=t})}function Gi(){if(Gi.cachedResult!==void 0)return Gi.cachedResult;let t=Kt.ETC;const{userAgent:e}=navigator;return/Chrom(e|ium)/i.test(e)?t=Kt.CHROME:/iP(ad|od|hone)/i.test(e)&&/WebKit/i.test(e)?t=Kt.IOS:/Safari/i.test(e)?t=Kt.DESKTOP_SAFARI:/Firefox/i.test(e)?t=Kt.FIREFOX:(/MSIE/i.test(e)||document.documentMode)&&(t=Kt.IE),Gi.cachedResult=t,Gi.cachedResult}function IA(t,e){const n=Gi(),r=u3[n];let i=t,s=e,o=i*s;const a=i>s?s/i:i/s;for(;o>r*r;){const u=(r+i)/2,c=(r+s)/2;u<c?(s=c,i=c*a):(s=u*a,i=u),o=i*s}return{width:i,height:s}}function Ah(t,e){let n,r;try{if(n=new OffscreenCanvas(t,e),r=n.getContext("2d"),r===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{n=document.createElement("canvas"),r=n.getContext("2d")}return n.width=t,n.height=e,[n,r]}function AA(t,e){const{width:n,height:r}=IA(t.width,t.height),[i,s]=Ah(n,r);return e&&/jpe?g/.test(e)&&(s.fillStyle="white",s.fillRect(0,0,i.width,i.height)),s.drawImage(t,0,0,i.width,i.height),i}function bu(){return bu.cachedResult!==void 0||(bu.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),bu.cachedResult}function Cc(t,e={}){return new Promise(function(n,r){let i,s;var o=function(){try{return s=AA(i,e.fileType||t.type),n([i,s])}catch(u){return r(u)}},a=function(u){try{var c=function(h){try{throw h}catch(f){return r(f)}};try{let h;return EA(t).then(function(f){try{return h=f,TA(h).then(function(d){try{return i=d,function(){try{return o()}catch(g){return r(g)}}()}catch(g){return c(g)}},c)}catch(d){return c(d)}},c)}catch(h){c(h)}}catch(h){return r(h)}};try{if(bu()||[Kt.DESKTOP_SAFARI,Kt.MOBILE_SAFARI].includes(Gi()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(t).then(function(u){try{return i=u,o()}catch{return a()}},a)}catch{a()}})}function Pc(t,e,n,r,i=1){return new Promise(function(s,o){let a;if(e==="image/png"){let c,h,f;return c=t.getContext("2d"),{data:h}=c.getImageData(0,0,t.width,t.height),f=On.encode([h.buffer],t.width,t.height,4096*i),a=new Blob([f],{type:e}),a.name=n,a.lastModified=r,u.call(this)}{let c=function(){return u.call(this)};if(e==="image/bmp")return new Promise(h=>_A.toBlob(t,h)).then((function(h){try{return a=h,a.name=n,a.lastModified=r,c.call(this)}catch(f){return o(f)}}).bind(this),o);{let h=function(){return c.call(this)};if(typeof OffscreenCanvas=="function"&&t instanceof OffscreenCanvas)return t.convertToBlob({type:e,quality:i}).then((function(f){try{return a=f,a.name=n,a.lastModified=r,h.call(this)}catch(d){return o(d)}}).bind(this),o);{let f;return f=t.toDataURL(e,i),fg(f,n,r).then((function(d){try{return a=d,h.call(this)}catch(g){return o(g)}}).bind(this),o)}}}function u(){return s(a)}})}function Xn(t){t.width=0,t.height=0}function Hs(){return new Promise(function(t,e){let n,r,i,s;return Hs.cachedResult!==void 0?t(Hs.cachedResult):fg("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then(function(o){try{return n=o,Cc(n).then(function(a){try{return r=a[1],Pc(r,n.type,n.name,n.lastModified).then(function(u){try{return i=u,Xn(r),Cc(i).then(function(c){try{return s=c[0],Hs.cachedResult=s.width===1&&s.height===2,t(Hs.cachedResult)}catch(h){return e(h)}},e)}catch(c){return e(c)}},e)}catch(u){return e(u)}},e)}catch(a){return e(a)}},e)})}function SA(t){return new Promise((e,n)=>{const r=new wA;r.onload=i=>{const s=new DataView(i.target.result);if(s.getUint16(0,!1)!=65496)return e(-2);const o=s.byteLength;let a=2;for(;a<o;){if(s.getUint16(a+2,!1)<=8)return e(-1);const u=s.getUint16(a,!1);if(a+=2,u==65505){if(s.getUint32(a+=2,!1)!=1165519206)return e(-1);const c=s.getUint16(a+=6,!1)==18761;a+=s.getUint32(a+4,c);const h=s.getUint16(a,c);a+=2;for(let f=0;f<h;f++)if(s.getUint16(a+12*f,c)==274)return e(s.getUint16(a+12*f+8,c))}else{if((65280&u)!=65280)break;a+=s.getUint16(a,!1)}}return e(-1)},r.onerror=i=>n(i),r.readAsArrayBuffer(t)})}function RA(t,e){const{width:n}=t,{height:r}=t,{maxWidthOrHeight:i}=e;let s,o=t;return isFinite(i)&&(n>i||r>i)&&([o,s]=Ah(n,r),n>r?(o.width=i,o.height=r/n*i):(o.width=n/r*i,o.height=i),s.drawImage(t,0,0,o.width,o.height),Xn(t)),o}function CA(t,e){const{width:n}=t,{height:r}=t,[i,s]=Ah(n,r);switch(e>4&&e<9?(i.width=r,i.height=n):(i.width=n,i.height=r),e){case 2:s.transform(-1,0,0,1,n,0);break;case 3:s.transform(-1,0,0,-1,n,r);break;case 4:s.transform(1,0,0,-1,0,r);break;case 5:s.transform(0,1,1,0,0,0);break;case 6:s.transform(0,1,-1,0,r,0);break;case 7:s.transform(0,-1,-1,0,r,n);break;case 8:s.transform(0,-1,1,0,0,n)}return s.drawImage(t,0,0,n,r),Xn(t),i}function p0(t,e,n=0){return new Promise(function(r,i){let s,o,a,u,c,h,f,d,g,v,R,b,E,S,C,D,M,x,T,m;function y(A=5){if(e.signal&&e.signal.aborted)throw e.signal.reason;s+=A,e.onProgress(Math.min(s,100))}function w(A){if(e.signal&&e.signal.aborted)throw e.signal.reason;s=Math.min(Math.max(A,s),100),e.onProgress(s)}return s=n,o=e.maxIteration||10,a=1024*e.maxSizeMB*1024,y(),Cc(t,e).then((function(A){try{return[,u]=A,y(),c=RA(u,e),y(),new Promise(function(P,I){var V;if(!(V=e.exifOrientation))return SA(t).then((function(O){try{return V=O,B.call(this)}catch(N){return I(N)}}).bind(this),I);function B(){return P(V)}return B.call(this)}).then((function(P){try{return h=P,y(),Hs().then((function(I){try{return f=I?c:CA(c,h),y(),d=e.initialQuality||1,g=e.fileType||t.type,Pc(f,g,t.name,t.lastModified,d).then((function(V){try{{let O=function(){if(o--&&(C>a||C>E)){let F,U;return F=m?.95*T.width:T.width,U=m?.95*T.height:T.height,[M,x]=Ah(F,U),x.drawImage(T,0,0,F,U),d*=g==="image/png"?.85:.95,Pc(M,g,t.name,t.lastModified,d).then(function(z){try{return D=z,Xn(T),T=M,C=D.size,w(Math.min(99,Math.floor((S-C)/(S-a)*100))),O}catch(Z){return i(Z)}},i)}return[1]},N=function(){return Xn(T),Xn(M),Xn(c),Xn(f),Xn(u),w(100),r(D)};if(v=V,y(),R=v.size>a,b=v.size>t.size,!R&&!b)return w(100),r(v);var B;return E=t.size,S=v.size,C=S,T=f,m=!e.alwaysKeepResolution&&R,(B=(function(F){for(;F;){if(F.then)return void F.then(B,i);try{if(F.pop){if(F.length)return F.pop()?N.call(this):F;F=O}else F=F.call(this)}catch(U){return i(U)}}}).bind(this))(O)}}catch(O){return i(O)}}).bind(this),i)}catch(V){return i(V)}}).bind(this),i)}catch(I){return i(I)}}).bind(this),i)}catch(P){return i(P)}}).bind(this),i)})}const h3=`
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;let Pd;function d3(t,e){return new Promise((n,r)=>{Pd||(Pd=function(o){const a=[];return a.push(o),URL.createObjectURL(new Blob(a))}(h3));const i=new Worker(Pd);i.addEventListener("message",function(o){if(e.signal&&e.signal.aborted)i.terminate();else if(o.data.progress===void 0){if(o.data.error)return r(new Error(o.data.error)),void i.terminate();n(o.data.file),i.terminate()}else e.onProgress(o.data.progress)}),i.addEventListener("error",r),e.signal&&e.signal.addEventListener("abort",()=>{r(e.signal.reason),i.terminate()}),i.postMessage({file:t,imageCompressionLibUrl:e.libURL,options:{...e,onProgress:void 0,signal:void 0}})})}function kt(t,e){return new Promise(function(n,r){let i,s,o,a,u,c;if(i={...e},o=0,{onProgress:a}=i,i.maxSizeMB=i.maxSizeMB||Number.POSITIVE_INFINITY,u=typeof i.useWebWorker!="boolean"||i.useWebWorker,delete i.useWebWorker,i.onProgress=g=>{o=g,typeof a=="function"&&a(o)},!(t instanceof Blob||t instanceof c3))return r(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(t.type))return r(new Error("The file given is not an image"));if(c=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!u||typeof Worker!="function"||c)return p0(t,i).then((function(g){try{return s=g,d.call(this)}catch(v){return r(v)}}).bind(this),r);var h=(function(){try{return d.call(this)}catch(g){return r(g)}}).bind(this),f=function(g){try{return p0(t,i).then(function(v){try{return s=v,h()}catch(R){return r(R)}},r)}catch(v){return r(v)}};try{return i.libURL=i.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",d3(t,i).then(function(g){try{return s=g,h()}catch{return f()}},f)}catch{f()}function d(){try{s.name=t.name,s.lastModified=t.lastModified}catch{}try{i.preserveExif&&t.type==="image/jpeg"&&(!i.fileType||i.fileType&&i.fileType===t.type)&&(s=yA(t,s))}catch{}return n(s)}})}kt.getDataUrlFromFile=EA,kt.getFilefromDataUrl=fg,kt.loadImage=TA,kt.drawImageInCanvas=AA,kt.drawFileInCanvas=Cc,kt.canvasToFile=Pc,kt.getExifOrientation=SA,kt.handleMaxWidthOrHeight=RA,kt.followExifOrientation=CA,kt.cleanupCanvasMemory=Xn,kt.isAutoOrientationInBrowser=Hs,kt.approximateBelowMaximumCanvasSizeOfBrowser=IA,kt.copyExifWithoutOrientation=yA,kt.getBrowserName=Gi,kt.version="2.0.2";const f3={maxSizeMB:.8,maxWidthOrHeight:1600,useWebWorker:!0};async function PA(t,e){try{return await kt(t,{...f3,onProgress:e})}catch(n){throw new Error(n.message||`No se pudo comprimir ${t.name}.`)}}function p3(t){const e=t.split(".");return e.length>1?e.pop().toLowerCase():"jpg"}async function kA(t,e,n){const r=p3(t.name),i=`products/${new Date().getFullYear()}/${e}-${Date.now()}.${r}`,s=cA(hA,i),o=await new Promise((u,c)=>{const h=bV(s,t,{contentType:t.type});h.on("state_changed",f=>{},c,()=>u(h.snapshot))});return{imageUrl:await NV(o.ref),imagePath:i}}async function bA(t){if(t)try{await xV(cA(hA,t))}catch(e){if(e.code!=="storage/object-not-found")throw e}}const m3=Gm(Cr,"products");async function g3(t){const e=Ro(Cr,"metadata","counters");return vL(Cr,async n=>{const r=await n.get(e),i=r.exists()?Number(r.data().productCodeSeq||0):0,s=i+t;return n.set(e,{productCodeSeq:s,updatedAt:Za()},{merge:!0}),Array.from({length:t},(o,a)=>{const u=i+a+1;return{sequence:u,code:i3(u)}})})}async function y3(t,e,n){const r=await g3(t.length),i=[],s=[];for(let o=0;o<t.length;o+=1){const a=t[o],u=r[o];try{const c=await kA(a.file,u.code),h=Ro(m3);await zI(h,{id:h.id,codigo:u.code,codigoSecuencia:u.sequence,stockPares:Number(a.stockPares),imageUrl:c.imageUrl,imagePath:c.imagePath,notasInternas:"",createdAt:Za(),updatedAt:Za(),createdBy:e.uid,updatedBy:e.uid}),i.push({id:h.id,codigo:u.code})}catch(c){s.push({itemId:a.id,message:c.message||`No se pudo crear ${u.code}.`})}if(n){const c=o+1,h=t.length;n({completed:c,total:h,percent:Math.round(c/h*100)})}}return{successes:i,failures:s}}async function NA(t,e,n){const r=Number(e.stockPares);if(!Number.isInteger(r)||r<1)throw new Error("El stock debe ser un numero entero mayor o igual a 1.");const i={stockPares:r,notasInternas:e.notasInternas||"",updatedAt:Za(),updatedBy:n.uid};if(e.replacementFile){const s=await PA(e.replacementFile),o=await kA(s,t.codigo);i.imageUrl=o.imageUrl,i.imagePath=o.imagePath,await bA(t.imagePath)}await pL(Ro(Cr,"products",t.id),i)}async function xA(t){await bA(t.imagePath),await mL(Ro(Cr,"products",t.id))}let m0=0;function _3(t,e){return m0+=1,{id:`draft-${m0}`,originalName:t.name,status:"compressing",stockPares:e,file:null,previewUrl:"",error:"",progress:0,originalSize:t.size,compressedSize:0}}function v3({actor:t}){const{showToast:e}=Th(),n=W.useRef(null),[r,i]=W.useState(1),[s,o]=W.useState([]),[a,u]=W.useState(!1),[c,h]=W.useState(!1),[f,d]=W.useState({completed:0,total:0,percent:0}),g=W.useMemo(()=>s.filter(T=>T.status==="ready"),[s]);W.useEffect(()=>()=>{s.forEach(T=>{T.previewUrl&&URL.revokeObjectURL(T.previewUrl)})},[s]);const v=(T,m)=>{o(y=>y.map(w=>w.id===T?{...w,...m}:w))},R=async T=>{const y=Array.from(T||[]).filter(A=>A.type.startsWith("image/"));if(y.length===0){e({title:"Selecciona imagenes validas",description:"El lote ignora archivos que no sean imagen.",tone:"danger"});return}const w=y.map(A=>_3(A,Number(r)));o(A=>[...w,...A]),u(!0);for(let A=0;A<y.length;A+=1){const P=y[A],I=w[A];try{const V=await PA(P,O=>{v(I.id,{progress:O})}),B=URL.createObjectURL(V);v(I.id,{status:"ready",progress:100,file:V,previewUrl:B,compressedSize:V.size})}catch(V){v(I.id,{status:"error",error:V.message||"No se pudo optimizar esta imagen."})}}u(!1)},b=async T=>{await R(T.target.files),T.target.value=""},E=async T=>{T.preventDefault(),await R(T.dataTransfer.files)},S=T=>{T.preventDefault()},C=()=>{s.forEach(T=>{T.previewUrl&&URL.revokeObjectURL(T.previewUrl)}),o([]),d({completed:0,total:0,percent:0})},D=()=>{o(T=>T.map(m=>({...m,stockPares:Number(r)})))},M=T=>{o(m=>{const y=m.find(w=>w.id===T);return y!=null&&y.previewUrl&&URL.revokeObjectURL(y.previewUrl),m.filter(w=>w.id!==T)})},x=async()=>{if(g.length!==0){h(!0);try{const T=await y3(g,t,({completed:w,total:A,percent:P})=>{d({completed:w,total:A,percent:P})}),m=T.successes.length,y=T.failures.length;m>0&&e({title:`${m} diseños creados`,description:y>0?`${y} imagenes fallaron y quedaron marcadas en el lote.`:"Todos los productos ya estan visibles en el catalogo.",tone:"success"}),y>0?o(w=>w.map(A=>{const P=T.failures.find(I=>I.itemId===A.id);return P?{...A,status:"error",error:P.message}:(A.previewUrl&&URL.revokeObjectURL(A.previewUrl),null)}).filter(Boolean)):C()}catch(T){e({title:"La subida del lote fallo",description:T.message,tone:"danger"})}finally{h(!1)}}};return L.jsxs("section",{className:"panel-card",children:[L.jsxs("div",{className:"section-header",children:[L.jsxs("div",{children:[L.jsx("span",{className:"eyebrow",children:"Carga masiva"}),L.jsx("h2",{children:"Subir muchas fotos en una sola accion"})]}),L.jsx("button",{type:"button",className:"ghost-button",onClick:()=>{var T;return(T=n.current)==null?void 0:T.click()},children:"Seleccionar imagenes"})]}),L.jsx("input",{ref:n,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:b}),L.jsxs("div",{className:"upload-dropzone",onDrop:E,onDragOver:S,children:[L.jsx("strong",{children:"Arrastra imagenes aca o selecciona multiples archivos"}),L.jsx("p",{children:"Cada imagen se comprime en el navegador antes de subirse a Firebase Storage."})]}),L.jsxs("div",{className:"batch-toolbar",children:[L.jsxs("label",{className:"field field--compact",children:[L.jsx("span",{children:"Stock inicial del lote"}),L.jsx("input",{type:"number",min:"1",step:"1",value:r,onChange:T=>i(T.target.value)})]}),L.jsx("button",{type:"button",className:"ghost-button",onClick:D,disabled:s.length===0,children:"Aplicar a todas"}),L.jsx("button",{type:"button",className:"ghost-button",onClick:C,disabled:s.length===0,children:"Limpiar lote"}),L.jsx("button",{type:"button",className:"primary-button",onClick:x,disabled:g.length===0||c||a,children:c?"Subiendo lote...":`Subir ${g.length||0} diseños`})]}),a||c?L.jsxs("div",{className:"progress-card",children:[L.jsx("strong",{children:a?"Optimizando imagenes...":"Subiendo productos..."}),L.jsx("div",{className:"progress-bar",children:L.jsx("span",{style:{width:`${c?f.percent:100}%`}})}),c?L.jsxs("p",{children:[f.completed," de ",f.total," completados"]}):L.jsx("p",{children:"Preparando previews y archivos comprimidos."})]}):null,L.jsx("div",{className:"upload-grid",children:s.map(T=>L.jsxs("article",{className:`upload-card upload-card--${T.status}`,children:[L.jsxs("div",{className:"upload-preview",children:[T.previewUrl?L.jsx("img",{src:T.previewUrl,alt:T.originalName,className:"upload-image"}):null,T.previewUrl?null:L.jsx("span",{children:T.status==="compressing"?"Procesando...":"Sin preview"})]}),L.jsxs("div",{className:"upload-card-body",children:[L.jsx("strong",{children:T.originalName}),L.jsx("p",{children:T.compressedSize>0?`${Cd(T.originalSize)} -> ${Cd(T.compressedSize)}`:Cd(T.originalSize)}),L.jsxs("label",{className:"field field--compact",children:[L.jsx("span",{children:"Stock"}),L.jsx("input",{type:"number",min:"1",step:"1",value:T.stockPares,onChange:m=>v(T.id,{stockPares:Number(m.target.value)}),disabled:T.status!=="ready"})]}),T.status==="compressing"?L.jsxs("small",{children:["Optimizando ",T.progress,"%"]}):null,T.status==="error"?L.jsx("small",{className:"error-copy",children:T.error}):null]}),L.jsx("button",{type:"button",className:"icon-button",onClick:()=>M(T.id),"aria-label":"Quitar imagen",children:"×"})]},T.id))})]})}function DA({products:t,loading:e,onEdit:n,onDelete:r,emptyTitle:i,emptyDescription:s}){return e?L.jsx(Ih,{label:"Cargando productos..."}):t.length===0?L.jsx(el,{title:i,description:s}):L.jsx("div",{className:"table-shell",children:L.jsxs("table",{className:"admin-table",children:[L.jsx("thead",{children:L.jsxs("tr",{children:[L.jsx("th",{children:"Foto"}),L.jsx("th",{children:"Codigo"}),L.jsx("th",{children:"Disponibilidad"}),L.jsx("th",{children:"Actualizado"}),L.jsx("th",{children:"Notas"}),L.jsx("th",{children:"Acciones"})]})}),L.jsx("tbody",{children:t.map(o=>L.jsxs("tr",{children:[L.jsx("td",{"data-label":"Foto",children:L.jsx("img",{src:o.imageUrl,alt:o.codigo,className:"table-thumb",loading:"lazy"})}),L.jsx("td",{"data-label":"Codigo",children:L.jsx("strong",{children:o.codigo})}),L.jsx("td",{"data-label":"Disponibilidad",children:pA(o.stockPares)}),L.jsx("td",{"data-label":"Actualizado",children:mA(o.updatedAt||o.createdAt)}),L.jsx("td",{"data-label":"Notas",children:o.notasInternas||"Sin notas"}),L.jsx("td",{"data-label":"Acciones",children:L.jsxs("div",{className:"button-row button-row--tight",children:[L.jsx("button",{type:"button",className:"ghost-button",onClick:()=>n(o),children:"Editar"}),L.jsx("button",{type:"button",className:"danger-button",onClick:()=>r(o),children:"Eliminar"})]})})]},o.id))})]})})}function OA({product:t,onClose:e,onSubmit:n,submitting:r}){const[i,s]=W.useState(t.stockPares),[o,a]=W.useState(t.notasInternas||""),[u,c]=W.useState(null),h=W.useMemo(()=>u?URL.createObjectURL(u):t.imageUrl,[t.imageUrl,u]);W.useEffect(()=>()=>{u&&URL.revokeObjectURL(h)},[h,u]);const f=async d=>{d.preventDefault(),await n({stockPares:Number(i),notasInternas:o.trim(),replacementFile:u})};return L.jsx("div",{className:"modal-backdrop",role:"presentation",children:L.jsxs("div",{className:"modal-card",role:"dialog","aria-modal":"true","aria-labelledby":"editor-title",children:[L.jsxs("div",{className:"section-header",children:[L.jsxs("div",{children:[L.jsx("span",{className:"eyebrow",children:"Editar producto"}),L.jsx("h2",{id:"editor-title",children:t.codigo})]}),L.jsx("button",{type:"button",className:"icon-button",onClick:e,"aria-label":"Cerrar",children:"×"})]}),L.jsxs("form",{className:"form-grid",onSubmit:f,children:[L.jsx("div",{className:"editor-preview",children:L.jsx("img",{src:h,alt:t.codigo,className:"editor-image"})}),L.jsxs("label",{className:"field",children:[L.jsx("span",{children:"Stock en pares"}),L.jsx("input",{type:"number",min:"1",step:"1",value:i,onChange:d=>s(d.target.value),required:!0})]}),L.jsxs("label",{className:"field",children:[L.jsx("span",{children:"Notas internas"}),L.jsx("textarea",{rows:"4",value:o,onChange:d=>a(d.target.value),placeholder:"Referencia rapida para el equipo"})]}),L.jsxs("label",{className:"field",children:[L.jsx("span",{children:"Reemplazar imagen"}),L.jsx("input",{type:"file",accept:"image/*",onChange:d=>{var g;return c(((g=d.target.files)==null?void 0:g[0])||null)}})]}),L.jsxs("div",{className:"button-row",children:[L.jsx("button",{type:"button",className:"ghost-button",onClick:e,children:"Cancelar"}),L.jsx("button",{type:"submit",className:"primary-button",disabled:r,children:r?"Guardando...":"Guardar cambios"})]})]})]})})}function w3({actor:t}){const{showToast:e}=Th(),[n,r]=W.useState({nombre:"",email:"",password:""}),[i,s]=W.useState(!1),[o,a]=W.useState([]);W.useEffect(()=>jV(a,f=>{console.error(f)}),[]);const u=h=>{const{name:f,value:d}=h.target;r(g=>({...g,[f]:d}))},c=async h=>{h.preventDefault(),s(!0);try{await $V(n,t),r({nombre:"",email:"",password:""}),e({title:"Vendedora creada",description:"La nueva usuaria ya puede iniciar sesion en el panel.",tone:"success"})}catch(f){e({title:"No se pudo crear la usuaria",description:f.message,tone:"danger"})}finally{s(!1)}};return L.jsxs("section",{className:"panel-card",children:[L.jsx("div",{className:"section-header",children:L.jsxs("div",{children:[L.jsx("span",{className:"eyebrow",children:"Usuarios"}),L.jsx("h2",{children:"Gestion de vendedoras"})]})}),L.jsxs("form",{className:"form-grid",onSubmit:c,children:[L.jsxs("label",{className:"field",children:[L.jsx("span",{children:"Nombre"}),L.jsx("input",{type:"text",name:"nombre",value:n.nombre,onChange:u,placeholder:"Nombre de la operadora",required:!0})]}),L.jsxs("label",{className:"field",children:[L.jsx("span",{children:"Email"}),L.jsx("input",{type:"email",name:"email",value:n.email,onChange:u,placeholder:"vendedora@dominio.com",required:!0})]}),L.jsxs("label",{className:"field",children:[L.jsx("span",{children:"Contrasena inicial"}),L.jsx("input",{type:"password",name:"password",minLength:"6",value:n.password,onChange:u,placeholder:"Minimo 6 caracteres",required:!0})]}),L.jsx("button",{type:"submit",className:"primary-button",disabled:i,children:i?"Creando...":"Crear vendedora"})]}),L.jsxs("div",{className:"user-list",children:[o.map(h=>L.jsxs("article",{className:"user-row",children:[L.jsxs("div",{children:[L.jsx("strong",{children:h.nombre}),L.jsx("p",{children:h.email})]}),L.jsx("span",{className:"role-pill",children:"seller"})]},h.uid)),o.length===0?L.jsx("p",{className:"muted-copy",children:"Todavia no hay vendedoras registradas."}):null]})]})}function Ia({label:t,value:e}){return L.jsxs("article",{className:"stat-card stat-card--dashboard",children:[L.jsx("span",{children:t}),L.jsx("strong",{children:e})]})}function E3(){const{profile:t}=Tl(),{showToast:e}=Th(),{products:n,loading:r,error:i}=hg(),[s,o]=W.useState(""),[a,u]=W.useState(null),[c,h]=W.useState(!1),f=W.useMemo(()=>{const R=s.trim().toLowerCase();return R?n.filter(b=>b.codigo.toLowerCase().includes(R)):n},[n,s]),d=async R=>{if(window.confirm(`Se eliminara ${R.codigo} y su imagen. Esta accion no se puede deshacer.`))try{await xA(R),e({title:`${R.codigo} eliminado`,description:"El producto desaparecio del catalogo publico y del panel.",tone:"success"})}catch(E){e({title:"No se pudo eliminar",description:E.message,tone:"danger"})}},g=async R=>{if(a){h(!0);try{await NA(a,R,t),e({title:`${a.codigo} actualizado`,description:"Los cambios ya estan sincronizados con el catalogo.",tone:"success"}),u(null)}catch(b){e({title:"No se pudo guardar",description:b.message,tone:"danger"})}finally{h(!1)}}},v=n.reduce((R,b)=>R+Number(b.stockPares||0),0);return L.jsxs("section",{className:"dashboard-page",children:[L.jsxs("div",{className:"page-header",children:[L.jsxs("div",{children:[L.jsx("span",{className:"eyebrow",children:"Super admin"}),L.jsx("h1",{children:"Control total del catalogo"}),L.jsx("p",{children:mA(new Date)})]}),L.jsx("a",{href:gA(),className:"ghost-button",target:"_blank",rel:"noreferrer",children:"Abrir catalogo publico"})]}),L.jsxs("div",{className:"stat-grid",children:[L.jsx(Ia,{label:"Disenos activos",value:n.length}),L.jsx(Ia,{label:"Pares disponibles",value:v}),L.jsx(Ia,{label:"Resultados filtrados",value:f.length})]}),L.jsxs("div",{className:"dashboard-grid",children:[L.jsx(v3,{actor:t}),L.jsx(w3,{actor:t})]}),L.jsxs("section",{className:"panel-card",children:[L.jsxs("div",{className:"section-header",children:[L.jsxs("div",{children:[L.jsx("span",{className:"eyebrow",children:"Inventario"}),L.jsx("h2",{children:"Listado completo"})]}),L.jsxs("label",{className:"field field--compact",children:[L.jsx("span",{children:"Buscar por codigo"}),L.jsx("input",{type:"search",value:s,onChange:R=>o(R.target.value),placeholder:"ALM-0001"})]})]}),i?L.jsx(el,{title:"No se pudo leer el inventario",description:i}):null,i?null:L.jsx(DA,{products:f,loading:r,onEdit:u,onDelete:d,emptyTitle:"Todavia no hay productos cargados",emptyDescription:"Usa la carga masiva para crear diseños automaticamente desde varias fotos."})]}),a?L.jsx(OA,{product:a,submitting:c,onClose:()=>u(null),onSubmit:g}):null]})}function T3(){const{profile:t}=Tl(),{showToast:e}=Th(),{products:n,loading:r,error:i}=hg(),[s,o]=W.useState(""),[a,u]=W.useState(null),[c,h]=W.useState(!1),f=W.useMemo(()=>{const v=s.trim().toLowerCase();return v?n.filter(R=>R.codigo.toLowerCase().includes(v)):n},[n,s]),d=async v=>{if(window.confirm(`Se eliminara ${v.codigo} del sistema y del catalogo publico.`))try{await xA(v),e({title:`${v.codigo} dado de baja`,description:"El diseño ya no aparece en el link compartido.",tone:"success"})}catch(b){e({title:"No se pudo eliminar",description:b.message,tone:"danger"})}},g=async v=>{if(a){h(!0);try{await NA(a,v,t),e({title:`${a.codigo} actualizado`,description:"La disponibilidad nueva ya quedo reflejada.",tone:"success"}),u(null)}catch(R){e({title:"No se pudo guardar",description:R.message,tone:"danger"})}finally{h(!1)}}};return L.jsxs("section",{className:"dashboard-page",children:[L.jsxs("div",{className:"page-header",children:[L.jsxs("div",{children:[L.jsx("span",{className:"eyebrow",children:"Operaciones"}),L.jsx("h1",{children:"Panel rapido para venta diaria"}),L.jsx("p",{children:"Busca por codigo, corrige stock si hace falta y elimina los productos vendidos."})]}),L.jsx("a",{href:gA(),className:"ghost-button",target:"_blank",rel:"noreferrer",children:"Abrir catalogo publico"})]}),L.jsxs("div",{className:"stat-grid",children:[L.jsx(Ia,{label:"Disenos visibles",value:n.length}),L.jsx(Ia,{label:"Resultados",value:f.length})]}),L.jsxs("section",{className:"panel-card",children:[L.jsxs("div",{className:"section-header",children:[L.jsxs("div",{children:[L.jsx("span",{className:"eyebrow",children:"Operacion diaria"}),L.jsx("h2",{children:"Buscar por codigo"})]}),L.jsxs("label",{className:"field field--compact",children:[L.jsx("span",{children:"Codigo"}),L.jsx("input",{type:"search",value:s,onChange:v=>o(v.target.value),placeholder:"ALM-0001"})]})]}),i?L.jsx(el,{title:"No se pudo cargar el inventario",description:i}):null,i?null:L.jsx(DA,{products:f,loading:r,onEdit:u,onDelete:d,emptyTitle:"No hay productos para mostrar",emptyDescription:"Cuando el super admin cargue nuevos diseños, apareceran aca automaticamente."})]}),a?L.jsx(OA,{product:a,submitting:c,onClose:()=>u(null),onSubmit:g}):null]})}function I3(){const{role:t}=Tl();return t==="superadmin"?L.jsx(E3,{}):L.jsx(T3,{})}const A3=W.lazy(()=>kE(()=>import("./LoginPage-y2Bzn37x.js"),[],import.meta.url)),S3=W.lazy(()=>kE(()=>import("./PrivateLayout-Bhz0rJzV.js"),[],import.meta.url));function R3(){return L.jsx(KV,{children:L.jsx(WV,{children:L.jsx(VP,{children:L.jsx(W.Suspense,{fallback:L.jsx(Ih,{fullScreen:!0,label:"Cargando interfaz..."}),children:L.jsxs(kP,{children:[L.jsxs(Ur,{element:L.jsx(YV,{}),children:[L.jsx(Ur,{index:!0,element:L.jsx(r3,{})}),L.jsx(Ur,{path:"/login",element:L.jsx(A3,{})})]}),L.jsx(Ur,{path:"/admin",element:L.jsx(XV,{allowedRoles:["superadmin","seller"],children:L.jsx(S3,{})}),children:L.jsx(Ur,{index:!0,element:L.jsx(I3,{})})}),L.jsx(Ur,{path:"/panel/*",element:L.jsx(nc,{to:"/admin",replace:!0})}),L.jsx(Ur,{path:"*",element:L.jsx(nc,{to:"/",replace:!0})})]})})})})})}kd.createRoot(document.getElementById("root")).render(L.jsx(R0.StrictMode,{children:L.jsx(R3,{})}));export{CP as O,Tl as a,Th as b,gA as g,L as j,W as r,LE as u};
