montageDefine("fb96f7e","core/converter/trim-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t){e("montage").Montage;var n=e("core/converter/converter").Converter,i=t.trim=function(e){return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};t.TrimConverter=n.specialize({_convert:{value:function(e){return e&&"string"==typeof e?i(e):void 0}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}});