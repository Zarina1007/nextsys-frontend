(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-material-material-module~modules-notification-notification-module"], {
    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js ***!
      \**********************************************************************************/

    /*! exports provided: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinner, MatProgressSpinnerModule, MatSpinner */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ProgressSpinnerJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () {
        return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () {
        return MatProgressSpinner;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () {
        return MatProgressSpinnerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSpinner", function () {
        return MatSpinner;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base reference size of the spinner.
       * @docs-private
       */


      function MatProgressSpinner__svg_circle_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._getCircleRadius());
        }
      }

      function MatProgressSpinner__svg_circle_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
        }
      }

      function MatSpinner__svg_circle_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._getCircleRadius());
        }
      }

      function MatSpinner__svg_circle_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
        }
      }

      var _c0 = ".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";
      var BASE_SIZE = 100;
      /**
       * Base reference stroke width of the spinner.
       * @docs-private
       */

      var BASE_STROKE_WIDTH = 10; // Boilerplate for applying mixins to MatProgressSpinner.

      /** @docs-private */

      var MatProgressSpinnerBase = function MatProgressSpinnerBase(_elementRef) {
        _classCallCheck(this, MatProgressSpinnerBase);

        this._elementRef = _elementRef;
      };

      var _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressSpinnerBase, 'primary');
      /** Injection token to be used to override the default options for `mat-progress-spinner`. */


      var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-spinner-default-options', {
        providedIn: 'root',
        factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
        return {
          diameter: BASE_SIZE
        };
      } // .0001 percentage difference is necessary in order to avoid unwanted animation frames
      // for example because the animation duration is 4 seconds, .1% accounts to 4ms
      // which are enough to see the flicker described in
      // https://github.com/angular/components/issues/8984


      var INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
      /**
       * `<mat-progress-spinner>` component.
       */

      var MatProgressSpinner = /*#__PURE__*/function (_MatProgressSpinnerMi) {
        _inherits(MatProgressSpinner, _MatProgressSpinnerMi);

        var _super = _createSuper(MatProgressSpinner);

        function MatProgressSpinner(_elementRef, platform, _document, animationMode, defaults) {
          var _this;

          _classCallCheck(this, MatProgressSpinner);

          _this = _super.call(this, _elementRef);
          _this._elementRef = _elementRef;
          _this._document = _document;
          _this._diameter = BASE_SIZE;
          _this._value = 0;
          _this._fallbackAnimation = false;
          /** Mode of the progress circle */

          _this.mode = 'determinate';
          var trackedDiameters = MatProgressSpinner._diameters;
          _this._spinnerAnimationLabel = _this._getSpinnerAnimationLabel(); // The base size is already inserted via the component's structural styles. We still
          // need to track it so we don't end up adding the same styles again.

          if (!trackedDiameters.has(_document.head)) {
            trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
          }

          _this._fallbackAnimation = platform.EDGE || platform.TRIDENT;
          _this._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;

          if (defaults) {
            if (defaults.diameter) {
              _this.diameter = defaults.diameter;
            }

            if (defaults.strokeWidth) {
              _this.strokeWidth = defaults.strokeWidth;
            }
          }

          return _this;
        }
        /** The diameter of the progress spinner (will set width and height of svg). */


        _createClass(MatProgressSpinner, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var element = this._elementRef.nativeElement; // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
            // Angular seems to create the element outside the shadow root and then moves it inside, if the
            // node is inside an `ngIf` and a ShadowDom-encapsulated component.

            this._styleRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["_getShadowRoot"])(element) || this._document.head;

            this._attachStyleNode(); // On IE and Edge, we can't animate the `stroke-dashoffset`
            // reliably so we fall back to a non-spec animation.


            var animationClass = "mat-progress-spinner-indeterminate".concat(this._fallbackAnimation ? '-fallback' : '', "-animation");
            element.classList.add(animationClass);
          }
          /** The radius of the spinner, adjusted for stroke width. */

        }, {
          key: "_getCircleRadius",
          value: function _getCircleRadius() {
            return (this.diameter - BASE_STROKE_WIDTH) / 2;
          }
          /** The view box of the spinner's svg element. */

        }, {
          key: "_getViewBox",
          value: function _getViewBox() {
            var viewBox = this._getCircleRadius() * 2 + this.strokeWidth;
            return "0 0 ".concat(viewBox, " ").concat(viewBox);
          }
          /** The stroke circumference of the svg circle. */

        }, {
          key: "_getStrokeCircumference",
          value: function _getStrokeCircumference() {
            return 2 * Math.PI * this._getCircleRadius();
          }
          /** The dash offset of the svg circle. */

        }, {
          key: "_getStrokeDashOffset",
          value: function _getStrokeDashOffset() {
            if (this.mode === 'determinate') {
              return this._getStrokeCircumference() * (100 - this._value) / 100;
            } // In fallback mode set the circle to 80% and rotate it with CSS.


            if (this._fallbackAnimation && this.mode === 'indeterminate') {
              return this._getStrokeCircumference() * 0.2;
            }

            return null;
          }
          /** Stroke width of the circle in percent. */

        }, {
          key: "_getCircleStrokeWidth",
          value: function _getCircleStrokeWidth() {
            return this.strokeWidth / this.diameter * 100;
          }
          /** Dynamically generates a style tag containing the correct animation for this diameter. */

        }, {
          key: "_attachStyleNode",
          value: function _attachStyleNode() {
            var styleRoot = this._styleRoot;
            var currentDiameter = this._diameter;
            var diameters = MatProgressSpinner._diameters;
            var diametersForElement = diameters.get(styleRoot);

            if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
              var styleTag = this._document.createElement('style');

              styleTag.setAttribute('mat-spinner-animation', this._spinnerAnimationLabel);
              styleTag.textContent = this._getAnimationText();
              styleRoot.appendChild(styleTag);

              if (!diametersForElement) {
                diametersForElement = new Set();
                diameters.set(styleRoot, diametersForElement);
              }

              diametersForElement.add(currentDiameter);
            }
          }
          /** Generates animation styles adjusted for the spinner's diameter. */

        }, {
          key: "_getAnimationText",
          value: function _getAnimationText() {
            var strokeCircumference = this._getStrokeCircumference();

            return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
            .replace(/START_VALUE/g, "".concat(0.95 * strokeCircumference)).replace(/END_VALUE/g, "".concat(0.2 * strokeCircumference)).replace(/DIAMETER/g, "".concat(this._spinnerAnimationLabel));
          }
          /** Returns the circle diameter formatted for use with the animation-name CSS property. */

        }, {
          key: "_getSpinnerAnimationLabel",
          value: function _getSpinnerAnimationLabel() {
            // The string of a float point number will include a period ‘.’ character,
            // which is not valid for a CSS animation-name.
            return this.diameter.toString().replace('.', '_');
          }
        }, {
          key: "diameter",
          get: function get() {
            return this._diameter;
          },
          set: function set(size) {
            this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size);
            this._spinnerAnimationLabel = this._getSpinnerAnimationLabel(); // If this is set before `ngOnInit`, the style root may not have been resolved yet.

            if (!this._fallbackAnimation && this._styleRoot) {
              this._attachStyleNode();
            }
          }
          /** Stroke width of the progress spinner. */

        }, {
          key: "strokeWidth",
          get: function get() {
            return this._strokeWidth || this.diameter / 10;
          },
          set: function set(value) {
            this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
          }
          /** Value of the progress circle. */

        }, {
          key: "value",
          get: function get() {
            return this.mode === 'determinate' ? this._value : 0;
          },
          set: function set(newValue) {
            this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(newValue)));
          }
        }]);

        return MatProgressSpinner;
      }(_MatProgressSpinnerMixinBase);

      MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) {
        return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
      };

      MatProgressSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatProgressSpinner,
        selectors: [["mat-progress-spinner"]],
        hostAttrs: ["role", "progressbar", 1, "mat-progress-spinner"],
        hostVars: 10,
        hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          color: "color",
          mode: "mode",
          diameter: "diameter",
          strokeWidth: "strokeWidth",
          value: "value"
        },
        exportAs: ["matProgressSpinner"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 8,
        consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
        template: function MatProgressSpinner_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatProgressSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatProgressSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
        styles: [_c0],
        encapsulation: 2,
        changeDetection: 0
      });
      /**
       * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
       * We need to keep track of which elements the diameters were attached to, because for
       * elements in the Shadow DOM the style tags are attached to the shadow root, rather
       * than the document head.
       */

      MatProgressSpinner._diameters = new WeakMap();

      MatProgressSpinner.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatProgressSpinner.propDecorators = {
        diameter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        strokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinner, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-progress-spinner',
            exportAs: 'matProgressSpinner',
            host: {
              'role': 'progressbar',
              'class': 'mat-progress-spinner',
              '[class._mat-animation-noopable]': "_noopAnimations",
              '[style.width.px]': 'diameter',
              '[style.height.px]': 'diameter',
              '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
              '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
              '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
              '[attr.mode]': 'mode'
            },
            inputs: ['color'],
            template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n</svg>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          diameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          strokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * `<mat-spinner>` component.
       *
       * This is a component definition to be used as a convenience reference to create an
       * indeterminate `<mat-progress-spinner>` instance.
       */


      var MatSpinner = /*#__PURE__*/function (_MatProgressSpinner) {
        _inherits(MatSpinner, _MatProgressSpinner);

        var _super2 = _createSuper(MatSpinner);

        function MatSpinner(elementRef, platform, document, animationMode, defaults) {
          var _this2;

          _classCallCheck(this, MatSpinner);

          _this2 = _super2.call(this, elementRef, platform, document, animationMode, defaults);
          _this2.mode = 'indeterminate';
          return _this2;
        }

        return MatSpinner;
      }(MatProgressSpinner);

      MatSpinner.ɵfac = function MatSpinner_Factory(t) {
        return new (t || MatSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
      };

      MatSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSpinner,
        selectors: [["mat-spinner"]],
        hostAttrs: ["role", "progressbar", "mode", "indeterminate", 1, "mat-spinner", "mat-progress-spinner"],
        hostVars: 6,
        hostBindings: function MatSpinner_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          color: "color"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 8,
        consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
        template: function MatSpinner_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
        styles: [_c0],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSpinner.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSpinner, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-spinner',
            host: {
              'role': 'progressbar',
              'mode': 'indeterminate',
              'class': 'mat-spinner mat-progress-spinner',
              '[class._mat-animation-noopable]': "_noopAnimations",
              '[style.width.px]': 'diameter',
              '[style.height.px]': 'diameter'
            },
            inputs: ['color'],
            template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n</svg>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatProgressSpinnerModule = function MatProgressSpinnerModule() {
        _classCallCheck(this, MatProgressSpinnerModule);
      };

      MatProgressSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatProgressSpinnerModule
      });
      MatProgressSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatProgressSpinnerModule_Factory(t) {
          return new (t || MatProgressSpinnerModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressSpinnerModule, {
          declarations: function declarations() {
            return [MatProgressSpinner, MatSpinner];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinnerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatProgressSpinner, MatSpinner]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=progress-spinner.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
      \*************************************************************************/

    /*! exports provided: MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError, matTooltipAnimations */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TooltipJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function () {
        return MAT_TOOLTIP_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function () {
        return MAT_TOOLTIP_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTooltip", function () {
        return MatTooltip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function () {
        return MatTooltipModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function () {
        return SCROLL_THROTTLE_MS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function () {
        return TOOLTIP_PANEL_CLASS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
        return TooltipComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function () {
        return getMatTooltipInvalidPositionError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function () {
        return matTooltipAnimations;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by MatTooltip.
       * @docs-private
       */


      var matTooltipAnimations = {
        /** Animation that transitions a tooltip in and out. */
        tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0,
          transform: 'scale(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          transform: 'scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0,
          transform: 'scale(0)',
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0.5,
          transform: 'scale(0.99)',
          offset: 0.5
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1,
          transform: 'scale(1)',
          offset: 1
        })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        })))])
      };
      /** Time in ms to throttle repositioning after scroll events. */

      var SCROLL_THROTTLE_MS = 20;
      /** CSS class that will be attached to the overlay panel. */

      var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
      /** Options used to bind passive event listeners. */

      var passiveListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * Time between the user putting the pointer on a tooltip
       * trigger and the long press event being fired.
       */

      var LONGPRESS_DELAY = 500;
      /**
       * Creates an error to be thrown if the user supplied an invalid tooltip position.
       * @docs-private
       */

      function getMatTooltipInvalidPositionError(position) {
        return Error("Tooltip position \"".concat(position, "\" is invalid."));
      }
      /** Injection token that determines the scroll handling while a tooltip is visible. */


      var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-scroll-strategy');
      /** @docs-private */

      function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition({
            scrollThrottle: SCROLL_THROTTLE_MS
          });
        };
      }
      /** @docs-private */


      var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_TOOLTIP_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
        useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
      };
      /** Injection token to be used to override the default options for `matTooltip`. */

      var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-default-options', {
        providedIn: 'root',
        factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
        return {
          showDelay: 0,
          hideDelay: 0,
          touchendHideDelay: 1500
        };
      }
      /**
       * Directive that attaches a material design tooltip to the host element. Animates the showing and
       * hiding of a tooltip provided position (defaults to below the element).
       *
       * https://material.io/design/components/tooltips.html
       */


      var MatTooltip = /*#__PURE__*/function () {
        function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions) {
          var _this3 = this;

          _classCallCheck(this, MatTooltip);

          this._overlay = _overlay;
          this._elementRef = _elementRef;
          this._scrollDispatcher = _scrollDispatcher;
          this._viewContainerRef = _viewContainerRef;
          this._ngZone = _ngZone;
          this._platform = _platform;
          this._ariaDescriber = _ariaDescriber;
          this._focusMonitor = _focusMonitor;
          this._dir = _dir;
          this._defaultOptions = _defaultOptions;
          this._position = 'below';
          this._disabled = false;
          this._viewInitialized = false;
          this._pointerExitEventsInitialized = false;
          /** The default delay in ms before showing the tooltip after show is called */

          this.showDelay = this._defaultOptions.showDelay;
          /** The default delay in ms before hiding the tooltip after hide is called */

          this.hideDelay = this._defaultOptions.hideDelay;
          /**
           * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
           * uses a long press gesture to show and hide, however it can conflict with the native browser
           * gestures. To work around the conflict, Angular Material disables native gestures on the
           * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
           * elements). The different values for this option configure the touch event handling as follows:
           * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
           *   browser gestures on particular elements. In particular, it allows text selection on inputs
           *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
           * - `on` - Enables touch gestures for all elements and disables native
           *   browser gestures with no exceptions.
           * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
           *   showing on touch devices.
           */

          this.touchGestures = 'auto';
          this._message = '';
          /** Manually-bound passive event listeners. */

          this._passiveListeners = [];
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          /**
           * Handles the keydown events on the host element.
           * Needs to be an arrow function so that we can use it in addEventListener.
           */

          this._handleKeydown = function (event) {
            if (_this3._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event)) {
              event.preventDefault();
              event.stopPropagation();

              _this3._ngZone.run(function () {
                return _this3.hide(0);
              });
            }
          };

          this._scrollStrategy = scrollStrategy;

          if (_defaultOptions) {
            if (_defaultOptions.position) {
              this.position = _defaultOptions.position;
            }

            if (_defaultOptions.touchGestures) {
              this.touchGestures = _defaultOptions.touchGestures;
            }
          }

          _ngZone.runOutsideAngular(function () {
            _elementRef.nativeElement.addEventListener('keydown', _this3._handleKeydown);
          });
        }
        /** Allows the user to define the position of the tooltip relative to the parent element */


        _createClass(MatTooltip, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            // This needs to happen after view init so the initial values for all inputs have been set.
            this._viewInitialized = true;

            this._setupPointerEnterEventsIfNeeded();

            this._focusMonitor.monitor(this._elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(function (origin) {
              // Note that the focus monitor runs outside the Angular zone.
              if (!origin) {
                _this4._ngZone.run(function () {
                  return _this4.hide(0);
                });
              } else if (origin === 'keyboard') {
                _this4._ngZone.run(function () {
                  return _this4.show();
                });
              }
            });
          }
          /**
           * Dispose the tooltip when destroyed.
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var nativeElement = this._elementRef.nativeElement;
            clearTimeout(this._touchstartTimeout);

            if (this._overlayRef) {
              this._overlayRef.dispose();

              this._tooltipInstance = null;
            } // Clean up the event listeners set in the constructor


            nativeElement.removeEventListener('keydown', this._handleKeydown);

            this._passiveListeners.forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  event = _ref2[0],
                  listener = _ref2[1];

              nativeElement.removeEventListener(event, listener, passiveListenerOptions);
            });

            this._passiveListeners.length = 0;

            this._destroyed.next();

            this._destroyed.complete();

            this._ariaDescriber.removeDescription(nativeElement, this.message);

            this._focusMonitor.stopMonitoring(nativeElement);
          }
          /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */

        }, {
          key: "show",
          value: function show() {
            var _this5 = this;

            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

            if (this.disabled || !this.message || this._isTooltipVisible() && !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId) {
              return;
            }

            var overlayRef = this._createOverlay();

            this._detach();

            this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
            this._tooltipInstance = overlayRef.attach(this._portal).instance;

            this._tooltipInstance.afterHidden().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(function () {
              return _this5._detach();
            });

            this._setTooltipClass(this._tooltipClass);

            this._updateTooltipMessage();

            this._tooltipInstance.show(delay);
          }
          /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */

        }, {
          key: "hide",
          value: function hide() {
            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hideDelay;

            if (this._tooltipInstance) {
              this._tooltipInstance.hide(delay);
            }
          }
          /** Shows/hides the tooltip */

        }, {
          key: "toggle",
          value: function toggle() {
            this._isTooltipVisible() ? this.hide() : this.show();
          }
          /** Returns true if the tooltip is currently visible to the user */

        }, {
          key: "_isTooltipVisible",
          value: function _isTooltipVisible() {
            return !!this._tooltipInstance && this._tooltipInstance.isVisible();
          }
          /** Create the overlay config and position strategy */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            var _this6 = this;

            if (this._overlayRef) {
              return this._overlayRef;
            }

            var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.


            var strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn('.mat-tooltip').withFlexibleDimensions(false).withViewportMargin(8).withScrollableContainers(scrollableAncestors);

            strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(function (change) {
              if (_this6._tooltipInstance) {
                if (change.scrollableViewProperties.isOverlayClipped && _this6._tooltipInstance.isVisible()) {
                  // After position changes occur and the overlay is clipped by
                  // a parent scrollable then close the tooltip.
                  _this6._ngZone.run(function () {
                    return _this6.hide(0);
                  });
                }
              }
            });
            this._overlayRef = this._overlay.create({
              direction: this._dir,
              positionStrategy: strategy,
              panelClass: TOOLTIP_PANEL_CLASS,
              scrollStrategy: this._scrollStrategy()
            });

            this._updatePosition();

            this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(function () {
              return _this6._detach();
            });

            return this._overlayRef;
          }
          /** Detaches the currently-attached tooltip. */

        }, {
          key: "_detach",
          value: function _detach() {
            if (this._overlayRef && this._overlayRef.hasAttached()) {
              this._overlayRef.detach();
            }

            this._tooltipInstance = null;
          }
          /** Updates the position of the current tooltip. */

        }, {
          key: "_updatePosition",
          value: function _updatePosition() {
            var position = this._overlayRef.getConfig().positionStrategy;

            var origin = this._getOrigin();

            var overlay = this._getOverlayPosition();

            position.withPositions([Object.assign(Object.assign({}, origin.main), overlay.main), Object.assign(Object.assign({}, origin.fallback), overlay.fallback)]);
          }
          /**
           * Returns the origin position and a fallback position based on the user's position preference.
           * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
           */

        }, {
          key: "_getOrigin",
          value: function _getOrigin() {
            var isLtr = !this._dir || this._dir.value == 'ltr';
            var position = this.position;
            var originPosition;

            if (position == 'above' || position == 'below') {
              originPosition = {
                originX: 'center',
                originY: position == 'above' ? 'top' : 'bottom'
              };
            } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
              originPosition = {
                originX: 'start',
                originY: 'center'
              };
            } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
              originPosition = {
                originX: 'end',
                originY: 'center'
              };
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throw getMatTooltipInvalidPositionError(position);
            }

            var _this$_invertPosition = this._invertPosition(originPosition.originX, originPosition.originY),
                x = _this$_invertPosition.x,
                y = _this$_invertPosition.y;

            return {
              main: originPosition,
              fallback: {
                originX: x,
                originY: y
              }
            };
          }
          /** Returns the overlay position and a fallback position based on the user's preference */

        }, {
          key: "_getOverlayPosition",
          value: function _getOverlayPosition() {
            var isLtr = !this._dir || this._dir.value == 'ltr';
            var position = this.position;
            var overlayPosition;

            if (position == 'above') {
              overlayPosition = {
                overlayX: 'center',
                overlayY: 'bottom'
              };
            } else if (position == 'below') {
              overlayPosition = {
                overlayX: 'center',
                overlayY: 'top'
              };
            } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
              overlayPosition = {
                overlayX: 'end',
                overlayY: 'center'
              };
            } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
              overlayPosition = {
                overlayX: 'start',
                overlayY: 'center'
              };
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throw getMatTooltipInvalidPositionError(position);
            }

            var _this$_invertPosition2 = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY),
                x = _this$_invertPosition2.x,
                y = _this$_invertPosition2.y;

            return {
              main: overlayPosition,
              fallback: {
                overlayX: x,
                overlayY: y
              }
            };
          }
          /** Updates the tooltip message and repositions the overlay according to the new message length */

        }, {
          key: "_updateTooltipMessage",
          value: function _updateTooltipMessage() {
            var _this7 = this;

            // Must wait for the message to be painted to the tooltip so that the overlay can properly
            // calculate the correct positioning based on the size of the text.
            if (this._tooltipInstance) {
              this._tooltipInstance.message = this.message;

              this._tooltipInstance._markForCheck();

              this._ngZone.onMicrotaskEmpty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(function () {
                if (_this7._tooltipInstance) {
                  _this7._overlayRef.updatePosition();
                }
              });
            }
          }
          /** Updates the tooltip class */

        }, {
          key: "_setTooltipClass",
          value: function _setTooltipClass(tooltipClass) {
            if (this._tooltipInstance) {
              this._tooltipInstance.tooltipClass = tooltipClass;

              this._tooltipInstance._markForCheck();
            }
          }
          /** Inverts an overlay position. */

        }, {
          key: "_invertPosition",
          value: function _invertPosition(x, y) {
            if (this.position === 'above' || this.position === 'below') {
              if (y === 'top') {
                y = 'bottom';
              } else if (y === 'bottom') {
                y = 'top';
              }
            } else {
              if (x === 'end') {
                x = 'start';
              } else if (x === 'start') {
                x = 'end';
              }
            }

            return {
              x: x,
              y: y
            };
          }
          /** Binds the pointer events to the tooltip trigger. */

        }, {
          key: "_setupPointerEnterEventsIfNeeded",
          value: function _setupPointerEnterEventsIfNeeded() {
            var _this8 = this;

            // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
            if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
              return;
            } // The mouse events shouldn't be bound on mobile devices, because they can prevent the
            // first tap from firing its click event or can cause the tooltip to open for clicks.


            if (this._platformSupportsMouseEvents()) {
              this._passiveListeners.push(['mouseenter', function () {
                _this8._setupPointerExitEventsIfNeeded();

                _this8.show();
              }]);
            } else if (this.touchGestures !== 'off') {
              this._disableNativeGesturesIfNecessary();

              this._passiveListeners.push(['touchstart', function () {
                // Note that it's important that we don't `preventDefault` here,
                // because it can prevent click events from firing on the element.
                _this8._setupPointerExitEventsIfNeeded();

                clearTimeout(_this8._touchstartTimeout);
                _this8._touchstartTimeout = setTimeout(function () {
                  return _this8.show();
                }, LONGPRESS_DELAY);
              }]);
            }

            this._addListeners(this._passiveListeners);
          }
        }, {
          key: "_setupPointerExitEventsIfNeeded",
          value: function _setupPointerExitEventsIfNeeded() {
            var _this9 = this,
                _this$_passiveListene;

            if (this._pointerExitEventsInitialized) {
              return;
            }

            this._pointerExitEventsInitialized = true;
            var exitListeners = [];

            if (this._platformSupportsMouseEvents()) {
              exitListeners.push(['mouseleave', function () {
                return _this9.hide();
              }]);
            } else if (this.touchGestures !== 'off') {
              this._disableNativeGesturesIfNecessary();

              var touchendListener = function touchendListener() {
                clearTimeout(_this9._touchstartTimeout);

                _this9.hide(_this9._defaultOptions.touchendHideDelay);
              };

              exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
            }

            this._addListeners(exitListeners);

            (_this$_passiveListene = this._passiveListeners).push.apply(_this$_passiveListene, exitListeners);
          }
        }, {
          key: "_addListeners",
          value: function _addListeners(listeners) {
            var _this10 = this;

            listeners.forEach(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  event = _ref4[0],
                  listener = _ref4[1];

              _this10._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
            });
          }
        }, {
          key: "_platformSupportsMouseEvents",
          value: function _platformSupportsMouseEvents() {
            return !this._platform.IOS && !this._platform.ANDROID;
          }
          /** Disables the native browser gestures, based on how the tooltip has been configured. */

        }, {
          key: "_disableNativeGesturesIfNecessary",
          value: function _disableNativeGesturesIfNecessary() {
            var gestures = this.touchGestures;

            if (gestures !== 'off') {
              var element = this._elementRef.nativeElement;
              var style = element.style; // If gestures are set to `auto`, we don't disable text selection on inputs and
              // textareas, because it prevents the user from typing into them on iOS Safari.

              if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
                style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = 'none';
              } // If we have `auto` gestures and the element uses native HTML dragging,
              // we don't set `-webkit-user-drag` because it prevents the native behavior.


              if (gestures === 'on' || !element.draggable) {
                style.webkitUserDrag = 'none';
              }

              style.touchAction = 'none';
              style.webkitTapHighlightColor = 'transparent';
            }
          }
        }, {
          key: "position",
          get: function get() {
            return this._position;
          },
          set: function set(value) {
            if (value !== this._position) {
              this._position = value;

              if (this._overlayRef) {
                this._updatePosition();

                if (this._tooltipInstance) {
                  this._tooltipInstance.show(0);
                }

                this._overlayRef.updatePosition();
              }
            }
          }
          /** Disables the display of the tooltip. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); // If tooltip is disabled, hide immediately.

            if (this._disabled) {
              this.hide(0);
            } else {
              this._setupPointerEnterEventsIfNeeded();
            }
          }
          /** The message to be displayed in the tooltip */

        }, {
          key: "message",
          get: function get() {
            return this._message;
          },
          set: function set(value) {
            var _this11 = this;

            this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message); // If the message is not a string (e.g. number), convert it to a string and trim it.


            this._message = value != null ? "".concat(value).trim() : '';

            if (!this._message && this._isTooltipVisible()) {
              this.hide(0);
            } else {
              this._setupPointerEnterEventsIfNeeded();

              this._updateTooltipMessage();

              this._ngZone.runOutsideAngular(function () {
                // The `AriaDescriber` has some functionality that avoids adding a description if it's the
                // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
                // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
                // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
                Promise.resolve().then(function () {
                  _this11._ariaDescriber.describe(_this11._elementRef.nativeElement, _this11.message);
                });
              });
            }
          }
          /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */

        }, {
          key: "tooltipClass",
          get: function get() {
            return this._tooltipClass;
          },
          set: function set(value) {
            this._tooltipClass = value;

            if (this._tooltipInstance) {
              this._setTooltipClass(this._tooltipClass);
            }
          }
        }]);

        return MatTooltip;
      }();

      MatTooltip.ɵfac = function MatTooltip_Factory(t) {
        return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8));
      };

      MatTooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatTooltip,
        selectors: [["", "matTooltip", ""]],
        hostAttrs: [1, "mat-tooltip-trigger"],
        inputs: {
          showDelay: ["matTooltipShowDelay", "showDelay"],
          hideDelay: ["matTooltipHideDelay", "hideDelay"],
          touchGestures: ["matTooltipTouchGestures", "touchGestures"],
          position: ["matTooltipPosition", "position"],
          disabled: ["matTooltipDisabled", "disabled"],
          message: ["matTooltip", "message"],
          tooltipClass: ["matTooltipClass", "tooltipClass"]
        },
        exportAs: ["matTooltip"]
      });

      MatTooltip.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_TOOLTIP_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatTooltip.propDecorators = {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipPosition']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipDisabled']
        }],
        showDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipShowDelay']
        }],
        hideDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipHideDelay']
        }],
        touchGestures: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipTouchGestures']
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltip']
        }],
        tooltipClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipClass']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltip, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[matTooltip]',
            exportAs: 'matTooltip',
            host: {
              'class': 'mat-tooltip-trigger'
            }
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_TOOLTIP_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          showDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipShowDelay']
          }],
          hideDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipHideDelay']
          }],
          touchGestures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipTouchGestures']
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipPosition']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipDisabled']
          }],
          message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltip']
          }],
          tooltipClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipClass']
          }]
        });
      })();
      /**
       * Internal component that wraps the tooltip's content.
       * @docs-private
       */


      var TooltipComponent = /*#__PURE__*/function () {
        function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
          _classCallCheck(this, TooltipComponent);

          this._changeDetectorRef = _changeDetectorRef;
          this._breakpointObserver = _breakpointObserver;
          /** Property watched by the animation framework to show or hide the tooltip */

          this._visibility = 'initial';
          /** Whether interactions on the page should close the tooltip */

          this._closeOnInteraction = false;
          /** Subject for notifying that the tooltip has been hidden from the view */

          this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          /** Stream that emits whether the user has a handset-sized display.  */

          this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Handset);
        }
        /**
         * Shows the tooltip with an animation originating from the provided origin
         * @param delay Amount of milliseconds to the delay showing the tooltip.
         */


        _createClass(TooltipComponent, [{
          key: "show",
          value: function show(delay) {
            var _this12 = this;

            // Cancel the delayed hide if it is scheduled
            if (this._hideTimeoutId) {
              clearTimeout(this._hideTimeoutId);
              this._hideTimeoutId = null;
            } // Body interactions should cancel the tooltip if there is a delay in showing.


            this._closeOnInteraction = true;
            this._showTimeoutId = setTimeout(function () {
              _this12._visibility = 'visible';
              _this12._showTimeoutId = null; // Mark for check so if any parent component has set the
              // ChangeDetectionStrategy to OnPush it will be checked anyways

              _this12._markForCheck();
            }, delay);
          }
          /**
           * Begins the animation to hide the tooltip after the provided delay in ms.
           * @param delay Amount of milliseconds to delay showing the tooltip.
           */

        }, {
          key: "hide",
          value: function hide(delay) {
            var _this13 = this;

            // Cancel the delayed show if it is scheduled
            if (this._showTimeoutId) {
              clearTimeout(this._showTimeoutId);
              this._showTimeoutId = null;
            }

            this._hideTimeoutId = setTimeout(function () {
              _this13._visibility = 'hidden';
              _this13._hideTimeoutId = null; // Mark for check so if any parent component has set the
              // ChangeDetectionStrategy to OnPush it will be checked anyways

              _this13._markForCheck();
            }, delay);
          }
          /** Returns an observable that notifies when the tooltip has been hidden from view. */

        }, {
          key: "afterHidden",
          value: function afterHidden() {
            return this._onHide;
          }
          /** Whether the tooltip is being displayed. */

        }, {
          key: "isVisible",
          value: function isVisible() {
            return this._visibility === 'visible';
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._onHide.complete();
          }
        }, {
          key: "_animationStart",
          value: function _animationStart() {
            this._closeOnInteraction = false;
          }
        }, {
          key: "_animationDone",
          value: function _animationDone(event) {
            var toState = event.toState;

            if (toState === 'hidden' && !this.isVisible()) {
              this._onHide.next();
            }

            if (toState === 'visible' || toState === 'hidden') {
              this._closeOnInteraction = true;
            }
          }
          /**
           * Interactions on the HTML body should close the tooltip immediately as defined in the
           * material design spec.
           * https://material.io/design/components/tooltips.html#behavior
           */

        }, {
          key: "_handleBodyInteraction",
          value: function _handleBodyInteraction() {
            if (this._closeOnInteraction) {
              this.hide(0);
            }
          }
          /**
           * Marks that the tooltip needs to be checked in the next change detection run.
           * Mainly used for rendering the initial text before positioning a tooltip, which
           * can be problematic in components with OnPush change detection.
           */

        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            this._changeDetectorRef.markForCheck();
          }
        }]);

        return TooltipComponent;
      }();

      TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
        return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]));
      };

      TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: TooltipComponent,
        selectors: [["mat-tooltip-component"]],
        hostAttrs: ["aria-hidden", "true"],
        hostVars: 2,
        hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipComponent_click_HostBindingHandler() {
              return ctx._handleBodyInteraction();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveBody"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
          }
        },
        decls: 3,
        vars: 7,
        consts: [[1, "mat-tooltip", 3, "ngClass"]],
        template: function TooltipComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() {
              return ctx._animationStart();
            })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) {
              return ctx._animationDone($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_0_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-tooltip-handset", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],
        encapsulation: 2,
        data: {
          animation: [matTooltipAnimations.tooltipState]
        },
        changeDetection: 0
      });

      TooltipComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-tooltip-component',
            template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            animations: [matTooltipAnimations.tooltipState],
            host: {
              // Forces the element to have a layout in IE and Edge. This fixes issues where the element
              // won't be rendered if the animations are disabled or there is no web animations polyfill.
              '[style.zoom]': '_visibility === "visible" ? 1 : null',
              '(body:click)': 'this._handleBodyInteraction()',
              'aria-hidden': 'true'
            },
            styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatTooltipModule = function MatTooltipModule() {
        _classCallCheck(this, MatTooltipModule);
      };

      MatTooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatTooltipModule
      });
      MatTooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatTooltipModule_Factory(t) {
          return new (t || MatTooltipModule)();
        },
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatTooltipModule, {
          declarations: function declarations() {
            return [MatTooltip, TooltipComponent];
          },
          imports: function imports() {
            return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltipModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
            exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]],
            declarations: [MatTooltip, TooltipComponent],
            entryComponents: [TooltipComponent],
            providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=tooltip.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-material-material-module~modules-notification-notification-module-es5.js.map