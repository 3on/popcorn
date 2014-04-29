montageDefine("fb96f7e","core/meta/blueprint-reference",{dependencies:["montage","core/promise","core/meta/blueprint","core/meta/binder","core/meta/remote-reference","core/meta/binder-reference","core/logger","core/meta/module-blueprint"],factory:function(e,t){"use strict";e("montage").Montage;var n=e("core/promise").Promise,r=e("core/meta/blueprint"),i=e("core/meta/binder"),a=e("core/meta/remote-reference").RemoteReference,o=e("core/meta/binder-reference").BinderReference;e("core/logger").logger("blueprint"),t.BlueprintReference=a.specialize({constructor:{value:function(){this.superForValue("constructor")()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["blueprint",(this._reference.blueprintName||"unnamed").toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(t){t.blueprintName;var a=t.blueprintModule;t.prototypeName,t.moduleId;var s=t.binderReference,l=n.resolve(i.Binder.manager.defaultBinder);return s&&(l=o.valueFromReference(s,e)),l.then(function(t){if(t){var n=e("core/meta/module-blueprint");return n.ModuleBlueprint.getBlueprintWithModuleId(a.id,a.require).then(function(e){if(e)return t.addBlueprint(e),e;throw Error("Error cannot find Blueprint "+a)})}return r.Blueprint.getBlueprintWithModuleId(a,e)})}},referenceFromValue:{value:function(e){var t={};return t.blueprintName=e.name,t.blueprintModule=e.blueprintInstanceModule,e.binder&&!e.binder.isDefault&&(t.binderReference=o.referenceFromValue(e.binder)),t}}})}});