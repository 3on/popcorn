montageDefine("f57d345","lib/_stream_duplex",{dependencies:["core-util-is","inherits","./_stream_readable","./_stream_writable"],factory:function(e,t,n){function i(e){return this instanceof i?(l.call(this,e),u.call(this,e),e&&e.readable===!1&&(this.readable=!1),e&&e.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,e&&e.allowHalfOpen===!1&&(this.allowHalfOpen=!1),this.once("end",r),void 0):new i(e)}function r(){this.allowHalfOpen||this._writableState.ended||process.nextTick(this.end.bind(this))}function a(e,t){for(var n=0,i=e.length;i>n;n++)t(e[n],n)}n.exports=i;var o=Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t},s=e("core-util-is");s.inherits=e("inherits");var l=e("./_stream_readable"),u=e("./_stream_writable");s.inherits(i,l),a(o(u.prototype),function(e){i.prototype[e]||(i.prototype[e]=u.prototype[e])})}});