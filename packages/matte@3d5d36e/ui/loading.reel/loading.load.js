montageDefine("3d5d36e","ui/loading.reel/loading",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.Loading=n.specialize({_loading:{value:null},loading:{get:function(){return this._loading},set:function(e){this._loading!==e&&(this._loading=e,this.needsDraw=!0)}},draw:{value:function(){var e=this.element.classList,t=e.contains("animate");this.loading?t||e.add("animate"):t&&e.remove("animate")}}})}});