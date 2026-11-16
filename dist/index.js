"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var q=c(function(w,f){
function g(e,r,a,i,o){var u,n,t,s;for(u=a.data,n=a.accessors[0],t=o,s=0;s<e;s++){if(n(u,t)!==r)return s;t+=i}return-1}f.exports=g
});var v=c(function(z,x){
var p=require('@stdlib/array-base-arraylike2object/dist'),O=q();function b(e,r,a,i,o){var u,n,t;if(e<=0)return-1;if(n=p(a),n.accessorProtocol)return O(e,r,n,i,o);for(u=o,t=0;t<e;t++){if(a[u]!==r)return t;u+=i}return-1}x.exports=b
});var l=c(function(A,d){
var E=require('@stdlib/strided-base-stride2offset/dist'),j=v();function k(e,r,a,i){return j(e,r,a,i,E(e,i))}d.exports=k
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=l(),R=v();P(y,"ndarray",R);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
