(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();var mm={exports:{}},Vu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OS;function Rb(){if(OS)return Vu;OS=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:o,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Vu.Fragment=t,Vu.jsx=e,Vu.jsxs=e,Vu}var PS;function Cb(){return PS||(PS=1,mm.exports=Rb()),mm.exports}var Ae=Cb(),_m={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zS;function wb(){if(zS)return Se;zS=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function v(b){return b===null||typeof b!="object"?null:(b=g&&b[g]||b["@@iterator"],typeof b=="function"?b:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(b,Q,gt){this.props=b,this.context=Q,this.refs=M,this.updater=gt||x}y.prototype.isReactComponent={},y.prototype.setState=function(b,Q){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,Q,"setState")},y.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function S(){}S.prototype=y.prototype;function N(b,Q,gt){this.props=b,this.context=Q,this.refs=M,this.updater=gt||x}var L=N.prototype=new S;L.constructor=N,E(L,y.prototype),L.isPureReactComponent=!0;var A=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function O(b,Q,gt,yt,j,dt){return gt=dt.ref,{$$typeof:o,type:b,key:Q,ref:gt!==void 0?gt:null,props:dt}}function F(b,Q){return O(b.type,Q,void 0,void 0,void 0,b.props)}function C(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function R(b){var Q={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(gt){return Q[gt]})}var H=/\/+/g;function Y(b,Q){return typeof b=="object"&&b!==null&&b.key!=null?R(""+b.key):Q.toString(36)}function $(){}function ut(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then($,$):(b.status="pending",b.then(function(Q){b.status==="pending"&&(b.status="fulfilled",b.value=Q)},function(Q){b.status==="pending"&&(b.status="rejected",b.reason=Q)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function st(b,Q,gt,yt,j){var dt=typeof b;(dt==="undefined"||dt==="boolean")&&(b=null);var xt=!1;if(b===null)xt=!0;else switch(dt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(b.$$typeof){case o:case t:xt=!0;break;case _:return xt=b._init,st(xt(b._payload),Q,gt,yt,j)}}if(xt)return j=j(b),xt=yt===""?"."+Y(b,0):yt,A(j)?(gt="",xt!=null&&(gt=xt.replace(H,"$&/")+"/"),st(j,Q,gt,"",function(ae){return ae})):j!=null&&(C(j)&&(j=F(j,gt+(j.key==null||b&&b.key===j.key?"":(""+j.key).replace(H,"$&/")+"/")+xt)),Q.push(j)),1;xt=0;var Rt=yt===""?".":yt+":";if(A(b))for(var Ct=0;Ct<b.length;Ct++)yt=b[Ct],dt=Rt+Y(yt,Ct),xt+=st(yt,Q,gt,dt,j);else if(Ct=v(b),typeof Ct=="function")for(b=Ct.call(b),Ct=0;!(yt=b.next()).done;)yt=yt.value,dt=Rt+Y(yt,Ct++),xt+=st(yt,Q,gt,dt,j);else if(dt==="object"){if(typeof b.then=="function")return st(ut(b),Q,gt,yt,j);throw Q=String(b),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return xt}function B(b,Q,gt){if(b==null)return b;var yt=[],j=0;return st(b,yt,"","",function(dt){return Q.call(gt,dt,j++)}),yt}function X(b){if(b._status===-1){var Q=b._result;Q=Q(),Q.then(function(gt){(b._status===0||b._status===-1)&&(b._status=1,b._result=gt)},function(gt){(b._status===0||b._status===-1)&&(b._status=2,b._result=gt)}),b._status===-1&&(b._status=0,b._result=Q)}if(b._status===1)return b._result.default;throw b._result}var W=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function mt(){}return Se.Children={map:B,forEach:function(b,Q,gt){B(b,function(){Q.apply(this,arguments)},gt)},count:function(b){var Q=0;return B(b,function(){Q++}),Q},toArray:function(b){return B(b,function(Q){return Q})||[]},only:function(b){if(!C(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Se.Component=y,Se.Fragment=e,Se.Profiler=a,Se.PureComponent=N,Se.StrictMode=i,Se.Suspense=d,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,Se.__COMPILER_RUNTIME={__proto__:null,c:function(b){return P.H.useMemoCache(b)}},Se.cache=function(b){return function(){return b.apply(null,arguments)}},Se.cloneElement=function(b,Q,gt){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var yt=E({},b.props),j=b.key,dt=void 0;if(Q!=null)for(xt in Q.ref!==void 0&&(dt=void 0),Q.key!==void 0&&(j=""+Q.key),Q)!z.call(Q,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&Q.ref===void 0||(yt[xt]=Q[xt]);var xt=arguments.length-2;if(xt===1)yt.children=gt;else if(1<xt){for(var Rt=Array(xt),Ct=0;Ct<xt;Ct++)Rt[Ct]=arguments[Ct+2];yt.children=Rt}return O(b.type,j,void 0,void 0,dt,yt)},Se.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:l,_context:b},b},Se.createElement=function(b,Q,gt){var yt,j={},dt=null;if(Q!=null)for(yt in Q.key!==void 0&&(dt=""+Q.key),Q)z.call(Q,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(j[yt]=Q[yt]);var xt=arguments.length-2;if(xt===1)j.children=gt;else if(1<xt){for(var Rt=Array(xt),Ct=0;Ct<xt;Ct++)Rt[Ct]=arguments[Ct+2];j.children=Rt}if(b&&b.defaultProps)for(yt in xt=b.defaultProps,xt)j[yt]===void 0&&(j[yt]=xt[yt]);return O(b,dt,void 0,void 0,null,j)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(b){return{$$typeof:f,render:b}},Se.isValidElement=C,Se.lazy=function(b){return{$$typeof:_,_payload:{_status:-1,_result:b},_init:X}},Se.memo=function(b,Q){return{$$typeof:p,type:b,compare:Q===void 0?null:Q}},Se.startTransition=function(b){var Q=P.T,gt={};P.T=gt;try{var yt=b(),j=P.S;j!==null&&j(gt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(mt,W)}catch(dt){W(dt)}finally{P.T=Q}},Se.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},Se.use=function(b){return P.H.use(b)},Se.useActionState=function(b,Q,gt){return P.H.useActionState(b,Q,gt)},Se.useCallback=function(b,Q){return P.H.useCallback(b,Q)},Se.useContext=function(b){return P.H.useContext(b)},Se.useDebugValue=function(){},Se.useDeferredValue=function(b,Q){return P.H.useDeferredValue(b,Q)},Se.useEffect=function(b,Q,gt){var yt=P.H;if(typeof gt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(b,Q)},Se.useId=function(){return P.H.useId()},Se.useImperativeHandle=function(b,Q,gt){return P.H.useImperativeHandle(b,Q,gt)},Se.useInsertionEffect=function(b,Q){return P.H.useInsertionEffect(b,Q)},Se.useLayoutEffect=function(b,Q){return P.H.useLayoutEffect(b,Q)},Se.useMemo=function(b,Q){return P.H.useMemo(b,Q)},Se.useOptimistic=function(b,Q){return P.H.useOptimistic(b,Q)},Se.useReducer=function(b,Q,gt){return P.H.useReducer(b,Q,gt)},Se.useRef=function(b){return P.H.useRef(b)},Se.useState=function(b){return P.H.useState(b)},Se.useSyncExternalStore=function(b,Q,gt){return P.H.useSyncExternalStore(b,Q,gt)},Se.useTransition=function(){return P.H.useTransition()},Se.version="19.1.0",Se}var BS;function Ag(){return BS||(BS=1,_m.exports=wb()),_m.exports}var jr=Ag(),gm={exports:{}},ku={},vm={exports:{}},xm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS;function Db(){return IS||(IS=1,function(o){function t(B,X){var W=B.length;B.push(X);t:for(;0<W;){var mt=W-1>>>1,b=B[mt];if(0<a(b,X))B[mt]=X,B[W]=b,W=mt;else break t}}function e(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var X=B[0],W=B.pop();if(W!==X){B[0]=W;t:for(var mt=0,b=B.length,Q=b>>>1;mt<Q;){var gt=2*(mt+1)-1,yt=B[gt],j=gt+1,dt=B[j];if(0>a(yt,W))j<b&&0>a(dt,yt)?(B[mt]=dt,B[j]=W,mt=j):(B[mt]=yt,B[gt]=W,mt=gt);else if(j<b&&0>a(dt,W))B[mt]=dt,B[j]=W,mt=j;else break t}}return X}function a(B,X){var W=B.sortIndex-X.sortIndex;return W!==0?W:B.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var d=[],p=[],_=1,g=null,v=3,x=!1,E=!1,M=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var X=e(p);X!==null;){if(X.callback===null)i(p);else if(X.startTime<=B)i(p),X.sortIndex=X.expirationTime,t(d,X);else break;X=e(p)}}function P(B){if(M=!1,A(B),!E)if(e(d)!==null)E=!0,z||(z=!0,Y());else{var X=e(p);X!==null&&st(P,X.startTime-B)}}var z=!1,O=-1,F=5,C=-1;function R(){return y?!0:!(o.unstable_now()-C<F)}function H(){if(y=!1,z){var B=o.unstable_now();C=B;var X=!0;try{t:{E=!1,M&&(M=!1,N(O),O=-1),x=!0;var W=v;try{e:{for(A(B),g=e(d);g!==null&&!(g.expirationTime>B&&R());){var mt=g.callback;if(typeof mt=="function"){g.callback=null,v=g.priorityLevel;var b=mt(g.expirationTime<=B);if(B=o.unstable_now(),typeof b=="function"){g.callback=b,A(B),X=!0;break e}g===e(d)&&i(d),A(B)}else i(d);g=e(d)}if(g!==null)X=!0;else{var Q=e(p);Q!==null&&st(P,Q.startTime-B),X=!1}}break t}finally{g=null,v=W,x=!1}X=void 0}}finally{X?Y():z=!1}}}var Y;if(typeof L=="function")Y=function(){L(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ut=$.port2;$.port1.onmessage=H,Y=function(){ut.postMessage(null)}}else Y=function(){S(H,0)};function st(B,X){O=S(function(){B(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var W=v;v=X;try{return B()}finally{v=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=v;v=B;try{return X()}finally{v=W}},o.unstable_scheduleCallback=function(B,X,W){var mt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?mt+W:mt):W=mt,B){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=W+b,B={id:_++,callback:X,priorityLevel:B,startTime:W,expirationTime:b,sortIndex:-1},W>mt?(B.sortIndex=W,t(p,B),e(d)===null&&B===e(p)&&(M?(N(O),O=-1):M=!0,st(P,W-mt))):(B.sortIndex=b,t(d,B),E||x||(E=!0,z||(z=!0,Y()))),B},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(B){var X=v;return function(){var W=v;v=X;try{return B.apply(this,arguments)}finally{v=W}}}}(xm)),xm}var FS;function Ub(){return FS||(FS=1,vm.exports=Db()),vm.exports}var Sm={exports:{}},hi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HS;function Lb(){if(HS)return hi;HS=1;var o=Ag();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(d,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:g==null?null:""+g,children:d,containerInfo:p,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return hi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,hi.createPortal=function(d,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,_)},hi.flushSync=function(d){var p=c.T,_=i.p;try{if(c.T=null,i.p=2,d)return d()}finally{c.T=p,i.p=_,i.d.f()}},hi.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(d,p))},hi.prefetchDNS=function(d){typeof d=="string"&&i.d.D(d)},hi.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?i.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:x}):_==="script"&&i.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},hi.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=f(p.as,p.crossOrigin);i.d.M(d,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(d)},hi.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin);i.d.L(d,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},hi.preloadModule=function(d,p){if(typeof d=="string")if(p){var _=f(p.as,p.crossOrigin);i.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(d)},hi.requestFormReset=function(d){i.d.r(d)},hi.unstable_batchedUpdates=function(d,p){return d(p)},hi.useFormState=function(d,p,_){return c.H.useFormState(d,p,_)},hi.useFormStatus=function(){return c.H.useHostTransitionStatus()},hi.version="19.1.0",hi}var GS;function Nb(){if(GS)return Sm.exports;GS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Sm.exports=Lb(),Sm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VS;function Ob(){if(VS)return ku;VS=1;var o=Ub(),t=Ag(),e=Nb();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(i(188))}function d(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var s=n,u=r;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){s=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return f(h),n;if(m===u)return f(h),r;m=m.sibling}throw Error(i(188))}if(s.return!==u.return)s=h,u=m;else{for(var T=!1,D=h.child;D;){if(D===s){T=!0,s=h,u=m;break}if(D===u){T=!0,u=h,s=m;break}D=D.sibling}if(!T){for(D=m.child;D;){if(D===s){T=!0,s=m,u=h;break}if(D===u){T=!0,u=m,s=h;break}D=D.sibling}if(!T)throw Error(i(189))}}if(s.alternate!==u)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?n:r}function p(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=p(n),r!==null)return r;n=n.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var $=Symbol.for("react.client.reference");function ut(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===$?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case x:return"Portal";case L:return(n.displayName||"Context")+".Provider";case N:return(n._context.displayName||"Context")+".Consumer";case A:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O:return r=n.displayName||null,r!==null?r:ut(n.type)||"Memo";case F:r=n._payload,n=n._init;try{return ut(n(r))}catch{}}return null}var st=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},mt=[],b=-1;function Q(n){return{current:n}}function gt(n){0>b||(n.current=mt[b],mt[b]=null,b--)}function yt(n,r){b++,mt[b]=n.current,n.current=r}var j=Q(null),dt=Q(null),xt=Q(null),Rt=Q(null);function Ct(n,r){switch(yt(xt,r),yt(dt,n),yt(j,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?lS(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=lS(r),n=uS(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}gt(j),yt(j,n)}function ae(){gt(j),gt(dt),gt(xt)}function ne(n){n.memoizedState!==null&&yt(Rt,n);var r=j.current,s=uS(r,n.type);r!==s&&(yt(dt,n),yt(j,s))}function ve(n){dt.current===n&&(gt(j),gt(dt)),Rt.current===n&&(gt(Rt),Bu._currentValue=W)}var xe=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,k=o.unstable_cancelCallback,Ve=o.unstable_shouldYield,_e=o.unstable_requestPaint,et=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,Kt=o.unstable_UserBlockingPriority,Wt=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,I=o.unstable_IdlePriority,w=o.log,tt=o.unstable_setDisableYieldValue,pt=null,ht=null;function ct(n){if(typeof w=="function"&&tt(n),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(pt,n)}catch{}}var Lt=Math.clz32?Math.clz32:Bt,Ut=Math.log,Yt=Math.LN2;function Bt(n){return n>>>=0,n===0?32:31-(Ut(n)/Yt|0)|0}var Tt=256,zt=4194304;function Qt(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function $t(n,r,s){var u=n.pendingLanes;if(u===0)return 0;var h=0,m=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var D=u&134217727;return D!==0?(u=D&~m,u!==0?h=Qt(u):(T&=D,T!==0?h=Qt(T):s||(s=D&~n,s!==0&&(h=Qt(s))))):(D=u&~m,D!==0?h=Qt(D):T!==0?h=Qt(T):s||(s=u&~n,s!==0&&(h=Qt(s)))),h===0?0:r!==0&&r!==h&&(r&m)===0&&(m=h&-h,s=r&-r,m>=s||m===32&&(s&4194048)!==0)?r:h}function Dt(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function le(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G(){var n=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),n}function Nt(){var n=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),n}function Et(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function Ot(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function At(n,r,s,u,h,m){var T=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var D=n.entanglements,V=n.expirationTimes,rt=n.hiddenUpdates;for(s=T&~s;0<s;){var _t=31-Lt(s),Mt=1<<_t;D[_t]=0,V[_t]=-1;var at=rt[_t];if(at!==null)for(rt[_t]=null,_t=0;_t<at.length;_t++){var lt=at[_t];lt!==null&&(lt.lane&=-536870913)}s&=~Mt}u!==0&&vt(n,u,0),m!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=m&~(T&~r))}function vt(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-Lt(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|s&4194090}function kt(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var u=31-Lt(s),h=1<<u;h&r|n[u]&r&&(n[u]|=r),s&=~h}}function se(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Pe(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function It(){var n=X.p;return n!==0?n:(n=window.event,n===void 0?32:CS(n.type))}function Jt(n,r){var s=X.p;try{return X.p=n,r()}finally{X.p=s}}var he=Math.random().toString(36).slice(2),wt="__reactFiber$"+he,ee="__reactProps$"+he,qt="__reactContainer$"+he,ce="__reactEvents$"+he,yn="__reactListeners$"+he,Me="__reactHandles$"+he,Je="__reactResources$"+he,gn="__reactMarker$"+he;function qe(n){delete n[wt],delete n[ee],delete n[ce],delete n[yn],delete n[Me]}function Fe(n){var r=n[wt];if(r)return r;for(var s=n.parentNode;s;){if(r=s[qt]||s[wt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=dS(n);n!==null;){if(s=n[wt])return s;n=dS(n)}return r}n=s,s=n.parentNode}return null}function Ue(n){if(n=n[wt]||n[qt]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function Gn(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function ke(n){var r=n[Je];return r||(r=n[Je]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function He(n){n[gn]=!0}var Si=new Set,bn={};function un(n,r){U(n,r),U(n+"Capture",r)}function U(n,r){for(bn[n]=r,n=0;n<r.length;n++)Si.add(r[n])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},it={};function Z(n){return xe.call(it,n)?!0:xe.call(ot,n)?!1:K.test(n)?it[n]=!0:(ot[n]=!0,!1)}function bt(n,r,s){if(Z(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function Pt(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function Gt(n,r,s,u){if(u===null)n.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+u)}}var Ft,ie;function re(n){if(Ft===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);Ft=r&&r[1]||"",ie=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+n+ie}var te=!1;function pe(n,r){if(!n||te)return"";te=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(lt){var at=lt}Reflect.construct(n,[],Mt)}else{try{Mt.call()}catch(lt){at=lt}n.call(Mt.prototype)}}else{try{throw Error()}catch(lt){at=lt}(Mt=n())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),T=m[0],D=m[1];if(T&&D){var V=T.split(`
`),rt=D.split(`
`);for(h=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;h<rt.length&&!rt[h].includes("DetermineComponentFrameRoot");)h++;if(u===V.length||h===rt.length)for(u=V.length-1,h=rt.length-1;1<=u&&0<=h&&V[u]!==rt[h];)h--;for(;1<=u&&0<=h;u--,h--)if(V[u]!==rt[h]){if(u!==1||h!==1)do if(u--,h--,0>h||V[u]!==rt[h]){var _t=`
`+V[u].replace(" at new "," at ");return n.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",n.displayName)),_t}while(1<=u&&0<=h);break}}}finally{te=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?re(s):""}function je(n){switch(n.tag){case 26:case 27:case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return pe(n.type,!1);case 11:return pe(n.type.render,!1);case 1:return pe(n.type,!0);case 31:return re("Activity");default:return""}}function vn(n){try{var r="";do r+=je(n),n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Re(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ke(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ue(n){var r=Ke(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,m=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nn(n){n._valueTracker||(n._valueTracker=ue(n))}function ze(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),u="";return n&&(u=Ke(n)?n.checked?"true":"false":n.value),n=u,n!==s?(r.setValue(n),!0):!1}function jn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var za=/[\n"\\]/g;function pn(n){return n.replace(za,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function $r(n,r,s,u,h,m,T,D){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),r!=null?T==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+Re(r)):n.value!==""+Re(r)&&(n.value=""+Re(r)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),r!=null?ci(n,T,Re(r)):s!=null?ci(n,T,Re(s)):u!=null&&n.removeAttribute("value"),h==null&&m!=null&&(n.defaultChecked=!!m),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?n.name=""+Re(D):n.removeAttribute("name")}function cn(n,r,s,u,h,m,T,D){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;s=s!=null?""+Re(s):"",r=r!=null?""+Re(r):s,D||r===n.value||(n.value=r),n.defaultValue=r}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=D?n.checked:!!u,n.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function ci(n,r,s){r==="number"&&jn(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Vn(n,r,s,u){if(n=n.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=r.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&u&&(n[s].defaultSelected=!0)}else{for(s=""+Re(s),r=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Kn(n,r,s){if(r!=null&&(r=""+Re(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+Re(s):""}function ri(n,r,s,u){if(r==null){if(u!=null){if(s!=null)throw Error(i(92));if(st(u)){if(1<u.length)throw Error(i(93));u=u[0]}s=u}s==null&&(s=""),r=s}s=Re(r),n.defaultValue=s,u=n.textContent,u===s&&u!==""&&u!==null&&(n.value=u)}function zr(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var ta=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function l0(n,r,s){var u=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,s):typeof s!="number"||s===0||ta.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function u0(n,r,s){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var h in r)u=r[h],r.hasOwnProperty(h)&&s[h]!==u&&l0(n,h,u)}else for(var m in r)r.hasOwnProperty(m)&&l0(n,m,r[m])}function pd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),AT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ic(n){return AT.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var md=null;function _d(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ao=null,Ro=null;function c0(n){var r=Ue(n);if(r&&(n=r.stateNode)){var s=n[ee]||null;t:switch(n=r.stateNode,r.type){case"input":if($r(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+pn(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var u=s[r];if(u!==n&&u.form===n.form){var h=u[ee]||null;if(!h)throw Error(i(90));$r(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)u=s[r],u.form===n.form&&ze(u)}break t;case"textarea":Kn(n,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&Vn(n,!!s.multiple,r,!1)}}}var gd=!1;function f0(n,r,s){if(gd)return n(r,s);gd=!0;try{var u=n(r);return u}finally{if(gd=!1,(Ao!==null||Ro!==null)&&(Tf(),Ao&&(r=Ao,n=Ro,Ro=Ao=null,c0(r),n)))for(r=0;r<n.length;r++)c0(n[r])}}function Kl(n,r){var s=n.stateNode;if(s===null)return null;var u=s[ee]||null;if(u===null)return null;s=u[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(i(231,r,typeof s));return s}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=!1;if(ea)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){vd=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{vd=!1}var Ba=null,xd=null,Fc=null;function h0(){if(Fc)return Fc;var n,r=xd,s=r.length,u,h="value"in Ba?Ba.value:Ba.textContent,m=h.length;for(n=0;n<s&&r[n]===h[n];n++);var T=s-n;for(u=1;u<=T&&r[s-u]===h[m-u];u++);return Fc=h.slice(n,1<u?1-u:void 0)}function Hc(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Gc(){return!0}function d0(){return!1}function Di(n){function r(s,u,h,m,T){this._reactName=s,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(s=n[D],this[D]=s?s(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Gc:d0,this.isPropagationStopped=d0,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Gc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Gc)},persist:function(){},isPersistent:Gc}),r}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=Di(Ds),Jl=_({},Ds,{view:0,detail:0}),RT=Di(Jl),Sd,yd,$l,kc=_({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$l&&($l&&n.type==="mousemove"?(Sd=n.screenX-$l.screenX,yd=n.screenY-$l.screenY):yd=Sd=0,$l=n),Sd)},movementY:function(n){return"movementY"in n?n.movementY:yd}}),p0=Di(kc),CT=_({},kc,{dataTransfer:0}),wT=Di(CT),DT=_({},Jl,{relatedTarget:0}),Md=Di(DT),UT=_({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),LT=Di(UT),NT=_({},Ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),OT=Di(NT),PT=_({},Ds,{data:0}),m0=Di(PT),zT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FT(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=IT[n])?!!r[n]:!1}function Ed(){return FT}var HT=_({},Jl,{key:function(n){if(n.key){var r=zT[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Hc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?BT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(n){return n.type==="keypress"?Hc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),GT=Di(HT),VT=_({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_0=Di(VT),kT=_({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),XT=Di(kT),WT=_({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),YT=Di(WT),qT=_({},kc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ZT=Di(qT),jT=_({},Ds,{newState:0,oldState:0}),KT=Di(jT),QT=[9,13,27,32],Td=ea&&"CompositionEvent"in window,tu=null;ea&&"documentMode"in document&&(tu=document.documentMode);var JT=ea&&"TextEvent"in window&&!tu,g0=ea&&(!Td||tu&&8<tu&&11>=tu),v0=" ",x0=!1;function S0(n,r){switch(n){case"keyup":return QT.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Co=!1;function $T(n,r){switch(n){case"compositionend":return y0(r);case"keypress":return r.which!==32?null:(x0=!0,v0);case"textInput":return n=r.data,n===v0&&x0?null:n;default:return null}}function t1(n,r){if(Co)return n==="compositionend"||!Td&&S0(n,r)?(n=h0(),Fc=xd=Ba=null,Co=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return g0&&r.locale!=="ko"?null:r.data;default:return null}}var e1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M0(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!e1[n.type]:r==="textarea"}function E0(n,r,s,u){Ao?Ro?Ro.push(u):Ro=[u]:Ao=u,r=Df(r,"onChange"),0<r.length&&(s=new Vc("onChange","change",null,s,u),n.push({event:s,listeners:r}))}var eu=null,nu=null;function n1(n){iS(n,0)}function Xc(n){var r=Gn(n);if(ze(r))return n}function T0(n,r){if(n==="change")return r}var b0=!1;if(ea){var bd;if(ea){var Ad="oninput"in document;if(!Ad){var A0=document.createElement("div");A0.setAttribute("oninput","return;"),Ad=typeof A0.oninput=="function"}bd=Ad}else bd=!1;b0=bd&&(!document.documentMode||9<document.documentMode)}function R0(){eu&&(eu.detachEvent("onpropertychange",C0),nu=eu=null)}function C0(n){if(n.propertyName==="value"&&Xc(nu)){var r=[];E0(r,nu,n,_d(n)),f0(n1,r)}}function i1(n,r,s){n==="focusin"?(R0(),eu=r,nu=s,eu.attachEvent("onpropertychange",C0)):n==="focusout"&&R0()}function r1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xc(nu)}function a1(n,r){if(n==="click")return Xc(r)}function s1(n,r){if(n==="input"||n==="change")return Xc(r)}function o1(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Xi=typeof Object.is=="function"?Object.is:o1;function iu(n,r){if(Xi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),u=Object.keys(r);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var h=s[u];if(!xe.call(r,h)||!Xi(n[h],r[h]))return!1}return!0}function w0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function D0(n,r){var s=w0(n);n=0;for(var u;s;){if(s.nodeType===3){if(u=n+s.textContent.length,n<=r&&u>=r)return{node:s,offset:r-n};n=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=w0(s)}}function U0(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?U0(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function L0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=jn(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=jn(n.document)}return r}function Rd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var l1=ea&&"documentMode"in document&&11>=document.documentMode,wo=null,Cd=null,ru=null,wd=!1;function N0(n,r,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;wd||wo==null||wo!==jn(u)||(u=wo,"selectionStart"in u&&Rd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ru&&iu(ru,u)||(ru=u,u=Df(Cd,"onSelect"),0<u.length&&(r=new Vc("onSelect","select",null,r,s),n.push({event:r,listeners:u}),r.target=wo)))}function Us(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var Do={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionrun:Us("Transition","TransitionRun"),transitionstart:Us("Transition","TransitionStart"),transitioncancel:Us("Transition","TransitionCancel"),transitionend:Us("Transition","TransitionEnd")},Dd={},O0={};ea&&(O0=document.createElement("div").style,"AnimationEvent"in window||(delete Do.animationend.animation,delete Do.animationiteration.animation,delete Do.animationstart.animation),"TransitionEvent"in window||delete Do.transitionend.transition);function Ls(n){if(Dd[n])return Dd[n];if(!Do[n])return n;var r=Do[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in O0)return Dd[n]=r[s];return n}var P0=Ls("animationend"),z0=Ls("animationiteration"),B0=Ls("animationstart"),u1=Ls("transitionrun"),c1=Ls("transitionstart"),f1=Ls("transitioncancel"),I0=Ls("transitionend"),F0=new Map,Ud="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ud.push("scrollEnd");function Ar(n,r){F0.set(n,r),un(r,[n])}var H0=new WeakMap;function ur(n,r){if(typeof n=="object"&&n!==null){var s=H0.get(n);return s!==void 0?s:(r={value:n,source:r,stack:vn(r)},H0.set(n,r),r)}return{value:n,source:r,stack:vn(r)}}var cr=[],Uo=0,Ld=0;function Wc(){for(var n=Uo,r=Ld=Uo=0;r<n;){var s=cr[r];cr[r++]=null;var u=cr[r];cr[r++]=null;var h=cr[r];cr[r++]=null;var m=cr[r];if(cr[r++]=null,u!==null&&h!==null){var T=u.pending;T===null?h.next=h:(h.next=T.next,T.next=h),u.pending=h}m!==0&&G0(s,h,m)}}function Yc(n,r,s,u){cr[Uo++]=n,cr[Uo++]=r,cr[Uo++]=s,cr[Uo++]=u,Ld|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Nd(n,r,s,u){return Yc(n,r,s,u),qc(n)}function Lo(n,r){return Yc(n,null,null,r),qc(n)}function G0(n,r,s){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s);for(var h=!1,m=n.return;m!==null;)m.childLanes|=s,u=m.alternate,u!==null&&(u.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(h=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,h&&r!==null&&(h=31-Lt(s),n=m.hiddenUpdates,u=n[h],u===null?n[h]=[r]:u.push(r),r.lane=s|536870912),m):null}function qc(n){if(50<wu)throw wu=0,Fp=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var No={};function h1(n,r,s,u){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wi(n,r,s,u){return new h1(n,r,s,u)}function Od(n){return n=n.prototype,!(!n||!n.isReactComponent)}function na(n,r){var s=n.alternate;return s===null?(s=Wi(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function V0(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Zc(n,r,s,u,h,m){var T=0;if(u=n,typeof n=="function")Od(n)&&(T=1);else if(typeof n=="string")T=pb(n,s,j.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case C:return n=Wi(31,s,r,h),n.elementType=C,n.lanes=m,n;case E:return Ns(s.children,h,m,r);case M:T=8,h|=24;break;case y:return n=Wi(12,s,r,h|2),n.elementType=y,n.lanes=m,n;case P:return n=Wi(13,s,r,h),n.elementType=P,n.lanes=m,n;case z:return n=Wi(19,s,r,h),n.elementType=z,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case S:case L:T=10;break t;case N:T=9;break t;case A:T=11;break t;case O:T=14;break t;case F:T=16,u=null;break t}T=29,s=Error(i(130,n===null?"null":typeof n,"")),u=null}return r=Wi(T,s,r,h),r.elementType=n,r.type=u,r.lanes=m,r}function Ns(n,r,s,u){return n=Wi(7,n,u,r),n.lanes=s,n}function Pd(n,r,s){return n=Wi(6,n,null,r),n.lanes=s,n}function zd(n,r,s){return r=Wi(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Oo=[],Po=0,jc=null,Kc=0,fr=[],hr=0,Os=null,ia=1,ra="";function Ps(n,r){Oo[Po++]=Kc,Oo[Po++]=jc,jc=n,Kc=r}function k0(n,r,s){fr[hr++]=ia,fr[hr++]=ra,fr[hr++]=Os,Os=n;var u=ia;n=ra;var h=32-Lt(u)-1;u&=~(1<<h),s+=1;var m=32-Lt(r)+h;if(30<m){var T=h-h%5;m=(u&(1<<T)-1).toString(32),u>>=T,h-=T,ia=1<<32-Lt(r)+h|s<<h|u,ra=m+n}else ia=1<<m|s<<h|u,ra=n}function Bd(n){n.return!==null&&(Ps(n,1),k0(n,1,0))}function Id(n){for(;n===jc;)jc=Oo[--Po],Oo[Po]=null,Kc=Oo[--Po],Oo[Po]=null;for(;n===Os;)Os=fr[--hr],fr[hr]=null,ra=fr[--hr],fr[hr]=null,ia=fr[--hr],fr[hr]=null}var yi=null,An=null,Ze=!1,zs=null,Br=!1,Fd=Error(i(519));function Bs(n){var r=Error(i(418,""));throw ou(ur(r,n)),Fd}function X0(n){var r=n.stateNode,s=n.type,u=n.memoizedProps;switch(r[wt]=n,r[ee]=u,s){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(s=0;s<Uu.length;s++)Ne(Uu[s],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":Ne("invalid",r),cn(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),nn(r);break;case"select":Ne("invalid",r);break;case"textarea":Ne("invalid",r),ri(r,u.value,u.defaultValue,u.children),nn(r)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||u.suppressHydrationWarning===!0||oS(r.textContent,s)?(u.popover!=null&&(Ne("beforetoggle",r),Ne("toggle",r)),u.onScroll!=null&&Ne("scroll",r),u.onScrollEnd!=null&&Ne("scrollend",r),u.onClick!=null&&(r.onclick=Uf),r=!0):r=!1,r||Bs(n)}function W0(n){for(yi=n.return;yi;)switch(yi.tag){case 5:case 13:Br=!1;return;case 27:case 3:Br=!0;return;default:yi=yi.return}}function au(n){if(n!==yi)return!1;if(!Ze)return W0(n),Ze=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||em(n.type,n.memoizedProps)),s=!s),s&&An&&Bs(n),W0(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));t:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(r===0){An=Cr(n.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;n=n.nextSibling}An=null}}else r===27?(r=An,$a(n.type)?(n=am,am=null,An=n):An=r):An=yi?Cr(n.stateNode.nextSibling):null;return!0}function su(){An=yi=null,Ze=!1}function Y0(){var n=zs;return n!==null&&(Ni===null?Ni=n:Ni.push.apply(Ni,n),zs=null),n}function ou(n){zs===null?zs=[n]:zs.push(n)}var Hd=Q(null),Is=null,aa=null;function Ia(n,r,s){yt(Hd,r._currentValue),r._currentValue=s}function sa(n){n._currentValue=Hd.current,gt(Hd)}function Gd(n,r,s){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===s)break;n=n.return}}function Vd(n,r,s,u){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var m=h.dependencies;if(m!==null){var T=h.child;m=m.firstContext;t:for(;m!==null;){var D=m;m=h;for(var V=0;V<r.length;V++)if(D.context===r[V]){m.lanes|=s,D=m.alternate,D!==null&&(D.lanes|=s),Gd(m.return,s,n),u||(T=null);break t}m=D.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(i(341));T.lanes|=s,m=T.alternate,m!==null&&(m.lanes|=s),Gd(T,s,n),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===n){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function lu(n,r,s,u){n=null;for(var h=r,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var D=h.type;Xi(h.pendingProps.value,T.value)||(n!==null?n.push(D):n=[D])}}else if(h===Rt.current){if(T=h.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(Bu):n=[Bu])}h=h.return}n!==null&&Vd(r,n,s,u),r.flags|=262144}function Qc(n){for(n=n.firstContext;n!==null;){if(!Xi(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Fs(n){Is=n,aa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function fi(n){return q0(Is,n)}function Jc(n,r){return Is===null&&Fs(n),q0(n,r)}function q0(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},aa===null){if(n===null)throw Error(i(308));aa=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else aa=aa.next=r;return s}var d1=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},p1=o.unstable_scheduleCallback,m1=o.unstable_NormalPriority,kn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kd(){return{controller:new d1,data:new Map,refCount:0}}function uu(n){n.refCount--,n.refCount===0&&p1(m1,function(){n.controller.abort()})}var cu=null,Xd=0,zo=0,Bo=null;function _1(n,r){if(cu===null){var s=cu=[];Xd=0,zo=Yp(),Bo={status:"pending",value:void 0,then:function(u){s.push(u)}}}return Xd++,r.then(Z0,Z0),r}function Z0(){if(--Xd===0&&cu!==null){Bo!==null&&(Bo.status="fulfilled");var n=cu;cu=null,zo=0,Bo=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function g1(n,r){var s=[],u={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(u.status="rejected",u.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),u}var j0=B.S;B.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&_1(n,r),j0!==null&&j0(n,r)};var Hs=Q(null);function Wd(){var n=Hs.current;return n!==null?n:mn.pooledCache}function $c(n,r){r===null?yt(Hs,Hs.current):yt(Hs,r.pool)}function K0(){var n=Wd();return n===null?null:{parent:kn._currentValue,pool:n}}var fu=Error(i(460)),Q0=Error(i(474)),tf=Error(i(542)),Yd={then:function(){}};function J0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ef(){}function $0(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then(ef,ef),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,ev(n),n;default:if(typeof r.status=="string")r.then(ef,ef);else{if(n=mn,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=u}},function(u){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,ev(n),n}throw hu=r,fu}}var hu=null;function tv(){if(hu===null)throw Error(i(459));var n=hu;return hu=null,n}function ev(n){if(n===fu||n===tf)throw Error(i(483))}var Fa=!1;function qd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ha(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ga(n,r,s){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,r=qc(n),G0(n,null,s),r}return Yc(n,u,r,s),qc(n)}function du(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,s|=u,r.lanes=s,kt(n,s)}}function jd(n,r){var s=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=T:m=m.next=T,s=s.next}while(s!==null);m===null?h=m=r:m=m.next=r}else h=m=r;s={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var Kd=!1;function pu(){if(Kd){var n=Bo;if(n!==null)throw n}}function mu(n,r,s,u){Kd=!1;var h=n.updateQueue;Fa=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,D=h.shared.pending;if(D!==null){h.shared.pending=null;var V=D,rt=V.next;V.next=null,T===null?m=rt:T.next=rt,T=V;var _t=n.alternate;_t!==null&&(_t=_t.updateQueue,D=_t.lastBaseUpdate,D!==T&&(D===null?_t.firstBaseUpdate=rt:D.next=rt,_t.lastBaseUpdate=V))}if(m!==null){var Mt=h.baseState;T=0,_t=rt=V=null,D=m;do{var at=D.lane&-536870913,lt=at!==D.lane;if(lt?(Ge&at)===at:(u&at)===at){at!==0&&at===zo&&(Kd=!0),_t!==null&&(_t=_t.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var me=n,fe=D;at=r;var sn=s;switch(fe.tag){case 1:if(me=fe.payload,typeof me=="function"){Mt=me.call(sn,Mt,at);break t}Mt=me;break t;case 3:me.flags=me.flags&-65537|128;case 0:if(me=fe.payload,at=typeof me=="function"?me.call(sn,Mt,at):me,at==null)break t;Mt=_({},Mt,at);break t;case 2:Fa=!0}}at=D.callback,at!==null&&(n.flags|=64,lt&&(n.flags|=8192),lt=h.callbacks,lt===null?h.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_t===null?(rt=_t=lt,V=Mt):_t=_t.next=lt,T|=at;if(D=D.next,D===null){if(D=h.shared.pending,D===null)break;lt=D,D=lt.next,lt.next=null,h.lastBaseUpdate=lt,h.shared.pending=null}}while(!0);_t===null&&(V=Mt),h.baseState=V,h.firstBaseUpdate=rt,h.lastBaseUpdate=_t,m===null&&(h.shared.lanes=0),ja|=T,n.lanes=T,n.memoizedState=Mt}}function nv(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function iv(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)nv(s[n],r)}var Io=Q(null),nf=Q(0);function rv(n,r){n=da,yt(nf,n),yt(Io,r),da=n|r.baseLanes}function Qd(){yt(nf,da),yt(Io,Io.current)}function Jd(){da=nf.current,gt(Io),gt(nf)}var Va=0,Te=null,rn=null,Pn=null,rf=!1,Fo=!1,Gs=!1,af=0,_u=0,Ho=null,v1=0;function wn(){throw Error(i(321))}function $d(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!Xi(n[s],r[s]))return!1;return!0}function tp(n,r,s,u,h,m){return Va=m,Te=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,B.H=n===null||n.memoizedState===null?Gv:Vv,Gs=!1,m=s(u,h),Gs=!1,Fo&&(m=sv(r,s,u,h)),av(n),m}function av(n){B.H=ff;var r=rn!==null&&rn.next!==null;if(Va=0,Pn=rn=Te=null,rf=!1,_u=0,Ho=null,r)throw Error(i(300));n===null||Qn||(n=n.dependencies,n!==null&&Qc(n)&&(Qn=!0))}function sv(n,r,s,u){Te=n;var h=0;do{if(Fo&&(Ho=null),_u=0,Fo=!1,25<=h)throw Error(i(301));if(h+=1,Pn=rn=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=b1,m=r(s,u)}while(Fo);return m}function x1(){var n=B.H,r=n.useState()[0];return r=typeof r.then=="function"?gu(r):r,n=n.useState()[0],(rn!==null?rn.memoizedState:null)!==n&&(Te.flags|=1024),r}function ep(){var n=af!==0;return af=0,n}function np(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function ip(n){if(rf){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}rf=!1}Va=0,Pn=rn=Te=null,Fo=!1,_u=af=0,Ho=null}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pn===null?Te.memoizedState=Pn=n:Pn=Pn.next=n,Pn}function zn(){if(rn===null){var n=Te.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var r=Pn===null?Te.memoizedState:Pn.next;if(r!==null)Pn=r,rn=n;else{if(n===null)throw Te.alternate===null?Error(i(467)):Error(i(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},Pn===null?Te.memoizedState=Pn=n:Pn=Pn.next=n}return Pn}function rp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gu(n){var r=_u;return _u+=1,Ho===null&&(Ho=[]),n=$0(Ho,n,r),r=Te,(Pn===null?r.memoizedState:Pn.next)===null&&(r=r.alternate,B.H=r===null||r.memoizedState===null?Gv:Vv),n}function sf(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return gu(n);if(n.$$typeof===L)return fi(n)}throw Error(i(438,String(n)))}function ap(n){var r=null,s=Te.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var u=Te.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=rp(),Te.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),u=0;u<n;u++)s[u]=R;return r.index++,s}function oa(n,r){return typeof r=="function"?r(n):r}function of(n){var r=zn();return sp(r,rn,n)}function sp(n,r,s){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=s;var h=n.baseQueue,m=u.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}r.baseQueue=h=m,u.pending=null}if(m=n.baseState,h===null)n.memoizedState=m;else{r=h.next;var D=T=null,V=null,rt=r,_t=!1;do{var Mt=rt.lane&-536870913;if(Mt!==rt.lane?(Ge&Mt)===Mt:(Va&Mt)===Mt){var at=rt.revertLane;if(at===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),Mt===zo&&(_t=!0);else if((Va&at)===at){rt=rt.next,at===zo&&(_t=!0);continue}else Mt={lane:0,revertLane:rt.revertLane,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},V===null?(D=V=Mt,T=m):V=V.next=Mt,Te.lanes|=at,ja|=at;Mt=rt.action,Gs&&s(m,Mt),m=rt.hasEagerState?rt.eagerState:s(m,Mt)}else at={lane:Mt,revertLane:rt.revertLane,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},V===null?(D=V=at,T=m):V=V.next=at,Te.lanes|=Mt,ja|=Mt;rt=rt.next}while(rt!==null&&rt!==r);if(V===null?T=m:V.next=D,!Xi(m,n.memoizedState)&&(Qn=!0,_t&&(s=Bo,s!==null)))throw s;n.memoizedState=m,n.baseState=T,n.baseQueue=V,u.lastRenderedState=m}return h===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function op(n){var r=zn(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=n;var u=s.dispatch,h=s.pending,m=r.memoizedState;if(h!==null){s.pending=null;var T=h=h.next;do m=n(m,T.action),T=T.next;while(T!==h);Xi(m,r.memoizedState)||(Qn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),s.lastRenderedState=m}return[m,u]}function ov(n,r,s){var u=Te,h=zn(),m=Ze;if(m){if(s===void 0)throw Error(i(407));s=s()}else s=r();var T=!Xi((rn||h).memoizedState,s);T&&(h.memoizedState=s,Qn=!0),h=h.queue;var D=cv.bind(null,u,h,n);if(vu(2048,8,D,[n]),h.getSnapshot!==r||T||Pn!==null&&Pn.memoizedState.tag&1){if(u.flags|=2048,Go(9,lf(),uv.bind(null,u,h,s,r),null),mn===null)throw Error(i(349));m||(Va&124)!==0||lv(u,r,s)}return s}function lv(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Te.updateQueue,r===null?(r=rp(),Te.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function uv(n,r,s,u){r.value=s,r.getSnapshot=u,fv(r)&&hv(n)}function cv(n,r,s){return s(function(){fv(r)&&hv(n)})}function fv(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!Xi(n,s)}catch{return!0}}function hv(n){var r=Lo(n,2);r!==null&&Ki(r,n,2)}function lp(n){var r=Ui();if(typeof n=="function"){var s=n;if(n=s(),Gs){ct(!0);try{s()}finally{ct(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:n},r}function dv(n,r,s,u){return n.baseState=s,sp(n,rn,typeof u=="function"?u:oa)}function S1(n,r,s,u,h){if(cf(n))throw Error(i(485));if(n=r.action,n!==null){var m={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};B.T!==null?s(!0):m.isTransition=!1,u(m),s=r.pending,s===null?(m.next=r.pending=m,pv(r,m)):(m.next=s.next,r.pending=s.next=m)}}function pv(n,r){var s=r.action,u=r.payload,h=n.state;if(r.isTransition){var m=B.T,T={};B.T=T;try{var D=s(h,u),V=B.S;V!==null&&V(T,D),mv(n,r,D)}catch(rt){up(n,r,rt)}finally{B.T=m}}else try{m=s(h,u),mv(n,r,m)}catch(rt){up(n,r,rt)}}function mv(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){_v(n,r,u)},function(u){return up(n,r,u)}):_v(n,r,s)}function _v(n,r,s){r.status="fulfilled",r.value=s,gv(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,pv(n,s)))}function up(n,r,s){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=s,gv(r),r=r.next;while(r!==u)}n.action=null}function gv(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function vv(n,r){return r}function xv(n,r){if(Ze){var s=mn.formState;if(s!==null){t:{var u=Te;if(Ze){if(An){e:{for(var h=An,m=Br;h.nodeType!==8;){if(!m){h=null;break e}if(h=Cr(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){An=Cr(h.nextSibling),u=h.data==="F!";break t}}Bs(u)}u=!1}u&&(r=s[0])}}return s=Ui(),s.memoizedState=s.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vv,lastRenderedState:r},s.queue=u,s=Iv.bind(null,Te,u),u.dispatch=s,u=lp(!1),m=pp.bind(null,Te,!1,u.queue),u=Ui(),h={state:r,dispatch:null,action:n,pending:null},u.queue=h,s=S1.bind(null,Te,h,m,s),h.dispatch=s,u.memoizedState=n,[r,s,!1]}function Sv(n){var r=zn();return yv(r,rn,n)}function yv(n,r,s){if(r=sp(n,r,vv)[0],n=of(oa)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=gu(r)}catch(T){throw T===fu?tf:T}else u=r;r=zn();var h=r.queue,m=h.dispatch;return s!==r.memoizedState&&(Te.flags|=2048,Go(9,lf(),y1.bind(null,h,s),null)),[u,m,n]}function y1(n,r){n.action=r}function Mv(n){var r=zn(),s=rn;if(s!==null)return yv(r,s,n);zn(),r=r.memoizedState,s=zn();var u=s.queue.dispatch;return s.memoizedState=n,[r,u,!1]}function Go(n,r,s,u){return n={tag:n,create:s,deps:u,inst:r,next:null},r=Te.updateQueue,r===null&&(r=rp(),Te.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(u=s.next,s.next=n,n.next=u,r.lastEffect=n),n}function lf(){return{destroy:void 0,resource:void 0}}function Ev(){return zn().memoizedState}function uf(n,r,s,u){var h=Ui();u=u===void 0?null:u,Te.flags|=n,h.memoizedState=Go(1|r,lf(),s,u)}function vu(n,r,s,u){var h=zn();u=u===void 0?null:u;var m=h.memoizedState.inst;rn!==null&&u!==null&&$d(u,rn.memoizedState.deps)?h.memoizedState=Go(r,m,s,u):(Te.flags|=n,h.memoizedState=Go(1|r,m,s,u))}function Tv(n,r){uf(8390656,8,n,r)}function bv(n,r){vu(2048,8,n,r)}function Av(n,r){return vu(4,2,n,r)}function Rv(n,r){return vu(4,4,n,r)}function Cv(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function wv(n,r,s){s=s!=null?s.concat([n]):null,vu(4,4,Cv.bind(null,r,n),s)}function cp(){}function Dv(n,r){var s=zn();r=r===void 0?null:r;var u=s.memoizedState;return r!==null&&$d(r,u[1])?u[0]:(s.memoizedState=[n,r],n)}function Uv(n,r){var s=zn();r=r===void 0?null:r;var u=s.memoizedState;if(r!==null&&$d(r,u[1]))return u[0];if(u=n(),Gs){ct(!0);try{n()}finally{ct(!1)}}return s.memoizedState=[u,r],u}function fp(n,r,s){return s===void 0||(Va&1073741824)!==0?n.memoizedState=r:(n.memoizedState=s,n=Ox(),Te.lanes|=n,ja|=n,s)}function Lv(n,r,s,u){return Xi(s,r)?s:Io.current!==null?(n=fp(n,s,u),Xi(n,r)||(Qn=!0),n):(Va&42)===0?(Qn=!0,n.memoizedState=s):(n=Ox(),Te.lanes|=n,ja|=n,r)}function Nv(n,r,s,u,h){var m=X.p;X.p=m!==0&&8>m?m:8;var T=B.T,D={};B.T=D,pp(n,!1,r,s);try{var V=h(),rt=B.S;if(rt!==null&&rt(D,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _t=g1(V,u);xu(n,r,_t,ji(n))}else xu(n,r,u,ji(n))}catch(Mt){xu(n,r,{then:function(){},status:"rejected",reason:Mt},ji())}finally{X.p=m,B.T=T}}function M1(){}function hp(n,r,s,u){if(n.tag!==5)throw Error(i(476));var h=Ov(n).queue;Nv(n,h,r,W,s===null?M1:function(){return Pv(n),s(u)})}function Ov(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:W},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Pv(n){var r=Ov(n).next.queue;xu(n,r,{},ji())}function dp(){return fi(Bu)}function zv(){return zn().memoizedState}function Bv(){return zn().memoizedState}function E1(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=ji();n=Ha(s);var u=Ga(r,n,s);u!==null&&(Ki(u,r,s),du(u,r,s)),r={cache:kd()},n.payload=r;return}r=r.return}}function T1(n,r,s){var u=ji();s={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},cf(n)?Fv(r,s):(s=Nd(n,r,s,u),s!==null&&(Ki(s,n,u),Hv(s,r,u)))}function Iv(n,r,s){var u=ji();xu(n,r,s,u)}function xu(n,r,s,u){var h={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(cf(n))Fv(r,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var T=r.lastRenderedState,D=m(T,s);if(h.hasEagerState=!0,h.eagerState=D,Xi(D,T))return Yc(n,r,h,0),mn===null&&Wc(),!1}catch{}finally{}if(s=Nd(n,r,h,u),s!==null)return Ki(s,n,u),Hv(s,r,u),!0}return!1}function pp(n,r,s,u){if(u={lane:2,revertLane:Yp(),action:u,hasEagerState:!1,eagerState:null,next:null},cf(n)){if(r)throw Error(i(479))}else r=Nd(n,s,u,2),r!==null&&Ki(r,n,2)}function cf(n){var r=n.alternate;return n===Te||r!==null&&r===Te}function Fv(n,r){Fo=rf=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function Hv(n,r,s){if((s&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,s|=u,r.lanes=s,kt(n,s)}}var ff={readContext:fi,use:sf,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useLayoutEffect:wn,useInsertionEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useSyncExternalStore:wn,useId:wn,useHostTransitionStatus:wn,useFormState:wn,useActionState:wn,useOptimistic:wn,useMemoCache:wn,useCacheRefresh:wn},Gv={readContext:fi,use:sf,useCallback:function(n,r){return Ui().memoizedState=[n,r===void 0?null:r],n},useContext:fi,useEffect:Tv,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,uf(4194308,4,Cv.bind(null,r,n),s)},useLayoutEffect:function(n,r){return uf(4194308,4,n,r)},useInsertionEffect:function(n,r){uf(4,2,n,r)},useMemo:function(n,r){var s=Ui();r=r===void 0?null:r;var u=n();if(Gs){ct(!0);try{n()}finally{ct(!1)}}return s.memoizedState=[u,r],u},useReducer:function(n,r,s){var u=Ui();if(s!==void 0){var h=s(r);if(Gs){ct(!0);try{s(r)}finally{ct(!1)}}}else h=r;return u.memoizedState=u.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},u.queue=n,n=n.dispatch=T1.bind(null,Te,n),[u.memoizedState,n]},useRef:function(n){var r=Ui();return n={current:n},r.memoizedState=n},useState:function(n){n=lp(n);var r=n.queue,s=Iv.bind(null,Te,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:cp,useDeferredValue:function(n,r){var s=Ui();return fp(s,n,r)},useTransition:function(){var n=lp(!1);return n=Nv.bind(null,Te,n.queue,!0,!1),Ui().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var u=Te,h=Ui();if(Ze){if(s===void 0)throw Error(i(407));s=s()}else{if(s=r(),mn===null)throw Error(i(349));(Ge&124)!==0||lv(u,r,s)}h.memoizedState=s;var m={value:s,getSnapshot:r};return h.queue=m,Tv(cv.bind(null,u,m,n),[n]),u.flags|=2048,Go(9,lf(),uv.bind(null,u,m,s,r),null),s},useId:function(){var n=Ui(),r=mn.identifierPrefix;if(Ze){var s=ra,u=ia;s=(u&~(1<<32-Lt(u)-1)).toString(32)+s,r="«"+r+"R"+s,s=af++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=v1++,r="«"+r+"r"+s.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:dp,useFormState:xv,useActionState:xv,useOptimistic:function(n){var r=Ui();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=pp.bind(null,Te,!0,s),s.dispatch=r,[n,r]},useMemoCache:ap,useCacheRefresh:function(){return Ui().memoizedState=E1.bind(null,Te)}},Vv={readContext:fi,use:sf,useCallback:Dv,useContext:fi,useEffect:bv,useImperativeHandle:wv,useInsertionEffect:Av,useLayoutEffect:Rv,useMemo:Uv,useReducer:of,useRef:Ev,useState:function(){return of(oa)},useDebugValue:cp,useDeferredValue:function(n,r){var s=zn();return Lv(s,rn.memoizedState,n,r)},useTransition:function(){var n=of(oa)[0],r=zn().memoizedState;return[typeof n=="boolean"?n:gu(n),r]},useSyncExternalStore:ov,useId:zv,useHostTransitionStatus:dp,useFormState:Sv,useActionState:Sv,useOptimistic:function(n,r){var s=zn();return dv(s,rn,n,r)},useMemoCache:ap,useCacheRefresh:Bv},b1={readContext:fi,use:sf,useCallback:Dv,useContext:fi,useEffect:bv,useImperativeHandle:wv,useInsertionEffect:Av,useLayoutEffect:Rv,useMemo:Uv,useReducer:op,useRef:Ev,useState:function(){return op(oa)},useDebugValue:cp,useDeferredValue:function(n,r){var s=zn();return rn===null?fp(s,n,r):Lv(s,rn.memoizedState,n,r)},useTransition:function(){var n=op(oa)[0],r=zn().memoizedState;return[typeof n=="boolean"?n:gu(n),r]},useSyncExternalStore:ov,useId:zv,useHostTransitionStatus:dp,useFormState:Mv,useActionState:Mv,useOptimistic:function(n,r){var s=zn();return rn!==null?dv(s,rn,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:ap,useCacheRefresh:Bv},Vo=null,Su=0;function hf(n){var r=Su;return Su+=1,Vo===null&&(Vo=[]),$0(Vo,n,r)}function yu(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function df(n,r){throw r.$$typeof===g?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function kv(n){var r=n._init;return r(n._payload)}function Xv(n){function r(J,q){if(n){var nt=J.deletions;nt===null?(J.deletions=[q],J.flags|=16):nt.push(q)}}function s(J,q){if(!n)return null;for(;q!==null;)r(J,q),q=q.sibling;return null}function u(J){for(var q=new Map;J!==null;)J.key!==null?q.set(J.key,J):q.set(J.index,J),J=J.sibling;return q}function h(J,q){return J=na(J,q),J.index=0,J.sibling=null,J}function m(J,q,nt){return J.index=nt,n?(nt=J.alternate,nt!==null?(nt=nt.index,nt<q?(J.flags|=67108866,q):nt):(J.flags|=67108866,q)):(J.flags|=1048576,q)}function T(J){return n&&J.alternate===null&&(J.flags|=67108866),J}function D(J,q,nt,St){return q===null||q.tag!==6?(q=Pd(nt,J.mode,St),q.return=J,q):(q=h(q,nt),q.return=J,q)}function V(J,q,nt,St){var jt=nt.type;return jt===E?_t(J,q,nt.props.children,St,nt.key):q!==null&&(q.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===F&&kv(jt)===q.type)?(q=h(q,nt.props),yu(q,nt),q.return=J,q):(q=Zc(nt.type,nt.key,nt.props,null,J.mode,St),yu(q,nt),q.return=J,q)}function rt(J,q,nt,St){return q===null||q.tag!==4||q.stateNode.containerInfo!==nt.containerInfo||q.stateNode.implementation!==nt.implementation?(q=zd(nt,J.mode,St),q.return=J,q):(q=h(q,nt.children||[]),q.return=J,q)}function _t(J,q,nt,St,jt){return q===null||q.tag!==7?(q=Ns(nt,J.mode,St,jt),q.return=J,q):(q=h(q,nt),q.return=J,q)}function Mt(J,q,nt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Pd(""+q,J.mode,nt),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case v:return nt=Zc(q.type,q.key,q.props,null,J.mode,nt),yu(nt,q),nt.return=J,nt;case x:return q=zd(q,J.mode,nt),q.return=J,q;case F:var St=q._init;return q=St(q._payload),Mt(J,q,nt)}if(st(q)||Y(q))return q=Ns(q,J.mode,nt,null),q.return=J,q;if(typeof q.then=="function")return Mt(J,hf(q),nt);if(q.$$typeof===L)return Mt(J,Jc(J,q),nt);df(J,q)}return null}function at(J,q,nt,St){var jt=q!==null?q.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return jt!==null?null:D(J,q,""+nt,St);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case v:return nt.key===jt?V(J,q,nt,St):null;case x:return nt.key===jt?rt(J,q,nt,St):null;case F:return jt=nt._init,nt=jt(nt._payload),at(J,q,nt,St)}if(st(nt)||Y(nt))return jt!==null?null:_t(J,q,nt,St,null);if(typeof nt.then=="function")return at(J,q,hf(nt),St);if(nt.$$typeof===L)return at(J,q,Jc(J,nt),St);df(J,nt)}return null}function lt(J,q,nt,St,jt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return J=J.get(nt)||null,D(q,J,""+St,jt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case v:return J=J.get(St.key===null?nt:St.key)||null,V(q,J,St,jt);case x:return J=J.get(St.key===null?nt:St.key)||null,rt(q,J,St,jt);case F:var Ce=St._init;return St=Ce(St._payload),lt(J,q,nt,St,jt)}if(st(St)||Y(St))return J=J.get(nt)||null,_t(q,J,St,jt,null);if(typeof St.then=="function")return lt(J,q,nt,hf(St),jt);if(St.$$typeof===L)return lt(J,q,nt,Jc(q,St),jt);df(q,St)}return null}function me(J,q,nt,St){for(var jt=null,Ce=null,oe=q,de=q=0,$n=null;oe!==null&&de<nt.length;de++){oe.index>de?($n=oe,oe=null):$n=oe.sibling;var Xe=at(J,oe,nt[de],St);if(Xe===null){oe===null&&(oe=$n);break}n&&oe&&Xe.alternate===null&&r(J,oe),q=m(Xe,q,de),Ce===null?jt=Xe:Ce.sibling=Xe,Ce=Xe,oe=$n}if(de===nt.length)return s(J,oe),Ze&&Ps(J,de),jt;if(oe===null){for(;de<nt.length;de++)oe=Mt(J,nt[de],St),oe!==null&&(q=m(oe,q,de),Ce===null?jt=oe:Ce.sibling=oe,Ce=oe);return Ze&&Ps(J,de),jt}for(oe=u(oe);de<nt.length;de++)$n=lt(oe,J,de,nt[de],St),$n!==null&&(n&&$n.alternate!==null&&oe.delete($n.key===null?de:$n.key),q=m($n,q,de),Ce===null?jt=$n:Ce.sibling=$n,Ce=$n);return n&&oe.forEach(function(rs){return r(J,rs)}),Ze&&Ps(J,de),jt}function fe(J,q,nt,St){if(nt==null)throw Error(i(151));for(var jt=null,Ce=null,oe=q,de=q=0,$n=null,Xe=nt.next();oe!==null&&!Xe.done;de++,Xe=nt.next()){oe.index>de?($n=oe,oe=null):$n=oe.sibling;var rs=at(J,oe,Xe.value,St);if(rs===null){oe===null&&(oe=$n);break}n&&oe&&rs.alternate===null&&r(J,oe),q=m(rs,q,de),Ce===null?jt=rs:Ce.sibling=rs,Ce=rs,oe=$n}if(Xe.done)return s(J,oe),Ze&&Ps(J,de),jt;if(oe===null){for(;!Xe.done;de++,Xe=nt.next())Xe=Mt(J,Xe.value,St),Xe!==null&&(q=m(Xe,q,de),Ce===null?jt=Xe:Ce.sibling=Xe,Ce=Xe);return Ze&&Ps(J,de),jt}for(oe=u(oe);!Xe.done;de++,Xe=nt.next())Xe=lt(oe,J,de,Xe.value,St),Xe!==null&&(n&&Xe.alternate!==null&&oe.delete(Xe.key===null?de:Xe.key),q=m(Xe,q,de),Ce===null?jt=Xe:Ce.sibling=Xe,Ce=Xe);return n&&oe.forEach(function(Ab){return r(J,Ab)}),Ze&&Ps(J,de),jt}function sn(J,q,nt,St){if(typeof nt=="object"&&nt!==null&&nt.type===E&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case v:t:{for(var jt=nt.key;q!==null;){if(q.key===jt){if(jt=nt.type,jt===E){if(q.tag===7){s(J,q.sibling),St=h(q,nt.props.children),St.return=J,J=St;break t}}else if(q.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===F&&kv(jt)===q.type){s(J,q.sibling),St=h(q,nt.props),yu(St,nt),St.return=J,J=St;break t}s(J,q);break}else r(J,q);q=q.sibling}nt.type===E?(St=Ns(nt.props.children,J.mode,St,nt.key),St.return=J,J=St):(St=Zc(nt.type,nt.key,nt.props,null,J.mode,St),yu(St,nt),St.return=J,J=St)}return T(J);case x:t:{for(jt=nt.key;q!==null;){if(q.key===jt)if(q.tag===4&&q.stateNode.containerInfo===nt.containerInfo&&q.stateNode.implementation===nt.implementation){s(J,q.sibling),St=h(q,nt.children||[]),St.return=J,J=St;break t}else{s(J,q);break}else r(J,q);q=q.sibling}St=zd(nt,J.mode,St),St.return=J,J=St}return T(J);case F:return jt=nt._init,nt=jt(nt._payload),sn(J,q,nt,St)}if(st(nt))return me(J,q,nt,St);if(Y(nt)){if(jt=Y(nt),typeof jt!="function")throw Error(i(150));return nt=jt.call(nt),fe(J,q,nt,St)}if(typeof nt.then=="function")return sn(J,q,hf(nt),St);if(nt.$$typeof===L)return sn(J,q,Jc(J,nt),St);df(J,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,q!==null&&q.tag===6?(s(J,q.sibling),St=h(q,nt),St.return=J,J=St):(s(J,q),St=Pd(nt,J.mode,St),St.return=J,J=St),T(J)):s(J,q)}return function(J,q,nt,St){try{Su=0;var jt=sn(J,q,nt,St);return Vo=null,jt}catch(oe){if(oe===fu||oe===tf)throw oe;var Ce=Wi(29,oe,null,J.mode);return Ce.lanes=St,Ce.return=J,Ce}finally{}}}var ko=Xv(!0),Wv=Xv(!1),dr=Q(null),Ir=null;function ka(n){var r=n.alternate;yt(Xn,Xn.current&1),yt(dr,n),Ir===null&&(r===null||Io.current!==null||r.memoizedState!==null)&&(Ir=n)}function Yv(n){if(n.tag===22){if(yt(Xn,Xn.current),yt(dr,n),Ir===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Ir=n)}}else Xa()}function Xa(){yt(Xn,Xn.current),yt(dr,dr.current)}function la(n){gt(dr),Ir===n&&(Ir=null),gt(Xn)}var Xn=Q(0);function pf(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||rm(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function mp(n,r,s,u){r=n.memoizedState,s=s(u,r),s=s==null?r:_({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var _p={enqueueSetState:function(n,r,s){n=n._reactInternals;var u=ji(),h=Ha(u);h.payload=r,s!=null&&(h.callback=s),r=Ga(n,h,u),r!==null&&(Ki(r,n,u),du(r,n,u))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var u=ji(),h=Ha(u);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Ga(n,h,u),r!==null&&(Ki(r,n,u),du(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=ji(),u=Ha(s);u.tag=2,r!=null&&(u.callback=r),r=Ga(n,u,s),r!==null&&(Ki(r,n,s),du(r,n,s))}};function qv(n,r,s,u,h,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,T):r.prototype&&r.prototype.isPureReactComponent?!iu(s,u)||!iu(h,m):!0}function Zv(n,r,s,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,u),r.state!==n&&_p.enqueueReplaceState(r,r.state,null)}function Vs(n,r){var s=r;if("ref"in r){s={};for(var u in r)u!=="ref"&&(s[u]=r[u])}if(n=n.defaultProps){s===r&&(s=_({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var mf=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function jv(n){mf(n)}function Kv(n){console.error(n)}function Qv(n){mf(n)}function _f(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function Jv(n,r,s){try{var u=n.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function gp(n,r,s){return s=Ha(s),s.tag=3,s.payload={element:null},s.callback=function(){_f(n,r)},s}function $v(n){return n=Ha(n),n.tag=3,n}function tx(n,r,s,u){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;n.payload=function(){return h(m)},n.callback=function(){Jv(r,s,u)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){Jv(r,s,u),typeof h!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var D=u.stack;this.componentDidCatch(u.value,{componentStack:D!==null?D:""})})}function A1(n,r,s,u,h){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=s.alternate,r!==null&&lu(r,s,h,!0),s=dr.current,s!==null){switch(s.tag){case 13:return Ir===null?Gp():s.alternate===null&&Rn===0&&(Rn=3),s.flags&=-257,s.flags|=65536,s.lanes=h,u===Yd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([u]):r.add(u),kp(n,u,h)),!1;case 22:return s.flags|=65536,u===Yd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([u]):s.add(u)),kp(n,u,h)),!1}throw Error(i(435,s.tag))}return kp(n,u,h),Gp(),!1}if(Ze)return r=dr.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,u!==Fd&&(n=Error(i(422),{cause:u}),ou(ur(n,s)))):(u!==Fd&&(r=Error(i(423),{cause:u}),ou(ur(r,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,u=ur(u,s),h=gp(n.stateNode,u,h),jd(n,h),Rn!==4&&(Rn=2)),!1;var m=Error(i(520),{cause:u});if(m=ur(m,s),Cu===null?Cu=[m]:Cu.push(m),Rn!==4&&(Rn=2),r===null)return!0;u=ur(u,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=gp(s.stateNode,u,n),jd(s,n),!1;case 1:if(r=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ka===null||!Ka.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=$v(h),tx(h,n,s,u),jd(s,h),!1}s=s.return}while(s!==null);return!1}var ex=Error(i(461)),Qn=!1;function ai(n,r,s,u){r.child=n===null?Wv(r,null,s,u):ko(r,n.child,s,u)}function nx(n,r,s,u,h){s=s.render;var m=r.ref;if("ref"in u){var T={};for(var D in u)D!=="ref"&&(T[D]=u[D])}else T=u;return Fs(r),u=tp(n,r,s,T,m,h),D=ep(),n!==null&&!Qn?(np(n,r,h),ua(n,r,h)):(Ze&&D&&Bd(r),r.flags|=1,ai(n,r,u,h),r.child)}function ix(n,r,s,u,h){if(n===null){var m=s.type;return typeof m=="function"&&!Od(m)&&m.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=m,rx(n,r,m,u,h)):(n=Zc(s.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!bp(n,h)){var T=m.memoizedProps;if(s=s.compare,s=s!==null?s:iu,s(T,u)&&n.ref===r.ref)return ua(n,r,h)}return r.flags|=1,n=na(m,u),n.ref=r.ref,n.return=r,r.child=n}function rx(n,r,s,u,h){if(n!==null){var m=n.memoizedProps;if(iu(m,u)&&n.ref===r.ref)if(Qn=!1,r.pendingProps=u=m,bp(n,h))(n.flags&131072)!==0&&(Qn=!0);else return r.lanes=n.lanes,ua(n,r,h)}return vp(n,r,s,u,h)}function ax(n,r,s){var u=r.pendingProps,h=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|s:s,n!==null){for(h=r.child=n.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return sx(n,r,u,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&$c(r,m!==null?m.cachePool:null),m!==null?rv(r,m):Qd(),Yv(r);else return r.lanes=r.childLanes=536870912,sx(n,r,m!==null?m.baseLanes|s:s,s)}else m!==null?($c(r,m.cachePool),rv(r,m),Xa(),r.memoizedState=null):(n!==null&&$c(r,null),Qd(),Xa());return ai(n,r,h,s),r.child}function sx(n,r,s,u){var h=Wd();return h=h===null?null:{parent:kn._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},n!==null&&$c(r,null),Qd(),Yv(r),n!==null&&lu(n,r,u,!0),null}function gf(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function vp(n,r,s,u,h){return Fs(r),s=tp(n,r,s,u,void 0,h),u=ep(),n!==null&&!Qn?(np(n,r,h),ua(n,r,h)):(Ze&&u&&Bd(r),r.flags|=1,ai(n,r,s,h),r.child)}function ox(n,r,s,u,h,m){return Fs(r),r.updateQueue=null,s=sv(r,u,s,h),av(n),u=ep(),n!==null&&!Qn?(np(n,r,m),ua(n,r,m)):(Ze&&u&&Bd(r),r.flags|=1,ai(n,r,s,m),r.child)}function lx(n,r,s,u,h){if(Fs(r),r.stateNode===null){var m=No,T=s.contextType;typeof T=="object"&&T!==null&&(m=fi(T)),m=new s(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=_p,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},qd(r),T=s.contextType,m.context=typeof T=="object"&&T!==null?fi(T):No,m.state=r.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(mp(r,s,T,u),m.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&_p.enqueueReplaceState(m,m.state,null),mu(r,u,m,h),pu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){m=r.stateNode;var D=r.memoizedProps,V=Vs(s,D);m.props=V;var rt=m.context,_t=s.contextType;T=No,typeof _t=="object"&&_t!==null&&(T=fi(_t));var Mt=s.getDerivedStateFromProps;_t=typeof Mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",D=r.pendingProps!==D,_t||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(D||rt!==T)&&Zv(r,m,u,T),Fa=!1;var at=r.memoizedState;m.state=at,mu(r,u,m,h),pu(),rt=r.memoizedState,D||at!==rt||Fa?(typeof Mt=="function"&&(mp(r,s,Mt,u),rt=r.memoizedState),(V=Fa||qv(r,s,V,u,at,rt,T))?(_t||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=rt),m.props=u,m.state=rt,m.context=T,u=V):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Zd(n,r),T=r.memoizedProps,_t=Vs(s,T),m.props=_t,Mt=r.pendingProps,at=m.context,rt=s.contextType,V=No,typeof rt=="object"&&rt!==null&&(V=fi(rt)),D=s.getDerivedStateFromProps,(rt=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==Mt||at!==V)&&Zv(r,m,u,V),Fa=!1,at=r.memoizedState,m.state=at,mu(r,u,m,h),pu();var lt=r.memoizedState;T!==Mt||at!==lt||Fa||n!==null&&n.dependencies!==null&&Qc(n.dependencies)?(typeof D=="function"&&(mp(r,s,D,u),lt=r.memoizedState),(_t=Fa||qv(r,s,_t,u,at,lt,V)||n!==null&&n.dependencies!==null&&Qc(n.dependencies))?(rt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,lt,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,lt,V)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=lt),m.props=u,m.state=lt,m.context=V,u=_t):(typeof m.componentDidUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(r.flags|=1024),u=!1)}return m=u,gf(n,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&u?(r.child=ko(r,n.child,null,h),r.child=ko(r,null,s,h)):ai(n,r,s,h),r.memoizedState=m.state,n=r.child):n=ua(n,r,h),n}function ux(n,r,s,u){return su(),r.flags|=256,ai(n,r,s,u),r.child}var xp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sp(n){return{baseLanes:n,cachePool:K0()}}function yp(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=pr),n}function cx(n,r,s){var u=r.pendingProps,h=!1,m=(r.flags&128)!==0,T;if((T=m)||(T=n!==null&&n.memoizedState===null?!1:(Xn.current&2)!==0),T&&(h=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,n===null){if(Ze){if(h?ka(r):Xa(),Ze){var D=An,V;if(V=D){t:{for(V=D,D=Br;V.nodeType!==8;){if(!D){D=null;break t}if(V=Cr(V.nextSibling),V===null){D=null;break t}}D=V}D!==null?(r.memoizedState={dehydrated:D,treeContext:Os!==null?{id:ia,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},V=Wi(18,null,null,0),V.stateNode=D,V.return=r,r.child=V,yi=r,An=null,V=!0):V=!1}V||Bs(r)}if(D=r.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return rm(D)?r.lanes=32:r.lanes=536870912,null;la(r)}return D=u.children,u=u.fallback,h?(Xa(),h=r.mode,D=vf({mode:"hidden",children:D},h),u=Ns(u,h,s,null),D.return=r,u.return=r,D.sibling=u,r.child=D,h=r.child,h.memoizedState=Sp(s),h.childLanes=yp(n,T,s),r.memoizedState=xp,u):(ka(r),Mp(r,D))}if(V=n.memoizedState,V!==null&&(D=V.dehydrated,D!==null)){if(m)r.flags&256?(ka(r),r.flags&=-257,r=Ep(n,r,s)):r.memoizedState!==null?(Xa(),r.child=n.child,r.flags|=128,r=null):(Xa(),h=u.fallback,D=r.mode,u=vf({mode:"visible",children:u.children},D),h=Ns(h,D,s,null),h.flags|=2,u.return=r,h.return=r,u.sibling=h,r.child=u,ko(r,n.child,null,s),u=r.child,u.memoizedState=Sp(s),u.childLanes=yp(n,T,s),r.memoizedState=xp,r=h);else if(ka(r),rm(D)){if(T=D.nextSibling&&D.nextSibling.dataset,T)var rt=T.dgst;T=rt,u=Error(i(419)),u.stack="",u.digest=T,ou({value:u,source:null,stack:null}),r=Ep(n,r,s)}else if(Qn||lu(n,r,s,!1),T=(s&n.childLanes)!==0,Qn||T){if(T=mn,T!==null&&(u=s&-s,u=(u&42)!==0?1:se(u),u=(u&(T.suspendedLanes|s))!==0?0:u,u!==0&&u!==V.retryLane))throw V.retryLane=u,Lo(n,u),Ki(T,n,u),ex;D.data==="$?"||Gp(),r=Ep(n,r,s)}else D.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=V.treeContext,An=Cr(D.nextSibling),yi=r,Ze=!0,zs=null,Br=!1,n!==null&&(fr[hr++]=ia,fr[hr++]=ra,fr[hr++]=Os,ia=n.id,ra=n.overflow,Os=r),r=Mp(r,u.children),r.flags|=4096);return r}return h?(Xa(),h=u.fallback,D=r.mode,V=n.child,rt=V.sibling,u=na(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,rt!==null?h=na(rt,h):(h=Ns(h,D,s,null),h.flags|=2),h.return=r,u.return=r,u.sibling=h,r.child=u,u=h,h=r.child,D=n.child.memoizedState,D===null?D=Sp(s):(V=D.cachePool,V!==null?(rt=kn._currentValue,V=V.parent!==rt?{parent:rt,pool:rt}:V):V=K0(),D={baseLanes:D.baseLanes|s,cachePool:V}),h.memoizedState=D,h.childLanes=yp(n,T,s),r.memoizedState=xp,u):(ka(r),s=n.child,n=s.sibling,s=na(s,{mode:"visible",children:u.children}),s.return=r,s.sibling=null,n!==null&&(T=r.deletions,T===null?(r.deletions=[n],r.flags|=16):T.push(n)),r.child=s,r.memoizedState=null,s)}function Mp(n,r){return r=vf({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function vf(n,r){return n=Wi(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Ep(n,r,s){return ko(r,n.child,null,s),n=Mp(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function fx(n,r,s){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Gd(n.return,r,s)}function Tp(n,r,s,u,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:h}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=s,m.tailMode=h)}function hx(n,r,s){var u=r.pendingProps,h=u.revealOrder,m=u.tail;if(ai(n,r,u.children,s),u=Xn.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fx(n,s,r);else if(n.tag===19)fx(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break t;for(;n.sibling===null;){if(n.return===null||n.return===r)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(yt(Xn,u),h){case"forwards":for(s=r.child,h=null;s!==null;)n=s.alternate,n!==null&&pf(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),Tp(r,!1,h,s,m);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&pf(n)===null){r.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Tp(r,!0,s,null,m);break;case"together":Tp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ua(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),ja|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(lu(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,s=na(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=na(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function bp(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Qc(n)))}function R1(n,r,s){switch(r.tag){case 3:Ct(r,r.stateNode.containerInfo),Ia(r,kn,n.memoizedState.cache),su();break;case 27:case 5:ne(r);break;case 4:Ct(r,r.stateNode.containerInfo);break;case 10:Ia(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(ka(r),r.flags|=128,null):(s&r.child.childLanes)!==0?cx(n,r,s):(ka(r),n=ua(n,r,s),n!==null?n.sibling:null);ka(r);break;case 19:var h=(n.flags&128)!==0;if(u=(s&r.childLanes)!==0,u||(lu(n,r,s,!1),u=(s&r.childLanes)!==0),h){if(u)return hx(n,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),yt(Xn,Xn.current),u)break;return null;case 22:case 23:return r.lanes=0,ax(n,r,s);case 24:Ia(r,kn,n.memoizedState.cache)}return ua(n,r,s)}function dx(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)Qn=!0;else{if(!bp(n,s)&&(r.flags&128)===0)return Qn=!1,R1(n,r,s);Qn=(n.flags&131072)!==0}else Qn=!1,Ze&&(r.flags&1048576)!==0&&k0(r,Kc,r.index);switch(r.lanes=0,r.tag){case 16:t:{n=r.pendingProps;var u=r.elementType,h=u._init;if(u=h(u._payload),r.type=u,typeof u=="function")Od(u)?(n=Vs(u,n),r.tag=1,r=lx(null,r,u,n,s)):(r.tag=0,r=vp(null,r,u,n,s));else{if(u!=null){if(h=u.$$typeof,h===A){r.tag=11,r=nx(null,r,u,n,s);break t}else if(h===O){r.tag=14,r=ix(null,r,u,n,s);break t}}throw r=ut(u)||u,Error(i(306,r,""))}}return r;case 0:return vp(n,r,r.type,r.pendingProps,s);case 1:return u=r.type,h=Vs(u,r.pendingProps),lx(n,r,u,h,s);case 3:t:{if(Ct(r,r.stateNode.containerInfo),n===null)throw Error(i(387));u=r.pendingProps;var m=r.memoizedState;h=m.element,Zd(n,r),mu(r,u,null,s);var T=r.memoizedState;if(u=T.cache,Ia(r,kn,u),u!==m.cache&&Vd(r,[kn],s,!0),pu(),u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=ux(n,r,u,s);break t}else if(u!==h){h=ur(Error(i(424)),r),ou(h),r=ux(n,r,u,s);break t}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(An=Cr(n.firstChild),yi=r,Ze=!0,zs=null,Br=!0,s=Wv(r,null,u,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(su(),u===h){r=ua(n,r,s);break t}ai(n,r,u,s)}r=r.child}return r;case 26:return gf(n,r),n===null?(s=gS(r.type,null,r.pendingProps,null))?r.memoizedState=s:Ze||(s=r.type,n=r.pendingProps,u=Lf(xt.current).createElement(s),u[wt]=r,u[ee]=n,oi(u,s,n),He(u),r.stateNode=u):r.memoizedState=gS(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return ne(r),n===null&&Ze&&(u=r.stateNode=pS(r.type,r.pendingProps,xt.current),yi=r,Br=!0,h=An,$a(r.type)?(am=h,An=Cr(u.firstChild)):An=h),ai(n,r,r.pendingProps.children,s),gf(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Ze&&((h=u=An)&&(u=eb(u,r.type,r.pendingProps,Br),u!==null?(r.stateNode=u,yi=r,An=Cr(u.firstChild),Br=!1,h=!0):h=!1),h||Bs(r)),ne(r),h=r.type,m=r.pendingProps,T=n!==null?n.memoizedProps:null,u=m.children,em(h,m)?u=null:T!==null&&em(h,T)&&(r.flags|=32),r.memoizedState!==null&&(h=tp(n,r,x1,null,null,s),Bu._currentValue=h),gf(n,r),ai(n,r,u,s),r.child;case 6:return n===null&&Ze&&((n=s=An)&&(s=nb(s,r.pendingProps,Br),s!==null?(r.stateNode=s,yi=r,An=null,n=!0):n=!1),n||Bs(r)),null;case 13:return cx(n,r,s);case 4:return Ct(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ko(r,null,u,s):ai(n,r,u,s),r.child;case 11:return nx(n,r,r.type,r.pendingProps,s);case 7:return ai(n,r,r.pendingProps,s),r.child;case 8:return ai(n,r,r.pendingProps.children,s),r.child;case 12:return ai(n,r,r.pendingProps.children,s),r.child;case 10:return u=r.pendingProps,Ia(r,r.type,u.value),ai(n,r,u.children,s),r.child;case 9:return h=r.type._context,u=r.pendingProps.children,Fs(r),h=fi(h),u=u(h),r.flags|=1,ai(n,r,u,s),r.child;case 14:return ix(n,r,r.type,r.pendingProps,s);case 15:return rx(n,r,r.type,r.pendingProps,s);case 19:return hx(n,r,s);case 31:return u=r.pendingProps,s=r.mode,u={mode:u.mode,children:u.children},n===null?(s=vf(u,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=na(n.child,u),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return ax(n,r,s);case 24:return Fs(r),u=fi(kn),n===null?(h=Wd(),h===null&&(h=mn,m=kd(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),r.memoizedState={parent:u,cache:h},qd(r),Ia(r,kn,h)):((n.lanes&s)!==0&&(Zd(n,r),mu(r,null,null,s),pu()),h=n.memoizedState,m=r.memoizedState,h.parent!==u?(h={parent:u,cache:u},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Ia(r,kn,u)):(u=m.cache,Ia(r,kn,u),u!==h.cache&&Vd(r,[kn],s,!0))),ai(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function ca(n){n.flags|=4}function px(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!MS(r)){if(r=dr.current,r!==null&&((Ge&4194048)===Ge?Ir!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||r!==Ir))throw hu=Yd,Q0;n.flags|=8192}}function xf(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Nt():536870912,n.lanes|=r,qo|=r)}function Mu(n,r){if(!Ze)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Mn(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,u=0;if(r)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=s,r}function C1(n,r,s){var u=r.pendingProps;switch(Id(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(r),null;case 1:return Mn(r),null;case 3:return s=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),sa(kn),ae(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(au(r)?ca(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Y0())),Mn(r),null;case 26:return s=r.memoizedState,n===null?(ca(r),s!==null?(Mn(r),px(r,s)):(Mn(r),r.flags&=-16777217)):s?s!==n.memoizedState?(ca(r),Mn(r),px(r,s)):(Mn(r),r.flags&=-16777217):(n.memoizedProps!==u&&ca(r),Mn(r),r.flags&=-16777217),null;case 27:ve(r),s=xt.current;var h=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&ca(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return Mn(r),null}n=j.current,au(r)?X0(r):(n=pS(h,u,s),r.stateNode=n,ca(r))}return Mn(r),null;case 5:if(ve(r),s=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&ca(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return Mn(r),null}if(n=j.current,au(r))X0(r);else{switch(h=Lf(xt.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?h.createElement(s,{is:u.is}):h.createElement(s)}}n[wt]=r,n[ee]=u;t:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break t;for(;h.sibling===null;){if(h.return===null||h.return===r)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=n;t:switch(oi(n,s,u),s){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&ca(r)}}return Mn(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&ca(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(i(166));if(n=xt.current,au(r)){if(n=r.stateNode,s=r.memoizedProps,u=null,h=yi,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}n[wt]=r,n=!!(n.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||oS(n.nodeValue,s)),n||Bs(r)}else n=Lf(n).createTextNode(u),n[wt]=r,r.stateNode=n}return Mn(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=au(r),u!==null&&u.dehydrated!==null){if(n===null){if(!h)throw Error(i(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[wt]=r}else su(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mn(r),h=!1}else h=Y0(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(la(r),r):(la(r),null)}if(la(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=u!==null,n=n!==null&&n.memoizedState!==null,s){u=r.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)}return s!==n&&s&&(r.child.flags|=8192),xf(r,r.updateQueue),Mn(r),null;case 4:return ae(),n===null&&Kp(r.stateNode.containerInfo),Mn(r),null;case 10:return sa(r.type),Mn(r),null;case 19:if(gt(Xn),h=r.memoizedState,h===null)return Mn(r),null;if(u=(r.flags&128)!==0,m=h.rendering,m===null)if(u)Mu(h,!1);else{if(Rn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=pf(n),m!==null){for(r.flags|=128,Mu(h,!1),n=m.updateQueue,r.updateQueue=n,xf(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)V0(s,n),s=s.sibling;return yt(Xn,Xn.current&1|2),r.child}n=n.sibling}h.tail!==null&&et()>Mf&&(r.flags|=128,u=!0,Mu(h,!1),r.lanes=4194304)}else{if(!u)if(n=pf(m),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,xf(r,n),Mu(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ze)return Mn(r),null}else 2*et()-h.renderingStartTime>Mf&&s!==536870912&&(r.flags|=128,u=!0,Mu(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(n=h.last,n!==null?n.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=et(),r.sibling=null,n=Xn.current,yt(Xn,u?n&1|2:n&1),r):(Mn(r),null);case 22:case 23:return la(r),Jd(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(s&536870912)!==0&&(r.flags&128)===0&&(Mn(r),r.subtreeFlags&6&&(r.flags|=8192)):Mn(r),s=r.updateQueue,s!==null&&xf(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==s&&(r.flags|=2048),n!==null&&gt(Hs),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),sa(kn),Mn(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function w1(n,r){switch(Id(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return sa(kn),ae(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ve(r),null;case 13:if(la(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));su()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return gt(Xn),null;case 4:return ae(),null;case 10:return sa(r.type),null;case 22:case 23:return la(r),Jd(),n!==null&&gt(Hs),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return sa(kn),null;case 25:return null;default:return null}}function mx(n,r){switch(Id(r),r.tag){case 3:sa(kn),ae();break;case 26:case 27:case 5:ve(r);break;case 4:ae();break;case 13:la(r);break;case 19:gt(Xn);break;case 10:sa(r.type);break;case 22:case 23:la(r),Jd(),n!==null&&gt(Hs);break;case 24:sa(kn)}}function Eu(n,r){try{var s=r.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&n)===n){u=void 0;var m=s.create,T=s.inst;u=m(),T.destroy=u}s=s.next}while(s!==h)}}catch(D){fn(r,r.return,D)}}function Wa(n,r,s){try{var u=r.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&n)===n){var T=u.inst,D=T.destroy;if(D!==void 0){T.destroy=void 0,h=r;var V=s,rt=D;try{rt()}catch(_t){fn(h,V,_t)}}}u=u.next}while(u!==m)}}catch(_t){fn(r,r.return,_t)}}function _x(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{iv(r,s)}catch(u){fn(n,n.return,u)}}}function gx(n,r,s){s.props=Vs(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(u){fn(n,r,u)}}function Tu(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof s=="function"?n.refCleanup=s(u):s.current=u}}catch(h){fn(n,r,h)}}function Fr(n,r){var s=n.ref,u=n.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(h){fn(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){fn(n,r,h)}else s.current=null}function vx(n){var r=n.type,s=n.memoizedProps,u=n.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(h){fn(n,n.return,h)}}function Ap(n,r,s){try{var u=n.stateNode;K1(u,n.type,s,r),u[ee]=r}catch(h){fn(n,n.return,h)}}function xx(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&$a(n.type)||n.tag===4}function Rp(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||xx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&$a(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cp(n,r,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Uf));else if(u!==4&&(u===27&&$a(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(Cp(n,r,s),n=n.sibling;n!==null;)Cp(n,r,s),n=n.sibling}function Sf(n,r,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(u!==4&&(u===27&&$a(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Sf(n,r,s),n=n.sibling;n!==null;)Sf(n,r,s),n=n.sibling}function Sx(n){var r=n.stateNode,s=n.memoizedProps;try{for(var u=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);oi(r,u,s),r[wt]=n,r[ee]=s}catch(m){fn(n,n.return,m)}}var fa=!1,Dn=!1,wp=!1,yx=typeof WeakSet=="function"?WeakSet:Set,Jn=null;function D1(n,r){if(n=n.containerInfo,$p=If,n=L0(n),Rd(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var T=0,D=-1,V=-1,rt=0,_t=0,Mt=n,at=null;e:for(;;){for(var lt;Mt!==s||h!==0&&Mt.nodeType!==3||(D=T+h),Mt!==m||u!==0&&Mt.nodeType!==3||(V=T+u),Mt.nodeType===3&&(T+=Mt.nodeValue.length),(lt=Mt.firstChild)!==null;)at=Mt,Mt=lt;for(;;){if(Mt===n)break e;if(at===s&&++rt===h&&(D=T),at===m&&++_t===u&&(V=T),(lt=Mt.nextSibling)!==null)break;Mt=at,at=Mt.parentNode}Mt=lt}s=D===-1||V===-1?null:{start:D,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(tm={focusedElem:n,selectionRange:s},If=!1,Jn=r;Jn!==null;)if(r=Jn,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,Jn=n;else for(;Jn!==null;){switch(r=Jn,m=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=r,h=m.memoizedProps,m=m.memoizedState,u=s.stateNode;try{var me=Vs(s.type,h,s.elementType===s.type);n=u.getSnapshotBeforeUpdate(me,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(fe){fn(s,s.return,fe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)im(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":im(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,Jn=n;break}Jn=r.return}}function Mx(n,r,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:Ya(n,s),u&4&&Eu(5,s);break;case 1:if(Ya(n,s),u&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(T){fn(s,s.return,T)}else{var h=Vs(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(T){fn(s,s.return,T)}}u&64&&_x(s),u&512&&Tu(s,s.return);break;case 3:if(Ya(n,s),u&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{iv(n,r)}catch(T){fn(s,s.return,T)}}break;case 27:r===null&&u&4&&Sx(s);case 26:case 5:Ya(n,s),r===null&&u&4&&vx(s),u&512&&Tu(s,s.return);break;case 12:Ya(n,s);break;case 13:Ya(n,s),u&4&&bx(n,s),u&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=F1.bind(null,s),ib(n,s))));break;case 22:if(u=s.memoizedState!==null||fa,!u){r=r!==null&&r.memoizedState!==null||Dn,h=fa;var m=Dn;fa=u,(Dn=r)&&!m?qa(n,s,(s.subtreeFlags&8772)!==0):Ya(n,s),fa=h,Dn=m}break;case 30:break;default:Ya(n,s)}}function Ex(n){var r=n.alternate;r!==null&&(n.alternate=null,Ex(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&qe(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var xn=null,Li=!1;function ha(n,r,s){for(s=s.child;s!==null;)Tx(n,r,s),s=s.sibling}function Tx(n,r,s){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(pt,s)}catch{}switch(s.tag){case 26:Dn||Fr(s,r),ha(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Dn||Fr(s,r);var u=xn,h=Li;$a(s.type)&&(xn=s.stateNode,Li=!1),ha(n,r,s),Nu(s.stateNode),xn=u,Li=h;break;case 5:Dn||Fr(s,r);case 6:if(u=xn,h=Li,xn=null,ha(n,r,s),xn=u,Li=h,xn!==null)if(Li)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(s.stateNode)}catch(m){fn(s,r,m)}else try{xn.removeChild(s.stateNode)}catch(m){fn(s,r,m)}break;case 18:xn!==null&&(Li?(n=xn,hS(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Gu(n)):hS(xn,s.stateNode));break;case 4:u=xn,h=Li,xn=s.stateNode.containerInfo,Li=!0,ha(n,r,s),xn=u,Li=h;break;case 0:case 11:case 14:case 15:Dn||Wa(2,s,r),Dn||Wa(4,s,r),ha(n,r,s);break;case 1:Dn||(Fr(s,r),u=s.stateNode,typeof u.componentWillUnmount=="function"&&gx(s,r,u)),ha(n,r,s);break;case 21:ha(n,r,s);break;case 22:Dn=(u=Dn)||s.memoizedState!==null,ha(n,r,s),Dn=u;break;default:ha(n,r,s)}}function bx(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Gu(n)}catch(s){fn(r,r.return,s)}}function U1(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new yx),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new yx),r;default:throw Error(i(435,n.tag))}}function Dp(n,r){var s=U1(n);r.forEach(function(u){var h=H1.bind(null,n,u);s.has(u)||(s.add(u),u.then(h,h))})}function Yi(n,r){var s=r.deletions;if(s!==null)for(var u=0;u<s.length;u++){var h=s[u],m=n,T=r,D=T;t:for(;D!==null;){switch(D.tag){case 27:if($a(D.type)){xn=D.stateNode,Li=!1;break t}break;case 5:xn=D.stateNode,Li=!1;break t;case 3:case 4:xn=D.stateNode.containerInfo,Li=!0;break t}D=D.return}if(xn===null)throw Error(i(160));Tx(m,T,h),xn=null,Li=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Ax(r,n),r=r.sibling}var Rr=null;function Ax(n,r){var s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Yi(r,n),qi(n),u&4&&(Wa(3,n,n.return),Eu(3,n),Wa(5,n,n.return));break;case 1:Yi(r,n),qi(n),u&512&&(Dn||s===null||Fr(s,s.return)),u&64&&fa&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var h=Rr;if(Yi(r,n),qi(n),u&512&&(Dn||s===null||Fr(s,s.return)),u&4){var m=s!==null?s.memoizedState:null;if(u=n.memoizedState,s===null)if(u===null)if(n.stateNode===null){t:{u=n.type,s=n.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[gn]||m[wt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),oi(m,u,s),m[wt]=n,He(m),u=m;break t;case"link":var T=SS("link","href",h).get(u+(s.href||""));if(T){for(var D=0;D<T.length;D++)if(m=T[D],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(D,1);break e}}m=h.createElement(u),oi(m,u,s),h.head.appendChild(m);break;case"meta":if(T=SS("meta","content",h).get(u+(s.content||""))){for(D=0;D<T.length;D++)if(m=T[D],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(D,1);break e}}m=h.createElement(u),oi(m,u,s),h.head.appendChild(m);break;default:throw Error(i(468,u))}m[wt]=n,He(m),u=m}n.stateNode=u}else yS(h,n.type,n.stateNode);else n.stateNode=xS(h,u,n.memoizedProps);else m!==u?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,u===null?yS(h,n.type,n.stateNode):xS(h,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Ap(n,n.memoizedProps,s.memoizedProps)}break;case 27:Yi(r,n),qi(n),u&512&&(Dn||s===null||Fr(s,s.return)),s!==null&&u&4&&Ap(n,n.memoizedProps,s.memoizedProps);break;case 5:if(Yi(r,n),qi(n),u&512&&(Dn||s===null||Fr(s,s.return)),n.flags&32){h=n.stateNode;try{zr(h,"")}catch(lt){fn(n,n.return,lt)}}u&4&&n.stateNode!=null&&(h=n.memoizedProps,Ap(n,h,s!==null?s.memoizedProps:h)),u&1024&&(wp=!0);break;case 6:if(Yi(r,n),qi(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,s=n.stateNode;try{s.nodeValue=u}catch(lt){fn(n,n.return,lt)}}break;case 3:if(Pf=null,h=Rr,Rr=Nf(r.containerInfo),Yi(r,n),Rr=h,qi(n),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Gu(r.containerInfo)}catch(lt){fn(n,n.return,lt)}wp&&(wp=!1,Rx(n));break;case 4:u=Rr,Rr=Nf(n.stateNode.containerInfo),Yi(r,n),qi(n),Rr=u;break;case 12:Yi(r,n),qi(n);break;case 13:Yi(r,n),qi(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(zp=et()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Dp(n,u)));break;case 22:h=n.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,rt=fa,_t=Dn;if(fa=rt||h,Dn=_t||V,Yi(r,n),Dn=_t,fa=rt,qi(n),u&8192)t:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||V||fa||Dn||ks(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){V=s=r;try{if(m=V.stateNode,h)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{D=V.stateNode;var Mt=V.memoizedProps.style,at=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;D.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(lt){fn(V,V.return,lt)}}}else if(r.tag===6){if(s===null){V=r;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(lt){fn(V,V.return,lt)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break t;for(;r.sibling===null;){if(r.return===null||r.return===n)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Dp(n,s))));break;case 19:Yi(r,n),qi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Dp(n,u)));break;case 30:break;case 21:break;default:Yi(r,n),qi(n)}}function qi(n){var r=n.flags;if(r&2){try{for(var s,u=n.return;u!==null;){if(xx(u)){s=u;break}u=u.return}if(s==null)throw Error(i(160));switch(s.tag){case 27:var h=s.stateNode,m=Rp(n);Sf(n,m,h);break;case 5:var T=s.stateNode;s.flags&32&&(zr(T,""),s.flags&=-33);var D=Rp(n);Sf(n,D,T);break;case 3:case 4:var V=s.stateNode.containerInfo,rt=Rp(n);Cp(n,rt,V);break;default:throw Error(i(161))}}catch(_t){fn(n,n.return,_t)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Rx(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Rx(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Ya(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Mx(n,r.alternate,r),r=r.sibling}function ks(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Wa(4,r,r.return),ks(r);break;case 1:Fr(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&gx(r,r.return,s),ks(r);break;case 27:Nu(r.stateNode);case 26:case 5:Fr(r,r.return),ks(r);break;case 22:r.memoizedState===null&&ks(r);break;case 30:ks(r);break;default:ks(r)}n=n.sibling}}function qa(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,h=n,m=r,T=m.flags;switch(m.tag){case 0:case 11:case 15:qa(h,m,s),Eu(4,m);break;case 1:if(qa(h,m,s),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(rt){fn(u,u.return,rt)}if(u=m,h=u.updateQueue,h!==null){var D=u.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)nv(V[h],D)}catch(rt){fn(u,u.return,rt)}}s&&T&64&&_x(m),Tu(m,m.return);break;case 27:Sx(m);case 26:case 5:qa(h,m,s),s&&u===null&&T&4&&vx(m),Tu(m,m.return);break;case 12:qa(h,m,s);break;case 13:qa(h,m,s),s&&T&4&&bx(h,m);break;case 22:m.memoizedState===null&&qa(h,m,s),Tu(m,m.return);break;case 30:break;default:qa(h,m,s)}r=r.sibling}}function Up(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&uu(s))}function Lp(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&uu(n))}function Hr(n,r,s,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Cx(n,r,s,u),r=r.sibling}function Cx(n,r,s,u){var h=r.flags;switch(r.tag){case 0:case 11:case 15:Hr(n,r,s,u),h&2048&&Eu(9,r);break;case 1:Hr(n,r,s,u);break;case 3:Hr(n,r,s,u),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&uu(n)));break;case 12:if(h&2048){Hr(n,r,s,u),n=r.stateNode;try{var m=r.memoizedProps,T=m.id,D=m.onPostCommit;typeof D=="function"&&D(T,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(V){fn(r,r.return,V)}}else Hr(n,r,s,u);break;case 13:Hr(n,r,s,u);break;case 23:break;case 22:m=r.stateNode,T=r.alternate,r.memoizedState!==null?m._visibility&2?Hr(n,r,s,u):bu(n,r):m._visibility&2?Hr(n,r,s,u):(m._visibility|=2,Xo(n,r,s,u,(r.subtreeFlags&10256)!==0)),h&2048&&Up(T,r);break;case 24:Hr(n,r,s,u),h&2048&&Lp(r.alternate,r);break;default:Hr(n,r,s,u)}}function Xo(n,r,s,u,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=n,T=r,D=s,V=u,rt=T.flags;switch(T.tag){case 0:case 11:case 15:Xo(m,T,D,V,h),Eu(8,T);break;case 23:break;case 22:var _t=T.stateNode;T.memoizedState!==null?_t._visibility&2?Xo(m,T,D,V,h):bu(m,T):(_t._visibility|=2,Xo(m,T,D,V,h)),h&&rt&2048&&Up(T.alternate,T);break;case 24:Xo(m,T,D,V,h),h&&rt&2048&&Lp(T.alternate,T);break;default:Xo(m,T,D,V,h)}r=r.sibling}}function bu(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,u=r,h=u.flags;switch(u.tag){case 22:bu(s,u),h&2048&&Up(u.alternate,u);break;case 24:bu(s,u),h&2048&&Lp(u.alternate,u);break;default:bu(s,u)}r=r.sibling}}var Au=8192;function Wo(n){if(n.subtreeFlags&Au)for(n=n.child;n!==null;)wx(n),n=n.sibling}function wx(n){switch(n.tag){case 26:Wo(n),n.flags&Au&&n.memoizedState!==null&&_b(Rr,n.memoizedState,n.memoizedProps);break;case 5:Wo(n);break;case 3:case 4:var r=Rr;Rr=Nf(n.stateNode.containerInfo),Wo(n),Rr=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Au,Au=16777216,Wo(n),Au=r):Wo(n));break;default:Wo(n)}}function Dx(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Ru(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var u=r[s];Jn=u,Lx(u,n)}Dx(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ux(n),n=n.sibling}function Ux(n){switch(n.tag){case 0:case 11:case 15:Ru(n),n.flags&2048&&Wa(9,n,n.return);break;case 3:Ru(n);break;case 12:Ru(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,yf(n)):Ru(n);break;default:Ru(n)}}function yf(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var u=r[s];Jn=u,Lx(u,n)}Dx(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Wa(8,r,r.return),yf(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,yf(r));break;default:yf(r)}n=n.sibling}}function Lx(n,r){for(;Jn!==null;){var s=Jn;switch(s.tag){case 0:case 11:case 15:Wa(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:uu(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,Jn=u;else t:for(s=n;Jn!==null;){u=Jn;var h=u.sibling,m=u.return;if(Ex(u),u===s){Jn=null;break t}if(h!==null){h.return=m,Jn=h;break t}Jn=m}}}var L1={getCacheForType:function(n){var r=fi(kn),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s}},N1=typeof WeakMap=="function"?WeakMap:Map,$e=0,mn=null,Le=null,Ge=0,tn=0,Zi=null,Za=!1,Yo=!1,Np=!1,da=0,Rn=0,ja=0,Xs=0,Op=0,pr=0,qo=0,Cu=null,Ni=null,Pp=!1,zp=0,Mf=1/0,Ef=null,Ka=null,si=0,Qa=null,Zo=null,jo=0,Bp=0,Ip=null,Nx=null,wu=0,Fp=null;function ji(){if(($e&2)!==0&&Ge!==0)return Ge&-Ge;if(B.T!==null){var n=zo;return n!==0?n:Yp()}return It()}function Ox(){pr===0&&(pr=(Ge&536870912)===0||Ze?G():536870912);var n=dr.current;return n!==null&&(n.flags|=32),pr}function Ki(n,r,s){(n===mn&&(tn===2||tn===9)||n.cancelPendingCommit!==null)&&(Ko(n,0),Ja(n,Ge,pr,!1)),Ot(n,s),(($e&2)===0||n!==mn)&&(n===mn&&(($e&2)===0&&(Xs|=s),Rn===4&&Ja(n,Ge,pr,!1)),Gr(n))}function Px(n,r,s){if(($e&6)!==0)throw Error(i(327));var u=!s&&(r&124)===0&&(r&n.expiredLanes)===0||Dt(n,r),h=u?z1(n,r):Vp(n,r,!0),m=u;do{if(h===0){Yo&&!u&&Ja(n,r,0,!1);break}else{if(s=n.current.alternate,m&&!O1(s)){h=Vp(n,r,!1),m=!1;continue}if(h===2){if(m=r,n.errorRecoveryDisabledLanes&m)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;t:{var D=n;h=Cu;var V=D.current.memoizedState.isDehydrated;if(V&&(Ko(D,T).flags|=256),T=Vp(D,T,!1),T!==2){if(Np&&!V){D.errorRecoveryDisabledLanes|=m,Xs|=m,h=4;break t}m=Ni,Ni=h,m!==null&&(Ni===null?Ni=m:Ni.push.apply(Ni,m))}h=T}if(m=!1,h!==2)continue}}if(h===1){Ko(n,0),Ja(n,r,0,!0);break}t:{switch(u=n,m=h,m){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:Ja(u,r,pr,!Za);break t;case 2:Ni=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(h=zp+300-et(),10<h)){if(Ja(u,r,pr,!Za),$t(u,0,!0)!==0)break t;u.timeoutHandle=cS(zx.bind(null,u,s,Ni,Ef,Pp,r,pr,Xs,qo,Za,m,2,-0,0),h);break t}zx(u,s,Ni,Ef,Pp,r,pr,Xs,qo,Za,m,0,-0,0)}}break}while(!0);Gr(n)}function zx(n,r,s,u,h,m,T,D,V,rt,_t,Mt,at,lt){if(n.timeoutHandle=-1,Mt=r.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(zu={stylesheets:null,count:0,unsuspend:mb},wx(r),Mt=gb(),Mt!==null)){n.cancelPendingCommit=Mt(kx.bind(null,n,r,m,s,u,h,T,D,V,_t,1,at,lt)),Ja(n,m,T,!rt);return}kx(n,r,m,s,u,h,T,D,V)}function O1(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var h=s[u],m=h.getSnapshot;h=h.value;try{if(!Xi(m(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ja(n,r,s,u){r&=~Op,r&=~Xs,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var h=r;0<h;){var m=31-Lt(h),T=1<<m;u[m]=-1,h&=~T}s!==0&&vt(n,s,r)}function Tf(){return($e&6)===0?(Du(0),!1):!0}function Hp(){if(Le!==null){if(tn===0)var n=Le.return;else n=Le,aa=Is=null,ip(n),Vo=null,Su=0,n=Le;for(;n!==null;)mx(n.alternate,n),n=n.return;Le=null}}function Ko(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,J1(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Hp(),mn=n,Le=s=na(n.current,null),Ge=r,tn=0,Zi=null,Za=!1,Yo=Dt(n,r),Np=!1,qo=pr=Op=Xs=ja=Rn=0,Ni=Cu=null,Pp=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var h=31-Lt(u),m=1<<h;r|=n[h],u&=~m}return da=r,Wc(),s}function Bx(n,r){Te=null,B.H=ff,r===fu||r===tf?(r=tv(),tn=3):r===Q0?(r=tv(),tn=4):tn=r===ex?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Zi=r,Le===null&&(Rn=1,_f(n,ur(r,n.current)))}function Ix(){var n=B.H;return B.H=ff,n===null?ff:n}function Fx(){var n=B.A;return B.A=L1,n}function Gp(){Rn=4,Za||(Ge&4194048)!==Ge&&dr.current!==null||(Yo=!0),(ja&134217727)===0&&(Xs&134217727)===0||mn===null||Ja(mn,Ge,pr,!1)}function Vp(n,r,s){var u=$e;$e|=2;var h=Ix(),m=Fx();(mn!==n||Ge!==r)&&(Ef=null,Ko(n,r)),r=!1;var T=Rn;t:do try{if(tn!==0&&Le!==null){var D=Le,V=Zi;switch(tn){case 8:Hp(),T=6;break t;case 3:case 2:case 9:case 6:dr.current===null&&(r=!0);var rt=tn;if(tn=0,Zi=null,Qo(n,D,V,rt),s&&Yo){T=0;break t}break;default:rt=tn,tn=0,Zi=null,Qo(n,D,V,rt)}}P1(),T=Rn;break}catch(_t){Bx(n,_t)}while(!0);return r&&n.shellSuspendCounter++,aa=Is=null,$e=u,B.H=h,B.A=m,Le===null&&(mn=null,Ge=0,Wc()),T}function P1(){for(;Le!==null;)Hx(Le)}function z1(n,r){var s=$e;$e|=2;var u=Ix(),h=Fx();mn!==n||Ge!==r?(Ef=null,Mf=et()+500,Ko(n,r)):Yo=Dt(n,r);t:do try{if(tn!==0&&Le!==null){r=Le;var m=Zi;e:switch(tn){case 1:tn=0,Zi=null,Qo(n,r,m,1);break;case 2:case 9:if(J0(m)){tn=0,Zi=null,Gx(r);break}r=function(){tn!==2&&tn!==9||mn!==n||(tn=7),Gr(n)},m.then(r,r);break t;case 3:tn=7;break t;case 4:tn=5;break t;case 7:J0(m)?(tn=0,Zi=null,Gx(r)):(tn=0,Zi=null,Qo(n,r,m,7));break;case 5:var T=null;switch(Le.tag){case 26:T=Le.memoizedState;case 5:case 27:var D=Le;if(!T||MS(T)){tn=0,Zi=null;var V=D.sibling;if(V!==null)Le=V;else{var rt=D.return;rt!==null?(Le=rt,bf(rt)):Le=null}break e}}tn=0,Zi=null,Qo(n,r,m,5);break;case 6:tn=0,Zi=null,Qo(n,r,m,6);break;case 8:Hp(),Rn=6;break t;default:throw Error(i(462))}}B1();break}catch(_t){Bx(n,_t)}while(!0);return aa=Is=null,B.H=u,B.A=h,$e=s,Le!==null?0:(mn=null,Ge=0,Wc(),Rn)}function B1(){for(;Le!==null&&!Ve();)Hx(Le)}function Hx(n){var r=dx(n.alternate,n,da);n.memoizedProps=n.pendingProps,r===null?bf(n):Le=r}function Gx(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=ox(s,r,r.pendingProps,r.type,void 0,Ge);break;case 11:r=ox(s,r,r.pendingProps,r.type.render,r.ref,Ge);break;case 5:ip(r);default:mx(s,r),r=Le=V0(r,da),r=dx(s,r,da)}n.memoizedProps=n.pendingProps,r===null?bf(n):Le=r}function Qo(n,r,s,u){aa=Is=null,ip(r),Vo=null,Su=0;var h=r.return;try{if(A1(n,h,r,s,Ge)){Rn=1,_f(n,ur(s,n.current)),Le=null;return}}catch(m){if(h!==null)throw Le=h,m;Rn=1,_f(n,ur(s,n.current)),Le=null;return}r.flags&32768?(Ze||u===1?n=!0:Yo||(Ge&536870912)!==0?n=!1:(Za=n=!0,(u===2||u===9||u===3||u===6)&&(u=dr.current,u!==null&&u.tag===13&&(u.flags|=16384))),Vx(r,n)):bf(r)}function bf(n){var r=n;do{if((r.flags&32768)!==0){Vx(r,Za);return}n=r.return;var s=C1(r.alternate,r,da);if(s!==null){Le=s;return}if(r=r.sibling,r!==null){Le=r;return}Le=r=n}while(r!==null);Rn===0&&(Rn=5)}function Vx(n,r){do{var s=w1(n.alternate,n);if(s!==null){s.flags&=32767,Le=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){Le=n;return}Le=n=s}while(n!==null);Rn=6,Le=null}function kx(n,r,s,u,h,m,T,D,V){n.cancelPendingCommit=null;do Af();while(si!==0);if(($e&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(m=r.lanes|r.childLanes,m|=Ld,At(n,s,m,T,D,V),n===mn&&(Le=mn=null,Ge=0),Zo=r,Qa=n,jo=s,Bp=m,Ip=h,Nx=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,G1(Wt,function(){return Zx(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=B.T,B.T=null,h=X.p,X.p=2,T=$e,$e|=4;try{D1(n,r,s)}finally{$e=T,X.p=h,B.T=u}}si=1,Xx(),Wx(),Yx()}}function Xx(){if(si===1){si=0;var n=Qa,r=Zo,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var u=X.p;X.p=2;var h=$e;$e|=4;try{Ax(r,n);var m=tm,T=L0(n.containerInfo),D=m.focusedElem,V=m.selectionRange;if(T!==D&&D&&D.ownerDocument&&U0(D.ownerDocument.documentElement,D)){if(V!==null&&Rd(D)){var rt=V.start,_t=V.end;if(_t===void 0&&(_t=rt),"selectionStart"in D)D.selectionStart=rt,D.selectionEnd=Math.min(_t,D.value.length);else{var Mt=D.ownerDocument||document,at=Mt&&Mt.defaultView||window;if(at.getSelection){var lt=at.getSelection(),me=D.textContent.length,fe=Math.min(V.start,me),sn=V.end===void 0?fe:Math.min(V.end,me);!lt.extend&&fe>sn&&(T=sn,sn=fe,fe=T);var J=D0(D,fe),q=D0(D,sn);if(J&&q&&(lt.rangeCount!==1||lt.anchorNode!==J.node||lt.anchorOffset!==J.offset||lt.focusNode!==q.node||lt.focusOffset!==q.offset)){var nt=Mt.createRange();nt.setStart(J.node,J.offset),lt.removeAllRanges(),fe>sn?(lt.addRange(nt),lt.extend(q.node,q.offset)):(nt.setEnd(q.node,q.offset),lt.addRange(nt))}}}}for(Mt=[],lt=D;lt=lt.parentNode;)lt.nodeType===1&&Mt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Mt.length;D++){var St=Mt[D];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}If=!!$p,tm=$p=null}finally{$e=h,X.p=u,B.T=s}}n.current=r,si=2}}function Wx(){if(si===2){si=0;var n=Qa,r=Zo,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var u=X.p;X.p=2;var h=$e;$e|=4;try{Mx(n,r.alternate,r)}finally{$e=h,X.p=u,B.T=s}}si=3}}function Yx(){if(si===4||si===3){si=0,_e();var n=Qa,r=Zo,s=jo,u=Nx;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?si=5:(si=0,Zo=Qa=null,qx(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Ka=null),Pe(s),r=r.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(pt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=B.T,h=X.p,X.p=2,B.T=null;try{for(var m=n.onRecoverableError,T=0;T<u.length;T++){var D=u[T];m(D.value,{componentStack:D.stack})}}finally{B.T=r,X.p=h}}(jo&3)!==0&&Af(),Gr(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===Fp?wu++:(wu=0,Fp=n):wu=0,Du(0)}}function qx(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,uu(r)))}function Af(n){return Xx(),Wx(),Yx(),Zx()}function Zx(){if(si!==5)return!1;var n=Qa,r=Bp;Bp=0;var s=Pe(jo),u=B.T,h=X.p;try{X.p=32>s?32:s,B.T=null,s=Ip,Ip=null;var m=Qa,T=jo;if(si=0,Zo=Qa=null,jo=0,($e&6)!==0)throw Error(i(331));var D=$e;if($e|=4,Ux(m.current),Cx(m,m.current,T,s),$e=D,Du(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(pt,m)}catch{}return!0}finally{X.p=h,B.T=u,qx(n,r)}}function jx(n,r,s){r=ur(s,r),r=gp(n.stateNode,r,2),n=Ga(n,r,2),n!==null&&(Ot(n,2),Gr(n))}function fn(n,r,s){if(n.tag===3)jx(n,n,s);else for(;r!==null;){if(r.tag===3){jx(r,n,s);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ka===null||!Ka.has(u))){n=ur(s,n),s=$v(2),u=Ga(r,s,2),u!==null&&(tx(s,u,r,n),Ot(u,2),Gr(u));break}}r=r.return}}function kp(n,r,s){var u=n.pingCache;if(u===null){u=n.pingCache=new N1;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(s)||(Np=!0,h.add(s),n=I1.bind(null,n,r,s),r.then(n,n))}function I1(n,r,s){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,mn===n&&(Ge&s)===s&&(Rn===4||Rn===3&&(Ge&62914560)===Ge&&300>et()-zp?($e&2)===0&&Ko(n,0):Op|=s,qo===Ge&&(qo=0)),Gr(n)}function Kx(n,r){r===0&&(r=Nt()),n=Lo(n,r),n!==null&&(Ot(n,r),Gr(n))}function F1(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),Kx(n,s)}function H1(n,r){var s=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(r),Kx(n,s)}function G1(n,r){return Xt(n,r)}var Rf=null,Jo=null,Xp=!1,Cf=!1,Wp=!1,Ws=0;function Gr(n){n!==Jo&&n.next===null&&(Jo===null?Rf=Jo=n:Jo=Jo.next=n),Cf=!0,Xp||(Xp=!0,k1())}function Du(n,r){if(!Wp&&Cf){Wp=!0;do for(var s=!1,u=Rf;u!==null;){if(n!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var T=u.suspendedLanes,D=u.pingedLanes;m=(1<<31-Lt(42|n)+1)-1,m&=h&~(T&~D),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,tS(u,m))}else m=Ge,m=$t(u,u===mn?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Dt(u,m)||(s=!0,tS(u,m));u=u.next}while(s);Wp=!1}}function V1(){Qx()}function Qx(){Cf=Xp=!1;var n=0;Ws!==0&&(Q1()&&(n=Ws),Ws=0);for(var r=et(),s=null,u=Rf;u!==null;){var h=u.next,m=Jx(u,r);m===0?(u.next=null,s===null?Rf=h:s.next=h,h===null&&(Jo=s)):(s=u,(n!==0||(m&3)!==0)&&(Cf=!0)),u=h}Du(n)}function Jx(n,r){for(var s=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var T=31-Lt(m),D=1<<T,V=h[T];V===-1?((D&s)===0||(D&u)!==0)&&(h[T]=le(D,r)):V<=r&&(n.expiredLanes|=D),m&=~D}if(r=mn,s=Ge,s=$t(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,s===0||n===r&&(tn===2||tn===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&k(u),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Dt(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(u!==null&&k(u),Pe(s)){case 2:case 8:s=Kt;break;case 32:s=Wt;break;case 268435456:s=I;break;default:s=Wt}return u=$x.bind(null,n),s=Xt(s,u),n.callbackPriority=r,n.callbackNode=s,r}return u!==null&&u!==null&&k(u),n.callbackPriority=2,n.callbackNode=null,2}function $x(n,r){if(si!==0&&si!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Af()&&n.callbackNode!==s)return null;var u=Ge;return u=$t(n,n===mn?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(Px(n,u,r),Jx(n,et()),n.callbackNode!=null&&n.callbackNode===s?$x.bind(null,n):null)}function tS(n,r){if(Af())return null;Px(n,r,!0)}function k1(){$1(function(){($e&6)!==0?Xt(ge,V1):Qx()})}function Yp(){return Ws===0&&(Ws=G()),Ws}function eS(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ic(""+n)}function nS(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function X1(n,r,s,u,h){if(r==="submit"&&s&&s.stateNode===h){var m=eS((h[ee]||null).action),T=u.submitter;T&&(r=(r=T[ee]||null)?eS(r.formAction):T.getAttribute("formAction"),r!==null&&(m=r,T=null));var D=new Vc("action","action",null,u,h);n.push({event:D,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ws!==0){var V=T?nS(h,T):new FormData(h);hp(s,{pending:!0,data:V,method:h.method,action:m},null,V)}}else typeof m=="function"&&(D.preventDefault(),V=T?nS(h,T):new FormData(h),hp(s,{pending:!0,data:V,method:h.method,action:m},m,V))},currentTarget:h}]})}}for(var qp=0;qp<Ud.length;qp++){var Zp=Ud[qp],W1=Zp.toLowerCase(),Y1=Zp[0].toUpperCase()+Zp.slice(1);Ar(W1,"on"+Y1)}Ar(P0,"onAnimationEnd"),Ar(z0,"onAnimationIteration"),Ar(B0,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(u1,"onTransitionRun"),Ar(c1,"onTransitionStart"),Ar(f1,"onTransitionCancel"),Ar(I0,"onTransitionEnd"),U("onMouseEnter",["mouseout","mouseover"]),U("onMouseLeave",["mouseout","mouseover"]),U("onPointerEnter",["pointerout","pointerover"]),U("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uu));function iS(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var u=n[s],h=u.event;u=u.listeners;t:{var m=void 0;if(r)for(var T=u.length-1;0<=T;T--){var D=u[T],V=D.instance,rt=D.currentTarget;if(D=D.listener,V!==m&&h.isPropagationStopped())break t;m=D,h.currentTarget=rt;try{m(h)}catch(_t){mf(_t)}h.currentTarget=null,m=V}else for(T=0;T<u.length;T++){if(D=u[T],V=D.instance,rt=D.currentTarget,D=D.listener,V!==m&&h.isPropagationStopped())break t;m=D,h.currentTarget=rt;try{m(h)}catch(_t){mf(_t)}h.currentTarget=null,m=V}}}}function Ne(n,r){var s=r[ce];s===void 0&&(s=r[ce]=new Set);var u=n+"__bubble";s.has(u)||(rS(r,n,2,!1),s.add(u))}function jp(n,r,s){var u=0;r&&(u|=4),rS(s,n,u,r)}var wf="_reactListening"+Math.random().toString(36).slice(2);function Kp(n){if(!n[wf]){n[wf]=!0,Si.forEach(function(s){s!=="selectionchange"&&(q1.has(s)||jp(s,!1,n),jp(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[wf]||(r[wf]=!0,jp("selectionchange",!1,r))}}function rS(n,r,s,u){switch(CS(r)){case 2:var h=Sb;break;case 8:h=yb;break;default:h=cm}s=h.bind(null,r,s,n),h=void 0,!vd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,s,{capture:!0,passive:h}):n.addEventListener(r,s,!0):h!==void 0?n.addEventListener(r,s,{passive:h}):n.addEventListener(r,s,!1)}function Qp(n,r,s,u,h){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var D=u.stateNode.containerInfo;if(D===h)break;if(T===4)for(T=u.return;T!==null;){var V=T.tag;if((V===3||V===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;D!==null;){if(T=Fe(D),T===null)return;if(V=T.tag,V===5||V===6||V===26||V===27){u=m=T;continue t}D=D.parentNode}}u=u.return}f0(function(){var rt=m,_t=_d(s),Mt=[];t:{var at=F0.get(n);if(at!==void 0){var lt=Vc,me=n;switch(n){case"keypress":if(Hc(s)===0)break t;case"keydown":case"keyup":lt=GT;break;case"focusin":me="focus",lt=Md;break;case"focusout":me="blur",lt=Md;break;case"beforeblur":case"afterblur":lt=Md;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=p0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=wT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=XT;break;case P0:case z0:case B0:lt=LT;break;case I0:lt=YT;break;case"scroll":case"scrollend":lt=RT;break;case"wheel":lt=ZT;break;case"copy":case"cut":case"paste":lt=OT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=_0;break;case"toggle":case"beforetoggle":lt=KT}var fe=(r&4)!==0,sn=!fe&&(n==="scroll"||n==="scrollend"),J=fe?at!==null?at+"Capture":null:at;fe=[];for(var q=rt,nt;q!==null;){var St=q;if(nt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||nt===null||J===null||(St=Kl(q,J),St!=null&&fe.push(Lu(q,St,nt))),sn)break;q=q.return}0<fe.length&&(at=new lt(at,me,null,s,_t),Mt.push({event:at,listeners:fe}))}}if((r&7)===0){t:{if(at=n==="mouseover"||n==="pointerover",lt=n==="mouseout"||n==="pointerout",at&&s!==md&&(me=s.relatedTarget||s.fromElement)&&(Fe(me)||me[qt]))break t;if((lt||at)&&(at=_t.window===_t?_t:(at=_t.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(me=s.relatedTarget||s.toElement,lt=rt,me=me?Fe(me):null,me!==null&&(sn=l(me),fe=me.tag,me!==sn||fe!==5&&fe!==27&&fe!==6)&&(me=null)):(lt=null,me=rt),lt!==me)){if(fe=p0,St="onMouseLeave",J="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(fe=_0,St="onPointerLeave",J="onPointerEnter",q="pointer"),sn=lt==null?at:Gn(lt),nt=me==null?at:Gn(me),at=new fe(St,q+"leave",lt,s,_t),at.target=sn,at.relatedTarget=nt,St=null,Fe(_t)===rt&&(fe=new fe(J,q+"enter",me,s,_t),fe.target=nt,fe.relatedTarget=sn,St=fe),sn=St,lt&&me)e:{for(fe=lt,J=me,q=0,nt=fe;nt;nt=$o(nt))q++;for(nt=0,St=J;St;St=$o(St))nt++;for(;0<q-nt;)fe=$o(fe),q--;for(;0<nt-q;)J=$o(J),nt--;for(;q--;){if(fe===J||J!==null&&fe===J.alternate)break e;fe=$o(fe),J=$o(J)}fe=null}else fe=null;lt!==null&&aS(Mt,at,lt,fe,!1),me!==null&&sn!==null&&aS(Mt,sn,me,fe,!0)}}t:{if(at=rt?Gn(rt):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var jt=T0;else if(M0(at))if(b0)jt=s1;else{jt=r1;var Ce=i1}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?rt&&pd(rt.elementType)&&(jt=T0):jt=a1;if(jt&&(jt=jt(n,rt))){E0(Mt,jt,s,_t);break t}Ce&&Ce(n,at,rt),n==="focusout"&&rt&&at.type==="number"&&rt.memoizedProps.value!=null&&ci(at,"number",at.value)}switch(Ce=rt?Gn(rt):window,n){case"focusin":(M0(Ce)||Ce.contentEditable==="true")&&(wo=Ce,Cd=rt,ru=null);break;case"focusout":ru=Cd=wo=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,N0(Mt,s,_t);break;case"selectionchange":if(l1)break;case"keydown":case"keyup":N0(Mt,s,_t)}var oe;if(Td)t:{switch(n){case"compositionstart":var de="onCompositionStart";break t;case"compositionend":de="onCompositionEnd";break t;case"compositionupdate":de="onCompositionUpdate";break t}de=void 0}else Co?S0(n,s)&&(de="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(de="onCompositionStart");de&&(g0&&s.locale!=="ko"&&(Co||de!=="onCompositionStart"?de==="onCompositionEnd"&&Co&&(oe=h0()):(Ba=_t,xd="value"in Ba?Ba.value:Ba.textContent,Co=!0)),Ce=Df(rt,de),0<Ce.length&&(de=new m0(de,n,null,s,_t),Mt.push({event:de,listeners:Ce}),oe?de.data=oe:(oe=y0(s),oe!==null&&(de.data=oe)))),(oe=JT?$T(n,s):t1(n,s))&&(de=Df(rt,"onBeforeInput"),0<de.length&&(Ce=new m0("onBeforeInput","beforeinput",null,s,_t),Mt.push({event:Ce,listeners:de}),Ce.data=oe)),X1(Mt,n,rt,s,_t)}iS(Mt,r)})}function Lu(n,r,s){return{instance:n,listener:r,currentTarget:s}}function Df(n,r){for(var s=r+"Capture",u=[];n!==null;){var h=n,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Kl(n,s),h!=null&&u.unshift(Lu(n,h,m)),h=Kl(n,r),h!=null&&u.push(Lu(n,h,m))),n.tag===3)return u;n=n.return}return[]}function $o(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function aS(n,r,s,u,h){for(var m=r._reactName,T=[];s!==null&&s!==u;){var D=s,V=D.alternate,rt=D.stateNode;if(D=D.tag,V!==null&&V===u)break;D!==5&&D!==26&&D!==27||rt===null||(V=rt,h?(rt=Kl(s,m),rt!=null&&T.unshift(Lu(s,rt,V))):h||(rt=Kl(s,m),rt!=null&&T.push(Lu(s,rt,V)))),s=s.return}T.length!==0&&n.push({event:r,listeners:T})}var Z1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function sS(n){return(typeof n=="string"?n:""+n).replace(Z1,`
`).replace(j1,"")}function oS(n,r){return r=sS(r),sS(n)===r}function Uf(){}function an(n,r,s,u,h,m){switch(s){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||zr(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&zr(n,""+u);break;case"className":Pt(n,"class",u);break;case"tabIndex":Pt(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(n,s,u);break;case"style":u0(n,u,m);break;case"data":if(r!=="object"){Pt(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Ic(""+u),n.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(r!=="input"&&an(n,r,"name",h.name,h,null),an(n,r,"formEncType",h.formEncType,h,null),an(n,r,"formMethod",h.formMethod,h,null),an(n,r,"formTarget",h.formTarget,h,null)):(an(n,r,"encType",h.encType,h,null),an(n,r,"method",h.method,h,null),an(n,r,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Ic(""+u),n.setAttribute(s,u);break;case"onClick":u!=null&&(n.onclick=Uf);break;case"onScroll":u!=null&&Ne("scroll",n);break;case"onScrollEnd":u!=null&&Ne("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}s=Ic(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""+u):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":u===!0?n.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,u):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(s,u):n.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(s):n.setAttribute(s,u);break;case"popover":Ne("beforetoggle",n),Ne("toggle",n),bt(n,"popover",u);break;case"xlinkActuate":Gt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Gt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Gt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Gt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Gt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Gt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Gt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Gt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Gt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":bt(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=bT.get(s)||s,bt(n,s,u))}}function Jp(n,r,s,u,h,m){switch(s){case"style":u0(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"children":typeof u=="string"?zr(n,u):(typeof u=="number"||typeof u=="bigint")&&zr(n,""+u);break;case"onScroll":u!=null&&Ne("scroll",n);break;case"onScrollEnd":u!=null&&Ne("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Uf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bn.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),m=n[ee]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(r,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,u,h);break t}s in n?n[s]=u:u===!0?n.setAttribute(s,""):bt(n,s,u)}}}function oi(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",n),Ne("load",n);var u=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var T=s[m];if(T!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:an(n,r,m,T,s,null)}}h&&an(n,r,"srcSet",s.srcSet,s,null),u&&an(n,r,"src",s.src,s,null);return;case"input":Ne("invalid",n);var D=m=T=h=null,V=null,rt=null;for(u in s)if(s.hasOwnProperty(u)){var _t=s[u];if(_t!=null)switch(u){case"name":h=_t;break;case"type":T=_t;break;case"checked":V=_t;break;case"defaultChecked":rt=_t;break;case"value":m=_t;break;case"defaultValue":D=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(i(137,r));break;default:an(n,r,u,_t,s,null)}}cn(n,m,D,V,rt,T,h,!1),nn(n);return;case"select":Ne("invalid",n),u=T=m=null;for(h in s)if(s.hasOwnProperty(h)&&(D=s[h],D!=null))switch(h){case"value":m=D;break;case"defaultValue":T=D;break;case"multiple":u=D;default:an(n,r,h,D,s,null)}r=m,s=T,n.multiple=!!u,r!=null?Vn(n,!!u,r,!1):s!=null&&Vn(n,!!u,s,!0);return;case"textarea":Ne("invalid",n),m=h=u=null;for(T in s)if(s.hasOwnProperty(T)&&(D=s[T],D!=null))switch(T){case"value":u=D;break;case"defaultValue":h=D;break;case"children":m=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(i(91));break;default:an(n,r,T,D,s,null)}ri(n,u,h,m),nn(n);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(u=s[V],u!=null))switch(V){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:an(n,r,V,u,s,null)}return;case"dialog":Ne("beforetoggle",n),Ne("toggle",n),Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":Ne("load",n);break;case"video":case"audio":for(u=0;u<Uu.length;u++)Ne(Uu[u],n);break;case"image":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"embed":case"source":case"link":Ne("error",n),Ne("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in s)if(s.hasOwnProperty(rt)&&(u=s[rt],u!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:an(n,r,rt,u,s,null)}return;default:if(pd(r)){for(_t in s)s.hasOwnProperty(_t)&&(u=s[_t],u!==void 0&&Jp(n,r,_t,u,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(u=s[D],u!=null&&an(n,r,D,u,s,null))}function K1(n,r,s,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,T=null,D=null,V=null,rt=null,_t=null;for(lt in s){var Mt=s[lt];if(s.hasOwnProperty(lt)&&Mt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":V=Mt;default:u.hasOwnProperty(lt)||an(n,r,lt,null,u,Mt)}}for(var at in u){var lt=u[at];if(Mt=s[at],u.hasOwnProperty(at)&&(lt!=null||Mt!=null))switch(at){case"type":m=lt;break;case"name":h=lt;break;case"checked":rt=lt;break;case"defaultChecked":_t=lt;break;case"value":T=lt;break;case"defaultValue":D=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(i(137,r));break;default:lt!==Mt&&an(n,r,at,lt,u,Mt)}}$r(n,T,D,V,rt,_t,m,h);return;case"select":lt=T=D=at=null;for(m in s)if(V=s[m],s.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":lt=V;default:u.hasOwnProperty(m)||an(n,r,m,null,u,V)}for(h in u)if(m=u[h],V=s[h],u.hasOwnProperty(h)&&(m!=null||V!=null))switch(h){case"value":at=m;break;case"defaultValue":D=m;break;case"multiple":T=m;default:m!==V&&an(n,r,h,m,u,V)}r=D,s=T,u=lt,at!=null?Vn(n,!!s,at,!1):!!u!=!!s&&(r!=null?Vn(n,!!s,r,!0):Vn(n,!!s,s?[]:"",!1));return;case"textarea":lt=at=null;for(D in s)if(h=s[D],s.hasOwnProperty(D)&&h!=null&&!u.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:an(n,r,D,null,u,h)}for(T in u)if(h=u[T],m=s[T],u.hasOwnProperty(T)&&(h!=null||m!=null))switch(T){case"value":at=h;break;case"defaultValue":lt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==m&&an(n,r,T,h,u,m)}Kn(n,at,lt);return;case"option":for(var me in s)if(at=s[me],s.hasOwnProperty(me)&&at!=null&&!u.hasOwnProperty(me))switch(me){case"selected":n.selected=!1;break;default:an(n,r,me,null,u,at)}for(V in u)if(at=u[V],lt=s[V],u.hasOwnProperty(V)&&at!==lt&&(at!=null||lt!=null))switch(V){case"selected":n.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:an(n,r,V,at,u,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in s)at=s[fe],s.hasOwnProperty(fe)&&at!=null&&!u.hasOwnProperty(fe)&&an(n,r,fe,null,u,at);for(rt in u)if(at=u[rt],lt=s[rt],u.hasOwnProperty(rt)&&at!==lt&&(at!=null||lt!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(i(137,r));break;default:an(n,r,rt,at,u,lt)}return;default:if(pd(r)){for(var sn in s)at=s[sn],s.hasOwnProperty(sn)&&at!==void 0&&!u.hasOwnProperty(sn)&&Jp(n,r,sn,void 0,u,at);for(_t in u)at=u[_t],lt=s[_t],!u.hasOwnProperty(_t)||at===lt||at===void 0&&lt===void 0||Jp(n,r,_t,at,u,lt);return}}for(var J in s)at=s[J],s.hasOwnProperty(J)&&at!=null&&!u.hasOwnProperty(J)&&an(n,r,J,null,u,at);for(Mt in u)at=u[Mt],lt=s[Mt],!u.hasOwnProperty(Mt)||at===lt||at==null&&lt==null||an(n,r,Mt,at,u,lt)}var $p=null,tm=null;function Lf(n){return n.nodeType===9?n:n.ownerDocument}function lS(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uS(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function em(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var nm=null;function Q1(){var n=window.event;return n&&n.type==="popstate"?n===nm?!1:(nm=n,!0):(nm=null,!1)}var cS=typeof setTimeout=="function"?setTimeout:void 0,J1=typeof clearTimeout=="function"?clearTimeout:void 0,fS=typeof Promise=="function"?Promise:void 0,$1=typeof queueMicrotask=="function"?queueMicrotask:typeof fS<"u"?function(n){return fS.resolve(null).then(n).catch(tb)}:cS;function tb(n){setTimeout(function(){throw n})}function $a(n){return n==="head"}function hS(n,r){var s=r,u=0,h=0;do{var m=s.nextSibling;if(n.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<u&&8>u){s=u;var T=n.ownerDocument;if(s&1&&Nu(T.documentElement),s&2&&Nu(T.body),s&4)for(s=T.head,Nu(s),T=s.firstChild;T;){var D=T.nextSibling,V=T.nodeName;T[gn]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&T.rel.toLowerCase()==="stylesheet"||s.removeChild(T),T=D}}if(h===0){n.removeChild(m),Gu(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:u=s.charCodeAt(0)-48;else u=0;s=m}while(s);Gu(r)}function im(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":im(s),qe(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function eb(n,r,s,u){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[gn])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Cr(n.nextSibling),n===null)break}return null}function nb(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Cr(n.nextSibling),n===null))return null;return n}function rm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function ib(n,r){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")r();else{var u=function(){r(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Cr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var am=null;function dS(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}function pS(n,r,s){switch(r=Lf(s),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function Nu(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);qe(n)}var mr=new Map,mS=new Set;function Nf(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var pa=X.d;X.d={f:rb,r:ab,D:sb,C:ob,L:lb,m:ub,X:fb,S:cb,M:hb};function rb(){var n=pa.f(),r=Tf();return n||r}function ab(n){var r=Ue(n);r!==null&&r.tag===5&&r.type==="form"?Pv(r):pa.r(n)}var tl=typeof document>"u"?null:document;function _S(n,r,s){var u=tl;if(u&&typeof r=="string"&&r){var h=pn(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),mS.has(h)||(mS.add(h),n={rel:n,crossOrigin:s,href:r},u.querySelector(h)===null&&(r=u.createElement("link"),oi(r,"link",n),He(r),u.head.appendChild(r)))}}function sb(n){pa.D(n),_S("dns-prefetch",n,null)}function ob(n,r){pa.C(n,r),_S("preconnect",n,r)}function lb(n,r,s){pa.L(n,r,s);var u=tl;if(u&&n&&r){var h='link[rel="preload"][as="'+pn(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+pn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+pn(s.imageSizes)+'"]')):h+='[href="'+pn(n)+'"]';var m=h;switch(r){case"style":m=el(n);break;case"script":m=nl(n)}mr.has(m)||(n=_({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),mr.set(m,n),u.querySelector(h)!==null||r==="style"&&u.querySelector(Ou(m))||r==="script"&&u.querySelector(Pu(m))||(r=u.createElement("link"),oi(r,"link",n),He(r),u.head.appendChild(r)))}}function ub(n,r){pa.m(n,r);var s=tl;if(s&&n){var u=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+pn(u)+'"][href="'+pn(n)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=nl(n)}if(!mr.has(m)&&(n=_({rel:"modulepreload",href:n},r),mr.set(m,n),s.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Pu(m)))return}u=s.createElement("link"),oi(u,"link",n),He(u),s.head.appendChild(u)}}}function cb(n,r,s){pa.S(n,r,s);var u=tl;if(u&&n){var h=ke(u).hoistableStyles,m=el(n);r=r||"default";var T=h.get(m);if(!T){var D={loading:0,preload:null};if(T=u.querySelector(Ou(m)))D.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":r},s),(s=mr.get(m))&&sm(n,s);var V=T=u.createElement("link");He(V),oi(V,"link",n),V._p=new Promise(function(rt,_t){V.onload=rt,V.onerror=_t}),V.addEventListener("load",function(){D.loading|=1}),V.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Of(T,r,u)}T={type:"stylesheet",instance:T,count:1,state:D},h.set(m,T)}}}function fb(n,r){pa.X(n,r);var s=tl;if(s&&n){var u=ke(s).hoistableScripts,h=nl(n),m=u.get(h);m||(m=s.querySelector(Pu(h)),m||(n=_({src:n,async:!0},r),(r=mr.get(h))&&om(n,r),m=s.createElement("script"),He(m),oi(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function hb(n,r){pa.M(n,r);var s=tl;if(s&&n){var u=ke(s).hoistableScripts,h=nl(n),m=u.get(h);m||(m=s.querySelector(Pu(h)),m||(n=_({src:n,async:!0,type:"module"},r),(r=mr.get(h))&&om(n,r),m=s.createElement("script"),He(m),oi(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function gS(n,r,s,u){var h=(h=xt.current)?Nf(h):null;if(!h)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=el(s.href),s=ke(h).hoistableStyles,u=s.get(r),u||(u={type:"style",instance:null,count:0,state:null},s.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=el(s.href);var m=ke(h).hoistableStyles,T=m.get(n);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,T),(m=h.querySelector(Ou(n)))&&!m._p&&(T.instance=m,T.state.loading=5),mr.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},mr.set(n,s),m||db(h,n,s,T.state))),r&&u===null)throw Error(i(528,""));return T}if(r&&u!==null)throw Error(i(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=nl(s),s=ke(h).hoistableScripts,u=s.get(r),u||(u={type:"script",instance:null,count:0,state:null},s.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function el(n){return'href="'+pn(n)+'"'}function Ou(n){return'link[rel="stylesheet"]['+n+"]"}function vS(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function db(n,r,s,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),oi(r,"link",s),He(r),n.head.appendChild(r))}function nl(n){return'[src="'+pn(n)+'"]'}function Pu(n){return"script[async]"+n}function xS(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+pn(s.href)+'"]');if(u)return r.instance=u,He(u),u;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),He(u),oi(u,"style",h),Of(u,s.precedence,n),r.instance=u;case"stylesheet":h=el(s.href);var m=n.querySelector(Ou(h));if(m)return r.state.loading|=4,r.instance=m,He(m),m;u=vS(s),(h=mr.get(h))&&sm(u,h),m=(n.ownerDocument||n).createElement("link"),He(m);var T=m;return T._p=new Promise(function(D,V){T.onload=D,T.onerror=V}),oi(m,"link",u),r.state.loading|=4,Of(m,s.precedence,n),r.instance=m;case"script":return m=nl(s.src),(h=n.querySelector(Pu(m)))?(r.instance=h,He(h),h):(u=s,(h=mr.get(m))&&(u=_({},s),om(u,h)),n=n.ownerDocument||n,h=n.createElement("script"),He(h),oi(h,"link",u),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Of(u,s.precedence,n));return r.instance}function Of(n,r,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,T=0;T<u.length;T++){var D=u[T];if(D.dataset.precedence===r)m=D;else if(m!==h)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function sm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function om(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Pf=null;function SS(n,r,s){if(Pf===null){var u=new Map,h=Pf=new Map;h.set(s,u)}else h=Pf,u=h.get(s),u||(u=new Map,h.set(s,u));if(u.has(n))return u;for(u.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var m=s[h];if(!(m[gn]||m[wt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(r)||"";T=n+T;var D=u.get(T);D?D.push(m):u.set(T,[m])}}return u}function yS(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function pb(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function MS(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var zu=null;function mb(){}function _b(n,r,s){if(zu===null)throw Error(i(475));var u=zu;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=el(s.href),m=n.querySelector(Ou(h));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=zf.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=m,He(m);return}m=n.ownerDocument||n,s=vS(s),(h=mr.get(h))&&sm(s,h),m=m.createElement("link"),He(m);var T=m;T._p=new Promise(function(D,V){T.onload=D,T.onerror=V}),oi(m,"link",s),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=zf.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function gb(){if(zu===null)throw Error(i(475));var n=zu;return n.stylesheets&&n.count===0&&lm(n,n.stylesheets),0<n.count?function(r){var s=setTimeout(function(){if(n.stylesheets&&lm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(s)}}:null}function zf(){if(this.count--,this.count===0){if(this.stylesheets)lm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Bf=null;function lm(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Bf=new Map,r.forEach(vb,n),Bf=null,zf.call(n))}function vb(n,r){if(!(r.state.loading&4)){var s=Bf.get(n);if(s)var u=s.get(null);else{s=new Map,Bf.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var T=h[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),u=T)}u&&s.set(null,u)}h=r.instance,T=h.getAttribute("data-precedence"),m=s.get(T)||u,m===u&&s.set(null,h),s.set(T,h),this.count++,u=zf.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var Bu={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function xb(n,r,s,u,h,m,T,D){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function ES(n,r,s,u,h,m,T,D,V,rt,_t,Mt){return n=new xb(n,r,s,T,D,V,rt,Mt),r=1,m===!0&&(r|=24),m=Wi(3,null,null,r),n.current=m,m.stateNode=n,r=kd(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:s,cache:r},qd(m),n}function TS(n){return n?(n=No,n):No}function bS(n,r,s,u,h,m){h=TS(h),u.context===null?u.context=h:u.pendingContext=h,u=Ha(r),u.payload={element:s},m=m===void 0?null:m,m!==null&&(u.callback=m),s=Ga(n,u,r),s!==null&&(Ki(s,n,r),du(s,n,r))}function AS(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function um(n,r){AS(n,r),(n=n.alternate)&&AS(n,r)}function RS(n){if(n.tag===13){var r=Lo(n,67108864);r!==null&&Ki(r,n,67108864),um(n,67108864)}}var If=!0;function Sb(n,r,s,u){var h=B.T;B.T=null;var m=X.p;try{X.p=2,cm(n,r,s,u)}finally{X.p=m,B.T=h}}function yb(n,r,s,u){var h=B.T;B.T=null;var m=X.p;try{X.p=8,cm(n,r,s,u)}finally{X.p=m,B.T=h}}function cm(n,r,s,u){if(If){var h=fm(u);if(h===null)Qp(n,r,u,Ff,s),wS(n,u);else if(Eb(h,n,r,s,u))u.stopPropagation();else if(wS(n,u),r&4&&-1<Mb.indexOf(n)){for(;h!==null;){var m=Ue(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Qt(m.pendingLanes);if(T!==0){var D=m;for(D.pendingLanes|=2,D.entangledLanes|=2;T;){var V=1<<31-Lt(T);D.entanglements[1]|=V,T&=~V}Gr(m),($e&6)===0&&(Mf=et()+500,Du(0))}}break;case 13:D=Lo(m,2),D!==null&&Ki(D,m,2),Tf(),um(m,2)}if(m=fm(u),m===null&&Qp(n,r,u,Ff,s),m===h)break;h=m}h!==null&&u.stopPropagation()}else Qp(n,r,u,null,s)}}function fm(n){return n=_d(n),hm(n)}var Ff=null;function hm(n){if(Ff=null,n=Fe(n),n!==null){var r=l(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=c(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Ff=n,null}function CS(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case ge:return 2;case Kt:return 8;case Wt:case Ye:return 32;case I:return 268435456;default:return 32}default:return 32}}var dm=!1,ts=null,es=null,ns=null,Iu=new Map,Fu=new Map,is=[],Mb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wS(n,r){switch(n){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":Iu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fu.delete(r.pointerId)}}function Hu(n,r,s,u,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},r!==null&&(r=Ue(r),r!==null&&RS(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function Eb(n,r,s,u,h){switch(r){case"focusin":return ts=Hu(ts,n,r,s,u,h),!0;case"dragenter":return es=Hu(es,n,r,s,u,h),!0;case"mouseover":return ns=Hu(ns,n,r,s,u,h),!0;case"pointerover":var m=h.pointerId;return Iu.set(m,Hu(Iu.get(m)||null,n,r,s,u,h)),!0;case"gotpointercapture":return m=h.pointerId,Fu.set(m,Hu(Fu.get(m)||null,n,r,s,u,h)),!0}return!1}function DS(n){var r=Fe(n.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=c(s),r!==null){n.blockedOn=r,Jt(n.priority,function(){if(s.tag===13){var u=ji();u=se(u);var h=Lo(s,u);h!==null&&Ki(h,s,u),um(s,u)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Hf(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=fm(n.nativeEvent);if(s===null){s=n.nativeEvent;var u=new s.constructor(s.type,s);md=u,s.target.dispatchEvent(u),md=null}else return r=Ue(s),r!==null&&RS(r),n.blockedOn=s,!1;r.shift()}return!0}function US(n,r,s){Hf(n)&&s.delete(r)}function Tb(){dm=!1,ts!==null&&Hf(ts)&&(ts=null),es!==null&&Hf(es)&&(es=null),ns!==null&&Hf(ns)&&(ns=null),Iu.forEach(US),Fu.forEach(US)}function Gf(n,r){n.blockedOn===r&&(n.blockedOn=null,dm||(dm=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Tb)))}var Vf=null;function LS(n){Vf!==n&&(Vf=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vf===n&&(Vf=null);for(var r=0;r<n.length;r+=3){var s=n[r],u=n[r+1],h=n[r+2];if(typeof u!="function"){if(hm(u||s)===null)continue;break}var m=Ue(s);m!==null&&(n.splice(r,3),r-=3,hp(m,{pending:!0,data:h,method:s.method,action:u},u,h))}}))}function Gu(n){function r(V){return Gf(V,n)}ts!==null&&Gf(ts,n),es!==null&&Gf(es,n),ns!==null&&Gf(ns,n),Iu.forEach(r),Fu.forEach(r);for(var s=0;s<is.length;s++){var u=is[s];u.blockedOn===n&&(u.blockedOn=null)}for(;0<is.length&&(s=is[0],s.blockedOn===null);)DS(s),s.blockedOn===null&&is.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var h=s[u],m=s[u+1],T=h[ee]||null;if(typeof m=="function")T||LS(s);else if(T){var D=null;if(m&&m.hasAttribute("formAction")){if(h=m,T=m[ee]||null)D=T.formAction;else if(hm(h)!==null)continue}else D=T.action;typeof D=="function"?s[u+1]=D:(s.splice(u,3),u-=3),LS(s)}}}function pm(n){this._internalRoot=n}kf.prototype.render=pm.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var s=r.current,u=ji();bS(s,u,n,r,null,null)},kf.prototype.unmount=pm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;bS(n.current,2,null,n,null,null),Tf(),r[qt]=null}};function kf(n){this._internalRoot=n}kf.prototype.unstable_scheduleHydration=function(n){if(n){var r=It();n={blockedOn:null,target:n,priority:r};for(var s=0;s<is.length&&r!==0&&r<is[s].priority;s++);is.splice(s,0,n),s===0&&DS(n)}};var NS=t.version;if(NS!=="19.1.0")throw Error(i(527,NS,"19.1.0"));X.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=d(r),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var bb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xf.isDisabled&&Xf.supportsFiber)try{pt=Xf.inject(bb),ht=Xf}catch{}}return ku.createRoot=function(n,r){if(!a(n))throw Error(i(299));var s=!1,u="",h=jv,m=Kv,T=Qv,D=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(D=r.unstable_transitionCallbacks)),r=ES(n,1,!1,null,null,s,u,h,m,T,D,null),n[qt]=r.current,Kp(n),new pm(r)},ku.hydrateRoot=function(n,r,s){if(!a(n))throw Error(i(299));var u=!1,h="",m=jv,T=Kv,D=Qv,V=null,rt=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(V=s.unstable_transitionCallbacks),s.formState!==void 0&&(rt=s.formState)),r=ES(n,1,!0,r,s??null,u,h,m,T,D,V,rt),r.context=TS(null),s=r.current,u=ji(),u=se(u),h=Ha(u),h.callback=null,Ga(s,h,u),s=u,r.current.lanes=s,Ot(r,s),Gr(r),n[qt]=r.current,Kp(n),new kf(r)},ku.version="19.1.0",ku}var kS;function Pb(){if(kS)return gm.exports;kS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),gm.exports=Ob(),gm.exports}var zb=Pb();function ya(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function TM(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Pl={duration:.5,overwrite:!1,delay:0},Rg,ui,Sn,Mr=1e8,dn=1/Mr,d_=Math.PI*2,Bb=d_/4,Ib=0,bM=Math.sqrt,Fb=Math.cos,Hb=Math.sin,ii=function(t){return typeof t=="string"},Cn=function(t){return typeof t=="function"},Ua=function(t){return typeof t=="number"},Cg=function(t){return typeof t>"u"},Jr=function(t){return typeof t=="object"},zi=function(t){return t!==!1},wg=function(){return typeof window<"u"},Wf=function(t){return Cn(t)||ii(t)},AM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xi=Array.isArray,p_=/(?:-?\.?\d|\.)+/gi,RM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ml=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ym=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,CM=/[+-]=-?[.\d]+/,wM=/[^,'"\[\]\s]+/gi,Gb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,En,Vr,m_,Dg,or={},Xh={},DM,UM=function(t){return(Xh=zl(t,or))&&ki},Ug=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},vc=function(t,e){return!e&&console.warn(t)},LM=function(t,e){return t&&(or[t]=e)&&Xh&&(Xh[t]=e)||or},xc=function(){return 0},Vb={suppressEvents:!0,isStart:!0,kill:!1},wh={suppressEvents:!0,kill:!1},kb={suppressEvents:!0},Lg={},vs=[],__={},NM,er={},Mm={},XS=30,Dh=[],Ng="",Og=function(t){var e=t[0],i,a;if(Jr(e)||Cn(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(a=Dh.length;a--&&!Dh[a].targetTest(e););i=Dh[a]}for(a=t.length;a--;)t[a]&&(t[a]._gsap||(t[a]._gsap=new iE(t[a],i)))||t.splice(a,1);return t},fo=function(t){return t._gsap||Og(Er(t))[0]._gsap},OM=function(t,e,i){return(i=t[e])&&Cn(i)?t[e]():Cg(i)&&t.getAttribute&&t.getAttribute(e)||i},Bi=function(t,e){return(t=t.split(",")).forEach(e)||t},Un=function(t){return Math.round(t*1e5)/1e5||0},Hn=function(t){return Math.round(t*1e7)/1e7||0},Al=function(t,e){var i=e.charAt(0),a=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+a:i==="-"?t-a:i==="*"?t*a:t/a},Xb=function(t,e){for(var i=e.length,a=0;t.indexOf(e[a])<0&&++a<i;);return a<i},Wh=function(){var t=vs.length,e=vs.slice(0),i,a;for(__={},vs.length=0,i=0;i<t;i++)a=e[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},Pg=function(t){return!!(t._initted||t._startAt||t.add)},PM=function(t,e,i,a){vs.length&&!ui&&Wh(),t.render(e,i,!!(ui&&e<0&&Pg(t))),vs.length&&!ui&&Wh()},zM=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(wM).length<2?e:ii(t)?t.trim():t},BM=function(t){return t},lr=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Wb=function(t){return function(e,i){for(var a in i)a in e||a==="duration"&&t||a==="ease"||(e[a]=i[a])}},zl=function(t,e){for(var i in e)t[i]=e[i];return t},WS=function o(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Jr(e[i])?o(t[i]||(t[i]={}),e[i]):e[i]);return t},Yh=function(t,e){var i={},a;for(a in t)a in e||(i[a]=t[a]);return i},sc=function(t){var e=t.parent||En,i=t.keyframes?Wb(xi(t.keyframes)):lr;if(zi(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Yb=function(t,e){for(var i=t.length,a=i===e.length;a&&i--&&t[i]===e[i];);return i<0},IM=function(t,e,i,a,l){var c=t[a],f;if(l)for(f=e[l];c&&c[l]>f;)c=c._prev;return c?(e._next=c._next,c._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[a]=e,e._prev=c,e.parent=e._dp=t,e},ad=function(t,e,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var l=e._prev,c=e._next;l?l._next=c:t[i]===e&&(t[i]=c),c?c._prev=l:t[a]===e&&(t[a]=l),e._next=e._prev=e.parent=null},Ts=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ho=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},qb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},g_=function(t,e,i,a){return t._startAt&&(ui?t._startAt.revert(wh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,a))},Zb=function o(t){return!t||t._ts&&o(t.parent)},YS=function(t){return t._repeat?Bl(t._tTime,t=t.duration()+t._rDelay)*t:0},Bl=function(t,e){var i=Math.floor(t=Hn(t/e));return t&&i===t?i-1:i},qh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},sd=function(t){return t._end=Hn(t._start+(t._tDur/Math.abs(t._ts||t._rts||dn)||0))},od=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Hn(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),sd(t),i._dirty||ho(i,t)),t},FM=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=qh(t.rawTime(),e),(!e._dur||Uc(0,e.totalDuration(),i)-e._tTime>dn)&&e.render(i,!0)),ho(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-dn}},Wr=function(t,e,i,a){return e.parent&&Ts(e),e._start=Hn((Ua(i)?i:i||t!==En?gr(t,i,e):t._time)+e._delay),e._end=Hn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),IM(t,e,"_first","_last",t._sort?"_start":0),v_(e)||(t._recent=e),a||FM(t,e),t._ts<0&&od(t,t._tTime),t},HM=function(t,e){return(or.ScrollTrigger||Ug("scrollTrigger",e))&&or.ScrollTrigger.create(e,t)},GM=function(t,e,i,a,l){if(Bg(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!ui&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&NM!==ir.frame)return vs.push(t),t._lazy=[l,a],1},jb=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},v_=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Kb=function(t,e,i,a){var l=t.ratio,c=e<0||!e&&(!t._start&&jb(t)&&!(!t._initted&&v_(t))||(t._ts<0||t._dp._ts<0)&&!v_(t))?0:1,f=t._rDelay,d=0,p,_,g;if(f&&t._repeat&&(d=Uc(0,t._tDur,e),_=Bl(d,f),t._yoyo&&_&1&&(c=1-c),_!==Bl(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||ui||a||t._zTime===dn||!e&&t._zTime){if(!t._initted&&GM(t,e,a,i,d))return;for(g=t._zTime,t._zTime=e||(i?dn:0),i||(i=e&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=d,p=t._pt;p;)p.r(c,p.d),p=p._next;e<0&&g_(t,e,i,!0),t._onUpdate&&!i&&ar(t,"onUpdate"),d&&t._repeat&&!i&&t.parent&&ar(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===c&&(c&&Ts(t,1),!i&&!ui&&(ar(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Qb=function(t,e,i){var a;if(i>e)for(a=t._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>e)return a;a=a._next}else for(a=t._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<e)return a;a=a._prev}},Il=function(t,e,i,a){var l=t._repeat,c=Hn(e)||0,f=t._tTime/t._tDur;return f&&!a&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:Hn(c*(l+1)+t._rDelay*l):c,f>0&&!a&&od(t,t._tTime=t._tDur*f),t.parent&&sd(t),i||ho(t.parent,t),t},qS=function(t){return t instanceof Ci?ho(t):Il(t,t._dur)},Jb={_start:0,endTime:xc,totalDuration:xc},gr=function o(t,e,i){var a=t.labels,l=t._recent||Jb,c=t.duration()>=Mr?l.endTime(!1):t._dur,f,d,p;return ii(e)&&(isNaN(e)||e in a)?(d=e.charAt(0),p=e.substr(-1)==="%",f=e.indexOf("="),d==="<"||d===">"?(f>=0&&(e=e.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(p?(f<0?l:i).totalDuration()/100:1)):f<0?(e in a||(a[e]=c),a[e]):(d=parseFloat(e.charAt(f-1)+e.substr(f+1)),p&&i&&(d=d/100*(xi(i)?i[0]:i).totalDuration()),f>1?o(t,e.substr(0,f-1),i)+d:c+d)):e==null?c:+e},oc=function(t,e,i){var a=Ua(e[1]),l=(a?2:1)+(t<2?0:1),c=e[l],f,d;if(a&&(c.duration=e[1]),c.parent=i,t){for(f=c,d=i;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=zi(d.vars.inherit)&&d.parent;c.immediateRender=zi(f.immediateRender),t<2?c.runBackwards=1:c.startAt=e[l-1]}return new Fn(e[0],c,e[l+1])},ws=function(t,e){return t||t===0?e(t):e},Uc=function(t,e,i){return i<t?t:i>e?e:i},gi=function(t,e){return!ii(t)||!(e=Gb.exec(t))?"":e[1]},$b=function(t,e,i){return ws(i,function(a){return Uc(t,e,a)})},x_=[].slice,VM=function(t,e){return t&&Jr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Jr(t[0]))&&!t.nodeType&&t!==Vr},tA=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(a){var l;return ii(a)&&!e||VM(a,1)?(l=i).push.apply(l,Er(a)):i.push(a)})||i},Er=function(t,e,i){return Sn&&!e&&Sn.selector?Sn.selector(t):ii(t)&&!i&&(m_||!Fl())?x_.call((e||Dg).querySelectorAll(t),0):xi(t)?tA(t,i):VM(t)?x_.call(t,0):t?[t]:[]},S_=function(t){return t=Er(t)[0]||vc("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Er(e,i.querySelectorAll?i:i===t?vc("Invalid scope")||Dg.createElement("div"):t)}},kM=function(t){return t.sort(function(){return .5-Math.random()})},XM=function(t){if(Cn(t))return t;var e=Jr(t)?t:{each:t},i=po(e.ease),a=e.from||0,l=parseFloat(e.base)||0,c={},f=a>0&&a<1,d=isNaN(a)||f,p=e.axis,_=a,g=a;return ii(a)?_=g={center:.5,edges:.5,end:1}[a]||0:!f&&d&&(_=a[0],g=a[1]),function(v,x,E){var M=(E||e).length,y=c[M],S,N,L,A,P,z,O,F,C;if(!y){if(C=e.grid==="auto"?0:(e.grid||[1,Mr])[1],!C){for(O=-Mr;O<(O=E[C++].getBoundingClientRect().left)&&C<M;);C<M&&C--}for(y=c[M]=[],S=d?Math.min(C,M)*_-.5:a%C,N=C===Mr?0:d?M*g/C-.5:a/C|0,O=0,F=Mr,z=0;z<M;z++)L=z%C-S,A=N-(z/C|0),y[z]=P=p?Math.abs(p==="y"?A:L):bM(L*L+A*A),P>O&&(O=P),P<F&&(F=P);a==="random"&&kM(y),y.max=O-F,y.min=F,y.v=M=(parseFloat(e.amount)||parseFloat(e.each)*(C>M?M-1:p?p==="y"?M/C:C:Math.max(C,M/C))||0)*(a==="edges"?-1:1),y.b=M<0?l-M:l,y.u=gi(e.amount||e.each)||0,i=i&&M<0?tE(i):i}return M=(y[v]-y.min)/y.max||0,Hn(y.b+(i?i(M):M)*y.v)+y.u}},y_=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var a=Hn(Math.round(parseFloat(i)/t)*t*e);return(a-a%1)/e+(Ua(i)?0:gi(i))}},WM=function(t,e){var i=xi(t),a,l;return!i&&Jr(t)&&(a=i=t.radius||Mr,t.values?(t=Er(t.values),(l=!Ua(t[0]))&&(a*=a)):t=y_(t.increment)),ws(e,i?Cn(t)?function(c){return l=t(c),Math.abs(l-c)<=a?l:c}:function(c){for(var f=parseFloat(l?c.x:c),d=parseFloat(l?c.y:0),p=Mr,_=0,g=t.length,v,x;g--;)l?(v=t[g].x-f,x=t[g].y-d,v=v*v+x*x):v=Math.abs(t[g]-f),v<p&&(p=v,_=g);return _=!a||p<=a?t[_]:c,l||_===c||Ua(c)?_:_+gi(c)}:y_(t))},YM=function(t,e,i,a){return ws(xi(t)?!e:i===!0?!!(i=0):!a,function(){return xi(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*a)/a})},eA=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(a){return e.reduce(function(l,c){return c(l)},a)}},nA=function(t,e){return function(i){return t(parseFloat(i))+(e||gi(i))}},iA=function(t,e,i){return ZM(t,e,0,1,i)},qM=function(t,e,i){return ws(i,function(a){return t[~~e(a)]})},rA=function o(t,e,i){var a=e-t;return xi(t)?qM(t,o(0,t.length),e):ws(i,function(l){return(a+(l-t)%a)%a+t})},aA=function o(t,e,i){var a=e-t,l=a*2;return xi(t)?qM(t,o(0,t.length-1),e):ws(i,function(c){return c=(l+(c-t)%l)%l||0,t+(c>a?l-c:c)})},Sc=function(t){for(var e=0,i="",a,l,c,f;~(a=t.indexOf("random(",e));)c=t.indexOf(")",a),f=t.charAt(a+7)==="[",l=t.substr(a+7,c-a-7).match(f?wM:p_),i+=t.substr(e,a-e)+YM(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),e=c+1;return i+t.substr(e,t.length-e)},ZM=function(t,e,i,a,l){var c=e-t,f=a-i;return ws(l,function(d){return i+((d-t)/c*f||0)})},sA=function o(t,e,i,a){var l=isNaN(t+e)?0:function(x){return(1-x)*t+x*e};if(!l){var c=ii(t),f={},d,p,_,g,v;if(i===!0&&(a=1)&&(i=null),c)t={p:t},e={p:e};else if(xi(t)&&!xi(e)){for(_=[],g=t.length,v=g-2,p=1;p<g;p++)_.push(o(t[p-1],t[p]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return _[M](E-M)},i=e}else a||(t=zl(xi(t)?[]:{},t));if(!_){for(d in e)zg.call(f,t,d,"get",e[d]);l=function(E){return Hg(E,f)||(c?t.p:t)}}}return ws(i,l)},ZS=function(t,e,i){var a=t.labels,l=Mr,c,f,d;for(c in a)f=a[c]-e,f<0==!!i&&f&&l>(f=Math.abs(f))&&(d=c,l=f);return d},ar=function(t,e,i){var a=t.vars,l=a[e],c=Sn,f=t._ctx,d,p,_;if(l)return d=a[e+"Params"],p=a.callbackScope||t,i&&vs.length&&Wh(),f&&(Sn=f),_=d?l.apply(p,d):l.call(p),Sn=c,_},Ju=function(t){return Ts(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ui),t.progress()<1&&ar(t,"onInterrupt"),t},El,jM=[],KM=function(t){if(t)if(t=!t.name&&t.default||t,wg()||t.headless){var e=t.name,i=Cn(t),a=e&&!i&&t.init?function(){this._props=[]}:t,l={init:xc,render:Hg,add:zg,kill:MA,modifier:yA,rawVars:0},c={targetTest:0,get:0,getSetter:Fg,aliases:{},register:0};if(Fl(),t!==a){if(er[e])return;lr(a,lr(Yh(t,l),c)),zl(a.prototype,zl(l,Yh(t,c))),er[a.prop=e]=a,t.targetTest&&(Dh.push(a),Lg[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}LM(e,a),t.register&&t.register(ki,a,Ii)}else jM.push(t)},hn=255,$u={aqua:[0,hn,hn],lime:[0,hn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,hn],navy:[0,0,128],white:[hn,hn,hn],olive:[128,128,0],yellow:[hn,hn,0],orange:[hn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[hn,0,0],pink:[hn,192,203],cyan:[0,hn,hn],transparent:[hn,hn,hn,0]},Em=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*hn+.5|0},QM=function(t,e,i){var a=t?Ua(t)?[t>>16,t>>8&hn,t&hn]:0:$u.black,l,c,f,d,p,_,g,v,x,E;if(!a){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$u[t])a=$u[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return a=parseInt(t.substr(1,6),16),[a>>16,a>>8&hn,a&hn,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),a=[t>>16,t>>8&hn,t&hn]}else if(t.substr(0,3)==="hsl"){if(a=E=t.match(p_),!e)d=+a[0]%360/360,p=+a[1]/100,_=+a[2]/100,c=_<=.5?_*(p+1):_+p-_*p,l=_*2-c,a.length>3&&(a[3]*=1),a[0]=Em(d+1/3,l,c),a[1]=Em(d,l,c),a[2]=Em(d-1/3,l,c);else if(~t.indexOf("="))return a=t.match(RM),i&&a.length<4&&(a[3]=1),a}else a=t.match(p_)||$u.transparent;a=a.map(Number)}return e&&!E&&(l=a[0]/hn,c=a[1]/hn,f=a[2]/hn,g=Math.max(l,c,f),v=Math.min(l,c,f),_=(g+v)/2,g===v?d=p=0:(x=g-v,p=_>.5?x/(2-g-v):x/(g+v),d=g===l?(c-f)/x+(c<f?6:0):g===c?(f-l)/x+2:(l-c)/x+4,d*=60),a[0]=~~(d+.5),a[1]=~~(p*100+.5),a[2]=~~(_*100+.5)),i&&a.length<4&&(a[3]=1),a},JM=function(t){var e=[],i=[],a=-1;return t.split(xs).forEach(function(l){var c=l.match(Ml)||[];e.push.apply(e,c),i.push(a+=c.length+1)}),e.c=i,e},jS=function(t,e,i){var a="",l=(t+a).match(xs),c=e?"hsla(":"rgba(",f=0,d,p,_,g;if(!l)return t;if(l=l.map(function(v){return(v=QM(v,e,1))&&c+(e?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(_=JM(t),d=i.c,d.join(a)!==_.c.join(a)))for(p=t.replace(xs,"1").split(Ml),g=p.length-1;f<g;f++)a+=p[f]+(~d.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:i).shift());if(!p)for(p=t.split(xs),g=p.length-1;f<g;f++)a+=p[f]+l[f];return a+p[g]},xs=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $u)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),oA=/hsl[a]?\(/,$M=function(t){var e=t.join(" "),i;if(xs.lastIndex=0,xs.test(e))return i=oA.test(e),t[1]=jS(t[1],i),t[0]=jS(t[0],i,JM(t[1])),!0},yc,ir=function(){var o=Date.now,t=500,e=33,i=o(),a=i,l=1e3/240,c=l,f=[],d,p,_,g,v,x,E=function M(y){var S=o()-a,N=y===!0,L,A,P,z;if((S>t||S<0)&&(i+=S-e),a+=S,P=a-i,L=P-c,(L>0||N)&&(z=++g.frame,v=P-g.time*1e3,g.time=P=P/1e3,c+=L+(L>=l?4:l-L),A=1),N||(d=p(M)),A)for(x=0;x<f.length;x++)f[x](P,v,z,y)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){DM&&(!m_&&wg()&&(Vr=m_=window,Dg=Vr.document||{},or.gsap=ki,(Vr.gsapVersions||(Vr.gsapVersions=[])).push(ki.version),UM(Xh||Vr.GreenSockGlobals||!Vr.gsap&&Vr||{}),jM.forEach(KM)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),p=_||function(y){return setTimeout(y,c-g.time*1e3+1|0)},yc=1,E(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(d),yc=0,p=xc},lagSmoothing:function(y,S){t=y||1/0,e=Math.min(S||33,t)},fps:function(y){l=1e3/(y||240),c=g.time*1e3+l},add:function(y,S,N){var L=S?function(A,P,z,O){y(A,P,z,O),g.remove(L)}:y;return g.remove(y),f[N?"unshift":"push"](L),Fl(),L},remove:function(y,S){~(S=f.indexOf(y))&&f.splice(S,1)&&x>=S&&x--},_listeners:f},g}(),Fl=function(){return!yc&&ir.wake()},Ie={},lA=/^[\d.\-M][\d.\-,\s]/,uA=/["']/g,cA=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),a=i[0],l=1,c=i.length,f,d,p;l<c;l++)d=i[l],f=l!==c-1?d.lastIndexOf(","):d.length,p=d.substr(0,f),e[a]=isNaN(p)?p.replace(uA,"").trim():+p,a=d.substr(f+1).trim();return e},fA=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),a=t.indexOf("(",e);return t.substring(e,~a&&a<i?t.indexOf(")",i+1):i)},hA=function(t){var e=(t+"").split("("),i=Ie[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[cA(e[1])]:fA(t).split(",").map(zM)):Ie._CE&&lA.test(t)?Ie._CE("",t):i},tE=function(t){return function(e){return 1-t(1-e)}},eE=function o(t,e){for(var i=t._first,a;i;)i instanceof Ci?o(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?o(i.timeline,e):(a=i._ease,i._ease=i._yEase,i._yEase=a,i._yoyo=e)),i=i._next},po=function(t,e){return t&&(Cn(t)?t:Ie[t]||hA(t))||e},bo=function(t,e,i,a){i===void 0&&(i=function(d){return 1-e(1-d)}),a===void 0&&(a=function(d){return d<.5?e(d*2)/2:1-e((1-d)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:a},c;return Bi(t,function(f){Ie[f]=or[f]=l,Ie[c=f.toLowerCase()]=i;for(var d in l)Ie[c+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Ie[f+"."+d]=l[d]}),l},nE=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Tm=function o(t,e,i){var a=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),c=l/d_*(Math.asin(1/a)||0),f=function(_){return _===1?1:a*Math.pow(2,-10*_)*Hb((_-c)*l)+1},d=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:nE(f);return l=d_/l,d.config=function(p,_){return o(t,p,_)},d},bm=function o(t,e){e===void 0&&(e=1.70158);var i=function(c){return c?--c*c*((e+1)*c+e)+1:0},a=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:nE(i);return a.config=function(l){return o(t,l)},a};Bi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;bo(o+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Ie.Linear.easeNone=Ie.none=Ie.Linear.easeIn;bo("Elastic",Tm("in"),Tm("out"),Tm());(function(o,t){var e=1/t,i=2*e,a=2.5*e,l=function(f){return f<e?o*f*f:f<i?o*Math.pow(f-1.5/t,2)+.75:f<a?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};bo("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);bo("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});bo("Circ",function(o){return-(bM(1-o*o)-1)});bo("Sine",function(o){return o===1?1:-Fb(o*Bb)+1});bo("Back",bm("in"),bm("out"),bm());Ie.SteppedEase=Ie.steps=or.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,a=t+(e?0:1),l=e?1:0,c=1-dn;return function(f){return((a*Uc(0,c,f)|0)+l)*i}}};Pl.ease=Ie["quad.out"];Bi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Ng+=o+","+o+"Params,"});var iE=function(t,e){this.id=Ib++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:OM,this.set=e?e.getSetter:Fg},Mc=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Il(this,+e.duration,1,1),this.data=e.data,Sn&&(this._ctx=Sn,Sn.data.push(this)),yc||ir.wake()}var t=o.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Il(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,a){if(Fl(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(od(this,i),!l._dp||l.parent||FM(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Wr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===dn||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),PM(this,i,a)),this},t.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+YS(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},t.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+YS(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,a){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,a):this._repeat?Bl(this._tTime,l)+1:1},t.timeScale=function(i,a){if(!arguments.length)return this._rts===-dn?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?qh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-dn?0:this._rts,this.totalTime(Uc(-Math.abs(this._delay),this.totalDuration(),l),a!==!1),sd(this),qb(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==dn&&(this._tTime-=dn)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Wr(a,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(zi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qh(a.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=kb);var a=ui;return ui=i,Pg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ui=a,this},t.globalTime=function(i){for(var a=this,l=arguments.length?i:a.rawTime();a;)l=a._start+l/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,qS(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,qS(this),a?this.time(a):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,a){return this.totalTime(gr(this,i),zi(a))},t.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,zi(a)),this._dur||(this._zTime=-dn),this},t.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},t.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},t.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-dn:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-dn,this},t.isActive=function(){var i=this.parent||this._dp,a=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=a&&l<this.endTime(!0)-dn)},t.eventCallback=function(i,a,l){var c=this.vars;return arguments.length>1?(a?(c[i]=a,l&&(c[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=a)):delete c[i],this):c[i]},t.then=function(i){var a=this;return new Promise(function(l){var c=Cn(i)?i:BM,f=function(){var p=a.then;a.then=null,Cn(c)&&(c=c(a))&&(c.then||c===a)&&(a.then=p),l(c),a.then=p};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?f():a._prom=f})},t.kill=function(){Ju(this)},o}();lr(Mc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-dn,_prom:0,_ps:!1,_rts:1});var Ci=function(o){TM(t,o);function t(i,a){var l;return i===void 0&&(i={}),l=o.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=zi(i.sortChildren),En&&Wr(i.parent||En,ya(l),a),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&HM(ya(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(a,l,c){return oc(0,arguments,this),this},e.from=function(a,l,c){return oc(1,arguments,this),this},e.fromTo=function(a,l,c,f){return oc(2,arguments,this),this},e.set=function(a,l,c){return l.duration=0,l.parent=this,sc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Fn(a,l,gr(this,c),1),this},e.call=function(a,l,c){return Wr(this,Fn.delayedCall(0,a,l),c)},e.staggerTo=function(a,l,c,f,d,p,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=_,c.parent=this,new Fn(a,c,gr(this,d)),this},e.staggerFrom=function(a,l,c,f,d,p,_){return c.runBackwards=1,sc(c).immediateRender=zi(c.immediateRender),this.staggerTo(a,l,c,f,d,p,_)},e.staggerFromTo=function(a,l,c,f,d,p,_,g){return f.startAt=c,sc(f).immediateRender=zi(f.immediateRender),this.staggerTo(a,l,f,d,p,_,g)},e.render=function(a,l,c){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,p=this._dur,_=a<=0?0:Hn(a),g=this._zTime<0!=a<0&&(this._initted||!p),v,x,E,M,y,S,N,L,A,P,z,O;if(this!==En&&_>d&&a>=0&&(_=d),_!==this._tTime||c||g){if(f!==this._time&&p&&(_+=this._time-f,a+=this._time-f),v=_,A=this._start,L=this._ts,S=!L,g&&(p||(f=this._zTime),(a||!l)&&(this._zTime=a)),this._repeat){if(z=this._yoyo,y=p+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(y*100+a,l,c);if(v=Hn(_%y),_===d?(M=this._repeat,v=p):(P=Hn(_/y),M=~~P,M&&M===P&&(v=p,M--),v>p&&(v=p)),P=Bl(this._tTime,y),!f&&this._tTime&&P!==M&&this._tTime-P*y-this._dur<=0&&(P=M),z&&M&1&&(v=p-v,O=1),M!==P&&!this._lock){var F=z&&P&1,C=F===(z&&M&1);if(M<P&&(F=!F),f=F?0:_%p?p:_,this._lock=1,this.render(f||(O?0:Hn(M*y)),l,!p)._lock=0,this._tTime=_,!l&&this.parent&&ar(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,d=this._tDur,C&&(this._lock=2,f=F?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!S)return this;eE(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(N=Qb(this,Hn(f),Hn(v)),N&&(_-=v-(v=N._start))),this._tTime=_,this._time=v,this._act=!L,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,f=0),!f&&_&&!l&&!P&&(ar(this,"onStart"),this._tTime!==_))return this;if(v>=f&&a>=0)for(x=this._first;x;){if(E=x._next,(x._act||v>=x._start)&&x._ts&&N!==x){if(x.parent!==this)return this.render(a,l,c);if(x.render(x._ts>0?(v-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(v-x._start)*x._ts,l,c),v!==this._time||!this._ts&&!S){N=0,E&&(_+=this._zTime=-dn);break}}x=E}else{x=this._last;for(var R=a<0?a:v;x;){if(E=x._prev,(x._act||R<=x._end)&&x._ts&&N!==x){if(x.parent!==this)return this.render(a,l,c);if(x.render(x._ts>0?(R-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(R-x._start)*x._ts,l,c||ui&&Pg(x)),v!==this._time||!this._ts&&!S){N=0,E&&(_+=this._zTime=R?-dn:dn);break}}x=E}}if(N&&!l&&(this.pause(),N.render(v>=f?0:-dn)._zTime=v>=f?1:-1,this._ts))return this._start=A,sd(this),this.render(a,l,c);this._onUpdate&&!l&&ar(this,"onUpdate",!0),(_===d&&this._tTime>=this.totalDuration()||!_&&f)&&(A===this._start||Math.abs(L)!==Math.abs(this._ts))&&(this._lock||((a||!p)&&(_===d&&this._ts>0||!_&&this._ts<0)&&Ts(this,1),!l&&!(a<0&&!f)&&(_||f||!d)&&(ar(this,_===d&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(a,l){var c=this;if(Ua(l)||(l=gr(this,l,a)),!(a instanceof Mc)){if(xi(a))return a.forEach(function(f){return c.add(f,l)}),this;if(ii(a))return this.addLabel(a,l);if(Cn(a))a=Fn.delayedCall(0,a);else return this}return this!==a?Wr(this,a,l):this},e.getChildren=function(a,l,c,f){a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Mr);for(var d=[],p=this._first;p;)p._start>=f&&(p instanceof Fn?l&&d.push(p):(c&&d.push(p),a&&d.push.apply(d,p.getChildren(!0,l,c)))),p=p._next;return d},e.getById=function(a){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===a)return l[c]},e.remove=function(a){return ii(a)?this.removeLabel(a):Cn(a)?this.killTweensOf(a):(a.parent===this&&ad(this,a),a===this._recent&&(this._recent=this._last),ho(this))},e.totalTime=function(a,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Hn(ir.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),o.prototype.totalTime.call(this,a,l),this._forcing=0,this):this._tTime},e.addLabel=function(a,l){return this.labels[a]=gr(this,l),this},e.removeLabel=function(a){return delete this.labels[a],this},e.addPause=function(a,l,c){var f=Fn.delayedCall(0,l||xc,c);return f.data="isPause",this._hasPause=1,Wr(this,f,gr(this,a))},e.removePause=function(a){var l=this._first;for(a=gr(this,a);l;)l._start===a&&l.data==="isPause"&&Ts(l),l=l._next},e.killTweensOf=function(a,l,c){for(var f=this.getTweensOf(a,c),d=f.length;d--;)ds!==f[d]&&f[d].kill(a,l);return this},e.getTweensOf=function(a,l){for(var c=[],f=Er(a),d=this._first,p=Ua(l),_;d;)d instanceof Fn?Xb(d._targets,f)&&(p?(!ds||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&c.push(d):(_=d.getTweensOf(f,l)).length&&c.push.apply(c,_),d=d._next;return c},e.tweenTo=function(a,l){l=l||{};var c=this,f=gr(c,a),d=l,p=d.startAt,_=d.onStart,g=d.onStartParams,v=d.immediateRender,x,E=Fn.to(c,lr({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||dn,onStart:function(){if(c.pause(),!x){var y=l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());E._dur!==y&&Il(E,y,0,1).render(E._time,!0,!0),x=1}_&&_.apply(E,g||[])}},l));return v?E.render(0):E},e.tweenFromTo=function(a,l,c){return this.tweenTo(l,lr({startAt:{time:gr(this,a)}},c))},e.recent=function(){return this._recent},e.nextLabel=function(a){return a===void 0&&(a=this._time),ZS(this,gr(this,a))},e.previousLabel=function(a){return a===void 0&&(a=this._time),ZS(this,gr(this,a),1)},e.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+dn)},e.shiftChildren=function(a,l,c){c===void 0&&(c=0);for(var f=this._first,d=this.labels,p;f;)f._start>=c&&(f._start+=a,f._end+=a),f=f._next;if(l)for(p in d)d[p]>=c&&(d[p]+=a);return ho(this)},e.invalidate=function(a){var l=this._first;for(this._lock=0;l;)l.invalidate(a),l=l._next;return o.prototype.invalidate.call(this,a)},e.clear=function(a){a===void 0&&(a=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),ho(this)},e.totalDuration=function(a){var l=0,c=this,f=c._last,d=Mr,p,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-a:a));if(c._dirty){for(g=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>d&&c._sort&&f._ts&&!c._lock?(c._lock=1,Wr(c,f,_-f._delay,1)._lock=0):d=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=p;Il(c,c===En&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(a){if(En._ts&&(PM(En,qh(a,En)),NM=ir.frame),ir.frame>=XS){XS+=sr.autoSleep||120;var l=En._first;if((!l||!l._ts)&&sr.autoSleep&&ir._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||ir.sleep()}}},t}(Mc);lr(Ci.prototype,{_lock:0,_hasPause:0,_forcing:0});var dA=function(t,e,i,a,l,c,f){var d=new Ii(this._pt,t,e,0,1,uE,null,l),p=0,_=0,g,v,x,E,M,y,S,N;for(d.b=i,d.e=a,i+="",a+="",(S=~a.indexOf("random("))&&(a=Sc(a)),c&&(N=[i,a],c(N,t,e),i=N[0],a=N[1]),v=i.match(ym)||[];g=ym.exec(a);)E=g[0],M=a.substring(p,g.index),x?x=(x+1)%5:M.substr(-5)==="rgba("&&(x=1),E!==v[_++]&&(y=parseFloat(v[_-1])||0,d._pt={_next:d._pt,p:M||_===1?M:",",s:y,c:E.charAt(1)==="="?Al(y,E)-y:parseFloat(E)-y,m:x&&x<4?Math.round:0},p=ym.lastIndex);return d.c=p<a.length?a.substring(p,a.length):"",d.fp=f,(CM.test(a)||S)&&(d.e=0),this._pt=d,d},zg=function(t,e,i,a,l,c,f,d,p,_){Cn(a)&&(a=a(l||0,t,c));var g=t[e],v=i!=="get"?i:Cn(g)?p?t[e.indexOf("set")||!Cn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](p):t[e]():g,x=Cn(g)?p?vA:oE:Ig,E;if(ii(a)&&(~a.indexOf("random(")&&(a=Sc(a)),a.charAt(1)==="="&&(E=Al(v,a)+(gi(v)||0),(E||E===0)&&(a=E))),!_||v!==a||M_)return!isNaN(v*a)&&a!==""?(E=new Ii(this._pt,t,e,+v||0,a-(v||0),typeof g=="boolean"?SA:lE,0,x),p&&(E.fp=p),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(e in t)&&Ug(e,a),dA.call(this,t,e,v,a,x,d||sr.stringFilter,p))},pA=function(t,e,i,a,l){if(Cn(t)&&(t=lc(t,l,e,i,a)),!Jr(t)||t.style&&t.nodeType||xi(t)||AM(t))return ii(t)?lc(t,l,e,i,a):t;var c={},f;for(f in t)c[f]=lc(t[f],l,e,i,a);return c},rE=function(t,e,i,a,l,c){var f,d,p,_;if(er[t]&&(f=new er[t]).init(l,f.rawVars?e[t]:pA(e[t],a,l,c,i),i,a,c)!==!1&&(i._pt=d=new Ii(i._pt,l,t,0,1,f.render,f,0,f.priority),i!==El))for(p=i._ptLookup[i._targets.indexOf(l)],_=f._props.length;_--;)p[f._props[_]]=d;return f},ds,M_,Bg=function o(t,e,i){var a=t.vars,l=a.ease,c=a.startAt,f=a.immediateRender,d=a.lazy,p=a.onUpdate,_=a.runBackwards,g=a.yoyoEase,v=a.keyframes,x=a.autoRevert,E=t._dur,M=t._startAt,y=t._targets,S=t.parent,N=S&&S.data==="nested"?S.vars.targets:y,L=t._overwrite==="auto"&&!Rg,A=t.timeline,P,z,O,F,C,R,H,Y,$,ut,st,B,X;if(A&&(!v||!l)&&(l="none"),t._ease=po(l,Pl.ease),t._yEase=g?tE(po(g===!0?l:g,Pl.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!A&&!!a.runBackwards,!A||v&&!a.stagger){if(Y=y[0]?fo(y[0]).harness:0,B=Y&&a[Y.prop],P=Yh(a,Lg),M&&(M._zTime<0&&M.progress(1),e<0&&_&&f&&!x?M.render(-1,!0):M.revert(_&&E?wh:Vb),M._lazy=0),c){if(Ts(t._startAt=Fn.set(y,lr({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!M&&zi(d),startAt:null,delay:0,onUpdate:p&&function(){return ar(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ui||!f&&!x)&&t._startAt.revert(wh),f&&E&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(_&&E&&!M){if(e&&(f=!1),O=lr({overwrite:!1,data:"isFromStart",lazy:f&&!M&&zi(d),immediateRender:f,stagger:0,parent:S},P),B&&(O[Y.prop]=B),Ts(t._startAt=Fn.set(y,O)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ui?t._startAt.revert(wh):t._startAt.render(-1,!0)),t._zTime=e,!f)o(t._startAt,dn,dn);else if(!e)return}for(t._pt=t._ptCache=0,d=E&&zi(d)||d&&!E,z=0;z<y.length;z++){if(C=y[z],H=C._gsap||Og(y)[z]._gsap,t._ptLookup[z]=ut={},__[H.id]&&vs.length&&Wh(),st=N===y?z:N.indexOf(C),Y&&($=new Y).init(C,B||P,t,st,N)!==!1&&(t._pt=F=new Ii(t._pt,C,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(W){ut[W]=F}),$.priority&&(R=1)),!Y||B)for(O in P)er[O]&&($=rE(O,P,t,st,C,N))?$.priority&&(R=1):ut[O]=F=zg.call(t,C,O,"get",P[O],st,N,0,a.stringFilter);t._op&&t._op[z]&&t.kill(C,t._op[z]),L&&t._pt&&(ds=t,En.killTweensOf(C,ut,t.globalTime(e)),X=!t.parent,ds=0),t._pt&&d&&(__[H.id]=1)}R&&cE(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!X,v&&e<=0&&A.render(Mr,!0,!0)},mA=function(t,e,i,a,l,c,f,d){var p=(t._pt&&t._ptCache||(t._ptCache={}))[e],_,g,v,x;if(!p)for(p=t._ptCache[e]=[],v=t._ptLookup,x=t._targets.length;x--;){if(_=v[x][e],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==e&&_.fp!==e;)_=_._next;if(!_)return M_=1,t.vars[e]="+=0",Bg(t,f),M_=0,d?vc(e+" not eligible for reset"):1;p.push(_)}for(x=p.length;x--;)g=p[x],_=g._pt||g,_.s=(a||a===0)&&!l?a:_.s+(a||0)+c*_.c,_.c=i-_.s,g.e&&(g.e=Un(i)+gi(g.e)),g.b&&(g.b=_.s+gi(g.b))},_A=function(t,e){var i=t[0]?fo(t[0]).harness:0,a=i&&i.aliases,l,c,f,d;if(!a)return e;l=zl({},e);for(c in a)if(c in l)for(d=a[c].split(","),f=d.length;f--;)l[d[f]]=l[c];return l},gA=function(t,e,i,a){var l=e.ease||a||"power1.inOut",c,f;if(xi(e))f=i[t]||(i[t]=[]),e.forEach(function(d,p){return f.push({t:p/(e.length-1)*100,v:d,e:l})});else for(c in e)f=i[c]||(i[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:e[c],e:l})},lc=function(t,e,i,a,l){return Cn(t)?t.call(e,i,a,l):ii(t)&&~t.indexOf("random(")?Sc(t):t},aE=Ng+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",sE={};Bi(aE+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return sE[o]=1});var Fn=function(o){TM(t,o);function t(i,a,l,c){var f;typeof a=="number"&&(l.duration=a,a=l,l=null),f=o.call(this,c?a:sc(a))||this;var d=f.vars,p=d.duration,_=d.delay,g=d.immediateRender,v=d.stagger,x=d.overwrite,E=d.keyframes,M=d.defaults,y=d.scrollTrigger,S=d.yoyoEase,N=a.parent||En,L=(xi(i)||AM(i)?Ua(i[0]):"length"in a)?[i]:Er(i),A,P,z,O,F,C,R,H;if(f._targets=L.length?Og(L):vc("GSAP target "+i+" not found. https://gsap.com",!sr.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,E||v||Wf(p)||Wf(_)){if(a=f.vars,A=f.timeline=new Ci({data:"nested",defaults:M||{},targets:N&&N.data==="nested"?N.vars.targets:L}),A.kill(),A.parent=A._dp=ya(f),A._start=0,v||Wf(p)||Wf(_)){if(O=L.length,R=v&&XM(v),Jr(v))for(F in v)~aE.indexOf(F)&&(H||(H={}),H[F]=v[F]);for(P=0;P<O;P++)z=Yh(a,sE),z.stagger=0,S&&(z.yoyoEase=S),H&&zl(z,H),C=L[P],z.duration=+lc(p,ya(f),P,C,L),z.delay=(+lc(_,ya(f),P,C,L)||0)-f._delay,!v&&O===1&&z.delay&&(f._delay=_=z.delay,f._start+=_,z.delay=0),A.to(C,z,R?R(P,C,L):0),A._ease=Ie.none;A.duration()?p=_=0:f.timeline=0}else if(E){sc(lr(A.vars.defaults,{ease:"none"})),A._ease=po(E.ease||a.ease||"none");var Y=0,$,ut,st;if(xi(E))E.forEach(function(B){return A.to(L,B,">")}),A.duration();else{z={};for(F in E)F==="ease"||F==="easeEach"||gA(F,E[F],z,E.easeEach);for(F in z)for($=z[F].sort(function(B,X){return B.t-X.t}),Y=0,P=0;P<$.length;P++)ut=$[P],st={ease:ut.e,duration:(ut.t-(P?$[P-1].t:0))/100*p},st[F]=ut.v,A.to(L,st,Y),Y+=st.duration;A.duration()<p&&A.to({},{duration:p-A.duration()})}}p||f.duration(p=A.duration())}else f.timeline=0;return x===!0&&!Rg&&(ds=ya(f),En.killTweensOf(L),ds=0),Wr(N,ya(f),l),a.reversed&&f.reverse(),a.paused&&f.paused(!0),(g||!p&&!E&&f._start===Hn(N._time)&&zi(g)&&Zb(ya(f))&&N.data!=="nested")&&(f._tTime=-dn,f.render(Math.max(0,-_)||0)),y&&HM(ya(f),y),f}var e=t.prototype;return e.render=function(a,l,c){var f=this._time,d=this._tDur,p=this._dur,_=a<0,g=a>d-dn&&!_?d:a<dn?0:a,v,x,E,M,y,S,N,L,A;if(!p)Kb(this,a,l,c);else if(g!==this._tTime||!a||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,L=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+a,l,c);if(v=Hn(g%M),g===d?(E=this._repeat,v=p):(y=Hn(g/M),E=~~y,E&&E===y?(v=p,E--):v>p&&(v=p)),S=this._yoyo&&E&1,S&&(A=this._yEase,v=p-v),y=Bl(this._tTime,M),v===f&&!c&&this._initted&&E===y)return this._tTime=g,this;E!==y&&(L&&this._yEase&&eE(L,S),this.vars.repeatRefresh&&!S&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(Hn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(GM(this,_?a:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==y))return this;if(p!==this._dur)return this.render(a,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=N=(A||this._ease)(v/p),this._from&&(this.ratio=N=1-N),!f&&g&&!l&&!y&&(ar(this,"onStart"),this._tTime!==g))return this;for(x=this._pt;x;)x.r(N,x.d),x=x._next;L&&L.render(a<0?a:L._dur*L._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=a),this._onUpdate&&!l&&(_&&g_(this,a,l,c),ar(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!l&&this.parent&&ar(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&g_(this,a,!0,!0),(a||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Ts(this,1),!l&&!(_&&!f)&&(g||f||S)&&(ar(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),o.prototype.invalidate.call(this,a)},e.resetTo=function(a,l,c,f,d){yc||ir.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||Bg(this,p),_=this._ease(p/this._dur),mA(this,a,l,c,f,_,p,d)?this.resetTo(a,l,c,f,1):(od(this,0),this.parent||IM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(a,l){if(l===void 0&&(l="all"),!a&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Ju(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ui),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(a,l,ds&&ds.vars.overwrite!==!0)._first||Ju(this),this.parent&&c!==this.timeline.totalDuration()&&Il(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,d=a?Er(a):f,p=this._ptLookup,_=this._pt,g,v,x,E,M,y,S;if((!l||l==="all")&&Yb(f,d))return l==="all"&&(this._pt=0),Ju(this);for(g=this._op=this._op||[],l!=="all"&&(ii(l)&&(M={},Bi(l,function(N){return M[N]=1}),l=M),l=_A(f,l)),S=f.length;S--;)if(~d.indexOf(f[S])){v=p[S],l==="all"?(g[S]=l,E=v,x={}):(x=g[S]=g[S]||{},E=l);for(M in E)y=v&&v[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&ad(this,y,"_pt"),delete v[M]),x!=="all"&&(x[M]=1)}return this._initted&&!this._pt&&_&&Ju(this),this},t.to=function(a,l){return new t(a,l,arguments[2])},t.from=function(a,l){return oc(1,arguments)},t.delayedCall=function(a,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(a,l,c){return oc(2,arguments)},t.set=function(a,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(a,l)},t.killTweensOf=function(a,l,c){return En.killTweensOf(a,l,c)},t}(Mc);lr(Fn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bi("staggerTo,staggerFrom,staggerFromTo",function(o){Fn[o]=function(){var t=new Ci,e=x_.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var Ig=function(t,e,i){return t[e]=i},oE=function(t,e,i){return t[e](i)},vA=function(t,e,i,a){return t[e](a.fp,i)},xA=function(t,e,i){return t.setAttribute(e,i)},Fg=function(t,e){return Cn(t[e])?oE:Cg(t[e])&&t.setAttribute?xA:Ig},lE=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},SA=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},uE=function(t,e){var i=e._pt,a="";if(!t&&e.b)a=e.b;else if(t===1&&e.e)a=e.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+a,i=i._next;a+=e.c}e.set(e.t,e.p,a,e)},Hg=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},yA=function(t,e,i,a){for(var l=this._pt,c;l;)c=l._next,l.p===a&&l.modifier(t,e,i),l=c},MA=function(t){for(var e=this._pt,i,a;e;)a=e._next,e.p===t&&!e.op||e.op===t?ad(this,e,"_pt"):e.dep||(i=1),e=a;return!i},EA=function(t,e,i,a){a.mSet(t,e,a.m.call(a.tween,i,a.mt),a)},cE=function(t){for(var e=t._pt,i,a,l,c;e;){for(i=e._next,a=l;a&&a.pr>e.pr;)a=a._next;(e._prev=a?a._prev:c)?e._prev._next=e:l=e,(e._next=a)?a._prev=e:c=e,e=i}t._pt=l},Ii=function(){function o(e,i,a,l,c,f,d,p,_){this.t=i,this.s=l,this.c=c,this.p=a,this.r=f||lE,this.d=d||this,this.set=p||Ig,this.pr=_||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(i,a,l){this.mSet=this.mSet||this.set,this.set=EA,this.m=i,this.mt=l,this.tween=a},o}();Bi(Ng+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Lg[o]=1});or.TweenMax=or.TweenLite=Fn;or.TimelineLite=or.TimelineMax=Ci;En=new Ci({sortChildren:!1,defaults:Pl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sr.stringFilter=$M;var mo=[],Uh={},TA=[],KS=0,bA=0,Am=function(t){return(Uh[t]||TA).map(function(e){return e()})},E_=function(){var t=Date.now(),e=[];t-KS>2&&(Am("matchMediaInit"),mo.forEach(function(i){var a=i.queries,l=i.conditions,c,f,d,p;for(f in a)c=Vr.matchMedia(a[f]).matches,c&&(d=1),c!==l[f]&&(l[f]=c,p=1);p&&(i.revert(),d&&e.push(i))}),Am("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),KS=t,Am("matchMedia"))},fE=function(){function o(e,i){this.selector=i&&S_(i),this.data=[],this._r=[],this.isReverted=!1,this.id=bA++,e&&this.add(e)}var t=o.prototype;return t.add=function(i,a,l){Cn(i)&&(l=a,a=i,i=Cn);var c=this,f=function(){var p=Sn,_=c.selector,g;return p&&p!==c&&p.data.push(c),l&&(c.selector=S_(l)),Sn=c,g=a.apply(c,arguments),Cn(g)&&c._r.push(g),Sn=p,c.selector=_,c.isReverted=!1,g};return c.last=f,i===Cn?f(c,function(d){return c.add(null,d)}):i?c[i]=f:f},t.ignore=function(i){var a=Sn;Sn=null,i(this),Sn=a},t.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof o?i.push.apply(i,a.getTweens()):a instanceof Fn&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,a){var l=this;if(i?function(){for(var f=l.getTweens(),d=l.data.length,p;d--;)p=l.data[d],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(i)}),d=l.data.length;d--;)p=l.data[d],p instanceof Ci?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof Fn)&&p.revert&&p.revert(i);l._r.forEach(function(_){return _(i,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),a)for(var c=mo.length;c--;)mo[c].id===this.id&&mo.splice(c,1)},t.revert=function(i){this.kill(i||{})},o}(),AA=function(){function o(e){this.contexts=[],this.scope=e,Sn&&Sn.data.push(this)}var t=o.prototype;return t.add=function(i,a,l){Jr(i)||(i={matches:i});var c=new fE(0,l||this.scope),f=c.conditions={},d,p,_;Sn&&!c.selector&&(c.selector=Sn.selector),this.contexts.push(c),a=c.add("onMatch",a),c.queries=i;for(p in i)p==="all"?_=1:(d=Vr.matchMedia(i[p]),d&&(mo.indexOf(c)<0&&mo.push(c),(f[p]=d.matches)&&(_=1),d.addListener?d.addListener(E_):d.addEventListener("change",E_)));return _&&a(c,function(g){return c.add(null,g)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},o}(),Zh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(a){return KM(a)})},timeline:function(t){return new Ci(t)},getTweensOf:function(t,e){return En.getTweensOf(t,e)},getProperty:function(t,e,i,a){ii(t)&&(t=Er(t)[0]);var l=fo(t||{}).get,c=i?BM:zM;return i==="native"&&(i=""),t&&(e?c((er[e]&&er[e].get||l)(t,e,i,a)):function(f,d,p){return c((er[f]&&er[f].get||l)(t,f,d,p))})},quickSetter:function(t,e,i){if(t=Er(t),t.length>1){var a=t.map(function(_){return ki.quickSetter(_,e,i)}),l=a.length;return function(_){for(var g=l;g--;)a[g](_)}}t=t[0]||{};var c=er[e],f=fo(t),d=f.harness&&(f.harness.aliases||{})[e]||e,p=c?function(_){var g=new c;El._pt=0,g.init(t,i?_+i:_,El,0,[t]),g.render(1,g),El._pt&&Hg(1,El)}:f.set(t,d);return c?p:function(_){return p(t,d,i?_+i:_,f,1)}},quickTo:function(t,e,i){var a,l=ki.to(t,lr((a={},a[e]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),c=function(d,p,_){return l.resetTo(e,d,p,_)};return c.tween=l,c},isTweening:function(t){return En.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=po(t.ease,Pl.ease)),WS(Pl,t||{})},config:function(t){return WS(sr,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,a=t.plugins,l=t.defaults,c=t.extendTimeline;(a||"").split(",").forEach(function(f){return f&&!er[f]&&!or[f]&&vc(e+" effect requires "+f+" plugin.")}),Mm[e]=function(f,d,p){return i(Er(f),lr(d||{},l),p)},c&&(Ci.prototype[e]=function(f,d,p){return this.add(Mm[e](f,Jr(d)?d:(p=d)&&{},this),p)})},registerEase:function(t,e){Ie[t]=po(e)},parseEase:function(t,e){return arguments.length?po(t,e):Ie},getById:function(t){return En.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Ci(t),a,l;for(i.smoothChildTiming=zi(t.smoothChildTiming),En.remove(i),i._dp=0,i._time=i._tTime=En._time,a=En._first;a;)l=a._next,(e||!(!a._dur&&a instanceof Fn&&a.vars.onComplete===a._targets[0]))&&Wr(i,a,a._start-a._delay),a=l;return Wr(En,i,0),i},context:function(t,e){return t?new fE(t,e):Sn},matchMedia:function(t){return new AA(t)},matchMediaRefresh:function(){return mo.forEach(function(t){var e=t.conditions,i,a;for(a in e)e[a]&&(e[a]=!1,i=1);i&&t.revert()})||E_()},addEventListener:function(t,e){var i=Uh[t]||(Uh[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Uh[t],a=i&&i.indexOf(e);a>=0&&i.splice(a,1)},utils:{wrap:rA,wrapYoyo:aA,distribute:XM,random:YM,snap:WM,normalize:iA,getUnit:gi,clamp:$b,splitColor:QM,toArray:Er,selector:S_,mapRange:ZM,pipe:eA,unitize:nA,interpolate:sA,shuffle:kM},install:UM,effects:Mm,ticker:ir,updateRoot:Ci.updateRoot,plugins:er,globalTimeline:En,core:{PropTween:Ii,globals:LM,Tween:Fn,Timeline:Ci,Animation:Mc,getCache:fo,_removeLinkedListItem:ad,reverting:function(){return ui},context:function(t){return t&&Sn&&(Sn.data.push(t),t._ctx=Sn),Sn},suppressOverwrites:function(t){return Rg=t}}};Bi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Zh[o]=Fn[o]});ir.add(Ci.updateRoot);El=Zh.to({},{duration:0});var RA=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},CA=function(t,e){var i=t._targets,a,l,c;for(a in e)for(l=i.length;l--;)c=t._ptLookup[l][a],c&&(c=c.d)&&(c._pt&&(c=RA(c,a)),c&&c.modifier&&c.modifier(e[a],t,i[l],a))},Rm=function(t,e){return{name:t,headless:1,rawVars:1,init:function(a,l,c){c._onInit=function(f){var d,p;if(ii(l)&&(d={},Bi(l,function(_){return d[_]=1}),l=d),e){d={};for(p in l)d[p]=e(l[p]);l=d}CA(f,l)}}}},ki=Zh.registerPlugin({name:"attr",init:function(t,e,i,a,l){var c,f,d;this.tween=i;for(c in e)d=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(d||0)+"",e[c],a,l,0,0,c),f.op=c,f.b=d,this._props.push(c)},render:function(t,e){for(var i=e._pt;i;)ui?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Rm("roundProps",y_),Rm("modifiers"),Rm("snap",WM))||Zh;Fn.version=Ci.version=ki.version="3.13.0";DM=1;wg()&&Fl();Ie.Power0;Ie.Power1;Ie.Power2;Ie.Power3;Ie.Power4;Ie.Linear;Ie.Quad;Ie.Cubic;Ie.Quart;Ie.Quint;Ie.Strong;Ie.Elastic;Ie.Back;Ie.SteppedEase;Ie.Bounce;Ie.Sine;Ie.Expo;Ie.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var QS,ps,Rl,Gg,oo,JS,Vg,wA=function(){return typeof window<"u"},La={},to=180/Math.PI,Cl=Math.PI/180,il=Math.atan2,$S=1e8,kg=/([A-Z])/g,DA=/(left|right|width|margin|padding|x)/i,UA=/[\s,\(]\S/,Yr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},T_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},LA=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},NA=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},OA=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},hE=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},dE=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},PA=function(t,e,i){return t.style[e]=i},zA=function(t,e,i){return t.style.setProperty(e,i)},BA=function(t,e,i){return t._gsap[e]=i},IA=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},FA=function(t,e,i,a,l){var c=t._gsap;c.scaleX=c.scaleY=i,c.renderTransform(l,c)},HA=function(t,e,i,a,l){var c=t._gsap;c[e]=i,c.renderTransform(l,c)},Tn="transform",Fi=Tn+"Origin",GA=function o(t,e){var i=this,a=this.target,l=a.style,c=a._gsap;if(t in La&&l){if(this.tfm=this.tfm||{},t!=="transform")t=Yr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=Ma(a,f)}):this.tfm[t]=c.x?c[t]:Ma(a,t),t===Fi&&(this.tfm.zOrigin=c.zOrigin);else return Yr.transform.split(",").forEach(function(f){return o.call(i,f,e)});if(this.props.indexOf(Tn)>=0)return;c.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(Fi,e,"")),t=Tn}(l||e)&&this.props.push(t,e,l[t])},pE=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},VA=function(){var t=this.props,e=this.target,i=e.style,a=e._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(kg,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)a[c]=this.tfm[c];a.svg&&(a.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=Vg(),(!l||!l.isStart)&&!i[Tn]&&(pE(i),a.zOrigin&&i[Fi]&&(i[Fi]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},mE=function(t,e){var i={target:t,props:[],revert:VA,save:GA};return t._gsap||ki.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(a){return i.save(a)}),i},_E,b_=function(t,e){var i=ps.createElementNS?ps.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ps.createElement(t);return i&&i.style?i:ps.createElement(t)},Tr=function o(t,e,i){var a=getComputedStyle(t);return a[e]||a.getPropertyValue(e.replace(kg,"-$1").toLowerCase())||a.getPropertyValue(e)||!i&&o(t,Hl(e)||e,1)||""},ty="O,Moz,ms,Ms,Webkit".split(","),Hl=function(t,e,i){var a=e||oo,l=a.style,c=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(ty[c]+t in l););return c<0?null:(c===3?"ms":c>=0?ty[c]:"")+t},A_=function(){wA()&&window.document&&(QS=window,ps=QS.document,Rl=ps.documentElement,oo=b_("div")||{style:{}},b_("div"),Tn=Hl(Tn),Fi=Tn+"Origin",oo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_E=!!Hl("perspective"),Vg=ki.core.reverting,Gg=1)},ey=function(t){var e=t.ownerSVGElement,i=b_("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=t.cloneNode(!0),l;a.style.display="block",i.appendChild(a),Rl.appendChild(i);try{l=a.getBBox()}catch{}return i.removeChild(a),Rl.removeChild(i),l},ny=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},gE=function(t){var e,i;try{e=t.getBBox()}catch{e=ey(t),i=1}return e&&(e.width||e.height)||i||(e=ey(t)),e&&!e.width&&!e.x&&!e.y?{x:+ny(t,["x","cx","x1"])||0,y:+ny(t,["y","cy","y1"])||0,width:0,height:0}:e},vE=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&gE(t))},xo=function(t,e){if(e){var i=t.style,a;e in La&&e!==Fi&&(e=Tn),i.removeProperty?(a=e.substr(0,2),(a==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(a==="--"?e:e.replace(kg,"-$1").toLowerCase())):i.removeAttribute(e)}},ms=function(t,e,i,a,l,c){var f=new Ii(t._pt,e,i,0,1,c?dE:hE);return t._pt=f,f.b=a,f.e=l,t._props.push(i),f},iy={deg:1,rad:1,turn:1},kA={grid:1,flex:1},bs=function o(t,e,i,a){var l=parseFloat(i)||0,c=(i+"").trim().substr((l+"").length)||"px",f=oo.style,d=DA.test(e),p=t.tagName.toLowerCase()==="svg",_=(p?"client":"offset")+(d?"Width":"Height"),g=100,v=a==="px",x=a==="%",E,M,y,S;if(a===c||!l||iy[a]||iy[c])return l;if(c!=="px"&&!v&&(l=o(t,e,i,"px")),S=t.getCTM&&vE(t),(x||c==="%")&&(La[e]||~e.indexOf("adius")))return E=S?t.getBBox()[d?"width":"height"]:t[_],Un(x?l/E*g:l/100*E);if(f[d?"width":"height"]=g+(v?c:a),M=a!=="rem"&&~e.indexOf("adius")||a==="em"&&t.appendChild&&!p?t:t.parentNode,S&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===ps||!M.appendChild)&&(M=ps.body),y=M._gsap,y&&x&&y.width&&d&&y.time===ir.time&&!y.uncache)return Un(l/y.width*g);if(x&&(e==="height"||e==="width")){var N=t.style[e];t.style[e]=g+a,E=t[_],N?t.style[e]=N:xo(t,e)}else(x||c==="%")&&!kA[Tr(M,"display")]&&(f.position=Tr(t,"position")),M===t&&(f.position="static"),M.appendChild(oo),E=oo[_],M.removeChild(oo),f.position="absolute";return d&&x&&(y=fo(M),y.time=ir.time,y.width=M[_]),Un(v?E*l/g:E&&l?g/E*l:0)},Ma=function(t,e,i,a){var l;return Gg||A_(),e in Yr&&e!=="transform"&&(e=Yr[e],~e.indexOf(",")&&(e=e.split(",")[0])),La[e]&&e!=="transform"?(l=Tc(t,a),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:Kh(Tr(t,Fi))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||a||~(l+"").indexOf("calc("))&&(l=jh[e]&&jh[e](t,e,i)||Tr(t,e)||OM(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?bs(t,e,l,i)+i:l},XA=function(t,e,i,a){if(!i||i==="none"){var l=Hl(e,t,1),c=l&&Tr(t,l,1);c&&c!==i?(e=l,i=c):e==="borderColor"&&(i=Tr(t,"borderTopColor"))}var f=new Ii(this._pt,t.style,e,0,1,uE),d=0,p=0,_,g,v,x,E,M,y,S,N,L,A,P;if(f.b=i,f.e=a,i+="",a+="",a.substring(0,6)==="var(--"&&(a=Tr(t,a.substring(4,a.indexOf(")")))),a==="auto"&&(M=t.style[e],t.style[e]=a,a=Tr(t,e)||a,M?t.style[e]=M:xo(t,e)),_=[i,a],$M(_),i=_[0],a=_[1],v=i.match(Ml)||[],P=a.match(Ml)||[],P.length){for(;g=Ml.exec(a);)y=g[0],N=a.substring(d,g.index),E?E=(E+1)%5:(N.substr(-5)==="rgba("||N.substr(-5)==="hsla(")&&(E=1),y!==(M=v[p++]||"")&&(x=parseFloat(M)||0,A=M.substr((x+"").length),y.charAt(1)==="="&&(y=Al(x,y)+A),S=parseFloat(y),L=y.substr((S+"").length),d=Ml.lastIndex-L.length,L||(L=L||sr.units[e]||A,d===a.length&&(a+=L,f.e+=L)),A!==L&&(x=bs(t,e,M,L)||0),f._pt={_next:f._pt,p:N||p===1?N:",",s:x,c:S-x,m:E&&E<4||e==="zIndex"?Math.round:0});f.c=d<a.length?a.substring(d,a.length):""}else f.r=e==="display"&&a==="none"?dE:hE;return CM.test(a)&&(f.e=0),this._pt=f,f},ry={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},WA=function(t){var e=t.split(" "),i=e[0],a=e[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(t=i,i=a,a=t),e[0]=ry[i]||i,e[1]=ry[a]||a,e.join(" ")},YA=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,a=i.style,l=e.u,c=i._gsap,f,d,p;if(l==="all"||l===!0)a.cssText="",d=1;else for(l=l.split(","),p=l.length;--p>-1;)f=l[p],La[f]&&(d=1,f=f==="transformOrigin"?Fi:Tn),xo(i,f);d&&(xo(i,Tn),c&&(c.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",Tc(i,1),c.uncache=1,pE(a)))}},jh={clearProps:function(t,e,i,a,l){if(l.data!=="isFromStart"){var c=t._pt=new Ii(t._pt,e,i,0,0,YA);return c.u=a,c.pr=-10,c.tween=l,t._props.push(i),1}}},Ec=[1,0,0,1,0,0],xE={},SE=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ay=function(t){var e=Tr(t,Tn);return SE(e)?Ec:e.substr(7).match(RM).map(Un)},Xg=function(t,e){var i=t._gsap||fo(t),a=t.style,l=ay(t),c,f,d,p;return i.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?Ec:l):(l===Ec&&!t.offsetParent&&t!==Rl&&!i.svg&&(d=a.display,a.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Rl.appendChild(t)),l=ay(t),d?a.display=d:xo(t,"display"),p&&(f?c.insertBefore(t,f):c?c.appendChild(t):Rl.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},R_=function(t,e,i,a,l,c){var f=t._gsap,d=l||Xg(t,!0),p=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,x=d[0],E=d[1],M=d[2],y=d[3],S=d[4],N=d[5],L=e.split(" "),A=parseFloat(L[0])||0,P=parseFloat(L[1])||0,z,O,F,C;i?d!==Ec&&(O=x*y-E*M)&&(F=A*(y/O)+P*(-M/O)+(M*N-y*S)/O,C=A*(-E/O)+P*(x/O)-(x*N-E*S)/O,A=F,P=C):(z=gE(t),A=z.x+(~L[0].indexOf("%")?A/100*z.width:A),P=z.y+(~(L[1]||L[0]).indexOf("%")?P/100*z.height:P)),a||a!==!1&&f.smooth?(S=A-p,N=P-_,f.xOffset=g+(S*x+N*M)-S,f.yOffset=v+(S*E+N*y)-N):f.xOffset=f.yOffset=0,f.xOrigin=A,f.yOrigin=P,f.smooth=!!a,f.origin=e,f.originIsAbsolute=!!i,t.style[Fi]="0px 0px",c&&(ms(c,f,"xOrigin",p,A),ms(c,f,"yOrigin",_,P),ms(c,f,"xOffset",g,f.xOffset),ms(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",A+" "+P)},Tc=function(t,e){var i=t._gsap||new iE(t);if("x"in i&&!e&&!i.uncache)return i;var a=t.style,l=i.scaleX<0,c="px",f="deg",d=getComputedStyle(t),p=Tr(t,Fi)||"0",_,g,v,x,E,M,y,S,N,L,A,P,z,O,F,C,R,H,Y,$,ut,st,B,X,W,mt,b,Q,gt,yt,j,dt;return _=g=v=M=y=S=N=L=A=0,x=E=1,i.svg=!!(t.getCTM&&vE(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(a[Tn]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Tn]!=="none"?d[Tn]:"")),a.scale=a.rotate=a.translate="none"),O=Xg(t,i.svg),i.svg&&(i.uncache?(W=t.getBBox(),p=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),R_(t,X||p,!!X||i.originIsAbsolute,i.smooth!==!1,O)),P=i.xOrigin||0,z=i.yOrigin||0,O!==Ec&&(H=O[0],Y=O[1],$=O[2],ut=O[3],_=st=O[4],g=B=O[5],O.length===6?(x=Math.sqrt(H*H+Y*Y),E=Math.sqrt(ut*ut+$*$),M=H||Y?il(Y,H)*to:0,N=$||ut?il($,ut)*to+M:0,N&&(E*=Math.abs(Math.cos(N*Cl))),i.svg&&(_-=P-(P*H+z*$),g-=z-(P*Y+z*ut))):(dt=O[6],yt=O[7],b=O[8],Q=O[9],gt=O[10],j=O[11],_=O[12],g=O[13],v=O[14],F=il(dt,gt),y=F*to,F&&(C=Math.cos(-F),R=Math.sin(-F),X=st*C+b*R,W=B*C+Q*R,mt=dt*C+gt*R,b=st*-R+b*C,Q=B*-R+Q*C,gt=dt*-R+gt*C,j=yt*-R+j*C,st=X,B=W,dt=mt),F=il(-$,gt),S=F*to,F&&(C=Math.cos(-F),R=Math.sin(-F),X=H*C-b*R,W=Y*C-Q*R,mt=$*C-gt*R,j=ut*R+j*C,H=X,Y=W,$=mt),F=il(Y,H),M=F*to,F&&(C=Math.cos(F),R=Math.sin(F),X=H*C+Y*R,W=st*C+B*R,Y=Y*C-H*R,B=B*C-st*R,H=X,st=W),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,S=180-S),x=Un(Math.sqrt(H*H+Y*Y+$*$)),E=Un(Math.sqrt(B*B+dt*dt)),F=il(st,B),N=Math.abs(F)>2e-4?F*to:0,A=j?1/(j<0?-j:j):0),i.svg&&(X=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!SE(Tr(t,Tn)),X&&t.setAttribute("transform",X))),Math.abs(N)>90&&Math.abs(N)<270&&(l?(x*=-1,N+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,N+=N<=0?180:-180)),e=e||i.uncache,i.x=_-((i.xPercent=_&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+c,i.y=g-((i.yPercent=g&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+c,i.z=v+c,i.scaleX=Un(x),i.scaleY=Un(E),i.rotation=Un(M)+f,i.rotationX=Un(y)+f,i.rotationY=Un(S)+f,i.skewX=N+f,i.skewY=L+f,i.transformPerspective=A+c,(i.zOrigin=parseFloat(p.split(" ")[2])||!e&&i.zOrigin||0)&&(a[Fi]=Kh(p)),i.xOffset=i.yOffset=0,i.force3D=sr.force3D,i.renderTransform=i.svg?ZA:_E?yE:qA,i.uncache=0,i},Kh=function(t){return(t=t.split(" "))[0]+" "+t[1]},Cm=function(t,e,i){var a=gi(e);return Un(parseFloat(e)+parseFloat(bs(t,"x",i+"px",a)))+a},qA=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,yE(t,e)},Ys="0deg",Xu="0px",qs=") ",yE=function(t,e){var i=e||this,a=i.xPercent,l=i.yPercent,c=i.x,f=i.y,d=i.z,p=i.rotation,_=i.rotationY,g=i.rotationX,v=i.skewX,x=i.skewY,E=i.scaleX,M=i.scaleY,y=i.transformPerspective,S=i.force3D,N=i.target,L=i.zOrigin,A="",P=S==="auto"&&t&&t!==1||S===!0;if(L&&(g!==Ys||_!==Ys)){var z=parseFloat(_)*Cl,O=Math.sin(z),F=Math.cos(z),C;z=parseFloat(g)*Cl,C=Math.cos(z),c=Cm(N,c,O*C*-L),f=Cm(N,f,-Math.sin(z)*-L),d=Cm(N,d,F*C*-L+L)}y!==Xu&&(A+="perspective("+y+qs),(a||l)&&(A+="translate("+a+"%, "+l+"%) "),(P||c!==Xu||f!==Xu||d!==Xu)&&(A+=d!==Xu||P?"translate3d("+c+", "+f+", "+d+") ":"translate("+c+", "+f+qs),p!==Ys&&(A+="rotate("+p+qs),_!==Ys&&(A+="rotateY("+_+qs),g!==Ys&&(A+="rotateX("+g+qs),(v!==Ys||x!==Ys)&&(A+="skew("+v+", "+x+qs),(E!==1||M!==1)&&(A+="scale("+E+", "+M+qs),N.style[Tn]=A||"translate(0, 0)"},ZA=function(t,e){var i=e||this,a=i.xPercent,l=i.yPercent,c=i.x,f=i.y,d=i.rotation,p=i.skewX,_=i.skewY,g=i.scaleX,v=i.scaleY,x=i.target,E=i.xOrigin,M=i.yOrigin,y=i.xOffset,S=i.yOffset,N=i.forceCSS,L=parseFloat(c),A=parseFloat(f),P,z,O,F,C;d=parseFloat(d),p=parseFloat(p),_=parseFloat(_),_&&(_=parseFloat(_),p+=_,d+=_),d||p?(d*=Cl,p*=Cl,P=Math.cos(d)*g,z=Math.sin(d)*g,O=Math.sin(d-p)*-v,F=Math.cos(d-p)*v,p&&(_*=Cl,C=Math.tan(p-_),C=Math.sqrt(1+C*C),O*=C,F*=C,_&&(C=Math.tan(_),C=Math.sqrt(1+C*C),P*=C,z*=C)),P=Un(P),z=Un(z),O=Un(O),F=Un(F)):(P=g,F=v,z=O=0),(L&&!~(c+"").indexOf("px")||A&&!~(f+"").indexOf("px"))&&(L=bs(x,"x",c,"px"),A=bs(x,"y",f,"px")),(E||M||y||S)&&(L=Un(L+E-(E*P+M*O)+y),A=Un(A+M-(E*z+M*F)+S)),(a||l)&&(C=x.getBBox(),L=Un(L+a/100*C.width),A=Un(A+l/100*C.height)),C="matrix("+P+","+z+","+O+","+F+","+L+","+A+")",x.setAttribute("transform",C),N&&(x.style[Tn]=C)},jA=function(t,e,i,a,l){var c=360,f=ii(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?to:1),p=d-a,_=a+p+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-c)),g==="cw"&&p<0?p=(p+c*$S)%c-~~(p/c)*c:g==="ccw"&&p>0&&(p=(p-c*$S)%c-~~(p/c)*c)),t._pt=v=new Ii(t._pt,e,i,a,p,LA),v.e=_,v.u="deg",t._props.push(i),v},sy=function(t,e){for(var i in e)t[i]=e[i];return t},KA=function(t,e,i){var a=sy({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=i.style,f,d,p,_,g,v,x,E;a.svg?(p=i.getAttribute("transform"),i.setAttribute("transform",""),c[Tn]=e,f=Tc(i,1),xo(i,Tn),i.setAttribute("transform",p)):(p=getComputedStyle(i)[Tn],c[Tn]=e,f=Tc(i,1),c[Tn]=p);for(d in La)p=a[d],_=f[d],p!==_&&l.indexOf(d)<0&&(x=gi(p),E=gi(_),g=x!==E?bs(i,d,p,E):parseFloat(p),v=parseFloat(_),t._pt=new Ii(t._pt,f,d,g,v-g,T_),t._pt.u=E||0,t._props.push(d));sy(f,a)};Bi("padding,margin,Width,Radius",function(o,t){var e="Top",i="Right",a="Bottom",l="Left",c=(t<3?[e,i,a,l]:[e+l,e+i,a+i,a+l]).map(function(f){return t<2?o+f:"border"+f+o});jh[t>1?"border"+o:o]=function(f,d,p,_,g){var v,x;if(arguments.length<4)return v=c.map(function(E){return Ma(f,E,p)}),x=v.join(" "),x.split(v[0]).length===5?v[0]:x;v=(_+"").split(" "),x={},c.forEach(function(E,M){return x[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,x,g)}});var ME={name:"css",register:A_,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,a,l){var c=this._props,f=t.style,d=i.vars.startAt,p,_,g,v,x,E,M,y,S,N,L,A,P,z,O,F;Gg||A_(),this.styles=this.styles||mE(t),F=this.styles.props,this.tween=i;for(M in e)if(M!=="autoRound"&&(_=e[M],!(er[M]&&rE(M,e,i,a,t,l)))){if(x=typeof _,E=jh[M],x==="function"&&(_=_.call(i,a,t,l),x=typeof _),x==="string"&&~_.indexOf("random(")&&(_=Sc(_)),E)E(this,t,M,_,i)&&(O=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",xs.lastIndex=0,xs.test(p)||(y=gi(p),S=gi(_)),S?y!==S&&(p=bs(t,M,p,S)+S):y&&(_+=y),this.add(f,"setProperty",p,_,a,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(x!=="undefined"){if(d&&M in d?(p=typeof d[M]=="function"?d[M].call(i,a,t,l):d[M],ii(p)&&~p.indexOf("random(")&&(p=Sc(p)),gi(p+"")||p==="auto"||(p+=sr.units[M]||gi(Ma(t,M))||""),(p+"").charAt(1)==="="&&(p=Ma(t,M))):p=Ma(t,M),v=parseFloat(p),N=x==="string"&&_.charAt(1)==="="&&_.substr(0,2),N&&(_=_.substr(2)),g=parseFloat(_),M in Yr&&(M==="autoAlpha"&&(v===1&&Ma(t,"visibility")==="hidden"&&g&&(v=0),F.push("visibility",0,f.visibility),ms(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=Yr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),L=M in La,L){if(this.styles.save(M),x==="string"&&_.substring(0,6)==="var(--"&&(_=Tr(t,_.substring(4,_.indexOf(")"))),g=parseFloat(_)),A||(P=t._gsap,P.renderTransform&&!e.parseTransform||Tc(t,e.parseTransform),z=e.smoothOrigin!==!1&&P.smooth,A=this._pt=new Ii(this._pt,f,Tn,0,1,P.renderTransform,P,0,-1),A.dep=1),M==="scale")this._pt=new Ii(this._pt,P,"scaleY",P.scaleY,(N?Al(P.scaleY,N+g):g)-P.scaleY||0,T_),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(Fi,0,f[Fi]),_=WA(_),P.svg?R_(t,_,0,z,0,this):(S=parseFloat(_.split(" ")[2])||0,S!==P.zOrigin&&ms(this,P,"zOrigin",P.zOrigin,S),ms(this,f,M,Kh(p),Kh(_)));continue}else if(M==="svgOrigin"){R_(t,_,1,z,0,this);continue}else if(M in xE){jA(this,P,M,v,N?Al(v,N+_):_);continue}else if(M==="smoothOrigin"){ms(this,P,"smooth",P.smooth,_);continue}else if(M==="force3D"){P[M]=_;continue}else if(M==="transform"){KA(this,_,t);continue}}else M in f||(M=Hl(M)||M);if(L||(g||g===0)&&(v||v===0)&&!UA.test(_)&&M in f)y=(p+"").substr((v+"").length),g||(g=0),S=gi(_)||(M in sr.units?sr.units[M]:y),y!==S&&(v=bs(t,M,p,S)),this._pt=new Ii(this._pt,L?P:f,M,v,(N?Al(v,N+g):g)-v,!L&&(S==="px"||M==="zIndex")&&e.autoRound!==!1?OA:T_),this._pt.u=S||0,y!==S&&S!=="%"&&(this._pt.b=p,this._pt.r=NA);else if(M in f)XA.call(this,t,M,p,N?N+_:_);else if(M in t)this.add(t,M,p||t[M],N?N+_:_,a,l);else if(M!=="parseTransform"){Ug(M,_);continue}L||(M in f?F.push(M,0,f[M]):typeof t[M]=="function"?F.push(M,2,t[M]()):F.push(M,1,p||t[M])),c.push(M)}}O&&cE(this)},render:function(t,e){if(e.tween._time||!Vg())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ma,aliases:Yr,getSetter:function(t,e,i){var a=Yr[e];return a&&a.indexOf(",")<0&&(e=a),e in La&&e!==Fi&&(t._gsap.x||Ma(t,"x"))?i&&JS===i?e==="scale"?IA:BA:(JS=i||{})&&(e==="scale"?FA:HA):t.style&&!Cg(t.style[e])?PA:~e.indexOf("-")?zA:Fg(t,e)},core:{_removeProperty:xo,_getMatrix:Xg}};ki.utils.checkPrefix=Hl;ki.core.getStyleSaver=mE;(function(o,t,e,i){var a=Bi(o+","+t+","+e,function(l){La[l]=1});Bi(t,function(l){sr.units[l]="deg",xE[l]=1}),Yr[a[13]]=o+","+t,Bi(i,function(l){var c=l.split(":");Yr[c[1]]=a[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){sr.units[o]="px"});ki.registerPlugin(ME);var Gl=ki.registerPlugin(ME)||ki;Gl.core.Tween;function QA(o,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}function JA(o,t,e){return t&&QA(o.prototype,t),o}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var li,Lh,rr,_s,gs,wl,EE,eo,uc,TE,ba,Lr,bE,AE=function(){return li||typeof window<"u"&&(li=window.gsap)&&li.registerPlugin&&li},RE=1,Tl=[],De=[],Kr=[],cc=Date.now,C_=function(t,e){return e},$A=function(){var t=uc.core,e=t.bridge||{},i=t._scrollers,a=t._proxies;i.push.apply(i,De),a.push.apply(a,Kr),De=i,Kr=a,C_=function(c,f){return e[c](f)}},Ss=function(t,e){return~Kr.indexOf(t)&&Kr[Kr.indexOf(t)+1][e]},fc=function(t){return!!~TE.indexOf(t)},Ei=function(t,e,i,a,l){return t.addEventListener(e,i,{passive:a!==!1,capture:!!l})},Mi=function(t,e,i,a){return t.removeEventListener(e,i,!!a)},Yf="scrollLeft",qf="scrollTop",w_=function(){return ba&&ba.isPressed||De.cache++},Qh=function(t,e){var i=function a(l){if(l||l===0){RE&&(rr.history.scrollRestoration="manual");var c=ba&&ba.isPressed;l=a.v=Math.round(l)||(ba&&ba.iOS?1:0),t(l),a.cacheID=De.cache,c&&C_("ss",l)}else(e||De.cache!==a.cacheID||C_("ref"))&&(a.cacheID=De.cache,a.v=t());return a.v+a.offset};return i.offset=0,t&&i},wi={s:Yf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Qh(function(o){return arguments.length?rr.scrollTo(o,Yn.sc()):rr.pageXOffset||_s[Yf]||gs[Yf]||wl[Yf]||0})},Yn={s:qf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wi,sc:Qh(function(o){return arguments.length?rr.scrollTo(wi.sc(),o):rr.pageYOffset||_s[qf]||gs[qf]||wl[qf]||0})},Pi=function(t,e){return(e&&e._ctx&&e._ctx.selector||li.utils.toArray)(t)[0]||(typeof t=="string"&&li.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},tR=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},As=function(t,e){var i=e.s,a=e.sc;fc(t)&&(t=_s.scrollingElement||gs);var l=De.indexOf(t),c=a===Yn.sc?1:2;!~l&&(l=De.push(t)-1),De[l+c]||Ei(t,"scroll",w_);var f=De[l+c],d=f||(De[l+c]=Qh(Ss(t,i),!0)||(fc(t)?a:Qh(function(p){return arguments.length?t[i]=p:t[i]})));return d.target=t,f||(d.smooth=li.getProperty(t,"scrollBehavior")==="smooth"),d},D_=function(t,e,i){var a=t,l=t,c=cc(),f=c,d=e||50,p=Math.max(500,d*3),_=function(E,M){var y=cc();M||y-c>d?(l=a,a=E,f=c,c=y):i?a+=E:a=l+(E-l)/(y-f)*(c-f)},g=function(){l=a=i?0:a,f=c=0},v=function(E){var M=f,y=l,S=cc();return(E||E===0)&&E!==a&&_(E),c===f||S-f>p?0:(a+(i?y:-y))/((i?S:c)-M)*1e3};return{update:_,reset:g,getVelocity:v}},Wu=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},oy=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},CE=function(){uc=li.core.globals().ScrollTrigger,uc&&uc.core&&$A()},wE=function(t){return li=t||AE(),!Lh&&li&&typeof document<"u"&&document.body&&(rr=window,_s=document,gs=_s.documentElement,wl=_s.body,TE=[rr,_s,gs,wl],li.utils.clamp,bE=li.core.context||function(){},eo="onpointerenter"in wl?"pointer":"mouse",EE=Nn.isTouch=rr.matchMedia&&rr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in rr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Lr=Nn.eventTypes=("ontouchstart"in gs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return RE=0},500),CE(),Lh=1),Lh};wi.op=Yn;De.cache=0;var Nn=function(){function o(e){this.init(e)}var t=o.prototype;return t.init=function(i){Lh||wE(li)||console.warn("Please gsap.registerPlugin(Observer)"),uc||CE();var a=i.tolerance,l=i.dragMinimum,c=i.type,f=i.target,d=i.lineHeight,p=i.debounce,_=i.preventDefault,g=i.onStop,v=i.onStopDelay,x=i.ignore,E=i.wheelSpeed,M=i.event,y=i.onDragStart,S=i.onDragEnd,N=i.onDrag,L=i.onPress,A=i.onRelease,P=i.onRight,z=i.onLeft,O=i.onUp,F=i.onDown,C=i.onChangeX,R=i.onChangeY,H=i.onChange,Y=i.onToggleX,$=i.onToggleY,ut=i.onHover,st=i.onHoverEnd,B=i.onMove,X=i.ignoreCheck,W=i.isNormalizer,mt=i.onGestureStart,b=i.onGestureEnd,Q=i.onWheel,gt=i.onEnable,yt=i.onDisable,j=i.onClick,dt=i.scrollSpeed,xt=i.capture,Rt=i.allowClicks,Ct=i.lockAxis,ae=i.onLockAxis;this.target=f=Pi(f)||gs,this.vars=i,x&&(x=li.utils.toArray(x)),a=a||1e-9,l=l||0,E=E||1,dt=dt||1,c=c||"wheel,touch,pointer",p=p!==!1,d||(d=parseFloat(rr.getComputedStyle(wl).lineHeight)||22);var ne,ve,xe,Xt,k,Ve,_e,et=this,Vt=0,ge=0,Kt=i.passive||!_&&i.passive!==!1,Wt=As(f,wi),Ye=As(f,Yn),I=Wt(),w=Ye(),tt=~c.indexOf("touch")&&!~c.indexOf("pointer")&&Lr[0]==="pointerdown",pt=fc(f),ht=f.ownerDocument||_s,ct=[0,0,0],Lt=[0,0,0],Ut=0,Yt=function(){return Ut=cc()},Bt=function(Jt,he){return(et.event=Jt)&&x&&tR(Jt.target,x)||he&&tt&&Jt.pointerType!=="touch"||X&&X(Jt,he)},Tt=function(){et._vx.reset(),et._vy.reset(),ve.pause(),g&&g(et)},zt=function(){var Jt=et.deltaX=oy(ct),he=et.deltaY=oy(Lt),wt=Math.abs(Jt)>=a,ee=Math.abs(he)>=a;H&&(wt||ee)&&H(et,Jt,he,ct,Lt),wt&&(P&&et.deltaX>0&&P(et),z&&et.deltaX<0&&z(et),C&&C(et),Y&&et.deltaX<0!=Vt<0&&Y(et),Vt=et.deltaX,ct[0]=ct[1]=ct[2]=0),ee&&(F&&et.deltaY>0&&F(et),O&&et.deltaY<0&&O(et),R&&R(et),$&&et.deltaY<0!=ge<0&&$(et),ge=et.deltaY,Lt[0]=Lt[1]=Lt[2]=0),(Xt||xe)&&(B&&B(et),xe&&(y&&xe===1&&y(et),N&&N(et),xe=0),Xt=!1),Ve&&!(Ve=!1)&&ae&&ae(et),k&&(Q(et),k=!1),ne=0},Qt=function(Jt,he,wt){ct[wt]+=Jt,Lt[wt]+=he,et._vx.update(Jt),et._vy.update(he),p?ne||(ne=requestAnimationFrame(zt)):zt()},$t=function(Jt,he){Ct&&!_e&&(et.axis=_e=Math.abs(Jt)>Math.abs(he)?"x":"y",Ve=!0),_e!=="y"&&(ct[2]+=Jt,et._vx.update(Jt,!0)),_e!=="x"&&(Lt[2]+=he,et._vy.update(he,!0)),p?ne||(ne=requestAnimationFrame(zt)):zt()},Dt=function(Jt){if(!Bt(Jt,1)){Jt=Wu(Jt,_);var he=Jt.clientX,wt=Jt.clientY,ee=he-et.x,qt=wt-et.y,ce=et.isDragging;et.x=he,et.y=wt,(ce||(ee||qt)&&(Math.abs(et.startX-he)>=l||Math.abs(et.startY-wt)>=l))&&(xe=ce?2:1,ce||(et.isDragging=!0),$t(ee,qt))}},le=et.onPress=function(It){Bt(It,1)||It&&It.button||(et.axis=_e=null,ve.pause(),et.isPressed=!0,It=Wu(It),Vt=ge=0,et.startX=et.x=It.clientX,et.startY=et.y=It.clientY,et._vx.reset(),et._vy.reset(),Ei(W?f:ht,Lr[1],Dt,Kt,!0),et.deltaX=et.deltaY=0,L&&L(et))},G=et.onRelease=function(It){if(!Bt(It,1)){Mi(W?f:ht,Lr[1],Dt,!0);var Jt=!isNaN(et.y-et.startY),he=et.isDragging,wt=he&&(Math.abs(et.x-et.startX)>3||Math.abs(et.y-et.startY)>3),ee=Wu(It);!wt&&Jt&&(et._vx.reset(),et._vy.reset(),_&&Rt&&li.delayedCall(.08,function(){if(cc()-Ut>300&&!It.defaultPrevented){if(It.target.click)It.target.click();else if(ht.createEvent){var qt=ht.createEvent("MouseEvents");qt.initMouseEvent("click",!0,!0,rr,1,ee.screenX,ee.screenY,ee.clientX,ee.clientY,!1,!1,!1,!1,0,null),It.target.dispatchEvent(qt)}}})),et.isDragging=et.isGesturing=et.isPressed=!1,g&&he&&!W&&ve.restart(!0),xe&&zt(),S&&he&&S(et),A&&A(et,wt)}},Nt=function(Jt){return Jt.touches&&Jt.touches.length>1&&(et.isGesturing=!0)&&mt(Jt,et.isDragging)},Et=function(){return(et.isGesturing=!1)||b(et)},Ot=function(Jt){if(!Bt(Jt)){var he=Wt(),wt=Ye();Qt((he-I)*dt,(wt-w)*dt,1),I=he,w=wt,g&&ve.restart(!0)}},At=function(Jt){if(!Bt(Jt)){Jt=Wu(Jt,_),Q&&(k=!0);var he=(Jt.deltaMode===1?d:Jt.deltaMode===2?rr.innerHeight:1)*E;Qt(Jt.deltaX*he,Jt.deltaY*he,0),g&&!W&&ve.restart(!0)}},vt=function(Jt){if(!Bt(Jt)){var he=Jt.clientX,wt=Jt.clientY,ee=he-et.x,qt=wt-et.y;et.x=he,et.y=wt,Xt=!0,g&&ve.restart(!0),(ee||qt)&&$t(ee,qt)}},kt=function(Jt){et.event=Jt,ut(et)},se=function(Jt){et.event=Jt,st(et)},Pe=function(Jt){return Bt(Jt)||Wu(Jt,_)&&j(et)};ve=et._dc=li.delayedCall(v||.25,Tt).pause(),et.deltaX=et.deltaY=0,et._vx=D_(0,50,!0),et._vy=D_(0,50,!0),et.scrollX=Wt,et.scrollY=Ye,et.isDragging=et.isGesturing=et.isPressed=!1,bE(this),et.enable=function(It){return et.isEnabled||(Ei(pt?ht:f,"scroll",w_),c.indexOf("scroll")>=0&&Ei(pt?ht:f,"scroll",Ot,Kt,xt),c.indexOf("wheel")>=0&&Ei(f,"wheel",At,Kt,xt),(c.indexOf("touch")>=0&&EE||c.indexOf("pointer")>=0)&&(Ei(f,Lr[0],le,Kt,xt),Ei(ht,Lr[2],G),Ei(ht,Lr[3],G),Rt&&Ei(f,"click",Yt,!0,!0),j&&Ei(f,"click",Pe),mt&&Ei(ht,"gesturestart",Nt),b&&Ei(ht,"gestureend",Et),ut&&Ei(f,eo+"enter",kt),st&&Ei(f,eo+"leave",se),B&&Ei(f,eo+"move",vt)),et.isEnabled=!0,et.isDragging=et.isGesturing=et.isPressed=Xt=xe=!1,et._vx.reset(),et._vy.reset(),I=Wt(),w=Ye(),It&&It.type&&le(It),gt&&gt(et)),et},et.disable=function(){et.isEnabled&&(Tl.filter(function(It){return It!==et&&fc(It.target)}).length||Mi(pt?ht:f,"scroll",w_),et.isPressed&&(et._vx.reset(),et._vy.reset(),Mi(W?f:ht,Lr[1],Dt,!0)),Mi(pt?ht:f,"scroll",Ot,xt),Mi(f,"wheel",At,xt),Mi(f,Lr[0],le,xt),Mi(ht,Lr[2],G),Mi(ht,Lr[3],G),Mi(f,"click",Yt,!0),Mi(f,"click",Pe),Mi(ht,"gesturestart",Nt),Mi(ht,"gestureend",Et),Mi(f,eo+"enter",kt),Mi(f,eo+"leave",se),Mi(f,eo+"move",vt),et.isEnabled=et.isPressed=et.isDragging=!1,yt&&yt(et))},et.kill=et.revert=function(){et.disable();var It=Tl.indexOf(et);It>=0&&Tl.splice(It,1),ba===et&&(ba=0)},Tl.push(et),W&&fc(f)&&(ba=et),et.enable(M)},JA(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();Nn.version="3.13.0";Nn.create=function(o){return new Nn(o)};Nn.register=wE;Nn.getAll=function(){return Tl.slice()};Nn.getById=function(o){return Tl.filter(function(t){return t.vars.id===o})[0]};AE()&&li.registerPlugin(Nn);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Zt,Sl,we,_n,nr,Qe,Wg,Jh,bc,hc,tc,Zf,mi,ld,U_,Ai,ly,uy,yl,DE,wm,UE,bi,L_,LE,NE,fs,N_,Yg,Dl,qg,$h,O_,Dm,jf=1,_i=Date.now,Um=_i(),br=0,ec=0,cy=function(t,e,i){var a=tr(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=a,a?t.substr(6,t.length-7):t},fy=function(t,e){return e&&(!tr(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},eR=function o(){return ec&&requestAnimationFrame(o)},hy=function(){return ld=1},dy=function(){return ld=0},kr=function(t){return t},nc=function(t){return Math.round(t*1e5)/1e5||0},OE=function(){return typeof window<"u"},PE=function(){return Zt||OE()&&(Zt=window.gsap)&&Zt.registerPlugin&&Zt},So=function(t){return!!~Wg.indexOf(t)},zE=function(t){return(t==="Height"?qg:we["inner"+t])||nr["client"+t]||Qe["client"+t]},BE=function(t){return Ss(t,"getBoundingClientRect")||(So(t)?function(){return Bh.width=we.innerWidth,Bh.height=qg,Bh}:function(){return Ea(t)})},nR=function(t,e,i){var a=i.d,l=i.d2,c=i.a;return(c=Ss(t,"getBoundingClientRect"))?function(){return c()[a]}:function(){return(e?zE(l):t["client"+l])||0}},iR=function(t,e){return!e||~Kr.indexOf(t)?BE(t):function(){return Bh}},qr=function(t,e){var i=e.s,a=e.d2,l=e.d,c=e.a;return Math.max(0,(i="scroll"+a)&&(c=Ss(t,i))?c()-BE(t)()[l]:So(t)?(nr[i]||Qe[i])-zE(a):t[i]-t["offset"+a])},Kf=function(t,e){for(var i=0;i<yl.length;i+=3)(!e||~e.indexOf(yl[i+1]))&&t(yl[i],yl[i+1],yl[i+2])},tr=function(t){return typeof t=="string"},vi=function(t){return typeof t=="function"},ic=function(t){return typeof t=="number"},no=function(t){return typeof t=="object"},Yu=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},Lm=function(t,e){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t)}):e(t);i&&i.totalTime&&(t.callbackAnimation=i)}},rl=Math.abs,IE="left",FE="top",Zg="right",jg="bottom",_o="width",go="height",dc="Right",pc="Left",mc="Top",_c="Bottom",In="padding",xr="margin",Vl="Width",Kg="Height",Wn="px",Sr=function(t){return we.getComputedStyle(t)},rR=function(t){var e=Sr(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},py=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Ea=function(t,e){var i=e&&Sr(t)[U_]!=="matrix(1, 0, 0, 1, 0, 0)"&&Zt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=t.getBoundingClientRect();return i&&i.progress(0).kill(),a},td=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},HE=function(t){var e=[],i=t.labels,a=t.duration(),l;for(l in i)e.push(i[l]/a);return e},aR=function(t){return function(e){return Zt.utils.snap(HE(t),e)}},Qg=function(t){var e=Zt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(a,l){return a-l});return i?function(a,l,c){c===void 0&&(c=.001);var f;if(!l)return e(a);if(l>0){for(a-=c,f=0;f<i.length;f++)if(i[f]>=a)return i[f];return i[f-1]}else for(f=i.length,a+=c;f--;)if(i[f]<=a)return i[f];return i[0]}:function(a,l,c){c===void 0&&(c=.001);var f=e(a);return!l||Math.abs(f-a)<c||f-a<0==l<0?f:e(l<0?a-t:a+t)}},sR=function(t){return function(e,i){return Qg(HE(t))(e,i.direction)}},Qf=function(t,e,i,a){return i.split(",").forEach(function(l){return t(e,l,a)})},ni=function(t,e,i,a,l){return t.addEventListener(e,i,{passive:!a,capture:!!l})},ei=function(t,e,i,a){return t.removeEventListener(e,i,!!a)},Jf=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},my={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$f={toggleActions:"play",anticipatePin:0},ed={top:0,left:0,center:.5,bottom:1,right:1},Nh=function(t,e){if(tr(t)){var i=t.indexOf("="),a=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(a*=e/100),t=t.substr(0,i-1)),t=a+(t in ed?ed[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},th=function(t,e,i,a,l,c,f,d){var p=l.startColor,_=l.endColor,g=l.fontSize,v=l.indent,x=l.fontWeight,E=_n.createElement("div"),M=So(i)||Ss(i,"pinType")==="fixed",y=t.indexOf("scroller")!==-1,S=M?Qe:i,N=t.indexOf("start")!==-1,L=N?p:_,A="border-color:"+L+";font-size:"+g+";color:"+L+";font-weight:"+x+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return A+="position:"+((y||d)&&M?"fixed;":"absolute;"),(y||d||!M)&&(A+=(a===Yn?Zg:jg)+":"+(c+parseFloat(v))+"px;"),f&&(A+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),E._isStart=N,E.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),E.style.cssText=A,E.innerText=e||e===0?t+"-"+e:t,S.children[0]?S.insertBefore(E,S.children[0]):S.appendChild(E),E._offset=E["offset"+a.op.d2],Oh(E,0,a,N),E},Oh=function(t,e,i,a){var l={display:"block"},c=i[a?"os2":"p2"],f=i[a?"p2":"os2"];t._isFlipped=a,l[i.a+"Percent"]=a?-100:0,l[i.a]=a?"1px":0,l["border"+c+Vl]=1,l["border"+f+Vl]=0,l[i.p]=e+"px",Zt.set(t,l)},be=[],P_={},Ac,_y=function(){return _i()-br>34&&(Ac||(Ac=requestAnimationFrame(wa)))},al=function(){(!bi||!bi.isPressed||bi.startX>Qe.clientWidth)&&(De.cache++,bi?Ac||(Ac=requestAnimationFrame(wa)):wa(),br||Mo("scrollStart"),br=_i())},Nm=function(){NE=we.innerWidth,LE=we.innerHeight},rc=function(t){De.cache++,(t===!0||!mi&&!UE&&!_n.fullscreenElement&&!_n.webkitFullscreenElement&&(!L_||NE!==we.innerWidth||Math.abs(we.innerHeight-LE)>we.innerHeight*.25))&&Jh.restart(!0)},yo={},oR=[],GE=function o(){return ei(Oe,"scrollEnd",o)||lo(!0)},Mo=function(t){return yo[t]&&yo[t].map(function(e){return e()})||oR},$i=[],VE=function(t){for(var e=0;e<$i.length;e+=5)(!t||$i[e+4]&&$i[e+4].query===t)&&($i[e].style.cssText=$i[e+1],$i[e].getBBox&&$i[e].setAttribute("transform",$i[e+2]||""),$i[e+3].uncache=1)},Jg=function(t,e){var i;for(Ai=0;Ai<be.length;Ai++)i=be[Ai],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));$h=!0,e&&VE(e),e||Mo("revert")},kE=function(t,e){De.cache++,(e||!Ri)&&De.forEach(function(i){return vi(i)&&i.cacheID++&&(i.rec=0)}),tr(t)&&(we.history.scrollRestoration=Yg=t)},Ri,vo=0,gy,lR=function(){if(gy!==vo){var t=gy=vo;requestAnimationFrame(function(){return t===vo&&lo(!0)})}},XE=function(){Qe.appendChild(Dl),qg=!bi&&Dl.offsetHeight||we.innerHeight,Qe.removeChild(Dl)},vy=function(t){return bc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},lo=function(t,e){if(nr=_n.documentElement,Qe=_n.body,Wg=[we,_n,nr,Qe],br&&!t&&!$h){ni(Oe,"scrollEnd",GE);return}XE(),Ri=Oe.isRefreshing=!0,De.forEach(function(a){return vi(a)&&++a.cacheID&&(a.rec=a())});var i=Mo("refreshInit");DE&&Oe.sort(),e||Jg(),De.forEach(function(a){vi(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),be.slice(0).forEach(function(a){return a.refresh()}),$h=!1,be.forEach(function(a){if(a._subPinOffset&&a.pin){var l=a.vars.horizontal?"offsetWidth":"offsetHeight",c=a.pin[l];a.revert(!0,1),a.adjustPinSpacing(a.pin[l]-c),a.refresh()}}),O_=1,vy(!0),be.forEach(function(a){var l=qr(a.scroller,a._dir),c=a.vars.end==="max"||a._endClamp&&a.end>l,f=a._startClamp&&a.start>=l;(c||f)&&a.setPositions(f?l-1:a.start,c?Math.max(f?l:a.start+1,l):a.end,!0)}),vy(!1),O_=0,i.forEach(function(a){return a&&a.render&&a.render(-1)}),De.forEach(function(a){vi(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),kE(Yg,1),Jh.pause(),vo++,Ri=2,wa(2),be.forEach(function(a){return vi(a.vars.onRefresh)&&a.vars.onRefresh(a)}),Ri=Oe.isRefreshing=!1,Mo("refresh")},z_=0,Ph=1,gc,wa=function(t){if(t===2||!Ri&&!$h){Oe.isUpdating=!0,gc&&gc.update(0);var e=be.length,i=_i(),a=i-Um>=50,l=e&&be[0].scroll();if(Ph=z_>l?-1:1,Ri||(z_=l),a&&(br&&!ld&&i-br>200&&(br=0,Mo("scrollEnd")),tc=Um,Um=i),Ph<0){for(Ai=e;Ai-- >0;)be[Ai]&&be[Ai].update(0,a);Ph=1}else for(Ai=0;Ai<e;Ai++)be[Ai]&&be[Ai].update(0,a);Oe.isUpdating=!1}Ac=0},B_=[IE,FE,jg,Zg,xr+_c,xr+dc,xr+mc,xr+pc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zh=B_.concat([_o,go,"boxSizing","max"+Vl,"max"+Kg,"position",xr,In,In+mc,In+dc,In+_c,In+pc]),uR=function(t,e,i){Ul(i);var a=t._gsap;if(a.spacerIsNative)Ul(a.spacerState);else if(t._gsap.swappedIn){var l=e.parentNode;l&&(l.insertBefore(t,e),l.removeChild(e))}t._gsap.swappedIn=!1},Om=function(t,e,i,a){if(!t._gsap.swappedIn){for(var l=B_.length,c=e.style,f=t.style,d;l--;)d=B_[l],c[d]=i[d];c.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(c.display="inline-block"),f[jg]=f[Zg]="auto",c.flexBasis=i.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[_o]=td(t,wi)+Wn,c[go]=td(t,Yn)+Wn,c[In]=f[xr]=f[FE]=f[IE]="0",Ul(a),f[_o]=f["max"+Vl]=i[_o],f[go]=f["max"+Kg]=i[go],f[In]=i[In],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},cR=/([A-Z])/g,Ul=function(t){if(t){var e=t.t.style,i=t.length,a=0,l,c;for((t.t._gsap||Zt.core.getCache(t.t)).uncache=1;a<i;a+=2)c=t[a+1],l=t[a],c?e[l]=c:e[l]&&e.removeProperty(l.replace(cR,"-$1").toLowerCase())}},eh=function(t){for(var e=zh.length,i=t.style,a=[],l=0;l<e;l++)a.push(zh[l],i[zh[l]]);return a.t=t,a},fR=function(t,e,i){for(var a=[],l=t.length,c=i?8:0,f;c<l;c+=2)f=t[c],a.push(f,f in e?e[f]:t[c+1]);return a.t=t.t,a},Bh={left:0,top:0},xy=function(t,e,i,a,l,c,f,d,p,_,g,v,x,E){vi(t)&&(t=t(d)),tr(t)&&t.substr(0,3)==="max"&&(t=v+(t.charAt(4)==="="?Nh("0"+t.substr(3),i):0));var M=x?x.time():0,y,S,N;if(x&&x.seek(0),isNaN(t)||(t=+t),ic(t))x&&(t=Zt.utils.mapRange(x.scrollTrigger.start,x.scrollTrigger.end,0,v,t)),f&&Oh(f,i,a,!0);else{vi(e)&&(e=e(d));var L=(t||"0").split(" "),A,P,z,O;N=Pi(e,d)||Qe,A=Ea(N)||{},(!A||!A.left&&!A.top)&&Sr(N).display==="none"&&(O=N.style.display,N.style.display="block",A=Ea(N),O?N.style.display=O:N.style.removeProperty("display")),P=Nh(L[0],A[a.d]),z=Nh(L[1]||"0",i),t=A[a.p]-p[a.p]-_+P+l-z,f&&Oh(f,z,a,i-z<20||f._isStart&&z>20),i-=i-z}if(E&&(d[E]=t||-.001,t<0&&(t=0)),c){var F=t+i,C=c._isStart;y="scroll"+a.d2,Oh(c,F,a,C&&F>20||!C&&(g?Math.max(Qe[y],nr[y]):c.parentNode[y])<=F+1),g&&(p=Ea(f),g&&(c.style[a.op.p]=p[a.op.p]-a.op.m-c._offset+Wn))}return x&&N&&(y=Ea(N),x.seek(v),S=Ea(N),x._caScrollDist=y[a.p]-S[a.p],t=t/x._caScrollDist*v),x&&x.seek(M),x?t:Math.round(t)},hR=/(webkit|moz|length|cssText|inset)/i,Sy=function(t,e,i,a){if(t.parentNode!==e){var l=t.style,c,f;if(e===Qe){t._stOrig=l.cssText,f=Sr(t);for(c in f)!+c&&!hR.test(c)&&f[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=f[c]);l.top=i,l.left=a}else l.cssText=t._stOrig;Zt.core.getCache(t).uncache=1,e.appendChild(t)}},WE=function(t,e,i){var a=e,l=a;return function(c){var f=Math.round(t());return f!==a&&f!==l&&Math.abs(f-a)>3&&Math.abs(f-l)>3&&(c=f,i&&i()),l=a,a=Math.round(c),a}},nh=function(t,e,i){var a={};a[e.p]="+="+i,Zt.set(t,a)},yy=function(t,e){var i=As(t,e),a="_scroll"+e.p2,l=function c(f,d,p,_,g){var v=c.tween,x=d.onComplete,E={};p=p||i();var M=WE(i,p,function(){v.kill(),c.tween=0});return g=_&&g||0,_=_||f-p,v&&v.kill(),d[a]=f,d.inherit=!1,d.modifiers=E,E[a]=function(){return M(p+_*v.ratio+g*v.ratio*v.ratio)},d.onUpdate=function(){De.cache++,c.tween&&wa()},d.onComplete=function(){c.tween=0,x&&x.call(v)},v=c.tween=Zt.to(t,d),v};return t[a]=i,i.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},ni(t,"wheel",i.wheelHandler),Oe.isTouch&&ni(t,"touchmove",i.wheelHandler),l},Oe=function(){function o(e,i){Sl||o.register(Zt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),N_(this),this.init(e,i)}var t=o.prototype;return t.init=function(i,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ec){this.update=this.refresh=this.kill=kr;return}i=py(tr(i)||ic(i)||i.nodeType?{trigger:i}:i,$f);var l=i,c=l.onUpdate,f=l.toggleClass,d=l.id,p=l.onToggle,_=l.onRefresh,g=l.scrub,v=l.trigger,x=l.pin,E=l.pinSpacing,M=l.invalidateOnRefresh,y=l.anticipatePin,S=l.onScrubComplete,N=l.onSnapComplete,L=l.once,A=l.snap,P=l.pinReparent,z=l.pinSpacer,O=l.containerAnimation,F=l.fastScrollEnd,C=l.preventOverlaps,R=i.horizontal||i.containerAnimation&&i.horizontal!==!1?wi:Yn,H=!g&&g!==0,Y=Pi(i.scroller||we),$=Zt.core.getCache(Y),ut=So(Y),st=("pinType"in i?i.pinType:Ss(Y,"pinType")||ut&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],X=H&&i.toggleActions.split(" "),W="markers"in i?i.markers:$f.markers,mt=ut?0:parseFloat(Sr(Y)["border"+R.p2+Vl])||0,b=this,Q=i.onRefreshInit&&function(){return i.onRefreshInit(b)},gt=nR(Y,ut,R),yt=iR(Y,ut),j=0,dt=0,xt=0,Rt=As(Y,R),Ct,ae,ne,ve,xe,Xt,k,Ve,_e,et,Vt,ge,Kt,Wt,Ye,I,w,tt,pt,ht,ct,Lt,Ut,Yt,Bt,Tt,zt,Qt,$t,Dt,le,G,Nt,Et,Ot,At,vt,kt,se;if(b._startClamp=b._endClamp=!1,b._dir=R,y*=45,b.scroller=Y,b.scroll=O?O.time.bind(O):Rt,ve=Rt(),b.vars=i,a=a||i.animation,"refreshPriority"in i&&(DE=1,i.refreshPriority===-9999&&(gc=b)),$.tweenScroll=$.tweenScroll||{top:yy(Y,Yn),left:yy(Y,wi)},b.tweenTo=Ct=$.tweenScroll[R.p],b.scrubDuration=function(wt){Nt=ic(wt)&&wt,Nt?G?G.duration(wt):G=Zt.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Nt,paused:!0,onComplete:function(){return S&&S(b)}}):(G&&G.progress(1).kill(),G=0)},a&&(a.vars.lazy=!1,a._initted&&!b.isReverted||a.vars.immediateRender!==!1&&i.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),b.animation=a.pause(),a.scrollTrigger=b,b.scrubDuration(g),Dt=0,d||(d=a.vars.id)),A&&((!no(A)||A.push)&&(A={snapTo:A}),"scrollBehavior"in Qe.style&&Zt.set(ut?[Qe,nr]:Y,{scrollBehavior:"auto"}),De.forEach(function(wt){return vi(wt)&&wt.target===(ut?_n.scrollingElement||nr:Y)&&(wt.smooth=!1)}),ne=vi(A.snapTo)?A.snapTo:A.snapTo==="labels"?aR(a):A.snapTo==="labelsDirectional"?sR(a):A.directional!==!1?function(wt,ee){return Qg(A.snapTo)(wt,_i()-dt<500?0:ee.direction)}:Zt.utils.snap(A.snapTo),Et=A.duration||{min:.1,max:2},Et=no(Et)?hc(Et.min,Et.max):hc(Et,Et),Ot=Zt.delayedCall(A.delay||Nt/2||.1,function(){var wt=Rt(),ee=_i()-dt<500,qt=Ct.tween;if((ee||Math.abs(b.getVelocity())<10)&&!qt&&!ld&&j!==wt){var ce=(wt-Xt)/Wt,yn=a&&!H?a.totalProgress():ce,Me=ee?0:(yn-le)/(_i()-tc)*1e3||0,Je=Zt.utils.clamp(-ce,1-ce,rl(Me/2)*Me/.185),gn=ce+(A.inertia===!1?0:Je),qe,Fe,Ue=A,Gn=Ue.onStart,ke=Ue.onInterrupt,He=Ue.onComplete;if(qe=ne(gn,b),ic(qe)||(qe=gn),Fe=Math.max(0,Math.round(Xt+qe*Wt)),wt<=k&&wt>=Xt&&Fe!==wt){if(qt&&!qt._initted&&qt.data<=rl(Fe-wt))return;A.inertia===!1&&(Je=qe-ce),Ct(Fe,{duration:Et(rl(Math.max(rl(gn-yn),rl(qe-yn))*.185/Me/.05||0)),ease:A.ease||"power3",data:rl(Fe-wt),onInterrupt:function(){return Ot.restart(!0)&&ke&&ke(b)},onComplete:function(){b.update(),j=Rt(),a&&!H&&(G?G.resetTo("totalProgress",qe,a._tTime/a._tDur):a.progress(qe)),Dt=le=a&&!H?a.totalProgress():b.progress,N&&N(b),He&&He(b)}},wt,Je*Wt,Fe-wt-Je*Wt),Gn&&Gn(b,Ct.tween)}}else b.isActive&&j!==wt&&Ot.restart(!0)}).pause()),d&&(P_[d]=b),v=b.trigger=Pi(v||x!==!0&&x),se=v&&v._gsap&&v._gsap.stRevert,se&&(se=se(b)),x=x===!0?v:Pi(x),tr(f)&&(f={targets:v,className:f}),x&&(E===!1||E===xr||(E=!E&&x.parentNode&&x.parentNode.style&&Sr(x.parentNode).display==="flex"?!1:In),b.pin=x,ae=Zt.core.getCache(x),ae.spacer?Ye=ae.pinState:(z&&(z=Pi(z),z&&!z.nodeType&&(z=z.current||z.nativeElement),ae.spacerIsNative=!!z,z&&(ae.spacerState=eh(z))),ae.spacer=tt=z||_n.createElement("div"),tt.classList.add("pin-spacer"),d&&tt.classList.add("pin-spacer-"+d),ae.pinState=Ye=eh(x)),i.force3D!==!1&&Zt.set(x,{force3D:!0}),b.spacer=tt=ae.spacer,$t=Sr(x),Yt=$t[E+R.os2],ht=Zt.getProperty(x),ct=Zt.quickSetter(x,R.a,Wn),Om(x,tt,$t),w=eh(x)),W){ge=no(W)?py(W,my):my,et=th("scroller-start",d,Y,R,ge,0),Vt=th("scroller-end",d,Y,R,ge,0,et),pt=et["offset"+R.op.d2];var Pe=Pi(Ss(Y,"content")||Y);Ve=this.markerStart=th("start",d,Pe,R,ge,pt,0,O),_e=this.markerEnd=th("end",d,Pe,R,ge,pt,0,O),O&&(kt=Zt.quickSetter([Ve,_e],R.a,Wn)),!st&&!(Kr.length&&Ss(Y,"fixedMarkers")===!0)&&(rR(ut?Qe:Y),Zt.set([et,Vt],{force3D:!0}),Tt=Zt.quickSetter(et,R.a,Wn),Qt=Zt.quickSetter(Vt,R.a,Wn))}if(O){var It=O.vars.onUpdate,Jt=O.vars.onUpdateParams;O.eventCallback("onUpdate",function(){b.update(0,0,1),It&&It.apply(O,Jt||[])})}if(b.previous=function(){return be[be.indexOf(b)-1]},b.next=function(){return be[be.indexOf(b)+1]},b.revert=function(wt,ee){if(!ee)return b.kill(!0);var qt=wt!==!1||!b.enabled,ce=mi;qt!==b.isReverted&&(qt&&(At=Math.max(Rt(),b.scroll.rec||0),xt=b.progress,vt=a&&a.progress()),Ve&&[Ve,_e,et,Vt].forEach(function(yn){return yn.style.display=qt?"none":"block"}),qt&&(mi=b,b.update(qt)),x&&(!P||!b.isActive)&&(qt?uR(x,tt,Ye):Om(x,tt,Sr(x),Bt)),qt||b.update(qt),mi=ce,b.isReverted=qt)},b.refresh=function(wt,ee,qt,ce){if(!((mi||!b.enabled)&&!ee)){if(x&&wt&&br){ni(o,"scrollEnd",GE);return}!Ri&&Q&&Q(b),mi=b,Ct.tween&&!qt&&(Ct.tween.kill(),Ct.tween=0),G&&G.pause(),M&&a&&(a.revert({kill:!1}).invalidate(),a.getChildren&&a.getChildren(!0,!0,!1).forEach(function(pe){return pe.vars.immediateRender&&pe.render(0,!0,!0)})),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var yn=gt(),Me=yt(),Je=O?O.duration():qr(Y,R),gn=Wt<=.01||!Wt,qe=0,Fe=ce||0,Ue=no(qt)?qt.end:i.end,Gn=i.endTrigger||v,ke=no(qt)?qt.start:i.start||(i.start===0||!v?0:x?"0 0":"0 100%"),He=b.pinnedContainer=i.pinnedContainer&&Pi(i.pinnedContainer,b),Si=v&&Math.max(0,be.indexOf(b))||0,bn=Si,un,U,K,ot,it,Z,bt,Pt,Gt,Ft,ie,re,te;for(W&&no(qt)&&(re=Zt.getProperty(et,R.p),te=Zt.getProperty(Vt,R.p));bn-- >0;)Z=be[bn],Z.end||Z.refresh(0,1)||(mi=b),bt=Z.pin,bt&&(bt===v||bt===x||bt===He)&&!Z.isReverted&&(Ft||(Ft=[]),Ft.unshift(Z),Z.revert(!0,!0)),Z!==be[bn]&&(Si--,bn--);for(vi(ke)&&(ke=ke(b)),ke=cy(ke,"start",b),Xt=xy(ke,v,yn,R,Rt(),Ve,et,b,Me,mt,st,Je,O,b._startClamp&&"_startClamp")||(x?-.001:0),vi(Ue)&&(Ue=Ue(b)),tr(Ue)&&!Ue.indexOf("+=")&&(~Ue.indexOf(" ")?Ue=(tr(ke)?ke.split(" ")[0]:"")+Ue:(qe=Nh(Ue.substr(2),yn),Ue=tr(ke)?ke:(O?Zt.utils.mapRange(0,O.duration(),O.scrollTrigger.start,O.scrollTrigger.end,Xt):Xt)+qe,Gn=v)),Ue=cy(Ue,"end",b),k=Math.max(Xt,xy(Ue||(Gn?"100% 0":Je),Gn,yn,R,Rt()+qe,_e,Vt,b,Me,mt,st,Je,O,b._endClamp&&"_endClamp"))||-.001,qe=0,bn=Si;bn--;)Z=be[bn],bt=Z.pin,bt&&Z.start-Z._pinPush<=Xt&&!O&&Z.end>0&&(un=Z.end-(b._startClamp?Math.max(0,Z.start):Z.start),(bt===v&&Z.start-Z._pinPush<Xt||bt===He)&&isNaN(ke)&&(qe+=un*(1-Z.progress)),bt===x&&(Fe+=un));if(Xt+=qe,k+=qe,b._startClamp&&(b._startClamp+=qe),b._endClamp&&!Ri&&(b._endClamp=k||-.001,k=Math.min(k,qr(Y,R))),Wt=k-Xt||(Xt-=.01)&&.001,gn&&(xt=Zt.utils.clamp(0,1,Zt.utils.normalize(Xt,k,At))),b._pinPush=Fe,Ve&&qe&&(un={},un[R.a]="+="+qe,He&&(un[R.p]="-="+Rt()),Zt.set([Ve,_e],un)),x&&!(O_&&b.end>=qr(Y,R)))un=Sr(x),ot=R===Yn,K=Rt(),Lt=parseFloat(ht(R.a))+Fe,!Je&&k>1&&(ie=(ut?_n.scrollingElement||nr:Y).style,ie={style:ie,value:ie["overflow"+R.a.toUpperCase()]},ut&&Sr(Qe)["overflow"+R.a.toUpperCase()]!=="scroll"&&(ie.style["overflow"+R.a.toUpperCase()]="scroll")),Om(x,tt,un),w=eh(x),U=Ea(x,!0),Pt=st&&As(Y,ot?wi:Yn)(),E?(Bt=[E+R.os2,Wt+Fe+Wn],Bt.t=tt,bn=E===In?td(x,R)+Wt+Fe:0,bn&&(Bt.push(R.d,bn+Wn),tt.style.flexBasis!=="auto"&&(tt.style.flexBasis=bn+Wn)),Ul(Bt),He&&be.forEach(function(pe){pe.pin===He&&pe.vars.pinSpacing!==!1&&(pe._subPinOffset=!0)}),st&&Rt(At)):(bn=td(x,R),bn&&tt.style.flexBasis!=="auto"&&(tt.style.flexBasis=bn+Wn)),st&&(it={top:U.top+(ot?K-Xt:Pt)+Wn,left:U.left+(ot?Pt:K-Xt)+Wn,boxSizing:"border-box",position:"fixed"},it[_o]=it["max"+Vl]=Math.ceil(U.width)+Wn,it[go]=it["max"+Kg]=Math.ceil(U.height)+Wn,it[xr]=it[xr+mc]=it[xr+dc]=it[xr+_c]=it[xr+pc]="0",it[In]=un[In],it[In+mc]=un[In+mc],it[In+dc]=un[In+dc],it[In+_c]=un[In+_c],it[In+pc]=un[In+pc],I=fR(Ye,it,P),Ri&&Rt(0)),a?(Gt=a._initted,wm(1),a.render(a.duration(),!0,!0),Ut=ht(R.a)-Lt+Wt+Fe,zt=Math.abs(Wt-Ut)>1,st&&zt&&I.splice(I.length-2,2),a.render(0,!0,!0),Gt||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),wm(0)):Ut=Wt,ie&&(ie.value?ie.style["overflow"+R.a.toUpperCase()]=ie.value:ie.style.removeProperty("overflow-"+R.a));else if(v&&Rt()&&!O)for(U=v.parentNode;U&&U!==Qe;)U._pinOffset&&(Xt-=U._pinOffset,k-=U._pinOffset),U=U.parentNode;Ft&&Ft.forEach(function(pe){return pe.revert(!1,!0)}),b.start=Xt,b.end=k,ve=xe=Ri?At:Rt(),!O&&!Ri&&(ve<At&&Rt(At),b.scroll.rec=0),b.revert(!1,!0),dt=_i(),Ot&&(j=-1,Ot.restart(!0)),mi=0,a&&H&&(a._initted||vt)&&a.progress()!==vt&&a.progress(vt||0,!0).render(a.time(),!0,!0),(gn||xt!==b.progress||O||M||a&&!a._initted)&&(a&&!H&&(a._initted||xt||a.vars.immediateRender!==!1)&&a.totalProgress(O&&Xt<-.001&&!xt?Zt.utils.normalize(Xt,k,0):xt,!0),b.progress=gn||(ve-Xt)/Wt===xt?0:xt),x&&E&&(tt._pinOffset=Math.round(b.progress*Ut)),G&&G.invalidate(),isNaN(re)||(re-=Zt.getProperty(et,R.p),te-=Zt.getProperty(Vt,R.p),nh(et,R,re),nh(Ve,R,re-(ce||0)),nh(Vt,R,te),nh(_e,R,te-(ce||0))),gn&&!Ri&&b.update(),_&&!Ri&&!Kt&&(Kt=!0,_(b),Kt=!1)}},b.getVelocity=function(){return(Rt()-xe)/(_i()-tc)*1e3||0},b.endAnimation=function(){Yu(b.callbackAnimation),a&&(G?G.progress(1):a.paused()?H||Yu(a,b.direction<0,1):Yu(a,a.reversed()))},b.labelToScroll=function(wt){return a&&a.labels&&(Xt||b.refresh()||Xt)+a.labels[wt]/a.duration()*Wt||0},b.getTrailing=function(wt){var ee=be.indexOf(b),qt=b.direction>0?be.slice(0,ee).reverse():be.slice(ee+1);return(tr(wt)?qt.filter(function(ce){return ce.vars.preventOverlaps===wt}):qt).filter(function(ce){return b.direction>0?ce.end<=Xt:ce.start>=k})},b.update=function(wt,ee,qt){if(!(O&&!qt&&!wt)){var ce=Ri===!0?At:b.scroll(),yn=wt?0:(ce-Xt)/Wt,Me=yn<0?0:yn>1?1:yn||0,Je=b.progress,gn,qe,Fe,Ue,Gn,ke,He,Si;if(ee&&(xe=ve,ve=O?Rt():ce,A&&(le=Dt,Dt=a&&!H?a.totalProgress():Me)),y&&x&&!mi&&!jf&&br&&(!Me&&Xt<ce+(ce-xe)/(_i()-tc)*y?Me=1e-4:Me===1&&k>ce+(ce-xe)/(_i()-tc)*y&&(Me=.9999)),Me!==Je&&b.enabled){if(gn=b.isActive=!!Me&&Me<1,qe=!!Je&&Je<1,ke=gn!==qe,Gn=ke||!!Me!=!!Je,b.direction=Me>Je?1:-1,b.progress=Me,Gn&&!mi&&(Fe=Me&&!Je?0:Me===1?1:Je===1?2:3,H&&(Ue=!ke&&X[Fe+1]!=="none"&&X[Fe+1]||X[Fe],Si=a&&(Ue==="complete"||Ue==="reset"||Ue in a))),C&&(ke||Si)&&(Si||g||!a)&&(vi(C)?C(b):b.getTrailing(C).forEach(function(K){return K.endAnimation()})),H||(G&&!mi&&!jf?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",Me,a._tTime/a._tDur):(G.vars.totalProgress=Me,G.invalidate().restart())):a&&a.totalProgress(Me,!!(mi&&(dt||wt)))),x){if(wt&&E&&(tt.style[E+R.os2]=Yt),!st)ct(nc(Lt+Ut*Me));else if(Gn){if(He=!wt&&Me>Je&&k+1>ce&&ce+1>=qr(Y,R),P)if(!wt&&(gn||He)){var bn=Ea(x,!0),un=ce-Xt;Sy(x,Qe,bn.top+(R===Yn?un:0)+Wn,bn.left+(R===Yn?0:un)+Wn)}else Sy(x,tt);Ul(gn||He?I:w),zt&&Me<1&&gn||ct(Lt+(Me===1&&!He?Ut:0))}}A&&!Ct.tween&&!mi&&!jf&&Ot.restart(!0),f&&(ke||L&&Me&&(Me<1||!Dm))&&bc(f.targets).forEach(function(K){return K.classList[gn||L?"add":"remove"](f.className)}),c&&!H&&!wt&&c(b),Gn&&!mi?(H&&(Si&&(Ue==="complete"?a.pause().totalProgress(1):Ue==="reset"?a.restart(!0).pause():Ue==="restart"?a.restart(!0):a[Ue]()),c&&c(b)),(ke||!Dm)&&(p&&ke&&Lm(b,p),B[Fe]&&Lm(b,B[Fe]),L&&(Me===1?b.kill(!1,1):B[Fe]=0),ke||(Fe=Me===1?1:3,B[Fe]&&Lm(b,B[Fe]))),F&&!gn&&Math.abs(b.getVelocity())>(ic(F)?F:2500)&&(Yu(b.callbackAnimation),G?G.progress(1):Yu(a,Ue==="reverse"?1:!Me,1))):H&&c&&!mi&&c(b)}if(Qt){var U=O?ce/O.duration()*(O._caScrollDist||0):ce;Tt(U+(et._isFlipped?1:0)),Qt(U)}kt&&kt(-ce/O.duration()*(O._caScrollDist||0))}},b.enable=function(wt,ee){b.enabled||(b.enabled=!0,ni(Y,"resize",rc),ut||ni(Y,"scroll",al),Q&&ni(o,"refreshInit",Q),wt!==!1&&(b.progress=xt=0,ve=xe=j=Rt()),ee!==!1&&b.refresh())},b.getTween=function(wt){return wt&&Ct?Ct.tween:G},b.setPositions=function(wt,ee,qt,ce){if(O){var yn=O.scrollTrigger,Me=O.duration(),Je=yn.end-yn.start;wt=yn.start+Je*wt/Me,ee=yn.start+Je*ee/Me}b.refresh(!1,!1,{start:fy(wt,qt&&!!b._startClamp),end:fy(ee,qt&&!!b._endClamp)},ce),b.update()},b.adjustPinSpacing=function(wt){if(Bt&&wt){var ee=Bt.indexOf(R.d)+1;Bt[ee]=parseFloat(Bt[ee])+wt+Wn,Bt[1]=parseFloat(Bt[1])+wt+Wn,Ul(Bt)}},b.disable=function(wt,ee){if(b.enabled&&(wt!==!1&&b.revert(!0,!0),b.enabled=b.isActive=!1,ee||G&&G.pause(),At=0,ae&&(ae.uncache=1),Q&&ei(o,"refreshInit",Q),Ot&&(Ot.pause(),Ct.tween&&Ct.tween.kill()&&(Ct.tween=0)),!ut)){for(var qt=be.length;qt--;)if(be[qt].scroller===Y&&be[qt]!==b)return;ei(Y,"resize",rc),ut||ei(Y,"scroll",al)}},b.kill=function(wt,ee){b.disable(wt,ee),G&&!ee&&G.kill(),d&&delete P_[d];var qt=be.indexOf(b);qt>=0&&be.splice(qt,1),qt===Ai&&Ph>0&&Ai--,qt=0,be.forEach(function(ce){return ce.scroller===b.scroller&&(qt=1)}),qt||Ri||(b.scroll.rec=0),a&&(a.scrollTrigger=null,wt&&a.revert({kill:!1}),ee||a.kill()),Ve&&[Ve,_e,et,Vt].forEach(function(ce){return ce.parentNode&&ce.parentNode.removeChild(ce)}),gc===b&&(gc=0),x&&(ae&&(ae.uncache=1),qt=0,be.forEach(function(ce){return ce.pin===x&&qt++}),qt||(ae.spacer=0)),i.onKill&&i.onKill(b)},be.push(b),b.enable(!1,!1),se&&se(b),a&&a.add&&!Wt){var he=b.update;b.update=function(){b.update=he,De.cache++,Xt||k||b.refresh()},Zt.delayedCall(.01,b.update),Wt=.01,Xt=k=0}else b.refresh();x&&lR()},o.register=function(i){return Sl||(Zt=i||PE(),OE()&&window.document&&o.enable(),Sl=ec),Sl},o.defaults=function(i){if(i)for(var a in i)$f[a]=i[a];return $f},o.disable=function(i,a){ec=0,be.forEach(function(c){return c[a?"kill":"disable"](i)}),ei(we,"wheel",al),ei(_n,"scroll",al),clearInterval(Zf),ei(_n,"touchcancel",kr),ei(Qe,"touchstart",kr),Qf(ei,_n,"pointerdown,touchstart,mousedown",hy),Qf(ei,_n,"pointerup,touchend,mouseup",dy),Jh.kill(),Kf(ei);for(var l=0;l<De.length;l+=3)Jf(ei,De[l],De[l+1]),Jf(ei,De[l],De[l+2])},o.enable=function(){if(we=window,_n=document,nr=_n.documentElement,Qe=_n.body,Zt&&(bc=Zt.utils.toArray,hc=Zt.utils.clamp,N_=Zt.core.context||kr,wm=Zt.core.suppressOverwrites||kr,Yg=we.history.scrollRestoration||"auto",z_=we.pageYOffset||0,Zt.core.globals("ScrollTrigger",o),Qe)){ec=1,Dl=document.createElement("div"),Dl.style.height="100vh",Dl.style.position="absolute",XE(),eR(),Nn.register(Zt),o.isTouch=Nn.isTouch,fs=Nn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),L_=Nn.isTouch===1,ni(we,"wheel",al),Wg=[we,_n,nr,Qe],Zt.matchMedia?(o.matchMedia=function(p){var _=Zt.matchMedia(),g;for(g in p)_.add(g,p[g]);return _},Zt.addEventListener("matchMediaInit",function(){return Jg()}),Zt.addEventListener("matchMediaRevert",function(){return VE()}),Zt.addEventListener("matchMedia",function(){lo(0,1),Mo("matchMedia")}),Zt.matchMedia().add("(orientation: portrait)",function(){return Nm(),Nm})):console.warn("Requires GSAP 3.11.0 or later"),Nm(),ni(_n,"scroll",al);var i=Qe.hasAttribute("style"),a=Qe.style,l=a.borderTopStyle,c=Zt.core.Animation.prototype,f,d;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),a.borderTopStyle="solid",f=Ea(Qe),Yn.m=Math.round(f.top+Yn.sc())||0,wi.m=Math.round(f.left+wi.sc())||0,l?a.borderTopStyle=l:a.removeProperty("border-top-style"),i||(Qe.setAttribute("style",""),Qe.removeAttribute("style")),Zf=setInterval(_y,250),Zt.delayedCall(.5,function(){return jf=0}),ni(_n,"touchcancel",kr),ni(Qe,"touchstart",kr),Qf(ni,_n,"pointerdown,touchstart,mousedown",hy),Qf(ni,_n,"pointerup,touchend,mouseup",dy),U_=Zt.utils.checkPrefix("transform"),zh.push(U_),Sl=_i(),Jh=Zt.delayedCall(.2,lo).pause(),yl=[_n,"visibilitychange",function(){var p=we.innerWidth,_=we.innerHeight;_n.hidden?(ly=p,uy=_):(ly!==p||uy!==_)&&rc()},_n,"DOMContentLoaded",lo,we,"load",lo,we,"resize",rc],Kf(ni),be.forEach(function(p){return p.enable(0,1)}),d=0;d<De.length;d+=3)Jf(ei,De[d],De[d+1]),Jf(ei,De[d],De[d+2])}},o.config=function(i){"limitCallbacks"in i&&(Dm=!!i.limitCallbacks);var a=i.syncInterval;a&&clearInterval(Zf)||(Zf=a)&&setInterval(_y,a),"ignoreMobileResize"in i&&(L_=o.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Kf(ei)||Kf(ni,i.autoRefreshEvents||"none"),UE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(i,a){var l=Pi(i),c=De.indexOf(l),f=So(l);~c&&De.splice(c,f?6:2),a&&(f?Kr.unshift(we,a,Qe,a,nr,a):Kr.unshift(l,a))},o.clearMatchMedia=function(i){be.forEach(function(a){return a._ctx&&a._ctx.query===i&&a._ctx.kill(!0,!0)})},o.isInViewport=function(i,a,l){var c=(tr(i)?Pi(i):i).getBoundingClientRect(),f=c[l?_o:go]*a||0;return l?c.right-f>0&&c.left+f<we.innerWidth:c.bottom-f>0&&c.top+f<we.innerHeight},o.positionInViewport=function(i,a,l){tr(i)&&(i=Pi(i));var c=i.getBoundingClientRect(),f=c[l?_o:go],d=a==null?f/2:a in ed?ed[a]*f:~a.indexOf("%")?parseFloat(a)*f/100:parseFloat(a)||0;return l?(c.left+d)/we.innerWidth:(c.top+d)/we.innerHeight},o.killAll=function(i){if(be.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),i!==!0){var a=yo.killAll||[];yo={},a.forEach(function(l){return l()})}},o}();Oe.version="3.13.0";Oe.saveStyles=function(o){return o?bc(o).forEach(function(t){if(t&&t.style){var e=$i.indexOf(t);e>=0&&$i.splice(e,5),$i.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Zt.core.getCache(t),N_())}}):$i};Oe.revert=function(o,t){return Jg(!o,t)};Oe.create=function(o,t){return new Oe(o,t)};Oe.refresh=function(o){return o?rc(!0):(Sl||Oe.register())&&lo(!0)};Oe.update=function(o){return++De.cache&&wa(o===!0?2:0)};Oe.clearScrollMemory=kE;Oe.maxScroll=function(o,t){return qr(o,t?wi:Yn)};Oe.getScrollFunc=function(o,t){return As(Pi(o),t?wi:Yn)};Oe.getById=function(o){return P_[o]};Oe.getAll=function(){return be.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Oe.isScrolling=function(){return!!br};Oe.snapDirectional=Qg;Oe.addEventListener=function(o,t){var e=yo[o]||(yo[o]=[]);~e.indexOf(t)||e.push(t)};Oe.removeEventListener=function(o,t){var e=yo[o],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};Oe.batch=function(o,t){var e=[],i={},a=t.interval||.016,l=t.batchMax||1e9,c=function(p,_){var g=[],v=[],x=Zt.delayedCall(a,function(){_(g,v),g=[],v=[]}).pause();return function(E){g.length||x.restart(!0),g.push(E.trigger),v.push(E),l<=g.length&&x.progress(1)}},f;for(f in t)i[f]=f.substr(0,2)==="on"&&vi(t[f])&&f!=="onRefreshInit"?c(f,t[f]):t[f];return vi(l)&&(l=l(),ni(Oe,"refresh",function(){return l=t.batchMax()})),bc(o).forEach(function(d){var p={};for(f in i)p[f]=i[f];p.trigger=d,e.push(Oe.create(p))}),e};var My=function(t,e,i,a){return e>a?t(a):e<0&&t(0),i>a?(a-e)/(i-e):i<0?e/(e-i):1},Pm=function o(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Nn.isTouch?" pinch-zoom":""):"none",t===nr&&o(Qe,e)},ih={auto:1,scroll:1},dR=function(t){var e=t.event,i=t.target,a=t.axis,l=(e.changedTouches?e.changedTouches[0]:e).target,c=l._gsap||Zt.core.getCache(l),f=_i(),d;if(!c._isScrollT||f-c._isScrollT>2e3){for(;l&&l!==Qe&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(ih[(d=Sr(l)).overflowY]||ih[d.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==i&&!So(l)&&(ih[(d=Sr(l)).overflowY]||ih[d.overflowX]),c._isScrollT=f}(c._isScroll||a==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},YE=function(t,e,i,a){return Nn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:a=a&&dR,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return i&&ni(_n,Nn.eventTypes[0],Ty,!1,!0)},onDisable:function(){return ei(_n,Nn.eventTypes[0],Ty,!0)}})},pR=/(input|label|select|textarea)/i,Ey,Ty=function(t){var e=pR.test(t.target.tagName);(e||Ey)&&(t._gsapAllow=!0,Ey=e)},mR=function(t){no(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,a=e.momentum,l=e.allowNestedScroll,c=e.onRelease,f,d,p=Pi(t.target)||nr,_=Zt.core.globals().ScrollSmoother,g=_&&_.get(),v=fs&&(t.content&&Pi(t.content)||g&&t.content!==!1&&!g.smooth()&&g.content()),x=As(p,Yn),E=As(p,wi),M=1,y=(Nn.isTouch&&we.visualViewport?we.visualViewport.scale*we.visualViewport.width:we.outerWidth)/we.innerWidth,S=0,N=vi(a)?function(){return a(f)}:function(){return a||2.8},L,A,P=YE(p,t.type,!0,l),z=function(){return A=!1},O=kr,F=kr,C=function(){d=qr(p,Yn),F=hc(fs?1:0,d),i&&(O=hc(0,qr(p,wi))),L=vo},R=function(){v._gsap.y=nc(parseFloat(v._gsap.y)+x.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",x.offset=x.cacheID=0},H=function(){if(A){requestAnimationFrame(z);var W=nc(f.deltaY/2),mt=F(x.v-W);if(v&&mt!==x.v+x.offset){x.offset=mt-x.v;var b=nc((parseFloat(v&&v._gsap.y)||0)-x.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",v._gsap.y=b+"px",x.cacheID=De.cache,wa()}return!0}x.offset&&R(),A=!0},Y,$,ut,st,B=function(){C(),Y.isActive()&&Y.vars.scrollY>d&&(x()>d?Y.progress(1)&&x(d):Y.resetTo("scrollY",d))};return v&&Zt.set(v,{y:"+=0"}),t.ignoreCheck=function(X){return fs&&X.type==="touchmove"&&H()||M>1.05&&X.type!=="touchstart"||f.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){A=!1;var X=M;M=nc((we.visualViewport&&we.visualViewport.scale||1)/y),Y.pause(),X!==M&&Pm(p,M>1.01?!0:i?!1:"x"),$=E(),ut=x(),C(),L=vo},t.onRelease=t.onGestureStart=function(X,W){if(x.offset&&R(),!W)st.restart(!0);else{De.cache++;var mt=N(),b,Q;i&&(b=E(),Q=b+mt*.05*-X.velocityX/.227,mt*=My(E,b,Q,qr(p,wi)),Y.vars.scrollX=O(Q)),b=x(),Q=b+mt*.05*-X.velocityY/.227,mt*=My(x,b,Q,qr(p,Yn)),Y.vars.scrollY=F(Q),Y.invalidate().duration(mt).play(.01),(fs&&Y.vars.scrollY>=d||b>=d-1)&&Zt.to({},{onUpdate:B,duration:mt})}c&&c(X)},t.onWheel=function(){Y._ts&&Y.pause(),_i()-S>1e3&&(L=0,S=_i())},t.onChange=function(X,W,mt,b,Q){if(vo!==L&&C(),W&&i&&E(O(b[2]===W?$+(X.startX-X.x):E()+W-b[1])),mt){x.offset&&R();var gt=Q[2]===mt,yt=gt?ut+X.startY-X.y:x()+mt-Q[1],j=F(yt);gt&&yt!==j&&(ut+=j-yt),x(j)}(mt||W)&&wa()},t.onEnable=function(){Pm(p,i?!1:"x"),Oe.addEventListener("refresh",B),ni(we,"resize",B),x.smooth&&(x.target.style.scrollBehavior="auto",x.smooth=E.smooth=!1),P.enable()},t.onDisable=function(){Pm(p,!0),ei(we,"resize",B),Oe.removeEventListener("refresh",B),P.kill()},t.lockAxis=t.lockAxis!==!1,f=new Nn(t),f.iOS=fs,fs&&!x()&&x(1),fs&&Zt.ticker.add(kr),st=f._dc,Y=Zt.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:WE(x,x(),function(){return Y.pause()})},onUpdate:wa,onComplete:st.vars.onComplete}),f};Oe.sort=function(o){if(vi(o))return be.sort(o);var t=we.pageYOffset||0;return Oe.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+we.innerHeight}),be.sort(o||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Oe.observe=function(o){return new Nn(o)};Oe.normalizeScroll=function(o){if(typeof o>"u")return bi;if(o===!0&&bi)return bi.enable();if(o===!1){bi&&bi.kill(),bi=o;return}var t=o instanceof Nn?o:mR(o);return bi&&bi.target===t.target&&bi.kill(),So(t.target)&&(bi=t),t};Oe.core={_getVelocityProp:D_,_inputObserver:YE,_scrollers:De,_proxies:Kr,bridge:{ss:function(){br||Mo("scrollStart"),br=_i()},ref:function(){return mi}}};PE()&&Zt.registerPlugin(Oe);/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let by=typeof document<"u"?jr.useLayoutEffect:jr.useEffect,Ay=o=>o&&!Array.isArray(o)&&typeof o=="object",rh=[],_R={},qE=Gl;const ud=(o,t=rh)=>{let e=_R;Ay(o)?(e=o,o=null,t="dependencies"in e?e.dependencies:rh):Ay(t)&&(e=t,t="dependencies"in e?e.dependencies:rh),o&&typeof o!="function"&&console.warn("First parameter must be a function or config object");const{scope:i,revertOnUpdate:a}=e,l=jr.useRef(!1),c=jr.useRef(qE.context(()=>{},i)),f=jr.useRef(p=>c.current.add(null,p)),d=t&&t.length&&!a;return d&&by(()=>(l.current=!0,()=>c.current.revert()),rh),by(()=>{if(o&&c.current.add(o,i),!d||!l.current)return()=>c.current.revert()},t),{context:c.current,contextSafe:f.current}};ud.register=o=>{qE=o};ud.headless=!0;Gl.registerPlugin(Oe);const gR=({children:o,className:t=""})=>{const e=jr.useRef(null);return ud(()=>{const i=Gl.context(()=>{Gl.fromTo(e.current,{y:50,opacity:0},{y:0,opacity:1,duration:1,scrollTrigger:{trigger:e.current,start:"top bottom-=100",toggleActions:"play reverse play reverse"}})},e);return()=>i.revert()},[]),Ae.jsx("div",{ref:e,className:t,children:o})},vR=({text:o,className:t,id:e})=>Ae.jsx("a",{onClick:i=>{i.preventDefault();const a=document.getElementById("counter");if(a&&e){const l=window.innerHeight*.15,c=a.getBoundingClientRect().top+window.pageYOffset-l;window.scrollTo({top:c,behavior:"smooth"})}},className:`${t??""} cta-wrapper`,children:Ae.jsxs("div",{className:"cta-button group",children:[Ae.jsx("div",{className:"bg-circle"}),Ae.jsx("p",{className:"text",children:o}),Ae.jsx("div",{className:"arrow-wrapper",children:Ae.jsx("img",{src:"/images/arrow-down.svg",alt:"arrow"})})]})}),xR=[{text:"Creative",imgPath:"/images/hero/creative.svg"},{text:"Develop",imgPath:"/images/hero/develop.svg"},{text:"Designs",imgPath:"/images/hero/designs.svg"},{text:"Code",imgPath:"/images/hero/code.svg"},{text:"Ideas",imgPath:"/images/hero/ideas.svg"},{text:"Testing",imgPath:"/images/hero/ideas.svg"},{text:"Designs",imgPath:"/images/hero/designs.svg"},{text:"Code",imgPath:"/images/hero/code.svg"}],SR=[{name:"github",imgPath:"/images/socialicons/github.png",link:"https://github.com/PrathibhaSithu"},{name:"linkedin",imgPath:"/images/socialicons/linkedin.png",link:"https://www.linkedin.com/in/prathisithumini"},{name:"google dev",imgPath:"/images/socialicons/googledev.png",link:"https://g.dev/prathibhasithumini_dev"},{name:"instagram",imgPath:"/images/socialicons/instagram.png",link:"https://www.instagram.com/prathibhasithumini/"},{name:"facebook",imgPath:"/images/socialicons/facebook.png",link:"https://www.facebook.com/PrathibhaSithumini"}];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $g="178",yR=0,Ry=1,MR=2,ZE=1,ER=2,Sa=3,Rs=0,Hi=1,Ta=2,ys=0,Ll=1,Cy=2,wy=3,Dy=4,TR=5,ao=100,bR=101,AR=102,RR=103,CR=104,wR=200,DR=201,UR=202,LR=203,I_=204,F_=205,NR=206,OR=207,PR=208,zR=209,BR=210,IR=211,FR=212,HR=213,GR=214,H_=0,G_=1,V_=2,kl=3,k_=4,X_=5,W_=6,Y_=7,jE=0,VR=1,kR=2,Ms=0,XR=1,WR=2,YR=3,qR=4,ZR=5,jR=6,KR=7,KE=300,Xl=301,Wl=302,q_=303,Z_=304,cd=306,j_=1e3,uo=1001,K_=1002,Pr=1003,QR=1004,ah=1005,Zr=1006,zm=1007,co=1008,Na=1009,QE=1010,JE=1011,Rc=1012,t0=1013,Eo=1014,Aa=1015,Lc=1016,e0=1017,n0=1018,Cc=1020,$E=35902,tT=1021,eT=1022,Or=1023,wc=1026,Dc=1027,nT=1028,i0=1029,iT=1030,r0=1031,a0=1033,Ih=33776,Fh=33777,Hh=33778,Gh=33779,Q_=35840,J_=35841,$_=35842,tg=35843,eg=36196,ng=37492,ig=37496,rg=37808,ag=37809,sg=37810,og=37811,lg=37812,ug=37813,cg=37814,fg=37815,hg=37816,dg=37817,pg=37818,mg=37819,_g=37820,gg=37821,Vh=36492,vg=36494,xg=36495,rT=36283,Sg=36284,yg=36285,Mg=36286,JR=3200,$R=3201,tC=0,eC=1,hs="",vr="srgb",Yl="srgb-linear",nd="linear",on="srgb",sl=7680,Uy=519,nC=512,iC=513,rC=514,aT=515,aC=516,sC=517,oC=518,lC=519,Ly=35044,Ny="300 es",Ra=2e3,id=2001;class Zl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const l=a.indexOf(e);l!==-1&&a.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,t);t.target=null}}}const di=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bm=Math.PI/180,Eg=180/Math.PI;function Nc(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(di[o&255]+di[o>>8&255]+di[o>>16&255]+di[o>>24&255]+"-"+di[t&255]+di[t>>8&255]+"-"+di[t>>16&15|64]+di[t>>24&255]+"-"+di[e&63|128]+di[e>>8&255]+"-"+di[e>>16&255]+di[e>>24&255]+di[i&255]+di[i>>8&255]+di[i>>16&255]+di[i>>24&255]).toLowerCase()}function Be(o,t,e){return Math.max(t,Math.min(e,o))}function uC(o,t){return(o%t+t)%t}function Im(o,t,e){return(1-e)*o+e*t}function qu(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Oi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ln{constructor(t=0,e=0){ln.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Be(this.x,t.x,e.x),this.y=Be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Be(this.x,t,e),this.y=Be(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),l=this.x-t.x,c=this.y-t.y;return this.x=l*i-c*a+t.x,this.y=l*a+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oc{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,l,c,f){let d=i[a+0],p=i[a+1],_=i[a+2],g=i[a+3];const v=l[c+0],x=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(f===1){t[e+0]=v,t[e+1]=x,t[e+2]=E,t[e+3]=M;return}if(g!==M||d!==v||p!==x||_!==E){let y=1-f;const S=d*v+p*x+_*E+g*M,N=S>=0?1:-1,L=1-S*S;if(L>Number.EPSILON){const P=Math.sqrt(L),z=Math.atan2(P,S*N);y=Math.sin(y*z)/P,f=Math.sin(f*z)/P}const A=f*N;if(d=d*y+v*A,p=p*y+x*A,_=_*y+E*A,g=g*y+M*A,y===1-f){const P=1/Math.sqrt(d*d+p*p+_*_+g*g);d*=P,p*=P,_*=P,g*=P}}t[e]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,a,l,c){const f=i[a],d=i[a+1],p=i[a+2],_=i[a+3],g=l[c],v=l[c+1],x=l[c+2],E=l[c+3];return t[e]=f*E+_*g+d*x-p*v,t[e+1]=d*E+_*v+p*g-f*x,t[e+2]=p*E+_*x+f*v-d*g,t[e+3]=_*E-f*g-d*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,l=t._z,c=t._order,f=Math.cos,d=Math.sin,p=f(i/2),_=f(a/2),g=f(l/2),v=d(i/2),x=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=v*_*g+p*x*E,this._y=p*x*g-v*_*E,this._z=p*_*E+v*x*g,this._w=p*_*g-v*x*E;break;case"YXZ":this._x=v*_*g+p*x*E,this._y=p*x*g-v*_*E,this._z=p*_*E-v*x*g,this._w=p*_*g+v*x*E;break;case"ZXY":this._x=v*_*g-p*x*E,this._y=p*x*g+v*_*E,this._z=p*_*E+v*x*g,this._w=p*_*g-v*x*E;break;case"ZYX":this._x=v*_*g-p*x*E,this._y=p*x*g+v*_*E,this._z=p*_*E-v*x*g,this._w=p*_*g+v*x*E;break;case"YZX":this._x=v*_*g+p*x*E,this._y=p*x*g+v*_*E,this._z=p*_*E-v*x*g,this._w=p*_*g-v*x*E;break;case"XZY":this._x=v*_*g-p*x*E,this._y=p*x*g-v*_*E,this._z=p*_*E+v*x*g,this._w=p*_*g+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],l=e[8],c=e[1],f=e[5],d=e[9],p=e[2],_=e[6],g=e[10],v=i+f+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(_-d)*x,this._y=(l-p)*x,this._z=(c-a)*x}else if(i>f&&i>g){const x=2*Math.sqrt(1+i-f-g);this._w=(_-d)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(l+p)/x}else if(f>g){const x=2*Math.sqrt(1+f-i-g);this._w=(l-p)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(d+_)/x}else{const x=2*Math.sqrt(1+g-i-f);this._w=(c-a)/x,this._x=(l+p)/x,this._y=(d+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,l=t._z,c=t._w,f=e._x,d=e._y,p=e._z,_=e._w;return this._x=i*_+c*f+a*p-l*d,this._y=a*_+c*d+l*f-i*p,this._z=l*_+c*p+i*d-a*f,this._w=c*_-i*f-a*d-l*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,a=this._y,l=this._z,c=this._w;let f=c*t._w+i*t._x+a*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=i,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const x=1-e;return this._w=x*c+e*this._w,this._x=x*i+e*this._x,this._y=x*a+e*this._y,this._z=x*l+e*this._z,this.normalize(),this}const p=Math.sqrt(d),_=Math.atan2(p,f),g=Math.sin((1-e)*_)/p,v=Math.sin(e*_)/p;return this._w=c*g+this._w*v,this._x=i*g+this._x*v,this._y=a*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ft{constructor(t=0,e=0,i=0){ft.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oy.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oy.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*a,this.y=l[1]*e+l[4]*i+l[7]*a,this.z=l[2]*e+l[5]*i+l[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=t.elements,c=1/(l[3]*e+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*e+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*e+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,l=t.x,c=t.y,f=t.z,d=t.w,p=2*(c*a-f*i),_=2*(f*e-l*a),g=2*(l*i-c*e);return this.x=e+d*p+c*g-f*_,this.y=i+d*_+f*p-l*g,this.z=a+d*g+l*_-c*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*a,this.y=l[1]*e+l[5]*i+l[9]*a,this.z=l[2]*e+l[6]*i+l[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Be(this.x,t.x,e.x),this.y=Be(this.y,t.y,e.y),this.z=Be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Be(this.x,t,e),this.y=Be(this.y,t,e),this.z=Be(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,l=t.z,c=e.x,f=e.y,d=e.z;return this.x=a*d-l*f,this.y=l*c-i*d,this.z=i*f-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fm.copy(this).projectOnVector(t),this.sub(Fm)}reflect(t){return this.sub(Fm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fm=new ft,Oy=new Oc;class ye{constructor(t,e,i,a,l,c,f,d,p){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,c,f,d,p)}set(t,e,i,a,l,c,f,d,p){const _=this.elements;return _[0]=t,_[1]=a,_[2]=f,_[3]=e,_[4]=l,_[5]=d,_[6]=i,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,c=i[0],f=i[3],d=i[6],p=i[1],_=i[4],g=i[7],v=i[2],x=i[5],E=i[8],M=a[0],y=a[3],S=a[6],N=a[1],L=a[4],A=a[7],P=a[2],z=a[5],O=a[8];return l[0]=c*M+f*N+d*P,l[3]=c*y+f*L+d*z,l[6]=c*S+f*A+d*O,l[1]=p*M+_*N+g*P,l[4]=p*y+_*L+g*z,l[7]=p*S+_*A+g*O,l[2]=v*M+x*N+E*P,l[5]=v*y+x*L+E*z,l[8]=v*S+x*A+E*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8];return e*c*_-e*f*p-i*l*_+i*f*d+a*l*p-a*c*d}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8],g=_*c-f*p,v=f*d-_*l,x=p*l-c*d,E=e*g+i*v+a*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(a*p-_*i)*M,t[2]=(f*i-a*c)*M,t[3]=v*M,t[4]=(_*e-a*d)*M,t[5]=(a*l-f*e)*M,t[6]=x*M,t[7]=(i*d-p*e)*M,t[8]=(c*e-i*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(i*d,i*p,-i*(d*c+p*f)+c+t,-a*p,a*d,-a*(-p*c+d*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(Hm.makeScale(t,e)),this}rotate(t){return this.premultiply(Hm.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hm.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hm=new ye;function sT(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function rd(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function cC(){const o=rd("canvas");return o.style.display="block",o}const Py={};function Nl(o){o in Py||(Py[o]=!0,console.warn(o))}function fC(o,t,e){return new Promise(function(i,a){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}function hC(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dC(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zy=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),By=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pC(){const o={enabled:!0,workingColorSpace:Yl,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===on&&(a.r=Da(a.r),a.g=Da(a.g),a.b=Da(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===on&&(a.r=Ol(a.r),a.g=Ol(a.g),a.b=Ol(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===hs?nd:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Nl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Nl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(a,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Yl]:{primaries:t,whitePoint:i,transfer:nd,toXYZ:zy,fromXYZ:By,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:vr},outputColorSpaceConfig:{drawingBufferColorSpace:vr}},[vr]:{primaries:t,whitePoint:i,transfer:on,toXYZ:zy,fromXYZ:By,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:vr}}}),o}const We=pC();function Da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ol(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ol;class mC{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ol===void 0&&(ol=rd("canvas")),ol.width=t.width,ol.height=t.height;const a=ol.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=ol}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rd("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Da(l[c]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Da(e[i]/255)*255):e[i]=Da(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _C=0;class s0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_C++}),this.uuid=Nc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Gm(a[c].image)):l.push(Gm(a[c]))}else l=Gm(a);i.url=l}return e||(t.images[this.uuid]=i),i}}function Gm(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?mC.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gC=0;const Vm=new ft;class Gi extends Zl{constructor(t=Gi.DEFAULT_IMAGE,e=Gi.DEFAULT_MAPPING,i=uo,a=uo,l=Zr,c=co,f=Or,d=Na,p=Gi.DEFAULT_ANISOTROPY,_=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gC++}),this.uuid=Nc(),this.name="",this.source=new s0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new ln(0,0),this.repeat=new ln(1,1),this.center=new ln(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vm).x}get height(){return this.source.getSize(Vm).y}get depth(){return this.source.getSize(Vm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==KE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case j_:t.x=t.x-Math.floor(t.x);break;case uo:t.x=t.x<0?0:1;break;case K_:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case j_:t.y=t.y-Math.floor(t.y);break;case uo:t.y=t.y<0?0:1;break;case K_:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gi.DEFAULT_IMAGE=null;Gi.DEFAULT_MAPPING=KE;Gi.DEFAULT_ANISOTROPY=1;class Ln{constructor(t=0,e=0,i=0,a=1){Ln.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*e+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*e+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*e+c[7]*i+c[11]*a+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,l;const d=t.elements,p=d[0],_=d[4],g=d[8],v=d[1],x=d[5],E=d[9],M=d[2],y=d[6],S=d[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+y)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(p+1)/2,A=(x+1)/2,P=(S+1)/2,z=(_+v)/4,O=(g+M)/4,F=(E+y)/4;return L>A&&L>P?L<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(L),a=z/i,l=O/i):A>P?A<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(A),i=z/a,l=F/a):P<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(P),i=O/l,a=F/l),this.set(i,a,l,e),this}let N=Math.sqrt((y-E)*(y-E)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(g-M)/N,this.z=(v-_)/N,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Be(this.x,t.x,e.x),this.y=Be(this.y,t.y,e.y),this.z=Be(this.z,t.z,e.z),this.w=Be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Be(this.x,t,e),this.y=Be(this.y,t,e),this.z=Be(this.z,t,e),this.w=Be(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vC extends Zl{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ln(0,0,t,e),this.scissorTest=!1,this.viewport=new Ln(0,0,t,e);const a={width:t,height:e,depth:i.depth},l=new Gi(a);this.textures=[];const c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Zr,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new s0(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class To extends vC{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class oT extends Gi{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=Pr,this.minFilter=Pr,this.wrapR=uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xC extends Gi{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=Pr,this.minFilter=Pr,this.wrapR=uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pc{constructor(t=new ft(1/0,1/0,1/0),e=new ft(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wr.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wr.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=wr.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,wr):wr.fromBufferAttribute(l,c),wr.applyMatrix4(t.matrixWorld),this.expandByPoint(wr);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sh.copy(i.boundingBox)),sh.applyMatrix4(t.matrixWorld),this.union(sh)}const a=t.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wr),wr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zu),oh.subVectors(this.max,Zu),ll.subVectors(t.a,Zu),ul.subVectors(t.b,Zu),cl.subVectors(t.c,Zu),as.subVectors(ul,ll),ss.subVectors(cl,ul),Zs.subVectors(ll,cl);let e=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Zs.z,Zs.y,as.z,0,-as.x,ss.z,0,-ss.x,Zs.z,0,-Zs.x,-as.y,as.x,0,-ss.y,ss.x,0,-Zs.y,Zs.x,0];return!km(e,ll,ul,cl,oh)||(e=[1,0,0,0,1,0,0,0,1],!km(e,ll,ul,cl,oh))?!1:(lh.crossVectors(as,ss),e=[lh.x,lh.y,lh.z],km(e,ll,ul,cl,oh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wr).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wr).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new ft,new ft,new ft,new ft,new ft,new ft,new ft,new ft],wr=new ft,sh=new Pc,ll=new ft,ul=new ft,cl=new ft,as=new ft,ss=new ft,Zs=new ft,Zu=new ft,oh=new ft,lh=new ft,js=new ft;function km(o,t,e,i,a){for(let l=0,c=o.length-3;l<=c;l+=3){js.fromArray(o,l);const f=a.x*Math.abs(js.x)+a.y*Math.abs(js.y)+a.z*Math.abs(js.z),d=t.dot(js),p=e.dot(js),_=i.dot(js);if(Math.max(-Math.max(d,p,_),Math.min(d,p,_))>f)return!1}return!0}const SC=new Pc,ju=new ft,Xm=new ft;class fd{constructor(t=new ft,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):SC.setFromPoints(t).getCenter(i);let a=0;for(let l=0,c=t.length;l<c;l++)a=Math.max(a,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ju.subVectors(t,this.center);const e=ju.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(ju,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ju.copy(t.center).add(Xm)),this.expandByPoint(ju.copy(t.center).sub(Xm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const _a=new ft,Wm=new ft,uh=new ft,os=new ft,Ym=new ft,ch=new ft,qm=new ft;class lT{constructor(t=new ft,e=new ft(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_a)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_a.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_a.copy(this.origin).addScaledVector(this.direction,e),_a.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){Wm.copy(t).add(e).multiplyScalar(.5),uh.copy(e).sub(t).normalize(),os.copy(this.origin).sub(Wm);const l=t.distanceTo(e)*.5,c=-this.direction.dot(uh),f=os.dot(this.direction),d=-os.dot(uh),p=os.lengthSq(),_=Math.abs(1-c*c);let g,v,x,E;if(_>0)if(g=c*d-f,v=c*f-d,E=l*_,g>=0)if(v>=-E)if(v<=E){const M=1/_;g*=M,v*=M,x=g*(g+c*v+2*f)+v*(c*g+v+2*d)+p}else v=l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*d)+p;else v=-l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*d)+p;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+p):v<=E?(g=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+p):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+p);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*d)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Wm).addScaledVector(uh,v),x}intersectSphere(t,e){_a.subVectors(t.center,this.origin);const i=_a.dot(this.direction),a=_a.dot(_a)-i*i,l=t.radius*t.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=i-c,d=i+c;return d<0?null:f<0?this.at(d,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,l,c,f,d;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(i=(t.min.x-v.x)*p,a=(t.max.x-v.x)*p):(i=(t.max.x-v.x)*p,a=(t.min.x-v.x)*p),_>=0?(l=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(l=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),g>=0?(f=(t.min.z-v.z)*g,d=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,d=(t.min.z-v.z)*g),i>d||f>a)||((f>i||i!==i)&&(i=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,_a)!==null}intersectTriangle(t,e,i,a,l){Ym.subVectors(e,t),ch.subVectors(i,t),qm.crossVectors(Ym,ch);let c=this.direction.dot(qm),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;os.subVectors(this.origin,t);const d=f*this.direction.dot(ch.crossVectors(os,ch));if(d<0)return null;const p=f*this.direction.dot(Ym.cross(os));if(p<0||d+p>c)return null;const _=-f*os.dot(qm);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class On{constructor(t,e,i,a,l,c,f,d,p,_,g,v,x,E,M,y){On.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,c,f,d,p,_,g,v,x,E,M,y)}set(t,e,i,a,l,c,f,d,p,_,g,v,x,E,M,y){const S=this.elements;return S[0]=t,S[4]=e,S[8]=i,S[12]=a,S[1]=l,S[5]=c,S[9]=f,S[13]=d,S[2]=p,S[6]=_,S[10]=g,S[14]=v,S[3]=x,S[7]=E,S[11]=M,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new On().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,a=1/fl.setFromMatrixColumn(t,0).length(),l=1/fl.setFromMatrixColumn(t,1).length(),c=1/fl.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,l=t.z,c=Math.cos(i),f=Math.sin(i),d=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*_,x=c*g,E=f*_,M=f*g;e[0]=d*_,e[4]=-d*g,e[8]=p,e[1]=x+E*p,e[5]=v-M*p,e[9]=-f*d,e[2]=M-v*p,e[6]=E+x*p,e[10]=c*d}else if(t.order==="YXZ"){const v=d*_,x=d*g,E=p*_,M=p*g;e[0]=v+M*f,e[4]=E*f-x,e[8]=c*p,e[1]=c*g,e[5]=c*_,e[9]=-f,e[2]=x*f-E,e[6]=M+v*f,e[10]=c*d}else if(t.order==="ZXY"){const v=d*_,x=d*g,E=p*_,M=p*g;e[0]=v-M*f,e[4]=-c*g,e[8]=E+x*f,e[1]=x+E*f,e[5]=c*_,e[9]=M-v*f,e[2]=-c*p,e[6]=f,e[10]=c*d}else if(t.order==="ZYX"){const v=c*_,x=c*g,E=f*_,M=f*g;e[0]=d*_,e[4]=E*p-x,e[8]=v*p+M,e[1]=d*g,e[5]=M*p+v,e[9]=x*p-E,e[2]=-p,e[6]=f*d,e[10]=c*d}else if(t.order==="YZX"){const v=c*d,x=c*p,E=f*d,M=f*p;e[0]=d*_,e[4]=M-v*g,e[8]=E*g+x,e[1]=g,e[5]=c*_,e[9]=-f*_,e[2]=-p*_,e[6]=x*g+E,e[10]=v-M*g}else if(t.order==="XZY"){const v=c*d,x=c*p,E=f*d,M=f*p;e[0]=d*_,e[4]=-g,e[8]=p*_,e[1]=v*g+M,e[5]=c*_,e[9]=x*g-E,e[2]=E*g-x,e[6]=f*_,e[10]=M*g+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yC,t,MC)}lookAt(t,e,i){const a=this.elements;return Qi.subVectors(t,e),Qi.lengthSq()===0&&(Qi.z=1),Qi.normalize(),ls.crossVectors(i,Qi),ls.lengthSq()===0&&(Math.abs(i.z)===1?Qi.x+=1e-4:Qi.z+=1e-4,Qi.normalize(),ls.crossVectors(i,Qi)),ls.normalize(),fh.crossVectors(Qi,ls),a[0]=ls.x,a[4]=fh.x,a[8]=Qi.x,a[1]=ls.y,a[5]=fh.y,a[9]=Qi.y,a[2]=ls.z,a[6]=fh.z,a[10]=Qi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,c=i[0],f=i[4],d=i[8],p=i[12],_=i[1],g=i[5],v=i[9],x=i[13],E=i[2],M=i[6],y=i[10],S=i[14],N=i[3],L=i[7],A=i[11],P=i[15],z=a[0],O=a[4],F=a[8],C=a[12],R=a[1],H=a[5],Y=a[9],$=a[13],ut=a[2],st=a[6],B=a[10],X=a[14],W=a[3],mt=a[7],b=a[11],Q=a[15];return l[0]=c*z+f*R+d*ut+p*W,l[4]=c*O+f*H+d*st+p*mt,l[8]=c*F+f*Y+d*B+p*b,l[12]=c*C+f*$+d*X+p*Q,l[1]=_*z+g*R+v*ut+x*W,l[5]=_*O+g*H+v*st+x*mt,l[9]=_*F+g*Y+v*B+x*b,l[13]=_*C+g*$+v*X+x*Q,l[2]=E*z+M*R+y*ut+S*W,l[6]=E*O+M*H+y*st+S*mt,l[10]=E*F+M*Y+y*B+S*b,l[14]=E*C+M*$+y*X+S*Q,l[3]=N*z+L*R+A*ut+P*W,l[7]=N*O+L*H+A*st+P*mt,l[11]=N*F+L*Y+A*B+P*b,l[15]=N*C+L*$+A*X+P*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],l=t[12],c=t[1],f=t[5],d=t[9],p=t[13],_=t[2],g=t[6],v=t[10],x=t[14],E=t[3],M=t[7],y=t[11],S=t[15];return E*(+l*d*g-a*p*g-l*f*v+i*p*v+a*f*x-i*d*x)+M*(+e*d*x-e*p*v+l*c*v-a*c*x+a*p*_-l*d*_)+y*(+e*p*g-e*f*x-l*c*g+i*c*x+l*f*_-i*p*_)+S*(-a*f*_-e*d*g+e*f*v+a*c*g-i*c*v+i*d*_)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8],g=t[9],v=t[10],x=t[11],E=t[12],M=t[13],y=t[14],S=t[15],N=g*y*p-M*v*p+M*d*x-f*y*x-g*d*S+f*v*S,L=E*v*p-_*y*p-E*d*x+c*y*x+_*d*S-c*v*S,A=_*M*p-E*g*p+E*f*x-c*M*x-_*f*S+c*g*S,P=E*g*d-_*M*d-E*f*v+c*M*v+_*f*y-c*g*y,z=e*N+i*L+a*A+l*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return t[0]=N*O,t[1]=(M*v*l-g*y*l-M*a*x+i*y*x+g*a*S-i*v*S)*O,t[2]=(f*y*l-M*d*l+M*a*p-i*y*p-f*a*S+i*d*S)*O,t[3]=(g*d*l-f*v*l-g*a*p+i*v*p+f*a*x-i*d*x)*O,t[4]=L*O,t[5]=(_*y*l-E*v*l+E*a*x-e*y*x-_*a*S+e*v*S)*O,t[6]=(E*d*l-c*y*l-E*a*p+e*y*p+c*a*S-e*d*S)*O,t[7]=(c*v*l-_*d*l+_*a*p-e*v*p-c*a*x+e*d*x)*O,t[8]=A*O,t[9]=(E*g*l-_*M*l-E*i*x+e*M*x+_*i*S-e*g*S)*O,t[10]=(c*M*l-E*f*l+E*i*p-e*M*p-c*i*S+e*f*S)*O,t[11]=(_*f*l-c*g*l-_*i*p+e*g*p+c*i*x-e*f*x)*O,t[12]=P*O,t[13]=(_*M*a-E*g*a+E*i*v-e*M*v-_*i*y+e*g*y)*O,t[14]=(E*f*a-c*M*a-E*i*d+e*M*d+c*i*y-e*f*y)*O,t[15]=(c*g*a-_*f*a+_*i*d-e*g*d-c*i*v+e*f*v)*O,this}scale(t){const e=this.elements,i=t.x,a=t.y,l=t.z;return e[0]*=i,e[4]*=a,e[8]*=l,e[1]*=i,e[5]*=a,e[9]*=l,e[2]*=i,e[6]*=a,e[10]*=l,e[3]*=i,e[7]*=a,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),l=1-i,c=t.x,f=t.y,d=t.z,p=l*c,_=l*f;return this.set(p*c+i,p*f-a*d,p*d+a*f,0,p*f+a*d,_*f+i,_*d-a*c,0,p*d-a*f,_*d+a*c,l*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,l,c){return this.set(1,i,l,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,l=e._x,c=e._y,f=e._z,d=e._w,p=l+l,_=c+c,g=f+f,v=l*p,x=l*_,E=l*g,M=c*_,y=c*g,S=f*g,N=d*p,L=d*_,A=d*g,P=i.x,z=i.y,O=i.z;return a[0]=(1-(M+S))*P,a[1]=(x+A)*P,a[2]=(E-L)*P,a[3]=0,a[4]=(x-A)*z,a[5]=(1-(v+S))*z,a[6]=(y+N)*z,a[7]=0,a[8]=(E+L)*O,a[9]=(y-N)*O,a[10]=(1-(v+M))*O,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;let l=fl.set(a[0],a[1],a[2]).length();const c=fl.set(a[4],a[5],a[6]).length(),f=fl.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),t.x=a[12],t.y=a[13],t.z=a[14],Dr.copy(this);const p=1/l,_=1/c,g=1/f;return Dr.elements[0]*=p,Dr.elements[1]*=p,Dr.elements[2]*=p,Dr.elements[4]*=_,Dr.elements[5]*=_,Dr.elements[6]*=_,Dr.elements[8]*=g,Dr.elements[9]*=g,Dr.elements[10]*=g,e.setFromRotationMatrix(Dr),i.x=l,i.y=c,i.z=f,this}makePerspective(t,e,i,a,l,c,f=Ra){const d=this.elements,p=2*l/(e-t),_=2*l/(i-a),g=(e+t)/(e-t),v=(i+a)/(i-a);let x,E;if(f===Ra)x=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===id)x=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,a,l,c,f=Ra){const d=this.elements,p=1/(e-t),_=1/(i-a),g=1/(c-l),v=(e+t)*p,x=(i+a)*_;let E,M;if(f===Ra)E=(c+l)*g,M=-2*g;else if(f===id)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*_,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const fl=new ft,Dr=new On,yC=new ft(0,0,0),MC=new ft(1,1,1),ls=new ft,fh=new ft,Qi=new ft,Iy=new On,Fy=new Oc;class Oa{constructor(t=0,e=0,i=0,a=Oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,l=a[0],c=a[4],f=a[8],d=a[1],p=a[5],_=a[9],g=a[2],v=a[6],x=a[10];switch(e){case"XYZ":this._y=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Iy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Iy,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fy.setFromEuler(this),this.setFromQuaternion(Fy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oa.DEFAULT_ORDER="XYZ";class uT{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let EC=0;const Hy=new ft,hl=new Oc,ga=new On,hh=new ft,Ku=new ft,TC=new ft,bC=new Oc,Gy=new ft(1,0,0),Vy=new ft(0,1,0),ky=new ft(0,0,1),Xy={type:"added"},AC={type:"removed"},dl={type:"childadded",child:null},Zm={type:"childremoved",child:null};class Vi extends Zl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EC++}),this.uuid=Nc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vi.DEFAULT_UP.clone();const t=new ft,e=new Oa,i=new Oc,a=new ft(1,1,1);function l(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new On},normalMatrix:{value:new ye}}),this.matrix=new On,this.matrixWorld=new On,this.matrixAutoUpdate=Vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uT,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hl.setFromAxisAngle(t,e),this.quaternion.multiply(hl),this}rotateOnWorldAxis(t,e){return hl.setFromAxisAngle(t,e),this.quaternion.premultiply(hl),this}rotateX(t){return this.rotateOnAxis(Gy,t)}rotateY(t){return this.rotateOnAxis(Vy,t)}rotateZ(t){return this.rotateOnAxis(ky,t)}translateOnAxis(t,e){return Hy.copy(t).applyQuaternion(this.quaternion),this.position.add(Hy.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gy,t)}translateY(t){return this.translateOnAxis(Vy,t)}translateZ(t){return this.translateOnAxis(ky,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?hh.copy(t):hh.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ku.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Ku,hh,this.up):ga.lookAt(hh,Ku,this.up),this.quaternion.setFromRotationMatrix(ga),a&&(ga.extractRotation(a.matrixWorld),hl.setFromRotationMatrix(ga),this.quaternion.premultiply(hl.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xy),dl.child=t,this.dispatchEvent(dl),dl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(AC),Zm.child=t,this.dispatchEvent(Zm),Zm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xy),dl.child=t,this.dispatchEvent(dl),dl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ku,t,TC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ku,bC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,_=d.length;p<_;p++){const g=d[p];l(t.shapes,g)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));a.material=f}else a.material=l(t.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(t.animations,d))}}if(e){const f=c(t.geometries),d=c(t.materials),p=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),x=c(t.animations),E=c(t.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),p.length>0&&(i.textures=p),_.length>0&&(i.images=_),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=a,i;function c(f){const d=[];for(const p in f){const _=f[p];delete _.metadata,d.push(_)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Vi.DEFAULT_UP=new ft(0,1,0);Vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ur=new ft,va=new ft,jm=new ft,xa=new ft,pl=new ft,ml=new ft,Wy=new ft,Km=new ft,Qm=new ft,Jm=new ft,$m=new Ln,t_=new Ln,e_=new Ln;class Nr{constructor(t=new ft,e=new ft,i=new ft){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),Ur.subVectors(t,e),a.cross(Ur);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(t,e,i,a,l){Ur.subVectors(a,e),va.subVectors(i,e),jm.subVectors(t,e);const c=Ur.dot(Ur),f=Ur.dot(va),d=Ur.dot(jm),p=va.dot(va),_=va.dot(jm),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(p*d-f*_)*v,E=(c*_-f*d)*v;return l.set(1-x-E,E,x)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,e,i,a,l,c,f,d){return this.getBarycoord(t,e,i,a,xa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,xa.x),d.addScaledVector(c,xa.y),d.addScaledVector(f,xa.z),d)}static getInterpolatedAttribute(t,e,i,a,l,c){return $m.setScalar(0),t_.setScalar(0),e_.setScalar(0),$m.fromBufferAttribute(t,e),t_.fromBufferAttribute(t,i),e_.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector($m,l.x),c.addScaledVector(t_,l.y),c.addScaledVector(e_,l.z),c}static isFrontFacing(t,e,i,a){return Ur.subVectors(i,e),va.subVectors(t,e),Ur.cross(va).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ur.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ur.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nr.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,l){return Nr.getInterpolation(t,this.a,this.b,this.c,e,i,a,l)}containsPoint(t){return Nr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,l=this.c;let c,f;pl.subVectors(a,i),ml.subVectors(l,i),Km.subVectors(t,i);const d=pl.dot(Km),p=ml.dot(Km);if(d<=0&&p<=0)return e.copy(i);Qm.subVectors(t,a);const _=pl.dot(Qm),g=ml.dot(Qm);if(_>=0&&g<=_)return e.copy(a);const v=d*g-_*p;if(v<=0&&d>=0&&_<=0)return c=d/(d-_),e.copy(i).addScaledVector(pl,c);Jm.subVectors(t,l);const x=pl.dot(Jm),E=ml.dot(Jm);if(E>=0&&x<=E)return e.copy(l);const M=x*p-d*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),e.copy(i).addScaledVector(ml,f);const y=_*E-x*g;if(y<=0&&g-_>=0&&x-E>=0)return Wy.subVectors(l,a),f=(g-_)/(g-_+(x-E)),e.copy(a).addScaledVector(Wy,f);const S=1/(y+M+v);return c=M*S,f=v*S,e.copy(i).addScaledVector(pl,c).addScaledVector(ml,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},dh={h:0,s:0,l:0};function n_(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class en{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vr){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,e),this}setRGB(t,e,i,a=We.workingColorSpace){return this.r=t,this.g=e,this.b=i,We.colorSpaceToWorking(this,a),this}setHSL(t,e,i,a=We.workingColorSpace){if(t=uC(t,1),e=Be(e,0,1),i=Be(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,c=2*i-l;this.r=n_(c,l,t+1/3),this.g=n_(c,l,t),this.b=n_(c,l,t-1/3)}return We.colorSpaceToWorking(this,a),this}setStyle(t,e=vr){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vr){const i=cT[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=Ol(t.r),this.g=Ol(t.g),this.b=Ol(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vr){return We.workingToColorSpace(pi.copy(this),t),Math.round(Be(pi.r*255,0,255))*65536+Math.round(Be(pi.g*255,0,255))*256+Math.round(Be(pi.b*255,0,255))}getHexString(t=vr){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=We.workingColorSpace){We.workingToColorSpace(pi.copy(this),e);const i=pi.r,a=pi.g,l=pi.b,c=Math.max(i,a,l),f=Math.min(i,a,l);let d,p;const _=(f+c)/2;if(f===c)d=0,p=0;else{const g=c-f;switch(p=_<=.5?g/(c+f):g/(2-c-f),c){case i:d=(a-l)/g+(a<l?6:0);break;case a:d=(l-i)/g+2;break;case l:d=(i-a)/g+4;break}d/=6}return t.h=d,t.s=p,t.l=_,t}getRGB(t,e=We.workingColorSpace){return We.workingToColorSpace(pi.copy(this),e),t.r=pi.r,t.g=pi.g,t.b=pi.b,t}getStyle(t=vr){We.workingToColorSpace(pi.copy(this),t);const e=pi.r,i=pi.g,a=pi.b;return t!==vr?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(us),this.setHSL(us.h+t,us.s+e,us.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(us),t.getHSL(dh);const i=Im(us.h,dh.h,e),a=Im(us.s,dh.s,e),l=Im(us.l,dh.l,e);return this.setHSL(i,a,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*a,this.g=l[1]*e+l[4]*i+l[7]*a,this.b=l[2]*e+l[5]*i+l[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pi=new en;en.NAMES=cT;let RC=0;class zc extends Zl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RC++}),this.uuid=Nc(),this.name="",this.type="Material",this.blending=Ll,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=I_,this.blendDst=F_,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new en(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ll&&(i.blending=this.blending),this.side!==Rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==I_&&(i.blendSrc=this.blendSrc),this.blendDst!==F_&&(i.blendDst=this.blendDst),this.blendEquation!==ao&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(e){const l=a(t.textures),c=a(t.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fT extends zc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new en(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oa,this.combine=jE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bn=new ft,ph=new ln;let CC=0;class Qr{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CC++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ly,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ph.fromBufferAttribute(this,e),ph.applyMatrix3(t),this.setXY(e,ph.x,ph.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.applyMatrix3(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.applyMatrix4(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.applyNormalMatrix(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.transformDirection(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qu(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qu(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qu(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qu(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qu(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oi(e,this.array),i=Oi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Oi(e,this.array),i=Oi(i,this.array),a=Oi(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,l){return t*=this.itemSize,this.normalized&&(e=Oi(e,this.array),i=Oi(i,this.array),a=Oi(a,this.array),l=Oi(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ly&&(t.usage=this.usage),t}}class hT extends Qr{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class dT extends Qr{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Es extends Qr{constructor(t,e,i){super(new Float32Array(t),e,i)}}let wC=0;const _r=new On,i_=new Vi,_l=new ft,Ji=new Pc,Qu=new Pc,ti=new ft;class Pa extends Zl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wC++}),this.uuid=Nc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sT(t)?dT:hT)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ye().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _r.makeRotationFromQuaternion(t),this.applyMatrix4(_r),this}rotateX(t){return _r.makeRotationX(t),this.applyMatrix4(_r),this}rotateY(t){return _r.makeRotationY(t),this.applyMatrix4(_r),this}rotateZ(t){return _r.makeRotationZ(t),this.applyMatrix4(_r),this}translate(t,e,i){return _r.makeTranslation(t,e,i),this.applyMatrix4(_r),this}scale(t,e,i){return _r.makeScale(t,e,i),this.applyMatrix4(_r),this}lookAt(t){return i_.lookAt(t),i_.updateMatrix(),this.applyMatrix4(i_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_l).negate(),this.translate(_l.x,_l.y,_l.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Es(i,3))}else{const i=Math.min(t.length,e.count);for(let a=0;a<i;a++){const l=t[a];e.setXYZ(a,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ft(-1/0,-1/0,-1/0),new ft(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const l=e[i];Ji.setFromBufferAttribute(l),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,Ji.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,Ji.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(Ji.min),this.boundingBox.expandByPoint(Ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fd);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ft,1/0);return}if(t){const i=this.boundingSphere.center;if(Ji.setFromBufferAttribute(t),e)for(let l=0,c=e.length;l<c;l++){const f=e[l];Qu.setFromBufferAttribute(f),this.morphTargetsRelative?(ti.addVectors(Ji.min,Qu.min),Ji.expandByPoint(ti),ti.addVectors(Ji.max,Qu.max),Ji.expandByPoint(ti)):(Ji.expandByPoint(Qu.min),Ji.expandByPoint(Qu.max))}Ji.getCenter(i);let a=0;for(let l=0,c=t.count;l<c;l++)ti.fromBufferAttribute(t,l),a=Math.max(a,i.distanceToSquared(ti));if(e)for(let l=0,c=e.length;l<c;l++){const f=e[l],d=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)ti.fromBufferAttribute(f,p),d&&(_l.fromBufferAttribute(t,p),ti.add(_l)),a=Math.max(a,i.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qr(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let F=0;F<i.count;F++)f[F]=new ft,d[F]=new ft;const p=new ft,_=new ft,g=new ft,v=new ln,x=new ln,E=new ln,M=new ft,y=new ft;function S(F,C,R){p.fromBufferAttribute(i,F),_.fromBufferAttribute(i,C),g.fromBufferAttribute(i,R),v.fromBufferAttribute(l,F),x.fromBufferAttribute(l,C),E.fromBufferAttribute(l,R),_.sub(p),g.sub(p),x.sub(v),E.sub(v);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(M.copy(_).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(H),y.copy(g).multiplyScalar(x.x).addScaledVector(_,-E.x).multiplyScalar(H),f[F].add(M),f[C].add(M),f[R].add(M),d[F].add(y),d[C].add(y),d[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let F=0,C=N.length;F<C;++F){const R=N[F],H=R.start,Y=R.count;for(let $=H,ut=H+Y;$<ut;$+=3)S(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new ft,A=new ft,P=new ft,z=new ft;function O(F){P.fromBufferAttribute(a,F),z.copy(P);const C=f[F];L.copy(C),L.sub(P.multiplyScalar(P.dot(C))).normalize(),A.crossVectors(z,C);const H=A.dot(d[F])<0?-1:1;c.setXYZW(F,L.x,L.y,L.z,H)}for(let F=0,C=N.length;F<C;++F){const R=N[F],H=R.start,Y=R.count;for(let $=H,ut=H+Y;$<ut;$+=3)O(t.getX($+0)),O(t.getX($+1)),O(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qr(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const a=new ft,l=new ft,c=new ft,f=new ft,d=new ft,p=new ft,_=new ft,g=new ft;if(t)for(let v=0,x=t.count;v<x;v+=3){const E=t.getX(v+0),M=t.getX(v+1),y=t.getX(v+2);a.fromBufferAttribute(e,E),l.fromBufferAttribute(e,M),c.fromBufferAttribute(e,y),_.subVectors(c,l),g.subVectors(a,l),_.cross(g),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),p.fromBufferAttribute(i,y),f.add(_),d.add(_),p.add(_),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,x=e.count;v<x;v+=3)a.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),c.fromBufferAttribute(e,v+2),_.subVectors(c,l),g.subVectors(a,l),_.cross(g),i.setXYZ(v+0,_.x,_.y,_.z),i.setXYZ(v+1,_.x,_.y,_.z),i.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ti.fromBufferAttribute(t,e),ti.normalize(),t.setXYZ(e,ti.x,ti.y,ti.z)}toNonIndexed(){function t(f,d){const p=f.array,_=f.itemSize,g=f.normalized,v=new p.constructor(d.length*_);let x=0,E=0;for(let M=0,y=d.length;M<y;M++){f.isInterleavedBufferAttribute?x=d[M]*f.data.stride+f.offset:x=d[M]*_;for(let S=0;S<_;S++)v[E++]=p[x++]}return new Qr(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pa,i=this.index.array,a=this.attributes;for(const f in a){const d=a[f],p=t(d,i);e.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let _=0,g=p.length;_<g;_++){const v=p[_],x=t(v,i);d.push(x)}e.morphAttributes[f]=d}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const p=i[d];t.data.attributes[d]=p.toJSON(t.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],_=[];for(let g=0,v=p.length;g<v;g++){const x=p[g];_.push(x.toJSON(t.data))}_.length>0&&(a[d]=_,l=!0)}l&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(e))}const l=t.morphAttributes;for(const p in l){const _=[],g=l[p];for(let v=0,x=g.length;v<x;v++)_.push(g[v].clone(e));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let p=0,_=c.length;p<_;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yy=new On,Ks=new lT,mh=new fd,qy=new ft,_h=new ft,gh=new ft,vh=new ft,r_=new ft,xh=new ft,Zy=new ft,Sh=new ft;class Ca extends Vi{constructor(t=new Pa,e=new fT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const f=this.morphTargetInfluences;if(l&&f){xh.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const _=f[d],g=l[d];_!==0&&(r_.fromBufferAttribute(g,t),c?xh.addScaledVector(r_,_):xh.addScaledVector(r_.sub(e),_))}e.add(xh)}return e}raycast(t,e){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mh.copy(i.boundingSphere),mh.applyMatrix4(l),Ks.copy(t.ray).recast(t.near),!(mh.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(mh,qy)===null||Ks.origin.distanceToSquared(qy)>(t.far-t.near)**2))&&(Yy.copy(l).invert(),Ks.copy(t.ray).applyMatrix4(Yy),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ks)))}_computeIntersections(t,e,i){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const y=v[E],S=c[y.materialIndex],N=Math.max(y.start,x.start),L=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let A=N,P=L;A<P;A+=3){const z=f.getX(A),O=f.getX(A+1),F=f.getX(A+2);a=yh(this,S,t,i,p,_,g,z,O,F),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=y.materialIndex,e.push(a))}}else{const E=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let y=E,S=M;y<S;y+=3){const N=f.getX(y),L=f.getX(y+1),A=f.getX(y+2);a=yh(this,c,t,i,p,_,g,N,L,A),a&&(a.faceIndex=Math.floor(y/3),e.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const y=v[E],S=c[y.materialIndex],N=Math.max(y.start,x.start),L=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let A=N,P=L;A<P;A+=3){const z=A,O=A+1,F=A+2;a=yh(this,S,t,i,p,_,g,z,O,F),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=y.materialIndex,e.push(a))}}else{const E=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let y=E,S=M;y<S;y+=3){const N=y,L=y+1,A=y+2;a=yh(this,c,t,i,p,_,g,N,L,A),a&&(a.faceIndex=Math.floor(y/3),e.push(a))}}}}function DC(o,t,e,i,a,l,c,f){let d;if(t.side===Hi?d=i.intersectTriangle(c,l,a,!0,f):d=i.intersectTriangle(a,l,c,t.side===Rs,f),d===null)return null;Sh.copy(f),Sh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Sh);return p<e.near||p>e.far?null:{distance:p,point:Sh.clone(),object:o}}function yh(o,t,e,i,a,l,c,f,d,p){o.getVertexPosition(f,_h),o.getVertexPosition(d,gh),o.getVertexPosition(p,vh);const _=DC(o,t,e,i,_h,gh,vh,Zy);if(_){const g=new ft;Nr.getBarycoord(Zy,_h,gh,vh,g),a&&(_.uv=Nr.getInterpolatedAttribute(a,f,d,p,g,new ln)),l&&(_.uv1=Nr.getInterpolatedAttribute(l,f,d,p,g,new ln)),c&&(_.normal=Nr.getInterpolatedAttribute(c,f,d,p,g,new ft),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new ft,materialIndex:0};Nr.getNormal(_h,gh,vh,v.normal),_.face=v,_.barycoord=g}return _}class Bc extends Pa{constructor(t=1,e=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],_=[],g=[];let v=0,x=0;E("z","y","x",-1,-1,i,e,t,c,l,0),E("z","y","x",1,-1,i,e,-t,c,l,1),E("x","z","y",1,1,t,i,e,a,c,2),E("x","z","y",1,-1,t,i,-e,a,c,3),E("x","y","z",1,-1,t,e,i,a,l,4),E("x","y","z",-1,-1,t,e,-i,a,l,5),this.setIndex(d),this.setAttribute("position",new Es(p,3)),this.setAttribute("normal",new Es(_,3)),this.setAttribute("uv",new Es(g,2));function E(M,y,S,N,L,A,P,z,O,F,C){const R=A/O,H=P/F,Y=A/2,$=P/2,ut=z/2,st=O+1,B=F+1;let X=0,W=0;const mt=new ft;for(let b=0;b<B;b++){const Q=b*H-$;for(let gt=0;gt<st;gt++){const yt=gt*R-Y;mt[M]=yt*N,mt[y]=Q*L,mt[S]=ut,p.push(mt.x,mt.y,mt.z),mt[M]=0,mt[y]=0,mt[S]=z>0?1:-1,_.push(mt.x,mt.y,mt.z),g.push(gt/O),g.push(1-b/F),X+=1}}for(let b=0;b<F;b++)for(let Q=0;Q<O;Q++){const gt=v+Q+st*b,yt=v+Q+st*(b+1),j=v+(Q+1)+st*(b+1),dt=v+(Q+1)+st*b;d.push(gt,yt,dt),d.push(yt,j,dt),W+=6}f.addGroup(x,W,C),x+=W,v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ql(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const a=o[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function Ti(o){const t={};for(let e=0;e<o.length;e++){const i=ql(o[e]);for(const a in i)t[a]=i[a]}return t}function UC(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function pT(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}const LC={clone:ql,merge:Ti};var NC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cs extends zc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NC,this.fragmentShader=OC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ql(t.uniforms),this.uniformsGroups=UC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class mT extends Vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new On,this.projectionMatrix=new On,this.projectionMatrixInverse=new On,this.coordinateSystem=Ra}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new ft,jy=new ln,Ky=new ln;class yr extends mT{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Eg*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bm*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eg*2*Math.atan(Math.tan(Bm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,e){return this.getViewBounds(t,jy,Ky),e.subVectors(Ky,jy)}setViewOffset(t,e,i,a,l,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bm*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/d,e-=c.offsetY*i/p,a*=c.width/d,i*=c.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gl=-90,vl=1;class PC extends Vi{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new yr(gl,vl,t,e);a.layers=this.layers,this.add(a);const l=new yr(gl,vl,t,e);l.layers=this.layers,this.add(l);const c=new yr(gl,vl,t,e);c.layers=this.layers,this.add(c);const f=new yr(gl,vl,t,e);f.layers=this.layers,this.add(f);const d=new yr(gl,vl,t,e);d.layers=this.layers,this.add(d);const p=new yr(gl,vl,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,l,c,f,d]=e;for(const p of e)this.remove(p);if(t===Ra)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===id)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,l),t.setRenderTarget(i,1,a),t.render(e,c),t.setRenderTarget(i,2,a),t.render(e,f),t.setRenderTarget(i,3,a),t.render(e,d),t.setRenderTarget(i,4,a),t.render(e,p),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),t.render(e,_),t.setRenderTarget(g,v,x),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class _T extends Gi{constructor(t=[],e=Xl,i,a,l,c,f,d,p,_){super(t,e,i,a,l,c,f,d,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zC extends To{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new _T(a),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Bc(5,5,5),l=new Cs({name:"CubemapFromEquirect",uniforms:ql(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hi,blending:ys});l.uniforms.tEquirect.value=e;const c=new Ca(a,l),f=e.minFilter;return e.minFilter===co&&(e.minFilter=Zr),new PC(1,10,this).update(t,c),e.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,a=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,a);t.setRenderTarget(l)}}class Mh extends Vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BC={type:"move"};class a_{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mh,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mh,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ft,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ft),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mh,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ft,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ft),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){c=!0;for(const M of t.hand.values()){const y=e.getJointPose(M,i),S=this._getHandJoint(p,M);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),x=.02,E=.005;p.inputState.pinching&&v>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(BC)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mh;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class IC extends Vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oa,this.environmentIntensity=1,this.environmentRotation=new Oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const s_=new ft,FC=new ft,HC=new ye;class io{constructor(t=new ft(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=s_.subVectors(i,e).cross(FC.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(s_),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||HC.getNormalMatrix(t),a=this.coplanarPoint(s_).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new fd,GC=new ln(.5,.5),Eh=new ft;class gT{constructor(t=new io,e=new io,i=new io,a=new io,l=new io,c=new io){this.planes=[t,e,i,a,l,c]}set(t,e,i,a,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(i),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ra){const i=this.planes,a=t.elements,l=a[0],c=a[1],f=a[2],d=a[3],p=a[4],_=a[5],g=a[6],v=a[7],x=a[8],E=a[9],M=a[10],y=a[11],S=a[12],N=a[13],L=a[14],A=a[15];if(i[0].setComponents(d-l,v-p,y-x,A-S).normalize(),i[1].setComponents(d+l,v+p,y+x,A+S).normalize(),i[2].setComponents(d+c,v+_,y+E,A+N).normalize(),i[3].setComponents(d-c,v-_,y-E,A-N).normalize(),i[4].setComponents(d-f,v-g,y-M,A-L).normalize(),e===Ra)i[5].setComponents(d+f,v+g,y+M,A+L).normalize();else if(e===id)i[5].setComponents(f,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){Qs.center.set(0,0,0);const e=GC.distanceTo(t.center);return Qs.radius=.7071067811865476+e,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(Eh.x=a.normal.x>0?t.max.x:t.min.x,Eh.y=a.normal.y>0?t.max.y:t.min.y,Eh.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Eh)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vT extends zc{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new en(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qy=new On,Tg=new lT,Th=new fd,bh=new ft;class VC extends Vi{constructor(t=new Pa,e=new vT){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,l=t.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Th.copy(i.boundingSphere),Th.applyMatrix4(a),Th.radius+=l,t.ray.intersectsSphere(Th)===!1)return;Qy.copy(a).invert(),Tg.copy(t.ray).applyMatrix4(Qy);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=i.index,g=i.attributes.position;if(p!==null){const v=Math.max(0,c.start),x=Math.min(p.count,c.start+c.count);for(let E=v,M=x;E<M;E++){const y=p.getX(E);bh.fromBufferAttribute(g,y),Jy(bh,y,d,a,t,e,this)}}else{const v=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let E=v,M=x;E<M;E++)bh.fromBufferAttribute(g,E),Jy(bh,E,d,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Jy(o,t,e,i,a,l,c){const f=Tg.distanceSqToPoint(o);if(f<e){const d=new ft;Tg.closestPointToPoint(o,d),d.applyMatrix4(i);const p=a.ray.origin.distanceTo(d);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class xT extends Gi{constructor(t,e,i=Eo,a,l,c,f=Pr,d=Pr,p,_=wc,g=1){if(_!==wc&&_!==Dc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:e,depth:g};super(v,a,l,c,f,d,_,i,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new s0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hd extends Pa{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const l=t/2,c=e/2,f=Math.floor(i),d=Math.floor(a),p=f+1,_=d+1,g=t/f,v=e/d,x=[],E=[],M=[],y=[];for(let S=0;S<_;S++){const N=S*v-c;for(let L=0;L<p;L++){const A=L*g-l;E.push(A,-N,0),M.push(0,0,1),y.push(L/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let N=0;N<f;N++){const L=N+p*S,A=N+p*(S+1),P=N+1+p*(S+1),z=N+1+p*S;x.push(L,A,z),x.push(A,P,z)}this.setIndex(x),this.setAttribute("position",new Es(E,3)),this.setAttribute("normal",new Es(M,3)),this.setAttribute("uv",new Es(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hd(t.width,t.height,t.widthSegments,t.heightSegments)}}class kC extends zc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XC extends zc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class WC extends mT{constructor(t=-1,e=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-t,c=i+t,f=a+e,d=a-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=_*this.view.offsetY,d=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class YC extends yr{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function $y(o,t,e,i){const a=qC(i);switch(e){case tT:return o*t;case nT:return o*t/a.components*a.byteLength;case i0:return o*t/a.components*a.byteLength;case iT:return o*t*2/a.components*a.byteLength;case r0:return o*t*2/a.components*a.byteLength;case eT:return o*t*3/a.components*a.byteLength;case Or:return o*t*4/a.components*a.byteLength;case a0:return o*t*4/a.components*a.byteLength;case Ih:case Fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Hh:case Gh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case J_:case tg:return Math.max(o,16)*Math.max(t,8)/4;case Q_:case $_:return Math.max(o,8)*Math.max(t,8)/2;case eg:case ng:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ig:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rg:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ag:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case sg:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case og:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case lg:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ug:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case cg:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case fg:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case hg:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dg:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case pg:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case mg:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case _g:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gg:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Vh:case vg:case xg:return Math.ceil(o/4)*Math.ceil(t/4)*16;case rT:case Sg:return Math.ceil(o/4)*Math.ceil(t/4)*8;case yg:case Mg:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qC(o){switch(o){case Na:case QE:return{byteLength:1,components:1};case Rc:case JE:case Lc:return{byteLength:2,components:1};case e0:case n0:return{byteLength:2,components:4};case Eo:case t0:case Aa:return{byteLength:4,components:1};case $E:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$g}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$g);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ST(){let o=null,t=!1,e=null,i=null;function a(l,c){e(l,c),i=o.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(a),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function ZC(o){const t=new WeakMap;function e(f,d){const p=f.array,_=f.usage,g=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,_),f.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=o.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function i(f,d,p){const _=d.array,g=d.updateRanges;if(o.bindBuffer(p,f),g.length===0)o.bufferSubData(p,0,_);else{g.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<g.length;x++){const E=g[v],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];o.bufferSubData(p,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,e(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,f,d),p.version=f.version}}return{get:a,remove:l,update:c}}var jC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KC=`#ifdef USE_ALPHAHASH
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
#endif`,QC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$C=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ew=`#ifdef USE_AOMAP
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
#endif`,nw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iw=`#ifdef USE_BATCHING
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
#endif`,rw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ow=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lw=`#ifdef USE_IRIDESCENCE
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
#endif`,uw=`#ifdef USE_BUMPMAP
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
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vw=`#define PI 3.141592653589793
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
} // validated`,xw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sw=`vec3 transformedNormal = objectNormal;
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
#endif`,yw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ew=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Aw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rw=`#ifdef USE_ENVMAP
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
#endif`,Cw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ww=`#ifdef USE_ENVMAP
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
#endif`,Dw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uw=`#ifdef USE_ENVMAP
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
#endif`,Lw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ow=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zw=`#ifdef USE_GRADIENTMAP
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
}`,Bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hw=`uniform bool receiveShadow;
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
#endif`,Gw=`#ifdef USE_ENVMAP
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
#endif`,Vw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ww=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yw=`PhysicalMaterial material;
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
#endif`,qw=`struct PhysicalMaterial {
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
}`,Zw=`
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
#endif`,jw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$w=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r2=`#if defined( USE_POINTS_UV )
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
#endif`,a2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c2=`#ifdef USE_MORPHTARGETS
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
#endif`,f2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g2=`#ifdef USE_NORMALMAP
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
#endif`,v2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N2=`float getShadowMask() {
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
}`,O2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P2=`#ifdef USE_SKINNING
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
#endif`,z2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B2=`#ifdef USE_SKINNING
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
#endif`,I2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V2=`#ifdef USE_TRANSMISSION
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
#endif`,k2=`#ifdef USE_TRANSMISSION
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
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j2=`uniform sampler2D t2D;
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
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tD=`#include <common>
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
}`,eD=`#if DEPTH_PACKING == 3200
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
}`,nD=`#define DISTANCE
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
}`,iD=`#define DISTANCE
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
}`,rD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sD=`uniform float scale;
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
}`,oD=`uniform vec3 diffuse;
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
}`,lD=`#include <common>
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
}`,uD=`uniform vec3 diffuse;
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
}`,cD=`#define LAMBERT
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
}`,fD=`#define LAMBERT
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
}`,hD=`#define MATCAP
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
}`,dD=`#define MATCAP
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
}`,pD=`#define NORMAL
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
}`,mD=`#define NORMAL
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
}`,_D=`#define PHONG
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
}`,gD=`#define PHONG
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
}`,vD=`#define STANDARD
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
}`,xD=`#define STANDARD
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
}`,SD=`#define TOON
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
}`,yD=`#define TOON
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
}`,MD=`uniform float size;
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
}`,ED=`uniform vec3 diffuse;
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
}`,TD=`#include <common>
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
}`,bD=`uniform vec3 color;
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
}`,AD=`uniform float rotation;
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
}`,RD=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:jC,alphahash_pars_fragment:KC,alphamap_fragment:QC,alphamap_pars_fragment:JC,alphatest_fragment:$C,alphatest_pars_fragment:tw,aomap_fragment:ew,aomap_pars_fragment:nw,batching_pars_vertex:iw,batching_vertex:rw,begin_vertex:aw,beginnormal_vertex:sw,bsdfs:ow,iridescence_fragment:lw,bumpmap_pars_fragment:uw,clipping_planes_fragment:cw,clipping_planes_pars_fragment:fw,clipping_planes_pars_vertex:hw,clipping_planes_vertex:dw,color_fragment:pw,color_pars_fragment:mw,color_pars_vertex:_w,color_vertex:gw,common:vw,cube_uv_reflection_fragment:xw,defaultnormal_vertex:Sw,displacementmap_pars_vertex:yw,displacementmap_vertex:Mw,emissivemap_fragment:Ew,emissivemap_pars_fragment:Tw,colorspace_fragment:bw,colorspace_pars_fragment:Aw,envmap_fragment:Rw,envmap_common_pars_fragment:Cw,envmap_pars_fragment:ww,envmap_pars_vertex:Dw,envmap_physical_pars_fragment:Gw,envmap_vertex:Uw,fog_vertex:Lw,fog_pars_vertex:Nw,fog_fragment:Ow,fog_pars_fragment:Pw,gradientmap_pars_fragment:zw,lightmap_pars_fragment:Bw,lights_lambert_fragment:Iw,lights_lambert_pars_fragment:Fw,lights_pars_begin:Hw,lights_toon_fragment:Vw,lights_toon_pars_fragment:kw,lights_phong_fragment:Xw,lights_phong_pars_fragment:Ww,lights_physical_fragment:Yw,lights_physical_pars_fragment:qw,lights_fragment_begin:Zw,lights_fragment_maps:jw,lights_fragment_end:Kw,logdepthbuf_fragment:Qw,logdepthbuf_pars_fragment:Jw,logdepthbuf_pars_vertex:$w,logdepthbuf_vertex:t2,map_fragment:e2,map_pars_fragment:n2,map_particle_fragment:i2,map_particle_pars_fragment:r2,metalnessmap_fragment:a2,metalnessmap_pars_fragment:s2,morphinstance_vertex:o2,morphcolor_vertex:l2,morphnormal_vertex:u2,morphtarget_pars_vertex:c2,morphtarget_vertex:f2,normal_fragment_begin:h2,normal_fragment_maps:d2,normal_pars_fragment:p2,normal_pars_vertex:m2,normal_vertex:_2,normalmap_pars_fragment:g2,clearcoat_normal_fragment_begin:v2,clearcoat_normal_fragment_maps:x2,clearcoat_pars_fragment:S2,iridescence_pars_fragment:y2,opaque_fragment:M2,packing:E2,premultiplied_alpha_fragment:T2,project_vertex:b2,dithering_fragment:A2,dithering_pars_fragment:R2,roughnessmap_fragment:C2,roughnessmap_pars_fragment:w2,shadowmap_pars_fragment:D2,shadowmap_pars_vertex:U2,shadowmap_vertex:L2,shadowmask_pars_fragment:N2,skinbase_vertex:O2,skinning_pars_vertex:P2,skinning_vertex:z2,skinnormal_vertex:B2,specularmap_fragment:I2,specularmap_pars_fragment:F2,tonemapping_fragment:H2,tonemapping_pars_fragment:G2,transmission_fragment:V2,transmission_pars_fragment:k2,uv_pars_fragment:X2,uv_pars_vertex:W2,uv_vertex:Y2,worldpos_vertex:q2,background_vert:Z2,background_frag:j2,backgroundCube_vert:K2,backgroundCube_frag:Q2,cube_vert:J2,cube_frag:$2,depth_vert:tD,depth_frag:eD,distanceRGBA_vert:nD,distanceRGBA_frag:iD,equirect_vert:rD,equirect_frag:aD,linedashed_vert:sD,linedashed_frag:oD,meshbasic_vert:lD,meshbasic_frag:uD,meshlambert_vert:cD,meshlambert_frag:fD,meshmatcap_vert:hD,meshmatcap_frag:dD,meshnormal_vert:pD,meshnormal_frag:mD,meshphong_vert:_D,meshphong_frag:gD,meshphysical_vert:vD,meshphysical_frag:xD,meshtoon_vert:SD,meshtoon_frag:yD,points_vert:MD,points_frag:ED,shadow_vert:TD,shadow_frag:bD,sprite_vert:AD,sprite_frag:RD},Ht={common:{diffuse:{value:new en(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new ln(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new en(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new en(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new en(16777215)},opacity:{value:1},center:{value:new ln(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},Xr={basic:{uniforms:Ti([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Ti([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new en(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Ti([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new en(0)},specular:{value:new en(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Ti([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new en(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Ti([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new en(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Ti([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Ti([Ht.points,Ht.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Ti([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Ti([Ht.common,Ht.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Ti([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Ti([Ht.sprite,Ht.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Ti([Ht.common,Ht.displacementmap,{referencePosition:{value:new ft},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Ti([Ht.lights,Ht.fog,{color:{value:new en(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Xr.physical={uniforms:Ti([Xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new ln(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new en(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new ln},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new en(0)},specularColor:{value:new en(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new ln},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Ah={r:0,b:0,g:0},Js=new Oa,CD=new On;function wD(o,t,e,i,a,l,c){const f=new en(0);let d=l===!0?0:1,p,_,g=null,v=0,x=null;function E(L){let A=L.isScene===!0?L.background:null;return A&&A.isTexture&&(A=(L.backgroundBlurriness>0?e:t).get(A)),A}function M(L){let A=!1;const P=E(L);P===null?S(f,d):P&&P.isColor&&(S(P,1),A=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,A){const P=E(A);P&&(P.isCubeTexture||P.mapping===cd)?(_===void 0&&(_=new Ca(new Bc(1,1,1),new Cs({name:"BackgroundCubeMaterial",uniforms:ql(Xr.backgroundCube.uniforms),vertexShader:Xr.backgroundCube.vertexShader,fragmentShader:Xr.backgroundCube.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Js.copy(A.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(CD.makeRotationFromEuler(Js)),_.material.toneMapped=We.getTransfer(P.colorSpace)!==on,(g!==P||v!==P.version||x!==o.toneMapping)&&(_.material.needsUpdate=!0,g=P,v=P.version,x=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ca(new hd(2,2),new Cs({name:"BackgroundMaterial",uniforms:ql(Xr.background.uniforms),vertexShader:Xr.background.vertexShader,fragmentShader:Xr.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=We.getTransfer(P.colorSpace)!==on,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,g=P,v=P.version,x=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function S(L,A){L.getRGB(Ah,pT(o)),i.buffers.color.setClear(Ah.r,Ah.g,Ah.b,A,c)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,A=1){f.set(L),d=A,S(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,S(f,d)},render:M,addToRenderList:y,dispose:N}}function DD(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},a=v(null);let l=a,c=!1;function f(R,H,Y,$,ut){let st=!1;const B=g($,Y,H);l!==B&&(l=B,p(l.object)),st=x(R,$,Y,ut),st&&E(R,$,Y,ut),ut!==null&&t.update(ut,o.ELEMENT_ARRAY_BUFFER),(st||c)&&(c=!1,A(R,H,Y,$),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function d(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function g(R,H,Y){const $=Y.wireframe===!0;let ut=i[R.id];ut===void 0&&(ut={},i[R.id]=ut);let st=ut[H.id];st===void 0&&(st={},ut[H.id]=st);let B=st[$];return B===void 0&&(B=v(d()),st[$]=B),B}function v(R){const H=[],Y=[],$=[];for(let ut=0;ut<e;ut++)H[ut]=0,Y[ut]=0,$[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:$,object:R,attributes:{},index:null}}function x(R,H,Y,$){const ut=l.attributes,st=H.attributes;let B=0;const X=Y.getAttributes();for(const W in X)if(X[W].location>=0){const b=ut[W];let Q=st[W];if(Q===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),b===void 0||b.attribute!==Q||Q&&b.data!==Q.data)return!0;B++}return l.attributesNum!==B||l.index!==$}function E(R,H,Y,$){const ut={},st=H.attributes;let B=0;const X=Y.getAttributes();for(const W in X)if(X[W].location>=0){let b=st[W];b===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(b=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(b=R.instanceColor));const Q={};Q.attribute=b,b&&b.data&&(Q.data=b.data),ut[W]=Q,B++}l.attributes=ut,l.attributesNum=B,l.index=$}function M(){const R=l.newAttributes;for(let H=0,Y=R.length;H<Y;H++)R[H]=0}function y(R){S(R,0)}function S(R,H){const Y=l.newAttributes,$=l.enabledAttributes,ut=l.attributeDivisors;Y[R]=1,$[R]===0&&(o.enableVertexAttribArray(R),$[R]=1),ut[R]!==H&&(o.vertexAttribDivisor(R,H),ut[R]=H)}function N(){const R=l.newAttributes,H=l.enabledAttributes;for(let Y=0,$=H.length;Y<$;Y++)H[Y]!==R[Y]&&(o.disableVertexAttribArray(Y),H[Y]=0)}function L(R,H,Y,$,ut,st,B){B===!0?o.vertexAttribIPointer(R,H,Y,ut,st):o.vertexAttribPointer(R,H,Y,$,ut,st)}function A(R,H,Y,$){M();const ut=$.attributes,st=Y.getAttributes(),B=H.defaultAttributeValues;for(const X in st){const W=st[X];if(W.location>=0){let mt=ut[X];if(mt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor)),mt!==void 0){const b=mt.normalized,Q=mt.itemSize,gt=t.get(mt);if(gt===void 0)continue;const yt=gt.buffer,j=gt.type,dt=gt.bytesPerElement,xt=j===o.INT||j===o.UNSIGNED_INT||mt.gpuType===t0;if(mt.isInterleavedBufferAttribute){const Rt=mt.data,Ct=Rt.stride,ae=mt.offset;if(Rt.isInstancedInterleavedBuffer){for(let ne=0;ne<W.locationSize;ne++)S(W.location+ne,Rt.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let ne=0;ne<W.locationSize;ne++)y(W.location+ne);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ne=0;ne<W.locationSize;ne++)L(W.location+ne,Q/W.locationSize,j,b,Ct*dt,(ae+Q/W.locationSize*ne)*dt,xt)}else{if(mt.isInstancedBufferAttribute){for(let Rt=0;Rt<W.locationSize;Rt++)S(W.location+Rt,mt.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)y(W.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Rt=0;Rt<W.locationSize;Rt++)L(W.location+Rt,Q/W.locationSize,j,b,Q*dt,Q/W.locationSize*Rt*dt,xt)}}else if(B!==void 0){const b=B[X];if(b!==void 0)switch(b.length){case 2:o.vertexAttrib2fv(W.location,b);break;case 3:o.vertexAttrib3fv(W.location,b);break;case 4:o.vertexAttrib4fv(W.location,b);break;default:o.vertexAttrib1fv(W.location,b)}}}}N()}function P(){F();for(const R in i){const H=i[R];for(const Y in H){const $=H[Y];for(const ut in $)_($[ut].object),delete $[ut];delete H[Y]}delete i[R]}}function z(R){if(i[R.id]===void 0)return;const H=i[R.id];for(const Y in H){const $=H[Y];for(const ut in $)_($[ut].object),delete $[ut];delete H[Y]}delete i[R.id]}function O(R){for(const H in i){const Y=i[H];if(Y[R.id]===void 0)continue;const $=Y[R.id];for(const ut in $)_($[ut].object),delete $[ut];delete Y[R.id]}}function F(){C(),c=!0,l!==a&&(l=a,p(l.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:F,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:y,disableUnusedAttributes:N}}function UD(o,t,e){let i;function a(p){i=p}function l(p,_){o.drawArrays(i,p,_),e.update(_,i,1)}function c(p,_,g){g!==0&&(o.drawArraysInstanced(i,p,_,g),e.update(_,i,g))}function f(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,_,0,g);let x=0;for(let E=0;E<g;E++)x+=_[E];e.update(x,i,1)}function d(p,_,g,v){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)c(p[E],_[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(i,p,0,_,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=_[M]*v[M];e.update(E,i,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function LD(o,t,e,i){let a;function l(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");a=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(O){return!(O!==Or&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const F=O===Lc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Na&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Aa&&!F)}function d(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const _=d(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=e.logarithmicDepthBuffer===!0,v=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:P,maxSamples:z}}function ND(o){const t=this;let e=null,i=0,a=!1,l=!1;const c=new io,f=new ye,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||i!==0||a;return a=v,i=g.length,x},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){e=_(g,v,0)},this.setState=function(g,v,x){const E=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,S=o.get(g);if(!a||E===null||E.length===0||l&&!y)l?_(null):p();else{const N=l?0:i,L=N*4;let A=S.clippingState||null;d.value=A,A=_(E,v,L,x);for(let P=0;P!==L;++P)A[P]=e[P];S.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=N}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function _(g,v,x,E){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=d.value,E!==!0||y===null){const S=x+M*4,N=v.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,A=x;L!==M;++L,A+=4)c.copy(g[L]).applyMatrix4(N,f),c.normal.toArray(y,A),y[A+3]=c.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function OD(o){let t=new WeakMap;function e(c,f){return f===q_?c.mapping=Xl:f===Z_&&(c.mapping=Wl),c}function i(c){if(c&&c.isTexture){const f=c.mapping;if(f===q_||f===Z_)if(t.has(c)){const d=t.get(c).texture;return e(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new zC(d.height);return p.fromEquirectangularTexture(o,c),t.set(c,p),c.addEventListener("dispose",a),e(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:i,dispose:l}}const bl=4,tM=[.125,.215,.35,.446,.526,.582],so=20,o_=new WC,eM=new en;let l_=null,u_=0,c_=0,f_=!1;const ro=(1+Math.sqrt(5))/2,xl=1/ro,nM=[new ft(-ro,xl,0),new ft(ro,xl,0),new ft(-xl,0,ro),new ft(xl,0,ro),new ft(0,ro,-xl),new ft(0,ro,xl),new ft(-1,1,-1),new ft(1,1,-1),new ft(-1,1,1),new ft(1,1,1)],PD=new ft;class iM{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,a=100,l={}){const{size:c=256,position:f=PD}=l;l_=this._renderer.getRenderTarget(),u_=this._renderer.getActiveCubeFace(),c_=this._renderer.getActiveMipmapLevel(),f_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,a,d,f),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=aM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(l_,u_,c_),this._renderer.xr.enabled=f_,t.scissorTest=!1,Rh(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xl||t.mapping===Wl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),l_=this._renderer.getRenderTarget(),u_=this._renderer.getActiveCubeFace(),c_=this._renderer.getActiveMipmapLevel(),f_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Zr,minFilter:Zr,generateMipmaps:!1,type:Lc,format:Or,colorSpace:Yl,depthBuffer:!1},a=rM(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rM(t,e,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zD(l)),this._blurMaterial=BD(l,t,e)}return a}_compileMaterial(t){const e=new Ca(this._lodPlanes[0],t);this._renderer.compile(e,o_)}_sceneToCubeUV(t,e,i,a,l){const d=new yr(90,1,e,i),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(eM),g.toneMapping=Ms,g.autoClear=!1;const E=new fT({name:"PMREM.Background",side:Hi,depthWrite:!1,depthTest:!1}),M=new Ca(new Bc,E);let y=!1;const S=t.background;S?S.isColor&&(E.color.copy(S),t.background=null,y=!0):(E.color.copy(eM),y=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(d.up.set(0,p[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+_[N],l.y,l.z)):L===1?(d.up.set(0,0,p[N]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+_[N],l.z)):(d.up.set(0,p[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+_[N]));const A=this._cubeSize;Rh(a,L*A,N>2?A:0,A,A),g.setRenderTarget(a),y&&g.render(M,d),g.render(t,d)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=v,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Xl||t.mapping===Wl;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=sM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=aM());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Ca(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;Rh(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(c,o_)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=nM[(a-l-1)%nM.length];this._blur(t,l-1,l,c,f)}e.autoClear=i}_blur(t,e,i,a,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,a,"latitudinal",l),this._halfBlur(c,t,i,i,a,"longitudinal",l)}_halfBlur(t,e,i,a,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Ca(this._lodPlanes[a],p),v=p.uniforms,x=this._sizeLods[i]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*so-1),M=l/E,y=isFinite(l)?1+Math.floor(_*M):so;y>so&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${so}`);const S=[];let N=0;for(let O=0;O<so;++O){const F=O/M,C=Math.exp(-F*F/2);S.push(C),O===0?N+=C:O<y&&(N+=2*C)}for(let O=0;O<S.length;O++)S[O]=S[O]/N;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-i;const A=this._sizeLods[a],P=3*A*(a>L-bl?a-L+bl:0),z=4*(this._cubeSize-A);Rh(e,P,z,3*A,2*A),d.setRenderTarget(e),d.render(g,o_)}}function zD(o){const t=[],e=[],i=[];let a=o;const l=o-bl+1+tM.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);e.push(f);let d=1/f;c>o-bl?d=tM[c-o+bl-1]:c===0&&(d=0),i.push(d);const p=1/(f-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],x=6,E=6,M=3,y=2,S=1,N=new Float32Array(M*E*x),L=new Float32Array(y*E*x),A=new Float32Array(S*E*x);for(let z=0;z<x;z++){const O=z%3*2/3-1,F=z>2?0:-1,C=[O,F,0,O+2/3,F,0,O+2/3,F+1,0,O,F,0,O+2/3,F+1,0,O,F+1,0];N.set(C,M*E*z),L.set(v,y*E*z);const R=[z,z,z,z,z,z];A.set(R,S*E*z)}const P=new Pa;P.setAttribute("position",new Qr(N,M)),P.setAttribute("uv",new Qr(L,y)),P.setAttribute("faceIndex",new Qr(A,S)),t.push(P),a>bl&&a--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rM(o,t,e){const i=new To(o,t,e);return i.texture.mapping=cd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rh(o,t,e,i,a){o.viewport.set(t,e,i,a),o.scissor.set(t,e,i,a)}function BD(o,t,e){const i=new Float32Array(so),a=new ft(0,1,0);return new Cs({name:"SphericalGaussianBlur",defines:{n:so,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:o0(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function aM(){return new Cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:o0(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function sM(){return new Cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:o0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function o0(){return`

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
	`}function ID(o){let t=new WeakMap,e=null;function i(f){if(f&&f.isTexture){const d=f.mapping,p=d===q_||d===Z_,_=d===Xl||d===Wl;if(p||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return e===null&&(e=new iM(o)),g=p?e.fromEquirectangular(f,g):e.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return p&&x&&x.height>0||_&&x&&a(x)?(e===null&&(e=new iM(o)),g=p?e.fromEquirectangular(f):e.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function a(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function FD(o){const t={};function e(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(i)}return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&Nl("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function HD(o,t,e,i){const a={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete a[v.id];const x=l.get(v);x&&(t.remove(x),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function f(g,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,e.memory.geometries++),v}function d(g){const v=g.attributes;for(const x in v)t.update(v[x],o.ARRAY_BUFFER)}function p(g){const v=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const N=x.array;M=x.version;for(let L=0,A=N.length;L<A;L+=3){const P=N[L+0],z=N[L+1],O=N[L+2];v.push(P,z,z,O,O,P)}}else if(E!==void 0){const N=E.array;M=E.version;for(let L=0,A=N.length/3-1;L<A;L+=3){const P=L+0,z=L+1,O=L+2;v.push(P,z,z,O,O,P)}}else return;const y=new(sT(v)?dT:hT)(v,1);y.version=M;const S=l.get(g);S&&t.remove(S),l.set(g,y)}function _(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:_}}function GD(o,t,e){let i;function a(v){i=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,x){o.drawElements(i,x,l,v*c),e.update(x,i,1)}function p(v,x,E){E!==0&&(o.drawElementsInstanced(i,x,l,v*c,E),e.update(x,i,E))}function _(v,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,l,v,0,E);let y=0;for(let S=0;S<E;S++)y+=x[S];e.update(y,i,1)}function g(v,x,E,M){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<v.length;S++)p(v[S]/c,x[S],M[S]);else{y.multiDrawElementsInstancedWEBGL(i,x,0,l,v,0,M,0,E);let S=0;for(let N=0;N<E;N++)S+=x[N]*M[N];e.update(S,i,1)}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function VD(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(e.calls++,c){case o.TRIANGLES:e.triangles+=f*(l/3);break;case o.LINES:e.lines+=f*(l/2);break;case o.LINE_STRIP:e.lines+=f*(l-1);break;case o.LINE_LOOP:e.lines+=f*l;break;case o.POINTS:e.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function kD(o,t,e){const i=new WeakMap,a=new Ln;function l(c,f,d){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=i.get(f);if(v===void 0||v.count!==g){let R=function(){F.dispose(),i.delete(f),f.removeEventListener("dispose",R)};var x=R;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),y===!0&&(A=3);let P=f.attributes.position.count*A,z=1;P>t.maxTextureSize&&(z=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*z*4*g),F=new oT(O,P,z,g);F.type=Aa,F.needsUpdate=!0;const C=A*4;for(let H=0;H<g;H++){const Y=S[H],$=N[H],ut=L[H],st=P*z*4*H;for(let B=0;B<Y.count;B++){const X=B*C;E===!0&&(a.fromBufferAttribute(Y,B),O[st+X+0]=a.x,O[st+X+1]=a.y,O[st+X+2]=a.z,O[st+X+3]=0),M===!0&&(a.fromBufferAttribute($,B),O[st+X+4]=a.x,O[st+X+5]=a.y,O[st+X+6]=a.z,O[st+X+7]=0),y===!0&&(a.fromBufferAttribute(ut,B),O[st+X+8]=a.x,O[st+X+9]=a.y,O[st+X+10]=a.z,O[st+X+11]=ut.itemSize===4?a.w:1)}}v={count:g,texture:F,size:new ln(P,z)},i.set(f,v),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,e);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const M=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function XD(o,t,e,i){let a=new WeakMap;function l(d){const p=i.render.frame,_=d.geometry,g=t.get(d,_);if(a.get(g)!==p&&(t.update(g),a.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(e.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,o.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return g}function c(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:c}}const yT=new Gi,oM=new xT(1,1),MT=new oT,ET=new xC,TT=new _T,lM=[],uM=[],cM=new Float32Array(16),fM=new Float32Array(9),hM=new Float32Array(4);function jl(o,t,e){const i=o[0];if(i<=0||i>0)return o;const a=t*e;let l=lM[a];if(l===void 0&&(l=new Float32Array(a),lM[a]=l),t!==0){i.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=e,o[c].toArray(l,f)}return l}function qn(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function Zn(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function dd(o,t){let e=uM[t];e===void 0&&(e=new Int32Array(t),uM[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function WD(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function YD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qn(e,t))return;o.uniform2fv(this.addr,t),Zn(e,t)}}function qD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qn(e,t))return;o.uniform3fv(this.addr,t),Zn(e,t)}}function ZD(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qn(e,t))return;o.uniform4fv(this.addr,t),Zn(e,t)}}function jD(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(qn(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Zn(e,t)}else{if(qn(e,i))return;hM.set(i),o.uniformMatrix2fv(this.addr,!1,hM),Zn(e,i)}}function KD(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(qn(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Zn(e,t)}else{if(qn(e,i))return;fM.set(i),o.uniformMatrix3fv(this.addr,!1,fM),Zn(e,i)}}function QD(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(qn(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Zn(e,t)}else{if(qn(e,i))return;cM.set(i),o.uniformMatrix4fv(this.addr,!1,cM),Zn(e,i)}}function JD(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function $D(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qn(e,t))return;o.uniform2iv(this.addr,t),Zn(e,t)}}function t3(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qn(e,t))return;o.uniform3iv(this.addr,t),Zn(e,t)}}function e3(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qn(e,t))return;o.uniform4iv(this.addr,t),Zn(e,t)}}function n3(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function i3(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qn(e,t))return;o.uniform2uiv(this.addr,t),Zn(e,t)}}function r3(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qn(e,t))return;o.uniform3uiv(this.addr,t),Zn(e,t)}}function a3(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qn(e,t))return;o.uniform4uiv(this.addr,t),Zn(e,t)}}function s3(o,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(o.uniform1i(this.addr,a),i[0]=a);let l;this.type===o.SAMPLER_2D_SHADOW?(oM.compareFunction=aT,l=oM):l=yT,e.setTexture2D(t||l,a)}function o3(o,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(o.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||ET,a)}function l3(o,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(o.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||TT,a)}function u3(o,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(o.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||MT,a)}function c3(o){switch(o){case 5126:return WD;case 35664:return YD;case 35665:return qD;case 35666:return ZD;case 35674:return jD;case 35675:return KD;case 35676:return QD;case 5124:case 35670:return JD;case 35667:case 35671:return $D;case 35668:case 35672:return t3;case 35669:case 35673:return e3;case 5125:return n3;case 36294:return i3;case 36295:return r3;case 36296:return a3;case 35678:case 36198:case 36298:case 36306:case 35682:return s3;case 35679:case 36299:case 36307:return o3;case 35680:case 36300:case 36308:case 36293:return l3;case 36289:case 36303:case 36311:case 36292:return u3}}function f3(o,t){o.uniform1fv(this.addr,t)}function h3(o,t){const e=jl(t,this.size,2);o.uniform2fv(this.addr,e)}function d3(o,t){const e=jl(t,this.size,3);o.uniform3fv(this.addr,e)}function p3(o,t){const e=jl(t,this.size,4);o.uniform4fv(this.addr,e)}function m3(o,t){const e=jl(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function _3(o,t){const e=jl(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function g3(o,t){const e=jl(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function v3(o,t){o.uniform1iv(this.addr,t)}function x3(o,t){o.uniform2iv(this.addr,t)}function S3(o,t){o.uniform3iv(this.addr,t)}function y3(o,t){o.uniform4iv(this.addr,t)}function M3(o,t){o.uniform1uiv(this.addr,t)}function E3(o,t){o.uniform2uiv(this.addr,t)}function T3(o,t){o.uniform3uiv(this.addr,t)}function b3(o,t){o.uniform4uiv(this.addr,t)}function A3(o,t,e){const i=this.cache,a=t.length,l=dd(e,a);qn(i,l)||(o.uniform1iv(this.addr,l),Zn(i,l));for(let c=0;c!==a;++c)e.setTexture2D(t[c]||yT,l[c])}function R3(o,t,e){const i=this.cache,a=t.length,l=dd(e,a);qn(i,l)||(o.uniform1iv(this.addr,l),Zn(i,l));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||ET,l[c])}function C3(o,t,e){const i=this.cache,a=t.length,l=dd(e,a);qn(i,l)||(o.uniform1iv(this.addr,l),Zn(i,l));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||TT,l[c])}function w3(o,t,e){const i=this.cache,a=t.length,l=dd(e,a);qn(i,l)||(o.uniform1iv(this.addr,l),Zn(i,l));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||MT,l[c])}function D3(o){switch(o){case 5126:return f3;case 35664:return h3;case 35665:return d3;case 35666:return p3;case 35674:return m3;case 35675:return _3;case 35676:return g3;case 5124:case 35670:return v3;case 35667:case 35671:return x3;case 35668:case 35672:return S3;case 35669:case 35673:return y3;case 5125:return M3;case 36294:return E3;case 36295:return T3;case 36296:return b3;case 35678:case 36198:case 36298:case 36306:case 35682:return A3;case 35679:case 36299:case 36307:return R3;case 35680:case 36300:case 36308:case 36293:return C3;case 36289:case 36303:case 36311:case 36292:return w3}}class U3{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=c3(e.type)}}class L3{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D3(e.type)}}class N3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(t,e[f.id],i)}}}const h_=/(\w+)(\])?(\[|\.)?/g;function dM(o,t){o.seq.push(t),o.map[t.id]=t}function O3(o,t,e){const i=o.name,a=i.length;for(h_.lastIndex=0;;){const l=h_.exec(i),c=h_.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===a){dM(e,p===void 0?new U3(f,o,t):new L3(f,o,t));break}else{let g=e.map[f];g===void 0&&(g=new N3(f),dM(e,g)),e=g}}}class kh{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);O3(l,c,this)}}setValue(t,e,i,a){const l=this.map[e];l!==void 0&&l.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let l=0,c=e.length;l!==c;++l){const f=e[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,l=t.length;a!==l;++a){const c=t[a];c.id in e&&i.push(c)}return i}}function pM(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}const P3=37297;let z3=0;function B3(o,t){const e=o.split(`
`),i=[],a=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let c=a;c<l;c++){const f=c+1;i.push(`${f===t?">":" "} ${f}: ${e[c]}`)}return i.join(`
`)}const mM=new ye;function I3(o){We._getMatrix(mM,We.workingColorSpace,o);const t=`mat3( ${mM.elements.map(e=>e.toFixed(4))} )`;switch(We.getTransfer(o)){case nd:return[t,"LinearTransferOETF"];case on:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function _M(o,t,e){const i=o.getShaderParameter(t,o.COMPILE_STATUS),a=o.getShaderInfoLog(t).trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return e.toUpperCase()+`

`+a+`

`+B3(o.getShaderSource(t),c)}else return a}function F3(o,t){const e=I3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function H3(o,t){let e;switch(t){case XR:e="Linear";break;case WR:e="Reinhard";break;case YR:e="Cineon";break;case qR:e="ACESFilmic";break;case jR:e="AgX";break;case KR:e="Neutral";break;case ZR:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ch=new ft;function G3(){We.getLuminanceCoefficients(Ch);const o=Ch.x.toFixed(4),t=Ch.y.toFixed(4),e=Ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ac).join(`
`)}function k3(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function X3(o,t){const e={},i=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=o.getActiveAttrib(t,a),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),e[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return e}function ac(o){return o!==""}function gM(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vM(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W3=/^[ \t]*#include +<([\w\d./]+)>/gm;function bg(o){return o.replace(W3,q3)}const Y3=new Map;function q3(o,t){let e=Ee[t];if(e===void 0){const i=Y3.get(t);if(i!==void 0)e=Ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bg(e)}const Z3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xM(o){return o.replace(Z3,j3)}function j3(o,t,e,i){let a="";for(let l=parseInt(t);l<parseInt(e);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function SM(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function K3(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ZE?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ER?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Sa&&(t="SHADOWMAP_TYPE_VSM"),t}function Q3(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Xl:case Wl:t="ENVMAP_TYPE_CUBE";break;case cd:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J3(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Wl:t="ENVMAP_MODE_REFRACTION";break}return t}function $3(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case jE:t="ENVMAP_BLENDING_MULTIPLY";break;case VR:t="ENVMAP_BLENDING_MIX";break;case kR:t="ENVMAP_BLENDING_ADD";break}return t}function tU(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function eU(o,t,e,i){const a=o.getContext(),l=e.defines;let c=e.vertexShader,f=e.fragmentShader;const d=K3(e),p=Q3(e),_=J3(e),g=$3(e),v=tU(e),x=V3(e),E=k3(l),M=a.createProgram();let y,S,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(ac).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(ac).join(`
`),S.length>0&&(S+=`
`)):(y=[SM(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ac).join(`
`),S=[SM(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",e.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ms?"#define TONE_MAPPING":"",e.toneMapping!==Ms?Ee.tonemapping_pars_fragment:"",e.toneMapping!==Ms?H3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,F3("linearToOutputTexel",e.outputColorSpace),G3(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ac).join(`
`)),c=bg(c),c=gM(c,e),c=vM(c,e),f=bg(f),f=gM(f,e),f=vM(f,e),c=xM(c),f=xM(f),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",e.glslVersion===Ny?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ny?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=N+y+c,A=N+S+f,P=pM(a,a.VERTEX_SHADER,L),z=pM(a,a.FRAGMENT_SHADER,A);a.attachShader(M,P),a.attachShader(M,z),e.index0AttributeName!==void 0?a.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function O(H){if(o.debug.checkShaderErrors){const Y=a.getProgramInfoLog(M).trim(),$=a.getShaderInfoLog(P).trim(),ut=a.getShaderInfoLog(z).trim();let st=!0,B=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(st=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,M,P,z);else{const X=_M(a,P,"vertex"),W=_M(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+X+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):($===""||ut==="")&&(B=!1);B&&(H.diagnostics={runnable:st,programLog:Y,vertexShader:{log:$,prefix:y},fragmentShader:{log:ut,prefix:S}})}a.deleteShader(P),a.deleteShader(z),F=new kh(a,M),C=X3(a,M)}let F;this.getUniforms=function(){return F===void 0&&O(this),F};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(M,P3)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z3++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=z,this}let nU=0;class iU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new rU(t),e.set(t,i)),i}}class rU{constructor(t){this.id=nU++,this.code=t,this.usedTimes=0}}function aU(o,t,e,i,a,l,c){const f=new uT,d=new iU,p=new Set,_=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let x=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,R,H,Y,$){const ut=Y.fog,st=$.geometry,B=C.isMeshStandardMaterial?Y.environment:null,X=(C.isMeshStandardMaterial?e:t).get(C.envMap||B),W=X&&X.mapping===cd?X.image.height:null,mt=E[C.type];C.precision!==null&&(x=a.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const b=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Q=b!==void 0?b.length:0;let gt=0;st.morphAttributes.position!==void 0&&(gt=1),st.morphAttributes.normal!==void 0&&(gt=2),st.morphAttributes.color!==void 0&&(gt=3);let yt,j,dt,xt;if(mt){const It=Xr[mt];yt=It.vertexShader,j=It.fragmentShader}else yt=C.vertexShader,j=C.fragmentShader,d.update(C),dt=d.getVertexShaderID(C),xt=d.getFragmentShaderID(C);const Rt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),ae=$.isInstancedMesh===!0,ne=$.isBatchedMesh===!0,ve=!!C.map,xe=!!C.matcap,Xt=!!X,k=!!C.aoMap,Ve=!!C.lightMap,_e=!!C.bumpMap,et=!!C.normalMap,Vt=!!C.displacementMap,ge=!!C.emissiveMap,Kt=!!C.metalnessMap,Wt=!!C.roughnessMap,Ye=C.anisotropy>0,I=C.clearcoat>0,w=C.dispersion>0,tt=C.iridescence>0,pt=C.sheen>0,ht=C.transmission>0,ct=Ye&&!!C.anisotropyMap,Lt=I&&!!C.clearcoatMap,Ut=I&&!!C.clearcoatNormalMap,Yt=I&&!!C.clearcoatRoughnessMap,Bt=tt&&!!C.iridescenceMap,Tt=tt&&!!C.iridescenceThicknessMap,zt=pt&&!!C.sheenColorMap,Qt=pt&&!!C.sheenRoughnessMap,$t=!!C.specularMap,Dt=!!C.specularColorMap,le=!!C.specularIntensityMap,G=ht&&!!C.transmissionMap,Nt=ht&&!!C.thicknessMap,Et=!!C.gradientMap,Ot=!!C.alphaMap,At=C.alphaTest>0,vt=!!C.alphaHash,kt=!!C.extensions;let se=Ms;C.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(se=o.toneMapping);const Pe={shaderID:mt,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:j,defines:C.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:ne,batchingColor:ne&&$._colorsTexture!==null,instancing:ae,instancingColor:ae&&$.instanceColor!==null,instancingMorph:ae&&$.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Yl,alphaToCoverage:!!C.alphaToCoverage,map:ve,matcap:xe,envMap:Xt,envMapMode:Xt&&X.mapping,envMapCubeUVHeight:W,aoMap:k,lightMap:Ve,bumpMap:_e,normalMap:et,displacementMap:v&&Vt,emissiveMap:ge,normalMapObjectSpace:et&&C.normalMapType===eC,normalMapTangentSpace:et&&C.normalMapType===tC,metalnessMap:Kt,roughnessMap:Wt,anisotropy:Ye,anisotropyMap:ct,clearcoat:I,clearcoatMap:Lt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Yt,dispersion:w,iridescence:tt,iridescenceMap:Bt,iridescenceThicknessMap:Tt,sheen:pt,sheenColorMap:zt,sheenRoughnessMap:Qt,specularMap:$t,specularColorMap:Dt,specularIntensityMap:le,transmission:ht,transmissionMap:G,thicknessMap:Nt,gradientMap:Et,opaque:C.transparent===!1&&C.blending===Ll&&C.alphaToCoverage===!1,alphaMap:Ot,alphaTest:At,alphaHash:vt,combine:C.combine,mapUv:ve&&M(C.map.channel),aoMapUv:k&&M(C.aoMap.channel),lightMapUv:Ve&&M(C.lightMap.channel),bumpMapUv:_e&&M(C.bumpMap.channel),normalMapUv:et&&M(C.normalMap.channel),displacementMapUv:Vt&&M(C.displacementMap.channel),emissiveMapUv:ge&&M(C.emissiveMap.channel),metalnessMapUv:Kt&&M(C.metalnessMap.channel),roughnessMapUv:Wt&&M(C.roughnessMap.channel),anisotropyMapUv:ct&&M(C.anisotropyMap.channel),clearcoatMapUv:Lt&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&M(C.sheenRoughnessMap.channel),specularMapUv:$t&&M(C.specularMap.channel),specularColorMapUv:Dt&&M(C.specularColorMap.channel),specularIntensityMapUv:le&&M(C.specularIntensityMap.channel),transmissionMapUv:G&&M(C.transmissionMap.channel),thicknessMapUv:Nt&&M(C.thicknessMap.channel),alphaMapUv:Ot&&M(C.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(et||Ye),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!st.attributes.uv&&(ve||Ot),fog:!!ut,useFog:C.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ct,skinning:$.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:gt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:ve&&C.map.isVideoTexture===!0&&We.getTransfer(C.map.colorSpace)===on,decodeVideoTextureEmissive:ge&&C.emissiveMap.isVideoTexture===!0&&We.getTransfer(C.emissiveMap.colorSpace)===on,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ta,flipSided:C.side===Hi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:kt&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&C.extensions.multiDraw===!0||ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function S(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)R.push(H),R.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(N(R,C),L(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function N(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function L(C,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),C.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),C.push(f.mask)}function A(C){const R=E[C.type];let H;if(R){const Y=Xr[R];H=LC.clone(Y.uniforms)}else H=C.uniforms;return H}function P(C,R){let H;for(let Y=0,$=_.length;Y<$;Y++){const ut=_[Y];if(ut.cacheKey===R){H=ut,++H.usedTimes;break}}return H===void 0&&(H=new eU(o,R,C,l),_.push(H)),H}function z(C){if(--C.usedTimes===0){const R=_.indexOf(C);_[R]=_[_.length-1],_.pop(),C.destroy()}}function O(C){d.remove(C)}function F(){d.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:A,acquireProgram:P,releaseProgram:z,releaseShaderCache:O,programs:_,dispose:F}}function sU(){let o=new WeakMap;function t(c){return o.has(c)}function e(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function i(c){o.delete(c)}function a(c,f,d){o.get(c)[f]=d}function l(){o=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:l}}function oU(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function yM(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function MM(){const o=[];let t=0;const e=[],i=[],a=[];function l(){t=0,e.length=0,i.length=0,a.length=0}function c(g,v,x,E,M,y){let S=o[t];return S===void 0?(S={id:g.id,object:g,geometry:v,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:y},o[t]=S):(S.id=g.id,S.object=g,S.geometry=v,S.material=x,S.groupOrder=E,S.renderOrder=g.renderOrder,S.z=M,S.group=y),t++,S}function f(g,v,x,E,M,y){const S=c(g,v,x,E,M,y);x.transmission>0?i.push(S):x.transparent===!0?a.push(S):e.push(S)}function d(g,v,x,E,M,y){const S=c(g,v,x,E,M,y);x.transmission>0?i.unshift(S):x.transparent===!0?a.unshift(S):e.unshift(S)}function p(g,v){e.length>1&&e.sort(g||oU),i.length>1&&i.sort(v||yM),a.length>1&&a.sort(v||yM)}function _(){for(let g=t,v=o.length;g<v;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:a,init:l,push:f,unshift:d,finish:_,sort:p}}function lU(){let o=new WeakMap;function t(i,a){const l=o.get(i);let c;return l===void 0?(c=new MM,o.set(i,[c])):a>=l.length?(c=new MM,l.push(c)):c=l[a],c}function e(){o=new WeakMap}return{get:t,dispose:e}}function uU(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new ft,color:new en};break;case"SpotLight":e={position:new ft,direction:new ft,color:new en,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ft,color:new en,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ft,skyColor:new en,groundColor:new en};break;case"RectAreaLight":e={color:new en,position:new ft,halfWidth:new ft,halfHeight:new ft};break}return o[t.id]=e,e}}}function cU(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let fU=0;function hU(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function dU(o){const t=new uU,e=cU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new ft);const a=new ft,l=new On,c=new On;function f(p){let _=0,g=0,v=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,E=0,M=0,y=0,S=0,N=0,L=0,A=0,P=0,z=0,O=0;p.sort(hU);for(let C=0,R=p.length;C<R;C++){const H=p[C],Y=H.color,$=H.intensity,ut=H.distance,st=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=Y.r*$,g+=Y.g*$,v+=Y.b*$;else if(H.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(H.sh.coefficients[B],$);O++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,W=e.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.directionalShadow[x]=W,i.directionalShadowMap[x]=st,i.directionalShadowMatrix[x]=H.shadow.matrix,N++}i.directional[x]=B,x++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(Y).multiplyScalar($),B.distance=ut,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,i.spot[M]=B;const X=H.shadow;if(H.map&&(i.spotLightMap[P]=H.map,P++,X.updateMatrices(H),H.castShadow&&z++),i.spotLightMatrix[M]=X.matrix,H.castShadow){const W=e.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=st,A++}M++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(Y).multiplyScalar($),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),i.rectArea[y]=B,y++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const X=H.shadow,W=e.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,i.pointShadow[E]=W,i.pointShadowMap[E]=st,i.pointShadowMatrix[E]=H.shadow.matrix,L++}i.point[E]=B,E++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar($),B.groundColor.copy(H.groundColor).multiplyScalar($),i.hemi[S]=B,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ht.LTC_FLOAT_1,i.rectAreaLTC2=Ht.LTC_FLOAT_2):(i.rectAreaLTC1=Ht.LTC_HALF_1,i.rectAreaLTC2=Ht.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=g,i.ambient[2]=v;const F=i.hash;(F.directionalLength!==x||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==y||F.hemiLength!==S||F.numDirectionalShadows!==N||F.numPointShadows!==L||F.numSpotShadows!==A||F.numSpotMaps!==P||F.numLightProbes!==O)&&(i.directional.length=x,i.spot.length=M,i.rectArea.length=y,i.point.length=E,i.hemi.length=S,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=N,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=A+P-z,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=O,F.directionalLength=x,F.pointLength=E,F.spotLength=M,F.rectAreaLength=y,F.hemiLength=S,F.numDirectionalShadows=N,F.numPointShadows=L,F.numSpotShadows=A,F.numSpotMaps=P,F.numLightProbes=O,i.version=fU++)}function d(p,_){let g=0,v=0,x=0,E=0,M=0;const y=_.matrixWorldInverse;for(let S=0,N=p.length;S<N;S++){const L=p[S];if(L.isDirectionalLight){const A=i.directional[g];A.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(y),g++}else if(L.isSpotLight){const A=i.spot[x];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(y),x++}else if(L.isRectAreaLight){const A=i.rectArea[E];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const A=i.point[v];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const A=i.hemi[M];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(y),M++}}}return{setup:f,setupView:d,state:i}}function EM(o){const t=new dU(o),e=[],i=[];function a(_){p.camera=_,e.length=0,i.length=0}function l(_){e.push(_)}function c(_){i.push(_)}function f(){t.setup(e)}function d(_){t.setupView(e,_)}const p={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function pU(o){let t=new WeakMap;function e(a,l=0){const c=t.get(a);let f;return c===void 0?(f=new EM(o),t.set(a,[f])):l>=c.length?(f=new EM(o),c.push(f)):f=c[l],f}function i(){t=new WeakMap}return{get:e,dispose:i}}const mU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_U=`uniform sampler2D shadow_pass;
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
}`;function gU(o,t,e){let i=new gT;const a=new ln,l=new ln,c=new Ln,f=new kC({depthPacking:$R}),d=new XC,p={},_=e.maxTextureSize,g={[Rs]:Hi,[Hi]:Rs,[Ta]:Ta},v=new Cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ln},radius:{value:4}},vertexShader:mU,fragmentShader:_U}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Pa;E.setAttribute("position",new Qr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ca(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ZE;let S=this.type;this.render=function(z,O,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(ys),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const $=S!==Sa&&this.type===Sa,ut=S===Sa&&this.type!==Sa;for(let st=0,B=z.length;st<B;st++){const X=z[st],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const mt=W.getFrameExtents();if(a.multiply(mt),l.copy(W.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/mt.x),a.x=l.x*mt.x,W.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/mt.y),a.y=l.y*mt.y,W.mapSize.y=l.y)),W.map===null||$===!0||ut===!0){const Q=this.type!==Sa?{minFilter:Pr,magFilter:Pr}:{};W.map!==null&&W.map.dispose(),W.map=new To(a.x,a.y,Q),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const b=W.getViewportCount();for(let Q=0;Q<b;Q++){const gt=W.getViewport(Q);c.set(l.x*gt.x,l.y*gt.y,l.x*gt.z,l.y*gt.w),Y.viewport(c),W.updateMatrices(X,Q),i=W.getFrustum(),A(O,F,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Sa&&N(W,F),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(C,R,H)};function N(z,O){const F=t.update(M);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new To(a.x,a.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(O,null,F,v,M,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(O,null,F,x,M,null)}function L(z,O,F,C){let R=null;const H=F.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)R=H;else if(R=F.isPointLight===!0?d:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=R.uuid,$=O.uuid;let ut=p[Y];ut===void 0&&(ut={},p[Y]=ut);let st=ut[$];st===void 0&&(st=R.clone(),ut[$]=st,O.addEventListener("dispose",P)),R=st}if(R.visible=O.visible,R.wireframe=O.wireframe,C===Sa?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,F.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=o.properties.get(R);Y.light=F}return R}function A(z,O,F,C,R){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Sa)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,z.matrixWorld);const $=t.update(z),ut=z.material;if(Array.isArray(ut)){const st=$.groups;for(let B=0,X=st.length;B<X;B++){const W=st[B],mt=ut[W.materialIndex];if(mt&&mt.visible){const b=L(z,mt,C,R);z.onBeforeShadow(o,z,O,F,$,b,W),o.renderBufferDirect(F,null,$,b,z,W),z.onAfterShadow(o,z,O,F,$,b,W)}}}else if(ut.visible){const st=L(z,ut,C,R);z.onBeforeShadow(o,z,O,F,$,st,null),o.renderBufferDirect(F,null,$,st,z,null),z.onAfterShadow(o,z,O,F,$,st,null)}}const Y=z.children;for(let $=0,ut=Y.length;$<ut;$++)A(Y[$],O,F,C,R)}function P(z){z.target.removeEventListener("dispose",P);for(const F in p){const C=p[F],R=z.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const vU={[H_]:G_,[V_]:W_,[k_]:Y_,[kl]:X_,[G_]:H_,[W_]:V_,[Y_]:k_,[X_]:kl};function xU(o,t){function e(){let G=!1;const Nt=new Ln;let Et=null;const Ot=new Ln(0,0,0,0);return{setMask:function(At){Et!==At&&!G&&(o.colorMask(At,At,At,At),Et=At)},setLocked:function(At){G=At},setClear:function(At,vt,kt,se,Pe){Pe===!0&&(At*=se,vt*=se,kt*=se),Nt.set(At,vt,kt,se),Ot.equals(Nt)===!1&&(o.clearColor(At,vt,kt,se),Ot.copy(Nt))},reset:function(){G=!1,Et=null,Ot.set(-1,0,0,0)}}}function i(){let G=!1,Nt=!1,Et=null,Ot=null,At=null;return{setReversed:function(vt){if(Nt!==vt){const kt=t.get("EXT_clip_control");vt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Nt=vt;const se=At;At=null,this.setClear(se)}},getReversed:function(){return Nt},setTest:function(vt){vt?Rt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(vt){Et!==vt&&!G&&(o.depthMask(vt),Et=vt)},setFunc:function(vt){if(Nt&&(vt=vU[vt]),Ot!==vt){switch(vt){case H_:o.depthFunc(o.NEVER);break;case G_:o.depthFunc(o.ALWAYS);break;case V_:o.depthFunc(o.LESS);break;case kl:o.depthFunc(o.LEQUAL);break;case k_:o.depthFunc(o.EQUAL);break;case X_:o.depthFunc(o.GEQUAL);break;case W_:o.depthFunc(o.GREATER);break;case Y_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ot=vt}},setLocked:function(vt){G=vt},setClear:function(vt){At!==vt&&(Nt&&(vt=1-vt),o.clearDepth(vt),At=vt)},reset:function(){G=!1,Et=null,Ot=null,At=null,Nt=!1}}}function a(){let G=!1,Nt=null,Et=null,Ot=null,At=null,vt=null,kt=null,se=null,Pe=null;return{setTest:function(It){G||(It?Rt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(It){Nt!==It&&!G&&(o.stencilMask(It),Nt=It)},setFunc:function(It,Jt,he){(Et!==It||Ot!==Jt||At!==he)&&(o.stencilFunc(It,Jt,he),Et=It,Ot=Jt,At=he)},setOp:function(It,Jt,he){(vt!==It||kt!==Jt||se!==he)&&(o.stencilOp(It,Jt,he),vt=It,kt=Jt,se=he)},setLocked:function(It){G=It},setClear:function(It){Pe!==It&&(o.clearStencil(It),Pe=It)},reset:function(){G=!1,Nt=null,Et=null,Ot=null,At=null,vt=null,kt=null,se=null,Pe=null}}}const l=new e,c=new i,f=new a,d=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,x=[],E=null,M=!1,y=null,S=null,N=null,L=null,A=null,P=null,z=null,O=new en(0,0,0),F=0,C=!1,R=null,H=null,Y=null,$=null,ut=null;const st=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=X>=2);let mt=null,b={};const Q=o.getParameter(o.SCISSOR_BOX),gt=o.getParameter(o.VIEWPORT),yt=new Ln().fromArray(Q),j=new Ln().fromArray(gt);function dt(G,Nt,Et,Ot){const At=new Uint8Array(4),vt=o.createTexture();o.bindTexture(G,vt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let kt=0;kt<Et;kt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Ot,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Nt+kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return vt}const xt={};xt[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Rt(o.DEPTH_TEST),c.setFunc(kl),_e(!1),et(Ry),Rt(o.CULL_FACE),k(ys);function Rt(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function Ct(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function ae(G,Nt){return g[G]!==Nt?(o.bindFramebuffer(G,Nt),g[G]=Nt,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Nt),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function ne(G,Nt){let Et=x,Ot=!1;if(G){Et=v.get(Nt),Et===void 0&&(Et=[],v.set(Nt,Et));const At=G.textures;if(Et.length!==At.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,kt=At.length;vt<kt;vt++)Et[vt]=o.COLOR_ATTACHMENT0+vt;Et.length=At.length,Ot=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,Ot=!0);Ot&&o.drawBuffers(Et)}function ve(G){return E!==G?(o.useProgram(G),E=G,!0):!1}const xe={[ao]:o.FUNC_ADD,[bR]:o.FUNC_SUBTRACT,[AR]:o.FUNC_REVERSE_SUBTRACT};xe[RR]=o.MIN,xe[CR]=o.MAX;const Xt={[wR]:o.ZERO,[DR]:o.ONE,[UR]:o.SRC_COLOR,[I_]:o.SRC_ALPHA,[BR]:o.SRC_ALPHA_SATURATE,[PR]:o.DST_COLOR,[NR]:o.DST_ALPHA,[LR]:o.ONE_MINUS_SRC_COLOR,[F_]:o.ONE_MINUS_SRC_ALPHA,[zR]:o.ONE_MINUS_DST_COLOR,[OR]:o.ONE_MINUS_DST_ALPHA,[IR]:o.CONSTANT_COLOR,[FR]:o.ONE_MINUS_CONSTANT_COLOR,[HR]:o.CONSTANT_ALPHA,[GR]:o.ONE_MINUS_CONSTANT_ALPHA};function k(G,Nt,Et,Ot,At,vt,kt,se,Pe,It){if(G===ys){M===!0&&(Ct(o.BLEND),M=!1);return}if(M===!1&&(Rt(o.BLEND),M=!0),G!==TR){if(G!==y||It!==C){if((S!==ao||A!==ao)&&(o.blendEquation(o.FUNC_ADD),S=ao,A=ao),It)switch(G){case Ll:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cy:o.blendFunc(o.ONE,o.ONE);break;case wy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dy:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ll:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cy:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case wy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}N=null,L=null,P=null,z=null,O.set(0,0,0),F=0,y=G,C=It}return}At=At||Nt,vt=vt||Et,kt=kt||Ot,(Nt!==S||At!==A)&&(o.blendEquationSeparate(xe[Nt],xe[At]),S=Nt,A=At),(Et!==N||Ot!==L||vt!==P||kt!==z)&&(o.blendFuncSeparate(Xt[Et],Xt[Ot],Xt[vt],Xt[kt]),N=Et,L=Ot,P=vt,z=kt),(se.equals(O)===!1||Pe!==F)&&(o.blendColor(se.r,se.g,se.b,Pe),O.copy(se),F=Pe),y=G,C=!1}function Ve(G,Nt){G.side===Ta?Ct(o.CULL_FACE):Rt(o.CULL_FACE);let Et=G.side===Hi;Nt&&(Et=!Et),_e(Et),G.blending===Ll&&G.transparent===!1?k(ys):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ot=G.stencilWrite;f.setTest(Ot),Ot&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ge(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function _e(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function et(G){G!==yR?(Rt(o.CULL_FACE),G!==H&&(G===Ry?o.cullFace(o.BACK):G===MR?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),H=G}function Vt(G){G!==Y&&(B&&o.lineWidth(G),Y=G)}function ge(G,Nt,Et){G?(Rt(o.POLYGON_OFFSET_FILL),($!==Nt||ut!==Et)&&(o.polygonOffset(Nt,Et),$=Nt,ut=Et)):Ct(o.POLYGON_OFFSET_FILL)}function Kt(G){G?Rt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Wt(G){G===void 0&&(G=o.TEXTURE0+st-1),mt!==G&&(o.activeTexture(G),mt=G)}function Ye(G,Nt,Et){Et===void 0&&(mt===null?Et=o.TEXTURE0+st-1:Et=mt);let Ot=b[Et];Ot===void 0&&(Ot={type:void 0,texture:void 0},b[Et]=Ot),(Ot.type!==G||Ot.texture!==Nt)&&(mt!==Et&&(o.activeTexture(Et),mt=Et),o.bindTexture(G,Nt||xt[G]),Ot.type=G,Ot.texture=Nt)}function I(){const G=b[mt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(G){yt.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),yt.copy(G))}function Qt(G){j.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),j.copy(G))}function $t(G,Nt){let Et=p.get(Nt);Et===void 0&&(Et=new WeakMap,p.set(Nt,Et));let Ot=Et.get(G);Ot===void 0&&(Ot=o.getUniformBlockIndex(Nt,G.name),Et.set(G,Ot))}function Dt(G,Nt){const Ot=p.get(Nt).get(G);d.get(Nt)!==Ot&&(o.uniformBlockBinding(Nt,Ot,G.__bindingPointIndex),d.set(Nt,Ot))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},mt=null,b={},g={},v=new WeakMap,x=[],E=null,M=!1,y=null,S=null,N=null,L=null,A=null,P=null,z=null,O=new en(0,0,0),F=0,C=!1,R=null,H=null,Y=null,$=null,ut=null,yt.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Rt,disable:Ct,bindFramebuffer:ae,drawBuffers:ne,useProgram:ve,setBlending:k,setMaterial:Ve,setFlipSided:_e,setCullFace:et,setLineWidth:Vt,setPolygonOffset:ge,setScissorTest:Kt,activeTexture:Wt,bindTexture:Ye,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:tt,texImage2D:Bt,texImage3D:Tt,updateUBOMapping:$t,uniformBlockBinding:Dt,texStorage2D:Ut,texStorage3D:Yt,texSubImage2D:pt,texSubImage3D:ht,compressedTexSubImage2D:ct,compressedTexSubImage3D:Lt,scissor:zt,viewport:Qt,reset:le}}function SU(o,t,e,i,a,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ln,_=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,w){return x?new OffscreenCanvas(I,w):rd("canvas")}function M(I,w,tt){let pt=1;const ht=Ye(I);if((ht.width>tt||ht.height>tt)&&(pt=tt/Math.max(ht.width,ht.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ct=Math.floor(pt*ht.width),Lt=Math.floor(pt*ht.height);g===void 0&&(g=E(ct,Lt));const Ut=w?E(ct,Lt):g;return Ut.width=ct,Ut.height=Lt,Ut.getContext("2d").drawImage(I,0,0,ct,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+ct+"x"+Lt+")."),Ut}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function y(I){return I.generateMipmaps}function S(I){o.generateMipmap(I)}function N(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(I,w,tt,pt,ht=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ct=w;if(w===o.RED&&(tt===o.FLOAT&&(ct=o.R32F),tt===o.HALF_FLOAT&&(ct=o.R16F),tt===o.UNSIGNED_BYTE&&(ct=o.R8)),w===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.R8UI),tt===o.UNSIGNED_SHORT&&(ct=o.R16UI),tt===o.UNSIGNED_INT&&(ct=o.R32UI),tt===o.BYTE&&(ct=o.R8I),tt===o.SHORT&&(ct=o.R16I),tt===o.INT&&(ct=o.R32I)),w===o.RG&&(tt===o.FLOAT&&(ct=o.RG32F),tt===o.HALF_FLOAT&&(ct=o.RG16F),tt===o.UNSIGNED_BYTE&&(ct=o.RG8)),w===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),tt===o.UNSIGNED_INT&&(ct=o.RG32UI),tt===o.BYTE&&(ct=o.RG8I),tt===o.SHORT&&(ct=o.RG16I),tt===o.INT&&(ct=o.RG32I)),w===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),tt===o.UNSIGNED_INT&&(ct=o.RGB32UI),tt===o.BYTE&&(ct=o.RGB8I),tt===o.SHORT&&(ct=o.RGB16I),tt===o.INT&&(ct=o.RGB32I)),w===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),tt===o.BYTE&&(ct=o.RGBA8I),tt===o.SHORT&&(ct=o.RGBA16I),tt===o.INT&&(ct=o.RGBA32I)),w===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),w===o.RGBA){const Lt=ht?nd:We.getTransfer(pt);tt===o.FLOAT&&(ct=o.RGBA32F),tt===o.HALF_FLOAT&&(ct=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ct=Lt===on?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function A(I,w){let tt;return I?w===null||w===Eo||w===Cc?tt=o.DEPTH24_STENCIL8:w===Aa?tt=o.DEPTH32F_STENCIL8:w===Rc&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Eo||w===Cc?tt=o.DEPTH_COMPONENT24:w===Aa?tt=o.DEPTH_COMPONENT32F:w===Rc&&(tt=o.DEPTH_COMPONENT16),tt}function P(I,w){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pr&&I.minFilter!==Zr?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function z(I){const w=I.target;w.removeEventListener("dispose",z),F(w),w.isVideoTexture&&_.delete(w)}function O(I){const w=I.target;w.removeEventListener("dispose",O),R(w)}function F(I){const w=i.get(I);if(w.__webglInit===void 0)return;const tt=I.source,pt=v.get(tt);if(pt){const ht=pt[w.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&C(I),Object.keys(pt).length===0&&v.delete(tt)}i.remove(I)}function C(I){const w=i.get(I);o.deleteTexture(w.__webglTexture);const tt=I.source,pt=v.get(tt);delete pt[w.__cacheKey],c.memory.textures--}function R(I){const w=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(w.__webglFramebuffer[pt]))for(let ht=0;ht<w.__webglFramebuffer[pt].length;ht++)o.deleteFramebuffer(w.__webglFramebuffer[pt][ht]);else o.deleteFramebuffer(w.__webglFramebuffer[pt]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[pt])}else{if(Array.isArray(w.__webglFramebuffer))for(let pt=0;pt<w.__webglFramebuffer.length;pt++)o.deleteFramebuffer(w.__webglFramebuffer[pt]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pt=0;pt<w.__webglColorRenderbuffer.length;pt++)w.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[pt]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const tt=I.textures;for(let pt=0,ht=tt.length;pt<ht;pt++){const ct=i.get(tt[pt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),c.memory.textures--),i.remove(tt[pt])}i.remove(I)}let H=0;function Y(){H=0}function $(){const I=H;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),H+=1,I}function ut(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function st(I,w){const tt=i.get(I);if(I.isVideoTexture&&Kt(I),I.isRenderTargetTexture===!1&&I.version>0&&tt.__version!==I.version){const pt=I.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(tt,I,w);return}}e.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+w)}function B(I,w){const tt=i.get(I);if(I.version>0&&tt.__version!==I.version){xt(tt,I,w);return}e.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+w)}function X(I,w){const tt=i.get(I);if(I.version>0&&tt.__version!==I.version){xt(tt,I,w);return}e.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+w)}function W(I,w){const tt=i.get(I);if(I.version>0&&tt.__version!==I.version){Rt(tt,I,w);return}e.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+w)}const mt={[j_]:o.REPEAT,[uo]:o.CLAMP_TO_EDGE,[K_]:o.MIRRORED_REPEAT},b={[Pr]:o.NEAREST,[QR]:o.NEAREST_MIPMAP_NEAREST,[ah]:o.NEAREST_MIPMAP_LINEAR,[Zr]:o.LINEAR,[zm]:o.LINEAR_MIPMAP_NEAREST,[co]:o.LINEAR_MIPMAP_LINEAR},Q={[nC]:o.NEVER,[lC]:o.ALWAYS,[iC]:o.LESS,[aT]:o.LEQUAL,[rC]:o.EQUAL,[oC]:o.GEQUAL,[aC]:o.GREATER,[sC]:o.NOTEQUAL};function gt(I,w){if(w.type===Aa&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Zr||w.magFilter===zm||w.magFilter===ah||w.magFilter===co||w.minFilter===Zr||w.minFilter===zm||w.minFilter===ah||w.minFilter===co)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,mt[w.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,mt[w.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,mt[w.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,b[w.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,b[w.minFilter]),w.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Pr||w.minFilter!==ah&&w.minFilter!==co||w.type===Aa&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function yt(I,w){let tt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",z));const pt=w.source;let ht=v.get(pt);ht===void 0&&(ht={},v.set(pt,ht));const ct=ut(w);if(ct!==I.__cacheKey){ht[ct]===void 0&&(ht[ct]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,tt=!0),ht[ct].usedTimes++;const Lt=ht[I.__cacheKey];Lt!==void 0&&(ht[I.__cacheKey].usedTimes--,Lt.usedTimes===0&&C(w)),I.__cacheKey=ct,I.__webglTexture=ht[ct].texture}return tt}function j(I,w,tt){return Math.floor(Math.floor(I/tt)/w)}function dt(I,w,tt,pt){const ct=I.updateRanges;if(ct.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,tt,pt,w.data);else{ct.sort((Tt,zt)=>Tt.start-zt.start);let Lt=0;for(let Tt=1;Tt<ct.length;Tt++){const zt=ct[Lt],Qt=ct[Tt],$t=zt.start+zt.count,Dt=j(Qt.start,w.width,4),le=j(zt.start,w.width,4);Qt.start<=$t+1&&Dt===le&&j(Qt.start+Qt.count-1,w.width,4)===Dt?zt.count=Math.max(zt.count,Qt.start+Qt.count-zt.start):(++Lt,ct[Lt]=Qt)}ct.length=Lt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Yt=o.getParameter(o.UNPACK_SKIP_PIXELS),Bt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let Tt=0,zt=ct.length;Tt<zt;Tt++){const Qt=ct[Tt],$t=Math.floor(Qt.start/4),Dt=Math.ceil(Qt.count/4),le=$t%w.width,G=Math.floor($t/w.width),Nt=Dt,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),e.texSubImage2D(o.TEXTURE_2D,0,le,G,Nt,Et,tt,pt,w.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Bt)}}function xt(I,w,tt){let pt=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pt=o.TEXTURE_3D);const ht=yt(I,w),ct=w.source;e.bindTexture(pt,I.__webglTexture,o.TEXTURE0+tt);const Lt=i.get(ct);if(ct.version!==Lt.__version||ht===!0){e.activeTexture(o.TEXTURE0+tt);const Ut=We.getPrimaries(We.workingColorSpace),Yt=w.colorSpace===hs?null:We.getPrimaries(w.colorSpace),Bt=w.colorSpace===hs||Ut===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let Tt=M(w.image,!1,a.maxTextureSize);Tt=Wt(w,Tt);const zt=l.convert(w.format,w.colorSpace),Qt=l.convert(w.type);let $t=L(w.internalFormat,zt,Qt,w.colorSpace,w.isVideoTexture);gt(pt,w);let Dt;const le=w.mipmaps,G=w.isVideoTexture!==!0,Nt=Lt.__version===void 0||ht===!0,Et=ct.dataReady,Ot=P(w,Tt);if(w.isDepthTexture)$t=A(w.format===Dc,w.type),Nt&&(G?e.texStorage2D(o.TEXTURE_2D,1,$t,Tt.width,Tt.height):e.texImage2D(o.TEXTURE_2D,0,$t,Tt.width,Tt.height,0,zt,Qt,null));else if(w.isDataTexture)if(le.length>0){G&&Nt&&e.texStorage2D(o.TEXTURE_2D,Ot,$t,le[0].width,le[0].height);for(let At=0,vt=le.length;At<vt;At++)Dt=le[At],G?Et&&e.texSubImage2D(o.TEXTURE_2D,At,0,0,Dt.width,Dt.height,zt,Qt,Dt.data):e.texImage2D(o.TEXTURE_2D,At,$t,Dt.width,Dt.height,0,zt,Qt,Dt.data);w.generateMipmaps=!1}else G?(Nt&&e.texStorage2D(o.TEXTURE_2D,Ot,$t,Tt.width,Tt.height),Et&&dt(w,Tt,zt,Qt)):e.texImage2D(o.TEXTURE_2D,0,$t,Tt.width,Tt.height,0,zt,Qt,Tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Nt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Ot,$t,le[0].width,le[0].height,Tt.depth);for(let At=0,vt=le.length;At<vt;At++)if(Dt=le[At],w.format!==Or)if(zt!==null)if(G){if(Et)if(w.layerUpdates.size>0){const kt=$y(Dt.width,Dt.height,w.format,w.type);for(const se of w.layerUpdates){const Pe=Dt.data.subarray(se*kt/Dt.data.BYTES_PER_ELEMENT,(se+1)*kt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,se,Dt.width,Dt.height,1,zt,Pe)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Dt.width,Dt.height,Tt.depth,zt,Dt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,$t,Dt.width,Dt.height,Tt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Et&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Dt.width,Dt.height,Tt.depth,zt,Qt,Dt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,At,$t,Dt.width,Dt.height,Tt.depth,0,zt,Qt,Dt.data)}else{G&&Nt&&e.texStorage2D(o.TEXTURE_2D,Ot,$t,le[0].width,le[0].height);for(let At=0,vt=le.length;At<vt;At++)Dt=le[At],w.format!==Or?zt!==null?G?Et&&e.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,Dt.width,Dt.height,zt,Dt.data):e.compressedTexImage2D(o.TEXTURE_2D,At,$t,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Et&&e.texSubImage2D(o.TEXTURE_2D,At,0,0,Dt.width,Dt.height,zt,Qt,Dt.data):e.texImage2D(o.TEXTURE_2D,At,$t,Dt.width,Dt.height,0,zt,Qt,Dt.data)}else if(w.isDataArrayTexture)if(G){if(Nt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Ot,$t,Tt.width,Tt.height,Tt.depth),Et)if(w.layerUpdates.size>0){const At=$y(Tt.width,Tt.height,w.format,w.type);for(const vt of w.layerUpdates){const kt=Tt.data.subarray(vt*At/Tt.data.BYTES_PER_ELEMENT,(vt+1)*At/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Tt.width,Tt.height,1,zt,Qt,kt)}w.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,zt,Qt,Tt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,$t,Tt.width,Tt.height,Tt.depth,0,zt,Qt,Tt.data);else if(w.isData3DTexture)G?(Nt&&e.texStorage3D(o.TEXTURE_3D,Ot,$t,Tt.width,Tt.height,Tt.depth),Et&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,zt,Qt,Tt.data)):e.texImage3D(o.TEXTURE_3D,0,$t,Tt.width,Tt.height,Tt.depth,0,zt,Qt,Tt.data);else if(w.isFramebufferTexture){if(Nt)if(G)e.texStorage2D(o.TEXTURE_2D,Ot,$t,Tt.width,Tt.height);else{let At=Tt.width,vt=Tt.height;for(let kt=0;kt<Ot;kt++)e.texImage2D(o.TEXTURE_2D,kt,$t,At,vt,0,zt,Qt,null),At>>=1,vt>>=1}}else if(le.length>0){if(G&&Nt){const At=Ye(le[0]);e.texStorage2D(o.TEXTURE_2D,Ot,$t,At.width,At.height)}for(let At=0,vt=le.length;At<vt;At++)Dt=le[At],G?Et&&e.texSubImage2D(o.TEXTURE_2D,At,0,0,zt,Qt,Dt):e.texImage2D(o.TEXTURE_2D,At,$t,zt,Qt,Dt);w.generateMipmaps=!1}else if(G){if(Nt){const At=Ye(Tt);e.texStorage2D(o.TEXTURE_2D,Ot,$t,At.width,At.height)}Et&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,Qt,Tt)}else e.texImage2D(o.TEXTURE_2D,0,$t,zt,Qt,Tt);y(w)&&S(pt),Lt.__version=ct.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Rt(I,w,tt){if(w.image.length!==6)return;const pt=yt(I,w),ht=w.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+tt);const ct=i.get(ht);if(ht.version!==ct.__version||pt===!0){e.activeTexture(o.TEXTURE0+tt);const Lt=We.getPrimaries(We.workingColorSpace),Ut=w.colorSpace===hs?null:We.getPrimaries(w.colorSpace),Yt=w.colorSpace===hs||Lt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const Bt=w.isCompressedTexture||w.image[0].isCompressedTexture,Tt=w.image[0]&&w.image[0].isDataTexture,zt=[];for(let vt=0;vt<6;vt++)!Bt&&!Tt?zt[vt]=M(w.image[vt],!0,a.maxCubemapSize):zt[vt]=Tt?w.image[vt].image:w.image[vt],zt[vt]=Wt(w,zt[vt]);const Qt=zt[0],$t=l.convert(w.format,w.colorSpace),Dt=l.convert(w.type),le=L(w.internalFormat,$t,Dt,w.colorSpace),G=w.isVideoTexture!==!0,Nt=ct.__version===void 0||pt===!0,Et=ht.dataReady;let Ot=P(w,Qt);gt(o.TEXTURE_CUBE_MAP,w);let At;if(Bt){G&&Nt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,le,Qt.width,Qt.height);for(let vt=0;vt<6;vt++){At=zt[vt].mipmaps;for(let kt=0;kt<At.length;kt++){const se=At[kt];w.format!==Or?$t!==null?G?Et&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt,0,0,se.width,se.height,$t,se.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt,le,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Et&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt,0,0,se.width,se.height,$t,Dt,se.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt,le,se.width,se.height,0,$t,Dt,se.data)}}}else{if(At=w.mipmaps,G&&Nt){At.length>0&&Ot++;const vt=Ye(zt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,le,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Tt){G?Et&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,zt[vt].width,zt[vt].height,$t,Dt,zt[vt].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,zt[vt].width,zt[vt].height,0,$t,Dt,zt[vt].data);for(let kt=0;kt<At.length;kt++){const Pe=At[kt].image[vt].image;G?Et&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt+1,0,0,Pe.width,Pe.height,$t,Dt,Pe.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt+1,le,Pe.width,Pe.height,0,$t,Dt,Pe.data)}}else{G?Et&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,$t,Dt,zt[vt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,$t,Dt,zt[vt]);for(let kt=0;kt<At.length;kt++){const se=At[kt];G?Et&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt+1,0,0,$t,Dt,se.image[vt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt+1,le,$t,Dt,se.image[vt])}}}y(w)&&S(o.TEXTURE_CUBE_MAP),ct.__version=ht.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ct(I,w,tt,pt,ht,ct){const Lt=l.convert(tt.format,tt.colorSpace),Ut=l.convert(tt.type),Yt=L(tt.internalFormat,Lt,Ut,tt.colorSpace),Bt=i.get(w),Tt=i.get(tt);if(Tt.__renderTarget=w,!Bt.__hasExternalTextures){const zt=Math.max(1,w.width>>ct),Qt=Math.max(1,w.height>>ct);ht===o.TEXTURE_3D||ht===o.TEXTURE_2D_ARRAY?e.texImage3D(ht,ct,Yt,zt,Qt,w.depth,0,Lt,Ut,null):e.texImage2D(ht,ct,Yt,zt,Qt,0,Lt,Ut,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),ge(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,ht,Tt.__webglTexture,0,Vt(w)):(ht===o.TEXTURE_2D||ht>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,ht,Tt.__webglTexture,ct),e.bindFramebuffer(o.FRAMEBUFFER,null)}function ae(I,w,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,I),w.depthBuffer){const pt=w.depthTexture,ht=pt&&pt.isDepthTexture?pt.type:null,ct=A(w.stencilBuffer,ht),Lt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Vt(w);ge(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ct,w.width,w.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ct,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ct,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,I)}else{const pt=w.textures;for(let ht=0;ht<pt.length;ht++){const ct=pt[ht],Lt=l.convert(ct.format,ct.colorSpace),Ut=l.convert(ct.type),Yt=L(ct.internalFormat,Lt,Ut,ct.colorSpace),Bt=Vt(w);tt&&ge(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,Yt,w.width,w.height):ge(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Bt,Yt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ne(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=i.get(w.depthTexture);pt.__renderTarget=w,(!pt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),st(w.depthTexture,0);const ht=pt.__webglTexture,ct=Vt(w);if(w.depthTexture.format===wc)ge(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ht,0);else if(w.depthTexture.format===Dc)ge(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function ve(I){const w=i.get(I),tt=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pt){const ht=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pt.removeEventListener("dispose",ht)};pt.addEventListener("dispose",ht),w.__depthDisposeCallback=ht}w.__boundDepthTexture=pt}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=I.texture.mipmaps;pt&&pt.length>0?ne(w.__webglFramebuffer[0],I):ne(w.__webglFramebuffer,I)}else if(tt){w.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[pt]),w.__webglDepthbuffer[pt]===void 0)w.__webglDepthbuffer[pt]=o.createRenderbuffer(),ae(w.__webglDepthbuffer[pt],I,!1);else{const ht=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=w.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,ct)}}else{const pt=I.texture.mipmaps;if(pt&&pt.length>0?e.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),ae(w.__webglDepthbuffer,I,!1);else{const ht=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,ct)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(I,w,tt){const pt=i.get(I);w!==void 0&&Ct(pt.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&ve(I)}function Xt(I){const w=I.texture,tt=i.get(I),pt=i.get(w);I.addEventListener("dispose",O);const ht=I.textures,ct=I.isWebGLCubeRenderTarget===!0,Lt=ht.length>1;if(Lt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=w.version,c.memory.textures++),ct){tt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer[Ut]=[];for(let Yt=0;Yt<w.mipmaps.length;Yt++)tt.__webglFramebuffer[Ut][Yt]=o.createFramebuffer()}else tt.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ut=0;Ut<w.mipmaps.length;Ut++)tt.__webglFramebuffer[Ut]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let Ut=0,Yt=ht.length;Ut<Yt;Ut++){const Bt=i.get(ht[Ut]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=o.createTexture(),c.memory.textures++)}if(I.samples>0&&ge(I)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<ht.length;Ut++){const Yt=ht[Ut];tt.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut]);const Bt=l.convert(Yt.format,Yt.colorSpace),Tt=l.convert(Yt.type),zt=L(Yt.internalFormat,Bt,Tt,Yt.colorSpace,I.isXRRenderTarget===!0),Qt=Vt(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,zt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),ae(tt.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){e.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),gt(o.TEXTURE_CUBE_MAP,w);for(let Ut=0;Ut<6;Ut++)if(w.mipmaps&&w.mipmaps.length>0)for(let Yt=0;Yt<w.mipmaps.length;Yt++)Ct(tt.__webglFramebuffer[Ut][Yt],I,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Yt);else Ct(tt.__webglFramebuffer[Ut],I,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(w)&&S(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let Ut=0,Yt=ht.length;Ut<Yt;Ut++){const Bt=ht[Ut],Tt=i.get(Bt);e.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),gt(o.TEXTURE_2D,Bt),Ct(tt.__webglFramebuffer,I,Bt,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),y(Bt)&&S(o.TEXTURE_2D)}e.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ut=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Ut,pt.__webglTexture),gt(Ut,w),w.mipmaps&&w.mipmaps.length>0)for(let Yt=0;Yt<w.mipmaps.length;Yt++)Ct(tt.__webglFramebuffer[Yt],I,w,o.COLOR_ATTACHMENT0,Ut,Yt);else Ct(tt.__webglFramebuffer,I,w,o.COLOR_ATTACHMENT0,Ut,0);y(w)&&S(Ut),e.unbindTexture()}I.depthBuffer&&ve(I)}function k(I){const w=I.textures;for(let tt=0,pt=w.length;tt<pt;tt++){const ht=w[tt];if(y(ht)){const ct=N(I),Lt=i.get(ht).__webglTexture;e.bindTexture(ct,Lt),S(ct),e.unbindTexture()}}}const Ve=[],_e=[];function et(I){if(I.samples>0){if(ge(I)===!1){const w=I.textures,tt=I.width,pt=I.height;let ht=o.COLOR_BUFFER_BIT;const ct=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=i.get(I),Ut=w.length>1;if(Ut)for(let Bt=0;Bt<w.length;Bt++)e.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Yt=I.texture.mipmaps;Yt&&Yt.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Bt=0;Bt<w.length;Bt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Bt]);const Tt=i.get(w[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,ht,o.NEAREST),d===!0&&(Ve.length=0,_e.length=0,Ve.push(o.COLOR_ATTACHMENT0+Bt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ve.push(ct),_e.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,_e)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ve))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Bt=0;Bt<w.length;Bt++){e.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Bt]);const Tt=i.get(w[Bt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,Tt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const w=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function Vt(I){return Math.min(a.maxSamples,I.samples)}function ge(I){const w=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Kt(I){const w=c.render.frame;_.get(I)!==w&&(_.set(I,w),I.update())}function Wt(I,w){const tt=I.colorSpace,pt=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||tt!==Yl&&tt!==hs&&(We.getTransfer(tt)===on?(pt!==Or||ht!==Na)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),w}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=Y,this.setTexture2D=st,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=xe,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ge}function yU(o,t){function e(i,a=hs){let l;const c=We.getTransfer(a);if(i===Na)return o.UNSIGNED_BYTE;if(i===e0)return o.UNSIGNED_SHORT_4_4_4_4;if(i===n0)return o.UNSIGNED_SHORT_5_5_5_1;if(i===$E)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===QE)return o.BYTE;if(i===JE)return o.SHORT;if(i===Rc)return o.UNSIGNED_SHORT;if(i===t0)return o.INT;if(i===Eo)return o.UNSIGNED_INT;if(i===Aa)return o.FLOAT;if(i===Lc)return o.HALF_FLOAT;if(i===tT)return o.ALPHA;if(i===eT)return o.RGB;if(i===Or)return o.RGBA;if(i===wc)return o.DEPTH_COMPONENT;if(i===Dc)return o.DEPTH_STENCIL;if(i===nT)return o.RED;if(i===i0)return o.RED_INTEGER;if(i===iT)return o.RG;if(i===r0)return o.RG_INTEGER;if(i===a0)return o.RGBA_INTEGER;if(i===Ih||i===Fh||i===Hh||i===Gh)if(c===on)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Ih)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Ih)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Q_||i===J_||i===$_||i===tg)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Q_)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===J_)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$_)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tg)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eg||i===ng||i===ig)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===eg||i===ng)return c===on?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===ig)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rg||i===ag||i===sg||i===og||i===lg||i===ug||i===cg||i===fg||i===hg||i===dg||i===pg||i===mg||i===_g||i===gg)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===rg)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ag)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sg)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===og)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lg)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ug)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cg)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fg)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hg)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dg)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pg)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mg)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_g)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gg)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vh||i===vg||i===xg)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===Vh)return c===on?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vg)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xg)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rT||i===Sg||i===yg||i===Mg)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===Vh)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Sg)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yg)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mg)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cc?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:e}}const MU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EU=`
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

}`;class TU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const a=new Gi,l=t.properties.get(a);l.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Cs({vertexShader:MU,fragmentShader:EU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ca(new hd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bU extends Zl{constructor(t,e){super();const i=this;let a=null,l=1,c=null,f="local-floor",d=1,p=null,_=null,g=null,v=null,x=null,E=null;const M=new TU,y=e.getContextAttributes();let S=null,N=null;const L=[],A=[],P=new ln;let z=null;const O=new yr;O.viewport=new Ln;const F=new yr;F.viewport=new Ln;const C=[O,F],R=new YC;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let dt=L[j];return dt===void 0&&(dt=new a_,L[j]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(j){let dt=L[j];return dt===void 0&&(dt=new a_,L[j]=dt),dt.getGripSpace()},this.getHand=function(j){let dt=L[j];return dt===void 0&&(dt=new a_,L[j]=dt),dt.getHandSpace()};function $(j){const dt=A.indexOf(j.inputSource);if(dt===-1)return;const xt=L[dt];xt!==void 0&&(xt.update(j.inputSource,j.frame,p||c),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function ut(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",ut),a.removeEventListener("inputsourceschange",st);for(let j=0;j<L.length;j++){const dt=A[j];dt!==null&&(A[j]=null,L[j].disconnect(dt))}H=null,Y=null,M.reset(),t.setRenderTarget(S),x=null,v=null,g=null,a=null,N=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(z),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(S=t.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",ut),a.addEventListener("inputsourceschange",st),y.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Rt=null,Ct=null;y.depth&&(Ct=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=y.stencil?Dc:wc,Rt=y.stencil?Cc:Eo);const ae={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:l};g=new XRWebGLBinding(a,e),v=g.createProjectionLayer(ae),a.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new To(v.textureWidth,v.textureHeight,{format:Or,type:Na,depthTexture:new xT(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,e,xt),a.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new To(x.framebufferWidth,x.framebufferHeight,{format:Or,type:Na,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await a.requestReferenceSpace(f),yt.setContext(a),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function st(j){for(let dt=0;dt<j.removed.length;dt++){const xt=j.removed[dt],Rt=A.indexOf(xt);Rt>=0&&(A[Rt]=null,L[Rt].disconnect(xt))}for(let dt=0;dt<j.added.length;dt++){const xt=j.added[dt];let Rt=A.indexOf(xt);if(Rt===-1){for(let ae=0;ae<L.length;ae++)if(ae>=A.length){A.push(xt),Rt=ae;break}else if(A[ae]===null){A[ae]=xt,Rt=ae;break}if(Rt===-1)break}const Ct=L[Rt];Ct&&Ct.connect(xt)}}const B=new ft,X=new ft;function W(j,dt,xt){B.setFromMatrixPosition(dt.matrixWorld),X.setFromMatrixPosition(xt.matrixWorld);const Rt=B.distanceTo(X),Ct=dt.projectionMatrix.elements,ae=xt.projectionMatrix.elements,ne=Ct[14]/(Ct[10]-1),ve=Ct[14]/(Ct[10]+1),xe=(Ct[9]+1)/Ct[5],Xt=(Ct[9]-1)/Ct[5],k=(Ct[8]-1)/Ct[0],Ve=(ae[8]+1)/ae[0],_e=ne*k,et=ne*Ve,Vt=Rt/(-k+Ve),ge=Vt*-k;if(dt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ge),j.translateZ(Vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ct[10]===-1)j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Kt=ne+Vt,Wt=ve+Vt,Ye=_e-ge,I=et+(Rt-ge),w=xe*ve/Wt*Kt,tt=Xt*ve/Wt*Kt;j.projectionMatrix.makePerspective(Ye,I,w,tt,Kt,Wt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function mt(j,dt){dt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(dt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let dt=j.near,xt=j.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),R.near=F.near=O.near=dt,R.far=F.far=O.far=xt,(H!==R.near||Y!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,Y=R.far),O.layers.mask=j.layers.mask|2,F.layers.mask=j.layers.mask|4,R.layers.mask=O.layers.mask|F.layers.mask;const Rt=j.parent,Ct=R.cameras;mt(R,Rt);for(let ae=0;ae<Ct.length;ae++)mt(Ct[ae],Rt);Ct.length===2?W(R,O,F):R.projectionMatrix.copy(O.projectionMatrix),b(j,R,Rt)};function b(j,dt,xt){xt===null?j.matrix.copy(dt.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply(dt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Eg*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(j){d=j,v!==null&&(v.fixedFoveation=j),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let Q=null;function gt(j,dt){if(_=dt.getViewerPose(p||c),E=dt,_!==null){const xt=_.views;x!==null&&(t.setRenderTargetFramebuffer(N,x.framebuffer),t.setRenderTarget(N));let Rt=!1;xt.length!==R.cameras.length&&(R.cameras.length=0,Rt=!0);for(let ne=0;ne<xt.length;ne++){const ve=xt[ne];let xe=null;if(x!==null)xe=x.getViewport(ve);else{const k=g.getViewSubImage(v,ve);xe=k.viewport,ne===0&&(t.setRenderTargetTextures(N,k.colorTexture,k.depthStencilTexture),t.setRenderTarget(N))}let Xt=C[ne];Xt===void 0&&(Xt=new yr,Xt.layers.enable(ne),Xt.viewport=new Ln,C[ne]=Xt),Xt.matrix.fromArray(ve.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(ve.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(xe.x,xe.y,xe.width,xe.height),ne===0&&(R.matrix.copy(Xt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Rt===!0&&R.cameras.push(Xt)}const Ct=a.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const ne=g.getDepthInformation(xt[0]);ne&&ne.isValid&&ne.texture&&M.init(t,ne,a.renderState)}}for(let xt=0;xt<L.length;xt++){const Rt=A[xt],Ct=L[xt];Rt!==null&&Ct!==void 0&&Ct.update(Rt,dt,p||c)}Q&&Q(j,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),E=null}const yt=new ST;yt.setAnimationLoop(gt),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}}const $s=new Oa,AU=new On;function RU(o,t){function e(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,pT(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,N,L,A){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(y,S):S.isMeshToonMaterial?(l(y,S),g(y,S)):S.isMeshPhongMaterial?(l(y,S),_(y,S)):S.isMeshStandardMaterial?(l(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,A)):S.isMeshMatcapMaterial?(l(y,S),E(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),M(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,N,L):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,e(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,e(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,e(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Hi&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,e(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Hi&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,e(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,e(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,e(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const N=t.get(S),L=N.envMap,A=N.envMapRotation;L&&(y.envMap.value=L,$s.copy(A),$s.x*=-1,$s.y*=-1,$s.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),y.envMapRotation.value.setFromMatrix4(AU.makeRotationFromEuler($s)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,e(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,e(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,e(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,N,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*N,y.scale.value=L*.5,S.map&&(y.map.value=S.map,e(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,e(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,e(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,e(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,e(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,e(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,N){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,e(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,e(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,e(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,e(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,e(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Hi&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,e(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,e(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,e(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,e(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,e(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,e(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,e(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function M(y,S){const N=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function CU(o,t,e,i){let a={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(N,L){const A=L.program;i.uniformBlockBinding(N,A)}function p(N,L){let A=a[N.id];A===void 0&&(E(N),A=_(N),a[N.id]=A,N.addEventListener("dispose",y));const P=L.program;i.updateUBOMapping(N,P);const z=t.render.frame;l[N.id]!==z&&(v(N),l[N.id]=z)}function _(N){const L=g();N.__bindingPointIndex=L;const A=o.createBuffer(),P=N.__size,z=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,P,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,A),A}function g(){for(let N=0;N<f;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const L=a[N.id],A=N.uniforms,P=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let z=0,O=A.length;z<O;z++){const F=Array.isArray(A[z])?A[z]:[A[z]];for(let C=0,R=F.length;C<R;C++){const H=F[C];if(x(H,z,C,P)===!0){const Y=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let st=0;st<$.length;st++){const B=$[st],X=M(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,Y+ut,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,ut),ut+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(N,L,A,P){const z=N.value,O=L+"_"+A;if(P[O]===void 0)return typeof z=="number"||typeof z=="boolean"?P[O]=z:P[O]=z.clone(),!0;{const F=P[O];if(typeof z=="number"||typeof z=="boolean"){if(F!==z)return P[O]=z,!0}else if(F.equals(z)===!1)return F.copy(z),!0}return!1}function E(N){const L=N.uniforms;let A=0;const P=16;for(let O=0,F=L.length;O<F;O++){const C=Array.isArray(L[O])?L[O]:[L[O]];for(let R=0,H=C.length;R<H;R++){const Y=C[R],$=Array.isArray(Y.value)?Y.value:[Y.value];for(let ut=0,st=$.length;ut<st;ut++){const B=$[ut],X=M(B),W=A%P,mt=W%X.boundary,b=W+mt;A+=mt,b!==0&&P-b<X.storage&&(A+=P-b),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=X.storage}}}const z=A%P;return z>0&&(A+=P-z),N.__size=A,N.__cache={},this}function M(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const A=c.indexOf(L.__bindingPointIndex);c.splice(A,1),o.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function S(){for(const N in a)o.deleteBuffer(a[N]);c=[],a={},l={}}return{bind:d,update:p,dispose:S}}class wU{constructor(t={}){const{canvas:e=cC(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,S=null;const N=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1;this._outputColorSpace=vr;let z=0,O=0,F=null,C=-1,R=null;const H=new Ln,Y=new Ln;let $=null;const ut=new en(0);let st=0,B=e.width,X=e.height,W=1,mt=null,b=null;const Q=new Ln(0,0,B,X),gt=new Ln(0,0,B,X);let yt=!1;const j=new gT;let dt=!1,xt=!1;const Rt=new On,Ct=new On,ae=new ft,ne=new Ln,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Xt(){return F===null?W:1}let k=i;function Ve(U,K){return e.getContext(U,K)}try{const U={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$g}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",vt,!1),k===null){const K="webgl2";if(k=Ve(K,U),k===null)throw Ve(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let _e,et,Vt,ge,Kt,Wt,Ye,I,w,tt,pt,ht,ct,Lt,Ut,Yt,Bt,Tt,zt,Qt,$t,Dt,le,G;function Nt(){_e=new FD(k),_e.init(),Dt=new yU(k,_e),et=new LD(k,_e,t,Dt),Vt=new xU(k,_e),et.reverseDepthBuffer&&v&&Vt.buffers.depth.setReversed(!0),ge=new VD(k),Kt=new sU,Wt=new SU(k,_e,Vt,Kt,et,Dt,ge),Ye=new OD(A),I=new ID(A),w=new ZC(k),le=new DD(k,w),tt=new HD(k,w,ge,le),pt=new XD(k,tt,w,ge),zt=new kD(k,et,Wt),Yt=new ND(Kt),ht=new aU(A,Ye,I,_e,et,le,Yt),ct=new RU(A,Kt),Lt=new lU,Ut=new pU(_e),Tt=new wD(A,Ye,I,Vt,pt,x,d),Bt=new gU(A,pt,et),G=new CU(k,ge,et,Vt),Qt=new UD(k,_e,ge),$t=new GD(k,_e,ge),ge.programs=ht.programs,A.capabilities=et,A.extensions=_e,A.properties=Kt,A.renderLists=Lt,A.shadowMap=Bt,A.state=Vt,A.info=ge}Nt();const Et=new bU(A,k);this.xr=Et,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const U=_e.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=_e.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(U){U!==void 0&&(W=U,this.setSize(B,X,!1))},this.getSize=function(U){return U.set(B,X)},this.setSize=function(U,K,ot=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=U,X=K,e.width=Math.floor(U*W),e.height=Math.floor(K*W),ot===!0&&(e.style.width=U+"px",e.style.height=K+"px"),this.setViewport(0,0,U,K)},this.getDrawingBufferSize=function(U){return U.set(B*W,X*W).floor()},this.setDrawingBufferSize=function(U,K,ot){B=U,X=K,W=ot,e.width=Math.floor(U*ot),e.height=Math.floor(K*ot),this.setViewport(0,0,U,K)},this.getCurrentViewport=function(U){return U.copy(H)},this.getViewport=function(U){return U.copy(Q)},this.setViewport=function(U,K,ot,it){U.isVector4?Q.set(U.x,U.y,U.z,U.w):Q.set(U,K,ot,it),Vt.viewport(H.copy(Q).multiplyScalar(W).round())},this.getScissor=function(U){return U.copy(gt)},this.setScissor=function(U,K,ot,it){U.isVector4?gt.set(U.x,U.y,U.z,U.w):gt.set(U,K,ot,it),Vt.scissor(Y.copy(gt).multiplyScalar(W).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(U){Vt.setScissorTest(yt=U)},this.setOpaqueSort=function(U){mt=U},this.setTransparentSort=function(U){b=U},this.getClearColor=function(U){return U.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(U=!0,K=!0,ot=!0){let it=0;if(U){let Z=!1;if(F!==null){const bt=F.texture.format;Z=bt===a0||bt===r0||bt===i0}if(Z){const bt=F.texture.type,Pt=bt===Na||bt===Eo||bt===Rc||bt===Cc||bt===e0||bt===n0,Gt=Tt.getClearColor(),Ft=Tt.getClearAlpha(),ie=Gt.r,re=Gt.g,te=Gt.b;Pt?(E[0]=ie,E[1]=re,E[2]=te,E[3]=Ft,k.clearBufferuiv(k.COLOR,0,E)):(M[0]=ie,M[1]=re,M[2]=te,M[3]=Ft,k.clearBufferiv(k.COLOR,0,M))}else it|=k.COLOR_BUFFER_BIT}K&&(it|=k.DEPTH_BUFFER_BIT),ot&&(it|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Tt.dispose(),Lt.dispose(),Ut.dispose(),Kt.dispose(),Ye.dispose(),I.dispose(),pt.dispose(),le.dispose(),G.dispose(),ht.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",wt),Et.removeEventListener("sessionend",ee),qt.stop()};function Ot(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const U=ge.autoReset,K=Bt.enabled,ot=Bt.autoUpdate,it=Bt.needsUpdate,Z=Bt.type;Nt(),ge.autoReset=U,Bt.enabled=K,Bt.autoUpdate=ot,Bt.needsUpdate=it,Bt.type=Z}function vt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function kt(U){const K=U.target;K.removeEventListener("dispose",kt),se(K)}function se(U){Pe(U),Kt.remove(U)}function Pe(U){const K=Kt.get(U).programs;K!==void 0&&(K.forEach(function(ot){ht.releaseProgram(ot)}),U.isShaderMaterial&&ht.releaseShaderCache(U))}this.renderBufferDirect=function(U,K,ot,it,Z,bt){K===null&&(K=ve);const Pt=Z.isMesh&&Z.matrixWorld.determinant()<0,Gt=Gn(U,K,ot,it,Z);Vt.setMaterial(it,Pt);let Ft=ot.index,ie=1;if(it.wireframe===!0){if(Ft=tt.getWireframeAttribute(ot),Ft===void 0)return;ie=2}const re=ot.drawRange,te=ot.attributes.position;let pe=re.start*ie,je=(re.start+re.count)*ie;bt!==null&&(pe=Math.max(pe,bt.start*ie),je=Math.min(je,(bt.start+bt.count)*ie)),Ft!==null?(pe=Math.max(pe,0),je=Math.min(je,Ft.count)):te!=null&&(pe=Math.max(pe,0),je=Math.min(je,te.count));const vn=je-pe;if(vn<0||vn===1/0)return;le.setup(Z,it,Gt,ot,Ft);let Re,Ke=Qt;if(Ft!==null&&(Re=w.get(Ft),Ke=$t,Ke.setIndex(Re)),Z.isMesh)it.wireframe===!0?(Vt.setLineWidth(it.wireframeLinewidth*Xt()),Ke.setMode(k.LINES)):Ke.setMode(k.TRIANGLES);else if(Z.isLine){let ue=it.linewidth;ue===void 0&&(ue=1),Vt.setLineWidth(ue*Xt()),Z.isLineSegments?Ke.setMode(k.LINES):Z.isLineLoop?Ke.setMode(k.LINE_LOOP):Ke.setMode(k.LINE_STRIP)}else Z.isPoints?Ke.setMode(k.POINTS):Z.isSprite&&Ke.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Nl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))Ke.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ue=Z._multiDrawStarts,nn=Z._multiDrawCounts,ze=Z._multiDrawCount,jn=Ft?w.get(Ft).bytesPerElement:1,za=Kt.get(it).currentProgram.getUniforms();for(let pn=0;pn<ze;pn++)za.setValue(k,"_gl_DrawID",pn),Ke.render(ue[pn]/jn,nn[pn])}else if(Z.isInstancedMesh)Ke.renderInstances(pe,vn,Z.count);else if(ot.isInstancedBufferGeometry){const ue=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,nn=Math.min(ot.instanceCount,ue);Ke.renderInstances(pe,vn,nn)}else Ke.render(pe,vn)};function It(U,K,ot){U.transparent===!0&&U.side===Ta&&U.forceSinglePass===!1?(U.side=Hi,U.needsUpdate=!0,qe(U,K,ot),U.side=Rs,U.needsUpdate=!0,qe(U,K,ot),U.side=Ta):qe(U,K,ot)}this.compile=function(U,K,ot=null){ot===null&&(ot=U),S=Ut.get(ot),S.init(K),L.push(S),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),U!==ot&&U.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights();const it=new Set;return U.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){const Gt=bt[Pt];It(Gt,ot,Z),it.add(Gt)}else It(bt,ot,Z),it.add(bt)}),S=L.pop(),it},this.compileAsync=function(U,K,ot=null){const it=this.compile(U,K,ot);return new Promise(Z=>{function bt(){if(it.forEach(function(Pt){Kt.get(Pt).currentProgram.isReady()&&it.delete(Pt)}),it.size===0){Z(U);return}setTimeout(bt,10)}_e.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Jt=null;function he(U){Jt&&Jt(U)}function wt(){qt.stop()}function ee(){qt.start()}const qt=new ST;qt.setAnimationLoop(he),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(U){Jt=U,Et.setAnimationLoop(U),U===null?qt.stop():qt.start()},Et.addEventListener("sessionstart",wt),Et.addEventListener("sessionend",ee),this.render=function(U,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(K),K=Et.getCamera()),U.isScene===!0&&U.onBeforeRender(A,U,K,F),S=Ut.get(U,L.length),S.init(K),L.push(S),Ct.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),j.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,dt=Yt.init(this.clippingPlanes,xt),y=Lt.get(U,N.length),y.init(),N.push(y),Et.enabled===!0&&Et.isPresenting===!0){const bt=A.xr.getDepthSensingMesh();bt!==null&&ce(bt,K,-1/0,A.sortObjects)}ce(U,K,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(mt,b),xe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,xe&&Tt.addToRenderList(y,U),this.info.render.frame++,dt===!0&&Yt.beginShadows();const ot=S.state.shadowsArray;Bt.render(ot,U,K),dt===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=y.opaque,Z=y.transmissive;if(S.setupLights(),K.isArrayCamera){const bt=K.cameras;if(Z.length>0)for(let Pt=0,Gt=bt.length;Pt<Gt;Pt++){const Ft=bt[Pt];Me(it,Z,U,Ft)}xe&&Tt.render(U);for(let Pt=0,Gt=bt.length;Pt<Gt;Pt++){const Ft=bt[Pt];yn(y,U,Ft,Ft.viewport)}}else Z.length>0&&Me(it,Z,U,K),xe&&Tt.render(U),yn(y,U,K);F!==null&&O===0&&(Wt.updateMultisampleRenderTarget(F),Wt.updateRenderTargetMipmap(F)),U.isScene===!0&&U.onAfterRender(A,U,K),le.resetDefaultState(),C=-1,R=null,L.pop(),L.length>0?(S=L[L.length-1],dt===!0&&Yt.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function ce(U,K,ot,it){if(U.visible===!1)return;if(U.layers.test(K.layers)){if(U.isGroup)ot=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(K);else if(U.isLight)S.pushLight(U),U.castShadow&&S.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||j.intersectsSprite(U)){it&&ne.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Ct);const Pt=pt.update(U),Gt=U.material;Gt.visible&&y.push(U,Pt,Gt,ot,ne.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||j.intersectsObject(U))){const Pt=pt.update(U),Gt=U.material;if(it&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ne.copy(U.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ne.copy(Pt.boundingSphere.center)),ne.applyMatrix4(U.matrixWorld).applyMatrix4(Ct)),Array.isArray(Gt)){const Ft=Pt.groups;for(let ie=0,re=Ft.length;ie<re;ie++){const te=Ft[ie],pe=Gt[te.materialIndex];pe&&pe.visible&&y.push(U,Pt,pe,ot,ne.z,te)}}else Gt.visible&&y.push(U,Pt,Gt,ot,ne.z,null)}}const bt=U.children;for(let Pt=0,Gt=bt.length;Pt<Gt;Pt++)ce(bt[Pt],K,ot,it)}function yn(U,K,ot,it){const Z=U.opaque,bt=U.transmissive,Pt=U.transparent;S.setupLightsView(ot),dt===!0&&Yt.setGlobalState(A.clippingPlanes,ot),it&&Vt.viewport(H.copy(it)),Z.length>0&&Je(Z,K,ot),bt.length>0&&Je(bt,K,ot),Pt.length>0&&Je(Pt,K,ot),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Me(U,K,ot,it){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[it.id]===void 0&&(S.state.transmissionRenderTarget[it.id]=new To(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?Lc:Na,minFilter:co,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const bt=S.state.transmissionRenderTarget[it.id],Pt=it.viewport||H;bt.setSize(Pt.z*A.transmissionResolutionScale,Pt.w*A.transmissionResolutionScale);const Gt=A.getRenderTarget(),Ft=A.getActiveCubeFace(),ie=A.getActiveMipmapLevel();A.setRenderTarget(bt),A.getClearColor(ut),st=A.getClearAlpha(),st<1&&A.setClearColor(16777215,.5),A.clear(),xe&&Tt.render(ot);const re=A.toneMapping;A.toneMapping=Ms;const te=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),S.setupLightsView(it),dt===!0&&Yt.setGlobalState(A.clippingPlanes,it),Je(U,ot,it),Wt.updateMultisampleRenderTarget(bt),Wt.updateRenderTargetMipmap(bt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let je=0,vn=K.length;je<vn;je++){const Re=K[je],Ke=Re.object,ue=Re.geometry,nn=Re.material,ze=Re.group;if(nn.side===Ta&&Ke.layers.test(it.layers)){const jn=nn.side;nn.side=Hi,nn.needsUpdate=!0,gn(Ke,ot,it,ue,nn,ze),nn.side=jn,nn.needsUpdate=!0,pe=!0}}pe===!0&&(Wt.updateMultisampleRenderTarget(bt),Wt.updateRenderTargetMipmap(bt))}A.setRenderTarget(Gt,Ft,ie),A.setClearColor(ut,st),te!==void 0&&(it.viewport=te),A.toneMapping=re}function Je(U,K,ot){const it=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,bt=U.length;Z<bt;Z++){const Pt=U[Z],Gt=Pt.object,Ft=Pt.geometry,ie=Pt.group;let re=Pt.material;re.allowOverride===!0&&it!==null&&(re=it),Gt.layers.test(ot.layers)&&gn(Gt,K,ot,Ft,re,ie)}}function gn(U,K,ot,it,Z,bt){U.onBeforeRender(A,K,ot,it,Z,bt),U.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),Z.onBeforeRender(A,K,ot,it,U,bt),Z.transparent===!0&&Z.side===Ta&&Z.forceSinglePass===!1?(Z.side=Hi,Z.needsUpdate=!0,A.renderBufferDirect(ot,K,it,Z,U,bt),Z.side=Rs,Z.needsUpdate=!0,A.renderBufferDirect(ot,K,it,Z,U,bt),Z.side=Ta):A.renderBufferDirect(ot,K,it,Z,U,bt),U.onAfterRender(A,K,ot,it,Z,bt)}function qe(U,K,ot){K.isScene!==!0&&(K=ve);const it=Kt.get(U),Z=S.state.lights,bt=S.state.shadowsArray,Pt=Z.state.version,Gt=ht.getParameters(U,Z.state,bt,K,ot),Ft=ht.getProgramCacheKey(Gt);let ie=it.programs;it.environment=U.isMeshStandardMaterial?K.environment:null,it.fog=K.fog,it.envMap=(U.isMeshStandardMaterial?I:Ye).get(U.envMap||it.environment),it.envMapRotation=it.environment!==null&&U.envMap===null?K.environmentRotation:U.envMapRotation,ie===void 0&&(U.addEventListener("dispose",kt),ie=new Map,it.programs=ie);let re=ie.get(Ft);if(re!==void 0){if(it.currentProgram===re&&it.lightsStateVersion===Pt)return Ue(U,Gt),re}else Gt.uniforms=ht.getUniforms(U),U.onBeforeCompile(Gt,A),re=ht.acquireProgram(Gt,Ft),ie.set(Ft,re),it.uniforms=Gt.uniforms;const te=it.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(te.clippingPlanes=Yt.uniform),Ue(U,Gt),it.needsLights=He(U),it.lightsStateVersion=Pt,it.needsLights&&(te.ambientLightColor.value=Z.state.ambient,te.lightProbe.value=Z.state.probe,te.directionalLights.value=Z.state.directional,te.directionalLightShadows.value=Z.state.directionalShadow,te.spotLights.value=Z.state.spot,te.spotLightShadows.value=Z.state.spotShadow,te.rectAreaLights.value=Z.state.rectArea,te.ltc_1.value=Z.state.rectAreaLTC1,te.ltc_2.value=Z.state.rectAreaLTC2,te.pointLights.value=Z.state.point,te.pointLightShadows.value=Z.state.pointShadow,te.hemisphereLights.value=Z.state.hemi,te.directionalShadowMap.value=Z.state.directionalShadowMap,te.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,te.spotShadowMap.value=Z.state.spotShadowMap,te.spotLightMatrix.value=Z.state.spotLightMatrix,te.spotLightMap.value=Z.state.spotLightMap,te.pointShadowMap.value=Z.state.pointShadowMap,te.pointShadowMatrix.value=Z.state.pointShadowMatrix),it.currentProgram=re,it.uniformsList=null,re}function Fe(U){if(U.uniformsList===null){const K=U.currentProgram.getUniforms();U.uniformsList=kh.seqWithValue(K.seq,U.uniforms)}return U.uniformsList}function Ue(U,K){const ot=Kt.get(U);ot.outputColorSpace=K.outputColorSpace,ot.batching=K.batching,ot.batchingColor=K.batchingColor,ot.instancing=K.instancing,ot.instancingColor=K.instancingColor,ot.instancingMorph=K.instancingMorph,ot.skinning=K.skinning,ot.morphTargets=K.morphTargets,ot.morphNormals=K.morphNormals,ot.morphColors=K.morphColors,ot.morphTargetsCount=K.morphTargetsCount,ot.numClippingPlanes=K.numClippingPlanes,ot.numIntersection=K.numClipIntersection,ot.vertexAlphas=K.vertexAlphas,ot.vertexTangents=K.vertexTangents,ot.toneMapping=K.toneMapping}function Gn(U,K,ot,it,Z){K.isScene!==!0&&(K=ve),Wt.resetTextureUnits();const bt=K.fog,Pt=it.isMeshStandardMaterial?K.environment:null,Gt=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Yl,Ft=(it.isMeshStandardMaterial?I:Ye).get(it.envMap||Pt),ie=it.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),te=!!ot.morphAttributes.position,pe=!!ot.morphAttributes.normal,je=!!ot.morphAttributes.color;let vn=Ms;it.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(vn=A.toneMapping);const Re=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ke=Re!==void 0?Re.length:0,ue=Kt.get(it),nn=S.state.lights;if(dt===!0&&(xt===!0||U!==R)){const Kn=U===R&&it.id===C;Yt.setState(it,U,Kn)}let ze=!1;it.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==nn.state.version||ue.outputColorSpace!==Gt||Z.isBatchedMesh&&ue.batching===!1||!Z.isBatchedMesh&&ue.batching===!0||Z.isBatchedMesh&&ue.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ue.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ue.instancing===!1||!Z.isInstancedMesh&&ue.instancing===!0||Z.isSkinnedMesh&&ue.skinning===!1||!Z.isSkinnedMesh&&ue.skinning===!0||Z.isInstancedMesh&&ue.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ue.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ue.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ue.instancingMorph===!1&&Z.morphTexture!==null||ue.envMap!==Ft||it.fog===!0&&ue.fog!==bt||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==Yt.numPlanes||ue.numIntersection!==Yt.numIntersection)||ue.vertexAlphas!==ie||ue.vertexTangents!==re||ue.morphTargets!==te||ue.morphNormals!==pe||ue.morphColors!==je||ue.toneMapping!==vn||ue.morphTargetsCount!==Ke)&&(ze=!0):(ze=!0,ue.__version=it.version);let jn=ue.currentProgram;ze===!0&&(jn=qe(it,K,Z));let za=!1,pn=!1,$r=!1;const cn=jn.getUniforms(),ci=ue.uniforms;if(Vt.useProgram(jn.program)&&(za=!0,pn=!0,$r=!0),it.id!==C&&(C=it.id,pn=!0),za||R!==U){Vt.buffers.depth.getReversed()?(Rt.copy(U.projectionMatrix),hC(Rt),dC(Rt),cn.setValue(k,"projectionMatrix",Rt)):cn.setValue(k,"projectionMatrix",U.projectionMatrix),cn.setValue(k,"viewMatrix",U.matrixWorldInverse);const ri=cn.map.cameraPosition;ri!==void 0&&ri.setValue(k,ae.setFromMatrixPosition(U.matrixWorld)),et.logarithmicDepthBuffer&&cn.setValue(k,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&cn.setValue(k,"isOrthographic",U.isOrthographicCamera===!0),R!==U&&(R=U,pn=!0,$r=!0)}if(Z.isSkinnedMesh){cn.setOptional(k,Z,"bindMatrix"),cn.setOptional(k,Z,"bindMatrixInverse");const Kn=Z.skeleton;Kn&&(Kn.boneTexture===null&&Kn.computeBoneTexture(),cn.setValue(k,"boneTexture",Kn.boneTexture,Wt))}Z.isBatchedMesh&&(cn.setOptional(k,Z,"batchingTexture"),cn.setValue(k,"batchingTexture",Z._matricesTexture,Wt),cn.setOptional(k,Z,"batchingIdTexture"),cn.setValue(k,"batchingIdTexture",Z._indirectTexture,Wt),cn.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&cn.setValue(k,"batchingColorTexture",Z._colorsTexture,Wt));const Vn=ot.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&zt.update(Z,ot,jn),(pn||ue.receiveShadow!==Z.receiveShadow)&&(ue.receiveShadow=Z.receiveShadow,cn.setValue(k,"receiveShadow",Z.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(ci.envMap.value=Ft,ci.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&K.environment!==null&&(ci.envMapIntensity.value=K.environmentIntensity),pn&&(cn.setValue(k,"toneMappingExposure",A.toneMappingExposure),ue.needsLights&&ke(ci,$r),bt&&it.fog===!0&&ct.refreshFogUniforms(ci,bt),ct.refreshMaterialUniforms(ci,it,W,X,S.state.transmissionRenderTarget[U.id]),kh.upload(k,Fe(ue),ci,Wt)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(kh.upload(k,Fe(ue),ci,Wt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&cn.setValue(k,"center",Z.center),cn.setValue(k,"modelViewMatrix",Z.modelViewMatrix),cn.setValue(k,"normalMatrix",Z.normalMatrix),cn.setValue(k,"modelMatrix",Z.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Kn=it.uniformsGroups;for(let ri=0,zr=Kn.length;ri<zr;ri++){const ta=Kn[ri];G.update(ta,jn),G.bind(ta,jn)}}return jn}function ke(U,K){U.ambientLightColor.needsUpdate=K,U.lightProbe.needsUpdate=K,U.directionalLights.needsUpdate=K,U.directionalLightShadows.needsUpdate=K,U.pointLights.needsUpdate=K,U.pointLightShadows.needsUpdate=K,U.spotLights.needsUpdate=K,U.spotLightShadows.needsUpdate=K,U.rectAreaLights.needsUpdate=K,U.hemisphereLights.needsUpdate=K}function He(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(U,K,ot){const it=Kt.get(U);it.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),Kt.get(U.texture).__webglTexture=K,Kt.get(U.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ot,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,K){const ot=Kt.get(U);ot.__webglFramebuffer=K,ot.__useDefaultFramebuffer=K===void 0};const Si=k.createFramebuffer();this.setRenderTarget=function(U,K=0,ot=0){F=U,z=K,O=ot;let it=!0,Z=null,bt=!1,Pt=!1;if(U){const Ft=Kt.get(U);if(Ft.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(k.FRAMEBUFFER,null),it=!1;else if(Ft.__webglFramebuffer===void 0)Wt.setupRenderTarget(U);else if(Ft.__hasExternalTextures)Wt.rebindTextures(U,Kt.get(U.texture).__webglTexture,Kt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const te=U.depthTexture;if(Ft.__boundDepthTexture!==te){if(te!==null&&Kt.has(te)&&(U.width!==te.image.width||U.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(U)}}const ie=U.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Pt=!0);const re=Kt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(re[K])?Z=re[K][ot]:Z=re[K],bt=!0):U.samples>0&&Wt.useMultisampledRTT(U)===!1?Z=Kt.get(U).__webglMultisampledFramebuffer:Array.isArray(re)?Z=re[ot]:Z=re,H.copy(U.viewport),Y.copy(U.scissor),$=U.scissorTest}else H.copy(Q).multiplyScalar(W).floor(),Y.copy(gt).multiplyScalar(W).floor(),$=yt;if(ot!==0&&(Z=Si),Vt.bindFramebuffer(k.FRAMEBUFFER,Z)&&it&&Vt.drawBuffers(U,Z),Vt.viewport(H),Vt.scissor(Y),Vt.setScissorTest($),bt){const Ft=Kt.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,ot)}else if(Pt){const Ft=Kt.get(U.texture),ie=K;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ft.__webglTexture,ot,ie)}else if(U!==null&&ot!==0){const Ft=Kt.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ft.__webglTexture,ot)}C=-1},this.readRenderTargetPixels=function(U,K,ot,it,Z,bt,Pt,Gt=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Kt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft){Vt.bindFramebuffer(k.FRAMEBUFFER,Ft);try{const ie=U.textures[Gt],re=ie.format,te=ie.type;if(!et.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=U.width-it&&ot>=0&&ot<=U.height-Z&&(U.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Gt),k.readPixels(K,ot,it,Z,Dt.convert(re),Dt.convert(te),bt))}finally{const ie=F!==null?Kt.get(F).__webglFramebuffer:null;Vt.bindFramebuffer(k.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(U,K,ot,it,Z,bt,Pt,Gt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Kt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft)if(K>=0&&K<=U.width-it&&ot>=0&&ot<=U.height-Z){Vt.bindFramebuffer(k.FRAMEBUFFER,Ft);const ie=U.textures[Gt],re=ie.format,te=ie.type;if(!et.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,pe),k.bufferData(k.PIXEL_PACK_BUFFER,bt.byteLength,k.STREAM_READ),U.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Gt),k.readPixels(K,ot,it,Z,Dt.convert(re),Dt.convert(te),0);const je=F!==null?Kt.get(F).__webglFramebuffer:null;Vt.bindFramebuffer(k.FRAMEBUFFER,je);const vn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await fC(k,vn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,pe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,bt),k.deleteBuffer(pe),k.deleteSync(vn),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,K=null,ot=0){const it=Math.pow(2,-ot),Z=Math.floor(U.image.width*it),bt=Math.floor(U.image.height*it),Pt=K!==null?K.x:0,Gt=K!==null?K.y:0;Wt.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,ot,0,0,Pt,Gt,Z,bt),Vt.unbindTexture()};const bn=k.createFramebuffer(),un=k.createFramebuffer();this.copyTextureToTexture=function(U,K,ot=null,it=null,Z=0,bt=null){bt===null&&(Z!==0?(Nl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Pt,Gt,Ft,ie,re,te,pe,je,vn;const Re=U.isCompressedTexture?U.mipmaps[bt]:U.image;if(ot!==null)Pt=ot.max.x-ot.min.x,Gt=ot.max.y-ot.min.y,Ft=ot.isBox3?ot.max.z-ot.min.z:1,ie=ot.min.x,re=ot.min.y,te=ot.isBox3?ot.min.z:0;else{const Vn=Math.pow(2,-Z);Pt=Math.floor(Re.width*Vn),Gt=Math.floor(Re.height*Vn),U.isDataArrayTexture?Ft=Re.depth:U.isData3DTexture?Ft=Math.floor(Re.depth*Vn):Ft=1,ie=0,re=0,te=0}it!==null?(pe=it.x,je=it.y,vn=it.z):(pe=0,je=0,vn=0);const Ke=Dt.convert(K.format),ue=Dt.convert(K.type);let nn;K.isData3DTexture?(Wt.setTexture3D(K,0),nn=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Wt.setTexture2DArray(K,0),nn=k.TEXTURE_2D_ARRAY):(Wt.setTexture2D(K,0),nn=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const ze=k.getParameter(k.UNPACK_ROW_LENGTH),jn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),za=k.getParameter(k.UNPACK_SKIP_PIXELS),pn=k.getParameter(k.UNPACK_SKIP_ROWS),$r=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Re.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Re.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ie),k.pixelStorei(k.UNPACK_SKIP_ROWS,re),k.pixelStorei(k.UNPACK_SKIP_IMAGES,te);const cn=U.isDataArrayTexture||U.isData3DTexture,ci=K.isDataArrayTexture||K.isData3DTexture;if(U.isDepthTexture){const Vn=Kt.get(U),Kn=Kt.get(K),ri=Kt.get(Vn.__renderTarget),zr=Kt.get(Kn.__renderTarget);Vt.bindFramebuffer(k.READ_FRAMEBUFFER,ri.__webglFramebuffer),Vt.bindFramebuffer(k.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let ta=0;ta<Ft;ta++)cn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Kt.get(U).__webglTexture,Z,te+ta),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Kt.get(K).__webglTexture,bt,vn+ta)),k.blitFramebuffer(ie,re,Pt,Gt,pe,je,Pt,Gt,k.DEPTH_BUFFER_BIT,k.NEAREST);Vt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||U.isRenderTargetTexture||Kt.has(U)){const Vn=Kt.get(U),Kn=Kt.get(K);Vt.bindFramebuffer(k.READ_FRAMEBUFFER,bn),Vt.bindFramebuffer(k.DRAW_FRAMEBUFFER,un);for(let ri=0;ri<Ft;ri++)cn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Vn.__webglTexture,Z,te+ri):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Vn.__webglTexture,Z),ci?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Kn.__webglTexture,bt,vn+ri):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Kn.__webglTexture,bt),Z!==0?k.blitFramebuffer(ie,re,Pt,Gt,pe,je,Pt,Gt,k.COLOR_BUFFER_BIT,k.NEAREST):ci?k.copyTexSubImage3D(nn,bt,pe,je,vn+ri,ie,re,Pt,Gt):k.copyTexSubImage2D(nn,bt,pe,je,ie,re,Pt,Gt);Vt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ci?U.isDataTexture||U.isData3DTexture?k.texSubImage3D(nn,bt,pe,je,vn,Pt,Gt,Ft,Ke,ue,Re.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(nn,bt,pe,je,vn,Pt,Gt,Ft,Ke,Re.data):k.texSubImage3D(nn,bt,pe,je,vn,Pt,Gt,Ft,Ke,ue,Re):U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,bt,pe,je,Pt,Gt,Ke,ue,Re.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,bt,pe,je,Re.width,Re.height,Ke,Re.data):k.texSubImage2D(k.TEXTURE_2D,bt,pe,je,Pt,Gt,Ke,ue,Re);k.pixelStorei(k.UNPACK_ROW_LENGTH,ze),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,jn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,za),k.pixelStorei(k.UNPACK_SKIP_ROWS,pn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$r),bt===0&&K.generateMipmaps&&k.generateMipmap(nn),Vt.unbindTexture()},this.copyTextureToTexture3D=function(U,K,ot=null,it=null,Z=0){return Nl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,K,ot,it,Z)},this.initRenderTarget=function(U){Kt.get(U).__webglFramebuffer===void 0&&Wt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Wt.setTextureCube(U,0):U.isData3DTexture?Wt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Wt.setTexture2DArray(U,0):Wt.setTexture2D(U,0),Vt.unbindTexture()},this.resetState=function(){z=0,O=0,F=null,Vt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),e.unpackColorSpace=We._getUnpackColorSpace()}}const DU=()=>{const o=jr.useRef(null),t=jr.useRef(null);return jr.useEffect(()=>{const e=o.current;if(!e)return;const i=e.clientWidth,a=e.clientHeight,l=new IC,c=new yr(75,i/a,.1,1e3),f=new wU({alpha:!0});f.setSize(i,a),t.current=f,e.appendChild(f.domElement);const d=new Pa,p=1e3,_=[];for(let M=0;M<p;M++)_.push((Math.random()-.5)*200,(Math.random()-.5)*200,(Math.random()-.5)*200);d.setAttribute("position",new Es(_,3));const g=new vT({color:16777215}),v=new VC(d,g);l.add(v),c.position.z=50;const x=()=>{v.rotation.x+=5e-4,v.rotation.y+=5e-4,f.render(l,c),requestAnimationFrame(x)};x();const E=()=>{const M=e.clientWidth,y=e.clientHeight;f.setSize(M,y),c.aspect=M/y,c.updateProjectionMatrix()};return window.addEventListener("resize",E),()=>{if(window.removeEventListener("resize",E),e&&t.current?.domElement)try{e.removeChild(t.current.domElement)}catch(M){console.warn("Error during unmount cleanup:",M)}}},[]),Ae.jsx("div",{ref:o,className:"absolute inset-0 z-0",style:{width:"100%",height:"100%",position:"absolute"}})},UU=()=>Ae.jsx("div",{className:"bg-[#8C715A] fixed top-1/2 right-0 -translate-y-1/2 h-140 w-14 z-50 flex flex-col justify-center items-center py-4 space-y-4 rounded-4xl mr-5",children:SR.map(({name:o,imgPath:t,link:e})=>Ae.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"hover:scale-110 transition",children:Ae.jsx("img",{src:t,alt:o,className:"w-10 h-10 rounded-full bg-white/20 p-1"})},o))}),LU=()=>(ud(()=>{Gl.fromTo(".hero-text h1",{y:50,opacity:0},{y:0,opacity:1,stagger:.2,duration:1,ease:"power2.inOut"})}),Ae.jsxs("section",{id:"hero",className:"relative overflow-hidden",children:[Ae.jsx("div",{className:"absolute top-0 left-0 z-10",children:Ae.jsx("img",{src:"../assets/images/bg.png",alt:"bg dots"})}),Ae.jsxs("div",{className:"hero-layout",children:[Ae.jsx("header",{className:"flex flex-col justify-center md:w-full w-screen md:px-20 px-5",children:Ae.jsxs("div",{className:"flex flex-col gap-7",children:[Ae.jsxs("div",{className:"hero-text",children:[Ae.jsxs("h1",{children:["Hello 👋",Ae.jsx("span",{className:"slide",children:Ae.jsx("span",{className:"wrapper",children:xR.map((o,t)=>Ae.jsxs("span",{className:"flex items-center md:gap-3 gap-1 pb-2",children:[Ae.jsx("img",{src:o.imgPath,alt:"person",className:"xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-[#FFF5DE]"}),Ae.jsx("span",{children:o.text})]},t))})})]}),Ae.jsx("h1",{children:"Prathibha Sithumini"}),Ae.jsxs("h3",{className:"text-3xl text-[#2C2C2C]",children:["Frontend Developer",Ae.jsx("br",{}),"QA Engineer",Ae.jsx("br",{}),"Mobile Developer"]})]}),Ae.jsx(vR,{text:"See My Work",className:"md:w-80 md:h-16 w-60 h-12",id:"counter"})]})}),Ae.jsx("figure",{children:Ae.jsxs("div",{className:"hero-3d-layout",children:[Ae.jsx(DU,{}),Ae.jsx(UU,{})]})})]})]})),NU=()=>Ae.jsx(Ae.Fragment,{children:Ae.jsx(gR,{children:Ae.jsx(LU,{})})});zb.createRoot(document.getElementById("root")).render(Ae.jsx(jr.StrictMode,{children:Ae.jsx(NU,{})}));
