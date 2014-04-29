var Montage=require("core/core").Montage,Target=require("core/target").Target,MontageWindow=require("window-loader/montage-window").MontageWindow,Slot;require("core/dom");var Application=exports.Application=Target.specialize({eventManager:{value:null},parentApplication:{value:null},mainApplication:{get:function(){for(var e=this;e.parentApplication;)e=e.parentApplication;return e}},_windowsSortOrder:{value:"reverse-z-order"},windowsSortOrder:{get:function(){return null==this.parentApplication?this._windowsSortOrder:this.mainApplication.windowsSortOrder},set:function(e){null==this.parentApplication?-1!==["z-order","reverse-z-order","z-order","reverse-open-order"].indexOf(e)&&(this._windowsSortOrder=e):this.mainApplication.windowsSortOrder=e}},windows:{get:function(){var e;if(null==this.parentApplication){if(!this._windows){var e=new MontageWindow;e.application=this,e.window=window,this.window=e,this._windows=[this.window],this._multipleWindow=!0}return this._windows}return this.mainApplication.windows}},_window:{value:null},window:{get:function(){if(!this._window&&this==this.mainApplication){var e=new MontageWindow;e.application=this,e.window=window,this._window=e}return this._window},set:function(e){this._window||(this._window=e)}},attachedWindows:{value:[]},eventManagerForWindow:{value:function(e){return e.defaultEventMananger}},focusWindow:{get:function(){var e=this.windows,t=this.windowsSortOrder;if("z-order"==t)return e[0];if("reverse-z-order"==t)return e[e.length-1];for(var n in e)if(e[n].focused)return e[n]}},delegate:{value:null},nextTarget:{get:function(){return this.delegate}},openWindow:{value:function(e,t,n){var i,a,s=this,o=new MontageWindow,r={location:!1,menubar:!1,resizable:!0,scrollbars:!0,status:!1,titlebar:!0,toolbar:!1},l={module:e,name:t,parent:window,callback:function(e,t){var n;i=e.document.application,o.window=e,o.application=i,o.component=t,i.window=o,s.attachedWindows.push(o),n=s.mainApplication.windowsSortOrder,"z-order"==n||"reverse-open-order"==n?s.windows.unshift(o):s.windows.push(o),a=document.createEvent("CustomEvent"),a.initCustomEvent("load",!0,!0,null),o.dispatchEvent(a)}};if(this!==this.mainApplication||this._multipleWindow||this.window,"object"==typeof n){var u,h,c="",d="";for(u in n)n.hasOwnProperty(u)&&(r[u]=n[u])}var m=["name"];for(u in r)-1==m.indexOf(u)&&(h=r[u],"boolean"==typeof h?h=h?"yes":"no":(h+="",h.match(/[ ,"]/)&&(h='"'+h.replace(/"/g,'\\"')+'"')),d+=c+u+"="+h,c=",");return window.require.loadPackage({name:"montage"}).then(function(e){var t=window.open(e.location+"window-loader/index.html","_blank",d);t.loadInfo=l}).done(),o}},attachWindow:{value:function(e){var t,n=e.application.parentApplication;return n!==this&&(n&&n.detachWindow(e),e.parentApplication=this,this.attachedWindows.push(e),t=this.mainApplication.windowsSortOrder,"z-order"==t||"reverse-open-order"==t?this.windows.unshift(e):this.windows.push(e),e.focus()),e}},detachWindow:{value:function(e){var t,n,i=this.windows;return void 0===e&&(e=this.window),n=e.application.parentApplication,n==this?(t=this.attachedWindows.indexOf(e),-1!==t&&this.attachedWindows.splice(t,1),t=i.indexOf(e),-1!==t&&i.splice(t,1),e.application.parentApplication=null):n&&n.detachWindow(e),e}},constructor:{value:function(){window.loadInfo&&!this.parentApplication&&(this.parentApplication=window.loadInfo.parent.document.application)}},_load:{value:function(e,t){var n,i=this;exports.application=i,require.async("ui/component").then(function(a){return n=a.__root__,n.element=document,require("core/template").instantiateDocument(window.document,e).then(function(){i.callDelegateMethod("willFinishLoading",i),n.needsDraw=!0,t&&t(i)})}).done()}},_alertPopup:{value:null,enumerable:!1},_confirmPopup:{value:null,enumerable:!1},_notifyPopup:{value:null,enumerable:!1},_zIndex:{value:null},_isSystemPopup:{value:function(e){return"alert"===e||"confirm"===e||"notify"===e}},_createPopupSlot:{value:function(e){var t=document.createElement("div");document.body.appendChild(t),t.style.zIndex=e,t.style.position="absolute";var n=new Slot;return n.element=t,n.attachToParentComponent(),n}},getPopupSlot:{value:function(e,t,n){var i=this;require.async("ui/slot.reel/slot").then(function(a){Slot=Slot||a.Slot,e=e||"custom";var s,o,r=i._isSystemPopup(e);if(i.popupSlots=i.popupSlots||{},r)switch(e){case"alert":s=9004;break;case"confirm":s=9003;break;case"notify":s=9002}else i._zIndex=i._zIndex?i._zIndex+1:7e3,s=i._zIndex;o=i.popupSlots[e],o||(o=i.popupSlots[e]=i._createPopupSlot(s)),r||(o.element.style.zIndex=s),o.content=t,n.call(this,o)}).done()}},returnPopupSlot:{value:function(e){var t=this;if(t.popupSlots&&t.popupSlots[e]){var n=t.popupSlots[e];n.content=null}}},_getActivePopupSlots:{value:function(){var e=[];if(this.popupSlots){var t=Object.keys(this.popupSlots);if(t&&t.length>0){var n,i=0,a=t.length;for(i=0;a>i;i++)n=this.popupSlots[t[i]],n&&null!==n.content&&e.push(n)}}return e}}});