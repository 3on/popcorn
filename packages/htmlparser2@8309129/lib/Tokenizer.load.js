montageDefine("8309129","lib/Tokenizer",{dependencies:[],factory:function(e,t,n){function i(e){return" "===e||"	"===e||"\r"===e||"\n"===e}function r(e,t){this._state=o,this._buffer="",this._sectionStart=0,this._index=0,this._options=e,this._special=0,this._cbs=t,this._running=!0}n.exports=r;var a=0,o=a++,s=a++,l=a++,u=a++,c=a++,h=a++,d=a++,p=a++,f=a++,m=a++,v=a++,g=a++,_=a++,b=a++,y=a++,w=a++,E=a++,C=a++,S=a++,T=a++,P=a++,D=a++,O=a++,x=a++,M=a++,L=a++,A=a++,k=a++,j=a++,I=a++,z=a++,R=a++,N=a++,B=a++,F=a++,q=a++,V=a++,U=a++,W=a++,Y=a++,H=a++,G=a++,X=a++,K=a++,$=a++,J=a++,Z=a++,Q=a++,et=a++;r.prototype.write=function(e){for(this._buffer+=e;this._index<this._buffer.length&&this._running;){var t=this._buffer.charAt(this._index);this._state===o?"<"===t&&(this._emitIfToken("text"),this._state=s,this._sectionStart=this._index):this._state===s?"/"===t?this._state=u:">"===t||this._special>0?this._state=o:i(t)||("!"===t?(this._state=b,this._sectionStart=this._index+1):"?"===t?(this._state=w,this._sectionStart=this._index+1):this._options&&this._options.xmlMode||"s"!==t&&"S"!==t?(this._state=l,this._sectionStart=this._index):(this._state=I,this._sectionStart=this._index)):this._state===l?"/"===t?(this._emitToken("opentagname"),this._cbs.onselfclosingtag(),this._state=h):">"===t?(this._emitToken("opentagname"),this._cbs.onopentagend(),this._state=o,this._sectionStart=this._index+1):i(t)&&(this._emitToken("opentagname"),this._state=d):this._state===u?i(t)||(">"===t?this._state=o:this._special>0?("s"===t||"S"===t)&&(this._state=z):(this._state=c,this._sectionStart=this._index)):this._state===c?">"===t?(this._emitToken("closetag"),this._state=o,this._sectionStart=this._index+1,this._special=0):i(t)&&(this._emitToken("closetag"),this._state=h,this._special=0):this._state===h?">"===t&&(this._state=o,this._sectionStart=this._index+1):this._state===d?">"===t?(this._state=o,this._cbs.onopentagend(),this._sectionStart=this._index+1):"/"===t?(this._cbs.onselfclosingtag(),this._state=h):i(t)||(this._state=p,this._sectionStart=this._index):this._state===p?"="===t?(this._emitIfToken("attribname"),this._state=m):i(t)?(this._emitIfToken("attribname"),this._state=f):("/"===t||">"===t)&&(this._emitIfToken("attribname"),this._state=d,this._index--):this._state===f?"="===t?this._state=m:"/"===t||">"===t?(this._state=d,this._index--):i(t)||(this._state=p,this._sectionStart=this._index):this._state===m?'"'===t?(this._state=v,this._sectionStart=this._index+1):"'"===t?(this._state=g,this._sectionStart=this._index+1):i(t)||(this._state=_,this._sectionStart=this._index):this._state===v?'"'===t&&(this._emitToken("attribvalue"),this._state=d):this._state===g?"'"===t&&(this._emitToken("attribvalue"),this._state=d):this._state===_?">"===t?(this._emitToken("attribvalue"),this._state=o,this._cbs.onopentagend(),this._sectionStart=this._index+1):i(t)&&(this._emitToken("attribvalue"),this._state=d):this._state===b?this._state="["===t?P:"-"===t?E:y:this._state===y?">"===t&&(this._emitToken("declaration"),this._state=o,this._sectionStart=this._index+1):this._state===w?">"===t&&(this._emitToken("processinginstruction"),this._state=o,this._sectionStart=this._index+1):this._state===E?"-"===t?(this._state=C,this._sectionStart=this._index+1):this._state=y:this._state===C?"-"===t&&(this._state=S):this._state===S?this._state="-"===t?T:C:this._state===T?">"===t?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=o,this._sectionStart=this._index+1):this._state=C:this._state===P?this._state="C"===t?D:y:this._state===D?this._state="D"===t?O:y:this._state===O?this._state="A"===t?x:y:this._state===x?this._state="T"===t?M:y:this._state===M?this._state="A"===t?L:y:this._state===L?"["===t?(this._state=A,this._sectionStart=this._index+1):this._state=y:this._state===A?"]"===t&&(this._state=k):this._state===k?this._state="]"===t?j:A:this._state===j?">"===t?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=o,this._sectionStart=this._index+1):this._state=A:this._state===I?"c"===t||"C"===t?this._state=R:"t"===t||"T"===t?this._state=G:(this._state=l,this._index--):this._state===z?this._state=1!==this._special||"c"!==t&&"C"!==t?2!==this._special||"t"!==t&&"T"!==t?o:J:V:this._state===R?"r"===t||"R"===t?this._state=N:(this._state=l,this._index--):this._state===N?"i"===t||"I"===t?this._state=B:(this._state=l,this._index--):this._state===B?"p"===t||"P"===t?this._state=F:(this._state=l,this._index--):this._state===F?"t"===t||"T"===t?this._state=q:(this._state=l,this._index--):this._state===q?(("/"===t||">"===t||i(t))&&(this._special=1),this._state=l,this._index--):this._state===V?this._state="r"===t||"R"===t?U:o:this._state===U?this._state="i"===t||"I"===t?W:o:this._state===W?this._state="p"===t||"P"===t?Y:o:this._state===Y?this._state="t"===t||"T"===t?H:o:this._state===H?">"===t||i(t)?(this._state=c,this._sectionStart=this._index-6,this._index--):this._state=o:this._state===G?"y"===t||"Y"===t?this._state=X:(this._state=l,this._index--):this._state===X?"l"===t||"L"===t?this._state=K:(this._state=l,this._index--):this._state===K?"e"===t||"E"===t?this._state=$:(this._state=l,this._index--):this._state===$?(("/"===t||">"===t||i(t))&&(this._special=2),this._state=l,this._index--):this._state===J?this._state="y"===t||"Y"===t?Z:o:this._state===Z?this._state="l"===t||"L"===t?Q:o:this._state===Q?this._state="e"===t||"E"===t?et:o:this._state===et?">"===t||i(t)?(this._state=c,this._sectionStart=this._index-5,this._index--):this._state=o:this._cbs.onerror(Error("unknown state"),this._state),this._index++}-1===this._sectionStart?(this._buffer="",this._index=0):(this._state===o?(this._emitIfToken("text"),this._buffer="",this._index=0):this._sectionStart===this._index?(this._buffer="",this._index=0):this._sectionStart>0&&(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart),this._sectionStart=0)},r.prototype.pause=function(){this._running=!1},r.prototype.resume=function(){this._running=!0},r.prototype.end=function(e){e&&this.write(e),""===this._buffer||-1===this._sectionStart||this._sectionStart===this._index||(this._state===A||this._state===k||this._state===j?this._emitIfToken("cdata"):this._state===C||this._state===S||this._state===T?this._emitIfToken("comment"):this._state===l?this._emitIfToken("opentagname"):this._state===c?this._emitIfToken("closetag"):this._emitIfToken("text")),this._cbs.onend()},r.prototype.reset=function(){r.call(this,this._options,this._cbs)},r.prototype._emitToken=function(e){this._cbs["on"+e](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1},r.prototype._emitIfToken=function(e){this._index>this._sectionStart&&this._cbs["on"+e](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1}}});