(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-admin-reporting-admin-reporting-module~modules-material-material-module~modules-user~1cb84dfc"], {
    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
      \************************************************************************/

    /*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, _MatDialogBase, _MatDialogContainerBase, _closeDialogVia, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015DialogJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function () {
        return MAT_DIALOG_DATA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function () {
        return MAT_DIALOG_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialog", function () {
        return MatDialog;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogActions", function () {
        return MatDialogActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogClose", function () {
        return MatDialogClose;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function () {
        return MatDialogConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function () {
        return MatDialogContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogContent", function () {
        return MatDialogContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogModule", function () {
        return MatDialogModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogRef", function () {
        return MatDialogRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function () {
        return MatDialogTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatDialogBase", function () {
        return _MatDialogBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatDialogContainerBase", function () {
        return _MatDialogContainerBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_closeDialogVia", function () {
        return _closeDialogVia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function () {
        return matDialogAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function () {
        return throwMatDialogContentAlreadyAttachedError;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for opening a modal dialog with the MatDialog service.
       */


      function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

      var MatDialogConfig = function MatDialogConfig() {
        _classCallCheck(this, MatDialogConfig);

        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Custom class for the overlay pane. */

        this.panelClass = '';
        /** Whether the dialog has a backdrop. */

        this.hasBackdrop = true;
        /** Custom class for the backdrop. */

        this.backdropClass = '';
        /** Whether the user can use escape or clicking on the backdrop to close the modal. */

        this.disableClose = false;
        /** Width of the dialog. */

        this.width = '';
        /** Height of the dialog. */

        this.height = '';
        /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */

        this.maxWidth = '80vw';
        /** Data being injected into the child component. */

        this.data = null;
        /** ID of the element that describes the dialog. */

        this.ariaDescribedBy = null;
        /** ID of the element that labels the dialog. */

        this.ariaLabelledBy = null;
        /** Aria label to assign to the dialog element. */

        this.ariaLabel = null;
        /** Whether the dialog should focus the first focusable element on open. */

        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */

        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by MatDialog.
       * @docs-private
       */


      var matDialogAnimations = {
        /** Animation that is applied on the dialog container by defalt. */
        dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
        // specifying the transform explicitly, causes IE both to blur the dialog content and
        // decimate the animation performance. Leaving it as `none` solves both issues.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          opacity: 0,
          transform: 'scale(0.7)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'none'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'none',
          opacity: 1
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          opacity: 0
        })))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Throws an exception for the case when a ComponentPortal is
       * attached to a DomPortalOutlet without an origin.
       * @docs-private
       */

      function throwMatDialogContentAlreadyAttachedError() {
        throw Error('Attempting to attach dialog content after content is already attached');
      }
      /**
       * Base class for the `MatDialogContainer`. The base class does not implement
       * animations as these are left to implementers of the dialog container.
       */


      var _MatDialogContainerBase = /*#__PURE__*/function (_angular_cdk_portal__) {
        _inherits(_MatDialogContainerBase, _angular_cdk_portal__);

        var _super = _createSuper(_MatDialogContainerBase);

        function _MatDialogContainerBase(_elementRef, _focusTrapFactory, _changeDetectorRef, _document,
        /** The dialog configuration. */
        _config, _focusMonitor) {
          var _this;

          _classCallCheck(this, _MatDialogContainerBase);

          _this = _super.call(this);
          _this._elementRef = _elementRef;
          _this._focusTrapFactory = _focusTrapFactory;
          _this._changeDetectorRef = _changeDetectorRef;
          _this._config = _config;
          _this._focusMonitor = _focusMonitor;
          /** Emits when an animation state changes. */

          _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Element that was focused before the dialog was opened. Save this to restore upon close. */

          _this._elementFocusedBeforeDialogWasOpened = null;
          /**
           * Type of interaction that led to the dialog being closed. This is used to determine
           * whether the focus style will be applied when returning focus to its original location
           * after the dialog is closed.
           */

          _this._closeInteractionType = null;
          /**
           * Attaches a DOM portal to the dialog container.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this.attachDomPortal = function (portal) {
            if (_this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatDialogContentAlreadyAttachedError();
            }

            return _this._portalOutlet.attachDomPortal(portal);
          };

          _this._ariaLabelledBy = _config.ariaLabelledBy || null;
          _this._document = _document;
          return _this;
        }
        /** Initializes the dialog container with the attached content. */


        _createClass(_MatDialogContainerBase, [{
          key: "_initializeWithAttachedContent",
          value: function _initializeWithAttachedContent() {
            this._setupFocusTrap(); // Save the previously focused element. This element will be re-focused
            // when the dialog closes.


            this._capturePreviouslyFocusedElement(); // Move focus onto the dialog immediately in order to prevent the user
            // from accidentally opening multiple dialogs at the same time.


            this._focusDialogContainer();
          }
          /**
           * Attach a ComponentPortal as content to this dialog container.
           * @param portal Portal to be attached as the dialog content.
           */

        }, {
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatDialogContentAlreadyAttachedError();
            }

            return this._portalOutlet.attachComponentPortal(portal);
          }
          /**
           * Attach a TemplatePortal as content to this dialog container.
           * @param portal Portal to be attached as the dialog content.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatDialogContentAlreadyAttachedError();
            }

            return this._portalOutlet.attachTemplatePortal(portal);
          }
          /** Moves focus back into the dialog if it was moved out. */

        }, {
          key: "_recaptureFocus",
          value: function _recaptureFocus() {
            if (!this._containsFocus()) {
              var focusContainer = !this._config.autoFocus || !this._focusTrap.focusInitialElement();

              if (focusContainer) {
                this._elementRef.nativeElement.focus();
              }
            }
          }
          /** Moves the focus inside the focus trap. */

        }, {
          key: "_trapFocus",
          value: function _trapFocus() {
            // If we were to attempt to focus immediately, then the content of the dialog would not yet be
            // ready in instances where change detection has to run first. To deal with this, we simply
            // wait for the microtask queue to be empty.
            if (this._config.autoFocus) {
              this._focusTrap.focusInitialElementWhenReady();
            } else if (!this._containsFocus()) {
              // Otherwise ensure that focus is on the dialog container. It's possible that a different
              // component tried to move focus while the open animation was running. See:
              // https://github.com/angular/components/issues/16215. Note that we only want to do this
              // if the focus isn't inside the dialog already, because it's possible that the consumer
              // turned off `autoFocus` in order to move focus themselves.
              this._elementRef.nativeElement.focus();
            }
          }
          /** Restores focus to the element that was focused before the dialog opened. */

        }, {
          key: "_restoreFocus",
          value: function _restoreFocus() {
            var previousElement = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

            if (this._config.restoreFocus && previousElement && typeof previousElement.focus === 'function') {
              var activeElement = this._document.activeElement;
              var element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
              // non-focusable element like the backdrop was clicked) before moving it. It's possible that
              // the consumer moved it themselves before the animation was done, in which case we shouldn't
              // do anything.

              if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
                if (this._focusMonitor) {
                  this._focusMonitor.focusVia(previousElement, this._closeInteractionType);

                  this._closeInteractionType = null;
                } else {
                  previousElement.focus();
                }
              }
            }

            if (this._focusTrap) {
              this._focusTrap.destroy();
            }
          }
          /** Sets up the focus trap. */

        }, {
          key: "_setupFocusTrap",
          value: function _setupFocusTrap() {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          }
          /** Captures the element that was focused before the dialog was opened. */

        }, {
          key: "_capturePreviouslyFocusedElement",
          value: function _capturePreviouslyFocusedElement() {
            if (this._document) {
              this._elementFocusedBeforeDialogWasOpened = this._document.activeElement;
            }
          }
          /** Focuses the dialog container. */

        }, {
          key: "_focusDialogContainer",
          value: function _focusDialogContainer() {
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
              this._elementRef.nativeElement.focus();
            }
          }
          /** Returns whether focus is inside the dialog. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            var element = this._elementRef.nativeElement;
            var activeElement = this._document.activeElement;
            return element === activeElement || element.contains(activeElement);
          }
        }]);

        return _MatDialogContainerBase;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

      _MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(t) {
        return new (t || _MatDialogContainerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]));
      };

      _MatDialogContainerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatDialogContainerBase,
        viewQuery: function _MatDialogContainerBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      _MatDialogContainerBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: MatDialogConfig
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
        }];
      };

      _MatDialogContainerBase.propDecorators = {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogContainerBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: MatDialogConfig
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
          }];
        }, {
          _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
              "static": true
            }]
          }]
        });
      })();
      /**
       * Internal component that wraps user-provided dialog content.
       * Animation is based on https://material.io/guidelines/motion/choreography.html.
       * @docs-private
       */


      var MatDialogContainer = /*#__PURE__*/function (_MatDialogContainerBa) {
        _inherits(MatDialogContainer, _MatDialogContainerBa);

        var _super2 = _createSuper(MatDialogContainer);

        function MatDialogContainer() {
          var _this2;

          _classCallCheck(this, MatDialogContainer);

          _this2 = _super2.apply(this, arguments);
          /** State of the dialog animation. */

          _this2._state = 'enter';
          return _this2;
        }
        /** Callback, invoked whenever an animation on the host completes. */


        _createClass(MatDialogContainer, [{
          key: "_onAnimationDone",
          value: function _onAnimationDone(_ref) {
            var toState = _ref.toState,
                totalTime = _ref.totalTime;

            if (toState === 'enter') {
              this._trapFocus();

              this._animationStateChanged.next({
                state: 'opened',
                totalTime: totalTime
              });
            } else if (toState === 'exit') {
              this._restoreFocus();

              this._animationStateChanged.next({
                state: 'closed',
                totalTime: totalTime
              });
            }
          }
          /** Callback, invoked when an animation on the host starts. */

        }, {
          key: "_onAnimationStart",
          value: function _onAnimationStart(_ref2) {
            var toState = _ref2.toState,
                totalTime = _ref2.totalTime;

            if (toState === 'enter') {
              this._animationStateChanged.next({
                state: 'opening',
                totalTime: totalTime
              });
            } else if (toState === 'exit' || toState === 'void') {
              this._animationStateChanged.next({
                state: 'closing',
                totalTime: totalTime
              });
            }
          }
          /** Starts the dialog exit animation. */

        }, {
          key: "_startExitAnimation",
          value: function _startExitAnimation() {
            this._state = 'exit'; // Mark the container for check so it can react if the
            // view container is using OnPush change detection.

            this._changeDetectorRef.markForCheck();
          }
        }]);

        return MatDialogContainer;
      }(_MatDialogContainerBase);

      MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) {
        return ɵMatDialogContainer_BaseFactory(t || MatDialogContainer);
      };

      MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatDialogContainer,
        selectors: [["mat-dialog-container"]],
        hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
        hostVars: 6,
        hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
              return ctx._onAnimationStart($event);
            })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
              return ctx._onAnimationDone($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx._id);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function MatDialogContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
        styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
        encapsulation: 2,
        data: {
          animation: [matDialogAnimations.dialogContainer]
        }
      });

      var ɵMatDialogContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatDialogContainer);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-dialog-container',
            template: "<ng-template cdkPortalOutlet></ng-template>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
            animations: [matDialogAnimations.dialogContainer],
            host: {
              'class': 'mat-dialog-container',
              'tabindex': '-1',
              'aria-modal': 'true',
              '[id]': '_id',
              '[attr.role]': '_config.role',
              '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
              '[attr.aria-label]': '_config.ariaLabel',
              '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
              '[@dialogContainer]': '_state',
              '(@dialogContainer.start)': '_onAnimationStart($event)',
              '(@dialogContainer.done)': '_onAnimationDone($event)'
            },
            styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
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
      // TODO(jelbourn): resizing
      // Counter for unique dialog ids.


      var uniqueId = 0;
      /**
       * Reference to a dialog opened via the MatDialog service.
       */

      var MatDialogRef = /*#__PURE__*/function () {
        function MatDialogRef(_overlayRef, _containerInstance) {
          var _this3 = this;

          var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mat-dialog-".concat(uniqueId++);

          _classCallCheck(this, MatDialogRef);

          this._overlayRef = _overlayRef;
          this._containerInstance = _containerInstance;
          this.id = id;
          /** Whether the user is allowed to close the dialog. */

          this.disableClose = this._containerInstance._config.disableClose;
          /** Subject for notifying the user that the dialog has finished opening. */

          this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying the user that the dialog has finished closing. */

          this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying the user that the dialog has started closing. */

          this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Current state of the dialog. */

          this._state = 0
          /* OPEN */
          ; // Pass the id along to the container.

          _containerInstance._id = id; // Emit when opening animation completes

          _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.state === 'opened';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
            _this3._afterOpened.next();

            _this3._afterOpened.complete();
          }); // Dispose overlay when closing animation is complete


          _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.state === 'closed';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
            clearTimeout(_this3._closeFallbackTimeout);

            _this3._finishDialogClose();
          });

          _overlayRef.detachments().subscribe(function () {
            _this3._beforeClosed.next(_this3._result);

            _this3._beforeClosed.complete();

            _this3._afterClosed.next(_this3._result);

            _this3._afterClosed.complete();

            _this3.componentInstance = null;

            _this3._overlayRef.dispose();
          });

          _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !_this3.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
          })).subscribe(function (event) {
            event.preventDefault();

            _closeDialogVia(_this3, 'keyboard');
          });

          _overlayRef.backdropClick().subscribe(function () {
            if (_this3.disableClose) {
              _this3._containerInstance._recaptureFocus();
            } else {
              _closeDialogVia(_this3, 'mouse');
            }
          });
        }
        /**
         * Close the dialog.
         * @param dialogResult Optional result to return to the dialog opener.
         */


        _createClass(MatDialogRef, [{
          key: "close",
          value: function close(dialogResult) {
            var _this4 = this;

            this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

            this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
              return event.state === 'closing';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (event) {
              _this4._beforeClosed.next(dialogResult);

              _this4._beforeClosed.complete();

              _this4._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
              // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
              // timeout which will clean everything up if the animation hasn't fired within the specified
              // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
              // vast majority of cases the timeout will have been cleared before it has the chance to fire.


              _this4._closeFallbackTimeout = setTimeout(function () {
                return _this4._finishDialogClose();
              }, event.totalTime + 100);
            });

            this._state = 1
            /* CLOSING */
            ;

            this._containerInstance._startExitAnimation();
          }
          /**
           * Gets an observable that is notified when the dialog is finished opening.
           */

        }, {
          key: "afterOpened",
          value: function afterOpened() {
            return this._afterOpened;
          }
          /**
           * Gets an observable that is notified when the dialog is finished closing.
           */

        }, {
          key: "afterClosed",
          value: function afterClosed() {
            return this._afterClosed;
          }
          /**
           * Gets an observable that is notified when the dialog has started closing.
           */

        }, {
          key: "beforeClosed",
          value: function beforeClosed() {
            return this._beforeClosed;
          }
          /**
           * Gets an observable that emits when the overlay's backdrop has been clicked.
           */

        }, {
          key: "backdropClick",
          value: function backdropClick() {
            return this._overlayRef.backdropClick();
          }
          /**
           * Gets an observable that emits when keydown events are targeted on the overlay.
           */

        }, {
          key: "keydownEvents",
          value: function keydownEvents() {
            return this._overlayRef.keydownEvents();
          }
          /**
           * Updates the dialog's position.
           * @param position New dialog position.
           */

        }, {
          key: "updatePosition",
          value: function updatePosition(position) {
            var strategy = this._getPositionStrategy();

            if (position && (position.left || position.right)) {
              position.left ? strategy.left(position.left) : strategy.right(position.right);
            } else {
              strategy.centerHorizontally();
            }

            if (position && (position.top || position.bottom)) {
              position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
            } else {
              strategy.centerVertically();
            }

            this._overlayRef.updatePosition();

            return this;
          }
          /**
           * Updates the dialog's width and height.
           * @param width New width of the dialog.
           * @param height New height of the dialog.
           */

        }, {
          key: "updateSize",
          value: function updateSize() {
            var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            this._getPositionStrategy().width(width).height(height);

            this._overlayRef.updatePosition();

            return this;
          }
          /** Add a CSS class or an array of classes to the overlay pane. */

        }, {
          key: "addPanelClass",
          value: function addPanelClass(classes) {
            this._overlayRef.addPanelClass(classes);

            return this;
          }
          /** Remove a CSS class or an array of classes from the overlay pane. */

        }, {
          key: "removePanelClass",
          value: function removePanelClass(classes) {
            this._overlayRef.removePanelClass(classes);

            return this;
          }
          /** Gets the current state of the dialog's lifecycle. */

        }, {
          key: "getState",
          value: function getState() {
            return this._state;
          }
          /**
           * Finishes the dialog close by updating the state of the dialog
           * and disposing the overlay.
           */

        }, {
          key: "_finishDialogClose",
          value: function _finishDialogClose() {
            this._state = 2
            /* CLOSED */
            ;

            this._overlayRef.dispose();
          }
          /** Fetches the position strategy object from the overlay ref. */

        }, {
          key: "_getPositionStrategy",
          value: function _getPositionStrategy() {
            return this._overlayRef.getConfig().positionStrategy;
          }
        }]);

        return MatDialogRef;
      }();
      /**
       * Closes the dialog with the specified interaction type. This is currently not part of
       * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
       * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
       */
      // TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.


      function _closeDialogVia(ref, interactionType, result) {
        // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
        // For those, we keep the behavior as is and do not deal with the interaction type.
        if (ref._containerInstance !== undefined) {
          ref._containerInstance._closeInteractionType = interactionType;
        }

        return ref.close(result);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to access the data that was passed in to a dialog. */


      var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
      /** Injection token that can be used to specify default dialog options. */

      var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
      /** Injection token that determines the scroll handling while the dialog is open. */

      var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
      /** @docs-private */

      function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.block();
        };
      }
      /** @docs-private */


      function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.block();
        };
      }
      /** @docs-private */


      var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
        provide: MAT_DIALOG_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
        useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /**
       * Base class for dialog services. The base dialog service allows
       * for arbitrary dialog refs and dialog container components.
       */

      var _MatDialogBase = /*#__PURE__*/function () {
        function _MatDialogBase(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken) {
          var _this5 = this;

          _classCallCheck(this, _MatDialogBase);

          this._overlay = _overlay;
          this._injector = _injector;
          this._defaultOptions = _defaultOptions;
          this._parentDialog = _parentDialog;
          this._overlayContainer = _overlayContainer;
          this._dialogRefConstructor = _dialogRefConstructor;
          this._dialogContainerType = _dialogContainerType;
          this._dialogDataToken = _dialogDataToken;
          this._openDialogsAtThisLevel = [];
          this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

          /**
           * Stream that emits when all open dialog have finished closing.
           * Will emit on subscribe if there are no open dialogs to begin with.
           */

          this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(function () {
            return _this5.openDialogs.length ? _this5._getAfterAllClosed() : _this5._getAfterAllClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined));
          });
          this._scrollStrategy = scrollStrategy;
        }
        /** Keeps track of the currently-open dialogs. */


        _createClass(_MatDialogBase, [{
          key: "_getAfterAllClosed",
          value: function _getAfterAllClosed() {
            var parent = this._parentDialog;
            return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
          }
          /**
           * Opens a modal dialog containing the given component.
           * @param componentOrTemplateRef Type of the component to load into the dialog,
           *     or a TemplateRef to instantiate as the dialog content.
           * @param config Extra configuration options.
           * @returns Reference to the newly-opened dialog.
           */

        }, {
          key: "open",
          value: function open(componentOrTemplateRef, config) {
            var _this6 = this;

            config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

            if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
            }

            var overlayRef = this._createOverlay(config);

            var dialogContainer = this._attachDialogContainer(overlayRef, config);

            var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


            if (!this.openDialogs.length) {
              this._hideNonDialogContentFromAssistiveTechnology();
            }

            this.openDialogs.push(dialogRef);
            dialogRef.afterClosed().subscribe(function () {
              return _this6._removeOpenDialog(dialogRef);
            });
            this.afterOpened.next(dialogRef); // Notify the dialog container that the content has been attached.

            dialogContainer._initializeWithAttachedContent();

            return dialogRef;
          }
          /**
           * Closes all of the currently-open dialogs.
           */

        }, {
          key: "closeAll",
          value: function closeAll() {
            this._closeDialogs(this.openDialogs);
          }
          /**
           * Finds an open dialog by its id.
           * @param id ID to use when looking up the dialog.
           */

        }, {
          key: "getDialogById",
          value: function getDialogById(id) {
            return this.openDialogs.find(function (dialog) {
              return dialog.id === id;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Only close the dialogs at this level on destroy
            // since the parent service may still be active.
            this._closeDialogs(this._openDialogsAtThisLevel);

            this._afterAllClosedAtThisLevel.complete();

            this._afterOpenedAtThisLevel.complete();
          }
          /**
           * Creates the overlay into which the dialog will be loaded.
           * @param config The dialog configuration.
           * @returns A promise resolving to the OverlayRef for the created overlay.
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay(config) {
            var overlayConfig = this._getOverlayConfig(config);

            return this._overlay.create(overlayConfig);
          }
          /**
           * Creates an overlay config from a dialog config.
           * @param dialogConfig The dialog configuration.
           * @returns The overlay configuration.
           */

        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig(dialogConfig) {
            var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
              positionStrategy: this._overlay.position().global(),
              scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
              panelClass: dialogConfig.panelClass,
              hasBackdrop: dialogConfig.hasBackdrop,
              direction: dialogConfig.direction,
              minWidth: dialogConfig.minWidth,
              minHeight: dialogConfig.minHeight,
              maxWidth: dialogConfig.maxWidth,
              maxHeight: dialogConfig.maxHeight,
              disposeOnNavigation: dialogConfig.closeOnNavigation
            });

            if (dialogConfig.backdropClass) {
              state.backdropClass = dialogConfig.backdropClass;
            }

            return state;
          }
          /**
           * Attaches a dialog container to a dialog's already-created overlay.
           * @param overlay Reference to the dialog's underlying overlay.
           * @param config The dialog configuration.
           * @returns A promise resolving to a ComponentRef for the attached container.
           */

        }, {
          key: "_attachDialogContainer",
          value: function _attachDialogContainer(overlay, config) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;

            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
              parent: userInjector || this._injector,
              providers: [{
                provide: MatDialogConfig,
                useValue: config
              }]
            });

            var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
            var containerRef = overlay.attach(containerPortal);
            return containerRef.instance;
          }
          /**
           * Attaches the user-provided component to the already-created dialog container.
           * @param componentOrTemplateRef The type of component being loaded into the dialog,
           *     or a TemplateRef to instantiate as the content.
           * @param dialogContainer Reference to the wrapping dialog container.
           * @param overlayRef Reference to the overlay in which the dialog resides.
           * @param config The dialog configuration.
           * @returns A promise resolving to the MatDialogRef that should be returned to the user.
           */

        }, {
          key: "_attachDialogContent",
          value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
            // Create a reference to the dialog we're creating in order to give the user a handle
            // to modify and close it.
            var dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);

            if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
              dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null, {
                $implicit: config.data,
                dialogRef: dialogRef
              }));
            } else {
              var injector = this._createInjector(config, dialogRef, dialogContainer);

              var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
              dialogRef.componentInstance = contentRef.instance;
            }

            dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
            return dialogRef;
          }
          /**
           * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
           * of a dialog to close itself and, optionally, to return a value.
           * @param config Config object that is used to construct the dialog.
           * @param dialogRef Reference to the dialog.
           * @param dialogContainer Dialog container element that wraps all of the contents.
           * @returns The custom injector that can be used inside the dialog.
           */

        }, {
          key: "_createInjector",
          value: function _createInjector(config, dialogRef, dialogContainer) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The dialog container should be provided as the dialog container and the dialog's
            // content are created out of the same `ViewContainerRef` and as such, are siblings
            // for injector purposes. To allow the hierarchy that is expected, the dialog
            // container is explicitly provided in the injector.

            var providers = [{
              provide: this._dialogContainerType,
              useValue: dialogContainer
            }, {
              provide: this._dialogDataToken,
              useValue: config.data
            }, {
              provide: this._dialogRefConstructor,
              useValue: dialogRef
            }];

            if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], null))) {
              providers.push({
                provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
                useValue: {
                  value: config.direction,
                  change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()
                }
              });
            }

            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
              parent: userInjector || this._injector,
              providers: providers
            });
          }
          /**
           * Removes a dialog from the array of open dialogs.
           * @param dialogRef Dialog to be removed.
           */

        }, {
          key: "_removeOpenDialog",
          value: function _removeOpenDialog(dialogRef) {
            var index = this.openDialogs.indexOf(dialogRef);

            if (index > -1) {
              this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
              // to a the siblings and emit to the `afterAllClosed` stream.

              if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach(function (previousValue, element) {
                  if (previousValue) {
                    element.setAttribute('aria-hidden', previousValue);
                  } else {
                    element.removeAttribute('aria-hidden');
                  }
                });

                this._ariaHiddenElements.clear();

                this._getAfterAllClosed().next();
              }
            }
          }
          /**
           * Hides all of the content that isn't an overlay from assistive technology.
           */

        }, {
          key: "_hideNonDialogContentFromAssistiveTechnology",
          value: function _hideNonDialogContentFromAssistiveTechnology() {
            var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


            if (overlayContainer.parentElement) {
              var siblings = overlayContainer.parentElement.children;

              for (var i = siblings.length - 1; i > -1; i--) {
                var sibling = siblings[i];

                if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
                  this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

                  sibling.setAttribute('aria-hidden', 'true');
                }
              }
            }
          }
          /** Closes all of the dialogs in an array. */

        }, {
          key: "_closeDialogs",
          value: function _closeDialogs(dialogs) {
            var i = dialogs.length;

            while (i--) {
              // The `_openDialogs` property isn't updated after close until the rxjs subscription
              // runs on the next microtask, in addition to modifying the array as we're going
              // through it. We loop through all of them and call close without assuming that
              // they'll be removed from the list instantaneously.
              dialogs[i].close();
            }
          }
        }, {
          key: "openDialogs",
          get: function get() {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
          }
          /** Stream that emits when a dialog has been opened. */

        }, {
          key: "afterOpened",
          get: function get() {
            return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
          }
        }]);

        return _MatDialogBase;
      }();

      _MatDialogBase.ɵfac = function _MatDialogBase_Factory(t) {
        return new (t || _MatDialogBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]));
      };

      _MatDialogBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatDialogBase
      });

      _MatDialogBase.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: undefined
        }, {
          type: undefined
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
        }, {
          type: undefined
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
          }, {
            type: undefined
          }, {
            type: undefined
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
          }, {
            type: undefined
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]
          }];
        }, null);
      })();
      /**
       * Service to open Material Design modal dialogs.
       */


      var MatDialog = /*#__PURE__*/function (_MatDialogBase2) {
        _inherits(MatDialog, _MatDialogBase2);

        var _super3 = _createSuper(MatDialog);

        function MatDialog(overlay, injector,
        /**
         * @deprecated `_location` parameter to be removed.
         * @breaking-change 10.0.0
         */
        location, defaultOptions, scrollStrategy, parentDialog, overlayContainer) {
          _classCallCheck(this, MatDialog);

          return _super3.call(this, overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA);
        }

        return MatDialog;
      }(_MatDialogBase);

      MatDialog.ɵfac = function MatDialog_Factory(t) {
        return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]));
      };

      MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MatDialog,
        factory: MatDialog.ɵfac
      });

      MatDialog.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: MatDialogConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_DEFAULT_OPTIONS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_SCROLL_STRATEGY]
          }]
        }, {
          type: MatDialog,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: MatDialogConfig,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_DIALOG_DEFAULT_OPTIONS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_DIALOG_SCROLL_STRATEGY]
            }]
          }, {
            type: MatDialog,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
          }];
        }, null);
      })();
      /**
       * Applies default options to the dialog config.
       * @param config Config to be modified.
       * @param defaultOptions Default options provided.
       * @returns The new configuration object.
       */


      function _applyConfigDefaults(config, defaultOptions) {
        return Object.assign(Object.assign({}, defaultOptions), config);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter used to generate unique IDs for dialog elements. */


      var dialogElementUid = 0;
      /**
       * Button that will close the current dialog.
       */

      var MatDialogClose = /*#__PURE__*/function () {
        function MatDialogClose( // The dialog title directive is always used in combination with a `MatDialogRef`.
        // tslint:disable-next-line: lightweight-tokens
        dialogRef, _elementRef, _dialog) {
          _classCallCheck(this, MatDialogClose);

          this.dialogRef = dialogRef;
          this._elementRef = _elementRef;
          this._dialog = _dialog;
          /** Default to "button" to prevents accidental form submits. */

          this.type = 'button';
        }

        _createClass(MatDialogClose, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.dialogRef) {
              // When this directive is included in a dialog via TemplateRef (rather than being
              // in a Component), the DialogRef isn't available via injection because embedded
              // views cannot be given a custom injector. Instead, we look up the DialogRef by
              // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
              // be resolved at constructor time.
              this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

            if (proxiedChange) {
              this.dialogResult = proxiedChange.currentValue;
            }
          }
        }, {
          key: "_onButtonClick",
          value: function _onButtonClick(event) {
            // Determinate the focus origin using the click event, because using the FocusMonitor will
            // result in incorrect origins. Most of the time, close buttons will be auto focused in the
            // dialog, and therefore clicking the button won't result in a focus change. This means that
            // the FocusMonitor won't detect any origin change, and will always output `program`.
            _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
          }
        }]);

        return MatDialogClose;
      }();

      MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
        return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
      };

      MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogClose,
        selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
        hostVars: 2,
        hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
              return ctx._onButtonClick($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
          }
        },
        inputs: {
          type: "type",
          dialogResult: ["mat-dialog-close", "dialogResult"],
          ariaLabel: ["aria-label", "ariaLabel"],
          _matDialogClose: ["matDialogClose", "_matDialogClose"]
        },
        exportAs: ["matDialogClose"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      MatDialogClose.ctorParameters = function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      };

      MatDialogClose.propDecorators = {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dialogResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mat-dialog-close']
        }],
        _matDialogClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matDialogClose']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[mat-dialog-close], [matDialogClose]',
            exportAs: 'matDialogClose',
            host: {
              '(click)': '_onButtonClick($event)',
              '[attr.aria-label]': 'ariaLabel || null',
              '[attr.type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: MatDialogRef,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: MatDialog
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          dialogResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mat-dialog-close']
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
          }],
          _matDialogClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matDialogClose']
          }]
        });
      })();
      /**
       * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
       */


      var MatDialogTitle = /*#__PURE__*/function () {
        function MatDialogTitle( // The dialog title directive is always used in combination with a `MatDialogRef`.
        // tslint:disable-next-line: lightweight-tokens
        _dialogRef, _elementRef, _dialog) {
          _classCallCheck(this, MatDialogTitle);

          this._dialogRef = _dialogRef;
          this._elementRef = _elementRef;
          this._dialog = _dialog;
          this.id = "mat-dialog-title-".concat(dialogElementUid++);
        }

        _createClass(MatDialogTitle, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            if (!this._dialogRef) {
              this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
            }

            if (this._dialogRef) {
              Promise.resolve().then(function () {
                var container = _this7._dialogRef._containerInstance;

                if (container && !container._ariaLabelledBy) {
                  container._ariaLabelledBy = _this7.id;
                }
              });
            }
          }
        }]);

        return MatDialogTitle;
      }();

      MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
        return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
      };

      MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogTitle,
        selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
        hostAttrs: [1, "mat-dialog-title"],
        hostVars: 1,
        hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        },
        exportAs: ["matDialogTitle"]
      });

      MatDialogTitle.ctorParameters = function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      };

      MatDialogTitle.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[mat-dialog-title], [matDialogTitle]',
            exportAs: 'matDialogTitle',
            host: {
              'class': 'mat-dialog-title',
              '[id]': 'id'
            }
          }]
        }], function () {
          return [{
            type: MatDialogRef,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: MatDialog
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Scrollable content container of a dialog.
       */


      var MatDialogContent = function MatDialogContent() {
        _classCallCheck(this, MatDialogContent);
      };

      MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
        return new (t || MatDialogContent)();
      };

      MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogContent,
        selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
        hostAttrs: [1, "mat-dialog-content"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
            host: {
              'class': 'mat-dialog-content'
            }
          }]
        }], null, null);
      })();
      /**
       * Container for the bottom action buttons in a dialog.
       * Stays fixed to the bottom when scrolling.
       */


      var MatDialogActions = function MatDialogActions() {
        _classCallCheck(this, MatDialogActions);
      };

      MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
        return new (t || MatDialogActions)();
      };

      MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogActions,
        selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
        hostAttrs: [1, "mat-dialog-actions"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
            host: {
              'class': 'mat-dialog-actions'
            }
          }]
        }], null, null);
      })();
      /**
       * Finds the closest MatDialogRef to an element by looking at the DOM.
       * @param element Element relative to which to look for a dialog.
       * @param openDialogs References to the currently-open dialogs.
       */


      function getClosestDialog(element, openDialogs) {
        var parent = element.nativeElement.parentElement;

        while (parent && !parent.classList.contains('mat-dialog-container')) {
          parent = parent.parentElement;
        }

        return parent ? openDialogs.find(function (dialog) {
          return dialog.id === parent.id;
        }) : null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDialogModule = function MatDialogModule() {
        _classCallCheck(this, MatDialogModule);
      };

      MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatDialogModule
      });
      MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatDialogModule_Factory(t) {
          return new (t || MatDialogModule)();
        },
        providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, {
          declarations: function declarations() {
            return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
            providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
            entryComponents: [MatDialogContainer]
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
      //# sourceMappingURL=dialog.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js ***!
      \*************************************************************************/

    /*! exports provided: MatDivider, MatDividerModule */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015DividerJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDivider", function () {
        return MatDivider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDividerModule", function () {
        return MatDividerModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDivider = /*#__PURE__*/function () {
        function MatDivider() {
          _classCallCheck(this, MatDivider);

          this._vertical = false;
          this._inset = false;
        }
        /** Whether the divider is vertically aligned. */


        _createClass(MatDivider, [{
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /** Whether the divider is an inset divider. */

        }, {
          key: "inset",
          get: function get() {
            return this._inset;
          },
          set: function set(value) {
            this._inset = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatDivider;
      }();

      MatDivider.ɵfac = function MatDivider_Factory(t) {
        return new (t || MatDivider)();
      };

      MatDivider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDivider,
        selectors: [["mat-divider"]],
        hostAttrs: ["role", "separator", 1, "mat-divider"],
        hostVars: 7,
        hostBindings: function MatDivider_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
          }
        },
        inputs: {
          vertical: "vertical",
          inset: "inset"
        },
        decls: 0,
        vars: 0,
        template: function MatDivider_Template(rf, ctx) {},
        styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      MatDivider.propDecorators = {
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDivider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-divider',
            host: {
              'role': 'separator',
              '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
              '[class.mat-divider-vertical]': 'vertical',
              '[class.mat-divider-horizontal]': '!vertical',
              '[class.mat-divider-inset]': 'inset',
              'class': 'mat-divider'
            },
            template: '',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"]
          }]
        }], function () {
          return [];
        }, {
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDividerModule = function MatDividerModule() {
        _classCallCheck(this, MatDividerModule);
      };

      MatDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatDividerModule
      });
      MatDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatDividerModule_Factory(t) {
          return new (t || MatDividerModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatDividerModule, {
          declarations: function declarations() {
            return [MatDivider];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDividerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatDivider]
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
      //# sourceMappingURL=divider.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js ***!
      \**********************************************************************/

    /*! exports provided: MAT_LIST, MAT_NAV_LIST, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListItem, MatListModule, MatListOption, MatListSubheaderCssMatStyler, MatNavList, MatSelectionList, MatSelectionListChange */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ListJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_LIST", function () {
        return MAT_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_NAV_LIST", function () {
        return MAT_NAV_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SELECTION_LIST_VALUE_ACCESSOR", function () {
        return MAT_SELECTION_LIST_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatList", function () {
        return MatList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListAvatarCssMatStyler", function () {
        return MatListAvatarCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListIconCssMatStyler", function () {
        return MatListIconCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListItem", function () {
        return MatListItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListModule", function () {
        return MatListModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListOption", function () {
        return MatListOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatListSubheaderCssMatStyler", function () {
        return MatListSubheaderCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNavList", function () {
        return MatNavList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectionList", function () {
        return MatSelectionList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSelectionListChange", function () {
        return MatSelectionListChange;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatList.

      /** @docs-private */


      var _c0 = ["*"];
      var _c1 = ".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n";
      var _c2 = [[["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
      var _c3 = ["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]", "[mat-line], [matLine]", "*"];
      var _c4 = ["text"];

      function MatListOption_mat_pseudo_checkbox_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-pseudo-checkbox", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
        }
      }

      var _c5 = ["*", [["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]]];
      var _c6 = ["*", "[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]"];

      var MatListBase = function MatListBase() {
        _classCallCheck(this, MatListBase);
      };

      var _MatListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListBase)); // Boilerplate for applying mixins to MatListItem.

      /** @docs-private */


      var MatListItemBase = function MatListItemBase() {
        _classCallCheck(this, MatListItemBase);
      };

      var _MatListItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListItemBase);
      /**
       * Injection token that can be used to inject instances of `MatList`. It serves as
       * alternative token to the actual `MatList` class which could cause unnecessary
       * retention of the class and its component metadata.
       */


      var MAT_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatList');
      /**
       * Injection token that can be used to inject instances of `MatNavList`. It serves as
       * alternative token to the actual `MatNavList` class which could cause unnecessary
       * retention of the class and its component metadata.
       */

      var MAT_NAV_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatNavList');

      var MatNavList = /*#__PURE__*/function (_MatListMixinBase2) {
        _inherits(MatNavList, _MatListMixinBase2);

        var _super4 = _createSuper(MatNavList);

        function MatNavList() {
          var _this8;

          _classCallCheck(this, MatNavList);

          _this8 = _super4.apply(this, arguments);
          /** Emits when the state of the list changes. */

          _this8._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          return _this8;
        }

        _createClass(MatNavList, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }]);

        return MatNavList;
      }(_MatListMixinBase);

      MatNavList.ɵfac = function MatNavList_Factory(t) {
        return ɵMatNavList_BaseFactory(t || MatNavList);
      };

      MatNavList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatNavList,
        selectors: [["mat-nav-list"]],
        hostAttrs: ["role", "navigation", 1, "mat-nav-list", "mat-list-base"],
        inputs: {
          disableRipple: "disableRipple",
          disabled: "disabled"
        },
        exportAs: ["matNavList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_NAV_LIST,
          useExisting: MatNavList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatNavList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        styles: [_c1],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatNavList_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatNavList);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatNavList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-nav-list',
            exportAs: 'matNavList',
            host: {
              'role': 'navigation',
              'class': 'mat-nav-list mat-list-base'
            },
            template: "<ng-content></ng-content>\n\n",
            inputs: ['disableRipple', 'disabled'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_NAV_LIST,
              useExisting: MatNavList
            }],
            styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
          }]
        }], null, null);
      })();

      var MatList = /*#__PURE__*/function (_MatListMixinBase3) {
        _inherits(MatList, _MatListMixinBase3);

        var _super5 = _createSuper(MatList);

        function MatList(_elementRef) {
          var _this9;

          _classCallCheck(this, MatList);

          _this9 = _super5.call(this);
          _this9._elementRef = _elementRef;
          /** Emits when the state of the list changes. */

          _this9._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();

          if (_this9._getListType() === 'action-list') {
            _elementRef.nativeElement.classList.add('mat-action-list');
          }

          return _this9;
        }

        _createClass(MatList, [{
          key: "_getListType",
          value: function _getListType() {
            var nodeName = this._elementRef.nativeElement.nodeName.toLowerCase();

            if (nodeName === 'mat-list') {
              return 'list';
            }

            if (nodeName === 'mat-action-list') {
              return 'action-list';
            }

            return null;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }]);

        return MatList;
      }(_MatListMixinBase);

      MatList.ɵfac = function MatList_Factory(t) {
        return new (t || MatList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      MatList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatList,
        selectors: [["mat-list"], ["mat-action-list"]],
        hostAttrs: [1, "mat-list", "mat-list-base"],
        inputs: {
          disableRipple: "disableRipple",
          disabled: "disabled"
        },
        exportAs: ["matList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_LIST,
          useExisting: MatList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        styles: [_c1],
        encapsulation: 2,
        changeDetection: 0
      });

      MatList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-list, mat-action-list',
            exportAs: 'matList',
            template: "<ng-content></ng-content>\n\n",
            host: {
              'class': 'mat-list mat-list-base'
            },
            inputs: ['disableRipple', 'disabled'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_LIST,
              useExisting: MatList
            }],
            styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatListAvatarCssMatStyler = function MatListAvatarCssMatStyler() {
        _classCallCheck(this, MatListAvatarCssMatStyler);
      };

      MatListAvatarCssMatStyler.ɵfac = function MatListAvatarCssMatStyler_Factory(t) {
        return new (t || MatListAvatarCssMatStyler)();
      };

      MatListAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatListAvatarCssMatStyler,
        selectors: [["", "mat-list-avatar", ""], ["", "matListAvatar", ""]],
        hostAttrs: [1, "mat-list-avatar"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListAvatarCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[mat-list-avatar], [matListAvatar]',
            host: {
              'class': 'mat-list-avatar'
            }
          }]
        }], null, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatListIconCssMatStyler = function MatListIconCssMatStyler() {
        _classCallCheck(this, MatListIconCssMatStyler);
      };

      MatListIconCssMatStyler.ɵfac = function MatListIconCssMatStyler_Factory(t) {
        return new (t || MatListIconCssMatStyler)();
      };

      MatListIconCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatListIconCssMatStyler,
        selectors: [["", "mat-list-icon", ""], ["", "matListIcon", ""]],
        hostAttrs: [1, "mat-list-icon"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListIconCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[mat-list-icon], [matListIcon]',
            host: {
              'class': 'mat-list-icon'
            }
          }]
        }], null, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatListSubheaderCssMatStyler = function MatListSubheaderCssMatStyler() {
        _classCallCheck(this, MatListSubheaderCssMatStyler);
      };

      MatListSubheaderCssMatStyler.ɵfac = function MatListSubheaderCssMatStyler_Factory(t) {
        return new (t || MatListSubheaderCssMatStyler)();
      };

      MatListSubheaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatListSubheaderCssMatStyler,
        selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
        hostAttrs: [1, "mat-subheader"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListSubheaderCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[mat-subheader], [matSubheader]',
            host: {
              'class': 'mat-subheader'
            }
          }]
        }], null, null);
      })();
      /** An item within a Material Design list. */


      var MatListItem = /*#__PURE__*/function (_MatListItemMixinBase2) {
        _inherits(MatListItem, _MatListItemMixinBase2);

        var _super6 = _createSuper(MatListItem);

        function MatListItem(_element, _changeDetectorRef, navList, list) {
          var _this10;

          _classCallCheck(this, MatListItem);

          _this10 = _super6.call(this);
          _this10._element = _element;
          _this10._isInteractiveList = false;
          _this10._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          _this10._disabled = false;
          _this10._isInteractiveList = !!(navList || list && list._getListType() === 'action-list');
          _this10._list = navList || list; // If no type attribute is specified for <button>, set it to "button".
          // If a type attribute is already specified, do nothing.

          var element = _this10._getHostElement();

          if (element.nodeName.toLowerCase() === 'button' && !element.hasAttribute('type')) {
            element.setAttribute('type', 'button');
          }

          if (_this10._list) {
            // React to changes in the state of the parent list since
            // some of the item's properties depend on it (e.g. `disableRipple`).
            _this10._list._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this10._destroyed)).subscribe(function () {
              _changeDetectorRef.markForCheck();
            });
          }

          return _this10;
        }
        /** Whether the option is disabled. */


        _createClass(MatListItem, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Whether this list item should show a ripple effect when clicked. */

        }, {
          key: "_isRippleDisabled",
          value: function _isRippleDisabled() {
            return !this._isInteractiveList || this.disableRipple || !!(this._list && this._list.disableRipple);
          }
          /** Retrieves the DOM element of the component host. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._element.nativeElement;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || !!(this._list && this._list.disabled);
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatListItem;
      }(_MatListItemMixinBase);

      MatListItem.ɵfac = function MatListItem_Factory(t) {
        return new (t || MatListItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_NAV_LIST, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_LIST, 8));
      };

      MatListItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatListItem,
        selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
        contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          }
        },
        hostAttrs: [1, "mat-list-item", "mat-focus-indicator"],
        hostVars: 6,
        hostBindings: function MatListItem_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-avatar", ctx._avatar || ctx._icon)("mat-list-item-with-avatar", ctx._avatar || ctx._icon);
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          disabled: "disabled"
        },
        exportAs: ["matListItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c3,
        decls: 6,
        vars: 2,
        consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-list-text"]],
        template: function MatListItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MatListItem.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: MatNavList,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_NAV_LIST]
          }]
        }, {
          type: MatList,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_LIST]
          }]
        }];
      };

      MatListItem.propDecorators = {
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
            descendants: true
          }]
        }],
        _avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListAvatarCssMatStyler]
        }],
        _icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListIconCssMatStyler]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-list-item, a[mat-list-item], button[mat-list-item]',
            exportAs: 'matListItem',
            host: {
              'class': 'mat-list-item mat-focus-indicator',
              '[class.mat-list-item-disabled]': 'disabled',
              // @breaking-change 8.0.0 Remove `mat-list-item-avatar` in favor of `mat-list-item-with-avatar`.
              '[class.mat-list-item-avatar]': '_avatar || _icon',
              '[class.mat-list-item-with-avatar]': '_avatar || _icon'
            },
            inputs: ['disableRipple'],
            template: "<div class=\"mat-list-item-content\">\n  <div class=\"mat-list-item-ripple\" mat-ripple\n       [matRippleTrigger]=\"_getHostElement()\"\n       [matRippleDisabled]=\"_isRippleDisabled()\">\n  </div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n  <div class=\"mat-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n\n  <ng-content></ng-content>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: MatNavList,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_NAV_LIST]
            }]
          }, {
            type: MatList,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_LIST]
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
              descendants: true
            }]
          }],
          _avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListAvatarCssMatStyler]
          }],
          _icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListIconCssMatStyler]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSelectionListBase = function MatSelectionListBase() {
        _classCallCheck(this, MatSelectionListBase);
      };

      var _MatSelectionListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatSelectionListBase);

      var MatListOptionBase = function MatListOptionBase() {
        _classCallCheck(this, MatListOptionBase);
      };

      var _MatListOptionMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListOptionBase);
      /** @docs-private */


      var MAT_SELECTION_LIST_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSelectionList;
        }),
        multi: true
      };
      /** Change event that is being fired whenever the selected state of an option changes. */

      var MatSelectionListChange = function MatSelectionListChange(
      /** Reference to the selection list that emitted the event. */
      source,
      /** Reference to the option that has been changed. */
      option) {
        _classCallCheck(this, MatSelectionListChange);

        this.source = source;
        this.option = option;
      };
      /**
       * Component for list-options of selection-list. Each list-option can automatically
       * generate a checkbox and can put current item into the selectionModel of selection-list
       * if the current item is selected.
       */


      var MatListOption = /*#__PURE__*/function (_MatListOptionMixinBa) {
        _inherits(MatListOption, _MatListOptionMixinBa);

        var _super7 = _createSuper(MatListOption);

        function MatListOption(_element, _changeDetector,
        /** @docs-private */
        selectionList) {
          var _this11;

          _classCallCheck(this, MatListOption);

          _this11 = _super7.call(this);
          _this11._element = _element;
          _this11._changeDetector = _changeDetector;
          _this11.selectionList = selectionList;
          _this11._selected = false;
          _this11._disabled = false;
          _this11._hasFocus = false;
          /** Whether the label should appear before or after the checkbox. Defaults to 'after' */

          _this11.checkboxPosition = 'after';
          /**
           * This is set to true after the first OnChanges cycle so we don't clear the value of `selected`
           * in the first cycle.
           */

          _this11._inputsInitialized = false;
          return _this11;
        }
        /** Theme color of the list option. This sets the color of the checkbox. */


        _createClass(MatListOption, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            var list = this.selectionList;

            if (list._value && list._value.some(function (value) {
              return list.compareWith(value, _this12._value);
            })) {
              this._setSelected(true);
            }

            var wasSelected = this._selected; // List options that are selected at initialization can't be reported properly to the form
            // control. This is because it takes some time until the selection-list knows about all
            // available options. Also it can happen that the ControlValueAccessor has an initial value
            // that should be used instead. Deferring the value change report to the next tick ensures
            // that the form control value is not being overwritten.

            Promise.resolve().then(function () {
              if (_this12._selected || wasSelected) {
                _this12.selected = true;

                _this12._changeDetector.markForCheck();
              }
            });
            this._inputsInitialized = true;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this13 = this;

            if (this.selected) {
              // We have to delay this until the next tick in order
              // to avoid changed after checked errors.
              Promise.resolve().then(function () {
                _this13.selected = false;
              });
            }

            var hadFocus = this._hasFocus;

            var newActiveItem = this.selectionList._removeOptionFromList(this); // Only move focus if this option was focused at the time it was destroyed.


            if (hadFocus && newActiveItem) {
              newActiveItem.focus();
            }
          }
          /** Toggles the selection state of the option. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.selected = !this.selected;
          }
          /** Allows for programmatic focusing of the option. */

        }, {
          key: "focus",
          value: function focus() {
            this._element.nativeElement.focus();
          }
          /**
           * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
           * @docs-private
           */

        }, {
          key: "getLabel",
          value: function getLabel() {
            return this._text ? this._text.nativeElement.textContent || '' : '';
          }
          /** Whether this list item should show a ripple effect when clicked. */

        }, {
          key: "_isRippleDisabled",
          value: function _isRippleDisabled() {
            return this.disabled || this.disableRipple || this.selectionList.disableRipple;
          }
        }, {
          key: "_handleClick",
          value: function _handleClick() {
            if (!this.disabled && (this.selectionList.multiple || !this.selected)) {
              this.toggle(); // Emit a change event if the selected state of the option changed through user interaction.

              this.selectionList._emitChangeEvent(this);
            }
          }
        }, {
          key: "_handleFocus",
          value: function _handleFocus() {
            this.selectionList._setFocusedOption(this);

            this._hasFocus = true;
          }
        }, {
          key: "_handleBlur",
          value: function _handleBlur() {
            this.selectionList._onTouched();

            this._hasFocus = false;
          }
          /** Retrieves the DOM element of the component host. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._element.nativeElement;
          }
          /** Sets the selected state of the option. Returns whether the value has changed. */

        }, {
          key: "_setSelected",
          value: function _setSelected(selected) {
            if (selected === this._selected) {
              return false;
            }

            this._selected = selected;

            if (selected) {
              this.selectionList.selectedOptions.select(this);
            } else {
              this.selectionList.selectedOptions.deselect(this);
            }

            this._changeDetector.markForCheck();

            return true;
          }
          /**
           * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
           * used to trigger an update of the list option if the disabled state of the selection list
           * changed.
           */

        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            this._changeDetector.markForCheck();
          }
        }, {
          key: "color",
          get: function get() {
            return this._color || this.selectionList.color;
          },
          set: function set(newValue) {
            this._color = newValue;
          }
          /** Value of the option */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(newValue) {
            if (this.selected && !this.selectionList.compareWith(newValue, this.value) && this._inputsInitialized) {
              this.selected = false;
            }

            this._value = newValue;
          }
          /** Whether the option is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this.selectionList && this.selectionList.disabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;

              this._changeDetector.markForCheck();
            }
          }
          /** Whether the option is selected. */

        }, {
          key: "selected",
          get: function get() {
            return this.selectionList.selectedOptions.isSelected(this);
          },
          set: function set(value) {
            var isSelected = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (isSelected !== this._selected) {
              this._setSelected(isSelected);

              this.selectionList._reportValueChange();
            }
          }
        }]);

        return MatListOption;
      }(_MatListOptionMixinBase);

      MatListOption.ɵfac = function MatListOption_Factory(t) {
        return new (t || MatListOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSelectionList;
        })));
      };

      MatListOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatListOption,
        selectors: [["mat-list-option"]],
        contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          }
        },
        viewQuery: function MatListOption_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._text = _t.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-list-item", "mat-list-option", "mat-focus-indicator"],
        hostVars: 15,
        hostBindings: function MatListOption_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatListOption_focus_HostBindingHandler() {
              return ctx._handleFocus();
            })("blur", function MatListOption_blur_HostBindingHandler() {
              return ctx._handleBlur();
            })("click", function MatListOption_click_HostBindingHandler() {
              return ctx._handleClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx.selected)("aria-disabled", ctx.disabled)("tabindex", 0 - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-with-avatar", ctx._avatar || ctx._icon)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("mat-list-single-selected-option", ctx.selected && !ctx.selectionList.multiple);
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          checkboxPosition: "checkboxPosition",
          color: "color",
          value: "value",
          selected: "selected",
          disabled: "disabled"
        },
        exportAs: ["matListOption"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c6,
        decls: 7,
        vars: 5,
        consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [3, "state", "disabled", 4, "ngIf"], [1, "mat-list-text"], ["text", ""], [3, "state", "disabled"]],
        template: function MatListOption_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatListOption_mat_pseudo_checkbox_2_Template, 1, 2, "mat-pseudo-checkbox", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-content-reverse", ctx.checkboxPosition == "after");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectionList.multiple);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckbox"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MatListOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: MatSelectionList,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return MatSelectionList;
            })]
          }]
        }];
      };

      MatListOption.propDecorators = {
        _avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListAvatarCssMatStyler]
        }],
        _icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListIconCssMatStyler]
        }],
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
            descendants: true
          }]
        }],
        _text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['text']
        }],
        checkboxPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-list-option',
            exportAs: 'matListOption',
            inputs: ['disableRipple'],
            host: {
              'role': 'option',
              'class': 'mat-list-item mat-list-option mat-focus-indicator',
              '(focus)': '_handleFocus()',
              '(blur)': '_handleBlur()',
              '(click)': '_handleClick()',
              '[class.mat-list-item-disabled]': 'disabled',
              '[class.mat-list-item-with-avatar]': '_avatar || _icon',
              // Manually set the "primary" or "warn" class if the color has been explicitly
              // set to "primary" or "warn". The pseudo checkbox picks up these classes for
              // its theme.
              '[class.mat-primary]': 'color === "primary"',
              // Even though accent is the default, we need to set this class anyway, because the  list might
              // be placed inside a parent that has one of the other colors with a higher specificity.
              '[class.mat-accent]': 'color !== "primary" && color !== "warn"',
              '[class.mat-warn]': 'color === "warn"',
              '[class.mat-list-single-selected-option]': 'selected && !selectionList.multiple',
              '[attr.aria-selected]': 'selected',
              '[attr.aria-disabled]': 'disabled',
              '[attr.tabindex]': '-1'
            },
            template: "<div class=\"mat-list-item-content\"\n  [class.mat-list-item-content-reverse]=\"checkboxPosition == 'after'\">\n\n  <div mat-ripple\n    class=\"mat-list-item-ripple\"\n    [matRippleTrigger]=\"_getHostElement()\"\n    [matRippleDisabled]=\"_isRippleDisabled()\"></div>\n\n  <mat-pseudo-checkbox\n    *ngIf=\"selectionList.multiple\"\n    [state]=\"selected ? 'checked' : 'unchecked'\"\n    [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n  <div class=\"mat-list-text\" #text><ng-content></ng-content></div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: MatSelectionList,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return MatSelectionList;
              })]
            }]
          }];
        }, {
          checkboxPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListAvatarCssMatStyler]
          }],
          _icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatListIconCssMatStyler]
          }],
          _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
              descendants: true
            }]
          }],
          _text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['text']
          }]
        });
      })();
      /**
       * Material Design list component where each item is a selectable option. Behaves as a listbox.
       */


      var MatSelectionList = /*#__PURE__*/function (_MatSelectionListMixi) {
        _inherits(MatSelectionList, _MatSelectionListMixi);

        var _super8 = _createSuper(MatSelectionList);

        function MatSelectionList(_element, // @breaking-change 11.0.0 Remove `tabIndex` parameter.
        tabIndex, _changeDetector, // @breaking-change 11.0.0 `_focusMonitor` parameter to become required.
        _focusMonitor) {
          var _this14;

          _classCallCheck(this, MatSelectionList);

          _this14 = _super8.call(this);
          _this14._element = _element;
          _this14._changeDetector = _changeDetector;
          _this14._focusMonitor = _focusMonitor;
          _this14._multiple = true;
          _this14._contentInitialized = false;
          /** Emits a change event whenever the selected state of an option changes. */

          _this14.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Tabindex of the selection list.
           * @breaking-change 11.0.0 Remove `tabIndex` input.
           */

          _this14.tabIndex = 0;
          /** Theme color of the selection list. This sets the checkbox color for all list options. */

          _this14.color = 'accent';
          /**
           * Function used for comparing an option against the selected value when determining which
           * options should appear as selected. The first argument is the value of an options. The second
           * one is a value from the selected value. A boolean must be returned.
           */

          _this14.compareWith = function (a1, a2) {
            return a1 === a2;
          };

          _this14._disabled = false;
          /** The currently selected options. */

          _this14.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](_this14._multiple);
          /** The tabindex of the selection list. */

          _this14._tabIndex = -1;
          /** View to model callback that should be called whenever the selected options change. */

          _this14._onChange = function (_) {};
          /** Emits when the list has been destroyed. */


          _this14._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /** View to model callback that should be called if the list or its options lost focus. */

          _this14._onTouched = function () {};

          return _this14;
        }
        /** Whether the selection list is disabled. */


        _createClass(MatSelectionList, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this15 = this;

            var _a;

            this._contentInitialized = true;
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this.options).withWrap().withTypeAhead().withHomeAndEnd() // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
            // screenreader users, that allows reading the different options of the list.
            .skipPredicate(function () {
              return false;
            }).withAllowedModifierKeys(['shiftKey']);

            if (this._value) {
              this._setOptionsFromValues(this._value);
            } // If the user attempts to tab out of the selection list, allow focus to escape.


            this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this15._allowFocusEscape();
            }); // When the number of options change, update the tabindex of the selection list.


            this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this15._updateTabIndex();
            }); // Sync external changes to the model back to the options.

            this.selectedOptions.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function (event) {
              if (event.added) {
                var _iterator = _createForOfIteratorHelper(event.added),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;
                    item.selected = true;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }

              if (event.removed) {
                var _iterator2 = _createForOfIteratorHelper(event.removed),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var _item = _step2.value;
                    _item.selected = false;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            }); // @breaking-change 11.0.0 Remove null assertion once _focusMonitor is required.

            (_a = this._focusMonitor) === null || _a === void 0 ? void 0 : _a.monitor(this._element).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(function (origin) {
              if (origin === 'keyboard' || origin === 'program') {
                var activeIndex = _this15._keyManager.activeItemIndex;

                if (!activeIndex || activeIndex === -1) {
                  // If there is no active index, set focus to the first option.
                  _this15._keyManager.setFirstItemActive();
                } else {
                  // Otherwise, set focus to the active option.
                  _this15._keyManager.setActiveItem(activeIndex);
                }
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var disableRippleChanges = changes['disableRipple'];
            var colorChanges = changes['color'];

            if (disableRippleChanges && !disableRippleChanges.firstChange || colorChanges && !colorChanges.firstChange) {
              this._markOptionsForCheck();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a; // @breaking-change 11.0.0 Remove null assertion once _focusMonitor is required.


            (_a = this._focusMonitor) === null || _a === void 0 ? void 0 : _a.stopMonitoring(this._element);

            this._destroyed.next();

            this._destroyed.complete();

            this._isDestroyed = true;
          }
          /** Focuses the selection list. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._element.nativeElement.focus(options);
          }
          /** Selects all of the options. */

        }, {
          key: "selectAll",
          value: function selectAll() {
            this._setAllOptionsSelected(true);
          }
          /** Deselects all of the options. */

        }, {
          key: "deselectAll",
          value: function deselectAll() {
            this._setAllOptionsSelected(false);
          }
          /** Sets the focused option of the selection-list. */

        }, {
          key: "_setFocusedOption",
          value: function _setFocusedOption(option) {
            this._keyManager.updateActiveItem(option);
          }
          /**
           * Removes an option from the selection list and updates the active item.
           * @returns Currently-active item.
           */

        }, {
          key: "_removeOptionFromList",
          value: function _removeOptionFromList(option) {
            var optionIndex = this._getOptionIndex(option);

            if (optionIndex > -1 && this._keyManager.activeItemIndex === optionIndex) {
              // Check whether the option is the last item
              if (optionIndex > 0) {
                this._keyManager.updateActiveItem(optionIndex - 1);
              } else if (optionIndex === 0 && this.options.length > 1) {
                this._keyManager.updateActiveItem(Math.min(optionIndex + 1, this.options.length - 1));
              }
            }

            return this._keyManager.activeItem;
          }
          /** Passes relevant key presses to our key manager. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            var keyCode = event.keyCode;
            var manager = this._keyManager;
            var previousFocusIndex = manager.activeItemIndex;
            var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event);

            switch (keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
                if (!hasModifier && !manager.isTyping()) {
                  this._toggleFocusedOption(); // Always prevent space from scrolling the page since the list has focus


                  event.preventDefault();
                }

                break;

              default:
                // The "A" key gets special treatment, because it's used for the "select all" functionality.
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["A"] && this.multiple && Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event, 'ctrlKey') && !manager.isTyping()) {
                  var shouldSelect = this.options.some(function (option) {
                    return !option.disabled && !option.selected;
                  });

                  this._setAllOptionsSelected(shouldSelect, true);

                  event.preventDefault();
                } else {
                  manager.onKeydown(event);
                }

            }

            if (this.multiple && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]) && event.shiftKey && manager.activeItemIndex !== previousFocusIndex) {
              this._toggleFocusedOption();
            }
          }
          /** Reports a value change to the ControlValueAccessor */

        }, {
          key: "_reportValueChange",
          value: function _reportValueChange() {
            // Stop reporting value changes after the list has been destroyed. This avoids
            // cases where the list might wrongly reset its value once it is removed, but
            // the form control is still live.
            if (this.options && !this._isDestroyed) {
              var value = this._getSelectedOptionValues();

              this._onChange(value);

              this._value = value;
            }
          }
          /** Emits a change event if the selected state of an option changed. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent(option) {
            this.selectionChange.emit(new MatSelectionListChange(this, option));
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "writeValue",
          value: function writeValue(values) {
            this._value = values;

            if (this.options) {
              this._setOptionsFromValues(values || []);
            }
          }
          /** Implemented as a part of ControlValueAccessor. */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /** Sets the selected options based on the specified values. */

        }, {
          key: "_setOptionsFromValues",
          value: function _setOptionsFromValues(values) {
            var _this16 = this;

            this.options.forEach(function (option) {
              return option._setSelected(false);
            });
            values.forEach(function (value) {
              var correspondingOption = _this16.options.find(function (option) {
                // Skip options that are already in the model. This allows us to handle cases
                // where the same primitive value is selected multiple times.
                return option.selected ? false : _this16.compareWith(option.value, value);
              });

              if (correspondingOption) {
                correspondingOption._setSelected(true);
              }
            });
          }
          /** Returns the values of the selected options. */

        }, {
          key: "_getSelectedOptionValues",
          value: function _getSelectedOptionValues() {
            return this.options.filter(function (option) {
              return option.selected;
            }).map(function (option) {
              return option.value;
            });
          }
          /** Toggles the state of the currently focused option if enabled. */

        }, {
          key: "_toggleFocusedOption",
          value: function _toggleFocusedOption() {
            var focusedIndex = this._keyManager.activeItemIndex;

            if (focusedIndex != null && this._isValidIndex(focusedIndex)) {
              var focusedOption = this.options.toArray()[focusedIndex];

              if (focusedOption && !focusedOption.disabled && (this._multiple || !focusedOption.selected)) {
                focusedOption.toggle(); // Emit a change event because the focused option changed its state through user
                // interaction.

                this._emitChangeEvent(focusedOption);
              }
            }
          }
          /**
           * Sets the selected state on all of the options
           * and emits an event if anything changed.
           */

        }, {
          key: "_setAllOptionsSelected",
          value: function _setAllOptionsSelected(isSelected, skipDisabled) {
            // Keep track of whether anything changed, because we only want to
            // emit the changed event when something actually changed.
            var hasChanged = false;
            this.options.forEach(function (option) {
              if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
                hasChanged = true;
              }
            });

            if (hasChanged) {
              this._reportValueChange();
            }
          }
          /**
           * Utility to ensure all indexes are valid.
           * @param index The index to be checked.
           * @returns True if the index is valid for our list of options.
           */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            return index >= 0 && index < this.options.length;
          }
          /** Returns the index of the specified list option. */

        }, {
          key: "_getOptionIndex",
          value: function _getOptionIndex(option) {
            return this.options.toArray().indexOf(option);
          }
          /** Marks all the options to be checked in the next change detection run. */

        }, {
          key: "_markOptionsForCheck",
          value: function _markOptionsForCheck() {
            if (this.options) {
              this.options.forEach(function (option) {
                return option._markForCheck();
              });
            }
          }
          /**
           * Removes the tabindex from the selection list and resets it back afterwards, allowing the user
           * to tab out of it. This prevents the list from capturing focus and redirecting it back within
           * the list, creating a focus trap if it user tries to tab away.
           */

        }, {
          key: "_allowFocusEscape",
          value: function _allowFocusEscape() {
            var _this17 = this;

            this._tabIndex = -1;
            setTimeout(function () {
              _this17._tabIndex = 0;

              _this17._changeDetector.markForCheck();
            });
          }
          /** Updates the tabindex based upon if the selection list is empty. */

        }, {
          key: "_updateTabIndex",
          value: function _updateTabIndex() {
            this._tabIndex = this.options.length === 0 ? -1 : 0;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); // The `MatSelectionList` and `MatListOption` are using the `OnPush` change detection
            // strategy. Therefore the options will not check for any changes if the `MatSelectionList`
            // changed its state. Since we know that a change to `disabled` property of the list affects
            // the state of the options, we manually mark each option for check.

            this._markOptionsForCheck();
          }
          /** Whether selection is limited to one or multiple items (default multiple). */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (newValue !== this._multiple) {
              if (this._contentInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw new Error('Cannot change `multiple` mode of mat-selection-list after initialization.');
              }

              this._multiple = newValue;
              this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](this._multiple, this.selectedOptions.selected);
            }
          }
        }]);

        return MatSelectionList;
      }(_MatSelectionListMixinBase);

      MatSelectionList.ɵfac = function MatSelectionList_Factory(t) {
        return new (t || MatSelectionList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]));
      };

      MatSelectionList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatSelectionList,
        selectors: [["mat-selection-list"]],
        contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListOption, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.options = _t);
          }
        },
        hostAttrs: ["role", "listbox", 1, "mat-selection-list", "mat-list-base"],
        hostVars: 3,
        hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-multiselectable", ctx.multiple)("aria-disabled", ctx.disabled.toString())("tabindex", ctx._tabIndex);
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          tabIndex: "tabIndex",
          color: "color",
          compareWith: "compareWith",
          disabled: "disabled",
          multiple: "multiple"
        },
        outputs: {
          selectionChange: "selectionChange"
        },
        exportAs: ["matSelectionList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SELECTION_LIST_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatSelectionList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        styles: [_c1],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSelectionList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
        }];
      };

      MatSelectionList.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatListOption, {
            descendants: true
          }]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSelectionList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-selection-list',
            exportAs: 'matSelectionList',
            inputs: ['disableRipple'],
            host: {
              'role': 'listbox',
              'class': 'mat-selection-list mat-list-base',
              '(keydown)': '_keydown($event)',
              '[attr.aria-multiselectable]': 'multiple',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.tabindex]': '_tabIndex'
            },
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatListOption, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatListModule = function MatListModule() {
        _classCallCheck(this, MatListModule);
      };

      MatListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatListModule
      });
      MatListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatListModule_Factory(t) {
          return new (t || MatListModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatListModule, {
          declarations: function declarations() {
            return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
          },
          exports: function exports() {
            return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            exports: [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]],
            declarations: [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption]
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
      //# sourceMappingURL=list.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-admin-reporting-admin-reporting-module~modules-material-material-module~modules-user~1cb84dfc-es5.js.map