(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function GS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ff={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function VS(){if(Yg)return Ao;Yg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ao.Fragment=e,Ao.jsx=i,Ao.jsxs=i,Ao}var Zg;function kS(){return Zg||(Zg=1,Ff.exports=VS()),Ff.exports}var Je=kS(),Hf={exports:{}},Ro={},Gf={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function XS(){return jg||(jg=1,function(s){function e(P,Q){var B=P.length;P.push(Q);t:for(;0<B;){var ct=B-1>>>1,R=P[ct];if(0<l(R,Q))P[ct]=Q,P[B]=R,B=ct;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Q=P[0],B=P.pop();if(B!==Q){P[0]=B;t:for(var ct=0,R=P.length,W=R>>>1;ct<W;){var lt=2*(ct+1)-1,gt=P[lt],Y=lt+1,ft=P[Y];if(0>l(gt,B))Y<R&&0>l(ft,gt)?(P[ct]=ft,P[Y]=B,ct=Y):(P[ct]=gt,P[lt]=B,ct=lt);else if(Y<R&&0>l(ft,B))P[ct]=ft,P[Y]=B,ct=Y;else break t}}return Q}function l(P,Q){var B=P.sortIndex-Q.sortIndex;return B!==0?B:P.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,_=null,v=3,y=!1,E=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var Q=i(m);Q!==null;){if(Q.callback===null)r(m);else if(Q.startTime<=P)r(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=i(m)}}function V(P){if(w=!1,U(P),!E)if(i(p)!==null)E=!0,k||(k=!0,ot());else{var Q=i(m);Q!==null&&dt(V,Q.startTime-P)}}var k=!1,F=-1,K=5,D=-1;function C(){return M?!0:!(s.unstable_now()-D<K)}function G(){if(M=!1,k){var P=s.unstable_now();D=P;var Q=!0;try{t:{E=!1,w&&(w=!1,z(F),F=-1),y=!0;var B=v;try{e:{for(U(P),_=i(p);_!==null&&!(_.expirationTime>P&&C());){var ct=_.callback;if(typeof ct=="function"){_.callback=null,v=_.priorityLevel;var R=ct(_.expirationTime<=P);if(P=s.unstable_now(),typeof R=="function"){_.callback=R,U(P),Q=!0;break e}_===i(p)&&r(p),U(P)}else r(p);_=i(p)}if(_!==null)Q=!0;else{var W=i(m);W!==null&&dt(V,W.startTime-P),Q=!1}}break t}finally{_=null,v=B,y=!1}Q=void 0}}finally{Q?ot():k=!1}}}var ot;if(typeof N=="function")ot=function(){N(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,St=st.port2;st.port1.onmessage=G,ot=function(){St.postMessage(null)}}else ot=function(){S(G,0)};function dt(P,Q){F=S(function(){P(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(P){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var B=v;v=Q;try{return P()}finally{v=B}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(P,Q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=v;v=P;try{return Q()}finally{v=B}},s.unstable_scheduleCallback=function(P,Q,B){var ct=s.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ct+B:ct):B=ct,P){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=B+R,P={id:g++,callback:Q,priorityLevel:P,startTime:B,expirationTime:R,sortIndex:-1},B>ct?(P.sortIndex=B,e(m,P),i(p)===null&&P===i(m)&&(w?(z(F),F=-1):w=!0,dt(V,B-ct))):(P.sortIndex=R,e(p,P),E||y||(E=!0,k||(k=!0,ot()))),P},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(P){var Q=v;return function(){var B=v;v=Q;try{return P.apply(this,arguments)}finally{v=B}}}}(Vf)),Vf}var Kg;function WS(){return Kg||(Kg=1,Gf.exports=XS()),Gf.exports}var kf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function qS(){if(Qg)return re;Qg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(R){return R===null||typeof R!="object"?null:(R=_&&R[_]||R["@@iterator"],typeof R=="function"?R:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function M(R,W,lt){this.props=R,this.context=W,this.refs=w,this.updater=lt||y}M.prototype.isReactComponent={},M.prototype.setState=function(R,W){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,W,"setState")},M.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function S(){}S.prototype=M.prototype;function z(R,W,lt){this.props=R,this.context=W,this.refs=w,this.updater=lt||y}var N=z.prototype=new S;N.constructor=z,E(N,M.prototype),N.isPureReactComponent=!0;var U=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function F(R,W,lt,gt,Y,ft){return lt=ft.ref,{$$typeof:s,type:R,key:W,ref:lt!==void 0?lt:null,props:ft}}function K(R,W){return F(R.type,W,void 0,void 0,void 0,R.props)}function D(R){return typeof R=="object"&&R!==null&&R.$$typeof===s}function C(R){var W={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(lt){return W[lt]})}var G=/\/+/g;function ot(R,W){return typeof R=="object"&&R!==null&&R.key!=null?C(""+R.key):W.toString(36)}function st(){}function St(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(st,st):(R.status="pending",R.then(function(W){R.status==="pending"&&(R.status="fulfilled",R.value=W)},function(W){R.status==="pending"&&(R.status="rejected",R.reason=W)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function dt(R,W,lt,gt,Y){var ft=typeof R;(ft==="undefined"||ft==="boolean")&&(R=null);var xt=!1;if(R===null)xt=!0;else switch(ft){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(R.$$typeof){case s:case e:xt=!0;break;case g:return xt=R._init,dt(xt(R._payload),W,lt,gt,Y)}}if(xt)return Y=Y(R),xt=gt===""?"."+ot(R,0):gt,U(Y)?(lt="",xt!=null&&(lt=xt.replace(G,"$&/")+"/"),dt(Y,W,lt,"",function(ae){return ae})):Y!=null&&(D(Y)&&(Y=K(Y,lt+(Y.key==null||R&&R.key===Y.key?"":(""+Y.key).replace(G,"$&/")+"/")+xt)),W.push(Y)),1;xt=0;var bt=gt===""?".":gt+":";if(U(R))for(var Ct=0;Ct<R.length;Ct++)gt=R[Ct],ft=bt+ot(gt,Ct),xt+=dt(gt,W,lt,ft,Y);else if(Ct=v(R),typeof Ct=="function")for(R=Ct.call(R),Ct=0;!(gt=R.next()).done;)gt=gt.value,ft=bt+ot(gt,Ct++),xt+=dt(gt,W,lt,ft,Y);else if(ft==="object"){if(typeof R.then=="function")return dt(St(R),W,lt,gt,Y);throw W=String(R),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return xt}function P(R,W,lt){if(R==null)return R;var gt=[],Y=0;return dt(R,gt,"","",function(ft){return W.call(lt,ft,Y++)}),gt}function Q(R){if(R._status===-1){var W=R._result;W=W(),W.then(function(lt){(R._status===0||R._status===-1)&&(R._status=1,R._result=lt)},function(lt){(R._status===0||R._status===-1)&&(R._status=2,R._result=lt)}),R._status===-1&&(R._status=0,R._result=W)}if(R._status===1)return R._result.default;throw R._result}var B=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function ct(){}return re.Children={map:P,forEach:function(R,W,lt){P(R,function(){W.apply(this,arguments)},lt)},count:function(R){var W=0;return P(R,function(){W++}),W},toArray:function(R){return P(R,function(W){return W})||[]},only:function(R){if(!D(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},re.Component=M,re.Fragment=i,re.Profiler=l,re.PureComponent=z,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,re.__COMPILER_RUNTIME={__proto__:null,c:function(R){return V.H.useMemoCache(R)}},re.cache=function(R){return function(){return R.apply(null,arguments)}},re.cloneElement=function(R,W,lt){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var gt=E({},R.props),Y=R.key,ft=void 0;if(W!=null)for(xt in W.ref!==void 0&&(ft=void 0),W.key!==void 0&&(Y=""+W.key),W)!k.call(W,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&W.ref===void 0||(gt[xt]=W[xt]);var xt=arguments.length-2;if(xt===1)gt.children=lt;else if(1<xt){for(var bt=Array(xt),Ct=0;Ct<xt;Ct++)bt[Ct]=arguments[Ct+2];gt.children=bt}return F(R.type,Y,void 0,void 0,ft,gt)},re.createContext=function(R){return R={$$typeof:h,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},re.createElement=function(R,W,lt){var gt,Y={},ft=null;if(W!=null)for(gt in W.key!==void 0&&(ft=""+W.key),W)k.call(W,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(Y[gt]=W[gt]);var xt=arguments.length-2;if(xt===1)Y.children=lt;else if(1<xt){for(var bt=Array(xt),Ct=0;Ct<xt;Ct++)bt[Ct]=arguments[Ct+2];Y.children=bt}if(R&&R.defaultProps)for(gt in xt=R.defaultProps,xt)Y[gt]===void 0&&(Y[gt]=xt[gt]);return F(R,ft,void 0,void 0,null,Y)},re.createRef=function(){return{current:null}},re.forwardRef=function(R){return{$$typeof:d,render:R}},re.isValidElement=D,re.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:Q}},re.memo=function(R,W){return{$$typeof:m,type:R,compare:W===void 0?null:W}},re.startTransition=function(R){var W=V.T,lt={};V.T=lt;try{var gt=R(),Y=V.S;Y!==null&&Y(lt,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(ct,B)}catch(ft){B(ft)}finally{V.T=W}},re.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},re.use=function(R){return V.H.use(R)},re.useActionState=function(R,W,lt){return V.H.useActionState(R,W,lt)},re.useCallback=function(R,W){return V.H.useCallback(R,W)},re.useContext=function(R){return V.H.useContext(R)},re.useDebugValue=function(){},re.useDeferredValue=function(R,W){return V.H.useDeferredValue(R,W)},re.useEffect=function(R,W,lt){var gt=V.H;if(typeof lt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return gt.useEffect(R,W)},re.useId=function(){return V.H.useId()},re.useImperativeHandle=function(R,W,lt){return V.H.useImperativeHandle(R,W,lt)},re.useInsertionEffect=function(R,W){return V.H.useInsertionEffect(R,W)},re.useLayoutEffect=function(R,W){return V.H.useLayoutEffect(R,W)},re.useMemo=function(R,W){return V.H.useMemo(R,W)},re.useOptimistic=function(R,W){return V.H.useOptimistic(R,W)},re.useReducer=function(R,W,lt){return V.H.useReducer(R,W,lt)},re.useRef=function(R){return V.H.useRef(R)},re.useState=function(R){return V.H.useState(R)},re.useSyncExternalStore=function(R,W,lt){return V.H.useSyncExternalStore(R,W,lt)},re.useTransition=function(){return V.H.useTransition()},re.version="19.1.0",re}var Jg;function sd(){return Jg||(Jg=1,kf.exports=qS()),kf.exports}var Xf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function YS(){if($g)return Rn;$g=1;var s=sd();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Rn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Rn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Rn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Rn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Rn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Rn.requestFormReset=function(p){r.d.r(p)},Rn.unstable_batchedUpdates=function(p,m){return p(m)},Rn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var t_;function ZS(){if(t_)return Xf.exports;t_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Xf.exports=YS(),Xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function jS(){if(e_)return Ro;e_=1;var s=WS(),e=sd(),i=ZS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===o)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,o=f;break}if(T===o){x=!0,o=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,o=c;break}if(T===o){x=!0,o=f,a=c;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function St(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case M:return"Profiler";case w:return"StrictMode";case V:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case N:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:St(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return St(t(n))}catch{}}return null}var dt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},ct=[],R=-1;function W(t){return{current:t}}function lt(t){0>R||(t.current=ct[R],ct[R]=null,R--)}function gt(t,n){R++,ct[R]=t.current,t.current=n}var Y=W(null),ft=W(null),xt=W(null),bt=W(null);function Ct(t,n){switch(gt(xt,n),gt(ft,t),gt(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Mg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Mg(n),t=yg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}lt(Y),gt(Y,t)}function ae(){lt(Y),lt(ft),lt(xt)}function Ot(t){t.memoizedState!==null&&gt(bt,t);var n=Y.current,a=yg(n,t.type);n!==a&&(gt(ft,t),gt(Y,a))}function ee(t){ft.current===t&&(lt(Y),lt(ft)),bt.current===t&&(lt(bt),Mo._currentValue=B)}var pe=Object.prototype.hasOwnProperty,$t=s.unstable_scheduleCallback,I=s.unstable_cancelCallback,Pn=s.unstable_shouldYield,ge=s.unstable_requestPaint,ne=s.unstable_now,Xt=s.unstable_getCurrentPriorityLevel,Ue=s.unstable_ImmediatePriority,Gt=s.unstable_UserBlockingPriority,L=s.unstable_NormalPriority,b=s.unstable_LowPriority,tt=s.unstable_IdlePriority,Mt=s.log,yt=s.unstable_setDisableYieldValue,pt=null,Bt=null;function At(t){if(typeof Mt=="function"&&yt(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(pt,t)}catch{}}var Rt=Math.clz32?Math.clz32:Ft,_e=Math.log,Tt=Math.LN2;function Ft(t){return t>>>=0,t===0?32:31-(_e(t)/Tt|0)|0}var Yt=256,jt=4194304;function Pt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function le(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=Pt(o):(x&=T,x!==0?c=Pt(x):a||(a=T&~t,a!==0&&(c=Pt(a))))):(T=o&~f,T!==0?c=Pt(T):x!==0?c=Pt(x):a||(a=o&~t,a!==0&&(c=Pt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Yt;return Yt<<=1,(Yt&4194048)===0&&(Yt=256),t}function Lt(){var t=jt;return jt<<=1,(jt&62914560)===0&&(jt=4194304),t}function ut(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _t(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function zt(t,n,a,o,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,O=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-Rt(a),vt=1<<ht;T[ht]=0,O[ht]=-1;var et=$[ht];if(et!==null)for($[ht]=null,ht=0;ht<et.length;ht++){var nt=et[ht];nt!==null&&(nt.lane&=-536870913)}a&=~vt}o!==0&&Nt(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Rt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function ie(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Rt(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Fe(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $e(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ye(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Gg(t.type))}function kn(t,n){var a=Q.p;try{return Q.p=t,n()}finally{Q.p=a}}var hn=Math.random().toString(36).slice(2),sn="__reactFiber$"+hn,vn="__reactProps$"+hn,zn="__reactContainer$"+hn,Xa="__reactEvents$"+hn,Wo="__reactListeners$"+hn,qo="__reactHandles$"+hn,Wa="__reactResources$"+hn,sa="__reactMarker$"+hn;function oa(t){delete t[sn],delete t[vn],delete t[Xa],delete t[Wo],delete t[qo]}function Di(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zn]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ag(t);t!==null;){if(a=t[sn])return a;t=Ag(t)}return n}t=a,a=t.parentNode}return null}function Ui(t){if(t=t[sn]||t[zn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function qa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function la(t){var n=t[Wa];return n||(n=t[Wa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[sa]=!0}var Yo=new Set,Zo={};function Li(t,n){A(t,n),A(t+"Capture",n)}function A(t,n){for(Zo[t]=n,t=0;t<n.length;t++)Yo.add(n[t])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},at={};function j(t){return pe.call(at,t)?!0:pe.call(it,t)?!1:Z.test(t)?at[t]=!0:(it[t]=!0,!1)}function Et(t,n,a){if(j(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function wt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Dt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var It,Qt;function Wt(t){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",Qt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+t+Qt}var kt=!1;function fe(t,n){if(!t||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(nt){var et=nt}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(nt){et=nt}t.call(vt.prototype)}}else{try{throw Error()}catch(nt){et=nt}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(nt){if(nt&&et&&typeof nt.stack=="string")return[nt.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var O=x.split(`
`),$=T.split(`
`);for(c=o=0;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===O.length||c===$.length)for(o=O.length-1,c=$.length-1;1<=o&&0<=c&&O[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(O[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||O[o]!==$[c]){var ht=`
`+O[o].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=o&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wt(a):""}function Ee(t){switch(t.tag){case 26:case 27:case 5:return Wt(t.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return fe(t.type,!1);case 11:return fe(t.type.render,!1);case 1:return fe(t.type,!0);case 31:return Wt("Activity");default:return""}}function ke(t){try{var n="";do n+=Ee(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qt(t){var n=Se(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){o=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){t._valueTracker||(t._valueTracker=qt(t))}function Me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Se(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Tn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ca=/[\n"\\]/g;function He(t){return t.replace(ca,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ni(t,n,a,o,c,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ve(n)):t.value!==""+ve(n)&&(t.value=""+ve(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?bn(t,x,ve(n)):a!=null?bn(t,x,ve(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ve(T):t.removeAttribute("name")}function Be(t,n,a,o,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ve(a):"",n=n!=null?""+ve(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function bn(t,n,a){n==="number"&&Tn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function on(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ve(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function dn(t,n,a){if(n!=null&&(n=""+ve(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ve(a):""}function Sn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(dt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ve(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function xi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Md(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function yd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Md(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Md(t,f,n[f])}function Bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(t){return Hv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ic=null;function Fc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rr=null,wr=null;function Ed(t){var n=Ui(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ni(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+He(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[vn]||null;if(!c)throw Error(r(90));Ni(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Me(o)}break t;case"textarea":dn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(t,!!a.multiple,n,!1)}}}var Hc=!1;function Td(t,n,a){if(Hc)return t(n,a);Hc=!0;try{var o=t(n);return o}finally{if(Hc=!1,(Rr!==null||wr!==null)&&(Ol(),Rr&&(n=Rr,t=wr,wr=Rr=null,Ed(n),t)))for(n=0;n<t.length;n++)Ed(t[n])}}function Ns(t,n){var a=t.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(Pi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Gc=!1}var ua=null,Vc=null,Ko=null;function bd(){if(Ko)return Ko;var t,n=Vc,a=n.length,o,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===c[f-o];o++);return Ko=c.slice(t,1<o?1-o:void 0)}function Qo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function Ad(){return!1}function Bn(t){function n(a,o,c,f,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jo:Ad,this.isPropagationStopped=Ad,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Bn(Ya),Ps=g({},Ya,{view:0,detail:0}),Gv=Bn(Ps),kc,Xc,zs,tl=g({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(kc=t.screenX-zs.screenX,Xc=t.screenY-zs.screenY):Xc=kc=0,zs=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),Rd=Bn(tl),Vv=g({},tl,{dataTransfer:0}),kv=Bn(Vv),Xv=g({},Ps,{relatedTarget:0}),Wc=Bn(Xv),Wv=g({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=Bn(Wv),Yv=g({},Ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zv=Bn(Yv),jv=g({},Ya,{data:0}),wd=Bn(jv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Jv[t])?!!n[t]:!1}function qc(){return $v}var t0=g({},Ps,{key:function(t){if(t.key){var n=Kv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),e0=Bn(t0),n0=g({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=Bn(n0),i0=g({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),a0=Bn(i0),r0=g({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),s0=Bn(r0),o0=g({},tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),l0=Bn(o0),c0=g({},Ya,{newState:0,oldState:0}),u0=Bn(c0),f0=[9,13,27,32],Yc=Pi&&"CompositionEvent"in window,Bs=null;Pi&&"documentMode"in document&&(Bs=document.documentMode);var h0=Pi&&"TextEvent"in window&&!Bs,Dd=Pi&&(!Yc||Bs&&8<Bs&&11>=Bs),Ud=" ",Ld=!1;function Nd(t,n){switch(t){case"keyup":return f0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function d0(t,n){switch(t){case"compositionend":return Od(n);case"keypress":return n.which!==32?null:(Ld=!0,Ud);case"textInput":return t=n.data,t===Ud&&Ld?null:t;default:return null}}function p0(t,n){if(Cr)return t==="compositionend"||!Yc&&Nd(t,n)?(t=bd(),Ko=Vc=ua=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dd&&n.locale!=="ko"?null:n.data;default:return null}}var m0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!m0[t.type]:n==="textarea"}function zd(t,n,a,o){Rr?wr?wr.push(o):wr=[o]:Rr=o,n=Hl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Is=null,Fs=null;function g0(t){gg(t,0)}function el(t){var n=qa(t);if(Me(n))return t}function Bd(t,n){if(t==="change")return n}var Id=!1;if(Pi){var Zc;if(Pi){var jc="oninput"in document;if(!jc){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),jc=typeof Fd.oninput=="function"}Zc=jc}else Zc=!1;Id=Zc&&(!document.documentMode||9<document.documentMode)}function Hd(){Is&&(Is.detachEvent("onpropertychange",Gd),Fs=Is=null)}function Gd(t){if(t.propertyName==="value"&&el(Fs)){var n=[];zd(n,Fs,t,Fc(t)),Td(g0,n)}}function _0(t,n,a){t==="focusin"?(Hd(),Is=n,Fs=a,Is.attachEvent("onpropertychange",Gd)):t==="focusout"&&Hd()}function v0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return el(Fs)}function S0(t,n){if(t==="click")return el(n)}function x0(t,n){if(t==="input"||t==="change")return el(n)}function M0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:M0;function Hs(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!pe.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function Vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,n){var a=Vd(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vd(a)}}function Xd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Wd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Tn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Tn(t.document)}return n}function Kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var y0=Pi&&"documentMode"in document&&11>=document.documentMode,Dr=null,Qc=null,Gs=null,Jc=!1;function qd(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Dr==null||Dr!==Tn(o)||(o=Dr,"selectionStart"in o&&Kc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gs&&Hs(Gs,o)||(Gs=o,o=Hl(Qc,"onSelect"),0<o.length&&(n=new $o("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Dr)))}function Za(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ur={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},$c={},Yd={};Pi&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function ja(t){if($c[t])return $c[t];if(!Ur[t])return t;var n=Ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Yd)return $c[t]=n[a];return t}var Zd=ja("animationend"),jd=ja("animationiteration"),Kd=ja("animationstart"),E0=ja("transitionrun"),T0=ja("transitionstart"),b0=ja("transitioncancel"),Qd=ja("transitionend"),Jd=new Map,tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tu.push("scrollEnd");function ci(t,n){Jd.set(t,n),Li(n,[t])}var $d=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=$d.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ke(n)},$d.set(t,n),n)}return{value:t,source:n,stack:ke(n)}}var ti=[],Lr=0,eu=0;function nl(){for(var t=Lr,n=eu=Lr=0;n<t;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}f!==0&&tp(a,c,f)}}function il(t,n,a,o){ti[Lr++]=t,ti[Lr++]=n,ti[Lr++]=a,ti[Lr++]=o,eu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function nu(t,n,a,o){return il(t,n,a,o),al(t)}function Nr(t,n){return il(t,null,null,n),al(t)}function tp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Rt(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function al(t){if(50<ho)throw ho=0,cf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Or={};function A0(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new A0(t,n,a,o)}function iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ep(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function rl(t,n,a,o,c,f){var x=0;if(o=t,typeof t=="function")iu(t)&&(x=1);else if(typeof t=="string")x=wS(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Wn(31,a,n,c),t.elementType=D,t.lanes=f,t;case E:return Ka(a.children,c,f,n);case w:x=8,c|=24;break;case M:return t=Wn(12,a,n,c|2),t.elementType=M,t.lanes=f,t;case V:return t=Wn(13,a,n,c),t.elementType=V,t.lanes=f,t;case k:return t=Wn(19,a,n,c),t.elementType=k,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S:case N:x=10;break t;case z:x=9;break t;case U:x=11;break t;case F:x=14;break t;case K:x=16,o=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Wn(x,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function Ka(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function au(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function ru(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Pr=[],zr=0,sl=null,ol=0,ei=[],ni=0,Qa=null,Bi=1,Ii="";function Ja(t,n){Pr[zr++]=ol,Pr[zr++]=sl,sl=t,ol=n}function np(t,n,a){ei[ni++]=Bi,ei[ni++]=Ii,ei[ni++]=Qa,Qa=t;var o=Bi;t=Ii;var c=32-Rt(o)-1;o&=~(1<<c),a+=1;var f=32-Rt(n)+c;if(30<f){var x=c-c%5;f=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Bi=1<<32-Rt(n)+c|a<<c|o,Ii=f+t}else Bi=1<<f|a<<c|o,Ii=t}function su(t){t.return!==null&&(Ja(t,1),np(t,1,0))}function ou(t){for(;t===sl;)sl=Pr[--zr],Pr[zr]=null,ol=Pr[--zr],Pr[zr]=null;for(;t===Qa;)Qa=ei[--ni],ei[ni]=null,Ii=ei[--ni],ei[ni]=null,Bi=ei[--ni],ei[ni]=null}var Un=null,qe=null,Ae=!1,$a=null,Mi=!1,lu=Error(r(519));function tr(t){var n=Error(r(418,""));throw Xs($n(n,t)),lu}function ip(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[sn]=t,n[vn]=o,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)de(mo[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Be(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),We(n);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Sn(n,o.value,o.defaultValue,o.children),We(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||xg(n.textContent,a)?(o.popover!=null&&(de("beforetoggle",n),de("toggle",n)),o.onScroll!=null&&de("scroll",n),o.onScrollEnd!=null&&de("scrollend",n),o.onClick!=null&&(n.onclick=Gl),n=!0):n=!1,n||tr(t)}function ap(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Un=Un.return}}function Vs(t){if(t!==Un)return!1;if(!Ae)return ap(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bf(t.type,t.memoizedProps)),a=!a),a&&qe&&tr(t),ap(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){qe=fi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}qe=null}}else n===27?(n=qe,Aa(t.type)?(t=Cf,Cf=null,qe=t):qe=n):qe=Un?fi(t.stateNode.nextSibling):null;return!0}function ks(){qe=Un=null,Ae=!1}function rp(){var t=$a;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),$a=null),t}function Xs(t){$a===null?$a=[t]:$a.push(t)}var cu=W(null),er=null,Fi=null;function fa(t,n,a){gt(cu,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=cu.current,lt(cu)}function uu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function fu(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),uu(f.return,a,t),o||(x=null);break t}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),uu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Ws(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=c.type;Xn(c.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(c===bt.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Mo):t=[Mo])}c=c.return}t!==null&&fu(n,t,a,o),n.flags|=262144}function ll(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function nr(t){er=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return sp(er,t)}function cl(t,n){return er===null&&nr(t),sp(t,n)}function sp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(r(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var R0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},w0=s.unstable_scheduleCallback,C0=s.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new R0,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&w0(C0,function(){t.controller.abort()})}var Ys=null,du=0,Br=0,Ir=null;function D0(t,n){if(Ys===null){var a=Ys=[];du=0,Br=gf(),Ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return du++,n.then(op,op),n}function op(){if(--du===0&&Ys!==null){Ir!==null&&(Ir.status="fulfilled");var t=Ys;Ys=null,Br=0,Ir=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function U0(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var lp=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&D0(t,n),lp!==null&&lp(t,n)};var ir=W(null);function pu(){var t=ir.current;return t!==null?t:Ge.pooledCache}function ul(t,n){n===null?gt(ir,ir.current):gt(ir,n.pool)}function cp(){var t=pu();return t===null?null:{parent:ln._currentValue,pool:t}}var Zs=Error(r(460)),up=Error(r(474)),fl=Error(r(542)),mu={then:function(){}};function fp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hl(){}function hp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(hl,hl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pp(t),t;default:if(typeof n.status=="string")n.then(hl,hl);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pp(t),t}throw js=n,Zs}}var js=null;function dp(){if(js===null)throw Error(r(459));var t=js;return js=null,t}function pp(t){if(t===Zs||t===fl)throw Error(r(483))}var ha=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=al(t),tp(t,null,a),n}return il(t,o,n,a),al(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ie(t,a)}}function vu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Su=!1;function Qs(){if(Su){var t=Ir;if(t!==null)throw t}}function Js(t,n,a,o){Su=!1;var c=t.updateQueue;ha=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var O=T,$=O.next;O.next=null,x===null?f=$:x.next=$,x=O;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==x&&(T===null?ht.firstBaseUpdate=$:T.next=$,ht.lastBaseUpdate=O))}if(f!==null){var vt=c.baseState;x=0,ht=$=O=null,T=f;do{var et=T.lane&-536870913,nt=et!==T.lane;if(nt?(xe&et)===et:(o&et)===et){et!==0&&et===Br&&(Su=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Jt=t,Zt=T;et=n;var Pe=a;switch(Zt.tag){case 1:if(Jt=Zt.payload,typeof Jt=="function"){vt=Jt.call(Pe,vt,et);break t}vt=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=Zt.payload,et=typeof Jt=="function"?Jt.call(Pe,vt,et):Jt,et==null)break t;vt=g({},vt,et);break t;case 2:ha=!0}}et=T.callback,et!==null&&(t.flags|=64,nt&&(t.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[et]:nt.push(et))}else nt={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?($=ht=nt,O=vt):ht=ht.next=nt,x|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;nt=T,T=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);ht===null&&(O=vt),c.baseState=O,c.firstBaseUpdate=$,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),ya|=x,t.lanes=x,t.memoizedState=vt}}function mp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function gp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)mp(a[t],n)}var Fr=W(null),dl=W(0);function _p(t,n){t=Yi,gt(dl,t),gt(Fr,n),Yi=t|n.baseLanes}function xu(){gt(dl,Yi),gt(Fr,Fr.current)}function Mu(){Yi=dl.current,lt(Fr),lt(dl)}var ma=0,ce=null,Ne=null,en=null,pl=!1,Hr=!1,ar=!1,ml=0,$s=0,Gr=null,L0=0;function Ke(){throw Error(r(321))}function yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Eu(t,n,a,o,c,f){return ma=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?tm:em,ar=!1,f=a(o,c),ar=!1,Hr&&(f=Sp(n,a,o,c)),vp(t),f}function vp(t){P.H=Ml;var n=Ne!==null&&Ne.next!==null;if(ma=0,en=Ne=ce=null,pl=!1,$s=0,Gr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&ll(t)&&(pn=!0))}function Sp(t,n,a,o){ce=t;var c=0;do{if(Hr&&(Gr=null),$s=0,Hr=!1,25<=c)throw Error(r(301));if(c+=1,en=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=F0,f=n(a,o)}while(Hr);return f}function N0(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(ce.flags|=1024),n}function Tu(){var t=ml!==0;return ml=0,t}function bu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Au(t){if(pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}pl=!1}ma=0,en=Ne=ce=null,Hr=!1,$s=ml=0,Gr=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ce.memoizedState=en=t:en=en.next=t,en}function nn(){if(Ne===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=en===null?ce.memoizedState:en.next;if(n!==null)en=n,Ne=t;else{if(t===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},en===null?ce.memoizedState=en=t:en=en.next=t}return en}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,Gr===null&&(Gr=[]),t=hp(Gr,t,n),n=ce,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?tm:em),t}function gl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===N)return An(t)}throw Error(r(438,String(t)))}function wu(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ru(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Gi(t,n){return typeof n=="function"?n(t):n}function _l(t){var n=nn();return Cu(n,Ne,t)}function Cu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=x=null,O=null,$=n,ht=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(xe&vt)===vt:(ma&vt)===vt){var et=$.revertLane;if(et===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===Br&&(ht=!0);else if((ma&et)===et){$=$.next,et===Br&&(ht=!0);continue}else vt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(T=O=vt,x=f):O=O.next=vt,ce.lanes|=et,ya|=et;vt=$.action,ar&&a(f,vt),f=$.hasEagerState?$.eagerState:a(f,vt)}else et={lane:vt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(T=O=et,x=f):O=O.next=et,ce.lanes|=vt,ya|=vt;$=$.next}while($!==null&&$!==n);if(O===null?x=f:O.next=T,!Xn(f,t.memoizedState)&&(pn=!0,ht&&(a=Ir,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=O,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Du(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Xn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function xp(t,n,a){var o=ce,c=nn(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Xn((Ne||c).memoizedState,a);x&&(c.memoizedState=a,pn=!0),c=c.queue;var T=Ep.bind(null,o,c,t);if(eo(2048,8,T,[t]),c.getSnapshot!==n||x||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Vr(9,vl(),yp.bind(null,o,c,a,n),null),Ge===null)throw Error(r(349));f||(ma&124)!==0||Mp(o,n,a)}return a}function Mp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Ru(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function yp(t,n,a,o){n.value=a,n.getSnapshot=o,Tp(n)&&bp(t)}function Ep(t,n,a){return a(function(){Tp(n)&&bp(t)})}function Tp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function bp(t){var n=Nr(t,2);n!==null&&Kn(n,t,2)}function Uu(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),ar){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function Ap(t,n,a,o){return t.baseState=a,Cu(t,Ne,typeof o=="function"?o:Gi)}function O0(t,n,a,o,c){if(xl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Rp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Rp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var T=a(c,o),O=P.S;O!==null&&O(x,T),wp(t,n,T)}catch($){Lu(t,n,$)}finally{P.T=f}}else try{f=a(c,o),wp(t,n,f)}catch($){Lu(t,n,$)}}function wp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Cp(t,n,o)},function(o){return Lu(t,n,o)}):Cp(t,n,a)}function Cp(t,n,a){n.status="fulfilled",n.value=a,Dp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Rp(t,a)))}function Lu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Dp(n),n=n.next;while(n!==o)}t.action=null}function Dp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Up(t,n){return n}function Lp(t,n){if(Ae){var a=Ge.formState;if(a!==null){t:{var o=ce;if(Ae){if(qe){e:{for(var c=qe,f=Mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qe=fi(c.nextSibling),o=c.data==="F!";break t}}tr(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Up,lastRenderedState:n},a.queue=o,a=Qp.bind(null,ce,o),o.dispatch=a,o=Uu(!1),f=Bu.bind(null,ce,!1,o.queue),o=In(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=O0.bind(null,ce,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Np(t){var n=nn();return Op(n,Ne,t)}function Op(t,n,a){if(n=Cu(t,n,Up)[0],t=_l(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=to(n)}catch(x){throw x===Zs?fl:x}else o=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Vr(9,vl(),P0.bind(null,c,a),null)),[o,f,t]}function P0(t,n){t.action=n}function Pp(t){var n=nn(),a=Ne;if(a!==null)return Op(n,a,t);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Vr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Ru(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function vl(){return{destroy:void 0,resource:void 0}}function zp(){return nn().memoizedState}function Sl(t,n,a,o){var c=In();o=o===void 0?null:o,ce.flags|=t,c.memoizedState=Vr(1|n,vl(),a,o)}function eo(t,n,a,o){var c=nn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ne!==null&&o!==null&&yu(o,Ne.memoizedState.deps)?c.memoizedState=Vr(n,f,a,o):(ce.flags|=t,c.memoizedState=Vr(1|n,f,a,o))}function Bp(t,n){Sl(8390656,8,t,n)}function Ip(t,n){eo(2048,8,t,n)}function Fp(t,n){return eo(4,2,t,n)}function Hp(t,n){return eo(4,4,t,n)}function Gp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Vp(t,n,a){a=a!=null?a.concat([t]):null,eo(4,4,Gp.bind(null,n,t),a)}function Nu(){}function kp(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&yu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Xp(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&yu(n,o[1]))return o[0];if(o=t(),ar){At(!0);try{t()}finally{At(!1)}}return a.memoizedState=[o,n],o}function Ou(t,n,a){return a===void 0||(ma&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Ym(),ce.lanes|=t,ya|=t,a)}function Wp(t,n,a,o){return Xn(a,n)?a:Fr.current!==null?(t=Ou(t,a,o),Xn(t,n)||(pn=!0),t):(ma&42)===0?(pn=!0,t.memoizedState=a):(t=Ym(),ce.lanes|=t,ya|=t,n)}function qp(t,n,a,o,c){var f=Q.p;Q.p=f!==0&&8>f?f:8;var x=P.T,T={};P.T=T,Bu(t,!1,n,a);try{var O=c(),$=P.S;if($!==null&&$(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ht=U0(O,o);no(t,n,ht,jn(t))}else no(t,n,o,jn(t))}catch(vt){no(t,n,{then:function(){},status:"rejected",reason:vt},jn())}finally{Q.p=f,P.T=x}}function z0(){}function Pu(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Yp(t).queue;qp(t,c,n,B,a===null?z0:function(){return Zp(t),a(o)})}function Yp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:B},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zp(t){var n=Yp(t).next.queue;no(t,n,{},jn())}function zu(){return An(Mo)}function jp(){return nn().memoizedState}function Kp(){return nn().memoizedState}function B0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();t=da(a);var o=pa(n,t,a);o!==null&&(Kn(o,n,a),Ks(o,n,a)),n={cache:hu()},t.payload=n;return}n=n.return}}function I0(t,n,a){var o=jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},xl(t)?Jp(n,a):(a=nu(t,n,a,o),a!==null&&(Kn(a,t,o),$p(a,n,o)))}function Qp(t,n,a){var o=jn();no(t,n,a,o)}function no(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(xl(t))Jp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,Xn(T,x))return il(t,n,c,0),Ge===null&&nl(),!1}catch{}finally{}if(a=nu(t,n,c,o),a!==null)return Kn(a,t,o),$p(a,n,o),!0}return!1}function Bu(t,n,a,o){if(o={lane:2,revertLane:gf(),action:o,hasEagerState:!1,eagerState:null,next:null},xl(t)){if(n)throw Error(r(479))}else n=nu(t,a,o,2),n!==null&&Kn(n,t,2)}function xl(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function Jp(t,n){Hr=pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function $p(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ie(t,a)}}var Ml={readContext:An,use:gl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},tm={readContext:An,use:gl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Bp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Sl(4194308,4,Gp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Sl(4194308,4,t,n)},useInsertionEffect:function(t,n){Sl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(ar){At(!0);try{t()}finally{At(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var c=a(n);if(ar){At(!0);try{a(n)}finally{At(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=I0.bind(null,ce,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Uu(t);var n=t.queue,a=Qp.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Nu,useDeferredValue:function(t,n){var a=In();return Ou(a,t,n)},useTransition:function(){var t=Uu(!1);return t=qp.bind(null,ce,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ce,c=In();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ge===null)throw Error(r(349));(xe&124)!==0||Mp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Bp(Ep.bind(null,o,f,t),[t]),o.flags|=2048,Vr(9,vl(),yp.bind(null,o,f,a,n),null),a},useId:function(){var t=In(),n=Ge.identifierPrefix;if(Ae){var a=Ii,o=Bi;a=(o&~(1<<32-Rt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=ml++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=L0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:zu,useFormState:Lp,useActionState:Lp,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bu.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:wu,useCacheRefresh:function(){return In().memoizedState=B0.bind(null,ce)}},em={readContext:An,use:gl,useCallback:kp,useContext:An,useEffect:Ip,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Hp,useMemo:Xp,useReducer:_l,useRef:zp,useState:function(){return _l(Gi)},useDebugValue:Nu,useDeferredValue:function(t,n){var a=nn();return Wp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=_l(Gi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:xp,useId:jp,useHostTransitionStatus:zu,useFormState:Np,useActionState:Np,useOptimistic:function(t,n){var a=nn();return Ap(a,Ne,t,n)},useMemoCache:wu,useCacheRefresh:Kp},F0={readContext:An,use:gl,useCallback:kp,useContext:An,useEffect:Ip,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Hp,useMemo:Xp,useReducer:Du,useRef:zp,useState:function(){return Du(Gi)},useDebugValue:Nu,useDeferredValue:function(t,n){var a=nn();return Ne===null?Ou(a,t,n):Wp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=Du(Gi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:xp,useId:jp,useHostTransitionStatus:zu,useFormState:Pp,useActionState:Pp,useOptimistic:function(t,n){var a=nn();return Ne!==null?Ap(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:wu,useCacheRefresh:Kp},kr=null,io=0;function yl(t){var n=io;return io+=1,kr===null&&(kr=[]),hp(kr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function El(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function nm(t){var n=t._init;return n(t._payload)}function im(t){function n(q,H){if(t){var J=q.deletions;J===null?(q.deletions=[H],q.flags|=16):J.push(H)}}function a(q,H){if(!t)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function o(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function c(q,H){return q=zi(q,H),q.index=0,q.sibling=null,q}function f(q,H,J){return q.index=J,t?(J=q.alternate,J!==null?(J=J.index,J<H?(q.flags|=67108866,H):J):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function x(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function T(q,H,J,mt){return H===null||H.tag!==6?(H=au(J,q.mode,mt),H.return=q,H):(H=c(H,J),H.return=q,H)}function O(q,H,J,mt){var Ht=J.type;return Ht===E?ht(q,H,J.props.children,mt,J.key):H!==null&&(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===K&&nm(Ht)===H.type)?(H=c(H,J.props),ao(H,J),H.return=q,H):(H=rl(J.type,J.key,J.props,null,q.mode,mt),ao(H,J),H.return=q,H)}function $(q,H,J,mt){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=ru(J,q.mode,mt),H.return=q,H):(H=c(H,J.children||[]),H.return=q,H)}function ht(q,H,J,mt,Ht){return H===null||H.tag!==7?(H=Ka(J,q.mode,mt,Ht),H.return=q,H):(H=c(H,J),H.return=q,H)}function vt(q,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=au(""+H,q.mode,J),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case v:return J=rl(H.type,H.key,H.props,null,q.mode,J),ao(J,H),J.return=q,J;case y:return H=ru(H,q.mode,J),H.return=q,H;case K:var mt=H._init;return H=mt(H._payload),vt(q,H,J)}if(dt(H)||ot(H))return H=Ka(H,q.mode,J,null),H.return=q,H;if(typeof H.then=="function")return vt(q,yl(H),J);if(H.$$typeof===N)return vt(q,cl(q,H),J);El(q,H)}return null}function et(q,H,J,mt){var Ht=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:T(q,H,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return J.key===Ht?O(q,H,J,mt):null;case y:return J.key===Ht?$(q,H,J,mt):null;case K:return Ht=J._init,J=Ht(J._payload),et(q,H,J,mt)}if(dt(J)||ot(J))return Ht!==null?null:ht(q,H,J,mt,null);if(typeof J.then=="function")return et(q,H,yl(J),mt);if(J.$$typeof===N)return et(q,H,cl(q,J),mt);El(q,J)}return null}function nt(q,H,J,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get(J)||null,T(H,q,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case v:return q=q.get(mt.key===null?J:mt.key)||null,O(H,q,mt,Ht);case y:return q=q.get(mt.key===null?J:mt.key)||null,$(H,q,mt,Ht);case K:var ue=mt._init;return mt=ue(mt._payload),nt(q,H,J,mt,Ht)}if(dt(mt)||ot(mt))return q=q.get(J)||null,ht(H,q,mt,Ht,null);if(typeof mt.then=="function")return nt(q,H,J,yl(mt),Ht);if(mt.$$typeof===N)return nt(q,H,J,cl(H,mt),Ht);El(H,mt)}return null}function Jt(q,H,J,mt){for(var Ht=null,ue=null,Vt=H,Kt=H=0,gn=null;Vt!==null&&Kt<J.length;Kt++){Vt.index>Kt?(gn=Vt,Vt=null):gn=Vt.sibling;var Te=et(q,Vt,J[Kt],mt);if(Te===null){Vt===null&&(Vt=gn);break}t&&Vt&&Te.alternate===null&&n(q,Vt),H=f(Te,H,Kt),ue===null?Ht=Te:ue.sibling=Te,ue=Te,Vt=gn}if(Kt===J.length)return a(q,Vt),Ae&&Ja(q,Kt),Ht;if(Vt===null){for(;Kt<J.length;Kt++)Vt=vt(q,J[Kt],mt),Vt!==null&&(H=f(Vt,H,Kt),ue===null?Ht=Vt:ue.sibling=Vt,ue=Vt);return Ae&&Ja(q,Kt),Ht}for(Vt=o(Vt);Kt<J.length;Kt++)gn=nt(Vt,q,Kt,J[Kt],mt),gn!==null&&(t&&gn.alternate!==null&&Vt.delete(gn.key===null?Kt:gn.key),H=f(gn,H,Kt),ue===null?Ht=gn:ue.sibling=gn,ue=gn);return t&&Vt.forEach(function(Ua){return n(q,Ua)}),Ae&&Ja(q,Kt),Ht}function Zt(q,H,J,mt){if(J==null)throw Error(r(151));for(var Ht=null,ue=null,Vt=H,Kt=H=0,gn=null,Te=J.next();Vt!==null&&!Te.done;Kt++,Te=J.next()){Vt.index>Kt?(gn=Vt,Vt=null):gn=Vt.sibling;var Ua=et(q,Vt,Te.value,mt);if(Ua===null){Vt===null&&(Vt=gn);break}t&&Vt&&Ua.alternate===null&&n(q,Vt),H=f(Ua,H,Kt),ue===null?Ht=Ua:ue.sibling=Ua,ue=Ua,Vt=gn}if(Te.done)return a(q,Vt),Ae&&Ja(q,Kt),Ht;if(Vt===null){for(;!Te.done;Kt++,Te=J.next())Te=vt(q,Te.value,mt),Te!==null&&(H=f(Te,H,Kt),ue===null?Ht=Te:ue.sibling=Te,ue=Te);return Ae&&Ja(q,Kt),Ht}for(Vt=o(Vt);!Te.done;Kt++,Te=J.next())Te=nt(Vt,q,Kt,Te.value,mt),Te!==null&&(t&&Te.alternate!==null&&Vt.delete(Te.key===null?Kt:Te.key),H=f(Te,H,Kt),ue===null?Ht=Te:ue.sibling=Te,ue=Te);return t&&Vt.forEach(function(HS){return n(q,HS)}),Ae&&Ja(q,Kt),Ht}function Pe(q,H,J,mt){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case v:t:{for(var Ht=J.key;H!==null;){if(H.key===Ht){if(Ht=J.type,Ht===E){if(H.tag===7){a(q,H.sibling),mt=c(H,J.props.children),mt.return=q,q=mt;break t}}else if(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===K&&nm(Ht)===H.type){a(q,H.sibling),mt=c(H,J.props),ao(mt,J),mt.return=q,q=mt;break t}a(q,H);break}else n(q,H);H=H.sibling}J.type===E?(mt=Ka(J.props.children,q.mode,mt,J.key),mt.return=q,q=mt):(mt=rl(J.type,J.key,J.props,null,q.mode,mt),ao(mt,J),mt.return=q,q=mt)}return x(q);case y:t:{for(Ht=J.key;H!==null;){if(H.key===Ht)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(q,H.sibling),mt=c(H,J.children||[]),mt.return=q,q=mt;break t}else{a(q,H);break}else n(q,H);H=H.sibling}mt=ru(J,q.mode,mt),mt.return=q,q=mt}return x(q);case K:return Ht=J._init,J=Ht(J._payload),Pe(q,H,J,mt)}if(dt(J))return Jt(q,H,J,mt);if(ot(J)){if(Ht=ot(J),typeof Ht!="function")throw Error(r(150));return J=Ht.call(J),Zt(q,H,J,mt)}if(typeof J.then=="function")return Pe(q,H,yl(J),mt);if(J.$$typeof===N)return Pe(q,H,cl(q,J),mt);El(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(q,H.sibling),mt=c(H,J),mt.return=q,q=mt):(a(q,H),mt=au(J,q.mode,mt),mt.return=q,q=mt),x(q)):a(q,H)}return function(q,H,J,mt){try{io=0;var Ht=Pe(q,H,J,mt);return kr=null,Ht}catch(Vt){if(Vt===Zs||Vt===fl)throw Vt;var ue=Wn(29,Vt,null,q.mode);return ue.lanes=mt,ue.return=q,ue}finally{}}}var Xr=im(!0),am=im(!1),ii=W(null),yi=null;function ga(t){var n=t.alternate;gt(cn,cn.current&1),gt(ii,t),yi===null&&(n===null||Fr.current!==null||n.memoizedState!==null)&&(yi=t)}function rm(t){if(t.tag===22){if(gt(cn,cn.current),gt(ii,t),yi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(yi=t)}}else _a()}function _a(){gt(cn,cn.current),gt(ii,ii.current)}function Vi(t){lt(ii),yi===t&&(yi=null),lt(cn)}var cn=W(0);function Tl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||wf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Iu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fu={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=jn(),c=da(o);c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,o),n!==null&&(Kn(n,t,o),Ks(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=jn(),c=da(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,o),n!==null&&(Kn(n,t,o),Ks(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jn(),o=da(a);o.tag=2,n!=null&&(o.callback=n),n=pa(t,o,a),n!==null&&(Kn(n,t,a),Ks(n,t,a))}};function sm(t,n,a,o,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!Hs(a,o)||!Hs(c,f):!0}function om(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Fu.enqueueReplaceState(n,n.state,null)}function rr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function lm(t){bl(t)}function cm(t){console.error(t)}function um(t){bl(t)}function Al(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function fm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(t,n)},a}function hm(t){return t=da(t),t.tag=3,t}function dm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){fm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){fm(n,a,o),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function H0(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 13:return yi===null?ff():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===mu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),df(t,o,c)),!1;case 22:return a.flags|=65536,o===mu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),df(t,o,c)),!1}throw Error(r(435,a.tag))}return df(t,o,c),ff(),!1}if(Ae)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==lu&&(t=Error(r(422),{cause:o}),Xs($n(t,a)))):(o!==lu&&(n=Error(r(423),{cause:o}),Xs($n(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=$n(o,a),c=Hu(t.stateNode,o,c),vu(t,c),Ye!==4&&(Ye=2)),!1;var f=Error(r(520),{cause:o});if(f=$n(f,a),fo===null?fo=[f]:fo.push(f),Ye!==4&&(Ye=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Hu(a.stateNode,o,t),vu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=hm(c),dm(c,t,a,o),vu(a,c),!1}a=a.return}while(a!==null);return!1}var pm=Error(r(461)),pn=!1;function xn(t,n,a,o){n.child=t===null?am(n,null,a,o):Xr(n,t.child,a,o)}function mm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var T in o)T!=="ref"&&(x[T]=o[T])}else x=o;return nr(n),o=Eu(t,n,a,x,f,c),T=Tu(),t!==null&&!pn?(bu(t,n,c),ki(t,n,c)):(Ae&&T&&su(n),n.flags|=1,xn(t,n,o,c),n.child)}function gm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_m(t,n,f,o,c)):(t=rl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hs,a(x,o)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=zi(f,o),t.ref=n.ref,t.return=n,n.child=t}function _m(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Hs(f,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=f,Zu(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Gu(t,n,a,o,c)}function vm(t,n,a){var o=n.pendingProps,c=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Sm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ul(n,f!==null?f.cachePool:null),f!==null?_p(n,f):xu(),rm(n);else return n.lanes=n.childLanes=536870912,Sm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ul(n,f.cachePool),_p(n,f),_a(),n.memoizedState=null):(t!==null&&ul(n,null),xu(),_a());return xn(t,n,c,a),n.child}function Sm(t,n,a,o){var c=pu();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&ul(n,null),xu(),rm(n),t!==null&&Ws(t,n,o,!0),null}function Rl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Gu(t,n,a,o,c){return nr(n),a=Eu(t,n,a,o,void 0,c),o=Tu(),t!==null&&!pn?(bu(t,n,c),ki(t,n,c)):(Ae&&o&&su(n),n.flags|=1,xn(t,n,a,c),n.child)}function xm(t,n,a,o,c,f){return nr(n),n.updateQueue=null,a=Sp(n,o,a,c),vp(t),o=Tu(),t!==null&&!pn?(bu(t,n,f),ki(t,n,f)):(Ae&&o&&su(n),n.flags|=1,xn(t,n,a,f),n.child)}function Mm(t,n,a,o,c){if(nr(n),n.stateNode===null){var f=Or,x=a.contextType;typeof x=="object"&&x!==null&&(f=An(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Fu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},gu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?An(x):Or,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Iu(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Fu.enqueueReplaceState(f,f.state,null),Js(n,o,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,O=rr(a,T);f.props=O;var $=f.context,ht=a.contextType;x=Or,typeof ht=="object"&&ht!==null&&(x=An(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==x)&&om(n,f,o,x),ha=!1;var et=n.memoizedState;f.state=et,Js(n,o,f,c),Qs(),$=n.memoizedState,T||et!==$||ha?(typeof vt=="function"&&(Iu(n,a,vt,o),$=n.memoizedState),(O=ha||sm(n,a,O,o,et,$,x))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=x,o=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,_u(t,n),x=n.memoizedProps,ht=rr(a,x),f.props=ht,vt=n.pendingProps,et=f.context,$=a.contextType,O=Or,typeof $=="object"&&$!==null&&(O=An($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==vt||et!==O)&&om(n,f,o,O),ha=!1,et=n.memoizedState,f.state=et,Js(n,o,f,c),Qs();var nt=n.memoizedState;x!==vt||et!==nt||ha||t!==null&&t.dependencies!==null&&ll(t.dependencies)?(typeof T=="function"&&(Iu(n,a,T,o),nt=n.memoizedState),(ht=ha||sm(n,a,ht,o,et,nt,O)||t!==null&&t.dependencies!==null&&ll(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,nt,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,nt,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=O,o=ht):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Rl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Xr(n,t.child,null,c),n.child=Xr(n,null,a,c)):xn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function ym(t,n,a,o){return ks(),n.flags|=256,xn(t,n,a,o),n.child}var Vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(t){return{baseLanes:t,cachePool:cp()}}function Xu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function Em(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(c?ga(n):_a(),Ae){var T=qe,O;if(O=T){t:{for(O=T,T=Mi;O.nodeType!==8;){if(!T){T=null;break t}if(O=fi(O.nextSibling),O===null){T=null;break t}}T=O}T!==null?(n.memoizedState={dehydrated:T,treeContext:Qa!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},O=Wn(18,null,null,0),O.stateNode=T,O.return=n,n.child=O,Un=n,qe=null,O=!0):O=!1}O||tr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return wf(T)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return T=o.children,o=o.fallback,c?(_a(),c=n.mode,T=wl({mode:"hidden",children:T},c),o=Ka(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=ku(a),c.childLanes=Xu(t,x,a),n.memoizedState=Vu,o):(ga(n),Wu(n,T))}if(O=t.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=qu(t,n,a)):n.memoizedState!==null?(_a(),n.child=t.child,n.flags|=128,n=null):(_a(),c=o.fallback,T=n.mode,o=wl({mode:"visible",children:o.children},T),c=Ka(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Xr(n,t.child,null,a),o=n.child,o.memoizedState=ku(a),o.childLanes=Xu(t,x,a),n.memoizedState=Vu,n=c);else if(ga(n),wf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var $=x.dgst;x=$,o=Error(r(419)),o.stack="",o.digest=x,Xs({value:o,source:null,stack:null}),n=qu(t,n,a)}else if(pn||Ws(t,n,a,!1),x=(a&t.childLanes)!==0,pn||x){if(x=Ge,x!==null&&(o=a&-a,o=(o&42)!==0?1:Fe(o),o=(o&(x.suspendedLanes|a))!==0?0:o,o!==0&&o!==O.retryLane))throw O.retryLane=o,Nr(t,o),Kn(x,t,o),pm;T.data==="$?"||ff(),n=qu(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,qe=fi(T.nextSibling),Un=n,Ae=!0,$a=null,Mi=!1,t!==null&&(ei[ni++]=Bi,ei[ni++]=Ii,ei[ni++]=Qa,Bi=t.id,Ii=t.overflow,Qa=n),n=Wu(n,o.children),n.flags|=4096);return n}return c?(_a(),c=o.fallback,T=n.mode,O=t.child,$=O.sibling,o=zi(O,{mode:"hidden",children:o.children}),o.subtreeFlags=O.subtreeFlags&65011712,$!==null?c=zi($,c):(c=Ka(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=t.child.memoizedState,T===null?T=ku(a):(O=T.cachePool,O!==null?($=ln._currentValue,O=O.parent!==$?{parent:$,pool:$}:O):O=cp(),T={baseLanes:T.baseLanes|a,cachePool:O}),c.memoizedState=T,c.childLanes=Xu(t,x,a),n.memoizedState=Vu,o):(ga(n),a=t.child,t=a.sibling,a=zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Wu(t,n){return n=wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function wl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function qu(t,n,a){return Xr(n,t.child,null,a),t=Wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Tm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),uu(t.return,n,a)}function Yu(t,n,a,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function bm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(xn(t,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tm(t,a,n);else if(t.tag===19)Tm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(gt(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Tl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Yu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Tl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Yu(n,!0,a,null,f);break;case"together":Yu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ll(t)))}function G0(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),fa(n,ln,t.memoizedState.cache),ks();break;case 27:case 5:Ot(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Em(t,n,a):(ga(n),t=ki(t,n,a),t!==null?t.sibling:null);ga(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ws(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return bm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),gt(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,vm(t,n,a);case 24:fa(n,ln,t.memoizedState.cache)}return ki(t,n,a)}function Am(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Zu(t,a)&&(n.flags&128)===0)return pn=!1,G0(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Ae&&(n.flags&1048576)!==0&&np(n,ol,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")iu(o)?(t=rr(o,t),n.tag=1,n=Mm(null,n,o,t,a)):(n.tag=0,n=Gu(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===U){n.tag=11,n=mm(null,n,o,t,a);break t}else if(c===F){n.tag=14,n=gm(null,n,o,t,a);break t}}throw n=St(o)||o,Error(r(306,n,""))}}return n;case 0:return Gu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=rr(o,n.pendingProps),Mm(t,n,o,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,_u(t,n),Js(n,o,null,a);var x=n.memoizedState;if(o=x.cache,fa(n,ln,o),o!==f.cache&&fu(n,[ln],a,!0),Qs(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ym(t,n,o,a);break t}else if(o!==c){c=$n(Error(r(424)),n),Xs(c),n=ym(t,n,o,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=fi(t.firstChild),Un=n,Ae=!0,$a=null,Mi=!0,a=am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ks(),o===c){n=ki(t,n,a);break t}xn(t,n,o,a)}n=n.child}return n;case 26:return Rl(t,n),t===null?(a=Dg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,t=n.pendingProps,o=Vl(xt.current).createElement(a),o[sn]=n,o[vn]=t,yn(o,a,t),tn(o),n.stateNode=o):n.memoizedState=Dg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ot(n),t===null&&Ae&&(o=n.stateNode=Rg(n.type,n.pendingProps,xt.current),Un=n,Mi=!0,c=qe,Aa(n.type)?(Cf=c,qe=fi(o.firstChild)):qe=c),xn(t,n,n.pendingProps.children,a),Rl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((c=o=qe)&&(o=mS(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Un=n,qe=fi(o.firstChild),Mi=!1,c=!0):c=!1),c||tr(n)),Ot(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,bf(c,f)?o=null:x!==null&&bf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Eu(t,n,N0,null,null,a),Mo._currentValue=c),Rl(t,n),xn(t,n,o,a),n.child;case 6:return t===null&&Ae&&((t=a=qe)&&(a=gS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Un=n,qe=null,t=!0):t=!1),t||tr(n)),null;case 13:return Em(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Xr(n,null,o,a):xn(t,n,o,a),n.child;case 11:return mm(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,fa(n,n.type,o.value),xn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,nr(n),c=An(c),o=o(c),n.flags|=1,xn(t,n,o,a),n.child;case 14:return gm(t,n,n.type,n.pendingProps,a);case 15:return _m(t,n,n.type,n.pendingProps,a);case 19:return bm(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=wl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=zi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return vm(t,n,a);case 24:return nr(n),o=An(ln),t===null?(c=pu(),c===null&&(c=Ge,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},gu(n),fa(n,ln,c)):((t.lanes&a)!==0&&(_u(t,n),Js(n,null,null,a),Qs()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,ln,o)):(o=f.cache,fa(n,ln,o),o!==c.cache&&fu(n,[ln],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(t){t.flags|=4}function Rm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pg(n)){if(n=ii.current,n!==null&&((xe&4194048)===xe?yi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==yi))throw js=mu,up;t.flags|=8192}}function Cl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Lt():536870912,t.lanes|=n,Zr|=n)}function ro(t,n){if(!Ae)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function V0(t,n,a){var o=n.pendingProps;switch(ou(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Hi(ln),ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vs(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rp())),Xe(n),null;case 26:return a=n.memoizedState,t===null?(Xi(n),a!==null?(Xe(n),Rm(n,a)):(Xe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Xi(n),Xe(n),Rm(n,a)):(Xe(n),n.flags&=-16777217):(t.memoizedProps!==o&&Xi(n),Xe(n),n.flags&=-16777217),null;case 27:ee(n),a=xt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}t=Y.current,Vs(n)?ip(n):(t=Rg(c,o,a),n.stateNode=t,Xi(n))}return Xe(n),null;case 5:if(ee(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(t=Y.current,Vs(n))ip(n);else{switch(c=Vl(xt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[sn]=n,t[vn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(yn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Xi(n)}}return Xe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Xi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=xt.current,Vs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Un,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||xg(t.nodeValue,a)),t||tr(n)}else t=Vl(t).createTextNode(o),t[sn]=n,n.stateNode=t}return Xe(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Vs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=rp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Cl(n,n.updateQueue),Xe(n),null;case 4:return ae(),t===null&&xf(n.stateNode.containerInfo),Xe(n),null;case 10:return Hi(n.type),Xe(n),null;case 19:if(lt(cn),c=n.memoizedState,c===null)return Xe(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)ro(c,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Tl(t),f!==null){for(n.flags|=128,ro(c,!1),t=f.updateQueue,n.updateQueue=t,Cl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ep(a,t),a=a.sibling;return gt(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ne()>Ll&&(n.flags|=128,o=!0,ro(c,!1),n.lanes=4194304)}else{if(!o)if(t=Tl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Cl(n,t),ro(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return Xe(n),null}else 2*ne()-c.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,o=!0,ro(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ne(),n.sibling=null,t=cn.current,gt(cn,o?t&1|2:t&1),n):(Xe(n),null);case 22:case 23:return Vi(n),Mu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Cl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&lt(ir),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(ln),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function k0(t,n){switch(ou(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(ln),ae(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ee(n),null;case 13:if(Vi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ks()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return lt(cn),null;case 4:return ae(),null;case 10:return Hi(n.type),null;case 22:case 23:return Vi(n),Mu(),t!==null&&lt(ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(ln),null;case 25:return null;default:return null}}function wm(t,n){switch(ou(n),n.tag){case 3:Hi(ln),ae();break;case 26:case 27:case 5:ee(n);break;case 4:ae();break;case 13:Vi(n);break;case 19:lt(cn);break;case 10:Hi(n.type);break;case 22:case 23:Vi(n),Mu(),t!==null&&lt(ir);break;case 24:Hi(ln)}}function so(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function va(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var x=o.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var O=a,$=T;try{$()}catch(ht){Ie(c,O,ht)}}}o=o.next}while(o!==f)}}catch(ht){Ie(n,n.return,ht)}}function Cm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{gp(n,a)}catch(o){Ie(t,t.return,o)}}}function Dm(t,n,a){a.props=rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(t,n,o)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Ie(t,n,c)}}function Ei(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function Um(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function ju(t,n,a){try{var o=t.stateNode;uS(o,t.type,a,n),o[vn]=n}catch(c){Ie(t,t.return,c)}}function Lm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function Ku(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Lm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gl));else if(o!==4&&(o===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Qu(t,n,a),t=t.sibling;t!==null;)Qu(t,n,a),t=t.sibling}function Dl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Dl(t,n,a),t=t.sibling;t!==null;)Dl(t,n,a),t=t.sibling}function Nm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,o,a),n[sn]=t,n[vn]=a}catch(f){Ie(t,t.return,f)}}var Wi=!1,Qe=!1,Ju=!1,Om=typeof WeakSet=="function"?WeakSet:Set,mn=null;function X0(t,n){if(t=t.containerInfo,Ef=Zl,t=Wd(t),Kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,O=-1,$=0,ht=0,vt=t,et=null;e:for(;;){for(var nt;vt!==a||c!==0&&vt.nodeType!==3||(T=x+c),vt!==f||o!==0&&vt.nodeType!==3||(O=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(nt=vt.firstChild)!==null;)et=vt,vt=nt;for(;;){if(vt===t)break e;if(et===a&&++$===c&&(T=x),et===f&&++ht===o&&(O=x),(nt=vt.nextSibling)!==null)break;vt=et,et=vt.parentNode}vt=nt}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tf={focusedElem:t,selectionRange:a},Zl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Jt=rr(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(Jt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Zt){Ie(a,a.return,Zt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Rf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Pm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(t,a),o&4&&so(5,a);break;case 1:if(Sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ie(a,a.return,x)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(a,a.return,x)}}o&64&&Cm(a),o&512&&oo(a,a.return);break;case 3:if(Sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(t,n)}catch(x){Ie(a,a.return,x)}}break;case 27:n===null&&o&4&&Nm(a);case 26:case 5:Sa(t,a),n===null&&o&4&&Um(a),o&512&&oo(a,a.return);break;case 12:Sa(t,a);break;case 13:Sa(t,a),o&4&&Im(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=$0.bind(null,a),_S(t,a))));break;case 22:if(o=a.memoizedState!==null||Wi,!o){n=n!==null&&n.memoizedState!==null||Qe,c=Wi;var f=Qe;Wi=o,(Qe=n)&&!f?xa(t,a,(a.subtreeFlags&8772)!==0):Sa(t,a),Wi=c,Qe=f}break;case 30:break;default:Sa(t,a)}}function zm(t){var n=t.alternate;n!==null&&(t.alternate=null,zm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&oa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ve=null,Fn=!1;function qi(t,n,a){for(a=a.child;a!==null;)Bm(t,n,a),a=a.sibling}function Bm(t,n,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:Qe||Ei(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Ei(a,n);var o=Ve,c=Fn;Aa(a.type)&&(Ve=a.stateNode,Fn=!1),qi(t,n,a),_o(a.stateNode),Ve=o,Fn=c;break;case 5:Qe||Ei(a,n);case 6:if(o=Ve,c=Fn,Ve=null,qi(t,n,a),Ve=o,Fn=c,Ve!==null)if(Fn)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Ve.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Ve!==null&&(Fn?(t=Ve,bg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bo(t)):bg(Ve,a.stateNode));break;case 4:o=Ve,c=Fn,Ve=a.stateNode.containerInfo,Fn=!0,qi(t,n,a),Ve=o,Fn=c;break;case 0:case 11:case 14:case 15:Qe||va(2,a,n),Qe||va(4,a,n),qi(t,n,a);break;case 1:Qe||(Ei(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Dm(a,n,o)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:Qe=(o=Qe)||a.memoizedState!==null,qi(t,n,a),Qe=o;break;default:qi(t,n,a)}}function Im(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bo(t)}catch(a){Ie(n,n.return,a)}}function W0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Om),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Om),n;default:throw Error(r(435,t.tag))}}function $u(t,n){var a=W0(t);n.forEach(function(o){var c=tS.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(Aa(T.type)){Ve=T.stateNode,Fn=!1;break t}break;case 5:Ve=T.stateNode,Fn=!1;break t;case 3:case 4:Ve=T.stateNode.containerInfo,Fn=!0;break t}T=T.return}if(Ve===null)throw Error(r(160));Bm(f,x,c),Ve=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Fm(n,t),n=n.sibling}var ui=null;function Fm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(va(3,t,t.return),so(3,t),va(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&(Qe||a===null||Ei(a,a.return)),o&64&&Wi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ui;if(qn(n,t),Yn(t),o&512&&(Qe||a===null||Ei(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[sa]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,o,a),f[sn]=t,tn(f),o=f;break t;case"link":var x=Ng("link","href",c).get(o+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=c.createElement(o),yn(f,o,a),c.head.appendChild(f);break;case"meta":if(x=Ng("meta","content",c).get(o+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=c.createElement(o),yn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[sn]=t,tn(f),o=f}t.stateNode=o}else Og(c,t.type,t.stateNode);else t.stateNode=Lg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Og(c,t.type,t.stateNode):Lg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&ju(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&(Qe||a===null||Ei(a,a.return)),a!==null&&o&4&&ju(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&(Qe||a===null||Ei(a,a.return)),t.flags&32){c=t.stateNode;try{xi(c,"")}catch(nt){Ie(t,t.return,nt)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,ju(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Ju=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(nt){Ie(t,t.return,nt)}}break;case 3:if(Wl=null,c=ui,ui=kl(n.containerInfo),qn(n,t),ui=c,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(n.containerInfo)}catch(nt){Ie(t,t.return,nt)}Ju&&(Ju=!1,Hm(t));break;case 4:o=ui,ui=kl(t.stateNode.containerInfo),qn(n,t),Yn(t),ui=o;break;case 12:qn(n,t),Yn(t);break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sf=ne()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$u(t,o)));break;case 22:c=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,$=Wi,ht=Qe;if(Wi=$||c,Qe=ht||O,qn(n,t),Qe=ht,Wi=$,Yn(t),o&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||Wi||Qe||sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=O.stateNode;var vt=O.memoizedProps.style,et=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(nt){Ie(O,O.return,nt)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(nt){Ie(O,O.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$u(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$u(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Lm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Ku(t);Dl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(xi(x,""),a.flags&=-33);var T=Ku(t);Dl(t,T,x);break;case 3:case 4:var O=a.stateNode.containerInfo,$=Ku(t);Qu(t,$,O);break;default:throw Error(r(161))}}catch(ht){Ie(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Hm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Hm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pm(t,n.alternate,n),n=n.sibling}function sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),sr(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Dm(n,n.return,a),sr(n);break;case 27:_o(n.stateNode);case 26:case 5:Ei(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),so(4,f);break;case 1:if(xa(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ie(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)mp(O[c],T)}catch($){Ie(o,o.return,$)}}a&&x&64&&Cm(f),oo(f,f.return);break;case 27:Nm(f);case 26:case 5:xa(c,f,a),a&&o===null&&x&4&&Um(f),oo(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&x&4&&Im(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),oo(f,f.return);break;case 30:break;default:xa(c,f,a)}n=n.sibling}}function tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function ef(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function Ti(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gm(t,n,a,o),n=n.sibling}function Gm(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,o),c&2048&&so(9,n);break;case 1:Ti(t,n,a,o);break;case 3:Ti(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(c&2048){Ti(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Ie(n,n.return,O)}}else Ti(t,n,a,o);break;case 13:Ti(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,o):lo(t,n):f._visibility&2?Ti(t,n,a,o):(f._visibility|=2,Wr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&tf(x,n);break;case 24:Ti(t,n,a,o),c&2048&&ef(n.alternate,n);break;default:Ti(t,n,a,o)}}function Wr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,T=a,O=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:Wr(f,x,T,O,c),so(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?Wr(f,x,T,O,c):lo(f,x):(ht._visibility|=2,Wr(f,x,T,O,c)),c&&$&2048&&tf(x.alternate,x);break;case 24:Wr(f,x,T,O,c),c&&$&2048&&ef(x.alternate,x);break;default:Wr(f,x,T,O,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:lo(a,o),c&2048&&tf(o.alternate,o);break;case 24:lo(a,o),c&2048&&ef(o.alternate,o);break;default:lo(a,o)}n=n.sibling}}var co=8192;function qr(t){if(t.subtreeFlags&co)for(t=t.child;t!==null;)Vm(t),t=t.sibling}function Vm(t){switch(t.tag){case 26:qr(t),t.flags&co&&t.memoizedState!==null&&DS(ui,t.memoizedState,t.memoizedProps);break;case 5:qr(t);break;case 3:case 4:var n=ui;ui=kl(t.stateNode.containerInfo),qr(t),ui=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,qr(t),co=n):qr(t));break;default:qr(t)}}function km(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Wm(o,t)}km(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xm(t),t=t.sibling}function Xm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&va(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ul(t)):uo(t);break;default:uo(t)}}function Ul(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Wm(o,t)}km(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:va(8,n,n.return),Ul(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ul(n));break;default:Ul(n)}t=t.sibling}}function Wm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=t;mn!==null;){o=mn;var c=o.sibling,f=o.return;if(zm(o),o===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var q0={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Y0=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ge=null,he=null,xe=0,De=0,Zn=null,Ma=!1,Yr=!1,nf=!1,Yi=0,Ye=0,ya=0,or=0,af=0,ai=0,Zr=0,fo=null,Hn=null,rf=!1,sf=0,Ll=1/0,Nl=null,Ea=null,Mn=0,Ta=null,jr=null,Kr=0,of=0,lf=null,qm=null,ho=0,cf=null;function jn(){if((Ce&2)!==0&&xe!==0)return xe&-xe;if(P.T!==null){var t=Br;return t!==0?t:gf()}return ye()}function Ym(){ai===0&&(ai=(xe&536870912)===0||Ae?X():536870912);var t=ii.current;return t!==null&&(t.flags|=32),ai}function Kn(t,n,a){(t===Ge&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(Qr(t,0),ba(t,xe,ai,!1)),_t(t,a),((Ce&2)===0||t!==Ge)&&(t===Ge&&((Ce&2)===0&&(or|=a),Ye===4&&ba(t,xe,ai,!1)),bi(t))}function Zm(t,n,a){if((Ce&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||te(t,n),c=o?K0(t,n):hf(t,n,!0),f=o;do{if(c===0){Yr&&!o&&ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Z0(a)){c=hf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;c=fo;var O=T.current.memoizedState.isDehydrated;if(O&&(Qr(T,x).flags|=256),x=hf(T,x,!1),x!==2){if(nf&&!O){T.errorRecoveryDisabledLanes|=f,or|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Qr(t,0),ba(t,n,0,!0);break}t:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ba(o,n,ai,!Ma);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=sf+300-ne(),10<c)){if(ba(o,n,ai,!Ma),le(o,0,!0)!==0)break t;o.timeoutHandle=Eg(jm.bind(null,o,a,Hn,Nl,rf,n,ai,or,Zr,Ma,f,2,-0,0),c);break t}jm(o,a,Hn,Nl,rf,n,ai,or,Zr,Ma,f,0,-0,0)}}break}while(!0);bi(t)}function jm(t,n,a,o,c,f,x,T,O,$,ht,vt,et,nt){if(t.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:CS},Vm(n),vt=US(),vt!==null)){t.cancelPendingCommit=vt(ng.bind(null,t,n,f,a,o,c,x,T,O,ht,1,et,nt)),ba(t,f,x,!$);return}ng(t,n,f,a,o,c,x,T,O)}function Z0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(t,n,a,o){n&=~af,n&=~or,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Rt(c),x=1<<f;o[f]=-1,c&=~x}a!==0&&Nt(t,a,n)}function Ol(){return(Ce&6)===0?(po(0),!1):!0}function uf(){if(he!==null){if(De===0)var t=he.return;else t=he,Fi=er=null,Au(t),kr=null,io=0,t=he;for(;t!==null;)wm(t.alternate,t),t=t.return;he=null}}function Qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),uf(),Ge=t,he=a=zi(t.current,null),xe=n,De=0,Zn=null,Ma=!1,Yr=te(t,n),nf=!1,Zr=ai=af=or=ya=Ye=0,Hn=fo=null,rf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Rt(o),f=1<<c;n|=t[c],o&=~f}return Yi=n,nl(),a}function Km(t,n){ce=null,P.H=Ml,n===Zs||n===fl?(n=dp(),De=3):n===up?(n=dp(),De=4):De=n===pm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,he===null&&(Ye=1,Al(t,$n(n,t.current)))}function Qm(){var t=P.H;return P.H=Ml,t===null?Ml:t}function Jm(){var t=P.A;return P.A=q0,t}function ff(){Ye=4,Ma||(xe&4194048)!==xe&&ii.current!==null||(Yr=!0),(ya&134217727)===0&&(or&134217727)===0||Ge===null||ba(Ge,xe,ai,!1)}function hf(t,n,a){var o=Ce;Ce|=2;var c=Qm(),f=Jm();(Ge!==t||xe!==n)&&(Nl=null,Qr(t,n)),n=!1;var x=Ye;t:do try{if(De!==0&&he!==null){var T=he,O=Zn;switch(De){case 8:uf(),x=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var $=De;if(De=0,Zn=null,Jr(t,T,O,$),a&&Yr){x=0;break t}break;default:$=De,De=0,Zn=null,Jr(t,T,O,$)}}j0(),x=Ye;break}catch(ht){Km(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Fi=er=null,Ce=o,P.H=c,P.A=f,he===null&&(Ge=null,xe=0,nl()),x}function j0(){for(;he!==null;)$m(he)}function K0(t,n){var a=Ce;Ce|=2;var o=Qm(),c=Jm();Ge!==t||xe!==n?(Nl=null,Ll=ne()+500,Qr(t,n)):Yr=te(t,n);t:do try{if(De!==0&&he!==null){n=he;var f=Zn;e:switch(De){case 1:De=0,Zn=null,Jr(t,n,f,1);break;case 2:case 9:if(fp(f)){De=0,Zn=null,tg(n);break}n=function(){De!==2&&De!==9||Ge!==t||(De=7),bi(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:fp(f)?(De=0,Zn=null,tg(n)):(De=0,Zn=null,Jr(t,n,f,7));break;case 5:var x=null;switch(he.tag){case 26:x=he.memoizedState;case 5:case 27:var T=he;if(!x||Pg(x)){De=0,Zn=null;var O=T.sibling;if(O!==null)he=O;else{var $=T.return;$!==null?(he=$,Pl($)):he=null}break e}}De=0,Zn=null,Jr(t,n,f,5);break;case 6:De=0,Zn=null,Jr(t,n,f,6);break;case 8:uf(),Ye=6;break t;default:throw Error(r(462))}}Q0();break}catch(ht){Km(t,ht)}while(!0);return Fi=er=null,P.H=o,P.A=c,Ce=a,he!==null?0:(Ge=null,xe=0,nl(),Ye)}function Q0(){for(;he!==null&&!Pn();)$m(he)}function $m(t){var n=Am(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,n===null?Pl(t):he=n}function tg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=xm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=xm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Au(n);default:wm(a,n),n=he=ep(n,Yi),n=Am(a,n,Yi)}t.memoizedProps=t.pendingProps,n===null?Pl(t):he=n}function Jr(t,n,a,o){Fi=er=null,Au(n),kr=null,io=0;var c=n.return;try{if(H0(t,c,n,a,xe)){Ye=1,Al(t,$n(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;Ye=1,Al(t,$n(a,t.current)),he=null;return}n.flags&32768?(Ae||o===1?t=!0:Yr||(xe&536870912)!==0?t=!1:(Ma=t=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),eg(n,t)):Pl(n)}function Pl(t){var n=t;do{if((n.flags&32768)!==0){eg(n,Ma);return}t=n.return;var a=V0(n.alternate,n,Yi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Ye===0&&(Ye=5)}function eg(t,n){do{var a=k0(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Ye=6,he=null}function ng(t,n,a,o,c,f,x,T,O){t.cancelPendingCommit=null;do zl();while(Mn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=eu,zt(t,a,f,x,T,O),t===Ge&&(he=Ge=null,xe=0),jr=n,Ta=t,Kr=a,of=f,lf=c,qm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,eS(L,function(){return og(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=Q.p,Q.p=2,x=Ce,Ce|=4;try{X0(t,n,a)}finally{Ce=x,Q.p=c,P.T=o}}Mn=1,ig(),ag(),rg()}}function ig(){if(Mn===1){Mn=0;var t=Ta,n=jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Q.p;Q.p=2;var c=Ce;Ce|=4;try{Fm(n,t);var f=Tf,x=Wd(t.containerInfo),T=f.focusedElem,O=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Xd(T.ownerDocument.documentElement,T)){if(O!==null&&Kc(T)){var $=O.start,ht=O.end;if(ht===void 0&&(ht=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ht,T.value.length);else{var vt=T.ownerDocument||document,et=vt&&vt.defaultView||window;if(et.getSelection){var nt=et.getSelection(),Jt=T.textContent.length,Zt=Math.min(O.start,Jt),Pe=O.end===void 0?Zt:Math.min(O.end,Jt);!nt.extend&&Zt>Pe&&(x=Pe,Pe=Zt,Zt=x);var q=kd(T,Zt),H=kd(T,Pe);if(q&&H&&(nt.rangeCount!==1||nt.anchorNode!==q.node||nt.anchorOffset!==q.offset||nt.focusNode!==H.node||nt.focusOffset!==H.offset)){var J=vt.createRange();J.setStart(q.node,q.offset),nt.removeAllRanges(),Zt>Pe?(nt.addRange(J),nt.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),nt.addRange(J))}}}}for(vt=[],nt=T;nt=nt.parentNode;)nt.nodeType===1&&vt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<vt.length;T++){var mt=vt[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Zl=!!Ef,Tf=Ef=null}finally{Ce=c,Q.p=o,P.T=a}}t.current=n,Mn=2}}function ag(){if(Mn===2){Mn=0;var t=Ta,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Q.p;Q.p=2;var c=Ce;Ce|=4;try{Pm(t,n.alternate,n)}finally{Ce=c,Q.p=o,P.T=a}}Mn=3}}function rg(){if(Mn===4||Mn===3){Mn=0,ge();var t=Ta,n=jr,a=Kr,o=qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,jr=Ta=null,sg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),$e(a),n=n.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(pt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=Q.p,Q.p=2,P.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var T=o[x];f(T.value,{componentStack:T.stack})}}finally{P.T=n,Q.p=c}}(Kr&3)!==0&&zl(),bi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===cf?ho++:(ho=0,cf=t):ho=0,po(0)}}function sg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function zl(t){return ig(),ag(),rg(),og()}function og(){if(Mn!==5)return!1;var t=Ta,n=of;of=0;var a=$e(Kr),o=P.T,c=Q.p;try{Q.p=32>a?32:a,P.T=null,a=lf,lf=null;var f=Ta,x=Kr;if(Mn=0,jr=Ta=null,Kr=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,Xm(f.current),Gm(f,f.current,x,a),Ce=T,po(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(pt,f)}catch{}return!0}finally{Q.p=c,P.T=o,sg(t,n)}}function lg(t,n,a){n=$n(a,n),n=Hu(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(_t(t,2),bi(t))}function Ie(t,n,a){if(t.tag===3)lg(t,t,a);else for(;n!==null;){if(n.tag===3){lg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ea===null||!Ea.has(o))){t=$n(a,t),a=hm(2),o=pa(n,a,2),o!==null&&(dm(a,o,n,t),_t(o,2),bi(o));break}}n=n.return}}function df(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Y0;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(nf=!0,c.add(a),t=J0.bind(null,t,n,a),n.then(t,t))}function J0(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(xe&a)===a&&(Ye===4||Ye===3&&(xe&62914560)===xe&&300>ne()-sf?(Ce&2)===0&&Qr(t,0):af|=a,Zr===xe&&(Zr=0)),bi(t)}function cg(t,n){n===0&&(n=Lt()),t=Nr(t,n),t!==null&&(_t(t,n),bi(t))}function $0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(t,a)}function tS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),cg(t,a)}function eS(t,n){return $t(t,n)}var Bl=null,$r=null,pf=!1,Il=!1,mf=!1,lr=0;function bi(t){t!==$r&&t.next===null&&($r===null?Bl=$r=t:$r=$r.next=t),Il=!0,pf||(pf=!0,iS())}function po(t,n){if(!mf&&Il){mf=!0;do for(var a=!1,o=Bl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var x=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Rt(42|t)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,dg(o,f))}else f=xe,f=le(o,o===Ge?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||te(o,f)||(a=!0,dg(o,f));o=o.next}while(a);mf=!1}}function nS(){ug()}function ug(){Il=pf=!1;var t=0;lr!==0&&(fS()&&(t=lr),lr=0);for(var n=ne(),a=null,o=Bl;o!==null;){var c=o.next,f=fg(o,n);f===0?(o.next=null,a===null?Bl=c:a.next=c,c===null&&($r=a)):(a=o,(t!==0||(f&3)!==0)&&(Il=!0)),o=c}po(t)}function fg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Rt(f),T=1<<x,O=c[x];O===-1?((T&a)===0||(T&o)!==0)&&(c[x]=Le(T,n)):O<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ge,a=xe,a=le(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&I(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&I(o),$e(a)){case 2:case 8:a=Gt;break;case 32:a=L;break;case 268435456:a=tt;break;default:a=L}return o=hg.bind(null,t),a=$t(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&I(o),t.callbackPriority=2,t.callbackNode=null,2}function hg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(zl()&&t.callbackNode!==a)return null;var o=xe;return o=le(t,t===Ge?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Zm(t,o,n),fg(t,ne()),t.callbackNode!=null&&t.callbackNode===a?hg.bind(null,t):null)}function dg(t,n){if(zl())return null;Zm(t,n,!0)}function iS(){dS(function(){(Ce&6)!==0?$t(Ue,nS):ug()})}function gf(){return lr===0&&(lr=X()),lr}function pg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jo(""+t)}function mg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function aS(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=pg((c[vn]||null).action),x=o.submitter;x&&(n=(n=x[vn]||null)?pg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new $o("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(lr!==0){var O=x?mg(c,x):new FormData(c);Pu(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=x?mg(c,x):new FormData(c),Pu(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var _f=0;_f<tu.length;_f++){var vf=tu[_f],rS=vf.toLowerCase(),sS=vf[0].toUpperCase()+vf.slice(1);ci(rS,"on"+sS)}ci(Zd,"onAnimationEnd"),ci(jd,"onAnimationIteration"),ci(Kd,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(E0,"onTransitionRun"),ci(T0,"onTransitionStart"),ci(b0,"onTransitionCancel"),ci(Qd,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Li("onBeforeInput",["compositionend","keypress","textInput","paste"]),Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function gg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var T=o[x],O=T.instance,$=T.currentTarget;if(T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ht){bl(ht)}c.currentTarget=null,f=O}else for(x=0;x<o.length;x++){if(T=o[x],O=T.instance,$=T.currentTarget,T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ht){bl(ht)}c.currentTarget=null,f=O}}}}function de(t,n){var a=n[Xa];a===void 0&&(a=n[Xa]=new Set);var o=t+"__bubble";a.has(o)||(_g(n,t,2,!1),a.add(o))}function Sf(t,n,a){var o=0;n&&(o|=4),_g(a,t,o,n)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function xf(t){if(!t[Fl]){t[Fl]=!0,Yo.forEach(function(a){a!=="selectionchange"&&(oS.has(a)||Sf(a,!1,t),Sf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Fl]||(n[Fl]=!0,Sf("selectionchange",!1,n))}}function _g(t,n,a,o){switch(Gg(n)){case 2:var c=OS;break;case 8:c=PS;break;default:c=Of}a=c.bind(null,n,a,t),c=void 0,!Gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Mf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var T=o.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=o.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=Di(T),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){o=f=x;continue t}T=T.parentNode}}o=o.return}Td(function(){var $=f,ht=Fc(a),vt=[];t:{var et=Jd.get(t);if(et!==void 0){var nt=$o,Jt=t;switch(t){case"keypress":if(Qo(a)===0)break t;case"keydown":case"keyup":nt=e0;break;case"focusin":Jt="focus",nt=Wc;break;case"focusout":Jt="blur",nt=Wc;break;case"beforeblur":case"afterblur":nt=Wc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=a0;break;case Zd:case jd:case Kd:nt=qv;break;case Qd:nt=s0;break;case"scroll":case"scrollend":nt=Gv;break;case"wheel":nt=l0;break;case"copy":case"cut":case"paste":nt=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=Cd;break;case"toggle":case"beforetoggle":nt=u0}var Zt=(n&4)!==0,Pe=!Zt&&(t==="scroll"||t==="scrollend"),q=Zt?et!==null?et+"Capture":null:et;Zt=[];for(var H=$,J;H!==null;){var mt=H;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||q===null||(mt=Ns(H,q),mt!=null&&Zt.push(go(H,mt,J))),Pe)break;H=H.return}0<Zt.length&&(et=new nt(et,Jt,null,a,ht),vt.push({event:et,listeners:Zt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",nt=t==="mouseout"||t==="pointerout",et&&a!==Ic&&(Jt=a.relatedTarget||a.fromElement)&&(Di(Jt)||Jt[zn]))break t;if((nt||et)&&(et=ht.window===ht?ht:(et=ht.ownerDocument)?et.defaultView||et.parentWindow:window,nt?(Jt=a.relatedTarget||a.toElement,nt=$,Jt=Jt?Di(Jt):null,Jt!==null&&(Pe=u(Jt),Zt=Jt.tag,Jt!==Pe||Zt!==5&&Zt!==27&&Zt!==6)&&(Jt=null)):(nt=null,Jt=$),nt!==Jt)){if(Zt=Rd,mt="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Zt=Cd,mt="onPointerLeave",q="onPointerEnter",H="pointer"),Pe=nt==null?et:qa(nt),J=Jt==null?et:qa(Jt),et=new Zt(mt,H+"leave",nt,a,ht),et.target=Pe,et.relatedTarget=J,mt=null,Di(ht)===$&&(Zt=new Zt(q,H+"enter",Jt,a,ht),Zt.target=J,Zt.relatedTarget=Pe,mt=Zt),Pe=mt,nt&&Jt)e:{for(Zt=nt,q=Jt,H=0,J=Zt;J;J=ts(J))H++;for(J=0,mt=q;mt;mt=ts(mt))J++;for(;0<H-J;)Zt=ts(Zt),H--;for(;0<J-H;)q=ts(q),J--;for(;H--;){if(Zt===q||q!==null&&Zt===q.alternate)break e;Zt=ts(Zt),q=ts(q)}Zt=null}else Zt=null;nt!==null&&vg(vt,et,nt,Zt,!1),Jt!==null&&Pe!==null&&vg(vt,Pe,Jt,Zt,!0)}}t:{if(et=$?qa($):window,nt=et.nodeName&&et.nodeName.toLowerCase(),nt==="select"||nt==="input"&&et.type==="file")var Ht=Bd;else if(Pd(et))if(Id)Ht=x0;else{Ht=v0;var ue=_0}else nt=et.nodeName,!nt||nt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Bc($.elementType)&&(Ht=Bd):Ht=S0;if(Ht&&(Ht=Ht(t,$))){zd(vt,Ht,a,ht);break t}ue&&ue(t,et,$),t==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&bn(et,"number",et.value)}switch(ue=$?qa($):window,t){case"focusin":(Pd(ue)||ue.contentEditable==="true")&&(Dr=ue,Qc=$,Gs=null);break;case"focusout":Gs=Qc=Dr=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,qd(vt,a,ht);break;case"selectionchange":if(y0)break;case"keydown":case"keyup":qd(vt,a,ht)}var Vt;if(Yc)t:{switch(t){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else Cr?Nd(t,a)&&(Kt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&(Dd&&a.locale!=="ko"&&(Cr||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&Cr&&(Vt=bd()):(ua=ht,Vc="value"in ua?ua.value:ua.textContent,Cr=!0)),ue=Hl($,Kt),0<ue.length&&(Kt=new wd(Kt,t,null,a,ht),vt.push({event:Kt,listeners:ue}),Vt?Kt.data=Vt:(Vt=Od(a),Vt!==null&&(Kt.data=Vt)))),(Vt=h0?d0(t,a):p0(t,a))&&(Kt=Hl($,"onBeforeInput"),0<Kt.length&&(ue=new wd("onBeforeInput","beforeinput",null,a,ht),vt.push({event:ue,listeners:Kt}),ue.data=Vt)),aS(vt,t,$,a,ht)}gg(vt,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Hl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ns(t,a),c!=null&&o.unshift(go(t,c,f)),c=Ns(t,n),c!=null&&o.push(go(t,c,f))),t.tag===3)return o;t=t.return}return[]}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function vg(t,n,a,o,c){for(var f=n._reactName,x=[];a!==null&&a!==o;){var T=a,O=T.alternate,$=T.stateNode;if(T=T.tag,O!==null&&O===o)break;T!==5&&T!==26&&T!==27||$===null||(O=$,c?($=Ns(a,f),$!=null&&x.unshift(go(a,$,O))):c||($=Ns(a,f),$!=null&&x.push(go(a,$,O)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var lS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function Sg(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(cS,"")}function xg(t,n){return n=Sg(n),Sg(t)===n}function Gl(){}function Oe(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xi(t,""+o);break;case"className":wt(t,"class",o);break;case"tabIndex":wt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(t,a,o);break;case"style":yd(t,o,f);break;case"data":if(n!=="object"){wt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=jo(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(t,n,"name",c.name,c,null),Oe(t,n,"formEncType",c.formEncType,c,null),Oe(t,n,"formMethod",c.formMethod,c,null),Oe(t,n,"formTarget",c.formTarget,c,null)):(Oe(t,n,"encType",c.encType,c,null),Oe(t,n,"method",c.method,c,null),Oe(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=jo(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Gl);break;case"onScroll":o!=null&&de("scroll",t);break;case"onScrollEnd":o!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=jo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":de("beforetoggle",t),de("toggle",t),Et(t,"popover",o);break;case"xlinkActuate":Dt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Dt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Dt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Dt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Dt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Dt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Et(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fv.get(a)||a,Et(t,a,o))}}function yf(t,n,a,o,c,f){switch(a){case"style":yd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?xi(t,o):(typeof o=="number"||typeof o=="bigint")&&xi(t,""+o);break;case"onScroll":o!=null&&de("scroll",t);break;case"onScrollEnd":o!=null&&de("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Gl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Et(t,a,o)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,f,x,a,null)}}c&&Oe(t,n,"srcSet",a.srcSet,a,null),o&&Oe(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var T=f=x=c=null,O=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":c=ht;break;case"type":x=ht;break;case"checked":O=ht;break;case"defaultChecked":$=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Oe(t,n,o,ht,a,null)}}Be(t,f,T,O,$,x,c,!1),We(t);return;case"select":de("invalid",t),o=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":o=T;default:Oe(t,n,c,T,a,null)}n=f,a=x,t.multiple=!!o,n!=null?on(t,!!o,n,!1):a!=null&&on(t,!!o,a,!0);return;case"textarea":de("invalid",t),f=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Oe(t,n,x,T,a,null)}Sn(t,o,c,f),We(t);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(o=a[O],o!=null))switch(O){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(t,n,O,o,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(o=0;o<mo.length;o++)de(mo[o],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,$,o,a,null)}return;default:if(Bc(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&yf(t,n,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Oe(t,n,T,o,a,null))}function uS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,O=null,$=null,ht=null;for(nt in a){var vt=a[nt];if(a.hasOwnProperty(nt)&&vt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":O=vt;default:o.hasOwnProperty(nt)||Oe(t,n,nt,null,o,vt)}}for(var et in o){var nt=o[et];if(vt=a[et],o.hasOwnProperty(et)&&(nt!=null||vt!=null))switch(et){case"type":f=nt;break;case"name":c=nt;break;case"checked":$=nt;break;case"defaultChecked":ht=nt;break;case"value":x=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==vt&&Oe(t,n,et,nt,o,vt)}}Ni(t,x,T,O,$,ht,f,c);return;case"select":nt=x=T=et=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":nt=O;default:o.hasOwnProperty(f)||Oe(t,n,f,null,o,O)}for(c in o)if(f=o[c],O=a[c],o.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==O&&Oe(t,n,c,f,o,O)}n=T,a=x,o=nt,et!=null?on(t,!!a,et,!1):!!o!=!!a&&(n!=null?on(t,!!a,n,!0):on(t,!!a,a?[]:"",!1));return;case"textarea":nt=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(t,n,T,null,o,c)}for(x in o)if(c=o[x],f=a[x],o.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":et=c;break;case"defaultValue":nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Oe(t,n,x,c,o,f)}dn(t,et,nt);return;case"option":for(var Jt in a)if(et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!o.hasOwnProperty(Jt))switch(Jt){case"selected":t.selected=!1;break;default:Oe(t,n,Jt,null,o,et)}for(O in o)if(et=o[O],nt=a[O],o.hasOwnProperty(O)&&et!==nt&&(et!=null||nt!=null))switch(O){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Oe(t,n,O,et,o,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)et=a[Zt],a.hasOwnProperty(Zt)&&et!=null&&!o.hasOwnProperty(Zt)&&Oe(t,n,Zt,null,o,et);for($ in o)if(et=o[$],nt=a[$],o.hasOwnProperty($)&&et!==nt&&(et!=null||nt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Oe(t,n,$,et,o,nt)}return;default:if(Bc(n)){for(var Pe in a)et=a[Pe],a.hasOwnProperty(Pe)&&et!==void 0&&!o.hasOwnProperty(Pe)&&yf(t,n,Pe,void 0,o,et);for(ht in o)et=o[ht],nt=a[ht],!o.hasOwnProperty(ht)||et===nt||et===void 0&&nt===void 0||yf(t,n,ht,et,o,nt);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!o.hasOwnProperty(q)&&Oe(t,n,q,null,o,et);for(vt in o)et=o[vt],nt=a[vt],!o.hasOwnProperty(vt)||et===nt||et==null&&nt==null||Oe(t,n,vt,et,o,nt)}var Ef=null,Tf=null;function Vl(t){return t.nodeType===9?t:t.ownerDocument}function Mg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Af=null;function fS(){var t=window.event;return t&&t.type==="popstate"?t===Af?!1:(Af=t,!0):(Af=null,!1)}var Eg=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(t){return Tg.resolve(null).then(t).catch(pS)}:Eg;function pS(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function bg(t,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var x=t.ownerDocument;if(a&1&&_o(x.documentElement),a&2&&_o(x.body),a&4)for(a=x.head,_o(a),x=a.firstChild;x;){var T=x.nextSibling,O=x.nodeName;x[sa]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=T}}if(c===0){t.removeChild(f),bo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);bo(n)}function Rf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rf(a),oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function mS(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[sa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function gS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function _S(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Cf=null;function Ag(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Rg(t,n,a){switch(n=Vl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function _o(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);oa(t)}var ri=new Map,wg=new Set;function kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Zi=Q.d;Q.d={f:vS,r:SS,D:xS,C:MS,L:yS,m:ES,X:bS,S:TS,M:AS};function vS(){var t=Zi.f(),n=Ol();return t||n}function SS(t){var n=Ui(t);n!==null&&n.tag===5&&n.type==="form"?Zp(n):Zi.r(t)}var es=typeof document>"u"?null:document;function Cg(t,n,a){var o=es;if(o&&typeof n=="string"&&n){var c=He(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),wg.has(c)||(wg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),yn(n,"link",t),tn(n),o.head.appendChild(n)))}}function xS(t){Zi.D(t),Cg("dns-prefetch",t,null)}function MS(t,n){Zi.C(t,n),Cg("preconnect",t,n)}function yS(t,n,a){Zi.L(t,n,a);var o=es;if(o&&t&&n){var c='link[rel="preload"][as="'+He(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+He(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+He(a.imageSizes)+'"]')):c+='[href="'+He(t)+'"]';var f=c;switch(n){case"style":f=ns(t);break;case"script":f=is(t)}ri.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(vo(f))||n==="script"&&o.querySelector(So(f))||(n=o.createElement("link"),yn(n,"link",t),tn(n),o.head.appendChild(n)))}}function ES(t,n){Zi.m(t,n);var a=es;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+He(o)+'"][href="'+He(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(t)}if(!ri.has(f)&&(t=g({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}o=a.createElement("link"),yn(o,"link",t),tn(o),a.head.appendChild(o)}}}function TS(t,n,a){Zi.S(t,n,a);var o=es;if(o&&t){var c=la(o).hoistableStyles,f=ns(t);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=o.querySelector(vo(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&Df(t,a);var O=x=o.createElement("link");tn(O),yn(O,"link",t),O._p=new Promise(function($,ht){O.onload=$,O.onerror=ht}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Xl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function bS(t,n){Zi.X(t,n);var a=es;if(a&&t){var o=la(a).hoistableScripts,c=is(t),f=o.get(c);f||(f=a.querySelector(So(c)),f||(t=g({src:t,async:!0},n),(n=ri.get(c))&&Uf(t,n),f=a.createElement("script"),tn(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function AS(t,n){Zi.M(t,n);var a=es;if(a&&t){var o=la(a).hoistableScripts,c=is(t),f=o.get(c);f||(f=a.querySelector(So(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ri.get(c))&&Uf(t,n),f=a.createElement("script"),tn(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Dg(t,n,a,o){var c=(c=xt.current)?kl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=la(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ns(a.href);var f=la(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(vo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||RS(c,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=la(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ns(t){return'href="'+He(t)+'"'}function vo(t){return'link[rel="stylesheet"]['+t+"]"}function Ug(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function RS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),yn(n,"link",a),tn(n),t.head.appendChild(n))}function is(t){return'[src="'+He(t)+'"]'}function So(t){return"script[async]"+t}function Lg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+He(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),yn(o,"style",c),Xl(o,a.precedence,t),n.instance=o;case"stylesheet":c=ns(a.href);var f=t.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=Ug(a),(c=ri.get(c))&&Df(o,c),f=(t.ownerDocument||t).createElement("link"),tn(f);var x=f;return x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),yn(f,"link",o),n.state.loading|=4,Xl(f,a.precedence,t),n.instance=f;case"script":return f=is(a.src),(c=t.querySelector(So(f)))?(n.instance=c,tn(c),c):(o=a,(c=ri.get(f))&&(o=g({},a),Uf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),yn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Xl(o,a.precedence,t));return n.instance}function Xl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,x=0;x<o.length;x++){var T=o[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Uf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Wl=null;function Ng(t,n,a){if(Wl===null){var o=new Map,c=Wl=new Map;c.set(a,o)}else c=Wl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[sa]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=o.get(x);T?T.push(f):o.set(x,[f])}}return o}function Og(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function wS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var xo=null;function CS(){}function DS(t,n,a){if(xo===null)throw Error(r(475));var o=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ns(a.href),f=t.querySelector(vo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=ql.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=Ug(a),(c=ri.get(c))&&Df(a,c),f=f.createElement("link"),tn(f);var x=f;x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),yn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ql.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function US(){if(xo===null)throw Error(r(475));var t=xo;return t.stylesheets&&t.count===0&&Lf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Lf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ql(){if(this.count--,this.count===0){if(this.stylesheets)Lf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yl=null;function Lf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yl=new Map,n.forEach(LS,t),Yl=null,ql.call(t))}function LS(t,n){if(!(n.state.loading&4)){var a=Yl.get(t);if(a)var o=a.get(null);else{a=new Map,Yl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,c),a.set(x,c),this.count++,o=ql.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Mo={$$typeof:N,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function NS(t,n,a,o,c,f,x,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ut(0),this.hiddenUpdates=ut(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function zg(t,n,a,o,c,f,x,T,O,$,ht,vt){return t=new NS(t,n,a,x,T,O,$,vt),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=hu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},gu(f),t}function Bg(t){return t?(t=Or,t):Or}function Ig(t,n,a,o,c,f){c=Bg(c),o.context===null?o.context=c:o.pendingContext=c,o=da(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=pa(t,o,n),a!==null&&(Kn(a,t,n),Ks(a,t,n))}function Fg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Nf(t,n){Fg(t,n),(t=t.alternate)&&Fg(t,n)}function Hg(t){if(t.tag===13){var n=Nr(t,67108864);n!==null&&Kn(n,t,67108864),Nf(t,67108864)}}var Zl=!0;function OS(t,n,a,o){var c=P.T;P.T=null;var f=Q.p;try{Q.p=2,Of(t,n,a,o)}finally{Q.p=f,P.T=c}}function PS(t,n,a,o){var c=P.T;P.T=null;var f=Q.p;try{Q.p=8,Of(t,n,a,o)}finally{Q.p=f,P.T=c}}function Of(t,n,a,o){if(Zl){var c=Pf(o);if(c===null)Mf(t,n,o,jl,a),Vg(t,o);else if(BS(c,t,n,a,o))o.stopPropagation();else if(Vg(t,o),n&4&&-1<zS.indexOf(t)){for(;c!==null;){var f=Ui(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Pt(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var O=1<<31-Rt(x);T.entanglements[1]|=O,x&=~O}bi(f),(Ce&6)===0&&(Ll=ne()+500,po(0))}}break;case 13:T=Nr(f,2),T!==null&&Kn(T,f,2),Ol(),Nf(f,2)}if(f=Pf(o),f===null&&Mf(t,n,o,jl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Mf(t,n,o,null,a)}}function Pf(t){return t=Fc(t),zf(t)}var jl=null;function zf(t){if(jl=null,t=Di(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return jl=t,null}function Gg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case Ue:return 2;case Gt:return 8;case L:case b:return 32;case tt:return 268435456;default:return 32}default:return 32}}var Bf=!1,Ra=null,wa=null,Ca=null,yo=new Map,Eo=new Map,Da=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vg(t,n){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function To(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ui(n),n!==null&&Hg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function BS(t,n,a,o,c){switch(n){case"focusin":return Ra=To(Ra,t,n,a,o,c),!0;case"dragenter":return wa=To(wa,t,n,a,o,c),!0;case"mouseover":return Ca=To(Ca,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,To(yo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,To(Eo.get(f)||null,t,n,a,o,c)),!0}return!1}function kg(t){var n=Di(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,kn(t.priority,function(){if(a.tag===13){var o=jn();o=Fe(o);var c=Nr(a,o);c!==null&&Kn(c,a,o),Nf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Pf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Ic=o,a.target.dispatchEvent(o),Ic=null}else return n=Ui(a),n!==null&&Hg(n),t.blockedOn=a,!1;n.shift()}return!0}function Xg(t,n,a){Kl(t)&&a.delete(n)}function IS(){Bf=!1,Ra!==null&&Kl(Ra)&&(Ra=null),wa!==null&&Kl(wa)&&(wa=null),Ca!==null&&Kl(Ca)&&(Ca=null),yo.forEach(Xg),Eo.forEach(Xg)}function Ql(t,n){t.blockedOn===n&&(t.blockedOn=null,Bf||(Bf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,IS)))}var Jl=null;function Wg(t){Jl!==t&&(Jl=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Jl===t&&(Jl=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(zf(o||a)===null)continue;break}var f=Ui(a);f!==null&&(t.splice(n,3),n-=3,Pu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function bo(t){function n(O){return Ql(O,t)}Ra!==null&&Ql(Ra,t),wa!==null&&Ql(wa,t),Ca!==null&&Ql(Ca,t),yo.forEach(n),Eo.forEach(n);for(var a=0;a<Da.length;a++){var o=Da[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)kg(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],x=c[vn]||null;if(typeof f=="function")x||Wg(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[vn]||null)T=x.formAction;else if(zf(c)!==null)continue}else T=x.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Wg(a)}}}function If(t){this._internalRoot=t}$l.prototype.render=If.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=jn();Ig(a,o,t,n,null,null)},$l.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ig(t.current,2,null,t,null,null),Ol(),n[zn]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var n=ye();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&kg(t)}};var qg=e.version;if(qg!=="19.1.0")throw Error(r(527,qg,"19.1.0"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var FS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{pt=tc.inject(FS),Bt=tc}catch{}}return Ro.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=lm,f=cm,x=um,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=zg(t,1,!1,null,null,a,o,c,f,x,T,null),t[zn]=n.current,xf(t),new If(n)},Ro.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=lm,x=cm,T=um,O=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=zg(t,1,!0,n,a??null,o,c,f,x,T,O,$),n.context=Bg(null),a=n.current,o=jn(),o=Fe(o),c=da(o),c.callback=null,pa(a,c,o),a=o,n.current.lanes=a,_t(n,a),bi(n),t[zn]=n.current,xf(t),new $l(n)},Ro.version="19.1.0",Ro}var n_;function KS(){if(n_)return Hf.exports;n_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Hf.exports=jS(),Hf.exports}var QS=KS(),Lo=sd();const Mr=GS(Lo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="175",JS=0,i_=1,$S=2,sv=1,tx=2,ta=3,Va=0,Gn=1,ea=2,Ha=0,Es=1,a_=2,r_=3,s_=4,ex=5,_r=100,nx=101,ix=102,ax=103,rx=104,sx=200,ox=201,lx=202,cx=203,xh=204,Mh=205,ux=206,fx=207,hx=208,dx=209,px=210,mx=211,gx=212,_x=213,vx=214,yh=0,Eh=1,Th=2,bs=3,bh=4,Ah=5,Rh=6,wh=7,ld=0,Sx=1,xx=2,Ga=0,Mx=1,yx=2,Ex=3,Tx=4,bx=5,Ax=6,Rx=7,ov=300,As=301,Rs=302,Ch=303,Dh=304,Oc=306,Uh=1e3,Sr=1001,Lh=1002,Si=1003,wx=1004,ec=1005,Ri=1006,Wf=1007,xr=1008,ra=1009,lv=1010,cv=1011,zo=1012,cd=1013,Er=1014,na=1015,Go=1016,ud=1017,fd=1018,Bo=1020,uv=35902,fv=1021,hv=1022,vi=1023,dv=1024,pv=1025,Io=1026,Fo=1027,mv=1028,hd=1029,gv=1030,dd=1031,pd=1033,yc=33776,Ec=33777,Tc=33778,bc=33779,Nh=35840,Oh=35841,Ph=35842,zh=35843,Bh=36196,Ih=37492,Fh=37496,Hh=37808,Gh=37809,Vh=37810,kh=37811,Xh=37812,Wh=37813,qh=37814,Yh=37815,Zh=37816,jh=37817,Kh=37818,Qh=37819,Jh=37820,$h=37821,Ac=36492,td=36494,ed=36495,_v=36283,nd=36284,id=36285,ad=36286,Cx=3200,Dx=3201,vv=0,Ux=1,Fa="",oi="srgb",ws="srgb-linear",Cc="linear",ze="srgb",as=7680,o_=519,Lx=512,Nx=513,Ox=514,Sv=515,Px=516,zx=517,Bx=518,Ix=519,l_=35044,c_="300 es",ia=2e3,Dc=2001;class Ds{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let u_=1234567;const Oo=Math.PI/180,Ho=180/Math.PI;function Us(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function me(s,e,i){return Math.max(e,Math.min(i,s))}function md(s,e){return(s%e+e)%e}function Fx(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function Hx(s,e,i){return s!==e?(i-s)/(e-s):0}function Po(s,e,i){return(1-i)*s+i*e}function Gx(s,e,i,r){return Po(s,e,1-Math.exp(-i*r))}function Vx(s,e=1){return e-Math.abs(md(s,e*2)-e)}function kx(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function Xx(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function Wx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qx(s,e){return s+Math.random()*(e-s)}function Yx(s){return s*(.5-Math.random())}function Zx(s){s!==void 0&&(u_=s);let e=u_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jx(s){return s*Oo}function Kx(s){return s*Ho}function Qx(s){return(s&s-1)===0&&s!==0}function Jx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $x(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tM(s,e,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((e+r)/2),g=h((e+r)/2),_=u((e-r)/2),v=h((e-r)/2),y=u((r-e)/2),E=h((r-e)/2);switch(l){case"XYX":s.set(d*g,p*_,p*v,d*m);break;case"YZY":s.set(p*v,d*g,p*_,d*m);break;case"ZXZ":s.set(p*_,p*v,d*g,d*m);break;case"XZX":s.set(d*g,p*E,p*y,d*m);break;case"YXY":s.set(p*y,d*g,p*E,d*m);break;case"ZYZ":s.set(p*E,p*y,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ss(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const rs={DEG2RAD:Oo,RAD2DEG:Ho,generateUUID:Us,clamp:me,euclideanModulo:md,mapLinear:Fx,inverseLerp:Hx,lerp:Po,damp:Gx,pingpong:Vx,smoothstep:kx,smootherstep:Xx,randInt:Wx,randFloat:qx,randFloatSpread:Yx,seededRandom:Zx,degToRad:jx,radToDeg:Kx,isPowerOfTwo:Qx,ceilPowerOfTwo:Jx,floorPowerOfTwo:$x,setQuaternionFromProperEuler:tM,normalize:Ln,denormalize:Ss};class we{constructor(e=0,i=0){we.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(e,i,r,l,u,h,d,p,m){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],_=r[7],v=r[2],y=r[5],E=r[8],w=l[0],M=l[3],S=l[6],z=l[1],N=l[4],U=l[7],V=l[2],k=l[5],F=l[8];return u[0]=h*w+d*z+p*V,u[3]=h*M+d*N+p*k,u[6]=h*S+d*U+p*F,u[1]=m*w+g*z+_*V,u[4]=m*M+g*N+_*k,u[7]=m*S+g*U+_*F,u[2]=v*w+y*z+E*V,u[5]=v*M+y*N+E*k,u[8]=v*S+y*U+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=g*h-d*m,v=d*p-g*u,y=m*u-h*p,E=i*_+r*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(l*m-g*r)*w,e[2]=(d*r-l*h)*w,e[3]=v*w,e[4]=(g*i-l*p)*w,e[5]=(l*u-d*i)*w,e[6]=y*w,e[7]=(r*p-m*i)*w,e[8]=(h*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(qf.makeScale(e,i)),this}rotate(e){return this.premultiply(qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new se;function xv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Uc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eM(){const s=Uc("canvas");return s.style.display="block",s}const f_={};function Rc(s){s in f_||(f_[s]=!0,console.warn(s))}function nM(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function iM(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function aM(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const h_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rM(){const s={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===ze&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Ts(l.r),l.g=Ts(l.g),l.b=Ts(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Cc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ws]:{primaries:e,whitePoint:r,transfer:Cc,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:ze,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const be=rM();function aa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ss;class sM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ss===void 0&&(ss=Uc("canvas")),ss.width=e.width,ss.height=e.height;const l=ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=aa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oM=0;class gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Yf(l[h].image)):u.push(Yf(l[h]))}else u=Yf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Yf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lM=0;class Vn extends Ds{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Sr,l=Sr,u=Ri,h=xr,d=vi,p=ra,m=Vn.DEFAULT_ANISOTROPY,g=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Us(),this.name="",this.source=new gd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uh:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uh:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ov;Vn.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,i=0,r=0,l=1){Ze.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],_=p[8],v=p[1],y=p[5],E=p[9],w=p[2],M=p[6],S=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,U=(y+1)/2,V=(S+1)/2,k=(g+v)/4,F=(_+w)/4,K=(E+M)/4;return N>U&&N>V?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=k/r,u=F/r):U>V?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=k/l,u=K/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=F/u,l=K/u),this.set(r,l,u,i),this}let z=Math.sqrt((M-E)*(M-E)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(_-w)/z,this.z=(v-g)/z,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this.z=me(this.z,e.z,i.z),this.w=me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this.z=me(this.z,e,i),this.w=me(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cM extends Ds{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ze(0,0,e,i),this.scissorTest=!1,this.viewport=new Ze(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Vn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new gd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends cM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Mv extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uM extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const v=u[h+0],y=u[h+1],E=u[h+2],w=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_;return}if(d===1){e[i+0]=v,e[i+1]=y,e[i+2]=E,e[i+3]=w;return}if(_!==w||p!==v||m!==y||g!==E){let M=1-d;const S=p*v+m*y+g*E+_*w,z=S>=0?1:-1,N=1-S*S;if(N>Number.EPSILON){const V=Math.sqrt(N),k=Math.atan2(V,S*z);M=Math.sin(M*k)/V,d=Math.sin(d*k)/V}const U=d*z;if(p=p*M+v*U,m=m*M+y*U,g=g*M+E*U,_=_*M+w*U,M===1-d){const V=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=V,m*=V,g*=V,_*=V}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=u[h],v=u[h+1],y=u[h+2],E=u[h+3];return e[i]=d*E+g*_+p*y-m*v,e[i+1]=p*E+g*v+m*_-d*y,e[i+2]=m*E+g*y+d*v-p*_,e[i+3]=g*E-d*_-p*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),_=d(u/2),v=p(r/2),y=p(l/2),E=p(u/2);switch(h){case"XYZ":this._x=v*g*_+m*y*E,this._y=m*y*_-v*g*E,this._z=m*g*E+v*y*_,this._w=m*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+m*y*E,this._y=m*y*_-v*g*E,this._z=m*g*E-v*y*_,this._w=m*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-m*y*E,this._y=m*y*_+v*g*E,this._z=m*g*E+v*y*_,this._w=m*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-m*y*E,this._y=m*y*_+v*g*E,this._z=m*g*E-v*y*_,this._w=m*g*_+v*y*E;break;case"YZX":this._x=v*g*_+m*y*E,this._y=m*y*_+v*g*E,this._z=m*g*E-v*y*_,this._w=m*g*_-v*y*E;break;case"XZY":this._x=v*g*_-m*y*E,this._y=m*y*_-v*g*E,this._z=m*g*E+v*y*_,this._w=m*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(u-m)*y,this._z=(h-l)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(g-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+m)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(u-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(h-l)/y,this._x=(u+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(me(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=h*_+this._w*v,this._x=r*_+this._x*v,this._y=l*_+this._y*v,this._z=u*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(p_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(p_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),_=2*(u*r-h*i);return this.x=i+p*m+h*_-d*g,this.y=r+p*g+d*m-u*_,this.z=l+p*_+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this.z=me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this.z=me(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zf.copy(this).projectOnVector(e),this.sub(Zf)}reflect(e){return this.sub(Zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new rt,p_=new Vo;class br{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,hi):hi.fromBufferAttribute(u,h),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nc.copy(r.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),ic.subVectors(this.max,wo),os.subVectors(e.a,wo),ls.subVectors(e.b,wo),cs.subVectors(e.c,wo),La.subVectors(ls,os),Na.subVectors(cs,ls),cr.subVectors(os,cs);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-cr.z,cr.y,La.z,0,-La.x,Na.z,0,-Na.x,cr.z,0,-cr.x,-La.y,La.x,0,-Na.y,Na.x,0,-cr.y,cr.x,0];return!jf(i,os,ls,cs,ic)||(i=[1,0,0,0,1,0,0,0,1],!jf(i,os,ls,cs,ic))?!1:(ac.crossVectors(La,Na),i=[ac.x,ac.y,ac.z],jf(i,os,ls,cs,ic))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ji=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],hi=new rt,nc=new br,os=new rt,ls=new rt,cs=new rt,La=new rt,Na=new rt,cr=new rt,wo=new rt,ic=new rt,ac=new rt,ur=new rt;function jf(s,e,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){ur.fromArray(s,u);const d=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),p=e.dot(ur),m=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const fM=new br,Co=new rt,Kf=new rt;class _d{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):fM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Kf)),this.expandByPoint(Co.copy(e.center).sub(Kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new rt,Qf=new rt,rc=new rt,Oa=new rt,Jf=new rt,sc=new rt,$f=new rt;class hM{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Qf.copy(e).add(i).multiplyScalar(.5),rc.copy(i).sub(e).normalize(),Oa.copy(this.origin).sub(Qf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(rc),d=Oa.dot(this.direction),p=-Oa.dot(rc),m=Oa.lengthSq(),g=Math.abs(1-h*h);let _,v,y,E;if(g>0)if(_=h*p-d,v=h*d-p,E=u*g,_>=0)if(v>=-E)if(v<=E){const w=1/g;_*=w,v*=w,y=_*(_+h*v+2*d)+v*(h*_+v+2*p)+m}else v=u,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*p)+m;else v=-u,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*p)+m;else v<=-E?(_=Math.max(0,-(-h*u+d)),v=_>0?-u:Math.min(Math.max(-u,-p),u),y=-_*_+v*(v+2*p)+m):v<=E?(_=0,v=Math.min(Math.max(-u,-p),u),y=v*(v+2*p)+m):(_=Math.max(0,-(h*u+d)),v=_>0?u:Math.min(Math.max(-u,-p),u),y=-_*_+v*(v+2*p)+m);else v=h>0?-u:u,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Qf).addScaledVector(rc,v),y}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),g>=0?(u=(e.min.y-v.y)*g,h=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,h=(e.min.y-v.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,r,l,u){Jf.subVectors(i,e),sc.subVectors(r,e),$f.crossVectors(Jf,sc);let h=this.direction.dot($f),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Oa.subVectors(this.origin,e);const p=d*this.direction.dot(sc.crossVectors(Oa,sc));if(p<0)return null;const m=d*this.direction.dot(Jf.cross(Oa));if(m<0||p+m>h)return null;const g=-d*Oa.dot($f);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,i,r,l,u,h,d,p,m,g,_,v,y,E,w,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,_,v,y,E,w,M)}set(e,i,r,l,u,h,d,p,m,g,_,v,y,E,w,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=h,S[9]=d,S[13]=p,S[2]=m,S[6]=g,S[10]=_,S[14]=v,S[3]=y,S[7]=E,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/us.setFromMatrixColumn(e,0).length(),u=1/us.setFromMatrixColumn(e,1).length(),h=1/us.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const v=h*g,y=h*_,E=d*g,w=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=y+E*m,i[5]=v-w*m,i[9]=-d*p,i[2]=w-v*m,i[6]=E+y*m,i[10]=h*p}else if(e.order==="YXZ"){const v=p*g,y=p*_,E=m*g,w=m*_;i[0]=v+w*d,i[4]=E*d-y,i[8]=h*m,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=w+v*d,i[10]=h*p}else if(e.order==="ZXY"){const v=p*g,y=p*_,E=m*g,w=m*_;i[0]=v-w*d,i[4]=-h*_,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=w-v*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const v=h*g,y=h*_,E=d*g,w=d*_;i[0]=p*g,i[4]=E*m-y,i[8]=v*m+w,i[1]=p*_,i[5]=w*m+v,i[9]=y*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const v=h*p,y=h*m,E=d*p,w=d*m;i[0]=p*g,i[4]=w-v*_,i[8]=E*_+y,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=y*_+E,i[10]=v-w*_}else if(e.order==="XZY"){const v=h*p,y=h*m,E=d*p,w=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=v*_+w,i[5]=h*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=d*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dM,e,pM)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Pa.crossVectors(r,Qn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Pa.crossVectors(r,Qn)),Pa.normalize(),oc.crossVectors(Qn,Pa),l[0]=Pa.x,l[4]=oc.x,l[8]=Qn.x,l[1]=Pa.y,l[5]=oc.y,l[9]=Qn.y,l[2]=Pa.z,l[6]=oc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],_=r[5],v=r[9],y=r[13],E=r[2],w=r[6],M=r[10],S=r[14],z=r[3],N=r[7],U=r[11],V=r[15],k=l[0],F=l[4],K=l[8],D=l[12],C=l[1],G=l[5],ot=l[9],st=l[13],St=l[2],dt=l[6],P=l[10],Q=l[14],B=l[3],ct=l[7],R=l[11],W=l[15];return u[0]=h*k+d*C+p*St+m*B,u[4]=h*F+d*G+p*dt+m*ct,u[8]=h*K+d*ot+p*P+m*R,u[12]=h*D+d*st+p*Q+m*W,u[1]=g*k+_*C+v*St+y*B,u[5]=g*F+_*G+v*dt+y*ct,u[9]=g*K+_*ot+v*P+y*R,u[13]=g*D+_*st+v*Q+y*W,u[2]=E*k+w*C+M*St+S*B,u[6]=E*F+w*G+M*dt+S*ct,u[10]=E*K+w*ot+M*P+S*R,u[14]=E*D+w*st+M*Q+S*W,u[3]=z*k+N*C+U*St+V*B,u[7]=z*F+N*G+U*dt+V*ct,u[11]=z*K+N*ot+U*P+V*R,u[15]=z*D+N*st+U*Q+V*W,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],_=e[6],v=e[10],y=e[14],E=e[3],w=e[7],M=e[11],S=e[15];return E*(+u*p*_-l*m*_-u*d*v+r*m*v+l*d*y-r*p*y)+w*(+i*p*y-i*m*v+u*h*v-l*h*y+l*m*g-u*p*g)+M*(+i*m*_-i*d*y-u*h*_+r*h*y+u*d*g-r*m*g)+S*(-l*d*g-i*p*_+i*d*v+l*h*_-r*h*v+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=e[9],v=e[10],y=e[11],E=e[12],w=e[13],M=e[14],S=e[15],z=_*M*m-w*v*m+w*p*y-d*M*y-_*p*S+d*v*S,N=E*v*m-g*M*m-E*p*y+h*M*y+g*p*S-h*v*S,U=g*w*m-E*_*m+E*d*y-h*w*y-g*d*S+h*_*S,V=E*_*p-g*w*p-E*d*v+h*w*v+g*d*M-h*_*M,k=i*z+r*N+l*U+u*V;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=z*F,e[1]=(w*v*u-_*M*u-w*l*y+r*M*y+_*l*S-r*v*S)*F,e[2]=(d*M*u-w*p*u+w*l*m-r*M*m-d*l*S+r*p*S)*F,e[3]=(_*p*u-d*v*u-_*l*m+r*v*m+d*l*y-r*p*y)*F,e[4]=N*F,e[5]=(g*M*u-E*v*u+E*l*y-i*M*y-g*l*S+i*v*S)*F,e[6]=(E*p*u-h*M*u-E*l*m+i*M*m+h*l*S-i*p*S)*F,e[7]=(h*v*u-g*p*u+g*l*m-i*v*m-h*l*y+i*p*y)*F,e[8]=U*F,e[9]=(E*_*u-g*w*u-E*r*y+i*w*y+g*r*S-i*_*S)*F,e[10]=(h*w*u-E*d*u+E*r*m-i*w*m-h*r*S+i*d*S)*F,e[11]=(g*d*u-h*_*u-g*r*m+i*_*m+h*r*y-i*d*y)*F,e[12]=V*F,e[13]=(g*w*l-E*_*l+E*r*v-i*w*v-g*r*M+i*_*M)*F,e[14]=(E*d*l-h*w*l-E*r*p+i*w*p+h*r*M-i*d*M)*F,e[15]=(h*_*l-g*d*l+g*r*p-i*_*p-h*r*v+i*d*v)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,_=d+d,v=u*m,y=u*g,E=u*_,w=h*g,M=h*_,S=d*_,z=p*m,N=p*g,U=p*_,V=r.x,k=r.y,F=r.z;return l[0]=(1-(w+S))*V,l[1]=(y+U)*V,l[2]=(E-N)*V,l[3]=0,l[4]=(y-U)*k,l[5]=(1-(v+S))*k,l[6]=(M+z)*k,l[7]=0,l[8]=(E+N)*F,l[9]=(M-z)*F,l[10]=(1-(v+w))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const h=us.set(l[4],l[5],l[6]).length(),d=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const m=1/u,g=1/h,_=1/d;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,i.setFromRotationMatrix(di),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=ia){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),_=(i+e)/(i-e),v=(r+l)/(r-l);let y,E;if(d===ia)y=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Dc)y=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=ia){const p=this.elements,m=1/(i-e),g=1/(r-l),_=1/(h-u),v=(i+e)*m,y=(r+l)*g;let E,w;if(d===ia)E=(h+u)*_,w=-2*_;else if(d===Dc)E=u*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const us=new rt,di=new je,dM=new rt(0,0,0),pM=new rt(1,1,1),Pa=new rt,oc=new rt,Qn=new rt,m_=new je,g_=new Vo;class Ci{constructor(e=0,i=0,r=0,l=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class yv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mM=0;const __=new rt,fs=new Vo,Qi=new je,lc=new rt,Do=new rt,gM=new rt,_M=new Vo,v_=new rt(1,0,0),S_=new rt(0,1,0),x_=new rt(0,0,1),M_={type:"added"},vM={type:"removed"},hs={type:"childadded",child:null},th={type:"childremoved",child:null};class Dn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new rt,i=new Ci,r=new Vo,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new se}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(v_,e)}rotateY(e){return this.rotateOnAxis(S_,e)}rotateZ(e){return this.rotateOnAxis(x_,e)}translateOnAxis(e,i){return __.copy(e).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(v_,e)}translateY(e){return this.translateOnAxis(S_,e)}translateZ(e){return this.translateOnAxis(x_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?lc.copy(e):lc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Do,lc,this.up):Qi.lookAt(lc,Do,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(Qi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(M_),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(vM),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(M_),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,gM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,_M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),_=h(e.shapes),v=h(e.skeletons),y=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new rt(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new rt,Ji=new rt,eh=new rt,$i=new rt,ds=new rt,ps=new rt,y_=new rt,nh=new rt,ih=new rt,ah=new rt,rh=new Ze,sh=new Ze,oh=new Ze;class _i{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){pi.subVectors(l,i),Ji.subVectors(r,i),eh.subVectors(e,i);const h=pi.dot(pi),d=pi.dot(Ji),p=pi.dot(eh),m=Ji.dot(Ji),g=Ji.dot(eh),_=h*m-d*d;if(_===0)return u.set(0,0,0),null;const v=1/_,y=(m*p-d*g)*v,E=(h*g-d*p)*v;return u.set(1-y-E,E,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,$i.x),p.addScaledVector(h,$i.y),p.addScaledVector(d,$i.z),p)}static getInterpolatedAttribute(e,i,r,l,u,h){return rh.setScalar(0),sh.setScalar(0),oh.setScalar(0),rh.fromBufferAttribute(e,i),sh.fromBufferAttribute(e,r),oh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(rh,u.x),h.addScaledVector(sh,u.y),h.addScaledVector(oh,u.z),h}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),Ji.subVectors(e,i),pi.cross(Ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),pi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return _i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return _i.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;ds.subVectors(l,r),ps.subVectors(u,r),nh.subVectors(e,r);const p=ds.dot(nh),m=ps.dot(nh);if(p<=0&&m<=0)return i.copy(r);ih.subVectors(e,l);const g=ds.dot(ih),_=ps.dot(ih);if(g>=0&&_<=g)return i.copy(l);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(ds,h);ah.subVectors(e,u);const y=ds.dot(ah),E=ps.dot(ah);if(E>=0&&y<=E)return i.copy(u);const w=y*m-p*E;if(w<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(ps,d);const M=g*E-y*_;if(M<=0&&_-g>=0&&y-E>=0)return y_.subVectors(u,l),d=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(y_,d);const S=1/(M+w+v);return h=w*S,d=v*S,i.copy(r).addScaledVector(ds,h).addScaledVector(ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},cc={h:0,s:0,l:0};function lh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Re{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=md(e,1),i=me(i,0,1),r=me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=lh(h,u,e+1/3),this.g=lh(h,u,e),this.b=lh(h,u,e-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(e,i=oi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=oi){const r=Ev[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return be.fromWorkingColorSpace(Cn.copy(this),e),Math.round(me(Cn.r*255,0,255))*65536+Math.round(me(Cn.g*255,0,255))*256+Math.round(me(Cn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const _=h-d;switch(m=g<=.5?_/(h+d):_/(2-h-d),h){case r:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-r)/_+2;break;case u:p=(r-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=be.workingColorSpace){return be.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=oi){be.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==oi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(za),this.setHSL(za.h+e,za.s+i,za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(za),e.getHSL(cc);const r=Po(za.h,cc.h,i),l=Po(za.s,cc.s,i),u=Po(za.l,cc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Re;Re.NAMES=Ev;let SM=0;class ko extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Es,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Mh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Mh&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tv extends ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new rt,uc=new we;let xM=0;class wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=l_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)uc.fromBufferAttribute(this,i),uc.applyMatrix3(e),this.setXY(i,uc.x,uc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ss(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ss(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ss(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ss(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ss(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array),u=Ln(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l_&&(e.usage=this.usage),e}}class bv extends wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Av extends wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class yr extends wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let MM=0;const si=new je,ch=new Dn,ms=new rt,Jn=new br,Uo=new br,_n=new rt;class Ar extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xv(e)?Av:bv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,i,r){return si.makeTranslation(e,i,r),this.applyMatrix4(si),this}scale(e,i,r){return si.makeScale(e,i,r),this.applyMatrix4(si),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new yr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _d);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Jn.min,Uo.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,Uo.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(Uo.min),Jn.expandByPoint(Uo.max))}Jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)_n.fromBufferAttribute(d,m),p&&(ms.fromBufferAttribute(e,m),_n.add(ms)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<r.count;K++)d[K]=new rt,p[K]=new rt;const m=new rt,g=new rt,_=new rt,v=new we,y=new we,E=new we,w=new rt,M=new rt;function S(K,D,C){m.fromBufferAttribute(r,K),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,C),v.fromBufferAttribute(u,K),y.fromBufferAttribute(u,D),E.fromBufferAttribute(u,C),g.sub(m),_.sub(m),y.sub(v),E.sub(v);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(G),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(G),d[K].add(w),d[D].add(w),d[C].add(w),p[K].add(M),p[D].add(M),p[C].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let K=0,D=z.length;K<D;++K){const C=z[K],G=C.start,ot=C.count;for(let st=G,St=G+ot;st<St;st+=3)S(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const N=new rt,U=new rt,V=new rt,k=new rt;function F(K){V.fromBufferAttribute(l,K),k.copy(V);const D=d[K];N.copy(D),N.sub(V.multiplyScalar(V.dot(D))).normalize(),U.crossVectors(k,D);const G=U.dot(p[K])<0?-1:1;h.setXYZW(K,N.x,N.y,N.z,G)}for(let K=0,D=z.length;K<D;++K){const C=z[K],G=C.start,ot=C.count;for(let st=G,St=G+ot;st<St;st+=3)F(e.getX(st+0)),F(e.getX(st+1)),F(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new rt,u=new rt,h=new rt,d=new rt,p=new rt,m=new rt,g=new rt,_=new rt;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,_=d.normalized,v=new m.constructor(p.length*g);let y=0,E=0;for(let w=0,M=p.length;w<M;w++){d.isInterleavedBufferAttribute?y=p[w]*d.data.stride+d.offset:y=p[w]*g;for(let S=0;S<g;S++)v[E++]=m[y++]}return new wi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ar,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,_=m.length;g<_;g++){const v=m[g],y=e(v,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const y=m[_];g.push(y.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],_=u[m];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const _=h[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const E_=new je,fr=new hM,fc=new _d,T_=new rt,hc=new rt,dc=new rt,pc=new rt,uh=new rt,mc=new rt,b_=new rt,gc=new rt;class rn extends Dn{constructor(e=new Ar,i=new Tv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){mc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],_=u[p];g!==0&&(uh.fromBufferAttribute(_,e),h?mc.addScaledVector(uh,g):mc.addScaledVector(uh.sub(i),g))}i.add(mc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(u),fr.copy(e.ray).recast(e.near),!(fc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(fc,T_)===null||fr.origin.distanceToSquared(T_)>(e.far-e.near)**2))&&(E_.copy(u).invert(),fr.copy(e.ray).applyMatrix4(E_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,fr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,v=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,w=v.length;E<w;E++){const M=v[E],S=h[M.materialIndex],z=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=z,V=N;U<V;U+=3){const k=d.getX(U),F=d.getX(U+1),K=d.getX(U+2);l=_c(this,S,e,r,m,g,_,k,F,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=E,S=w;M<S;M+=3){const z=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=_c(this,h,e,r,m,g,_,z,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,w=v.length;E<w;E++){const M=v[E],S=h[M.materialIndex],z=Math.max(M.start,y.start),N=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let U=z,V=N;U<V;U+=3){const k=U,F=U+1,K=U+2;l=_c(this,S,e,r,m,g,_,k,F,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=E,S=w;M<S;M+=3){const z=M,N=M+1,U=M+2;l=_c(this,h,e,r,m,g,_,z,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function yM(s,e,i,r,l,u,h,d){let p;if(e.side===Gn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===Va,d),p===null)return null;gc.copy(d),gc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(gc);return m<i.near||m>i.far?null:{distance:m,point:gc.clone(),object:s}}function _c(s,e,i,r,l,u,h,d,p,m){s.getVertexPosition(d,hc),s.getVertexPosition(p,dc),s.getVertexPosition(m,pc);const g=yM(s,e,i,r,hc,dc,pc,b_);if(g){const _=new rt;_i.getBarycoord(b_,hc,dc,pc,_),l&&(g.uv=_i.getInterpolatedAttribute(l,d,p,m,_,new we)),u&&(g.uv1=_i.getInterpolatedAttribute(u,d,p,m,_,new we)),h&&(g.normal=_i.getInterpolatedAttribute(h,d,p,m,_,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new rt,materialIndex:0};_i.getNormal(hc,dc,pc,v.normal),g.face=v,g.barycoord=_}return g}class On extends Ar{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,r,i,e,h,u,0),E("z","y","x",1,-1,r,i,-e,h,u,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new yr(m,3)),this.setAttribute("normal",new yr(g,3)),this.setAttribute("uv",new yr(_,2));function E(w,M,S,z,N,U,V,k,F,K,D){const C=U/F,G=V/K,ot=U/2,st=V/2,St=k/2,dt=F+1,P=K+1;let Q=0,B=0;const ct=new rt;for(let R=0;R<P;R++){const W=R*G-st;for(let lt=0;lt<dt;lt++){const gt=lt*C-ot;ct[w]=gt*z,ct[M]=W*N,ct[S]=St,m.push(ct.x,ct.y,ct.z),ct[w]=0,ct[M]=0,ct[S]=k>0?1:-1,g.push(ct.x,ct.y,ct.z),_.push(lt/F),_.push(1-R/K),Q+=1}}for(let R=0;R<K;R++)for(let W=0;W<F;W++){const lt=v+W+dt*R,gt=v+W+dt*(R+1),Y=v+(W+1)+dt*(R+1),ft=v+(W+1)+dt*R;p.push(lt,gt,ft),p.push(gt,Y,ft),B+=6}d.addGroup(y,B,D),y+=B,v+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(s){const e={};for(let i=0;i<s.length;i++){const r=Cs(s[i]);for(const l in r)e[l]=r[l]}return e}function EM(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Rv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const TM={clone:Cs,merge:Nn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=EM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class wv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new rt,A_=new we,R_=new we;class gi extends wv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,A_,R_),i.subVectors(R_,A_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Oo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class RM extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(gs,_s,e,i);l.layers=this.layers,this.add(l);const u=new gi(gs,_s,e,i);u.layers=this.layers,this.add(u);const h=new gi(gs,_s,e,i);h.layers=this.layers,this.add(h);const d=new gi(gs,_s,e,i);d.layers=this.layers,this.add(d);const p=new gi(gs,_s,e,i);p.layers=this.layers,this.add(p);const m=new gi(gs,_s,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,v,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Cv extends Vn{constructor(e=[],i=As,r,l,u,h,d,p,m,g){super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wM extends Tr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Cv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ri}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new On(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Ha});u.uniforms.tEquirect.value=i;const h=new rn(l,u),d=i.minFilter;return i.minFilter===xr&&(i.minFilter=Ri),new RM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class li extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),S=this._getHandJoint(m,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;m.inputState.pinching&&v>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new li;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class DM extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const hh=new rt,UM=new rt,LM=new se;class mr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=hh.subVectors(r,i).cross(UM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(hh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||LM.getNormalMatrix(e),l=this.coplanarPoint(hh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new _d,vc=new rt;class vd{constructor(e=new mr,i=new mr,r=new mr,l=new mr,u=new mr,h=new mr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],v=l[7],y=l[8],E=l[9],w=l[10],M=l[11],S=l[12],z=l[13],N=l[14],U=l[15];if(r[0].setComponents(p-u,v-m,M-y,U-S).normalize(),r[1].setComponents(p+u,v+m,M+y,U+S).normalize(),r[2].setComponents(p+h,v+g,M+E,U+z).normalize(),r[3].setComponents(p-h,v-g,M-E,U-z).normalize(),r[4].setComponents(p-d,v-_,M-w,U-N).normalize(),i===ia)r[5].setComponents(p+d,v+_,M+w,U+N).normalize();else if(i===Dc)r[5].setComponents(d,_,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(vc.x=l.normal.x>0?e.max.x:e.min.x,vc.y=l.normal.y>0?e.max.y:e.min.y,vc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dv extends Vn{constructor(e,i,r=Er,l,u,h,d=Si,p=Si,m,g=Io){if(g!==Io&&g!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Xo extends Ar{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,_=e/d,v=i/p,y=[],E=[],w=[],M=[];for(let S=0;S<g;S++){const z=S*v-h;for(let N=0;N<m;N++){const U=N*_-u;E.push(U,-z,0),w.push(0,0,1),M.push(N/d),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let z=0;z<d;z++){const N=z+m*S,U=z+m*(S+1),V=z+1+m*(S+1),k=z+1+m*S;y.push(N,U,k),y.push(U,V,k)}this.setIndex(y),this.setAttribute("position",new yr(E,3)),this.setAttribute("normal",new yr(w,3)),this.setAttribute("uv",new yr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class mi extends ko{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vv,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class NM extends ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OM extends ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Uv extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const dh=new je,w_=new rt,C_=new rt;class PM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vd,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;w_.setFromMatrixPosition(e.matrixWorld),i.position.copy(w_),C_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(C_),i.updateMatrixWorld(),dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sd extends wv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zM extends PM{constructor(){super(new Sd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BM extends Uv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new zM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class IM extends Uv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class FM extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class D_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=U_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=U_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function U_(){return performance.now()}function L_(s,e,i,r){const l=HM(r);switch(i){case fv:return s*e;case dv:return s*e;case pv:return s*e*2;case mv:return s*e/l.components*l.byteLength;case hd:return s*e/l.components*l.byteLength;case gv:return s*e*2/l.components*l.byteLength;case dd:return s*e*2/l.components*l.byteLength;case hv:return s*e*3/l.components*l.byteLength;case vi:return s*e*4/l.components*l.byteLength;case pd:return s*e*4/l.components*l.byteLength;case yc:case Ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tc:case bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oh:case zh:return Math.max(s,16)*Math.max(e,8)/4;case Nh:case Ph:return Math.max(s,8)*Math.max(e,8)/2;case Bh:case Ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $h:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ac:case td:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _v:case nd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case id:case ad:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function HM(s){switch(s){case ra:case lv:return{byteLength:1,components:1};case zo:case cv:case Go:return{byteLength:2,components:1};case ud:case fd:return{byteLength:2,components:4};case Er:case cd:case na:return{byteLength:4,components:1};case uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lv(){let s=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function GM(s){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,_=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],w=_[y];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,_[v]=w)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const w=_[y];s.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ty=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ey=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ny=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,My=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,by=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ly=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ny=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Oy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,By=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ST=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:VM,alphahash_pars_fragment:kM,alphamap_fragment:XM,alphamap_pars_fragment:WM,alphatest_fragment:qM,alphatest_pars_fragment:YM,aomap_fragment:ZM,aomap_pars_fragment:jM,batching_pars_vertex:KM,batching_vertex:QM,begin_vertex:JM,beginnormal_vertex:$M,bsdfs:ty,iridescence_fragment:ey,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:ry,clipping_planes_vertex:sy,color_fragment:oy,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:uy,common:fy,cube_uv_reflection_fragment:hy,defaultnormal_vertex:dy,displacementmap_pars_vertex:py,displacementmap_vertex:my,emissivemap_fragment:gy,emissivemap_pars_fragment:_y,colorspace_fragment:vy,colorspace_pars_fragment:Sy,envmap_fragment:xy,envmap_common_pars_fragment:My,envmap_pars_fragment:yy,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Oy,envmap_vertex:Ty,fog_vertex:by,fog_pars_vertex:Ay,fog_fragment:Ry,fog_pars_fragment:wy,gradientmap_pars_fragment:Cy,lightmap_pars_fragment:Dy,lights_lambert_fragment:Uy,lights_lambert_pars_fragment:Ly,lights_pars_begin:Ny,lights_toon_fragment:Py,lights_toon_pars_fragment:zy,lights_phong_fragment:By,lights_phong_pars_fragment:Iy,lights_physical_fragment:Fy,lights_physical_pars_fragment:Hy,lights_fragment_begin:Gy,lights_fragment_maps:Vy,lights_fragment_end:ky,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:Wy,logdepthbuf_pars_vertex:qy,logdepthbuf_vertex:Yy,map_fragment:Zy,map_pars_fragment:jy,map_particle_fragment:Ky,map_particle_pars_fragment:Qy,metalnessmap_fragment:Jy,metalnessmap_pars_fragment:$y,morphinstance_vertex:tE,morphcolor_vertex:eE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:aE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:_E,project_vertex:vE,dithering_fragment:SE,dithering_pars_fragment:xE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:yE,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:bE,shadowmask_pars_fragment:AE,skinbase_vertex:RE,skinning_pars_vertex:wE,skinning_vertex:CE,skinnormal_vertex:DE,specularmap_fragment:UE,specularmap_pars_fragment:LE,tonemapping_fragment:NE,tonemapping_pars_fragment:OE,transmission_fragment:PE,transmission_pars_fragment:zE,uv_pars_fragment:BE,uv_pars_vertex:IE,uv_vertex:FE,worldpos_vertex:HE,background_vert:GE,background_frag:VE,backgroundCube_vert:kE,backgroundCube_frag:XE,cube_vert:WE,cube_frag:qE,depth_vert:YE,depth_frag:ZE,distanceRGBA_vert:jE,distanceRGBA_frag:KE,equirect_vert:QE,equirect_frag:JE,linedashed_vert:$E,linedashed_frag:tT,meshbasic_vert:eT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:aT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:fT,meshphysical_frag:hT,meshtoon_vert:dT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:_T,shadow_frag:vT,sprite_vert:ST,sprite_frag:xT},Ut={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ai={basic:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Nn([Ut.points,Ut.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Nn([Ut.common,Ut.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Nn([Ut.sprite,Ut.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Nn([Ut.lights,Ut.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Ai.physical={uniforms:Nn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Sc={r:0,b:0,g:0},dr=new Ci,MT=new je;function yT(s,e,i,r,l,u,h){const d=new Re(0);let p=u===!0?0:1,m,g,_=null,v=0,y=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:e).get(U)),U}function w(N){let U=!1;const V=E(N);V===null?S(d,p):V&&V.isColor&&(S(V,1),U=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(N,U){const V=E(U);V&&(V.isCubeTexture||V.mapping===Oc)?(g===void 0&&(g=new rn(new On(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Cs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),dr.copy(U.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(MT.makeRotationFromEuler(dr)),g.material.toneMapped=be.getTransfer(V.colorSpace)!==ze,(_!==V||v!==V.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,_=V,v=V.version,y=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new rn(new Xo(2,2),new ka({name:"BackgroundMaterial",uniforms:Cs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=be.getTransfer(V.colorSpace)!==ze,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(_!==V||v!==V.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,_=V,v=V.version,y=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function S(N,U){N.getRGB(Sc,Rv(s)),r.buffers.color.setClear(Sc.r,Sc.g,Sc.b,U,h)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),p=U,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,S(d,p)},render:w,addToRenderList:M,dispose:z}}function ET(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,h=!1;function d(C,G,ot,st,St){let dt=!1;const P=_(st,ot,G);u!==P&&(u=P,m(u.object)),dt=y(C,st,ot,St),dt&&E(C,st,ot,St),St!==null&&e.update(St,s.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,U(C,G,ot,st),St!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(St).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function _(C,G,ot){const st=ot.wireframe===!0;let St=r[C.id];St===void 0&&(St={},r[C.id]=St);let dt=St[G.id];dt===void 0&&(dt={},St[G.id]=dt);let P=dt[st];return P===void 0&&(P=v(p()),dt[st]=P),P}function v(C){const G=[],ot=[],st=[];for(let St=0;St<i;St++)G[St]=0,ot[St]=0,st[St]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ot,attributeDivisors:st,object:C,attributes:{},index:null}}function y(C,G,ot,st){const St=u.attributes,dt=G.attributes;let P=0;const Q=ot.getAttributes();for(const B in Q)if(Q[B].location>=0){const R=St[B];let W=dt[B];if(W===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),R===void 0||R.attribute!==W||W&&R.data!==W.data)return!0;P++}return u.attributesNum!==P||u.index!==st}function E(C,G,ot,st){const St={},dt=G.attributes;let P=0;const Q=ot.getAttributes();for(const B in Q)if(Q[B].location>=0){let R=dt[B];R===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(R=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(R=C.instanceColor));const W={};W.attribute=R,R&&R.data&&(W.data=R.data),St[B]=W,P++}u.attributes=St,u.attributesNum=P,u.index=st}function w(){const C=u.newAttributes;for(let G=0,ot=C.length;G<ot;G++)C[G]=0}function M(C){S(C,0)}function S(C,G){const ot=u.newAttributes,st=u.enabledAttributes,St=u.attributeDivisors;ot[C]=1,st[C]===0&&(s.enableVertexAttribArray(C),st[C]=1),St[C]!==G&&(s.vertexAttribDivisor(C,G),St[C]=G)}function z(){const C=u.newAttributes,G=u.enabledAttributes;for(let ot=0,st=G.length;ot<st;ot++)G[ot]!==C[ot]&&(s.disableVertexAttribArray(ot),G[ot]=0)}function N(C,G,ot,st,St,dt,P){P===!0?s.vertexAttribIPointer(C,G,ot,St,dt):s.vertexAttribPointer(C,G,ot,st,St,dt)}function U(C,G,ot,st){w();const St=st.attributes,dt=ot.getAttributes(),P=G.defaultAttributeValues;for(const Q in dt){const B=dt[Q];if(B.location>=0){let ct=St[Q];if(ct===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),ct!==void 0){const R=ct.normalized,W=ct.itemSize,lt=e.get(ct);if(lt===void 0)continue;const gt=lt.buffer,Y=lt.type,ft=lt.bytesPerElement,xt=Y===s.INT||Y===s.UNSIGNED_INT||ct.gpuType===cd;if(ct.isInterleavedBufferAttribute){const bt=ct.data,Ct=bt.stride,ae=ct.offset;if(bt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<B.locationSize;Ot++)S(B.location+Ot,bt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Ot=0;Ot<B.locationSize;Ot++)M(B.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Ot=0;Ot<B.locationSize;Ot++)N(B.location+Ot,W/B.locationSize,Y,R,Ct*ft,(ae+W/B.locationSize*Ot)*ft,xt)}else{if(ct.isInstancedBufferAttribute){for(let bt=0;bt<B.locationSize;bt++)S(B.location+bt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let bt=0;bt<B.locationSize;bt++)M(B.location+bt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let bt=0;bt<B.locationSize;bt++)N(B.location+bt,W/B.locationSize,Y,R,W*ft,W/B.locationSize*bt*ft,xt)}}else if(P!==void 0){const R=P[Q];if(R!==void 0)switch(R.length){case 2:s.vertexAttrib2fv(B.location,R);break;case 3:s.vertexAttrib3fv(B.location,R);break;case 4:s.vertexAttrib4fv(B.location,R);break;default:s.vertexAttrib1fv(B.location,R)}}}}z()}function V(){K();for(const C in r){const G=r[C];for(const ot in G){const st=G[ot];for(const St in st)g(st[St].object),delete st[St];delete G[ot]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const ot in G){const st=G[ot];for(const St in st)g(st[St].object),delete st[St];delete G[ot]}delete r[C.id]}function F(C){for(const G in r){const ot=r[G];if(ot[C.id]===void 0)continue;const st=ot[C.id];for(const St in st)g(st[St].object),delete st[St];delete ot[C.id]}}function K(){D(),h=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:M,disableUnusedAttributes:z}}function TT(s,e,i){let r;function l(m){r=m}function u(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function h(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function d(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,r,1)}function p(m,g,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)h(m[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,_);let E=0;for(let w=0;w<_;w++)E+=g[w]*v[w];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function bT(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==vi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const K=F===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ra&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==na&&!K)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:V,maxSamples:k}}function AT(s){const e=this;let i=null,r=0,l=!1,u=!1;const h=new mr,d=new se,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||r!==0||l;return l=v,r=_.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,S=s.get(_);if(!l||E===null||E.length===0||u&&!M)u?g(null):m();else{const z=u?0:r,N=z*4;let U=S.clippingState||null;p.value=U,U=g(E,v,N,y);for(let V=0;V!==N;++V)U[V]=i[V];S.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,y,E){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=p.value,E!==!0||M===null){const S=y+w*4,z=v.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,U=y;N!==w;++N,U+=4)h.copy(_[N]).applyMatrix4(z,d),h.normal.toArray(M,U),M[U+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function RT(s){let e=new WeakMap;function i(h,d){return d===Ch?h.mapping=As:d===Dh&&(h.mapping=Rs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===Dh)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new wM(p.height);return m.fromEquirectangularTexture(s,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ys=4,N_=[.125,.215,.35,.446,.526,.582],vr=20,ph=new Sd,O_=new Re;let mh=null,gh=0,_h=0,vh=!1;const gr=(1+Math.sqrt(5))/2,vs=1/gr,P_=[new rt(-gr,vs,0),new rt(gr,vs,0),new rt(-vs,0,gr),new rt(vs,0,gr),new rt(0,gr,-vs),new rt(0,gr,vs),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],wT=new rt;class z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=wT}=u;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=vh,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Go,format:vi,colorSpace:ws,depthBuffer:!1},l=B_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CT(u)),this._blurMaterial=DT(u,e,i)}return l}_compileMaterial(e){const i=new rn(this._lodPlanes[0],e);this._renderer.compile(i,ph)}_sceneToCubeUV(e,i,r,l,u){const p=new gi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(O_),_.toneMapping=Ga,_.autoClear=!1;const E=new Tv({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),w=new rn(new On,E);let M=!1;const S=e.background;S?S.isColor&&(E.color.copy(S),e.background=null,M=!0):(E.color.copy(O_),M=!0);for(let z=0;z<6;z++){const N=z%3;N===0?(p.up.set(0,m[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[z],u.y,u.z)):N===1?(p.up.set(0,0,m[z]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[z],u.z)):(p.up.set(0,m[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[z]));const U=this._cubeSize;xc(l,N*U,z>2?U:0,U,U),_.setRenderTarget(l),M&&_.render(w,p),_.render(e,p)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=S}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===As||e.mapping===Rs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new rn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;xc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,ph)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=P_[(l-u-1)%P_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new rn(this._lodPlanes[l],m),v=m.uniforms,y=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*vr-1),w=u/E,M=isFinite(u)?1+Math.floor(g*w):vr;M>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${vr}`);const S=[];let z=0;for(let F=0;F<vr;++F){const K=F/w,D=Math.exp(-K*K/2);S.push(D),F===0?z+=D:F<M&&(z+=2*D)}for(let F=0;F<S.length;F++)S[F]=S[F]/z;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=S,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-r;const U=this._sizeLods[l],V=3*U*(l>N-ys?l-N+ys:0),k=4*(this._cubeSize-U);xc(i,V,k,3*U,2*U),p.setRenderTarget(i),p.render(_,ph)}}function CT(s){const e=[],i=[],r=[];let l=s;const u=s-ys+1+N_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>s-ys?p=N_[h-s+ys-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,w=3,M=2,S=1,z=new Float32Array(w*E*y),N=new Float32Array(M*E*y),U=new Float32Array(S*E*y);for(let k=0;k<y;k++){const F=k%3*2/3-1,K=k>2?0:-1,D=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];z.set(D,w*E*k),N.set(v,M*E*k);const C=[k,k,k,k,k,k];U.set(C,S*E*k)}const V=new Ar;V.setAttribute("position",new wi(z,w)),V.setAttribute("uv",new wi(N,M)),V.setAttribute("faceIndex",new wi(U,S)),e.push(V),l>ys&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function B_(s,e,i){const r=new Tr(s,e,i);return r.texture.mapping=Oc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function DT(s,e,i){const r=new Float32Array(vr),l=new rt(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function I_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function F_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UT(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ch||p===Dh,g=p===As||p===Rs;if(m||g){let _=e.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new z_(s)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new z_(s)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function LT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Rc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function NT(s,e,i,r){const l={},u=new WeakMap;function h(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const y=u.get(v);y&&(e.remove(y),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER)}function m(_){const v=[],y=_.index,E=_.attributes.position;let w=0;if(y!==null){const z=y.array;w=y.version;for(let N=0,U=z.length;N<U;N+=3){const V=z[N+0],k=z[N+1],F=z[N+2];v.push(V,k,k,F,F,V)}}else if(E!==void 0){const z=E.array;w=E.version;for(let N=0,U=z.length/3-1;N<U;N+=3){const V=N+0,k=N+1,F=N+2;v.push(V,k,k,F,F,V)}}else return;const M=new(xv(v)?Av:bv)(v,1);M.version=w;const S=u.get(_);S&&e.remove(S),u.set(_,M)}function g(_){const v=u.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&m(_)}else m(_);return u.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function OT(s,e,i){let r;function l(v){r=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function p(v,y){s.drawElements(r,y,u,v*h),i.update(y,r,1)}function m(v,y,E){E!==0&&(s.drawElementsInstanced(r,y,u,v*h,E),i.update(y,r,E))}function g(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,v,0,E);let M=0;for(let S=0;S<E;S++)M+=y[S];i.update(M,r,1)}function _(v,y,E,w){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<v.length;S++)m(v[S]/h,y[S],w[S]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,v,0,w,0,E);let S=0;for(let z=0;z<E;z++)S+=y[z]*w[z];i.update(S,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function PT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function zT(s,e,i){const r=new WeakMap,l=new Ze;function u(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let C=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),w===!0&&(U=2),M===!0&&(U=3);let V=d.attributes.position.count*U,k=1;V>e.maxTextureSize&&(k=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*k*4*_),K=new Mv(F,V,k,_);K.type=na,K.needsUpdate=!0;const D=U*4;for(let G=0;G<_;G++){const ot=S[G],st=z[G],St=N[G],dt=V*k*4*G;for(let P=0;P<ot.count;P++){const Q=P*D;E===!0&&(l.fromBufferAttribute(ot,P),F[dt+Q+0]=l.x,F[dt+Q+1]=l.y,F[dt+Q+2]=l.z,F[dt+Q+3]=0),w===!0&&(l.fromBufferAttribute(st,P),F[dt+Q+4]=l.x,F[dt+Q+5]=l.y,F[dt+Q+6]=l.z,F[dt+Q+7]=0),M===!0&&(l.fromBufferAttribute(St,P),F[dt+Q+8]=l.x,F[dt+Q+9]=l.y,F[dt+Q+10]=l.z,F[dt+Q+11]=St.itemSize===4?l.w:1)}}v={count:_,texture:K,size:new we(V,k)},r.set(d,v),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const w=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function BT(s,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,_=e.get(p,g);if(l.get(_)!==m&&(e.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return _}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}const Nv=new Vn,H_=new Dv(1,1),Ov=new Mv,Pv=new uM,zv=new Cv,G_=[],V_=[],k_=new Float32Array(16),X_=new Float32Array(9),W_=new Float32Array(4);function Ls(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=G_[l];if(u===void 0&&(u=new Float32Array(l),G_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(u,d)}return u}function un(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function fn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Pc(s,e){let i=V_[e];i===void 0&&(i=new Int32Array(e),V_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function IT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function FT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;s.uniform2fv(this.addr,e),fn(i,e)}}function HT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;s.uniform3fv(this.addr,e),fn(i,e)}}function GT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;s.uniform4fv(this.addr,e),fn(i,e)}}function VT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;W_.set(r),s.uniformMatrix2fv(this.addr,!1,W_),fn(i,r)}}function kT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;X_.set(r),s.uniformMatrix3fv(this.addr,!1,X_),fn(i,r)}}function XT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;k_.set(r),s.uniformMatrix4fv(this.addr,!1,k_),fn(i,r)}}function WT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function qT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;s.uniform2iv(this.addr,e),fn(i,e)}}function YT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;s.uniform3iv(this.addr,e),fn(i,e)}}function ZT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;s.uniform4iv(this.addr,e),fn(i,e)}}function jT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function KT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;s.uniform2uiv(this.addr,e),fn(i,e)}}function QT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;s.uniform3uiv(this.addr,e),fn(i,e)}}function JT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;s.uniform4uiv(this.addr,e),fn(i,e)}}function $T(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(H_.compareFunction=Sv,u=H_):u=Nv,i.setTexture2D(e||u,l)}function tb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Pv,l)}function eb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||zv,l)}function nb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Ov,l)}function ib(s){switch(s){case 5126:return IT;case 35664:return FT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return XT;case 5124:case 35670:return WT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return ZT;case 5125:return jT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}function ab(s,e){s.uniform1fv(this.addr,e)}function rb(s,e){const i=Ls(e,this.size,2);s.uniform2fv(this.addr,i)}function sb(s,e){const i=Ls(e,this.size,3);s.uniform3fv(this.addr,i)}function ob(s,e){const i=Ls(e,this.size,4);s.uniform4fv(this.addr,i)}function lb(s,e){const i=Ls(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function cb(s,e){const i=Ls(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function ub(s,e){const i=Ls(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function fb(s,e){s.uniform1iv(this.addr,e)}function hb(s,e){s.uniform2iv(this.addr,e)}function db(s,e){s.uniform3iv(this.addr,e)}function pb(s,e){s.uniform4iv(this.addr,e)}function mb(s,e){s.uniform1uiv(this.addr,e)}function gb(s,e){s.uniform2uiv(this.addr,e)}function _b(s,e){s.uniform3uiv(this.addr,e)}function vb(s,e){s.uniform4uiv(this.addr,e)}function Sb(s,e,i){const r=this.cache,l=e.length,u=Pc(i,l);un(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Nv,u[h])}function xb(s,e,i){const r=this.cache,l=e.length,u=Pc(i,l);un(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Pv,u[h])}function Mb(s,e,i){const r=this.cache,l=e.length,u=Pc(i,l);un(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||zv,u[h])}function yb(s,e,i){const r=this.cache,l=e.length,u=Pc(i,l);un(r,u)||(s.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Ov,u[h])}function Eb(s){switch(s){case 5126:return ab;case 35664:return rb;case 35665:return sb;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return db;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return yb}}class Tb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ib(i.type)}}class bb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Eb(i.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function q_(s,e){s.seq.push(e),s.map[e.id]=e}function Rb(s,e,i){const r=s.name,l=r.length;for(Sh.lastIndex=0;;){const u=Sh.exec(r),h=Sh.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){q_(i,m===void 0?new Tb(d,s,e):new bb(d,s,e));break}else{let _=i.map[d];_===void 0&&(_=new Ab(d),q_(i,_)),i=_}}}class wc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Rb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Y_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const wb=37297;let Cb=0;function Db(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Z_=new se;function Ub(s){be._getMatrix(Z_,be.workingColorSpace,s);const e=`mat3( ${Z_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(s)){case Cc:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function j_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Db(s.getShaderSource(e),h)}else return l}function Lb(s,e){const i=Ub(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Nb(s,e){let i;switch(e){case Mx:i="Linear";break;case yx:i="Reinhard";break;case Ex:i="Cineon";break;case Tx:i="ACESFilmic";break;case Ax:i="AgX";break;case Rx:i="Neutral";break;case bx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new rt;function Ob(){be.getLuminanceCoefficients(Mc);const s=Mc.x.toFixed(4),e=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function zb(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Bb(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function No(s){return s!==""}function K_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(s){return s.replace(Ib,Hb)}const Fb=new Map;function Hb(s,e){let i=oe[e];if(i===void 0){const r=Fb.get(e);if(r!==void 0)i=oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rd(i)}const Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J_(s){return s.replace(Gb,Vb)}function Vb(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function $_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function Xb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function qb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ld:e="ENVMAP_BLENDING_MULTIPLY";break;case Sx:e="ENVMAP_BLENDING_MIX";break;case xx:e="ENVMAP_BLENDING_ADD";break}return e}function Yb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Zb(s,e,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=kb(i),m=Xb(i),g=Wb(i),_=qb(i),v=Yb(i),y=Pb(i),E=zb(u),w=l.createProgram();let M,S,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(No).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(No).join(`
`),S.length>0&&(S+=`
`)):(M=[$_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),S=[$_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?oe.tonemapping_pars_fragment:"",i.toneMapping!==Ga?Nb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Lb("linearToOutputTexel",i.outputColorSpace),Ob(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),h=rd(h),h=K_(h,i),h=Q_(h,i),d=rd(d),d=K_(d,i),d=Q_(d,i),h=J_(h),d=J_(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=z+M+h,U=z+S+d,V=Y_(l,l.VERTEX_SHADER,N),k=Y_(l,l.FRAGMENT_SHADER,U);l.attachShader(w,V),l.attachShader(w,k),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(G){if(s.debug.checkShaderErrors){const ot=l.getProgramInfoLog(w).trim(),st=l.getShaderInfoLog(V).trim(),St=l.getShaderInfoLog(k).trim();let dt=!0,P=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(dt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,V,k);else{const Q=j_(l,V,"vertex"),B=j_(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ot+`
`+Q+`
`+B)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(st===""||St==="")&&(P=!1);P&&(G.diagnostics={runnable:dt,programLog:ot,vertexShader:{log:st,prefix:M},fragmentShader:{log:St,prefix:S}})}l.deleteShader(V),l.deleteShader(k),K=new wc(l,w),D=Bb(l,w)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,wb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=V,this.fragmentShader=k,this}let jb=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Qb(e),i.set(e,r)),r}}class Qb{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}}function Jb(s,e,i,r,l,u,h){const d=new yv,p=new Kb,m=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,G,ot,st){const St=ot.fog,dt=st.geometry,P=D.isMeshStandardMaterial?ot.environment:null,Q=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),B=Q&&Q.mapping===Oc?Q.image.height:null,ct=E[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const R=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,W=R!==void 0?R.length:0;let lt=0;dt.morphAttributes.position!==void 0&&(lt=1),dt.morphAttributes.normal!==void 0&&(lt=2),dt.morphAttributes.color!==void 0&&(lt=3);let gt,Y,ft,xt;if(ct){const ye=Ai[ct];gt=ye.vertexShader,Y=ye.fragmentShader}else gt=D.vertexShader,Y=D.fragmentShader,p.update(D),ft=p.getVertexShaderID(D),xt=p.getFragmentShaderID(D);const bt=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),ae=st.isInstancedMesh===!0,Ot=st.isBatchedMesh===!0,ee=!!D.map,pe=!!D.matcap,$t=!!Q,I=!!D.aoMap,Pn=!!D.lightMap,ge=!!D.bumpMap,ne=!!D.normalMap,Xt=!!D.displacementMap,Ue=!!D.emissiveMap,Gt=!!D.metalnessMap,L=!!D.roughnessMap,b=D.anisotropy>0,tt=D.clearcoat>0,Mt=D.dispersion>0,yt=D.iridescence>0,pt=D.sheen>0,Bt=D.transmission>0,At=b&&!!D.anisotropyMap,Rt=tt&&!!D.clearcoatMap,_e=tt&&!!D.clearcoatNormalMap,Tt=tt&&!!D.clearcoatRoughnessMap,Ft=yt&&!!D.iridescenceMap,Yt=yt&&!!D.iridescenceThicknessMap,jt=pt&&!!D.sheenColorMap,Pt=pt&&!!D.sheenRoughnessMap,le=!!D.specularMap,te=!!D.specularColorMap,Le=!!D.specularIntensityMap,X=Bt&&!!D.transmissionMap,Lt=Bt&&!!D.thicknessMap,ut=!!D.gradientMap,_t=!!D.alphaMap,zt=D.alphaTest>0,Nt=!!D.alphaHash,ie=!!D.extensions;let Fe=Ga;D.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const $e={shaderID:ct,shaderType:D.type,shaderName:D.name,vertexShader:gt,fragmentShader:Y,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:xt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Ot,batchingColor:Ot&&st._colorsTexture!==null,instancing:ae,instancingColor:ae&&st.instanceColor!==null,instancingMorph:ae&&st.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ws,alphaToCoverage:!!D.alphaToCoverage,map:ee,matcap:pe,envMap:$t,envMapMode:$t&&Q.mapping,envMapCubeUVHeight:B,aoMap:I,lightMap:Pn,bumpMap:ge,normalMap:ne,displacementMap:v&&Xt,emissiveMap:Ue,normalMapObjectSpace:ne&&D.normalMapType===Ux,normalMapTangentSpace:ne&&D.normalMapType===vv,metalnessMap:Gt,roughnessMap:L,anisotropy:b,anisotropyMap:At,clearcoat:tt,clearcoatMap:Rt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Tt,dispersion:Mt,iridescence:yt,iridescenceMap:Ft,iridescenceThicknessMap:Yt,sheen:pt,sheenColorMap:jt,sheenRoughnessMap:Pt,specularMap:le,specularColorMap:te,specularIntensityMap:Le,transmission:Bt,transmissionMap:X,thicknessMap:Lt,gradientMap:ut,opaque:D.transparent===!1&&D.blending===Es&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:zt,alphaHash:Nt,combine:D.combine,mapUv:ee&&w(D.map.channel),aoMapUv:I&&w(D.aoMap.channel),lightMapUv:Pn&&w(D.lightMap.channel),bumpMapUv:ge&&w(D.bumpMap.channel),normalMapUv:ne&&w(D.normalMap.channel),displacementMapUv:Xt&&w(D.displacementMap.channel),emissiveMapUv:Ue&&w(D.emissiveMap.channel),metalnessMapUv:Gt&&w(D.metalnessMap.channel),roughnessMapUv:L&&w(D.roughnessMap.channel),anisotropyMapUv:At&&w(D.anisotropyMap.channel),clearcoatMapUv:Rt&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:_e&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&w(D.sheenRoughnessMap.channel),specularMapUv:le&&w(D.specularMap.channel),specularColorMapUv:te&&w(D.specularColorMap.channel),specularIntensityMapUv:Le&&w(D.specularIntensityMap.channel),transmissionMapUv:X&&w(D.transmissionMap.channel),thicknessMapUv:Lt&&w(D.thicknessMap.channel),alphaMapUv:_t&&w(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(ne||b),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!dt.attributes.uv&&(ee||_t),fog:!!St,useFog:D.fog===!0,fogExp2:!!St&&St.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ct,skinning:st.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:lt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ee&&D.map.isVideoTexture===!0&&be.getTransfer(D.map.colorSpace)===ze,decodeVideoTextureEmissive:Ue&&D.emissiveMap.isVideoTexture===!0&&be.getTransfer(D.emissiveMap.colorSpace)===ze,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ea,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ie&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&D.extensions.multiDraw===!0||Ot)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return $e.vertexUv1s=m.has(1),$e.vertexUv2s=m.has(2),$e.vertexUv3s=m.has(3),m.clear(),$e}function S(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(z(C,D),N(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function z(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const C=E[D.type];let G;if(C){const ot=Ai[C];G=TM.clone(ot.uniforms)}else G=D.uniforms;return G}function V(D,C){let G;for(let ot=0,st=g.length;ot<st;ot++){const St=g[ot];if(St.cacheKey===C){G=St,++G.usedTimes;break}}return G===void 0&&(G=new Zb(s,C,D,u),g.push(G)),G}function k(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function F(D){p.remove(D)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:U,acquireProgram:V,releaseProgram:k,releaseShaderCache:F,programs:g,dispose:K}}function $b(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,p){s.get(h)[d]=p}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function tA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function tv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ev(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(_,v,y,E,w,M){let S=s[e];return S===void 0?(S={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:w,group:M},s[e]=S):(S.id=_.id,S.object=_,S.geometry=v,S.material=y,S.groupOrder=E,S.renderOrder=_.renderOrder,S.z=w,S.group=M),e++,S}function d(_,v,y,E,w,M){const S=h(_,v,y,E,w,M);y.transmission>0?r.push(S):y.transparent===!0?l.push(S):i.push(S)}function p(_,v,y,E,w,M){const S=h(_,v,y,E,w,M);y.transmission>0?r.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function m(_,v){i.length>1&&i.sort(_||tA),r.length>1&&r.sort(v||tv),l.length>1&&l.sort(v||tv)}function g(){for(let _=e,v=s.length;_<v;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function eA(){let s=new WeakMap;function e(r,l){const u=s.get(r);let h;return u===void 0?(h=new ev,s.set(r,[h])):l>=u.length?(h=new ev,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function nA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Re};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return s[e.id]=i,i}}}function iA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let aA=0;function rA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sA(s){const e=new nA,i=iA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new rt);const l=new rt,u=new je,h=new je;function d(m){let g=0,_=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,E=0,w=0,M=0,S=0,z=0,N=0,U=0,V=0,k=0,F=0;m.sort(rA);for(let D=0,C=m.length;D<C;D++){const G=m[D],ot=G.color,st=G.intensity,St=G.distance,dt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ot.r*st,_+=ot.g*st,v+=ot.b*st;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],st);F++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Q=G.shadow,B=i.get(G);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=dt,r.directionalShadowMatrix[y]=G.shadow.matrix,z++}r.directional[y]=P,y++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(ot).multiplyScalar(st),P.distance=St,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[w]=P;const Q=G.shadow;if(G.map&&(r.spotLightMap[V]=G.map,V++,Q.updateMatrices(G),G.castShadow&&k++),r.spotLightMatrix[w]=Q.matrix,G.castShadow){const B=i.get(G);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=dt,U++}w++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(ot).multiplyScalar(st),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=P,M++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const Q=G.shadow,B=i.get(G);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,B.shadowCameraNear=Q.camera.near,B.shadowCameraFar=Q.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=dt,r.pointShadowMatrix[E]=G.shadow.matrix,N++}r.point[E]=P,E++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(st),P.groundColor.copy(G.groundColor).multiplyScalar(st),r.hemi[S]=P,S++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const K=r.hash;(K.directionalLength!==y||K.pointLength!==E||K.spotLength!==w||K.rectAreaLength!==M||K.hemiLength!==S||K.numDirectionalShadows!==z||K.numPointShadows!==N||K.numSpotShadows!==U||K.numSpotMaps!==V||K.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=M,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+V-k,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=F,K.directionalLength=y,K.pointLength=E,K.spotLength=w,K.rectAreaLength=M,K.hemiLength=S,K.numDirectionalShadows=z,K.numPointShadows=N,K.numSpotShadows=U,K.numSpotMaps=V,K.numLightProbes=F,r.version=aA++)}function p(m,g){let _=0,v=0,y=0,E=0,w=0;const M=g.matrixWorldInverse;for(let S=0,z=m.length;S<z;S++){const N=m[S];if(N.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),_++}else if(N.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),h.identity(),u.copy(N.matrixWorld),u.premultiply(M),h.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),v++}else if(N.isHemisphereLight){const U=r.hemi[w];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),w++}}}return{setup:d,setupView:p,state:r}}function nv(s){const e=new sA(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function oA(s){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new nv(s),e.set(l,[d])):u>=h.length?(d=new nv(s),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uA(s,e,i){let r=new vd;const l=new we,u=new we,h=new Ze,d=new NM({depthPacking:Dx}),p=new OM,m={},g=i.maxTextureSize,_={[Va]:Gn,[Gn]:Va,[ea]:ea},v=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:lA,fragmentShader:cA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ar;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new rn(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sv;let S=this.type;this.render=function(k,F,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||k.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),ot=s.state;ot.setBlending(Ha),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const st=S!==ta&&this.type===ta,St=S===ta&&this.type!==ta;for(let dt=0,P=k.length;dt<P;dt++){const Q=k[dt],B=Q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ct=B.getFrameExtents();if(l.multiply(ct),u.copy(B.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ct.x),l.x=u.x*ct.x,B.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ct.y),l.y=u.y*ct.y,B.mapSize.y=u.y)),B.map===null||st===!0||St===!0){const W=this.type!==ta?{minFilter:Si,magFilter:Si}:{};B.map!==null&&B.map.dispose(),B.map=new Tr(l.x,l.y,W),B.map.texture.name=Q.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const R=B.getViewportCount();for(let W=0;W<R;W++){const lt=B.getViewport(W);h.set(u.x*lt.x,u.y*lt.y,u.x*lt.z,u.y*lt.w),ot.viewport(h),B.updateMatrices(Q,W),r=B.getFrustum(),U(F,K,B.camera,Q,this.type)}B.isPointLightShadow!==!0&&this.type===ta&&z(B,K),B.needsUpdate=!1}S=this.type,M.needsUpdate=!1,s.setRenderTarget(D,C,G)};function z(k,F){const K=e.update(w);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Tr(l.x,l.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(F,null,K,v,w,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(F,null,K,y,w,null)}function N(k,F,K,D){let C=null;const G=K.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(G!==void 0)C=G;else if(C=K.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ot=C.uuid,st=F.uuid;let St=m[ot];St===void 0&&(St={},m[ot]=St);let dt=St[st];dt===void 0&&(dt=C.clone(),St[st]=dt,F.addEventListener("dispose",V)),C=dt}if(C.visible=F.visible,C.wireframe=F.wireframe,D===ta?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:_[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ot=s.properties.get(C);ot.light=K}return C}function U(k,F,K,D,C){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===ta)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,k.matrixWorld);const st=e.update(k),St=k.material;if(Array.isArray(St)){const dt=st.groups;for(let P=0,Q=dt.length;P<Q;P++){const B=dt[P],ct=St[B.materialIndex];if(ct&&ct.visible){const R=N(k,ct,D,C);k.onBeforeShadow(s,k,F,K,st,R,B),s.renderBufferDirect(K,null,st,R,k,B),k.onAfterShadow(s,k,F,K,st,R,B)}}}else if(St.visible){const dt=N(k,St,D,C);k.onBeforeShadow(s,k,F,K,st,dt,null),s.renderBufferDirect(K,null,st,dt,k,null),k.onAfterShadow(s,k,F,K,st,dt,null)}}const ot=k.children;for(let st=0,St=ot.length;st<St;st++)U(ot[st],F,K,D,C)}function V(k){k.target.removeEventListener("dispose",V);for(const K in m){const D=m[K],C=k.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const fA={[yh]:Eh,[Th]:Rh,[bh]:wh,[bs]:Ah,[Eh]:yh,[Rh]:Th,[wh]:bh,[Ah]:bs};function hA(s,e){function i(){let X=!1;const Lt=new Ze;let ut=null;const _t=new Ze(0,0,0,0);return{setMask:function(zt){ut!==zt&&!X&&(s.colorMask(zt,zt,zt,zt),ut=zt)},setLocked:function(zt){X=zt},setClear:function(zt,Nt,ie,Fe,$e){$e===!0&&(zt*=Fe,Nt*=Fe,ie*=Fe),Lt.set(zt,Nt,ie,Fe),_t.equals(Lt)===!1&&(s.clearColor(zt,Nt,ie,Fe),_t.copy(Lt))},reset:function(){X=!1,ut=null,_t.set(-1,0,0,0)}}}function r(){let X=!1,Lt=!1,ut=null,_t=null,zt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ie=e.get("EXT_clip_control");Nt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Lt=Nt;const Fe=zt;zt=null,this.setClear(Fe)}},getReversed:function(){return Lt},setTest:function(Nt){Nt?bt(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(Nt){ut!==Nt&&!X&&(s.depthMask(Nt),ut=Nt)},setFunc:function(Nt){if(Lt&&(Nt=fA[Nt]),_t!==Nt){switch(Nt){case yh:s.depthFunc(s.NEVER);break;case Eh:s.depthFunc(s.ALWAYS);break;case Th:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case bh:s.depthFunc(s.EQUAL);break;case Ah:s.depthFunc(s.GEQUAL);break;case Rh:s.depthFunc(s.GREATER);break;case wh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Nt}},setLocked:function(Nt){X=Nt},setClear:function(Nt){zt!==Nt&&(Lt&&(Nt=1-Nt),s.clearDepth(Nt),zt=Nt)},reset:function(){X=!1,ut=null,_t=null,zt=null,Lt=!1}}}function l(){let X=!1,Lt=null,ut=null,_t=null,zt=null,Nt=null,ie=null,Fe=null,$e=null;return{setTest:function(ye){X||(ye?bt(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(ye){Lt!==ye&&!X&&(s.stencilMask(ye),Lt=ye)},setFunc:function(ye,kn,hn){(ut!==ye||_t!==kn||zt!==hn)&&(s.stencilFunc(ye,kn,hn),ut=ye,_t=kn,zt=hn)},setOp:function(ye,kn,hn){(Nt!==ye||ie!==kn||Fe!==hn)&&(s.stencilOp(ye,kn,hn),Nt=ye,ie=kn,Fe=hn)},setLocked:function(ye){X=ye},setClear:function(ye){$e!==ye&&(s.clearStencil(ye),$e=ye)},reset:function(){X=!1,Lt=null,ut=null,_t=null,zt=null,Nt=null,ie=null,Fe=null,$e=null}}}const u=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,w=!1,M=null,S=null,z=null,N=null,U=null,V=null,k=null,F=new Re(0,0,0),K=0,D=!1,C=null,G=null,ot=null,st=null,St=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Q=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(B)[1]),P=Q>=1):B.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),P=Q>=2);let ct=null,R={};const W=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),gt=new Ze().fromArray(W),Y=new Ze().fromArray(lt);function ft(X,Lt,ut,_t){const zt=new Uint8Array(4),Nt=s.createTexture();s.bindTexture(X,Nt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<ut;ie++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Lt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,zt):s.texImage2D(Lt+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,zt);return Nt}const xt={};xt[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(s.DEPTH_TEST),h.setFunc(bs),ge(!1),ne(i_),bt(s.CULL_FACE),I(Ha);function bt(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Ct(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function ae(X,Lt){return _[X]!==Lt?(s.bindFramebuffer(X,Lt),_[X]=Lt,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Lt),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ot(X,Lt){let ut=y,_t=!1;if(X){ut=v.get(Lt),ut===void 0&&(ut=[],v.set(Lt,ut));const zt=X.textures;if(ut.length!==zt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let Nt=0,ie=zt.length;Nt<ie;Nt++)ut[Nt]=s.COLOR_ATTACHMENT0+Nt;ut.length=zt.length,_t=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,_t=!0);_t&&s.drawBuffers(ut)}function ee(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const pe={[_r]:s.FUNC_ADD,[nx]:s.FUNC_SUBTRACT,[ix]:s.FUNC_REVERSE_SUBTRACT};pe[ax]=s.MIN,pe[rx]=s.MAX;const $t={[sx]:s.ZERO,[ox]:s.ONE,[lx]:s.SRC_COLOR,[xh]:s.SRC_ALPHA,[px]:s.SRC_ALPHA_SATURATE,[hx]:s.DST_COLOR,[ux]:s.DST_ALPHA,[cx]:s.ONE_MINUS_SRC_COLOR,[Mh]:s.ONE_MINUS_SRC_ALPHA,[dx]:s.ONE_MINUS_DST_COLOR,[fx]:s.ONE_MINUS_DST_ALPHA,[mx]:s.CONSTANT_COLOR,[gx]:s.ONE_MINUS_CONSTANT_COLOR,[_x]:s.CONSTANT_ALPHA,[vx]:s.ONE_MINUS_CONSTANT_ALPHA};function I(X,Lt,ut,_t,zt,Nt,ie,Fe,$e,ye){if(X===Ha){w===!0&&(Ct(s.BLEND),w=!1);return}if(w===!1&&(bt(s.BLEND),w=!0),X!==ex){if(X!==M||ye!==D){if((S!==_r||U!==_r)&&(s.blendEquation(s.FUNC_ADD),S=_r,U=_r),ye)switch(X){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case a_:s.blendFunc(s.ONE,s.ONE);break;case r_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case s_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case a_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case r_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case s_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}z=null,N=null,V=null,k=null,F.set(0,0,0),K=0,M=X,D=ye}return}zt=zt||Lt,Nt=Nt||ut,ie=ie||_t,(Lt!==S||zt!==U)&&(s.blendEquationSeparate(pe[Lt],pe[zt]),S=Lt,U=zt),(ut!==z||_t!==N||Nt!==V||ie!==k)&&(s.blendFuncSeparate($t[ut],$t[_t],$t[Nt],$t[ie]),z=ut,N=_t,V=Nt,k=ie),(Fe.equals(F)===!1||$e!==K)&&(s.blendColor(Fe.r,Fe.g,Fe.b,$e),F.copy(Fe),K=$e),M=X,D=!1}function Pn(X,Lt){X.side===ea?Ct(s.CULL_FACE):bt(s.CULL_FACE);let ut=X.side===Gn;Lt&&(ut=!ut),ge(ut),X.blending===Es&&X.transparent===!1?I(Ha):I(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ue(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?bt(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(X){C!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),C=X)}function ne(X){X!==JS?(bt(s.CULL_FACE),X!==G&&(X===i_?s.cullFace(s.BACK):X===$S?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),G=X}function Xt(X){X!==ot&&(P&&s.lineWidth(X),ot=X)}function Ue(X,Lt,ut){X?(bt(s.POLYGON_OFFSET_FILL),(st!==Lt||St!==ut)&&(s.polygonOffset(Lt,ut),st=Lt,St=ut)):Ct(s.POLYGON_OFFSET_FILL)}function Gt(X){X?bt(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function L(X){X===void 0&&(X=s.TEXTURE0+dt-1),ct!==X&&(s.activeTexture(X),ct=X)}function b(X,Lt,ut){ut===void 0&&(ct===null?ut=s.TEXTURE0+dt-1:ut=ct);let _t=R[ut];_t===void 0&&(_t={type:void 0,texture:void 0},R[ut]=_t),(_t.type!==X||_t.texture!==Lt)&&(ct!==ut&&(s.activeTexture(ut),ct=ut),s.bindTexture(X,Lt||xt[X]),_t.type=X,_t.texture=Lt)}function tt(){const X=R[ct];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Mt(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(X){gt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),gt.copy(X))}function Pt(X){Y.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Y.copy(X))}function le(X,Lt){let ut=m.get(Lt);ut===void 0&&(ut=new WeakMap,m.set(Lt,ut));let _t=ut.get(X);_t===void 0&&(_t=s.getUniformBlockIndex(Lt,X.name),ut.set(X,_t))}function te(X,Lt){const _t=m.get(Lt).get(X);p.get(Lt)!==_t&&(s.uniformBlockBinding(Lt,_t,X.__bindingPointIndex),p.set(Lt,_t))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ct=null,R={},_={},v=new WeakMap,y=[],E=null,w=!1,M=null,S=null,z=null,N=null,U=null,V=null,k=null,F=new Re(0,0,0),K=0,D=!1,C=null,G=null,ot=null,st=null,St=null,gt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:bt,disable:Ct,bindFramebuffer:ae,drawBuffers:Ot,useProgram:ee,setBlending:I,setMaterial:Pn,setFlipSided:ge,setCullFace:ne,setLineWidth:Xt,setPolygonOffset:Ue,setScissorTest:Gt,activeTexture:L,bindTexture:b,unbindTexture:tt,compressedTexImage2D:Mt,compressedTexImage3D:yt,texImage2D:Ft,texImage3D:Yt,updateUBOMapping:le,uniformBlockBinding:te,texStorage2D:_e,texStorage3D:Tt,texSubImage2D:pt,texSubImage3D:Bt,compressedTexSubImage2D:At,compressedTexSubImage3D:Rt,scissor:jt,viewport:Pt,reset:Le}}function dA(s,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new we,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return y?new OffscreenCanvas(L,b):Uc("canvas")}function w(L,b,tt){let Mt=1;const yt=Gt(L);if((yt.width>tt||yt.height>tt)&&(Mt=tt/Math.max(yt.width,yt.height)),Mt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const pt=Math.floor(Mt*yt.width),Bt=Math.floor(Mt*yt.height);_===void 0&&(_=E(pt,Bt));const At=b?E(pt,Bt):_;return At.width=pt,At.height=Bt,At.getContext("2d").drawImage(L,0,0,pt,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+pt+"x"+Bt+")."),At}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),L;return L}function M(L){return L.generateMipmaps}function S(L){s.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,b,tt,Mt,yt=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pt=b;if(b===s.RED&&(tt===s.FLOAT&&(pt=s.R32F),tt===s.HALF_FLOAT&&(pt=s.R16F),tt===s.UNSIGNED_BYTE&&(pt=s.R8)),b===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(pt=s.R8UI),tt===s.UNSIGNED_SHORT&&(pt=s.R16UI),tt===s.UNSIGNED_INT&&(pt=s.R32UI),tt===s.BYTE&&(pt=s.R8I),tt===s.SHORT&&(pt=s.R16I),tt===s.INT&&(pt=s.R32I)),b===s.RG&&(tt===s.FLOAT&&(pt=s.RG32F),tt===s.HALF_FLOAT&&(pt=s.RG16F),tt===s.UNSIGNED_BYTE&&(pt=s.RG8)),b===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(pt=s.RG8UI),tt===s.UNSIGNED_SHORT&&(pt=s.RG16UI),tt===s.UNSIGNED_INT&&(pt=s.RG32UI),tt===s.BYTE&&(pt=s.RG8I),tt===s.SHORT&&(pt=s.RG16I),tt===s.INT&&(pt=s.RG32I)),b===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(pt=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(pt=s.RGB16UI),tt===s.UNSIGNED_INT&&(pt=s.RGB32UI),tt===s.BYTE&&(pt=s.RGB8I),tt===s.SHORT&&(pt=s.RGB16I),tt===s.INT&&(pt=s.RGB32I)),b===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(pt=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(pt=s.RGBA16UI),tt===s.UNSIGNED_INT&&(pt=s.RGBA32UI),tt===s.BYTE&&(pt=s.RGBA8I),tt===s.SHORT&&(pt=s.RGBA16I),tt===s.INT&&(pt=s.RGBA32I)),b===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(pt=s.RGB9_E5),b===s.RGBA){const Bt=yt?Cc:be.getTransfer(Mt);tt===s.FLOAT&&(pt=s.RGBA32F),tt===s.HALF_FLOAT&&(pt=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(pt=Bt===ze?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function U(L,b){let tt;return L?b===null||b===Er||b===Bo?tt=s.DEPTH24_STENCIL8:b===na?tt=s.DEPTH32F_STENCIL8:b===zo&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Er||b===Bo?tt=s.DEPTH_COMPONENT24:b===na?tt=s.DEPTH_COMPONENT32F:b===zo&&(tt=s.DEPTH_COMPONENT16),tt}function V(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Si&&L.minFilter!==Ri?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function k(L){const b=L.target;b.removeEventListener("dispose",k),K(b),b.isVideoTexture&&g.delete(b)}function F(L){const b=L.target;b.removeEventListener("dispose",F),C(b)}function K(L){const b=r.get(L);if(b.__webglInit===void 0)return;const tt=L.source,Mt=v.get(tt);if(Mt){const yt=Mt[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(L),Object.keys(Mt).length===0&&v.delete(tt)}r.remove(L)}function D(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const tt=L.source,Mt=v.get(tt);delete Mt[b.__cacheKey],h.memory.textures--}function C(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Mt=0;Mt<6;Mt++){if(Array.isArray(b.__webglFramebuffer[Mt]))for(let yt=0;yt<b.__webglFramebuffer[Mt].length;yt++)s.deleteFramebuffer(b.__webglFramebuffer[Mt][yt]);else s.deleteFramebuffer(b.__webglFramebuffer[Mt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let Mt=0;Mt<b.__webglFramebuffer.length;Mt++)s.deleteFramebuffer(b.__webglFramebuffer[Mt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Mt=0;Mt<b.__webglColorRenderbuffer.length;Mt++)b.__webglColorRenderbuffer[Mt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Mt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=L.textures;for(let Mt=0,yt=tt.length;Mt<yt;Mt++){const pt=r.get(tt[Mt]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(tt[Mt])}r.remove(L)}let G=0;function ot(){G=0}function st(){const L=G;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function St(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function dt(L,b){const tt=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){const Mt=L.image;if(Mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(tt,L,b);return}}i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+b)}function P(L,b){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Y(tt,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+b)}function Q(L,b){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Y(tt,L,b);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+b)}function B(L,b){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){ft(tt,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+b)}const ct={[Uh]:s.REPEAT,[Sr]:s.CLAMP_TO_EDGE,[Lh]:s.MIRRORED_REPEAT},R={[Si]:s.NEAREST,[wx]:s.NEAREST_MIPMAP_NEAREST,[ec]:s.NEAREST_MIPMAP_LINEAR,[Ri]:s.LINEAR,[Wf]:s.LINEAR_MIPMAP_NEAREST,[xr]:s.LINEAR_MIPMAP_LINEAR},W={[Lx]:s.NEVER,[Ix]:s.ALWAYS,[Nx]:s.LESS,[Sv]:s.LEQUAL,[Ox]:s.EQUAL,[Bx]:s.GEQUAL,[Px]:s.GREATER,[zx]:s.NOTEQUAL};function lt(L,b){if(b.type===na&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ri||b.magFilter===Wf||b.magFilter===ec||b.magFilter===xr||b.minFilter===Ri||b.minFilter===Wf||b.minFilter===ec||b.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ct[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ct[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ct[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,R[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,R[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,W[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Si||b.minFilter!==ec&&b.minFilter!==xr||b.type===na&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function gt(L,b){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",k));const Mt=b.source;let yt=v.get(Mt);yt===void 0&&(yt={},v.set(Mt,yt));const pt=St(b);if(pt!==L.__cacheKey){yt[pt]===void 0&&(yt[pt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),yt[pt].usedTimes++;const Bt=yt[L.__cacheKey];Bt!==void 0&&(yt[L.__cacheKey].usedTimes--,Bt.usedTimes===0&&D(b)),L.__cacheKey=pt,L.__webglTexture=yt[pt].texture}return tt}function Y(L,b,tt){let Mt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Mt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Mt=s.TEXTURE_3D);const yt=gt(L,b),pt=b.source;i.bindTexture(Mt,L.__webglTexture,s.TEXTURE0+tt);const Bt=r.get(pt);if(pt.version!==Bt.__version||yt===!0){i.activeTexture(s.TEXTURE0+tt);const At=be.getPrimaries(be.workingColorSpace),Rt=b.colorSpace===Fa?null:be.getPrimaries(b.colorSpace),_e=b.colorSpace===Fa||At===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Tt=w(b.image,!1,l.maxTextureSize);Tt=Ue(b,Tt);const Ft=u.convert(b.format,b.colorSpace),Yt=u.convert(b.type);let jt=N(b.internalFormat,Ft,Yt,b.colorSpace,b.isVideoTexture);lt(Mt,b);let Pt;const le=b.mipmaps,te=b.isVideoTexture!==!0,Le=Bt.__version===void 0||yt===!0,X=pt.dataReady,Lt=V(b,Tt);if(b.isDepthTexture)jt=U(b.format===Fo,b.type),Le&&(te?i.texStorage2D(s.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Ft,Yt,null));else if(b.isDataTexture)if(le.length>0){te&&Le&&i.texStorage2D(s.TEXTURE_2D,Lt,jt,le[0].width,le[0].height);for(let ut=0,_t=le.length;ut<_t;ut++)Pt=le[ut],te?X&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Ft,Yt,Pt.data):i.texImage2D(s.TEXTURE_2D,ut,jt,Pt.width,Pt.height,0,Ft,Yt,Pt.data);b.generateMipmaps=!1}else te?(Le&&i.texStorage2D(s.TEXTURE_2D,Lt,jt,Tt.width,Tt.height),X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Ft,Yt,Tt.data)):i.texImage2D(s.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Ft,Yt,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){te&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,jt,le[0].width,le[0].height,Tt.depth);for(let ut=0,_t=le.length;ut<_t;ut++)if(Pt=le[ut],b.format!==vi)if(Ft!==null)if(te){if(X)if(b.layerUpdates.size>0){const zt=L_(Pt.width,Pt.height,b.format,b.type);for(const Nt of b.layerUpdates){const ie=Pt.data.subarray(Nt*zt/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*zt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Nt,Pt.width,Pt.height,1,Ft,ie)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Pt.width,Pt.height,Tt.depth,Ft,Pt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,jt,Pt.width,Pt.height,Tt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Pt.width,Pt.height,Tt.depth,Ft,Yt,Pt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ut,jt,Pt.width,Pt.height,Tt.depth,0,Ft,Yt,Pt.data)}else{te&&Le&&i.texStorage2D(s.TEXTURE_2D,Lt,jt,le[0].width,le[0].height);for(let ut=0,_t=le.length;ut<_t;ut++)Pt=le[ut],b.format!==vi?Ft!==null?te?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Ft,Pt.data):i.compressedTexImage2D(s.TEXTURE_2D,ut,jt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?X&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Ft,Yt,Pt.data):i.texImage2D(s.TEXTURE_2D,ut,jt,Pt.width,Pt.height,0,Ft,Yt,Pt.data)}else if(b.isDataArrayTexture)if(te){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,jt,Tt.width,Tt.height,Tt.depth),X)if(b.layerUpdates.size>0){const ut=L_(Tt.width,Tt.height,b.format,b.type);for(const _t of b.layerUpdates){const zt=Tt.data.subarray(_t*ut/Tt.data.BYTES_PER_ELEMENT,(_t+1)*ut/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Ft,Yt,zt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,Yt,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,Ft,Yt,Tt.data);else if(b.isData3DTexture)te?(Le&&i.texStorage3D(s.TEXTURE_3D,Lt,jt,Tt.width,Tt.height,Tt.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,Yt,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,Ft,Yt,Tt.data);else if(b.isFramebufferTexture){if(Le)if(te)i.texStorage2D(s.TEXTURE_2D,Lt,jt,Tt.width,Tt.height);else{let ut=Tt.width,_t=Tt.height;for(let zt=0;zt<Lt;zt++)i.texImage2D(s.TEXTURE_2D,zt,jt,ut,_t,0,Ft,Yt,null),ut>>=1,_t>>=1}}else if(le.length>0){if(te&&Le){const ut=Gt(le[0]);i.texStorage2D(s.TEXTURE_2D,Lt,jt,ut.width,ut.height)}for(let ut=0,_t=le.length;ut<_t;ut++)Pt=le[ut],te?X&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ft,Yt,Pt):i.texImage2D(s.TEXTURE_2D,ut,jt,Ft,Yt,Pt);b.generateMipmaps=!1}else if(te){if(Le){const ut=Gt(Tt);i.texStorage2D(s.TEXTURE_2D,Lt,jt,ut.width,ut.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Yt,Tt)}else i.texImage2D(s.TEXTURE_2D,0,jt,Ft,Yt,Tt);M(b)&&S(Mt),Bt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ft(L,b,tt){if(b.image.length!==6)return;const Mt=gt(L,b),yt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+tt);const pt=r.get(yt);if(yt.version!==pt.__version||Mt===!0){i.activeTexture(s.TEXTURE0+tt);const Bt=be.getPrimaries(be.workingColorSpace),At=b.colorSpace===Fa?null:be.getPrimaries(b.colorSpace),Rt=b.colorSpace===Fa||Bt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const _e=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,Ft=[];for(let _t=0;_t<6;_t++)!_e&&!Tt?Ft[_t]=w(b.image[_t],!0,l.maxCubemapSize):Ft[_t]=Tt?b.image[_t].image:b.image[_t],Ft[_t]=Ue(b,Ft[_t]);const Yt=Ft[0],jt=u.convert(b.format,b.colorSpace),Pt=u.convert(b.type),le=N(b.internalFormat,jt,Pt,b.colorSpace),te=b.isVideoTexture!==!0,Le=pt.__version===void 0||Mt===!0,X=yt.dataReady;let Lt=V(b,Yt);lt(s.TEXTURE_CUBE_MAP,b);let ut;if(_e){te&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,le,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){ut=Ft[_t].mipmaps;for(let zt=0;zt<ut.length;zt++){const Nt=ut[zt];b.format!==vi?jt!==null?te?X&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,Nt.width,Nt.height,jt,Nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,le,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,Nt.width,Nt.height,jt,Pt,Nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,le,Nt.width,Nt.height,0,jt,Pt,Nt.data)}}}else{if(ut=b.mipmaps,te&&Le){ut.length>0&&Lt++;const _t=Gt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){te?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft[_t].width,Ft[_t].height,jt,Pt,Ft[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Ft[_t].width,Ft[_t].height,0,jt,Pt,Ft[_t].data);for(let zt=0;zt<ut.length;zt++){const ie=ut[zt].image[_t].image;te?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,ie.width,ie.height,jt,Pt,ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,le,ie.width,ie.height,0,jt,Pt,ie.data)}}else{te?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,jt,Pt,Ft[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,jt,Pt,Ft[_t]);for(let zt=0;zt<ut.length;zt++){const Nt=ut[zt];te?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,jt,Pt,Nt.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,le,jt,Pt,Nt.image[_t])}}}M(b)&&S(s.TEXTURE_CUBE_MAP),pt.__version=yt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function xt(L,b,tt,Mt,yt,pt){const Bt=u.convert(tt.format,tt.colorSpace),At=u.convert(tt.type),Rt=N(tt.internalFormat,Bt,At,tt.colorSpace),_e=r.get(b),Tt=r.get(tt);if(Tt.__renderTarget=b,!_e.__hasExternalTextures){const Ft=Math.max(1,b.width>>pt),Yt=Math.max(1,b.height>>pt);yt===s.TEXTURE_3D||yt===s.TEXTURE_2D_ARRAY?i.texImage3D(yt,pt,Rt,Ft,Yt,b.depth,0,Bt,At,null):i.texImage2D(yt,pt,Rt,Ft,Yt,0,Bt,At,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),ne(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,yt,Tt.__webglTexture,0,ge(b)):(yt===s.TEXTURE_2D||yt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Mt,yt,Tt.__webglTexture,pt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(L,b,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const Mt=b.depthTexture,yt=Mt&&Mt.isDepthTexture?Mt.type:null,pt=U(b.stencilBuffer,yt),Bt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=ge(b);ne(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,pt,b.width,b.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,pt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Bt,s.RENDERBUFFER,L)}else{const Mt=b.textures;for(let yt=0;yt<Mt.length;yt++){const pt=Mt[yt],Bt=u.convert(pt.format,pt.colorSpace),At=u.convert(pt.type),Rt=N(pt.internalFormat,Bt,At,pt.colorSpace),_e=ge(b);tt&&ne(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Rt,b.width,b.height):ne(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,Rt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=r.get(b.depthTexture);Mt.__renderTarget=b,(!Mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt(b.depthTexture,0);const yt=Mt.__webglTexture,pt=ge(b);if(b.depthTexture.format===Io)ne(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0);else if(b.depthTexture.format===Fo)ne(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function ae(L){const b=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const Mt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Mt){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Mt.removeEventListener("dispose",yt)};Mt.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=Mt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ct(b.__webglFramebuffer,L)}else if(tt){b.__webglDepthbuffer=[];for(let Mt=0;Mt<6;Mt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Mt]),b.__webglDepthbuffer[Mt]===void 0)b.__webglDepthbuffer[Mt]=s.createRenderbuffer(),bt(b.__webglDepthbuffer[Mt],L,!1);else{const yt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[Mt];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),bt(b.__webglDepthbuffer,L,!1);else{const Mt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,yt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,yt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(L,b,tt){const Mt=r.get(L);b!==void 0&&xt(Mt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&ae(L)}function ee(L){const b=L.texture,tt=r.get(L),Mt=r.get(b);L.addEventListener("dispose",F);const yt=L.textures,pt=L.isWebGLCubeRenderTarget===!0,Bt=yt.length>1;if(Bt||(Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture()),Mt.__version=b.version,h.memory.textures++),pt){tt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[At]=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)tt.__webglFramebuffer[At][Rt]=s.createFramebuffer()}else tt.__webglFramebuffer[At]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let At=0;At<b.mipmaps.length;At++)tt.__webglFramebuffer[At]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Bt)for(let At=0,Rt=yt.length;At<Rt;At++){const _e=r.get(yt[At]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),h.memory.textures++)}if(L.samples>0&&ne(L)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let At=0;At<yt.length;At++){const Rt=yt[At];tt.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[At]);const _e=u.convert(Rt.format,Rt.colorSpace),Tt=u.convert(Rt.type),Ft=N(Rt.internalFormat,_e,Tt,Rt.colorSpace,L.isXRRenderTarget===!0),Yt=ge(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Ft,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,tt.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){i.bindTexture(s.TEXTURE_CUBE_MAP,Mt.__webglTexture),lt(s.TEXTURE_CUBE_MAP,b);for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)xt(tt.__webglFramebuffer[At][Rt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt);else xt(tt.__webglFramebuffer[At],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(b)&&S(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Bt){for(let At=0,Rt=yt.length;At<Rt;At++){const _e=yt[At],Tt=r.get(_e);i.bindTexture(s.TEXTURE_2D,Tt.__webglTexture),lt(s.TEXTURE_2D,_e),xt(tt.__webglFramebuffer,L,_e,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,0),M(_e)&&S(s.TEXTURE_2D)}i.unbindTexture()}else{let At=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(At,Mt.__webglTexture),lt(At,b),b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)xt(tt.__webglFramebuffer[Rt],L,b,s.COLOR_ATTACHMENT0,At,Rt);else xt(tt.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,At,0);M(b)&&S(At),i.unbindTexture()}L.depthBuffer&&ae(L)}function pe(L){const b=L.textures;for(let tt=0,Mt=b.length;tt<Mt;tt++){const yt=b[tt];if(M(yt)){const pt=z(L),Bt=r.get(yt).__webglTexture;i.bindTexture(pt,Bt),S(pt),i.unbindTexture()}}}const $t=[],I=[];function Pn(L){if(L.samples>0){if(ne(L)===!1){const b=L.textures,tt=L.width,Mt=L.height;let yt=s.COLOR_BUFFER_BIT;const pt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Bt=r.get(L),At=b.length>1;if(At)for(let Rt=0;Rt<b.length;Rt++)i.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Rt=0;Rt<b.length;Rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(yt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(yt|=s.STENCIL_BUFFER_BIT)),At){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Bt.__webglColorRenderbuffer[Rt]);const _e=r.get(b[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,tt,Mt,0,0,tt,Mt,yt,s.NEAREST),p===!0&&($t.length=0,I.length=0,$t.push(s.COLOR_ATTACHMENT0+Rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&($t.push(pt),I.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let Rt=0;Rt<b.length;Rt++){i.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Bt.__webglColorRenderbuffer[Rt]);const _e=r.get(b[Rt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,_e,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ge(L){return Math.min(l.maxSamples,L.samples)}function ne(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(L){const b=h.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Ue(L,b){const tt=L.colorSpace,Mt=L.format,yt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==ws&&tt!==Fa&&(be.getTransfer(tt)===ze?(Mt!==vi||yt!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=ot,this.setTexture2D=dt,this.setTexture2DArray=P,this.setTexture3D=Q,this.setTextureCube=B,this.rebindTextures=Ot,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Pn,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ne}function pA(s,e){function i(r,l=Fa){let u;const h=be.getTransfer(l);if(r===ra)return s.UNSIGNED_BYTE;if(r===ud)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===uv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===lv)return s.BYTE;if(r===cv)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===cd)return s.INT;if(r===Er)return s.UNSIGNED_INT;if(r===na)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===fv)return s.ALPHA;if(r===hv)return s.RGB;if(r===vi)return s.RGBA;if(r===dv)return s.LUMINANCE;if(r===pv)return s.LUMINANCE_ALPHA;if(r===Io)return s.DEPTH_COMPONENT;if(r===Fo)return s.DEPTH_STENCIL;if(r===mv)return s.RED;if(r===hd)return s.RED_INTEGER;if(r===gv)return s.RG;if(r===dd)return s.RG_INTEGER;if(r===pd)return s.RGBA_INTEGER;if(r===yc||r===Ec||r===Tc||r===bc)if(h===ze)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nh||r===Oh||r===Ph||r===zh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Nh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ph)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bh||r===Ih||r===Fh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Bh||r===Ih)return h===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Fh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh||r===Jh||r===$h)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Hh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$h)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ac||r===td||r===ed)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Ac)return h===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===td)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ed)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_v||r===nd||r===id||r===ad)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ac)return u.COMPRESSED_RED_RGTC1_EXT;if(r===nd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===id)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ad)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Vn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ka({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new rn(new Xo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vA extends Ds{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,_=null,v=null,y=null,E=null;const w=new _A,M=i.getContextAttributes();let S=null,z=null;const N=[],U=[],V=new we;let k=null;const F=new gi;F.viewport=new Ze;const K=new gi;K.viewport=new Ze;const D=[F,K],C=new FM;let G=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ft=N[Y];return ft===void 0&&(ft=new fh,N[Y]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Y){let ft=N[Y];return ft===void 0&&(ft=new fh,N[Y]=ft),ft.getGripSpace()},this.getHand=function(Y){let ft=N[Y];return ft===void 0&&(ft=new fh,N[Y]=ft),ft.getHandSpace()};function st(Y){const ft=U.indexOf(Y.inputSource);if(ft===-1)return;const xt=N[ft];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,m||h),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function St(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",St),l.removeEventListener("inputsourceschange",dt);for(let Y=0;Y<N.length;Y++){const ft=U[Y];ft!==null&&(U[Y]=null,N[Y].disconnect(ft))}G=null,ot=null,w.reset(),e.setRenderTarget(S),y=null,v=null,_=null,l=null,z=null,gt.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",St),l.addEventListener("inputsourceschange",dt),M.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,bt=null,Ct=null;M.depth&&(Ct=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=M.stencil?Fo:Io,bt=M.stencil?Bo:Er);const ae={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(ae),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),z=new Tr(v.textureWidth,v.textureHeight,{format:vi,type:ra,depthTexture:new Dv(v.textureWidth,v.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const xt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),z=new Tr(y.framebufferWidth,y.framebufferHeight,{format:vi,type:ra,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),gt.setContext(l),gt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function dt(Y){for(let ft=0;ft<Y.removed.length;ft++){const xt=Y.removed[ft],bt=U.indexOf(xt);bt>=0&&(U[bt]=null,N[bt].disconnect(xt))}for(let ft=0;ft<Y.added.length;ft++){const xt=Y.added[ft];let bt=U.indexOf(xt);if(bt===-1){for(let ae=0;ae<N.length;ae++)if(ae>=U.length){U.push(xt),bt=ae;break}else if(U[ae]===null){U[ae]=xt,bt=ae;break}if(bt===-1)break}const Ct=N[bt];Ct&&Ct.connect(xt)}}const P=new rt,Q=new rt;function B(Y,ft,xt){P.setFromMatrixPosition(ft.matrixWorld),Q.setFromMatrixPosition(xt.matrixWorld);const bt=P.distanceTo(Q),Ct=ft.projectionMatrix.elements,ae=xt.projectionMatrix.elements,Ot=Ct[14]/(Ct[10]-1),ee=Ct[14]/(Ct[10]+1),pe=(Ct[9]+1)/Ct[5],$t=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],Pn=(ae[8]+1)/ae[0],ge=Ot*I,ne=Ot*Pn,Xt=bt/(-I+Pn),Ue=Xt*-I;if(ft.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ue),Y.translateZ(Xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Gt=Ot+Xt,L=ee+Xt,b=ge-Ue,tt=ne+(bt-Ue),Mt=pe*ee/L*Gt,yt=$t*ee/L*Gt;Y.projectionMatrix.makePerspective(b,tt,Mt,yt,Gt,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ct(Y,ft){ft===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ft.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ft=Y.near,xt=Y.far;w.texture!==null&&(w.depthNear>0&&(ft=w.depthNear),w.depthFar>0&&(xt=w.depthFar)),C.near=K.near=F.near=ft,C.far=K.far=F.far=xt,(G!==C.near||ot!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,ot=C.far),F.layers.mask=Y.layers.mask|2,K.layers.mask=Y.layers.mask|4,C.layers.mask=F.layers.mask|K.layers.mask;const bt=Y.parent,Ct=C.cameras;ct(C,bt);for(let ae=0;ae<Ct.length;ae++)ct(Ct[ae],bt);Ct.length===2?B(C,F,K):C.projectionMatrix.copy(F.projectionMatrix),R(Y,C,bt)};function R(Y,ft,xt){xt===null?Y.matrix.copy(ft.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ft.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ft.projectionMatrix),Y.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ho*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(Y){p=Y,v!==null&&(v.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let W=null;function lt(Y,ft){if(g=ft.getViewerPose(m||h),E=ft,g!==null){const xt=g.views;y!==null&&(e.setRenderTargetFramebuffer(z,y.framebuffer),e.setRenderTarget(z));let bt=!1;xt.length!==C.cameras.length&&(C.cameras.length=0,bt=!0);for(let Ot=0;Ot<xt.length;Ot++){const ee=xt[Ot];let pe=null;if(y!==null)pe=y.getViewport(ee);else{const I=_.getViewSubImage(v,ee);pe=I.viewport,Ot===0&&(e.setRenderTargetTextures(z,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(z))}let $t=D[Ot];$t===void 0&&($t=new gi,$t.layers.enable(Ot),$t.viewport=new Ze,D[Ot]=$t),$t.matrix.fromArray(ee.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(ee.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(pe.x,pe.y,pe.width,pe.height),Ot===0&&(C.matrix.copy($t.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),bt===!0&&C.cameras.push($t)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Ot=_.getDepthInformation(xt[0]);Ot&&Ot.isValid&&Ot.texture&&w.init(e,Ot,l.renderState)}}for(let xt=0;xt<N.length;xt++){const bt=U[xt],Ct=N[xt];bt!==null&&Ct!==void 0&&Ct.update(bt,ft,m||h)}W&&W(Y,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const gt=new Lv;gt.setAnimationLoop(lt),this.setAnimationLoop=function(Y){W=Y},this.dispose=function(){}}}const pr=new Ci,SA=new je;function xA(s,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,Rv(s)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,z,N,U){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(M,S):S.isMeshToonMaterial?(u(M,S),_(M,S)):S.isMeshPhongMaterial?(u(M,S),g(M,S)):S.isMeshStandardMaterial?(u(M,S),v(M,S),S.isMeshPhysicalMaterial&&y(M,S,U)):S.isMeshMatcapMaterial?(u(M,S),E(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),w(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?p(M,S,z,N):S.isSpriteMaterial?m(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Gn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Gn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const z=e.get(S),N=z.envMap,U=z.envMapRotation;N&&(M.envMap.value=N,pr.copy(U),pr.x*=-1,pr.y*=-1,pr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),M.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(pr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,z,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*z,M.scale.value=N*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function m(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function g(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,z){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Gn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const z=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function MA(s,e,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,N){const U=N.program;r.uniformBlockBinding(z,U)}function m(z,N){let U=l[z.id];U===void 0&&(E(z),U=g(z),l[z.id]=U,z.addEventListener("dispose",M));const V=N.program;r.updateUBOMapping(z,V);const k=e.render.frame;u[z.id]!==k&&(v(z),u[z.id]=k)}function g(z){const N=_();z.__bindingPointIndex=N;const U=s.createBuffer(),V=z.__size,k=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,V,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,U),U}function _(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(z){const N=l[z.id],U=z.uniforms,V=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let k=0,F=U.length;k<F;k++){const K=Array.isArray(U[k])?U[k]:[U[k]];for(let D=0,C=K.length;D<C;D++){const G=K[D];if(y(G,k,D,V)===!0){const ot=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let St=0;for(let dt=0;dt<st.length;dt++){const P=st[dt],Q=w(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,ot+St,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,St),St+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ot,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(z,N,U,V){const k=z.value,F=N+"_"+U;if(V[F]===void 0)return typeof k=="number"||typeof k=="boolean"?V[F]=k:V[F]=k.clone(),!0;{const K=V[F];if(typeof k=="number"||typeof k=="boolean"){if(K!==k)return V[F]=k,!0}else if(K.equals(k)===!1)return K.copy(k),!0}return!1}function E(z){const N=z.uniforms;let U=0;const V=16;for(let F=0,K=N.length;F<K;F++){const D=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,G=D.length;C<G;C++){const ot=D[C],st=Array.isArray(ot.value)?ot.value:[ot.value];for(let St=0,dt=st.length;St<dt;St++){const P=st[St],Q=w(P),B=U%V,ct=B%Q.boundary,R=B+ct;U+=ct,R!==0&&V-R<Q.storage&&(U+=V-R),ot.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=U,U+=Q.storage}}}const k=U%V;return k>0&&(U+=V-k),z.__size=U,z.__cache={},this}function w(z){const N={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(N.boundary=4,N.storage=4):z.isVector2?(N.boundary=8,N.storage=8):z.isVector3||z.isColor?(N.boundary=16,N.storage=12):z.isVector4?(N.boundary=16,N.storage=16):z.isMatrix3?(N.boundary=48,N.storage=48):z.isMatrix4?(N.boundary=64,N.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),N}function M(z){const N=z.target;N.removeEventListener("dispose",M);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function S(){for(const z in l)s.deleteBuffer(l[z]);h=[],l={},u={}}return{bind:p,update:m,dispose:S}}class yA{constructor(e={}){const{canvas:i=eM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),w=new Int32Array(4);let M=null,S=null;const z=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let V=!1;this._outputColorSpace=oi;let k=0,F=0,K=null,D=-1,C=null;const G=new Ze,ot=new Ze;let st=null;const St=new Re(0);let dt=0,P=i.width,Q=i.height,B=1,ct=null,R=null;const W=new Ze(0,0,P,Q),lt=new Ze(0,0,P,Q);let gt=!1;const Y=new vd;let ft=!1,xt=!1;const bt=new je,Ct=new je,ae=new rt,Ot=new Ze,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function $t(){return K===null?B:1}let I=r;function Pn(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${od}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),I===null){const Z="webgl2";if(I=Pn(Z,A),I===null)throw Pn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,ne,Xt,Ue,Gt,L,b,tt,Mt,yt,pt,Bt,At,Rt,_e,Tt,Ft,Yt,jt,Pt,le,te,Le,X;function Lt(){ge=new LT(I),ge.init(),te=new pA(I,ge),ne=new bT(I,ge,e,te),Xt=new hA(I,ge),ne.reverseDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),Ue=new PT(I),Gt=new $b,L=new dA(I,ge,Xt,Gt,ne,te,Ue),b=new RT(U),tt=new UT(U),Mt=new GM(I),Le=new ET(I,Mt),yt=new NT(I,Mt,Ue,Le),pt=new BT(I,yt,Mt,Ue),jt=new zT(I,ne,L),Tt=new AT(Gt),Bt=new Jb(U,b,tt,ge,ne,Le,Tt),At=new xA(U,Gt),Rt=new eA,_e=new oA(ge),Yt=new yT(U,b,tt,Xt,pt,y,p),Ft=new uA(U,pt,ne),X=new MA(I,Ue,ne,Xt),Pt=new TT(I,ge,Ue),le=new OT(I,ge,Ue),Ue.programs=Bt.programs,U.capabilities=ne,U.extensions=ge,U.properties=Gt,U.renderLists=Rt,U.shadowMap=Ft,U.state=Xt,U.info=Ue}Lt();const ut=new vA(U,I);this.xr=ut,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(P,Q,!1))},this.getSize=function(A){return A.set(P,Q)},this.setSize=function(A,Z,it=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,Q=Z,i.width=Math.floor(A*B),i.height=Math.floor(Z*B),it===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(P*B,Q*B).floor()},this.setDrawingBufferSize=function(A,Z,it){P=A,Q=Z,B=it,i.width=Math.floor(A*it),i.height=Math.floor(Z*it),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,Z,it,at){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,Z,it,at),Xt.viewport(G.copy(W).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(lt)},this.setScissor=function(A,Z,it,at){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,Z,it,at),Xt.scissor(ot.copy(lt).multiplyScalar(B).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){Xt.setScissorTest(gt=A)},this.setOpaqueSort=function(A){ct=A},this.setTransparentSort=function(A){R=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,it=!0){let at=0;if(A){let j=!1;if(K!==null){const Et=K.texture.format;j=Et===pd||Et===dd||Et===hd}if(j){const Et=K.texture.type,wt=Et===ra||Et===Er||Et===zo||Et===Bo||Et===ud||Et===fd,Dt=Yt.getClearColor(),It=Yt.getClearAlpha(),Qt=Dt.r,Wt=Dt.g,kt=Dt.b;wt?(E[0]=Qt,E[1]=Wt,E[2]=kt,E[3]=It,I.clearBufferuiv(I.COLOR,0,E)):(w[0]=Qt,w[1]=Wt,w[2]=kt,w[3]=It,I.clearBufferiv(I.COLOR,0,w))}else at|=I.COLOR_BUFFER_BIT}Z&&(at|=I.DEPTH_BUFFER_BIT),it&&(at|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Yt.dispose(),Rt.dispose(),_e.dispose(),Gt.dispose(),b.dispose(),tt.dispose(),pt.dispose(),Le.dispose(),X.dispose(),Bt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",sn),ut.removeEventListener("sessionend",vn),zn.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=Ue.autoReset,Z=Ft.enabled,it=Ft.autoUpdate,at=Ft.needsUpdate,j=Ft.type;Lt(),Ue.autoReset=A,Ft.enabled=Z,Ft.autoUpdate=it,Ft.needsUpdate=at,Ft.type=j}function Nt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const Z=A.target;Z.removeEventListener("dispose",ie),Fe(Z)}function Fe(A){$e(A),Gt.remove(A)}function $e(A){const Z=Gt.get(A).programs;Z!==void 0&&(Z.forEach(function(it){Bt.releaseProgram(it)}),A.isShaderMaterial&&Bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,it,at,j,Et){Z===null&&(Z=ee);const wt=j.isMesh&&j.matrixWorld.determinant()<0,Dt=qa(A,Z,it,at,j);Xt.setMaterial(at,wt);let It=it.index,Qt=1;if(at.wireframe===!0){if(It=yt.getWireframeAttribute(it),It===void 0)return;Qt=2}const Wt=it.drawRange,kt=it.attributes.position;let fe=Wt.start*Qt,Ee=(Wt.start+Wt.count)*Qt;Et!==null&&(fe=Math.max(fe,Et.start*Qt),Ee=Math.min(Ee,(Et.start+Et.count)*Qt)),It!==null?(fe=Math.max(fe,0),Ee=Math.min(Ee,It.count)):kt!=null&&(fe=Math.max(fe,0),Ee=Math.min(Ee,kt.count));const ke=Ee-fe;if(ke<0||ke===1/0)return;Le.setup(j,at,Dt,it,It);let ve,Se=Pt;if(It!==null&&(ve=Mt.get(It),Se=le,Se.setIndex(ve)),j.isMesh)at.wireframe===!0?(Xt.setLineWidth(at.wireframeLinewidth*$t()),Se.setMode(I.LINES)):Se.setMode(I.TRIANGLES);else if(j.isLine){let qt=at.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*$t()),j.isLineSegments?Se.setMode(I.LINES):j.isLineLoop?Se.setMode(I.LINE_LOOP):Se.setMode(I.LINE_STRIP)}else j.isPoints?Se.setMode(I.POINTS):j.isSprite&&Se.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Rc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Se.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,We=j._multiDrawCounts,Me=j._multiDrawCount,Tn=It?Mt.get(It).bytesPerElement:1,ca=Gt.get(at).currentProgram.getUniforms();for(let He=0;He<Me;He++)ca.setValue(I,"_gl_DrawID",He),Se.render(qt[He]/Tn,We[He])}else if(j.isInstancedMesh)Se.renderInstances(fe,ke,j.count);else if(it.isInstancedBufferGeometry){const qt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,We=Math.min(it.instanceCount,qt);Se.renderInstances(fe,ke,We)}else Se.render(fe,ke)};function ye(A,Z,it){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,oa(A,Z,it),A.side=Va,A.needsUpdate=!0,oa(A,Z,it),A.side=ea):oa(A,Z,it)}this.compile=function(A,Z,it=null){it===null&&(it=A),S=_e.get(it),S.init(Z),N.push(S),it.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),A!==it&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights();const at=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Et=j.material;if(Et)if(Array.isArray(Et))for(let wt=0;wt<Et.length;wt++){const Dt=Et[wt];ye(Dt,it,j),at.add(Dt)}else ye(Et,it,j),at.add(Et)}),S=N.pop(),at},this.compileAsync=function(A,Z,it=null){const at=this.compile(A,Z,it);return new Promise(j=>{function Et(){if(at.forEach(function(wt){Gt.get(wt).currentProgram.isReady()&&at.delete(wt)}),at.size===0){j(A);return}setTimeout(Et,10)}ge.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let kn=null;function hn(A){kn&&kn(A)}function sn(){zn.stop()}function vn(){zn.start()}const zn=new Lv;zn.setAnimationLoop(hn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){kn=A,ut.setAnimationLoop(A),A===null?zn.stop():zn.start()},ut.addEventListener("sessionstart",sn),ut.addEventListener("sessionend",vn),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Z),Z=ut.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,Z,K),S=_e.get(A,N.length),S.init(Z),N.push(S),Ct.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Y.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,ft=Tt.init(this.clippingPlanes,xt),M=Rt.get(A,z.length),M.init(),z.push(M),ut.enabled===!0&&ut.isPresenting===!0){const Et=U.xr.getDepthSensingMesh();Et!==null&&Xa(Et,Z,-1/0,U.sortObjects)}Xa(A,Z,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(ct,R),pe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,pe&&Yt.addToRenderList(M,A),this.info.render.frame++,ft===!0&&Tt.beginShadows();const it=S.state.shadowsArray;Ft.render(it,A,Z),ft===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=M.opaque,j=M.transmissive;if(S.setupLights(),Z.isArrayCamera){const Et=Z.cameras;if(j.length>0)for(let wt=0,Dt=Et.length;wt<Dt;wt++){const It=Et[wt];qo(at,j,A,It)}pe&&Yt.render(A);for(let wt=0,Dt=Et.length;wt<Dt;wt++){const It=Et[wt];Wo(M,A,It,It.viewport)}}else j.length>0&&qo(at,j,A,Z),pe&&Yt.render(A),Wo(M,A,Z);K!==null&&F===0&&(L.updateMultisampleRenderTarget(K),L.updateRenderTargetMipmap(K)),A.isScene===!0&&A.onAfterRender(U,A,Z),Le.resetDefaultState(),D=-1,C=null,N.pop(),N.length>0?(S=N[N.length-1],ft===!0&&Tt.setGlobalState(U.clippingPlanes,S.state.camera)):S=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function Xa(A,Z,it,at){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){at&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);const wt=pt.update(A),Dt=A.material;Dt.visible&&M.push(A,wt,Dt,it,Ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const wt=pt.update(A),Dt=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ot.copy(wt.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Dt)){const It=wt.groups;for(let Qt=0,Wt=It.length;Qt<Wt;Qt++){const kt=It[Qt],fe=Dt[kt.materialIndex];fe&&fe.visible&&M.push(A,wt,fe,it,Ot.z,kt)}}else Dt.visible&&M.push(A,wt,Dt,it,Ot.z,null)}}const Et=A.children;for(let wt=0,Dt=Et.length;wt<Dt;wt++)Xa(Et[wt],Z,it,at)}function Wo(A,Z,it,at){const j=A.opaque,Et=A.transmissive,wt=A.transparent;S.setupLightsView(it),ft===!0&&Tt.setGlobalState(U.clippingPlanes,it),at&&Xt.viewport(G.copy(at)),j.length>0&&Wa(j,Z,it),Et.length>0&&Wa(Et,Z,it),wt.length>0&&Wa(wt,Z,it),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function qo(A,Z,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[at.id]===void 0&&(S.state.transmissionRenderTarget[at.id]=new Tr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Go:ra,minFilter:xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Et=S.state.transmissionRenderTarget[at.id],wt=at.viewport||G;Et.setSize(wt.z*U.transmissionResolutionScale,wt.w*U.transmissionResolutionScale);const Dt=U.getRenderTarget();U.setRenderTarget(Et),U.getClearColor(St),dt=U.getClearAlpha(),dt<1&&U.setClearColor(16777215,.5),U.clear(),pe&&Yt.render(it);const It=U.toneMapping;U.toneMapping=Ga;const Qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),S.setupLightsView(at),ft===!0&&Tt.setGlobalState(U.clippingPlanes,at),Wa(A,it,at),L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let kt=0,fe=Z.length;kt<fe;kt++){const Ee=Z[kt],ke=Ee.object,ve=Ee.geometry,Se=Ee.material,qt=Ee.group;if(Se.side===ea&&ke.layers.test(at.layers)){const We=Se.side;Se.side=Gn,Se.needsUpdate=!0,sa(ke,it,at,ve,Se,qt),Se.side=We,Se.needsUpdate=!0,Wt=!0}}Wt===!0&&(L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et))}U.setRenderTarget(Dt),U.setClearColor(St,dt),Qt!==void 0&&(at.viewport=Qt),U.toneMapping=It}function Wa(A,Z,it){const at=Z.isScene===!0?Z.overrideMaterial:null;for(let j=0,Et=A.length;j<Et;j++){const wt=A[j],Dt=wt.object,It=wt.geometry,Qt=wt.group;let Wt=wt.material;Wt.allowOverride===!0&&at!==null&&(Wt=at),Dt.layers.test(it.layers)&&sa(Dt,Z,it,It,Wt,Qt)}}function sa(A,Z,it,at,j,Et){A.onBeforeRender(U,Z,it,at,j,Et),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(U,Z,it,at,A,Et),j.transparent===!0&&j.side===ea&&j.forceSinglePass===!1?(j.side=Gn,j.needsUpdate=!0,U.renderBufferDirect(it,Z,at,j,A,Et),j.side=Va,j.needsUpdate=!0,U.renderBufferDirect(it,Z,at,j,A,Et),j.side=ea):U.renderBufferDirect(it,Z,at,j,A,Et),A.onAfterRender(U,Z,it,at,j,Et)}function oa(A,Z,it){Z.isScene!==!0&&(Z=ee);const at=Gt.get(A),j=S.state.lights,Et=S.state.shadowsArray,wt=j.state.version,Dt=Bt.getParameters(A,j.state,Et,Z,it),It=Bt.getProgramCacheKey(Dt);let Qt=at.programs;at.environment=A.isMeshStandardMaterial?Z.environment:null,at.fog=Z.fog,at.envMap=(A.isMeshStandardMaterial?tt:b).get(A.envMap||at.environment),at.envMapRotation=at.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",ie),Qt=new Map,at.programs=Qt);let Wt=Qt.get(It);if(Wt!==void 0){if(at.currentProgram===Wt&&at.lightsStateVersion===wt)return Ui(A,Dt),Wt}else Dt.uniforms=Bt.getUniforms(A),A.onBeforeCompile(Dt,U),Wt=Bt.acquireProgram(Dt,It),Qt.set(It,Wt),at.uniforms=Dt.uniforms;const kt=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Tt.uniform),Ui(A,Dt),at.needsLights=tn(A),at.lightsStateVersion=wt,at.needsLights&&(kt.ambientLightColor.value=j.state.ambient,kt.lightProbe.value=j.state.probe,kt.directionalLights.value=j.state.directional,kt.directionalLightShadows.value=j.state.directionalShadow,kt.spotLights.value=j.state.spot,kt.spotLightShadows.value=j.state.spotShadow,kt.rectAreaLights.value=j.state.rectArea,kt.ltc_1.value=j.state.rectAreaLTC1,kt.ltc_2.value=j.state.rectAreaLTC2,kt.pointLights.value=j.state.point,kt.pointLightShadows.value=j.state.pointShadow,kt.hemisphereLights.value=j.state.hemi,kt.directionalShadowMap.value=j.state.directionalShadowMap,kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,kt.spotShadowMap.value=j.state.spotShadowMap,kt.spotLightMatrix.value=j.state.spotLightMatrix,kt.spotLightMap.value=j.state.spotLightMap,kt.pointShadowMap.value=j.state.pointShadowMap,kt.pointShadowMatrix.value=j.state.pointShadowMatrix),at.currentProgram=Wt,at.uniformsList=null,Wt}function Di(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=wc.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Ui(A,Z){const it=Gt.get(A);it.outputColorSpace=Z.outputColorSpace,it.batching=Z.batching,it.batchingColor=Z.batchingColor,it.instancing=Z.instancing,it.instancingColor=Z.instancingColor,it.instancingMorph=Z.instancingMorph,it.skinning=Z.skinning,it.morphTargets=Z.morphTargets,it.morphNormals=Z.morphNormals,it.morphColors=Z.morphColors,it.morphTargetsCount=Z.morphTargetsCount,it.numClippingPlanes=Z.numClippingPlanes,it.numIntersection=Z.numClipIntersection,it.vertexAlphas=Z.vertexAlphas,it.vertexTangents=Z.vertexTangents,it.toneMapping=Z.toneMapping}function qa(A,Z,it,at,j){Z.isScene!==!0&&(Z=ee),L.resetTextureUnits();const Et=Z.fog,wt=at.isMeshStandardMaterial?Z.environment:null,Dt=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ws,It=(at.isMeshStandardMaterial?tt:b).get(at.envMap||wt),Qt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Wt=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),kt=!!it.morphAttributes.position,fe=!!it.morphAttributes.normal,Ee=!!it.morphAttributes.color;let ke=Ga;at.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ke=U.toneMapping);const ve=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Se=ve!==void 0?ve.length:0,qt=Gt.get(at),We=S.state.lights;if(ft===!0&&(xt===!0||A!==C)){const dn=A===C&&at.id===D;Tt.setState(at,A,dn)}let Me=!1;at.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==We.state.version||qt.outputColorSpace!==Dt||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==It||at.fog===!0&&qt.fog!==Et||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Tt.numPlanes||qt.numIntersection!==Tt.numIntersection)||qt.vertexAlphas!==Qt||qt.vertexTangents!==Wt||qt.morphTargets!==kt||qt.morphNormals!==fe||qt.morphColors!==Ee||qt.toneMapping!==ke||qt.morphTargetsCount!==Se)&&(Me=!0):(Me=!0,qt.__version=at.version);let Tn=qt.currentProgram;Me===!0&&(Tn=oa(at,Z,j));let ca=!1,He=!1,Ni=!1;const Be=Tn.getUniforms(),bn=qt.uniforms;if(Xt.useProgram(Tn.program)&&(ca=!0,He=!0,Ni=!0),at.id!==D&&(D=at.id,He=!0),ca||C!==A){Xt.buffers.depth.getReversed()?(bt.copy(A.projectionMatrix),iM(bt),aM(bt),Be.setValue(I,"projectionMatrix",bt)):Be.setValue(I,"projectionMatrix",A.projectionMatrix),Be.setValue(I,"viewMatrix",A.matrixWorldInverse);const Sn=Be.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,ae.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&Be.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,He=!0,Ni=!0)}if(j.isSkinnedMesh){Be.setOptional(I,j,"bindMatrix"),Be.setOptional(I,j,"bindMatrixInverse");const dn=j.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Be.setValue(I,"boneTexture",dn.boneTexture,L))}j.isBatchedMesh&&(Be.setOptional(I,j,"batchingTexture"),Be.setValue(I,"batchingTexture",j._matricesTexture,L),Be.setOptional(I,j,"batchingIdTexture"),Be.setValue(I,"batchingIdTexture",j._indirectTexture,L),Be.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Be.setValue(I,"batchingColorTexture",j._colorsTexture,L));const on=it.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&jt.update(j,it,Tn),(He||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Be.setValue(I,"receiveShadow",j.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(bn.envMap.value=It,bn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Z.environment!==null&&(bn.envMapIntensity.value=Z.environmentIntensity),He&&(Be.setValue(I,"toneMappingExposure",U.toneMappingExposure),qt.needsLights&&la(bn,Ni),Et&&at.fog===!0&&At.refreshFogUniforms(bn,Et),At.refreshMaterialUniforms(bn,at,B,Q,S.state.transmissionRenderTarget[A.id]),wc.upload(I,Di(qt),bn,L)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(wc.upload(I,Di(qt),bn,L),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(I,"center",j.center),Be.setValue(I,"modelViewMatrix",j.modelViewMatrix),Be.setValue(I,"normalMatrix",j.normalMatrix),Be.setValue(I,"modelMatrix",j.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const dn=at.uniformsGroups;for(let Sn=0,xi=dn.length;Sn<xi;Sn++){const Oi=dn[Sn];X.update(Oi,Tn),X.bind(Oi,Tn)}}return Tn}function la(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function tn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,Z,it){const at=Gt.get(A);at.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Gt.get(A.texture).__webglTexture=Z,Gt.get(A.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const it=Gt.get(A);it.__webglFramebuffer=Z,it.__useDefaultFramebuffer=Z===void 0};const Yo=I.createFramebuffer();this.setRenderTarget=function(A,Z=0,it=0){K=A,k=Z,F=it;let at=!0,j=null,Et=!1,wt=!1;if(A){const It=Gt.get(A);if(It.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(I.FRAMEBUFFER,null),at=!1;else if(It.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(It.__hasExternalTextures)L.rebindTextures(A,Gt.get(A.texture).__webglTexture,Gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(It.__boundDepthTexture!==kt){if(kt!==null&&Gt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const Wt=Gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[Z])?j=Wt[Z][it]:j=Wt[Z],Et=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?j=Gt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?j=Wt[it]:j=Wt,G.copy(A.viewport),ot.copy(A.scissor),st=A.scissorTest}else G.copy(W).multiplyScalar(B).floor(),ot.copy(lt).multiplyScalar(B).floor(),st=gt;if(it!==0&&(j=Yo),Xt.bindFramebuffer(I.FRAMEBUFFER,j)&&at&&Xt.drawBuffers(A,j),Xt.viewport(G),Xt.scissor(ot),Xt.setScissorTest(st),Et){const It=Gt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Z,It.__webglTexture,it)}else if(wt){const It=Gt.get(A.texture),Qt=Z;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,It.__webglTexture,it,Qt)}else if(A!==null&&it!==0){const It=Gt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,It.__webglTexture,it)}D=-1},this.readRenderTargetPixels=function(A,Z,it,at,j,Et,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){Xt.bindFramebuffer(I.FRAMEBUFFER,Dt);try{const It=A.texture,Qt=It.format,Wt=It.type;if(!ne.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-at&&it>=0&&it<=A.height-j&&I.readPixels(Z,it,at,j,te.convert(Qt),te.convert(Wt),Et)}finally{const It=K!==null?Gt.get(K).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(A,Z,it,at,j,Et,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt)if(Z>=0&&Z<=A.width-at&&it>=0&&it<=A.height-j){Xt.bindFramebuffer(I.FRAMEBUFFER,Dt);const It=A.texture,Qt=It.format,Wt=It.type;if(!ne.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.bufferData(I.PIXEL_PACK_BUFFER,Et.byteLength,I.STREAM_READ),I.readPixels(Z,it,at,j,te.convert(Qt),te.convert(Wt),0);const fe=K!==null?Gt.get(K).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,fe);const Ee=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await nM(I,Ee,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Et),I.deleteBuffer(kt),I.deleteSync(Ee),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,it=0){const at=Math.pow(2,-it),j=Math.floor(A.image.width*at),Et=Math.floor(A.image.height*at),wt=Z!==null?Z.x:0,Dt=Z!==null?Z.y:0;L.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,it,0,0,wt,Dt,j,Et),Xt.unbindTexture()};const Zo=I.createFramebuffer(),Li=I.createFramebuffer();this.copyTextureToTexture=function(A,Z,it=null,at=null,j=0,Et=null){Et===null&&(j!==0?(Rc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=j,j=0):Et=0);let wt,Dt,It,Qt,Wt,kt,fe,Ee,ke;const ve=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(it!==null)wt=it.max.x-it.min.x,Dt=it.max.y-it.min.y,It=it.isBox3?it.max.z-it.min.z:1,Qt=it.min.x,Wt=it.min.y,kt=it.isBox3?it.min.z:0;else{const on=Math.pow(2,-j);wt=Math.floor(ve.width*on),Dt=Math.floor(ve.height*on),A.isDataArrayTexture?It=ve.depth:A.isData3DTexture?It=Math.floor(ve.depth*on):It=1,Qt=0,Wt=0,kt=0}at!==null?(fe=at.x,Ee=at.y,ke=at.z):(fe=0,Ee=0,ke=0);const Se=te.convert(Z.format),qt=te.convert(Z.type);let We;Z.isData3DTexture?(L.setTexture3D(Z,0),We=I.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(L.setTexture2DArray(Z,0),We=I.TEXTURE_2D_ARRAY):(L.setTexture2D(Z,0),We=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment);const Me=I.getParameter(I.UNPACK_ROW_LENGTH),Tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ca=I.getParameter(I.UNPACK_SKIP_PIXELS),He=I.getParameter(I.UNPACK_SKIP_ROWS),Ni=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);const Be=A.isDataArrayTexture||A.isData3DTexture,bn=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const on=Gt.get(A),dn=Gt.get(Z),Sn=Gt.get(on.__renderTarget),xi=Gt.get(dn.__renderTarget);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Oi=0;Oi<It;Oi++)Be&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.get(A).__webglTexture,j,kt+Oi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.get(Z).__webglTexture,Et,ke+Oi)),I.blitFramebuffer(Qt,Wt,wt,Dt,fe,Ee,wt,Dt,I.DEPTH_BUFFER_BIT,I.NEAREST);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Gt.has(A)){const on=Gt.get(A),dn=Gt.get(Z);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,Zo),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Li);for(let Sn=0;Sn<It;Sn++)Be?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,j,kt+Sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,j),bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,Et,ke+Sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,Et),j!==0?I.blitFramebuffer(Qt,Wt,wt,Dt,fe,Ee,wt,Dt,I.COLOR_BUFFER_BIT,I.NEAREST):bn?I.copyTexSubImage3D(We,Et,fe,Ee,ke+Sn,Qt,Wt,wt,Dt):I.copyTexSubImage2D(We,Et,fe,Ee,Qt,Wt,wt,Dt);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else bn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(We,Et,fe,Ee,ke,wt,Dt,It,Se,qt,ve.data):Z.isCompressedArrayTexture?I.compressedTexSubImage3D(We,Et,fe,Ee,ke,wt,Dt,It,Se,ve.data):I.texSubImage3D(We,Et,fe,Ee,ke,wt,Dt,It,Se,qt,ve):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Et,fe,Ee,wt,Dt,Se,qt,ve.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Et,fe,Ee,ve.width,ve.height,Se,ve.data):I.texSubImage2D(I.TEXTURE_2D,Et,fe,Ee,wt,Dt,Se,qt,ve);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ca),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ni),Et===0&&Z.generateMipmaps&&I.generateMipmap(We),Xt.unbindTexture()},this.copyTextureToTexture3D=function(A,Z,it=null,at=null,j=0){return Rc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Z,it,at,j)},this.initRenderTarget=function(A){Gt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Xt.unbindTexture()},this.resetState=function(){k=0,F=0,K=null,Xt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}const xs=-8,Ms=8,iv=Ms-xs+1,En=42,EA=()=>{const s=_=>{const v=new yA({alpha:!0,antialias:!0,canvas:_});return v.setPixelRatio(window.devicePixelRatio),v.setSize(window.innerWidth,window.innerHeight),v.shadowMap.enabled=!0,v},e=()=>{const v=window.innerWidth/window.innerHeight,y=v<1?300:300*v,E=v<1?300/v:300,w=new Sd(y/-2,y/2,E/2,E/-2,100,900);return w.up.set(0,0,1),w.position.set(300,-300,300),w.lookAt(0,0,0),w},i=()=>{const _=new li,v=new rn(new On(15,15,20),new mi({color:"white",flatShading:!0}));v.castShadow=!0,v.receiveShadow=!0,v.position.z=10,_.add(v);const y=new rn(new On(2,4,2),new mi({color:15753626,flatShading:!0}));y.position.z=21,y.castShadow=!0,y.receiveShadow=!0,_.add(y);const E=new li;return E.add(_),E},r=_=>{const v=new li;v.position.y=_*En;const y=new rn(new On(iv*En,En,3),new mi({color:12252245}));return y.position.z=1.5,y.receiveShadow=!0,v.add(y),v},l=()=>[],u=(_,v)=>{const y=new li;y.position.x=_*En;const E=new rn(new On(15,15,20),new mi({color:5056806,flatShading:!0}));E.position.z=10,y.add(E);const w=new rn(new On(30,30,v),new mi({color:8036893,flatShading:!0}));return w.position.z=v/2+20,w.castShadow=!0,w.receiveShadow=!0,y.add(w),y},h=_=>{const v=new li;v.position.y=_*En;const y=new rn(new Xo(iv*En,En),new mi({color:4541017}));return y.receiveShadow=!0,v.add(y),v},d=_=>{const v=new rn(new On(12,33,12),new mi({color:3355443,flatShading:!0}));return v.position.x=_,v.position.z=6,v};return{createRenderer:s,createCamera:e,createPlayer:i,createGrass:r,createTree:u,createMetaData:l,createRoad:h,createCar:(_,v,y)=>{const E=new li;E.position.x=_*En,v||(E.rotation.z=Math.PI);const w=new rn(new On(60,30,15),new mi({color:y,flatShading:!0}));w.position.z=12,w.castShadow=!0,w.receiveShadow=!0,E.add(w);const M=new rn(new On(33,24,12),new mi({color:"white",flatShading:!0}));M.position.x=-6,M.position.z=25.5,M.castShadow=!0,M.receiveShadow=!0,E.add(M);const S=d(18);E.add(S);const z=d(-18);return E.add(z),E},createTruck:(_,v,y)=>{const E=new li;E.position.x=_*En,v||(E.rotation.z=Math.PI);const w=new rn(new On(70,35,35),new mi({color:11847420,flatShading:!0}));w.position.x=-15,w.position.z=25,w.castShadow=!0,w.receiveShadow=!0,E.add(w);const M=new rn(new On(30,30,30),new mi({color:y,flatShading:!0}));M.position.x=35,M.position.z=20,M.castShadow=!0,M.receiveShadow=!0,E.add(M);const S=d(37);E.add(S);const z=d(5);E.add(z);const N=d(-35);return E.add(N),E},createDirectionalLight:()=>{const _=new BM;return _.position.set(-100,-100,200),_.up.set(0,0,1),_.castShadow=!0,_.shadow.mapSize.width=2048,_.shadow.mapSize.height=2048,_.shadow.camera.up.set(0,0,1),_.shadow.camera.left=-400,_.shadow.camera.right=400,_.shadow.camera.top=400,_.shadow.camera.bottom=-400,_.shadow.camera.near=50,_.shadow.camera.far=400,_}}};var Bv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},av=Mr.createContext&&Mr.createContext(Bv),TA=["attr","size","title"];function bA(s,e){if(s==null)return{};var i=AA(s,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function AA(s,e){if(s==null)return{};var i={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;i[r]=s[r]}return i}function Lc(){return Lc=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Lc.apply(this,arguments)}function rv(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Nc(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?rv(Object(i),!0).forEach(function(r){RA(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):rv(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function RA(s,e,i){return e=wA(e),e in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function wA(s){var e=CA(s,"string");return typeof e=="symbol"?e:e+""}function CA(s,e){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function Iv(s){return s&&s.map((e,i)=>Mr.createElement(e.tag,Nc({key:i},e.attr),Iv(e.child)))}function zc(s){return e=>Mr.createElement(DA,Lc({attr:Nc({},s.attr)},e),Iv(s.child))}function DA(s){var e=i=>{var{attr:r,size:l,title:u}=s,h=bA(s,TA),d=l||i.size||"1em",p;return i.className&&(p=i.className),s.className&&(p=(p?p+" ":"")+s.className),Mr.createElement("svg",Lc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:p,style:Nc(Nc({color:s.color||i.color},i.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&Mr.createElement("title",null,u),s.children)};return av!==void 0?Mr.createElement(av.Consumer,null,i=>e(i)):e(Bv)}function UA(s){return zc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(s)}function LA(s){return zc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(s)}function NA(s){return zc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(s)}function OA(s){return zc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(s)}function Ia(s){return s[Math.floor(Math.random()*s.length)]}const PA=()=>{const{createRenderer:s,createCamera:e,createPlayer:i,createGrass:r,createMetaData:l,createTree:u,createRoad:h,createCar:d,createTruck:p,createDirectionalLight:m}=EA(),g=Lo.useRef(null),_=Lo.useRef(null),v=Lo.useRef(null),y=[],E=new D_(!1),w=i(),M=new li,S=l(),z={currentRow:0,currentTile:0};Lo.useEffect(()=>{if(!g.current)return;const B=new DM,ct=s(g.current),R=e(),W=new IM,lt=m(),gt=new D_;B.add(w),B.add(M),B.add(W),lt.position.set(-100,-100,200),lt.target=w,w.add(lt),w.add(R);const Y=()=>{const Ot=window.innerWidth/window.innerHeight,ee=300,pe=Ot<1?ee:ee*Ot,$t=Ot<1?ee/Ot:ee;R.left=-pe/2,R.right=pe/2,R.top=$t/2,R.bottom=-$t/2,R.updateProjectionMatrix(),ct.setSize(window.innerWidth,window.innerHeight)},ft=Ot=>{Ot.key==="ArrowUp"?(Ot.preventDefault(),ot("forward")):Ot.key==="ArrowDown"?(Ot.preventDefault(),ot("backward")):Ot.key==="ArrowLeft"?(Ot.preventDefault(),ot("left")):Ot.key==="ArrowRight"&&(Ot.preventDefault(),ot("right"))},xt=()=>{const Ot=gt.getDelta();S.forEach(ee=>{if(ee.type==="car"||ee.type==="truck"){const pe=(xs-2)*En,$t=(Ms+2)*En;ee.vehicles.forEach(({ref:I})=>{if(!I)throw Error("Vehicle reference is missing");ee.direction?I.position.x=I.position.x>$t?pe:I.position.x+ee.speed*Ot:I.position.x=I.position.x<pe?$t:I.position.x-ee.speed*Ot})}})},bt=()=>{if(!y.length)return;E.running||E.start();const ee=Math.min(1,E.getElapsedTime()/.2);St(ee),dt(ee),ee>=1&&(st(),E.stop())},Ct=()=>{const Ot=S[z.currentRow-1];if(Ot&&(Ot.type==="car"||Ot.type==="truck")){const ee=new br;ee.setFromObject(w),Ot.vehicles.forEach(({ref:pe})=>{if(!pe)throw Error("Vehicle reference is missing");const $t=new br;if($t.setFromObject(pe),ee.intersectsBox($t)){if(!_.current||!v.current)return;_.current.style.visibility="visible",v.current.innerText=z.currentRow.toString()}})}},ae=()=>{xt(),bt(),Ct(),ct.render(B,R)};return window.addEventListener("keydown",ft),window.addEventListener("resize",Y),N(),ct.setAnimationLoop(ae),()=>{ct&&(window.removeEventListener("keydown",ft),window.removeEventListener("resize",Y),ct.dispose())}});const N=()=>{V(),U(),v.current&&(v.current.innerText="0"),_.current&&(_.current.style.visibility="hidden")},U=()=>{S.length=0,M.remove(...M.children);for(let B=0;B>-5;B--){const ct=r(B);M.add(ct)}k()},V=()=>{w.position.x=0,w.position.y=0,w.children[0].position.z=0,z.currentRow=0,z.currentTile=0,y.length=0},k=()=>{const B=F(20),ct=S.length;S.push(...B),B.forEach((R,W)=>{const lt=ct+W+1;if(R.type==="forest"){const gt=r(lt);R.trees.forEach(({tileIndex:Y,height:ft})=>{const xt=u(Y,ft);gt.add(xt)}),M.add(gt)}if(R.type==="car"){const gt=h(lt);R.vehicles.forEach(Y=>{const ft=d(Y.initialTileIndex,R.direction,Y.color);Y.ref=ft,gt.add(ft)}),M.add(gt)}if(R.type==="truck"){const gt=h(lt);R.vehicles.forEach(Y=>{const ft=p(Y.initialTileIndex,R.direction,Y.color);Y.ref=ft,gt.add(ft)}),M.add(gt)}})},F=B=>{const ct=[];for(let R=0;R<B;R++){const W=K();ct.push(W)}return ct},K=()=>{const B=Ia(["car","truck","forest"]);return B==="car"?C():B==="truck"?G():D()},D=()=>{const B=new Set;return{type:"forest",trees:Array.from({length:4},()=>{let R;do R=rs.randInt(xs,Ms);while(B.has(R));B.add(R);const W=Ia([20,45,60]);return{tileIndex:R,height:W}})}},C=()=>{const B=Ia([!0,!1]),ct=Ia([125,156,188]),R=new Set,W=Array.from({length:3},()=>{let lt;do lt=rs.randInt(xs,Ms);while(R.has(lt));R.add(lt-1),R.add(lt),R.add(lt+1);const gt=Ia([10822947,12432952,7909707]);return{initialTileIndex:lt,color:gt}});return{type:"car",direction:B,speed:ct,vehicles:W}},G=()=>{const B=Ia([!0,!1]),ct=Ia([125,156,188]),R=new Set,W=Array.from({length:2},()=>{let lt;do lt=rs.randInt(xs,Ms);while(R.has(lt));R.add(lt-2),R.add(lt-1),R.add(lt),R.add(lt+1),R.add(lt+2);const gt=Ia([10822947,12432952,7909707]);return{initialTileIndex:lt,color:gt}});return{type:"truck",direction:B,speed:ct,vehicles:W}},ot=B=>{Q({rowIndex:z.currentRow,tileIndex:z.currentTile},[...y,B])&&y.push(B)},st=()=>{const B=y.shift();B==="forward"&&(z.currentRow+=1),B==="backward"&&(z.currentRow-=1),B==="left"&&(z.currentTile-=1),B==="right"&&(z.currentTile+=1),z.currentRow>S.length-10&&k();const ct=document.getElementById("score");ct&&(ct.innerText=z.currentRow.toString())},St=B=>{const ct=z.currentTile*En,R=z.currentRow*En;let W=ct,lt=R;y[0]==="left"&&(W-=En),y[0]==="right"&&(W+=En),y[0]==="forward"&&(lt+=En),y[0]==="backward"&&(lt-=En),w.position.x=rs.lerp(ct,W,B),w.position.y=rs.lerp(R,lt,B),w.children[0].position.z=Math.sin(B*Math.PI)*8},dt=B=>{let ct=0;y[0]=="forward"&&(ct=0),y[0]=="left"&&(ct=Math.PI/2),y[0]=="right"&&(ct=-Math.PI/2),y[0]=="backward"&&(ct=Math.PI),w.children[0].rotation.z=rs.lerp(w.children[0].rotation.z,ct,B)},P=(B,ct)=>ct.reduce((R,W)=>W==="forward"?{rowIndex:R.rowIndex+1,tileIndex:R.tileIndex}:W==="backward"?{rowIndex:R.rowIndex-1,tileIndex:R.tileIndex}:W==="left"?{rowIndex:R.rowIndex,tileIndex:R.tileIndex-1}:W==="right"?{rowIndex:R.rowIndex,tileIndex:R.tileIndex+1}:R,B),Q=(B,ct)=>{const R=P(B,ct);if(R.rowIndex===-1||R.tileIndex===xs-1||R.tileIndex===Ms+1)return!1;const W=S[R.rowIndex-1];return!(W&&W.type==="forest"&&W.trees.some(lt=>lt.tileIndex===R.tileIndex))};return Je.jsxs(Je.Fragment,{children:[Je.jsx("canvas",{ref:g,className:"h-full"}),Je.jsx("div",{id:"controls",children:Je.jsxs("div",{children:[Je.jsx("button",{onClick:()=>ot("forward"),id:"forward",className:"flex justify-center items-center",children:Je.jsx(OA,{})}),Je.jsx("button",{onClick:()=>ot("left"),id:"left",className:"flex justify-center items-center",children:Je.jsx(LA,{})}),Je.jsx("button",{onClick:()=>ot("backward"),id:"backward",className:"flex justify-center items-center",children:Je.jsx(UA,{})}),Je.jsx("button",{onClick:()=>ot("right"),id:"right",className:"flex justify-center items-center",children:Je.jsx(NA,{})})]})}),Je.jsx("div",{id:"score",children:"0"}),Je.jsx("div",{id:"result-container",ref:_,children:Je.jsxs("div",{id:"result",children:[Je.jsx("h1",{children:"Game Over"}),Je.jsxs("p",{children:["Your score: ",Je.jsx("span",{id:"final-score",ref:v})]}),Je.jsx("button",{id:"retry",onClick:N,children:"Retry"})]})})]})};QS.createRoot(document.getElementById("root")).render(Je.jsx(PA,{}));
