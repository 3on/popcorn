montageDefine("3d5d36e","ui/video-player.reel/video-player",{dependencies:["montage","montage/core/bindings","montage/core/logger","montage/ui/base/abstract-video","montage/core/media-controller","montage/core/converter/converter"],factory:function(e,t){"use strict";var n=e("montage").Montage,i=(e("montage/core/bindings").Bindings,e("montage/core/logger").logger("video-player")),r=e("montage/ui/base/abstract-video").AbstractVideo,a=(e("montage/core/media-controller").MediaController,e("montage/core/converter/converter").Converter);t.PrettyTimeConverter=n.create(a,{convert:{value:function(e){var t,n,i;return e=parseInt(e,10),isNaN(e)||0>e?"":(t=e%60,n=Math.floor(e/60)%60,i=Math.floor(e/3600),(i>0?i+":":"")+(10>n?"0"+n:n)+":"+(10>t?"0"+t:t))}},revert:{value:function(e){return e}}}),t.VideoPlayer=r.specialize({CONTROL_SHOW_TIME:{enumerable:!0,value:5e3,writable:!1},playButton:{value:null,enumerable:!1},repeatButton:{value:null,enumerable:!1},volumeLevel:{value:null,enumerable:!1},controls:{value:null,enumerable:!1},fullScreenPanel:{value:null,enumerable:!1},fullScreenButton:{value:null,enumerable:!1},positionText:{value:null,enumerable:!1},durationText:{value:null,enumerable:!1},slider:{value:null,enumerable:!1},handlePlayButtonAction:{value:function(){this.videoController.status===this.videoController.PLAYING?this.videoController.pause():this.videoController.status===this.videoController.PAUSED?this.videoController.unpause():this.videoController.play()}},handleRewindButtonAction:{value:function(){this.videoController.rewind()}},handleFastForwardButtonAction:{value:function(){this.videoController.fastForward()}},handleDecreaseVolumeButtonAction:{value:function(){this.videoController.volumeDecrease()}},handleIncreaseVolumeButtonAction:{value:function(){this.videoController.volumeIncrease()}},handleMuteButtonAction:{value:function(){this.videoController.toggleMute()}},handleRepeatButtonAction:{value:function(){}},handleFullScreenButtonAction:{value:function(){this.toggleFullScreen()}},autoHide:{value:!0},templateDidLoad:{value:function(){i.isDebug&&i.debug("VideoPlayer:templateDidLoad")}},_showControls:{value:!0,enumerable:!1},_hideControlsId:{value:null,enumerable:!1},handleMouseup:{value:function(){this.showControlsForInterval()}},handleTouchend:{value:function(){this.showControlsForInterval()}},showControlsForInterval:{value:function(){this._showControls=!0,this.needsDraw=!0;var e=this,t=function(){e._showControls=!1,e._hideControlsId=null,e.needsDraw=!0};this._hideControlsId&&window.clearTimeout(this._hideControlsId),this._hideControlsId=window.setTimeout(t,this.CONTROL_SHOW_TIME)}},_installUserActionDetector:{value:function(){window.touch&&this.autoHide?this.element.addEventListener("touchstart",this,!1):this.autoHide&&this.element.addEventListener("mouseup",this,!1)}},enterDocument:{value:function(e){r.enterDocument&&r.enterDocument.call(this,e),e&&(this._installUserActionDetector(),this.autoHide||(this.element.style.paddingBottom="50px"))}},draw:{value:function(){r.draw&&r.draw.call(this);var e;this.videoController.status===this.videoController.EMPTY?this.loadMedia():(this.videoController.status===this.videoController.PLAYING?this.playButton.classList.contains("playing")||this.playButton.classList.add("playing"):this.playButton.classList.contains("playing")&&this.playButton.classList.remove("playing"),this.volumeLevel&&(e=Math.floor(this.videoController.volume),this.volumeLevel.style.width=e+"%"),this.videoController.repeat?this.repeatButton.classList.contains("loop")||this.repeatButton.classList.add("loop"):this.repeatButton.classList.contains("loop")&&this.repeatButton.classList.remove("loop"),this._showControls?(this.controls.classList.remove("hide-controls"),this.controls.classList.add("show-controls")):(this.controls.classList.remove("show-controls"),this.controls.classList.add("hide-controls")),this.supportsFullScreen?(this.fullScreenPanel.classList.add("support-fullscreen"),this.fullScreenPanel.classList.remove("hide-fullscreen"),this.isFullScreen?(this.fullScreenButton.classList.add("exit-fullscreen"),this.fullScreenButton.classList.remove("enter-fullscreen"),this.element.classList.add("fullscreen")):(this.fullScreenButton.classList.add("enter-fullscreen"),this.fullScreenButton.classList.remove("exit-fullscreen"),this.element.classList.remove("fullscreen"))):(this.fullScreenPanel.classList.remove("support-fullscreen"),this.fullScreenPanel.classList.add("hide-fullscreen"),this.element.classList.remove("fullscreen")))}}})}});