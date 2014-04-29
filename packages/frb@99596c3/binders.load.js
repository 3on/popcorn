montageDefine("99596c3","binders",{dependencies:["./scope","./observers"],factory:function(e,t){function n(){return Error("").stack.replace(/^.*\n.*\n/,"\n")}function i(e,t,i,r,a,o){return i(S(function(i){if(!a.isActive)try{a.isActive=!0,o&&console.log("SET",o.targetPath,"TO",i,"ON",e,"BECAUSE",o.sourcePath,n()),Array.isArray(e)&&t>>>0===t?e.set(t,i):e[t]=i}finally{a.isActive=!1}}),r)}function r(e,t){return function(n,i,r,a,o){return t(S(function(t){return null!=t?e(S(function(e){return null!=e?e.bindProperty?e.bindProperty(t,n,i,a,o):j(e,t,n,i,a,o):void 0}),r):void 0}),r)}}function a(e,t,i,r,a,o){return i(S(function(i){if(!a.isActive)try{a.isActive=!0,o&&console.log("SET FOR KEY",t,"TO",i,"ON",e,"BECAUSE",o.sourcePath,n()),e.set(t,i)}finally{a.isActive=!1}}),r)}function o(e,t){return function(n,i,r,a,o){return e(S(function(e){return e?t(S(function(t){return null!=t?I(e,t,n,i,a,o):void 0}),r):void 0}),r)}}function s(e,t){return function(i,r,a,o,s){return e(S(function(e){return e?t(S(function(t){return null!=t?i(S(function(i){if(i)(e.has||e.contains).call(e,t)||(s&&console.log("ADD",t,"TO",s.targetPath,"BECAUSE",s.sourcePath,n()),e.add(t));else for(;(e.has||e.contains).call(e,t);)s&&console.log("REMOVE",t,"FROM",s.targetPath,"BECAUSE",s.sourcePath,n()),(e.remove||e["delete"]).call(e,t)}),r):void 0}),a):void 0}),a)}}function l(e,t){return function(i,r,a,o,s){return i(S(function(i){return i?(s&&console.log("BIND",s.targetPath,"TO",s.sourcePath,n()),e(t,r,r,o,s),function(){s&&console.log("UNBIND",s.targetPath,"FROM",s.sourcePath,n())}):void 0}),a)}}function u(e,t,n){return function(i,r,a,o,s){return i(S(function(i){return i?e(S(function(e){function i(e,i,l){r.swap(l,i.length,e.map(function(e){var i=a.nest(e);return t(n,i,i,o,s)}))}if(e){var r=[],l=P(e,i,a);return function(){x(r),l()}}}),a):void 0}),r)}}function c(e,t,n,i,r,a){var o=D(i),s=M(n,o);return function(n,i,o,l,u){return n(S(function(n){if(null!=n){if(n){var i=e(r,A,o,l,u),c=t(a,A,o,l,u);return function(){i(),c()}}return e(s,o,o,l,u)}}),i)}}function h(e,t,n,i,r,a){var o=D(i),s=O(n,o);return function(n,i,o,l,u){return n(S(function(n){if(null!=n){if(n)return e(s,o,o,l,u);var i=e(r,k,o,l,u),c=t(a,k,o,l,u);return function(){i(),c()}}}),i)}}function d(e,t,n){return function(i,r,a,o,s){return e(S(function(e){return null!=e?e?t(i,r,a,o,s):n(i,r,a,o,s):void 0}),r)}}function p(e){return function(t,n,i){return e(S(function(e){return e?t(S(function(t){null!=t&&(e.splice?e.splice(0,e.length,t):e.clear&&e.add&&(e.clear(),e.add(t)))}),n):void 0}),i)}}function f(e){return function(t,n,i){return e(S(function(e){return e?t(S(function(t){null!=t&&t!==e.one()&&(e.splice?e.splice(0,e.length,t):e.clear&&e.add&&(e.clear(),e.add(t)))}),n):void 0}),i)}}function m(e,t){return function(i,r,a,o,s){return e(S(function(e){return e?i(S(function(t){function i(t,i,r){w(e)||(s&&console.log("SWAPPING",i,"FOR",t,"AT",r,"ON",s.targetPath,n()),e.swap?e.swap(r,i.length,t):e.add&&(e.remove||e["delete"])&&(t.forEach(e.add,e),i.forEach(e.remove||e["delete"],e)))}if(t!==e){if(!t)return e.clear(),void 0;if(t.addRangeChangeListener)return t.addRangeChangeListener(i),i(Array.from(t),Array.from(e),0),T(function(){t.removeRangeChangeListener(i)})}}),r):t(C.makeLiteralObserver([]),r,a,o,s)}),a)}}function v(e){return function(t,i,r,a,o){return e(S(function(e){return e?t(S(function(t){function i(t,i){if(!a.isActive)try{a.isActive=!0,void 0===t?(o&&o&&console.log("DELETED",o.targetPath,"FOR KEY",i,"ON",e,"BECAUSE",o.sourcePath,n()),Array.isArray(e)?e.splice(i,1):e["delete"](i)):(o&&o&&console.log("SET",o.targetPath,"FOR KEY",i,"TO",t,"ON",e,"BECAUSE",o.sourcePath,n()),e.set(i,t))}finally{a.isActive=!1}}return t?(e.clear(),t.forEach(i),t.addMapChangeListener(i)):(e.clear(),void 0)}),i):void 0}),r)}}function g(e){return function(t,n,i){return e(S(function(e){return e?t(S(function(t){function n(t,n,i){if(!w(e)){var r=e.length-i-n.length;e.swap(r,n.length,t.reversed())}}return t?(t.addRangeChangeListener(n),n(t,e,0),T(function(){t.removeRangeChangeListener(n)})):(e.clear(),void 0)}),n):void 0}),i)}}function _(e){return function(t,n,i,r,a){return t(S(function(t){return t?Function.noop:e(L,n,i,r,a)}),i)}}function b(e){return function(t,n,i,r,a){return i.parent?e(t,n,i.parent,r,a):void 0}}function y(e,t){return function(n,i,r,a,o){return e(S(function(e){return null!=e?t(n,i,r.nest(e),a,o):void 0}),r)}}function w(e){return e.getRangeChangeDescriptor&&e.getRangeChangeDescriptor().isActive}var E=e("./scope"),C=e("./observers"),S=C.autoCancelPrevious,T=C.once,P=C.observeRangeChange,x=C.cancelEach,D=C.makeNotObserver,O=C.makeOrObserver,M=C.makeAndObserver;C.observeValue;var L=C.makeLiteralObserver(),A=new E(!0),k=new E(!1);t.bindProperty=i;var j=i;t.makePropertyBinder=r,t.bindGet=a;var I=a;t.makeGetBinder=o,t.makeHasBinder=s,t.makeEqualityBinder=l,t.makeEveryBlockBinder=u,t.makeAndBinder=c,t.makeOrBinder=h,t.makeConditionalBinder=d,t.makeOnlyBinder=p,t.makeOneBinder=f,t.makeRangeContentBinder=m,t.makeMapContentBinder=v,t.makeReversedBinder=g,t.makeDefinedBinder=_,t.makeParentBinder=b,t.makeWithBinder=y}});