const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AdminDashboardPage-DIA-QRDl.js","./StatCard-Cde-XLFw.js","./SellerDashboardPage-DvrOWeja.js"])))=>i.map(i=>d[i]);
function _A(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zv={exports:{}},Uu={},$v={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),vA=Symbol.for("react.portal"),wA=Symbol.for("react.fragment"),EA=Symbol.for("react.strict_mode"),TA=Symbol.for("react.profiler"),IA=Symbol.for("react.provider"),SA=Symbol.for("react.context"),AA=Symbol.for("react.forward_ref"),RA=Symbol.for("react.suspense"),CA=Symbol.for("react.memo"),PA=Symbol.for("react.lazy"),kg=Symbol.iterator;function kA(t){return t===null||typeof t!="object"?null:(t=kg&&t[kg]||t["@@iterator"],typeof t=="function"?t:null)}var qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hv=Object.assign,Wv={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||qv}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gv(){}Gv.prototype=Cs.prototype;function Tf(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||qv}var If=Tf.prototype=new Gv;If.constructor=Tf;Hv(If,Cs.prototype);If.isPureReactComponent=!0;var Ng=Array.isArray,Kv=Object.prototype.hasOwnProperty,Sf={current:null},Qv={key:!0,ref:!0,__self:!0,__source:!0};function Xv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kv.call(e,r)&&!Qv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fa,type:t,key:s,ref:o,props:i,_owner:Sf.current}}function NA(t,e){return{$$typeof:fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Af(t){return typeof t=="object"&&t!==null&&t.$$typeof===fa}function DA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dg=/\/+/g;function ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DA(""+t.key):e.toString(36)}function Tl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fa:case vA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ih(o,0):r,Ng(i)?(n="",t!=null&&(n=t.replace(Dg,"$&/")+"/"),Tl(i,e,n,"",function(c){return c})):i!=null&&(Af(i)&&(i=NA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ng(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ih(s,l);o+=Tl(s,e,n,u,i)}else if(u=kA(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ih(s,l++),o+=Tl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return Tl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},Il={transition:null},OA={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Il,ReactCurrentOwner:Sf};function Yv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Cs;ee.Fragment=wA;ee.Profiler=TA;ee.PureComponent=Tf;ee.StrictMode=EA;ee.Suspense=RA;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OA;ee.act=Yv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Kv.call(e,u)&&!Qv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:fa,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:SA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IA,_context:t},t.Consumer=t};ee.createElement=Xv;ee.createFactory=function(t){var e=Xv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:AA,render:t}};ee.isValidElement=Af;ee.lazy=function(t){return{$$typeof:PA,_payload:{_status:-1,_result:t},_init:xA}};ee.memo=function(t,e){return{$$typeof:CA,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};ee.unstable_act=Yv;ee.useCallback=function(t,e){return ft.current.useCallback(t,e)};ee.useContext=function(t){return ft.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ft.current.useEffect(t,e)};ee.useId=function(){return ft.current.useId()};ee.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ft.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};ee.useRef=function(t){return ft.current.useRef(t)};ee.useState=function(t){return ft.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ft.current.useTransition()};ee.version="18.3.1";$v.exports=ee;var L=$v.exports;const Jv=yA(L),bA=_A({__proto__:null,default:Jv},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VA=L,LA=Symbol.for("react.element"),MA=Symbol.for("react.fragment"),UA=Object.prototype.hasOwnProperty,FA=VA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jA={key:!0,ref:!0,__self:!0,__source:!0};function Zv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UA.call(e,r)&&!jA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:LA,type:t,key:s,ref:o,props:i,_owner:FA.current}}Uu.Fragment=MA;Uu.jsx=Zv;Uu.jsxs=Zv;zv.exports=Uu;var B=zv.exports,Kh={},ew={exports:{}},Vt={},tw={exports:{}},nw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var J=$.length;$.push(Y);e:for(;0<J;){var ve=J-1>>>1,ce=$[ve];if(0<i(ce,Y))$[ve]=Y,$[J]=ce,J=ve;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],J=$.pop();if(J!==Y){$[0]=J;e:for(var ve=0,ce=$.length,ke=ce>>>1;ve<ke;){var wn=2*(ve+1)-1,En=$[wn],Tn=wn+1,In=$[Tn];if(0>i(En,J))Tn<ce&&0>i(In,En)?($[ve]=In,$[Tn]=J,ve=Tn):($[ve]=En,$[wn]=J,ve=wn);else if(Tn<ce&&0>i(In,J))$[ve]=In,$[Tn]=J,ve=Tn;else break e}}return Y}function i($,Y){var J=$.sortIndex-Y.sortIndex;return J!==0?J:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,v=!1,R=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function x($){if(P=!1,E($),!R)if(n(u)!==null)R=!0,Fs(M);else{var Y=n(c);Y!==null&&vn(x,Y.startTime-$)}}function M($,Y){R=!1,P&&(P=!1,I(_),_=-1),v=!0;var J=m;try{for(E(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||$&&!C());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,m=p.priorityLevel;var ce=ve(p.expirationTime<=Y);Y=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(u)&&r(u),E(Y)}else r(u);p=n(u)}if(p!==null)var ke=!0;else{var wn=n(c);wn!==null&&vn(x,wn.startTime-Y),ke=!1}return ke}finally{p=null,m=J,v=!1}}var F=!1,T=null,_=-1,w=5,S=-1;function C(){return!(t.unstable_now()-S<w)}function D(){if(T!==null){var $=t.unstable_now();S=$;var Y=!0;try{Y=T(!0,$)}finally{Y?A():(F=!1,T=null)}}else F=!1}var A;if(typeof y=="function")A=function(){y(D)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,Wr=Mt.port2;Mt.port1.onmessage=D,A=function(){Wr.postMessage(null)}}else A=function(){k(D,0)};function Fs($){T=$,F||(F=!0,A())}function vn($,Y){_=k(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||v||(R=!0,Fs(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var J=m;m=Y;try{return $()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=m;m=$;try{return Y()}finally{m=J}},t.unstable_scheduleCallback=function($,Y,J){var ve=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ve+J:ve):J=ve,$){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=J+ce,$={id:d++,callback:Y,priorityLevel:$,startTime:J,expirationTime:ce,sortIndex:-1},J>ve?($.sortIndex=J,e(c,$),n(u)===null&&$===n(c)&&(P?(I(_),_=-1):P=!0,vn(x,J-ve))):($.sortIndex=ce,e(u,$),R||v||(R=!0,Fs(M))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var Y=m;return function(){var J=m;m=Y;try{return $.apply(this,arguments)}finally{m=J}}}})(nw);tw.exports=nw;var BA=tw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zA=L,bt=BA;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rw=new Set,Mo={};function Ti(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(Mo[t]=e,t=0;t<e.length;t++)rw.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qh=Object.prototype.hasOwnProperty,$A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xg={},Og={};function qA(t){return Qh.call(Og,t)?!0:Qh.call(xg,t)?!1:$A.test(t)?Og[t]=!0:(xg[t]=!0,!1)}function HA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function WA(t,e,n,r){if(e===null||typeof e>"u"||HA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rf=/[\-:]([a-z])/g;function Cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rf,Cf);Ke[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rf,Cf);Ke[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rf,Cf);Ke[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pf(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(WA(e,n,i,r)&&(n=null),r||i===null?qA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=zA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),zi=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Xh=Symbol.for("react.profiler"),iw=Symbol.for("react.provider"),sw=Symbol.for("react.context"),Nf=Symbol.for("react.forward_ref"),Yh=Symbol.for("react.suspense"),Jh=Symbol.for("react.suspense_list"),Df=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),ow=Symbol.for("react.offscreen"),bg=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=bg&&t[bg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,sh;function lo(t){if(sh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sh=e&&e[1]||""}return`
`+sh+t}var oh=!1;function ah(t,e){if(!t||oh)return"";oh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{oh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lo(t):""}function GA(t){switch(t.tag){case 5:return lo(t.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return t=ah(t.type,!1),t;case 11:return t=ah(t.type.render,!1),t;case 1:return t=ah(t.type,!0),t;default:return""}}function Zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $i:return"Fragment";case zi:return"Portal";case Xh:return"Profiler";case kf:return"StrictMode";case Yh:return"Suspense";case Jh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sw:return(t.displayName||"Context")+".Consumer";case iw:return(t._context.displayName||"Context")+".Provider";case Nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Df:return e=t.displayName||null,e!==null?e:Zh(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Zh(t(e))}catch{}}return null}function KA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zh(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function aw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QA(t){var e=aw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=QA(t))}function lw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=aw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ed(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uw(t,e){e=e.checked,e!=null&&Pf(t,"checked",e,!1)}function td(t,e){uw(t,e);var n=Cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&nd(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nd(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var uo=Array.isArray;function ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(uo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function cw(t,e){var n=Cr(e.value),r=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var el,dw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=el.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XA=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){XA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function fw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function pw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YA=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sd(t,e){if(e){if(YA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ad=null;function xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ld=null,rs=null,is=null;function Fg(t){if(t=ga(t)){if(typeof ld!="function")throw Error(U(280));var e=t.stateNode;e&&(e=$u(e),ld(t.stateNode,t.type,e))}}function mw(t){rs?is?is.push(t):is=[t]:rs=t}function gw(){if(rs){var t=rs,e=is;if(is=rs=null,Fg(t),e)for(t=0;t<e.length;t++)Fg(e[t])}}function _w(t,e){return t(e)}function yw(){}var lh=!1;function vw(t,e,n){if(lh)return t(e,n);lh=!0;try{return _w(t,e,n)}finally{lh=!1,(rs!==null||is!==null)&&(yw(),gw())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var r=$u(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var ud=!1;if(Mn)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){ud=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{ud=!1}function JA(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var wo=!1,Hl=null,Wl=!1,cd=null,ZA={onError:function(t){wo=!0,Hl=t}};function eR(t,e,n,r,i,s,o,l,u){wo=!1,Hl=null,JA.apply(ZA,arguments)}function tR(t,e,n,r,i,s,o,l,u){if(eR.apply(this,arguments),wo){if(wo){var c=Hl;wo=!1,Hl=null}else throw Error(U(198));Wl||(Wl=!0,cd=c)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ww(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jg(t){if(Ii(t)!==t)throw Error(U(188))}function nR(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jg(i),t;if(s===r)return jg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Ew(t){return t=nR(t),t!==null?Tw(t):null}function Tw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tw(t);if(e!==null)return e;t=t.sibling}return null}var Iw=bt.unstable_scheduleCallback,Bg=bt.unstable_cancelCallback,rR=bt.unstable_shouldYield,iR=bt.unstable_requestPaint,De=bt.unstable_now,sR=bt.unstable_getCurrentPriorityLevel,Of=bt.unstable_ImmediatePriority,Sw=bt.unstable_UserBlockingPriority,Gl=bt.unstable_NormalPriority,oR=bt.unstable_LowPriority,Aw=bt.unstable_IdlePriority,Fu=null,hn=null;function aR(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Fu,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:cR,lR=Math.log,uR=Math.LN2;function cR(t){return t>>>=0,t===0?32:31-(lR(t)/uR|0)|0}var tl=64,nl=4194304;function co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=co(l):(s&=o,s!==0&&(r=co(s)))}else o=n&~i,o!==0?r=co(o):s!==0&&(r=co(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),i=1<<n,r|=t[n],e&=~i;return r}function hR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=hR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function hd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rw(){var t=tl;return tl<<=1,!(tl&4194240)&&(tl=64),t}function uh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function fR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function Cw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pw,Vf,kw,Nw,Dw,dd=!1,rl=[],fr=null,pr=null,mr=null,jo=new Map,Bo=new Map,nr=[],pR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zg(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function to(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ga(e),e!==null&&Vf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mR(t,e,n,r,i){switch(e){case"focusin":return fr=to(fr,t,e,n,r,i),!0;case"dragenter":return pr=to(pr,t,e,n,r,i),!0;case"mouseover":return mr=to(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return jo.set(s,to(jo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bo.set(s,to(Bo.get(s)||null,t,e,n,r,i)),!0}return!1}function xw(t){var e=ti(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=ww(n),e!==null){t.blockedOn=e,Dw(t.priority,function(){kw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ad=r,n.target.dispatchEvent(r),ad=null}else return e=ga(n),e!==null&&Vf(e),t.blockedOn=n,!1;e.shift()}return!0}function $g(t,e,n){Sl(t)&&n.delete(e)}function gR(){dd=!1,fr!==null&&Sl(fr)&&(fr=null),pr!==null&&Sl(pr)&&(pr=null),mr!==null&&Sl(mr)&&(mr=null),jo.forEach($g),Bo.forEach($g)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,dd||(dd=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,gR)))}function zo(t){function e(i){return no(i,t)}if(0<rl.length){no(rl[0],t);for(var n=1;n<rl.length;n++){var r=rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&no(fr,t),pr!==null&&no(pr,t),mr!==null&&no(mr,t),jo.forEach(e),Bo.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)xw(n),n.blockedOn===null&&nr.shift()}var ss=Hn.ReactCurrentBatchConfig,Ql=!0;function _R(t,e,n,r){var i=ae,s=ss.transition;ss.transition=null;try{ae=1,Lf(t,e,n,r)}finally{ae=i,ss.transition=s}}function yR(t,e,n,r){var i=ae,s=ss.transition;ss.transition=null;try{ae=4,Lf(t,e,n,r)}finally{ae=i,ss.transition=s}}function Lf(t,e,n,r){if(Ql){var i=fd(t,e,n,r);if(i===null)vh(t,e,r,Xl,n),zg(t,r);else if(mR(i,t,e,n,r))r.stopPropagation();else if(zg(t,r),e&4&&-1<pR.indexOf(t)){for(;i!==null;){var s=ga(i);if(s!==null&&Pw(s),s=fd(t,e,n,r),s===null&&vh(t,e,r,Xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vh(t,e,r,null,n)}}var Xl=null;function fd(t,e,n,r){if(Xl=null,t=xf(r),t=ti(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ww(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function Ow(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sR()){case Of:return 1;case Sw:return 4;case Gl:case oR:return 16;case Aw:return 536870912;default:return 16}default:return 16}}var ur=null,Mf=null,Al=null;function bw(){if(Al)return Al;var t,e=Mf,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Al=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function qg(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:qg,this.isPropagationStopped=qg,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=Lt(Ps),ma=Se({},Ps,{view:0,detail:0}),vR=Lt(ma),ch,hh,ro,ju=Se({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(ch=t.screenX-ro.screenX,hh=t.screenY-ro.screenY):hh=ch=0,ro=t),ch)},movementY:function(t){return"movementY"in t?t.movementY:hh}}),Hg=Lt(ju),wR=Se({},ju,{dataTransfer:0}),ER=Lt(wR),TR=Se({},ma,{relatedTarget:0}),dh=Lt(TR),IR=Se({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),SR=Lt(IR),AR=Se({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RR=Lt(AR),CR=Se({},Ps,{data:0}),Wg=Lt(CR),PR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NR[t])?!!e[t]:!1}function Ff(){return DR}var xR=Se({},ma,{key:function(t){if(t.key){var e=PR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OR=Lt(xR),bR=Se({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=Lt(bR),VR=Se({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),LR=Lt(VR),MR=Se({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),UR=Lt(MR),FR=Se({},ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jR=Lt(FR),BR=[9,13,27,32],jf=Mn&&"CompositionEvent"in window,Eo=null;Mn&&"documentMode"in document&&(Eo=document.documentMode);var zR=Mn&&"TextEvent"in window&&!Eo,Vw=Mn&&(!jf||Eo&&8<Eo&&11>=Eo),Kg=" ",Qg=!1;function Lw(t,e){switch(t){case"keyup":return BR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qi=!1;function $R(t,e){switch(t){case"compositionend":return Mw(e);case"keypress":return e.which!==32?null:(Qg=!0,Kg);case"textInput":return t=e.data,t===Kg&&Qg?null:t;default:return null}}function qR(t,e){if(qi)return t==="compositionend"||!jf&&Lw(t,e)?(t=bw(),Al=Mf=ur=null,qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vw&&e.locale!=="ko"?null:e.data;default:return null}}var HR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HR[t.type]:e==="textarea"}function Uw(t,e,n,r){mw(r),e=Yl(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,$o=null;function WR(t){Qw(t,0)}function Bu(t){var e=Gi(t);if(lw(e))return t}function GR(t,e){if(t==="change")return e}var Fw=!1;if(Mn){var fh;if(Mn){var ph="oninput"in document;if(!ph){var Yg=document.createElement("div");Yg.setAttribute("oninput","return;"),ph=typeof Yg.oninput=="function"}fh=ph}else fh=!1;Fw=fh&&(!document.documentMode||9<document.documentMode)}function Jg(){To&&(To.detachEvent("onpropertychange",jw),$o=To=null)}function jw(t){if(t.propertyName==="value"&&Bu($o)){var e=[];Uw(e,$o,t,xf(t)),vw(WR,e)}}function KR(t,e,n){t==="focusin"?(Jg(),To=e,$o=n,To.attachEvent("onpropertychange",jw)):t==="focusout"&&Jg()}function QR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bu($o)}function XR(t,e){if(t==="click")return Bu(e)}function YR(t,e){if(t==="input"||t==="change")return Bu(e)}function JR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:JR;function qo(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qh.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Zg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function e_(t,e){var n=Zg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zg(n)}}function Bw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zw(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZR(t){var e=zw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bw(n.ownerDocument.documentElement,n)){if(r!==null&&Bf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=e_(n,s);var o=e_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var e1=Mn&&"documentMode"in document&&11>=document.documentMode,Hi=null,pd=null,Io=null,md=!1;function t_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||Hi==null||Hi!==ql(r)||(r=Hi,"selectionStart"in r&&Bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&qo(Io,r)||(Io=r,r=Yl(pd,"onSelect"),0<r.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},mh={},$w={};Mn&&($w=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function zu(t){if(mh[t])return mh[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $w)return mh[t]=e[n];return t}var qw=zu("animationend"),Hw=zu("animationiteration"),Ww=zu("animationstart"),Gw=zu("transitionend"),Kw=new Map,n_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){Kw.set(t,e),Ti(e,[t])}for(var gh=0;gh<n_.length;gh++){var _h=n_[gh],t1=_h.toLowerCase(),n1=_h[0].toUpperCase()+_h.slice(1);Ur(t1,"on"+n1)}Ur(qw,"onAnimationEnd");Ur(Hw,"onAnimationIteration");Ur(Ww,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(Gw,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function r_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tR(r,e,void 0,t),t.currentTarget=null}function Qw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;r_(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;r_(i,l,c),s=u}}}if(Wl)throw t=cd,Wl=!1,cd=null,t}function pe(t,e){var n=e[wd];n===void 0&&(n=e[wd]=new Set);var r=t+"__bubble";n.has(r)||(Xw(e,t,2,!1),n.add(r))}function yh(t,e,n){var r=0;e&&(r|=4),Xw(n,t,r,e)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[ol]){t[ol]=!0,rw.forEach(function(n){n!=="selectionchange"&&(r1.has(n)||yh(n,!1,t),yh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ol]||(e[ol]=!0,yh("selectionchange",!1,e))}}function Xw(t,e,n,r){switch(Ow(e)){case 1:var i=_R;break;case 4:i=yR;break;default:i=Lf}n=i.bind(null,e,n,t),i=void 0,!ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ti(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vw(function(){var c=s,d=xf(n),p=[];e:{var m=Kw.get(t);if(m!==void 0){var v=Uf,R=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":v=OR;break;case"focusin":R="focus",v=dh;break;case"focusout":R="blur",v=dh;break;case"beforeblur":case"afterblur":v=dh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ER;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=LR;break;case qw:case Hw:case Ww:v=SR;break;case Gw:v=UR;break;case"scroll":v=vR;break;case"wheel":v=jR;break;case"copy":case"cut":case"paste":v=RR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Gg}var P=(e&4)!==0,k=!P&&t==="scroll",I=P?m!==null?m+"Capture":null:m;P=[];for(var y=c,E;y!==null;){E=y;var x=E.stateNode;if(E.tag===5&&x!==null&&(E=x,I!==null&&(x=Fo(y,I),x!=null&&P.push(Wo(y,x,E)))),k)break;y=y.return}0<P.length&&(m=new v(m,R,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==ad&&(R=n.relatedTarget||n.fromElement)&&(ti(R)||R[Un]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(R=n.relatedTarget||n.toElement,v=c,R=R?ti(R):null,R!==null&&(k=Ii(R),R!==k||R.tag!==5&&R.tag!==6)&&(R=null)):(v=null,R=c),v!==R)){if(P=Hg,x="onMouseLeave",I="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=Gg,x="onPointerLeave",I="onPointerEnter",y="pointer"),k=v==null?m:Gi(v),E=R==null?m:Gi(R),m=new P(x,y+"leave",v,n,d),m.target=k,m.relatedTarget=E,x=null,ti(d)===c&&(P=new P(I,y+"enter",R,n,d),P.target=E,P.relatedTarget=k,x=P),k=x,v&&R)t:{for(P=v,I=R,y=0,E=P;E;E=Li(E))y++;for(E=0,x=I;x;x=Li(x))E++;for(;0<y-E;)P=Li(P),y--;for(;0<E-y;)I=Li(I),E--;for(;y--;){if(P===I||I!==null&&P===I.alternate)break t;P=Li(P),I=Li(I)}P=null}else P=null;v!==null&&i_(p,m,v,P,!1),R!==null&&k!==null&&i_(p,k,R,P,!0)}}e:{if(m=c?Gi(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var M=GR;else if(Xg(m))if(Fw)M=YR;else{M=QR;var F=KR}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=XR);if(M&&(M=M(t,c))){Uw(p,M,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&nd(m,"number",m.value)}switch(F=c?Gi(c):window,t){case"focusin":(Xg(F)||F.contentEditable==="true")&&(Hi=F,pd=c,Io=null);break;case"focusout":Io=pd=Hi=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,t_(p,n,d);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":t_(p,n,d)}var T;if(jf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else qi?Lw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Vw&&n.locale!=="ko"&&(qi||_!=="onCompositionStart"?_==="onCompositionEnd"&&qi&&(T=bw()):(ur=d,Mf="value"in ur?ur.value:ur.textContent,qi=!0)),F=Yl(c,_),0<F.length&&(_=new Wg(_,t,null,n,d),p.push({event:_,listeners:F}),T?_.data=T:(T=Mw(n),T!==null&&(_.data=T)))),(T=zR?$R(t,n):qR(t,n))&&(c=Yl(c,"onBeforeInput"),0<c.length&&(d=new Wg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=T))}Qw(p,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fo(t,n),s!=null&&r.unshift(Wo(t,s,i)),s=Fo(t,e),s!=null&&r.push(Wo(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function i_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Fo(n,s),u!=null&&o.unshift(Wo(n,u,l))):i||(u=Fo(n,s),u!=null&&o.push(Wo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var i1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function s_(t){return(typeof t=="string"?t:""+t).replace(i1,`
`).replace(s1,"")}function al(t,e,n){if(e=s_(e),s_(t)!==e&&n)throw Error(U(425))}function Jl(){}var gd=null,_d=null;function yd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,a1=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(t){return o_.resolve(null).then(t).catch(l1)}:vd;function l1(t){setTimeout(function(){throw t})}function wh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zo(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function a_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),un="__reactFiber$"+ks,Go="__reactProps$"+ks,Un="__reactContainer$"+ks,wd="__reactEvents$"+ks,u1="__reactListeners$"+ks,c1="__reactHandles$"+ks;function ti(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=a_(t);t!==null;){if(n=t[un])return n;t=a_(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[un]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function $u(t){return t[Go]||null}var Ed=[],Ki=-1;function Fr(t){return{current:t}}function ge(t){0>Ki||(t.current=Ed[Ki],Ed[Ki]=null,Ki--)}function de(t,e){Ki++,Ed[Ki]=t.current,t.current=e}var Pr={},st=Fr(Pr),vt=Fr(!1),ui=Pr;function ps(t,e){var n=t.type.contextTypes;if(!n)return Pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function Zl(){ge(vt),ge(st)}function l_(t,e,n){if(st.current!==Pr)throw Error(U(168));de(st,e),de(vt,n)}function Yw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,KA(t)||"Unknown",i));return Se({},n,r)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,ui=st.current,de(st,t),de(vt,vt.current),!0}function u_(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Yw(t,e,ui),r.__reactInternalMemoizedMergedChildContext=t,ge(vt),ge(st),de(st,t)):ge(vt),de(vt,n)}var Pn=null,qu=!1,Eh=!1;function Jw(t){Pn===null?Pn=[t]:Pn.push(t)}function h1(t){qu=!0,Jw(t)}function jr(){if(!Eh&&Pn!==null){Eh=!0;var t=0,e=ae;try{var n=Pn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pn=null,qu=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(t+1)),Iw(Of,jr),i}finally{ae=e,Eh=!1}}return null}var Qi=[],Xi=0,tu=null,nu=0,Ut=[],Ft=0,ci=null,kn=1,Nn="";function Yr(t,e){Qi[Xi++]=nu,Qi[Xi++]=tu,tu=t,nu=e}function Zw(t,e,n){Ut[Ft++]=kn,Ut[Ft++]=Nn,Ut[Ft++]=ci,ci=t;var r=kn;t=Nn;var i=32-Zt(r)-1;r&=~(1<<i),n+=1;var s=32-Zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-Zt(e)+i|n<<i|r,Nn=s+t}else kn=1<<s|n<<i|r,Nn=t}function zf(t){t.return!==null&&(Yr(t,1),Zw(t,1,0))}function $f(t){for(;t===tu;)tu=Qi[--Xi],Qi[Xi]=null,nu=Qi[--Xi],Qi[Xi]=null;for(;t===ci;)ci=Ut[--Ft],Ut[Ft]=null,Nn=Ut[--Ft],Ut[Ft]=null,kn=Ut[--Ft],Ut[Ft]=null}var Dt=null,Pt=null,ye=!1,Yt=null;function eE(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function c_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,Pt=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ci!==null?{id:kn,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,Pt=null,!0):!1;default:return!1}}function Td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Id(t){if(ye){var e=Pt;if(e){var n=e;if(!c_(t,e)){if(Td(t))throw Error(U(418));e=gr(n.nextSibling);var r=Dt;e&&c_(t,e)?eE(r,n):(t.flags=t.flags&-4097|2,ye=!1,Dt=t)}}else{if(Td(t))throw Error(U(418));t.flags=t.flags&-4097|2,ye=!1,Dt=t}}}function h_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function ll(t){if(t!==Dt)return!1;if(!ye)return h_(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yd(t.type,t.memoizedProps)),e&&(e=Pt)){if(Td(t))throw tE(),Error(U(418));for(;e;)eE(t,e),e=gr(e.nextSibling)}if(h_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Dt?gr(t.stateNode.nextSibling):null;return!0}function tE(){for(var t=Pt;t;)t=gr(t.nextSibling)}function ms(){Pt=Dt=null,ye=!1}function qf(t){Yt===null?Yt=[t]:Yt.push(t)}var d1=Hn.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function d_(t){var e=t._init;return e(t._payload)}function nE(t){function e(I,y){if(t){var E=I.deletions;E===null?(I.deletions=[y],I.flags|=16):E.push(y)}}function n(I,y){if(!t)return null;for(;y!==null;)e(I,y),y=y.sibling;return null}function r(I,y){for(I=new Map;y!==null;)y.key!==null?I.set(y.key,y):I.set(y.index,y),y=y.sibling;return I}function i(I,y){return I=wr(I,y),I.index=0,I.sibling=null,I}function s(I,y,E){return I.index=E,t?(E=I.alternate,E!==null?(E=E.index,E<y?(I.flags|=2,y):E):(I.flags|=2,y)):(I.flags|=1048576,y)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,y,E,x){return y===null||y.tag!==6?(y=Ph(E,I.mode,x),y.return=I,y):(y=i(y,E),y.return=I,y)}function u(I,y,E,x){var M=E.type;return M===$i?d(I,y,E.props.children,x,E.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===er&&d_(M)===y.type)?(x=i(y,E.props),x.ref=io(I,y,E),x.return=I,x):(x=Ol(E.type,E.key,E.props,null,I.mode,x),x.ref=io(I,y,E),x.return=I,x)}function c(I,y,E,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=kh(E,I.mode,x),y.return=I,y):(y=i(y,E.children||[]),y.return=I,y)}function d(I,y,E,x,M){return y===null||y.tag!==7?(y=ai(E,I.mode,x,M),y.return=I,y):(y=i(y,E),y.return=I,y)}function p(I,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ph(""+y,I.mode,E),y.return=I,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:return E=Ol(y.type,y.key,y.props,null,I.mode,E),E.ref=io(I,null,y),E.return=I,E;case zi:return y=kh(y,I.mode,E),y.return=I,y;case er:var x=y._init;return p(I,x(y._payload),E)}if(uo(y)||Zs(y))return y=ai(y,I.mode,E,null),y.return=I,y;ul(I,y)}return null}function m(I,y,E,x){var M=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return M!==null?null:l(I,y,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ja:return E.key===M?u(I,y,E,x):null;case zi:return E.key===M?c(I,y,E,x):null;case er:return M=E._init,m(I,y,M(E._payload),x)}if(uo(E)||Zs(E))return M!==null?null:d(I,y,E,x,null);ul(I,E)}return null}function v(I,y,E,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return I=I.get(E)||null,l(y,I,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ja:return I=I.get(x.key===null?E:x.key)||null,u(y,I,x,M);case zi:return I=I.get(x.key===null?E:x.key)||null,c(y,I,x,M);case er:var F=x._init;return v(I,y,E,F(x._payload),M)}if(uo(x)||Zs(x))return I=I.get(E)||null,d(y,I,x,M,null);ul(y,x)}return null}function R(I,y,E,x){for(var M=null,F=null,T=y,_=y=0,w=null;T!==null&&_<E.length;_++){T.index>_?(w=T,T=null):w=T.sibling;var S=m(I,T,E[_],x);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(I,T),y=s(S,y,_),F===null?M=S:F.sibling=S,F=S,T=w}if(_===E.length)return n(I,T),ye&&Yr(I,_),M;if(T===null){for(;_<E.length;_++)T=p(I,E[_],x),T!==null&&(y=s(T,y,_),F===null?M=T:F.sibling=T,F=T);return ye&&Yr(I,_),M}for(T=r(I,T);_<E.length;_++)w=v(T,I,_,E[_],x),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?_:w.key),y=s(w,y,_),F===null?M=w:F.sibling=w,F=w);return t&&T.forEach(function(C){return e(I,C)}),ye&&Yr(I,_),M}function P(I,y,E,x){var M=Zs(E);if(typeof M!="function")throw Error(U(150));if(E=M.call(E),E==null)throw Error(U(151));for(var F=M=null,T=y,_=y=0,w=null,S=E.next();T!==null&&!S.done;_++,S=E.next()){T.index>_?(w=T,T=null):w=T.sibling;var C=m(I,T,S.value,x);if(C===null){T===null&&(T=w);break}t&&T&&C.alternate===null&&e(I,T),y=s(C,y,_),F===null?M=C:F.sibling=C,F=C,T=w}if(S.done)return n(I,T),ye&&Yr(I,_),M;if(T===null){for(;!S.done;_++,S=E.next())S=p(I,S.value,x),S!==null&&(y=s(S,y,_),F===null?M=S:F.sibling=S,F=S);return ye&&Yr(I,_),M}for(T=r(I,T);!S.done;_++,S=E.next())S=v(T,I,_,S.value,x),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?_:S.key),y=s(S,y,_),F===null?M=S:F.sibling=S,F=S);return t&&T.forEach(function(D){return e(I,D)}),ye&&Yr(I,_),M}function k(I,y,E,x){if(typeof E=="object"&&E!==null&&E.type===$i&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ja:e:{for(var M=E.key,F=y;F!==null;){if(F.key===M){if(M=E.type,M===$i){if(F.tag===7){n(I,F.sibling),y=i(F,E.props.children),y.return=I,I=y;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===er&&d_(M)===F.type){n(I,F.sibling),y=i(F,E.props),y.ref=io(I,F,E),y.return=I,I=y;break e}n(I,F);break}else e(I,F);F=F.sibling}E.type===$i?(y=ai(E.props.children,I.mode,x,E.key),y.return=I,I=y):(x=Ol(E.type,E.key,E.props,null,I.mode,x),x.ref=io(I,y,E),x.return=I,I=x)}return o(I);case zi:e:{for(F=E.key;y!==null;){if(y.key===F)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(I,y.sibling),y=i(y,E.children||[]),y.return=I,I=y;break e}else{n(I,y);break}else e(I,y);y=y.sibling}y=kh(E,I.mode,x),y.return=I,I=y}return o(I);case er:return F=E._init,k(I,y,F(E._payload),x)}if(uo(E))return R(I,y,E,x);if(Zs(E))return P(I,y,E,x);ul(I,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(I,y.sibling),y=i(y,E),y.return=I,I=y):(n(I,y),y=Ph(E,I.mode,x),y.return=I,I=y),o(I)):n(I,y)}return k}var gs=nE(!0),rE=nE(!1),ru=Fr(null),iu=null,Yi=null,Hf=null;function Wf(){Hf=Yi=iu=null}function Gf(t){var e=ru.current;ge(ru),t._currentValue=e}function Sd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function os(t,e){iu=t,Hf=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Hf!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(iu===null)throw Error(U(308));Yi=t,iu.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var ni=null;function Kf(t){ni===null?ni=[t]:ni.push(t)}function iE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Kf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,Kf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bf(t,n)}}function f_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function su(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,v=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(m=e,v=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){p=R.call(v,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(v,p,m):R,m==null)break e;p=Se({},p,m);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);di|=o,t.lanes=o,t.memoizedState=p}}function p_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var _a={},dn=Fr(_a),Ko=Fr(_a),Qo=Fr(_a);function ri(t){if(t===_a)throw Error(U(174));return t}function Xf(t,e){switch(de(Qo,e),de(Ko,t),de(dn,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:id(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=id(e,t)}ge(dn),de(dn,e)}function _s(){ge(dn),ge(Ko),ge(Qo)}function oE(t){ri(Qo.current);var e=ri(dn.current),n=id(e,t.type);e!==n&&(de(Ko,t),de(dn,n))}function Yf(t){Ko.current===t&&(ge(dn),ge(Ko))}var we=Fr(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Th=[];function Jf(){for(var t=0;t<Th.length;t++)Th[t]._workInProgressVersionPrimary=null;Th.length=0}var Pl=Hn.ReactCurrentDispatcher,Ih=Hn.ReactCurrentBatchConfig,hi=0,Te=null,Le=null,je=null,au=!1,So=!1,Xo=0,f1=0;function Ze(){throw Error(U(321))}function Zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function ep(t,e,n,r,i,s){if(hi=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?_1:y1,t=n(r,i),So){s=0;do{if(So=!1,Xo=0,25<=s)throw Error(U(301));s+=1,je=Le=null,e.updateQueue=null,Pl.current=v1,t=n(r,i)}while(So)}if(Pl.current=lu,e=Le!==null&&Le.next!==null,hi=0,je=Le=Te=null,au=!1,e)throw Error(U(300));return t}function tp(){var t=Xo!==0;return Xo=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Te.memoizedState=je=t:je=je.next=t,je}function qt(){if(Le===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=je===null?Te.memoizedState:je.next;if(e!==null)je=e,Le=t;else{if(t===null)throw Error(U(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},je===null?Te.memoizedState=je=t:je=je.next=t}return je}function Yo(t,e){return typeof e=="function"?e(t):e}function Sh(t){var e=qt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((hi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Te.lanes|=d,di|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,tn(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,di|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ah(t){var e=qt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function aE(){}function lE(t,e){var n=Te,r=qt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,np(hE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Jo(9,cE.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(U(349));hi&30||uE(n,e,i)}return i}function uE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cE(t,e,n,r){e.value=n,e.getSnapshot=r,dE(e)&&fE(t)}function hE(t,e,n){return n(function(){dE(e)&&fE(t)})}function dE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function fE(t){var e=Fn(t,1);e!==null&&en(e,t,1,-1)}function m_(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=g1.bind(null,Te,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pE(){return qt().memoizedState}function kl(t,e,n,r){var i=an();Te.flags|=t,i.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function Hu(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&Zf(r,o.deps)){i.memoizedState=Jo(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Jo(1|e,n,s,r)}function g_(t,e){return kl(8390656,8,t,e)}function np(t,e){return Hu(2048,8,t,e)}function mE(t,e){return Hu(4,2,t,e)}function gE(t,e){return Hu(4,4,t,e)}function _E(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yE(t,e,n){return n=n!=null?n.concat([t]):null,Hu(4,4,_E.bind(null,e,t),n)}function rp(){}function vE(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wE(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function EE(t,e,n){return hi&21?(tn(n,e)||(n=Rw(),Te.lanes|=n,di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function p1(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Ih.transition;Ih.transition={};try{t(!1),e()}finally{ae=n,Ih.transition=r}}function TE(){return qt().memoizedState}function m1(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},IE(t))SE(e,n);else if(n=iE(t,e,n,r),n!==null){var i=dt();en(n,t,r,i),AE(n,e,r)}}function g1(t,e,n){var r=vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(IE(t))SE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,tn(l,o)){var u=e.interleaved;u===null?(i.next=i,Kf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=iE(t,e,i,r),n!==null&&(i=dt(),en(n,t,r,i),AE(n,e,r))}}function IE(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function SE(t,e){So=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function AE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bf(t,n)}}var lu={readContext:$t,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},_1={readContext:$t,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:g_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,_E.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=m1.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:m_,useDebugValue:rp,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=m_(!1),e=t[0];return t=p1.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=an();if(ye){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ze===null)throw Error(U(349));hi&30||uE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,g_(hE.bind(null,r,s,t),[t]),r.flags|=2048,Jo(9,cE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=ze.identifierPrefix;if(ye){var n=Nn,r=kn;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=f1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},y1={readContext:$t,useCallback:vE,useContext:$t,useEffect:np,useImperativeHandle:yE,useInsertionEffect:mE,useLayoutEffect:gE,useMemo:wE,useReducer:Sh,useRef:pE,useState:function(){return Sh(Yo)},useDebugValue:rp,useDeferredValue:function(t){var e=qt();return EE(e,Le.memoizedState,t)},useTransition:function(){var t=Sh(Yo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:aE,useSyncExternalStore:lE,useId:TE,unstable_isNewReconciler:!1},v1={readContext:$t,useCallback:vE,useContext:$t,useEffect:np,useImperativeHandle:yE,useInsertionEffect:mE,useLayoutEffect:gE,useMemo:wE,useReducer:Ah,useRef:pE,useState:function(){return Ah(Yo)},useDebugValue:rp,useDeferredValue:function(t){var e=qt();return Le===null?e.memoizedState=t:EE(e,Le.memoizedState,t)},useTransition:function(){var t=Ah(Yo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:aE,useSyncExternalStore:lE,useId:TE,unstable_isNewReconciler:!1};function Qt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ad(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wu={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=vr(t),s=On(r,i);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(en(e,t,i,r),Cl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=vr(t),s=On(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(en(e,t,i,r),Cl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=vr(t),i=On(n,r);i.tag=2,e!=null&&(i.callback=e),e=_r(t,i,r),e!==null&&(en(e,t,r,n),Cl(e,t,r))}};function __(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,r)||!qo(i,s):!0}function RE(t,e,n){var r=!1,i=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=wt(e)?ui:st.current,r=e.contextTypes,s=(r=r!=null)?ps(t,i):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function y_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wu.enqueueReplaceState(e,e.state,null)}function Rd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Qf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=wt(e)?ui:st.current,i.context=ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ad(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wu.enqueueReplaceState(i,i.state,null),su(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e){try{var n="",r=e;do n+=GA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Rh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var w1=typeof WeakMap=="function"?WeakMap:Map;function CE(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cu||(cu=!0,Md=r),Cd(t,e)},n}function PE(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cd(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function v_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new w1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=b1.bind(null,t,e,n),e.then(t,t))}function w_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function E_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var E1=Hn.ReactCurrentOwner,yt=!1;function ct(t,e,n,r){e.child=t===null?rE(e,null,n,r):gs(e,t.child,n,r)}function T_(t,e,n,r,i){n=n.render;var s=e.ref;return os(e,i),r=ep(t,e,n,r,s,i),n=tp(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ye&&n&&zf(e),e.flags|=1,ct(t,e,r,i),e.child)}function I_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kE(t,e,s,r,i)):(t=Ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function kE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,jn(t,e,i)}return Pd(t,e,n,r,i)}function NE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Zi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Zi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Zi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Zi,At),At|=r;return ct(t,e,i,n),e.child}function DE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,r,i){var s=wt(n)?ui:st.current;return s=ps(e,s),os(e,i),n=ep(t,e,n,r,s,i),r=tp(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ye&&r&&zf(e),e.flags|=1,ct(t,e,n,i),e.child)}function S_(t,e,n,r,i){if(wt(n)){var s=!0;eu(e)}else s=!1;if(os(e,i),e.stateNode===null)Nl(t,e),RE(e,n,r),Rd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=wt(n)?ui:st.current,c=ps(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&y_(e,o,r,c),tr=!1;var m=e.memoizedState;o.state=m,su(e,r,o,i),u=e.memoizedState,l!==r||m!==u||vt.current||tr?(typeof d=="function"&&(Ad(e,n,d,r),u=e.memoizedState),(l=tr||__(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Qt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=wt(n)?ui:st.current,u=ps(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&y_(e,o,r,u),tr=!1,m=e.memoizedState,o.state=m,su(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||vt.current||tr?(typeof v=="function"&&(Ad(e,n,v,r),R=e.memoizedState),(c=tr||__(e,n,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return kd(t,e,n,r,s,i)}function kd(t,e,n,r,i,s){DE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&u_(e,n,!1),jn(t,e,s);r=e.stateNode,E1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,l,s)):ct(t,e,l,s),e.memoizedState=r.state,i&&u_(e,n,!0),e.child}function xE(t){var e=t.stateNode;e.pendingContext?l_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&l_(t,e.context,!1),Xf(t,e.containerInfo)}function A_(t,e,n,r,i){return ms(),qf(i),e.flags|=256,ct(t,e,n,r),e.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function OE(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return Id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qu(o,r,0,null),t=ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dd(n),e.memoizedState=Nd,t):ip(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return T1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=wr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=wr(l,s):(s=ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nd,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ip(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,r){return r!==null&&qf(r),gs(e,t.child,null,n),t=ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function T1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Rh(Error(U(422))),cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qu({mode:"visible",children:r.children},i,0,null),s=ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gs(e,t.child,null,o),e.child.memoizedState=Dd(o),e.memoizedState=Nd,s);if(!(e.mode&1))return cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Rh(s,r,void 0),cl(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),en(r,t,i,-1))}return cp(),r=Rh(Error(U(421))),cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=V1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=gr(i.nextSibling),Dt=e,ye=!0,Yt=null,t!==null&&(Ut[Ft++]=kn,Ut[Ft++]=Nn,Ut[Ft++]=ci,kn=t.id,Nn=t.overflow,ci=e),e=ip(e,r.children),e.flags|=4096,e)}function R_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sd(t.return,e,n)}function Ch(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function bE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&R_(t,n,e);else if(t.tag===19)R_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ou(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ch(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ch(e,!0,n,null,s);break;case"together":Ch(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function I1(t,e,n){switch(e.tag){case 3:xE(e),ms();break;case 5:oE(e);break;case 1:wt(e.type)&&eu(e);break;case 4:Xf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(ru,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?OE(t,e,n):(de(we,we.current&1),t=jn(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,NE(t,e,n)}return jn(t,e,n)}var VE,xd,LE,ME;VE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xd=function(){};LE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(dn.current);var s=null;switch(n){case"input":i=ed(t,i),r=ed(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=rd(t,i),r=rd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jl)}sd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ME=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function S1(t,e,n){var r=e.pendingProps;switch($f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return wt(e.type)&&Zl(),et(e),null;case 3:return r=e.stateNode,_s(),ge(vt),ge(st),Jf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(jd(Yt),Yt=null))),xd(t,e),et(e),null;case 5:Yf(e);var i=ri(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)LE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return et(e),null}if(t=ri(dn.current),ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[Go]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<ho.length;i++)pe(ho[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Vg(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Mg(r,s),pe("invalid",r)}sd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&al(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&al(r.textContent,l,t),i=["children",""+l]):Mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Za(r),Lg(r,s,!0);break;case"textarea":Za(r),Ug(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[Go]=r,VE(t,e,!1,!1),e.stateNode=t;e:{switch(o=od(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ho.length;i++)pe(ho[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Vg(t,r),i=ed(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Mg(t,r),i=rd(t,r),pe("invalid",t);break;default:i=r}sd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?pw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Uo(t,u):typeof u=="number"&&Uo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&Pf(t,s,u,o))}switch(n){case"input":Za(t),Lg(t,r,!1);break;case"textarea":Za(t),Ug(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)ME(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ri(Qo.current),ri(dn.current),ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:al(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&al(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return et(e),null;case 13:if(ge(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&Pt!==null&&e.mode&1&&!(e.flags&128))tE(),ms(),e.flags|=98560,s=!1;else if(s=ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[un]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else Yt!==null&&(jd(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Me===0&&(Me=3):cp())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return _s(),xd(t,e),t===null&&Ho(e.stateNode.containerInfo),et(e),null;case 10:return Gf(e.type._context),et(e),null;case 17:return wt(e.type)&&Zl(),et(e),null;case 19:if(ge(we),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)so(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ou(t),o!==null){for(e.flags|=128,so(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>vs&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304)}else{if(!r)if(t=ou(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return et(e),null}else 2*De()-s.renderingStartTime>vs&&n!==1073741824&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return up(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function A1(t,e){switch($f(e),e.tag){case 1:return wt(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),ge(vt),ge(st),Jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yf(e),null;case 13:if(ge(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(we),null;case 4:return _s(),null;case 10:return Gf(e.type._context),null;case 22:case 23:return up(),null;case 24:return null;default:return null}}var hl=!1,rt=!1,R1=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Od(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var C_=!1;function C1(t,e){if(gd=Ql,t=zw(),Bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_d={focusedElem:t,selectionRange:n},Ql=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,k=R.memoizedState,I=e.stateNode,y=I.getSnapshotBeforeUpdate(e.elementType===e.type?P:Qt(e.type,P),k);I.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(x){Pe(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=C_,C_=!1,R}function Ao(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Od(e,n,s)}i=i.next}while(i!==r)}}function Gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function UE(t){var e=t.alternate;e!==null&&(t.alternate=null,UE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[Go],delete e[wd],delete e[u1],delete e[c1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function FE(t){return t.tag===5||t.tag===3||t.tag===4}function P_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||FE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(r!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}function Ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}var qe=null,Xt=!1;function Jn(t,e,n){for(n=n.child;n!==null;)jE(t,e,n),n=n.sibling}function jE(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Fu,n)}catch{}switch(n.tag){case 5:rt||Ji(n,e);case 6:var r=qe,i=Xt;qe=null,Jn(t,e,n),qe=r,Xt=i,qe!==null&&(Xt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Xt?(t=qe,n=n.stateNode,t.nodeType===8?wh(t.parentNode,n):t.nodeType===1&&wh(t,n),zo(t)):wh(qe,n.stateNode));break;case 4:r=qe,i=Xt,qe=n.stateNode.containerInfo,Xt=!0,Jn(t,e,n),qe=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Od(n,e,o),i=i.next}while(i!==r)}Jn(t,e,n);break;case 1:if(!rt&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Jn(t,e,n),rt=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function k_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new R1),e.forEach(function(r){var i=L1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Xt=!1;break e;case 3:qe=l.stateNode.containerInfo,Xt=!0;break e;case 4:qe=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(qe===null)throw Error(U(160));jE(s,o,i),qe=null,Xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)BE(e,t),e=e.sibling}function BE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),on(t),r&4){try{Ao(3,t,t.return),Gu(3,t)}catch(P){Pe(t,t.return,P)}try{Ao(5,t,t.return)}catch(P){Pe(t,t.return,P)}}break;case 1:Kt(e,t),on(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(Kt(e,t),on(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{Uo(i,"")}catch(P){Pe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&uw(i,s),od(l,o);var c=od(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?pw(i,p):d==="dangerouslySetInnerHTML"?dw(i,p):d==="children"?Uo(i,p):Pf(i,d,p,c)}switch(l){case"input":td(i,s);break;case"textarea":cw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ns(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?ns(i,!!s.multiple,s.defaultValue,!0):ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Go]=s}catch(P){Pe(t,t.return,P)}}break;case 6:if(Kt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Pe(t,t.return,P)}}break;case 3:if(Kt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(P){Pe(t,t.return,P)}break;case 4:Kt(e,t),on(t);break;case 13:Kt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ap=De())),r&4&&k_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(c=rt)||d,Kt(e,t),rt=c):Kt(e,t),on(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(m=H,v=m.child,m.tag){case 0:case 11:case 14:case 15:Ao(4,m,m.return);break;case 1:Ji(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Pe(r,n,P)}}break;case 5:Ji(m,m.return);break;case 22:if(m.memoizedState!==null){D_(p);continue}}v!==null?(v.return=m,H=v):D_(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=fw("display",o))}catch(P){Pe(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Pe(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Kt(e,t),on(t),r&4&&k_(t);break;case 21:break;default:Kt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(FE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Uo(i,""),r.flags&=-33);var s=P_(t);Ld(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=P_(t);Vd(t,l,o);break;default:throw Error(U(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function P1(t,e,n){H=t,zE(t)}function zE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=hl;var c=rt;if(hl=o,(rt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?x_(i):u!==null?(u.return=o,H=u):x_(i);for(;s!==null;)H=s,zE(s),s=s.sibling;H=i,hl=l,rt=c}N_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):N_(t)}}function N_(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Gu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&p_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}p_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&zo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}rt||e.flags&512&&bd(e)}catch(m){Pe(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function D_(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function x_(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{bd(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{bd(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var k1=Math.ceil,uu=Hn.ReactCurrentDispatcher,sp=Hn.ReactCurrentOwner,Bt=Hn.ReactCurrentBatchConfig,se=0,ze=null,Oe=null,Ge=0,At=0,Zi=Fr(0),Me=0,Zo=null,di=0,Ku=0,op=0,Ro=null,_t=null,ap=0,vs=1/0,Cn=null,cu=!1,Md=null,yr=null,dl=!1,cr=null,hu=0,Co=0,Ud=null,Dl=-1,xl=0;function dt(){return se&6?De():Dl!==-1?Dl:Dl=De()}function vr(t){return t.mode&1?se&2&&Ge!==0?Ge&-Ge:d1.transition!==null?(xl===0&&(xl=Rw()),xl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Ow(t.type)),t):1}function en(t,e,n,r){if(50<Co)throw Co=0,Ud=null,Error(U(185));pa(t,n,r),(!(se&2)||t!==ze)&&(t===ze&&(!(se&2)&&(Ku|=n),Me===4&&rr(t,Ge)),Et(t,r),n===1&&se===0&&!(e.mode&1)&&(vs=De()+500,qu&&jr()))}function Et(t,e){var n=t.callbackNode;dR(t,e);var r=Kl(t,t===ze?Ge:0);if(r===0)n!==null&&Bg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bg(n),e===1)t.tag===0?h1(O_.bind(null,t)):Jw(O_.bind(null,t)),a1(function(){!(se&6)&&jr()}),n=null;else{switch(Cw(r)){case 1:n=Of;break;case 4:n=Sw;break;case 16:n=Gl;break;case 536870912:n=Aw;break;default:n=Gl}n=XE(n,$E.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $E(t,e){if(Dl=-1,xl=0,se&6)throw Error(U(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var r=Kl(t,t===ze?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=du(t,r);else{e=r;var i=se;se|=2;var s=HE();(ze!==t||Ge!==e)&&(Cn=null,vs=De()+500,oi(t,e));do try{x1();break}catch(l){qE(t,l)}while(!0);Wf(),uu.current=s,se=i,Oe!==null?e=0:(ze=null,Ge=0,e=Me)}if(e!==0){if(e===2&&(i=hd(t),i!==0&&(r=i,e=Fd(t,i))),e===1)throw n=Zo,oi(t,0),rr(t,r),Et(t,De()),n;if(e===6)rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!N1(i)&&(e=du(t,r),e===2&&(s=hd(t),s!==0&&(r=s,e=Fd(t,s))),e===1))throw n=Zo,oi(t,0),rr(t,r),Et(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Jr(t,_t,Cn);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=ap+500-De(),10<e)){if(Kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vd(Jr.bind(null,t,_t,Cn),e);break}Jr(t,_t,Cn);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k1(r/1960))-r,10<r){t.timeoutHandle=vd(Jr.bind(null,t,_t,Cn),r);break}Jr(t,_t,Cn);break;case 5:Jr(t,_t,Cn);break;default:throw Error(U(329))}}}return Et(t,De()),t.callbackNode===n?$E.bind(null,t):null}function Fd(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(oi(t,e).flags|=256),t=du(t,e),t!==2&&(e=_t,_t=n,e!==null&&jd(e)),t}function jd(t){_t===null?_t=t:_t.push.apply(_t,t)}function N1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~op,e&=~Ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function O_(t){if(se&6)throw Error(U(327));as();var e=Kl(t,0);if(!(e&1))return Et(t,De()),null;var n=du(t,e);if(t.tag!==0&&n===2){var r=hd(t);r!==0&&(e=r,n=Fd(t,r))}if(n===1)throw n=Zo,oi(t,0),rr(t,e),Et(t,De()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,_t,Cn),Et(t,De()),null}function lp(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(vs=De()+500,qu&&jr())}}function fi(t){cr!==null&&cr.tag===0&&!(se&6)&&as();var e=se;se|=1;var n=Bt.transition,r=ae;try{if(Bt.transition=null,ae=1,t)return t()}finally{ae=r,Bt.transition=n,se=e,!(se&6)&&jr()}}function up(){At=Zi.current,ge(Zi)}function oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,o1(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch($f(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zl();break;case 3:_s(),ge(vt),ge(st),Jf();break;case 5:Yf(r);break;case 4:_s();break;case 13:ge(we);break;case 19:ge(we);break;case 10:Gf(r.type._context);break;case 22:case 23:up()}n=n.return}if(ze=t,Oe=t=wr(t.current,null),Ge=At=e,Me=0,Zo=null,op=Ku=di=0,_t=Ro=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function qE(t,e){do{var n=Oe;try{if(Wf(),Pl.current=lu,au){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}au=!1}if(hi=0,je=Le=Te=null,So=!1,Xo=0,sp.current=null,n===null||n.return===null){Me=1,Zo=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=w_(o);if(v!==null){v.flags&=-257,E_(v,o,l,s,e),v.mode&1&&v_(s,c,e),e=v,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){v_(s,c,e),cp();break e}u=Error(U(426))}}else if(ye&&l.mode&1){var k=w_(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),E_(k,o,l,s,e),qf(ys(u,l));break e}}s=u=ys(u,l),Me!==4&&(Me=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=CE(s,u,e);f_(s,I);break e;case 1:l=u;var y=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(yr===null||!yr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=PE(s,l,e);f_(s,x);break e}}s=s.return}while(s!==null)}GE(n)}catch(M){e=M,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function HE(){var t=uu.current;return uu.current=lu,t===null?lu:t}function cp(){(Me===0||Me===3||Me===2)&&(Me=4),ze===null||!(di&268435455)&&!(Ku&268435455)||rr(ze,Ge)}function du(t,e){var n=se;se|=2;var r=HE();(ze!==t||Ge!==e)&&(Cn=null,oi(t,e));do try{D1();break}catch(i){qE(t,i)}while(!0);if(Wf(),se=n,uu.current=r,Oe!==null)throw Error(U(261));return ze=null,Ge=0,Me}function D1(){for(;Oe!==null;)WE(Oe)}function x1(){for(;Oe!==null&&!rR();)WE(Oe)}function WE(t){var e=QE(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?GE(t):Oe=e,sp.current=null}function GE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=A1(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Oe=null;return}}else if(n=S1(n,e,At),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Me===0&&(Me=5)}function Jr(t,e,n){var r=ae,i=Bt.transition;try{Bt.transition=null,ae=1,O1(t,e,n,r)}finally{Bt.transition=i,ae=r}return null}function O1(t,e,n,r){do as();while(cr!==null);if(se&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fR(t,s),t===ze&&(Oe=ze=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,XE(Gl,function(){return as(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=ae;ae=1;var l=se;se|=4,sp.current=null,C1(t,n),BE(n,t),ZR(_d),Ql=!!gd,_d=gd=null,t.current=n,P1(n),iR(),se=l,ae=o,Bt.transition=s}else t.current=n;if(dl&&(dl=!1,cr=t,hu=i),s=t.pendingLanes,s===0&&(yr=null),aR(n.stateNode),Et(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cu)throw cu=!1,t=Md,Md=null,t;return hu&1&&t.tag!==0&&as(),s=t.pendingLanes,s&1?t===Ud?Co++:(Co=0,Ud=t):Co=0,jr(),null}function as(){if(cr!==null){var t=Cw(hu),e=Bt.transition,n=ae;try{if(Bt.transition=null,ae=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,hu=0,se&6)throw Error(U(331));var i=se;for(se|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Ao(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var m=d.sibling,v=d.return;if(UE(d),d===c){H=null;break}if(m!==null){m.return=v,H=m;break}H=v}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ao(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var y=t.current;for(H=y;H!==null;){o=H;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,H=E;else e:for(o=y;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gu(9,l)}}catch(M){Pe(l,l.return,M)}if(l===o){H=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,H=x;break e}H=l.return}}if(se=i,jr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Fu,t)}catch{}r=!0}return r}finally{ae=n,Bt.transition=e}}return!1}function b_(t,e,n){e=ys(n,e),e=CE(t,e,1),t=_r(t,e,1),e=dt(),t!==null&&(pa(t,1,e),Et(t,e))}function Pe(t,e,n){if(t.tag===3)b_(t,t,n);else for(;e!==null;){if(e.tag===3){b_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=ys(n,t),t=PE(e,t,1),e=_r(e,t,1),t=dt(),e!==null&&(pa(e,1,t),Et(e,t));break}}e=e.return}}function b1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ge&n)===n&&(Me===4||Me===3&&(Ge&130023424)===Ge&&500>De()-ap?oi(t,0):op|=n),Et(t,e)}function KE(t,e){e===0&&(t.mode&1?(e=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):e=1);var n=dt();t=Fn(t,e),t!==null&&(pa(t,e,n),Et(t,n))}function V1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),KE(t,n)}function L1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),KE(t,n)}var QE;QE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,I1(t,e,n);yt=!!(t.flags&131072)}else yt=!1,ye&&e.flags&1048576&&Zw(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nl(t,e),t=e.pendingProps;var i=ps(e,st.current);os(e,n),i=ep(null,e,r,t,i,n);var s=tp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,eu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qf(e),i.updater=Wu,e.stateNode=i,i._reactInternals=e,Rd(e,r,t,n),e=kd(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&zf(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=U1(r),t=Qt(r,t),i){case 0:e=Pd(null,e,r,t,n);break e;case 1:e=S_(null,e,r,t,n);break e;case 11:e=T_(null,e,r,t,n);break e;case 14:e=I_(null,e,r,Qt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),S_(t,e,r,i,n);case 3:e:{if(xE(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sE(t,e),su(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ys(Error(U(423)),e),e=A_(t,e,r,n,i);break e}else if(r!==i){i=ys(Error(U(424)),e),e=A_(t,e,r,n,i);break e}else for(Pt=gr(e.stateNode.containerInfo.firstChild),Dt=e,ye=!0,Yt=null,n=rE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),r===i){e=jn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return oE(e),t===null&&Id(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,yd(r,i)?o=null:s!==null&&yd(r,s)&&(e.flags|=32),DE(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Id(e),null;case 13:return OE(t,e,n);case 4:return Xf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gs(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),T_(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(ru,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!vt.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=On(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Sd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,os(e,n),i=$t(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),I_(t,e,r,i,n);case 15:return kE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Nl(t,e),e.tag=1,wt(r)?(t=!0,eu(e)):t=!1,os(e,n),RE(e,r,i),Rd(e,r,i,n),kd(null,e,r,!0,t,n);case 19:return bE(t,e,n);case 22:return NE(t,e,n)}throw Error(U(156,e.tag))};function XE(t,e){return Iw(t,e)}function M1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new M1(t,e,n,r)}function hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function U1(t){if(typeof t=="function")return hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nf)return 11;if(t===Df)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $i:return ai(n.children,i,s,e);case kf:o=8,i|=8;break;case Xh:return t=jt(12,n,e,i|2),t.elementType=Xh,t.lanes=s,t;case Yh:return t=jt(13,n,e,i),t.elementType=Yh,t.lanes=s,t;case Jh:return t=jt(19,n,e,i),t.elementType=Jh,t.lanes=s,t;case ow:return Qu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iw:o=10;break e;case sw:o=9;break e;case Nf:o=11;break e;case Df:o=14;break e;case er:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ai(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Qu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=ow,t.lanes=n,t.stateNode={isHidden:!1},t}function Ph(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function kh(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function F1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uh(0),this.expirationTimes=uh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dp(t,e,n,r,i,s,o,l,u){return t=new F1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qf(s),t}function j1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function YE(t){if(!t)return Pr;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(wt(n))return Yw(t,n,e)}return e}function JE(t,e,n,r,i,s,o,l,u){return t=dp(n,r,!0,t,i,s,o,l,u),t.context=YE(null),n=t.current,r=dt(),i=vr(n),s=On(r,i),s.callback=e??null,_r(n,s,i),t.current.lanes=i,pa(t,i,r),Et(t,r),t}function Xu(t,e,n,r){var i=e.current,s=dt(),o=vr(i);return n=YE(n),e.context===null?e.context=n:e.pendingContext=n,e=On(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(i,e,o),t!==null&&(en(t,i,o,s),Cl(t,i,o)),o}function fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function V_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fp(t,e){V_(t,e),(t=t.alternate)&&V_(t,e)}function B1(){return null}var ZE=typeof reportError=="function"?reportError:function(t){console.error(t)};function pp(t){this._internalRoot=t}Yu.prototype.render=pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Xu(t,e,null,null)};Yu.prototype.unmount=pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fi(function(){Xu(null,t,null,null)}),e[Un]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&xw(t)}};function mp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function L_(){}function z1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=fu(o);s.call(c)}}var o=JE(e,r,t,0,null,!1,!1,"",L_);return t._reactRootContainer=o,t[Un]=o.current,Ho(t.nodeType===8?t.parentNode:t),fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=fu(u);l.call(c)}}var u=dp(t,0,!1,null,null,!1,!1,"",L_);return t._reactRootContainer=u,t[Un]=u.current,Ho(t.nodeType===8?t.parentNode:t),fi(function(){Xu(e,u,n,r)}),u}function Zu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=fu(o);l.call(u)}}Xu(e,o,t,i)}else o=z1(n,e,t,i,r);return fu(o)}Pw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=co(e.pendingLanes);n!==0&&(bf(e,n|1),Et(e,De()),!(se&6)&&(vs=De()+500,jr()))}break;case 13:fi(function(){var r=Fn(t,1);if(r!==null){var i=dt();en(r,t,1,i)}}),fp(t,1)}};Vf=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=dt();en(e,t,134217728,n)}fp(t,134217728)}};kw=function(t){if(t.tag===13){var e=vr(t),n=Fn(t,e);if(n!==null){var r=dt();en(n,t,e,r)}fp(t,e)}};Nw=function(){return ae};Dw=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};ld=function(t,e,n){switch(e){case"input":if(td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$u(r);if(!i)throw Error(U(90));lw(r),td(r,i)}}}break;case"textarea":cw(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};_w=lp;yw=fi;var $1={usingClientEntryPoint:!1,Events:[ga,Gi,$u,mw,gw,lp]},oo={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q1={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ew(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||B1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Fu=fl.inject(q1),hn=fl}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mp(e))throw Error(U(200));return j1(t,e,null,n)};Vt.createRoot=function(t,e){if(!mp(t))throw Error(U(299));var n=!1,r="",i=ZE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dp(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,Ho(t.nodeType===8?t.parentNode:t),new pp(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Ew(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return fi(t)};Vt.hydrate=function(t,e,n){if(!Ju(e))throw Error(U(200));return Zu(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!mp(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ZE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=JE(e,null,t,1,n??null,i,!1,s,o),t[Un]=e.current,Ho(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yu(e)};Vt.render=function(t,e,n){if(!Ju(e))throw Error(U(200));return Zu(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(U(40));return t._reactRootContainer?(fi(function(){Zu(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Vt.unstable_batchedUpdates=lp;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Zu(t,e,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function eT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eT)}catch(t){console.error(t)}}eT(),ew.exports=Vt;var H1=ew.exports,M_=H1;Kh.createRoot=M_.createRoot,Kh.hydrateRoot=M_.hydrateRoot;const W1="modulepreload",G1=function(t,e){return new URL(t,e).href},U_={},ec=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=G1(c,r),c in U_)return;U_[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let R=o.length-1;R>=0;R--){const P=o[R];if(P.href===c&&(!d||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":W1,d||(v.as="script"),v.crossOrigin="",v.href=c,u&&v.setAttribute("nonce",u),document.head.appendChild(v),d)return new Promise((R,P)=>{v.addEventListener("load",R),v.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ea.apply(this,arguments)}var hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hr||(hr={}));const F_="popstate";function K1(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=Si(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Bd("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:pu(s))}function r(i,s){tc(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return X1(e,n,r,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Q1(){return Math.random().toString(36).substr(2,8)}function j_(t,e){return{usr:t.state,key:t.key,idx:e}}function Bd(t,e,n,r){return n===void 0&&(n=null),ea({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Si(e):e,{state:n,key:e&&e.key||r||Q1()})}function pu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Si(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function X1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=hr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ea({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=hr.Pop;let k=d(),I=k==null?null:k-c;c=k,u&&u({action:l,location:P.location,delta:I})}function m(k,I){l=hr.Push;let y=Bd(P.location,k,I);n&&n(y,k),c=d()+1;let E=j_(y,c),x=P.createHref(y);try{o.pushState(E,"",x)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(x)}s&&u&&u({action:l,location:P.location,delta:1})}function v(k,I){l=hr.Replace;let y=Bd(P.location,k,I);n&&n(y,k),c=d();let E=j_(y,c),x=P.createHref(y);o.replaceState(E,"",x),s&&u&&u({action:l,location:P.location,delta:0})}function R(k){let I=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof k=="string"?k:pu(k);return y=y.replace(/ $/,"%20"),Ie(I,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,I)}let P={get action(){return l},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(F_,p),u=k,()=>{i.removeEventListener(F_,p),u=null}},createHref(k){return e(i,k)},createURL:R,encodeLocation(k){let I=R(k);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:v,go(k){return o.go(k)}};return P}var B_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(B_||(B_={}));function Y1(t,e,n){return n===void 0&&(n="/"),J1(t,e,n)}function J1(t,e,n,r){let i=typeof e=="string"?Si(e):e,s=ws(i.pathname||"/",n);if(s==null)return null;let o=tT(t);Z1(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=cC(s);l=lC(o[u],c)}return l}function tT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ie(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Er([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),tT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:oC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of nT(s.path))i(s,o,u)}),e}function nT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=nT(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Z1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:aC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const eC=/^:[\w-]+$/,tC=3,nC=2,rC=1,iC=10,sC=-2,z_=t=>t==="*";function oC(t,e){let n=t.split("/"),r=n.length;return n.some(z_)&&(r+=sC),e&&(r+=nC),n.filter(i=>!z_(i)).reduce((i,s)=>i+(eC.test(s)?tC:s===""?rC:iC),r)}function aC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function lC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=zd({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Er([s,p.pathname]),pathnameBase:mC(Er([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Er([s,p.pathnameBase]))}return o}function zd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=uC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=l[p];return v&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function uC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),tc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function cC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ws(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const hC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dC=t=>hC.test(t);function fC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Si(t):t,s;if(n)if(dC(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),tc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=$_(n.substring(1),"/"):s=$_(n,e)}else s=e;return{pathname:s,search:gC(r),hash:_C(i)}}function $_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function gp(t,e){let n=pC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _p(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Si(t):(i=ea({},t),Ie(!i.pathname||!i.pathname.includes("?"),Nh("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),Nh("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),Nh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=fC(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Er=t=>t.join("/").replace(/\/\/+/g,"/"),mC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_C=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rT=["post","put","patch","delete"];new Set(rT);const vC=["get",...rT];new Set(vC);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ta.apply(this,arguments)}const nc=L.createContext(null),iT=L.createContext(null),Wn=L.createContext(null),rc=L.createContext(null),Gn=L.createContext({outlet:null,matches:[],isDataRoute:!1}),sT=L.createContext(null);function wC(t,e){let{relative:n}=e===void 0?{}:e;Ns()||Ie(!1);let{basename:r,navigator:i}=L.useContext(Wn),{hash:s,pathname:o,search:l}=ic(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Er([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ns(){return L.useContext(rc)!=null}function Ds(){return Ns()||Ie(!1),L.useContext(rc).location}function oT(t){L.useContext(Wn).static||L.useLayoutEffect(t)}function aT(){let{isDataRoute:t}=L.useContext(Gn);return t?VC():EC()}function EC(){Ns()||Ie(!1);let t=L.useContext(nc),{basename:e,future:n,navigator:r}=L.useContext(Wn),{matches:i}=L.useContext(Gn),{pathname:s}=Ds(),o=JSON.stringify(gp(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return oT(()=>{l.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=_p(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Er([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}const TC=L.createContext(null);function IC(t){let e=L.useContext(Gn).outlet;return e&&L.createElement(TC.Provider,{value:t},e)}function ic(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=L.useContext(Wn),{matches:i}=L.useContext(Gn),{pathname:s}=Ds(),o=JSON.stringify(gp(i,r.v7_relativeSplatPath));return L.useMemo(()=>_p(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function SC(t,e){return AC(t,e)}function AC(t,e,n,r){Ns()||Ie(!1);let{navigator:i}=L.useContext(Wn),{matches:s}=L.useContext(Gn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ds(),d;if(e){var p;let k=typeof e=="string"?Si(e):e;u==="/"||(p=k.pathname)!=null&&p.startsWith(u)||Ie(!1),d=k}else d=c;let m=d.pathname||"/",v=m;if(u!=="/"){let k=u.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let R=Y1(t,{pathname:v}),P=NC(R&&R.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Er([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Er([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&P?L.createElement(rc.Provider,{value:{location:ta({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:hr.Pop}},P):P}function RC(){let t=bC(),e=yC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const CC=L.createElement(RC,null);class PC extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(Gn.Provider,{value:this.props.routeContext},L.createElement(sT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kC(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(nc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Gn.Provider,{value:e},r)}function NC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ie(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:v}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let v,R=!1,P=null,k=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||CC,u&&(c<0&&m===0?(LC("route-fallback"),R=!0,k=null):c===m&&(R=!0,k=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),y=()=>{let E;return v?E=P:R?E=k:p.route.Component?E=L.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=d,L.createElement(kC,{match:p,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?L.createElement(PC,{location:n.location,revalidation:n.revalidation,component:P,error:v,children:y(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):y()},null)}var lT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(lT||{}),uT=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(uT||{});function DC(t){let e=L.useContext(nc);return e||Ie(!1),e}function xC(t){let e=L.useContext(iT);return e||Ie(!1),e}function OC(t){let e=L.useContext(Gn);return e||Ie(!1),e}function cT(t){let e=OC(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function bC(){var t;let e=L.useContext(sT),n=xC(),r=cT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function VC(){let{router:t}=DC(lT.UseNavigateStable),e=cT(uT.UseNavigateStable),n=L.useRef(!1);return oT(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ta({fromRouteId:e},s)))},[t,e])}const q_={};function LC(t,e,n){q_[t]||(q_[t]=!0)}function MC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function na(t){let{to:e,replace:n,state:r,relative:i}=t;Ns()||Ie(!1);let{future:s,static:o}=L.useContext(Wn),{matches:l}=L.useContext(Gn),{pathname:u}=Ds(),c=aT(),d=_p(e,gp(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return L.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function UC(t){return IC(t.context)}function Rn(t){Ie(!1)}function FC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:s,static:o=!1,future:l}=t;Ns()&&Ie(!1);let u=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:s,static:o,future:ta({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Si(r));let{pathname:d="/",search:p="",hash:m="",state:v=null,key:R="default"}=r,P=L.useMemo(()=>{let k=ws(d,u);return k==null?null:{location:{pathname:k,search:p,hash:m,state:v,key:R},navigationType:i}},[u,d,p,m,v,R,i]);return P==null?null:L.createElement(Wn.Provider,{value:c},L.createElement(rc.Provider,{children:n,value:P}))}function jC(t){let{children:e,location:n}=t;return SC($d(e),n)}new Promise(()=>{});function $d(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,$d(r.props.children,s));return}r.type!==Rn&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$d(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mu(){return mu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mu.apply(this,arguments)}function hT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function BC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zC(t,e){return t.button===0&&(!e||e==="_self")&&!BC(t)}const $C=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qC=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],HC="6";try{window.__reactRouterVersion=HC}catch{}const WC=L.createContext({isTransitioning:!1}),GC="startTransition",H_=bA[GC];function KC(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=K1({window:i,v5Compat:!0}));let o=s.current,[l,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=L.useCallback(p=>{c&&H_?H_(()=>u(p)):u(p)},[u,c]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.useEffect(()=>MC(r),[r]),L.createElement(FC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const QC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dT=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=hT(e,$C),{basename:v}=L.useContext(Wn),R,P=!1;if(typeof c=="string"&&XC.test(c)&&(R=c,QC))try{let E=new URL(window.location.href),x=c.startsWith("//")?new URL(E.protocol+c):new URL(c),M=ws(x.pathname,v);x.origin===E.origin&&M!=null?c=M+x.search+x.hash:P=!0}catch{}let k=wC(c,{relative:i}),I=JC(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function y(E){r&&r(E),E.defaultPrevented||I(E)}return L.createElement("a",mu({},m,{href:R||k,onClick:P||s?r:y,ref:n,target:u}))}),yM=L.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=e,p=hT(e,qC),m=ic(u,{relative:p.relative}),v=Ds(),R=L.useContext(iT),{navigator:P,basename:k}=L.useContext(Wn),I=R!=null&&ZC(m)&&c===!0,y=P.encodeLocation?P.encodeLocation(m).pathname:m.pathname,E=v.pathname,x=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(E=E.toLowerCase(),x=x?x.toLowerCase():null,y=y.toLowerCase()),x&&k&&(x=ws(x,k)||x);const M=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let F=E===y||!o&&E.startsWith(y)&&E.charAt(M)==="/",T=x!=null&&(x===y||!o&&x.startsWith(y)&&x.charAt(y.length)==="/"),_={isActive:F,isPending:T,isTransitioning:I},w=F?r:void 0,S;typeof s=="function"?S=s(_):S=[s,F?"active":null,T?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(_):l;return L.createElement(dT,mu({},p,{"aria-current":w,className:S,ref:n,style:C,to:u,viewTransition:c}),typeof d=="function"?d(_):d)});var qd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(qd||(qd={}));var W_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(W_||(W_={}));function YC(t){let e=L.useContext(nc);return e||Ie(!1),e}function JC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=aT(),c=Ds(),d=ic(t,{relative:o});return L.useCallback(p=>{if(zC(p,n)){p.preventDefault();let m=r!==void 0?r:pu(c)===pu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function ZC(t,e){e===void 0&&(e={});let n=L.useContext(WC);n==null&&Ie(!1);let{basename:r}=YC(qd.useViewTransitionState),i=ic(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=ws(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ws(n.nextLocation.pathname,r)||n.nextLocation.pathname;return zd(i.pathname,o)!=null||zd(i.pathname,s)!=null}const eP=()=>{};var G_={};/**
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
 */const fT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new nP;const m=s<<2|l>>4;if(r.push(m),c!==64){const v=l<<4&240|c>>2;if(r.push(v),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rP=function(t){const e=fT(t);return pT.encodeByteArray(e,!0)},gu=function(t){return rP(t).replace(/\./g,"")},mT=function(t){try{return pT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sP=()=>iP().__FIREBASE_DEFAULTS__,oP=()=>{if(typeof process>"u"||typeof G_>"u")return;const t=G_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mT(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return eP()||sP()||oP()||aP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gT=t=>{var e,n;return(n=(e=sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_T=t=>{const e=gT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yT=()=>{var t;return(t=sc())===null||t===void 0?void 0:t.config},vT=t=>{var e;return(e=sc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class lP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Br(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function wT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gu(JSON.stringify(n)),gu(JSON.stringify(o)),""].join(".")}const Po={};function uP(){const t={prod:[],emulator:[]};for(const e of Object.keys(Po))Po[e]?t.emulator.push(e):t.prod.push(e);return t}function cP(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let K_=!1;function vp(t,e){if(typeof window>"u"||typeof document>"u"||!Br(window.location.host)||Po[t]===e||Po[t]||K_)return;Po[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=uP().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{K_=!0,o()},m}function d(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=cP(r),v=n("text"),R=document.getElementById(v)||document.createElement("span"),P=n("learnmore"),k=document.getElementById(P)||document.createElement("a"),I=n("preprendIcon"),y=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const E=m.element;l(E),d(k,P);const x=c();u(y,I),E.append(y,R,k,x),document.body.appendChild(E)}s?(R.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function dP(){var t;const e=(t=sc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mP(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gP(){return!dP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ep(){try{return typeof indexedDB=="object"}catch{return!1}}function Tp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ET(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _P="FirebaseError";class Wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_P,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Wt(i,l,r)}}function yP(t,e){return t.replace(vP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vP=/\{\$([^}]+)}/g;function wP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Q_(s)&&Q_(o)){if(!kr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Q_(t){return t!==null&&typeof t=="object"}/**
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
 */function ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function EP(t,e){const n=new TP(t,e);return n.subscribe.bind(n)}class TP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dh),i.error===void 0&&(i.error=Dh),i.complete===void 0&&(i.complete=Dh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dh(){}/**
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
 */const SP=1e3,AP=2,RP=4*60*60*1e3,CP=.5;function X_(t,e=SP,n=AP){const r=e*Math.pow(n,t),i=Math.round(CP*r*(Math.random()-.5)*2);return Math.min(RP,r+i)}/**
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
 */function le(t){return t&&t._delegate?t._delegate:t}class Ht{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class PP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NP(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kP(t){return t===Zr?void 0:t}function NP(t){return t.instantiationMode==="EAGER"}/**
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
 */class DP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const xP={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},OP=te.INFO,bP={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},VP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=OP,this._logHandler=VP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const LP=(t,e)=>e.some(n=>t instanceof n);let Y_,J_;function MP(){return Y_||(Y_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UP(){return J_||(J_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TT=new WeakMap,Hd=new WeakMap,IT=new WeakMap,xh=new WeakMap,Ip=new WeakMap;function FP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&TT.set(n,t)}).catch(()=>{}),Ip.set(e,t),e}function jP(t){if(Hd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hd.set(t,e)}let Wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||IT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BP(t){Wd=t(Wd)}function zP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oh(this),e,...n);return IT.set(r,e.sort?e.sort():[e]),Tr(r)}:UP().includes(t)?function(...e){return t.apply(Oh(this),e),Tr(TT.get(this))}:function(...e){return Tr(t.apply(Oh(this),e))}}function $P(t){return typeof t=="function"?zP(t):(t instanceof IDBTransaction&&jP(t),LP(t,MP())?new Proxy(t,Wd):t)}function Tr(t){if(t instanceof IDBRequest)return FP(t);if(xh.has(t))return xh.get(t);const e=$P(t);return e!==t&&(xh.set(t,e),Ip.set(e,t)),e}const Oh=t=>Ip.get(t);function ST(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Tr(o.result),u.oldVersion,u.newVersion,Tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const qP=["get","getKey","getAll","getAllKeys","count"],HP=["put","add","delete","clear"],bh=new Map;function Z_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bh.get(e))return bh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return bh.set(e,s),s}BP(t=>({...t,get:(e,n,r)=>Z_(e,n)||t.get(e,n,r),has:(e,n)=>!!Z_(e,n)||t.has(e,n)}));/**
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
 */class WP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gd="@firebase/app",ey="0.13.2";/**
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
 */const Bn=new oc("@firebase/app"),KP="@firebase/app-compat",QP="@firebase/analytics-compat",XP="@firebase/analytics",YP="@firebase/app-check-compat",JP="@firebase/app-check",ZP="@firebase/auth",ek="@firebase/auth-compat",tk="@firebase/database",nk="@firebase/data-connect",rk="@firebase/database-compat",ik="@firebase/functions",sk="@firebase/functions-compat",ok="@firebase/installations",ak="@firebase/installations-compat",lk="@firebase/messaging",uk="@firebase/messaging-compat",ck="@firebase/performance",hk="@firebase/performance-compat",dk="@firebase/remote-config",fk="@firebase/remote-config-compat",pk="@firebase/storage",mk="@firebase/storage-compat",gk="@firebase/firestore",_k="@firebase/ai",yk="@firebase/firestore-compat",vk="firebase",wk="11.10.0";/**
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
 */const Kd="[DEFAULT]",Ek={[Gd]:"fire-core",[KP]:"fire-core-compat",[XP]:"fire-analytics",[QP]:"fire-analytics-compat",[JP]:"fire-app-check",[YP]:"fire-app-check-compat",[ZP]:"fire-auth",[ek]:"fire-auth-compat",[tk]:"fire-rtdb",[nk]:"fire-data-connect",[rk]:"fire-rtdb-compat",[ik]:"fire-fn",[sk]:"fire-fn-compat",[ok]:"fire-iid",[ak]:"fire-iid-compat",[lk]:"fire-fcm",[uk]:"fire-fcm-compat",[ck]:"fire-perf",[hk]:"fire-perf-compat",[dk]:"fire-rc",[fk]:"fire-rc-compat",[pk]:"fire-gcs",[mk]:"fire-gcs-compat",[gk]:"fire-fst",[yk]:"fire-fst-compat",[_k]:"fire-vertex","fire-js":"fire-js",[vk]:"fire-js-all"};/**
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
 */const pi=new Map,Qd=new Map,Xd=new Map;function ty(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nn(t){const e=t.name;if(Xd.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Xd.set(e,t);for(const n of pi.values())ty(n,t);for(const n of Qd.values())ty(n,t);return!0}function zr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Tk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new Ai("app","Firebase",Tk);/**
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
 */class Ik{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Ri=wk;function Sp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kd,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Ir.create("bad-app-name",{appName:String(i)});if(n||(n=yT()),!n)throw Ir.create("no-options");const s=pi.get(i);if(s){if(kr(n,s.options)&&kr(r,s.config))return s;throw Ir.create("duplicate-app",{appName:i})}const o=new DP(i);for(const u of Xd.values())o.addComponent(u);const l=new Ik(n,r,o);return pi.set(i,l),l}function va(t=Kd){const e=pi.get(t);if(!e&&t===Kd&&yT())return Sp();if(!e)throw Ir.create("no-app",{appName:t});return e}function Sk(){return Array.from(pi.values())}async function Ak(t){let e=!1;const n=t.name;pi.has(n)?(e=!0,pi.delete(n)):Qd.has(n)&&t.decRefCount()<=0&&(Qd.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Tt(t,e,n){var r;let i=(r=Ek[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}nn(new Ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Rk="firebase-heartbeat-database",Ck=1,ra="firebase-heartbeat-store";let Vh=null;function AT(){return Vh||(Vh=ST(Rk,Ck,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ra)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),Vh}async function Pk(t){try{const n=(await AT()).transaction(ra),r=await n.objectStore(ra).get(RT(t));return await n.done,r}catch(e){if(e instanceof Wt)Bn.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function ny(t,e){try{const r=(await AT()).transaction(ra,"readwrite");await r.objectStore(ra).put(e,RT(t)),await r.done}catch(n){if(n instanceof Wt)Bn.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function RT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kk=1024,Nk=30;class Dk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ok(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ry();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Nk){const o=bk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ry(),{heartbeatsToSend:r,unsentEntries:i}=xk(this._heartbeatsCache.heartbeats),s=gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Bn.warn(n),""}}}function ry(){return new Date().toISOString().substring(0,10)}function xk(t,e=kk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),iy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ok{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ep()?Tp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function iy(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}function bk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Vk(t){nn(new Ht("platform-logger",e=>new WP(e),"PRIVATE")),nn(new Ht("heartbeat",e=>new Dk(e),"PRIVATE")),Tt(Gd,ey,t),Tt(Gd,ey,"esm2017"),Tt("fire-js","")}Vk("");function Ap(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function CT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lk=CT,PT=new Ai("auth","Firebase",CT());/**
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
 */const _u=new oc("@firebase/auth");function Mk(t,...e){_u.logLevel<=te.WARN&&_u.warn(`Auth (${Ri}): ${t}`,...e)}function bl(t,...e){_u.logLevel<=te.ERROR&&_u.error(`Auth (${Ri}): ${t}`,...e)}/**
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
 */function rn(t,...e){throw Rp(t,...e)}function fn(t,...e){return Rp(t,...e)}function kT(t,e,n){const r=Object.assign(Object.assign({},Lk()),{[e]:n});return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return kT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return PT.create(t,...e)}function Q(t,e,...n){if(!t)throw Rp(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function zn(t,e){t||Dn(e)}/**
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
 */function Yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uk(){return sy()==="http:"||sy()==="https:"}function sy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uk()||wp()||"connection"in navigator)?navigator.onLine:!0}function jk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=hP()||pP()}get(){return Fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cp(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class NT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$k=new wa(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,n,r,i={}){return DT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ya(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return fP()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Br(t.emulatorConfig.host)&&(c.credentials="include"),NT.fetch()(await xT(t,t.config.apiHost,n,l),c)})}async function DT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bk),e);try{const i=new Hk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw kT(t,d,c);rn(t,d)}}catch(i){if(i instanceof Wt)throw i;rn(t,"network-request-failed",{message:String(i)})}}async function Ea(t,e,n,r,i={}){const s=await Kn(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function xT(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Cp(t.config,i):`${t.config.apiScheme}://${i}`;return zk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function qk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),$k.get())})}}function pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fn(t,e,r);return i.customData._tokenResponse=n,i}function oy(t){return t!==void 0&&t.enterprise!==void 0}class Wk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Gk(t,e){return Kn(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
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
 */async function Kk(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function yu(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qk(t,e=!1){const n=le(t),r=await n.getIdToken(e),i=Pp(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ko(Lh(i.auth_time)),issuedAtTime:ko(Lh(i.iat)),expirationTime:ko(Lh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Lh(t){return Number(t)*1e3}function Pp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=mT(n);return i?JSON.parse(i):(bl("Failed to decode base64 JWT payload"),null)}catch(i){return bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ay(t){const e=Pp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wt&&Xk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Yk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ko(this.lastLoginAt),this.creationTime=ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Es(t,yu(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?OT(s.providerUserInfo):[],l=Zk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Jd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Jk(t){const e=le(t);await vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function OT(t){return t.map(e=>{var{providerId:n}=e,r=Ap(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function eN(t,e){const n=await DT(t,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await xT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Br(t.emulatorConfig.host)&&(u.credentials="include"),NT.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tN(t,e){return Kn(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
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
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ay(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=ay(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ls;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function Zn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ap(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Es(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qk(this,e)}reload(){return Jk(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await Es(this,Kk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:x,isAnonymous:M,providerData:F,stsTokenManager:T}=n;Q(E&&T,e,"internal-error");const _=ls.fromJSON(this.name,T);Q(typeof E=="string",e,"internal-error"),Zn(p,e.name),Zn(m,e.name),Q(typeof x=="boolean",e,"internal-error"),Q(typeof M=="boolean",e,"internal-error"),Zn(v,e.name),Zn(R,e.name),Zn(P,e.name),Zn(k,e.name),Zn(I,e.name),Zn(y,e.name);const w=new Jt({uid:E,auth:e,email:m,emailVerified:x,displayName:p,isAnonymous:M,photoURL:R,phoneNumber:v,tenantId:P,stsTokenManager:_,createdAt:I,lastLoginAt:y});return F&&Array.isArray(F)&&(w.providerData=F.map(S=>Object.assign({},S))),k&&(w._redirectEventId=k),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ls;i.updateFromServerResponse(n);const s=new Jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?OT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ls;l.updateFromIdToken(r);const u=new Jt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Jd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const ly=new Map;function xn(t){zn(t instanceof Function,"Expected a class definition");let e=ly.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ly.set(t,e),e)}/**
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
 */class bT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bT.type="NONE";const uy=bT;/**
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
 */function Vl(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await yu(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us(xn(uy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||xn(uy);const o=Vl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await yu(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Jt._fromGetAccountInfoResponse(e,m,d)}else p=Jt._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new us(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new us(s,e,r))}}/**
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
 */function cy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jT(e))return"Blackberry";if(BT(e))return"Webos";if(LT(e))return"Safari";if((e.includes("chrome/")||MT(e))&&!e.includes("edge/"))return"Chrome";if(FT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VT(t=ot()){return/firefox\//i.test(t)}function LT(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MT(t=ot()){return/crios\//i.test(t)}function UT(t=ot()){return/iemobile/i.test(t)}function FT(t=ot()){return/android/i.test(t)}function jT(t=ot()){return/blackberry/i.test(t)}function BT(t=ot()){return/webos/i.test(t)}function kp(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nN(t=ot()){var e;return kp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rN(){return mP()&&document.documentMode===10}function zT(t=ot()){return kp(t)||FT(t)||BT(t)||jT(t)||/windows phone/i.test(t)||UT(t)}/**
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
 */function $T(t,e=[]){let n;switch(t){case"Browser":n=cy(ot());break;case"Worker":n=`${cy(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${r}`}/**
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
 */class iN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sN(t,e={}){return Kn(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
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
 */const oN=6;class aN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class lN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hy(this),this.idTokenSubscription=new hy(this),this.beforeStateQueue=new iN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=PT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yu(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(bn(this));const n=e?le(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sN(this),n=new aN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$T(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ci(t){return le(t)}class hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=EP(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uN(t){ac=t}function qT(t){return ac.loadJS(t)}function cN(){return ac.recaptchaEnterpriseScript}function hN(){return ac.gapiScript}function dN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class fN{constructor(){this.enterprise=new pN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class pN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const mN="recaptcha-enterprise",HT="NO_RECAPTCHA";class gN{constructor(e){this.type=mN,this.auth=Ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Gk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Wk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;oy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(HT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&oy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=cN();u.length!==0&&(u+=l),qT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function dy(t,e,n,r=!1,i=!1){const s=new gN(t);let o;if(i)o=HT;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Zd(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await dy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await dy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function _N(t,e){const n=zr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(kr(s,e??{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function yN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vN(t,e,n){const r=Ci(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=WT(e),{host:o,port:l}=wN(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(kr(c,r.config.emulator)&&kr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Br(o)?(yp(`${s}//${o}${u}`),vp("Auth",!0)):EN()}function WT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wN(t){const e=WT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fy(o)}}}function fy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Np{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function TN(t,e){return Kn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function IN(t,e){return Ea(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
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
 */async function SN(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function AN(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
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
 */class ia extends Np{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ia(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ia(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,n,"signInWithPassword",IN);case"emailLink":return SN(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,r,"signUpPassword",TN);case"emailLink":return AN(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function cs(t,e){return Ea(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
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
 */const RN="http://localhost";class mi extends Np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ap(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:RN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
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
 */function CN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PN(t){const e=fo(po(t)).link,n=e?fo(po(e)).deep_link_id:null,r=fo(po(t)).deep_link_id;return(r?fo(po(r)).link:null)||r||n||e||t}class Dp{constructor(e){var n,r,i,s,o,l;const u=fo(po(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=CN((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=PN(e);try{return new Dp(n)}catch{return null}}}/**
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
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(e,n){return ia._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dp.parseLink(n);return Q(r,"argument-error"),ia._fromEmailAndCode(e,r.code,r.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class GT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ta extends GT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ir extends Ta{constructor(){super("facebook.com")}static credential(e){return mi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
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
 */class sr extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
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
 */class or extends Ta{constructor(){super("github.com")}static credential(e){return mi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends Ta{constructor(){super("twitter.com")}static credential(e,n){return mi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */async function kN(t,e){return Ea(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
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
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jt._fromIdTokenResponse(e,r,i),o=py(r);return new gi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=py(r);return new gi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function py(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wu extends Wt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wu(e,n,r,i)}}function KT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,s,e,r):s})}async function NN(t,e,n=!1){const r=await Es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gi._forOperation(t,"link",r)}/**
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
 */async function DN(t,e,n=!1){const{auth:r}=t;if(Rt(r.app))return Promise.reject(bn(r));const i="reauthenticate";try{const s=await Es(t,KT(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Pp(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),gi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
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
 */async function QT(t,e,n=!1){if(Rt(t.app))return Promise.reject(bn(t));const r="signIn",i=await KT(t,r,e),s=await gi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xN(t,e){return QT(Ci(t),e)}/**
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
 */async function XT(t){const e=Ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ON(t,e,n){if(Rt(t.app))return Promise.reject(bn(t));const r=Ci(t),o=await Zd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&XT(t),u}),l=await gi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function bN(t,e,n){return Rt(t.app)?Promise.reject(bn(t)):xN(le(t),xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&XT(t),r})}/**
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
 */async function VN(t,e){return Kn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function LN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=le(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Es(r,VN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function MN(t,e,n,r){return le(t).onIdTokenChanged(e,n,r)}function UN(t,e,n){return le(t).beforeAuthStateChanged(e,n)}function FN(t,e,n,r){return le(t).onAuthStateChanged(e,n,r)}function YT(t){return le(t).signOut()}const Eu="__sak";/**
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
 */class JT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eu,"1"),this.storage.removeItem(Eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const jN=1e3,BN=10;class ZT extends JT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZT.type="LOCAL";const zN=ZT;/**
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
 */class e0 extends JT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}e0.type="SESSION";const t0=e0;/**
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
 */function $N(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await $N(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
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
 */function xp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=xp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function HN(t){pn().location.href=t}/**
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
 */function n0(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function WN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KN(){return n0()?self:null}/**
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
 */const r0="firebaseLocalStorageDb",QN=1,Tu="firebaseLocalStorage",i0="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uc(t,e){return t.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function XN(){const t=indexedDB.deleteDatabase(r0);return new Ia(t).toPromise()}function ef(){const t=indexedDB.open(r0,QN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tu,{keyPath:i0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tu)?e(r):(r.close(),await XN(),e(await ef()))})})}async function my(t,e,n){const r=uc(t,!0).put({[i0]:e,value:n});return new Ia(r).toPromise()}async function YN(t,e){const n=uc(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function gy(t,e){const n=uc(t,!0).delete(e);return new Ia(n).toPromise()}const JN=800,ZN=3;class s0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ef(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(KN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WN(),!this.activeServiceWorker)return;this.sender=new qN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ef();return await my(e,Eu,"1"),await gy(e,Eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>my(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uc(i,!1).getAll();return new Ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s0.type="LOCAL";const eD=s0;new wa(3e4,6e4);/**
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
 */function tD(t,e){return e?xn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Op extends Np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nD(t){return QT(t.auth,new Op(t),t.bypassAuthState)}function rD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),DN(n,new Op(t),t.bypassAuthState)}async function iD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),NN(n,new Op(t),t.bypassAuthState)}/**
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
 */class o0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nD;case"linkViaPopup":case"linkViaRedirect":return iD;case"reauthViaPopup":case"reauthViaRedirect":return rD;default:rn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sD=new wa(2e3,1e4);class es extends o0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=xp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sD.get())};e()}}es.currentPopupAction=null;/**
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
 */const oD="pendingRedirect",Ll=new Map;class aD extends o0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ll.get(this.auth._key());if(!e){try{const r=await lD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ll.set(this.auth._key(),e)}return this.bypassAuthState||Ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lD(t,e){const n=hD(e),r=cD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uD(t,e){Ll.set(t._key(),e)}function cD(t){return xn(t._redirectPersistence)}function hD(t){return Vl(oD,t.config.apiKey,t.name)}async function dD(t,e,n=!1){if(Rt(t.app))return Promise.reject(bn(t));const r=Ci(t),i=tD(r,e),o=await new aD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const fD=10*60*1e3;class pD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!a0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fD&&this.cachedEventUids.clear(),this.cachedEventUids.has(_y(e))}saveEventToCache(e){this.cachedEventUids.add(_y(e)),this.lastProcessedEventTime=Date.now()}}function _y(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function a0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(t);default:return!1}}/**
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
 */async function gD(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
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
 */const _D=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yD=/^https?/;async function vD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gD(t);for(const n of e)try{if(wD(n))return}catch{}rn(t,"unauthorized-domain")}function wD(t){const e=Yd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yD.test(n))return!1;if(_D.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ED=new wa(3e4,6e4);function yy(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TD(t){return new Promise((e,n)=>{var r,i,s;function o(){yy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yy(),n(fn(t,"network-request-failed"))},timeout:ED.get()})}if(!((i=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pn().gapi)===null||s===void 0)&&s.load)o();else{const l=dN("iframefcb");return pn()[l]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},qT(`${hN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ml=null,e})}let Ml=null;function ID(t){return Ml=Ml||TD(t),Ml}/**
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
 */const SD=new wa(5e3,15e3),AD="__/auth/iframe",RD="emulator/auth/iframe",CD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kD(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cp(e,RD):`https://${t.config.authDomain}/${AD}`,r={apiKey:e.apiKey,appName:t.name,v:Ri},i=PD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ya(r).slice(1)}`}async function ND(t){const e=await ID(t),n=pn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:kD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),l=pn().setTimeout(()=>{s(o)},SD.get());function u(){pn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const DD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xD=500,OD=600,bD="_blank",VD="http://localhost";class vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LD(t,e,n,r=xD,i=OD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},DD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ot().toLowerCase();n&&(l=MT(c)?bD:n),VT(c)&&(e=e||VD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[v,R])=>`${m}${v}=${R},`,"");if(nN(c)&&l!=="_self")return MD(e||"",l),new vy(null);const p=window.open(e||"",l,d);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new vy(p)}function MD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const UD="__/auth/handler",FD="emulator/auth/handler",jD=encodeURIComponent("fac");async function wy(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ri,eventId:i};if(e instanceof GT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ta){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${jD}=${encodeURIComponent(u)}`:"";return`${BD(t)}?${ya(l).slice(1)}${c}`}function BD({config:t}){return t.emulator?Cp(t,FD):`https://${t.authDomain}/${UD}`}/**
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
 */const Mh="webStorageSupport";class zD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t0,this._completeRedirectFn=dD,this._overrideRedirectResult=uD}async _openPopup(e,n,r,i){var s;zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wy(e,n,r,Yd(),i);return LD(e,o,xp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wy(e,n,r,Yd(),i);return HN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ND(e),r=new pD(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mh,{type:Mh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mh];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zT()||LT()||kp()}}const $D=zD;var Ey="@firebase/auth",Ty="1.10.8";/**
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
 */class qD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WD(t){nn(new Ht("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$T(t)},c=new lN(r,i,s,u);return yN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nn(new Ht("auth-internal",e=>{const n=Ci(e.getProvider("auth").getImmediate());return(r=>new qD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(Ey,Ty,HD(t)),Tt(Ey,Ty,"esm2017")}/**
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
 */const GD=5*60,KD=vT("authIdTokenMaxAge")||GD;let Iy=null;const QD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KD)return;const i=n==null?void 0:n.token;Iy!==i&&(Iy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function l0(t=va()){const e=zr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_N(t,{popupRedirectResolver:$D,persistence:[eD,zN,t0]}),r=vT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=QD(s.toString());UN(n,o,()=>o(n.currentUser)),MN(n,l=>o(l))}}const i=gT("auth");return i&&vN(n,`http://${i}`),n}function XD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WD("Browser");var YD="firebase",JD="11.10.0";/**
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
 */Tt(YD,JD,"app");const u0="@firebase/installations",bp="0.6.18";/**
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
 */const c0=1e4,h0=`w:${bp}`,d0="FIS_v2",ZD="https://firebaseinstallations.googleapis.com/v1",ex=60*60*1e3,tx="installations",nx="Installations";/**
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
 */const rx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_i=new Ai(tx,nx,rx);function f0(t){return t instanceof Wt&&t.code.includes("request-failed")}/**
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
 */function p0({projectId:t}){return`${ZD}/projects/${t}/installations`}function m0(t){return{token:t.token,requestStatus:2,expiresIn:sx(t.expiresIn),creationTime:Date.now()}}async function g0(t,e){const r=(await e.json()).error;return _i.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ix(t,{refreshToken:e}){const n=_0(t);return n.append("Authorization",ox(e)),n}async function y0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function sx(t){return Number(t.replace("s","000"))}function ox(t){return`${d0} ${t}`}/**
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
 */async function ax({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=p0(t),i=_0(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:d0,appId:t.appId,sdkVersion:h0},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await y0(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:m0(c.authToken)}}else throw await g0("Create Installation",u)}/**
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
 */function v0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function lx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ux=/^[cdef][\w-]{21}$/,tf="";function cx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=hx(t);return ux.test(n)?n:tf}catch{return tf}}function hx(t){return lx(t).substr(0,22)}/**
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
 */function cc(t){return`${t.appName}!${t.appId}`}/**
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
 */const w0=new Map;function E0(t,e){const n=cc(t);T0(n,e),dx(n,e)}function T0(t,e){const n=w0.get(t);if(n)for(const r of n)r(e)}function dx(t,e){const n=fx();n&&n.postMessage({key:t,fid:e}),px()}let ii=null;function fx(){return!ii&&"BroadcastChannel"in self&&(ii=new BroadcastChannel("[Firebase] FID Change"),ii.onmessage=t=>{T0(t.data.key,t.data.fid)}),ii}function px(){w0.size===0&&ii&&(ii.close(),ii=null)}/**
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
 */const mx="firebase-installations-database",gx=1,yi="firebase-installations-store";let Uh=null;function Vp(){return Uh||(Uh=ST(mx,gx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yi)}}})),Uh}async function Iu(t,e){const n=cc(t),i=(await Vp()).transaction(yi,"readwrite"),s=i.objectStore(yi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&E0(t,e.fid),e}async function I0(t){const e=cc(t),r=(await Vp()).transaction(yi,"readwrite");await r.objectStore(yi).delete(e),await r.done}async function hc(t,e){const n=cc(t),i=(await Vp()).transaction(yi,"readwrite"),s=i.objectStore(yi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&E0(t,l.fid),l}/**
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
 */async function Lp(t){let e;const n=await hc(t.appConfig,r=>{const i=_x(r),s=yx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===tf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _x(t){const e=t||{fid:cx(),registrationStatus:0};return S0(e)}function yx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(_i.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wx(t)}:{installationEntry:e}}async function vx(t,e){try{const n=await ax(t,e);return Iu(t.appConfig,n)}catch(n){throw f0(n)&&n.customData.serverCode===409?await I0(t.appConfig):await Iu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function wx(t){let e=await Sy(t.appConfig);for(;e.registrationStatus===1;)await v0(100),e=await Sy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lp(t);return r||n}return e}function Sy(t){return hc(t,e=>{if(!e)throw _i.create("installation-not-found");return S0(e)})}function S0(t){return Ex(t)?{fid:t.fid,registrationStatus:0}:t}function Ex(t){return t.registrationStatus===1&&t.registrationTime+c0<Date.now()}/**
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
 */async function Tx({appConfig:t,heartbeatServiceProvider:e},n){const r=Ix(t,n),i=ix(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:h0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await y0(()=>fetch(r,l));if(u.ok){const c=await u.json();return m0(c)}else throw await g0("Generate Auth Token",u)}function Ix(t,{fid:e}){return`${p0(t)}/${e}/authTokens:generate`}/**
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
 */async function Mp(t,e=!1){let n;const r=await hc(t.appConfig,s=>{if(!A0(s))throw _i.create("not-registered");const o=s.authToken;if(!e&&Rx(o))return s;if(o.requestStatus===1)return n=Sx(t,e),s;{if(!navigator.onLine)throw _i.create("app-offline");const l=Px(s);return n=Ax(t,l),l}});return n?await n:r.authToken}async function Sx(t,e){let n=await Ay(t.appConfig);for(;n.authToken.requestStatus===1;)await v0(100),n=await Ay(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mp(t,e):r}function Ay(t){return hc(t,e=>{if(!A0(e))throw _i.create("not-registered");const n=e.authToken;return kx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ax(t,e){try{const n=await Tx(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Iu(t.appConfig,r),n}catch(n){if(f0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await I0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Iu(t.appConfig,r)}throw n}}function A0(t){return t!==void 0&&t.registrationStatus===2}function Rx(t){return t.requestStatus===2&&!Cx(t)}function Cx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ex}function Px(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function kx(t){return t.requestStatus===1&&t.requestTime+c0<Date.now()}/**
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
 */async function Nx(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lp(e);return r?r.catch(console.error):Mp(e).catch(console.error),n.fid}/**
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
 */async function Dx(t,e=!1){const n=t;return await xx(n),(await Mp(n,e)).token}async function xx(t){const{registrationPromise:e}=await Lp(t);e&&await e}/**
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
 */function Ox(t){if(!t||!t.options)throw Fh("App Configuration");if(!t.name)throw Fh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fh(t){return _i.create("missing-app-config-values",{valueName:t})}/**
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
 */const R0="installations",bx="installations-internal",Vx=t=>{const e=t.getProvider("app").getImmediate(),n=Ox(e),r=zr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lx=t=>{const e=t.getProvider("app").getImmediate(),n=zr(e,R0).getImmediate();return{getId:()=>Nx(n),getToken:i=>Dx(n,i)}};function Mx(){nn(new Ht(R0,Vx,"PUBLIC")),nn(new Ht(bx,Lx,"PRIVATE"))}Mx();Tt(u0,bp);Tt(u0,bp,"esm2017");/**
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
 */const Su="analytics",Ux="firebase_id",Fx="origin",jx=60*1e3,Bx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Up="https://www.googletagmanager.com/gtag/js";/**
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
 */const It=new oc("@firebase/analytics");/**
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
 */const zx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xt=new Ai("analytics","Analytics",zx);/**
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
 */function $x(t){if(!t.startsWith(Up)){const e=xt.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function C0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function qx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Hx(t,e){const n=qx("firebase-js-sdk-policy",{createScriptURL:$x}),r=document.createElement("script"),i=`${Up}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Wx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Gx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await C0(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){It.error(l)}t("config",i,s)}async function Kx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await C0(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){It.error(s)}}function Qx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await Kx(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await Gx(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){It.error(l)}}return i}function Xx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Qx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Yx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Up)&&n.src.includes(t))return n;return null}/**
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
 */const Jx=30,Zx=1e3;class eO{constructor(e={},n=Zx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const P0=new eO;function tO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function nO(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:tO(r)},s=Bx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function rO(t,e=P0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw xt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw xt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new oO;return setTimeout(async()=>{l.abort()},jx),k0({appId:r,apiKey:i,measurementId:s},o,l,e)}async function k0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=P0){var s;const{appId:o,measurementId:l}=t;try{await iO(r,e)}catch(u){if(l)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await nO(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!sO(c)){if(i.deleteThrottleMetadata(o),l)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?X_(n,i.intervalMillis,Jx):X_(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),It.debug(`Calling attemptFetch again in ${d} millis`),k0(t,p,r,i)}}function iO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sO(t){if(!(t instanceof Wt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class oO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function aO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function lO(){if(Ep())try{await Tp()}catch(t){return It.warn(xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uO(t,e,n,r,i,s,o){var l;const u=rO(t);u.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>It.error(v)),e.push(u);const c=lO().then(v=>{if(v)return r.getId()}),[d,p]=await Promise.all([u,c]);Yx(s)||Hx(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[Fx]="firebase",m.update=!0,p!=null&&(m[Ux]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class cO{constructor(e){this.app=e}_delete(){return delete No[this.app.options.appId],Promise.resolve()}}let No={},Ry=[];const Cy={};let jh="dataLayer",hO="gtag",Py,N0,ky=!1;function dO(){const t=[];if(wp()&&t.push("This is a browser extension environment."),ET()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xt.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function fO(t,e,n){dO();const r=t.options.appId;if(!r)throw xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xt.create("no-api-key");if(No[r]!=null)throw xt.create("already-exists",{id:r});if(!ky){Wx(jh);const{wrappedGtag:s,gtagCore:o}=Xx(No,Ry,Cy,jh,hO);N0=s,Py=o,ky=!0}return No[r]=uO(t,Ry,Cy,e,Py,jh,n),new cO(t)}function pO(t=va()){t=le(t);const e=zr(t,Su);return e.isInitialized()?e.getImmediate():mO(t)}function mO(t,e={}){const n=zr(t,Su);if(n.isInitialized()){const i=n.getImmediate();if(kr(e,n.getOptions()))return i;throw xt.create("already-initialized")}return n.initialize({options:e})}async function gO(){if(wp()||!ET()||!Ep())return!1;try{return await Tp()}catch{return!1}}function _O(t,e,n,r){t=le(t),aO(N0,No[t.app.options.appId],e,n,r).catch(i=>It.error(i))}const Ny="@firebase/analytics",Dy="0.10.17";function yO(){nn(new Ht(Su,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return fO(r,i,n)},"PUBLIC")),nn(new Ht("analytics-internal",t,"PRIVATE")),Tt(Ny,Dy),Tt(Ny,Dy,"esm2017");function t(e){try{const n=e.getProvider(Su).getImmediate();return{logEvent:(r,i,s)=>_O(n,r,i,s)}}catch(n){throw xt.create("interop-component-reg-failed",{reason:n})}}}yO();var xy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sr,D0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function w(){}w.prototype=_.prototype,T.D=_.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(S,C,D){for(var A=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)A[Mt-2]=arguments[Mt];return _.prototype[C].apply(S,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,w){w||(w=0);var S=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)S[C]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(C=0;16>C;++C)S[C]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=T.g[0],w=T.g[1],C=T.g[2];var D=T.g[3],A=_+(D^w&(C^D))+S[0]+3614090360&4294967295;_=w+(A<<7&4294967295|A>>>25),A=D+(C^_&(w^C))+S[1]+3905402710&4294967295,D=_+(A<<12&4294967295|A>>>20),A=C+(w^D&(_^w))+S[2]+606105819&4294967295,C=D+(A<<17&4294967295|A>>>15),A=w+(_^C&(D^_))+S[3]+3250441966&4294967295,w=C+(A<<22&4294967295|A>>>10),A=_+(D^w&(C^D))+S[4]+4118548399&4294967295,_=w+(A<<7&4294967295|A>>>25),A=D+(C^_&(w^C))+S[5]+1200080426&4294967295,D=_+(A<<12&4294967295|A>>>20),A=C+(w^D&(_^w))+S[6]+2821735955&4294967295,C=D+(A<<17&4294967295|A>>>15),A=w+(_^C&(D^_))+S[7]+4249261313&4294967295,w=C+(A<<22&4294967295|A>>>10),A=_+(D^w&(C^D))+S[8]+1770035416&4294967295,_=w+(A<<7&4294967295|A>>>25),A=D+(C^_&(w^C))+S[9]+2336552879&4294967295,D=_+(A<<12&4294967295|A>>>20),A=C+(w^D&(_^w))+S[10]+4294925233&4294967295,C=D+(A<<17&4294967295|A>>>15),A=w+(_^C&(D^_))+S[11]+2304563134&4294967295,w=C+(A<<22&4294967295|A>>>10),A=_+(D^w&(C^D))+S[12]+1804603682&4294967295,_=w+(A<<7&4294967295|A>>>25),A=D+(C^_&(w^C))+S[13]+4254626195&4294967295,D=_+(A<<12&4294967295|A>>>20),A=C+(w^D&(_^w))+S[14]+2792965006&4294967295,C=D+(A<<17&4294967295|A>>>15),A=w+(_^C&(D^_))+S[15]+1236535329&4294967295,w=C+(A<<22&4294967295|A>>>10),A=_+(C^D&(w^C))+S[1]+4129170786&4294967295,_=w+(A<<5&4294967295|A>>>27),A=D+(w^C&(_^w))+S[6]+3225465664&4294967295,D=_+(A<<9&4294967295|A>>>23),A=C+(_^w&(D^_))+S[11]+643717713&4294967295,C=D+(A<<14&4294967295|A>>>18),A=w+(D^_&(C^D))+S[0]+3921069994&4294967295,w=C+(A<<20&4294967295|A>>>12),A=_+(C^D&(w^C))+S[5]+3593408605&4294967295,_=w+(A<<5&4294967295|A>>>27),A=D+(w^C&(_^w))+S[10]+38016083&4294967295,D=_+(A<<9&4294967295|A>>>23),A=C+(_^w&(D^_))+S[15]+3634488961&4294967295,C=D+(A<<14&4294967295|A>>>18),A=w+(D^_&(C^D))+S[4]+3889429448&4294967295,w=C+(A<<20&4294967295|A>>>12),A=_+(C^D&(w^C))+S[9]+568446438&4294967295,_=w+(A<<5&4294967295|A>>>27),A=D+(w^C&(_^w))+S[14]+3275163606&4294967295,D=_+(A<<9&4294967295|A>>>23),A=C+(_^w&(D^_))+S[3]+4107603335&4294967295,C=D+(A<<14&4294967295|A>>>18),A=w+(D^_&(C^D))+S[8]+1163531501&4294967295,w=C+(A<<20&4294967295|A>>>12),A=_+(C^D&(w^C))+S[13]+2850285829&4294967295,_=w+(A<<5&4294967295|A>>>27),A=D+(w^C&(_^w))+S[2]+4243563512&4294967295,D=_+(A<<9&4294967295|A>>>23),A=C+(_^w&(D^_))+S[7]+1735328473&4294967295,C=D+(A<<14&4294967295|A>>>18),A=w+(D^_&(C^D))+S[12]+2368359562&4294967295,w=C+(A<<20&4294967295|A>>>12),A=_+(w^C^D)+S[5]+4294588738&4294967295,_=w+(A<<4&4294967295|A>>>28),A=D+(_^w^C)+S[8]+2272392833&4294967295,D=_+(A<<11&4294967295|A>>>21),A=C+(D^_^w)+S[11]+1839030562&4294967295,C=D+(A<<16&4294967295|A>>>16),A=w+(C^D^_)+S[14]+4259657740&4294967295,w=C+(A<<23&4294967295|A>>>9),A=_+(w^C^D)+S[1]+2763975236&4294967295,_=w+(A<<4&4294967295|A>>>28),A=D+(_^w^C)+S[4]+1272893353&4294967295,D=_+(A<<11&4294967295|A>>>21),A=C+(D^_^w)+S[7]+4139469664&4294967295,C=D+(A<<16&4294967295|A>>>16),A=w+(C^D^_)+S[10]+3200236656&4294967295,w=C+(A<<23&4294967295|A>>>9),A=_+(w^C^D)+S[13]+681279174&4294967295,_=w+(A<<4&4294967295|A>>>28),A=D+(_^w^C)+S[0]+3936430074&4294967295,D=_+(A<<11&4294967295|A>>>21),A=C+(D^_^w)+S[3]+3572445317&4294967295,C=D+(A<<16&4294967295|A>>>16),A=w+(C^D^_)+S[6]+76029189&4294967295,w=C+(A<<23&4294967295|A>>>9),A=_+(w^C^D)+S[9]+3654602809&4294967295,_=w+(A<<4&4294967295|A>>>28),A=D+(_^w^C)+S[12]+3873151461&4294967295,D=_+(A<<11&4294967295|A>>>21),A=C+(D^_^w)+S[15]+530742520&4294967295,C=D+(A<<16&4294967295|A>>>16),A=w+(C^D^_)+S[2]+3299628645&4294967295,w=C+(A<<23&4294967295|A>>>9),A=_+(C^(w|~D))+S[0]+4096336452&4294967295,_=w+(A<<6&4294967295|A>>>26),A=D+(w^(_|~C))+S[7]+1126891415&4294967295,D=_+(A<<10&4294967295|A>>>22),A=C+(_^(D|~w))+S[14]+2878612391&4294967295,C=D+(A<<15&4294967295|A>>>17),A=w+(D^(C|~_))+S[5]+4237533241&4294967295,w=C+(A<<21&4294967295|A>>>11),A=_+(C^(w|~D))+S[12]+1700485571&4294967295,_=w+(A<<6&4294967295|A>>>26),A=D+(w^(_|~C))+S[3]+2399980690&4294967295,D=_+(A<<10&4294967295|A>>>22),A=C+(_^(D|~w))+S[10]+4293915773&4294967295,C=D+(A<<15&4294967295|A>>>17),A=w+(D^(C|~_))+S[1]+2240044497&4294967295,w=C+(A<<21&4294967295|A>>>11),A=_+(C^(w|~D))+S[8]+1873313359&4294967295,_=w+(A<<6&4294967295|A>>>26),A=D+(w^(_|~C))+S[15]+4264355552&4294967295,D=_+(A<<10&4294967295|A>>>22),A=C+(_^(D|~w))+S[6]+2734768916&4294967295,C=D+(A<<15&4294967295|A>>>17),A=w+(D^(C|~_))+S[13]+1309151649&4294967295,w=C+(A<<21&4294967295|A>>>11),A=_+(C^(w|~D))+S[4]+4149444226&4294967295,_=w+(A<<6&4294967295|A>>>26),A=D+(w^(_|~C))+S[11]+3174756917&4294967295,D=_+(A<<10&4294967295|A>>>22),A=C+(_^(D|~w))+S[2]+718787259&4294967295,C=D+(A<<15&4294967295|A>>>17),A=w+(D^(C|~_))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+D&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var w=_-this.blockSize,S=this.B,C=this.h,D=0;D<_;){if(C==0)for(;D<=w;)i(this,T,D),D+=this.blockSize;if(typeof T=="string"){for(;D<_;)if(S[C++]=T.charCodeAt(D++),C==this.blockSize){i(this,S),C=0;break}}else for(;D<_;)if(S[C++]=T[D++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var w=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=w&255,w/=256;for(this.u(T),T=Array(16),_=w=0;4>_;++_)for(var S=0;32>S;S+=8)T[w++]=this.g[_]>>>S&255;return T};function s(T,_){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=_(T)}function o(T,_){this.h=_;for(var w=[],S=!0,C=T.length-1;0<=C;C--){var D=T[C]|0;S&&D==_||(w[C]=D,S=!1)}this.g=w}var l={};function u(T){return-128<=T&&128>T?s(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return k(c(-T));for(var _=[],w=1,S=0;T>=w;S++)_[S]=T/w|0,w*=4294967296;return new o(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return k(d(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(_,8)),S=p,C=0;C<T.length;C+=8){var D=Math.min(8,T.length-C),A=parseInt(T.substring(C,C+D),_);8>D?(D=c(Math.pow(_,D)),S=S.j(D).add(c(A))):(S=S.j(w),S=S.add(c(A)))}return S}var p=u(0),m=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-k(this).m();for(var T=0,_=1,w=0;w<this.g.length;w++){var S=this.i(w);T+=(0<=S?S:4294967296+S)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(P(this))return"-"+k(this).toString(T);for(var _=c(Math.pow(T,6)),w=this,S="";;){var C=x(w,_).g;w=I(w,C.j(_));var D=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=C,R(w))return D+S;for(;6>D.length;)D="0"+D;S=D+S}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=I(this,T),P(T)?-1:R(T)?0:1};function k(T){for(var _=T.g.length,w=[],S=0;S<_;S++)w[S]=~T.g[S];return new o(w,~T.h).add(m)}t.abs=function(){return P(this)?k(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],S=0,C=0;C<=_;C++){var D=S+(this.i(C)&65535)+(T.i(C)&65535),A=(D>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);S=A>>>16,D&=65535,A&=65535,w[C]=A<<16|D}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(T,_){return T.add(k(_))}t.j=function(T){if(R(this)||R(T))return p;if(P(this))return P(T)?k(this).j(k(T)):k(k(this).j(T));if(P(T))return k(this.j(k(T)));if(0>this.l(v)&&0>T.l(v))return c(this.m()*T.m());for(var _=this.g.length+T.g.length,w=[],S=0;S<2*_;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<T.g.length;C++){var D=this.i(S)>>>16,A=this.i(S)&65535,Mt=T.i(C)>>>16,Wr=T.i(C)&65535;w[2*S+2*C]+=A*Wr,y(w,2*S+2*C),w[2*S+2*C+1]+=D*Wr,y(w,2*S+2*C+1),w[2*S+2*C+1]+=A*Mt,y(w,2*S+2*C+1),w[2*S+2*C+2]+=D*Mt,y(w,2*S+2*C+2)}for(S=0;S<_;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=_;S<2*_;S++)w[S]=0;return new o(w,0)};function y(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function E(T,_){this.g=T,this.h=_}function x(T,_){if(R(_))throw Error("division by zero");if(R(T))return new E(p,p);if(P(T))return _=x(k(T),_),new E(k(_.g),k(_.h));if(P(_))return _=x(T,k(_)),new E(k(_.g),_.h);if(30<T.g.length){if(P(T)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var w=m,S=_;0>=S.l(T);)w=M(w),S=M(S);var C=F(w,1),D=F(S,1);for(S=F(S,2),w=F(w,2);!R(S);){var A=D.add(S);0>=A.l(T)&&(C=C.add(w),D=A),S=F(S,1),w=F(w,1)}return _=I(T,C.j(_)),new E(C,_)}for(C=p;0<=T.l(_);){for(w=Math.max(1,Math.floor(T.m()/_.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),D=c(w),A=D.j(_);P(A)||0<A.l(T);)w-=S,D=c(w),A=D.j(_);R(D)&&(D=m),C=C.add(D),T=I(T,A)}return new E(C,T)}t.A=function(T){return x(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)&T.i(S);return new o(w,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)|T.i(S);return new o(w,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)^T.i(S);return new o(w,this.h^T.h)};function M(T){for(var _=T.g.length+1,w=[],S=0;S<_;S++)w[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(w,T.h)}function F(T,_){var w=_>>5;_%=32;for(var S=T.g.length-w,C=[],D=0;D<S;D++)C[D]=0<_?T.i(D+w)>>>_|T.i(D+w+1)<<32-_:T.i(D+w);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,D0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Sr=o}).apply(typeof xy<"u"?xy:typeof self<"u"?self:typeof window<"u"?window:{});var ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var x0,mo,O0,Ul,nf,b0,V0,L0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ml=="object"&&ml];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in f))break e;f=f[N]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,N={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,N,O){for(var j=Array(arguments.length-2),he=2;he<arguments.length;he++)j[he-2]=arguments[he];return h.prototype[N].apply(g,j)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function k(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const N=a.length||0,O=g.length||0;a.length=N+O;for(let j=0;j<O;j++)a[N+j]=g[j]}else a.push(g)}}class I{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var M=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function F(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function T(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)a[f]=g[f];for(let O=0;O<w.length;O++)f=w[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function D(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Mt{constructor(){this.h=this.g=null}add(h,f){const g=Wr.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Wr=new I(()=>new Fs,a=>a.reset());class Fs{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let vn,$=!1,Y=new Mt,J=()=>{const a=l.Promise.resolve(void 0);vn=()=>{a.then(ve)}};var ve=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){D(f)}var h=Wr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var wn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function En(a,h){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{x(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Tn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&En.aa.h.call(this)}}R(En,ke);var Tn={2:"touch",3:"pen",4:"mouse"};En.prototype.h=function(){En.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var In="closure_listenable_"+(1e6*Math.random()|0),jS=0;function BS(a,h,f,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=N,this.key=++jS,this.da=this.fa=!1}function Oa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ba(a){this.src=a,this.g={},this.h=0}ba.prototype.add=function(a,h,f,g,N){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var j=Lc(a,h,g,N);return-1<j?(h=a[j],f||(h.fa=!1)):(h=new BS(h,this.src,O,!!g,N),h.fa=f,a.push(h)),h};function Vc(a,h){var f=h.type;if(f in a.g){var g=a.g[f],N=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=N)&&Array.prototype.splice.call(g,N,1),O&&(Oa(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Lc(a,h,f,g){for(var N=0;N<a.length;++N){var O=a[N];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return N}return-1}var Mc="closure_lm_"+(1e6*Math.random()|0),Uc={};function Nm(a,h,f,g,N){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Nm(a,h[O],f,g,N);return null}return f=Om(f),a&&a[In]?a.K(h,f,c(g)?!!g.capture:!1,N):zS(a,h,f,!1,g,N)}function zS(a,h,f,g,N,O){if(!h)throw Error("Invalid event type");var j=c(N)?!!N.capture:!!N,he=jc(a);if(he||(a[Mc]=he=new ba(a)),f=he.add(h,f,g,j,O),f.proxy)return f;if(g=$S(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)wn||(N=j),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(xm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $S(){function a(f){return h.call(a.src,a.listener,f)}const h=qS;return a}function Dm(a,h,f,g,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)Dm(a,h[O],f,g,N);else g=c(g)?!!g.capture:!!g,f=Om(f),a&&a[In]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=Lc(O,f,g,N),-1<f&&(Oa(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=jc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Lc(h,f,g,N)),(f=-1<a?h[a]:null)&&Fc(f))}function Fc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[In])Vc(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(xm(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=jc(h))?(Vc(f,a),f.h==0&&(f.src=null,h[Mc]=null)):Oa(a)}}}function xm(a){return a in Uc?Uc[a]:Uc[a]="on"+a}function qS(a,h){if(a.da)a=!0;else{h=new En(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Fc(a),a=f.call(g,h)}return a}function jc(a){return a=a[Mc],a instanceof ba?a:null}var Bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Om(a){return typeof a=="function"?a:(a[Bc]||(a[Bc]=function(h){return a.handleEvent(h)}),a[Bc])}function Xe(){ce.call(this),this.i=new ba(this),this.M=this,this.F=null}R(Xe,ce),Xe.prototype[In]=!0,Xe.prototype.removeEventListener=function(a,h,f,g){Dm(this,a,h,f,g)};function at(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new ke(h,a);else if(h instanceof ke)h.target=h.target||a;else{var N=h;h=new ke(g,a),S(h,N)}if(N=!0,f)for(var O=f.length-1;0<=O;O--){var j=h.g=f[O];N=Va(j,g,!0,h)&&N}if(j=h.g=a,N=Va(j,g,!0,h)&&N,N=Va(j,g,!1,h)&&N,f)for(O=0;O<f.length;O++)j=h.g=f[O],N=Va(j,g,!1,h)&&N}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Oa(f[g]);delete a.g[h],a.h--}}this.F=null},Xe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Xe.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Va(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,O=0;O<h.length;++O){var j=h[O];if(j&&!j.da&&j.capture==f){var he=j.listener,$e=j.ha||j.src;j.fa&&Vc(a.i,j),N=he.call($e,g)!==!1&&N}}return N&&!g.defaultPrevented}function bm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Vm(a){a.g=bm(()=>{a.g=null,a.i&&(a.i=!1,Vm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class HS extends ce{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Vm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(a){ce.call(this),this.h=a,this.g={}}R(js,ce);var Lm=[];function Mm(a){F(a.g,function(h,f){this.g.hasOwnProperty(f)&&Fc(h)},a),a.g={}}js.prototype.N=function(){js.aa.N.call(this),Mm(this)},js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zc=l.JSON.stringify,WS=l.JSON.parse,GS=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function $c(){}$c.prototype.h=null;function Um(a){return a.h||(a.h=a.i())}function Fm(){}var Bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qc(){ke.call(this,"d")}R(qc,ke);function Hc(){ke.call(this,"c")}R(Hc,ke);var Gr={},jm=null;function La(){return jm=jm||new Xe}Gr.La="serverreachability";function Bm(a){ke.call(this,Gr.La,a)}R(Bm,ke);function zs(a){const h=La();at(h,new Bm(h))}Gr.STAT_EVENT="statevent";function zm(a,h){ke.call(this,Gr.STAT_EVENT,a),this.stat=h}R(zm,ke);function lt(a){const h=La();at(h,new zm(h,a))}Gr.Ma="timingevent";function $m(a,h){ke.call(this,Gr.Ma,a),this.size=h}R($m,ke);function $s(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function qs(){this.g=!0}qs.prototype.xa=function(){this.g=!1};function KS(a,h,f,g,N,O){a.info(function(){if(a.g)if(O)for(var j="",he=O.split("&"),$e=0;$e<he.length;$e++){var oe=he[$e].split("=");if(1<oe.length){var Ye=oe[0];oe=oe[1];var Je=Ye.split("_");j=2<=Je.length&&Je[1]=="type"?j+(Ye+"="+oe+"&"):j+(Ye+"=redacted&")}}else j=null;else j=O;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+f+`
`+j})}function QS(a,h,f,g,N,O,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+f+`
`+O+" "+j})}function xi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+YS(a,f)+(g?" "+g:"")})}function XS(a,h){a.info(function(){return"TIMEOUT: "+h})}qs.prototype.info=function(){};function YS(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var j=1;j<N.length;j++)N[j]=""}}}}return zc(f)}catch{return h}}var Ma={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wc;function Ua(){}R(Ua,$c),Ua.prototype.g=function(){return new XMLHttpRequest},Ua.prototype.i=function(){return{}},Wc=new Ua;function Qn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new js(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hm}function Hm(){this.i=null,this.g="",this.h=!1}var Wm={},Gc={};function Kc(a,h,f){a.L=1,a.v=za(Sn(h)),a.m=f,a.P=!0,Gm(a,null)}function Gm(a,h){a.F=Date.now(),Fa(a),a.A=Sn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),ag(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Hm,a.g=Ag(a.j,f?h:null,!a.m),0<a.O&&(a.M=new HS(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Lm[0]=N.toString()),N=Lm);for(var O=0;O<N.length;O++){var j=Nm(f,N[O],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),zs(),KS(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&An(a)==3?h.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const Je=An(this.g);var h=this.g.Ba();const Vi=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||pg(this.g)))){this.J||Je!=4||h==7||(h==8||0>=Vi?zs(3):zs(2)),Qc(this);var f=this.g.Z();this.X=f;t:if(Km(this)){var g=pg(this.g);a="";var N=g.length,O=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kr(this),Hs(this);var j="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==N-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,QS(this.i,this.u,this.A,this.l,this.R,Je,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,$e=this.g;if((he=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(he)){var oe=he;break t}}oe=null}if(f=oe)xi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xc(this,f);else{this.o=!1,this.s=3,lt(12),Kr(this),Hs(this);break e}}if(this.P){f=!0;let Gt;for(;!this.J&&this.C<j.length;)if(Gt=JS(this,j),Gt==Gc){Je==4&&(this.s=4,lt(14),f=!1),xi(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Wm){this.s=4,lt(15),xi(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else xi(this.i,this.l,Gt,null),Xc(this,Gt);if(Km(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||j.length!=0||this.h.h||(this.s=1,lt(16),f=!1),this.o=this.o&&f,!f)xi(this.i,this.l,j,"[Invalid Chunked Response]"),Kr(this),Hs(this);else if(0<j.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),nh(Ye),Ye.M=!0,lt(11))}}else xi(this.i,this.l,j,null),Xc(this,j);Je==4&&Kr(this),this.o&&!this.J&&(Je==4?Eg(this.j,this):(this.o=!1,Fa(this)))}else mA(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Kr(this),Hs(this)}}}catch{}finally{}};function Km(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function JS(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Gc:(f=Number(h.substring(f,g)),isNaN(f)?Wm:(g+=1,g+f>h.length?Gc:(h=h.slice(g,g+f),a.C=g+f,h)))}Qn.prototype.cancel=function(){this.J=!0,Kr(this)};function Fa(a){a.S=Date.now()+a.I,Qm(a,a.I)}function Qm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=$s(m(a.ba,a),h)}function Qc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(XS(this.i,this.A),this.L!=2&&(zs(),lt(17)),Kr(this),this.s=2,Hs(this)):Qm(this,this.S-a)};function Hs(a){a.j.G==0||a.J||Eg(a.j,a)}function Kr(a){Qc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Mm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Xc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Yc(f.h,a))){if(!a.K&&Yc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ka(f),Wa(f);else break e;th(f),lt(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=$s(m(f.Za,f),6e3));if(1>=Jm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Xr(f,11)}else if((a.K||f.g==a)&&Ka(f),!y(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let oe=N[h];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const Ye=oe[3];Ye!=null&&(f.la=Ye,f.j.info("VER="+f.la));const Je=oe[4];Je!=null&&(f.Aa=Je,f.j.info("SVER="+f.Aa));const Vi=oe[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(g=1.5*Vi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Gt=a.g;if(Gt){const Xa=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xa){var O=g.h;O.g||Xa.indexOf("spdy")==-1&&Xa.indexOf("quic")==-1&&Xa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Jc(O,O.h),O.h=null))}if(g.D){const rh=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;rh&&(g.ya=rh,fe(g.I,g.D,rh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=a;if(g.qa=Sg(g,g.J?g.ia:null,g.W),j.K){Zm(g.h,j);var he=j,$e=g.L;$e&&(he.I=$e),he.B&&(Qc(he),Fa(he)),g.g=j}else vg(g);0<f.i.length&&Ga(f)}else oe[0]!="stop"&&oe[0]!="close"||Xr(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Xr(f,7):eh(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}zs(4)}catch{}}var ZS=class{constructor(a,h){this.g=a,this.map=h}};function Xm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ym(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jm(a){return a.h?1:a.g?a.g.size:0}function Yc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Jc(a,h){a.g?a.g.add(h):a.h=h}function Zm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Xm.prototype.cancel=function(){if(this.i=eg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function eg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function eA(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function tA(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function tg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=tA(a),g=eA(a),N=g.length,O=0;O<N;O++)h.call(void 0,g[O],f&&f[O],a)}var ng=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nA(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),N=null;if(0<=g){var O=a[f].substring(0,g);N=a[f].substring(g+1)}else O=a[f];h(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qr){this.h=a.h,ja(this,a.j),this.o=a.o,this.g=a.g,Ba(this,a.s),this.l=a.l;var h=a.i,f=new Ks;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),rg(this,f),this.m=a.m}else a&&(h=String(a).match(ng))?(this.h=!1,ja(this,h[1]||"",!0),this.o=Ws(h[2]||""),this.g=Ws(h[3]||"",!0),Ba(this,h[4]),this.l=Ws(h[5]||"",!0),rg(this,h[6]||"",!0),this.m=Ws(h[7]||"")):(this.h=!1,this.i=new Ks(null,this.h))}Qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Gs(h,ig,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Gs(h,ig,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Gs(f,f.charAt(0)=="/"?sA:iA,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Gs(f,aA)),a.join("")};function Sn(a){return new Qr(a)}function ja(a,h,f){a.j=f?Ws(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ba(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function rg(a,h,f){h instanceof Ks?(a.i=h,lA(a.i,a.h)):(f||(h=Gs(h,oA)),a.i=new Ks(h,a.h))}function fe(a,h,f){a.i.set(h,f)}function za(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ws(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,rA),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rA(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ig=/[#\/\?@]/g,iA=/[#\?:]/g,sA=/[#\?]/g,oA=/[#\?@]/g,aA=/#/g;function Ks(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&nA(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ks.prototype,t.add=function(a,h){Xn(this),this.i=null,a=Oi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function sg(a,h){Xn(a),h=Oi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function og(a,h){return Xn(a),h=Oi(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(f,g){f.forEach(function(N){a.call(h,N,g,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const N=a[g];for(let O=0;O<N.length;O++)f.push(h[g])}return f},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")og(this,a)&&(h=h.concat(this.g.get(Oi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=Oi(this,a),og(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function ag(a,h,f){sg(a,h),0<f.length&&(a.i=null,a.g.set(Oi(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var N=O;j[g]!==""&&(N+="="+encodeURIComponent(String(j[g]))),a.push(N)}}return this.i=a.join("&")};function Oi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function lA(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(f,g){var N=g.toLowerCase();g!=N&&(sg(this,g),ag(this,N,f))},a)),a.j=h}function uA(a,h){const f=new qs;if(l.Image){const g=new Image;g.onload=v(Yn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=v(Yn,f,"TestLoadImage: error",!1,h,g),g.onabort=v(Yn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(Yn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function cA(a,h){const f=new qs,g=new AbortController,N=setTimeout(()=>{g.abort(),Yn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(N),O.ok?Yn(f,"TestPingServer: ok",!0,h):Yn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Yn(f,"TestPingServer: error",!1,h)})}function Yn(a,h,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function hA(){this.g=new GS}function dA(a,h,f){const g=f||"";try{tg(a,function(N,O){let j=N;c(N)&&(j=zc(N)),h.push(g+O+"="+encodeURIComponent(j))})}catch(N){throw h.push(g+"type="+encodeURIComponent("_badmap")),N}}function $a(a){this.l=a.Ub||null,this.j=a.eb||!1}R($a,$c),$a.prototype.g=function(){return new qa(this.l,this.j)},$a.prototype.i=function(a){return function(){return a}}({});function qa(a,h){Xe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(qa,Xe),t=qa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function lg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qs(this):Xs(this),this.readyState==3&&lg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qs(this))},t.Qa=function(a){this.g&&(this.response=a,Qs(this))},t.ga=function(){this.g&&Qs(this)};function Qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ug(a){let h="";return F(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Zc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ug(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):fe(a,h,f))}function Ce(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ce,Xe);var fA=/^https?$/i,pA=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wc.g(),this.v=this.o?Um(this.o):Um(Wc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){cg(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(pA,h,void 0))||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of f)this.g.setRequestHeader(O,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fg(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){cg(this,O)}};function cg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,hg(a),Ha(a)}function hg(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,at(this,"complete"),at(this,"abort"),Ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ha(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?dg(this):this.bb())},t.bb=function(){dg(this)};function dg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)bm(a.Ea,0,a);else if(at(a,"readystatechange"),An(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=j===0){var N=String(a.D).match(ng)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),g=!fA.test(N?N.toLowerCase():"")}f=g}if(f)at(a,"complete"),at(a,"success");else{a.m=6;try{var O=2<An(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",hg(a)}}finally{Ha(a)}}}}function Ha(a,h){if(a.g){fg(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||at(a,"ready");try{f.onreadystatechange=g}catch{}}}function fg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),WS(h)}};function pg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mA(a){const h={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var f=C(a[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[N]||[];h[N]=O,O.push(f)}T(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ys(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function mg(a){this.Aa=0,this.i=[],this.j=new qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ys("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ys("baseRetryDelayMs",5e3,a),this.cb=Ys("retryDelaySeedMs",1e4,a),this.Wa=Ys("forwardChannelMaxRetries",2,a),this.wa=Ys("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xm(a&&a.concurrentRequestLimit),this.Da=new hA,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){lt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Sg(this,null,this.W),Ga(this)};function eh(a){if(gg(a),a.G==3){var h=a.U++,f=Sn(a.I);if(fe(f,"SID",a.K),fe(f,"RID",h),fe(f,"TYPE","terminate"),Js(a,f),h=new Qn(a,a.j,h),h.L=2,h.v=za(Sn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ag(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Fa(h)}Ig(a)}function Wa(a){a.g&&(nh(a),a.g.cancel(),a.g=null)}function gg(a){Wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ga(a){if(!Ym(a.h)&&!a.s){a.s=!0;var h=a.Ga;vn||J(),$||(vn(),$=!0),Y.add(h,a),a.B=0}}function gA(a,h){return Jm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=$s(m(a.Ga,a,h),Tg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Qn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=yg(this,N,h),f=Sn(this.I),fe(f,"RID",a),fe(f,"CVER",22),this.D&&fe(f,"X-HTTP-Session-Id",this.D),Js(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(ug(O)))+"&"+h:this.m&&Zc(f,this.m,O)),Jc(this.h,N),this.Ua&&fe(f,"TYPE","init"),this.P?(fe(f,"$req",h),fe(f,"SID","null"),N.T=!0,Kc(N,f,null)):Kc(N,f,h),this.G=2}}else this.G==3&&(a?_g(this,a):this.i.length==0||Ym(this.h)||_g(this))};function _g(a,h){var f;h?f=h.l:f=a.U++;const g=Sn(a.I);fe(g,"SID",a.K),fe(g,"RID",f),fe(g,"AID",a.T),Js(a,g),a.m&&a.o&&Zc(g,a.m,a.o),f=new Qn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=yg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Jc(a.h,f),Kc(f,g,h)}function Js(a,h){a.H&&F(a.H,function(f,g){fe(h,g,f)}),a.l&&tg({},function(f,g){fe(h,g,f)})}function yg(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let O=-1;for(;;){const j=["count="+f];O==-1?0<f?(O=N[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let he=!0;for(let $e=0;$e<f;$e++){let oe=N[$e].g;const Ye=N[$e].map;if(oe-=O,0>oe)O=Math.max(0,N[$e].g-100),he=!1;else try{dA(Ye,j,"req"+oe+"_")}catch{g&&g(Ye)}}if(he){g=j.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function vg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;vn||J(),$||(vn(),$=!0),Y.add(h,a),a.v=0}}function th(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=$s(m(a.Fa,a),Tg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,wg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=$s(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Wa(this),wg(this))};function nh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function wg(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Sn(a.qa);fe(h,"RID","rpc"),fe(h,"SID",a.K),fe(h,"AID",a.T),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(h,"TO",a.ja),fe(h,"TYPE","xmlhttp"),Js(a,h),a.m&&a.o&&Zc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=za(Sn(h)),f.m=null,f.P=!0,Gm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Wa(this),th(this),lt(19))};function Ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Eg(a,h){var f=null;if(a.g==h){Ka(a),nh(a),a.g=null;var g=2}else if(Yc(a.h,h))f=h.D,Zm(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;g=La(),at(g,new $m(g,f)),Ga(a)}else vg(a);else if(N=h.s,N==3||N==0&&0<h.X||!(g==1&&gA(a,h)||g==2&&th(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Xr(a,5);break;case 4:Xr(a,10);break;case 3:Xr(a,6);break;default:Xr(a,2)}}}function Tg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Xr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const N=!g;g=new Qr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ja(g,"https"),za(g),N?uA(g.toString(),f):cA(g.toString(),f)}else lt(2);a.G=0,a.l&&a.l.sa(h),Ig(a),gg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Ig(a){if(a.G=0,a.ka=[],a.l){const h=eg(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Sg(a,h,f){var g=f instanceof Qr?Sn(f):new Qr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ba(g,g.s);else{var N=l.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var O=new Qr(null);g&&ja(O,g),h&&(O.g=h),N&&Ba(O,N),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&fe(g,f,h),fe(g,"VER",a.la),Js(a,g),g}function Ag(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ce(new $a({eb:f})):new Ce(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rg(){}t=Rg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qa(){}Qa.prototype.g=function(a,h){return new St(a,h)};function St(a,h){Xe.call(this),this.g=new mg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new bi(this)}R(St,Xe),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){eh(this.g)},St.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=zc(a),a=f);h.i.push(new ZS(h.Ya++,a)),h.G==3&&Ga(h)},St.prototype.N=function(){this.g.l=null,delete this.j,eh(this.g),delete this.g,St.aa.N.call(this)};function Cg(a){qc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Cg,qc);function Pg(){Hc.call(this),this.status=1}R(Pg,Hc);function bi(a){this.g=a}R(bi,Rg),bi.prototype.ua=function(){at(this.g,"a")},bi.prototype.ta=function(a){at(this.g,new Cg(a))},bi.prototype.sa=function(a){at(this.g,new Pg)},bi.prototype.ra=function(){at(this.g,"b")},Qa.prototype.createWebChannel=Qa.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,L0=function(){return new Qa},V0=function(){return La()},b0=Gr,nf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ma.NO_ERROR=0,Ma.TIMEOUT=8,Ma.HTTP_ERROR=6,Ul=Ma,qm.COMPLETE="complete",O0=qm,Fm.EventType=Bs,Bs.OPEN="a",Bs.CLOSE="b",Bs.ERROR="c",Bs.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,mo=Fm,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,x0=Ce}).apply(typeof ml<"u"?ml:typeof self<"u"?self:typeof window<"u"?window:{});const Oy="@firebase/firestore",by="4.8.0";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let Os="11.10.0";/**
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
 */const vi=new oc("@firebase/firestore");function Ui(){return vi.logLevel}function q(t,...e){if(vi.logLevel<=te.DEBUG){const n=e.map(Fp);vi.debug(`Firestore (${Os}): ${t}`,...n)}}function $n(t,...e){if(vi.logLevel<=te.ERROR){const n=e.map(Fp);vi.error(`Firestore (${Os}): ${t}`,...n)}}function Nr(t,...e){if(vi.logLevel<=te.WARN){const n=e.map(Fp);vi.warn(`Firestore (${Os}): ${t}`,...n)}}function Fp(t){if(typeof t=="string")return t;try{/**
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
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,M0(t,r,n)}function M0(t,e,n){let r=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw $n(r),new Error(r)}function ie(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||M0(e,i,r)}function X(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class U0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class wO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EO{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ie(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string",31837,{l:r}),new U0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class TO{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class IO{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new TO(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SO{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ie(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Vy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function F0(){return new TextEncoder}/**
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
 */class jp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=AO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function rf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Z(r,i);{const s=F0(),o=RO(s.encode(Ly(t,n)),s.encode(Ly(e,n)));return o!==0?o:Z(r,i)}}n+=r>65535?2:1}return Z(t.length,e.length)}function Ly(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function RO(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Z(t[n],e[n]);return Z(t.length,e.length)}function Ts(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const My="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=ln.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Z(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),i=ln.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?ln.extractNumericId(e).compare(ln.extractNumericId(n)):rf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Sr.fromString(e.substring(4,e.length-2))}}class ue extends ln{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const CO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends ln{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return CO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===My}static keyField(){return new We([My])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ue.fromString(e))}static fromName(e){return new W(ue.fromString(e).popFirst(5))}static empty(){return new W(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ue(e.slice()))}}/**
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
 */function j0(t,e,n){if(!n)throw new z(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PO(t,e,n,r){if(e===!0&&r===!0)throw new z(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uy(t){if(!W.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fy(t){if(W.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function B0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dc(t);throw new z(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ve(t,e){const n={typeString:t};return e&&(n.value=e),n}function Sa(t,e){if(!B0(t))throw new z(b.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new z(b.INVALID_ARGUMENT,n);return!0}/**
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
 */const jy=-62135596800,By=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*By);return new me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<jy)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/By}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sa(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Ve("string",me._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
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
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new me(0,0))}static max(){return new K(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const sa=-1;function kO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new Dr(i,W.empty(),e)}function NO(t){return new Dr(t.readTime,t.key,sa)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(K.min(),W.empty(),sa)}static max(){return new Dr(K.max(),W.empty(),sa)}}function DO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const xO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bs(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==xO)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}fc.ue=-1;/**
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
 */const Bp=-1;function Aa(t){return t==null}function Au(t){return t===0&&1/t==-1/0}function VO(t){return typeof t=="number"&&Number.isInteger(t)&&!Au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const z0="";function LO(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=zy(e)),e=MO(t.get(n),e);return zy(e)}function MO(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case z0:n+="";break;default:n+=s}}return n}function zy(t){return t+z0+""}/**
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
 */function $y(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qy(this.data.getIterator())}getIteratorFrom(e){return new qy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class qy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Ue(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class q0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new q0("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const UO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(ie(!!t,39018),typeof t=="string"){let e=0;const n=UO.exec(t);if(ie(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */const H0="server_timestamp",W0="__type__",G0="__previous_value__",K0="__local_write_time__";function zp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[W0])===null||n===void 0?void 0:n.stringValue)===H0}function pc(t){const e=t.mapValue.fields[G0];return zp(e)?pc(e):e}function oa(t){const e=xr(t.mapValue.fields[K0].timestampValue);return new me(e.seconds,e.nanos)}/**
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
 */class FO{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Ru="(default)";class aa{constructor(e,n){this.projectId=e,this.database=n||Ru}static empty(){return new aa("","")}get isDefaultDatabase(){return this.database===Ru}isEqual(e){return e instanceof aa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Q0="__type__",jO="__max__",_l={mapValue:{}},X0="__vector__",Cu="value";function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zp(t)?4:zO(t)?9007199254740991:BO(t)?10:11:G(28295,{value:t})}function yn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oa(t).isEqual(oa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xr(i.timestampValue),l=xr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Or(i.bytesValue).isEqual(Or(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),l=Ne(s.doubleValue);return o===l?Au(o)===Au(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if($y(o)!==$y(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!yn(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function la(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Hy(t.timestampValue,e.timestampValue);case 4:return Hy(oa(t),oa(e));case 5:return rf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Or(s),u=Or(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Z(l[c],u[c]);if(d!==0)return d}return Z(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Z(Ne(s.latitude),Ne(o.latitude));return l!==0?l:Z(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},v=(l=p[Cu])===null||l===void 0?void 0:l.arrayValue,R=(u=m[Cu])===null||u===void 0?void 0:u.arrayValue,P=Z(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Wy(v,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===_l.mapValue&&o===_l.mapValue)return 0;if(s===_l.mapValue)return 1;if(o===_l.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=rf(u[p],d[p]);if(m!==0)return m;const v=Is(l[u[p]],c[d[p]]);if(v!==0)return v}return Z(u.length,d.length)}(t.mapValue,e.mapValue);default:throw G(23264,{le:n})}}function Hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=xr(t),r=xr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Wy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Is(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function Ss(t){return sf(t)}function sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=sf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${sf(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function Fl(t){switch(br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pc(t);return e?16+Fl(e):16;case 5:return 2*t.stringValue.length;case 6:return Or(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Fl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return qr(r.fields,(s,o)=>{i+=s.length+Fl(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function Gy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function of(t){return!!t&&"integerValue"in t}function $p(t){return!!t&&"arrayValue"in t}function Ky(t){return!!t&&"nullValue"in t}function Qy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jl(t){return!!t&&"mapValue"in t}function BO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Q0])===null||n===void 0?void 0:n.stringValue)===X0}function Do(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Do(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Do(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===jO}/**
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
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Do(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Do(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];jl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ht(Do(this.value))}}function Y0(t){const e=[];return qr(t.fields,(n,r)=>{const i=new We([n]);if(jl(r)){const s=Y0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
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
 */class Be{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Be(e,0,K.min(),K.min(),K.min(),ht.empty(),0)}static newFoundDocument(e,n,r,i){return new Be(e,1,n,K.min(),r,i,0)}static newNoDocument(e,n){return new Be(e,2,n,K.min(),K.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Be(e,3,n,K.min(),K.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pu{constructor(e,n){this.position=e,this.inclusive=n}}function Xy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ua{constructor(e,n="asc"){this.field=e,this.dir=n}}function $O(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class J0{}class be extends J0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HO(e,n,r):n==="array-contains"?new KO(e,r):n==="in"?new QO(e,r):n==="not-in"?new XO(e,r):n==="array-contains-any"?new YO(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WO(e,r):new GO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Is(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends J0{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new sn(e,n)}matches(e){return Z0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Z0(t){return t.op==="and"}function eI(t){return qO(t)&&Z0(t)}function qO(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function af(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(eI(t))return t.filters.map(e=>af(e)).join(",");{const e=t.filters.map(n=>af(n)).join(",");return`${t.op}(${e})`}}function tI(t,e){return t instanceof be?function(r,i){return i instanceof be&&r.op===i.op&&r.field.isEqual(i.field)&&yn(r.value,i.value)}(t,e):t instanceof sn?function(r,i){return i instanceof sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&tI(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function nI(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(nI).join(" ,")+"}"}(t):"Filter"}class HO extends be{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class WO extends be{constructor(e,n){super(e,"in",n),this.keys=rI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GO extends be{constructor(e,n){super(e,"not-in",n),this.keys=rI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class KO extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $p(n)&&la(n.arrayValue,this.value)}}class QO extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&la(this.value.arrayValue,n)}}class XO extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(la(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!la(this.value.arrayValue,n)}}class YO extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$p(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>la(this.value.arrayValue,r))}}/**
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
 */class JO{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function Jy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new JO(t,e,n,r,i,s,o)}function qp(t){const e=X(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>af(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Aa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.Pe=n}return e.Pe}function Hp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$O(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yy(t.startAt,e.startAt)&&Yy(t.endAt,e.endAt)}function lf(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ls{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ZO(t,e,n,r,i,s,o,l){return new Ls(t,e,n,r,i,s,o,l)}function mc(t){return new Ls(t)}function Zy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iI(t){return t.collectionGroup!==null}function xo(t){const e=X(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ue(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new ua(s,r))}),n.has(We.keyField().canonicalString())||e.Te.push(new ua(We.keyField(),r))}return e.Te}function mn(t){const e=X(t);return e.Ie||(e.Ie=eb(e,xo(t))),e.Ie}function eb(t,e){if(t.limitType==="F")return Jy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ua(i.field,s)});const n=t.endAt?new Pu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pu(t.startAt.position,t.startAt.inclusive):null;return Jy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function uf(t,e){const n=t.filters.concat([e]);return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cf(t,e,n){return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gc(t,e){return Hp(mn(t),mn(e))&&t.limitType===e.limitType}function sI(t){return`${qp(mn(t))}|lt:${t.limitType}`}function Fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>nI(i)).join(", ")}]`),Aa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ss(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ss(i)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function _c(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Xy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,xo(r),i)||r.endAt&&!function(o,l,u){const c=Xy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,xo(r),i))}(t,e)}function tb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oI(t){return(e,n)=>{let r=!1;for(const i of xo(t)){const s=nb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nb(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Is(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
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
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return $0(this.inner)}size(){return this.innerSize}}/**
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
 */const rb=new Ae(W.comparator);function qn(){return rb}const aI=new Ae(W.comparator);function go(...t){let e=aI;for(const n of t)e=e.insert(n.key,n);return e}function lI(t){let e=aI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function si(){return Oo()}function uI(){return Oo()}function Oo(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const ib=new Ae(W.comparator),sb=new Ue(W.comparator);function ne(...t){let e=sb;for(const n of t)e=e.add(n);return e}const ob=new Ue(Z);function ab(){return ob}/**
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
 */function Wp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Au(e)?"-0":e}}function cI(t){return{integerValue:""+t}}function lb(t,e){return VO(e)?cI(e):Wp(t,e)}/**
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
 */class yc{constructor(){this._=void 0}}function ub(t,e,n){return t instanceof ca?function(i,s){const o={fields:{[W0]:{stringValue:H0},[K0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zp(s)&&(s=pc(s)),s&&(o.fields[G0]=s),{mapValue:o}}(n,e):t instanceof ha?dI(t,e):t instanceof da?fI(t,e):function(i,s){const o=hI(i,s),l=ev(o)+ev(i.Ee);return of(o)&&of(i.Ee)?cI(l):Wp(i.serializer,l)}(t,e)}function cb(t,e,n){return t instanceof ha?dI(t,e):t instanceof da?fI(t,e):n}function hI(t,e){return t instanceof ku?function(r){return of(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ca extends yc{}class ha extends yc{constructor(e){super(),this.elements=e}}function dI(t,e){const n=pI(e);for(const r of t.elements)n.some(i=>yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class da extends yc{constructor(e){super(),this.elements=e}}function fI(t,e){let n=pI(e);for(const r of t.elements)n=n.filter(i=>!yn(i,r));return{arrayValue:{values:n}}}class ku extends yc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function ev(t){return Ne(t.integerValue||t.doubleValue)}function pI(t){return $p(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class hb{constructor(e,n){this.field=e,this.transform=n}}function db(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ha&&i instanceof ha||r instanceof da&&i instanceof da?Ts(r.elements,i.elements,yn):r instanceof ku&&i instanceof ku?yn(r.Ee,i.Ee):r instanceof ca&&i instanceof ca}(t.transform,e.transform)}class fb{constructor(e,n){this.version=e,this.transformResults=n}}class it{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vc{}function mI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wc(t.key,it.none()):new Ra(t.key,t.data,it.none());{const n=t.data,r=ht.empty();let i=new Ue(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hr(t.key,r,new kt(i.toArray()),it.none())}}function pb(t,e,n){t instanceof Ra?function(i,s,o){const l=i.value.clone(),u=nv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(i,s,o){if(!Bl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=nv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(gI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof Ra?function(s,o,l,u){if(!Bl(s.precondition,o))return l;const c=s.value.clone(),d=rv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(s,o,l,u){if(!Bl(s.precondition,o))return l;const c=rv(s.fieldTransforms,u,o),d=o.data;return d.setAll(gI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Bl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=hI(r.transform,i||null);s!=null&&(n===null&&(n=ht.empty()),n.set(r.field,s))}return n||null}function tv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ts(r,i,(s,o)=>db(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends vc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends vc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nv(t,e,n){const r=new Map;ie(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,cb(o,l,n[i]))}return r}function rv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ub(s,o,e))}return r}class wc extends vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _I extends vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=mI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,r)=>tv(n,r))&&Ts(this.baseMutations,e.baseMutations,(n,r)=>tv(n,r))}}class Gp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return ib}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gp(e,n,r,i)}}/**
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
 */class _b{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var xe,re;function yI(t){switch(t){case b.OK:return G(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function vI(t){if(t===void 0)return $n("GRPC error has no .code"),b.UNKNOWN;switch(t){case xe.OK:return b.OK;case xe.CANCELLED:return b.CANCELLED;case xe.UNKNOWN:return b.UNKNOWN;case xe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case xe.INTERNAL:return b.INTERNAL;case xe.UNAVAILABLE:return b.UNAVAILABLE;case xe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case xe.NOT_FOUND:return b.NOT_FOUND;case xe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case xe.ABORTED:return b.ABORTED;case xe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case xe.DATA_LOSS:return b.DATA_LOSS;default:return G(39323,{code:t})}}(re=xe||(xe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const vb=new Sr([4294967295,4294967295],0);function iv(t){const e=F0().encode(t),n=new D0;return n.update(e),new Uint8Array(n.digest())}function sv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Sr([n,r],0),new Sr([i,s],0)]}class Kp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _o(`Invalid padding: ${n}`);if(r<0)throw new _o(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _o(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _o(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Sr.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(Sr.fromNumber(r)));return i.compare(vb)===1&&(i=new Sr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=iv(e),[r,i]=sv(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Kp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=iv(e),[r,i]=sv(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _o extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ec{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ca.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ec(K.min(),i,new Ae(Z),qn(),ne())}}class Ca{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ca(r,n,ne(),ne(),ne())}}/**
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
 */class zl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class wI{constructor(e,n){this.targetId=e,this.De=n}}class EI{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ov{constructor(){this.ve=0,this.Ce=av(),this.Fe=Qe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ne(),n=ne(),r=ne();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new Ca(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=av()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class wb{constructor(e){this.We=e,this.Ge=new Map,this.ze=qn(),this.je=yl(),this.Je=yl(),this.He=new Ae(Z)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(lf(s))if(r===0){const o=new W(s.path);this.Xe(n,o,Be.newNoDocument(o,K.min()))}else ie(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,c)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Or(r).toUint8Array()}catch(u){if(u instanceof q0)return Nr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Kp(o,i,s)}catch(u){return Nr(u instanceof _o?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&lf(l.target)){const u=new W(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,Be.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=ne();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new Ec(e,n,this.He,this.ze,r);return this.ze=qn(),this.je=yl(),this.Je=yl(),this.He=new Ae(Z),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new ov,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ue(Z),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ue(Z),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ov),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function yl(){return new Ae(W.comparator)}function av(){return new Ae(W.comparator)}const Eb={asc:"ASCENDING",desc:"DESCENDING"},Tb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ib={and:"AND",or:"OR"};class Sb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hf(t,e){return t.useProto3Json||Aa(e)?e:{value:e}}function Nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ab(t,e){return Nu(t,e.toTimestamp())}function Ot(t){return ie(!!t,49232),K.fromTimestamp(function(n){const r=xr(n);return new me(r.seconds,r.nanos)}(t))}function Qp(t,e){return df(t,e).canonicalString()}function df(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function II(t){const e=ue.fromString(t);return ie(kI(e),10190,{key:e.toString()}),e}function Du(t,e){return Qp(t.databaseId,e.path)}function Vo(t,e){const n=II(e);if(n.get(1)!==t.databaseId.projectId)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(AI(n))}function SI(t,e){return Qp(t.databaseId,e)}function Rb(t){const e=II(t);return e.length===4?ue.emptyPath():AI(e)}function ff(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AI(t){return ie(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function lv(t,e,n){return{name:Du(t,e),fields:n.value.mapValue.fields}}function Cb(t,e){return"found"in e?function(r,i){ie(!!i.found,43571),i.found.name,i.found.updateTime;const s=Vo(r,i.found.name),o=Ot(i.found.updateTime),l=i.found.createTime?Ot(i.found.createTime):K.min(),u=new ht({mapValue:{fields:i.found.fields}});return Be.newFoundDocument(s,o,l,u)}(t,e):"missing"in e?function(r,i){ie(!!i.missing,3894),ie(!!i.readTime,22933);const s=Vo(r,i.missing),o=Ot(i.readTime);return Be.newNoDocument(s,o)}(t,e):G(7234,{result:e})}function Pb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ie(d===void 0||typeof d=="string",58123),Qe.fromBase64String(d||"")):(ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Qe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?b.UNKNOWN:vI(c.code);return new z(d,c.message||"")}(o);n=new EI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vo(t,r.document.name),s=Ot(r.document.updateTime),o=r.document.createTime?Ot(r.document.createTime):K.min(),l=new ht({mapValue:{fields:r.document.fields}}),u=Be.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new zl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vo(t,r.document),s=r.readTime?Ot(r.readTime):K.min(),o=Be.newNoDocument(i,s),l=r.removedTargetIds||[];n=new zl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vo(t,r.document),s=r.removedTargetIds||[];n=new zl([],s,i,null)}else{if(!("filter"in e))return G(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new yb(i,s),l=r.targetId;n=new wI(l,o)}}return n}function RI(t,e){let n;if(e instanceof Ra)n={update:lv(t,e.key,e.value)};else if(e instanceof wc)n={delete:Du(t,e.key)};else if(e instanceof Hr)n={update:lv(t,e.key,e.data),updateMask:Mb(e.fieldMask)};else{if(!(e instanceof _I))return G(16599,{Rt:e.type});n={verify:Du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ha)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof da)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ku)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ab(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function kb(t,e){return t&&t.length>0?(ie(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Ot(i.updateTime):Ot(s);return o.isEqual(K.min())&&(o=Ot(s)),new fb(o,i.transformResults||[])}(n,e))):[]}function Nb(t,e){return{documents:[SI(t,e.path)]}}function Db(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=SI(t,i);const s=function(c){if(c.length!==0)return PI(sn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:ji(m.field),direction:bb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Vt:n,parent:i}}function xb(t){let e=Rb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=CI(p);return m instanceof sn&&eI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new ua(Bi(R.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Aa(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,v=p.values||[];return new Pu(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,v=p.values||[];return new Pu(v,m)}(n.endAt)),ZO(e,i,o,s,l,"F",u,c)}function Ob(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function CI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bi(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Bi(n.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bi(n.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bi(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return be.create(Bi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>CI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function bb(t){return Eb[t]}function Vb(t){return Tb[t]}function Lb(t){return Ib[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Bi(t){return We.fromServerFormat(t.fieldPath)}function PI(t){return t instanceof be?function(n){if(n.op==="=="){if(Qy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NAN"}};if(Ky(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NAN"}};if(Ky(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(n.field),op:Vb(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(i=>PI(i));return r.length===1?r[0]:{compositeFilter:{op:Lb(n.op),filters:r}}}(t):G(54877,{filter:t})}function Mb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class dr{constructor(e,n,r,i,s=K.min(),o=K.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ub{constructor(e){this.gt=e}}function Fb(t){const e=xb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cf(e,e.limit,"L"):e}/**
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
 */class jb{constructor(){this.Dn=new Bb}addToCollectionParentIndex(e,n){return this.Dn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Dr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class Bb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(ue.comparator)).toArray()}}/**
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
 */const uv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},NI=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(NI,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
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
 */class As{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new As(0)}static ur(){return new As(-1)}}/**
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
 */const cv="LruGarbageCollector",zb=1048576;function hv([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class $b{constructor(e){this.Tr=e,this.buffer=new Ue(hv),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();hv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){q(cv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vs(n)?q(cv,"Ignoring IndexedDB error during garbage collection: ",n):await bs(n)}await this.Rr(3e5)})}}class Hb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(fc.ue);const r=new $b(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(uv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uv):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ui()<=te.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function Wb(t,e){return new Hb(t,e)}/**
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
 */class Gb{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Kb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Qb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bo(r.mutation,i,kt.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=go();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=qn();const o=Oo(),l=function(){return Oo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Hr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),bo(d.mutation,c,d.mutation.getFieldMask(),me.now())):o.set(c.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new Kb(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Oo();let i=new Ae((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||kt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=uI();d.forEach(m=>{if(!s.has(m)){const v=mI(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(si());let l=sa,u=s;return o.next(c=>V.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:lI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=go();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=go();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const c=function(p,m){return new Ls(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Be.newInvalidDocument(d)))});let l=go();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&bo(d.mutation,c,kt.empty(),me.now()),_c(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class Xb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return V.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ot(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:Fb(i.bundledQuery),readTime:Ot(i.readTime)}}(n)),V.resolve()}}/**
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
 */class Yb{constructor(){this.overlays=new Ae(W.comparator),this.kr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=si();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=si(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=si(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=si(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return V.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _b(n,r));let s=this.kr.get(n);s===void 0&&(s=ne(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
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
 */class Jb{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Xp{constructor(){this.qr=new Ue(Fe.Qr),this.$r=new Ue(Fe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Fe(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new W(new ue([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new W(new ue([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=ne();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return W.comparator(e.key,n.key)||Z(e.Hr,n.Hr)}static Ur(e,n){return Z(e.Hr,n.Hr)||W.comparator(e.key,n.key)}}/**
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
 */class Zb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ue(Fe.Qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Bp:this.er-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(Z);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),V.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new W(s),0);let l=new Ue(Z);return this.Yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Hr)),!0)},o),V.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return V.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Yr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class e2{constructor(e){this.ni=e,this.docs=function(){return new Ae(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Be.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||DO(NO(d),r)<=0||(i.has(d.key)||_c(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ri(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new t2(this)}getSize(e){return V.resolve(this.size)}}class t2 extends Gb{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class n2{constructor(e){this.persistence=e,this.ii=new Pi(n=>qp(n),Hp),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.si=0,this.oi=new Xp,this.targetCount=0,this._i=As.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),V.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new As(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.hr(n),V.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.oi.containsKey(n))}}/**
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
 */class DI{constructor(e,n){this.ai={},this.overlays={},this.ui=new fc(0),this.ci=!1,this.ci=!0,this.li=new Jb,this.referenceDelegate=e(this),this.hi=new n2(this),this.indexManager=new jb,this.remoteDocumentCache=function(i){return new e2(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Ub(n),this.Ti=new Xb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Yb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new Zb(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new r2(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return V.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class r2 extends OO{constructor(e){super(),this.currentSequenceNumber=e}}class Yp{constructor(e){this.persistence=e,this.Ai=new Xp,this.Ri=null}static Vi(e){return new Yp(e)}get mi(){if(this.Ri)return this.Ri;throw G(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,r=>{const i=W.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,K.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return V.or([()=>V.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class xu{constructor(e,n){this.persistence=e,this.gi=new Pi(r=>LO(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Wb(this,n)}static Vi(e,n){return new xu(e,n)}Ii(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return V.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,K.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fl(e.data.value)),n}Sr(e,n,r){return V.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Jp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jp(e,n.fromCache,r,i)}}/**
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
 */class i2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class s2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return gP()?8:bO(ot())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new i2;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(Ui()<=te.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Ui()<=te.DEBUG&&q("QueryEngine","Query:",Fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Ui()<=te.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):V.resolve())}ps(e,n){if(Zy(n))return V.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cf(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ds(n,c,o,u.readTime)?this.ps(e,cf(n,null,"F")):this.vs(e,c,n,u)}))})))}ys(e,n,r,i){return Zy(n)||i.isEqual(K.min())?V.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?V.resolve(null):(Ui()<=te.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fi(n)),this.vs(e,o,n,kO(i,sa)).next(l=>l))})}bs(e,n){let r=new Ue(oI(e));return n.forEach((i,s)=>{_c(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return Ui()<=te.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Fi(n)),this.gs.getDocumentsMatchingQuery(e,n,Dr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Zp="LocalStore",o2=3e8;class a2{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new Ae(Z),this.Ms=new Pi(s=>qp(s),Hp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qb(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function l2(t,e,n,r){return new a2(t,e,n,r)}async function xI(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Bs:c,removedBatchIds:o,addedBatchIds:l}))})})}function u2(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let v=V.resolve();return m.forEach(R=>{v=v.next(()=>d.getEntry(u,R)).next(P=>{const k=c.docVersions.get(R);ie(k!==null,48541),P.version.compareTo(k)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function OI(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function c2(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.hi.addMatchingKeys(s,d.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Qe.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(P,k,I){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=o2?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,v,d)&&l.push(n.hi.updateTargetData(s,v))});let u=qn(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(h2(s,o,e.documentUpdates).next(d=>{u=d.Ls,c=d.ks})),!r.isEqual(K.min())){const d=n.hi.getLastRemoteSnapshotVersion(s).next(p=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Fs=i,s))}function h2(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(Zp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function d2(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Bp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function f2(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function pf(t,e,n){const r=X(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vs(o))throw o;q(Zp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function dv(t,e,n){const r=X(t);let i=K.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),m=p.Ms.get(d);return m!==void 0?V.resolve(p.Fs.get(m)):p.hi.getTargetData(c,d)}(r,o,mn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:K.min(),n?s:ne())).next(l=>(p2(r,tb(e),l),{documents:l,qs:s})))}function p2(t,e,n){let r=t.xs.get(e)||K.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class fv{constructor(){this.activeTargetIds=ab()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m2{constructor(){this.Fo=new fv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new fv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class g2{xo(e){}shutdown(){}}/**
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
 */const pv="ConnectivityMonitor";class mv{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){q(pv,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){q(pv,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vl=null;function mf(){return vl===null?vl=function(){return 268435456+Math.round(2147483648*Math.random())}():vl++,"0x"+vl.toString(16)}/**
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
 */const Bh="RestConnection",_2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class y2{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Ru?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=mf(),l=this.Go(e,n.toUriEncodedString());q(Bh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:c}=new URL(l),d=Br(c);return this.jo(e,l,u,r,d).then(p=>(q(Bh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Nr(Bh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=_2[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class v2{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const tt="WebChannelConnection";class w2 extends y2{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=mf();return new Promise((l,u)=>{const c=new x0;c.setWithCredentials(!0),c.listenOnce(O0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ul.NO_ERROR:const p=c.getResponseJson();q(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ul.TIMEOUT:q(tt,`RPC '${e}' ${o} timed out`),u(new z(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ul.HTTP_ERROR:const m=c.getStatus();if(q(tt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v==null?void 0:v.error;if(R&&R.status&&R.message){const P=function(I){const y=I.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(y)>=0?y:b.UNKNOWN}(R.status);u(new z(P,R.message))}else u(new z(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new z(b.UNAVAILABLE,"Connection failed."));break;default:G(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{q(tt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);q(tt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}P_(e,n,r){const i=mf(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=L0(),l=V0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(tt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.T_(p);let m=!1,v=!1;const R=new v2({Ho:k=>{v?q(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(m||(q(tt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(tt,`RPC '${e}' stream ${i} sending:`,k),p.send(k))},Yo:()=>p.close()}),P=(k,I,y)=>{k.listen(I,E=>{try{y(E)}catch(x){setTimeout(()=>{throw x},0)}})};return P(p,mo.EventType.OPEN,()=>{v||(q(tt,`RPC '${e}' stream ${i} transport opened.`),R.s_())}),P(p,mo.EventType.CLOSE,()=>{v||(v=!0,q(tt,`RPC '${e}' stream ${i} transport closed`),R.__(),this.I_(p))}),P(p,mo.EventType.ERROR,k=>{v||(v=!0,Nr(tt,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),R.__(new z(b.UNAVAILABLE,"The operation could not be completed")))}),P(p,mo.EventType.MESSAGE,k=>{var I;if(!v){const y=k.data[0];ie(!!y,16349);const E=y,x=(E==null?void 0:E.error)||((I=E[0])===null||I===void 0?void 0:I.error);if(x){q(tt,`RPC '${e}' stream ${i} received error:`,x);const M=x.status;let F=function(w){const S=xe[w];if(S!==void 0)return vI(S)}(M),T=x.message;F===void 0&&(F=b.INTERNAL,T="Unknown error status: "+M+" with message "+x.message),v=!0,R.__(new z(F,T)),p.close()}else q(tt,`RPC '${e}' stream ${i} received:`,y),R.a_(y)}}),P(l,b0.STAT_EVENT,k=>{k.stat===nf.PROXY?q(tt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===nf.NOPROXY&&q(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.o_()},0),R}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function zh(){return typeof document<"u"?document:null}/**
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
 */function Tc(t){return new Sb(t,!0)}/**
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
 */class em{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const gv="PersistentStream";class bI{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new em(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new z(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return q(gv,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(q(gv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E2 extends bI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=Pb(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?Ot(o.readTime):K.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=ff(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=lf(u)?{documents:Nb(s,u)}:{query:Db(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=TI(s,o.resumeToken);const c=hf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(K.min())>0){l.readTime=Nu(s,o.snapshotVersion.toTimestamp());const c=hf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Ob(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=ff(this.serializer),n.removeTarget=e,this.k_(n)}}class T2 extends bI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=kb(e.writeResults,e.commitTime),r=Ot(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=ff(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RI(this.serializer,r))};this.k_(n)}}/**
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
 */class I2{}class S2 extends I2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,df(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(b.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,df(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(b.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class A2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?($n(n),this._a=!1):q("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const wi="RemoteStore";class R2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{ki(this)&&(q(wi,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.Ia.add(4),await Pa(c),c.Aa.set("Unknown"),c.Ia.delete(4),await Ic(c)}(this))})}),this.Aa=new A2(r,i)}}async function Ic(t){if(ki(t))for(const e of t.da)await e(!0)}async function Pa(t){for(const e of t.da)await e(!1)}function VI(t,e){const n=X(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),im(n)?rm(n):Ms(n).x_()&&nm(n,e))}function tm(t,e){const n=X(t),r=Ms(n);n.Ta.delete(e),r.x_()&&LI(n,e),n.Ta.size===0&&(r.x_()?r.B_():ki(n)&&n.Aa.set("Unknown"))}function nm(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).H_(e)}function LI(t,e){t.Ra.$e(e),Ms(t).Y_(e)}function rm(t){t.Ra=new wb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.Aa.aa()}function im(t){return ki(t)&&!Ms(t).M_()&&t.Ta.size>0}function ki(t){return X(t).Ia.size===0}function MI(t){t.Ra=void 0}async function C2(t){t.Aa.set("Online")}async function P2(t){t.Ta.forEach((e,n)=>{nm(t,e)})}async function k2(t,e){MI(t),im(t)?(t.Aa.la(e),rm(t)):t.Aa.set("Unknown")}async function N2(t,e,n){if(t.Aa.set("Online"),e instanceof EI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){q(wi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ou(t,r)}else if(e instanceof zl?t.Ra.Ye(e):e instanceof wI?t.Ra.it(e):t.Ra.et(e),!n.isEqual(K.min()))try{const r=await OI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ta.get(c);d&&s.Ta.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ta.get(u);if(!d)return;s.Ta.set(u,d.withResumeToken(Qe.EMPTY_BYTE_STRING,d.snapshotVersion)),LI(s,u);const p=new dr(d.target,u,c,d.sequenceNumber);nm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(wi,"Failed to raise snapshot:",r),await Ou(t,r)}}async function Ou(t,e,n){if(!Vs(e))throw e;t.Ia.add(1),await Pa(t),t.Aa.set("Offline"),n||(n=()=>OI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(wi,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Ic(t)})}function UI(t,e){return e().catch(n=>Ou(t,n,e))}async function Sc(t){const e=X(t),n=Vr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Bp;for(;D2(e);)try{const i=await d2(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,x2(e,i)}catch(i){await Ou(e,i)}FI(e)&&jI(e)}function D2(t){return ki(t)&&t.Pa.length<10}function x2(t,e){t.Pa.push(e);const n=Vr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function FI(t){return ki(t)&&!Vr(t).M_()&&t.Pa.length>0}function jI(t){Vr(t).start()}async function O2(t){Vr(t).na()}async function b2(t){const e=Vr(t);for(const n of t.Pa)e.X_(n.mutations)}async function V2(t,e,n){const r=t.Pa.shift(),i=Gp.from(r,e,n);await UI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Sc(t)}async function L2(t,e){e&&Vr(t).Z_&&await async function(r,i){if(function(o){return yI(o)&&o!==b.ABORTED}(i.code)){const s=r.Pa.shift();Vr(r).N_(),await UI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sc(r)}}(t,e),FI(t)&&jI(t)}async function _v(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q(wi,"RemoteStore received new credentials");const r=ki(n);n.Ia.add(3),await Pa(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ic(n)}async function M2(t,e){const n=X(t);e?(n.Ia.delete(2),await Ic(n)):e||(n.Ia.add(2),await Pa(n),n.Aa.set("Unknown"))}function Ms(t){return t.Va||(t.Va=function(n,r,i){const s=X(n);return s.ia(),new E2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:C2.bind(null,t),e_:P2.bind(null,t),n_:k2.bind(null,t),J_:N2.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),im(t)?rm(t):t.Aa.set("Unknown")):(await t.Va.stop(),MI(t))})),t.Va}function Vr(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.ia(),new T2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:O2.bind(null,t),n_:L2.bind(null,t),ea:b2.bind(null,t),ta:V2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Sc(t)):(await t.ma.stop(),t.Pa.length>0&&(q(wi,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class sm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new sm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function om(t,e){if($n("AsyncQueue",`${e}: ${t}`),Vs(t))return new z(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class hs{static emptySet(e){return new hs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=go(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class yv{constructor(){this.fa=new Ae(W.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):G(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Rs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Rs(e,n,hs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class U2{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class F2{constructor(){this.queries=vv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=vv(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new z(b.ABORTED,"Firestore shutting down"))}}function vv(){return new Pi(t=>sI(t),gc)}async function BI(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new U2,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=om(o,`Initialization of query '${Fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&am(n)}async function zI(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function j2(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&am(n)}function B2(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function am(t){t.Da.forEach(e=>{e.next()})}var gf,wv;(wv=gf||(gf={})).Fa="default",wv.Cache="cache";class $I{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==gf.Cache}}/**
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
 */class qI{constructor(e){this.key=e}}class HI{constructor(e){this.key=e}}class z2{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ne(),this.mutatedKeys=ne(),this.Xa=oI(e),this.eu=new hs(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new yv,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),v=_c(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;m&&v?m.data.isEqual(v.data)?R!==P&&(r.track({type:3,doc:v}),k=!0):this.iu(m,v)||(r.track({type:2,doc:v}),k=!0,(u&&this.Xa(v,u)>0||c&&this.Xa(v,c)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),k=!0):m&&!v&&(r.track({type:1,doc:m}),k=!0,(u||c)&&(l=!0)),k&&(v?(o=o.add(v),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((d,p)=>function(v,R){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{At:k})}};return P(v)-P(R)}(d.type,p.type)||this.Xa(d.doc,p.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new Rs(this.query,e.eu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new yv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ne(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new HI(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new qI(r))}),n}uu(e){this.Ha=e.qs,this.Za=ne();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Rs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const lm="SyncEngine";class $2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class q2{constructor(e){this.key=e,this.lu=!1}}class H2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Pi(l=>sI(l),gc),this.Tu=new Map,this.Iu=new Set,this.du=new Ae(W.comparator),this.Eu=new Map,this.Au=new Xp,this.Ru={},this.Vu=new Map,this.mu=As.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function W2(t,e,n=!0){const r=YI(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await WI(r,e,n,!0),i}async function G2(t,e){const n=YI(t);await WI(n,e,!0,!1)}async function WI(t,e,n,r){const i=await f2(t.localStore,mn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await K2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&VI(t.remoteStore,i),l}async function K2(t,e,n,r,i){t.gu=(p,m,v)=>async function(P,k,I,y){let E=k.view.nu(I);E.Ds&&(E=await dv(P.localStore,k.query,!1).then(({documents:T})=>k.view.nu(T,E)));const x=y&&y.targetChanges.get(k.targetId),M=y&&y.targetMismatches.get(k.targetId)!=null,F=k.view.applyChanges(E,P.isPrimaryClient,x,M);return Tv(P,k.targetId,F._u),F.snapshot}(t,p,m,v);const s=await dv(t.localStore,e,!0),o=new z2(e,s.qs),l=o.nu(s.documents),u=Ca.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Tv(t,n,c._u);const d=new $2(e,n,o);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),c.snapshot}async function Q2(t,e,n){const r=X(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!gc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&tm(r.remoteStore,i.targetId),_f(r,i.targetId)}).catch(bs)):(_f(r,i.targetId),await pf(r.localStore,i.targetId,!0))}async function X2(t,e){const n=X(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),tm(n.remoteStore,r.targetId))}async function Y2(t,e,n){const r=iV(t);try{const i=await function(o,l){const u=X(o),c=me.now(),d=l.reduce((v,R)=>v.add(R.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let R=qn(),P=ne();return u.Os.getEntries(v,d).next(k=>{R=k,R.forEach((I,y)=>{y.isValidDocument()||(P=P.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,R)).next(k=>{p=k;const I=[];for(const y of l){const E=mb(y,p.get(y.key).overlayedDocument);E!=null&&I.push(new Hr(y.key,E,Y0(E.value.mapValue),it.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,I,l)}).next(k=>{m=k;const I=k.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(v,k.batchId,I)})}).then(()=>({batchId:m.batchId,changes:lI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new Ae(Z)),c=c.insert(l,u),o.Ru[o.currentUser.toKey()]=c}(r,i.batchId,n),await ka(r,i.changes),await Sc(r.remoteStore)}catch(i){const s=om(i,"Failed to persist write");n.reject(s)}}async function GI(t,e){const n=X(t);try{const r=await c2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?ie(o.lu,14607):i.removedDocuments.size>0&&(ie(o.lu,42227),o.lu=!1))}),await ka(n,r,e)}catch(r){await bs(r)}}function Ev(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.wa)m.va(l)&&(c=!0)}),c&&am(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function J2(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new Ae(W.comparator);o=o.insert(s,Be.newNoDocument(s,K.min()));const l=ne().add(s),u=new Ec(K.min(),new Map,new Ae(Z),o,l);await GI(r,u),r.du=r.du.remove(s),r.Eu.delete(e),um(r)}else await pf(r.localStore,e,!1).then(()=>_f(r,e,n)).catch(bs)}async function Z2(t,e){const n=X(t),r=e.batch.batchId;try{const i=await u2(n.localStore,e);QI(n,r,null),KI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,i)}catch(i){await bs(i)}}async function eV(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ie(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);QI(r,e,n),KI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,i)}catch(i){await bs(i)}}function KI(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function QI(t,e,n){const r=X(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function _f(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||XI(t,r)})}function XI(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(tm(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),um(t))}function Tv(t,e,n){for(const r of n)r instanceof qI?(t.Au.addReference(r.key,e),tV(t,r)):r instanceof HI?(q(lm,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||XI(t,r.key)):G(19791,{yu:r})}function tV(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(q(lm,"New document in limbo: "+n),t.Iu.add(r),um(t))}function um(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new W(ue.fromString(e)),r=t.mu.next();t.Eu.set(r,new q2(n)),t.du=t.du.insert(n,r),VI(t.remoteStore,new dr(mn(mc(n.path)),r,"TargetPurposeLimboResolution",fc.ue))}}async function ka(t,e,n){const r=X(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Jp.Es(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,m=>V.forEach(m.Is,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>V.forEach(m.ds,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Vs(p))throw p;q(Zp,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const v=d.Fs.get(m),R=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(R);d.Fs=d.Fs.insert(m,P)}}}(r.localStore,s))}async function nV(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q(lm,"User change. New user:",e.toKey());const r=await xI(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new z(b.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.Bs)}}function rV(t,e){const n=X(t),r=n.Eu.get(e);if(r&&r.lu)return ne().add(r.key);{let i=ne();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function YI(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=GI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J2.bind(null,e),e.hu.J_=j2.bind(null,e.eventManager),e.hu.pu=B2.bind(null,e.eventManager),e}function iV(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Z2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eV.bind(null,e),e}class bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return l2(this.persistence,new s2,e.initialUser,this.serializer)}Du(e){return new DI(Yp.Vi,this.serializer)}bu(e){return new m2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bu.provider={build:()=>new bu};class sV extends bu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ie(this.persistence.referenceDelegate instanceof xu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qb(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new DI(r=>xu.Vi(r,n),this.serializer)}}class yf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ev(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nV.bind(null,this.syncEngine),await M2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F2}()}createDatastore(e){const n=Tc(e.databaseInfo.databaseId),r=function(s){return new w2(s)}(e.databaseInfo);return function(s,o,l,u){return new S2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new R2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ev(this.syncEngine,n,0),function(){return mv.C()?new mv:new g2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new H2(i,s,o,l,u,c);return d&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);q(wi,"RemoteStore shutting down."),s.Ia.add(5),await Pa(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}yf.provider={build:()=>new yf};/**
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
 */class JI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class oV{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(b.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=X(i),l={documents:s.map(p=>Du(o.serializer,p))},u=await o.Jo("BatchGetDocuments",o.serializer.databaseId,ue.emptyPath(),l,s.length),c=new Map;u.forEach(p=>{const m=Cb(o.serializer,p);c.set(m.key.toString(),m)});const d=[];return s.forEach(p=>{const m=c.get(p.toString());ie(!!m,55234,{key:p}),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new wc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=W.fromPath(r);this.mutations.push(new _I(i,this.precondition(i)))}),await async function(r,i){const s=X(r),o={writes:i.map(l=>RI(s.serializer,l))};await s.Wo("Commit",s.serializer.databaseId,ue.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw G(50498,{Wu:e.constructor.name});n=K.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(b.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(K.min())?it.exists(!1):it.updateTime(n):it.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(K.min()))throw new z(b.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return it.updateTime(n)}return it.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class aV{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Gu=r.maxAttempts,this.F_=new em(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_(async()=>{const e=new oV(this.datastore),n=this.Ju(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Hu(i)}))}).catch(r=>{this.Hu(r)})})}Ju(e){try{const n=this.updateFunction(e);return!Aa(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ju(),Promise.resolve()))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!yI(n)}return!1}}/**
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
 */const Lr="FirestoreClient";class lV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=jp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q(Lr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Lr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=om(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $h(t,e){t.asyncQueue.verifyOperationInProgress(),q(Lr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{Nr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{q("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Nr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function Iv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uV(t);q(Lr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_v(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>_v(e.remoteStore,i)),t._onlineComponents=e}async function uV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(Lr,"Using user provided OfflineComponentProvider");try{await $h(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Nr("Error using user provided cache. Falling back to memory cache: "+n),await $h(t,new bu)}}else q(Lr,"Using default OfflineComponentProvider"),await $h(t,new sV(void 0));return t._offlineComponents}async function cm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(Lr,"Using user provided OnlineComponentProvider"),await Iv(t,t._uninitializedComponentsProvider._online)):(q(Lr,"Using default OnlineComponentProvider"),await Iv(t,new yf))),t._onlineComponents}function cV(t){return cm(t).then(e=>e.syncEngine)}function hV(t){return cm(t).then(e=>e.datastore)}async function vf(t){const e=await cm(t),n=e.eventManager;return n.onListen=W2.bind(null,e.syncEngine),n.onUnlisten=Q2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=G2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=X2.bind(null,e.syncEngine),n}function dV(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new JI({next:m=>{d.Ou(),o.enqueueAndForget(()=>zI(s,p));const v=m.docs.has(l);!v&&m.fromCache?c.reject(new z(b.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&u&&u.source==="server"?c.reject(new z(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new $I(mc(l.path),d,{includeMetadataChanges:!0,ka:!0});return BI(s,p)}(await vf(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function ZI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Sv=new Map;/**
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
 */const eS="firestore.googleapis.com",Av=!0;class Rv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=eS,this.ssl=Av}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Av;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=NI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zb)throw new z(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vO;switch(r.type){case"firstParty":return new IO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sv.get(n);r&&(q("ComponentProvider","Removing Datastore"),Sv.delete(n),r.terminate())}(this),Promise.resolve()}}function fV(t,e,n,r={}){var i;t=zt(t,Ac);const s=Br(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(yp(`https://${u}`),vp("Firestore",!0)),o.host!==eS&&o.host!==u&&Nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!kr(c,l)&&(t._setSettings(c),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=nt.MOCK_USER;else{d=wT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new nt(m)}t._authCredentials=new wO(new U0(d,p))}}/**
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
 */class Ni{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ni(this.firestore,e,this._query)}}class Ee{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ee(this.firestore,e,this._key)}toJSON(){return{type:Ee._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Sa(n,Ee._jsonSchema))return new Ee(e,r||null,new W(ue.fromString(n.referencePath)))}}Ee._jsonSchemaVersion="firestore/documentReference/1.0",Ee._jsonSchema={type:Ve("string",Ee._jsonSchemaVersion),referencePath:Ve("string")};class Ar extends Ni{constructor(e,n,r){super(e,n,mc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ee(this.firestore,null,new W(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function tS(t,e,...n){if(t=le(t),j0("collection","path",e),t instanceof Ac){const r=ue.fromString(e,...n);return Fy(r),new Ar(t,null,r)}{if(!(t instanceof Ee||t instanceof Ar))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Fy(r),new Ar(t.firestore,null,r)}}function nS(t,e,...n){if(t=le(t),arguments.length===1&&(e=jp.newId()),j0("doc","path",e),t instanceof Ac){const r=ue.fromString(e,...n);return Uy(r),new Ee(t,null,new W(r))}{if(!(t instanceof Ee||t instanceof Ar))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Uy(r),new Ee(t.firestore,t instanceof Ar?t.converter:null,new W(r))}}/**
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
 */const Cv="AsyncQueue";class Pv{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new em(this,"async_queue_retry"),this.oc=()=>{const r=zh();r&&q(Cv,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=zh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Vn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Vs(e))throw e;q(Cv,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,$n("INTERNAL UNHANDLED ERROR: ",kv(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=sm.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&G(47125,{hc:kv(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function kv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Nv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Mr extends Ac{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Pv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pv(e),this._firestoreClient=void 0,await e}}}function pV(t,e){const n=typeof t=="object"?t:va(),r=typeof t=="string"?t:Ru,i=zr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_T("firestore");s&&fV(i,...s)}return i}function Rc(t){if(t._terminated)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||mV(t),t._firestoreClient}function mV(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new FO(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ZI(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new lV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ct(Qe.fromBase64String(e))}catch(n){throw new z(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ct(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sa(e,Ct._jsonSchema))return Ct.fromBase64String(e.bytes)}}Ct._jsonSchemaVersion="firestore/bytes/1.0",Ct._jsonSchema={type:Ve("string",Ct._jsonSchemaVersion),bytes:Ve("string")};/**
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
 */class Na{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cc{constructor(e){this._methodName=e}}/**
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
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(Sa(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Ve("string",gn._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};/**
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
 */class _n{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:_n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sa(e,_n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new _n(e.vectorValues);throw new z(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_n._jsonSchemaVersion="firestore/vectorValue/1.0",_n._jsonSchema={type:Ve("string",_n._jsonSchemaVersion),vectorValues:Ve("object")};/**
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
 */const gV=/^__.*__$/;class _V{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}class rS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ec:t})}}class hm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new hm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Vu(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(iS(this.Ec)&&gV.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class yV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tc(e)}Dc(e,n,r,i=!1){return new hm({Ec:e,methodName:n,bc:r,path:We.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pc(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new yV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sS(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);fm("Data must be an object, but it was:",o,r);const l=lS(r,o);let u,c;if(s.merge)u=new kt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=wf(e,p,n);if(!o.contains(m))throw new z(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);cS(d,m)||d.push(m)}u=new kt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new _V(new ht(l),u,c)}class kc extends Cc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kc}}class dm extends Cc{_toFieldTransform(e){return new hb(e.path,new ca)}isEqual(e){return e instanceof dm}}function oS(t,e,n,r){const i=t.Dc(1,e,n);fm("Data must be an object, but it was:",i,r);const s=[],o=ht.empty();qr(r,(u,c)=>{const d=pm(e,u,n);c=le(c);const p=i.gc(d);if(c instanceof kc)s.push(d);else{const m=Da(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new kt(s);return new rS(o,l,i.fieldTransforms)}function aS(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[wf(e,r,n)],u=[i];if(s.length%2!=0)throw new z(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(wf(e,s[m])),u.push(s[m+1]);const c=[],d=ht.empty();for(let m=l.length-1;m>=0;--m)if(!cS(c,l[m])){const v=l[m];let R=u[m];R=le(R);const P=o.gc(v);if(R instanceof kc)c.push(v);else{const k=Da(R,P);k!=null&&(c.push(v),d.set(v,k))}}const p=new kt(c);return new rS(d,p,o.fieldTransforms)}function vV(t,e,n,r=!1){return Da(n,t.Dc(r?4:3,e))}function Da(t,e){if(uS(t=le(t)))return fm("Unsupported field value:",e,t),lS(t,e);if(t instanceof Cc)return function(r,i){if(!iS(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Da(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=me.fromDate(r);return{timestampValue:Nu(i.serializer,s)}}if(r instanceof me){const s=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nu(i.serializer,s)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ct)return{bytesValue:TI(i.serializer,r._byteString)};if(r instanceof Ee){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof _n)return function(o,l){return{mapValue:{fields:{[Q0]:{stringValue:X0},[Cu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.wc("VectorValues must only contain numeric values.");return Wp(l.serializer,c)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${dc(r)}`)}(t,e)}function lS(t,e){const n={};return $0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(t,(r,i)=>{const s=Da(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function uS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof gn||t instanceof Ct||t instanceof Ee||t instanceof Cc||t instanceof _n)}function fm(t,e,n){if(!uS(n)||!B0(n)){const r=dc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function wf(t,e,n){if((e=le(e))instanceof Na)return e._internalPath;if(typeof e=="string")return pm(t,e);throw Vu("Field path arguments must be of type string or ",t,!1,void 0,n)}const wV=new RegExp("[~\\*/\\[\\]]");function pm(t,e,n){if(e.search(wV)>=0)throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Na(...e.split("."))._internalPath}catch{throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(b.INVALID_ARGUMENT,l+t+u)}function cS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Lu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EV extends Lu{data(){return super.data()}}function Nc(t,e){return typeof e=="string"?pm(t,e):e instanceof Na?e._internalPath:e._delegate._internalPath}/**
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
 */function TV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mm{}class hS extends mm{}function dS(t,e,...n){let r=[];e instanceof mm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof gm).length,l=s.filter(u=>u instanceof Dc).length;if(o>1||o>0&&l>0)throw new z(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Dc extends hS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dc(e,n,r)}_apply(e){const n=this._parse(e);return pS(e._query,n),new Ni(e.firestore,e.converter,uf(e._query,n))}_parse(e){const n=Pc(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){xv(p,d);const R=[];for(const P of p)R.push(Dv(u,s,P));m={arrayValue:{values:R}}}else m=Dv(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||xv(p,d),m=vV(l,o,p,d==="in"||d==="not-in");return be.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function IV(t,e,n){const r=e,i=Nc("where",t);return Dc._create(i,r,n)}class gm extends mm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)pS(o,u),o=uf(o,u)}(e._query,n),new Ni(e.firestore,e.converter,uf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _m extends hS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _m(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ua(s,o)}(e._query,this._field,this._direction);return new Ni(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ls(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function fS(t,e="asc"){const n=e,r=Nc("orderBy",t);return _m._create(r,n)}function Dv(t,e,n){if(typeof(n=le(n))=="string"){if(n==="")throw new z(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iI(e)&&n.indexOf("/")!==-1)throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!W.isDocumentKey(r))throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gy(t,new W(r))}if(n instanceof Ee)return Gy(t,n._key);throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dc(n)}.`)}function xv(t,e){if(!Array.isArray(t)||t.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mS{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Cu].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new _n(s)}convertGeoPoint(e){return new gn(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oa(e));default:return null}}convertTimestamp(e){const n=xr(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);ie(kI(r),9688,{name:e});const i=new aa(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||$n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function gS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class SV extends mS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ct(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,n)}}class ts{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rr extends Lu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Rr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Rr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rr._jsonSchema={type:Ve("string",Rr._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class $l extends Rr{data(e={}){return super.data(e)}}class ds{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ts(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $l(this._firestore,this._userDataWriter,r.key,r,new ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new $l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ts(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new $l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ts(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:AV(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ds._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function AV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
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
 */function RV(t){t=zt(t,Ee);const e=zt(t.firestore,Mr);return dV(Rc(e),t._key).then(n=>yS(e,t,n))}ds._jsonSchemaVersion="firestore/querySnapshot/1.0",ds._jsonSchema={type:Ve("string",ds._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class ym extends mS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ct(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,n)}}function CV(t,e,n){t=zt(t,Ee);const r=zt(t.firestore,Mr),i=gS(t.converter,e,n);return vm(r,[sS(Pc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,it.none())])}function wM(t,e,n,...r){t=zt(t,Ee);const i=zt(t.firestore,Mr),s=Pc(i);let o;return o=typeof(e=le(e))=="string"||e instanceof Na?aS(s,"updateDoc",t._key,e,n,r):oS(s,"updateDoc",t._key,e),vm(i,[o.toMutation(t._key,it.exists(!0))])}function EM(t){return vm(zt(t.firestore,Mr),[new wc(t._key,it.none())])}function _S(t,...e){var n,r,i;t=le(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Nv(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Nv(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof Ee)c=zt(t.firestore,Mr),d=mc(t._key.path),u={next:p=>{e[o]&&e[o](yS(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=zt(t,Ni);c=zt(p.firestore,Mr),d=p._query;const m=new ym(c);u={next:v=>{e[o]&&e[o](new ds(c,m,p,v))},error:e[o+1],complete:e[o+2]},TV(t._query)}return function(m,v,R,P){const k=new JI(P),I=new $I(v,k,R);return m.asyncQueue.enqueueAndForget(async()=>BI(await vf(m),I)),()=>{k.Ou(),m.asyncQueue.enqueueAndForget(async()=>zI(await vf(m),I))}}(Rc(c),d,l,u)}function vm(t,e){return function(r,i){const s=new Vn;return r.asyncQueue.enqueueAndForget(async()=>Y2(await cV(r),i,s)),s.promise}(Rc(t),e)}function yS(t,e,n){const r=n.docs.get(e._key),i=new ym(t);return new Rr(t,i,e._key,r,new ts(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const PV={maxAttempts:5};function yo(t,e){if((t=le(t)).firestore!==e)throw new z(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class kV{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Pc(e)}get(e){const n=yo(e,this._firestore),r=new SV(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return G(24041);const s=i[0];if(s.isFoundDocument())return new Lu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Lu(this._firestore,r,n._key,null,n.converter);throw G(18433,{doc:s})})}set(e,n,r){const i=yo(e,this._firestore),s=gS(i.converter,n,r),o=sS(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=yo(e,this._firestore);let o;return o=typeof(n=le(n))=="string"||n instanceof Na?aS(this._dataReader,"Transaction.update",s._key,n,r,i):oS(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=yo(e,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class NV extends kV{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=yo(e,this._firestore),r=new ym(this._firestore);return super.get(e).then(i=>new Rr(this._firestore,r,n._key,i._document,new ts(!1,!1),n.converter))}}function TM(t,e,n){t=zt(t,Mr);const r=Object.assign(Object.assign({},PV),n);return function(s){if(s.maxAttempts<1)throw new z(b.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new Vn;return s.asyncQueue.enqueueAndForget(async()=>{const c=await hV(s);new aV(s.asyncQueue,c,l,o,u).zu()}),u.promise}(Rc(t),i=>e(new NV(t,i)),r)}function DV(){return new dm("serverTimestamp")}(function(e,n=!0){(function(i){Os=i})(Ri),nn(new Ht("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Mr(new EO(r.getProvider("auth-internal")),new SO(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new aa(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Tt(Oy,by,e),Tt(Oy,by,"esm2017")})();/**
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
 */const vS="firebasestorage.googleapis.com",wS="storageBucket",xV=2*60*1e3,OV=10*60*1e3,bV=1e3;/**
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
 */class Re extends Wt{constructor(e,n,r=0){super(qh(e),`Firebase Storage: ${n} (${qh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_e||(_e={}));function qh(t){return"storage/"+t}function wm(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(_e.UNKNOWN,t)}function VV(t){return new Re(_e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function LV(t){return new Re(_e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function MV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(_e.UNAUTHENTICATED,t)}function UV(){return new Re(_e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function FV(t){return new Re(_e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ES(){return new Re(_e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function TS(){return new Re(_e.CANCELED,"User canceled the upload/download.")}function jV(t){return new Re(_e.INVALID_URL,"Invalid URL '"+t+"'.")}function BV(t){return new Re(_e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zV(){return new Re(_e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wS+"' property when initializing the app?")}function IS(){return new Re(_e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $V(){return new Re(_e.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function qV(){return new Re(_e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HV(t){return new Re(_e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ef(t){return new Re(_e.INVALID_ARGUMENT,t)}function SS(){return new Re(_e.APP_DELETED,"The Firebase app was deleted.")}function WV(t){return new Re(_e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Lo(t,e){return new Re(_e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ao(t){throw new Re(_e.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nt.makeFromUrl(e,n)}catch{return new Nt(e,"")}if(r.path==="")return r;throw BV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},P=n===vS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",I=new RegExp(`^https?://${P}/${i}/${k}`,"i"),E=[{regex:l,indices:u,postModify:s},{regex:v,indices:R,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<E.length;x++){const M=E[x],F=M.regex.exec(e);if(F){const T=F[M.indices.bucket];let _=F[M.indices.path];_||(_=""),r=new Nt(T,_),M.postModify(r);break}}if(r==null)throw jV(e);return r}}class GV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function KV(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...k){c||(c=!0,e.apply(null,k))}function p(k){i=setTimeout(()=>{i=null,t(v,u())},k)}function m(){s&&clearTimeout(s)}function v(k,...I){if(c){m();return}if(k){m(),d.call(null,k,...I);return}if(u()||o){m(),d.call(null,k,...I);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,p(E)}let R=!1;function P(k){R||(R=!0,m(),!c&&(i!==null?(k||(l=2),clearTimeout(i),p(0)):k||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function QV(t){t(!1)}/**
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
 */function XV(t){return t!==void 0}function YV(t){return typeof t=="function"}function JV(t){return typeof t=="object"&&!Array.isArray(t)}function xc(t){return typeof t=="string"||t instanceof String}function Ov(t){return Em()&&t instanceof Blob}function Em(){return typeof Blob<"u"}function bv(t,e,n,r){if(r<e)throw Ef(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ef(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Us(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function AS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var li;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(li||(li={}));/**
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
 */function RS(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class ZV{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,P)=>{this.resolve_=R,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new wl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===li.NO_ERROR,u=s.getStatus();if(!l||RS(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===li.ABORT;r(!1,new wl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new wl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());XV(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=wm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?SS():TS();o(u)}else{const u=ES();o(u)}};this.canceled_?n(!1,new wl(!1,null,!0)):this.backoffId_=KV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function eL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iL(t,e,n,r,i,s,o=!0,l=!1){const u=AS(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return nL(d,e),eL(d,n),tL(d,s),rL(d,r),new ZV(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function sL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function oL(...t){const e=sL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Em())return new Blob(t);throw new Re(_e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function lL(t){if(typeof atob>"u")throw HV("base-64");return atob(t)}/**
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
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hh{constructor(e,n){this.data=e,this.contentType=n||null}}function uL(t,e){switch(t){case cn.RAW:return new Hh(CS(e));case cn.BASE64:case cn.BASE64URL:return new Hh(PS(t,e));case cn.DATA_URL:return new Hh(hL(e),dL(e))}throw wm()}function CS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cL(t){let e;try{e=decodeURIComponent(t)}catch{throw Lo(cn.DATA_URL,"Malformed data URL.")}return CS(e)}function PS(t,e){switch(t){case cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Lo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Lo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lL(e)}catch(i){throw i.message.includes("polyfill")?i:Lo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class kS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Lo(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hL(t){const e=new kS(t);return e.base64?PS(cn.BASE64,e.rest):cL(e.rest)}function dL(t){return new kS(t).contentType}function fL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class lr{constructor(e,n){let r=0,i="";Ov(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ov(this.data_)){const r=this.data_,i=aL(r,e,n);return i===null?null:new lr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new lr(r,!0)}}static getBlob(...e){if(Em()){const n=e.map(r=>r instanceof lr?r.data_:r);return new lr(oL.apply(null,n))}else{const n=e.map(o=>xc(o)?uL(cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new lr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function NS(t){let e;try{e=JSON.parse(t)}catch{return null}return JV(e)?e:null}/**
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
 */function pL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function DS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function gL(t,e){return e}class ut{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||gL}}let El=null;function _L(t){return!xc(t)||t.length<2?t:DS(t)}function xS(){if(El)return El;const t=[];t.push(new ut("bucket")),t.push(new ut("generation")),t.push(new ut("metageneration")),t.push(new ut("name","fullPath",!0));function e(s,o){return _L(o)}const n=new ut("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ut("size");return i.xform=r,t.push(i),t.push(new ut("timeCreated")),t.push(new ut("updated")),t.push(new ut("md5Hash",null,!0)),t.push(new ut("cacheControl",null,!0)),t.push(new ut("contentDisposition",null,!0)),t.push(new ut("contentEncoding",null,!0)),t.push(new ut("contentLanguage",null,!0)),t.push(new ut("contentType",null,!0)),t.push(new ut("metadata","customMetadata",!0)),El=t,El}function yL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Nt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function vL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return yL(r,t),r}function OS(t,e,n){const r=NS(e);return r===null?null:vL(t,r,n)}function wL(t,e,n,r){const i=NS(e);if(i===null||!xc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),v=Us(m,n,r),R=AS({alt:"media",token:c});return v+R})[0]}function bS(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Di{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ln(t){if(!t)throw wm()}function Tm(t,e){function n(r,i){const s=OS(t,i,e);return Ln(s!==null),s}return n}function EL(t,e){function n(r,i){const s=OS(t,i,e);return Ln(s!==null),wL(s,i,t.host,t._protocol)}return n}function xa(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=UV():i=MV():n.getStatus()===402?i=LV(t.bucket):n.getStatus()===403?i=FV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Im(t){const e=xa(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=VV(t.path)),s.serverResponse=i.serverResponse,s}return n}function TL(t,e,n){const r=e.fullServerUrl(),i=Us(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Di(i,s,Tm(t,n),o);return l.errorHandler=Im(e),l}function IL(t,e,n){const r=e.fullServerUrl(),i=Us(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Di(i,s,EL(t,n),o);return l.errorHandler=Im(e),l}function SL(t,e){const n=e.fullServerUrl(),r=Us(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,c){}const l=new Di(r,i,o,s);return l.successCodes=[200,204],l.errorHandler=Im(e),l}function AL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function VS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=AL(null,e)),r}function RL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let x=0;x<2;x++)E=E+Math.random().toString().slice(2);return E}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=VS(e,r,i),d=bS(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",v=lr.getBlob(p,r,m);if(v===null)throw IS();const R={name:c.fullPath},P=Us(s,t.host,t._protocol),k="POST",I=t.maxUploadRetryTime,y=new Di(P,k,Tm(t,n),I);return y.urlParams=R,y.headers=o,y.body=v.uploadData(),y.errorHandler=xa(e),y}class Mu{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Sm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Ln(!1)}return Ln(!!n&&(e||["active"]).indexOf(n)!==-1),n}function CL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=VS(e,r,i),l={name:o.fullPath},u=Us(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=bS(o,n),m=t.maxUploadRetryTime;function v(P){Sm(P);let k;try{k=P.getResponseHeader("X-Goog-Upload-URL")}catch{Ln(!1)}return Ln(xc(k)),k}const R=new Di(u,c,v,m);return R.urlParams=l,R.headers=d,R.body=p,R.errorHandler=xa(e),R}function PL(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=Sm(c,["active","final"]);let p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ln(!1)}p||Ln(!1);const m=Number(p);return Ln(!isNaN(m)),new Mu(m,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,u=new Di(n,o,s,l);return u.headers=i,u.errorHandler=xa(e),u}const Vv=256*1024;function kL(t,e,n,r,i,s,o,l){const u=new Mu(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw $V();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const p=u.current,m=p+d;let v="";d===0?v="finalize":c===d?v="upload, finalize":v="upload";const R={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${u.current}`},P=r.slice(p,m);if(P===null)throw IS();function k(x,M){const F=Sm(x,["active","final"]),T=u.current+d,_=r.size();let w;return F==="final"?w=Tm(e,s)(x,M):w=null,new Mu(T,_,F==="final",w)}const I="POST",y=e.maxUploadRetryTime,E=new Di(n,I,k,y);return E.headers=R,E.body=P.uploadData(),E.progressCallback=l||null,E.errorHandler=xa(t),E}const gt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Wh(t){switch(t){case"running":case"pausing":case"canceling":return gt.RUNNING;case"paused":return gt.PAUSED;case"success":return gt.SUCCESS;case"canceled":return gt.CANCELED;case"error":return gt.ERROR;default:return gt.ERROR}}/**
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
 */class NL{constructor(e,n,r){if(YV(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Mi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class DL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=li.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=li.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=li.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw ao("cannot .send() more than once");if(Br(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ao("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ao("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ao("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ao("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xL extends DL{initXhr(){this.xhr_.responseType="text"}}function ei(){return new xL}/**
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
 */class OL{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=xS(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(_e.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(RS(i.status,[]))if(s)i=ES();else{this.sleepTime=Math.max(this.sleepTime*2,bV),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(_e.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=CL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ei,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=PL(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,ei,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Vv*this._chunkMultiplier,n=new Mu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=kL(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,ei,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Vv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=TL(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,ei,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=RL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ei,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=TS(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Wh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new NL(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Wh(this._state)){case gt.SUCCESS:Mi(this._resolve.bind(null,this.snapshot))();break;case gt.CANCELED:case gt.ERROR:const n=this._reject;Mi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Wh(this._state)){case gt.RUNNING:case gt.PAUSED:e.next&&Mi(e.next.bind(e,this.snapshot))();break;case gt.SUCCESS:e.complete&&Mi(e.complete.bind(e))();break;case gt.CANCELED:case gt.ERROR:e.error&&Mi(e.error.bind(e,this._error))();break;default:e.error&&Mi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ei{constructor(e,n){this._service=e,n instanceof Nt?this._location=n:this._location=Nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ei(e,n)}get root(){const e=new Nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return DS(this._location.path)}get storage(){return this._service}get parent(){const e=pL(this._location.path);if(e===null)return null;const n=new Nt(this._location.bucket,e);return new Ei(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WV(e)}}function bL(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new OL(t,new lr(e),n)}function VL(t){t._throwIfRoot("getDownloadURL");const e=IL(t.storage,t._location,xS());return t.storage.makeRequestWithTokens(e,ei).then(n=>{if(n===null)throw qV();return n})}function LL(t){t._throwIfRoot("deleteObject");const e=SL(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ei)}function ML(t,e){const n=mL(t._location.path,e),r=new Nt(t._location.bucket,n);return new Ei(t.storage,r)}/**
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
 */function UL(t){return/^[A-Za-z]+:\/\//.test(t)}function FL(t,e){return new Ei(t,e)}function LS(t,e){if(t instanceof Am){const n=t;if(n._bucket==null)throw zV();const r=new Ei(n,n._bucket);return e!=null?LS(r,e):r}else return e!==void 0?ML(t,e):t}function jL(t,e){if(e&&UL(e)){if(t instanceof Am)return FL(t,e);throw Ef("To use ref(service, url), the first argument must be a Storage instance.")}else return LS(t,e)}function Lv(t,e){const n=e==null?void 0:e[wS];return n==null?null:Nt.makeFromBucketSpec(n,t)}function BL(t,e,n,r={}){t.host=`${e}:${n}`;const i=Br(e);i&&(yp(`https://${t.host}/b`),vp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:wT(s,t.app.options.projectId))}class Am{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=vS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xV,this._maxUploadRetryTime=OV,this._requests=new Set,i!=null?this._bucket=Nt.makeFromBucketSpec(i,this._host):this._bucket=Lv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nt.makeFromBucketSpec(this._url,e):this._bucket=Lv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ei(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new GV(SS());{const o=iL(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Mv="@firebase/storage",Uv="0.13.14";/**
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
 */const MS="storage";function IM(t,e,n){return t=le(t),bL(t,e,n)}function SM(t){return t=le(t),VL(t)}function AM(t){return t=le(t),LL(t)}function RM(t,e){return t=le(t),jL(t,e)}function zL(t=va(),e){t=le(t);const r=zr(t,MS).getImmediate({identifier:e}),i=_T("storage");return i&&$L(r,...i),r}function $L(t,e,n,r={}){BL(t,e,n,r)}function qL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Am(n,r,i,e,Ri)}function HL(){nn(new Ht(MS,qL,"PUBLIC").setMultipleInstances(!0)),Tt(Mv,Uv,""),Tt(Mv,Uv,"esm2017")}HL();const Rm={apiKey:"AIzaSyDHawdIrKCPyw6jMWpzExBjNAwtlls8jYQ",authDomain:"link-almohadas.firebaseapp.com",projectId:"link-almohadas",storageBucket:"link-almohadas.firebasestorage.app",messagingSenderId:"193699810029",appId:"1:193699810029:web:23b6ae6df6f7f22c769ae4",measurementId:"G-ZSF8N9XPQ7"},Oc=Sk().length?va():Sp(Rm);gO().then(t=>{t&&Rm.measurementId&&pO(Oc)}).catch(()=>null);const Cm=l0(Oc),bc=pV(Oc),CM=zL(Oc),WL=tS(bc,"users");async function GL(t){const e=await RV(nS(bc,"users",t));return e.exists()?e.data():null}async function KL({uid:t,nombre:e,email:n,createdBy:r}){await CV(nS(bc,"users",t),{uid:t,nombre:e,email:n,role:"seller",createdBy:r,createdAt:DV()})}function PM(t,e){const n=dS(WL,IV("role","==","seller"),fS("createdAt","desc"));return _S(n,r=>{t(r.docs.map(i=>i.data()))},e)}async function QL(t,e){return(await bN(Cm,t,e)).user}async function XL(){await YT(Cm)}async function kM(t,e){if((e==null?void 0:e.role)!=="superadmin")throw new Error("Solo el super admin puede crear usuarias vendedoras.");const n=Sp(Rm,`seller-creator-${Date.now()}`),r=l0(n);try{const i=await ON(r,t.email.trim(),t.password);return await LN(i.user,{displayName:t.nombre.trim()}),await KL({uid:i.user.uid,nombre:t.nombre.trim(),email:t.email.trim(),createdBy:e.uid}),i.user}catch(i){throw new Error(YL(i))}finally{await YT(r).catch(()=>null),await Ak(n).catch(()=>null)}}function YL(t){switch(t.code){case"auth/email-already-in-use":return"Ese email ya esta registrado.";case"auth/invalid-email":return"El email no es valido.";case"auth/weak-password":return"La contrasena es demasiado debil.";case"auth/invalid-credential":return"Las credenciales no son validas.";default:return t.message||"Ocurrio un error con Firebase Authentication."}}const US=L.createContext(null),Fv="Gaston@mimartextiles.com".trim().toLowerCase();function JL(t,e){var n;return t?Fv&&((n=t.email)==null?void 0:n.toLowerCase())===Fv?{uid:t.uid,email:t.email,nombre:t.displayName||(e==null?void 0:e.nombre)||"Super admin",role:"superadmin"}:e?{uid:t.uid,email:e.email||t.email,nombre:e.nombre||t.displayName||"Operadora",role:e.role}:{uid:t.uid,email:t.email,nombre:t.displayName||"Usuario sin permisos",role:"unauthorized"}:null}function ZL({children:t}){const[e,n]=L.useState(null),[r,i]=L.useState(null),[s,o]=L.useState(!0);L.useEffect(()=>FN(Cm,async c=>{if(o(!0),!c){n(null),i(null),o(!1);return}let d=null;try{d=await GL(c.uid)}catch(p){console.error("No se pudo cargar el perfil.",p)}n(c),i(JL(c,d)),o(!1)}),[]);const l=L.useMemo(()=>({authUser:e,profile:r,loading:s,role:(r==null?void 0:r.role)||null,isAuthenticated:!!e,isSuperAdmin:(r==null?void 0:r.role)==="superadmin",isSeller:(r==null?void 0:r.role)==="seller",login:QL,logout:XL}),[e,s,r]);return B.jsx(US.Provider,{value:l,children:t})}function eM(){return L.useContext(US)}const FS=L.createContext(null);let jv=0;function tM({children:t}){const[e,n]=L.useState([]),r=L.useCallback(o=>{n(l=>l.filter(u=>u.id!==o))},[]),i=L.useCallback(({title:o,description:l="",tone:u="neutral"})=>{jv+=1;const c=jv;n(d=>[...d,{id:c,title:o,description:l,tone:u}]),window.setTimeout(()=>{r(c)},4200)},[r]),s=L.useMemo(()=>({showToast:i,dismissToast:r}),[r,i]);return B.jsxs(FS.Provider,{value:s,children:[t,B.jsx("div",{className:"toast-stack","aria-live":"polite","aria-atomic":"true",children:e.map(o=>B.jsxs("div",{className:`toast toast--${o.tone}`,children:[B.jsxs("div",{children:[B.jsx("strong",{children:o.title}),o.description?B.jsx("p",{children:o.description}):null]}),B.jsx("button",{type:"button",className:"icon-button",onClick:()=>r(o.id),"aria-label":"Cerrar notificacion",children:"×"})]},o.id))})]})}function NM(){return L.useContext(FS)}function Pm(){return eM()}function km({label:t="Cargando...",fullScreen:e=!1}){return B.jsxs("div",{className:e?"loader-shell loader-shell--fullscreen":"loader-shell",children:[B.jsx("div",{className:"loader"}),B.jsx("span",{children:t})]})}function nM(){const{logout:t}=Pm();return B.jsx("section",{className:"auth-wrapper",children:B.jsxs("div",{className:"auth-card",children:[B.jsx("span",{className:"eyebrow",children:"Sin permisos"}),B.jsx("h1",{children:"Esta cuenta no tiene acceso al panel"}),B.jsx("p",{children:"Si deberia entrar, asignale un rol valido desde el super admin o revisa el email propietario configurado."}),B.jsxs("div",{className:"button-row",children:[B.jsx(dT,{to:"/",className:"ghost-button",children:"Volver al catalogo"}),B.jsx("button",{type:"button",className:"primary-button",onClick:t,children:"Cerrar sesion"})]})]})})}function Gh({children:t,allowedRoles:e=[]}){const{isAuthenticated:n,loading:r,role:i}=Pm();return r?B.jsx(km,{fullScreen:!0,label:"Validando acceso..."}):n?i==="unauthorized"?B.jsx(nM,{}):e.length>0&&!e.includes(i)?B.jsx(na,{to:"/panel",replace:!0}):t:B.jsx(na,{to:"/login",replace:!0})}function rM(){return B.jsx("div",{className:"app-shell app-shell--public",children:B.jsx("main",{className:"public-main",children:B.jsx(UC,{})})})}const iM=tS(bc,"products");function sM(t){return{id:t.id,...t.data()}}function oM(t,e){const n=dS(iM,fS("createdAt","desc"));return _S(n,r=>{t(r.docs.map(sM))},e)}function aM(){const[t,e]=L.useState([]),[n,r]=L.useState(!0),[i,s]=L.useState("");return L.useEffect(()=>oM(l=>{e(l),r(!1)},l=>{s(l.message||"No se pudieron cargar los productos."),r(!1)}),[]),{products:t,loading:n,error:i}}function Bv({title:t,description:e}){return B.jsxs("div",{className:"empty-state",children:[B.jsx("strong",{children:t}),B.jsx("p",{children:e})]})}function lM({product:t,onOpen:e}){return B.jsx("button",{type:"button",className:"product-card",onClick:e,"aria-label":`Abrir diseno ${t.codigo}`,children:B.jsxs("div",{className:"product-image-frame",children:[B.jsx("img",{src:t.imageUrl,alt:`Diseno ${t.codigo}`,className:"product-image",loading:"lazy"}),B.jsx("span",{className:"product-code-chip",children:t.codigo})]})})}function uM(t){return t?t instanceof Date?t:typeof t.toDate=="function"?t.toDate():new Date(t):null}function cM(t){const e=Number(t)||0;return e===1?"1 par disponible":`${e} pares disponibles`}function DM(t){const e=uM(t);return!e||Number.isNaN(e.getTime())?"Sin fecha":new Intl.DateTimeFormat("es-PY",{dateStyle:"short",timeStyle:"short"}).format(e)}function xM(t){return t?t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/(1024*1024)).toFixed(2)} MB`:"0 KB"}function OM(){return`${window.location.origin}${window.location.pathname}#/`}function hM(){const{products:t,loading:e,error:n}=aM(),[r,i]=L.useState(null),s=L.useRef(null),o=r===null?null:t[r],l=()=>{i(null),s.current=null},u=()=>{i(m=>m===null||t.length===0?m:m===0?t.length-1:m-1)},c=()=>{i(m=>m===null||t.length===0?m:m===t.length-1?0:m+1)};L.useEffect(()=>{r!==null&&r>t.length-1&&i(t.length?t.length-1:null)},[r,t.length]),L.useEffect(()=>{if(!o)return;const m=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=m}},[o]),L.useEffect(()=>{if(!o)return;const m=v=>{v.key==="Escape"&&l(),v.key==="ArrowLeft"&&u(),v.key==="ArrowRight"&&c()};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[o,t.length]);const d=m=>{const v=m.touches[0];s.current={x:v.clientX,y:v.clientY}},p=m=>{if(!s.current)return;const v=m.changedTouches[0],R=v.clientX-s.current.x,P=v.clientY-s.current.y;if(s.current=null,!(Math.abs(R)<36||Math.abs(P)>64)){if(R<0){c();return}u()}};return B.jsxs("section",{className:"catalog-page",children:[e?B.jsx(km,{label:"Cargando catalogo..."}):null,!e&&n?B.jsx(Bv,{title:"No se pudo cargar el catalogo",description:n}):null,!e&&!n&&t.length===0?B.jsx(Bv,{title:"No hay almohadas disponibles",description:"Cuando cargues nuevos disenos desde el panel, apareceran automaticamente aca."}):null,!e&&!n&&t.length>0?B.jsx("div",{className:"catalog-grid","aria-label":"Catalogo publico de almohadas",children:t.map((m,v)=>B.jsx(lM,{product:m,onOpen:()=>i(v)},m.id))}):null,o?B.jsxs("div",{className:"catalog-lightbox",role:"dialog","aria-modal":"true","aria-label":`Vista ampliada del diseno ${o.codigo}`,onClick:l,children:[B.jsx("button",{type:"button",className:"catalog-lightbox-close",onClick:l,"aria-label":"Cerrar visor",children:"Cerrar"}),t.length>1?B.jsxs(B.Fragment,{children:[B.jsx("button",{type:"button",className:"catalog-lightbox-nav catalog-lightbox-nav--prev",onClick:m=>{m.stopPropagation(),u()},"aria-label":"Foto anterior",children:"‹"}),B.jsx("button",{type:"button",className:"catalog-lightbox-nav catalog-lightbox-nav--next",onClick:m=>{m.stopPropagation(),c()},"aria-label":"Foto siguiente",children:"›"})]}):null,B.jsxs("div",{className:"catalog-lightbox-dialog",onClick:m=>m.stopPropagation(),onTouchStart:d,onTouchEnd:p,children:[B.jsx("div",{className:"catalog-lightbox-media",children:B.jsx("img",{src:o.imageUrl,alt:`Diseno ${o.codigo}`,className:"catalog-lightbox-image"})}),B.jsxs("div",{className:"catalog-lightbox-footer",children:[B.jsx("span",{className:"catalog-lightbox-code",children:o.codigo}),B.jsx("span",{className:"catalog-lightbox-stock",children:cM(o.stockPares)})]})]})]}):null]})}function dM(){const{role:t}=Pm();return t==="superadmin"?B.jsx(na,{to:"/panel/admin",replace:!0}):B.jsx(na,{to:"/panel/operaciones",replace:!0})}const fM=L.lazy(()=>ec(()=>import("./LoginPage-BNTElhtP.js"),[],import.meta.url)),pM=L.lazy(()=>ec(()=>import("./PrivateLayout-yY2G0lSp.js"),[],import.meta.url)),mM=L.lazy(()=>ec(()=>import("./AdminDashboardPage-DIA-QRDl.js"),__vite__mapDeps([0,1]),import.meta.url)),gM=L.lazy(()=>ec(()=>import("./SellerDashboardPage-DvrOWeja.js"),__vite__mapDeps([2,1]),import.meta.url));function _M(){return B.jsx(tM,{children:B.jsx(ZL,{children:B.jsx(KC,{children:B.jsx(L.Suspense,{fallback:B.jsx(km,{fullScreen:!0,label:"Cargando interfaz..."}),children:B.jsxs(jC,{children:[B.jsxs(Rn,{element:B.jsx(rM,{}),children:[B.jsx(Rn,{index:!0,element:B.jsx(hM,{})}),B.jsx(Rn,{path:"/login",element:B.jsx(fM,{})})]}),B.jsxs(Rn,{path:"/panel",element:B.jsx(Gh,{children:B.jsx(pM,{})}),children:[B.jsx(Rn,{index:!0,element:B.jsx(dM,{})}),B.jsx(Rn,{path:"admin",element:B.jsx(Gh,{allowedRoles:["superadmin"],children:B.jsx(mM,{})})}),B.jsx(Rn,{path:"operaciones",element:B.jsx(Gh,{allowedRoles:["superadmin","seller"],children:B.jsx(gM,{})})})]}),B.jsx(Rn,{path:"*",element:B.jsx(na,{to:"/",replace:!0})})]})})})})})}Kh.createRoot(document.getElementById("root")).render(B.jsx(Jv.StrictMode,{children:B.jsx(_M,{})}));export{Bv as E,km as L,yM as N,UC as O,Pm as a,NM as b,kM as c,aM as d,DM as e,xM as f,OM as g,AM as h,RM as i,B as j,IM as k,PM as l,SM as m,EM as n,nS as o,bc as p,wM as q,L as r,CM as s,CV as t,aT as u,DV as v,TM as w,tS as x,cM as y};
