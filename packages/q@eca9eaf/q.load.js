montageDefine("eca9eaf","q",{dependencies:[],factory:function(e,t,n){(function(e){if("function"==typeof bootstrap)bootstrap("promise",e);else if("object"==typeof t)n.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=e}else Q=e()})(function(){"use strict";function e(e){return function(){return G.apply(e,arguments)}}function t(e){return e===Object(e)}function n(e){return"[object StopIteration]"===it(e)||e instanceof Y}function i(e,t){if(V&&t.stack&&"object"==typeof e&&null!==e&&e.stack&&-1===e.stack.indexOf(at)){for(var n=[],i=t;i;i=i.source)i.stack&&n.unshift(i.stack);n.unshift(e.stack);var a=n.join("\n"+at+"\n");e.stack=r(a)}}function r(e){for(var t=e.split("\n"),n=[],i=0;t.length>i;++i){var r=t[i];s(r)||a(r)||!r||n.push(r)}return n.join("\n")}function a(e){return-1!==e.indexOf("(module.js:")||-1!==e.indexOf("(node.js:")}function o(e){var t=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);if(t)return[t[1],Number(t[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(e);if(n)return[n[1],Number(n[2])];var i=/.*@(.+):(\d+)$/.exec(e);return i?[i[1],Number(i[2])]:void 0}function s(e){var t=o(e);if(!t)return!1;var n=t[0],i=t[1];return n===U&&i>=H&&ct>=i}function l(){if(V)try{throw Error()}catch(e){var t=e.stack.split("\n"),n=t[0].indexOf("@")>0?t[1]:t[2],i=o(n);if(!i)return;return U=i[0],i[1]}}function u(e,t,n){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t+" is deprecated, use "+n+" instead.",Error("").stack),e.apply(e,arguments)}}function c(e){return g(e)?e:_(e)?x(e):M(e)}function h(){function e(e){t=e,a.source=e,J(n,function(t,n){K(function(){e.promiseDispatch.apply(e,n)})},void 0),n=void 0,i=void 0}var t,n=[],i=[],r=et(h.prototype),a=et(m.prototype);if(a.promiseDispatch=function(e,r,a){var o=$(arguments);n?(n.push(o),"when"===r&&a[1]&&i.push(a[1])):K(function(){t.promiseDispatch.apply(t,o)})},a.valueOf=u(function(){if(n)return a;var e=v(t);return g(e)&&(t=e),e},"valueOf","inspect"),a.inspect=function(){return t?t.inspect():{state:"pending"}},c.longStackSupport&&V)try{throw Error()}catch(o){a.stack=o.stack.substring(o.stack.indexOf("\n")+1)}return r.promise=a,r.resolve=function(n){t||e(c(n))},r.fulfill=function(n){t||e(M(n))},r.reject=function(n){t||e(D(n))},r.notify=function(e){t||J(i,function(t,n){K(function(){n(e)})},void 0)},r}function d(e){if("function"!=typeof e)throw new TypeError("resolver must be a function.");var t=h();try{e(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}return t.promise}function p(e){return d(function(t,n){for(var i=0,r=e.length;r>i;i++)c(e[i]).then(t,n)})}function m(e,t,n){void 0===t&&(t=function(e){return D(Error("Promise does not support operation: "+e))}),void 0===n&&(n=function(){return{state:"unknown"}});var i=et(m.prototype);if(i.promiseDispatch=function(n,r,a){var o;try{o=e[r]?e[r].apply(i,a):t.call(i,r,a)}catch(s){o=D(s)}n&&n(o)},i.inspect=n,n){var r=n();"rejected"===r.state&&(i.exception=r.reason),i.valueOf=u(function(){var e=n();return"pending"===e.state||"rejected"===e.state?i:e.value})}return i}function f(e,t,n,i){return c(e).then(t,n,i)}function v(e){if(g(e)){var t=e.inspect();if("fulfilled"===t.state)return t.value}return e}function g(e){return t(e)&&"function"==typeof e.promiseDispatch&&"function"==typeof e.inspect}function _(e){return t(e)&&"function"==typeof e.then}function b(e){return g(e)&&"pending"===e.inspect().state}function y(e){return!g(e)||"fulfilled"===e.inspect().state}function w(e){return g(e)&&"rejected"===e.inspect().state}function E(){lt||"undefined"==typeof window||window.Touch||!window.console||console.warn("[Q] Unhandled rejection reasons (should be empty):",ot),lt=!0}function C(){for(var e=0;ot.length>e;e++){var t=ot[e];console.warn("Unhandled rejection reason:",t)}}function T(){ot.length=0,st.length=0,lt=!1,ut||(ut=!0,"undefined"!=typeof process&&process.on&&process.on("exit",C))}function P(e,t){ut&&(st.push(e),t&&t.stack!==void 0?ot.push(t.stack):ot.push("(no stack) "+t),E())}function S(e){if(ut){var t=Z(st,e);-1!==t&&(st.splice(t,1),ot.splice(t,1))}}function D(e){var t=m({when:function(t){return t&&S(this),t?t(e):this}},function(){return this},function(){return{state:"rejected",reason:e}});return P(t,e),t}function M(e){return m({when:function(){return e},get:function(t){return e[t]},set:function(t,n){e[t]=n},"delete":function(t){delete e[t]},post:function(t,n){return null===t||void 0===t?e.apply(void 0,n):e[t].apply(e,n)},apply:function(t,n){return e.apply(t,n)},keys:function(){return nt(e)}},void 0,function(){return{state:"fulfilled",value:e}})}function x(e){var t=h();return K(function(){try{e.then(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}}),t.promise}function O(e){return m({isDef:function(){}},function(t,n){return j(e,t,n)},function(){return c(e).inspect()})}function L(e,t,n){return c(e).spread(t,n)}function A(e){return function(){function t(e,t){var o;if(rt){try{o=i[e](t)}catch(s){return D(s)}return o.done?o.value:f(o.value,r,a)}try{o=i[e](t)}catch(s){return n(s)?s.value:D(s)}return f(o,r,a)}var i=e.apply(this,arguments),r=t.bind(t,"next"),a=t.bind(t,"throw");return r()}}function k(e){c.done(c.async(e)())}function I(e){throw new Y(e)}function z(e){return function(){return L([this,R(arguments)],function(t,n){return e.apply(t,n)})}}function j(e,t,n){return c(e).dispatch(t,n)}function R(e){return f(e,function(e){var t=0,n=h();return J(e,function(i,r,a){var o;g(r)&&"fulfilled"===(o=r.inspect()).state?e[a]=o.value:(++t,f(r,function(i){e[a]=i,0===--t&&n.resolve(e)},n.reject,function(e){n.notify({index:a,value:e})}))},void 0),0===t&&n.resolve(e),n.promise})}function N(e){return f(e,function(e){return e=Q(e,c),f(R(Q(e,function(e){return f(e,X,X)})),function(){return e})})}function F(e){return c(e).allSettled()}function B(e,t){return c(e).then(void 0,void 0,t)}function q(e,t){return c(e).nodeify(t)}var V=!1;try{throw Error()}catch(W){V=!!W.stack}var U,Y,H=l(),X=function(){},K=function(){function e(){for(;t.next;){t=t.next;var n=t.task;t.task=void 0;var r=t.domain;r&&(t.domain=void 0,r.enter());try{n()}catch(o){if(a)throw r&&r.exit(),setTimeout(e,0),r&&r.enter(),o;setTimeout(function(){throw o},0)}r&&r.exit()}i=!1}var t={task:void 0,next:null},n=t,i=!1,r=void 0,a=!1;if(K=function(e){n=n.next={task:e,domain:a&&process.domain,next:null},i||(i=!0,r())},"undefined"!=typeof process&&process.nextTick)a=!0,r=function(){process.nextTick(e)};else if("function"==typeof setImmediate)r="undefined"!=typeof window?setImmediate.bind(window,e):function(){setImmediate(e)};else if("undefined"!=typeof MessageChannel){var o=new MessageChannel;o.port1.onmessage=function(){r=s,o.port1.onmessage=e,e()};var s=function(){o.port2.postMessage(0)};r=function(){setTimeout(e,0),s()}}else r=function(){setTimeout(e,0)};return K}(),G=Function.call,$=e(Array.prototype.slice),J=e(Array.prototype.reduce||function(e,t){var n=0,i=this.length;if(1===arguments.length)for(;;){if(n in this){t=this[n++];break}if(++n>=i)throw new TypeError}for(;i>n;n++)n in this&&(t=e(t,this[n],n));return t}),Z=e(Array.prototype.indexOf||function(e){for(var t=0;this.length>t;t++)if(this[t]===e)return t;return-1}),Q=e(Array.prototype.map||function(e,t){var n=this,i=[];return J(n,function(r,a,o){i.push(e.call(t,a,o,n))},void 0),i}),et=Object.create||function(e){function t(){}return t.prototype=e,new t},tt=e(Object.prototype.hasOwnProperty),nt=Object.keys||function(e){var t=[];for(var n in e)tt(e,n)&&t.push(n);return t},it=e(Object.prototype.toString);Y="undefined"!=typeof ReturnValue?ReturnValue:function(e){this.value=e};var rt;try{Function("(function* (){ yield 1; })"),rt=!0}catch(W){rt=!1}var at="From previous event:";c.resolve=c,c.nextTick=K,c.longStackSupport=!1,c.defer=h,h.prototype.makeNodeResolver=function(){var e=this;return function(t,n){t?e.reject(t):arguments.length>2?e.resolve($(arguments,1)):e.resolve(n)}},c.promise=d,c.passByCopy=function(e){return e},m.prototype.passByCopy=function(){return this},c.join=function(e,t){return c(e).join(t)},m.prototype.join=function(e){return c([this,e]).spread(function(e,t){if(e===t)return e;throw Error("Can't join: not the same: "+e+" "+t)})},c.race=p,m.prototype.race=function(){return this.then(c.race)},c.makePromise=m,m.prototype.toString=function(){return"[object Promise]"},m.prototype.then=function(e,t,n){function r(t){try{return"function"==typeof e?e(t):t}catch(n){return D(n)}}function a(e){if("function"==typeof t){i(e,s);try{return t(e)}catch(n){return D(n)}}return D(e)}function o(e){return"function"==typeof n?n(e):e}var s=this,l=h(),u=!1;return K(function(){s.promiseDispatch(function(e){u||(u=!0,l.resolve(r(e)))},"when",[function(e){u||(u=!0,l.resolve(a(e)))}])}),s.promiseDispatch(void 0,"when",[void 0,function(e){var t,n=!1;try{t=o(e)}catch(i){if(n=!0,!c.onerror)throw i;c.onerror(i)}n||l.notify(t)}]),l.promise},c.when=f,m.prototype.thenResolve=function(e){return this.then(function(){return e})},c.thenResolve=function(e,t){return c(e).thenResolve(t)},m.prototype.thenReject=function(e){return this.then(function(){throw e})},c.thenReject=function(e,t){return c(e).thenReject(t)},c.nearer=v,c.isPromise=g,c.isPromiseAlike=_,c.isPending=b,m.prototype.isPending=function(){return"pending"===this.inspect().state},c.isFulfilled=y,m.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},c.isRejected=w,m.prototype.isRejected=function(){return"rejected"===this.inspect().state};var ot=[],st=[],lt=!1,ut=!0;c.resetUnhandledRejections=T,c.getUnhandledReasons=function(){return ot.slice()},c.stopUnhandledRejectionTracking=function(){T(),"undefined"!=typeof process&&process.on&&process.removeListener("exit",C),ut=!1},T(),c.reject=D,c.fulfill=M,c.master=O,c.spread=L,m.prototype.spread=function(e,t){return this.all().then(function(t){return e.apply(void 0,t)},t)},c.async=A,c.spawn=k,c["return"]=I,c.promised=z,c.dispatch=j,m.prototype.dispatch=function(e,t){var n=this,i=h();return K(function(){n.promiseDispatch(i.resolve,e,t)}),i.promise},c.get=function(e,t){return c(e).dispatch("get",[t])},m.prototype.get=function(e){return this.dispatch("get",[e])},c.set=function(e,t,n){return c(e).dispatch("set",[t,n])},m.prototype.set=function(e,t){return this.dispatch("set",[e,t])},c.del=c["delete"]=function(e,t){return c(e).dispatch("delete",[t])},m.prototype.del=m.prototype["delete"]=function(e){return this.dispatch("delete",[e])},c.mapply=c.post=function(e,t,n){return c(e).dispatch("post",[t,n])},m.prototype.mapply=m.prototype.post=function(e,t){return this.dispatch("post",[e,t])},c.send=c.mcall=c.invoke=function(e,t){return c(e).dispatch("post",[t,$(arguments,2)])},m.prototype.send=m.prototype.mcall=m.prototype.invoke=function(e){return this.dispatch("post",[e,$(arguments,1)])},c.fapply=function(e,t){return c(e).dispatch("apply",[void 0,t])},m.prototype.fapply=function(e){return this.dispatch("apply",[void 0,e])},c["try"]=c.fcall=function(e){return c(e).dispatch("apply",[void 0,$(arguments,1)])},m.prototype.fcall=function(){return this.dispatch("apply",[void 0,$(arguments)])},c.fbind=function(e){var t=c(e),n=$(arguments,1);return function(){return t.dispatch("apply",[this,n.concat($(arguments))])}},m.prototype.fbind=function(){var e=this,t=$(arguments);return function(){return e.dispatch("apply",[this,t.concat($(arguments))])}},c.keys=function(e){return c(e).dispatch("keys",[])},m.prototype.keys=function(){return this.dispatch("keys",[])},c.all=R,m.prototype.all=function(){return R(this)},c.allResolved=u(N,"allResolved","allSettled"),m.prototype.allResolved=function(){return N(this)},c.allSettled=F,m.prototype.allSettled=function(){return this.then(function(e){return R(Q(e,function(e){function t(){return e.inspect()}return e=c(e),e.then(t,t)}))})},c.fail=c["catch"]=function(e,t){return c(e).then(void 0,t)},m.prototype.fail=m.prototype["catch"]=function(e){return this.then(void 0,e)},c.progress=B,m.prototype.progress=function(e){return this.then(void 0,void 0,e)},c.fin=c["finally"]=function(e,t){return c(e)["finally"](t)},m.prototype.fin=m.prototype["finally"]=function(e){return e=c(e),this.then(function(t){return e.fcall().then(function(){return t})},function(t){return e.fcall().then(function(){throw t})})},c.done=function(e,t,n,i){return c(e).done(t,n,i)},m.prototype.done=function(e,t,n){var r=function(e){K(function(){if(i(e,a),!c.onerror)throw e;c.onerror(e)})},a=e||t||n?this.then(e,t,n):this;"object"==typeof process&&process&&process.domain&&(r=process.domain.bind(r)),a.then(void 0,r)},c.timeout=function(e,t,n){return c(e).timeout(t,n)},m.prototype.timeout=function(e,t){var n=h(),i=setTimeout(function(){n.reject(Error(t||"Timed out after "+e+" ms"))},e);return this.then(function(e){clearTimeout(i),n.resolve(e)},function(e){clearTimeout(i),n.reject(e)},n.notify),n.promise},c.delay=function(e,t){return void 0===t&&(t=e,e=void 0),c(e).delay(t)},m.prototype.delay=function(e){return this.then(function(t){var n=h();return setTimeout(function(){n.resolve(t)},e),n.promise})},c.nfapply=function(e,t){return c(e).nfapply(t)},m.prototype.nfapply=function(e){var t=h(),n=$(e);return n.push(t.makeNodeResolver()),this.fapply(n).fail(t.reject),t.promise},c.nfcall=function(e){var t=$(arguments,1);return c(e).nfapply(t)},m.prototype.nfcall=function(){var e=$(arguments),t=h();return e.push(t.makeNodeResolver()),this.fapply(e).fail(t.reject),t.promise},c.nfbind=c.denodeify=function(e){var t=$(arguments,1);return function(){var n=t.concat($(arguments)),i=h();return n.push(i.makeNodeResolver()),c(e).fapply(n).fail(i.reject),i.promise}},m.prototype.nfbind=m.prototype.denodeify=function(){var e=$(arguments);return e.unshift(this),c.denodeify.apply(void 0,e)},c.nbind=function(e,t){var n=$(arguments,2);return function(){function i(){return e.apply(t,arguments)}var r=n.concat($(arguments)),a=h();return r.push(a.makeNodeResolver()),c(i).fapply(r).fail(a.reject),a.promise}},m.prototype.nbind=function(){var e=$(arguments,0);return e.unshift(this),c.nbind.apply(void 0,e)},c.nmapply=c.npost=function(e,t,n){return c(e).npost(t,n)},m.prototype.nmapply=m.prototype.npost=function(e,t){var n=$(t||[]),i=h();return n.push(i.makeNodeResolver()),this.dispatch("post",[e,n]).fail(i.reject),i.promise},c.nsend=c.nmcall=c.ninvoke=function(e,t){var n=$(arguments,2),i=h();return n.push(i.makeNodeResolver()),c(e).dispatch("post",[t,n]).fail(i.reject),i.promise},m.prototype.nsend=m.prototype.nmcall=m.prototype.ninvoke=function(e){var t=$(arguments,1),n=h();return t.push(n.makeNodeResolver()),this.dispatch("post",[e,t]).fail(n.reject),n.promise},c.nodeify=q,m.prototype.nodeify=function(e){return e?(this.then(function(t){K(function(){e(null,t)})},function(t){K(function(){e(t)})}),void 0):this};var ct=l();return c})}});