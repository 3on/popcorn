montageDefine("fb96f7e","core/meta/validation-semantics",{dependencies:["montage","core/logger"],factory:function(e,t){"use strict";var n=e("montage").Montage,r=n;e("core/logger").logger("blueprint");var i=t.PropertyValidationSemantics=r.create(r,{constructor:{value:function i(){this.superForValue("constructor")()}},initWithBlueprint:{value:function(e){return this._blueprint=e,this}},_blueprint:{value:null},blueprint:{get:function(){return this._blueprint}},compile:{value:function(e,t){r.compile.call(this,e,t)}},operators:{value:{isBound:function(e){return!e}}},evaluators:{value:{isBound:function(e,t){var n=this;return function(r,i){return r=n.count(e(r,i)),t(r,i)}}}}});for(var a in r.operators)i.operators[a]=r.operators[a];for(var o in r.evaluators)i.evaluators[o]=r.evaluators[o]}});