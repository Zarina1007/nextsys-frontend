!function(){function t(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&e(t,i)}function e(t,i){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,i)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=o(t);if(e){var s=o(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return n(this,i)}}function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],n=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(c){o=!0,r=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Qu3c:function(t,e,i){"use strict";i.d(e,"a",(function(){return T})),i.d(e,"b",(function(){return A}));var n=i("rDax"),o=i("u47x"),s=i("ofXK"),c=i("fXoL"),h=i("FKr1"),f=i("vxfF"),d=i("8LU1"),u=i("FtGj"),p=i("0MNC"),m=i("nLfN"),_=i("+rOU"),g=i("XNiG"),b=i("1G5W"),v=i("IzEk"),y=i("R0Ic"),k=i("cH1L"),w={tooltipState:Object(y.n)("state",[Object(y.k)("initial, void, hidden",Object(y.l)({opacity:0,transform:"scale(0)"})),Object(y.k)("visible",Object(y.l)({transform:"scale(1)"})),Object(y.m)("* => visible",Object(y.e)("200ms cubic-bezier(0, 0, 0.2, 1)",Object(y.h)([Object(y.l)({opacity:0,transform:"scale(0)",offset:0}),Object(y.l)({opacity:.5,transform:"scale(0.99)",offset:.5}),Object(y.l)({opacity:1,transform:"scale(1)",offset:1})]))),Object(y.m)("* => hidden",Object(y.e)("100ms cubic-bezier(0, 0, 0.2, 1)",Object(y.l)({opacity:0})))])},E=Object(m.f)({passive:!0}),x=new c.t("mat-tooltip-scroll-strategy"),O={provide:x,deps:[n.c],useFactory:function(t){return function(){return t.scrollStrategies.reposition({scrollThrottle:20})}}},S=new c.t("mat-tooltip-default-options",{providedIn:"root",factory:function(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}}),T=function(){var t=function(){function t(e,i,n,o,r,s,c,l,h,f,d){var p=this;a(this,t),this._overlay=e,this._elementRef=i,this._scrollDispatcher=n,this._viewContainerRef=o,this._ngZone=r,this._platform=s,this._ariaDescriber=c,this._focusMonitor=l,this._dir=f,this._defaultOptions=d,this._position="below",this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this.showDelay=this._defaultOptions.showDelay,this.hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new g.a,this._handleKeydown=function(t){p._isTooltipVisible()&&t.keyCode===u.h&&!Object(u.t)(t)&&(t.preventDefault(),t.stopPropagation(),p._ngZone.run((function(){return p.hide(0)})))},this._scrollStrategy=h,d&&(d.position&&(this.position=d.position),d.touchGestures&&(this.touchGestures=d.touchGestures)),r.runOutsideAngular((function(){i.nativeElement.addEventListener("keydown",p._handleKeydown)}))}return l(t,[{key:"ngAfterViewInit",value:function(){var t=this;this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Object(b.a)(this._destroyed)).subscribe((function(e){e?"keyboard"===e&&t._ngZone.run((function(){return t.show()})):t._ngZone.run((function(){return t.hide(0)}))}))}},{key:"ngOnDestroy",value:function(){var t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),t.removeEventListener("keydown",this._handleKeydown),this._passiveListeners.forEach((function(e){var i=r(e,2),n=i[0],o=i[1];t.removeEventListener(n,o,E)})),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message),this._focusMonitor.stopMonitoring(t)}},{key:"show",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.showDelay;if(!this.disabled&&this.message&&(!this._isTooltipVisible()||this._tooltipInstance._showTimeoutId||this._tooltipInstance._hideTimeoutId)){var i=this._createOverlay();this._detach(),this._portal=this._portal||new _.d(I,this._viewContainerRef),this._tooltipInstance=i.attach(this._portal).instance,this._tooltipInstance.afterHidden().pipe(Object(b.a)(this._destroyed)).subscribe((function(){return t._detach()})),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),this._tooltipInstance.show(e)}}},{key:"hide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.hideDelay;this._tooltipInstance&&this._tooltipInstance.hide(t)}},{key:"toggle",value:function(){this._isTooltipVisible()?this.hide():this.show()}},{key:"_isTooltipVisible",value:function(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}},{key:"_createOverlay",value:function(){var t=this;if(this._overlayRef)return this._overlayRef;var e=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),i=this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(".mat-tooltip").withFlexibleDimensions(!1).withViewportMargin(8).withScrollableContainers(e);return i.positionChanges.pipe(Object(b.a)(this._destroyed)).subscribe((function(e){t._tooltipInstance&&e.scrollableViewProperties.isOverlayClipped&&t._tooltipInstance.isVisible()&&t._ngZone.run((function(){return t.hide(0)}))})),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:i,panelClass:"mat-tooltip-panel",scrollStrategy:this._scrollStrategy()}),this._updatePosition(),this._overlayRef.detachments().pipe(Object(b.a)(this._destroyed)).subscribe((function(){return t._detach()})),this._overlayRef}},{key:"_detach",value:function(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}},{key:"_updatePosition",value:function(){var t=this._overlayRef.getConfig().positionStrategy,e=this._getOrigin(),i=this._getOverlayPosition();t.withPositions([Object.assign(Object.assign({},e.main),i.main),Object.assign(Object.assign({},e.fallback),i.fallback)])}},{key:"_getOrigin",value:function(){var t,e=!this._dir||"ltr"==this._dir.value,i=this.position;"above"==i||"below"==i?t={originX:"center",originY:"above"==i?"top":"bottom"}:"before"==i||"left"==i&&e||"right"==i&&!e?t={originX:"start",originY:"center"}:("after"==i||"right"==i&&e||"left"==i&&!e)&&(t={originX:"end",originY:"center"});var n=this._invertPosition(t.originX,t.originY);return{main:t,fallback:{originX:n.x,originY:n.y}}}},{key:"_getOverlayPosition",value:function(){var t,e=!this._dir||"ltr"==this._dir.value,i=this.position;"above"==i?t={overlayX:"center",overlayY:"bottom"}:"below"==i?t={overlayX:"center",overlayY:"top"}:"before"==i||"left"==i&&e||"right"==i&&!e?t={overlayX:"end",overlayY:"center"}:("after"==i||"right"==i&&e||"left"==i&&!e)&&(t={overlayX:"start",overlayY:"center"});var n=this._invertPosition(t.overlayX,t.overlayY);return{main:t,fallback:{overlayX:n.x,overlayY:n.y}}}},{key:"_updateTooltipMessage",value:function(){var t=this;this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe(Object(v.a)(1),Object(b.a)(this._destroyed)).subscribe((function(){t._tooltipInstance&&t._overlayRef.updatePosition()})))}},{key:"_setTooltipClass",value:function(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}},{key:"_invertPosition",value:function(t,e){return"above"===this.position||"below"===this.position?"top"===e?e="bottom":"bottom"===e&&(e="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:e}}},{key:"_setupPointerEnterEventsIfNeeded",value:function(){var t=this;!this._disabled&&this.message&&this._viewInitialized&&!this._passiveListeners.length&&(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",function(){t._setupPointerExitEventsIfNeeded(),t.show()}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",function(){t._setupPointerExitEventsIfNeeded(),clearTimeout(t._touchstartTimeout),t._touchstartTimeout=setTimeout((function(){return t.show()}),500)}])),this._addListeners(this._passiveListeners))}},{key:"_setupPointerExitEventsIfNeeded",value:function(){var t,e=this;if(!this._pointerExitEventsInitialized){this._pointerExitEventsInitialized=!0;var i=[];if(this._platformSupportsMouseEvents())i.push(["mouseleave",function(){return e.hide()}]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();var n=function(){clearTimeout(e._touchstartTimeout),e.hide(e._defaultOptions.touchendHideDelay)};i.push(["touchend",n],["touchcancel",n])}this._addListeners(i),(t=this._passiveListeners).push.apply(t,i)}}},{key:"_addListeners",value:function(t){var e=this;t.forEach((function(t){var i=r(t,2),n=i[0],o=i[1];e._elementRef.nativeElement.addEventListener(n,o,E)}))}},{key:"_platformSupportsMouseEvents",value:function(){return!this._platform.IOS&&!this._platform.ANDROID}},{key:"_disableNativeGesturesIfNecessary",value:function(){var t=this.touchGestures;if("off"!==t){var e=this._elementRef.nativeElement,i=e.style;("on"===t||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),"on"!==t&&e.draggable||(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}},{key:"position",get:function(){return this._position},set:function(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(),this._tooltipInstance&&this._tooltipInstance.show(0),this._overlayRef.updatePosition()))}},{key:"disabled",get:function(){return this._disabled},set:function(t){this._disabled=Object(d.c)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}},{key:"message",get:function(){return this._message},set:function(t){var e=this;this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message),this._message=null!=t?(""+t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular((function(){Promise.resolve().then((function(){e._ariaDescriber.describe(e._elementRef.nativeElement,e.message)}))})))}},{key:"tooltipClass",get:function(){return this._tooltipClass},set:function(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Qb(n.c),c.Qb(c.m),c.Qb(f.c),c.Qb(c.S),c.Qb(c.C),c.Qb(m.a),c.Qb(o.c),c.Qb(o.h),c.Qb(x),c.Qb(k.b,8),c.Qb(S,8))},t.\u0275dir=c.Lb({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-tooltip-trigger"],inputs:{showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],position:["matTooltipPosition","position"],disabled:["matTooltipDisabled","disabled"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]}),t}(),I=function(){var t=function(){function t(e,i){a(this,t),this._changeDetectorRef=e,this._breakpointObserver=i,this._visibility="initial",this._closeOnInteraction=!1,this._onHide=new g.a,this._isHandset=this._breakpointObserver.observe(p.b.Handset)}return l(t,[{key:"show",value:function(t){var e=this;this._hideTimeoutId&&(clearTimeout(this._hideTimeoutId),this._hideTimeoutId=null),this._closeOnInteraction=!0,this._showTimeoutId=setTimeout((function(){e._visibility="visible",e._showTimeoutId=null,e._markForCheck()}),t)}},{key:"hide",value:function(t){var e=this;this._showTimeoutId&&(clearTimeout(this._showTimeoutId),this._showTimeoutId=null),this._hideTimeoutId=setTimeout((function(){e._visibility="hidden",e._hideTimeoutId=null,e._markForCheck()}),t)}},{key:"afterHidden",value:function(){return this._onHide}},{key:"isVisible",value:function(){return"visible"===this._visibility}},{key:"ngOnDestroy",value:function(){this._onHide.complete()}},{key:"_animationStart",value:function(){this._closeOnInteraction=!1}},{key:"_animationDone",value:function(t){var e=t.toState;"hidden"!==e||this.isVisible()||this._onHide.next(),"visible"!==e&&"hidden"!==e||(this._closeOnInteraction=!0)}},{key:"_handleBodyInteraction",value:function(){this._closeOnInteraction&&this.hide(0)}},{key:"_markForCheck",value:function(){this._changeDetectorRef.markForCheck()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Qb(c.i),c.Qb(p.a))},t.\u0275cmp=c.Kb({type:t,selectors:[["mat-tooltip-component"]],hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,e){1&t&&c.hc("click",(function(){return e._handleBodyInteraction()}),!1,c.Bc),2&t&&c.Jc("zoom","visible"===e._visibility?1:null)},decls:3,vars:7,consts:[[1,"mat-tooltip",3,"ngClass"]],template:function(t,e){var i;1&t&&(c.Wb(0,"div",0),c.hc("@state.start",(function(){return e._animationStart()}))("@state.done",(function(t){return e._animationDone(t)})),c.mc(1,"async"),c.Oc(2),c.Vb()),2&t&&(c.Ib("mat-tooltip-handset",null==(i=c.nc(1,5,e._isHandset))?null:i.matches),c.rc("ngClass",e.tooltipClass)("@state",e._visibility),c.Db(2),c.Pc(e.message))},directives:[s.n],pipes:[s.b],styles:[".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],encapsulation:2,data:{animation:[w.tooltipState]},changeDetection:0}),t}(),A=function(){var t=function t(){a(this,t)};return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},providers:[O],imports:[[o.a,s.c,n.f,h.k],h.k,f.b]}),t}()},Xa2L:function(e,n,o){"use strict";o.d(n,"a",(function(){return y})),o.d(n,"b",(function(){return w})),o.d(n,"c",(function(){return k}));var r=o("fXoL"),s=o("ofXK"),c=o("FKr1"),h=o("8LU1"),f=o("nLfN"),d=o("R1ws");function u(t,e){if(1&t&&(r.kc(),r.Rb(0,"circle",3)),2&t){var i=r.lc();r.Jc("animation-name","mat-progress-spinner-stroke-rotate-"+i._spinnerAnimationLabel)("stroke-dashoffset",i._getStrokeDashOffset(),"px")("stroke-dasharray",i._getStrokeCircumference(),"px")("stroke-width",i._getCircleStrokeWidth(),"%"),r.Eb("r",i._getCircleRadius())}}function p(t,e){if(1&t&&(r.kc(),r.Rb(0,"circle",3)),2&t){var i=r.lc();r.Jc("stroke-dashoffset",i._getStrokeDashOffset(),"px")("stroke-dasharray",i._getStrokeCircumference(),"px")("stroke-width",i._getCircleStrokeWidth(),"%"),r.Eb("r",i._getCircleRadius())}}function m(t,e){if(1&t&&(r.kc(),r.Rb(0,"circle",3)),2&t){var i=r.lc();r.Jc("animation-name","mat-progress-spinner-stroke-rotate-"+i._spinnerAnimationLabel)("stroke-dashoffset",i._getStrokeDashOffset(),"px")("stroke-dasharray",i._getStrokeCircumference(),"px")("stroke-width",i._getCircleStrokeWidth(),"%"),r.Eb("r",i._getCircleRadius())}}function _(t,e){if(1&t&&(r.kc(),r.Rb(0,"circle",3)),2&t){var i=r.lc();r.Jc("stroke-dashoffset",i._getStrokeDashOffset(),"px")("stroke-dasharray",i._getStrokeCircumference(),"px")("stroke-width",i._getCircleStrokeWidth(),"%"),r.Eb("r",i._getCircleRadius())}}var g=".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n",b=Object(c.z)((function t(e){a(this,t),this._elementRef=e}),"primary"),v=new r.t("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}}),y=function(){var e=function(e){t(o,e);var n=i(o);function o(t,e,i,r,s){var c;a(this,o),(c=n.call(this,t))._elementRef=t,c._document=i,c._diameter=100,c._value=0,c._fallbackAnimation=!1,c.mode="determinate";var l=o._diameters;return c._spinnerAnimationLabel=c._getSpinnerAnimationLabel(),l.has(i.head)||l.set(i.head,new Set([100])),c._fallbackAnimation=e.EDGE||e.TRIDENT,c._noopAnimations="NoopAnimations"===r&&!!s&&!s._forceAnimations,s&&(s.diameter&&(c.diameter=s.diameter),s.strokeWidth&&(c.strokeWidth=s.strokeWidth)),c}return l(o,[{key:"ngOnInit",value:function(){var t=this._elementRef.nativeElement;this._styleRoot=Object(f.c)(t)||this._document.head,this._attachStyleNode(),t.classList.add("mat-progress-spinner-indeterminate".concat(this._fallbackAnimation?"-fallback":"","-animation"))}},{key:"_getCircleRadius",value:function(){return(this.diameter-10)/2}},{key:"_getViewBox",value:function(){var t=2*this._getCircleRadius()+this.strokeWidth;return"0 0 ".concat(t," ").concat(t)}},{key:"_getStrokeCircumference",value:function(){return 2*Math.PI*this._getCircleRadius()}},{key:"_getStrokeDashOffset",value:function(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}},{key:"_getCircleStrokeWidth",value:function(){return this.strokeWidth/this.diameter*100}},{key:"_attachStyleNode",value:function(){var t=this._styleRoot,e=this._diameter,i=o._diameters,n=i.get(t);if(!n||!n.has(e)){var r=this._document.createElement("style");r.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),r.textContent=this._getAnimationText(),t.appendChild(r),n||(n=new Set,i.set(t,n)),n.add(e)}}},{key:"_getAnimationText",value:function(){var t=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*t).replace(/END_VALUE/g,""+.2*t).replace(/DIAMETER/g,""+this._spinnerAnimationLabel)}},{key:"_getSpinnerAnimationLabel",value:function(){return this.diameter.toString().replace(".","_")}},{key:"diameter",get:function(){return this._diameter},set:function(t){this._diameter=Object(h.f)(t),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}},{key:"strokeWidth",get:function(){return this._strokeWidth||this.diameter/10},set:function(t){this._strokeWidth=Object(h.f)(t)}},{key:"value",get:function(){return"determinate"===this.mode?this._value:0},set:function(t){this._value=Math.max(0,Math.min(100,Object(h.f)(t)))}}]),o}(b);return e.\u0275fac=function(t){return new(t||e)(r.Qb(r.m),r.Qb(f.a),r.Qb(s.e,8),r.Qb(d.a,8),r.Qb(v))},e.\u0275cmp=r.Kb({type:e,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(t,e){2&t&&(r.Eb("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),r.Jc("width",e.diameter,"px")("height",e.diameter,"px"),r.Ib("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[r.Ab],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(r.kc(),r.Wb(0,"svg",0),r.Mc(1,u,1,9,"circle",1),r.Mc(2,p,1,7,"circle",2),r.Vb()),2&t&&(r.Jc("width",e.diameter,"px")("height",e.diameter,"px"),r.rc("ngSwitch","indeterminate"===e.mode),r.Eb("viewBox",e._getViewBox()),r.Db(1),r.rc("ngSwitchCase",!0),r.Db(1),r.rc("ngSwitchCase",!1))},directives:[s.r,s.s],styles:[g],encapsulation:2,changeDetection:0}),e._diameters=new WeakMap,e}(),k=function(){var e=function(e){t(o,e);var n=i(o);function o(t,e,i,r,s){var c;return a(this,o),(c=n.call(this,t,e,i,r,s)).mode="indeterminate",c}return o}(y);return e.\u0275fac=function(t){return new(t||e)(r.Qb(r.m),r.Qb(f.a),r.Qb(s.e,8),r.Qb(d.a,8),r.Qb(v))},e.\u0275cmp=r.Kb({type:e,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(t,e){2&t&&(r.Jc("width",e.diameter,"px")("height",e.diameter,"px"),r.Ib("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color"},features:[r.Ab],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(r.kc(),r.Wb(0,"svg",0),r.Mc(1,m,1,9,"circle",1),r.Mc(2,_,1,7,"circle",2),r.Vb()),2&t&&(r.Jc("width",e.diameter,"px")("height",e.diameter,"px"),r.rc("ngSwitch","indeterminate"===e.mode),r.Eb("viewBox",e._getViewBox()),r.Db(1),r.rc("ngSwitchCase",!0),r.Db(1),r.rc("ngSwitchCase",!1))},directives:[s.r,s.s],styles:[g],encapsulation:2,changeDetection:0}),e}(),w=function(){var t=function t(){a(this,t)};return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[c.k,s.c],c.k]}),t}()}}])}();